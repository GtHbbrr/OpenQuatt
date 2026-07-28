import { getIncidentDisplayLabel } from "../core/incident-monitoring.js";

const REASONS = Object.fromEntries([
  ["hp_fault", "Warmtepompstoring", "Een bevestigde ODU-storing bepaalt beschikbaarheid en systeemreactie."],
  ["hp_protection", "Warmtepompbeveiliging", "De HP begrenst of blokkeert zichzelf tot de voorwaarde herstelt."],
  ["hp_preheat", "Eerste-startvoorverwarming", "De compressor wacht op de vereiste voorverwarming."],
  ["hp_link_loss", "HP-verbinding bevestigd weg", "Een korte hapering is eerst gefilterd; bevestigde uitval wijzigt de beschikbaarheid."],
  ["hp_start_failed", "Warmtepompstart niet bevestigd", "De start leidde niet op tijd tot een draaiende compressor."],
  ["hp_stop_unconfirmed", "Warmtepompstop niet bevestigd", "De veilige stopstatus is nog niet bevestigd."],
  ["hp_persistence_failure", "Resetstatus niet veilig opgeslagen", "OpenQuatt blokkeert start en fallback omdat de handmatige resetstatus niet veilig kon worden opgeslagen."],
  ["hp_recovery_wait", "Warmtepompherstel wordt bevestigd", "Herstel is gezien, maar moet eerst stabiel blijven."],
  ["hp_recovered", "Warmtepomp stabiel hersteld", "De warmtepomp is weer inzetbaar; de ketelfallback kan gecontroleerd worden beëindigd."],
  ["boiler_fallback", "Ketelfallback (CM4)", "CM4 is na controle van de systeemvoorwaarden vrijgegeven."],
  ["fallback_blocked", "Ketelfallback geblokkeerd", "Een veiligheidsvoorwaarde geeft CM4 nog niet vrij."],
  ["heating_request", "Warmtevraag actief", "De actie volgt op geldige warmtevraag."],
  ["commissioning", "Commissioning heeft voorrang", "Een servicetaak beheert de installatie."],
  ["supervisory_override", "Handmatige override heeft voorrang", "Een override blokkeert automatische fallback."],
].map(([key, label, summary]) => [key, { label, summary, checks: [] }]));
const TYPES = new Set([
  "incident_start", "incident_clear", "incident_acknowledged", "hp_availability_change",
  "control_mode_change", "boiler_fallback_start", "boiler_fallback_stop",
  "hp_start_confirmed", "hp_stop_confirmed",
]);
const SYNTHETIC = {
  hp_link_loss: "hp_link_loss",
  hp_start_failed: "hp_start_failed",
  hp_stop_unconfirmed: "hp_stop_unconfirmed",
  hp_persistence_failure: "hp_manual_reset_persistence_failure",
};
const AVAILABILITY = {
  available: ["weer beschikbaar", "De warmtepomp is stabiel hersteld."],
  recovering: ["herstelt", "Herstel wordt eerst stabiel bevestigd."],
  faulted: ["niet beschikbaar door storing", "Een bevestigde storing blokkeert een nieuwe start."],
  offline: ["verbinding bevestigd weg", "De communicatie bleef na meerdere controles weg."],
  preheat: ["wacht op voorverwarming", "De compressorstart is tijdelijk geblokkeerd."],
  blocked: ["tijdelijk niet startklaar", "Een technische voorwaarde blokkeert de start."],
  suspect: ["status wordt gecontroleerd", "Een korte hapering verandert de beschikbaarheid nog niet."],
};
const DEFAULT_META = { label: "Technische statuswijziging", summary: "Een bevestigde statuswijziging is verwerkt.", checks: [] };
const NEXT = "OpenQuatt beoordeelt de veilige vervolgstap automatisch.";
const mode = (value) => {
  const number = Number(value);
  return Number.isInteger(number) && number >= 0 && number <= 100 ? number : null;
};
const result = (title, summary, meta, next = NEXT) => ({
  title,
  summary,
  detail: meta.summary,
  next,
  reasonLabel: meta.label,
  checks: meta.checks || [],
});

export function getControlReplayIncidentReasonMeta(reasonCode) {
  return REASONS[String(reasonCode || "")] || null;
}

