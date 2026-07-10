/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{var eu=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,Di={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},Ni="https://oi.esphome.io/v3/www.js",Lt=2,Ot=4,ea=6e4,ta="Power House",oa="Water Temperature Control (heating curve)",ir=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"flow-source",kicker:"Stap 2",title:"Flowmeting configureren",copy:"Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort.",fields:[{title:"Flowbron",copy:"De Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron OpenQuatt moet gebruiken."}]},{id:"thermostat-source",kicker:"Stap 3",title:"Thermostaatgegevens configureren",copy:"Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt.",fields:[{title:"Thermostaatbron",copy:"Q-edition gebruikt OpenTherm. Listener en Waveshare gebruiken CiC of Home Assistant."}]},{id:"boiler",kicker:"Stap 4",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 5",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 6",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 7",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 8",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 9",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 10",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],Br=[1,2],sr=Array.from({length:11},(e,t)=>t),ra=["cooling","heating"];function Wh(e){return e==="cooling"?"cooling":"heating"}function Vh(e){return e==="cooling"?"Cooling":"Heating"}function Co(e,t,r){return`hp${e}OduRuntime${Vh(t)}F${r}`}function Ce(e,t){return`hp${e}OduRuntimeFrequency${t}`}function Li(e){return[Ce(e,"Enable"),Ce(e,"Load"),Ce(e,"Apply"),Ce(e,"Status"),...ra.flatMap(t=>sr.map(r=>Co(e,t,r)))]}function tu(e){let t=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return t?Number(t[1]):0}var na=Br.flatMap(Li),aa=new Set(Br.flatMap(e=>[Ce(e,"Load"),Ce(e,"Apply")])),O={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},statusLedsEnabled:{domain:"switch",name:"Status LEDs enabled",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableValid:{domain:"binary_sensor",name:"Cooling Enable Valid",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingDewPointSource:{domain:"select",name:"Cooling Dew Point Source",optional:!0},coolingDewPointHa:{domain:"sensor",name:"HA - Cooling Dew Point",optional:!0},coolingDewPointHaValid:{domain:"binary_sensor",name:"HA - Cooling Dew Point Valid",optional:!0},mqttCoolingDewPoint:{domain:"sensor",name:"MQTT Cooling Dew Point",optional:!0},mqttCoolingDewPointAge:{domain:"sensor",name:"MQTT Cooling Dew Point Age",optional:!0},mqttCoolingDewPointValid:{domain:"binary_sensor",name:"MQTT Cooling Dew Point Valid",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRoomRequestRequired:{domain:"switch",name:"Cooling Room Request Required",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestConfidence:{domain:"sensor",name:"Boiler power test confidence",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},mqttOutsideTemperature:{domain:"sensor",name:"MQTT Outside Temperature",optional:!0},mqttOutsideTemperatureAge:{domain:"sensor",name:"MQTT Outside Temperature Age",optional:!0},mqttOutsideTemperatureValid:{domain:"binary_sensor",name:"MQTT Outside Temperature Valid",optional:!0},mqttRoomTemperature:{domain:"sensor",name:"MQTT Room Temperature",optional:!0},mqttRoomTemperatureAge:{domain:"sensor",name:"MQTT Room Temperature Age",optional:!0},mqttRoomTemperatureValid:{domain:"binary_sensor",name:"MQTT Room Temperature Valid",optional:!0},mqttRoomSetpoint:{domain:"sensor",name:"MQTT Room Setpoint",optional:!0},mqttRoomSetpointAge:{domain:"sensor",name:"MQTT Room Setpoint Age",optional:!0},mqttRoomSetpointValid:{domain:"binary_sensor",name:"MQTT Room Setpoint Valid",optional:!0},mqttHeatingEnable:{domain:"binary_sensor",name:"MQTT Heating Enable",optional:!0},mqttHeatingEnableAge:{domain:"sensor",name:"MQTT Heating Enable Age",optional:!0},mqttHeatingEnableValid:{domain:"binary_sensor",name:"MQTT Heating Enable Valid",optional:!0},mqttCoolingEnable:{domain:"binary_sensor",name:"MQTT Cooling Enable",optional:!0},mqttCoolingEnableAge:{domain:"sensor",name:"MQTT Cooling Enable Age",optional:!0},mqttCoolingEnableValid:{domain:"binary_sensor",name:"MQTT Cooling Enable Valid",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1SuctionSuperheat:{domain:"sensor",name:"HP1 - Suction superheat",optional:!0},hp1DischargeSuperheat:{domain:"sensor",name:"HP1 - Discharge superheat",optional:!0},hp1SuctionSuperheatStatus:{domain:"text_sensor",name:"HP1 - Suction superheat status",optional:!0},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2SuctionSuperheat:{domain:"sensor",name:"HP2 - Suction superheat",optional:!0},hp2DischargeSuperheat:{domain:"sensor",name:"HP2 - Discharge superheat",optional:!0},hp2SuctionSuperheatStatus:{domain:"text_sensor",name:"HP2 - Suction superheat status",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};Br.forEach(e=>{let t=`HP${e} - EXPERIMENTAL`;O[Ce(e,"Enable")]={domain:"switch",name:`${t} ODU runtime frequency write enable`,optional:!0},O[Ce(e,"Load")]={domain:"button",name:`${t} load ODU runtime frequency table`,optional:!0},O[Ce(e,"Apply")]={domain:"button",name:`${t} apply ODU runtime frequency table`,optional:!0},O[Ce(e,"Status")]={domain:"text_sensor",name:`${t} ODU runtime frequency status`,optional:!0},ra.forEach(r=>{sr.forEach(n=>{O[Co(e,r,n)]={domain:"number",name:`${t} ${Wh(r)} F${n} runtime Hz`,optional:!0}})})});var ia=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"control",label:"Beslislog",icon:"activity",badge:"BETA"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"settings",label:"Instellingen",icon:"settings"}],ou=new Set(ia.map(e=>e.id)),Bh={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',clipboard:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',"clipboard-check":'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path d="m11 14 2 2 4-5"/>',droplet:'<path d="M12 3.2s6 6.5 6 10.8a6 6 0 0 1-12 0c0-4.3 6-10.8 6-10.8z"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',shield:'<path d="M12 3 19 6v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6z"/><path d="m9 12 2 2 4-5"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66 -1.41 1.41"/><path d="m19.07 4.93 -1.41 1.41"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>',thermometer:'<path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',waves:'<path d="M3 8c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 13c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 18c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/>',wifi:'<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function $e(e,t=""){let r=Bh[e];return r?`<svg${t?` class="${Kh(t)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${r}</svg>`:""}function Kh(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}var me=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],De=new Set(me.map(e=>e.id)),ru=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",suctionSuperheat:"hp1SuctionSuperheat",dischargeSuperheat:"hp1DischargeSuperheat",suctionSuperheatStatus:"hp1SuctionSuperheatStatus",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",suctionSuperheat:"hp2SuctionSuperheat",dischargeSuperheat:"hp2DischargeSuperheat",suctionSuperheatStatus:"hp2SuctionSuperheatStatus",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],ge=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],qt=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Eo=["dayMax","silentMax","maxWater"],Je=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],lr=["flowKp","flowKi"],Kr=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],zr=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],Ur=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],zh=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],sa=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...zr,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],Gr=new Set(["commissioningStatus","cm100Active","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowActive","manualFlowStatus","manualFlowTargetIpwm","manualHpActive","manualHpStatus","manualHpGuardStatus","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg"]),Oi=["cicCompatibilityMode"],_i=["otEnabled","otLinkProblem"],Fi=["cicPollingEnabled","cicFeedUrl","cicDataStale"],Ii=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],ji=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],Qr=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource"],Wi=["supplyTemp","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","mqttOutsideTemperature","mqttOutsideTemperatureAge","mqttOutsideTemperatureValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid","mqttHeatingEnable","mqttHeatingEnableAge","mqttHeatingEnableValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","mqttCoolingEnable","mqttCoolingEnableAge","mqttCoolingEnableValid","coolingEnableValid","coolingEnableSelected","coolingEnableEffectiveSource","otThermostatCoolingEnable","coolingEnableHa","coolingEnableHaValid","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid"],ut=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],To=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid"],Vi=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingDewPointSource","coolingWithoutDewPointMode","coolingGuardMode","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],xo=[...ge.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],Bi=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],$o=["silentStartTime","silentEndTime","silentMax","dayMax"],nu=1e4;var la=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Mo=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingRoomRequestRequired","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],_t=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Uh=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],Yr=[..._t,...Uh,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],cr=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],Ze=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],Jr=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],Ki=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingEffectiveMinSupplyTemp","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...zh],au=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...qt,...xo,...Je,"maxWater",...$o,...ut,...To,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut"],ca=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],ua=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...sa,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","webServerLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear",...Oi,..._i,...Ii,...Fi,...ji,...Qr,...Wi,...Je,...lr,...Kr,...zr,...Ur,...Vi,...Eo,...qt,...xo,...Bi,...$o,...na];var ok=new Set(["installationTopology",...sa,...na,"cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp","statusLedsEnabled"]),Zt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource",...Kr]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...ge.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],zi=1,Xt=[...new Set(Zt.flatMap(e=>e.keys))],iu=new Set(Xt),su=5e3,lu=3e4,cu=6e4,Ho=12e3,Zr=4e3,uu=1500,du=3e4,pu=3e4,mu=1e3,Xr=3e4,Ui=250,gu=750,Gh=22,fu=Gh/1.7,hu=360/3.2,Ao="2000-01-01 00:00:00";function Qh(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}var kt=24,Ro=[3,12,24,72,168,336,720],o={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,supplementaryPrimeTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:Jh(),devPanelOpen:Xh(),nativeOpen:Zh()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:eb(),appView:"",overviewTheme:Yh(),hpVisualMode:tb(),hpLayoutMode:ob(),controlReplayTab:"status",controlReplayWindow:"last24",controlReplayPeriodMenuOpen:!1,controlReplayCustomPeriodOpen:!1,controlReplayCustomStart:"",controlReplayCustomEnd:"",controlReplayCustomPeriodError:"",controlReplayFocusFilter:"all",controlReplaySelectedEpisode:"",controlReplaySupportDetailsItemId:"",controlReplayGraphMinute:1e3,controlReplayScrubbing:!1,decisionLog:null,decisionLogError:"",decisionLogSignature:"",decisionLogLastFetchAt:0,decisionLogFetchPromise:null,trendWindowHours:rb(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,trendHistoryMetadata:{},trendHistoryMetadataError:"",trendHistoryMetadataSignature:"",trendHistoryMetadataLastFetchAt:0,trendHistoryMetadataFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryCsrfToken:"",energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",energyHistoryExportMode:"days_and_hours",energyHistoryExportBusy:!1,energyHistoryExportError:"",energyHistoryExportNotice:"",settingsStorageDetailsOpen:!1,energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""},deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:Qh(),debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null,complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},renderedAppView:"",renderedSettingsGroup:"",settingsPageScrollRestoreToken:0,settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1,mqttBusy:!1,mqttNotice:"",mqttError:"",mqttCopiedTopicKey:"",mqttCopiedTopicTimer:null,mqttExpandedTopicKey:"",mqttInputToggleBusyKey:"",mqttSensorsModalRenderSignature:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:nb(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Yh(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function Jh(){return!1}function Zh(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function Xh(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function eb(){try{let e=window.localStorage.getItem("oq-settings-group");return De.has(e)?e:me[0].id}catch{return me[0].id}}function tb(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function ob(){try{let e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function rb(){try{let e=Number(window.localStorage.getItem("oq-trend-window-hours"));return Ro.includes(e)?e:kt}catch{return kt}}function Gi(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function nb(){return!!Gi()?.matches}function w(e){return!!o.entities[e]}function E(e){if(Object.prototype.hasOwnProperty.call(o.drafts,e))return o.drafts[e];let t=o.entities[e];return t?t.value??t.state??"":""}function Le(e){let t=o.entities[e]||{};return{min:Number(t.min_value??0),max:Number(t.max_value??100),step:Number(t.step??1),uom:t.uom||""}}function Ee(e){return Object.prototype.hasOwnProperty.call(o.inputDrafts,e)?o.inputDrafts[e]:E(e)}function Me(e){if(typeof e=="number")return e;let t=String(e??"").trim().replace(",",".");return!t||t==="-"||t==="."||t==="-."?Number.NaN:Number(t)}function Ct(e){let t=String(e||"").trim();if(!t)return"";let r=t.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]||"0");return[n,a,i].some(l=>Number.isNaN(l))||n<0||n>23||a<0||a>59||i<0||i>59?"":`${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function en(e){let t=Ct(e);return t?t.slice(0,5):""}function Ke(e){let t=String(e||"").trim();if(!t)return"";let r=t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),c=Number(r[5]),p=Number(r[6]||"0");return[n,a,i,l,c,p].some(u=>Number.isNaN(u))||n<2e3||a<1||a>12||i<1||i>31||l<0||l>23||c<0||c>59||p<0||p>59?"":`${String(n).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(p).padStart(2,"0")}`}function da(e){let t=Ke(e);return!t||t===Ao?"":t.slice(0,16).replace(" ","T")}function vu(e){let t=Ke(e);if(!t||t===Ao)return null;let r=t.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!r)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),c=Number(r[5]),p=Number(r[6]),u=new Date(n,a-1,i,l,c,p,0);return Number.isNaN(u.getTime())?null:u}function tn(e=E("openquattResumeAt")){return!!vu(e)}function ur(e,t=!1){let r=vu(e);return r?new Intl.DateTimeFormat("nl-NL",t?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(r):""}function bu(e){let t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${t}-${r}-${n}T${a}:${i}`}function ab(e){let t=new Date(e.getTime());t.setSeconds(0,0);let r=t.getMinutes(),n=r%15;return n!==0&&t.setMinutes(r+(15-n)),t}function Qi(e){let t=new Date;if(e==="2h"||e==="8h"){let r=e==="2h"?2:8,n=ab(new Date(t.getTime()+r*3600*1e3));return bu(n)}if(e==="tomorrow-morning"){let r=new Date(t);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),bu(r)}return""}function pa(){let e=da(o.pauseResumeDraft);if(e)return e;let t=da(E("openquattResumeAt"));return t||Qi("2h")}function Q(e,t=E(e)){if(t===""||t===null||Number.isNaN(Number(t)))return"\u2014";let r=Le(e),n=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return`${Number(t).toFixed(n)}${r.uom?` ${r.uom}`:""}`}function fe(e,t){let r=Le(e),n=Me(t);if(Number.isNaN(n)){let p=Me(o.entities[e]?.value??o.entities[e]?.state??"");return Number.isNaN(p)?r.min:p}let a=Math.min(r.max,Math.max(r.min,n)),i=Math.round((a-r.min)/r.step),l=r.min+i*r.step,c=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(c))}function ma(){let e=ge[Math.floor(ge.length/2-1)],t=ge[Math.floor(ge.length/2)];if(!e||!t||!w("curveFallbackSupply"))return null;let r=fe(e.key,E(e.key)),n=fe(t.key,E(t.key)),a=(r+n)/2,i=fe("curveFallbackSupply",a);return{value:i,label:Q("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${t.label}).`,isCurrent:fe("curveFallbackSupply",E("curveFallbackSupply"))===i}}function ib(e){let t=String(e||"").replace(/\/$/,"");if(!t)return"";let r=t.split("/").pop()||"";return/\.[a-z0-9]+$/i.test(r)?t.slice(0,-r.length).replace(/\/$/,"")||"":t}function Oe(){return ib(window.location.pathname)}function Y(e,t,r=""){let n=r?`/${r}`:"";return`${Oe()}/${e}/${encodeURIComponent(t)}${n}`}function ne(e=E("strategy")){return String(e||"").includes("Water Temperature Control")}function yu(e=E("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function B(e,t,r=""){let n=Number(e);return Number.isNaN(n)?"\u2014":`${n.toFixed(t)}${r?` ${r}`:""}`}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function wu(){let e=[];e.push(ne()?"Stooklijn":"Power House");let t=String(E(ne()?"curveControlProfile":"phResponseProfile")||"").trim();t&&e.push(`profiel ${t}`);let r=String(E("flowControlMode")||"").trim();return r&&e.push(`flow ${r==="Manual PWM"?"handmatig":"setpoint"}`),r==="Manual PWM"&&w("manualIpwm")?e.push(`iPWM ${Q("manualIpwm")}`):w("flowSetpoint")&&e.push(`flow ${Q("flowSetpoint")}`),w("dayMax")&&e.push(`dag ${Q("dayMax")}`),w("silentMax")&&e.push(`silent ${Q("silentMax")}`),w("maxWater")&&e.push(`max water ${Q("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function F(e,t="\u2014"){let r=o.entities[e];if(!r)return t;if(typeof r.state=="string"&&r.state.trim()!=="")return r.state;let n=r.value??r.state;return n==null||n===""?t:typeof n=="boolean"?n?"Aan":"Uit":typeof n=="number"&&!Number.isNaN(n)&&r.uom?`${n} ${r.uom}`:String(n)}function R(e){let t=Number(E(e));return Number.isNaN(t)?NaN:t}function Yi(e){let t=String(e||"").toLowerCase();return t.includes("cop")||t.includes("eer")}function Ji(e){let t=String(e||"");if(t==="totalEer"){let r=R("totalCoolingPower"),n=R("coolingPowerInput"),a=Number.isNaN(n)?R("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}if(t==="totalCop"){let r=R("totalHeat"),n=R("heatingPowerInput"),a=Number.isNaN(n)?R("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}return NaN}function dr(e,t=""){let r=String(o.entities[e]?.uom||"").trim();return r||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1SuctionSuperheat:"K",hp1DischargeSuperheat:"K",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2SuctionSuperheat:"K",hp2DischargeSuperheat:"K",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||t}function Xe(e){let t=o.entities[e],r=Ji(e);if(!t)return Number.isNaN(r)?"\u2014":B(r,1,dr(e));let n=R(e);if(Number.isNaN(n))return Number.isNaN(r)?F(e):B(r,1,dr(e));let a=n>0||Number.isNaN(r)?n:r,i=Yi(e)?1:0;return B(a,i,dr(e))}function T(e){let t=o.entities[e];if(!t)return!1;if(typeof t.value=="boolean")return t.value;let r=String(t.state??t.value??"").toLowerCase();return r==="on"||r==="true"||r==="1"}function dt(){return!w("trendHistoryEnabled")||T("trendHistoryEnabled")}function ga(){let e=o.entities.setupComplete;if(!e)return null;let t=String(e.state??e.value??"").trim().toLowerCase();return!t||t==="unknown"||t==="unavailable"?null:t==="on"||t==="true"||t==="1"?!0:t==="off"||t==="false"||t==="0"?!1:null}function Su(){return`
      <div class="oq-helper-app-nav">
        ${ia.filter(e=>e.id!=="diagnosis"||dt()).map(e=>`
          <button
            class="oq-helper-app-tab ${o.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${$e(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
            ${e.badge?`<span class="oq-helper-app-tab-badge">${s(e.badge)}</span>`:""}
          </button>
        `).join("")}
      </div>
    `}function sb(e=o.appView){return ia.find(t=>t.id===e)?.label||"OpenQuatt"}function Zi(){if(typeof document>"u")return;if(o.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}let e=sb();document.title=`${e} \u2022 OpenQuatt`}function Xi(){if(typeof document>"u")return;if(o.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");let e=o.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}async function eo(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(t)}return r}function es(e,t){let r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,n.rel="noreferrer",document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function ts(e,t,r="text/plain"){es(new Blob([t],{type:r}),e)}function qu(e,t){ts(e,JSON.stringify(t,null,2),"application/json")}var os=null;function ku(e){os=typeof e=="function"?e:null}function f(){os&&os()}var lb=1500;function rs(){o.deviceReconnectRecoveryTimer&&(window.clearTimeout(o.deviceReconnectRecoveryTimer),o.deviceReconnectRecoveryTimer=null)}function to(){return Number(o.deviceReconnectRecoveryStartedAt||0)>0}function cb(){return to()?Number(o.deviceReconnectRecoveryStartedAt||0):Number(o.deviceReconnectStartedAt||0)}function Cu(){return to()?"Gegevens verversen":"Wachten op gegevens"}function Eu(){let e=cb(),t=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return to()?t>0?`${t}s aan het verversen`:"Net weer online":t>0?`${t}s bezig`:"Net gestart"}function ns(){if(!o.deviceReconnectMode||to())return!1;rs(),o.deviceReconnectRecoveryStartedAt=Date.now(),o.deviceReconnectLastError="",o.entitySyncFailureCount=0;let e=o.deviceReconnectRecoveryStartedAt;return o.deviceReconnectRecoveryTimer=window.setTimeout(()=>{o.deviceReconnectMode&&Number(o.deviceReconnectRecoveryStartedAt||0)===e&&(as(),f())},lb),f(),!0}function oo(e="reconnect",t=""){o.deviceReconnectMode||(o.deviceReconnectStartedAt=Date.now()),rs(),o.deviceReconnectMode=e,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError=t?String(t):o.deviceReconnectLastError,o.systemModal="",o.updateModalOpen=!1,o.controlError=""}function as(){rs(),!(!o.deviceReconnectMode&&!o.entitySyncFailureCount)&&(o.deviceReconnectMode="",o.deviceReconnectStartedAt=0,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError="",o.entitySyncFailureCount=0)}function Tu(){return to()?"OpenQuatt is weer online":o.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":o.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function xu(){return to()?o.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":o.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":o.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function on(e,t={},r=pu){if(t.force===!0)return!0;let n=Number(e||0);return!n||Date.now()-n>=r}function Ft(){return o.appView==="settings"&&o.settingsGroup==="system"}function $u(){return o.appView==="settings"&&o.settingsGroup==="integrations"}function Mu(e=o.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function is(){let e=o.authStatus||{};o.authDraftUsername=e.enabled?String(e.username||"").trim():"",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword=""}function ha(e=o.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",e.key_present?"has-key":"no-key",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Hu(){return o.systemModal==="login"||o.systemModal==="api-security"||Ft()}function Au(){return o.systemModal==="api-security"||Ft()}async function Po(e={}){if(!on(o.lastAuthStatusRefreshAt,e))return!1;o.lastAuthStatusRefreshAt=Date.now();try{let t=await fetch("/auth/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n={enabled:!!r.enabled,setup_window_active:!!r.setup_window_active,username:String(r.username||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=Mu(),i=Mu(n);return o.authStatus=n,a!==i&&is(),o.systemModal==="login"&&(o.authError=""),a!==i}catch(t){return o.systemModal==="login"&&(o.authError=`Loginstatus kon niet worden geladen. ${t.message}`),!1}}function fa(){return o.nativeOpen||o.systemModal!=="login"?!1:(o.authStatus||{}).setup_window_active!==!0}function Do(){o.loginAuthStatusPollTimer&&(window.clearTimeout(o.loginAuthStatusPollTimer),o.loginAuthStatusPollTimer=null)}function Ru(e=mu){o.loginAuthStatusPollTimer||!fa()||(o.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(o.loginAuthStatusPollTimer=null,!fa())return;let t=o.authError;(await Po({force:!0})||o.authError!==t)&&o.systemModal==="login"&&f(),fa()&&Ru()},Math.max(0,Number(e)||0)))}async function Pu(e={}){if(o.systemModal!=="login")return!1;let t=o.authError,r=await Po({force:!0});return(r||o.authError!==t)&&o.systemModal==="login"&&f(),e.poll!==!1&&fa()&&Ru(),r}async function ro(e={}){if(!on(o.lastApiSecurityStatusRefreshAt,e))return!1;o.lastApiSecurityStatusRefreshAt=Date.now();try{let t=await fetch("/api-security/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n={enabled:!!r.enabled,transport_active:!!r.transport_active,pending_restart:!!r.pending_restart,key_present:!!(r.key_present||r.key),key:String(r.key||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=ha(),i=ha(n);return o.apiSecurityStatus=n,o.apiSecurityError="",a!==i&&(o.apiSecurityNotice=""),a!==i}catch(t){return o.apiSecurityError=`API-beveiliging kon niet worden geladen. ${t.message}`,!1}}async function Du(){let e=O.restartAction;if(e){o.busyAction="restartAction",o.controlError="",o.controlNotice="",f();try{let t=await fetch(Y(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);Do(),o.systemModal="",o.controlNotice="OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",oo("restart")}catch(t){o.controlError=`Herstart mislukt. ${t.message}`}finally{o.busyAction="",f()}}}async function Nu(){let e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",f();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",f();try{let t=new URLSearchParams;t.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await ro({force:!0}),o.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",o.apiSecurityError="",f()}catch(t){o.apiSecurityError=`Inschakelen is mislukt. ${t.message}`,f()}finally{o.apiSecurityBusy=!1,f()}}async function Lu(){let e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",f();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",f();try{let t=new URLSearchParams;t.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await ro({force:!0}),o.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",o.apiSecurityError="",f()}catch(t){o.apiSecurityError=`Roteren is mislukt. ${t.message}`,f()}finally{o.apiSecurityBusy=!1,f()}}async function Ou(){let e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",f();return}if(!e.enabled){o.apiSecurityNotice="API-encryptie staat al uit.",o.apiSecurityError="",f();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",f();try{let t=new URLSearchParams;t.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await ro({force:!0}),o.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",o.apiSecurityError="",f()}catch(t){o.apiSecurityError=`Uitzetten is mislukt. ${t.message}`,f()}finally{o.apiSecurityBusy=!1,f()}}async function _u(){let e=String(o.apiSecurityStatus?.key||"").trim();if(!e){o.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",f();return}try{if(!await eo(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.apiSecurityNotice="API-sleutel gekopieerd.",o.apiSecurityError="",f()}catch(t){o.apiSecurityError=`Kopi\xEBren is mislukt. ${t.message}`,f()}}async function Fu(){let e=o.authStatus||{},t=e.enabled===!0,r=e.setup_window_active===!0,n=String(o.authDraftCurrentPassword||""),a=String(o.authDraftUsername||"").trim(),i=String(o.authDraftNewPassword||""),l=String(o.authDraftConfirmPassword||"");if(!a||!i){o.authError="Vul een gebruikersnaam en wachtwoord in.",f();return}if(i!==l){o.authError="De twee wachtwoorden zijn niet gelijk.",f();return}if(t&&!n){o.authError="Vul je huidige wachtwoord in.",f();return}if(!t&&!r){o.authError="Houd de herstelknop 5 seconden vast.",f();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",f();return}o.authBusy=!0,o.authError="",o.authNotice="",f();try{let c=new URLSearchParams;c.set("csrf_token",e.csrf_token),c.set("current_password",n),c.set("new_username",a),c.set("new_password",i);let p=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:c.toString()}),u=await p.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!p.ok||!u.ok)throw new Error(u.error||`HTTP ${p.status}`);await Po({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername=String(o.authStatus?.username||a).trim(),o.authNotice=t?"Login aangepast.":"Login staat nu aan.",o.authError="",f()}catch(c){o.authError=`Opslaan is mislukt. ${c.message}`,f()}finally{o.authBusy=!1,f()}}async function Iu(){let e=o.authStatus||{};if(!e.enabled){o.authNotice="Login staat al uit.",o.authError="",f();return}let t=String(o.authDraftCurrentPassword||"");if(!t){o.authError="Vul je huidige wachtwoord in.",f();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",f();return}o.authBusy=!0,o.authError="",o.authNotice="",f();try{let r=new URLSearchParams;r.set("csrf_token",e.csrf_token),r.set("current_password",t);let n=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:r.toString()}),a=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!a.ok)throw new Error(a.error||`HTTP ${n.status}`);await Po({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername="",o.authNotice="Login staat nu uit.",o.authError="",f()}catch(r){o.authError=`Uitzetten is mislukt. ${r.message}`,f()}finally{o.authBusy=!1,f()}}function K(e){let t=o.entities[e];if(!t)return o.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;let r=t.state??t.value??"",n=Array.isArray(t.option)?t.option.join(","):Array.isArray(t.options)?t.options.join(","):"",a=[t.min_value??"",t.max_value??"",t.step??"",t.uom??""].join(",");return`${e}:${r}::${n}::${a}`}function we(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function rn(){return[o.appView,o.settingsGroup,o.busyAction,o.loadingEntities?"loading":"ready",ha(),K("setupComplete"),...ua.map(e=>K(e))].join("|")}function ba(){return[o.appView,o.busyAction,K("openquattEnabled"),K("openquattResumeAt"),K("manualCoolingEnable"),K("coolingEnableSource"),K("coolingEnableSelected"),K("coolingEnableEffectiveSource"),K("silentModeOverride"),K("controlModeLabel"),K("coolingPermitted"),K("coolingRequestActive"),K("coolingBlockReason"),K("silentActive")].join("|")}function nn(){o.root&&(o.root.style.removeProperty("--oq-flow-offset"),o.root.style.removeProperty("--oq-flow-offset-reverse"),o.root.style.removeProperty("--oq-fan-rotation"),o.root.getAttribute("style")||o.root.removeAttribute("style"))}function va(){return o.motionTargets={pipeFlows:[],fanBlades:[]},o.root?(o.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(n=>{n.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{o.motionTargets.fanBlades.push(a)})}),o.motionTargets.pipeFlows.length+o.motionTargets.fanBlades.length):0}function ub(){return o.motionTargets.pipeFlows.length>0||o.motionTargets.fanBlades.length>0}function ju(e=performance.now()){if(!o.root||o.reducedMotion||!ub()&&va()===0)return!1;o.motionStartedAt||(o.motionStartedAt=e);let t=(e-o.motionStartedAt)/1e3,r=t*hu%360;return o.motionTargets.pipeFlows.forEach(n=>{let a=n.dataset.oqFlowVariant==="water"?.42:1,i=-(t*fu*a);n.style.strokeDashoffset=`${i.toFixed(3)}px`}),o.motionTargets.fanBlades.forEach(n=>{n.style.transform=`rotate(${r.toFixed(3)}deg)`}),!0}function Wu(e){if(!ju(e)){o.motionFrame=0,o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(Wu)}function an(){if(o.motionFrame||o.reducedMotion||va()===0)return;let e=performance.now();if(o.motionStartedAt=e,!ju(e)){o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(Wu)}function sn(){o.motionFrame&&(window.cancelAnimationFrame(o.motionFrame),o.motionFrame=0),o.motionStartedAt=0,nn()}var Vu=null,Bu=null;function Ku({start:e,stop:t}={}){Vu=typeof e=="function"?e:null,Bu=typeof t=="function"?t:null}function ss(){Vu?.()}function zu(){Bu?.()}var _e={};function Uu(e={}){Object.keys(_e).forEach(t=>{delete _e[t]}),Object.assign(_e,e)}function Gu(e){_e.handleChange?.(e)}function Qu(e){_e.handleClick?.(e)}function ls(e){_e.handleFocusChange?.(e)}function Yu(e){_e.handleInput?.(e)}function Ju(e){_e.handleKeyDown?.(e)}function Zu(e){_e.handlePointerDown?.(e)}function Xu(e){_e.handlePointerMove?.(e)}function ed(e){_e.handlePointerUp?.(e)}function td(e){_e.handleSettingsInteractionEnd?.(e)}function od(e){_e.handleSettingsInteractionStart?.(e)}function rd(e){_e.handleWheel?.(e)}function no(){return"overview"}function ln(e){return e==="trends"&&(e="diagnosis"),!ou.has(e)||e==="diagnosis"&&!dt()?"":e}function pr(e){return String(e||"").trim().toLowerCase()}function cs(e){let t=pr(e);return{actueel:"status",current:"status",status:"status",situatie:"status",tijdlijn:"timeline",timeline:"timeline",log:"timeline",grafiek:"graphs",grafieken:"graphs",graphs:"graphs",graph:"graphs"}[t]||""}function db(e=o.controlReplayTab){let t={status:"current",timeline:"timeline",graphs:"graphs"};return t[e]||t.status}function us(e){let t=pr(e);return{"1h":"last1",last1:"last1","2h":"last2",last2:"last2","4h":"last4",last4:"last4","8h":"last8",last8:"last8","12h":"last12",last12:"last12","24h":"last24",last24:"last24","48h":"last48",last48:"last48","3d":"last3d",last3d:"last3d","7d":"week",week:"week",today:"today",yesterday:"yesterday",custom:"custom"}[t]||""}function pb(e=o.controlReplayWindow){let t={last1:"1h",last2:"2h",last4:"4h",last8:"8h",last12:"12h",last24:"24h",last48:"48h",last3d:"3d",today:"today",yesterday:"yesterday",week:"7d",custom:"custom"};return t[e]||t.last24}function cn(){try{let e=new URL(window.location.href),t=pr(e.searchParams.get("view")||""),r=ln(t);if(r)return r;let n=pr(e.hash.replace(/^#/,""));return ln(n)||""}catch{return""}}function ds(){try{let e=new URL(window.location.href);return cs(e.searchParams.get("controlTab")||e.searchParams.get("controlView")||"")}catch{return""}}function ps(){try{let e=new URL(window.location.href);return us(e.searchParams.get("controlPeriod")||"")}catch{return""}}function ms(){try{let e=new URL(window.location.href);return{start:String(e.searchParams.get("controlStart")||""),end:String(e.searchParams.get("controlEnd")||"")}}catch{return{start:"",end:""}}}function gs(){try{let e=new URL(window.location.href),t=pr(e.searchParams.get("section")||"");if(De.has(t))return t;let r=pr(e.searchParams.get("group")||"");return De.has(r)?r:""}catch{return""}}function No(e="replace"){try{let t=new URL(window.location.href),r=ln(o.appView)||no();if(t.searchParams.set("view",r),r==="settings"){let a=De.has(o.settingsGroup)?o.settingsGroup:me[0].id;t.searchParams.set("section",a),t.searchParams.delete("group")}else t.searchParams.delete("section"),t.searchParams.delete("group");r==="control"?(t.searchParams.set("controlTab",db()),t.searchParams.set("controlPeriod",pb()),o.controlReplayWindow==="custom"&&o.controlReplayCustomStart&&o.controlReplayCustomEnd?(t.searchParams.set("controlStart",o.controlReplayCustomStart),t.searchParams.set("controlEnd",o.controlReplayCustomEnd)):(t.searchParams.delete("controlStart"),t.searchParams.delete("controlEnd")),t.searchParams.delete("controlView")):(t.searchParams.delete("controlTab"),t.searchParams.delete("controlPeriod"),t.searchParams.delete("controlStart"),t.searchParams.delete("controlEnd"),t.searchParams.delete("controlView")),t.hash&&ln(t.hash.replace(/^#/,""))&&(t.hash="");let n=e==="push"?"pushState":"replaceState";window.history[n]({oqView:r,oqSettingsSection:r==="settings"?o.settingsGroup:"",oqControlTab:r==="control"?o.controlReplayTab:"",oqControlPeriod:r==="control"?o.controlReplayWindow:""},"",t.toString())}catch{}}function pt(e,t={}){let r=ln(e)||no(),n=t.syncMode||"replace",a=o.appView!==r;o.appView=r,(a||t.forceSync)&&No(n)}function ya(e=Date.now()){return Number(o.firmwareOtaQuietUntil||0)>e}var mb=new Set(["compressor oil return"]);function ao(e){let t=String(e||"").trim();return!t||t==="None"?"Geen actieve storingen":t}function gb(e){let t=ao(e);return t==="Geen actieve storingen"?[]:t.split(",").map(r=>r.trim()).filter(r=>r&&!mb.has(r.toLowerCase()))}function wa(e){let t=gb(e);return t.length>0?t.join(", "):"Geen actieve storingen"}function J(e){return w(e)&&T(e)}function Et(e){return!w(e)||T(e)}function hs(e){return w(e)?ao(F(e,"None")):""}function fs(e){return w(e)?wa(F(e,"None")):""}function un(e){let t=fs(e).trim().toLowerCase();return!!t&&t!=="geen actieve storingen"}function It(){let e=[],t=J("compressorCyclingWarning2h")||J("compressorCyclingWarning72h")||J("alternatingCompressorStartsWarning"),r=J("compressorCyclingAlertLatched"),n=Et("cicPollingEnabled"),a=Et("otEnabled"),i=(c,p)=>{J(c)&&e.push({key:c,label:p})};i("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),i("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),i("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),i("lowflowFaultActive","Te lage flow"),i("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),n&&i("cicDataStale","CIC-data is verouderd"),a&&i("otLinkProblem","OpenTherm-verbinding meldt een probleem"),un("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${fs("hp1Failures")}`}),un("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${fs("hp2Failures")}`});let l=e.length;return r&&!t&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:r,cyclingAlertActive:t,cyclingAlertRecovered:r&&!t,title:l>0?"Aandacht nodig":r?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:r?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function dn(e){let t=e.active?e.problems.map(r=>r.key).sort().join("|"):"";if(!t){o.installationMonitoringProblemSignature="";return}t!==o.installationMonitoringProblemSignature&&(o.installationMonitoringProblemSignature=t,o.installationMonitoringDetailsOpen=!0)}var bs=null,vs=null;function nd({getSignature:e,patch:t}={}){bs=typeof e=="function"?e:null,vs=typeof t=="function"?t:null}function ad(){return bs?bs():""}function ys(){return vs?vs():!1}var ws=null;function id({patch:e}={}){ws=typeof e=="function"?e:null}function sd(){return ws?ws():!1}var mr=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"],Ss=["trendHistoryEnabled","trendHistoryFlashEnabled"],qs=["lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"];function io(){return[...new Set(mr)]}var mt={};function ld(e={}){mt={refreshEnergyHistoryData:typeof e.refreshEnergyHistoryData=="function"?e.refreshEnergyHistoryData:null,refreshSettingsStorageState:typeof e.refreshSettingsStorageState=="function"?e.refreshSettingsStorageState:null,refreshTrendHistoryData:typeof e.refreshTrendHistoryData=="function"?e.refreshTrendHistoryData:null,refreshTrendHistoryMetadata:typeof e.refreshTrendHistoryMetadata=="function"?e.refreshTrendHistoryMetadata:null,shouldRefreshSettingsStorageForCurrentSurface:typeof e.shouldRefreshSettingsStorageForCurrentSurface=="function"?e.shouldRefreshSettingsStorageForCurrentSurface:null}}function ks(){return mt.shouldRefreshSettingsStorageForCurrentSurface?mt.shouldRefreshSettingsStorageForCurrentSurface():!1}async function cd(e={}){return mt.refreshTrendHistoryMetadata?mt.refreshTrendHistoryMetadata(e):!1}async function ud(e={}){return mt.refreshSettingsStorageState?mt.refreshSettingsStorageState(e):!1}async function Cs(e={}){return mt.refreshTrendHistoryData?mt.refreshTrendHistoryData(e):!1}async function Sa(e={}){return mt.refreshEnergyHistoryData?mt.refreshEnergyHistoryData(e):!1}var gt={};function gr(e={}){Object.entries(e).forEach(([t,r])=>{typeof r=="function"&&(gt[t]=r)})}function dd(){return gt.patchEnergyDom?gt.patchEnergyDom():!1}function pd(){return gt.patchResultsDom?gt.patchResultsDom():!1}function md(){return gt.patchOverviewDom?gt.patchOverviewDom():!1}function Es(){return gt.patchControlReplayDom?gt.patchControlReplayDom():!1}function gd(){return gt.patchDiagnosisDom?gt.patchDiagnosisDom():!1}var Lo={};function fd(e={}){Lo={clearOutput:typeof e.clearOutput=="function"?e.clearOutput:null,closeStream:typeof e.closeStream=="function"?e.closeStream:null,resetRecoveryState:typeof e.resetRecoveryState=="function"?e.resetRecoveryState:null}}function Ts(){if(Lo.closeStream)return Lo.closeStream();let e=o.webServerLogSource;e&&e.close(),o.webServerLogSource=null,o.webServerLogConnected=!1}function xs(){if(Lo.clearOutput)return Lo.clearOutput();o.webServerLogEntries=[],o.webServerLogError="",o.webServerLogRaw="",o.webServerLogNotice=""}function $s(){if(Lo.resetRecoveryState)return Lo.resetRecoveryState();Ts(),o.webServerLogEnabled=null,o.webServerLogConnected=!1,xs()}function hd(){let e=o.mqttStatus;return e?e.enabled&&e.connected?"Verbonden":e.enabled?"Ingeschakeld":e.broker?"Uit":"Niet ingesteld":"Laden..."}function bd(){let e=o.mqttStatus;if(!e)return"MQTT-status wordt geladen.";let t=String(e.broker||"").trim(),r=Number(e.port||1883),n=t?`${t}:${r}`:"geen broker";return e.enabled&&e.connected?`Verbonden met ${n}.`:e.enabled?t?`MQTT staat aan; verbinding met ${n} is nog niet bevestigd.`:"MQTT staat aan, maar er is nog geen broker ingesteld.":t?`Broker ${n} is opgeslagen, maar MQTT inputbronnen staan uit.`:"MQTT inputbronnen staan uit. Stel een broker in om externe bronwaarden te ontvangen."}function fb(e,t=2){let r=R(e);return Number.isFinite(r)?`
      <span class="oq-settings-mqtt-sensor-value-number">${s(r.toFixed(t))}</span>
      <span class="oq-settings-mqtt-sensor-value-unit">\xB0C</span>
    `:'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>'}function hb(e){if(!w(e.valueKey)||!T(e.validKey))return'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>';let t=e.activeLabel||"Toegestaan",r=e.inactiveLabel||"Geblokkeerd";return`<span class="oq-settings-mqtt-sensor-value-boolean">${s(T(e.valueKey)?t:r)}</span>`}function bb(e){return e.kind==="binary"?hb(e):fb(e.valueKey)}function vb(e){let t=R(e);return Number.isFinite(t)?t<60?`${Math.round(t)} s`:t<3600?`${Math.round(t/60)} min`:`${Math.round(t/3600)} u`:"\u2014"}function Ms(e){return w(e)?T(e)?"Geldig":"Ontbreekt of verouderd":"Nog geen status"}function Hs(e){let t=o.mqttStatus?.input_topics;if(t&&typeof t=="object"){let r=String(t[e]||"").trim();if(r)return r}return e==="cooling_dew_point"?String(o.mqttStatus?.dew_point_topic||"").trim():""}function qa(e){let t=o.mqttStatus?.input_enabled;return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,e)?t[e]!==!1:!0}function yb(e){let t=o.mqttStatus?.input_retained;return!!(t&&typeof t=="object"&&t[e])}function vd(){return[{topicKey:"cooling_dew_point",label:"Dauwpunt",valueKey:"mqttCoolingDewPoint",ageKey:"mqttCoolingDewPointAge",validKey:"mqttCoolingDewPointValid",staleCopy:"15 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 16.2, 16,2, 16.2 \xB0C of {"value":16.2}. Geldig bereik: -20..35 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"outside_temperature",label:"Buitentemperatuur",valueKey:"mqttOutsideTemperature",ageKey:"mqttOutsideTemperatureAge",validKey:"mqttOutsideTemperatureValid",staleCopy:"30 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 15.0, 15,0, 15.0 \xB0C of {"value":15.0}. Geldig bereik: -40..60 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_temperature",label:"Kamertemperatuur",valueKey:"mqttRoomTemperature",ageKey:"mqttRoomTemperatureAge",validKey:"mqttRoomTemperatureValid",staleCopy:"10 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 21.1, 21,1, 21.1 \xB0C of {"value":21.1}. Geldig bereik: 0..50 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_setpoint",label:"Kamer setpoint",valueKey:"mqttRoomSetpoint",ageKey:"mqttRoomSetpointAge",validKey:"mqttRoomSetpointValid",staleCopy:"nieuw bericht",stateful:!0,payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een setpoint in \xB0C. Voorbeelden: 21.0, 21,0, 21.0 \xB0C of {"value":21.0}. Geldig bereik: 5..35 \xB0C. Retained berichten worden geaccepteerd; de waarde blijft gelden tot een nieuw setpoint, uitschakelen of herstart.'},{topicKey:"heating_enable",label:"Warmtetoestemming",valueKey:"mqttHeatingEnable",ageKey:"mqttHeatingEnableAge",validKey:"mqttHeatingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer warmtetoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}. Retained berichten worden geaccepteerd; de waarde blijft gelden tot een nieuwe payload, uitschakelen of herstart.'},{topicKey:"cooling_enable",label:"Koeltoestemming",valueKey:"mqttCoolingEnable",ageKey:"mqttCoolingEnableAge",validKey:"mqttCoolingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer koeltoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}. Retained berichten worden geaccepteerd; de waarde blijft gelden tot een nieuwe payload, uitschakelen of herstart.'}]}function As(e=vd()){if(!e.length)return"Geen sensoren";let t=e.filter(i=>qa(i.topicKey)),r=e.length-t.length;if(!t.length)return`${r} ${r===1?"topic":"topics"} uitgeschakeld`;let n=t.filter(i=>T(i.validKey)).length,a=n===t.length?`${n} ${n===1?"sensor":"sensoren"} geldig`:`${n} van ${t.length} sensoren geldig`;return r?`${a} \xB7 ${r} uit`:a}function yd(){let e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,r=!!o.mqttDraftClearPassword,n=e.password_set?"Leeg laten om huidig wachtwoord te behouden":"Optioneel",a=o.mqttNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(o.mqttNotice)}</span></div>`:"",i=o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-mqtt-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Integratie</p>
              <h2 class="oq-helper-modal-title" id="oq-mqtt-modal-title">MQTT brokerconfiguratie</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit MQTT brokerconfiguratie">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Stel de broker in waarop OpenQuatt MQTT-inputs beluistert.</p>
          ${a}
          ${i}
          <div class="oq-settings-mqtt-form-grid">
            <label class="oq-settings-mqtt-toggle">
              <input
                type="checkbox"
                data-oq-mqtt-field="enabled"
                ${t?"checked":""}
                ${o.mqttBusy?"disabled":""}
              >
              <span>MQTT inputbronnen inschakelen</span>
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Broker</span>
              <input
                class="oq-helper-input"
                type="text"
                data-oq-mqtt-field="broker"
                value="${s(o.mqttDraftBroker)}"
                placeholder="mqtt.local"
                autocomplete="off"
                ${o.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field oq-settings-mqtt-field--port">
              <span>Poort</span>
              <input
                class="oq-helper-input"
                type="number"
                min="1"
                max="65535"
                step="1"
                inputmode="numeric"
                data-oq-mqtt-field="port"
                value="${s(o.mqttDraftPort)}"
                ${o.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Gebruikersnaam</span>
              <input
                class="oq-helper-input"
                type="text"
                data-oq-mqtt-field="username"
                value="${s(o.mqttDraftUsername)}"
                autocomplete="username"
                ${o.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Wachtwoord</span>
              <input
                class="oq-helper-input"
                type="password"
                data-oq-mqtt-field="password"
                value="${s(o.mqttDraftPassword)}"
                placeholder="${s(n)}"
                autocomplete="current-password"
                ${o.mqttBusy||r?"disabled":""}
              >
            </label>
            ${e.password_set?`
              <label class="oq-settings-mqtt-toggle">
                <input
                  type="checkbox"
                  data-oq-mqtt-field="clear-password"
                  ${r?"checked":""}
                  ${o.mqttBusy?"disabled":""}
                >
                <span>Opgeslagen wachtwoord wissen</span>
              </label>
            `:""}
          </div>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.mqttBusy?"disabled":""}>Gereed</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-mqtt-config" ${o.mqttBusy||!e.csrf_token?"disabled":""}>
              ${o.mqttBusy?"Opslaan...":"Opslaan"}
            </button>
          </div>
        </section>
      </div>
    `}function wd(){let e=vd(),t=e.some(i=>i.topicKey===o.mqttExpandedTopicKey)?o.mqttExpandedTopicKey:"",r=As(e),n=e.map(i=>{let l=Hs(i.topicKey),c=l||"Wordt geladen...",p=vb(i.ageKey),u=qa(i.topicKey),d=T(i.validKey),b=u&&d&&yb(i.topicKey),y=o.mqttCopiedTopicKey===i.topicKey,h=t===i.topicKey,g=o.mqttInputToggleBusyKey===i.topicKey,m=u?d?"valid":"invalid":"disabled",v=u?d?"geldig":"ongeldig":"uit",S=u?Ms(i.validKey):"Uitgeschakeld",q=u?d?i.stateful?`Laatste MQTT-publicatie ${p==="\u2014"?"onbekend":`${p} geleden`}. De waarde blijft geldig tot een nieuwe payload, uitschakelen of herstart.`:`Laatste MQTT-publicatie ${p==="\u2014"?"onbekend":`${p} geleden`}. Zonder nieuwe MQTT-publicatie wordt de waarde na ${i.staleCopy} ongeldig.`:p==="\u2014"?"Nog geen geldige MQTT-publicatie ontvangen.":`Laatste MQTT-publicatie ${p} geleden; de waarde is niet meer geldig.`:"Dit topic wordt niet gebruikt. OpenQuatt subscribed er niet op.",C=u?"Topic uitschakelen":"Topic gebruiken",k="Retained MQTT-waarde: ontvangen bij verbinden met de broker.";return`
        <article class="oq-settings-mqtt-sensor-row${h?" is-open":""}${u?"":" is-disabled"}">
          <div
            class="oq-settings-mqtt-sensor-summary"
            data-oq-action="toggle-mqtt-sensor-topic"
            data-oq-mqtt-topic-key="${s(i.topicKey)}"
            aria-expanded="${h?"true":"false"}"
          >
            <span class="oq-settings-mqtt-sensor-name">${s(i.label)}</span>
            <span class="oq-settings-mqtt-sensor-value">
              ${u?bb(i):'<span class="oq-settings-mqtt-sensor-value-missing">\u2014</span>'}
            </span>
            <span class="oq-settings-mqtt-sensor-status-cell">
              <em
                class="oq-settings-mqtt-sensor-status oq-settings-mqtt-sensor-status--${m}"
                title="${s(q)}"
                aria-label="${s(S)}: ${s(q)}"
              >${s(v)}</em>
              ${b?`<span class="oq-settings-mqtt-sensor-retained" title="${s(k)}" aria-label="${s(k)}">R</span>`:""}
            </span>
            <button
              class="oq-settings-toggle-switch oq-settings-mqtt-sensor-inline-toggle${u?" is-on":""}"
              type="button"
              data-oq-action="toggle-mqtt-input"
              data-oq-mqtt-topic-key="${s(i.topicKey)}"
              aria-pressed="${u?"true":"false"}"
              aria-label="${s(`${i.label}: ${C}`)}"
              title="${s(C)}"
              ${g||!o.mqttStatus?.csrf_token?"disabled":""}
            >
              <span class="oq-settings-toggle-switch-track"><span class="oq-settings-toggle-switch-knob"></span></span>
            </button>
            <span class="oq-settings-mqtt-sensor-chevron" aria-hidden="true"></span>
          </div>
          ${h?`
            <div class="oq-settings-mqtt-sensor-topic">
              <div class="oq-settings-mqtt-sensor-topic-head">
                <span class="oq-settings-mqtt-sensor-topic-label">Subscribe-topic</span>
              </div>
              <div class="oq-settings-mqtt-topic-row">
                <div class="oq-settings-mqtt-topic-field${y?" is-copied":""}">
                  <code>${s(c)}</code>
                  <button
                    class="oq-settings-mqtt-topic-copy"
                    type="button"
                    data-oq-action="copy-mqtt-topic"
                    data-oq-mqtt-topic-key="${s(i.topicKey)}"
                    aria-label="${s(y?`MQTT-topic voor ${i.label} gekopieerd`:`Kopieer MQTT-topic voor ${i.label}`)}"
                    title="${y?"Gekopieerd":"Kopieer topic"}"
                    ${l?"":"disabled"}
                  >
                    ${$e(y?"clipboard-check":"clipboard","oq-settings-mqtt-topic-copy-icon")}
                  </button>
                </div>
                <details class="oq-settings-mqtt-topic-info">
                  <summary aria-label="${s(`Payloadinformatie voor ${i.label}`)}">i</summary>
                  <div class="oq-settings-mqtt-topic-info-popover">
                    <strong>${s(i.payloadInfoTitle||"Payload")}</strong>
                    <p>${s(i.payloadInfo||"")}</p>
                  </div>
                </details>
              </div>
            </div>
          `:""}
        </article>
      `}).join(""),a=o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--mqtt-sensors" role="dialog" aria-modal="true" aria-labelledby="oq-mqtt-sensors-modal-title">
          <div class="oq-settings-mqtt-modal-head">
            <span class="oq-settings-mqtt-modal-icon">${wb("oq-settings-mqtt-modal-logo")}</span>
            <div>
              <p class="oq-helper-modal-kicker">Integratie</p>
              <h2 class="oq-helper-modal-title" id="oq-mqtt-sensors-modal-title">MQTT sensoren</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit MQTT sensoren">\xD7</button>
          </div>
          ${a}
          <div class="oq-settings-mqtt-sensor-table">
            <div class="oq-settings-mqtt-sensor-table-head" aria-hidden="true">
              <span>Sensor</span>
              <span>Waarde</span>
              <span>Status</span>
              <span></span>
              <span></span>
            </div>
            ${n}
          </div>
          <div class="oq-settings-mqtt-sensor-footer">
            <span>${s(r)}</span>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function wb(e=""){return`
      <svg${e?` class="${s(e)}"`:""} viewBox="0 0 320 320" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.1,180.6v117.1c0,8.4,6.8,15.3,15.3,15.3H142C141,239.8,80.9,180.7,7.1,180.6z"/>
        <path d="M7.1,84.1v49.8c99,0.9,179.4,80.7,180.4,179.1h51.7C238.2,186.6,134.5,84.2,7.1,84.1z"/>
        <path d="M312.9,297.6V193.5C278.1,107.2,207.3,38.9,119,7.1H22.4c-8.4,0-15.3,6.8-15.3,15.3v15c152.6,0.9,276.6,124,277.6,275.6h13C306.1,312.9,312.9,306.1,312.9,297.6z"/>
        <path d="M272.6,49.8c14.5,14.4,28.6,31.7,40.4,47.8V22.4c0-8.4-6.8-15.3-15.3-15.3h-77.3C238.4,19.7,256.6,33.9,272.6,49.8z"/>
      </svg>
    `}function Rs(e=o.mqttStatus||{}){let t=e.input_topics&&typeof e.input_topics=="object"?e.input_topics:{},r=e.input_enabled&&typeof e.input_enabled=="object"?e.input_enabled:{},n=e.input_retained&&typeof e.input_retained=="object"?e.input_retained:{};return[e.enabled?"on":"off",e.connected?"connected":"idle",String(e.broker||""),String(e.port||""),String(e.username||""),e.password_set?"password":"nopassword",String(e.dew_point_topic||""),JSON.stringify(t),JSON.stringify(r),JSON.stringify(n),String(e.source||""),String(e.csrf_token||"")].join(":")}function ka(){return[o.systemModal,o.mqttExpandedTopicKey||"",o.mqttCopiedTopicKey||"",o.mqttInputToggleBusyKey||"",o.mqttError||"",Rs(),K("mqttCoolingDewPoint"),K("mqttCoolingDewPointAge"),K("mqttCoolingDewPointValid"),K("mqttOutsideTemperature"),K("mqttOutsideTemperatureAge"),K("mqttOutsideTemperatureValid"),K("mqttRoomTemperature"),K("mqttRoomTemperatureAge"),K("mqttRoomTemperatureValid"),K("mqttRoomSetpoint"),K("mqttRoomSetpointAge"),K("mqttRoomSetpointValid"),K("mqttHeatingEnable"),K("mqttHeatingEnableAge"),K("mqttHeatingEnableValid"),K("mqttCoolingEnable"),K("mqttCoolingEnableAge"),K("mqttCoolingEnableValid")].join("|")}function Ps(){let e=o.mqttStatus||{};o.mqttDraftEnabled=e.enabled===!0,o.mqttDraftBroker=String(e.broker||""),o.mqttDraftPort=String(e.port||1883),o.mqttDraftUsername=String(e.username||""),o.mqttDraftPassword="",o.mqttDraftClearPassword=!1,o.mqttDraftDirty=!1}function Sd(e){let t=e?.dataset?.oqMqttField;if(!t)return!1;if(o.mqttNotice="",o.mqttError="",o.mqttDraftDirty=!0,t==="enabled")o.mqttDraftEnabled=!!e.checked;else if(t==="broker")o.mqttDraftBroker=String(e.value||"");else if(t==="port")o.mqttDraftPort=String(e.value||"");else if(t==="username")o.mqttDraftUsername=String(e.value||"");else if(t==="password")o.mqttDraftPassword=String(e.value||"");else if(t==="clear-password"){o.mqttDraftClearPassword=!!e.checked,o.mqttDraftClearPassword&&(o.mqttDraftPassword="");let r=e.closest(".oq-helper-modal")?.querySelector('[data-oq-mqtt-field="password"]');r&&(r.value=o.mqttDraftPassword,r.disabled=o.mqttBusy||o.mqttDraftClearPassword)}return e.closest(".oq-helper-modal")?.querySelectorAll(".oq-helper-modal-success, .oq-helper-modal-note--error").forEach(r=>{r.remove()}),!0}function qd(){return o.systemModal==="mqtt"||o.systemModal==="mqtt-sensors"||$u()}async function Oo(e={}){if(!on(o.lastMqttStatusRefreshAt,e))return!1;o.lastMqttStatusRefreshAt=Date.now();try{let t=await fetch("/mqtt/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n=r.input_topics&&typeof r.input_topics=="object"?r.input_topics:{},a={};Object.entries(n).forEach(([h,g])=>{a[String(h)]=String(g||"")});let i=r.input_enabled&&typeof r.input_enabled=="object"?r.input_enabled:{},l={};Object.entries(i).forEach(([h,g])=>{l[String(h)]=g!==!1&&String(g).toLowerCase()!=="false"});let c=r.input_retained&&typeof r.input_retained=="object"?r.input_retained:{},p={};Object.entries(c).forEach(([h,g])=>{p[String(h)]=g===!0||String(g).toLowerCase()==="true"});let u=String(a.cooling_dew_point||r.dew_point_topic||"");a.cooling_dew_point=u;let d={enabled:!!r.enabled,connected:!!r.connected,broker:String(r.broker||""),port:Number(r.port||1883),username:String(r.username||""),password_set:!!r.password_set,dew_point_topic:u,input_topics:a,input_enabled:l,input_retained:p,source:String(r.source||""),csrf_token:String(r.csrf_token||"")},b=Rs(),y=Rs(d);return o.mqttStatus=d,b!==y&&(o.systemModal==="mqtt"&&o.mqttDraftDirty||Ps(),o.mqttNotice=""),o.mqttError="",b!==y}catch(t){return o.mqttError=`MQTT-status kon niet worden geladen. ${t.message}`,!1}}async function kd(e="cooling_dew_point"){let t=Hs(e);if(!t){o.mqttError="MQTT-topic is nog niet geladen.",o.mqttCopiedTopicKey="",f();return}try{let r=await eo(t);o.mqttNotice="",o.mqttError=r?"":"Kopi\xEBren is niet gelukt.",o.mqttCopiedTopicKey=r?e:"",o.mqttCopiedTopicTimer&&window.clearTimeout(o.mqttCopiedTopicTimer),r&&(o.mqttCopiedTopicTimer=window.setTimeout(()=>{o.mqttCopiedTopicKey="",o.mqttCopiedTopicTimer=null,o.systemModal==="mqtt-sensors"&&f()},1800))}catch(r){o.mqttError=`Kopi\xEBren is mislukt. ${r.message}`,o.mqttCopiedTopicKey=""}f()}async function Cd(e,t){let r=o.mqttStatus||{};if(!r.csrf_token){o.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",f();return}o.mqttInputToggleBusyKey=e,o.mqttNotice="",o.mqttError="",f();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("enabled",t?"true":"false");let a=await fetch("/mqtt/input/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);o.lastMqttStatusRefreshAt=0,await Oo({force:!0})}catch(n){o.mqttError=`MQTT-topic kon niet worden opgeslagen. ${n.message}`}finally{o.mqttInputToggleBusyKey===e&&(o.mqttInputToggleBusyKey=""),f()}}async function Ed(){let e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,r=String(o.mqttDraftBroker||"").trim(),n=Number(String(o.mqttDraftPort||"").trim()),a=String(o.mqttDraftUsername||"").trim(),i=!!o.mqttDraftClearPassword,l=i?"":String(o.mqttDraftPassword||"");if(!e.csrf_token){o.mqttError="MQTT-configuratie laadt nog. Probeer het zo opnieuw.",f();return}if(!Number.isInteger(n)||n<1||n>65535){o.mqttError="Vul een geldige poort in.",f();return}if(t&&!r){o.mqttError="Vul een broker in als je MQTT inschakelt.",f();return}o.mqttBusy=!0,o.mqttNotice="",o.mqttError="",f();try{let c=new URLSearchParams;c.set("csrf_token",e.csrf_token),c.set("enabled",t?"true":"false"),c.set("broker",r),c.set("port",String(n)),c.set("username",a),c.set("password",l),c.set("clear_password",i?"true":"false");let p=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:c.toString()}),u=await p.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!p.ok||!u.ok)throw new Error(u.error||`HTTP ${p.status}`);o.mqttDraftDirty=!1,await Oo({force:!0}),o.mqttDraftPassword="",o.mqttDraftClearPassword=!1,o.mqttNotice=t?"MQTT inputbronnen staan aan.":"MQTT-configuratie opgeslagen.",o.mqttError="",f()}catch(c){o.mqttError=`Opslaan is mislukt. ${c.message}`,f()}finally{o.mqttBusy=!1,f()}}function Od(){if(o.nativeOpen||o.appView!=="settings")return;let e=()=>{if(!(o.nativeOpen||o.appView!=="settings")){if(o.loadingEntities||o.focusedField||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock){window.setTimeout(Od,250);return}ue({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}async function _d(){if(o.nativeOpen||!_s()||o.overviewMetadataHydrated||o.overviewMetadataHydrating)return!1;let e=_b();if(!e.length)return o.overviewMetadataHydrated=!0,!1;o.overviewMetadataHydrating=!0;try{return await V(e,"all",{concurrency:Lt}),o.overviewMetadataHydrated=!0,!0}catch{return!1}finally{o.overviewMetadataHydrating=!1,o.mounted&&!o.nativeOpen&&f()}}async function Sb(e,t="state"){if(!(!e.length||o.nativeOpen)){o.entitySyncInFlight=!0;try{await V(e,t,{concurrency:t==="all"?Lt:Ot})}finally{o.entitySyncInFlight=!1;let r=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,r&&!o.nativeOpen&&window.setTimeout(()=>{ue(r)},0)}o.mounted&&!o.nativeOpen&&f()}}async function qb(){if(!o.nativeOpen)try{_s()&&await _d(),(o.appView==="overview"||o.appView==="control"||o.appView==="diagnosis")&&await Cs({force:!0}),o.appView==="results"&&await Sa({force:!0}),await Po({force:!0}),Ft()&&await Promise.all([ro({force:!0}),ud({forceTrendHistory:!0,forceEnergyHistory:!0})])}finally{o.mounted&&!o.nativeOpen&&f(),Od()}}async function Fd(){if(o.nativeOpen)return;o.loadingEntities=!0,f();let e=Cb();e>0&&await new Promise(i=>window.setTimeout(i,e));let t=av(),r=iv(t),n=o.appView==="settings"?"all":"state";try{await V(t,n,{concurrency:n==="all"?Lt:Ot}),o.appView==="settings"?await jb():await Ib()}finally{o.loadingEntities=!1,f()}let a=o.appView==="settings"?"all":"state";window.setTimeout(()=>{Sb(r,a)},Rb),Wd(Ls())}var Td={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel","statusLedsEnabled"]},kb={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Je,...lr,...$o,...Bi,...Kr,...zr,"maxWater",...na],service:[...Ur,...sa,...Kr,...zr,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...qt,...xo,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...Vi],integrations:[..._i,...Ii,...Fi,...ji,...Qr,...Wi,...Oi],system:["setupComplete",..._t,"firmwareUpdateChannel","projectVersionText","releaseChannelText","statusLedsEnabled",...mr,"webServerLogHistoryEnabled","debugLevel"]};function _o(){return[...new Set(["setupComplete",...ua])]}function Cb(){let e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}var Id=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","silentModeOverride","totalHeat","totalCoolingPower"],Eb=["strategy","controlModeLabel","hpGeneration","coolingEnableEffectiveSource"],Tb=["totalPower","flowSelected"],xb=["totalHeat","totalCoolingPower"],$b=2e3,Mb=250,Hb=5e3,Ab=250;function Ns(e=o.settingsGroup){let t=De.has(e)?e:me[0].id;return[...new Set(["setupComplete","strategy",...Ze,...kb[t]||[]])]}function jd(){let e=De.has(o.settingsGroup)?o.settingsGroup:me[0].id;return[...new Set(Td[e]||Td.installation)]}var Rb=1200,Pb=1800,Db=0,Nb=3500;function Ds(){return["setupComplete","strategy",...Ze]}function Lb(){let e=new Set;return ca.forEach(t=>{(t.categories||[]).forEach(r=>{(r.groups||[]).forEach(n=>{(n.rows||[]).forEach(a=>{let i=Array.isArray(a)?a[1]:"";i&&e.add(i)})})})}),[...e]}function pn(e,t={}){let r=t.forceFast===!0,n=t.includeBulk===!0;return e==="energy"||e==="results"?[...new Set([...Ds(),...e==="energy"?Id:[],...Lb(),...e==="results"?qs:[]])]:[...new Set([...Ds(),...r||!n?Ki:Jr,...e==="diagnosis"?Ss:[]])]}function Ls(e=o.appView){return e==="diagnosis"||e==="results"||e==="settings"&&Ft()?Db:Pb}function Wd(e=Ls()){o.nativeOpen||(o.supplementaryPrimeTimer&&window.clearTimeout(o.supplementaryPrimeTimer),o.supplementaryPrimeTimer=window.setTimeout(()=>{o.supplementaryPrimeTimer=null,qb()},e))}function Ob(e={}){let t=o.pendingEntitySyncOptions||{},r={...t,...e};t.forceBulk||e.forceBulk?(r.forceBulk=!0,r.forceFast=!1):(t.forceFast||e.forceFast)&&(r.forceFast=!0),o.pendingEntitySyncOptions=r}function Os(e){let t=String(E(e)??"").trim().toLowerCase();return t!==""&&t!=="unknown"&&t!=="unavailable"&&t!=="nan"}function xd(e){return Os(e)&&Number.isFinite(Me(E(e)))}function _s(){return o.appView==="overview"||o.appView==="diagnosis"||o.appView==="energy"}function _b(){return au.filter(e=>{let t=o.entities[e];return t?!String(t.uom??t.unit_of_measurement??"").trim():!O[e]?.optional})}function $d(){return _s()?Eb.every(Os)&&Tb.every(xd)&&xb.some(xd):!0}function Fb(){return o.appView==="settings"}function Md(){return Fb()?jd().every(e=>O[e]?.optional&&!o.entities[e]?!0:Os(e)):!0}async function Ib(){if($d())return;let e=Date.now()+$b;for(;!o.nativeOpen&&!$d()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,Mb));try{await V(Id,"state")}catch{return}}}async function jb(){if(Md())return;let e=Date.now()+Hb;for(;!o.nativeOpen&&!Md()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,Ab));try{await V(jd(),"all")}catch{return}}}var Wb=8e3,Vd=3e3,Hd="/openquatt/entities",Vb=900,Ad="/openquatt/service/status",Rd="/openquatt/decision-log",Bb=15e3;function Fs(){return o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint?Vd:Wb}function Is(e){let t=String(e||"").toLowerCase();return t.includes("failed to fetch")||t.includes("load failed")||t.includes("networkerror")||t.includes("network request failed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("err_connection")||t.includes("timeout")}var Kb=300*1e3;function zb(){if(o.optionalMissingEntities)for(let e of Object.keys(o.optionalMissingEntities))delete o.optionalMissingEntities[e]}function Pd(){let e=Date.now();o.lastEntitySyncAt=e,o.lastEntitySyncSuccessAt=e,o.entitySyncFailureCount=0,!!o.deviceReconnectMode&&typeof ns=="function"&&ns()&&(o.lastFastEntitySyncAt=0,o.lastBulkEntitySyncAt=0,o.lastStaticEntitySyncAt=0,o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,o.decisionLog=null,o.decisionLogError="",o.decisionLogSignature="",o.decisionLogLastFetchAt=0,typeof $s=="function"?$s():(Ts(),xs(),o.webServerLogEnabled=null,o.webServerLogConnected=!1),zb())}function Bd(e){if(!Is(e)){o.entitySyncFailureCount=0,as();return}o.entitySyncFailureCount=Number(o.entitySyncFailureCount||0)+1,o.deviceReconnectLastError=String(e||""),(o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||o.entitySyncFailureCount>=2)&&oo(o.updateInstallBusy||o.updateInstallPhaseHint?"ota":o.busyAction==="restartAction"?"restart":"reconnect",e)}function Ub(e=Date.now(),t={}){if(t.forceProbe===!0||o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||Number(o.entitySyncFailureCount||0)>0)return!0;let r=Number(o.lastEntitySyncSuccessAt||o.lastEntitySyncAt||o.lastEntityResponseAt||0);if(!r)return!0;let n=document.hidden?Xr:du;return e-r>=n}async function Gb(){let e=O.status||O.setupComplete;if(!e)return{ok:!0,message:""};let t=o.deviceReconnectMode?Vd:uu,r=Y(e.domain,e.name);if(typeof AbortController=="function"){let n=new AbortController,a=window.setTimeout(()=>n.abort(),t);try{let i=await fetch(r,{cache:"no-store",signal:n.signal});return o.lastEntityResponseAt=Date.now(),{ok:i.ok||i.status===404,message:i.ok||i.status===404?"":`${e.name} HTTP ${i.status}`}}catch(i){return{ok:!1,message:n.signal.aborted?`${e.name} request timed out after ${t}ms`:i.message||String(i)}}finally{window.clearTimeout(a)}}try{let n=await fetch(r,{cache:"no-store"});return o.lastEntityResponseAt=Date.now(),{ok:n.ok||n.status===404,message:n.ok||n.status===404?"":`${e.name} HTTP ${n.status}`}}catch(n){return{ok:!1,message:n.message||String(n)}}}function Qb(e,t=Date.now()){let r=o.optionalMissingEntities?.[e];return!O[e]?.optional||!r?!1:t-Number(r)<Kb}function Yb(e,t=Date.now()){o.optionalMissingEntities&&(o.optionalMissingEntities[e]=t)}function Jb(e){let t=O[e];return t?`${e}	${t.domain}	${t.name}`:""}function Dd(e,t){let r=new URLSearchParams;return r.set("detail",t==="all"?"all":"state"),r.set("entities",e.join(`
`)),r.toString()}function js(e,t){let r=[],n=[],a=[],i="";return e.forEach(l=>{let c=Jb(l);if(!c)return;let p=[...a,c],u=Dd(p,t);if(a.length&&u.length>Vb){r.push({keys:n,body:i}),n=[l],a=[c],i=Dd(a,t);return}n=[...n,l],a=p,i=u}),a.length&&r.push({keys:n,body:i}),r}async function Zb(e){let t=Fs(),r={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body};if(typeof AbortController=="function"){let a=new AbortController,i=window.setTimeout(()=>a.abort(),t);try{let l=await fetch(Hd,{...r,signal:a.signal});if(!l.ok)throw new Error(`bulk entities HTTP ${l.status}`);return l.json()}catch(l){throw a.signal.aborted?new Error(`bulk entities request timed out after ${t}ms`):l}finally{window.clearTimeout(i)}}let n=await fetch(Hd,r);if(!n.ok)throw new Error(`bulk entities HTTP ${n.status}`);return n.json()}async function Xb(){let e=Fs(),t={cache:"no-store",headers:{"Cache-Control":"no-store"}};if(typeof AbortController=="function"){let n=new AbortController,a=window.setTimeout(()=>n.abort(),e);try{let i=await fetch(Ad,{...t,signal:n.signal});if(!i.ok)throw new Error(`service status HTTP ${i.status}`);return i.json()}catch(i){throw n.signal.aborted?new Error(`service status request timed out after ${e}ms`):i}finally{window.clearTimeout(a)}}let r=await fetch(Ad,t);if(!r.ok)throw new Error(`service status HTTP ${r.status}`);return r.json()}async function ev(){let e=Fs(),t={cache:"no-store",headers:{"Cache-Control":"no-store"}};if(typeof AbortController=="function"){let n=new AbortController,a=window.setTimeout(()=>n.abort(),e);try{let i=await fetch(Rd,{...t,signal:n.signal});if(!i.ok)throw new Error(`decision log HTTP ${i.status}`);return i.json()}catch(i){throw n.signal.aborted?new Error(`decision log request timed out after ${e}ms`):i}finally{window.clearTimeout(a)}}let r=await fetch(Rd,t);if(!r.ok)throw new Error(`decision log HTTP ${r.status}`);return r.json()}function tv(e={}){let t=Array.isArray(e.events)?e.events:[],r=Array.isArray(e.buckets)?e.buckets:[],n=t[0]||{},a=t[t.length-1]||{},i=r[r.length-1]||{};return[e?.meta?.event_count??t.length,e?.meta?.dropped_count??0,t.length,n.seq??"",a.seq??"",a.uptime_s??"",e?.meta?.boot_epoch_s??"",n.epoch_s??"",a.epoch_s??"",r.length,i.hour_start_uptime_s??"",i.attention_count??""].join("|")}async function ov(e={}){if(o.appView!=="control")return!1;let t=e.force===!0,r=Date.now();if(!t&&o.decisionLogFetchPromise)return o.decisionLogFetchPromise;if(!t&&(o.decisionLog||o.decisionLogError)&&r-Number(o.decisionLogLastFetchAt||0)<Bb)return!1;o.decisionLogFetchPromise=(async()=>{let n=await ev(),a=Array.isArray(n?.events)?n.events:[];if(!n?.ok||!Array.isArray(n?.events))throw new Error("decision log response mist events");let i=tv(n),l=o.decisionLogError!==""||o.decisionLogSignature!==i||!o.decisionLog;return o.decisionLog={...n,events:a,buckets:Array.isArray(n.buckets)?n.buckets:[]},o.decisionLogError="",o.decisionLogSignature=i,o.decisionLogLastFetchAt=Date.now(),l})();try{return await o.decisionLogFetchPromise}catch(n){let a=n.message||String(n),i=!!o.decisionLog||o.decisionLogError!==a;return o.decisionLog=null,o.decisionLogError=a,o.decisionLogSignature="",o.decisionLogLastFetchAt=Date.now(),i}finally{o.decisionLogFetchPromise=null}}function rv(e={}){let t=e?.entities&&typeof e.entities=="object"?e.entities:{};Object.entries(t).forEach(([r,n])=>{Gr.has(r)&&(o.optionalMissingEntities&&delete o.optionalMissingEntities[r],o.entities[r]=Kd(r,o.entities[r],n))})}async function nv(e){if(!e.length)return{ok:!0,message:""};try{let t=await Xb();return rv(t),o.lastEntityResponseAt=Date.now(),{ok:!0,message:""}}catch(t){return{ok:!1,message:t.message||String(t)}}}async function V(e,t="state",r={}){let n=Date.now(),a=r.forceMissing===!0,i=e.filter(v=>a||Gr.has(v)||!Qb(v,n));if(!i.length)return;let l=i.filter(v=>Gr.has(v)),c=i.filter(v=>!Gr.has(v)),u=(await nv(l)).ok?c:[...c,...l];if(!u.length){Nd(),dn(It()),o.busyAction||(Pd(),o.controlError="");return}let d=Number(r.concurrency),b=Number.isFinite(d)&&d>0?Math.floor(d):Lt,y=js(u,t),h=Math.max(1,Math.min(b,Lt)),g=[];for(let v=0;v<y.length;v+=h){let S=y.slice(v,v+h),q=await Promise.allSettled(S.map(async C=>({chunk:C,payload:await Zb(C)})));g.push(...q)}g.some(v=>v.status==="fulfilled")&&(o.lastEntityResponseAt=Date.now());let m="";g.forEach(v=>{if(v.status!=="fulfilled"){let $=v.reason.message||String(v.reason);m||(m=$);return}let{chunk:S,payload:q}=v.value,C=q?.entities&&typeof q.entities=="object"?q.entities:{},k=new Set(Array.isArray(q?.missing)?q.missing:[]);S.keys.forEach($=>{if(Object.prototype.hasOwnProperty.call(C,$)){o.optionalMissingEntities&&delete o.optionalMissingEntities[$],o.entities[$]=Kd($,o.entities[$],C[$]);return}let D=O[$];D?.optional?k.has($)&&Yb($,n):m||(m=`${D?.name||$} ontbreekt in bulk response`)})}),Nd(),dn(It()),m?(Bd(m),o.deviceReconnectMode?o.controlError="":o.controlError=`Niet alle helpervelden konden worden ververst. ${m}`):o.busyAction||(Pd(),o.controlError="")}function Kd(e,t={},r={}){let n={...t||{},...r||{}};return O[e]?.domain==="select"&&(!String(r.state??"").trim()&&String(t?.state??"").trim()&&(n.state=t.state),!String(r.value??"").trim()&&String(t?.value??"").trim()&&(n.value=t.value),!Array.isArray(r.option)&&Array.isArray(t?.option)&&(n.option=t.option),!Array.isArray(r.options)&&Array.isArray(t?.options)&&(n.options=t.options)),n}function Nd(){o.complete=ga(),o.stage=o.complete===!0?"Gereed":o.complete===!1?"Quick Start":"Laden...",o.summary=wu(),o.appView==="diagnosis"&&!dt()&&pt(no(),{syncMode:"replace",forceSync:!0}),o.appView||pt(cn()||no(),{syncMode:"replace",forceSync:!0})}function av(){let e=Ds();return o.appView==="settings"?[...new Set([...e,...Ns()])]:o.appView==="energy"||o.appView==="results"?pn(o.appView,{forceFast:!0}):o.appView==="overview"||o.appView==="diagnosis"?pn(o.appView,{forceFast:!0}):[...new Set(e)]}function iv(e=[]){let t=new Set(e);return(o.appView==="settings"?Ns():o.appView==="overview"||o.appView==="control"||o.appView==="diagnosis"?[...new Set([...pn(o.appView,{includeBulk:!0}),..._t])]:o.appView==="energy"||o.appView==="results"?[...new Set([...pn(o.appView,{forceFast:!0}),..._t])]:[...new Set(["setupComplete","strategy",...Ze])]).filter(n=>!t.has(n))}function Ld(e=Date.now(),t={}){return t.forceBulk===!0?!0:e-Number(o.lastBulkEntitySyncAt||0)>=lu}async function ue(e={}){if(o.nativeOpen||o.loadingEntities||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock)return;if(o.updateInstallBusy||ya()){o.pendingEntitySyncOptions=null;return}if(o.focusedField&&o.appView!=="settings")return;if(o.entitySyncInFlight){Ob(e);return}let t=Date.now();if(document.hidden&&t-Number(o.lastEntitySyncAttemptAt||0)<Xr)return;let r=o.appView,n=e.prefetchView==="overview"&&!e.forceBulk&&r==="settings",a=n?"overview":r,i=a==="overview"||a==="control"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,c=!l&&!n&&Ld(t,e),u=t-Number(o.lastStaticEntitySyncAt||0)>=cu||o.updateInstallBusy||o.updateInstallPhaseHint?_t:[],d=o.quickStartModalOpen&&o.currentStep==="flow-source"?ut:[],b=o.quickStartModalOpen&&o.currentStep==="thermostat-source"?To:[],y=ks()?io():[],h=n?[...Ki,...Ze,"setupComplete",...u]:i?[...pn(a,{forceFast:l,includeBulk:c}),...u]:r==="settings"?[...new Set([...Ns(),...y,...u])]:c?["setupComplete",...u,...Ze,"strategy",...Eo,...Je,...ne()?ge.map(g=>g.key):qt]:["setupComplete",...Ze,"strategy",...u];o.entitySyncInFlight=!0,o.lastEntitySyncAttemptAt=t;try{let g=o.deviceReconnectMode,m=Ub(t,e)?await Gb():{ok:!0,message:""};if(!m.ok){Bd(m.message),n||f();return}if(await V([...new Set([...h,...d,...b])],n?"state":r==="settings"?"all":"state",{concurrency:l&&i?Ot:Lt}),o.lastFastEntitySyncAt=Date.now(),c&&(a==="overview"||a==="control"||a==="diagnosis")&&!n&&(o.lastBulkEntitySyncAt=o.lastFastEntitySyncAt),u.length&&(o.lastStaticEntitySyncAt=o.lastFastEntitySyncAt),n)return;i&&!o.overviewMetadataHydrated&&!o.overviewMetadataHydrating&&_d();let v=g!==o.deviceReconnectMode,S=l&&i,q=S?!1:a==="overview"||a==="control"||a==="diagnosis"?await Cs():!1,C=S?!1:o.appView==="results"?await Sa():!1,k=a==="control"?await ov({force:e.forceDecisionLog===!0}):!1,$=S?!1:ks()?(await Promise.all([cd(),Sa({metaOnly:!0})])).some(Boolean):!1,D=S||!Hu()?!1:await Po(),N=S||!Au()?!1:await ro(),z=S||!qd()?!1:await Oo({force:o.systemModal==="mqtt-sensors"}),H=ad();if(S&&!o.nativeOpen&&Wd(Ls(a)),v){f();return}if(q&&o.appView==="diagnosis"&&!o.root?.querySelector(".oq-overview-trends")){f();return}if(C&&o.appView==="results"&&!o.root?.querySelector(".oq-energy-history")){f();return}if(k&&o.appView==="control"){Es()||f();return}if($&&o.appView==="settings"){f();return}if(D&&(o.systemModal==="login"||Ft())){f();return}if(N&&o.appView==="settings"){f();return}if(o.systemModal==="mqtt-sensors"){ka()!==o.mqttSensorsModalRenderSignature&&f();return}if(z&&o.appView==="settings"){f();return}let U=!!(o.updateModalOpen||o.systemModal||o.interfacePanelOpen);if(H!==o.headerRenderSignature)if(U&&ys())o.headerRenderSignature=H;else{f();return}else ys();if(o.appView==="settings"&&String(o.systemModal||"").startsWith("service-task-")){rn()!==o.settingsRenderSignature&&f();return}if(U)return;if(o.appView==="settings"){let A=rn();if(A!==o.settingsRenderSignature&&!o.focusedField){f();return}if(!sd()){o.focusedField||f();return}o.focusedField&&(o.settingsRenderSignature=A);return}if(o.appView==="diagnosis"){gd()||f();return}if(o.appView==="control"){Es()||f();return}if(o.appView==="energy"){dd()||f();return}if(o.appView==="results"){pd()||f();return}md()||f()}catch(g){n||(o.controlError=`Helperstatus kon niet worden geladen. ${g.message}`,f())}finally{o.entitySyncInFlight=!1;let g=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,g&&!o.nativeOpen&&window.setTimeout(()=>{ue(g)},0),l&&(a==="overview"||a==="control"||a==="diagnosis")&&!n&&!o.nativeOpen&&!g&&Ld(Date.now())&&window.setTimeout(()=>{ue({forceBulk:!0})},Nb)}}function Tt(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function sv(){let e=String(E("hpGeneration")||"").trim();return e||""}function mn(e){let t=String(e||"").trim().toLowerCase();return t==="single"||t.includes("quatt single")||t.includes("openquatt single")?"single":t==="duo"||t.includes("quatt duo")||t.includes("openquatt duo")?"duo":""}function lv(){if(!Array.isArray(cr))return"";if(cr.some(t=>w(t)))return"duo";let e=o.optionalMissingEntities||{};return cr.every(t=>e[t])?"single":""}function Ws(e){let t=mn(e);return(t==="single"||t==="duo")&&typeof o<"u"&&o&&typeof o=="object"&&(o.lastKnownInstallationTopology=t),t}function cv(){if(typeof o<"u"&&o&&typeof o=="object"){let e=String(o.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function te(){let e=mn(E("installationTopology"));if(e==="single"||e==="duo")return Ws(e);let t=mn(Tt().installation);if(t==="single"||t==="duo")return Ws(t);let r=lv();return r?Ws(r):cv()}function ft(){let e=te(),t=sv();return e==="single"?t?`Quatt Single ${t}`:"Quatt Single":e==="duo"?t?`Quatt Duo ${t}`:"Quatt Duo":t?`Quatt Hybrid ${t}`:"Quatt Hybrid"}function Fe(){return"OpenQuatt"}function Vs(e){let t=String(e||"").trim().toLowerCase();return t==="wifi"||t==="wi-fi"||t.includes("wifi")||t.includes("wi-fi")?"wifi":t==="eth"||t==="ethernet"||t.includes("ethernet")?"eth":""}function et(e=so()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function Fo(e=te()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function gn(){let e=String(E("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(Tt().hardwareProfile||e).trim().toLowerCase()}function so(){return Vs(E("connectionText")||Tt().connection)}function zd(){let e=so();return e==="wifi"?"eth":e==="eth"?"wifi":""}function Ud(){let e=te();return e==="single"?"duo":e==="duo"?"single":""}function fr(e=te(),t=so()){let r=Fo(e),n=gn();return n==="heatpump_controller_q"?`Heatpump Controller Q ${r} ${et(t)}`:n==="heatpump_listener"?`Heatpump Listener ${r} ${et(t)}`:n==="waveshare"?`Waveshare ${r} ${et(t)}`:`${Fe()} ${r} ${et(t)}`}function Bs(){let e=T("timeValid"),t=String(E("timeNowHhmm")||"").trim();if(t&&t!=="invalid")return t;if(w("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function Ea(){return w("timeValid")&&!T("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${Bs()}`}function Ca(e){if(!Number.isFinite(e)||e<0)return"\u2014";let t=Math.floor(e),r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function uv(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function dv(e){let t=e?.state;if(t!==""&&t!==null&&t!==void 0){let a=Number(t);if(Number.isFinite(a))return a}let r=e?.value,n=Number(r);return Number.isFinite(n)?n:NaN}function hr(){let e=dv(o.entities.uptime);if(Number.isFinite(e)&&e>=0){let n=uv(o.entities.uptime);if(n==="d")return Ca(e*1440);if(n==="h")return Ca(e*60);if(n==="s")return Ca(e/60)}let t=String(o.entities.uptimeReadable?.state??o.entities.uptimeReadable?.value??"").trim();if(t&&t.toLowerCase()!=="unknown")return t;let r=Number(Tt().bootedAt);return!Number.isFinite(r)||r<=0?"\u2014":Ca((Date.now()-r)/6e4)}function br(){let e=String(o.entities.ipAddress?.state??o.entities.ipAddress?.value??"").trim();if(e)return e;let t=String(Tt().ipAddress||"").trim();return t||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function lo({key:e,value:t,meta:r,controlClass:n,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
    <label class="${n}">
      <input
        class="${a}"
        type="number"
        data-oq-field="${s(e)}"
        min="${r.min}"
        max="${r.max}"
        step="${r.step}"
        value="${s(t)}"
        ${i}
        ${o.loadingEntities?"disabled":""}
      >
      ${l}
    </label>
  `}function co(e,t,r){return r?`
    <div class="oq-settings-info${o.settingsInfoOpen===e?" is-open":""}" data-oq-settings-info="${s(e)}">
      <button
        class="oq-settings-info-button"
        type="button"
        data-oq-action="toggle-settings-info"
        data-info-id="${s(e)}"
        aria-label="${s(`Uitleg bij ${t}`)}"
        aria-expanded="${o.settingsInfoOpen===e?"true":"false"}"
      >i</button>
      <div class="oq-settings-info-popover" ${o.settingsInfoOpen===e?"":"hidden"}>
        <p>${s(r)}</p>
      </div>
    </div>
  `:""}function pe(e,t,r,n,a="",i=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(t)}</h3>${co(e,t,r)}</div><div class="oq-settings-field-control">${n}</div>${i}</article>`}function He(e,t,r,n,a=""){return pe(e,t,r,`<div class="oq-settings-static-value">${s(n)}</div>`,a)}function Ne({label:e,value:t,note:r="",action:n="",className:a="",dataAttribute:i="data-oq-diagnostics-row",dataValue:l=""}){let c=`oq-settings-system-row${n?" oq-settings-system-row--with-action":""}${a?` ${s(a)}`:""}`,p=i&&l?` ${i}="${s(l)}"`:"";return!n&&!r?`<div class="${c}"${p}><span class="oq-settings-system-row-label">${s(e)}</span><strong class="oq-settings-system-row-value">${s(t)}</strong></div>`:`<div class="${c}"${p}><div class="oq-settings-system-row-copy"><p class="oq-settings-system-row-label">${s(e)}</p><strong class="oq-settings-system-row-value">${s(t)}</strong>${r?`<p class="oq-settings-system-row-note">${s(r)}</p>`:""}</div>${n}</div>`}function Te(e,t={}){let r=typeof t=="number"?{decimals:t}:t||{},n=o.entities[e];if(!n)return"\u2014";let a=Number(n.value);if(!Number.isNaN(a)){let c=Number.isInteger(a)?0:Number.isFinite(r.decimals)?r.decimals:1,p=a.toFixed(Math.max(0,c));return r.trimTrailingZeros&&p.includes(".")&&(p=p.replace(/\.?0+$/,"")),`${p}${n.uom?` ${n.uom}`:""}`}let i=String(n.state??n.value??"").trim(),l=i.toLowerCase();return!i||l==="nan"||l==="unknown"||l==="unavailable"?"\u2014":i}function Io(e,t="\u2014"){let r=o.entities[e];if(!r)return t;let n=String(r.state??r.value??"").trim();return!n||n==="0"||n==="\u2014"?t:n}function jt(e,t="",r=2){let n=Number(e);return Number.isFinite(n)?`${n.toFixed(Math.max(0,r))}${t?` ${t}`:""}`:"\u2014"}function qe(e,t=2){return Te(e,{decimals:t})}function jo(e,t="IDLE"){let r=Io(e,t),n=String(r??"").trim();return!n||n==="0"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN"?t:n}function Ta(){let e=Io("commissioningStatus",""),t=T("cm100Active"),r=String(e||"").trim().toUpperCase();return(t||r==="CM100 READY"||r==="CM100 STOPPED"||r.includes("DONE")||r.includes("FAILED")||r.includes("ABORT")||r.includes("APPLIED")||r.includes("REFUSED"))&&(o.pendingCommissioningCm100Start=!1),r&&r!=="0"?r==="IDLE"&&o.pendingCommissioningCm100Start?"CM100 REQUESTED":r:o.pendingCommissioningCm100Start?"CM100 REQUESTED":t?"CM100 READY":"IDLE"}function Se(e){let t=String(e||"").trim();return t?{None:"Geen",Manual:"Handmatig",Disabled:"Niet gebruiken","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OT-thermostaat + handmatig","CIC + Manual":"CIC + handmatig","CIC + HA input + Manual":"CIC + HA-invoer + handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[oa]:"Stooklijn",[ta]:"Power House","Dew point required":"Dauwpuntmeting vereist","Dew point":"Dauwpunt","Dew point (MQTT)":"Dauwpunt (MQTT)","Dew point (HA)":"Dauwpunt (HA)","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Fallback:"Dauwpuntsbenadering","Fallback blocked":"Dauwpuntsbenadering geblokkeerd","User responsibility":"Expliciet toegestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[t]||t:""}function vr({key:e,option:t,currentValue:r,busy:n,copy:a="",meta:i="",image:l="",imageAlt:c="",infoTitle:p="",infoCopy:u="",infoId:d=""}){let b=t===r,y=`
    <button
      class="oq-settings-choice-card${b?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${u?" oq-settings-choice-card--has-info":""}"
      type="button"
      data-oq-action="select-settings-option"
      data-select-key="${s(e)}"
      data-select-option="${s(t)}"
      aria-pressed="${b?"true":"false"}"
      ${n?"disabled":""}
    >
      <span class="oq-settings-choice-head">
        <span class="oq-settings-choice-title">${s(Se(t))}</span>
        ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
      </span>
      ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(c||Se(t))}" loading="lazy" decoding="async"></span>`:""}
      ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
    </button>
  `;if(!u)return y;let h=p||Se(t),g=d||`${e}-${t}`;return`
    <article class="oq-settings-choice-card-shell${b?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
      ${y}
      ${co(g,h,u)}
    </article>
  `}function Wt(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function uo(e,t,r,n=""){if(!w(e))return"";let a=o.entities[e]||{},i=String(E(e)||""),l=Wt(a);return pe(e,t,r,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>${l.map(c=>`<option value="${s(c)}" ${c===i?"selected":""}>${s(Se(c))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,n)}function pv(e,t,r="Aan",n="Uit"){return`<span class="oq-settings-toggle-state${t?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(r)}" data-off-label="${s(n)}">${s(t?r:n)}</span>`}function Vt(e,t,r,n,a="Aan",i="Uit",l=!0){let c=r?a:i,p=r?"off":"on";return`
    <div class="oq-settings-compact-switch-row">
      ${l?pv(e,r,a,i):""}
      <button
        class="oq-settings-toggle-switch${r?" is-on":""}"
        type="button"
        role="switch"
        data-oq-action="toggle-overview-control"
        data-control-key="${s(e)}"
        data-control-state="${s(p)}"
        data-switch-title="${s(t)}"
        data-on-label="${s(a)}"
        data-off-label="${s(i)}"
        aria-checked="${r?"true":"false"}"
        aria-label="${s(`${t}: ${c}`)}"
        ${n?"disabled":""}
      >
        <span class="oq-settings-toggle-switch-track" aria-hidden="true">
          <span class="oq-settings-toggle-switch-knob"></span>
        </span>
      </button>
    </div>
  `}function Ks(e,t,r="",n=""){let a=t?r:n;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(r)}" data-off-copy="${s(n)}">${s(a)}</p>`:""}function Gd(e,t,r,n="",a="",i=""){if(!w(e))return"";let l=!!E(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return pe(e,t,r,`
      <div class="oq-settings-compact-switch-field">
        ${Vt(e,t,l,c)}
        ${Ks(e,l,n,a)}
      </div>
    `,i)}function Qd(e,t,r,n,a=""){if(!w(e))return"";let i=!!E(e),l=o.loadingEntities||o.busyAction===`switch-${e}`;return pe(e,t,r,`
      <div class="oq-settings-compact-switch-field">
        ${Vt(e,t,i,l)}
        ${n?`<p>${s(n)}</p>`:""}
      </div>
    `,a)}function xa(e,t,r){if(!w(e))return"";let n=!!E(e),a=o.loadingEntities||o.busyAction===`switch-${e}`;return`
    <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
      <div class="oq-settings-integration-card-head">
        <h4>${s(t)}</h4>
      </div>
      <p>${s(r)}</p>
      ${Vt(e,t,n,a)}
    </article>
  `}function ze(e,t,r="oq-helper-button oq-helper-button--ghost",n=!1){return`
    <button
      class="${r}"
      type="button"
      data-oq-action="press-named-button"
      data-oq-button-key="${s(e)}"
      ${n?"disabled":""}
    >
      ${s(t)}
    </button>
  `}function Wo({active:e,startKey:t,stopKey:r,startLabel:n,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:c=!1,stopDisabled:p=!1}){return ze(e?r:t,e?a:n,e?l:i,e?p:c)}function Yd(e,t,r,n,a=""){if(!w(e))return"";let i=o.entities[e]||{},l=String(E(e)||""),c=Wt(i),p=o.loadingEntities||o.busyAction===`save-${e}`,u=`
    <div class="oq-settings-choice-grid">
      ${c.map(d=>{let b=n[d]||"",y=typeof b=="string"?b:b.copy||"",h=typeof b=="string"?"":b.image||"",g=typeof b=="string"?"":b.alt||"";return vr({key:e,option:d,currentValue:l,busy:p,copy:y,image:h,imageAlt:g})}).join("")}
    </div>
  `;return pe(e,t,r,u,a)}function se(e,t,r,n="",a={}){if(!w(e))return"";let i=Le(e),l=Ee(e),c=a.unitOverride||i.uom||"",p=a.showUnit!==!1&&!!c,u=p&&a.unitMode!=="outside",d=lo({key:e,value:l,meta:i,controlClass:`oq-helper-control${p&&!u?" oq-helper-control--split":""}${u?" oq-helper-control--suffix":""}`,unitMarkup:p?u?`<span class="oq-helper-unit-chip">${s(c)}</span>`:`<span class="oq-helper-unit">${s(c)}</span>`:""});return pe(e,t,r,d,n,a.footerMarkup||"")}function tt(e,t,r,n="",a={}){if(!w(e))return"";let i=Le(e),l=fe(e,E(e)),c=a.minLabel||`${i.min}${i.uom||""}`,p=a.maxLabel||`${i.max}${i.uom||""}`,u=a.valueLabel||Q(e,l);return pe(e,t,r,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(c)}</span><strong>${s(u)}</strong><span>${s(p)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${o.loadingEntities?"disabled":""}></label>`,n)}function zs(e,t,r,n={}){if(!w(e))return"";let a=Le(e),i=Ee(e),l=n.compact===!0,c=n.embedded===!0,p=n.infoId||e,u=n.showCopy!==!1;return`
    <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${c?" oq-settings-mini-field--embedded":""}">
      <div class="oq-settings-mini-copy">
        <div class="oq-settings-mini-copy-head">
          <h5>${s(t)}</h5>
          ${r?co(p,t,r):""}
        </div>
        ${r&&u?`<p>${s(r)}</p>`:""}
      </div>
      ${lo({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
    </article>
  `}function Us(e,t,r,n=""){if(!w(e))return"";let a=en(E(e));return pe(e,t,r,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${o.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,n||"oq-settings-field--time")}function oe(e,t,r,n,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(t)}</h3><p>${s(r)}</p></div>${n}</section>`}var Jd=250;function Zd(){if(typeof window>"u")return[];let e=window.__OQ_DEV_WEBSERVER_LOGS__,t=typeof e=="function"?e():e;return Array.isArray(t)?t.map(r=>String(r||"")).filter(r=>r.trim()!==""):[]}function yr(){return typeof window>"u"?!1:Zd().length>0}function mv(){return`${Oe()}/events`}function gv(){return`${Oe()}/openquatt/logs/recent`}function $a(){let e=o.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;let t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function Ma(){return o.nativeOpen?"Niet beschikbaar":yr()?"Voorbeeld":o.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function fv(e){let t=Math.max(0,Math.floor(Number(e)/1e3)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Xd(e){let t=Number(e)||0;if(t>9466848e5){let r=e instanceof Date?e:new Date(t),n={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(r)}catch{return r.toLocaleString("nl-NL",n)}}return fv(t)}function hv(e){let t=Number(e)||0;if(t>9466848e5)return new Date(t).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let r=Math.max(0,Math.floor(t/1e3)),n=Math.floor(r/3600),a=Math.floor(r%3600/60),i=r%60;return`Sinds opstart: ${n}u ${a}m ${i}s`}function bv(){return o.nativeOpen?"Niet beschikbaar":yr()?$a()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":$a()?"Buffer aan":"Buffer uit"}function vv(){return $a()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function Gs(){return o.entities?.debugLevel||null}function ep(e=Gs()){let t=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return t.length?t:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function yv(e=Gs()){let t=String(e?.value??e?.state??"").trim(),r=ep(e);return r.includes(t)?t:r.includes("INFO")?"INFO":r[0]||""}function tp(e,t=null){if(!e||!t)return!1;let r=Number(e.seq),n=Number(t.seq);if(Number.isFinite(r)&&Number.isFinite(n)&&r===n)return!0;let a=String(e.raw??e.text??"").trim(),i=String(t.raw??t.text??"").trim();if(!a||a!==i)return!1;let l=Number(e.receivedAt??e.ts??0),c=Number(t.receivedAt??t.ts??0);return Math.abs(l-c)<=2e3}function wv(e,t){let r=Number(e.receivedAt??e.ts??0),n=Number(t.receivedAt??t.ts??0);if(r!==n)return r-n;let a=Number(e.seq??0),i=Number(t.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(t.raw??""))}function op(e,{prepend:t=!1}={}){if(!Array.isArray(e)||e.length===0)return;let r=t?[...e,...o.webServerLogEntries]:[...o.webServerLogEntries,...e];r.sort(wv);let n=[];for(let a of r){let i=n[n.length-1]||null;tp(a,i)||n.push(a)}o.webServerLogEntries=n.slice(-Jd)}function Qs(e,t={}){let r=Fv(e).trimEnd(),n=Number(t.receivedAt),a=Number(t.seq);return{raw:e,text:r,tone:Iv(e),receivedAt:Number.isFinite(n)?n:Date.now(),seq:Number.isFinite(a)?a:void 0}}function Sv(e,t){let n=Math.max(0,t-e-1)*9e4;return Date.now()-n}function qv(){let e=Zd(),t=e.length;return e.map((r,n)=>Qs(r,{receivedAt:Sv(n,t),seq:n+1}))}function kv(){let e=Ha();e&&(e.scrollTop=e.scrollHeight)}function Bt(){let e=Ha();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Aa(e)}:null}function Cv(e){if(!e)return;let t=Ha();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}let r=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,r)}function Kt(e,t=!0){if(!e)return;let r=Number(o.webServerLogScrollRestoreToken||0)+1;o.webServerLogScrollRestoreToken=r;let n=()=>{o.webServerLogScrollRestoreToken!==r||o.systemModal!=="webserver-logs"||Cv(e)};if(t){window.requestAnimationFrame(n);return}n()}function rp(){return o.root?o.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function np(){let e=rp();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Aa(e)}:null}function Ev(e){if(!e)return;let t=rp();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}let r=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,r)}function Ys(e,t=!0){if(!e)return;let r=Number(o.cm100CommissioningScrollRestoreToken||0)+1;o.cm100CommissioningScrollRestoreToken=r;let n=()=>{o.cm100CommissioningScrollRestoreToken!==r||o.systemModal!=="cm100-commissioning"||Ev(e)};if(t){window.requestAnimationFrame(n);return}n()}function ap(){return o.root?o.root.querySelector("[data-oq-service-task-scroller]"):null}function ip(){let e=ap();return e?{scrollTop:e.scrollTop}:null}function Tv(e){if(!e)return;let t=ap();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function Js(e,t=!0){if(!e)return;let r=Number(o.serviceTaskModalScrollRestoreToken||0)+1;o.serviceTaskModalScrollRestoreToken=r;let n=()=>{o.serviceTaskModalScrollRestoreToken!==r||!String(o.systemModal||"").startsWith("service-task-")||Tv(e)};if(t){window.requestAnimationFrame(n);return}n()}function sp(){return o.root?o.root.querySelector("[data-oq-history-storage-scroller]"):null}function lp(){let e=sp();return e?{scrollTop:e.scrollTop}:null}function xv(e){if(!e)return;let t=sp();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function Zs(e,t=!0){if(!e)return;let r=Number(o.historyStorageModalScrollRestoreToken||0)+1;o.historyStorageModalScrollRestoreToken=r;let n=()=>{o.historyStorageModalScrollRestoreToken!==r||o.systemModal!=="history-storage"||xv(e)};if(t){window.requestAnimationFrame(n);return}n()}async function wr(e={}){if(o.nativeOpen||typeof window.fetch!="function")return;let t=e.scrollState||Bt(),r=Number(o.webServerLogHistoryRequestToken||0)+1;o.webServerLogHistoryRequestToken=r,o.webServerLogHistoryLoading=!0,o.webServerLogHistoryError="";try{let n=await window.fetch(gv(),{headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.json();if(o.systemModal!=="webserver-logs"||o.webServerLogHistoryRequestToken!==r)return;let i=Mv(a);o.webServerLogHistoryLoaded=!0,i.length>0&&(op(i,{prepend:!0}),o.webServerLogRecentTail=i.slice(-4).map(l=>String(l.raw??l.text??"")),o.webServerLogRecentAnchorAt=Date.now())}catch(n){o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===r&&(o.webServerLogHistoryError=n instanceof Error?n.message:"Recente logs konden niet worden opgehaald.")}finally{o.webServerLogHistoryRequestToken===r&&(o.webServerLogHistoryLoading=!1),o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===r&&(f(),Kt(t))}}function $v(e,t=0){if(!e||typeof e!="object")return null;let r=String(e.raw??"").trim()||String(e.message??"").trim();return r?Qs(r,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??t)}):null}function Mv(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((r,n)=>$v(r,n+1)).filter(r=>r!==null)}function Hv(e){if(!e||!Array.isArray(o.webServerLogRecentTail)||o.webServerLogRecentTail.length===0||Date.now()-Number(o.webServerLogRecentAnchorAt||0)>2500)return!1;let r=String(e.raw??e.text??"").trim();return r?o.webServerLogRecentTail.includes(r):!1}function Av(e,t=o.webServerLogEntries){return!e||!Array.isArray(t)||t.length===0?!1:t.some(r=>tp(e,r))}function cp(){yr()&&o.webServerLogEntries.length===0&&(o.webServerLogEntries=qv()),o.webServerLogCopyMessage="",o.webServerLogCopyError="",o.systemModal="webserver-logs",f(),V(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(o.systemModal!=="webserver-logs")return;let e=Bt();f(),Kt(e)}),kv(),(!o.webServerLogHistoryLoaded||o.webServerLogEntries.length===0)&&wr()}function Vo(){o.webServerLogEntries=[],o.webServerLogError="",o.webServerLogHistoryError="",o.webServerLogHistoryLoading=!1,o.webServerLogHistoryLoaded=!1,o.webServerLogScrollRestoreToken=Number(o.webServerLogScrollRestoreToken||0)+1,o.webServerLogCopyMessage="",o.webServerLogCopyError="",o.webServerLogHistoryRequestToken+=1,o.webServerLogRecentTail=[],o.webServerLogRecentAnchorAt=0,o.systemModal==="webserver-logs"&&f()}function Rv(){let e=Bt();xt(),o.webServerLogEnabled=null,o.webServerLogConnected=!1,Vo(),o.systemModal==="webserver-logs"&&wr({scrollState:e})}function Xs(){if(yr()){xt();return}if(!(o.mounted&&!o.nativeOpen&&o.systemModal==="webserver-logs")){xt();return}if(o.webServerLogEnabled===!1){xt();return}o.webServerLogSource||Pv()}function Pv(){if(yr()){o.webServerLogEnabled=!0,o.webServerLogConnected=!1,o.webServerLogError="",f();return}if(typeof window.EventSource!="function"){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="Deze browser ondersteunt geen live logstream.",f();return}try{let e=new window.EventSource(mv());o.webServerLogSource=e,e.addEventListener("open",Dv),e.addEventListener("ping",Nv),e.addEventListener("log",Ov),e.onerror=Lv}catch(e){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",xt(),f()}}function xt(){let e=o.webServerLogSource;if(e)try{e.close()}catch{}o.webServerLogSource=null,o.webServerLogConnected=!1}function Dv(){if(!o.webServerLogSource||o.nativeOpen)return;let e=o.systemModal==="webserver-logs"?Bt():null;o.webServerLogEnabled=!0,o.webServerLogConnected=!0,o.webServerLogError="",f(),Kt(e)}fd({clearOutput:Vo,closeStream:xt,resetRecoveryState:Rv});function Nv(){if(!o.webServerLogSource||o.nativeOpen)return;let e=o.systemModal==="webserver-logs"?Bt():null;o.webServerLogEnabled=!0,o.webServerLogConnected||(o.webServerLogConnected=!0,o.webServerLogError="",f(),Kt(e))}function Lv(){if(!o.webServerLogSource)return;let e=o.systemModal==="webserver-logs"?Bt():null;o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="De live logstream kon niet worden geopend.",xt(),f(),Kt(e)}function Ov(e){if(!o.webServerLogSource||!e||typeof e.data!="string")return;let t=Bt(),r=_v(e.data);if(!r)return;let n=r.split(/\r?\n/).filter(p=>p.trim()!=="");if(n.length===0)return;let i=n.map(p=>Qs(p)).filter(p=>!Hv(p)&&!Av(p));if(i.length===0)return;op(i);let l=Wv(),c=Ha();jv(l),Vv(i,l),o.webServerLogEnabled=!0,c&&t&&Kt(t,!1)}function _v(e){let t=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!t)return"";let r=t.trim();if(r.startsWith("{")&&r.endsWith("}")||r.startsWith("[")&&r.endsWith("]"))try{let n=JSON.parse(r),a=typeof n=="string"?n:n?.message??n?.msg??n?.text??n?.data??n?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return t}function Fv(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function Iv(e){let t=String(e??""),r=Array.from(t.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=r.length-1;i>=0;i-=1){let l=r[i][1].split(";").map(c=>Number(c)).filter(c=>Number.isFinite(c));for(let c=l.length-1;c>=0;c-=1){let p=l[c];if(p===31||p===91)return"error";if(p===33||p===93)return"warning";if(p===32||p===92)return"info";if(p===36||p===96||p===34||p===35)return"debug";if(p===37||p===90||p===38||p===97)return"verbose"}}let n=t.match(/\[(E|W|I|D|V|VV)\]/i);if(!n)return"plain";let a=n[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function jv(e){for(;o.webServerLogEntries.length>Jd;)o.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function Wv(){return o.root?o.root.querySelector("[data-oq-webserver-log-output]"):null}function Ha(){return o.root?o.root.querySelector("[data-oq-webserver-log-scroller]"):null}function Aa(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function Vv(e,t){if(!(!t||e.length===0)){t.dataset.webServerLogEmpty==="true"&&(t.dataset.webServerLogEmpty="false",t.innerHTML="");for(let r of e)t.insertAdjacentHTML("beforeend",up(r))}}function up(e){let t=Xd(e.receivedAt),r=hv(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(r)}">${s(t)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function Bv(e=o.webServerLogEntries){return e.length?e.map(t=>up(t)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function Kv(){let e=[];return o.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),o.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(o.webServerLogCopyMessage)}</span>
      </div>
    `),o.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogCopyError)}</p>`),o.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogHistoryError)}</p>`),o.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogError)}</p>`),e.length?e.join(""):""}function zv(){let e=$a(),t=o.loadingEntities||o.busyAction==="switch-webServerLogHistoryEnabled",r=bv(),n=vv(),a=Uv();return`
    <div class="oq-webserver-log-history-shell">
      ${Ne({dataValue:"webserverLogHistory",label:"RAM log history",value:r,note:n,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="webServerLogHistoryEnabled"
          data-control-state="${e?"off":"on"}"
          aria-pressed="${e?"true":"false"}"
          ${t?"disabled":""}
        >
          ${e?"Uitschakelen":"Inschakelen"}
        </button>`})}
      ${a}
    </div>
  `}function Uv(){let e=Gs();if(!e)return"";let t=ep(e),r=yv(e),n=o.loadingEntities||o.busyAction==="save-debugLevel";return`
    ${Ne({dataValue:"debugLevel",label:"Logger level",value:r||"Onbekend",note:"Past het runtime logniveau aan voor nieuwe firmwaremeldingen.",action:`<label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${n?"disabled":""}>
          ${t.map(a=>`<option value="${s(a)}" ${a===r?"selected":""}>${s(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>`})}
  `}function Gv(){return o.webServerLogEntries.map(e=>{let t=String(e.raw??e.text??"").trimEnd();return t.trim()?`${Xd(e.receivedAt)} ${t}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function dp(){let e=Gv();if(o.webServerLogCopyMessage="",o.webServerLogCopyError="",!e){o.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",f();return}try{if(!await eo(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.webServerLogCopyMessage=`${o.webServerLogEntries.length} logregel${o.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(t){o.webServerLogCopyError=t instanceof Error?t.message:"Kopi\xEBren naar het klembord is niet gelukt."}o.systemModal==="webserver-logs"&&f()}function pp(){let e=yr();return`
    <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">OpenQuatt log</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde."}</p>
        ${zv()}
        ${Kv()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${o.webServerLogEntries.length===0?"true":"false"}">
            ${Bv()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${o.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function Qv(){let e=o.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function fp(e){return Qv().includes(e)}function Pa(){let e=gn(),t=te(),r=so(),n=zd();return e!=="heatpump_controller_q"||t!=="single"&&t!=="duo"||r!=="wifi"&&r!=="eth"||!n?null:{canSwitch:w("firmwareUpdateTarget")&&fp("alternate connection")&&w("installFirmwareUpdateTarget"),currentConnection:r,targetConnection:n,currentLabel:et(r),targetLabel:et(n),currentBuildLabel:fr(t,r),targetBuildLabel:fr(t,n)}}function Da(){let e=gn(),t=te(),r=Ud(),n=so(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||t!=="single"&&t!=="duo"||!r||!a.includes(n)?null:{canSwitch:w("firmwareUpdateTarget")&&fp("alternate topology")&&w("installFirmwareUpdateTarget"),currentTopology:t,targetTopology:r,currentConnection:n,targetConnection:n,currentLabel:Fo(t),targetLabel:Fo(r),currentBuildLabel:fr(t,n),targetBuildLabel:fr(r,n)}}function Bo(e=o.updateTestFirmwarePr){let t=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(t)?t:""}function qr(){let e=gn(),t=te(),r=so(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||t!=="single"&&t!=="duo"||!a.connections.includes(r))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};let i=`openquatt-${a.slug}-${t}-${r}`,l=t==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${et(r)}`}}function hn(e=Bo(),t=qr()){if(!e||!t.available)return null;let n=`${`https://github.com/jeroen85/OpenQuatt/releases/download/pr-${e}`}/${t.otaFileName}`;return{otaUrl:n,md5Url:`${n}.md5`,releaseApiUrl:`https://api.github.com/repos/jeroen85/OpenQuatt/releases/tags/pr-${e}`}}function mo(){if(rt())return"Controleren";let e=zt();if(e)return e.phaseLabel;if(ol())return"Bijgewerkt";if(Sr())return"Bezig";if(Ko())return"Beschikbaar";let t=bp();if(t!==null&&t<=0)return"Actueel";let r=Tt();return typeof r.updateLabel=="string"&&r.updateLabel.trim()?r.updateLabel.trim():r.updateAvailable===!0?"Beschikbaar":r.updateAvailable===!1||nl()?"Actueel":he()?"Nog niet gecontroleerd":"\u2014"}function he(){return o.entities.firmwareUpdate||null}function Na(){let e=he();return e?String(e.state??e.value??"").trim().toLowerCase():""}function Yv(){let e=o.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function La(){return Yv().toLowerCase()}function hp(){let e=o.entities.firmwareUpdateProgress;if(!e)return Number.NaN;let t=Number(e.value??e.state);return Number.isNaN(t)?Number.NaN:Math.max(0,Math.min(100,t))}function el(){let e=String(o.updateInstallTargetVersion||"").trim(),t=le();return!e||!t?!1:bn(t,e)>=0}function Jv(e=he()||{}){let t=go(e),r=le(e);return!t||!r?!1:bn(r,t)>=0}function tl(){return(el()||Jv())&&!rt()&&!fn()&&!Ko()}function ol(){return(o.updateInstallCompleted||tl())&&!rt()&&!zt()&&!Ko()}function kr(){o.updateInstallBusy=!1,o.updateInstallTargetVersion="",o.updateInstallPhaseHint="",o.updateInstallProgressHint=Number.NaN,o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",ny()}function Ae(){o.updateManualUploadFile=null,o.updateManualUploadFileName="",o.updateManualUploadError=""}function ot(e={}){e.clearPr&&(o.updateTestFirmwarePr=""),o.updateTestFirmwareConfirmed=!1,o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null}function Zv(){let e=La(),t=hp();if(e==="starting"||e==="uploading"||e==="rebooting"){o.updateInstallPhaseHint=e,Number.isNaN(t)||(o.updateInstallProgressHint=e==="rebooting"?Math.max(t,100):t);return}if(o.updateInstallBusy){if(el()){o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100;return}o.controlNotice.includes("opnieuw is opgestart")&&(o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100)}}function fn(){let e=La();return e==="starting"||e==="uploading"||e==="rebooting"}function zt(){Zv();let e=La(),t=e==="starting"||e==="uploading"||e==="rebooting",r=t?e:o.updateInstallPhaseHint,n=hp(),a=Number.isNaN(o.updateInstallProgressHint)?0:Math.round(o.updateInstallProgressHint),i=t&&!Number.isNaN(n)?Math.round(n):a;return!fn()&&!o.updateInstallBusy?null:r==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:o.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":o.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":o.updateInstallMode==="topology-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:r==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${Fe()} gedownload en ge\xEFnstalleerd.`:o.updateInstallMode==="connection-switch"?`De ${et(o.updateInstallTargetConnection)}-build wordt nu naar ${Fe()} verzonden.`:o.updateInstallMode==="topology-switch"?`De ${fr(o.updateInstallTargetTopology,o.updateInstallTargetConnection)}-build wordt nu naar ${Fe()} verzonden.`:`Firmware wordt nu naar ${Fe()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${Fe()}.`:o.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${et(o.updateInstallTargetConnection)} is gestart.`:o.updateInstallMode==="topology-switch"?`Opstellingswissel naar ${Fo(o.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${Fe()}.`}}function go(e=he()||{}){let t=String(e.latest_version||"").trim();if(t)return t;let r=String(e.value||"").trim(),n=String(e.current_version||"").trim();return r&&r!==n&&/^v/i.test(r)?r:""}function le(e=he()||{}){let t=String(o.entities.projectVersionText?.state||o.entities.projectVersionText?.value||"").trim();return t||String(e.current_version||"").trim()}function Xv(e=he()||{}){let t=le(e),r=String(e.current_version||"").trim();return!t||!r||t===r?!1:bn(t,r)>0}function rl(e=he()||{},t=po()){let r=String(t||"").trim().toLowerCase(),n=String(e.release_url||"").trim().toLowerCase(),a=go(e).toLowerCase();if(!r||r==="\u2014")return!0;if(r==="dev"){if(n){if(n.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(r==="main"){if(n){if(n.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function mp(e){let r=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return r?{major:Number(r[1]),minor:Number(r[2]),patch:Number(r[3]),prereleaseTag:r[4]||"",prereleaseNumber:r[5]?Number(r[5]):null}:null}function bn(e,t){let r=mp(e),n=mp(t);if(!r||!n)return 0;if(r.major!==n.major)return r.major>n.major?1:-1;if(r.minor!==n.minor)return r.minor>n.minor?1:-1;if(r.patch!==n.patch)return r.patch>n.patch?1:-1;let a=!r.prereleaseTag,i=!n.prereleaseTag;return a!==i?a?1:-1:r.prereleaseTag!==n.prereleaseTag?r.prereleaseTag>n.prereleaseTag?1:-1:r.prereleaseNumber!==n.prereleaseNumber?(r.prereleaseNumber||0)>(n.prereleaseNumber||0)?1:-1:0}function Sr(){if(tl())return!1;let e=Na();return o.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function rt(){let e=Na();return o.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function Ko(){let e=Na();if(!rl())return!1;let t=bp();return t!==null?t>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:Tt().updateAvailable===!0}function nl(){let e=Na();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||Xv()}function al(){let e=he()||{},t=le(e)||"\u2014",r=rl(e)?go(e):"",n=r?bn(r,t):null;return!rt()&&n!==null&&n<=0&&(r=""),{current:t,latest:r||"\u2014"}}function bp(){let{current:e,latest:t}=al();return e==="\u2014"||t==="\u2014"?null:bn(t,e)}function vp(e=po()){let t=String(e||"").trim().toLowerCase();return Di[t]||Di.main}function ey(){let e=String((he()||{}).release_url||"").trim(),t=vp();return!e||t.includes("/dev-latest")&&!e.includes("/dev-latest")||!t.includes("/dev-latest")&&e.includes("/dev-latest")?t:e}function ty(){return Fe()}function po(){return String(E("firmwareUpdateChannel")||o.entities.releaseChannelText?.state||o.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function oy(){return al().latest!=="\u2014"}function gp(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function ry(e,t=he()||{}){let r=gp(e);return r?gp(`${t.title||""} ${t.summary||""}`).includes(r):!0}function yp(e){return new Promise(t=>window.setTimeout(t,e))}function vn(e=Ho){let r=Date.now()+e;o.firmwareOtaQuietUntil=Math.max(Number(o.firmwareOtaQuietUntil||0),r),o.pendingEntitySyncOptions=null,zu(),typeof xt=="function"&&xt(),o.firmwareOtaQuietTimer&&window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=window.setTimeout(()=>{o.firmwareOtaQuietTimer=null,o.firmwareOtaQuietUntil=0,!o.updateInstallBusy&&!o.nativeOpen&&ss()},e)}function ny(){o.firmwareOtaQuietTimer&&(window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=null),o.firmwareOtaQuietUntil=0,o.nativeOpen||ss()}function wp(){return o.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${s(Tu())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${s(xu())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${s(Cu())}</strong>
              <span>${s(Eu())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function yn(e=po()){let t=he()||{},r=le(t);o.entities.firmwareUpdate={...t,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:vp(e),current_version:r}}async function wn(e={}){let t=String(e.expectedBuildLabel||"").trim();for(let r=0;r<6;r+=1){await yp(r===0?900:1200),await V(Yr,"all",{forceMissing:!0});let n=rl(),a=!t||ry(t),i=oy(),l=rt(),c=mo();if(n&&a&&(i||!l&&c!=="Nog niet gecontroleerd"))return!0}return!1}async function Cr(e={}){let t=!1,r=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,n=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await yp(a===0?r:n);try{if(await V(Yr,"all",{forceMissing:!0}),La()==="rebooting"&&oo("ota"),f(),o.updateInstallMode==="connection-switch"){let i=Vs(o.updateInstallTargetConnection);if(i&&so()===i&&!fn()&&!Sr())return!0}else if(o.updateInstallMode==="topology-switch"){let i=mn(o.updateInstallTargetTopology);if(i&&te()===i&&!fn()&&!Sr())return!0}else if(el()||tl()||nl()&&!fn()&&!Sr())return!0}catch{t||(o.controlNotice="Wachten tot het device opnieuw is opgestart...",f(),t=!0)}}return!1}function ay(){let e=po(),t=zt();if(t)return t.copy;if(ol()){let r=o.updateInstallCompletedVersion||le()||po();return`${Fe()} draait nu op ${r}.`}return Sr()?`OTA-update wordt voorbereid voor ${Fe()}. Het device kan kort herstarten.`:rt()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:Ko()?"Er staat een nieuwere firmware klaar.":nl()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function Sp(){return!!(o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen)}function Ra(e,t,r,n,a=!1){return`
      <button
        class="oq-firmware-advanced-option${n?" is-active":""}"
        type="button"
        data-oq-action="${s(e)}"
        aria-pressed="${n?"true":"false"}"
        ${a?"disabled":""}
      >
        <strong>${s(t)}</strong>
        <span>${s(r)}</span>
      </button>
    `}function iy(e,t,r,n){if(!Sp())return"";let i=!!(zt()||o.updateInstallBusy||rt());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${i?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?Ra("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${t.targetLabel}`,o.firmwareConnectionSwitchOpen,i):""}
          ${r?Ra("toggle-firmware-topology-switch","Opstelling wisselen",`Naar ${n.targetLabel}`,o.firmwareTopologySwitchOpen,i):""}
          ${Ra("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",o.updateManualUploadOpen,i)}
          ${Ra("toggle-firmware-test","Testfirmware","PR-release installeren",o.updateTestFirmwareOpen,i)}
        </div>
        ${sy()}
        ${ly()}
        ${uy()}
        ${cy()}
      </div>
    `}function sy(){let e=Pa();if(!e||!o.firmwareConnectionSwitchOpen)return"";let r=!!(zt()||o.updateInstallBusy||rt()),n=!!o.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",c=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(po())}-build voor de andere netwerkverbinding.</span>
        </div>
        <div class="oq-helper-modal-grid">
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Huidige build</span>
            <strong class="oq-helper-modal-value">${s(e.currentBuildLabel)}</strong>
          </div>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Alternatief</span>
            <strong class="oq-helper-modal-value">${s(e.targetBuildLabel)}</strong>
          </div>
        </div>
        <p class="oq-helper-modal-note">${s(l)}</p>
        ${c}
        <label class="oq-helper-modal-check">
          <input type="checkbox" data-oq-firmware-connection-confirm="true" ${n?"checked":""} ${r||i?"disabled":""}>
          <span>${s(a?"De netwerkkabel is aangesloten.":"Ik begrijp dat Ethernet na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-connection-switch"
            ${r||i||!n?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function ly(){let e=Da();if(!e||!o.firmwareTopologySwitchOpen)return"";let r=!!(zt()||o.updateInstallBusy||rt()),n=!!o.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",c=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s(po())}-build voor de andere Single/Duo-opstelling.</span>
        </div>
        <div class="oq-helper-modal-grid">
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Huidige build</span>
            <strong class="oq-helper-modal-value">${s(e.currentBuildLabel)}</strong>
          </div>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Alternatief</span>
            <strong class="oq-helper-modal-value">${s(e.targetBuildLabel)}</strong>
          </div>
        </div>
        <p class="oq-helper-modal-note">${s(l)}</p>
        ${c}
        <label class="oq-helper-modal-check">
          <input type="checkbox" data-oq-firmware-topology-confirm="true" ${n?"checked":""} ${r||a?"disabled":""}>
          <span>${s(i?"De tweede warmtepomp is aangesloten en hoort bij deze controller.":"Ik begrijp dat HP2-bediening na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-topology-switch"
            ${r||a||!n?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function cy(){if(!o.updateTestFirmwareOpen)return"";let t=!!(zt()||o.updateInstallBusy||rt()),r=Bo(),n=qr(),a=hn(r,n),i=!!(n.available&&w("firmwareTestOtaUrl")&&w("firmwareTestOtaMd5Url")&&w("installFirmwareTestOta")),l=!!(r&&i),c=o.updateTestFirmwareBuild||null,p=n.available?n.label:n.error,u=a?n.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Testfirmware</strong>
          <span>PR-release voor gericht testen. Gebruik dit alleen als iemand je expliciet vraagt om een PR te testen.</span>
        </div>
        <div class="oq-firmware-test-grid">
          <label class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">PR-nummer</span>
            <input
              class="oq-helper-input oq-helper-input--compact-number oq-firmware-test-pr-input"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              placeholder="244"
              value="${s(o.updateTestFirmwarePr||"")}"
              data-oq-firmware-test-pr="true"
              ${t?"disabled":""}
            >
          </label>
          <div class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">Doelbuild</span>
            <strong class="oq-helper-modal-value">${s(p)}</strong>
          </div>
          <div class="oq-firmware-advanced-card oq-firmware-test-card--asset">
            <span class="oq-helper-modal-label">OTA-bestand</span>
            <strong class="oq-helper-modal-value" data-oq-firmware-test-asset-note="true">${s(u)}</strong>
          </div>
          ${c?`
            <div class="oq-firmware-advanced-card oq-firmware-test-card--build" data-oq-firmware-test-build-row="true">
              <span class="oq-helper-modal-label">Build</span>
              <strong class="oq-helper-modal-value">${s(c)}</strong>
            </div>
          `:""}
        </div>
        <p class="oq-helper-modal-note oq-firmware-test-note">De webapp zet alleen de URL klaar; het device downloadt en flasht daarna zelf via dezelfde OTA-backend.</p>
        ${i?"":`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.available?"Deze firmware mist de testfirmware-bediening. Installeer eerst een nieuwere build.":n.error)}</p>`}
        ${o.updateTestFirmwareError?`<p class="oq-helper-modal-note oq-helper-modal-note--error" data-oq-firmware-test-runtime-error="true">${s(o.updateTestFirmwareError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <label class="oq-helper-modal-check oq-firmware-advanced-check">
            <input type="checkbox" data-oq-firmware-test-confirm="true" ${o.updateTestFirmwareConfirmed?"checked":""} ${t||!i?"disabled":""}>
            <span>Ik begrijp dat dit testfirmware uit een PR is.</span>
          </label>
          <button class="oq-helper-button" type="button" data-oq-action="install-firmware-test" ${t||!l||!o.updateTestFirmwareConfirmed?"disabled":""}>PR-firmware installeren</button>
        </div>
      </div>
    `}function uy(){if(!o.updateManualUploadOpen)return"";let t=!!(zt()||o.updateInstallBusy||rt()),r=String(o.updateManualUploadFileName||o.updateManualUploadFile?.name||"").trim();return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Handmatige upload</strong>
          <span>Gebruik dit alleen als je een geschikte OTA-firmware hebt gedownload, bij voorkeur een *.firmware.ota.bin uit de release.</span>
        </div>
        <div class="oq-firmware-advanced-card">
          <span class="oq-helper-modal-label">Firmwarebestand</span>
          <input
            class="oq-settings-backup-input oq-settings-backup-import-input"
            type="file"
            accept=".bin,application/octet-stream"
            data-oq-firmware-upload-file-input="true"
            ${t?"disabled":""}
          >
          <span class="oq-helper-modal-subvalue">${s(r?`Gekozen bestand: ${r}`:"Nog geen bestand gekozen")}</span>
        </div>
        <p class="oq-helper-modal-note">De upload gebruikt dezelfde OTA-flow als de normale update. Laat deze pagina open tot het device weer terug is.</p>
        ${o.updateManualUploadError?`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.updateManualUploadError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <button class="oq-helper-button" type="button" data-oq-action="upload-firmware-file" ${t||!o.updateManualUploadFile?"disabled":""}>Upload en installeer</button>
        </div>
      </div>
    `}function qp(){if(!o.updateModalOpen)return"";let e=he(),t=o.entities.firmwareUpdateChannel||null,{current:r,latest:n}=al(),a=rt(),i=Sr(),l=Ko(),c=ay(),p=zt(),u=ol(),d=ey(),b=u?"Firmware-update afgerond":p||i?"Firmware-update bezig":a?"Controleren op firmware-update":ty(),y=t?Array.isArray(t.option)?t.option:Array.isArray(t.options)?t.options:[]:[],h=Pa(),g=Da(),m=!!(h&&!u),v=!!(g&&!u);return`
      <div class="oq-helper-modal-backdrop${a||i||p?" is-busy":""}${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal oq-helper-modal--firmware oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${s(b)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(c)}</p>
          ${u?`
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          `:""}
          ${p?`
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${s(p.phaseLabel)}</strong>
                <span>${s(`${p.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,p.percent))}%"></span>
              </div>
            </div>
          `:""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${s(mo())}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige versie</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Beschikbare versie</span>
              <strong class="oq-helper-modal-value">${s(n)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Kanaal</span>
              <strong class="oq-helper-modal-value">${s(po())}</strong>
            </div>
          </div>
          ${y.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${y.map(S=>`
                  <option value="${s(S)}" ${String(E("firmwareUpdateChannel")||"")===S?"selected":""}>${s(S)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||p?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${u?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||p||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${d?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(d)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${Sp()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||p?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${iy(m,h,v,g)}
        </section>
      </div>
    `}function $t(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(o.debugRecordingSamples)?o.debugRecordingSamples.length:0}function Mt(e=o.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function _a(e=o.debugRecordingDeviceStatus){return Mt(e)&&e?.frozen===!0&&!e?.active}function zo(e){let t=Math.max(0,Math.round(Number(e||0)/1e3)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return r>0?`${r}u ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(a).padStart(2,"0")}s`:`${a}s`}function Cp(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):Ep()}function Ep(){if(o.debugRecordingDeviceStatus)return Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!o.debugRecordingStartedAt)return 0;let e=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(o.debugRecordingStartedAt||e))}function Sn(){return o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":_a()?"Rolling gestopt":o.debugRecordingActive&&Mt()?"Rolling actief":o.debugRecordingActive?"Bezig met opnemen":$t()>0?"Voltooid":"Niet gestart"}function Fa(){return _a()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":o.debugRecordingActive&&Mt()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":o.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":$t()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function Tp(){return _a()?"Gestopt":o.debugRecordingActive&&Mt()?`Rolling \xB7 ${zo(Cp())}`:o.debugRecordingActive?`Loopt \xB7 ${zo($p())}`:$t()>0?"Klaar":Sn()}function dy(){let e=Number(o.debugRecordingSelectedMinutes||15);return la.map(r=>Number(r.minutes)).includes(e)?e:Number(la[0]?.minutes||15)}function xp(e){o.debugRecordingActive||(o.debugRecordingSelectedMinutes=Math.max(1,Number(e)||15),o.debugRecordingNotice="",o.debugRecordingError="",f())}function $p(){return Mt()?0:o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.remaining_s||0)*1e3):o.debugRecordingActive?Math.max(0,Number(o.debugRecordingEndsAt||0)-Date.now()):0}function py(){if(o.debugRecordingDeviceStatus){if(Mt()){let a=Math.max(1,Number(o.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,$t()/a*100))}let r=Math.max(1,Number(o.debugRecordingDeviceStatus.duration_s||0)),n=Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0));return!o.debugRecordingActive&&$t()>0?100:Math.max(0,Math.min(100,n/r*100))}if(!o.debugRecordingActive||!o.debugRecordingStartedAt||!o.debugRecordingEndsAt)return $t()>0?100:0;let e=Math.max(1,Number(o.debugRecordingEndsAt)-Number(o.debugRecordingStartedAt)),t=Math.max(0,Date.now()-Number(o.debugRecordingStartedAt));return Math.max(0,Math.min(100,t/e*100))}function Mp(e=o.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function Hp(e){if(e?.recording?.active)return;let t=Mp(e);if(t){o.debugRecordingAcknowledgedId=t;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",t)}catch{}}}function il(){let e=o.debugRecordingDeviceStatus,t=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&t===0)return"";let r=!!e.active;if(!r&&Mp(e)===o.debugRecordingAcknowledgedId)return"";let n=Mt(e),a=zo(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=zo(Math.max(0,Number(e.remaining_s||0))*1e3),l=r?n?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:n?"Rolling gestopt":"Debug klaar",c=r?n?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:n?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${r?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${s(c)}"
      title="${s(c)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${s(l)}</span>
    </button>
  `}function my(){if(!o.root)return;if(o.interfacePanelOpen){f();return}let e=o.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;let t=e.querySelector(".oq-debug-recording-header-status"),r=il();if(!r){t?.remove();return}if(t){t.outerHTML=r;return}e.insertAdjacentHTML("afterbegin",r)}function gy(){if(!o.root)return;let e=o.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;let t=e.querySelector(".oq-settings-system-row-value"),r=e.querySelector(".oq-settings-system-row-note");t&&(t.textContent=Sn()),r&&(r.textContent=Fa())}function sl(e){let t={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return t[e]||t.status}function fy(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${sl(e)}</span>`}function Ut(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${sl(e)}</span>`}function hy(){return[...Mo]}function by(){let e=[];return Mo.forEach((t,r)=>{let n=o.entities?.[t]||{},a=String(n.uom??n.unit_of_measurement??"").trim();a&&e.push([r,a])}),e}function vy(e){return Array.isArray(e)?e.map((t,r)=>t===null?null:[r,t]).filter(Boolean):[]}function Ia(){o.debugRecordingTimer&&(window.clearTimeout(o.debugRecordingTimer),o.debugRecordingTimer=null)}function Uo(){o.debugRecordingDevicePollTimer&&(window.clearTimeout(o.debugRecordingDevicePollTimer),o.debugRecordingDevicePollTimer=null)}function fo(e){return`${Oe()}/openquatt/debug-recording/${e}`}function Er(e){let t=e&&typeof e=="object"?e:{};o.debugRecordingDeviceStatus=t,o.debugRecordingActive=!!t.active,o.debugRecordingStartedAt=t.active||Number(t.sample_count||0)>0?Date.now()-Math.max(0,Number(t.elapsed_s||0)*1e3):0,o.debugRecordingEndsAt=t.active?Date.now()+Math.max(0,Number(t.remaining_s||0)*1e3):0,o.debugRecordingLastSampleAt=Number(t.sample_count||0)>0?Date.now():0}function ll(){Er({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function yy(){let e=await window.fetch(fo("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();return Er(t),t}function qn(e=2e3){Uo(),o.debugRecordingActive&&(o.debugRecordingDevicePollTimer=window.setTimeout(()=>{kn({silent:!0})},Math.max(0,Number(o.systemModal==="debug-recording"?e:5e3)||0)))}async function kn(e={}){e.silent||(o.debugRecordingBusy=!0,o.debugRecordingError="",f());try{await yy(),!o.debugRecordingActive&&e.silent&&(o.debugRecordingNotice="Debugopname is afgerond."),qn()}catch(t){ll(),o.debugRecordingError=`Status kon niet worden opgehaald. ${t.message||String(t)}`}finally{e.silent||(o.debugRecordingBusy=!1),!e.silent||o.systemModal==="debug-recording"?f():(my(),gy())}}async function Ap(){let e=js(Mo,"state"),t=null;for(let r=0;r<e.length;r+=1){let n=await window.fetch(fo(`configure?reset=${r===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[r].body});if(!n.ok)throw new Error(`configuratie HTTP ${n.status}`);t=await n.json()}if(Number(t?.entity_field_count||0)!==Mo.length)throw new Error(`onvolledige debugset (${Number(t?.entity_field_count||0)}/${Mo.length})`);return t}async function Rp(e){let t=Math.max(1,Number(e)||15);Ia(),Uo(),o.debugRecordingBusy=!0,o.debugRecordingError="",o.debugRecordingNotice="",o.debugRecordingSamples=[],o.debugRecordingEvents=[],o.debugRecordingInitialValues=null,o.debugRecordingLastValues=null,o.debugRecordingDeviceBundle=null,o.debugRecordingLastSampleAt=0,o.debugRecordingSequence=0,f();try{await Ap();let r=await window.fetch(fo(`start?duration_s=${encodeURIComponent(t*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.json();Er(n),qn()}catch(r){ll(),o.debugRecordingError=`Debugopname kon niet worden gestart. ${r.message||String(r)}`}finally{o.debugRecordingBusy=!1,f()}}async function Pp(){Ia(),Uo(),o.debugRecordingBusy=!0,o.debugRecordingError="",o.debugRecordingNotice="",o.debugRecordingSamples=[],o.debugRecordingEvents=[],o.debugRecordingInitialValues=null,o.debugRecordingLastValues=null,o.debugRecordingDeviceBundle=null,o.debugRecordingLastSampleAt=0,o.debugRecordingSequence=0,f();try{await Ap();let e=await window.fetch(fo("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();Er(t),qn()}catch(e){ll(),o.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,f()}}async function wy(){let e=await window.fetch(fo("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();return Er(t),Uo(),t}async function Dp(){Ia(),o.debugRecordingBusy=!0,o.debugRecordingError="",f();try{await wy(),o.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){o.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,f()}}async function Np(e={}){Ia(),Uo(),o.debugRecordingBusy=!0,o.debugRecordingError="",f();try{let t=await window.fetch(fo("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();Er(r),o.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(t){o.debugRecordingError=`Debugopname kon niet worden gestopt. ${t.message||String(t)}`}finally{o.debugRecordingBusy=!1,f()}}function kp(e={}){let t=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:o.debugRecordingStartedAt?new Date(Number(o.debugRecordingStartedAt)).toISOString():"",ended_at:t?new Date(t).toISOString():"",active:!!o.debugRecordingActive,duration_s:o.debugRecordingStartedAt?Math.round(Math.max(0,t-Number(o.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(nu/1e3),sample_count:$t(),column_count:Mo.length,storage:"browser"},columns:hy(),units:by(),initial:vy(o.debugRecordingInitialValues),samples:o.debugRecordingSamples||[],events:o.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function Oa(e){return JSON.stringify(e)}function Sy(){let e=Number(o.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([Oa(kp())]).size}catch{return Oa(kp()).length}}function qy(e){let t=Math.max(0,Number(e)||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${(t/1024).toFixed(1)} kB`:`${Math.round(t)} B`}function ky(e){let t=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),r=String(t).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${r}.oqdebug.json`}async function Lp(){if($t()===0){o.debugRecordingError="Er is nog geen debugopname om te downloaden.",f();return}o.debugRecordingBusy=!0,o.debugRecordingError="";let e=o.debugRecordingActive&&Mt();f();try{let t=await window.fetch(fo("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();o.debugRecordingDeviceBundle=r,ts(ky(r),Oa(r),"application/json"),Hp(r),o.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{o.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{o.debugRecordingBusy=!1,f()}}async function Op(){if($t()===0){o.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",f();return}o.debugRecordingBusy=!0,o.debugRecordingError="";let e=o.debugRecordingActive&&Mt();f();try{let t=await window.fetch(fo("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();if(o.debugRecordingDeviceBundle=r,!await eo(Oa(r)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");Hp(r),o.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{o.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{o.debugRecordingBusy=!1,f()}}function _p(){let e=o.debugRecordingActive,t=Mt(),r=_a(),n=$t(),a=o.debugRecordingBusy,i=qy(Sy()),l=Array.isArray(o.debugRecordingDeviceBundle?.events)?o.debugRecordingDeviceBundle.events.length:Array.isArray(o.debugRecordingEvents)?o.debugRecordingEvents.length:0,c=dy(),p=$p(),u=Cp(),d=py(),b=n>0,y=`${d.toFixed(1)}%`,h=[{icon:"status",label:"Status",value:Sn()},{icon:"clock",label:t?"Retentie":"Duur",value:zo(t?u:Ep())},{icon:"samples",label:"Samples",value:String(n)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:o.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],g=o.debugRecordingError?{kind:"error",icon:"alert",text:o.debugRecordingError}:o.debugRecordingNotice?{kind:"success",icon:"check",text:o.debugRecordingNotice}:null;return`
    <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">\xD7</button>
        </div>
        <p class="oq-helper-modal-copy">${s(Fa())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${sl("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(t?`Laatste ${zo(u)} bewaard`:`Nog ${zo(p)}`)}</span>
                <strong>${s(t?`${n}/${Number(o.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(d)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(y)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${h.map(m=>`
              <div class="oq-debug-recording-stat">
                <dt>${fy(m.icon)}${s(m.label)}</dt>
                <dd>${s(m.value)}</dd>
              </div>
            `).join("")}
          </dl>
        </section>
        ${e&&t?`
          <section class="oq-debug-recording-duration" aria-label="Rolling debug">
            <h3>Rolling debug</h3>
            <p class="oq-helper-modal-copy">Download of kopieer maakt een momentopname van de huidige buffer. Stop rolling zet de buffer vast.</p>
          </section>
        `:`
          <section class="oq-debug-recording-duration" aria-label="Duur">
            <h3>Duur</h3>
            <div class="oq-debug-recording-segments" role="group" aria-label="Kies opnameduur">
              ${la.map(m=>{let v=Number(m.minutes)===c;return`
                  <button
                    class="oq-debug-recording-segment${v?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${m.minutes}"
                    aria-pressed="${v?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(m.label)}
                  </button>
                `}).join("")}
            </div>
          </section>
        `}
        <div class="oq-debug-recording-actions">
          ${e&&t?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="freeze-debug-recording" ${a?"disabled":""}>${Ut("stop")}Stop rolling</button>
          `:e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${a?"disabled":""}>${Ut("stop")}Stop opname</button>
          `:r?`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ut("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ut("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ut("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Ut("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!b||a?"disabled":""}>${Ut("download")}${e&&t?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!b||a?"disabled":""}>${Ut("copy")}${e&&t?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${g?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${g.kind}" role="status">
              ${Ut(g.icon)}
              <span>${s(g.text)}</span>
            </p>
          `:""}
        </div>
      </section>
    </div>
  `}function Ip(e){o.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",o.overviewTheme)}catch{}}function ja(e){o.interfacePanelOpen=e===!0}function cl(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function Cn(e,t={}){o.settingsGroup=De.has(e)?e:me[0].id;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}t.syncUrl!==!1&&o.appView==="settings"&&No(t.syncMode||"replace")}function jp(e){o.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",o.devPanelOpen?"true":"false")}catch{}}function Wp(e){o.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",o.hpVisualMode)}catch{}}function Vp(e){o.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",o.hpLayoutMode)}catch{}}function Cy(e){if(o.reducedMotion=!!e?.matches,o.reducedMotion){sn();return}an()}function Ey(){let e=Gi();!e||o.motionPreferenceMedia===e||(o.motionPreferenceMedia=e,o.motionPreferenceListener=Cy,typeof e.addEventListener=="function"?e.addEventListener("change",o.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(o.motionPreferenceListener),o.reducedMotion=!!e.matches)}function Ty(){return Object.keys(o.entities).length>0}function xy(){return Ui+Math.floor(Math.random()*(gu-Ui+1))}function $y(){return(document.hidden?Xr:su)+xy()}function Bp(e=$y()){o.pollTimer||o.nativeOpen||o.updateInstallBusy||ya()||(o.pollTimer=window.setTimeout(async()=>{o.pollTimer=null,await ue(),Bp()},e))}function ul(){Bp()}function dl(){o.pollTimer&&(window.clearTimeout(o.pollTimer),o.pollTimer=null)}Ku({start:ul,stop:dl});function My(){o.nativeOpen||(dl(),ul(),document.hidden||ue({forceProbe:!0}))}function Wa(e={}){if(En(),o.nativeOpen){dl(),sn(),o.nativeFrontendLoaded||Va();return}if(an(),ul(),e.refresh!==!1){if(!Ty()){Fd();return}ue({forceFast:!0})}}function Hy(){let e=cn()||no(),t=e==="settings"?gs()||o.settingsGroup:"",r=e==="control"?ds()||"status":o.controlReplayTab,n=e==="control"?ps()||"last24":o.controlReplayWindow,a=e==="control"?ms():null;if(!(e===o.appView&&(e!=="settings"||t===o.settingsGroup)&&(e!=="control"||r===o.controlReplayTab&&n===o.controlReplayWindow&&(!a||a.start===o.controlReplayCustomStart&&a.end===o.controlReplayCustomEnd)))){if(o.appView=e,e==="control"&&(o.controlReplayTab=r,o.controlReplayWindow=n,o.controlReplayCustomStart=a?.start||"",o.controlReplayCustomEnd=a?.end||"",o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,o.controlReplayCustomPeriodError=""),e==="settings"&&t){o.settingsGroup=t;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}}f(),ue({forceFast:!0})}}function En(){o.nativeApp&&(o.nativeApp.classList.add("oq-native-app"),o.nativeApp.classList.toggle("oq-native-app--collapsed",!o.nativeOpen),o.nativeApp.setAttribute("aria-hidden",o.nativeOpen?"false":"true"))}function Kp(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fp,{once:!0}):Fp(),window.addEventListener("pointermove",Xu),window.addEventListener("pointerup",ed),window.addEventListener("popstate",Hy),window.addEventListener("oq-mock-updated",Ay),window.addEventListener("oq-dev-controls-changed",Ry),document.addEventListener("visibilitychange",My)}function Ay(){o.mounted&&ue({forceDecisionLog:!0})}function Ry(){o.mounted&&f()}function Fp(){Py();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),o.nativeApp=e,o.nativeFrontendLoaded=Array.from(document.scripts).some(t=>t.src===Ni),o.mounted||(Dy(e),o.mounted=!0,Wa()),En(),o.nativeOpen||(ue(),kn({silent:!0}))}function Py(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function Dy(e){let t=document.createElement("section");t.id="oq-helper-root",t.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(t,e),t.addEventListener("click",Qu),t.addEventListener("change",Gu),t.addEventListener("input",Yu),t.addEventListener("keydown",Ju),t.addEventListener("wheel",rd,{passive:!1}),t.addEventListener("focusin",ls),t.addEventListener("focusout",ls),t.addEventListener("mouseover",od),t.addEventListener("mouseout",td),t.addEventListener("pointerdown",Zu),o.root=t,Ey();let r=cn()||no(),n=r==="settings"?gs():"",a=r==="control"?ds():"",i=r==="control"?ps():"",l=r==="control"?ms():null;n&&Cn(n,{syncUrl:!1}),a&&(o.controlReplayTab=a),i&&(o.controlReplayWindow=i,o.controlReplayCustomStart=l?.start||"",o.controlReplayCustomEnd=l?.end||""),pt(r,{syncMode:"replace",forceSync:!0}),nn(),f()}function Ny(e){return new Promise((t,r)=>{if(!e){t();return}let n=Array.from(document.scripts).find(i=>i.src===e);if(n){if(n.dataset.loaded==="true"){t();return}n.addEventListener("load",()=>t(),{once:!0}),n.addEventListener("error",i=>r(i),{once:!0});return}let a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",t()},{once:!0}),a.addEventListener("error",i=>r(i),{once:!0}),document.head.appendChild(a)})}async function Va(){if(!(o.nativeFrontendLoaded||o.nativeFrontendLoading)){o.nativeFrontendLoading=!0,o.nativeOpen&&f();try{await Ny(Ni),o.nativeFrontendLoaded=!0}catch(e){o.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,o.nativeOpen=!1,cl("app"),f(),Wa()}finally{o.nativeFrontendLoading=!1,o.nativeOpen&&f()}}}function pl(){if(!o.root)return;let e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(o.root)}function Tn(){let e=o.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function Ly(){return"Login"}function Oy(){let e=o.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function xn(){let e=o.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function Tr(){let e=o.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function xr(){let e=o.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?e.enabled===!0&&e.transport_active===!1?"API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu voor Home Assistant.":e.enabled===!1&&e.transport_active===!0?"API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API beveiligd.":e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":"De native API staat nu open op je lokale netwerk.":"API-encryptie wordt geladen."}function _y(){return"ESPHome API encryption"}function Fy(){let e=o.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?e.enabled===!0&&e.transport_active===!1?"API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu alvast voor Home Assistant.":e.enabled===!1&&e.transport_active===!0?"API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API nog beveiligd.":"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":"API-encryptie staat uit. Schakel in om een sleutel te bekijken, kopi\xEBren of vernieuwen.":"We halen de huidige API-beveiliging op."}function Iy(){let e=o.apiSecurityStatus;if(!e)return"Laden...";let t=!!(e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active);return t&&e.enabled===!0&&e.transport_active===!1?"Annuleer inschakelen":t&&e.enabled===!1&&e.transport_active===!0?"Annuleer uitschakelen":e.enabled?"Uitschakelen":"Inschakelen"}function jy(){let e=o.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function zp(e,t,r="",n=!1){return`
      <div class="oq-helper-modal-row${n?" oq-helper-modal-row--loading":""}">
        <span class="oq-helper-modal-label">${s(e)}</span>
        <strong class="oq-helper-modal-value">${n?`
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${s(t)}</span>
          </span>
        `:s(t)}</strong>
      ${r?`<span class="oq-helper-modal-subvalue">${s(r)}</span>`:""}
    </div>
    `}function Up(){let e=o.apiSecurityStatus||{},t=e.enabled===!0,r=!!e.key,n=!!(e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active),a=r||e.transport_active===!0||n,i=o.apiSecurityNotice,l=o.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${s(_y())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(Fy())}</p>
          ${i?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(i)}</span></div>`:""}
          ${l}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(Tr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(xr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${t?"disable-api-security":"enable-api-security"}"
                ${o.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${s(Iy())}
              </button>
            </div>
            ${a?`
            <div class="oq-settings-api-security-key">
              <div class="oq-settings-field-head">
                <h3>API-sleutel</h3>
              </div>
              <p class="oq-settings-action-note">${s(n?r?"Deze sleutel is opgeslagen. Kopieer hem nu en kies daarna Opslaan en herstarten.":"Inschakelen maakt direct een nieuwe sleutel aan. Deze wijziging wordt actief na herstart.":e.transport_active?"Gebruik deze sleutel in Home Assistant voor de ESPHome-integratie.":e.key?"Bewaar deze sleutel voor later gebruik of kopieer hem nu.":"Er is nog geen API-sleutel opgeslagen.")}</p>
              ${r?`<div class="oq-settings-api-security-key-row"><div class="oq-settings-api-security-key-value">${s(e.key)}</div></div>`:""}
              ${r?`
                  <div class="oq-settings-api-security-actions">
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="rotate-api-security"
                      ${o.apiSecurityBusy||!e.csrf_token?"disabled":""}
                    >
                      ${s(jy())}
                    </button>
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="copy-api-security-key"
                      ${o.apiSecurityBusy?"disabled":""}
                    >
                      Kopieer sleutel
                    </button>
                  </div>
                `:""}
            </div>
            `:""}
          </div>
          <div class="oq-helper-modal-actions">
            ${n?`
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="restart-api-security"
                ${o.apiSecurityBusy?"disabled":""}
              >
                Opslaan en herstarten
              </button>
            `:""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.apiSecurityBusy?"disabled":""}>Gereed</button>
          </div>
        </section>
      </div>
    `}function Gp(){let e=o.authStatus||{},t=e.enabled===!0,r=e.setup_window_active===!0,n=t||r,a=t?String(e.username||"").trim():"",i=o.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(o.authNotice)}</span></div>`:"",l=o.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.authError)}</div>`:"",p=n?`
        ${n?`<p class="oq-helper-modal-intro">${t?"Pas hier je login aan.":"Vul hier je nieuwe login in."}</p>`:""}
        <div class="oq-helper-modal-auth-stack">
          ${t?`
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${s(o.authDraftCurrentPassword)}"
                  ${o.authBusy?"disabled":""}
                >
              </label>
            `:""}
          <label class="oq-helper-modal-auth-field">
            <span>Nieuwe gebruikersnaam</span>
            <input
              class="oq-helper-input"
              type="text"
              autocomplete="username"
              maxlength="32"
              data-oq-auth-field="username"
              value="${s(o.authDraftUsername)}"
              ${o.authBusy?"disabled":""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="newPassword"
              value="${s(o.authDraftNewPassword)}"
              ${o.authBusy?"disabled":""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Herhaal nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="confirmPassword"
              value="${s(o.authDraftConfirmPassword)}"
              ${o.authBusy?"disabled":""}
            >
          </label>
        </div>
      `:`
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${s(Ly())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(Oy())}</p>
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${zp("Beveiligingsstatus",Tn(),xn())}
            ${zp("Gebruiker",t?a||"Geen naam":"Geen login",t?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${p}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.authBusy?"disabled":""}>Gereed</button>
            ${t?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${o.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${n?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${o.authBusy?"disabled":""}>${t?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function $n(e,t,r){let n=R(t),a=R(r);if(Number.isFinite(n)&&Number.isFinite(a))return n-a;let i=R(e);return Number.isFinite(i)?i:NaN}function ml(e="oq-settings-grid"){let t=Wy();return`
      <div class="${s(e)}">
        ${se("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${t}
    `}function Wy(){let e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(r=>w(r.offsetKey)&&w(r.finalKey));if(!e.length)return"";let t=r=>{let n=Le(r.offsetKey),a=$n(r.rawKey,r.finalKey,r.offsetKey),i=Me(Ee(r.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?jt(a+i,n.uom||"\xB0C",2):qe(r.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(r.offsetKey)}" data-oq-hp-offset-raw-key="${s(r.rawKey)}" data-oq-hp-offset-final-key="${s(r.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(r.label)}</strong>
            <span data-oq-hp-offset-active>${s(qe(r.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${r.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?jt(a,n.uom||"\xB0C",2):qe(r.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${lo({key:r.offsetKey,value:Ee(r.offsetKey),meta:n,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:n.uom?`<span class="oq-helper-unit-chip">${s(n.uom)}</span>`:""})}
            </label>
            <span class="oq-settings-hp-offset-operator">=</span>
            <div class="oq-settings-hp-offset-readout oq-settings-hp-offset-final">
              <span>Na wijziging</span>
              <strong data-oq-hp-offset-final>${s(l)}</strong>
            </div>
          </div>
        </article>
      `};return`
      <div class="oq-settings-subpanel oq-settings-hp-offset-panel">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Sensorcorrecties</p>
          <h4>Water in/out offsets</h4>
          <p>Raw is de ongecorrigeerde sensorwaarde. Actief is de temperatuur die OpenQuatt nu gebruikt: raw plus correctie.</p>
        </div>
        <div class="oq-settings-hp-offset-list">
          ${e.map(t).join("")}
        </div>
      </div>
    `}function Qp(){return oe("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",ml())}function Yp(e,t){let r=R(e),n=R(t),a=Number.isNaN(r)?"Lvl \u2014":`Lvl ${Math.round(r)}`,i=Number.isNaN(n)?"\u2014 Hz":`${Math.round(n)} Hz`;return`${a} (${i})`}function Vy(e){let t=String(e||"").trim().toUpperCase();return!t||t==="0"||t==="IDLE"||t==="CM100 READY"||t==="CM100 STOPPED"||t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED")?!1:t.includes("REQUESTED")||t.includes("WAITING")||t.includes("WACHTEN")||t.includes("SETTLING")||t.includes("MEASUR")||t.includes("COOLDOWN")||t.includes("RUNNING")||t.includes("VALIDATING")||t.includes("STARTED")||t.includes("RECOVER")||t.includes("PHASE")||t.includes("STEADY")||t.includes("PULSE")||t.includes("STABILIZE")||t.includes("STEP")}function ke(e){let t=String(e||"").trim().toUpperCase();return t?t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED"):!1}function Go(e){let t=String(e||"").trim().toUpperCase();return t.includes("WAITING_FOR_CM100")||t.includes("CM100 REQUESTED")||t.includes("WACHTEN OP CM100")||t==="WACHTEN"}function $r(e){return Vy(e)&&!Go(e)}function Ba(e="",t=""){let r=String(e||"").trim().toUpperCase(),n=String(t||"").trim().toLowerCase(),a=r.split(/[^A-Z0-9]+/).filter(Boolean),i=u=>{let d=String(u||"").trim().toUpperCase();return d?r===d||r.startsWith(`${d}:`)||r.startsWith(`${d} `)||a.includes(d):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!r||r==="\u2014"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN")return{phase:"Wachten",percent:0};if(r.includes("WAITING")||r.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(n!=="cm100"&&(r==="IDLE"||r==="CM0 - STANDBY"||r==="CM100 READY"||r==="CM100 STOPPED"||r==="GEPAUZEERD"))return{phase:"Wachten",percent:0};let p=(l[n]||[]).find(u=>u.match.some(d=>i(d)));return p||(r.includes("DONE")||r.includes("APPLIED")?{phase:"Klaar",percent:100}:r.includes("ABORT")||r.includes("FAILED")||r.includes("REFUSED")?{phase:"Afgebroken",percent:100}:n==="cm100"&&r.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function Mr({taskKey:e,title:t,copy:r,subcopy:n="",status:a,statusCopy:i,progressTask:l,actions:c="",controls:p="",metrics:u="",className:d=""}){return`
      <article class="oq-settings-commissioning-card${d?` ${s(d)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(t)}</h3>
            <p>${s(r)}</p>
            ${n?`<p class="oq-settings-commissioning-card-subcopy">${s(n)}</p>`:""}
          </div>
        </div>
        ${c?`<div class="oq-settings-commissioning-card-actions">${c}</div>`:""}
        ${p}
        <div class="oq-settings-quickstart-status oq-settings-quickstart-status--compact oq-settings-commissioning-card-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${s(a)}</strong>
              <p class="oq-settings-quickstart-status-copy">${s(i)}</p>
            </div>
          </div>
        </div>
        ${u?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${u}</div>`:""}
      </article>
    `}function By({status:e,running:t,resultReady:r,startDisabled:n,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:c}){let p=String(e||"").toUpperCase(),u=p.includes("FAILED")||p.includes("REFUSED")||p.includes("ABORT"),d=p.includes("APPLIED"),b=w("hp2WaterIn")||w("hp2WaterOut")||w("hp2WaterInRaw")||w("hp2WaterOutRaw"),y=R("hpWaterCalibrationStableProgress"),h=R("hpWaterCalibrationStableRequired"),g=R("hpWaterCalibrationRemaining"),m=Math.round(R("hpWaterCalibrationPhase")),v=t&&(m===1||p.includes("MIXING")),S=t&&!v,q=300,C=60,k=Number.isFinite(g)?Math.max(0,q-g):NaN,$=Number.isFinite(k)?Math.max(0,C-k):NaN,D=v&&Number.isFinite(k)?Math.max(0,Math.min(100,k/C*100)):S&&Number.isFinite(y)&&Number.isFinite(h)&&h>0?Math.max(0,Math.min(100,y/h*100)):t&&Number.isFinite(g)?Math.max(0,Math.min(100,100-g/q*100)):r?100:0,N=r&&w("hpWaterCalibrationResultSpreadBefore")?qe("hpWaterCalibrationResultSpreadBefore",2):qe("hpWaterCalibrationSpread",2),z=v?"Water mengen":Number.isFinite(y)&&Number.isFinite(h)&&h>0?y>0?`${Math.round(Math.max(0,y))} / ${Math.round(h)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",H=r?3:t?2:1,U=d?"Offsets toegepast":r?`Meting klaar - spreiding ${N}`:t?v?`Water mengen${Number.isFinite($)&&$>0?` - meting start over ${Math.round($)} s`:""}`:`Meting bezig - ${Number.isFinite(g)&&g>0?`max. ${Math.round(g)} s resterend`:z}`:u?"Meting niet voltooid":"Voorbereiding",A=d?"De voorgestelde offsets zijn opgeslagen.":r?"Controleer de voorgestelde offsets en pas ze toe.":t?v?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":u?Io("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):b?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",I=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(_=>w(_.liveKey)||w(_.rawKey)||w(_.offsetKey)),L=(_,j)=>{let X=H>_;return`
        <div class="oq-settings-hp-calibration-step${X?" is-done":""}${H===_?" is-active":""}">
          <span>${X?"\u2713":_}</span>
          <strong>${s(j)}</strong>
        </div>
      `},P=_=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(_.label)}</span>
          <strong>${s(qe(_.liveKey,2))}</strong>
        </article>
      `,Z=_=>{let j=R(_.resultRawKey),X=Number.isFinite(j)?j:$n(_.rawKey,_.liveKey,_.offsetKey),We=R(_.suggestedKey),yt=Number.isFinite(X)&&Number.isFinite(We)?jt(X+We,o.entities[_.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(_.label)}</th>
          <td>${s(Number.isFinite(X)?jt(X,o.entities[_.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(qe(_.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(qe(_.suggestedKey,2))}</span></td>
          <td>${s(yt)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${L(1,"Voorbereiding")}
          ${L(2,"Meting")}
          ${L(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${r?" is-success":t?" is-active":u?" is-warning":""}">
          <div>
            <strong>${s(U)}</strong>
            <p>${s(A)}</p>
          </div>
          ${t||r?`<span>${s(t?z:"Resultaat beschikbaar")}</span>`:""}
          ${t?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${D.toFixed(0)}%"></i></div>`:""}
        </div>

        ${t?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${I.map(P).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(qe("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(qe("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${r?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(qe("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(qe("hpWaterCalibrationSupplyDelta",2))}</span>
            </div>
            <div class="oq-settings-hp-calibration-table-wrap">
              <table class="oq-settings-hp-calibration-table">
                <thead>
                  <tr>
                    <th scope="col">Sensor</th>
                    <th scope="col">Raw gemiddelde</th>
                    <th scope="col">Huidig actief</th>
                    <th scope="col">Voorstel</th>
                    <th scope="col">Na toepassen</th>
                  </tr>
                </thead>
                <tbody>
                  ${I.map(Z).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${c?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${Wo({active:t,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||n,stopDisabled:l||a})}
            ${o.entities.hpWaterCalibrationApply?ze("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function Jp(){let e=w("boilerCvAssistEnabled")&&T("boilerCvAssistEnabled"),t=Ta(),r=T("cm100Active"),n=String(t||"").trim().toUpperCase(),a=Go(t),i=!a&&(r||n==="CM100 READY"),l=o.commissioningTaskLock==="cm100",c=o.loadingEntities||o.busyAction==="commissioningCm100Start"||o.busyAction==="commissioningCm100Stop"||l,p=!!o.pendingCommissioningCm100Start,u=c||i||a,d=c||!i,b=jo("boilerPowerTestStatus","IDLE"),y=Ba(b,"boiler"),h=T("boilerPowerTestActive"),g=o.loadingEntities||o.busyAction==="boilerPowerTestStart"||o.busyAction==="boilerPowerTestAbort"||o.busyAction==="boilerPowerTestApply",m=!!(o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort||o.entities.boilerPowerTestApply),v=!!o.pendingBoilerPowerTestStart,S=o.commissioningTaskLock==="boiler",q=Go(b),k=!ke(b)&&(h||v||S||$r(b))&&!q,$=Te("boilerRatedHeatPower"),D=Te("boilerHeatPower"),N=R("boilerHeatPower"),z=N>0?D:k&&o.commissioningBoilerHeatPowerDisplay?o.commissioningBoilerHeatPowerDisplay:D;N>0&&(o.commissioningBoilerHeatPowerDisplay=D);let H=jo("flowAutotuneStatus","IDLE"),U=Ba(H,"autotune"),A=o.loadingEntities||o.busyAction==="flowAutotuneStart"||o.busyAction==="flowAutotuneAbort"||o.busyAction==="flowAutotuneApply",I=!!(o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort||o.entities.flowAutotuneApply),L=!!o.pendingFlowAutotuneStart,P=o.commissioningTaskLock==="autotune",Z=Go(H),j=!ke(H)&&(L||P||$r(H))&&!Z,X=jo("airPurgeStatus","IDLE"),We=Ba(X,"purge"),yt=T("airPurgeActive"),ct=o.loadingEntities||o.busyAction==="airPurgeStart"||o.busyAction==="airPurgeAbort",Dt=!!(o.entities.airPurgeStart||o.entities.airPurgeAbort),Ue=!!o.pendingAirPurgeStart,Re=o.commissioningTaskLock==="purge",x=!ke(X)&&(yt||Ue||Re||$r(X)),W=/DONE/.test(String(X||"").toUpperCase()),G=!!(Dt||o.entities.airPurgeStatus||o.entities.airPurgeReturnToAuto),ee=Te("airPurgeRemaining",{decimals:0}),ie=R("airPurgePhase"),be=ie===1?"Rustig":ie===2?"Pulsen":ie===3?"Stabiliseren":We.phase,re=jo("manualFlowStatus","IDLE"),xe=T("manualFlowActive"),ve=o.loadingEntities||o.busyAction==="manualFlowStart"||o.busyAction==="manualFlowAbort",ce=!!(o.entities.manualFlowStart||o.entities.manualFlowAbort),Nt=!!o.pendingManualFlowStart,de=o.commissioningTaskLock==="manual-flow",Pe=!ke(re)&&(xe||Nt||de||$r(re)),Ve=jo("manualHpStatus","IDLE"),Ge=T("manualHpActive"),Qe=o.loadingEntities||o.busyAction==="manualHpStart"||o.busyAction==="manualHpAbort",ko=!!(o.entities.manualHpStart||o.entities.manualHpAbort),ye=!!o.pendingManualHpStart,wt=o.commissioningTaskLock==="manual-hp",Ye=!ke(Ve)&&(Ge||ye||wt||$r(Ve)),Qn=/SAFETY STOP/.test(String(Ve||"").toUpperCase()),Yn=/STOPPING/.test(String(Ve||"").toUpperCase()),St=jo("hpWaterCalibrationStatus","IDLE"),Hi=Ba(St,"hp-water-calibration"),Jn=T("hpWaterCalibrationActive"),ar=o.loadingEntities||o.busyAction==="hpWaterCalibrationStart"||o.busyAction==="hpWaterCalibrationAbort"||o.busyAction==="hpWaterCalibrationApply",Kc=!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort||o.entities.hpWaterCalibrationApply),Zn=!!o.pendingHpWaterCalibrationStart,Jt=o.commissioningTaskLock==="hp-water-calibration",Be=!ke(St)&&(Jn||Zn||Jt||$r(St)),Xn=/DONE|APPLIED/.test(String(St||"").toUpperCase()),zc=/APPLIED/.test(String(St||"").toUpperCase()),kh=Te("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),Ch=Te("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),Uc=/DONE|APPLIED/.test(String(b||"").toUpperCase()),Gc=/DONE|APPLIED/.test(String(H||"").toUpperCase()),Ai=i?q?"Wachten op CM100":k?y.phase:Uc?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Ri=i?Z?"Wachten op CM100":j?U.phase:Gc?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Pi=i?x?We.phase:W?"Klaar":"Klaar om te starten":"Wachten op CM100",Qc=i?Pe?"Actief":"Klaar om te starten":"Wachten op CM100",Yc=i?Ye?Yn?"Bezig met stoppen":Qn?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",Jc=i?Be?Hi.phase:zc?"Offsets toegepast":Xn?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Zc=!i||g||!m||j||x||Pe||Ye||Be||k||P||Re||de||wt||Jt||v,Eh=g||!(k||S||v),Th=g||Zc||!Uc||j||x||Be,Xc=!i||A||!I||k||x||Pe||Ye||Be||j||S||Re||de||wt||Jt||L,xh=A||!(j||P||L),$h=A||Xc||!Gc||k||x||Be,Mh=!i||ct||!Dt||k||j||Pe||Ye||Be||x||S||P||de||wt||Jt||Ue,Hh=ct||!(x||Re||Ue),Ah=!i||ve||!ce||k||j||x||Ye||Be||Pe||S||P||Re||wt||Jt||Nt,Rh=ve||!(Pe||de||Nt),Ph=!i||Qe||!ko||k||j||x||Pe||Be||Ye||S||P||Re||de||Jt||ye,Dh=Qe||!(Ye||wt||ye),Nh=!i||ar||!Kc||k||j||x||Pe||Ye||Be||S||P||Re||de||wt||Zn,Lh=ar||!(Be||Jt||Zn),Oh=ar||Be||!Xn||zc;p&&i&&(o.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(n))&&(o.commissioningTaskLock=""),v&&(h||ke(b))&&(o.pendingBoilerPowerTestStart=!1),S&&ke(b)&&(o.commissioningTaskLock=""),L&&ke(H)&&(o.pendingFlowAutotuneStart=!1),P&&ke(H)&&(o.commissioningTaskLock=""),Ue&&(yt||ke(X))&&(o.pendingAirPurgeStart=!1),Re&&ke(X)&&(o.commissioningTaskLock=""),Nt&&(xe||ke(re))&&(o.pendingManualFlowStart=!1),de&&(xe||ke(re))&&(o.commissioningTaskLock=""),ye&&(Ge||ke(Ve))&&(o.pendingManualHpStart=!1),wt&&(Ge||ke(Ve))&&(o.commissioningTaskLock=""),Zn&&(Jn||ke(St))&&(o.pendingHpWaterCalibrationStart=!1),Jt&&ke(St)&&(o.commissioningTaskLock="");let _h=a?"Wachten op CM100":t,Fh=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",Ih=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:Jc,available:!!(Kc||o.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:Mr({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:Jc,statusCopy:Be?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":Xn?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:By({status:St,running:Be,resultReady:Xn,startDisabled:Nh,abortDisabled:Lh,applyDisabled:Oh,busy:ar,controlsAvailable:!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:Qc,available:!!(ce||o.entities.manualFlowStatus),openDisabled:!i,cardMarkup:Mr({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:Qc,statusCopy:Pe?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${tt("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${o.entities.manualFlowStart||o.entities.manualFlowAbort?Wo({active:Pe,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:ve||Ah,stopDisabled:ve||Rh}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${He("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",Te("flowSelected"),"oq-settings-field--compact")}
            ${He("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",Te("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${o.entities.manualFlowApplyHeating?ze("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",ve):""}
          ${o.entities.manualFlowApplyCooling?ze("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",ve):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:Yc,available:!!(ko||o.entities.manualHpStatus),openDisabled:!i,cardMarkup:Mr({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:Yc,statusCopy:Ye?Yn?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":Qn?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${o.entities.manualHpStart||o.entities.manualHpAbort?Wo({active:Ye,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:Qe||Ph,stopDisabled:Qe||Dh}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${uo("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${tt("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${w("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${uo("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${tt("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${He("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",Te("flowSelected"),"oq-settings-field--compact")}
              ${He("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",Yp("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${w("hp2Compressor")?He("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",Yp("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${He("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",E("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${He("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",ao(F("hp1Failures","None")),"oq-settings-field--compact")}
              ${w("hp2Failures")?He("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",ao(F("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:Ri,available:!0,openDisabled:Go(Ri),cardMarkup:Mr({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:Ri,statusCopy:Z?"Wacht totdat CM100 actief is voordat je autotune start.":j?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort?Wo({active:j,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:A||Xc,stopDisabled:A||xh}):""}
            ${o.entities.flowAutotuneApply?ze("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",A||$h):""}
          `,metrics:`
            ${He("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",kh,"oq-settings-field--compact")}
            ${He("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",Ch,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:Ai,available:e,openDisabled:Go(Ai),cardMarkup:Mr({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s($)}`,status:Ai,statusCopy:q?"Wacht totdat CM100 actief is voordat je de boiler-test start.":k?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort?Wo({active:k,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:g||Zc,stopDisabled:g||Eh}):""}
            ${o.entities.boilerPowerTestApply?ze("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",g||Th):""}
          `,metrics:`
            ${He("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",z)}
            ${He("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",Te("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:Pi,available:G,openDisabled:Go(Pi),cardMarkup:Mr({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:Pi,statusCopy:x?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${o.entities.airPurgeStart||o.entities.airPurgeAbort?Wo({active:x,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:ct||Mh,stopDisabled:ct||Hh}):""}
          `,metrics:`
            ${He("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",ee,"oq-settings-field--compact")}
            ${He("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",be,"oq-settings-field--compact")}
            ${He("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",Te("flowSelected"),"oq-settings-field--compact")}
            ${Qd("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(jh=>jh.available);return{cm100Status:_h,cm100StartDisabled:u,cm100StopDisabled:d,serviceStatusCopy:Fh,tasks:Ih}}function Ky(e){return Ne({dataAttribute:"data-oq-service-task",dataValue:e.key,className:"oq-settings-service-row",label:e.label,value:e.status,note:e.summary,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${s(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>`})}function Zp(){let e=Jp();return oe("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${o.entities.commissioningCm100Start?ze("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${o.entities.commissioningCm100Stop?ze("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(t=>Ky(t)).join("")}
          </div>
        </div>
      `)}function Xp(){let e=String(o.systemModal||"").replace(/^service-task-/,""),r=Jp().tasks.find(n=>n.key===e);return r?`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task" data-oq-service-task-scroller role="dialog" aria-modal="true" aria-labelledby="oq-service-task-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Service</p>
              <h2 class="oq-helper-modal-title" id="oq-service-task-modal-title">${s(r.title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit ${s(r.title)}">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(r.summary)}</p>
          <div class="oq-settings-service-task-modal-body">
            ${r.cardMarkup}
          </div>
          <div class="oq-helper-modal-actions">
            ${r.modalActions||""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
          </div>
        </section>
      </div>
    `:""}function Ka(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${Us("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${Us("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${tt("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${tt("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function em(){return oe("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",Ka())}function tm(){return Ka("oq-settings-grid oq-settings-grid--modal")}var gl=null;function om(e){gl=typeof e=="function"?e:null}function Mn(){return gl?gl():"?meta=1"}async function ho(e,t){let r=O[e];if(!r)throw new Error(`Onbekend veld ${e}.`);if(r.domain==="select"){let n=String(t||"").trim(),a=await fetch(`${Y(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="number"){let n=fe(e,t),a=await fetch(`${Y(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="time"){let n=Ct(t),a=await fetch(`${Y(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="datetime"){let n=Ke(t),a=await fetch(`${Y(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="text"){let n=String(t||"").trim(),a=await fetch(`${Y(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="switch"||r.domain==="binary_sensor"){let n=!!t,a=n?"turn_on":"turn_off",i=await fetch(Y(r.domain,r.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return n}throw new Error(`${r.name} kan niet worden hersteld.`)}function fl(){let e=o.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;let t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function zy(){return fl()?Ro:Ro.filter(e=>e<=168)}function Hn(e){let t=zy(),r=Number(e);return t.includes(r)?r:Number.isFinite(r)&&r>t[t.length-1]?t[t.length-1]:t.includes(kt)?kt:t[0]}function Hr(e){o.trendWindowHours=Hn(e);try{window.localStorage.setItem("oq-trend-window-hours",String(o.trendWindowHours))}catch{}}function Uy(e){return Object.prototype.hasOwnProperty.call(e,"hour")||Object.prototype.hasOwnProperty.call(e,"hour_of_day")||Object.prototype.hasOwnProperty.call(e,"hourOfDay")}function Gy(e){return e.some(t=>Ga(t)!==void 0)}function Qy(e){let t=new Set;for(let r of e){let n=cm(r.date_key??r.dateKey??r.date??r.from??Ga(r));if(n){if(t.has(n))return!0;t.add(n)}}return!1}function am(e){return e.some(Uy)||Gy(e)&&Qy(e)}function Yy(){return{available:"Alleen live",oldest:"Geen data",newest:"Geen data",lastFlush:"Geen data",sizeKb:0,writes:0,nowMs:Number.NaN}}function Jy(e){let t=Yy();return String(e||"").split(/\r?\n/).forEach(r=>{if(r.startsWith("@now|")){t.nowMs=Number(r.slice(5));return}if(!r.startsWith("@flash|"))return;let n=r.split("|");t.available=n[1]||t.available,t.oldest=n[2]||t.oldest,t.newest=n[3]||t.newest,t.lastFlush=n[4]||t.lastFlush,t.sizeKb=Number(n[5])||0,t.writes=Number(n[6])||0}),t}async function im(e={}){if(!w("trendHistoryEnabled")&&!Rr()){let n=!!(o.trendHistoryMetadataSignature||o.trendHistoryMetadataError);return o.trendHistoryMetadata={},o.trendHistoryMetadataError="",o.trendHistoryMetadataSignature="",o.trendHistoryMetadataLastFetchAt=0,n}let t=e.force===!0,r=Date.now();if(!t&&o.trendHistoryMetadataFetchPromise)return o.trendHistoryMetadataFetchPromise;if(!t&&(o.trendHistoryMetadataSignature||o.trendHistoryMetadataError)&&r-Number(o.trendHistoryMetadataLastFetchAt||0)<ea)return!1;o.trendHistoryMetadataFetchPromise=(async()=>{let n=await fetch(`${Oe()}/trends/history?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.text(),i=Jy(a),l=`${a.length}|${a.slice(0,120)}|${a.slice(-120)}`,c=l!==o.trendHistoryMetadataSignature||o.trendHistoryMetadataError!=="";return o.trendHistoryMetadata=i,o.trendHistoryMetadataError="",o.trendHistoryMetadataSignature=l,o.trendHistoryMetadataLastFetchAt=Date.now(),c})();try{return await o.trendHistoryMetadataFetchPromise}catch(n){let a=`Trendhistorie metadata kon niet worden geladen. ${n.message}`,i=o.trendHistoryMetadataError!==a;return o.trendHistoryMetadata={},o.trendHistoryMetadataError=a,o.trendHistoryMetadataSignature="",o.trendHistoryMetadataLastFetchAt=Date.now(),i}finally{o.trendHistoryMetadataFetchPromise=null}}async function Rn(e={}){await V(io(),"all",{concurrency:Ot,forceMissing:e.forceMissing===!0}),await Promise.all([im({force:e.forceTrendHistory===!0}),vo({force:e.forceEnergyHistory===!0,metaOnly:!0})])}function Qo(e=[250,1e3,2500],t={}){e.forEach(r=>{window.setTimeout(()=>{o.nativeOpen||o.appView!=="settings"||Rn({forceMissing:r===0,forceTrendHistory:t.forceTrendHistory===!0,forceEnergyHistory:t.forceEnergyHistory===!0}).finally(()=>{o.appView==="settings"&&o.mounted&&!o.nativeOpen&&f()})},r)})}var Zy="@schema|openquatt.energy_history_import.v1",Xy=850,An=[{id:"days",label:"Alleen dagtotalen",fileLabel:"daily"},{id:"days_and_hours",label:"Dagtotalen + uurdetail",fileLabel:"daily-hourly"},{id:"hours",label:"Alleen uurdetail",fileLabel:"hourly"}],ew={forbidden:"Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},ht={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","total_hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","total_hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh","energy_hp_cooling","hpCooling","hp_cooling_wh","total_hp_cooling_wh","totalHpCooling"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","total_boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function Ar(e){let t=String(e||"").trim();return An.some(r=>r.id===t)?t:"days_and_hours"}function sm(e){let t=Ar(e);return An.find(r=>r.id===t)||An[1]}function tw(e){let t=sm(e),r=new Date().toISOString().slice(0,10);return`openquatt-energy-history-${t.fileLabel}-${r}.json`}async function lm(){if(o.energyHistoryExportBusy)return;let e=Ar(o.energyHistoryExportMode),t=sm(e);if(o.energyHistoryExportMode=e,o.energyHistoryExportBusy=!0,o.energyHistoryExportError="",o.energyHistoryExportNotice="",f(),Rr()){o.energyHistoryExportBusy=!1,o.energyHistoryExportNotice=`Preview: ${t.label.toLowerCase()} zou als JSON worden gedownload.`,f();return}try{let r=await fetch(`${Oe()}/energy/history/export?mode=${encodeURIComponent(e)}`,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.blob();es(n,tw(e)),o.energyHistoryExportNotice=`${t.label} ge\xEBxporteerd.`}catch(r){o.energyHistoryExportError=`Exporteren mislukt. ${r.message}`}finally{o.energyHistoryExportBusy=!1,f()}}function hl(e=!1){let t=e?o.energyHistoryImportNotice:"";o.energyHistoryImportFileName="",o.energyHistoryImportSource="",o.energyHistoryImportRange="",o.energyHistoryImportRecords=[],o.energyHistoryImportHourRecords=[],o.energyHistoryImportDuplicateCount=0,o.energyHistoryImportSkippedCount=0,o.energyHistoryImportInvalidCount=0,o.energyHistoryImportUnsupportedCount=0,o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportError="",o.energyHistoryImportNotice=t}function cm(e){if(e==null||e==="")return 0;let t=String(e).trim(),r=0,n=0,a=0,i=t.match(/^(\d{4})(\d{2})(\d{2})$/),l=um(t),c=t.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(i)r=Number(i[1]),n=Number(i[2]),a=Number(i[3]);else{if(l)return l.dateKey;if(c)r=Number(c[1]),n=Number(c[2]),a=Number(c[3]);else{let u=new Date(t);if(Number.isNaN(u.getTime()))return 0;r=u.getFullYear(),n=u.getMonth()+1,a=u.getDate()}}if(r<2020||r>2099||n<1||n>12||a<1||a>31)return 0;let p=new Date(Date.UTC(r,n-1,a));return p.getUTCFullYear()!==r||p.getUTCMonth()!==n-1||p.getUTCDate()!==a?0:r*1e4+n*100+a}function rm(e){let t=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(t)?`${t.slice(6,8)}-${t.slice(4,6)}-${t.slice(0,4)}`:""}function Ga(e){return e.timestamp??e.time??e.datetime??e.date_time??e.dateTime}function um(e){if(e==null||e==="")return null;let t=String(e).trim(),r=t.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i);if(!r)return null;let n=/(?:Z|[+-]\d{2}:?\d{2})$/i.test(t),a=Number(r[1]),i=Number(r[2]),l=Number(r[3]),c=Number(r[4]),p=Number(r[5]||"0"),u=Number(r[6]||"0");if([a,i,l,c,p,u].some(m=>Number.isNaN(m)))return null;let d=n?new Date(t):new Date(a,i-1,l,c,p,u,0);if(Number.isNaN(d.getTime()))return null;let b=d.getFullYear(),y=d.getMonth()+1,h=d.getDate(),g=d.getHours();return b<2020||b>2099||y<1||y>12||h<1||h>31?null:{dateKey:b*1e4+y*100+h,hour:g}}function dm(e){if(e==null||e==="")return null;let t=Number(String(e).trim().replace(",","."));return!Number.isFinite(t)||t<0||t>=4294967295?null:Math.round(t)}function bo(e,t,r=null){for(let n of t){if(!Object.prototype.hasOwnProperty.call(e,n))continue;let a=dm(e[n]);if(a!==null)return a}return r}function za(e,t){return bo(e,t)!==null}function pm(e){let t=cm(e.date_key??e.dateKey??e.date??e.from??Ga(e));if(!t)return null;let r=bo(e,ht.electricalInput),n=bo(e,ht.heatpumpHeatOutput);if(r===null||n===null)return null;let a=bo(e,ht.heatingInput,r),i=bo(e,ht.coolingInput,0),l=bo(e,ht.heatpumpCoolingOutput,0),c=bo(e,ht.boilerHeatOutput,0),p=bo(e,ht.systemHeatOutput,n+c),u=za(e,ht.heatingInput)||za(e,ht.coolingInput)||za(e,ht.heatpumpCoolingOutput)||za(e,ht.systemHeatOutput);return[a,i,l,c,p].some(d=>d===null)?null:{dateKey:t,electricalInputWh:r,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:n,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:c,systemHeatOutputWh:p,hasFullImportFields:u}}function ow(e){let t=dm(e.hour??e.hour_of_day??e.hourOfDay);if(t!==null&&t>=0&&t<=23)return t;let r=Ga(e);if(r){let n=String(r).trim(),a=um(n);if(a)return a.hour;let i=new Date(n);if(!Number.isNaN(i.getTime()))return i.getHours();let l=n.match(/^(\d{1,2})(?::\d{2})/);if(l){let c=Number(l[1]);if(c>=0&&c<=23)return c}}return-1}function rw(e){let t=pm(e),r=ow(e);return!t||r<0||r>23?null:{...t,hour:r}}function nw(e){let t=[],r=[],n="",a=!1,i=()=>{r.push(n),n=""},l=()=>{i(),r.some(p=>String(p).trim()!=="")&&t.push(r),r=[]};for(let p=0;p<e.length;p+=1){let u=e[p];a?u==='"'&&e[p+1]==='"'?(n+='"',p+=1):u==='"'?a=!1:n+=u:u==='"'?a=!0:u===","?i():u===`
`?l():u!=="\r"&&(n+=u)}if((n||r.length)&&l(),!t.length)return[];let c=t.shift().map(p=>String(p||"").trim());return t.map(p=>{let u={};return c.forEach((d,b)=>{d&&(u[d]=p[b]??"")}),u})}function Ua(e){return!e||typeof e!="object"||Array.isArray(e)||!e.summary||typeof e.summary!="object"||Array.isArray(e.summary)?e:{...e.summary,...e}}function aw(e){let t=[],r=[];if(Array.isArray(e)){let l=e.map(Ua);return am(l)?r.push(...l):t.push(...l),{dailyRows:t,hourlyRows:r,source:"JSON"}}let n=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return t.push(...a.map(Ua)),r.push(...i.map(Ua)),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(c=>{r.push(Ua({...c,date:c.date??l.date}))})}),{dailyRows:t,hourlyRows:r,source:n}}function iw(e,t){let r=String(t||"").trim();if(!r)throw new Error("Bestand is leeg.");let n=[],a=[],i="";if(r[0]==="{"||r[0]==="["){let g=aw(JSON.parse(r));n=g.dailyRows,a=g.hourlyRows,i=g.source}else{let g=nw(r);am(g)||String(e||"").toLowerCase().includes("hour")?a=g:n=g,i="CSV"}let l=new Map,c=new Map,p=0,u=0;n.forEach(g=>{let m=pm(g);if(!m){u+=1;return}l.has(m.dateKey)&&(p+=1),l.set(m.dateKey,m)}),a.forEach(g=>{let m=rw(g);if(!m){u+=1;return}let v=`${m.dateKey}:${m.hour}`;c.has(v)&&(p+=1),c.set(v,m)});let d=[...l.values()].sort((g,m)=>g.dateKey-m.dateKey),b=[...c.values()].sort((g,m)=>g.dateKey-m.dateKey||g.hour-m.hour);if(!d.length&&!b.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");let y=[...d.map(g=>g.dateKey),...b.map(g=>g.dateKey)].sort((g,m)=>g-m),h=y.length?`${rm(y[0])} t/m ${rm(y[y.length-1])}`:"";return{records:d,hourRecords:b,source:i,range:h,duplicates:p,invalid:u}}function sw(e){return e.hasFullImportFields?["day",e.dateKey,e.electricalInputWh,e.heatingInputWh,e.coolingInputWh,e.heatpumpHeatOutputWh,e.heatpumpCoolingOutputWh,e.boilerHeatOutputWh,e.systemHeatOutputWh].join("|"):["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function lw(e){let t=new Map;return e.forEach(r=>{t.has(r.dateKey)||t.set(r.dateKey,new Map),t.get(r.dateKey).set(r.hour,r)}),[...t.entries()].sort((r,n)=>r[0]-n[0]).map(([r,n])=>{let a=0,i=[],l=[...n.values()].some(c=>c.hasFullImportFields);for(let c=0;c<24;c+=1){let p=n.get(c);p&&(a|=1<<c),l?i.push(p?.electricalInputWh??0,p?.heatingInputWh??0,p?.coolingInputWh??0,p?.heatpumpHeatOutputWh??0,p?.heatpumpCoolingOutputWh??0,p?.boilerHeatOutputWh??0,p?.systemHeatOutputWh??0):i.push(p?.electricalInputWh??0,p?.heatpumpHeatOutputWh??0,p?.boilerHeatOutputWh??0)}return["hourday",r,a,...i].join("|")})}function mm(e){let t=new URLSearchParams;return t.set("records",[Zy,...e].join(`
`)),o.energyHistoryCsrfToken&&t.set("csrf_token",o.energyHistoryCsrfToken),t}function cw(e){let t=[],r=[];return e.forEach(n=>{let a=[...r,n];r.length&&String(mm(a)).length>Xy?(t.push(r),r=[n]):r=a}),r.length&&t.push(r),t}function uw(e){let t=[];e.written>0&&t.push(`${e.written} dagrecords`),e.hourWritten>0&&t.push(`${e.hourWritten} uurdagen`);let r=t.length?`${t.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",n=[];return e.duplicates>0&&n.push(`${e.duplicates} al aanwezig`),e.skipped>0&&n.push(`${e.skipped} overgeslagen`),e.invalid>0&&n.push(`${e.invalid} ongeldig`),e.unsupported>0&&n.push(`${e.unsupported} onbekend`),n.length?`${r} (${n.join(", ")}.)`:r}async function dw(e){let t=await fetch(`${Oe()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:mm(e)}),r=await t.text(),n={};try{n=r?JSON.parse(r):{}}catch{n={}}if(!t.ok||n.ok===!1){let a=n.error?String(n.error):"";throw new Error(ew[a]||a||`HTTP ${t.status}`)}return n}function gm(e){let t=String(e||"").split(/\r?\n/).find(r=>r.startsWith("@csrf|"));return t?t.slice(6):""}async function pw(){if(Rr())return;let e=await fetch(`${Oe()}/energy/history?meta=1`,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=gm(await e.text());if(!t)throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");o.energyHistoryCsrfToken=t}function mw(e,t){o.energyHistoryImportProgressPercent=t>0?Math.min(99,Math.max(1,Math.round(e/t*100))):0,f()}async function gw(e){if(hl(),!e){f();return}o.energyHistoryImportFileName=e.name||"exportbestand";try{let t=iw(e.name||"",await e.text());o.energyHistoryImportRecords=t.records,o.energyHistoryImportHourRecords=t.hourRecords,o.energyHistoryImportSource=t.source,o.energyHistoryImportRange=t.range,o.energyHistoryImportDuplicateCount=t.duplicates,o.energyHistoryImportInvalidCount=t.invalid}catch(t){o.energyHistoryImportError=`Bestand kon niet worden gelezen. ${t.message}`}f()}function fm(){let e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{let t=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),gw(t)},{once:!0}),document.body.appendChild(e),e.click()}async function hm(){if(o.energyHistoryImportBusy)return;let e=[...o.energyHistoryImportRecords.map(sw),...lw(o.energyHistoryImportHourRecords)];if(!e.length){o.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",f();return}if(o.energyHistoryImportBusy=!0,o.energyHistoryImportError="",o.energyHistoryImportNotice="",o.energyHistoryImportProgressPercent=1,f(),Rr()){let n=new Set(o.energyHistoryImportHourRecords.map(a=>a.dateKey)).size;o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportNotice=`Preview: ${o.energyHistoryImportRecords.length} dagrecords en ${n} uurdagen zouden worden ge\xEFmporteerd.`,f();return}let t={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0},r=0;try{await pw();let n=cw(e);for(let a of n){let i=await dw(a);t.written+=Number(i.written||0),t.hourWritten+=Number(i.hour_written||0),t.duplicates+=Number(i.duplicates||0),t.skipped+=Number(i.skipped||0),t.invalid+=Number(i.invalid||0),t.unsupported+=Number(i.unsupported||0),r+=a.length,mw(r,e.length)}o.energyHistoryImportProgressPercent=100,o.energyHistoryImportNotice=uw(t),o.energyHistoryImportError="",o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,await Rn({forceMissing:!0,forceEnergyHistory:!0})}catch(n){o.energyHistoryImportError=`Importeren mislukt. ${n.message}`}finally{o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,f()}}function fw(){return Ft()||o.appView==="settings"&&o.systemModal==="history-storage"}function Qa(){o.settingsBackupDraft=null,o.settingsBackupError="",o.settingsBackupBusy=!1}function hw(){return{device:Fe(),installation:ft(),topology:typeof te=="function"?te():"",firmware_version:le(),firmware_channel:String(E("firmwareUpdateChannel")||E("releaseChannelText")||"").trim()}}function bm(e){let t=O[e];if(!t)return;if(e==="setupComplete")return ga();let r=E(e);if(r===""||r===null||r===void 0)return;if(t.domain==="switch"||t.domain==="binary_sensor")return T(e);if(t.domain==="number"){let a=Me(r);return Number.isNaN(a)?void 0:a}return t.domain==="time"?Ct(r)||void 0:t.domain==="datetime"?Ke(r)||void 0:String(r||"").trim()||void 0}function vm(){let e={};return Zt.forEach(t=>{let r={};t.keys.forEach(n=>{let a=bm(n);a!==void 0&&(r[n]=a)}),e[t.id]=r}),{schema_version:zi,exported_at:new Date().toISOString(),source:hw(),settings:e}}function bw(e=vm()){let t=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${t}.json`}function vw(e){let t=O[e];return t?.name?t.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function nm(e,t){if(t==null||t==="")return"\u2014";let r=O[e];return r?r.domain==="number"?Q(e,t):r.domain==="time"?Ct(t)?.slice(0,5)||"\u2014":r.domain==="datetime"?Ke(t)||"\u2014":r.domain==="switch"||r.domain==="binary_sensor"?t?"Aan":"Uit":String(t).trim()||"\u2014":String(t).trim()||"\u2014"}function yw(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function bl(e){let t=e?.settings&&typeof e.settings=="object"?e.settings:{},r=e?.source&&typeof e.source=="object"?e.source:{},n=iu,a=0,i=0,l=0,c=0,p=0,u=0,d=0,b=0,y=Zt.map(h=>{let g=t[h.id]&&typeof t[h.id]=="object"?t[h.id]:{},m=0,v=0,S=0,q=0,C=0,k=0,$=0,D=h.keys.map(N=>{let H=!!O[N]?.optional,U=Object.prototype.hasOwnProperty.call(g,N),A=U?g[N]:void 0,I=bm(N),L=w(N),P=U?nm(N,A):H?"Niet op huidige installatie":"Ontbreekt in backup",Z=L?nm(N,I):H?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie",_="same";return!U&&H?_="optional-missing":U?L?JSON.stringify(I)!==JSON.stringify(A)&&(_="different"):_=H?"optional-unavailable":"current-missing":_="missing",L&&($+=1,b+=1),_!=="same"&&(k+=1,d+=1),H?(C+=1,U?(S+=1,l+=1):(q+=1,c+=1)):U?(m+=1,a+=1):(v+=1,i+=1),{key:N,label:vw(N),optional:H,hasBackupValue:U,backupDisplay:P,currentDisplay:Z,status:_,statusLabel:yw(_)}});return u+=h.keys.filter(N=>!O[N]?.optional).length,{id:h.id,label:h.label,present:m,currentPresent:$,requiredTotal:h.keys.filter(N=>!O[N]?.optional).length,optionalTotal:C,optionalPresent:S,optionalMissing:q,requiredMissing:v,total:h.keys.length,differenceCount:k,rows:D}});return Object.entries(t).forEach(([h,g])=>{if(!Zt.some(m=>m.id===h)){p+=1;return}!g||typeof g!="object"||Object.keys(g).forEach(m=>{n.has(m)||(p+=1)})}),{source:r,sectionSummaries:y,requiredPresent:a,requiredMissing:i,requiredAvailable:u,optionalPresent:l,optionalMissing:c,unknown:p,differenceCount:d,currentPresent:b,requiredTotal:u,total:Xt.length}}function ww(e,t=""){let r=JSON.parse(e);if(!r||typeof r!="object")throw new Error("Backupbestand bevat geen JSON-object.");let n=Number(r.schema_version??r.schemaVersion??0);if(!Number.isInteger(n)||n<zi)throw new Error("Onbekende backupversie.");let a=r.settings&&typeof r.settings=="object"?r.settings:{},i={schema_version:n,exported_at:String(r.exported_at||""),source:r.source&&typeof r.source=="object"?r.source:{},settings:a,file_name:t||""};return i.summary=bl(i),i}async function Sw(){o.settingsBackupBusy=!0,o.controlError="",o.controlNotice="",f();try{return await V(Xt,"all"),vm()}finally{o.settingsBackupBusy=!1,f()}}async function ym(){if(!o.settingsBackupBusy)try{let e=await Sw();qu(bw(e),e),o.controlNotice="Settings-backup gedownload.",f()}catch(e){o.controlError=`Backup exporteren mislukt. ${e.message}`,f()}}async function wm(e){if(!(!e||o.settingsBackupBusy)){o.settingsBackupBusy=!0,o.settingsBackupDraft=null,o.settingsBackupError="",o.controlError="",o.controlNotice="",f();try{let t=await e.text();await V(Xt,"all");let r=ww(t,e.name||"");o.settingsBackupDraft=r,o.systemModal="settings-backup-restore"}catch(t){o.settingsBackupDraft=null,o.settingsBackupError=`Backupbestand kon niet worden gelezen. ${t.message}`}finally{o.settingsBackupBusy=!1,f()}}}async function Sm(){let e=o.settingsBackupDraft;if(!e||o.settingsBackupBusy)return;o.settingsBackupBusy=!0,o.settingsBackupError="",o.controlError="",o.controlNotice="",f();let t=[],r=[],n=!1;try{await V(Xt,"all");for(let i of Zt){let l=e.settings?.[i.id]&&typeof e.settings[i.id]=="object"?e.settings[i.id]:{};for(let c of i.keys){if(!Object.prototype.hasOwnProperty.call(l,c)){r.push(c);continue}let p=l[c];if(c==="setupComplete"){n=p===!0;continue}if(c==="openquattEnabled")continue;if(!O[c]||!w(c)){r.push(c);continue}try{await ho(c,p),t.push(c)}catch{r.push(c)}}}let a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&w("openquattEnabled")&&(await ho("openquattEnabled",a),t.push("openquattEnabled")),n&&O.apply){let i=await fetch(Y("button","Complete setup","press"),{method:"POST"});if(!i.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${i.status}).`);t.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&r.push("setupComplete");o.systemModal="settings-backup-success",Qa(),o.controlNotice=`Backup hersteld (${t.length} toegepast${r.length?`, ${r.length} overgeslagen`:""}).`,await ue()}catch(a){o.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{o.settingsBackupBusy=!1,f()}}function Rr(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function vl(e={}){if(!dt()){let n=!!(o.trendHistoryRaw||o.trendHistoryError);return o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,n}if(Rr())return!1;let t=e.force===!0,r=Date.now();if(!t&&o.trendHistoryFetchPromise)return o.trendHistoryFetchPromise;if(!t&&(o.trendHistoryRaw||o.trendHistoryError)&&r-Number(o.trendHistoryLastFetchAt||0)<ea)return!1;o.trendHistoryFetchPromise=(async()=>{let n=Hn(o.trendWindowHours||kt);n!==o.trendWindowHours&&Hr(n);let a=await fetch(`${Oe()}/trends/history?hours=${encodeURIComponent(String(n))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let i=await a.text(),l=i.split(/\r?\n/),c=Number.NaN,p=i;l.length&&l[0].startsWith("@now|")&&(c=Number(l[0].slice(5)),p=l.slice(1).join(`
`));let u=`${n}|${p.length}|${p.slice(0,120)}|${p.slice(-120)}`,d=Number.isFinite(o.trendHistoryNowMs),y=Number.isFinite(c)?!d||o.trendHistoryNowMs!==c:d,h=p!==o.trendHistoryRaw||o.trendHistoryError!==""||o.trendHistorySignature!==u||y;return o.trendHistoryRaw=p,o.trendHistoryError="",o.trendHistorySignature=u,o.trendHistoryNowMs=Number.isFinite(c)?c:Number.NaN,o.trendHistoryLastFetchAt=Date.now(),h})();try{return await o.trendHistoryFetchPromise}catch(n){let a=`Trendhistorie kon niet worden geladen. ${n.message}`,i=o.trendHistoryError!==a;return o.trendHistoryError=a,o.trendHistoryRaw="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=Date.now(),i}finally{o.trendHistoryFetchPromise=null}}async function vo(e={}){if(!w("lifetimeEnergyHistoryEnabled")&&!Rr()){let a=!!(o.energyHistoryRaw||o.energyHistoryError);return o.energyHistoryRaw="",o.energyHistoryError="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=0,o.energyHistoryRequestQuery="",o.energyHistoryFetchQuery="",o.energyHistoryCsrfToken="",a}let t=e.force===!0,r=Date.now(),n=e.metaOnly===!0?"?meta=1":typeof Mn=="function"?Mn():"";if(!t&&o.energyHistoryFetchPromise&&o.energyHistoryFetchQuery===n)return o.energyHistoryFetchPromise;if(!t&&o.energyHistoryRequestQuery===n&&(o.energyHistoryRaw||o.energyHistoryError)&&r-Number(o.energyHistoryLastFetchAt||0)<ea)return!1;o.energyHistoryFetchQuery=n,o.energyHistoryFetchPromise=(async()=>{let a=async m=>{let v=await fetch(`${Oe()}/energy/history${m}`,{cache:"no-store"});if(!v.ok)throw new Error(`HTTP ${v.status}`);return v.text()},i=n,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof Mn=="function"){let m=o.energyHistoryRaw;o.energyHistoryRaw=l;let v=Mn();o.energyHistoryRaw=m,v&&v!==i&&(i=v,l=await a(i))}let c=l.split(/\r?\n/),p=gm(l)||o.energyHistoryCsrfToken,u=Number.NaN;c.forEach(m=>{m.startsWith("@now|")&&(u=Number(m.slice(5)))});let d=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,b=Number.isFinite(o.energyHistoryNowMs),h=Number.isFinite(u)?!b||o.energyHistoryNowMs!==u:b,g=l!==o.energyHistoryRaw||o.energyHistoryError!==""||o.energyHistorySignature!==d||h||p!==o.energyHistoryCsrfToken;return o.energyHistoryRaw=l,o.energyHistoryError="",o.energyHistorySignature=d,o.energyHistoryNowMs=Number.isFinite(u)?u:Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=i,o.energyHistoryCsrfToken=p,g})();try{return await o.energyHistoryFetchPromise}catch(a){let i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=o.energyHistoryError!==i;return o.energyHistoryError=i,o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=n,o.energyHistoryCsrfToken="",l}finally{o.energyHistoryFetchPromise=null}}ld({refreshEnergyHistoryData:vo,refreshSettingsStorageState:Rn,refreshTrendHistoryData:vl,refreshTrendHistoryMetadata:im,shouldRefreshSettingsStorageForCurrentSurface:fw});function qm(){return F("controlModeLabel","").toLowerCase().includes("standby")}function Ht(e,t){e&&e.innerHTML!==t&&(e.innerHTML=t)}function nt(e,t,r){return!e||e.dataset.renderSignature===t?!1:(e.outerHTML=r,!0)}function qw([e,t]){let r=Ji(t);if(!w(t)&&Number.isNaN(r))return"";let n=Yi(t)?Xe(t):F(t);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(n)}</strong>
      </div>
    `}function kw(e){let t=e.rows.map(qw).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${t}
        </div>
      </section>
    `:""}function Cw(e){let t=e.groups.map(kw).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${t}
        </div>
      </section>
    `:""}function Ew(e){let t=e.categories.map(Cw).filter(Boolean).join("");return t?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${t}
        </div>
      </article>
    `:""}function ql(){let e=ca.map(Ew).filter(Boolean),t=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:t}}function xm(e=ql()){return we(e)}function $m(e=ql()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(xm(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}var Za=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],Mm=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],Tw=new Set(["day","week","month","year"]),xw=["Zo","Ma","Di","Wo","Do","Vr","Za"];function Ie(e){let t=String(e||"").trim();return Mm.some(r=>r.id===t)?t:"day"}function kl(e){let t=Ie(e);o.energyHistoryView!==t&&(o.energyHistoryView=t,o.energyHistoryLastFetchAt=0,f(),Hm())}function Hm(){typeof vo=="function"&&vo({force:!0}).then(e=>{e&&f()})}function Lr(e){return Tw.has(Ie(e))}function Xa(){let e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Pn(){let e=String(o.energyHistoryRaw||""),t={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0,dayPartitionAvailable:!1,dayStorageKb:0,dayWriteCount:0,dayLastWriteTimestampS:0};return e.split(/\r?\n/).forEach(r=>{if(!r.startsWith("@bounds|")&&!r.startsWith("@day_retention|")&&!r.startsWith("@hour_retention|"))return;let n=r.split("|");r.startsWith("@bounds|")?(t.storedDayCount=Number(n[1])||0,t.oldestDateKey=Number(n[2])||null,t.newestDateKey=Number(n[3])||null,t.hourStoredDayCount=Number(n[4])||0,t.hourOldestDateKey=Number(n[5])||null,t.hourNewestDateKey=Number(n[6])||null):r.startsWith("@day_retention|")?(t.dayPartitionAvailable=Number(n[1])===1,t.dayStorageKb=Number(n[2])||0,t.dayWriteCount=Number(n[3])||0,t.dayLastWriteTimestampS=Number(n[4])||0):r.startsWith("@hour_retention|")&&(t.hourRequestedRetentionDays=Number(n[1])||0,t.hourSlotCount=Number(n[2])||0,t.hourPartitionAvailable=Number(n[3])===1,t.hourRecordCount=Number(n[4])||0,t.hourWriteCount=Number(n[5])||0,t.hourStorageKb=Number(n[6])||0,t.hourLastWriteTimestampS=Number(n[7])||0)}),t}function Cl(){let e=String(o.energyHistoryRaw||""),t=null;return e.split(/\r?\n/).forEach(r=>{let n=_m(r);n&&(t=n.dateKey)}),t}function $w(e=[],t=!0){let r=Cl(),n=Pn(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(n.newestDateKey))&&a.push(Number(n.newestDateKey)),Number.isFinite(Number(r))&&a.push(Number(r)),t&&ei().forEach(i=>{let l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):Xa()}function it(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Am(e,t,r){return new Date(e,t-1,r,12,0,0)}function Rm(e,t){return new Date(e,t,0).getDate()}function km(e){return String(e).padStart(2,"0")}function yl(e){let t=ae(e);return t?`${t.year}-${km(t.month)}-${km(t.day)}`:""}function Pm(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!t)return null;let r=Number(t[1]),n=Number(t[2]),a=Number(t[3]),i=Am(r,n,a);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:ae(it(i))}function Dm(e,t){return Number(e)*100+Number(t)}function Sl(e){return Dm(e.getFullYear(),e.getMonth()+1)}function Dr(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return null;let r=Math.floor(t/100),n=t%100;return r<2020||n<1||n>12?null:{key:t,year:r,month:n,date:new Date(r,n-1,1,12,0,0)}}function Mw(e){let t=String(e||"").trim(),r=/^(\d{4})-(\d{2})$/.exec(t);return Dr(r?Dm(Number(r[1]),Number(r[2])):t)}function Nm(e,t){let r=Dr(e);if(!r)return"";let n=new Date(r.year,r.month-1+Number(t||0),1,12,0,0);return String(Sl(n))}function Dn(e){let t=new Date(e.getTime()),r=t.getDay(),n=r===0?-6:1-r;return t.setDate(t.getDate()+n),t.setHours(12,0,0,0),t}function Nr(e,t){let r=new Date(e.getTime());return r.setDate(r.getDate()+t),r.setHours(12,0,0,0),r}function Cm(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function Lm(e){let t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-r+3);let n=t.getUTCFullYear(),a=new Date(Date.UTC(n,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((t-a)/(10080*60*1e3)),year:n}}function Em(e){return it(Dn(e))}function Hw(e){let r=Pm(e)||ae(e);if(!r)return null;let n=Dn(r.date);return ae(it(n))}function Om(e){let t=ae(e);if(!t)return"Week";let r=Dn(t.date),n=Nr(r,6);return`Week ${Lm(r).week} (${Cm(r)} - ${Cm(n)})`}function ae(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return null;let r=Math.floor(t/1e4),n=Math.floor(t/100)%100,a=t%100;return r<2020||n<1||n>12||a<1||a>31?null:{key:t,year:r,month:n,day:a,date:new Date(r,n-1,a,12,0,0)}}function Gt(e,t="day"){let r=ae(e);return r?t==="weekday"?xw[r.date.getDay()]||"":t==="month"?r.date.toLocaleDateString("nl-NL",{month:"short"}):t==="year"?String(r.year):r.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function Yo(e){let t=R(e);return!Number.isFinite(t)||t<0?null:Math.round(t*1e3)}function Aw(e){let t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function El(e,t=0){let r={};return Za.forEach((n,a)=>{r[n]=Aw(e[t+a])}),r}function Rw(e){let t=String(e||"").trim();if(!t||t.startsWith("@"))return null;let r=t.split("|");if(r.length<10)return null;let n=Number(r[0]),a=Number(r[1]),i=Number(r[2]),l=ae(a);return!Number.isFinite(n)||!l?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...El(r,3)}}function _m(e){let t=String(e||"").trim();if(!t.startsWith("@current|"))return null;let r=t.split("|");if(r.length<9)return null;let n=Number(r[1]),a=ae(n);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:n,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...El(r,2)}:null}function Pw(e){let t=String(e||"").trim();if(!t.startsWith("@hour|"))return null;let r=t.split("|");if(r.length<11)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=ae(a);return!Number.isFinite(n)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...El(r,4)}}function Dw(){let e=Cl()||Xa(),t=ae(e);if(!t)return null;let r={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:t.year,month:t.month,day:t.day,partial:!0,source:"sensors",electricalInputWh:Yo("electricalEnergyDaily"),heatingInputWh:Yo("heatingElectricalEnergyDaily"),coolingInputWh:Yo("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:Yo("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:Yo("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:Yo("boilerThermalEnergyDaily"),systemHeatOutputWh:Yo("systemThermalEnergyDaily")};return Za.some(n=>Number.isFinite(r[n]))?r:null}function Nn(e,t){let r=Number(e?.[t]);return Number.isFinite(r)&&r>=0?r:0}function Ln(){let e=new Map;String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{let l=Rw(i)||_m(i);if(!l)return;let c=e.get(l.dateKey);(!c||l.sequence>=c.sequence)&&e.set(l.dateKey,l)});let r=Dw();r&&e.set(r.dateKey,r);let n=new Set(e.keys()),a=new Map;return ei().forEach(i=>{if(n.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){let c=ae(i.dateKey);if(!c)return;l=Jo({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:Gt(c.key),sortKey:c.key,source:"hour-summary"}),l.tooltipLabel=`${Gt(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}Zo(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function ei(){let e=new Map;return String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(r=>{let n=Pw(r);if(!n)return;let a=`${n.dateKey}:${n.hour}`,i=e.get(a);(!i||n.sequence>=i.sequence)&&e.set(a,n)}),[...e.values()].sort((r,n)=>r.sortKey-n.sortKey)}function Nw(e){return ei().filter(t=>t.dateKey===Number(e))}function Pr(e,t){return e.reduce((r,n)=>r+Nn(n,t),0)}function Fm(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((t,r)=>t+Nn(e,r),0)}function Lw(e){return Nn(e,"electricalInputWh")+Fm(e)}function Ja(e,t){let r=Number(e),n=Number(t);return!Number.isFinite(r)||!Number.isFinite(n)||n<=0?"\u2014":(r/n).toFixed(2)}function at(e,t=1){let r=Number(e);return Number.isFinite(r)?Math.abs(r)>=999500?`${(r/1e6).toFixed(2)} MWh`:Math.abs(r)<1e3?`${Math.round(r)} Wh`:`${(r/1e3).toFixed(t)} kWh`:"\u2014"}function Jo({dateKey:e,year:t,month:r,day:n,hour:a=null,label:i,tooltipLabel:l="",sortKey:c,source:p="bucket"}){return{sequence:0,dateKey:e,year:t,month:r,day:n,hour:a,label:i,tooltipLabel:l,sortKey:c??e,partial:!1,source:p,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function Zo(e,t){return Za.forEach(r=>{e[r]+=Nn(t,r)}),e.partial=e.partial||!!t?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(t?.sequence||0)),e}function Ow(e){let t=new Map;return e.forEach(r=>{t.set(r.dateKey,r)}),t}function Im(e,t){let r=Ie(e);if(r==="day"){let n=Pm(t)||ae(t);return n?String(n.key):""}if(r==="week"){let n=Hw(t);return n?String(n.key):""}if(r==="month"){let n=Mw(t);return n?String(n.key):""}if(r==="year"){let n=Number(t);return Number.isInteger(n)&&n>=2020&&n<=2200?String(n):""}return""}function ti(e,t){let r=Ie(t),n=ae($w(e,!0)),a=Pn(),i=ei(),l=[...e.map(h=>h.dateKey),...i.map(h=>h.dateKey)].filter(h=>Number.isFinite(Number(h)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));let c=l.length?Math.min(...l.map(Number)):n?.key,u=(c?ae(c):n)?.date||n?.date||new Date,d=n?.date||new Date,b=n?.key||Xa(),y=b;return r==="week"?(b=Em(u),y=Em(d)):r==="month"?(b=Sl(u),y=Sl(d)):r==="year"?(b=u.getFullYear(),y=d.getFullYear()):(b=it(u),y=it(d)),Number(b)>Number(y)&&(b=y),{min:String(b),max:String(y)}}function jm(e,t){let r=Number(e);return Number.isFinite(r)?r<Number(t.min)?String(t.min):r>Number(t.max)?String(t.max):String(e):String(t.max)}function _w(e,t,r=ti(e,t)){let n=Ie(t),a=o.energyHistoryPeriodSelection?.[n],i=Im(n,a);return jm(i||r.max,r)}function Fw(e,t){let r=Ie(e),n=[],a=0;if(r==="week"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<6e3;){let l=ae(i);n.push({value:i,label:Om(i),group:l?String(Lm(l.date).year):""}),i=l?String(it(Nr(l.date,-7))):"",a+=1}return n}if(r==="month"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<1200;){let l=Dr(i);if(!l)break;n.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=Nm(i,-1),a+=1}return n}if(r==="year")for(let i=Number(t.max);i>=Number(t.min);i-=1)n.push({value:String(i),label:String(i)});return n}function oi(e,t){let r=Ie(t);if(!Lr(r))return{view:r,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};let n=ti(e,r),a=_w(e,r,n);return{view:r,selectedValue:a,minValue:n.min,maxValue:n.max,canPrevious:Number(a)>Number(n.min),canNext:Number(a)<Number(n.max),isNow:Number(a)===Number(n.max),options:Fw(r,n)}}function Iw(e,t){let r=Ie(t);if(!Lr(r))return{from:"",to:"",hours:"0"};let n=oi(e,r);if(r==="day")return{from:n.selectedValue,to:n.selectedValue,hours:"1"};if(r==="week"){let a=ae(n.selectedValue);if(!a)return{from:"",to:"",hours:"0"};let i=Dn(a.date),l=Nr(i,6);return{from:String(it(i)),to:String(it(l)),hours:"0"}}if(r==="month"){let a=Dr(n.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+Rm(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(r==="year"){let a=Number(n.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function jw(){if(!String(o.energyHistoryRaw||"").trim())return"?meta=1";let e=Ln(),t=Iw(e,o.energyHistoryView||"day"),r=new URLSearchParams;t.from&&r.set("from",t.from),t.to&&r.set("to",t.to),r.set("hours",t.hours);let n=r.toString();return n?`?${n}`:""}om(jw);function On(e,t){let r=Ie(e);if(!Lr(r))return;let n=Ln(),a=ti(n,r),i=Im(r,t),l=jm(i||a.max,a);o.energyHistoryPeriodSelection={...o.energyHistoryPeriodSelection,[r]:l},o.energyHistoryLastFetchAt=0,f(),Hm()}function Tl(e,t){let r=Ie(e);if(!Lr(r))return;let n=Ln(),a=oi(n,r),i=Number(t)<0?-1:1,l=a.selectedValue;if(r==="day"){let c=ae(a.selectedValue);l=c?String(it(Nr(c.date,i))):l}else if(r==="week"){let c=ae(a.selectedValue);l=c?String(it(Nr(c.date,i*7))):l}else r==="month"?l=Nm(a.selectedValue,i):r==="year"&&(l=String(Number(a.selectedValue)+i));On(r,l)}function xl(e){let t=Ie(e);if(!Lr(t))return;let r=Ln(),n=ti(r,t);On(t,n.max)}function Ww(e,t,r=oi(e,t)){let n=Ie(t),a=Ow(e);if(!e.length&&n==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(n==="day"){let c=ae(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let p=Nw(c.key);if(p.length){let h=new Map(p.map(m=>[m.hour,m])),g=[];for(let m=0;m<24;m+=1){let v=String(m),S=`${c.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(m).padStart(2,"0")}:00 - ${String((m+1)%24).padStart(2,"0")}:00`,q=Jo({dateKey:c.key,year:c.year,month:c.month,day:c.day,hour:m,label:v,tooltipLabel:S,sortKey:m,source:"hour"}),C=h.get(m);C&&Zo(q,C),g.push(q)}return{buckets:g,title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}let u=a.get(c.key),d=Cl()||Xa(),b=c.key===d?"Vandaag":Gt(c.key),y=Jo({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:b,sortKey:c.key,source:"day"});return u&&Zo(y,u),{buckets:[y],title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(n==="week"){let c=ae(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let p=Dn(c.date),u=[];for(let d=0;d<7;d+=1){let b=Nr(p,d),y=it(b),h=ae(y),g=Jo({dateKey:y,year:h.year,month:h.month,day:h.day,label:Gt(y,"weekday"),sortKey:y}),m=a.get(y);m&&Zo(g,m),u.push(g)}return{buckets:u,title:"Week",detail:Om(r.selectedValue)}}if(n==="month"){let c=Dr(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let p=Rm(c.year,c.month),u=[];for(let d=1;d<=p;d+=1){let b=Am(c.year,c.month,d),y=it(b),h=Jo({dateKey:y,year:c.year,month:c.month,day:d,label:String(d),sortKey:y}),g=a.get(y);g&&Zo(h,g),u.push(h)}return{buckets:u,title:"Maand",detail:c.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(n==="year"){let c=Number(r.selectedValue);if(!Number.isInteger(c))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let p=[];for(let u=1;u<=12;u+=1){let d=c*1e4+u*100+1,b=Jo({dateKey:d,year:c,month:u,day:1,label:Gt(d,"month"),sortKey:u,source:"month"});e.filter(y=>y.year===c&&y.month===u).forEach(y=>Zo(b,y)),p.push(b)}return{buckets:p,title:"Jaar",detail:String(c)}}let i=new Map;e.forEach(c=>{i.has(c.year)||i.set(c.year,Jo({dateKey:c.year*1e4+101,year:c.year,month:1,day:1,label:String(c.year),sortKey:c.year,source:"year"})),Zo(i.get(c.year),c)});let l=[...i.values()].sort((c,p)=>c.sortKey-p.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function Vw(e){let t=Pr(e,"heatpumpHeatOutputWh"),r=Pr(e,"heatpumpCoolingOutputWh"),n=Pr(e,"boilerHeatOutputWh");return{electricalInputWh:Pr(e,"electricalInputWh"),heatingInputWh:Pr(e,"heatingInputWh"),coolingInputWh:Pr(e,"coolingInputWh"),heatOutputWh:t,coolingOutputWh:r,boilerOutputWh:n,outputWh:t+r+n}}function Bw(e){let t=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),r=Number(e.boilerOutputWh||0),n=t+r;return!Number.isFinite(n)||n<=0?Number.NaN:t/n*100}function Ya(e,t,r=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </div>
    `}function wl(e,t,r){let n=[];r.forEach(i=>{let l=String(i.group||""),c=n[n.length-1];(!c||c.label!==l)&&(c={label:l,options:[]},n.push(c)),c.options.push(i)});let a=n.some(i=>i.label)?n.map(i=>i.label?`
          <optgroup label="${s(i.label)}">
            ${i.options.map(l=>`
              <option value="${s(l.value)}" ${String(l.value)===String(e.selectedValue)?"selected":""}>
                ${s(l.label)}
              </option>
            `).join("")}
          </optgroup>
        `:i.options.map(l=>`
          <option value="${s(l.value)}" ${String(l.value)===String(e.selectedValue)?"selected":""}>
            ${s(l.label)}
          </option>
        `).join("")).join(""):r.map(i=>`
        <option value="${s(i.value)}" ${String(i.value)===String(e.selectedValue)?"selected":""}>
          ${s(i.label)}
        </option>
      `).join("");return`
      <label class="oq-energy-history-period-field">
        <span>${s(t)}</span>
        <select
          class="oq-energy-history-period-input"
          data-oq-energy-history-period-input="${s(e.view)}"
        >
          ${a}
        </select>
      </label>
    `}function Tm(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(yl(e.selectedValue))}"
            min="${s(yl(e.minValue))}"
            max="${s(yl(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?wl(e,"Week",e.options):e.view==="month"?wl(e,"Maand",e.options):e.view==="year"?wl(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function Kw(e){return Lr(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${Tm(e)}
        <div class="oq-energy-history-period-nav" aria-label="Periode navigatie">
          <button
            type="button"
            class="oq-energy-history-period-button"
            data-oq-action="shift-energy-history-period"
            data-energy-history-direction="-1"
            ${e.canPrevious?"":"disabled"}
          >&lt; Vorige</button>
          <button
            type="button"
            class="oq-energy-history-period-button oq-energy-history-period-button--now"
            data-oq-action="select-energy-history-now"
            ${e.isNow?"disabled":""}
          >Nu</button>
          <button
            type="button"
            class="oq-energy-history-period-button"
            data-oq-action="shift-energy-history-period"
            data-energy-history-direction="1"
            ${e.canNext?"":"disabled"}
          >Volgende &gt;</button>
        </div>
      </div>
    `:`
        <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
          ${Tm(e)}
        </div>
      `}function zw(){let e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function Uw(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${Mm.map(t=>{let r=t.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${r?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(t.id)}"
              aria-selected="${r?"true":"false"}"
            >${s(t.label)}</button>
          `}).join("")}
      </div>
    `}function Gw(e){let t=Number(e.electricalInputWh||0),r=Number(e.heatOutputWh||0),n=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,t+r+n+a),c=u=>`${Math.max(0,Number(u||0)/l*100).toFixed(2)}%`,p=Bw(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${c(t)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${c(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${c(n)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${c(a)}"></span>
          <strong>${Number.isFinite(p)?`${Math.round(p)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(at(r,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(at(t,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(at(n,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(at(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function Qw(e){let t=Math.max(1,Number(e||0)/1e3),r=Math.pow(10,Math.floor(Math.log10(t))),n=t/r;return(n<=1.5?1.5:n<=3?3:n<=6?6:10)*r*1e3}function Yw(e){let t=Number(e);return Number.isFinite(t)?t>=999500?`${Number((t/1e6).toFixed(1))}`:`${Number((t/1e3).toFixed(1))}`:""}function Jw(e){return e>=999500?"MWh":"kWh"}function Zw(e){let u=Math.max(1e3,...e.map(Lw)),d=Qw(u),b=e.length?1218/e.length:1218,y=Math.max(6,Math.min(38,b*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:d,barSlot:b,barWidth:y,yOf:g=>26+(1-Math.min(1,Math.max(0,Number(g||0)/d)))*196}}function Xw(e){let t=Ja(e.heatpumpHeatOutputWh,e.heatingInputWh),r=Ja(e.heatpumpCoolingOutputWh,e.coolingInputWh),n=Ja(Fm(e),e.electricalInputWh);return[e.tooltipLabel||e.label||Gt(e.dateKey),`Elektrisch: ${at(e.electricalInputWh,1)}`,`Warmtepomp warmte: ${at(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${at(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel: ${at(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${t}`,`EER koelen: ${r}`,`Output / elektrisch: ${n}`].join(`
`)}function eS(e,t=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;let r=Zw(e),n=Jw(r.axisMax),a=[0,.25,.5,.75,1].map(l=>r.axisMax*l),i=e.map((l,c)=>{let p=r.left+r.barSlot*c+r.barSlot/2,u=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}],d=r.height-r.bottom,b=u.map(m=>{let v=Nn(l,m.key);if(v<=0)return"";let S=v/r.axisMax*r.plotHeight;return d-=S,`
          <rect
            x="${(p-r.barWidth/2).toFixed(1)}"
            y="${d.toFixed(1)}"
            width="${r.barWidth.toFixed(1)}"
            height="${Math.max(1.4,S).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${m.className}"
          >
            <title>${s(`${l.label} \xB7 ${m.label}: ${at(v,1)}`)}</title>
          </rect>
        `}).join(""),h=e.length<=12||c===0||c===e.length-1||c%3===0?`<text x="${p.toFixed(1)}" y="${r.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||Gt(l.dateKey))}</text>`:"",g=Xw(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(g)}" tabindex="0">
          <title>${s(g)}</title>
          <rect
            x="${(p-r.barWidth/2-4).toFixed(1)}"
            y="${r.top.toFixed(1)}"
            width="${(r.barWidth+8).toFixed(1)}"
            height="${r.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${b}
        </g>
        ${h}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(Ie(t))}" viewBox="0 0 ${r.width} ${r.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${r.width}" height="${r.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${r.left}" y="18" class="oq-energy-history-axis-unit">${s(n)}</text>
        ${a.map(l=>{let c=r.yOf(l);return`
            <line x1="${r.left}" y1="${c.toFixed(1)}" x2="${r.width-r.right}" y2="${c.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${r.left-10}" y="${c.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(Yw(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function tS(e=null){let t=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[t,"Ketel"]].map(([n,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(n)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function $l(){let e=Ln(),t=Ie(o.energyHistoryView),r=oi(e,t),n=Ww(e,t,r),a=Vw(n.buckets);return{records:e,buckets:n.buckets,viewModel:n,periodControl:r,summary:a,activeView:t}}function Wm(e=$l()){return we({energyHistorySignature:o.energyHistorySignature||"",energyHistoryError:o.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,currentValues:Za.map(t=>e.buckets[e.buckets.length-1]?.[t]??null)})}function Vm(e=$l()){let t=e.summary,r=e.buckets[0]?.dateKey?Gt(e.buckets[0].dateKey):"\u2014",n=e.buckets[e.buckets.length-1]?.dateKey?Gt(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(Wm(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${Uw(e.activeView)}
          ${Kw(e.periodControl)}
        </div>
        ${o.energyHistoryError?`<p class="oq-energy-history-error">${s(o.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${Ya("Gemiddelde COP",Ja(t.heatOutputWh,t.heatingInputWh),`${s(r)} - ${s(n)}`)}
          ${Ya("Elektrisch",at(t.electricalInputWh,1),"verbruikt")}
          ${Ya("Warmtepomp",at(t.heatOutputWh+t.coolingOutputWh,1),"warmte en koeling")}
          ${Ya("Cv-ketel",at(t.boilerOutputWh,1),"thermisch")}
        </div>
        ${Gw(t)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${eS(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${tS(t)}
      </section>
    `}function Ml(e){if(o.appView!=="results"||!o.root)return;let t=e.target.closest?.("[data-oq-energy-history-tip]"),r=t?.closest?.(".oq-energy-history-chart-wrap")||o.root.querySelector(".oq-energy-history-chart-wrap"),n=r?.querySelector(".oq-energy-history-tooltip");if(!t||!r||!n){n&&n.classList.remove("is-visible");return}let a=String(t.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){n.classList.remove("is-visible");return}n.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(u=>`<span>${s(u)}</span>`).join("")}
    `;let i=r.getBoundingClientRect();n.classList.add("is-visible");let l=n.getBoundingClientRect(),c=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),p=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));n.style.transform=`translate(${c.toFixed(0)}px, ${p.toFixed(0)}px)`}function Bm(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${$m()}
        </div>
      </section>
    `}function Km(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${Vm()}
        </div>
      </section>
    `}function oS(){if(!o.root||o.appView!=="energy")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-overview-energy"):null;if(!e||!t)return!1;let r=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==r&&(e.className=r);let n=ql();return nt(t,xm(n),$m(n))}function rS(){if(!o.root||o.appView!=="results")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-energy-history"):null;if(!e||!t)return!1;let r=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==r&&(e.className=r);let n=$l(),a=zw();return(a?!1:nt(t,Wm(n),Vm(n)))||a}gr({patchEnergyDom:oS,patchResultsDom:rS});function Hl(e,t,r="",n=!1){return`
      <div class="oq-settings-storage-summary-metric${n?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<em>${s(r)}</em>`:""}
      </div>
    `}function zm(e){let t=String(e||"").trim(),r=t.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return r?`${r[1]} ${r[1]==="1"?"dag":"dagen"}`:t}function Al(e,t,r,n="",a="",i=""){if(!w(e))return"";let l=!!E(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(r)}</p>
          ${Ks(e,l,n,a)}
        </div>
        ${Vt(e,t,l,c)}
      </article>
    `}function nS(e,t,r,n=""){if(!w(e))return"";let a=o.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(E(e)||"");return i.length?`
      <article class="oq-settings-storage-row oq-settings-storage-row--select" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${n?`<span>${s(n)}</span>`:""}
          </div>
          <p>${s(r)}</p>
        </div>
        <label class="oq-settings-storage-select">
          <select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>
            ${i.map(c=>`<option value="${s(c)}" ${c===l?"selected":""}>${s(Se(c))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function aS(e){return w(e)||!!O[e]&&!o.optionalMissingEntities?.[e]}function Rl(e,t,r,n={}){if(!aS(e))return"";let a=w(e),i=a&&(o.loadingEntities||o.busyAction===e),l=n.disabled===!0||!a,c=n.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(c)}"
        type="button"
        data-oq-action="${s(r)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&n.busyLabel||t)}
      </button>
    `}function iS(){return o.trendHistoryMetadata&&typeof o.trendHistoryMetadata=="object"?o.trendHistoryMetadata:{}}function Or(){return!!o.trendHistoryMetadataSignature}function _r(){return!!(o.energyHistoryRaw||o.energyHistorySignature)}function st(e){return e?"Niet geladen":"Laden..."}function je(e,t="\u2014"){if(w(e))return Te(e);let r=sS(e);return r==null||r===""?t:r}function sS(e){let t=iS();if(e==="trendHistoryFlashAvailable")return Or()?t.available||"Alleen live":st(o.trendHistoryMetadataError);if(e==="trendHistoryFlashOldest")return Or()?t.oldest||"Geen data":st(o.trendHistoryMetadataError);if(e==="trendHistoryFlashNewest")return Or()?t.newest||"Geen data":st(o.trendHistoryMetadataError);if(e==="trendHistoryFlashLastFlush")return Or()?t.lastFlush||"Geen data":st(o.trendHistoryMetadataError);if(e==="trendHistoryFlashSize")return Or()?Pl(t.sizeKb):st(o.trendHistoryMetadataError);if(e==="trendHistoryFlashWrites")return Or()?Dl(t.writes):st(o.trendHistoryMetadataError);let r=Qm(),a=String(o.energyHistoryRaw||"").includes("@day_retention|");return e==="lifetimeEnergyHistoryAvailable"?_r()?a&&!r.dayPartitionAvailable?"Niet beschikbaar":Um(r.storedDayCount,"Geen data"):st(o.energyHistoryError):e==="lifetimeEnergyHistoryOldest"?_r()?ri(r.oldestDateKey):st(o.energyHistoryError):e==="lifetimeEnergyHistoryNewest"?_r()?ri(r.newestDateKey):st(o.energyHistoryError):e==="lifetimeEnergyHistoryLastWrite"?_r()?Gm(r.dayLastWriteTimestampS):st(o.energyHistoryError):e==="lifetimeEnergyHistorySize"?_r()?Pl(r.dayStorageKb):st(o.energyHistoryError):e==="lifetimeEnergyHistoryWrites"?_r()?Dl(r.dayWriteCount):st(o.energyHistoryError):null}function Um(e,t="Geen data"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:`${Math.round(r)} ${Math.round(r)===1?"dag":"dagen"}`}function Pl(e,t="\u2014"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:`${Math.round(r)} kB`}function Dl(e,t="0"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:String(Math.round(r))}function ri(e){let t=typeof ae=="function"?ae(e):null;return t?t.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function Gm(e,t="Geen data"){let r=Number(e);if(!Number.isFinite(r)||r<=0)return t;let n=new Date(r*1e3),a=n.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function Qm(){return typeof Pn!="function"?{}:Pn()}function lS(e){let t=Array.isArray(e.items)?e.items:[];return`
      <article class="oq-settings-storage-technical-row">
        <div class="oq-settings-storage-technical-row-head">
          <span>${s(e.meta||"")}</span>
          <strong>${s(e.title)}</strong>
          ${e.note?`<em>${s(e.note)}</em>`:""}
        </div>
        <div class="oq-settings-storage-technical-metrics">
          ${t.map(r=>`
            <div>
              <span>${s(r.label)}</span>
              <strong>${s(r.value)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `}function cS(e){let t=e.filter(Boolean);return t.length?`
      <details class="oq-settings-storage-technical"${o.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Diagnose, dagtotalen en uurdetail</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(t.map(r=>`${r.shortLabel}: ${r.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${t.map(lS).join("")}
        </div>
      </details>
    `:""}function Ym(){if(!w("trendHistoryEnabled")&&!w("lifetimeEnergyHistoryEnabled"))return"";let e=T("trendHistoryEnabled"),t=e&&T("trendHistoryFlashEnabled"),r=w("lifetimeEnergyHistoryEnabled"),n=r&&T("lifetimeEnergyHistoryEnabled"),a=t?je("trendHistoryFlashAvailable","Alleen live"):"Alleen live",i=r?zm(je("lifetimeEnergyHistoryAvailable","Geen data")):"Geen data";return oe("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${w("trendHistoryEnabled")?Hl("Live diagnose",e?"Aan":"Uit","Live",e):""}
            ${w("trendHistoryFlashEnabled")?Hl("Diagnosehistorie",a,t?"Permanent geheugen":"Uit",t):""}
            ${r?Hl("Energiehistorie",i,n?"Permanent geheugen":"Uit",n):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function uS(){if(!w("lifetimeEnergyHistoryEnabled"))return"";let e=o.energyHistoryImportRecords.length,t=new Set(o.energyHistoryImportHourRecords.map(c=>c.dateKey)).size,r=[];e>0&&r.push(`${e} dagrecords`),t>0&&r.push(`${t} uurdagen`),o.energyHistoryImportRange&&r.push(o.energyHistoryImportRange),o.energyHistoryImportSource&&r.push(o.energyHistoryImportSource),o.energyHistoryImportInvalidCount>0&&r.push(`${o.energyHistoryImportInvalidCount} regels niet gebruikt`);let n=!!o.energyHistoryImportFileName,a=e>0||t>0,i=Number(o.energyHistoryImportProgressPercent||0),l=o.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
      <div class="oq-settings-storage-import">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie importeren</h4>
            <p>Vul ontbrekende dagtotalen en uurdetail aan vanuit een OpenQuatt- of Quatt-exportbestand.</p>
          </div>
          ${n?"":`
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-energy-history-import-file">
              Bestand kiezen
            </button>
          `}
        </div>
        ${n?`
          <div class="oq-settings-storage-import-card">
            <div class="oq-settings-storage-import-file">
              <strong>${s(o.energyHistoryImportFileName)}</strong>
              ${r.length?`<p>${s(r.join(" \xB7 "))}</p>`:""}
              ${o.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryImportNotice)}</p>`:""}
              ${o.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryImportError)}</p>`:""}
            </div>
            <div class="oq-settings-storage-import-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-energy-history-import-file" ${o.energyHistoryImportBusy?"disabled":""}>
                Wissen
              </button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="import-energy-history-file" ${o.energyHistoryImportBusy||!a?"disabled":""}>
                ${s(l)}
              </button>
            </div>
          </div>
        `:`
          ${o.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryImportNotice)}</p>`:""}
          ${o.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryImportError)}</p>`:""}
        `}
      </div>
    `}function dS(){if(!w("lifetimeEnergyHistoryEnabled"))return"";let e=Ar(o.energyHistoryExportMode),t=An.map(n=>`
      <option value="${s(n.id)}" ${n.id===e?"selected":""}>
        ${s(n.label)}
      </option>
    `).join(""),r=o.energyHistoryExportBusy?"Exporteren...":"Exporteren";return`
      <div class="oq-settings-storage-import oq-settings-storage-export">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie exporteren</h4>
            <p>Download bewaarde energiegegevens om ze later op een andere OpenQuatt te importeren.</p>
          </div>
          <div class="oq-settings-storage-export-controls">
            <select class="oq-helper-select oq-settings-storage-export-select" data-oq-energy-history-export-mode="true" ${o.energyHistoryExportBusy?"disabled":""}>
              ${t}
            </select>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="export-energy-history" ${o.energyHistoryExportBusy?"disabled":""}>
              ${s(r)}
            </button>
          </div>
        </div>
        ${o.energyHistoryExportNotice?`<p class="oq-settings-storage-import-notice">${s(o.energyHistoryExportNotice)}</p>`:""}
        ${o.energyHistoryExportError?`<p class="oq-settings-storage-import-error">${s(o.energyHistoryExportError)}</p>`:""}
      </div>
    `}function Jm(){let e=w("trendHistoryEnabled")&&T("trendHistoryEnabled"),t=e&&w("trendHistoryFlashEnabled")&&T("trendHistoryFlashEnabled"),r=w("lifetimeEnergyHistoryEnabled"),n=r&&T("lifetimeEnergyHistoryEnabled"),a=r?je("lifetimeEnergyHistoryAvailable","Geen data"):"Geen data",i=w("lifetimeEnergyHistoryClear")&&a!=="Geen data"&&a!=="\u2014",l=zm(a),c=e&&w("trendHistoryFlush"),p=w("lifetimeEnergyHistoryCapture"),u=Qm(),d=String(o.energyHistoryRaw||"").includes("@hour_retention|"),b=d&&!u.hourPartitionAvailable,y=d?b?"Alleen live":Um(u.hourStoredDayCount,"Geen uurdata"):"Laden...",h=d?b?"Niet beschikbaar":Pl(u.hourStorageKb):"Laden...",g=d?b?"Niet beschikbaar":Dl(u.hourWriteCount):"Laden...",m=d?b?"Niet beschikbaar":Gm(u.hourLastWriteTimestampS):"Laden...",v=ri(u.hourOldestDateKey),S=ri(u.hourNewestDateKey),q=d?u.hourPartitionAvailable?`${v} t/m ${S}`:"Live beschikbaar; bewaren in Flash vraagt een nieuwere Flash-indeling.":"Uurdetailstatus wordt opgehaald.",C=[{title:"Diagnosegeschiedenis",meta:"Diagnose",shortLabel:"Diagnose",primary:je("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${je("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:je("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:je("trendHistoryFlashSize")},{label:"Opslagacties",value:je("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:je("trendHistoryFlashLastFlush","Geen data")}]},{title:"Dagtotalen",meta:"Resultaten",shortLabel:"Dag",primary:l,note:`${je("lifetimeEnergyHistoryOldest","Geen data")} t/m ${je("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:l},{label:"Opslagruimte",value:je("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:je("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:je("lifetimeEnergyHistoryLastWrite","Geen data")}]},w("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Resultaten",shortLabel:"Uur",primary:y,note:q,items:[{label:"Dagen bewaard",value:y},{label:"Opslagruimte",value:h},{label:"Opslagacties",value:g},{label:"Laatst opgeslagen",value:m}]}:null];return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-settings-storage-modal" data-oq-history-storage-scroller role="dialog" aria-modal="true" aria-labelledby="oq-history-storage-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Gegevens</p>
              <h2 class="oq-helper-modal-title" id="oq-history-storage-modal-title">Gegevens bewaren</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit gegevens bewaren">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen. Dit scherm verandert niets aan de werking of aansturing van je warmtepomp.</p>
          <div class="oq-settings-storage-domain-grid">
            <section class="oq-settings-storage-domain oq-settings-storage-domain--trend">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Diagnose</p>
                <h3>Diagnosegegevens</h3>
                <p>Technische metingen zoals temperatuur, doorstroming en vermogen. Deze gegevens zijn vooral bedoeld voor diagnosegrafieken en hulp bij problemen.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${Al("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Na een herstart of update zijn deze tijdelijke gegevens niet meer beschikbaar.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
                ${Al("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat deze gegevens ongeveer elk uur op.","Alleen recente diagnosegegevens; bestaande geschiedenis blijft staan.","Permanent geheugen")}
                ${c?`
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Diagnose nu opslaan</h4>
                      <p>Sla de huidige diagnosegegevens direct op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    ${Rl("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!t,busyLabel:"Opslaan..."})}
                  </div>
                `:""}
              </div>
            </section>
            <section class="oq-settings-storage-domain oq-settings-storage-domain--energy">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Resultaten</p>
                <h3>Energiehistorie</h3>
                <p>Dagtotalen voor de Resultatenpagina, zoals opbrengst, verbruik, rendement en besparing. Hiermee kun je prestaties over langere tijd terugkijken.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${Al("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Zo blijven je resultaten ook na een herstart of update beschikbaar. OpenQuatt slaat dit op aan het einde van de dag en bij een normale afsluiting.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Permanent geheugen")}
                ${nS("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur mag bewaren voor de daggrafiek.","Geavanceerd")}
                ${p?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Vandaag alvast opslaan</h4>
                      <p>Sla de gegevens van vandaag nu op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${Rl("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!n,busyLabel:"Opslaan..."})}
                    </div>
                  </div>
                `:""}
                ${dS()}
                ${uS()}
                ${w("lifetimeEnergyHistoryClear")?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle bewaarde dagtotalen. Je begint daarna opnieuw met het opbouwen van je energiehistorie.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${Rl("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!i,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}
                    </div>
                  </div>
                `:""}
              </div>
            </section>
          </div>
          ${cS(C)}
          <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> OpenQuatt schrijft deze gegevens niet continu weg, maar alleen op vaste momenten. Zo blijft duidelijk wat er wordt bewaard en hoeveel geheugen daarvoor wordt gebruikt.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function Zm(){let e=o.settingsBackupBusy,t=Xt.length,r=Zt.length;return oe("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${s(String(t))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${s(String(r))}</strong>
            </div>
          </div>
          <div class="oq-settings-backup-actions">
            <button
              class="oq-helper-button oq-helper-button--primary"
              type="button"
              data-oq-action="download-settings-backup"
              ${e?"disabled":""}
            >
              ${e?"Bezig...":"Backup downloaden"}
            </button>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-settings-backup-import"
              ${e?"disabled":""}
            >
              Backup herstellen
            </button>
          </div>
          <p class="oq-settings-action-note">Ontbrekende velden houden hun firmware-default. Onbekende velden uit een backup worden overgeslagen.</p>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
        </div>
      `)}function Xm(){let e=o.settingsBackupBusy;return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-backup-import-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Beheer</p>
              <h2 class="oq-helper-modal-title" id="oq-backup-import-modal-title">Backup herstellen</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit backup import popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Kies een JSON-backup om de instellingen te vergelijken en daarna gericht terug te zetten.</p>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Backupbestand</span>
            <input
              class="oq-settings-backup-input oq-settings-backup-import-input"
              type="file"
              accept=".json,application/json"
              data-oq-backup-file-input="true"
              ${e?"disabled":""}
            >
            <span class="oq-helper-modal-subvalue">Na selectie openen we automatisch het vergelijkingsoverzicht.</span>
          </div>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
          </div>
        </section>
      </div>
    `}function eg(){let e=o.settingsBackupDraft;if(!e)return"";let t=e.summary||bl(e),r=String(e.source?.installation||e.source?.device||"Onbekend"),n=ft(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",c=le(),p=typeof te=="function"?te():"",u=l!=="Onbekend"&&p&&l!==p,d=r!=="Onbekend"&&r!==n,b=u||d?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":t.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-backup-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Beheer</p>
              <h2 class="oq-helper-modal-title" id="oq-backup-modal-title">Backup herstellen</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit backup-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">Deze backup zet alleen de instellingen terug die OpenQuatt in de web-app beheert. Klap een sectie open om backup- en huidige waarden naast elkaar te vergelijken.</p>
          <div class="oq-helper-modal-grid oq-settings-backup-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backup van</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(l)} \xB7 Firmware: ${s(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${s(n)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(p)} \xB7 Firmware: ${s(c||"Onbekend")}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupkanaal</span>
              <strong class="oq-helper-modal-value">${s(i)}</strong>
              <span class="oq-helper-modal-subvalue">Schema v${s(String(e.schema_version||1))}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupinstellingen</span>
              <strong class="oq-helper-modal-value">${s(`${t.total} instellingen`)}</strong>
              <span class="oq-helper-modal-subvalue">${s(t.differenceCount?`${t.differenceCount} ${t.differenceCount===1?"verschil":"verschillen"} \xB7 ${t.currentPresent} op huidige installatie \xB7 ${t.unknown} onbekend`:`Alles komt overeen \xB7 ${t.currentPresent} op huidige installatie \xB7 ${t.unknown} onbekend`)}</span>
            </div>
          </div>
          <div class="oq-settings-backup-modal-sections">
            ${t.sectionSummaries.map(y=>`
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${s(y.label)}</strong>
                    <em>${s(`${y.total} ${y.total===1?"instelling":"instellingen"} \xB7 ${y.differenceCount?`${y.differenceCount} ${y.differenceCount===1?"verschil":"verschillen"}`:"Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${s(y.differenceCount?`${y.differenceCount} instelling${y.differenceCount===1?"":"en"} wijkt af of ontbreekt.`:"Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${y.rows.map(h=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(h.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(h.label)}</strong>
                          <span>${s(h.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(h.status)}">
                            <span>Backup</span>
                            <strong>${s(h.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(h.status)}">
                            <span>Nu</span>
                            <strong>${s(h.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${t.unknown||t.requiredMissing||d?" oq-settings-action-note--warning":""}">${s(b)}</p>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${o.settingsBackupBusy?"disabled":""}>${o.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function ni(){return[o.interfacePanelOpen?"open":"closed",o.nativeOpen?"native":"app",o.appView,o.complete?"complete":"incomplete",o.overviewTheme,o.hpVisualMode,K("installationTopology"),K("hardwareProfileText"),K("connectionText"),o.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",o.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",o.firmwareTopologySwitchOpen?"topology-open":"topology-closed",o.updateManualUploadOpen?"upload-open":"upload-closed",o.updateTestFirmwareOpen?"test-open":"test-closed",o.updateTestFirmwareError,K("hpGeneration"),K("projectVersionText"),K("releaseChannelText"),Nl()].join("|")}function Nl(){let e=Math.max(Number(o.lastEntityResponseAt||0),Number(o.lastEntitySyncAt||0)),t=Number(o.deviceReconnectStartedAt||0);return o.entitySyncFailureCount>0&&!o.deviceReconnectMode?"Bezig":e>0&&(!o.deviceReconnectMode||e>=t)?"Verbonden":o.deviceReconnectMode?to()?"Verbonden":o.deviceReconnectMode==="reconnect"?"Offline":"Bezig":w("status")&&!T("status")?"Offline":"Bezig"}function Ll(){return String(E("projectVersionText")||"").trim()||"\u2014"}function pS(){let e=Ll();return e&&e!=="\u2014"?e:mo()}function ai(){let e=o.entities.espInternalTemp;if(!e)return"\u2014";let t=R("espInternalTemp");return Number.isNaN(t)?F("espInternalTemp"):B(t,1,e.uom||" \xB0C")}function mS(){let e=[["Netwerkstatus",Nl()],["IP-adres",br()]],t=String(E("wifiSsid")||"").trim();t&&e.push(["WiFi SSID",t]);let r=o.entities.wifiSignal;if(r){let n=R("wifiSignal");Number.isNaN(n)||e.push(["WiFi signaal",B(n,0,r.uom||" dBm")])}return e}function tg(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function og(){return[["installation","Installatie",ft()],["uptime","Uptime",hr()],["connectivity","Connectiviteit",Nl()],["time","Tijd",Bs()],["version","Versie",pS(),!!he()],["debugRecording","Debugopname",Tp(),!0],["webserverLog","Logboek",Ma(),!0]]}function rg(){return Ko()}function ng(e){return e==="version"&&rg()}function _n(){return`
      <div class="oq-helper-status-grid">
        ${og().map(([t,r,n,a])=>{let i=tg(t),l=!!(a||i),c=ng(t);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${c?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${s(t)}"
            ${l?`type="button" data-oq-action="${s(i)}"`:""}
          >
            <span class="oq-helper-status-label">${s(r)}</span>
            <strong class="oq-helper-status-value">${c?`<span class="oq-helper-status-value-text">${s(n)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(n)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function gS(){if(!o.root)return!1;let e=o.root.querySelector(".oq-helper-status-grid");if(!e)return!!o.root.querySelector(".oq-helper-hub");let t=og();if(e.querySelectorAll("[data-oq-header-status]").length!==t.length)return e.outerHTML=_n(),!0;for(let[n,a,i,l]of t){let c=e.querySelector(`[data-oq-header-status="${n}"]`);if(!c)return e.outerHTML=_n(),!0;let p=tg(n),u=!!(l||p);if(c.tagName.toLowerCase()!==(u?"button":"div"))return e.outerHTML=_n(),!0;let d=c.querySelector(".oq-helper-status-label"),b=c.querySelector(".oq-helper-status-value");if(!d||!b)return e.outerHTML=_n(),!0;d.textContent!==a&&(d.textContent=a);let y=ng(n),h=y?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);b.innerHTML!==h&&(b.innerHTML=h),u?c.setAttribute("data-oq-action",p):c.removeAttribute("data-oq-action"),c.classList.toggle("oq-helper-status-item--button",u),c.classList.toggle("oq-helper-status-item--attention",y)}return!0}function fS(){let e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function Ol(){let e=fS();return e?o.devPanelOpen?`
      <aside class="oq-helper-devdock" aria-label="Preview en test">
        <div class="oq-helper-devdock-head">
          <div>
            <p class="oq-helper-devdock-kicker">Preview en test</p>
            <h2 class="oq-helper-devdock-title">Mockbediening</h2>
          </div>
          <button
            class="oq-helper-devdock-toggle oq-helper-devdock-toggle--close"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="true"
            aria-label="Sluit previewpaneel"
          >\xD7</button>
        </div>
        ${e}
      </aside>
    `:`
        <aside class="oq-helper-devdock oq-helper-devdock--collapsed" aria-label="Preview en test">
          <button
            class="oq-helper-devdock-toggle"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="false"
            aria-label="Open previewpaneel"
          >Preview</button>
        </aside>
      `:""}function ag(){let e=o.nativeOpen?"native":"app",t=rg();return o.interfacePanelOpen?`
      <aside class="oq-helper-hub" aria-label="Weergave en systeem">
        <div class="oq-helper-hub-head">
          <h2 class="oq-helper-hub-title">Weergave en systeem</h2>
          <div class="oq-helper-hub-head-actions">
            <button
              class="oq-helper-hub-toggle oq-helper-hub-toggle--close"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="true"
              aria-label="Sluit interfacepaneel"
              title="Sluit interfacepaneel"
            >\xD7</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Weergave</p>
          <div class="oq-helper-hub-switches">
            <button class="oq-helper-hub-chip${e==="app"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
            <button class="oq-helper-hub-chip${e==="native"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Uiterlijk en overzicht</p>
          <div class="oq-helper-hub-actions">
            <button class="oq-helper-button oq-helper-button--ghost oq-helper-hub-action" type="button" data-oq-action="toggle-overview-theme">
              ${o.overviewTheme==="light"?"Donkere modus":"Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${_n()}
          <div class="oq-helper-hub-actions oq-helper-hub-actions--single">
            <button class="oq-helper-hub-action oq-helper-hub-action--warning" type="button" data-oq-action="open-restart-confirm">
              Herstart OpenQuatt
            </button>
          </div>
        </div>
      </aside>
    `:`
        <aside class="oq-helper-hub oq-helper-hub--collapsed" aria-label="Weergave en systeem">
          <div class="oq-helper-hub-head-actions">
            ${il()}
            <button
              class="oq-helper-hub-toggle${t?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${$e("more-horizontal","oq-helper-hub-toggle-icon")}${t?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function ig(){let e=o.nativeOpen?"native":"app",t=o.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",r=o.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(o.controlError)}</p>`:"";return`
      <div class="oq-helper-shell oq-native-surface-shell">
        <div class="oq-helper-card oq-native-surface-card">
          <div class="oq-native-surface-head">
            <div class="oq-native-surface-copy">
              <p class="oq-helper-kicker">Weergave</p>
              <h1>ESPHome fallback actief</h1>
              <p>${s(t)}</p>
            </div>
            <div class="oq-native-surface-controls">
              <div class="oq-helper-hub-switches">
                <button class="oq-helper-hub-chip${e==="app"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
                <button class="oq-helper-hub-chip${e==="native"?" is-active":""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
              </div>
            </div>
          </div>
          <p class="oq-native-surface-note">Schakel terug naar OpenQuatt-app om tuning, live overzicht en instellingen weer te activeren.</p>
          ${r}
        </div>
      </div>
    `}nd({getSignature:ni,patch:gS});function sg(){if(o.systemModal==="login")return Gp();if(o.systemModal==="api-security")return Up();if(o.systemModal==="mqtt")return yd();if(o.systemModal==="mqtt-sensors")return wd();if(o.systemModal==="connectivity"){let e=mS();return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-system-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-system-modal-title">Connectiviteit</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit systeem-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">Status en details van de actieve netwerkverbinding van OpenQuatt.</p>
            <div class="oq-helper-modal-grid">
              ${e.map(([t,r])=>`
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${s(t)}</span>
                  <strong class="oq-helper-modal-value">${s(r)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(o.systemModal==="settings-backup-restore")return eg();if(o.systemModal==="settings-backup-import")return Xm();if(o.systemModal==="history-storage")return Jm();if(String(o.systemModal||"").startsWith("service-task-"))return Xp();if(o.systemModal==="settings-backup-success"){let e=o.controlNotice||"Backup hersteld.";return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-backup-success-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Beheer</p>
                <h2 class="oq-helper-modal-title" id="oq-backup-success-modal-title">Backup hersteld</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit bevestiging">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">${s(e)}</p>
            <p class="oq-helper-modal-copy">Je kunt nu terug naar het overzicht of OpenQuatt gewoon verder gebruiken.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(o.systemModal==="restart-confirm"){let e=o.busyAction==="restartAction";return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-restart-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-restart-modal-title">OpenQuatt herstarten?</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit herstart-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">De webinterface en regeling zijn tijdens de herstart kort niet bereikbaar. Daarna komt OpenQuatt vanzelf terug.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-restart" ${e?"disabled":""}>${e?"Herstarten...":"Herstarten"}</button>
            </div>
          </section>
        </div>
      `}if(o.systemModal==="silent-settings")return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-silent-settings-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Stille uren</p>
                <h2 class="oq-helper-modal-title" id="oq-silent-settings-modal-title">Stille uren instellen</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit stille-uren-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen. Wijzigingen worden direct toegepast.</p>
            <div class="oq-helper-modal-body">
              ${tm()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(o.systemModal==="webserver-logs")return pp();if(o.systemModal==="debug-recording")return _p();if(o.systemModal==="openquatt-pause"){let e=T("openquattEnabled"),t=o.busyAction==="openquatt-regulation",r=w("openquattResumeAt"),n=o.loadingEntities||o.entitySyncInFlight,a=r||!n,i=tn(),l=ur(E("openquattResumeAt")),c=pa();return`
        <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-openquatt-pause-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Bediening</p>
                <h2 class="oq-helper-modal-title" id="oq-openquatt-pause-modal-title">Openquatt regeling</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit regeling-popup">\xD7</button>
            </div>
            <p class="oq-helper-modal-copy">${e?"Kies hoe lang de regeling uit moet blijven. Verwarmen en koelen stoppen dan, maar beveiligingen blijven actief.":"De regeling staat nu tijdelijk uit. Je kunt meteen weer inschakelen of een nieuw hervatmoment plannen."}</p>
            ${i?`<div class="oq-helper-modal-success oq-helper-modal-success--compact">
                  <strong>Hervat nu automatisch</strong>
                  <span>${s(l)}</span>
                </div>`:""}
            ${a?r?`
                <div class="oq-helper-modal-presets">
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="2h" ${t?"disabled":""}>2 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="8h" ${t?"disabled":""}>8 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="tomorrow-morning" ${t?"disabled":""}>Tot morgenochtend</button>
                </div>
                <div class="oq-helper-modal-channel oq-helper-modal-channel--datetime">
                  <span class="oq-helper-modal-label">Hervatten op</span>
                  <div class="oq-helper-modal-inline">
                    <label class="oq-settings-control oq-settings-control--datetime">
                      <input
                        class="oq-helper-input"
                        type="datetime-local"
                        step="60"
                        lang="nl-NL"
                        data-oq-field="openquattPauseDraft"
                        data-oq-pause-draft="resume"
                        value="${s(c)}"
                        ${t?"disabled":""}
                      >
                      <span class="oq-settings-time-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" focusable="false">
                          <rect x="3.2" y="4.2" width="13.6" height="12.6" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.5" />
                          <path d="M6.2 2.9V5.4M13.8 2.9V5.4M3.8 8.1H16.2M10 10.3V13.1L12.3 14.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </label>
                    <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-openquatt-custom-pause" ${t?"disabled":""}>Plan moment</button>
                  </div>
                </div>
              `:'<p class="oq-helper-modal-note">Automatisch hervatten is nog niet beschikbaar op deze firmware. Je kunt de regeling wel zonder eindtijd uitschakelen.</p>':'<p class="oq-helper-modal-note" aria-live="polite">Hervatopties laden...</p>'}
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t?"disabled":""}>Annuleren</button>
              ${e?"":`<button class="oq-helper-button" type="button" data-oq-action="enable-openquatt-now" ${t?"disabled":""}>Nu inschakelen</button>`}
              <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-indefinite" ${t?"disabled":""}>${e?"Zonder eindtijd uitschakelen":"Zonder eindtijd"}</button>
            </div>
          </section>
        </div>
      `}return""}function hS(e=!1){let t=ma();return t?`
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${e?" oq-curve-fallback-suggest--helper":""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${s(t.label)}</strong>
          <span>${s(t.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${o.loadingEntities||o.busyAction==="save-curveFallbackSupply"||t.isCurrent?"disabled":""}
        >
          ${t.isCurrent?"Actief":"Gebruik suggestie"}
        </button>
      </div>
    `:""}function _l(){return`
      <div class="oq-settings-curve-grid">
        ${ge.map(e=>se(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${se("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:hS()})}
      </div>
    `}function Fl(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${uo("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function Il(e="oq-settings-grid"){let t=[se("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),se("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${uo("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${yu()?se("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):t}
      </div>
    `}function bS(e="oq-settings-grid"){let t=[se("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),se("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return t.length?`
      <div class="${s(e)}">
        ${t.join("")}
      </div>
    `:""}function jl(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${se("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${se("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${vS()}
      </div>
    `}function Wl(){let e=ne();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(ta)}"
          aria-pressed="${e?"false":"true"}"
          ${o.loadingEntities||o.busyAction==="save-strategy"?"disabled":""}
        >
          <p class="oq-helper-label">Power House</p>
          <h4>Automatisch op basis van je woning</h4>
          <p>Power House schat hoeveel warmte je woning nodig heeft. Dit is meestal de beste keuze als je zonder veel finetuning wilt starten.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt vooral het geschatte warmteverlies van je woning en de buitentemperatuur waarbij verwarmen meestal niet meer nodig is.</li>
            <li>Reageert meer op het gedrag van je woning dan op een vaste temperatuurcurve.</li>
            <li>Handig als je vooral comfort wilt en zo min mogelijk handmatig wilt instellen.</li>
          </ul>
        </button>
        <button
          class="oq-settings-strategy-card${e?" is-active":""}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(oa)}"
          aria-pressed="${e?"true":"false"}"
          ${o.loadingEntities||o.busyAction==="save-strategy"?"disabled":""}
        >
          <p class="oq-helper-label">Stooklijn</p>
          <h4>Regelen met een stooklijn</h4>
          <p>Met een stooklijn kies je per buitentemperatuur welke aanvoertemperatuur nodig is. Handig als je dit bewust zelf wilt instellen.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt de curvepunten van <strong>-20\xB0C t/m 15\xB0C</strong> als basis.</li>
            <li>Voelt herkenbaar voor wie gewend is aan een klassieke stooklijn.</li>
            <li>Handig als je de aanvoertemperatuur per buitentemperatuur zelf wilt finetunen.</li>
          </ul>
        </button>
      </div>
    `}function vS(){if(!w("phResponseProfile"))return"";let e=String(E("phResponseProfile")||""),t=o.loadingEntities||o.busyAction==="save-phResponseProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{let i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${zs("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${zs("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:vr({key:"phResponseProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return pe("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",n,"oq-settings-field--span-2")}function Vl(){if(!w("curveControlProfile"))return"";let e=String(E("curveControlProfile")||""),t=o.loadingEntities||o.busyAction==="save-curveControlProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>vr({key:"curveControlProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return pe("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",n,"oq-settings-field--span-2")}function yS(){let e=(P,Z=0)=>{let _=R(P);return Number.isNaN(_)?Z:Math.max(0,_)},r=e("phComfortBelow",.1),n=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-r,l=20+n,c=620,p=184,u=46,d=24,b=18,y=40,h=96,g=c-u-d,m=Math.min(20-1.2,i-.35),v=Math.max(20+1.2,l+.35),S=P=>u+(P-m)/Math.max(.01,v-m)*g,q=S(m),C=S(v),k=S(i),$=S(20),D=S(l),N=Math.abs(i-20)>.001,z=Math.abs(l-20)>.001,H=b+24,U=p-y,A=h-44,I=(P,Z,_,j="")=>{let yt=Math.max(q+4,Math.min(C-110-4,P-55)),ct=P-14,Dt=A,Ue=28,Re=h-A+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${Z} ${_}`)}">
          <rect class="oq-ph-concept-hit" x="${ct}" y="${Dt}" width="${Ue}" height="${Re}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${P}" cy="${h}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${j?` oq-ph-concept-tooltip--${j}`:""}" transform="translate(${yt} ${A})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(Z)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(_)}</text>
          </g>
        </g>
      `},L=[`M ${q.toFixed(1)} ${H.toFixed(1)}`,`L ${k.toFixed(1)} ${h.toFixed(1)}`,`L ${D.toFixed(1)} ${h.toFixed(1)}`,`L ${C.toFixed(1)} ${U.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(B(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(B(i,1,"\xB0C"))} \u2013 ${s(B(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(B(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${c} ${p}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${q.toFixed(1)}" y="${b}" width="${Math.max(20,k-q).toFixed(1)}" height="${(p-b-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${k.toFixed(1)}" y="${b}" width="${Math.max(20,D-k).toFixed(1)}" height="${(p-b-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${D.toFixed(1)}" y="${b}" width="${Math.max(20,C-D).toFixed(1)}" height="${(p-b-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${q}" y1="${b}" x2="${q}" y2="${p-y}" class="oq-ph-concept-axis"></line>
            <line x1="${q}" y1="${h}" x2="${C}" y2="${h}" class="oq-ph-concept-axis"></line>
            <line x1="${$}" y1="${b}" x2="${$}" y2="${p-y}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${L}" class="oq-ph-concept-curve"></path>

            ${N?`<line x1="${k}" y1="${h-12}" x2="${k}" y2="${h+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${$}" y1="${h-14}" x2="${$}" y2="${h+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${z?`<line x1="${D}" y1="${h-12}" x2="${D}" y2="${h+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${N?`<circle cx="${k}" cy="${h}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${$}" cy="${h}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${z?`<circle cx="${D}" cy="${h}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${N?I(k,"Comfort onder setpoint",B(i,1,"\xB0C"),"below"):""}
            ${I($,"Setpoint",B(20,1,"\xB0C"),"setpoint")}
            ${z?I(D,"Comfort boven setpoint",B(l,1,"\xB0C"),"above"):""}

            <text x="${q+8}" y="${b+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${q+8}" y="${p-y-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${q}" y="${p-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${C}" y="${p-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${N?`<text x="${k-5}" y="${p-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(B(i,1,"\xB0C"))}</text>`:""}
            <text x="${$}" y="${p-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(B(20,1,"\xB0C"))}</text>
            ${z?`<text x="${D+5}" y="${p-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(B(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(B(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(B(i,1,"\xB0C"))} \u2013 ${s(B(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(B(l,1,"\xB0C"))}</span>
          </span>
        </div>
        <div class="oq-ph-concept-notes">
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfort onder</span>
            <p>Bepaalt wanneer extra opwarming begint onder het setpoint.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfortband</span>
            <p>Binnen deze band blijft de directe temperatuurreactie vlak. Een opgebouwde comfort memory kan hier nog wel even doorwerken en loopt daarna rustig af.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Temperatuurreactie</span>
            <p>Bepaalt hoe sterk Power House buiten de comfortband extra of minder warmtevraag als kamercorrectie toevoegt boven op de berekende huisvraag.</p>
          </article>
        </div>
      </div>
    `}function Bl(){let e=[se("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),se("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),se("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${yS()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function Kl(e,t,r){let n=[uo(t,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),uo(r,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return n?`
      <article class="oq-settings-hp-group">
        <header>
          <p class="oq-helper-label">Warmtepomp</p>
          <h4>${s(e)}</h4>
          <p>Stel hier de standen in die OpenQuatt niet hoeft te gebruiken.</p>
        </header>
        <div class="oq-settings-hp-group-grid">
          ${n}
        </div>
      </article>
    `:""}function lg(){let e=bS();return oe("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${Il()}
        ${e?`
          <div class="oq-settings-subpanel oq-settings-subpanel--nested">
            <div class="oq-settings-subpanel-head">
              <p class="oq-helper-label">Flow afstelling</p>
              <h4>Flow Kp en Ki</h4>
              <p>Deze waarden bepalen hoe stevig de flowregeling corrigeert op afwijkingen. Autotune vult hier later een voorstel voor in.</p>
            </div>
            ${e}
          </div>
        `:""}
      `)}function cg(){let e=ne()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${Vl()}
          </div>
          <div class="oq-settings-curve-shell">
            ${zl()}
          </div>
          ${_l()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${jl()}
          ${Bl()}
        </div>
      `;return oe("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${Fl()}
        ${Wl()}
        ${e}
      `)}function zl(){let r={top:22,right:18,bottom:38,left:34},n=560-r.left-r.right,a=240-r.top-r.bottom,i=ge[0].outdoor,l=ge[ge.length-1].outdoor,c=h=>r.left+(h-i)/(l-i)*n,p=h=>r.top+(70-h)/50*a,u=[20,30,40,50,60,70].map(h=>{let g=p(h);return`
          <line x1="${r.left}" y1="${g}" x2="${560-r.right}" y2="${g}" class="oq-helper-curve-grid" />
          <text x="8" y="${g+4}" class="oq-helper-curve-axis-label">${h}\xB0</text>
        `}).join(""),d=ge.map(h=>`
        <text x="${c(h.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(h.label)}</text>
      `).join(""),b=ge.map(h=>`${c(h.outdoor)},${p(fe(h.key,E(h.key)))}`).join(" "),y=ge.map(h=>{let g=fe(h.key,E(h.key));return`
          <g>
            <circle
              cx="${c(h.outdoor)}"
              cy="${p(g)}"
              r="7"
              class="oq-helper-curve-point ${o.draggingCurveKey===h.key?"is-dragging":""}"
              data-curve-key="${s(h.key)}"
            />
            <text x="${c(h.outdoor)}" y="${p(g)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${g.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${u}
          <polyline points="${b}" class="oq-helper-curve-line" />
          ${y}
          ${d}
        </svg>
      </div>
    `}var ii="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",Ul="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==";function wS(){return Br.filter(e=>w(Ce(e,"Status"))||w(Ce(e,"Load"))||w(Co(e,"cooling",0)))}function SS(e){return Me(Ee(e))}function qS(e){let t=[];return ra.forEach(r=>{let n=-1/0;sr.forEach(a=>{let i=Co(e,r,a),l=SS(i);(!Number.isFinite(l)||l<0||l>120||l<n)&&t.push(`${r==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(n=l)})}),{valid:t.length===0,invalid:t}}function kS(e){let t=String(E(`hp${e}Mode`)||"").trim(),r=Me(E(`hp${e}Freq`)),n=t&&t!=="Onbekend"&&t!=="Unknown",a=Number.isFinite(r),i=n&&/standby|stand-by/i.test(t),l=a&&r<=.5,c=n?i?a?l?"Standby en compressor uit.":`Compressor draait op ${r.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${t}.`:"ODU status is onbekend.";return{mode:n?t:"Onbekend",freq:Number.isFinite(r)?`${r.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:c}}function CS(e){let t=String(e||"").toUpperCase();return!e||t==="UNKNOWN"||t==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":t.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":t.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":t.includes("WRITE_QUEUED")||t.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":t.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":t.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":t.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":t.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function ug(e,t){return w(e)?lo({key:e,value:Ee(e),meta:Le(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${t}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function ES(e){let t=sr.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${sr.map(r=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${r}</span>
            <div role="cell">${ug(Co(e,"cooling",r),r)}</div>
            <div role="cell">${ug(Co(e,"heating",r),t+r)}</div>
          </div>
        `).join("")}
      </div>
    `}function mg(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,r=t?t.closest(".oq-settings-odu-runtime-table"):null;if(!t||!r)return;let n=Array.from(r.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,c)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(c.dataset.oqOduRuntimeTabIndex||0)),a=n.indexOf(t),i=n[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function TS(e){let t=Ce(e,"Enable"),r=Ce(e,"Load"),n=Ce(e,"Apply"),a=Ce(e,"Status"),i=String(E(a)||"").trim()||"Nog niet geladen",l=qS(e),c=kS(e),p=!!E(t),u=o.loadingEntities||o.busyAction===r||o.busyAction===n,d=u||!p||!l.valid||!c.safe||!w(n),b=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(c.reason)} Laatste compressorfrequentie: ${s(c.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${w(r)?ze(r,o.busyAction===r?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",u):""}
      ${w(t)?Vt(t,`HP${e} writes vrijgeven`,p,u,"Enable","Locked"):""}
            ${w(n)?ze(n,o.busyAction===n?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",d):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(CS(i))}</p>
        </div>
        ${ES(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&c.safe?" is-ok":" is-warning"}">${s(b)} ${s(c.safe?"":c.reason)}</p>
      </article>
    `}function gg(){let e=wS();return e.length?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${o.oduRuntimeFrequencyDetailsOpen?" open":""}>
        <summary class="oq-settings-section-summary" data-oq-action="toggle-odu-runtime-frequency-details">
          <div class="oq-settings-section-head">
            <div class="oq-settings-section-head-meta">
              <p class="oq-helper-label">Experimenteel</p>
              <div class="oq-settings-section-head-meta-badge">
                <span class="oq-settings-section-badge oq-settings-section-badge--experimental">Runtime only</span>
              </div>
            </div>
            <h3>ODU runtime frequentietabel</h3>
            <p>Lees en schrijf de ODU frequentietabel alleen runtime; waarden worden niet opgeslagen in EEPROM.</p>
          </div>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-settings-section-collapsible-body oq-settings-odu-runtime">
          <div class="oq-settings-odu-runtime-warning" role="alert">
            <strong>Schrijft direct naar ODU runtime registers.</strong>
            <p>Gebruik dit alleen voor gecontroleerde tests. Apply werkt alleen wanneer de HP in standby staat, de compressor uit is en de enable-schakelaar bewust aan staat.</p>
            <p>Verlaag koel-frequenties onder de OEM-ondergrens rond 30 Hz alleen met superheat-bewaking. Bij te lage suction superheat kan natte zuigretour richting compressor ontstaan.</p>
          </div>
          <div class="oq-settings-odu-runtime-panels">
            ${e.map(t=>TS(t)).join("")}
          </div>
        </div>
      </details>
    `:""}function si(e,t="Aandacht",r="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${s(e?t:r)}</span>`}function Fr({label:e,value:t,note:r="",active:n=!1}){return`
      <div class="oq-settings-monitoring-row${n?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(t)}</strong>
          ${r?`<span>${s(r)}</span>`:""}
        </div>
        ${si(n)}
      </div>
    `}function yo(e){let t=R(e);return Number.isNaN(t)?"\u2014":String(Math.max(0,Math.round(t)))}function xS(e){let t=R(e);if(Number.isNaN(t))return"Nog niet gemeten";if(t<1)return"Zojuist";if(t<60)return`${Math.round(t)} min geleden`;let r=Math.floor(t/60),n=Math.round(t%60);return`${r}u ${n}m geleden`}function dg(e){let t=R(e);return Number.isNaN(t)||t<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t*1e3))}function $S(e){if(!e.cyclingAlertLatched)return"";let t=J("compressorCyclingAlertAlternating"),r=yo("compressorCyclingAlertHp1Peak2h"),n=yo("compressorCyclingAlertHp1Peak72h"),a=w("compressorCyclingAlertHp2Peak2h")?yo("compressorCyclingAlertHp2Peak2h"):"",i=w("compressorCyclingAlertHp2Peak72h")?yo("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${si(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(dg("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(dg("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(r)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(n)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${t?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${o.entities.acknowledgeCompressorCyclingAlert?ze("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function pg(e,t){return w(`${t}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${s(e)}</p>
          <span>Laatste start: ${s(xS(`${t}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${s(yo(`${t}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${s(yo(`${t}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${s(yo(`${t}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${s(yo(`${t}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function fg(){let e=It();dn(e);let t=Et("cicPollingEnabled"),r=Et("otEnabled"),n=[w("lowflowFaultActive")?Fr({label:"Flow",value:J("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:J("lowflowFaultActive")}):"",w("flowMismatch")?Fr({label:"Flowvergelijking duo",value:J("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:J("flowMismatch")}):""].filter(Boolean).join(""),a=[w("cicDataStale")?Fr({label:"CIC-data",value:t?J("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:t&&J("cicDataStale")}):"",w("otLinkProblem")?Fr({label:"OpenTherm",value:r?J("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:r&&J("otLinkProblem")}):""].filter(Boolean).join(""),i=[w("hp1Failures")?Fr({label:"Warmtepomp 1",value:hs("hp1Failures"),active:un("hp1Failures")}):"",w("hp2Failures")?Fr({label:"Warmtepomp 2",value:hs("hp2Failures"),active:un("hp2Failures")}):""].filter(Boolean).join(""),l=R("compressorStarts2hWarningLimit"),c=R("compressorStarts72hWarningLimit"),p=J("compressorCyclingWarning2h")||J("compressorCyclingWarning72h")||J("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,u=n?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${n}</div>
      </article>
    `:"",d=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"",b=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"";return oe("Bewaking","Installatiebewaking","Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${si(e.active,"Aandacht nodig","Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${o.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(y=>`<span>${s(y.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${si(p)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${$S(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${pg("Warmtepomp 1","hp1")}
              ${pg("Warmtepomp 2","hp2")}
            </div>
            ${tt("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${tt("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(c)?"\u2014":`${Math.round(c)} starts / 72 uur`})}
          </article>
          ${d}
          </div>
          <div class="oq-settings-monitoring-column">
            ${u}
            ${b}
          </div>
        </div>
        </details>
      `)}function Gl(){if(!w("hpGeneration"))return"";let e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:ii,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:ii,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:Ul,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},t=o.entities.hpGeneration||{},r=String(E("hpGeneration")||""),n=Wt(t),a=o.loadingEntities||o.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${n.map(i=>{let l=e[i]||{};return vr({key:"hpGeneration",option:i,currentValue:r,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function hg(){let e=ft(),t=o.entities.hpGeneration||{},r=w("hpGeneration")&&Wt(t).length>0;return!e&&!r?"":oe("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige versie</p>
              <strong class="oq-settings-quickstart-status-value">${s(e||"Onbekend")}</strong>
            </div>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="open-generation-modal"
            ${!r||o.loadingEntities||o.busyAction==="save-hpGeneration"?"disabled":""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `)}function Ql(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!w("boilerCvAssistEnabled"))return"";let t=T("boilerCvAssistEnabled"),r=w("boilerRatedHeatPower"),n=Le("boilerRatedHeatPower"),a=Ee("boilerRatedHeatPower"),i=o.loadingEntities||o.busyAction==="switch-boilerCvAssistEnabled",c=r?lo({key:"boilerRatedHeatPower",value:a,meta:n,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,p=t&&r?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${s(e)}">
          ${pe("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${Vt("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",t,i)}
              </div>
            `,"oq-settings-field--compact")}

          ${t?pe("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${c}
              </div>
            `,t&&r?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",p):""}
        </div>
      `}function bg(){if(!w("boilerCvAssistEnabled"))return"";let e=T("boilerCvAssistEnabled");return oe("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",Ql())}function vg(){let e=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",t=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return oe("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${s(e)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="reset"
              ${o.busyAction==="reset"?"disabled":""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${s(t)}</p>
        </div>
      `)}function yg(){let e=mo(),t=Ea(),r=o.busyAction==="restartAction";return oe("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          ${Ne({dataValue:"uptime",label:"Uptime",value:hr()})}
          ${Ne({dataValue:"ip",label:"IP-adres",value:br()})}
          ${Ne({dataValue:"updates",label:"Updates",value:e,action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>`})}
          ${Ne({dataValue:"webserverLog",label:"Logboek",value:Ma(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>`})}
          ${Ne({dataValue:"debugRecording",label:"Debugopname",value:Sn(),note:Fa(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>`})}
          ${Ne({dataValue:"datetime",label:"Datum/tijd",value:t})}
          ${Ne({dataValue:"espTemp",label:"ESP-temp",value:ai()})}
          ${Ne({dataValue:"restart",label:"Herstart OpenQuatt",value:"Opnieuw opstarten",note:"Dit onderbreekt de webinterface kort.",action:`<button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${r?"disabled":""}
            >
              ${r?"Herstarten...":"Herstarten"}
            </button>`})}
          ${w("statusLedsEnabled")?`
            ${Ne({dataValue:"statusLeds",label:"Status-LEDs",value:T("statusLedsEnabled")?"Aan":"Uit",note:"Schakelt de gele netwerk-LED en rode storings-LED op de Q-edition controller.",action:Vt("statusLedsEnabled","Status-LEDs",T("statusLedsEnabled"),o.loadingEntities||o.busyAction==="switch-statusLedsEnabled")})}
          `:""}
        </div>
      `)}function wg(){let e=[Kl("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),Kl("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return oe("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${se("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${w("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function kg(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${Gl()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${Gl()}
        ${Qt()}
      </section>
    `}function MS(e){let t=String(e||"").trim();if(!t)return"";try{let r=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`http://${t}`);return r.protocol!=="http:"&&r.protocol!=="https:"?"":(r.port||(r.port="8080"),(!r.pathname||r.pathname==="/")&&(r.pathname="/beta/feed/data.json"),r.toString())}catch{return""}}function Cg(){let e=String(E("cicFeedUrl")||"").trim(),t=o.quickStartCicFeedUrlDraft===null?e:String(o.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:t,normalizedDraftUrl:MS(t)}}function Eg(e,t){return`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${co("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--text">
            <input
              class="oq-helper-input oq-settings-integration-url-input"
              type="text"
              data-oq-quickstart-cic-url
              value="${s(e.draftUrl)}"
              placeholder="192.168.2.117"
              autocomplete="off"
              spellcheck="false"
              ${t?"disabled":""}
            >
          </label>
          ${e.draftUrl&&!e.normalizedDraftUrl?'<p class="oq-settings-source-warning">Vul een geldig IP-adres, hostname of een geldige HTTP(S)-URL in.</p>':""}
          ${e.normalizedDraftUrl?`<p class="oq-settings-action-note">Wordt ingesteld als ${s(e.normalizedDraftUrl)}</p>`:""}
        </div>
      </article>
    `}function Sg(e){let t=String(e||"").trim().toLowerCase();return t==="heatpump_controller_q"||t.includes("q-edition")||t.includes("controller q")?"heatpump_controller_q":t==="heatpump_listener"||t.includes("listener")?"heatpump_listener":t==="waveshare"||t.includes("waveshare")?"waveshare":""}function Tg(){let e=Sg(E("hardwareProfileText")),t=!1;return e||(e=Sg(Tt().hardwareProfile)),!e&&w("qFlowSource")?(e="heatpump_controller_q",t=!0):!e&&w("flowSource")&&w("cicPollingEnabled")&&(e="remote",t=!0),{profile:e,inferred:t,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function Ir(){let e=String(E("hpGeneration")||"").trim(),t=Tg(),r=e==="V1",{isQEdition:n,isRemoteProfile:a,hardwareKnown:i}=t,l=r&&a,c=n?r?"Local":"Outdoor unit":"",p=l?"CIC":"Outdoor unit",u=String(E("flowSource")||"").trim(),d=String(E("qFlowSource")||"").trim(),b=T("cicPollingEnabled"),y=T("cicJsonFeedOk"),h=T("cicDataStale"),g=Cg(),m=u===p&&(!c||d===c),v=l?m&&b&&!!g.configuredUrl:m,S=l?"cicFlowrate":n&&r?"controllerFlow":te()==="duo"?"flowLocal":"hp1Flow",q=R(S),C=Number.isFinite(q),k=T("quickFlowTest"),$=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&v?$=y&&C?q>0?"Geldig":"Bron actief, geen circulatie":h?"Geen actuele CiC-data":y?"Verbonden, wacht op flow":"Verbinding controleren":!l&&v&&($=C?q>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");let D=l?"CiC JSON-feed":n&&r?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",N=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":n&&r?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:t.hardwareLabel,requiresCic:l,qFlowTarget:c,flowSourceTarget:p,configurationApplied:v,sourceLabel:D,explanation:N,status:$,flowValue:q,flowAvailable:C,flowTestActive:k,canRunFlowTest:v,...g,canApply:i&&w("flowSource")&&(!c||w("qFlowSource"))&&(!l||w("cicPollingEnabled")&&w("cicFeedUrl")&&!!g.normalizedDraftUrl)}}function li(){let e=Tg(),{isQEdition:t,isRemoteProfile:r}=e,n=String(E("roomTempSource")||"").trim(),a=String(E("roomSetpointSource")||"").trim(),i=n===a&&["CIC","OT thermostat","HA input"].includes(n)?n:"",l=t?"OT thermostat":o.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),c=Cg(),u=n===l&&a===l&&(l!=="OT thermostat"||T("otEnabled"))&&(l!=="CIC"||T("cicPollingEnabled")&&!!c.configuredUrl),d=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],b=R(d[0]),y=R(d[1]),h=Number.isFinite(b)&&Number.isFinite(y),g=l==="OT thermostat"?T("otEnabled")&&!T("otLinkProblem")&&h:l==="CIC"?T("cicJsonFeedOk")&&!T("cicDataStale")&&h:T("roomTempHaValid")&&T("roomSetpointHaValid")&&h,m=t||r?"Nog activeren":"Hardwareprofiel niet herkend";u&&(m=g?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");let v=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",S=t?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:t,isRemoteProfile:r,selectedSource:l,sourceLabel:v,explanation:S,configurationApplied:u,status:m,roomTempValue:b,roomSetpointValue:y,valuesAvailable:h,...c,canApply:(t||r)&&w("roomTempSource")&&w("roomSetpointSource")&&(l!=="OT thermostat"||w("otEnabled"))&&(l!=="CIC"||w("cicPollingEnabled")&&w("cicFeedUrl")&&!!c.normalizedDraftUrl)}}function HS(){let e=Ir(),t=o.busyAction==="quickstart-flow-source"||o.busyAction==="quickstart-flow-refresh",r=o.busyAction==="quickstart-flow-test-start"||o.busyAction==="quickstart-flow-test-abort",n=t||r||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?Eg(e,n):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${pe("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${s(e.hardwareLabel)} \xB7 Quatt ${s(e.generation||"onbekend")}</p>
                    <strong class="oq-settings-quickstart-status-value">${s(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${s(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${a}"><span>Status</span><strong>${s(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Actuele flow</span><strong>${s(i)}</strong></div>
                </div>
              </div>
            `,"oq-settings-field--span-2")}
          ${l}
        </div>
        <div class="oq-helper-actions">
          <button
            class="oq-helper-button oq-helper-button--primary"
            type="button"
            data-oq-action="apply-quickstart-flow-source"
            ${n||!e.canApply?"disabled":""}
          >
            ${o.busyAction==="quickstart-flow-source"?"Flowconfiguratie opslaan...":e.configurationApplied?"Flowconfiguratie opnieuw opslaan":e.requiresCic?"CiC-flowconfiguratie opslaan":"Flowconfiguratie activeren"}
          </button>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="refresh-quickstart-flow-signal"
            ${n||!e.configurationApplied?"disabled":""}
          >
            ${o.busyAction==="quickstart-flow-refresh"?"Signaal controleren...":"Signaal opnieuw controleren"}
          </button>
          ${e.canRunFlowTest?`
            <button
              class="oq-helper-button ${e.flowTestActive?"":"oq-helper-button--ghost"}"
              type="button"
              data-oq-action="${e.flowTestActive?"abort-quickstart-flow-test":"start-quickstart-flow-test"}"
              ${t||r?"disabled":""}
            >
              ${r?e.flowTestActive?"Waterpomptest stoppen...":"Waterpomptest starten...":e.flowTestActive?"Waterpomptest stoppen":"Waterpomptest starten (30 sec)"}
            </button>
          `:""}
        </div>
        <p class="oq-settings-action-note">${e.flowTestActive?"Alleen de waterpomp draait op 400 iPWM. Het kan enkele seconden duren voordat de circulatie op gang komt en de flowmeter een waarde toont. De firmware stopt de test automatisch na maximaal 30 seconden.":"0 L/h kan normaal zijn als de circulatiepomp stilstaat. De waterpomptest gebruikt 400 iPWM, start geen compressor en stopt automatisch na 30 seconden."}</p>
        ${Qt({nextDisabled:!e.configurationApplied||e.flowTestActive||r,nextDisabledLabel:r?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function AS(){let e=li(),t=o.busyAction==="quickstart-thermostat-source",r=e.status==="Geldig"?" is-active":"",n=e.isRemoteProfile?`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${co("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--select">
            <select data-oq-quickstart-thermostat-source ${t?"disabled":""}>
              <option value="CIC" ${e.selectedSource==="CIC"?"selected":""}>CiC JSON-feed</option>
              <option value="HA input" ${e.selectedSource==="HA input"?"selected":""}>Home Assistant</option>
            </select>
          </label>
          <p class="oq-settings-action-note">Deze keuze geldt altijd voor zowel kamertemperatuur als kamer-setpoint.</p>
        </div>
      </article>
    `:"",a=e.selectedSource==="CIC"?Eg(e,t):"",i=e.selectedSource==="HA input"?`
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${pe("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${s(e.hardwareLabel)}</p>
                    <strong class="oq-settings-quickstart-status-value">${s(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${s(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${r}"><span>Status</span><strong>${s(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamertemperatuur</span><strong>${Number.isFinite(e.roomTempValue)?`${e.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamer-setpoint</span><strong>${Number.isFinite(e.roomSetpointValue)?`${e.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                </div>
              </div>
            `,"oq-settings-field--span-2")}
          ${n}
          ${a}
          ${i}
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-quickstart-thermostat-source" ${t||!e.canApply?"disabled":""}>
            ${t?"Thermostaatconfiguratie opslaan...":e.configurationApplied?"Thermostaatconfiguratie opnieuw opslaan":e.selectedSource==="OT thermostat"?"OpenTherm-configuratie activeren":"Thermostaatconfiguratie opslaan"}
          </button>
        </div>
        ${Qt({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function xg(){return!o.quickStartModalOpen||o.loadingEntities||o.complete===null||o.complete&&o.quickStartModalMode!=="generation"?"":o.quickStartModalMode==="generation"?`
        <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
          <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart oq-helper-modal--generation" data-oq-quickstart-scroller data-oq-quickstart-step="generation" role="dialog" aria-modal="true" aria-labelledby="oq-generation-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Installatie</p>
                <h2 class="oq-helper-modal-title" id="oq-generation-modal-title">Quatt Hybrid-versie aanpassen</h2>
                <p class="oq-helper-modal-copy">Kies de versie die bij jouw Quatt hoort. Deze keuze bepaalt de basis van de regeling.</p>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit versie-popup">\xD7</button>
            </div>
            ${kg("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${s(WS().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${FS()}
            ${VS()}
          </div>
        </section>
      </div>
    `}function $g(){return o.root?o.root.querySelector("[data-oq-quickstart-scroller]"):null}function Mg(){let e=$g();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:Aa(e)}:null}function RS(e){if(!e)return;let t=$g();if(!t||String(t.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}let r=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,r)}function Yl(e,t=!0){if(!e)return;let r=Number(o.quickStartScrollRestoreToken||0)+1;o.quickStartScrollRestoreToken=r;let n=()=>{o.quickStartScrollRestoreToken!==r||!o.quickStartModalOpen||RS(e)};if(t){window.requestAnimationFrame(n);return}n()}function qg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${Wl()}
        ${Fl("oq-settings-grid oq-settings-grid--quickstart")}
        ${Qt()}
      </section>
    `}function PS(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${Ql("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${Qt()}
      </section>
    `}function DS(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${Il("oq-settings-grid oq-settings-grid--quickstart")}
        ${Qt()}
      </section>
    `}function NS(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(ne()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(ne()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${ne()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${Vl()}</div>
            <div class="oq-settings-curve-shell">
              ${zl()}
            </div>
            ${_l()}
          `:`
            ${jl("oq-settings-grid oq-settings-grid--quickstart")}
            ${Bl()}
          `}
        ${Qt()}
      </section>
    `}function LS(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${ml("oq-settings-grid oq-settings-grid--quickstart")}
        ${Qt()}
      </section>
    `}function OS(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${Ka("oq-settings-grid oq-settings-grid--quickstart")}
        ${Qt()}
      </section>
    `}function _S(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(At("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${BS()}
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${o.busyAction?"disabled":""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${o.busyAction?"disabled":""}>
            ${o.busyAction==="apply"?"Afronden...":"Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${o.busyAction?"disabled":""}>
            ${o.busyAction==="reset"?"Resetten...":"Setup-status resetten"}
          </button>
        </div>
      </section>
    `}function FS(){return o.currentStep==="generation"?kg():o.currentStep==="boiler"?w("boilerCvAssistEnabled")?PS():qg():o.currentStep==="flow-source"?HS():o.currentStep==="thermostat-source"?AS():o.currentStep==="flow"?DS():o.currentStep==="heating"?NS():o.currentStep==="water"?LS():o.currentStep==="silent"?OS():o.currentStep==="confirm"?_S():qg()}function Xo(){return ir.filter(e=>!e.optionalEntity||w(e.optionalEntity))}function At(e){let t=Xo().findIndex(r=>r.id===e);return`Stap ${Math.max(0,t)+1}`}function IS(e){let t=ci(),r=e===t,n=o.complete===!0||e<t;return{tone:r?"current":n?"done":"upcoming",label:r?"Actief":n?"Gereed":"Volgend",current:r}}function jS(e=!1){return Xo().map((t,r)=>{let n=IS(r);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${n.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${s(t.id)}"
          aria-current="${n.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(r+1).padStart(2,"0")}. ${s(t.title)}</h3>
            <span class="oq-helper-field-step-state">${n.label}</span>
          </div>
          <p>${s(t.copy)}</p>
        </button>
      `}).join("")}function WS(){let e=Xo();return e.find(t=>t.id===o.currentStep)||e[0]||ir[0]}function ci(){return Math.max(0,Xo().findIndex(e=>e.id===o.currentStep))}function Jl(e){let t=Xo(),r=Math.min(t.length-1,Math.max(0,ci()+e));o.currentStep=t[r]?.id||ir[0].id}function Qt(e={}){let t=ci(),r=Xo(),n=t>0?r[t-1]:null,a=t<r.length-1?r[t+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${t+1} van ${r.length}</strong>
          <span>${s(a?`Hierna: ${a.title}`:"Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${n?"":"disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${a&&!e.nextDisabled?"":"disabled"}>
            ${a?e.nextDisabled?e.nextDisabledLabel||"Configureer eerst":"Volgende":"Laatste stap"}
          </button>
        </div>
      </div>
    `}function VS(){let e=ci(),t=Xo();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${t.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${jS(!0)}
        </div>
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function BS(){let e=Se(F("hpGeneration")),t=ne()?"Stooklijn":"Power House",r=v=>Se(F(v)),n=[],a=ne()?[["Regelprofiel",r("curveControlProfile")],["Aanvoer bij -20\xB0C",Q("curveM20")],["Aanvoer bij -10\xB0C",Q("curveM10")],["Aanvoer bij 0\xB0C",Q("curve0")],["Aanvoer bij 5\xB0C",Q("curve5")],["Aanvoer bij 10\xB0C",Q("curve10")],["Aanvoer bij 15\xB0C",Q("curve15")],["Fallback-aanvoer",Q("curveFallbackSupply")]]:[["Profiel",r("phResponseProfile")],["Rated maximum house power",Q("housePower")],["Maximum heating outdoor temperature",Q("houseOutdoorMax")],["Temperatuurreactie",Q("phKp")],["Comfort onder setpoint",Q("phComfortBelow")],["Comfort boven setpoint",Q("phComfortAbove")]],i=String(E("flowControlMode")||""),l=Ir(),c=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],p=li(),u=[["Status",p.status],["Kamertemperatuur",Number.isFinite(p.roomTempValue)?`${p.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(p.roomSetpointValue)?`${p.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],d=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",Q("manualIpwm")]:["Gewenste flow",Q("flowSetpoint")]],b=w("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",T("boilerCvAssistEnabled")?"Ja":"Nee"],...T("boilerCvAssistEnabled")?[["Boiler rated heat power",Q("boilerRatedHeatPower")]]:[]]:[],y=[["Maximale watertemperatuur",Q("maxWater")]],h=[["Start stille uren",en(E("silentStartTime"))||"\u2014"],["Einde stille uren",en(E("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",Q("silentMax")],["Maximaal niveau overdag",Q("dayMax")]],g=v=>`
      <div class="oq-helper-review-list">
        ${v.filter(S=>S&&S[1]).map(([S,q])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(S)}</span>
                <strong class="oq-helper-review-value">${s(q)}</strong>
              </div>
            `).join("")}
      </div>
    `,m=(v,S,q="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(v)}</h3>
        ${q?`<p class="oq-helper-review-summary"><strong>${s(q)}</strong></p>`:""}
        ${g(S)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${m("Quatt Hybrid-versie",n,e)}
        ${m("Flowmeting",c,l.sourceLabel)}
        ${m("Verwarmingsstrategie",a,t)}
        ${m("Watertemperatuur",y)}
        ${m("Thermostaatgegevens",u,p.sourceLabel)}
        ${m("Flowregeling",d)}
        ${b.length?m("CV-ketel / boiler",b):""}
        ${m("Stille uren",h)}
      </div>
    `}function Fn(e,t){return`
      <div class="oq-settings-cooling-fact">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
      </div>
    `}function Zl(e){let t=String(e||"").trim();return t?{Ready:"Gereed","Waiting for room request":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","Cooling enabled, waiting for room temperature above cooling setpoint":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[t]||t:""}function Hg(){let e=!w("coolingRoomRequestRequired")||T("coolingRoomRequestRequired"),t=[se("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),tt("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${Q("coolingDemandMax")} max`}),se("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),se("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),r=[w("coolingRoomRequestRequired")?Gd("coolingRoomRequestRequired","Koelvraag via kamerthermostaat","Aan: OpenQuatt wacht op echte koelvraag vanuit de kamer. Uit: koeltoestemming geldt direct als koelvraag.","Koelvraag start en stopt met de marges hieronder.","Koeltoestemming geldt direct als koelvraag. De start- en stopmarge worden nu niet gebruikt.","oq-settings-field--span-2"):"",e?se("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."):"",e?se("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."):""].filter(Boolean),n=r.length>0,a=w("coolingWithoutDewPointMode"),i=[w("coolingGuardMode")?Fn("Route",Se(F("coolingGuardMode","Onbekend"))):"",w("coolingEffectiveMinSupplyTemp")?Fn("Actieve ondergrens",F("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean),l=i.length?pe("coolingGuardStatus","Actuele beveiliging","Laat zien welke route koeling nu begrenst en welke ondergrens daadwerkelijk geldt.",`<div class="oq-settings-cooling-facts">${i.join("")}</div>`,"oq-settings-field--span-2 oq-settings-field--cooling-status"):"",c=[w("outsideTempSelected")?Fn("Actuele buitentemperatuur",F("outsideTempSelected","\u2014")):"",w("coolingFallbackNightMinOutdoorTemp")?Fn("Nachtminimum buitentemperatuur",F("coolingFallbackNightMinOutdoorTemp","\u2014")):"",w("coolingFallbackMinSupplyTemp")?Fn("Berekende minimum watertemperatuur",F("coolingFallbackMinSupplyTemp","\u2014")):""].filter(Boolean),p=c.length?`<div class="oq-settings-cooling-fallback-metrics">${c.join("")}</div>`:"",u=a||c.length>0,b=F("coolingGuardMode","").toLowerCase().includes("fallback");if(!t.length&&!n&&!a&&!l&&!u)return"";let y={"Dew point required":"Gebruik alleen een betrouwbare dauwpuntmeting. Zonder meting blijft koeling uit.","Allow without dew point":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use fallback":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use dew point approximation":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, user responsibility":"Negeer dauwpunt en benadering; alleen de ingestelde minimale koel-aanvoer geldt."};return oe("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${t.length?`
          <div class="oq-settings-grid">
            ${t.join("")}
          </div>
        `:""}
        ${n?`
          <div class="oq-settings-subpanel oq-settings-subpanel--nested">
            <div class="oq-settings-subpanel-head">
              <p class="oq-helper-label">Koelvraag</p>
              <h4>Kamerthermostaat</h4>
              <p>Bepaalt of koelen pas start bij kamervraag, of dat koeltoestemming direct als koelvraag telt.</p>
            </div>
            <div class="oq-settings-grid">
              ${r.join("")}
            </div>
          </div>
        `:""}
        ${a||l||u?`
          <div class="oq-settings-grid">
            ${a?Yd("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",y,"oq-settings-field--span-2 oq-settings-field--cooling-guard-choice"):""}
            ${l}
            ${u?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline"${b?" open":""}>
              <summary>Dauwpuntsbenadering bekijken</summary>
              <div class="oq-settings-callout-body">
                ${p}
                <p>Zonder dauwpuntmeting weet OpenQuatt niet zeker hoe koud het water mag worden zonder condensrisico. De dauwpuntsbenadering gebruikt daarom een voorzichtige minimum watertemperatuur.</p>
                <p>Onder de 20\xB0C buiten blijft koeling via deze benadering uit. Daarboven loopt de ondergrens geleidelijk op van 19\xB0C bij 20\xB0C buiten naar 22\xB0C bij 32\xB0C buiten. Warme nachten verhogen die grens nog iets.</p>
                <p>Wordt die grens hoger dan zinvol is voor de kamer, dan verlaagt OpenQuatt hem beperkt: ongeveer 1\xB0C onder de kamertemperatuur, maar nooit lager dan 20\xB0C. Voorbeeld: bij 22\xB0C kamer en een berekende grens van 23,5\xB0C wordt de grens ongeveer 21\xB0C. Zo kan OpenQuatt nog voorzichtig koelen. Een echte dauwpuntmeting blijft veiliger.</p>
                <p>Kies je expliciet toestaan, dan gebruikt OpenQuatt geen dauwpuntgrens: ook een beschikbare dauwpuntmeting wordt genegeerd. Koeling mag dan doorgaan op basis van de ingestelde minimale koel-aanvoer. Dat kan nuttig zijn bij een installatie die je zelf goed bewaakt, maar het condensrisico ligt dan volledig bij jou.</p>
                <div class="oq-settings-rule-groups">
                  <section class="oq-settings-rule-group">
                    <h4>Buitentemperatuur</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 20\xB0C</span>
                        <span class="oq-settings-rule-value">Uit</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">20-32\xB0C</span>
                        <span class="oq-settings-rule-value">19\xB0C \u2192 22\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 32\xB0C</span>
                        <span class="oq-settings-rule-value">Min. water 22\xB0C</span>
                      </div>
                    </div>
                  </section>
                  <section class="oq-settings-rule-group">
                    <h4>Nachtcorrectie</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 18\xB0C</span>
                        <span class="oq-settings-rule-value">+0\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">18-19\xB0C</span>
                        <span class="oq-settings-rule-value">+0,5\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">19-20\xB0C</span>
                        <span class="oq-settings-rule-value">+1,0\xB0C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 20\xB0C</span>
                        <span class="oq-settings-rule-value">+1,5\xB0C</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </details>
            `:""}
          </div>
        `:""}
      `)}function Ag(){let e=w("otEnabled"),t=w("cicPollingEnabled")||w("cicFeedUrl"),r=w("cicCompatibilityMode"),n=w("otLinkProblem")||w("cicDataStale")||w("cicJsonFeedOk");if(!e&&!t&&!r&&!n)return"";let a=Et("cicPollingEnabled"),i=Et("otEnabled"),l=({label:g,value:m,active:v=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${v?" is-warning":""}">
        <dt>${s(g)}</dt>
        <dd>${s(m)}</dd>
      </div>
    `,c=(g,m,v="Actief",S="Normaal",q={})=>{if(!w(g))return"";let C=J(g);return l({label:m,value:C?v:S,active:q.warningWhenActive?C:!1})},p=(g,m,v={})=>{let S=v.fallbackKey||"";return!w(g)&&!(S&&w(S))?"":l({label:m,value:Te(w(g)?g:S,v)})},u=(g,m)=>{let v=m.filter(Boolean).join("");return v?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(g)}</h4>
          <dl>${v}</dl>
        </article>
      `:""},d=w("cicFeedUrl")?`
      <article class="oq-settings-integration-card oq-settings-integration-card--wide" data-oq-settings-field="cicFeedUrl">
        <div class="oq-settings-integration-card-head">
          <h4>CIC feed URL</h4>
          <span class="oq-settings-integration-pill">Lokaal</span>
        </div>
        <label class="oq-settings-control oq-settings-control--text">
          <input
            class="oq-helper-input oq-settings-integration-url-input"
            type="url"
            data-oq-field="cicFeedUrl"
            value="${s(String(Ee("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${o.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",b=u("OpenTherm",[w("otLinkProblem")?l({label:"OT-link",value:i?J("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&J("otLinkProblem")}):"",c("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),c("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),p("otControlSetpoint","Control setpoint"),p("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),p("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),y=u("CIC-feed",[w("cicJsonFeedOk")?l({label:"JSON-feed",value:a?J("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!J("cicJsonFeedOk")}):"",w("cicDataStale")?l({label:"Data",value:a?J("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&J("cicDataStale")}):"",c("cicChEnabled","CH-vraag","Actief","Normaal"),c("cicCoolingEnabled","Koeling","Actief","Normaal"),p("cicControlSetpoint","Control setpoint"),p("cicRoomSetpoint","Room setpoint"),p("cicRoomTemp","Room temperature"),p("cicFlowrate","Flow"),p("cicLastSuccessAge","Laatste succes")]),h=b||y?`
      <details class="oq-settings-integration-diagnostics"${o.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${b}
          ${y}
        </div>
      </details>
    `:"";return oe("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${xa("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${xa("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${xa("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${d}
        </div>
        ${h}
      `)}function Rg(){if(!Qr.some(M=>w(M)))return"";let t=Et("cicPollingEnabled"),r=Et("otEnabled"),n=(M={})=>M.haValueKey||(M.haKeys||[]).find(x=>!/valid$/i.test(x))||"",a=(M={})=>M.haValidKey||(M.haKeys||[]).find(x=>/valid$/i.test(x))||"",i=(M="",x="")=>!!M&&!!x&&w(M)&&w(x)&&J(x),l=(M={})=>i(n(M),a(M)),c={mqttCoolingDewPoint:"cooling_dew_point",mqttOutsideTemperature:"outside_temperature",mqttRoomTemperature:"room_temperature",mqttRoomSetpoint:"room_setpoint",mqttHeatingEnable:"heating_enable",mqttCoolingEnable:"cooling_enable"},p=(M={})=>M.mqttTopicKey||c[M.valueKey]||"",u=(M="")=>{if(!M)return!0;let x=o.mqttStatus?.input_enabled;return x&&typeof x=="object"&&Object.prototype.hasOwnProperty.call(x,M)?x[M]!==!1:!0},d=M=>/\bMQTT\b/i.test(String(M||"")),b=(M,x={})=>M==="CIC"?t:M==="OT thermostat"?r:M==="HA input"?l(x):M==="CIC or HA input"?t||l(x):d(M)?u(p(x)):M==="Flowmeter HP2"?w("hp2Flow"):M==="Local aggregate HP1/HP2"?w("flowLocal")||w("hp2Flow"):!0,y=(M,x={})=>M==="CIC"&&!t?"CIC-polling staat uit":M==="OT thermostat"&&!r?"OpenTherm staat uit":M==="HA input"&&!l(x)?"HA-bron ongeldig":M==="CIC or HA input"&&!t&&!l(x)?"CIC en HA ontbreken":d(M)&&!u(p(x))?"MQTT-topic staat uit":M==="Flowmeter HP2"&&!w("hp2Flow")?"HP2-flow ontbreekt":M==="Local aggregate HP1/HP2"&&!w("flowLocal")&&!w("hp2Flow")?"Lokale flow ontbreekt":"",h=(M,x="Actief",W="Normaal")=>w(M)?J(M)?x:W:"",g=(M,x={})=>{let W=String(M||"").trim();return W?x.optionLabels?.[W]||Se(W):""},m=(M,x={})=>{let W=String(E(M)||"").trim();return W?g(W,x):""},v=M=>{let x=Io(M,"");return x?Se(x):""},S=M=>{let x=String(Io(M,"")||"").trim();return!x||x==="None"?"":Se(x)},q=(...M)=>M.find(x=>String(x||"").trim())||"",C=()=>{let M=m("waterSupplySource");if(String(E("waterSupplySource")||"")==="Local"&&w("localWaterSupplyTempSource")){let x=m("localWaterSupplyTempSource");return x?`${M} - ${x}`:M}return M},k=()=>{let M=String(E("flowSource")||"").trim();if(M==="Outdoor unit"){if(w("qFlowSource")){let x=String(E("qFlowSource")||"").trim(),W=String(E("hpGeneration")||"").trim();return x==="Local"||x==="Auto"&&W==="V1"?x==="Auto"?"Lokaal (auto)":"Lokaal":q(m("outdoorUnitFlowMode"),x==="Auto"?"Buitenunit (auto)":"Buitenunit")}return q(m("outdoorUnitFlowMode"),"Quatt-flow")}return Se(M)},$=()=>{let M=String(E("outsideTempSource")||"").trim();if(M==="MQTT"&&!u("outside_temperature"))return"MQTT-topic staat uit";if(M!=="Auto")return Se(M);let x=R("outsideTempLocalAggregated"),W=R("outsideTempHa"),G=R("mqttOutsideTemperature"),ee=!Number.isNaN(x),ie=w("outsideTempHaValid")?J("outsideTempHaValid")&&!Number.isNaN(W):!Number.isNaN(W),be=u("outside_temperature")&&w("mqttOutsideTemperatureValid")&&J("mqttOutsideTemperatureValid")&&!Number.isNaN(G),re=[ee?{label:"Buitenunit",value:x}:null,ie?{label:"HA-invoer",value:W}:null,be?{label:"MQTT",value:G}:null].filter(Boolean);return re.length?re.reduce((xe,ve)=>ve.value<xe.value?ve:xe,re[0]).label:"Auto"},D=M=>{if(!w(M))return NaN;let x=Number(E(M));if(Number.isFinite(x))return x;let G=String(o.entities[M]?.state??"").trim().replace(",",".").match(/-?\d+(?:\.\d+)?/);return G?Number(G[0]):NaN},N=(M,x="")=>{if(!w(M))return!1;let W=D(M);return(x?J(x):!0)&&Number.isFinite(W)},z=()=>{let M=String(E("coolingDewPointSource")||"").trim();if(M==="Home Assistant")return N("coolingDewPointHa","coolingDewPointHaValid")?"HA-invoer":"HA-invoer ontbreekt";if(M==="MQTT")return u("cooling_dew_point")?N("mqttCoolingDewPoint","mqttCoolingDewPointValid")?"MQTT":"MQTT ontbreekt of verouderd":"MQTT-topic staat uit";let x=N("coolingDewPointHa","coolingDewPointHaValid"),W=u("cooling_dew_point")&&N("mqttCoolingDewPoint","mqttCoolingDewPointValid");if(x&&W){let G=D("coolingDewPointHa");return D("mqttCoolingDewPoint")>G?"MQTT":"HA-invoer"}return x?"HA-invoer":W?"MQTT":M?Se(M):"Auto"},H=({label:M,value:x="",key:W="",active:G=!1,status:ee="",statusTone:ie="",statusTitle:be=""})=>{let re=x||(W?Te(W):"");if(!re&&!ee)return"";let xe=String(ie||"").replace(/[^a-z0-9_-]/gi,""),ve=be||ee,ce=ee?`<em class="oq-settings-source-status${xe?` oq-settings-source-status--${s(xe)}`:""}" title="${s(ve)}" aria-label="${s(`${ee}: ${ve}`)}">${s(ee)}</em>`:"";return`
        <div class="oq-settings-source-row${G?" is-warning":""}${ee?" has-status":""}">
          <span>${s(M)}${ce}</span>
          <strong>${s(re)}</strong>
        </div>
      `},U=({label:M="HA-invoer",valueKey:x="",validKey:W="",value:G=""})=>{if(!x||!W||!w(x)||!w(W))return[];let ee=J(W);return[H({label:M,key:x,value:G,status:ee?"Geldig":"Ongeldig",statusTone:ee?"valid":"invalid",statusTitle:ee?"Home Assistant geeft dit signaal geldig door. OpenQuatt mag deze HA-invoer gebruiken.":"Home Assistant geeft dit signaal niet geldig door. OpenQuatt gebruikt deze HA-invoer dan niet als bron."})]},A=({label:M="MQTT",valueKey:x="",validKey:W="",value:G="",topicKey:ee=""})=>{if(!x||!W||!w(x)||!w(W))return[];if(!u(ee||c[x]))return[];let ie=J(W),be=ie?"MQTT heeft een geldige, recente waarde ontvangen. OpenQuatt mag deze MQTT-invoer gebruiken.":"MQTT heeft nog geen geldige recente waarde ontvangen. OpenQuatt gebruikt deze MQTT-invoer dan niet als bron.";return[H({label:M,key:x,value:ie?G:"\u2014",status:Ms(W),statusTone:ie?"valid":"invalid",statusTitle:be})]},I=({title:M,icon:x="",content:W="",rows:G=[],copy:ee="",className:ie=""})=>{let be=G.filter(Boolean).join("");return!W&&!be&&!ee?"":`
        <section class="oq-settings-source-group${ie?` ${s(ie)}`:""}">
          <h5>
            ${x?`<span class="oq-settings-source-group-icon">${$e(x,"oq-settings-source-group-icon-svg")}</span>`:""}
            <span>${s(M)}</span>
          </h5>
          ${W?`<div class="oq-settings-source-group-content">${W}</div>`:""}
          ${be?`<div class="oq-settings-source-rows">${be}</div>`:""}
          ${ee?`<p class="oq-settings-source-group-copy">${s(ee)}</p>`:""}
        </section>
      `},L=(M,x={})=>{if(!w(M))return{markup:"",warning:""};let W=o.entities[M]||{},G=String(E(M)||""),ee=Wt(W),ie=new Set(x.hiddenOptions||[]),be=G&&ie.has(G),re=ee.filter(de=>!ie.has(de)&&b(de,x)),xe=G&&!b(G,x),ve=G==="HA input"&&x.keepUnavailableCurrent!==!0,Nt=(be&&!re.includes(G)?[G,...re]:xe&&!ve&&!re.includes(G)?[G,...re]:re).map(de=>{let qo=g(de,x);return`<option value="${s(de)}" ${de===G?"selected":""}>${s(qo)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s(x.label||"Bron")}</span>
              ${x.infoCopy?co(x.infoId||M,x.infoTitle||x.label||"Bron",x.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s(M)}" ${o.loadingEntities?"disabled":""}>
              ${Nt}
            </select>
          </label>
        `,warning:be?"Huidige bron is legacy; kies een nieuwe bron.":xe?`Huidige bron niet beschikbaar: ${y(G,x)}`:""}},P=({key:M,title:x,icon:W="",select:G,secondarySelect:ee=null,secondarySelects:ie=null,activeRows:be=[],measurementRows:re=[],activeCopy:xe="",rows:ve=[]})=>{let ce=G&&G.when!==!1?L(G.key,G):{markup:"",warning:""},de=(Array.isArray(ie)?ie:ee?[ee]:[]).filter(ye=>ye&&ye.when!==!1).map(ye=>L(ye.key,ye)).filter(ye=>ye.markup),qo=de.map(ye=>ye.markup).join(""),Pe=de.map(ye=>ye.warning).find(Boolean)||"",Ve=ve.filter(Boolean).join(""),Ge=`${ce.markup}${qo}`,Qe=ce.warning||Pe,ko=[I({title:"Configuratie",icon:"settings",className:"oq-settings-source-group--config",content:Ge?`
            <div class="oq-settings-source-controls">
              ${Ge}
            </div>
            ${Qe?`<p class="oq-settings-source-warning">${s(Qe)}</p>`:""}
          `:""}),I({title:"Actief",icon:"target",rows:be,copy:xe,className:"oq-settings-source-group--active"}),I({title:"Metingen",icon:"activity",rows:re,className:"oq-settings-source-group--measurements"})].filter(Boolean).join("");return!ko&&!Ge&&!Ve?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s(M||G.key)}">
          <div class="oq-settings-source-card-head">
            ${W?`<span class="oq-settings-source-card-icon">${$e(W,"oq-settings-source-card-icon-svg")}</span>`:""}
            <h4>${s(x)}</h4>
          </div>
          ${ko||`
            ${Ge?`
              <div class="oq-settings-source-controls">
                ${Ge}
              </div>
            `:""}
            ${Qe?`<p class="oq-settings-source-warning">${s(Qe)}</p>`:""}
            ${Ve?`<div class="oq-settings-source-rows">${Ve}</div>`:""}
          `}
        </article>
      `},Z=String(E("waterSupplySource")||""),_=String(E("flowSource")||""),j=String(E("qFlowSource")||""),X=String(E("heatingEnableSource")||"").trim()==="Disabled",We=m("heatingEnableSource",{optionLabels:{Disabled:"Niet gebruiken"}}),yt=String(E("coolingEnableSource")||"").trim()==="Disabled",ct={Disabled:"Niet gebruiken / handmatig",CIC:"CIC (legacy)","CIC or HA input":"CIC of HA-invoer (legacy)"},Dt=m("coolingEnableSource",{optionLabels:ct}),Ue=S("coolingEnableEffectiveSource"),Re=[P({key:"room-temperature",title:"Kamertemperatuur",icon:"thermometer",select:{key:"roomTempSource",label:"Bron",haKeys:["roomTempHa","roomTempHaValid"],mqttTopicKey:"room_temperature"},activeRows:[H({label:"Waarde",key:"roomTemp"}),H({label:"Bron",value:v("roomTempEffectiveSource")})],measurementRows:[t?H({label:"CIC",key:"cicRoomTemp"}):"",r?H({label:"OpenTherm",key:"otRoomTemp"}):"",...U({valueKey:"roomTempHa",validKey:"roomTempHaValid"}),...A({valueKey:"mqttRoomTemperature",validKey:"mqttRoomTemperatureValid"})]}),P({key:"room-setpoint",title:"Kamer setpoint",icon:"target",select:{key:"roomSetpointSource",label:"Bron",haKeys:["roomSetpointHa","roomSetpointHaValid"],mqttTopicKey:"room_setpoint"},activeRows:[H({label:"Waarde",key:"roomSetpoint"}),H({label:"Bron",value:v("roomSetpointEffectiveSource")})],measurementRows:[t?H({label:"CIC",key:"cicRoomSetpoint"}):"",r?H({label:"OpenTherm",key:"otRoomSetpoint"}):"",...U({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"}),...A({valueKey:"mqttRoomSetpoint",validKey:"mqttRoomSetpointValid"})]}),P({key:"water-supply",title:"Aanvoertemperatuur",icon:"droplet",select:{key:"waterSupplySource",label:"Bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:Z==="Local"&&w("localWaterSupplyTempSource")},activeRows:[H({label:"Waarde",key:"supplyTemp"}),H({label:"Bron",value:C()})],measurementRows:[H({label:"Lokale selectie",key:"waterSupplyTempEsp"}),H({label:"PT1000",key:"waterSupplyTempPt1000"}),H({label:"DS18B20",key:"waterSupplyTempDs18b20"}),t?H({label:"CIC",key:"cicWaterSupplyTemp"}):"",...U({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),P({key:"flow-source",title:"Flow",icon:"waves",select:{key:"flowSource",label:"Bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:t||_==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Flowpad",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:_==="Outdoor unit"&&w("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Meterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:_==="Outdoor unit"&&w("outdoorUnitFlowMode")&&(!w("qFlowSource")||j!=="Local")}],activeRows:[H({label:"OpenQuatt-flow",key:"flowSelected"}),H({label:"Bron",value:k()})],measurementRows:[H({label:"Controller-flowmeter",key:"controllerFlow"}),H({label:"Gecombineerd HP1/HP2",key:"flowLocal"}),H({label:"Flowmeter HP1",key:"hp1Flow"}),H({label:"Flowmeter HP2",key:"hp2Flow"}),t?H({label:"CIC",key:"cicFlowrate"}):""]}),P({key:"outside-temperature",title:"Buitentemperatuur",icon:"sun",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],mqttTopicKey:"outside_temperature",infoId:"outsideTempSource-auto-info",infoCopy:i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn buitenunit, HA-invoer en MQTT geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een bron geldig, dan wordt die gebruikt.":"Auto gebruikt de laagste geldige buitentemperatuurbron."},activeRows:[H({label:"Waarde",key:"outsideTempSelected"}),H({label:"Bron",value:$()})],measurementRows:[H({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...U({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"}),...A({valueKey:"mqttOutsideTemperature",validKey:"mqttOutsideTemperatureValid"})]}),P({key:"heating-enable",title:"Warmtetoestemming",icon:"flame",select:{key:"heatingEnableSource",label:"Bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],mqttTopicKey:"heating_enable",keepUnavailableCurrent:!0},activeRows:[H({label:"Toestemming",value:X?"Niet gebruikt":h("heatingEnableSelected","Toegestaan","Geblokkeerd")}),X?"":H({label:"Bron",value:We})],measurementRows:[r?H({label:"OpenTherm",value:h("otThermostatChEnable","Toegestaan","Geblokkeerd")}):"",t?H({label:"CIC",value:h("cicChEnabled","Toegestaan","Geblokkeerd")}):"",...U({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:h("heatingEnableHa","Toegestaan","Geblokkeerd")}),...A({valueKey:"mqttHeatingEnable",validKey:"mqttHeatingEnableValid",value:h("mqttHeatingEnable","Toegestaan","Geblokkeerd")})]}),P({key:"cooling-enable",title:"Koeltoestemming",icon:"snowflake",select:{key:"coolingEnableSource",label:"Bron",optionLabels:ct,hiddenOptions:["CIC","CIC or HA input"],haKeys:["coolingEnableHa","coolingEnableHaValid"],mqttTopicKey:"cooling_enable",keepUnavailableCurrent:!0},activeRows:[H({label:"Toestemming",value:h("coolingEnableSelected","Toegestaan","Geblokkeerd")}),yt?"":H({label:"Bron",value:Dt}),Ue&&Ue!==Dt?H({label:"Via",value:Ue}):""],measurementRows:[H({label:"Handmatig",value:h("manualCoolingEnable","Aan","Uit")}),r?H({label:"OpenTherm",value:h("otThermostatCoolingEnable","Toegestaan","Geblokkeerd")}):"",...U({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:h("coolingEnableHa","Toegestaan","Geblokkeerd")}),...A({valueKey:"mqttCoolingEnable",validKey:"mqttCoolingEnableValid",value:h("mqttCoolingEnable","Toegestaan","Geblokkeerd")})]}),P({key:"cooling-dew-point",title:"Koelingsdauwpunt",icon:"thermometer",select:{key:"coolingDewPointSource",label:"Bron",haKeys:["coolingDewPointHa","coolingDewPointHaValid"],mqttTopicKey:"cooling_dew_point",infoId:"coolingDewPointSource-info",infoCopy:"Auto gebruikt de hoogste geldige waarde als Home Assistant en MQTT tegelijk geldig zijn. Kies Home Assistant of MQTT om die bron expliciet te vereisen."},activeRows:[H({label:"Waarde",key:"coolingDewPointSelected"}),H({label:"Bron",value:z()})],measurementRows:[...U({valueKey:"coolingDewPointHa",validKey:"coolingDewPointHaValid"}),...A({valueKey:"mqttCoolingDewPoint",validKey:"mqttCoolingDewPointValid"})]})].filter(Boolean);return Re.length?oe("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${Re.join("")}</div>`):""}function Pg(){let e=As(),r=o.mqttStatus?.enabled===!0?`
      <section class="oq-settings-mqtt-panel oq-settings-mqtt-panel--sensors oq-settings-mqtt-panel--compact">
        <div class="oq-settings-quickstart-status-row oq-settings-mqtt-status-row">
          <div>
            <p class="oq-settings-quickstart-status-label">MQTT sensoren</p>
            <strong class="oq-settings-quickstart-status-value">${s(e)}</strong>
          </div>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="open-mqtt-sensors-modal"
          >
            Details
          </button>
        </div>
      </section>
    `:"";return oe("Integratie","MQTT inputbronnen","Beheer de brokerverbinding voor externe MQTT-bronwaarden.",`
        <div class="oq-settings-mqtt-shell">
          <section class="oq-settings-mqtt-panel oq-settings-mqtt-panel--broker">
            <div class="oq-settings-field-head">
              <h3>MQTT brokerconfiguratie</h3>
            </div>
            <div class="oq-settings-quickstart-status-row oq-settings-mqtt-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(hd())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(bd())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-mqtt-modal"
              >
                Aanpassen
              </button>
            </div>
          </section>
          ${r}
        </div>
      `)}function Dg(){return oe("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${s(Tn())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(xn())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-login-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="api">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">ESPHome API encryption</p>
                <strong class="oq-settings-quickstart-status-value">${s(Tr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(xr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-api-security-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
        </div>
      `)}function Ng(){let e=De.has(o.settingsGroup)?o.settingsGroup:me[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${me.map(t=>`
          <button
            class="oq-settings-group-button${t.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(t.id)}"
            aria-pressed="${t.id===e?"true":"false"}"
          >
            ${$e(t.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(t.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function Lg(){let e=De.has(o.settingsGroup)?o.settingsGroup:me[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[hg(),bg(),lg(),em(),Qp(),wg(),gg()]:e==="service"?[fg(),Zp()]:e==="heating"?[cg()]:e==="cooling"?[Hg()]:e==="integrations"?[Ag(),Pg(),Rg()]:[vg(),Ym(),Dg(),Zm(),yg()]).filter(Boolean).join("")}
      </div>
    `}function KS(){if(!o.root||o.appView!=="settings")return!1;let e=o.root.querySelector(".oq-settings-group-nav"),t=o.root.querySelector(".oq-settings-group-stack");if(!e||!t)return!1;let r=De.has(o.settingsGroup)?o.settingsGroup:me[0].id;if(r==="service")return!1;let n=e.querySelectorAll(".oq-settings-group-button");if(n.length!==me.length)return!1;n.forEach(g=>{let v=String(g.dataset.groupId||"")===r;g.classList.toggle("is-active",v),g.setAttribute("aria-pressed",v?"true":"false")}),t.querySelectorAll(".oq-settings-info").forEach(g=>{let m=String(g.dataset.oqSettingsInfo||""),v=o.settingsInfoOpen===m;g.classList.toggle("is-open",v);let S=g.querySelector(".oq-settings-info-popover");S&&(S.hidden=!v);let q=g.querySelector(".oq-settings-info-button");q&&q.setAttribute("aria-expanded",v?"true":"false")}),t.querySelectorAll("[data-oq-settings-field]").forEach(g=>{let m=String(g.dataset.oqSettingsField||"");if(!m)return;let v=g.querySelector(".oq-settings-static-value");if(v){let C=F(m);v.textContent!==C&&(v.textContent=C)}g.querySelectorAll("select[data-oq-field]").forEach(C=>{let k=String(C.dataset.oqField||m),$=String(E(k)||"");C.value!==$&&(C.value=$)}),g.querySelectorAll("input[data-oq-field]").forEach(C=>{let k=String(C.dataset.oqField||m),$=String(Ee(k)||"");C.value!==$&&(C.value=$)});let S=g.querySelector(".oq-helper-slider-meta strong"),q=g.querySelector('input[type="range"][data-oq-field]');if(S&&q){let C=Q(m,fe(m,E(m)));S.textContent!==C&&(S.textContent=C)}}),t.querySelectorAll("[data-select-key]").forEach(g=>{let m=String(g.dataset.selectKey||""),v=String(g.dataset.selectOption||""),S=String(E(m)||""),q=v===S;g.classList.toggle("is-active",q),g.setAttribute("aria-pressed",q?"true":"false"),m==="strategy"?g.disabled=o.loadingEntities||o.busyAction==="save-strategy":m==="hpGeneration"?g.disabled=o.loadingEntities||o.busyAction==="save-hpGeneration":m==="curveControlProfile"?g.disabled=o.loadingEntities||o.busyAction==="save-curveControlProfile":m==="phResponseProfile"&&(g.disabled=o.loadingEntities||o.busyAction==="save-phResponseProfile");let C=g.closest(".oq-settings-choice-card-shell");C&&C.classList.toggle("is-active",q)});let a=t.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){let g=String(E("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",g),a.querySelectorAll("input[data-oq-field]").forEach(v=>{let S=String(v.dataset.oqField||""),q=String(Ee(S)||"");v.value!==q&&(v.value=q)})}t.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(g=>{let m=String(g.dataset.controlKey||""),v=!!E(m),S=String(g.dataset.onLabel||"Aan"),q=String(g.dataset.offLabel||"Uit"),C=String(g.dataset.switchTitle||m),k=v?S:q;g.dataset.controlState=v?"off":"on",g.classList.toggle("is-on",v),g.setAttribute("aria-checked",v?"true":"false"),g.setAttribute("aria-label",`${C}: ${k}`),g.disabled=o.loadingEntities||o.busyAction===`switch-${m}`}),t.querySelectorAll("[data-oq-switch-pill]").forEach(g=>{let m=String(g.dataset.oqSwitchPill||""),v=!!E(m),S=String(g.dataset.onLabel||"Aan"),q=String(g.dataset.offLabel||"Uit"),C=v?S:q;g.classList.toggle("is-on",v),g.textContent!==C&&(g.textContent=C)}),t.querySelectorAll("[data-oq-switch-copy]").forEach(g=>{let m=String(g.dataset.oqSwitchCopy||""),v=!!E(m),S=String(g.dataset.onCopy||""),q=String(g.dataset.offCopy||""),C=v?S:q;g.hidden=!C,g.textContent!==C&&(g.textContent=C)});let i=t.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){let g=i.querySelector(".oq-settings-quickstart-status-value"),m=i.querySelector(".oq-settings-quickstart-status-copy"),v=i.querySelector('button[data-oq-action="open-generation-modal"]'),S=ft(),q=o.entities.hpGeneration||{},C=w("hpGeneration")&&Wt(q).length>0;if(g){let k=S||"Onbekend";g.textContent!==k&&(g.textContent=k)}if(m){let k="Pas dit aan als je een andere Quatt Hybrid hebt.";m.textContent!==k&&(m.textContent=k)}v&&(v.disabled=!C||o.loadingEntities||o.busyAction==="save-hpGeneration")}let l=t.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){let g=l.querySelector(".oq-settings-quickstart-status-value"),m=l.querySelector(".oq-settings-quickstart-status-copy"),v=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),S=Ta(),q=T("cm100Active");g&&g.textContent!==S&&(g.textContent=S);let C=q?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";m&&m.textContent!==C&&(m.textContent=C),v&&(v.disabled=o.loadingEntities)}let c=t.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(c){let g=c.querySelector(".oq-settings-quickstart-status-value"),m=c.querySelector(".oq-settings-quickstart-status-copy"),v=c.querySelector('button[data-oq-action="reset"]'),S=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",q=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";g&&g.textContent!==S&&(g.textContent=S),m&&m.textContent!==q&&(m.textContent=q),v&&(v.disabled=o.busyAction==="reset")}let p=t.querySelectorAll("[data-oq-access-security-item]");p.length&&p.forEach(g=>{let m=String(g.dataset.oqAccessSecurityItem||""),v=g.querySelector(".oq-settings-quickstart-status-value"),S=g.querySelector(".oq-settings-quickstart-status-copy"),q=g.querySelector("button[data-oq-action]");if(m==="login"){let C=Tn(),k=xn();v&&v.textContent!==C&&(v.textContent=C),S&&S.textContent!==k&&(S.textContent=k)}else if(m==="api"){let C=Tr(),k=xr();v&&v.textContent!==C&&(v.textContent=C),S&&S.textContent!==k&&(S.textContent=k)}q&&(q.disabled=!1)});let u=t.querySelector(".oq-settings-system-summary");if(u){let g=u.querySelectorAll(".oq-settings-system-row"),m={uptime:hr(),ip:br(),updates:mo(),datetime:Ea(),espTemp:ai(),restart:"Opnieuw opstarten"};g.forEach(q=>{let C=q.querySelector(".oq-settings-system-row-value"),k=q.dataset.oqDiagnosticsRow||"";if(C&&Object.prototype.hasOwnProperty.call(m,k)){let $=m[k];C.textContent!==$&&(C.textContent=$)}});let v=u.querySelector('button[data-oq-action="open-update-modal"]');v&&(v.disabled=!1);let S=u.querySelector('button[data-oq-action="open-restart-confirm"]');if(S){let q=o.busyAction==="restartAction";S.disabled=q,S.textContent=q?"Herstarten...":"Herstarten"}}t.querySelectorAll(".oq-settings-hp-offset-row").forEach(g=>{let m=String(g.dataset.oqSettingsField||""),v=String(g.dataset.oqHpOffsetRawKey||""),S=String(g.dataset.oqHpOffsetFinalKey||"");if(!m||!v||!S)return;let q=Le(m),C=$n(v,S,m),k=Me(Ee(m)),$=Number.isFinite(C)&&Number.isFinite(k)?jt(C+k,q.uom||"\xB0C",2):qe(S,2),D=g.querySelector("[data-oq-hp-offset-active]");if(D){let H=`${qe(S,2)} actief`;D.textContent!==H&&(D.textContent=H)}let N=g.querySelector("[data-oq-hp-offset-raw]");if(N){let H=Number.isFinite(C)?jt(C,q.uom||"\xB0C",2):qe(v,2);N.textContent!==H&&(N.textContent=H)}let z=g.querySelector("[data-oq-hp-offset-final]");z&&z.textContent!==$&&(z.textContent=$)});let d=t.querySelector(".oq-settings-curve-shell"),b=ne();if(!!d!==b)return!1;let y=!!a,h=String(E("phResponseProfile")||"")==="Custom";return y===h}id({patch:KS});function zS({label:e,value:t,tone:r,note:n,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(r)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(t)}</strong>
        <span>${s(n)}</span>
      </article>
    `}function Wn(e,t=!1){return e.map(r=>zS({...r,value:Object.prototype.hasOwnProperty.call(r,"key")?Xe(r.key):r.value,status:t})).join("")}function oc(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function rc(){let e=It();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(we(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(t=>t.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function Ig({className:e,title:t,copy:r,body:n,signature:a=""}){let i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${t?`<div class="oq-overview-system-copy"><h3>${s(t)}</h3><p>${s(r)}</p></div>`:""}
        ${n}
      </section>
    `}function Og(e){let t=String(e||"").trim();return{None:"geen bron",Manual:"handmatig",Disabled:"handmatig","HA input":"HA-invoer",MQTT:"MQTT","OT thermostat":"OpenTherm","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OpenTherm + handmatig"}[t]||t}function In(e,t){return!t||t==="geen bron"?e:`${e} Toestemming: ${t}.`}function nc(e,t){return t?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function US(e,t){let r=t?"active":"neutral",n=nc(e,t);return`<span class="oq-overview-chip oq-overview-chip--${s(r)}" data-oq-bind="panel-status">${s(n)}</span>`}function GS(e){return`
      <span
        class="oq-overview-chip oq-overview-chip--warning"
        data-oq-bind="panel-warning"
        tabindex="0"
        aria-label="${s(`Waarschuwing: ${e}`)}"
      >
        <svg class="oq-overview-chip-warning-icon" viewBox="0 0 20 18" aria-hidden="true">
          <path d="M10 1.6 L18.2 16.4 H1.8 Z" />
          <rect x="9.1" y="5.4" width="1.8" height="5.8" rx="0.9" />
          <circle cx="10" cy="13.6" r="1.1" />
        </svg>
        <span>Waarschuwing</span>
        <span class="oq-overview-chip-warning-tooltip" role="tooltip">${s(e)}</span>
      </span>
    `}function ac(e,t,r,n){return`${r?GS(n):""}${US(e,t)}`}function jg(e,t,r,n,a){if(!e)return;let i=we({mode:t,running:r,warningActive:n,failureText:a});e.dataset.renderSignature!==i&&(Ht(e,ac(t,r,n,a)),e.dataset.renderSignature=i)}function ui(e,t,r=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(r||F(t))}</strong>
      </div>
    `}function QS(e,t,r="blue",n=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(r)}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${n?`<p>${s(n)}</p>`:""}
      </article>
    `}function YS(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function JS(e){if(!Number.isFinite(e)||e<0)return"\u2014";let t=Math.floor(e),r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function ZS(e){let r=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!r)return Number.NaN;let n=Number(r[1]),a=Number(r[2]);return Number.isNaN(n)||Number.isNaN(a)||n<0||n>23||a<0||a>59?Number.NaN:n*60+a}function XS(e){let t=ZS(F("timeNowHhmm",""));if(!Number.isFinite(t))return"";let r=Math.round(e),n=((t-r)%1440+1440)%1440,a=Math.floor(n/60),i=n%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function eq(e,t){let r=Math.max(0,(Number(t)-Number(e))/6e4),n=JS(r),a=w("timeValid")&&T("timeValid")?XS(r):"";return a?{value:a,note:`${n} geleden`}:{value:`${n} geleden`,note:"Geen tijdsync"}}function tq(e){let t=Number(e);return Number.isNaN(t)?"\u2014":`${t>0?"+":t<0?"-":""}${Math.abs(t).toFixed(0)} W`}function Wg(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>w(e))||""}function oq(){return["hp1WaterIn","hp2WaterIn"].find(e=>w(e))||""}function Vg(e=F("controlModeLabel","")){let t=String(e||"").toLowerCase();return t.includes("cm5")||t.includes("cooling")||t.includes("koeling")}function Rt(){return Vg()}function Bg(e,t){let r=String(e||"").trim().toLowerCase();return r==="waiting for room request"||r==="wacht op kamervraag"||r==="cooling enabled, waiting for room temperature above cooling setpoint"||r==="koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint"?!0:t?!1:r==="flow too low"||r==="flow te laag"||r==="flow unavailable"}function ic(){return Rt()?"Koeling":ne()?"Stooklijn":"Power House"}function rq(){let e=["phouseReq","strategyRequestedPower"];for(let t of e){let r=R(t);if(!Number.isNaN(r))return r}return Number.NaN}function Kg(){let e=rq(),t=R("phouseHouse"),r=R("totalHeat"),n=R("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:e-t,i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(n)&&e>n+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(r)&&r<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&r>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:B(e,0,"W"),houseText:B(t,0,"W"),correctionText:tq(a),capacityText:Xe("hpCapacity"),statusTitle:i,statusCopy:l}}function zg(){let e=R("curveSupplyTarget"),t=R("supplyTemp"),r=Wg(),n=r?R(r):Number.NaN,a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:t-e,i=!!r&&Number.isNaN(n),l="Stuurt op buitentemperatuur",c="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",c="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",c="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",c="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",c="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:Xe("curveSupplyTarget"),supplyText:Xe("supplyTemp"),deltaText:YS(a),capacityText:Xe("hpCapacity"),statusTitle:l,statusCopy:c}}function Ug(){let e=R("supplyTemp"),t=F("coolingGuardMode",""),r=F("coolingFallbackNightMinOutdoorTemp","\u2014"),n=R("coolingSupplyError"),a=R("coolingDemandRaw"),i=T("coolingPermitted"),l=T("coolingRequestActive"),c=F("coolingBlockReason","Onbekend"),p=Zl(c),u=Bg(c,l),d="Wacht op koelvraag",b="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return u?(d="Wacht op koelvraag",b="Koeling is toegestaan en wacht tot de kamertemperatuur boven het koel-setpoint komt."):i?l?!Number.isNaN(a)&&a<=0?(d="Houdt doel vast",b="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(n)&&n>1?(d="Trekt aanvoer omlaag",b="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(n)&&n>.2?(d="Benadert koeldoel",b="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(n)||(d="Koelt rustig door",b="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(d="Koeling gereed",b="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(d="Koeling geblokkeerd",b=`Blokkade: ${p}.`),{targetText:Xe("coolingSupplyTarget"),supplyText:Xe("supplyTemp"),safeFloorText:Xe("coolingEffectiveMinSupplyTemp"),guardMode:t,fallbackNightMin:r,demandText:Xe("coolingDemandRaw"),statusTitle:d,statusCopy:b,permitted:i,requestActive:l,blockReason:p,waitingForRoomRequest:u}}function di(){if(Rt()){let t=Ug(),r=t.guardMode.toLowerCase(),n=r.includes("user responsibility"),a=r.includes("fallback");return{title:"Koelregeling",copy:n?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:t.targetText,focusCopy:t.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:n?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:t.safeFloorText,tone:"blue",note:n?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${t.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:t.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(ne()){let t=zg();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:t.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:t.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:t.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}let e=Kg();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function sc(e){return Ig({className:"oq-overview-system",title:e.title,copy:e.copy,signature:we(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(t=>QS(t.label,t.value,t.tone,t.note)).join("")}
        </div>
      `})}function nq(){if(!T("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(Rt()){let n=Ug(),a=n.waitingForRoomRequest?"neutral":n.permitted?n.statusTitle==="Koelt rustig door"||n.statusTitle==="Houdt temperatuur vast"?"green":n.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:n.statusTitle,tone:a}}if(qm())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};let t=(ne()?zg():Kg()).statusTitle;return{label:"Regeling nu",value:t,tone:t==="In balans"||t==="Dicht bij doel"?"green":t==="Nog aan het opbouwen"||t==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function aq(){return T("openquattEnabled")?Rt()?T("coolingPermitted")?T("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:F("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:T("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:T("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function lc(e,t){let r=nq(),n=aq();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:t,tone:"orange",note:"actieve modus"},{label:"Regeling",value:r.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:n.value,tone:"orange",note:"actieve randvoorwaarde"}]}function cc(e,t){let r=lc(e,t);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(we(r))}">
        ${oc("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${Wn(r,!0)}
        </div>
      </section>
    `}function uc(){let e=Rt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function iq(){let e=T("openquattEnabled"),t=E("openquattResumeAt"),r=tn(t),n=(o.loadingEntities||o.entitySyncInFlight)&&!w("openquattResumeAt"),a=T("manualCoolingEnable"),i=w("coolingEnableSelected")?T("coolingEnableSelected"):a,l=Og(F("coolingEnableEffectiveSource","")),c=String(E("coolingEnableSource")||"").trim(),p=Og(E("coolingEnableSource")),u=String(E("silentModeOverride")||"Schedule"),d=!T("coolingPermitted"),b=T("coolingRequestActive"),y=Vg(),h=F("coolingBlockReason",""),g=Bg(h,b),m="Uit",v=c==="Disabled"?"Koeling is niet toegestaan: handmatig staat uit.":p&&p!=="geen bron"?`Koeling is niet toegestaan: ${p} geeft geen toestemming en handmatig staat uit.`:"Koeling is niet toegestaan.";i&&y?(m="Actief",v=In("Koeling draait nu.",l)):i&&g?(m="Aan",v=In("Koeling is toegestaan en wacht op kamertemperatuur boven het koel-setpoint.",l)):i&&d?(m="Geblokkeerd",v=In(Zl(h||"Koeling wacht nog op veilige condities."),l)):i&&b?(m="Start bijna",v=In("Er is koelvraag. Koeling start zodra dat kan.",l)):i&&(m="Aan",v=In("Koeling is toegestaan en wacht op koelvraag.",l));let S="Uit",q="Stille modus staat uit.",C="neutral";return u==="On"?(S="Aan",q="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",C="orange"):u==="Schedule"&&(S="Schema",T("silentActive")?(q="Stille modus staat nu aan via het tijdvenster.",C="violet"):q="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":r?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[n?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:r?"Hervat automatisch":"Hervatten",value:r?ur(t,!0):"Handmatig",tone:r?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:m,copy:v,buttonLabel:a?"Handmatig uit":"Handmatig aan",nextState:a?"off":"on",tone:i?y?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:S,copy:q,tone:C,kind:"select",selectedOption:u,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(k=>w(k.key))}function sq(e=[]){return e.length?`
      <div class="oq-overview-controlpanel-meta">
        ${e.map(t=>`
          <div class="oq-overview-controlpanel-meta-item oq-overview-controlpanel-meta-item--${s(t.tone||"neutral")}${t.loading?" oq-overview-controlpanel-meta-item--loading":""}">
            <span>${s(t.label)}</span>
            <strong>${t.loading?`
              <span class="oq-overview-controlpanel-loading">
                <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
                <span>${s(t.value)}</span>
              </span>
            `:s(t.value)}</strong>
          </div>
        `).join("")}
      </div>
    `:""}function jr({className:e,action:t,label:r,busy:n=!1,loading:a=!1,attrs:i=""}){return`
      <button
        class="${e}${n?" is-busy":""}"
        type="button"
        ${t?`data-oq-action="${s(t)}"`:""}
        ${i}
        ${o.busyAction||a?"disabled":""}
      >${a?`
        <span class="oq-overview-controlpanel-loading">
          <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
          <span>${s(r)}</span>
        </span>
      `:s(n?"Bezig...":r)}</button>
    `}function lq(e){if(e.kind==="openquatt-control"){let t=o.busyAction==="openquatt-regulation",r=(o.loadingEntities||o.entitySyncInFlight)&&!w("openquattResumeAt");return T("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${jr({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:t})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${jr({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:t})}
            ${jr(r?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:tn()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){let t=o.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(r=>jr({className:`oq-overview-controlpanel-segment${e.selectedOption===r.value?" is-selected":""}`,action:"select-overview-control-option",label:r.label,busy:t,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(r.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${jr({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:o.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function dc(){let e=iq();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${oc("Bediening")}
        ${e.map(t=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(t.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(t.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(t.tone)}">${s(t.status)}</strong>
            </div>
            <p>${s(t.copy)}</p>
            ${sq(t.meta)}
            ${lq(t)}
          </article>
        `).join("")}
      </section>
    `:""}function Gg(e){let t=F("controlModeLabel");return`
      <section class="oq-overview-summary-shell">
        <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Overzicht</p>
            <h2 class="oq-helper-section-title">Live regeling</h2>
            <p class="oq-helper-section-copy">Hier zie je in \xE9\xE9n oogopslag hoe OpenQuatt nu werkt.</p>
          </div>
        </div>
        <div class="oq-overview-summary-layout">
          <div class="oq-overview-summary-main">
            <section class="oq-overview-kpis" aria-label="Kerncijfers">
              ${oc("Kerncijfers")}
              <div class="oq-overview-top">
                ${Wn(uc())}
              </div>
            </section>
            ${cc(e,t)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(ba())}">
            ${dc()}
          </aside>
        </div>
      </section>
    `}function pi(){let e=Wg(),t=oq();return Rt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...t?[{label:"Retourtemperatuur",key:t}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function pc(e=pi()){return we({...e,values:e.rows.map(t=>t.value||F(t.key))})}function mc(){let e=pi();return Ig({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:pc(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(t=>ui(t.label,t.key,t.value||"")).join("")}
        </div>
      `})}var _g=360,cq=100;function Yt(){let e=Hn(o.trendWindowHours||kt);return e!==o.trendWindowHours&&Hr(e),e}function Qg(e=Yt()){return Math.max(1,Number(e)||24)*60*60*1e3}function uq(e=Yt()){let t=Number(e)||24;return t>=72&&t%24===0?`${t/24}d`:`${t}u`}function gc(e=Yt()){let t=Number(e)||24;if(t>=72&&t%24===0){let r=t/24;return`${r} ${r===1?"dag":"dagen"}`}return`${t} uur`}function Xl(e){if(!Number.isFinite(e))return"\u2014";let t=new Date(e);if(Number.isNaN(t.getTime()))return"\u2014";let r={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(t)}catch{return t.toLocaleString("nl-NL",r)}}function dq(e){let t=String(e||"").trim().split("|");if(t.length<5)return null;let r=Number(t[0]);if(!Number.isFinite(r))return null;let n=a=>{let i=Number(a);return Number.isFinite(i)?i:null};return{t:r,outside:n(t[1]),supply:n(t[2]),room:t.length>=8?n(t[3]):null,roomSetpoint:t.length>=8?n(t[4]):null,flow:t.length>=8?n(t[5]):null,input:t.length>=8?n(t[6]):n(t[3]),output:t.length>=8?n(t[7]):n(t[4])}}function tc(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function ec(e=Yt()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function Yg(){let e=Qg(),t=String(o.trendHistoryRaw||"").trim();if(!t)return tc()?ec():[];let r=t.split(/\r?\n/).map(dq).filter(Boolean),n=r.length?r[r.length-1].t:Number.NaN,a=Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:Number.isFinite(n)?n:Number.NaN;if(!Number.isFinite(a))return r.length?r.slice(-_g):ec();let i=Math.max(0,a-e),l=r.filter(c=>c.t>=i).slice(-_g);return l.length?l:tc()?ec(windowHours):[]}function fc(){let e=Yt(),t=gc(e),r=Yg(),n=tc()&&r.length===0,a=Rt();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${t}.`,tone:"orange",samples:r,mock:n,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${t}.`,tone:"green",samples:r,mock:n,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${t}.`,tone:"slate",samples:r,mock:n,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{let l=Number(i?.input),c=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(c)||l<cq?Number.NaN:c/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${t}.`,tone:"blue",samples:r,mock:n,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${t}.`,tone:"sky",samples:r,mock:n,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function pq(e){let t=e.samples[e.samples.length-1]||null;return we({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:t?.t||0,trendSignature:o.trendHistorySignature||"",latestValues:t?[t.outside,t.supply,t.room,t.roomSetpoint,t.flow,t.input,t.output]:[]})}function jn(e,t){if(!e||!t)return Number.NaN;let r=typeof e.derive=="function"?e.derive(t):t?.[e.sampleKey],n=Number(r);return Number.isFinite(n)?n:Number.NaN}function mq(e,t){let r=[];return e.forEach(n=>{t.forEach(a=>{let i=jn(a,n);Number.isFinite(i)&&r.push(i)})}),r.length?{min:Math.min(...r),max:Math.max(...r)}:{min:0,max:1}}function gq(e){if(!Number.isFinite(e)||e<=0)return 1;let t=Math.floor(Math.log10(e)),r=e/10**t,n;return r<=1?n=1:r<=2?n=2:r<=5?n=5:n=10,n*10**t}function fq(e,t){let r=Number.isFinite(e?.min)?e.min:0,n=Number.isFinite(e?.max)?e.max:1,a=Math.max(n-r,1),i=Array.isArray(t)?t.map(y=>Number(y?.axisMin)).find(y=>Number.isFinite(y)):Number.NaN,l=Array.isArray(t)?t.map(y=>Number(y?.axisMax)).find(y=>Number.isFinite(y)):Number.NaN,c=Array.isArray(t)?t.map(y=>Number(y?.axisTickStep)).find(y=>Number.isFinite(y)&&y>0):Number.NaN,p=Math.max(1,Number.isFinite(c)?c:gq(a/4)),u=[];if(Number.isFinite(i)||Number.isFinite(l)){let y=Number.isFinite(i)?i:0,h=Number.isFinite(l)?l:Math.ceil(n/p)*p,g=Math.floor(y/p)*p,m=Math.ceil(h/p)*p;for(let v=g;v<=m+p*.5;v+=p)u.push(v)}else{let y=a/p,h=y<=1.8?3:y<=4.25?5:7,g=Math.floor(h/2),m=(r+n)/2,v=Math.round(m/p)*p;for(let S=-g;S<=g;S+=1)u.push(v+S*p)}let d=u[0],b=u[u.length-1];return{ticks:u,axisMin:d,axisMax:b,axisDecimals:0}}function Jg(e,t,r={}){let n=Number(r.windowHours),a=Number.isFinite(n)?n:Yt(),i=Qg(a),l=640,c=220,p=46,u=18,d=18,b=34,y=l-p-u,h=c-d-b,g=e[e.length-1],m=!!r.mockData,v=m?i:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:g?g.t:0,S=m?0:v-i,q=Math.max(v-S,1),C=q,k=mq(e,t),$=k.min===k.max?{min:k.min-1,max:k.max+1}:{min:k.min-Math.max((k.max-k.min)*.12,1),max:k.max+Math.max((k.max-k.min)*.12,1)},D=fq(k,t),N=P=>p+(P-S)/q*y,z=P=>{if(!Number.isFinite(P))return Number.NaN;let Z=(P-$.min)/Math.max($.max-$.min,1);return d+(1-Math.min(1,Math.max(0,Z)))*h},H=[0,.5,1].map(P=>p+y*P),U=D.ticks.map(P=>z(P)),A=D.ticks.map((P,Z)=>({x:p-10,y:U[Z],text:B(P,D.axisDecimals)})),I=e.map(P=>{let Z=N(P.t),_=t.map(j=>{let X=jn(j,P);return Number.isFinite(X)?{seriesId:j.id||j.sampleKey||j.label,tone:j.tone,label:j.label,decimals:j.decimals,unit:j.unit,value:X,x:Z,y:z(X)}:null});return{sample:P,x:Z,values:_}}),L=t.flatMap(P=>{let Z=[],_=[];return e.forEach(j=>{let X=jn(P,j);if(!Number.isFinite(X)){_.length&&(Z.push(_),_=[]);return}_.push({x:N(j.t),y:z(X)})}),_.length&&Z.push(_),Z.map(j=>j.length<2?{tone:P.tone,points:j,path:""}:{tone:P.tone,points:j,path:j.map((X,We)=>`${We===0?"M":"L"} ${X.x.toFixed(1)} ${X.y.toFixed(1)}`).join(" ")})});return{width:l,height:c,left:p,right:u,top:d,bottom:b,plotWidth:y,plotHeight:h,latest:g,uptimeMs:C,endTime:v,startTime:S,span:q,windowHours:a,range:k,displayRange:$,gridXs:H,gridYs:U,yAxisLabels:A,points:I,tracks:L,series:t}}function mi(){return we({windowHours:Yt(),trendSignature:o.trendHistorySignature||"",trendNowMs:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:0,coolingActive:Rt()})}function hq(e){return fc().find(t=>t.id===e)||null}function bq(e,t){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let r=0,n=Math.abs(e.points[0].x-t);return e.points.forEach((a,i)=>{let l=Math.abs(a.x-t);l<n&&(r=i,n=l)}),r}function vq(e,t){let r=Zg(e,t);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(B(r,e.decimals,e.unit))}</strong>
      </div>
    `}function Zg(e,t){if(e?.currentKey&&w(e.currentKey)){let r=R(e.currentKey);if(Number.isFinite(r))return r}return jn(e,t)}function hc(e){e&&fc().forEach(t=>{let r=e.querySelector(`[data-oq-trend-card="${t.id}"]`),n=t.samples[t.samples.length-1]||null;r&&t.series.forEach(a=>{let l=r.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),c=B(Zg(a,n),a.decimals,a.unit);l&&l.textContent!==c&&(l.textContent=c)})})}function yq(e,t,r=!1,n=Yt()){let a=Jg(e,t,{mockData:r,windowHours:n}),i=gc(n),l=Xl(a.startTime),c=Xl(a.startTime+a.span/2),p=Xl(a.endTime),u=a.tracks.flatMap(d=>{if(d.points.length<2){let b=d.points[0];return b?`
          <circle
            cx="${b.x.toFixed(1)}"
            cy="${b.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${s(d.tone)}"
          ></circle>
        `:[]}return`
        <path d="${d.path}" class="oq-overview-trend-line oq-overview-trend-line--${s(d.tone)}"></path>
        <circle
          cx="${d.points[d.points.length-1].x.toFixed(1)}"
          cy="${d.points[d.points.length-1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${s(d.tone)}"
        ></circle>
      `}).join("");return`
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="Trendgrafiek van de laatste ${i}">
        <rect x="0" y="0" width="${a.width}" height="${a.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${a.gridXs.map(d=>`<line x1="${d.toFixed(1)}" y1="${a.top}" x2="${d.toFixed(1)}" y2="${a.height-a.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${a.gridYs.map(d=>`<line x1="${a.left}" y1="${d.toFixed(1)}" x2="${a.width-a.right}" y2="${d.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${u}
        ${a.yAxisLabels.map(d=>`
          <text
            x="${d.x}"
            y="${d.y.toFixed(1)}"
            class="oq-overview-trend-axis-label oq-overview-trend-axis-label--y"
            text-anchor="end"
            dominant-baseline="middle"
          >${s(d.text)}</text>
        `).join("")}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.height-a.bottom}" class="oq-overview-trend-hover-line"></line>
          ${t.map(d=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${s(d.tone)}"
              data-oq-trend-hover-dot="${s(d.id||d.sampleKey||d.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${s(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(c)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(p)}</text>
      </svg>
    `}function wq(e){let t=e.samples[e.samples.length-1]||null,r=gc(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(pq(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(r)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(n=>vq(n,t)).join("")}
            </div>
          </div>
        </div>
        ${yq(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function gi(){let e=fc();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(mi())}">
        <div class="oq-overview-trends-grid">
          ${e.map(wq).join("")}
        </div>
      </section>
    `}function Sq(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function qq(){let e=Yt(),t=fl();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${Ro.map(r=>`
          ${(()=>{let a=r>168&&!t,i=r/24,l=a?`Beschikbaar zodra er minimaal ${i} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===r?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${r}"
            aria-pressed="${e===r?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${l?`title="${s(l)}"`:""}
          >${s(uq(r))}</button>
        `})()}
        `).join("")}
      </div>
    `}function kq(){let e="overview-trends-history",t=o.settingsInfoOpen===e;return`
      <div class="oq-settings-info oq-overview-trends-info${t?" is-open":""}" data-oq-settings-info="${s(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${s(e)}"
          aria-label="${s("Uitleg bij Diagnose")}"
          aria-expanded="${t?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${t?"":"hidden"}>
          <p>${s("De waarden boven de grafieken zijn live. De grafieken bewaren elke 5 minuten een meetpunt, standaard 7 dagen in het werkgeheugen. Met flashopslag blijft historie ook na herstart of OTA beschikbaar, tot 30 dagen terug.")}</p>
        </div>
      </div>
    `}function Xg(){let e=dt(),r=Yg().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${kq()}
          </div>
          <div class="oq-overview-head oq-overview-trends-head">
            <div>
              <p class="oq-helper-label">Diagnose</p>
              <h2 class="oq-helper-section-title">Technische trends</h2>
              <p class="oq-helper-section-copy">Analyseer temperaturen, vermogen, flow en statuslijnen voor troubleshooting.</p>
            </div>
            <div class="oq-overview-trends-meta">
              ${e?`
                <div class="oq-overview-trends-window">
                  <span>Venster</span>
                  ${qq()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&r?gi():Sq()}
        </div>
      </section>
    `}function Cq(){if(!o.root||o.appView!=="diagnosis")return!1;let e=o.root.querySelector(".oq-overview-board");if(!e)return!1;let t=e.querySelector(".oq-overview-trends");return t?(nt(t,mi(),gi()),hc(e),Vn(e),!0):!1}function bc(e){if(!e)return null;let t=e.__oqTrendHoverNodes;if(t&&t.chart&&t.hoverLayer&&t.hoverPanel)return t;let r=e.querySelector("[data-oq-trend-hover-layer]"),n={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:r,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:r?r.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return r&&r.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{n.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=n,n}function Fg(e,t,r,n=bc(e)){if(!e||!t||!Array.isArray(t.points)||t.points.length===0)return;let a=Math.max(0,Math.min(t.points.length-1,r)),i=t.points[a];if(!i||!n||!n.chart||!n.hoverLayer||!n.hoverPanel||!n.hoverTime||!n.hoverNote||!n.hoverValues)return;let l=String(a);if(!n.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;let c=eq(i.sample.t,t.endTime);n.hoverPanel.hidden=!1,n.hoverLayer.removeAttribute("hidden"),n.hoverTime.textContent=c.value,n.hoverNote.textContent=c.note,n.hoverLine&&(n.hoverLine.setAttribute("x1",i.x.toFixed(1)),n.hoverLine.setAttribute("x2",i.x.toFixed(1)));let p=[];t.series.forEach(u=>{let d=jn(u,i.sample),b=u.id||u.sampleKey||u.label,y=n.hoverDots[b];if(!Number.isFinite(d)){y&&y.setAttribute("display","none");return}let h=i.values.find(g=>g.seriesId===b);y&&h&&(y.removeAttribute("display"),y.setAttribute("cx",h.x.toFixed(1)),y.setAttribute("cy",h.y.toFixed(1))),p.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(u.tone)}">
          <span>${s(u.label)}</span>
          <strong>${s(B(d,u.decimals,u.unit))}</strong>
        </div>
      `)}),n.hoverValues.innerHTML=p.join(""),e.dataset.oqTrendHoverIndex=l}function Eq(e){if(!e)return;let t=bc(e);t?.hoverPanel&&(t.hoverPanel.hidden=!0),t?.hoverLayer&&t.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function Vn(e=o.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(r=>{let n=r.dataset.renderSignature||"";if(r.__oqTrendBoundSignature===n)return;typeof r.__oqTrendCleanup=="function"&&r.__oqTrendCleanup(),r.__oqTrendHoverNodes=null,r.__oqTrendBoundSignature=n;let a=r.querySelector(".oq-overview-trend-chart");if(!a)return;let i=hq(r.dataset.oqTrendCard);if(!i)return;let l=Jg(i.samples,i.series,{mockData:i.mock});r.__oqTrendModel=l;let c=bc(r),p=0,u=null,d=()=>{let h=u;u=null,p=0;let g=a.getBoundingClientRect();if(!g.width||!g.height)return;let m=Number(h?.clientX);if(!Number.isFinite(m)){Fg(r,l,l.points.length-1,c);return}let S=Math.min(g.width,Math.max(0,m-g.left))/g.width*l.width,q=bq(l,S);Fg(r,l,q,c)},b=h=>{u=h,p||(p=window.requestAnimationFrame(d))},y=()=>{p&&(window.cancelAnimationFrame(p),p=0),u=null,Eq(r)};a.addEventListener("pointermove",b),a.addEventListener("pointerenter",b),a.addEventListener("pointerleave",y),a.addEventListener("focus",b),a.addEventListener("blur",y),a.addEventListener("touchstart",b,{passive:!0}),r.__oqTrendCleanup=()=>{p&&(window.cancelAnimationFrame(p),p=0),u=null,a.removeEventListener("pointermove",b),a.removeEventListener("pointerenter",b),a.removeEventListener("pointerleave",y),a.removeEventListener("focus",b),a.removeEventListener("blur",y),a.removeEventListener("touchstart",b)}})}gr({patchDiagnosisDom:Cq});function Mc(e,t,r){let n=Hc(F(t.mode,"Unknown")),a=T(t.defrost),i=ao(F(t.failures,"None")),l=wa(i),c=n==="Verwarmen"||n==="Koelen"||a;return{mode:n,defrostActive:a,failures:i,warningFailures:l,running:c,thermalKey:n==="Koelen"?t.cooling:t.heat,schematic:Nq(e,t,r,n,a,l,c)}}function uf(e,t=null){return`<h3>${s(e)}</h3>${t?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(t.layout)}">${jq(t.layout==="equal"?"minus":"plus")}<span>${s(t.label)}</span></button>`:""}`}function wc(e,t,r,n){return`<div class="oq-overview-hp-status">${ac(e,t,r,n)}</div>`}function Tq(e,t){return t?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function df(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(t=>`${t.title} ${Tq(Hc(F(t.keys.mode,"Unknown")),T(t.keys.defrost))}`).join(", "))}</p>`}function xq(e){let t=o.entities[e];if(!t)return"Positie: \xE2\u20AC\u201D";let r=R(e);return Number.isNaN(r)?`Positie: ${F(e)}`:`Positie: ${B(r,0,t.uom||"")}`}function $q(e){return w(e)?`Positie: ${T(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function Hc(e){let t=String(e||"").trim();return!t||t==="Unknown"?"Onbekend":t==="Standby"?"Stand-by":t==="Heating"?"Verwarmen":t==="Cooling"?"Koelen":t}function Sc(e,t,r,n=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(t)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(r)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(r)}" />
        ${n?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(r)}" />`:""}
      </g>
    `}function Mq(e,t,r){return e==="temperature"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-mdi" d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V12H11V5A1 1 0 0 1 12 4Z" />
        </svg>
      `:e==="pressure"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z"
          />
        </svg>
      `:e==="defrost"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z"
          />
        </svg>
      `:e==="flow"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 8.2 C5.1 6.8 6.8 6.8 8.4 8.2 C10 9.6 11.7 9.6 13.3 8.2 C14.4 7.2 15.6 7 16.5 7.1" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 12.1 C5.1 10.7 6.8 10.7 8.4 12.1 C10 13.5 11.7 13.5 13.3 12.1 C14.4 11.1 15.6 10.9 16.5 11" />
        </svg>
      `:e==="fan"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.7" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 3.1 C12.1 5 12.4 6.7 10.9 9.1 C9 8.9 8.1 7.7 8.2 6.1 C8.3 4.7 8.9 3.7 10 3.1 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M16.9 10 C15 12.1 13.3 12.4 10.9 10.9 C11.1 9 12.3 8.1 13.9 8.2 C15.3 8.3 16.3 8.9 16.9 10 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 16.9 C7.9 15 7.6 13.3 9.1 10.9 C11 11.1 11.9 12.3 11.8 13.9 C11.7 15.3 11.1 16.3 10 16.9 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M3.1 10 C5 7.9 6.7 7.6 9.1 9.1 C8.9 11 7.7 11.9 6.1 11.8 C4.7 11.7 3.7 11.1 3.1 10 Z" />
        </svg>
      `:e==="eev"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="4.5,5.1 10,10 4.5,14.9" />
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="15.5,5.1 10,10 15.5,14.9" />
        </svg>
      `:e==="fourway"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${t-10}"
          y="${r-10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <rect class="oq-hp-tech-tooltip-icon-stroke" x="7" y="7" width="6" height="6" rx="1.8" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M10 3.5 V7 M10 13 V16.5 M3.5 10 H7 M13 10 H16.5" />
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.5" />
        </svg>
      `:`
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${t-10} ${r-10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `}function zn({bind:e,modifier:t,x:r,y:n,width:a,kicker:i,detail:l,detailBind:c="",icon:p="heater",direction:u="down"}){let b=r+26,y=n+22,h=c?` data-oq-bind="${s(c)}"`:"",g="";if(u==="up"){let m=r+Math.round(a*.52);g=`M${m-6} ${n} L${m} ${n-8} L${m+6} ${n} Z`}else if(u==="left"){let m=n+Math.round(22);g=`M${r} ${m-6} L${r-8} ${m} L${r} ${m+6} Z`}else if(u==="right"){let m=n+Math.round(22);g=`M${r+a} ${m-6} L${r+a+8} ${m} L${r+a} ${m+6} Z`}else{let m=r+Math.round(a*.52);g=`M${m-6} ${n+44} L${m} ${n+44+8} L${m+6} ${n+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(t)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${r}" y="${n}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${b}" cy="${y}" r="11.5" />
        ${Mq(p,b,y)}
        <text class="oq-hp-tech-tooltip-kicker" x="${r+48}" y="${n+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${r+48}" y="${n+32}"${h}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${g}" />
      </g>
    `}function qc({bind:e,x:t,y:r,width:n,value:a,label:i,ariaLabel:l="",align:c="start"}){let p=l||`${i} temperatuur ${a}`,u=c==="end",d=c==="center",b=d?"middle":u?"end":"start",y=d?t+n/2:u?t+n-2:t+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(p)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${t}" y="${r}" width="${n}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${y}" y="${r+13}" text-anchor="${b}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function Hq({tooltip:e,...t}){return`${qc(t)}${zn({bind:t.bind,...e})}`}function Aq({bind:e,ariaLabel:t,x:r,y:n,width:a,height:i,rx:l,tooltip:c}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(t)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${r}" y="${n}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${zn({bind:e,...c})}
    `}function vc({bind:e,className:t,active:r,ariaLabel:n,attrs:a="",activeClass:i="is-active",content:l,tooltip:c}){return`
      <g class="${[t,r&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${r?"0":"-1"}" aria-label="${s(n)}" ${a}>
        ${l}
      </g>
      ${zn({bind:e,...c})}
    `}function Rq({label:e,value:t,bind:r,ariaLabel:n="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${n?` aria-label="${s(n)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(t)}</strong>
      </div>
    `}function bt(e,t,r=""){let n=R(e);return Number.isNaN(n)?F(e):B(n,t,dr(e,r))}function Pq(e){let r=String(E("hpGeneration")||"").trim()==="V1"&&e==="hp1Flow"?["flowSelected","controllerFlow","flowLocal",e]:[e];return r.filter((n,a)=>n&&r.indexOf(n)===a)}function Dq(e){let t=Pq(e),r=t.find(n=>w(n))||e;for(let n of t){if(!w(n))continue;let a=R(n);if(!Number.isNaN(a))return{key:n,value:a,text:B(a,0,dr(n,"L/h"))}}return{key:r,value:Number.NaN,text:F(r)}}function Nq(e,t,r,n,a,i,l){let c=R(t.freq),p=Number.isNaN(c)?"\u2014":String(Math.round(c)),u=R(t.power),d=R(t.heat),b=R(t.cooling),y=Dq(t.flow),h=y.value,g=n==="Koelen"?b:d,m=l||!Number.isNaN(c)&&c>0||!Number.isNaN(u)&&u>80||!Number.isNaN(d)&&d>150,v=!Number.isNaN(h)&&h>0,S=nc(n,m),q=w(t.suctionSuperheatStatus)?F(t.suctionSuperheatStatus,""):"",C=q==="Low - floodback risk"||q==="Critical low - wet suction likely",$=i==="Geen actieve storingen"?(q==="Critical low - wet suction likely"?"Superheat kritisch laag":q==="Low - floodback risk"?"Superheat laag":"")||"Geen storingen":i,D=$!=="Geen storingen"||C,N=a?"Actief":"Uit",z=bt(t.waterOut,1,"\xB0C"),H=bt(t.waterIn,1,"\xB0C"),U=y.text,A=bt(t.evaporatorCoilTemp,1,"\xB0C"),I=bt(t.innerCoilTemp,1,"\xB0C"),L=bt(t.outsideTemp,1,"\xB0C"),P=bt(t.condenserPressure,1,"bar"),Z=bt(t.dischargeTemp,1,"\xB0C"),_=bt(t.evaporatorPressure,1,"bar"),j=bt(t.returnTemp,1,"\xB0C"),X=bt(t.suctionSuperheat,1,"K"),We=bt(t.dischargeSuperheat,1,"K"),yt=q||"\u2014",ct=T(t.bottomPlate),Dt=T(t.crankcase),Ue=xq(t.eev),Re=$q(t.fourWay),M=B(u,0,"W"),x=B(g,0,"W"),W=n==="Koelen"?!Number.isNaN(u)&&u>=5&&!Number.isNaN(b)?b/u:Number.NaN:R(t.cop),G=B(W,1),ee=n==="Koelen"?"COP (EER)":"COP",ie=n==="Koelen"?"Koelafgifte":"Warmteafgifte",be=n==="Koelen"?"afgegeven koeling":"afgegeven warmte",re=R(t.fanSpeed),xe=!Number.isNaN(re)&&re>0,ve=Number.isNaN(re)?"\u2014":`${Math.round(re)} rpm`,ce=a||n==="Koelen",Nt=ce?"Verdamper":"Condensor",de=ce?"Condensor":"Verdamper",qo=ce?"return":"supply",Pe=ce?"supply":"return",Ve=360,Ge=384,Qe=214,ko="M278 220 C278 228 273 234 266 234",ye="M278 220 C278 228 283 234 290 234",wt="M290 234 C284 234 279 240 278 248",Bc="M266 234 C272 234 277 240 278 248",Ye=ce?`M290 234 H${Ve} Q372 ${Qe} ${Ge} 234 H436 V134 H480`:"M266 234 H180 V134 H164",Qn=ce?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Ge} Q372 ${Qe} ${Ve} 234 H290`,Yn="M296 150 H278 V220",St="M278 248 V268 H372 V150 H356",Hi=ce?"M480 294 H337":"M164 294 H315",Jn=ce?"M315 294 H164":"M337 294 H480",ar=["oq-hp-schematic-board",`oq-hp-schematic-board--${r}`,m?"is-running":"",v?"is-water-flowing":"",xe?"is-fan-running":"",ce?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:ar,statusText:S,failureText:$,warningActive:D,waterFlowActive:v,defrostActive:a,defrostText:N,mode:n,reverseCycle:ce,compressorFreqText:`${p} Hz`,leftExchangerTitle:Nt,rightExchangerTitle:de,supplyLineTone:qo,returnLineTone:Pe,waterOutText:z,waterInText:H,flowText:U,evaporatorCoilTempText:A,innerCoilTempText:I,outsideTempText:L,dischargePressureText:P,dischargeTempText:Z,suctionPressureText:_,suctionTempText:j,suctionSuperheatText:X,dischargeSuperheatText:We,suctionSuperheatStatusText:yt,bottomPlateActive:ct,crankcaseActive:Dt,eevPositionText:Ue,fourWayPositionText:Re,powerText:M,heatText:x,heatLabel:ie,heatDescription:be,efficiencyText:G,efficiencyLabel:ee,fanRpmText:ve,hotgasValveHeat:ko,hotgasValveCool:ye,suctionValveHeat:wt,suctionValveCool:Bc,leftValveTone:ce?"suction":"hotgas",rightValveTone:ce?"hotgas":"suction",pipes:{supply:{tone:qo,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:Pe,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:Yn,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:Ye,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:Hi,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:Jn,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:Qn,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:St,animated:!0,flowVariant:"default"}}}}function Lq(e){let t=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),r=`${t}-cond-water-heat`,n=`${t}-cond-water-cool`,a=`${t}-cond-ref`,i=e.reverseCycle?n:r,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],c=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],p=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
      <div class="${s(e.boardClass)}" data-oq-hp-board="${s(e.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${s(e.title)} technische schematic">
              <defs>
              <linearGradient id="${s(r)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${s(n)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${s(a)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#16a34a" stop-opacity="0.12"></stop>
                <stop offset="52%" stop-color="#86efac" stop-opacity="0.08"></stop>
                <stop offset="100%" stop-color="#4ade80" stop-opacity="0.22"></stop>
              </linearGradient>
              </defs>
              <rect class="oq-hp-tech-frame" x="18" y="28" width="584" height="314" rx="22" />

            <text class="oq-hp-tech-title" x="134" y="76" data-oq-bind="left-exchanger-title">${s(e.leftExchangerTitle)}</text>
            <text class="oq-hp-tech-title" x="326" y="76">Compressor</text>
            <text class="oq-hp-tech-title" x="510" y="76" data-oq-bind="right-exchanger-title">${s(e.rightExchangerTitle)}</text>

            <g class="oq-hp-tech-condensor">
              <rect class="oq-hp-tech-condensor-shell" x="104" y="118" width="60" height="192" rx="18" />
              <rect class="oq-hp-tech-condensor-water" x="112" y="124" width="20" height="180" rx="10" fill="url(#${s(i)})" data-oq-bind="cond-water" />
              <rect class="oq-hp-tech-condensor-ref-column" x="136" y="124" width="20" height="180" rx="10" fill="url(#${s(a)})" />
              <path class="oq-hp-tech-condensor-divider" d="M134 128 V300" />
            </g>

            <g class="oq-hp-tech-compressor">
              <rect class="oq-hp-tech-compressor-body" x="306" y="118" width="40" height="70" rx="17" />
              <rect class="oq-hp-tech-compressor-port" x="296" y="140" width="10" height="20" rx="5" />
              <rect class="oq-hp-tech-compressor-port" x="346" y="140" width="10" height="20" rx="5" />
              <path class="oq-hp-tech-compressor-lines" d="M316 134 H336 M316 148 H336 M316 162 H336" />
              <text class="oq-hp-tech-compressor-freq" x="326" y="166" data-oq-bind="compressor-freq">${s(e.compressorFreqText)}</text>
            </g>

            <g class="oq-hp-tech-4way">
              <rect class="oq-hp-tech-4way-body" x="264" y="220" width="28" height="28" rx="9" />
              <rect class="oq-hp-tech-4way-actuator" x="259" y="229" width="5" height="10" rx="2.5" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${e.leftValveTone}" cx="266" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--hotgas" cx="278" cy="220" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${e.rightValveTone}" cx="290" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--suction" cx="278" cy="248" r="3.2" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--hotgas" d="${s(e.hotgasValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--suction" d="${s(e.suctionValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--hotgas" d="${s(e.hotgasValveCool)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--suction" d="${s(e.suctionValveCool)}" />
            </g>

            <g class="oq-hp-tech-valve">
              <rect class="oq-hp-tech-eev-mask" x="311" y="283" width="30" height="22" rx="4" />
              <polygon class="oq-hp-tech-eev-shape" points="315,284 326,294 315,304" />
              <polygon class="oq-hp-tech-eev-shape" points="337,284 326,294 337,304" />
            </g>

            <g class="oq-hp-tech-evaporator">
              <rect class="oq-hp-tech-evaporator-shell" x="480" y="118" width="60" height="192" rx="18" />
              <path class="oq-hp-tech-evaporator-lines" d="M492 130 H526 M492 142 H526 M492 154 H526 M492 166 H526 M492 178 H526 M492 190 H526 M492 202 H526 M492 214 H526 M492 226 H526 M492 238 H526 M492 250 H526 M492 262 H526 M492 274 H526 M492 286 H526 M492 298 H526" />
            </g>

            <g class="oq-hp-tech-fan">
              <circle class="oq-hp-tech-fan-ring" cx="550" cy="214" r="34" />
              <circle class="oq-hp-tech-fan-core" cx="550" cy="214" r="8" />
              <g class="oq-hp-tech-fan-blades">
                <path d="M550 180 C561 192 562 203 550 214 C538 203 539 192 550 180 Z" />
                <path d="M584 214 C572 225 561 226 550 214 C561 202 572 203 584 214 Z" />
                <path d="M550 248 C539 236 538 225 550 214 C562 225 561 236 550 248 Z" />
                <path d="M516 214 C528 203 539 202 550 214 C539 226 528 225 516 214 Z" />
              </g>
            </g>

            ${Object.entries(e.pipes).map(([u,d])=>Sc(u.replace(/[A-Z]/g,b=>`-${b.toLowerCase()}`),d.tone,d.d,d.animated,d.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${c.map(Hq).join("")}
            ${vc({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${vc({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${vc({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
                <circle class="oq-hp-tech-defrost-hit" cx="0" cy="0" r="12" />
                <g class="oq-hp-tech-defrost-icon">
                  <path class="oq-hp-tech-defrost-glyph" d="M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5" />
                  <g class="oq-hp-tech-defrost-drips">
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--left" d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--right" d="M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--center" d="M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z" />
                  </g>
                  <g class="oq-hp-tech-defrost-mists">
                    <g transform="translate(6 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--left">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.18" cy="0.34" r="0.58" />
                        <circle cx="1.16" cy="0.38" r="0.54" />
                      </g>
                    </g>
                    <g transform="translate(12 23.4)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--center">
                        <circle cx="0" cy="0" r="1.08" />
                        <circle cx="-1.42" cy="0.42" r="0.66" />
                        <circle cx="1.38" cy="0.46" r="0.62" />
                      </g>
                    </g>
                    <g transform="translate(18 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--right">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.16" cy="0.38" r="0.54" />
                        <circle cx="1.18" cy="0.34" r="0.58" />
                      </g>
                    </g>
                  </g>
                </g>
              `,tooltip:{modifier:"return",icon:"defrost",x:398,y:266,width:118,kicker:"Defrost",detail:"Actief",direction:"left"}})}

            ${p.map(Aq).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(Rq).join("")}
          </div>
        </div>
      </div>
    `}function pf(e,t,r,n="normal",a=null){if(!w(t.power))return"";let i=Mc(e,t,r),{mode:l,defrostActive:c,running:p,thermalKey:u}=i,d=i.schematic;return o.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${uf(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${wc(l,p,d.warningActive,d.failureText)}
            </div>
          </div>
          ${Lq(d)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${wc(l,p,d.warningActive,d.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${Wn([{key:t.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:u,label:d.heatLabel,tone:"orange",note:d.heatDescription},{label:d.efficiencyLabel,value:d.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${s(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${s(F(t.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${c?"Actief":"Uit"}</strong>
          </div>
          ${w(t.suctionSuperheat)?`
            <div class="oq-overview-hp-meta-chip">
              <span>Suction SH</span>
              <strong>${s(d.suctionSuperheatText)}</strong>
            </div>
          `:""}
          ${w(t.suctionSuperheatStatus)?`
            <div class="oq-overview-hp-meta-chip">
              <span>SH status</span>
              <strong>${s(d.suctionSuperheatStatusText)}</strong>
            </div>
          `:""}
        </div>
        <div class="oq-overview-temps-list">
          ${ui("Water in",t.waterIn)}
          ${ui("Water out",t.waterOut)}
        </div>
      </section>
    `}function Ac(){return T("boilerCvAssistEnabled")&&w("boilerHeatPower")}function Oq(){return(typeof te=="function"?te():"")!=="single"&&w("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function _q(){return(typeof te=="function"?te():"")!=="single"&&w("hp2Flow")?"hp2Flow":"hp1Flow"}function Si(){let e=R("boilerHeatPower"),t=R(_q()),r=w("boilerActive")?T("boilerActive"):!Number.isNaN(e)&&e>20,n=!Number.isNaN(t)&&t>0,a=B(e,0,"W"),i=B(t,0,"L/h"),l=B(R(Oq()),1,"\xB0C"),c=B(R("supplyTemp"),1,"\xB0C"),p=r?"Aan":"Uit",u=r?"Levert ondersteuning":"Geen ondersteuning",d=["oq-boiler-card",r?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:r,flowActive:n,heatText:a,flowText:i,returnTempText:l,supplyTempText:c,statusText:p,statusCopy:u,boardClass:d,flowPathClass:n?"is-flowing":"is-static"}}function Rc(e=Si()){return we({version:"boiler-visual-mode-v1",visualMode:o.hpVisualMode,boardClass:"oq-boiler-card"})}function Fq(e,t=Si()){let r=e.querySelector(".oq-boiler-card");r&&(r.className=["oq-boiler-card",t.active?"is-running":"is-idle",t.flowActive?"is-flowing":"is-static"].join(" "));let n=e.querySelector(".oq-overview-chip");n&&(n.className=`oq-overview-chip oq-overview-chip--${t.active?"active":"neutral"}`,n.textContent!==t.statusText&&(n.textContent=t.statusText));let a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",t.active),a.classList.toggle("is-idle",!t.active));let i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==t.statusCopy&&(i.textContent=t.statusCopy);let l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==t.heatText&&(l.textContent=t.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(d=>{d.textContent!==t.flowText&&(d.textContent=t.flowText)});let c=e.querySelector("[data-oq-boiler-status-value]");c&&c.textContent!==t.statusCopy&&(c.textContent=t.statusCopy);let p=e.querySelector('[data-oq-bind="boiler-return-value"]');p&&p.textContent!==t.returnTempText&&(p.textContent=t.returnTempText);let u=e.querySelector('[data-oq-bind="boiler-supply-value"]');u&&u.textContent!==t.supplyTempText&&(u.textContent=t.supplyTempText)}function Iq(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(Rc(e))}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>CV-ketel / boiler</h3>
          </div>
          <span class="oq-overview-chip oq-overview-chip--${e.active?"active":"neutral"}">${s(e.statusText)}</span>
        </div>
        <div class="oq-overview-hp-stats">
          <article class="oq-overview-stat oq-overview-stat--orange">
            <p>Warmteafgifte</p>
            <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
            <span>afgegeven warmte</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--blue">
            <p>Water in</p>
            <strong data-oq-bind="boiler-return-value">${s(e.returnTempText)}</strong>
            <span>retour naar boiler</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--sky">
            <p>Water out</p>
            <strong data-oq-bind="boiler-supply-value">${s(e.supplyTempText)}</strong>
            <span>naar het systeem</span>
          </article>
        </div>
      </section>
    `}function kc(){if(!Ac())return"";let e=Si();return o.hpVisualMode!=="schematic"?Iq(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(Rc(e))}">
        <div class="${s([e.boardClass,e.flowPathClass].filter(Boolean).join(" "))}">
          <div class="oq-boiler-card-main">
            <div class="oq-boiler-card-head">
              <div>
                <span class="oq-boiler-eyebrow">Ondersteuning</span>
                <h3>CV-ketel / boiler</h3>
              </div>
              <span class="oq-overview-chip oq-overview-chip--${e.active?"active":"neutral"}">${s(e.statusText)}</span>
            </div>
            <p class="oq-boiler-copy">De boiler geeft ondersteuning wanneer de warmtepomp extra hulp nodig heeft.</p>
            <div class="oq-boiler-mini-schematic">
              <svg class="oq-boiler-mini-svg" viewBox="0 0 420 132" role="img" aria-label="Schematische weergave CV-ketel of boiler">
                <defs>
                  <linearGradient id="oq-boiler-card-body" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#111827"></stop>
                    <stop offset="62%" stop-color="#7f1d1d"></stop>
                    <stop offset="100%" stop-color="#fb923c"></stop>
                  </linearGradient>
                  <linearGradient id="oq-boiler-card-flame" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#f97316"></stop>
                    <stop offset="48%" stop-color="#facc15"></stop>
                    <stop offset="100%" stop-color="#fee2e2"></stop>
                  </linearGradient>
                </defs>
                ${Sc("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Sc("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${qc({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${zn({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${qc({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${zn({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
              </svg>
              <div class="oq-boiler-summary-grid">
                <div class="oq-boiler-summary-box oq-boiler-summary-box--power">
                  <span>Geleverd vermogen</span>
                  <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
                </div>
                <div class="oq-boiler-summary-box oq-boiler-summary-box--support ${e.active?"is-active":"is-idle"}">
                  <span>Ondersteuning</span>
                  <strong data-oq-boiler-status-value>${s(e.statusCopy)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}function qi(){let e=typeof te=="function"?te():"";return ru.filter(t=>e==="single"&&t.title==="HP2"?!1:w(t.keys.power))}function Pc(e){return!Array.isArray(e)||e.length<2||o.hpVisualMode!=="schematic"?"equal":o.hpLayoutMode==="focus-hp1"||o.hpLayoutMode==="focus-hp2"?o.hpLayoutMode:"equal"}function yi(e,t,r){return!Array.isArray(t)||t.length<2?"normal":r==="focus-hp1"?e===0?"focus":"muted":r==="focus-hp2"?e===1?"focus":"muted":"normal"}function Cc(e,t,r){return!Array.isArray(t)||t.length<2||o.hpVisualMode!=="schematic"?null:yi(e,t,r)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function mf(e){return!Array.isArray(e)||e.length!==1?Pc(e):Ac()?"equal":"single"}function jq(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function gf(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${df(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function Wq(e,t){if(!e)return!1;let r=e.querySelector(".oq-overview-hp-tools-copy"),n=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!r||!n||!a?(Ht(e,gf(t)),!0):(Ht(r,`
      <h3>Warmtepompen</h3>
      ${df(t)}
    `),n.classList.toggle("is-active",o.hpVisualMode==="schematic"),a.classList.toggle("is-active",o.hpVisualMode==="compact"),!0)}function ef(e){let t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}function Vq(e,t="\u2014"){if(!w(e))return t;let r=R(e);return Number.isFinite(r)?String(Math.round(r)):t}function wo(e,t=1,r="",n="\u2014"){if(!w(e))return n;let a=R(e);return Number.isFinite(a)?`${a.toFixed(t)}${r?` ${r}`:""}`:n}function tf(e,t="\u2014"){if(!w(e))return t;let r=R(e);return Number.isFinite(r)?`${Math.round(r/60)} u`:t}function Ec(e){if(!e||!e.keys)return!1;let t=Hc(F(e.keys.mode,"Unknown")),r=R(e.keys.freq);return t==="Verwarmen"||t==="Koelen"||T(e.keys.defrost)||Number.isFinite(r)&&r>0}var Bq=Object.freeze({0:"inactive",1:"full",2:"projected_floor",3:"simmer",4:"falling_gap",5:"buffer_stop",6:"dew_stop",7:"fallback_floor",8:"restart_wait",9:"room_cap",10:"fallback_cap1",11:"level1_hold",12:"oil_return_hold",13:"oil_return_recovery",14:"capacity_cap"}),a$=Object.freeze({0:"inactive",1:"cooling_limiter",2:"dew_stop",3:"sensor_fallback",4:"projected_floor",5:"cooling_request_cleared",6:"flow_too_low",7:"sensor_fallback"});function ki(e){let t=String(e||"").trim().toLowerCase();if(!t)return"";let r=Number(t);return Number.isInteger(r)?Bq[r]||"unknown":t}function Kq(e){return["","full","inactive","none","unknown","unavailable"].includes(ki(e))}function Dc(e){return["dew_stop","falling_gap","projected_floor","restart_wait","sensor_fallback","oil_return_recovery","level1_hold"].includes(ki(e))}function zq(e){let t=T("coolingRequestActive"),r=F("coolingLimiterReasonCode",""),n=ki(r),a=t&&n&&!Kq(n),i=t&&w("coolingPermitted")&&!T("coolingPermitted"),l=i||a&&Dc(n),c=a&&!l,p=Rt()||t,u=e.filter(Ec).length,d=e.some(h=>h.title==="HP2"),b=e.some(h=>T(h.keys.defrost)),y=w("boilerActive")&&T("boilerActive");return{title:"Control mode",copy:"De tab toont dezelfde eventlogica voor elke control mode.",hpRunningCount:u,hp2Available:d,defrostActive:b,boilerActive:y,coolingMode:p,coolingRequest:t,coolingBlocked:i,coolingLimited:l||c,coolingProtection:l,coolingCapped:c,coolingLimiterReason:n||"inactive"}}function ff(e){let t=String(e||"").trim().toLowerCase();return t.includes("cm100")?"cm100":t.includes("cm98")?"cm98":t.includes("cm5")?"cm5":t.includes("cm3")?"cm3":t.includes("cm2")?"cm2":t.includes("cm1")?"cm1":t.includes("cm0")?"cm0":""}function Uq(){let e=Math.round(R("strategyActiveCode"));return e===1?"Cooling":e===2?"Heating Curve":e===3?"Power House":F("strategy","\u2014")}function of(e,t="\u2014"){let r=Vq(e,t);return r==="\u2014"?t:r}function hf(){return[{id:"status",label:"Actueel",icon:"shield"},{id:"timeline",label:"Tijdlijn",icon:"activity"},{id:"graphs",label:"Grafieken",icon:"bar-chart"}]}function So(){return[{id:"last1",label:"Laatste 1 uur",shortLabel:"1 uur",eyebrow:"Laatste 1 uur",title:"Tijdlijn",copy:"Recente beslismomenten in het afgelopen uur.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over het laatste uur.",durationMinutes:60,quick:!1},{id:"last2",label:"Laatste 2 uur",shortLabel:"2 uur",eyebrow:"Laatste 2 uur",title:"Tijdlijn",copy:"Recente beslismomenten in de afgelopen twee uur.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over de laatste twee uur.",durationMinutes:120,quick:!1},{id:"last4",label:"Laatste 4 uur",shortLabel:"4 uur",eyebrow:"Laatste 4 uur",title:"Tijdlijn",copy:"Recente momenten en periodes voor een gerichte diagnose.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over de laatste vier uur.",durationMinutes:240,quick:!0},{id:"last8",label:"Laatste 8 uur",shortLabel:"8 uur",eyebrow:"Laatste 8 uur",title:"Tijdlijn",copy:"Een compacte terugblik op de laatste acht uur.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over de laatste acht uur.",durationMinutes:480,quick:!1},{id:"last12",label:"Laatste 12 uur",shortLabel:"12 uur",eyebrow:"Laatste 12 uur",title:"Tijdlijn",copy:"Een dagdeel met alle belangrijke beslismomenten.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over de laatste twaalf uur.",durationMinutes:720,quick:!1},{id:"last24",label:"Afgelopen 24 uur",shortLabel:"24 uur",eyebrow:"Afgelopen 24 uur",title:"Tijdlijn",copy:"Gebeurtenissen die verklaren hoe het systeem in de huidige situatie kwam.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over de laatste 24 uur.",durationMinutes:1440,quick:!0},{id:"last48",label:"Afgelopen 48 uur",shortLabel:"48 uur",eyebrow:"Afgelopen 48 uur",title:"Tijdlijn",copy:"Twee dagen met belangrijke momenten en perioden.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over de laatste 48 uur.",durationMinutes:2880,quick:!1},{id:"last3d",label:"Afgelopen 3 dagen",shortLabel:"3 dagen",eyebrow:"Afgelopen 3 dagen",title:"Tijdlijn",copy:"Een terugblik op patronen over drie dagen.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over de laatste drie dagen.",durationMinutes:4320,quick:!1},{id:"today",label:"Vandaag",shortLabel:"Vandaag",eyebrow:"Vandaag",title:"Tijdlijn",copy:"Belangrijke momenten en periodes sinds middernacht.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg voor vandaag.",calendarDay:"today",quick:!0},{id:"yesterday",label:"Gisteren",shortLabel:"Gisteren",eyebrow:"Gisteren",title:"Tijdlijn",copy:"Terugkijken naar een volledige kalenderdag.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg voor gisteren.",calendarDay:"yesterday",quick:!0},{id:"week",label:"7 dagen",shortLabel:"7 dagen",eyebrow:"Afgelopen 7 dagen",title:"Tijdlijn",copy:"Patronen zoals defrosts, starts/stops en bescherming over meerdere dagen.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg binnen de weekselectie.",durationMinutes:10080,quick:!0},{id:"custom",label:"Eigen periode",shortLabel:"Eigen periode",eyebrow:"Eigen periode",title:"Tijdlijn",copy:"Een zelfgekozen begin- en eindmoment.",graphCopy:"De gekozen tijd verbindt grafiek en uitleg over de gekozen periode.",custom:!0,quick:!1}]}function Gq(){return So().filter(e=>e.quick)}function wi(e){let t=new Date(String(e||"")).getTime();return Number.isFinite(t)?t:Number.NaN}function bf(){let e=wi(o.controlReplayCustomStart),t=wi(o.controlReplayCustomEnd);return!Number.isFinite(e)||!Number.isFinite(t)||t<=e?null:{start:e,end:t}}function Tc(e){let t=new Date(e);t.setMinutes(0,0,0);let r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`}function Bn(e){return Tc(e).slice(0,10)}function rf(e){let r=String(e||"").match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):00$/);return{date:r?.[1]||"",hour:r?.[2]||"00"}}function nf(e){return Array.from({length:24},(t,r)=>{let n=String(r).padStart(2,"0");return`<option value="${n}"${n===e?" selected":""}>${n} uur</option>`}).join("")}function Qq(){let e=Date.now();return{start:o.controlReplayCustomStart||Tc(e-1440*60*1e3),end:o.controlReplayCustomEnd||Tc(e)}}function Yq(e,t=Date.now()){let n=new Date(t).setMinutes(0,0,0),a=Math.ceil((t-6048e5)/(3600*1e3))*60*60*1e3,i=wi(e.start),l=Number.isFinite(i)?Math.max(a,Math.min(n,i)):n-1440*60*1e3,c=wi(e.end),p=Number.isFinite(c)?Math.max(l,Math.min(n,c)):n;return{earliestDate:Bn(a),latestDate:Bn(n),startMaxDate:Bn(Math.min(n,p)),endMinDate:Bn(l),endMaxDate:Bn(Math.min(n,l+6048e5))}}function nr(e=lt(),t=Date.now()){let r=So().find(a=>a.id===e)||So().find(a=>a.id==="last24");if(r?.calendarDay){let a=new Date(t);return a.setHours(0,0,0,0),r.calendarDay==="yesterday"&&a.setDate(a.getDate()-1),{start:a.getTime(),end:a.getTime()+1440*60*1e3}}if(r?.custom)return bf()||{start:t-1440*60*1e3,end:t};let n=Number(r?.durationMinutes)||1440;return{start:t-n*60*1e3,end:t}}function Nc(e=lt(),t=Date.now()){let r=nr(e,t);return Math.max(1,(r.end-r.start)/(60*1e3))}function Jq(e,t=!1){let r=new Date(e),n=r.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return t?`${r.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${n}`:n}function Zq(e=lt(),t=Date.now()){if(e==="today"||e==="yesterday")return["00:00","06:00","12:00","18:00","24:00"];let r=nr(e,t),a=Nc(e,t)>1440||e==="custom";return[0,.25,.5,.75,1].map((i,l)=>l===4&&e!=="custom"?"Nu":Jq(r.start+(r.end-r.start)*i,a))}function Lc(){return hf().some(e=>e.id===o.controlReplayTab)?o.controlReplayTab:"status"}function lt(){let e=So().find(t=>t.id===o.controlReplayWindow);return e?.custom&&!bf()?"last24":e?o.controlReplayWindow:"last24"}function Gn(){let e=lt();return{...So().find(r=>r.id===e)||So().find(r=>r.id==="last24"),axis:Zq(e)}}function Oc(e="normal"){let t={normal:{label:"Normaal",tone:"normal"},limited:{label:"Bescherming actief",tone:"limited"},attention:{label:"Aandacht",tone:"attention"},fault:{label:"Storing",tone:"fault"}};return t[e]||t.normal}function tr(e){let t="Keuze van het systeem";return{keep_current:{label:"Huidige keuze blijft logisch",summary:"De huidige stand past bij de vraag in huis. Wisselen zou nu weinig voordeel geven.",checks:["Vraag blijft binnen de band","Geen betere keuze nodig","Rustig door laten lopen"]},hold_active:{label:"Wissel bewust uitgesteld",summary:"Het systeem wacht bewust even, zodat warmtepompen niet onnodig vaak starten en stoppen.",checks:["Vraag is nog niet duidelijk anders","Minimale looptijd telt mee","Actieve bron werkt nog goed"]},defrost_hold:{label:"Ontdooien rustig laten verlopen",summary:"Een warmtepomp ontdooit kort. Dat is normaal wintergedrag en herstelt vanzelf.",checks:["Ontdooien actief of net klaar","Warmte kan kort lager zijn","Herstart gebeurt automatisch"]},better_heat:{label:"Twee pompen passen beter",summary:"De warmtevraag blijft hoog. Twee warmtepompen kunnen die vraag rustiger leveren dan \xE9\xE9n pomp op hoge belasting.",checks:["Warmtevraag blijft hoog","Beide warmtepompen beschikbaar","Samen leveren ze rustiger vermogen"]},soft_guard:{label:"Veilige marge bewaakt",summary:"Het systeem begrenst zichzelf om veilig binnen de temperatuur- en flowgrenzen te blijven.",checks:["Veiligheidsmarge bewaakt","Geen storing","Begrenzing verdwijnt vanzelf"]},less_power:{label:"Minder vermogen nodig",summary:"De vraag neemt af. E\xE9n warmtepomp kan de resterende vraag weer rustig dragen.",checks:["Vraag neemt af","E\xE9n warmtepomp is genoeg","Minder elektrisch vermogen nodig"]},cooling_request_cleared:{label:"Geen koelvraag meer",summary:"De koelvraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",checks:["Koelvraag weg","Warmtepomp stopt","Naloop kan normaal zijn"]},heating_request_cleared:{label:"Geen warmtevraag meer",summary:"De warmtevraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",checks:["Warmtevraag weg","Warmtepomp stopt","Naloop kan normaal zijn"]},no_candidate:{label:"Nog geen veilige start",summary:"Er is vraag, maar een start is nu nog niet verstandig door wachttijd of bescherming.",checks:["Beschikbaarheid gecontroleerd","Bescherming of wachttijd actief","Straks opnieuw beoordelen"]},candidate_in_rest:{label:"Rusttijd loopt nog",summary:"De warmtepomp is kort geleden gestopt en wacht nog even om korte cycli te voorkomen.",checks:["Vorige stop is recent","Start wordt uitgesteld","Bij blijvende vraag opnieuw beoordelen"]},candidate_in_defrost:{label:"Warmtepomp ontdooit",summary:"Deze warmtepomp kan nu niet starten of wisselen omdat ontdooien eerst rustig moet afronden.",checks:["Ontdooien actief","Niet onnodig wisselen","Automatisch opnieuw beoordelen"]},candidate_unavailable:{label:"Warmtepomp niet beschikbaar",summary:"De warmtepomp is nu geen geschikte kandidaat door beschikbaarheid of technische begrenzing.",checks:["Kandidaat gecontroleerd","Voorwaarde niet vrij","Andere keuze blijft mogelijk"]},defrost_boost:{label:"Ontdooien opgevangen",summary:"Een andere bron kan tijdelijk helpen terwijl een warmtepomp ontdooit.",checks:["Ontdooien verlaagt kort vermogen","Andere bron beschikbaar","Comfort blijft beschermd"]},boiler_assist:{label:"CV ondersteunt tijdelijk",summary:"De CV-ketel helpt alleen wanneer de warmtevraag tijdelijk meer vermogen vraagt dan de warmtepompen rustig kunnen leveren.",checks:["Warmtevraag blijft hoog","Warmtepompen leveren maximaal rustig vermogen","CV stopt zodra ondersteuning niet meer nodig is"]},runtime_lead:{label:"Draaiurenbalans",summary:"De warmtepompen zijn gelijkwaardig. Het systeem kiest de pomp die het beste past bij draaiuren, beschikbaarheid en wachttijd.",checks:["Draaiuren vergeleken","Warmtepomp beschikbaar","Wachttijd vrij"]},oil_return_hold:{label:"Compressor beschermen",summary:"De warmtepomp blijft kort doorlopen om de compressor netjes te beschermen.",checks:["Minimale looptijd actief","Stop wordt uitgesteld","Korte cyclus voorkomen"]},single_topology:{label:"E\xE9n warmtepomp aanwezig",summary:"Er is maar \xE9\xE9n warmtepomp beschikbaar. Keuzes met twee warmtepompen zijn dan niet van toepassing.",checks:["Opstelling gecontroleerd","Geen tweede warmtepomp","Keuze blijft beperkt"]},demand_decreased:{label:"Warmtevraag nam af",summary:"De vraag zakte terug. Minder vermogen is genoeg om de woning op temperatuur te houden.",checks:["Vraag is lager","Stopvertraging verlopen","Andere warmtepomp blijft actief"]},min_rest_active:{label:"Minimum rusttijd actief",summary:"De warmtepomp wacht nog even om korte starts en onnodige belasting te voorkomen.",checks:["Vorige stop is recent","Rusttijd loopt","Start volgt als vraag blijft"]},start_stop_rate_high:{label:"Veel starts/stops",summary:"De warmtepomp start vaker dan wenselijk. Dat is niet direct een storing, maar wel nuttig om te bekijken.",checks:["Startteller hoog","Geen acute storing","Nuttig voor support"]},sticky_protection:{label:"Pompbescherming",summary:"De pomp draait kort zodat hij na lange stilstand niet vast gaat zitten. Dit is geen verwarmings- of koelvraag.",checks:["Geen comfortvraag","Dagelijkse bescherming actief","Alleen korte pomprun"]},frost_protection:{label:"Vorstbescherming",summary:"Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",checks:["Geen comfortvraag nodig","Vorstrisico bewaakt","Water blijft circuleren"]},flow_preflow:{label:"Voorloop actief",summary:"De pomp bouwt eerst waterflow op voordat de warmtepomp mag starten.",checks:["Waterflow opbouwen","Warmtepomp nog niet vrij","Start volgt automatisch"]},flow_postflow:{label:"Naloop actief",summary:"De pomp blijft kort nadraaien zodat warmte netjes uit het systeem wordt afgevoerd.",checks:["Warmtepomp stopt","Pomp draait kort door","Daarna standby"]},flow_too_low:{label:"Flowcontrole actief",summary:"De pomp draait en de regelaar wacht tot de flow vrijgegeven is voor de volgende stap.",checks:["Flow wordt bevestigd","Warmtepomp wacht kort","Start volgt automatisch"]},capacity_cap:{label:"Ingesteld koelmaximum",summary:"Er is koelvraag. Het systeem blijft binnen het maximale koelniveau dat in de software is ingesteld.",checks:["Koelvraag actief","Softwaremaximum actief","Dauwpunt blijft bewaakt"]},falling_gap:{label:"Dauwpuntmarge daalt",summary:"De marge tot het dauwpunt wordt kleiner. Het systeem grijpt vroeg in om condens te voorkomen.",checks:["Marge daalt","Aanvoer blijft veilig","Koeling blijft voorzichtig actief"]},projected_floor:{label:"Aanvoer nadert veilige ondergrens",summary:"De aanvoer dreigt te koud te worden. Het systeem verlaagt de koeling preventief.",checks:["Aanvoer voorspeld","Veilige grens leidend","Geen storing"]},simmer:{label:"Koeling rustig bijgesteld",summary:"De koeling blijft op een laag niveau zodat de temperatuur rustig richting setpoint kan bewegen.",checks:["Lage koelvraag","Geen abrupte stop","Rustige regeling"]},buffer_stop:{label:"Koeling wacht op veilige watermarge",summary:"De watermarge is te klein voor verder koelen. Het systeem wacht tot deze weer veilig is.",checks:["Watermarge bewaakt","Koeling tijdelijk gepauzeerd","Automatisch opnieuw beoordelen"]},dew_stop:{label:"Dauwpuntstop",summary:"De warmtepomp stopt kort omdat verder koelen te dicht bij het dauwpunt zou komen.",checks:["Condensrisico voorkomen","Koelvraag blijft bestaan","Herstart na veilige marge"]},cooling_limiter:{label:"Softwaremaximum actief",summary:"Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum en blijft de veiligheidsmarges bewaken.",checks:["Koelvraag actief","Softwaremaximum actief","Marge blijft bewaakt"]},sensor_fallback:{label:"Sensorwaarde onzeker",summary:"Een meting is tijdelijk minder zeker. Het systeem kiest daarom voorzichtig gedrag.",checks:["Metingen gecontroleerd","Veilige keuze voorrang","Herstel zodra data stabiel is"]},restart_wait:{label:"Herstart wacht op veilige marge",summary:"Na een korte pauze wacht het systeem tot de marge veilig en stabiel genoeg is.",checks:["Herstart wacht bewust","Marge moet stabiel blijven","Daarna opnieuw beoordelen"]},level1_hold:{label:"Voorzichtig blijven koelen",summary:"De koeling blijft nog even laag totdat duidelijk is dat de veilige marge terug is.",checks:["Even wachten met opschalen","Geen snelle sprong omhoog","Comfortvraag blijft bewaakt"]},room_cap:{label:"Kamervraag begrenst",summary:"De kamer vraagt koeling, maar niet genoeg om harder te gaan koelen.",checks:["Kamer koelt richting setpoint","Vraag blijft beperkt","Rustige regeling"]},oil_return_recovery:{label:"Compressorherstel",summary:"Het systeem geeft compressorherstel tijdelijk voorrang en blijft de veiligheid bewaken.",checks:["Compressorprotectie actief","Gecontroleerd herstel","Veiligheid blijft bewaakt"]}}[e]||{label:t,summary:t,checks:[]}}function vf(e){return tr(e).label}function af(e,t=!1){let r=Number(e);return Number.isFinite(r)&&(r>0||t&&r===0)?`CM${r}`:""}function fi(e,t){let r=af(e),n=af(t,!0);return r&&n&&r!==n?`${r} \u2192 ${n}`:""}function Xq(e,t){let r=String(e?.event_type||""),n=Number(e?.cm)||0,a=Number(e?.value_a);return r==="boiler_assist_start"?fi(t||2,n===3?3:n):r==="boiler_assist_stop"?fi(t===3?3:t,n>0?n:2):r==="flow_hold_start"&&n===1?fi(t,1):r==="flow_hold_clear"&&n===1&&Number.isFinite(a)?fi(1,a):""}function e1(e){let t=String(e?.event_type||""),r=Number(e?.cm)||0,n=Number(e?.value_a);return t==="flow_hold_clear"&&r===1&&Number.isFinite(n)?n:t==="frost_protection_clear"?0:r}function yf(e){let t=String(e?.modeTransitionLabel||"").trim();if(t)return t;let r=String(e?.modeLabel||"").trim();return r.includes("\u2192")?r:""}function xc(){let e=ki(F("coolingLimiterReasonCode",""));return{requestActive:T("coolingRequestActive"),permitted:w("coolingPermitted")?T("coolingPermitted"):!0,reasonCode:e||"inactive",rawDemand:wo("coolingDemandRaw",0,"","\u2014"),limitedDemand:wo("coolingLimitedDemand",0,"","\u2014"),allowedMax:wo("coolingLimiterAllowedMax",0,"","\u2014"),dewPoint:wo("coolingDewPointSelected",1,"\xB0C","\u2014"),safeSupply:wo("coolingEffectiveMinSupplyTemp",1,"\xB0C","\u2014"),guardMode:F("coolingGuardMode","Dauwpuntbewaking"),blockReason:F("coolingBlockReason","Ready")}}function wf(e){return{event:"Moment",span:"Periode",aggregate:"Samenvatting"}[e]||"Record"}function or(e,t="neutral",r=""){let n=r?$e(r,"oq-working-pill-icon"):"";return`<span class="oq-working-pill oq-working-pill--${s(t)}">${n}<span>${s(e)}</span></span>`}function t1(e){let t=e?.reasonCode||e?.primaryReason;return ff(e?.modeLabel)==="cm98"&&t==="frost_protection"}function _c(e){return t1(e)?'<span class="oq-working-mode-badge" aria-label="Technische mode CM98">CM98</span>':""}function Sf(e){let t=e?.reasonCode||e?.primaryReason||"keep_current",r=e?.source||"HP1 + HP2";if(t==="better_heat")return{title:"Keuze van het systeem",verdict:"Twee warmtepompen actief",summary:"Omdat de warmtevraag hoog blijft, leveren twee warmtepompen rustiger vermogen dan \xE9\xE9n warmtepomp op hoge belasting.",rows:[{option:"E\xE9n warmtepomp",result:"Te weinig reserve",code:"better_heat",detail:"De vraag bleef langer hoog dan \xE9\xE9n warmtepomp rustig kan dragen.",tone:"muted"},{option:"Andere losse pomp",result:"Geen voordeel",code:"hold_active",detail:"Wisselen naar de andere pomp zou geen rustiger gedrag geven.",tone:"muted"},{option:"Twee warmtepompen",result:"Gekozen",code:"better_heat",detail:"Samen leveren ze meer reserve en minder belasting per pomp.",tone:"selected"}]};if(t==="demand_decreased"||t==="less_power")return{title:"Keuze van het systeem",verdict:"E\xE9n warmtepomp is genoeg",summary:"De warmtevraag is gezakt. E\xE9n warmtepomp kan de resterende warmte rustiger en zuiniger leveren.",rows:[{option:"Twee warmtepompen",result:"Niet meer nodig",code:"less_power",detail:"Samen leveren ze meer vermogen dan nu nodig is.",tone:"muted"},{option:r,result:"Blijft actief",code:"less_power",detail:"E\xE9n warmtepomp dekt de lagere vraag rustiger.",tone:"selected"}]};if(t==="runtime_lead")return{title:"Keuze van het systeem",verdict:`${r} gestart`,summary:"De warmtepompen zijn gelijkwaardig. De keuze volgt uit draaiuren, beschikbaarheid en wachttijden.",rows:[{option:"HP1",result:r==="HP1"?"Gekozen":"Niet nu",code:"runtime_lead",detail:"Past het beste bij de actuele draaiurenbalans.",tone:r==="HP1"?"selected":"muted"},{option:"HP2",result:r==="HP2"?"Gekozen":"Niet nu",code:"runtime_lead",detail:"Gelijkwaardige pomp, maar nu minder gunstig in balans of wachttijd.",tone:r==="HP2"?"selected":"muted"}]};if(["min_rest_active","no_candidate","candidate_in_rest","candidate_in_defrost","candidate_unavailable"].includes(t))return{title:"Startcontrole",verdict:"Start uitgesteld",summary:tr(t).summary,rows:[{option:r,result:"Wacht nog",code:t,detail:tr(t).summary,tone:"limited"},{option:"Opnieuw beoordelen",result:"Straks",code:"hold_active",detail:"Het systeem probeert opnieuw zodra starten verstandig is.",tone:"muted"}]};if(["flow_preflow","flow_postflow","flow_too_low"].includes(t))return{title:"Waterflow eerst",verdict:t==="flow_postflow"?"Naloop actief":"Start wacht",summary:tr(t).summary,rows:[{option:"Waterflow",result:t==="flow_too_low"?"Nog te laag":"Wordt bewaakt",code:t,detail:"De pomp zorgt voor veilige circulatie voordat de volgende stap vrij is.",tone:"selected"},{option:"Warmtepomp",result:t==="flow_postflow"?"Gestopt":"Wacht nog",code:t,detail:"De compressor start pas als de flowconditie veilig is.",tone:"limited"},{option:"Regelaar",result:"Probeert opnieuw",code:"keep_current",detail:"De controller beoordeelt dit automatisch opnieuw.",tone:"muted"}]};if(t==="defrost_hold"||t==="defrost_boost")return{title:"Bescherming",verdict:"Ontdooien krijgt voorrang",summary:"Tijdens ontdooien houdt het systeem de regeling rustig, zodat de warmtepomp vanzelf kan herstellen.",rows:[{option:"Actieve warmtepomp",result:"Rustig laten herstellen",code:"defrost_hold",detail:"Niet wisselen zolang ontdooien of herstel actief is.",tone:"selected"},{option:"Extra bron",result:t==="defrost_boost"?"Helpt mee":"Stand-by",code:t,detail:"Alleen inzetten als comfort of vermogen daarom vraagt.",tone:t==="defrost_boost"?"selected":"muted"}]};if(t==="boiler_assist")return{title:"Bronkeuze",verdict:"CV ondersteunt tijdelijk",summary:"De warmtepompen blijven de basis leveren. CV vult alleen aan zolang extra vermogen nodig is.",rows:[{option:"Alleen warmtepompen",result:"Te weinig reserve",code:"better_heat",detail:"De vraag bleef hoger dan de warmtepompen rustig konden leveren.",tone:"muted"},{option:"CV-ketel",result:"Tijdelijk bij",code:"boiler_assist",detail:"CV levert extra vermogen en stopt zodra de vraag zakt.",tone:"selected"},{option:"Na piek",result:"Terug naar HP",code:"less_power",detail:"De warmtepompen nemen het weer over als ondersteuning niet meer nodig is.",tone:"muted"}]};if(t==="sticky_protection")return{title:"Pompbescherming",verdict:"Korte pomprun",summary:"Alleen de pomp draait kort. De warmtepompen blijven uit omdat er geen verwarmings- of koelvraag is.",rows:[{option:"Verwarmen",result:"Niet nodig",code:"keep_current",detail:"Geen warmtevraag vanuit kamer of regeling.",tone:"muted"},{option:"Koelen",result:"Niet nodig",code:"keep_current",detail:"Geen koelvraag vanuit de kamer.",tone:"muted"},{option:"Pomp",result:"Kort aan",code:"sticky_protection",detail:"De dagelijkse bescherming laat de pomp ongeveer 1 minuut draaien.",tone:"selected"}]};if(["capacity_cap","room_cap","cooling_limiter"].includes(t)){let n=xc();return{title:"Koelregeling",verdict:`Maximaal ingesteld niveau ${n.allowedMax}`,summary:"De koelvraag wordt uitgevoerd binnen het ingestelde maximum. Dit is normale regeling, geen aandachtspunt.",rows:[{option:"Gevraagd koelniveau",result:n.rawDemand,code:"coolingDemandRaw",detail:"Wat de kamer vraagt voordat het ingestelde maximum meetelt.",tone:"muted"},{option:"Ingesteld maximum",result:n.allowedMax,code:t,detail:"Het hoogste niveau dat de software nu toestaat.",tone:"selected"},{option:"Uitgestuurd niveau",result:n.limitedDemand,code:"coolingLimitedDemand",detail:"Het niveau dat de warmtepomp op dit moment krijgt.",tone:"normal"}]}}if(["falling_gap","projected_floor","dew_stop","restart_wait","level1_hold","oil_return_recovery","sensor_fallback"].includes(t)){let n=xc();return{title:"Koelbewaking",verdict:n.permitted?`Maximaal koelniveau ${n.allowedMax}`:"Koeling tijdelijk gepauzeerd",summary:"De koelvraag blijft actief, maar dauwpunt, aanvoer of compressorconditie vraagt tijdelijk voorzichtig gedrag.",rows:[{option:"Gevraagd koelniveau",result:n.rawDemand,code:"coolingDemandRaw",detail:"Wat de kamer vraagt voordat bewaking meetelt.",tone:"muted"},{option:"Maximaal veilig",result:n.allowedMax,code:t,detail:"Het hoogste niveau dat nu veilig is met de huidige dauwpuntmarge.",tone:"selected"},{option:"Uitgestuurd niveau",result:n.limitedDemand,code:"coolingLimitedDemand",detail:"Het niveau dat de warmtepomp op dit moment krijgt.",tone:"limited"}]}}return null}function qf(e){return e?`
      <div class="oq-working-optimizer">
        <div class="oq-working-optimizer-head">
          <span class="oq-working-eyebrow">${s(e.title)}</span>
          <strong>${s(e.verdict)}</strong>
          <p>${s(e.summary)}</p>
        </div>
        <div class="oq-working-optimizer-options">
          ${e.rows.map(t=>`
            <div class="oq-working-optimizer-option oq-working-optimizer-option--${s(t.tone||"muted")}">
              <span>${s(t.option)}</span>
              <strong>${s(t.result)}</strong>
              <p>${s(t.detail)}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `:""}function kf(e){let t=zq(e),r=F("controlModeLabel","\u2014"),n=ff(r),a=n?n.toUpperCase():r,i=e.find(N=>N.title==="HP1")||e[0],l=e.find(N=>N.title==="HP2"),c=Ec(i),p=l?Ec(l):!1,u=c&&p,d=t.defrostActive,b=xc(),y=t.coolingProtection,h=t.coolingCapped,g=t.coolingMode||t.coolingRequest,m=w("stickyActive")&&T("stickyActive"),v=t.boilerActive,S="E\xE9n warmtepomp actief",q="De actuele vraag past binnen \xE9\xE9n warmtepomp. De andere warmtepomp blijft beschikbaar als extra capaciteit nodig is.",C="Een extra warmtepomp schakelt bij zodra de vraag lang genoeg hoog blijft en alle wachttijden vrij zijn.",k="normal",$="keep_current",D="Live";if(n==="cm98")S="Vorstbescherming actief",q="Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",C="Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",k="limited",$="frost_protection",D="Bescherming actief";else if(m)S="Pompbescherming actief",q="Er is geen warmte- of koelvraag. De pomp draait kort om vastzitten na lange stilstand te voorkomen.",C="Na ongeveer 1 minuut stopt de pomp en blijft het systeem standby tot er comfortvraag of bescherming nodig is.",$="sticky_protection",D="Dagelijkse run";else if(y){let N=b.reasonCode&&b.reasonCode!=="inactive"?b.reasonCode:"soft_guard";S=b.permitted?"Koeling tijdelijk beperkt":"Koeling tijdelijk gepauzeerd",q=`Er is koelvraag, maar het systeem koelt nu maximaal op niveau ${b.allowedMax} om condens te voorkomen.`,C="Koeling neemt stap voor stap toe zodra de dauwpuntmarge veilig en stabiel is.",k="limited",$=N,D="Koelvraag actief"}else if(h){let N=b.allowedMax&&b.allowedMax!=="\u2014"?`niveau ${b.allowedMax}`:"het ingestelde maximum",z=["capacity_cap","room_cap","cooling_limiter"].includes(b.reasonCode)?b.reasonCode:"capacity_cap";S="Koeling actief op ingesteld maximum",q=`Er is koelvraag. Het systeem koelt maximaal op ${N}, zoals ingesteld in de software.`,C="Koeling blijft binnen dit maximum. Dauwpunt, aanvoer en waterflow worden op de achtergrond bewaakt.",$=z,D="Koelvraag actief"}else g?(S="Koeling actief",q="Er is koelvraag en dauwpuntbewaking geeft koeling vrij. Het systeem blijft marge en waterflow bewaken.",C="Koeling blijft actief tot de kamertemperatuur richting setpoint zakt of bescherming ingrijpt.",$="keep_current",D="Koelen"):v?(S="CV-ketel ondersteunt",q="De CV-ketel helpt tijdelijk omdat de warmtevraag meer vermogen vraagt dan de warmtepompen nu leveren.",C="De CV-ketel stopt zodra de warmtepompen de vraag weer zelf kunnen dragen.",k="limited",$="boiler_assist",D="Ondersteuning actief"):d?(S="Ontdooien actief",q="Een warmtepomp ontdooit tijdelijk. Het systeem houdt de keuze rustig zodat het ontdooien vanzelf kan afronden.",C="De warmtepomp hervat automatisch zodra het ontdooien klaar is.",k="limited",$="defrost_hold",D="Tijdelijk"):u?(S="Duo-bedrijf actief",q="Beide warmtepompen draaien omdat de warmtevraag hoog blijft. Dit is normaal winterbedrijf.",C="E\xE9n warmtepomp stopt zodra de warmtevraag voldoende afneemt of single-bedrijf weer effici\xEBnter is.",$="better_heat",D="Actief"):!c&&!p&&(S="Geen warmtepomp actief",q="Er is nu geen warmtepompactie nodig, of het systeem wacht door bescherming of rusttijd.",C="Bij nieuwe vraag kiest het systeem opnieuw de best passende warmtepomp.",$="keep_current",D="Stand-by");return{title:S,copy:q,expectation:C,severity:k,primaryReason:$,sinceLabel:D,modeLabel:a,strategyLabel:Uq(),reasonLabel:vf($),hp1Running:c,hp2Running:p,hp2Available:!!l,hp1Status:c?"Actief":"Beschikbaar",hp2Status:l?p?"Actief":"Beschikbaar":"Niet aanwezig",cvStatus:v?"Actief":"Uit",outsideTemp:wo("outsideTempSelected",1,"\xB0C","\u2014"),supplyTemp:wo("waterSupplyTempSelected",1,"\xB0C","\u2014"),flow:wo("flowSelected",0,"L/h","\u2014"),hp1Starts:of("hp1CompressorStarts24h","\u2014"),hp2Starts:of("hp2CompressorStarts24h",l?"\u2014":"n.v.t."),hp1Hours:tf("hp1Minutes","\u2014"),hp2Hours:l?tf("hp2Minutes","\u2014"):"n.v.t.",cooling:b,coolingProtection:y,coolingCapped:h}}function Cf(){let e=o.decisionLog;return e?.ok&&Array.isArray(e.events)?e.events:[]}function rr(e){let t=Number(e?.epoch_s);if(Number.isFinite(t)&&t>0)return t*1e3;let r=Number(o.decisionLog?.meta?.boot_epoch_s),n=Number(e?.uptime_s);return Number.isFinite(r)&&r>0&&Number.isFinite(n)&&n>=0?(r+n)*1e3:Number.NaN}function Ef(e,t=Date.now()){let r=rr(e);if(Number.isFinite(r))return Math.max(0,Math.round((t-r)/6e4));let n=Number(o.decisionLog?.meta?.uptime_s),a=Number(e?.uptime_s);return Number.isFinite(n)&&Number.isFinite(a)?Math.max(0,Math.round((n-a)/60)):Number.NaN}function sf(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function er(e,t=Date.now(),r="auto"){if(!Number.isFinite(e))return"Onbekend";let n=new Date(e),a=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});if(r==="time")return a;if(r==="weekday")return`${n.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${a}`;let i=new Date(t),l=new Date(i);return l.setDate(l.getDate()-1),sf(n,i)?a:sf(n,l)?`gisteren ${a}`:`${n.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${a}`}function hi(e,t=lt(),r=Date.now()){let n=Math.max(0,Math.min(1440,Number(e)||0)),a=nr(t,r);return a.start+n/1440*(a.end-a.start)}function o1(e,t=lt(),r=Date.now()){let n=rr(e),a=(p,u,d)=>!Number.isFinite(p)||p<u||p>d?Number.NaN:(p-u)/Math.max(1,d-u)*1440;if(Number.isFinite(n)){let p=nr(t,r);return a(n,p.start,p.end)}let i=Ef(e,r);if(!Number.isFinite(i))return Number.NaN;let l=So().find(p=>p.id===t);if(l?.calendarDay||l?.custom)return Number.NaN;let c=Nc(t,r);return i<=c?1440-i/c*1440:Number.NaN}function r1(e,t=lt(),r=Date.now()){let n=rr(e);if(!Number.isFinite(n)){let a=Ef(e,r);return Number.isFinite(a)?f1(a):"Onbekend"}return t==="week"||t==="last48"||t==="last3d"||t==="custom"?er(n,r,"weekday"):t.startsWith("last")?er(n,r,"auto"):er(n,r,"time")}function Tf(e){let t=Math.max(0,Math.round(Number(e)||0));if(!t)return"";if(t<60)return`${t}s`;if(t<3600)return`${Math.round(t/60)} min`;let r=Math.floor(t/3600),n=Math.round(t%3600/60);return n?`${r}u ${n}m`:`${r}u`}function Fc(e){let t=String(e||"").toUpperCase();return{SYSTEM:"Systeem",HP1:"HP1",HP2:"HP2",BOTH:"HP1 + HP2",CV:"CV-ketel",COOLING:"Koeling",PUMP:"Pomp",CONTROLLER:"Regelaar"}[t]||"Systeem"}function vt(e,t){let r=String(e||"").toUpperCase(),n=Fc(e);return r!=="HP1"&&r!=="HP2"&&r!=="BOTH"?n:Number(t)===5?`${n} (koelen)`:Number(t)>0?`${n} (verwarmen)`:n}function n1(e){let t=String(e?._oq_active_cooling_subject||"").toUpperCase();return vt(t==="HP1"||t==="HP2"||t==="BOTH"?t:e?.subject,5)}function Ic(e){let t=String(e?.subject||"").toUpperCase();return t==="HP1"||t==="HP2"?t:""}function a1(e){let t=String(e?.event_type||""),r=Fc(e?.subject),n=String(e?.reason||"unknown"),a=Number(e?._oq_context_cm??e?.cm)===5,i=e?._oq_active_cooling_source||"De warmtepomp",l=e?._oq_active_heating_source||"De warmtepomp",c=String(e?._oq_cooling_stop_reason||(n==="dew_stop"?"dew_stop":"")),p=["less_power","demand_decreased","cooling_request_cleared"].includes(n),u=n==="heating_request_cleared",d=!!e?._oq_cooling_runtime_hold,b=!!e?._oq_heating_runtime_hold,y=Dc(n),h=["soft_guard","sensor_fallback","no_candidate","flow_preflow"].includes(n),g=tr(n),m=n==="flow_preflow"||n==="flow_too_low",v={title:"Keuze van het systeem",summary:"De regelaar heeft een keuze vastgelegd.",detail:g.summary,next:"Het systeem beoordeelt opnieuw zodra vraag, marge of beschikbaarheid verandert."};return{source_start:{title:a?`Koeling gestart (${r})`:`${r} gestart`,reasonLabel:a?"Koeling gestart":"",reasonSummary:a?"Koeling is vrijgegeven en de gekozen warmtepomp start met koelen.":"",summary:a?`${r} is gestart om te koelen. Dauwpunt, waterflow en aanvoertemperatuur blijven bewaakt.`:`${r} is gekozen op basis van beschikbaarheid, wachttijd en draaiurenbalans.`,detail:a?"De koelvraag is vrijgegeven. HP1 en HP2 zijn gelijkwaardig; de regelaar kiest de beschikbare bron die nu het beste past.":"HP1 en HP2 zijn gelijkwaardig. De regelaar kiest de beschikbare bron die op dat moment het beste past.",next:a?"Koeling blijft actief zolang er koelvraag is en de veilige marges vrij blijven.":"Als de vraag hoog blijft, beoordeelt het systeem of extra vermogen nodig is."},source_stop:{title:a?c==="dew_stop"?`${r} gestopt door dauwpunt`:p?"Koeling gestopt: geen koelvraag":`Koeling afgerond (${r})`:u?"Verwarming gestopt: geen warmtevraag":n==="less_power"?"E\xE9n warmtepomp stopt":`${r} gestopt`,reasonLabel:a?c==="dew_stop"?"Dauwpuntstop":p?"Geen koelvraag":"Koeling afgerond":u?"Geen warmtevraag":n==="less_power"?"E\xE9n warmtepomp is genoeg":"",reasonSummary:a?c==="dew_stop"?"De warmtepomp stopte omdat de dauwpuntbewaking koelen pauzeerde.":p?"De koelvraag is weggevallen of voldoende afgenomen.":"De koelactie is afgerond. Een korte pompnaloop kan daarna normaal zijn.":u?"De warmtevraag is weggevallen. Een korte pompnaloop kan daarna normaal zijn.":n==="less_power"?"De warmtevraag is afgenomen; \xE9\xE9n warmtepomp kan de resterende vraag dragen.":"",summary:a?c==="dew_stop"?`${r} stopte omdat verder koelen te dicht bij het dauwpunt kwam.`:p?"Er is geen koelvraag meer; de warmtepomp stopt met koelen.":`${r} is klaar met koelen.`:u?"Er is geen warmtevraag meer; de warmtepomp stopt met verwarmen.":n==="less_power"?"De vraag is lager. E\xE9n warmtepomp kan de resterende warmtevraag rustig dragen.":`${r} is gestopt omdat minder vermogen voldoende is of bescherming voorrang kreeg.`,detail:a?c==="dew_stop"?"Dit is beschermingsgedrag. Het systeem voorkomt condens en kan later opnieuw koelen zodra de marge veilig is.":"De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden.":u?"De regeling vraagt geen warmte meer. De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden.":"De regelaar voorkomt onnodig doordraaien en houdt tegelijk wachttijden en bescherming in de gaten.",next:a?c==="dew_stop"?"Bij blijvende koelvraag start koeling opnieuw zodra de dauwpuntmarge veilig genoeg is.":"Het systeem blijft standby of rondt de naloop af totdat er opnieuw koelvraag is.":u?"Het systeem blijft standby totdat er opnieuw warmtevraag is.":"Bij stijgende vraag kan dezelfde of de andere warmtepomp opnieuw starten."},topology_change:{title:a?e?.to==="idle"?n==="cooling_request_cleared"?"Koeling gestopt: geen koelvraag":n==="dew_stop"?"Koeling gestopt door dauwpunt":"Koeling gestopt":"Koeling actief":e?.to==="idle"&&u?"Verwarming gestopt: geen warmtevraag":e?.to==="duo"?"Twee warmtepompen verwarmen":"E\xE9n warmtepomp verwarmt",reasonLabel:a?e?.to==="idle"?n==="cooling_request_cleared"?"Geen koelvraag":n==="dew_stop"?"Dauwpuntstop":"Koeling gestopt":"Koeling actief":e?.to==="idle"&&u?"Geen warmtevraag":"",reasonSummary:a?e?.to==="idle"?n==="cooling_request_cleared"?"De koelvraag is weggevallen. Eventuele naloop is normaal.":n==="dew_stop"?"Koeling pauzeert om condens te voorkomen. Herstart kan zodra de marge veilig is.":"Er is geen warmtepomp meer actief voor koeling. Eventuele naloop is normaal.":"Koeling is actief. Het systeem bewaakt tegelijk de veilige marges.":e?.to==="idle"&&u?"De warmtevraag is weggevallen. Eventuele naloop is normaal.":"",summary:a?e?.to==="idle"?n==="cooling_request_cleared"?"De koelvraag is weg. Er is geen warmtepomp meer actief voor koeling.":n==="dew_stop"?"Koeling stopt tijdelijk omdat verder koelen te dicht bij het dauwpunt komt.":"Er is geen warmtepomp meer actief voor koeling.":`${r} koelt. Het systeem blijft dauwpunt, waterflow en aanvoertemperatuur bewaken.`:e?.to==="duo"?"Samen leveren de warmtepompen rustiger vermogen dan \xE9\xE9n warmtepomp op hoge belasting.":e?.to==="idle"&&u?"Er is geen warmtepomp meer actief voor verwarmen.":"De vraag is lager. E\xE9n warmtepomp kan de resterende vraag weer rustig dragen.",detail:a?"Koelen gebruikt dezelfde bronkeuze-logica als verwarmen: de warmtepompen zijn gelijkwaardig en de controller kiest de rustigste beschikbare bron.":"De duo-keuze gaat niet over hoofd- en hulppomp. De warmtepompen zijn gelijkwaardig; het systeem kiest de rustigste combinatie.",next:a?"Koeling blijft actief zolang er koelvraag is en bescherming geen beperking vraagt.":e?.to==="duo"?"Duo-bedrijf blijft actief zolang de extra reserve nuttig is.":e?.to==="idle"&&u?"Het systeem blijft standby totdat er opnieuw warmtevraag is.":"De tweede warmtepomp blijft beschikbaar als de vraag opnieuw stijgt."},decision_hold:{title:n==="defrost_hold"?"Keuze kort vastgehouden":"Start of wissel uitgesteld",summary:n==="defrost_hold"?"De regelaar laat ontdooien rustig afronden voordat hij opnieuw schakelt.":"De regelaar wacht bewust even om korte cycli en onrustig gedrag te voorkomen.",detail:g.summary,next:"Na de wachttijd beoordeelt het systeem opnieuw wat de rustigste keuze is."},decision_blocked:{title:r==="CV-ketel"?"CV-ketel niet vrijgegeven":"Actie geblokkeerd",summary:r==="CV-ketel"?"Er was een mogelijke hulpvraag, maar de CV-ketel was niet vrijgegeven.":"De gevraagde actie is tijdelijk niet toegestaan door een voorwaarde of bescherming.",detail:g.summary,next:"De regelaar probeert opnieuw zodra de voorwaarden vrij zijn."},candidate_blocked:{title:`${r} wacht nog`,summary:n==="candidate_in_rest"?`${r} zit nog in rusttijd na een vorige stop.`:`${r} is nu nog geen veilige kandidaat om te starten.`,detail:g.summary,next:"De regelaar probeert opnieuw zodra de voorwaarde vrij is en de vraag blijft bestaan."},flow_hold_start:{title:n==="flow_postflow"?d?"Koeling loopt nog kort door":b?"Verwarming loopt nog kort door":a?"Naloop na koelen actief":"Naloop actief":a?"Voorloop voor koelen":"Voorloop voor start",reasonLabel:n==="flow_postflow"?d||b?"Minimale looptijd":a?"Naloop na koelen":"Naloop actief":a?"Voorloop voor koelen":"Voorloop actief",reasonSummary:a?n==="flow_postflow"?d?`${i} staat nog op Cooling terwijl het systeem al in CM1 naloop zit.`:"De pomp draait kort na om het koelbedrijf netjes af te ronden.":"De pomp draait eerst kort zodat de flow stabiel is voordat de warmtepomp met koelen start.":b?`${l} verwarmt nog terwijl de regelaar al in CM1 naloop zit.`:"",summary:a?n==="flow_postflow"?d?`${i} koelt nog kort door door minimale looptijd; het systeem zit al in naloop.`:"De pomp draait kort na zodat het koelbedrijf netjes wordt afgerond.":"De pomp draait eerst kort voor. Daarna mag de warmtepomp met koelen starten.":m?"De pomp draait eerst kort voor zodat de flow stabiel is voordat de warmtepomp start.":b?`${l} verwarmt nog kort door door minimale looptijd; het systeem zit al in naloop.`:g.summary,detail:a?d?"De controller vraagt geen nieuwe koelactie meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop.":"Dit is een normale startstap. De pomp krijgt eerst ongeveer 30 seconden om waterflow op te bouwen; daarna wordt de koelactie vrijgegeven.":b?"De regelaar vraagt geen nieuwe warmte meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop.":"CM1 wordt gebruikt als korte flowfase. De pomp krijgt eerst even tijd om waterflow op te bouwen voordat de warmtepomp start of stopt.",next:a?n==="flow_postflow"?d?`${i} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`:"Daarna blijft het systeem standby of beoordeelt het een nieuwe koelvraag.":"Na de korte voorloop gaat het systeem automatisch door met koelen.":b?`${l} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`:"De regelaar gaat automatisch verder zodra de flowfase klaar is."},flow_hold_clear:{title:n==="flow_postflow"?a?"Naloop na koelen klaar":"Naloop klaar":a?"Voorloop voor koelen klaar":"Voorloop klaar",reasonLabel:n==="flow_postflow"?a?"Naloop na koelen":"Naloop actief":a?"Koelen vrijgegeven":"Voorloop klaar",reasonSummary:a?n==="flow_postflow"?"De korte pompnaloop na koelen is afgerond.":"De waterflow is voldoende; de warmtepomp kan met koelen verder.":"",summary:a?n==="flow_postflow"?"De pomp heeft kort nagedraaid; het koelbedrijf is afgerond.":"De waterflow is voldoende; koeling kan verder.":n==="flow_postflow"?"De pomp heeft kort nagedraaid; het systeem kan terug naar standby.":"De waterflowfase is afgerond; de normale regeling kan verder.",detail:a?"De flowfase hoort bij het koeltraject. Dit is normaal gedrag rond starten of stoppen van koeling.":g.summary,next:a?n==="flow_postflow"?"Het systeem blijft standby totdat er opnieuw koelvraag of bescherming nodig is.":"De controller vervolgt met koelen en blijft dauwpunt en aanvoer bewaken.":"De controller vervolgt met verwarmen, koelen, vorstbescherming of standby."},defrost_seen_start:{title:`Ontdooien gestart (${r})`,summary:`${r} ontdooit kort. Dat is normaal bij koud en vochtig weer.`,detail:"De buitenunit bepaalt zelf hoe lang ontdooien duurt. De regelaar voorkomt ondertussen onnodige wissels.",next:"Na ontdooien levert de warmtepomp automatisch weer normaal mee."},defrost_seen_clear:{title:`Ontdooien klaar (${r})`,summary:`${r} heeft ontdooien afgerond en kan weer normaal vermogen leveren.`,detail:"De regelaar ziet dat de ontdooifase voorbij is en laat de normale regeling weer doorlopen.",next:"Bij aanhoudende vraag blijft de warmtepomp actief of schakelt duo-bedrijf bij."},cooling_limited:{title:n==="dew_stop"?"Koeling gestopt door dauwpunt":y?"Koeling tijdelijk beperkt":"Koeling op ingesteld maximum",summary:n==="dew_stop"?`${i} stopt omdat verder koelen te dicht bij het dauwpunt komt.`:y?"Er is koelvraag, maar het systeem houdt het koelvermogen tijdelijk lager.":"Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum.",detail:g.summary,next:y?"Koeling wordt vrijgegeven zodra de veilige marge stabiel genoeg is.":"Koeling blijft binnen dit maximum zolang de instelling en koelvraag gelijk blijven."},cooling_released:{title:"Koeling vrijgegeven",summary:"De veilige marge is terug. De warmtepomp mag weer normaal koelen.",detail:"De dauwpunt- en temperatuurmarge is voldoende hersteld om de begrenzing los te laten.",next:"De regelaar blijft koelen zolang de kamer daarom vraagt."},sticky_pump_run:{title:"Pompbescherming uitgevoerd",summary:"De pomp draaide kort na langere stilstand. Dit is geen verwarmings- of koelvraag.",detail:"Deze korte run voorkomt dat de pomp na stilstand vast gaat zitten.",next:"De volgende preventieve run volgt pas na de ingestelde beschermingstijd."},frost_protection_start:{title:"Vorstbescherming actief",summary:"Het systeem laat water circuleren om bevriezing te voorkomen.",detail:"Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",next:"Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt."},frost_protection_clear:{title:"Vorstbescherming gestopt",summary:"Het systeem verlaat de vorstbescherming en gaat terug naar normale regeling.",detail:"Het watercircuit hoeft niet langer apart beschermd te worden.",next:"Bij nieuw vorstrisico kan de bescherming automatisch opnieuw starten."},boiler_assist_start:{title:"CV-ketel ondersteunt tijdelijk",summary:"De CV-ketel helpt omdat extra capaciteit tijdelijk nuttig is.",detail:"De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",next:"De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen."},boiler_assist_stop:h?{title:n==="sensor_fallback"?"CV-ondersteuning gestopt: meting ontbreekt":n==="no_candidate"?"CV-ondersteuning niet beschikbaar":n==="flow_preflow"?"CV-ondersteuning wacht op voorloop":"CV-ondersteuning veilig gestopt",summary:n==="sensor_fallback"?"De CV-ketel is gestopt omdat een betrouwbare aanvoertemperatuur ontbreekt.":n==="no_candidate"?"De CV-ketel is uitgeschakeld of kan nu niet worden ingezet.":n==="flow_preflow"?"De CV-ketel wacht tijdens de test kort tot de waterflow stabiel is.":"De CV-ketel is gestopt omdat een veiligheidsgrens voor de watertemperatuur actief is.",detail:"Dit is een beschermende of configuratiegebonden keuze, niet een teken dat de warmtevraag vanzelf is afgenomen.",next:"De regelaar beoordeelt automatisch opnieuw zodra de blokkade is opgeheven."}:{title:"CV-ondersteuning gestopt",summary:"De extra ondersteuning is niet meer nodig.",detail:"De warmtevraag is genoeg gedaald of de warmtepompen kunnen het weer zelf dragen.",next:"De CV-ketel blijft beschikbaar als er later opnieuw extra capaciteit nodig is."},attention_pattern:{title:"Aandachtspunt gezien",summary:n==="start_stop_rate_high"?"Er zijn relatief veel starts/stops gezien. Dat is nuttig om te volgen.":"Het systeem ziet een patroon dat extra aandacht verdient.",detail:g.summary,next:"Als het patroon aanhoudt, blijft dit zichtbaar voor support en analyse."}}[t]||v}function i1(e,t,r){let n=Number(t?.duration_s);if(!Number.isFinite(n)||n<=0)return e;let a=Kn(t,r);return Math.max(e,Math.min(1440,e+Math.max(5,a)))}function s1(e){let t=String(e?.event_type||""),r=String(e?.reason||"");if(t==="cooling_limited"&&r==="cooling_limiter")return"normal";if(Dc(r))return"limited";if(t==="flow_hold_start"||t==="flow_hold_clear"){if(r==="flow_preflow"||r==="flow_postflow")return"normal";if(r==="flow_too_low"){let n=Number(e?.duration_s);return Number.isFinite(n)&&n>90?"limited":"normal"}}return String(e?.severity||"normal")}function l1(e,t,r){let n=String(e?.event_type||""),a=String(e?.reason||"unknown");if(!n||n==="boot_marker"||e?._oq_hidden||(n==="defrost_seen_start"||n==="defrost_seen_clear")&&Number(e?._oq_context_cm??e?.cm)===5||n==="cooling_limited"&&a==="cooling_limiter"||n==="cooling_released")return null;let i=o1(e,t,r);if(!Number.isFinite(i))return null;let l=a1(e),c=Number(e?._oq_context_cm??e?.cm),p=n==="cooling_limited"||n==="cooling_released"?n1(e):n==="source_start"||n==="source_stop"||n==="topology_change"?vt(e?.subject,c):Fc(e?.subject),u=Tf(e?.duration_s),d=s1(e);return{id:`fw-${e.seq||e.uptime_s||n}`,kind:"event",severity:d,time:r1(e,t,r),title:l.title,summary:l.summary,detailTitle:"Waarom gebeurde dit?",detail:l.detail,next:l.next,source:p,reasonLabel:l.reasonLabel||"",reasonSummary:l.reasonSummary||"",reasonCode:a,modeLabel:Number(e?.cm)>0?`CM${Number(e.cm)}`:"CM?",modeTransitionLabel:e?._oq_mode_transition||"",duration:u,graphStart:Math.max(0,Math.min(1440,i)),graphEnd:i1(i,e,t),realEventType:n,rawDecisionEvent:e,timelineHidden:(n==="source_start"||n==="topology_change")&&c===5||n==="source_stop"&&(e?._oq_cooling_stop_reason==="dew_stop"||a==="dew_stop")}}function c1(e,t,r,n){if(!Number.isFinite(e)||!Number.isFinite(t)||t<=e)return null;let a=nr(r,n),i=Math.max(e,a.start),l=Math.min(t,a.end);if(l<=i)return null;let c=Math.max(1,a.end-a.start);return{start:(i-a.start)/c*1440,end:(l-a.start)/c*1440,durationS:Math.max(0,Math.round((l-i)/1e3))}}function u1(e){let t=Number(e?._oq_context_cm??e?.cm);return Number.isFinite(t)&&t>0?`CM${t}`:"CM?"}function bi(e,t,r){let n=c1(e.startEpochMs,e.endEpochMs,t,r);return!n||n.durationS<Number(e.minDurationS||60)?null:{id:e.id,kind:"span",severity:e.severity||"normal",time:$f(n.start,n.end,!!e.isOpen),duration:Tf(n.durationS),title:e.title,summary:e.summary,detailTitle:e.detailTitle||"Waarom liep deze periode?",detail:e.detail,next:e.next,source:e.source||"Systeem",reasonCode:e.reasonCode||"keep_current",reasonLabel:e.reasonLabel||"",reasonSummary:e.reasonSummary||"",modeLabel:e.modeLabel||u1(e.startEvent),modeTransitionLabel:"",graphStart:Math.max(0,Math.min(1440,n.start)),graphEnd:Math.max(0,Math.min(1440,n.end)),derivedFromDecisionLog:!0}}function d1(e,t,r){let n=nr(t,r),a={HP1:[],HP2:[],cooling:[],boiler:[],frost:[]},i={HP1:null,HP2:null,cooling:null,boiler:null,frost:null},l=m=>{let v=String(m||"").toUpperCase();return v==="BOTH"?["HP1","HP2"]:v==="HP1"||v==="HP2"?[v]:[]},c=m=>rr(m),p=(m,v)=>{let S=c(v);!Number.isFinite(S)||i[m]||(i[m]={key:m,startEvent:v,startEpochMs:S})},u=(m,v)=>{let S=i[m],q=c(v);!S||!Number.isFinite(q)||(q>S.startEpochMs&&a[m].push({...S,endEvent:v,endEpochMs:q}),i[m]=null)},d=m=>{["HP1","HP2"].some(S=>i[S]&&Number(i[S].startEvent?._oq_context_cm??i[S].startEvent?.cm)===5)||u("cooling",m)};e.filter(m=>m&&!m._oq_hidden).sort((m,v)=>Number(m?.uptime_s??m?.seq??0)-Number(v?.uptime_s??v?.seq??0)).forEach(m=>{let v=String(m?.event_type||""),S=Number(m?._oq_context_cm??m?.cm);if(v==="source_start")l(m.subject).forEach(q=>p(q,m)),S===5&&p("cooling",m);else if(v==="source_stop")l(m.subject).forEach(q=>u(q,m)),(S===5||i.cooling)&&d(m);else if(v==="topology_change")if(m.to==="duo")p("HP1",m),p("HP2",m);else if(m.to==="single"){let q=Ic(m);q?(p(q,m),u(q==="HP1"?"HP2":"HP1",m)):u("HP2",m),d(m)}else m.to==="idle"&&(u("HP1",m),u("HP2",m),u("cooling",m));else v==="boiler_assist_start"?p("boiler",m):v==="boiler_assist_stop"?u("boiler",m):v==="frost_protection_start"?p("frost",m):v==="frost_protection_clear"?u("frost",m):v==="flow_hold_clear"&&m.reason==="flow_postflow"&&u("cooling",m)}),Object.keys(i).forEach(m=>{if(i[m]){let v=t==="today"?Math.min(n.end,r):n.end;a[m].push({...i[m],endEvent:null,endEpochMs:v,isOpen:!0})}});let b=[],y=m=>{m&&b.push(m)},h=(m,v)=>m.startEpochMs<v.endEpochMs&&v.startEpochMs<m.endEpochMs,g=m=>{let v=["HP1","HP2"].filter(S=>a[S].some(q=>Number(q.startEvent?._oq_context_cm??q.startEvent?.cm)===5&&h(q,m)));return v.length===2?vt("BOTH",5):v.length===1?vt(v[0],5):vt(m.startEvent?.subject,5)};return a.boiler.forEach((m,v)=>{y(bi({id:`fw-span-boiler-${v}-${m.startEvent?.seq||m.startEpochMs}`,startEpochMs:m.startEpochMs,endEpochMs:m.endEpochMs,isOpen:!!m.isOpen,startEvent:m.startEvent,severity:"normal",title:"CV-ketel ondersteunde tijdelijk",summary:"De CV-ketel hielp tijdelijk mee toen extra vermogen nuttig was.",detail:"De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",next:"De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen.",source:"CV-ketel",reasonCode:"boiler_assist",modeLabel:"CM3",minDurationS:120},t,r))}),a.cooling.forEach((m,v)=>{y(bi({id:`fw-span-cooling-${v}-${m.startEvent?.seq||m.startEpochMs}`,startEpochMs:m.startEpochMs,endEpochMs:m.endEpochMs,isOpen:!!m.isOpen,startEvent:m.startEvent,severity:"normal",title:"Koeling actief",summary:"Er was koelvraag en de warmtepomp koelde binnen de normale regeling.",detail:"Tijdens koelen bewaakt de controller continu waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij die normale regeling.",next:"Koeling stopt zodra de koelvraag wegvalt of tijdelijk pauzeert als een veiligheidsmarge daarom vraagt.",source:g(m),reasonCode:"keep_current",reasonLabel:"Koeling gestart",reasonSummary:"De koelrun is gestart en liep binnen de normale regeling.",modeLabel:"CM5",minDurationS:120},t,r))}),a.frost.forEach((m,v)=>{y(bi({id:`fw-span-frost-${v}-${m.startEvent?.seq||m.startEpochMs}`,startEpochMs:m.startEpochMs,endEpochMs:m.endEpochMs,isOpen:!!m.isOpen,startEvent:m.startEvent,severity:"limited",title:"Vorstbescherming actief",summary:"Het systeem liet water circuleren om bevriezing te voorkomen.",detail:"Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",next:"Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",source:"Systeem",reasonCode:"frost_protection",modeLabel:"CM98",minDurationS:60},t,r))}),a.HP1.forEach((m,v)=>{a.HP2.forEach(S=>{let q=Math.max(m.startEpochMs,S.startEpochMs),C=Math.min(m.endEpochMs,S.endEpochMs),k=m.startEpochMs>=S.startEpochMs?m.startEvent:S.startEvent,$=Number(m.startEvent?._oq_context_cm??m.startEvent?.cm),D=Number(S.startEvent?._oq_context_cm??S.startEvent?.cm);if(Number(k?._oq_context_cm??k?.cm)===5||$===5||D===5)return;let z=!!(m.isOpen&&S.isOpen);y(bi({id:`fw-span-duo-${v}-${m.startEvent?.seq||m.startEpochMs}-${S.startEvent?.seq||S.startEpochMs}`,startEpochMs:q,endEpochMs:C,isOpen:z,startEvent:k,severity:"normal",title:"Twee warmtepompen verwarmen",summary:"HP1 en HP2 draaiden tegelijk omdat extra capaciteit nuttig was.",detail:"De warmtepompen zijn gelijkwaardig. Twee bronnen verdelen de belasting wanneer \xE9\xE9n warmtepomp de vraag minder rustig kan dragen.",next:"Het systeem schakelt terug naar \xE9\xE9n warmtepomp zodra single-bedrijf weer voldoende of rustiger is.",source:vt("BOTH",2),reasonCode:"better_heat",modeLabel:"CM2",minDurationS:300},t,r))})}),b}function xf(e){let t=[...e].sort((d,b)=>{let y=Number(d?.uptime_s??d?.seq??0),h=Number(b?.uptime_s??b?.seq??0);return y-h}),r={HP1:0,HP2:0},n={HP1:!1,HP2:!1},a=0,i=0,l=0,c="",p=d=>{let b=String(d||"").toUpperCase();return b==="BOTH"?["HP1","HP2"]:b==="HP1"||b==="HP2"?[b]:[]},u=d=>{let b=Number(t[d]?.uptime_s);for(let y=1;y<=6&&d+y<t.length;y+=1){let h=t[d+y],g=Number(h?.uptime_s);if(Number.isFinite(b)&&Number.isFinite(g)&&g-b>300)break;let m=String(h?.event_type||"");if(m==="flow_hold_clear"&&Number(h?.value_a)===5||(m==="source_start"||m==="topology_change"||m==="cooling_limited")&&Number(h?.cm)===5)return 5;if(m==="flow_hold_start")break}return 0};return t.map((d,b)=>{let y={...d},h=String(d?.event_type||""),g=String(d?.subject||"").toUpperCase(),m=String(d?.reason||""),v=Number(d?.cm)||0,S=v,q=!1,C="",k="",$=!1,D="",N=!1,z="",H=l,U=()=>["HP1","HP2"].filter(L=>r[L]===5),A=()=>["HP1","HP2"].filter(L=>r[L]>0&&r[L]!==5);if(h==="source_start")S=v||S,p(g).forEach(L=>{r[L]=S});else if(h==="source_stop")S=p(g).map(P=>r[P]).find(P=>P>0)||S,S===5&&c&&(z=c,c=""),p(g).forEach(P=>{r[P]=0});else if(h==="topology_change")d?.to==="idle"?(S=a||S,a=0):(d?.to==="single"||d?.to==="duo")&&(S=v||a||S,a=S);else if(h==="flow_hold_start"){let L=U(),P=A(),Z=Number(d?.value_a);S=m==="flow_postflow"?a||S:Z||u(b)||S,m==="flow_postflow"&&S===5&&L.length&&(C=L.join(" + "),$=!0),m==="flow_postflow"&&S!==5&&P.length&&(D=P.join(" + "),N=!0),i=S}else if(h==="flow_hold_clear")S=Number(d?.value_a)||i||a||S,i=0;else if(h==="cooling_limited"||h==="cooling_released"){S=5;let L=U();L.length&&(C=L.join(" + "),k=L.length===2?"BOTH":L[0]),h==="cooling_limited"&&m==="dew_stop"&&(c="dew_stop")}if(h==="defrost_seen_start"||h==="defrost_seen_clear"){let L=g==="HP1"||g==="HP2"?g:"HP1";S===5||v===5?q=!0:h==="defrost_seen_start"?n[L]=!0:n[L]?n[L]=!1:q=!0}y._oq_context_cm=S,y._oq_hidden=q,y._oq_active_cooling_source=C,y._oq_active_cooling_subject=k,y._oq_cooling_runtime_hold=$,y._oq_active_heating_source=D,y._oq_heating_runtime_hold=N,y._oq_cooling_stop_reason=z,y._oq_previous_cm=H,y._oq_mode_transition=Xq(d,H);let I=e1(d);return Number.isFinite(I)&&(l=I),y})}function p1(){let e=Cf();if(!e.length)return[];let t=lt(),r=Date.now(),n=xf(e),a=n.map(l=>l1(l,t,r)).filter(Boolean),i=d1(n,t,r);return[...a,...i].sort((l,c)=>{let p=Pt(c).start-Pt(l).start;if(p!==0)return p;let u={event:0,span:1,aggregate:2};return(u[l.kind]??3)-(u[c.kind]??3)})}function m1(e){let t=p1();return t.length?t:[]}function g1(e){let t=e.filter(r=>!r.timelineHidden);return t.some(r=>r.id===o.controlReplaySelectedEpisode)?t.find(r=>r.id===o.controlReplaySelectedEpisode):t.find(r=>r.kind==="span"&&r.reasonCode==="better_heat")||t.find(r=>r.kind==="span")||t[0]||null}function lf(e){let t=String(e||"").match(/(\d{1,2}):(\d{2})/);if(!t)return Number.NaN;let r=Number.parseInt(t[1],10),n=Number.parseInt(t[2],10);return!Number.isFinite(r)||!Number.isFinite(n)?Number.NaN:Math.max(0,Math.min(1440,r*60+n))}function Pt(e){if(Number.isFinite(Number(e?.graphStart))){let a=Math.max(0,Math.min(1440,Number(e.graphStart))),i=Number.isFinite(Number(e?.graphEnd))?Math.max(a,Math.min(1440,Number(e.graphEnd))):a;return{start:a,end:i}}let t=String(e?.time||"").match(/\d{1,2}:\d{2}/g)||[],r=lf(t[0]),n=lf(t[1]);return!Number.isNaN(r)&&!Number.isNaN(n)?{start:r,end:Math.max(r,n)}:Number.isNaN(r)?{start:430,end:430}:{start:r,end:r}}function jc(){let e=Number(o.controlReplayGraphMinute);return Number.isFinite(e)?Math.max(0,Math.min(1440,Math.round(e/5)*5)):430}function f1(e){let t=Math.max(0,Math.round(Number(e)||0));if(t<=5)return"Nu";let r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?n>0?`${r}d ${n}u geleden`:`${r}d geleden`:n>0?a>0?`${n}u ${a}m geleden`:`${n}u geleden`:`${a}m geleden`}function $c(e,t=Gn()){let r=Math.max(0,Math.min(1440,Number(e)||0));return t.calendarDay==="today"?er(hi(r,"today"),Date.now(),"time"):t.calendarDay==="yesterday"?er(hi(r,"yesterday"),Date.now(),"time"):t.id==="week"||t.id==="last48"||t.id==="last3d"||t.id==="custom"?er(hi(r,t.id),Date.now(),"weekday"):er(hi(r,t.id),Date.now(),"auto")}function h1(e,t){let r=Math.max(0,Math.min(1440,Number(t)||0)),n={span:0,aggregate:1,event:2};return e.filter(i=>!i.timelineHidden).map(i=>{let l=b1(i);if(r<l.start||r>l.end)return null;let c=Math.max(1,l.end-l.start);return{item:i,score:c+(n[i.kind]??3)*.1}}).filter(Boolean).sort((i,l)=>i.score-l.score)[0]?.item||null||v1(e,r)}function Kn(e,t=lt()){let r=Number(e?.duration_s);return!Number.isFinite(r)||r<=0?0:r/60*(1440/Nc(t))}function b1(e){let t=Pt(e),r=String(e?.realEventType||""),n=Kn(e?.rawDecisionEvent);if(r==="defrost_seen_clear"&&n>0){let a=Math.max(5,n);return{start:Math.max(0,t.start-a),end:t.start}}if((r==="flow_hold_clear"||r==="frost_protection_clear")&&n>0){let a=Math.max(1,n);return{start:Math.max(0,t.start-a),end:t.start}}return t.end>t.start?t:e?.kind==="event"?{start:t.start,end:Math.min(1440,t.start+12)}:t}function $f(e,t,r=!1){let n=Gn(),a=$c(e,n),i=r||t>=1440?"nu":$c(t,n);return`${a}-${i}`}function Mf(e=lt(),t=Date.now()){if(e!=="today")return 1440;let r=new Date(t);return Math.max(0,Math.min(1440,Math.round(r.getHours()*60+r.getMinutes()+r.getSeconds()/60)))}function v1(e,t){let r=[],n=new Map,a=[...e].filter(A=>A.rawDecisionEvent).sort((A,I)=>Pt(A).start-Pt(I).start),i=(A,I,L)=>{n.has(A)||n.set(A,{label:A,item:I,start:L})},l=(A,I)=>{let L=n.get(A);L&&(r.push({...L,end:Math.max(L.start,I)}),n.delete(A))},c=A=>{n.has("Koeling")&&!n.has("HP1")&&!n.has("HP2")&&l("Koeling",A)},p=A=>{let I=String(A||"").toUpperCase(),L=[];return(I==="HP1"||I==="BOTH")&&L.push("HP1"),(I==="HP2"||I==="BOTH")&&L.push("HP2"),L},u=Af(),d={reasonCode:"keep_current",severity:"normal",modeLabel:u.sourceModes.HP1||u.sourceModes.HP2?`CM${u.sourceModes.HP1||u.sourceModes.HP2}`:"CM?"};u.HP1&&i("HP1",d,0),u.HP2&&i("HP2",d,0),u.boiler&&i("CV-ketel",d,0),u.cooling&&i("Koeling",d,0),a.forEach(A=>{let I=Pt(A),L=String(A.realEventType||""),P=A.rawDecisionEvent||{},Z=Number(P._oq_context_cm??P.cm),_=p(P.subject);if(L==="source_start")_.forEach(j=>i(j,A,I.start)),Z===5&&i("Koeling",A,I.start);else if(L==="source_stop")_.forEach(j=>l(j,I.start)),(Z===5||n.has("Koeling"))&&c(I.start);else if(L==="topology_change")if(P.to==="duo")i("HP1",A,I.start),i("HP2",A,I.start);else if(P.to==="single"){let j=Ic(P);j?(i(j,A,I.start),l(j==="HP1"?"HP2":"HP1",I.start)):l("HP2",I.start),c(I.start)}else P.to==="idle"&&(l("HP1",I.start),l("HP2",I.start),l("Koeling",I.start));else L==="boiler_assist_start"?i("CV-ketel",A,I.start):L==="boiler_assist_stop"?l("CV-ketel",I.start):L==="flow_hold_clear"&&P.reason==="flow_postflow"&&l("Koeling",I.start)});let b=Mf();n.forEach(A=>{A.start<=b&&r.push({...A,end:b})});let y=r.filter(A=>t>=A.start&&t<=A.end);if(!y.length)return null;let h=new Set(y.map(A=>A.label)),g=["HP1","HP2"].filter(A=>h.has(A)),m=h.has("CV-ketel"),v=h.has("Koeling"),S=y.filter(A=>g.includes(A.label)||A.label==="CV-ketel"||A.label==="Koeling").sort((A,I)=>A.start-I.start)[0]||y[0],q=Math.max(...y.map(A=>A.start)),C=Math.min(...y.map(A=>A.end)),k=[...g,m?"CV-ketel":"",v?"Koeling":""].filter(Boolean).join(" + "),$="Bron actief",D="Deze bron was op dit tijdstip actief.",N="De grafiek toont hier een lopende periode. De start of stop staat als los beslismoment in de tijdlijn.",z="De controller blijft opnieuw beoordelen of deze bron nodig blijft.",H=S.item?.reasonCode||"keep_current",U="normal";return v?($="Koeling actief",D=g.length?`${g.join(" en ")} koelde${g.length===1?"":"n"} op dit tijdstip binnen de normale regeling.`:"De koeling was op dit tijdstip actief.",N="De controller bewaakt daarbij waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij de normale regeling.",z="Koeling gaat door zolang er koelvraag is en de veiligheidsmarges vrij blijven.",k=g.length===2?vt("BOTH",5):g.length===1?vt(g[0],5):"Koeling",H=S.item?.reasonCode||"keep_current",U=S.item?.severity||"normal"):g.length===2&&m?($="Warmtepompen en CV-ketel actief",D="Beide warmtepompen draaiden en de CV-ketel ondersteunde tijdelijk.",N="De warmtepompen leverden de basis. De CV-ketel vulde alleen aan zolang extra vermogen nodig was.",z="CV-ondersteuning stopt zodra de warmtepompen de vraag weer zelf rustig kunnen dragen.",H="boiler_assist",U="limited"):g.length===2?($="Twee warmtepompen verwarmen",D="HP1 en HP2 verwarmden tegelijk op dit tijdstip.",N="Twee gelijkwaardige warmtepompen kunnen hoge vraag rustiger leveren dan \xE9\xE9n warmtepomp op hoge belasting.",z="E\xE9n warmtepomp stopt zodra single-bedrijf weer voldoende of rustiger is.",k=vt("BOTH",2),H="better_heat"):g.length===1&&m?($=`${g[0]} en CV-ketel actief`,D="De warmtepomp draaide en de CV-ketel ondersteunde tijdelijk.",N="De CV-ketel vult alleen aan wanneer de warmtepomp de actuele vraag niet rustig genoeg kan dragen.",z="De CV-ketel stopt zodra aanvullende ondersteuning niet meer nodig is.",H="boiler_assist",U="limited"):g.length===1?($=`${g[0]} verwarmt`,D=`${g[0]} leverde op dit tijdstip warmte.`,N="De andere warmtepomp blijft beschikbaar. De controller schakelt pas bij of wisselt pas wanneer dat rustiger of nuttiger is.",z="Bij stijgende vraag kan een tweede warmtepomp bijschakelen; bij dalende vraag stopt deze bron.",k=vt(g[0],2),H=S.item?.reasonCode||"runtime_lead"):m&&($="CV-ketel ondersteunt",D="De CV-ketel leverde op dit tijdstip extra vermogen.",N="CV-ondersteuning is aanvullend op de warmtepompen en blijft tijdelijk.",z="De CV-ketel stopt zodra de extra capaciteit niet meer nodig is.",H="boiler_assist",U="limited"),{id:`graph-context-${Math.round(t)}-${Array.from(h).join("-")}`,kind:"span",severity:U,time:$f(q,C),duration:"",title:$,summary:D,detailTitle:"Wat gebeurt hier?",detail:N,next:z,source:k||"Systeem",reasonCode:H,modeLabel:S.item?.modeLabel||"CM?",graphStart:q,graphEnd:C}}function y1(){let e=Lc();return`
      <div class="oq-working-control-group">
        <span class="oq-working-control-label">Weergave</span>
        <div class="oq-working-tabs" role="tablist" aria-label="Beslislog weergave">
          ${hf().map(t=>`
            <button
              class="oq-working-tab${e===t.id?" is-active":""}"
              type="button"
              role="tab"
              aria-selected="${e===t.id?"true":"false"}"
              data-oq-action="select-control-replay-tab"
              data-replay-tab="${s(t.id)}"
            >
              ${$e(t.icon,"oq-working-tab-icon")}
              <span>${s(t.label)}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `}function w1(){let e=lt(),t=Gn(),r=Gq(),n=So().filter(d=>!d.quick&&!d.custom),a=Qq(),i=Yq(a),l=rf(a.start),c=rf(a.end),p=o.controlReplayPeriodMenuOpen,u=e==="custom"?"Eigen periode":r.some(d=>d.id===e)?"Kies periode":t.shortLabel;return`
      <div class="oq-working-control-group oq-working-control-group--period">
        <span class="oq-working-control-label">Periode</span>
        <div class="oq-working-window-controls" role="group" aria-label="Periode">
          <div class="oq-working-window-choices" aria-label="Snelle periodekeuzes">
          ${r.map(d=>`
            <button
              class="oq-working-window-choice${e===d.id?" is-active":""}"
              type="button"
              data-oq-action="select-control-replay-window"
              data-replay-window="${s(d.id)}"
              aria-pressed="${e===d.id?"true":"false"}"
              aria-label="${s(d.label)}"
            >
              ${s(d.shortLabel)}
            </button>
          `).join("")}
          </div>
          <div class="oq-working-period-menu" data-oq-control-replay-period-menu>
            <button
              class="oq-working-period-menu-toggle${p||!r.some(d=>d.id===e)?" is-active":""}"
              type="button"
              aria-expanded="${p?"true":"false"}"
              aria-haspopup="dialog"
              data-oq-action="toggle-control-replay-period-menu"
            >
              <span>${s(u)}</span>
              <span class="oq-working-period-menu-chevron" aria-hidden="true"></span>
            </button>
            ${p?`
              <section class="oq-working-period-popover" role="dialog" aria-label="Kies periode">
                <div class="oq-working-period-popover-head">
                  <strong>Ander tijdvenster</strong>
                </div>
                <div class="oq-working-period-option-grid">
                  ${n.map(d=>`
                    <button
                      class="oq-working-period-option${e===d.id?" is-active":""}"
                      type="button"
                      data-oq-action="select-control-replay-window"
                      data-replay-window="${s(d.id)}"
                      aria-pressed="${e===d.id?"true":"false"}"
                    >${s(d.shortLabel)}</button>
                  `).join("")}
                </div>
                <div class="oq-working-period-custom">
                  <button
                    class="oq-working-period-custom-toggle${o.controlReplayCustomPeriodOpen||e==="custom"?" is-active":""}"
                    type="button"
                    aria-expanded="${o.controlReplayCustomPeriodOpen?"true":"false"}"
                    data-oq-action="toggle-control-replay-custom-period"
                  >
                    <span>Eigen periode</span>
                    <span class="oq-working-period-custom-toggle-copy">Datum en uur</span>
                  </button>
                  ${o.controlReplayCustomPeriodOpen?`
                    <div class="oq-working-period-custom-fields">
                      <label>
                        <span>Van</span>
                        <div class="oq-working-period-date-hour">
                          <input type="date" min="${s(i.earliestDate)}" max="${s(i.startMaxDate)}" value="${s(l.date)}" data-oq-control-replay-custom-start-date data-oq-control-replay-custom-input>
                          <select aria-label="Uur van" data-oq-control-replay-custom-start-hour data-oq-control-replay-custom-input>
                            ${nf(l.hour)}
                          </select>
                        </div>
                      </label>
                      <label>
                        <span>Tot</span>
                        <div class="oq-working-period-date-hour">
                          <input type="date" min="${s(i.endMinDate)}" max="${s(i.endMaxDate)}" value="${s(c.date)}" data-oq-control-replay-custom-end-date data-oq-control-replay-custom-input>
                          <select aria-label="Uur tot" data-oq-control-replay-custom-end-hour data-oq-control-replay-custom-input>
                            ${nf(c.hour)}
                          </select>
                        </div>
                      </label>
                    </div>
                    <div class="oq-working-period-custom-actions">
                      <span>Maximaal 7 dagen</span>
                      <button class="oq-working-period-apply" type="button" data-oq-action="apply-control-replay-custom-period">Toepassen</button>
                    </div>
                    ${o.controlReplayCustomPeriodError?`<p class="oq-working-period-error" role="alert">${s(o.controlReplayCustomPeriodError)}</p>`:""}
                  `:""}
                </div>
              </section>
            `:""}
          </div>
        </div>
      </div>
    `}function S1(e){let t=Oc(e.severity);return`
      <section class="oq-working-now oq-working-now--${s(t.tone)}">
        <div class="oq-working-now-main">
          <span class="oq-working-eyebrow">Actuele situatie</span>
          <h2>${s(e.title)}${_c(e)}</h2>
          <p>${s(e.copy)}</p>
          <div class="oq-working-pill-row">
            ${or(t.label,t.tone,"shield")}
            ${or(e.reasonLabel,"info","target")}
            ${or(e.sinceLabel,"context")}
          </div>
        </div>
        <div class="oq-working-now-next">
          <span>Wat doet het systeem daarna?</span>
          <strong>${s(e.expectation)}</strong>
          <div class="oq-working-source-strip">
            <span>HP1 \xB7 ${s(e.hp1Status)}</span>
            <span>HP2 \xB7 ${s(e.hp2Status)}</span>
            <span>CV \xB7 ${s(e.cvStatus)}</span>
          </div>
        </div>
      </section>
    `}function q1(e,t){let r=Oc(e.severity),n=t&&t.id===e.id,a=wf(e.kind),i=yf(e);return`
      <button
        class="oq-working-entry oq-working-entry--${s(e.kind)} oq-working-entry--${s(r.tone)}${n?" is-active":""}"
        type="button"
        data-oq-action="select-control-replay-episode"
        data-replay-episode="${s(e.id)}"
      >
        <span class="oq-working-entry-time">
          <strong>${s(e.time)}</strong>
          <small>${s(a)}</small>
        </span>
        <span class="oq-working-entry-rail" aria-hidden="true"></span>
        <span class="oq-working-entry-body">
          <span class="oq-working-entry-title">
            <strong>${s(e.title)}</strong>
            ${_c(e)}
            ${e.count?`<em>${s(e.count)}</em>`:""}
          </span>
          <span class="oq-working-entry-summary">${s(e.summary)}</span>
          <span class="oq-working-entry-meta">
            <span>${s(e.source)}</span>
            ${i?`<span class="oq-working-entry-meta-mode">${s(i)}</span>`:""}
            <span>${s(e.reasonLabel||vf(e.reasonCode))}</span>
            ${e.duration?`<span>Duur: ${s(e.duration)}</span>`:""}
          </span>
        </span>
        <span class="oq-working-entry-status">${s(r.label)}</span>
      </button>
    `}function Hf(e){if(!e)return"";let t=Oc(e.severity),r=tr(e.reasonCode),n=e.reasonLabel||r.label,a=e.reasonSummary||r.summary,i=Sf(e),l=yf(e);return`
      <aside class="oq-working-detail oq-working-detail--${s(t.tone)}">
        <div>
          <span class="oq-working-eyebrow">Geselecteerd</span>
          <h3>${s(e.title)}${_c(e)}</h3>
          <p>${s(e.summary)}</p>
        </div>
        <div class="oq-working-detail-block">
          <strong>Waarom?</strong>
          <span>${s(e.detail)}</span>
        </div>
        <div class="oq-working-detail-block">
          <strong>Is dit normaal?</strong>
          <span>${s(a)}</span>
        </div>
        <div class="oq-working-detail-block">
          <strong>Wat gebeurt daarna?</strong>
          <span>${s(e.next)}</span>
        </div>
        ${qf(i)}
        ${r.checks.length?`
          <div class="oq-working-checks" aria-label="Beslisfactoren">
            ${r.checks.map(c=>`<span>${$e("shield","oq-working-reason-icon")} ${s(c)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-working-pill-row">
          ${or(t.label,t.tone,"shield")}
          ${or(n,"info","target")}
          ${or(e.source,"context")}
        </div>
        <details class="oq-working-support" data-replay-support-item="${s(e.id)}"${o.controlReplaySupportDetailsItemId===e.id?" open":""}>
          <summary data-oq-action="toggle-control-replay-support-details">Details voor support</summary>
          <dl>
            <div><dt>Record</dt><dd>${s(wf(e.kind))}</dd></div>
            <div><dt>Bron</dt><dd>${s(e.source)}</dd></div>
            <div><dt>Control mode</dt><dd>${s(e.modeLabel)}</dd></div>
            ${l?`<div><dt>CM wijziging</dt><dd>${s(l)}</dd></div>`:""}
            <div><dt>Reason code</dt><dd>${s(e.reasonCode)}</dd></div>
          </dl>
        </details>
      </aside>
    `}function k1(e){return`
      <aside class="oq-working-detail">
        <div>
          <span class="oq-working-eyebrow">Tussen beslismomenten</span>
          <h3>Geen nieuw beslismoment om ${s(e)}</h3>
          <p>Op dit moment veranderde de controller niets. De laatst gekozen situatie blijft gelden.</p>
        </div>
        <div class="oq-working-detail-block">
          <strong>Wat betekent dit?</strong>
          <span>In deze grafiek worden alleen controllerkeuzes, bescherming en bronwissels toegelicht. Tussen die momenten blijft de laatste keuze gewoon gelden.</span>
        </div>
      </aside>
    `}function vi(e,t){return`
      <div class="oq-working-empty">
        <strong>${s(e)}</strong>
        <span>${s(t)}</span>
      </div>
    `}function C1(e,t){let r=Gn(),a=e.filter(c=>!c.timelineHidden).slice(0,80),i=String(o.decisionLogError||"").trim(),l=!a.length&&!o.decisionLog&&!i;return`
      <div class="oq-working-split">
        <section class="oq-working-list" aria-label="${s(r.eyebrow)}">
          <div class="oq-working-list-head">
            <div>
              <span class="oq-working-eyebrow">${s(r.eyebrow)}</span>
              <h3>${s(r.title)}</h3>
            </div>
            <p>${s(r.copy)}</p>
          </div>
          ${a.length?`<div class="oq-working-timeline">
                ${a.map(c=>q1(c,t)).join("")}
              </div>`:i?vi("Beslislog niet beschikbaar",`De firmwarelog kon niet worden geladen (${i}). Dit betekent niet dat deze periode leeg is.`):l?vi("Beslislog laden","De controllerkeuzes worden opgehaald. Dit duurt meestal maar heel kort."):vi("Nog geen gebeurtenissen","De beslislog is leeg voor deze periode. Nieuwe controllerkeuzes verschijnen hier zodra de firmware ze vastlegt.")}
        </section>
        ${t?Hf(t):""}
      </div>
    `}function yc(e,t,r,n,a){return`
      <article class="oq-working-source-card${a?" is-active":""}">
        <div>
          <span>${s(e)}</span>
          <strong>${s(t)}</strong>
        </div>
        <dl>
          <div><dt>Starts 24u</dt><dd>${s(r)}</dd></div>
          <div><dt>Draaiuren</dt><dd>${s(n)}</dd></div>
        </dl>
      </article>
    `}function E1(e){let t=tr(e.primaryReason),r=Sf({primaryReason:e.primaryReason,source:e.hp1Running&&e.hp2Running?"HP1 + HP2":e.hp1Running?"HP1":e.hp2Running?"HP2":"Geen bron"}),n=!!e.coolingProtection,a=!!e.coolingCapped,i=e.primaryReason==="sticky_protection",l=n?"Koeling tijdelijk beperkt":a?"Koeling met ingesteld maximum":i?"Geen comfortvraag actief":"Geen beperking actief",c=n?"De aanvoer blijft boven de veilige grens. Daarom koelt het systeem tijdelijk minder hard.":a?"Dit is normale koeling binnen de ingestelde softwaregrens. Dauwpunt en waterflow blijven wel gewoon bewaakt.":i?"Alleen de pomp draait kort. De warmtepompen blijven uit en er worden geen compressorstarts geteld.":"Ontdooien, minimum rusttijd, dauwpunt en waterflow blijven bewaakt. Ze verschijnen hier zodra ze gedrag begrenzen.",p=n?[["Dauwpunt bewaakt","limited","droplet"],[`Max. niveau ${e.cooling.allowedMax}`,"info","target"],[`Nu niveau ${e.cooling.limitedDemand}`,"context","bar-chart"]]:a?[[`Ingesteld max. ${e.cooling.allowedMax}`,"info","target"],[`Nu niveau ${e.cooling.limitedDemand}`,"normal","bar-chart"],["Marge bewaakt","context","shield"]]:i?[["Korte pomprun","normal","shield"],["Geen koelvraag","context","snowflake"],["Geen warmtepompstart","info","activity"]]:[["Ontdooien vrij","normal","snowflake"],["Rusttijd vrij","normal","activity"],["Waterflow bewaakt","info","waves"]],u=[["Aanvoer",e.supplyTemp],["Buiten",e.outsideTemp],["Flow",e.flow],["Strategie",e.strategyLabel]];return(e.cooling.requestActive||n||a)&&(u.push(["Dauwpunt",e.cooling.dewPoint]),u.push(["Veilige min.",e.cooling.safeSupply])),`
      <div class="oq-working-status">
        ${S1(e)}
        <div class="oq-working-status-grid">
          <section class="oq-working-status-main">
            <span class="oq-working-eyebrow">Waarom deze keuze?</span>
            <h3>${s(t.label)}</h3>
            <p>${s(t.summary)}</p>
            <div class="oq-working-reason-list">
              ${t.checks.map(d=>`<span>${$e("target","oq-working-reason-icon")} ${s(d)}</span>`).join("")}
            </div>
          </section>
          <section class="oq-working-optimizer-panel">
            ${qf(r)}
          </section>
          <section class="oq-working-source-grid" aria-label="Bronnen">
            ${yc("HP1",e.hp1Status,e.hp1Starts,e.hp1Hours,e.hp1Running)}
            ${yc("HP2",e.hp2Status,e.hp2Starts,e.hp2Hours,e.hp2Running)}
            ${yc("CV",e.cvStatus,"\u2014","\u2014",e.cvStatus==="Actief")}
          </section>
          <section class="oq-working-guard-panel">
            <span class="oq-working-eyebrow">Bescherming</span>
            <h3>${s(l)}</h3>
            <p>${s(c)}</p>
            <div class="oq-working-pill-row">
              ${p.map(([d,b,y])=>or(d,b,y)).join("")}
            </div>
          </section>
          <section class="oq-working-telemetry">
            <span class="oq-working-eyebrow">Context</span>
            <dl>
              ${u.map(([d,b])=>`<div><dt>${s(d)}</dt><dd>${s(b)}</dd></div>`).join("")}
            </dl>
          </section>
        </div>
      </div>
    `}function T1(e,t,r){return`
      <div class="oq-working-chart-lane">
        <span>${s(e)}</span>
        <div class="oq-working-chart-track">
          ${r.map(n=>`
            <i class="oq-working-chart-segment oq-working-chart-segment--${s(n.tone||t)}" style="--oq-chart-left:${ef(n.start)}%;--oq-chart-width:${ef(n.width)}%;"></i>
          `).join("")}
        </div>
      </div>
    `}function Af(){let e=nr(),t={HP1:!1,HP2:!1,boiler:!1,cooling:!1},r={HP1:0,HP2:0},n=i=>{let l=String(i||"").toUpperCase();return l==="BOTH"?["HP1","HP2"]:l==="HP1"||l==="HP2"?[l]:[]};return xf(Cf()).filter(i=>i&&!i._oq_hidden).sort((i,l)=>{let c=rr(i),p=rr(l);return(Number.isFinite(c)?c:Number.POSITIVE_INFINITY)-(Number.isFinite(p)?p:Number.POSITIVE_INFINITY)}).forEach(i=>{let l=rr(i);if(!Number.isFinite(l)||l>e.start)return;let c=String(i.event_type||""),p=Number(i._oq_context_cm??i.cm);c==="source_start"?n(i.subject).forEach(u=>{t[u]=!0,r[u]=p}):c==="source_stop"?n(i.subject).forEach(u=>{t[u]=!1,r[u]=0}):c==="boiler_assist_start"?t.boiler=!0:c==="boiler_assist_stop"&&(t.boiler=!1)}),t.cooling=["HP1","HP2"].some(i=>t[i]&&r[i]===5),{...t,sourceModes:r}}function x1(e){if(!e.some(h=>h.rawDecisionEvent))return null;let t=[{label:"HP1",tone:"running",segments:[]},{label:"HP2",tone:"running",segments:[]},{label:"CV-ketel",tone:"assist",segments:[]},{label:"Koeling",tone:"cooling",segments:[]},{label:"Ontdooien",tone:"defrost",segments:[]},{label:"Bescherming",tone:"limited",segments:[]}],r=Object.fromEntries(t.map(h=>[h.label,h])),n=(h,g,m,v,S=.5)=>{if(!r[h]||!Number.isFinite(g))return;let q=Math.max(0,Math.min(1440,Number(g))),C=Number.isFinite(m)?Math.max(q,Math.min(1440,Number(m))):q,k=Math.max(S,(C-q)/1440*100);r[h].segments.push({start:q/1440*100,width:k,tone:v})},a=(h,g,m,v=.5)=>{let S=Pt(g);n(h,S.start,S.end,m,v)},i=[...e].filter(h=>h.rawDecisionEvent).sort((h,g)=>Pt(h).start-Pt(g).start),l={HP1:null,HP2:null,"CV-ketel":null,Koeling:null},c=(h,g)=>{l[h]==null&&(l[h]=g)},p=(h,g,m="running",v=.8)=>l[h]==null?!1:(n(h,l[h],g,m,v),l[h]=null,!0),u=h=>{l.Koeling!=null&&l.HP1==null&&l.HP2==null&&p("Koeling",h,"cooling",.8)},d={},b=Af();b.HP1&&c("HP1",0),b.HP2&&c("HP2",0),b.boiler&&c("CV-ketel",0),b.cooling&&c("Koeling",0),i.forEach(h=>{let g=Pt(h),m=String(h.realEventType||""),v=String(h.rawDecisionEvent?.subject||"").toUpperCase(),S=Number(h.rawDecisionEvent?._oq_context_cm??h.rawDecisionEvent?.cm),q=[];if((v==="HP1"||v==="BOTH")&&q.push("HP1"),(v==="HP2"||v==="BOTH")&&q.push("HP2"),m==="source_start")q.forEach(k=>c(k,g.start)),S===5&&c("Koeling",g.start);else if(m==="source_stop")q.forEach(k=>{p(k,g.start,"running")||a(k,h,"standby",.55)}),(S===5||l.Koeling!=null)&&u(g.start);else if(m==="topology_change")if(h.rawDecisionEvent?.to==="duo")c("HP1",g.start),c("HP2",g.start);else if(h.rawDecisionEvent?.to==="single"){let k=Ic(h.rawDecisionEvent);k?(c(k,g.start),p(k==="HP1"?"HP2":"HP1",g.start,"running",.8)):p("HP2",g.start,"running",.8),u(g.start)}else h.rawDecisionEvent?.to==="idle"&&(p("HP1",g.start,"running",.8),p("HP2",g.start,"running",.8),p("Koeling",g.start,"cooling",.8));else if(m==="boiler_assist_start")c("CV-ketel",g.start);else if(m==="boiler_assist_stop")p("CV-ketel",g.start,"assist",.65)||a("CV-ketel",h,"standby",.65);else if(m==="candidate_blocked"||m==="flow_hold_start")a("Bescherming",h,"limited",.7);else if(m==="flow_hold_clear"){let k=Math.max(1,Kn(h.rawDecisionEvent));n("Bescherming",Math.max(0,g.start-k),g.start,"limited",.7),h.rawDecisionEvent?.reason==="flow_postflow"&&p("Koeling",g.start,"cooling",.8)}if(m==="defrost_seen_start")d[v||"SYSTEM"]=g.start;else if(m==="defrost_seen_clear"&&d[v||"SYSTEM"]!=null)n("Ontdooien",d[v||"SYSTEM"],g.start,"defrost",.7),d[v||"SYSTEM"]=null;else if(m==="defrost_seen_clear"&&Number(h.rawDecisionEvent?.duration_s)>0){let k=Math.max(5,Kn(h.rawDecisionEvent));n("Ontdooien",Math.max(0,g.start-k),g.start,"defrost",.7)}if(!(m==="candidate_blocked"||m==="flow_hold_start"||m==="flow_hold_clear")&&(h.severity==="limited"||h.severity==="attention"||m==="decision_blocked"||m==="decision_hold")&&a("Bescherming",h,h.severity==="attention"?"assist":"limited",.7),m==="sticky_pump_run"&&a("Bescherming",h,"safe",.6),m==="frost_protection_start")a("Bescherming",h,"limited",.8);else if(m==="frost_protection_clear"){let k=Math.max(1,Kn(h.rawDecisionEvent));n("Bescherming",Math.max(0,g.start-k),g.start,"limited",.8)}});let y=Mf();return Object.entries(l).forEach(([h,g])=>{g!=null&&g<=y&&n(h,g,y,h==="CV-ketel"?"assist":h==="Koeling"?"cooling":"running",.8)}),Object.values(d).forEach(h=>{h!=null&&n("Ontdooien",h,Math.min(1440,h+7),"defrost",.7)}),t.filter(h=>h.segments.length)}function $1(e){let t=x1(e);return t||[]}function M1(e,t){let r=jc(),n=r/1440*100,a=Gn(),i=$c(r,a),l=$1(t),c=l.length?l.map(p=>T1(p.label,p.tone,p.segments)).join(""):vi("Nog geen grafiekdata","De grafiek gebruikt alleen echte beslislog-records. Nieuwe bronwissels, defrosts of begrenzingen verschijnen hier vanzelf.");return`
      <div class="oq-working-graphs">
        <section class="oq-working-chart-panel">
          <div class="oq-working-chart-head">
            <div>
              <span class="oq-working-eyebrow">${s(a.eyebrow)}</span>
              <h3>Grafieken met beslismomenten</h3>
            </div>
            <p>${s(a.graphCopy)}</p>
          </div>
          <div class="oq-working-chart-axis" aria-hidden="true">
            ${a.axis.map(p=>`<span>${s(p)}</span>`).join("")}
          </div>
          <div class="oq-working-chart-body">
            <div class="oq-working-chart-control" data-oq-control-replay-scrub="true">
              <input
                class="oq-working-time-slider"
                type="range"
                min="0"
                max="1440"
                step="5"
                value="${s(String(r))}"
                aria-label="Tijd in grafiek"
                data-oq-control-replay-time="true"
              >
              <span class="oq-working-chart-cursor" style="--oq-chart-left:${s(String(n))}%;">
                <strong>${s(i)}</strong>
              </span>
            </div>
            ${c}
          </div>
        </section>
        ${e?Hf(e):k1(i)}
      </div>
    `}function Rf(e){let t=kf(e);return we({tab:Lc(),window:lt(),periodMenuOpen:o.controlReplayPeriodMenuOpen,customPeriodOpen:o.controlReplayCustomPeriodOpen,customStart:o.controlReplayCustomStart,customEnd:o.controlReplayCustomEnd,customPeriodError:o.controlReplayCustomPeriodError,selected:o.controlReplaySelectedEpisode,supportDetailsItem:o.controlReplaySupportDetailsItemId,graphMinute:jc(),mode:t.modeLabel,title:t.title,reason:t.primaryReason,hp1Running:t.hp1Running,hp2Running:t.hp2Running,hp1Starts:t.hp1Starts,hp2Starts:t.hp2Starts,hp1Hours:t.hp1Hours,hp2Hours:t.hp2Hours,cvStatus:t.cvStatus,strategy:t.strategyLabel,outside:t.outsideTemp,supply:t.supplyTemp,flow:t.flow,cooling:t.cooling,coolingProtection:t.coolingProtection,coolingCapped:t.coolingCapped,decisionLog:o.decisionLogSignature,decisionLogError:o.decisionLogError,theme:o.overviewTheme})}function Pf(e){let t=kf(e),r=m1(e),n=g1(r),a=Lc(),i=a==="graphs"?h1(r,jc()):n,l=a==="status"?E1(t):a==="graphs"?M1(i,r):C1(r,i),c=a==="status"?"":w1();return`
      <section class="oq-working" data-render-signature="${s(Rf(e))}">
        <header class="oq-working-head">
          <div class="oq-working-head-copy">
            <span class="oq-working-kicker">
              <span class="oq-working-eyebrow">Beslislog</span>
              <span class="oq-working-beta">BETA</span>
            </span>
            <h2>Keuzes van de controller, uitgelegd</h2>
            <p>Actueel toont wat het systeem nu doet. Tijdlijn toont hoe het zover kwam. Grafieken tonen het verloop.</p>
          </div>
          <div class="oq-working-head-actions">
            ${y1()}
            ${c}
          </div>
        </header>
        ${l}
      </section>
    `}function Df(){let e=qi();return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${Pf(e)}
        </div>
      </section>
    `}function H1(){if(!o.root||o.appView!=="control")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-working"):null;if(!e||!t)return!1;let r=document.activeElement;if(r&&r.closest("[data-oq-control-replay-period-menu]")&&r.matches("[data-oq-control-replay-custom-input]"))return!0;let n=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==n&&(e.className=n);let a=qi();return nt(t,Rf(a),Pf(a))||!0}function Nf(){let e=ic(),t=qi(),r=Pc(t),n=mf(t),a=gf(t);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${rc()}
          ${Gg(e)}
          <div class="oq-overview-main">
            ${sc(di())}
            ${mc()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(n)}">
            ${t.map((i,l)=>pf(i.title,i.keys,i.accent,yi(l,t,r),Cc(l,t,r))).join("")}
            ${kc()}
          </div>
        </div>
      </section>
    `}function A1(e,t,r){if(!e)return;let n=e.querySelector(t);n&&n.textContent!==r&&(n.textContent=r)}function Wr(e,t,r){e&&e.getAttribute(t)!==r&&e.setAttribute(t,r)}function R1(e,t){t.forEach(([r,n])=>{A1(e,`[data-oq-bind="${r}"]`,n)})}function P1(e,t){t.forEach(([r,n])=>{Wr(e.querySelector(`[data-oq-bind="${r}"]`),"aria-label",n)})}function D1(e,t,r,n=""){let a=e.querySelector(`[data-oq-bind="${t}"]`);a&&(a.classList.toggle("is-active",r),Wr(a,"tabindex",r?"0":"-1"),!r&&n&&Ci(e.querySelector(`[data-oq-bind="${n}"]`)))}function N1(e,t,r){Wr(e.querySelector(`[data-oq-bind="${t}"]`),"fill",r)}function Un(e,t,r,n){if(!e)return;let a=`${t}${r}`;n.map(l=>`${t}${l}`).find(l=>e.classList.contains(l))!==a&&(n.forEach(l=>e.classList.remove(`${t}${l}`)),e.classList.add(a))}function L1(e,t,r,n){let a=e.querySelector(`[data-oq-pipe="${t}"]`);a&&(Un(a,"oq-hp-tech-pipe--",r,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==n&&i.setAttribute("d",n)}))}function Ci(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function cf(e,t,r){!e||!t||!r||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(n=>{n!==r&&Ci(n)}),t.appendChild(r),r.classList.add("is-active"),r.setAttribute("aria-hidden","false"))}function O1(e,t,r,n){if(!e||!t||!r||!n||r.dataset.oqTooltipWired==="true")return;r.dataset.oqTooltipWired="true";let a=()=>{r.matches(":hover")||document.activeElement===r||Ci(n)};r.addEventListener("mouseenter",()=>cf(e,t,n)),r.addEventListener("mouseleave",a),r.addEventListener("focus",()=>cf(e,t,n)),r.addEventListener("blur",a)}function Lf(e){if(!e)return;let t=e.querySelector(".oq-hp-tech-svg");if(!t)return;let r=t.querySelector(".oq-hp-tech-tooltip-layer");r||(r=document.createElementNS("http://www.w3.org/2000/svg","g"),r.setAttribute("class","oq-hp-tech-tooltip-layer"),t.appendChild(r)),Array.from(t.querySelectorAll(".oq-hp-tech-tooltip")).forEach(n=>{r.appendChild(n)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(n=>{let a=n.getAttribute("data-oq-tooltip-target");if(!a)return;let i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);O1(e,r,n,i)})}function Of(e=o.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(t=>{Lf(t)})}function _1(e,t,r,n,a=null,i=null){if(!e)return;let l=i||Mc(t,r,n),{mode:c,running:p}=l,u=l.schematic,d=e.querySelector(".oq-overview-hp-head-title");d&&Ht(d,uf(t,a));let b=e.querySelector(".oq-overview-hp-head-side");if(b){let v=b.querySelector(".oq-overview-hp-status");v||(Ht(b,wc(c,p,u.warningActive,u.failureText)),v=b.querySelector(".oq-overview-hp-status")),jg(v,c,p,u.warningActive,u.failureText)}let y=e.querySelector("[data-oq-hp-board]");if(!y)return;y.className!==u.boardClass&&(y.className=u.boardClass),R1(y,[["status",u.statusText],["left-exchanger-title",u.leftExchangerTitle],["right-exchanger-title",u.rightExchangerTitle],["compressor-freq",u.compressorFreqText],["flow-value",u.flowText],["inner-coil-temp-value",u.innerCoilTempText],["evaporator-temp-value",u.evaporatorCoilTempText],["outside-temp-value",u.outsideTempText],["discharge-pressure-value",u.dischargePressureText],["discharge-temp-value",u.dischargeTempText],["suction-pressure-value",u.suctionPressureText],["suction-temp-value",u.suctionTempText],["supply-value",u.waterOutText],["return-value",u.waterInText],["footer-mode",u.mode],["footer-power",u.powerText],["footer-heat",u.heatText],["footer-efficiency-label",u.efficiencyLabel],["footer-efficiency",u.efficiencyText],["fan-speed-value",u.fanRpmText],["fourway-detail",u.fourWayPositionText],["eev-detail",u.eevPositionText]]);let h=y.querySelector('[data-oq-bind="footer-heat-label"]');if(h){Wr(h,"aria-label",u.heatLabel);let v=u.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";h.innerHTML!==v&&(h.innerHTML=v)}[["bottom-heater",u.bottomPlateActive],["crankcase-heater",u.crankcaseActive]].forEach(([v,S])=>{D1(y,v,S,`${v}-tooltip`)});let g=y.querySelector('[data-oq-bind="defrost-badge"]');g&&(Wr(g,"tabindex",u.defrostActive?"0":"-1"),Wr(g,"aria-label",u.defrostActive?"Defrost actief":"Defrost uit"),u.defrostActive||Ci(y.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",u.supplyLineTone],["return-tooltip",u.returnLineTone]].forEach(([v,S])=>{Un(y.querySelector(`[data-oq-bind="${v}"]`),"oq-hp-tech-tooltip--",S,["warm","supply","return"])}),P1(y,[["supply-reading",`Aanvoer temperatuur ${u.waterOutText}`],["flow-reading",`Flow ${u.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${u.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${u.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${u.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${u.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${u.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${u.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${u.dischargeTempText}`],["return-reading",`Retour temperatuur ${u.waterInText}`],["suction-pressure-reading",`Zuigdruk ${u.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${u.suctionTempText}`],["fourway-trigger",`4-wegklep, ${u.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${u.eevPositionText}`]]),Un(y.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",u.returnLineTone,["supply","return"]);let m=String(u.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");N1(y,"cond-water",`url(#${u.reverseCycle?`${m}-cond-water-cool`:`${m}-cond-water-heat`})`),Object.entries(u.pipes).forEach(([v,S])=>{L1(y,v.replace(/[A-Z]/g,q=>`-${q.toLowerCase()}`),S.tone,S.d)}),Lf(y),va()}function F1(){if(!o.root||o.appView!=="overview")return!1;let e=o.root.querySelector(".oq-overview-board");if(!e)return!1;let t=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==t&&(e.className=t);let r=ic(),n=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),c=e.querySelector(".oq-overview-trends"),p=e.querySelector(".oq-overview-hp-tools"),u=e.querySelector(".oq-overview-hp-grid"),d=e.querySelector("[data-oq-boiler-panel]"),b=qi();if(n){let q=It();nt(n,we(q),rc())}if(a){let q=a.querySelector(".oq-overview-top");q&&Ht(q,Wn(uc()));let C=a.querySelector(".oq-overview-statuspanel");if(C){let $=F("controlModeLabel");nt(C,we(lc(r,$)),cc(r,$))}let k=a.querySelector(".oq-overview-summary-side");if(k){let $=ba();k.dataset.renderSignature!==$&&(Ht(k,dc()),k.dataset.renderSignature=$)}}if(i&&nt(i,we(di()),sc(di())),l){let q=pi();nt(l,pc(q),mc())}if(c&&o.appView==="overview"&&(nt(c,mi(),gi()),hc(e)),Vn(e),!p||!u)return!1;let y=Pc(b),h=mf(b);if(Wq(p,b),Un(u,"oq-overview-hp-grid--",h,["single","equal","focus-hp1","focus-hp2"]),o.hpVisualMode!=="schematic"){let q=[...b.map((k,$)=>pf(k.title,k.keys,k.accent,yi($,b,y),Cc($,b,y))),kc()].join(""),C=we({visualMode:o.hpVisualMode,layout:h,markup:q});return u.dataset.renderSignature!==C&&(Ht(u,q),u.dataset.renderSignature=C),!0}let g=Ac()?Si():null,m=g?kc():"",v=g?Rc(g):"";return!!d!=!!m||(d&&d.dataset.renderSignature!==v?d.outerHTML=m:d&&g&&Fq(d,g),u.querySelectorAll("[data-oq-hp-panel]").length!==b.length)?!1:(b.forEach((q,C)=>{let k=e.querySelector(`[data-oq-hp-panel="${q.title}"]`);if(k){let $=Mc(q.title,q.keys,q.accent);Un(k,"oq-overview-hp--",yi(C,b,y),["normal","focus","muted"]),_1(k,q.title,q.keys,q.accent,Cc(C,b,y),$)}}),!0)}gr({patchControlReplayDom:H1,patchOverviewDom:F1});function I1(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${Ng()}
        ${Lg()}
      </section>
    `}function j1(){return`
      <div class="oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""} oq-helper-modal-backdrop--loading" data-oq-modal="initial-load">
        <section class="oq-helper-modal oq-helper-modal--reconnect oq-helper-modal--loading" role="status" aria-live="polite" aria-labelledby="oq-loading-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OpenQuatt</p>
              <h2 class="oq-helper-modal-title" id="oq-loading-modal-title">OpenQuatt laden</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">We wachten tot de zichtbare gegevens compleet zijn, zodat de interface niet half gevuld verschijnt. Dit kan enkele seconden duren.</p>
          <div class="oq-helper-reconnect-status oq-helper-loading-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>Eerste synchronisatie</strong>
              <span>De velden op dit scherm worden compleet klaargezet.</span>
            </div>
          </div>
        </section>
      </div>
    `}function W1(){return o.appView==="overview"?Nf():o.appView==="control"?Df():o.appView==="energy"?Bm():o.appView==="diagnosis"?Xg():o.appView==="results"?Km():I1()}function V1(){let e=Ll();return`
      <footer class="oq-helper-powered-by" aria-label="Platform">
        ${e&&e!=="\u2014"?`<span class="oq-helper-footer-version">OpenQuatt ${s(e)}</span>`:""}
        <nav class="oq-helper-footer-links" aria-label="OpenQuatt links">
          <a href="https://jeroen85.github.io/OpenQuatt/" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://github.com/jeroen85/OpenQuatt" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a class="oq-helper-powered-by-link" href="https://esphome.io/" target="_blank" rel="noreferrer" aria-label="Built with ESPHome">
          <span>Built with</span>
          <img class="oq-helper-powered-by-logo" src="https://media.esphome.io/logo/logo-text-on-light.svg" alt="ESPHome" loading="lazy" decoding="async">
        </a>
      </footer>
    `}function B1(){let e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function K1(e){if(!e||o.deferDevControlSelectRender)return;o.deferDevControlSelectRender=!0;let t=()=>{e.removeEventListener("blur",t),e.removeEventListener("change",t),o.deferDevControlSelectRender=!1,window.setTimeout(()=>_f(),0)};e.addEventListener("blur",t,{once:!0}),e.addEventListener("change",t,{once:!0})}function z1(){if(o.nativeOpen||o.appView!=="settings"||o.renderedAppView!=="settings"||o.renderedSettingsGroup!==o.settingsGroup)return null;let e=document.scrollingElement||document.documentElement,t=Number(window.scrollY||e?.scrollTop||0);return!Number.isFinite(t)||t<=0?null:{group:o.settingsGroup,left:Number(window.scrollX||e?.scrollLeft||0),top:t}}function U1(e){if(!e)return;let t=(o.settingsPageScrollRestoreToken||0)+1;o.settingsPageScrollRestoreToken=t;let r=()=>{if(t!==o.settingsPageScrollRestoreToken||o.nativeOpen||o.appView!=="settings"||o.settingsGroup!==e.group)return;let n=document.scrollingElement||document.documentElement;if(!n)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),i=Math.min(e.top,a);window.scrollTo({left:e.left,top:i,behavior:"auto"})};window.requestAnimationFrame(()=>{r(),window.requestAnimationFrame(r),window.setTimeout(r,80)})}function _f(){if(!o.root)return;let e=B1();if(e){K1(e);return}let t=o.systemModal==="webserver-logs"?Bt():null,r=o.systemModal==="cm100-commissioning"?np():null,n=String(o.systemModal||"").startsWith("service-task-")?ip():null,a=o.systemModal==="history-storage"?lp():null,i=o.quickStartModalOpen?Mg():null,l=z1();if(o.nativeOpen){o.root.innerHTML=`
        ${Ol()}
        ${ig()}
      `,o.renderedAppView="native",o.renderedSettingsGroup="",o.settingsRenderSignature="",o.headerRenderSignature=ni(),o.mqttSensorsModalRenderSignature="",sn(),En(),Xs(),pl(),Xi(),Zi(),Kt(t),Ys(r),Js(n),Zs(a),Yl(i);return}let c=W1(),p=o.loadingEntities?`${c}${j1()}`:c,u=o.appView==="overview"||o.appView==="control"||o.appView==="energy"||o.appView==="diagnosis"||o.appView==="results";o.root.innerHTML=`
      ${Ol()}
      <div class="oq-helper-shell${o.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${u?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${eu}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${ag()}
          </div>
      ${Su()}
      ${p}
      ${V1()}
        </div>
      </div>
      ${xg()}
      ${qp()}
      ${sg()}
      ${wp()}
    `,o.renderedAppView=o.appView,o.renderedSettingsGroup=o.appView==="settings"?o.settingsGroup:"",o.settingsRenderSignature=o.appView==="settings"?rn():"",o.headerRenderSignature=ni(),o.mqttSensorsModalRenderSignature=o.systemModal==="mqtt-sensors"?ka():"",nn(),Of(),Xs(),an(),Vn(),En(),pl(),Xi(),Zi(),Kt(t),Ys(r),Js(n),Zs(a),Yl(i),U1(l)}ku(_f);async function Ei(e,t){let r=O[e];o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.entities[e]={...o.entities[e]||{},state:t,value:t},f();try{let n=await fetch(`${Y(r.domain,r.name,"set")}?option=${encodeURIComponent(t)}`,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${r.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.entities.firmwareUpdateChannel={...o.entities.firmwareUpdateChannel||{},state:t,value:t},yn(t),f(),await wn(),o.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(o.controlNotice="Logger level bijgewerkt.",o.systemModal==="webserver-logs"&&wr()):e==="webServerLogHistoryEnabled"?(["1","on","true"].includes(String(t).toLowerCase())?(o.webServerLogHistoryLoaded=!1,wr()):Vo(),o.systemModal==="webserver-logs"&&f()):o.appView==="settings"?await V(_o(),"all"):await V(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Je,...Eo],"state"),e==="strategy"&&o.appView!=="settings"&&await V(ne(t)?ge.map(a=>a.key):qt,"state")}catch(n){o.controlError=`${r.name} kon niet worden bijgewerkt. ${n.message}`}finally{o.busyAction="",f()}}async function Ff(e,t){let r=O[e];if(r){o.busyAction=`switch-${e}`,o.controlNotice="",o.controlError="",f();try{let n=t?"turn_on":"turn_off",a=await fetch(Y(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:t,state:t},o.controlNotice=`${r.name} ${t?"ingeschakeld":"uitgeschakeld"}.`,o.busyAction="",o.appView==="overview"?await V([...Jr,...Ze,"setupComplete",..._t],"state"):o.appView==="settings"?(await V(_o(),"all"),mr.includes(e)&&Qo()):await V(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Je,...Eo],"state"),e==="webServerLogHistoryEnabled"&&(t?(o.webServerLogHistoryLoaded=!1,wr()):Vo(),o.systemModal==="webserver-logs"&&f()),f()}catch(n){o.controlError=`${r.name} aanpassen mislukt (${n.message}).`,f()}finally{o.busyAction="",f()}}}async function Ti(e,t,r=""){let n=O[e],a=fe(e,t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=a,f();try{let i=await fetch(`${Y(n.domain,n.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=r||`${n.name} bijgewerkt.`,await V(o.appView==="settings"?_o():[...new Set([e,"setupComplete","strategy",...Je,...Eo])],"state")}catch(i){o.inputDrafts[e]=String(a).replace(".",","),o.controlError=`${n.name} kon niet worden bijgewerkt. ${i.message}`}finally{o.busyAction="",f()}}async function If(e,t){let r=O[e],n=Ct(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",f();try{let a=await fetch(`${Y(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.controlNotice=`${r.name} bijgewerkt.`,await V(o.appView==="settings"?_o():[e,"setupComplete"],"state")}catch(a){o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",f()}}async function jf(e,t){let r=O[e],n=String(t||"").trim();o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=n,f();try{let a=await fetch(`${Y(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:n,state:n},delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${r.name} bijgewerkt.`,await V(o.appView==="settings"?_o():[e,"setupComplete"],"state")}catch(a){o.inputDrafts[e]=n,o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",f()}}async function Wc(e,t){let r=O[e],n=Ke(t)||Ao,a=await fetch(`${Y(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:n,state:n},n}async function Wf(e,t){let r=O[e],n=t?"turn_on":"turn_off",a=await fetch(Y(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:t,state:t},t}async function Vf(){await V([...new Set([...Jr,...Ze,"setupComplete",..._t])],"state")}async function Bf(e,t){let r=O[e],n=Ke(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",f();try{await Wc(e,n),o.controlNotice=`${r.name} bijgewerkt.`,await V(o.appView==="settings"?_o():[e,"setupComplete","openquattEnabled"],"state")}catch(a){o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",f()}}async function xi(e){let t=Ke(e);if(e&&!t){o.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",f();return}if(t&&!w("openquattResumeAt")){o.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",f();return}o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",f();let r=!1;try{w("openquattResumeAt")&&(await Wc("openquattResumeAt",t||Ao),r=!!t),await Wf("openquattEnabled",!1),o.pauseResumeDraft=t?da(t):"",o.systemModal="",o.controlNotice=t?`Openquatt regeling is tijdelijk uitgeschakeld tot ${ur(t)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Vf()}catch(n){if(r&&w("openquattResumeAt"))try{await Wc("openquattResumeAt",Ao)}catch{}o.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${n.message}`}finally{o.busyAction="",f()}}async function Kf(){o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",f();try{await Wf("openquattEnabled",!0),o.pauseResumeDraft="",o.systemModal="",o.controlNotice="Openquatt regeling is weer actief.",await Vf()}catch(e){o.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{o.busyAction="",f()}}async function zf(e){let t=O[e];o.busyAction=e,o.controlError="",o.controlNotice="",f();try{let r=await fetch(Y(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);o.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await V(["setupComplete"],"state"),e==="reset"&&(o.currentStep=ir[0].id,o.quickStartModalMode="wizard",o.quickStartModalOpen=!0),o.quickStartModalOpen=e!=="apply",pt("overview",{syncMode:"replace"}),ue({forceFast:!0})}catch(r){o.controlError=`Actie mislukt voor "${t.name}". ${r.message}`}finally{o.busyAction="",f()}}function G1(){window.requestAnimationFrame(()=>{if(!o.root||o.systemModal!=="service-task-hp-water-calibration")return;let e=o.root.querySelector("[data-oq-service-task-scroller]"),t=o.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!t)return;let r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),a=e.scrollTop+n.top-r.top-24;e.scrollTop=Math.max(0,a)})}async function Vr(e,t={}){let r=O[e];if(r){o.busyAction=e,o.controlError="",o.controlNotice="",f();try{let n=await fetch(Y(r.domain,r.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||aa.has(e)||(Do(),o.systemModal=""),o.controlNotice=t.successNotice||`${r.name} gestart.`,t.reconnectMode&&oo(t.reconnectMode),Array.isArray(t.refreshKeys)&&t.refreshKeys.length){let i=Number(t.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await V(t.refreshKeys,"state")}}catch(n){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!1,o.commissioningTaskLock=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!1,o.commissioningTaskLock=""):e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!1,o.commissioningTaskLock=""):e==="airPurgeStart"?(o.pendingAirPurgeStart=!1,o.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock=""):e==="manualFlowStart"?(o.pendingManualFlowStart=!1,o.commissioningTaskLock=""):e==="manualHpStart"&&(o.pendingManualHpStart=!1,o.commissioningTaskLock=""),o.controlError=`${t.errorPrefix||`Actie mislukt voor "${r.name}"`}. ${n.message}`}finally{o.busyAction="",f(),e==="hpWaterCalibrationApply"&&G1()}}}function Vc(e){let t=o.root?o.root.querySelector(".oq-helper-curve-svg"):null;if(!t||!o.draggingCurveKey)return;let r=t.getBoundingClientRect(),n=22,a=180,i=(e-r.top)/r.height*240,c=70-(Math.min(n+a,Math.max(n,i))-n)/a*50,p=fe(o.draggingCurveKey,c);String(E(o.draggingCurveKey))!==String(p)&&(o.drafts[o.draggingCurveKey]=p,f())}async function Gf(){let e=O.checkFirmwareUpdates;if(e){o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateCheckBusy=!0,o.controlError="",o.controlNotice="",f();try{await $i("current build",{poll:!1,force:!0}),yn();let t=await fetch(Y(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await wn(),o.controlNotice="Firmwarecontrole bijgewerkt."}catch(t){o.controlError=`Firmwarecontrole mislukte. ${t.message}`}finally{o.updateCheckBusy=!1,f()}}}async function Qf(){try{await V(Yr,"all",{concurrency:Lt,forceMissing:!0}),o.updateModalOpen&&f()}catch{}}async function $i(e,t={}){let r=O.firmwareUpdateTarget;if(!r||!w("firmwareUpdateTarget"))return!1;let n=String(e||"").trim();if(!n)return!1;if(!t.force&&String(E("firmwareUpdateTarget")||"").trim()===n)return!0;o.entities.firmwareUpdateTarget={...o.entities.firmwareUpdateTarget||{},state:n,value:n};let a=await fetch(`${Y(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.poll!==!1?(yn(),await wn({expectedBuildLabel:t.expectedBuildLabel||""})):!0}async function Yf(){let e=he();if(e){o.firmwareAdvancedOpen=!1,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,Ae(),ot(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=go(e),o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="normal",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",f();try{await $i("current build",{poll:!1,force:!0}),o.updateInstallTargetVersion=go(he()||{})||o.updateInstallTargetVersion,vn();let t=O.installFirmwareUpdateTarget,r=t&&w("installFirmwareUpdateTarget")?Y(t.domain,t.name,"press"):Y("update","Firmware Update","install"),n=await fetch(r,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);await Cr({initialDelayMs:Ho,pollDelayMs:Zr})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion,o.controlNotice=""):o.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(t){o.controlError=`OTA-update kon niet worden gestart. ${t.message}`}finally{kr(),f()}}}async function Jf(){let e=Pa(),t=O.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareConnectionSwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",f();return}o.updateManualUploadOpen=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Ae(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="connection-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=te(),o.updateInstallTargetVersion=le()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.controlError="",o.controlNotice="",f();try{if(!await $i("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=go(he()||{})||le()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,f(),vn();let n=await fetch(Y(t.domain,t.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await Cr({initialDelayMs:Ho,pollDelayMs:Zr}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion||"",o.firmwareConnectionSwitchConfirmed=!1,o.controlNotice="";else{let i=et(e.targetConnection);o.controlNotice=`Verbindingswissel naar ${i} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(r){o.controlError=`Verbindingswissel kon niet worden gestart. ${r.message}`}finally{kr(),f()}}}async function Zf(){let e=Da(),t=O.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareTopologySwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",f();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Ae(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="topology-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=le()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.controlError="",o.controlNotice="",f();try{if(!await $i("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=go(he()||{})||le()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,f(),vn();let n=await fetch(Y(t.domain,t.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await Cr({initialDelayMs:Ho,pollDelayMs:Zr}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion||"",o.firmwareTopologySwitchConfirmed=!1,o.controlNotice="";else{let i=Fo(e.targetTopology);o.controlNotice=`Opstellingswissel naar ${i} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(r){o.controlError=`Opstellingswissel kon niet worden gestart. ${r.message}`}finally{kr(),f()}}}async function Q1(e,t){let r=hn(e,t);if(!r)throw new Error("Geen geldig PR-target gevonden.");let n=await fetch(r.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(n.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!n.ok)throw new Error(`GitHub API gaf HTTP ${n.status}`);let a=await n.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(d=>d&&d.name===t.otaFileName),c=i.find(d=>d&&d.name===t.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${t.label}.`);if(!c||!c.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${t.label}.`);let p=String(a.name||a.tag_name||`PR ${e}`).trim(),u=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:c.browser_download_url,label:u?`${p} \xB7 ${u.replace("T"," ").replace("Z"," UTC")}`:p}}async function Uf(e,t){if(!w(e))throw new Error(`${O[e]?.name||e} is niet beschikbaar op deze firmware.`);let r=await ho(e,t);o.entities[e]={...o.entities[e]||{},state:r,value:r}}async function Xf(){let e=Bo(),t=qr(),r=O.installFirmwareTestOta;if(!e){o.updateTestFirmwareError="Vul een geldig PR-nummer in.",f();return}if(!t.available){o.updateTestFirmwareError=t.error||"Dit firmwaretarget wordt niet herkend.",f();return}if(!o.updateTestFirmwareConfirmed){o.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",f();return}if(!r||!w("installFirmwareTestOta")){o.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",f();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Ae(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion="",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="test-firmware",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null,f();let n=!1;try{let a=await Q1(e,t);o.updateTestFirmwareBuild=a.label,f(),await Uf("firmwareTestOtaUrl",a.otaUrl),await Uf("firmwareTestOtaMd5Url",a.md5Url),n=!0,vn();let i=await fetch(Y(r.domain,r.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);await Cr({initialDelayMs:Ho,pollDelayMs:Zr})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||`PR ${e}`,o.updateTestFirmwareOpen=!1,ot(),o.controlNotice=""):o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){n&&Is(a.message)?o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:o.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{kr(),f()}}async function eh(){let e=o.updateManualUploadFile;if(!e){o.updateManualUploadError="Kies eerst een firmwarebestand.",f();return}o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=le()||"",o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateManualUploadError="",f();try{let t=new FormData;t.append("update",e,e.name||"firmware.bin");let r=await fetch("/update",{method:"POST",body:t});if(!r.ok)throw new Error(`HTTP ${r.status}`);o.updateManualUploadOpen=!1,Ae(),await Cr()?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=le()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(t){o.updateManualUploadError=`Handmatige upload mislukte. ${t.message}`}finally{kr(),f()}}function Y1(e=o.currentStep){let t=["setupComplete","strategy",...Ze];return e==="generation"?[...new Set([...t,"installationTopology",...cr,"hpGeneration"])]:e==="flow-source"?[...new Set([...t,"hpGeneration",...ut])]:e==="thermostat-source"?[...new Set([...t,...To])]:e==="boiler"?[...new Set([...t,"boilerCvAssistEnabled","boilerRatedHeatPower"])]:e==="strategy"?[...new Set([...t,"strategy"])]:e==="heating"?[...new Set([...t,...qt,...xo,"dayMax","silentMax"])]:e==="flow"?[...new Set([...t,...Je,...lr])]:e==="water"?[...new Set([...t,"maxWater"])]:e==="silent"?[...new Set([...t,...$o])]:e==="confirm"?[...new Set([...t,"installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...ut,...To,...Je,...lr,...qt,...xo,"maxWater",...$o])]:t}async function Mi(e=o.currentStep){let t=Y1(e);try{await V(t,"all",{concurrency:Ot}),o.quickStartModalOpen&&o.currentStep===e&&!o.nativeOpen&&f()}catch{}}async function th(){let e=Ir();if(!e.canApply){o.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",f();return}o.busyAction="quickstart-flow-source",o.controlNotice="",o.controlError="",f();let t=async(r,n)=>{if(!w(r))return;let a=E(r);if(typeof n=="boolean"&&T(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await ho(r,n);o.entities[r]={...o.entities[r]||{},value:i,state:i}};try{e.requiresCic?(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),await t("flowSource","CIC"),o.quickStartCicFeedUrlDraft=null,o.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await t("qFlowSource",e.qFlowTarget),await t("flowSource","Outdoor unit"),o.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await V(ut,"all")}catch(r){o.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{o.busyAction="",f()}}async function oh(){o.busyAction="quickstart-flow-refresh",o.controlNotice="",o.controlError="",f();try{await V(ut,"all");let e=Ir();o.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){o.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{o.busyAction="",f()}}async function rh(e,t){let r=O[e];if(!r||!w(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");let n=await fetch(Y(r.domain,r.name,t?"turn_on":"turn_off"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`)}async function J1(){let e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(r=>{o.optionalMissingEntities&&delete o.optionalMissingEntities[r],delete o.entities[r]}),await V(e,"all");let t=e.filter(r=>!o.entities[r]);if(t.length){let r=t.map(n=>O[n]?.name||n).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${r}.`)}}async function Z1(){for(let e=0;e<40;e+=1){await new Promise(t=>window.setTimeout(t,1e3));try{await V(ut,"state")}catch{return}if(!T("quickFlowTest")){o.busyAction!=="quickstart-flow-test-abort"&&(o.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),f();return}}}async function nh(){if(!Ir().canRunFlowTest){o.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",f();return}o.busyAction="quickstart-flow-test-start",o.controlNotice="",o.controlError="",f();let t=!1;try{if(await J1(),!T("cm100Active")){let a=O.commissioningCm100Start,i=await fetch(Y(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);t=!0}let r=T("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!r&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await V(["commissioningStatus","cm100Active"],"state"),r=T("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";if(!r){let a=String(E("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await rh("quickFlowTest",!0),await V(ut,"all");let n=String(E("commissioningStatus")||"").trim();if(!T("quickFlowTest"))throw new Error(n||"De waterpomptest kon niet worden gestart.");o.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",Z1()}catch(r){if(t&&!T("quickFlowTest"))try{let n=O.commissioningCm100Stop;await fetch(Y(n.domain,n.name,"press"),{method:"POST"})}catch{}o.controlError=`Waterpomptest starten mislukt. ${r.message}`}finally{o.busyAction="",f()}}async function ah(){o.busyAction="quickstart-flow-test-abort",o.controlNotice="",o.controlError="",f();try{await rh("quickFlowTest",!1),await V(ut,"all"),o.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){o.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{o.busyAction="",f()}}async function ih(){let e=li();if(!e.canApply){o.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",f();return}o.busyAction="quickstart-thermostat-source",o.controlNotice="",o.controlError="",f();let t=async(r,n)=>{if(!w(r))return;let a=E(r);if(typeof n=="boolean"&&T(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await ho(r,n);o.entities[r]={...o.entities[r]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await t("otEnabled",!0):e.selectedSource==="CIC"&&(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),o.quickStartCicFeedUrlDraft=null),await t("roomTempSource",e.selectedSource),await t("roomSetpointSource",e.selectedSource),o.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await V(To,"all")}catch(r){o.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{o.busyAction="",f()}}var sh=10080*60*1e3;function lh(e){o.controlReplayGraphMinute=e==="week"?1230:e==="today"||e==="yesterday"?720:1e3}function ch(e){let t=new Date(String(e||"")).getTime();return Number.isFinite(t)?t:Number.NaN}function dh(){window.setTimeout(()=>{let e=document.activeElement;o.focusedField=e&&e.dataset&&e.dataset.oqField||"",o.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function ph(e){e.target.closest(".oq-ph-concept-hotspot")&&(o.settingsInteractionLock=!0)}function mh(e){let t=e.target.closest(".oq-ph-concept-hotspot");if(!t||e.relatedTarget&&t.contains(e.relatedTarget))return;let r=o.root&&o.root.querySelector(".oq-ph-concept-hotspot:hover"),n=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;o.settingsInteractionLock=!!(r||n)}function gh(e){if(e.target.dataset.oqFirmwareConnectionConfirm){o.firmwareConnectionSwitchConfirmed=!!e.target.checked,f();return}if(e.target.dataset.oqFirmwareTopologyConfirm){o.firmwareTopologySwitchConfirmed=!!e.target.checked,f();return}if(e.target.dataset.oqFirmwareTestConfirm){o.updateTestFirmwareConfirmed=!!e.target.checked,o.updateTestFirmwareError="";let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!o.updateTestFirmwareConfirmed||!Bo()),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){o.updateTestFirmwarePr=String(e.target.value||""),o.updateTestFirmwareConfirmed=!1,o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null;let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-firmware-test-confirm="true"]');a&&(a.checked=!1);let i=n?.querySelector('[data-oq-action="install-firmware-test"]');i&&(i.disabled=!0);let l=qr(),c=hn(Bo(),l),p=n?.querySelector('[data-oq-firmware-test-asset-note="true"]');p&&(p.textContent=c?l.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),n?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqMqttField){Sd(e.target);return}let r=e.target.dataset.oqField;if(!r){if(e.target.dataset.oqQuickstartCicUrl!==void 0){o.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){o.quickStartThermostatSourceDraft=String(e.target.value||""),f();return}let n=e.target.dataset.oqAuthField;if(n){o.authNotice="",o.authError="",n==="username"?o.authDraftUsername=String(e.target.value||""):n==="currentPassword"?o.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?o.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(o.authDraftConfirmPassword=String(e.target.value||""));return}return}if(e.target.dataset.oqPauseDraft){o.pauseResumeDraft=String(e.target.value||"");return}if(O[r]?.domain==="text"){o.inputDrafts[r]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(o.inputDrafts[r]=e.target.value);let n=Me(e.target.value);if(!Number.isNaN(n)){let a=fe(r,e.target.value);if(o.drafts[r]=a,e.target.type==="range"){let i=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");i&&(i.textContent=Q(r,a))}}}}function fh(e){mg(e)}function uh(e,t){return e.deltaMode===1?t*16:e.deltaMode===2?t*window.innerHeight:t}function X1(e){let t=e?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){let r=window.getComputedStyle(t),n=/(auto|scroll)/.test(r.overflowY)&&t.scrollHeight>t.clientHeight,a=/(auto|scroll)/.test(r.overflowX)&&t.scrollWidth>t.clientWidth;if(n||a)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function hh(e){let t=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!t||!o.root||!o.root.contains(t)||document.activeElement!==t)return;e.preventDefault(),t.blur();let r=X1(t);r&&typeof r.scrollBy=="function"&&r.scrollBy({left:uh(e,e.deltaX||0),top:uh(e,e.deltaY||0),behavior:"auto"})}function bh(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",wm(n);return}if(e.target.dataset.oqFirmwareUploadFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",n?(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.updateManualUploadFile=n,o.updateManualUploadFileName=n.name||"",o.updateManualUploadError=""):Ae(),f();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof On=="function"&&On(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}if(e.target.dataset.oqEnergyHistoryExportMode!==void 0){o.energyHistoryExportMode=Ar(e.target.value),o.energyHistoryExportError="",o.energyHistoryExportNotice="",f();return}let t=e.target.dataset.oqField;if(!t)return;let r=O[t];if(r){if(r.domain==="select"){Ei(t,String(e.target.value));return}if(r.domain==="number"){Ti(t,e.target.value);return}if(r.domain==="text"){jf(t,e.target.value);return}if(r.domain==="time"){let n=Ct(e.target.value);if(!n){o.controlError=`${r.name} verwacht tijd als HH:MM.`,f();return}If(t,n);return}if(r.domain==="datetime"){let n=Ke(e.target.value);if(!n){o.controlError=`${r.name} verwacht datum en tijd.`,f();return}Bf(t,n);return}}}function vh(e){let t=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(t){let d=t.querySelector("input[data-oq-field]");if(d&&(d.type==="time"||d.type==="datetime-local")&&typeof d.showPicker=="function")try{d.showPicker()}catch{}}let r=e.target.closest('[data-oq-action="toggle-settings-info"]'),n=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-control-replay-period-menu]"),l=e.target.closest("[data-oq-modal]");if(r){let d=r.dataset.infoId||"";o.settingsInfoOpen=o.settingsInfoOpen===d?"":d,f();return}let c=e.target.closest("[data-oq-action]"),p=o.interfacePanelOpen&&!a;if(!c){let d=!1;if(o.settingsInfoOpen&&!n&&(o.settingsInfoOpen="",d=!0),p&&(ja(!1),d=!0),o.controlReplayPeriodMenuOpen&&!i&&(o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,d=!0),l&&e.target===l){if(l.dataset.oqModal==="quickstart-forced")return;o.updateModalOpen&&(o.updateModalOpen=!1,o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,Ae(),ot(),d=!0),o.systemModal&&(Qa(),Do(),o.systemModal="",d=!0)}d&&f();return}p&&c.dataset.oqAction!=="toggle-interface-panel"&&ja(!1);let u=c.dataset.oqAction;if(u==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(c.dataset.boilerMode||"off");return}if(u==="toggle-interface-panel"){ja(!o.interfacePanelOpen),f();return}if(u==="toggle-dev-panel"){jp(!o.devPanelOpen),f();return}if(u==="toggle-installation-monitoring-details"){e.preventDefault();let d=c.closest(".oq-settings-monitoring-details");o.installationMonitoringDetailsOpen=!(d&&d.hasAttribute("open")),f();return}if(u==="toggle-integration-diagnostics"){e.preventDefault();let d=c.closest(".oq-settings-integration-diagnostics");o.integrationDiagnosticsOpen=!(d&&d.hasAttribute("open")),f();return}if(u==="toggle-odu-runtime-frequency-details"){e.preventDefault();let d=c.closest(".oq-settings-odu-runtime-details");o.oduRuntimeFrequencyDetailsOpen=!(d&&d.hasAttribute("open")),f();return}if(u==="toggle-storage-technical-details"){e.preventDefault();let d=c.closest(".oq-settings-storage-technical");o.settingsStorageDetailsOpen=!(d&&d.hasAttribute("open")),f();return}if(u==="select-view"){if((c.dataset.viewId||"")==="diagnosis"&&!dt())return;let d=c.dataset.viewId||"overview";pt(d,{syncMode:"push"}),f(),ue({forceFast:!0});return}if(u==="select-trend-window"){if(c.disabled)return;Hr(Number(c.dataset.trendHours||24)),f(),vl({force:!0}).then(d=>{d&&f()});return}if(u==="select-energy-history-view"){if(c.disabled||typeof kl!="function")return;kl(c.dataset.energyHistoryView||"day");return}if(u==="shift-energy-history-period"){if(c.disabled||typeof Tl!="function")return;Tl(o.energyHistoryView||"day",c.dataset.energyHistoryDirection||"1");return}if(u==="select-energy-history-now"){if(c.disabled||typeof xl!="function")return;xl(o.energyHistoryView||"day");return}if(u==="select-settings-group"){Cn(c.dataset.groupId||me[0].id),f(),ue({forceFast:!0});return}if(u==="open-update-modal"){o.updateModalOpen=!0,f(),Qf();return}if(u==="open-webserver-log-modal"){cp();return}if(u==="open-debug-recording-modal"){o.systemModal="debug-recording",o.debugRecordingError="",o.debugRecordingNotice="",f(),kn();return}if(u==="open-login-modal"){o.systemModal="login",is(),o.authNotice="",o.authError="",f(),Pu({poll:!0});return}if(u==="open-api-security-modal"){o.systemModal="api-security",o.apiSecurityNotice="",o.apiSecurityError="",f(),ro({force:!0});return}if(u==="open-mqtt-modal"){o.systemModal="mqtt",Ps(),o.mqttDraftDirty=!1,o.mqttNotice="",o.mqttError="",f(),Oo({force:!0});return}if(u==="open-mqtt-sensors-modal"){o.systemModal="mqtt-sensors",o.mqttNotice="",o.mqttError="",o.mqttCopiedTopicKey="",o.mqttExpandedTopicKey="",o.mqttInputToggleBusyKey="",f(),Oo({force:!0}).then(d=>{d&&o.systemModal==="mqtt-sensors"&&f()});return}if(u==="toggle-mqtt-sensor-topic"){let d=c.dataset?.oqMqttTopicKey||"cooling_dew_point";o.mqttExpandedTopicKey=o.mqttExpandedTopicKey===d?"":d,o.mqttError="",f();return}if(u==="toggle-mqtt-input"){let d=c.dataset?.oqMqttTopicKey||"cooling_dew_point";Cd(d,!qa(d));return}if(u==="copy-mqtt-topic"||u==="copy-mqtt-dew-topic"){kd(c.dataset?.oqMqttTopicKey||"cooling_dew_point");return}if(u==="save-mqtt-config"){Ed();return}if(u==="copy-api-security-key"){_u();return}if(u==="enable-api-security"){Nu();return}if(u==="rotate-api-security"){Lu();return}if(u==="disable-api-security"){Ou();return}if(u==="restart-api-security"){Du();return}if(u==="flush-trend-history"){Vr("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:io(),refreshDelayMs:500}).then(()=>{Qo(void 0,{forceTrendHistory:!0})});return}if(u==="save-lifetime-energy-history"){Vr("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:io(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,Qo(),o.appView==="results"&&vo({force:!0}).then(()=>f())});return}if(u==="clear-lifetime-energy-history"){if(!window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return;Vr("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:io(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,Qo(),o.appView==="results"&&vo({force:!0}).then(()=>f())});return}if(u==="select-energy-history-import-file"){fm();return}if(u==="clear-energy-history-import-file"){hl(),f();return}if(u==="import-energy-history-file"){hm();return}if(u==="export-energy-history"){lm();return}if(u==="open-history-storage-modal"){o.systemModal="history-storage",f(),Rn({forceMissing:!0,forceTrendHistory:!0,forceEnergyHistory:!0}).finally(()=>{o.systemModal==="history-storage"&&f()}),Qo([1e3,3e3,7e3]);return}if(u==="open-connectivity-modal"){o.systemModal="connectivity",f();return}if(u==="open-restart-confirm"){o.systemModal="restart-confirm",f();return}if(u==="download-settings-backup"){ym();return}if(u==="open-settings-backup-import"){o.systemModal="settings-backup-import",f();return}if(u==="open-silent-settings-modal"){o.systemModal="silent-settings",f();return}if(u==="open-openquatt-pause-modal"){o.pauseResumeDraft=pa(),o.systemModal="openquatt-pause",f();return}if(u==="enable-openquatt-now"){Kf();return}if(u==="apply-openquatt-preset"){let d=Qi(c.dataset.pausePreset||"");o.pauseResumeDraft=d,xi(d);return}if(u==="apply-openquatt-indefinite"){xi("");return}if(u==="apply-openquatt-custom-pause"){if(!String(o.pauseResumeDraft||"").trim()){o.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",f();return}xi(o.pauseResumeDraft||"");return}if(u==="close-update-modal"){o.updateModalOpen=!1,o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,Ae(),ot(),f();return}if(u==="close-quickstart-modal"){o.quickStartModalOpen=!1,f();return}if(u==="open-quickstart-modal"){o.currentStep="generation",o.quickStartModalMode="wizard",o.quickStartModalOpen=!0,f();return}if(u==="open-generation-modal"){o.currentStep="generation",o.quickStartModalMode="generation",o.quickStartModalOpen=!0,f();return}if(u==="open-cm100-commissioning-modal"){o.systemModal="",pt("settings"),Cn("service"),f(),ue({forceFast:!0});return}if(u==="open-installation-monitoring"){o.systemModal="",pt("settings"),Cn("service"),f(),ue({forceFast:!0});return}if(u==="open-service-task-modal"){let d=String(c.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(d)&&(o.systemModal=`service-task-${d}`,f(),ue({forceFast:!0}));return}if(u==="press-named-button"){let d=String(c.dataset.oqButtonKey||c.dataset.buttonKey||c.getAttribute("data-oq-button-key")||"").trim();if(d){d==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!0,o.commissioningTaskLock="cm100",o.commissioningBoilerHeatPowerDisplay=""):d==="commissioningCm100Stop"?(o.pendingCommissioningCm100Start=!1,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="",o.commissioningBoilerHeatPowerDisplay=""):d==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!0,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="boiler",o.commissioningBoilerHeatPowerDisplay=""):d==="boilerPowerTestAbort"||d==="boilerPowerTestApply"?o.commissioningTaskLock="boiler":d==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="autotune"):d==="flowAutotuneAbort"||d==="flowAutotuneApply"?o.commissioningTaskLock="autotune":d==="airPurgeStart"?(o.pendingAirPurgeStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="purge"):d==="airPurgeAbort"?o.commissioningTaskLock="purge":d==="manualFlowStart"?(o.pendingManualFlowStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-flow"):d==="manualFlowAbort"?o.commissioningTaskLock="manual-flow":d==="manualHpStart"?(o.pendingManualHpStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-hp"):d==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.commissioningTaskLock="hp-water-calibration"):d==="hpWaterCalibrationAbort"||d==="hpWaterCalibrationApply"?o.commissioningTaskLock="hp-water-calibration":d==="manualHpAbort"&&(o.commissioningTaskLock="manual-hp");let b=[],y=0,h="",g="";if(d==="acknowledgeCompressorCyclingAlert")b.push(...Ur);else if(d==="commissioningCm100Start"||d==="commissioningCm100Stop")b.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive");else if(d==="boilerPowerTestStart"||d==="boilerPowerTestAbort"||d==="boilerPowerTestApply")b.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower");else if(d==="flowAutotuneStart"||d==="flowAutotuneAbort"||d==="flowAutotuneApply")b.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi");else if(d==="airPurgeStart"||d==="airPurgeAbort")b.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode");else if(d==="hpWaterCalibrationStart"||d==="hpWaterCalibrationAbort"||d==="hpWaterCalibrationApply")b.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode");else if(d==="manualFlowStart"||d==="manualFlowAbort"||d==="manualFlowApplyHeating"||d==="manualFlowApplyCooling")b.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint");else if(d==="manualHpStart"||d==="manualHpAbort")b.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode");else if(aa.has(d)){let m=tu(d);m&&(b.push(...Li(m)),y=d.endsWith("Load")?1200:3200,h=d.endsWith("Load")?`HP${m} ODU runtime tabel lezen aangevraagd.`:`HP${m} ODU runtime write aangevraagd; controleer status/readback.`,g=`ODU runtime actie mislukt voor HP${m}`)}Vr(d,{...b.length?{refreshKeys:b}:{},...y?{refreshDelayMs:y}:{},...h?{successNotice:h}:{},...g?{errorPrefix:g}:{}})}return}if(u==="close-system-modal"){Do(),Uo(),o.systemModal="",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authNotice="",o.authError="",o.apiSecurityNotice="",o.apiSecurityError="",Qa(),f(),qn();return}if(u==="clear-webserver-log-output"){Vo();return}if(u==="copy-webserver-log-output"){dp();return}if(u==="start-debug-recording"){Rp(c.dataset.debugMinutes||15);return}if(u==="start-rolling-debug-recording"){Pp();return}if(u==="select-debug-recording-duration"){xp(c.dataset.debugMinutes||15);return}if(u==="stop-debug-recording"){Np();return}if(u==="freeze-debug-recording"){Dp();return}if(u==="download-debug-recording"){Lp();return}if(u==="copy-debug-recording"){Op();return}if(u==="confirm-settings-backup-restore"){Sm();return}if(u==="confirm-restart"){Vr("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(u==="select-surface"){let d=c.dataset.surface==="native";if(o.nativeOpen===d){o.nativeOpen&&Va();return}o.nativeOpen=d,cl(o.nativeOpen?"native":"app"),o.controlError="",o.controlNotice="",o.settingsInfoOpen="",o.updateModalOpen=!1,o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,Ae(),ot(),Do(),o.systemModal="",o.nativeOpen&&Va(),f(),Wa(),window.requestAnimationFrame(()=>{o.nativeOpen?o.nativeApp&&o.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(u==="toggle-overview-theme"){Ip(o.overviewTheme==="light"?"dark":"light"),f();return}if(u==="select-hp-visual"){Wp(c.dataset.hpVisual==="compact"?"compact":"schematic"),f();return}if(u==="select-hp-layout"){Vp(c.dataset.hpLayout||"equal"),f();return}if(u==="select-control-replay-focus"){o.controlReplayFocusFilter=c.dataset.replayFocus||"all",o.controlReplaySelectedEpisode="",f();return}if(u==="select-control-replay-tab"){let d=c.dataset.replayTab||"status";o.controlReplayTab=cs(d)||"status",o.appView==="control"&&No("push"),f();return}if(u==="select-control-replay-window"){let d=us(c.dataset.replayWindow||"")||"last24";d!=="custom"&&(o.controlReplayWindow=d,o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,o.controlReplayCustomPeriodError="",lh(d),o.appView==="control"&&No("push")),f();return}if(u==="toggle-control-replay-period-menu"){o.controlReplayPeriodMenuOpen=!o.controlReplayPeriodMenuOpen,o.controlReplayCustomPeriodOpen=o.controlReplayPeriodMenuOpen&&o.controlReplayWindow==="custom",o.controlReplayCustomPeriodError="",f();return}if(u==="toggle-control-replay-custom-period"){o.controlReplayCustomPeriodOpen=!o.controlReplayCustomPeriodOpen,o.controlReplayCustomPeriodError="",f();return}if(u==="apply-control-replay-custom-period"){let d=c.closest("[data-oq-control-replay-period-menu]"),b=String(d?.querySelector("[data-oq-control-replay-custom-start-date]")?.value||""),y=String(d?.querySelector("[data-oq-control-replay-custom-start-hour]")?.value||""),h=String(d?.querySelector("[data-oq-control-replay-custom-end-date]")?.value||""),g=String(d?.querySelector("[data-oq-control-replay-custom-end-hour]")?.value||""),m=`${b}T${y}:00`,v=`${h}T${g}:00`,S=ch(m),q=ch(v);if(!Number.isFinite(S)||!Number.isFinite(q)||q<=S){o.controlReplayCustomPeriodError="Kies een eindtijd na de starttijd.",f();return}if(q-S>sh){o.controlReplayCustomPeriodError="Een eigen periode mag maximaal 7 dagen beslaan.",f();return}let C=Date.now();if(S<C-sh||q>C+60*1e3){o.controlReplayCustomPeriodError="Kies een periode binnen de laatste 7 dagen.",f();return}o.controlReplayCustomStart=m,o.controlReplayCustomEnd=v,o.controlReplayCustomPeriodError="",o.controlReplayWindow="custom",o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,lh("custom"),o.appView==="control"&&No("push"),f();return}if(u==="select-control-replay-episode"){o.controlReplaySelectedEpisode=c.dataset.replayEpisode||"",f();return}if(u==="toggle-control-replay-support-details"){e.preventDefault();let d=c.closest(".oq-working-support"),b=d?.dataset.replaySupportItem||"";o.controlReplaySupportDetailsItemId=d&&d.hasAttribute("open")?"":b,f();return}if(u==="select-step"){o.currentStep=c.dataset.stepId||"generation",f(),Mi(o.currentStep);return}if(u==="apply-quickstart-flow-source"){th();return}if(u==="refresh-quickstart-flow-signal"){oh();return}if(u==="start-quickstart-flow-test"){nh();return}if(u==="abort-quickstart-flow-test"){ah();return}if(u==="apply-quickstart-thermostat-source"){ih();return}if(u==="previous-step"){Jl(-1),f(),Mi(o.currentStep);return}if(u==="next-step"){Jl(1),f(),Mi(o.currentStep);return}if(u==="select-settings-option"){let d=c.dataset.selectKey||"",b=c.dataset.selectOption||"";d&&b&&String(E(d)||"")!==b&&Ei(d,b);return}if(u==="toggle-overview-control"){let d=c.dataset.controlKey||"",b=(c.dataset.controlState||"").toLowerCase();d&&(b==="on"||b==="off")&&Ff(d,b==="on");return}if(u==="select-overview-control-option"){let d=c.dataset.controlKey||"",b=c.dataset.controlOption||"";d&&b&&String(E(d)||"")!==b&&Ei(d,b);return}if(u==="suggest-curve-fallback"){let d=ma();d&&Ti("curveFallbackSupply",d.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(u==="apply"||u==="reset"){zf(u);return}if(u==="run-firmware-check"){Gf();return}if(u==="install-firmware-update"){Yf();return}if(u==="install-firmware-connection-switch"){Jf();return}if(u==="install-firmware-topology-switch"){Zf();return}if(u==="toggle-firmware-advanced"){o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen?(o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Ae(),ot()):o.firmwareAdvancedOpen=!0,f();return}if(u==="toggle-firmware-connection-switch"){o.firmwareConnectionSwitchOpen=!o.firmwareConnectionSwitchOpen,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareConnectionSwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Ae(),ot()),f();return}if(u==="toggle-firmware-topology-switch"){o.firmwareTopologySwitchOpen=!o.firmwareTopologySwitchOpen,o.firmwareTopologySwitchConfirmed=!1,o.firmwareTopologySwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Ae(),ot()),f();return}if(u==="toggle-firmware-upload"){o.updateManualUploadOpen?(o.updateManualUploadOpen=!1,Ae()):(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateTestFirmwareOpen=!1,ot(),o.updateManualUploadError=""),f();return}if(u==="upload-firmware-file"){eh();return}if(u==="toggle-firmware-test"){o.updateTestFirmwareOpen?(o.updateTestFirmwareOpen=!1,ot()):(o.firmwareAdvancedOpen=!0,o.updateTestFirmwareOpen=!0,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Ae(),o.updateTestFirmwareError=""),f();return}if(u==="install-firmware-test"){Xf();return}if(u==="save-web-auth"){Fu();return}if(u==="disable-web-auth"){Iu();return}}function ek(e){let t=Math.max(0,Math.min(1440,Math.round(e/5)*5));!Number.isNaN(t)&&o.controlReplayGraphMinute!==t&&(o.controlReplayGraphMinute=t,f())}function yh(e,t){let r=t||o.root?.querySelector("[data-oq-control-replay-scrub]");if(!r)return;let n=r.getBoundingClientRect();if(!n.width)return;let a=Math.max(0,Math.min(1,(e-n.left)/n.width));ek(a*1440)}function wh(e){let t=e.target.closest("[data-oq-control-replay-scrub]");if(t){o.controlReplayScrubbing=!0,e.preventDefault(),yh(e.clientX,t);return}let r=e.target.closest("[data-curve-key]");!r||!ne()||(o.draggingCurveKey=r.dataset.curveKey||"",Vc(e.clientY))}function Sh(e){if(typeof Ml=="function"&&Ml(e),o.controlReplayScrubbing){e.preventDefault(),yh(e.clientX);return}o.draggingCurveKey&&Vc(e.clientY)}function qh(){if(o.controlReplayScrubbing){o.controlReplayScrubbing=!1;return}if(!o.draggingCurveKey)return;let e=o.draggingCurveKey,t=fe(e,E(e));o.draggingCurveKey="",Ti(e,t,"Curvepunt bijgewerkt.")}Uu({handleChange:bh,handleClick:vh,handleFocusChange:dh,handleInput:gh,handleKeyDown:fh,handlePointerDown:wh,handlePointerMove:Sh,handlePointerUp:qh,handleSettingsInteractionEnd:mh,handleSettingsInteractionStart:ph,handleWheel:hh});Kp();})();
