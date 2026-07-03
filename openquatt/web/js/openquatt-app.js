/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{const Ed=`
    <svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>
  `,Ki={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},Js="https://oi.esphome.io/v3/www.js",Mt=2,Qn=4,ua=6e4,Zs="Power House",Xs="Water Temperature Control (heating curve)",Ko=[{id:"generation",kicker:"Stap 1",title:"Kies je Quatt Hybrid",copy:"Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.",fields:[{title:"Quatt Hybrid-versie",copy:"Kies de versie die bij jouw Quatt hoort."}]},{id:"flow-source",kicker:"Stap 2",title:"Flowmeting configureren",copy:"Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort.",fields:[{title:"Flowbron",copy:"De Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron OpenQuatt moet gebruiken."}]},{id:"thermostat-source",kicker:"Stap 3",title:"Thermostaatgegevens configureren",copy:"Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt.",fields:[{title:"Thermostaatbron",copy:"Q-edition gebruikt OpenTherm. Listener en Waveshare gebruiken CiC of Home Assistant."}]},{id:"boiler",kicker:"Stap 4",title:"CV-ketel of boiler",copy:"Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.",optionalEntity:"boilerCvAssistEnabled",fields:[{title:"CV-ketel / boiler aanwezig",copy:"Kies of er ondersteuning beschikbaar is en vul eventueel het vermogen in."}]},{id:"strategy",kicker:"Stap 5",title:"Kies de verwarmingsstrategie",copy:"Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.",fields:[{title:"Verwarmingsstrategie",copy:"Kies of OpenQuatt automatisch op je woning reageert, of werkt met een vaste stooklijn."}]},{id:"heating",kicker:"Stap 6",title:"Werk de regeling uit",copy:"Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze.",fields:[{title:"Instellingen voor jouw regeling",copy:"Je ziet hier alleen de instellingen die echt nodig zijn voor de gekozen regeling."}]},{id:"flow",kicker:"Stap 7",title:"Flowregeling en afstelling",copy:"Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning.",fields:[{title:"Flowregeling en tuning",copy:"Kies of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt. Stel hier ook de flow-instellingen in."}]},{id:"water",kicker:"Stap 8",title:"Watertemperatuur beveiligen",copy:"Controleer de normale bovengrens en de tripgrens voor het watercircuit.",fields:[{title:"Watertemperatuur",copy:"Met deze grenzen voorkom je dat de watertemperatuur te hoog oploopt."}]},{id:"silent",kicker:"Stap 9",title:"Stille uren en niveaus",copy:"Stel daarna het stille venster en de compressorlimieten voor dag en nacht in.",fields:[{title:"Stille uren",copy:"Hier bepaal je wanneer het systeem rustiger moet werken."}]},{id:"confirm",kicker:"Stap 10",title:"Bevestigen en afronden",copy:"Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.",fields:[{title:"Afronden",copy:"Je instellingen zijn al opgeslagen. Deze stap markeert alleen dat Quick Start klaar is."}]}],Uo=[1,2],Rn=Array.from({length:11},(e,t)=>t),da=["cooling","heating"];function $d(e){return e==="cooling"?"cooling":"heating"}function Ad(e){return e==="cooling"?"Cooling":"Heating"}function en(e,t,o){return`hp${e}OduRuntime${Ad(t)}F${o}`}function se(e,t){return`hp${e}OduRuntimeFrequency${t}`}function el(e){return[se(e,"Enable"),se(e,"Load"),se(e,"Apply"),se(e,"Status"),...da.flatMap(t=>Rn.map(o=>en(e,t,o)))]}function Hd(e){const t=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return t?Number(t[1]):0}const pa=Uo.flatMap(el),tl=new Set(Uo.flatMap(e=>[se(e,"Load"),se(e,"Apply")])),L={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestConfidence:{domain:"sensor",name:"Boiler power test confidence",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};Uo.forEach(e=>{const t=`HP${e} - EXPERIMENTAL`;L[se(e,"Enable")]={domain:"switch",name:`${t} ODU runtime frequency write enable`,optional:!0},L[se(e,"Load")]={domain:"button",name:`${t} load ODU runtime frequency table`,optional:!0},L[se(e,"Apply")]={domain:"button",name:`${t} apply ODU runtime frequency table`,optional:!0},L[se(e,"Status")]={domain:"text_sensor",name:`${t} ODU runtime frequency status`,optional:!0},da.forEach(o=>{Rn.forEach(r=>{L[en(e,o,r)]={domain:"number",name:`${t} ${$d(o)} F${r} runtime Hz`,optional:!0}})})});const ga=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"settings",label:"Instellingen",icon:"settings"}],Md=new Set(ga.map(e=>e.id)),Pd={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',"clipboard-check":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6"/><path d="m9 13 2 2 4-5"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function ma(e,t=""){const o=Pd[e];return o?`<svg${t?` class="${s(t)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${o}</svg>`:""}const qe=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],Ve=new Set(qe.map(e=>e.id)),Nd=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],de=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],Pt=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Yn=["dayMax","silentMax","maxWater"],Ze=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],Ao=["flowKp","flowKi"],Ho=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],Mo=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],ha=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Rd=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],fa=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...Mo,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],qo=new Set(["commissioningStatus","cm100Active","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowActive","manualFlowStatus","manualFlowTargetIpwm","manualHpActive","manualHpStatus","manualHpGuardStatus","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg"]),nl=["cicCompatibilityMode"],ol=["otEnabled","otLinkProblem"],rl=["cicPollingEnabled","cicFeedUrl","cicDataStale"],al=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],il=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],ba=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"],sl=["supplyTemp","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","coolingEnableSelected","coolingEnableEffectiveSource","coolingEnableHa","coolingEnableHaValid"],Xe=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],Ln=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","roomSetpointHa","roomSetpointHaValid"],ll=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],On=[...de.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],cl=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],Fn=["silentStartTime","silentEndTime","silentMax","dayMax"],Ld=1e4;const Ir=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Jt=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],Nt=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Od=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],va=[...Nt,...Od,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],ko=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],Qe=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],ya=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Mode","hp1Failures","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Mode","hp2Failures","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay"],ul=["strategy","openquattEnabled","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride","hp1Power","hp1Heat","hp1Cooling","hp1Cop","hp1Compressor","hp1Freq","hp1FanSpeed","hp1Mode","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1BottomPlate","hp1Crankcase","hp1Eev","hp1FourWay","hp2Power","hp2Heat","hp2Cooling","hp2Cop","hp2Compressor","hp2Freq","hp2FanSpeed","hp2Mode","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2BottomPlate","hp2Crankcase","hp2Eev","hp2FourWay",...Rd],Fd=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...Pt,...On,...Ze,"maxWater",...Fn,...Xe,...Ln,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","hp1Power","hp1Heat","hp1Cooling","hp1Freq","hp1FanSpeed","hp1Flow","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1OutsideTemp","hp1CondenserPressure","hp1DischargeTemp","hp1EvaporatorPressure","hp1ReturnTemp","hp1WaterIn","hp1WaterOut","hp2Power","hp2Heat","hp2Cooling","hp2Freq","hp2FanSpeed","hp2Flow","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2OutsideTemp","hp2CondenserPressure","hp2DischargeTemp","hp2EvaporatorPressure","hp2ReturnTemp","hp2WaterIn","hp2WaterOut"],dl=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],pl=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...fa,"manualCoolingEnable","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","webServerLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear",...nl,...ol,...al,...rl,...il,...ba,...sl,...Ze,...Ao,...Ho,...Mo,...ha,...ll,...Yn,...Pt,...On,...cl,...Fn,...pa];const dw=new Set(["installationTopology",...fa,...pa,"cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"]),tn=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource",...Ho]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...de.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],gl=1,cn=[...new Set(tn.flatMap(e=>e.keys))],xd=new Set(cn),Dd=5e3,Id=3e4,Wd=6e4,Jn=12e3,zo=4e3,Bd=1500,Vd=3e4,_d=3e4,jd=1e3,wa=3e4,Ui=250,Kd=750,Ud=22,zd=Ud/1.7,Gd=360/3.2,xn="2000-01-01 00:00:00",nn=24,Po=[3,12,24,72,168,336,720],n={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,supplementaryPrimeTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:Jd(),devPanelOpen:Xd(),nativeOpen:Zd()==="native",currentStep:"generation",quickStartModalMode:"wizard",settingsGroup:ep(),appView:"",overviewTheme:Qd(),hpVisualMode:np(),hpLayoutMode:rp(),trendWindowHours:ip(),trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,trendHistoryMetadata:{},trendHistoryMetadataError:"",trendHistoryMetadataSignature:"",trendHistoryMetadataLastFetchAt:0,trendHistoryMetadataFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryCsrfToken:"",energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",energyHistoryExportMode:"days_and_hours",energyHistoryExportBusy:!1,energyHistoryExportError:"",energyHistoryExportNotice:"",settingsStorageDetailsOpen:!1,energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""},deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:Tf(),debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null,complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:"",updateModalOpen:!1,systemModal:"",authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:"",draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:lp(),motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}};function Qd(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function Yd(e){n.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",n.overviewTheme)}catch{}}function Jd(){return!1}function Er(e){n.interfacePanelOpen=e===!0}function Zd(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function ml(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function Xd(){try{return window.localStorage.getItem("oq-dev-panel-open")==="true"}catch{return!1}}function ep(){try{const e=window.localStorage.getItem("oq-settings-group");return Ve.has(e)?e:qe[0].id}catch{return qe[0].id}}function Co(e,t={}){n.settingsGroup=Ve.has(e)?e:qe[0].id;try{window.localStorage.setItem("oq-settings-group",n.settingsGroup)}catch{}t.syncUrl!==!1&&n.appView==="settings"&&yl(t.syncMode||"replace")}function tp(e){n.devPanelOpen=e===!0;try{window.localStorage.setItem("oq-dev-panel-open",n.devPanelOpen?"true":"false")}catch{}}function np(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function op(e){n.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",n.hpVisualMode)}catch{}}function rp(){try{const e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function ap(e){n.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",n.hpLayoutMode)}catch{}}function ip(){try{const e=Number(window.localStorage.getItem("oq-trend-window-hours"));return Po.includes(e)?e:nn}catch{return nn}}function hl(){const e=n.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;const t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function sp(){return hl()?Po:Po.filter(e=>e<=168)}function Sa(e){const t=sp(),o=Number(e);return t.includes(o)?o:Number.isFinite(o)&&o>t[t.length-1]?t[t.length-1]:t.includes(nn)?nn:t[0]}function qa(e){n.trendWindowHours=Sa(e);try{window.localStorage.setItem("oq-trend-window-hours",String(n.trendWindowHours))}catch{}}function on(){return"overview"}function fl(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function lp(){return!!fl()?.matches}function cp(e){if(n.reducedMotion=!!e?.matches,n.reducedMotion){ka();return}Ha()}function up(){const e=fl();!e||n.motionPreferenceMedia===e||(n.motionPreferenceMedia=e,n.motionPreferenceListener=cp,typeof e.addEventListener=="function"?e.addEventListener("change",n.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(n.motionPreferenceListener),n.reducedMotion=!!e.matches)}function dp(){return Object.keys(n.entities).length>0}function ka(){n.motionFrame&&(window.cancelAnimationFrame(n.motionFrame),n.motionFrame=0),n.motionStartedAt=0,$a()}function pp(){return Ui+Math.floor(Math.random()*(Kd-Ui+1))}function gp(){return(document.hidden?wa:Dd)+pp()}function bl(e=gp()){n.pollTimer||n.nativeOpen||n.updateInstallBusy||Ml()||(n.pollTimer=window.setTimeout(async()=>{n.pollTimer=null,await re(),bl()},e))}function Go(){bl()}function Ca(){n.pollTimer&&(window.clearTimeout(n.pollTimer),n.pollTimer=null)}function mp(){n.nativeOpen||(Ca(),Go(),document.hidden||re({forceProbe:!0}))}function Ta(e={}){if(Ro(),n.nativeOpen){Ca(),ka(),n.nativeFrontendLoaded||Wr();return}if(Ha(),Go(),e.refresh!==!1){if(!dp()){Um();return}re({forceFast:!0})}}function Dn(e){return e==="trends"&&(e="diagnosis"),!Md.has(e)||e==="diagnosis"&&!bn()?"":e}function No(e){return String(e||"").trim().toLowerCase()}function Ea(){try{const e=new URL(window.location.href),t=No(e.searchParams.get("view")||""),o=Dn(t);if(o)return o;const r=No(e.hash.replace(/^#/,""));return Dn(r)||""}catch{return""}}function vl(){try{const e=new URL(window.location.href),t=No(e.searchParams.get("section")||"");if(Ve.has(t))return t;const o=No(e.searchParams.get("group")||"");return Ve.has(o)?o:""}catch{return""}}function yl(e="replace"){try{const t=new URL(window.location.href),o=Dn(n.appView)||on();if(t.searchParams.set("view",o),o==="settings"){const a=Ve.has(n.settingsGroup)?n.settingsGroup:qe[0].id;t.searchParams.set("section",a),t.searchParams.delete("group")}else t.searchParams.delete("section"),t.searchParams.delete("group");t.hash&&Dn(t.hash.replace(/^#/,""))&&(t.hash="");const r=e==="push"?"pushState":"replaceState";window.history[r]({oqView:o,oqSettingsSection:o==="settings"?n.settingsGroup:""},"",t.toString())}catch{}}function At(e,t={}){const o=Dn(e)||on(),r=t.syncMode||"replace",a=n.appView!==o;n.appView=o,(a||t.forceSync)&&yl(r)}function hp(){const e=Ea()||on(),t=e==="settings"?vl()||n.settingsGroup:"";if(!(e===n.appView&&(e!=="settings"||t===n.settingsGroup))){if(n.appView=e,e==="settings"&&t){n.settingsGroup=t;try{window.localStorage.setItem("oq-settings-group",n.settingsGroup)}catch{}}m(),re({forceFast:!0})}}function Ro(){n.nativeApp&&(n.nativeApp.classList.add("oq-native-app"),n.nativeApp.classList.toggle("oq-native-app--collapsed",!n.nativeOpen),n.nativeApp.setAttribute("aria-hidden",n.nativeOpen?"false":"true"))}function fp(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",zi,{once:!0}):zi(),window.addEventListener("pointermove",nh),window.addEventListener("pointerup",oh),window.addEventListener("popstate",hp),window.addEventListener("oq-mock-updated",bp),window.addEventListener("oq-dev-controls-changed",vp),document.addEventListener("visibilitychange",mp)}function bp(){n.mounted&&re()}function vp(){n.mounted&&m()}function zi(){yp();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),n.nativeApp=e,n.nativeFrontendLoaded=Array.from(document.scripts).some(t=>t.src===Js),n.mounted||(wp(e),n.mounted=!0,Ta()),Ro(),n.nativeOpen||(re(),ci({silent:!0}))}function yp(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function wp(e){const t=document.createElement("section");t.id="oq-helper-root",t.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(t,e),t.addEventListener("click",eh),t.addEventListener("change",Xm),t.addEventListener("input",Qm),t.addEventListener("keydown",Ym),t.addEventListener("wheel",Zm,{passive:!1}),t.addEventListener("focusin",hs),t.addEventListener("focusout",hs),t.addEventListener("mouseover",zm),t.addEventListener("mouseout",Gm),t.addEventListener("pointerdown",th),n.root=t,up();const o=Ea()||on(),r=o==="settings"?vl():"";r&&Co(r,{syncUrl:!1}),At(o,{syncMode:"replace",forceSync:!0}),$a(),m()}function Sp(e){return new Promise((t,o)=>{if(!e){t();return}const r=Array.from(document.scripts).find(i=>i.src===e);if(r){if(r.dataset.loaded==="true"){t();return}r.addEventListener("load",()=>t(),{once:!0}),r.addEventListener("error",i=>o(i),{once:!0});return}const a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",t()},{once:!0}),a.addEventListener("error",i=>o(i),{once:!0}),document.head.appendChild(a)})}async function Wr(){if(!(n.nativeFrontendLoaded||n.nativeFrontendLoading)){n.nativeFrontendLoading=!0,n.nativeOpen&&m();try{await Sp(Js),n.nativeFrontendLoaded=!0}catch(e){n.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,n.nativeOpen=!1,ml("app"),m(),Ta()}finally{n.nativeFrontendLoading=!1,n.nativeOpen&&m()}}}function Gi(){if(!n.root)return;const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;!e||typeof e.bind!="function"||e.bind(n.root)}function $a(){n.root&&(n.root.style.removeProperty("--oq-flow-offset"),n.root.style.removeProperty("--oq-flow-offset-reverse"),n.root.style.removeProperty("--oq-fan-rotation"),n.root.getAttribute("style")||n.root.removeAttribute("style"))}function Aa(){return n.motionTargets={pipeFlows:[],fanBlades:[]},n.root?(n.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{n.motionTargets.pipeFlows.push(a)})}),n.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(r=>{r.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{n.motionTargets.pipeFlows.push(a)})}),n.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(r=>{r.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{n.motionTargets.fanBlades.push(a)})}),n.motionTargets.pipeFlows.length+n.motionTargets.fanBlades.length):0}function qp(){return n.motionTargets.pipeFlows.length>0||n.motionTargets.fanBlades.length>0}function wl(e=performance.now()){if(!n.root||n.reducedMotion||!qp()&&Aa()===0)return!1;n.motionStartedAt||(n.motionStartedAt=e);const t=(e-n.motionStartedAt)/1e3,o=t*Gd%360;return n.motionTargets.pipeFlows.forEach(r=>{const a=r.dataset.oqFlowVariant==="water"?.42:1,i=-(t*zd*a);r.style.strokeDashoffset=`${i.toFixed(3)}px`}),n.motionTargets.fanBlades.forEach(r=>{r.style.transform=`rotate(${o.toFixed(3)}deg)`}),!0}function Sl(e){if(!wl(e)){n.motionFrame=0,n.motionStartedAt=0;return}n.motionFrame=window.requestAnimationFrame(Sl)}function Ha(){if(n.motionFrame||n.reducedMotion||Aa()===0)return;const e=performance.now();if(n.motionStartedAt=e,!wl(e)){n.motionStartedAt=0;return}n.motionFrame=window.requestAnimationFrame(Sl)}function _e(){const e=window.location.pathname.replace(/\/$/,"");return e===""?"":e}function z(e,t,o=""){const r=o?`/${o}`:"";return`${_e()}/${e}/${encodeURIComponent(t)}${r}`}function le(e=E("strategy")){return String(e||"").includes("Water Temperature Control")}function kp(e=E("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function yt(){return typeof window<"u"&&window.__OQ_DEV_META&&typeof window.__OQ_DEV_META=="object"?window.__OQ_DEV_META:{}}function Cp(){const e=String(E("hpGeneration")||"").trim();return e||""}function Lo(e){const t=String(e||"").trim().toLowerCase();return t==="single"||t.includes("quatt single")||t.includes("openquatt single")?"single":t==="duo"||t.includes("quatt duo")||t.includes("openquatt duo")?"duo":""}function Tp(){if(!Array.isArray(ko))return"";if(ko.some(t=>v(t)))return"duo";const e=n.optionalMissingEntities||{};return ko.every(t=>e[t])?"single":""}function $r(e){const t=Lo(e);return(t==="single"||t==="duo")&&typeof n<"u"&&n&&typeof n=="object"&&(n.lastKnownInstallationTopology=t),t}function Ep(){if(typeof n<"u"&&n&&typeof n=="object"){const e=String(n.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function Z(){const e=Lo(E("installationTopology"));if(e==="single"||e==="duo")return $r(e);const t=Lo(yt().installation);if(t==="single"||t==="duo")return $r(t);const o=Tp();return o?$r(o):Ep()}function Zn(){const e=Z(),t=Cp();return e==="single"?t?`Quatt Single ${t}`:"Quatt Single":e==="duo"?t?`Quatt Duo ${t}`:"Quatt Duo":t?`Quatt Hybrid ${t}`:"Quatt Hybrid"}function Pe(){return"OpenQuatt"}function ql(e){const t=String(e||"").trim().toLowerCase();return t==="wifi"||t==="wi-fi"||t.includes("wifi")||t.includes("wi-fi")?"wifi":t==="eth"||t==="ethernet"||t.includes("ethernet")?"eth":""}function Ie(e=Lt()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function In(e=Z()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function Qo(){const e=String(E("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(yt().hardwareProfile||e).trim().toLowerCase()}function Lt(){return ql(E("connectionText")||yt().connection)}function $p(){const e=Lt();return e==="wifi"?"eth":e==="eth"?"wifi":""}function Ap(){const e=Z();return e==="single"?"duo":e==="duo"?"single":""}function Hp(){const e=n.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function kl(e){return Hp().includes(e)}function Wn(e=Z(),t=Lt()){const o=In(e),r=Qo();return r==="heatpump_controller_q"?`Heatpump Controller Q ${o} ${Ie(t)}`:r==="heatpump_listener"?`Heatpump Listener ${o} ${Ie(t)}`:r==="waveshare"?`Waveshare ${o} ${Ie(t)}`:`${Pe()} ${o} ${Ie(t)}`}function Ma(){const e=Qo(),t=Z(),o=Lt(),r=$p();return e!=="heatpump_controller_q"||t!=="single"&&t!=="duo"||o!=="wifi"&&o!=="eth"||!r?null:{canSwitch:v("firmwareUpdateTarget")&&kl("alternate connection")&&v("installFirmwareUpdateTarget"),currentConnection:o,targetConnection:r,currentLabel:Ie(o),targetLabel:Ie(r),currentBuildLabel:Wn(t,o),targetBuildLabel:Wn(t,r)}}function Pa(){const e=Qo(),t=Z(),o=Ap(),r=Lt(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||t!=="single"&&t!=="duo"||!o||!a.includes(r)?null:{canSwitch:v("firmwareUpdateTarget")&&kl("alternate topology")&&v("installFirmwareUpdateTarget"),currentTopology:t,targetTopology:o,currentConnection:r,targetConnection:r,currentLabel:In(t),targetLabel:In(o),currentBuildLabel:Wn(t,r),targetBuildLabel:Wn(o,r)}}function Bn(e=n.updateTestFirmwarePr){const t=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(t)?t:""}function Yo(){const e=Qo(),t=Z(),o=Lt(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||t!=="single"&&t!=="duo"||!a.connections.includes(o))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};const i=`openquatt-${a.slug}-${t}-${o}`,l=t==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${Ie(o)}`}}function Na(e=Bn(),t=Yo()){if(!e||!t.available)return null;const r=`${`https://github.com/jeroen85/OpenQuatt/releases/download/pr-${e}`}/${t.otaFileName}`;return{otaUrl:r,md5Url:`${r}.md5`,releaseApiUrl:`https://api.github.com/repos/jeroen85/OpenQuatt/releases/tags/pr-${e}`}}function Cl(){const e=A("timeValid"),t=String(E("timeNowHhmm")||"").trim();if(t&&t!=="invalid")return t;if(v("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function Tl(){return v("timeValid")&&!A("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${Cl()}`}function ho(e){if(!Number.isFinite(e)||e<0)return"\u2014";const t=Math.floor(e),o=Math.floor(t/1440),r=Math.floor(t%1440/60),a=t%60;return o>0?`${o}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function Mp(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function Pp(e){const t=e?.state;if(t!==""&&t!==null&&t!==void 0){const a=Number(t);if(Number.isFinite(a))return a}const o=e?.value,r=Number(o);return Number.isFinite(r)?r:NaN}function Ra(){const e=Pp(n.entities.uptime);if(Number.isFinite(e)&&e>=0){const r=Mp(n.entities.uptime);if(r==="d")return ho(e*1440);if(r==="h")return ho(e*60);if(r==="s")return ho(e/60)}const t=String(n.entities.uptimeReadable?.state??n.entities.uptimeReadable?.value??"").trim();if(t&&t.toLowerCase()!=="unknown")return t;const o=Number(yt().bootedAt);return!Number.isFinite(o)||o<=0?"\u2014":ho((Date.now()-o)/6e4)}function La(){const e=String(n.entities.ipAddress?.state??n.entities.ipAddress?.value??"").trim();if(e)return e;const t=String(yt().ipAddress||"").trim();return t||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function Xn(){if(He())return"Controleren";const e=tt();if(e)return e.phaseLabel;if(xa())return"Bijgewerkt";if(Zt())return"Bezig";if(un())return"Beschikbaar";const t=$l();if(t!==null&&t<=0)return"Actueel";const o=yt();return typeof o.updateLabel=="string"&&o.updateLabel.trim()?o.updateLabel.trim():o.updateAvailable===!0?"Beschikbaar":o.updateAvailable===!1||Ia()?"Actueel":ae()?"Nog niet gecontroleerd":"\u2014"}function ae(){return n.entities.firmwareUpdate||null}function Jo(){const e=ae();return e?String(e.state??e.value??"").trim().toLowerCase():""}function Np(){const e=n.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function Zo(){return Np().toLowerCase()}function El(){const e=n.entities.firmwareUpdateProgress;if(!e)return Number.NaN;const t=Number(e.value??e.state);return Number.isNaN(t)?Number.NaN:Math.max(0,Math.min(100,t))}function Oa(){const e=String(n.updateInstallTargetVersion||"").trim(),t=ne();return!e||!t?!1:to(t,e)>=0}function Rp(e=ae()||{}){const t=Rt(e),o=ne(e);return!t||!o?!1:to(o,t)>=0}function Fa(){return(Oa()||Rp())&&!He()&&!Mn()&&!un()}function xa(){return(n.updateInstallCompleted||Fa())&&!He()&&!tt()&&!un()}function eo(){n.updateInstallBusy=!1,n.updateInstallTargetVersion="",n.updateInstallPhaseHint="",n.updateInstallProgressHint=Number.NaN,n.updateInstallMode="",n.updateInstallTargetConnection="",n.updateInstallTargetTopology="",Wp()}function be(){n.updateManualUploadFile=null,n.updateManualUploadFileName="",n.updateManualUploadError=""}function De(e={}){e.clearPr&&(n.updateTestFirmwarePr=""),n.updateTestFirmwareConfirmed=!1,n.updateTestFirmwareError="",n.updateTestFirmwareBuild=null}function Lp(){const e=Zo(),t=El();if(e==="starting"||e==="uploading"||e==="rebooting"){n.updateInstallPhaseHint=e,Number.isNaN(t)||(n.updateInstallProgressHint=e==="rebooting"?Math.max(t,100):t);return}if(n.updateInstallBusy){if(Oa()){n.updateInstallPhaseHint="rebooting",n.updateInstallProgressHint=100;return}n.controlNotice.includes("opnieuw is opgestart")&&(n.updateInstallPhaseHint="rebooting",n.updateInstallProgressHint=100)}}function Mn(){const e=Zo();return e==="starting"||e==="uploading"||e==="rebooting"}function tt(){Lp();const e=Zo(),t=e==="starting"||e==="uploading"||e==="rebooting",o=t?e:n.updateInstallPhaseHint,r=El(),a=Number.isNaN(n.updateInstallProgressHint)?0:Math.round(n.updateInstallProgressHint),i=t&&!Number.isNaN(r)?Math.round(r):a;return!Mn()&&!n.updateInstallBusy?null:o==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:n.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":n.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":n.updateInstallMode==="topology-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:o==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:n.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${Pe()} gedownload en ge\xEFnstalleerd.`:n.updateInstallMode==="connection-switch"?`De ${Ie(n.updateInstallTargetConnection)}-build wordt nu naar ${Pe()} verzonden.`:n.updateInstallMode==="topology-switch"?`De ${Wn(n.updateInstallTargetTopology,n.updateInstallTargetConnection)}-build wordt nu naar ${Pe()} verzonden.`:`Firmware wordt nu naar ${Pe()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:n.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${Pe()}.`:n.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${Ie(n.updateInstallTargetConnection)} is gestart.`:n.updateInstallMode==="topology-switch"?`Opstellingswissel naar ${In(n.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${Pe()}.`}}function Rt(e=ae()||{}){const t=String(e.latest_version||"").trim();if(t)return t;const o=String(e.value||"").trim(),r=String(e.current_version||"").trim();return o&&o!==r&&/^v/i.test(o)?o:""}function ne(e=ae()||{}){const t=String(n.entities.projectVersionText?.state||n.entities.projectVersionText?.value||"").trim();return t||String(e.current_version||"").trim()}function Op(e=ae()||{}){const t=ne(e),o=String(e.current_version||"").trim();return!t||!o||t===o?!1:to(t,o)>0}function Da(e=ae()||{},t=ht()){const o=String(t||"").trim().toLowerCase(),r=String(e.release_url||"").trim().toLowerCase(),a=Rt(e).toLowerCase();if(!o||o==="\u2014")return!0;if(o==="dev"){if(r){if(r.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(o==="main"){if(r){if(r.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function Qi(e){const o=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return o?{major:Number(o[1]),minor:Number(o[2]),patch:Number(o[3]),prereleaseTag:o[4]||"",prereleaseNumber:o[5]?Number(o[5]):null}:null}function to(e,t){const o=Qi(e),r=Qi(t);if(!o||!r)return 0;if(o.major!==r.major)return o.major>r.major?1:-1;if(o.minor!==r.minor)return o.minor>r.minor?1:-1;if(o.patch!==r.patch)return o.patch>r.patch?1:-1;const a=!o.prereleaseTag,i=!r.prereleaseTag;return a!==i?a?1:-1:o.prereleaseTag!==r.prereleaseTag?o.prereleaseTag>r.prereleaseTag?1:-1:o.prereleaseNumber!==r.prereleaseNumber?(o.prereleaseNumber||0)>(r.prereleaseNumber||0)?1:-1:0}function Zt(){if(Fa())return!1;const e=Jo();return n.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function He(){const e=Jo();return n.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function un(){const e=Jo();if(!Da())return!1;const t=$l();return t!==null?t>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:yt().updateAvailable===!0}function Ia(){const e=Jo();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||Op()}function Wa(){const e=ae()||{},t=ne(e)||"\u2014";let o=Da(e)?Rt(e):"";const r=o?to(o,t):null;return!He()&&r!==null&&r<=0&&(o=""),{current:t,latest:o||"\u2014"}}function $l(){const{current:e,latest:t}=Wa();return e==="\u2014"||t==="\u2014"?null:to(t,e)}function Al(e=ht()){const t=String(e||"").trim().toLowerCase();return Ki[t]||Ki.main}function Fp(){const e=String((ae()||{}).release_url||"").trim(),t=Al();return!e||t.includes("/dev-latest")&&!e.includes("/dev-latest")||!t.includes("/dev-latest")&&e.includes("/dev-latest")?t:e}function xp(){return Pe()}function ht(){return String(E("firmwareUpdateChannel")||n.entities.releaseChannelText?.state||n.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function Dp(){return Wa().latest!=="\u2014"}function Yi(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function Ip(e,t=ae()||{}){const o=Yi(e);return o?Yi(`${t.title||""} ${t.summary||""}`).includes(o):!0}function Hl(e){return new Promise(t=>window.setTimeout(t,e))}function Ml(e=Date.now()){return Number(n.firmwareOtaQuietUntil||0)>e}function Xo(e=Jn){const o=Date.now()+e;n.firmwareOtaQuietUntil=Math.max(Number(n.firmwareOtaQuietUntil||0),o),n.pendingEntitySyncOptions=null,Ca(),typeof Ye=="function"&&Ye(),n.firmwareOtaQuietTimer&&window.clearTimeout(n.firmwareOtaQuietTimer),n.firmwareOtaQuietTimer=window.setTimeout(()=>{n.firmwareOtaQuietTimer=null,n.firmwareOtaQuietUntil=0,!n.updateInstallBusy&&!n.nativeOpen&&Go()},e)}function Wp(){n.firmwareOtaQuietTimer&&(window.clearTimeout(n.firmwareOtaQuietTimer),n.firmwareOtaQuietTimer=null),n.firmwareOtaQuietUntil=0,n.nativeOpen||Go()}const Bp=1500;function Ba(){n.deviceReconnectRecoveryTimer&&(window.clearTimeout(n.deviceReconnectRecoveryTimer),n.deviceReconnectRecoveryTimer=null)}function Ot(){return Number(n.deviceReconnectRecoveryStartedAt||0)>0}function Vp(){return Ot()?Number(n.deviceReconnectRecoveryStartedAt||0):Number(n.deviceReconnectStartedAt||0)}function _p(){return Ot()?"Gegevens verversen":"Wachten op gegevens"}function jp(){const e=Vp(),t=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return Ot()?t>0?`${t}s aan het verversen`:"Net weer online":t>0?`${t}s bezig`:"Net gestart"}function Ji(){if(!n.deviceReconnectMode||Ot())return!1;Ba(),n.deviceReconnectRecoveryStartedAt=Date.now(),n.deviceReconnectLastError="",n.entitySyncFailureCount=0;const e=n.deviceReconnectRecoveryStartedAt;return n.deviceReconnectRecoveryTimer=window.setTimeout(()=>{n.deviceReconnectMode&&Number(n.deviceReconnectRecoveryStartedAt||0)===e&&(Pl(),m())},Bp),m(),!0}function Va(e="reconnect",t=""){n.deviceReconnectMode||(n.deviceReconnectStartedAt=Date.now()),Ba(),n.deviceReconnectMode=e,n.deviceReconnectRecoveryStartedAt=0,n.deviceReconnectLastError=t?String(t):n.deviceReconnectLastError,n.systemModal="",n.updateModalOpen=!1,n.controlError=""}function Pl(){Ba(),!(!n.deviceReconnectMode&&!n.entitySyncFailureCount)&&(n.deviceReconnectMode="",n.deviceReconnectStartedAt=0,n.deviceReconnectRecoveryStartedAt=0,n.deviceReconnectLastError="",n.entitySyncFailureCount=0)}function Kp(){return Ot()?"OpenQuatt is weer online":n.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":n.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function Up(){return Ot()?n.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":n.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":n.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function zp(){return n.deviceReconnectMode?`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="reconnect">
        <section class="oq-helper-modal oq-helper-modal--reconnect" role="status" aria-live="polite" aria-labelledby="oq-reconnect-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-reconnect-modal-title">${s(Kp())}</h2>
            </div>
          </div>
          <p class="oq-helper-modal-copy">${s(Up())}</p>
          <div class="oq-helper-reconnect-status">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <div>
              <strong>${s(_p())}</strong>
              <span>${s(jp())}</span>
            </div>
          </div>
        </section>
      </div>
    `:""}function _a(e=ht()){const t=ae()||{},o=ne(t);n.entities.firmwareUpdate={...t,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:Al(e),current_version:o}}async function ja(e={}){const t=String(e.expectedBuildLabel||"").trim();for(let o=0;o<6;o+=1){await Hl(o===0?900:1200),await D(va,"all",{forceMissing:!0});const r=Da(),a=!t||Ip(t),i=Dp(),l=He(),c=Xn();if(r&&a&&(i||!l&&c!=="Nog niet gecontroleerd"))return!0}return!1}async function no(e={}){let t=!1;const o=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,r=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await Hl(a===0?o:r);try{if(await D(va,"all",{forceMissing:!0}),Zo()==="rebooting"&&Va("ota"),m(),n.updateInstallMode==="connection-switch"){const i=ql(n.updateInstallTargetConnection);if(i&&Lt()===i&&!Mn()&&!Zt())return!0}else if(n.updateInstallMode==="topology-switch"){const i=Lo(n.updateInstallTargetTopology);if(i&&Z()===i&&!Mn()&&!Zt())return!0}else if(Oa()||Fa()||Ia()&&!Mn()&&!Zt())return!0}catch{t||(n.controlNotice="Wachten tot het device opnieuw is opgestart...",m(),t=!0)}}return!1}function Gp(){const e=ht(),t=tt();if(t)return t.copy;if(xa()){const o=n.updateInstallCompletedVersion||ne()||ht();return`${Pe()} draait nu op ${o}.`}return Zt()?`OTA-update wordt voorbereid voor ${Pe()}. Het device kan kort herstarten.`:He()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:un()?"Er staat een nieuwere firmware klaar.":Ia()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function Nl(){return!!(n.firmwareAdvancedOpen||n.firmwareConnectionSwitchOpen||n.firmwareTopologySwitchOpen||n.updateManualUploadOpen||n.updateTestFirmwareOpen)}function fo(e,t,o,r,a=!1){return`
      <button
        class="oq-firmware-advanced-option${r?" is-active":""}"
        type="button"
        data-oq-action="${s(e)}"
        aria-pressed="${r?"true":"false"}"
        ${a?"disabled":""}
      >
        <strong>${s(t)}</strong>
        <span>${s(o)}</span>
      </button>
    `}function Qp(e,t,o,r){if(!Nl())return"";const i=!!(tt()||n.updateInstallBusy||He());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${i?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?fo("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${t.targetLabel}`,n.firmwareConnectionSwitchOpen,i):""}
          ${o?fo("toggle-firmware-topology-switch","Opstelling wisselen",`Naar ${r.targetLabel}`,n.firmwareTopologySwitchOpen,i):""}
          ${fo("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",n.updateManualUploadOpen,i)}
          ${fo("toggle-firmware-test","Testfirmware","PR-release installeren",n.updateTestFirmwareOpen,i)}
        </div>
        ${Yp()}
        ${Jp()}
        ${Xp()}
        ${Zp()}
      </div>
    `}function Yp(){const e=Ma();if(!e||!n.firmwareConnectionSwitchOpen)return"";const o=!!(tt()||n.updateInstallBusy||He()),r=!!n.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",c=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(ht())}-build voor de andere netwerkverbinding.</span>
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
          <input type="checkbox" data-oq-firmware-connection-confirm="true" ${r?"checked":""} ${o||i?"disabled":""}>
          <span>${s(a?"De netwerkkabel is aangesloten.":"Ik begrijp dat Ethernet na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-connection-switch"
            ${o||i||!r?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function Jp(){const e=Pa();if(!e||!n.firmwareTopologySwitchOpen)return"";const o=!!(tt()||n.updateInstallBusy||He()),r=!!n.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",c=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s(ht())}-build voor de andere Single/Duo-opstelling.</span>
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
          <input type="checkbox" data-oq-firmware-topology-confirm="true" ${r?"checked":""} ${o||a?"disabled":""}>
          <span>${s(i?"De tweede warmtepomp is aangesloten en hoort bij deze controller.":"Ik begrijp dat HP2-bediening na reboot verdwijnt.")}</span>
        </label>
        <div class="oq-firmware-advanced-footer">
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="install-firmware-topology-switch"
            ${o||a||!r?"disabled":""}
          >
            ${s(`Wissel naar ${e.targetLabel}`)}
          </button>
        </div>
      </div>
    `}function Zp(){if(!n.updateTestFirmwareOpen)return"";const t=!!(tt()||n.updateInstallBusy||He()),o=Bn(),r=Yo(),a=Na(o,r),i=!!(r.available&&v("firmwareTestOtaUrl")&&v("firmwareTestOtaMd5Url")&&v("installFirmwareTestOta")),l=!!(o&&i),c=n.updateTestFirmwareBuild||null,d=r.available?r.label:r.error,u=a?r.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
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
              value="${s(n.updateTestFirmwarePr||"")}"
              data-oq-firmware-test-pr="true"
              ${t?"disabled":""}
            >
          </label>
          <div class="oq-firmware-advanced-card">
            <span class="oq-helper-modal-label">Doelbuild</span>
            <strong class="oq-helper-modal-value">${s(d)}</strong>
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
        ${i?"":`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(r.available?"Deze firmware mist de testfirmware-bediening. Installeer eerst een nieuwere build.":r.error)}</p>`}
        ${n.updateTestFirmwareError?`<p class="oq-helper-modal-note oq-helper-modal-note--error" data-oq-firmware-test-runtime-error="true">${s(n.updateTestFirmwareError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <label class="oq-helper-modal-check oq-firmware-advanced-check">
            <input type="checkbox" data-oq-firmware-test-confirm="true" ${n.updateTestFirmwareConfirmed?"checked":""} ${t||!i?"disabled":""}>
            <span>Ik begrijp dat dit testfirmware uit een PR is.</span>
          </label>
          <button class="oq-helper-button" type="button" data-oq-action="install-firmware-test" ${t||!l||!n.updateTestFirmwareConfirmed?"disabled":""}>PR-firmware installeren</button>
        </div>
      </div>
    `}function Xp(){if(!n.updateManualUploadOpen)return"";const t=!!(tt()||n.updateInstallBusy||He()),o=String(n.updateManualUploadFileName||n.updateManualUploadFile?.name||"").trim();return`
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
          <span class="oq-helper-modal-subvalue">${s(o?`Gekozen bestand: ${o}`:"Nog geen bestand gekozen")}</span>
        </div>
        <p class="oq-helper-modal-note">De upload gebruikt dezelfde OTA-flow als de normale update. Laat deze pagina open tot het device weer terug is.</p>
        ${n.updateManualUploadError?`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.updateManualUploadError)}</p>`:""}
        <div class="oq-firmware-advanced-footer">
          <button class="oq-helper-button" type="button" data-oq-action="upload-firmware-file" ${t||!n.updateManualUploadFile?"disabled":""}>Upload en installeer</button>
        </div>
      </div>
    `}function Br(){return[n.interfacePanelOpen?"open":"closed",n.nativeOpen?"native":"app",n.appView,n.complete?"complete":"incomplete",n.overviewTheme,n.hpVisualMode,oe("installationTopology"),oe("hardwareProfileText"),oe("connectionText"),n.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",n.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",n.firmwareTopologySwitchOpen?"topology-open":"topology-closed",n.updateManualUploadOpen?"upload-open":"upload-closed",n.updateTestFirmwareOpen?"test-open":"test-closed",n.updateTestFirmwareError,oe("hpGeneration"),oe("projectVersionText"),oe("releaseChannelText"),Ka()].join("|")}function Ka(){const e=Math.max(Number(n.lastEntityResponseAt||0),Number(n.lastEntitySyncAt||0)),t=Number(n.deviceReconnectStartedAt||0);return n.entitySyncFailureCount>0&&!n.deviceReconnectMode?"Bezig":e>0&&(!n.deviceReconnectMode||e>=t)?"Verbonden":n.deviceReconnectMode?Ot()?"Verbonden":n.deviceReconnectMode==="reconnect"?"Offline":"Bezig":v("status")&&!A("status")?"Offline":"Bezig"}function Rl(){return String(E("projectVersionText")||"").trim()||"\u2014"}function eg(){const e=Rl();return e&&e!=="\u2014"?e:Xn()}function Ll(){const e=n.entities.espInternalTemp;if(!e)return"\u2014";const t=M("espInternalTemp");return Number.isNaN(t)?B("espInternalTemp"):I(t,1,e.uom||" \xB0C")}function Ua(){const e=n.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function tg(){return"Login"}function ng(){const e=n.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function za(){const e=n.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function og(){return"ESPHome API encryption"}function rg(){const e=n.apiSecurityStatus;return e?e.pending_restart?"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.key?"De sleutel blijft opgeslagen, ook wanneer encryptie uit staat. Je kunt hem hier meteen kopi\xEBren of opnieuw inschakelen.":"Er is nog geen API-sleutel opgeslagen. Deze wijziging wordt actief na herstart.":"We halen de huidige API-beveiliging op."}function ag(){const e=n.apiSecurityStatus;return e?e.enabled?"Uitschakelen":"Inschakelen":"Laden..."}function ig(){const e=n.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function Zi(e,t,o="",r=!1){return`
      <div class="oq-helper-modal-row${r?" oq-helper-modal-row--loading":""}">
        <span class="oq-helper-modal-label">${s(e)}</span>
        <strong class="oq-helper-modal-value">${r?`
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${s(t)}</span>
          </span>
        `:s(t)}</strong>
      ${o?`<span class="oq-helper-modal-subvalue">${s(o)}</span>`:""}
    </div>
    `}function sg(){const e=n.apiSecurityStatus||{},t=e.enabled===!0,o=!!e.key,r=!!e.pending_restart,a=n.apiSecurityNotice,i=n.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(n.apiSecurityError)}</div>`:"";return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${s(og())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(rg())}</p>
          ${a?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(a)}</span></div>`:""}
          ${i}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(pi())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(gi())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${t?"disable-api-security":"enable-api-security"}"
                ${n.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${s(ag())}
              </button>
            </div>
            <div class="oq-settings-api-security-key">
              <div class="oq-settings-field-head">
                <h3>API-sleutel</h3>
              </div>
              <p class="oq-settings-action-note">${s(r?o?"Deze sleutel is opgeslagen. Kopieer hem nu en kies daarna Opslaan en herstarten.":"Inschakelen maakt direct een nieuwe sleutel aan. Deze wijziging wordt actief na herstart.":e.transport_active?"Gebruik deze sleutel in Home Assistant voor de ESPHome-integratie.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.")}</p>
              ${o?`<div class="oq-settings-api-security-key-row"><div class="oq-settings-api-security-key-value">${s(e.key)}</div></div>`:""}
              ${o?`
                  <div class="oq-settings-api-security-actions">
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="rotate-api-security"
                      ${n.apiSecurityBusy||!e.csrf_token?"disabled":""}
                    >
                      ${s(ig())}
                    </button>
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="copy-api-security-key"
                      ${n.apiSecurityBusy?"disabled":""}
                    >
                      Kopieer sleutel
                    </button>
                  </div>
                `:""}
            </div>
          </div>
          <div class="oq-helper-modal-actions">
            ${r?`
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="restart-api-security"
                ${n.apiSecurityBusy?"disabled":""}
              >
                Opslaan en herstarten
              </button>
            `:""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${n.apiSecurityBusy?"disabled":""}>Gereed</button>
          </div>
        </section>
      </div>
    `}function lg(){const e=[["Netwerkstatus",Ka()],["IP-adres",La()]],t=String(E("wifiSsid")||"").trim();t&&e.push(["WiFi SSID",t]);const o=n.entities.wifiSignal;if(o){const r=M("wifiSignal");Number.isNaN(r)||e.push(["WiFi signaal",I(r,0,o.uom||" dBm")])}return e}function Ol(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function Fl(){return[["installation","Installatie",Zn()],["uptime","Uptime",Ra()],["connectivity","Connectiviteit",Ka()],["time","Tijd",Cl()],["version","Versie",eg(),!!ae()],["debugRecording","Debugopname",Sf(),!0],["webserverLog","Logboek",$c(),!0]]}function xl(){return un()}function Dl(e){return e==="version"&&xl()}function An(){return`
      <div class="oq-helper-status-grid">
        ${Fl().map(([t,o,r,a])=>{const i=Ol(t),l=!!(a||i),c=Dl(t);return`
          <${l?"button":"div"}
            class="oq-helper-status-item${l?" oq-helper-status-item--button":""}${c?" oq-helper-status-item--attention":""}"
            data-oq-header-status="${s(t)}"
            ${l?`type="button" data-oq-action="${s(i)}"`:""}
          >
            <span class="oq-helper-status-label">${s(o)}</span>
            <strong class="oq-helper-status-value">${c?`<span class="oq-helper-status-value-text">${s(r)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(r)}</strong>
          </${l?"button":"div"}>
        `}).join("")}
      </div>
    `}function Vr(){if(!n.root)return!1;const e=n.root.querySelector(".oq-helper-status-grid");if(!e)return!!n.root.querySelector(".oq-helper-hub");const t=Fl();if(e.querySelectorAll("[data-oq-header-status]").length!==t.length)return e.outerHTML=An(),!0;for(const[r,a,i,l]of t){const c=e.querySelector(`[data-oq-header-status="${r}"]`);if(!c)return e.outerHTML=An(),!0;const d=Ol(r),u=!!(l||d);if(c.tagName.toLowerCase()!==(u?"button":"div"))return e.outerHTML=An(),!0;const g=c.querySelector(".oq-helper-status-label"),b=c.querySelector(".oq-helper-status-value");if(!g||!b)return e.outerHTML=An(),!0;g.textContent!==a&&(g.textContent=a);const f=Dl(r),w=f?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);b.innerHTML!==w&&(b.innerHTML=w),u?c.setAttribute("data-oq-action",d):c.removeAttribute("data-oq-action"),c.classList.toggle("oq-helper-status-item--button",u),c.classList.toggle("oq-helper-status-item--attention",f)}return!0}function cg(){const e=typeof window<"u"?window.__OQ_DEV_CONTROLS__:null;return!e||typeof e.render!="function"?"":e.render()}function Xi(){const e=cg();return e?n.devPanelOpen?`
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
      `:""}function ug(){const e=n.nativeOpen?"native":"app",t=xl();return n.interfacePanelOpen?`
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
              ${n.overviewTheme==="light"?"Donkere modus":"Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${An()}
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
            ${Bc()}
            <button
              class="oq-helper-hub-toggle${t?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${ma("more-horizontal","oq-helper-hub-toggle-icon")}${t?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function dg(){if(!n.root)return;if(n.interfacePanelOpen){n.root.querySelector(".oq-debug-recording-header-status")?.remove(),Vr();return}const e=n.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;const t=e.querySelector(".oq-debug-recording-header-status"),o=Bc();if(!o){t?.remove();return}if(t){t.outerHTML=o;return}e.insertAdjacentHTML("afterbegin",o)}function pg(){const e=n.nativeOpen?"native":"app",t=n.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",o=n.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(n.controlError)}</p>`:"";return`
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
          ${o}
        </div>
      </div>
    `}function gg(){const e=n.authStatus||{},t=e.enabled===!0,o=e.setup_window_active===!0,r=t||o,a=t?String(e.username||"").trim():"",i=n.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(n.authNotice)}</span></div>`:"",l=n.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(n.authError)}</div>`:"",d=r?`
        ${r?`<p class="oq-helper-modal-intro">${t?"Pas hier je login aan.":"Vul hier je nieuwe login in."}</p>`:""}
        <div class="oq-helper-modal-auth-stack">
          ${t?`
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${s(n.authDraftCurrentPassword)}"
                  ${n.authBusy?"disabled":""}
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
              value="${s(n.authDraftUsername)}"
              ${n.authBusy?"disabled":""}
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
              value="${s(n.authDraftNewPassword)}"
              ${n.authBusy?"disabled":""}
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
              value="${s(n.authDraftConfirmPassword)}"
              ${n.authBusy?"disabled":""}
            >
          </label>
        </div>
      `:`
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${s(tg())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(ng())}</p>
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${Zi("Beveiligingsstatus",Ua(),za())}
            ${Zi("Gebruiker",t?a||"Geen naam":"Geen login",t?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${d}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${n.authBusy?"disabled":""}>Gereed</button>
            ${t?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${n.authBusy?"disabled":""}>Uitzetten</button>`:""}
            ${r?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${n.authBusy?"disabled":""}>${t?"Opslaan":"Login opslaan"}</button>`:""}
          </div>
        </section>
      </div>
    `}function mg(){if(!n.updateModalOpen)return"";const e=ae(),t=n.entities.firmwareUpdateChannel||null,{current:o,latest:r}=Wa(),a=He(),i=Zt(),l=un(),c=Gp(),d=tt(),u=xa(),g=Fp(),b=u?"Firmware-update afgerond":d||i?"Firmware-update bezig":a?"Controleren op firmware-update":xp(),f=t?Array.isArray(t.option)?t.option:Array.isArray(t.options)?t.options:[]:[],w=Ma(),p=Pa(),h=!!(w&&!u),y=!!(p&&!u);return`
      <div class="oq-helper-modal-backdrop${a||i||d?" is-busy":""}${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="firmware-update">
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
          ${d?`
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${s(d.phaseLabel)}</strong>
                <span>${s(`${d.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,d.percent))}%"></span>
              </div>
            </div>
          `:""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${s(Xn())}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige versie</span>
              <strong class="oq-helper-modal-value">${s(o)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Beschikbare versie</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Kanaal</span>
              <strong class="oq-helper-modal-value">${s(ht())}</strong>
            </div>
          </div>
          ${f.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${f.map(S=>`
                  <option value="${s(S)}" ${String(E("firmwareUpdateChannel")||"")===S?"selected":""}>${s(S)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||d?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${u?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||d||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${g?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(g)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${Nl()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||d?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${Qp(h,w,y,p)}
        </section>
      </div>
    `}function hg(){if(n.systemModal==="login")return gg();if(n.systemModal==="api-security")return sg();if(n.systemModal==="connectivity"){const e=lg();return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              ${e.map(([t,o])=>`
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${s(t)}</span>
                  <strong class="oq-helper-modal-value">${s(o)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `}if(n.systemModal==="settings-backup-restore")return Vb();if(n.systemModal==="settings-backup-import")return Bb();if(n.systemModal==="history-storage")return Lb();if(String(n.systemModal||"").startsWith("service-task-"))return $b();if(n.systemModal==="settings-backup-success"){const e=n.controlNotice||"Backup hersteld.";return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
      `}if(n.systemModal==="restart-confirm"){const e=n.busyAction==="restartAction";return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
      `}if(n.systemModal==="silent-settings")return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              ${Ub()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;if(n.systemModal==="webserver-logs")return wf();if(n.systemModal==="debug-recording")return _f();if(n.systemModal==="openquatt-pause"){const e=A("openquattEnabled"),t=n.busyAction==="openquatt-regulation",o=v("openquattResumeAt"),r=n.loadingEntities||n.entitySyncInFlight,a=o||!r,i=Ga(),l=Qa(E("openquattResumeAt")),c=Bl();return`
        <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
            ${a?o?`
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
      `}return""}function E(e){if(Object.prototype.hasOwnProperty.call(n.drafts,e))return n.drafts[e];const t=n.entities[e];return t?t.value??t.state??"":""}function nt(e){const t=n.entities[e]||{};return{min:Number(t.min_value??0),max:Number(t.max_value??100),step:Number(t.step??1),uom:t.uom||""}}function Le(e){return Object.prototype.hasOwnProperty.call(n.inputDrafts,e)?n.inputDrafts[e]:E(e)}function et(e){if(typeof e=="number")return e;const t=String(e??"").trim().replace(",",".");return!t||t==="-"||t==="."||t==="-."?Number.NaN:Number(t)}function dn(e){const t=String(e||"").trim();if(!t)return"";const o=t.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!o)return"";const r=Number(o[1]),a=Number(o[2]),i=Number(o[3]||"0");return[r,a,i].some(l=>Number.isNaN(l))||r<0||r>23||a<0||a>59||i<0||i>59?"":`${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function _r(e){const t=dn(e);return t?t.slice(0,5):""}function ot(e){const t=String(e||"").trim();if(!t)return"";const o=t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!o)return"";const r=Number(o[1]),a=Number(o[2]),i=Number(o[3]),l=Number(o[4]),c=Number(o[5]),d=Number(o[6]||"0");return[r,a,i,l,c,d].some(u=>Number.isNaN(u))||r<2e3||a<1||a>12||i<1||i>31||l<0||l>23||c<0||c>59||d<0||d>59?"":`${String(r).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(d).padStart(2,"0")}`}function jr(e){const t=ot(e);return!t||t===xn?"":t.slice(0,16).replace(" ","T")}function Il(e){const t=ot(e);if(!t||t===xn)return null;const o=t.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!o)return null;const r=Number(o[1]),a=Number(o[2]),i=Number(o[3]),l=Number(o[4]),c=Number(o[5]),d=Number(o[6]),u=new Date(r,a-1,i,l,c,d,0);return Number.isNaN(u.getTime())?null:u}function Ga(e=E("openquattResumeAt")){return!!Il(e)}function Qa(e,t=!1){const o=Il(e);return o?new Intl.DateTimeFormat("nl-NL",t?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(o):""}function es(e){const t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${t}-${o}-${r}T${a}:${i}`}function fg(e){const t=new Date(e.getTime());t.setSeconds(0,0);const o=t.getMinutes(),r=o%15;return r!==0&&t.setMinutes(o+(15-r)),t}function Wl(e){const t=new Date;if(e==="2h"||e==="8h"){const o=e==="2h"?2:8,r=fg(new Date(t.getTime()+o*3600*1e3));return es(r)}if(e==="tomorrow-morning"){const o=new Date(t);return o.setDate(o.getDate()+1),o.setHours(7,0,0,0),es(o)}return""}function Bl(){const e=jr(n.pauseResumeDraft);if(e)return e;const t=jr(E("openquattResumeAt"));return t||Wl("2h")}function pn(){return[...new Set(["setupComplete",...pl])]}const Ya=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"],bg=["trendHistoryEnabled","trendHistoryFlashEnabled"],vg=["lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"];function Pn(){return[...new Set(Ya)]}function yg(){return{available:"Alleen live",oldest:"Geen data",newest:"Geen data",lastFlush:"Geen data",sizeKb:0,writes:0,nowMs:Number.NaN}}function wg(e){const t=yg();return String(e||"").split(/\r?\n/).forEach(o=>{if(o.startsWith("@now|")){t.nowMs=Number(o.slice(5));return}if(!o.startsWith("@flash|"))return;const r=o.split("|");t.available=r[1]||t.available,t.oldest=r[2]||t.oldest,t.newest=r[3]||t.newest,t.lastFlush=r[4]||t.lastFlush,t.sizeKb=Number(r[5])||0,t.writes=Number(r[6])||0}),t}async function Vl(e={}){if(!v("trendHistoryEnabled")&&!fn()){const r=!!(n.trendHistoryMetadataSignature||n.trendHistoryMetadataError);return n.trendHistoryMetadata={},n.trendHistoryMetadataError="",n.trendHistoryMetadataSignature="",n.trendHistoryMetadataLastFetchAt=0,r}const t=e.force===!0,o=Date.now();if(!t&&n.trendHistoryMetadataFetchPromise)return n.trendHistoryMetadataFetchPromise;if(!t&&(n.trendHistoryMetadataSignature||n.trendHistoryMetadataError)&&o-Number(n.trendHistoryMetadataLastFetchAt||0)<ua)return!1;n.trendHistoryMetadataFetchPromise=(async()=>{const r=await fetch(`${_e()}/trends/history?meta=1`,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.text(),i=wg(a),l=`${a.length}|${a.slice(0,120)}|${a.slice(-120)}`,c=l!==n.trendHistoryMetadataSignature||n.trendHistoryMetadataError!=="";return n.trendHistoryMetadata=i,n.trendHistoryMetadataError="",n.trendHistoryMetadataSignature=l,n.trendHistoryMetadataLastFetchAt=Date.now(),c})();try{return await n.trendHistoryMetadataFetchPromise}catch(r){const a=`Trendhistorie metadata kon niet worden geladen. ${r.message}`,i=n.trendHistoryMetadataError!==a;return n.trendHistoryMetadata={},n.trendHistoryMetadataError=a,n.trendHistoryMetadataSignature="",n.trendHistoryMetadataLastFetchAt=Date.now(),i}finally{n.trendHistoryMetadataFetchPromise=null}}async function er(e={}){await D(Pn(),"all",{concurrency:Qn,forceMissing:e.forceMissing===!0}),await Promise.all([Vl({force:e.forceTrendHistory===!0}),ft({force:e.forceEnergyHistory===!0,metaOnly:!0})])}function Hn(e=[250,1e3,2500],t={}){e.forEach(o=>{window.setTimeout(()=>{n.nativeOpen||n.appView!=="settings"||er({forceMissing:o===0,forceTrendHistory:t.forceTrendHistory===!0,forceEnergyHistory:t.forceEnergyHistory===!0}).finally(()=>{n.appView==="settings"&&n.mounted&&!n.nativeOpen&&m()})},o)})}const Sg="@schema|openquatt.energy_history_import.v1",qg=850,Oo=[{id:"days",label:"Alleen dagtotalen",fileLabel:"daily"},{id:"days_and_hours",label:"Dagtotalen + uurdetail",fileLabel:"daily-hourly"},{id:"hours",label:"Alleen uurdetail",fileLabel:"hourly"}],kg={forbidden:"Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},Me={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","total_hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","total_hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh","energy_hp_cooling","hpCooling","hp_cooling_wh","total_hp_cooling_wh","totalHpCooling"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","total_boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function tr(e){const t=String(e||"").trim();return Oo.some(o=>o.id===t)?t:"days_and_hours"}function _l(e){const t=tr(e);return Oo.find(o=>o.id===t)||Oo[1]}function Cg(e){const t=_l(e),o=new Date().toISOString().slice(0,10);return`openquatt-energy-history-${t.fileLabel}-${o}.json`}function Tg(e,t){const o=URL.createObjectURL(e),r=document.createElement("a");r.href=o,r.download=t,r.style.display="none",document.body.appendChild(r),r.click(),window.setTimeout(()=>{URL.revokeObjectURL(o),r.remove()},0)}async function Eg(){if(n.energyHistoryExportBusy)return;const e=tr(n.energyHistoryExportMode),t=_l(e);if(n.energyHistoryExportMode=e,n.energyHistoryExportBusy=!0,n.energyHistoryExportError="",n.energyHistoryExportNotice="",m(),fn()){n.energyHistoryExportBusy=!1,n.energyHistoryExportNotice=`Preview: ${t.label.toLowerCase()} zou als JSON worden gedownload.`,m();return}try{const o=await fetch(`${_e()}/energy/history/export?mode=${encodeURIComponent(e)}`,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const r=await o.blob();Tg(r,Cg(e)),n.energyHistoryExportNotice=`${t.label} ge\xEBxporteerd.`}catch(o){n.energyHistoryExportError=`Exporteren mislukt. ${o.message}`}finally{n.energyHistoryExportBusy=!1,m()}}function jl(e=!1){const t=e?n.energyHistoryImportNotice:"";n.energyHistoryImportFileName="",n.energyHistoryImportSource="",n.energyHistoryImportRange="",n.energyHistoryImportRecords=[],n.energyHistoryImportHourRecords=[],n.energyHistoryImportDuplicateCount=0,n.energyHistoryImportSkippedCount=0,n.energyHistoryImportInvalidCount=0,n.energyHistoryImportUnsupportedCount=0,n.energyHistoryImportBusy=!1,n.energyHistoryImportProgressPercent=0,n.energyHistoryImportError="",n.energyHistoryImportNotice=t}function Kl(e){if(e==null||e==="")return 0;const t=String(e).trim();let o=0,r=0,a=0;const i=t.match(/^(\d{4})(\d{2})(\d{2})$/),l=Ul(t),c=t.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(i)o=Number(i[1]),r=Number(i[2]),a=Number(i[3]);else{if(l)return l.dateKey;if(c)o=Number(c[1]),r=Number(c[2]),a=Number(c[3]);else{const u=new Date(t);if(Number.isNaN(u.getTime()))return 0;o=u.getFullYear(),r=u.getMonth()+1,a=u.getDate()}}if(o<2020||o>2099||r<1||r>12||a<1||a>31)return 0;const d=new Date(Date.UTC(o,r-1,a));return d.getUTCFullYear()!==o||d.getUTCMonth()!==r-1||d.getUTCDate()!==a?0:o*1e4+r*100+a}function ts(e){const t=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(t)?`${t.slice(6,8)}-${t.slice(4,6)}-${t.slice(0,4)}`:""}function nr(e){return e.timestamp??e.time??e.datetime??e.date_time??e.dateTime}function Ul(e){if(e==null||e==="")return null;const t=String(e).trim(),o=t.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i);if(!o)return null;const r=/(?:Z|[+-]\d{2}:?\d{2})$/i.test(t),a=Number(o[1]),i=Number(o[2]),l=Number(o[3]),c=Number(o[4]),d=Number(o[5]||"0"),u=Number(o[6]||"0");if([a,i,l,c,d,u].some(h=>Number.isNaN(h)))return null;const g=r?new Date(t):new Date(a,i-1,l,c,d,u,0);if(Number.isNaN(g.getTime()))return null;const b=g.getFullYear(),f=g.getMonth()+1,w=g.getDate(),p=g.getHours();return b<2020||b>2099||f<1||f>12||w<1||w>31?null:{dateKey:b*1e4+f*100+w,hour:p}}function zl(e){if(e==null||e==="")return null;const t=Number(String(e).trim().replace(",","."));return!Number.isFinite(t)||t<0||t>=4294967295?null:Math.round(t)}function ut(e,t,o=null){for(const r of t){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const a=zl(e[r]);if(a!==null)return a}return o}function bo(e,t){return ut(e,t)!==null}function Gl(e){const t=Kl(e.date_key??e.dateKey??e.date??e.from??nr(e));if(!t)return null;const o=ut(e,Me.electricalInput),r=ut(e,Me.heatpumpHeatOutput);if(o===null||r===null)return null;const a=ut(e,Me.heatingInput,o),i=ut(e,Me.coolingInput,0),l=ut(e,Me.heatpumpCoolingOutput,0),c=ut(e,Me.boilerHeatOutput,0),d=ut(e,Me.systemHeatOutput,r+c),u=bo(e,Me.heatingInput)||bo(e,Me.coolingInput)||bo(e,Me.heatpumpCoolingOutput)||bo(e,Me.systemHeatOutput);return[a,i,l,c,d].some(g=>g===null)?null:{dateKey:t,electricalInputWh:o,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:r,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:c,systemHeatOutputWh:d,hasFullImportFields:u}}function $g(e){const t=zl(e.hour??e.hour_of_day??e.hourOfDay);if(t!==null&&t>=0&&t<=23)return t;const o=nr(e);if(o){const r=String(o).trim(),a=Ul(r);if(a)return a.hour;const i=new Date(r);if(!Number.isNaN(i.getTime()))return i.getHours();const l=r.match(/^(\d{1,2})(?::\d{2})/);if(l){const c=Number(l[1]);if(c>=0&&c<=23)return c}}return-1}function Ag(e){const t=Gl(e),o=$g(e);return!t||o<0||o>23?null:{...t,hour:o}}function Hg(e){const t=[];let o=[],r="",a=!1;const i=()=>{o.push(r),r=""},l=()=>{i(),o.some(d=>String(d).trim()!=="")&&t.push(o),o=[]};for(let d=0;d<e.length;d+=1){const u=e[d];a?u==='"'&&e[d+1]==='"'?(r+='"',d+=1):u==='"'?a=!1:r+=u:u==='"'?a=!0:u===","?i():u===`
`?l():u!=="\r"&&(r+=u)}if((r||o.length)&&l(),!t.length)return[];const c=t.shift().map(d=>String(d||"").trim());return t.map(d=>{const u={};return c.forEach((g,b)=>{g&&(u[g]=d[b]??"")}),u})}function vo(e){return!e||typeof e!="object"||Array.isArray(e)||!e.summary||typeof e.summary!="object"||Array.isArray(e.summary)?e:{...e.summary,...e}}function Mg(e){return Object.prototype.hasOwnProperty.call(e,"hour")||Object.prototype.hasOwnProperty.call(e,"hour_of_day")||Object.prototype.hasOwnProperty.call(e,"hourOfDay")}function Pg(e){return e.some(t=>nr(t)!==void 0)}function Ng(e){const t=new Set;for(const o of e){const r=Kl(o.date_key??o.dateKey??o.date??o.from??nr(o));if(r){if(t.has(r))return!0;t.add(r)}}return!1}function Ql(e){return e.some(Mg)||Pg(e)&&Ng(e)}function Rg(e){const t=[],o=[];if(Array.isArray(e)){const l=e.map(vo);return Ql(l)?o.push(...l):t.push(...l),{dailyRows:t,hourlyRows:o,source:"JSON"}}const r=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return t.push(...a.map(vo)),o.push(...i.map(vo)),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(c=>{o.push(vo({...c,date:c.date??l.date}))})}),{dailyRows:t,hourlyRows:o,source:r}}function Lg(e,t){const o=String(t||"").trim();if(!o)throw new Error("Bestand is leeg.");let r=[],a=[],i="";if(o[0]==="{"||o[0]==="["){const p=Rg(JSON.parse(o));r=p.dailyRows,a=p.hourlyRows,i=p.source}else{const p=Hg(o);Ql(p)||String(e||"").toLowerCase().includes("hour")?a=p:r=p,i="CSV"}const l=new Map,c=new Map;let d=0,u=0;r.forEach(p=>{const h=Gl(p);if(!h){u+=1;return}l.has(h.dateKey)&&(d+=1),l.set(h.dateKey,h)}),a.forEach(p=>{const h=Ag(p);if(!h){u+=1;return}const y=`${h.dateKey}:${h.hour}`;c.has(y)&&(d+=1),c.set(y,h)});const g=[...l.values()].sort((p,h)=>p.dateKey-h.dateKey),b=[...c.values()].sort((p,h)=>p.dateKey-h.dateKey||p.hour-h.hour);if(!g.length&&!b.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");const f=[...g.map(p=>p.dateKey),...b.map(p=>p.dateKey)].sort((p,h)=>p-h),w=f.length?`${ts(f[0])} t/m ${ts(f[f.length-1])}`:"";return{records:g,hourRecords:b,source:i,range:w,duplicates:d,invalid:u}}function Og(e){return e.hasFullImportFields?["day",e.dateKey,e.electricalInputWh,e.heatingInputWh,e.coolingInputWh,e.heatpumpHeatOutputWh,e.heatpumpCoolingOutputWh,e.boilerHeatOutputWh,e.systemHeatOutputWh].join("|"):["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function Fg(e){const t=new Map;return e.forEach(o=>{t.has(o.dateKey)||t.set(o.dateKey,new Map),t.get(o.dateKey).set(o.hour,o)}),[...t.entries()].sort((o,r)=>o[0]-r[0]).map(([o,r])=>{let a=0;const i=[],l=[...r.values()].some(c=>c.hasFullImportFields);for(let c=0;c<24;c+=1){const d=r.get(c);d&&(a|=1<<c),l?i.push(d?.electricalInputWh??0,d?.heatingInputWh??0,d?.coolingInputWh??0,d?.heatpumpHeatOutputWh??0,d?.heatpumpCoolingOutputWh??0,d?.boilerHeatOutputWh??0,d?.systemHeatOutputWh??0):i.push(d?.electricalInputWh??0,d?.heatpumpHeatOutputWh??0,d?.boilerHeatOutputWh??0)}return["hourday",o,a,...i].join("|")})}function Yl(e){const t=new URLSearchParams;return t.set("records",[Sg,...e].join(`
`)),n.energyHistoryCsrfToken&&t.set("csrf_token",n.energyHistoryCsrfToken),t}function xg(e){const t=[];let o=[];return e.forEach(r=>{const a=[...o,r];o.length&&String(Yl(a)).length>qg?(t.push(o),o=[r]):o=a}),o.length&&t.push(o),t}function Dg(e){const t=[];e.written>0&&t.push(`${e.written} dagrecords`),e.hourWritten>0&&t.push(`${e.hourWritten} uurdagen`);const o=t.length?`${t.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",r=[];return e.duplicates>0&&r.push(`${e.duplicates} al aanwezig`),e.skipped>0&&r.push(`${e.skipped} overgeslagen`),e.invalid>0&&r.push(`${e.invalid} ongeldig`),e.unsupported>0&&r.push(`${e.unsupported} onbekend`),r.length?`${o} (${r.join(", ")}.)`:o}async function Ig(e){const t=await fetch(`${_e()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:Yl(e)}),o=await t.text();let r={};try{r=o?JSON.parse(o):{}}catch{r={}}if(!t.ok||r.ok===!1){const a=r.error?String(r.error):"";throw new Error(kg[a]||a||`HTTP ${t.status}`)}return r}function Jl(e){const t=String(e||"").split(/\r?\n/).find(o=>o.startsWith("@csrf|"));return t?t.slice(6):""}async function Wg(){if(fn())return;const e=await fetch(`${_e()}/energy/history?meta=1`,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=Jl(await e.text());if(!t)throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");n.energyHistoryCsrfToken=t}function Bg(e,t){n.energyHistoryImportProgressPercent=t>0?Math.min(99,Math.max(1,Math.round(e/t*100))):0,m()}async function Vg(e){if(jl(),!e){m();return}n.energyHistoryImportFileName=e.name||"exportbestand";try{const t=Lg(e.name||"",await e.text());n.energyHistoryImportRecords=t.records,n.energyHistoryImportHourRecords=t.hourRecords,n.energyHistoryImportSource=t.source,n.energyHistoryImportRange=t.range,n.energyHistoryImportDuplicateCount=t.duplicates,n.energyHistoryImportInvalidCount=t.invalid}catch(t){n.energyHistoryImportError=`Bestand kon niet worden gelezen. ${t.message}`}m()}function _g(){const e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{const t=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),Vg(t)},{once:!0}),document.body.appendChild(e),e.click()}async function jg(){if(n.energyHistoryImportBusy)return;const e=[...n.energyHistoryImportRecords.map(Og),...Fg(n.energyHistoryImportHourRecords)];if(!e.length){n.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",m();return}if(n.energyHistoryImportBusy=!0,n.energyHistoryImportError="",n.energyHistoryImportNotice="",n.energyHistoryImportProgressPercent=1,m(),fn()){const r=new Set(n.energyHistoryImportHourRecords.map(a=>a.dateKey)).size;n.energyHistoryImportBusy=!1,n.energyHistoryImportProgressPercent=0,n.energyHistoryImportNotice=`Preview: ${n.energyHistoryImportRecords.length} dagrecords en ${r} uurdagen zouden worden ge\xEFmporteerd.`,m();return}const t={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0};let o=0;try{await Wg();const r=xg(e);for(const a of r){const i=await Ig(a);t.written+=Number(i.written||0),t.hourWritten+=Number(i.hour_written||0),t.duplicates+=Number(i.duplicates||0),t.skipped+=Number(i.skipped||0),t.invalid+=Number(i.invalid||0),t.unsupported+=Number(i.unsupported||0),o+=a.length,Bg(o,e.length)}n.energyHistoryImportProgressPercent=100,n.energyHistoryImportNotice=Dg(t),n.energyHistoryImportError="",n.energyHistoryRaw="",n.energyHistorySignature="",n.energyHistoryLastFetchAt=0,await er({forceMissing:!0,forceEnergyHistory:!0})}catch(r){n.energyHistoryImportError=`Importeren mislukt. ${r.message}`}finally{n.energyHistoryImportBusy=!1,n.energyHistoryImportProgressPercent=0,m()}}function gn(){return n.appView==="settings"&&n.settingsGroup==="system"}function ns(){return gn()||n.appView==="settings"&&n.systemModal==="history-storage"}function Kg(){const e=typeof window<"u"?Number(window.__OQ_DEV_LOAD_DELAY_MS||0):0;return Number.isFinite(e)&&e>0?e:0}const Zl=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","silentModeOverride","totalHeat","totalCoolingPower"],Ug=["strategy","controlModeLabel","hpGeneration"],zg=["totalPower","flowSelected"],Gg=["totalHeat","totalCoolingPower"],Qg=2e3,Yg=250,os={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel"]},Jg=5e3,Zg=250,Xg={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Ze,...Ao,...Fn,...cl,...Ho,...Mo,"maxWater",...pa],service:[...ha,...fa,...Ho,...Mo,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...Pt,...On,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...ll],integrations:[...ol,...al,...rl,...il,...ba,...sl,...nl],system:["setupComplete",...Nt,"firmwareUpdateChannel","projectVersionText","releaseChannelText",...Ya,"webServerLogHistoryEnabled","debugLevel"]};function Ja(e=n.settingsGroup){const t=Ve.has(e)?e:qe[0].id;return[...new Set(["setupComplete","strategy",...Qe,...Xg[t]||[]])]}function Xl(){const e=Ve.has(n.settingsGroup)?n.settingsGroup:qe[0].id;return[...new Set(os[e]||os.installation)]}const em=1200,tm=1800,nm=0,om=3500;function Kr(){return["setupComplete","strategy",...Qe]}function rm(){const e=new Set;return dl.forEach(t=>{(t.categories||[]).forEach(o=>{(o.groups||[]).forEach(r=>{(r.rows||[]).forEach(a=>{const i=Array.isArray(a)?a[1]:"";i&&e.add(i)})})})}),[...e]}function am(e=n.currentStep){const t=["setupComplete","strategy",...Qe];return e==="generation"?[...new Set([...t,"installationTopology",...ko,"hpGeneration"])]:e==="flow-source"?[...new Set([...t,"hpGeneration",...Xe])]:e==="thermostat-source"?[...new Set([...t,...Ln])]:e==="boiler"?[...new Set([...t,"boilerCvAssistEnabled","boilerRatedHeatPower"])]:e==="strategy"?[...new Set([...t,"strategy"])]:e==="heating"?[...new Set([...t,...Pt,...On,"dayMax","silentMax"])]:e==="flow"?[...new Set([...t,...Ze,...Ao])]:e==="water"?[...new Set([...t,"maxWater"])]:e==="silent"?[...new Set([...t,...Fn])]:e==="confirm"?[...new Set([...t,"installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Xe,...Ln,...Ze,...Ao,...Pt,...On,"maxWater",...Fn])]:t}async function Ar(e=n.currentStep){const t=am(e);try{await D(t,"all",{concurrency:Qn}),n.quickStartModalOpen&&n.currentStep===e&&!n.nativeOpen&&m()}catch{}}function Vn(e,t={}){const o=t.forceFast===!0,r=t.includeBulk===!0;return e==="energy"||e==="results"?[...new Set([...Kr(),...e==="energy"?Zl:[],...rm(),...e==="results"?vg:[]])]:[...new Set([...Kr(),...o||!r?ul:ya,...e==="diagnosis"?bg:[]])]}function Za(e=n.appView){return e==="diagnosis"||e==="results"||e==="settings"&&gn()?nm:tm}function ec(e=Za()){n.nativeOpen||(n.supplementaryPrimeTimer&&window.clearTimeout(n.supplementaryPrimeTimer),n.supplementaryPrimeTimer=window.setTimeout(()=>{n.supplementaryPrimeTimer=null,Km()},e))}function im(e={}){const t=n.pendingEntitySyncOptions||{},o={...t,...e};t.forceBulk||e.forceBulk?(o.forceBulk=!0,o.forceFast=!1):(t.forceFast||e.forceFast)&&(o.forceFast=!0),n.pendingEntitySyncOptions=o}function Xa(e){const t=String(E(e)??"").trim().toLowerCase();return t!==""&&t!=="unknown"&&t!=="unavailable"&&t!=="nan"}function rs(e){return Xa(e)&&Number.isFinite(et(E(e)))}function ei(){return n.appView==="overview"||n.appView==="diagnosis"||n.appView==="energy"}function sm(){return Fd.filter(e=>{const t=n.entities[e];return t?!String(t.uom??t.unit_of_measurement??"").trim():!L[e]?.optional})}async function tc(){if(n.nativeOpen||!ei()||n.overviewMetadataHydrated||n.overviewMetadataHydrating)return!1;const e=sm();if(!e.length)return n.overviewMetadataHydrated=!0,!1;n.overviewMetadataHydrating=!0;try{return await D(e,"all",{concurrency:Mt}),n.overviewMetadataHydrated=!0,!0}catch{return!1}finally{n.overviewMetadataHydrating=!1,n.mounted&&!n.nativeOpen&&m()}}function as(){return ei()?Ug.every(Xa)&&zg.every(rs)&&Gg.some(rs):!0}function lm(){return n.appView==="settings"}function is(){return lm()?Xl().every(e=>L[e]?.optional&&!n.entities[e]?!0:Xa(e)):!0}async function cm(){if(as())return;const e=Date.now()+Qg;for(;!n.nativeOpen&&!as()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,Yg));try{await D(Zl,"state")}catch{return}}}async function um(){if(is())return;const e=Date.now()+Jg;for(;!n.nativeOpen&&!is()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,Zg));try{await D(Xl(),"all")}catch{return}}}function j(e,t=E(e)){if(t===""||t===null||Number.isNaN(Number(t)))return"\u2014";const o=nt(e),r=o.step<1?Math.min(4,Math.max(1,String(o.step).split(".")[1]?.length||1)):0;return`${Number(t).toFixed(r)}${o.uom?` ${o.uom}`:""}`}function Se(e,t){const o=nt(e),r=et(t);if(Number.isNaN(r)){const d=et(n.entities[e]?.value??n.entities[e]?.state??"");return Number.isNaN(d)?o.min:d}const a=Math.min(o.max,Math.max(o.min,r)),i=Math.round((a-o.min)/o.step),l=o.min+i*o.step,c=o.step<1?Math.min(4,Math.max(1,String(o.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(c))}function nc(){const e=de[Math.floor(de.length/2-1)],t=de[Math.floor(de.length/2)];if(!e||!t||!v("curveFallbackSupply"))return null;const o=Se(e.key,E(e.key)),r=Se(t.key,E(t.key)),a=(o+r)/2,i=Se("curveFallbackSupply",a);return{value:i,label:j("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${t.label}).`,isCurrent:Se("curveFallbackSupply",E("curveFallbackSupply"))===i}}const dm=8e3,oc=3e3,ss="/openquatt/entities",pm=900,ls="/openquatt/service/status";function rc(){return n.deviceReconnectMode||n.busyAction==="restartAction"||n.updateInstallBusy||n.updateInstallPhaseHint?oc:dm}function ac(e){const t=String(e||"").toLowerCase();return t.includes("failed to fetch")||t.includes("load failed")||t.includes("networkerror")||t.includes("network request failed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("err_connection")||t.includes("timeout")}const gm=300*1e3;function mm(){if(n.optionalMissingEntities)for(const e of Object.keys(n.optionalMissingEntities))delete n.optionalMissingEntities[e]}function cs(){const e=Date.now();n.lastEntitySyncAt=e,n.lastEntitySyncSuccessAt=e,n.entitySyncFailureCount=0,!!n.deviceReconnectMode&&typeof Ji=="function"&&Ji()&&(n.lastFastEntitySyncAt=0,n.lastBulkEntitySyncAt=0,n.lastStaticEntitySyncAt=0,n.trendHistoryRaw="",n.trendHistoryError="",n.trendHistorySignature="",n.trendHistoryNowMs=Number.NaN,n.trendHistoryLastFetchAt=0,typeof Cs=="function"?Cs():(Ye(),rr(),n.webServerLogEnabled=null,n.webServerLogConnected=!1),mm())}function ic(e){if(!ac(e)){n.entitySyncFailureCount=0,Pl();return}n.entitySyncFailureCount=Number(n.entitySyncFailureCount||0)+1,n.deviceReconnectLastError=String(e||""),(n.deviceReconnectMode||n.busyAction==="restartAction"||n.updateInstallBusy||n.updateInstallPhaseHint||n.entitySyncFailureCount>=2)&&Va(n.updateInstallBusy||n.updateInstallPhaseHint?"ota":n.busyAction==="restartAction"?"restart":"reconnect",e)}function hm(e=Date.now(),t={}){if(t.forceProbe===!0||n.deviceReconnectMode||n.busyAction==="restartAction"||n.updateInstallBusy||n.updateInstallPhaseHint||Number(n.entitySyncFailureCount||0)>0)return!0;const o=Number(n.lastEntitySyncSuccessAt||n.lastEntitySyncAt||n.lastEntityResponseAt||0);if(!o)return!0;const r=document.hidden?wa:Vd;return e-o>=r}async function fm(){const e=L.status||L.setupComplete;if(!e)return{ok:!0,message:""};const t=n.deviceReconnectMode?oc:Bd,o=z(e.domain,e.name);if(typeof AbortController=="function"){const r=new AbortController,a=window.setTimeout(()=>r.abort(),t);try{const i=await fetch(o,{cache:"no-store",signal:r.signal});return n.lastEntityResponseAt=Date.now(),{ok:i.ok||i.status===404,message:i.ok||i.status===404?"":`${e.name} HTTP ${i.status}`}}catch(i){return{ok:!1,message:r.signal.aborted?`${e.name} request timed out after ${t}ms`:i.message||String(i)}}finally{window.clearTimeout(a)}}try{const r=await fetch(o,{cache:"no-store"});return n.lastEntityResponseAt=Date.now(),{ok:r.ok||r.status===404,message:r.ok||r.status===404?"":`${e.name} HTTP ${r.status}`}}catch(r){return{ok:!1,message:r.message||String(r)}}}function bm(e,t=Date.now()){const o=n.optionalMissingEntities?.[e];return!L[e]?.optional||!o?!1:t-Number(o)<gm}function vm(e,t=Date.now()){n.optionalMissingEntities&&(n.optionalMissingEntities[e]=t)}function ym(e){const t=L[e];return t?`${e}	${t.domain}	${t.name}`:""}function us(e,t){const o=new URLSearchParams;return o.set("detail",t==="all"?"all":"state"),o.set("entities",e.join(`
`)),o.toString()}function sc(e,t){const o=[];let r=[],a=[],i="";return e.forEach(l=>{const c=ym(l);if(!c)return;const d=[...a,c],u=us(d,t);if(a.length&&u.length>pm){o.push({keys:r,body:i}),r=[l],a=[c],i=us(a,t);return}r=[...r,l],a=d,i=u}),a.length&&o.push({keys:r,body:i}),o}async function wm(e){const t=rc(),o={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body};if(typeof AbortController=="function"){const a=new AbortController,i=window.setTimeout(()=>a.abort(),t);try{const l=await fetch(ss,{...o,signal:a.signal});if(!l.ok)throw new Error(`bulk entities HTTP ${l.status}`);return l.json()}catch(l){throw a.signal.aborted?new Error(`bulk entities request timed out after ${t}ms`):l}finally{window.clearTimeout(i)}}const r=await fetch(ss,o);if(!r.ok)throw new Error(`bulk entities HTTP ${r.status}`);return r.json()}async function Sm(){const e=rc(),t={cache:"no-store",headers:{"Cache-Control":"no-store"}};if(typeof AbortController=="function"){const r=new AbortController,a=window.setTimeout(()=>r.abort(),e);try{const i=await fetch(ls,{...t,signal:r.signal});if(!i.ok)throw new Error(`service status HTTP ${i.status}`);return i.json()}catch(i){throw r.signal.aborted?new Error(`service status request timed out after ${e}ms`):i}finally{window.clearTimeout(a)}}const o=await fetch(ls,t);if(!o.ok)throw new Error(`service status HTTP ${o.status}`);return o.json()}function qm(e={}){const t=e?.entities&&typeof e.entities=="object"?e.entities:{};Object.entries(t).forEach(([o,r])=>{qo.has(o)&&(n.optionalMissingEntities&&delete n.optionalMissingEntities[o],n.entities[o]=lc(o,n.entities[o],r))})}async function km(e){if(!e.length)return{ok:!0,message:""};try{const t=await Sm();return qm(t),n.lastEntityResponseAt=Date.now(),{ok:!0,message:""}}catch(t){return{ok:!1,message:t.message||String(t)}}}async function D(e,t="state",o={}){const r=Date.now(),a=o.forceMissing===!0,i=e.filter(y=>a||qo.has(y)||!bm(y,r));if(!i.length)return;const l=i.filter(y=>qo.has(y)),c=i.filter(y=>!qo.has(y)),u=(await km(l)).ok?c:[...c,...l];if(!u.length){gs(),ea(jn()),n.busyAction||(cs(),n.controlError="");return}const g=Number(o.concurrency),b=Number.isFinite(g)&&g>0?Math.floor(g):Mt,f=sc(u,t),w=Math.max(1,Math.min(b,Mt)),p=[];for(let y=0;y<f.length;y+=w){const S=f.slice(y,y+w),q=await Promise.allSettled(S.map(async C=>({chunk:C,payload:await wm(C)})));p.push(...q)}p.some(y=>y.status==="fulfilled")&&(n.lastEntityResponseAt=Date.now());let h="";p.forEach(y=>{if(y.status!=="fulfilled"){const H=y.reason.message||String(y.reason);h||(h=H);return}const{chunk:S,payload:q}=y.value,C=q?.entities&&typeof q.entities=="object"?q.entities:{},k=new Set(Array.isArray(q?.missing)?q.missing:[]);S.keys.forEach(H=>{if(Object.prototype.hasOwnProperty.call(C,H)){n.optionalMissingEntities&&delete n.optionalMissingEntities[H],n.entities[H]=lc(H,n.entities[H],C[H]);return}const x=L[H];x?.optional?k.has(H)&&vm(H,r):h||(h=`${x?.name||H} ontbreekt in bulk response`)})}),gs(),ea(jn()),h?(ic(h),n.deviceReconnectMode?n.controlError="":n.controlError=`Niet alle helpervelden konden worden ververst. ${h}`):n.busyAction||(cs(),n.controlError="")}function lc(e,t={},o={}){const r={...t||{},...o||{}};return L[e]?.domain==="select"&&(!String(o.state??"").trim()&&String(t?.state??"").trim()&&(r.state=t.state),!String(o.value??"").trim()&&String(t?.value??"").trim()&&(r.value=t.value),!Array.isArray(o.option)&&Array.isArray(t?.option)&&(r.option=t.option),!Array.isArray(o.options)&&Array.isArray(t?.options)&&(r.options=t.options)),r}function ds(e=n.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function cc(){const e=n.authStatus||{};n.authDraftUsername=e.enabled?String(e.username||"").trim():"",n.authDraftCurrentPassword="",n.authDraftNewPassword="",n.authDraftConfirmPassword=""}function Ur(e=n.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function uc(e,t={},o=_d){if(t.force===!0)return!0;const r=Number(e||0);return!r||Date.now()-r>=o}function Cm(){return n.systemModal==="login"||n.systemModal==="api-security"||gn()}function Tm(){return n.systemModal==="api-security"||gn()}async function mn(e={}){if(!uc(n.lastAuthStatusRefreshAt,e))return!1;n.lastAuthStatusRefreshAt=Date.now();try{const t=await fetch("/auth/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json(),r={enabled:!!o.enabled,setup_window_active:!!o.setup_window_active,username:String(o.username||""),source:String(o.source||""),csrf_token:String(o.csrf_token||"")},a=ds(),i=ds(r);return n.authStatus=r,a!==i&&cc(),n.systemModal==="login"&&(n.authError=""),a!==i}catch(t){return n.systemModal==="login"&&(n.authError=`Loginstatus kon niet worden geladen. ${t.message}`),!1}}function To(){return n.nativeOpen||n.systemModal!=="login"?!1:(n.authStatus||{}).setup_window_active!==!0}function Eo(){n.loginAuthStatusPollTimer&&(window.clearTimeout(n.loginAuthStatusPollTimer),n.loginAuthStatusPollTimer=null)}function dc(e=jd){n.loginAuthStatusPollTimer||!To()||(n.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(n.loginAuthStatusPollTimer=null,!To())return;const t=n.authError;(await mn({force:!0})||n.authError!==t)&&n.systemModal==="login"&&m(),To()&&dc()},Math.max(0,Number(e)||0)))}async function Em(e={}){if(n.systemModal!=="login")return!1;const t=n.authError,o=await mn({force:!0});return(o||n.authError!==t)&&n.systemModal==="login"&&m(),e.poll!==!1&&To()&&dc(),o}async function hn(e={}){if(!uc(n.lastApiSecurityStatusRefreshAt,e))return!1;n.lastApiSecurityStatusRefreshAt=Date.now();try{const t=await fetch("/api-security/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json(),r={enabled:!!o.enabled,transport_active:!!o.transport_active,pending_restart:!!o.pending_restart,key:String(o.key||""),source:String(o.source||""),csrf_token:String(o.csrf_token||"")},a=Ur(),i=Ur(r);return n.apiSecurityStatus=r,n.apiSecurityError="",a!==i&&(n.apiSecurityNotice=""),a!==i}catch(t){return n.apiSecurityError=`API-beveiliging kon niet worden geladen. ${t.message}`,!1}}async function pc(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let o=!1;try{o=document.execCommand("copy")}finally{document.body.removeChild(t)}return o}async function $m(){await Qt("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})}async function Am(){const e=n.apiSecurityStatus||{};if(!e.csrf_token){n.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}n.apiSecurityBusy=!0,n.apiSecurityNotice="",n.apiSecurityError="",m();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const o=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await o.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!o.ok||!r.ok)throw new Error(r.error||`HTTP ${o.status}`);await hn({force:!0}),n.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",n.apiSecurityError="",m()}catch(t){n.apiSecurityError=`Inschakelen is mislukt. ${t.message}`,m()}finally{n.apiSecurityBusy=!1,m()}}async function Hm(){const e=n.apiSecurityStatus||{};if(!e.csrf_token){n.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}n.apiSecurityBusy=!0,n.apiSecurityNotice="",n.apiSecurityError="",m();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const o=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await o.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!o.ok||!r.ok)throw new Error(r.error||`HTTP ${o.status}`);await hn({force:!0}),n.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",n.apiSecurityError="",m()}catch(t){n.apiSecurityError=`Roteren is mislukt. ${t.message}`,m()}finally{n.apiSecurityBusy=!1,m()}}async function Mm(){const e=n.apiSecurityStatus||{};if(!e.csrf_token){n.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",m();return}if(!e.enabled){n.apiSecurityNotice="API-encryptie staat al uit.",n.apiSecurityError="",m();return}n.apiSecurityBusy=!0,n.apiSecurityNotice="",n.apiSecurityError="",m();try{const t=new URLSearchParams;t.set("csrf_token",e.csrf_token);const o=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),r=await o.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!o.ok||!r.ok)throw new Error(r.error||`HTTP ${o.status}`);await hn({force:!0}),n.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",n.apiSecurityError="",m()}catch(t){n.apiSecurityError=`Uitzetten is mislukt. ${t.message}`,m()}finally{n.apiSecurityBusy=!1,m()}}async function Pm(){const e=String(n.apiSecurityStatus?.key||"").trim();if(!e){n.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",m();return}try{if(!await pc(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");n.apiSecurityNotice="API-sleutel gekopieerd.",n.apiSecurityError="",m()}catch(t){n.apiSecurityError=`Kopi\xEBren is mislukt. ${t.message}`,m()}}function zr(){n.settingsBackupDraft=null,n.settingsBackupError="",n.settingsBackupBusy=!1}function Nm(){return{device:Pe(),installation:Zn(),topology:typeof Z=="function"?Z():"",firmware_version:ne(),firmware_channel:String(E("firmwareUpdateChannel")||E("releaseChannelText")||"").trim()}}function gc(e){const t=L[e];if(!t)return;if(e==="setupComplete")return Cc();const o=E(e);if(o===""||o===null||o===void 0)return;if(t.domain==="switch"||t.domain==="binary_sensor")return A(e);if(t.domain==="number"){const a=et(o);return Number.isNaN(a)?void 0:a}return t.domain==="time"?dn(o)||void 0:t.domain==="datetime"?ot(o)||void 0:String(o||"").trim()||void 0}function mc(){const e={};return tn.forEach(t=>{const o={};t.keys.forEach(r=>{const a=gc(r);a!==void 0&&(o[r]=a)}),e[t.id]=o}),{schema_version:gl,exported_at:new Date().toISOString(),source:Nm(),settings:e}}function Rm(e=mc()){const t=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${t}.json`}function Lm(e,t){const o=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),r=URL.createObjectURL(o),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Om(e){const t=L[e];return t?.name?t.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function ps(e,t){if(t==null||t==="")return"\u2014";const o=L[e];return o?o.domain==="number"?j(e,t):o.domain==="time"?dn(t)?.slice(0,5)||"\u2014":o.domain==="datetime"?ot(t)||"\u2014":o.domain==="switch"||o.domain==="binary_sensor"?t?"Aan":"Uit":String(t).trim()||"\u2014":String(t).trim()||"\u2014"}function Fm(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function hc(e){const t=e?.settings&&typeof e.settings=="object"?e.settings:{},o=e?.source&&typeof e.source=="object"?e.source:{},r=xd;let a=0,i=0,l=0,c=0,d=0,u=0,g=0,b=0;const f=tn.map(w=>{const p=t[w.id]&&typeof t[w.id]=="object"?t[w.id]:{};let h=0,y=0,S=0,q=0,C=0,k=0,H=0;const x=w.keys.map(F=>{const T=!!L[F]?.optional,$=Object.prototype.hasOwnProperty.call(p,F),N=$?p[F]:void 0,W=gc(F),K=v(F),R=$?ps(F,N):T?"Niet op huidige installatie":"Ontbreekt in backup",V=K?ps(F,W):T?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie";let P="same";return!$&&T?P="optional-missing":$?K?JSON.stringify(W)!==JSON.stringify(N)&&(P="different"):P=T?"optional-unavailable":"current-missing":P="missing",K&&(H+=1,b+=1),P!=="same"&&(k+=1,g+=1),T?(C+=1,$?(S+=1,l+=1):(q+=1,c+=1)):$?(h+=1,a+=1):(y+=1,i+=1),{key:F,label:Om(F),optional:T,hasBackupValue:$,backupDisplay:R,currentDisplay:V,status:P,statusLabel:Fm(P)}});return u+=w.keys.filter(F=>!L[F]?.optional).length,{id:w.id,label:w.label,present:h,currentPresent:H,requiredTotal:w.keys.filter(F=>!L[F]?.optional).length,optionalTotal:C,optionalPresent:S,optionalMissing:q,requiredMissing:y,total:w.keys.length,differenceCount:k,rows:x}});return Object.entries(t).forEach(([w,p])=>{if(!tn.some(h=>h.id===w)){d+=1;return}!p||typeof p!="object"||Object.keys(p).forEach(h=>{r.has(h)||(d+=1)})}),{source:o,sectionSummaries:f,requiredPresent:a,requiredMissing:i,requiredAvailable:u,optionalPresent:l,optionalMissing:c,unknown:d,differenceCount:g,currentPresent:b,requiredTotal:u,total:cn.length}}function xm(e,t=""){const o=JSON.parse(e);if(!o||typeof o!="object")throw new Error("Backupbestand bevat geen JSON-object.");const r=Number(o.schema_version??o.schemaVersion??0);if(!Number.isInteger(r)||r<gl)throw new Error("Onbekende backupversie.");const a=o.settings&&typeof o.settings=="object"?o.settings:{},i={schema_version:r,exported_at:String(o.exported_at||""),source:o.source&&typeof o.source=="object"?o.source:{},settings:a,file_name:t||""};return i.summary=hc(i),i}async function Dm(){n.settingsBackupBusy=!0,n.controlError="",n.controlNotice="",m();try{return await D(cn,"all"),mc()}finally{n.settingsBackupBusy=!1,m()}}async function Im(){if(!n.settingsBackupBusy)try{const e=await Dm();Lm(Rm(e),e),n.controlNotice="Settings-backup gedownload.",m()}catch(e){n.controlError=`Backup exporteren mislukt. ${e.message}`,m()}}async function Wm(e){if(!(!e||n.settingsBackupBusy)){n.settingsBackupBusy=!0,n.settingsBackupDraft=null,n.settingsBackupError="",n.controlError="",n.controlNotice="",m();try{const t=await e.text();await D(cn,"all");const o=xm(t,e.name||"");n.settingsBackupDraft=o,n.systemModal="settings-backup-restore"}catch(t){n.settingsBackupDraft=null,n.settingsBackupError=`Backupbestand kon niet worden gelezen. ${t.message}`}finally{n.settingsBackupBusy=!1,m()}}}async function _n(e,t){const o=L[e];if(!o)throw new Error(`Onbekend veld ${e}.`);if(o.domain==="select"){const r=String(t||"").trim(),a=await fetch(`${z(o.domain,o.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="number"){const r=Se(e,t),a=await fetch(`${z(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="time"){const r=dn(t),a=await fetch(`${z(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="datetime"){const r=ot(t),a=await fetch(`${z(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="text"){const r=String(t||"").trim(),a=await fetch(`${z(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return r}if(o.domain==="switch"||o.domain==="binary_sensor"){const r=!!t,a=r?"turn_on":"turn_off",i=await fetch(z(o.domain,o.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return r}throw new Error(`${o.name} kan niet worden hersteld.`)}async function Bm(){const e=n.settingsBackupDraft;if(!e||n.settingsBackupBusy)return;n.settingsBackupBusy=!0,n.settingsBackupError="",n.controlError="",n.controlNotice="",m();const t=[],o=[];let r=!1;try{await D(cn,"all");for(const i of tn){const l=e.settings?.[i.id]&&typeof e.settings[i.id]=="object"?e.settings[i.id]:{};for(const c of i.keys){if(!Object.prototype.hasOwnProperty.call(l,c)){o.push(c);continue}const d=l[c];if(c==="setupComplete"){r=d===!0;continue}if(c==="openquattEnabled")continue;if(!L[c]||!v(c)){o.push(c);continue}try{await _n(c,d),t.push(c)}catch{o.push(c)}}}const a=e.settings?.operation?.openquattEnabled;if(Object.prototype.hasOwnProperty.call(e.settings?.operation||{},"openquattEnabled")&&v("openquattEnabled")&&(await _n("openquattEnabled",a),t.push("openquattEnabled")),r&&L.apply){const i=await fetch(z("button","Complete setup","press"),{method:"POST"});if(!i.ok)throw new Error(`Setup bevestigen mislukt (HTTP ${i.status}).`);t.push("setupComplete")}else Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&o.push("setupComplete");n.systemModal="settings-backup-success",zr(),n.controlNotice=`Backup hersteld (${t.length} toegepast${o.length?`, ${o.length} overgeslagen`:""}).`,await re()}catch(a){n.settingsBackupError=`Backup herstellen mislukt. ${a.message}`}finally{n.settingsBackupBusy=!1,m()}}function fn(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}async function ti(e={}){if(!bn()){const r=!!(n.trendHistoryRaw||n.trendHistoryError);return n.trendHistoryRaw="",n.trendHistoryError="",n.trendHistorySignature="",n.trendHistoryNowMs=Number.NaN,n.trendHistoryLastFetchAt=0,r}if(fn())return!1;const t=e.force===!0,o=Date.now();if(!t&&n.trendHistoryFetchPromise)return n.trendHistoryFetchPromise;if(!t&&(n.trendHistoryRaw||n.trendHistoryError)&&o-Number(n.trendHistoryLastFetchAt||0)<ua)return!1;n.trendHistoryFetchPromise=(async()=>{const r=Sa(n.trendWindowHours||nn);r!==n.trendWindowHours&&qa(r);const a=await fetch(`${_e()}/trends/history?hours=${encodeURIComponent(String(r))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const i=await a.text(),l=i.split(/\r?\n/);let c=Number.NaN,d=i;l.length&&l[0].startsWith("@now|")&&(c=Number(l[0].slice(5)),d=l.slice(1).join(`
`));const u=`${r}|${d.length}|${d.slice(0,120)}|${d.slice(-120)}`,g=Number.isFinite(n.trendHistoryNowMs),f=Number.isFinite(c)?!g||n.trendHistoryNowMs!==c:g,w=d!==n.trendHistoryRaw||n.trendHistoryError!==""||n.trendHistorySignature!==u||f;return n.trendHistoryRaw=d,n.trendHistoryError="",n.trendHistorySignature=u,n.trendHistoryNowMs=Number.isFinite(c)?c:Number.NaN,n.trendHistoryLastFetchAt=Date.now(),w})();try{return await n.trendHistoryFetchPromise}catch(r){const a=`Trendhistorie kon niet worden geladen. ${r.message}`,i=n.trendHistoryError!==a;return n.trendHistoryError=a,n.trendHistoryRaw="",n.trendHistorySignature="",n.trendHistoryNowMs=Number.NaN,n.trendHistoryLastFetchAt=Date.now(),i}finally{n.trendHistoryFetchPromise=null}}async function ft(e={}){if(!v("lifetimeEnergyHistoryEnabled")&&!fn()){const a=!!(n.energyHistoryRaw||n.energyHistoryError);return n.energyHistoryRaw="",n.energyHistoryError="",n.energyHistorySignature="",n.energyHistoryNowMs=Number.NaN,n.energyHistoryLastFetchAt=0,n.energyHistoryRequestQuery="",n.energyHistoryFetchQuery="",n.energyHistoryCsrfToken="",a}const t=e.force===!0,o=Date.now(),r=e.metaOnly===!0?"?meta=1":typeof wo=="function"?wo():"";if(!t&&n.energyHistoryFetchPromise&&n.energyHistoryFetchQuery===r)return n.energyHistoryFetchPromise;if(!t&&n.energyHistoryRequestQuery===r&&(n.energyHistoryRaw||n.energyHistoryError)&&o-Number(n.energyHistoryLastFetchAt||0)<ua)return!1;n.energyHistoryFetchQuery=r,n.energyHistoryFetchPromise=(async()=>{const a=async h=>{const y=await fetch(`${_e()}/energy/history${h}`,{cache:"no-store"});if(!y.ok)throw new Error(`HTTP ${y.status}`);return y.text()};let i=r,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof wo=="function"){const h=n.energyHistoryRaw;n.energyHistoryRaw=l;const y=wo();n.energyHistoryRaw=h,y&&y!==i&&(i=y,l=await a(i))}const c=l.split(/\r?\n/),d=Jl(l)||n.energyHistoryCsrfToken;let u=Number.NaN;c.forEach(h=>{h.startsWith("@now|")&&(u=Number(h.slice(5)))});const g=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,b=Number.isFinite(n.energyHistoryNowMs),w=Number.isFinite(u)?!b||n.energyHistoryNowMs!==u:b,p=l!==n.energyHistoryRaw||n.energyHistoryError!==""||n.energyHistorySignature!==g||w||d!==n.energyHistoryCsrfToken;return n.energyHistoryRaw=l,n.energyHistoryError="",n.energyHistorySignature=g,n.energyHistoryNowMs=Number.isFinite(u)?u:Number.NaN,n.energyHistoryLastFetchAt=Date.now(),n.energyHistoryRequestQuery=i,n.energyHistoryCsrfToken=d,p})();try{return await n.energyHistoryFetchPromise}catch(a){const i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=n.energyHistoryError!==i;return n.energyHistoryError=i,n.energyHistoryRaw="",n.energyHistorySignature="",n.energyHistoryNowMs=Number.NaN,n.energyHistoryLastFetchAt=Date.now(),n.energyHistoryRequestQuery=r,n.energyHistoryCsrfToken="",l}finally{n.energyHistoryFetchPromise=null}}function gs(){n.complete=Cc(),n.stage=n.complete===!0?"Gereed":n.complete===!1?"Quick Start":"Laden...",n.summary=Ah(),n.appView==="diagnosis"&&!bn()&&At(on(),{syncMode:"replace",forceSync:!0}),n.appView||At(Ea()||on(),{syncMode:"replace",forceSync:!0})}function Vm(){const e=Kr();return n.appView==="settings"?[...new Set([...e,...Ja()])]:n.appView==="energy"||n.appView==="results"?Vn(n.appView,{forceFast:!0}):n.appView==="overview"||n.appView==="diagnosis"?Vn(n.appView,{forceFast:!0}):[...new Set(e)]}function _m(e=[]){const t=new Set(e);return(n.appView==="settings"?Ja():n.appView==="overview"||n.appView==="diagnosis"?[...new Set([...Vn(n.appView,{includeBulk:!0}),...Nt])]:n.appView==="energy"||n.appView==="results"?[...new Set([...Vn(n.appView,{forceFast:!0}),...Nt])]:[...new Set(["setupComplete","strategy",...Qe])]).filter(r=>!t.has(r))}async function jm(e,t="state"){if(!(!e.length||n.nativeOpen)){n.entitySyncInFlight=!0;try{await D(e,t,{concurrency:t==="all"?Mt:Qn})}finally{n.entitySyncInFlight=!1;const o=n.pendingEntitySyncOptions;n.pendingEntitySyncOptions=null,o&&!n.nativeOpen&&window.setTimeout(()=>{re(o)},0)}n.mounted&&!n.nativeOpen&&m()}}function fc(){if(n.nativeOpen||n.appView!=="settings")return;const e=()=>{if(!(n.nativeOpen||n.appView!=="settings")){if(n.loadingEntities||n.focusedField||n.draggingCurveKey||n.busyAction||n.settingsInteractionLock){window.setTimeout(fc,250);return}re({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}function ms(e=Date.now(),t={}){return t.forceBulk===!0?!0:e-Number(n.lastBulkEntitySyncAt||0)>=Id}async function Km(){if(!n.nativeOpen)try{ei()&&await tc(),(n.appView==="overview"||n.appView==="diagnosis")&&await ti({force:!0}),n.appView==="results"&&await ft({force:!0}),await mn({force:!0}),gn()&&await Promise.all([hn({force:!0}),er({forceTrendHistory:!0,forceEnergyHistory:!0})])}finally{n.mounted&&!n.nativeOpen&&m(),fc()}}async function Um(){if(n.nativeOpen)return;n.loadingEntities=!0,m();const e=Kg();e>0&&await new Promise(i=>window.setTimeout(i,e));const t=Vm(),o=_m(t),r=n.appView==="settings"?"all":"state";try{await D(t,r,{concurrency:r==="all"?Mt:Qn}),n.appView==="settings"?await um():await cm()}finally{n.loadingEntities=!1,m()}const a=n.appView==="settings"?"all":"state";window.setTimeout(()=>{jm(o,a)},em),ec(Za())}async function re(e={}){if(n.nativeOpen||n.loadingEntities||n.draggingCurveKey||n.busyAction||n.settingsInteractionLock)return;if(n.updateInstallBusy||Ml()){n.pendingEntitySyncOptions=null;return}if(n.focusedField&&n.appView!=="settings")return;if(n.entitySyncInFlight){im(e);return}const t=Date.now();if(document.hidden&&t-Number(n.lastEntitySyncAttemptAt||0)<wa)return;const o=n.appView,r=e.prefetchView==="overview"&&!e.forceBulk&&o==="settings",a=r?"overview":o,i=a==="overview"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,c=!l&&!r&&ms(t,e),u=t-Number(n.lastStaticEntitySyncAt||0)>=Wd||n.updateInstallBusy||n.updateInstallPhaseHint?Nt:[],g=n.quickStartModalOpen&&n.currentStep==="flow-source"?Xe:[],b=n.quickStartModalOpen&&n.currentStep==="thermostat-source"?Ln:[],f=ns()?Pn():[],w=r?[...ul,...Qe,"setupComplete",...u]:i?[...Vn(a,{forceFast:l,includeBulk:c}),...u]:o==="settings"?[...new Set([...Ja(),...f,...u])]:c?["setupComplete",...u,...Qe,"strategy",...Yn,...Ze,...le()?de.map(p=>p.key):Pt]:["setupComplete",...Qe,"strategy",...u];n.entitySyncInFlight=!0,n.lastEntitySyncAttemptAt=t;try{const p=n.deviceReconnectMode,h=hm(t,e)?await fm():{ok:!0,message:""};if(!h.ok){ic(h.message),r||m();return}if(await D([...new Set([...w,...g,...b])],r?"state":o==="settings"?"all":"state",{concurrency:l&&i?Qn:Mt}),n.lastFastEntitySyncAt=Date.now(),c&&(a==="overview"||a==="diagnosis")&&!r&&(n.lastBulkEntitySyncAt=n.lastFastEntitySyncAt),u.length&&(n.lastStaticEntitySyncAt=n.lastFastEntitySyncAt),r)return;i&&!n.overviewMetadataHydrated&&!n.overviewMetadataHydrating&&tc();const y=p!==n.deviceReconnectMode,S=l&&i,q=S?!1:a==="overview"||a==="diagnosis"?await ti():!1,C=S?!1:n.appView==="results"?await ft():!1,k=S?!1:ns()?(await Promise.all([Vl(),ft({metaOnly:!0})])).some(Boolean):!1,H=S||!Cm()?!1:await mn(),x=S||!Tm()?!1:await hn(),F=Br();if(S&&!n.nativeOpen&&ec(Za(a)),y){m();return}if(q&&n.appView==="diagnosis"&&!n.root?.querySelector(".oq-overview-trends")){m();return}if(C&&n.appView==="results"&&!n.root?.querySelector(".oq-energy-history")){m();return}if(k&&n.appView==="settings"){m();return}if(H&&(n.systemModal==="login"||gn())){m();return}if(x&&n.appView==="settings"){m();return}const G=!!(n.updateModalOpen||n.systemModal||n.interfacePanelOpen);if(F!==n.headerRenderSignature)if(G&&Vr())n.headerRenderSignature=F;else{m();return}else Vr();if(n.appView==="settings"&&String(n.systemModal||"").startsWith("service-task-")){Gr()!==n.settingsRenderSignature&&m();return}if(G)return;if(n.appView==="settings"){const T=Gr();if(T!==n.settingsRenderSignature&&!n.focusedField){m();return}if(!ob()){n.focusedField||m();return}n.focusedField&&(n.settingsRenderSignature=T);return}if(n.appView==="diagnosis"){Uv()||m();return}if(n.appView==="energy"){Hy()||m();return}if(n.appView==="results"){My()||m();return}ow()||m()}catch(p){r||(n.controlError=`Helperstatus kon niet worden geladen. ${p.message}`,m())}finally{n.entitySyncInFlight=!1;const p=n.pendingEntitySyncOptions;n.pendingEntitySyncOptions=null,p&&!n.nativeOpen&&window.setTimeout(()=>{re(p)},0),l&&(a==="overview"||a==="diagnosis")&&!r&&!n.nativeOpen&&!p&&ms(Date.now())&&window.setTimeout(()=>{re({forceBulk:!0})},om)}}function hs(){window.setTimeout(()=>{const e=document.activeElement;n.focusedField=e&&e.dataset&&e.dataset.oqField||"",n.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function zm(e){e.target.closest(".oq-ph-concept-hotspot")&&(n.settingsInteractionLock=!0)}function Gm(e){const t=e.target.closest(".oq-ph-concept-hotspot");if(!t||e.relatedTarget&&t.contains(e.relatedTarget))return;const o=n.root&&n.root.querySelector(".oq-ph-concept-hotspot:hover"),r=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;n.settingsInteractionLock=!!(o||r)}function oe(e){const t=n.entities[e];if(!t)return n.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;const o=t.state??t.value??"",r=Array.isArray(t.option)?t.option.join(","):Array.isArray(t.options)?t.options.join(","):"",a=[t.min_value??"",t.max_value??"",t.step??"",t.uom??""].join(",");return`${e}:${o}::${r}::${a}`}function Gr(){return[n.appView,n.settingsGroup,n.busyAction,n.loadingEntities?"loading":"ready",Ur(),oe("setupComplete"),...pl.map(e=>oe(e))].join("|")}function ve(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function bc(){return[n.appView,n.busyAction,oe("openquattEnabled"),oe("openquattResumeAt"),oe("manualCoolingEnable"),oe("silentModeOverride"),oe("controlModeLabel"),oe("coolingPermitted"),oe("coolingRequestActive"),oe("coolingBlockReason"),oe("silentActive")].join("|")}function Qm(e){if(e.target.dataset.oqFirmwareConnectionConfirm){n.firmwareConnectionSwitchConfirmed=!!e.target.checked,m();return}if(e.target.dataset.oqFirmwareTopologyConfirm){n.firmwareTopologySwitchConfirmed=!!e.target.checked,m();return}if(e.target.dataset.oqFirmwareTestConfirm){n.updateTestFirmwareConfirmed=!!e.target.checked,n.updateTestFirmwareError="";const o=e.target.closest(".oq-helper-modal-callout"),r=o?.querySelector('[data-oq-action="install-firmware-test"]');r&&(r.disabled=!n.updateTestFirmwareConfirmed||!Bn()),o?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){n.updateTestFirmwarePr=String(e.target.value||""),n.updateTestFirmwareConfirmed=!1,n.updateTestFirmwareError="",n.updateTestFirmwareBuild=null;const o=e.target.closest(".oq-helper-modal-callout"),r=o?.querySelector('[data-oq-firmware-test-confirm="true"]');r&&(r.checked=!1);const a=o?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!0);const i=Yo(),l=Na(Bn(),i),c=o?.querySelector('[data-oq-firmware-test-asset-note="true"]');c&&(c.textContent=l?i.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),o?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),o?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}const t=e.target.dataset.oqField;if(!t){if(e.target.dataset.oqQuickstartCicUrl!==void 0){n.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){n.quickStartThermostatSourceDraft=String(e.target.value||""),m();return}const o=e.target.dataset.oqAuthField;if(!o)return;n.authNotice="",n.authError="",o==="username"?n.authDraftUsername=String(e.target.value||""):o==="currentPassword"?n.authDraftCurrentPassword=String(e.target.value||""):o==="newPassword"?n.authDraftNewPassword=String(e.target.value||""):o==="confirmPassword"&&(n.authDraftConfirmPassword=String(e.target.value||""));return}if(e.target.dataset.oqPauseDraft){n.pauseResumeDraft=String(e.target.value||"");return}if(L[t]?.domain==="text"){n.inputDrafts[t]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(n.inputDrafts[t]=e.target.value);const o=et(e.target.value);if(!Number.isNaN(o)){const r=Se(t,e.target.value);if(n.drafts[t]=r,e.target.type==="range"){const a=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");a&&(a.textContent=j(t,r))}}}}function Ym(e){pb(e)}function fs(e,t){return e.deltaMode===1?t*16:e.deltaMode===2?t*window.innerHeight:t}function Jm(e){let t=e?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){const o=window.getComputedStyle(t),r=/(auto|scroll)/.test(o.overflowY)&&t.scrollHeight>t.clientHeight,a=/(auto|scroll)/.test(o.overflowX)&&t.scrollWidth>t.clientWidth;if(r||a)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function Zm(e){const t=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!t||!n.root||!n.root.contains(t)||document.activeElement!==t)return;e.preventDefault(),t.blur();const o=Jm(t);o&&typeof o.scrollBy=="function"&&o.scrollBy({left:fs(e,e.deltaX||0),top:fs(e,e.deltaY||0),behavior:"auto"})}function Xm(e){if(e.target.dataset.oqDevControl==="boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(e.target.value);return}if(e.target.dataset.oqBackupFileInput){const r=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",Wm(r);return}if(e.target.dataset.oqFirmwareUploadFileInput){const r=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",r?(n.firmwareAdvancedOpen=!0,n.updateManualUploadOpen=!0,n.updateManualUploadFile=r,n.updateManualUploadFileName=r.name||"",n.updateManualUploadError=""):be(),m();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof _o=="function"&&_o(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}if(e.target.dataset.oqEnergyHistoryExportMode!==void 0){n.energyHistoryExportMode=tr(e.target.value),n.energyHistoryExportError="",n.energyHistoryExportNotice="",m();return}const t=e.target.dataset.oqField;if(!t)return;const o=L[t];if(o){if(o.domain==="select"){Qr(t,String(e.target.value));return}if(o.domain==="number"){ni(t,e.target.value);return}if(o.domain==="text"){Sh(t,e.target.value);return}if(o.domain==="time"){const r=dn(e.target.value);if(!r){n.controlError=`${o.name} verwacht tijd als HH:MM.`,m();return}wh(t,r);return}if(o.domain==="datetime"){const r=ot(e.target.value);if(!r){n.controlError=`${o.name} verwacht datum en tijd.`,m();return}qh(t,r);return}}}function eh(e){const t=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(t){const u=t.querySelector("input[data-oq-field]");if(u&&(u.type==="time"||u.type==="datetime-local")&&typeof u.showPicker=="function")try{u.showPicker()}catch{}}const o=e.target.closest('[data-oq-action="toggle-settings-info"]'),r=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-modal]");if(o){const u=o.dataset.infoId||"";n.settingsInfoOpen=n.settingsInfoOpen===u?"":u,m();return}const l=e.target.closest("[data-oq-action]"),c=n.interfacePanelOpen&&!a;if(!l){let u=!1;if(n.settingsInfoOpen&&!r&&(n.settingsInfoOpen="",u=!0),c&&(Er(!1),u=!0),i&&e.target===i){if(i.dataset.oqModal==="quickstart-forced")return;n.updateModalOpen&&(n.updateModalOpen=!1,n.firmwareAdvancedOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareTopologySwitchOpen=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchConfirmed=!1,be(),De(),u=!0),n.systemModal&&(zr(),Eo(),n.systemModal="",u=!0)}u&&m();return}c&&l.dataset.oqAction!=="toggle-interface-panel"&&Er(!1);const d=l.dataset.oqAction;if(d==="set-mock-boiler"&&typeof window.__OQ_SET_MOCK_BOILER__=="function"){window.__OQ_SET_MOCK_BOILER__(l.dataset.boilerMode||"off");return}if(d==="toggle-interface-panel"){Er(!n.interfacePanelOpen),m();return}if(d==="toggle-dev-panel"){tp(!n.devPanelOpen),m();return}if(d==="toggle-installation-monitoring-details"){e.preventDefault();const u=l.closest(".oq-settings-monitoring-details");n.installationMonitoringDetailsOpen=!(u&&u.hasAttribute("open")),m();return}if(d==="toggle-integration-diagnostics"){e.preventDefault();const u=l.closest(".oq-settings-integration-diagnostics");n.integrationDiagnosticsOpen=!(u&&u.hasAttribute("open")),m();return}if(d==="toggle-odu-runtime-frequency-details"){e.preventDefault();const u=l.closest(".oq-settings-odu-runtime-details");n.oduRuntimeFrequencyDetailsOpen=!(u&&u.hasAttribute("open")),m();return}if(d==="toggle-storage-technical-details"){e.preventDefault();const u=l.closest(".oq-settings-storage-technical");n.settingsStorageDetailsOpen=!(u&&u.hasAttribute("open")),m();return}if(d==="select-view"){if((l.dataset.viewId||"")==="diagnosis"&&!bn())return;const u=l.dataset.viewId||"overview";At(u,{syncMode:"push"}),m(),re({forceFast:!0});return}if(d==="select-trend-window"){if(l.disabled)return;qa(Number(l.dataset.trendHours||24)),m(),ti({force:!0}).then(u=>{u&&m()});return}if(d==="select-energy-history-view"){if(l.disabled||typeof Vs!="function")return;Vs(l.dataset.energyHistoryView||"day");return}if(d==="shift-energy-history-period"){if(l.disabled||typeof Us!="function")return;Us(n.energyHistoryView||"day",l.dataset.energyHistoryDirection||"1");return}if(d==="select-energy-history-now"){if(l.disabled||typeof zs!="function")return;zs(n.energyHistoryView||"day");return}if(d==="select-settings-group"){Co(l.dataset.groupId||qe[0].id),m(),re({forceFast:!0});return}if(d==="open-update-modal"){n.updateModalOpen=!0,m(),gh();return}if(d==="open-webserver-log-modal"){ef();return}if(d==="open-debug-recording-modal"){n.systemModal="debug-recording",n.debugRecordingError="",n.debugRecordingNotice="",m(),ci();return}if(d==="open-login-modal"){n.systemModal="login",cc(),n.authNotice="",n.authError="",m(),Em({poll:!0});return}if(d==="open-api-security-modal"){n.systemModal="api-security",n.apiSecurityNotice="",n.apiSecurityError="",m(),hn({force:!0});return}if(d==="copy-api-security-key"){Pm();return}if(d==="enable-api-security"){Am();return}if(d==="rotate-api-security"){Hm();return}if(d==="disable-api-security"){Mm();return}if(d==="restart-api-security"){$m();return}if(d==="flush-trend-history"){Qt("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:Pn(),refreshDelayMs:500}).then(()=>{Hn(void 0,{forceTrendHistory:!0})});return}if(d==="save-lifetime-energy-history"){Qt("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:Pn(),refreshDelayMs:500}).then(()=>{n.energyHistoryRaw="",n.energyHistorySignature="",n.energyHistoryLastFetchAt=0,Hn(),n.appView==="results"&&ft({force:!0}).then(()=>m())});return}if(d==="clear-lifetime-energy-history"){if(!window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return;Qt("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:Pn(),refreshDelayMs:500}).then(()=>{n.energyHistoryRaw="",n.energyHistorySignature="",n.energyHistoryLastFetchAt=0,Hn(),n.appView==="results"&&ft({force:!0}).then(()=>m())});return}if(d==="select-energy-history-import-file"){_g();return}if(d==="clear-energy-history-import-file"){jl(),m();return}if(d==="import-energy-history-file"){jg();return}if(d==="export-energy-history"){Eg();return}if(d==="open-history-storage-modal"){n.systemModal="history-storage",m(),er({forceMissing:!0,forceTrendHistory:!0,forceEnergyHistory:!0}).finally(()=>{n.systemModal==="history-storage"&&m()}),Hn([1e3,3e3,7e3]);return}if(d==="open-connectivity-modal"){n.systemModal="connectivity",m();return}if(d==="open-restart-confirm"){n.systemModal="restart-confirm",m();return}if(d==="download-settings-backup"){Im();return}if(d==="open-settings-backup-import"){n.systemModal="settings-backup-import",m();return}if(d==="open-silent-settings-modal"){n.systemModal="silent-settings",m();return}if(d==="open-openquatt-pause-modal"){n.pauseResumeDraft=Bl(),n.systemModal="openquatt-pause",m();return}if(d==="enable-openquatt-now"){Th();return}if(d==="apply-openquatt-preset"){const u=Wl(l.dataset.pausePreset||"");n.pauseResumeDraft=u,Hr(u);return}if(d==="apply-openquatt-indefinite"){Hr("");return}if(d==="apply-openquatt-custom-pause"){if(!String(n.pauseResumeDraft||"").trim()){n.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",m();return}Hr(n.pauseResumeDraft||"");return}if(d==="close-update-modal"){n.updateModalOpen=!1,n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.firmwareAdvancedOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareTopologySwitchOpen=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchConfirmed=!1,be(),De(),m();return}if(d==="close-quickstart-modal"){n.quickStartModalOpen=!1,m();return}if(d==="open-quickstart-modal"){n.currentStep="generation",n.quickStartModalMode="wizard",n.quickStartModalOpen=!0,m();return}if(d==="open-generation-modal"){n.currentStep="generation",n.quickStartModalMode="generation",n.quickStartModalOpen=!0,m();return}if(d==="open-cm100-commissioning-modal"){n.systemModal="",At("settings"),Co("service"),m(),re({forceFast:!0});return}if(d==="open-installation-monitoring"){n.systemModal="",At("settings"),Co("service"),m(),re({forceFast:!0});return}if(d==="open-service-task-modal"){const u=String(l.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(u)&&(n.systemModal=`service-task-${u}`,m(),re({forceFast:!0}));return}if(d==="press-named-button"){const u=String(l.dataset.oqButtonKey||l.dataset.buttonKey||l.getAttribute("data-oq-button-key")||"").trim();if(u){u==="commissioningCm100Start"?(n.pendingCommissioningCm100Start=!0,n.commissioningTaskLock="cm100",n.commissioningBoilerHeatPowerDisplay=""):u==="commissioningCm100Stop"?(n.pendingCommissioningCm100Start=!1,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="",n.commissioningBoilerHeatPowerDisplay=""):u==="boilerPowerTestStart"?(n.pendingBoilerPowerTestStart=!0,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="boiler",n.commissioningBoilerHeatPowerDisplay=""):u==="boilerPowerTestAbort"||u==="boilerPowerTestApply"?n.commissioningTaskLock="boiler":u==="flowAutotuneStart"?(n.pendingFlowAutotuneStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="autotune"):u==="flowAutotuneAbort"||u==="flowAutotuneApply"?n.commissioningTaskLock="autotune":u==="airPurgeStart"?(n.pendingAirPurgeStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="purge"):u==="airPurgeAbort"?n.commissioningTaskLock="purge":u==="manualFlowStart"?(n.pendingManualFlowStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualHpStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="manual-flow"):u==="manualFlowAbort"?n.commissioningTaskLock="manual-flow":u==="manualHpStart"?(n.pendingManualHpStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock="manual-hp"):u==="hpWaterCalibrationStart"?(n.pendingHpWaterCalibrationStart=!0,n.pendingBoilerPowerTestStart=!1,n.pendingFlowAutotuneStart=!1,n.pendingAirPurgeStart=!1,n.pendingManualFlowStart=!1,n.pendingManualHpStart=!1,n.commissioningTaskLock="hp-water-calibration"):u==="hpWaterCalibrationAbort"||u==="hpWaterCalibrationApply"?n.commissioningTaskLock="hp-water-calibration":u==="manualHpAbort"&&(n.commissioningTaskLock="manual-hp");const g=[];let b=0,f="",w="";if(u==="acknowledgeCompressorCyclingAlert")g.push(...ha);else if(u==="commissioningCm100Start"||u==="commissioningCm100Stop")g.push("commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive");else if(u==="boilerPowerTestStart"||u==="boilerPowerTestAbort"||u==="boilerPowerTestApply")g.push("commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower");else if(u==="flowAutotuneStart"||u==="flowAutotuneAbort"||u==="flowAutotuneApply")g.push("commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi");else if(u==="airPurgeStart"||u==="airPurgeAbort")g.push("commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode");else if(u==="hpWaterCalibrationStart"||u==="hpWaterCalibrationAbort"||u==="hpWaterCalibrationApply")g.push("commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode");else if(u==="manualFlowStart"||u==="manualFlowAbort"||u==="manualFlowApplyHeating"||u==="manualFlowApplyCooling")g.push("commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint");else if(u==="manualHpStart"||u==="manualHpAbort")g.push("commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode");else if(tl.has(u)){const p=Hd(u);p&&(g.push(...el(p)),b=u.endsWith("Load")?1200:3200,f=u.endsWith("Load")?`HP${p} ODU runtime tabel lezen aangevraagd.`:`HP${p} ODU runtime write aangevraagd; controleer status/readback.`,w=`ODU runtime actie mislukt voor HP${p}`)}Qt(u,{...g.length?{refreshKeys:g}:{},...b?{refreshDelayMs:b}:{},...f?{successNotice:f}:{},...w?{errorPrefix:w}:{}})}return}if(d==="close-system-modal"){Eo(),yn(),n.systemModal="",n.authDraftCurrentPassword="",n.authDraftNewPassword="",n.authDraftConfirmPassword="",n.authNotice="",n.authError="",n.apiSecurityNotice="",n.apiSecurityError="",zr(),m(),cr();return}if(d==="clear-webserver-log-output"){rr();return}if(d==="copy-webserver-log-output"){yf();return}if(d==="start-debug-recording"){Nf(l.dataset.debugMinutes||15);return}if(d==="start-rolling-debug-recording"){Rf();return}if(d==="select-debug-recording-duration"){kf(l.dataset.debugMinutes||15);return}if(d==="stop-debug-recording"){Ff();return}if(d==="freeze-debug-recording"){Of();return}if(d==="download-debug-recording"){Bf();return}if(d==="copy-debug-recording"){Vf();return}if(d==="confirm-settings-backup-restore"){Bm();return}if(d==="confirm-restart"){Qt("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"});return}if(d==="select-surface"){const u=l.dataset.surface==="native";if(n.nativeOpen===u){n.nativeOpen&&Wr();return}n.nativeOpen=u,ml(n.nativeOpen?"native":"app"),n.controlError="",n.controlNotice="",n.settingsInfoOpen="",n.updateModalOpen=!1,n.firmwareAdvancedOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareTopologySwitchOpen=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchConfirmed=!1,be(),De(),Eo(),n.systemModal="",n.nativeOpen&&Wr(),m(),Ta(),window.requestAnimationFrame(()=>{n.nativeOpen?n.nativeApp&&n.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})});return}if(d==="toggle-overview-theme"){Yd(n.overviewTheme==="light"?"dark":"light"),m();return}if(d==="select-hp-visual"){op(l.dataset.hpVisual==="compact"?"compact":"schematic"),m();return}if(d==="select-hp-layout"){ap(l.dataset.hpLayout||"equal"),m();return}if(d==="select-step"){n.currentStep=l.dataset.stepId||"generation",m(),Ar(n.currentStep);return}if(d==="apply-quickstart-flow-source"){ah();return}if(d==="refresh-quickstart-flow-signal"){ih();return}if(d==="start-quickstart-flow-test"){ch();return}if(d==="abort-quickstart-flow-test"){uh();return}if(d==="apply-quickstart-thermostat-source"){dh();return}if(d==="previous-step"){Is(-1),m(),Ar(n.currentStep);return}if(d==="next-step"){Is(1),m(),Ar(n.currentStep);return}if(d==="select-settings-option"){const u=l.dataset.selectKey||"",g=l.dataset.selectOption||"";u&&g&&String(E(u)||"")!==g&&Qr(u,g);return}if(d==="toggle-overview-control"){const u=l.dataset.controlKey||"",g=(l.dataset.controlState||"").toLowerCase();u&&(g==="on"||g==="off")&&rh(u,g==="on");return}if(d==="select-overview-control-option"){const u=l.dataset.controlKey||"",g=l.dataset.controlOption||"";u&&g&&String(E(u)||"")!==g&&Qr(u,g);return}if(d==="suggest-curve-fallback"){const u=nc();u&&ni("curveFallbackSupply",u.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");return}if(d==="apply"||d==="reset"){Eh(d);return}if(d==="run-firmware-check"){ph();return}if(d==="install-firmware-update"){mh();return}if(d==="install-firmware-connection-switch"){hh();return}if(d==="install-firmware-topology-switch"){fh();return}if(d==="toggle-firmware-advanced"){n.firmwareAdvancedOpen||n.firmwareConnectionSwitchOpen||n.firmwareTopologySwitchOpen||n.updateManualUploadOpen||n.updateTestFirmwareOpen?(n.firmwareAdvancedOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchOpen=!1,n.firmwareTopologySwitchConfirmed=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,be(),De()):n.firmwareAdvancedOpen=!0,m();return}if(d==="toggle-firmware-connection-switch"){n.firmwareConnectionSwitchOpen=!n.firmwareConnectionSwitchOpen,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareConnectionSwitchOpen&&(n.firmwareAdvancedOpen=!0,n.firmwareTopologySwitchOpen=!1,n.firmwareTopologySwitchConfirmed=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,be(),De()),m();return}if(d==="toggle-firmware-topology-switch"){n.firmwareTopologySwitchOpen=!n.firmwareTopologySwitchOpen,n.firmwareTopologySwitchConfirmed=!1,n.firmwareTopologySwitchOpen&&(n.firmwareAdvancedOpen=!0,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.updateManualUploadOpen=!1,n.updateTestFirmwareOpen=!1,be(),De()),m();return}if(d==="toggle-firmware-upload"){n.updateManualUploadOpen?(n.updateManualUploadOpen=!1,be()):(n.firmwareAdvancedOpen=!0,n.updateManualUploadOpen=!0,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchOpen=!1,n.firmwareTopologySwitchConfirmed=!1,n.updateTestFirmwareOpen=!1,De(),n.updateManualUploadError=""),m();return}if(d==="upload-firmware-file"){yh();return}if(d==="toggle-firmware-test"){n.updateTestFirmwareOpen?(n.updateTestFirmwareOpen=!1,De()):(n.firmwareAdvancedOpen=!0,n.updateTestFirmwareOpen=!0,n.updateManualUploadOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchOpen=!1,n.firmwareTopologySwitchConfirmed=!1,be(),n.updateTestFirmwareError=""),m();return}if(d==="install-firmware-test"){vh();return}if(d==="save-web-auth"){kh();return}if(d==="disable-web-auth"){Ch();return}}function th(e){const t=e.target.closest("[data-curve-key]");!t||!le()||(n.draggingCurveKey=t.dataset.curveKey||"",Sc(e.clientY))}function nh(e){typeof Qs=="function"&&Qs(e),n.draggingCurveKey&&Sc(e.clientY)}function oh(){if(!n.draggingCurveKey)return;const e=n.draggingCurveKey,t=Se(e,E(e));n.draggingCurveKey="",ni(e,t,"Curvepunt bijgewerkt.")}async function Qr(e,t){const o=L[e];n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",n.entities[e]={...n.entities[e]||{},state:t,value:t},m();try{const r=await fetch(`${z(o.domain,o.name,"set")}?option=${encodeURIComponent(t)}`,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);delete n.drafts[e],delete n.inputDrafts[e],n.controlNotice=`${o.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.entities.firmwareUpdateChannel={...n.entities.firmwareUpdateChannel||{},state:t,value:t},_a(t),m(),await ja(),n.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(n.controlNotice="Logger level bijgewerkt.",n.systemModal==="webserver-logs"&&xo()):e==="webServerLogHistoryEnabled"?(enabled?(n.webServerLogHistoryLoaded=!1,xo()):rr(),n.systemModal==="webserver-logs"&&m()):n.appView==="settings"?await D(pn(),"all"):await D(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Ze,...Yn],"state"),e==="strategy"&&n.appView!=="settings"&&await D(le(t)?de.map(a=>a.key):Pt,"state")}catch(r){n.controlError=`${o.name} kon niet worden bijgewerkt. ${r.message}`}finally{n.busyAction="",m()}}async function rh(e,t){const o=L[e];if(o){n.busyAction=`switch-${e}`,n.controlNotice="",n.controlError="",m();try{const r=t?"turn_on":"turn_off",a=await fetch(z(o.domain,o.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);n.entities[e]={...n.entities[e]||{},value:t,state:t},n.controlNotice=`${o.name} ${t?"ingeschakeld":"uitgeschakeld"}.`,n.busyAction="",n.appView==="overview"?await D([...ya,...Qe,"setupComplete",...Nt],"state"):n.appView==="settings"?(await D(pn(),"all"),Ya.includes(e)&&Hn()):await D(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...Ze,...Yn],"state"),m()}catch(r){n.controlError=`${o.name} aanpassen mislukt (${r.message}).`,m()}finally{n.busyAction="",m()}}}async function ah(){const e=ao();if(!e.canApply){n.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",m();return}n.busyAction="quickstart-flow-source",n.controlNotice="",n.controlError="",m();const t=async(o,r)=>{if(!v(o))return;const a=E(o);if(typeof r=="boolean"&&A(o)===r||typeof r!="boolean"&&String(a)===String(r))return;const i=await _n(o,r);n.entities[o]={...n.entities[o]||{},value:i,state:i}};try{e.requiresCic?(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),await t("flowSource","CIC"),n.quickStartCicFeedUrlDraft=null,n.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await t("qFlowSource",e.qFlowTarget),await t("flowSource","Outdoor unit"),n.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await D(Xe,"all")}catch(o){n.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${o.message}`}finally{n.busyAction="",m()}}async function ih(){n.busyAction="quickstart-flow-refresh",n.controlNotice="",n.controlError="",m();try{await D(Xe,"all");const e=ao();n.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){n.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{n.busyAction="",m()}}async function vc(e,t){const o=L[e];if(!o||!v(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");const r=await fetch(z(o.domain,o.name,t?"turn_on":"turn_off"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`)}async function sh(){const e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(o=>{n.optionalMissingEntities&&delete n.optionalMissingEntities[o],delete n.entities[o]}),await D(e,"all");const t=e.filter(o=>!n.entities[o]);if(t.length){const o=t.map(r=>L[r]?.name||r).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${o}.`)}}async function lh(){for(let e=0;e<40;e+=1){await new Promise(t=>window.setTimeout(t,1e3));try{await D(Xe,"state")}catch{return}if(!A("quickFlowTest")){n.busyAction!=="quickstart-flow-test-abort"&&(n.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),m();return}}}async function ch(){if(!ao().canRunFlowTest){n.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",m();return}n.busyAction="quickstart-flow-test-start",n.controlNotice="",n.controlError="",m();let t=!1;try{if(await sh(),!A("cm100Active")){const a=L.commissioningCm100Start,i=await fetch(z(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);t=!0}let o=A("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!o&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await D(["commissioningStatus","cm100Active"],"state"),o=A("cm100Active")&&String(E("commissioningStatus")||"").trim()==="CM100 READY";if(!o){const a=String(E("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await vc("quickFlowTest",!0),await D(Xe,"all");const r=String(E("commissioningStatus")||"").trim();if(!A("quickFlowTest"))throw new Error(r||"De waterpomptest kon niet worden gestart.");n.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",lh()}catch(o){if(t&&!A("quickFlowTest"))try{const r=L.commissioningCm100Stop;await fetch(z(r.domain,r.name,"press"),{method:"POST"})}catch{}n.controlError=`Waterpomptest starten mislukt. ${o.message}`}finally{n.busyAction="",m()}}async function uh(){n.busyAction="quickstart-flow-test-abort",n.controlNotice="",n.controlError="",m();try{await vc("quickFlowTest",!1),await D(Xe,"all"),n.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){n.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{n.busyAction="",m()}}async function dh(){const e=mi();if(!e.canApply){n.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",m();return}n.busyAction="quickstart-thermostat-source",n.controlNotice="",n.controlError="",m();const t=async(o,r)=>{if(!v(o))return;const a=E(o);if(typeof r=="boolean"&&A(o)===r||typeof r!="boolean"&&String(a)===String(r))return;const i=await _n(o,r);n.entities[o]={...n.entities[o]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await t("otEnabled",!0):e.selectedSource==="CIC"&&(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),n.quickStartCicFeedUrlDraft=null),await t("roomTempSource",e.selectedSource),await t("roomSetpointSource",e.selectedSource),n.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await D(Ln,"all")}catch(o){n.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${o.message}`}finally{n.busyAction="",m()}}async function ph(){const e=L.checkFirmwareUpdates;if(e){n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateCheckBusy=!0,n.controlError="",n.controlNotice="",m();try{await or("current build",{poll:!1,force:!0}),_a();const t=await fetch(z(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await ja(),n.controlNotice="Firmwarecontrole bijgewerkt."}catch(t){n.controlError=`Firmwarecontrole mislukte. ${t.message}`}finally{n.updateCheckBusy=!1,m()}}}async function gh(){try{await D(va,"all",{concurrency:Mt,forceMissing:!0}),n.updateModalOpen&&m()}catch{}}async function or(e,t={}){const o=L.firmwareUpdateTarget;if(!o||!v("firmwareUpdateTarget"))return!1;const r=String(e||"").trim();if(!r)return!1;if(!t.force&&String(E("firmwareUpdateTarget")||"").trim()===r)return!0;n.entities.firmwareUpdateTarget={...n.entities.firmwareUpdateTarget||{},state:r,value:r};const a=await fetch(`${z(o.domain,o.name,"set")}?option=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.poll!==!1?(_a(),await ja({expectedBuildLabel:t.expectedBuildLabel||""})):!0}async function mh(){const e=ae();if(e){n.firmwareAdvancedOpen=!1,n.updateManualUploadOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareTopologySwitchOpen=!1,n.updateTestFirmwareOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchConfirmed=!1,be(),De(),n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallTargetVersion=Rt(e),n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.updateInstallMode="normal",n.updateInstallTargetConnection="",n.updateInstallTargetTopology="",n.controlError="",n.controlNotice="",m();try{await or("current build",{poll:!1,force:!0}),n.updateInstallTargetVersion=Rt(ae()||{})||n.updateInstallTargetVersion,Xo();const t=L.installFirmwareUpdateTarget,o=t&&v("installFirmwareUpdateTarget")?z(t.domain,t.name,"press"):z("update","Firmware Update","install"),r=await fetch(o,{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);await no({initialDelayMs:Jn,pollDelayMs:zo})?(n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ne()||n.updateInstallTargetVersion,n.controlNotice=""):n.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(t){n.controlError=`OTA-update kon niet worden gestart. ${t.message}`}finally{eo(),m()}}}async function hh(){const e=Ma(),t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!n.firmwareConnectionSwitchConfirmed){n.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",m();return}n.updateManualUploadOpen=!1,n.firmwareTopologySwitchOpen=!1,n.firmwareTopologySwitchConfirmed=!1,be(),n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallMode="connection-switch",n.updateInstallTargetConnection=e.targetConnection,n.updateInstallTargetTopology=Z(),n.updateInstallTargetVersion=ne()||"",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.controlError="",n.controlNotice="",m();try{if(!await or("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");n.updateInstallTargetVersion=Rt(ae()||{})||ne()||"",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,m(),Xo();const r=await fetch(z(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(await no({initialDelayMs:Jn,pollDelayMs:zo}))n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ne()||n.updateInstallTargetVersion||"",n.firmwareConnectionSwitchConfirmed=!1,n.controlNotice="";else{const i=Ie(e.targetConnection);n.controlNotice=`Verbindingswissel naar ${i} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(o){n.controlError=`Verbindingswissel kon niet worden gestart. ${o.message}`}finally{eo(),m()}}}async function fh(){const e=Pa(),t=L.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!n.firmwareTopologySwitchConfirmed){n.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",m();return}n.updateManualUploadOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchOpen=!1,n.firmwareTopologySwitchConfirmed=!1,be(),n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallMode="topology-switch",n.updateInstallTargetConnection=e.targetConnection,n.updateInstallTargetTopology=e.targetTopology,n.updateInstallTargetVersion=ne()||"",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.controlError="",n.controlNotice="",m();try{if(!await or("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");n.updateInstallTargetVersion=Rt(ae()||{})||ne()||"",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,m(),Xo();const r=await fetch(z(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(await no({initialDelayMs:Jn,pollDelayMs:zo}))n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ne()||n.updateInstallTargetVersion||"",n.firmwareTopologySwitchConfirmed=!1,n.controlNotice="";else{const i=In(e.targetTopology);n.controlNotice=`Opstellingswissel naar ${i} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(o){n.controlError=`Opstellingswissel kon niet worden gestart. ${o.message}`}finally{eo(),m()}}}async function bh(e,t){const o=Na(e,t);if(!o)throw new Error("Geen geldig PR-target gevonden.");const r=await fetch(o.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(r.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!r.ok)throw new Error(`GitHub API gaf HTTP ${r.status}`);const a=await r.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(g=>g&&g.name===t.otaFileName),c=i.find(g=>g&&g.name===t.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${t.label}.`);if(!c||!c.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${t.label}.`);const d=String(a.name||a.tag_name||`PR ${e}`).trim(),u=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:c.browser_download_url,label:u?`${d} \xB7 ${u.replace("T"," ").replace("Z"," UTC")}`:d}}async function bs(e,t){if(!v(e))throw new Error(`${L[e]?.name||e} is niet beschikbaar op deze firmware.`);const o=await _n(e,t);n.entities[e]={...n.entities[e]||{},state:o,value:o}}async function vh(){const e=Bn(),t=Yo(),o=L.installFirmwareTestOta;if(!e){n.updateTestFirmwareError="Vul een geldig PR-nummer in.",m();return}if(!t.available){n.updateTestFirmwareError=t.error||"Dit firmwaretarget wordt niet herkend.",m();return}if(!n.updateTestFirmwareConfirmed){n.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",m();return}if(!o||!v("installFirmwareTestOta")){n.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",m();return}n.updateManualUploadOpen=!1,n.firmwareConnectionSwitchOpen=!1,n.firmwareConnectionSwitchConfirmed=!1,n.firmwareTopologySwitchOpen=!1,n.firmwareTopologySwitchConfirmed=!1,be(),n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallTargetVersion="",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.updateInstallMode="test-firmware",n.updateInstallTargetConnection="",n.updateInstallTargetTopology="",n.controlError="",n.controlNotice="",n.updateTestFirmwareError="",n.updateTestFirmwareBuild=null,m();let r=!1;try{const a=await bh(e,t);n.updateTestFirmwareBuild=a.label,m(),await bs("firmwareTestOtaUrl",a.otaUrl),await bs("firmwareTestOtaMd5Url",a.md5Url),r=!0,Xo();const i=await fetch(z(o.domain,o.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);await no({initialDelayMs:Jn,pollDelayMs:zo})?(n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ne()||`PR ${e}`,n.updateTestFirmwareOpen=!1,De(),n.controlNotice=""):n.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){r&&ac(a.message)?n.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:n.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{eo(),m()}}async function yh(){const e=n.updateManualUploadFile;if(!e){n.updateManualUploadError="Kies eerst een firmwarebestand.",m();return}n.updateInstallCompleted=!1,n.updateInstallCompletedVersion="",n.updateInstallBusy=!0,n.updateInstallTargetVersion=ne()||"",n.updateInstallPhaseHint="starting",n.updateInstallProgressHint=0,n.updateInstallMode="",n.updateInstallTargetConnection="",n.updateInstallTargetTopology="",n.controlError="",n.controlNotice="",n.updateManualUploadError="",m();try{const t=new FormData;t.append("update",e,e.name||"firmware.bin");const o=await fetch("/update",{method:"POST",body:t});if(!o.ok)throw new Error(`HTTP ${o.status}`);n.updateManualUploadOpen=!1,be(),await no()?(n.updateInstallCompleted=!0,n.updateInstallCompletedVersion=ne()||n.updateInstallTargetVersion||"",n.controlNotice=""):n.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(t){n.updateManualUploadError=`Handmatige upload mislukte. ${t.message}`}finally{eo(),m()}}async function ni(e,t,o=""){const r=L[e],a=Se(e,t);n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",n.inputDrafts[e]=String(t??""),n.drafts[e]=a,m();try{const i=await fetch(`${z(r.domain,r.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete n.drafts[e],delete n.inputDrafts[e],n.controlNotice=o||`${r.name} bijgewerkt.`,await D(n.appView==="settings"?pn():[...new Set([e,"setupComplete","strategy",...Ze,...Yn])],"state")}catch(i){n.inputDrafts[e]=String(a).replace(".",","),n.controlError=`${r.name} kon niet worden bijgewerkt. ${i.message}`}finally{n.busyAction="",m()}}async function wh(e,t){const o=L[e],r=dn(t);n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",m();try{const a=await fetch(`${z(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);n.controlNotice=`${o.name} bijgewerkt.`,await D(n.appView==="settings"?pn():[e,"setupComplete"],"state")}catch(a){n.controlError=`${o.name} kon niet worden bijgewerkt. ${a.message}`}finally{n.busyAction="",m()}}async function Sh(e,t){const o=L[e],r=String(t||"").trim();n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",n.inputDrafts[e]=String(t??""),n.drafts[e]=r,m();try{const a=await fetch(`${z(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);n.entities[e]={...n.entities[e]||{},value:r,state:r},delete n.drafts[e],delete n.inputDrafts[e],n.controlNotice=`${o.name} bijgewerkt.`,await D(n.appView==="settings"?pn():[e,"setupComplete"],"state")}catch(a){n.inputDrafts[e]=r,n.controlError=`${o.name} kon niet worden bijgewerkt. ${a.message}`}finally{n.busyAction="",m()}}async function Yr(e,t){const o=L[e],r=ot(t)||xn,a=await fetch(`${z(o.domain,o.name,"set")}?value=${encodeURIComponent(r)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n.entities[e]={...n.entities[e]||{},value:r,state:r},r}async function yc(e,t){const o=L[e],r=t?"turn_on":"turn_off",a=await fetch(z(o.domain,o.name,r),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n.entities[e]={...n.entities[e]||{},value:t,state:t},t}async function wc(){await D([...new Set([...ya,...Qe,"setupComplete",...Nt])],"state")}async function qh(e,t){const o=L[e],r=ot(t);n.busyAction=`save-${e}`,n.controlNotice="",n.controlError="",m();try{await Yr(e,r),n.controlNotice=`${o.name} bijgewerkt.`,await D(n.appView==="settings"?pn():[e,"setupComplete","openquattEnabled"],"state")}catch(a){n.controlError=`${o.name} kon niet worden bijgewerkt. ${a.message}`}finally{n.busyAction="",m()}}async function kh(){const e=n.authStatus||{},t=e.enabled===!0,o=e.setup_window_active===!0,r=String(n.authDraftCurrentPassword||""),a=String(n.authDraftUsername||"").trim(),i=String(n.authDraftNewPassword||""),l=String(n.authDraftConfirmPassword||"");if(!a||!i){n.authError="Vul een gebruikersnaam en wachtwoord in.",m();return}if(i!==l){n.authError="De twee wachtwoorden zijn niet gelijk.",m();return}if(t&&!r){n.authError="Vul je huidige wachtwoord in.",m();return}if(!t&&!o){n.authError="Houd de herstelknop 5 seconden vast.",m();return}if(!e.csrf_token){n.authError="Logingegevens laden nog. Probeer het zo opnieuw.",m();return}n.authBusy=!0,n.authError="",n.authNotice="",m();try{const c=new URLSearchParams;c.set("csrf_token",e.csrf_token),c.set("current_password",r),c.set("new_username",a),c.set("new_password",i);const d=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:c.toString()}),u=await d.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!d.ok||!u.ok)throw new Error(u.error||`HTTP ${d.status}`);await mn({force:!0}),n.authDraftCurrentPassword="",n.authDraftNewPassword="",n.authDraftConfirmPassword="",n.authDraftUsername=String(n.authStatus?.username||a).trim(),n.authNotice=t?"Login aangepast.":"Login staat nu aan.",n.authError="",m()}catch(c){n.authError=`Opslaan is mislukt. ${c.message}`,m()}finally{n.authBusy=!1,m()}}async function Ch(){const e=n.authStatus||{};if(!e.enabled){n.authNotice="Login staat al uit.",n.authError="",m();return}const t=String(n.authDraftCurrentPassword||"");if(!t){n.authError="Vul je huidige wachtwoord in.",m();return}if(!e.csrf_token){n.authError="Logingegevens laden nog. Probeer het zo opnieuw.",m();return}n.authBusy=!0,n.authError="",n.authNotice="",m();try{const o=new URLSearchParams;o.set("csrf_token",e.csrf_token),o.set("current_password",t);const r=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:o.toString()}),a=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!a.ok)throw new Error(a.error||`HTTP ${r.status}`);await mn({force:!0}),n.authDraftCurrentPassword="",n.authDraftNewPassword="",n.authDraftConfirmPassword="",n.authDraftUsername="",n.authNotice="Login staat nu uit.",n.authError="",m()}catch(o){n.authError=`Uitzetten is mislukt. ${o.message}`,m()}finally{n.authBusy=!1,m()}}async function Hr(e){const t=ot(e);if(e&&!t){n.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",m();return}if(t&&!v("openquattResumeAt")){n.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",m();return}n.busyAction="openquatt-regulation",n.controlNotice="",n.controlError="",m();let o=!1;try{v("openquattResumeAt")&&(await Yr("openquattResumeAt",t||xn),o=!!t),await yc("openquattEnabled",!1),n.pauseResumeDraft=t?jr(t):"",n.systemModal="",n.controlNotice=t?`Openquatt regeling is tijdelijk uitgeschakeld tot ${Qa(t)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await wc()}catch(r){if(o&&v("openquattResumeAt"))try{await Yr("openquattResumeAt",xn)}catch{}n.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${r.message}`}finally{n.busyAction="",m()}}async function Th(){n.busyAction="openquatt-regulation",n.controlNotice="",n.controlError="",m();try{await yc("openquattEnabled",!0),n.pauseResumeDraft="",n.systemModal="",n.controlNotice="Openquatt regeling is weer actief.",await wc()}catch(e){n.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{n.busyAction="",m()}}async function Eh(e){const t=L[e];n.busyAction=e,n.controlError="",n.controlNotice="",m();try{const o=await fetch(z(t.domain,t.name,"press"),{method:"POST"});if(!o.ok)throw new Error(`HTTP ${o.status}`);n.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await D(["setupComplete"],"state"),e==="reset"&&(n.currentStep=Ko[0].id,n.quickStartModalMode="wizard",n.quickStartModalOpen=!0),n.quickStartModalOpen=e!=="apply",At("overview",{syncMode:"replace"}),re({forceFast:!0})}catch(o){n.controlError=`Actie mislukt voor "${t.name}". ${o.message}`}finally{n.busyAction="",m()}}function $h(){window.requestAnimationFrame(()=>{if(!n.root||n.systemModal!=="service-task-hp-water-calibration")return;const e=n.root.querySelector("[data-oq-service-task-scroller]"),t=n.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!t)return;const o=e.getBoundingClientRect(),r=t.getBoundingClientRect(),a=e.scrollTop+r.top-o.top-24;e.scrollTop=Math.max(0,a)})}async function Qt(e,t={}){const o=L[e];if(o){n.busyAction=e,n.controlError="",n.controlNotice="",m();try{const r=await fetch(z(o.domain,o.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||tl.has(e)||(Eo(),n.systemModal=""),n.controlNotice=t.successNotice||`${o.name} gestart.`,t.reconnectMode&&Va(t.reconnectMode),Array.isArray(t.refreshKeys)&&t.refreshKeys.length){const i=Number(t.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await D(t.refreshKeys,"state")}}catch(r){e==="commissioningCm100Start"?(n.pendingCommissioningCm100Start=!1,n.commissioningTaskLock=""):e==="boilerPowerTestStart"?(n.pendingBoilerPowerTestStart=!1,n.commissioningTaskLock=""):e==="flowAutotuneStart"?(n.pendingFlowAutotuneStart=!1,n.commissioningTaskLock=""):e==="airPurgeStart"?(n.pendingAirPurgeStart=!1,n.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(n.pendingHpWaterCalibrationStart=!1,n.commissioningTaskLock=""):e==="manualFlowStart"?(n.pendingManualFlowStart=!1,n.commissioningTaskLock=""):e==="manualHpStart"&&(n.pendingManualHpStart=!1,n.commissioningTaskLock=""),n.controlError=`${t.errorPrefix||`Actie mislukt voor "${o.name}"`}. ${r.message}`}finally{n.busyAction="",m(),e==="hpWaterCalibrationApply"&&$h()}}}function Sc(e){const t=n.root?n.root.querySelector(".oq-helper-curve-svg"):null;if(!t||!n.draggingCurveKey)return;const o=t.getBoundingClientRect(),r=22,a=180,i=(e-o.top)/o.height*240,c=70-(Math.min(r+a,Math.max(r,i))-r)/a*50,d=Se(n.draggingCurveKey,c);String(E(n.draggingCurveKey))!==String(d)&&(n.drafts[n.draggingCurveKey]=d,m())}function oo({key:e,value:t,meta:o,controlClass:r,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
      <label class="${r}">
        <input
          class="${a}"
          type="number"
          data-oq-field="${s(e)}"
          min="${o.min}"
          max="${o.max}"
          step="${o.step}"
          value="${s(t)}"
          ${i}
          ${n.loadingEntities?"disabled":""}
        >
        ${l}
      </label>
    `}function Ah(){const e=[];e.push(le()?"Stooklijn":"Power House");const t=String(E(le()?"curveControlProfile":"phResponseProfile")||"").trim();t&&e.push(`profiel ${t}`);const o=String(E("flowControlMode")||"").trim();return o&&e.push(`flow ${o==="Manual PWM"?"handmatig":"setpoint"}`),o==="Manual PWM"&&v("manualIpwm")?e.push(`iPWM ${j("manualIpwm")}`):v("flowSetpoint")&&e.push(`flow ${j("flowSetpoint")}`),v("dayMax")&&e.push(`dag ${j("dayMax")}`),v("silentMax")&&e.push(`silent ${j("silentMax")}`),v("maxWater")&&e.push(`max water ${j("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function v(e){return!!n.entities[e]}function B(e,t="\u2014"){const o=n.entities[e];if(!o)return t;if(typeof o.state=="string"&&o.state.trim()!=="")return o.state;const r=o.value??o.state;return r==null||r===""?t:typeof r=="boolean"?r?"Aan":"Uit":typeof r=="number"&&!Number.isNaN(r)&&o.uom?`${r} ${o.uom}`:String(r)}function M(e){const t=Number(E(e));return Number.isNaN(t)?NaN:t}function qc(e){const t=String(e||"").toLowerCase();return t.includes("cop")||t.includes("eer")}function kc(e){const t=String(e||"");if(t==="totalEer"){const o=M("totalCoolingPower"),r=M("coolingPowerInput"),a=Number.isNaN(r)?M("totalPower"):r;return!Number.isNaN(o)&&!Number.isNaN(a)&&a>=5?o/a:NaN}if(t==="totalCop"){const o=M("totalHeat"),r=M("heatingPowerInput"),a=Number.isNaN(r)?M("totalPower"):r;return!Number.isNaN(o)&&!Number.isNaN(a)&&a>=5?o/a:NaN}return NaN}function Nn(e,t=""){const o=String(n.entities[e]?.uom||"").trim();return o||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||t}function We(e){const t=n.entities[e],o=kc(e);if(!t)return Number.isNaN(o)?"\u2014":I(o,1,Nn(e));const r=M(e);if(Number.isNaN(r))return Number.isNaN(o)?B(e):I(o,1,Nn(e));const a=r>0||Number.isNaN(o)?r:o,i=qc(e)?1:0;return I(a,i,Nn(e))}function A(e){const t=n.entities[e];if(!t)return!1;if(typeof t.value=="boolean")return t.value;const o=String(t.state??t.value??"").toLowerCase();return o==="on"||o==="true"||o==="1"}function bn(){return!v("trendHistoryEnabled")||A("trendHistoryEnabled")}function Cc(){const e=n.entities.setupComplete;if(!e)return null;const t=String(e.state??e.value??"").trim().toLowerCase();return!t||t==="unknown"||t==="unavailable"?null:t==="on"||t==="true"||t==="1"?!0:t==="off"||t==="false"||t==="0"?!1:null}function Hh(){return`
      <div class="oq-helper-app-nav">
        ${ga.filter(e=>e.id!=="diagnosis"||bn()).map(e=>`
          <button
            class="oq-helper-app-tab ${n.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${ma(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
          </button>
        `).join("")}
      </div>
    `}function Mh(e=n.appView){return ga.find(t=>t.id===e)?.label||"OpenQuatt"}function vs(){if(typeof document>"u")return;if(n.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}const e=Mh();document.title=`${e} \u2022 OpenQuatt`}function ys(){if(typeof document>"u")return;if(n.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");const e=n.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}const ws="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",Ph="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",Tc=250;function Ec(){if(typeof window>"u")return[];const e=window.__OQ_DEV_WEBSERVER_LOGS__,t=typeof e=="function"?e():e;return Array.isArray(t)?t.map(o=>String(o||"")).filter(o=>o.trim()!==""):[]}function vn(){return typeof window>"u"?!1:Ec().length>0}function Nh(){return`${_e()}/events`}function Rh(){return`${_e()}/openquatt/logs/recent`}function Fo(){const e=n.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;const t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function $c(){return n.nativeOpen?"Niet beschikbaar":vn()?"Voorbeeld":n.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function Lh(e){const t=Math.max(0,Math.floor(Number(e)/1e3)),o=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return`${String(o).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Ac(e){const t=Number(e)||0;if(t>9466848e5){const o=e instanceof Date?e:new Date(t),r={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(o)}catch{return o.toLocaleString("nl-NL",r)}}return Lh(t)}function Oh(e){const t=Number(e)||0;if(t>9466848e5)return new Date(t).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});const o=Math.max(0,Math.floor(t/1e3)),r=Math.floor(o/3600),a=Math.floor(o%3600/60),i=o%60;return`Sinds opstart: ${r}u ${a}m ${i}s`}function Fh(){return n.nativeOpen?"Niet beschikbaar":vn()?Fo()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":Fo()?"Buffer aan":"Buffer uit"}function xh(){return Fo()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function oi(){return n.entities?.debugLevel||null}function Hc(e=oi()){const t=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return t.length?t:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function Dh(e=oi()){const t=String(e?.value??e?.state??"").trim(),o=Hc(e);return o.includes(t)?t:o.includes("INFO")?"INFO":o[0]||""}function Mc(e,t=null){if(!e||!t)return!1;const o=Number(e.seq),r=Number(t.seq);if(Number.isFinite(o)&&Number.isFinite(r)&&o===r)return!0;const a=String(e.raw??e.text??"").trim(),i=String(t.raw??t.text??"").trim();if(!a||a!==i)return!1;const l=Number(e.receivedAt??e.ts??0),c=Number(t.receivedAt??t.ts??0);return Math.abs(l-c)<=2e3}function Ih(e,t){const o=Number(e.receivedAt??e.ts??0),r=Number(t.receivedAt??t.ts??0);if(o!==r)return o-r;const a=Number(e.seq??0),i=Number(t.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(t.raw??""))}function Pc(e,{prepend:t=!1}={}){if(!Array.isArray(e)||e.length===0)return;const o=t?[...e,...n.webServerLogEntries]:[...n.webServerLogEntries,...e];o.sort(Ih);const r=[];for(const a of o){const i=r[r.length-1]||null;Mc(a,i)||r.push(a)}n.webServerLogEntries=r.slice(-Tc)}function ri(e,t={}){const o=lf(e).trimEnd(),r=Number(t.receivedAt),a=Number(t.seq);return{raw:e,text:o,tone:cf(e),receivedAt:Number.isFinite(r)?r:Date.now(),seq:Number.isFinite(a)?a:void 0}}function Wh(e,t){const r=Math.max(0,t-e-1)*9e4;return Date.now()-r}function Bh(){const e=Ec(),t=e.length;return e.map((o,r)=>ri(o,{receivedAt:Wh(r,t),seq:r+1}))}function Vh(){const e=ar();e&&(e.scrollTop=e.scrollHeight)}function wt(){const e=ar();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ai(e)}:null}function _h(e){if(!e)return;const t=ar();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const o=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,o)}function bt(e,t=!0){if(!e)return;const o=Number(n.webServerLogScrollRestoreToken||0)+1;n.webServerLogScrollRestoreToken=o;const r=()=>{n.webServerLogScrollRestoreToken!==o||n.systemModal!=="webserver-logs"||_h(e)};if(t){window.requestAnimationFrame(r);return}r()}function Nc(){return n.root?n.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}function jh(){const e=Nc();return e?{scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ai(e)}:null}function Kh(e){if(!e)return;const t=Nc();if(!t)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const o=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,o)}function Ss(e,t=!0){if(!e)return;const o=Number(n.cm100CommissioningScrollRestoreToken||0)+1;n.cm100CommissioningScrollRestoreToken=o;const r=()=>{n.cm100CommissioningScrollRestoreToken!==o||n.systemModal!=="cm100-commissioning"||Kh(e)};if(t){window.requestAnimationFrame(r);return}r()}function Rc(){return n.root?n.root.querySelector("[data-oq-service-task-scroller]"):null}function Uh(){const e=Rc();return e?{scrollTop:e.scrollTop}:null}function zh(e){if(!e)return;const t=Rc();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function qs(e,t=!0){if(!e)return;const o=Number(n.serviceTaskModalScrollRestoreToken||0)+1;n.serviceTaskModalScrollRestoreToken=o;const r=()=>{n.serviceTaskModalScrollRestoreToken!==o||!String(n.systemModal||"").startsWith("service-task-")||zh(e)};if(t){window.requestAnimationFrame(r);return}r()}function Lc(){return n.root?n.root.querySelector("[data-oq-history-storage-scroller]"):null}function Gh(){const e=Lc();return e?{scrollTop:e.scrollTop}:null}function Qh(e){if(!e)return;const t=Lc();t&&(t.scrollTop=Math.max(0,e.scrollTop))}function ks(e,t=!0){if(!e)return;const o=Number(n.historyStorageModalScrollRestoreToken||0)+1;n.historyStorageModalScrollRestoreToken=o;const r=()=>{n.historyStorageModalScrollRestoreToken!==o||n.systemModal!=="history-storage"||Qh(e)};if(t){window.requestAnimationFrame(r);return}r()}async function xo(e={}){if(n.nativeOpen||typeof window.fetch!="function")return;const t=e.scrollState||wt(),o=Number(n.webServerLogHistoryRequestToken||0)+1;n.webServerLogHistoryRequestToken=o,n.webServerLogHistoryLoading=!0,n.webServerLogHistoryError="";try{const r=await window.fetch(Rh(),{headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.json();if(n.systemModal!=="webserver-logs"||n.webServerLogHistoryRequestToken!==o)return;const i=Jh(a);n.webServerLogHistoryLoaded=!0,i.length>0&&(Pc(i,{prepend:!0}),n.webServerLogRecentTail=i.slice(-4).map(l=>String(l.raw??l.text??"")),n.webServerLogRecentAnchorAt=Date.now())}catch(r){n.systemModal==="webserver-logs"&&n.webServerLogHistoryRequestToken===o&&(n.webServerLogHistoryError=r instanceof Error?r.message:"Recente logs konden niet worden opgehaald.")}finally{n.webServerLogHistoryRequestToken===o&&(n.webServerLogHistoryLoading=!1),n.systemModal==="webserver-logs"&&n.webServerLogHistoryRequestToken===o&&(m(),bt(t))}}function Yh(e,t=0){if(!e||typeof e!="object")return null;const o=String(e.raw??"").trim()||String(e.message??"").trim();return o?ri(o,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??t)}):null}function Jh(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((o,r)=>Yh(o,r+1)).filter(o=>o!==null)}function Zh(e){if(!e||!Array.isArray(n.webServerLogRecentTail)||n.webServerLogRecentTail.length===0||Date.now()-Number(n.webServerLogRecentAnchorAt||0)>2500)return!1;const o=String(e.raw??e.text??"").trim();return o?n.webServerLogRecentTail.includes(o):!1}function Xh(e,t=n.webServerLogEntries){return!e||!Array.isArray(t)||t.length===0?!1:t.some(o=>Mc(e,o))}function ef(){vn()&&n.webServerLogEntries.length===0&&(n.webServerLogEntries=Bh()),n.webServerLogCopyMessage="",n.webServerLogCopyError="",n.systemModal="webserver-logs",m(),D(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(n.systemModal!=="webserver-logs")return;const e=wt();m(),bt(e)}),Vh(),(!n.webServerLogHistoryLoaded||n.webServerLogEntries.length===0)&&xo()}function rr(){n.webServerLogEntries=[],n.webServerLogError="",n.webServerLogHistoryError="",n.webServerLogHistoryLoading=!1,n.webServerLogHistoryLoaded=!1,n.webServerLogScrollRestoreToken=Number(n.webServerLogScrollRestoreToken||0)+1,n.webServerLogCopyMessage="",n.webServerLogCopyError="",n.webServerLogHistoryRequestToken+=1,n.webServerLogRecentTail=[],n.webServerLogRecentAnchorAt=0,n.systemModal==="webserver-logs"&&m()}function Cs(){const e=wt();Ye(),n.webServerLogEnabled=null,n.webServerLogConnected=!1,rr(),n.systemModal==="webserver-logs"&&xo({scrollState:e})}function Ts(){if(vn()){Ye();return}if(!(n.mounted&&!n.nativeOpen&&n.systemModal==="webserver-logs")){Ye();return}if(n.webServerLogEnabled===!1){Ye();return}n.webServerLogSource||tf()}function tf(){if(vn()){n.webServerLogEnabled=!0,n.webServerLogConnected=!1,n.webServerLogError="",m();return}if(typeof window.EventSource!="function"){n.webServerLogEnabled=!1,n.webServerLogConnected=!1,n.webServerLogError="Deze browser ondersteunt geen live logstream.",m();return}try{const e=new window.EventSource(Nh());n.webServerLogSource=e,e.addEventListener("open",nf),e.addEventListener("ping",of),e.addEventListener("log",af),e.onerror=rf}catch(e){n.webServerLogEnabled=!1,n.webServerLogConnected=!1,n.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",Ye(),m()}}function Ye(){const e=n.webServerLogSource;if(e)try{e.close()}catch{}n.webServerLogSource=null,n.webServerLogConnected=!1}function nf(){if(!n.webServerLogSource||n.nativeOpen)return;const e=n.systemModal==="webserver-logs"?wt():null;n.webServerLogEnabled=!0,n.webServerLogConnected=!0,n.webServerLogError="",m(),bt(e)}function of(){if(!n.webServerLogSource||n.nativeOpen)return;const e=n.systemModal==="webserver-logs"?wt():null;n.webServerLogEnabled=!0,n.webServerLogConnected||(n.webServerLogConnected=!0,n.webServerLogError="",m(),bt(e))}function rf(){if(!n.webServerLogSource)return;const e=n.systemModal==="webserver-logs"?wt():null;n.webServerLogEnabled=!1,n.webServerLogConnected=!1,n.webServerLogError="De live logstream kon niet worden geopend.",Ye(),m(),bt(e)}function af(e){if(!n.webServerLogSource||!e||typeof e.data!="string")return;const t=wt(),o=sf(e.data);if(!o)return;const r=o.split(/\r?\n/).filter(d=>d.trim()!=="");if(r.length===0)return;const i=r.map(d=>ri(d)).filter(d=>!Zh(d)&&!Xh(d));if(i.length===0)return;Pc(i);const l=df(),c=ar();uf(l),pf(i,l),n.webServerLogEnabled=!0,c&&t&&bt(t,!1)}function sf(e){const t=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!t)return"";const o=t.trim();if(o.startsWith("{")&&o.endsWith("}")||o.startsWith("[")&&o.endsWith("]"))try{const r=JSON.parse(o),a=typeof r=="string"?r:r?.message??r?.msg??r?.text??r?.data??r?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return t}function lf(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function cf(e){const t=String(e??""),o=Array.from(t.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=o.length-1;i>=0;i-=1){const l=o[i][1].split(";").map(c=>Number(c)).filter(c=>Number.isFinite(c));for(let c=l.length-1;c>=0;c-=1){const d=l[c];if(d===31||d===91)return"error";if(d===33||d===93)return"warning";if(d===32||d===92)return"info";if(d===36||d===96||d===34||d===35)return"debug";if(d===37||d===90||d===38||d===97)return"verbose"}}const r=t.match(/\[(E|W|I|D|V|VV)\]/i);if(!r)return"plain";const a=r[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function uf(e){for(;n.webServerLogEntries.length>Tc;)n.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function df(){return n.root?n.root.querySelector("[data-oq-webserver-log-output]"):null}function ar(){return n.root?n.root.querySelector("[data-oq-webserver-log-scroller]"):null}function ai(e){return e?e.scrollHeight-e.scrollTop-e.clientHeight<48:!1}function pf(e,t){if(!(!t||e.length===0)){t.dataset.webServerLogEmpty==="true"&&(t.dataset.webServerLogEmpty="false",t.innerHTML="");for(const o of e)t.insertAdjacentHTML("beforeend",Oc(o))}}function Oc(e){const t=Ac(e.receivedAt),o=Oh(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(o)}">${s(t)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function gf(e=n.webServerLogEntries){return e.length?e.map(t=>Oc(t)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function mf(){const e=[];return n.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),n.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(n.webServerLogCopyMessage)}</span>
      </div>
    `),n.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.webServerLogCopyError)}</p>`),n.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.webServerLogHistoryError)}</p>`),n.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(n.webServerLogError)}</p>`),e.length?e.join(""):""}function hf(){const e=Fo(),t=n.loadingEntities||n.busyAction==="switch-webServerLogHistoryEnabled",o=Fh(),r=xh(),a=ff();return`
    <div class="oq-webserver-log-history-shell">
      <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="webserverLogHistory">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">RAM log history</p>
          <strong class="oq-settings-system-row-value">${s(o)}</strong>
          <p class="oq-settings-system-row-note">${s(r)}</p>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="webServerLogHistoryEnabled"
          data-control-state="${e?"off":"on"}"
          aria-pressed="${e?"true":"false"}"
          ${t?"disabled":""}
        >
          ${e?"Uitschakelen":"Inschakelen"}
        </button>
      </div>
      ${a}
    </div>
  `}function ff(){const e=oi();if(!e)return"";const t=Hc(e),o=Dh(e),r=n.loadingEntities||n.busyAction==="save-debugLevel";return`
    <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="debugLevel">
      <div class="oq-settings-system-row-copy">
        <p class="oq-settings-system-row-label">Logger level</p>
        <strong class="oq-settings-system-row-value">${s(o||"Onbekend")}</strong>
        <p class="oq-settings-system-row-note">Past het runtime logniveau aan voor nieuwe firmwaremeldingen.</p>
      </div>
      <label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${r?"disabled":""}>
          ${t.map(a=>`<option value="${s(a)}" ${a===o?"selected":""}>${s(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    </div>
  `}function bf(){return n.webServerLogEntries.map(e=>{const t=String(e.raw??e.text??"").trimEnd();return t.trim()?`${Ac(e.receivedAt)} ${t}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function vf(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();let o=!1;try{o=document.execCommand("copy")}finally{document.body.removeChild(t)}return o}async function yf(){const e=bf();if(n.webServerLogCopyMessage="",n.webServerLogCopyError="",!e){n.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",m();return}try{if(!await vf(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");n.webServerLogCopyMessage=`${n.webServerLogEntries.length} logregel${n.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(t){n.webServerLogCopyError=t instanceof Error?t.message:"Kopi\xEBren naar het klembord is niet gelukt."}n.systemModal==="webserver-logs"&&m()}function wf(){const e=vn();return`
    <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">OpenQuatt log</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde."}</p>
        ${hf()}
        ${mf()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${n.webServerLogEntries.length===0?"true":"false"}">
            ${gf()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${n.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `}function Be(){return n.debugRecordingDeviceStatus?Math.max(0,Number(n.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(n.debugRecordingSamples)?n.debugRecordingSamples.length:0}function je(e=n.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function ir(e=n.debugRecordingDeviceStatus){return je(e)&&e?.frozen===!0&&!e?.active}function Ht(e){const t=Math.max(0,Math.round(Number(e||0)/1e3)),o=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60;return o>0?`${o}u ${String(r).padStart(2,"0")}m`:r>0?`${r}m ${String(a).padStart(2,"0")}s`:`${a}s`}function Fc(){return n.debugRecordingDeviceStatus?Math.max(0,Number(n.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):xc()}function xc(){if(n.debugRecordingDeviceStatus)return Math.max(0,Number(n.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!n.debugRecordingStartedAt)return 0;const e=n.debugRecordingActive?Date.now():Number(n.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(n.debugRecordingStartedAt||e))}function sr(){return n.debugRecordingDeviceStatus&&n.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":ir()?"Rolling gestopt":n.debugRecordingActive&&je()?"Rolling actief":n.debugRecordingActive?"Bezig met opnemen":Be()>0?"Voltooid":"Niet gestart"}function ii(){return ir()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":n.debugRecordingActive&&je()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":n.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":Be()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":n.debugRecordingDeviceStatus&&n.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function Sf(){return ir()?"Gestopt":n.debugRecordingActive&&je()?`Rolling \xB7 ${Ht(Fc())}`:n.debugRecordingActive?`Loopt \xB7 ${Ht(Dc())}`:Be()>0?"Klaar":sr()}function qf(){const e=Number(n.debugRecordingSelectedMinutes||15);return Ir.map(o=>Number(o.minutes)).includes(e)?e:Number(Ir[0]?.minutes||15)}function kf(e){n.debugRecordingActive||(n.debugRecordingSelectedMinutes=Math.max(1,Number(e)||15),n.debugRecordingNotice="",n.debugRecordingError="",m())}function Dc(){return je()?0:n.debugRecordingDeviceStatus?Math.max(0,Number(n.debugRecordingDeviceStatus.remaining_s||0)*1e3):n.debugRecordingActive?Math.max(0,Number(n.debugRecordingEndsAt||0)-Date.now()):0}function Cf(){if(n.debugRecordingDeviceStatus){if(je()){const a=Math.max(1,Number(n.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,Be()/a*100))}const o=Math.max(1,Number(n.debugRecordingDeviceStatus.duration_s||0)),r=Math.max(0,Number(n.debugRecordingDeviceStatus.elapsed_s||0));return!n.debugRecordingActive&&Be()>0?100:Math.max(0,Math.min(100,r/o*100))}if(!n.debugRecordingActive||!n.debugRecordingStartedAt||!n.debugRecordingEndsAt)return Be()>0?100:0;const e=Math.max(1,Number(n.debugRecordingEndsAt)-Number(n.debugRecordingStartedAt)),t=Math.max(0,Date.now()-Number(n.debugRecordingStartedAt));return Math.max(0,Math.min(100,t/e*100))}function Ic(e=n.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function Tf(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}function Wc(e){if(e?.recording?.active)return;const t=Ic(e);if(t){n.debugRecordingAcknowledgedId=t;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",t)}catch{}}}function Bc(){const e=n.debugRecordingDeviceStatus,t=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&t===0)return"";const o=!!e.active;if(!o&&Ic(e)===n.debugRecordingAcknowledgedId)return"";const r=je(e),a=Ht(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=Ht(Math.max(0,Number(e.remaining_s||0))*1e3),l=o?r?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:r?"Rolling gestopt":"Debug klaar",c=o?r?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:r?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
    <button
      class="oq-debug-recording-header-status${o?" oq-debug-recording-header-status--active":" oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${s(c)}"
      title="${s(c)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${s(l)}</span>
    </button>
  `}function Ef(){if(!n.root)return;const e=n.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;const t=e.querySelector(".oq-settings-system-row-value"),o=e.querySelector(".oq-settings-system-row-note");t&&(t.textContent=sr()),o&&(o.textContent=ii())}function si(e){const t={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return t[e]||t.status}function $f(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${si(e)}</span>`}function ze(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${si(e)}</span>`}function Af(){return[...Jt]}function Hf(){const e=[];return Jt.forEach((t,o)=>{const r=n.entities?.[t]||{},a=String(r.uom??r.unit_of_measurement??"").trim();a&&e.push([o,a])}),e}function Mf(e){return Array.isArray(e)?e.map((t,o)=>t===null?null:[o,t]).filter(Boolean):[]}function lr(){n.debugRecordingTimer&&(window.clearTimeout(n.debugRecordingTimer),n.debugRecordingTimer=null)}function yn(){n.debugRecordingDevicePollTimer&&(window.clearTimeout(n.debugRecordingDevicePollTimer),n.debugRecordingDevicePollTimer=null)}function St(e){return`${_e()}/openquatt/debug-recording/${e}`}function wn(e){const t=e&&typeof e=="object"?e:{};n.debugRecordingDeviceStatus=t,n.debugRecordingActive=!!t.active,n.debugRecordingStartedAt=t.active||Number(t.sample_count||0)>0?Date.now()-Math.max(0,Number(t.elapsed_s||0)*1e3):0,n.debugRecordingEndsAt=t.active?Date.now()+Math.max(0,Number(t.remaining_s||0)*1e3):0,n.debugRecordingLastSampleAt=Number(t.sample_count||0)>0?Date.now():0}function li(){wn({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function Pf(){const e=await window.fetch(St("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return wn(t),t}function cr(e=2e3){yn(),n.debugRecordingActive&&(n.debugRecordingDevicePollTimer=window.setTimeout(()=>{ci({silent:!0})},Math.max(0,Number(n.systemModal==="debug-recording"?e:5e3)||0)))}async function ci(e={}){e.silent||(n.debugRecordingBusy=!0,n.debugRecordingError="",m());try{await Pf(),!n.debugRecordingActive&&e.silent&&(n.debugRecordingNotice="Debugopname is afgerond."),cr()}catch(t){li(),n.debugRecordingError=`Status kon niet worden opgehaald. ${t.message||String(t)}`}finally{e.silent||(n.debugRecordingBusy=!1),!e.silent||n.systemModal==="debug-recording"?m():(dg(),Ef())}}async function Vc(){const e=sc(Jt,"state");let t=null;for(let o=0;o<e.length;o+=1){const r=await window.fetch(St(`configure?reset=${o===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[o].body});if(!r.ok)throw new Error(`configuratie HTTP ${r.status}`);t=await r.json()}if(Number(t?.entity_field_count||0)!==Jt.length)throw new Error(`onvolledige debugset (${Number(t?.entity_field_count||0)}/${Jt.length})`);return t}async function Nf(e){const t=Math.max(1,Number(e)||15);lr(),yn(),n.debugRecordingBusy=!0,n.debugRecordingError="",n.debugRecordingNotice="",n.debugRecordingSamples=[],n.debugRecordingEvents=[],n.debugRecordingInitialValues=null,n.debugRecordingLastValues=null,n.debugRecordingDeviceBundle=null,n.debugRecordingLastSampleAt=0,n.debugRecordingSequence=0,m();try{await Vc();const o=await window.fetch(St(`start?duration_s=${encodeURIComponent(t*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!o.ok)throw new Error(`HTTP ${o.status}`);const r=await o.json();wn(r),cr()}catch(o){li(),n.debugRecordingError=`Debugopname kon niet worden gestart. ${o.message||String(o)}`}finally{n.debugRecordingBusy=!1,m()}}async function Rf(){lr(),yn(),n.debugRecordingBusy=!0,n.debugRecordingError="",n.debugRecordingNotice="",n.debugRecordingSamples=[],n.debugRecordingEvents=[],n.debugRecordingInitialValues=null,n.debugRecordingLastValues=null,n.debugRecordingDeviceBundle=null,n.debugRecordingLastSampleAt=0,n.debugRecordingSequence=0,m();try{await Vc();const e=await window.fetch(St("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();wn(t),cr()}catch(e){li(),n.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{n.debugRecordingBusy=!1,m()}}async function Lf(){const e=await window.fetch(St("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return wn(t),yn(),t}async function Of(){lr(),n.debugRecordingBusy=!0,n.debugRecordingError="",m();try{await Lf(),n.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){n.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{n.debugRecordingBusy=!1,m()}}async function Ff(e={}){lr(),yn(),n.debugRecordingBusy=!0,n.debugRecordingError="",m();try{const t=await window.fetch(St("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json();wn(o),n.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(t){n.debugRecordingError=`Debugopname kon niet worden gestopt. ${t.message||String(t)}`}finally{n.debugRecordingBusy=!1,m()}}function Es(e={}){const t=n.debugRecordingActive?Date.now():Number(n.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:n.debugRecordingStartedAt?new Date(Number(n.debugRecordingStartedAt)).toISOString():"",ended_at:t?new Date(t).toISOString():"",active:!!n.debugRecordingActive,duration_s:n.debugRecordingStartedAt?Math.round(Math.max(0,t-Number(n.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(Ld/1e3),sample_count:Be(),column_count:Jt.length,storage:"browser"},columns:Af(),units:Hf(),initial:Mf(n.debugRecordingInitialValues),samples:n.debugRecordingSamples||[],events:n.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function Do(e){return JSON.stringify(e)}function xf(){const e=Number(n.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([Do(Es())]).size}catch{return Do(Es()).length}}function Df(e){const t=Math.max(0,Number(e)||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${(t/1024).toFixed(1)} kB`:`${Math.round(t)} B`}function If(e,t){const o=new Blob([t],{type:"application/json"}),r=URL.createObjectURL(o),a=document.createElement("a");a.href=r,a.download=e,a.rel="noreferrer",document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Wf(e){const t=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),o=String(t).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${o}.oqdebug.json`}async function Bf(){if(Be()===0){n.debugRecordingError="Er is nog geen debugopname om te downloaden.",m();return}n.debugRecordingBusy=!0,n.debugRecordingError="";const e=n.debugRecordingActive&&je();m();try{const t=await window.fetch(St("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json();n.debugRecordingDeviceBundle=o,If(Wf(o),Do(o)),Wc(o),n.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{n.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{n.debugRecordingBusy=!1,m()}}async function Vf(){if(Be()===0){n.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",m();return}n.debugRecordingBusy=!0,n.debugRecordingError="";const e=n.debugRecordingActive&&je();m();try{const t=await window.fetch(St("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);const o=await t.json();if(n.debugRecordingDeviceBundle=o,!await pc(Do(o)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");Wc(o),n.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{n.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{n.debugRecordingBusy=!1,m()}}function _f(){const e=n.debugRecordingActive,t=je(),o=ir(),r=Be(),a=n.debugRecordingBusy,i=Df(xf()),l=Array.isArray(n.debugRecordingDeviceBundle?.events)?n.debugRecordingDeviceBundle.events.length:Array.isArray(n.debugRecordingEvents)?n.debugRecordingEvents.length:0,c=qf(),d=Dc(),u=Fc(),g=Cf(),b=r>0,f=`${g.toFixed(1)}%`,w=[{icon:"status",label:"Status",value:sr()},{icon:"clock",label:t?"Retentie":"Duur",value:Ht(t?u:xc())},{icon:"samples",label:"Samples",value:String(r)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:n.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],p=n.debugRecordingError?{kind:"error",icon:"alert",text:n.debugRecordingError}:n.debugRecordingNotice?{kind:"success",icon:"check",text:n.debugRecordingNotice}:null;return`
    <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">\xD7</button>
        </div>
        <p class="oq-helper-modal-copy">${s(ii())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${si("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(t?`Laatste ${Ht(u)} bewaard`:`Nog ${Ht(d)}`)}</span>
                <strong>${s(t?`${r}/${Number(n.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(g)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(f)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${w.map(h=>`
              <div class="oq-debug-recording-stat">
                <dt>${$f(h.icon)}${s(h.label)}</dt>
                <dd>${s(h.value)}</dd>
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
              ${Ir.map(h=>{const y=Number(h.minutes)===c;return`
                  <button
                    class="oq-debug-recording-segment${y?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${h.minutes}"
                    aria-pressed="${y?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(h.label)}
                  </button>
                `}).join("")}
            </div>
          </section>
        `}
        <div class="oq-debug-recording-actions">
          ${e&&t?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="freeze-debug-recording" ${a?"disabled":""}>${ze("stop")}Stop rolling</button>
          `:e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${a?"disabled":""}>${ze("stop")}Stop opname</button>
          `:o?`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||n.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${ze("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||n.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${ze("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||n.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${ze("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||n.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${ze("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!b||a?"disabled":""}>${ze("download")}${e&&t?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!b||a?"disabled":""}>${ze("copy")}${e&&t?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${p?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${p.kind}" role="status">
              ${ze(p.icon)}
              <span>${s(p.text)}</span>
            </p>
          `:""}
        </div>
      </section>
    </div>
  `}function Sn(e,t,o){return o?`
      <div class="oq-settings-info${n.settingsInfoOpen===e?" is-open":""}" data-oq-settings-info="${s(e)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${s(e)}"
          aria-label="${s(`Uitleg bij ${t}`)}"
          aria-expanded="${n.settingsInfoOpen===e?"true":"false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${n.settingsInfoOpen===e?"":"hidden"}>
          <p>${s(o)}</p>
        </div>
      </div>
    `:""}function ke(e,t,o,r,a="",i=""){return`<article class="oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(t)}</h3>${Sn(e,t,o)}</div><div class="oq-settings-field-control">${r}</div>${i}</article>`}function X(e,t,o,r,a=""){return ke(e,t,o,`<div class="oq-settings-static-value">${s(r)}</div>`,a)}function fe(e,t={}){const o=typeof t=="number"?{decimals:t}:t||{},r=n.entities[e];if(!r)return"\u2014";const a=Number(r.value);if(!Number.isNaN(a)){const c=Number.isInteger(a)?0:Number.isFinite(o.decimals)?o.decimals:1;let d=a.toFixed(Math.max(0,c));return o.trimTrailingZeros&&d.includes(".")&&(d=d.replace(/\.?0+$/,"")),`${d}${r.uom?` ${r.uom}`:""}`}const i=String(r.state??r.value??"").trim(),l=i.toLowerCase();return!i||l==="nan"||l==="unknown"||l==="unavailable"?"\u2014":i}function ur(e,t="\u2014"){const o=n.entities[e];if(!o)return t;const r=String(o.state??o.value??"").trim();return!r||r==="0"||r==="\u2014"?t:r}function rn(e,t="",o=2){const r=Number(e);return Number.isFinite(r)?`${r.toFixed(Math.max(0,o))}${t?` ${t}`:""}`:"\u2014"}function ue(e,t=2){return fe(e,{decimals:t})}function ui(e,t,o){const r=M(t),a=M(o);if(Number.isFinite(r)&&Number.isFinite(a))return r-a;const i=M(e);return Number.isFinite(i)?i:NaN}function $s(e,t){const o=M(e),r=M(t),a=Number.isNaN(o)?"Lvl \u2014":`Lvl ${Math.round(o)}`,i=Number.isNaN(r)?"\u2014 Hz":`${Math.round(r)} Hz`;return`${a} (${i})`}function jf(e){const t=String(e||"").trim().toUpperCase();return!t||t==="0"||t==="IDLE"||t==="CM100 READY"||t==="CM100 STOPPED"||t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED")?!1:t.includes("REQUESTED")||t.includes("WAITING")||t.includes("WACHTEN")||t.includes("SETTLING")||t.includes("MEASUR")||t.includes("COOLDOWN")||t.includes("RUNNING")||t.includes("VALIDATING")||t.includes("STARTED")||t.includes("RECOVER")||t.includes("PHASE")||t.includes("STEADY")||t.includes("PULSE")||t.includes("STABILIZE")||t.includes("STEP")}function te(e){const t=String(e||"").trim().toUpperCase();return t?t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED"):!1}function Tt(e){const t=String(e||"").trim().toUpperCase();return t.includes("WAITING_FOR_CM100")||t.includes("CM100 REQUESTED")||t.includes("WACHTEN OP CM100")||t==="WACHTEN"}function Bt(e){return jf(e)&&!Tt(e)}function Vt(e,t="IDLE"){const o=ur(e,t),r=String(o??"").trim();return!r||r==="0"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN"?t:r}function _c(){const e=ur("commissioningStatus",""),t=A("cm100Active"),o=String(e||"").trim().toUpperCase();return(t||o==="CM100 READY"||o==="CM100 STOPPED"||o.includes("DONE")||o.includes("FAILED")||o.includes("ABORT")||o.includes("APPLIED")||o.includes("REFUSED"))&&(n.pendingCommissioningCm100Start=!1),o&&o!=="0"?o==="IDLE"&&n.pendingCommissioningCm100Start?"CM100 REQUESTED":o:n.pendingCommissioningCm100Start?"CM100 REQUESTED":t?"CM100 READY":"IDLE"}function Mr(e,t,o="",r=!1){return`
      <div class="oq-settings-storage-summary-metric${r?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${o?`<em>${s(o)}</em>`:""}
      </div>
    `}function jc(e){const t=String(e||"").trim(),o=t.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return o?`${o[1]} ${o[1]==="1"?"dag":"dagen"}`:t}function Pr(e,t,o,r="",a="",i=""){if(!v(e))return"";const l=!!E(e),c=n.loadingEntities||n.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(o)}</p>
          ${Zf(e,l,r,a)}
        </div>
        ${ro(e,t,l,c)}
      </article>
    `}function Kf(e,t,o,r=""){if(!v(e))return"";const a=n.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(E(e)||"");return i.length?`
      <article class="oq-settings-storage-row oq-settings-storage-row--select" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${r?`<span>${s(r)}</span>`:""}
          </div>
          <p>${s(o)}</p>
        </div>
        <label class="oq-settings-storage-select">
          <select class="oq-helper-select" data-oq-field="${s(e)}" ${n.loadingEntities?"disabled":""}>
            ${i.map(c=>`<option value="${s(c)}" ${c===l?"selected":""}>${s(Ne(c))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function Uf(e){return v(e)||!!L[e]&&!n.optionalMissingEntities?.[e]}function Nr(e,t,o,r={}){if(!Uf(e))return"";const a=v(e),i=a&&(n.loadingEntities||n.busyAction===e),l=r.disabled===!0||!a,c=r.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(c)}"
        type="button"
        data-oq-action="${s(o)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&r.busyLabel||t)}
      </button>
    `}function zf(){return n.trendHistoryMetadata&&typeof n.trendHistoryMetadata=="object"?n.trendHistoryMetadata:{}}function _t(){return!!n.trendHistoryMetadataSignature}function jt(){return!!(n.energyHistoryRaw||n.energyHistorySignature)}function Ee(e){return e?"Niet geladen":"Laden..."}function he(e,t="\u2014"){if(v(e))return fe(e);const o=Gf(e);return o==null||o===""?t:o}function Gf(e){const t=zf();if(e==="trendHistoryFlashAvailable")return _t()?t.available||"Alleen live":Ee(n.trendHistoryMetadataError);if(e==="trendHistoryFlashOldest")return _t()?t.oldest||"Geen data":Ee(n.trendHistoryMetadataError);if(e==="trendHistoryFlashNewest")return _t()?t.newest||"Geen data":Ee(n.trendHistoryMetadataError);if(e==="trendHistoryFlashLastFlush")return _t()?t.lastFlush||"Geen data":Ee(n.trendHistoryMetadataError);if(e==="trendHistoryFlashSize")return _t()?Jr(t.sizeKb):Ee(n.trendHistoryMetadataError);if(e==="trendHistoryFlashWrites")return _t()?Zr(t.writes):Ee(n.trendHistoryMetadataError);const o=zc(),a=String(n.energyHistoryRaw||"").includes("@day_retention|");return e==="lifetimeEnergyHistoryAvailable"?jt()?a&&!o.dayPartitionAvailable?"Niet beschikbaar":Kc(o.storedDayCount,"Geen data"):Ee(n.energyHistoryError):e==="lifetimeEnergyHistoryOldest"?jt()?Io(o.oldestDateKey):Ee(n.energyHistoryError):e==="lifetimeEnergyHistoryNewest"?jt()?Io(o.newestDateKey):Ee(n.energyHistoryError):e==="lifetimeEnergyHistoryLastWrite"?jt()?Uc(o.dayLastWriteTimestampS):Ee(n.energyHistoryError):e==="lifetimeEnergyHistorySize"?jt()?Jr(o.dayStorageKb):Ee(n.energyHistoryError):e==="lifetimeEnergyHistoryWrites"?jt()?Zr(o.dayWriteCount):Ee(n.energyHistoryError):null}function Kc(e,t="Geen data"){const o=Number(e);return!Number.isFinite(o)||o<=0?t:`${Math.round(o)} ${Math.round(o)===1?"dag":"dagen"}`}function Jr(e,t="\u2014"){const o=Number(e);return!Number.isFinite(o)||o<=0?t:`${Math.round(o)} kB`}function Zr(e,t="0"){const o=Number(e);return!Number.isFinite(o)||o<=0?t:String(Math.round(o))}function Io(e){const t=typeof Q=="function"?Q(e):null;return t?t.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function Uc(e,t="Geen data"){const o=Number(e);if(!Number.isFinite(o)||o<=0)return t;const r=new Date(o*1e3),a=r.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=r.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function zc(){return typeof Vo!="function"?{}:Vo()}function Qf(e){const t=Array.isArray(e.items)?e.items:[];return`
      <article class="oq-settings-storage-technical-row">
        <div class="oq-settings-storage-technical-row-head">
          <span>${s(e.meta||"")}</span>
          <strong>${s(e.title)}</strong>
          ${e.note?`<em>${s(e.note)}</em>`:""}
        </div>
        <div class="oq-settings-storage-technical-metrics">
          ${t.map(o=>`
            <div>
              <span>${s(o.label)}</span>
              <strong>${s(o.value)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `}function Yf(e){const t=e.filter(Boolean);return t.length?`
      <details class="oq-settings-storage-technical"${n.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Diagnose, dagtotalen en uurdetail</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(t.map(o=>`${o.shortLabel}: ${o.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${t.map(Qf).join("")}
        </div>
      </details>
    `:""}function Ne(e){const t=String(e||"").trim();return t?{None:"Geen",Manual:"Handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[Xs]:"Stooklijn",[Zs]:"Power House","Dew point required":"Dauwpuntmeting vereist","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[t]||t:""}function Gc(e){const t=String(e||"").trim();return t?{Ready:"Gereed","Waiting for room request":"Wacht op kamervraag","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[t]||t:""}function dr({key:e,option:t,currentValue:o,busy:r,copy:a="",meta:i="",image:l="",imageAlt:c="",infoTitle:d="",infoCopy:u="",infoId:g=""}){const b=t===o,f=`
      <button
        class="oq-settings-choice-card${b?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${u?" oq-settings-choice-card--has-info":""}"
        type="button"
        data-oq-action="select-settings-option"
        data-select-key="${s(e)}"
        data-select-option="${s(t)}"
        aria-pressed="${b?"true":"false"}"
        ${r?"disabled":""}
      >
        <span class="oq-settings-choice-head">
          <span class="oq-settings-choice-title">${s(Ne(t))}</span>
          ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
        </span>
        ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(c||Ne(t))}" loading="lazy" decoding="async"></span>`:""}
        ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
      </button>
    `;if(!u)return f;const w=d||Ne(t),p=g||`${e}-${t}`;return`
      <article class="oq-settings-choice-card-shell${b?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
        ${f}
        ${Sn(p,w,u)}
      </article>
    `}function qn(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function an(e,t,o,r=""){if(!v(e))return"";const a=n.entities[e]||{},i=String(E(e)||""),l=qn(a);return ke(e,t,o,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${n.loadingEntities?"disabled":""}>${l.map(c=>`<option value="${s(c)}" ${c===i?"selected":""}>${s(Ne(c))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,r)}function Jf(e,t,o="Aan",r="Uit"){return`<span class="oq-settings-toggle-state${t?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(o)}" data-off-label="${s(r)}">${s(t?o:r)}</span>`}function ro(e,t,o,r,a="Aan",i="Uit",l=!0){const c=o?a:i,d=o?"off":"on";return`
      <div class="oq-settings-compact-switch-row">
        ${l?Jf(e,o,a,i):""}
        <button
          class="oq-settings-toggle-switch${o?" is-on":""}"
          type="button"
          role="switch"
          data-oq-action="toggle-overview-control"
          data-control-key="${s(e)}"
          data-control-state="${s(d)}"
          data-switch-title="${s(t)}"
          data-on-label="${s(a)}"
          data-off-label="${s(i)}"
          aria-checked="${o?"true":"false"}"
          aria-label="${s(`${t}: ${c}`)}"
          ${r?"disabled":""}
        >
          <span class="oq-settings-toggle-switch-track" aria-hidden="true">
            <span class="oq-settings-toggle-switch-knob"></span>
          </span>
        </button>
      </div>
    `}function Zf(e,t,o="",r=""){const a=t?o:r;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(o)}" data-off-copy="${s(r)}">${s(a)}</p>`:""}function Xf(e,t,o,r,a=""){if(!v(e))return"";const i=!!E(e),l=n.loadingEntities||n.busyAction===`switch-${e}`;return ke(e,t,o,`
        <div class="oq-settings-compact-switch-field">
          ${ro(e,t,i,l)}
          ${r?`<p>${s(r)}</p>`:""}
        </div>
      `,a)}function Rr(e,t,o){if(!v(e))return"";const r=!!E(e),a=n.loadingEntities||n.busyAction===`switch-${e}`;return`
      <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-integration-card-head">
          <h4>${s(t)}</h4>
        </div>
        <p>${s(o)}</p>
        ${ro(e,t,r,a)}
      </article>
    `}function Re(e,t,o="oq-helper-button oq-helper-button--ghost",r=!1){return`
      <button
        class="${o}"
        type="button"
        data-oq-action="press-named-button"
        data-oq-button-key="${s(e)}"
        ${r?"disabled":""}
      >
        ${s(t)}
      </button>
    `}function Yt({active:e,startKey:t,stopKey:o,startLabel:r,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:c=!1,stopDisabled:d=!1}){return Re(e?o:t,e?a:r,e?l:i,e?d:c)}function eb(e,t,o,r,a=""){if(!v(e))return"";const i=n.entities[e]||{},l=String(E(e)||""),c=qn(i),d=n.loadingEntities||n.busyAction===`save-${e}`,u=`
      <div class="oq-settings-choice-grid">
        ${c.map(g=>{const b=r[g]||"",f=typeof b=="string"?b:b.copy||"",w=typeof b=="string"?"":b.image||"",p=typeof b=="string"?"":b.alt||"";return dr({key:e,option:g,currentValue:l,busy:d,copy:f,image:w,imageAlt:p})}).join("")}
      </div>
    `;return ke(e,t,o,u,a)}function ee(e,t,o,r="",a={}){if(!v(e))return"";const i=nt(e),l=Le(e),c=a.unitOverride||i.uom||"",d=a.showUnit!==!1&&!!c,u=d&&a.unitMode!=="outside",g=oo({key:e,value:l,meta:i,controlClass:`oq-helper-control${d&&!u?" oq-helper-control--split":""}${u?" oq-helper-control--suffix":""}`,unitMarkup:d?u?`<span class="oq-helper-unit-chip">${s(c)}</span>`:`<span class="oq-helper-unit">${s(c)}</span>`:""});return ke(e,t,o,g,r,a.footerMarkup||"")}function gt(e,t,o,r="",a={}){if(!v(e))return"";const i=nt(e),l=Se(e,E(e)),c=a.minLabel||`${i.min}${i.uom||""}`,d=a.maxLabel||`${i.max}${i.uom||""}`,u=a.valueLabel||j(e,l);return ke(e,t,o,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(c)}</span><strong>${s(u)}</strong><span>${s(d)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${n.loadingEntities?"disabled":""}></label>`,r)}function As(e,t,o,r={}){if(!v(e))return"";const a=nt(e),i=Le(e),l=r.compact===!0,c=r.embedded===!0,d=r.infoId||e,u=r.showCopy!==!1;return`
      <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${c?" oq-settings-mini-field--embedded":""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${s(t)}</h5>
            ${o?Sn(d,t,o):""}
          </div>
          ${o&&u?`<p>${s(o)}</p>`:""}
        </div>
        ${oo({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
      </article>
    `}function Hs(e,t,o,r=""){if(!v(e))return"";const a=_r(E(e));return ke(e,t,o,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${n.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,r||"oq-settings-field--time")}function ie(e,t,o,r,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(t)}</h3><p>${s(o)}</p></div>${r}</section>`}function tb(){const e=Ve.has(n.settingsGroup)?n.settingsGroup:qe[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${qe.map(t=>`
          <button
            class="oq-settings-group-button${t.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(t.id)}"
            aria-pressed="${t.id===e?"true":"false"}"
          >
            ${ma(t.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(t.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function nb(){const e=Ve.has(n.settingsGroup)?n.settingsGroup:qe[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[Ab(),Hb(),vb(),Kb(),Fb(),jb(),mb()]:e==="service"?[kb(),Eb()]:e==="heating"?[Ob()]:e==="cooling"?[zb()]:e==="integrations"?[xb(),Db()]:[Mb(),Pb(),Ib(),Wb(),_b()]).filter(Boolean).join("")}
      </div>
    `}function ob(){if(!n.root||n.appView!=="settings")return!1;const e=n.root.querySelector(".oq-settings-group-nav"),t=n.root.querySelector(".oq-settings-group-stack");if(!e||!t)return!1;const o=Ve.has(n.settingsGroup)?n.settingsGroup:qe[0].id;if(o==="service")return!1;const r=e.querySelectorAll(".oq-settings-group-button");if(r.length!==qe.length)return!1;r.forEach(p=>{const y=String(p.dataset.groupId||"")===o;p.classList.toggle("is-active",y),p.setAttribute("aria-pressed",y?"true":"false")}),t.querySelectorAll(".oq-settings-info").forEach(p=>{const h=String(p.dataset.oqSettingsInfo||""),y=n.settingsInfoOpen===h;p.classList.toggle("is-open",y);const S=p.querySelector(".oq-settings-info-popover");S&&(S.hidden=!y);const q=p.querySelector(".oq-settings-info-button");q&&q.setAttribute("aria-expanded",y?"true":"false")}),t.querySelectorAll("[data-oq-settings-field]").forEach(p=>{const h=String(p.dataset.oqSettingsField||"");if(!h)return;const y=p.querySelector(".oq-settings-static-value");if(y){const C=B(h);y.textContent!==C&&(y.textContent=C)}p.querySelectorAll("select[data-oq-field]").forEach(C=>{const k=String(C.dataset.oqField||h),H=String(E(k)||"");C.value!==H&&(C.value=H)}),p.querySelectorAll("input[data-oq-field]").forEach(C=>{const k=String(C.dataset.oqField||h),H=String(Le(k)||"");C.value!==H&&(C.value=H)});const S=p.querySelector(".oq-helper-slider-meta strong"),q=p.querySelector('input[type="range"][data-oq-field]');if(S&&q){const C=j(h,Se(h,E(h)));S.textContent!==C&&(S.textContent=C)}}),t.querySelectorAll("[data-select-key]").forEach(p=>{const h=String(p.dataset.selectKey||""),y=String(p.dataset.selectOption||""),S=String(E(h)||""),q=y===S;p.classList.toggle("is-active",q),p.setAttribute("aria-pressed",q?"true":"false"),h==="strategy"?p.disabled=n.loadingEntities||n.busyAction==="save-strategy":h==="hpGeneration"?p.disabled=n.loadingEntities||n.busyAction==="save-hpGeneration":h==="curveControlProfile"?p.disabled=n.loadingEntities||n.busyAction==="save-curveControlProfile":h==="phResponseProfile"&&(p.disabled=n.loadingEntities||n.busyAction==="save-phResponseProfile");const C=p.closest(".oq-settings-choice-card-shell");C&&C.classList.toggle("is-active",q)});const a=t.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){const p=String(E("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",p),a.querySelectorAll("input[data-oq-field]").forEach(y=>{const S=String(y.dataset.oqField||""),q=String(Le(S)||"");y.value!==q&&(y.value=q)})}t.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(p=>{const h=String(p.dataset.controlKey||""),y=!!E(h),S=String(p.dataset.onLabel||"Aan"),q=String(p.dataset.offLabel||"Uit"),C=String(p.dataset.switchTitle||h),k=y?S:q;p.dataset.controlState=y?"off":"on",p.classList.toggle("is-on",y),p.setAttribute("aria-checked",y?"true":"false"),p.setAttribute("aria-label",`${C}: ${k}`),p.disabled=n.loadingEntities||n.busyAction===`switch-${h}`}),t.querySelectorAll("[data-oq-switch-pill]").forEach(p=>{const h=String(p.dataset.oqSwitchPill||""),y=!!E(h),S=String(p.dataset.onLabel||"Aan"),q=String(p.dataset.offLabel||"Uit"),C=y?S:q;p.classList.toggle("is-on",y),p.textContent!==C&&(p.textContent=C)}),t.querySelectorAll("[data-oq-switch-copy]").forEach(p=>{const h=String(p.dataset.oqSwitchCopy||""),y=!!E(h),S=String(p.dataset.onCopy||""),q=String(p.dataset.offCopy||""),C=y?S:q;p.hidden=!C,p.textContent!==C&&(p.textContent=C)});const i=t.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){const p=i.querySelector(".oq-settings-quickstart-status-value"),h=i.querySelector(".oq-settings-quickstart-status-copy"),y=i.querySelector('button[data-oq-action="open-generation-modal"]'),S=Zn(),q=n.entities.hpGeneration||{},C=v("hpGeneration")&&qn(q).length>0;if(p){const k=S||"Onbekend";p.textContent!==k&&(p.textContent=k)}if(h){const k="Pas dit aan als je een andere Quatt Hybrid hebt.";h.textContent!==k&&(h.textContent=k)}y&&(y.disabled=!C||n.loadingEntities||n.busyAction==="save-hpGeneration")}const l=t.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){const p=l.querySelector(".oq-settings-quickstart-status-value"),h=l.querySelector(".oq-settings-quickstart-status-copy"),y=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),S=_c(),q=A("cm100Active");p&&p.textContent!==S&&(p.textContent=S);const C=q?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";h&&h.textContent!==C&&(h.textContent=C),y&&(y.disabled=n.loadingEntities)}const c=t.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(c){const p=c.querySelector(".oq-settings-quickstart-status-value"),h=c.querySelector(".oq-settings-quickstart-status-copy"),y=c.querySelector('button[data-oq-action="reset"]'),S=n.complete===!0?"Afgerond":n.complete===!1?"Open":"Laden...",q=n.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":n.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";p&&p.textContent!==S&&(p.textContent=S),h&&h.textContent!==q&&(h.textContent=q),y&&(y.disabled=n.busyAction==="reset")}const d=t.querySelectorAll("[data-oq-access-security-item]");d.length&&d.forEach(p=>{const h=String(p.dataset.oqAccessSecurityItem||""),y=p.querySelector(".oq-settings-quickstart-status-value"),S=p.querySelector(".oq-settings-quickstart-status-copy"),q=p.querySelector("button[data-oq-action]");if(h==="login"){const C=Ua(),k=za();y&&y.textContent!==C&&(y.textContent=C),S&&S.textContent!==k&&(S.textContent=k)}else if(h==="api"){const C=pi(),k=gi();y&&y.textContent!==C&&(y.textContent=C),S&&S.textContent!==k&&(S.textContent=k)}q&&(q.disabled=!1)});const u=t.querySelector(".oq-settings-system-summary");if(u){const p=u.querySelectorAll(".oq-settings-system-row"),h={uptime:Ra(),ip:La(),updates:Xn(),datetime:Tl(),espTemp:Ll(),restart:"Opnieuw opstarten"};p.forEach(q=>{const C=q.querySelector(".oq-settings-system-row-value"),k=q.dataset.oqDiagnosticsRow||"";if(C&&Object.prototype.hasOwnProperty.call(h,k)){const H=h[k];C.textContent!==H&&(C.textContent=H)}});const y=u.querySelector('button[data-oq-action="open-update-modal"]');y&&(y.disabled=!1);const S=u.querySelector('button[data-oq-action="open-restart-confirm"]');if(S){const q=n.busyAction==="restartAction";S.disabled=q,S.textContent=q?"Herstarten...":"Herstarten"}}t.querySelectorAll(".oq-settings-hp-offset-row").forEach(p=>{const h=String(p.dataset.oqSettingsField||""),y=String(p.dataset.oqHpOffsetRawKey||""),S=String(p.dataset.oqHpOffsetFinalKey||"");if(!h||!y||!S)return;const q=nt(h),C=ui(y,S,h),k=et(Le(h)),H=Number.isFinite(C)&&Number.isFinite(k)?rn(C+k,q.uom||"\xB0C",2):ue(S,2),x=p.querySelector("[data-oq-hp-offset-active]");if(x){const T=`${ue(S,2)} actief`;x.textContent!==T&&(x.textContent=T)}const F=p.querySelector("[data-oq-hp-offset-raw]");if(F){const T=Number.isFinite(C)?rn(C,q.uom||"\xB0C",2):ue(y,2);F.textContent!==T&&(F.textContent=T)}const G=p.querySelector("[data-oq-hp-offset-final]");G&&G.textContent!==H&&(G.textContent=H)});const g=t.querySelector(".oq-settings-curve-shell"),b=le();if(!!g!==b)return!1;const f=!!a,w=String(E("phResponseProfile")||"")==="Custom";return f===w}function rb(e=!1){const t=nc();return t?`
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${e?" oq-curve-fallback-suggest--helper":""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${s(t.label)}</strong>
          <span>${s(t.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${n.loadingEntities||n.busyAction==="save-curveFallbackSupply"||t.isCurrent?"disabled":""}
        >
          ${t.isCurrent?"Actief":"Gebruik suggestie"}
        </button>
      </div>
    `:""}function Qc(){return`
      <div class="oq-settings-curve-grid">
        ${de.map(e=>ee(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${ee("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:rb()})}
      </div>
    `}function Yc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${an("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function Jc(e="oq-settings-grid"){const t=[ee("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),ee("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${an("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${kp()?ee("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):t}
      </div>
    `}function ab(e="oq-settings-grid"){const t=[ee("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),ee("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return t.length?`
      <div class="${s(e)}">
        ${t.join("")}
      </div>
    `:""}function yo(e="",t=""){const o=String(e||"").trim().toUpperCase(),r=String(t||"").trim().toLowerCase(),a=o.split(/[^A-Z0-9]+/).filter(Boolean),i=u=>{const g=String(u||"").trim().toUpperCase();return g?o===g||o.startsWith(`${g}:`)||o.startsWith(`${g} `)||a.includes(g):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!o||o==="\u2014"||o==="UNKNOWN"||o==="UNAVAILABLE"||o==="NAN")return{phase:"Wachten",percent:0};if(o.includes("WAITING")||o.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(r!=="cm100"&&(o==="IDLE"||o==="CM0 - STANDBY"||o==="CM100 READY"||o==="CM100 STOPPED"||o==="GEPAUZEERD"))return{phase:"Wachten",percent:0};const d=(l[r]||[]).find(u=>u.match.some(g=>i(g)));return d||(o.includes("DONE")||o.includes("APPLIED")?{phase:"Klaar",percent:100}:o.includes("ABORT")||o.includes("FAILED")||o.includes("REFUSED")?{phase:"Afgebroken",percent:100}:r==="cm100"&&o.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function Kt({taskKey:e,title:t,copy:o,subcopy:r="",status:a,statusCopy:i,progressTask:l,actions:c="",controls:d="",metrics:u="",className:g=""}){return`
      <article class="oq-settings-commissioning-card${g?` ${s(g)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(t)}</h3>
            <p>${s(o)}</p>
            ${r?`<p class="oq-settings-commissioning-card-subcopy">${s(r)}</p>`:""}
          </div>
        </div>
        ${c?`<div class="oq-settings-commissioning-card-actions">${c}</div>`:""}
        ${d}
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
    `}function ib(){return Uo.filter(e=>v(se(e,"Status"))||v(se(e,"Load"))||v(en(e,"cooling",0)))}function sb(e){return et(Le(e))}function lb(e){const t=[];return da.forEach(o=>{let r=-1/0;Rn.forEach(a=>{const i=en(e,o,a),l=sb(i);(!Number.isFinite(l)||l<0||l>120||l<r)&&t.push(`${o==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(r=l)})}),{valid:t.length===0,invalid:t}}function cb(e){const t=String(E(`hp${e}Mode`)||"").trim(),o=et(E(`hp${e}Freq`)),r=t&&t!=="Onbekend"&&t!=="Unknown",a=Number.isFinite(o),i=r&&/standby|stand-by/i.test(t),l=a&&o<=.5,c=r?i?a?l?"Standby en compressor uit.":`Compressor draait op ${o.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${t}.`:"ODU status is onbekend.";return{mode:r?t:"Onbekend",freq:Number.isFinite(o)?`${o.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:c}}function ub(e){const t=String(e||"").toUpperCase();return!e||t==="UNKNOWN"||t==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":t.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":t.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":t.includes("WRITE_QUEUED")||t.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":t.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":t.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":t.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":t.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function Ms(e,t){return v(e)?oo({key:e,value:Le(e),meta:nt(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${t}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function db(e){const t=Rn.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${Rn.map(o=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${o}</span>
            <div role="cell">${Ms(en(e,"cooling",o),o)}</div>
            <div role="cell">${Ms(en(e,"heating",o),t+o)}</div>
          </div>
        `).join("")}
      </div>
    `}function pb(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;const t=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,o=t?t.closest(".oq-settings-odu-runtime-table"):null;if(!t||!o)return;const r=Array.from(o.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,c)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(c.dataset.oqOduRuntimeTabIndex||0)),a=r.indexOf(t),i=r[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function gb(e){const t=se(e,"Enable"),o=se(e,"Load"),r=se(e,"Apply"),a=se(e,"Status"),i=String(E(a)||"").trim()||"Nog niet geladen",l=lb(e),c=cb(e),d=!!E(t),u=n.loadingEntities||n.busyAction===o||n.busyAction===r,g=u||!d||!l.valid||!c.safe||!v(r),b=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(c.reason)} Laatste compressorfrequentie: ${s(c.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${v(o)?Re(o,n.busyAction===o?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",u):""}
      ${v(t)?ro(t,`HP${e} writes vrijgeven`,d,u,"Enable","Locked"):""}
            ${v(r)?Re(r,n.busyAction===r?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",g):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(ub(i))}</p>
        </div>
        ${db(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&c.safe?" is-ok":" is-warning"}">${s(b)} ${s(c.safe?"":c.reason)}</p>
      </article>
    `}function mb(){const e=ib();return e.length?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${n.oduRuntimeFrequencyDetailsOpen?" open":""}>
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
          </div>
          <div class="oq-settings-odu-runtime-panels">
            ${e.map(t=>gb(t)).join("")}
          </div>
        </div>
      </details>
    `:""}function Zc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ee("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${ee("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${fb()}
      </div>
    `}function Xc(e="oq-settings-grid"){const t=hb();return`
      <div class="${s(e)}">
        ${ee("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${t}
    `}function hb(){const e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(o=>v(o.offsetKey)&&v(o.finalKey));if(!e.length)return"";const t=o=>{const r=nt(o.offsetKey),a=ui(o.rawKey,o.finalKey,o.offsetKey),i=et(Le(o.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?rn(a+i,r.uom||"\xB0C",2):ue(o.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(o.offsetKey)}" data-oq-hp-offset-raw-key="${s(o.rawKey)}" data-oq-hp-offset-final-key="${s(o.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(o.label)}</strong>
            <span data-oq-hp-offset-active>${s(ue(o.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${o.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?rn(a,r.uom||"\xB0C",2):ue(o.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${oo({key:o.offsetKey,value:Le(o.offsetKey),meta:r,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:r.uom?`<span class="oq-helper-unit-chip">${s(r.uom)}</span>`:""})}
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
    `}function di(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${Hs("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${Hs("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${gt("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${gt("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function eu(){const e=le();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(Zs)}"
          aria-pressed="${e?"false":"true"}"
          ${n.loadingEntities||n.busyAction==="save-strategy"?"disabled":""}
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
          data-select-option="${s(Xs)}"
          aria-pressed="${e?"true":"false"}"
          ${n.loadingEntities||n.busyAction==="save-strategy"?"disabled":""}
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
    `}function fb(){if(!v("phResponseProfile"))return"";const e=String(E("phResponseProfile")||""),t=n.loadingEntities||n.busyAction==="save-phResponseProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{const i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${As("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${As("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:dr({key:"phResponseProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return ke("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",r,"oq-settings-field--span-2")}function tu(){if(!v("curveControlProfile"))return"";const e=String(E("curveControlProfile")||""),t=n.loadingEntities||n.busyAction==="save-curveControlProfile",r=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>dr({key:"curveControlProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return ke("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",r,"oq-settings-field--span-2")}function bb(){const e=(R,V=0)=>{const P=M(R);return Number.isNaN(P)?V:Math.max(0,P)},o=e("phComfortBelow",.1),r=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-o,l=20+r,c=620,d=184,u=46,g=24,b=18,f=40,w=96,p=c-u-g,h=Math.min(20-1.2,i-.35),y=Math.max(20+1.2,l+.35),S=R=>u+(R-h)/Math.max(.01,y-h)*p,q=S(h),C=S(y),k=S(i),H=S(20),x=S(l),F=Math.abs(i-20)>.001,G=Math.abs(l-20)>.001,T=b+24,$=d-f,N=w-44,W=(R,V,P,O="")=>{const pe=Math.max(q+4,Math.min(C-110-4,R-55)),ce=R-14,J=N,it=28,Ce=w-N+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${V} ${P}`)}">
          <rect class="oq-ph-concept-hit" x="${ce}" y="${J}" width="${it}" height="${Ce}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${R}" cy="${w}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${O?` oq-ph-concept-tooltip--${O}`:""}" transform="translate(${pe} ${N})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(V)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(P)}</text>
          </g>
        </g>
      `},K=[`M ${q.toFixed(1)} ${T.toFixed(1)}`,`L ${k.toFixed(1)} ${w.toFixed(1)}`,`L ${x.toFixed(1)} ${w.toFixed(1)}`,`L ${C.toFixed(1)} ${$.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(I(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(I(i,1,"\xB0C"))} \u2013 ${s(I(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(I(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${c} ${d}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${q.toFixed(1)}" y="${b}" width="${Math.max(20,k-q).toFixed(1)}" height="${(d-b-f).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${k.toFixed(1)}" y="${b}" width="${Math.max(20,x-k).toFixed(1)}" height="${(d-b-f).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${x.toFixed(1)}" y="${b}" width="${Math.max(20,C-x).toFixed(1)}" height="${(d-b-f).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${q}" y1="${b}" x2="${q}" y2="${d-f}" class="oq-ph-concept-axis"></line>
            <line x1="${q}" y1="${w}" x2="${C}" y2="${w}" class="oq-ph-concept-axis"></line>
            <line x1="${H}" y1="${b}" x2="${H}" y2="${d-f}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${K}" class="oq-ph-concept-curve"></path>

            ${F?`<line x1="${k}" y1="${w-12}" x2="${k}" y2="${w+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${H}" y1="${w-14}" x2="${H}" y2="${w+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${G?`<line x1="${x}" y1="${w-12}" x2="${x}" y2="${w+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${F?`<circle cx="${k}" cy="${w}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${H}" cy="${w}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${G?`<circle cx="${x}" cy="${w}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${F?W(k,"Comfort onder setpoint",I(i,1,"\xB0C"),"below"):""}
            ${W(H,"Setpoint",I(20,1,"\xB0C"),"setpoint")}
            ${G?W(x,"Comfort boven setpoint",I(l,1,"\xB0C"),"above"):""}

            <text x="${q+8}" y="${b+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${q+8}" y="${d-f-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${q}" y="${d-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${C}" y="${d-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${F?`<text x="${k-5}" y="${d-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(I(i,1,"\xB0C"))}</text>`:""}
            <text x="${H}" y="${d-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(I(20,1,"\xB0C"))}</text>
            ${G?`<text x="${x+5}" y="${d-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(I(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(I(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(I(i,1,"\xB0C"))} \u2013 ${s(I(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(I(l,1,"\xB0C"))}</span>
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
    `}function nu(){const e=[ee("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),ee("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),ee("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${bb()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function Ps(e,t,o){const r=[an(t,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),an(o,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return r?`
      <article class="oq-settings-hp-group">
        <header>
          <p class="oq-helper-label">Warmtepomp</p>
          <h4>${s(e)}</h4>
          <p>Stel hier de standen in die OpenQuatt niet hoeft te gebruiken.</p>
        </header>
        <div class="oq-settings-hp-group-grid">
          ${r}
        </div>
      </article>
    `:""}function vb(){const e=ab();return ie("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${Jc()}
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
      `)}function U(e){return v(e)&&A(e)}function vt(e){return!v(e)||A(e)}function Ns(e){return v(e)?Un(B(e,"None")):""}const yb=new Set(["compressor oil return"]);function wb(e){const t=Un(e);return t==="Geen actieve storingen"?[]:t.split(",").map(o=>o.trim()).filter(o=>o&&!yb.has(o.toLowerCase()))}function ou(e){const t=wb(e);return t.length>0?t.join(", "):"Geen actieve storingen"}function Xr(e){return v(e)?ou(B(e,"None")):""}function Wo(e){const t=Xr(e).trim().toLowerCase();return!!t&&t!=="geen actieve storingen"}function jn(){const e=[],t=U("compressorCyclingWarning2h")||U("compressorCyclingWarning72h")||U("alternatingCompressorStartsWarning"),o=U("compressorCyclingAlertLatched"),r=vt("cicPollingEnabled"),a=vt("otEnabled"),i=(c,d)=>{U(c)&&e.push({key:c,label:d})};i("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),i("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),i("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),i("lowflowFaultActive","Te lage flow"),i("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),r&&i("cicDataStale","CIC-data is verouderd"),a&&i("otLinkProblem","OpenTherm-verbinding meldt een probleem"),Wo("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${Xr("hp1Failures")}`}),Wo("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${Xr("hp2Failures")}`});const l=e.length;return o&&!t&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:o,cyclingAlertActive:t,cyclingAlertRecovered:o&&!t,title:l>0?"Aandacht nodig":o?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:o?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function Bo(e,t="Aandacht",o="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${s(e?t:o)}</span>`}function Ut({label:e,value:t,note:o="",active:r=!1}){return`
      <div class="oq-settings-monitoring-row${r?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(t)}</strong>
          ${o?`<span>${s(o)}</span>`:""}
        </div>
        ${Bo(r)}
      </div>
    `}function pt(e){const t=M(e);return Number.isNaN(t)?"\u2014":String(Math.max(0,Math.round(t)))}function Sb(e){const t=M(e);if(Number.isNaN(t))return"Nog niet gemeten";if(t<1)return"Zojuist";if(t<60)return`${Math.round(t)} min geleden`;const o=Math.floor(t/60),r=Math.round(t%60);return`${o}u ${r}m geleden`}function Rs(e){const t=M(e);return Number.isNaN(t)||t<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t*1e3))}function qb(e){if(!e.cyclingAlertLatched)return"";const t=U("compressorCyclingAlertAlternating"),o=pt("compressorCyclingAlertHp1Peak2h"),r=pt("compressorCyclingAlertHp1Peak72h"),a=v("compressorCyclingAlertHp2Peak2h")?pt("compressorCyclingAlertHp2Peak2h"):"",i=v("compressorCyclingAlertHp2Peak72h")?pt("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${Bo(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(Rs("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(Rs("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(o)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(r)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${t?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${n.entities.acknowledgeCompressorCyclingAlert?Re("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function Ls(e,t){return v(`${t}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${s(e)}</p>
          <span>Laatste start: ${s(Sb(`${t}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${s(pt(`${t}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${s(pt(`${t}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${s(pt(`${t}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${s(pt(`${t}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function ea(e){const t=e.active?e.problems.map(o=>o.key).sort().join("|"):"";if(!t){n.installationMonitoringProblemSignature="";return}t!==n.installationMonitoringProblemSignature&&(n.installationMonitoringProblemSignature=t,n.installationMonitoringDetailsOpen=!0)}function kb(){const e=jn();ea(e);const t=vt("cicPollingEnabled"),o=vt("otEnabled"),r=[v("lowflowFaultActive")?Ut({label:"Flow",value:U("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:U("lowflowFaultActive")}):"",v("flowMismatch")?Ut({label:"Flowvergelijking duo",value:U("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:U("flowMismatch")}):""].filter(Boolean).join(""),a=[v("cicDataStale")?Ut({label:"CIC-data",value:t?U("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:t&&U("cicDataStale")}):"",v("otLinkProblem")?Ut({label:"OpenTherm",value:o?U("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:o&&U("otLinkProblem")}):""].filter(Boolean).join(""),i=[v("hp1Failures")?Ut({label:"Warmtepomp 1",value:Ns("hp1Failures"),active:Wo("hp1Failures")}):"",v("hp2Failures")?Ut({label:"Warmtepomp 2",value:Ns("hp2Failures"),active:Wo("hp2Failures")}):""].filter(Boolean).join(""),l=M("compressorStarts2hWarningLimit"),c=M("compressorStarts72hWarningLimit"),d=U("compressorCyclingWarning2h")||U("compressorCyclingWarning72h")||U("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,u=r?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${r}</div>
      </article>
    `:"",g=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"",b=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"";return ie("Bewaking","Installatiebewaking","Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${Bo(e.active,"Aandacht nodig","Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${n.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(f=>`<span>${s(f.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${Bo(d)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${qb(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${Ls("Warmtepomp 1","hp1")}
              ${Ls("Warmtepomp 2","hp2")}
            </div>
            ${gt("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${gt("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(c)?"\u2014":`${Math.round(c)} starts / 72 uur`})}
          </article>
          ${g}
          </div>
          <div class="oq-settings-monitoring-column">
            ${u}
            ${b}
          </div>
        </div>
        </details>
      `)}function Cb({status:e,running:t,resultReady:o,startDisabled:r,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:c}){const d=String(e||"").toUpperCase(),u=d.includes("FAILED")||d.includes("REFUSED")||d.includes("ABORT"),g=d.includes("APPLIED"),b=v("hp2WaterIn")||v("hp2WaterOut")||v("hp2WaterInRaw")||v("hp2WaterOutRaw"),f=M("hpWaterCalibrationStableProgress"),w=M("hpWaterCalibrationStableRequired"),p=M("hpWaterCalibrationRemaining"),h=Math.round(M("hpWaterCalibrationPhase")),y=t&&(h===1||d.includes("MIXING")),S=t&&!y,q=300,C=60,k=Number.isFinite(p)?Math.max(0,q-p):NaN,H=Number.isFinite(k)?Math.max(0,C-k):NaN,x=y&&Number.isFinite(k)?Math.max(0,Math.min(100,k/C*100)):S&&Number.isFinite(f)&&Number.isFinite(w)&&w>0?Math.max(0,Math.min(100,f/w*100)):t&&Number.isFinite(p)?Math.max(0,Math.min(100,100-p/q*100)):o?100:0,F=o&&v("hpWaterCalibrationResultSpreadBefore")?ue("hpWaterCalibrationResultSpreadBefore",2):ue("hpWaterCalibrationSpread",2),G=y?"Water mengen":Number.isFinite(f)&&Number.isFinite(w)&&w>0?f>0?`${Math.round(Math.max(0,f))} / ${Math.round(w)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",T=o?3:t?2:1,$=g?"Offsets toegepast":o?`Meting klaar - spreiding ${F}`:t?y?`Water mengen${Number.isFinite(H)&&H>0?` - meting start over ${Math.round(H)} s`:""}`:`Meting bezig - ${Number.isFinite(p)&&p>0?`max. ${Math.round(p)} s resterend`:G}`:u?"Meting niet voltooid":"Voorbereiding",N=g?"De voorgestelde offsets zijn opgeslagen.":o?"Controleer de voorgestelde offsets en pas ze toe.":t?y?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":u?ur("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):b?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",W=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(P=>v(P.liveKey)||v(P.rawKey)||v(P.offsetKey)),K=(P,O)=>{const _=T>P;return`
        <div class="oq-settings-hp-calibration-step${_?" is-done":""}${T===P?" is-active":""}">
          <span>${_?"\u2713":P}</span>
          <strong>${s(O)}</strong>
        </div>
      `},R=P=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(P.label)}</span>
          <strong>${s(ue(P.liveKey,2))}</strong>
        </article>
      `,V=P=>{const O=M(P.resultRawKey),_=Number.isFinite(O)?O:ui(P.rawKey,P.liveKey,P.offsetKey),Y=M(P.suggestedKey),pe=Number.isFinite(_)&&Number.isFinite(Y)?rn(_+Y,n.entities[P.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(P.label)}</th>
          <td>${s(Number.isFinite(_)?rn(_,n.entities[P.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(ue(P.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(ue(P.suggestedKey,2))}</span></td>
          <td>${s(pe)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${K(1,"Voorbereiding")}
          ${K(2,"Meting")}
          ${K(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${o?" is-success":t?" is-active":u?" is-warning":""}">
          <div>
            <strong>${s($)}</strong>
            <p>${s(N)}</p>
          </div>
          ${t||o?`<span>${s(t?G:"Resultaat beschikbaar")}</span>`:""}
          ${t?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${x.toFixed(0)}%"></i></div>`:""}
        </div>

        ${t?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${W.map(R).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(ue("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(ue("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${o?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(ue("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(ue("hpWaterCalibrationSupplyDelta",2))}</span>
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
                  ${W.map(V).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${c?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${Yt({active:t,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||r,stopDisabled:l||a})}
            ${n.entities.hpWaterCalibrationApply?Re("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function ru(){const e=v("boilerCvAssistEnabled")&&A("boilerCvAssistEnabled"),t=_c(),o=A("cm100Active"),r=String(t||"").trim().toUpperCase(),a=Tt(t),i=!a&&(o||r==="CM100 READY"),l=n.commissioningTaskLock==="cm100",c=n.loadingEntities||n.busyAction==="commissioningCm100Start"||n.busyAction==="commissioningCm100Stop"||l,d=!!n.pendingCommissioningCm100Start,u=c||i||a,g=c||!i,b=Vt("boilerPowerTestStatus","IDLE"),f=yo(b,"boiler"),w=A("boilerPowerTestActive"),p=n.loadingEntities||n.busyAction==="boilerPowerTestStart"||n.busyAction==="boilerPowerTestAbort"||n.busyAction==="boilerPowerTestApply",h=!!(n.entities.boilerPowerTestStart||n.entities.boilerPowerTestAbort||n.entities.boilerPowerTestApply),y=!!n.pendingBoilerPowerTestStart,S=n.commissioningTaskLock==="boiler",q=Tt(b),k=!te(b)&&(w||y||S||Bt(b))&&!q,H=fe("boilerRatedHeatPower"),x=fe("boilerHeatPower"),F=M("boilerHeatPower"),G=F>0?x:k&&n.commissioningBoilerHeatPowerDisplay?n.commissioningBoilerHeatPowerDisplay:x;F>0&&(n.commissioningBoilerHeatPowerDisplay=x);const T=Vt("flowAutotuneStatus","IDLE"),$=yo(T,"autotune"),N=n.loadingEntities||n.busyAction==="flowAutotuneStart"||n.busyAction==="flowAutotuneAbort"||n.busyAction==="flowAutotuneApply",W=!!(n.entities.flowAutotuneStart||n.entities.flowAutotuneAbort||n.entities.flowAutotuneApply),K=!!n.pendingFlowAutotuneStart,R=n.commissioningTaskLock==="autotune",V=Tt(T),O=!te(T)&&(K||R||Bt(T))&&!V,_=Vt("airPurgeStatus","IDLE"),Y=yo(_,"purge"),pe=A("airPurgeActive"),ce=n.loadingEntities||n.busyAction==="airPurgeStart"||n.busyAction==="airPurgeAbort",J=!!(n.entities.airPurgeStart||n.entities.airPurgeAbort),it=!!n.pendingAirPurgeStart,Ce=n.commissioningTaskLock==="purge",ge=!te(_)&&(pe||it||Ce||Bt(_)),Sr=/DONE/.test(String(_||"").toUpperCase()),me=!!(J||n.entities.airPurgeStatus||n.entities.airPurgeReturnToAuto),qr=fe("airPurgeRemaining",{decimals:0}),Tn=M("airPurgePhase"),co=Tn===1?"Rustig":Tn===2?"Pulsen":Tn===3?"Stabiliseren":Y.phase,kt=Vt("manualFlowStatus","IDLE"),xt=A("manualFlowActive"),Ue=n.loadingEntities||n.busyAction==="manualFlowStart"||n.busyAction==="manualFlowAbort",En=!!(n.entities.manualFlowStart||n.entities.manualFlowAbort),Dt=!!n.pendingManualFlowStart,Oe=n.commissioningTaskLock==="manual-flow",Te=!te(kt)&&(xt||Dt||Oe||Bt(kt)),st=Vt("manualHpStatus","IDLE"),$n=A("manualHpActive"),It=n.loadingEntities||n.busyAction==="manualHpStart"||n.busyAction==="manualHpAbort",uo=!!(n.entities.manualHpStart||n.entities.manualHpAbort),Wt=!!n.pendingManualHpStart,Fe=n.commissioningTaskLock==="manual-hp",xe=!te(st)&&($n||Wt||Fe||Bt(st)),Ri=/SAFETY STOP/.test(String(st||"").toUpperCase()),Li=/STOPPING/.test(String(st||"").toUpperCase()),lt=Vt("hpWaterCalibrationStatus","IDLE"),id=yo(lt,"hp-water-calibration"),Oi=A("hpWaterCalibrationActive"),po=n.loadingEntities||n.busyAction==="hpWaterCalibrationStart"||n.busyAction==="hpWaterCalibrationAbort"||n.busyAction==="hpWaterCalibrationApply",Fi=!!(n.entities.hpWaterCalibrationStart||n.entities.hpWaterCalibrationAbort||n.entities.hpWaterCalibrationApply),go=!!n.pendingHpWaterCalibrationStart,ct=n.commissioningTaskLock==="hp-water-calibration",we=!te(lt)&&(Oi||go||ct||Bt(lt)),mo=/DONE|APPLIED/.test(String(lt||"").toUpperCase()),xi=/APPLIED/.test(String(lt||"").toUpperCase()),sd=fe("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),ld=fe("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),Di=/DONE|APPLIED/.test(String(b||"").toUpperCase()),Ii=/DONE|APPLIED/.test(String(T||"").toUpperCase()),kr=i?q?"Wachten op CM100":k?f.phase:Di?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Cr=i?V?"Wachten op CM100":O?$.phase:Ii?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Tr=i?ge?Y.phase:Sr?"Klaar":"Klaar om te starten":"Wachten op CM100",Wi=i?Te?"Actief":"Klaar om te starten":"Wachten op CM100",Bi=i?xe?Li?"Bezig met stoppen":Ri?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",Vi=i?we?id.phase:xi?"Offsets toegepast":mo?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",_i=!i||p||!h||O||ge||Te||xe||we||k||R||Ce||Oe||Fe||ct||y,cd=p||!(k||S||y),ud=p||_i||!Di||O||ge||we,ji=!i||N||!W||k||ge||Te||xe||we||O||S||Ce||Oe||Fe||ct||K,dd=N||!(O||R||K),pd=N||ji||!Ii||k||ge||we,gd=!i||ce||!J||k||O||Te||xe||we||ge||S||R||Oe||Fe||ct||it,md=ce||!(ge||Ce||it),hd=!i||Ue||!En||k||O||ge||xe||we||Te||S||R||Ce||Fe||ct||Dt,fd=Ue||!(Te||Oe||Dt),bd=!i||It||!uo||k||O||ge||Te||we||xe||S||R||Ce||Oe||ct||Wt,vd=It||!(xe||Fe||Wt),yd=!i||po||!Fi||k||O||ge||Te||xe||we||S||R||Ce||Oe||Fe||go,wd=po||!(we||ct||go),Sd=po||we||!mo||xi;d&&i&&(n.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(r))&&(n.commissioningTaskLock=""),y&&(w||te(b))&&(n.pendingBoilerPowerTestStart=!1),S&&te(b)&&(n.commissioningTaskLock=""),K&&te(T)&&(n.pendingFlowAutotuneStart=!1),R&&te(T)&&(n.commissioningTaskLock=""),it&&(pe||te(_))&&(n.pendingAirPurgeStart=!1),Ce&&te(_)&&(n.commissioningTaskLock=""),Dt&&(xt||te(kt))&&(n.pendingManualFlowStart=!1),Oe&&(xt||te(kt))&&(n.commissioningTaskLock=""),Wt&&($n||te(st))&&(n.pendingManualHpStart=!1),Fe&&($n||te(st))&&(n.commissioningTaskLock=""),go&&(Oi||te(lt))&&(n.pendingHpWaterCalibrationStart=!1),ct&&te(lt)&&(n.commissioningTaskLock="");const qd=a?"Wachten op CM100":t,kd=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",Cd=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:Vi,available:!!(Fi||n.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:Kt({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:Vi,statusCopy:we?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":mo?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:Cb({status:lt,running:we,resultReady:mo,startDisabled:yd,abortDisabled:wd,applyDisabled:Sd,busy:po,controlsAvailable:!!(n.entities.hpWaterCalibrationStart||n.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:Wi,available:!!(En||n.entities.manualFlowStatus),openDisabled:!i,cardMarkup:Kt({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:Wi,statusCopy:Te?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${gt("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${n.entities.manualFlowStart||n.entities.manualFlowAbort?Yt({active:Te,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:Ue||hd,stopDisabled:Ue||fd}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${X("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",fe("flowSelected"),"oq-settings-field--compact")}
            ${X("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",fe("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${n.entities.manualFlowApplyHeating?Re("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",Ue):""}
          ${n.entities.manualFlowApplyCooling?Re("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",Ue):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:Bi,available:!!(uo||n.entities.manualHpStatus),openDisabled:!i,cardMarkup:Kt({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:Bi,statusCopy:xe?Li?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":Ri?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${n.entities.manualHpStart||n.entities.manualHpAbort?Yt({active:xe,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:It||bd,stopDisabled:It||vd}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${an("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${gt("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${v("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${an("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${gt("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${X("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",fe("flowSelected"),"oq-settings-field--compact")}
              ${X("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",$s("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${v("hp2Compressor")?X("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",$s("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${X("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",E("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${X("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Un(B("hp1Failures","None")),"oq-settings-field--compact")}
              ${v("hp2Failures")?X("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Un(B("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:Cr,available:!0,openDisabled:Tt(Cr),cardMarkup:Kt({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:Cr,statusCopy:V?"Wacht totdat CM100 actief is voordat je autotune start.":O?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${n.entities.flowAutotuneStart||n.entities.flowAutotuneAbort?Yt({active:O,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:N||ji,stopDisabled:N||dd}):""}
            ${n.entities.flowAutotuneApply?Re("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",N||pd):""}
          `,metrics:`
            ${X("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",sd,"oq-settings-field--compact")}
            ${X("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",ld,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:kr,available:e,openDisabled:Tt(kr),cardMarkup:Kt({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s(H)}`,status:kr,statusCopy:q?"Wacht totdat CM100 actief is voordat je de boiler-test start.":k?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${n.entities.boilerPowerTestStart||n.entities.boilerPowerTestAbort?Yt({active:k,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:p||_i,stopDisabled:p||cd}):""}
            ${n.entities.boilerPowerTestApply?Re("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",p||ud):""}
          `,metrics:`
            ${X("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",G)}
            ${X("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",fe("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:Tr,available:me,openDisabled:Tt(Tr),cardMarkup:Kt({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:Tr,statusCopy:ge?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${n.entities.airPurgeStart||n.entities.airPurgeAbort?Yt({active:ge,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:ce||gd,stopDisabled:ce||md}):""}
          `,metrics:`
            ${X("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",qr,"oq-settings-field--compact")}
            ${X("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",co,"oq-settings-field--compact")}
            ${X("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",fe("flowSelected"),"oq-settings-field--compact")}
            ${Xf("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(Td=>Td.available);return{cm100Status:qd,cm100StartDisabled:u,cm100StopDisabled:g,serviceStatusCopy:kd,tasks:Cd}}function Tb(e){return`
      <div class="oq-settings-system-row oq-settings-system-row--with-action oq-settings-service-row" data-oq-service-task="${s(e.key)}">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">${s(e.label)}</p>
          <strong class="oq-settings-system-row-value">${s(e.status)}</strong>
          <p class="oq-settings-system-row-note">${s(e.summary)}</p>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${s(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>
      </div>
    `}function Eb(){const e=ru();return ie("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${n.entities.commissioningCm100Start?Re("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${n.entities.commissioningCm100Stop?Re("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(t=>Tb(t)).join("")}
          </div>
        </div>
      `)}function $b(){const e=String(n.systemModal||"").replace(/^service-task-/,""),o=ru().tasks.find(r=>r.key===e);return o?`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task" data-oq-service-task-scroller role="dialog" aria-modal="true" aria-labelledby="oq-service-task-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Service</p>
              <h2 class="oq-helper-modal-title" id="oq-service-task-modal-title">${s(o.title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit ${s(o.title)}">\xD7</button>
          </div>
          <p class="oq-helper-modal-copy">${s(o.summary)}</p>
          <div class="oq-settings-service-task-modal-body">
            ${o.cardMarkup}
          </div>
          <div class="oq-helper-modal-actions">
            ${o.modalActions||""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
          </div>
        </section>
      </div>
    `:""}function Os(){if(!v("hpGeneration"))return"";const e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:ws,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:ws,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:Ph,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},t=n.entities.hpGeneration||{},o=String(E("hpGeneration")||""),r=qn(t),a=n.loadingEntities||n.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${r.map(i=>{const l=e[i]||{};return dr({key:"hpGeneration",option:i,currentValue:o,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function Ab(){const e=Zn(),t=n.entities.hpGeneration||{},o=v("hpGeneration")&&qn(t).length>0;return!e&&!o?"":ie("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
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
            ${!o||n.loadingEntities||n.busyAction==="save-hpGeneration"?"disabled":""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `)}function au(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!v("boilerCvAssistEnabled"))return"";const t=A("boilerCvAssistEnabled"),o=v("boilerRatedHeatPower"),r=nt("boilerRatedHeatPower"),a=Le("boilerRatedHeatPower"),i=n.loadingEntities||n.busyAction==="switch-boilerCvAssistEnabled",c=o?oo({key:"boilerRatedHeatPower",value:a,meta:r,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,d=t&&o?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${s(e)}">
          ${ke("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${ro("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",t,i)}
              </div>
            `,"oq-settings-field--compact")}

          ${t?ke("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${c}
              </div>
            `,t&&o?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",d):""}
        </div>
      `}function Hb(){if(!v("boilerCvAssistEnabled"))return"";const e=A("boilerCvAssistEnabled");return ie("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",au())}function Mb(){const e=n.complete===!0?"Afgerond":n.complete===!1?"Open":"Laden...",t=n.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":n.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return ie("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
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
              ${n.busyAction==="reset"?"disabled":""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${s(t)}</p>
        </div>
      `)}function Pb(){if(!v("trendHistoryEnabled")&&!v("lifetimeEnergyHistoryEnabled"))return"";const e=A("trendHistoryEnabled"),t=e&&A("trendHistoryFlashEnabled"),o=v("lifetimeEnergyHistoryEnabled"),r=o&&A("lifetimeEnergyHistoryEnabled"),a=t?he("trendHistoryFlashAvailable","Alleen live"):"Alleen live",i=o?jc(he("lifetimeEnergyHistoryAvailable","Geen data")):"Geen data";return ie("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${v("trendHistoryEnabled")?Mr("Live diagnose",e?"Aan":"Uit","Live",e):""}
            ${v("trendHistoryFlashEnabled")?Mr("Diagnosehistorie",a,t?"Permanent geheugen":"Uit",t):""}
            ${o?Mr("Energiehistorie",i,r?"Permanent geheugen":"Uit",r):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function Nb(){if(!v("lifetimeEnergyHistoryEnabled"))return"";const e=n.energyHistoryImportRecords.length,t=new Set(n.energyHistoryImportHourRecords.map(c=>c.dateKey)).size,o=[];e>0&&o.push(`${e} dagrecords`),t>0&&o.push(`${t} uurdagen`),n.energyHistoryImportRange&&o.push(n.energyHistoryImportRange),n.energyHistoryImportSource&&o.push(n.energyHistoryImportSource),n.energyHistoryImportInvalidCount>0&&o.push(`${n.energyHistoryImportInvalidCount} regels niet gebruikt`);const r=!!n.energyHistoryImportFileName,a=e>0||t>0,i=Number(n.energyHistoryImportProgressPercent||0),l=n.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
      <div class="oq-settings-storage-import">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie importeren</h4>
            <p>Vul ontbrekende dagtotalen en uurdetail aan vanuit een OpenQuatt- of Quatt-exportbestand.</p>
          </div>
          ${r?"":`
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-energy-history-import-file">
              Bestand kiezen
            </button>
          `}
        </div>
        ${r?`
          <div class="oq-settings-storage-import-card">
            <div class="oq-settings-storage-import-file">
              <strong>${s(n.energyHistoryImportFileName)}</strong>
              ${o.length?`<p>${s(o.join(" \xB7 "))}</p>`:""}
              ${n.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(n.energyHistoryImportNotice)}</p>`:""}
              ${n.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(n.energyHistoryImportError)}</p>`:""}
            </div>
            <div class="oq-settings-storage-import-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-energy-history-import-file" ${n.energyHistoryImportBusy?"disabled":""}>
                Wissen
              </button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="import-energy-history-file" ${n.energyHistoryImportBusy||!a?"disabled":""}>
                ${s(l)}
              </button>
            </div>
          </div>
        `:`
          ${n.energyHistoryImportNotice?`<p class="oq-settings-storage-import-notice">${s(n.energyHistoryImportNotice)}</p>`:""}
          ${n.energyHistoryImportError?`<p class="oq-settings-storage-import-error">${s(n.energyHistoryImportError)}</p>`:""}
        `}
      </div>
    `}function Rb(){if(!v("lifetimeEnergyHistoryEnabled"))return"";const e=tr(n.energyHistoryExportMode),t=Oo.map(r=>`
      <option value="${s(r.id)}" ${r.id===e?"selected":""}>
        ${s(r.label)}
      </option>
    `).join(""),o=n.energyHistoryExportBusy?"Exporteren...":"Exporteren";return`
      <div class="oq-settings-storage-import oq-settings-storage-export">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie exporteren</h4>
            <p>Download bewaarde energiegegevens om ze later op een andere OpenQuatt te importeren.</p>
          </div>
          <div class="oq-settings-storage-export-controls">
            <select class="oq-helper-select oq-settings-storage-export-select" data-oq-energy-history-export-mode="true" ${n.energyHistoryExportBusy?"disabled":""}>
              ${t}
            </select>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="export-energy-history" ${n.energyHistoryExportBusy?"disabled":""}>
              ${s(o)}
            </button>
          </div>
        </div>
        ${n.energyHistoryExportNotice?`<p class="oq-settings-storage-import-notice">${s(n.energyHistoryExportNotice)}</p>`:""}
        ${n.energyHistoryExportError?`<p class="oq-settings-storage-import-error">${s(n.energyHistoryExportError)}</p>`:""}
      </div>
    `}function Lb(){const e=v("trendHistoryEnabled")&&A("trendHistoryEnabled"),t=e&&v("trendHistoryFlashEnabled")&&A("trendHistoryFlashEnabled"),o=v("lifetimeEnergyHistoryEnabled"),r=o&&A("lifetimeEnergyHistoryEnabled"),a=o?he("lifetimeEnergyHistoryAvailable","Geen data"):"Geen data",i=v("lifetimeEnergyHistoryClear")&&a!=="Geen data"&&a!=="\u2014",l=jc(a),c=e&&v("trendHistoryFlush"),d=v("lifetimeEnergyHistoryCapture"),u=zc(),g=String(n.energyHistoryRaw||"").includes("@hour_retention|"),b=g&&!u.hourPartitionAvailable,f=g?b?"Alleen live":Kc(u.hourStoredDayCount,"Geen uurdata"):"Laden...",w=g?b?"Niet beschikbaar":Jr(u.hourStorageKb):"Laden...",p=g?b?"Niet beschikbaar":Zr(u.hourWriteCount):"Laden...",h=g?b?"Niet beschikbaar":Uc(u.hourLastWriteTimestampS):"Laden...",y=Io(u.hourOldestDateKey),S=Io(u.hourNewestDateKey),q=g?u.hourPartitionAvailable?`${y} t/m ${S}`:"Live beschikbaar; bewaren in Flash vraagt een nieuwere Flash-indeling.":"Uurdetailstatus wordt opgehaald.",C=[{title:"Diagnosegeschiedenis",meta:"Diagnose",shortLabel:"Diagnose",primary:he("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${he("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:he("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:he("trendHistoryFlashSize")},{label:"Opslagacties",value:he("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:he("trendHistoryFlashLastFlush","Geen data")}]},{title:"Dagtotalen",meta:"Resultaten",shortLabel:"Dag",primary:l,note:`${he("lifetimeEnergyHistoryOldest","Geen data")} t/m ${he("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:l},{label:"Opslagruimte",value:he("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:he("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:he("lifetimeEnergyHistoryLastWrite","Geen data")}]},v("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Resultaten",shortLabel:"Uur",primary:f,note:q,items:[{label:"Dagen bewaard",value:f},{label:"Opslagruimte",value:w},{label:"Opslagacties",value:p},{label:"Laatst opgeslagen",value:h}]}:null];return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
                ${Pr("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Na een herstart of update zijn deze tijdelijke gegevens niet meer beschikbaar.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
                ${Pr("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat deze gegevens ongeveer elk uur op.","Alleen recente diagnosegegevens; bestaande geschiedenis blijft staan.","Permanent geheugen")}
                ${c?`
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Diagnose nu opslaan</h4>
                      <p>Sla de huidige diagnosegegevens direct op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    ${Nr("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!t,busyLabel:"Opslaan..."})}
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
                ${Pr("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Zo blijven je resultaten ook na een herstart of update beschikbaar. OpenQuatt slaat dit op aan het einde van de dag en bij een normale afsluiting.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Permanent geheugen")}
                ${Kf("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur mag bewaren voor de daggrafiek.","Geavanceerd")}
                ${d?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Vandaag alvast opslaan</h4>
                      <p>Sla de gegevens van vandaag nu op, bijvoorbeeld v\xF3\xF3r een update of herstart.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${Nr("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!r,busyLabel:"Opslaan..."})}
                    </div>
                  </div>
                `:""}
                ${Rb()}
                ${Nb()}
                ${v("lifetimeEnergyHistoryClear")?`
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle bewaarde dagtotalen. Je begint daarna opnieuw met het opbouwen van je energiehistorie.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${Nr("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!i,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}
                    </div>
                  </div>
                `:""}
              </div>
            </section>
          </div>
          ${Yf(C)}
          <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> OpenQuatt schrijft deze gegevens niet continu weg, maar alleen op vaste momenten. Zo blijft duidelijk wat er wordt bewaard en hoeveel geheugen daarvoor wordt gebruikt.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `}function Ob(){const e=le()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${tu()}
          </div>
          <div class="oq-settings-curve-shell">
            ${iu()}
          </div>
          ${Qc()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${Zc()}
          ${nu()}
        </div>
      `;return ie("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${Yc()}
        ${eu()}
        ${e}
      `)}function Fb(){return ie("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",Xc())}function xb(){const e=v("otEnabled"),t=v("cicPollingEnabled")||v("cicFeedUrl"),o=v("cicCompatibilityMode"),r=v("otLinkProblem")||v("cicDataStale")||v("cicJsonFeedOk");if(!e&&!t&&!o&&!r)return"";const a=vt("cicPollingEnabled"),i=vt("otEnabled"),l=({label:p,value:h,active:y=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${y?" is-warning":""}">
        <dt>${s(p)}</dt>
        <dd>${s(h)}</dd>
      </div>
    `,c=(p,h,y="Actief",S="Normaal",q={})=>{if(!v(p))return"";const C=U(p);return l({label:h,value:C?y:S,active:q.warningWhenActive?C:!1})},d=(p,h,y={})=>{const S=y.fallbackKey||"";return!v(p)&&!(S&&v(S))?"":l({label:h,value:fe(v(p)?p:S,y)})},u=(p,h)=>{const y=h.filter(Boolean).join("");return y?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(p)}</h4>
          <dl>${y}</dl>
        </article>
      `:""},g=v("cicFeedUrl")?`
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
            value="${s(String(Le("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${n.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",b=u("OpenTherm",[v("otLinkProblem")?l({label:"OT-link",value:i?U("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&U("otLinkProblem")}):"",c("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),c("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),d("otControlSetpoint","Control setpoint"),d("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),d("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),f=u("CIC-feed",[v("cicJsonFeedOk")?l({label:"JSON-feed",value:a?U("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!U("cicJsonFeedOk")}):"",v("cicDataStale")?l({label:"Data",value:a?U("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&U("cicDataStale")}):"",c("cicChEnabled","CH-vraag","Actief","Normaal"),c("cicCoolingEnabled","Koeling","Actief","Normaal"),d("cicControlSetpoint","Control setpoint"),d("cicRoomSetpoint","Room setpoint"),d("cicRoomTemp","Room temperature"),d("cicFlowrate","Flow"),d("cicLastSuccessAge","Laatste succes")]),w=b||f?`
      <details class="oq-settings-integration-diagnostics"${n.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${b}
          ${f}
        </div>
      </details>
    `:"";return ie("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${Rr("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${Rr("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${Rr("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${g}
        </div>
        ${w}
      `)}function Db(){if(!ba.some(T=>v(T)))return"";const t=vt("cicPollingEnabled"),o=vt("otEnabled"),r=(T={})=>T.haValueKey||(T.haKeys||[]).find($=>!/valid$/i.test($))||"",a=(T={})=>T.haValidKey||(T.haKeys||[]).find($=>/valid$/i.test($))||"",i=(T="",$="")=>!!T&&!!$&&v(T)&&v($)&&U($),l=(T={})=>i(r(T),a(T)),c=(T,$={})=>T==="CIC"?t:T==="OT thermostat"?o:T==="HA input"?l($):T==="CIC or HA input"?t||l($):T==="Flowmeter HP2"?v("hp2Flow"):T==="Local aggregate HP1/HP2"?v("flowLocal")||v("hp2Flow"):!0,d=(T,$={})=>T==="CIC"&&!t?"CIC-polling staat uit":T==="OT thermostat"&&!o?"OpenTherm staat uit":T==="HA input"&&!l($)?"HA-bron ongeldig":T==="CIC or HA input"&&!t&&!l($)?"CIC en HA ontbreken":T==="Flowmeter HP2"&&!v("hp2Flow")?"HP2-flow ontbreekt":T==="Local aggregate HP1/HP2"&&!v("flowLocal")&&!v("hp2Flow")?"Lokale flow ontbreekt":"",u=(T,$="Actief",N="Normaal")=>v(T)?U(T)?$:N:"",g=(T,$={})=>{const N=String(T||"").trim();return N?$.optionLabels?.[N]||Ne(N):""},b=(T,$={})=>{const N=String(E(T)||"").trim();return N?g(N,$):""},f=T=>{const $=ur(T,"");return $?Ne($):""},w=(...T)=>T.find($=>String($||"").trim())||"",p=()=>{const T=b("waterSupplySource");if(String(E("waterSupplySource")||"")==="Local"&&v("localWaterSupplyTempSource")){const $=b("localWaterSupplyTempSource");return $?`${T} - ${$}`:T}return T},h=()=>{const T=String(E("flowSource")||"").trim();if(T==="Outdoor unit"){if(v("qFlowSource")){const $=String(E("qFlowSource")||"").trim(),N=String(E("hpGeneration")||"").trim();return $==="Local"||$==="Auto"&&N==="V1"?$==="Auto"?"Lokaal (auto)":"Lokaal":w(b("outdoorUnitFlowMode"),$==="Auto"?"Buitenunit (auto)":"Buitenunit")}return w(b("outdoorUnitFlowMode"),"Quatt-flow")}return Ne(T)},y=()=>{const T=String(E("outsideTempSource")||"").trim();if(T!=="Auto")return Ne(T);const $=M("outsideTempLocalAggregated"),N=M("outsideTempHa"),W=!Number.isNaN($),K=v("outsideTempHaValid")?U("outsideTempHaValid")&&!Number.isNaN(N):!Number.isNaN(N);return W&&K?N<=$?"HA-invoer":"Buitenunit":K?"HA-invoer":W?"Buitenunit":"Auto"},S=({label:T,value:$="",key:N="",active:W=!1})=>{const K=$||(N?fe(N):"");return K?`
        <div class="oq-settings-source-row${W?" is-warning":""}">
          <span>${s(T)}</span>
          <strong>${s(K)}</strong>
        </div>
      `:""},q=({label:T="HA input",valueKey:$="",validKey:N="",value:W=""})=>i($,N)?[S({label:T,key:$,value:W}),S({label:"HA status",value:"Geldig"})]:[],C=(T,$={})=>{if(!v(T))return{markup:"",warning:""};const N=n.entities[T]||{},W=String(E(T)||""),R=qn(N).filter(Y=>c(Y,$)),V=W&&!c(W,$),P=W==="HA input"&&$.keepUnavailableCurrent!==!0,_=(V&&!P&&!R.includes(W)?[W,...R]:R).map(Y=>{const pe=!c(Y,$),ce=g(Y,$),J=pe?`${ce} (${d(Y,$)||"niet beschikbaar"})`:ce;return`<option value="${s(Y)}" ${Y===W?"selected":""}>${s(J)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s($.label||"Bron")}</span>
              ${$.infoCopy?Sn($.infoId||T,$.infoTitle||$.label||"Bron",$.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s(T)}" ${n.loadingEntities?"disabled":""}>
              ${_}
            </select>
          </label>
        `,warning:V?`Huidige bron niet beschikbaar: ${d(W,$)}`:""}},k=({key:T,title:$,select:N,secondarySelect:W=null,secondarySelects:K=null,rows:R=[]})=>{const V=N&&N.when!==!1?C(N.key,N):{markup:"",warning:""},O=(Array.isArray(K)?K:W?[W]:[]).filter(J=>J&&J.when!==!1).map(J=>C(J.key,J)).filter(J=>J.markup),_=O.map(J=>J.markup).join(""),Y=O.map(J=>J.warning).find(Boolean)||"",pe=R.filter(Boolean).join(""),ce=`${V.markup}${_}`;return!ce&&!pe?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s(T||N.key)}">
          <div class="oq-settings-source-card-head">
            <h4>${s($)}</h4>
          </div>
          ${ce?`
            <div class="oq-settings-source-controls">
              ${ce}
            </div>
          `:""}
          ${V.warning||Y?`
            <p class="oq-settings-source-warning">${s(V.warning||Y)}</p>
          `:""}
          ${pe?`<div class="oq-settings-source-rows">${pe}</div>`:""}
        </article>
      `},H=String(E("waterSupplySource")||""),x=String(E("flowSource")||""),F=String(E("qFlowSource")||""),G=[k({key:"room-temperature",title:"Kamertemperatuur",select:{key:"roomTempSource",label:"Kamertemperatuur bron",haKeys:["roomTempHa","roomTempHaValid"]},rows:[S({label:"Actieve waarde",key:"roomTemp"}),S({label:"Gebruikte bron",value:f("roomTempEffectiveSource")}),t?S({label:"CIC",key:"cicRoomTemp"}):"",o?S({label:"OpenTherm",key:"otRoomTemp"}):"",...q({valueKey:"roomTempHa",validKey:"roomTempHaValid"})]}),k({key:"room-setpoint",title:"Kamer setpoint",select:{key:"roomSetpointSource",label:"Setpoint bron",haKeys:["roomSetpointHa","roomSetpointHaValid"]},rows:[S({label:"Actieve waarde",key:"roomSetpoint"}),S({label:"Gebruikte bron",value:f("roomSetpointEffectiveSource")}),t?S({label:"CIC",key:"cicRoomSetpoint"}):"",o?S({label:"OpenTherm",key:"otRoomSetpoint"}):"",...q({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"})]}),k({key:"water-supply",title:"Aanvoertemperatuur",select:{key:"waterSupplySource",label:"Aanvoer bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:H==="Local"&&v("localWaterSupplyTempSource")},rows:[S({label:"Actieve waarde",key:"supplyTemp"}),S({label:"Gebruikte bron",value:p()}),S({label:"Lokale selectie",key:"waterSupplyTempEsp"}),S({label:"PT1000",key:"waterSupplyTempPt1000"}),S({label:"DS18B20",key:"waterSupplyTempDs18b20"}),t?S({label:"CIC",key:"cicWaterSupplyTemp"}):"",...q({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),k({key:"flow-source",title:"Flow",select:{key:"flowSource",label:"Flow bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:t||x==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Quatt-flow bron",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:x==="Outdoor unit"&&v("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Flowmeterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:x==="Outdoor unit"&&v("outdoorUnitFlowMode")&&(!v("qFlowSource")||F!=="Local")}],rows:[S({label:"Actieve waarde",key:"flowSelected"}),S({label:"Gebruikte bron",value:h()}),S({label:"Lokaal",key:"controllerFlow"}),S({label:"Gecombineerd",key:"flowLocal"}),S({label:"HP1",key:"hp1Flow"}),S({label:"HP2",key:"hp2Flow"}),t?S({label:"CIC",key:"cicFlowrate"}):""]}),k({key:"outside-temperature",title:"Buitentemperatuur",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],infoId:"outsideTempSource-auto-info",infoCopy:i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn zowel buitenunit als HA-invoer geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een van beide geldig, dan wordt die gebruikt.":"Auto gebruikt de geldige buitentemperatuur van de buitenunit."},rows:[S({label:"Actieve waarde",key:"outsideTempSelected"}),S({label:"Gebruikte bron",value:y()}),S({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...q({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"})]}),k({key:"heating-enable",title:"Warmtetoestemming",select:{key:"heatingEnableSource",label:"Warmtetoestemming bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],keepUnavailableCurrent:!0},rows:[S({label:"Verwarming toegestaan",value:u("heatingEnableSelected","Ja","Nee")}),S({label:"Gebruikte externe bron",value:f("heatingEnableEffectiveSource")}),S({label:"Bronselectie",value:u("heatingEnableValid","Geldig","Ongeldig")}),o?S({label:"OpenTherm",value:u("otThermostatChEnable","Toestemming","Geen toestemming")}):"",t?S({label:"CIC",value:u("cicChEnabled","Toestemming","Geen toestemming")}):"",...q({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:u("heatingEnableHa","Toestemming","Geen toestemming")})]}),k({key:"cooling-enable",title:"Koeltoestemming",select:{key:"coolingEnableSource",label:"Koeltoestemming bron",haKeys:["coolingEnableHa","coolingEnableHaValid"]},rows:[S({label:"Actieve waarde",value:u("coolingEnableSelected","Actief","Niet actief")}),S({label:"Gebruikte bron",value:f("coolingEnableEffectiveSource")}),S({label:"Handmatig",value:u("manualCoolingEnable","Aan","Uit")}),t?S({label:"CIC",value:u("cicCoolingEnabled","Actief","Normaal")}):"",...q({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:u("coolingEnableHa","Actief","Normaal")})]})].filter(Boolean);return G.length?ie("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${G.join("")}</div>`):""}function Ib(){return ie("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${s(Ua())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(za())}</p>
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
                <strong class="oq-settings-quickstart-status-value">${s(pi())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(gi())}</p>
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
      `)}function pi(){const e=n.apiSecurityStatus;return e?e.pending_restart?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function gi(){const e=n.apiSecurityStatus;return e?e.pending_restart?e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":e.key?"De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.":"Er is nog geen API-sleutel opgeslagen.":"API-encryptie wordt geladen."}function Wb(){const e=n.settingsBackupBusy,t=cn.length,o=tn.length;return ie("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${s(String(t))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${s(String(o))}</strong>
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
          ${n.settingsBackupError?`<p class="oq-settings-backup-error">${s(n.settingsBackupError)}</p>`:""}
        </div>
      `)}function Bb(){const e=n.settingsBackupBusy;return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
          ${n.settingsBackupError?`<p class="oq-settings-backup-error">${s(n.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
          </div>
        </section>
      </div>
    `}function Vb(){const e=n.settingsBackupDraft;if(!e)return"";const t=e.summary||hc(e),o=String(e.source?.installation||e.source?.device||"Onbekend"),r=Zn(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",c=ne(),d=typeof Z=="function"?Z():"",u=l!=="Onbekend"&&d&&l!==d,g=o!=="Onbekend"&&o!==r,b=u||g?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":t.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}" data-oq-modal="system">
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
              <strong class="oq-helper-modal-value">${s(o)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(l)} \xB7 Firmware: ${s(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(d)} \xB7 Firmware: ${s(c||"Onbekend")}</span>
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
            ${t.sectionSummaries.map(f=>`
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${s(f.label)}</strong>
                    <em>${s(`${f.total} ${f.total===1?"instelling":"instellingen"} \xB7 ${f.differenceCount?`${f.differenceCount} ${f.differenceCount===1?"verschil":"verschillen"}`:"Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${s(f.differenceCount?`${f.differenceCount} instelling${f.differenceCount===1?"":"en"} wijkt af of ontbreekt.`:"Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${f.rows.map(w=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(w.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(w.label)}</strong>
                          <span>${s(w.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(w.status)}">
                            <span>Backup</span>
                            <strong>${s(w.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(w.status)}">
                            <span>Nu</span>
                            <strong>${s(w.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${t.unknown||t.requiredMissing||g?" oq-settings-action-note--warning":""}">${s(b)}</p>
          ${n.settingsBackupError?`<p class="oq-settings-backup-error">${s(n.settingsBackupError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${n.settingsBackupBusy?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${n.settingsBackupBusy?"disabled":""}>${n.settingsBackupBusy?"Herstellen...":"Herstellen"}</button>
          </div>
        </section>
      </div>
    `}function _b(){const e=Xn(),t=Tl(),o=n.busyAction==="restartAction";return ie("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          <div class="oq-settings-system-row" data-oq-diagnostics-row="uptime">
            <span class="oq-settings-system-row-label">Uptime</span>
            <strong class="oq-settings-system-row-value">${s(Ra())}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="ip">
            <span class="oq-settings-system-row-label">IP-adres</span>
            <strong class="oq-settings-system-row-value">${s(La())}</strong>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="updates">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Updates</p>
              <strong class="oq-settings-system-row-value">${s(e)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="webserverLog">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Logboek</p>
              <strong class="oq-settings-system-row-value">${s($c())}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="debugRecording">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Debugopname</p>
              <strong class="oq-settings-system-row-value">${s(sr())}</strong>
              <p class="oq-settings-system-row-note">${s(ii())}</p>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="datetime">
            <span class="oq-settings-system-row-label">Datum/tijd</span>
            <strong class="oq-settings-system-row-value">${s(t)}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="espTemp">
            <span class="oq-settings-system-row-label">ESP-temp</span>
            <strong class="oq-settings-system-row-value">${s(Ll())}</strong>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="restart">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Herstart OpenQuatt</p>
              <strong class="oq-settings-system-row-value">Opnieuw opstarten</strong>
              <p class="oq-settings-system-row-note">Dit onderbreekt de webinterface kort.</p>
            </div>
            <button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${o?"disabled":""}
            >
              ${o?"Herstarten...":"Herstarten"}
            </button>
          </div>
        </div>
      `)}function jb(){const e=[Ps("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),Ps("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return ie("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${ee("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${v("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}function Kb(){return ie("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",di())}function Ub(){return di("oq-settings-grid oq-settings-grid--modal")}function zb(){const e=[ee("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),gt("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${j("coolingDemandMax")} max`}),ee("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),ee("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."),ee("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."),ee("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),t=v("coolingWithoutDewPointMode"),o=[v("coolingGuardMode")?X("coolingGuardMode","Actieve beveiligingsroute","Laat zien of koeling nu via dauwpuntmeting, dauwpuntsbenadering of expliciet toestaan wordt begrensd.",B("coolingGuardMode","Onbekend")):"",v("coolingFallbackNightMinOutdoorTemp")?X("coolingFallbackNightMinOutdoorTemp","Nachtminimum buitentemperatuur","Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken de dauwpuntsbenadering conservatiever.",B("coolingFallbackNightMinOutdoorTemp","\u2014")):"",v("coolingFallbackMinSupplyTemp")?X("coolingFallbackMinSupplyTemp","Berekende minimum watertemperatuur","De conservatieve ondergrens die OpenQuatt gebruikt bij de dauwpuntsbenadering. Als die grens door warm weer hoger wordt dan zinvol is, houdt OpenQuatt rekening met de kamertemperatuur.",B("coolingFallbackMinSupplyTemp","\u2014")):"",v("coolingEffectiveMinSupplyTemp")?X("coolingEffectiveMinSupplyTemp","Actieve minimum ondergrens","De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, dauwpuntsbenadering, of de ingestelde minimumgrens bij expliciet toestaan.",B("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean);if(!e.length&&!t&&!o.length)return"";const r={"Dew point required":"Koel alleen als er een betrouwbare dauwpuntmeting beschikbaar is. Zonder dauwpuntmeting blijft koeling geblokkeerd.","Allow without dew point":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use fallback":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, use dew point approximation":"Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.","Allow without dew point, user responsibility":"Sta koeling expliciet toe zonder dauwpuntgrens. Ook een beschikbare dauwpuntmeting wordt dan genegeerd; alleen de ingestelde minimale koel-aanvoer geldt."};return ie("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
        ${e.length?`
          <div class="oq-settings-grid">
            ${e.join("")}
          </div>
        `:""}
        ${t||o.length?`
          <div class="oq-settings-grid">
            ${t?eb("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",r,"oq-settings-field--span-2"):""}
            ${t?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline">
              <summary>Dauwpuntsbenadering bekijken</summary>
              <div class="oq-settings-callout-body">
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
            ${o.join("")}
          </div>
        `:""}
      `)}function iu(){const o={top:22,right:18,bottom:38,left:34},r=560-o.left-o.right,a=240-o.top-o.bottom,i=de[0].outdoor,l=de[de.length-1].outdoor,c=w=>o.left+(w-i)/(l-i)*r,d=w=>o.top+(70-w)/50*a,u=[20,30,40,50,60,70].map(w=>{const p=d(w);return`
          <line x1="${o.left}" y1="${p}" x2="${560-o.right}" y2="${p}" class="oq-helper-curve-grid" />
          <text x="8" y="${p+4}" class="oq-helper-curve-axis-label">${w}\xB0</text>
        `}).join(""),g=de.map(w=>`
        <text x="${c(w.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(w.label)}</text>
      `).join(""),b=de.map(w=>`${c(w.outdoor)},${d(Se(w.key,E(w.key)))}`).join(" "),f=de.map(w=>{const p=Se(w.key,E(w.key));return`
          <g>
            <circle
              cx="${c(w.outdoor)}"
              cy="${d(p)}"
              r="7"
              class="oq-helper-curve-point ${n.draggingCurveKey===w.key?"is-dragging":""}"
              data-curve-key="${s(w.key)}"
            />
            <text x="${c(w.outdoor)}" y="${d(p)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${p.toFixed(1)}\xB0</text>
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
          ${f}
          ${g}
        </svg>
      </div>
    `}function su(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${Os()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${Os()}
        ${rt()}
      </section>
    `}function Gb(e){const t=String(e||"").trim();if(!t)return"";try{const o=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`http://${t}`);return o.protocol!=="http:"&&o.protocol!=="https:"?"":(o.port||(o.port="8080"),(!o.pathname||o.pathname==="/")&&(o.pathname="/beta/feed/data.json"),o.toString())}catch{return""}}function lu(){const e=String(E("cicFeedUrl")||"").trim(),t=n.quickStartCicFeedUrlDraft===null?e:String(n.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:t,normalizedDraftUrl:Gb(t)}}function cu(e,t){return`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${Sn("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
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
    `}function Fs(e){const t=String(e||"").trim().toLowerCase();return t==="heatpump_controller_q"||t.includes("q-edition")||t.includes("controller q")?"heatpump_controller_q":t==="heatpump_listener"||t.includes("listener")?"heatpump_listener":t==="waveshare"||t.includes("waveshare")?"waveshare":""}function uu(){let e=Fs(E("hardwareProfileText")),t=!1;return e||(e=Fs(yt().hardwareProfile)),!e&&v("qFlowSource")?(e="heatpump_controller_q",t=!0):!e&&v("flowSource")&&v("cicPollingEnabled")&&(e="remote",t=!0),{profile:e,inferred:t,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function ao(){const e=String(E("hpGeneration")||"").trim(),t=uu(),o=e==="V1",{isQEdition:r,isRemoteProfile:a,hardwareKnown:i}=t,l=o&&a,c=r?o?"Local":"Outdoor unit":"",d=l?"CIC":"Outdoor unit",u=String(E("flowSource")||"").trim(),g=String(E("qFlowSource")||"").trim(),b=A("cicPollingEnabled"),f=A("cicJsonFeedOk"),w=A("cicDataStale"),p=lu(),h=u===d&&(!c||g===c),y=l?h&&b&&!!p.configuredUrl:h,S=l?"cicFlowrate":r&&o?"controllerFlow":Z()==="duo"?"flowLocal":"hp1Flow",q=M(S),C=Number.isFinite(q),k=A("quickFlowTest");let H=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&y?H=f&&C?q>0?"Geldig":"Bron actief, geen circulatie":w?"Geen actuele CiC-data":f?"Verbonden, wacht op flow":"Verbinding controleren":!l&&y&&(H=C?q>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");const x=l?"CiC JSON-feed":r&&o?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",F=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":r&&o?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:t.hardwareLabel,requiresCic:l,qFlowTarget:c,flowSourceTarget:d,configurationApplied:y,sourceLabel:x,explanation:F,status:H,flowValue:q,flowAvailable:C,flowTestActive:k,canRunFlowTest:y,...p,canApply:i&&v("flowSource")&&(!c||v("qFlowSource"))&&(!l||v("cicPollingEnabled")&&v("cicFeedUrl")&&!!p.normalizedDraftUrl)}}function mi(){const e=uu(),{isQEdition:t,isRemoteProfile:o}=e,r=String(E("roomTempSource")||"").trim(),a=String(E("roomSetpointSource")||"").trim(),i=r===a&&["CIC","OT thermostat","HA input"].includes(r)?r:"",l=t?"OT thermostat":n.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),c=lu(),u=r===l&&a===l&&(l!=="OT thermostat"||A("otEnabled"))&&(l!=="CIC"||A("cicPollingEnabled")&&!!c.configuredUrl),g=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],b=M(g[0]),f=M(g[1]),w=Number.isFinite(b)&&Number.isFinite(f),p=l==="OT thermostat"?A("otEnabled")&&!A("otLinkProblem")&&w:l==="CIC"?A("cicJsonFeedOk")&&!A("cicDataStale")&&w:A("roomTempHaValid")&&A("roomSetpointHaValid")&&w;let h=t||o?"Nog activeren":"Hardwareprofiel niet herkend";u&&(h=p?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");const y=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",S=t?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:t,isRemoteProfile:o,selectedSource:l,sourceLabel:y,explanation:S,configurationApplied:u,status:h,roomTempValue:b,roomSetpointValue:f,valuesAvailable:w,...c,canApply:(t||o)&&v("roomTempSource")&&v("roomSetpointSource")&&(l!=="OT thermostat"||v("otEnabled"))&&(l!=="CIC"||v("cicPollingEnabled")&&v("cicFeedUrl")&&!!c.normalizedDraftUrl)}}function Qb(){const e=ao(),t=n.busyAction==="quickstart-flow-source"||n.busyAction==="quickstart-flow-refresh",o=n.busyAction==="quickstart-flow-test-start"||n.busyAction==="quickstart-flow-test-abort",r=t||o||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?cu(e,r):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ke("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
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
            ${r||!e.canApply?"disabled":""}
          >
            ${n.busyAction==="quickstart-flow-source"?"Flowconfiguratie opslaan...":e.configurationApplied?"Flowconfiguratie opnieuw opslaan":e.requiresCic?"CiC-flowconfiguratie opslaan":"Flowconfiguratie activeren"}
          </button>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="refresh-quickstart-flow-signal"
            ${r||!e.configurationApplied?"disabled":""}
          >
            ${n.busyAction==="quickstart-flow-refresh"?"Signaal controleren...":"Signaal opnieuw controleren"}
          </button>
          ${e.canRunFlowTest?`
            <button
              class="oq-helper-button ${e.flowTestActive?"":"oq-helper-button--ghost"}"
              type="button"
              data-oq-action="${e.flowTestActive?"abort-quickstart-flow-test":"start-quickstart-flow-test"}"
              ${t||o?"disabled":""}
            >
              ${o?e.flowTestActive?"Waterpomptest stoppen...":"Waterpomptest starten...":e.flowTestActive?"Waterpomptest stoppen":"Waterpomptest starten (30 sec)"}
            </button>
          `:""}
        </div>
        <p class="oq-settings-action-note">${e.flowTestActive?"Alleen de waterpomp draait op 400 iPWM. Het kan enkele seconden duren voordat de circulatie op gang komt en de flowmeter een waarde toont. De firmware stopt de test automatisch na maximaal 30 seconden.":"0 L/h kan normaal zijn als de circulatiepomp stilstaat. De waterpomptest gebruikt 400 iPWM, start geen compressor en stopt automatisch na 30 seconden."}</p>
        ${rt({nextDisabled:!e.configurationApplied||e.flowTestActive||o,nextDisabledLabel:o?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function Yb(){const e=mi(),t=n.busyAction==="quickstart-thermostat-source",o=e.status==="Geldig"?" is-active":"",r=e.isRemoteProfile?`
      <article class="oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${Sn("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
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
    `:"",a=e.selectedSource==="CIC"?cu(e,t):"",i=e.selectedSource==="HA input"?`
      <article class="oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ke("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
              <div class="oq-settings-quickstart-status">
                <div class="oq-settings-quickstart-status-row">
                  <div>
                    <p class="oq-settings-quickstart-status-label">${s(e.hardwareLabel)}</p>
                    <strong class="oq-settings-quickstart-status-value">${s(e.sourceLabel)}</strong>
                    <p class="oq-settings-quickstart-status-copy">${s(e.explanation)}</p>
                  </div>
                </div>
                <div class="oq-settings-source-rows">
                  <div class="oq-settings-source-row${o}"><span>Status</span><strong>${s(e.status)}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamertemperatuur</span><strong>${Number.isFinite(e.roomTempValue)?`${e.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                  <div class="oq-settings-source-row"><span>Kamer-setpoint</span><strong>${Number.isFinite(e.roomSetpointValue)?`${e.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"}</strong></div>
                </div>
              </div>
            `,"oq-settings-field--span-2")}
          ${r}
          ${a}
          ${i}
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-quickstart-thermostat-source" ${t||!e.canApply?"disabled":""}>
            ${t?"Thermostaatconfiguratie opslaan...":e.configurationApplied?"Thermostaatconfiguratie opnieuw opslaan":e.selectedSource==="OT thermostat"?"OpenTherm-configuratie activeren":"Thermostaatconfiguratie opslaan"}
          </button>
        </div>
        ${rt({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function Jb(){return!n.quickStartModalOpen||n.loadingEntities||n.complete===null||n.complete&&n.quickStartModalMode!=="generation"?"":n.quickStartModalMode==="generation"?`
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
            ${su("picker")}
          </section>
        </div>
      `:`
      <div class="oq-helper-modal-backdrop oq-helper-modal-backdrop--quickstart" data-oq-modal="quickstart-forced">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--quickstart" data-oq-quickstart-scroller data-oq-quickstart-step="${s(cv().id)}" role="dialog" aria-modal="true" aria-labelledby="oq-quickstart-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Quick Start</p>
              <h2 class="oq-helper-modal-title" id="oq-quickstart-modal-title">Rond eerst de Quick Start af</h2>
              <p class="oq-helper-modal-copy">Kies eerst de Quatt Hybrid en loop daarna stap voor stap door de basisinstellingen.</p>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-quickstart-modal" aria-label="Sluit Quick Start-popup">\xD7</button>
          </div>
          <div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">
            ${iv()}
            ${uv()}
          </div>
        </section>
      </div>
    `}function du(){return n.root?n.root.querySelector("[data-oq-quickstart-scroller]"):null}function Zb(){const e=du();return e?{stepId:String(e.dataset.oqQuickstartStep||""),scrollHeight:e.scrollHeight,scrollTop:e.scrollTop,stickToBottom:ai(e)}:null}function Xb(e){if(!e)return;const t=du();if(!t||String(t.dataset.oqQuickstartStep||"")!==e.stepId)return;if(e.stickToBottom){t.scrollTop=t.scrollHeight;return}const o=e.scrollTop+(t.scrollHeight-e.scrollHeight);t.scrollTop=Math.max(0,o)}function xs(e,t=!0){if(!e)return;const o=Number(n.quickStartScrollRestoreToken||0)+1;n.quickStartScrollRestoreToken=o;const r=()=>{n.quickStartScrollRestoreToken!==o||!n.quickStartModalOpen||Xb(e)};if(t){window.requestAnimationFrame(r);return}r()}function Ds(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${eu()}
        ${Yc("oq-settings-grid oq-settings-grid--quickstart")}
        ${rt()}
      </section>
    `}function ev(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${au("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${rt()}
      </section>
    `}function tv(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${Jc("oq-settings-grid oq-settings-grid--quickstart")}
        ${rt()}
      </section>
    `}function nv(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(le()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(le()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${le()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${tu()}</div>
            <div class="oq-settings-curve-shell">
              ${iu()}
            </div>
            ${Qc()}
          `:`
            ${Zc("oq-settings-grid oq-settings-grid--quickstart")}
            ${nu()}
          `}
        ${rt()}
      </section>
    `}function ov(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${Xc("oq-settings-grid oq-settings-grid--quickstart")}
        ${rt()}
      </section>
    `}function rv(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${di("oq-settings-grid oq-settings-grid--quickstart")}
        ${rt()}
      </section>
    `}function av(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(Ke("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${dv()}
        ${n.controlNotice?`<p class="oq-helper-notice">${s(n.controlNotice)}</p>`:""}
        ${n.controlError?`<p class="oq-helper-error">${s(n.controlError)}</p>`:""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${n.busyAction?"disabled":""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${n.busyAction?"disabled":""}>
            ${n.busyAction==="apply"?"Afronden...":"Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${n.busyAction?"disabled":""}>
            ${n.busyAction==="reset"?"Resetten...":"Setup-status resetten"}
          </button>
        </div>
      </section>
    `}function iv(){return n.currentStep==="generation"?su():n.currentStep==="boiler"?v("boilerCvAssistEnabled")?ev():Ds():n.currentStep==="flow-source"?Qb():n.currentStep==="thermostat-source"?Yb():n.currentStep==="flow"?tv():n.currentStep==="heating"?nv():n.currentStep==="water"?ov():n.currentStep==="silent"?rv():n.currentStep==="confirm"?av():Ds()}function Ft(){return Ko.filter(e=>!e.optionalEntity||v(e.optionalEntity))}function Ke(e){const t=Ft().findIndex(o=>o.id===e);return`Stap ${Math.max(0,t)+1}`}function sv(e){const t=pr(),o=e===t,r=n.complete===!0||e<t;return{tone:o?"current":r?"done":"upcoming",label:o?"Actief":r?"Gereed":"Volgend",current:o}}function lv(e=!1){return Ft().map((t,o)=>{const r=sv(o);return`
        <button
          class="oq-helper-field oq-helper-field--step${e?" oq-helper-field--compact":""} is-${r.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${s(t.id)}"
          aria-current="${r.current?"step":"false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>${String(o+1).padStart(2,"0")}. ${s(t.title)}</h3>
            <span class="oq-helper-field-step-state">${r.label}</span>
          </div>
          <p>${s(t.copy)}</p>
        </button>
      `}).join("")}function cv(){const e=Ft();return e.find(t=>t.id===n.currentStep)||e[0]||Ko[0]}function pr(){return Math.max(0,Ft().findIndex(e=>e.id===n.currentStep))}function Is(e){const t=Ft(),o=Math.min(t.length-1,Math.max(0,pr()+e));n.currentStep=t[o]?.id||Ko[0].id}function rt(e={}){const t=pr(),o=Ft(),r=t>0?o[t-1]:null,a=t<o.length-1?o[t+1]:null;return`
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${t+1} van ${o.length}</strong>
          <span>${s(a?`Hierna: ${a.title}`:"Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${r?"":"disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${a&&!e.nextDisabled?"":"disabled"}>
            ${a?e.nextDisabled?e.nextDisabledLabel||"Configureer eerst":"Volgende":"Laatste stap"}
          </button>
        </div>
      </div>
    `}function uv(){const e=pr(),t=Ft();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${t.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${lv(!0)}
        </div>
        ${n.controlNotice?`<p class="oq-helper-notice">${s(n.controlNotice)}</p>`:""}
        ${n.controlError?`<p class="oq-helper-error">${s(n.controlError)}</p>`:""}
      </section>
    `}function dv(){const e=Ne(B("hpGeneration")),t=le()?"Stooklijn":"Power House",o=y=>Ne(B(y)),r=[],a=le()?[["Regelprofiel",o("curveControlProfile")],["Aanvoer bij -20\xB0C",j("curveM20")],["Aanvoer bij -10\xB0C",j("curveM10")],["Aanvoer bij 0\xB0C",j("curve0")],["Aanvoer bij 5\xB0C",j("curve5")],["Aanvoer bij 10\xB0C",j("curve10")],["Aanvoer bij 15\xB0C",j("curve15")],["Fallback-aanvoer",j("curveFallbackSupply")]]:[["Profiel",o("phResponseProfile")],["Rated maximum house power",j("housePower")],["Maximum heating outdoor temperature",j("houseOutdoorMax")],["Temperatuurreactie",j("phKp")],["Comfort onder setpoint",j("phComfortBelow")],["Comfort boven setpoint",j("phComfortAbove")]],i=String(E("flowControlMode")||""),l=ao(),c=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],d=mi(),u=[["Status",d.status],["Kamertemperatuur",Number.isFinite(d.roomTempValue)?`${d.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(d.roomSetpointValue)?`${d.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],g=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",j("manualIpwm")]:["Gewenste flow",j("flowSetpoint")]],b=v("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",A("boilerCvAssistEnabled")?"Ja":"Nee"],...A("boilerCvAssistEnabled")?[["Boiler rated heat power",j("boilerRatedHeatPower")]]:[]]:[],f=[["Maximale watertemperatuur",j("maxWater")]],w=[["Start stille uren",_r(E("silentStartTime"))||"\u2014"],["Einde stille uren",_r(E("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",j("silentMax")],["Maximaal niveau overdag",j("dayMax")]],p=y=>`
      <div class="oq-helper-review-list">
        ${y.filter(S=>S&&S[1]).map(([S,q])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(S)}</span>
                <strong class="oq-helper-review-value">${s(q)}</strong>
              </div>
            `).join("")}
      </div>
    `,h=(y,S,q="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(y)}</h3>
        ${q?`<p class="oq-helper-review-summary"><strong>${s(q)}</strong></p>`:""}
        ${p(S)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${h("Quatt Hybrid-versie",r,e)}
        ${h("Flowmeting",c,l.sourceLabel)}
        ${h("Verwarmingsstrategie",a,t)}
        ${h("Watertemperatuur",f)}
        ${h("Thermostaatgegevens",u,d.sourceLabel)}
        ${h("Flowregeling",g)}
        ${b.length?h("CV-ketel / boiler",b):""}
        ${h("Stille uren",w)}
      </div>
    `}function pv({label:e,value:t,tone:o,note:r,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(o)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(t)}</strong>
        <span>${s(r)}</span>
      </article>
    `}function gr(e,t=!1){return e.map(o=>pv({...o,value:Object.prototype.hasOwnProperty.call(o,"key")?We(o.key):o.value,status:t})).join("")}function hi(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function pu(){const e=jn();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(ve(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(t=>t.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function gu({className:e,title:t,copy:o,body:r,signature:a=""}){const i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${t?`<div class="oq-overview-system-copy"><h3>${s(t)}</h3><p>${s(o)}</p></div>`:""}
        ${r}
      </section>
    `}function mu(e,t){return t?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function gv(e,t){const o=t?"active":"neutral",r=mu(e,t);return`<span class="oq-overview-chip oq-overview-chip--${s(o)}" data-oq-bind="panel-status">${s(r)}</span>`}function mv(e){return`
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
    `}function hu(e,t,o,r){return`${o?mv(r):""}${gv(e,t)}`}function hv(e,t,o,r,a){if(!e)return;const i=ve({mode:t,running:o,warningActive:r,failureText:a});e.dataset.renderSignature!==i&&(mt(e,hu(t,o,r,a)),e.dataset.renderSignature=i)}function ta(e,t,o=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(o||B(t))}</strong>
      </div>
    `}function fv(e,t,o="blue",r=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(o)}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </article>
    `}function bv(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}function I(e,t,o=""){const r=Number(e);return Number.isNaN(r)?"\u2014":`${r.toFixed(t)}${o?` ${o}`:""}`}function vv(e){if(!Number.isFinite(e)||e<0)return"\u2014";const t=Math.floor(e),o=Math.floor(t/1440),r=Math.floor(t%1440/60),a=t%60;return o>0?`${o}d ${r}u`:r>0?`${r}u ${a}m`:`${a}m`}function yv(e){const o=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!o)return Number.NaN;const r=Number(o[1]),a=Number(o[2]);return Number.isNaN(r)||Number.isNaN(a)||r<0||r>23||a<0||a>59?Number.NaN:r*60+a}function wv(e){const t=yv(B("timeNowHhmm",""));if(!Number.isFinite(t))return"";const o=Math.round(e),r=((t-o)%1440+1440)%1440,a=Math.floor(r/60),i=r%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Sv(e,t){const o=Math.max(0,(Number(t)-Number(e))/6e4),r=vv(o),a=v("timeValid")&&A("timeValid")?wv(o):"";return a?{value:a,note:`${r} geleden`}:{value:`${r} geleden`,note:"Geen tijdsync"}}function qv(e){const t=Number(e);return Number.isNaN(t)?"\u2014":`${t>0?"+":t<0?"-":""}${Math.abs(t).toFixed(0)} W`}function fu(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>v(e))||""}function kv(){return["hp1WaterIn","hp2WaterIn"].find(e=>v(e))||""}function bu(e=B("controlModeLabel","")){const t=String(e||"").toLowerCase();return t.includes("cm5")||t.includes("cooling")||t.includes("koeling")}function qt(){return bu()}function vu(e,t){const o=String(e||"").trim().toLowerCase();return o==="waiting for room request"||o==="wacht op kamervraag"?!0:t?!1:o==="flow too low"||o==="flow te laag"||o==="flow unavailable"}function yu(){return qt()?"Koeling":le()?"Stooklijn":"Power House"}function Cv(){const e=["phouseReq","strategyRequestedPower"];for(const t of e){const o=M(t);if(!Number.isNaN(o))return o}return Number.NaN}function wu(){const e=Cv(),t=M("phouseHouse"),o=M("totalHeat"),r=M("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:e-t;let i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(r)&&e>r+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(o)&&o<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(o)&&o>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(o)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:I(e,0,"W"),houseText:I(t,0,"W"),correctionText:qv(a),capacityText:We("hpCapacity"),statusTitle:i,statusCopy:l}}function Su(){const e=M("curveSupplyTarget"),t=M("supplyTemp"),o=fu(),r=o?M(o):Number.NaN,a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:t-e,i=!!o&&Number.isNaN(r);let l="Stuurt op buitentemperatuur",c="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",c="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",c="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",c="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",c="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:We("curveSupplyTarget"),supplyText:We("supplyTemp"),deltaText:bv(a),capacityText:We("hpCapacity"),statusTitle:l,statusCopy:c}}function qu(){const e=M("supplyTemp"),t=B("coolingGuardMode",""),o=B("coolingFallbackNightMinOutdoorTemp","\u2014"),r=M("coolingSupplyError"),a=M("coolingDemandRaw"),i=A("coolingPermitted"),l=A("coolingRequestActive"),c=B("coolingBlockReason","Onbekend"),d=Gc(c),u=vu(c,l);let g="Wacht op koelvraag",b="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return u?(g="Wacht op koelvraag",b="Koeling staat aan en wacht nog op actieve koelvraag vanuit de kamerregeling."):i?l?!Number.isNaN(a)&&a<=0?(g="Houdt doel vast",b="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(r)&&r>1?(g="Trekt aanvoer omlaag",b="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(r)&&r>.2?(g="Benadert koeldoel",b="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(r)||(g="Koelt rustig door",b="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(g="Koeling gereed",b="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(g="Koeling geblokkeerd",b=`Blokkade: ${d}.`),{targetText:We("coolingSupplyTarget"),supplyText:We("supplyTemp"),safeFloorText:We("coolingEffectiveMinSupplyTemp"),guardMode:t,fallbackNightMin:o,demandText:We("coolingDemandRaw"),statusTitle:g,statusCopy:b,permitted:i,requestActive:l,blockReason:d,waitingForRoomRequest:u}}function na(){if(qt()){const t=qu(),o=t.guardMode.toLowerCase(),r=o.includes("user responsibility"),a=o.includes("fallback");return{title:"Koelregeling",copy:r?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:t.targetText,focusCopy:t.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:r?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:t.safeFloorText,tone:"blue",note:r?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${t.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:t.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(le()){const t=Su();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:t.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:t.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:t.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}const e=wu();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function ku(e){return gu({className:"oq-overview-system",title:e.title,copy:e.copy,signature:ve(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(t=>fv(t.label,t.value,t.tone,t.note)).join("")}
        </div>
      `})}function Tv(){if(!A("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(qt()){const r=qu(),a=r.waitingForRoomRequest?"neutral":r.permitted?r.statusTitle==="Koelt rustig door"||r.statusTitle==="Houdt temperatuur vast"?"green":r.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:r.statusTitle,tone:a}}if(Py())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};const t=(le()?Su():wu()).statusTitle;return{label:"Regeling nu",value:t,tone:t==="In balans"||t==="Dicht bij doel"?"green":t==="Nog aan het opbouwen"||t==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function Ev(){return A("openquattEnabled")?qt()?A("coolingPermitted")?A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:B("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:A("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:A("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function Cu(e,t){const o=Tv(),r=Ev();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:t,tone:"orange",note:"actieve modus"},{label:"Regeling",value:o.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:r.value,tone:"orange",note:"actieve randvoorwaarde"}]}function Tu(e,t){const o=Cu(e,t);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(ve(o))}">
        ${hi("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${gr(o,!0)}
        </div>
      </section>
    `}function Eu(){const e=qt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function $v(){const e=A("openquattEnabled"),t=E("openquattResumeAt"),o=Ga(t),r=(n.loadingEntities||n.entitySyncInFlight)&&!v("openquattResumeAt"),a=A("manualCoolingEnable"),i=String(E("silentModeOverride")||"Schedule"),l=!A("coolingPermitted"),c=A("coolingRequestActive"),d=bu(),u=B("coolingBlockReason",""),g=vu(u,c);let b="Uit",f="Koeling staat uit.";a&&d?(b="Actief",f="Koeling draait nu."):a&&g?(b="Aan",f="Koeling staat aan en wacht op koelvraag."):a&&l?(b="Geblokkeerd",f=Gc(u||"Koeling wacht nog op veilige condities.")):a&&c?(b="Start bijna",f="Er is koelvraag. Koeling start zodra dat kan."):a&&(b="Aan",f="Koeling staat aan en wacht op koelvraag.");let w="Uit",p="Stille modus staat uit.",h="neutral";return i==="On"?(w="Aan",p="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",h="orange"):i==="Schedule"&&(w="Schema",A("silentActive")?(p="Stille modus staat nu aan via het tijdvenster.",h="violet"):p="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":o?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[r?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:o?"Hervat automatisch":"Hervatten",value:o?Qa(t,!0):"Handmatig",tone:o?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:b,copy:f,buttonLabel:a?"Zet uit":"Zet aan",nextState:a?"off":"on",tone:a?d?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:w,copy:p,tone:h,kind:"select",selectedOption:i,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(y=>v(y.key))}function Av(e=[]){return e.length?`
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
    `:""}function zt({className:e,action:t,label:o,busy:r=!1,loading:a=!1,attrs:i=""}){return`
      <button
        class="${e}${r?" is-busy":""}"
        type="button"
        ${t?`data-oq-action="${s(t)}"`:""}
        ${i}
        ${n.busyAction||a?"disabled":""}
      >${a?`
        <span class="oq-overview-controlpanel-loading">
          <span class="oq-overview-controlpanel-spinner" aria-hidden="true"></span>
          <span>${s(o)}</span>
        </span>
      `:s(r?"Bezig...":o)}</button>
    `}function Hv(e){if(e.kind==="openquatt-control"){const t=n.busyAction==="openquatt-regulation",o=(n.loadingEntities||n.entitySyncInFlight)&&!v("openquattResumeAt");return A("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${zt({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:t})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${zt({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:t})}
            ${zt(o?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:Ga()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){const t=n.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(o=>zt({className:`oq-overview-controlpanel-segment${e.selectedOption===o.value?" is-selected":""}`,action:"select-overview-control-option",label:o.label,busy:t,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(o.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${zt({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:n.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function $u(){const e=$v();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${hi("Bediening")}
        ${e.map(t=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(t.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(t.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(t.tone)}">${s(t.status)}</strong>
            </div>
            <p>${s(t.copy)}</p>
            ${Av(t.meta)}
            ${Hv(t)}
          </article>
        `).join("")}
      </section>
    `:""}function Mv(e){const t=B("controlModeLabel");return`
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
              ${hi("Kerncijfers")}
              <div class="oq-overview-top">
                ${gr(Eu())}
              </div>
            </section>
            ${Tu(e,t)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(bc())}">
            ${$u()}
          </aside>
        </div>
      </section>
    `}function fi(){const e=fu(),t=kv();return qt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...t?[{label:"Retourtemperatuur",key:t}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function Au(e=fi()){return ve({...e,values:e.rows.map(t=>t.value||B(t.key))})}function Hu(){const e=fi();return gu({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:Au(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(t=>ta(t.label,t.key,t.value||"")).join("")}
        </div>
      `})}const Ws=360;function at(){const e=Sa(n.trendWindowHours||nn);return e!==n.trendWindowHours&&qa(e),e}function Mu(e=at()){return Math.max(1,Number(e)||24)*60*60*1e3}function Pv(e=at()){const t=Number(e)||24;return t>=72&&t%24===0?`${t/24}d`:`${t}u`}function bi(e=at()){const t=Number(e)||24;if(t>=72&&t%24===0){const o=t/24;return`${o} ${o===1?"dag":"dagen"}`}return`${t} uur`}function Lr(e){if(!Number.isFinite(e))return"\u2014";const t=new Date(e);if(Number.isNaN(t.getTime()))return"\u2014";const o={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",o).format(t)}catch{return t.toLocaleString("nl-NL",o)}}function Nv(e){const t=String(e||"").trim().split("|");if(t.length<5)return null;const o=Number(t[0]);if(!Number.isFinite(o))return null;const r=a=>{const i=Number(a);return Number.isFinite(i)?i:null};return{t:o,outside:r(t[1]),supply:r(t[2]),room:t.length>=8?r(t[3]):null,roomSetpoint:t.length>=8?r(t[4]):null,flow:t.length>=8?r(t[5]):null,input:t.length>=8?r(t[6]):r(t[3]),output:t.length>=8?r(t[7]):r(t[4])}}function oa(){return!!(typeof window<"u"&&window.__OQ_DEV_CONTROLS__||typeof window<"u"&&window.__OQ_DEV_META)}function Or(e=at()){return typeof window>"u"||!window.__OQ_DEV_TREND_MOCKS__||typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples!="function"?[]:window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(e)}function Pu(){const e=Mu(),t=String(n.trendHistoryRaw||"").trim();if(!t)return oa()?Or():[];const o=t.split(/\r?\n/).map(Nv).filter(Boolean),r=o.length?o[o.length-1].t:Number.NaN,a=Number.isFinite(n.trendHistoryNowMs)?n.trendHistoryNowMs:Number.isFinite(r)?r:Number.NaN;if(!Number.isFinite(a))return o.length?o.slice(-Ws):Or();const i=Math.max(0,a-e),l=o.filter(c=>c.t>=i).slice(-Ws);return l.length?l:oa()?Or(windowHours):[]}function vi(){const e=at(),t=bi(e),o=Pu(),r=oa()&&o.length===0,a=qt();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${t}.`,tone:"orange",samples:o,mock:r,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${t}.`,tone:"green",samples:o,mock:r,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${t}.`,tone:"slate",samples:o,mock:r,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{const l=Number(i?.input),c=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(c)||l<=0?Number.NaN:c/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${t}.`,tone:"blue",samples:o,mock:r,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${t}.`,tone:"sky",samples:o,mock:r,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function Rv(e){const t=e.samples[e.samples.length-1]||null;return ve({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:t?.t||0,trendSignature:n.trendHistorySignature||"",latestValues:t?[t.outside,t.supply,t.room,t.roomSetpoint,t.flow,t.input,t.output]:[]})}function Kn(e,t){if(!e||!t)return Number.NaN;const o=typeof e.derive=="function"?e.derive(t):t?.[e.sampleKey],r=Number(o);return Number.isFinite(r)?r:Number.NaN}function Lv(e,t){const o=[];return e.forEach(r=>{t.forEach(a=>{const i=Kn(a,r);Number.isFinite(i)&&o.push(i)})}),o.length?{min:Math.min(...o),max:Math.max(...o)}:{min:0,max:1}}function Ov(e){if(!Number.isFinite(e)||e<=0)return 1;const t=Math.floor(Math.log10(e)),o=e/10**t;let r;return o<=1?r=1:o<=2?r=2:o<=5?r=5:r=10,r*10**t}function Fv(e,t){const o=Number.isFinite(e?.min)?e.min:0,r=Number.isFinite(e?.max)?e.max:1,a=Math.max(r-o,1),i=Array.isArray(t)?t.map(f=>Number(f?.axisMin)).find(f=>Number.isFinite(f)):Number.NaN,l=Array.isArray(t)?t.map(f=>Number(f?.axisMax)).find(f=>Number.isFinite(f)):Number.NaN,c=Array.isArray(t)?t.map(f=>Number(f?.axisTickStep)).find(f=>Number.isFinite(f)&&f>0):Number.NaN,d=Math.max(1,Number.isFinite(c)?c:Ov(a/4)),u=[];if(Number.isFinite(i)||Number.isFinite(l)){const f=Number.isFinite(i)?i:0,w=Number.isFinite(l)?l:Math.ceil(r/d)*d,p=Math.floor(f/d)*d,h=Math.ceil(w/d)*d;for(let y=p;y<=h+d*.5;y+=d)u.push(y)}else{const f=a/d,w=f<=1.8?3:f<=4.25?5:7,p=Math.floor(w/2),h=(o+r)/2,y=Math.round(h/d)*d;for(let S=-p;S<=p;S+=1)u.push(y+S*d)}const g=u[0],b=u[u.length-1];return{ticks:u,axisMin:g,axisMax:b,axisDecimals:0}}function Nu(e,t,o={}){const r=Number(o.windowHours),a=Number.isFinite(r)?r:at(),i=Mu(a),l=640,c=220,d=46,u=18,g=18,b=34,f=l-d-u,w=c-g-b,p=e[e.length-1],h=!!o.mockData,y=h?i:Number.isFinite(n.trendHistoryNowMs)?n.trendHistoryNowMs:p?p.t:0,S=h?0:y-i,q=Math.max(y-S,1),C=q,k=Lv(e,t),H=k.min===k.max?{min:k.min-1,max:k.max+1}:{min:k.min-Math.max((k.max-k.min)*.12,1),max:k.max+Math.max((k.max-k.min)*.12,1)},x=Fv(k,t),F=R=>d+(R-S)/q*f,G=R=>{if(!Number.isFinite(R))return Number.NaN;const V=(R-H.min)/Math.max(H.max-H.min,1);return g+(1-Math.min(1,Math.max(0,V)))*w},T=[0,.5,1].map(R=>d+f*R),$=x.ticks.map(R=>G(R)),N=x.ticks.map((R,V)=>({x:d-10,y:$[V],text:I(R,x.axisDecimals)})),W=e.map(R=>{const V=F(R.t),P=t.map(O=>{const _=Kn(O,R);return Number.isFinite(_)?{seriesId:O.id||O.sampleKey||O.label,tone:O.tone,label:O.label,decimals:O.decimals,unit:O.unit,value:_,x:V,y:G(_)}:null});return{sample:R,x:V,values:P}}),K=t.flatMap(R=>{const V=[];let P=[];return e.forEach(O=>{const _=Kn(R,O);if(!Number.isFinite(_)){P.length&&(V.push(P),P=[]);return}P.push({x:F(O.t),y:G(_)})}),P.length&&V.push(P),V.map(O=>O.length<2?{tone:R.tone,points:O,path:""}:{tone:R.tone,points:O,path:O.map((_,Y)=>`${Y===0?"M":"L"} ${_.x.toFixed(1)} ${_.y.toFixed(1)}`).join(" ")})});return{width:l,height:c,left:d,right:u,top:g,bottom:b,plotWidth:f,plotHeight:w,latest:p,uptimeMs:C,endTime:y,startTime:S,span:q,windowHours:a,range:k,displayRange:H,gridXs:T,gridYs:$,yAxisLabels:N,points:W,tracks:K,series:t}}function yi(){return ve({windowHours:at(),trendSignature:n.trendHistorySignature||"",trendNowMs:Number.isFinite(n.trendHistoryNowMs)?n.trendHistoryNowMs:0,coolingActive:qt()})}function xv(e){return vi().find(t=>t.id===e)||null}function Dv(e,t){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let o=0,r=Math.abs(e.points[0].x-t);return e.points.forEach((a,i)=>{const l=Math.abs(a.x-t);l<r&&(o=i,r=l)}),o}function Iv(e,t){const o=Ru(e,t);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(I(o,e.decimals,e.unit))}</strong>
      </div>
    `}function Ru(e,t){if(e?.currentKey&&v(e.currentKey)){const o=M(e.currentKey);if(Number.isFinite(o))return o}return Kn(e,t)}function Lu(e){e&&vi().forEach(t=>{const o=e.querySelector(`[data-oq-trend-card="${t.id}"]`),r=t.samples[t.samples.length-1]||null;o&&t.series.forEach(a=>{const l=o.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),c=I(Ru(a,r),a.decimals,a.unit);l&&l.textContent!==c&&(l.textContent=c)})})}function Wv(e,t,o=!1,r=at()){const a=Nu(e,t,{mockData:o,windowHours:r}),i=bi(r),l=Lr(a.startTime),c=Lr(a.startTime+a.span/2),d=Lr(a.endTime),u=a.tracks.flatMap(g=>{if(g.points.length<2){const b=g.points[0];return b?`
          <circle
            cx="${b.x.toFixed(1)}"
            cy="${b.y.toFixed(1)}"
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
        ${u}
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
          ${t.map(g=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${s(g.tone)}"
              data-oq-trend-hover-dot="${s(g.id||g.sampleKey||g.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${s(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(c)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(d)}</text>
      </svg>
    `}function Bv(e){const t=e.samples[e.samples.length-1]||null,o=bi(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(Rv(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(o)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(r=>Iv(r,t)).join("")}
            </div>
          </div>
        </div>
        ${Wv(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function wi(){const e=vi();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(yi())}">
        <div class="oq-overview-trends-grid">
          ${e.map(Bv).join("")}
        </div>
      </section>
    `}function Vv(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function _v(){const e=at(),t=hl();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${Po.map(o=>`
          ${(()=>{const a=o>168&&!t,i=o/24,l=a?`Beschikbaar zodra er minimaal ${i} dagen flashhistorie is opgeslagen.`:"";return`
          <button
            class="oq-overview-controlpanel-segment${e===o?" is-selected":""}${a?" is-disabled":""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${o}"
            aria-pressed="${e===o?"true":"false"}"
            aria-disabled="${a?"true":"false"}"
            ${a?"disabled":""}
            ${l?`title="${s(l)}"`:""}
          >${s(Pv(o))}</button>
        `})()}
        `).join("")}
      </div>
    `}function jv(){const e="overview-trends-history",t=n.settingsInfoOpen===e;return`
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
    `}function Kv(){const e=bn(),o=Pu().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(n.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${jv()}
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
                  ${_v()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&o?wi():Vv()}
        </div>
      </section>
    `}function Uv(){if(!n.root||n.appView!=="diagnosis")return!1;const e=n.root.querySelector(".oq-overview-board");if(!e)return!1;const t=e.querySelector(".oq-overview-trends");return t?(dt(t,yi(),wi()),Lu(e),qi(e),!0):!1}function Si(e){if(!e)return null;const t=e.__oqTrendHoverNodes;if(t&&t.chart&&t.hoverLayer&&t.hoverPanel)return t;const o=e.querySelector("[data-oq-trend-hover-layer]"),r={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:o,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:o?o.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return o&&o.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{r.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=r,r}function Bs(e,t,o,r=Si(e)){if(!e||!t||!Array.isArray(t.points)||t.points.length===0)return;const a=Math.max(0,Math.min(t.points.length-1,o)),i=t.points[a];if(!i||!r||!r.chart||!r.hoverLayer||!r.hoverPanel||!r.hoverTime||!r.hoverNote||!r.hoverValues)return;const l=String(a);if(!r.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;const c=Sv(i.sample.t,t.endTime);r.hoverPanel.hidden=!1,r.hoverLayer.removeAttribute("hidden"),r.hoverTime.textContent=c.value,r.hoverNote.textContent=c.note,r.hoverLine&&(r.hoverLine.setAttribute("x1",i.x.toFixed(1)),r.hoverLine.setAttribute("x2",i.x.toFixed(1)));const d=[];t.series.forEach(u=>{const g=Kn(u,i.sample),b=u.id||u.sampleKey||u.label,f=r.hoverDots[b];if(!Number.isFinite(g)){f&&f.setAttribute("display","none");return}const w=i.values.find(p=>p.seriesId===b);f&&w&&(f.removeAttribute("display"),f.setAttribute("cx",w.x.toFixed(1)),f.setAttribute("cy",w.y.toFixed(1))),d.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(u.tone)}">
          <span>${s(u.label)}</span>
          <strong>${s(I(g,u.decimals,u.unit))}</strong>
        </div>
      `)}),r.hoverValues.innerHTML=d.join(""),e.dataset.oqTrendHoverIndex=l}function zv(e){if(!e)return;const t=Si(e);t?.hoverPanel&&(t.hoverPanel.hidden=!0),t?.hoverLayer&&t.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function qi(e=n.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(o=>{const r=o.dataset.renderSignature||"";if(o.__oqTrendBoundSignature===r)return;typeof o.__oqTrendCleanup=="function"&&o.__oqTrendCleanup(),o.__oqTrendHoverNodes=null,o.__oqTrendBoundSignature=r;const a=o.querySelector(".oq-overview-trend-chart");if(!a)return;const i=xv(o.dataset.oqTrendCard);if(!i)return;const l=Nu(i.samples,i.series,{mockData:i.mock});o.__oqTrendModel=l;const c=Si(o);let d=0,u=null;const g=()=>{const w=u;u=null,d=0;const p=a.getBoundingClientRect();if(!p.width||!p.height)return;const h=Number(w?.clientX);if(!Number.isFinite(h)){Bs(o,l,l.points.length-1,c);return}const S=Math.min(p.width,Math.max(0,h-p.left))/p.width*l.width,q=Dv(l,S);Bs(o,l,q,c)},b=w=>{u=w,d||(d=window.requestAnimationFrame(g))},f=()=>{d&&(window.cancelAnimationFrame(d),d=0),u=null,zv(o)};a.addEventListener("pointermove",b),a.addEventListener("pointerenter",b),a.addEventListener("pointerleave",f),a.addEventListener("focus",b),a.addEventListener("blur",f),a.addEventListener("touchstart",b,{passive:!0}),o.__oqTrendCleanup=()=>{d&&(window.cancelAnimationFrame(d),d=0),u=null,a.removeEventListener("pointermove",b),a.removeEventListener("pointerenter",b),a.removeEventListener("pointerleave",f),a.removeEventListener("focus",b),a.removeEventListener("blur",f),a.removeEventListener("touchstart",b)}})}function Gv([e,t]){const o=kc(t);if(!v(t)&&Number.isNaN(o))return"";const r=qc(t)?We(t):B(t);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(r)}</strong>
      </div>
    `}function Qv(e){const t=e.rows.map(Gv).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${t}
        </div>
      </section>
    `:""}function Yv(e){const t=e.groups.map(Qv).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${t}
        </div>
      </section>
    `:""}function Jv(e){const t=e.categories.map(Yv).filter(Boolean).join("");return t?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${t}
        </div>
      </article>
    `:""}function ki(){const e=dl.map(Jv).filter(Boolean),t=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:t}}function Ou(e=ki()){return ve(e)}function Fu(e=ki()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(Ou(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}const mr=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],xu=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],Zv=new Set(["day","week","month","year"]),Xv=["Zo","Ma","Di","Wo","Do","Vr","Za"];function ye(e){const t=String(e||"").trim();return xu.some(o=>o.id===t)?t:"day"}function Vs(e){const t=ye(e);n.energyHistoryView!==t&&(n.energyHistoryView=t,n.energyHistoryLastFetchAt=0,m(),Du())}function Du(){typeof ft=="function"&&ft({force:!0}).then(e=>{e&&m()})}function kn(e){return Zv.has(ye(e))}function hr(){const e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Vo(){const e=String(n.energyHistoryRaw||""),t={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0,dayPartitionAvailable:!1,dayStorageKb:0,dayWriteCount:0,dayLastWriteTimestampS:0};return e.split(/\r?\n/).forEach(o=>{if(!o.startsWith("@bounds|")&&!o.startsWith("@day_retention|")&&!o.startsWith("@hour_retention|"))return;const r=o.split("|");o.startsWith("@bounds|")?(t.storedDayCount=Number(r[1])||0,t.oldestDateKey=Number(r[2])||null,t.newestDateKey=Number(r[3])||null,t.hourStoredDayCount=Number(r[4])||0,t.hourOldestDateKey=Number(r[5])||null,t.hourNewestDateKey=Number(r[6])||null):o.startsWith("@day_retention|")?(t.dayPartitionAvailable=Number(r[1])===1,t.dayStorageKb=Number(r[2])||0,t.dayWriteCount=Number(r[3])||0,t.dayLastWriteTimestampS=Number(r[4])||0):o.startsWith("@hour_retention|")&&(t.hourRequestedRetentionDays=Number(r[1])||0,t.hourSlotCount=Number(r[2])||0,t.hourPartitionAvailable=Number(r[3])===1,t.hourRecordCount=Number(r[4])||0,t.hourWriteCount=Number(r[5])||0,t.hourStorageKb=Number(r[6])||0,t.hourLastWriteTimestampS=Number(r[7])||0)}),t}function Ci(){const e=String(n.energyHistoryRaw||"");let t=null;return e.split(/\r?\n/).forEach(o=>{const r=Uu(o);r&&(t=r.dateKey)}),t}function ey(e=[],t=!0){const o=Ci(),r=Vo(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(r.newestDateKey))&&a.push(Number(r.newestDateKey)),Number.isFinite(Number(o))&&a.push(Number(o)),t&&fr().forEach(i=>{const l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):hr()}function Ae(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Iu(e,t,o){return new Date(e,t-1,o,12,0,0)}function Wu(e,t){return new Date(e,t,0).getDate()}function _s(e){return String(e).padStart(2,"0")}function Fr(e){const t=Q(e);return t?`${t.year}-${_s(t.month)}-${_s(t.day)}`:""}function Bu(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!t)return null;const o=Number(t[1]),r=Number(t[2]),a=Number(t[3]),i=Iu(o,r,a);return i.getFullYear()!==o||i.getMonth()+1!==r||i.getDate()!==a?null:Q(Ae(i))}function Vu(e,t){return Number(e)*100+Number(t)}function ra(e){return Vu(e.getFullYear(),e.getMonth()+1)}function sn(e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return null;const o=Math.floor(t/100),r=t%100;return o<2020||r<1||r>12?null:{key:t,year:o,month:r,date:new Date(o,r-1,1,12,0,0)}}function ty(e){const t=String(e||"").trim(),o=/^(\d{4})-(\d{2})$/.exec(t);return sn(o?Vu(Number(o[1]),Number(o[2])):t)}function _u(e,t){const o=sn(e);if(!o)return"";const r=new Date(o.year,o.month-1+Number(t||0),1,12,0,0);return String(ra(r))}function io(e){const t=new Date(e.getTime()),o=t.getDay(),r=o===0?-6:1-o;return t.setDate(t.getDate()+r),t.setHours(12,0,0,0),t}function ln(e,t){const o=new Date(e.getTime());return o.setDate(o.getDate()+t),o.setHours(12,0,0,0),o}function js(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function ju(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),o=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-o+3);const r=t.getUTCFullYear(),a=new Date(Date.UTC(r,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((t-a)/(10080*60*1e3)),year:r}}function Ks(e){return Ae(io(e))}function ny(e){const o=Bu(e)||Q(e);if(!o)return null;const r=io(o.date);return Q(Ae(r))}function Ku(e){const t=Q(e);if(!t)return"Week";const o=io(t.date),r=ln(o,6);return`Week ${ju(o).week} (${js(o)} - ${js(r)})`}function Q(e){const t=Number(e);if(!Number.isFinite(t)||t<=0)return null;const o=Math.floor(t/1e4),r=Math.floor(t/100)%100,a=t%100;return o<2020||r<1||r>12||a<1||a>31?null:{key:t,year:o,month:r,day:a,date:new Date(o,r-1,a,12,0,0)}}function Je(e,t="day"){const o=Q(e);return o?t==="weekday"?Xv[o.date.getDay()]||"":t==="month"?o.date.toLocaleDateString("nl-NL",{month:"short"}):t==="year"?String(o.year):o.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function Ct(e){const t=M(e);return!Number.isFinite(t)||t<0?null:Math.round(t*1e3)}function oy(e){const t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function Ti(e,t=0){const o={};return mr.forEach((r,a)=>{o[r]=oy(e[t+a])}),o}function ry(e){const t=String(e||"").trim();if(!t||t.startsWith("@"))return null;const o=t.split("|");if(o.length<10)return null;const r=Number(o[0]),a=Number(o[1]),i=Number(o[2]),l=Q(a);return!Number.isFinite(r)||!l?null:{sequence:r,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...Ti(o,3)}}function Uu(e){const t=String(e||"").trim();if(!t.startsWith("@current|"))return null;const o=t.split("|");if(o.length<9)return null;const r=Number(o[1]),a=Q(r);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:r,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...Ti(o,2)}:null}function ay(e){const t=String(e||"").trim();if(!t.startsWith("@hour|"))return null;const o=t.split("|");if(o.length<11)return null;const r=Number(o[1]),a=Number(o[2]),i=Number(o[3]),l=Q(a);return!Number.isFinite(r)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:r,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...Ti(o,4)}}function iy(){const e=Ci()||hr(),t=Q(e);if(!t)return null;const o={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:t.year,month:t.month,day:t.day,partial:!0,source:"sensors",electricalInputWh:Ct("electricalEnergyDaily"),heatingInputWh:Ct("heatingElectricalEnergyDaily"),coolingInputWh:Ct("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:Ct("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:Ct("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:Ct("boilerThermalEnergyDaily"),systemHeatOutputWh:Ct("systemThermalEnergyDaily")};return mr.some(r=>Number.isFinite(o[r]))?o:null}function so(e,t){const o=Number(e?.[t]);return Number.isFinite(o)&&o>=0?o:0}function lo(){const e=new Map;String(n.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{const l=ry(i)||Uu(i);if(!l)return;const c=e.get(l.dateKey);(!c||l.sequence>=c.sequence)&&e.set(l.dateKey,l)});const o=iy();o&&e.set(o.dateKey,o);const r=new Set(e.keys()),a=new Map;return fr().forEach(i=>{if(r.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){const c=Q(i.dateKey);if(!c)return;l=Et({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:Je(c.key),sortKey:c.key,source:"hour-summary"}),l.tooltipLabel=`${Je(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}$t(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function fr(){const e=new Map;return String(n.energyHistoryRaw||"").split(/\r?\n/).forEach(o=>{const r=ay(o);if(!r)return;const a=`${r.dateKey}:${r.hour}`,i=e.get(a);(!i||r.sequence>=i.sequence)&&e.set(a,r)}),[...e.values()].sort((o,r)=>o.sortKey-r.sortKey)}function sy(e){return fr().filter(t=>t.dateKey===Number(e))}function Gt(e,t){return e.reduce((o,r)=>o+so(r,t),0)}function zu(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((t,o)=>t+so(e,o),0)}function ly(e){return so(e,"electricalInputWh")+zu(e)}function $o(e,t){const o=Number(e),r=Number(t);return!Number.isFinite(o)||!Number.isFinite(r)||r<=0?"\u2014":(o/r).toFixed(2)}function $e(e,t=1){const o=Number(e);return Number.isFinite(o)?Math.abs(o)>=999500?`${(o/1e6).toFixed(2)} MWh`:Math.abs(o)<1e3?`${Math.round(o)} Wh`:`${(o/1e3).toFixed(t)} kWh`:"\u2014"}function Et({dateKey:e,year:t,month:o,day:r,hour:a=null,label:i,tooltipLabel:l="",sortKey:c,source:d="bucket"}){return{sequence:0,dateKey:e,year:t,month:o,day:r,hour:a,label:i,tooltipLabel:l,sortKey:c??e,partial:!1,source:d,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function $t(e,t){return mr.forEach(o=>{e[o]+=so(t,o)}),e.partial=e.partial||!!t?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(t?.sequence||0)),e}function cy(e){const t=new Map;return e.forEach(o=>{t.set(o.dateKey,o)}),t}function Gu(e,t){const o=ye(e);if(o==="day"){const r=Bu(t)||Q(t);return r?String(r.key):""}if(o==="week"){const r=ny(t);return r?String(r.key):""}if(o==="month"){const r=ty(t);return r?String(r.key):""}if(o==="year"){const r=Number(t);return Number.isInteger(r)&&r>=2020&&r<=2200?String(r):""}return""}function br(e,t){const o=ye(t),r=Q(ey(e,!0)),a=Vo(),i=fr(),l=[...e.map(w=>w.dateKey),...i.map(w=>w.dateKey)].filter(w=>Number.isFinite(Number(w)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));const c=l.length?Math.min(...l.map(Number)):r?.key,u=(c?Q(c):r)?.date||r?.date||new Date,g=r?.date||new Date;let b=r?.key||hr(),f=b;return o==="week"?(b=Ks(u),f=Ks(g)):o==="month"?(b=ra(u),f=ra(g)):o==="year"?(b=u.getFullYear(),f=g.getFullYear()):(b=Ae(u),f=Ae(g)),Number(b)>Number(f)&&(b=f),{min:String(b),max:String(f)}}function Qu(e,t){const o=Number(e);return Number.isFinite(o)?o<Number(t.min)?String(t.min):o>Number(t.max)?String(t.max):String(e):String(t.max)}function uy(e,t,o=br(e,t)){const r=ye(t),a=n.energyHistoryPeriodSelection?.[r],i=Gu(r,a);return Qu(i||o.max,o)}function dy(e,t){const o=ye(e),r=[];let a=0;if(o==="week"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<6e3;){const l=Q(i);r.push({value:i,label:Ku(i),group:l?String(ju(l.date).year):""}),i=l?String(Ae(ln(l.date,-7))):"",a+=1}return r}if(o==="month"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<1200;){const l=sn(i);if(!l)break;r.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=_u(i,-1),a+=1}return r}if(o==="year")for(let i=Number(t.max);i>=Number(t.min);i-=1)r.push({value:String(i),label:String(i)});return r}function vr(e,t){const o=ye(t);if(!kn(o))return{view:o,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};const r=br(e,o),a=uy(e,o,r);return{view:o,selectedValue:a,minValue:r.min,maxValue:r.max,canPrevious:Number(a)>Number(r.min),canNext:Number(a)<Number(r.max),isNow:Number(a)===Number(r.max),options:dy(o,r)}}function py(e,t){const o=ye(t);if(!kn(o))return{from:"",to:"",hours:"0"};const r=vr(e,o);if(o==="day")return{from:r.selectedValue,to:r.selectedValue,hours:"1"};if(o==="week"){const a=Q(r.selectedValue);if(!a)return{from:"",to:"",hours:"0"};const i=io(a.date),l=ln(i,6);return{from:String(Ae(i)),to:String(Ae(l)),hours:"0"}}if(o==="month"){const a=sn(r.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+Wu(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(o==="year"){const a=Number(r.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function wo(){if(!String(n.energyHistoryRaw||"").trim())return"?meta=1";const e=lo(),t=py(e,n.energyHistoryView||"day"),o=new URLSearchParams;t.from&&o.set("from",t.from),t.to&&o.set("to",t.to),o.set("hours",t.hours);const r=o.toString();return r?`?${r}`:""}function _o(e,t){const o=ye(e);if(!kn(o))return;const r=lo(),a=br(r,o),i=Gu(o,t),l=Qu(i||a.max,a);n.energyHistoryPeriodSelection={...n.energyHistoryPeriodSelection,[o]:l},n.energyHistoryLastFetchAt=0,m(),Du()}function Us(e,t){const o=ye(e);if(!kn(o))return;const r=lo(),a=vr(r,o),i=Number(t)<0?-1:1;let l=a.selectedValue;if(o==="day"){const c=Q(a.selectedValue);l=c?String(Ae(ln(c.date,i))):l}else if(o==="week"){const c=Q(a.selectedValue);l=c?String(Ae(ln(c.date,i*7))):l}else o==="month"?l=_u(a.selectedValue,i):o==="year"&&(l=String(Number(a.selectedValue)+i));_o(o,l)}function zs(e){const t=ye(e);if(!kn(t))return;const o=lo(),r=br(o,t);_o(t,r.max)}function gy(e,t,o=vr(e,t)){const r=ye(t),a=cy(e);if(!e.length&&r==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(r==="day"){const c=Q(o.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const d=sy(c.key);if(d.length){const w=new Map(d.map(h=>[h.hour,h])),p=[];for(let h=0;h<24;h+=1){const y=String(h),S=`${c.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(h).padStart(2,"0")}:00 - ${String((h+1)%24).padStart(2,"0")}:00`,q=Et({dateKey:c.key,year:c.year,month:c.month,day:c.day,hour:h,label:y,tooltipLabel:S,sortKey:h,source:"hour"}),C=w.get(h);C&&$t(q,C),p.push(q)}return{buckets:p,title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}const u=a.get(c.key),g=Ci()||hr(),b=c.key===g?"Vandaag":Je(c.key),f=Et({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:b,sortKey:c.key,source:"day"});return u&&$t(f,u),{buckets:[f],title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(r==="week"){const c=Q(o.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const d=io(c.date),u=[];for(let g=0;g<7;g+=1){const b=ln(d,g),f=Ae(b),w=Q(f),p=Et({dateKey:f,year:w.year,month:w.month,day:w.day,label:Je(f,"weekday"),sortKey:f}),h=a.get(f);h&&$t(p,h),u.push(p)}return{buckets:u,title:"Week",detail:Ku(o.selectedValue)}}if(r==="month"){const c=sn(o.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const d=Wu(c.year,c.month),u=[];for(let g=1;g<=d;g+=1){const b=Iu(c.year,c.month,g),f=Ae(b),w=Et({dateKey:f,year:c.year,month:c.month,day:g,label:String(g),sortKey:f}),p=a.get(f);p&&$t(w,p),u.push(w)}return{buckets:u,title:"Maand",detail:c.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(r==="year"){const c=Number(o.selectedValue);if(!Number.isInteger(c))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};const d=[];for(let u=1;u<=12;u+=1){const g=c*1e4+u*100+1,b=Et({dateKey:g,year:c,month:u,day:1,label:Je(g,"month"),sortKey:u,source:"month"});e.filter(f=>f.year===c&&f.month===u).forEach(f=>$t(b,f)),d.push(b)}return{buckets:d,title:"Jaar",detail:String(c)}}const i=new Map;e.forEach(c=>{i.has(c.year)||i.set(c.year,Et({dateKey:c.year*1e4+101,year:c.year,month:1,day:1,label:String(c.year),sortKey:c.year,source:"year"})),$t(i.get(c.year),c)});const l=[...i.values()].sort((c,d)=>c.sortKey-d.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function my(e){const t=Gt(e,"heatpumpHeatOutputWh"),o=Gt(e,"heatpumpCoolingOutputWh"),r=Gt(e,"boilerHeatOutputWh");return{electricalInputWh:Gt(e,"electricalInputWh"),heatingInputWh:Gt(e,"heatingInputWh"),coolingInputWh:Gt(e,"coolingInputWh"),heatOutputWh:t,coolingOutputWh:o,boilerOutputWh:r,outputWh:t+o+r}}function hy(e){const t=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),o=Number(e.boilerOutputWh||0),r=t+o;return!Number.isFinite(r)||r<=0?Number.NaN:t/r*100}function So(e,t,o=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${o?`<p>${s(o)}</p>`:""}
      </div>
    `}function xr(e,t,o){const r=[];o.forEach(i=>{const l=String(i.group||"");let c=r[r.length-1];(!c||c.label!==l)&&(c={label:l,options:[]},r.push(c)),c.options.push(i)});const a=r.some(i=>i.label)?r.map(i=>i.label?`
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
        `).join("")).join(""):o.map(i=>`
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
    `}function Gs(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(Fr(e.selectedValue))}"
            min="${s(Fr(e.minValue))}"
            max="${s(Fr(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?xr(e,"Week",e.options):e.view==="month"?xr(e,"Maand",e.options):e.view==="year"?xr(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function fy(e){return kn(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${Gs(e)}
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
          ${Gs(e)}
        </div>
      `}function by(){const e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function vy(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${xu.map(t=>{const o=t.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${o?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(t.id)}"
              aria-selected="${o?"true":"false"}"
            >${s(t.label)}</button>
          `}).join("")}
      </div>
    `}function yy(e){const t=Number(e.electricalInputWh||0),o=Number(e.heatOutputWh||0),r=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,t+o+r+a),c=u=>`${Math.max(0,Number(u||0)/l*100).toFixed(2)}%`,d=hy(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${c(t)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${c(o)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${c(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${c(a)}"></span>
          <strong>${Number.isFinite(d)?`${Math.round(d)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s($e(o,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s($e(t,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s($e(r,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s($e(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function wy(e){const t=Math.max(1,Number(e||0)/1e3),o=Math.pow(10,Math.floor(Math.log10(t))),r=t/o;return(r<=1.5?1.5:r<=3?3:r<=6?6:10)*o*1e3}function Sy(e){const t=Number(e);return Number.isFinite(t)?t>=999500?`${Number((t/1e6).toFixed(1))}`:`${Number((t/1e3).toFixed(1))}`:""}function qy(e){return e>=999500?"MWh":"kWh"}function ky(e){const u=Math.max(1e3,...e.map(ly)),g=wy(u),b=e.length?1218/e.length:1218,f=Math.max(6,Math.min(38,b*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:g,barSlot:b,barWidth:f,yOf:p=>26+(1-Math.min(1,Math.max(0,Number(p||0)/g)))*196}}function Cy(e){const t=$o(e.heatpumpHeatOutputWh,e.heatingInputWh),o=$o(e.heatpumpCoolingOutputWh,e.coolingInputWh),r=$o(zu(e),e.electricalInputWh);return[e.tooltipLabel||e.label||Je(e.dateKey),`Elektrisch: ${$e(e.electricalInputWh,1)}`,`Warmtepomp warmte: ${$e(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${$e(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel: ${$e(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${t}`,`EER koelen: ${o}`,`Output / elektrisch: ${r}`].join(`
`)}function Ty(e,t=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;const o=ky(e),r=qy(o.axisMax),a=[0,.25,.5,.75,1].map(l=>o.axisMax*l),i=e.map((l,c)=>{const d=o.left+o.barSlot*c+o.barSlot/2,u=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}];let g=o.height-o.bottom;const b=u.map(h=>{const y=so(l,h.key);if(y<=0)return"";const S=y/o.axisMax*o.plotHeight;return g-=S,`
          <rect
            x="${(d-o.barWidth/2).toFixed(1)}"
            y="${g.toFixed(1)}"
            width="${o.barWidth.toFixed(1)}"
            height="${Math.max(1.4,S).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${h.className}"
          >
            <title>${s(`${l.label} \xB7 ${h.label}: ${$e(y,1)}`)}</title>
          </rect>
        `}).join(""),w=e.length<=12||c===0||c===e.length-1||c%3===0?`<text x="${d.toFixed(1)}" y="${o.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||Je(l.dateKey))}</text>`:"",p=Cy(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(p)}" tabindex="0">
          <title>${s(p)}</title>
          <rect
            x="${(d-o.barWidth/2-4).toFixed(1)}"
            y="${o.top.toFixed(1)}"
            width="${(o.barWidth+8).toFixed(1)}"
            height="${o.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${b}
        </g>
        ${w}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(ye(t))}" viewBox="0 0 ${o.width} ${o.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${o.width}" height="${o.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${o.left}" y="18" class="oq-energy-history-axis-unit">${s(r)}</text>
        ${a.map(l=>{const c=o.yOf(l);return`
            <line x1="${o.left}" y1="${c.toFixed(1)}" x2="${o.width-o.right}" y2="${c.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${o.left-10}" y="${c.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(Sy(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function Ey(e=null){const t=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[t,"Ketel"]].map(([r,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(r)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function Ei(){const e=lo(),t=ye(n.energyHistoryView),o=vr(e,t),r=gy(e,t,o),a=my(r.buckets);return{records:e,buckets:r.buckets,viewModel:r,periodControl:o,summary:a,activeView:t}}function Yu(e=Ei()){return ve({energyHistorySignature:n.energyHistorySignature||"",energyHistoryError:n.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,currentValues:mr.map(t=>e.buckets[e.buckets.length-1]?.[t]??null)})}function Ju(e=Ei()){const t=e.summary,o=e.buckets[0]?.dateKey?Je(e.buckets[0].dateKey):"\u2014",r=e.buckets[e.buckets.length-1]?.dateKey?Je(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(Yu(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${vy(e.activeView)}
          ${fy(e.periodControl)}
        </div>
        ${n.energyHistoryError?`<p class="oq-energy-history-error">${s(n.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${So("Gemiddelde COP",$o(t.heatOutputWh,t.heatingInputWh),`${s(o)} - ${s(r)}`)}
          ${So("Elektrisch",$e(t.electricalInputWh,1),"verbruikt")}
          ${So("Warmtepomp",$e(t.heatOutputWh+t.coolingOutputWh,1),"warmte en koeling")}
          ${So("Cv-ketel",$e(t.boilerOutputWh,1),"thermisch")}
        </div>
        ${yy(t)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${Ty(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${Ey(t)}
      </section>
    `}function Qs(e){if(n.appView!=="results"||!n.root)return;const t=e.target.closest?.("[data-oq-energy-history-tip]"),o=t?.closest?.(".oq-energy-history-chart-wrap")||n.root.querySelector(".oq-energy-history-chart-wrap"),r=o?.querySelector(".oq-energy-history-tooltip");if(!t||!o||!r){r&&r.classList.remove("is-visible");return}const a=String(t.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){r.classList.remove("is-visible");return}r.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(u=>`<span>${s(u)}</span>`).join("")}
    `;const i=o.getBoundingClientRect();r.classList.add("is-visible");const l=r.getBoundingClientRect(),c=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),d=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));r.style.transform=`translate(${c.toFixed(0)}px, ${d.toFixed(0)}px)`}function $y(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(n.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${Fu()}
        </div>
      </section>
    `}function Ay(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(n.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${Ju()}
        </div>
      </section>
    `}function Hy(){if(!n.root||n.appView!=="energy")return!1;const e=n.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-overview-energy"):null;if(!e||!t)return!1;const o=`oq-overview-board oq-overview-board--${n.overviewTheme}`;e.className!==o&&(e.className=o);const r=ki();return dt(t,Ou(r),Fu(r))}function My(){if(!n.root||n.appView!=="results")return!1;const e=n.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-energy-history"):null;if(!e||!t)return!1;const o=`oq-overview-board oq-overview-board--${n.overviewTheme}`;e.className!==o&&(e.className=o);const r=Ei(),a=by();return(a?!1:dt(t,Yu(r),Ju(r)))||a}function $i(e,t,o){const r=ed(B(t.mode,"Unknown")),a=A(t.defrost),i=Un(B(t.failures,"None")),l=ou(i),c=r==="Verwarmen"||r==="Koelen"||a;return{mode:r,defrostActive:a,failures:i,warningFailures:l,running:c,thermalKey:r==="Koelen"?t.cooling:t.heat,schematic:Iy(e,t,o,r,a,l,c)}}function Zu(e,t=null){return`<h3>${s(e)}</h3>${t?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(t.layout)}">${Ky(t.layout==="equal"?"minus":"plus")}<span>${s(t.label)}</span></button>`:""}`}function aa(e,t,o,r){return`<div class="oq-overview-hp-status">${hu(e,t,o,r)}</div>`}function Py(){return B("controlModeLabel","").toLowerCase().includes("standby")}function Ny(e,t){return t?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function Xu(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(t=>`${t.title} ${Ny(ed(B(t.keys.mode,"Unknown")),A(t.keys.defrost))}`).join(", "))}</p>`}function Ry(e){const t=n.entities[e];if(!t)return"Positie: \xE2\u20AC\u201D";const o=M(e);return Number.isNaN(o)?`Positie: ${B(e)}`:`Positie: ${I(o,0,t.uom||"")}`}function Ly(e){return v(e)?`Positie: ${A(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \xE2\u20AC\u201D"}function ed(e){const t=String(e||"").trim();return!t||t==="Unknown"?"Onbekend":t==="Standby"?"Stand-by":t==="Heating"?"Verwarmen":t==="Cooling"?"Koelen":t}function Un(e){const t=String(e||"").trim();return!t||t==="None"?"Geen actieve storingen":t}function ia(e,t,o,r=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(t)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(o)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(o)}" />
        ${r?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(o)}" />`:""}
      </g>
    `}function Oy(e,t,o){return e==="temperature"?`
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${t-10}"
          y="${o-10}"
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
          y="${o-10}"
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
          y="${o-10}"
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
          y="${o-10}"
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
          y="${o-10}"
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
          y="${o-10}"
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
          y="${o-10}"
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
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${t-10} ${o-10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `}function zn({bind:e,modifier:t,x:o,y:r,width:a,kicker:i,detail:l,detailBind:c="",icon:d="heater",direction:u="down"}){const b=o+26,f=r+22,w=c?` data-oq-bind="${s(c)}"`:"";let p="";if(u==="up"){const h=o+Math.round(a*.52);p=`M${h-6} ${r} L${h} ${r-8} L${h+6} ${r} Z`}else if(u==="left"){const h=r+Math.round(22);p=`M${o} ${h-6} L${o-8} ${h} L${o} ${h+6} Z`}else if(u==="right"){const h=r+Math.round(22);p=`M${o+a} ${h-6} L${o+a+8} ${h} L${o+a} ${h+6} Z`}else{const h=o+Math.round(a*.52);p=`M${h-6} ${r+44} L${h} ${r+44+8} L${h+6} ${r+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(t)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${o}" y="${r}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${b}" cy="${f}" r="11.5" />
        ${Oy(d,b,f)}
        <text class="oq-hp-tech-tooltip-kicker" x="${o+48}" y="${r+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${o+48}" y="${r+32}"${w}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${p}" />
      </g>
    `}function sa({bind:e,x:t,y:o,width:r,value:a,label:i,ariaLabel:l="",align:c="start"}){const d=l||`${i} temperatuur ${a}`,u=c==="end",g=c==="center",b=g?"middle":u?"end":"start",f=g?t+r/2:u?t+r-2:t+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(d)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${t}" y="${o}" width="${r}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${f}" y="${o+13}" text-anchor="${b}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function Fy({tooltip:e,...t}){return`${sa(t)}${zn({bind:t.bind,...e})}`}function xy({bind:e,ariaLabel:t,x:o,y:r,width:a,height:i,rx:l,tooltip:c}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(t)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${o}" y="${r}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${zn({bind:e,...c})}
    `}function Dr({bind:e,className:t,active:o,ariaLabel:r,attrs:a="",activeClass:i="is-active",content:l,tooltip:c}){return`
      <g class="${[t,o&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${o?"0":"-1"}" aria-label="${s(r)}" ${a}>
        ${l}
      </g>
      ${zn({bind:e,...c})}
    `}function Dy({label:e,value:t,bind:o,ariaLabel:r="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${r?` aria-label="${s(r)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(t)}</strong>
      </div>
    `}function Ge(e,t,o=""){const r=M(e);return Number.isNaN(r)?B(e):I(r,t,Nn(e,o))}function Iy(e,t,o,r,a,i,l){const c=M(t.freq),d=Number.isNaN(c)?"\u2014":String(Math.round(c)),u=M(t.power),g=M(t.heat),b=M(t.cooling),f=M(t.flow),w=r==="Koelen"?b:g,p=l||!Number.isNaN(c)&&c>0||!Number.isNaN(u)&&u>80||!Number.isNaN(g)&&g>150,h=!Number.isNaN(f)&&f>0,y=mu(r,p),S=i==="Geen actieve storingen"?"Geen storingen":i,q=S!=="Geen storingen",C=a?"Actief":"Uit",k=Ge(t.waterOut,1,"\xB0C"),H=Ge(t.waterIn,1,"\xB0C"),x=Number.isNaN(f)?B(t.flow):I(f,0,Nn(t.flow,"L/h")),F=Ge(t.evaporatorCoilTemp,1,"\xB0C"),G=Ge(t.innerCoilTemp,1,"\xB0C"),T=Ge(t.outsideTemp,1,"\xB0C"),$=Ge(t.condenserPressure,1,"bar"),N=Ge(t.dischargeTemp,1,"\xB0C"),W=Ge(t.evaporatorPressure,1,"bar"),K=Ge(t.returnTemp,1,"\xB0C"),R=A(t.bottomPlate),V=A(t.crankcase),P=Ry(t.eev),O=Ly(t.fourWay),_=I(u,0,"W"),Y=I(w,0,"W"),pe=r==="Koelen"?!Number.isNaN(u)&&u>=5&&!Number.isNaN(b)?b/u:Number.NaN:M(t.cop),ce=I(pe,1),J=r==="Koelen"?"COP (EER)":"COP",it=r==="Koelen"?"Koelafgifte":"Warmteafgifte",Ce=r==="Koelen"?"afgegeven koeling":"afgegeven warmte",Cn=M(t.fanSpeed),ge=!Number.isNaN(Cn)&&Cn>0,Sr=Number.isNaN(Cn)?"\u2014":`${Math.round(Cn)} rpm`,me=a||r==="Koelen",qr=me?"Verdamper":"Condensor",Tn=me?"Condensor":"Verdamper",co=me?"return":"supply",kt=me?"supply":"return",xt=360,Ue=384,En=214,Dt="M278 220 C278 228 273 234 266 234",Oe="M278 220 C278 228 283 234 290 234",Pi="M290 234 C284 234 279 240 278 248",Te="M266 234 C272 234 277 240 278 248",st=me?`M290 234 H${xt} Q372 ${En} ${Ue} 234 H436 V134 H480`:"M266 234 H180 V134 H164",$n=me?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${Ue} Q372 ${En} ${xt} 234 H290`,It="M296 150 H278 V220",uo="M278 248 V268 H372 V150 H356",Wt=me?"M480 294 H337":"M164 294 H315",Fe=me?"M315 294 H164":"M337 294 H480",Ni=["oq-hp-schematic-board",`oq-hp-schematic-board--${o}`,p?"is-running":"",h?"is-water-flowing":"",ge?"is-fan-running":"",me?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:Ni,statusText:y,failureText:S,warningActive:q,waterFlowActive:h,defrostActive:a,defrostText:C,mode:r,reverseCycle:me,compressorFreqText:`${d} Hz`,leftExchangerTitle:qr,rightExchangerTitle:Tn,supplyLineTone:co,returnLineTone:kt,waterOutText:k,waterInText:H,flowText:x,evaporatorCoilTempText:F,innerCoilTempText:G,outsideTempText:T,dischargePressureText:$,dischargeTempText:N,suctionPressureText:W,suctionTempText:K,bottomPlateActive:R,crankcaseActive:V,eevPositionText:P,fourWayPositionText:O,powerText:_,heatText:Y,heatLabel:it,heatDescription:Ce,efficiencyText:ce,efficiencyLabel:J,fanRpmText:Sr,hotgasValveHeat:Dt,hotgasValveCool:Oe,suctionValveHeat:Pi,suctionValveCool:Te,leftValveTone:me?"suction":"hotgas",rightValveTone:me?"hotgas":"suction",pipes:{supply:{tone:co,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:kt,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:It,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:st,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:Wt,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:Fe,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:$n,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:uo,animated:!0,flowVariant:"default"}}}}function Wy(e){const t=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),o=`${t}-cond-water-heat`,r=`${t}-cond-water-cool`,a=`${t}-cond-ref`,i=e.reverseCycle?r:o,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],c=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],d=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
      <div class="${s(e.boardClass)}" data-oq-hp-board="${s(e.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${s(e.title)} technische schematic">
              <defs>
              <linearGradient id="${s(o)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${s(r)}" x1="0" y1="1" x2="0" y2="0">
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

            ${Object.entries(e.pipes).map(([u,g])=>ia(u.replace(/[A-Z]/g,b=>`-${b.toLowerCase()}`),g.tone,g.d,g.animated,g.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${c.map(Fy).join("")}
            ${Dr({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${Dr({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${Dr({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${d.map(xy).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(Dy).join("")}
          </div>
        </div>
      </div>
    `}function td(e,t,o,r="normal",a=null){if(!v(t.power))return"";const i=$i(e,t,o),{mode:l,defrostActive:c,running:d,thermalKey:u}=i,g=i.schematic;return n.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(o)} oq-overview-hp--${s(r)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${Zu(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${aa(l,d,g.warningActive,g.failureText)}
            </div>
          </div>
          ${Wy(g)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(o)} oq-overview-hp--${s(r)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${aa(l,d,g.warningActive,g.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${gr([{key:t.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:u,label:g.heatLabel,tone:"orange",note:g.heatDescription},{label:g.efficiencyLabel,value:g.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${s(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${s(B(t.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${c?"Actief":"Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${ta("Water in",t.waterIn)}
          ${ta("Water out",t.waterOut)}
        </div>
      </section>
    `}function Ai(){return A("boilerCvAssistEnabled")&&v("boilerHeatPower")}function By(){return(typeof Z=="function"?Z():"")!=="single"&&v("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function Vy(){return(typeof Z=="function"?Z():"")!=="single"&&v("hp2Flow")?"hp2Flow":"hp1Flow"}function yr(){const e=M("boilerHeatPower"),t=M(Vy()),o=v("boilerActive")?A("boilerActive"):!Number.isNaN(e)&&e>20,r=!Number.isNaN(t)&&t>0,a=I(e,0,"W"),i=I(t,0,"L/h"),l=I(M(By()),1,"\xB0C"),c=I(M("supplyTemp"),1,"\xB0C"),d=o?"Aan":"Uit",u=o?"Levert ondersteuning":"Geen ondersteuning",g=["oq-boiler-card",o?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:o,flowActive:r,heatText:a,flowText:i,returnTempText:l,supplyTempText:c,statusText:d,statusCopy:u,boardClass:g,flowPathClass:r?"is-flowing":"is-static"}}function Hi(e=yr()){return ve({version:"boiler-visual-mode-v1",visualMode:n.hpVisualMode,boardClass:"oq-boiler-card"})}function _y(e,t=yr()){const o=e.querySelector(".oq-boiler-card");o&&(o.className=["oq-boiler-card",t.active?"is-running":"is-idle",t.flowActive?"is-flowing":"is-static"].join(" "));const r=e.querySelector(".oq-overview-chip");r&&(r.className=`oq-overview-chip oq-overview-chip--${t.active?"active":"neutral"}`,r.textContent!==t.statusText&&(r.textContent=t.statusText));const a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",t.active),a.classList.toggle("is-idle",!t.active));const i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==t.statusCopy&&(i.textContent=t.statusCopy);const l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==t.heatText&&(l.textContent=t.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(g=>{g.textContent!==t.flowText&&(g.textContent=t.flowText)});const c=e.querySelector("[data-oq-boiler-status-value]");c&&c.textContent!==t.statusCopy&&(c.textContent=t.statusCopy);const d=e.querySelector('[data-oq-bind="boiler-return-value"]');d&&d.textContent!==t.returnTempText&&(d.textContent=t.returnTempText);const u=e.querySelector('[data-oq-bind="boiler-supply-value"]');u&&u.textContent!==t.supplyTempText&&(u.textContent=t.supplyTempText)}function jy(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(Hi(e))}">
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
    `}function la(){if(!Ai())return"";const e=yr();return n.hpVisualMode!=="schematic"?jy(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(Hi(e))}">
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
                ${ia("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${ia("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${sa({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${zn({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${sa({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
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
    `}function nd(){const e=typeof Z=="function"?Z():"";return Nd.filter(t=>e==="single"&&t.title==="HP2"?!1:v(t.keys.power))}function Mi(e){return!Array.isArray(e)||e.length<2||n.hpVisualMode!=="schematic"?"equal":n.hpLayoutMode==="focus-hp1"||n.hpLayoutMode==="focus-hp2"?n.hpLayoutMode:"equal"}function jo(e,t,o){return!Array.isArray(t)||t.length<2?"normal":o==="focus-hp1"?e===0?"focus":"muted":o==="focus-hp2"?e===1?"focus":"muted":"normal"}function ca(e,t,o){return!Array.isArray(t)||t.length<2||n.hpVisualMode!=="schematic"?null:jo(e,t,o)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function od(e){return!Array.isArray(e)||e.length!==1?Mi(e):Ai()?"equal":"single"}function Ky(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function rd(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${Xu(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${n.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${n.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function Uy(e,t){if(!e)return!1;const o=e.querySelector(".oq-overview-hp-tools-copy"),r=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!o||!r||!a?(mt(e,rd(t)),!0):(mt(o,`
      <h3>Warmtepompen</h3>
      ${Xu(t)}
    `),r.classList.toggle("is-active",n.hpVisualMode==="schematic"),a.classList.toggle("is-active",n.hpVisualMode==="compact"),!0)}function zy(){const e=yu(),t=nd(),o=Mi(t),r=od(t),a=rd(t);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(n.overviewTheme)}">
          ${pu()}
          ${Mv(e)}
          <div class="oq-overview-main">
            ${ku(na())}
            ${Hu()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(r)}">
            ${t.map((i,l)=>td(i.title,i.keys,i.accent,jo(l,t,o),ca(l,t,o))).join("")}
            ${la()}
          </div>
        </div>
      </section>
    `}function Gy(e,t,o){if(!e)return;const r=e.querySelector(t);r&&r.textContent!==o&&(r.textContent=o)}function mt(e,t){e&&e.innerHTML!==t&&(e.innerHTML=t)}function dt(e,t,o){return!e||e.dataset.renderSignature===t?!1:(e.outerHTML=o,!0)}function Xt(e,t,o){e&&e.getAttribute(t)!==o&&e.setAttribute(t,o)}function Qy(e,t){t.forEach(([o,r])=>{Gy(e,`[data-oq-bind="${o}"]`,r)})}function Yy(e,t){t.forEach(([o,r])=>{Xt(e.querySelector(`[data-oq-bind="${o}"]`),"aria-label",r)})}function Jy(e,t,o,r=""){const a=e.querySelector(`[data-oq-bind="${t}"]`);a&&(a.classList.toggle("is-active",o),Xt(a,"tabindex",o?"0":"-1"),!o&&r&&wr(e.querySelector(`[data-oq-bind="${r}"]`)))}function Zy(e,t,o){Xt(e.querySelector(`[data-oq-bind="${t}"]`),"fill",o)}function Gn(e,t,o,r){if(!e)return;const a=`${t}${o}`;r.map(l=>`${t}${l}`).find(l=>e.classList.contains(l))!==a&&(r.forEach(l=>e.classList.remove(`${t}${l}`)),e.classList.add(a))}function Xy(e,t,o,r){const a=e.querySelector(`[data-oq-pipe="${t}"]`);a&&(Gn(a,"oq-hp-tech-pipe--",o,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==r&&i.setAttribute("d",r)}))}function wr(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function Ys(e,t,o){!e||!t||!o||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(r=>{r!==o&&wr(r)}),t.appendChild(o),o.classList.add("is-active"),o.setAttribute("aria-hidden","false"))}function ew(e,t,o,r){if(!e||!t||!o||!r||o.dataset.oqTooltipWired==="true")return;o.dataset.oqTooltipWired="true";const a=()=>{o.matches(":hover")||document.activeElement===o||wr(r)};o.addEventListener("mouseenter",()=>Ys(e,t,r)),o.addEventListener("mouseleave",a),o.addEventListener("focus",()=>Ys(e,t,r)),o.addEventListener("blur",a)}function ad(e){if(!e)return;const t=e.querySelector(".oq-hp-tech-svg");if(!t)return;let o=t.querySelector(".oq-hp-tech-tooltip-layer");o||(o=document.createElementNS("http://www.w3.org/2000/svg","g"),o.setAttribute("class","oq-hp-tech-tooltip-layer"),t.appendChild(o)),Array.from(t.querySelectorAll(".oq-hp-tech-tooltip")).forEach(r=>{o.appendChild(r)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(r=>{const a=r.getAttribute("data-oq-tooltip-target");if(!a)return;const i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);ew(e,o,r,i)})}function tw(e=n.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(t=>{ad(t)})}function nw(e,t,o,r,a=null,i=null){if(!e)return;const l=i||$i(t,o,r),{mode:c,running:d}=l,u=l.schematic,g=e.querySelector(".oq-overview-hp-head-title");g&&mt(g,Zu(t,a));const b=e.querySelector(".oq-overview-hp-head-side");if(b){let y=b.querySelector(".oq-overview-hp-status");y||(mt(b,aa(c,d,u.warningActive,u.failureText)),y=b.querySelector(".oq-overview-hp-status")),hv(y,c,d,u.warningActive,u.failureText)}const f=e.querySelector("[data-oq-hp-board]");if(!f)return;f.className!==u.boardClass&&(f.className=u.boardClass),Qy(f,[["status",u.statusText],["left-exchanger-title",u.leftExchangerTitle],["right-exchanger-title",u.rightExchangerTitle],["compressor-freq",u.compressorFreqText],["flow-value",u.flowText],["inner-coil-temp-value",u.innerCoilTempText],["evaporator-temp-value",u.evaporatorCoilTempText],["outside-temp-value",u.outsideTempText],["discharge-pressure-value",u.dischargePressureText],["discharge-temp-value",u.dischargeTempText],["suction-pressure-value",u.suctionPressureText],["suction-temp-value",u.suctionTempText],["supply-value",u.waterOutText],["return-value",u.waterInText],["footer-mode",u.mode],["footer-power",u.powerText],["footer-heat",u.heatText],["footer-efficiency-label",u.efficiencyLabel],["footer-efficiency",u.efficiencyText],["fan-speed-value",u.fanRpmText],["fourway-detail",u.fourWayPositionText],["eev-detail",u.eevPositionText]]);const w=f.querySelector('[data-oq-bind="footer-heat-label"]');if(w){Xt(w,"aria-label",u.heatLabel);const y=u.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";w.innerHTML!==y&&(w.innerHTML=y)}[["bottom-heater",u.bottomPlateActive],["crankcase-heater",u.crankcaseActive]].forEach(([y,S])=>{Jy(f,y,S,`${y}-tooltip`)});const p=f.querySelector('[data-oq-bind="defrost-badge"]');p&&(Xt(p,"tabindex",u.defrostActive?"0":"-1"),Xt(p,"aria-label",u.defrostActive?"Defrost actief":"Defrost uit"),u.defrostActive||wr(f.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",u.supplyLineTone],["return-tooltip",u.returnLineTone]].forEach(([y,S])=>{Gn(f.querySelector(`[data-oq-bind="${y}"]`),"oq-hp-tech-tooltip--",S,["warm","supply","return"])}),Yy(f,[["supply-reading",`Aanvoer temperatuur ${u.waterOutText}`],["flow-reading",`Flow ${u.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${u.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${u.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${u.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${u.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${u.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${u.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${u.dischargeTempText}`],["return-reading",`Retour temperatuur ${u.waterInText}`],["suction-pressure-reading",`Zuigdruk ${u.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${u.suctionTempText}`],["fourway-trigger",`4-wegklep, ${u.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${u.eevPositionText}`]]),Gn(f.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",u.returnLineTone,["supply","return"]);const h=String(u.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");Zy(f,"cond-water",`url(#${u.reverseCycle?`${h}-cond-water-cool`:`${h}-cond-water-heat`})`),Object.entries(u.pipes).forEach(([y,S])=>{Xy(f,y.replace(/[A-Z]/g,q=>`-${q.toLowerCase()}`),S.tone,S.d)}),ad(f),Aa()}function ow(){if(!n.root||n.appView!=="overview")return!1;const e=n.root.querySelector(".oq-overview-board");if(!e)return!1;const t=`oq-overview-board oq-overview-board--${n.overviewTheme}`;e.className!==t&&(e.className=t);const o=yu(),r=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),c=e.querySelector(".oq-overview-trends"),d=e.querySelector(".oq-overview-hp-tools"),u=e.querySelector(".oq-overview-hp-grid"),g=e.querySelector("[data-oq-boiler-panel]"),b=nd();if(r){const q=jn();dt(r,ve(q),pu())}if(a){const q=a.querySelector(".oq-overview-top");q&&mt(q,gr(Eu()));const C=a.querySelector(".oq-overview-statuspanel");if(C){const H=B("controlModeLabel");dt(C,ve(Cu(o,H)),Tu(o,H))}const k=a.querySelector(".oq-overview-summary-side");if(k){const H=bc();k.dataset.renderSignature!==H&&(mt(k,$u()),k.dataset.renderSignature=H)}}if(i&&dt(i,ve(na()),ku(na())),l){const q=fi();dt(l,Au(q),Hu())}if(c&&n.appView==="overview"&&(dt(c,yi(),wi()),Lu(e)),qi(e),!d||!u)return!1;const f=Mi(b),w=od(b);if(Uy(d,b),Gn(u,"oq-overview-hp-grid--",w,["single","equal","focus-hp1","focus-hp2"]),n.hpVisualMode!=="schematic"){const q=[...b.map((k,H)=>td(k.title,k.keys,k.accent,jo(H,b,f),ca(H,b,f))),la()].join(""),C=ve({visualMode:n.hpVisualMode,layout:w,markup:q});return u.dataset.renderSignature!==C&&(mt(u,q),u.dataset.renderSignature=C),!0}const p=Ai()?yr():null,h=p?la():"",y=p?Hi(p):"";return!!g!=!!h||(g&&g.dataset.renderSignature!==y?g.outerHTML=h:g&&p&&_y(g,p),u.querySelectorAll("[data-oq-hp-panel]").length!==b.length)?!1:(b.forEach((q,C)=>{const k=e.querySelector(`[data-oq-hp-panel="${q.title}"]`);if(k){const H=$i(q.title,q.keys,q.accent);Gn(k,"oq-overview-hp--",jo(C,b,f),["normal","focus","muted"]),nw(k,q.title,q.keys,q.accent,ca(C,b,f),H)}}),!0)}function rw(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${tb()}
        ${nb()}
      </section>
    `}function aw(){return`
      <div class="oq-helper-modal-backdrop${n.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""} oq-helper-modal-backdrop--loading" data-oq-modal="initial-load">
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
    `}function iw(){return n.appView==="overview"?zy():n.appView==="energy"?$y():n.appView==="diagnosis"?Kv():n.appView==="results"?Ay():rw()}function sw(){const e=Rl();return`
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
    `}function lw(){const e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function cw(e){if(!e||n.deferDevControlSelectRender)return;n.deferDevControlSelectRender=!0;const t=()=>{e.removeEventListener("blur",t),e.removeEventListener("change",t),n.deferDevControlSelectRender=!1,window.setTimeout(()=>m(),0)};e.addEventListener("blur",t,{once:!0}),e.addEventListener("change",t,{once:!0})}function m(){if(!n.root)return;const e=lw();if(e){cw(e);return}const t=n.systemModal==="webserver-logs"?wt():null,o=n.systemModal==="cm100-commissioning"?jh():null,r=String(n.systemModal||"").startsWith("service-task-")?Uh():null,a=n.systemModal==="history-storage"?Gh():null,i=n.quickStartModalOpen?Zb():null;if(n.nativeOpen){n.root.innerHTML=`
        ${Xi()}
        ${pg()}
      `,n.settingsRenderSignature="",n.headerRenderSignature=Br(),ka(),Ro(),Ts(),Gi(),ys(),vs(),bt(t),Ss(o),qs(r),ks(a),xs(i);return}const l=iw(),c=n.loadingEntities?`${l}${aw()}`:l,d=n.appView==="overview"||n.appView==="energy"||n.appView==="diagnosis"||n.appView==="results";n.root.innerHTML=`
      ${Xi()}
      <div class="oq-helper-shell${n.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${d?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${Ed}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${ug()}
          </div>
      ${Hh()}
      ${c}
      ${sw()}
        </div>
      </div>
      ${Jb()}
      ${mg()}
      ${hg()}
      ${zp()}
    `,n.settingsRenderSignature=n.appView==="settings"?Gr():"",n.headerRenderSignature=Br(),$a(),tw(),Ts(),Ha(),qi(),Ro(),Gi(),ys(),vs(),bt(t),Ss(o),qs(r),ks(a),xs(i)}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}fp();})();