export function getControlReplayIncidentEventCopy(event, subject = "Warmtepomp") {
  const type = String(event?.event_type || "");
  if (!TYPES.has(type)) return null;
  const meta = getControlReplayIncidentReasonMeta(event.reason) || DEFAULT_META;
  const label = getIncidentDisplayLabel({ id: event.value_a, key: SYNTHETIC[event.reason] || "" });
  if (type === "incident_start") {
    return result(
      Number(event.value_a) >= 1000 ? label : `${label} actief`,
      `${subject}: de melding is bevestigd en telt mee in de regeling.`,
      meta,
    );
  }
  if (type === "incident_clear") {
    const latched = (Number(event.flags) & 1) !== 0;
    return result(
      `${label} hersteld`,
      latched
        ? `${subject}: de oorzaak is weg, maar de melding blijft vastgehouden tot bevestiging.`
        : `${subject}: de oorzaak is stabiel hersteld.`,
      { ...meta, label: "Incident hersteld" },
    );
  }
  if (type === "incident_acknowledged") {
    return result(
      `${label} bevestigd`,
      `${subject}: de herstelde, vastgehouden melding is bevestigd.`,
      { ...meta, label: "Herstelde melding bevestigd" },
    );
  }
  if (type === "hp_availability_change") {
    const item = AVAILABILITY[event.to] || ["beschikbaarheid gewijzigd", "De beschikbaarheid is opnieuw bepaald."];
    return result(`${subject} ${item[0]}`, item[1], meta);
  }
  if (type === "control_mode_change") {
    const from = mode(event.value_a);
    const to = mode(event.value_b) ?? mode(event.cm);
    return result(
      from !== null && to !== null ? `CM${from} → CM${to}` : "Control mode gewijzigd",
      to === 4 && from === 3
        ? "De regelrol wijzigt van CV-ondersteuning naar ketelfallback."
        : "De supervisor heeft een nieuwe regelrol gekozen.",
      to === 4 ? { ...meta, label: "Ketelfallbackrol (CM4)" } : meta,
      "De uitvoerstatus toont apart of de gekozen bron wordt aangestuurd.",
    );
  }
  const fixed = {
    boiler_fallback_start: ["Ketelfallback gestart (CM4)", "Geen warmtepomp is inzetbaar en de voorwaarden geven de ketel vrij.", "Ketelfallback actief"],
    boiler_fallback_stop: ["Ketelfallback gestopt", "CM4 is niet meer nodig of vrijgegeven.", "Ketelfallback beëindigd"],
    hp_start_confirmed: [`${subject} gestart`, "De compressorstart is bevestigd.", "Start bevestigd"],
    hp_stop_confirmed: [`${subject} gestopt`, "De stopopdracht is bevestigd.", "Stop bevestigd"],
  }[type];
  return result(fixed[0], fixed[1], { ...meta, label: fixed[2] });
}

export function getControlReplayIncidentDisplaySeverity(event) {
  const type = String(event?.event_type || "");
  if (["incident_clear", "incident_acknowledged", "boiler_fallback_stop", "hp_start_confirmed", "hp_stop_confirmed"].includes(type)) return "normal";
  if (type !== "hp_availability_change") return "";
  if (event.to === "available") return "normal";
  if (["recovering", "preheat", "blocked", "suspect"].includes(event.to)) return "limited";
  return ["faulted", "offline"].includes(event.to) ? "fault" : "";
}

export function getControlReplayIncidentModeTransition(event, previousCm) {
  if (event?.event_type === "control_mode_change") {
    return { from: mode(event.value_a) ?? mode(previousCm), to: mode(event.value_b) ?? mode(event.cm) };
  }
  if (event?.event_type === "boiler_fallback_start") {
    return { from: mode(event.value_a) ?? mode(previousCm), to: 4 };
  }
  if (event?.event_type === "boiler_fallback_stop") {
    const current = mode(event.cm);
    return { from: 4, to: mode(event.value_b) ?? (current === 4 ? null : current) };
  }
  return null;
}

export function getControlReplayIncidentModeAfterEvent(event) {
  return getControlReplayIncidentModeTransition(event, null)?.to ?? null;
}
