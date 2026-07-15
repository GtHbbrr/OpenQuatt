(() => {
  const body = document.body;
  const sidebarToggle = document.querySelector("[data-sidebar-toggle]");
  const sidebarBackdrop = document.querySelector("[data-sidebar-backdrop]");
  const sidebarLinks = [...document.querySelectorAll("[data-sidebar-link]"), ...document.querySelectorAll("[data-toc-link]")];
  const navToggles = [...document.querySelectorAll("[data-nav-toggle]")];
  const tocLinks = [...document.querySelectorAll("[data-toc-link]")];

  function setSidebarOpen(isOpen) {
    body.classList.toggle("sidebar-open", isOpen);
    if (sidebarToggle) {
      sidebarToggle.setAttribute("aria-expanded", String(isOpen));
    }
  }

  function activateToc(hash) {
    tocLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${hash}`);
    });
  }

  function toggleNavSection(button) {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    if (panel) {
      panel.hidden = expanded;
    }
  }

  async function copyCode(button, pre) {
    const code = pre.querySelector("code");
    const text = code ? code.innerText : pre.innerText;
    if (!text || !navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      const originalLabel = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1400);
    } catch (error) {
      console.warn("Kon code niet kopieren", error);
    }
  }

  function enhanceCodeBlocks() {
    document.querySelectorAll("pre").forEach((pre) => {
      if (pre.dataset.enhanced === "true") {
        return;
      }
      pre.dataset.enhanced = "true";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "code-copy";
      button.textContent = "Copy";
      button.addEventListener("click", () => {
        copyCode(button, pre);
      });
      pre.appendChild(button);
    });
  }

  function enhanceCableStepper() {
    const fallbackImage = document.querySelector('.page-q-edition img[src$="q-edition-kabels-stappen.svg"]');
    const fallbackContainer = fallbackImage?.closest("p");
    if (!fallbackImage || !fallbackContainer || fallbackImage.dataset.stepperEnhanced === "true") {
      return;
    }

    const steps = [
      {
        number: "01",
        label: "Voorbereiden",
        file: "q-edition-kabelstap-1-voorbereiden.svg",
        mobileFile: "q-edition-kabelstap-1-voorbereiden-mobile.svg",
        height: 332,
        mobileHeight: 650,
        alt: "Stap 1 van 7: installatie spanningsloos maken, fotograferen en kabels labelen.",
      },
      {
        number: "02",
        label: "Modbus",
        file: "q-edition-kabelstap-2-modbus.svg",
        mobileFile: "q-edition-kabelstap-2-modbus-mobile.svg",
        height: 405,
        mobileHeight: 720,
        alt: "Stap 2 van 7: Modbus A, G en B van de CiC verplaatsen naar M1 van de HCQ.",
      },
      {
        number: "03",
        label: "Thermostaat",
        file: "q-edition-kabelstap-3-thermostaat.svg",
        mobileFile: "q-edition-kabelstap-3-thermostaat-mobile.svg",
        height: 345,
        mobileHeight: 630,
        alt: "Stap 3 van 7: de twee OpenTherm-aders van de kamerthermostaat verplaatsen naar OTT.",
      },
      {
        number: "04A",
        label: "Ketel · OT",
        statusLabel: "OpenTherm",
        file: "q-edition-kabelstap-4a-cv-ketel-opentherm.svg",
        mobileFile: "q-edition-kabelstap-4a-cv-ketel-opentherm-mobile.svg",
        height: 390,
        mobileHeight: 720,
        alt: "Stap 4a van 7: de twee OpenTherm-aders van de CV-ketel verplaatsen van de CiC naar OTB van de HCQ.",
      },
      {
        number: "04B",
        label: "Ketel · aan/uit",
        statusLabel: "Aan/uit",
        file: "q-edition-kabelstap-4b-cv-ketel-aan-uit.svg",
        mobileFile: "q-edition-kabelstap-4b-cv-ketel-aan-uit-mobile.svg",
        height: 390,
        mobileHeight: 720,
        alt: "Stap 4b van 7: de twee aders van het CV-aan-uit-contact verplaatsen van de CiC naar COM en NO van R1.",
      },
      {
        number: "05",
        label: "Sensor",
        file: "q-edition-kabelstap-5-sensor.svg",
        mobileFile: "q-edition-kabelstap-5-sensor-mobile.svg",
        height: 345,
        mobileHeight: 630,
        alt: "Stap 5 van 7: de bestaande Quatt flow- of temperatuursensorkabel verplaatsen naar Q.",
      },
      {
        number: "06",
        label: "CiC-optie",
        file: "q-edition-kabelstap-6-cic-compatibiliteit.svg",
        mobileFile: "q-edition-kabelstap-6-cic-compatibiliteit-mobile.svg",
        height: 405,
        mobileHeight: 800,
        alt: "Stap 6 van 7, optioneel: M2 met een aparte RS485-kabel verbinden met de vrijgekomen Modbuspoort van de CiC.",
      },
      {
        number: "07",
        label: "Eindcontrole",
        file: "q-edition-kabelstap-7-eindcontrole.svg",
        mobileFile: "q-edition-kabelstap-7-eindcontrole-mobile.svg",
        height: 329,
        mobileHeight: 650,
        alt: "Stap 7 van 7: alle aansluitingen controleren voordat de installatie wordt ingeschakeld.",
      },
    ];

    const fallbackSource = fallbackImage.getAttribute("src") || "";
    const assetPrefix = fallbackSource.slice(0, fallbackSource.lastIndexOf("/") + 1);
    const mobileViewportQuery = window.matchMedia("(max-width: 720px)");
    steps.forEach((step) => {
      step.src = `${assetPrefix}${step.file}`;
      step.mobileSrc = `${assetPrefix}${step.mobileFile}`;
      const preload = new Image();
      preload.src = step.src;
      const mobilePreload = new Image();
      mobilePreload.src = step.mobileSrc;
    });

    const stepper = document.createElement("section");
    stepper.className = "cable-stepper";
    stepper.dataset.cableStepper = "";
    stepper.setAttribute("aria-label", "Heatpump Controller Q-edition aansluiten in zeven stappen");
    stepper.innerHTML = `
      <header class="cable-stepper-header">
        <div>
          <p class="cable-stepper-kicker">Aansluiten</p>
          <h4>Doorloop de zeven stappen</h4>
        </div>
        <div class="cable-stepper-header-tools">
          <p class="cable-stepper-status" data-cable-step-status aria-live="polite"></p>
          <button class="cable-stepper-zoom" type="button" data-cable-step-zoom aria-haspopup="dialog">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
            </svg>
            Vergroot
          </button>
        </div>
      </header>
      <div class="cable-stepper-progress" data-cable-step-progress role="progressbar" aria-label="Voortgang aansluitstappen" aria-valuemin="1" aria-valuemax="7">
        <span></span>
      </div>
      <div class="cable-stepper-tabs" data-cable-step-tabs role="tablist" aria-label="Kies een aansluitstap" aria-orientation="horizontal"></div>
      <div class="cable-stepper-canvas" data-cable-step-canvas>
        <div class="cable-stepper-viewport" id="q-edition-cable-step" role="tabpanel"></div>
      </div>
      <footer class="cable-stepper-actions">
        <button class="cable-stepper-button cable-stepper-button-secondary" type="button" data-cable-step-previous>Vorige</button>
        <button class="cable-stepper-button cable-stepper-button-primary" type="button" data-cable-step-next>Volgende</button>
      </footer>
    `;

    const tabsContainer = stepper.querySelector("[data-cable-step-tabs]");
    const viewport = stepper.querySelector(".cable-stepper-viewport");
    const canvas = stepper.querySelector("[data-cable-step-canvas]");
    const status = stepper.querySelector("[data-cable-step-status]");
    const progress = stepper.querySelector("[data-cable-step-progress]");
    const progressBar = progress?.querySelector("span");
    const previousButton = stepper.querySelector("[data-cable-step-previous]");
    const nextButton = stepper.querySelector("[data-cable-step-next]");
    const zoomButton = stepper.querySelector("[data-cable-step-zoom]");
    if (!tabsContainer || !viewport || !canvas || !status || !progress || !progressBar || !previousButton || !nextButton || !zoomButton) {
      return;
    }

    const dialog = document.createElement("dialog");
    dialog.className = "cable-stepper-dialog";
    dialog.setAttribute("aria-label", "Aansluitplan Heatpump Controller Q-edition vergroot");
    dialog.innerHTML = `
      <div class="cable-stepper-dialog-shell">
        <button class="cable-stepper-dialog-close" type="button" aria-label="Vergrote weergave sluiten">×</button>
        <div class="cable-stepper-dialog-content"></div>
      </div>
    `;
    document.body.appendChild(dialog);

    const dialogContent = dialog.querySelector(".cable-stepper-dialog-content");
    const dialogCloseButton = dialog.querySelector(".cable-stepper-dialog-close");
    const stepperPlaceholder = document.createComment("cable-stepper-position");
    if (!dialogContent || !dialogCloseButton) {
      dialog.remove();
      return;
    }

    const stepGraphic = document.createElement("object");
    stepGraphic.dataset.stepperEnhanced = "true";
    stepGraphic.className = "cable-stepper-image";
    stepGraphic.type = "image/svg+xml";
    stepGraphic.data = steps[0].src;
    stepGraphic.setAttribute("role", "img");
    stepGraphic.setAttribute("aria-label", steps[0].alt);
    stepGraphic.textContent = steps[0].alt;
    viewport.appendChild(stepGraphic);

    const tabs = steps.map((step, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "cable-stepper-tab";
      button.id = `q-edition-cable-step-tab-${index + 1}`;
      button.dataset.cableStepIndex = String(index);
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "q-edition-cable-step");
      button.innerHTML = `<span>${step.number}</span><strong>${step.label}</strong>`;
      tabsContainer.appendChild(button);
      return button;
    });

    let activeStep = 0;
    let animationTimer = 0;

    function showStep(index, { focusTab = false, animate = true } = {}) {
      const boundedIndex = Math.max(0, Math.min(steps.length - 1, index));
      const step = steps[boundedIndex];
      const mobileView = mobileViewportQuery.matches;
      const source = mobileView ? step.mobileSrc : step.src;
      const width = mobileView ? 430 : 936;
      const height = mobileView ? step.mobileHeight : step.height;
      const logicalStepNumber = step.number.replace(/^0/, "").toLowerCase();
      const logicalProgress = Number.parseInt(step.number, 10);
      activeStep = boundedIndex;
      stepper.dataset.activeStep = String(boundedIndex + 1);
      stepper.dataset.mobileView = String(mobileView);

      viewport.style.aspectRatio = `${width} / ${height}`;
      stepGraphic.data = source;
      stepGraphic.setAttribute("aria-label", step.alt);
      stepGraphic.textContent = step.alt;
      status.textContent = `Stap ${logicalStepNumber} van 7 · ${step.statusLabel || step.label}`;
      progress.setAttribute("aria-valuenow", String(logicalProgress));
      progress.setAttribute("aria-valuetext", `Stap ${logicalStepNumber} van 7: ${step.label}`);
      progressBar.style.width = `${(logicalProgress / 7) * 100}%`;
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === boundedIndex;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      viewport.setAttribute("aria-labelledby", tabs[boundedIndex].id);

      previousButton.disabled = boundedIndex === 0;
      nextButton.disabled = boundedIndex === steps.length - 1;
      nextButton.textContent = boundedIndex === steps.length - 1 ? "Klaar" : "Volgende";

      window.clearTimeout(animationTimer);
      viewport.classList.remove("is-entering");
      if (animate) {
        window.requestAnimationFrame(() => {
          viewport.classList.add("is-entering");
          animationTimer = window.setTimeout(() => viewport.classList.remove("is-entering"), 240);
        });
      }

      if (focusTab) {
        tabs[boundedIndex].focus();
      }
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => showStep(index));
    });

    tabsContainer.addEventListener("keydown", (event) => {
      let targetIndex = activeStep;
      if (event.key === "ArrowRight") {
        targetIndex = Math.min(steps.length - 1, activeStep + 1);
      } else if (event.key === "ArrowLeft") {
        targetIndex = Math.max(0, activeStep - 1);
      } else if (event.key === "Home") {
        targetIndex = 0;
      } else if (event.key === "End") {
        targetIndex = steps.length - 1;
      } else {
        return;
      }
      event.preventDefault();
      showStep(targetIndex, { focusTab: true });
    });

    previousButton.addEventListener("click", () => showStep(activeStep - 1));
    nextButton.addEventListener("click", () => showStep(activeStep + 1));
    mobileViewportQuery.addEventListener("change", () => showStep(activeStep, { animate: false }));

    function restoreStepper() {
      if (stepperPlaceholder.isConnected) {
        stepperPlaceholder.replaceWith(stepper);
      }
      zoomButton.focus();
    }

    function closeDialog() {
      dialog.close();
      restoreStepper();
    }

    zoomButton.addEventListener("click", () => {
      stepper.before(stepperPlaceholder);
      dialogContent.appendChild(stepper);
      dialog.showModal();
      dialogCloseButton.focus();
    });

    dialogCloseButton.addEventListener("click", closeDialog);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        closeDialog();
      }
    });
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeDialog();
    });
    dialog.addEventListener("close", restoreStepper);

    fallbackContainer.replaceWith(stepper);
    showStep(0, { animate: false });
  }

  function enhanceWifiRoutes() {
    const routeAHeading = document.getElementById("route-a-via-usb");
    const routeBHeading = document.getElementById("route-b-via-het-openquatt-access-point");
    if (!routeAHeading || !routeBHeading || routeAHeading.dataset.routeEnhanced === "true") {
      return;
    }

    const routeANodes = [];
    let cursor = routeAHeading;
    while (cursor && cursor !== routeBHeading) {
      routeANodes.push(cursor);
      cursor = cursor.nextSibling;
    }

    const routeBNodes = [];
    cursor = routeBHeading;
    while (cursor && !(cursor.nodeType === Node.ELEMENT_NODE && cursor.tagName === "H2")) {
      routeBNodes.push(cursor);
      cursor = cursor.nextSibling;
    }

    const routeOptions = document.createElement("div");
    routeOptions.className = "wifi-route-options";
    routeOptions.setAttribute("aria-label", "Kies een route om Wi-Fi in te stellen");
    routeAHeading.before(routeOptions);

    function createRoute(kind, nodes) {
      const section = document.createElement("section");
      section.className = "wifi-route";
      section.dataset.wifiRoute = kind;
      const recommendation = document.createElement("p");
      recommendation.className = "wifi-route-recommendation";
      section.appendChild(recommendation);
      nodes.forEach((node) => section.appendChild(node));
      return { section, recommendation };
    }

    const usbRoute = createRoute("usb", routeANodes);
    const accessPointRoute = createRoute("access-point", routeBNodes);
    const mobileRouteQuery = window.matchMedia("(max-width: 720px)");

    function arrangeRoutes() {
      const mobile = mobileRouteQuery.matches;
      const preferred = mobile ? accessPointRoute : usbRoute;
      const secondary = mobile ? usbRoute : accessPointRoute;
      preferred.section.classList.add("is-recommended");
      secondary.section.classList.remove("is-recommended");
      preferred.recommendation.textContent = mobile ? "Aanbevolen op telefoon of tablet" : "Aanbevolen op computer";
      secondary.recommendation.textContent = "Alternatieve route";
      routeOptions.replaceChildren(preferred.section, secondary.section);
    }

    routeAHeading.dataset.routeEnhanced = "true";
    arrangeRoutes();
    mobileRouteQuery.addEventListener("change", arrangeRoutes);
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      setSidebarOpen(!body.classList.contains("sidebar-open"));
    });
  }

  sidebarBackdrop?.addEventListener("click", () => {
    setSidebarOpen(false);
  });

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setSidebarOpen(false);
    });
  });

  navToggles.forEach((button) => {
    button.addEventListener("click", () => {
      toggleNavSection(button);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      setSidebarOpen(false);
    }
  });

  if (tocLinks.length > 0 && "IntersectionObserver" in window) {
    const sections = tocLinks
      .map((link) => document.getElementById((link.getAttribute("href") || "").replace(/^#/, "")))
      .filter(Boolean);

    if (sections.length > 0) {
      activateToc(window.location.hash.replace(/^#/, "") || sections[0].id);

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top);

          if (visible[0]) {
            activateToc(visible[0].target.id);
          }
        },
        {
          rootMargin: "-120px 0px -70% 0px",
          threshold: [0, 1],
        },
      );

      sections.forEach((section) => observer.observe(section));
    }
  }

  window.addEventListener("hashchange", () => {
    activateToc(window.location.hash.replace(/^#/, ""));
  });

  enhanceCodeBlocks();
  enhanceCableStepper();
  enhanceWifiRoutes();
})();
