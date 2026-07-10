/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{var mc=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,mi={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},gi="https://oi.esphome.io/v3/www.js",Mt=2,Rt=4,In=6e4,_n="Power House",Wn="Water Temperature Control (heating curve)",Qo=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"flow-source",kicker:"Stap 2",title:"Flowmeting configureren",copy:"Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort.",fields:[{title:"Flowbron",copy:"De Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron OpenQuatt moet gebruiken."}]},{id:"thermostat-source",kicker:"Stap 3",title:"Thermostaatgegevens configureren",copy:"Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt.",fields:[{title:"Thermostaatbron",copy:"Q-edition gebruikt OpenTherm. Listener en Waveshare gebruiken CiC of Home Assistant."}]},{id:"boiler",kicker:"Stap 4",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 5",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 6",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 7",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 8",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 9",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 10",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],Rr=[1,2],Yo=Array.from({length:11},(e,o)=>o),Vn=["cooling","heating"];function Eh(e){return e==="cooling"?"cooling":"heating"}function Ch(e){return e==="cooling"?"Cooling":"Heating"}function vo(e,o,r){return`hp${e}OduRuntime${Ch(o)}F${r}`}function Te(e,o){return`hp${e}OduRuntimeFrequency${o}`}function hi(e){return[Te(e,"Enable"),Te(e,"Load"),Te(e,"Apply"),Te(e,"Status"),...Vn.flatMap(o=>Yo.map(r=>vo(e,o,r)))]}function gc(e){let o=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return o?Number(o[1]):0}var Bn=Rr.flatMap(hi),Kn=new Set(Rr.flatMap(e=>[Te(e,"Load"),Te(e,"Apply")])),R={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},statusLedsEnabled:{domain:"switch",name:"Status LEDs enabled",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableValid:{domain:"binary_sensor",name:"Cooling Enable Valid",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingDewPointSource:{domain:"select",name:"Cooling Dew Point Source",optional:!0},coolingDewPointHa:{domain:"sensor",name:"HA - Cooling Dew Point",optional:!0},coolingDewPointHaValid:{domain:"binary_sensor",name:"HA - Cooling Dew Point Valid",optional:!0},mqttCoolingDewPoint:{domain:"sensor",name:"MQTT Cooling Dew Point",optional:!0},mqttCoolingDewPointAge:{domain:"sensor",name:"MQTT Cooling Dew Point Age",optional:!0},mqttCoolingDewPointValid:{domain:"binary_sensor",name:"MQTT Cooling Dew Point Valid",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRoomRequestRequired:{domain:"switch",name:"Cooling Room Request Required",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestConfidence:{domain:"sensor",name:"Boiler power test confidence",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},mqttOutsideTemperature:{domain:"sensor",name:"MQTT Outside Temperature",optional:!0},mqttOutsideTemperatureAge:{domain:"sensor",name:"MQTT Outside Temperature Age",optional:!0},mqttOutsideTemperatureValid:{domain:"binary_sensor",name:"MQTT Outside Temperature Valid",optional:!0},mqttRoomTemperature:{domain:"sensor",name:"MQTT Room Temperature",optional:!0},mqttRoomTemperatureAge:{domain:"sensor",name:"MQTT Room Temperature Age",optional:!0},mqttRoomTemperatureValid:{domain:"binary_sensor",name:"MQTT Room Temperature Valid",optional:!0},mqttRoomSetpoint:{domain:"sensor",name:"MQTT Room Setpoint",optional:!0},mqttRoomSetpointAge:{domain:"sensor",name:"MQTT Room Setpoint Age",optional:!0},mqttRoomSetpointValid:{domain:"binary_sensor",name:"MQTT Room Setpoint Valid",optional:!0},mqttHeatingEnable:{domain:"binary_sensor",name:"MQTT Heating Enable",optional:!0},mqttHeatingEnableAge:{domain:"sensor",name:"MQTT Heating Enable Age",optional:!0},mqttHeatingEnableValid:{domain:"binary_sensor",name:"MQTT Heating Enable Valid",optional:!0},mqttCoolingEnable:{domain:"binary_sensor",name:"MQTT Cooling Enable",optional:!0},mqttCoolingEnableAge:{domain:"sensor",name:"MQTT Cooling Enable Age",optional:!0},mqttCoolingEnableValid:{domain:"binary_sensor",name:"MQTT Cooling Enable Valid",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1SuctionSuperheat:{domain:"sensor",name:"HP1 - Suction superheat",optional:!0},hp1DischargeSuperheat:{domain:"sensor",name:"HP1 - Discharge superheat",optional:!0},hp1SuctionSuperheatStatus:{domain:"text_sensor",name:"HP1 - Suction superheat status",optional:!0},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2SuctionSuperheat:{domain:"sensor",name:"HP2 - Suction superheat",optional:!0},hp2DischargeSuperheat:{domain:"sensor",name:"HP2 - Discharge superheat",optional:!0},hp2SuctionSuperheatStatus:{domain:"text_sensor",name:"HP2 - Suction superheat status",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};Rr.forEach(e=>{let o=`HP${e} - EXPERIMENTAL`;R[Te(e,"Enable")]={domain:"switch",name:`${o} ODU runtime frequency write enable`,optional:!0},R[Te(e,"Load")]={domain:"button",name:`${o} load ODU runtime frequency table`,optional:!0},R[Te(e,"Apply")]={domain:"button",name:`${o} apply ODU runtime frequency table`,optional:!0},R[Te(e,"Status")]={domain:"text_sensor",name:`${o} ODU runtime frequency status`,optional:!0},Vn.forEach(r=>{Yo.forEach(n=>{R[vo(e,r,n)]={domain:"number",name:`${o} ${Eh(r)} F${n} runtime Hz`,optional:!0}})})});var jn=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"settings",label:"Instellingen",icon:"settings"}],hc=new Set(jn.map(e=>e.id)),kh={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',clipboard:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',"clipboard-check":'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path d="m11 14 2 2 4-5"/>',droplet:'<path d="M12 3.2s6 6.5 6 10.8a6 6 0 0 1-12 0c0-4.3 6-10.8 6-10.8z"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66 -1.41 1.41"/><path d="m19.07 4.93 -1.41 1.41"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>',thermometer:'<path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',waves:'<path d="M3 8c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 13c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 18c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/>',wifi:'<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function st(e,o=""){let r=kh[e];return r?`<svg${o?` class="${xh(o)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${r}</svg>`:""}function xh(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}var me=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],Pe=new Set(me.map(e=>e.id)),fc=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",suctionSuperheat:"hp1SuctionSuperheat",dischargeSuperheat:"hp1DischargeSuperheat",suctionSuperheatStatus:"hp1SuctionSuperheatStatus",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",suctionSuperheat:"hp2SuctionSuperheat",dischargeSuperheat:"hp2DischargeSuperheat",suctionSuperheatStatus:"hp2SuctionSuperheatStatus",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],ge=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],vt=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],wo=["dayMax","silentMax","maxWater"],Ye=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],Jo=["flowKp","flowKi"],Pr=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],Nr=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],Or=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],$h=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Un=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...Nr,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],Dr=new Set(["commissioningStatus","cm100Active","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowActive","manualFlowStatus","manualFlowTargetIpwm","manualHpActive","manualHpStatus","manualHpGuardStatus","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg"]),fi=["cicCompatibilityMode"],bi=["otEnabled","otLinkProblem"],yi=["cicPollingEnabled","cicFeedUrl","cicDataStale"],vi=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],wi=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],Lr=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource"],Si=["supplyTemp","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","mqttOutsideTemperature","mqttOutsideTemperatureAge","mqttOutsideTemperatureValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid","mqttHeatingEnable","mqttHeatingEnableAge","mqttHeatingEnableValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","mqttCoolingEnable","mqttCoolingEnableAge","mqttCoolingEnableValid","coolingEnableValid","coolingEnableSelected","coolingEnableEffectiveSource","otThermostatCoolingEnable","coolingEnableHa","coolingEnableHaValid","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid"],lt=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],So=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid"],qi=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingDewPointSource","coolingWithoutDewPointMode","coolingGuardMode","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],qo=[...ge.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],Ti=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],To=["silentStartTime","silentEndTime","silentMax","dayMax"],bc=1e4;var Gn=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Eo=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingRoomRequestRequired","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],Pt=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Ah=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],Fr=[...Pt,...Ah,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],Zo=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],Je=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],Ir=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],Ei=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...$h],yc=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...vt,...qo,...Ye,"maxWater",...To,...lt,...So,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1SuctionSuperheat","hp1DischargeSuperheat","hp1SuctionSuperheatStatus","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2SuctionSuperheat","hp2DischargeSuperheat","hp2SuctionSuperheatStatus","hp2WaterIn","hp2WaterOut"],zn=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],Qn=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...Un,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","webServerLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear",...fi,...bi,...vi,...yi,...wi,...Lr,...Si,...Ye,...Jo,...Pr,...Nr,...Or,...qi,...wo,...vt,...qo,...Ti,...To,...Bn];var KS=new Set(["installationTopology",...Un,...Bn,"cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp","statusLedsEnabled"]),zt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource",...Pr]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...ge.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Ci=1,Qt=[...new Set(zt.flatMap(e=>e.keys))],vc=new Set(Qt),wc=5e3,Sc=3e4,qc=6e4,Co=12e3,_r=4e3,Tc=1500,Ec=3e4,Cc=3e4,kc=1e3,Wr=3e4,ki=250,xc=750,Hh=22,$c=Hh/1.7,Ac=360/3.2,ko="2000-01-01 00:00:00";function Mh(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}var wt=24,xo=[3,12,24,72,168,336,720],t={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,supplementaryPrimeTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:Ph(),devPanelOpen:Oh(),nativeOpen:Nh()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:Dh(),appView:"",overviewTheme:Rh(),hpVisualMode:Lh(),hpLayoutMode:Fh(),trendWindowHours:Ih(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,trendHistoryMetadata:{},trendHistoryMetadataError:"",trendHistoryMetadataSignature:"",trendHistoryMetadataLastFetchAt:0,trendHistoryMetadataFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryCsrfToken:"",energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",energyHistoryExportMode:"days_and_hours",energyHistoryExportBusy:!1,energyHistoryExportError:"",energyHistoryExportNotice:"",settingsStorageDetailsOpen:!1,energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""},deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:Mh(),debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null,complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},renderedAppView:"",renderedSettingsGroup:"",settingsPageScrollRestoreToken:0,settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1,mqttBusy:!1,mqttNotice:"",mqttError:"",mqttCopiedTopicKey:"",mqttCopiedTopicTimer:null,mqttExpandedTopicKey:"",mqttInputToggleBusyKey:"",mqttSensorsModalRenderSignature:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:_h(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Rh(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function Ph(){return!1}function Nh(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function Oh(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function Dh(){try{let e=window.localStorage.getItem("oq-settings-group");return Pe.has(e)?e:me[0].id}catch{return me[0].id}}function Lh(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function Fh(){try{let e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function Ih(){try{let e=Number(window.localStorage.getItem("oq-trend-window-hours"));return xo.includes(e)?e:wt}catch{return wt}}function xi(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function _h(){return!!xi()?.matches}function h(e){return!!t.entities[e]}function T(e){if(Object.prototype.hasOwnProperty.call(t.drafts,e))return t.drafts[e];let o=t.entities[e];return o?o.value??o.state??"":""}function Oe(e){let o=t.entities[e]||{};return{min:Number(o.min_value??0),max:Number(o.max_value??100),step:Number(o.step??1),uom:o.uom||""}}function Ee(e){return Object.prototype.hasOwnProperty.call(t.inputDrafts,e)?t.inputDrafts[e]:T(e)}function $e(e){if(typeof e=="number")return e;let o=String(e??"").trim().replace(",",".");return!o||o==="-"||o==="."||o==="-."?Number.NaN:Number(o)}function St(e){let o=String(e||"").trim();if(!o)return"";let r=o.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]||"0");return[n,a,i].some(l=>Number.isNaN(l))||n<0||n>23||a<0||a>59||i<0||i>59?"":`${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Vr(e){let o=St(e);return o?o.slice(0,5):""}function Ke(e){let o=String(e||"").trim();if(!o)return"";let r=o.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),p=Number(r[5]),u=Number(r[6]||"0");return[n,a,i,l,p,u].some(c=>Number.isNaN(c))||n<2e3||a<1||a>12||i<1||i>31||l<0||l>23||p<0||p>59||u<0||u>59?"":`${String(n).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(u).padStart(2,"0")}`}function Yn(e){let o=Ke(e);return!o||o===ko?"":o.slice(0,16).replace(" ","T")}function Mc(e){let o=Ke(e);if(!o||o===ko)return null;let r=o.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!r)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),p=Number(r[5]),u=Number(r[6]),c=new Date(n,a-1,i,l,p,u,0);return Number.isNaN(c.getTime())?null:c}function Br(e=T("openquattResumeAt")){return!!Mc(e)}function Xo(e,o=!1){let r=Mc(e);return r?new Intl.DateTimeFormat("nl-NL",o?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(r):""}function Hc(e){let o=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${o}-${r}-${n}T${a}:${i}`}function Wh(e){let o=new Date(e.getTime());o.setSeconds(0,0);let r=o.getMinutes(),n=r%15;return n!==0&&o.setMinutes(r+(15-n)),o}function $i(e){let o=new Date;if(e==="2h"||e==="8h"){let r=e==="2h"?2:8,n=Wh(new Date(o.getTime()+r*3600*1e3));return Hc(n)}if(e==="tomorrow-morning"){let r=new Date(o);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),Hc(r)}return""}function Jn(){let e=Yn(t.pauseResumeDraft);if(e)return e;let o=Yn(T("openquattResumeAt"));return o||$i("2h")}function K(e,o=T(e)){if(o===""||o===null||Number.isNaN(Number(o)))return"\u2014";let r=Oe(e),n=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return`${Number(o).toFixed(n)}${r.uom?` ${r.uom}`:""}`}function he(e,o){let r=Oe(e),n=$e(o);if(Number.isNaN(n)){let u=$e(t.entities[e]?.value??t.entities[e]?.state??"");return Number.isNaN(u)?r.min:u}let a=Math.min(r.max,Math.max(r.min,n)),i=Math.round((a-r.min)/r.step),l=r.min+i*r.step,p=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(p))}function Zn(){let e=ge[Math.floor(ge.length/2-1)],o=ge[Math.floor(ge.length/2)];if(!e||!o||!h("curveFallbackSupply"))return null;let r=he(e.key,T(e.key)),n=he(o.key,T(o.key)),a=(r+n)/2,i=he("curveFallbackSupply",a);return{value:i,label:K("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${o.label}).`,isCurrent:he("curveFallbackSupply",T("curveFallbackSupply"))===i}}function Vh(e){let o=String(e||"").replace(/\/$/,"");if(!o)return"";let r=o.split("/").pop()||"";return/\.[a-z0-9]+$/i.test(r)?o.slice(0,-r.length).replace(/\/$/,"")||"":o}function De(){return Vh(window.location.pathname)}function j(e,o,r=""){let n=r?`/${r}`:"";return`${De()}/${e}/${encodeURIComponent(o)}${n}`}function oe(e=T("strategy")){return String(e||"").includes("Water Temperature Control")}function Rc(e=T("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function _(e,o,r=""){let n=Number(e);return Number.isNaN(n)?"\u2014":`${n.toFixed(o)}${r?` ${r}`:""}`}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Pc(){let e=[];e.push(oe()?"Stooklijn":"Power House");let o=String(T(oe()?"curveControlProfile":"phResponseProfile")||"").trim();o&&e.push(`profiel ${o}`);let r=String(T("flowControlMode")||"").trim();return r&&e.push(`flow ${r==="Manual PWM"?"handmatig":"setpoint"}`),r==="Manual PWM"&&h("manualIpwm")?e.push(`iPWM ${K("manualIpwm")}`):h("flowSetpoint")&&e.push(`flow ${K("flowSetpoint")}`),h("dayMax")&&e.push(`dag ${K("dayMax")}`),h("silentMax")&&e.push(`silent ${K("silentMax")}`),h("maxWater")&&e.push(`max water ${K("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function O(e,o="\u2014"){let r=t.entities[e];if(!r)return o;if(typeof r.state=="string"&&r.state.trim()!=="")return r.state;let n=r.value??r.state;return n==null||n===""?o:typeof n=="boolean"?n?"Aan":"Uit":typeof n=="number"&&!Number.isNaN(n)&&r.uom?`${n} ${r.uom}`:String(n)}function A(e){let o=Number(T(e));return Number.isNaN(o)?NaN:o}function Ai(e){let o=String(e||"").toLowerCase();return o.includes("cop")||o.includes("eer")}function Hi(e){let o=String(e||"");if(o==="totalEer"){let r=A("totalCoolingPower"),n=A("coolingPowerInput"),a=Number.isNaN(n)?A("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}if(o==="totalCop"){let r=A("totalHeat"),n=A("heatingPowerInput"),a=Number.isNaN(n)?A("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}return NaN}function er(e,o=""){let r=String(t.entities[e]?.uom||"").trim();return r||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1SuctionSuperheat:"K",hp1DischargeSuperheat:"K",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2SuctionSuperheat:"K",hp2DischargeSuperheat:"K",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||o}function Ze(e){let o=t.entities[e],r=Hi(e);if(!o)return Number.isNaN(r)?"\u2014":_(r,1,er(e));let n=A(e);if(Number.isNaN(n))return Number.isNaN(r)?O(e):_(r,1,er(e));let a=n>0||Number.isNaN(r)?n:r,i=Ai(e)?1:0;return _(a,i,er(e))}function x(e){let o=t.entities[e];if(!o)return!1;if(typeof o.value=="boolean")return o.value;let r=String(o.state??o.value??"").toLowerCase();return r==="on"||r==="true"||r==="1"}function ct(){return!h("trendHistoryEnabled")||x("trendHistoryEnabled")}function Xn(){let e=t.entities.setupComplete;if(!e)return null;let o=String(e.state??e.value??"").trim().toLowerCase();return!o||o==="unknown"||o==="unavailable"?null:o==="on"||o==="true"||o==="1"?!0:o==="off"||o==="false"||o==="0"?!1:null}function Nc(){return`
      <div class="oq-helper-app-nav">
        ${jn.filter(e=>e.id!=="diagnosis"||ct()).map(e=>`
          <button
            class="oq-helper-app-tab ${t.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${st(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
          </button>
        `).join("")}
      </div>
    `}function Bh(e=t.appView){return jn.find(o=>o.id===e)?.label||"OpenQuatt"}function Mi(){if(typeof document>"u")return;if(t.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}let e=Bh();document.title=`${e} \u2022 OpenQuatt`}function Ri(){if(typeof document>"u")return;if(t.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");let e=t.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}async function Yt(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;let o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="fixed",o.style.top="-1000px",o.style.opacity="0",document.body.appendChild(o),o.focus(),o.select();let r=!1;try{r=document.execCommand("copy")}finally{document.body.removeChild(o)}return r}function Pi(e,o){let r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=o,n.rel="noreferrer",document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Ni(e,o,r="text/plain"){Pi(new Blob([o],{type:r}),e)}function Oc(e,o){Ni(e,JSON.stringify(o,null,2),"application/json")}var Oi=null;function Dc(e){Oi=typeof e=="function"?e:null}function d(){Oi&&Oi()}var Kh=1500;function Di(){t.deviceReconnectRecoveryTimer&&(window.clearTimeout(t.deviceReconnectRecoveryTimer),t.deviceReconnectRecoveryTimer=null)}function Jt(){return Number(t.deviceReconnectRecoveryStartedAt||0)>0}function jh(){return Jt()?Number(t.deviceReconnectRecoveryStartedAt||0):Number(t.deviceReconnectStartedAt||0)}function Lc(){return Jt()?"Gegevens verversen":"Wachten op gegevens"}function Fc(){let e=jh(),o=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return Jt()?o>0?`${o}s aan het verversen`:"Net weer online":o>0?`${o}s bezig`:"Net gestart"}function Li(){if(!t.deviceReconnectMode||Jt())return!1;Di(),t.deviceReconnectRecoveryStartedAt=Date.now(),t.deviceReconnectLastError="",t.entitySyncFailureCount=0;let e=t.deviceReconnectRecoveryStartedAt;return t.deviceReconnectRecoveryTimer=window.setTimeout(()=>{t.deviceReconnectMode&&Number(t.deviceReconnectRecoveryStartedAt||0)===e&&(Fi(),d())},Kh),d(),!0}function Zt(e="reconnect",o=""){t.deviceReconnectMode||(t.deviceReconnectStartedAt=Date.now()),Di(),t.deviceReconnectMode=e,t.deviceReconnectRecoveryStartedAt=0,t.deviceReconnectLastError=o?String(o):t.deviceReconnectLastError,t.systemModal="",t.updateModalOpen=!1,t.controlError=""}function Fi(){Di(),!(!t.deviceReconnectMode&&!t.entitySyncFailureCount)&&(t.deviceReconnectMode="",t.deviceReconnectStartedAt=0,t.deviceReconnectRecoveryStartedAt=0,t.deviceReconnectLastError="",t.entitySyncFailureCount=0)}function Ic(){return Jt()?"OpenQuatt is weer online":t.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":t.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function _c(){return Jt()?t.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":t.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":t.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function Kr(e,o={},r=Cc){if(o.force===!0)return!0;let n=Number(e||0);return!n||Date.now()-n>=r}function Nt(){return t.appView==="settings"&&t.settingsGroup==="system"}function Wc(){return t.appView==="settings"&&t.settingsGroup==="integrations"}function Vc(e=t.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Ii(){let e=t.authStatus||{};t.authDraftUsername=e.enabled?String(e.username||"").trim():"",t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword=""}function ta(e=t.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",e.key_present?"has-key":"no-key",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Bc(){return t.systemModal==="login"||t.systemModal==="api-security"||Nt()}function Kc(){return t.systemModal==="api-security"||Nt()}async function $o(e={}){if(!Kr(t.lastAuthStatusRefreshAt,e))return!1;t.lastAuthStatusRefreshAt=Date.now();try{let o=await fetch("/auth/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json(),n={enabled:!!r.enabled,setup_window_active:!!r.setup_window_active,username:String(r.username||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=Vc(),i=Vc(n);return t.authStatus=n,a!==i&&Ii(),t.systemModal==="login"&&(t.authError=""),a!==i}catch(o){return t.systemModal==="login"&&(t.authError=`Loginstatus kon niet worden geladen. ${o.message}`),!1}}function ea(){return t.nativeOpen||t.systemModal!=="login"?!1:(t.authStatus||{}).setup_window_active!==!0}function Ao(){t.loginAuthStatusPollTimer&&(window.clearTimeout(t.loginAuthStatusPollTimer),t.loginAuthStatusPollTimer=null)}function jc(e=kc){t.loginAuthStatusPollTimer||!ea()||(t.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(t.loginAuthStatusPollTimer=null,!ea())return;let o=t.authError;(await $o({force:!0})||t.authError!==o)&&t.systemModal==="login"&&d(),ea()&&jc()},Math.max(0,Number(e)||0)))}async function Uc(e={}){if(t.systemModal!=="login")return!1;let o=t.authError,r=await $o({force:!0});return(r||t.authError!==o)&&t.systemModal==="login"&&d(),e.poll!==!1&&ea()&&jc(),r}async function Xt(e={}){if(!Kr(t.lastApiSecurityStatusRefreshAt,e))return!1;t.lastApiSecurityStatusRefreshAt=Date.now();try{let o=await fetch("/api-security/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json(),n={enabled:!!r.enabled,transport_active:!!r.transport_active,pending_restart:!!r.pending_restart,key_present:!!(r.key_present||r.key),key:String(r.key||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=ta(),i=ta(n);return t.apiSecurityStatus=n,t.apiSecurityError="",a!==i&&(t.apiSecurityNotice=""),a!==i}catch(o){return t.apiSecurityError=`API-beveiliging kon niet worden geladen. ${o.message}`,!1}}async function Gc(){let e=R.restartAction;if(e){t.busyAction="restartAction",t.controlError="",t.controlNotice="",d();try{let o=await fetch(j(e.domain,e.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);Ao(),t.systemModal="",t.controlNotice="OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",Zt("restart")}catch(o){t.controlError=`Herstart mislukt. ${o.message}`}finally{t.busyAction="",d()}}}async function zc(){let e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",d();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",d();try{let o=new URLSearchParams;o.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await Xt({force:!0}),t.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",t.apiSecurityError="",d()}catch(o){t.apiSecurityError=`Inschakelen is mislukt. ${o.message}`,d()}finally{t.apiSecurityBusy=!1,d()}}async function Qc(){let e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",d();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",d();try{let o=new URLSearchParams;o.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await Xt({force:!0}),t.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",t.apiSecurityError="",d()}catch(o){t.apiSecurityError=`Roteren is mislukt. ${o.message}`,d()}finally{t.apiSecurityBusy=!1,d()}}async function Yc(){let e=t.apiSecurityStatus||{};if(!e.csrf_token){t.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",d();return}if(!e.enabled){t.apiSecurityNotice="API-encryptie staat al uit.",t.apiSecurityError="",d();return}t.apiSecurityBusy=!0,t.apiSecurityNotice="",t.apiSecurityError="",d();try{let o=new URLSearchParams;o.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await Xt({force:!0}),t.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",t.apiSecurityError="",d()}catch(o){t.apiSecurityError=`Uitzetten is mislukt. ${o.message}`,d()}finally{t.apiSecurityBusy=!1,d()}}async function Jc(){let e=String(t.apiSecurityStatus?.key||"").trim();if(!e){t.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",d();return}try{if(!await Yt(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");t.apiSecurityNotice="API-sleutel gekopieerd.",t.apiSecurityError="",d()}catch(o){t.apiSecurityError=`Kopi\xEBren is mislukt. ${o.message}`,d()}}async function Zc(){let e=t.authStatus||{},o=e.enabled===!0,r=e.setup_window_active===!0,n=String(t.authDraftCurrentPassword||""),a=String(t.authDraftUsername||"").trim(),i=String(t.authDraftNewPassword||""),l=String(t.authDraftConfirmPassword||"");if(!a||!i){t.authError="Vul een gebruikersnaam en wachtwoord in.",d();return}if(i!==l){t.authError="De twee wachtwoorden zijn niet gelijk.",d();return}if(o&&!n){t.authError="Vul je huidige wachtwoord in.",d();return}if(!o&&!r){t.authError="Houd de herstelknop 5 seconden vast.",d();return}if(!e.csrf_token){t.authError="Logingegevens laden nog. Probeer het zo opnieuw.",d();return}t.authBusy=!0,t.authError="",t.authNotice="",d();try{let p=new URLSearchParams;p.set("csrf_token",e.csrf_token),p.set("current_password",n),p.set("new_username",a),p.set("new_password",i);let u=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:p.toString()}),c=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!c.ok)throw new Error(c.error||`HTTP ${u.status}`);await $o({force:!0}),t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authDraftUsername=String(t.authStatus?.username||a).trim(),t.authNotice=o?"Login aangepast.":"Login staat nu aan.",t.authError="",d()}catch(p){t.authError=`Opslaan is mislukt. ${p.message}`,d()}finally{t.authBusy=!1,d()}}async function Xc(){let e=t.authStatus||{};if(!e.enabled){t.authNotice="Login staat al uit.",t.authError="",d();return}let o=String(t.authDraftCurrentPassword||"");if(!o){t.authError="Vul je huidige wachtwoord in.",d();return}if(!e.csrf_token){t.authError="Logingegevens laden nog. Probeer het zo opnieuw.",d();return}t.authBusy=!0,t.authError="",t.authNotice="",d();try{let r=new URLSearchParams;r.set("csrf_token",e.csrf_token),r.set("current_password",o);let n=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:r.toString()}),a=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!a.ok)throw new Error(a.error||`HTTP ${n.status}`);await $o({force:!0}),t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authDraftUsername="",t.authNotice="Login staat nu uit.",t.authError="",d()}catch(r){t.authError=`Uitzetten is mislukt. ${r.message}`,d()}finally{t.authBusy=!1,d()}}function W(e){let o=t.entities[e];if(!o)return t.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;let r=o.state??o.value??"",n=Array.isArray(o.option)?o.option.join(","):Array.isArray(o.options)?o.options.join(","):"",a=[o.min_value??"",o.max_value??"",o.step??"",o.uom??""].join(",");return`${e}:${r}::${n}::${a}`}function Ce(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function jr(){return[t.appView,t.settingsGroup,t.busyAction,t.loadingEntities?"loading":"ready",ta(),W("setupComplete"),...Qn.map(e=>W(e))].join("|")}function oa(){return[t.appView,t.busyAction,W("openquattEnabled"),W("openquattResumeAt"),W("manualCoolingEnable"),W("coolingEnableSource"),W("coolingEnableSelected"),W("coolingEnableEffectiveSource"),W("silentModeOverride"),W("controlModeLabel"),W("coolingPermitted"),W("coolingRequestActive"),W("coolingBlockReason"),W("silentActive")].join("|")}function Ur(){t.root&&(t.root.style.removeProperty("--oq-flow-offset"),t.root.style.removeProperty("--oq-flow-offset-reverse"),t.root.style.removeProperty("--oq-fan-rotation"),t.root.getAttribute("style")||t.root.removeAttribute("style"))}function ra(){return t.motionTargets={pipeFlows:[],fanBlades:[]},t.root?(t.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{t.motionTargets.pipeFlows.push(a)})}),t.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(n=>{n.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{t.motionTargets.pipeFlows.push(a)})}),t.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{t.motionTargets.fanBlades.push(a)})}),t.motionTargets.pipeFlows.length+t.motionTargets.fanBlades.length):0}function Uh(){return t.motionTargets.pipeFlows.length>0||t.motionTargets.fanBlades.length>0}function eu(e=performance.now()){if(!t.root||t.reducedMotion||!Uh()&&ra()===0)return!1;t.motionStartedAt||(t.motionStartedAt=e);let o=(e-t.motionStartedAt)/1e3,r=o*Ac%360;return t.motionTargets.pipeFlows.forEach(n=>{let a=n.dataset.oqFlowVariant==="water"?.42:1,i=-(o*$c*a);n.style.strokeDashoffset=`${i.toFixed(3)}px`}),t.motionTargets.fanBlades.forEach(n=>{n.style.transform=`rotate(${r.toFixed(3)}deg)`}),!0}function tu(e){if(!eu(e)){t.motionFrame=0,t.motionStartedAt=0;return}t.motionFrame=window.requestAnimationFrame(tu)}function Gr(){if(t.motionFrame||t.reducedMotion||ra()===0)return;let e=performance.now();if(t.motionStartedAt=e,!eu(e)){t.motionStartedAt=0;return}t.motionFrame=window.requestAnimationFrame(tu)}function zr(){t.motionFrame&&(window.cancelAnimationFrame(t.motionFrame),t.motionFrame=0),t.motionStartedAt=0,Ur()}var ou=null,ru=null;function nu({start:e,stop:o}={}){ou=typeof e=="function"?e:null,ru=typeof o=="function"?o:null}function _i(){ou?.()}function au(){ru?.()}var Le={};function iu(e={}){Object.keys(Le).forEach(o=>{delete Le[o]}),Object.assign(Le,e)}function su(e){Le.handleChange?.(e)}function lu(e){Le.handleClick?.(e)}function Wi(e){Le.handleFocusChange?.(e)}function cu(e){Le.handleInput?.(e)}function uu(e){Le.handleKeyDown?.(e)}function pu(e){Le.handlePointerDown?.(e)}function du(e){Le.handlePointerMove?.(e)}function mu(e){Le.handlePointerUp?.(e)}function gu(e){Le.handleSettingsInteractionEnd?.(e)}function hu(e){Le.handleSettingsInteractionStart?.(e)}function fu(e){Le.handleWheel?.(e)}function eo(){return"overview"}function Qr(e){return e==="trends"&&(e="diagnosis"),!hc.has(e)||e==="diagnosis"&&!ct()?"":e}function na(e){return String(e||"").trim().toLowerCase()}function Yr(){try{let e=new URL(window.location.href),o=na(e.searchParams.get("view")||""),r=Qr(o);if(r)return r;let n=na(e.hash.replace(/^#/,""));return Qr(n)||""}catch{return""}}function Vi(){try{let e=new URL(window.location.href),o=na(e.searchParams.get("section")||"");if(Pe.has(o))return o;let r=na(e.searchParams.get("group")||"");return Pe.has(r)?r:""}catch{return""}}function Bi(e="replace"){try{let o=new URL(window.location.href),r=Qr(t.appView)||eo();if(o.searchParams.set("view",r),r==="settings"){let a=Pe.has(t.settingsGroup)?t.settingsGroup:me[0].id;o.searchParams.set("section",a),o.searchParams.delete("group")}else o.searchParams.delete("section"),o.searchParams.delete("group");o.hash&&Qr(o.hash.replace(/^#/,""))&&(o.hash="");let n=e==="push"?"pushState":"replaceState";window.history[n]({oqView:r,oqSettingsSection:r==="settings"?t.settingsGroup:""},"",o.toString())}catch{}}function ut(e,o={}){let r=Qr(e)||eo(),n=o.syncMode||"replace",a=t.appView!==r;t.appView=r,(a||o.forceSync)&&Bi(n)}function aa(e=Date.now()){return Number(t.firmwareOtaQuietUntil||0)>e}var Gh=new Set(["compressor oil return"]);function to(e){let o=String(e||"").trim();return!o||o==="None"?"Geen actieve storingen":o}function zh(e){let o=to(e);return o==="Geen actieve storingen"?[]:o.split(",").map(r=>r.trim()).filter(r=>r&&!Gh.has(r.toLowerCase()))}function ia(e){let o=zh(e);return o.length>0?o.join(", "):"Geen actieve storingen"}function U(e){return h(e)&&x(e)}function qt(e){return!h(e)||x(e)}function ji(e){return h(e)?to(O(e,"None")):""}function Ki(e){return h(e)?ia(O(e,"None")):""}function Jr(e){let o=Ki(e).trim().toLowerCase();return!!o&&o!=="geen actieve storingen"}function Ot(){let e=[],o=U("compressorCyclingWarning2h")||U("compressorCyclingWarning72h")||U("alternatingCompressorStartsWarning"),r=U("compressorCyclingAlertLatched"),n=qt("cicPollingEnabled"),a=qt("otEnabled"),i=(p,u)=>{U(p)&&e.push({key:p,label:u})};i("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),i("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),i("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),i("lowflowFaultActive","Te lage flow"),i("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),n&&i("cicDataStale","CIC-data is verouderd"),a&&i("otLinkProblem","OpenTherm-verbinding meldt een probleem"),Jr("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${Ki("hp1Failures")}`}),Jr("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${Ki("hp2Failures")}`});let l=e.length;return r&&!o&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:r,cyclingAlertActive:o,cyclingAlertRecovered:r&&!o,title:l>0?"Aandacht nodig":r?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:r?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function Zr(e){let o=e.active?e.problems.map(r=>r.key).sort().join("|"):"";if(!o){t.installationMonitoringProblemSignature="";return}o!==t.installationMonitoringProblemSignature&&(t.installationMonitoringProblemSignature=o,t.installationMonitoringDetailsOpen=!0)}var Ui=null,Gi=null;function bu({getSignature:e,patch:o}={}){Ui=typeof e=="function"?e:null,Gi=typeof o=="function"?o:null}function yu(){return Ui?Ui():""}function zi(){return Gi?Gi():!1}var Qi=null;function vu({patch:e}={}){Qi=typeof e=="function"?e:null}function wu(){return Qi?Qi():!1}var tr=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"],Yi=["trendHistoryEnabled","trendHistoryFlashEnabled"],Ji=["lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"];function oo(){return[...new Set(tr)]}var pt={};function Su(e={}){pt={refreshEnergyHistoryData:typeof e.refreshEnergyHistoryData=="function"?e.refreshEnergyHistoryData:null,refreshSettingsStorageState:typeof e.refreshSettingsStorageState=="function"?e.refreshSettingsStorageState:null,refreshTrendHistoryData:typeof e.refreshTrendHistoryData=="function"?e.refreshTrendHistoryData:null,refreshTrendHistoryMetadata:typeof e.refreshTrendHistoryMetadata=="function"?e.refreshTrendHistoryMetadata:null,shouldRefreshSettingsStorageForCurrentSurface:typeof e.shouldRefreshSettingsStorageForCurrentSurface=="function"?e.shouldRefreshSettingsStorageForCurrentSurface:null}}function Zi(){return pt.shouldRefreshSettingsStorageForCurrentSurface?pt.shouldRefreshSettingsStorageForCurrentSurface():!1}async function qu(e={}){return pt.refreshTrendHistoryMetadata?pt.refreshTrendHistoryMetadata(e):!1}async function Tu(e={}){return pt.refreshSettingsStorageState?pt.refreshSettingsStorageState(e):!1}async function Xi(e={}){return pt.refreshTrendHistoryData?pt.refreshTrendHistoryData(e):!1}async function sa(e={}){return pt.refreshEnergyHistoryData?pt.refreshEnergyHistoryData(e):!1}var Dt={};function or(e={}){Object.entries(e).forEach(([o,r])=>{typeof r=="function"&&(Dt[o]=r)})}function Eu(){return Dt.patchEnergyDom?Dt.patchEnergyDom():!1}function Cu(){return Dt.patchResultsDom?Dt.patchResultsDom():!1}function ku(){return Dt.patchOverviewDom?Dt.patchOverviewDom():!1}function xu(){return Dt.patchDiagnosisDom?Dt.patchDiagnosisDom():!1}var Ho={};function $u(e={}){Ho={clearOutput:typeof e.clearOutput=="function"?e.clearOutput:null,closeStream:typeof e.closeStream=="function"?e.closeStream:null,resetRecoveryState:typeof e.resetRecoveryState=="function"?e.resetRecoveryState:null}}function es(){if(Ho.closeStream)return Ho.closeStream();let e=t.webServerLogSource;e&&e.close(),t.webServerLogSource=null,t.webServerLogConnected=!1}function ts(){if(Ho.clearOutput)return Ho.clearOutput();t.webServerLogEntries=[],t.webServerLogError="",t.webServerLogRaw="",t.webServerLogNotice=""}function os(){if(Ho.resetRecoveryState)return Ho.resetRecoveryState();es(),t.webServerLogEnabled=null,t.webServerLogConnected=!1,ts()}function Au(){let e=t.mqttStatus;return e?e.enabled&&e.connected?"Verbonden":e.enabled?"Ingeschakeld":e.broker?"Uit":"Niet ingesteld":"Laden..."}function Hu(){let e=t.mqttStatus;if(!e)return"MQTT-status wordt geladen.";let o=String(e.broker||"").trim(),r=Number(e.port||1883),n=o?`${o}:${r}`:"geen broker";return e.enabled&&e.connected?`Verbonden met ${n}.`:e.enabled?o?`MQTT staat aan; verbinding met ${n} is nog niet bevestigd.`:"MQTT staat aan, maar er is nog geen broker ingesteld.":o?`Broker ${n} is opgeslagen, maar MQTT inputbronnen staan uit.`:"MQTT inputbronnen staan uit. Stel een broker in om externe bronwaarden te ontvangen."}function Qh(e,o=2){let r=A(e);return Number.isFinite(r)?`
      <span class="oq-settings-mqtt-sensor-value-number">${s(r.toFixed(o))}</span>
      <span class="oq-settings-mqtt-sensor-value-unit">\xB0C</span>
    `:'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>'}function Yh(e){if(!h(e.valueKey)||!x(e.validKey))return'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>';let o=e.activeLabel||"Toegestaan",r=e.inactiveLabel||"Geblokkeerd";return`<span class="oq-settings-mqtt-sensor-value-boolean">${s(x(e.valueKey)?o:r)}</span>`}function Jh(e){return e.kind==="binary"?Yh(e):Qh(e.valueKey)}function Zh(e){let o=A(e);return Number.isFinite(o)?o<60?`${Math.round(o)} s`:o<3600?`${Math.round(o/60)} min`:`${Math.round(o/3600)} u`:"\u2014"}function rs(e){return h(e)?x(e)?"Geldig":"Ontbreekt of verouderd":"Nog geen status"}function ns(e){let o=t.mqttStatus?.input_topics;if(o&&typeof o=="object"){let r=String(o[e]||"").trim();if(r)return r}return e==="cooling_dew_point"?String(t.mqttStatus?.dew_point_topic||"").trim():""}function la(e){let o=t.mqttStatus?.input_enabled;return o&&typeof o=="object"&&Object.prototype.hasOwnProperty.call(o,e)?o[e]!==!1:!0}function Xh(e){let o=t.mqttStatus?.input_retained;return!!(o&&typeof o=="object"&&o[e])}function Mu(){return[{topicKey:"cooling_dew_point",label:"Dauwpunt",valueKey:"mqttCoolingDewPoint",ageKey:"mqttCoolingDewPointAge",validKey:"mqttCoolingDewPointValid",staleCopy:"15 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 16.2, 16,2, 16.2 \xB0C of {"value":16.2}. Geldig bereik: -20..35 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"outside_temperature",label:"Buitentemperatuur",valueKey:"mqttOutsideTemperature",ageKey:"mqttOutsideTemperatureAge",validKey:"mqttOutsideTemperatureValid",staleCopy:"30 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 15.0, 15,0, 15.0 \xB0C of {"value":15.0}. Geldig bereik: -40..60 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_temperature",label:"Kamertemperatuur",valueKey:"mqttRoomTemperature",ageKey:"mqttRoomTemperatureAge",validKey:"mqttRoomTemperatureValid",staleCopy:"10 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 21.1, 21,1, 21.1 \xB0C of {"value":21.1}. Geldig bereik: 0..50 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_setpoint",label:"Kamer setpoint",valueKey:"mqttRoomSetpoint",ageKey:"mqttRoomSetpointAge",validKey:"mqttRoomSetpointValid",staleCopy:"nieuw bericht",stateful:!0,payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een setpoint in \xB0C. Voorbeelden: 21.0, 21,0, 21.0 \xB0C of {"value":21.0}. Geldig bereik: 5..35 \xB0C. Retained berichten worden geaccepteerd; de waarde blijft gelden tot een nieuw setpoint, uitschakelen of herstart.'},{topicKey:"heating_enable",label:"Warmtetoestemming",valueKey:"mqttHeatingEnable",ageKey:"mqttHeatingEnableAge",validKey:"mqttHeatingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer warmtetoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}. Retained berichten worden geaccepteerd; de waarde blijft gelden tot een nieuwe payload, uitschakelen of herstart.'},{topicKey:"cooling_enable",label:"Koeltoestemming",valueKey:"mqttCoolingEnable",ageKey:"mqttCoolingEnableAge",validKey:"mqttCoolingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer koeltoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}. Retained berichten worden geaccepteerd; de waarde blijft gelden tot een nieuwe payload, uitschakelen of herstart.'}]}function as(e=Mu()){if(!e.length)return"Geen sensoren";let o=e.filter(i=>la(i.topicKey)),r=e.length-o.length;if(!o.length)return`${r} ${r===1?"topic":"topics"} uitgeschakeld`;let n=o.filter(i=>x(i.validKey)).length,a=n===o.length?`${n} ${n===1?"sensor":"sensoren"} geldig`:`${n} van ${o.length} sensoren geldig`;return r?`${a} \xB7 ${r} uit`:a}function Ru(){let e=t.mqttStatus||{},o=!!t.mqttDraftEnabled,r=!!t.mqttDraftClearPassword,n=e.password_set?"Leeg laten om huidig wachtwoord te behouden":"Optioneel",a=t.mqttNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(t.mqttNotice)}</span></div>`:"",i=t.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(t.mqttError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
                ${o?"checked":""}
                ${t.mqttBusy?"disabled":""}
              >
              <span>MQTT inputbronnen inschakelen</span>
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Broker</span>
              <input
                class="oq-helper-input"
                type="text"
                data-oq-mqtt-field="broker"
                value="${s(t.mqttDraftBroker)}"
                placeholder="mqtt.local"
                autocomplete="off"
                ${t.mqttBusy?"disabled":""}
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
                value="${s(t.mqttDraftPort)}"
                ${t.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Gebruikersnaam</span>
              <input
                class="oq-helper-input"
                type="text"
                data-oq-mqtt-field="username"
                value="${s(t.mqttDraftUsername)}"
                autocomplete="username"
                ${t.mqttBusy?"disabled":""}
              >
            </label>
            <label class="oq-helper-modal-auth-field oq-settings-mqtt-field">
              <span>Wachtwoord</span>
              <input
                class="oq-helper-input"
                type="password"
                data-oq-mqtt-field="password"
                value="${s(t.mqttDraftPassword)}"
                placeholder="${s(n)}"
                autocomplete="current-password"
                ${t.mqttBusy||r?"disabled":""}
              >
            </label>
            ${e.password_set?`
              <label class="oq-settings-mqtt-toggle">
                <input
                  type="checkbox"
                  data-oq-mqtt-field="clear-password"
                  ${r?"checked":""}
                  ${t.mqttBusy?"disabled":""}
                >
                <span>Opgeslagen wachtwoord wissen</span>
              </label>
            `:""}
          </div>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.mqttBusy?"disabled":""}>Gereed</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-mqtt-config" ${t.mqttBusy||!e.csrf_token?"disabled":""}>
              ${t.mqttBusy?"Opslaan...":"Opslaan"}
            </button>
          </div>
        </section>
      </div>
    `}function Pu(){let e=Mu(),o=e.some(i=>i.topicKey===t.mqttExpandedTopicKey)?t.mqttExpandedTopicKey:"",r=as(e),n=e.map(i=>{let l=ns(i.topicKey),p=l||"Wordt geladen...",u=Zh(i.ageKey),c=la(i.topicKey),g=x(i.validKey),y=c&&g&&Xh(i.topicKey),b=t.mqttCopiedTopicKey===i.topicKey,v=o===i.topicKey,m=t.mqttInputToggleBusyKey===i.topicKey,f=c?g?"valid":"invalid":"disabled",w=c?g?"geldig":"ongeldig":"uit",S=c?rs(i.validKey):"Uitgeschakeld",q=c?g?i.stateful?`Laatste MQTT-publicatie ${u==="\u2014"?"onbekend":`${u} geleden`}. De waarde blijft geldig tot een nieuwe payload, uitschakelen of herstart.`:`Laatste MQTT-publicatie ${u==="\u2014"?"onbekend":`${u} geleden`}. Zonder nieuwe MQTT-publicatie wordt de waarde na ${i.staleCopy} ongeldig.`:u==="\u2014"?"Nog geen geldige MQTT-publicatie ontvangen.":`Laatste MQTT-publicatie ${u} geleden; de waarde is niet meer geldig.`:"Dit topic wordt niet gebruikt. OpenQuatt subscribed er niet op.",E=c?"Topic uitschakelen":"Topic gebruiken",k="Retained MQTT-waarde: ontvangen bij verbinden met de broker.";return`
        <article class="oq-settings-mqtt-sensor-row${v?" is-open":""}${c?"":" is-disabled"}">
          <div
            class="oq-settings-mqtt-sensor-summary"
            data-oq-action="toggle-mqtt-sensor-topic"
            data-oq-mqtt-topic-key="${s(i.topicKey)}"
            aria-expanded="${v?"true":"false"}"
          >
            <span class="oq-settings-mqtt-sensor-name">${s(i.label)}</span>
            <span class="oq-settings-mqtt-sensor-value">
              ${c?Jh(i):'<span class="oq-settings-mqtt-sensor-value-missing">\u2014</span>'}
            </span>
            <span class="oq-settings-mqtt-sensor-status-cell">
              <em
                class="oq-settings-mqtt-sensor-status oq-settings-mqtt-sensor-status--${f}"
                title="${s(q)}"
                aria-label="${s(S)}: ${s(q)}"
              >${s(w)}</em>
              ${y?`<span class="oq-settings-mqtt-sensor-retained" title="${s(k)}" aria-label="${s(k)}">R</span>`:""}
            </span>
            <button
              class="oq-settings-toggle-switch oq-settings-mqtt-sensor-inline-toggle${c?" is-on":""}"
              type="button"
              data-oq-action="toggle-mqtt-input"
              data-oq-mqtt-topic-key="${s(i.topicKey)}"
              aria-pressed="${c?"true":"false"}"
              aria-label="${s(`${i.label}: ${E}`)}"
              title="${s(E)}"
              ${m||!t.mqttStatus?.csrf_token?"disabled":""}
            >
              <span class="oq-settings-toggle-switch-track"><span class="oq-settings-toggle-switch-knob"></span></span>
            </button>
            <span class="oq-settings-mqtt-sensor-chevron" aria-hidden="true"></span>
          </div>
          ${v?`
            <div class="oq-settings-mqtt-sensor-topic">
              <div class="oq-settings-mqtt-sensor-topic-head">
                <span class="oq-settings-mqtt-sensor-topic-label">Subscribe-topic</span>
              </div>
              <div class="oq-settings-mqtt-topic-row">
                <div class="oq-settings-mqtt-topic-field${b?" is-copied":""}">
                  <code>${s(p)}</code>
                  <button
                    class="oq-settings-mqtt-topic-copy"
                    type="button"
                    data-oq-action="copy-mqtt-topic"
                    data-oq-mqtt-topic-key="${s(i.topicKey)}"
                    aria-label="${s(b?`MQTT-topic voor ${i.label} gekopieerd`:`Kopieer MQTT-topic voor ${i.label}`)}"
                    title="${b?"Gekopieerd":"Kopieer topic"}"
                    ${l?"":"disabled"}
                  >
                    ${st(b?"clipboard-check":"clipboard","oq-settings-mqtt-topic-copy-icon")}
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
      `}).join(""),a=t.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(t.mqttError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--mqtt-sensors" role="dialog" aria-modal="true" aria-labelledby="oq-mqtt-sensors-modal-title">
          <div class="oq-settings-mqtt-modal-head">
            <span class="oq-settings-mqtt-modal-icon">${ef("oq-settings-mqtt-modal-logo")}</span>
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
    `}function ef(e=""){return`
      <svg${e?` class="${s(e)}"`:""} viewBox="0 0 320 320" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.1,180.6v117.1c0,8.4,6.8,15.3,15.3,15.3H142C141,239.8,80.9,180.7,7.1,180.6z"/>
        <path d="M7.1,84.1v49.8c99,0.9,179.4,80.7,180.4,179.1h51.7C238.2,186.6,134.5,84.2,7.1,84.1z"/>
        <path d="M312.9,297.6V193.5C278.1,107.2,207.3,38.9,119,7.1H22.4c-8.4,0-15.3,6.8-15.3,15.3v15c152.6,0.9,276.6,124,277.6,275.6h13C306.1,312.9,312.9,306.1,312.9,297.6z"/>
        <path d="M272.6,49.8c14.5,14.4,28.6,31.7,40.4,47.8V22.4c0-8.4-6.8-15.3-15.3-15.3h-77.3C238.4,19.7,256.6,33.9,272.6,49.8z"/>
      </svg>
    `}function is(e=t.mqttStatus||{}){let o=e.input_topics&&typeof e.input_topics=="object"?e.input_topics:{},r=e.input_enabled&&typeof e.input_enabled=="object"?e.input_enabled:{},n=e.input_retained&&typeof e.input_retained=="object"?e.input_retained:{};return[e.enabled?"on":"off",e.connected?"connected":"idle",String(e.broker||""),String(e.port||""),String(e.username||""),e.password_set?"password":"nopassword",String(e.dew_point_topic||""),JSON.stringify(o),JSON.stringify(r),JSON.stringify(n),String(e.source||""),String(e.csrf_token||"")].join(":")}function ca(){return[t.systemModal,t.mqttExpandedTopicKey||"",t.mqttCopiedTopicKey||"",t.mqttInputToggleBusyKey||"",t.mqttError||"",is(),W("mqttCoolingDewPoint"),W("mqttCoolingDewPointAge"),W("mqttCoolingDewPointValid"),W("mqttOutsideTemperature"),W("mqttOutsideTemperatureAge"),W("mqttOutsideTemperatureValid"),W("mqttRoomTemperature"),W("mqttRoomTemperatureAge"),W("mqttRoomTemperatureValid"),W("mqttRoomSetpoint"),W("mqttRoomSetpointAge"),W("mqttRoomSetpointValid"),W("mqttHeatingEnable"),W("mqttHeatingEnableAge"),W("mqttHeatingEnableValid"),W("mqttCoolingEnable"),W("mqttCoolingEnableAge"),W("mqttCoolingEnableValid")].join("|")}function ss(){let e=t.mqttStatus||{};t.mqttDraftEnabled=e.enabled===!0,t.mqttDraftBroker=String(e.broker||""),t.mqttDraftPort=String(e.port||1883),t.mqttDraftUsername=String(e.username||""),t.mqttDraftPassword="",t.mqttDraftClearPassword=!1,t.mqttDraftDirty=!1}function Nu(e){let o=e?.dataset?.oqMqttField;if(!o)return!1;if(t.mqttNotice="",t.mqttError="",t.mqttDraftDirty=!0,o==="enabled")t.mqttDraftEnabled=!!e.checked;else if(o==="broker")t.mqttDraftBroker=String(e.value||"");else if(o==="port")t.mqttDraftPort=String(e.value||"");else if(o==="username")t.mqttDraftUsername=String(e.value||"");else if(o==="password")t.mqttDraftPassword=String(e.value||"");else if(o==="clear-password"){t.mqttDraftClearPassword=!!e.checked,t.mqttDraftClearPassword&&(t.mqttDraftPassword="");let r=e.closest(".oq-helper-modal")?.querySelector('[data-oq-mqtt-field="password"]');r&&(r.value=t.mqttDraftPassword,r.disabled=t.mqttBusy||t.mqttDraftClearPassword)}return e.closest(".oq-helper-modal")?.querySelectorAll(".oq-helper-modal-success, .oq-helper-modal-note--error").forEach(r=>{r.remove()}),!0}function Ou(){return t.systemModal==="mqtt"||t.systemModal==="mqtt-sensors"||Wc()}async function Mo(e={}){if(!Kr(t.lastMqttStatusRefreshAt,e))return!1;t.lastMqttStatusRefreshAt=Date.now();try{let o=await fetch("/mqtt/status",{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json(),n=r.input_topics&&typeof r.input_topics=="object"?r.input_topics:{},a={};Object.entries(n).forEach(([v,m])=>{a[String(v)]=String(m||"")});let i=r.input_enabled&&typeof r.input_enabled=="object"?r.input_enabled:{},l={};Object.entries(i).forEach(([v,m])=>{l[String(v)]=m!==!1&&String(m).toLowerCase()!=="false"});let p=r.input_retained&&typeof r.input_retained=="object"?r.input_retained:{},u={};Object.entries(p).forEach(([v,m])=>{u[String(v)]=m===!0||String(m).toLowerCase()==="true"});let c=String(a.cooling_dew_point||r.dew_point_topic||"");a.cooling_dew_point=c;let g={enabled:!!r.enabled,connected:!!r.connected,broker:String(r.broker||""),port:Number(r.port||1883),username:String(r.username||""),password_set:!!r.password_set,dew_point_topic:c,input_topics:a,input_enabled:l,input_retained:u,source:String(r.source||""),csrf_token:String(r.csrf_token||"")},y=is(),b=is(g);return t.mqttStatus=g,y!==b&&(t.systemModal==="mqtt"&&t.mqttDraftDirty||ss(),t.mqttNotice=""),t.mqttError="",y!==b}catch(o){return t.mqttError=`MQTT-status kon niet worden geladen. ${o.message}`,!1}}async function Du(e="cooling_dew_point"){let o=ns(e);if(!o){t.mqttError="MQTT-topic is nog niet geladen.",t.mqttCopiedTopicKey="",d();return}try{let r=await Yt(o);t.mqttNotice="",t.mqttError=r?"":"Kopi\xEBren is niet gelukt.",t.mqttCopiedTopicKey=r?e:"",t.mqttCopiedTopicTimer&&window.clearTimeout(t.mqttCopiedTopicTimer),r&&(t.mqttCopiedTopicTimer=window.setTimeout(()=>{t.mqttCopiedTopicKey="",t.mqttCopiedTopicTimer=null,t.systemModal==="mqtt-sensors"&&d()},1800))}catch(r){t.mqttError=`Kopi\xEBren is mislukt. ${r.message}`,t.mqttCopiedTopicKey=""}d()}async function Lu(e,o){let r=t.mqttStatus||{};if(!r.csrf_token){t.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",d();return}t.mqttInputToggleBusyKey=e,t.mqttNotice="",t.mqttError="",d();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("enabled",o?"true":"false");let a=await fetch("/mqtt/input/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);t.lastMqttStatusRefreshAt=0,await Mo({force:!0})}catch(n){t.mqttError=`MQTT-topic kon niet worden opgeslagen. ${n.message}`}finally{t.mqttInputToggleBusyKey===e&&(t.mqttInputToggleBusyKey=""),d()}}async function Fu(){let e=t.mqttStatus||{},o=!!t.mqttDraftEnabled,r=String(t.mqttDraftBroker||"").trim(),n=Number(String(t.mqttDraftPort||"").trim()),a=String(t.mqttDraftUsername||"").trim(),i=!!t.mqttDraftClearPassword,l=i?"":String(t.mqttDraftPassword||"");if(!e.csrf_token){t.mqttError="MQTT-configuratie laadt nog. Probeer het zo opnieuw.",d();return}if(!Number.isInteger(n)||n<1||n>65535){t.mqttError="Vul een geldige poort in.",d();return}if(o&&!r){t.mqttError="Vul een broker in als je MQTT inschakelt.",d();return}t.mqttBusy=!0,t.mqttNotice="",t.mqttError="",d();try{let p=new URLSearchParams;p.set("csrf_token",e.csrf_token),p.set("enabled",o?"true":"false"),p.set("broker",r),p.set("port",String(n)),p.set("username",a),p.set("password",l),p.set("clear_password",i?"true":"false");let u=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:p.toString()}),c=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!c.ok)throw new Error(c.error||`HTTP ${u.status}`);t.mqttDraftDirty=!1,await Mo({force:!0}),t.mqttDraftPassword="",t.mqttDraftClearPassword=!1,t.mqttNotice=o?"MQTT inputbronnen staan aan.":"MQTT-configuratie opgeslagen.",t.mqttError="",d()}catch(p){t.mqttError=`Opslaan is mislukt. ${p.message}`,d()}finally{t.mqttBusy=!1,d()}}function Qu(){if(t.nativeOpen||t.appView!=="settings")return;let e=()=>{if(!(t.nativeOpen||t.appView!=="settings")){if(t.loadingEntities||t.focusedField||t.draggingCurveKey||t.busyAction||t.settingsInteractionLock){window.setTimeout(Qu,250);return}ce({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}async function Yu(){if(t.nativeOpen||!ds()||t.overviewMetadataHydrated||t.overviewMetadataHydrating)return!1;let e=vf();if(!e.length)return t.overviewMetadataHydrated=!0,!1;t.overviewMetadataHydrating=!0;try{return await L(e,"all",{concurrency:Mt}),t.overviewMetadataHydrated=!0,!0}catch{return!1}finally{t.overviewMetadataHydrating=!1,t.mounted&&!t.nativeOpen&&d()}}async function tf(e,o="state"){if(!(!e.length||t.nativeOpen)){t.entitySyncInFlight=!0;try{await L(e,o,{concurrency:o==="all"?Mt:Rt})}finally{t.entitySyncInFlight=!1;let r=t.pendingEntitySyncOptions;t.pendingEntitySyncOptions=null,r&&!t.nativeOpen&&window.setTimeout(()=>{ce(r)},0)}t.mounted&&!t.nativeOpen&&d()}}async function of(){if(!t.nativeOpen)try{ds()&&await Yu(),(t.appView==="overview"||t.appView==="diagnosis")&&await Xi({force:!0}),t.appView==="results"&&await sa({force:!0}),await $o({force:!0}),Nt()&&await Promise.all([Xt({force:!0}),Tu({forceTrendHistory:!0,forceEnergyHistory:!0})])}finally{t.mounted&&!t.nativeOpen&&d(),Qu()}}async function Ju(){if(t.nativeOpen)return;t.loadingEntities=!0,d();let e=nf();e>0&&await new Promise(i=>window.setTimeout(i,e));let o=Df(),r=Lf(o),n=t.appView==="settings"?"all":"state";try{await L(o,n,{concurrency:n==="all"?Mt:Rt}),t.appView==="settings"?await qf():await Sf()}finally{t.loadingEntities=!1,d()}let a=t.appView==="settings"?"all":"state";window.setTimeout(()=>{tf(r,a)},mf),ep(us())}var Iu={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel","statusLedsEnabled"]},rf={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Ye,...Jo,...To,...Ti,...Pr,...Nr,"maxWater",...Bn],service:[...Or,...Un,...Pr,...Nr,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...vt,...qo,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...qi],integrations:[...bi,...vi,...yi,...wi,...Lr,...Si,...fi],system:["setupComplete",...Pt,"firmwareUpdateChannel","projectVersionText","releaseChannelText","statusLedsEnabled",...tr,"webServerLogHistoryEnabled","debugLevel"]};function Ro(){return[...new Set(["setupComplete",...Qn])]}function nf(){let e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}var Zu=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","silentModeOverride","totalHeat","totalCoolingPower"],af=["strategy","controlModeLabel","hpGeneration","coolingEnableEffectiveSource"],sf=["totalPower","flowSelected"],lf=["totalHeat","totalCoolingPower"],cf=2e3,uf=250,pf=5e3,df=250;function cs(e=t.settingsGroup){let o=Pe.has(e)?e:me[0].id;return[...new Set(["setupComplete","strategy",...Je,...rf[o]||[]])]}function Xu(){let e=Pe.has(t.settingsGroup)?t.settingsGroup:me[0].id;return[...new Set(Iu[e]||Iu.installation)]}var mf=1200,gf=1800,hf=0,ff=3500;function ls(){return["setupComplete","strategy",...Je]}function bf(){let e=new Set;return zn.forEach(o=>{(o.categories||[]).forEach(r=>{(r.groups||[]).forEach(n=>{(n.rows||[]).forEach(a=>{let i=Array.isArray(a)?a[1]:"";i&&e.add(i)})})})}),[...e]}function Xr(e,o={}){let r=o.forceFast===!0,n=o.includeBulk===!0;return e==="energy"||e==="results"?[...new Set([...ls(),...e==="energy"?Zu:[],...bf(),...e==="results"?Ji:[]])]:[...new Set([...ls(),...r||!n?Ei:Ir,...e==="diagnosis"?Yi:[]])]}function us(e=t.appView){return e==="diagnosis"||e==="results"||e==="settings"&&Nt()?hf:gf}function ep(e=us()){t.nativeOpen||(t.supplementaryPrimeTimer&&window.clearTimeout(t.supplementaryPrimeTimer),t.supplementaryPrimeTimer=window.setTimeout(()=>{t.supplementaryPrimeTimer=null,of()},e))}function yf(e={}){let o=t.pendingEntitySyncOptions||{},r={...o,...e};o.forceBulk||e.forceBulk?(r.forceBulk=!0,r.forceFast=!1):(o.forceFast||e.forceFast)&&(r.forceFast=!0),t.pendingEntitySyncOptions=r}function ps(e){let o=String(T(e)??"").trim().toLowerCase();return o!==""&&o!=="unknown"&&o!=="unavailable"&&o!=="nan"}function _u(e){return ps(e)&&Number.isFinite($e(T(e)))}function ds(){return t.appView==="overview"||t.appView==="diagnosis"||t.appView==="energy"}function vf(){return yc.filter(e=>{let o=t.entities[e];return o?!String(o.uom??o.unit_of_measurement??"").trim():!R[e]?.optional})}function Wu(){return ds()?af.every(ps)&&sf.every(_u)&&lf.some(_u):!0}function wf(){return t.appView==="settings"}function Vu(){return wf()?Xu().every(e=>R[e]?.optional&&!t.entities[e]?!0:ps(e)):!0}async function Sf(){if(Wu())return;let e=Date.now()+cf;for(;!t.nativeOpen&&!Wu()&&Date.now()<e;){await new Promise(o=>window.setTimeout(o,uf));try{await L(Zu,"state")}catch{return}}}async function qf(){if(Vu())return;let e=Date.now()+pf;for(;!t.nativeOpen&&!Vu()&&Date.now()<e;){await new Promise(o=>window.setTimeout(o,df));try{await L(Xu(),"all")}catch{return}}}var Tf=8e3,tp=3e3,Bu="/openquatt/entities",Ef=900,Ku="/openquatt/service/status";function op(){return t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint?tp:Tf}function ms(e){let o=String(e||"").toLowerCase();return o.includes("failed to fetch")||o.includes("load failed")||o.includes("networkerror")||o.includes("network request failed")||o.includes("connection refused")||o.includes("connection reset")||o.includes("err_connection")||o.includes("timeout")}var Cf=300*1e3;function kf(){if(t.optionalMissingEntities)for(let e of Object.keys(t.optionalMissingEntities))delete t.optionalMissingEntities[e]}function ju(){let e=Date.now();t.lastEntitySyncAt=e,t.lastEntitySyncSuccessAt=e,t.entitySyncFailureCount=0,!!t.deviceReconnectMode&&typeof Li=="function"&&Li()&&(t.lastFastEntitySyncAt=0,t.lastBulkEntitySyncAt=0,t.lastStaticEntitySyncAt=0,t.trendHistoryRaw="",t.trendHistoryError="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=0,typeof os=="function"?os():(es(),ts(),t.webServerLogEnabled=null,t.webServerLogConnected=!1),kf())}function rp(e){if(!ms(e)){t.entitySyncFailureCount=0,Fi();return}t.entitySyncFailureCount=Number(t.entitySyncFailureCount||0)+1,t.deviceReconnectLastError=String(e||""),(t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint||t.entitySyncFailureCount>=2)&&Zt(t.updateInstallBusy||t.updateInstallPhaseHint?"ota":t.busyAction==="restartAction"?"restart":"reconnect",e)}function xf(e=Date.now(),o={}){if(o.forceProbe===!0||t.deviceReconnectMode||t.busyAction==="restartAction"||t.updateInstallBusy||t.updateInstallPhaseHint||Number(t.entitySyncFailureCount||0)>0)return!0;let r=Number(t.lastEntitySyncSuccessAt||t.lastEntitySyncAt||t.lastEntityResponseAt||0);if(!r)return!0;let n=document.hidden?Wr:Ec;return e-r>=n}async function $f(){let e=R.status||R.setupComplete;if(!e)return{ok:!0,message:""};let o=t.deviceReconnectMode?tp:Tc,r=j(e.domain,e.name);if(typeof AbortController=="function"){let n=new AbortController,a=window.setTimeout(()=>n.abort(),o);try{let i=await fetch(r,{cache:"no-store",signal:n.signal});return t.lastEntityResponseAt=Date.now(),{ok:i.ok||i.status===404,message:i.ok||i.status===404?"":`${e.name} HTTP ${i.status}`}}catch(i){return{ok:!1,message:n.signal.aborted?`${e.name} request timed out after ${o}ms`:i.message||String(i)}}finally{window.clearTimeout(a)}}try{let n=await fetch(r,{cache:"no-store"});return t.lastEntityResponseAt=Date.now(),{ok:n.ok||n.status===404,message:n.ok||n.status===404?"":`${e.name} HTTP ${n.status}`}}catch(n){return{ok:!1,message:n.message||String(n)}}}function Af(e,o=Date.now()){let r=t.optionalMissingEntities?.[e];return!R[e]?.optional||!r?!1:o-Number(r)<Cf}function Hf(e,o=Date.now()){t.optionalMissingEntities&&(t.optionalMissingEntities[e]=o)}function Mf(e){let o=R[e];return o?`${e}	${o.domain}	${o.name}`:""}function Uu(e,o){let r=new URLSearchParams;return r.set("detail",o==="all"?"all":"state"),r.set("entities",e.join(`
`)),r.toString()}function gs(e,o){let r=[],n=[],a=[],i="";return e.forEach(l=>{let p=Mf(l);if(!p)return;let u=[...a,p],c=Uu(u,o);if(a.length&&c.length>Ef){r.push({keys:n,body:i}),n=[l],a=[p],i=Uu(a,o);return}n=[...n,l],a=u,i=c}),a.length&&r.push({keys:n,body:i}),r}async function Rf(e){let o=op(),r={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body};if(typeof AbortController=="function"){let a=new AbortController,i=window.setTimeout(()=>a.abort(),o);try{let l=await fetch(Bu,{...r,signal:a.signal});if(!l.ok)throw new Error(`bulk entities HTTP ${l.status}`);return l.json()}catch(l){throw a.signal.aborted?new Error(`bulk entities request timed out after ${o}ms`):l}finally{window.clearTimeout(i)}}let n=await fetch(Bu,r);if(!n.ok)throw new Error(`bulk entities HTTP ${n.status}`);return n.json()}async function Pf(){let e=op(),o={cache:"no-store",headers:{"Cache-Control":"no-store"}};if(typeof AbortController=="function"){let n=new AbortController,a=window.setTimeout(()=>n.abort(),e);try{let i=await fetch(Ku,{...o,signal:n.signal});if(!i.ok)throw new Error(`service status HTTP ${i.status}`);return i.json()}catch(i){throw n.signal.aborted?new Error(`service status request timed out after ${e}ms`):i}finally{window.clearTimeout(a)}}let r=await fetch(Ku,o);if(!r.ok)throw new Error(`service status HTTP ${r.status}`);return r.json()}function Nf(e={}){let o=e?.entities&&typeof e.entities=="object"?e.entities:{};Object.entries(o).forEach(([r,n])=>{Dr.has(r)&&(t.optionalMissingEntities&&delete t.optionalMissingEntities[r],t.entities[r]=np(r,t.entities[r],n))})}async function Of(e){if(!e.length)return{ok:!0,message:""};try{let o=await Pf();return Nf(o),t.lastEntityResponseAt=Date.now(),{ok:!0,message:""}}catch(o){return{ok:!1,message:o.message||String(o)}}}async function L(e,o="state",r={}){let n=Date.now(),a=r.forceMissing===!0,i=e.filter(w=>a||Dr.has(w)||!Af(w,n));if(!i.length)return;let l=i.filter(w=>Dr.has(w)),p=i.filter(w=>!Dr.has(w)),c=(await Of(l)).ok?p:[...p,...l];if(!c.length){Gu(),Zr(Ot()),t.busyAction||(ju(),t.controlError="");return}let g=Number(r.concurrency),y=Number.isFinite(g)&&g>0?Math.floor(g):Mt,b=gs(c,o),v=Math.max(1,Math.min(y,Mt)),m=[];for(let w=0;w<b.length;w+=v){let S=b.slice(w,w+v),q=await Promise.allSettled(S.map(async E=>({chunk:E,payload:await Rf(E)})));m.push(...q)}m.some(w=>w.status==="fulfilled")&&(t.lastEntityResponseAt=Date.now());let f="";m.forEach(w=>{if(w.status!=="fulfilled"){let M=w.reason.message||String(w.reason);f||(f=M);return}let{chunk:S,payload:q}=w.value,E=q?.entities&&typeof q.entities=="object"?q.entities:{},k=new Set(Array.isArray(q?.missing)?q.missing:[]);S.keys.forEach(M=>{if(Object.prototype.hasOwnProperty.call(E,M)){t.optionalMissingEntities&&delete t.optionalMissingEntities[M],t.entities[M]=np(M,t.entities[M],E[M]);return}let V=R[M];V?.optional?k.has(M)&&Hf(M,n):f||(f=`${V?.name||M} ontbreekt in bulk response`)})}),Gu(),Zr(Ot()),f?(rp(f),t.deviceReconnectMode?t.controlError="":t.controlError=`Niet alle helpervelden konden worden ververst. ${f}`):t.busyAction||(ju(),t.controlError="")}function np(e,o={},r={}){let n={...o||{},...r||{}};return R[e]?.domain==="select"&&(!String(r.state??"").trim()&&String(o?.state??"").trim()&&(n.state=o.state),!String(r.value??"").trim()&&String(o?.value??"").trim()&&(n.value=o.value),!Array.isArray(r.option)&&Array.isArray(o?.option)&&(n.option=o.option),!Array.isArray(r.options)&&Array.isArray(o?.options)&&(n.options=o.options)),n}function Gu(){t.complete=Xn(),t.stage=t.complete===!0?"Gereed":t.complete===!1?"Quick Start":"Laden...",t.summary=Pc(),t.appView==="diagnosis"&&!ct()&&ut(eo(),{syncMode:"replace",forceSync:!0}),t.appView||ut(Yr()||eo(),{syncMode:"replace",forceSync:!0})}function Df(){let e=ls();return t.appView==="settings"?[...new Set([...e,...cs()])]:t.appView==="energy"||t.appView==="results"?Xr(t.appView,{forceFast:!0}):t.appView==="overview"||t.appView==="diagnosis"?Xr(t.appView,{forceFast:!0}):[...new Set(e)]}function Lf(e=[]){let o=new Set(e);return(t.appView==="settings"?cs():t.appView==="overview"||t.appView==="diagnosis"?[...new Set([...Xr(t.appView,{includeBulk:!0}),...Pt])]:t.appView==="energy"||t.appView==="results"?[...new Set([...Xr(t.appView,{forceFast:!0}),...Pt])]:[...new Set(["setupComplete","strategy",...Je])]).filter(n=>!o.has(n))}function zu(e=Date.now(),o={}){return o.forceBulk===!0?!0:e-Number(t.lastBulkEntitySyncAt||0)>=Sc}async function ce(e={}){if(t.nativeOpen||t.loadingEntities||t.draggingCurveKey||t.busyAction||t.settingsInteractionLock)return;if(t.updateInstallBusy||aa()){t.pendingEntitySyncOptions=null;return}if(t.focusedField&&t.appView!=="settings")return;if(t.entitySyncInFlight){yf(e);return}let o=Date.now();if(document.hidden&&o-Number(t.lastEntitySyncAttemptAt||0)<Wr)return;let r=t.appView,n=e.prefetchView==="overview"&&!e.forceBulk&&r==="settings",a=n?"overview":r,i=a==="overview"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,p=!l&&!n&&zu(o,e),c=o-Number(t.lastStaticEntitySyncAt||0)>=qc||t.updateInstallBusy||t.updateInstallPhaseHint?Pt:[],g=t.quickStartModalOpen&&t.currentStep==="flow-source"?lt:[],y=t.quickStartModalOpen&&t.currentStep==="thermostat-source"?So:[],b=Zi()?oo():[],v=n?[...Ei,...Je,"setupComplete",...c]:i?[...Xr(a,{forceFast:l,includeBulk:p}),...c]:r==="settings"?[...new Set([...cs(),...b,...c])]:p?["setupComplete",...c,...Je,"strategy",...wo,...Ye,...oe()?ge.map(m=>m.key):vt]:["setupComplete",...Je,"strategy",...c];t.entitySyncInFlight=!0,t.lastEntitySyncAttemptAt=o;try{let m=t.deviceReconnectMode,f=xf(o,e)?await $f():{ok:!0,message:""};if(!f.ok){rp(f.message),n||d();return}if(await L([...new Set([...v,...g,...y])],n?"state":r==="settings"?"all":"state",{concurrency:l&&i?Rt:Mt}),t.lastFastEntitySyncAt=Date.now(),p&&(a==="overview"||a==="diagnosis")&&!n&&(t.lastBulkEntitySyncAt=t.lastFastEntitySyncAt),c.length&&(t.lastStaticEntitySyncAt=t.lastFastEntitySyncAt),n)return;i&&!t.overviewMetadataHydrated&&!t.overviewMetadataHydrating&&Yu();let w=m!==t.deviceReconnectMode,S=l&&i,q=S?!1:a==="overview"||a==="diagnosis"?await Xi():!1,E=S?!1:t.appView==="results"?await sa():!1,k=S?!1:Zi()?(await Promise.all([qu(),sa({metaOnly:!0})])).some(Boolean):!1,M=S||!Bc()?!1:await $o(),V=S||!Kc()?!1:await Xt(),F=S||!Ou()?!1:await Mo(),ee=yu();if(S&&!t.nativeOpen&&ep(us(a)),w){d();return}if(q&&t.appView==="diagnosis"&&!t.root?.querySelector(".oq-overview-trends")){d();return}if(E&&t.appView==="results"&&!t.root?.querySelector(".oq-energy-history")){d();return}if(k&&t.appView==="settings"){d();return}if(M&&(t.systemModal==="login"||Nt())){d();return}if(V&&t.appView==="settings"){d();return}if(t.systemModal==="mqtt-sensors"){ca()!==t.mqttSensorsModalRenderSignature&&d();return}if(F&&t.appView==="settings"){d();return}let H=!!(t.updateModalOpen||t.systemModal||t.interfacePanelOpen);if(ee!==t.headerRenderSignature)if(H&&zi())t.headerRenderSignature=ee;else{d();return}else zi();if(t.appView==="settings"&&String(t.systemModal||"").startsWith("service-task-")){jr()!==t.settingsRenderSignature&&d();return}if(H)return;if(t.appView==="settings"){let G=jr();if(G!==t.settingsRenderSignature&&!t.focusedField){d();return}if(!wu()){t.focusedField||d();return}t.focusedField&&(t.settingsRenderSignature=G);return}if(t.appView==="diagnosis"){xu()||d();return}if(t.appView==="energy"){Eu()||d();return}if(t.appView==="results"){Cu()||d();return}ku()||d()}catch(m){n||(t.controlError=`Helperstatus kon niet worden geladen. ${m.message}`,d())}finally{t.entitySyncInFlight=!1;let m=t.pendingEntitySyncOptions;t.pendingEntitySyncOptions=null,m&&!t.nativeOpen&&window.setTimeout(()=>{ce(m)},0),l&&(a==="overview"||a==="diagnosis")&&!n&&!t.nativeOpen&&!m&&zu(Date.now())&&window.setTimeout(()=>{ce({forceBulk:!0})},ff)}}function Tt(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function Ff(){let e=String(T("hpGeneration")||"").trim();return e||""}function en(e){let o=String(e||"").trim().toLowerCase();return o==="single"||o.includes("quatt single")||o.includes("openquatt single")?"single":o==="duo"||o.includes("quatt duo")||o.includes("openquatt duo")?"duo":""}function If(){if(!Array.isArray(Zo))return"";if(Zo.some(o=>h(o)))return"duo";let e=t.optionalMissingEntities||{};return Zo.every(o=>e[o])?"single":""}function hs(e){let o=en(e);return(o==="single"||o==="duo")&&typeof t<"u"&&t&&typeof t=="object"&&(t.lastKnownInstallationTopology=o),o}function _f(){if(typeof t<"u"&&t&&typeof t=="object"){let e=String(t.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function J(){let e=en(T("installationTopology"));if(e==="single"||e==="duo")return hs(e);let o=en(Tt().installation);if(o==="single"||o==="duo")return hs(o);let r=If();return r?hs(r):_f()}function dt(){let e=J(),o=Ff();return e==="single"?o?`Quatt Single ${o}`:"Quatt Single":e==="duo"?o?`Quatt Duo ${o}`:"Quatt Duo":o?`Quatt Hybrid ${o}`:"Quatt Hybrid"}function Fe(){return"OpenQuatt"}function fs(e){let o=String(e||"").trim().toLowerCase();return o==="wifi"||o==="wi-fi"||o.includes("wifi")||o.includes("wi-fi")?"wifi":o==="eth"||o==="ethernet"||o.includes("ethernet")?"eth":""}function Xe(e=ro()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function Po(e=J()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function tn(){let e=String(T("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(Tt().hardwareProfile||e).trim().toLowerCase()}function ro(){return fs(T("connectionText")||Tt().connection)}function ap(){let e=ro();return e==="wifi"?"eth":e==="eth"?"wifi":""}function ip(){let e=J();return e==="single"?"duo":e==="duo"?"single":""}function rr(e=J(),o=ro()){let r=Po(e),n=tn();return n==="heatpump_controller_q"?`Heatpump Controller Q ${r} ${Xe(o)}`:n==="heatpump_listener"?`Heatpump Listener ${r} ${Xe(o)}`:n==="waveshare"?`Waveshare ${r} ${Xe(o)}`:`${Fe()} ${r} ${Xe(o)}`}function bs(){let e=x("timeValid"),o=String(T("timeNowHhmm")||"").trim();if(o&&o!=="invalid")return o;if(h("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function pa(){return h("timeValid")&&!x("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${bs()}`}function ua(e){if(!Number.isFinite(e)||e<0)return"\u2014";let o=Math.floor(e),r=Math.floor(o/1440),n=Math.floor(o%1440/60),a=o%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function Wf(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function Vf(e){let o=e?.state;if(o!==""&&o!==null&&o!==void 0){let a=Number(o);if(Number.isFinite(a))return a}let r=e?.value,n=Number(r);return Number.isFinite(n)?n:NaN}function nr(){let e=Vf(t.entities.uptime);if(Number.isFinite(e)&&e>=0){let n=Wf(t.entities.uptime);if(n==="d")return ua(e*1440);if(n==="h")return ua(e*60);if(n==="s")return ua(e/60)}let o=String(t.entities.uptimeReadable?.state??t.entities.uptimeReadable?.value??"").trim();if(o&&o.toLowerCase()!=="unknown")return o;let r=Number(Tt().bootedAt);return!Number.isFinite(r)||r<=0?"\u2014":ua((Date.now()-r)/6e4)}function ar(){let e=String(t.entities.ipAddress?.state??t.entities.ipAddress?.value??"").trim();if(e)return e;let o=String(Tt().ipAddress||"").trim();return o||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function no({key:e,value:o,meta:r,controlClass:n,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
    <label class="${n}">
      <input
        class="${a}"
        type="number"
        data-oq-field="${s(e)}"
        min="${r.min}"
        max="${r.max}"
        step="${r.step}"
        value="${s(o)}"
        ${i}
        ${t.loadingEntities?"disabled":""}
      >
      ${l}
    </label>
  `}function ao(e,o,r){return r?`
    <div class="oq-settings-info${t.settingsInfoOpen===e?" is-open":""}" data-oq-settings-info="${s(e)}">
      <button
        class="oq-settings-info-button"
        type="button"
        data-oq-action="toggle-settings-info"
        data-info-id="${s(e)}"
        aria-label="${s(`Uitleg bij ${o}`)}"
        aria-expanded="${t.settingsInfoOpen===e?"true":"false"}"
      >i</button>
      <div class="oq-settings-info-popover" ${t.settingsInfoOpen===e?"":"hidden"}>
        <p>${s(r)}</p>
      </div>
    </div>
  `:""}function pe(e,o,r,n,a="",i=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(o)}</h3>${ao(e,o,r)}</div><div class="oq-settings-field-control">${n}</div>${i}</article>`}function Ae(e,o,r,n,a=""){return pe(e,o,r,`<div class="oq-settings-static-value">${s(n)}</div>`,a)}function Ne({label:e,value:o,note:r="",action:n="",className:a="",dataAttribute:i="data-oq-diagnostics-row",dataValue:l=""}){let p=`oq-settings-system-row${n?" oq-settings-system-row--with-action":""}${a?` ${s(a)}`:""}`,u=i&&l?` ${i}="${s(l)}"`:"";return!n&&!r?`<div class="${p}"${u}><span class="oq-settings-system-row-label">${s(e)}</span><strong class="oq-settings-system-row-value">${s(o)}</strong></div>`:`<div class="${p}"${u}><div class="oq-settings-system-row-copy"><p class="oq-settings-system-row-label">${s(e)}</p><strong class="oq-settings-system-row-value">${s(o)}</strong>${r?`<p class="oq-settings-system-row-note">${s(r)}</p>`:""}</div>${n}</div>`}function ke(e,o={}){let r=typeof o=="number"?{decimals:o}:o||{},n=t.entities[e];if(!n)return"\u2014";let a=Number(n.value);if(!Number.isNaN(a)){let p=Number.isInteger(a)?0:Number.isFinite(r.decimals)?r.decimals:1,u=a.toFixed(Math.max(0,p));return r.trimTrailingZeros&&u.includes(".")&&(u=u.replace(/\.?0+$/,"")),`${u}${n.uom?` ${n.uom}`:""}`}let i=String(n.state??n.value??"").trim(),l=i.toLowerCase();return!i||l==="nan"||l==="unknown"||l==="unavailable"?"\u2014":i}function No(e,o="\u2014"){let r=t.entities[e];if(!r)return o;let n=String(r.state??r.value??"").trim();return!n||n==="0"||n==="\u2014"?o:n}function Lt(e,o="",r=2){let n=Number(e);return Number.isFinite(n)?`${n.toFixed(Math.max(0,r))}${o?` ${o}`:""}`:"\u2014"}function Se(e,o=2){return ke(e,{decimals:o})}function Oo(e,o="IDLE"){let r=No(e,o),n=String(r??"").trim();return!n||n==="0"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN"?o:n}function da(){let e=No("commissioningStatus",""),o=x("cm100Active"),r=String(e||"").trim().toUpperCase();return(o||r==="CM100 READY"||r==="CM100 STOPPED"||r.includes("DONE")||r.includes("FAILED")||r.includes("ABORT")||r.includes("APPLIED")||r.includes("REFUSED"))&&(t.pendingCommissioningCm100Start=!1),r&&r!=="0"?r==="IDLE"&&t.pendingCommissioningCm100Start?"CM100 REQUESTED":r:t.pendingCommissioningCm100Start?"CM100 REQUESTED":o?"CM100 READY":"IDLE"}function we(e){let o=String(e||"").trim();return o?{None:"Geen",Manual:"Handmatig",Disabled:"Niet gebruiken","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OT-thermostaat + handmatig","CIC + Manual":"CIC + handmatig","CIC + HA input + Manual":"CIC + HA-invoer + handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[Wn]:"Stooklijn",[_n]:"Power House","Dew point required":"Dauwpuntmeting vereist","Dew point":"Dauwpunt","Dew point (MQTT)":"Dauwpunt (MQTT)","Dew point (HA)":"Dauwpunt (HA)","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Fallback:"Dauwpuntsbenadering","Fallback blocked":"Dauwpuntsbenadering geblokkeerd","User responsibility":"Expliciet toegestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[o]||o:""}function ir({key:e,option:o,currentValue:r,busy:n,copy:a="",meta:i="",image:l="",imageAlt:p="",infoTitle:u="",infoCopy:c="",infoId:g=""}){let y=o===r,b=`
    <button
      class="oq-settings-choice-card${y?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${c?" oq-settings-choice-card--has-info":""}"
      type="button"
      data-oq-action="select-settings-option"
      data-select-key="${s(e)}"
      data-select-option="${s(o)}"
      aria-pressed="${y?"true":"false"}"
      ${n?"disabled":""}
    >
      <span class="oq-settings-choice-head">
        <span class="oq-settings-choice-title">${s(we(o))}</span>
        ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
      </span>
      ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(p||we(o))}" loading="lazy" decoding="async"></span>`:""}
      ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
    </button>
  `;if(!c)return b;let v=u||we(o),m=g||`${e}-${o}`;return`
    <article class="oq-settings-choice-card-shell${y?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
      ${b}
      ${ao(m,v,c)}
    </article>
  `}function Ft(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function io(e,o,r,n=""){if(!h(e))return"";let a=t.entities[e]||{},i=String(T(e)||""),l=Ft(a);return pe(e,o,r,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${t.loadingEntities?"disabled":""}>${l.map(p=>`<option value="${s(p)}" ${p===i?"selected":""}>${s(we(p))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,n)}function Bf(e,o,r="Aan",n="Uit"){return`<span class="oq-settings-toggle-state${o?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(r)}" data-off-label="${s(n)}">${s(o?r:n)}</span>`}function It(e,o,r,n,a="Aan",i="Uit",l=!0){let p=r?a:i,u=r?"off":"on";return`
    <div class="oq-settings-compact-switch-row">
      ${l?Bf(e,r,a,i):""}
      <button
        class="oq-settings-toggle-switch${r?" is-on":""}"
        type="button"
        role="switch"
        data-oq-action="toggle-overview-control"
        data-control-key="${s(e)}"
        data-control-state="${s(u)}"
        data-switch-title="${s(o)}"
        data-on-label="${s(a)}"
        data-off-label="${s(i)}"
        aria-checked="${r?"true":"false"}"
        aria-label="${s(`${o}: ${p}`)}"
        ${n?"disabled":""}
      >
        <span class="oq-settings-toggle-switch-track" aria-hidden="true">
          <span class="oq-settings-toggle-switch-knob"></span>
        </span>
      </button>
    </div>
  `}function ys(e,o,r="",n=""){let a=o?r:n;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(r)}" data-off-copy="${s(n)}">${s(a)}</p>`:""}function sp(e,o,r,n="",a="",i=""){if(!h(e))return"";let l=!!T(e),p=t.loadingEntities||t.busyAction===`switch-${e}`;return pe(e,o,r,`
      <div class="oq-settings-compact-switch-field">
        ${It(e,o,l,p)}
        ${ys(e,l,n,a)}
      </div>
    `,i)}function lp(e,o,r,n,a=""){if(!h(e))return"";let i=!!T(e),l=t.loadingEntities||t.busyAction===`switch-${e}`;return pe(e,o,r,`
      <div class="oq-settings-compact-switch-field">
        ${It(e,o,i,l)}
        ${n?`<p>${s(n)}</p>`:""}
      </div>
    `,a)}function ma(e,o,r){if(!h(e))return"";let n=!!T(e),a=t.loadingEntities||t.busyAction===`switch-${e}`;return`
    <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
      <div class="oq-settings-integration-card-head">
        <h4>${s(o)}</h4>
      </div>
      <p>${s(r)}</p>
      ${It(e,o,n,a)}
    </article>
  `}function je(e,o,r="oq-helper-button oq-helper-button--ghost",n=!1){return`
    <button
      class="${r}"
      type="button"
      data-oq-action="press-named-button"
      data-oq-button-key="${s(e)}"
      ${n?"disabled":""}
    >
      ${s(o)}
    </button>
  `}function Do({active:e,startKey:o,stopKey:r,startLabel:n,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:p=!1,stopDisabled:u=!1}){return je(e?r:o,e?a:n,e?l:i,e?u:p)}function cp(e,o,r,n,a=""){if(!h(e))return"";let i=t.entities[e]||{},l=String(T(e)||""),p=Ft(i),u=t.loadingEntities||t.busyAction===`save-${e}`,c=`
    <div class="oq-settings-choice-grid">
      ${p.map(g=>{let y=n[g]||"",b=typeof y=="string"?y:y.copy||"",v=typeof y=="string"?"":y.image||"",m=typeof y=="string"?"":y.alt||"";return ir({key:e,option:g,currentValue:l,busy:u,copy:b,image:v,imageAlt:m})}).join("")}
    </div>
  `;return pe(e,o,r,c,a)}function ae(e,o,r,n="",a={}){if(!h(e))return"";let i=Oe(e),l=Ee(e),p=a.unitOverride||i.uom||"",u=a.showUnit!==!1&&!!p,c=u&&a.unitMode!=="outside",g=no({key:e,value:l,meta:i,controlClass:`oq-helper-control${u&&!c?" oq-helper-control--split":""}${c?" oq-helper-control--suffix":""}`,unitMarkup:u?c?`<span class="oq-helper-unit-chip">${s(p)}</span>`:`<span class="oq-helper-unit">${s(p)}</span>`:""});return pe(e,o,r,g,n,a.footerMarkup||"")}function et(e,o,r,n="",a={}){if(!h(e))return"";let i=Oe(e),l=he(e,T(e)),p=a.minLabel||`${i.min}${i.uom||""}`,u=a.maxLabel||`${i.max}${i.uom||""}`,c=a.valueLabel||K(e,l);return pe(e,o,r,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(p)}</span><strong>${s(c)}</strong><span>${s(u)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${t.loadingEntities?"disabled":""}></label>`,n)}function vs(e,o,r,n={}){if(!h(e))return"";let a=Oe(e),i=Ee(e),l=n.compact===!0,p=n.embedded===!0,u=n.infoId||e,c=n.showCopy!==!1;return`
    <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${p?" oq-settings-mini-field--embedded":""}">
      <div class="oq-settings-mini-copy">
        <div class="oq-settings-mini-copy-head">
          <h5>${s(o)}</h5>
          ${r?ao(u,o,r):""}
        </div>
        ${r&&c?`<p>${s(r)}</p>`:""}
      </div>
      ${no({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
    </article>
  `}function ws(e,o,r,n=""){if(!h(e))return"";let a=Vr(T(e));return pe(e,o,r,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${t.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,n||"oq-settings-field--time")}function Z(e,o,r,n,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(o)}</h3><p>${s(r)}</p></div>${n}</section>`}var up=250;function pp(){if(typeof window>"u")return[];let e=window.__OQ_DEV_WEBSERVER_LOGS__,o=typeof e=="function"?e():e;return Array.isArray(o)?o.map(r=>String(r||"")).filter(r=>r.trim()!==""):[]}function sr(){return typeof window>"u"?!1:pp().length>0}function Kf(){return`${De()}/events`}function jf(){return`${De()}/openquatt/logs/recent`}function ga(){let e=t.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;let o=String(e.state??e.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function ha(){return t.nativeOpen?"Niet beschikbaar":sr()?"Voorbeeld":t.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function Uf(e){let o=Math.max(0,Math.floor(Number(e)/1e3)),r=Math.floor(o/3600),n=Math.floor(o%3600/60),a=o%60;return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function dp(e){let o=Number(e)||0;if(o>9466848e5){let r=e instanceof Date?e:new Date(o),n={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(r)}catch{return r.toLocaleString("nl-NL",n)}}return Uf(o)}function Gf(e){let o=Number(e)||0;if(o>9466848e5)return new Date(o).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let r=Math.max(0,Math.floor(o/1e3)),n=Math.floor(r/3600),a=Math.floor(r%3600/60),i=r%60;return`Sinds opstart: ${n}u ${a}m ${i}s`}function zf(){return t.nativeOpen?"Niet beschikbaar":sr()?ga()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":ga()?"Buffer aan":"Buffer uit"}function Qf(){return ga()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function Ss(){return t.entities?.debugLevel||null}function mp(e=Ss()){let o=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return o.length?o:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function Yf(e=Ss()){let o=String(e?.value??e?.state??"").trim(),r=mp(e);return r.includes(o)?o:r.includes("INFO")?"INFO":r[0]||""}function gp(e,o=null){if(!e||!o)return!1;let r=Number(e.seq),n=Number(o.seq);if(Number.isFinite(r)&&Number.isFinite(n)&&r===n)return!0;let a=String(e.raw??e.text??"").trim(),i=String(o.raw??o.text??"").trim();if(!a||a!==i)return!1;let l=Number(e.receivedAt??e.ts??0),p=Number(o.receivedAt??o.ts??0);return Math.abs(l-p)<=2e3}function Jf(e,o){let r=Number(e.receivedAt??e.ts??0),n=Number(o.receivedAt??o.ts??0);if(r!==n)return r-n;let a=Number(e.seq??0),i=Number(o.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(o.raw??""))}function hp(e,{prepend:o=!1}={}){if(!Array.isArray(e)||e.length===0)return;let r=o?[...e,...t.webServerLogEntries]:[...t.webServerLogEntries,...e];r.sort(Jf);let n=[];for(let a of r){let i=n[n.length-1]||null;gp(a,i)||n.push(a)}t.webServerLogEntries=n.slice(-up)}function qs(e,o={}){let r=fb(e).trimEnd(),n=Number(o.receivedAt),a=Number(o.seq);return{raw:e,text:r,tone:bb(e),receivedAt:Number.isFinite(n)?n:Date.now(),seq:Number.isFinite(a)?a:void 0}}function Zf(e,o){let n=Math.max(0,o-e-1)*9e4;return Date.now()-n}function Xf(){let e=pp(),o=e.length;return e.map((r,n)=>qs(r,{receivedAt:Zf(n,o),seq:n+1}))}function eb(){let e=fa();e&&(e.scrollTop=e.scrollHeight)}function _t(){let e=fa();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ba(e)}:null}function tb(e){if(!e)return;let o=fa();if(!o)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}let r=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,r)}function Wt(e,o=!0){if(!e)return;let r=Number(t.webServerLogScrollRestoreToken||0)+1;t.webServerLogScrollRestoreToken=r;let n=()=>{t.webServerLogScrollRestoreToken!==r||t.systemModal!=="webserver-logs"||tb(e)};if(o){window.requestAnimationFrame(n);return}n()}function fp(){return t.root?t.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function bp(){let e=fp();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ba(e)}:null}function ob(e){if(!e)return;let o=fp();if(!o)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}let r=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,r)}function Ts(e,o=!0){if(!e)return;let r=Number(t.cm100CommissioningScrollRestoreToken||0)+1;t.cm100CommissioningScrollRestoreToken=r;let n=()=>{t.cm100CommissioningScrollRestoreToken!==r||t.systemModal!=="cm100-commissioning"||ob(e)};if(o){window.requestAnimationFrame(n);return}n()}function yp(){return t.root?t.root.querySelector("[data-oq-service-task-scroller]"):null}function vp(){let e=yp();return e?{scrollTop:e.scrollTop}:null}function rb(e){if(!e)return;let o=yp();o&&(o.scrollTop=Math.max(0,e.scrollTop))}function Es(e,o=!0){if(!e)return;let r=Number(t.serviceTaskModalScrollRestoreToken||0)+1;t.serviceTaskModalScrollRestoreToken=r;let n=()=>{t.serviceTaskModalScrollRestoreToken!==r||!String(t.systemModal||"").startsWith("service-task-")||rb(e)};if(o){window.requestAnimationFrame(n);return}n()}function wp(){return t.root?t.root.querySelector("[data-oq-history-storage-scroller]"):null}function Sp(){let e=wp();return e?{scrollTop:e.scrollTop}:null}function nb(e){if(!e)return;let o=wp();o&&(o.scrollTop=Math.max(0,e.scrollTop))}function Cs(e,o=!0){if(!e)return;let r=Number(t.historyStorageModalScrollRestoreToken||0)+1;t.historyStorageModalScrollRestoreToken=r;let n=()=>{t.historyStorageModalScrollRestoreToken!==r||t.systemModal!=="history-storage"||nb(e)};if(o){window.requestAnimationFrame(n);return}n()}async function lr(e={}){if(t.nativeOpen||typeof window.fetch!="function")return;let o=e.scrollState||_t(),r=Number(t.webServerLogHistoryRequestToken||0)+1;t.webServerLogHistoryRequestToken=r,t.webServerLogHistoryLoading=!0,t.webServerLogHistoryError="";try{let n=await window.fetch(jf(),{headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.json();if(t.systemModal!=="webserver-logs"||t.webServerLogHistoryRequestToken!==r)return;let i=ib(a);t.webServerLogHistoryLoaded=!0,i.length>0&&(hp(i,{prepend:!0}),t.webServerLogRecentTail=i.slice(-4).map(l=>String(l.raw??l.text??"")),t.webServerLogRecentAnchorAt=Date.now())}catch(n){t.systemModal==="webserver-logs"&&t.webServerLogHistoryRequestToken===r&&(t.webServerLogHistoryError=n instanceof Error?n.message:"Recente logs konden niet worden opgehaald.")}finally{t.webServerLogHistoryRequestToken===r&&(t.webServerLogHistoryLoading=!1),t.systemModal==="webserver-logs"&&t.webServerLogHistoryRequestToken===r&&(d(),Wt(o))}}function ab(e,o=0){if(!e||typeof e!="object")return null;let r=String(e.raw??"").trim()||String(e.message??"").trim();return r?qs(r,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??o)}):null}function ib(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((r,n)=>ab(r,n+1)).filter(r=>r!==null)}function sb(e){if(!e||!Array.isArray(t.webServerLogRecentTail)||t.webServerLogRecentTail.length===0||Date.now()-Number(t.webServerLogRecentAnchorAt||0)>2500)return!1;let r=String(e.raw??e.text??"").trim();return r?t.webServerLogRecentTail.includes(r):!1}function lb(e,o=t.webServerLogEntries){return!e||!Array.isArray(o)||o.length===0?!1:o.some(r=>gp(e,r))}function qp(){sr()&&t.webServerLogEntries.length===0&&(t.webServerLogEntries=Xf()),t.webServerLogCopyMessage="",t.webServerLogCopyError="",t.systemModal="webserver-logs",d(),L(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(t.systemModal!=="webserver-logs")return;let e=_t();d(),Wt(e)}),eb(),(!t.webServerLogHistoryLoaded||t.webServerLogEntries.length===0)&&lr()}function Lo(){t.webServerLogEntries=[],t.webServerLogError="",t.webServerLogHistoryError="",t.webServerLogHistoryLoading=!1,t.webServerLogHistoryLoaded=!1,t.webServerLogScrollRestoreToken=Number(t.webServerLogScrollRestoreToken||0)+1,t.webServerLogCopyMessage="",t.webServerLogCopyError="",t.webServerLogHistoryRequestToken+=1,t.webServerLogRecentTail=[],t.webServerLogRecentAnchorAt=0,t.systemModal==="webserver-logs"&&d()}function cb(){let e=_t();Et(),t.webServerLogEnabled=null,t.webServerLogConnected=!1,Lo(),t.systemModal==="webserver-logs"&&lr({scrollState:e})}function ks(){if(sr()){Et();return}if(!(t.mounted&&!t.nativeOpen&&t.systemModal==="webserver-logs")){Et();return}if(t.webServerLogEnabled===!1){Et();return}t.webServerLogSource||ub()}function ub(){if(sr()){t.webServerLogEnabled=!0,t.webServerLogConnected=!1,t.webServerLogError="",d();return}if(typeof window.EventSource!="function"){t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError="Deze browser ondersteunt geen live logstream.",d();return}try{let e=new window.EventSource(Kf());t.webServerLogSource=e,e.addEventListener("open",pb),e.addEventListener("ping",db),e.addEventListener("log",gb),e.onerror=mb}catch(e){t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",Et(),d()}}function Et(){let e=t.webServerLogSource;if(e)try{e.close()}catch{}t.webServerLogSource=null,t.webServerLogConnected=!1}function pb(){if(!t.webServerLogSource||t.nativeOpen)return;let e=t.systemModal==="webserver-logs"?_t():null;t.webServerLogEnabled=!0,t.webServerLogConnected=!0,t.webServerLogError="",d(),Wt(e)}$u({clearOutput:Lo,closeStream:Et,resetRecoveryState:cb});function db(){if(!t.webServerLogSource||t.nativeOpen)return;let e=t.systemModal==="webserver-logs"?_t():null;t.webServerLogEnabled=!0,t.webServerLogConnected||(t.webServerLogConnected=!0,t.webServerLogError="",d(),Wt(e))}function mb(){if(!t.webServerLogSource)return;let e=t.systemModal==="webserver-logs"?_t():null;t.webServerLogEnabled=!1,t.webServerLogConnected=!1,t.webServerLogError="De live logstream kon niet worden geopend.",Et(),d(),Wt(e)}function gb(e){if(!t.webServerLogSource||!e||typeof e.data!="string")return;let o=_t(),r=hb(e.data);if(!r)return;let n=r.split(/\r?\n/).filter(u=>u.trim()!=="");if(n.length===0)return;let i=n.map(u=>qs(u)).filter(u=>!sb(u)&&!lb(u));if(i.length===0)return;hp(i);let l=vb(),p=fa();yb(l),wb(i,l),t.webServerLogEnabled=!0,p&&o&&Wt(o,!1)}function hb(e){let o=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!o)return"";let r=o.trim();if(r.startsWith("{")&&r.endsWith("}")||r.startsWith("[")&&r.endsWith("]"))try{let n=JSON.parse(r),a=typeof n=="string"?n:n?.message??n?.msg??n?.text??n?.data??n?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return o}function fb(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function bb(e){let o=String(e??""),r=Array.from(o.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=r.length-1;i>=0;i-=1){let l=r[i][1].split(";").map(p=>Number(p)).filter(p=>Number.isFinite(p));for(let p=l.length-1;p>=0;p-=1){let u=l[p];if(u===31||u===91)return"error";if(u===33||u===93)return"warning";if(u===32||u===92)return"info";if(u===36||u===96||u===34||u===35)return"debug";if(u===37||u===90||u===38||u===97)return"verbose"}}let n=o.match(/\[(E|W|I|D|V|VV)\]/i);if(!n)return"plain";let a=n[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function yb(e){for(;t.webServerLogEntries.length>up;)t.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function vb(){return t.root?t.root.querySelector("[data-oq-webserver-log-output]"):null}function fa(){return t.root?t.root.querySelector("[data-oq-webserver-log-scroller]"):null}function ba(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function wb(e,o){if(!(!o||e.length===0)){o.dataset.webServerLogEmpty==="true"&&(o.dataset.webServerLogEmpty="false",o.innerHTML="");for(let r of e)o.insertAdjacentHTML("beforeend",Tp(r))}}function Tp(e){let o=dp(e.receivedAt),r=Gf(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(r)}">${s(o)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function Sb(e=t.webServerLogEntries){return e.length?e.map(o=>Tp(o)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function qb(){let e=[];return t.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),t.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(t.webServerLogCopyMessage)}</span>
      </div>
    `),t.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(t.webServerLogCopyError)}</p>`),t.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(t.webServerLogHistoryError)}</p>`),t.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(t.webServerLogError)}</p>`),e.length?e.join(""):""}function Tb(){let e=ga(),o=t.loadingEntities||t.busyAction==="switch-webServerLogHistoryEnabled",r=zf(),n=Qf(),a=Eb();return`
    <div class="oq-webserver-log-history-shell">
      ${Ne({dataValue:"webserverLogHistory",label:"RAM log history",value:r,note:n,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="webServerLogHistoryEnabled"
          data-control-state="${e?"off":"on"}"
          aria-pressed="${e?"true":"false"}"
          ${o?"disabled":""}
        >
          ${e?"Uitschakelen":"Inschakelen"}
        </button>`})}
      ${a}
    </div>
  `}function Eb(){let e=Ss();if(!e)return"";let o=mp(e),r=Yf(e),n=t.loadingEntities||t.busyAction==="save-debugLevel";return`
    ${Ne({dataValue:"debugLevel",label:"Logger level",value:r||"Onbekend",note:"Past het runtime logniveau aan voor nieuwe firmwaremeldingen.",action:`<label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${n?"disabled":""}>
          ${o.map(a=>`<option value="${s(a)}" ${a===r?"selected":""}>${s(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>`})}
  `}function Cb(){return t.webServerLogEntries.map(e=>{let o=String(e.raw??e.text??"").trimEnd();return o.trim()?`${dp(e.receivedAt)} ${o}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function Ep(){let e=Cb();if(t.webServerLogCopyMessage="",t.webServerLogCopyError="",!e){t.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",d();return}try{if(!await Yt(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");t.webServerLogCopyMessage=`${t.webServerLogEntries.length} logregel${t.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(o){t.webServerLogCopyError=o instanceof Error?o.message:"Kopi\xEBren naar het klembord is niet gelukt."}t.systemModal==="webserver-logs"&&d()}function Cp(){let e=sr();return`
    <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">OpenQuatt log</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde."}</p>
        ${Tb()}
        ${qb()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${t.webServerLogEntries.length===0?"true":"false"}">
            ${Sb()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${t.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function kb(){let e=t.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function $p(e){return kb().includes(e)}function va(){let e=tn(),o=J(),r=ro(),n=ap();return e!=="heatpump_controller_q"||o!=="single"&&o!=="duo"||r!=="wifi"&&r!=="eth"||!n?null:{canSwitch:h("firmwareUpdateTarget")&&$p("alternate connection")&&h("installFirmwareUpdateTarget"),currentConnection:r,targetConnection:n,currentLabel:Xe(r),targetLabel:Xe(n),currentBuildLabel:rr(o,r),targetBuildLabel:rr(o,n)}}function wa(){let e=tn(),o=J(),r=ip(),n=ro(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||o!=="single"&&o!=="duo"||!r||!a.includes(n)?null:{canSwitch:h("firmwareUpdateTarget")&&$p("alternate topology")&&h("installFirmwareUpdateTarget"),currentTopology:o,targetTopology:r,currentConnection:n,targetConnection:n,currentLabel:Po(o),targetLabel:Po(r),currentBuildLabel:rr(o,n),targetBuildLabel:rr(r,n)}}function Fo(e=t.updateTestFirmwarePr){let o=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(o)?o:""}function ur(){let e=tn(),o=J(),r=ro(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||o!=="single"&&o!=="duo"||!a.connections.includes(r))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};let i=`openquatt-${a.slug}-${o}-${r}`,l=o==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${Xe(r)}`}}function rn(e=Fo(),o=ur()){if(!e||!o.available)return null;let n=`${`https://github.com/jeroen85/OpenQuatt/releases/download/pr-${e}`}/${o.otaFileName}`;return{otaUrl:n,md5Url:`${n}.md5`,releaseApiUrl:`https://api.github.com/repos/jeroen85/OpenQuatt/releases/tags/pr-${e}`}}function lo(){if(ot())return"Controleren";let e=Vt();if(e)return e.phaseLabel;if(As())return"Bijgewerkt";if(cr())return"Bezig";if(Io())return"Beschikbaar";let o=Hp();if(o!==null&&o<=0)return"Actueel";let r=Tt();return typeof r.updateLabel=="string"&&r.updateLabel.trim()?r.updateLabel.trim():r.updateAvailable===!0?"Beschikbaar":r.updateAvailable===!1||Ms()?"Actueel":fe()?"Nog niet gecontroleerd":"\u2014"}function fe(){return t.entities.firmwareUpdate||null}function Sa(){let e=fe();return e?String(e.state??e.value??"").trim().toLowerCase():""}function xb(){let e=t.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function qa(){return xb().toLowerCase()}function Ap(){let e=t.entities.firmwareUpdateProgress;if(!e)return Number.NaN;let o=Number(e.value??e.state);return Number.isNaN(o)?Number.NaN:Math.max(0,Math.min(100,o))}function xs(){let e=String(t.updateInstallTargetVersion||"").trim(),o=ie();return!e||!o?!1:nn(o,e)>=0}function $b(e=fe()||{}){let o=co(e),r=ie(e);return!o||!r?!1:nn(r,o)>=0}function $s(){return(xs()||$b())&&!ot()&&!on()&&!Io()}function As(){return(t.updateInstallCompleted||$s())&&!ot()&&!Vt()&&!Io()}function pr(){t.updateInstallBusy=!1,t.updateInstallTargetVersion="",t.updateInstallPhaseHint="",t.updateInstallProgressHint=Number.NaN,t.updateInstallMode="",t.updateInstallTargetConnection="",t.updateInstallTargetTopology="",Ob()}function He(){t.updateManualUploadFile=null,t.updateManualUploadFileName="",t.updateManualUploadError=""}function tt(e={}){e.clearPr&&(t.updateTestFirmwarePr=""),t.updateTestFirmwareConfirmed=!1,t.updateTestFirmwareError="",t.updateTestFirmwareBuild=null}function Ab(){let e=qa(),o=Ap();if(e==="starting"||e==="uploading"||e==="rebooting"){t.updateInstallPhaseHint=e,Number.isNaN(o)||(t.updateInstallProgressHint=e==="rebooting"?Math.max(o,100):o);return}if(t.updateInstallBusy){if(xs()){t.updateInstallPhaseHint="rebooting",t.updateInstallProgressHint=100;return}t.controlNotice.includes("opnieuw is opgestart")&&(t.updateInstallPhaseHint="rebooting",t.updateInstallProgressHint=100)}}function on(){let e=qa();return e==="starting"||e==="uploading"||e==="rebooting"}function Vt(){Ab();let e=qa(),o=e==="starting"||e==="uploading"||e==="rebooting",r=o?e:t.updateInstallPhaseHint,n=Ap(),a=Number.isNaN(t.updateInstallProgressHint)?0:Math.round(t.updateInstallProgressHint),i=o&&!Number.isNaN(n)?Math.round(n):a;return!on()&&!t.updateInstallBusy?null:r==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:t.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":t.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":t.updateInstallMode==="topology-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:r==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:t.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${Fe()} gedownload en ge\xEFnstalleerd.`:t.updateInstallMode==="connection-switch"?`De ${Xe(t.updateInstallTargetConnection)}-build wordt nu naar ${Fe()} verzonden.`:t.updateInstallMode==="topology-switch"?`De ${rr(t.updateInstallTargetTopology,t.updateInstallTargetConnection)}-build wordt nu naar ${Fe()} verzonden.`:`Firmware wordt nu naar ${Fe()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:t.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${Fe()}.`:t.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${Xe(t.updateInstallTargetConnection)} is gestart.`:t.updateInstallMode==="topology-switch"?`Opstellingswissel naar ${Po(t.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${Fe()}.`}}function co(e=fe()||{}){let o=String(e.latest_version||"").trim();if(o)return o;let r=String(e.value||"").trim(),n=String(e.current_version||"").trim();return r&&r!==n&&/^v/i.test(r)?r:""}function ie(e=fe()||{}){let o=String(t.entities.projectVersionText?.state||t.entities.projectVersionText?.value||"").trim();return o||String(e.current_version||"").trim()}function Hb(e=fe()||{}){let o=ie(e),r=String(e.current_version||"").trim();return!o||!r||o===r?!1:nn(o,r)>0}function Hs(e=fe()||{},o=so()){let r=String(o||"").trim().toLowerCase(),n=String(e.release_url||"").trim().toLowerCase(),a=co(e).toLowerCase();if(!r||r==="\u2014")return!0;if(r==="dev"){if(n){if(n.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(r==="main"){if(n){if(n.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function kp(e){let r=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return r?{major:Number(r[1]),minor:Number(r[2]),patch:Number(r[3]),prereleaseTag:r[4]||"",prereleaseNumber:r[5]?Number(r[5]):null}:null}function nn(e,o){let r=kp(e),n=kp(o);if(!r||!n)return 0;if(r.major!==n.major)return r.major>n.major?1:-1;if(r.minor!==n.minor)return r.minor>n.minor?1:-1;if(r.patch!==n.patch)return r.patch>n.patch?1:-1;let a=!r.prereleaseTag,i=!n.prereleaseTag;return a!==i?a?1:-1:r.prereleaseTag!==n.prereleaseTag?r.prereleaseTag>n.prereleaseTag?1:-1:r.prereleaseNumber!==n.prereleaseNumber?(r.prereleaseNumber||0)>(n.prereleaseNumber||0)?1:-1:0}function cr(){if($s())return!1;let e=Sa();return t.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function ot(){let e=Sa();return t.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function Io(){let e=Sa();if(!Hs())return!1;let o=Hp();return o!==null?o>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:Tt().updateAvailable===!0}function Ms(){let e=Sa();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||Hb()}function Rs(){let e=fe()||{},o=ie(e)||"\u2014",r=Hs(e)?co(e):"",n=r?nn(r,o):null;return!ot()&&n!==null&&n<=0&&(r=""),{current:o,latest:r||"\u2014"}}function Hp(){let{current:e,latest:o}=Rs();return e==="\u2014"||o==="\u2014"?null:nn(o,e)}function Mp(e=so()){let o=String(e||"").trim().toLowerCase();return mi[o]||mi.main}function Mb(){let e=String((fe()||{}).release_url||"").trim(),o=Mp();return!e||o.includes("/dev-latest")&&!e.includes("/dev-latest")||!o.includes("/dev-latest")&&e.includes("/dev-latest")?o:e}function Rb(){return Fe()}function so(){return String(T("firmwareUpdateChannel")||t.entities.releaseChannelText?.state||t.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function Pb(){return Rs().latest!=="\u2014"}function xp(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function Nb(e,o=fe()||{}){let r=xp(e);return r?xp(`${o.title||""} ${o.summary||""}`).includes(r):!0}function Rp(e){return new Promise(o=>window.setTimeout(o,e))}function an(e=Co){let r=Date.now()+e;t.firmwareOtaQuietUntil=Math.max(Number(t.firmwareOtaQuietUntil||0),r),t.pendingEntitySyncOptions=null,au(),typeof Et=="function"&&Et(),t.firmwareOtaQuietTimer&&window.clearTimeout(t.firmwareOtaQuietTimer),t.firmwareOtaQuietTimer=window.setTimeout(()=>{t.firmwareOtaQuietTimer=null,t.firmwareOtaQuietUntil=0,!t.updateInstallBusy&&!t.nativeOpen&&_i()},e)}function Ob(){t.firmwareOtaQuietTimer&&(window.clearTimeout(t.firmwareOtaQuietTimer),t.firmwareOtaQuietTimer=null),t.firmwareOtaQuietUntil=0,t.nativeOpen||_i()}function Pp(){return t.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${s(Ic())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${s(_c())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${s(Lc())}</strong>
              <span>${s(Fc())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function sn(e=so()){let o=fe()||{},r=ie(o);t.entities.firmwareUpdate={...o,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:Mp(e),current_version:r}}async function ln(e={}){let o=String(e.expectedBuildLabel||"").trim();for(let r=0;r<6;r+=1){await Rp(r===0?900:1200),await L(Fr,"all",{forceMissing:!0});let n=Hs(),a=!o||Nb(o),i=Pb(),l=ot(),p=lo();if(n&&a&&(i||!l&&p!=="Nog niet gecontroleerd"))return!0}return!1}async function dr(e={}){let o=!1,r=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,n=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await Rp(a===0?r:n);try{if(await L(Fr,"all",{forceMissing:!0}),qa()==="rebooting"&&Zt("ota"),d(),t.updateInstallMode==="connection-switch"){let i=fs(t.updateInstallTargetConnection);if(i&&ro()===i&&!on()&&!cr())return!0}else if(t.updateInstallMode==="topology-switch"){let i=en(t.updateInstallTargetTopology);if(i&&J()===i&&!on()&&!cr())return!0}else if(xs()||$s()||Ms()&&!on()&&!cr())return!0}catch{o||(t.controlNotice="Wachten tot het device opnieuw is opgestart...",d(),o=!0)}}return!1}function Db(){let e=so(),o=Vt();if(o)return o.copy;if(As()){let r=t.updateInstallCompletedVersion||ie()||so();return`${Fe()} draait nu op ${r}.`}return cr()?`OTA-update wordt voorbereid voor ${Fe()}. Het device kan kort herstarten.`:ot()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:Io()?"Er staat een nieuwere firmware klaar.":Ms()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function Np(){return!!(t.firmwareAdvancedOpen||t.firmwareConnectionSwitchOpen||t.firmwareTopologySwitchOpen||t.updateManualUploadOpen||t.updateTestFirmwareOpen)}function ya(e,o,r,n,a=!1){return`
      <button
        class="oq-firmware-advanced-option${n?" is-active":""}"
        type="button"
        data-oq-action="${s(e)}"
        aria-pressed="${n?"true":"false"}"
        ${a?"disabled":""}
      >
        <strong>${s(o)}</strong>
        <span>${s(r)}</span>
      </button>
    `}function Lb(e,o,r,n){if(!Np())return"";let i=!!(Vt()||t.updateInstallBusy||ot());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${i?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?ya("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${o.targetLabel}`,t.firmwareConnectionSwitchOpen,i):""}
          ${r?ya("toggle-firmware-topology-switch","Opstelling wisselen",`Naar ${n.targetLabel}`,t.firmwareTopologySwitchOpen,i):""}
          ${ya("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",t.updateManualUploadOpen,i)}
          ${ya("toggle-firmware-test","Testfirmware","PR-release installeren",t.updateTestFirmwareOpen,i)}
        </div>
        ${Fb()}
        ${Ib()}
        ${Wb()}
        ${_b()}
      </div>
    `}function Fb(){let e=va();if(!e||!t.firmwareConnectionSwitchOpen)return"";let r=!!(Vt()||t.updateInstallBusy||ot()),n=!!t.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",p=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(so())}-build voor de andere netwerkverbinding.</span>
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
        ${p}
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
    `}function Ib(){let e=wa();if(!e||!t.firmwareTopologySwitchOpen)return"";let r=!!(Vt()||t.updateInstallBusy||ot()),n=!!t.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",p=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s(so())}-build voor de andere Single/Duo-opstelling.</span>
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
        ${p}
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
    `}function _b(){if(!t.updateTestFirmwareOpen)return"";let o=!!(Vt()||t.updateInstallBusy||ot()),r=Fo(),n=ur(),a=rn(r,n),i=!!(n.available&&h("firmwareTestOtaUrl")&&h("firmwareTestOtaMd5Url")&&h("installFirmwareTestOta")),l=!!(r&&i),p=t.updateTestFirmwareBuild||null,u=n.available?n.label:n.error,c=a?n.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
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
              value="${s(t.updateTestFirmwarePr||"")}"
              data-oq-firmware-test-pr="true"
              ${o?"disabled":""}
            >
          </label>
          <div class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">Doelbuild</span>
            <strong class="oq-helper-modal-value">${s(u)}</strong>
          </div>
          <div class="oq-firmware-advanced-card oq-firmware-test-card--asset">
            <span class="oq-helper-modal-label">OTA-bestand</span>
            <strong class="oq-helper-modal-value" data-oq-firmware-test-asset-note="true">${s(c)}</strong>
          </div>
          ${p?`
            <div class="oq-firmware-advanced-card oq-firmware-test-card--build" data-oq-firmware-test-build-row="true">
              <span class="oq-helper-modal-label">Build</span>
              <strong class="oq-helper-modal-value">${s(p)}</strong>
            </div>
          `:""}
        </div>
        <p class="oq-helper-modal-note oq-firmware-test-note">De webapp zet alleen de URL klaar; het device downloadt en flasht daarna zelf via dezelfde OTA-backend.</p>
        ${i?"":`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.available?"Deze firmware mist de testfirmware-bediening. Installeer eerst een nieuwere build.":n.error)}</p>`}
        ${t.updateTestFirmwareError?`<p class="oq-helper-modal-note oq-helper-modal-note--error" data-oq-firmware-test-runtime-error="true">${s(t.updateTestFirmwareError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <label class="oq-helper-modal-check oq-firmware-advanced-check">
            <input type="checkbox" data-oq-firmware-test-confirm="true" ${t.updateTestFirmwareConfirmed?"checked":""} ${o||!i?"disabled":""}>
            <span>Ik begrijp dat dit testfirmware uit een PR is.</span>
          </label>
          <button class="oq-helper-button" type="button" data-oq-action="install-firmware-test" ${o||!l||!t.updateTestFirmwareConfirmed?"disabled":""}>PR-firmware installeren</button>
        </div>
      </div>
    `}function Wb(){if(!t.updateManualUploadOpen)return"";let o=!!(Vt()||t.updateInstallBusy||ot()),r=String(t.updateManualUploadFileName||t.updateManualUploadFile?.name||"").trim();return`
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
            ${o?"disabled":""}
          >
          <span class="oq-helper-modal-subvalue">${s(r?`Gekozen bestand: ${r}`:"Nog geen bestand gekozen")}</span>
        </div>
        <p class="oq-helper-modal-note">De upload gebruikt dezelfde OTA-flow als de normale update. Laat deze pagina open tot het device weer terug is.</p>
        ${t.updateManualUploadError?`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(t.updateManualUploadError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <button class="oq-helper-button" type="button" data-oq-action="upload-firmware-file" ${o||!t.updateManualUploadFile?"disabled":""}>Upload en installeer</button>
        </div>
      </div>
    `}function Op(){if(!t.updateModalOpen)return"";let e=fe(),o=t.entities.firmwareUpdateChannel||null,{current:r,latest:n}=Rs(),a=ot(),i=cr(),l=Io(),p=Db(),u=Vt(),c=As(),g=Mb(),y=c?"Firmware-update afgerond":u||i?"Firmware-update bezig":a?"Controleren op firmware-update":Rb(),b=o?Array.isArray(o.option)?o.option:Array.isArray(o.options)?o.options:[]:[],v=va(),m=wa(),f=!!(v&&!c),w=!!(m&&!c);return`
      <div class="oq-helper-modal-backdrop${a||i||u?" is-busy":""}${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal oq-helper-modal--firmware oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${s(y)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(p)}</p>
          ${c?`
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          `:""}
          ${u?`
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${s(u.phaseLabel)}</strong>
                <span>${s(`${u.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,u.percent))}%"></span>
              </div>
            </div>
          `:""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${s(lo())}</strong>
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
              <strong class="oq-helper-modal-value">${s(so())}</strong>
            </div>
          </div>
          ${b.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${b.map(S=>`
                  <option value="${s(S)}" ${String(T("firmwareUpdateChannel")||"")===S?"selected":""}>${s(S)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||u?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${c?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||u||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${g?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(g)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${Np()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||u?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${Lb(f,v,w,m)}
        </section>
      </div>
    `}function Ct(){return t.debugRecordingDeviceStatus?Math.max(0,Number(t.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(t.debugRecordingSamples)?t.debugRecordingSamples.length:0}function kt(e=t.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function Ea(e=t.debugRecordingDeviceStatus){return kt(e)&&e?.frozen===!0&&!e?.active}function _o(e){let o=Math.max(0,Math.round(Number(e||0)/1e3)),r=Math.floor(o/3600),n=Math.floor(o%3600/60),a=o%60;return r>0?`${r}u ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(a).padStart(2,"0")}s`:`${a}s`}function Lp(){return t.debugRecordingDeviceStatus?Math.max(0,Number(t.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):Fp()}function Fp(){if(t.debugRecordingDeviceStatus)return Math.max(0,Number(t.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!t.debugRecordingStartedAt)return 0;let e=t.debugRecordingActive?Date.now():Number(t.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(t.debugRecordingStartedAt||e))}function cn(){return t.debugRecordingDeviceStatus&&t.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":Ea()?"Rolling gestopt":t.debugRecordingActive&&kt()?"Rolling actief":t.debugRecordingActive?"Bezig met opnemen":Ct()>0?"Voltooid":"Niet gestart"}function Ca(){return Ea()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":t.debugRecordingActive&&kt()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":t.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":Ct()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":t.debugRecordingDeviceStatus&&t.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function Ip(){return Ea()?"Gestopt":t.debugRecordingActive&&kt()?`Rolling \xB7 ${_o(Lp())}`:t.debugRecordingActive?`Loopt \xB7 ${_o(Wp())}`:Ct()>0?"Klaar":cn()}function Vb(){let e=Number(t.debugRecordingSelectedMinutes||15);return Gn.map(r=>Number(r.minutes)).includes(e)?e:Number(Gn[0]?.minutes||15)}function _p(e){t.debugRecordingActive||(t.debugRecordingSelectedMinutes=Math.max(1,Number(e)||15),t.debugRecordingNotice="",t.debugRecordingError="",d())}function Wp(){return kt()?0:t.debugRecordingDeviceStatus?Math.max(0,Number(t.debugRecordingDeviceStatus.remaining_s||0)*1e3):t.debugRecordingActive?Math.max(0,Number(t.debugRecordingEndsAt||0)-Date.now()):0}function Bb(){if(t.debugRecordingDeviceStatus){if(kt()){let a=Math.max(1,Number(t.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,Ct()/a*100))}let r=Math.max(1,Number(t.debugRecordingDeviceStatus.duration_s||0)),n=Math.max(0,Number(t.debugRecordingDeviceStatus.elapsed_s||0));return!t.debugRecordingActive&&Ct()>0?100:Math.max(0,Math.min(100,n/r*100))}if(!t.debugRecordingActive||!t.debugRecordingStartedAt||!t.debugRecordingEndsAt)return Ct()>0?100:0;let e=Math.max(1,Number(t.debugRecordingEndsAt)-Number(t.debugRecordingStartedAt)),o=Math.max(0,Date.now()-Number(t.debugRecordingStartedAt));return Math.max(0,Math.min(100,o/e*100))}function Vp(e=t.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function Bp(e){if(e?.recording?.active)return;let o=Vp(e);if(o){t.debugRecordingAcknowledgedId=o;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",o)}catch{}}}function Ps(){let e=t.debugRecordingDeviceStatus,o=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&o===0)return"";let r=!!e.active;if(!r&&Vp(e)===t.debugRecordingAcknowledgedId)return"";let n=kt(e),a=_o(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=_o(Math.max(0,Number(e.remaining_s||0))*1e3),l=r?n?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:n?"Rolling gestopt":"Debug klaar",p=r?n?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:n?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${r?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${s(p)}"
      title="${s(p)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${s(l)}</span>
    </button>
  `}function Kb(){if(!t.root)return;if(t.interfacePanelOpen){d();return}let e=t.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;let o=e.querySelector(".oq-debug-recording-header-status"),r=Ps();if(!r){o?.remove();return}if(o){o.outerHTML=r;return}e.insertAdjacentHTML("afterbegin",r)}function jb(){if(!t.root)return;let e=t.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;let o=e.querySelector(".oq-settings-system-row-value"),r=e.querySelector(".oq-settings-system-row-note");o&&(o.textContent=cn()),r&&(r.textContent=Ca())}function Ns(e){let o={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return o[e]||o.status}function Ub(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${Ns(e)}</span>`}function Bt(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${Ns(e)}</span>`}function Gb(){return[...Eo]}function zb(){let e=[];return Eo.forEach((o,r)=>{let n=t.entities?.[o]||{},a=String(n.uom??n.unit_of_measurement??"").trim();a&&e.push([r,a])}),e}function Qb(e){return Array.isArray(e)?e.map((o,r)=>o===null?null:[r,o]).filter(Boolean):[]}function ka(){t.debugRecordingTimer&&(window.clearTimeout(t.debugRecordingTimer),t.debugRecordingTimer=null)}function Wo(){t.debugRecordingDevicePollTimer&&(window.clearTimeout(t.debugRecordingDevicePollTimer),t.debugRecordingDevicePollTimer=null)}function uo(e){return`${De()}/openquatt/debug-recording/${e}`}function mr(e){let o=e&&typeof e=="object"?e:{};t.debugRecordingDeviceStatus=o,t.debugRecordingActive=!!o.active,t.debugRecordingStartedAt=o.active||Number(o.sample_count||0)>0?Date.now()-Math.max(0,Number(o.elapsed_s||0)*1e3):0,t.debugRecordingEndsAt=o.active?Date.now()+Math.max(0,Number(o.remaining_s||0)*1e3):0,t.debugRecordingLastSampleAt=Number(o.sample_count||0)>0?Date.now():0}function Os(){mr({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function Yb(){let e=await window.fetch(uo("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=await e.json();return mr(o),o}function un(e=2e3){Wo(),t.debugRecordingActive&&(t.debugRecordingDevicePollTimer=window.setTimeout(()=>{pn({silent:!0})},Math.max(0,Number(t.systemModal==="debug-recording"?e:5e3)||0)))}async function pn(e={}){e.silent||(t.debugRecordingBusy=!0,t.debugRecordingError="",d());try{await Yb(),!t.debugRecordingActive&&e.silent&&(t.debugRecordingNotice="Debugopname is afgerond."),un()}catch(o){Os(),t.debugRecordingError=`Status kon niet worden opgehaald. ${o.message||String(o)}`}finally{e.silent||(t.debugRecordingBusy=!1),!e.silent||t.systemModal==="debug-recording"?d():(Kb(),jb())}}async function Kp(){let e=gs(Eo,"state"),o=null;for(let r=0;r<e.length;r+=1){let n=await window.fetch(uo(`configure?reset=${r===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[r].body});if(!n.ok)throw new Error(`configuratie HTTP ${n.status}`);o=await n.json()}if(Number(o?.entity_field_count||0)!==Eo.length)throw new Error(`onvolledige debugset (${Number(o?.entity_field_count||0)}/${Eo.length})`);return o}async function jp(e){let o=Math.max(1,Number(e)||15);ka(),Wo(),t.debugRecordingBusy=!0,t.debugRecordingError="",t.debugRecordingNotice="",t.debugRecordingSamples=[],t.debugRecordingEvents=[],t.debugRecordingInitialValues=null,t.debugRecordingLastValues=null,t.debugRecordingDeviceBundle=null,t.debugRecordingLastSampleAt=0,t.debugRecordingSequence=0,d();try{await Kp();let r=await window.fetch(uo(`start?duration_s=${encodeURIComponent(o*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.json();mr(n),un()}catch(r){Os(),t.debugRecordingError=`Debugopname kon niet worden gestart. ${r.message||String(r)}`}finally{t.debugRecordingBusy=!1,d()}}async function Up(){ka(),Wo(),t.debugRecordingBusy=!0,t.debugRecordingError="",t.debugRecordingNotice="",t.debugRecordingSamples=[],t.debugRecordingEvents=[],t.debugRecordingInitialValues=null,t.debugRecordingLastValues=null,t.debugRecordingDeviceBundle=null,t.debugRecordingLastSampleAt=0,t.debugRecordingSequence=0,d();try{await Kp();let e=await window.fetch(uo("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=await e.json();mr(o),un()}catch(e){Os(),t.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{t.debugRecordingBusy=!1,d()}}async function Jb(){let e=await window.fetch(uo("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=await e.json();return mr(o),Wo(),o}async function Gp(){ka(),t.debugRecordingBusy=!0,t.debugRecordingError="",d();try{await Jb(),t.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){t.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{t.debugRecordingBusy=!1,d()}}async function zp(e={}){ka(),Wo(),t.debugRecordingBusy=!0,t.debugRecordingError="",d();try{let o=await window.fetch(uo("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();mr(r),t.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(o){t.debugRecordingError=`Debugopname kon niet worden gestopt. ${o.message||String(o)}`}finally{t.debugRecordingBusy=!1,d()}}function Dp(e={}){let o=t.debugRecordingActive?Date.now():Number(t.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:t.debugRecordingStartedAt?new Date(Number(t.debugRecordingStartedAt)).toISOString():"",ended_at:o?new Date(o).toISOString():"",active:!!t.debugRecordingActive,duration_s:t.debugRecordingStartedAt?Math.round(Math.max(0,o-Number(t.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(bc/1e3),sample_count:Ct(),column_count:Eo.length,storage:"browser"},columns:Gb(),units:zb(),initial:Qb(t.debugRecordingInitialValues),samples:t.debugRecordingSamples||[],events:t.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function Ta(e){return JSON.stringify(e)}function Zb(){let e=Number(t.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([Ta(Dp())]).size}catch{return Ta(Dp()).length}}function Xb(e){let o=Math.max(0,Number(e)||0);return o>=1024*1024?`${(o/1024/1024).toFixed(1)} MB`:o>=1024?`${(o/1024).toFixed(1)} kB`:`${Math.round(o)} B`}function ey(e){let o=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),r=String(o).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${r}.oqdebug.json`}async function Qp(){if(Ct()===0){t.debugRecordingError="Er is nog geen debugopname om te downloaden.",d();return}t.debugRecordingBusy=!0,t.debugRecordingError="";let e=t.debugRecordingActive&&kt();d();try{let o=await window.fetch(uo("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();t.debugRecordingDeviceBundle=r,Ni(ey(r),Ta(r),"application/json"),Bp(r),t.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{t.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{t.debugRecordingBusy=!1,d()}}async function Yp(){if(Ct()===0){t.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",d();return}t.debugRecordingBusy=!0,t.debugRecordingError="";let e=t.debugRecordingActive&&kt();d();try{let o=await window.fetch(uo("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);let r=await o.json();if(t.debugRecordingDeviceBundle=r,!await Yt(Ta(r)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");Bp(r),t.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{t.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{t.debugRecordingBusy=!1,d()}}function Jp(){let e=t.debugRecordingActive,o=kt(),r=Ea(),n=Ct(),a=t.debugRecordingBusy,i=Xb(Zb()),l=Array.isArray(t.debugRecordingDeviceBundle?.events)?t.debugRecordingDeviceBundle.events.length:Array.isArray(t.debugRecordingEvents)?t.debugRecordingEvents.length:0,p=Vb(),u=Wp(),c=Lp(),g=Bb(),y=n>0,b=`${g.toFixed(1)}%`,v=[{icon:"status",label:"Status",value:cn()},{icon:"clock",label:o?"Retentie":"Duur",value:_o(o?c:Fp())},{icon:"samples",label:"Samples",value:String(n)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:t.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],m=t.debugRecordingError?{kind:"error",icon:"alert",text:t.debugRecordingError}:t.debugRecordingNotice?{kind:"success",icon:"check",text:t.debugRecordingNotice}:null;return`
    <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">\xD7</button>
        </div>
        <p class="oq-helper-modal-copy">${s(Ca())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${Ns("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(o?`Laatste ${_o(c)} bewaard`:`Nog ${_o(u)}`)}</span>
                <strong>${s(o?`${n}/${Number(t.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(g)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(b)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${v.map(f=>`
              <div class="oq-debug-recording-stat">
                <dt>${Ub(f.icon)}${s(f.label)}</dt>
                <dd>${s(f.value)}</dd>
              </div>
            `).join("")}
          </dl>
        </section>
        ${e&&o?`
          <section class="oq-debug-recording-duration" aria-label="Rolling debug">
            <h3>Rolling debug</h3>
            <p class="oq-helper-modal-copy">Download of kopieer maakt een momentopname van de huidige buffer. Stop rolling zet de buffer vast.</p>
          </section>
        `:`
          <section class="oq-debug-recording-duration" aria-label="Duur">
            <h3>Duur</h3>
            <div class="oq-debug-recording-segments" role="group" aria-label="Kies opnameduur">
              ${Gn.map(f=>{let w=Number(f.minutes)===p;return`
                  <button
                    class="oq-debug-recording-segment${w?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${f.minutes}"
                    aria-pressed="${w?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(f.label)}
                  </button>
                `}).join("")}
            </div>
          </section>
        `}
        <div class="oq-debug-recording-actions">
          ${e&&o?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="freeze-debug-recording" ${a?"disabled":""}>${Bt("stop")}Stop rolling</button>
          `:e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${a?"disabled":""}>${Bt("stop")}Stop opname</button>
          `:r?`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${p}" ${a||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Bt("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Bt("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${p}" ${a||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Bt("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||t.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${Bt("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!y||a?"disabled":""}>${Bt("download")}${e&&o?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!y||a?"disabled":""}>${Bt("copy")}${e&&o?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${m?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${m.kind}" role="status">
              ${Bt(m.icon)}
              <span>${s(m.text)}</span>
            </p>
          `:""}
        </div>
      </section>
    </div>
  `}function Xp(e){t.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",t.overviewTheme)}catch{}}function xa(e){t.interfacePanelOpen=e===!0}function Ds(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function dn(e,o={}){t.settingsGroup=Pe.has(e)?e:me[0].id;try{window.localStorage.setItem("oq-settings-group",t.settingsGroup)}catch{}o.syncUrl!==!1&&t.appView==="settings"&&Bi(o.syncMode||"replace")}function ed(e){t.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",t.devPanelOpen?"true":"false")}catch{}}function td(e){t.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",t.hpVisualMode)}catch{}}function od(e){t.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",t.hpLayoutMode)}catch{}}function ty(e){if(t.reducedMotion=!!e?.matches,t.reducedMotion){zr();return}Gr()}function oy(){let e=xi();!e||t.motionPreferenceMedia===e||(t.motionPreferenceMedia=e,t.motionPreferenceListener=ty,typeof e.addEventListener=="function"?e.addEventListener("change",t.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(t.motionPreferenceListener),t.reducedMotion=!!e.matches)}function ry(){return Object.keys(t.entities).length>0}function ny(){return ki+Math.floor(Math.random()*(xc-ki+1))}function ay(){return(document.hidden?Wr:wc)+ny()}function rd(e=ay()){t.pollTimer||t.nativeOpen||t.updateInstallBusy||aa()||(t.pollTimer=window.setTimeout(async()=>{t.pollTimer=null,await ce(),rd()},e))}function Ls(){rd()}function Fs(){t.pollTimer&&(window.clearTimeout(t.pollTimer),t.pollTimer=null)}nu({start:Ls,stop:Fs});function iy(){t.nativeOpen||(Fs(),Ls(),document.hidden||ce({forceProbe:!0}))}function $a(e={}){if(mn(),t.nativeOpen){Fs(),zr(),t.nativeFrontendLoaded||Aa();return}if(Gr(),Ls(),e.refresh!==!1){if(!ry()){Ju();return}ce({forceFast:!0})}}function sy(){let e=Yr()||eo(),o=e==="settings"?Vi()||t.settingsGroup:"";if(!(e===t.appView&&(e!=="settings"||o===t.settingsGroup))){if(t.appView=e,e==="settings"&&o){t.settingsGroup=o;try{window.localStorage.setItem("oq-settings-group",t.settingsGroup)}catch{}}d(),ce({forceFast:!0})}}function mn(){t.nativeApp&&(t.nativeApp.classList.add("oq-native-app"),t.nativeApp.classList.toggle("oq-native-app--collapsed",!t.nativeOpen),t.nativeApp.setAttribute("aria-hidden",t.nativeOpen?"false":"true"))}function nd(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zp,{once:!0}):Zp(),window.addEventListener("pointermove",du),window.addEventListener("pointerup",mu),window.addEventListener("popstate",sy),window.addEventListener("oq-mock-updated",ly),window.addEventListener("oq-dev-controls-changed",cy),document.addEventListener("visibilitychange",iy)}function ly(){t.mounted&&ce()}function cy(){t.mounted&&d()}function Zp(){uy();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),t.nativeApp=e,t.nativeFrontendLoaded=Array.from(document.scripts).some(o=>o.src===gi),t.mounted||(py(e),t.mounted=!0,$a()),mn(),t.nativeOpen||(ce(),pn({silent:!0}))}function uy(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function py(e){let o=document.createElement("section");o.id="oq-helper-root",o.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(o,e),o.addEventListener("click",lu),o.addEventListener("change",su),o.addEventListener("input",cu),o.addEventListener("keydown",uu),o.addEventListener("wheel",fu,{passive:!1}),o.addEventListener("focusin",Wi),o.addEventListener("focusout",Wi),o.addEventListener("mouseover",hu),o.addEventListener("mouseout",gu),o.addEventListener("pointerdown",pu),t.root=o,oy();let r=Yr()||eo(),n=r==="settings"?Vi():"";n&&dn(n,{syncUrl:!1}),ut(r,{syncMode:"replace",forceSync:!0}),Ur(),d()}function dy(e){return new Promise((o,r)=>{if(!e){o();return}let n=Array.from(document.scripts).find(i=>i.src===e);if(n){if(n.dataset.loaded==="true"){o();return}n.addEventListener("load",()=>o(),{once:!0}),n.addEventListener("error",i=>r(i),{once:!0});return}let a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",o()},{once:!0}),a.addEventListener("error",i=>r(i),{once:!0}),document.head.appendChild(a)})}async function Aa(){if(!(t.nativeFrontendLoaded||t.nativeFrontendLoading)){t.nativeFrontendLoading=!0,t.nativeOpen&&d();try{await dy(gi),t.nativeFrontendLoaded=!0}catch(e){t.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,t.nativeOpen=!1,Ds("app"),d(),$a()}finally{t.nativeFrontendLoading=!1,t.nativeOpen&&d()}}}function Is(){if(!t.root)return;let e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(t.root)}function gn(){let e=t.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function my(){return"Login"}function gy(){let e=t.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function hn(){let e=t.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function gr(){let e=t.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function hr(){let e=t.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?e.enabled===!0&&e.transport_active===!1?"API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu voor Home Assistant.":e.enabled===!1&&e.transport_active===!0?"API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API beveiligd.":e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":"De native API staat nu open op je lokale netwerk.":"API-encryptie wordt geladen."}function hy(){return"ESPHome API encryption"}function fy(){let e=t.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?e.enabled===!0&&e.transport_active===!1?"API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu alvast voor Home Assistant.":e.enabled===!1&&e.transport_active===!0?"API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API nog beveiligd.":"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":"API-encryptie staat uit. Schakel in om een sleutel te bekijken, kopi\xEBren of vernieuwen.":"We halen de huidige API-beveiliging op."}function by(){let e=t.apiSecurityStatus;if(!e)return"Laden...";let o=!!(e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active);return o&&e.enabled===!0&&e.transport_active===!1?"Annuleer inschakelen":o&&e.enabled===!1&&e.transport_active===!0?"Annuleer uitschakelen":e.enabled?"Uitschakelen":"Inschakelen"}function yy(){let e=t.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function ad(e,o,r="",n=!1){return`
      <div class="oq-helper-modal-row${n?" oq-helper-modal-row--loading":""}">
        <span class="oq-helper-modal-label">${s(e)}</span>
        <strong class="oq-helper-modal-value">${n?`
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${s(o)}</span>
          </span>
        `:s(o)}</strong>
      ${r?`<span class="oq-helper-modal-subvalue">${s(r)}</span>`:""}
    </div>
    `}function id(){let e=t.apiSecurityStatus||{},o=e.enabled===!0,r=!!e.key,n=!!(e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active),a=r||e.transport_active===!0||n,i=t.apiSecurityNotice,l=t.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(t.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${s(hy())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(fy())}</p>
          ${i?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(i)}</span></div>`:""}
          ${l}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(gr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(hr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${o?"disable-api-security":"enable-api-security"}"
                ${t.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${s(by())}
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
                      ${t.apiSecurityBusy||!e.csrf_token?"disabled":""}
                    >
                      ${s(yy())}
                    </button>
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="copy-api-security-key"
                      ${t.apiSecurityBusy?"disabled":""}
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
                ${t.apiSecurityBusy?"disabled":""}
              >
                Opslaan en herstarten
              </button>
            `:""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.apiSecurityBusy?"disabled":""}>Gereed</button>
          </div>
        </section>
      </div>
    `}function sd(){let e=t.authStatus||{},o=e.enabled===!0,r=e.setup_window_active===!0,n=o||r,a=o?String(e.username||"").trim():"",i=t.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(t.authNotice)}</span></div>`:"",l=t.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(t.authError)}</div>`:"",u=n?`
        ${n?`<p class="oq-helper-modal-intro">${o?"Pas hier je login aan.":"Vul hier je nieuwe login in."}</p>`:""}
        <div class="oq-helper-modal-auth-stack">
          ${o?`
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${s(t.authDraftCurrentPassword)}"
                  ${t.authBusy?"disabled":""}
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
              value="${s(t.authDraftUsername)}"
              ${t.authBusy?"disabled":""}
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
              value="${s(t.authDraftNewPassword)}"
              ${t.authBusy?"disabled":""}
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
              value="${s(t.authDraftConfirmPassword)}"
              ${t.authBusy?"disabled":""}
            >
          </label>
        </div>
      `:`
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${s(my())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(gy())}</p>
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${ad("Beveiligingsstatus",gn(),hn())}
            ${ad("Gebruiker",o?a||"Geen naam":"Geen login",o?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${u}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.authBusy?"disabled":""}>Gereed</button>
            ${o?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${t.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${n?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${t.authBusy?"disabled":""}>${o?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function fn(e,o,r){let n=A(o),a=A(r);if(Number.isFinite(n)&&Number.isFinite(a))return n-a;let i=A(e);return Number.isFinite(i)?i:NaN}function _s(e="oq-settings-grid"){let o=vy();return`
      <div class="${s(e)}">
        ${ae("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${o}
    `}function vy(){let e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(r=>h(r.offsetKey)&&h(r.finalKey));if(!e.length)return"";let o=r=>{let n=Oe(r.offsetKey),a=fn(r.rawKey,r.finalKey,r.offsetKey),i=$e(Ee(r.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?Lt(a+i,n.uom||"\xB0C",2):Se(r.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(r.offsetKey)}" data-oq-hp-offset-raw-key="${s(r.rawKey)}" data-oq-hp-offset-final-key="${s(r.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(r.label)}</strong>
            <span data-oq-hp-offset-active>${s(Se(r.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${r.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?Lt(a,n.uom||"\xB0C",2):Se(r.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${no({key:r.offsetKey,value:Ee(r.offsetKey),meta:n,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:n.uom?`<span class="oq-helper-unit-chip">${s(n.uom)}</span>`:""})}
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
          ${e.map(o).join("")}
        </div>
      </div>
    `}function ld(){return Z("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",_s())}function cd(e,o){let r=A(e),n=A(o),a=Number.isNaN(r)?"Lvl \u2014":`Lvl ${Math.round(r)}`,i=Number.isNaN(n)?"\u2014 Hz":`${Math.round(n)} Hz`;return`${a} (${i})`}function wy(e){let o=String(e||"").trim().toUpperCase();return!o||o==="0"||o==="IDLE"||o==="CM100 READY"||o==="CM100 STOPPED"||o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED")?!1:o.includes("REQUESTED")||o.includes("WAITING")||o.includes("WACHTEN")||o.includes("SETTLING")||o.includes("MEASUR")||o.includes("COOLDOWN")||o.includes("RUNNING")||o.includes("VALIDATING")||o.includes("STARTED")||o.includes("RECOVER")||o.includes("PHASE")||o.includes("STEADY")||o.includes("PULSE")||o.includes("STABILIZE")||o.includes("STEP")}function qe(e){let o=String(e||"").trim().toUpperCase();return o?o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED"):!1}function Vo(e){let o=String(e||"").trim().toUpperCase();return o.includes("WAITING_FOR_CM100")||o.includes("CM100 REQUESTED")||o.includes("WACHTEN OP CM100")||o==="WACHTEN"}function fr(e){return wy(e)&&!Vo(e)}function Ha(e="",o=""){let r=String(e||"").trim().toUpperCase(),n=String(o||"").trim().toLowerCase(),a=r.split(/[^A-Z0-9]+/).filter(Boolean),i=c=>{let g=String(c||"").trim().toUpperCase();return g?r===g||r.startsWith(`${g}:`)||r.startsWith(`${g} `)||a.includes(g):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!r||r==="\u2014"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN")return{phase:"Wachten",percent:0};if(r.includes("WAITING")||r.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(n!=="cm100"&&(r==="IDLE"||r==="CM0 - STANDBY"||r==="CM100 READY"||r==="CM100 STOPPED"||r==="GEPAUZEERD"))return{phase:"Wachten",percent:0};let u=(l[n]||[]).find(c=>c.match.some(g=>i(g)));return u||(r.includes("DONE")||r.includes("APPLIED")?{phase:"Klaar",percent:100}:r.includes("ABORT")||r.includes("FAILED")||r.includes("REFUSED")?{phase:"Afgebroken",percent:100}:n==="cm100"&&r.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function br({taskKey:e,title:o,copy:r,subcopy:n="",status:a,statusCopy:i,progressTask:l,actions:p="",controls:u="",metrics:c="",className:g=""}){return`
      <article class="oq-settings-commissioning-card${g?` ${s(g)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(o)}</h3>
            <p>${s(r)}</p>
            ${n?`<p class="oq-settings-commissioning-card-subcopy">${s(n)}</p>`:""}
          </div>
        </div>
        ${p?`<div class="oq-settings-commissioning-card-actions">${p}</div>`:""}
        ${u}
        <div class="oq-settings-quickstart-status oq-settings-quickstart-status--compact oq-settings-commissioning-card-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${s(a)}</strong>
              <p class="oq-settings-quickstart-status-copy">${s(i)}</p>
            </div>
          </div>
        </div>
        ${c?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${c}</div>`:""}
      </article>
    `}function Sy({status:e,running:o,resultReady:r,startDisabled:n,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:p}){let u=String(e||"").toUpperCase(),c=u.includes("FAILED")||u.includes("REFUSED")||u.includes("ABORT"),g=u.includes("APPLIED"),y=h("hp2WaterIn")||h("hp2WaterOut")||h("hp2WaterInRaw")||h("hp2WaterOutRaw"),b=A("hpWaterCalibrationStableProgress"),v=A("hpWaterCalibrationStableRequired"),m=A("hpWaterCalibrationRemaining"),f=Math.round(A("hpWaterCalibrationPhase")),w=o&&(f===1||u.includes("MIXING")),S=o&&!w,q=300,E=60,k=Number.isFinite(m)?Math.max(0,q-m):NaN,M=Number.isFinite(k)?Math.max(0,E-k):NaN,V=w&&Number.isFinite(k)?Math.max(0,Math.min(100,k/E*100)):S&&Number.isFinite(b)&&Number.isFinite(v)&&v>0?Math.max(0,Math.min(100,b/v*100)):o&&Number.isFinite(m)?Math.max(0,Math.min(100,100-m/q*100)):r?100:0,F=r&&h("hpWaterCalibrationResultSpreadBefore")?Se("hpWaterCalibrationResultSpreadBefore",2):Se("hpWaterCalibrationSpread",2),ee=w?"Water mengen":Number.isFinite(b)&&Number.isFinite(v)&&v>0?b>0?`${Math.round(Math.max(0,b))} / ${Math.round(v)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",H=r?3:o?2:1,G=g?"Offsets toegepast":r?`Meting klaar - spreiding ${F}`:o?w?`Water mengen${Number.isFinite(M)&&M>0?` - meting start over ${Math.round(M)} s`:""}`:`Meting bezig - ${Number.isFinite(m)&&m>0?`max. ${Math.round(m)} s resterend`:ee}`:c?"Meting niet voltooid":"Voorbereiding",X=g?"De voorgestelde offsets zijn opgeslagen.":r?"Controleer de voorgestelde offsets en pas ze toe.":o?w?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":c?No("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):y?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",de=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(P=>h(P.liveKey)||h(P.rawKey)||h(P.offsetKey)),se=(P,I)=>{let z=H>P;return`
        <div class="oq-settings-hp-calibration-step${z?" is-done":""}${H===P?" is-active":""}">
          <span>${z?"\u2713":P}</span>
          <strong>${s(I)}</strong>
        </div>
      `},N=P=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(P.label)}</span>
          <strong>${s(Se(P.liveKey,2))}</strong>
        </article>
      `,Y=P=>{let I=A(P.resultRawKey),z=Number.isFinite(I)?I:fn(P.rawKey,P.liveKey,P.offsetKey),We=A(P.suggestedKey),ft=Number.isFinite(z)&&Number.isFinite(We)?Lt(z+We,t.entities[P.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(P.label)}</th>
          <td>${s(Number.isFinite(z)?Lt(z,t.entities[P.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(Se(P.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(Se(P.suggestedKey,2))}</span></td>
          <td>${s(ft)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${se(1,"Voorbereiding")}
          ${se(2,"Meting")}
          ${se(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${r?" is-success":o?" is-active":c?" is-warning":""}">
          <div>
            <strong>${s(G)}</strong>
            <p>${s(X)}</p>
          </div>
          ${o||r?`<span>${s(o?ee:"Resultaat beschikbaar")}</span>`:""}
          ${o?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${V.toFixed(0)}%"></i></div>`:""}
        </div>

        ${o?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${de.map(N).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(Se("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(Se("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${r?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(Se("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(Se("hpWaterCalibrationSupplyDelta",2))}</span>
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
                  ${de.map(Y).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${p?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${Do({active:o,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||n,stopDisabled:l||a})}
            ${t.entities.hpWaterCalibrationApply?je("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function ud(){let e=h("boilerCvAssistEnabled")&&x("boilerCvAssistEnabled"),o=da(),r=x("cm100Active"),n=String(o||"").trim().toUpperCase(),a=Vo(o),i=!a&&(r||n==="CM100 READY"),l=t.commissioningTaskLock==="cm100",p=t.loadingEntities||t.busyAction==="commissioningCm100Start"||t.busyAction==="commissioningCm100Stop"||l,u=!!t.pendingCommissioningCm100Start,c=p||i||a,g=p||!i,y=Oo("boilerPowerTestStatus","IDLE"),b=Ha(y,"boiler"),v=x("boilerPowerTestActive"),m=t.loadingEntities||t.busyAction==="boilerPowerTestStart"||t.busyAction==="boilerPowerTestAbort"||t.busyAction==="boilerPowerTestApply",f=!!(t.entities.boilerPowerTestStart||t.entities.boilerPowerTestAbort||t.entities.boilerPowerTestApply),w=!!t.pendingBoilerPowerTestStart,S=t.commissioningTaskLock==="boiler",q=Vo(y),k=!qe(y)&&(v||w||S||fr(y))&&!q,M=ke("boilerRatedHeatPower"),V=ke("boilerHeatPower"),F=A("boilerHeatPower"),ee=F>0?V:k&&t.commissioningBoilerHeatPowerDisplay?t.commissioningBoilerHeatPowerDisplay:V;F>0&&(t.commissioningBoilerHeatPowerDisplay=V);let H=Oo("flowAutotuneStatus","IDLE"),G=Ha(H,"autotune"),X=t.loadingEntities||t.busyAction==="flowAutotuneStart"||t.busyAction==="flowAutotuneAbort"||t.busyAction==="flowAutotuneApply",de=!!(t.entities.flowAutotuneStart||t.entities.flowAutotuneAbort||t.entities.flowAutotuneApply),se=!!t.pendingFlowAutotuneStart,N=t.commissioningTaskLock==="autotune",Y=Vo(H),I=!qe(H)&&(se||N||fr(H))&&!Y,z=Oo("airPurgeStatus","IDLE"),We=Ha(z,"purge"),ft=x("airPurgeActive"),it=t.loadingEntities||t.busyAction==="airPurgeStart"||t.busyAction==="airPurgeAbort",At=!!(t.entities.airPurgeStart||t.entities.airPurgeAbort),Ue=!!t.pendingAirPurgeStart,Me=t.commissioningTaskLock==="purge",C=!qe(z)&&(ft||Ue||Me||fr(z)),D=/DONE/.test(String(z||"").toUpperCase()),B=!!(At||t.entities.airPurgeStatus||t.entities.airPurgeReturnToAuto),Q=ke("airPurgeRemaining",{decimals:0}),ne=A("airPurgePhase"),be=ne===1?"Rustig":ne===2?"Pulsen":ne===3?"Stabiliseren":We.phase,te=Oo("manualFlowStatus","IDLE"),xe=x("manualFlowActive"),ye=t.loadingEntities||t.busyAction==="manualFlowStart"||t.busyAction==="manualFlowAbort",le=!!(t.entities.manualFlowStart||t.entities.manualFlowAbort),Ht=!!t.pendingManualFlowStart,ue=t.commissioningTaskLock==="manual-flow",Re=!qe(te)&&(xe||Ht||ue||fr(te)),Ve=Oo("manualHpStatus","IDLE"),Ge=x("manualHpActive"),ze=t.loadingEntities||t.busyAction==="manualHpStart"||t.busyAction==="manualHpAbort",yo=!!(t.entities.manualHpStart||t.entities.manualHpAbort),ve=!!t.pendingManualHpStart,bt=t.commissioningTaskLock==="manual-hp",Qe=!qe(Ve)&&(Ge||ve||bt||fr(Ve)),Nn=/SAFETY STOP/.test(String(Ve||"").toUpperCase()),On=/STOPPING/.test(String(Ve||"").toUpperCase()),yt=Oo("hpWaterCalibrationStatus","IDLE"),ci=Ha(yt,"hp-water-calibration"),Dn=x("hpWaterCalibrationActive"),zo=t.loadingEntities||t.busyAction==="hpWaterCalibrationStart"||t.busyAction==="hpWaterCalibrationAbort"||t.busyAction==="hpWaterCalibrationApply",nc=!!(t.entities.hpWaterCalibrationStart||t.entities.hpWaterCalibrationAbort||t.entities.hpWaterCalibrationApply),Ln=!!t.pendingHpWaterCalibrationStart,Gt=t.commissioningTaskLock==="hp-water-calibration",Be=!qe(yt)&&(Dn||Ln||Gt||fr(yt)),Fn=/DONE|APPLIED/.test(String(yt||"").toUpperCase()),ac=/APPLIED/.test(String(yt||"").toUpperCase()),ah=ke("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),ih=ke("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),ic=/DONE|APPLIED/.test(String(y||"").toUpperCase()),sc=/DONE|APPLIED/.test(String(H||"").toUpperCase()),ui=i?q?"Wachten op CM100":k?b.phase:ic?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",pi=i?Y?"Wachten op CM100":I?G.phase:sc?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",di=i?C?We.phase:D?"Klaar":"Klaar om te starten":"Wachten op CM100",lc=i?Re?"Actief":"Klaar om te starten":"Wachten op CM100",cc=i?Qe?On?"Bezig met stoppen":Nn?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",uc=i?Be?ci.phase:ac?"Offsets toegepast":Fn?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",pc=!i||m||!f||I||C||Re||Qe||Be||k||N||Me||ue||bt||Gt||w,sh=m||!(k||S||w),lh=m||pc||!ic||I||C||Be,dc=!i||X||!de||k||C||Re||Qe||Be||I||S||Me||ue||bt||Gt||se,ch=X||!(I||N||se),uh=X||dc||!sc||k||C||Be,ph=!i||it||!At||k||I||Re||Qe||Be||C||S||N||ue||bt||Gt||Ue,dh=it||!(C||Me||Ue),mh=!i||ye||!le||k||I||C||Qe||Be||Re||S||N||Me||bt||Gt||Ht,gh=ye||!(Re||ue||Ht),hh=!i||ze||!yo||k||I||C||Re||Be||Qe||S||N||Me||ue||Gt||ve,fh=ze||!(Qe||bt||ve),bh=!i||zo||!nc||k||I||C||Re||Qe||Be||S||N||Me||ue||bt||Ln,yh=zo||!(Be||Gt||Ln),vh=zo||Be||!Fn||ac;u&&i&&(t.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(n))&&(t.commissioningTaskLock=""),w&&(v||qe(y))&&(t.pendingBoilerPowerTestStart=!1),S&&qe(y)&&(t.commissioningTaskLock=""),se&&qe(H)&&(t.pendingFlowAutotuneStart=!1),N&&qe(H)&&(t.commissioningTaskLock=""),Ue&&(ft||qe(z))&&(t.pendingAirPurgeStart=!1),Me&&qe(z)&&(t.commissioningTaskLock=""),Ht&&(xe||qe(te))&&(t.pendingManualFlowStart=!1),ue&&(xe||qe(te))&&(t.commissioningTaskLock=""),ve&&(Ge||qe(Ve))&&(t.pendingManualHpStart=!1),bt&&(Ge||qe(Ve))&&(t.commissioningTaskLock=""),Ln&&(Dn||qe(yt))&&(t.pendingHpWaterCalibrationStart=!1),Gt&&qe(yt)&&(t.commissioningTaskLock="");let wh=a?"Wachten op CM100":o,Sh=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",qh=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:uc,available:!!(nc||t.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:br({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:uc,statusCopy:Be?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":Fn?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:Sy({status:yt,running:Be,resultReady:Fn,startDisabled:bh,abortDisabled:yh,applyDisabled:vh,busy:zo,controlsAvailable:!!(t.entities.hpWaterCalibrationStart||t.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:lc,available:!!(le||t.entities.manualFlowStatus),openDisabled:!i,cardMarkup:br({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:lc,statusCopy:Re?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${et("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${t.entities.manualFlowStart||t.entities.manualFlowAbort?Do({active:Re,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:ye||mh,stopDisabled:ye||gh}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${Ae("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",ke("flowSelected"),"oq-settings-field--compact")}
            ${Ae("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",ke("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${t.entities.manualFlowApplyHeating?je("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",ye):""}
          ${t.entities.manualFlowApplyCooling?je("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",ye):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:cc,available:!!(yo||t.entities.manualHpStatus),openDisabled:!i,cardMarkup:br({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:cc,statusCopy:Qe?On?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":Nn?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${t.entities.manualHpStart||t.entities.manualHpAbort?Do({active:Qe,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:ze||hh,stopDisabled:ze||fh}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${io("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${et("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${h("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${io("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${et("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${Ae("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",ke("flowSelected"),"oq-settings-field--compact")}
              ${Ae("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",cd("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${h("hp2Compressor")?Ae("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",cd("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${Ae("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",T("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${Ae("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",to(O("hp1Failures","None")),"oq-settings-field--compact")}
              ${h("hp2Failures")?Ae("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",to(O("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:pi,available:!0,openDisabled:Vo(pi),cardMarkup:br({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:pi,statusCopy:Y?"Wacht totdat CM100 actief is voordat je autotune start.":I?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${t.entities.flowAutotuneStart||t.entities.flowAutotuneAbort?Do({active:I,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:X||dc,stopDisabled:X||ch}):""}
            ${t.entities.flowAutotuneApply?je("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",X||uh):""}
          `,metrics:`
            ${Ae("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",ah,"oq-settings-field--compact")}
            ${Ae("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",ih,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:ui,available:e,openDisabled:Vo(ui),cardMarkup:br({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s(M)}`,status:ui,statusCopy:q?"Wacht totdat CM100 actief is voordat je de boiler-test start.":k?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${t.entities.boilerPowerTestStart||t.entities.boilerPowerTestAbort?Do({active:k,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:m||pc,stopDisabled:m||sh}):""}
            ${t.entities.boilerPowerTestApply?je("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",m||lh):""}
          `,metrics:`
            ${Ae("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",ee)}
            ${Ae("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",ke("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:di,available:B,openDisabled:Vo(di),cardMarkup:br({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:di,statusCopy:C?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${t.entities.airPurgeStart||t.entities.airPurgeAbort?Do({active:C,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:it||ph,stopDisabled:it||dh}):""}
          `,metrics:`
            ${Ae("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",Q,"oq-settings-field--compact")}
            ${Ae("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",be,"oq-settings-field--compact")}
            ${Ae("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",ke("flowSelected"),"oq-settings-field--compact")}
            ${lp("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(Th=>Th.available);return{cm100Status:wh,cm100StartDisabled:c,cm100StopDisabled:g,serviceStatusCopy:Sh,tasks:qh}}function qy(e){return Ne({dataAttribute:"data-oq-service-task",dataValue:e.key,className:"oq-settings-service-row",label:e.label,value:e.status,note:e.summary,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${s(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>`})}function pd(){let e=ud();return Z("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${t.entities.commissioningCm100Start?je("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${t.entities.commissioningCm100Stop?je("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(o=>qy(o)).join("")}
          </div>
        </div>
      `)}function dd(){let e=String(t.systemModal||"").replace(/^service-task-/,""),r=ud().tasks.find(n=>n.key===e);return r?`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
    `:""}function Ma(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ws("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${ws("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${et("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${et("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function md(){return Z("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",Ma())}function gd(){return Ma("oq-settings-grid oq-settings-grid--modal")}var Ws=null;function hd(e){Ws=typeof e=="function"?e:null}function bn(){return Ws?Ws():"?meta=1"}async function po(e,o){let r=R[e];if(!r)throw new Error(`Onbekend veld ${e}.`);if(r.domain==="select"){let n=String(o||"").trim(),a=await fetch(`${j(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="number"){let n=he(e,o),a=await fetch(`${j(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="time"){let n=St(o),a=await fetch(`${j(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="datetime"){let n=Ke(o),a=await fetch(`${j(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="text"){let n=String(o||"").trim(),a=await fetch(`${j(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="switch"||r.domain==="binary_sensor"){let n=!!o,a=n?"turn_on":"turn_off",i=await fetch(j(r.domain,r.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return n}throw new Error(`${r.name} kan niet worden hersteld.`)}function Vs(){let e=t.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;let o=String(e.state??e.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function Ty(){return Vs()?xo:xo.filter(e=>e<=168)}function yn(e){let o=Ty(),r=Number(e);return o.includes(r)?r:Number.isFinite(r)&&r>o[o.length-1]?o[o.length-1]:o.includes(wt)?wt:o[0]}function yr(e){t.trendWindowHours=yn(e);try{window.localStorage.setItem("oq-trend-window-hours",String(t.trendWindowHours))}catch{}}function Ey(e){return Object.prototype.hasOwnProperty.call(e,"hour")||Object.prototype.hasOwnProperty.call(e,"hour_of_day")||Object.prototype.hasOwnProperty.call(e,"hourOfDay")}function Cy(e){return e.some(o=>Na(o)!==void 0)}function ky(e){let o=new Set;for(let r of e){let n=qd(r.date_key??r.dateKey??r.date??r.from??Na(r));if(n){if(o.has(n))return!0;o.add(n)}}return!1}function yd(e){return e.some(Ey)||Cy(e)&&ky(e)}function xy(){return{available:"Alleen live",oldest:"Geen data",newest:"Geen data",lastFlush:"Geen data",sizeKb:0,writes:0,nowMs:Number.NaN}}function $y(e){let o=xy();return String(e||"").split(/\r?\n/).forEach(r=>{if(r.startsWith("@now|")){o.nowMs=Number(r.slice(5));return}if(!r.startsWith("@flash|"))return;let n=r.split("|");o.available=n[1]||o.available,o.oldest=n[2]||o.oldest,o.newest=n[3]||o.newest,o.lastFlush=n[4]||o.lastFlush,o.sizeKb=Number(n[5])||0,o.writes=Number(n[6])||0}),o}async function vd(e={}){if(!h("trendHistoryEnabled")&&!wr()){let n=!!(t.trendHistoryMetadataSignature||t.trendHistoryMetadataError);return t.trendHistoryMetadata={},t.trendHistoryMetadataError="",t.trendHistoryMetadataSignature="",t.trendHistoryMetadataLastFetchAt=0,n}let o=e.force===!0,r=Date.now();if(!o&&t.trendHistoryMetadataFetchPromise)return t.trendHistoryMetadataFetchPromise;if(!o&&(t.trendHistoryMetadataSignature||t.trendHistoryMetadataError)&&r-Number(t.trendHistoryMetadataLastFetchAt||0)<In)return!1;t.trendHistoryMetadataFetchPromise=(async()=>{let n=await fetch(`${De()}/trends/history?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.text(),i=$y(a),l=`${a.length}|${a.slice(0,120)}|${a.slice(-120)}`,p=l!==t.trendHistoryMetadataSignature||t.trendHistoryMetadataError!=="";return t.trendHistoryMetadata=i,t.trendHistoryMetadataError="",t.trendHistoryMetadataSignature=l,t.trendHistoryMetadataLastFetchAt=Date.now(),p})();try{return await t.trendHistoryMetadataFetchPromise}catch(n){let a=`Trendhistorie metadata kon niet worden geladen. ${n.message}`,i=t.trendHistoryMetadataError!==a;return t.trendHistoryMetadata={},t.trendHistoryMetadataError=a,t.trendHistoryMetadataSignature="",t.trendHistoryMetadataLastFetchAt=Date.now(),i}finally{t.trendHistoryMetadataFetchPromise=null}}async function wn(e={}){await L(oo(),"all",{concurrency:Rt,forceMissing:e.forceMissing===!0}),await Promise.all([vd({force:e.forceTrendHistory===!0}),go({force:e.forceEnergyHistory===!0,metaOnly:!0})])}function Bo(e=[250,1e3,2500],o={}){e.forEach(r=>{window.setTimeout(()=>{t.nativeOpen||t.appView!=="settings"||wn({forceMissing:r===0,forceTrendHistory:o.forceTrendHistory===!0,forceEnergyHistory:o.forceEnergyHistory===!0}).finally(()=>{t.appView==="settings"&&t.mounted&&!t.nativeOpen&&d()})},r)})}var Ay="@schema|openquatt.energy_history_import.v1",Hy=850,vn=[{id:"days",label:"Alleen dagtotalen",fileLabel:"daily"},{id:"days_and_hours",label:"Dagtotalen + uurdetail",fileLabel:"daily-hourly"},{id:"hours",label:"Alleen uurdetail",fileLabel:"hourly"}],My={forbidden:"Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},mt={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","total_hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","total_hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh","energy_hp_cooling","hpCooling","hp_cooling_wh","total_hp_cooling_wh","totalHpCooling"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","total_boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function vr(e){let o=String(e||"").trim();return vn.some(r=>r.id===o)?o:"days_and_hours"}function wd(e){let o=vr(e);return vn.find(r=>r.id===o)||vn[1]}function Ry(e){let o=wd(e),r=new Date().toISOString().slice(0,10);return`openquatt-energy-history-${o.fileLabel}-${r}.json`}async function Sd(){if(t.energyHistoryExportBusy)return;let e=vr(t.energyHistoryExportMode),o=wd(e);if(t.energyHistoryExportMode=e,t.energyHistoryExportBusy=!0,t.energyHistoryExportError="",t.energyHistoryExportNotice="",d(),wr()){t.energyHistoryExportBusy=!1,t.energyHistoryExportNotice=`Preview: ${o.label.toLowerCase()} zou als JSON worden gedownload.`,d();return}try{let r=await fetch(`${De()}/energy/history/export?mode=${encodeURIComponent(e)}`,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.blob();Pi(n,Ry(e)),t.energyHistoryExportNotice=`${o.label} ge\xEBxporteerd.`}catch(r){t.energyHistoryExportError=`Exporteren mislukt. ${r.message}`}finally{t.energyHistoryExportBusy=!1,d()}}function Bs(e=!1){let o=e?t.energyHistoryImportNotice:"";t.energyHistoryImportFileName="",t.energyHistoryImportSource="",t.energyHistoryImportRange="",t.energyHistoryImportRecords=[],t.energyHistoryImportHourRecords=[],t.energyHistoryImportDuplicateCount=0,t.energyHistoryImportSkippedCount=0,t.energyHistoryImportInvalidCount=0,t.energyHistoryImportUnsupportedCount=0,t.energyHistoryImportBusy=!1,t.energyHistoryImportProgressPercent=0,t.energyHistoryImportError="",t.energyHistoryImportNotice=o}function qd(e){if(e==null||e==="")return 0;let o=String(e).trim(),r=0,n=0,a=0,i=o.match(/^(\d{4})(\d{2})(\d{2})$/),l=Td(o),p=o.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(i)r=Number(i[1]),n=Number(i[2]),a=Number(i[3]);else{if(l)return l.dateKey;if(p)r=Number(p[1]),n=Number(p[2]),a=Number(p[3]);else{let c=new Date(o);if(Number.isNaN(c.getTime()))return 0;r=c.getFullYear(),n=c.getMonth()+1,a=c.getDate()}}if(r<2020||r>2099||n<1||n>12||a<1||a>31)return 0;let u=new Date(Date.UTC(r,n-1,a));return u.getUTCFullYear()!==r||u.getUTCMonth()!==n-1||u.getUTCDate()!==a?0:r*1e4+n*100+a}function fd(e){let o=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(o)?`${o.slice(6,8)}-${o.slice(4,6)}-${o.slice(0,4)}`:""}function Na(e){return e.timestamp??e.time??e.datetime??e.date_time??e.dateTime}function Td(e){if(e==null||e==="")return null;let o=String(e).trim(),r=o.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i);if(!r)return null;let n=/(?:Z|[+-]\d{2}:?\d{2})$/i.test(o),a=Number(r[1]),i=Number(r[2]),l=Number(r[3]),p=Number(r[4]),u=Number(r[5]||"0"),c=Number(r[6]||"0");if([a,i,l,p,u,c].some(f=>Number.isNaN(f)))return null;let g=n?new Date(o):new Date(a,i-1,l,p,u,c,0);if(Number.isNaN(g.getTime()))return null;let y=g.getFullYear(),b=g.getMonth()+1,v=g.getDate(),m=g.getHours();return y<2020||y>2099||b<1||b>12||v<1||v>31?null:{dateKey:y*1e4+b*100+v,hour:m}}function Ed(e){if(e==null||e==="")return null;let o=Number(String(e).trim().replace(",","."));return!Number.isFinite(o)||o<0||o>=4294967295?null:Math.round(o)}function mo(e,o,r=null){for(let n of o){if(!Object.prototype.hasOwnProperty.call(e,n))continue;let a=Ed(e[n]);if(a!==null)return a}return r}function Ra(e,o){return mo(e,o)!==null}function Cd(e){let o=qd(e.date_key??e.dateKey??e.date??e.from??Na(e));if(!o)return null;let r=mo(e,mt.electricalInput),n=mo(e,mt.heatpumpHeatOutput);if(r===null||n===null)return null;let a=mo(e,mt.heatingInput,r),i=mo(e,mt.coolingInput,0),l=mo(e,mt.heatpumpCoolingOutput,0),p=mo(e,mt.boilerHeatOutput,0),u=mo(e,mt.systemHeatOutput,n+p),c=Ra(e,mt.heatingInput)||Ra(e,mt.coolingInput)||Ra(e,mt.heatpumpCoolingOutput)||Ra(e,mt.systemHeatOutput);return[a,i,l,p,u].some(g=>g===null)?null:{dateKey:o,electricalInputWh:r,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:n,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:p,systemHeatOutputWh:u,hasFullImportFields:c}}function Py(e){let o=Ed(e.hour??e.hour_of_day??e.hourOfDay);if(o!==null&&o>=0&&o<=23)return o;let r=Na(e);if(r){let n=String(r).trim(),a=Td(n);if(a)return a.hour;let i=new Date(n);if(!Number.isNaN(i.getTime()))return i.getHours();let l=n.match(/^(\d{1,2})(?::\d{2})/);if(l){let p=Number(l[1]);if(p>=0&&p<=23)return p}}return-1}function Ny(e){let o=Cd(e),r=Py(e);return!o||r<0||r>23?null:{...o,hour:r}}function Oy(e){let o=[],r=[],n="",a=!1,i=()=>{r.push(n),n=""},l=()=>{i(),r.some(u=>String(u).trim()!=="")&&o.push(r),r=[]};for(let u=0;u<e.length;u+=1){let c=e[u];a?c==='"'&&e[u+1]==='"'?(n+='"',u+=1):c==='"'?a=!1:n+=c:c==='"'?a=!0:c===","?i():c===`
`?l():c!=="\r"&&(n+=c)}if((n||r.length)&&l(),!o.length)return[];let p=o.shift().map(u=>String(u||"").trim());return o.map(u=>{let c={};return p.forEach((g,y)=>{g&&(c[g]=u[y]??"")}),c})}function Pa(e){return!e||typeof e!="object"||Array.isArray(e)||!e.summary||typeof e.summary!="object"||Array.isArray(e.summary)?e:{...e.summary,...e}}function Dy(e){let o=[],r=[];if(Array.isArray(e)){let l=e.map(Pa);return yd(l)?r.push(...l):o.push(...l),{dailyRows:o,hourlyRows:r,source:"JSON"}}let n=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return o.push(...a.map(Pa)),r.push(...i.map(Pa)),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(p=>{r.push(Pa({...p,date:p.date??l.date}))})}),{dailyRows:o,hourlyRows:r,source:n}}function Ly(e,o){let r=String(o||"").trim();if(!r)throw new Error("Bestand is leeg.");let n=[],a=[],i="";if(r[0]==="{"||r[0]==="["){let m=Dy(JSON.parse(r));n=m.dailyRows,a=m.hourlyRows,i=m.source}else{let m=Oy(r);yd(m)||String(e||"").toLowerCase().includes("hour")?a=m:n=m,i="CSV"}let l=new Map,p=new Map,u=0,c=0;n.forEach(m=>{let f=Cd(m);if(!f){c+=1;return}l.has(f.dateKey)&&(u+=1),l.set(f.dateKey,f)}),a.forEach(m=>{let f=Ny(m);if(!f){c+=1;return}let w=`${f.dateKey}:${f.hour}`;p.has(w)&&(u+=1),p.set(w,f)});let g=[...l.values()].sort((m,f)=>m.dateKey-f.dateKey),y=[...p.values()].sort((m,f)=>m.dateKey-f.dateKey||m.hour-f.hour);if(!g.length&&!y.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");let b=[...g.map(m=>m.dateKey),...y.map(m=>m.dateKey)].sort((m,f)=>m-f),v=b.length?`${fd(b[0])} t/m ${fd(b[b.length-1])}`:"";return{records:g,hourRecords:y,source:i,range:v,duplicates:u,invalid:c}}function Fy(e){return e.hasFullImportFields?["day",e.dateKey,e.electricalInputWh,e.heatingInputWh,e.coolingInputWh,e.heatpumpHeatOutputWh,e.heatpumpCoolingOutputWh,e.boilerHeatOutputWh,e.systemHeatOutputWh].join("|"):["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function Iy(e){let o=new Map;return e.forEach(r=>{o.has(r.dateKey)||o.set(r.dateKey,new Map),o.get(r.dateKey).set(r.hour,r)}),[...o.entries()].sort((r,n)=>r[0]-n[0]).map(([r,n])=>{let a=0,i=[],l=[...n.values()].some(p=>p.hasFullImportFields);for(let p=0;p<24;p+=1){let u=n.get(p);u&&(a|=1<<p),l?i.push(u?.electricalInputWh??0,u?.heatingInputWh??0,u?.coolingInputWh??0,u?.heatpumpHeatOutputWh??0,u?.heatpumpCoolingOutputWh??0,u?.boilerHeatOutputWh??0,u?.systemHeatOutputWh??0):i.push(u?.electricalInputWh??0,u?.heatpumpHeatOutputWh??0,u?.boilerHeatOutputWh??0)}return["hourday",r,a,...i].join("|")})}function kd(e){let o=new URLSearchParams;return o.set("records",[Ay,...e].join(`
`)),t.energyHistoryCsrfToken&&o.set("csrf_token",t.energyHistoryCsrfToken),o}function _y(e){let o=[],r=[];return e.forEach(n=>{let a=[...r,n];r.length&&String(kd(a)).length>Hy?(o.push(r),r=[n]):r=a}),r.length&&o.push(r),o}function Wy(e){let o=[];e.written>0&&o.push(`${e.written} dagrecords`),e.hourWritten>0&&o.push(`${e.hourWritten} uurdagen`);let r=o.length?`${o.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",n=[];return e.duplicates>0&&n.push(`${e.duplicates} al aanwezig`),e.skipped>0&&n.push(`${e.skipped} overgeslagen`),e.invalid>0&&n.push(`${e.invalid} ongeldig`),e.unsupported>0&&n.push(`${e.unsupported} onbekend`),n.length?`${r} (${n.join(", ")}.)`:r}async function Vy(e){let o=await fetch(`${De()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:kd(e)}),r=await o.text(),n={};try{n=r?JSON.parse(r):{}}catch{n={}}if(!o.ok||n.ok===!1){let a=n.error?String(n.error):"";throw new Error(My[a]||a||`HTTP ${o.status}`)}return n}function xd(e){let o=String(e||"").split(/\r?\n/).find(r=>r.startsWith("@csrf|"));return o?o.slice(6):""}async function By(){if(wr())return;let e=await fetch(`${De()}/energy/history?meta=1`,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let o=xd(await e.text());if(!o)throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");t.energyHistoryCsrfToken=o}function Ky(e,o){t.energyHistoryImportProgressPercent=o>0?Math.min(99,Math.max(1,Math.round(e/o*100))):0,d()}async function jy(e){if(Bs(),!e){d();return}t.energyHistoryImportFileName=e.name||"exportbestand";try{let o=Ly(e.name||"",await e.text());t.energyHistoryImportRecords=o.records,t.energyHistoryImportHourRecords=o.hourRecords,t.energyHistoryImportSource=o.source,t.energyHistoryImportRange=o.range,t.energyHistoryImportDuplicateCount=o.duplicates,t.energyHistoryImportInvalidCount=o.invalid}catch(o){t.energyHistoryImportError=`Bestand kon niet worden gelezen. ${o.message}`}d()}function $d(){let e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{let o=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),jy(o)},{once:!0}),document.body.appendChild(e),e.click()}async function Ad(){if(t.energyHistoryImportBusy)return;let e=[...t.energyHistoryImportRecords.map(Fy),...Iy(t.energyHistoryImportHourRecords)];if(!e.length){t.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",d();return}if(t.energyHistoryImportBusy=!0,t.energyHistoryImportError="",t.energyHistoryImportNotice="",t.energyHistoryImportProgressPercent=1,d(),wr()){let n=new Set(t.energyHistoryImportHourRecords.map(a=>a.dateKey)).size;t.energyHistoryImportBusy=!1,t.energyHistoryImportProgressPercent=0,t.energyHistoryImportNotice=`Preview: ${t.energyHistoryImportRecords.length} dagrecords en ${n} uurdagen zouden worden ge\xEFmporteerd.`,d();return}let o={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0},r=0;try{await By();let n=_y(e);for(let a of n){let i=await Vy(a);o.written+=Number(i.written||0),o.hourWritten+=Number(i.hour_written||0),o.duplicates+=Number(i.duplicates||0),o.skipped+=Number(i.skipped||0),o.invalid+=Number(i.invalid||0),o.unsupported+=Number(i.unsupported||0),r+=a.length,Ky(r,e.length)}t.energyHistoryImportProgressPercent=100,t.energyHistoryImportNotice=Wy(o),t.energyHistoryImportError="",t.energyHistoryRaw="",t.energyHistorySignature="",t.energyHistoryLastFetchAt=0,await wn({forceMissing:!0,forceEnergyHistory:!0})}catch(n){t.energyHistoryImportError=`Importeren mislukt. ${n.message}`}finally{t.energyHistoryImportBusy=!1,t.energyHistoryImportProgressPercent=0,d()}}function Uy(){return Nt()||t.appView==="settings"&&t.systemModal==="history-storage"}function Oa(){t.settingsBackupDraft=null,t.settingsBackupError="",t.settingsBackupBusy=!1}function Gy(){return{device:Fe(),installation:dt(),topology:typeof J=="function"?J():"",firmware_version:ie(),firmware_channel:String(T("firmwareUpdateChannel")||T("releaseChannelText")||"").trim()}}function Hd(e){let o=R[e];if(!o)return;if(e==="setupComplete")return Xn();let r=T(e);if(r===""||r===null||r===void 0)return;if(o.domain==="switch"||o.domain==="binary_sensor")return x(e);if(o.domain==="number"){let a=$e(r);return Number.isNaN(a)?void 0:a}return o.domain==="time"?St(r)||void 0:o.domain==="datetime"?Ke(r)||void 0:String(r||"").trim()||void 0}function Md(){let e={};return zt.forEach(o=>{let r={};o.keys.forEach(n=>{let a=Hd(n);a!==void 0&&(r[n]=a)}),e[o.id]=r}),{schema_version:Ci,exported_at:new Date().toISOString(),source:Gy(),settings:e}}function zy(e=Md()){let o=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${o}.json`}function Qy(e){let o=R[e];return o?.name?o.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function bd(e,o){if(o==null||o==="")return"\u2014";let r=R[e];return r?r.domain==="number"?K(e,o):r.domain==="time"?St(o)?.slice(0,5)||"\u2014":r.domain==="datetime"?Ke(o)||"\u2014":r.domain==="switch"||r.domain==="binary_sensor"?o?"Aan":"Uit":String(o).trim()||"\u2014":String(o).trim()||"\u2014"}function Yy(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function Ks(e){let o=e?.settings&&typeof e.settings=="object"?e.settings:{},r=e?.source&&typeof e.source=="object"?e.source:{},n=vc,a=0,i=0,l=0,p=0,u=0,c=0,g=0,y=0,b=zt.map(v=>{let m=o[v.id]&&typeof o[v.id]=="object"?o[v.id]:{},f=0,w=0,S=0,q=0,E=0,k=0,M=0,V=v.keys.map(F=>{let H=!!R[F]?.optional,G=Object.prototype.hasOwnProperty.call(m,F),X=G?m[F]:void 0,de=Hd(F),se=h(F),N=G?bd(F,X):H?"Niet op huidige installatie":"Ontbreekt in backup",Y=se?bd(F,de):H?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie",P="same";return!G&&H?P="optional-missing":G?se?JSON.stringify(de)!==JSON.stringify(X)&&(P="different"):P=H?"optional-unavailable":"current-missing":P="missing",se&&(M+=1,y+=1),P!=="same"&&(k+=1,g+=1),H?(E+=1,G?(S+=1,l+=1):(q+=1,p+=1)):G?(f+=1,a+=1):(w+=1,i+=1),{key:F,label:Qy(F),optional:H,hasBackupValue:G,backupDisplay:N,currentDisplay:Y,status:P,statusLabel:Yy(P)}});return c+=v.keys.filter(F=>!R[F]?.optional).length,{id:v.id,label:v.label,present:f,currentPresent:M,requiredTotal:v.keys.filter(F=>!R[F]?.optional).length,optionalTotal:E,optionalPresent:S,optionalMissing:q,requiredMissing:w,total:v.keys.length,differenceCount:k,rows:V}});return Object.entries(o).forEach(([v,m])=>{if(!zt.some(f=>f.id===v)){u+=1;return}!m||typeof m!="object"||Object.keys(m).forEach(f=>{n.has(f)||(u+=1)})}),{source:r,sectionSummaries:b,requiredPresent:a,requiredMissing:i,requiredAvailable:c,optionalPresent:l,optionalMissing:p,unknown:u,differenceCount:g,currentPresent:y,requiredTotal:c,total:Qt.length}}function Jy(e,o=""){let r=JSON.parse(e);if(!r||typeof r!="object")throw new Error("Backupbestand bevat geen JSON-object.");let n=Number(r.schema_version??r.schemaVersion??0);if(!Number.isInteger(n)||n<Ci)throw new Error("Onbekende backupversie.");let a=r.settings&&typeof r.settings=="object"?r.settings:{},i={schema_version:n,exported_at:String(r.exported_at||""),source:r.source&&typeof r.source=="object"?r.source:{},settings:a,file_name:o||""};return i.summary=Ks(i),i}async function Zy(){t.settingsBackupBusy=!0,t.controlError="",t.controlNotice="",d();try{return await L(Qt,"all"),Md()}finally{t.settingsBackupBusy=!1,d()}}async function Rd(){if(!t.settingsBackupBusy)try{let e=await Zy();Oc(zy(e),e),t.controlNotice="Settings-backup gedownload.",d()}catch(e){t.controlError=`Backup exporteren mislukt. ${e.message}`,d()}}async function Pd(e){if(!(!e||t.settingsBackupBusy)){t.settingsBackupBusy=!0,t.settingsBackupDraft=null,t.settingsBackupError="",t.controlError="",t.controlNotice="",d();try{let o=await e.text();await L(Qt,"all");let r=Jy(o,e.name||"");t.settingsBackupDraft=r,t.systemModal="settings-backup-restore"}catch(o){t.settingsBackupDraft=null,t.settingsBackupError=`Backupbestand kon niet worden gelezen. ${o.message}`}finally{t.settingsBackupBusy=!1,d()}}}async function Nd(){let e=t.settingsBackupDraft;if(!e||t.settingsBackupBusy)return;t.settingsBackupBusy=!0,t.settingsBackupError="",t.controlError="",t.controlNotice="",d();let o=[],r=[],n=!1;try{await L(Qt,"all");for(let i of zt){let l=e.settings?.[i.id]&&typeof e.settings[i.id]=="object"?e.settings[i.id]:{};for(let p of i.keys){if(!Object.prototype.hasOwnProperty.call(l,p)){r.push(p);continue}let u=l[p];if(p==="setupComplete"){n=u===!0;continue}if(p==="openquattEnabled")continue;if(!R[p]||!h(p)){r.push(p);continue}try{await po(p,u),o.push(p)}catch{r.push(p)}}}let a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&h("openquattEnabled")&&(await po("openquattEnabled",a),o.push("openquattEnabled")),n&&R.apply){let i=await fetch(j("button","Complete setup","press"),{method:"POST"});if(!i.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${i.status}).`);o.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&r.push("setupComplete");t.systemModal="settings-backup-success",Oa(),t.controlNotice=`Backup hersteld (${o.length} toegepast${r.length?`, ${r.length} overgeslagen`:""}).`,await ce()}catch(a){t.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{t.settingsBackupBusy=!1,d()}}function wr(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function js(e={}){if(!ct()){let n=!!(t.trendHistoryRaw||t.trendHistoryError);return t.trendHistoryRaw="",t.trendHistoryError="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=0,n}if(wr())return!1;let o=e.force===!0,r=Date.now();if(!o&&t.trendHistoryFetchPromise)return t.trendHistoryFetchPromise;if(!o&&(t.trendHistoryRaw||t.trendHistoryError)&&r-Number(t.trendHistoryLastFetchAt||0)<In)return!1;t.trendHistoryFetchPromise=(async()=>{let n=yn(t.trendWindowHours||wt);n!==t.trendWindowHours&&yr(n);let a=await fetch(`${De()}/trends/history?hours=${encodeURIComponent(String(n))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let i=await a.text(),l=i.split(/\r?\n/),p=Number.NaN,u=i;l.length&&l[0].startsWith("@now|")&&(p=Number(l[0].slice(5)),u=l.slice(1).join(`
`));let c=`${n}|${u.length}|${u.slice(0,120)}|${u.slice(-120)}`,g=Number.isFinite(t.trendHistoryNowMs),b=Number.isFinite(p)?!g||t.trendHistoryNowMs!==p:g,v=u!==t.trendHistoryRaw||t.trendHistoryError!==""||t.trendHistorySignature!==c||b;return t.trendHistoryRaw=u,t.trendHistoryError="",t.trendHistorySignature=c,t.trendHistoryNowMs=Number.isFinite(p)?p:Number.NaN,t.trendHistoryLastFetchAt=Date.now(),v})();try{return await t.trendHistoryFetchPromise}catch(n){let a=`Trendhistorie kon niet worden geladen. ${n.message}`,i=t.trendHistoryError!==a;return t.trendHistoryError=a,t.trendHistoryRaw="",t.trendHistorySignature="",t.trendHistoryNowMs=Number.NaN,t.trendHistoryLastFetchAt=Date.now(),i}finally{t.trendHistoryFetchPromise=null}}async function go(e={}){if(!h("lifetimeEnergyHistoryEnabled")&&!wr()){let a=!!(t.energyHistoryRaw||t.energyHistoryError);return t.energyHistoryRaw="",t.energyHistoryError="",t.energyHistorySignature="",t.energyHistoryNowMs=Number.NaN,t.energyHistoryLastFetchAt=0,t.energyHistoryRequestQuery="",t.energyHistoryFetchQuery="",t.energyHistoryCsrfToken="",a}let o=e.force===!0,r=Date.now(),n=e.metaOnly===!0?"?meta=1":typeof bn=="function"?bn():"";if(!o&&t.energyHistoryFetchPromise&&t.energyHistoryFetchQuery===n)return t.energyHistoryFetchPromise;if(!o&&t.energyHistoryRequestQuery===n&&(t.energyHistoryRaw||t.energyHistoryError)&&r-Number(t.energyHistoryLastFetchAt||0)<In)return!1;t.energyHistoryFetchQuery=n,t.energyHistoryFetchPromise=(async()=>{let a=async f=>{let w=await fetch(`${De()}/energy/history${f}`,{cache:"no-store"});if(!w.ok)throw new Error(`HTTP ${w.status}`);return w.text()},i=n,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof bn=="function"){let f=t.energyHistoryRaw;t.energyHistoryRaw=l;let w=bn();t.energyHistoryRaw=f,w&&w!==i&&(i=w,l=await a(i))}let p=l.split(/\r?\n/),u=xd(l)||t.energyHistoryCsrfToken,c=Number.NaN;p.forEach(f=>{f.startsWith("@now|")&&(c=Number(f.slice(5)))});let g=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,y=Number.isFinite(t.energyHistoryNowMs),v=Number.isFinite(c)?!y||t.energyHistoryNowMs!==c:y,m=l!==t.energyHistoryRaw||t.energyHistoryError!==""||t.energyHistorySignature!==g||v||u!==t.energyHistoryCsrfToken;return t.energyHistoryRaw=l,t.energyHistoryError="",t.energyHistorySignature=g,t.energyHistoryNowMs=Number.isFinite(c)?c:Number.NaN,t.energyHistoryLastFetchAt=Date.now(),t.energyHistoryRequestQuery=i,t.energyHistoryCsrfToken=u,m})();try{return await t.energyHistoryFetchPromise}catch(a){let i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=t.energyHistoryError!==i;return t.energyHistoryError=i,t.energyHistoryRaw="",t.energyHistorySignature="",t.energyHistoryNowMs=Number.NaN,t.energyHistoryLastFetchAt=Date.now(),t.energyHistoryRequestQuery=n,t.energyHistoryCsrfToken="",l}finally{t.energyHistoryFetchPromise=null}}Su({refreshEnergyHistoryData:go,refreshSettingsStorageState:wn,refreshTrendHistoryData:js,refreshTrendHistoryMetadata:vd,shouldRefreshSettingsStorageForCurrentSurface:Uy});function Od(){return O("controlModeLabel","").toLowerCase().includes("standby")}function xt(e,o){e&&e.innerHTML!==o&&(e.innerHTML=o)}function gt(e,o,r){return!e||e.dataset.renderSignature===o?!1:(e.outerHTML=r,!0)}function Xy([e,o]){let r=Hi(o);if(!h(o)&&Number.isNaN(r))return"";let n=Ai(o)?Ze(o):O(o);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(n)}</strong>
      </div>
    `}function ev(e){let o=e.rows.map(Xy).filter(Boolean).join("");return o?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${o}
        </div>
      </section>
    `:""}function tv(e){let o=e.groups.map(ev).filter(Boolean).join("");return o?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${o}
        </div>
      </section>
    `:""}function ov(e){let o=e.categories.map(tv).filter(Boolean).join("");return o?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${o}
        </div>
      </article>
    `:""}function Qs(){let e=zn.map(ov).filter(Boolean),o=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:o}}function _d(e=Qs()){return Ce(e)}function Wd(e=Qs()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(_d(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}var Fa=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],Vd=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],rv=new Set(["day","week","month","year"]),nv=["Zo","Ma","Di","Wo","Do","Vr","Za"];function Ie(e){let o=String(e||"").trim();return Vd.some(r=>r.id===o)?o:"day"}function Ys(e){let o=Ie(e);t.energyHistoryView!==o&&(t.energyHistoryView=o,t.energyHistoryLastFetchAt=0,d(),Bd())}function Bd(){typeof go=="function"&&go({force:!0}).then(e=>{e&&d()})}function Er(e){return rv.has(Ie(e))}function Ia(){let e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Sn(){let e=String(t.energyHistoryRaw||""),o={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0,dayPartitionAvailable:!1,dayStorageKb:0,dayWriteCount:0,dayLastWriteTimestampS:0};return e.split(/\r?\n/).forEach(r=>{if(!r.startsWith("@bounds|")&&!r.startsWith("@day_retention|")&&!r.startsWith("@hour_retention|"))return;let n=r.split("|");r.startsWith("@bounds|")?(o.storedDayCount=Number(n[1])||0,o.oldestDateKey=Number(n[2])||null,o.newestDateKey=Number(n[3])||null,o.hourStoredDayCount=Number(n[4])||0,o.hourOldestDateKey=Number(n[5])||null,o.hourNewestDateKey=Number(n[6])||null):r.startsWith("@day_retention|")?(o.dayPartitionAvailable=Number(n[1])===1,o.dayStorageKb=Number(n[2])||0,o.dayWriteCount=Number(n[3])||0,o.dayLastWriteTimestampS=Number(n[4])||0):r.startsWith("@hour_retention|")&&(o.hourRequestedRetentionDays=Number(n[1])||0,o.hourSlotCount=Number(n[2])||0,o.hourPartitionAvailable=Number(n[3])===1,o.hourRecordCount=Number(n[4])||0,o.hourWriteCount=Number(n[5])||0,o.hourStorageKb=Number(n[6])||0,o.hourLastWriteTimestampS=Number(n[7])||0)}),o}function Js(){let e=String(t.energyHistoryRaw||""),o=null;return e.split(/\r?\n/).forEach(r=>{let n=Jd(r);n&&(o=n.dateKey)}),o}function av(e=[],o=!0){let r=Js(),n=Sn(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(n.newestDateKey))&&a.push(Number(n.newestDateKey)),Number.isFinite(Number(r))&&a.push(Number(r)),o&&_a().forEach(i=>{let l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):Ia()}function nt(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Kd(e,o,r){return new Date(e,o-1,r,12,0,0)}function jd(e,o){return new Date(e,o,0).getDate()}function Dd(e){return String(e).padStart(2,"0")}function Us(e){let o=re(e);return o?`${o.year}-${Dd(o.month)}-${Dd(o.day)}`:""}function Ud(e){let o=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!o)return null;let r=Number(o[1]),n=Number(o[2]),a=Number(o[3]),i=Kd(r,n,a);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:re(nt(i))}function Gd(e,o){return Number(e)*100+Number(o)}function zs(e){return Gd(e.getFullYear(),e.getMonth()+1)}function qr(e){let o=Number(e);if(!Number.isFinite(o)||o<=0)return null;let r=Math.floor(o/100),n=o%100;return r<2020||n<1||n>12?null:{key:o,year:r,month:n,date:new Date(r,n-1,1,12,0,0)}}function iv(e){let o=String(e||"").trim(),r=/^(\d{4})-(\d{2})$/.exec(o);return qr(r?Gd(Number(r[1]),Number(r[2])):o)}function zd(e,o){let r=qr(e);if(!r)return"";let n=new Date(r.year,r.month-1+Number(o||0),1,12,0,0);return String(zs(n))}function qn(e){let o=new Date(e.getTime()),r=o.getDay(),n=r===0?-6:1-r;return o.setDate(o.getDate()+n),o.setHours(12,0,0,0),o}function Tr(e,o){let r=new Date(e.getTime());return r.setDate(r.getDate()+o),r.setHours(12,0,0,0),r}function Ld(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function Qd(e){let o=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=(o.getUTCDay()+6)%7;o.setUTCDate(o.getUTCDate()-r+3);let n=o.getUTCFullYear(),a=new Date(Date.UTC(n,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((o-a)/(10080*60*1e3)),year:n}}function Fd(e){return nt(qn(e))}function sv(e){let r=Ud(e)||re(e);if(!r)return null;let n=qn(r.date);return re(nt(n))}function Yd(e){let o=re(e);if(!o)return"Week";let r=qn(o.date),n=Tr(r,6);return`Week ${Qd(r).week} (${Ld(r)} - ${Ld(n)})`}function re(e){let o=Number(e);if(!Number.isFinite(o)||o<=0)return null;let r=Math.floor(o/1e4),n=Math.floor(o/100)%100,a=o%100;return r<2020||n<1||n>12||a<1||a>31?null:{key:o,year:r,month:n,day:a,date:new Date(r,n-1,a,12,0,0)}}function Kt(e,o="day"){let r=re(e);return r?o==="weekday"?nv[r.date.getDay()]||"":o==="month"?r.date.toLocaleDateString("nl-NL",{month:"short"}):o==="year"?String(r.year):r.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function Ko(e){let o=A(e);return!Number.isFinite(o)||o<0?null:Math.round(o*1e3)}function lv(e){let o=Number(e);return Number.isFinite(o)&&o>=0?o:null}function Zs(e,o=0){let r={};return Fa.forEach((n,a)=>{r[n]=lv(e[o+a])}),r}function cv(e){let o=String(e||"").trim();if(!o||o.startsWith("@"))return null;let r=o.split("|");if(r.length<10)return null;let n=Number(r[0]),a=Number(r[1]),i=Number(r[2]),l=re(a);return!Number.isFinite(n)||!l?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...Zs(r,3)}}function Jd(e){let o=String(e||"").trim();if(!o.startsWith("@current|"))return null;let r=o.split("|");if(r.length<9)return null;let n=Number(r[1]),a=re(n);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:n,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...Zs(r,2)}:null}function uv(e){let o=String(e||"").trim();if(!o.startsWith("@hour|"))return null;let r=o.split("|");if(r.length<11)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=re(a);return!Number.isFinite(n)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...Zs(r,4)}}function pv(){let e=Js()||Ia(),o=re(e);if(!o)return null;let r={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:o.year,month:o.month,day:o.day,partial:!0,source:"sensors",electricalInputWh:Ko("electricalEnergyDaily"),heatingInputWh:Ko("heatingElectricalEnergyDaily"),coolingInputWh:Ko("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:Ko("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:Ko("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:Ko("boilerThermalEnergyDaily"),systemHeatOutputWh:Ko("systemThermalEnergyDaily")};return Fa.some(n=>Number.isFinite(r[n]))?r:null}function Tn(e,o){let r=Number(e?.[o]);return Number.isFinite(r)&&r>=0?r:0}function En(){let e=new Map;String(t.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{let l=cv(i)||Jd(i);if(!l)return;let p=e.get(l.dateKey);(!p||l.sequence>=p.sequence)&&e.set(l.dateKey,l)});let r=pv();r&&e.set(r.dateKey,r);let n=new Set(e.keys()),a=new Map;return _a().forEach(i=>{if(n.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){let p=re(i.dateKey);if(!p)return;l=jo({dateKey:p.key,year:p.year,month:p.month,day:p.day,label:Kt(p.key),sortKey:p.key,source:"hour-summary"}),l.tooltipLabel=`${Kt(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}Uo(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function _a(){let e=new Map;return String(t.energyHistoryRaw||"").split(/\r?\n/).forEach(r=>{let n=uv(r);if(!n)return;let a=`${n.dateKey}:${n.hour}`,i=e.get(a);(!i||n.sequence>=i.sequence)&&e.set(a,n)}),[...e.values()].sort((r,n)=>r.sortKey-n.sortKey)}function dv(e){return _a().filter(o=>o.dateKey===Number(e))}function Sr(e,o){return e.reduce((r,n)=>r+Tn(n,o),0)}function Zd(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((o,r)=>o+Tn(e,r),0)}function mv(e){return Tn(e,"electricalInputWh")+Zd(e)}function La(e,o){let r=Number(e),n=Number(o);return!Number.isFinite(r)||!Number.isFinite(n)||n<=0?"\u2014":(r/n).toFixed(2)}function rt(e,o=1){let r=Number(e);return Number.isFinite(r)?Math.abs(r)>=999500?`${(r/1e6).toFixed(2)} MWh`:Math.abs(r)<1e3?`${Math.round(r)} Wh`:`${(r/1e3).toFixed(o)} kWh`:"\u2014"}function jo({dateKey:e,year:o,month:r,day:n,hour:a=null,label:i,tooltipLabel:l="",sortKey:p,source:u="bucket"}){return{sequence:0,dateKey:e,year:o,month:r,day:n,hour:a,label:i,tooltipLabel:l,sortKey:p??e,partial:!1,source:u,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function Uo(e,o){return Fa.forEach(r=>{e[r]+=Tn(o,r)}),e.partial=e.partial||!!o?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(o?.sequence||0)),e}function gv(e){let o=new Map;return e.forEach(r=>{o.set(r.dateKey,r)}),o}function Xd(e,o){let r=Ie(e);if(r==="day"){let n=Ud(o)||re(o);return n?String(n.key):""}if(r==="week"){let n=sv(o);return n?String(n.key):""}if(r==="month"){let n=iv(o);return n?String(n.key):""}if(r==="year"){let n=Number(o);return Number.isInteger(n)&&n>=2020&&n<=2200?String(n):""}return""}function Wa(e,o){let r=Ie(o),n=re(av(e,!0)),a=Sn(),i=_a(),l=[...e.map(v=>v.dateKey),...i.map(v=>v.dateKey)].filter(v=>Number.isFinite(Number(v)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));let p=l.length?Math.min(...l.map(Number)):n?.key,c=(p?re(p):n)?.date||n?.date||new Date,g=n?.date||new Date,y=n?.key||Ia(),b=y;return r==="week"?(y=Fd(c),b=Fd(g)):r==="month"?(y=zs(c),b=zs(g)):r==="year"?(y=c.getFullYear(),b=g.getFullYear()):(y=nt(c),b=nt(g)),Number(y)>Number(b)&&(y=b),{min:String(y),max:String(b)}}function em(e,o){let r=Number(e);return Number.isFinite(r)?r<Number(o.min)?String(o.min):r>Number(o.max)?String(o.max):String(e):String(o.max)}function hv(e,o,r=Wa(e,o)){let n=Ie(o),a=t.energyHistoryPeriodSelection?.[n],i=Xd(n,a);return em(i||r.max,r)}function fv(e,o){let r=Ie(e),n=[],a=0;if(r==="week"){let i=String(o.max);for(;Number(i)>=Number(o.min)&&a<6e3;){let l=re(i);n.push({value:i,label:Yd(i),group:l?String(Qd(l.date).year):""}),i=l?String(nt(Tr(l.date,-7))):"",a+=1}return n}if(r==="month"){let i=String(o.max);for(;Number(i)>=Number(o.min)&&a<1200;){let l=qr(i);if(!l)break;n.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=zd(i,-1),a+=1}return n}if(r==="year")for(let i=Number(o.max);i>=Number(o.min);i-=1)n.push({value:String(i),label:String(i)});return n}function Va(e,o){let r=Ie(o);if(!Er(r))return{view:r,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};let n=Wa(e,r),a=hv(e,r,n);return{view:r,selectedValue:a,minValue:n.min,maxValue:n.max,canPrevious:Number(a)>Number(n.min),canNext:Number(a)<Number(n.max),isNow:Number(a)===Number(n.max),options:fv(r,n)}}function bv(e,o){let r=Ie(o);if(!Er(r))return{from:"",to:"",hours:"0"};let n=Va(e,r);if(r==="day")return{from:n.selectedValue,to:n.selectedValue,hours:"1"};if(r==="week"){let a=re(n.selectedValue);if(!a)return{from:"",to:"",hours:"0"};let i=qn(a.date),l=Tr(i,6);return{from:String(nt(i)),to:String(nt(l)),hours:"0"}}if(r==="month"){let a=qr(n.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+jd(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(r==="year"){let a=Number(n.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function yv(){if(!String(t.energyHistoryRaw||"").trim())return"?meta=1";let e=En(),o=bv(e,t.energyHistoryView||"day"),r=new URLSearchParams;o.from&&r.set("from",o.from),o.to&&r.set("to",o.to),r.set("hours",o.hours);let n=r.toString();return n?`?${n}`:""}hd(yv);function Cn(e,o){let r=Ie(e);if(!Er(r))return;let n=En(),a=Wa(n,r),i=Xd(r,o),l=em(i||a.max,a);t.energyHistoryPeriodSelection={...t.energyHistoryPeriodSelection,[r]:l},t.energyHistoryLastFetchAt=0,d(),Bd()}function Xs(e,o){let r=Ie(e);if(!Er(r))return;let n=En(),a=Va(n,r),i=Number(o)<0?-1:1,l=a.selectedValue;if(r==="day"){let p=re(a.selectedValue);l=p?String(nt(Tr(p.date,i))):l}else if(r==="week"){let p=re(a.selectedValue);l=p?String(nt(Tr(p.date,i*7))):l}else r==="month"?l=zd(a.selectedValue,i):r==="year"&&(l=String(Number(a.selectedValue)+i));Cn(r,l)}function el(e){let o=Ie(e);if(!Er(o))return;let r=En(),n=Wa(r,o);Cn(o,n.max)}function vv(e,o,r=Va(e,o)){let n=Ie(o),a=gv(e);if(!e.length&&n==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(n==="day"){let p=re(r.selectedValue);if(!p)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=dv(p.key);if(u.length){let v=new Map(u.map(f=>[f.hour,f])),m=[];for(let f=0;f<24;f+=1){let w=String(f),S=`${p.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(f).padStart(2,"0")}:00 - ${String((f+1)%24).padStart(2,"0")}:00`,q=jo({dateKey:p.key,year:p.year,month:p.month,day:p.day,hour:f,label:w,tooltipLabel:S,sortKey:f,source:"hour"}),E=v.get(f);E&&Uo(q,E),m.push(q)}return{buckets:m,title:"Dag",detail:`${p.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}let c=a.get(p.key),g=Js()||Ia(),y=p.key===g?"Vandaag":Kt(p.key),b=jo({dateKey:p.key,year:p.year,month:p.month,day:p.day,label:y,sortKey:p.key,source:"day"});return c&&Uo(b,c),{buckets:[b],title:"Dag",detail:`${p.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(n==="week"){let p=re(r.selectedValue);if(!p)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=qn(p.date),c=[];for(let g=0;g<7;g+=1){let y=Tr(u,g),b=nt(y),v=re(b),m=jo({dateKey:b,year:v.year,month:v.month,day:v.day,label:Kt(b,"weekday"),sortKey:b}),f=a.get(b);f&&Uo(m,f),c.push(m)}return{buckets:c,title:"Week",detail:Yd(r.selectedValue)}}if(n==="month"){let p=qr(r.selectedValue);if(!p)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=jd(p.year,p.month),c=[];for(let g=1;g<=u;g+=1){let y=Kd(p.year,p.month,g),b=nt(y),v=jo({dateKey:b,year:p.year,month:p.month,day:g,label:String(g),sortKey:b}),m=a.get(b);m&&Uo(v,m),c.push(v)}return{buckets:c,title:"Maand",detail:p.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(n==="year"){let p=Number(r.selectedValue);if(!Number.isInteger(p))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=[];for(let c=1;c<=12;c+=1){let g=p*1e4+c*100+1,y=jo({dateKey:g,year:p,month:c,day:1,label:Kt(g,"month"),sortKey:c,source:"month"});e.filter(b=>b.year===p&&b.month===c).forEach(b=>Uo(y,b)),u.push(y)}return{buckets:u,title:"Jaar",detail:String(p)}}let i=new Map;e.forEach(p=>{i.has(p.year)||i.set(p.year,jo({dateKey:p.year*1e4+101,year:p.year,month:1,day:1,label:String(p.year),sortKey:p.year,source:"year"})),Uo(i.get(p.year),p)});let l=[...i.values()].sort((p,u)=>p.sortKey-u.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function wv(e){let o=Sr(e,"heatpumpHeatOutputWh"),r=Sr(e,"heatpumpCoolingOutputWh"),n=Sr(e,"boilerHeatOutputWh");return{electricalInputWh:Sr(e,"electricalInputWh"),heatingInputWh:Sr(e,"heatingInputWh"),coolingInputWh:Sr(e,"coolingInputWh"),heatOutputWh:o,coolingOutputWh:r,boilerOutputWh:n,outputWh:o+r+n}}function Sv(e){let o=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),r=Number(e.boilerOutputWh||0),n=o+r;return!Number.isFinite(n)||n<=0?Number.NaN:o/n*100}function Da(e,o,r=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(o)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </div>
    `}function Gs(e,o,r){let n=[];r.forEach(i=>{let l=String(i.group||""),p=n[n.length-1];(!p||p.label!==l)&&(p={label:l,options:[]},n.push(p)),p.options.push(i)});let a=n.some(i=>i.label)?n.map(i=>i.label?`
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
        <span>${s(o)}</span>
        <select
          class="oq-energy-history-period-input"
          data-oq-energy-history-period-input="${s(e.view)}"
        >
          ${a}
        </select>
      </label>
    `}function Id(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(Us(e.selectedValue))}"
            min="${s(Us(e.minValue))}"
            max="${s(Us(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?Gs(e,"Week",e.options):e.view==="month"?Gs(e,"Maand",e.options):e.view==="year"?Gs(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function qv(e){return Er(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${Id(e)}
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
          ${Id(e)}
        </div>
      `}function Tv(){let e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function Ev(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${Vd.map(o=>{let r=o.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${r?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(o.id)}"
              aria-selected="${r?"true":"false"}"
            >${s(o.label)}</button>
          `}).join("")}
      </div>
    `}function Cv(e){let o=Number(e.electricalInputWh||0),r=Number(e.heatOutputWh||0),n=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,o+r+n+a),p=c=>`${Math.max(0,Number(c||0)/l*100).toFixed(2)}%`,u=Sv(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${p(o)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${p(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${p(n)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${p(a)}"></span>
          <strong>${Number.isFinite(u)?`${Math.round(u)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(rt(r,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(rt(o,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(rt(n,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(rt(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function kv(e){let o=Math.max(1,Number(e||0)/1e3),r=Math.pow(10,Math.floor(Math.log10(o))),n=o/r;return(n<=1.5?1.5:n<=3?3:n<=6?6:10)*r*1e3}function xv(e){let o=Number(e);return Number.isFinite(o)?o>=999500?`${Number((o/1e6).toFixed(1))}`:`${Number((o/1e3).toFixed(1))}`:""}function $v(e){return e>=999500?"MWh":"kWh"}function Av(e){let c=Math.max(1e3,...e.map(mv)),g=kv(c),y=e.length?1218/e.length:1218,b=Math.max(6,Math.min(38,y*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:g,barSlot:y,barWidth:b,yOf:m=>26+(1-Math.min(1,Math.max(0,Number(m||0)/g)))*196}}function Hv(e){let o=La(e.heatpumpHeatOutputWh,e.heatingInputWh),r=La(e.heatpumpCoolingOutputWh,e.coolingInputWh),n=La(Zd(e),e.electricalInputWh);return[e.tooltipLabel||e.label||Kt(e.dateKey),`Elektrisch: ${rt(e.electricalInputWh,1)}`,`Warmtepomp warmte: ${rt(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${rt(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel: ${rt(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${o}`,`EER koelen: ${r}`,`Output / elektrisch: ${n}`].join(`
`)}function Mv(e,o=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;let r=Av(e),n=$v(r.axisMax),a=[0,.25,.5,.75,1].map(l=>r.axisMax*l),i=e.map((l,p)=>{let u=r.left+r.barSlot*p+r.barSlot/2,c=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}],g=r.height-r.bottom,y=c.map(f=>{let w=Tn(l,f.key);if(w<=0)return"";let S=w/r.axisMax*r.plotHeight;return g-=S,`
          <rect
            x="${(u-r.barWidth/2).toFixed(1)}"
            y="${g.toFixed(1)}"
            width="${r.barWidth.toFixed(1)}"
            height="${Math.max(1.4,S).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${f.className}"
          >
            <title>${s(`${l.label} \xB7 ${f.label}: ${rt(w,1)}`)}</title>
          </rect>
        `}).join(""),v=e.length<=12||p===0||p===e.length-1||p%3===0?`<text x="${u.toFixed(1)}" y="${r.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||Kt(l.dateKey))}</text>`:"",m=Hv(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(m)}" tabindex="0">
          <title>${s(m)}</title>
          <rect
            x="${(u-r.barWidth/2-4).toFixed(1)}"
            y="${r.top.toFixed(1)}"
            width="${(r.barWidth+8).toFixed(1)}"
            height="${r.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${y}
        </g>
        ${v}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(Ie(o))}" viewBox="0 0 ${r.width} ${r.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${r.width}" height="${r.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${r.left}" y="18" class="oq-energy-history-axis-unit">${s(n)}</text>
        ${a.map(l=>{let p=r.yOf(l);return`
            <line x1="${r.left}" y1="${p.toFixed(1)}" x2="${r.width-r.right}" y2="${p.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${r.left-10}" y="${p.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(xv(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function Rv(e=null){let o=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[o,"Ketel"]].map(([n,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(n)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function tl(){let e=En(),o=Ie(t.energyHistoryView),r=Va(e,o),n=vv(e,o,r),a=wv(n.buckets);return{records:e,buckets:n.buckets,viewModel:n,periodControl:r,summary:a,activeView:o}}function tm(e=tl()){return Ce({energyHistorySignature:t.energyHistorySignature||"",energyHistoryError:t.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,currentValues:Fa.map(o=>e.buckets[e.buckets.length-1]?.[o]??null)})}function om(e=tl()){let o=e.summary,r=e.buckets[0]?.dateKey?Kt(e.buckets[0].dateKey):"\u2014",n=e.buckets[e.buckets.length-1]?.dateKey?Kt(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(tm(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${Ev(e.activeView)}
          ${qv(e.periodControl)}
        </div>
        ${t.energyHistoryError?`<p class="oq-energy-history-error">${s(t.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${Da("Gemiddelde COP",La(o.heatOutputWh,o.heatingInputWh),`${s(r)} - ${s(n)}`)}
          ${Da("Elektrisch",rt(o.electricalInputWh,1),"verbruikt")}
          ${Da("Warmtepomp",rt(o.heatOutputWh+o.coolingOutputWh,1),"warmte en koeling")}
          ${Da("Cv-ketel",rt(o.boilerOutputWh,1),"thermisch")}
        </div>
        ${Cv(o)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${Mv(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${Rv(o)}
      </section>
    `}function ol(e){if(t.appView!=="results"||!t.root)return;let o=e.target.closest?.("[data-oq-energy-history-tip]"),r=o?.closest?.(".oq-energy-history-chart-wrap")||t.root.querySelector(".oq-energy-history-chart-wrap"),n=r?.querySelector(".oq-energy-history-tooltip");if(!o||!r||!n){n&&n.classList.remove("is-visible");return}let a=String(o.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){n.classList.remove("is-visible");return}n.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(c=>`<span>${s(c)}</span>`).join("")}
    `;let i=r.getBoundingClientRect();n.classList.add("is-visible");let l=n.getBoundingClientRect(),p=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),u=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));n.style.transform=`translate(${p.toFixed(0)}px, ${u.toFixed(0)}px)`}function rm(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(t.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${Wd()}
        </div>
      </section>
    `}function nm(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(t.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${om()}
        </div>
      </section>
    `}function Pv(){if(!t.root||t.appView!=="energy")return!1;let e=t.root.querySelector(".oq-overview-board"),o=e?e.querySelector(".oq-overview-energy"):null;if(!e||!o)return!1;let r=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==r&&(e.className=r);let n=Qs();return gt(o,_d(n),Wd(n))}function Nv(){if(!t.root||t.appView!=="results")return!1;let e=t.root.querySelector(".oq-overview-board"),o=e?e.querySelector(".oq-energy-history"):null;if(!e||!o)return!1;let r=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==r&&(e.className=r);let n=tl(),a=Tv();return(a?!1:gt(o,tm(n),om(n)))||a}or({patchEnergyDom:Pv,patchResultsDom:Nv});function rl(e,o,r="",n=!1){return`
      <div class="oq-settings-storage-summary-metric${n?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(o)}</strong>
        ${r?`<em>${s(r)}</em>`:""}
      </div>
    `}function am(e){let o=String(e||"").trim(),r=o.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return r?`${r[1]} ${r[1]==="1"?"dag":"dagen"}`:o}function nl(e,o,r,n="",a="",i=""){if(!h(e))return"";let l=!!T(e),p=t.loadingEntities||t.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(o)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(r)}</p>
          ${ys(e,l,n,a)}
        </div>
        ${It(e,o,l,p)}
      </article>
    `}function Ov(e,o,r,n=""){if(!h(e))return"";let a=t.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(T(e)||"");return i.length?`
      <article class="oq-settings-storage-row oq-settings-storage-row--select" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(o)}</h4>
            ${n?`<span>${s(n)}</span>`:""}
          </div>
          <p>${s(r)}</p>
        </div>
        <label class="oq-settings-storage-select">
          <select class="oq-helper-select" data-oq-field="${s(e)}" ${t.loadingEntities?"disabled":""}>
            ${i.map(p=>`<option value="${s(p)}" ${p===l?"selected":""}>${s(we(p))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function Dv(e){return h(e)||!!R[e]&&!t.optionalMissingEntities?.[e]}function al(e,o,r,n={}){if(!Dv(e))return"";let a=h(e),i=a&&(t.loadingEntities||t.busyAction===e),l=n.disabled===!0||!a,p=n.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(p)}"
        type="button"
        data-oq-action="${s(r)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&n.busyLabel||o)}
      </button>
    `}function Lv(){return t.trendHistoryMetadata&&typeof t.trendHistoryMetadata=="object"?t.trendHistoryMetadata:{}}function Cr(){return!!t.trendHistoryMetadataSignature}function kr(){return!!(t.energyHistoryRaw||t.energyHistorySignature)}function at(e){return e?"Niet geladen":"Laden..."}function _e(e,o="\u2014"){if(h(e))return ke(e);let r=Fv(e);return r==null||r===""?o:r}function Fv(e){let o=Lv();if(e==="trendHistoryFlashAvailable")return Cr()?o.available||"Alleen live":at(t.trendHistoryMetadataError);if(e==="trendHistoryFlashOldest")return Cr()?o.oldest||"Geen data":at(t.trendHistoryMetadataError);if(e==="trendHistoryFlashNewest")return Cr()?o.newest||"Geen data":at(t.trendHistoryMetadataError);if(e==="trendHistoryFlashLastFlush")return Cr()?o.lastFlush||"Geen data":at(t.trendHistoryMetadataError);if(e==="trendHistoryFlashSize")return Cr()?il(o.sizeKb):at(t.trendHistoryMetadataError);if(e==="trendHistoryFlashWrites")return Cr()?sl(o.writes):at(t.trendHistoryMetadataError);let r=lm(),a=String(t.energyHistoryRaw||"").includes("@day_retention|");return e==="lifetimeEnergyHistoryAvailable"?kr()?a&&!r.dayPartitionAvailable?"Niet beschikbaar":im(r.storedDayCount,"Geen data"):at(t.energyHistoryError):e==="lifetimeEnergyHistoryOldest"?kr()?Ba(r.oldestDateKey):at(t.energyHistoryError):e==="lifetimeEnergyHistoryNewest"?kr()?Ba(r.newestDateKey):at(t.energyHistoryError):e==="lifetimeEnergyHistoryLastWrite"?kr()?sm(r.dayLastWriteTimestampS):at(t.energyHistoryError):e==="lifetimeEnergyHistorySize"?kr()?il(r.dayStorageKb):at(t.energyHistoryError):e==="lifetimeEnergyHistoryWrites"?kr()?sl(r.dayWriteCount):at(t.energyHistoryError):null}function im(e,o="Geen data"){let r=Number(e);return!Number.isFinite(r)||r<=0?o:`${Math.round(r)} ${Math.round(r)===1?"dag":"dagen"}`}function il(e,o="\u2014"){let r=Number(e);return!Number.isFinite(r)||r<=0?o:`${Math.round(r)} kB`}function sl(e,o="0"){let r=Number(e);return!Number.isFinite(r)||r<=0?o:String(Math.round(r))}function Ba(e){let o=typeof re=="function"?re(e):null;return o?o.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function sm(e,o="Geen data"){let r=Number(e);if(!Number.isFinite(r)||r<=0)return o;let n=new Date(r*1e3),a=n.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function lm(){return typeof Sn!="function"?{}:Sn()}function Iv(e){let o=Array.isArray(e.items)?e.items:[];return`
      <article class="oq-settings-storage-technical-row">
        <div class="oq-settings-storage-technical-row-head">
          <span>${s(e.meta||"")}</span>
          <strong>${s(e.title)}</strong>
          ${e.note?`<em>${s(e.note)}</em>`:""}
        </div>
        <div class="oq-settings-storage-technical-metrics">
          ${o.map(r=>`
            <div>
              <span>${s(r.label)}</span>
              <strong>${s(r.value)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `}function _v(e){let o=e.filter(Boolean);return o.length?`
      <details class="oq-settings-storage-technical"${t.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Diagnose, dagtotalen en uurdetail</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(o.map(r=>`${r.shortLabel}: ${r.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${o.map(Iv).join("")}
        </div>
      </details>
    `:""}function cm(){if(!h("trendHistoryEnabled")&&!h("lifetimeEnergyHistoryEnabled"))return"";let e=x("trendHistoryEnabled"),o=e&&x("trendHistoryFlashEnabled"),r=h("lifetimeEnergyHistoryEnabled"),n=r&&x("lifetimeEnergyHistoryEnabled"),a=o?_e("trendHistoryFlashAvailable","Alleen live"):"Alleen live",i=r?am(_e("lifetimeEnergyHistoryAvailable","Geen data")):"Geen data";return Z("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${h("trendHistoryEnabled")?rl("Live diagnose",e?"Aan":"Uit","Live",e):""}
            ${h("trendHistoryFlashEnabled")?rl("Diagnosehistorie",a,o?"Permanent geheugen":"Uit",o):""}
            ${r?rl("Energiehistorie",i,n?"Permanent geheugen":"Uit",n):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function Wv(){if(!h("lifetimeEnergyHistoryEnabled"))return"";let e=t.energyHistoryImportRecords.length,o=new Set(t.energyHistoryImportHourRecords.map(p=>p.dateKey)).size,r=[];e>0&&r.push(`${e} dagrecords`),o>0&&r.push(`${o} uurdagen`),t.energyHistoryImportRange&&r.push(t.energyHistoryImportRange),t.energyHistoryImportSource&&r.push(t.energyHistoryImportSource),t.energyHistoryImportInvalidCount>0&&r.push(`${t.energyHistoryImportInvalidCount} regels niet gebruikt`);let n=!!t.energyHistoryImportFileName,a=e>0||o>0,i=Number(t.energyHistoryImportProgressPercent||0),l=t.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
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
              <strong>${s(t.energyHistoryImportFileName)}</strong>
              ${r.length?`<p>${s(r.join(" \xB7 "))}</p>`:""}
              ${t.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(t.energyHistoryImportNotice)}</p>`:""}
              ${t.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(t.energyHistoryImportError)}</p>`:""}
            </div>
            <div class="oq-settings-storage-import-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-energy-history-import-file" ${t.energyHistoryImportBusy?"disabled":""}>
                Wissen
              </button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="import-energy-history-file" ${t.energyHistoryImportBusy||!a?"disabled":""}>
                ${s(l)}
              </button>
            </div>
          </div>
        `:`
          ${t.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(t.energyHistoryImportNotice)}</p>`:""}
          ${t.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(t.energyHistoryImportError)}</p>`:""}
        `}
      </div>
    `}function Vv(){if(!h("lifetimeEnergyHistoryEnabled"))return"";let e=vr(t.energyHistoryExportMode),o=vn.map(n=>`
      <option value="${s(n.id)}" ${n.id===e?"selected":""}>
        ${s(n.label)}
      </option>
    `).join(""),r=t.energyHistoryExportBusy?"Exporteren...":"Exporteren";return`
      <div class="oq-settings-storage-import oq-settings-storage-export">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie exporteren</h4>
            <p>Download bewaarde energiegegevens om ze later op een andere OpenQuatt te importeren.</p>
          </div>
          <div class="oq-settings-storage-export-controls">
            <select class="oq-helper-select oq-settings-storage-export-select" data-oq-energy-history-export-mode="true" ${t.energyHistoryExportBusy?"disabled":""}>
              ${o}
            </select>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="export-energy-history" ${t.energyHistoryExportBusy?"disabled":""}>
              ${s(r)}
            </button>
          </div>
        </div>
        ${t.energyHistoryExportNotice?`<p class="oq-settings-storage-import-notice">${s(t.energyHistoryExportNotice)}</p>`:""}
        ${t.energyHistoryExportError?`<p class="oq-settings-storage-import-error">${s(t.energyHistoryExportError)}</p>`:""}
      </div>
    `}function um(){let e=h("trendHistoryEnabled")&&x("trendHistoryEnabled"),o=e&&h("trendHistoryFlashEnabled")&&x("trendHistoryFlashEnabled"),r=h("lifetimeEnergyHistoryEnabled"),n=r&&x("lifetimeEnergyHistoryEnabled"),a=r?_e("lifetimeEnergyHistoryAvailable","Geen data"):"Geen data",i=h("lifetimeEnergyHistoryClear")&&a!=="Geen data"&&a!=="\u2014",l=am(a),p=e&&h("trendHistoryFlush"),u=h("lifetimeEnergyHistoryCapture"),c=lm(),g=String(t.energyHistoryRaw||"").includes("@hour_retention|"),y=g&&!c.hourPartitionAvailable,b=g?y?"Alleen live":im(c.hourStoredDayCount,"Geen uurdata"):"Laden...",v=g?y?"Niet beschikbaar":il(c.hourStorageKb):"Laden...",m=g?y?"Niet beschikbaar":sl(c.hourWriteCount):"Laden...",f=g?y?"Niet beschikbaar":sm(c.hourLastWriteTimestampS):"Laden...",w=Ba(c.hourOldestDateKey),S=Ba(c.hourNewestDateKey),q=g?c.hourPartitionAvailable?`${w} t/m ${S}`:"Live beschikbaar; bewaren in Flash vraagt een nieuwere Flash-indeling.":"Uurdetailstatus wordt opgehaald.",E=[{title:"Diagnosegeschiedenis",meta:"Diagnose",shortLabel:"Diagnose",primary:_e("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${_e("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:_e("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:_e("trendHistoryFlashSize")},{label:"Opslagacties",value:_e("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:_e("trendHistoryFlashLastFlush","Geen data")}]},{title:"Dagtotalen",meta:"Resultaten",shortLabel:"Dag",primary:l,note:`${_e("lifetimeEnergyHistoryOldest","Geen data")} t/m ${_e("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:l},{label:"Opslagruimte",value:_e("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:_e("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:_e("lifetimeEnergyHistoryLastWrite","Geen data")}]},h("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Resultaten",shortLabel:"Uur",primary:b,note:q,items:[{label:"Dagen bewaard",value:b},{label:"Opslagruimte",value:v},{label:"Opslagacties",value:m},{label:"Laatst opgeslagen",value:f}]}:null];return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
                ${nl("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Na een herstart of update zijn deze tijdelijke gegevens niet meer beschikbaar.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
                ${nl("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat deze gegevens ongeveer elk uur op.","Alleen recente diagnosegegevens; bestaande geschiedenis blijft staan.","Permanent geheugen")}
                ${p?`
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Diagnose nu opslaan</h4>
                      <p>Sla de huidige diagnosegegevens direct op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    ${al("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!o,busyLabel:"Opslaan..."})}
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
                ${nl("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Zo blijven je resultaten ook na een herstart of update beschikbaar. OpenQuatt slaat dit op aan het einde van de dag en bij een normale afsluiting.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Permanent geheugen")}
                ${Ov("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur mag bewaren voor de daggrafiek.","Geavanceerd")}
                ${u?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Vandaag alvast opslaan</h4>
                      <p>Sla de gegevens van vandaag nu op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${al("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!n,busyLabel:"Opslaan..."})}
                    </div>
                  </div>
                `:""}
                ${Vv()}
                ${Wv()}
                ${h("lifetimeEnergyHistoryClear")?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle bewaarde dagtotalen. Je begint daarna opnieuw met het opbouwen van je energiehistorie.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${al("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!i,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}
                    </div>
                  </div>
                `:""}
              </div>
            </section>
          </div>
          ${_v(E)}
          <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> OpenQuatt schrijft deze gegevens niet continu weg, maar alleen op vaste momenten. Zo blijft duidelijk wat er wordt bewaard en hoeveel geheugen daarvoor wordt gebruikt.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function pm(){let e=t.settingsBackupBusy,o=Qt.length,r=zt.length;return Z("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${s(String(o))}</strong>
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
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${s(t.settingsBackupError)}</p>`:""}
        </div>
      `)}function dm(){let e=t.settingsBackupBusy;return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${s(t.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
          </div>
        </section>
      </div>
    `}function mm(){let e=t.settingsBackupDraft;if(!e)return"";let o=e.summary||Ks(e),r=String(e.source?.installation||e.source?.device||"Onbekend"),n=dt(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",p=ie(),u=typeof J=="function"?J():"",c=l!=="Onbekend"&&u&&l!==u,g=r!=="Onbekend"&&r!==n,y=c||g?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":o.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              <span class="oq-helper-modal-subvalue">Topo: ${s(u)} \xB7 Firmware: ${s(p||"Onbekend")}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupkanaal</span>
              <strong class="oq-helper-modal-value">${s(i)}</strong>
              <span class="oq-helper-modal-subvalue">Schema v${s(String(e.schema_version||1))}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupinstellingen</span>
              <strong class="oq-helper-modal-value">${s(`${o.total} instellingen`)}</strong>
              <span class="oq-helper-modal-subvalue">${s(o.differenceCount?`${o.differenceCount} ${o.differenceCount===1?"verschil":"verschillen"} \xB7 ${o.currentPresent} op huidige installatie \xB7 ${o.unknown} onbekend`:`Alles komt overeen \xB7 ${o.currentPresent} op huidige installatie \xB7 ${o.unknown} onbekend`)}</span>
            </div>
          </div>
          <div class="oq-settings-backup-modal-sections">
            ${o.sectionSummaries.map(b=>`
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${s(b.label)}</strong>
                    <em>${s(`${b.total} ${b.total===1?"instelling":"instellingen"} \xB7 ${b.differenceCount?`${b.differenceCount} ${b.differenceCount===1?"verschil":"verschillen"}`:"Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${s(b.differenceCount?`${b.differenceCount} instelling${b.differenceCount===1?"":"en"} wijkt af of ontbreekt.`:"Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${b.rows.map(v=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(v.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(v.label)}</strong>
                          <span>${s(v.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(v.status)}">
                            <span>Backup</span>
                            <strong>${s(v.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(v.status)}">
                            <span>Nu</span>
                            <strong>${s(v.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${o.unknown||o.requiredMissing||g?" oq-settings-action-note--warning":""}">${s(y)}</p>
          ${t.settingsBackupError?`<p class="oq-settings-backup-error">${s(t.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${t.settingsBackupBusy?"disabled":""}>${t.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function Ka(){return[t.interfacePanelOpen?"open":"closed",t.nativeOpen?"native":"app",t.appView,t.complete?"complete":"incomplete",t.overviewTheme,t.hpVisualMode,W("installationTopology"),W("hardwareProfileText"),W("connectionText"),t.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",t.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",t.firmwareTopologySwitchOpen?"topology-open":"topology-closed",t.updateManualUploadOpen?"upload-open":"upload-closed",t.updateTestFirmwareOpen?"test-open":"test-closed",t.updateTestFirmwareError,W("hpGeneration"),W("projectVersionText"),W("releaseChannelText"),ll()].join("|")}function ll(){let e=Math.max(Number(t.lastEntityResponseAt||0),Number(t.lastEntitySyncAt||0)),o=Number(t.deviceReconnectStartedAt||0);return t.entitySyncFailureCount>0&&!t.deviceReconnectMode?"Bezig":e>0&&(!t.deviceReconnectMode||e>=o)?"Verbonden":t.deviceReconnectMode?Jt()?"Verbonden":t.deviceReconnectMode==="reconnect"?"Offline":"Bezig":h("status")&&!x("status")?"Offline":"Bezig"}function cl(){return String(T("projectVersionText")||"").trim()||"\u2014"}function Bv(){let e=cl();return e&&e!=="\u2014"?e:lo()}function ja(){let e=t.entities.espInternalTemp;if(!e)return"\u2014";let o=A("espInternalTemp");return Number.isNaN(o)?O("espInternalTemp"):_(o,1,e.uom||" \xB0C")}function Kv(){let e=[["Netwerkstatus",ll()],["IP-adres",ar()]],o=String(T("wifiSsid")||"").trim();o&&e.push(["WiFi SSID",o]);let r=t.entities.wifiSignal;if(r){let n=A("wifiSignal");Number.isNaN(n)||e.push(["WiFi signaal",_(n,0,r.uom||" dBm")])}return e}function gm(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function hm(){return[["installation","Installatie",dt()],["uptime","Uptime",nr()],["connectivity","Connectiviteit",ll()],["time","Tijd",bs()],["version","Versie",Bv(),!!fe()],["debugRecording","Debugopname",Ip(),!0],["webserverLog","Logboek",ha(),!0]]}function fm(){return Io()}function bm(e){return e==="version"&&fm()}function kn(){return`
      <div class="oq-helper-status-grid">
        ${hm().map(([o,r,n,a])=>{let i=gm(o),l=!!(a||i),p=bm(o);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${p?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${s(o)}"
            ${l?`type="button" data-oq-action="${s(i)}"`:""}
          >
            <span class="oq-helper-status-label">${s(r)}</span>
            <strong class="oq-helper-status-value">${p?`<span class="oq-helper-status-value-text">${s(n)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(n)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function jv(){if(!t.root)return!1;let e=t.root.querySelector(".oq-helper-status-grid");if(!e)return!!t.root.querySelector(".oq-helper-hub");let o=hm();if(e.querySelectorAll("[data-oq-header-status]").length!==o.length)return e.outerHTML=kn(),!0;for(let[n,a,i,l]of o){let p=e.querySelector(`[data-oq-header-status="${n}"]`);if(!p)return e.outerHTML=kn(),!0;let u=gm(n),c=!!(l||u);if(p.tagName.toLowerCase()!==(c?"button":"div"))return e.outerHTML=kn(),!0;let g=p.querySelector(".oq-helper-status-label"),y=p.querySelector(".oq-helper-status-value");if(!g||!y)return e.outerHTML=kn(),!0;g.textContent!==a&&(g.textContent=a);let b=bm(n),v=b?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);y.innerHTML!==v&&(y.innerHTML=v),c?p.setAttribute("data-oq-action",u):p.removeAttribute("data-oq-action"),p.classList.toggle("oq-helper-status-item--button",c),p.classList.toggle("oq-helper-status-item--attention",b)}return!0}function Uv(){let e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function ul(){let e=Uv();return e?t.devPanelOpen?`
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
      `:""}function ym(){let e=t.nativeOpen?"native":"app",o=fm();return t.interfacePanelOpen?`
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
              ${t.overviewTheme==="light"?"Donkere modus":"Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${kn()}
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
            ${Ps()}
            <button
              class="oq-helper-hub-toggle${o?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${st("more-horizontal","oq-helper-hub-toggle-icon")}${o?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function vm(){let e=t.nativeOpen?"native":"app",o=t.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",r=t.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(t.controlError)}</p>`:"";return`
      <div class="oq-helper-shell oq-native-surface-shell">
        <div class="oq-helper-card oq-native-surface-card">
          <div class="oq-native-surface-head">
            <div class="oq-native-surface-copy">
              <p class="oq-helper-kicker">Weergave</p>
              <h1>ESPHome fallback actief</h1>
              <p>${s(o)}</p>
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
    `}bu({getSignature:Ka,patch:jv});function wm(){if(t.systemModal==="login")return sd();if(t.systemModal==="api-security")return id();if(t.systemModal==="mqtt")return Ru();if(t.systemModal==="mqtt-sensors")return Pu();if(t.systemModal==="connectivity"){let e=Kv();return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              ${e.map(([o,r])=>`
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${s(o)}</span>
                  <strong class="oq-helper-modal-value">${s(r)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(t.systemModal==="settings-backup-restore")return mm();if(t.systemModal==="settings-backup-import")return dm();if(t.systemModal==="history-storage")return um();if(String(t.systemModal||"").startsWith("service-task-"))return dd();if(t.systemModal==="settings-backup-success"){let e=t.controlNotice||"Backup hersteld.";return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
      `}if(t.systemModal==="restart-confirm"){let e=t.busyAction==="restartAction";return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
      `}if(t.systemModal==="silent-settings")return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              ${gd()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(t.systemModal==="webserver-logs")return Cp();if(t.systemModal==="debug-recording")return Jp();if(t.systemModal==="openquatt-pause"){let e=x("openquattEnabled"),o=t.busyAction==="openquatt-regulation",r=h("openquattResumeAt"),n=t.loadingEntities||t.entitySyncInFlight,a=r||!n,i=Br(),l=Xo(T("openquattResumeAt")),p=Jn();return`
        <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="2h" ${o?"disabled":""}>2 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="8h" ${o?"disabled":""}>8 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="tomorrow-morning" ${o?"disabled":""}>Tot morgenochtend</button>
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
                        value="${s(p)}"
                        ${o?"disabled":""}
                      >
                      <span class="oq-settings-time-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" focusable="false">
                          <rect x="3.2" y="4.2" width="13.6" height="12.6" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.5" />
                          <path d="M6.2 2.9V5.4M13.8 2.9V5.4M3.8 8.1H16.2M10 10.3V13.1L12.3 14.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </label>
                    <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-openquatt-custom-pause" ${o?"disabled":""}>Plan moment</button>
                  </div>
                </div>
              `:'<p class="oq-helper-modal-note">Automatisch hervatten is nog niet beschikbaar op deze firmware. Je kunt de regeling wel zonder eindtijd uitschakelen.</p>':'<p class="oq-helper-modal-note" aria-live="polite">Hervatopties laden...</p>'}
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o?"disabled":""}>Annuleren</button>
              ${e?"":`<button class="oq-helper-button" type="button" data-oq-action="enable-openquatt-now" ${o?"disabled":""}>Nu inschakelen</button>`}
              <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-indefinite" ${o?"disabled":""}>${e?"Zonder eindtijd uitschakelen":"Zonder eindtijd"}</button>
            </div>
          </section>
        </div>
      `}return""}function Gv(e=!1){let o=Zn();return o?`
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${e?" oq-curve-fallback-suggest--helper":""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${s(o.label)}</strong>
          <span>${s(o.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${t.loadingEntities||t.busyAction==="save-curveFallbackSupply"||o.isCurrent?"disabled":""}
        >
          ${o.isCurrent?"Actief":"Gebruik suggestie"}
        </button>
      </div>
    `:""}function pl(){return`
      <div class="oq-settings-curve-grid">
        ${ge.map(e=>ae(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${ae("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:Gv()})}
      </div>
    `}function dl(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${io("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function ml(e="oq-settings-grid"){let o=[ae("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),ae("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${io("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${Rc()?ae("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):o}
      </div>
    `}function zv(e="oq-settings-grid"){let o=[ae("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),ae("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return o.length?`
      <div class="${s(e)}">
        ${o.join("")}
      </div>
    `:""}function gl(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ae("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${ae("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${Qv()}
      </div>
    `}function hl(){let e=oe();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(_n)}"
          aria-pressed="${e?"false":"true"}"
          ${t.loadingEntities||t.busyAction==="save-strategy"?"disabled":""}
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
          data-select-option="${s(Wn)}"
          aria-pressed="${e?"true":"false"}"
          ${t.loadingEntities||t.busyAction==="save-strategy"?"disabled":""}
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
    `}function Qv(){if(!h("phResponseProfile"))return"";let e=String(T("phResponseProfile")||""),o=t.loadingEntities||t.busyAction==="save-phResponseProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{let i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${vs("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${vs("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:ir({key:"phResponseProfile",option:a.value,currentValue:e,busy:o,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return pe("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",n,"oq-settings-field--span-2")}function fl(){if(!h("curveControlProfile"))return"";let e=String(T("curveControlProfile")||""),o=t.loadingEntities||t.busyAction==="save-curveControlProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>ir({key:"curveControlProfile",option:a.value,currentValue:e,busy:o,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return pe("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",n,"oq-settings-field--span-2")}function Yv(){let e=(N,Y=0)=>{let P=A(N);return Number.isNaN(P)?Y:Math.max(0,P)},r=e("phComfortBelow",.1),n=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-r,l=20+n,p=620,u=184,c=46,g=24,y=18,b=40,v=96,m=p-c-g,f=Math.min(20-1.2,i-.35),w=Math.max(20+1.2,l+.35),S=N=>c+(N-f)/Math.max(.01,w-f)*m,q=S(f),E=S(w),k=S(i),M=S(20),V=S(l),F=Math.abs(i-20)>.001,ee=Math.abs(l-20)>.001,H=y+24,G=u-b,X=v-44,de=(N,Y,P,I="")=>{let ft=Math.max(q+4,Math.min(E-110-4,N-55)),it=N-14,At=X,Ue=28,Me=v-X+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${Y} ${P}`)}">
          <rect class="oq-ph-concept-hit" x="${it}" y="${At}" width="${Ue}" height="${Me}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${N}" cy="${v}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${I?` oq-ph-concept-tooltip--${I}`:""}" transform="translate(${ft} ${X})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(Y)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(P)}</text>
          </g>
        </g>
      `},se=[`M ${q.toFixed(1)} ${H.toFixed(1)}`,`L ${k.toFixed(1)} ${v.toFixed(1)}`,`L ${V.toFixed(1)} ${v.toFixed(1)}`,`L ${E.toFixed(1)} ${G.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(_(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(_(i,1,"\xB0C"))} \u2013 ${s(_(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(_(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${p} ${u}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${q.toFixed(1)}" y="${y}" width="${Math.max(20,k-q).toFixed(1)}" height="${(u-y-b).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${k.toFixed(1)}" y="${y}" width="${Math.max(20,V-k).toFixed(1)}" height="${(u-y-b).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${V.toFixed(1)}" y="${y}" width="${Math.max(20,E-V).toFixed(1)}" height="${(u-y-b).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${q}" y1="${y}" x2="${q}" y2="${u-b}" class="oq-ph-concept-axis"></line>
            <line x1="${q}" y1="${v}" x2="${E}" y2="${v}" class="oq-ph-concept-axis"></line>
            <line x1="${M}" y1="${y}" x2="${M}" y2="${u-b}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${se}" class="oq-ph-concept-curve"></path>

            ${F?`<line x1="${k}" y1="${v-12}" x2="${k}" y2="${v+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${M}" y1="${v-14}" x2="${M}" y2="${v+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${ee?`<line x1="${V}" y1="${v-12}" x2="${V}" y2="${v+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${F?`<circle cx="${k}" cy="${v}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${M}" cy="${v}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${ee?`<circle cx="${V}" cy="${v}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${F?de(k,"Comfort onder setpoint",_(i,1,"\xB0C"),"below"):""}
            ${de(M,"Setpoint",_(20,1,"\xB0C"),"setpoint")}
            ${ee?de(V,"Comfort boven setpoint",_(l,1,"\xB0C"),"above"):""}

            <text x="${q+8}" y="${y+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${q+8}" y="${u-b-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${q}" y="${u-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${E}" y="${u-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${F?`<text x="${k-5}" y="${u-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(_(i,1,"\xB0C"))}</text>`:""}
            <text x="${M}" y="${u-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(_(20,1,"\xB0C"))}</text>
            ${ee?`<text x="${V+5}" y="${u-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(_(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(_(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(_(i,1,"\xB0C"))} \u2013 ${s(_(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(_(l,1,"\xB0C"))}</span>
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
    `}function bl(){let e=[ae("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),ae("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),ae("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${Yv()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function yl(e,o,r){let n=[io(o,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),io(r,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return n?`
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
    `:""}function Sm(){let e=zv();return Z("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${ml()}
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
      `)}function qm(){let e=oe()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${fl()}
          </div>
          <div class="oq-settings-curve-shell">
            ${vl()}
          </div>
          ${pl()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${gl()}
          ${bl()}
        </div>
      `;return Z("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${dl()}
        ${hl()}
        ${e}
      `)}function vl(){let r={top:22,right:18,bottom:38,left:34},n=560-r.left-r.right,a=240-r.top-r.bottom,i=ge[0].outdoor,l=ge[ge.length-1].outdoor,p=v=>r.left+(v-i)/(l-i)*n,u=v=>r.top+(70-v)/50*a,c=[20,30,40,50,60,70].map(v=>{let m=u(v);return`
          <line x1="${r.left}" y1="${m}" x2="${560-r.right}" y2="${m}" class="oq-helper-curve-grid" />
          <text x="8" y="${m+4}" class="oq-helper-curve-axis-label">${v}\xB0</text>
        `}).join(""),g=ge.map(v=>`
        <text x="${p(v.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(v.label)}</text>
      `).join(""),y=ge.map(v=>`${p(v.outdoor)},${u(he(v.key,T(v.key)))}`).join(" "),b=ge.map(v=>{let m=he(v.key,T(v.key));return`
          <g>
            <circle
              cx="${p(v.outdoor)}"
              cy="${u(m)}"
              r="7"
              class="oq-helper-curve-point ${t.draggingCurveKey===v.key?"is-dragging":""}"
              data-curve-key="${s(v.key)}"
            />
            <text x="${p(v.outdoor)}" y="${u(m)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${m.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${c}
          <polyline points="${y}" class="oq-helper-curve-line" />
          ${b}
          ${g}
        </svg>
      </div>
    `}var Ua="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",wl="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==";function Jv(){return Rr.filter(e=>h(Te(e,"Status"))||h(Te(e,"Load"))||h(vo(e,"cooling",0)))}function Zv(e){return $e(Ee(e))}function Xv(e){let o=[];return Vn.forEach(r=>{let n=-1/0;Yo.forEach(a=>{let i=vo(e,r,a),l=Zv(i);(!Number.isFinite(l)||l<0||l>120||l<n)&&o.push(`${r==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(n=l)})}),{valid:o.length===0,invalid:o}}function ew(e){let o=String(T(`hp${e}Mode`)||"").trim(),r=$e(T(`hp${e}Freq`)),n=o&&o!=="Onbekend"&&o!=="Unknown",a=Number.isFinite(r),i=n&&/standby|stand-by/i.test(o),l=a&&r<=.5,p=n?i?a?l?"Standby en compressor uit.":`Compressor draait op ${r.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${o}.`:"ODU status is onbekend.";return{mode:n?o:"Onbekend",freq:Number.isFinite(r)?`${r.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:p}}function tw(e){let o=String(e||"").toUpperCase();return!e||o==="UNKNOWN"||o==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":o.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":o.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":o.includes("WRITE_QUEUED")||o.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":o.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":o.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":o.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":o.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function Tm(e,o){return h(e)?no({key:e,value:Ee(e),meta:Oe(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${o}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function ow(e){let o=Yo.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${Yo.map(r=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${r}</span>
            <div role="cell">${Tm(vo(e,"cooling",r),r)}</div>
            <div role="cell">${Tm(vo(e,"heating",r),o+r)}</div>
          </div>
        `).join("")}
      </div>
    `}function km(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;let o=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,r=o?o.closest(".oq-settings-odu-runtime-table"):null;if(!o||!r)return;let n=Array.from(r.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,p)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(p.dataset.oqOduRuntimeTabIndex||0)),a=n.indexOf(o),i=n[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function rw(e){let o=Te(e,"Enable"),r=Te(e,"Load"),n=Te(e,"Apply"),a=Te(e,"Status"),i=String(T(a)||"").trim()||"Nog niet geladen",l=Xv(e),p=ew(e),u=!!T(o),c=t.loadingEntities||t.busyAction===r||t.busyAction===n,g=c||!u||!l.valid||!p.safe||!h(n),y=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(p.reason)} Laatste compressorfrequentie: ${s(p.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${h(r)?je(r,t.busyAction===r?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",c):""}
      ${h(o)?It(o,`HP${e} writes vrijgeven`,u,c,"Enable","Locked"):""}
            ${h(n)?je(n,t.busyAction===n?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",g):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(tw(i))}</p>
        </div>
        ${ow(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&p.safe?" is-ok":" is-warning"}">${s(y)} ${s(p.safe?"":p.reason)}</p>
      </article>
    `}function xm(){let e=Jv();return e.length?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${t.oduRuntimeFrequencyDetailsOpen?" open":""}>
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
            ${e.map(o=>rw(o)).join("")}
          </div>
        </div>
      </details>
    `:""}function Ga(e,o="Aandacht",r="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${s(e?o:r)}</span>`}function xr({label:e,value:o,note:r="",active:n=!1}){return`
      <div class="oq-settings-monitoring-row${n?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(o)}</strong>
          ${r?`<span>${s(r)}</span>`:""}
        </div>
        ${Ga(n)}
      </div>
    `}function ho(e){let o=A(e);return Number.isNaN(o)?"\u2014":String(Math.max(0,Math.round(o)))}function nw(e){let o=A(e);if(Number.isNaN(o))return"Nog niet gemeten";if(o<1)return"Zojuist";if(o<60)return`${Math.round(o)} min geleden`;let r=Math.floor(o/60),n=Math.round(o%60);return`${r}u ${n}m geleden`}function Em(e){let o=A(e);return Number.isNaN(o)||o<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(o*1e3))}function aw(e){if(!e.cyclingAlertLatched)return"";let o=U("compressorCyclingAlertAlternating"),r=ho("compressorCyclingAlertHp1Peak2h"),n=ho("compressorCyclingAlertHp1Peak72h"),a=h("compressorCyclingAlertHp2Peak2h")?ho("compressorCyclingAlertHp2Peak2h"):"",i=h("compressorCyclingAlertHp2Peak72h")?ho("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${Ga(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(Em("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(Em("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(r)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(n)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${o?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${t.entities.acknowledgeCompressorCyclingAlert?je("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function Cm(e,o){return h(`${o}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${s(e)}</p>
          <span>Laatste start: ${s(nw(`${o}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${s(ho(`${o}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${s(ho(`${o}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${s(ho(`${o}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${s(ho(`${o}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function $m(){let e=Ot();Zr(e);let o=qt("cicPollingEnabled"),r=qt("otEnabled"),n=[h("lowflowFaultActive")?xr({label:"Flow",value:U("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:U("lowflowFaultActive")}):"",h("flowMismatch")?xr({label:"Flowvergelijking duo",value:U("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:U("flowMismatch")}):""].filter(Boolean).join(""),a=[h("cicDataStale")?xr({label:"CIC-data",value:o?U("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:o&&U("cicDataStale")}):"",h("otLinkProblem")?xr({label:"OpenTherm",value:r?U("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:r&&U("otLinkProblem")}):""].filter(Boolean).join(""),i=[h("hp1Failures")?xr({label:"Warmtepomp 1",value:ji("hp1Failures"),active:Jr("hp1Failures")}):"",h("hp2Failures")?xr({label:"Warmtepomp 2",value:ji("hp2Failures"),active:Jr("hp2Failures")}):""].filter(Boolean).join(""),l=A("compressorStarts2hWarningLimit"),p=A("compressorStarts72hWarningLimit"),u=U("compressorCyclingWarning2h")||U("compressorCyclingWarning72h")||U("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,c=n?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${n}</div>
      </article>
    `:"",g=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"",y=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"";return Z("Bewaking","Installatiebewaking","Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${Ga(e.active,"Aandacht nodig","Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${t.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(b=>`<span>${s(b.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${Ga(u)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${aw(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${Cm("Warmtepomp 1","hp1")}
              ${Cm("Warmtepomp 2","hp2")}
            </div>
            ${et("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${et("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(p)?"\u2014":`${Math.round(p)} starts / 72 uur`})}
          </article>
          ${g}
          </div>
          <div class="oq-settings-monitoring-column">
            ${c}
            ${y}
          </div>
        </div>
        </details>
      `)}function Sl(){if(!h("hpGeneration"))return"";let e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:Ua,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:Ua,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:wl,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},o=t.entities.hpGeneration||{},r=String(T("hpGeneration")||""),n=Ft(o),a=t.loadingEntities||t.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${n.map(i=>{let l=e[i]||{};return ir({key:"hpGeneration",option:i,currentValue:r,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function Am(){let e=dt(),o=t.entities.hpGeneration||{},r=h("hpGeneration")&&Ft(o).length>0;return!e&&!r?"":Z("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
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
            ${!r||t.loadingEntities||t.busyAction==="save-hpGeneration"?"disabled":""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `)}function ql(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!h("boilerCvAssistEnabled"))return"";let o=x("boilerCvAssistEnabled"),r=h("boilerRatedHeatPower"),n=Oe("boilerRatedHeatPower"),a=Ee("boilerRatedHeatPower"),i=t.loadingEntities||t.busyAction==="switch-boilerCvAssistEnabled",p=r?no({key:"boilerRatedHeatPower",value:a,meta:n,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,u=o&&r?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${s(e)}">
          ${pe("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${It("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",o,i)}
              </div>
            `,"oq-settings-field--compact")}

          ${o?pe("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${p}
              </div>
            `,o&&r?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",u):""}
        </div>
      `}function Hm(){if(!h("boilerCvAssistEnabled"))return"";let e=x("boilerCvAssistEnabled");return Z("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",ql())}function Mm(){let e=t.complete===!0?"Afgerond":t.complete===!1?"Open":"Laden...",o=t.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":t.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return Z("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
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
              ${t.busyAction==="reset"?"disabled":""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${s(o)}</p>
        </div>
      `)}function Rm(){let e=lo(),o=pa(),r=t.busyAction==="restartAction";return Z("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          ${Ne({dataValue:"uptime",label:"Uptime",value:nr()})}
          ${Ne({dataValue:"ip",label:"IP-adres",value:ar()})}
          ${Ne({dataValue:"updates",label:"Updates",value:e,action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>`})}
          ${Ne({dataValue:"webserverLog",label:"Logboek",value:ha(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>`})}
          ${Ne({dataValue:"debugRecording",label:"Debugopname",value:cn(),note:Ca(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>`})}
          ${Ne({dataValue:"datetime",label:"Datum/tijd",value:o})}
          ${Ne({dataValue:"espTemp",label:"ESP-temp",value:ja()})}
          ${Ne({dataValue:"restart",label:"Herstart OpenQuatt",value:"Opnieuw opstarten",note:"Dit onderbreekt de webinterface kort.",action:`<button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${r?"disabled":""}
            >
              ${r?"Herstarten...":"Herstarten"}
            </button>`})}
          ${h("statusLedsEnabled")?`
            ${Ne({dataValue:"statusLeds",label:"Status-LEDs",value:x("statusLedsEnabled")?"Aan":"Uit",note:"Schakelt de gele netwerk-LED en rode storings-LED op de Q-edition controller.",action:It("statusLedsEnabled","Status-LEDs",x("statusLedsEnabled"),t.loadingEntities||t.busyAction==="switch-statusLedsEnabled")})}
          `:""}
        </div>
      `)}function Pm(){let e=[yl("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),yl("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return Z("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${ae("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${h("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function Dm(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${Sl()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${Sl()}
        ${jt()}
      </section>
    `}function iw(e){let o=String(e||"").trim();if(!o)return"";try{let r=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(o)?o:`http://${o}`);return r.protocol!=="http:"&&r.protocol!=="https:"?"":(r.port||(r.port="8080"),(!r.pathname||r.pathname==="/")&&(r.pathname="/beta/feed/data.json"),r.toString())}catch{return""}}function Lm(){let e=String(T("cicFeedUrl")||"").trim(),o=t.quickStartCicFeedUrlDraft===null?e:String(t.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:o,normalizedDraftUrl:iw(o)}}function Fm(e,o){return`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${ao("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
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
              ${o?"disabled":""}
            >
          </label>
          ${e.draftUrl&&!e.normalizedDraftUrl?'<p class="oq-settings-source-warning">Vul een geldig IP-adres, hostname of een geldige HTTP(S)-URL in.</p>':""}
          ${e.normalizedDraftUrl?`<p class="oq-settings-action-note">Wordt ingesteld als ${s(e.normalizedDraftUrl)}</p>`:""}
        </div>
      </article>
    `}function Nm(e){let o=String(e||"").trim().toLowerCase();return o==="heatpump_controller_q"||o.includes("q-edition")||o.includes("controller q")?"heatpump_controller_q":o==="heatpump_listener"||o.includes("listener")?"heatpump_listener":o==="waveshare"||o.includes("waveshare")?"waveshare":""}function Im(){let e=Nm(T("hardwareProfileText")),o=!1;return e||(e=Nm(Tt().hardwareProfile)),!e&&h("qFlowSource")?(e="heatpump_controller_q",o=!0):!e&&h("flowSource")&&h("cicPollingEnabled")&&(e="remote",o=!0),{profile:e,inferred:o,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function $r(){let e=String(T("hpGeneration")||"").trim(),o=Im(),r=e==="V1",{isQEdition:n,isRemoteProfile:a,hardwareKnown:i}=o,l=r&&a,p=n?r?"Local":"Outdoor unit":"",u=l?"CIC":"Outdoor unit",c=String(T("flowSource")||"").trim(),g=String(T("qFlowSource")||"").trim(),y=x("cicPollingEnabled"),b=x("cicJsonFeedOk"),v=x("cicDataStale"),m=Lm(),f=c===u&&(!p||g===p),w=l?f&&y&&!!m.configuredUrl:f,S=l?"cicFlowrate":n&&r?"controllerFlow":J()==="duo"?"flowLocal":"hp1Flow",q=A(S),E=Number.isFinite(q),k=x("quickFlowTest"),M=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&w?M=b&&E?q>0?"Geldig":"Bron actief, geen circulatie":v?"Geen actuele CiC-data":b?"Verbonden, wacht op flow":"Verbinding controleren":!l&&w&&(M=E?q>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");let V=l?"CiC JSON-feed":n&&r?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",F=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":n&&r?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:o.hardwareLabel,requiresCic:l,qFlowTarget:p,flowSourceTarget:u,configurationApplied:w,sourceLabel:V,explanation:F,status:M,flowValue:q,flowAvailable:E,flowTestActive:k,canRunFlowTest:w,...m,canApply:i&&h("flowSource")&&(!p||h("qFlowSource"))&&(!l||h("cicPollingEnabled")&&h("cicFeedUrl")&&!!m.normalizedDraftUrl)}}function za(){let e=Im(),{isQEdition:o,isRemoteProfile:r}=e,n=String(T("roomTempSource")||"").trim(),a=String(T("roomSetpointSource")||"").trim(),i=n===a&&["CIC","OT thermostat","HA input"].includes(n)?n:"",l=o?"OT thermostat":t.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),p=Lm(),c=n===l&&a===l&&(l!=="OT thermostat"||x("otEnabled"))&&(l!=="CIC"||x("cicPollingEnabled")&&!!p.configuredUrl),g=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],y=A(g[0]),b=A(g[1]),v=Number.isFinite(y)&&Number.isFinite(b),m=l==="OT thermostat"?x("otEnabled")&&!x("otLinkProblem")&&v:l==="CIC"?x("cicJsonFeedOk")&&!x("cicDataStale")&&v:x("roomTempHaValid")&&x("roomSetpointHaValid")&&v,f=o||r?"Nog activeren":"Hardwareprofiel niet herkend";c&&(f=m?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");let w=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",S=o?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:o,isRemoteProfile:r,selectedSource:l,sourceLabel:w,explanation:S,configurationApplied:c,status:f,roomTempValue:y,roomSetpointValue:b,valuesAvailable:v,...p,canApply:(o||r)&&h("roomTempSource")&&h("roomSetpointSource")&&(l!=="OT thermostat"||h("otEnabled"))&&(l!=="CIC"||h("cicPollingEnabled")&&h("cicFeedUrl")&&!!p.normalizedDraftUrl)}}function sw(){let e=$r(),o=t.busyAction==="quickstart-flow-source"||t.busyAction==="quickstart-flow-refresh",r=t.busyAction==="quickstart-flow-test-start"||t.busyAction==="quickstart-flow-test-abort",n=o||r||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?Fm(e,n):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("flow-source"))}</p>
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
            ${t.busyAction==="quickstart-flow-source"?"Flowconfiguratie opslaan...":e.configurationApplied?"Flowconfiguratie opnieuw opslaan":e.requiresCic?"CiC-flowconfiguratie opslaan":"Flowconfiguratie activeren"}
          </button>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="refresh-quickstart-flow-signal"
            ${n||!e.configurationApplied?"disabled":""}
          >
            ${t.busyAction==="quickstart-flow-refresh"?"Signaal controleren...":"Signaal opnieuw controleren"}
          </button>
          ${e.canRunFlowTest?`
            <button
              class="oq-helper-button ${e.flowTestActive?"":"oq-helper-button--ghost"}"
              type="button"
              data-oq-action="${e.flowTestActive?"abort-quickstart-flow-test":"start-quickstart-flow-test"}"
              ${o||r?"disabled":""}
            >
              ${r?e.flowTestActive?"Waterpomptest stoppen...":"Waterpomptest starten...":e.flowTestActive?"Waterpomptest stoppen":"Waterpomptest starten (30 sec)"}
            </button>
          `:""}
        </div>
        <p class="oq-settings-action-note">${e.flowTestActive?"Alleen de waterpomp draait op 400 iPWM. Het kan enkele seconden duren voordat de circulatie op gang komt en de flowmeter een waarde toont. De firmware stopt de test automatisch na maximaal 30 seconden.":"0 L/h kan normaal zijn als de circulatiepomp stilstaat. De waterpomptest gebruikt 400 iPWM, start geen compressor en stopt automatisch na 30 seconden."}</p>
        ${jt({nextDisabled:!e.configurationApplied||e.flowTestActive||r,nextDisabledLabel:r?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function lw(){let e=za(),o=t.busyAction==="quickstart-thermostat-source",r=e.status==="Geldig"?" is-active":"",n=e.isRemoteProfile?`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${ao("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
        </div>
        <div class="oq-settings-field-control">
          <label class="oq-settings-control oq-settings-control--select">
            <select data-oq-quickstart-thermostat-source ${o?"disabled":""}>
              <option value="CIC" ${e.selectedSource==="CIC"?"selected":""}>CiC JSON-feed</option>
              <option value="HA input" ${e.selectedSource==="HA input"?"selected":""}>Home Assistant</option>
            </select>
          </label>
          <p class="oq-settings-action-note">Deze keuze geldt altijd voor zowel kamertemperatuur als kamer-setpoint.</p>
        </div>
      </article>
    `:"",a=e.selectedSource==="CIC"?Fm(e,o):"",i=e.selectedSource==="HA input"?`
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("thermostat-source"))}</p>
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
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-quickstart-thermostat-source" ${o||!e.canApply?"disabled":""}>
            ${o?"Thermostaatconfiguratie opslaan...":e.configurationApplied?"Thermostaatconfiguratie opnieuw opslaan":e.selectedSource==="OT thermostat"?"OpenTherm-configuratie activeren":"Thermostaatconfiguratie opslaan"}
          </button>
        </div>
        ${jt({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function _m(){return!t.quickStartModalOpen||t.loadingEntities||t.complete===null||t.complete&&t.quickStartModalMode!=="generation"?"":t.quickStartModalMode==="generation"?`
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
            ${Dm("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${s(vw().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${fw()}
            ${ww()}
          </div>
        </section>
      </div>
    `}function Wm(){return t.root?t.root.querySelector("[data-oq-quickstart-scroller]"):null}function Vm(){let e=Wm();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ba(e)}:null}function cw(e){if(!e)return;let o=Wm();if(!o||String(o.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){o.scrollTop=o.scrollHeight;return}let r=e.scrollTop+(o.scrollHeight-e.scrollHeight);o.scrollTop=Math.max(0,r)}function Tl(e,o=!0){if(!e)return;let r=Number(t.quickStartScrollRestoreToken||0)+1;t.quickStartScrollRestoreToken=r;let n=()=>{t.quickStartScrollRestoreToken!==r||!t.quickStartModalOpen||cw(e)};if(o){window.requestAnimationFrame(n);return}n()}function Om(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${hl()}
        ${dl("oq-settings-grid oq-settings-grid--quickstart")}
        ${jt()}
      </section>
    `}function uw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${ql("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${jt()}
      </section>
    `}function pw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${ml("oq-settings-grid oq-settings-grid--quickstart")}
        ${jt()}
      </section>
    `}function dw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(oe()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(oe()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${oe()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${fl()}</div>
            <div class="oq-settings-curve-shell">
              ${vl()}
            </div>
            ${pl()}
          `:`
            ${gl("oq-settings-grid oq-settings-grid--quickstart")}
            ${bl()}
          `}
        ${jt()}
      </section>
    `}function mw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${_s("oq-settings-grid oq-settings-grid--quickstart")}
        ${jt()}
      </section>
    `}function gw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${Ma("oq-settings-grid oq-settings-grid--quickstart")}
        ${jt()}
      </section>
    `}function hw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s($t("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${Sw()}
        ${t.controlNotice?`<p class="oq-helper-notice">${s(t.controlNotice)}</p>`:""}
        ${t.controlError?`<p class="oq-helper-error">${s(t.controlError)}</p>`:""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${t.busyAction?"disabled":""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${t.busyAction?"disabled":""}>
            ${t.busyAction==="apply"?"Afronden...":"Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${t.busyAction?"disabled":""}>
            ${t.busyAction==="reset"?"Resetten...":"Setup-status resetten"}
          </button>
        </div>
      </section>
    `}function fw(){return t.currentStep==="generation"?Dm():t.currentStep==="boiler"?h("boilerCvAssistEnabled")?uw():Om():t.currentStep==="flow-source"?sw():t.currentStep==="thermostat-source"?lw():t.currentStep==="flow"?pw():t.currentStep==="heating"?dw():t.currentStep==="water"?mw():t.currentStep==="silent"?gw():t.currentStep==="confirm"?hw():Om()}function Go(){return Qo.filter(e=>!e.optionalEntity||h(e.optionalEntity))}function $t(e){let o=Go().findIndex(r=>r.id===e);return`Stap ${Math.max(0,o)+1}`}function bw(e){let o=Qa(),r=e===o,n=t.complete===!0||e<o;return{tone:r?"current":n?"done":"upcoming",label:r?"Actief":n?"Gereed":"Volgend",current:r}}function yw(e=!1){return Go().map((o,r)=>{let n=bw(r);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${n.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${s(o.id)}"
          aria-current="${n.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(r+1).padStart(2,"0")}. ${s(o.title)}</h3>
            <span class="oq-helper-field-step-state">${n.label}</span>
          </div>
          <p>${s(o.copy)}</p>
        </button>
      `}).join("")}function vw(){let e=Go();return e.find(o=>o.id===t.currentStep)||e[0]||Qo[0]}function Qa(){return Math.max(0,Go().findIndex(e=>e.id===t.currentStep))}function El(e){let o=Go(),r=Math.min(o.length-1,Math.max(0,Qa()+e));t.currentStep=o[r]?.id||Qo[0].id}function jt(e={}){let o=Qa(),r=Go(),n=o>0?r[o-1]:null,a=o<r.length-1?r[o+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${o+1} van ${r.length}</strong>
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
    `}function ww(){let e=Qa(),o=Go();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${o.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${yw(!0)}
        </div>
        ${t.controlNotice?`<p class="oq-helper-notice">${s(t.controlNotice)}</p>`:""}
        ${t.controlError?`<p class="oq-helper-error">${s(t.controlError)}</p>`:""}
      </section>
    `}function Sw(){let e=we(O("hpGeneration")),o=oe()?"Stooklijn":"Power House",r=w=>we(O(w)),n=[],a=oe()?[["Regelprofiel",r("curveControlProfile")],["Aanvoer bij -20\xB0C",K("curveM20")],["Aanvoer bij -10\xB0C",K("curveM10")],["Aanvoer bij 0\xB0C",K("curve0")],["Aanvoer bij 5\xB0C",K("curve5")],["Aanvoer bij 10\xB0C",K("curve10")],["Aanvoer bij 15\xB0C",K("curve15")],["Fallback-aanvoer",K("curveFallbackSupply")]]:[["Profiel",r("phResponseProfile")],["Rated maximum house power",K("housePower")],["Maximum heating outdoor temperature",K("houseOutdoorMax")],["Temperatuurreactie",K("phKp")],["Comfort onder setpoint",K("phComfortBelow")],["Comfort boven setpoint",K("phComfortAbove")]],i=String(T("flowControlMode")||""),l=$r(),p=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],u=za(),c=[["Status",u.status],["Kamertemperatuur",Number.isFinite(u.roomTempValue)?`${u.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(u.roomSetpointValue)?`${u.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],g=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",K("manualIpwm")]:["Gewenste flow",K("flowSetpoint")]],y=h("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",x("boilerCvAssistEnabled")?"Ja":"Nee"],...x("boilerCvAssistEnabled")?[["Boiler rated heat power",K("boilerRatedHeatPower")]]:[]]:[],b=[["Maximale watertemperatuur",K("maxWater")]],v=[["Start stille uren",Vr(T("silentStartTime"))||"\u2014"],["Einde stille uren",Vr(T("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",K("silentMax")],["Maximaal niveau overdag",K("dayMax")]],m=w=>`
      <div class="oq-helper-review-list">
        ${w.filter(S=>S&&S[1]).map(([S,q])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(S)}</span>
                <strong class="oq-helper-review-value">${s(q)}</strong>
              </div>
            `).join("")}
      </div>
    `,f=(w,S,q="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(w)}</h3>
        ${q?`<p class="oq-helper-review-summary"><strong>${s(q)}</strong></p>`:""}
        ${m(S)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${f("Quatt Hybrid-versie",n,e)}
        ${f("Flowmeting",p,l.sourceLabel)}
        ${f("Verwarmingsstrategie",a,o)}
        ${f("Watertemperatuur",b)}
        ${f("Thermostaatgegevens",c,u.sourceLabel)}
        ${f("Flowregeling",g)}
        ${y.length?f("CV-ketel / boiler",y):""}
        ${f("Stille uren",v)}
      </div>
    `}function xn(e,o){return`
      <div class="oq-settings-cooling-fact">
        <span>${s(e)}</span>
        <strong>${s(o)}</strong>
      </div>
    `}function Cl(e){let o=String(e||"").trim();return o?{Ready:"Gereed","Waiting for room request":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","Cooling enabled, waiting for room temperature above cooling setpoint":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[o]||o:""}function Bm(){let e=!h("coolingRoomRequestRequired")||x("coolingRoomRequestRequired"),o=[ae("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),et("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${K("coolingDemandMax")} max`}),ae("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),ae("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),r=[h("coolingRoomRequestRequired")?sp("coolingRoomRequestRequired","Koelvraag via kamerthermostaat","Aan: OpenQuatt wacht op echte koelvraag vanuit de kamer. Uit: koeltoestemming geldt direct als koelvraag.","Koelvraag start en stopt met de marges hieronder.","Koeltoestemming geldt direct als koelvraag. De start- en stopmarge worden nu niet gebruikt.","oq-settings-field--span-2"):"",e?ae("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."):"",e?ae("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."):""].filter(Boolean),n=r.length>0,a=h("coolingWithoutDewPointMode"),i=[h("coolingGuardMode")?xn("Route",we(O("coolingGuardMode","Onbekend"))):"",h("coolingEffectiveMinSupplyTemp")?xn("Actieve ondergrens",O("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean),l=i.length?pe("coolingGuardStatus","Actuele beveiliging","Laat zien welke route koeling nu begrenst en welke ondergrens daadwerkelijk geldt.",`<div class="oq-settings-cooling-facts">${i.join("")}</div>`,"oq-settings-field--span-2 oq-settings-field--cooling-status"):"",p=[h("outsideTempSelected")?xn("Actuele buitentemperatuur",O("outsideTempSelected","\u2014")):"",h("coolingFallbackNightMinOutdoorTemp")?xn("Nachtminimum buitentemperatuur",O("coolingFallbackNightMinOutdoorTemp","\u2014")):"",h("coolingFallbackMinSupplyTemp")?xn("Berekende minimum watertemperatuur",O("coolingFallbackMinSupplyTemp","\u2014")):""].filter(Boolean),u=p.length?`<div class="oq-settings-cooling-fallback-metrics">${p.join("")}</div>`:"",c=a||p.length>0,y=O("coolingGuardMode","").toLowerCase().includes("fallback");if(!o.length&&!n&&!a&&!l&&!c)return"";let b={"Dew point required":"Gebruik alleen een betrouwbare dauwpuntmeting. Zonder meting blijft koeling uit.","Allow without dew point":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use fallback":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use dew point approximation":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, user responsibility":"Negeer dauwpunt en benadering; alleen de ingestelde minimale koel-aanvoer geldt."};return Z("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${o.length?`
          <div class="oq-settings-grid">
            ${o.join("")}
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
        ${a||l||c?`
          <div class="oq-settings-grid">
            ${a?cp("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",b,"oq-settings-field--span-2 oq-settings-field--cooling-guard-choice"):""}
            ${l}
            ${c?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline"${y?" open":""}>
              <summary>Dauwpuntsbenadering bekijken</summary>
              <div class="oq-settings-callout-body">
                ${u}
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
      `)}function Km(){let e=h("otEnabled"),o=h("cicPollingEnabled")||h("cicFeedUrl"),r=h("cicCompatibilityMode"),n=h("otLinkProblem")||h("cicDataStale")||h("cicJsonFeedOk");if(!e&&!o&&!r&&!n)return"";let a=qt("cicPollingEnabled"),i=qt("otEnabled"),l=({label:m,value:f,active:w=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${w?" is-warning":""}">
        <dt>${s(m)}</dt>
        <dd>${s(f)}</dd>
      </div>
    `,p=(m,f,w="Actief",S="Normaal",q={})=>{if(!h(m))return"";let E=U(m);return l({label:f,value:E?w:S,active:q.warningWhenActive?E:!1})},u=(m,f,w={})=>{let S=w.fallbackKey||"";return!h(m)&&!(S&&h(S))?"":l({label:f,value:ke(h(m)?m:S,w)})},c=(m,f)=>{let w=f.filter(Boolean).join("");return w?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(m)}</h4>
          <dl>${w}</dl>
        </article>
      `:""},g=h("cicFeedUrl")?`
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
            ${t.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",y=c("OpenTherm",[h("otLinkProblem")?l({label:"OT-link",value:i?U("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&U("otLinkProblem")}):"",p("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),p("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),u("otControlSetpoint","Control setpoint"),u("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),u("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),b=c("CIC-feed",[h("cicJsonFeedOk")?l({label:"JSON-feed",value:a?U("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!U("cicJsonFeedOk")}):"",h("cicDataStale")?l({label:"Data",value:a?U("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&U("cicDataStale")}):"",p("cicChEnabled","CH-vraag","Actief","Normaal"),p("cicCoolingEnabled","Koeling","Actief","Normaal"),u("cicControlSetpoint","Control setpoint"),u("cicRoomSetpoint","Room setpoint"),u("cicRoomTemp","Room temperature"),u("cicFlowrate","Flow"),u("cicLastSuccessAge","Laatste succes")]),v=y||b?`
      <details class="oq-settings-integration-diagnostics"${t.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${y}
          ${b}
        </div>
      </details>
    `:"";return Z("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${ma("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${ma("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${ma("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${g}
        </div>
        ${v}
      `)}function jm(){if(!Lr.some($=>h($)))return"";let o=qt("cicPollingEnabled"),r=qt("otEnabled"),n=($={})=>$.haValueKey||($.haKeys||[]).find(C=>!/valid$/i.test(C))||"",a=($={})=>$.haValidKey||($.haKeys||[]).find(C=>/valid$/i.test(C))||"",i=($="",C="")=>!!$&&!!C&&h($)&&h(C)&&U(C),l=($={})=>i(n($),a($)),p={mqttCoolingDewPoint:"cooling_dew_point",mqttOutsideTemperature:"outside_temperature",mqttRoomTemperature:"room_temperature",mqttRoomSetpoint:"room_setpoint",mqttHeatingEnable:"heating_enable",mqttCoolingEnable:"cooling_enable"},u=($={})=>$.mqttTopicKey||p[$.valueKey]||"",c=($="")=>{if(!$)return!0;let C=t.mqttStatus?.input_enabled;return C&&typeof C=="object"&&Object.prototype.hasOwnProperty.call(C,$)?C[$]!==!1:!0},g=$=>/\bMQTT\b/i.test(String($||"")),y=($,C={})=>$==="CIC"?o:$==="OT thermostat"?r:$==="HA input"?l(C):$==="CIC or HA input"?o||l(C):g($)?c(u(C)):$==="Flowmeter HP2"?h("hp2Flow"):$==="Local aggregate HP1/HP2"?h("flowLocal")||h("hp2Flow"):!0,b=($,C={})=>$==="CIC"&&!o?"CIC-polling staat uit":$==="OT thermostat"&&!r?"OpenTherm staat uit":$==="HA input"&&!l(C)?"HA-bron ongeldig":$==="CIC or HA input"&&!o&&!l(C)?"CIC en HA ontbreken":g($)&&!c(u(C))?"MQTT-topic staat uit":$==="Flowmeter HP2"&&!h("hp2Flow")?"HP2-flow ontbreekt":$==="Local aggregate HP1/HP2"&&!h("flowLocal")&&!h("hp2Flow")?"Lokale flow ontbreekt":"",v=($,C="Actief",D="Normaal")=>h($)?U($)?C:D:"",m=($,C={})=>{let D=String($||"").trim();return D?C.optionLabels?.[D]||we(D):""},f=($,C={})=>{let D=String(T($)||"").trim();return D?m(D,C):""},w=$=>{let C=No($,"");return C?we(C):""},S=$=>{let C=String(No($,"")||"").trim();return!C||C==="None"?"":we(C)},q=(...$)=>$.find(C=>String(C||"").trim())||"",E=()=>{let $=f("waterSupplySource");if(String(T("waterSupplySource")||"")==="Local"&&h("localWaterSupplyTempSource")){let C=f("localWaterSupplyTempSource");return C?`${$} - ${C}`:$}return $},k=()=>{let $=String(T("flowSource")||"").trim();if($==="Outdoor unit"){if(h("qFlowSource")){let C=String(T("qFlowSource")||"").trim(),D=String(T("hpGeneration")||"").trim();return C==="Local"||C==="Auto"&&D==="V1"?C==="Auto"?"Lokaal (auto)":"Lokaal":q(f("outdoorUnitFlowMode"),C==="Auto"?"Buitenunit (auto)":"Buitenunit")}return q(f("outdoorUnitFlowMode"),"Quatt-flow")}return we($)},M=()=>{let $=String(T("outsideTempSource")||"").trim();if($==="MQTT"&&!c("outside_temperature"))return"MQTT-topic staat uit";if($!=="Auto")return we($);let C=A("outsideTempLocalAggregated"),D=A("outsideTempHa"),B=A("mqttOutsideTemperature"),Q=!Number.isNaN(C),ne=h("outsideTempHaValid")?U("outsideTempHaValid")&&!Number.isNaN(D):!Number.isNaN(D),be=c("outside_temperature")&&h("mqttOutsideTemperatureValid")&&U("mqttOutsideTemperatureValid")&&!Number.isNaN(B),te=[Q?{label:"Buitenunit",value:C}:null,ne?{label:"HA-invoer",value:D}:null,be?{label:"MQTT",value:B}:null].filter(Boolean);return te.length?te.reduce((xe,ye)=>ye.value<xe.value?ye:xe,te[0]).label:"Auto"},V=$=>{if(!h($))return NaN;let C=Number(T($));if(Number.isFinite(C))return C;let B=String(t.entities[$]?.state??"").trim().replace(",",".").match(/-?\d+(?:\.\d+)?/);return B?Number(B[0]):NaN},F=($,C="")=>{if(!h($))return!1;let D=V($);return(C?U(C):!0)&&Number.isFinite(D)},ee=()=>{let $=String(T("coolingDewPointSource")||"").trim();if($==="Home Assistant")return F("coolingDewPointHa","coolingDewPointHaValid")?"HA-invoer":"HA-invoer ontbreekt";if($==="MQTT")return c("cooling_dew_point")?F("mqttCoolingDewPoint","mqttCoolingDewPointValid")?"MQTT":"MQTT ontbreekt of verouderd":"MQTT-topic staat uit";let C=F("coolingDewPointHa","coolingDewPointHaValid"),D=c("cooling_dew_point")&&F("mqttCoolingDewPoint","mqttCoolingDewPointValid");if(C&&D){let B=V("coolingDewPointHa");return V("mqttCoolingDewPoint")>B?"MQTT":"HA-invoer"}return C?"HA-invoer":D?"MQTT":$?we($):"Auto"},H=({label:$,value:C="",key:D="",active:B=!1,status:Q="",statusTone:ne="",statusTitle:be=""})=>{let te=C||(D?ke(D):"");if(!te&&!Q)return"";let xe=String(ne||"").replace(/[^a-z0-9_-]/gi,""),ye=be||Q,le=Q?`<em class="oq-settings-source-status${xe?` oq-settings-source-status--${s(xe)}`:""}" title="${s(ye)}" aria-label="${s(`${Q}: ${ye}`)}">${s(Q)}</em>`:"";return`
        <div class="oq-settings-source-row${B?" is-warning":""}${Q?" has-status":""}">
          <span>${s($)}${le}</span>
          <strong>${s(te)}</strong>
        </div>
      `},G=({label:$="HA-invoer",valueKey:C="",validKey:D="",value:B=""})=>{if(!C||!D||!h(C)||!h(D))return[];let Q=U(D);return[H({label:$,key:C,value:B,status:Q?"Geldig":"Ongeldig",statusTone:Q?"valid":"invalid",statusTitle:Q?"Home Assistant geeft dit signaal geldig door. OpenQuatt mag deze HA-invoer gebruiken.":"Home Assistant geeft dit signaal niet geldig door. OpenQuatt gebruikt deze HA-invoer dan niet als bron."})]},X=({label:$="MQTT",valueKey:C="",validKey:D="",value:B="",topicKey:Q=""})=>{if(!C||!D||!h(C)||!h(D))return[];if(!c(Q||p[C]))return[];let ne=U(D),be=ne?"MQTT heeft een geldige, recente waarde ontvangen. OpenQuatt mag deze MQTT-invoer gebruiken.":"MQTT heeft nog geen geldige recente waarde ontvangen. OpenQuatt gebruikt deze MQTT-invoer dan niet als bron.";return[H({label:$,key:C,value:ne?B:"\u2014",status:rs(D),statusTone:ne?"valid":"invalid",statusTitle:be})]},de=({title:$,icon:C="",content:D="",rows:B=[],copy:Q="",className:ne=""})=>{let be=B.filter(Boolean).join("");return!D&&!be&&!Q?"":`
        <section class="oq-settings-source-group${ne?` ${s(ne)}`:""}">
          <h5>
            ${C?`<span class="oq-settings-source-group-icon">${st(C,"oq-settings-source-group-icon-svg")}</span>`:""}
            <span>${s($)}</span>
          </h5>
          ${D?`<div class="oq-settings-source-group-content">${D}</div>`:""}
          ${be?`<div class="oq-settings-source-rows">${be}</div>`:""}
          ${Q?`<p class="oq-settings-source-group-copy">${s(Q)}</p>`:""}
        </section>
      `},se=($,C={})=>{if(!h($))return{markup:"",warning:""};let D=t.entities[$]||{},B=String(T($)||""),Q=Ft(D),ne=new Set(C.hiddenOptions||[]),be=B&&ne.has(B),te=Q.filter(ue=>!ne.has(ue)&&y(ue,C)),xe=B&&!y(B,C),ye=B==="HA input"&&C.keepUnavailableCurrent!==!0,Ht=(be&&!te.includes(B)?[B,...te]:xe&&!ye&&!te.includes(B)?[B,...te]:te).map(ue=>{let bo=m(ue,C);return`<option value="${s(ue)}" ${ue===B?"selected":""}>${s(bo)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s(C.label||"Bron")}</span>
              ${C.infoCopy?ao(C.infoId||$,C.infoTitle||C.label||"Bron",C.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s($)}" ${t.loadingEntities?"disabled":""}>
              ${Ht}
            </select>
          </label>
        `,warning:be?"Huidige bron is legacy; kies een nieuwe bron.":xe?`Huidige bron niet beschikbaar: ${b(B,C)}`:""}},N=({key:$,title:C,icon:D="",select:B,secondarySelect:Q=null,secondarySelects:ne=null,activeRows:be=[],measurementRows:te=[],activeCopy:xe="",rows:ye=[]})=>{let le=B&&B.when!==!1?se(B.key,B):{markup:"",warning:""},ue=(Array.isArray(ne)?ne:Q?[Q]:[]).filter(ve=>ve&&ve.when!==!1).map(ve=>se(ve.key,ve)).filter(ve=>ve.markup),bo=ue.map(ve=>ve.markup).join(""),Re=ue.map(ve=>ve.warning).find(Boolean)||"",Ve=ye.filter(Boolean).join(""),Ge=`${le.markup}${bo}`,ze=le.warning||Re,yo=[de({title:"Configuratie",icon:"settings",className:"oq-settings-source-group--config",content:Ge?`
            <div class="oq-settings-source-controls">
              ${Ge}
            </div>
            ${ze?`<p class="oq-settings-source-warning">${s(ze)}</p>`:""}
          `:""}),de({title:"Actief",icon:"target",rows:be,copy:xe,className:"oq-settings-source-group--active"}),de({title:"Metingen",icon:"activity",rows:te,className:"oq-settings-source-group--measurements"})].filter(Boolean).join("");return!yo&&!Ge&&!Ve?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s($||B.key)}">
          <div class="oq-settings-source-card-head">
            ${D?`<span class="oq-settings-source-card-icon">${st(D,"oq-settings-source-card-icon-svg")}</span>`:""}
            <h4>${s(C)}</h4>
          </div>
          ${yo||`
            ${Ge?`
              <div class="oq-settings-source-controls">
                ${Ge}
              </div>
            `:""}
            ${ze?`<p class="oq-settings-source-warning">${s(ze)}</p>`:""}
            ${Ve?`<div class="oq-settings-source-rows">${Ve}</div>`:""}
          `}
        </article>
      `},Y=String(T("waterSupplySource")||""),P=String(T("flowSource")||""),I=String(T("qFlowSource")||""),z=String(T("heatingEnableSource")||"").trim()==="Disabled",We=f("heatingEnableSource",{optionLabels:{Disabled:"Niet gebruiken"}}),ft=String(T("coolingEnableSource")||"").trim()==="Disabled",it={Disabled:"Niet gebruiken / handmatig",CIC:"CIC (legacy)","CIC or HA input":"CIC of HA-invoer (legacy)"},At=f("coolingEnableSource",{optionLabels:it}),Ue=S("coolingEnableEffectiveSource"),Me=[N({key:"room-temperature",title:"Kamertemperatuur",icon:"thermometer",select:{key:"roomTempSource",label:"Bron",haKeys:["roomTempHa","roomTempHaValid"],mqttTopicKey:"room_temperature"},activeRows:[H({label:"Waarde",key:"roomTemp"}),H({label:"Bron",value:w("roomTempEffectiveSource")})],measurementRows:[o?H({label:"CIC",key:"cicRoomTemp"}):"",r?H({label:"OpenTherm",key:"otRoomTemp"}):"",...G({valueKey:"roomTempHa",validKey:"roomTempHaValid"}),...X({valueKey:"mqttRoomTemperature",validKey:"mqttRoomTemperatureValid"})]}),N({key:"room-setpoint",title:"Kamer setpoint",icon:"target",select:{key:"roomSetpointSource",label:"Bron",haKeys:["roomSetpointHa","roomSetpointHaValid"],mqttTopicKey:"room_setpoint"},activeRows:[H({label:"Waarde",key:"roomSetpoint"}),H({label:"Bron",value:w("roomSetpointEffectiveSource")})],measurementRows:[o?H({label:"CIC",key:"cicRoomSetpoint"}):"",r?H({label:"OpenTherm",key:"otRoomSetpoint"}):"",...G({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"}),...X({valueKey:"mqttRoomSetpoint",validKey:"mqttRoomSetpointValid"})]}),N({key:"water-supply",title:"Aanvoertemperatuur",icon:"droplet",select:{key:"waterSupplySource",label:"Bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:Y==="Local"&&h("localWaterSupplyTempSource")},activeRows:[H({label:"Waarde",key:"supplyTemp"}),H({label:"Bron",value:E()})],measurementRows:[H({label:"Lokale selectie",key:"waterSupplyTempEsp"}),H({label:"PT1000",key:"waterSupplyTempPt1000"}),H({label:"DS18B20",key:"waterSupplyTempDs18b20"}),o?H({label:"CIC",key:"cicWaterSupplyTemp"}):"",...G({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),N({key:"flow-source",title:"Flow",icon:"waves",select:{key:"flowSource",label:"Bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:o||P==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Flowpad",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:P==="Outdoor unit"&&h("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Meterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:P==="Outdoor unit"&&h("outdoorUnitFlowMode")&&(!h("qFlowSource")||I!=="Local")}],activeRows:[H({label:"OpenQuatt-flow",key:"flowSelected"}),H({label:"Bron",value:k()})],measurementRows:[H({label:"Controller-flowmeter",key:"controllerFlow"}),H({label:"Gecombineerd HP1/HP2",key:"flowLocal"}),H({label:"Flowmeter HP1",key:"hp1Flow"}),H({label:"Flowmeter HP2",key:"hp2Flow"}),o?H({label:"CIC",key:"cicFlowrate"}):""]}),N({key:"outside-temperature",title:"Buitentemperatuur",icon:"sun",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],mqttTopicKey:"outside_temperature",infoId:"outsideTempSource-auto-info",infoCopy:i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn buitenunit, HA-invoer en MQTT geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een bron geldig, dan wordt die gebruikt.":"Auto gebruikt de laagste geldige buitentemperatuurbron."},activeRows:[H({label:"Waarde",key:"outsideTempSelected"}),H({label:"Bron",value:M()})],measurementRows:[H({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...G({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"}),...X({valueKey:"mqttOutsideTemperature",validKey:"mqttOutsideTemperatureValid"})]}),N({key:"heating-enable",title:"Warmtetoestemming",icon:"flame",select:{key:"heatingEnableSource",label:"Bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],mqttTopicKey:"heating_enable",keepUnavailableCurrent:!0},activeRows:[H({label:"Toestemming",value:z?"Niet gebruikt":v("heatingEnableSelected","Toegestaan","Geblokkeerd")}),z?"":H({label:"Bron",value:We})],measurementRows:[r?H({label:"OpenTherm",value:v("otThermostatChEnable","Toegestaan","Geblokkeerd")}):"",o?H({label:"CIC",value:v("cicChEnabled","Toegestaan","Geblokkeerd")}):"",...G({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:v("heatingEnableHa","Toegestaan","Geblokkeerd")}),...X({valueKey:"mqttHeatingEnable",validKey:"mqttHeatingEnableValid",value:v("mqttHeatingEnable","Toegestaan","Geblokkeerd")})]}),N({key:"cooling-enable",title:"Koeltoestemming",icon:"snowflake",select:{key:"coolingEnableSource",label:"Bron",optionLabels:it,hiddenOptions:["CIC","CIC or HA input"],haKeys:["coolingEnableHa","coolingEnableHaValid"],mqttTopicKey:"cooling_enable",keepUnavailableCurrent:!0},activeRows:[H({label:"Toestemming",value:v("coolingEnableSelected","Toegestaan","Geblokkeerd")}),ft?"":H({label:"Bron",value:At}),Ue&&Ue!==At?H({label:"Via",value:Ue}):""],measurementRows:[H({label:"Handmatig",value:v("manualCoolingEnable","Aan","Uit")}),r?H({label:"OpenTherm",value:v("otThermostatCoolingEnable","Toegestaan","Geblokkeerd")}):"",...G({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:v("coolingEnableHa","Toegestaan","Geblokkeerd")}),...X({valueKey:"mqttCoolingEnable",validKey:"mqttCoolingEnableValid",value:v("mqttCoolingEnable","Toegestaan","Geblokkeerd")})]}),N({key:"cooling-dew-point",title:"Koelingsdauwpunt",icon:"thermometer",select:{key:"coolingDewPointSource",label:"Bron",haKeys:["coolingDewPointHa","coolingDewPointHaValid"],mqttTopicKey:"cooling_dew_point",infoId:"coolingDewPointSource-info",infoCopy:"Auto gebruikt de hoogste geldige waarde als Home Assistant en MQTT tegelijk geldig zijn. Kies Home Assistant of MQTT om die bron expliciet te vereisen."},activeRows:[H({label:"Waarde",key:"coolingDewPointSelected"}),H({label:"Bron",value:ee()})],measurementRows:[...G({valueKey:"coolingDewPointHa",validKey:"coolingDewPointHaValid"}),...X({valueKey:"mqttCoolingDewPoint",validKey:"mqttCoolingDewPointValid"})]})].filter(Boolean);return Me.length?Z("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${Me.join("")}</div>`):""}function Um(){let e=as(),r=t.mqttStatus?.enabled===!0?`
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
    `:"";return Z("Integratie","MQTT inputbronnen","Beheer de brokerverbinding voor externe MQTT-bronwaarden.",`
        <div class="oq-settings-mqtt-shell">
          <section class="oq-settings-mqtt-panel oq-settings-mqtt-panel--broker">
            <div class="oq-settings-field-head">
              <h3>MQTT brokerconfiguratie</h3>
            </div>
            <div class="oq-settings-quickstart-status-row oq-settings-mqtt-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(Au())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(Hu())}</p>
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
      `)}function Gm(){return Z("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${s(gn())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(hn())}</p>
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
                <strong class="oq-settings-quickstart-status-value">${s(gr())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(hr())}</p>
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
      `)}function zm(){let e=Pe.has(t.settingsGroup)?t.settingsGroup:me[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${me.map(o=>`
          <button
            class="oq-settings-group-button${o.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(o.id)}"
            aria-pressed="${o.id===e?"true":"false"}"
          >
            ${st(o.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(o.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function Qm(){let e=Pe.has(t.settingsGroup)?t.settingsGroup:me[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[Am(),Hm(),Sm(),md(),ld(),Pm(),xm()]:e==="service"?[$m(),pd()]:e==="heating"?[qm()]:e==="cooling"?[Bm()]:e==="integrations"?[Km(),Um(),jm()]:[Mm(),cm(),Gm(),pm(),Rm()]).filter(Boolean).join("")}
      </div>
    `}function qw(){if(!t.root||t.appView!=="settings")return!1;let e=t.root.querySelector(".oq-settings-group-nav"),o=t.root.querySelector(".oq-settings-group-stack");if(!e||!o)return!1;let r=Pe.has(t.settingsGroup)?t.settingsGroup:me[0].id;if(r==="service")return!1;let n=e.querySelectorAll(".oq-settings-group-button");if(n.length!==me.length)return!1;n.forEach(m=>{let w=String(m.dataset.groupId||"")===r;m.classList.toggle("is-active",w),m.setAttribute("aria-pressed",w?"true":"false")}),o.querySelectorAll(".oq-settings-info").forEach(m=>{let f=String(m.dataset.oqSettingsInfo||""),w=t.settingsInfoOpen===f;m.classList.toggle("is-open",w);let S=m.querySelector(".oq-settings-info-popover");S&&(S.hidden=!w);let q=m.querySelector(".oq-settings-info-button");q&&q.setAttribute("aria-expanded",w?"true":"false")}),o.querySelectorAll("[data-oq-settings-field]").forEach(m=>{let f=String(m.dataset.oqSettingsField||"");if(!f)return;let w=m.querySelector(".oq-settings-static-value");if(w){let E=O(f);w.textContent!==E&&(w.textContent=E)}m.querySelectorAll("select[data-oq-field]").forEach(E=>{let k=String(E.dataset.oqField||f),M=String(T(k)||"");E.value!==M&&(E.value=M)}),m.querySelectorAll("input[data-oq-field]").forEach(E=>{let k=String(E.dataset.oqField||f),M=String(Ee(k)||"");E.value!==M&&(E.value=M)});let S=m.querySelector(".oq-helper-slider-meta strong"),q=m.querySelector('input[type="range"][data-oq-field]');if(S&&q){let E=K(f,he(f,T(f)));S.textContent!==E&&(S.textContent=E)}}),o.querySelectorAll("[data-select-key]").forEach(m=>{let f=String(m.dataset.selectKey||""),w=String(m.dataset.selectOption||""),S=String(T(f)||""),q=w===S;m.classList.toggle("is-active",q),m.setAttribute("aria-pressed",q?"true":"false"),f==="strategy"?m.disabled=t.loadingEntities||t.busyAction==="save-strategy":f==="hpGeneration"?m.disabled=t.loadingEntities||t.busyAction==="save-hpGeneration":f==="curveControlProfile"?m.disabled=t.loadingEntities||t.busyAction==="save-curveControlProfile":f==="phResponseProfile"&&(m.disabled=t.loadingEntities||t.busyAction==="save-phResponseProfile");let E=m.closest(".oq-settings-choice-card-shell");E&&E.classList.toggle("is-active",q)});let a=o.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){let m=String(T("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",m),a.querySelectorAll("input[data-oq-field]").forEach(w=>{let S=String(w.dataset.oqField||""),q=String(Ee(S)||"");w.value!==q&&(w.value=q)})}o.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(m=>{let f=String(m.dataset.controlKey||""),w=!!T(f),S=String(m.dataset.onLabel||"Aan"),q=String(m.dataset.offLabel||"Uit"),E=String(m.dataset.switchTitle||f),k=w?S:q;m.dataset.controlState=w?"off":"on",m.classList.toggle("is-on",w),m.setAttribute("aria-checked",w?"true":"false"),m.setAttribute("aria-label",`${E}: ${k}`),m.disabled=t.loadingEntities||t.busyAction===`switch-${f}`}),o.querySelectorAll("[data-oq-switch-pill]").forEach(m=>{let f=String(m.dataset.oqSwitchPill||""),w=!!T(f),S=String(m.dataset.onLabel||"Aan"),q=String(m.dataset.offLabel||"Uit"),E=w?S:q;m.classList.toggle("is-on",w),m.textContent!==E&&(m.textContent=E)}),o.querySelectorAll("[data-oq-switch-copy]").forEach(m=>{let f=String(m.dataset.oqSwitchCopy||""),w=!!T(f),S=String(m.dataset.onCopy||""),q=String(m.dataset.offCopy||""),E=w?S:q;m.hidden=!E,m.textContent!==E&&(m.textContent=E)});let i=o.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){let m=i.querySelector(".oq-settings-quickstart-status-value"),f=i.querySelector(".oq-settings-quickstart-status-copy"),w=i.querySelector('button[data-oq-action="open-generation-modal"]'),S=dt(),q=t.entities.hpGeneration||{},E=h("hpGeneration")&&Ft(q).length>0;if(m){let k=S||"Onbekend";m.textContent!==k&&(m.textContent=k)}if(f){let k="Pas dit aan als je een andere Quatt Hybrid hebt.";f.textContent!==k&&(f.textContent=k)}w&&(w.disabled=!E||t.loadingEntities||t.busyAction==="save-hpGeneration")}let l=o.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){let m=l.querySelector(".oq-settings-quickstart-status-value"),f=l.querySelector(".oq-settings-quickstart-status-copy"),w=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),S=da(),q=x("cm100Active");m&&m.textContent!==S&&(m.textContent=S);let E=q?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";f&&f.textContent!==E&&(f.textContent=E),w&&(w.disabled=t.loadingEntities)}let p=o.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(p){let m=p.querySelector(".oq-settings-quickstart-status-value"),f=p.querySelector(".oq-settings-quickstart-status-copy"),w=p.querySelector('button[data-oq-action="reset"]'),S=t.complete===!0?"Afgerond":t.complete===!1?"Open":"Laden...",q=t.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":t.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";m&&m.textContent!==S&&(m.textContent=S),f&&f.textContent!==q&&(f.textContent=q),w&&(w.disabled=t.busyAction==="reset")}let u=o.querySelectorAll("[data-oq-access-security-item]");u.length&&u.forEach(m=>{let f=String(m.dataset.oqAccessSecurityItem||""),w=m.querySelector(".oq-settings-quickstart-status-value"),S=m.querySelector(".oq-settings-quickstart-status-copy"),q=m.querySelector("button[data-oq-action]");if(f==="login"){let E=gn(),k=hn();w&&w.textContent!==E&&(w.textContent=E),S&&S.textContent!==k&&(S.textContent=k)}else if(f==="api"){let E=gr(),k=hr();w&&w.textContent!==E&&(w.textContent=E),S&&S.textContent!==k&&(S.textContent=k)}q&&(q.disabled=!1)});let c=o.querySelector(".oq-settings-system-summary");if(c){let m=c.querySelectorAll(".oq-settings-system-row"),f={uptime:nr(),ip:ar(),updates:lo(),datetime:pa(),espTemp:ja(),restart:"Opnieuw opstarten"};m.forEach(q=>{let E=q.querySelector(".oq-settings-system-row-value"),k=q.dataset.oqDiagnosticsRow||"";if(E&&Object.prototype.hasOwnProperty.call(f,k)){let M=f[k];E.textContent!==M&&(E.textContent=M)}});let w=c.querySelector('button[data-oq-action="open-update-modal"]');w&&(w.disabled=!1);let S=c.querySelector('button[data-oq-action="open-restart-confirm"]');if(S){let q=t.busyAction==="restartAction";S.disabled=q,S.textContent=q?"Herstarten...":"Herstarten"}}o.querySelectorAll(".oq-settings-hp-offset-row").forEach(m=>{let f=String(m.dataset.oqSettingsField||""),w=String(m.dataset.oqHpOffsetRawKey||""),S=String(m.dataset.oqHpOffsetFinalKey||"");if(!f||!w||!S)return;let q=Oe(f),E=fn(w,S,f),k=$e(Ee(f)),M=Number.isFinite(E)&&Number.isFinite(k)?Lt(E+k,q.uom||"\xB0C",2):Se(S,2),V=m.querySelector("[data-oq-hp-offset-active]");if(V){let H=`${Se(S,2)} actief`;V.textContent!==H&&(V.textContent=H)}let F=m.querySelector("[data-oq-hp-offset-raw]");if(F){let H=Number.isFinite(E)?Lt(E,q.uom||"\xB0C",2):Se(w,2);F.textContent!==H&&(F.textContent=H)}let ee=m.querySelector("[data-oq-hp-offset-final]");ee&&ee.textContent!==M&&(ee.textContent=M)});let g=o.querySelector(".oq-settings-curve-shell"),y=oe();if(!!g!==y)return!1;let b=!!a,v=String(T("phResponseProfile")||"")==="Custom";return b===v}vu({patch:qw});function Tw({label:e,value:o,tone:r,note:n,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(r)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(o)}</strong>
        <span>${s(n)}</span>
      </article>
    `}function Hn(e,o=!1){return e.map(r=>Tw({...r,value:Object.prototype.hasOwnProperty.call(r,"key")?Ze(r.key):r.value,status:o})).join("")}function Al(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function Hl(){let e=Ot();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(Ce(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(o=>o.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function Xm({className:e,title:o,copy:r,body:n,signature:a=""}){let i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${o?`<div class="oq-overview-system-copy"><h3>${s(o)}</h3><p>${s(r)}</p></div>`:""}
        ${n}
      </section>
    `}function Ym(e){let o=String(e||"").trim();return{None:"geen bron",Manual:"handmatig",Disabled:"handmatig","HA input":"HA-invoer",MQTT:"MQTT","OT thermostat":"OpenTherm","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OpenTherm + handmatig"}[o]||o}function $n(e,o){return!o||o==="geen bron"?e:`${e} Toestemming: ${o}.`}function Ml(e,o){return o?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function Ew(e,o){let r=o?"active":"neutral",n=Ml(e,o);return`<span class="oq-overview-chip oq-overview-chip--${s(r)}" data-oq-bind="panel-status">${s(n)}</span>`}function Cw(e){return`
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
    `}function Rl(e,o,r,n){return`${r?Cw(n):""}${Ew(e,o)}`}function eg(e,o,r,n,a){if(!e)return;let i=Ce({mode:o,running:r,warningActive:n,failureText:a});e.dataset.renderSignature!==i&&(xt(e,Rl(o,r,n,a)),e.dataset.renderSignature=i)}function Ya(e,o,r=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(r||O(o))}</strong>
      </div>
    `}function kw(e,o,r="blue",n=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(r)}">
        <span>${s(e)}</span>
        <strong>${s(o)}</strong>
        ${n?`<p>${s(n)}</p>`:""}
      </article>
    `}function xw(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function $w(e){if(!Number.isFinite(e)||e<0)return"\u2014";let o=Math.floor(e),r=Math.floor(o/1440),n=Math.floor(o%1440/60),a=o%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function Aw(e){let r=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!r)return Number.NaN;let n=Number(r[1]),a=Number(r[2]);return Number.isNaN(n)||Number.isNaN(a)||n<0||n>23||a<0||a>59?Number.NaN:n*60+a}function Hw(e){let o=Aw(O("timeNowHhmm",""));if(!Number.isFinite(o))return"";let r=Math.round(e),n=((o-r)%1440+1440)%1440,a=Math.floor(n/60),i=n%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Mw(e,o){let r=Math.max(0,(Number(o)-Number(e))/6e4),n=$w(r),a=h("timeValid")&&x("timeValid")?Hw(r):"";return a?{value:a,note:`${n} geleden`}:{value:`${n} geleden`,note:"Geen tijdsync"}}function Rw(e){let o=Number(e);return Number.isNaN(o)?"\u2014":`${o>0?"+":o<0?"-":""}${Math.abs(o).toFixed(0)} W`}function tg(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>h(e))||""}function Pw(){return["hp1WaterIn","hp2WaterIn"].find(e=>h(e))||""}function og(e=O("controlModeLabel","")){let o=String(e||"").toLowerCase();return o.includes("cm5")||o.includes("cooling")||o.includes("koeling")}function fo(){return og()}function rg(e,o){let r=String(e||"").trim().toLowerCase();return r==="waiting for room request"||r==="wacht op kamervraag"||r==="cooling enabled, waiting for room temperature above cooling setpoint"||r==="koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint"?!0:o?!1:r==="flow too low"||r==="flow te laag"||r==="flow unavailable"}function Pl(){return fo()?"Koeling":oe()?"Stooklijn":"Power House"}function Nw(){let e=["phouseReq","strategyRequestedPower"];for(let o of e){let r=A(o);if(!Number.isNaN(r))return r}return Number.NaN}function ng(){let e=Nw(),o=A("phouseHouse"),r=A("totalHeat"),n=A("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(o)?Number.NaN:e-o,i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(n)&&e>n+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(r)&&r<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&r>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:_(e,0,"W"),houseText:_(o,0,"W"),correctionText:Rw(a),capacityText:Ze("hpCapacity"),statusTitle:i,statusCopy:l}}function ag(){let e=A("curveSupplyTarget"),o=A("supplyTemp"),r=tg(),n=r?A(r):Number.NaN,a=Number.isNaN(e)||Number.isNaN(o)?Number.NaN:o-e,i=!!r&&Number.isNaN(n),l="Stuurt op buitentemperatuur",p="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",p="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",p="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",p="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",p="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:Ze("curveSupplyTarget"),supplyText:Ze("supplyTemp"),deltaText:xw(a),capacityText:Ze("hpCapacity"),statusTitle:l,statusCopy:p}}function ig(){let e=A("supplyTemp"),o=O("coolingGuardMode",""),r=O("coolingFallbackNightMinOutdoorTemp","\u2014"),n=A("coolingSupplyError"),a=A("coolingDemandRaw"),i=x("coolingPermitted"),l=x("coolingRequestActive"),p=O("coolingBlockReason","Onbekend"),u=Cl(p),c=rg(p,l),g="Wacht op koelvraag",y="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return c?(g="Wacht op koelvraag",y="Koeling is toegestaan en wacht tot de kamertemperatuur boven het koel-setpoint komt."):i?l?!Number.isNaN(a)&&a<=0?(g="Houdt doel vast",y="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(n)&&n>1?(g="Trekt aanvoer omlaag",y="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(n)&&n>.2?(g="Benadert koeldoel",y="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(n)||(g="Koelt rustig door",y="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(g="Koeling gereed",y="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(g="Koeling geblokkeerd",y=`Blokkade: ${u}.`),{targetText:Ze("coolingSupplyTarget"),supplyText:Ze("supplyTemp"),safeFloorText:Ze("coolingEffectiveMinSupplyTemp"),guardMode:o,fallbackNightMin:r,demandText:Ze("coolingDemandRaw"),statusTitle:g,statusCopy:y,permitted:i,requestActive:l,blockReason:u,waitingForRoomRequest:c}}function Ja(){if(fo()){let o=ig(),r=o.guardMode.toLowerCase(),n=r.includes("user responsibility"),a=r.includes("fallback");return{title:"Koelregeling",copy:n?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:o.targetText,focusCopy:o.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:o.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:n?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:o.safeFloorText,tone:"blue",note:n?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${o.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:o.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(oe()){let o=ag();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:o.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:o.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:o.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:o.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}let e=ng();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function Nl(e){return Xm({className:"oq-overview-system",title:e.title,copy:e.copy,signature:Ce(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(o=>kw(o.label,o.value,o.tone,o.note)).join("")}
        </div>
      `})}function Ow(){if(!x("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(fo()){let n=ig(),a=n.waitingForRoomRequest?"neutral":n.permitted?n.statusTitle==="Koelt rustig door"||n.statusTitle==="Houdt temperatuur vast"?"green":n.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:n.statusTitle,tone:a}}if(Od())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};let o=(oe()?ag():ng()).statusTitle;return{label:"Regeling nu",value:o,tone:o==="In balans"||o==="Dicht bij doel"?"green":o==="Nog aan het opbouwen"||o==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function Dw(){return x("openquattEnabled")?fo()?x("coolingPermitted")?x("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:O("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:x("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:x("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function Ol(e,o){let r=Ow(),n=Dw();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:o,tone:"orange",note:"actieve modus"},{label:"Regeling",value:r.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:n.value,tone:"orange",note:"actieve randvoorwaarde"}]}function Dl(e,o){let r=Ol(e,o);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(Ce(r))}">
        ${Al("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${Hn(r,!0)}
        </div>
      </section>
    `}function Ll(){let e=fo();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function Lw(){let e=x("openquattEnabled"),o=T("openquattResumeAt"),r=Br(o),n=(t.loadingEntities||t.entitySyncInFlight)&&!h("openquattResumeAt"),a=x("manualCoolingEnable"),i=h("coolingEnableSelected")?x("coolingEnableSelected"):a,l=Ym(O("coolingEnableEffectiveSource","")),p=String(T("coolingEnableSource")||"").trim(),u=Ym(T("coolingEnableSource")),c=String(T("silentModeOverride")||"Schedule"),g=!x("coolingPermitted"),y=x("coolingRequestActive"),b=og(),v=O("coolingBlockReason",""),m=rg(v,y),f="Uit",w=p==="Disabled"?"Koeling is niet toegestaan: handmatig staat uit.":u&&u!=="geen bron"?`Koeling is niet toegestaan: ${u} geeft geen toestemming en handmatig staat uit.`:"Koeling is niet toegestaan.";i&&b?(f="Actief",w=$n("Koeling draait nu.",l)):i&&m?(f="Aan",w=$n("Koeling is toegestaan en wacht op kamertemperatuur boven het koel-setpoint.",l)):i&&g?(f="Geblokkeerd",w=$n(Cl(v||"Koeling wacht nog op veilige condities."),l)):i&&y?(f="Start bijna",w=$n("Er is koelvraag. Koeling start zodra dat kan.",l)):i&&(f="Aan",w=$n("Koeling is toegestaan en wacht op koelvraag.",l));let S="Uit",q="Stille modus staat uit.",E="neutral";return c==="On"?(S="Aan",q="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",E="orange"):c==="Schedule"&&(S="Schema",x("silentActive")?(q="Stille modus staat nu aan via het tijdvenster.",E="violet"):q="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":r?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[n?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:r?"Hervat automatisch":"Hervatten",value:r?Xo(o,!0):"Handmatig",tone:r?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:f,copy:w,buttonLabel:a?"Handmatig uit":"Handmatig aan",nextState:a?"off":"on",tone:i?b?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:S,copy:q,tone:E,kind:"select",selectedOption:c,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(k=>h(k.key))}function Fw(e=[]){return e.length?`
      <div class="oq-overview-controlpanel-meta">
        ${e.map(o=>`
          <div class="oq-overview-controlpanel-meta-item oq-overview-controlpanel-meta-item--${s(o.tone||"neutral")}${o.loading?" oq-overview-controlpanel-meta-item--loading":""}">
            <span>${s(o.label)}</span>
            <strong>${o.loading?`
              <span class="oq-overview-controlpanel-loading">
                <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
                <span>${s(o.value)}</span>
              </span>
            `:s(o.value)}</strong>
          </div>
        `).join("")}
      </div>
    `:""}function Ar({className:e,action:o,label:r,busy:n=!1,loading:a=!1,attrs:i=""}){return`
      <button
        class="${e}${n?" is-busy":""}"
        type="button"
        ${o?`data-oq-action="${s(o)}"`:""}
        ${i}
        ${t.busyAction||a?"disabled":""}
      >${a?`
        <span class="oq-overview-controlpanel-loading">
          <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
          <span>${s(r)}</span>
        </span>
      `:s(n?"Bezig...":r)}</button>
    `}function Iw(e){if(e.kind==="openquatt-control"){let o=t.busyAction==="openquatt-regulation",r=(t.loadingEntities||t.entitySyncInFlight)&&!h("openquattResumeAt");return x("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${Ar({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:o})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${Ar({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:o})}
            ${Ar(r?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:Br()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){let o=t.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(r=>Ar({className:`oq-overview-controlpanel-segment${e.selectedOption===r.value?" is-selected":""}`,action:"select-overview-control-option",label:r.label,busy:o,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(r.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${Ar({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:t.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function Fl(){let e=Lw();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${Al("Bediening")}
        ${e.map(o=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(o.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(o.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(o.tone)}">${s(o.status)}</strong>
            </div>
            <p>${s(o.copy)}</p>
            ${Fw(o.meta)}
            ${Iw(o)}
          </article>
        `).join("")}
      </section>
    `:""}function sg(e){let o=O("controlModeLabel");return`
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
              ${Al("Kerncijfers")}
              <div class="oq-overview-top">
                ${Hn(Ll())}
              </div>
            </section>
            ${Dl(e,o)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(oa())}">
            ${Fl()}
          </aside>
        </div>
      </section>
    `}function Za(){let e=tg(),o=Pw();return fo()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...o?[{label:"Retourtemperatuur",key:o}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function Il(e=Za()){return Ce({...e,values:e.rows.map(o=>o.value||O(o.key))})}function _l(){let e=Za();return Xm({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:Il(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(o=>Ya(o.label,o.key,o.value||"")).join("")}
        </div>
      `})}var Jm=360,_w=100;function Ut(){let e=yn(t.trendWindowHours||wt);return e!==t.trendWindowHours&&yr(e),e}function lg(e=Ut()){return Math.max(1,Number(e)||24)*60*60*1e3}function Ww(e=Ut()){let o=Number(e)||24;return o>=72&&o%24===0?`${o/24}d`:`${o}u`}function Wl(e=Ut()){let o=Number(e)||24;if(o>=72&&o%24===0){let r=o/24;return`${r} ${r===1?"dag":"dagen"}`}return`${o} uur`}function kl(e){if(!Number.isFinite(e))return"\u2014";let o=new Date(e);if(Number.isNaN(o.getTime()))return"\u2014";let r={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(o)}catch{return o.toLocaleString("nl-NL",r)}}function Vw(e){let o=String(e||"").trim().split("|");if(o.length<5)return null;let r=Number(o[0]);if(!Number.isFinite(r))return null;let n=a=>{let i=Number(a);return Number.isFinite(i)?i:null};return{t:r,outside:n(o[1]),supply:n(o[2]),room:o.length>=8?n(o[3]):null,roomSetpoint:o.length>=8?n(o[4]):null,flow:o.length>=8?n(o[5]):null,input:o.length>=8?n(o[6]):n(o[3]),output:o.length>=8?n(o[7]):n(o[4])}}function $l(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function xl(e=Ut()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function cg(){let e=lg(),o=String(t.trendHistoryRaw||"").trim();if(!o)return $l()?xl():[];let r=o.split(/\r?\n/).map(Vw).filter(Boolean),n=r.length?r[r.length-1].t:Number.NaN,a=Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:Number.isFinite(n)?n:Number.NaN;if(!Number.isFinite(a))return r.length?r.slice(-Jm):xl();let i=Math.max(0,a-e),l=r.filter(p=>p.t>=i).slice(-Jm);return l.length?l:$l()?xl(windowHours):[]}function Vl(){let e=Ut(),o=Wl(e),r=cg(),n=$l()&&r.length===0,a=fo();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${o}.`,tone:"orange",samples:r,mock:n,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${o}.`,tone:"green",samples:r,mock:n,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${o}.`,tone:"slate",samples:r,mock:n,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{let l=Number(i?.input),p=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(p)||l<_w?Number.NaN:p/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${o}.`,tone:"blue",samples:r,mock:n,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${o}.`,tone:"sky",samples:r,mock:n,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function Bw(e){let o=e.samples[e.samples.length-1]||null;return Ce({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:o?.t||0,trendSignature:t.trendHistorySignature||"",latestValues:o?[o.outside,o.supply,o.room,o.roomSetpoint,o.flow,o.input,o.output]:[]})}function An(e,o){if(!e||!o)return Number.NaN;let r=typeof e.derive=="function"?e.derive(o):o?.[e.sampleKey],n=Number(r);return Number.isFinite(n)?n:Number.NaN}function Kw(e,o){let r=[];return e.forEach(n=>{o.forEach(a=>{let i=An(a,n);Number.isFinite(i)&&r.push(i)})}),r.length?{min:Math.min(...r),max:Math.max(...r)}:{min:0,max:1}}function jw(e){if(!Number.isFinite(e)||e<=0)return 1;let o=Math.floor(Math.log10(e)),r=e/10**o,n;return r<=1?n=1:r<=2?n=2:r<=5?n=5:n=10,n*10**o}function Uw(e,o){let r=Number.isFinite(e?.min)?e.min:0,n=Number.isFinite(e?.max)?e.max:1,a=Math.max(n-r,1),i=Array.isArray(o)?o.map(b=>Number(b?.axisMin)).find(b=>Number.isFinite(b)):Number.NaN,l=Array.isArray(o)?o.map(b=>Number(b?.axisMax)).find(b=>Number.isFinite(b)):Number.NaN,p=Array.isArray(o)?o.map(b=>Number(b?.axisTickStep)).find(b=>Number.isFinite(b)&&b>0):Number.NaN,u=Math.max(1,Number.isFinite(p)?p:jw(a/4)),c=[];if(Number.isFinite(i)||Number.isFinite(l)){let b=Number.isFinite(i)?i:0,v=Number.isFinite(l)?l:Math.ceil(n/u)*u,m=Math.floor(b/u)*u,f=Math.ceil(v/u)*u;for(let w=m;w<=f+u*.5;w+=u)c.push(w)}else{let b=a/u,v=b<=1.8?3:b<=4.25?5:7,m=Math.floor(v/2),f=(r+n)/2,w=Math.round(f/u)*u;for(let S=-m;S<=m;S+=1)c.push(w+S*u)}let g=c[0],y=c[c.length-1];return{ticks:c,axisMin:g,axisMax:y,axisDecimals:0}}function ug(e,o,r={}){let n=Number(r.windowHours),a=Number.isFinite(n)?n:Ut(),i=lg(a),l=640,p=220,u=46,c=18,g=18,y=34,b=l-u-c,v=p-g-y,m=e[e.length-1],f=!!r.mockData,w=f?i:Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:m?m.t:0,S=f?0:w-i,q=Math.max(w-S,1),E=q,k=Kw(e,o),M=k.min===k.max?{min:k.min-1,max:k.max+1}:{min:k.min-Math.max((k.max-k.min)*.12,1),max:k.max+Math.max((k.max-k.min)*.12,1)},V=Uw(k,o),F=N=>u+(N-S)/q*b,ee=N=>{if(!Number.isFinite(N))return Number.NaN;let Y=(N-M.min)/Math.max(M.max-M.min,1);return g+(1-Math.min(1,Math.max(0,Y)))*v},H=[0,.5,1].map(N=>u+b*N),G=V.ticks.map(N=>ee(N)),X=V.ticks.map((N,Y)=>({x:u-10,y:G[Y],text:_(N,V.axisDecimals)})),de=e.map(N=>{let Y=F(N.t),P=o.map(I=>{let z=An(I,N);return Number.isFinite(z)?{seriesId:I.id||I.sampleKey||I.label,tone:I.tone,label:I.label,decimals:I.decimals,unit:I.unit,value:z,x:Y,y:ee(z)}:null});return{sample:N,x:Y,values:P}}),se=o.flatMap(N=>{let Y=[],P=[];return e.forEach(I=>{let z=An(N,I);if(!Number.isFinite(z)){P.length&&(Y.push(P),P=[]);return}P.push({x:F(I.t),y:ee(z)})}),P.length&&Y.push(P),Y.map(I=>I.length<2?{tone:N.tone,points:I,path:""}:{tone:N.tone,points:I,path:I.map((z,We)=>`${We===0?"M":"L"} ${z.x.toFixed(1)} ${z.y.toFixed(1)}`).join(" ")})});return{width:l,height:p,left:u,right:c,top:g,bottom:y,plotWidth:b,plotHeight:v,latest:m,uptimeMs:E,endTime:w,startTime:S,span:q,windowHours:a,range:k,displayRange:M,gridXs:H,gridYs:G,yAxisLabels:X,points:de,tracks:se,series:o}}function Xa(){return Ce({windowHours:Ut(),trendSignature:t.trendHistorySignature||"",trendNowMs:Number.isFinite(t.trendHistoryNowMs)?t.trendHistoryNowMs:0,coolingActive:fo()})}function Gw(e){return Vl().find(o=>o.id===e)||null}function zw(e,o){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let r=0,n=Math.abs(e.points[0].x-o);return e.points.forEach((a,i)=>{let l=Math.abs(a.x-o);l<n&&(r=i,n=l)}),r}function Qw(e,o){let r=pg(e,o);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(_(r,e.decimals,e.unit))}</strong>
      </div>
    `}function pg(e,o){if(e?.currentKey&&h(e.currentKey)){let r=A(e.currentKey);if(Number.isFinite(r))return r}return An(e,o)}function Bl(e){e&&Vl().forEach(o=>{let r=e.querySelector(`[data-oq-trend-card="${o.id}"]`),n=o.samples[o.samples.length-1]||null;r&&o.series.forEach(a=>{let l=r.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),p=_(pg(a,n),a.decimals,a.unit);l&&l.textContent!==p&&(l.textContent=p)})})}function Yw(e,o,r=!1,n=Ut()){let a=ug(e,o,{mockData:r,windowHours:n}),i=Wl(n),l=kl(a.startTime),p=kl(a.startTime+a.span/2),u=kl(a.endTime),c=a.tracks.flatMap(g=>{if(g.points.length<2){let y=g.points[0];return y?`
          <circle
            cx="${y.x.toFixed(1)}"
            cy="${y.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${s(g.tone)}"
          ></circle>
        `:[]}return`
        <path d="${g.path}" class="oq-overview-trend-line oq-overview-trend-line--${s(g.tone)}"></path>
        <circle
          cx="${g.points[g.points.length-1].x.toFixed(1)}"
          cy="${g.points[g.points.length-1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${s(g.tone)}"
        ></circle>
      `}).join("");return`
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="Trendgrafiek van de laatste ${i}">
        <rect x="0" y="0" width="${a.width}" height="${a.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${a.gridXs.map(g=>`<line x1="${g.toFixed(1)}" y1="${a.top}" x2="${g.toFixed(1)}" y2="${a.height-a.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${a.gridYs.map(g=>`<line x1="${a.left}" y1="${g.toFixed(1)}" x2="${a.width-a.right}" y2="${g.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${c}
        ${a.yAxisLabels.map(g=>`
          <text
            x="${g.x}"
            y="${g.y.toFixed(1)}"
            class="oq-overview-trend-axis-label oq-overview-trend-axis-label--y"
            text-anchor="end"
            dominant-baseline="middle"
          >${s(g.text)}</text>
        `).join("")}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.height-a.bottom}" class="oq-overview-trend-hover-line"></line>
          ${o.map(g=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${s(g.tone)}"
              data-oq-trend-hover-dot="${s(g.id||g.sampleKey||g.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${s(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(p)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(u)}</text>
      </svg>
    `}function Jw(e){let o=e.samples[e.samples.length-1]||null,r=Wl(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(Bw(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(r)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(n=>Qw(n,o)).join("")}
            </div>
          </div>
        </div>
        ${Yw(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function ei(){let e=Vl();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(Xa())}">
        <div class="oq-overview-trends-grid">
          ${e.map(Jw).join("")}
        </div>
      </section>
    `}function Zw(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function Xw(){let e=Ut(),o=Vs();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${xo.map(r=>`
          ${(()=>{let a=r>168&&!o,i=r/24,l=a?`Beschikbaar zodra er minimaal ${i} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===r?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${r}"
            aria-pressed="${e===r?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${l?`title="${s(l)}"`:""}
          >${s(Ww(r))}</button>
        `})()}
        `).join("")}
      </div>
    `}function eS(){let e="overview-trends-history",o=t.settingsInfoOpen===e;return`
      <div class="oq-settings-info oq-overview-trends-info${o?" is-open":""}" data-oq-settings-info="${s(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${s(e)}"
          aria-label="${s("Uitleg bij Diagnose")}"
          aria-expanded="${o?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${o?"":"hidden"}>
          <p>${s("De waarden boven de grafieken zijn live. De grafieken bewaren elke 5 minuten een meetpunt, standaard 7 dagen in het werkgeheugen. Met flashopslag blijft historie ook na herstart of OTA beschikbaar, tot 30 dagen terug.")}</p>
        </div>
      </div>
    `}function dg(){let e=ct(),r=cg().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(t.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${eS()}
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
                  ${Xw()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&r?ei():Zw()}
        </div>
      </section>
    `}function tS(){if(!t.root||t.appView!=="diagnosis")return!1;let e=t.root.querySelector(".oq-overview-board");if(!e)return!1;let o=e.querySelector(".oq-overview-trends");return o?(gt(o,Xa(),ei()),Bl(e),Mn(e),!0):!1}function Kl(e){if(!e)return null;let o=e.__oqTrendHoverNodes;if(o&&o.chart&&o.hoverLayer&&o.hoverPanel)return o;let r=e.querySelector("[data-oq-trend-hover-layer]"),n={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:r,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:r?r.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return r&&r.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{n.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=n,n}function Zm(e,o,r,n=Kl(e)){if(!e||!o||!Array.isArray(o.points)||o.points.length===0)return;let a=Math.max(0,Math.min(o.points.length-1,r)),i=o.points[a];if(!i||!n||!n.chart||!n.hoverLayer||!n.hoverPanel||!n.hoverTime||!n.hoverNote||!n.hoverValues)return;let l=String(a);if(!n.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;let p=Mw(i.sample.t,o.endTime);n.hoverPanel.hidden=!1,n.hoverLayer.removeAttribute("hidden"),n.hoverTime.textContent=p.value,n.hoverNote.textContent=p.note,n.hoverLine&&(n.hoverLine.setAttribute("x1",i.x.toFixed(1)),n.hoverLine.setAttribute("x2",i.x.toFixed(1)));let u=[];o.series.forEach(c=>{let g=An(c,i.sample),y=c.id||c.sampleKey||c.label,b=n.hoverDots[y];if(!Number.isFinite(g)){b&&b.setAttribute("display","none");return}let v=i.values.find(m=>m.seriesId===y);b&&v&&(b.removeAttribute("display"),b.setAttribute("cx",v.x.toFixed(1)),b.setAttribute("cy",v.y.toFixed(1))),u.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(c.tone)}">
          <span>${s(c.label)}</span>
          <strong>${s(_(g,c.decimals,c.unit))}</strong>
        </div>
      `)}),n.hoverValues.innerHTML=u.join(""),e.dataset.oqTrendHoverIndex=l}function oS(e){if(!e)return;let o=Kl(e);o?.hoverPanel&&(o.hoverPanel.hidden=!0),o?.hoverLayer&&o.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function Mn(e=t.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(r=>{let n=r.dataset.renderSignature||"";if(r.__oqTrendBoundSignature===n)return;typeof r.__oqTrendCleanup=="function"&&r.__oqTrendCleanup(),r.__oqTrendHoverNodes=null,r.__oqTrendBoundSignature=n;let a=r.querySelector(".oq-overview-trend-chart");if(!a)return;let i=Gw(r.dataset.oqTrendCard);if(!i)return;let l=ug(i.samples,i.series,{mockData:i.mock});r.__oqTrendModel=l;let p=Kl(r),u=0,c=null,g=()=>{let v=c;c=null,u=0;let m=a.getBoundingClientRect();if(!m.width||!m.height)return;let f=Number(v?.clientX);if(!Number.isFinite(f)){Zm(r,l,l.points.length-1,p);return}let S=Math.min(m.width,Math.max(0,f-m.left))/m.width*l.width,q=zw(l,S);Zm(r,l,q,p)},y=v=>{c=v,u||(u=window.requestAnimationFrame(g))},b=()=>{u&&(window.cancelAnimationFrame(u),u=0),c=null,oS(r)};a.addEventListener("pointermove",y),a.addEventListener("pointerenter",y),a.addEventListener("pointerleave",b),a.addEventListener("focus",y),a.addEventListener("blur",b),a.addEventListener("touchstart",y,{passive:!0}),r.__oqTrendCleanup=()=>{u&&(window.cancelAnimationFrame(u),u=0),c=null,a.removeEventListener("pointermove",y),a.removeEventListener("pointerenter",y),a.removeEventListener("pointerleave",b),a.removeEventListener("focus",y),a.removeEventListener("blur",b),a.removeEventListener("touchstart",y)}})}or({patchDiagnosisDom:tS});function Jl(e,o,r){let n=fg(O(o.mode,"Unknown")),a=x(o.defrost),i=to(O(o.failures,"None")),l=ia(i),p=n==="Verwarmen"||n==="Koelen"||a;return{mode:n,defrostActive:a,failures:i,warningFailures:l,running:p,thermalKey:n==="Koelen"?o.cooling:o.heat,schematic:dS(e,o,r,n,a,l,p)}}function gg(e,o=null){return`<h3>${s(e)}</h3>${o?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(o.layout)}">${yS(o.layout==="equal"?"minus":"plus")}<span>${s(o.label)}</span></button>`:""}`}function Ul(e,o,r,n){return`<div class="oq-overview-hp-status">${Rl(e,o,r,n)}</div>`}function rS(e,o){return o?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function hg(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(o=>`${o.title} ${rS(fg(O(o.keys.mode,"Unknown")),x(o.keys.defrost))}`).join(", "))}</p>`}function nS(e){let o=t.entities[e];if(!o)return"Positie: \xE2\u20AC\u201D";let r=A(e);return Number.isNaN(r)?`Positie: ${O(e)}`:`Positie: ${_(r,0,o.uom||"")}`}function aS(e){return h(e)?`Positie: ${x(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function fg(e){let o=String(e||"").trim();return!o||o==="Unknown"?"Onbekend":o==="Standby"?"Stand-by":o==="Heating"?"Verwarmen":o==="Cooling"?"Koelen":o}function Gl(e,o,r,n=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(o)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(r)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(r)}" />
        ${n?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(r)}" />`:""}
      </g>
    `}function iS(e,o,r){return e==="temperature"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
          x="${o-10}"
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
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${o-10} ${r-10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `}function Rn({bind:e,modifier:o,x:r,y:n,width:a,kicker:i,detail:l,detailBind:p="",icon:u="heater",direction:c="down"}){let y=r+26,b=n+22,v=p?` data-oq-bind="${s(p)}"`:"",m="";if(c==="up"){let f=r+Math.round(a*.52);m=`M${f-6} ${n} L${f} ${n-8} L${f+6} ${n} Z`}else if(c==="left"){let f=n+Math.round(22);m=`M${r} ${f-6} L${r-8} ${f} L${r} ${f+6} Z`}else if(c==="right"){let f=n+Math.round(22);m=`M${r+a} ${f-6} L${r+a+8} ${f} L${r+a} ${f+6} Z`}else{let f=r+Math.round(a*.52);m=`M${f-6} ${n+44} L${f} ${n+44+8} L${f+6} ${n+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(o)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${r}" y="${n}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${y}" cy="${b}" r="11.5" />
        ${iS(u,y,b)}
        <text class="oq-hp-tech-tooltip-kicker" x="${r+48}" y="${n+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${r+48}" y="${n+32}"${v}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${m}" />
      </g>
    `}function zl({bind:e,x:o,y:r,width:n,value:a,label:i,ariaLabel:l="",align:p="start"}){let u=l||`${i} temperatuur ${a}`,c=p==="end",g=p==="center",y=g?"middle":c?"end":"start",b=g?o+n/2:c?o+n-2:o+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(u)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${o}" y="${r}" width="${n}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${b}" y="${r+13}" text-anchor="${y}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function sS({tooltip:e,...o}){return`${zl(o)}${Rn({bind:o.bind,...e})}`}function lS({bind:e,ariaLabel:o,x:r,y:n,width:a,height:i,rx:l,tooltip:p}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(o)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${r}" y="${n}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${Rn({bind:e,...p})}
    `}function jl({bind:e,className:o,active:r,ariaLabel:n,attrs:a="",activeClass:i="is-active",content:l,tooltip:p}){return`
      <g class="${[o,r&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${r?"0":"-1"}" aria-label="${s(n)}" ${a}>
        ${l}
      </g>
      ${Rn({bind:e,...p})}
    `}function cS({label:e,value:o,bind:r,ariaLabel:n="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${n?` aria-label="${s(n)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(o)}</strong>
      </div>
    `}function ht(e,o,r=""){let n=A(e);return Number.isNaN(n)?O(e):_(n,o,er(e,r))}function uS(e){let r=String(T("hpGeneration")||"").trim()==="V1"&&e==="hp1Flow"?["flowSelected","controllerFlow","flowLocal",e]:[e];return r.filter((n,a)=>n&&r.indexOf(n)===a)}function pS(e){let o=uS(e),r=o.find(n=>h(n))||e;for(let n of o){if(!h(n))continue;let a=A(n);if(!Number.isNaN(a))return{key:n,value:a,text:_(a,0,er(n,"L/h"))}}return{key:r,value:Number.NaN,text:O(r)}}function dS(e,o,r,n,a,i,l){let p=A(o.freq),u=Number.isNaN(p)?"\u2014":String(Math.round(p)),c=A(o.power),g=A(o.heat),y=A(o.cooling),b=pS(o.flow),v=b.value,m=n==="Koelen"?y:g,f=l||!Number.isNaN(p)&&p>0||!Number.isNaN(c)&&c>80||!Number.isNaN(g)&&g>150,w=!Number.isNaN(v)&&v>0,S=Ml(n,f),q=h(o.suctionSuperheatStatus)?O(o.suctionSuperheatStatus,""):"",E=q==="Low - floodback risk"||q==="Critical low - wet suction likely",M=i==="Geen actieve storingen"?(q==="Critical low - wet suction likely"?"Superheat kritisch laag":q==="Low - floodback risk"?"Superheat laag":"")||"Geen storingen":i,V=M!=="Geen storingen"||E,F=a?"Actief":"Uit",ee=ht(o.waterOut,1,"\xB0C"),H=ht(o.waterIn,1,"\xB0C"),G=b.text,X=ht(o.evaporatorCoilTemp,1,"\xB0C"),de=ht(o.innerCoilTemp,1,"\xB0C"),se=ht(o.outsideTemp,1,"\xB0C"),N=ht(o.condenserPressure,1,"bar"),Y=ht(o.dischargeTemp,1,"\xB0C"),P=ht(o.evaporatorPressure,1,"bar"),I=ht(o.returnTemp,1,"\xB0C"),z=ht(o.suctionSuperheat,1,"K"),We=ht(o.dischargeSuperheat,1,"K"),ft=q||"\u2014",it=x(o.bottomPlate),At=x(o.crankcase),Ue=nS(o.eev),Me=aS(o.fourWay),$=_(c,0,"W"),C=_(m,0,"W"),D=n==="Koelen"?!Number.isNaN(c)&&c>=5&&!Number.isNaN(y)?y/c:Number.NaN:A(o.cop),B=_(D,1),Q=n==="Koelen"?"COP (EER)":"COP",ne=n==="Koelen"?"Koelafgifte":"Warmteafgifte",be=n==="Koelen"?"afgegeven koeling":"afgegeven warmte",te=A(o.fanSpeed),xe=!Number.isNaN(te)&&te>0,ye=Number.isNaN(te)?"\u2014":`${Math.round(te)} rpm`,le=a||n==="Koelen",Ht=le?"Verdamper":"Condensor",ue=le?"Condensor":"Verdamper",bo=le?"return":"supply",Re=le?"supply":"return",Ve=360,Ge=384,ze=214,yo="M278 220 C278 228 273 234 266 234",ve="M278 220 C278 228 283 234 290 234",bt="M290 234 C284 234 279 240 278 248",rc="M266 234 C272 234 277 240 278 248",Qe=le?`M290 234 H${Ve} Q372 ${ze} ${Ge} 234 H436 V134 H480`:"M266 234 H180 V134 H164",Nn=le?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Ge} Q372 ${ze} ${Ve} 234 H290`,On="M296 150 H278 V220",yt="M278 248 V268 H372 V150 H356",ci=le?"M480 294 H337":"M164 294 H315",Dn=le?"M315 294 H164":"M337 294 H480",zo=["oq-hp-schematic-board",`oq-hp-schematic-board--${r}`,f?"is-running":"",w?"is-water-flowing":"",xe?"is-fan-running":"",le?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:zo,statusText:S,failureText:M,warningActive:V,waterFlowActive:w,defrostActive:a,defrostText:F,mode:n,reverseCycle:le,compressorFreqText:`${u} Hz`,leftExchangerTitle:Ht,rightExchangerTitle:ue,supplyLineTone:bo,returnLineTone:Re,waterOutText:ee,waterInText:H,flowText:G,evaporatorCoilTempText:X,innerCoilTempText:de,outsideTempText:se,dischargePressureText:N,dischargeTempText:Y,suctionPressureText:P,suctionTempText:I,suctionSuperheatText:z,dischargeSuperheatText:We,suctionSuperheatStatusText:ft,bottomPlateActive:it,crankcaseActive:At,eevPositionText:Ue,fourWayPositionText:Me,powerText:$,heatText:C,heatLabel:ne,heatDescription:be,efficiencyText:B,efficiencyLabel:Q,fanRpmText:ye,hotgasValveHeat:yo,hotgasValveCool:ve,suctionValveHeat:bt,suctionValveCool:rc,leftValveTone:le?"suction":"hotgas",rightValveTone:le?"hotgas":"suction",pipes:{supply:{tone:bo,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:Re,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:On,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:Qe,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:ci,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:Dn,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:Nn,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:yt,animated:!0,flowVariant:"default"}}}}function mS(e){let o=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),r=`${o}-cond-water-heat`,n=`${o}-cond-water-cool`,a=`${o}-cond-ref`,i=e.reverseCycle?n:r,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],p=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],u=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
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

            ${Object.entries(e.pipes).map(([c,g])=>Gl(c.replace(/[A-Z]/g,y=>`-${y.toLowerCase()}`),g.tone,g.d,g.animated,g.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${p.map(sS).join("")}
            ${jl({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${jl({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${jl({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${u.map(lS).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(cS).join("")}
          </div>
        </div>
      </div>
    `}function bg(e,o,r,n="normal",a=null){if(!h(o.power))return"";let i=Jl(e,o,r),{mode:l,defrostActive:p,running:u,thermalKey:c}=i,g=i.schematic;return t.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${gg(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${Ul(l,u,g.warningActive,g.failureText)}
            </div>
          </div>
          ${mS(g)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${Ul(l,u,g.warningActive,g.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${Hn([{key:o.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:c,label:g.heatLabel,tone:"orange",note:g.heatDescription},{label:g.efficiencyLabel,value:g.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${s(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${s(O(o.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${p?"Actief":"Uit"}</strong>
          </div>
          ${h(o.suctionSuperheat)?`
            <div class="oq-overview-hp-meta-chip">
              <span>Suction SH</span>
              <strong>${s(g.suctionSuperheatText)}</strong>
            </div>
          `:""}
          ${h(o.suctionSuperheatStatus)?`
            <div class="oq-overview-hp-meta-chip">
              <span>SH status</span>
              <strong>${s(g.suctionSuperheatStatusText)}</strong>
            </div>
          `:""}
        </div>
        <div class="oq-overview-temps-list">
          ${Ya("Water in",o.waterIn)}
          ${Ya("Water out",o.waterOut)}
        </div>
      </section>
    `}function Zl(){return x("boilerCvAssistEnabled")&&h("boilerHeatPower")}function gS(){return(typeof J=="function"?J():"")!=="single"&&h("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function hS(){return(typeof J=="function"?J():"")!=="single"&&h("hp2Flow")?"hp2Flow":"hp1Flow"}function oi(){let e=A("boilerHeatPower"),o=A(hS()),r=h("boilerActive")?x("boilerActive"):!Number.isNaN(e)&&e>20,n=!Number.isNaN(o)&&o>0,a=_(e,0,"W"),i=_(o,0,"L/h"),l=_(A(gS()),1,"\xB0C"),p=_(A("supplyTemp"),1,"\xB0C"),u=r?"Aan":"Uit",c=r?"Levert ondersteuning":"Geen ondersteuning",g=["oq-boiler-card",r?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:r,flowActive:n,heatText:a,flowText:i,returnTempText:l,supplyTempText:p,statusText:u,statusCopy:c,boardClass:g,flowPathClass:n?"is-flowing":"is-static"}}function Xl(e=oi()){return Ce({version:"boiler-visual-mode-v1",visualMode:t.hpVisualMode,boardClass:"oq-boiler-card"})}function fS(e,o=oi()){let r=e.querySelector(".oq-boiler-card");r&&(r.className=["oq-boiler-card",o.active?"is-running":"is-idle",o.flowActive?"is-flowing":"is-static"].join(" "));let n=e.querySelector(".oq-overview-chip");n&&(n.className=`oq-overview-chip oq-overview-chip--${o.active?"active":"neutral"}`,n.textContent!==o.statusText&&(n.textContent=o.statusText));let a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",o.active),a.classList.toggle("is-idle",!o.active));let i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==o.statusCopy&&(i.textContent=o.statusCopy);let l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==o.heatText&&(l.textContent=o.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(g=>{g.textContent!==o.flowText&&(g.textContent=o.flowText)});let p=e.querySelector("[data-oq-boiler-status-value]");p&&p.textContent!==o.statusCopy&&(p.textContent=o.statusCopy);let u=e.querySelector('[data-oq-bind="boiler-return-value"]');u&&u.textContent!==o.returnTempText&&(u.textContent=o.returnTempText);let c=e.querySelector('[data-oq-bind="boiler-supply-value"]');c&&c.textContent!==o.supplyTempText&&(c.textContent=o.supplyTempText)}function bS(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(Xl(e))}">
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
    `}function Ql(){if(!Zl())return"";let e=oi();return t.hpVisualMode!=="schematic"?bS(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(Xl(e))}">
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
                ${Gl("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Gl("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${zl({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${Rn({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${zl({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${Rn({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
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
    `}function yg(){let e=typeof J=="function"?J():"";return fc.filter(o=>e==="single"&&o.title==="HP2"?!1:h(o.keys.power))}function ec(e){return!Array.isArray(e)||e.length<2||t.hpVisualMode!=="schematic"?"equal":t.hpLayoutMode==="focus-hp1"||t.hpLayoutMode==="focus-hp2"?t.hpLayoutMode:"equal"}function ti(e,o,r){return!Array.isArray(o)||o.length<2?"normal":r==="focus-hp1"?e===0?"focus":"muted":r==="focus-hp2"?e===1?"focus":"muted":"normal"}function Yl(e,o,r){return!Array.isArray(o)||o.length<2||t.hpVisualMode!=="schematic"?null:ti(e,o,r)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function vg(e){return!Array.isArray(e)||e.length!==1?ec(e):Zl()?"equal":"single"}function yS(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function wg(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${hg(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${t.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${t.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function vS(e,o){if(!e)return!1;let r=e.querySelector(".oq-overview-hp-tools-copy"),n=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!r||!n||!a?(xt(e,wg(o)),!0):(xt(r,`
      <h3>Warmtepompen</h3>
      ${hg(o)}
    `),n.classList.toggle("is-active",t.hpVisualMode==="schematic"),a.classList.toggle("is-active",t.hpVisualMode==="compact"),!0)}function Sg(){let e=Pl(),o=yg(),r=ec(o),n=vg(o),a=wg(o);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(t.overviewTheme)}">
          ${Hl()}
          ${sg(e)}
          <div class="oq-overview-main">
            ${Nl(Ja())}
            ${_l()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(n)}">
            ${o.map((i,l)=>bg(i.title,i.keys,i.accent,ti(l,o,r),Yl(l,o,r))).join("")}
            ${Ql()}
          </div>
        </div>
      </section>
    `}function wS(e,o,r){if(!e)return;let n=e.querySelector(o);n&&n.textContent!==r&&(n.textContent=r)}function Hr(e,o,r){e&&e.getAttribute(o)!==r&&e.setAttribute(o,r)}function SS(e,o){o.forEach(([r,n])=>{wS(e,`[data-oq-bind="${r}"]`,n)})}function qS(e,o){o.forEach(([r,n])=>{Hr(e.querySelector(`[data-oq-bind="${r}"]`),"aria-label",n)})}function TS(e,o,r,n=""){let a=e.querySelector(`[data-oq-bind="${o}"]`);a&&(a.classList.toggle("is-active",r),Hr(a,"tabindex",r?"0":"-1"),!r&&n&&ri(e.querySelector(`[data-oq-bind="${n}"]`)))}function ES(e,o,r){Hr(e.querySelector(`[data-oq-bind="${o}"]`),"fill",r)}function Pn(e,o,r,n){if(!e)return;let a=`${o}${r}`;n.map(l=>`${o}${l}`).find(l=>e.classList.contains(l))!==a&&(n.forEach(l=>e.classList.remove(`${o}${l}`)),e.classList.add(a))}function CS(e,o,r,n){let a=e.querySelector(`[data-oq-pipe="${o}"]`);a&&(Pn(a,"oq-hp-tech-pipe--",r,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==n&&i.setAttribute("d",n)}))}function ri(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function mg(e,o,r){!e||!o||!r||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(n=>{n!==r&&ri(n)}),o.appendChild(r),r.classList.add("is-active"),r.setAttribute("aria-hidden","false"))}function kS(e,o,r,n){if(!e||!o||!r||!n||r.dataset.oqTooltipWired==="true")return;r.dataset.oqTooltipWired="true";let a=()=>{r.matches(":hover")||document.activeElement===r||ri(n)};r.addEventListener("mouseenter",()=>mg(e,o,n)),r.addEventListener("mouseleave",a),r.addEventListener("focus",()=>mg(e,o,n)),r.addEventListener("blur",a)}function qg(e){if(!e)return;let o=e.querySelector(".oq-hp-tech-svg");if(!o)return;let r=o.querySelector(".oq-hp-tech-tooltip-layer");r||(r=document.createElementNS("http://www.w3.org/2000/svg","g"),r.setAttribute("class","oq-hp-tech-tooltip-layer"),o.appendChild(r)),Array.from(o.querySelectorAll(".oq-hp-tech-tooltip")).forEach(n=>{r.appendChild(n)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(n=>{let a=n.getAttribute("data-oq-tooltip-target");if(!a)return;let i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);kS(e,r,n,i)})}function Tg(e=t.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(o=>{qg(o)})}function xS(e,o,r,n,a=null,i=null){if(!e)return;let l=i||Jl(o,r,n),{mode:p,running:u}=l,c=l.schematic,g=e.querySelector(".oq-overview-hp-head-title");g&&xt(g,gg(o,a));let y=e.querySelector(".oq-overview-hp-head-side");if(y){let w=y.querySelector(".oq-overview-hp-status");w||(xt(y,Ul(p,u,c.warningActive,c.failureText)),w=y.querySelector(".oq-overview-hp-status")),eg(w,p,u,c.warningActive,c.failureText)}let b=e.querySelector("[data-oq-hp-board]");if(!b)return;b.className!==c.boardClass&&(b.className=c.boardClass),SS(b,[["status",c.statusText],["left-exchanger-title",c.leftExchangerTitle],["right-exchanger-title",c.rightExchangerTitle],["compressor-freq",c.compressorFreqText],["flow-value",c.flowText],["inner-coil-temp-value",c.innerCoilTempText],["evaporator-temp-value",c.evaporatorCoilTempText],["outside-temp-value",c.outsideTempText],["discharge-pressure-value",c.dischargePressureText],["discharge-temp-value",c.dischargeTempText],["suction-pressure-value",c.suctionPressureText],["suction-temp-value",c.suctionTempText],["supply-value",c.waterOutText],["return-value",c.waterInText],["footer-mode",c.mode],["footer-power",c.powerText],["footer-heat",c.heatText],["footer-efficiency-label",c.efficiencyLabel],["footer-efficiency",c.efficiencyText],["fan-speed-value",c.fanRpmText],["fourway-detail",c.fourWayPositionText],["eev-detail",c.eevPositionText]]);let v=b.querySelector('[data-oq-bind="footer-heat-label"]');if(v){Hr(v,"aria-label",c.heatLabel);let w=c.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";v.innerHTML!==w&&(v.innerHTML=w)}[["bottom-heater",c.bottomPlateActive],["crankcase-heater",c.crankcaseActive]].forEach(([w,S])=>{TS(b,w,S,`${w}-tooltip`)});let m=b.querySelector('[data-oq-bind="defrost-badge"]');m&&(Hr(m,"tabindex",c.defrostActive?"0":"-1"),Hr(m,"aria-label",c.defrostActive?"Defrost actief":"Defrost uit"),c.defrostActive||ri(b.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",c.supplyLineTone],["return-tooltip",c.returnLineTone]].forEach(([w,S])=>{Pn(b.querySelector(`[data-oq-bind="${w}"]`),"oq-hp-tech-tooltip--",S,["warm","supply","return"])}),qS(b,[["supply-reading",`Aanvoer temperatuur ${c.waterOutText}`],["flow-reading",`Flow ${c.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${c.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${c.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${c.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${c.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${c.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${c.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${c.dischargeTempText}`],["return-reading",`Retour temperatuur ${c.waterInText}`],["suction-pressure-reading",`Zuigdruk ${c.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${c.suctionTempText}`],["fourway-trigger",`4-wegklep, ${c.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${c.eevPositionText}`]]),Pn(b.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",c.returnLineTone,["supply","return"]);let f=String(c.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");ES(b,"cond-water",`url(#${c.reverseCycle?`${f}-cond-water-cool`:`${f}-cond-water-heat`})`),Object.entries(c.pipes).forEach(([w,S])=>{CS(b,w.replace(/[A-Z]/g,q=>`-${q.toLowerCase()}`),S.tone,S.d)}),qg(b),ra()}function $S(){if(!t.root||t.appView!=="overview")return!1;let e=t.root.querySelector(".oq-overview-board");if(!e)return!1;let o=`oq-overview-board oq-overview-board--${t.overviewTheme}`;e.className!==o&&(e.className=o);let r=Pl(),n=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),p=e.querySelector(".oq-overview-trends"),u=e.querySelector(".oq-overview-hp-tools"),c=e.querySelector(".oq-overview-hp-grid"),g=e.querySelector("[data-oq-boiler-panel]"),y=yg();if(n){let q=Ot();gt(n,Ce(q),Hl())}if(a){let q=a.querySelector(".oq-overview-top");q&&xt(q,Hn(Ll()));let E=a.querySelector(".oq-overview-statuspanel");if(E){let M=O("controlModeLabel");gt(E,Ce(Ol(r,M)),Dl(r,M))}let k=a.querySelector(".oq-overview-summary-side");if(k){let M=oa();k.dataset.renderSignature!==M&&(xt(k,Fl()),k.dataset.renderSignature=M)}}if(i&&gt(i,Ce(Ja()),Nl(Ja())),l){let q=Za();gt(l,Il(q),_l())}if(p&&t.appView==="overview"&&(gt(p,Xa(),ei()),Bl(e)),Mn(e),!u||!c)return!1;let b=ec(y),v=vg(y);if(vS(u,y),Pn(c,"oq-overview-hp-grid--",v,["single","equal","focus-hp1","focus-hp2"]),t.hpVisualMode!=="schematic"){let q=[...y.map((k,M)=>bg(k.title,k.keys,k.accent,ti(M,y,b),Yl(M,y,b))),Ql()].join(""),E=Ce({visualMode:t.hpVisualMode,layout:v,markup:q});return c.dataset.renderSignature!==E&&(xt(c,q),c.dataset.renderSignature=E),!0}let m=Zl()?oi():null,f=m?Ql():"",w=m?Xl(m):"";return!!g!=!!f||(g&&g.dataset.renderSignature!==w?g.outerHTML=f:g&&m&&fS(g,m),c.querySelectorAll("[data-oq-hp-panel]").length!==y.length)?!1:(y.forEach((q,E)=>{let k=e.querySelector(`[data-oq-hp-panel="${q.title}"]`);if(k){let M=Jl(q.title,q.keys,q.accent);Pn(k,"oq-overview-hp--",ti(E,y,b),["normal","focus","muted"]),xS(k,q.title,q.keys,q.accent,Yl(E,y,b),M)}}),!0)}or({patchOverviewDom:$S});function AS(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${zm()}
        ${Qm()}
      </section>
    `}function HS(){return`
      <div class="oq-helper-modal-backdrop${t.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""} oq-helper-modal-backdrop--loading" data-oq-modal="initial-load">
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
    `}function MS(){return t.appView==="overview"?Sg():t.appView==="energy"?rm():t.appView==="diagnosis"?dg():t.appView==="results"?nm():AS()}function RS(){let e=cl();return`
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
    `}function PS(){let e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function NS(e){if(!e||t.deferDevControlSelectRender)return;t.deferDevControlSelectRender=!0;let o=()=>{e.removeEventListener("blur",o),e.removeEventListener("change",o),t.deferDevControlSelectRender=!1,window.setTimeout(()=>Eg(),0)};e.addEventListener("blur",o,{once:!0}),e.addEventListener("change",o,{once:!0})}function OS(){if(t.nativeOpen||t.appView!=="settings"||t.renderedAppView!=="settings"||t.renderedSettingsGroup!==t.settingsGroup)return null;let e=document.scrollingElement||document.documentElement,o=Number(window.scrollY||e?.scrollTop||0);return!Number.isFinite(o)||o<=0?null:{group:t.settingsGroup,left:Number(window.scrollX||e?.scrollLeft||0),top:o}}function DS(e){if(!e)return;let o=(t.settingsPageScrollRestoreToken||0)+1;t.settingsPageScrollRestoreToken=o;let r=()=>{if(o!==t.settingsPageScrollRestoreToken||t.nativeOpen||t.appView!=="settings"||t.settingsGroup!==e.group)return;let n=document.scrollingElement||document.documentElement;if(!n)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),i=Math.min(e.top,a);window.scrollTo({left:e.left,top:i,behavior:"auto"})};window.requestAnimationFrame(()=>{r(),window.requestAnimationFrame(r),window.setTimeout(r,80)})}function Eg(){if(!t.root)return;let e=PS();if(e){NS(e);return}let o=t.systemModal==="webserver-logs"?_t():null,r=t.systemModal==="cm100-commissioning"?bp():null,n=String(t.systemModal||"").startsWith("service-task-")?vp():null,a=t.systemModal==="history-storage"?Sp():null,i=t.quickStartModalOpen?Vm():null,l=OS();if(t.nativeOpen){t.root.innerHTML=`
        ${ul()}
        ${vm()}
      `,t.renderedAppView="native",t.renderedSettingsGroup="",t.settingsRenderSignature="",t.headerRenderSignature=Ka(),t.mqttSensorsModalRenderSignature="",zr(),mn(),ks(),Is(),Ri(),Mi(),Wt(o),Ts(r),Es(n),Cs(a),Tl(i);return}let p=MS(),u=t.loadingEntities?`${p}${HS()}`:p,c=t.appView==="overview"||t.appView==="energy"||t.appView==="diagnosis"||t.appView==="results";t.root.innerHTML=`
      ${ul()}
      <div class="oq-helper-shell${t.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${c?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${mc}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${ym()}
          </div>
      ${Nc()}
      ${u}
      ${RS()}
        </div>
      </div>
      ${_m()}
      ${Op()}
      ${wm()}
      ${Pp()}
    `,t.renderedAppView=t.appView,t.renderedSettingsGroup=t.appView==="settings"?t.settingsGroup:"",t.settingsRenderSignature=t.appView==="settings"?jr():"",t.headerRenderSignature=Ka(),t.mqttSensorsModalRenderSignature=t.systemModal==="mqtt-sensors"?ca():"",Ur(),Tg(),ks(),Gr(),Mn(),mn(),Is(),Ri(),Mi(),Wt(o),Ts(r),Es(n),Cs(a),Tl(i),DS(l)}Dc(Eg);async function ni(e,o){let r=R[e];t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.entities[e]={...t.entities[e]||{},state:o,value:o},d();try{let n=await fetch(`${j(r.domain,r.name,"set")}?option=${encodeURIComponent(o)}`,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=`${r.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.entities.firmwareUpdateChannel={...t.entities.firmwareUpdateChannel||{},state:o,value:o},sn(o),d(),await ln(),t.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(t.controlNotice="Logger level bijgewerkt.",t.systemModal==="webserver-logs"&&lr()):e==="webServerLogHistoryEnabled"?(["1","on","true"].includes(String(o).toLowerCase())?(t.webServerLogHistoryLoaded=!1,lr()):Lo(),t.systemModal==="webserver-logs"&&d()):t.appView==="settings"?await L(Ro(),"all"):await L(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Ye,...wo],"state"),e==="strategy"&&t.appView!=="settings"&&await L(oe(o)?ge.map(a=>a.key):vt,"state")}catch(n){t.controlError=`${r.name} kon niet worden bijgewerkt. ${n.message}`}finally{t.busyAction="",d()}}async function Cg(e,o){let r=R[e];if(r){t.busyAction=`switch-${e}`,t.controlNotice="",t.controlError="",d();try{let n=o?"turn_on":"turn_off",a=await fetch(j(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.entities[e]={...t.entities[e]||{},value:o,state:o},t.controlNotice=`${r.name} ${o?"ingeschakeld":"uitgeschakeld"}.`,t.busyAction="",t.appView==="overview"?await L([...Ir,...Je,"setupComplete",...Pt],"state"):t.appView==="settings"?(await L(Ro(),"all"),tr.includes(e)&&Bo()):await L(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Ye,...wo],"state"),e==="webServerLogHistoryEnabled"&&(o?(t.webServerLogHistoryLoaded=!1,lr()):Lo(),t.systemModal==="webserver-logs"&&d()),d()}catch(n){t.controlError=`${r.name} aanpassen mislukt (${n.message}).`,d()}finally{t.busyAction="",d()}}}async function ai(e,o,r=""){let n=R[e],a=he(e,o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.inputDrafts[e]=String(o??""),t.drafts[e]=a,d();try{let i=await fetch(`${j(n.domain,n.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=r||`${n.name} bijgewerkt.`,await L(t.appView==="settings"?Ro():[...new Set([e,"setupComplete","strategy",...Ye,...wo])],"state")}catch(i){t.inputDrafts[e]=String(a).replace(".",","),t.controlError=`${n.name} kon niet worden bijgewerkt. ${i.message}`}finally{t.busyAction="",d()}}async function kg(e,o){let r=R[e],n=St(o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",d();try{let a=await fetch(`${j(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.controlNotice=`${r.name} bijgewerkt.`,await L(t.appView==="settings"?Ro():[e,"setupComplete"],"state")}catch(a){t.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",d()}}async function xg(e,o){let r=R[e],n=String(o||"").trim();t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",t.inputDrafts[e]=String(o??""),t.drafts[e]=n,d();try{let a=await fetch(`${j(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);t.entities[e]={...t.entities[e]||{},value:n,state:n},delete t.drafts[e],delete t.inputDrafts[e],t.controlNotice=`${r.name} bijgewerkt.`,await L(t.appView==="settings"?Ro():[e,"setupComplete"],"state")}catch(a){t.inputDrafts[e]=n,t.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",d()}}async function tc(e,o){let r=R[e],n=Ke(o)||ko,a=await fetch(`${j(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.entities[e]={...t.entities[e]||{},value:n,state:n},n}async function $g(e,o){let r=R[e],n=o?"turn_on":"turn_off",a=await fetch(j(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.entities[e]={...t.entities[e]||{},value:o,state:o},o}async function Ag(){await L([...new Set([...Ir,...Je,"setupComplete",...Pt])],"state")}async function Hg(e,o){let r=R[e],n=Ke(o);t.busyAction=`save-${e}`,t.controlNotice="",t.controlError="",d();try{await tc(e,n),t.controlNotice=`${r.name} bijgewerkt.`,await L(t.appView==="settings"?Ro():[e,"setupComplete","openquattEnabled"],"state")}catch(a){t.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{t.busyAction="",d()}}async function ii(e){let o=Ke(e);if(e&&!o){t.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",d();return}if(o&&!h("openquattResumeAt")){t.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",d();return}t.busyAction="openquatt-regulation",t.controlNotice="",t.controlError="",d();let r=!1;try{h("openquattResumeAt")&&(await tc("openquattResumeAt",o||ko),r=!!o),await $g("openquattEnabled",!1),t.pauseResumeDraft=o?Yn(o):"",t.systemModal="",t.controlNotice=o?`Openquatt regeling is tijdelijk uitgeschakeld tot ${Xo(o)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Ag()}catch(n){if(r&&h("openquattResumeAt"))try{await tc("openquattResumeAt",ko)}catch{}t.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${n.message}`}finally{t.busyAction="",d()}}async function Mg(){t.busyAction="openquatt-regulation",t.controlNotice="",t.controlError="",d();try{await $g("openquattEnabled",!0),t.pauseResumeDraft="",t.systemModal="",t.controlNotice="Openquatt regeling is weer actief.",await Ag()}catch(e){t.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{t.busyAction="",d()}}async function Rg(e){let o=R[e];t.busyAction=e,t.controlError="",t.controlNotice="",d();try{let r=await fetch(j(o.domain,o.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);t.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await L(["setupComplete"],"state"),e==="reset"&&(t.currentStep=Qo[0].id,t.quickStartModalMode="wizard",t.quickStartModalOpen=!0),t.quickStartModalOpen=e!=="apply",ut("overview",{syncMode:"replace"}),ce({forceFast:!0})}catch(r){t.controlError=`Actie mislukt voor "${o.name}". ${r.message}`}finally{t.busyAction="",d()}}function LS(){window.requestAnimationFrame(()=>{if(!t.root||t.systemModal!=="service-task-hp-water-calibration")return;let e=t.root.querySelector("[data-oq-service-task-scroller]"),o=t.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!o)return;let r=e.getBoundingClientRect(),n=o.getBoundingClientRect(),a=e.scrollTop+n.top-r.top-24;e.scrollTop=Math.max(0,a)})}async function Mr(e,o={}){let r=R[e];if(r){t.busyAction=e,t.controlError="",t.controlNotice="",d();try{let n=await fetch(j(r.domain,r.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||Kn.has(e)||(Ao(),t.systemModal=""),t.controlNotice=o.successNotice||`${r.name} gestart.`,o.reconnectMode&&Zt(o.reconnectMode),Array.isArray(o.refreshKeys)&&o.refreshKeys.length){let i=Number(o.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await L(o.refreshKeys,"state")}}catch(n){e==="commissioningCm100Start"?(t.pendingCommissioningCm100Start=!1,t.commissioningTaskLock=""):e==="boilerPowerTestStart"?(t.pendingBoilerPowerTestStart=!1,t.commissioningTaskLock=""):e==="flowAutotuneStart"?(t.pendingFlowAutotuneStart=!1,t.commissioningTaskLock=""):e==="airPurgeStart"?(t.pendingAirPurgeStart=!1,t.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock=""):e==="manualFlowStart"?(t.pendingManualFlowStart=!1,t.commissioningTaskLock=""):e==="manualHpStart"&&(t.pendingManualHpStart=!1,t.commissioningTaskLock=""),t.controlError=`${o.errorPrefix||`Actie mislukt voor "${r.name}"`}. ${n.message}`}finally{t.busyAction="",d(),e==="hpWaterCalibrationApply"&&LS()}}}function oc(e){let o=t.root?t.root.querySelector(".oq-helper-curve-svg"):null;if(!o||!t.draggingCurveKey)return;let r=o.getBoundingClientRect(),n=22,a=180,i=(e-r.top)/r.height*240,p=70-(Math.min(n+a,Math.max(n,i))-n)/a*50,u=he(t.draggingCurveKey,p);String(T(t.draggingCurveKey))!==String(u)&&(t.drafts[t.draggingCurveKey]=u,d())}async function Ng(){let e=R.checkFirmwareUpdates;if(e){t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateCheckBusy=!0,t.controlError="",t.controlNotice="",d();try{await si("current build",{poll:!1,force:!0}),sn();let o=await fetch(j(e.domain,e.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);await ln(),t.controlNotice="Firmwarecontrole bijgewerkt."}catch(o){t.controlError=`Firmwarecontrole mislukte. ${o.message}`}finally{t.updateCheckBusy=!1,d()}}}async function Og(){try{await L(Fr,"all",{concurrency:Mt,forceMissing:!0}),t.updateModalOpen&&d()}catch{}}async function si(e,o={}){let r=R.firmwareUpdateTarget;if(!r||!h("firmwareUpdateTarget"))return!1;let n=String(e||"").trim();if(!n)return!1;if(!o.force&&String(T("firmwareUpdateTarget")||"").trim()===n)return!0;t.entities.firmwareUpdateTarget={...t.entities.firmwareUpdateTarget||{},state:n,value:n};let a=await fetch(`${j(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.poll!==!1?(sn(),await ln({expectedBuildLabel:o.expectedBuildLabel||""})):!0}async function Dg(){let e=fe();if(e){t.firmwareAdvancedOpen=!1,t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareTopologySwitchOpen=!1,t.updateTestFirmwareOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchConfirmed=!1,He(),tt(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion=co(e),t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.updateInstallMode="normal",t.updateInstallTargetConnection="",t.updateInstallTargetTopology="",t.controlError="",t.controlNotice="",d();try{await si("current build",{poll:!1,force:!0}),t.updateInstallTargetVersion=co(fe()||{})||t.updateInstallTargetVersion,an();let o=R.installFirmwareUpdateTarget,r=o&&h("installFirmwareUpdateTarget")?j(o.domain,o.name,"press"):j("update","Firmware Update","install"),n=await fetch(r,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);await dr({initialDelayMs:Co,pollDelayMs:_r})?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ie()||t.updateInstallTargetVersion,t.controlNotice=""):t.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(o){t.controlError=`OTA-update kon niet worden gestart. ${o.message}`}finally{pr(),d()}}}async function Lg(){let e=va(),o=R.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!o)){if(!t.firmwareConnectionSwitchConfirmed){t.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",d();return}t.updateManualUploadOpen=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,He(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallMode="connection-switch",t.updateInstallTargetConnection=e.targetConnection,t.updateInstallTargetTopology=J(),t.updateInstallTargetVersion=ie()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.controlError="",t.controlNotice="",d();try{if(!await si("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");t.updateInstallTargetVersion=co(fe()||{})||ie()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,d(),an();let n=await fetch(j(o.domain,o.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await dr({initialDelayMs:Co,pollDelayMs:_r}))t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ie()||t.updateInstallTargetVersion||"",t.firmwareConnectionSwitchConfirmed=!1,t.controlNotice="";else{let i=Xe(e.targetConnection);t.controlNotice=`Verbindingswissel naar ${i} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(r){t.controlError=`Verbindingswissel kon niet worden gestart. ${r.message}`}finally{pr(),d()}}}async function Fg(){let e=wa(),o=R.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!o)){if(!t.firmwareTopologySwitchConfirmed){t.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",d();return}t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,He(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallMode="topology-switch",t.updateInstallTargetConnection=e.targetConnection,t.updateInstallTargetTopology=e.targetTopology,t.updateInstallTargetVersion=ie()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.controlError="",t.controlNotice="",d();try{if(!await si("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");t.updateInstallTargetVersion=co(fe()||{})||ie()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,d(),an();let n=await fetch(j(o.domain,o.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await dr({initialDelayMs:Co,pollDelayMs:_r}))t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ie()||t.updateInstallTargetVersion||"",t.firmwareTopologySwitchConfirmed=!1,t.controlNotice="";else{let i=Po(e.targetTopology);t.controlNotice=`Opstellingswissel naar ${i} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(r){t.controlError=`Opstellingswissel kon niet worden gestart. ${r.message}`}finally{pr(),d()}}}async function FS(e,o){let r=rn(e,o);if(!r)throw new Error("Geen geldig PR-target gevonden.");let n=await fetch(r.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(n.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!n.ok)throw new Error(`GitHub API gaf HTTP ${n.status}`);let a=await n.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(g=>g&&g.name===o.otaFileName),p=i.find(g=>g&&g.name===o.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${o.label}.`);if(!p||!p.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${o.label}.`);let u=String(a.name||a.tag_name||`PR ${e}`).trim(),c=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:p.browser_download_url,label:c?`${u} \xB7 ${c.replace("T"," ").replace("Z"," UTC")}`:u}}async function Pg(e,o){if(!h(e))throw new Error(`${R[e]?.name||e} is niet beschikbaar op deze firmware.`);let r=await po(e,o);t.entities[e]={...t.entities[e]||{},state:r,value:r}}async function Ig(){let e=Fo(),o=ur(),r=R.installFirmwareTestOta;if(!e){t.updateTestFirmwareError="Vul een geldig PR-nummer in.",d();return}if(!o.available){t.updateTestFirmwareError=o.error||"Dit firmwaretarget wordt niet herkend.",d();return}if(!t.updateTestFirmwareConfirmed){t.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",d();return}if(!r||!h("installFirmwareTestOta")){t.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",d();return}t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,He(),t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion="",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.updateInstallMode="test-firmware",t.updateInstallTargetConnection="",t.updateInstallTargetTopology="",t.controlError="",t.controlNotice="",t.updateTestFirmwareError="",t.updateTestFirmwareBuild=null,d();let n=!1;try{let a=await FS(e,o);t.updateTestFirmwareBuild=a.label,d(),await Pg("firmwareTestOtaUrl",a.otaUrl),await Pg("firmwareTestOtaMd5Url",a.md5Url),n=!0,an();let i=await fetch(j(r.domain,r.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);await dr({initialDelayMs:Co,pollDelayMs:_r})?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ie()||`PR ${e}`,t.updateTestFirmwareOpen=!1,tt(),t.controlNotice=""):t.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){n&&ms(a.message)?t.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:t.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{pr(),d()}}async function _g(){let e=t.updateManualUploadFile;if(!e){t.updateManualUploadError="Kies eerst een firmwarebestand.",d();return}t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.updateInstallBusy=!0,t.updateInstallTargetVersion=ie()||"",t.updateInstallPhaseHint="starting",t.updateInstallProgressHint=0,t.updateInstallMode="",t.updateInstallTargetConnection="",t.updateInstallTargetTopology="",t.controlError="",t.controlNotice="",t.updateManualUploadError="",d();try{let o=new FormData;o.append("update",e,e.name||"firmware.bin");let r=await fetch("/update",{method:"POST",body:o});if(!r.ok)throw new Error(`HTTP ${r.status}`);t.updateManualUploadOpen=!1,He(),await dr()?(t.updateInstallCompleted=!0,t.updateInstallCompletedVersion=ie()||t.updateInstallTargetVersion||"",t.controlNotice=""):t.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(o){t.updateManualUploadError=`Handmatige upload mislukte. ${o.message}`}finally{pr(),d()}}function IS(e=t.currentStep){let o=["setupComplete","strategy",...Je];return e==="generation"?[...new Set([...o,"installationTopology",...Zo,"hpGeneration"])]:e==="flow-source"?[...new Set([...o,"hpGeneration",...lt])]:e==="thermostat-source"?[...new Set([...o,...So])]:e==="boiler"?[...new Set([...o,"boilerCvAssistEnabled","boilerRatedHeatPower"])]:e==="strategy"?[...new Set([...o,"strategy"])]:e==="heating"?[...new Set([...o,...vt,...qo,"dayMax","silentMax"])]:e==="flow"?[...new Set([...o,...Ye,...Jo])]:e==="water"?[...new Set([...o,"maxWater"])]:e==="silent"?[...new Set([...o,...To])]:e==="confirm"?[...new Set([...o,"installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...lt,...So,...Ye,...Jo,...vt,...qo,"maxWater",...To])]:o}async function li(e=t.currentStep){let o=IS(e);try{await L(o,"all",{concurrency:Rt}),t.quickStartModalOpen&&t.currentStep===e&&!t.nativeOpen&&d()}catch{}}async function Wg(){let e=$r();if(!e.canApply){t.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",d();return}t.busyAction="quickstart-flow-source",t.controlNotice="",t.controlError="",d();let o=async(r,n)=>{if(!h(r))return;let a=T(r);if(typeof n=="boolean"&&x(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await po(r,n);t.entities[r]={...t.entities[r]||{},value:i,state:i}};try{e.requiresCic?(await o("cicFeedUrl",e.normalizedDraftUrl),await o("cicPollingEnabled",!0),await o("flowSource","CIC"),t.quickStartCicFeedUrlDraft=null,t.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await o("qFlowSource",e.qFlowTarget),await o("flowSource","Outdoor unit"),t.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await L(lt,"all")}catch(r){t.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{t.busyAction="",d()}}async function Vg(){t.busyAction="quickstart-flow-refresh",t.controlNotice="",t.controlError="",d();try{await L(lt,"all");let e=$r();t.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){t.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{t.busyAction="",d()}}async function Bg(e,o){let r=R[e];if(!r||!h(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");let n=await fetch(j(r.domain,r.name,o?"turn_on":"turn_off"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`)}async function _S(){let e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(r=>{t.optionalMissingEntities&&delete t.optionalMissingEntities[r],delete t.entities[r]}),await L(e,"all");let o=e.filter(r=>!t.entities[r]);if(o.length){let r=o.map(n=>R[n]?.name||n).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${r}.`)}}async function WS(){for(let e=0;e<40;e+=1){await new Promise(o=>window.setTimeout(o,1e3));try{await L(lt,"state")}catch{return}if(!x("quickFlowTest")){t.busyAction!=="quickstart-flow-test-abort"&&(t.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),d();return}}}async function Kg(){if(!$r().canRunFlowTest){t.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",d();return}t.busyAction="quickstart-flow-test-start",t.controlNotice="",t.controlError="",d();let o=!1;try{if(await _S(),!x("cm100Active")){let a=R.commissioningCm100Start,i=await fetch(j(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);o=!0}let r=x("cm100Active")&&String(T("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!r&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await L(["commissioningStatus","cm100Active"],"state"),r=x("cm100Active")&&String(T("commissioningStatus")||"").trim()==="CM100 READY";if(!r){let a=String(T("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await Bg("quickFlowTest",!0),await L(lt,"all");let n=String(T("commissioningStatus")||"").trim();if(!x("quickFlowTest"))throw new Error(n||"De waterpomptest kon niet worden gestart.");t.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",WS()}catch(r){if(o&&!x("quickFlowTest"))try{let n=R.commissioningCm100Stop;await fetch(j(n.domain,n.name,"press"),{method:"POST"})}catch{}t.controlError=`Waterpomptest starten mislukt. ${r.message}`}finally{t.busyAction="",d()}}async function jg(){t.busyAction="quickstart-flow-test-abort",t.controlNotice="",t.controlError="",d();try{await Bg("quickFlowTest",!1),await L(lt,"all"),t.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){t.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{t.busyAction="",d()}}async function Ug(){let e=za();if(!e.canApply){t.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",d();return}t.busyAction="quickstart-thermostat-source",t.controlNotice="",t.controlError="",d();let o=async(r,n)=>{if(!h(r))return;let a=T(r);if(typeof n=="boolean"&&x(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await po(r,n);t.entities[r]={...t.entities[r]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await o("otEnabled",!0):e.selectedSource==="CIC"&&(await o("cicFeedUrl",e.normalizedDraftUrl),await o("cicPollingEnabled",!0),t.quickStartCicFeedUrlDraft=null),await o("roomTempSource",e.selectedSource),await o("roomSetpointSource",e.selectedSource),t.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await L(So,"all")}catch(r){t.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{t.busyAction="",d()}}function zg(){window.setTimeout(()=>{let e=document.activeElement;t.focusedField=e&&e.dataset&&e.dataset.oqField||"",t.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function Qg(e){e.target.closest(".oq-ph-concept-hotspot")&&(t.settingsInteractionLock=!0)}function Yg(e){let o=e.target.closest(".oq-ph-concept-hotspot");if(!o||e.relatedTarget&&o.contains(e.relatedTarget))return;let r=t.root&&t.root.querySelector(".oq-ph-concept-hotspot:hover"),n=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;t.settingsInteractionLock=!!(r||n)}function Jg(e){if(e.target.dataset.oqFirmwareConnectionConfirm){t.firmwareConnectionSwitchConfirmed=!!e.target.checked,d();return}if(e.target.dataset.oqFirmwareTopologyConfirm){t.firmwareTopologySwitchConfirmed=!!e.target.checked,d();return}if(e.target.dataset.oqFirmwareTestConfirm){t.updateTestFirmwareConfirmed=!!e.target.checked,t.updateTestFirmwareError="";let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!t.updateTestFirmwareConfirmed||!Fo()),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){t.updateTestFirmwarePr=String(e.target.value||""),t.updateTestFirmwareConfirmed=!1,t.updateTestFirmwareError="",t.updateTestFirmwareBuild=null;let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-firmware-test-confirm="true"]');a&&(a.checked=!1);let i=n?.querySelector('[data-oq-action="install-firmware-test"]');i&&(i.disabled=!0);let l=ur(),p=rn(Fo(),l),u=n?.querySelector('[data-oq-firmware-test-asset-note="true"]');u&&(u.textContent=p?l.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),n?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqMqttField){Nu(e.target);return}let r=e.target.dataset.oqField;if(!r){if(e.target.dataset.oqQuickstartCicUrl!==void 0){t.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){t.quickStartThermostatSourceDraft=String(e.target.value||""),d();return}let n=e.target.dataset.oqAuthField;if(n){t.authNotice="",t.authError="",n==="username"?t.authDraftUsername=String(e.target.value||""):n==="currentPassword"?t.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?t.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(t.authDraftConfirmPassword=String(e.target.value||""));return}return}if(e.target.dataset.oqPauseDraft){t.pauseResumeDraft=String(e.target.value||"");return}if(R[r]?.domain==="text"){t.inputDrafts[r]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(t.inputDrafts[r]=e.target.value);let n=$e(e.target.value);if(!Number.isNaN(n)){let a=he(r,e.target.value);if(t.drafts[r]=a,e.target.type==="range"){let i=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");i&&(i.textContent=K(r,a))}}}}function Zg(e){km(e)}function Gg(e,o){return e.deltaMode===1?o*16:e.deltaMode===2?o*window.innerHeight:o}function VS(e){let o=e?e.parentElement:null;for(;o&&o!==document.body&&o!==document.documentElement;){let r=window.getComputedStyle(o),n=/(auto|scroll)/.test(r.overflowY)&&o.scrollHeight>o.clientHeight,a=/(auto|scroll)/.test(r.overflowX)&&o.scrollWidth>o.clientWidth;if(n||a)return o;o=o.parentElement}return document.scrollingElement||document.documentElement}function Xg(e){let o=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!o||!t.root||!t.root.contains(o)||document.activeElement!==o)return;e.preventDefault(),o.blur();let r=VS(o);r&&typeof r.scrollBy=="function"&&r.scrollBy({left:Gg(e,e.deltaX||0),top:Gg(e,e.deltaY||0),behavior:"auto"})}function eh(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",Pd(n);return}if(e.target.dataset.oqFirmwareUploadFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",n?(t.firmwareAdvancedOpen=!0,t.updateManualUploadOpen=!0,t.updateManualUploadFile=n,t.updateManualUploadFileName=n.name||"",t.updateManualUploadError=""):He(),d();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof Cn=="function"&&Cn(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}if(e.target.dataset.oqEnergyHistoryExportMode!==void 0){t.energyHistoryExportMode=vr(e.target.value),t.energyHistoryExportError="",t.energyHistoryExportNotice="",d();return}let o=e.target.dataset.oqField;if(!o)return;let r=R[o];if(r){if(r.domain==="select"){ni(o,String(e.target.value));return}if(r.domain==="number"){ai(o,e.target.value);return}if(r.domain==="text"){xg(o,e.target.value);return}if(r.domain==="time"){let n=St(e.target.value);if(!n){t.controlError=`${r.name} verwacht tijd als HH:MM.`,d();return}kg(o,n);return}if(r.domain==="datetime"){let n=Ke(e.target.value);if(!n){t.controlError=`${r.name} verwacht datum en tijd.`,d();return}Hg(o,n);return}}}function th(e){let o=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(o){let c=o.querySelector("input[data-oq-field]");if(c&&(c.type==="time"||c.type==="datetime-local")&&typeof c.showPicker=="function")try{c.showPicker()}catch{}}let r=e.target.closest('[data-oq-action="toggle-settings-info"]'),n=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-modal]");if(r){let c=r.dataset.infoId||"";t.settingsInfoOpen=t.settingsInfoOpen===c?"":c,d();return}let l=e.target.closest("[data-oq-action]"),p=t.interfacePanelOpen&&!a;if(!l){let c=!1;if(t.settingsInfoOpen&&!n&&(t.settingsInfoOpen="",c=!0),p&&(xa(!1),c=!0),i&&e.target===i){if(i.dataset.oqModal==="quickstart-forced")return;t.updateModalOpen&&(t.updateModalOpen=!1,t.firmwareAdvancedOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareTopologySwitchOpen=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchConfirmed=!1,He(),tt(),c=!0),t.systemModal&&(Oa(),Ao(),t.systemModal="",c=!0)}c&&d();return}p&&l.dataset.oqAction!=="toggle-interface-panel"&&xa(!1);let u=l.dataset.oqAction;if(u==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(l.dataset.boilerMode||"off");return}if(u==="toggle-interface-panel"){xa(!t.interfacePanelOpen),d();return}if(u==="toggle-dev-panel"){ed(!t.devPanelOpen),d();return}if(u==="toggle-installation-monitoring-details"){e.preventDefault();let c=l.closest(".oq-settings-monitoring-details");t.installationMonitoringDetailsOpen=!(c&&c.hasAttribute("open")),d();return}if(u==="toggle-integration-diagnostics"){e.preventDefault();let c=l.closest(".oq-settings-integration-diagnostics");t.integrationDiagnosticsOpen=!(c&&c.hasAttribute("open")),d();return}if(u==="toggle-odu-runtime-frequency-details"){e.preventDefault();let c=l.closest(".oq-settings-odu-runtime-details");t.oduRuntimeFrequencyDetailsOpen=!(c&&c.hasAttribute("open")),d();return}if(u==="toggle-storage-technical-details"){e.preventDefault();let c=l.closest(".oq-settings-storage-technical");t.settingsStorageDetailsOpen=!(c&&c.hasAttribute("open")),d();return}if(u==="select-view"){if((l.dataset.viewId||"")==="diagnosis"&&!ct())return;let c=l.dataset.viewId||"overview";ut(c,{syncMode:"push"}),d(),ce({forceFast:!0});return}if(u==="select-trend-window"){if(l.disabled)return;yr(Number(l.dataset.trendHours||24)),d(),js({force:!0}).then(c=>{c&&d()});return}if(u==="select-energy-history-view"){if(l.disabled||typeof Ys!="function")return;Ys(l.dataset.energyHistoryView||"day");return}if(u==="shift-energy-history-period"){if(l.disabled||typeof Xs!="function")return;Xs(t.energyHistoryView||"day",l.dataset.energyHistoryDirection||"1");return}if(u==="select-energy-history-now"){if(l.disabled||typeof el!="function")return;el(t.energyHistoryView||"day");return}if(u==="select-settings-group"){dn(l.dataset.groupId||me[0].id),d(),ce({forceFast:!0});return}if(u==="open-update-modal"){t.updateModalOpen=!0,d(),Og();return}if(u==="open-webserver-log-modal"){qp();return}if(u==="open-debug-recording-modal"){t.systemModal="debug-recording",t.debugRecordingError="",t.debugRecordingNotice="",d(),pn();return}if(u==="open-login-modal"){t.systemModal="login",Ii(),t.authNotice="",t.authError="",d(),Uc({poll:!0});return}if(u==="open-api-security-modal"){t.systemModal="api-security",t.apiSecurityNotice="",t.apiSecurityError="",d(),Xt({force:!0});return}if(u==="open-mqtt-modal"){t.systemModal="mqtt",ss(),t.mqttDraftDirty=!1,t.mqttNotice="",t.mqttError="",d(),Mo({force:!0});return}if(u==="open-mqtt-sensors-modal"){t.systemModal="mqtt-sensors",t.mqttNotice="",t.mqttError="",t.mqttCopiedTopicKey="",t.mqttExpandedTopicKey="",t.mqttInputToggleBusyKey="",d(),Mo({force:!0}).then(c=>{c&&t.systemModal==="mqtt-sensors"&&d()});return}if(u==="toggle-mqtt-sensor-topic"){let c=l.dataset?.oqMqttTopicKey||"cooling_dew_point";t.mqttExpandedTopicKey=t.mqttExpandedTopicKey===c?"":c,t.mqttError="",d();return}if(u==="toggle-mqtt-input"){let c=l.dataset?.oqMqttTopicKey||"cooling_dew_point";Lu(c,!la(c));return}if(u==="copy-mqtt-topic"||u==="copy-mqtt-dew-topic"){Du(l.dataset?.oqMqttTopicKey||"cooling_dew_point");return}if(u==="save-mqtt-config"){Fu();return}if(u==="copy-api-security-key"){Jc();return}if(u==="enable-api-security"){zc();return}if(u==="rotate-api-security"){Qc();return}if(u==="disable-api-security"){Yc();return}if(u==="restart-api-security"){Gc();return}if(u==="flush-trend-history"){Mr("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:oo(),refreshDelayMs:500}).then(()=>{Bo(void 0,{forceTrendHistory:!0})});return}if(u==="save-lifetime-energy-history"){Mr("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:oo(),refreshDelayMs:500}).then(()=>{t.energyHistoryRaw="",t.energyHistorySignature="",t.energyHistoryLastFetchAt=0,Bo(),t.appView==="results"&&go({force:!0}).then(()=>d())});return}if(u==="clear-lifetime-energy-history"){if(!window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return;Mr("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:oo(),refreshDelayMs:500}).then(()=>{t.energyHistoryRaw="",t.energyHistorySignature="",t.energyHistoryLastFetchAt=0,Bo(),t.appView==="results"&&go({force:!0}).then(()=>d())});return}if(u==="select-energy-history-import-file"){$d();return}if(u==="clear-energy-history-import-file"){Bs(),d();return}if(u==="import-energy-history-file"){Ad();return}if(u==="export-energy-history"){Sd();return}if(u==="open-history-storage-modal"){t.systemModal="history-storage",d(),wn({forceMissing:!0,forceTrendHistory:!0,forceEnergyHistory:!0}).finally(()=>{t.systemModal==="history-storage"&&d()}),Bo([1e3,3e3,7e3]);return}if(u==="open-connectivity-modal"){t.systemModal="connectivity",d();return}if(u==="open-restart-confirm"){t.systemModal="restart-confirm",d();return}if(u==="download-settings-backup"){Rd();return}if(u==="open-settings-backup-import"){t.systemModal="settings-backup-import",d();return}if(u==="open-silent-settings-modal"){t.systemModal="silent-settings",d();return}if(u==="open-openquatt-pause-modal"){t.pauseResumeDraft=Jn(),t.systemModal="openquatt-pause",d();return}if(u==="enable-openquatt-now"){Mg();return}if(u==="apply-openquatt-preset"){let c=$i(l.dataset.pausePreset||"");t.pauseResumeDraft=c,ii(c);return}if(u==="apply-openquatt-indefinite"){ii("");return}if(u==="apply-openquatt-custom-pause"){if(!String(t.pauseResumeDraft||"").trim()){t.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",d();return}ii(t.pauseResumeDraft||"");return}if(u==="close-update-modal"){t.updateModalOpen=!1,t.updateInstallCompleted=!1,t.updateInstallCompletedVersion="",t.firmwareAdvancedOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareTopologySwitchOpen=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchConfirmed=!1,He(),tt(),d();return}if(u==="close-quickstart-modal"){t.quickStartModalOpen=!1,d();return}if(u==="open-quickstart-modal"){t.currentStep="generation",t.quickStartModalMode="wizard",t.quickStartModalOpen=!0,d();return}if(u==="open-generation-modal"){t.currentStep="generation",t.quickStartModalMode="generation",t.quickStartModalOpen=!0,d();return}if(u==="open-cm100-commissioning-modal"){t.systemModal="",ut("settings"),dn("service"),d(),ce({forceFast:!0});return}if(u==="open-installation-monitoring"){t.systemModal="",ut("settings"),dn("service"),d(),ce({forceFast:!0});return}if(u==="open-service-task-modal"){let c=String(l.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(c)&&(t.systemModal=`service-task-${c}`,d(),ce({forceFast:!0}));return}if(u==="press-named-button"){let c=String(l.dataset.oqButtonKey||l.dataset.buttonKey||l.getAttribute("data-oq-button-key")||"").trim();if(c){c==="commissioningCm100Start"?(t.pendingCommissioningCm100Start=!0,t.commissioningTaskLock="cm100",t.commissioningBoilerHeatPowerDisplay=""):c==="commissioningCm100Stop"?(t.pendingCommissioningCm100Start=!1,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="",t.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestStart"?(t.pendingBoilerPowerTestStart=!0,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="boiler",t.commissioningBoilerHeatPowerDisplay=""):c==="boilerPowerTestAbort"||c==="boilerPowerTestApply"?t.commissioningTaskLock="boiler":c==="flowAutotuneStart"?(t.pendingFlowAutotuneStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="autotune"):c==="flowAutotuneAbort"||c==="flowAutotuneApply"?t.commissioningTaskLock="autotune":c==="airPurgeStart"?(t.pendingAirPurgeStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="purge"):c==="airPurgeAbort"?t.commissioningTaskLock="purge":c==="manualFlowStart"?(t.pendingManualFlowStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualHpStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="manual-flow"):c==="manualFlowAbort"?t.commissioningTaskLock="manual-flow":c==="manualHpStart"?(t.pendingManualHpStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingHpWaterCalibrationStart=!1,t.commissioningTaskLock="manual-hp"):c==="hpWaterCalibrationStart"?(t.pendingHpWaterCalibrationStart=!0,t.pendingBoilerPowerTestStart=!1,t.pendingFlowAutotuneStart=!1,t.pendingAirPurgeStart=!1,t.pendingManualFlowStart=!1,t.pendingManualHpStart=!1,t.commissioningTaskLock="hp-water-calibration"):c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply"?t.commissioningTaskLock="hp-water-calibration":c==="manualHpAbort"&&(t.commissioningTaskLock="manual-hp");let g=[],y=0,b="",v="";if(c==="acknowledgeCompressorCyclingAlert")g.push(...Or);else if(c==="commissioningCm100Start"||c==="commissioningCm100Stop")g.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive");else if(c==="boilerPowerTestStart"||c==="boilerPowerTestAbort"||c==="boilerPowerTestApply")g.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower");else if(c==="flowAutotuneStart"||c==="flowAutotuneAbort"||c==="flowAutotuneApply")g.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi");else if(c==="airPurgeStart"||c==="airPurgeAbort")g.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode");else if(c==="hpWaterCalibrationStart"||c==="hpWaterCalibrationAbort"||c==="hpWaterCalibrationApply")g.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode");else if(c==="manualFlowStart"||c==="manualFlowAbort"||c==="manualFlowApplyHeating"||c==="manualFlowApplyCooling")g.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint");else if(c==="manualHpStart"||c==="manualHpAbort")g.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode");else if(Kn.has(c)){let m=gc(c);m&&(g.push(...hi(m)),y=c.endsWith("Load")?1200:3200,b=c.endsWith("Load")?`HP${m} ODU runtime tabel lezen aangevraagd.`:`HP${m} ODU runtime write aangevraagd; controleer status/readback.`,v=`ODU runtime actie mislukt voor HP${m}`)}Mr(c,{...g.length?{refreshKeys:g}:{},...y?{refreshDelayMs:y}:{},...b?{successNotice:b}:{},...v?{errorPrefix:v}:{}})}return}if(u==="close-system-modal"){Ao(),Wo(),t.systemModal="",t.authDraftCurrentPassword="",t.authDraftNewPassword="",t.authDraftConfirmPassword="",t.authNotice="",t.authError="",t.apiSecurityNotice="",t.apiSecurityError="",Oa(),d(),un();return}if(u==="clear-webserver-log-output"){Lo();return}if(u==="copy-webserver-log-output"){Ep();return}if(u==="start-debug-recording"){jp(l.dataset.debugMinutes||15);return}if(u==="start-rolling-debug-recording"){Up();return}if(u==="select-debug-recording-duration"){_p(l.dataset.debugMinutes||15);return}if(u==="stop-debug-recording"){zp();return}if(u==="freeze-debug-recording"){Gp();return}if(u==="download-debug-recording"){Qp();return}if(u==="copy-debug-recording"){Yp();return}if(u==="confirm-settings-backup-restore"){Nd();return}if(u==="confirm-restart"){Mr("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(u==="select-surface"){let c=l.dataset.surface==="native";if(t.nativeOpen===c){t.nativeOpen&&Aa();return}t.nativeOpen=c,Ds(t.nativeOpen?"native":"app"),t.controlError="",t.controlNotice="",t.settingsInfoOpen="",t.updateModalOpen=!1,t.firmwareAdvancedOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareTopologySwitchOpen=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchConfirmed=!1,He(),tt(),Ao(),t.systemModal="",t.nativeOpen&&Aa(),d(),$a(),window.requestAnimationFrame(()=>{t.nativeOpen?t.nativeApp&&t.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(u==="toggle-overview-theme"){Xp(t.overviewTheme==="light"?"dark":"light"),d();return}if(u==="select-hp-visual"){td(l.dataset.hpVisual==="compact"?"compact":"schematic"),d();return}if(u==="select-hp-layout"){od(l.dataset.hpLayout||"equal"),d();return}if(u==="select-step"){t.currentStep=l.dataset.stepId||"generation",d(),li(t.currentStep);return}if(u==="apply-quickstart-flow-source"){Wg();return}if(u==="refresh-quickstart-flow-signal"){Vg();return}if(u==="start-quickstart-flow-test"){Kg();return}if(u==="abort-quickstart-flow-test"){jg();return}if(u==="apply-quickstart-thermostat-source"){Ug();return}if(u==="previous-step"){El(-1),d(),li(t.currentStep);return}if(u==="next-step"){El(1),d(),li(t.currentStep);return}if(u==="select-settings-option"){let c=l.dataset.selectKey||"",g=l.dataset.selectOption||"";c&&g&&String(T(c)||"")!==g&&ni(c,g);return}if(u==="toggle-overview-control"){let c=l.dataset.controlKey||"",g=(l.dataset.controlState||"").toLowerCase();c&&(g==="on"||g==="off")&&Cg(c,g==="on");return}if(u==="select-overview-control-option"){let c=l.dataset.controlKey||"",g=l.dataset.controlOption||"";c&&g&&String(T(c)||"")!==g&&ni(c,g);return}if(u==="suggest-curve-fallback"){let c=Zn();c&&ai("curveFallbackSupply",c.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(u==="apply"||u==="reset"){Rg(u);return}if(u==="run-firmware-check"){Ng();return}if(u==="install-firmware-update"){Dg();return}if(u==="install-firmware-connection-switch"){Lg();return}if(u==="install-firmware-topology-switch"){Fg();return}if(u==="toggle-firmware-advanced"){t.firmwareAdvancedOpen||t.firmwareConnectionSwitchOpen||t.firmwareTopologySwitchOpen||t.updateManualUploadOpen||t.updateTestFirmwareOpen?(t.firmwareAdvancedOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,He(),tt()):t.firmwareAdvancedOpen=!0,d();return}if(u==="toggle-firmware-connection-switch"){t.firmwareConnectionSwitchOpen=!t.firmwareConnectionSwitchOpen,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareConnectionSwitchOpen&&(t.firmwareAdvancedOpen=!0,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,He(),tt()),d();return}if(u==="toggle-firmware-topology-switch"){t.firmwareTopologySwitchOpen=!t.firmwareTopologySwitchOpen,t.firmwareTopologySwitchConfirmed=!1,t.firmwareTopologySwitchOpen&&(t.firmwareAdvancedOpen=!0,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.updateManualUploadOpen=!1,t.updateTestFirmwareOpen=!1,He(),tt()),d();return}if(u==="toggle-firmware-upload"){t.updateManualUploadOpen?(t.updateManualUploadOpen=!1,He()):(t.firmwareAdvancedOpen=!0,t.updateManualUploadOpen=!0,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,t.updateTestFirmwareOpen=!1,tt(),t.updateManualUploadError=""),d();return}if(u==="upload-firmware-file"){_g();return}if(u==="toggle-firmware-test"){t.updateTestFirmwareOpen?(t.updateTestFirmwareOpen=!1,tt()):(t.firmwareAdvancedOpen=!0,t.updateTestFirmwareOpen=!0,t.updateManualUploadOpen=!1,t.firmwareConnectionSwitchOpen=!1,t.firmwareConnectionSwitchConfirmed=!1,t.firmwareTopologySwitchOpen=!1,t.firmwareTopologySwitchConfirmed=!1,He(),t.updateTestFirmwareError=""),d();return}if(u==="install-firmware-test"){Ig();return}if(u==="save-web-auth"){Zc();return}if(u==="disable-web-auth"){Xc();return}}function oh(e){let o=e.target.closest("[data-curve-key]");!o||!oe()||(t.draggingCurveKey=o.dataset.curveKey||"",oc(e.clientY))}function rh(e){typeof ol=="function"&&ol(e),t.draggingCurveKey&&oc(e.clientY)}function nh(){if(!t.draggingCurveKey)return;let e=t.draggingCurveKey,o=he(e,T(e));t.draggingCurveKey="",ai(e,o,"Curvepunt bijgewerkt.")}iu({handleChange:eh,handleClick:th,handleFocusChange:zg,handleInput:Jg,handleKeyDown:Zg,handlePointerDown:oh,handlePointerMove:rh,handlePointerUp:nh,handleSettingsInteractionEnd:Yg,handleSettingsInteractionStart:Qg,handleWheel:Xg});nd();})();
