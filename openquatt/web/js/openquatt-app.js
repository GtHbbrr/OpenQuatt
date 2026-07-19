/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{var cs={main:"https://github.com/jeroen85/OpenQuatt/releases/latest",dev:"https://github.com/jeroen85/OpenQuatt/releases/tag/dev-latest"},us="https://oi.esphome.io/v3/www.js",Ut=2,Gt=4,pn=6e4,Sa="Power House",qa="Water Temperature Control (heating curve)",Cr=[["setup","Kies je setup","Controleer of je Q-edition als Single of Duo en via Wi-Fi of Ethernet moet werken."],["generation","Kies je Quatt Hybrid","Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar."],["flow-source","Flowmeting configureren","Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort."],["thermostat-source","Thermostaatgegevens configureren","Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt."],["boiler","CV-ketel of boiler","Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken.","boilerCvAssistEnabled"],["strategy","Kies de verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs."],["heating","Werk de regeling uit","Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze."],["flow","Flowregeling en afstelling","Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning."],["water","Watertemperatuur beveiligen","Controleer de normale bovengrens en de tripgrens voor het watercircuit."],["silent","Stille uren en niveaus","Stel daarna het stille venster en de compressorlimieten voor dag en nacht in."],["usage-telemetry","Gebruiksstatistieken","Kies of OpenQuatt beperkte technische gebruiksstatistieken mag delen. Tijdens een nieuwe Quick Start staat delen standaard aan.","usageTelemetryEnabled"],["confirm","Bevestigen en afronden","Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid."]].map(([e,t,r,n],a)=>({id:e,kicker:`Stap ${a+1}`,title:t,copy:r,...n?{optionalEntity:n}:{}})),mn=[1,2],xr=Array.from({length:11},(e,t)=>t),ka=["cooling","heating"];function Vb(e){return e==="cooling"?"cooling":"heating"}function Bb(e){return e==="cooling"?"Cooling":"Heating"}function Lo(e,t,r){return`hp${e}OduRuntime${Bb(t)}F${r}`}function $e(e,t){return`hp${e}OduRuntimeFrequency${t}`}function ds(e){return[$e(e,"Enable"),$e(e,"Load"),$e(e,"Apply"),$e(e,"Status"),...ka.flatMap(t=>xr.map(r=>Lo(e,t,r)))]}function Bu(e){let t=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return t?Number(t[1]):0}var Ea=mn.flatMap(ds),Ta=new Set(mn.flatMap(e=>[$e(e,"Load"),$e(e,"Apply")])),O={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},hardwareRevisionText:{domain:"text_sensor",name:"OpenQuatt Hardware Revision",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},statusLedsEnabled:{domain:"switch",name:"Status LEDs enabled",optional:!0},usageTelemetryEnabled:{domain:"switch",name:"Usage statistics",optional:!0},usageTelemetryChoiceConfigured:{domain:"binary_sensor",name:"Usage statistics choice configured",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableValid:{domain:"binary_sensor",name:"Cooling Enable Valid",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingDewPointSource:{domain:"select",name:"Cooling Dew Point Source",optional:!0},coolingDewPointHa:{domain:"sensor",name:"HA - Cooling Dew Point",optional:!0},coolingDewPointHaValid:{domain:"binary_sensor",name:"HA - Cooling Dew Point Valid",optional:!0},mqttCoolingDewPoint:{domain:"sensor",name:"MQTT Cooling Dew Point",optional:!0},mqttCoolingDewPointAge:{domain:"sensor",name:"MQTT Cooling Dew Point Age",optional:!0},mqttCoolingDewPointValid:{domain:"binary_sensor",name:"MQTT Cooling Dew Point Valid",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRoomRequestRequired:{domain:"switch",name:"Cooling Room Request Required",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp1RuntimeHours:{domain:"sensor",name:"HP1 - Runtime Hours",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},hp2RuntimeHours:{domain:"sensor",name:"HP2 - Runtime Hours",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestConfidence:{domain:"sensor",name:"Boiler power test confidence",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},decisionLogHistoryEnabled:{domain:"switch",name:"Beslisloghistorie bewaren",optional:!0},decisionLogHistoryFlush:{domain:"button",name:"Beslisloghistorie nu opslaan",optional:!0},decisionLogHistoryClear:{domain:"button",name:"Beslisloghistorie wissen",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},mqttOutsideTemperature:{domain:"sensor",name:"MQTT Outside Temperature",optional:!0},mqttOutsideTemperatureAge:{domain:"sensor",name:"MQTT Outside Temperature Age",optional:!0},mqttOutsideTemperatureValid:{domain:"binary_sensor",name:"MQTT Outside Temperature Valid",optional:!0},mqttRoomTemperature:{domain:"sensor",name:"MQTT Room Temperature",optional:!0},mqttRoomTemperatureAge:{domain:"sensor",name:"MQTT Room Temperature Age",optional:!0},mqttRoomTemperatureValid:{domain:"binary_sensor",name:"MQTT Room Temperature Valid",optional:!0},mqttRoomSetpoint:{domain:"sensor",name:"MQTT Room Setpoint",optional:!0},mqttRoomSetpointAge:{domain:"sensor",name:"MQTT Room Setpoint Age",optional:!0},mqttRoomSetpointValid:{domain:"binary_sensor",name:"MQTT Room Setpoint Valid",optional:!0},mqttHeatingEnable:{domain:"binary_sensor",name:"MQTT Heating Enable",optional:!0},mqttHeatingEnableAge:{domain:"sensor",name:"MQTT Heating Enable Age",optional:!0},mqttHeatingEnableValid:{domain:"binary_sensor",name:"MQTT Heating Enable Valid",optional:!0},mqttCoolingEnable:{domain:"binary_sensor",name:"MQTT Cooling Enable",optional:!0},mqttCoolingEnableAge:{domain:"sensor",name:"MQTT Cooling Enable Age",optional:!0},mqttCoolingEnableValid:{domain:"binary_sensor",name:"MQTT Cooling Enable Valid",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};mn.forEach(e=>{let t=`HP${e} - EXPERIMENTAL`;O[$e(e,"Enable")]={domain:"switch",name:`${t} ODU runtime frequency write enable`,optional:!0},O[$e(e,"Load")]={domain:"button",name:`${t} load ODU runtime frequency table`,optional:!0},O[$e(e,"Apply")]={domain:"button",name:`${t} apply ODU runtime frequency table`,optional:!0},O[$e(e,"Status")]={domain:"text_sensor",name:`${t} ODU runtime frequency status`,optional:!0},ka.forEach(r=>{xr.forEach(n=>{O[Lo(e,r,n)]={domain:"number",name:`${t} ${Vb(r)} F${n} runtime Hz`,optional:!0}})})});var Ca=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"control",label:"Beslislog",icon:"activity",badge:"BETA"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"settings",label:"Instellingen",icon:"settings"}],Ku=new Set(Ca.map(e=>e.id)),Kb={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',clipboard:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',"clipboard-check":'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path d="m11 14 2 2 4-5"/>',droplet:'<path d="M12 3.2s6 6.5 6 10.8a6 6 0 0 1-12 0c0-4.3 6-10.8 6-10.8z"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',shield:'<path d="M12 3 19 6v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6z"/><path d="m9 12 2 2 4-5"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66 -1.41 1.41"/><path d="m19.07 4.93 -1.41 1.41"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>',thermometer:'<path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',waves:'<path d="M3 8c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 13c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 18c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/>',wifi:'<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function de(e,t=""){let r=Kb[e];return r?`<svg${t?` class="${zb(t)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${r}</svg>`:""}function zb(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}var fe=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],Le=new Set(fe.map(e=>e.id)),xa=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",compressor:"hp1Compressor",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",compressor:"hp2Compressor",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],zu=xa.flatMap(e=>Object.values(e.keys)),Ub=new Set(["cop","compressor","mode","failures","defrost","bottomPlate","crankcase","eev","fourWay"]),Gb=xa.flatMap(e=>Object.entries(e.keys).filter(([t])=>!Ub.has(t)).map(([,t])=>t)),he=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],At=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Oo=["dayMax","silentMax","maxWater"],rt=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],$r=["flowKp","flowKi"],gn=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],fn=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],hn=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],Qb=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otLinkProblem","hp1Failures","hp2Failures"],$a=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...fn,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],bn=new Set(["commissioningStatus","cm100Active","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowActive","manualFlowStatus","manualFlowTargetIpwm","manualHpActive","manualHpStatus","manualHpGuardStatus","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg"]),ps=["cicCompatibilityMode"],ms=["otEnabled","otLinkProblem"],gs=["cicPollingEnabled","cicFeedUrl","cicDataStale"],fs=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],hs=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],wn=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource"],bs=["supplyTemp","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","mqttOutsideTemperature","mqttOutsideTemperatureAge","mqttOutsideTemperatureValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid","mqttHeatingEnable","mqttHeatingEnableAge","mqttHeatingEnableValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","mqttCoolingEnable","mqttCoolingEnableAge","mqttCoolingEnableValid","coolingEnableValid","coolingEnableSelected","coolingEnableEffectiveSource","otThermostatCoolingEnable","coolingEnableHa","coolingEnableHaValid","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid"],wt=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],Io=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid"],ws=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingDewPointSource","coolingWithoutDewPointMode","coolingGuardMode","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],Fo=[...he.map(e=>e.key),"curveFallbackSupply","curveControlProfile"],ys=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],jo=["silentStartTime","silentEndTime","silentMax","dayMax"],Uu=1e4;var Ma=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Wo=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","hardwareRevisionText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingRoomRequestRequired","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],Qt=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],Yb=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],Yt=[...Qt,...Yb,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],Mr=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],nt=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp"],yn=["strategy","openquattEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive",...zu],Gu=["strategyActiveCode","hp1CompressorStarts24h","hp2CompressorStarts24h","hp1RuntimeHours","hp2RuntimeHours"],vs=["strategy","openquattEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","boilerCvAssistEnabled","openquattResumeAt","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingEffectiveMinSupplyTemp","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","silentModeOverride",...zu,...Qb],Qu=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","strategy",...At,...Fo,...rt,"maxWater",...jo,...wt,...Io,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerHeatPower","systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget",...Gb],Aa=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],Ha=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...$a,"manualCoolingEnable","usageTelemetryEnabled","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","decisionLogHistoryEnabled","decisionLogHistoryFlush","decisionLogHistoryClear","webServerLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear",...ps,...ms,...fs,...gs,...hs,...wn,...bs,...rt,...$r,...gn,...fn,...hn,...ws,...Oo,...At,...Fo,...ys,...jo,...Ea];var HT=new Set(["installationTopology",...$a,...Ea,"cicDataStale","otLinkProblem","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp","statusLedsEnabled","usageTelemetryEnabled"]),Jt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower"]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource",...gn]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...he.map(e=>e.key)]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","decisionLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Ss=2,go=[...new Set(Jt.flatMap(e=>e.keys))],Yu=new Set(go),Ju=5e3,Zu=3e4,Xu=6e4,fo=12e3,Ar=4e3,ed=1500,td=3e4,od=3e4,rd=1e3,vn=3e4,qs=250,nd=750,Jb=22,ad=Jb/1.7,id=360/3.2,Vo="2000-01-01 00:00:00";function sd(e){return{controlReplayTab:"status",controlReplayWindow:"last24",controlReplayPeriodMenuOpen:!1,controlReplayCustomPeriodOpen:!1,controlReplayCustomStart:"",controlReplayCustomEnd:"",controlReplayCustomPeriodError:"",controlReplaySelectedEpisode:"",controlReplaySupportDetailsItemId:"",controlReplayGraphMinute:1e3,controlReplayScrubbing:!1,decisionLog:null,decisionLogError:"",decisionLogSignature:"",decisionLogLastFetchAt:0,decisionLogFetchPromise:null,decisionLogStorageMetadata:{},decisionLogStorageMetadataError:"",decisionLogStorageMetadataSignature:"",decisionLogStorageMetadataLastFetchAt:0,decisionLogStorageMetadataFetchPromise:null,trendWindowHours:e,trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,trendHistoryMetadata:{},trendHistoryMetadataError:"",trendHistoryMetadataSignature:"",trendHistoryMetadataLastFetchAt:0,trendHistoryMetadataFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryCsrfToken:"",energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",energyHistoryExportMode:"days_and_hours",energyHistoryExportBusy:!1,energyHistoryExportError:"",energyHistoryExportNotice:"",settingsStorageAdvancedOpen:!1,settingsStorageDetailsOpen:!1,settingsStoragePage:"overview",energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""}}}function ld(e){return{webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogCsrfToken:"",webServerLogHistoryNeedsReconcile:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,historyStorageModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,quickStartSetupDraft:"",quickStartSetupConfirmed:!1,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:e,debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null}}function cd(){return{complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},renderedAppView:"",renderedSettingsGroup:"",settingsPageScrollRestoreToken:0,settingsInfoOpen:"",installationMonitoringDetailsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,usageTelemetryDetailsOpen:!1,installationMonitoringProblemSignature:"",settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupMqttPassword:"",settingsBackupRestoreResult:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:""}}function ud(){return{authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1,mqttBusy:!1,mqttNotice:"",mqttError:"",mqttCopiedTopicKey:"",mqttCopiedTopicTimer:null,mqttExpandedTopicKey:"",mqttInputToggleBusyKey:"",mqttRetainedToggleBusyKey:"",mqttSensorsModalRenderSignature:""}}function dd(){return{updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallStatusPollObserved:!1,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:""}}function pd(e){return{draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:e,motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}}}function Zb(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}var Ht=24,Bo=[3,12,24,72,168,336,720],o={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,supplementaryPrimeTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:ew(),devPanelOpen:!1,nativeOpen:tw()==="native",currentStep:"setup",quickStartModalMode:"wizard",settingsGroup:ow(),appView:"",overviewTheme:Xb(),hpVisualMode:rw(),hpLayoutMode:nw(),...sd(aw()),deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",...ld(Zb()),...cd(),updateModalOpen:!1,systemModal:"",...ud(),...dd(),...pd(iw())};function Xb(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function ew(){return!1}function tw(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function ow(){try{let e=window.localStorage.getItem("oq-settings-group");return Le.has(e)?e:fe[0].id}catch{return fe[0].id}}function rw(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function nw(){try{let e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function aw(){try{let e=Number(window.localStorage.getItem("oq-trend-window-hours"));return Bo.includes(e)?e:Ht}catch{return Ht}}function ks(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function iw(){return!!ks()?.matches}function v(e){return!!o.entities[e]}function T(e){if(Object.prototype.hasOwnProperty.call(o.drafts,e))return o.drafts[e];let t=o.entities[e];return t?t.value??t.state??"":""}function Be(e){let t=o.entities[e]||{};return{min:Number(t.min_value??0),max:Number(t.max_value??100),step:Number(t.step??1),uom:t.uom||""}}function Re(e){if(typeof e=="number")return e;let t=String(e??"").trim().replace(",",".");return!t||t==="-"||t==="."||t==="-."?Number.NaN:Number(t)}function Rt(e){let t=String(e||"").trim();if(!t)return"";let r=t.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]||"0");return[n,a,i].some(l=>Number.isNaN(l))||n<0||n>23||a<0||a>59||i<0||i>59?"":`${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function Sn(e){let t=Rt(e);return t?t.slice(0,5):""}function Ge(e){let t=String(e||"").trim();if(!t)return"";let r=t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),c=Number(r[5]),u=Number(r[6]||"0");return[n,a,i,l,c,u].some(p=>Number.isNaN(p))||n<2e3||a<1||a>12||i<1||i>31||l<0||l>23||c<0||c>59||u<0||u>59?"":`${String(n).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(u).padStart(2,"0")}`}function Ra(e){let t=Ge(e);return!t||t===Vo?"":t.slice(0,16).replace(" ","T")}function gd(e){let t=Ge(e);if(!t||t===Vo)return null;let r=t.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!r)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),c=Number(r[5]),u=Number(r[6]),p=new Date(n,a-1,i,l,c,u,0);return Number.isNaN(p.getTime())?null:p}function qn(e=T("openquattResumeAt")){return!!gd(e)}function Hr(e,t=!1){let r=gd(e);return r?new Intl.DateTimeFormat("nl-NL",t?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(r):""}function md(e){let t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${t}-${r}-${n}T${a}:${i}`}function sw(e){let t=new Date(e.getTime());t.setSeconds(0,0);let r=t.getMinutes(),n=r%15;return n!==0&&t.setMinutes(r+(15-n)),t}function Es(e){let t=new Date;if(e==="2h"||e==="8h"){let r=e==="2h"?2:8,n=sw(new Date(t.getTime()+r*3600*1e3));return md(n)}if(e==="tomorrow-morning"){let r=new Date(t);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),md(r)}return""}function _a(){let e=Ra(o.pauseResumeDraft);if(e)return e;let t=Ra(T("openquattResumeAt"));return t||Es("2h")}function J(e,t=T(e)){if(t===""||t===null||Number.isNaN(Number(t)))return"\u2014";let r=Be(e),n=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return`${Number(t).toFixed(n)}${r.uom?` ${r.uom}`:""}`}function be(e,t){let r=Be(e),n=Re(t);if(Number.isNaN(n)){let u=Re(o.entities[e]?.value??o.entities[e]?.state??"");return Number.isNaN(u)?r.min:u}let a=Math.min(r.max,Math.max(r.min,n)),i=Math.round((a-r.min)/r.step),l=r.min+i*r.step,c=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(c))}function Pa(){let e=he[Math.floor(he.length/2-1)],t=he[Math.floor(he.length/2)];if(!e||!t||!v("curveFallbackSupply"))return null;let r=be(e.key,T(e.key)),n=be(t.key,T(t.key)),a=(r+n)/2,i=be("curveFallbackSupply",a);return{value:i,label:J("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${t.label}).`,isCurrent:be("curveFallbackSupply",T("curveFallbackSupply"))===i}}function lw(e){let t=String(e||"").replace(/\/$/,"");if(!t)return"";let r=t.split("/").pop()||"";return/\.[a-z0-9]+$/i.test(r)?t.slice(0,-r.length).replace(/\/$/,"")||"":t}function _e(){return lw(window.location.pathname)}function Q(e,t,r=""){let n=r?`/${r}`:"";return`${_e()}/${e}/${encodeURIComponent(t)}${n}`}function ae(e=T("strategy")){return String(e||"").includes("Water Temperature Control")}function fd(e=T("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function z(e,t,r=""){let n=Number(e);return Number.isNaN(n)?"\u2014":`${n.toFixed(t)}${r?` ${r}`:""}`}function Ko(e){if(!Number.isFinite(e)||e<0)return"\u2014";let t=Math.floor(e),r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function hd(){let e=[];e.push(ae()?"Stooklijn":"Power House");let t=String(T(ae()?"curveControlProfile":"phResponseProfile")||"").trim();t&&e.push(`profiel ${t}`);let r=String(T("flowControlMode")||"").trim();return r&&e.push(`flow ${r==="Manual PWM"?"handmatig":"setpoint"}`),r==="Manual PWM"&&v("manualIpwm")?e.push(`iPWM ${J("manualIpwm")}`):v("flowSetpoint")&&e.push(`flow ${J("flowSetpoint")}`),v("dayMax")&&e.push(`dag ${J("dayMax")}`),v("silentMax")&&e.push(`silent ${J("silentMax")}`),v("maxWater")&&e.push(`max water ${J("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function j(e,t="\u2014"){let r=o.entities[e];if(!r)return t;if(typeof r.state=="string"&&r.state.trim()!=="")return r.state;let n=r.value??r.state;return n==null||n===""?t:typeof n=="boolean"?n?"Aan":"Uit":typeof n=="number"&&!Number.isNaN(n)&&r.uom?`${n} ${r.uom}`:String(n)}function R(e){let t=Number(T(e));return Number.isNaN(t)?NaN:t}function Ts(e){let t=String(e||"").toLowerCase();return t.includes("cop")||t.includes("eer")}function Cs(e){let t=String(e||"");if(t==="totalEer"){let r=R("totalCoolingPower"),n=R("coolingPowerInput"),a=Number.isNaN(n)?R("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}if(t==="totalCop"){let r=R("totalHeat"),n=R("heatingPowerInput"),a=Number.isNaN(n)?R("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}return NaN}function Rr(e,t=""){let r=String(o.entities[e]?.uom||"").trim();return r||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||t}function at(e){let t=o.entities[e],r=Cs(e);if(!t)return Number.isNaN(r)?"\u2014":z(r,1,Rr(e));let n=R(e);if(Number.isNaN(n))return Number.isNaN(r)?j(e):z(r,1,Rr(e));let a=n>0||Number.isNaN(r)?n:r,i=Ts(e)?1:0;return z(a,i,Rr(e))}function C(e){let t=o.entities[e];if(!t)return!1;if(typeof t.value=="boolean")return t.value;let r=String(t.state??t.value??"").toLowerCase();return r==="on"||r==="true"||r==="1"}function yt(){return!v("trendHistoryEnabled")||C("trendHistoryEnabled")}function Na(){let e=o.entities.setupComplete;if(!e)return null;let t=String(e.state??e.value??"").trim().toLowerCase();return!t||t==="unknown"||t==="unavailable"?null:t==="on"||t==="true"||t==="1"?!0:t==="off"||t==="false"||t==="0"?!1:null}function bd(){return`
      <div class="oq-helper-app-nav">
        ${Ca.filter(e=>e.id!=="diagnosis"||yt()).map(e=>`
          <button
            class="oq-helper-app-tab ${o.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${de(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
            ${e.badge?`<span class="oq-helper-app-tab-badge">${s(e.badge)}</span>`:""}
          </button>
        `).join("")}
      </div>
    `}function cw(e=o.appView){return Ca.find(t=>t.id===e)?.label||"OpenQuatt"}function xs(){if(typeof document>"u")return;if(o.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}let e=cw();document.title=`${e} \u2022 OpenQuatt`}function $s(){if(typeof document>"u")return;if(o.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");let e=o.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}var Da="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",Ms="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",As='<svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>';async function kn(e,t={},r=0,n=""){if(typeof AbortController!="function"||!Number.isFinite(r)||r<=0)return fetch(e,t);let a=new AbortController,i=window.setTimeout(()=>a.abort(),r);try{return await fetch(e,{...t,signal:a.signal})}catch(l){throw a.signal.aborted?new Error(n||`request timed out after ${r}ms`):l}finally{window.clearTimeout(i)}}async function ho(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;let t=document.activeElement,r=document.createElement("textarea");r.value=e,r.setAttribute("readonly",""),r.style.position="fixed",r.style.top="-1000px",r.style.opacity="0",document.body.appendChild(r),r.focus({preventScroll:!0}),r.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r),t?.isConnected&&typeof t.focus=="function"&&t.focus({preventScroll:!0})}return n}function Hs(e,t){let r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,n.rel="noreferrer",document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function Rs(e,t,r="text/plain"){Hs(new Blob([t],{type:r}),e)}function wd(e,t){Rs(e,JSON.stringify(t,null,2),"application/json")}var _s=null;function yd(e){_s=typeof e=="function"?e:null}function f(){_s&&_s()}function uw(e){return e instanceof Error&&e.message?e.message:String(e||"Onbekende fout")}function vd(e,t){o.controlError=`Actie ${e||"(onbekend)"} mislukt. ${uw(t)}`,f(),console.error(`[OpenQuatt] Action failed: ${e||"(unknown)"}`,t)}function ie(e,t,...r){let n=e[t];if(!n)return!1;try{let a=n(...r);a&&typeof a.then=="function"&&a.catch(i=>vd(t,i))}catch(a){vd(t,a)}return!0}function Sd(e,t=null){e&&console.warn(`[OpenQuatt] Unknown action: ${e}`,t||"")}var dw={debugRecording:e=>e.startsWith("debugRecording"),energyHistory:e=>e.startsWith("energyHistory"),firmware:e=>e==="updateModalOpen"||e.startsWith("update")||e.startsWith("firmware"),mqtt:e=>e.startsWith("mqtt"),webServerLog:e=>e.startsWith("webServerLog")};function En(e,t){let r=dw[e],n=Object.keys(t).find(a=>!r(a));if(n)throw new Error(`${e} state beheert sleutel ${n} niet.`);Object.assign(o,t)}var La=e=>En("debugRecording",e),_t=e=>En("energyHistory",e),Me=e=>En("firmware",e),_r=e=>En("mqtt",e),Qe=e=>En("webServerLog",e);var pw=1500;function Ps(){o.deviceReconnectRecoveryTimer&&(window.clearTimeout(o.deviceReconnectRecoveryTimer),o.deviceReconnectRecoveryTimer=null)}function bo(){return Number(o.deviceReconnectRecoveryStartedAt||0)>0}function mw(){return bo()?Number(o.deviceReconnectRecoveryStartedAt||0):Number(o.deviceReconnectStartedAt||0)}function qd(){return bo()?"Gegevens verversen":"Wachten op gegevens"}function kd(){let e=mw(),t=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return bo()?t>0?`${t}s aan het verversen`:"Net weer online":t>0?`${t}s bezig`:"Net gestart"}function Ns(){if(!o.deviceReconnectMode||bo())return!1;Ps(),o.deviceReconnectRecoveryStartedAt=Date.now(),o.deviceReconnectLastError="",o.entitySyncFailureCount=0;let e=o.deviceReconnectRecoveryStartedAt;return o.deviceReconnectRecoveryTimer=window.setTimeout(()=>{o.deviceReconnectMode&&Number(o.deviceReconnectRecoveryStartedAt||0)===e&&(Ds(),f())},pw),f(),!0}function wo(e="reconnect",t=""){o.deviceReconnectMode||(o.deviceReconnectStartedAt=Date.now()),Ps(),o.deviceReconnectMode=e,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError=t?String(t):o.deviceReconnectLastError,o.systemModal="",Me({updateModalOpen:!1}),o.controlError=""}function Ds(){Ps(),!(!o.deviceReconnectMode&&!o.entitySyncFailureCount)&&(o.deviceReconnectMode="",o.deviceReconnectStartedAt=0,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError="",o.entitySyncFailureCount=0)}function Ed(){return bo()?"OpenQuatt is weer online":o.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":o.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function Td(){return bo()?o.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":o.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":o.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}function Tn(e,t={},r=od){if(t.force===!0)return!0;let n=Number(e||0);return!n||Date.now()-n>=r}function Zt(){return o.appView==="settings"&&o.settingsGroup==="system"}function Cd(){return o.appView==="settings"&&o.settingsGroup==="integrations"}function xd(e=o.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function $d(){let e=o.authStatus||{};o.authDraftUsername=e.enabled?String(e.username||"").trim():"",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword=""}function Ia(e=o.apiSecurityStatus||{}){return[e.enabled?"on":"off",e.transport_active?"active":"idle",e.pending_restart?"pending":"settled",e.key_present?"has-key":"no-key",String(e.key||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function Md(){return o.systemModal==="login"||o.systemModal==="api-security"||Zt()}function Ad(){return o.systemModal==="api-security"||Zt()}async function zo(e={}){if(!Tn(o.lastAuthStatusRefreshAt,e))return!1;o.lastAuthStatusRefreshAt=Date.now();try{let t=await fetch("/auth/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n={enabled:!!r.enabled,setup_window_active:!!r.setup_window_active,username:String(r.username||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=xd(),i=xd(n);return o.authStatus=n,a!==i&&$d(),o.systemModal==="login"&&(o.authError=""),a!==i}catch(t){return o.systemModal==="login"&&(o.authError=`Loginstatus kon niet worden geladen. ${t.message}`),!1}}function Oa(){return o.nativeOpen||o.systemModal!=="login"?!1:(o.authStatus||{}).setup_window_active!==!0}function Xt(){o.loginAuthStatusPollTimer&&(window.clearTimeout(o.loginAuthStatusPollTimer),o.loginAuthStatusPollTimer=null)}function Hd(e=rd){o.loginAuthStatusPollTimer||!Oa()||(o.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(o.loginAuthStatusPollTimer=null,!Oa())return;let t=o.authError;(await zo({force:!0})||o.authError!==t)&&o.systemModal==="login"&&f(),Oa()&&Hd()},Math.max(0,Number(e)||0)))}async function gw(e={}){if(o.systemModal!=="login")return!1;let t=o.authError,r=await zo({force:!0});return(r||o.authError!==t)&&o.systemModal==="login"&&f(),e.poll!==!1&&Oa()&&Hd(),r}async function Uo(e={}){if(!Tn(o.lastApiSecurityStatusRefreshAt,e))return!1;o.lastApiSecurityStatusRefreshAt=Date.now();try{let t=await fetch("/api-security/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n={enabled:!!r.enabled,transport_active:!!r.transport_active,pending_restart:!!r.pending_restart,key_present:!!(r.key_present||r.key),key:String(r.key||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=Ia(),i=Ia(n);return o.apiSecurityStatus=n,o.apiSecurityError="",a!==i&&(o.apiSecurityNotice=""),a!==i}catch(t){return o.apiSecurityError=`API-beveiliging kon niet worden geladen. ${t.message}`,!1}}async function fw(){let e=O.restartAction;if(e){o.busyAction="restartAction",o.controlError="",o.controlNotice="",f();try{let t=await fetch(Q(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);Xt(),o.systemModal="",o.controlNotice="OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",wo("restart")}catch(t){o.controlError=`Herstart mislukt. ${t.message}`}finally{o.busyAction="",f()}}}async function hw(){let e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",f();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",f();try{let t=new URLSearchParams;t.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/enable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await Uo({force:!0}),o.apiSecurityNotice="API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.",o.apiSecurityError="",f()}catch(t){o.apiSecurityError=`Inschakelen is mislukt. ${t.message}`,f()}finally{o.apiSecurityBusy=!1,f()}}async function bw(){let e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",f();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",f();try{let t=new URLSearchParams;t.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/rotate",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await Uo({force:!0}),o.apiSecurityNotice="API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.",o.apiSecurityError="",f()}catch(t){o.apiSecurityError=`Roteren is mislukt. ${t.message}`,f()}finally{o.apiSecurityBusy=!1,f()}}async function ww(){let e=o.apiSecurityStatus||{};if(!e.csrf_token){o.apiSecurityError="API-beveiliging laden nog. Probeer het zo opnieuw.",f();return}if(!e.enabled){o.apiSecurityNotice="API-encryptie staat al uit.",o.apiSecurityError="",f();return}o.apiSecurityBusy=!0,o.apiSecurityNotice="",o.apiSecurityError="",f();try{let t=new URLSearchParams;t.set("csrf_token",e.csrf_token);let r=await fetch("/api-security/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()}),n=await r.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!r.ok||!n.ok)throw new Error(n.error||`HTTP ${r.status}`);await Uo({force:!0}),o.apiSecurityNotice="API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.",o.apiSecurityError="",f()}catch(t){o.apiSecurityError=`Uitzetten is mislukt. ${t.message}`,f()}finally{o.apiSecurityBusy=!1,f()}}async function yw(){let e=String(o.apiSecurityStatus?.key||"").trim();if(!e){o.apiSecurityError="Er is nog geen API-sleutel om te kopi\xEBren.",f();return}try{if(!await ho(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.apiSecurityNotice="API-sleutel gekopieerd.",o.apiSecurityError="",f()}catch(t){o.apiSecurityError=`Kopi\xEBren is mislukt. ${t.message}`,f()}}async function vw(){let e=o.authStatus||{},t=e.enabled===!0,r=e.setup_window_active===!0,n=String(o.authDraftCurrentPassword||""),a=String(o.authDraftUsername||"").trim(),i=String(o.authDraftNewPassword||""),l=String(o.authDraftConfirmPassword||"");if(!a||!i){o.authError="Vul een gebruikersnaam en wachtwoord in.",f();return}if(i!==l){o.authError="De twee wachtwoorden zijn niet gelijk.",f();return}if(t&&!n){o.authError="Vul je huidige wachtwoord in.",f();return}if(!t&&!r){o.authError="Houd de herstelknop 5 seconden vast.",f();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",f();return}o.authBusy=!0,o.authError="",o.authNotice="",f();try{let c=new URLSearchParams;c.set("csrf_token",e.csrf_token),c.set("current_password",n),c.set("new_username",a),c.set("new_password",i);let u=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:c.toString()}),p=await u.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!u.ok||!p.ok)throw new Error(p.error||`HTTP ${u.status}`);await zo({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername=String(o.authStatus?.username||a).trim(),o.authNotice=t?"Login aangepast.":"Login staat nu aan.",o.authError="",f()}catch(c){o.authError=`Opslaan is mislukt. ${c.message}`,f()}finally{o.authBusy=!1,f()}}async function Sw(){let e=o.authStatus||{};if(!e.enabled){o.authNotice="Login staat al uit.",o.authError="",f();return}let t=String(o.authDraftCurrentPassword||"");if(!t){o.authError="Vul je huidige wachtwoord in.",f();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",f();return}o.authBusy=!0,o.authError="",o.authNotice="",f();try{let r=new URLSearchParams;r.set("csrf_token",e.csrf_token),r.set("current_password",t);let n=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:r.toString()}),a=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!a.ok)throw new Error(a.error||`HTTP ${n.status}`);await zo({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername="",o.authNotice="Login staat nu uit.",o.authError="",f()}catch(r){o.authError=`Uitzetten is mislukt. ${r.message}`,f()}finally{o.authBusy=!1,f()}}var qw={"open-login-modal":()=>(o.systemModal="login",$d(),o.authNotice="",o.authError="",f(),gw({poll:!0})),"open-api-security-modal":()=>(o.systemModal="api-security",o.apiSecurityNotice="",o.apiSecurityError="",f(),Uo({force:!0})),"copy-api-security-key":()=>yw(),"enable-api-security":()=>hw(),"rotate-api-security":()=>bw(),"disable-api-security":()=>ww(),"restart-api-security":()=>fw(),"save-web-auth":()=>vw(),"disable-web-auth":()=>Sw()};function Rd(e){return ie(qw,e)}function U(e){let t=o.entities[e];if(!t)return o.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;let r=t.state??t.value??"",n=Array.isArray(t.option)?t.option.join(","):Array.isArray(t.options)?t.options.join(","):"",a=[t.min_value??"",t.max_value??"",t.step??"",t.uom??""].join(",");return`${e}:${r}::${n}::${a}`}function we(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function Cn(){return[o.appView,o.settingsGroup,o.busyAction,o.loadingEntities?"loading":"ready",Ia(),U("setupComplete"),...Ha.map(e=>U(e))].join("|")}function Fa(){return[o.appView,o.busyAction,U("openquattEnabled"),U("openquattResumeAt"),U("manualCoolingEnable"),U("coolingEnableSource"),U("coolingEnableSelected"),U("coolingEnableEffectiveSource"),U("silentModeOverride"),U("controlModeLabel"),U("coolingPermitted"),U("coolingRequestActive"),U("coolingBlockReason"),U("silentActive")].join("|")}var ja="",Ls=null,kw=["id","data-oq-action","data-oq-field","data-group-id","data-view-id","aria-label"];function Ew(e){if(!e||e===document.body||typeof e.getAttribute!="function")return null;let t=kw.map(r=>[r,e.getAttribute(r)]).filter(([,r])=>r);return t.length?{tagName:e.tagName,attributes:t}:null}function Tw(e,t){return!e||!t?null:Array.from(e.querySelectorAll(t.tagName.toLowerCase())).find(r=>t.attributes.every(([n,a])=>r.getAttribute(n)===a))||null}function te({id:e="",modalId:t,titleId:r,kicker:n,title:a,copy:i="",body:l="",bodyMarkup:c="",actions:u="",backdropClass:p="",className:g="",modalClass:w="",role:y="dialog",ariaModal:h=y==="dialog",ariaLive:m="",sectionAttributes:d="",closeAction:b="",closeLabel:S="",headerMarkup:q="",copyInHeader:E=!1}){let k=t||e,$=w||g,_=c||l;!ja&&typeof document<"u"&&!document.querySelector('[role="dialog"][aria-modal="true"]')&&(Ls=Ew(document.activeElement));let P=`oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}${p?` ${p}`:""}`,B=`oq-helper-modal${$?` ${$}`:""}`,H=b?`<button class="oq-helper-modal-close" type="button" data-oq-action="${s(b)}" aria-label="${s(S)}">\xD7</button>`:"",F=[`role="${s(y)}"`,h?'aria-modal="true"':"",m?`aria-live="${s(m)}"`:"",`aria-labelledby="${s(r)}"`,d,'tabindex="-1"'].filter(Boolean).join(" ");return`
    <div class="${P}" data-oq-modal="${s(k)}" data-oq-modal-scroll="backdrop">
      <section class="${B}" ${F} data-oq-modal-scroll="dialog">
        ${q||`<div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">${s(n)}</p>
            <h2 class="oq-helper-modal-title" id="${s(r)}">${s(a)}</h2>
            ${i&&E?`<p class="oq-helper-modal-copy">${s(i)}</p>`:""}
          </div>
          ${H}
        </div>`}
        ${i&&!E?`<p class="oq-helper-modal-copy">${s(i)}</p>`:""}
        ${_}
        ${u?`<div class="oq-helper-modal-actions">${u}</div>`:""}
      </section>
    </div>
  `}function Os(e){if(!e||typeof document>"u")return;let t=e.querySelector('[role="dialog"][aria-modal="true"]');if(t){ja=t.closest("[data-oq-modal]")?.dataset.oqModal||"dialog",t.contains(document.activeElement)||(t.querySelector(".oq-helper-modal-close, button, input, select, textarea, a[href]")||t).focus({preventScroll:!0});return}ja&&Tw(e,Ls)?.focus({preventScroll:!0}),ja="",Ls=null}var Is=0;function Nd(e){let t=e?.querySelector('[role="dialog"][aria-modal="true"]');return t?{modalId:String(e.dataset?.oqModal||""),titleId:String(t.getAttribute("aria-labelledby")||"")}:null}function _d(e,t){return!e||!t?null:Array.from(e.querySelectorAll("[data-oq-modal]")).find(r=>{let n=Nd(r);return n&&n.modalId===t.modalId&&n.titleId===t.titleId})||null}function Cw(e,t){if(!e||!t?.contains(e)||typeof e.getAttribute!="function")return null;let r=Array.from(e.attributes||[]).filter(({name:l,value:c})=>(c||l.startsWith("data-oq-"))&&(l==="id"||l==="name"||l==="aria-label"||l.startsWith("data-oq-"))).map(({name:l,value:c})=>[l,c]);if(!r.length)return null;let n=String(e.tagName||"").toLowerCase(),i=Array.from(t.querySelectorAll(n)).filter(l=>r.every(([c,u])=>l.getAttribute(c)===u)).indexOf(e);return i<0?null:{tagName:n,attributes:r,index:i}}function Pd(e,t){return!e||!t?null:Array.from(e.querySelectorAll(t.tagName)).filter(n=>t.attributes.every(([a,i])=>n.getAttribute(a)===i))[t.index]||null}function xw(e,t){if(!e||!t?.contains(e)||typeof e.getBoundingClientRect!="function")return null;let r=e.getBoundingClientRect(),n=Number(r?.top);return Number.isFinite(n)?{top:n}:null}function $w(e){return[e,...e.querySelectorAll("[data-oq-modal-scroll]")].map(t=>({key:String(t.dataset?.oqModalScroll||"backdrop"),left:Number(t.scrollLeft||0),top:Number(t.scrollTop||0)}))}function Mw(e,t){if(!e)return;let r=[e,...e.querySelectorAll("[data-oq-modal-scroll]")];t.forEach(n=>{let a=r.find(i=>String(i.dataset?.oqModalScroll||"backdrop")===n.key);a&&(a.scrollLeft=n.left,a.scrollTop=n.top)})}function Aw(e,t,r){if(!e||!t||!r||typeof t.getBoundingClientRect!="function")return;let n=Number(t.getBoundingClientRect()?.top);if(!Number.isFinite(n))return;let a=n-r.top;if(Math.abs(a)<.5)return;let i=[e,...e.querySelectorAll("[data-oq-modal-scroll]")].reverse().find(l=>l.contains(t)&&Number(l.scrollHeight)>Number(l.clientHeight));i&&(i.scrollTop+=a)}function Dd(e){if(!e||typeof document>"u")return null;let n=((typeof document.activeElement?.closest=="function"?document.activeElement.closest("[data-oq-modal]"):null)?.querySelector('[role="dialog"][aria-modal="true"]')||e.querySelector('[role="dialog"][aria-modal="true"]'))?.closest("[data-oq-modal]"),a=Nd(n);return!n||!a?null:{identity:a,focus:Cw(document.activeElement,n),focusAnchor:xw(document.activeElement,n),scrollPositions:$w(n)}}function Fs(e,t){let r=Is+1;if(Is=r,!e||!t)return;let n=()=>{if(Is!==r)return;let l=_d(e,t.identity);Mw(l,t.scrollPositions);let c=Pd(l,t.focus);Aw(l,c,t.focusAnchor)},a=_d(e,t.identity);n();let i=Pd(a,t.focus);i&&!i.disabled&&(i.focus({preventScroll:!0}),n()),window.requestAnimationFrame(n)}function xn(){o.root&&(o.root.style.removeProperty("--oq-flow-offset"),o.root.style.removeProperty("--oq-flow-offset-reverse"),o.root.style.removeProperty("--oq-fan-rotation"),o.root.getAttribute("style")||o.root.removeAttribute("style"))}function Ld(){return o.motionTargets={pipeFlows:[],fanBlades:[]},o.root?(o.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(n=>{n.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{o.motionTargets.fanBlades.push(a)})}),o.motionTargets.pipeFlows.length+o.motionTargets.fanBlades.length):0}function Hw(){return o.motionTargets.pipeFlows.length>0||o.motionTargets.fanBlades.length>0}function Od(e=performance.now()){if(!o.root||o.reducedMotion||!Hw()&&Ld()===0)return!1;o.motionStartedAt||(o.motionStartedAt=e);let t=(e-o.motionStartedAt)/1e3,r=t*id%360;return o.motionTargets.pipeFlows.forEach(n=>{let a=n.dataset.oqFlowVariant==="water"?.42:1,i=-(t*ad*a);n.style.strokeDashoffset=`${i.toFixed(3)}px`}),o.motionTargets.fanBlades.forEach(n=>{n.style.transform=`rotate(${r.toFixed(3)}deg)`}),!0}function Id(e){if(!Od(e)){o.motionFrame=0,o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(Id)}function Go(){if(o.reducedMotion||Ld()===0||o.motionFrame)return;let e=performance.now();if(o.motionStartedAt=e,!Od(e)){o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(Id)}function $n(){o.motionFrame&&(window.cancelAnimationFrame(o.motionFrame),o.motionFrame=0),o.motionStartedAt=0,xn()}var Fd=null,jd=null;function Wd({start:e,stop:t}={}){Fd=typeof e=="function"?e:null,jd=typeof t=="function"?t:null}function js(){Fd?.()}function Vd(){jd?.()}var Ke={};function Bd(e={}){Object.keys(Ke).forEach(t=>{delete Ke[t]}),Object.assign(Ke,e)}function Kd(e){Ke.handleChange?.(e)}function zd(e){Ke.handleClick?.(e)}function Ws(e){Ke.handleFocusChange?.(e)}function Ud(e){Ke.handleInput?.(e)}function Gd(e){Ke.handleKeyDown?.(e)}function Qd(e){Ke.handlePointerDown?.(e)}function Yd(e){Ke.handlePointerMove?.(e)}function Jd(e){Ke.handlePointerUp?.(e)}function Zd(e){Ke.handleSettingsInteractionEnd?.(e)}function Xd(e){Ke.handleSettingsInteractionStart?.(e)}function ep(e){Ke.handleWheel?.(e)}function yo(){return"overview"}function Mn(e){return e==="trends"&&(e="diagnosis"),!Ku.has(e)||e==="diagnosis"&&!yt()?"":e}function Pr(e){return String(e||"").trim().toLowerCase()}function Vs(e){let t=Pr(e);return{actueel:"status",current:"status",status:"status",situatie:"status",tijdlijn:"timeline",timeline:"timeline",log:"timeline",grafiek:"graphs",grafieken:"graphs",graphs:"graphs",graph:"graphs"}[t]||""}function Rw(e=o.controlReplayTab){let t={status:"current",timeline:"timeline",graphs:"graphs"};return t[e]||t.status}function Bs(e){let t=Pr(e);return{"1h":"last1",last1:"last1","2h":"last2",last2:"last2","4h":"last4",last4:"last4","8h":"last8",last8:"last8","12h":"last12",last12:"last12","24h":"last24",last24:"last24","48h":"last48",last48:"last48","3d":"last3d",last3d:"last3d","7d":"week",week:"week",today:"today",yesterday:"yesterday",custom:"custom"}[t]||""}function _w(e=o.controlReplayWindow){let t={last1:"1h",last2:"2h",last4:"4h",last8:"8h",last12:"12h",last24:"24h",last48:"48h",last3d:"3d",today:"today",yesterday:"yesterday",week:"7d",custom:"custom"};return t[e]||t.last24}function An(){try{let e=new URL(window.location.href),t=Pr(e.searchParams.get("view")||""),r=Mn(t);if(r)return r;let n=Pr(e.hash.replace(/^#/,""));return Mn(n)||""}catch{return""}}function Ks(){try{let e=new URL(window.location.href);return Vs(e.searchParams.get("controlTab")||e.searchParams.get("controlView")||"")}catch{return""}}function zs(){try{let e=new URL(window.location.href);return Bs(e.searchParams.get("controlPeriod")||"")}catch{return""}}function Us(){try{let e=new URL(window.location.href);return{start:String(e.searchParams.get("controlStart")||""),end:String(e.searchParams.get("controlEnd")||"")}}catch{return{start:"",end:""}}}function Gs(){try{let e=new URL(window.location.href),t=Pr(e.searchParams.get("section")||"");if(Le.has(t))return t;let r=Pr(e.searchParams.get("group")||"");return Le.has(r)?r:""}catch{return""}}function Qo(e="replace"){try{let t=new URL(window.location.href),r=Mn(o.appView)||yo();if(t.searchParams.set("view",r),r==="settings"){let a=Le.has(o.settingsGroup)?o.settingsGroup:fe[0].id;t.searchParams.set("section",a),t.searchParams.delete("group")}else t.searchParams.delete("section"),t.searchParams.delete("group");r==="control"?(t.searchParams.set("controlTab",Rw()),t.searchParams.set("controlPeriod",_w()),o.controlReplayWindow==="custom"&&o.controlReplayCustomStart&&o.controlReplayCustomEnd?(t.searchParams.set("controlStart",o.controlReplayCustomStart),t.searchParams.set("controlEnd",o.controlReplayCustomEnd)):(t.searchParams.delete("controlStart"),t.searchParams.delete("controlEnd")),t.searchParams.delete("controlView")):(t.searchParams.delete("controlTab"),t.searchParams.delete("controlPeriod"),t.searchParams.delete("controlStart"),t.searchParams.delete("controlEnd"),t.searchParams.delete("controlView")),t.hash&&Mn(t.hash.replace(/^#/,""))&&(t.hash="");let n=e==="push"?"pushState":"replaceState";window.history[n]({oqView:r,oqSettingsSection:r==="settings"?o.settingsGroup:"",oqControlTab:r==="control"?o.controlReplayTab:"",oqControlPeriod:r==="control"?o.controlReplayWindow:""},"",t.toString())}catch{}}function Pt(e,t={}){let r=Mn(e)||yo(),n=t.syncMode||"replace",a=o.appView!==r;o.appView=r,(a||t.forceSync)&&Qo(n)}function Wa(e=Date.now()){return Number(o.firmwareOtaQuietUntil||0)>e}var Pw=new Set(["compressor oil return"]);function vo(e){let t=String(e||"").trim();return!t||t==="None"?"Geen actieve storingen":t}function Nw(e){let t=vo(e);return t==="Geen actieve storingen"?[]:t.split(",").map(r=>r.trim()).filter(r=>r&&!Pw.has(r.toLowerCase()))}function Va(e){let t=Nw(e);return t.length>0?t.join(", "):"Geen actieve storingen"}function X(e){return v(e)&&C(e)}function Nt(e){return!v(e)||C(e)}function Ys(e){return v(e)?vo(j(e,"None")):""}function Qs(e){return v(e)?Va(j(e,"None")):""}function Hn(e){let t=Qs(e).trim().toLowerCase();return!!t&&t!=="geen actieve storingen"}function eo(){let e=[],t=X("compressorCyclingWarning2h")||X("compressorCyclingWarning72h")||X("alternatingCompressorStartsWarning"),r=X("compressorCyclingAlertLatched"),n=Nt("cicPollingEnabled"),a=Nt("otEnabled"),i=(c,u)=>{X(c)&&e.push({key:c,label:u})};i("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),i("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),i("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),i("lowflowFaultActive","Te lage flow"),i("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),n&&i("cicDataStale","CIC-data is verouderd"),a&&i("otLinkProblem","OpenTherm-verbinding meldt een probleem"),Hn("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${Qs("hp1Failures")}`}),Hn("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${Qs("hp2Failures")}`});let l=e.length;return r&&!t&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"}),{problems:e,active:e.length>0,cyclingAlertLatched:r,cyclingAlertActive:t,cyclingAlertRecovered:r&&!t,title:l>0?"Aandacht nodig":r?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:l>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:r?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."}}function Rn(e){let t=e.active?e.problems.map(r=>r.key).sort().join("|"):"";if(!t){o.installationMonitoringProblemSignature="";return}t!==o.installationMonitoringProblemSignature&&(o.installationMonitoringProblemSignature=t,o.installationMonitoringDetailsOpen=!0)}var Js=null,Zs=null;function tp({getSignature:e,patch:t}={}){Js=typeof e=="function"?e:null,Zs=typeof t=="function"?t:null}function op(){return Js?Js():""}function Xs(){return Zs?Zs():!1}var el=null;function rp({patch:e}={}){el=typeof e=="function"?e:null}function np(){return el?el():!1}var Nr=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","decisionLogHistoryEnabled","decisionLogHistoryFlush","decisionLogHistoryClear","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"],tl=["trendHistoryEnabled","trendHistoryFlashEnabled"];var ol=["lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"];function to(){return[...new Set(Nr)]}var vt={};function ap(e={}){vt={refreshEnergyHistoryData:typeof e.refreshEnergyHistoryData=="function"?e.refreshEnergyHistoryData:null,refreshSettingsStorageState:typeof e.refreshSettingsStorageState=="function"?e.refreshSettingsStorageState:null,refreshTrendHistoryData:typeof e.refreshTrendHistoryData=="function"?e.refreshTrendHistoryData:null,refreshTrendHistoryMetadata:typeof e.refreshTrendHistoryMetadata=="function"?e.refreshTrendHistoryMetadata:null,shouldRefreshSettingsStorageForCurrentSurface:typeof e.shouldRefreshSettingsStorageForCurrentSurface=="function"?e.shouldRefreshSettingsStorageForCurrentSurface:null}}function rl(){return vt.shouldRefreshSettingsStorageForCurrentSurface?vt.shouldRefreshSettingsStorageForCurrentSurface():!1}async function ip(e={}){return vt.refreshTrendHistoryMetadata?vt.refreshTrendHistoryMetadata(e):!1}async function sp(e={}){return vt.refreshSettingsStorageState?vt.refreshSettingsStorageState(e):!1}async function nl(e={}){return vt.refreshTrendHistoryData?vt.refreshTrendHistoryData(e):!1}async function Ba(e={}){return vt.refreshEnergyHistoryData?vt.refreshEnergyHistoryData(e):!1}var St={};function So(e={}){Object.entries(e).forEach(([t,r])=>{typeof r=="function"&&(St[t]=r)})}function lp(){return St.patchEnergyDom?St.patchEnergyDom():!1}function cp(){return St.patchResultsDom?St.patchResultsDom():!1}function up(){return St.patchOverviewDom?St.patchOverviewDom():!1}function al(){return St.patchControlReplayDom?St.patchControlReplayDom():!1}function dp(){return St.patchDiagnosisDom?St.patchDiagnosisDom():!1}var Yo={};function pp(e={}){Yo={clearOutput:typeof e.clearOutput=="function"?e.clearOutput:null,closeStream:typeof e.closeStream=="function"?e.closeStream:null,resetRecoveryState:typeof e.resetRecoveryState=="function"?e.resetRecoveryState:null}}function il(){if(Yo.closeStream)return Yo.closeStream();let e=o.webServerLogSource;e&&e.close(),Qe({webServerLogSource:null,webServerLogConnected:!1})}function sl(){if(Yo.clearOutput)return Yo.clearOutput();Qe({webServerLogEntries:[],webServerLogError:"",webServerLogRaw:"",webServerLogNotice:""})}function ll(){if(Yo.resetRecoveryState)return Yo.resetRecoveryState();il(),Qe({webServerLogEnabled:null,webServerLogConnected:!1}),sl()}function mp(){let e=o.mqttStatus;return e?e.enabled&&e.connected?"Verbonden":e.enabled?"Ingeschakeld":e.broker?"Uit":"Niet ingesteld":"Laden..."}function gp(){let e=o.mqttStatus;if(!e)return"MQTT-status wordt geladen.";let t=String(e.broker||"").trim(),r=Number(e.port||1883),n=t?`${t}:${r}`:"geen broker";return e.enabled&&e.connected?`Verbonden met ${n}.`:e.enabled?t?`MQTT staat aan; verbinding met ${n} is nog niet bevestigd.`:"MQTT staat aan, maar er is nog geen broker ingesteld.":t?`Broker ${n} is opgeslagen, maar MQTT inputbronnen staan uit.`:"MQTT inputbronnen staan uit. Stel een broker in om externe bronwaarden te ontvangen."}function Dw(e,t=2){let r=R(e);return Number.isFinite(r)?`
      <span class="oq-settings-mqtt-sensor-value-number">${s(r.toFixed(t))}</span>
      <span class="oq-settings-mqtt-sensor-value-unit">\xB0C</span>
    `:'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>'}function Lw(e){if(!v(e.valueKey)||!C(e.validKey))return'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>';let t=e.activeLabel||"Toegestaan",r=e.inactiveLabel||"Geblokkeerd";return`<span class="oq-settings-mqtt-sensor-value-boolean">${s(C(e.valueKey)?t:r)}</span>`}function Ow(e){return e.kind==="binary"?Lw(e):Dw(e.valueKey)}function Iw(e){let t=R(e);return Number.isFinite(t)?t<60?`${Math.round(t)} s`:t<3600?`${Math.round(t/60)} min`:`${Math.round(t/3600)} u`:"\u2014"}function cl(e){return v(e)?C(e)?"Geldig":"Ontbreekt of verouderd":"Nog geen status"}function ul(e){let t=o.mqttStatus?.input_topics;if(t&&typeof t=="object"){let r=String(t[e]||"").trim();if(r)return r}return e==="cooling_dew_point"?String(o.mqttStatus?.dew_point_topic||"").trim():""}function Ka(e){let t=o.mqttStatus?.input_enabled;return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,e)?t[e]!==!1:!0}function Fw(e){let t=o.mqttStatus?.input_retained;return!!(t&&typeof t=="object"&&t[e])}function dl(e){let t=o.mqttStatus?.input_accept_retained;return!!(t&&typeof t=="object"&&t[e])}function fp(){return[{topicKey:"cooling_dew_point",label:"Dauwpunt",valueKey:"mqttCoolingDewPoint",ageKey:"mqttCoolingDewPointAge",validKey:"mqttCoolingDewPointValid",staleCopy:"15 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 16.2, 16,2, 16.2 \xB0C of {"value":16.2}. Geldig bereik: -20..35 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"outside_temperature",label:"Buitentemperatuur",valueKey:"mqttOutsideTemperature",ageKey:"mqttOutsideTemperatureAge",validKey:"mqttOutsideTemperatureValid",staleCopy:"30 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 15.0, 15,0, 15.0 \xB0C of {"value":15.0}. Geldig bereik: -40..60 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_temperature",label:"Kamertemperatuur",valueKey:"mqttRoomTemperature",ageKey:"mqttRoomTemperatureAge",validKey:"mqttRoomTemperatureValid",staleCopy:"10 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 21.1, 21,1, 21.1 \xB0C of {"value":21.1}. Geldig bereik: 0..50 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_setpoint",label:"Kamer setpoint",valueKey:"mqttRoomSetpoint",ageKey:"mqttRoomSetpointAge",validKey:"mqttRoomSetpointValid",staleCopy:"nieuw bericht",stateful:!0,payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een setpoint in \xB0C. Voorbeelden: 21.0, 21,0, 21.0 \xB0C of {"value":21.0}. Geldig bereik: 5..35 \xB0C.'},{topicKey:"heating_enable",label:"Warmtetoestemming",valueKey:"mqttHeatingEnable",ageKey:"mqttHeatingEnableAge",validKey:"mqttHeatingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer warmtetoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}.'},{topicKey:"cooling_enable",label:"Koeltoestemming",valueKey:"mqttCoolingEnable",ageKey:"mqttCoolingEnableAge",validKey:"mqttCoolingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer koeltoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}.'}]}function pl(e=fp()){if(!e.length)return"Geen sensoren";let t=e.filter(i=>Ka(i.topicKey)),r=e.length-t.length;if(!t.length)return`${r} ${r===1?"topic":"topics"} uitgeschakeld`;let n=t.filter(i=>C(i.validKey)).length,a=n===t.length?`${n} ${n===1?"sensor":"sensoren"} geldig`:`${n} van ${t.length} sensoren geldig`;return r?`${a} \xB7 ${r} uit`:a}function hp(){let e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,r=!!o.mqttDraftClearPassword,n=e.password_set?"Leeg laten om huidig wachtwoord te behouden":"Optioneel",a=o.mqttNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(o.mqttNotice)}</span></div>`:"",i=o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:"";return te({id:"system",titleId:"oq-mqtt-modal-title",kicker:"Integratie",title:"MQTT brokerconfiguratie",copy:"Stel de broker in waarop OpenQuatt MQTT-inputs beluistert.",closeAction:"close-system-modal",closeLabel:"Sluit MQTT brokerconfiguratie",body:`
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
          </div>`,actions:`
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.mqttBusy?"disabled":""}>Gereed</button>
        <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-mqtt-config" ${o.mqttBusy||!e.csrf_token?"disabled":""}>${o.mqttBusy?"Opslaan...":"Opslaan"}</button>
      `})}function bp(){let e=fp(),t=Math.max(1,Math.round(Number(o.mqttStatus?.non_retained_stateful_timeout_s||1800)/60)),r=e.some(l=>l.topicKey===o.mqttExpandedTopicKey)?o.mqttExpandedTopicKey:"",n=pl(e),a=e.map(l=>{let c=ul(l.topicKey),u=c||"Wordt geladen...",p=Iw(l.ageKey),g=Ka(l.topicKey),w=C(l.validKey),y=g&&w&&Fw(l.topicKey),h=l.stateful&&dl(l.topicKey),m=o.mqttCopiedTopicKey===l.topicKey,d=r===l.topicKey,b=o.mqttInputToggleBusyKey===l.topicKey||o.mqttRetainedToggleBusyKey===l.topicKey,S=g?w?"valid":"invalid":"disabled",q=g?w?"geldig":"ongeldig":"uit",E=g?cl(l.validKey):"Uitgeschakeld",k=g?w?l.stateful?h?`Laatste MQTT-publicatie ${p==="\u2014"?"onbekend":`${p} geleden`}. De waarde blijft geldig tot een nieuwe payload, uitschakelen of herstart.`:`Laatste live MQTT-publicatie ${p==="\u2014"?"onbekend":`${p} geleden`}. De waarde blijft maximaal ${t} minuten geldig en vervalt bij een MQTT-disconnect.`:`Laatste MQTT-publicatie ${p==="\u2014"?"onbekend":`${p} geleden`}. Zonder nieuwe MQTT-publicatie wordt de waarde na ${l.staleCopy} ongeldig.`:p==="\u2014"?"Nog geen geldige MQTT-publicatie ontvangen.":`Laatste MQTT-publicatie ${p} geleden; de waarde is niet meer geldig.`:"Dit topic wordt niet gebruikt. OpenQuatt subscribed er niet op.",$=g?"Topic uitschakelen":"Topic gebruiken",_="Retained MQTT-waarde: ontvangen bij verbinden met de broker.",P=h?"Brokerwaarde wordt na reconnect of herstart opnieuw gebruikt.":`Alleen live waarden; maximaal ${t} minuten geldig en direct ongeldig bij disconnect.`,B=l.stateful?`${l.payloadInfo} ${h?"Retained berichten worden geaccepteerd.":`Retained berichten worden genegeerd; live waarden verlopen na ${t} minuten.`}`:l.payloadInfo;return`
        <article class="oq-settings-mqtt-sensor-row${d?" is-open":""}${g?"":" is-disabled"}">
          <div
            class="oq-settings-mqtt-sensor-summary"
            data-oq-action="toggle-mqtt-sensor-topic"
            data-oq-mqtt-topic-key="${s(l.topicKey)}"
            aria-expanded="${d?"true":"false"}"
          >
            <span class="oq-settings-mqtt-sensor-name">${s(l.label)}</span>
            <span class="oq-settings-mqtt-sensor-value">
              ${g?Ow(l):'<span class="oq-settings-mqtt-sensor-value-missing">\u2014</span>'}
            </span>
            <span class="oq-settings-mqtt-sensor-status-cell">
              <em
                class="oq-settings-mqtt-sensor-status oq-settings-mqtt-sensor-status--${S}"
                title="${s(k)}"
                aria-label="${s(E)}: ${s(k)}"
              >${s(q)}</em>
              ${y?`<span class="oq-settings-mqtt-sensor-retained" title="${s(_)}" aria-label="${s(_)}">R</span>`:""}
            </span>
            <button
              class="oq-settings-toggle-switch oq-settings-mqtt-sensor-inline-toggle${g?" is-on":""}"
              type="button"
              data-oq-action="toggle-mqtt-input"
              data-oq-mqtt-topic-key="${s(l.topicKey)}"
              aria-pressed="${g?"true":"false"}"
              aria-label="${s(`${l.label}: ${$}`)}"
              title="${s($)}"
              ${b||!o.mqttStatus?.csrf_token?"disabled":""}
            >
              <span class="oq-settings-toggle-switch-track"><span class="oq-settings-toggle-switch-knob"></span></span>
            </button>
            <span class="oq-settings-mqtt-sensor-chevron" aria-hidden="true"></span>
          </div>
          ${d?`
            <div class="oq-settings-mqtt-sensor-topic">
              ${l.stateful?`
                <div class="oq-settings-mqtt-retained-setting">
                  <span class="oq-settings-mqtt-retained-setting-copy">
                    <strong>Retained waarde gebruiken</strong>
                    <small>${s(P)}</small>
                  </span>
                  <button
                    class="oq-settings-toggle-switch oq-settings-mqtt-retained-toggle${h?" is-on":""}"
                    type="button"
                    data-oq-action="toggle-mqtt-retained"
                    data-oq-mqtt-topic-key="${s(l.topicKey)}"
                    aria-pressed="${h?"true":"false"}"
                    aria-label="${s(`${l.label}: retained waarde ${h?"uitschakelen":"gebruiken"}`)}"
                    title="${h?"Retained waarde negeren":"Retained waarde gebruiken"}"
                    ${b||!o.mqttStatus?.csrf_token?"disabled":""}
                  >
                    <span class="oq-settings-toggle-switch-track"><span class="oq-settings-toggle-switch-knob"></span></span>
                  </button>
                </div>
              `:""}
              <div class="oq-settings-mqtt-sensor-topic-head">
                <span class="oq-settings-mqtt-sensor-topic-label">Subscribe-topic</span>
              </div>
              <div class="oq-settings-mqtt-topic-row">
                <div class="oq-settings-mqtt-topic-field${m?" is-copied":""}">
                  <code>${s(u)}</code>
                  <button
                    class="oq-settings-mqtt-topic-copy"
                    type="button"
                    data-oq-action="copy-mqtt-topic"
                    data-oq-mqtt-topic-key="${s(l.topicKey)}"
                    aria-label="${s(m?`MQTT-topic voor ${l.label} gekopieerd`:`Kopieer MQTT-topic voor ${l.label}`)}"
                    title="${m?"Gekopieerd":"Kopieer topic"}"
                    ${c?"":"disabled"}
                  >
                    ${de(m?"clipboard-check":"clipboard","oq-settings-mqtt-topic-copy-icon")}
                  </button>
                </div>
                <details class="oq-settings-mqtt-topic-info">
                  <summary aria-label="${s(`Payloadinformatie voor ${l.label}`)}">i</summary>
                  <div class="oq-settings-mqtt-topic-info-popover">
                    <strong>${s(l.payloadInfoTitle||"Payload")}</strong>
                    <p>${s(B||"")}</p>
                  </div>
                </details>
              </div>
            </div>
          `:""}
        </article>
      `}).join(""),i=o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:"";return te({id:"system",titleId:"oq-mqtt-sensors-modal-title",kicker:"Integratie",title:"MQTT sensoren",className:"oq-helper-modal--mqtt-sensors",headerMarkup:`<div class="oq-settings-mqtt-modal-head">
            <span class="oq-settings-mqtt-modal-icon">${jw("oq-settings-mqtt-modal-logo")}</span>
            <div>
              <p class="oq-helper-modal-kicker">Integratie</p>
              <h2 class="oq-helper-modal-title" id="oq-mqtt-sensors-modal-title">MQTT sensoren</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit MQTT sensoren">\xD7</button>
          </div>`,body:`
          ${i}
          <div class="oq-settings-mqtt-sensor-table">
            <div class="oq-settings-mqtt-sensor-table-head" aria-hidden="true">
              <span>Sensor</span>
              <span>Waarde</span>
              <span>Status</span>
              <span></span>
              <span></span>
            </div>
            ${a}
          </div>
          <div class="oq-settings-mqtt-sensor-footer">
            <span>${s(n)}</span>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>`})}function jw(e=""){return`
      <svg${e?` class="${s(e)}"`:""} viewBox="0 0 320 320" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.1,180.6v117.1c0,8.4,6.8,15.3,15.3,15.3H142C141,239.8,80.9,180.7,7.1,180.6z"/>
        <path d="M7.1,84.1v49.8c99,0.9,179.4,80.7,180.4,179.1h51.7C238.2,186.6,134.5,84.2,7.1,84.1z"/>
        <path d="M312.9,297.6V193.5C278.1,107.2,207.3,38.9,119,7.1H22.4c-8.4,0-15.3,6.8-15.3,15.3v15c152.6,0.9,276.6,124,277.6,275.6h13C306.1,312.9,312.9,306.1,312.9,297.6z"/>
        <path d="M272.6,49.8c14.5,14.4,28.6,31.7,40.4,47.8V22.4c0-8.4-6.8-15.3-15.3-15.3h-77.3C238.4,19.7,256.6,33.9,272.6,49.8z"/>
      </svg>
    `}function ml(e=o.mqttStatus||{}){let t=e.input_topics&&typeof e.input_topics=="object"?e.input_topics:{},r=e.input_enabled&&typeof e.input_enabled=="object"?e.input_enabled:{},n=e.input_retained&&typeof e.input_retained=="object"?e.input_retained:{},a=e.input_accept_retained&&typeof e.input_accept_retained=="object"?e.input_accept_retained:{};return[e.enabled?"on":"off",e.connected?"connected":"idle",String(e.broker||""),String(e.port||""),String(e.username||""),e.password_set?"password":"nopassword",String(e.dew_point_topic||""),JSON.stringify(t),JSON.stringify(r),JSON.stringify(n),JSON.stringify(a),String(e.non_retained_stateful_timeout_s||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function za(){return[o.systemModal,o.mqttExpandedTopicKey||"",o.mqttCopiedTopicKey||"",o.mqttInputToggleBusyKey||"",o.mqttRetainedToggleBusyKey||"",o.mqttError||"",ml(),U("mqttCoolingDewPoint"),U("mqttCoolingDewPointAge"),U("mqttCoolingDewPointValid"),U("mqttOutsideTemperature"),U("mqttOutsideTemperatureAge"),U("mqttOutsideTemperatureValid"),U("mqttRoomTemperature"),U("mqttRoomTemperatureAge"),U("mqttRoomTemperatureValid"),U("mqttRoomSetpoint"),U("mqttRoomSetpointAge"),U("mqttRoomSetpointValid"),U("mqttHeatingEnable"),U("mqttHeatingEnableAge"),U("mqttHeatingEnableValid"),U("mqttCoolingEnable"),U("mqttCoolingEnableAge"),U("mqttCoolingEnableValid")].join("|")}function yp(){let e=o.mqttStatus||{};_r({mqttDraftEnabled:e.enabled===!0,mqttDraftBroker:String(e.broker||""),mqttDraftPort:String(e.port||1883),mqttDraftUsername:String(e.username||""),mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1})}function vp(e){let t=e?.dataset?.oqMqttField;if(!t)return!1;if(_r({mqttNotice:"",mqttError:"",mqttDraftDirty:!0}),t==="enabled")o.mqttDraftEnabled=!!e.checked;else if(t==="broker")o.mqttDraftBroker=String(e.value||"");else if(t==="port")o.mqttDraftPort=String(e.value||"");else if(t==="username")o.mqttDraftUsername=String(e.value||"");else if(t==="password")o.mqttDraftPassword=String(e.value||"");else if(t==="clear-password"){o.mqttDraftClearPassword=!!e.checked,o.mqttDraftClearPassword&&(o.mqttDraftPassword="");let r=e.closest(".oq-helper-modal")?.querySelector('[data-oq-mqtt-field="password"]');r&&(r.value=o.mqttDraftPassword,r.disabled=o.mqttBusy||o.mqttDraftClearPassword)}return e.closest(".oq-helper-modal")?.querySelectorAll(".oq-helper-modal-success, .oq-helper-modal-note--error").forEach(r=>{r.remove()}),!0}function Sp(){return o.systemModal==="mqtt"||o.systemModal==="mqtt-sensors"||Cd()}async function Jo(e={}){if(!Tn(o.lastMqttStatusRefreshAt,e))return!1;o.lastMqttStatusRefreshAt=Date.now();try{let t=await fetch("/mqtt/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n=r.input_topics&&typeof r.input_topics=="object"?r.input_topics:{},a={};Object.entries(n).forEach(([d,b])=>{a[String(d)]=String(b||"")});let i=r.input_enabled&&typeof r.input_enabled=="object"?r.input_enabled:{},l={};Object.entries(i).forEach(([d,b])=>{l[String(d)]=b!==!1&&String(b).toLowerCase()!=="false"});let c=r.input_retained&&typeof r.input_retained=="object"?r.input_retained:{},u={};Object.entries(c).forEach(([d,b])=>{u[String(d)]=b===!0||String(b).toLowerCase()==="true"});let p=r.input_accept_retained&&typeof r.input_accept_retained=="object"?r.input_accept_retained:{},g={cooling_dew_point:!1,outside_temperature:!1,room_temperature:!1,room_setpoint:!0,heating_enable:!0,cooling_enable:!0};Object.entries(p).forEach(([d,b])=>{g[String(d)]=b===!0||String(b).toLowerCase()==="true"});let w=String(a.cooling_dew_point||r.dew_point_topic||"");a.cooling_dew_point=w;let y={enabled:!!r.enabled,connected:!!r.connected,broker:String(r.broker||""),port:Number(r.port||1883),username:String(r.username||""),password_set:!!r.password_set,dew_point_topic:w,input_topics:a,input_enabled:l,input_retained:u,input_accept_retained:g,non_retained_stateful_timeout_s:Number(r.non_retained_stateful_timeout_s||1800),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},h=ml(),m=ml(y);return o.mqttStatus=y,h!==m&&(o.systemModal==="mqtt"&&o.mqttDraftDirty||yp(),o.mqttNotice=""),o.mqttError="",h!==m}catch(t){return o.mqttError=`MQTT-status kon niet worden geladen. ${t.message}`,!1}}async function wp(e="cooling_dew_point"){let t=ul(e);if(!t){o.mqttError="MQTT-topic is nog niet geladen.",o.mqttCopiedTopicKey="",f();return}try{let r=await ho(t);o.mqttNotice="",o.mqttError=r?"":"Kopi\xEBren is niet gelukt.",o.mqttCopiedTopicKey=r?e:"",o.mqttCopiedTopicTimer&&window.clearTimeout(o.mqttCopiedTopicTimer),r&&(o.mqttCopiedTopicTimer=window.setTimeout(()=>{o.mqttCopiedTopicKey="",o.mqttCopiedTopicTimer=null,o.systemModal==="mqtt-sensors"&&f()},1800))}catch(r){o.mqttError=`Kopi\xEBren is mislukt. ${r.message}`,o.mqttCopiedTopicKey=""}f()}async function Ww(e,t){let r=o.mqttStatus||{};if(!r.csrf_token){o.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",f();return}o.mqttInputToggleBusyKey=e,o.mqttNotice="",o.mqttError="",f();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("enabled",t?"true":"false");let a=await fetch("/mqtt/input/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);o.lastMqttStatusRefreshAt=0,await Jo({force:!0})}catch(n){o.mqttError=`MQTT-topic kon niet worden opgeslagen. ${n.message}`}finally{o.mqttInputToggleBusyKey===e&&(o.mqttInputToggleBusyKey=""),f()}}async function Vw(e,t){let r=o.mqttStatus||{};if(!r.csrf_token){o.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",f();return}o.mqttRetainedToggleBusyKey=e,o.mqttNotice="",o.mqttError="",f();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("accept_retained",t?"true":"false");let a=await fetch("/mqtt/input/retained/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);o.lastMqttStatusRefreshAt=0,await Jo({force:!0})}catch(n){o.mqttError=`Retained-instelling kon niet worden opgeslagen. ${n.message}`}finally{o.mqttRetainedToggleBusyKey===e&&(o.mqttRetainedToggleBusyKey=""),f()}}async function Bw(){let e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,r=String(o.mqttDraftBroker||"").trim(),n=String(o.mqttDraftPort||"").trim(),a=n?Number(n):t?0:1883,i=!t&&!r,l=i?"":String(o.mqttDraftUsername||"").trim(),c=i||!!o.mqttDraftClearPassword,u=c?"":String(o.mqttDraftPassword||"");if(!e.csrf_token){o.mqttError="MQTT-configuratie laadt nog. Probeer het zo opnieuw.",f();return}if((t||n)&&(!Number.isInteger(a)||a<1||a>65535)){o.mqttError="Vul een geldige poort in.",f();return}if(t&&!r){o.mqttError="Vul een broker in als je MQTT inschakelt.",f();return}o.mqttBusy=!0,o.mqttNotice="",o.mqttError="",f();try{let p=new URLSearchParams;p.set("csrf_token",e.csrf_token),p.set("enabled",t?"true":"false"),p.set("broker",r),p.set("port",String(a)),p.set("username",l),p.set("password",u),p.set("clear_password",c?"true":"false");let g=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:p.toString()}),w=await g.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!g.ok||!w.ok)throw new Error(w.error||`HTTP ${g.status}`);o.mqttDraftDirty=!1,await Jo({force:!0}),o.mqttDraftPassword="",o.mqttDraftClearPassword=!1,o.mqttNotice=t?"MQTT-configuratie opgeslagen. De MQTT-verbinding wordt gestart.":"MQTT-configuratie opgeslagen.",o.mqttError="",f()}catch(p){o.mqttError=`Opslaan is mislukt. ${p.message}`,f()}finally{o.mqttBusy=!1,f()}}var Kw={"open-mqtt-modal":()=>(o.systemModal="mqtt",yp(),o.mqttDraftDirty=!1,o.mqttNotice="",o.mqttError="",f(),Jo({force:!0})),"open-mqtt-sensors-modal":()=>(o.systemModal="mqtt-sensors",o.mqttNotice="",o.mqttError="",o.mqttCopiedTopicKey="",o.mqttExpandedTopicKey="",o.mqttInputToggleBusyKey="",o.mqttRetainedToggleBusyKey="",f(),Jo({force:!0}).then(e=>{e&&o.systemModal==="mqtt-sensors"&&f()})),"toggle-mqtt-sensor-topic":e=>{let t=e.dataset?.oqMqttTopicKey||"cooling_dew_point";o.mqttExpandedTopicKey=o.mqttExpandedTopicKey===t?"":t,o.mqttError="",f()},"toggle-mqtt-input":e=>{let t=e.dataset?.oqMqttTopicKey||"cooling_dew_point";return Ww(t,!Ka(t))},"toggle-mqtt-retained":e=>{let t=e.dataset?.oqMqttTopicKey||"";if(t)return Vw(t,!dl(t))},"copy-mqtt-topic":e=>wp(e.dataset?.oqMqttTopicKey||"cooling_dew_point"),"copy-mqtt-dew-topic":e=>wp(e.dataset?.oqMqttTopicKey||"cooling_dew_point"),"save-mqtt-config":()=>Bw()};function qp(e,t){return ie(Kw,e,t)}function Hp(){if(o.nativeOpen||o.appView!=="settings")return;let e=()=>{if(!(o.nativeOpen||o.appView!=="settings")){if(o.loadingEntities||o.focusedField||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock){window.setTimeout(Hp,250);return}ye({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}async function Rp(){if(o.nativeOpen||!wl()||o.overviewMetadataHydrated||o.overviewMetadataHydrating)return!1;let e=cy();if(!e.length)return o.overviewMetadataHydrated=!0,!1;o.overviewMetadataHydrating=!0;try{return await V(e,"all",{concurrency:Ut}),o.overviewMetadataHydrated=!0,!0}catch{return!1}finally{o.overviewMetadataHydrating=!1,o.mounted&&!o.nativeOpen&&f()}}async function zw(e,t="state"){if(!(!e.length||o.nativeOpen)){o.entitySyncInFlight=!0;try{await V(e,t,{concurrency:t==="all"?Ut:Gt})}finally{o.entitySyncInFlight=!1;let r=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,r&&!o.nativeOpen&&window.setTimeout(()=>{ye(r)},0)}o.mounted&&!o.nativeOpen&&f()}}async function Uw(){if(!o.nativeOpen)try{wl()&&await Rp(),(o.appView==="overview"||o.appView==="control"||o.appView==="diagnosis")&&await nl({force:!0}),o.appView==="results"&&await Ba({force:!0}),await zo({force:!0}),Zt()&&await Promise.all([Uo({force:!0}),sp({forceTrendHistory:!0,forceEnergyHistory:!0})])}finally{o.mounted&&!o.nativeOpen&&f(),Hp()}}async function _p(){if(o.nativeOpen)return;o.loadingEntities=!0,f();let e=Qw();e>0&&await new Promise(i=>window.setTimeout(i,e));let t=_y(),r=Py(t),n=o.appView==="settings"?"all":"state";try{await V(t,n,{concurrency:n==="all"?Ut:Gt}),o.appView==="settings"?await py():await dy()}finally{o.loadingEntities=!1,f()}let a=o.appView==="settings"?"all":"state";window.setTimeout(()=>{zw(r,a)},ry),Dp(hl())}var kp={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel","statusLedsEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured"]},Gw={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...rt,...$r,...jo,...ys,...gn,...fn,"maxWater",...Ea],service:[...hn,...$a,...gn,...fn,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi"],heating:["strategy",...At,...Fo,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...ws],integrations:[...ms,...fs,...gs,...hs,...wn,...bs,...ps],system:["setupComplete",...Qt,"firmwareUpdateChannel","projectVersionText","releaseChannelText","statusLedsEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured",...Nr,"webServerLogHistoryEnabled","debugLevel"]};function Zo(){return[...new Set(["setupComplete",...Ha])]}function Qw(){return Number.isFinite(0),0}var Pp=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","silentModeOverride","totalHeat","totalCoolingPower"],Yw=["strategy","controlModeLabel","hpGeneration","coolingEnableEffectiveSource"],Jw=["totalPower","flowSelected"],Zw=["totalHeat","totalCoolingPower"],Xw=2e3,ey=250,ty=5e3,oy=250;function fl(e=o.settingsGroup){let t=Le.has(e)?e:fe[0].id;return[...new Set(["setupComplete","strategy",...nt,...Gw[t]||[]])]}function Np(){let e=Le.has(o.settingsGroup)?o.settingsGroup:fe[0].id;return[...new Set(kp[e]||kp.installation)]}var ry=1200,ny=1800,ay=0,iy=3500;function gl(){return["setupComplete","strategy","usageTelemetryEnabled","usageTelemetryChoiceConfigured",...nt]}function sy(){let e=new Set;return Aa.forEach(t=>{(t.categories||[]).forEach(r=>{(r.groups||[]).forEach(n=>{(n.rows||[]).forEach(a=>{let i=Array.isArray(a)?a[1]:"";i&&e.add(i)})})})}),[...e]}function _n(e,t={}){let r=t.forceFast===!0,n=t.includeBulk===!0;return e==="energy"||e==="results"?[...new Set([...gl(),...e==="energy"?Pp:[],...sy(),...e==="results"?ol:[]])]:[...new Set([...gl(),...r||!n?vs:yn,...e==="control"?Gu:[],...e==="diagnosis"?tl:[]])]}function hl(e=o.appView){return e==="diagnosis"||e==="results"||e==="settings"&&Zt()?ay:ny}function Dp(e=hl()){o.nativeOpen||(o.supplementaryPrimeTimer&&window.clearTimeout(o.supplementaryPrimeTimer),o.supplementaryPrimeTimer=window.setTimeout(()=>{o.supplementaryPrimeTimer=null,Uw()},e))}function ly(e={}){let t=o.pendingEntitySyncOptions||{},r={...t,...e};t.forceBulk||e.forceBulk?(r.forceBulk=!0,r.forceFast=!1):(t.forceFast||e.forceFast)&&(r.forceFast=!0),o.pendingEntitySyncOptions=r}function bl(e){let t=String(T(e)??"").trim().toLowerCase();return t!==""&&t!=="unknown"&&t!=="unavailable"&&t!=="nan"}function Ep(e){return bl(e)&&Number.isFinite(Re(T(e)))}function wl(){return o.appView==="overview"||o.appView==="diagnosis"||o.appView==="energy"}function cy(){return Qu.filter(e=>{let t=o.entities[e];return t?!String(t.uom??t.unit_of_measurement??"").trim():!O[e]?.optional})}function Tp(){return wl()?Yw.every(bl)&&Jw.every(Ep)&&Zw.some(Ep):!0}function uy(){return o.appView==="settings"}function Cp(){return uy()?Np().every(e=>O[e]?.optional&&!o.entities[e]?!0:bl(e)):!0}async function dy(){if(Tp())return;let e=Date.now()+Xw;for(;!o.nativeOpen&&!Tp()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,ey));try{await V(Pp,"state")}catch{return}}}async function py(){if(Cp())return;let e=Date.now()+ty;for(;!o.nativeOpen&&!Cp()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,oy));try{await V(Np(),"all")}catch{return}}}var my=8e3,Lp=3e3,gy="/openquatt/entities",fy=900,hy="/openquatt/service/status",by="/openquatt/decision-log",wy=15e3;function yl(){return o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint?Lp:my}function vl(e){let t=String(e||"").toLowerCase();return t.includes("failed to fetch")||t.includes("load failed")||t.includes("networkerror")||t.includes("network request failed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("err_connection")||t.includes("timeout")}var yy=300*1e3;function vy(){if(o.optionalMissingEntities)for(let e of Object.keys(o.optionalMissingEntities))delete o.optionalMissingEntities[e]}function xp(){let e=Date.now();o.lastEntitySyncAt=e,o.lastEntitySyncSuccessAt=e,o.entitySyncFailureCount=0,!!o.deviceReconnectMode&&typeof Ns=="function"&&Ns()&&(o.lastFastEntitySyncAt=0,o.lastBulkEntitySyncAt=0,o.lastStaticEntitySyncAt=0,o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,o.decisionLog=null,o.decisionLogError="",o.decisionLogSignature="",o.decisionLogLastFetchAt=0,typeof ll=="function"?ll():(il(),sl(),Qe({webServerLogEnabled:null,webServerLogConnected:!1})),vy())}function Op(e){if(!vl(e)){o.entitySyncFailureCount=0,Ds();return}o.entitySyncFailureCount=Number(o.entitySyncFailureCount||0)+1,o.deviceReconnectLastError=String(e||""),(o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||o.entitySyncFailureCount>=2)&&wo(o.updateInstallBusy||o.updateInstallPhaseHint?"ota":o.busyAction==="restartAction"?"restart":"reconnect",e)}function Sy(e=Date.now(),t={}){if(t.forceProbe===!0||o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||Number(o.entitySyncFailureCount||0)>0)return!0;let r=Number(o.lastEntitySyncSuccessAt||o.lastEntitySyncAt||o.lastEntityResponseAt||0);if(!r)return!0;let n=document.hidden?vn:td;return e-r>=n}async function qy(){let e=O.status||O.setupComplete;if(!e)return{ok:!0,message:""};let t=o.deviceReconnectMode?Lp:ed,r=Q(e.domain,e.name);try{let n=await kn(r,{cache:"no-store"},t,`${e.name} request timed out after ${t}ms`);return o.lastEntityResponseAt=Date.now(),{ok:n.ok||n.status===404,message:n.ok||n.status===404?"":`${e.name} HTTP ${n.status}`}}catch(n){return{ok:!1,message:n.message||String(n)}}}function ky(e,t=Date.now()){let r=o.optionalMissingEntities?.[e];return!O[e]?.optional||!r?!1:t-Number(r)<yy}function Ey(e,t=Date.now()){o.optionalMissingEntities&&(o.optionalMissingEntities[e]=t)}function Ty(e){let t=O[e];return t?`${e}	${t.domain}	${t.name}`:""}function $p(e,t){let r=new URLSearchParams;return r.set("detail",t==="all"?"all":"state"),r.set("entities",e.join(`
`)),r.toString()}function Sl(e,t){let r=[],n=[],a=[],i="";return e.forEach(l=>{let c=Ty(l);if(!c)return;let u=[...a,c],p=$p(u,t);if(a.length&&p.length>fy){r.push({keys:n,body:i}),n=[l],a=[c],i=$p(a,t);return}n=[...n,l],a=u,i=p}),a.length&&r.push({keys:n,body:i}),r}async function Cy(e){let t=yl(),r={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body},n=await kn(gy,r,t,`bulk entities request timed out after ${t}ms`);if(!n.ok)throw new Error(`bulk entities HTTP ${n.status}`);return n.json()}async function xy(){let e=yl(),r=await kn(hy,{cache:"no-store",headers:{"Cache-Control":"no-store"}},e,`service status request timed out after ${e}ms`);if(!r.ok)throw new Error(`service status HTTP ${r.status}`);return r.json()}async function $y(){let e=yl(),r=await kn(by,{cache:"no-store",headers:{"Cache-Control":"no-store"}},e,`decision log request timed out after ${e}ms`);if(!r.ok)throw new Error(`decision log HTTP ${r.status}`);return r.json()}function My(e={}){let t=Array.isArray(e.events)?e.events:[],r=Array.isArray(e.buckets)?e.buckets:[],n=t[0]||{},a=t[t.length-1]||{},i=r[r.length-1]||{};return[e?.meta?.event_count??t.length,e?.meta?.dropped_count??0,t.length,n.seq??"",a.seq??"",a.uptime_s??"",e?.meta?.boot_epoch_s??"",n.epoch_s??"",a.epoch_s??"",r.length,i.hour_start_uptime_s??"",i.hour_start_epoch_s??"",i.source??"",i.attention_count??"",e?.meta?.flash_write_count??""].join("|")}async function Ay(e={}){if(o.appView!=="control")return!1;let t=e.force===!0,r=Date.now();if(!t&&o.decisionLogFetchPromise)return o.decisionLogFetchPromise;if(!t&&(o.decisionLog||o.decisionLogError)&&r-Number(o.decisionLogLastFetchAt||0)<wy)return!1;o.decisionLogFetchPromise=(async()=>{let n=await $y(),a=Array.isArray(n?.events)?n.events:[];if(!n?.ok||!Array.isArray(n?.events))throw new Error("decision log response mist events");let i=My(n),l=o.decisionLogError!==""||o.decisionLogSignature!==i||!o.decisionLog;return o.decisionLog={...n,events:a,buckets:Array.isArray(n.buckets)?n.buckets:[]},o.decisionLogError="",o.decisionLogSignature=i,o.decisionLogLastFetchAt=Date.now(),l})();try{return await o.decisionLogFetchPromise}catch(n){let a=n.message||String(n),i=!!o.decisionLog||o.decisionLogError!==a;return o.decisionLog=null,o.decisionLogError=a,o.decisionLogSignature="",o.decisionLogLastFetchAt=Date.now(),i}finally{o.decisionLogFetchPromise=null}}function Hy(e={}){let t=e?.entities&&typeof e.entities=="object"?e.entities:{};Object.entries(t).forEach(([r,n])=>{bn.has(r)&&(o.optionalMissingEntities&&delete o.optionalMissingEntities[r],o.entities[r]=Ip(r,o.entities[r],n))})}async function Ry(e){if(!e.length)return{ok:!0,message:""};try{let t=await xy();return Hy(t),o.lastEntityResponseAt=Date.now(),{ok:!0,message:""}}catch(t){return{ok:!1,message:t.message||String(t)}}}async function V(e,t="state",r={}){let n=Date.now(),a=r.forceMissing===!0,i=e.filter(b=>a||bn.has(b)||!ky(b,n));if(!i.length)return;let l=i.filter(b=>bn.has(b)),c=i.filter(b=>!bn.has(b)),p=(await Ry(l)).ok?c:[...c,...l];if(!p.length){Mp(),Rn(eo()),o.busyAction||(xp(),o.controlError="");return}let g=Number(r.concurrency),w=Number.isFinite(g)&&g>0?Math.floor(g):Ut,y=Sl(p,t),h=Math.max(1,Math.min(w,Ut)),m=[];for(let b=0;b<y.length;b+=h){let S=y.slice(b,b+h),q=await Promise.allSettled(S.map(async E=>({chunk:E,payload:await Cy(E)})));m.push(...q)}m.some(b=>b.status==="fulfilled")&&(o.lastEntityResponseAt=Date.now());let d="";m.forEach(b=>{if(b.status!=="fulfilled"){let $=b.reason.message||String(b.reason);d||(d=$);return}let{chunk:S,payload:q}=b.value,E=q?.entities&&typeof q.entities=="object"?q.entities:{},k=new Set(Array.isArray(q?.missing)?q.missing:[]);S.keys.forEach($=>{if(Object.prototype.hasOwnProperty.call(E,$)){o.optionalMissingEntities&&delete o.optionalMissingEntities[$],o.entities[$]=Ip($,o.entities[$],E[$]);return}let _=O[$];_?.optional?k.has($)&&Ey($,n):d||(d=`${_?.name||$} ontbreekt in bulk response`)})}),Mp(),Rn(eo()),d?(Op(d),o.deviceReconnectMode?o.controlError="":o.controlError=`Niet alle helpervelden konden worden ververst. ${d}`):o.busyAction||(xp(),o.controlError="")}function Ip(e,t={},r={}){let n={...t||{},...r||{}};return O[e]?.domain==="select"&&(!String(r.state??"").trim()&&String(t?.state??"").trim()&&(n.state=t.state),!String(r.value??"").trim()&&String(t?.value??"").trim()&&(n.value=t.value),!Array.isArray(r.option)&&Array.isArray(t?.option)&&(n.option=t.option),!Array.isArray(r.options)&&Array.isArray(t?.options)&&(n.options=t.options)),n}function Mp(){o.complete=Na(),o.stage=o.complete===!0?"Gereed":o.complete===!1?"Quick Start":"Laden...",o.summary=hd(),o.appView==="diagnosis"&&!yt()&&Pt(yo(),{syncMode:"replace",forceSync:!0}),o.appView||Pt(An()||yo(),{syncMode:"replace",forceSync:!0})}function _y(){let e=gl();return o.appView==="settings"?[...new Set([...e,...fl()])]:o.appView==="energy"||o.appView==="results"?_n(o.appView,{forceFast:!0}):o.appView==="overview"||o.appView==="diagnosis"?_n(o.appView,{forceFast:!0}):[...new Set(e)]}function Py(e=[]){let t=new Set(e);return(o.appView==="settings"?fl():o.appView==="overview"||o.appView==="control"||o.appView==="diagnosis"?[...new Set([..._n(o.appView,{includeBulk:!0}),...Qt])]:o.appView==="energy"||o.appView==="results"?[...new Set([..._n(o.appView,{forceFast:!0}),...Qt])]:[...new Set(["setupComplete","strategy",...nt])]).filter(n=>!t.has(n))}function Ap(e=Date.now(),t={}){return t.forceBulk===!0?!0:e-Number(o.lastBulkEntitySyncAt||0)>=Zu}async function ye(e={}){if(o.nativeOpen||o.loadingEntities||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock)return;if(o.updateInstallBusy||Wa()){o.pendingEntitySyncOptions=null;return}if(o.focusedField&&o.appView!=="settings")return;if(o.entitySyncInFlight){ly(e);return}let t=Date.now();if(document.hidden&&t-Number(o.lastEntitySyncAttemptAt||0)<vn)return;let r=o.appView,n=e.prefetchView==="overview"&&!e.forceBulk&&r==="settings",a=n?"overview":r,i=a==="overview"||a==="control"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,c=!l&&!n&&Ap(t,e),p=t-Number(o.lastStaticEntitySyncAt||0)>=Xu||o.updateInstallBusy||o.updateInstallPhaseHint?Qt:[],g=o.quickStartModalOpen&&o.currentStep==="flow-source"?wt:[],w=o.quickStartModalOpen&&o.currentStep==="setup"?Yt:[],y=o.quickStartModalOpen&&o.currentStep==="thermostat-source"?Io:[],h=rl()?to():[],m=n?[...vs,...nt,"setupComplete",...p]:i?[..._n(a,{forceFast:l,includeBulk:c}),...p]:r==="settings"?[...new Set([...fl(),...h,...p])]:c?["setupComplete",...p,...nt,"strategy",...Oo,...rt,...ae()?he.map(d=>d.key):At]:["setupComplete",...nt,"strategy",...p];o.entitySyncInFlight=!0,o.lastEntitySyncAttemptAt=t;try{let d=o.deviceReconnectMode,b=Sy(t,e)?await qy():{ok:!0,message:""};if(!b.ok){Op(b.message),n||f();return}if(await V([...new Set([...m,...w,...g,...y])],n?"state":r==="settings"||w.length?"all":"state",{concurrency:l&&i?Gt:Ut}),o.lastFastEntitySyncAt=Date.now(),c&&(a==="overview"||a==="control"||a==="diagnosis")&&!n&&(o.lastBulkEntitySyncAt=o.lastFastEntitySyncAt),p.length&&(o.lastStaticEntitySyncAt=o.lastFastEntitySyncAt),n)return;i&&!o.overviewMetadataHydrated&&!o.overviewMetadataHydrating&&Rp();let S=d!==o.deviceReconnectMode,q=l&&i,E=q?!1:a==="overview"||a==="control"||a==="diagnosis"?await nl():!1,k=q?!1:o.appView==="results"?await Ba():!1,$=a==="control"?await Ay({force:e.forceDecisionLog===!0}):!1,_=q?!1:rl()?(await Promise.all([ip(),Ba({metaOnly:!0})])).some(Boolean):!1,P=q||!Md()?!1:await zo(),B=q||!Ad()?!1:await Uo(),H=q||!Sp()?!1:await Jo({force:o.systemModal==="mqtt-sensors"}),F=op();if(q&&!o.nativeOpen&&Dp(hl(a)),S){f();return}if(E&&o.appView==="diagnosis"&&!o.root?.querySelector(".oq-overview-trends")){f();return}if(k&&o.appView==="results"&&!o.root?.querySelector(".oq-energy-history")){f();return}if($&&o.appView==="control"){al()||f();return}if(_&&o.appView==="settings"){f();return}if(P&&(o.systemModal==="login"||Zt())){f();return}if(B&&o.appView==="settings"){f();return}if(o.systemModal==="mqtt-sensors"){za()!==o.mqttSensorsModalRenderSignature&&f();return}if(H&&o.appView==="settings"){f();return}let A=!!(o.updateModalOpen||o.systemModal||o.interfacePanelOpen);if(F!==o.headerRenderSignature)if(A&&Xs())o.headerRenderSignature=F;else{f();return}else Xs();if(o.appView==="settings"&&String(o.systemModal||"").startsWith("service-task-")){Cn()!==o.settingsRenderSignature&&f();return}if(A)return;if(o.appView==="settings"){let L=Cn();if(L!==o.settingsRenderSignature&&!o.focusedField){f();return}if(!np()){o.focusedField||f();return}o.focusedField&&(o.settingsRenderSignature=L);return}if(o.appView==="diagnosis"){dp()||f();return}if(o.appView==="control"){al()||f();return}if(o.appView==="energy"){lp()||f();return}if(o.appView==="results"){cp()||f();return}up()||f()}catch(d){n||(o.controlError=`Helperstatus kon niet worden geladen. ${d.message}`,f())}finally{o.entitySyncInFlight=!1;let d=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,d&&!o.nativeOpen&&window.setTimeout(()=>{ye(d)},0),l&&(a==="overview"||a==="control"||a==="diagnosis")&&!n&&!o.nativeOpen&&!d&&Ap(Date.now())&&window.setTimeout(()=>{ye({forceBulk:!0})},iy)}}function Dt(){return{}}function Ny(){let e=String(T("hpGeneration")||"").trim();return e||""}function Xo(e){let t=String(e||"").trim().toLowerCase();return t==="single"||t.includes("quatt single")||t.includes("openquatt single")?"single":t==="duo"||t.includes("quatt duo")||t.includes("openquatt duo")?"duo":""}function Dy(){if(!Array.isArray(Mr))return"";if(Mr.some(t=>v(t)))return"duo";let e=o.optionalMissingEntities||{};return Mr.every(t=>e[t])?"single":""}function ql(e){let t=Xo(e);return(t==="single"||t==="duo")&&typeof o<"u"&&o&&typeof o=="object"&&(o.lastKnownInstallationTopology=t),t}function Ly(){if(typeof o<"u"&&o&&typeof o=="object"){let e=String(o.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function oe(){let e=Xo(T("installationTopology"));if(e==="single"||e==="duo")return ql(e);let t=Xo(Dt().installation);if(t==="single"||t==="duo")return ql(t);let r=Dy();return r?ql(r):Ly()}function Lt(){let e=oe(),t=Ny();return e==="single"?t?`Quatt Single ${t}`:"Quatt Single":e==="duo"?t?`Quatt Duo ${t}`:"Quatt Duo":t?`Quatt Hybrid ${t}`:"Quatt Hybrid"}function Ye(){return"OpenQuatt"}function Pn(e){let t=String(e||"").trim().toLowerCase();return t==="wifi"||t==="wi-fi"||t.includes("wifi")||t.includes("wi-fi")?"wifi":t==="eth"||t==="ethernet"||t.includes("ethernet")?"eth":""}function it(e=st()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function er(e=oe()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function Dr(){let e=String(T("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(Dt().hardwareProfile||e).trim().toLowerCase()}function st(){return Pn(T("connectionText")||Dt().connection)}function Fp(){let e=st();return e==="wifi"?"eth":e==="eth"?"wifi":""}function jp(){let e=oe();return e==="single"?"duo":e==="duo"?"single":""}function qo(e=oe(),t=st()){let r=er(e),n=Dr();return n==="heatpump_controller_q"?`Heatpump Controller Q ${r} ${it(t)}`:n==="heatpump_listener"?`Heatpump Listener ${r} ${it(t)}`:n==="waveshare"?`Waveshare ${r} ${it(t)}`:`${Ye()} ${r} ${it(t)}`}function kl(){let e=C("timeValid"),t=String(T("timeNowHhmm")||"").trim();if(t&&t!=="invalid")return t;if(v("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function Ua(){return v("timeValid")&&!C("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${kl()}`}function Oy(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function Iy(e){let t=e?.state;if(t!==""&&t!==null&&t!==void 0){let a=Number(t);if(Number.isFinite(a))return a}let r=e?.value,n=Number(r);return Number.isFinite(n)?n:NaN}function Lr(){let e=Iy(o.entities.uptime);if(Number.isFinite(e)&&e>=0){let n=Oy(o.entities.uptime);if(n==="d")return Ko(e*1440);if(n==="h")return Ko(e*60);if(n==="s")return Ko(e/60)}let t=String(o.entities.uptimeReadable?.state??o.entities.uptimeReadable?.value??"").trim();if(t&&t.toLowerCase()!=="unknown")return t;let r=Number(Dt().bootedAt);return!Number.isFinite(r)||r<=0?"\u2014":Ko((Date.now()-r)/6e4)}function Or(){let e=String(o.entities.ipAddress?.state??o.entities.ipAddress?.value??"").trim();if(e)return e;let t=String(Dt().ipAddress||"").trim();return t||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function ko({getScroller:e,getToken:t,setToken:r,isActive:n=()=>!0,getIdentity:a=null,preserveGrowth:i=!1,stickToBottom:l=!1,nearBottomThreshold:c=48}){function u(){let y=e();if(!y)return null;let h={scrollTop:y.scrollTop};if((i||l)&&(h.scrollHeight=y.scrollHeight),l){let m=y.scrollHeight-y.scrollTop-y.clientHeight;h.stickToBottom=m<c}return a&&(h.identity=a(y)),h}function p(y){if(!y)return;let h=e();if(!h||a&&a(h)!==y.identity)return;if(y.stickToBottom){h.scrollTop=h.scrollHeight;return}let m=i?h.scrollHeight-Number(y.scrollHeight||0):0;h.scrollTop=Math.max(0,Number(y.scrollTop||0)+m)}function g(y,h=!0){if(!y)return;let m=Number(t()||0)+1;r(m);let d=()=>{Number(t()||0)!==m||!n()||p(y)};if(h){window.requestAnimationFrame(d);return}d()}function w(){r(Number(t()||0)+1)}return{capture:u,invalidate:w,queue:g,restore:p}}function Ae(e){return Object.prototype.hasOwnProperty.call(o.inputDrafts,e)?o.inputDrafts[e]:T(e)}function Eo({key:e,value:t,meta:r,controlClass:n,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
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
  `}function To(e,t,r){return r?`
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
  `:""}function ve(e,t,r,n,a="",i=""){return`<article class="oq-helper-surface oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(t)}</h3>${To(e,t,r)}</div><div class="oq-settings-field-control">${n}</div>${i}</article>`}function Pe(e,t,r,n,a=""){return ve(e,t,r,`<div class="oq-settings-static-value">${s(n)}</div>`,a)}function Oe({label:e,value:t,note:r="",action:n="",className:a="",dataAttribute:i="data-oq-diagnostics-row",dataValue:l=""}){let c=`oq-settings-system-row${n?" oq-settings-system-row--with-action":""}${a?` ${s(a)}`:""}`,u=i&&l?` ${i}="${s(l)}"`:"";return!n&&!r?`<div class="${c}"${u}><span class="oq-settings-system-row-label">${s(e)}</span><strong class="oq-settings-system-row-value">${s(t)}</strong></div>`:`<div class="${c}"${u}><div class="oq-settings-system-row-copy"><p class="oq-settings-system-row-label">${s(e)}</p><strong class="oq-settings-system-row-value">${s(t)}</strong>${r?`<p class="oq-settings-system-row-note">${s(r)}</p>`:""}</div>${n}</div>`}function He(e,t={}){let r=typeof t=="number"?{decimals:t}:t||{},n=o.entities[e];if(!n)return"\u2014";let a=Number(n.value);if(!Number.isNaN(a)){let c=Number.isInteger(a)?0:Number.isFinite(r.decimals)?r.decimals:1,u=a.toFixed(Math.max(0,c));return r.trimTrailingZeros&&u.includes(".")&&(u=u.replace(/\.?0+$/,"")),`${u}${n.uom?` ${n.uom}`:""}`}let i=String(n.state??n.value??"").trim(),l=i.toLowerCase();return!i||l==="nan"||l==="unknown"||l==="unavailable"?"\u2014":i}function tr(e,t="\u2014"){let r=o.entities[e];if(!r)return t;let n=String(r.state??r.value??"").trim();return!n||n==="0"||n==="\u2014"?t:n}function oo(e,t="",r=2){let n=Number(e);return Number.isFinite(n)?`${n.toFixed(Math.max(0,r))}${t?` ${t}`:""}`:"\u2014"}function Ee(e,t=2){return He(e,{decimals:t})}function or(e,t="IDLE"){let r=tr(e,t),n=String(r??"").trim();return!n||n==="0"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN"?t:n}function Ga(){let e=tr("commissioningStatus",""),t=C("cm100Active"),r=String(e||"").trim().toUpperCase();return(t||r==="CM100 READY"||r==="CM100 STOPPED"||r.includes("DONE")||r.includes("FAILED")||r.includes("ABORT")||r.includes("APPLIED")||r.includes("REFUSED"))&&(o.pendingCommissioningCm100Start=!1),r&&r!=="0"?r==="IDLE"&&o.pendingCommissioningCm100Start?"CM100 REQUESTED":r:o.pendingCommissioningCm100Start?"CM100 REQUESTED":t?"CM100 READY":"IDLE"}function ke(e){let t=String(e||"").trim();return t?{None:"Geen",Manual:"Handmatig",Disabled:"Niet gebruiken","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OT-thermostaat + handmatig","CIC + Manual":"CIC + handmatig","CIC + HA input + Manual":"CIC + HA-invoer + handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[qa]:"Stooklijn",[Sa]:"Power House","Dew point required":"Dauwpuntmeting vereist","Dew point":"Dauwpunt","Dew point (MQTT)":"Dauwpunt (MQTT)","Dew point (HA)":"Dauwpunt (HA)","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Fallback:"Dauwpuntsbenadering","Fallback blocked":"Dauwpuntsbenadering geblokkeerd","User responsibility":"Expliciet toegestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[t]||t:""}function Ir({key:e,option:t,currentValue:r,busy:n,copy:a="",meta:i="",image:l="",imageAlt:c="",infoTitle:u="",infoCopy:p="",infoId:g=""}){let w=t===r,y=`
    <button
      class="oq-helper-surface oq-settings-choice-card${w?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${p?" oq-settings-choice-card--has-info":""}"
      type="button"
      data-oq-action="select-settings-option"
      data-select-key="${s(e)}"
      data-select-option="${s(t)}"
      aria-pressed="${w?"true":"false"}"
      ${n?"disabled":""}
    >
      <span class="oq-settings-choice-head">
        <span class="oq-settings-choice-title">${s(ke(t))}</span>
        ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
      </span>
      ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(c||ke(t))}" loading="lazy" decoding="async"></span>`:""}
      ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
    </button>
  `;if(!p)return y;let h=u||ke(t),m=g||`${e}-${t}`;return`
    <article class="oq-settings-choice-card-shell${w?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
      ${y}
      ${To(m,h,p)}
    </article>
  `}function ro(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function Co(e,t,r,n=""){if(!v(e))return"";let a=o.entities[e]||{},i=String(T(e)||""),l=ro(a);return ve(e,t,r,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>${l.map(c=>`<option value="${s(c)}" ${c===i?"selected":""}>${s(ke(c))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,n)}function Fy(e,t,r="Aan",n="Uit"){return`<span class="oq-settings-toggle-state${t?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(r)}" data-off-label="${s(n)}">${s(t?r:n)}</span>`}function qt(e,t,r,n,a="Aan",i="Uit",l=!0){let c=r?a:i,u=r?"off":"on";return`
    <div class="oq-settings-compact-switch-row">
      ${l?Fy(e,r,a,i):""}
      <button
        class="oq-settings-toggle-switch${r?" is-on":""}"
        type="button"
        role="switch"
        data-oq-action="toggle-overview-control"
        data-control-key="${s(e)}"
        data-control-state="${s(u)}"
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
  `}function El(e,t,r="",n=""){let a=t?r:n;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(r)}" data-off-copy="${s(n)}">${s(a)}</p>`:""}function Wp(e,t,r,n="",a="",i=""){if(!v(e))return"";let l=!!T(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return ve(e,t,r,`
      <div class="oq-settings-compact-switch-field">
        ${qt(e,t,l,c)}
        ${El(e,l,n,a)}
      </div>
    `,i)}function Vp(e,t,r,n,a=""){if(!v(e))return"";let i=!!T(e),l=o.loadingEntities||o.busyAction===`switch-${e}`;return ve(e,t,r,`
      <div class="oq-settings-compact-switch-field">
        ${qt(e,t,i,l)}
        ${n?`<p>${s(n)}</p>`:""}
      </div>
    `,a)}function Qa(e,t,r){if(!v(e))return"";let n=!!T(e),a=o.loadingEntities||o.busyAction===`switch-${e}`;return`
    <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
      <div class="oq-settings-integration-card-head">
        <h4>${s(t)}</h4>
      </div>
      <p>${s(r)}</p>
      ${qt(e,t,n,a)}
    </article>
  `}function Je(e,t,r="oq-helper-button oq-helper-button--ghost",n=!1){return`
    <button
      class="${r}"
      type="button"
      data-oq-action="press-named-button"
      data-oq-button-key="${s(e)}"
      ${n?"disabled":""}
    >
      ${s(t)}
    </button>
  `}function rr({active:e,startKey:t,stopKey:r,startLabel:n,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:c=!1,stopDisabled:u=!1}){return Je(e?r:t,e?a:n,e?l:i,e?u:c)}function Bp(e,t,r,n,a=""){if(!v(e))return"";let i=o.entities[e]||{},l=String(T(e)||""),c=ro(i),u=o.loadingEntities||o.busyAction===`save-${e}`,p=`
    <div class="oq-settings-choice-grid">
      ${c.map(g=>{let w=n[g]||"",y=typeof w=="string"?w:w.copy||"",h=typeof w=="string"?"":w.image||"",m=typeof w=="string"?"":w.alt||"";return Ir({key:e,option:g,currentValue:l,busy:u,copy:y,image:h,imageAlt:m})}).join("")}
    </div>
  `;return ve(e,t,r,p,a)}function ce(e,t,r,n="",a={}){if(!v(e))return"";let i=Be(e),l=Ae(e),c=a.unitOverride||i.uom||"",u=a.showUnit!==!1&&!!c,p=u&&a.unitMode!=="outside",g=Eo({key:e,value:l,meta:i,controlClass:`oq-helper-control${u&&!p?" oq-helper-control--split":""}${p?" oq-helper-control--suffix":""}`,unitMarkup:u?p?`<span class="oq-helper-unit-chip">${s(c)}</span>`:`<span class="oq-helper-unit">${s(c)}</span>`:""});return ve(e,t,r,g,n,a.footerMarkup||"")}function lt(e,t,r,n="",a={}){if(!v(e))return"";let i=Be(e),l=be(e,T(e)),c=a.minLabel||`${i.min}${i.uom||""}`,u=a.maxLabel||`${i.max}${i.uom||""}`,p=a.valueLabel||J(e,l);return ve(e,t,r,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(c)}</span><strong>${s(p)}</strong><span>${s(u)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${o.loadingEntities?"disabled":""}></label>`,n)}function Tl(e,t,r,n={}){if(!v(e))return"";let a=Be(e),i=Ae(e),l=n.compact===!0,c=n.embedded===!0,u=n.infoId||e,p=n.showCopy!==!1;return`
    <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${c?" oq-settings-mini-field--embedded":""}">
      <div class="oq-settings-mini-copy">
        <div class="oq-settings-mini-copy-head">
          <h5>${s(t)}</h5>
          ${r?To(u,t,r):""}
        </div>
        ${r&&p?`<p>${s(r)}</p>`:""}
      </div>
      ${Eo({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
    </article>
  `}function Cl(e,t,r,n=""){if(!v(e))return"";let a=Sn(T(e));return ve(e,t,r,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${o.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,n||"oq-settings-field--time")}function re(e,t,r,n,a=""){return`<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(t)}</h3><p>${s(r)}</p></div>${n}</section>`}var Kp=250;function zp(){return[]}function ar(){return typeof window>"u"?!1:zp().length>0}function jy(){return`${_e()}/events`}function Wy(){return`${_e()}/openquatt/logs/recent`}function Vy(){return`${_e()}/openquatt/logs/clear`}function Ya(){let e=o.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;let t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function Ja(){return o.nativeOpen?"Niet beschikbaar":ar()?"Voorbeeld":o.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function By(e){let t=Math.max(0,Math.floor(Number(e)/1e3)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Up(e){let t=Number(e)||0;if(t>9466848e5){let r=e instanceof Date?e:new Date(t),n={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(r)}catch{return r.toLocaleString("nl-NL",n)}}return By(t)}function Ky(e){let t=Number(e)||0;if(t>9466848e5)return new Date(t).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let r=Math.max(0,Math.floor(t/1e3)),n=Math.floor(r/3600),a=Math.floor(r%3600/60),i=r%60;return`Sinds opstart: ${n}u ${a}m ${i}s`}function zy(){return o.nativeOpen?"Niet beschikbaar":ar()?Ya()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":Ya()?"Buffer aan":"Buffer uit"}function Uy(){return Ya()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function $l(){return o.entities?.debugLevel||null}function Gp(e=$l()){let t=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return t.length?t:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function Gy(e=$l()){let t=String(e?.value??e?.state??"").trim(),r=Gp(e);return r.includes(t)?t:r.includes("INFO")?"INFO":r[0]||""}function Qp(e,t=null){if(!e||!t)return!1;let r=Number(e.seq),n=Number(t.seq);if(Number.isFinite(r)&&Number.isFinite(n)&&r===n)return!0;let a=String(e.raw??e.text??"").trim(),i=String(t.raw??t.text??"").trim();if(!a||a!==i)return!1;let l=Number(e.receivedAt??e.ts??0),c=Number(t.receivedAt??t.ts??0);return Math.abs(l-c)<=2e3}function Qy(e,t){let r=Number(e.receivedAt??e.ts??0),n=Number(t.receivedAt??t.ts??0);if(r!==n)return r-n;let a=Number(e.seq??0),i=Number(t.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(t.raw??""))}function xl(e,{prepend:t=!1}={}){if(!Array.isArray(e)||e.length===0)return;let r=t?[...e,...o.webServerLogEntries]:[...o.webServerLogEntries,...e];r.sort(Qy);let n=[];for(let a of r){let i=n[n.length-1]||null;Qp(a,i)||n.push(a)}o.webServerLogEntries=n.slice(-Kp)}function Ml(e,t={}){let r=hv(e).trimEnd(),n=Number(t.receivedAt),a=Number(t.seq);return{raw:e,text:r,tone:bv(e),receivedAt:Number.isFinite(n)?n:Date.now(),seq:Number.isFinite(a)?a:void 0}}function Yy(e,t){let n=Math.max(0,t-e-1)*9e4;return Date.now()-n}function Jy(){let e=zp(),t=e.length;return e.map((r,n)=>Ml(r,{receivedAt:Yy(n,t),seq:n+1}))}function Zy(){let e=Dl();e&&(e.scrollTop=e.scrollHeight)}var Al=ko({getScroller:Dl,getToken:()=>o.webServerLogScrollRestoreToken,setToken:e=>{o.webServerLogScrollRestoreToken=e},isActive:()=>o.systemModal==="webserver-logs",preserveGrowth:!0,stickToBottom:!0}),no=Al.capture,ao=Al.queue;function Xy(){return o.root?o.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}var Yp=ko({getScroller:Xy,getToken:()=>o.cm100CommissioningScrollRestoreToken,setToken:e=>{o.cm100CommissioningScrollRestoreToken=e},isActive:()=>o.systemModal==="cm100-commissioning",preserveGrowth:!0,stickToBottom:!0}),Jp=Yp.capture,Hl=Yp.queue;function ev(){return o.root?o.root.querySelector("[data-oq-service-task-scroller]"):null}var Zp=ko({getScroller:ev,getToken:()=>o.serviceTaskModalScrollRestoreToken,setToken:e=>{o.serviceTaskModalScrollRestoreToken=e},isActive:()=>String(o.systemModal||"").startsWith("service-task-")}),Xp=Zp.capture,Rl=Zp.queue;function tv(){return o.root?o.root.querySelector("[data-oq-history-storage-scroller]"):null}var em=ko({getScroller:tv,getToken:()=>o.historyStorageModalScrollRestoreToken,setToken:e=>{o.historyStorageModalScrollRestoreToken=e},isActive:()=>o.systemModal==="history-storage"}),tm=em.capture,_l=em.queue;function ov(){return o.root?o.root.querySelector("[data-oq-settings-backup-restore-scroller]"):null}var om=ko({getScroller:ov,getToken:()=>o.settingsBackupRestoreScrollRestoreToken,setToken:e=>{o.settingsBackupRestoreScrollRestoreToken=e},isActive:()=>o.systemModal==="settings-backup-restore"}),rm=om.capture,Pl=om.queue;async function xo(e={}){if(o.nativeOpen||typeof window.fetch!="function")return;let t=e.scrollState||no(),r=e.replaceEntries===!0||o.webServerLogHistoryNeedsReconcile===!0,n=r?new Set(o.webServerLogEntries):null,a=Number(o.webServerLogHistoryRequestToken||0)+1;o.webServerLogHistoryRequestToken=a,o.webServerLogHistoryLoading=!0,o.webServerLogHistoryError="";try{let i=await window.fetch(Wy(),{headers:{"Cache-Control":"no-store"}});if(!i.ok)throw new Error(`HTTP ${i.status}`);let l=await i.json();if(o.systemModal!=="webserver-logs"||o.webServerLogHistoryRequestToken!==a)return;o.webServerLogCsrfToken=String(l.csrf_token||"");let c=nv(l),u=r?o.webServerLogEntries.filter(p=>!n.has(p)):[];r&&(o.webServerLogEntries=[],o.webServerLogRecentTail=[],o.webServerLogRecentAnchorAt=0),o.webServerLogHistoryLoaded=!0,o.webServerLogHistoryNeedsReconcile=!1,c.length>0&&(xl(c,{prepend:!0}),o.webServerLogRecentTail=c.slice(-4).map(p=>String(p.raw??p.text??"")),o.webServerLogRecentAnchorAt=Date.now()),u.length>0&&xl(u)}catch(i){o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===a&&(o.webServerLogHistoryError=i instanceof Error?i.message:"Recente logs konden niet worden opgehaald.")}finally{o.webServerLogHistoryRequestToken===a&&(o.webServerLogHistoryLoading=!1),o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===a&&(f(),ao(t))}}function rv(e,t=0){if(!e||typeof e!="object")return null;let r=String(e.raw??"").trim()||String(e.message??"").trim();return r?Ml(r,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??t)}):null}function nv(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((r,n)=>rv(r,n+1)).filter(r=>r!==null)}function av(e){if(!e||!Array.isArray(o.webServerLogRecentTail)||o.webServerLogRecentTail.length===0||Date.now()-Number(o.webServerLogRecentAnchorAt||0)>2500)return!1;let r=String(e.raw??e.text??"").trim();return r?o.webServerLogRecentTail.includes(r):!1}function iv(e,t=o.webServerLogEntries){return!e||!Array.isArray(t)||t.length===0?!1:t.some(r=>Qp(e,r))}function sv(){ar()&&o.webServerLogEntries.length===0&&Qe({webServerLogEntries:Jy()}),Qe({webServerLogCopyMessage:"",webServerLogCopyError:""}),o.systemModal="webserver-logs",f(),V(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(o.systemModal!=="webserver-logs")return;let e=no();f(),ao(e)}),Zy(),(!o.webServerLogHistoryLoaded||o.webServerLogEntries.length===0)&&xo()}function nr(){Qe({webServerLogEntries:[],webServerLogError:"",webServerLogHistoryError:"",webServerLogHistoryLoading:!1,webServerLogHistoryLoaded:!1,webServerLogHistoryNeedsReconcile:!1,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogHistoryRequestToken:o.webServerLogHistoryRequestToken+1,webServerLogRecentTail:[],webServerLogRecentAnchorAt:0}),Al.invalidate(),o.systemModal==="webserver-logs"&&f()}async function lv(){if(o.busyAction)return!1;if(o.nativeOpen||ar())return nr(),!0;if(typeof window.fetch!="function")return o.webServerLogHistoryError="De RAM-logbuffer kan niet vanuit deze browser worden geleegd.",f(),!1;let e=String(o.webServerLogCsrfToken||"");if(!e)return o.webServerLogHistoryError="De beveiligingstoken voor de RAM-logbuffer ontbreekt. Open het logboek opnieuw.",f(),!1;o.busyAction="clear-webserver-log-history",o.webServerLogHistoryError="",kt(),f();let t=!1;try{let n=e,a=!1;for(;;){let i=new URLSearchParams;i.set("csrf_token",n);let l=await window.fetch(Vy(),{method:"POST",body:i});if(!(l.status===403&&!a&&(a=!0,Qe({webServerLogCsrfToken:"",webServerLogHistoryLoaded:!1,webServerLogHistoryRequestToken:o.webServerLogHistoryRequestToken+1}),await xo(),n=String(o.webServerLogCsrfToken||""),n))){if(!l.ok)throw new Error(`HTTP ${l.status}`);break}}nr(),t=!0}catch(n){Qe({webServerLogHistoryLoaded:!1,webServerLogHistoryNeedsReconcile:!0}),o.webServerLogHistoryError=`De RAM-logbuffer kon niet worden geleegd (${n instanceof Error?n.message:"onbekende fout"}).`}finally{o.busyAction="",o.systemModal==="webserver-logs"&&f()}let r=o.webServerLogHistoryError;return o.systemModal==="webserver-logs"&&(await xo(),r&&(o.webServerLogHistoryError=r,f())),t}function cv(){let e=no();kt(),Qe({webServerLogEnabled:null,webServerLogConnected:!1,webServerLogCsrfToken:""}),nr(),o.systemModal==="webserver-logs"&&xo({scrollState:e})}function Nl(){if(ar()){kt();return}if(!(o.mounted&&!o.nativeOpen&&o.systemModal==="webserver-logs"&&o.busyAction!=="clear-webserver-log-history")){kt();return}if(o.webServerLogEnabled===!1){kt();return}o.webServerLogSource||uv()}function uv(){if(ar()){o.webServerLogEnabled=!0,o.webServerLogConnected=!1,o.webServerLogError="",f();return}if(typeof window.EventSource!="function"){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="Deze browser ondersteunt geen live logstream.",f();return}try{let e=new window.EventSource(jy());o.webServerLogSource=e,e.addEventListener("open",dv),e.addEventListener("ping",pv),e.addEventListener("log",gv),e.onerror=mv}catch(e){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",kt(),f()}}function kt(){let e=o.webServerLogSource;if(e)try{e.close()}catch{}o.webServerLogSource=null,o.webServerLogConnected=!1}function dv(){if(!o.webServerLogSource||o.nativeOpen)return;let e=o.systemModal==="webserver-logs"?no():null;o.webServerLogEnabled=!0,o.webServerLogConnected=!0,o.webServerLogError="",f(),ao(e)}pp({clearOutput:nr,closeStream:kt,resetRecoveryState:cv});function pv(){if(!o.webServerLogSource||o.nativeOpen)return;let e=o.systemModal==="webserver-logs"?no():null;o.webServerLogEnabled=!0,o.webServerLogConnected||(o.webServerLogConnected=!0,o.webServerLogError="",f(),ao(e))}function mv(){if(!o.webServerLogSource)return;let e=o.systemModal==="webserver-logs"?no():null;o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="De live logstream kon niet worden geopend.",kt(),f(),ao(e)}function gv(e){if(!o.webServerLogSource||!e||typeof e.data!="string")return;let t=no(),r=fv(e.data);if(!r)return;let n=r.split(/\r?\n/).filter(u=>u.trim()!=="");if(n.length===0)return;let i=n.map(u=>Ml(u)).filter(u=>!av(u)&&!iv(u));if(i.length===0)return;xl(i);let l=yv(),c=Dl();wv(l),vv(i,l),o.webServerLogEnabled=!0,c&&t&&ao(t,!1)}function fv(e){let t=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!t)return"";let r=t.trim();if(r.startsWith("{")&&r.endsWith("}")||r.startsWith("[")&&r.endsWith("]"))try{let n=JSON.parse(r),a=typeof n=="string"?n:n?.message??n?.msg??n?.text??n?.data??n?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return t}function hv(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function bv(e){let t=String(e??""),r=Array.from(t.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=r.length-1;i>=0;i-=1){let l=r[i][1].split(";").map(c=>Number(c)).filter(c=>Number.isFinite(c));for(let c=l.length-1;c>=0;c-=1){let u=l[c];if(u===31||u===91)return"error";if(u===33||u===93)return"warning";if(u===32||u===92)return"info";if(u===36||u===96||u===34||u===35)return"debug";if(u===37||u===90||u===38||u===97)return"verbose"}}let n=t.match(/\[(E|W|I|D|V|VV)\]/i);if(!n)return"plain";let a=n[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function wv(e){for(;o.webServerLogEntries.length>Kp;)o.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function yv(){return o.root?o.root.querySelector("[data-oq-webserver-log-output]"):null}function Dl(){return o.root?o.root.querySelector("[data-oq-webserver-log-scroller]"):null}function vv(e,t){if(!(!t||e.length===0)){t.dataset.webServerLogEmpty==="true"&&(t.dataset.webServerLogEmpty="false",t.innerHTML="");for(let r of e)t.insertAdjacentHTML("beforeend",nm(r))}}function nm(e){let t=Up(e.receivedAt),r=Ky(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(r)}">${s(t)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function Sv(e=o.webServerLogEntries){return e.length?e.map(t=>nm(t)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function qv(){let e=[];return o.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),o.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(o.webServerLogCopyMessage)}</span>
      </div>
    `),o.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogCopyError)}</p>`),o.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogHistoryError)}</p>`),o.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogError)}</p>`),e.length?e.join(""):""}function kv(){let e=Ya(),t=o.loadingEntities||!!o.busyAction,r=zy(),n=Uy(),a=Ev();return`
    <div class="oq-webserver-log-history-shell">
      ${Oe({dataValue:"webserverLogHistory",label:"RAM log history",value:r,note:n,action:`<button
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
  `}function Ev(){let e=$l();if(!e)return"";let t=Gp(e),r=Gy(e),n=o.loadingEntities||!!o.busyAction;return`
    ${Oe({dataValue:"debugLevel",label:"Logger level",value:r||"Onbekend",note:"Past het runtime logniveau aan voor nieuwe firmwaremeldingen.",action:`<label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${n?"disabled":""}>
          ${t.map(a=>`<option value="${s(a)}" ${a===r?"selected":""}>${s(a)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>`})}
  `}function Tv(){return o.webServerLogEntries.map(e=>{let t=String(e.raw??e.text??"").trimEnd();return t.trim()?`${Up(e.receivedAt)} ${t}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function Cv(){let e=Tv();if(o.webServerLogCopyMessage="",o.webServerLogCopyError="",!e){o.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",f();return}try{if(!await ho(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.webServerLogCopyMessage=`${o.webServerLogEntries.length} logregel${o.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(t){o.webServerLogCopyError=t instanceof Error?t.message:"Kopi\xEBren naar het klembord is niet gelukt."}o.systemModal==="webserver-logs"&&f()}var xv={"open-webserver-log-modal":()=>sv(),"clear-webserver-log-output":()=>lv(),"copy-webserver-log-output":()=>Cv()};function am(e){return ie(xv,e)}function im(){let e=ar(),t=o.busyAction==="clear-webserver-log-history",r=!!o.busyAction||o.webServerLogHistoryLoading||!e&&!o.nativeOpen&&!o.webServerLogCsrfToken;return te({id:"system",titleId:"oq-webserver-log-modal-title",kicker:"Diagnostiek",title:"OpenQuatt log",copy:e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde.",className:"oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal",closeAction:"close-system-modal",closeLabel:"Sluit logboek",body:`
        ${kv()}
        ${qv()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${o.webServerLogEntries.length===0?"true":"false"}">
            ${Sv()}
          </div>
        </div>`,actions:`
      <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${o.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
      <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output" ${r?"disabled":""}>${t?"Legen...":"Legen"}</button>
      <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
    `})}function $v(){let e=o.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function Ll(e){return $v().includes(e)}function Xa(){let e=Dr(),t=oe(),r=st(),n=Fp();return e!=="heatpump_controller_q"||t!=="single"&&t!=="duo"||r!=="wifi"&&r!=="eth"||!n?null:{canSwitch:v("firmwareUpdateTarget")&&Ll("alternate connection")&&v("installFirmwareUpdateTarget"),currentConnection:r,targetConnection:n,currentLabel:it(r),targetLabel:it(n),currentBuildLabel:qo(t,r),targetBuildLabel:qo(t,n)}}function ei(){let e=Dr(),t=oe(),r=jp(),n=st(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||t!=="single"&&t!=="duo"||!r||!a.includes(n)?null:{canSwitch:v("firmwareUpdateTarget")&&Ll("alternate topology")&&v("installFirmwareUpdateTarget"),currentTopology:t,targetTopology:r,currentConnection:n,targetConnection:n,currentLabel:er(t),targetLabel:er(r),currentBuildLabel:qo(t,n),targetBuildLabel:qo(r,n)}}function ti(e,t){let r=Dr(),n=oe(),a=st(),i=Xo(e),l=Pn(t),c=i&&i!==n,u=l&&l!==a,p=c&&u?"alternate topology and connection":c?"alternate topology":u?"alternate connection":"current build",g=r==="heatpump_controller_q"&&["single","duo"].includes(n)&&["single","duo"].includes(i)&&["wifi","eth"].includes(a)&&["wifi","eth"].includes(l),w=v("firmwareUpdateTarget"),y=Ll(p),h=v("installFirmwareUpdateTarget");return{available:g,canSwitch:g&&p!=="current build"&&w&&y&&h,targetEntityAvailable:w,targetOptionAvailable:y,installActionAvailable:h,currentTopology:n,currentConnection:a,targetTopology:i,targetConnection:l,targetOption:p,currentBuildLabel:qo(n,a),targetBuildLabel:qo(i,l)}}function sr(e=o.updateTestFirmwarePr){let t=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(t)?t:""}function jr(){let e=Dr(),t=oe(),r=st(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||t!=="single"&&t!=="duo"||!a.connections.includes(r))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};let i=`openquatt-${a.slug}-${t}-${r}`,l=t==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,md5FileName:`${i}.firmware.ota.bin.md5`,label:`${a.label} ${l} ${it(r)}`}}function Nn(e=sr(),t=jr()){if(!e||!t.available)return null;let n=`${`https://github.com/jeroen85/OpenQuatt/releases/download/pr-${e}`}/${t.otaFileName}`;return{otaUrl:n,md5Url:`${n}.md5`,releaseApiUrl:`https://api.github.com/repos/jeroen85/OpenQuatt/releases/tags/pr-${e}`}}function Mo(){if(ct())return"Controleren";let e=Et();if(e)return e.phaseLabel;if(Fl())return"Bijgewerkt";if(ir())return"Bezig";if(cr())return"Beschikbaar";let t=um();if(t!==null&&t<=0)return"Actueel";let r=Dt();return typeof r.updateLabel=="string"&&r.updateLabel.trim()?r.updateLabel.trim():r.updateAvailable===!0?"Beschikbaar":r.updateAvailable===!1||Wl()?"Actueel":me()?"Nog niet gecontroleerd":"\u2014"}function me(){return o.entities.firmwareUpdate||null}function oi(){let e=me();return e?String(e.state??e.value??"").trim().toLowerCase():""}function Mv(){let e=o.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function Dn(){return Mv().toLowerCase()}function cm(){let e=o.entities.firmwareUpdateProgress;if(!e)return Number.NaN;let t=Number(e.value??e.state);return Number.isNaN(t)?Number.NaN:Math.max(0,Math.min(100,t))}function Ol(){let e=String(o.updateInstallTargetVersion||"").trim(),t=se();return!e||!t?!1:Ln(t,e)>=0}function Av(e=me()||{}){let t=io(e),r=se(e);return!t||!r?!1:Ln(r,t)>=0}function Il(){return(Ol()||Av())&&!ct()&&!Fr()&&!cr()}function Fl(){return(o.updateInstallCompleted||Il())&&!ct()&&!Et()&&!cr()}function lr(){Me({updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallStatusPollObserved:!1,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:""}),Ov()}function Ot(){o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallStatusPollObserved=!1}function Te(){Me({updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:""})}function Ze(e={}){Me({...e.clearPr?{updateTestFirmwarePr:""}:{},updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null})}function Hv(){let e=Dn(),t=cm(),r=e!=="rebooting"||!o.updateInstallBusy||o.updateInstallStatusPollObserved;if((e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting")&&r){o.updateInstallPhaseHint=e,Number.isNaN(t)||(o.updateInstallProgressHint=e==="rebooting"?Math.max(t,100):t);return}if(o.updateInstallBusy){if(o.updateInstallMode==="normal"&&Ol()){o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100;return}o.controlNotice.includes("opnieuw is opgestart")&&(o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100)}}function Fr(){let e=Dn();return e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting"}function Rv(){let e=Dn();return e==="error"?"De firmware-installatie op het device is mislukt. Controleer de netwerkverbinding en probeer opnieuw.":e==="aborted"?"De firmware-installatie is door het device afgebroken. Probeer de installatie opnieuw.":""}function Et(){Hv();let e=Dn(),t=e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting"&&(!o.updateInstallBusy||o.updateInstallStatusPollObserved),r=t?e:o.updateInstallPhaseHint,n=cm(),a=Number.isNaN(o.updateInstallProgressHint)?0:Math.round(o.updateInstallProgressHint),i=t&&!Number.isNaN(n)?Math.round(n):a;return!Fr()&&!o.updateInstallBusy?null:r==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:o.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":o.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:r==="retrying"?{phaseLabel:"Opnieuw proberen",percent:0,copy:"De eerste verbinding voor de firmwaredownload mislukte. OpenQuatt probeert het automatisch nog \xE9\xE9n keer."}:r==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${Ye()} gedownload en ge\xEFnstalleerd.`:o.updateInstallMode==="connection-switch"?`De ${it(o.updateInstallTargetConnection)}-build wordt nu naar ${Ye()} verzonden.`:o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?`De ${qo(o.updateInstallTargetTopology,o.updateInstallTargetConnection)}-build wordt nu naar ${Ye()} verzonden.`:`Firmware wordt nu naar ${Ye()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${Ye()}.`:o.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${it(o.updateInstallTargetConnection)} is gestart.`:o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?`Opstellingswissel naar ${er(o.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${Ye()}.`}}function io(e=me()||{}){let t=String(e.latest_version||"").trim();if(t)return t;let r=String(e.value||"").trim(),n=String(e.current_version||"").trim();return r&&r!==n&&/^v/i.test(r)?r:""}function se(e=me()||{}){let t=String(o.entities.projectVersionText?.state||o.entities.projectVersionText?.value||"").trim();return t||String(e.current_version||"").trim()}function _v(e=me()||{}){let t=se(e),r=String(e.current_version||"").trim();return!t||!r||t===r?!1:Ln(t,r)>0}function jl(e=me()||{},t=$o()){let r=String(t||"").trim().toLowerCase(),n=String(e.release_url||"").trim().toLowerCase(),a=io(e).toLowerCase();if(!r||r==="\u2014")return!0;if(r==="dev"){if(n){if(n.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(r==="main"){if(n){if(n.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function sm(e){let r=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return r?{major:Number(r[1]),minor:Number(r[2]),patch:Number(r[3]),prereleaseTag:r[4]||"",prereleaseNumber:r[5]?Number(r[5]):null}:null}function Ln(e,t){let r=sm(e),n=sm(t);if(!r||!n)return 0;if(r.major!==n.major)return r.major>n.major?1:-1;if(r.minor!==n.minor)return r.minor>n.minor?1:-1;if(r.patch!==n.patch)return r.patch>n.patch?1:-1;let a=!r.prereleaseTag,i=!n.prereleaseTag;return a!==i?a?1:-1:r.prereleaseTag!==n.prereleaseTag?r.prereleaseTag>n.prereleaseTag?1:-1:r.prereleaseNumber!==n.prereleaseNumber?(r.prereleaseNumber||0)>(n.prereleaseNumber||0)?1:-1:0}function ir(){if(Il())return!1;let e=oi();return o.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function ct(){let e=oi();return o.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function cr(){let e=oi();if(!jl())return!1;let t=um();return t!==null?t>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:Dt().updateAvailable===!0}function Wl(){let e=oi();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||_v()}function Vl(){let e=me()||{},t=se(e)||"\u2014",r=jl(e)?io(e):"",n=r?Ln(r,t):null;return!ct()&&n!==null&&n<=0&&(r=""),{current:t,latest:r||"\u2014"}}function um(){let{current:e,latest:t}=Vl();return e==="\u2014"||t==="\u2014"?null:Ln(t,e)}function dm(e=$o()){let t=String(e||"").trim().toLowerCase();return cs[t]||cs.main}function Pv(){let e=String((me()||{}).release_url||"").trim(),t=dm();return!e||t.includes("/dev-latest")&&!e.includes("/dev-latest")||!t.includes("/dev-latest")&&e.includes("/dev-latest")?t:e}function Nv(){return Ye()}function $o(){return String(T("firmwareUpdateChannel")||o.entities.releaseChannelText?.state||o.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function Dv(){return Vl().latest!=="\u2014"}function lm(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function Lv(e,t=me()||{}){let r=lm(e);return r?lm(`${t.title||""} ${t.summary||""}`).includes(r):!0}function pm(e){return new Promise(t=>window.setTimeout(t,e))}function Wr(e=fo){let r=Date.now()+e;o.firmwareOtaQuietUntil=Math.max(Number(o.firmwareOtaQuietUntil||0),r),o.pendingEntitySyncOptions=null,Vd(),typeof kt=="function"&&kt(),o.firmwareOtaQuietTimer&&window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=window.setTimeout(()=>{o.firmwareOtaQuietTimer=null,o.firmwareOtaQuietUntil=0,!o.updateInstallBusy&&!o.nativeOpen&&js()},e)}function Ov(){o.firmwareOtaQuietTimer&&(window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=null),o.firmwareOtaQuietUntil=0,o.nativeOpen||js()}function mm(){return o.deviceReconnectMode?te({modalId:"reconnect",titleId:"oq-reconnect-modal-title",kicker:"Systeem",title:Ed(),modalClass:"oq-helper-modal--reconnect",role:"status",ariaLive:"polite",bodyMarkup:`
        <p class="oq-helper-modal-copy">${s(Td())}</p>
        <div class="oq-helper-reconnect-status">
          <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
          <div>
            <strong>${s(qd())}</strong>
            <span>${s(kd())}</span>
          </div>
        </div>
      `}):""}function On(e=$o()){let t=me()||{},r=se(t);o.entities.firmwareUpdate={...t,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:dm(e),current_version:r}}async function In(e={}){let t=String(e.expectedBuildLabel||"").trim();for(let r=0;r<6;r+=1){await pm(r===0?900:1200),await V(Yt,"all",{forceMissing:!0});let n=jl(),a=!t||Lv(t),i=Dv(),l=ct(),c=Mo();if(n&&a&&(i||!l&&c!=="Nog niet gecontroleerd"))return!0}return!1}async function ur(e={}){let t=!1,r=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,n=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await pm(a===0?r:n);try{let i=o.entities.firmwareUpdateStatus;await V(Yt,"all",{forceMissing:!0});let l=Dn();o.entities.firmwareUpdateStatus!==i&&(o.updateInstallStatusPollObserved=!0);let c=Rv();if(c){let u=new Error(c);throw u.firmwareInstallTerminal=!0,u}if(l==="rebooting"&&o.updateInstallStatusPollObserved&&wo("ota"),f(),o.updateInstallMode==="connection-switch"){let u=Pn(o.updateInstallTargetConnection);if(u&&st()===u&&!Fr()&&!ir())return!0}else if(o.updateInstallMode==="topology-switch"){let u=Xo(o.updateInstallTargetTopology);if(u&&oe()===u&&!Fr()&&!ir())return!0}else if(o.updateInstallMode==="build-switch"){let u=Xo(o.updateInstallTargetTopology),p=Pn(o.updateInstallTargetConnection);if(u&&p&&oe()===u&&st()===p&&!Fr()&&!ir())return!0}else if(Ol()||Il()||Wl()&&!Fr()&&!ir())return!0}catch(i){if(i?.firmwareInstallTerminal)throw i;t||(o.controlNotice="Wachten tot het device opnieuw is opgestart...",f(),t=!0)}}return!1}function Iv(){let e=$o(),t=Et();if(t)return t.copy;if(Fl()){let r=o.updateInstallCompletedVersion||se()||$o();return`${Ye()} draait nu op ${r}.`}return ir()?`OTA-update wordt voorbereid voor ${Ye()}. Het device kan kort herstarten.`:ct()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:cr()?"Er staat een nieuwere firmware klaar.":Wl()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function gm(){return!!(o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen)}function Za(e,t,r,n,a=!1){return`
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
    `}function Fv(e,t,r,n){if(!gm())return"";let i=!!(Et()||o.updateInstallBusy||ct());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${i?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?Za("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${t.targetLabel}`,o.firmwareConnectionSwitchOpen,i):""}
          ${r?Za("toggle-firmware-topology-switch","Opstelling wisselen",`Naar ${n.targetLabel}`,o.firmwareTopologySwitchOpen,i):""}
          ${Za("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",o.updateManualUploadOpen,i)}
          ${Za("toggle-firmware-test","Testfirmware","PR-release installeren",o.updateTestFirmwareOpen,i)}
        </div>
        ${jv()}
        ${Wv()}
        ${Bv()}
        ${Vv()}
      </div>
    `}function jv(){let e=Xa();if(!e||!o.firmwareConnectionSwitchOpen)return"";let r=!!(Et()||o.updateInstallBusy||ct()),n=!!o.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",c=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s($o())}-build voor de andere netwerkverbinding.</span>
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
    `}function Wv(){let e=ei();if(!e||!o.firmwareTopologySwitchOpen)return"";let r=!!(Et()||o.updateInstallBusy||ct()),n=!!o.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",c=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s($o())}-build voor de andere Single/Duo-opstelling.</span>
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
    `}function Vv(){if(!o.updateTestFirmwareOpen)return"";let t=!!(Et()||o.updateInstallBusy||ct()),r=sr(),n=jr(),a=Nn(r,n),i=!!(n.available&&v("firmwareTestOtaUrl")&&v("firmwareTestOtaMd5Url")&&v("installFirmwareTestOta")),l=!!(r&&i),c=o.updateTestFirmwareBuild||null,u=n.available?n.label:n.error,p=a?n.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
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
            <strong class="oq-helper-modal-value">${s(u)}</strong>
          </div>
          <div class="oq-firmware-advanced-card oq-firmware-test-card--asset">
            <span class="oq-helper-modal-label">OTA-bestand</span>
            <strong class="oq-helper-modal-value" data-oq-firmware-test-asset-note="true">${s(p)}</strong>
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
    `}function Bv(){if(!o.updateManualUploadOpen)return"";let t=!!(Et()||o.updateInstallBusy||ct()),r=String(o.updateManualUploadFileName||o.updateManualUploadFile?.name||"").trim();return`
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
    `}function fm(){if(!o.updateModalOpen)return"";let e=me(),t=o.entities.firmwareUpdateChannel||null,{current:r,latest:n}=Vl(),a=ct(),i=ir(),l=cr(),c=Iv(),u=Et(),p=Fl(),g=Pv(),w=p?"Firmware-update afgerond":u||i?"Firmware-update bezig":a?"Controleren op firmware-update":Nv(),y=t?Array.isArray(t.option)?t.option:Array.isArray(t.options)?t.options:[]:[],h=Xa(),m=ei(),d=!!(h&&!p),b=!!(m&&!p);return te({id:"firmware-update",titleId:"oq-update-modal-title",kicker:"OTA-update",title:w,copy:c,backdropClass:a||i||u?"is-busy":"",className:"oq-helper-modal--firmware oq-helper-modal--scrollable",closeAction:"close-update-modal",closeLabel:"Sluit update-popup",body:`
          ${p?`
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
              <strong class="oq-helper-modal-value">${s(Mo())}</strong>
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
              <strong class="oq-helper-modal-value">${s($o())}</strong>
            </div>
          </div>
          ${y.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${y.map(S=>`
                  <option value="${s(S)}" ${String(T("firmwareUpdateChannel")||"")===S?"selected":""}>${s(S)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen. Bestaande OpenQuatt-instellingen blijven behouden.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||u?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${p?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||u||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${g?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(g)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${gm()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||u?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${Fv(d,h,b,m)}`})}function It(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(o.debugRecordingSamples)?o.debugRecordingSamples.length:0}function Ft(e=o.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function ni(e=o.debugRecordingDeviceStatus){return Ft(e)&&e?.frozen===!0&&!e?.active}function dr(e){let t=Math.max(0,Math.round(Number(e||0)/1e3)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return r>0?`${r}u ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(a).padStart(2,"0")}s`:`${a}s`}function bm(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):wm()}function wm(){if(o.debugRecordingDeviceStatus)return Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!o.debugRecordingStartedAt)return 0;let e=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(o.debugRecordingStartedAt||e))}function Fn(){return o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":ni()?"Rolling gestopt":o.debugRecordingActive&&Ft()?"Rolling actief":o.debugRecordingActive?"Bezig met opnemen":It()>0?"Voltooid":"Niet gestart"}function ai(){return ni()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":o.debugRecordingActive&&Ft()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":o.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":It()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function ym(){return ni()?"Gestopt":o.debugRecordingActive&&Ft()?`Rolling \xB7 ${dr(bm())}`:o.debugRecordingActive?`Loopt \xB7 ${dr(vm())}`:It()>0?"Klaar":Fn()}function Kv(){let e=Number(o.debugRecordingSelectedMinutes||15);return Ma.map(r=>Number(r.minutes)).includes(e)?e:Number(Ma[0]?.minutes||15)}function zv(e){o.debugRecordingActive||(La({debugRecordingSelectedMinutes:Math.max(1,Number(e)||15),debugRecordingNotice:"",debugRecordingError:""}),f())}function vm(){return Ft()?0:o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.remaining_s||0)*1e3):o.debugRecordingActive?Math.max(0,Number(o.debugRecordingEndsAt||0)-Date.now()):0}function Uv(){if(o.debugRecordingDeviceStatus){if(Ft()){let a=Math.max(1,Number(o.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,It()/a*100))}let r=Math.max(1,Number(o.debugRecordingDeviceStatus.duration_s||0)),n=Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0));return!o.debugRecordingActive&&It()>0?100:Math.max(0,Math.min(100,n/r*100))}if(!o.debugRecordingActive||!o.debugRecordingStartedAt||!o.debugRecordingEndsAt)return It()>0?100:0;let e=Math.max(1,Number(o.debugRecordingEndsAt)-Number(o.debugRecordingStartedAt)),t=Math.max(0,Date.now()-Number(o.debugRecordingStartedAt));return Math.max(0,Math.min(100,t/e*100))}function Sm(e=o.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function qm(e){if(e?.recording?.active)return;let t=Sm(e);if(t){o.debugRecordingAcknowledgedId=t;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",t)}catch{}}}function Bl(){let e=o.debugRecordingDeviceStatus,t=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&t===0)return"";let r=!!e.active;if(!r&&Sm(e)===o.debugRecordingAcknowledgedId)return"";let n=Ft(e),a=dr(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=dr(Math.max(0,Number(e.remaining_s||0))*1e3),l=r?n?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:n?"Rolling gestopt":"Debug klaar",c=r?n?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:n?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
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
  `}function Gv(){if(!o.root)return;if(o.interfacePanelOpen){f();return}let e=o.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;let t=e.querySelector(".oq-debug-recording-header-status"),r=Bl();if(!r){t?.remove();return}if(t){t.outerHTML=r;return}e.insertAdjacentHTML("afterbegin",r)}function Qv(){if(!o.root)return;let e=o.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;let t=e.querySelector(".oq-settings-system-row-value"),r=e.querySelector(".oq-settings-system-row-note");t&&(t.textContent=Fn()),r&&(r.textContent=ai())}function Kl(e){let t={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return t[e]||t.status}function Yv(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${Kl(e)}</span>`}function so(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${Kl(e)}</span>`}function Jv(){return[...Wo]}function Zv(){let e=[];return Wo.forEach((t,r)=>{let n=o.entities?.[t]||{},a=String(n.uom??n.unit_of_measurement??"").trim();a&&e.push([r,a])}),e}function Xv(e){return Array.isArray(e)?e.map((t,r)=>t===null?null:[r,t]).filter(Boolean):[]}function ii(){o.debugRecordingTimer&&(window.clearTimeout(o.debugRecordingTimer),o.debugRecordingTimer=null)}function pr(){o.debugRecordingDevicePollTimer&&(window.clearTimeout(o.debugRecordingDevicePollTimer),o.debugRecordingDevicePollTimer=null)}function Ao(e){return`${_e()}/openquatt/debug-recording/${e}`}function Vr(e){let t=e&&typeof e=="object"?e:{};o.debugRecordingDeviceStatus=t,o.debugRecordingActive=!!t.active,o.debugRecordingStartedAt=t.active||Number(t.sample_count||0)>0?Date.now()-Math.max(0,Number(t.elapsed_s||0)*1e3):0,o.debugRecordingEndsAt=t.active?Date.now()+Math.max(0,Number(t.remaining_s||0)*1e3):0,o.debugRecordingLastSampleAt=Number(t.sample_count||0)>0?Date.now():0}function zl(){Vr({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function eS(){let e=await window.fetch(Ao("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();return Vr(t),t}function jn(e=2e3){pr(),o.debugRecordingActive&&(o.debugRecordingDevicePollTimer=window.setTimeout(()=>{si({silent:!0})},Math.max(0,Number(o.systemModal==="debug-recording"?e:5e3)||0)))}async function si(e={}){e.silent||(o.debugRecordingBusy=!0,o.debugRecordingError="",f());try{await eS(),!o.debugRecordingActive&&e.silent&&(o.debugRecordingNotice="Debugopname is afgerond."),jn()}catch(t){zl(),o.debugRecordingError=`Status kon niet worden opgehaald. ${t.message||String(t)}`}finally{e.silent||(o.debugRecordingBusy=!1),!e.silent||o.systemModal==="debug-recording"?f():(Gv(),Qv())}}async function km(){let e=Sl(Wo,"state"),t=null;for(let r=0;r<e.length;r+=1){let n=await window.fetch(Ao(`configure?reset=${r===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[r].body});if(!n.ok)throw new Error(`configuratie HTTP ${n.status}`);t=await n.json()}if(Number(t?.entity_field_count||0)!==Wo.length)throw new Error(`onvolledige debugset (${Number(t?.entity_field_count||0)}/${Wo.length})`);return t}async function tS(e){let t=Math.max(1,Number(e)||15);ii(),pr(),La({debugRecordingBusy:!0,debugRecordingError:"",debugRecordingNotice:"",debugRecordingSamples:[],debugRecordingEvents:[],debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingDeviceBundle:null,debugRecordingLastSampleAt:0,debugRecordingSequence:0}),f();try{await km();let r=await window.fetch(Ao(`start?duration_s=${encodeURIComponent(t*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.json();Vr(n),jn()}catch(r){zl(),o.debugRecordingError=`Debugopname kon niet worden gestart. ${r.message||String(r)}`}finally{o.debugRecordingBusy=!1,f()}}async function oS(){ii(),pr(),La({debugRecordingBusy:!0,debugRecordingError:"",debugRecordingNotice:"",debugRecordingSamples:[],debugRecordingEvents:[],debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingDeviceBundle:null,debugRecordingLastSampleAt:0,debugRecordingSequence:0}),f();try{await km();let e=await window.fetch(Ao("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();Vr(t),jn()}catch(e){zl(),o.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,f()}}async function rS(){let e=await window.fetch(Ao("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();return Vr(t),pr(),t}async function nS(){ii(),o.debugRecordingBusy=!0,o.debugRecordingError="",f();try{await rS(),o.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){o.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,f()}}async function aS(e={}){ii(),pr(),o.debugRecordingBusy=!0,o.debugRecordingError="",f();try{let t=await window.fetch(Ao("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();Vr(r),o.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(t){o.debugRecordingError=`Debugopname kon niet worden gestopt. ${t.message||String(t)}`}finally{o.debugRecordingBusy=!1,f()}}function hm(e={}){let t=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:o.debugRecordingStartedAt?new Date(Number(o.debugRecordingStartedAt)).toISOString():"",ended_at:t?new Date(t).toISOString():"",active:!!o.debugRecordingActive,duration_s:o.debugRecordingStartedAt?Math.round(Math.max(0,t-Number(o.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(Uu/1e3),sample_count:It(),column_count:Wo.length,storage:"browser"},columns:Jv(),units:Zv(),initial:Xv(o.debugRecordingInitialValues),samples:o.debugRecordingSamples||[],events:o.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function ri(e){return JSON.stringify(e)}function iS(){let e=Number(o.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([ri(hm())]).size}catch{return ri(hm()).length}}function sS(e){let t=Math.max(0,Number(e)||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${(t/1024).toFixed(1)} kB`:`${Math.round(t)} B`}function lS(e){let t=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),r=String(t).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${r}.oqdebug.json`}async function cS(){if(It()===0){o.debugRecordingError="Er is nog geen debugopname om te downloaden.",f();return}o.debugRecordingBusy=!0,o.debugRecordingError="";let e=o.debugRecordingActive&&Ft();f();try{let t=await window.fetch(Ao("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();o.debugRecordingDeviceBundle=r,Rs(lS(r),ri(r),"application/json"),qm(r),o.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{o.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{o.debugRecordingBusy=!1,f()}}async function uS(){if(It()===0){o.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",f();return}o.debugRecordingBusy=!0,o.debugRecordingError="";let e=o.debugRecordingActive&&Ft();f();try{let t=await window.fetch(Ao("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();if(o.debugRecordingDeviceBundle=r,!await ho(ri(r)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");qm(r),o.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{o.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{o.debugRecordingBusy=!1,f()}}var dS={"open-debug-recording-modal":()=>(o.systemModal="debug-recording",o.debugRecordingError="",o.debugRecordingNotice="",f(),si()),"start-debug-recording":e=>tS(e.dataset.debugMinutes||15),"start-rolling-debug-recording":()=>oS(),"select-debug-recording-duration":e=>zv(e.dataset.debugMinutes||15),"stop-debug-recording":()=>aS(),"freeze-debug-recording":()=>nS(),"download-debug-recording":()=>cS(),"copy-debug-recording":()=>uS()};function Em(e,t){return ie(dS,e,t)}function Tm(){let e=o.debugRecordingActive,t=Ft(),r=ni(),n=It(),a=o.debugRecordingBusy,i=sS(iS()),l=Array.isArray(o.debugRecordingDeviceBundle?.events)?o.debugRecordingDeviceBundle.events.length:Array.isArray(o.debugRecordingEvents)?o.debugRecordingEvents.length:0,c=Kv(),u=vm(),p=bm(),g=Uv(),w=n>0,y=`${g.toFixed(1)}%`,h=[{icon:"status",label:"Status",value:Fn()},{icon:"clock",label:t?"Retentie":"Duur",value:dr(t?p:wm())},{icon:"samples",label:"Samples",value:String(n)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:o.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],m=o.debugRecordingError?{kind:"error",icon:"alert",text:o.debugRecordingError}:o.debugRecordingNotice?{kind:"success",icon:"check",text:o.debugRecordingNotice}:null;return te({id:"system",titleId:"oq-debug-recording-modal-title",kicker:"Diagnostiek",title:"Debugopname",copy:ai(),className:"oq-debug-recording-modal",closeAction:"close-system-modal",closeLabel:"Sluit debugopname",body:`
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${Kl("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(t?`Laatste ${dr(p)} bewaard`:`Nog ${dr(u)}`)}</span>
                <strong>${s(t?`${n}/${Number(o.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(g)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(y)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${h.map(d=>`
              <div class="oq-debug-recording-stat">
                <dt>${Yv(d.icon)}${s(d.label)}</dt>
                <dd>${s(d.value)}</dd>
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
              ${Ma.map(d=>{let b=Number(d.minutes)===c;return`
                  <button
                    class="oq-debug-recording-segment${b?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${d.minutes}"
                    aria-pressed="${b?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(d.label)}
                  </button>
                `}).join("")}
            </div>
          </section>
        `}
        <div class="oq-debug-recording-actions">
          ${e&&t?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="freeze-debug-recording" ${a?"disabled":""}>${so("stop")}Stop rolling</button>
          `:e?`
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${a?"disabled":""}>${so("stop")}Stop opname</button>
          `:r?`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${so("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${so("activity")}Hervat rolling</button>
          `:`
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${c}" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${so("play")}Start opname</button>
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="start-rolling-debug-recording" ${a||o.debugRecordingDeviceStatus?.available===!1?"disabled":""}>${so("activity")}Start rolling</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!w||a?"disabled":""}>${so("download")}${e&&t?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!w||a?"disabled":""}>${so("copy")}${e&&t?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${m?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${m.kind}" role="status">
              ${so(m.icon)}
              <span>${s(m.text)}</span>
            </p>
          `:""}
        </div>`})}function xm(e){o.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",o.overviewTheme)}catch{}}function Wn(e){o.interfacePanelOpen=e===!0}function Ul(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function li(e,t={}){o.settingsGroup=Le.has(e)?e:fe[0].id;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}t.syncUrl!==!1&&o.appView==="settings"&&Qo(t.syncMode||"replace")}function $m(e){o.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",o.hpVisualMode)}catch{}}function Mm(e){o.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",o.hpLayoutMode)}catch{}}function pS(e){if(o.reducedMotion=!!e?.matches,o.reducedMotion){$n();return}Go()}function mS(){let e=ks();!e||o.motionPreferenceMedia===e||(o.motionPreferenceMedia=e,o.motionPreferenceListener=pS,typeof e.addEventListener=="function"?e.addEventListener("change",o.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(o.motionPreferenceListener),o.reducedMotion=!!e.matches)}function gS(){return Object.keys(o.entities).length>0}function fS(){return qs+Math.floor(Math.random()*(nd-qs+1))}function hS(){return(document.hidden?vn:Ju)+fS()}function Am(e=hS()){o.pollTimer||o.nativeOpen||o.updateInstallBusy||Wa()||(o.pollTimer=window.setTimeout(async()=>{o.pollTimer=null,await ye(),Am()},e))}function Gl(){Am()}function Ql(){o.pollTimer&&(window.clearTimeout(o.pollTimer),o.pollTimer=null)}Wd({start:Gl,stop:Ql});function bS(){o.nativeOpen||(Ql(),Gl(),document.hidden||ye({forceProbe:!0}))}function ci(e={}){if(Vn(),o.nativeOpen){Ql(),$n(),o.nativeFrontendLoaded||ui();return}if(Go(),Gl(),e.refresh!==!1){if(!gS()){_p();return}ye({forceFast:!0})}}function wS(){let e=An()||yo(),t=e==="settings"?Gs()||o.settingsGroup:"",r=e==="control"?Ks()||"status":o.controlReplayTab,n=e==="control"?zs()||"last24":o.controlReplayWindow,a=e==="control"?Us():null;if(!(e===o.appView&&(e!=="settings"||t===o.settingsGroup)&&(e!=="control"||r===o.controlReplayTab&&n===o.controlReplayWindow&&(!a||a.start===o.controlReplayCustomStart&&a.end===o.controlReplayCustomEnd)))){if(o.appView=e,e==="control"&&(o.controlReplayTab=r,o.controlReplayWindow=n,o.controlReplayCustomStart=a?.start||"",o.controlReplayCustomEnd=a?.end||"",o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,o.controlReplayCustomPeriodError=""),e==="settings"&&t){o.settingsGroup=t;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}}f(),ye({forceFast:!0})}}function Vn(){o.nativeApp&&(o.nativeApp.classList.add("oq-native-app"),o.nativeApp.classList.toggle("oq-native-app--collapsed",!o.nativeOpen),o.nativeApp.setAttribute("aria-hidden",o.nativeOpen?"false":"true"))}function Hm(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Cm,{once:!0}):Cm(),window.addEventListener("pointermove",Yd),window.addEventListener("pointerup",Jd),window.addEventListener("popstate",wS),document.addEventListener("visibilitychange",bS)}function Cm(){yS();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),o.nativeApp=e,o.nativeFrontendLoaded=Array.from(document.scripts).some(t=>t.src===us),o.mounted||(vS(e),o.mounted=!0,ci()),Vn(),o.nativeOpen||(ye(),si({silent:!0}))}function yS(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function vS(e){let t=document.createElement("section");t.id="oq-helper-root",t.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(t,e),t.addEventListener("click",zd),t.addEventListener("change",Kd),t.addEventListener("input",Ud),t.addEventListener("keydown",Gd),t.addEventListener("wheel",ep,{passive:!1}),t.addEventListener("focusin",Ws),t.addEventListener("focusout",Ws),t.addEventListener("mouseover",Xd),t.addEventListener("mouseout",Zd),t.addEventListener("pointerdown",Qd),o.root=t,mS();let r=An()||yo(),n=r==="settings"?Gs():"",a=r==="control"?Ks():"",i=r==="control"?zs():"",l=r==="control"?Us():null;n&&li(n,{syncUrl:!1}),a&&(o.controlReplayTab=a),i&&(o.controlReplayWindow=i,o.controlReplayCustomStart=l?.start||"",o.controlReplayCustomEnd=l?.end||""),Pt(r,{syncMode:"replace",forceSync:!0}),xn(),f()}function SS(e){return new Promise((t,r)=>{if(!e){t();return}let n=Array.from(document.scripts).find(i=>i.src===e);if(n){if(n.dataset.loaded==="true"){t();return}n.addEventListener("load",()=>t(),{once:!0}),n.addEventListener("error",i=>r(i),{once:!0});return}let a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",t()},{once:!0}),a.addEventListener("error",i=>r(i),{once:!0}),document.head.appendChild(a)})}async function ui(){if(!(o.nativeFrontendLoaded||o.nativeFrontendLoading)){o.nativeFrontendLoading=!0,o.nativeOpen&&f();try{await SS(us),o.nativeFrontendLoaded=!0}catch(e){o.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,o.nativeOpen=!1,Ul("app"),f(),ci()}finally{o.nativeFrontendLoading=!1,o.nativeOpen&&f()}}}function Bn(){let e=o.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function qS(){return"Login"}function kS(){let e=o.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function Kn(){let e=o.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function Br(){let e=o.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?"Herstart nodig":e.transport_active===!0?"Aan":e.transport_active===!1?"Uit":e.enabled?"Aan":"Uit":"Laden..."}function Kr(){let e=o.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?e.enabled===!0&&e.transport_active===!1?"API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu voor Home Assistant.":e.enabled===!1&&e.transport_active===!0?"API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API beveiligd.":e.key?"Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik.":"Deze wijziging wordt actief na herstart.":e.transport_active===!0?"API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.":"De native API staat nu open op je lokale netwerk.":"API-encryptie wordt geladen."}function ES(){return"ESPHome API encryption"}function TS(){let e=o.apiSecurityStatus;return e?e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active?e.enabled===!0&&e.transport_active===!1?"API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu alvast voor Home Assistant.":e.enabled===!1&&e.transport_active===!0?"API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API nog beveiligd.":"Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":e.transport_active===!0?"De native API is beveiligd. Je kunt de sleutel hier bekijken, kopi\xEBren of vernieuwen.":"API-encryptie staat uit. Schakel in om een sleutel te bekijken, kopi\xEBren of vernieuwen.":"We halen de huidige API-beveiliging op."}function CS(){let e=o.apiSecurityStatus;if(!e)return"Laden...";let t=!!(e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active);return t&&e.enabled===!0&&e.transport_active===!1?"Annuleer inschakelen":t&&e.enabled===!1&&e.transport_active===!0?"Annuleer uitschakelen":e.enabled?"Uitschakelen":"Inschakelen"}function xS(){let e=o.apiSecurityStatus;return e?e.key?"Vernieuw sleutel":"Genereer sleutel":"Laden..."}function Rm(e,t,r="",n=!1){return`
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
    `}function _m(){let e=o.apiSecurityStatus||{},t=e.enabled===!0,r=!!e.key,n=!!(e.pending_restart||typeof e.enabled=="boolean"&&typeof e.transport_active=="boolean"&&e.enabled!==e.transport_active),a=r||e.transport_active===!0||n,i=o.apiSecurityNotice,l=o.apiSecurityError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.apiSecurityError)}</div>`:"";return te({id:"system",titleId:"oq-api-security-modal-title",kicker:"Toegang",title:ES(),copy:TS(),className:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit API-beveiliging popup",body:`
          ${i?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(i)}</span></div>`:""}
          ${l}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(Br())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(Kr())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${t?"disable-api-security":"enable-api-security"}"
                ${o.apiSecurityBusy||!e.csrf_token?"disabled":""}
              >
                ${s(CS())}
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
                      ${s(xS())}
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
          </div>`,actions:`
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
      `})}function Pm(){let e=o.authStatus||{},t=e.enabled===!0,r=e.setup_window_active===!0,n=t||r,a=t?String(e.username||"").trim():"",i=o.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(o.authNotice)}</span></div>`:"",l=o.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.authError)}</div>`:"",u=n?`
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
      `;return te({id:"system",titleId:"oq-login-modal-title",kicker:"Systeem",title:qS(),copy:kS(),closeAction:"close-system-modal",closeLabel:"Sluit login-popup",body:`
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${Rm("Beveiligingsstatus",Bn(),Kn())}
            ${Rm("Gebruiker",t?a||"Geen naam":"Geen login",t?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${u}`,actions:`
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.authBusy?"disabled":""}>Gereed</button>
        ${t?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${o.authBusy?"disabled":""}>Uitzetten</button>`:""}
        ${n?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${o.authBusy?"disabled":""}>${t?"Opslaan":"Login opslaan"}</button>`:""}`})}function zn(e,t,r){let n=R(t),a=R(r);if(Number.isFinite(n)&&Number.isFinite(a))return n-a;let i=R(e);return Number.isFinite(i)?i:NaN}function Yl(e="oq-settings-grid"){let t=$S();return`
      <div class="${s(e)}">
        ${ce("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${t}
    `}function $S(){let e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(r=>v(r.offsetKey)&&v(r.finalKey));if(!e.length)return"";let t=r=>{let n=Be(r.offsetKey),a=zn(r.rawKey,r.finalKey,r.offsetKey),i=Re(Ae(r.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?oo(a+i,n.uom||"\xB0C",2):Ee(r.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(r.offsetKey)}" data-oq-hp-offset-raw-key="${s(r.rawKey)}" data-oq-hp-offset-final-key="${s(r.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(r.label)}</strong>
            <span data-oq-hp-offset-active>${s(Ee(r.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${r.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?oo(a,n.uom||"\xB0C",2):Ee(r.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${Eo({key:r.offsetKey,value:Ae(r.offsetKey),meta:n,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:n.uom?`<span class="oq-helper-unit-chip">${s(n.uom)}</span>`:""})}
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
    `}function Nm(){return re("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",Yl())}function Dm(e,t){let r=R(e),n=R(t),a=Number.isNaN(r)?"Lvl \u2014":`Lvl ${Math.round(r)}`,i=Number.isNaN(n)?"\u2014 Hz":`${Math.round(n)} Hz`;return`${a} (${i})`}function MS(e){let t=String(e||"").trim().toUpperCase();return!t||t==="0"||t==="IDLE"||t==="CM100 READY"||t==="CM100 STOPPED"||t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED")?!1:t.includes("REQUESTED")||t.includes("WAITING")||t.includes("WACHTEN")||t.includes("SETTLING")||t.includes("MEASUR")||t.includes("COOLDOWN")||t.includes("RUNNING")||t.includes("VALIDATING")||t.includes("STARTED")||t.includes("RECOVER")||t.includes("PHASE")||t.includes("STEADY")||t.includes("PULSE")||t.includes("STABILIZE")||t.includes("STEP")}function Ce(e){let t=String(e||"").trim().toUpperCase();return t?t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED"):!1}function mr(e){let t=String(e||"").trim().toUpperCase();return t.includes("WAITING_FOR_CM100")||t.includes("CM100 REQUESTED")||t.includes("WACHTEN OP CM100")||t==="WACHTEN"}function zr(e){return MS(e)&&!mr(e)}function di(e="",t=""){let r=String(e||"").trim().toUpperCase(),n=String(t||"").trim().toLowerCase(),a=r.split(/[^A-Z0-9]+/).filter(Boolean),i=p=>{let g=String(p||"").trim().toUpperCase();return g?r===g||r.startsWith(`${g}:`)||r.startsWith(`${g} `)||a.includes(g):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!r||r==="\u2014"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN")return{phase:"Wachten",percent:0};if(r.includes("WAITING")||r.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(n!=="cm100"&&(r==="IDLE"||r==="CM0 - STANDBY"||r==="CM100 READY"||r==="CM100 STOPPED"||r==="GEPAUZEERD"))return{phase:"Wachten",percent:0};let u=(l[n]||[]).find(p=>p.match.some(g=>i(g)));return u||(r.includes("DONE")||r.includes("APPLIED")?{phase:"Klaar",percent:100}:r.includes("ABORT")||r.includes("FAILED")||r.includes("REFUSED")?{phase:"Afgebroken",percent:100}:n==="cm100"&&r.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function Ur({taskKey:e,title:t,copy:r,subcopy:n="",status:a,statusCopy:i,progressTask:l,actions:c="",controls:u="",metrics:p="",className:g=""}){return`
      <article class="oq-settings-commissioning-card${g?` ${s(g)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(t)}</h3>
            <p>${s(r)}</p>
            ${n?`<p class="oq-settings-commissioning-card-subcopy">${s(n)}</p>`:""}
          </div>
        </div>
        ${c?`<div class="oq-settings-commissioning-card-actions">${c}</div>`:""}
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
        ${p?`<div class="oq-settings-grid oq-settings-commissioning-metrics">${p}</div>`:""}
      </article>
    `}function AS({status:e,running:t,resultReady:r,startDisabled:n,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:c}){let u=String(e||"").toUpperCase(),p=u.includes("FAILED")||u.includes("REFUSED")||u.includes("ABORT"),g=u.includes("APPLIED"),w=v("hp2WaterIn")||v("hp2WaterOut")||v("hp2WaterInRaw")||v("hp2WaterOutRaw"),y=R("hpWaterCalibrationStableProgress"),h=R("hpWaterCalibrationStableRequired"),m=R("hpWaterCalibrationRemaining"),d=Math.round(R("hpWaterCalibrationPhase")),b=t&&(d===1||u.includes("MIXING")),S=t&&!b,q=300,E=60,k=Number.isFinite(m)?Math.max(0,q-m):NaN,$=Number.isFinite(k)?Math.max(0,E-k):NaN,_=b&&Number.isFinite(k)?Math.max(0,Math.min(100,k/E*100)):S&&Number.isFinite(y)&&Number.isFinite(h)&&h>0?Math.max(0,Math.min(100,y/h*100)):t&&Number.isFinite(m)?Math.max(0,Math.min(100,100-m/q*100)):r?100:0,P=r&&v("hpWaterCalibrationResultSpreadBefore")?Ee("hpWaterCalibrationResultSpreadBefore",2):Ee("hpWaterCalibrationSpread",2),B=b?"Water mengen":Number.isFinite(y)&&Number.isFinite(h)&&h>0?y>0?`${Math.round(Math.max(0,y))} / ${Math.round(h)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",H=r?3:t?2:1,F=g?"Offsets toegepast":r?`Meting klaar - spreiding ${P}`:t?b?`Water mengen${Number.isFinite($)&&$>0?` - meting start over ${Math.round($)} s`:""}`:`Meting bezig - ${Number.isFinite(m)&&m>0?`max. ${Math.round(m)} s resterend`:B}`:p?"Meting niet voltooid":"Voorbereiding",A=g?"De voorgestelde offsets zijn opgeslagen.":r?"Controleer de voorgestelde offsets en pas ze toe.":t?b?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":p?tr("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):w?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",L=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(I=>v(I.liveKey)||v(I.rawKey)||v(I.offsetKey)),D=(I,W)=>{let ee=H>I;return`
        <div class="oq-settings-hp-calibration-step${ee?" is-done":""}${H===I?" is-active":""}">
          <span>${ee?"\u2713":I}</span>
          <strong>${s(W)}</strong>
        </div>
      `},N=I=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(I.label)}</span>
          <strong>${s(Ee(I.liveKey,2))}</strong>
        </article>
      `,Z=I=>{let W=R(I.resultRawKey),ee=Number.isFinite(W)?W:zn(I.rawKey,I.liveKey,I.offsetKey),Ne=R(I.suggestedKey),xt=Number.isFinite(ee)&&Number.isFinite(Ne)?oo(ee+Ne,o.entities[I.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(I.label)}</th>
          <td>${s(Number.isFinite(ee)?oo(ee,o.entities[I.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(Ee(I.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(Ee(I.suggestedKey,2))}</span></td>
          <td>${s(xt)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${D(1,"Voorbereiding")}
          ${D(2,"Meting")}
          ${D(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${r?" is-success":t?" is-active":p?" is-warning":""}">
          <div>
            <strong>${s(F)}</strong>
            <p>${s(A)}</p>
          </div>
          ${t||r?`<span>${s(t?B:"Resultaat beschikbaar")}</span>`:""}
          ${t?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${_.toFixed(0)}%"></i></div>`:""}
        </div>

        ${t?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${L.map(N).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(Ee("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(Ee("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${r?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(Ee("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(Ee("hpWaterCalibrationSupplyDelta",2))}</span>
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
                  ${L.map(Z).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${c?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${rr({active:t,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||n,stopDisabled:l||a})}
            ${o.entities.hpWaterCalibrationApply?Je("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function Lm(){let e=v("boilerCvAssistEnabled")&&C("boilerCvAssistEnabled"),t=Ga(),r=C("cm100Active"),n=String(t||"").trim().toUpperCase(),a=mr(t),i=!a&&(r||n==="CM100 READY"),l=o.commissioningTaskLock==="cm100",c=o.loadingEntities||o.busyAction==="commissioningCm100Start"||o.busyAction==="commissioningCm100Stop"||l,u=!!o.pendingCommissioningCm100Start,p=c||i||a,g=c||!i,w=or("boilerPowerTestStatus","IDLE"),y=di(w,"boiler"),h=C("boilerPowerTestActive"),m=o.loadingEntities||o.busyAction==="boilerPowerTestStart"||o.busyAction==="boilerPowerTestAbort"||o.busyAction==="boilerPowerTestApply",d=!!(o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort||o.entities.boilerPowerTestApply),b=!!o.pendingBoilerPowerTestStart,S=o.commissioningTaskLock==="boiler",q=mr(w),k=!Ce(w)&&(h||b||S||zr(w))&&!q,$=He("boilerRatedHeatPower"),_=He("boilerHeatPower"),P=R("boilerHeatPower"),B=P>0?_:k&&o.commissioningBoilerHeatPowerDisplay?o.commissioningBoilerHeatPowerDisplay:_;P>0&&(o.commissioningBoilerHeatPowerDisplay=_);let H=or("flowAutotuneStatus","IDLE"),F=di(H,"autotune"),A=o.loadingEntities||o.busyAction==="flowAutotuneStart"||o.busyAction==="flowAutotuneAbort"||o.busyAction==="flowAutotuneApply",L=!!(o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort||o.entities.flowAutotuneApply),D=!!o.pendingFlowAutotuneStart,N=o.commissioningTaskLock==="autotune",Z=mr(H),W=!Ce(H)&&(D||N||zr(H))&&!Z,ee=or("airPurgeStatus","IDLE"),Ne=di(ee,"purge"),xt=C("airPurgeActive"),gt=o.loadingEntities||o.busyAction==="airPurgeStart"||o.busyAction==="airPurgeAbort",zt=!!(o.entities.airPurgeStart||o.entities.airPurgeAbort),et=!!o.pendingAirPurgeStart,De=o.commissioningTaskLock==="purge",x=!Ce(ee)&&(xt||et||De||zr(ee)),K=/DONE/.test(String(ee||"").toUpperCase()),Y=!!(zt||o.entities.airPurgeStatus||o.entities.airPurgeReturnToAuto),G=He("airPurgeRemaining",{decimals:0}),le=R("airPurgePhase"),Se=le===1?"Rustig":le===2?"Pulsen":le===3?"Stabiliseren":Ne.phase,ue=or("manualFlowStatus","IDLE"),xe=C("manualFlowActive"),ge=o.loadingEntities||o.busyAction==="manualFlowStart"||o.busyAction==="manualFlowAbort",ft=!!(o.entities.manualFlowStart||o.entities.manualFlowAbort),$t=!!o.pendingManualFlowStart,pe=o.commissioningTaskLock==="manual-flow",Ve=!Ce(ue)&&(xe||$t||pe||zr(ue)),tt=or("manualHpStatus","IDLE"),ht=C("manualHpActive"),bt=o.loadingEntities||o.busyAction==="manualHpStart"||o.busyAction==="manualHpAbort",Do=!!(o.entities.manualHpStart||o.entities.manualHpAbort),qe=!!o.pendingManualHpStart,Mt=o.commissioningTaskLock==="manual-hp",ot=!Ce(tt)&&(ht||qe||Mt||zr(tt)),Ru=/SAFETY STOP/.test(String(tt||"").toUpperCase()),_u=/STOPPING/.test(String(tt||"").toUpperCase()),po=or("hpWaterCalibrationStatus","IDLE"),kb=di(po,"hp-water-calibration"),Pu=C("hpWaterCalibrationActive"),wa=o.loadingEntities||o.busyAction==="hpWaterCalibrationStart"||o.busyAction==="hpWaterCalibrationAbort"||o.busyAction==="hpWaterCalibrationApply",Nu=!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort||o.entities.hpWaterCalibrationApply),ya=!!o.pendingHpWaterCalibrationStart,mo=o.commissioningTaskLock==="hp-water-calibration",Ue=!Ce(po)&&(Pu||ya||mo||zr(po)),va=/DONE|APPLIED/.test(String(po||"").toUpperCase()),Du=/APPLIED/.test(String(po||"").toUpperCase()),Eb=He("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),Tb=He("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),Lu=/DONE|APPLIED/.test(String(w||"").toUpperCase()),Ou=/DONE|APPLIED/.test(String(H||"").toUpperCase()),is=i?q?"Wachten op CM100":k?y.phase:Lu?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",ss=i?Z?"Wachten op CM100":W?F.phase:Ou?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",ls=i?x?Ne.phase:K?"Klaar":"Klaar om te starten":"Wachten op CM100",Iu=i?Ve?"Actief":"Klaar om te starten":"Wachten op CM100",Fu=i?ot?_u?"Bezig met stoppen":Ru?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",ju=i?Ue?kb.phase:Du?"Offsets toegepast":va?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Wu=!i||m||!d||W||x||Ve||ot||Ue||k||N||De||pe||Mt||mo||b,Cb=m||!(k||S||b),xb=m||Wu||!Lu||W||x||Ue,Vu=!i||A||!L||k||x||Ve||ot||Ue||W||S||De||pe||Mt||mo||D,$b=A||!(W||N||D),Mb=A||Vu||!Ou||k||x||Ue,Ab=!i||gt||!zt||k||W||Ve||ot||Ue||x||S||N||pe||Mt||mo||et,Hb=gt||!(x||De||et),Rb=!i||ge||!ft||k||W||x||ot||Ue||Ve||S||N||De||Mt||mo||$t,_b=ge||!(Ve||pe||$t),Pb=!i||bt||!Do||k||W||x||Ve||Ue||ot||S||N||De||pe||mo||qe,Nb=bt||!(ot||Mt||qe),Db=!i||wa||!Nu||k||W||x||Ve||ot||Ue||S||N||De||pe||Mt||ya,Lb=wa||!(Ue||mo||ya),Ob=wa||Ue||!va||Du;u&&i&&(o.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(n))&&(o.commissioningTaskLock=""),b&&(h||Ce(w))&&(o.pendingBoilerPowerTestStart=!1),S&&Ce(w)&&(o.commissioningTaskLock=""),D&&Ce(H)&&(o.pendingFlowAutotuneStart=!1),N&&Ce(H)&&(o.commissioningTaskLock=""),et&&(xt||Ce(ee))&&(o.pendingAirPurgeStart=!1),De&&Ce(ee)&&(o.commissioningTaskLock=""),$t&&(xe||Ce(ue))&&(o.pendingManualFlowStart=!1),pe&&(xe||Ce(ue))&&(o.commissioningTaskLock=""),qe&&(ht||Ce(tt))&&(o.pendingManualHpStart=!1),Mt&&(ht||Ce(tt))&&(o.commissioningTaskLock=""),ya&&(Pu||Ce(po))&&(o.pendingHpWaterCalibrationStart=!1),mo&&Ce(po)&&(o.commissioningTaskLock="");let Ib=a?"Wachten op CM100":t,Fb=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",jb=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:ju,available:!!(Nu||o.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:Ur({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:ju,statusCopy:Ue?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":va?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:AS({status:po,running:Ue,resultReady:va,startDisabled:Db,abortDisabled:Lb,applyDisabled:Ob,busy:wa,controlsAvailable:!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:Iu,available:!!(ft||o.entities.manualFlowStatus),openDisabled:!i,cardMarkup:Ur({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:Iu,statusCopy:Ve?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${lt("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${o.entities.manualFlowStart||o.entities.manualFlowAbort?rr({active:Ve,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:ge||Rb,stopDisabled:ge||_b}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${Pe("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",He("flowSelected"),"oq-settings-field--compact")}
            ${Pe("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",He("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${o.entities.manualFlowApplyHeating?Je("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",ge):""}
          ${o.entities.manualFlowApplyCooling?Je("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",ge):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:Fu,available:!!(Do||o.entities.manualHpStatus),openDisabled:!i,cardMarkup:Ur({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:Fu,statusCopy:ot?_u?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":Ru?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${o.entities.manualHpStart||o.entities.manualHpAbort?rr({active:ot,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:bt||Pb,stopDisabled:bt||Nb}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${Co("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${lt("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${v("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${Co("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${lt("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${Pe("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",He("flowSelected"),"oq-settings-field--compact")}
              ${Pe("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",Dm("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${v("hp2Compressor")?Pe("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",Dm("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${Pe("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",T("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${Pe("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",vo(j("hp1Failures","None")),"oq-settings-field--compact")}
              ${v("hp2Failures")?Pe("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",vo(j("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:ss,available:!0,openDisabled:mr(ss),cardMarkup:Ur({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:ss,statusCopy:Z?"Wacht totdat CM100 actief is voordat je autotune start.":W?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort?rr({active:W,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:A||Vu,stopDisabled:A||$b}):""}
            ${o.entities.flowAutotuneApply?Je("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",A||Mb):""}
          `,metrics:`
            ${Pe("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",Eb,"oq-settings-field--compact")}
            ${Pe("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",Tb,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:is,available:e,openDisabled:mr(is),cardMarkup:Ur({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s($)}`,status:is,statusCopy:q?"Wacht totdat CM100 actief is voordat je de boiler-test start.":k?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort?rr({active:k,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:m||Wu,stopDisabled:m||Cb}):""}
            ${o.entities.boilerPowerTestApply?Je("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",m||xb):""}
          `,metrics:`
            ${Pe("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",B)}
            ${Pe("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",He("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:ls,available:Y,openDisabled:mr(ls),cardMarkup:Ur({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:ls,statusCopy:x?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${o.entities.airPurgeStart||o.entities.airPurgeAbort?rr({active:x,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:gt||Ab,stopDisabled:gt||Hb}):""}
          `,metrics:`
            ${Pe("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",G,"oq-settings-field--compact")}
            ${Pe("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",Se,"oq-settings-field--compact")}
            ${Pe("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",He("flowSelected"),"oq-settings-field--compact")}
            ${Vp("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(Wb=>Wb.available);return{cm100Status:Ib,cm100StartDisabled:p,cm100StopDisabled:g,serviceStatusCopy:Fb,tasks:jb}}function HS(e){return Oe({dataAttribute:"data-oq-service-task",dataValue:e.key,className:"oq-settings-service-row",label:e.label,value:e.status,note:e.summary,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${s(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>`})}function Om(){let e=Lm();return re("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${o.entities.commissioningCm100Start?Je("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${o.entities.commissioningCm100Stop?Je("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(t=>HS(t)).join("")}
          </div>
        </div>
      `)}function Im(){let e=String(o.systemModal||"").replace(/^service-task-/,""),r=Lm().tasks.find(n=>n.key===e);return r?te({id:"system",titleId:"oq-service-task-modal-title",kicker:"Service",title:r.title,copy:r.summary,className:"oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task",sectionAttributes:"data-oq-service-task-scroller",closeAction:"close-system-modal",closeLabel:`Sluit ${r.title}`,body:`<div class="oq-settings-service-task-modal-body">${r.cardMarkup}</div>`,actions:`${r.modalActions||""}<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>`}):""}function pi(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${Cl("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${Cl("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${lt("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${lt("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function Fm(){return re("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",pi())}function jm(){return pi("oq-settings-grid oq-settings-grid--modal")}var mi=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],RS=["Zo","Ma","Di","Wo","Do","Vr","Za"];function gi(e){let t={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0,dayPartitionAvailable:!1,dayStorageKb:0,dayWriteCount:0,dayLastWriteTimestampS:0};return String(e||"").split(/\r?\n/).forEach(r=>{let n=r.split("|");r.startsWith("@bounds|")?(t.storedDayCount=Number(n[1])||0,t.oldestDateKey=Number(n[2])||null,t.newestDateKey=Number(n[3])||null,t.hourStoredDayCount=Number(n[4])||0,t.hourOldestDateKey=Number(n[5])||null,t.hourNewestDateKey=Number(n[6])||null):r.startsWith("@day_retention|")?(t.dayPartitionAvailable=Number(n[1])===1,t.dayStorageKb=Number(n[2])||0,t.dayWriteCount=Number(n[3])||0,t.dayLastWriteTimestampS=Number(n[4])||0):r.startsWith("@hour_retention|")&&(t.hourRequestedRetentionDays=Number(n[1])||0,t.hourSlotCount=Number(n[2])||0,t.hourPartitionAvailable=Number(n[3])===1,t.hourRecordCount=Number(n[4])||0,t.hourWriteCount=Number(n[5])||0,t.hourStorageKb=Number(n[6])||0,t.hourLastWriteTimestampS=Number(n[7])||0)}),t}function Ie(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Jl(e,t,r){return new Date(e,t-1,r,12,0,0)}function Zl(e,t){return new Date(e,t,0).getDate()}function Wm(e){return String(e).padStart(2,"0")}function ne(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return null;let r=Math.floor(t/1e4),n=Math.floor(t/100)%100,a=t%100;if(r<2020||n<1||n>12||a<1||a>31)return null;let i=new Date(r,n-1,a,12,0,0);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:{key:t,year:r,month:n,day:a,date:i}}function fi(e){let t=ne(e);return t?`${t.year}-${Wm(t.month)}-${Wm(t.day)}`:""}function Xl(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!t)return null;let r=Number(t[1]),n=Number(t[2]),a=Number(t[3]),i=Jl(r,n,a);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:ne(Ie(i))}function Bm(e,t){return Number(e)*100+Number(t)}function hi(e){return Bm(e.getFullYear(),e.getMonth()+1)}function gr(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return null;let r=Math.floor(t/100),n=t%100;return r<2020||n<1||n>12?null:{key:t,year:r,month:n,date:new Date(r,n-1,1,12,0,0)}}function Km(e){let t=String(e||"").trim(),r=/^(\d{4})-(\d{2})$/.exec(t);return gr(r?Bm(Number(r[1]),Number(r[2])):t)}function ec(e,t){let r=gr(e);if(!r)return"";let n=new Date(r.year,r.month-1+Number(t||0),1,12,0,0);return String(hi(n))}function Gr(e){let t=new Date(e.getTime()),r=t.getDay(),n=r===0?-6:1-r;return t.setDate(t.getDate()+n),t.setHours(12,0,0,0),t}function fr(e,t){let r=new Date(e.getTime());return r.setDate(r.getDate()+t),r.setHours(12,0,0,0),r}function Vm(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function tc(e){let t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-r+3);let n=t.getUTCFullYear(),a=new Date(Date.UTC(n,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((t-a)/(10080*60*1e3)),year:n}}function oc(e){return Ie(Gr(e))}function zm(e){let t=Xl(e)||ne(e);return t?ne(Ie(Gr(t.date))):null}function rc(e){let t=ne(e);if(!t)return"Week";let r=Gr(t.date),n=fr(r,6);return`Week ${tc(r).week} (${Vm(r)} - ${Vm(n)})`}function jt(e,t="day"){let r=ne(e);return r?t==="weekday"?RS[r.date.getDay()]||"":t==="month"?r.date.toLocaleDateString("nl-NL",{month:"short"}):t==="year"?String(r.year):r.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function _S(e){let t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function nc(e,t=0){return Object.fromEntries(mi.map((r,n)=>[r,_S(e[t+n])]))}function Um(e){let t=String(e||"").trim();if(!t||t.startsWith("@"))return null;let r=t.split("|");if(r.length<10)return null;let n=Number(r[0]),a=Number(r[1]),i=Number(r[2]),l=ne(a);return!Number.isFinite(n)||!l?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...nc(r,3)}}function ac(e){let t=String(e||"").trim();if(!t.startsWith("@current|"))return null;let r=t.split("|");if(r.length<9)return null;let n=Number(r[1]),a=ne(n);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:n,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...nc(r,2)}:null}function Gm(e){let t=String(e||"").trim();if(!t.startsWith("@hour|"))return null;let r=t.split("|");if(r.length<11)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=ne(a);return!Number.isFinite(n)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...nc(r,4)}}function Qr(e,t){let r=Number(e?.[t]);return Number.isFinite(r)&&r>=0?r:0}var wi=Object.freeze(["cooling_dew_point","outside_temperature","room_temperature","room_setpoint","heating_enable","cooling_enable"]),yi=Object.freeze(["room_setpoint","heating_enable","cooling_enable"]),PS=new Set(["coolingDewPointSource","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"]);function Yr(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function bi(e,t,r=!1){let n=Yr(e)?e:{};return Object.fromEntries(t.map(a=>[a,Object.prototype.hasOwnProperty.call(n,a)?n[a]===!0||String(n[a]).toLowerCase()==="true":r]))}function Qm(e){if(!Yr(e))return null;let t=Number(e.port||1883);return{enabled:e.enabled===!0,broker:String(e.broker||"").trim(),port:Number.isInteger(t)&&t>=1&&t<=65535?t:1883,username:String(e.username||"").trim(),password_was_set:e.password_set===!0,input_enabled:bi(e.input_enabled,wi,!0),input_accept_retained:bi(e.input_accept_retained,yi,!0)}}function Ym(e){if(e==null)return null;if(!Yr(e))throw new Error("MQTT-configuratie in backup is ongeldig.");let t=String(e.broker||"").trim(),r=String(e.username||"").trim(),n=Number(e.port),a=e.enabled===!0;if(!Number.isInteger(n)||n<1||n>65535)throw new Error("MQTT-poort in backup is ongeldig.");if(t.length>64||a&&!t)throw new Error("MQTT-broker in backup is ongeldig.");if(r.length>64)throw new Error("MQTT-gebruikersnaam in backup is ongeldig.");return{enabled:a,broker:t,port:n,username:r,password_was_set:e.password_was_set===!0,input_enabled:bi(e.input_enabled,wi,!0),input_accept_retained:bi(e.input_accept_retained,yi,!0)}}function Un(e){return!!e?.password_was_set}function Jm(e,t){return PS.has(e)&&/\bMQTT\b/i.test(String(t||""))}function Zm(e,t){let r=new Map((t||[]).map(a=>[a.id,new Set(a.keys||[])])),n=[];return Object.entries(Yr(e)?e:{}).forEach(([a,i])=>{let l=r.get(a);if(!l){Yr(i)?Object.keys(i).forEach(c=>n.push({section:a,key:c})):n.push({section:a,key:a});return}Yr(i)&&Object.keys(i).forEach(c=>{l.has(c)||n.push({section:a,key:c})})}),n}var ic=null;function Xm(e){ic=typeof e=="function"?e:null}function Gn(){return ic?ic():"?meta=1"}async function Wt(e,t){let r=O[e];if(!r)throw new Error(`Onbekend veld ${e}.`);if(r.domain==="select"){let n=String(t||"").trim(),a=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="number"){let n=be(e,t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="time"){let n=Rt(t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="datetime"){let n=Ge(t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="text"){let n=String(t||"").trim(),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="switch"||r.domain==="binary_sensor"){let n=!!t,a=n?"turn_on":"turn_off",i=await fetch(Q(r.domain,r.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return n}throw new Error(`${r.name} kan niet worden hersteld.`)}function NS(e){if(typeof e?.value=="boolean")return e.value;let t=String(e?.state??e?.value??"").trim().toLowerCase();return["on","true","1"].includes(t)?!0:["off","false","0"].includes(t)?!1:null}async function eg(e,t){let r=O[e];if(!r||r.domain!=="switch")throw new Error(`Onbekende schakelaar ${e}.`);let n=await fetch(Q(r.domain,r.name),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`Controleren mislukt: HTTP ${n.status}`);let a=NS(await n.json());if(a===null)throw new Error(`${r.name} gaf geen geldige status terug.`);return a===!!t}function sc(){let e=o.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;let t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function DS(){return sc()?Bo:Bo.filter(e=>e<=168)}function Qn(e){let t=DS(),r=Number(e);return t.includes(r)?r:Number.isFinite(r)&&r>t[t.length-1]?t[t.length-1]:t.includes(Ht)?Ht:t[0]}function Jr(e){o.trendWindowHours=Qn(e);try{window.localStorage.setItem("oq-trend-window-hours",String(o.trendWindowHours))}catch{}}function OS(e){return Object.prototype.hasOwnProperty.call(e,"hour")||Object.prototype.hasOwnProperty.call(e,"hour_of_day")||Object.prototype.hasOwnProperty.call(e,"hourOfDay")}function IS(e){return e.some(t=>Ei(t)!==void 0)}function FS(e){let t=new Set;for(let r of e){let n=sg(r.date_key??r.dateKey??r.date??r.from??Ei(r));if(n){if(t.has(n))return!0;t.add(n)}}return!1}function rg(e){return e.some(OS)||IS(e)&&FS(e)}function jS(){return{available:"Alleen live",oldest:"Geen data",newest:"Geen data",lastFlush:"Geen data",sizeKb:0,writes:0,nowMs:Number.NaN}}function WS(e={}){return{enabled:e?.enabled===!0,available:e?.available===!0,storedEvents:Math.max(0,Number(e?.stored_events)||0),capacityEvents:Math.max(0,Number(e?.capacity_events)||5120),retentionDays:Math.max(0,Number(e?.retention_days)||7),oldestEpochS:Math.max(0,Number(e?.oldest_epoch_s)||0),newestEpochS:Math.max(0,Number(e?.newest_epoch_s)||0),lastFlushEpochS:Math.max(0,Number(e?.last_flush_epoch_s)||0),storageBytes:Math.max(0,Number(e?.storage_bytes)||0),writeCount:Math.max(0,Number(e?.write_count)||0)}}async function VS(e={}){let t=e.force===!0,r=Date.now();if(!t&&o.decisionLogStorageMetadataFetchPromise)return o.decisionLogStorageMetadataFetchPromise;if(!t&&(o.decisionLogStorageMetadataSignature||o.decisionLogStorageMetadataError)&&r-Number(o.decisionLogStorageMetadataLastFetchAt||0)<pn)return!1;o.decisionLogStorageMetadataFetchPromise=(async()=>{let n=await fetch(`${_e()}/openquatt/decision-log?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.json();if(!a?.ok)throw new Error("ongeldig antwoord");let i=JSON.stringify(a),l=i!==o.decisionLogStorageMetadataSignature||o.decisionLogStorageMetadataError!=="";return o.decisionLogStorageMetadata=WS(a),o.decisionLogStorageMetadataError="",o.decisionLogStorageMetadataSignature=i,o.decisionLogStorageMetadataLastFetchAt=Date.now(),l})();try{return await o.decisionLogStorageMetadataFetchPromise}catch(n){let a=`Beslisloghistorie kon niet worden geladen. ${n.message}`,i=o.decisionLogStorageMetadataError!==a;return o.decisionLogStorageMetadata={},o.decisionLogStorageMetadataError=a,o.decisionLogStorageMetadataSignature="",o.decisionLogStorageMetadataLastFetchAt=Date.now(),i}finally{o.decisionLogStorageMetadataFetchPromise=null}}function BS(e){let t=jS();return String(e||"").split(/\r?\n/).forEach(r=>{if(r.startsWith("@now|")){t.nowMs=Number(r.slice(5));return}if(!r.startsWith("@flash|"))return;let n=r.split("|");t.available=n[1]||t.available,t.oldest=n[2]||t.oldest,t.newest=n[3]||t.newest,t.lastFlush=n[4]||t.lastFlush,t.sizeKb=Number(n[5])||0,t.writes=Number(n[6])||0}),t}async function ng(e={}){if(!v("trendHistoryEnabled")&&!Xr()){let n=!!(o.trendHistoryMetadataSignature||o.trendHistoryMetadataError);return o.trendHistoryMetadata={},o.trendHistoryMetadataError="",o.trendHistoryMetadataSignature="",o.trendHistoryMetadataLastFetchAt=0,n}let t=e.force===!0,r=Date.now();if(!t&&o.trendHistoryMetadataFetchPromise)return o.trendHistoryMetadataFetchPromise;if(!t&&(o.trendHistoryMetadataSignature||o.trendHistoryMetadataError)&&r-Number(o.trendHistoryMetadataLastFetchAt||0)<pn)return!1;o.trendHistoryMetadataFetchPromise=(async()=>{let n=await fetch(`${_e()}/trends/history?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.text(),i=BS(a),l=`${a.length}|${a.slice(0,120)}|${a.slice(-120)}`,c=l!==o.trendHistoryMetadataSignature||o.trendHistoryMetadataError!=="";return o.trendHistoryMetadata=i,o.trendHistoryMetadataError="",o.trendHistoryMetadataSignature=l,o.trendHistoryMetadataLastFetchAt=Date.now(),c})();try{return await o.trendHistoryMetadataFetchPromise}catch(n){let a=`Trendhistorie metadata kon niet worden geladen. ${n.message}`,i=o.trendHistoryMetadataError!==a;return o.trendHistoryMetadata={},o.trendHistoryMetadataError=a,o.trendHistoryMetadataSignature="",o.trendHistoryMetadataLastFetchAt=Date.now(),i}finally{o.trendHistoryMetadataFetchPromise=null}}async function ki(e={}){await V(to(),"all",{concurrency:Gt,forceMissing:e.forceMissing===!0}),await Promise.all([ng({force:e.forceTrendHistory===!0}),VS({force:e.forceDecisionLog===!0}),hr({force:e.forceEnergyHistory===!0,metaOnly:!0})])}function Ro(e=[250,1e3,2500],t={}){e.forEach(r=>{window.setTimeout(()=>{o.nativeOpen||o.appView!=="settings"||ki({forceMissing:r===0,forceTrendHistory:t.forceTrendHistory===!0,forceDecisionLog:t.forceDecisionLog===!0,forceEnergyHistory:t.forceEnergyHistory===!0}).finally(()=>{o.appView==="settings"&&o.mounted&&!o.nativeOpen&&f()})},r)})}var KS="@schema|openquatt.energy_history_import.v1",zS=850,Yn=[{id:"days",label:"Alleen dagtotalen",fileLabel:"daily"},{id:"days_and_hours",label:"Dagtotalen + uurdetail",fileLabel:"daily-hourly"},{id:"hours",label:"Alleen uurdetail",fileLabel:"hourly"}],US={forbidden:"Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},Tt={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","total_hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","total_hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh","energy_hp_cooling","hpCooling","hp_cooling_wh","total_hp_cooling_wh","totalHpCooling"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","total_boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function Zr(e){let t=String(e||"").trim();return Yn.some(r=>r.id===t)?t:"days_and_hours"}function ag(e){let t=Zr(e);return Yn.find(r=>r.id===t)||Yn[1]}function GS(e){let t=ag(e),r=new Date().toISOString().slice(0,10);return`openquatt-energy-history-${t.fileLabel}-${r}.json`}async function QS(){if(o.energyHistoryExportBusy)return;let e=Zr(o.energyHistoryExportMode),t=ag(e);if(_t({energyHistoryExportMode:e,energyHistoryExportBusy:!0,energyHistoryExportError:"",energyHistoryExportNotice:""}),f(),Xr()){o.energyHistoryExportBusy=!1,o.energyHistoryExportNotice=`Preview: ${t.label.toLowerCase()} zou als JSON worden gedownload.`,f();return}try{let r=await fetch(`${_e()}/energy/history/export?mode=${encodeURIComponent(e)}`,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.blob();Hs(n,GS(e)),o.energyHistoryExportNotice=`${t.label} ge\xEBxporteerd.`}catch(r){o.energyHistoryExportError=`Exporteren mislukt. ${r.message}`}finally{o.energyHistoryExportBusy=!1,f()}}function ig(e=!1){let t=e?o.energyHistoryImportNotice:"";_t({energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:t})}function sg(e){if(e==null||e==="")return 0;let t=String(e).trim(),r=lg(t);if(r)return r.dateKey;let n=t.match(/^\d{8}$/)?.[0]||t.match(/^(\d{4})-(\d{2})-(\d{2})$/)?.slice(1).join(""),a=n?ne(n):null;if(!a){let i=new Date(t);a=Number.isNaN(i.getTime())?null:ne(Ie(i))}return a&&a.year<=2099?a.key:0}function tg(e){let t=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(t)?`${t.slice(6,8)}-${t.slice(4,6)}-${t.slice(0,4)}`:""}function Ei(e){return e.timestamp??e.time??e.datetime??e.date_time??e.dateTime}function lg(e){if(e==null||e==="")return null;let t=String(e).trim(),r=t.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i);if(!r)return null;let n=/(?:Z|[+-]\d{2}:?\d{2})$/i.test(t),a=Number(r[1]),i=Number(r[2]),l=Number(r[3]),c=Number(r[4]),u=Number(r[5]||"0"),p=Number(r[6]||"0");if([a,i,l,c,u,p].some(d=>Number.isNaN(d)))return null;let g=n?new Date(t):new Date(a,i-1,l,c,u,p,0);if(Number.isNaN(g.getTime()))return null;let w=g.getFullYear(),y=g.getMonth()+1,h=g.getDate(),m=g.getHours();return w<2020||w>2099||y<1||y>12||h<1||h>31?null:{dateKey:w*1e4+y*100+h,hour:m}}function cg(e){if(e==null||e==="")return null;let t=Number(String(e).trim().replace(",","."));return!Number.isFinite(t)||t<0||t>=4294967295?null:Math.round(t)}function Ho(e,t,r=null){for(let n of t){if(!Object.prototype.hasOwnProperty.call(e,n))continue;let a=cg(e[n]);if(a!==null)return a}return r}function vi(e,t){return Ho(e,t)!==null}function ug(e){let t=sg(e.date_key??e.dateKey??e.date??e.from??Ei(e));if(!t)return null;let r=Ho(e,Tt.electricalInput),n=Ho(e,Tt.heatpumpHeatOutput);if(r===null||n===null)return null;let a=Ho(e,Tt.heatingInput,r),i=Ho(e,Tt.coolingInput,0),l=Ho(e,Tt.heatpumpCoolingOutput,0),c=Ho(e,Tt.boilerHeatOutput,0),u=Ho(e,Tt.systemHeatOutput,n+c),p=vi(e,Tt.heatingInput)||vi(e,Tt.coolingInput)||vi(e,Tt.heatpumpCoolingOutput)||vi(e,Tt.systemHeatOutput);return[a,i,l,c,u].some(g=>g===null)?null:{dateKey:t,electricalInputWh:r,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:n,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:c,systemHeatOutputWh:u,hasFullImportFields:p}}function YS(e){let t=cg(e.hour??e.hour_of_day??e.hourOfDay);if(t!==null&&t>=0&&t<=23)return t;let r=Ei(e);if(r){let n=String(r).trim(),a=lg(n);if(a)return a.hour;let i=new Date(n);if(!Number.isNaN(i.getTime()))return i.getHours();let l=n.match(/^(\d{1,2})(?::\d{2})/);if(l){let c=Number(l[1]);if(c>=0&&c<=23)return c}}return-1}function JS(e){let t=ug(e),r=YS(e);return!t||r<0||r>23?null:{...t,hour:r}}function ZS(e){let t=[],r=[],n="",a=!1,i=()=>{r.push(n),n=""},l=()=>{i(),r.some(u=>String(u).trim()!=="")&&t.push(r),r=[]};for(let u=0;u<e.length;u+=1){let p=e[u];a?p==='"'&&e[u+1]==='"'?(n+='"',u+=1):p==='"'?a=!1:n+=p:p==='"'?a=!0:p===","?i():p===`
`?l():p!=="\r"&&(n+=p)}if((n||r.length)&&l(),!t.length)return[];let c=t.shift().map(u=>String(u||"").trim());return t.map(u=>{let p={};return c.forEach((g,w)=>{g&&(p[g]=u[w]??"")}),p})}function Si(e){return!e||typeof e!="object"||Array.isArray(e)||!e.summary||typeof e.summary!="object"||Array.isArray(e.summary)?e:{...e.summary,...e}}function XS(e){let t=[],r=[];if(Array.isArray(e)){let l=e.map(Si);return rg(l)?r.push(...l):t.push(...l),{dailyRows:t,hourlyRows:r,source:"JSON"}}let n=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return t.push(...a.map(Si)),r.push(...i.map(Si)),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(c=>{r.push(Si({...c,date:c.date??l.date}))})}),{dailyRows:t,hourlyRows:r,source:n}}function eq(e,t){let r=String(t||"").trim();if(!r)throw new Error("Bestand is leeg.");let n=[],a=[],i="";if(r[0]==="{"||r[0]==="["){let m=XS(JSON.parse(r));n=m.dailyRows,a=m.hourlyRows,i=m.source}else{let m=ZS(r);rg(m)||String(e||"").toLowerCase().includes("hour")?a=m:n=m,i="CSV"}let l=new Map,c=new Map,u=0,p=0;n.forEach(m=>{let d=ug(m);if(!d){p+=1;return}l.has(d.dateKey)&&(u+=1),l.set(d.dateKey,d)}),a.forEach(m=>{let d=JS(m);if(!d){p+=1;return}let b=`${d.dateKey}:${d.hour}`;c.has(b)&&(u+=1),c.set(b,d)});let g=[...l.values()].sort((m,d)=>m.dateKey-d.dateKey),w=[...c.values()].sort((m,d)=>m.dateKey-d.dateKey||m.hour-d.hour);if(!g.length&&!w.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");let y=[...g.map(m=>m.dateKey),...w.map(m=>m.dateKey)].sort((m,d)=>m-d),h=y.length?`${tg(y[0])} t/m ${tg(y[y.length-1])}`:"";return{records:g,hourRecords:w,source:i,range:h,duplicates:u,invalid:p}}function tq(e){return e.hasFullImportFields?["day",e.dateKey,e.electricalInputWh,e.heatingInputWh,e.coolingInputWh,e.heatpumpHeatOutputWh,e.heatpumpCoolingOutputWh,e.boilerHeatOutputWh,e.systemHeatOutputWh].join("|"):["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function oq(e){let t=new Map;return e.forEach(r=>{t.has(r.dateKey)||t.set(r.dateKey,new Map),t.get(r.dateKey).set(r.hour,r)}),[...t.entries()].sort((r,n)=>r[0]-n[0]).map(([r,n])=>{let a=0,i=[],l=[...n.values()].some(c=>c.hasFullImportFields);for(let c=0;c<24;c+=1){let u=n.get(c);u&&(a|=1<<c),l?i.push(u?.electricalInputWh??0,u?.heatingInputWh??0,u?.coolingInputWh??0,u?.heatpumpHeatOutputWh??0,u?.heatpumpCoolingOutputWh??0,u?.boilerHeatOutputWh??0,u?.systemHeatOutputWh??0):i.push(u?.electricalInputWh??0,u?.heatpumpHeatOutputWh??0,u?.boilerHeatOutputWh??0)}return["hourday",r,a,...i].join("|")})}function dg(e){let t=new URLSearchParams;return t.set("records",[KS,...e].join(`
`)),o.energyHistoryCsrfToken&&t.set("csrf_token",o.energyHistoryCsrfToken),t}function rq(e){let t=[],r=[];return e.forEach(n=>{let a=[...r,n];r.length&&String(dg(a)).length>zS?(t.push(r),r=[n]):r=a}),r.length&&t.push(r),t}function nq(e){let t=[];e.written>0&&t.push(`${e.written} dagrecords`),e.hourWritten>0&&t.push(`${e.hourWritten} uurdagen`);let r=t.length?`${t.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",n=[];return e.duplicates>0&&n.push(`${e.duplicates} al aanwezig`),e.skipped>0&&n.push(`${e.skipped} overgeslagen`),e.invalid>0&&n.push(`${e.invalid} ongeldig`),e.unsupported>0&&n.push(`${e.unsupported} onbekend`),n.length?`${r} (${n.join(", ")}.)`:r}async function aq(e){let t=await fetch(`${_e()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:dg(e)}),r=await t.text(),n={};try{n=r?JSON.parse(r):{}}catch{n={}}if(!t.ok||n.ok===!1){let a=n.error?String(n.error):"";throw new Error(US[a]||a||`HTTP ${t.status}`)}return n}function pg(e){let t=String(e||"").split(/\r?\n/).find(r=>r.startsWith("@csrf|"));return t?t.slice(6):""}async function iq(){if(Xr())return;let e=await fetch(`${_e()}/energy/history?meta=1`,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=pg(await e.text());if(!t)throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");o.energyHistoryCsrfToken=t}function sq(e,t){o.energyHistoryImportProgressPercent=t>0?Math.min(99,Math.max(1,Math.round(e/t*100))):0,f()}async function lq(e){if(ig(),!e){f();return}_t({energyHistoryImportFileName:e.name||"exportbestand"});try{let t=eq(e.name||"",await e.text());_t({energyHistoryImportRecords:t.records,energyHistoryImportHourRecords:t.hourRecords,energyHistoryImportSource:t.source,energyHistoryImportRange:t.range,energyHistoryImportDuplicateCount:t.duplicates,energyHistoryImportInvalidCount:t.invalid})}catch(t){o.energyHistoryImportError=`Bestand kon niet worden gelezen. ${t.message}`}f()}function cq(){let e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{let t=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),lq(t)},{once:!0}),document.body.appendChild(e),e.click()}async function uq(){if(o.energyHistoryImportBusy)return;let e=[...o.energyHistoryImportRecords.map(tq),...oq(o.energyHistoryImportHourRecords)];if(!e.length){o.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",f();return}if(o.energyHistoryImportBusy=!0,o.energyHistoryImportError="",o.energyHistoryImportNotice="",o.energyHistoryImportProgressPercent=1,f(),Xr()){let n=new Set(o.energyHistoryImportHourRecords.map(a=>a.dateKey)).size;o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportNotice=`Preview: ${o.energyHistoryImportRecords.length} dagrecords en ${n} uurdagen zouden worden ge\xEFmporteerd.`,f();return}let t={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0},r=0;try{await iq();let n=rq(e);for(let a of n){let i=await aq(a);t.written+=Number(i.written||0),t.hourWritten+=Number(i.hour_written||0),t.duplicates+=Number(i.duplicates||0),t.skipped+=Number(i.skipped||0),t.invalid+=Number(i.invalid||0),t.unsupported+=Number(i.unsupported||0),r+=a.length,sq(r,e.length)}o.energyHistoryImportProgressPercent=100,o.energyHistoryImportNotice=nq(t),o.energyHistoryImportError="",o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,await ki({forceMissing:!0,forceEnergyHistory:!0})}catch(n){o.energyHistoryImportError=`Importeren mislukt. ${n.message}`}finally{o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,f()}}function dq(){return Zt()||o.appView==="settings"&&o.systemModal==="history-storage"}function Jn(){o.settingsBackupDraft=null,o.settingsBackupMqttPassword="",o.settingsBackupError="",o.settingsBackupBusy=!1}function pq(){return{device:Ye(),installation:Lt(),topology:typeof oe=="function"?oe():"",firmware_version:se(),firmware_channel:String(T("firmwareUpdateChannel")||T("releaseChannelText")||"").trim()}}function mg(e){let t=O[e];if(!t)return;if(e==="setupComplete")return Na();let r=T(e);if(r===""||r===null||r===void 0)return;if(t.domain==="switch"||t.domain==="binary_sensor")return C(e);if(t.domain==="number"){let a=Re(r);return Number.isNaN(a)?void 0:a}return t.domain==="time"?Rt(r)||void 0:t.domain==="datetime"?Ge(r)||void 0:String(r||"").trim()||void 0}function gg(e=null){let t={};return Jt.forEach(r=>{let n={};r.keys.forEach(a=>{let i=mg(a);i!==void 0&&(n[a]=i)}),t[r.id]=n}),{schema_version:Ss,exported_at:new Date().toISOString(),source:pq(),settings:t,mqtt:e}}async function fg(){let e=await fetch("/mqtt/status",{cache:"no-store"});if(e.status===404)return null;if(!e.ok)throw new Error(`MQTT-status HTTP ${e.status}`);return e.json()}function mq(e=gg()){let t=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${t}.json`}function lc(e){let t=O[e];return t?.name?t.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function og(e,t){if(t==null||t==="")return"\u2014";let r=O[e];return r?r.domain==="number"?J(e,t):r.domain==="time"?Rt(t)?.slice(0,5)||"\u2014":r.domain==="datetime"?Ge(t)||"\u2014":r.domain==="switch"||r.domain==="binary_sensor"?t?"Aan":"Uit":String(t).trim()||"\u2014":String(t).trim()||"\u2014"}function gq(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function cc(e){let t=e?.settings&&typeof e.settings=="object"?e.settings:{},r=e?.source&&typeof e.source=="object"?e.source:{},n=Yu,a=0,i=0,l=0,c=0,u=0,p=0,g=0,w=0,y=Jt.map(h=>{let m=t[h.id]&&typeof t[h.id]=="object"?t[h.id]:{},d=0,b=0,S=0,q=0,E=0,k=0,$=0,_=h.keys.map(P=>{let H=!!O[P]?.optional,F=Object.prototype.hasOwnProperty.call(m,P),A=F?m[P]:void 0,L=mg(P),D=v(P),N=F?og(P,A):H?"Niet op huidige installatie":"Ontbreekt in backup",Z=D?og(P,L):H?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie",I="same";return!F&&H?I="optional-missing":F?D?JSON.stringify(L)!==JSON.stringify(A)&&(I="different"):I=H?"optional-unavailable":"current-missing":I="missing",D&&($+=1,w+=1),I!=="same"&&(k+=1,g+=1),H?(E+=1,F?(S+=1,l+=1):(q+=1,c+=1)):F?(d+=1,a+=1):(b+=1,i+=1),{key:P,label:lc(P),optional:H,hasBackupValue:F,backupDisplay:N,currentDisplay:Z,status:I,statusLabel:gq(I)}});return p+=h.keys.filter(P=>!O[P]?.optional).length,{id:h.id,label:h.label,present:d,currentPresent:$,requiredTotal:h.keys.filter(P=>!O[P]?.optional).length,optionalTotal:E,optionalPresent:S,optionalMissing:q,requiredMissing:b,total:h.keys.length,differenceCount:k,rows:_}});return Object.entries(t).forEach(([h,m])=>{if(!Jt.some(d=>d.id===h)){u+=1;return}!m||typeof m!="object"||Object.keys(m).forEach(d=>{n.has(d)||(u+=1)})}),{source:r,sectionSummaries:y,requiredPresent:a,requiredMissing:i,requiredAvailable:p,optionalPresent:l,optionalMissing:c,unknown:u,differenceCount:g,currentPresent:w,requiredTotal:p,total:go.length}}function fq(e,t=""){let r=JSON.parse(e);if(!r||typeof r!="object")throw new Error("Backupbestand bevat geen JSON-object.");let n=Number(r.schema_version??r.schemaVersion??0);if(!Number.isInteger(n)||n<1||n>Ss)throw new Error("Onbekende backupversie.");let a=r.settings&&typeof r.settings=="object"?r.settings:{},i=n>=2?Ym(r.mqtt):null,l={schema_version:n,exported_at:String(r.exported_at||""),source:r.source&&typeof r.source=="object"?r.source:{},settings:a,mqtt:i,file_name:t||""};return l.summary=cc(l),l}async function hq(){o.settingsBackupBusy=!0,o.controlError="",o.controlNotice="",f();try{await V(go,"all");let e=await fg();return gg(Qm(e))}finally{o.settingsBackupBusy=!1,f()}}async function bq(){if(!o.settingsBackupBusy)try{let e=await hq();wd(mq(e),e),o.controlNotice="Settings-backup gedownload.",f()}catch(e){o.controlError=`Backup exporteren mislukt. ${e.message}`,f()}}async function hg(e){if(!(!e||o.settingsBackupBusy)){o.settingsBackupBusy=!0,o.settingsBackupDraft=null,o.settingsBackupMqttPassword="",o.settingsBackupRestoreResult=null,o.settingsBackupError="",o.controlError="",o.controlNotice="",f();try{let t=await e.text();await V(go,"all");let r=fq(t,e.name||"");o.settingsBackupDraft=r,o.systemModal="settings-backup-restore"}catch(t){o.settingsBackupDraft=null,o.settingsBackupError=`Backupbestand kon niet worden gelezen. ${t.message}`}finally{o.settingsBackupBusy=!1,f()}}}function Fe(e,t,r,n="",a="warning"){return{key:e,section:t,label:{"mqtt.config":"MQTT-configuratie"}[e]||(e.startsWith("mqtt.")?e.replace(/^mqtt\./,"MQTT ").replaceAll("_"," "):lc(e)),reason:r,detail:n,severity:a}}function wq(e){return Zm(e?.settings,Jt).map(({section:t,key:r})=>({key:r,section:t,label:lc(r),reason:"Onbekend veld",detail:"Deze firmware kent dit veld niet; de waarde is niet toegepast.",severity:"warning"}))}async function qi(e,t,r){let n=new URLSearchParams;n.set("csrf_token",t),Object.entries(r).forEach(([l,c])=>n.set(l,String(c)));let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:n.toString()}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`)}async function yq(e,t){if(!e)return null;if(Un(e)&&!t)throw new Error("MQTT-wachtwoord ontbreekt.");let r=await fg(),n=String(r?.csrf_token||"");if(!r||!n)throw new Error("MQTT-configuratie is niet beschikbaar op deze firmware.");return await qi("/mqtt/save",n,{enabled:!1,broker:e.broker,port:e.port,username:e.username,password:t||"",clear_password:!e.password_was_set}),{csrfToken:n,mqtt:e}}async function vq(e,t){if(!e)return;let{csrfToken:r,mqtt:n}=e;for(let a of wi)await qi("/mqtt/input/save",r,{input:a,enabled:n.input_enabled[a]}),t.push(`mqtt.input_enabled.${a}`);for(let a of yi)await qi("/mqtt/input/retained/save",r,{input:a,accept_retained:n.input_accept_retained[a]}),t.push(`mqtt.input_accept_retained.${a}`);n.enabled&&await qi("/mqtt/save",r,{enabled:!0,broker:n.broker,port:n.port,username:n.username,password:"",clear_password:!1}),t.push("mqtt.config")}function bg(e,t){return e&&!t}function Sq(e,t,r){return!bg(e,t)||r}async function qq(){let e=o.settingsBackupDraft;if(!e||o.settingsBackupBusy)return;let t=String(o.settingsBackupMqttPassword||"");if(Un(e.mqtt)&&!t){o.settingsBackupError="Vul het MQTT-wachtwoord in om deze backup te herstellen.",f();return}o.settingsBackupBusy=!0,o.settingsBackupError="",o.controlError="",o.controlNotice="",f();let r=[],n=[],a=wq(e),i=[],l=!1,c=!1,u=!0,p=null,g=!1,w=e.mqtt?"":"Backup bevat geen MQTT-configuratie.";try{if(await V([...go,"usageTelemetryEnabled"],"all"),c=C("setupComplete"),e.mqtt)try{p=await yq(e.mqtt,t)}catch(d){w=String(d?.message||d),n.push(Fe("mqtt.config","mqtt","MQTT niet voorbereid",w,"error"))}for(let d of Jt){let b=e.settings?.[d.id]&&typeof e.settings[d.id]=="object"?e.settings[d.id]:{};for(let S of d.keys){if(!Object.prototype.hasOwnProperty.call(b,S)){n.push(Fe(S,d.label,"Ontbreekt in backup","De huidige firmwarewaarde of firmware-default is behouden."));continue}let q=b[S];if(S==="setupComplete"){l=q===!0;continue}if(S==="openquattEnabled")continue;if(Jm(S,q)){i.push({key:S,value:q,section:d});continue}if(!O[S]||!v(S)){n.push(Fe(S,d.label,"Niet beschikbaar","Deze instelling bestaat niet op de huidige installatie of firmware."));continue}try{await Wt(S,q),r.push(S)}catch(k){n.push(Fe(S,d.label,"Schrijven mislukt",String(k?.message||k),"error"))}}}if(p)try{await vq(p,r),g=!0}catch(d){w=String(d?.message||d),n.push(Fe("mqtt.config","mqtt","MQTT herstellen mislukt",`${w} MQTT blijft uitgeschakeld.`,"error"))}for(let{key:d,value:b,section:S}of i){if(!g){n.push(Fe(d,S.label,"MQTT-bron niet toegepast",`${w||"MQTT kon niet worden hersteld."} De huidige bronselectie is behouden.`,"error"));continue}if(!O[d]||!v(d)){n.push(Fe(d,S.label,"Niet beschikbaar","Deze instelling bestaat niet op de huidige installatie of firmware."));continue}try{await Wt(d,b),r.push(d)}catch(E){n.push(Fe(d,S.label,"Schrijven mislukt",String(E?.message||E),"error"))}}let y=e.settings?.operation||{};if(Object.prototype.hasOwnProperty.call(y,"openquattEnabled"))if(!v("openquattEnabled"))n.push(Fe("openquattEnabled","Bediening","Niet beschikbaar","De OpenQuatt-regeling kon niet naar de backupwaarde worden gezet."));else try{await Wt("openquattEnabled",y.openquattEnabled),r.push("openquattEnabled")}catch(d){n.push(Fe("openquattEnabled","Bediening","Schrijven mislukt",String(d?.message||d),"error"))}let h=bg(l,c),m=v("usageTelemetryEnabled");if(!Sq(l,c,m))u=!1,n.push(Fe("usageTelemetryEnabled","Installatie","Gebruiksstatistieken niet beschikbaar","Setup kan niet veilig worden afgerond zolang deze instelling ontbreekt.","error"));else if(h)try{if(await Wt("usageTelemetryEnabled",!1),!await eg("usageTelemetryEnabled",!1))throw new Error("De controller bevestigde niet dat gebruiksstatistieken uitstaan.");r.push("usageTelemetryEnabled")}catch(d){u=!1,n.push(Fe("usageTelemetryEnabled","Installatie","Gebruiksstatistieken uitschakelen mislukt",String(d?.message||d),"error"))}if(l&&O.apply&&u)try{let d=await fetch(Q("button","Complete setup","press"),{method:"POST"});if(!d.ok)throw new Error(`HTTP ${d.status}`);r.push("setupComplete")}catch(d){n.push(Fe("setupComplete","Installatie","Setup bevestigen mislukt",String(d?.message||d),"error"))}else l&&!u?n.push(Fe("setupComplete","Installatie","Setup bewust niet afgerond","Gebruiksstatistieken konden niet veilig worden uitgeschakeld.","error")):Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&n.push(Fe("setupComplete","Installatie","Bewust niet toegepast","De setup stond in de backup niet als voltooid."));try{await ye()}catch{}o.settingsBackupRestoreResult={applied:r,skipped:n,unknown:a,mqttIncluded:!!e.mqtt,sourceSchemaVersion:e.schema_version},o.systemModal="settings-backup-success",o.controlNotice=`Backup hersteld (${r.length} toegepast${n.length?`, ${n.length} niet toegepast`:""}${a.length?`, ${a.length} onbekend`:""}).`,Jn()}catch(y){o.settingsBackupError=`Backup herstellen mislukt. ${y.message}`,o.settingsBackupMqttPassword=""}finally{o.settingsBackupBusy=!1,f()}}function Xr(){return!1}async function uc(e={}){if(!yt()){let n=!!(o.trendHistoryRaw||o.trendHistoryError);return o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,n}if(Xr())return!1;let t=e.force===!0,r=Date.now();if(!t&&o.trendHistoryFetchPromise)return o.trendHistoryFetchPromise;if(!t&&(o.trendHistoryRaw||o.trendHistoryError)&&r-Number(o.trendHistoryLastFetchAt||0)<pn)return!1;o.trendHistoryFetchPromise=(async()=>{let n=Qn(o.trendWindowHours||Ht);n!==o.trendWindowHours&&Jr(n);let a=await fetch(`${_e()}/trends/history?hours=${encodeURIComponent(String(n))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let i=await a.text(),l=i.split(/\r?\n/),c=Number.NaN,u=i;l.length&&l[0].startsWith("@now|")&&(c=Number(l[0].slice(5)),u=l.slice(1).join(`
`));let p=`${n}|${u.length}|${u.slice(0,120)}|${u.slice(-120)}`,g=Number.isFinite(o.trendHistoryNowMs),y=Number.isFinite(c)?!g||o.trendHistoryNowMs!==c:g,h=u!==o.trendHistoryRaw||o.trendHistoryError!==""||o.trendHistorySignature!==p||y;return o.trendHistoryRaw=u,o.trendHistoryError="",o.trendHistorySignature=p,o.trendHistoryNowMs=Number.isFinite(c)?c:Number.NaN,o.trendHistoryLastFetchAt=Date.now(),h})();try{return await o.trendHistoryFetchPromise}catch(n){let a=`Trendhistorie kon niet worden geladen. ${n.message}`,i=o.trendHistoryError!==a;return o.trendHistoryError=a,o.trendHistoryRaw="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=Date.now(),i}finally{o.trendHistoryFetchPromise=null}}async function hr(e={}){if(!v("lifetimeEnergyHistoryEnabled")&&!Xr()){let a=!!(o.energyHistoryRaw||o.energyHistoryError);return o.energyHistoryRaw="",o.energyHistoryError="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=0,o.energyHistoryRequestQuery="",o.energyHistoryFetchQuery="",o.energyHistoryCsrfToken="",a}let t=e.force===!0,r=Date.now(),n=e.metaOnly===!0?"?meta=1":typeof Gn=="function"?Gn():"";if(!t&&o.energyHistoryFetchPromise&&o.energyHistoryFetchQuery===n)return o.energyHistoryFetchPromise;if(!t&&o.energyHistoryRequestQuery===n&&(o.energyHistoryRaw||o.energyHistoryError)&&r-Number(o.energyHistoryLastFetchAt||0)<pn)return!1;o.energyHistoryFetchQuery=n,o.energyHistoryFetchPromise=(async()=>{let a=async d=>{let b=await fetch(`${_e()}/energy/history${d}`,{cache:"no-store"});if(!b.ok)throw new Error(`HTTP ${b.status}`);return b.text()},i=n,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof Gn=="function"){let d=o.energyHistoryRaw;o.energyHistoryRaw=l;let b=Gn();o.energyHistoryRaw=d,b&&b!==i&&(i=b,l=await a(i))}let c=l.split(/\r?\n/),u=pg(l)||o.energyHistoryCsrfToken,p=Number.NaN;c.forEach(d=>{d.startsWith("@now|")&&(p=Number(d.slice(5)))});let g=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,w=Number.isFinite(o.energyHistoryNowMs),h=Number.isFinite(p)?!w||o.energyHistoryNowMs!==p:w,m=l!==o.energyHistoryRaw||o.energyHistoryError!==""||o.energyHistorySignature!==g||h||u!==o.energyHistoryCsrfToken;return o.energyHistoryRaw=l,o.energyHistoryError="",o.energyHistorySignature=g,o.energyHistoryNowMs=Number.isFinite(p)?p:Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=i,o.energyHistoryCsrfToken=u,m})();try{return await o.energyHistoryFetchPromise}catch(a){let i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=o.energyHistoryError!==i;return o.energyHistoryError=i,o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=n,o.energyHistoryCsrfToken="",l}finally{o.energyHistoryFetchPromise=null}}ap({refreshEnergyHistoryData:hr,refreshSettingsStorageState:ki,refreshTrendHistoryData:uc,refreshTrendHistoryMetadata:ng,shouldRefreshSettingsStorageForCurrentSurface:dq});var kq={"flush-trend-history":({triggerNamedButton:e})=>e("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:to(),refreshDelayMs:500}).then(()=>{Ro(void 0,{forceTrendHistory:!0})}),"flush-decision-log-history":({triggerNamedButton:e})=>e("decisionLogHistoryFlush",{successNotice:"Beslisloghistorie is opgeslagen.",errorPrefix:"Beslisloghistorie kon niet worden opgeslagen",refreshKeys:to(),refreshDelayMs:500}).then(()=>{o.decisionLogStorageMetadataLastFetchAt=0,Ro(void 0,{forceDecisionLog:!0})}),"clear-decision-log-history":({triggerNamedButton:e})=>{if(window.confirm(`Beslisloghistorie wissen?

Alle bewaarde gebeurtenissen worden verwijderd. De actuele beslislog blijft beschikbaar.`))return e("decisionLogHistoryClear",{successNotice:"Beslisloghistorie is gewist.",errorPrefix:"Beslisloghistorie kon niet worden gewist",refreshKeys:to(),refreshDelayMs:500}).then(()=>{o.decisionLogStorageMetadataLastFetchAt=0,Ro(void 0,{forceDecisionLog:!0})})},"save-lifetime-energy-history":({triggerNamedButton:e})=>e("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:to(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,Ro(),o.appView==="results"&&hr({force:!0}).then(()=>f())}),"clear-lifetime-energy-history":({triggerNamedButton:e})=>{if(window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return e("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:to(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,Ro(),o.appView==="results"&&hr({force:!0}).then(()=>f())})},"select-energy-history-import-file":()=>cq(),"clear-energy-history-import-file":()=>{ig(),f()},"import-energy-history-file":()=>uq(),"export-energy-history":()=>QS(),"open-history-storage-modal":()=>{o.settingsStoragePage="overview",o.systemModal="history-storage",f();let e=ki({forceMissing:!0,forceTrendHistory:!0,forceDecisionLog:!0,forceEnergyHistory:!0}).finally(()=>{o.systemModal==="history-storage"&&f()});return Ro([1e3,3e3,7e3]),e},"open-storage-diagnosis":()=>{o.settingsStoragePage="diagnosis",f()},"open-storage-decision-log":()=>{o.settingsStoragePage="decision-log",f()},"open-storage-energy":()=>{o.settingsStoragePage="energy",f()},"back-storage-overview":()=>{o.settingsStoragePage="overview",f()},"download-settings-backup":()=>bq(),"open-settings-backup-import":()=>{o.settingsBackupMqttPassword="",o.settingsBackupRestoreResult=null,o.settingsBackupError="",o.systemModal="settings-backup-import",f()},"confirm-settings-backup-restore":()=>qq()};function wg(e,t){return ie(kq,e,t)}function dc(e,t,r="",n=!1){return`
      <div class="oq-settings-storage-summary-metric${n?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<em>${s(r)}</em>`:""}
      </div>
    `}function vg(e){let t=String(e||"").trim(),r=t.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return r?`${r[1]} ${r[1]==="1"?"dag":"dagen"}`:t}function Ti(e,t,r,n="",a="",i=""){if(!v(e))return"";let l=!!T(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(r)}</p>
          ${El(e,l,n,a)}
        </div>
        ${qt(e,t,l,c)}
      </article>
    `}function Eq(e,t,r,n=""){if(!v(e))return"";let a=o.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(T(e)||"");return i.length?`
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
            ${i.map(c=>`<option value="${s(c)}" ${c===l?"selected":""}>${s(ke(c))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function Tq(e){return v(e)||!!O[e]&&!o.optionalMissingEntities?.[e]}function Zn(e,t,r,n={}){if(!Tq(e))return"";let a=v(e),i=a&&(o.loadingEntities||o.busyAction===e),l=n.disabled===!0||!a,c=n.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(c)}"
        type="button"
        data-oq-action="${s(r)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&n.busyLabel||t)}
      </button>
    `}function Cq(){return o.trendHistoryMetadata&&typeof o.trendHistoryMetadata=="object"?o.trendHistoryMetadata:{}}function en(){return!!o.trendHistoryMetadataSignature}function tn(){return!!(o.energyHistoryRaw||o.energyHistorySignature)}function ut(e){return e?"Niet geladen":"Laden..."}function je(e,t="\u2014"){if(v(e))return He(e);let r=xq(e);return r==null||r===""?t:r}function xq(e){let t=Cq();if(e==="trendHistoryFlashAvailable")return en()?t.available||"Alleen live":ut(o.trendHistoryMetadataError);if(e==="trendHistoryFlashOldest")return en()?t.oldest||"Geen data":ut(o.trendHistoryMetadataError);if(e==="trendHistoryFlashNewest")return en()?t.newest||"Geen data":ut(o.trendHistoryMetadataError);if(e==="trendHistoryFlashLastFlush")return en()?t.lastFlush||"Geen data":ut(o.trendHistoryMetadataError);if(e==="trendHistoryFlashSize")return en()?xi(t.sizeKb):ut(o.trendHistoryMetadataError);if(e==="trendHistoryFlashWrites")return en()?Xn(t.writes):ut(o.trendHistoryMetadataError);let r=Eg(),a=String(o.energyHistoryRaw||"").includes("@day_retention|");return e==="lifetimeEnergyHistoryAvailable"?tn()?a&&!r.dayPartitionAvailable?"Niet beschikbaar":Sg(r.storedDayCount,"Geen data"):ut(o.energyHistoryError):e==="lifetimeEnergyHistoryOldest"?tn()?yg(r.oldestDateKey):ut(o.energyHistoryError):e==="lifetimeEnergyHistoryNewest"?tn()?yg(r.newestDateKey):ut(o.energyHistoryError):e==="lifetimeEnergyHistoryLastWrite"?tn()?Ci(r.dayLastWriteTimestampS):ut(o.energyHistoryError):e==="lifetimeEnergyHistorySize"?tn()?xi(r.dayStorageKb):ut(o.energyHistoryError):e==="lifetimeEnergyHistoryWrites"?tn()?Xn(r.dayWriteCount):ut(o.energyHistoryError):null}function Sg(e,t="Geen data"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:`${Math.round(r)} ${Math.round(r)===1?"dag":"dagen"}`}function qg(e,t="Nog geen historie"){let r=Math.max(0,Math.round(Number(e)||0));return r<=0?t:`${r} ${r===1?"gebeurtenis":"gebeurtenissen"}`}function kg(){return o.decisionLogStorageMetadata&&typeof o.decisionLogStorageMetadata=="object"?o.decisionLogStorageMetadata:{}}function xi(e,t="\u2014"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:`${Math.round(r)} kB`}function Xn(e,t="0"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:String(Math.round(r))}function yg(e){let t=ne(e);return t?t.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function Ci(e,t="Geen data"){let r=Number(e);if(!Number.isFinite(r)||r<=0)return t;let n=new Date(r*1e3),a=n.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function Eg(){return gi(o.energyHistoryRaw)}function $q(e){let t=Array.isArray(e.items)?e.items:[];return`
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
    `}function pc(e){let t=e.filter(Boolean);return t.length?`
      <details class="oq-settings-storage-technical"${o.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Bewaartermijn, ruimte en opslagmomenten</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(t.map(r=>`${r.shortLabel}: ${r.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${t.map($q).join("")}
        </div>
      </details>
    `:""}function Tg(){if(!v("trendHistoryEnabled")&&!v("decisionLogHistoryEnabled")&&!v("lifetimeEnergyHistoryEnabled"))return"";let e=C("trendHistoryEnabled"),t=e&&C("trendHistoryFlashEnabled"),r=v("lifetimeEnergyHistoryEnabled"),n=r&&C("lifetimeEnergyHistoryEnabled"),a=v("decisionLogHistoryEnabled"),i=a&&C("decisionLogHistoryEnabled"),l=kg(),c=t?je("trendHistoryFlashAvailable","Alleen live"):"Alleen live",u=r?vg(je("lifetimeEnergyHistoryAvailable","Geen data")):"Geen data";return re("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${v("trendHistoryEnabled")?dc("Diagnose",t?c:e?"Alleen live":"Uit",t?"Blijft bewaard na herstart":"Tijdelijk",e):""}
            ${a?dc("Beslislog",i?qg(l.storedEvents):"Alleen sinds herstart",i?"Maximaal 7 dagen":"Tijdelijk",i):""}
            ${r?dc("Energie",u,n?"Blijft bewaard na herstart":"Uit",n):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function Mq(){if(!v("lifetimeEnergyHistoryEnabled"))return"";let e=o.energyHistoryImportRecords.length,t=new Set(o.energyHistoryImportHourRecords.map(c=>c.dateKey)).size,r=[];e>0&&r.push(`${e} dagrecords`),t>0&&r.push(`${t} uurdagen`),o.energyHistoryImportRange&&r.push(o.energyHistoryImportRange),o.energyHistoryImportSource&&r.push(o.energyHistoryImportSource),o.energyHistoryImportInvalidCount>0&&r.push(`${o.energyHistoryImportInvalidCount} regels niet gebruikt`);let n=!!o.energyHistoryImportFileName,a=e>0||t>0,i=Number(o.energyHistoryImportProgressPercent||0),l=o.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
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
    `}function Aq(){if(!v("lifetimeEnergyHistoryEnabled"))return"";let e=Zr(o.energyHistoryExportMode),t=Yn.map(n=>`
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
    `}function Cg(){let e=["diagnosis","decision-log","energy"].includes(o.settingsStoragePage)?o.settingsStoragePage:"overview",t=v("trendHistoryEnabled")&&C("trendHistoryEnabled"),r=t&&v("trendHistoryFlashEnabled")&&C("trendHistoryFlashEnabled"),n=v("decisionLogHistoryEnabled"),a=n&&C("decisionLogHistoryEnabled"),i=kg(),l=qg(i.storedEvents),c=v("lifetimeEnergyHistoryEnabled"),u=c&&C("lifetimeEnergyHistoryEnabled"),p=c?je("lifetimeEnergyHistoryAvailable","Geen data"):"Geen data",g=vg(p),w=v("lifetimeEnergyHistoryClear")&&!["Geen data","\u2014"].includes(p),y=t&&v("trendHistoryFlush"),h=a&&v("decisionLogHistoryFlush"),m=v("lifetimeEnergyHistoryCapture"),d=Eg(),b=String(o.energyHistoryRaw||"").includes("@hour_retention|"),S=b&&!d.hourPartitionAvailable,q=b?S?"Alleen live":Sg(d.hourStoredDayCount,"Geen uurdata"):"Laden...",E=b&&!S?xi(d.hourStorageKb):"\u2014",k=b&&!S?Xn(d.hourWriteCount):"\u2014",$=b&&!S?Ci(d.hourLastWriteTimestampS):"Geen data",_=e==="overview"?"":`
      <button class="oq-settings-storage-back" type="button" data-oq-action="back-storage-overview">
        <span aria-hidden="true">\u2190</span> Opslagoverzicht
      </button>`,P=(N,Z,I,W,ee,Ne)=>`
      <button class="oq-settings-storage-hub-item${Ne?" is-on":""}" type="button" data-oq-action="${s(N)}">
        <span class="oq-settings-storage-hub-copy">
          <span>${s(Z)}</span>
          <strong>${s(I)}</strong>
          <em>${s(W)}</em>
        </span>
        <span class="oq-settings-storage-hub-status">
          <strong>${s(ee)}</strong>
          <span aria-hidden="true">\u203A</span>
        </span>
      </button>`,B={title:"Diagnosegeschiedenis",meta:"Technische details",shortLabel:"Diagnose",primary:je("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${je("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:je("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:je("trendHistoryFlashSize")},{label:"Opslagacties",value:je("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:je("trendHistoryFlashLastFlush","Geen data")}]},H={title:"Beslisloghistorie",meta:"Technische details",shortLabel:"Beslislog",primary:a?l:"Alleen sinds herstart",note:i.lastFlushEpochS?`Laatst opgeslagen: ${Ci(i.lastFlushEpochS)}`:"Nog niet opgeslagen",items:[{label:"Aantal",value:Xn(i.storedEvents)},{label:"Ruimte",value:xi(Number(i.storageBytes||0)/1024)},{label:"Schrijfacties",value:Xn(i.writeCount)},{label:"Laatste opslag",value:Ci(i.lastFlushEpochS)}]},F=[{title:"Dagtotalen",meta:"Technische details",shortLabel:"Dag",primary:g,note:`${je("lifetimeEnergyHistoryOldest","Geen data")} t/m ${je("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:g},{label:"Opslagruimte",value:je("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:je("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:je("lifetimeEnergyHistoryLastWrite","Geen data")}]},v("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Technische details",shortLabel:"Uur",primary:q,note:"Detail voor de daggrafiek",items:[{label:"Dagen bewaard",value:q},{label:"Opslagruimte",value:E},{label:"Opslagacties",value:k},{label:"Laatst opgeslagen",value:$}]}:null],A="Gegevens bewaren",L="Kies welk soort historie je wilt bekijken of aanpassen. Dit verandert niets aan de aansturing van je warmtepomp.",D=`
      <div class="oq-settings-storage-hub">
        ${P("open-storage-diagnosis","Diagnose","Technische meetgegevens","Temperaturen, doorstroming en vermogen voor grafieken en support.",r?je("trendHistoryFlashAvailable","Historie actief"):t?"Alleen live":"Uit",t)}
        ${n?P("open-storage-decision-log","Beslislog","Keuzes van de controller","Exacte momenten, redenen, bronwissels en bescherming.",a?`${l} \xB7 max. 7 dagen`:"Alleen sinds herstart",a):""}
        ${c?P("open-storage-energy","Resultaten","Energiehistorie","Dagtotalen en uurdetail voor opbrengst, verbruik en rendement.",u?g:"Uit",u):""}
      </div>
      <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> gegevens die worden bewaard, blijven beschikbaar na een herstart. Tijdelijke gegevens bestaan alleen zolang de controller online is.</p>`;return e==="diagnosis"?(A="Diagnosegegevens",L="Beheer technische meetreeksen voor diagnosegrafieken en hulp bij problemen.",D=`${_}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${Ti("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Deze gegevens zijn tijdelijk en verdwijnen na een herstart.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
          ${Ti("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat ongeveer ieder uur een blok op.","Bestaande geschiedenis blijft staan.","Blijft bewaard na herstart")}
          ${y?`<div class="oq-settings-storage-inline-action"><div><h4>Diagnose nu opslaan</h4><p>Maak v\xF3\xF3r een update of herstart een extra opslagmoment.</p></div>${Zn("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!r,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${pc([B])}`):e==="decision-log"?(A="Beslisloghistorie",L="Bewaar exacte controllerkeuzes en gebeurtenissen, maximaal zeven dagen.",D=`${_}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${Ti("decisionLogHistoryEnabled","Beslisloghistorie bewaren","Bewaar exacte momenten en redenen uit de beslislog.","De laatste zeven dagen blijven beschikbaar na een herstart of update.","De actuele beslislog blijft tijdelijk beschikbaar; bestaande historie blijft staan.","Blijft bewaard na herstart")}
          ${h?`<div class="oq-settings-storage-inline-action"><div><h4>Beslislog nu opslaan</h4><p>Sla nieuwe gebeurtenissen alvast op v\xF3\xF3r een update of herstart.</p></div>${Zn("decisionLogHistoryFlush","Nu opslaan","flush-decision-log-history",{disabled:!a,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${pc([H])}
      ${v("decisionLogHistoryClear")?`<details class="oq-settings-storage-advanced"${o.settingsStorageAdvancedOpen?" open":""}><summary data-oq-action="toggle-storage-advanced">Geavanceerd</summary><div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger"><div><h4>Beslisloghistorie wissen</h4><p>Verwijder alle bewaarde gebeurtenissen. De actuele beslislog blijft staan.</p></div>${Zn("decisionLogHistoryClear","Historie wissen","clear-decision-log-history",{disabled:Number(i.storedEvents||0)<=0,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}</div></details>`:""}`):e==="energy"&&(A="Energiehistorie",L="Beheer dagtotalen en uurdetail voor de Resultatenpagina.",D=`${_}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${Ti("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Resultaten blijven beschikbaar na een herstart of update.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Blijft bewaard na herstart")}
          ${Eq("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur bewaart voor de daggrafiek.","Bewaartermijn")}
          ${m?`<div class="oq-settings-storage-inline-action"><div><h4>Vandaag alvast opslaan</h4><p>Maak v\xF3\xF3r een update of herstart een extra opslagmoment.</p></div>${Zn("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!u,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${pc(F)}
      <details class="oq-settings-storage-advanced"${o.settingsStorageAdvancedOpen?" open":""}><summary data-oq-action="toggle-storage-advanced">Geavanceerd</summary><div class="oq-settings-storage-advanced-body">${Aq()}${Mq()}${v("lifetimeEnergyHistoryClear")?`<div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger"><div><h4>Energiehistorie wissen</h4><p>Verwijder alle bewaarde dagtotalen en begin opnieuw.</p></div>${Zn("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!w,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}</div>`:""}</div></details>`),te({id:"system",titleId:"oq-history-storage-modal-title",kicker:e==="overview"?"Gegevens":"Gegevens bewaren",title:A,copy:L,className:"oq-helper-modal--scrollable oq-settings-storage-modal",sectionAttributes:"data-oq-history-storage-scroller",closeAction:"close-system-modal",closeLabel:"Sluit gegevens bewaren",body:D,actions:'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>'})}function xg(){let e=o.settingsBackupBusy,t=go.length,r=Jt.length;return re("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
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
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">MQTT</span>
              <strong class="oq-settings-backup-stat-value">Zonder wachtwoord</strong>
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
          <p class="oq-settings-action-note">De MQTT-configuratie wordt meegenomen, maar het MQTT-wachtwoord nooit. Ontbrekende en onbekende velden worden na restore benoemd.</p>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}
        </div>
      `)}function $g(){let e=o.settingsBackupBusy;return te({id:"system",titleId:"oq-backup-import-modal-title",kicker:"Beheer",title:"Backup herstellen",copy:"Kies een JSON-backup om de instellingen te vergelijken en daarna gericht terug te zetten.",className:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit backup import popup",body:`
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
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}`,actions:`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>`})}function Mg(){let e=o.settingsBackupDraft;if(!e)return"";let t=e.summary||cc(e),r=String(e.source?.installation||e.source?.device||"Onbekend"),n=Lt(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",c=se(),u=typeof oe=="function"?oe():"",p=l!=="Onbekend"&&u&&l!==u,g=r!=="Onbekend"&&r!==n,w=e.mqtt,y=Un(w),h=y&&!String(o.settingsBackupMqttPassword||""),m=w?w.enabled?"Ingeschakeld":"Uitgeschakeld":"Niet in backup",d=w?`${w.broker||"Geen broker"}:${w.port} \xB7 ${w.password_was_set?"Wachtwoord niet opgeslagen":"Geen wachtwoord ingesteld"}`:"MQTT-configuratie en MQTT-afhankelijke bronselecties worden niet hersteld.",b=p||g?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":t.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return te({id:"system",titleId:"oq-backup-modal-title",kicker:"Beheer",title:"Backup herstellen",copy:"Deze backup zet alleen de instellingen terug die OpenQuatt in de web-app beheert. Klap een sectie open om backup- en huidige waarden naast elkaar te vergelijken.",className:"oq-helper-modal--wide oq-helper-modal--scrollable",sectionAttributes:"data-oq-settings-backup-restore-scroller",closeAction:"close-system-modal",closeLabel:"Sluit backup-popup",body:`
          <div class="oq-helper-modal-grid oq-settings-backup-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backup van</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(l)} \xB7 Firmware: ${s(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${s(n)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(u)} \xB7 Firmware: ${s(c||"Onbekend")}</span>
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
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">MQTT-configuratie</span>
              <strong class="oq-helper-modal-value">${s(m)}</strong>
              <span class="oq-helper-modal-subvalue">${s(d)}</span>
            </div>
          </div>
          ${y?`
            <label class="oq-settings-backup-mqtt-password">
              <span class="oq-helper-modal-label">MQTT-wachtwoord</span>
              <input
                class="oq-helper-input"
                type="password"
                autocomplete="current-password"
                data-oq-backup-mqtt-password="true"
                placeholder="Vul het MQTT-wachtwoord opnieuw in"
                ${o.settingsBackupBusy?"disabled":""}
              >
              <span class="oq-helper-modal-subvalue">Het wachtwoord stond bewust niet in de backup en wordt alleen voor deze restore gebruikt.</span>
            </label>
          `:""}
          <div class="oq-settings-backup-modal-sections">
            ${t.sectionSummaries.map(S=>`
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${s(S.label)}</strong>
                    <em>${s(`${S.total} ${S.total===1?"instelling":"instellingen"} \xB7 ${S.differenceCount?`${S.differenceCount} ${S.differenceCount===1?"verschil":"verschillen"}`:"Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${s(S.differenceCount?`${S.differenceCount} instelling${S.differenceCount===1?"":"en"} wijkt af of ontbreekt.`:"Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${S.rows.map(q=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(q.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(q.label)}</strong>
                          <span>${s(q.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(q.status)}">
                            <span>Backup</span>
                            <strong>${s(q.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(q.status)}">
                            <span>Nu</span>
                            <strong>${s(q.currentDisplay)}</strong>
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
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}`,actions:`
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.settingsBackupBusy?"disabled":""}>Annuleren</button>
        <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${o.settingsBackupBusy||h?"disabled":""}>${o.settingsBackupBusy?"Herstellen...":h?"Vul MQTT-wachtwoord in":"Herstellen"}</button>
      `})}function $i(){return[o.interfacePanelOpen?"open":"closed",o.nativeOpen?"native":"app",o.appView,o.complete?"complete":"incomplete",o.overviewTheme,o.hpVisualMode,U("installationTopology"),U("hardwareProfileText"),U("connectionText"),o.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",o.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",o.firmwareTopologySwitchOpen?"topology-open":"topology-closed",o.updateManualUploadOpen?"upload-open":"upload-closed",o.updateTestFirmwareOpen?"test-open":"test-closed",o.updateTestFirmwareError,U("hpGeneration"),U("projectVersionText"),U("releaseChannelText"),mc()].join("|")}function mc(){let e=Math.max(Number(o.lastEntityResponseAt||0),Number(o.lastEntitySyncAt||0)),t=Number(o.deviceReconnectStartedAt||0);return o.entitySyncFailureCount>0&&!o.deviceReconnectMode?"Bezig":e>0&&(!o.deviceReconnectMode||e>=t)?"Verbonden":o.deviceReconnectMode?bo()?"Verbonden":o.deviceReconnectMode==="reconnect"?"Offline":"Bezig":v("status")&&!C("status")?"Offline":"Bezig"}function gc(){return String(T("projectVersionText")||"").trim()||"\u2014"}function Hq(){let e=gc();return e&&e!=="\u2014"?e:Mo()}function Mi(){let e=o.entities.espInternalTemp;if(!e)return"\u2014";let t=R("espInternalTemp");return Number.isNaN(t)?j("espInternalTemp"):z(t,1,e.uom||" \xB0C")}function Rq(){let e=[["Netwerkstatus",mc()],["IP-adres",Or()]],t=String(T("wifiSsid")||"").trim();t&&e.push(["WiFi SSID",t]);let r=o.entities.wifiSignal;if(r){let n=R("wifiSignal");Number.isNaN(n)||e.push(["WiFi signaal",z(n,0,r.uom||" dBm")])}return e}function Ag(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function Hg(){return[["installation","Installatie",Lt()],["uptime","Uptime",Lr()],["connectivity","Connectiviteit",mc()],["time","Tijd",kl()],["version","Versie",Hq(),!!me()],["debugRecording","Debugopname",ym(),!0],["webserverLog","Logboek",Ja(),!0]]}function Rg(){return cr()}function _g(e){return e==="version"&&Rg()}function ea(){return`
      <div class="oq-helper-status-grid">
        ${Hg().map(([t,r,n,a])=>{let i=Ag(t),l=!!(a||i),c=_g(t);return`
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
    `}function _q(){if(!o.root)return!1;let e=o.root.querySelector(".oq-helper-status-grid");if(!e)return!!o.root.querySelector(".oq-helper-hub");let t=Hg();if(e.querySelectorAll("[data-oq-header-status]").length!==t.length)return e.outerHTML=ea(),!0;for(let[n,a,i,l]of t){let c=e.querySelector(`[data-oq-header-status="${n}"]`);if(!c)return e.outerHTML=ea(),!0;let u=Ag(n),p=!!(l||u);if(c.tagName.toLowerCase()!==(p?"button":"div"))return e.outerHTML=ea(),!0;let g=c.querySelector(".oq-helper-status-label"),w=c.querySelector(".oq-helper-status-value");if(!g||!w)return e.outerHTML=ea(),!0;g.textContent!==a&&(g.textContent=a);let y=_g(n),h=y?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);w.innerHTML!==h&&(w.innerHTML=h),p?c.setAttribute("data-oq-action",u):c.removeAttribute("data-oq-action"),c.classList.toggle("oq-helper-status-item--button",p),c.classList.toggle("oq-helper-status-item--attention",y)}return!0}function Pq(){return""}function fc(){return""}function Pg(){let e=o.nativeOpen?"native":"app",t=Rg();return o.interfacePanelOpen?`
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
          ${ea()}
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
            ${Bl()}
            <button
              class="oq-helper-hub-toggle${t?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${de("more-horizontal","oq-helper-hub-toggle-icon")}${t?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function Ng(){let e=o.nativeOpen?"native":"app",t=o.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",r=o.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(o.controlError)}</p>`:"";return`
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
    `}tp({getSignature:$i,patch:_q});function Dg(){if(o.systemModal==="login")return Pm();if(o.systemModal==="api-security")return _m();if(o.systemModal==="mqtt")return hp();if(o.systemModal==="mqtt-sensors")return bp();if(o.systemModal==="connectivity"){let e=Rq();return te({modalId:"system",titleId:"oq-system-modal-title",kicker:"Systeem",title:"Connectiviteit",closeAction:"close-system-modal",closeLabel:"Sluit systeem-popup",bodyMarkup:`
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
        `})}if(o.systemModal==="settings-backup-restore")return Mg();if(o.systemModal==="settings-backup-import")return $g();if(o.systemModal==="history-storage")return Cg();if(String(o.systemModal||"").startsWith("service-task-"))return Im();if(o.systemModal==="settings-backup-success"){let e=o.controlNotice||"Backup hersteld.",t=o.settingsBackupRestoreResult||{applied:[],skipped:[],unknown:[],mqttIncluded:!1},r=[...t.skipped,...t.unknown],n=r.length?`
        <details class="oq-settings-backup-result-details" open>
          <summary>
            <span>
              <strong>Niet toegepast</strong>
              <em>${s(`${t.skipped.length} overgeslagen \xB7 ${t.unknown.length} onbekend`)}</em>
            </span>
          </summary>
          <div class="oq-settings-backup-result-list">
            ${r.map(a=>`
              <div class="oq-settings-backup-result-item oq-settings-backup-result-item--${s(a.severity||"warning")}">
                <div>
                  <strong>${s(a.label||a.key)}</strong>
                  <code>${s(`${a.section||"Onbekend"} \xB7 ${a.key}`)}</code>
                </div>
                <div>
                  <strong>${s(a.reason||"Niet toegepast")}</strong>
                  ${a.detail?`<span>${s(a.detail)}</span>`:""}
                </div>
              </div>
            `).join("")}
          </div>
        </details>
      `:"";return te({modalId:"system",titleId:"oq-backup-success-modal-title",kicker:"Beheer",title:"Backup hersteld",closeAction:"close-system-modal",closeLabel:"Sluit bevestiging",className:"oq-helper-modal--wide oq-helper-modal--scrollable",bodyMarkup:`
          <p class="oq-helper-modal-copy">${s(e)}</p>
          <div class="oq-settings-backup-result-summary">
            <div><span>Toegepast</span><strong>${s(String(t.applied.length))}</strong></div>
            <div><span>Niet toegepast</span><strong>${s(String(t.skipped.length))}</strong></div>
            <div><span>Onbekend</span><strong>${s(String(t.unknown.length))}</strong></div>
          </div>
          ${n}
          ${t.mqttIncluded?"":'<p class="oq-settings-action-note oq-settings-action-note--warning">Deze backup bevatte geen MQTT-configuratie. Bestaande MQTT-instellingen en MQTT-afhankelijke bronselecties zijn behouden.</p>'}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        `})}if(o.systemModal==="restart-confirm"){let e=o.busyAction==="restartAction";return te({modalId:"system",titleId:"oq-restart-modal-title",kicker:"Systeem",title:"OpenQuatt herstarten?",closeAction:"close-system-modal",closeLabel:"Sluit herstart-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">De webinterface en regeling zijn tijdens de herstart kort niet bereikbaar. Daarna komt OpenQuatt vanzelf terug.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-restart" ${e?"disabled":""}>${e?"Herstarten...":"Herstarten"}</button>
          </div>
        `})}if(o.systemModal==="silent-settings")return te({modalId:"system",titleId:"oq-silent-settings-modal-title",kicker:"Stille uren",title:"Stille uren instellen",modalClass:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit stille-uren-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen. Wijzigingen worden direct toegepast.</p>
          <div class="oq-helper-modal-body">
            ${jm()}
          </div>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        `});if(o.systemModal==="webserver-logs")return im();if(o.systemModal==="debug-recording")return Tm();if(o.systemModal==="openquatt-pause"){let e=C("openquattEnabled"),t=o.busyAction==="openquatt-regulation",r=v("openquattResumeAt"),n=o.loadingEntities||o.entitySyncInFlight,a=r||!n,i=qn(),l=Hr(T("openquattResumeAt")),c=_a();return te({modalId:"system",titleId:"oq-openquatt-pause-modal-title",kicker:"Bediening",title:"Openquatt regeling",modalClass:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit regeling-popup",bodyMarkup:`
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
        `})}return""}function Nq(e=!1){let t=Pa();return t?`
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
    `:""}function hc(){return`
      <div class="oq-settings-curve-grid">
        ${he.map(e=>ce(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${ce("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:Nq()})}
      </div>
    `}function bc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${Co("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function wc(e="oq-settings-grid"){let t=[ce("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),ce("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${Co("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${fd()?ce("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):t}
      </div>
    `}function Dq(e="oq-settings-grid"){let t=[ce("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),ce("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return t.length?`
      <div class="${s(e)}">
        ${t.join("")}
      </div>
    `:""}function yc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${ce("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${ce("housePower","Rated maximum house power","Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10\xB0C buiten is.")}
        ${Lq()}
      </div>
    `}function vc(){let e=ae();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-helper-surface oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(Sa)}"
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
          class="oq-helper-surface oq-settings-strategy-card${e?" is-active":""}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(qa)}"
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
    `}function Lq(){if(!v("phResponseProfile"))return"";let e=String(T("phResponseProfile")||""),t=o.loadingEntities||o.busyAction==="save-phResponseProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{let i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-helper-surface oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${Tl("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${Tl("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:Ir({key:"phResponseProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return ve("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",n,"oq-settings-field--span-2")}function Sc(){if(!v("curveControlProfile"))return"";let e=String(T("curveControlProfile")||""),t=o.loadingEntities||o.busyAction==="save-curveControlProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>Ir({key:"curveControlProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return ve("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",n,"oq-settings-field--span-2")}function Oq(){let e=(N,Z=0)=>{let I=R(N);return Number.isNaN(I)?Z:Math.max(0,I)},r=e("phComfortBelow",.1),n=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-r,l=20+n,c=620,u=184,p=46,g=24,w=18,y=40,h=96,m=c-p-g,d=Math.min(20-1.2,i-.35),b=Math.max(20+1.2,l+.35),S=N=>p+(N-d)/Math.max(.01,b-d)*m,q=S(d),E=S(b),k=S(i),$=S(20),_=S(l),P=Math.abs(i-20)>.001,B=Math.abs(l-20)>.001,H=w+24,F=u-y,A=h-44,L=(N,Z,I,W="")=>{let xt=Math.max(q+4,Math.min(E-110-4,N-55)),gt=N-14,zt=A,et=28,De=h-A+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${Z} ${I}`)}">
          <rect class="oq-ph-concept-hit" x="${gt}" y="${zt}" width="${et}" height="${De}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${N}" cy="${h}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${W?` oq-ph-concept-tooltip--${W}`:""}" transform="translate(${xt} ${A})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(Z)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(I)}</text>
          </g>
        </g>
      `},D=[`M ${q.toFixed(1)} ${H.toFixed(1)}`,`L ${k.toFixed(1)} ${h.toFixed(1)}`,`L ${_.toFixed(1)} ${h.toFixed(1)}`,`L ${E.toFixed(1)} ${F.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(z(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(z(i,1,"\xB0C"))} \u2013 ${s(z(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(z(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${c} ${u}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${q.toFixed(1)}" y="${w}" width="${Math.max(20,k-q).toFixed(1)}" height="${(u-w-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${k.toFixed(1)}" y="${w}" width="${Math.max(20,_-k).toFixed(1)}" height="${(u-w-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${_.toFixed(1)}" y="${w}" width="${Math.max(20,E-_).toFixed(1)}" height="${(u-w-y).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${q}" y1="${w}" x2="${q}" y2="${u-y}" class="oq-ph-concept-axis"></line>
            <line x1="${q}" y1="${h}" x2="${E}" y2="${h}" class="oq-ph-concept-axis"></line>
            <line x1="${$}" y1="${w}" x2="${$}" y2="${u-y}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${D}" class="oq-ph-concept-curve"></path>

            ${P?`<line x1="${k}" y1="${h-12}" x2="${k}" y2="${h+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${$}" y1="${h-14}" x2="${$}" y2="${h+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${B?`<line x1="${_}" y1="${h-12}" x2="${_}" y2="${h+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${P?`<circle cx="${k}" cy="${h}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${$}" cy="${h}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${B?`<circle cx="${_}" cy="${h}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${P?L(k,"Comfort onder setpoint",z(i,1,"\xB0C"),"below"):""}
            ${L($,"Setpoint",z(20,1,"\xB0C"),"setpoint")}
            ${B?L(_,"Comfort boven setpoint",z(l,1,"\xB0C"),"above"):""}

            <text x="${q+8}" y="${w+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${q+8}" y="${u-y-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${q}" y="${u-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${E}" y="${u-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${P?`<text x="${k-5}" y="${u-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(z(i,1,"\xB0C"))}</text>`:""}
            <text x="${$}" y="${u-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(z(20,1,"\xB0C"))}</text>
            ${B?`<text x="${_+5}" y="${u-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(z(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(z(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(z(i,1,"\xB0C"))} \u2013 ${s(z(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(z(l,1,"\xB0C"))}</span>
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
    `}function qc(){let e=[ce("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),ce("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),ce("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${Oq()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function kc(e,t,r){let n=[Co(t,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),Co(r,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return n?`
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
    `:""}function Lg(){let e=Dq();return re("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${wc()}
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
      `)}function Og(){let e=ae()?`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${Sc()}
          </div>
          <div class="oq-settings-curve-shell">
            ${Ec()}
          </div>
          ${hc()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${yc()}
          ${qc()}
        </div>
      `;return re("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${bc()}
        ${vc()}
        ${e}
      `)}function Ec(){let r={top:22,right:18,bottom:38,left:34},n=560-r.left-r.right,a=240-r.top-r.bottom,i=he[0].outdoor,l=he[he.length-1].outdoor,c=h=>r.left+(h-i)/(l-i)*n,u=h=>r.top+(70-h)/50*a,p=[20,30,40,50,60,70].map(h=>{let m=u(h);return`
          <line x1="${r.left}" y1="${m}" x2="${560-r.right}" y2="${m}" class="oq-helper-curve-grid" />
          <text x="8" y="${m+4}" class="oq-helper-curve-axis-label">${h}\xB0</text>
        `}).join(""),g=he.map(h=>`
        <text x="${c(h.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(h.label)}</text>
      `).join(""),w=he.map(h=>`${c(h.outdoor)},${u(be(h.key,T(h.key)))}`).join(" "),y=he.map(h=>{let m=be(h.key,T(h.key));return`
          <g>
            <circle
              cx="${c(h.outdoor)}"
              cy="${u(m)}"
              r="7"
              class="oq-helper-curve-point ${o.draggingCurveKey===h.key?"is-dragging":""}"
              data-curve-key="${s(h.key)}"
            />
            <text x="${c(h.outdoor)}" y="${u(m)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${m.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${p}
          <polyline points="${w}" class="oq-helper-curve-line" />
          ${y}
          ${g}
        </svg>
      </div>
    `}function Iq(){return mn.filter(e=>v($e(e,"Status"))||v($e(e,"Load"))||v(Lo(e,"cooling",0)))}function Fq(e){return Re(Ae(e))}function jq(e){let t=[];return ka.forEach(r=>{let n=-1/0;xr.forEach(a=>{let i=Lo(e,r,a),l=Fq(i);(!Number.isFinite(l)||l<0||l>120||l<n)&&t.push(`${r==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(n=l)})}),{valid:t.length===0,invalid:t}}function Wq(e){let t=String(T(`hp${e}Mode`)||"").trim(),r=Re(T(`hp${e}Freq`)),n=t&&t!=="Onbekend"&&t!=="Unknown",a=Number.isFinite(r),i=n&&/standby|stand-by/i.test(t),l=a&&r<=.5,c=n?i?a?l?"Standby en compressor uit.":`Compressor draait op ${r.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${t}.`:"ODU status is onbekend.";return{mode:n?t:"Onbekend",freq:Number.isFinite(r)?`${r.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:c}}function Vq(e){let t=String(e||"").toUpperCase();return!e||t==="UNKNOWN"||t==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":t.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":t.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":t.includes("WRITE_QUEUED")||t.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":t.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":t.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":t.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":t.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function Ig(e,t){return v(e)?Eo({key:e,value:Ae(e),meta:Be(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${t}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function Bq(e){let t=xr.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${xr.map(r=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${r}</span>
            <div role="cell">${Ig(Lo(e,"cooling",r),r)}</div>
            <div role="cell">${Ig(Lo(e,"heating",r),t+r)}</div>
          </div>
        `).join("")}
      </div>
    `}function Wg(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,r=t?t.closest(".oq-settings-odu-runtime-table"):null;if(!t||!r)return;let n=Array.from(r.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,c)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(c.dataset.oqOduRuntimeTabIndex||0)),a=n.indexOf(t),i=n[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function Kq(e){let t=$e(e,"Enable"),r=$e(e,"Load"),n=$e(e,"Apply"),a=$e(e,"Status"),i=String(T(a)||"").trim()||"Nog niet geladen",l=jq(e),c=Wq(e),u=!!T(t),p=o.loadingEntities||o.busyAction===r||o.busyAction===n,g=p||!u||!l.valid||!c.safe||!v(n),w=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(c.reason)} Laatste compressorfrequentie: ${s(c.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${v(r)?Je(r,o.busyAction===r?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",p):""}
      ${v(t)?qt(t,`HP${e} writes vrijgeven`,u,p,"Enable","Locked"):""}
            ${v(n)?Je(n,o.busyAction===n?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",g):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(Vq(i))}</p>
        </div>
        ${Bq(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&c.safe?" is-ok":" is-warning"}">${s(w)} ${s(c.safe?"":c.reason)}</p>
      </article>
    `}function Vg(){let e=Iq();return e.length?`
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
            ${e.map(t=>Kq(t)).join("")}
          </div>
        </div>
      </details>
    `:""}function Ai(e,t="Aandacht",r="OK"){return`<span class="oq-settings-monitoring-badge${e?" is-warning":" is-clear"}">${s(e?t:r)}</span>`}function on({label:e,value:t,note:r="",active:n=!1}){return`
      <div class="oq-settings-monitoring-row${n?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(t)}</strong>
          ${r?`<span>${s(r)}</span>`:""}
        </div>
        ${Ai(n)}
      </div>
    `}function _o(e){let t=R(e);return Number.isNaN(t)?"\u2014":String(Math.max(0,Math.round(t)))}function zq(e){let t=R(e);if(Number.isNaN(t))return"Nog niet gemeten";if(t<1)return"Zojuist";if(t<60)return`${Math.round(t)} min geleden`;let r=Math.floor(t/60),n=Math.round(t%60);return`${r}u ${n}m geleden`}function Fg(e){let t=R(e);return Number.isNaN(t)||t<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t*1e3))}function Uq(e){if(!e.cyclingAlertLatched)return"";let t=X("compressorCyclingAlertAlternating"),r=_o("compressorCyclingAlertHp1Peak2h"),n=_o("compressorCyclingAlertHp1Peak72h"),a=v("compressorCyclingAlertHp2Peak2h")?_o("compressorCyclingAlertHp2Peak2h"):"",i=v("compressorCyclingAlertHp2Peak72h")?_o("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${Ai(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(Fg("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(Fg("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(r)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(n)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${t?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${o.entities.acknowledgeCompressorCyclingAlert?Je("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function jg(e,t){return v(`${t}CompressorStarts2h`)?`
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${s(e)}</p>
          <span>Laatste start: ${s(zq(`${t}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${s(_o(`${t}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${s(_o(`${t}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${s(_o(`${t}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${s(_o(`${t}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `:""}function Bg(){let e=eo();Rn(e);let t=Nt("cicPollingEnabled"),r=Nt("otEnabled"),n=[v("lowflowFaultActive")?on({label:"Flow",value:X("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:X("lowflowFaultActive")}):"",v("flowMismatch")?on({label:"Flowvergelijking duo",value:X("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:X("flowMismatch")}):""].filter(Boolean).join(""),a=[v("cicDataStale")?on({label:"CIC-data",value:t?X("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:t&&X("cicDataStale")}):"",v("otLinkProblem")?on({label:"OpenTherm",value:r?X("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:r&&X("otLinkProblem")}):""].filter(Boolean).join(""),i=[v("hp1Failures")?on({label:"Warmtepomp 1",value:Ys("hp1Failures"),active:Hn("hp1Failures")}):"",v("hp2Failures")?on({label:"Warmtepomp 2",value:Ys("hp2Failures"),active:Hn("hp2Failures")}):""].filter(Boolean).join(""),l=R("compressorStarts2hWarningLimit"),c=R("compressorStarts72hWarningLimit"),u=X("compressorCyclingWarning2h")||X("compressorCyclingWarning72h")||X("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,p=n?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${n}</div>
      </article>
    `:"",g=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"",w=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"";return re("Bewaking","Installatiebewaking","Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${Ai(e.active,"Aandacht nodig","Alles rustig")}
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
              ${Ai(u)}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${Uq(e)}
            <div class="oq-settings-monitoring-compressor-list">
              ${jg("Warmtepomp 1","hp1")}
              ${jg("Warmtepomp 2","hp2")}
            </div>
            ${lt("compressorStarts2hWarningLimit","Alarmwaarde voor aantal starts per 2 uur","Aantal starts per warmtepomp binnen 2 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"20",valueLabel:Number.isNaN(l)?"\u2014":`${Math.round(l)} starts / 2 uur`})}
            ${lt("compressorStarts72hWarningLimit","Alarmwaarde voor aantal starts per 72 uur","Aantal starts per warmtepomp binnen 72 uur.","oq-settings-field--compact",{minLabel:"1",maxLabel:"120",valueLabel:Number.isNaN(c)?"\u2014":`${Math.round(c)} starts / 72 uur`})}
          </article>
          ${g}
          </div>
          <div class="oq-settings-monitoring-column">
            ${p}
            ${w}
          </div>
        </div>
        </details>
      `)}function Tc(){if(!v("hpGeneration"))return"";let e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:Da,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:Da,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:Ms,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},t=o.entities.hpGeneration||{},r=String(T("hpGeneration")||""),n=ro(t),a=o.loadingEntities||o.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${n.map(i=>{let l=e[i]||{};return Ir({key:"hpGeneration",option:i,currentValue:r,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function Kg(){let e=Lt(),t=o.entities.hpGeneration||{},r=v("hpGeneration")&&ro(t).length>0;return!e&&!r?"":re("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
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
      `)}function Cc(e="oq-settings-grid oq-settings-boiler-simple-grid"){if(!v("boilerCvAssistEnabled"))return"";let t=C("boilerCvAssistEnabled"),r=v("boilerRatedHeatPower"),n=Be("boilerRatedHeatPower"),a=Ae("boilerRatedHeatPower"),i=o.loadingEntities||o.busyAction==="switch-boilerCvAssistEnabled",c=r?Eo({key:"boilerRatedHeatPower",value:a,meta:n,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,u=t&&r?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"";return`
        <div class="${s(e)}">
          ${ve("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${qt("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",t,i)}
              </div>
            `,"oq-settings-field--compact")}

          ${t?ve("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${c}
              </div>
            `,t&&r?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",u):""}
        </div>
      `}function zg(){if(!v("boilerCvAssistEnabled"))return"";let e=C("boilerCvAssistEnabled");return re("Basis","CV-ketel of boiler",e?"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",Cc())}function Ug(){let e=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",t=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return re("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
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
      `)}function Gg(){let e=Mo(),t=Ua(),r=o.busyAction==="restartAction";return re("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          ${Oe({dataValue:"uptime",label:"Uptime",value:Lr()})}
          ${Oe({dataValue:"ip",label:"IP-adres",value:Or()})}
          ${Oe({dataValue:"updates",label:"Updates",value:e,action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>`})}
          ${Oe({dataValue:"webserverLog",label:"Logboek",value:Ja(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>`})}
          ${Oe({dataValue:"debugRecording",label:"Debugopname",value:Fn(),note:ai(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>`})}
          ${Oe({dataValue:"datetime",label:"Datum/tijd",value:t})}
          ${Oe({dataValue:"espTemp",label:"ESP-temp",value:Mi()})}
          ${Oe({dataValue:"restart",label:"Herstart OpenQuatt",value:"Opnieuw opstarten",note:"Dit onderbreekt de webinterface kort.",action:`<button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${r?"disabled":""}
            >
              ${r?"Herstarten...":"Herstarten"}
            </button>`})}
          ${v("statusLedsEnabled")?`
            ${Oe({dataValue:"statusLeds",label:"Status-LEDs",value:C("statusLedsEnabled")?"Aan":"Uit",note:"Schakelt de gele netwerk-LED en rode storings-LED op de Q-edition controller.",action:qt("statusLedsEnabled","Status-LEDs",C("statusLedsEnabled"),o.loadingEntities||o.busyAction==="switch-statusLedsEnabled")})}
          `:""}
        </div>
      `)}function Qg(){let e=[kc("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),kc("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return re("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${ce("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
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
      `)}var Gq=JSON.stringify({schema_version:1,message_id:"c8272f30-b64d-4af0-a13c-bf8e0cbde842",installation_id:"7df1c1f8-fc47-4ac8-b0d7-94d8c42d772f",uptime_s:86420,firmware_version:"v0.44.0",release_channel:"main",hardware_profile:"heatpump_controller_q",hardware_revision:"1.0 (batch 42)",topology:"duo",connection:"wifi",heap_free_b:178432,heap_min_free_b:151008,heap_largest_block_b:98304,psram_free_b:7023616,loop_time_ms:14,esp_internal_temp_c:47.8,wifi_rssi_dbm:-61,reset_reason:"power_on",cic_polling_enabled:!0,cic_compatibility_enabled:!1,ot_thermostat_enabled:!0,boiler_assist_enabled:!0,boiler_connection:"on_off",mqtt_inputs_enabled:!1,trend_ram_enabled:!0,trend_flash_enabled:!1,decision_log_flash_enabled:!1,energy_history_flash_enabled:!0,ram_log_history_enabled:!0},null,2);function Hi({enabled:e,busy:t,settings:r=!1}){let n=r?"Na inschakelen verstuurt OpenQuatt vrijwel direct en daarna ongeveer elk uur technische gegevens naar de OpenQuatt-loggingserver.":"Na het afronden verstuurt OpenQuatt vrijwel direct en daarna ongeveer elk uur technische gegevens naar de OpenQuatt-loggingserver.";return`
    <div class="oq-usage-consent${e?" is-enabled":""}${r?" oq-usage-consent--settings":""}">
      <div class="oq-usage-consent-copy">
        <span class="oq-usage-consent-icon" aria-hidden="true">${de("bar-chart","oq-usage-consent-icon-svg")}</span>
        <div>
          <span class="oq-usage-consent-kicker">Vrijwillige keuze</span>
          <h3>Beperkte statistieken delen</h3>
          <p>${n}</p>
        </div>
      </div>
      <div class="oq-usage-consent-action">
        ${qt("usageTelemetryEnabled","Technische gebruiksstatistieken delen",e,t,"Delen","Niet delen")}
      </div>
    </div>
  `}function Ri({collapsible:e=!1,idPrefix:t="oq-usage",open:r=!1}={}){let n=s(t),a=`${n}-included-title`,i=`${n}-excluded-title`,l=`
    <div class="oq-usage-disclosure-grid">
      <section class="oq-usage-disclosure-column" aria-labelledby="${a}">
        <div class="oq-usage-disclosure-column-head">
          <span class="oq-usage-disclosure-column-icon is-included" aria-hidden="true">${de("bar-chart","oq-usage-disclosure-icon-svg")}</span>
          <h4 id="${a}">In het bericht</h4>
        </div>
        <ul>
          <li><strong>Installatie</strong><span>Willekeurig ID en uptime</span></li>
          <li><strong>Software</strong><span>Versie en releasekanaal</span></li>
          <li><strong>Platform</strong><span>Hardware, opstelling, verbinding en wifi-signaal</span></li>
          <li><strong>Systeemstatus</strong><span>Geheugen, looptijd, chiptemperatuur en herstartreden</span></li>
          <li><strong>Functies</strong><span>Aan/uit-status van CiC, OpenTherm-thermostaat, ketelondersteuning, MQTT-inputs en lokale historie; plus de ketelaansluiting (aan/uit of OpenTherm)</span></li>
        </ul>
      </section>
      <section class="oq-usage-disclosure-column is-excluded" aria-labelledby="${i}">
        <div class="oq-usage-disclosure-column-head">
          <span class="oq-usage-disclosure-column-icon" aria-hidden="true">${de("shield","oq-usage-disclosure-icon-svg")}</span>
          <h4 id="${i}">Niet in het bericht</h4>
        </div>
        <ul>
          <li><strong>Identiteit</strong><span>Geen MAC-adres of netwerkadres</span></li>
          <li><strong>Wifi en toegang</strong><span>Nooit een wifi-netwerknaam, wifi-wachtwoord, gebruikersnaam, ander wachtwoord of inloggegevens</span></li>
          <li><strong>Installatiegedrag</strong><span>Geen verwarmingsmetingen of regelwaarden</span></li>
          <li><strong>Lokale data</strong><span>Geen ingestelde temperaturen, grenzen, MQTT-topics of logs</span></li>
        </ul>
      </section>
    </div>
    <details class="oq-usage-payload-example">
      <summary>Voorbeeld van het verzonden bericht (JSON)</summary>
      <p>Voorbeeldwaarden; de velden en vorm komen overeen met het werkelijke bericht.</p>
      <pre><code>${s(Gq)}</code></pre>
    </details>
    <p class="oq-usage-network-note">${de("server","oq-usage-network-note-icon")} De OpenQuatt-loggingserver kan, zoals iedere internetdienst, technisch wel het bron-IP-adres zien. OpenQuatt slaat dit IP-adres niet op.</p>
  `;return e?`
      <details class="oq-settings-section oq-settings-section--collapsible oq-usage-disclosure oq-usage-disclosure--collapsible"${r?" open":""}>
        <summary class="oq-settings-section-summary" data-oq-action="toggle-usage-telemetry-details">
          <div class="oq-settings-section-head">
            <h3>Wat gaat er mee?</h3>
            <p>Bekijk precies welke technische gegevens wel en niet worden gedeeld.</p>
          </div>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-settings-section-collapsible-body">
          ${l}
        </div>
      </details>
    `:`
    <div class="oq-usage-disclosure">
      <div class="oq-usage-disclosure-head">
        <h3>Wat gaat er mee?</h3>
        <span>Geen verwarmings- of regeldata</span>
      </div>
      ${l}
    </div>
  `}function Qq(){let e=oe(),t=st(),r=`${e}:${t}`,n=o.quickStartSetupDraft||r,[a,i]=n.split(":");return{...ti(a,i),currentKey:r,selectedKey:n,changes:n!==r,targetIsDuo:a==="duo",targetIsEthernet:i==="eth"}}function Yq(){let e=Qq(),t=Et(),r=!!(t||o.updateInstallBusy),n=[["single:wifi","Single \xB7 Wi-Fi","E\xE9n warmtepomp via het draadloze netwerk."],["single:eth","Single \xB7 Ethernet","E\xE9n warmtepomp via een vaste netwerkkabel."],["duo:wifi","Duo \xB7 Wi-Fi","Twee warmtepompen via het draadloze netwerk."],["duo:eth","Duo \xB7 Ethernet","Twee warmtepompen via een vaste netwerkkabel."]],a=[e.targetIsDuo?"De tweede warmtepomp is aangesloten en hoort bij deze controller.":"Deze controller wordt voor \xE9\xE9n warmtepomp gebruikt.",e.targetIsEthernet?"De netwerkkabel is aangesloten.":"De Wi-Fi-gegevens zijn beschikbaar op de controller."];return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("setup"))}</p>
        <h2 class="oq-helper-section-title">Kies je setup</h2>
        <p class="oq-helper-section-copy">De gemarkeerde setup is de configuratie die nu op je Q-edition actief is. Kies alleen een andere setup als je installatie anders is opgebouwd of een andere netwerkverbinding moet gebruiken.</p>
        <div class="oq-helper-fields">
          ${n.map(([i,l,c])=>{let u=e.selectedKey===i,p=e.currentKey===i;return`
              <button
                class="oq-helper-field oq-helper-field--step${u?" is-current":""}"
                type="button"
                data-oq-action="select-quickstart-setup"
                data-setup-target="${s(i)}"
                aria-pressed="${u?"true":"false"}"
                ${r?"disabled":""}
              >
                <div class="oq-helper-field-step-head">
                  <h3>${s(l)}</h3>
                  ${p?'<span class="oq-helper-field-step-state">Actief</span>':""}
                </div>
                <p>${s(c)}</p>
              </button>
            `}).join("")}
        </div>
        ${e.changes?`
          <div class="oq-firmware-advanced-detail">
            ${t?`
              <div class="oq-helper-modal-progress" aria-live="polite">
                <div class="oq-helper-modal-progress-head">
                  <strong>${s(t.phaseLabel)}</strong>
                  <span>${s(`${t.percent}%`)}</span>
                </div>
                <div class="oq-helper-modal-progress-track" aria-hidden="true">
                  <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0,Math.min(100,t.percent))}%"></span>
                </div>
                <p class="oq-helper-modal-note">${s(t.copy)}</p>
              </div>
            `:""}
            <div class="oq-helper-modal-grid">
              <div class="oq-helper-modal-row"><span class="oq-helper-modal-label">Huidige build</span><strong class="oq-helper-modal-value">${s(e.currentBuildLabel)}</strong></div>
              <div class="oq-helper-modal-row"><span class="oq-helper-modal-label">Nieuwe build</span><strong class="oq-helper-modal-value">${s(e.targetBuildLabel)}</strong></div>
            </div>
            <p class="oq-helper-modal-note">Voor deze wijziging installeert OpenQuatt de passende firmware en start de controller opnieuw op. Bestaande OpenQuatt-instellingen blijven behouden.</p>
            <label class="oq-helper-modal-check">
              <input type="checkbox" data-oq-quickstart-setup-confirm="true" ${o.quickStartSetupConfirmed?"checked":""} ${r?"disabled":""}>
              <span>${s(a.join(" "))}</span>
            </label>
            <div class="oq-firmware-advanced-footer">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="install-quickstart-setup" ${r||!o.quickStartSetupConfirmed||!e.canSwitch?"disabled":""}>
                ${r?"Setupwissel uitvoeren...":"Nieuwe setup installeren"}
              </button>
            </div>
            ${!e.canSwitch&&!r?`<p class="oq-helper-modal-note oq-helper-modal-note--muted">${s(!e.targetEntityAvailable||!e.installActionAvailable?"De firmwarebediening wordt nog geladen. Wacht een moment en probeer opnieuw.":"Deze firmware mist nog het vereiste OTA-target. Werk eerst bij naar een build die setupwissels ondersteunt.")}</p>`:""}
          </div>
        `:Ct()}
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function Zg(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${Tc()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${Tc()}
        ${Ct()}
      </section>
    `}function Jq(e){let t=String(e||"").trim();if(!t)return"";try{let r=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`http://${t}`);return r.protocol!=="http:"&&r.protocol!=="https:"?"":(r.port||(r.port="8080"),(!r.pathname||r.pathname==="/")&&(r.pathname="/beta/feed/data.json"),r.toString())}catch{return""}}function Xg(){let e=String(T("cicFeedUrl")||"").trim(),t=o.quickStartCicFeedUrlDraft===null?e:String(o.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:t,normalizedDraftUrl:Jq(t)}}function ef(e,t){return`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${To("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
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
    `}function Yg(e){let t=String(e||"").trim().toLowerCase();return t==="heatpump_controller_q"||t.includes("q-edition")||t.includes("controller q")?"heatpump_controller_q":t==="heatpump_listener"||t.includes("listener")?"heatpump_listener":t==="waveshare"||t.includes("waveshare")?"waveshare":""}function xc(){let e=Yg(T("hardwareProfileText")),t=!1;return e||(e=Yg(Dt().hardwareProfile)),!e&&v("qFlowSource")?(e="heatpump_controller_q",t=!0):!e&&v("flowSource")&&v("cicPollingEnabled")&&(e="remote",t=!0),{profile:e,inferred:t,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function rn(){let e=String(T("hpGeneration")||"").trim(),t=xc(),r=e==="V1",{isQEdition:n,isRemoteProfile:a,hardwareKnown:i}=t,l=r&&a,c=n?r?"Local":"Outdoor unit":"",u=l?"CIC":"Outdoor unit",p=String(T("flowSource")||"").trim(),g=String(T("qFlowSource")||"").trim(),w=C("cicPollingEnabled"),y=C("cicJsonFeedOk"),h=C("cicDataStale"),m=Xg(),d=p===u&&(!c||g===c),b=l?d&&w&&!!m.configuredUrl:d,S=l?"cicFlowrate":n&&r?"controllerFlow":oe()==="duo"?"flowLocal":"hp1Flow",q=R(S),E=Number.isFinite(q),k=C("quickFlowTest"),$=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&b?$=y&&E?q>0?"Geldig":"Bron actief, geen circulatie":h?"Geen actuele CiC-data":y?"Verbonden, wacht op flow":"Verbinding controleren":!l&&b&&($=E?q>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");let _=l?"CiC JSON-feed":n&&r?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",P=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":n&&r?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:t.hardwareLabel,requiresCic:l,qFlowTarget:c,flowSourceTarget:u,configurationApplied:b,sourceLabel:_,explanation:P,status:$,flowValue:q,flowAvailable:E,flowTestActive:k,canRunFlowTest:b,...m,canApply:i&&v("flowSource")&&(!c||v("qFlowSource"))&&(!l||v("cicPollingEnabled")&&v("cicFeedUrl")&&!!m.normalizedDraftUrl)}}function _i(){let e=xc(),{isQEdition:t,isRemoteProfile:r}=e,n=String(T("roomTempSource")||"").trim(),a=String(T("roomSetpointSource")||"").trim(),i=n===a&&["CIC","OT thermostat","HA input"].includes(n)?n:"",l=t?"OT thermostat":o.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),c=Xg(),p=n===l&&a===l&&(l!=="OT thermostat"||C("otEnabled"))&&(l!=="CIC"||C("cicPollingEnabled")&&!!c.configuredUrl),g=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],w=R(g[0]),y=R(g[1]),h=Number.isFinite(w)&&Number.isFinite(y),m=l==="OT thermostat"?C("otEnabled")&&!C("otLinkProblem")&&h:l==="CIC"?C("cicJsonFeedOk")&&!C("cicDataStale")&&h:C("roomTempHaValid")&&C("roomSetpointHaValid")&&h,d=t||r?"Nog activeren":"Hardwareprofiel niet herkend";p&&(d=m?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");let b=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",S=t?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:t,isRemoteProfile:r,selectedSource:l,sourceLabel:b,explanation:S,configurationApplied:p,status:d,roomTempValue:w,roomSetpointValue:y,valuesAvailable:h,...c,canApply:(t||r)&&v("roomTempSource")&&v("roomSetpointSource")&&(l!=="OT thermostat"||v("otEnabled"))&&(l!=="CIC"||v("cicPollingEnabled")&&v("cicFeedUrl")&&!!c.normalizedDraftUrl)}}function Zq(){let e=rn(),t=o.busyAction==="quickstart-flow-source"||o.busyAction==="quickstart-flow-refresh",r=o.busyAction==="quickstart-flow-test-start"||o.busyAction==="quickstart-flow-test-abort",n=t||r||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?ef(e,n):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ve("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
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
        ${Ct({nextDisabled:!e.configurationApplied||e.flowTestActive||r,nextDisabledLabel:r?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function Xq(){let e=_i(),t=o.busyAction==="quickstart-thermostat-source",r=e.status==="Geldig"?" is-active":"",n=e.isRemoteProfile?`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${To("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
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
    `:"",a=e.selectedSource==="CIC"?ef(e,t):"",i=e.selectedSource==="HA input"?`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/jeroen85/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${ve("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
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
        ${Ct({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function tf(){return!o.quickStartModalOpen||o.loadingEntities||o.complete===null||o.complete&&o.quickStartModalMode!=="generation"?"":o.quickStartModalMode==="generation"?te({id:"quickstart-forced",titleId:"oq-generation-modal-title",kicker:"Installatie",title:"Quatt Hybrid-versie aanpassen",copy:"Kies de versie die bij jouw Quatt hoort. Deze keuze bepaalt de basis van de regeling.",copyInHeader:!0,backdropClass:"oq-helper-modal-backdrop--quickstart",className:"oq-helper-modal--wide oq-helper-modal--quickstart oq-helper-modal--generation",sectionAttributes:'data-oq-quickstart-scroller data-oq-quickstart-step="generation"',closeAction:"close-quickstart-modal",closeLabel:"Sluit versie-popup",body:Zg("picker")}):te({id:"quickstart-forced",titleId:"oq-quickstart-modal-title",kicker:"Quick Start",title:"Rond eerst de Quick Start af",copy:"Controleer eerst je setup en loop daarna stap voor stap door de basisinstellingen.",copyInHeader:!0,backdropClass:"oq-helper-modal-backdrop--quickstart",className:"oq-helper-modal--wide oq-helper-modal--quickstart",sectionAttributes:`data-oq-quickstart-scroller data-oq-quickstart-step="${s(nf().id)}"`,closeAction:"close-quickstart-modal",closeLabel:"Sluit Quick Start-popup",body:`<div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">${lk()}${dk()}</div>`})}function ek(){return o.root?o.root.querySelector("[data-oq-quickstart-scroller]"):null}var of=ko({getScroller:ek,getToken:()=>o.quickStartScrollRestoreToken,setToken:e=>{o.quickStartScrollRestoreToken=e},isActive:()=>o.quickStartModalOpen,getIdentity:e=>String(e.dataset.oqQuickstartStep||""),preserveGrowth:!0,stickToBottom:!0}),rf=of.capture,$c=of.queue;function Jg(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${vc()}
        ${bc("oq-settings-grid oq-settings-grid--quickstart")}
        ${Ct()}
      </section>
    `}function tk(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of OpenQuatt ondersteuning via een CV-ketel of boiler mag gebruiken. Als die aanwezig is, kun je meteen het vermogen als startpunt invullen.</p>
        ${Cc("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid")}
        ${Ct()}
      </section>
    `}function ok(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${wc("oq-settings-grid oq-settings-grid--quickstart")}
        ${Ct()}
      </section>
    `}function rk(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(ae()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(ae()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${ae()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${Sc()}</div>
            <div class="oq-settings-curve-shell">
              ${Ec()}
            </div>
            ${hc()}
          `:`
            ${yc("oq-settings-grid oq-settings-grid--quickstart")}
            ${qc()}
          `}
        ${Ct()}
      </section>
    `}function nk(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${Yl("oq-settings-grid oq-settings-grid--quickstart")}
        ${Ct()}
      </section>
    `}function ak(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${pi("oq-settings-grid oq-settings-grid--quickstart")}
        ${Ct()}
      </section>
    `}function ik(){let e=C("usageTelemetryEnabled"),t=C("usageTelemetryChoiceConfigured"),r=o.loadingEntities||!!o.busyAction;return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("usage-telemetry"))}</p>
        <h2 class="oq-helper-section-title">Gebruiksstatistieken</h2>
        <p class="oq-helper-section-copy">Bij een nieuwe Quick Start staat het delen van beperkte technische statistieken standaard aan. Wil je dit niet, zet delen hier uit. Je kunt de keuze later altijd wijzigen.</p>
        ${Hi({enabled:e,busy:r})}
        ${Ri()}
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
        ${o.controlError?`
          <div class="oq-helper-actions">
            <button class="oq-helper-button" type="button" data-oq-action="retry-usage-telemetry-choice" ${r?"disabled":""}>Keuze opnieuw opslaan</button>
          </div>
        `:""}
        ${!t&&!r?`
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="confirm-no-usage-telemetry">Niet delen bevestigen</button>
          </div>
        `:""}
        ${Ct({nextDisabled:r||!t||!!o.controlError,nextDisabledLabel:r||!t?"Keuze opslaan...":"Controleer keuze"})}
      </section>
    `}function sk(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(dt("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${pk()}
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
    `}function lk(){let e=nf().id;return e==="setup"?Yq():e==="generation"?Zg():e==="boiler"?v("boilerCvAssistEnabled")?tk():Jg():e==="flow-source"?Zq():e==="thermostat-source"?Xq():e==="flow"?ok():e==="heating"?rk():e==="water"?nk():e==="silent"?ak():e==="usage-telemetry"?ik():e==="confirm"?sk():Jg()}function br(){let e=xc().isQEdition;return Cr.filter(t=>(t.id!=="setup"||e)&&(!t.optionalEntity||v(t.optionalEntity)))}function dt(e){let t=br().findIndex(r=>r.id===e);return`Stap ${Math.max(0,t)+1}`}function ck(e){let t=Pi(),r=e===t,n=o.complete===!0||e<t;return{tone:r?"current":n?"done":"upcoming",label:r?"Actief":n?"Gereed":"Volgend",current:r}}function uk(e=!1){return br().map((t,r)=>{let n=ck(r);return`
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
      `}).join("")}function nf(){let e=br();return e.find(t=>t.id===o.currentStep)||e[0]||Cr[0]}function Pi(){return Math.max(0,br().findIndex(e=>e.id===o.currentStep))}function af(e){let t=br(),r=Math.min(t.length-1,Math.max(0,Pi()+e));o.currentStep=t[r]?.id||Cr[0].id}function Ct(e={}){let t=Pi(),r=br(),n=t>0?r[t-1]:null,a=t<r.length-1?r[t+1]:null;return`
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
    `}function dk(){let e=Pi(),t=br();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${t.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${uk(!0)}
        </div>
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function pk(){let e=ke(j("hpGeneration")),t=ae()?"Stooklijn":"Power House",r=S=>ke(j(S)),n=[],a=ae()?[["Regelprofiel",r("curveControlProfile")],["Aanvoer bij -20\xB0C",J("curveM20")],["Aanvoer bij -10\xB0C",J("curveM10")],["Aanvoer bij 0\xB0C",J("curve0")],["Aanvoer bij 5\xB0C",J("curve5")],["Aanvoer bij 10\xB0C",J("curve10")],["Aanvoer bij 15\xB0C",J("curve15")],["Fallback-aanvoer",J("curveFallbackSupply")]]:[["Profiel",r("phResponseProfile")],["Rated maximum house power",J("housePower")],["Maximum heating outdoor temperature",J("houseOutdoorMax")],["Temperatuurreactie",J("phKp")],["Comfort onder setpoint",J("phComfortBelow")],["Comfort boven setpoint",J("phComfortAbove")]],i=String(T("flowControlMode")||""),l=rn(),c=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],u=_i(),p=[["Status",u.status],["Kamertemperatuur",Number.isFinite(u.roomTempValue)?`${u.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(u.roomSetpointValue)?`${u.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],g=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",J("manualIpwm")]:["Gewenste flow",J("flowSetpoint")]],w=v("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",C("boilerCvAssistEnabled")?"Ja":"Nee"],...C("boilerCvAssistEnabled")?[["Boiler rated heat power",J("boilerRatedHeatPower")]]:[]]:[],y=[["Maximale watertemperatuur",J("maxWater")]],h=[["Start stille uren",Sn(T("silentStartTime"))||"\u2014"],["Einde stille uren",Sn(T("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",J("silentMax")],["Maximaal niveau overdag",J("dayMax")]],m=v("usageTelemetryEnabled")?[["Technische gebruiksstatistieken",C("usageTelemetryEnabled")?"Delen":"Niet delen"]]:[],d=S=>`
      <div class="oq-helper-review-list">
        ${S.filter(q=>q&&q[1]).map(([q,E])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(q)}</span>
                <strong class="oq-helper-review-value">${s(E)}</strong>
              </div>
            `).join("")}
      </div>
    `,b=(S,q,E="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(S)}</h3>
        ${E?`<p class="oq-helper-review-summary"><strong>${s(E)}</strong></p>`:""}
        ${d(q)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${b("Quatt Hybrid-versie",n,e)}
        ${b("Flowmeting",c,l.sourceLabel)}
        ${b("Verwarmingsstrategie",a,t)}
        ${b("Watertemperatuur",y)}
        ${b("Thermostaatgegevens",p,u.sourceLabel)}
        ${b("Flowregeling",g)}
        ${w.length?b("CV-ketel / boiler",w):""}
        ${b("Stille uren",h)}
        ${m.length?b("Gebruiksstatistieken",m):""}
      </div>
    `}function ta(e,t){return`
      <div class="oq-settings-cooling-fact">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
      </div>
    `}function Mc(e){let t=String(e||"").trim();return t?{Ready:"Gereed","Waiting for room request":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","Cooling enabled, waiting for room temperature above cooling setpoint":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[t]||t:""}function sf(){let e=!v("coolingRoomRequestRequired")||C("coolingRoomRequestRequired"),t=[ce("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),lt("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${J("coolingDemandMax")} max`}),ce("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),ce("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),r=[v("coolingRoomRequestRequired")?Wp("coolingRoomRequestRequired","Koelvraag via kamerthermostaat","Aan: OpenQuatt wacht op echte koelvraag vanuit de kamer. Uit: koeltoestemming geldt direct als koelvraag.","Koelvraag start en stopt met de marges hieronder.","Koeltoestemming geldt direct als koelvraag. De start- en stopmarge worden nu niet gebruikt.","oq-settings-field--span-2"):"",e?ce("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."):"",e?ce("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."):""].filter(Boolean),n=r.length>0,a=v("coolingWithoutDewPointMode"),i=[v("coolingGuardMode")?ta("Route",ke(j("coolingGuardMode","Onbekend"))):"",v("coolingEffectiveMinSupplyTemp")?ta("Actieve ondergrens",j("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean),l=i.length?ve("coolingGuardStatus","Actuele beveiliging","Laat zien welke route koeling nu begrenst en welke ondergrens daadwerkelijk geldt.",`<div class="oq-settings-cooling-facts">${i.join("")}</div>`,"oq-settings-field--span-2 oq-settings-field--cooling-status"):"",c=[v("outsideTempSelected")?ta("Actuele buitentemperatuur",j("outsideTempSelected","\u2014")):"",v("coolingFallbackNightMinOutdoorTemp")?ta("Nachtminimum buitentemperatuur",j("coolingFallbackNightMinOutdoorTemp","\u2014")):"",v("coolingFallbackMinSupplyTemp")?ta("Berekende minimum watertemperatuur",j("coolingFallbackMinSupplyTemp","\u2014")):""].filter(Boolean),u=c.length?`<div class="oq-settings-cooling-fallback-metrics">${c.join("")}</div>`:"",p=a||c.length>0,w=j("coolingGuardMode","").toLowerCase().includes("fallback");if(!t.length&&!n&&!a&&!l&&!p)return"";let y={"Dew point required":"Gebruik alleen een betrouwbare dauwpuntmeting. Zonder meting blijft koeling uit.","Allow without dew point":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use fallback":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use dew point approximation":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, user responsibility":"Negeer dauwpunt en benadering; alleen de ingestelde minimale koel-aanvoer geldt."};return re("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
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
        ${a||l||p?`
          <div class="oq-settings-grid">
            ${a?Bp("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",y,"oq-settings-field--span-2 oq-settings-field--cooling-guard-choice"):""}
            ${l}
            ${p?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline"${w?" open":""}>
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
      `)}function lf(){let e=v("otEnabled"),t=v("cicPollingEnabled")||v("cicFeedUrl"),r=v("cicCompatibilityMode"),n=v("otLinkProblem")||v("cicDataStale")||v("cicJsonFeedOk");if(!e&&!t&&!r&&!n)return"";let a=Nt("cicPollingEnabled"),i=Nt("otEnabled"),l=({label:m,value:d,active:b=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${b?" is-warning":""}">
        <dt>${s(m)}</dt>
        <dd>${s(d)}</dd>
      </div>
    `,c=(m,d,b="Actief",S="Normaal",q={})=>{if(!v(m))return"";let E=X(m);return l({label:d,value:E?b:S,active:q.warningWhenActive?E:!1})},u=(m,d,b={})=>{let S=b.fallbackKey||"";return!v(m)&&!(S&&v(S))?"":l({label:d,value:He(v(m)?m:S,b)})},p=(m,d)=>{let b=d.filter(Boolean).join("");return b?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(m)}</h4>
          <dl>${b}</dl>
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
            value="${s(String(Ae("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${o.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",w=p("OpenTherm",[v("otLinkProblem")?l({label:"OT-link",value:i?X("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&X("otLinkProblem")}):"",c("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),c("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),u("otControlSetpoint","Control setpoint"),u("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),u("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),y=p("CIC-feed",[v("cicJsonFeedOk")?l({label:"JSON-feed",value:a?X("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!X("cicJsonFeedOk")}):"",v("cicDataStale")?l({label:"Data",value:a?X("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&X("cicDataStale")}):"",c("cicChEnabled","CH-vraag","Actief","Normaal"),c("cicCoolingEnabled","Koeling","Actief","Normaal"),u("cicControlSetpoint","Control setpoint"),u("cicRoomSetpoint","Room setpoint"),u("cicRoomTemp","Room temperature"),u("cicFlowrate","Flow"),u("cicLastSuccessAge","Laatste succes")]),h=w||y?`
      <details class="oq-settings-integration-diagnostics"${o.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${w}
          ${y}
        </div>
      </details>
    `:"";return re("Integratie","OpenTherm & CIC-polling","Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          ${Qa("otEnabled","OpenTherm","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${Qa("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${Qa("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${g}
        </div>
        ${h}
      `)}function cf(){if(!wn.some(M=>v(M)))return"";let t=Nt("cicPollingEnabled"),r=Nt("otEnabled"),n=(M={})=>M.haValueKey||(M.haKeys||[]).find(x=>!/valid$/i.test(x))||"",a=(M={})=>M.haValidKey||(M.haKeys||[]).find(x=>/valid$/i.test(x))||"",i=(M="",x="")=>!!M&&!!x&&v(M)&&v(x)&&X(x),l=(M={})=>i(n(M),a(M)),c={mqttCoolingDewPoint:"cooling_dew_point",mqttOutsideTemperature:"outside_temperature",mqttRoomTemperature:"room_temperature",mqttRoomSetpoint:"room_setpoint",mqttHeatingEnable:"heating_enable",mqttCoolingEnable:"cooling_enable"},u=(M={})=>M.mqttTopicKey||c[M.valueKey]||"",p=(M="")=>{if(!M)return!0;let x=o.mqttStatus?.input_enabled;return x&&typeof x=="object"&&Object.prototype.hasOwnProperty.call(x,M)?x[M]!==!1:!0},g=M=>/\bMQTT\b/i.test(String(M||"")),w=(M,x={})=>M==="CIC"?t:M==="OT thermostat"?r:M==="HA input"?l(x):M==="CIC or HA input"?t||l(x):g(M)?p(u(x)):M==="Flowmeter HP2"?v("hp2Flow"):M==="Local aggregate HP1/HP2"?v("flowLocal")||v("hp2Flow"):!0,y=(M,x={})=>M==="CIC"&&!t?"CIC-polling staat uit":M==="OT thermostat"&&!r?"OpenTherm staat uit":M==="HA input"&&!l(x)?"HA-bron ongeldig":M==="CIC or HA input"&&!t&&!l(x)?"CIC en HA ontbreken":g(M)&&!p(u(x))?"MQTT-topic staat uit":M==="Flowmeter HP2"&&!v("hp2Flow")?"HP2-flow ontbreekt":M==="Local aggregate HP1/HP2"&&!v("flowLocal")&&!v("hp2Flow")?"Lokale flow ontbreekt":"",h=(M,x="Actief",K="Normaal")=>v(M)?X(M)?x:K:"",m=(M,x={})=>{let K=String(M||"").trim();return K?x.optionLabels?.[K]||ke(K):""},d=(M,x={})=>{let K=String(T(M)||"").trim();return K?m(K,x):""},b=M=>{let x=tr(M,"");return x?ke(x):""},S=M=>{let x=String(tr(M,"")||"").trim();return!x||x==="None"?"":ke(x)},q=(...M)=>M.find(x=>String(x||"").trim())||"",E=()=>{let M=d("waterSupplySource");if(String(T("waterSupplySource")||"")==="Local"&&v("localWaterSupplyTempSource")){let x=d("localWaterSupplyTempSource");return x?`${M} - ${x}`:M}return M},k=()=>{let M=String(T("flowSource")||"").trim();if(M==="Outdoor unit"){if(v("qFlowSource")){let x=String(T("qFlowSource")||"").trim(),K=String(T("hpGeneration")||"").trim();return x==="Local"||x==="Auto"&&K==="V1"?x==="Auto"?"Lokaal (auto)":"Lokaal":q(d("outdoorUnitFlowMode"),x==="Auto"?"Buitenunit (auto)":"Buitenunit")}return q(d("outdoorUnitFlowMode"),"Quatt-flow")}return ke(M)},$=()=>{let M=String(T("outsideTempSource")||"").trim();if(M==="MQTT"&&!p("outside_temperature"))return"MQTT-topic staat uit";if(M!=="Auto")return ke(M);let x=R("outsideTempLocalAggregated"),K=R("outsideTempHa"),Y=R("mqttOutsideTemperature"),G=!Number.isNaN(x),le=v("outsideTempHaValid")?X("outsideTempHaValid")&&!Number.isNaN(K):!Number.isNaN(K),Se=p("outside_temperature")&&v("mqttOutsideTemperatureValid")&&X("mqttOutsideTemperatureValid")&&!Number.isNaN(Y),ue=[G?{label:"Buitenunit",value:x}:null,le?{label:"HA-invoer",value:K}:null,Se?{label:"MQTT",value:Y}:null].filter(Boolean);return ue.length?ue.reduce((xe,ge)=>ge.value<xe.value?ge:xe,ue[0]).label:"Auto"},_=M=>{if(!v(M))return NaN;let x=Number(T(M));if(Number.isFinite(x))return x;let Y=String(o.entities[M]?.state??"").trim().replace(",",".").match(/-?\d+(?:\.\d+)?/);return Y?Number(Y[0]):NaN},P=(M,x="")=>{if(!v(M))return!1;let K=_(M);return(x?X(x):!0)&&Number.isFinite(K)},B=()=>{let M=String(T("coolingDewPointSource")||"").trim();if(M==="Home Assistant")return P("coolingDewPointHa","coolingDewPointHaValid")?"HA-invoer":"HA-invoer ontbreekt";if(M==="MQTT")return p("cooling_dew_point")?P("mqttCoolingDewPoint","mqttCoolingDewPointValid")?"MQTT":"MQTT ontbreekt of verouderd":"MQTT-topic staat uit";let x=P("coolingDewPointHa","coolingDewPointHaValid"),K=p("cooling_dew_point")&&P("mqttCoolingDewPoint","mqttCoolingDewPointValid");if(x&&K){let Y=_("coolingDewPointHa");return _("mqttCoolingDewPoint")>Y?"MQTT":"HA-invoer"}return x?"HA-invoer":K?"MQTT":M?ke(M):"Auto"},H=({label:M,value:x="",key:K="",active:Y=!1,status:G="",statusTone:le="",statusTitle:Se=""})=>{let ue=x||(K?He(K):"");if(!ue&&!G)return"";let xe=String(le||"").replace(/[^a-z0-9_-]/gi,""),ge=Se||G,ft=G?`<em class="oq-settings-source-status${xe?` oq-settings-source-status--${s(xe)}`:""}" title="${s(ge)}" aria-label="${s(`${G}: ${ge}`)}">${s(G)}</em>`:"";return`
        <div class="oq-settings-source-row${Y?" is-warning":""}${G?" has-status":""}">
          <span>${s(M)}${ft}</span>
          <strong>${s(ue)}</strong>
        </div>
      `},F=({label:M="HA-invoer",valueKey:x="",validKey:K="",value:Y=""})=>{if(!x||!K||!v(x)||!v(K))return[];let G=X(K);return[H({label:M,key:x,value:Y,status:G?"Geldig":"Ongeldig",statusTone:G?"valid":"invalid",statusTitle:G?"Home Assistant geeft dit signaal geldig door. OpenQuatt mag deze HA-invoer gebruiken.":"Home Assistant geeft dit signaal niet geldig door. OpenQuatt gebruikt deze HA-invoer dan niet als bron."})]},A=({label:M="MQTT",valueKey:x="",validKey:K="",value:Y="",topicKey:G=""})=>{if(!x||!K||!v(x)||!v(K))return[];if(!p(G||c[x]))return[];let le=X(K),Se=le?"MQTT heeft een geldige, recente waarde ontvangen. OpenQuatt mag deze MQTT-invoer gebruiken.":"MQTT heeft nog geen geldige recente waarde ontvangen. OpenQuatt gebruikt deze MQTT-invoer dan niet als bron.";return[H({label:M,key:x,value:le?Y:"\u2014",status:cl(K),statusTone:le?"valid":"invalid",statusTitle:Se})]},L=({title:M,icon:x="",content:K="",rows:Y=[],copy:G="",className:le=""})=>{let Se=Y.filter(Boolean).join("");return!K&&!Se&&!G?"":`
        <section class="oq-settings-source-group${le?` ${s(le)}`:""}">
          <h5>
            ${x?`<span class="oq-settings-source-group-icon">${de(x,"oq-settings-source-group-icon-svg")}</span>`:""}
            <span>${s(M)}</span>
          </h5>
          ${K?`<div class="oq-settings-source-group-content">${K}</div>`:""}
          ${Se?`<div class="oq-settings-source-rows">${Se}</div>`:""}
          ${G?`<p class="oq-settings-source-group-copy">${s(G)}</p>`:""}
        </section>
      `},D=(M,x={})=>{if(!v(M))return{markup:"",warning:""};let K=o.entities[M]||{},Y=String(T(M)||""),G=ro(K),le=new Set(x.hiddenOptions||[]),Se=Y&&le.has(Y),ue=G.filter(pe=>!le.has(pe)&&w(pe,x)),xe=Y&&!w(Y,x),ge=Y==="HA input"&&x.keepUnavailableCurrent!==!0,$t=(Se&&!ue.includes(Y)?[Y,...ue]:xe&&!ge&&!ue.includes(Y)?[Y,...ue]:ue).map(pe=>{let Tr=m(pe,x);return`<option value="${s(pe)}" ${pe===Y?"selected":""}>${s(Tr)}</option>`}).join("");return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s(x.label||"Bron")}</span>
              ${x.infoCopy?To(x.infoId||M,x.infoTitle||x.label||"Bron",x.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s(M)}" ${o.loadingEntities?"disabled":""}>
              ${$t}
            </select>
          </label>
        `,warning:Se?"Huidige bron is legacy; kies een nieuwe bron.":xe?`Huidige bron niet beschikbaar: ${y(Y,x)}`:""}},N=({key:M,title:x,icon:K="",select:Y,secondarySelect:G=null,secondarySelects:le=null,activeRows:Se=[],measurementRows:ue=[],activeCopy:xe="",rows:ge=[]})=>{let ft=Y&&Y.when!==!1?D(Y.key,Y):{markup:"",warning:""},pe=(Array.isArray(le)?le:G?[G]:[]).filter(qe=>qe&&qe.when!==!1).map(qe=>D(qe.key,qe)).filter(qe=>qe.markup),Tr=pe.map(qe=>qe.markup).join(""),Ve=pe.map(qe=>qe.warning).find(Boolean)||"",tt=ge.filter(Boolean).join(""),ht=`${ft.markup}${Tr}`,bt=ft.warning||Ve,Do=[L({title:"Configuratie",icon:"settings",className:"oq-settings-source-group--config",content:ht?`
            <div class="oq-settings-source-controls">
              ${ht}
            </div>
            ${bt?`<p class="oq-settings-source-warning">${s(bt)}</p>`:""}
          `:""}),L({title:"Actief",icon:"target",rows:Se,copy:xe,className:"oq-settings-source-group--active"}),L({title:"Metingen",icon:"activity",rows:ue,className:"oq-settings-source-group--measurements"})].filter(Boolean).join("");return!Do&&!ht&&!tt?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s(M||Y.key)}">
          <div class="oq-settings-source-card-head">
            ${K?`<span class="oq-settings-source-card-icon">${de(K,"oq-settings-source-card-icon-svg")}</span>`:""}
            <h4>${s(x)}</h4>
          </div>
          ${Do||`
            ${ht?`
              <div class="oq-settings-source-controls">
                ${ht}
              </div>
            `:""}
            ${bt?`<p class="oq-settings-source-warning">${s(bt)}</p>`:""}
            ${tt?`<div class="oq-settings-source-rows">${tt}</div>`:""}
          `}
        </article>
      `},Z=String(T("waterSupplySource")||""),I=String(T("flowSource")||""),W=String(T("qFlowSource")||""),ee=String(T("heatingEnableSource")||"").trim()==="Disabled",Ne=d("heatingEnableSource",{optionLabels:{Disabled:"Niet gebruiken"}}),xt=String(T("coolingEnableSource")||"").trim()==="Disabled",gt={Disabled:"Niet gebruiken / handmatig",CIC:"CIC (legacy)","CIC or HA input":"CIC of HA-invoer (legacy)"},zt=d("coolingEnableSource",{optionLabels:gt}),et=S("coolingEnableEffectiveSource"),De=[N({key:"room-temperature",title:"Kamertemperatuur",icon:"thermometer",select:{key:"roomTempSource",label:"Bron",haKeys:["roomTempHa","roomTempHaValid"],mqttTopicKey:"room_temperature"},activeRows:[H({label:"Waarde",key:"roomTemp"}),H({label:"Bron",value:b("roomTempEffectiveSource")})],measurementRows:[t?H({label:"CIC",key:"cicRoomTemp"}):"",r?H({label:"OpenTherm",key:"otRoomTemp"}):"",...F({valueKey:"roomTempHa",validKey:"roomTempHaValid"}),...A({valueKey:"mqttRoomTemperature",validKey:"mqttRoomTemperatureValid"})]}),N({key:"room-setpoint",title:"Kamer setpoint",icon:"target",select:{key:"roomSetpointSource",label:"Bron",haKeys:["roomSetpointHa","roomSetpointHaValid"],mqttTopicKey:"room_setpoint"},activeRows:[H({label:"Waarde",key:"roomSetpoint"}),H({label:"Bron",value:b("roomSetpointEffectiveSource")})],measurementRows:[t?H({label:"CIC",key:"cicRoomSetpoint"}):"",r?H({label:"OpenTherm",key:"otRoomSetpoint"}):"",...F({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"}),...A({valueKey:"mqttRoomSetpoint",validKey:"mqttRoomSetpointValid"})]}),N({key:"water-supply",title:"Aanvoertemperatuur",icon:"droplet",select:{key:"waterSupplySource",label:"Bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:Z==="Local"&&v("localWaterSupplyTempSource")},activeRows:[H({label:"Waarde",key:"supplyTemp"}),H({label:"Bron",value:E()})],measurementRows:[H({label:"Lokale selectie",key:"waterSupplyTempEsp"}),H({label:"PT1000",key:"waterSupplyTempPt1000"}),H({label:"DS18B20",key:"waterSupplyTempDs18b20"}),t?H({label:"CIC",key:"cicWaterSupplyTemp"}):"",...F({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),N({key:"flow-source",title:"Flow",icon:"waves",select:{key:"flowSource",label:"Bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:t||I==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Flowpad",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:I==="Outdoor unit"&&v("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Meterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:I==="Outdoor unit"&&v("outdoorUnitFlowMode")&&(!v("qFlowSource")||W!=="Local")}],activeRows:[H({label:"OpenQuatt-flow",key:"flowSelected"}),H({label:"Bron",value:k()})],measurementRows:[H({label:"Controller-flowmeter",key:"controllerFlow"}),H({label:"Gecombineerd HP1/HP2",key:"flowLocal"}),H({label:"Flowmeter HP1",key:"hp1Flow"}),H({label:"Flowmeter HP2",key:"hp2Flow"}),t?H({label:"CIC",key:"cicFlowrate"}):""]}),N({key:"outside-temperature",title:"Buitentemperatuur",icon:"sun",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],mqttTopicKey:"outside_temperature",infoId:"outsideTempSource-auto-info",infoCopy:i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn buitenunit, HA-invoer en MQTT geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een bron geldig, dan wordt die gebruikt.":"Auto gebruikt de laagste geldige buitentemperatuurbron."},activeRows:[H({label:"Waarde",key:"outsideTempSelected"}),H({label:"Bron",value:$()})],measurementRows:[H({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...F({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"}),...A({valueKey:"mqttOutsideTemperature",validKey:"mqttOutsideTemperatureValid"})]}),N({key:"heating-enable",title:"Warmtetoestemming",icon:"flame",select:{key:"heatingEnableSource",label:"Bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],mqttTopicKey:"heating_enable",keepUnavailableCurrent:!0},activeRows:[H({label:"Toestemming",value:ee?"Niet gebruikt":h("heatingEnableSelected","Toegestaan","Geblokkeerd")}),ee?"":H({label:"Bron",value:Ne})],measurementRows:[r?H({label:"OpenTherm",value:h("otThermostatChEnable","Toegestaan","Geblokkeerd")}):"",t?H({label:"CIC",value:h("cicChEnabled","Toegestaan","Geblokkeerd")}):"",...F({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:h("heatingEnableHa","Toegestaan","Geblokkeerd")}),...A({valueKey:"mqttHeatingEnable",validKey:"mqttHeatingEnableValid",value:h("mqttHeatingEnable","Toegestaan","Geblokkeerd")})]}),N({key:"cooling-enable",title:"Koeltoestemming",icon:"snowflake",select:{key:"coolingEnableSource",label:"Bron",optionLabels:gt,hiddenOptions:["CIC","CIC or HA input"],haKeys:["coolingEnableHa","coolingEnableHaValid"],mqttTopicKey:"cooling_enable",keepUnavailableCurrent:!0},activeRows:[H({label:"Toestemming",value:h("coolingEnableSelected","Toegestaan","Geblokkeerd")}),xt?"":H({label:"Bron",value:zt}),et&&et!==zt?H({label:"Via",value:et}):""],measurementRows:[H({label:"Handmatig",value:h("manualCoolingEnable","Aan","Uit")}),r?H({label:"OpenTherm",value:h("otThermostatCoolingEnable","Toegestaan","Geblokkeerd")}):"",...F({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:h("coolingEnableHa","Toegestaan","Geblokkeerd")}),...A({valueKey:"mqttCoolingEnable",validKey:"mqttCoolingEnableValid",value:h("mqttCoolingEnable","Toegestaan","Geblokkeerd")})]}),N({key:"cooling-dew-point",title:"Koelingsdauwpunt",icon:"thermometer",select:{key:"coolingDewPointSource",label:"Bron",haKeys:["coolingDewPointHa","coolingDewPointHaValid"],mqttTopicKey:"cooling_dew_point",infoId:"coolingDewPointSource-info",infoCopy:"Auto gebruikt de hoogste geldige waarde als Home Assistant en MQTT tegelijk geldig zijn. Kies Home Assistant of MQTT om die bron expliciet te vereisen."},activeRows:[H({label:"Waarde",key:"coolingDewPointSelected"}),H({label:"Bron",value:B()})],measurementRows:[...F({valueKey:"coolingDewPointHa",validKey:"coolingDewPointHaValid"}),...A({valueKey:"mqttCoolingDewPoint",validKey:"mqttCoolingDewPointValid"})]})].filter(Boolean);return De.length?re("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${De.join("")}</div>`):""}function uf(){let e=pl(),r=o.mqttStatus?.enabled===!0?`
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
    `:"";return re("Integratie","MQTT inputbronnen","Beheer de brokerverbinding voor externe MQTT-bronwaarden.",`
        <div class="oq-settings-mqtt-shell">
          <section class="oq-settings-mqtt-panel oq-settings-mqtt-panel--broker">
            <div class="oq-settings-field-head">
              <h3>MQTT brokerconfiguratie</h3>
            </div>
            <div class="oq-settings-quickstart-status-row oq-settings-mqtt-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${s(mp())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(gp())}</p>
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
      `)}function df(){if(!v("usageTelemetryEnabled"))return"";let e=C("usageTelemetryEnabled"),t=o.loadingEntities||o.busyAction==="switch-usageTelemetryEnabled";return re("Privacy","Gebruiksstatistieken","Hier kies je of OpenQuatt beperkte technische gebruiksstatistieken deelt. Wifi-netwerknaam, wifi-wachtwoord en andere wachtwoorden of inloggegevens worden nooit meegestuurd. Een niet-bevestigde keuze blijft uit.",`<div class="oq-usage-settings">
      ${Hi({enabled:e,busy:t,settings:!0})}
      ${Ri({collapsible:!0,idPrefix:"oq-settings-usage",open:o.usageTelemetryDetailsOpen})}
    </div>`)}function pf(){let e=[["login","Login",Bn(),Kn(),"open-login-modal"],["api","ESPHome API encryption",Br(),Kr(),"open-api-security-modal"]];return re("Toegang","Toegang & Beveiliging","Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",`
        <div class="oq-settings-access-security-shell">
          ${e.map(([t,r,n,a,i])=>`
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="${t}">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">${s(r)}</p>
                <strong class="oq-settings-quickstart-status-value">${s(n)}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(a)}</p>
              </div>
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="${i}">Aanpassen</button>
            </div>
          </div>
          `).join("")}
        </div>
      `)}function mf(){let e=Le.has(o.settingsGroup)?o.settingsGroup:fe[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${fe.map(t=>`
          <button
            class="oq-settings-group-button${t.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(t.id)}"
            aria-pressed="${t.id===e?"true":"false"}"
          >
            ${de(t.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(t.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function gf(){let e=Le.has(o.settingsGroup)?o.settingsGroup:fe[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[Kg(),zg(),Lg(),Fm(),Nm(),Qg(),Vg()]:e==="service"?[Bg(),Om()]:e==="heating"?[Og()]:e==="cooling"?[sf()]:e==="integrations"?[lf(),uf(),cf()]:[Ug(),Tg(),pf(),df(),xg(),Gg()]).filter(Boolean).join("")}
      </div>
    `}function mk(){if(!o.root||o.appView!=="settings")return!1;let e=o.root.querySelector(".oq-settings-group-nav"),t=o.root.querySelector(".oq-settings-group-stack");if(!e||!t)return!1;let r=Le.has(o.settingsGroup)?o.settingsGroup:fe[0].id;if(r==="service")return!1;let n=e.querySelectorAll(".oq-settings-group-button");if(n.length!==fe.length)return!1;n.forEach(m=>{let b=String(m.dataset.groupId||"")===r;m.classList.toggle("is-active",b),m.setAttribute("aria-pressed",b?"true":"false")}),t.querySelectorAll(".oq-settings-info").forEach(m=>{let d=String(m.dataset.oqSettingsInfo||""),b=o.settingsInfoOpen===d;m.classList.toggle("is-open",b);let S=m.querySelector(".oq-settings-info-popover");S&&(S.hidden=!b);let q=m.querySelector(".oq-settings-info-button");q&&q.setAttribute("aria-expanded",b?"true":"false")}),t.querySelectorAll("[data-oq-settings-field]").forEach(m=>{let d=String(m.dataset.oqSettingsField||"");if(!d)return;let b=m.querySelector(".oq-settings-static-value");if(b){let E=j(d);b.textContent!==E&&(b.textContent=E)}m.querySelectorAll("select[data-oq-field]").forEach(E=>{let k=String(E.dataset.oqField||d),$=String(T(k)||"");E.value!==$&&(E.value=$)}),m.querySelectorAll("input[data-oq-field]").forEach(E=>{let k=String(E.dataset.oqField||d),$=String(Ae(k)||"");E.value!==$&&(E.value=$)});let S=m.querySelector(".oq-helper-slider-meta strong"),q=m.querySelector('input[type="range"][data-oq-field]');if(S&&q){let E=J(d,be(d,T(d)));S.textContent!==E&&(S.textContent=E)}}),t.querySelectorAll("[data-select-key]").forEach(m=>{let d=String(m.dataset.selectKey||""),b=String(m.dataset.selectOption||""),S=String(T(d)||""),q=b===S;m.classList.toggle("is-active",q),m.setAttribute("aria-pressed",q?"true":"false"),d==="strategy"?m.disabled=o.loadingEntities||o.busyAction==="save-strategy":d==="hpGeneration"?m.disabled=o.loadingEntities||o.busyAction==="save-hpGeneration":d==="curveControlProfile"?m.disabled=o.loadingEntities||o.busyAction==="save-curveControlProfile":d==="phResponseProfile"&&(m.disabled=o.loadingEntities||o.busyAction==="save-phResponseProfile");let E=m.closest(".oq-settings-choice-card-shell");E&&E.classList.toggle("is-active",q)});let a=t.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){let m=String(T("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",m),a.querySelectorAll("input[data-oq-field]").forEach(b=>{let S=String(b.dataset.oqField||""),q=String(Ae(S)||"");b.value!==q&&(b.value=q)})}t.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(m=>{let d=String(m.dataset.controlKey||""),b=!!T(d),S=String(m.dataset.onLabel||"Aan"),q=String(m.dataset.offLabel||"Uit"),E=String(m.dataset.switchTitle||d),k=b?S:q;m.dataset.controlState=b?"off":"on",m.classList.toggle("is-on",b),m.setAttribute("aria-checked",b?"true":"false"),m.setAttribute("aria-label",`${E}: ${k}`),m.disabled=o.loadingEntities||o.busyAction===`switch-${d}`}),t.querySelectorAll("[data-oq-switch-pill]").forEach(m=>{let d=String(m.dataset.oqSwitchPill||""),b=!!T(d),S=String(m.dataset.onLabel||"Aan"),q=String(m.dataset.offLabel||"Uit"),E=b?S:q;m.classList.toggle("is-on",b),m.textContent!==E&&(m.textContent=E)}),t.querySelectorAll("[data-oq-switch-copy]").forEach(m=>{let d=String(m.dataset.oqSwitchCopy||""),b=!!T(d),S=String(m.dataset.onCopy||""),q=String(m.dataset.offCopy||""),E=b?S:q;m.hidden=!E,m.textContent!==E&&(m.textContent=E)});let i=t.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){let m=i.querySelector(".oq-settings-quickstart-status-value"),d=i.querySelector(".oq-settings-quickstart-status-copy"),b=i.querySelector('button[data-oq-action="open-generation-modal"]'),S=Lt(),q=o.entities.hpGeneration||{},E=v("hpGeneration")&&ro(q).length>0;if(m){let k=S||"Onbekend";m.textContent!==k&&(m.textContent=k)}if(d){let k="Pas dit aan als je een andere Quatt Hybrid hebt.";d.textContent!==k&&(d.textContent=k)}b&&(b.disabled=!E||o.loadingEntities||o.busyAction==="save-hpGeneration")}let l=t.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){let m=l.querySelector(".oq-settings-quickstart-status-value"),d=l.querySelector(".oq-settings-quickstart-status-copy"),b=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),S=Ga(),q=C("cm100Active");m&&m.textContent!==S&&(m.textContent=S);let E=q?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";d&&d.textContent!==E&&(d.textContent=E),b&&(b.disabled=o.loadingEntities)}let c=t.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(c){let m=c.querySelector(".oq-settings-quickstart-status-value"),d=c.querySelector(".oq-settings-quickstart-status-copy"),b=c.querySelector('button[data-oq-action="reset"]'),S=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",q=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";m&&m.textContent!==S&&(m.textContent=S),d&&d.textContent!==q&&(d.textContent=q),b&&(b.disabled=o.busyAction==="reset")}let u=t.querySelectorAll("[data-oq-access-security-item]");u.length&&u.forEach(m=>{let d=String(m.dataset.oqAccessSecurityItem||""),b=m.querySelector(".oq-settings-quickstart-status-value"),S=m.querySelector(".oq-settings-quickstart-status-copy"),q=m.querySelector("button[data-oq-action]");if(d==="login"){let E=Bn(),k=Kn();b&&b.textContent!==E&&(b.textContent=E),S&&S.textContent!==k&&(S.textContent=k)}else if(d==="api"){let E=Br(),k=Kr();b&&b.textContent!==E&&(b.textContent=E),S&&S.textContent!==k&&(S.textContent=k)}q&&(q.disabled=!1)});let p=t.querySelector(".oq-settings-system-summary");if(p){let m=p.querySelectorAll(".oq-settings-system-row"),d={uptime:Lr(),ip:Or(),updates:Mo(),datetime:Ua(),espTemp:Mi(),restart:"Opnieuw opstarten"};m.forEach(q=>{let E=q.querySelector(".oq-settings-system-row-value"),k=q.dataset.oqDiagnosticsRow||"";if(E&&Object.prototype.hasOwnProperty.call(d,k)){let $=d[k];E.textContent!==$&&(E.textContent=$)}});let b=p.querySelector('button[data-oq-action="open-update-modal"]');b&&(b.disabled=!1);let S=p.querySelector('button[data-oq-action="open-restart-confirm"]');if(S){let q=o.busyAction==="restartAction";S.disabled=q,S.textContent=q?"Herstarten...":"Herstarten"}}t.querySelectorAll(".oq-settings-hp-offset-row").forEach(m=>{let d=String(m.dataset.oqSettingsField||""),b=String(m.dataset.oqHpOffsetRawKey||""),S=String(m.dataset.oqHpOffsetFinalKey||"");if(!d||!b||!S)return;let q=Be(d),E=zn(b,S,d),k=Re(Ae(d)),$=Number.isFinite(E)&&Number.isFinite(k)?oo(E+k,q.uom||"\xB0C",2):Ee(S,2),_=m.querySelector("[data-oq-hp-offset-active]");if(_){let H=`${Ee(S,2)} actief`;_.textContent!==H&&(_.textContent=H)}let P=m.querySelector("[data-oq-hp-offset-raw]");if(P){let H=Number.isFinite(E)?oo(E,q.uom||"\xB0C",2):Ee(b,2);P.textContent!==H&&(P.textContent=H)}let B=m.querySelector("[data-oq-hp-offset-final]");B&&B.textContent!==$&&(B.textContent=$)});let g=t.querySelector(".oq-settings-curve-shell"),w=ae();if(!!g!==w)return!1;let y=!!a,h=String(T("phResponseProfile")||"")==="Custom";return y===h}rp({patch:mk});function ff(){return j("controlModeLabel","").toLowerCase().includes("standby")}function Vt(e,t){e&&e.innerHTML!==t&&(e.innerHTML=t)}function Xe(e,t,r){return!e||e.dataset.renderSignature===t?!1:(e.outerHTML=r,!0)}function gk([e,t]){let r=Cs(t);if(!v(t)&&Number.isNaN(r))return"";let n=Ts(t)?at(t):j(t);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(n)}</strong>
      </div>
    `}function fk(e){let t=e.rows.map(gk).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${t}
        </div>
      </section>
    `:""}function hk(e){let t=e.groups.map(fk).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${t}
        </div>
      </section>
    `:""}function bk(e){let t=e.categories.map(hk).filter(Boolean).join("");return t?`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${t}
        </div>
      </article>
    `:""}function Hc(){let e=Aa.map(bk).filter(Boolean),t=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:t}}function bf(e=Hc()){return we(e)}function wf(e=Hc()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(bf(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}var yf=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],wk=new Set(["day","week","month","year"]);function We(e){let t=String(e||"").trim();return yf.some(r=>r.id===t)?t:"day"}function vf(e){let t=We(e);o.energyHistoryView!==t&&(_t({energyHistoryView:t,energyHistoryLastFetchAt:0}),f(),Sf())}function Sf(){typeof hr=="function"&&hr({force:!0}).then(e=>{e&&f()})}function an(e){return wk.has(We(e))}function Li(){let e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function qf(){return gi(o.energyHistoryRaw)}function Rc(){let e=String(o.energyHistoryRaw||""),t=null;return e.split(/\r?\n/).forEach(r=>{let n=ac(r);n&&(t=n.dateKey)}),t}function yk(e=[],t=!0){let r=Rc(),n=qf(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(n.newestDateKey))&&a.push(Number(n.newestDateKey)),Number.isFinite(Number(r))&&a.push(Number(r)),t&&Oi().forEach(i=>{let l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):Li()}function wr(e){let t=R(e);return!Number.isFinite(t)||t<0?null:Math.round(t*1e3)}function vk(){let e=Rc()||Li(),t=ne(e);if(!t)return null;let r={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:t.year,month:t.month,day:t.day,partial:!0,source:"sensors",electricalInputWh:wr("electricalEnergyDaily"),heatingInputWh:wr("heatingElectricalEnergyDaily"),coolingInputWh:wr("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:wr("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:wr("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:wr("boilerThermalEnergyDaily"),systemHeatOutputWh:wr("systemThermalEnergyDaily")};return mi.some(n=>Number.isFinite(r[n]))?r:null}function oa(){let e=new Map;String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{let l=Um(i)||ac(i);if(!l)return;let c=e.get(l.dateKey);(!c||l.sequence>=c.sequence)&&e.set(l.dateKey,l)});let r=vk();r&&!e.has(r.dateKey)&&e.set(r.dateKey,r);let n=new Set(e.keys()),a=new Map;return Oi().forEach(i=>{if(n.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){let c=ne(i.dateKey);if(!c)return;l=yr({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:jt(c.key),sortKey:c.key,source:"hour-summary"}),l.tooltipLabel=`${jt(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}vr(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function Oi(){let e=new Map;return String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(r=>{let n=Gm(r);if(!n)return;let a=`${n.dateKey}:${n.hour}`,i=e.get(a);(!i||n.sequence>=i.sequence)&&e.set(a,n)}),[...e.values()].sort((r,n)=>r.sortKey-n.sortKey)}function Sk(e){return Oi().filter(t=>t.dateKey===Number(e))}function nn(e,t){return e.reduce((r,n)=>r+Qr(n,t),0)}function qk(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((t,r)=>t+Qr(e,r),0)}function kk(e){return Qr(e,"electricalInputWh")+qk(e)}function Di(e,t){let r=Number(e),n=Number(t);return!Number.isFinite(r)||!Number.isFinite(n)||n<=0?"\u2014":(r/n).toFixed(2)}function ze(e,t=1){let r=Number(e);return Number.isFinite(r)?Math.abs(r)>=999500?`${(r/1e6).toFixed(2)} MWh`:Math.abs(r)<1e3?`${Math.round(r)} Wh`:`${(r/1e3).toFixed(t)} kWh`:"\u2014"}function yr({dateKey:e,year:t,month:r,day:n,hour:a=null,label:i,tooltipLabel:l="",sortKey:c,source:u="bucket"}){return{sequence:0,dateKey:e,year:t,month:r,day:n,hour:a,label:i,tooltipLabel:l,sortKey:c??e,partial:!1,source:u,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function vr(e,t){return mi.forEach(r=>{e[r]+=Qr(t,r)}),e.partial=e.partial||!!t?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(t?.sequence||0)),e}function Ek(e){let t=new Map;return e.forEach(r=>{t.set(r.dateKey,r)}),t}function kf(e,t){let r=We(e);if(r==="day"){let n=Xl(t)||ne(t);return n?String(n.key):""}if(r==="week"){let n=zm(t);return n?String(n.key):""}if(r==="month"){let n=Km(t);return n?String(n.key):""}if(r==="year"){let n=Number(t);return Number.isInteger(n)&&n>=2020&&n<=2200?String(n):""}return""}function Ii(e,t){let r=We(t),n=ne(yk(e,!0)),a=qf(),i=Oi(),l=[...e.map(h=>h.dateKey),...i.map(h=>h.dateKey)].filter(h=>Number.isFinite(Number(h)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));let c=l.length?Math.min(...l.map(Number)):n?.key,p=(c?ne(c):n)?.date||n?.date||new Date,g=n?.date||new Date,w=n?.key||Li(),y=w;return r==="week"?(w=oc(p),y=oc(g)):r==="month"?(w=hi(p),y=hi(g)):r==="year"?(w=p.getFullYear(),y=g.getFullYear()):(w=Ie(p),y=Ie(g)),Number(w)>Number(y)&&(w=y),{min:String(w),max:String(y)}}function Ef(e,t){let r=Number(e);return Number.isFinite(r)?r<Number(t.min)?String(t.min):r>Number(t.max)?String(t.max):String(e):String(t.max)}function Tk(e,t,r=Ii(e,t)){let n=We(t),a=o.energyHistoryPeriodSelection?.[n],i=kf(n,a);return Ef(i||r.max,r)}function Ck(e,t){let r=We(e),n=[],a=0;if(r==="week"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<6e3;){let l=ne(i);n.push({value:i,label:rc(i),group:l?String(tc(l.date).year):""}),i=l?String(Ie(fr(l.date,-7))):"",a+=1}return n}if(r==="month"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<1200;){let l=gr(i);if(!l)break;n.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=ec(i,-1),a+=1}return n}if(r==="year")for(let i=Number(t.max);i>=Number(t.min);i-=1)n.push({value:String(i),label:String(i)});return n}function Fi(e,t){let r=We(t);if(!an(r))return{view:r,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};let n=Ii(e,r),a=Tk(e,r,n);return{view:r,selectedValue:a,minValue:n.min,maxValue:n.max,canPrevious:Number(a)>Number(n.min),canNext:Number(a)<Number(n.max),isNow:Number(a)===Number(n.max),options:Ck(r,n)}}function xk(e,t){let r=We(t);if(!an(r))return{from:"",to:"",hours:"0"};let n=Fi(e,r);if(r==="day")return{from:n.selectedValue,to:n.selectedValue,hours:"1"};if(r==="week"){let a=ne(n.selectedValue);if(!a)return{from:"",to:"",hours:"0"};let i=Gr(a.date),l=fr(i,6);return{from:String(Ie(i)),to:String(Ie(l)),hours:"0"}}if(r==="month"){let a=gr(n.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+Zl(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(r==="year"){let a=Number(n.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function $k(){if(!String(o.energyHistoryRaw||"").trim())return"?meta=1";let e=oa(),t=xk(e,o.energyHistoryView||"day"),r=new URLSearchParams;t.from&&r.set("from",t.from),t.to&&r.set("to",t.to),r.set("hours",t.hours);let n=r.toString();return n?`?${n}`:""}Xm($k);function ra(e,t){let r=We(e);if(!an(r))return;let n=oa(),a=Ii(n,r),i=kf(r,t),l=Ef(i||a.max,a);_t({energyHistoryPeriodSelection:{...o.energyHistoryPeriodSelection,[r]:l},energyHistoryLastFetchAt:0}),f(),Sf()}function Tf(e,t){let r=We(e);if(!an(r))return;let n=oa(),a=Fi(n,r),i=Number(t)<0?-1:1,l=a.selectedValue;if(r==="day"){let c=ne(a.selectedValue);l=c?String(Ie(fr(c.date,i))):l}else if(r==="week"){let c=ne(a.selectedValue);l=c?String(Ie(fr(c.date,i*7))):l}else r==="month"?l=ec(a.selectedValue,i):r==="year"&&(l=String(Number(a.selectedValue)+i));ra(r,l)}function Cf(e){let t=We(e);if(!an(t))return;let r=oa(),n=Ii(r,t);ra(t,n.max)}function Mk(e,t,r=Fi(e,t)){let n=We(t),a=Ek(e);if(!e.length&&n==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(n==="day"){let c=ne(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=Sk(c.key);if(u.length){let h=new Map(u.map(d=>[d.hour,d])),m=[];for(let d=0;d<24;d+=1){let b=String(d),S=`${c.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(d).padStart(2,"0")}:00 - ${String((d+1)%24).padStart(2,"0")}:00`,q=yr({dateKey:c.key,year:c.year,month:c.month,day:c.day,hour:d,label:b,tooltipLabel:S,sortKey:d,source:"hour"}),E=h.get(d);E&&vr(q,E),m.push(q)}return{buckets:m,title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}let p=a.get(c.key),g=Rc()||Li(),w=c.key===g?"Vandaag":jt(c.key),y=yr({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:w,sortKey:c.key,source:"day"});return p&&vr(y,p),{buckets:[y],title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(n==="week"){let c=ne(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=Gr(c.date),p=[];for(let g=0;g<7;g+=1){let w=fr(u,g),y=Ie(w),h=ne(y),m=yr({dateKey:y,year:h.year,month:h.month,day:h.day,label:jt(y,"weekday"),sortKey:y}),d=a.get(y);d&&vr(m,d),p.push(m)}return{buckets:p,title:"Week",detail:rc(r.selectedValue)}}if(n==="month"){let c=gr(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=Zl(c.year,c.month),p=[];for(let g=1;g<=u;g+=1){let w=Jl(c.year,c.month,g),y=Ie(w),h=yr({dateKey:y,year:c.year,month:c.month,day:g,label:String(g),sortKey:y}),m=a.get(y);m&&vr(h,m),p.push(h)}return{buckets:p,title:"Maand",detail:c.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(n==="year"){let c=Number(r.selectedValue);if(!Number.isInteger(c))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let u=[];for(let p=1;p<=12;p+=1){let g=c*1e4+p*100+1,w=yr({dateKey:g,year:c,month:p,day:1,label:jt(g,"month"),sortKey:p,source:"month"});e.filter(y=>y.year===c&&y.month===p).forEach(y=>vr(w,y)),u.push(w)}return{buckets:u,title:"Jaar",detail:String(c)}}let i=new Map;e.forEach(c=>{i.has(c.year)||i.set(c.year,yr({dateKey:c.year*1e4+101,year:c.year,month:1,day:1,label:String(c.year),sortKey:c.year,source:"year"})),vr(i.get(c.year),c)});let l=[...i.values()].sort((c,u)=>c.sortKey-u.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function Ak(e){let t=nn(e,"heatpumpHeatOutputWh"),r=nn(e,"heatpumpCoolingOutputWh"),n=nn(e,"boilerHeatOutputWh");return{electricalInputWh:nn(e,"electricalInputWh"),heatingInputWh:nn(e,"heatingInputWh"),coolingInputWh:nn(e,"coolingInputWh"),heatOutputWh:t,coolingOutputWh:r,boilerOutputWh:n,outputWh:t+r+n}}function Hk(e){let t=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),r=Number(e.boilerOutputWh||0),n=t+r;return!Number.isFinite(n)||n<=0?Number.NaN:t/n*100}function Rk(e){let t=Di(e.heatOutputWh,e.heatingInputWh),r=Di(e.coolingOutputWh,e.coolingInputWh),n=Number(e.heatOutputWh||0)>0&&t!=="\u2014",a=Number(e.coolingOutputWh||0)>0&&r!=="\u2014";return n&&a?{label:"COP / EER",value:`${t} / ${r}`}:a?{label:"Gemiddelde EER",value:r}:{label:"Gemiddelde COP",value:t}}function Ni(e,t,r=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </div>
    `}function Ac(e,t,r){let n=[];r.forEach(i=>{let l=String(i.group||""),c=n[n.length-1];(!c||c.label!==l)&&(c={label:l,options:[]},n.push(c)),c.options.push(i)});let a=n.some(i=>i.label)?n.map(i=>i.label?`
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
    `}function hf(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(fi(e.selectedValue))}"
            min="${s(fi(e.minValue))}"
            max="${s(fi(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?Ac(e,"Week",e.options):e.view==="month"?Ac(e,"Maand",e.options):e.view==="year"?Ac(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function _k(e){return an(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${hf(e)}
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
          ${hf(e)}
        </div>
      `}function Pk(){let e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function Nk(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${yf.map(t=>{let r=t.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${r?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(t.id)}"
              aria-selected="${r?"true":"false"}"
            >${s(t.label)}</button>
          `}).join("")}
      </div>
    `}function Dk(e){let t=Number(e.electricalInputWh||0),r=Number(e.heatOutputWh||0),n=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,t+r+n+a),c=p=>`${Math.max(0,Number(p||0)/l*100).toFixed(2)}%`,u=Hk(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${c(t)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${c(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${c(n)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${c(a)}"></span>
          <strong>${Number.isFinite(u)?`${Math.round(u)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(ze(r,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(ze(t,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(ze(n,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(ze(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function Lk(e){let t=Math.max(1,Number(e||0)/1e3),r=Math.pow(10,Math.floor(Math.log10(t))),n=t/r;return(n<=1.5?1.5:n<=3?3:n<=6?6:10)*r*1e3}function Ok(e){let t=Number(e);return Number.isFinite(t)?t>=999500?`${Number((t/1e6).toFixed(1))}`:`${Number((t/1e3).toFixed(1))}`:""}function Ik(e){return e>=999500?"MWh":"kWh"}function Fk(e){let p=Math.max(1e3,...e.map(kk)),g=Lk(p),w=e.length?1218/e.length:1218,y=Math.max(6,Math.min(38,w*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:g,barSlot:w,barWidth:y,yOf:m=>26+(1-Math.min(1,Math.max(0,Number(m||0)/g)))*196}}function jk(e){let t=Di(e.heatpumpHeatOutputWh,e.heatingInputWh),r=Di(e.heatpumpCoolingOutputWh,e.coolingInputWh);return[e.tooltipLabel||e.label||jt(e.dateKey),`Elektrisch totaal: ${ze(e.electricalInputWh,1)}`,`Elektrisch verwarmen: ${ze(e.heatingInputWh,1)}`,`Elektrisch koelen: ${ze(e.coolingInputWh,1)}`,`Warmtepomp warmte: ${ze(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${ze(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel warmte: ${ze(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${t}`,`EER koelen: ${r}`].join(`
`)}function Wk(e,t=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;let r=Fk(e),n=Ik(r.axisMax),a=[0,.25,.5,.75,1].map(l=>r.axisMax*l),i=e.map((l,c)=>{let u=r.left+r.barSlot*c+r.barSlot/2,p=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}],g=r.height-r.bottom,w=p.map(d=>{let b=Qr(l,d.key);if(b<=0)return"";let S=b/r.axisMax*r.plotHeight;return g-=S,`
          <rect
            x="${(u-r.barWidth/2).toFixed(1)}"
            y="${g.toFixed(1)}"
            width="${r.barWidth.toFixed(1)}"
            height="${Math.max(1.4,S).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${d.className}"
          >
            <title>${s(`${l.label} \xB7 ${d.label}: ${ze(b,1)}`)}</title>
          </rect>
        `}).join(""),h=e.length<=12||c===0||c===e.length-1||c%3===0?`<text x="${u.toFixed(1)}" y="${r.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||jt(l.dateKey))}</text>`:"",m=jk(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(m)}" tabindex="0">
          <title>${s(m)}</title>
          <rect
            x="${(u-r.barWidth/2-4).toFixed(1)}"
            y="${r.top.toFixed(1)}"
            width="${(r.barWidth+8).toFixed(1)}"
            height="${r.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${w}
        </g>
        ${h}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(We(t))}" viewBox="0 0 ${r.width} ${r.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${r.width}" height="${r.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${r.left}" y="18" class="oq-energy-history-axis-unit">${s(n)}</text>
        ${a.map(l=>{let c=r.yOf(l);return`
            <line x1="${r.left}" y1="${c.toFixed(1)}" x2="${r.width-r.right}" y2="${c.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${r.left-10}" y="${c.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(Ok(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function Vk(e=null){let t=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[t,"Ketel"]].map(([n,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(n)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function Bk(e,t,r,n){let a=We(r)==="day"?Number(n):Number.NaN,i=Number.isFinite(a)?e.find(l=>l.dateKey===a):null;return i?[i]:t}function _c(){let e=oa(),t=We(o.energyHistoryView),r=Fi(e,t),n=Mk(e,t,r),a=Bk(e,n.buckets,t,r.selectedValue),i=Ak(a);return{records:e,buckets:n.buckets,viewModel:n,periodControl:r,summary:i,activeView:t}}function xf(e=_c()){return we({energyHistorySignature:o.energyHistorySignature||"",energyHistoryError:o.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,summary:e.summary})}function $f(e=_c()){let t=e.summary,r=Rk(t),n=e.buckets[0]?.dateKey?jt(e.buckets[0].dateKey):"\u2014",a=e.buckets[e.buckets.length-1]?.dateKey?jt(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(xf(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${Nk(e.activeView)}
          ${_k(e.periodControl)}
        </div>
        ${o.energyHistoryError?`<p class="oq-energy-history-error">${s(o.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${Ni(r.label,r.value,`${s(n)} - ${s(a)}`)}
          ${Ni("Elektrisch",ze(t.electricalInputWh,1),"verbruikt")}
          ${Ni("Warmtepomp",ze(t.heatOutputWh+t.coolingOutputWh,1),"warmte en koeling")}
          ${Ni("Cv-ketel",ze(t.boilerOutputWh,1),"thermisch")}
        </div>
        ${Dk(t)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${Wk(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${Vk(t)}
      </section>
    `}function Pc(e){if(o.appView!=="results"||!o.root)return;let t=e.target.closest?.("[data-oq-energy-history-tip]"),r=t?.closest?.(".oq-energy-history-chart-wrap")||o.root.querySelector(".oq-energy-history-chart-wrap"),n=r?.querySelector(".oq-energy-history-tooltip");if(!t||!r||!n){n&&n.classList.remove("is-visible");return}let a=String(t.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){n.classList.remove("is-visible");return}n.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(p=>`<span>${s(p)}</span>`).join("")}
    `;let i=r.getBoundingClientRect();n.classList.add("is-visible");let l=n.getBoundingClientRect(),c=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),u=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));n.style.transform=`translate(${c.toFixed(0)}px, ${u.toFixed(0)}px)`}function Mf(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${wf()}
        </div>
      </section>
    `}function Af(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${$f()}
        </div>
      </section>
    `}function Kk(){if(!o.root||o.appView!=="energy")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-overview-energy"):null;if(!e||!t)return!1;let r=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==r&&(e.className=r);let n=Hc();return Xe(t,bf(n),wf(n))}function zk(){if(!o.root||o.appView!=="results")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-energy-history"):null;if(!e||!t)return!1;let r=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==r&&(e.className=r);let n=_c(),a=Pk();return(a?!1:Xe(t,xf(n),$f(n)))||a}So({patchEnergyDom:Kk,patchResultsDom:zk});function Uk({label:e,value:t,tone:r,note:n,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(r)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(t)}</strong>
        <span>${s(n)}</span>
      </article>
    `}function ia(e,t=!1){return e.map(r=>Uk({...r,value:Object.prototype.hasOwnProperty.call(r,"key")?at(r.key):r.value,status:t})).join("")}function Oc(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function Ic(){let e=eo();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(we(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(t=>t.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function Pf({className:e,title:t,copy:r,body:n,signature:a=""}){let i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${t?`<div class="oq-overview-system-copy"><h3>${s(t)}</h3><p>${s(r)}</p></div>`:""}
        ${n}
      </section>
    `}function Hf(e){let t=String(e||"").trim();return{None:"geen bron",Manual:"handmatig",Disabled:"handmatig","HA input":"HA-invoer",MQTT:"MQTT","OT thermostat":"OpenTherm","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OpenTherm + handmatig"}[t]||t}function na(e,t){return!t||t==="geen bron"?e:`${e} Toestemming: ${t}.`}function Fc(e,t){return t?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function Gk(e,t){let r=t?"active":"neutral",n=Fc(e,t);return`<span class="oq-overview-chip oq-overview-chip--${s(r)}" data-oq-bind="panel-status">${s(n)}</span>`}function Qk(e){return`
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
    `}function jc(e,t,r,n){return`${r?Qk(n):""}${Gk(e,t)}`}function Nf(e,t,r,n,a){if(!e)return;let i=we({mode:t,running:r,warningActive:n,failureText:a});e.dataset.renderSignature!==i&&(Vt(e,jc(t,r,n,a)),e.dataset.renderSignature=i)}function ji(e,t,r=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(r||j(t))}</strong>
      </div>
    `}function Yk(e,t,r="blue",n=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(r)}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${n?`<p>${s(n)}</p>`:""}
      </article>
    `}function Jk(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}var Zk=Ko;function Xk(e){let r=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!r)return Number.NaN;let n=Number(r[1]),a=Number(r[2]);return Number.isNaN(n)||Number.isNaN(a)||n<0||n>23||a<0||a>59?Number.NaN:n*60+a}function eE(e){let t=Xk(j("timeNowHhmm",""));if(!Number.isFinite(t))return"";let r=Math.round(e),n=((t-r)%1440+1440)%1440,a=Math.floor(n/60),i=n%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function tE(e,t){let r=Math.max(0,(Number(t)-Number(e))/6e4),n=Zk(r),a=v("timeValid")&&C("timeValid")?eE(r):"";return a?{value:a,note:`${n} geleden`}:{value:`${n} geleden`,note:"Geen tijdsync"}}function oE(e){let t=Number(e);return Number.isNaN(t)?"\u2014":`${t>0?"+":t<0?"-":""}${Math.abs(t).toFixed(0)} W`}function Df(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>v(e))||""}function rE(){return["hp1WaterIn","hp2WaterIn"].find(e=>v(e))||""}function Lf(e=j("controlModeLabel","")){let t=String(e||"").toLowerCase();return t.includes("cm5")||t.includes("cooling")||t.includes("koeling")}function Bt(){return Lf()}function Of(e,t){let r=String(e||"").trim().toLowerCase();return r==="waiting for room request"||r==="wacht op kamervraag"||r==="cooling enabled, waiting for room temperature above cooling setpoint"||r==="koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint"?!0:t?!1:r==="flow too low"||r==="flow te laag"||r==="flow unavailable"}function Wc(){return Bt()?"Koeling":ae()?"Stooklijn":"Power House"}function nE(){let e=["phouseReq","strategyRequestedPower"];for(let t of e){let r=R(t);if(!Number.isNaN(r))return r}return Number.NaN}function If(){let e=nE(),t=R("phouseHouse"),r=R("totalHeat"),n=R("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:e-t,i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(n)&&e>n+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(r)&&r<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&r>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:z(e,0,"W"),houseText:z(t,0,"W"),correctionText:oE(a),capacityText:at("hpCapacity"),statusTitle:i,statusCopy:l}}function Ff(){let e=R("curveSupplyTarget"),t=R("supplyTemp"),r=Df(),n=r?R(r):Number.NaN,a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:t-e,i=!!r&&Number.isNaN(n),l="Stuurt op buitentemperatuur",c="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",c="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",c="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",c="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",c="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:at("curveSupplyTarget"),supplyText:at("supplyTemp"),deltaText:Jk(a),capacityText:at("hpCapacity"),statusTitle:l,statusCopy:c}}function jf(){let e=R("supplyTemp"),t=j("coolingGuardMode",""),r=j("coolingFallbackNightMinOutdoorTemp","\u2014"),n=R("coolingSupplyError"),a=R("coolingDemandRaw"),i=C("coolingPermitted"),l=C("coolingRequestActive"),c=j("coolingBlockReason","Onbekend"),u=Mc(c),p=Of(c,l),g="Wacht op koelvraag",w="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return p?(g="Wacht op koelvraag",w="Koeling is toegestaan en wacht tot de kamertemperatuur boven het koel-setpoint komt."):i?l?!Number.isNaN(a)&&a<=0?(g="Houdt doel vast",w="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(n)&&n>1?(g="Trekt aanvoer omlaag",w="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(n)&&n>.2?(g="Benadert koeldoel",w="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(n)||(g="Koelt rustig door",w="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(g="Koeling gereed",w="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(g="Koeling geblokkeerd",w=`Blokkade: ${u}.`),{targetText:at("coolingSupplyTarget"),supplyText:at("supplyTemp"),safeFloorText:at("coolingEffectiveMinSupplyTemp"),guardMode:t,fallbackNightMin:r,demandText:at("coolingDemandRaw"),statusTitle:g,statusCopy:w,permitted:i,requestActive:l,blockReason:u,waitingForRoomRequest:p}}function Wi(){if(Bt()){let t=jf(),r=t.guardMode.toLowerCase(),n=r.includes("user responsibility"),a=r.includes("fallback");return{title:"Koelregeling",copy:n?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:t.targetText,focusCopy:t.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:n?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:t.safeFloorText,tone:"blue",note:n?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${t.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:t.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(ae()){let t=Ff();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:t.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:t.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:t.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}let e=If();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function Vc(e){return Pf({className:"oq-overview-system",title:e.title,copy:e.copy,signature:we(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(t=>Yk(t.label,t.value,t.tone,t.note)).join("")}
        </div>
      `})}function aE(){if(!C("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(Bt()){let n=jf(),a=n.waitingForRoomRequest?"neutral":n.permitted?n.statusTitle==="Koelt rustig door"||n.statusTitle==="Houdt temperatuur vast"?"green":n.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:n.statusTitle,tone:a}}if(ff())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};let t=(ae()?Ff():If()).statusTitle;return{label:"Regeling nu",value:t,tone:t==="In balans"||t==="Dicht bij doel"?"green":t==="Nog aan het opbouwen"||t==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function iE(){return C("openquattEnabled")?Bt()?C("coolingPermitted")?C("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:j("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:C("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:C("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function Bc(e,t){let r=aE(),n=iE();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:t,tone:"orange",note:"actieve modus"},{label:"Regeling",value:r.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:n.value,tone:"orange",note:"actieve randvoorwaarde"}]}function Kc(e,t){let r=Bc(e,t);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(we(r))}">
        ${Oc("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${ia(r,!0)}
        </div>
      </section>
    `}function zc(){let e=Bt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function sE(){let e=C("openquattEnabled"),t=T("openquattResumeAt"),r=qn(t),n=(o.loadingEntities||o.entitySyncInFlight)&&!v("openquattResumeAt"),a=C("manualCoolingEnable"),i=v("coolingEnableSelected")?C("coolingEnableSelected"):a,l=Hf(j("coolingEnableEffectiveSource","")),c=String(T("coolingEnableSource")||"").trim(),u=Hf(T("coolingEnableSource")),p=String(T("silentModeOverride")||"Schedule"),g=!C("coolingPermitted"),w=C("coolingRequestActive"),y=Lf(),h=j("coolingBlockReason",""),m=Of(h,w),d="Uit",b=c==="Disabled"?"Koeling is niet toegestaan: handmatig staat uit.":u&&u!=="geen bron"?`Koeling is niet toegestaan: ${u} geeft geen toestemming en handmatig staat uit.`:"Koeling is niet toegestaan.";i&&y?(d="Actief",b=na("Koeling draait nu.",l)):i&&m?(d="Aan",b=na("Koeling is toegestaan en wacht op kamertemperatuur boven het koel-setpoint.",l)):i&&g?(d="Geblokkeerd",b=na(Mc(h||"Koeling wacht nog op veilige condities."),l)):i&&w?(d="Start bijna",b=na("Er is koelvraag. Koeling start zodra dat kan.",l)):i&&(d="Aan",b=na("Koeling is toegestaan en wacht op koelvraag.",l));let S="Uit",q="Stille modus staat uit.",E="neutral";return p==="On"?(S="Aan",q="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",E="orange"):p==="Schedule"&&(S="Schema",C("silentActive")?(q="Stille modus staat nu aan via het tijdvenster.",E="violet"):q="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":r?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[n?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:r?"Hervat automatisch":"Hervatten",value:r?Hr(t,!0):"Handmatig",tone:r?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:d,copy:b,buttonLabel:a?"Handmatig uit":"Handmatig aan",nextState:a?"off":"on",tone:i?y?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:S,copy:q,tone:E,kind:"select",selectedOption:p,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(k=>v(k.key))}function lE(e=[]){return e.length?`
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
    `:""}function sn({className:e,action:t,label:r,busy:n=!1,loading:a=!1,attrs:i=""}){return`
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
    `}function cE(e){if(e.kind==="openquatt-control"){let t=o.busyAction==="openquatt-regulation",r=(o.loadingEntities||o.entitySyncInFlight)&&!v("openquattResumeAt");return C("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${sn({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:t})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${sn({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:t})}
            ${sn(r?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:qn()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){let t=o.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(r=>sn({className:`oq-overview-controlpanel-segment${e.selectedOption===r.value?" is-selected":""}`,action:"select-overview-control-option",label:r.label,busy:t,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(r.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${sn({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:o.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function Uc(){let e=sE();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${Oc("Bediening")}
        ${e.map(t=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(t.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(t.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(t.tone)}">${s(t.status)}</strong>
            </div>
            <p>${s(t.copy)}</p>
            ${lE(t.meta)}
            ${cE(t)}
          </article>
        `).join("")}
      </section>
    `:""}function Wf(e){let t=j("controlModeLabel");return`
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
              ${Oc("Kerncijfers")}
              <div class="oq-overview-top">
                ${ia(zc())}
              </div>
            </section>
            ${Kc(e,t)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(Fa())}">
            ${Uc()}
          </aside>
        </div>
      </section>
    `}function Vi(){let e=Df(),t=rE();return Bt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...t?[{label:"Retourtemperatuur",key:t}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function Gc(e=Vi()){return we({...e,values:e.rows.map(t=>t.value||j(t.key))})}function Qc(){let e=Vi();return Pf({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:Gc(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(t=>ji(t.label,t.key,t.value||"")).join("")}
        </div>
      `})}var Rf=360,uE=100;function lo(){let e=Qn(o.trendWindowHours||Ht);return e!==o.trendWindowHours&&Jr(e),e}function Vf(e=lo()){return Math.max(1,Number(e)||24)*60*60*1e3}function dE(e=lo()){let t=Number(e)||24;return t>=72&&t%24===0?`${t/24}d`:`${t}u`}function Yc(e=lo()){let t=Number(e)||24;if(t>=72&&t%24===0){let r=t/24;return`${r} ${r===1?"dag":"dagen"}`}return`${t} uur`}function Nc(e){if(!Number.isFinite(e))return"\u2014";let t=new Date(e);if(Number.isNaN(t.getTime()))return"\u2014";let r={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(t)}catch{return t.toLocaleString("nl-NL",r)}}function pE(e){let t=String(e||"").trim().split("|");if(t.length<5)return null;let r=Number(t[0]);if(!Number.isFinite(r))return null;let n=a=>{let i=Number(a);return Number.isFinite(i)?i:null};return{t:r,outside:n(t[1]),supply:n(t[2]),room:t.length>=8?n(t[3]):null,roomSetpoint:t.length>=8?n(t[4]):null,flow:t.length>=8?n(t[5]):null,input:t.length>=8?n(t[6]):n(t[3]),output:t.length>=8?n(t[7]):n(t[4])}}function Lc(){return!1}function Dc(e=lo()){return[]}function Bf(){let e=Vf(),t=String(o.trendHistoryRaw||"").trim();if(!t)return Lc()?Dc():[];let r=t.split(/\r?\n/).map(pE).filter(Boolean),n=r.length?r[r.length-1].t:Number.NaN,a=Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:Number.isFinite(n)?n:Number.NaN;if(!Number.isFinite(a))return r.length?r.slice(-Rf):Dc();let i=Math.max(0,a-e),l=r.filter(c=>c.t>=i).slice(-Rf);return l.length?l:Lc()?Dc(windowHours):[]}function Jc(){let e=lo(),t=Yc(e),r=Bf(),n=Lc()&&r.length===0,a=Bt();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${t}.`,tone:"orange",samples:r,mock:n,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${t}.`,tone:"green",samples:r,mock:n,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${t}.`,tone:"slate",samples:r,mock:n,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{let l=Number(i?.input),c=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(c)||l<uE?Number.NaN:c/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${t}.`,tone:"blue",samples:r,mock:n,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${t}.`,tone:"sky",samples:r,mock:n,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function mE(e){let t=e.samples[e.samples.length-1]||null;return we({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:t?.t||0,trendSignature:o.trendHistorySignature||"",latestValues:t?[t.outside,t.supply,t.room,t.roomSetpoint,t.flow,t.input,t.output]:[]})}function aa(e,t){if(!e||!t)return Number.NaN;let r=typeof e.derive=="function"?e.derive(t):t?.[e.sampleKey],n=Number(r);return Number.isFinite(n)?n:Number.NaN}function gE(e,t){let r=[];return e.forEach(n=>{t.forEach(a=>{let i=aa(a,n);Number.isFinite(i)&&r.push(i)})}),r.length?{min:Math.min(...r),max:Math.max(...r)}:{min:0,max:1}}function fE(e){if(!Number.isFinite(e)||e<=0)return 1;let t=Math.floor(Math.log10(e)),r=e/10**t,n;return r<=1?n=1:r<=2?n=2:r<=5?n=5:n=10,n*10**t}function hE(e,t){let r=Number.isFinite(e?.min)?e.min:0,n=Number.isFinite(e?.max)?e.max:1,a=Math.max(n-r,1),i=Array.isArray(t)?t.map(y=>Number(y?.axisMin)).find(y=>Number.isFinite(y)):Number.NaN,l=Array.isArray(t)?t.map(y=>Number(y?.axisMax)).find(y=>Number.isFinite(y)):Number.NaN,c=Array.isArray(t)?t.map(y=>Number(y?.axisTickStep)).find(y=>Number.isFinite(y)&&y>0):Number.NaN,u=Math.max(1,Number.isFinite(c)?c:fE(a/4)),p=[];if(Number.isFinite(i)||Number.isFinite(l)){let y=Number.isFinite(i)?i:0,h=Number.isFinite(l)?l:Math.ceil(n/u)*u,m=Math.floor(y/u)*u,d=Math.ceil(h/u)*u;for(let b=m;b<=d+u*.5;b+=u)p.push(b)}else{let y=a/u,h=y<=1.8?3:y<=4.25?5:7,m=Math.floor(h/2),d=(r+n)/2,b=Math.round(d/u)*u;for(let S=-m;S<=m;S+=1)p.push(b+S*u)}let g=p[0],w=p[p.length-1];return{ticks:p,axisMin:g,axisMax:w,axisDecimals:0}}function Kf(e,t,r={}){let n=Number(r.windowHours),a=Number.isFinite(n)?n:lo(),i=Vf(a),l=640,c=220,u=46,p=18,g=18,w=34,y=l-u-p,h=c-g-w,m=e[e.length-1],d=!!r.mockData,b=d?i:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:m?m.t:0,S=d?0:b-i,q=Math.max(b-S,1),E=q,k=gE(e,t),$=k.min===k.max?{min:k.min-1,max:k.max+1}:{min:k.min-Math.max((k.max-k.min)*.12,1),max:k.max+Math.max((k.max-k.min)*.12,1)},_=hE(k,t),P=N=>u+(N-S)/q*y,B=N=>{if(!Number.isFinite(N))return Number.NaN;let Z=(N-$.min)/Math.max($.max-$.min,1);return g+(1-Math.min(1,Math.max(0,Z)))*h},H=[0,.5,1].map(N=>u+y*N),F=_.ticks.map(N=>B(N)),A=_.ticks.map((N,Z)=>({x:u-10,y:F[Z],text:z(N,_.axisDecimals)})),L=e.map(N=>{let Z=P(N.t),I=t.map(W=>{let ee=aa(W,N);return Number.isFinite(ee)?{seriesId:W.id||W.sampleKey||W.label,tone:W.tone,label:W.label,decimals:W.decimals,unit:W.unit,value:ee,x:Z,y:B(ee)}:null});return{sample:N,x:Z,values:I}}),D=t.flatMap(N=>{let Z=[],I=[];return e.forEach(W=>{let ee=aa(N,W);if(!Number.isFinite(ee)){I.length&&(Z.push(I),I=[]);return}I.push({x:P(W.t),y:B(ee)})}),I.length&&Z.push(I),Z.map(W=>W.length<2?{tone:N.tone,points:W,path:""}:{tone:N.tone,points:W,path:W.map((ee,Ne)=>`${Ne===0?"M":"L"} ${ee.x.toFixed(1)} ${ee.y.toFixed(1)}`).join(" ")})});return{width:l,height:c,left:u,right:p,top:g,bottom:w,plotWidth:y,plotHeight:h,latest:m,uptimeMs:E,endTime:b,startTime:S,span:q,windowHours:a,range:k,displayRange:$,gridXs:H,gridYs:F,yAxisLabels:A,points:L,tracks:D,series:t}}function Bi(){return we({windowHours:lo(),trendSignature:o.trendHistorySignature||"",trendNowMs:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:0,coolingActive:Bt()})}function bE(e){return Jc().find(t=>t.id===e)||null}function wE(e,t){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let r=0,n=Math.abs(e.points[0].x-t);return e.points.forEach((a,i)=>{let l=Math.abs(a.x-t);l<n&&(r=i,n=l)}),r}function yE(e,t){let r=zf(e,t);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(z(r,e.decimals,e.unit))}</strong>
      </div>
    `}function zf(e,t){if(e?.currentKey&&v(e.currentKey)){let r=R(e.currentKey);if(Number.isFinite(r))return r}return aa(e,t)}function Zc(e){e&&Jc().forEach(t=>{let r=e.querySelector(`[data-oq-trend-card="${t.id}"]`),n=t.samples[t.samples.length-1]||null;r&&t.series.forEach(a=>{let l=r.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),c=z(zf(a,n),a.decimals,a.unit);l&&l.textContent!==c&&(l.textContent=c)})})}function vE(e,t,r=!1,n=lo()){let a=Kf(e,t,{mockData:r,windowHours:n}),i=Yc(n),l=Nc(a.startTime),c=Nc(a.startTime+a.span/2),u=Nc(a.endTime),p=a.tracks.flatMap(g=>{if(g.points.length<2){let w=g.points[0];return w?`
          <circle
            cx="${w.x.toFixed(1)}"
            cy="${w.y.toFixed(1)}"
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
        ${p}
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
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(u)}</text>
      </svg>
    `}function SE(e){let t=e.samples[e.samples.length-1]||null,r=Yc(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(mE(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(r)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(n=>yE(n,t)).join("")}
            </div>
          </div>
        </div>
        ${vE(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function Ki(){let e=Jc();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(Bi())}">
        <div class="oq-overview-trends-grid">
          ${e.map(SE).join("")}
        </div>
      </section>
    `}function qE(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function kE(){let e=lo(),t=sc();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${Bo.map(r=>`
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
          >${s(dE(r))}</button>
        `})()}
        `).join("")}
      </div>
    `}function EE(){let e="overview-trends-history",t=o.settingsInfoOpen===e;return`
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
    `}function Uf(){let e=yt(),r=Bf().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${EE()}
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
                  ${kE()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&r?Ki():qE()}
        </div>
      </section>
    `}function TE(){if(!o.root||o.appView!=="diagnosis")return!1;let e=o.root.querySelector(".oq-overview-board");if(!e)return!1;let t=e.querySelector(".oq-overview-trends");return t?(Xe(t,Bi(),Ki()),Zc(e),sa(e),!0):!1}function Xc(e){if(!e)return null;let t=e.__oqTrendHoverNodes;if(t&&t.chart&&t.hoverLayer&&t.hoverPanel)return t;let r=e.querySelector("[data-oq-trend-hover-layer]"),n={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:r,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:r?r.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return r&&r.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{n.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=n,n}function _f(e,t,r,n=Xc(e)){if(!e||!t||!Array.isArray(t.points)||t.points.length===0)return;let a=Math.max(0,Math.min(t.points.length-1,r)),i=t.points[a];if(!i||!n||!n.chart||!n.hoverLayer||!n.hoverPanel||!n.hoverTime||!n.hoverNote||!n.hoverValues)return;let l=String(a);if(!n.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;let c=tE(i.sample.t,t.endTime);n.hoverPanel.hidden=!1,n.hoverLayer.removeAttribute("hidden"),n.hoverTime.textContent=c.value,n.hoverNote.textContent=c.note,n.hoverLine&&(n.hoverLine.setAttribute("x1",i.x.toFixed(1)),n.hoverLine.setAttribute("x2",i.x.toFixed(1)));let u=[];t.series.forEach(p=>{let g=aa(p,i.sample),w=p.id||p.sampleKey||p.label,y=n.hoverDots[w];if(!Number.isFinite(g)){y&&y.setAttribute("display","none");return}let h=i.values.find(m=>m.seriesId===w);y&&h&&(y.removeAttribute("display"),y.setAttribute("cx",h.x.toFixed(1)),y.setAttribute("cy",h.y.toFixed(1))),u.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(p.tone)}">
          <span>${s(p.label)}</span>
          <strong>${s(z(g,p.decimals,p.unit))}</strong>
        </div>
      `)}),n.hoverValues.innerHTML=u.join(""),e.dataset.oqTrendHoverIndex=l}function CE(e){if(!e)return;let t=Xc(e);t?.hoverPanel&&(t.hoverPanel.hidden=!0),t?.hoverLayer&&t.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function sa(e=o.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(r=>{let n=r.dataset.renderSignature||"";if(r.__oqTrendBoundSignature===n)return;typeof r.__oqTrendCleanup=="function"&&r.__oqTrendCleanup(),r.__oqTrendHoverNodes=null,r.__oqTrendBoundSignature=n;let a=r.querySelector(".oq-overview-trend-chart");if(!a)return;let i=bE(r.dataset.oqTrendCard);if(!i)return;let l=Kf(i.samples,i.series,{mockData:i.mock});r.__oqTrendModel=l;let c=Xc(r),u=0,p=null,g=()=>{let h=p;p=null,u=0;let m=a.getBoundingClientRect();if(!m.width||!m.height)return;let d=Number(h?.clientX);if(!Number.isFinite(d)){_f(r,l,l.points.length-1,c);return}let S=Math.min(m.width,Math.max(0,d-m.left))/m.width*l.width,q=wE(l,S);_f(r,l,q,c)},w=h=>{p=h,u||(u=window.requestAnimationFrame(g))},y=()=>{u&&(window.cancelAnimationFrame(u),u=0),p=null,CE(r)};a.addEventListener("pointermove",w),a.addEventListener("pointerenter",w),a.addEventListener("pointerleave",y),a.addEventListener("focus",w),a.addEventListener("blur",y),a.addEventListener("touchstart",w,{passive:!0}),r.__oqTrendCleanup=()=>{u&&(window.cancelAnimationFrame(u),u=0),p=null,a.removeEventListener("pointermove",w),a.removeEventListener("pointerenter",w),a.removeEventListener("pointerleave",y),a.removeEventListener("focus",w),a.removeEventListener("blur",y),a.removeEventListener("touchstart",w)}})}So({patchDiagnosisDom:TE});function iu(e,t,r){let n=Ui(j(t.mode,"Unknown")),a=C(t.defrost),i=vo(j(t.failures,"None")),l=Va(i),c=n==="Verwarmen"||n==="Koelen"||a;return{mode:n,defrostActive:a,failures:i,warningFailures:l,running:c,thermalKey:n==="Koelen"?t.cooling:t.heat,schematic:DE(e,t,r,n,a,l,c)}}function Qf(e,t=null){return`<h3>${s(e)}</h3>${t?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(t.layout)}">${WE(t.layout==="equal"?"minus":"plus")}<span>${s(t.label)}</span></button>`:""}`}function tu(e,t,r,n){return`<div class="oq-overview-hp-status">${jc(e,t,r,n)}</div>`}function xE(e,t){return t?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function Yf(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(t=>`${t.title} ${xE(Ui(j(t.keys.mode,"Unknown")),C(t.keys.defrost))}`).join(", "))}</p>`}function $E(e){let t=o.entities[e];if(!t)return"Positie: \u2014";let r=R(e);return Number.isNaN(r)?`Positie: ${j(e)}`:`Positie: ${z(r,0,t.uom||"")}`}function ME(e){return v(e)?`Positie: ${C(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \u2014"}function Ui(e){let t=String(e||"").trim();return!t||t==="Unknown"?"Onbekend":t==="Standby"?"Stand-by":t==="Heating"?"Verwarmen":t==="Cooling"?"Koelen":t}function ou(e,t,r,n=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(t)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(r)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(r)}" />
        ${n?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(r)}" />`:""}
      </g>
    `}function AE(e,t,r){return e==="temperature"?`
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
    `}function la({bind:e,modifier:t,x:r,y:n,width:a,kicker:i,detail:l,detailBind:c="",icon:u="heater",direction:p="down"}){let w=r+26,y=n+22,h=c?` data-oq-bind="${s(c)}"`:"",m="";if(p==="up"){let d=r+Math.round(a*.52);m=`M${d-6} ${n} L${d} ${n-8} L${d+6} ${n} Z`}else if(p==="left"){let d=n+Math.round(22);m=`M${r} ${d-6} L${r-8} ${d} L${r} ${d+6} Z`}else if(p==="right"){let d=n+Math.round(22);m=`M${r+a} ${d-6} L${r+a+8} ${d} L${r+a} ${d+6} Z`}else{let d=r+Math.round(a*.52);m=`M${d-6} ${n+44} L${d} ${n+44+8} L${d+6} ${n+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(t)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${r}" y="${n}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${w}" cy="${y}" r="11.5" />
        ${AE(u,w,y)}
        <text class="oq-hp-tech-tooltip-kicker" x="${r+48}" y="${n+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${r+48}" y="${n+32}"${h}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${m}" />
      </g>
    `}function ru({bind:e,x:t,y:r,width:n,value:a,label:i,ariaLabel:l="",align:c="start"}){let u=l||`${i} temperatuur ${a}`,p=c==="end",g=c==="center",w=g?"middle":p?"end":"start",y=g?t+n/2:p?t+n-2:t+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(u)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${t}" y="${r}" width="${n}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${y}" y="${r+13}" text-anchor="${w}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function HE({tooltip:e,...t}){return`${ru(t)}${la({bind:t.bind,...e})}`}function RE({bind:e,ariaLabel:t,x:r,y:n,width:a,height:i,rx:l,tooltip:c}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(t)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${r}" y="${n}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${la({bind:e,...c})}
    `}function eu({bind:e,className:t,active:r,ariaLabel:n,attrs:a="",activeClass:i="is-active",content:l,tooltip:c}){return`
      <g class="${[t,r&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${r?"0":"-1"}" aria-label="${s(n)}" ${a}>
        ${l}
      </g>
      ${la({bind:e,...c})}
    `}function _E({label:e,value:t,bind:r,ariaLabel:n="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${n?` aria-label="${s(n)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(t)}</strong>
      </div>
    `}function co(e,t,r=""){let n=R(e);return Number.isNaN(n)?j(e):z(n,t,Rr(e,r))}function PE(e){let r=String(T("hpGeneration")||"").trim()==="V1"&&e==="hp1Flow"?["flowSelected","controllerFlow","flowLocal",e]:[e];return r.filter((n,a)=>n&&r.indexOf(n)===a)}function NE(e){let t=PE(e),r=t.find(n=>v(n))||e;for(let n of t){if(!v(n))continue;let a=R(n);if(!Number.isNaN(a))return{key:n,value:a,text:z(a,0,Rr(n,"L/h"))}}return{key:r,value:Number.NaN,text:j(r)}}function DE(e,t,r,n,a,i,l){let c=R(t.freq),u=Number.isNaN(c)?"\u2014":String(Math.round(c)),p=R(t.power),g=R(t.heat),w=R(t.cooling),y=NE(t.flow),h=y.value,m=n==="Koelen"?w:g,d=l||!Number.isNaN(c)&&c>0||!Number.isNaN(p)&&p>80||!Number.isNaN(g)&&g>150,b=!Number.isNaN(h)&&h>0,S=Fc(n,d),q=i==="Geen actieve storingen"?"Geen storingen":i,E=q!=="Geen storingen",k=a?"Actief":"Uit",$=co(t.waterOut,1,"\xB0C"),_=co(t.waterIn,1,"\xB0C"),P=y.text,B=co(t.evaporatorCoilTemp,1,"\xB0C"),H=co(t.innerCoilTemp,1,"\xB0C"),F=co(t.outsideTemp,1,"\xB0C"),A=co(t.condenserPressure,1,"bar"),L=co(t.dischargeTemp,1,"\xB0C"),D=co(t.evaporatorPressure,1,"bar"),N=co(t.returnTemp,1,"\xB0C"),Z=C(t.bottomPlate),I=C(t.crankcase),W=$E(t.eev),ee=ME(t.fourWay),Ne=z(p,0,"W"),xt=z(m,0,"W"),gt=n==="Koelen"?!Number.isNaN(p)&&p>=5&&!Number.isNaN(w)?w/p:Number.NaN:R(t.cop),zt=z(gt,1),et=n==="Koelen"?"COP (EER)":"COP",De=n==="Koelen"?"Koelafgifte":"Warmteafgifte",M=n==="Koelen"?"afgegeven koeling":"afgegeven warmte",x=R(t.fanSpeed),K=!Number.isNaN(x)&&x>0,Y=Number.isNaN(x)?"\u2014":`${Math.round(x)} rpm`,G=a||n==="Koelen",le=G?"Verdamper":"Condensor",Se=G?"Condensor":"Verdamper",ue=G?"return":"supply",xe=G?"supply":"return",ge=360,ft=384,$t=214,pe="M278 220 C278 228 273 234 266 234",Tr="M278 220 C278 228 283 234 290 234",Ve="M290 234 C284 234 279 240 278 248",tt="M266 234 C272 234 277 240 278 248",ht=G?`M290 234 H${ge} Q372 ${$t} ${ft} 234 H436 V134 H480`:"M266 234 H180 V134 H164",bt=G?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${ft} Q372 ${$t} ${ge} 234 H290`,Do="M296 150 H278 V220",qe="M278 248 V268 H372 V150 H356",Mt=G?"M480 294 H337":"M164 294 H315",Hu=G?"M315 294 H164":"M337 294 H480",ot=["oq-hp-schematic-board",`oq-hp-schematic-board--${r}`,d?"is-running":"",b?"is-water-flowing":"",K?"is-fan-running":"",G?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:ot,statusText:S,failureText:q,warningActive:E,waterFlowActive:b,defrostActive:a,defrostText:k,mode:n,reverseCycle:G,compressorFreqText:`${u} Hz`,leftExchangerTitle:le,rightExchangerTitle:Se,supplyLineTone:ue,returnLineTone:xe,waterOutText:$,waterInText:_,flowText:P,evaporatorCoilTempText:B,innerCoilTempText:H,outsideTempText:F,dischargePressureText:A,dischargeTempText:L,suctionPressureText:D,suctionTempText:N,bottomPlateActive:Z,crankcaseActive:I,eevPositionText:W,fourWayPositionText:ee,powerText:Ne,heatText:xt,heatLabel:De,heatDescription:M,efficiencyText:zt,efficiencyLabel:et,fanRpmText:Y,hotgasValveHeat:pe,hotgasValveCool:Tr,suctionValveHeat:Ve,suctionValveCool:tt,leftValveTone:G?"suction":"hotgas",rightValveTone:G?"hotgas":"suction",pipes:{supply:{tone:ue,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:xe,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:Do,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:ht,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:Mt,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:Hu,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:bt,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:qe,animated:!0,flowVariant:"default"}}}}function LE(e){let t=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),r=`${t}-cond-water-heat`,n=`${t}-cond-water-cool`,a=`${t}-cond-ref`,i=e.reverseCycle?n:r,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],c=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],u=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
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

            ${Object.entries(e.pipes).map(([p,g])=>ou(p.replace(/[A-Z]/g,w=>`-${w.toLowerCase()}`),g.tone,g.d,g.animated,g.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${c.map(HE).join("")}
            ${eu({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${eu({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${eu({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${u.map(RE).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(_E).join("")}
          </div>
        </div>
      </div>
    `}function Jf(e,t,r,n="normal",a=null){if(!v(t.power))return"";let i=iu(e,t,r),{mode:l,defrostActive:c,running:u,thermalKey:p}=i,g=i.schematic;return o.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${Qf(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${tu(l,u,g.warningActive,g.failureText)}
            </div>
          </div>
          ${LE(g)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${tu(l,u,g.warningActive,g.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${ia([{key:t.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:p,label:g.heatLabel,tone:"orange",note:g.heatDescription},{label:g.efficiencyLabel,value:g.efficiencyText,tone:"green",note:"actueel"}])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${s(l)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${s(j(t.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${c?"Actief":"Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${ji("Water in",t.waterIn)}
          ${ji("Water out",t.waterOut)}
        </div>
      </section>
    `}function su(){return C("boilerCvAssistEnabled")&&v("boilerHeatPower")}function OE(){return(typeof oe=="function"?oe():"")!=="single"&&v("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function IE(){return(typeof oe=="function"?oe():"")!=="single"&&v("hp2Flow")?"hp2Flow":"hp1Flow"}function Gi(){let e=R("boilerHeatPower"),t=R(IE()),r=v("boilerActive")?C("boilerActive"):!Number.isNaN(e)&&e>20,n=!Number.isNaN(t)&&t>0,a=z(e,0,"W"),i=z(t,0,"L/h"),l=z(R(OE()),1,"\xB0C"),c=z(R("supplyTemp"),1,"\xB0C"),u=r?"Aan":"Uit",p=r?"Levert ondersteuning":"Geen ondersteuning",g=["oq-boiler-card",r?"is-running":"is-idle"].filter(Boolean).join(" ");return{active:r,flowActive:n,heatText:a,flowText:i,returnTempText:l,supplyTempText:c,statusText:u,statusCopy:p,boardClass:g,flowPathClass:n?"is-flowing":"is-static"}}function lu(e=Gi()){return we({version:"boiler-visual-mode-v1",visualMode:o.hpVisualMode,boardClass:"oq-boiler-card"})}function FE(e,t=Gi()){let r=e.querySelector(".oq-boiler-card");r&&(r.className=["oq-boiler-card",t.active?"is-running":"is-idle",t.flowActive?"is-flowing":"is-static"].join(" "));let n=e.querySelector(".oq-overview-chip");n&&(n.className=`oq-overview-chip oq-overview-chip--${t.active?"active":"neutral"}`,n.textContent!==t.statusText&&(n.textContent=t.statusText));let a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",t.active),a.classList.toggle("is-idle",!t.active));let i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==t.statusCopy&&(i.textContent=t.statusCopy);let l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==t.heatText&&(l.textContent=t.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(g=>{g.textContent!==t.flowText&&(g.textContent=t.flowText)});let c=e.querySelector("[data-oq-boiler-status-value]");c&&c.textContent!==t.statusCopy&&(c.textContent=t.statusCopy);let u=e.querySelector('[data-oq-bind="boiler-return-value"]');u&&u.textContent!==t.returnTempText&&(u.textContent=t.returnTempText);let p=e.querySelector('[data-oq-bind="boiler-supply-value"]');p&&p.textContent!==t.supplyTempText&&(p.textContent=t.supplyTempText)}function jE(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(lu(e))}">
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
    `}function nu(){if(!su())return"";let e=Gi();return o.hpVisualMode!=="schematic"?jE(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(lu(e))}">
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
                ${ou("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${ou("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${ru({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:"Retour",ariaLabel:`Retour ${e.returnTempText}`,align:"start"})}
                ${la({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"})}
                ${ru({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:"Aanvoer",ariaLabel:`Aanvoer ${e.supplyTempText}`,align:"end"})}
                ${la({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"right"})}
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
    `}function ua(){let e=typeof oe=="function"?oe():"";return xa.filter(t=>e==="single"&&t.title==="HP2"?!1:v(t.keys.power))}function cu(e){return!Array.isArray(e)||e.length<2||o.hpVisualMode!=="schematic"?"equal":o.hpLayoutMode==="focus-hp1"||o.hpLayoutMode==="focus-hp2"?o.hpLayoutMode:"equal"}function zi(e,t,r){return!Array.isArray(t)||t.length<2?"normal":r==="focus-hp1"?e===0?"focus":"muted":r==="focus-hp2"?e===1?"focus":"muted":"normal"}function au(e,t,r){return!Array.isArray(t)||t.length<2||o.hpVisualMode!=="schematic"?null:zi(e,t,r)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function Zf(e){return!Array.isArray(e)||e.length!==1?cu(e):su()?"equal":"single"}function WE(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function Xf(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${Yf(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function VE(e,t){if(!e)return!1;let r=e.querySelector(".oq-overview-hp-tools-copy"),n=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!r||!n||!a?(Vt(e,Xf(t)),!0):(Vt(r,`
      <h3>Warmtepompen</h3>
      ${Yf(t)}
    `),n.classList.toggle("is-active",o.hpVisualMode==="schematic"),a.classList.toggle("is-active",o.hpVisualMode==="compact"),!0)}function eh(){let e=Wc(),t=ua(),r=cu(t),n=Zf(t),a=Xf(t);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${Ic()}
          ${Wf(e)}
          <div class="oq-overview-main">
            ${Vc(Wi())}
            ${Qc()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(n)}">
            ${t.map((i,l)=>Jf(i.title,i.keys,i.accent,zi(l,t,r),au(l,t,r))).join("")}
            ${nu()}
          </div>
        </div>
      </section>
    `}function BE(e,t,r){if(!e)return;let n=e.querySelector(t);n&&n.textContent!==r&&(n.textContent=r)}function ln(e,t,r){e&&e.getAttribute(t)!==r&&e.setAttribute(t,r)}function KE(e,t){t.forEach(([r,n])=>{BE(e,`[data-oq-bind="${r}"]`,n)})}function zE(e,t){t.forEach(([r,n])=>{ln(e.querySelector(`[data-oq-bind="${r}"]`),"aria-label",n)})}function UE(e,t,r,n=""){let a=e.querySelector(`[data-oq-bind="${t}"]`);a&&(a.classList.toggle("is-active",r),ln(a,"tabindex",r?"0":"-1"),!r&&n&&Qi(e.querySelector(`[data-oq-bind="${n}"]`)))}function GE(e,t,r){ln(e.querySelector(`[data-oq-bind="${t}"]`),"fill",r)}function ca(e,t,r,n){if(!e)return;let a=`${t}${r}`;n.map(l=>`${t}${l}`).find(l=>e.classList.contains(l))!==a&&(n.forEach(l=>e.classList.remove(`${t}${l}`)),e.classList.add(a))}function QE(e,t,r,n){let a=e.querySelector(`[data-oq-pipe="${t}"]`);a&&(ca(a,"oq-hp-tech-pipe--",r,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==n&&i.setAttribute("d",n)}))}function Qi(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function Gf(e,t,r){!e||!t||!r||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(n=>{n!==r&&Qi(n)}),t.appendChild(r),r.classList.add("is-active"),r.setAttribute("aria-hidden","false"))}function YE(e,t,r,n){if(!e||!t||!r||!n||r.dataset.oqTooltipWired==="true")return;r.dataset.oqTooltipWired="true";let a=()=>{r.matches(":hover")||document.activeElement===r||Qi(n)};r.addEventListener("mouseenter",()=>Gf(e,t,n)),r.addEventListener("mouseleave",a),r.addEventListener("focus",()=>Gf(e,t,n)),r.addEventListener("blur",a)}function th(e){if(!e)return;let t=e.querySelector(".oq-hp-tech-svg");if(!t)return;let r=t.querySelector(".oq-hp-tech-tooltip-layer");r||(r=document.createElementNS("http://www.w3.org/2000/svg","g"),r.setAttribute("class","oq-hp-tech-tooltip-layer"),t.appendChild(r)),Array.from(t.querySelectorAll(".oq-hp-tech-tooltip")).forEach(n=>{r.appendChild(n)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(n=>{let a=n.getAttribute("data-oq-tooltip-target");if(!a)return;let i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);YE(e,r,n,i)})}function oh(e=o.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(t=>{th(t)})}function JE(e,t,r,n,a=null,i=null){if(!e)return;let l=i||iu(t,r,n),{mode:c,running:u}=l,p=l.schematic,g=e.querySelector(".oq-overview-hp-head-title");g&&Vt(g,Qf(t,a));let w=e.querySelector(".oq-overview-hp-head-side");if(w){let b=w.querySelector(".oq-overview-hp-status");b||(Vt(w,tu(c,u,p.warningActive,p.failureText)),b=w.querySelector(".oq-overview-hp-status")),Nf(b,c,u,p.warningActive,p.failureText)}let y=e.querySelector("[data-oq-hp-board]");if(!y)return;y.className!==p.boardClass&&(y.className=p.boardClass),KE(y,[["status",p.statusText],["left-exchanger-title",p.leftExchangerTitle],["right-exchanger-title",p.rightExchangerTitle],["compressor-freq",p.compressorFreqText],["flow-value",p.flowText],["inner-coil-temp-value",p.innerCoilTempText],["evaporator-temp-value",p.evaporatorCoilTempText],["outside-temp-value",p.outsideTempText],["discharge-pressure-value",p.dischargePressureText],["discharge-temp-value",p.dischargeTempText],["suction-pressure-value",p.suctionPressureText],["suction-temp-value",p.suctionTempText],["supply-value",p.waterOutText],["return-value",p.waterInText],["footer-mode",p.mode],["footer-power",p.powerText],["footer-heat",p.heatText],["footer-efficiency-label",p.efficiencyLabel],["footer-efficiency",p.efficiencyText],["fan-speed-value",p.fanRpmText],["fourway-detail",p.fourWayPositionText],["eev-detail",p.eevPositionText]]);let h=y.querySelector('[data-oq-bind="footer-heat-label"]');if(h){ln(h,"aria-label",p.heatLabel);let b=p.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";h.innerHTML!==b&&(h.innerHTML=b)}[["bottom-heater",p.bottomPlateActive],["crankcase-heater",p.crankcaseActive]].forEach(([b,S])=>{UE(y,b,S,`${b}-tooltip`)});let m=y.querySelector('[data-oq-bind="defrost-badge"]');m&&(ln(m,"tabindex",p.defrostActive?"0":"-1"),ln(m,"aria-label",p.defrostActive?"Defrost actief":"Defrost uit"),p.defrostActive||Qi(y.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",p.supplyLineTone],["return-tooltip",p.returnLineTone]].forEach(([b,S])=>{ca(y.querySelector(`[data-oq-bind="${b}"]`),"oq-hp-tech-tooltip--",S,["warm","supply","return"])}),zE(y,[["supply-reading",`Aanvoer temperatuur ${p.waterOutText}`],["flow-reading",`Flow ${p.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${p.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${p.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${p.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${p.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${p.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${p.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${p.dischargeTempText}`],["return-reading",`Retour temperatuur ${p.waterInText}`],["suction-pressure-reading",`Zuigdruk ${p.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${p.suctionTempText}`],["fourway-trigger",`4-wegklep, ${p.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${p.eevPositionText}`]]),ca(y.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",p.returnLineTone,["supply","return"]);let d=String(p.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");GE(y,"cond-water",`url(#${p.reverseCycle?`${d}-cond-water-cool`:`${d}-cond-water-heat`})`),Object.entries(p.pipes).forEach(([b,S])=>{QE(y,b.replace(/[A-Z]/g,q=>`-${q.toLowerCase()}`),S.tone,S.d)}),th(y),Go()}function ZE(){if(!o.root||o.appView!=="overview")return!1;let e=o.root.querySelector(".oq-overview-board");if(!e)return!1;let t=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==t&&(e.className=t);let r=Wc(),n=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),c=e.querySelector(".oq-overview-trends"),u=e.querySelector(".oq-overview-hp-tools"),p=e.querySelector(".oq-overview-hp-grid"),g=e.querySelector("[data-oq-boiler-panel]"),w=ua();if(n){let q=eo();Xe(n,we(q),Ic())}if(a){let q=a.querySelector(".oq-overview-top");q&&Vt(q,ia(zc()));let E=a.querySelector(".oq-overview-statuspanel");if(E){let $=j("controlModeLabel");Xe(E,we(Bc(r,$)),Kc(r,$))}let k=a.querySelector(".oq-overview-summary-side");if(k){let $=Fa();k.dataset.renderSignature!==$&&(Vt(k,Uc()),k.dataset.renderSignature=$)}}if(i&&Xe(i,we(Wi()),Vc(Wi())),l){let q=Vi();Xe(l,Gc(q),Qc())}if(c&&o.appView==="overview"&&(Xe(c,Bi(),Ki()),Zc(e)),sa(e),!u||!p)return!1;let y=cu(w),h=Zf(w);if(VE(u,w),ca(p,"oq-overview-hp-grid--",h,["single","equal","focus-hp1","focus-hp2"]),o.hpVisualMode!=="schematic"){let q=[...w.map((k,$)=>Jf(k.title,k.keys,k.accent,zi($,w,y),au($,w,y))),nu()].join(""),E=we({visualMode:o.hpVisualMode,layout:h,markup:q});return p.dataset.renderSignature!==E&&(Vt(p,q),p.dataset.renderSignature=E),!0}let m=su()?Gi():null,d=m?nu():"",b=m?lu(m):"";return!!g!=!!d||(g&&g.dataset.renderSignature!==b?g.outerHTML=d:g&&m&&FE(g,m),p.querySelectorAll("[data-oq-hp-panel]").length!==w.length)?!1:(w.forEach((q,E)=>{let k=e.querySelector(`[data-oq-hp-panel="${q.title}"]`);if(k){let $=iu(q.title,q.keys,q.accent);ca(k,"oq-overview-hp--",zi(E,w,y),["normal","focus","muted"]),JE(k,q.title,q.keys,q.accent,au(E,w,y),$)}}),!0)}So({patchOverviewDom:ZE});function rh(e){let t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}function XE(e,t="\u2014"){if(!v(e))return t;let r=R(e);return Number.isFinite(r)?String(Math.round(r)):t}function Po(e,t=1,r="",n="\u2014"){if(!v(e))return n;let a=R(e);return Number.isFinite(a)?`${a.toFixed(t)}${r?` ${r}`:""}`:n}function nh(e,t="\u2014"){if(!v(e))return t;let r=R(e);return Number.isFinite(r)?`${Math.round(r)} u`:t}function du(e){if(!e||!e.keys)return!1;let t=Ui(j(e.keys.mode,"Unknown")),r=R(e.keys.freq);return t==="Verwarmen"||t==="Koelen"||C(e.keys.defrost)||t==="Onbekend"&&Number.isFinite(r)&&r>0}var e1=Object.freeze({0:"inactive",1:"full",2:"projected_floor",3:"simmer",4:"falling_gap",5:"buffer_stop",6:"dew_stop",7:"fallback_floor",8:"restart_wait",9:"room_cap",10:"fallback_cap1",11:"level1_hold",12:"oil_return_hold",13:"oil_return_recovery",14:"capacity_cap"});function ts(e){let t=String(e||"").trim().toLowerCase();if(!t)return"";let r=Number(t);return Number.isInteger(r)?e1[r]||"unknown":t}function t1(e){return["","full","inactive","none","unknown","unavailable"].includes(ts(e))}function fu(e){return["dew_stop","falling_gap","projected_floor","restart_wait","sensor_fallback","oil_return_recovery","level1_hold"].includes(ts(e))}function o1(e){let t=C("coolingRequestActive"),r=j("coolingLimiterReasonCode",""),n=ts(r),a=t&&n&&!t1(n),i=t&&v("coolingPermitted")&&!C("coolingPermitted"),l=i||a&&fu(n),c=a&&!l,u=Bt()||t,p=e.filter(du).length,g=e.some(h=>h.title==="HP2"),w=e.some(h=>C(h.keys.defrost)),y=v("boilerActive")&&C("boilerActive");return{title:"Control mode",copy:"De tab toont dezelfde eventlogica voor elke control mode.",hpRunningCount:p,hp2Available:g,defrostActive:w,boilerActive:y,coolingMode:u,coolingRequest:t,coolingBlocked:i,coolingLimited:l||c,coolingProtection:l,coolingCapped:c,coolingLimiterReason:n||"inactive"}}function ph(e){let t=String(e||"").trim().toLowerCase();return t.includes("cm100")?"cm100":t.includes("cm98")?"cm98":t.includes("cm5")?"cm5":t.includes("cm3")?"cm3":t.includes("cm2")?"cm2":t.includes("cm1")?"cm1":t.includes("cm0")?"cm0":""}function r1(){let e=Math.round(R("strategyActiveCode"));return e===1?"Koeling":e===2?"Stooklijn":e===3?"Power House":j("strategy","\u2014")}function ah(e,t="\u2014"){let r=XE(e,t);return r==="\u2014"?t:r}var n1=Object.freeze([["status","Actueel","shield"],["timeline","Tijdlijn","activity"],["graphs","Grafieken","bar-chart"]].map(([e,t,r])=>Object.freeze({id:e,label:t,icon:r}))),a1=Object.freeze([["last1","Laatste 1 uur","1 uur","Laatste 1 uur","Recente beslismomenten in het afgelopen uur.","De gekozen tijd verbindt grafiek en uitleg over het laatste uur.",{durationMinutes:60}],["last2","Laatste 2 uur","2 uur","Laatste 2 uur","Recente beslismomenten in de afgelopen twee uur.","De gekozen tijd verbindt grafiek en uitleg over de laatste twee uur.",{durationMinutes:120}],["last4","Laatste 4 uur","4 uur","Laatste 4 uur","Recente momenten en periodes voor een gerichte diagnose.","De gekozen tijd verbindt grafiek en uitleg over de laatste vier uur.",{durationMinutes:240,quick:!0}],["last8","Laatste 8 uur","8 uur","Laatste 8 uur","Een compacte terugblik op de laatste acht uur.","De gekozen tijd verbindt grafiek en uitleg over de laatste acht uur.",{durationMinutes:480}],["last12","Laatste 12 uur","12 uur","Laatste 12 uur","Een dagdeel met alle belangrijke beslismomenten.","De gekozen tijd verbindt grafiek en uitleg over de laatste twaalf uur.",{durationMinutes:720}],["last24","Afgelopen 24 uur","24 uur","Afgelopen 24 uur","Gebeurtenissen die verklaren hoe het systeem in de huidige situatie kwam.","De gekozen tijd verbindt grafiek en uitleg over de laatste 24 uur.",{durationMinutes:1440,quick:!0}],["last48","Afgelopen 48 uur","48 uur","Afgelopen 48 uur","Twee dagen met belangrijke momenten en perioden.","De gekozen tijd verbindt grafiek en uitleg over de laatste 48 uur.",{durationMinutes:2880}],["last3d","Afgelopen 3 dagen","3 dagen","Afgelopen 3 dagen","Een terugblik op patronen over drie dagen.","De gekozen tijd verbindt grafiek en uitleg over de laatste drie dagen.",{durationMinutes:4320}],["today","Vandaag","Vandaag","Vandaag","Belangrijke momenten en periodes sinds middernacht.","De gekozen tijd verbindt grafiek en uitleg voor vandaag.",{calendarDay:"today",quick:!0}],["yesterday","Gisteren","Gisteren","Gisteren","Terugkijken naar een volledige kalenderdag.","De gekozen tijd verbindt grafiek en uitleg voor gisteren.",{calendarDay:"yesterday",quick:!0}],["week","7 dagen","7 dagen","Afgelopen 7 dagen","Patronen zoals defrosts, starts/stops en bescherming over meerdere dagen.","De gekozen tijd verbindt grafiek en uitleg binnen de weekselectie.",{durationMinutes:10080,quick:!0}],["custom","Eigen periode","Eigen periode","Eigen periode","Een zelfgekozen begin- en eindmoment.","De gekozen tijd verbindt grafiek en uitleg over de gekozen periode.",{custom:!0}]].map(([e,t,r,n,a,i,l])=>Object.freeze({id:e,label:t,shortLabel:r,eyebrow:n,title:"Tijdlijn",copy:a,graphCopy:i,...l})));function mh(){return n1}function No(){return a1}function i1(){return No().filter(e=>e.quick)}function Xi(e){let t=new Date(String(e||"")).getTime();return Number.isFinite(t)?t:Number.NaN}function gh(){let e=Xi(o.controlReplayCustomStart),t=Xi(o.controlReplayCustomEnd);return!Number.isFinite(e)||!Number.isFinite(t)||t<=e?null:{start:e,end:t}}function pu(e){let t=new Date(e);t.setMinutes(0,0,0);let r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`}function da(e){return pu(e).slice(0,10)}function ih(e){let r=String(e||"").match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):00$/);return{date:r?.[1]||"",hour:r?.[2]||"00"}}function sh(e){return Array.from({length:24},(t,r)=>{let n=String(r).padStart(2,"0");return`<option value="${n}"${n===e?" selected":""}>${n} uur</option>`}).join("")}function s1(){let e=Date.now();return{start:o.controlReplayCustomStart||pu(e-1440*60*1e3),end:o.controlReplayCustomEnd||pu(e)}}function l1(e,t=Date.now()){let n=new Date(t).setMinutes(0,0,0),a=Math.ceil((t-6048e5)/(3600*1e3))*60*60*1e3,i=Xi(e.start),l=Number.isFinite(i)?Math.max(a,Math.min(n,i)):n-1440*60*1e3,c=Xi(e.end),u=Number.isFinite(c)?Math.max(l,Math.min(n,c)):n;return{earliestDate:da(a),latestDate:da(n),startMaxDate:da(Math.min(n,u)),endMinDate:da(l),endMaxDate:da(Math.min(n,l+6048e5))}}function Er(e=mt(),t=Date.now()){let r=No().find(a=>a.id===e)||No().find(a=>a.id==="last24");if(r?.calendarDay){let a=new Date(t);return a.setHours(0,0,0,0),r.calendarDay==="yesterday"&&a.setDate(a.getDate()-1),{start:a.getTime(),end:a.getTime()+1440*60*1e3}}if(r?.custom)return gh()||{start:t-1440*60*1e3,end:t};let n=Number(r?.durationMinutes)||1440;return{start:t-n*60*1e3,end:t}}function hu(e=mt(),t=Date.now()){let r=Er(e,t);return Math.max(1,(r.end-r.start)/(60*1e3))}function c1(e,t=!1){let r=new Date(e),n=r.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return t?`${r.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${n}`:n}function u1(e=mt(),t=Date.now()){if(e==="today"||e==="yesterday")return["00:00","06:00","12:00","18:00","24:00"];let r=Er(e,t),a=hu(e,t)>1440||e==="custom";return[0,.25,.5,.75,1].map((i,l)=>l===4&&e!=="custom"?"Nu":c1(r.start+(r.end-r.start)*i,a))}function bu(){return mh().some(e=>e.id===o.controlReplayTab)?o.controlReplayTab:"status"}function mt(){let e=No().find(t=>t.id===o.controlReplayWindow);return e?.custom&&!gh()?"last24":e?o.controlReplayWindow:"last24"}function ga(){let e=mt();return{...No().find(r=>r.id===e)||No().find(r=>r.id==="last24"),axis:u1(e)}}var lh=Object.freeze({normal:{label:"Normaal",tone:"normal"},limited:{label:"Bescherming actief",tone:"limited"},attention:{label:"Aandacht",tone:"attention"},fault:{label:"Storing",tone:"fault"}});function wu(e="normal"){return lh[e]||lh.normal}var d1=Object.freeze({keep_current:{label:"Huidige keuze blijft logisch",summary:"De huidige stand past bij de vraag in huis. Wisselen zou nu weinig voordeel geven.",checks:["Vraag blijft binnen de band","Geen betere keuze nodig","Rustig door laten lopen"]},hold_active:{label:"Wissel bewust uitgesteld",summary:"Het systeem wacht bewust even, zodat warmtepompen niet onnodig vaak starten en stoppen.",checks:["Vraag is nog niet duidelijk anders","Minimale looptijd telt mee","Actieve bron werkt nog goed"]},defrost_hold:{label:"Ontdooien rustig laten verlopen",summary:"Een warmtepomp ontdooit kort. Dat is normaal wintergedrag en herstelt vanzelf.",checks:["Ontdooien actief of net klaar","Warmte kan kort lager zijn","Herstart gebeurt automatisch"]},better_heat:{label:"Twee pompen passen beter",summary:"De warmtevraag blijft hoog. Twee warmtepompen kunnen die vraag rustiger leveren dan \xE9\xE9n pomp op hoge belasting.",checks:["Warmtevraag blijft hoog","Beide warmtepompen beschikbaar","Samen leveren ze rustiger vermogen"]},soft_guard:{label:"Veilige marge bewaakt",summary:"Het systeem begrenst zichzelf om veilig binnen de temperatuur- en flowgrenzen te blijven.",checks:["Veiligheidsmarge bewaakt","Geen storing","Begrenzing verdwijnt vanzelf"]},less_power:{label:"Minder vermogen nodig",summary:"De vraag neemt af. E\xE9n warmtepomp kan de resterende vraag weer rustig dragen.",checks:["Vraag neemt af","E\xE9n warmtepomp is genoeg","Minder elektrisch vermogen nodig"]},cooling_request_cleared:{label:"Geen koelvraag meer",summary:"De koelvraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",checks:["Koelvraag weg","Warmtepomp stopt","Naloop kan normaal zijn"]},heating_request_cleared:{label:"Geen warmtevraag meer",summary:"De warmtevraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",checks:["Warmtevraag weg","Warmtepomp stopt","Naloop kan normaal zijn"]},no_candidate:{label:"Nog geen veilige start",summary:"Er is vraag, maar een start is nu nog niet verstandig door wachttijd of bescherming.",checks:["Beschikbaarheid gecontroleerd","Bescherming of wachttijd actief","Straks opnieuw beoordelen"]},candidate_in_rest:{label:"Rusttijd loopt nog",summary:"De warmtepomp is kort geleden gestopt en wacht nog even om korte cycli te voorkomen.",checks:["Vorige stop is recent","Start wordt uitgesteld","Bij blijvende vraag opnieuw beoordelen"]},candidate_in_defrost:{label:"Warmtepomp ontdooit",summary:"Deze warmtepomp kan nu niet starten of wisselen omdat ontdooien eerst rustig moet afronden.",checks:["Ontdooien actief","Niet onnodig wisselen","Automatisch opnieuw beoordelen"]},candidate_unavailable:{label:"Warmtepomp niet beschikbaar",summary:"De warmtepomp is nu geen geschikte kandidaat door beschikbaarheid of technische begrenzing.",checks:["Kandidaat gecontroleerd","Voorwaarde niet vrij","Andere keuze blijft mogelijk"]},defrost_boost:{label:"Ontdooien opgevangen",summary:"Een andere bron kan tijdelijk helpen terwijl een warmtepomp ontdooit.",checks:["Ontdooien verlaagt kort vermogen","Andere bron beschikbaar","Comfort blijft beschermd"]},boiler_assist:{label:"CV ondersteunt tijdelijk",summary:"De CV-ketel helpt alleen wanneer de warmtevraag tijdelijk meer vermogen vraagt dan de warmtepompen rustig kunnen leveren.",checks:["Warmtevraag blijft hoog","Warmtepompen leveren maximaal rustig vermogen","CV stopt zodra ondersteuning niet meer nodig is"]},runtime_lead:{label:"Draaiurenbalans",summary:"De warmtepompen zijn gelijkwaardig. Het systeem kiest de pomp die het beste past bij draaiuren, beschikbaarheid en wachttijd.",checks:["Draaiuren vergeleken","Warmtepomp beschikbaar","Wachttijd vrij"]},oil_return_hold:{label:"Compressor beschermen",summary:"De warmtepomp blijft kort doorlopen om de compressor netjes te beschermen.",checks:["Minimale looptijd actief","Stop wordt uitgesteld","Korte cyclus voorkomen"]},single_topology:{label:"E\xE9n warmtepomp aanwezig",summary:"Er is maar \xE9\xE9n warmtepomp beschikbaar. Keuzes met twee warmtepompen zijn dan niet van toepassing.",checks:["Opstelling gecontroleerd","Geen tweede warmtepomp","Keuze blijft beperkt"]},demand_decreased:{label:"Warmtevraag nam af",summary:"De vraag zakte terug. Minder vermogen is genoeg om de woning op temperatuur te houden.",checks:["Vraag is lager","Stopvertraging verlopen","Andere warmtepomp blijft actief"]},min_rest_active:{label:"Minimum rusttijd actief",summary:"De warmtepomp wacht nog even om korte starts en onnodige belasting te voorkomen.",checks:["Vorige stop is recent","Rusttijd loopt","Start volgt als vraag blijft"]},start_stop_rate_high:{label:"Veel starts/stops",summary:"De warmtepomp start vaker dan wenselijk. Dat is niet direct een storing, maar wel nuttig om te bekijken.",checks:["Startteller hoog","Geen acute storing","Nuttig voor support"]},sticky_protection:{label:"Pompbescherming",summary:"De pomp draait kort zodat hij na lange stilstand niet vast gaat zitten. Dit is geen verwarmings- of koelvraag.",checks:["Geen comfortvraag","Dagelijkse bescherming actief","Alleen korte pomprun"]},frost_protection:{label:"Vorstbescherming",summary:"Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",checks:["Geen comfortvraag nodig","Vorstrisico bewaakt","Water blijft circuleren"]},flow_preflow:{label:"Voorloop actief",summary:"De pomp bouwt eerst waterflow op voordat de warmtepomp mag starten.",checks:["Waterflow opbouwen","Warmtepomp nog niet vrij","Start volgt automatisch"]},flow_postflow:{label:"Naloop actief",summary:"De pomp blijft kort nadraaien zodat warmte netjes uit het systeem wordt afgevoerd.",checks:["Warmtepomp stopt","Pomp draait kort door","Daarna standby"]},flow_too_low:{label:"Waterflow blijft te laag",summary:"De normale voorlooptijd is verstreken, maar de waterflow is nog niet voldoende voor een veilige start.",checks:["Voorlooptijd verstreken","Start blijft geblokkeerd","Flow wordt opnieuw beoordeeld"]},startup_inhibit:{label:"Wachttijd na herstart",summary:"Na een herstart blijft de compressor kort uit om een te snelle herstart te voorkomen.",checks:["Comfortvraag is aanwezig","Compressor wacht nog","Start volgt automatisch"]},capacity_cap:{label:"Ingesteld koelmaximum",summary:"Er is koelvraag. Het systeem blijft binnen het maximale koelniveau dat in de software is ingesteld.",checks:["Koelvraag actief","Softwaremaximum actief","Dauwpunt blijft bewaakt"]},falling_gap:{label:"Dauwpuntmarge daalt",summary:"De marge tot het dauwpunt wordt kleiner. Het systeem grijpt vroeg in om condens te voorkomen.",checks:["Marge daalt","Aanvoer blijft veilig","Koeling blijft voorzichtig actief"]},projected_floor:{label:"Aanvoer nadert veilige ondergrens",summary:"De aanvoer dreigt te koud te worden. Het systeem verlaagt de koeling preventief.",checks:["Aanvoer voorspeld","Veilige grens leidend","Geen storing"]},simmer:{label:"Koeling rustig bijgesteld",summary:"De koeling blijft op een laag niveau zodat de temperatuur rustig richting setpoint kan bewegen.",checks:["Lage koelvraag","Geen abrupte stop","Rustige regeling"]},buffer_stop:{label:"Water al koud genoeg",summary:"Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.",checks:["Koelvraag blijft actief","Water is al koud genoeg","Start volgt automatisch"]},dew_stop:{label:"Dauwpuntstop",summary:"De warmtepomp stopt kort omdat verder koelen te dicht bij het dauwpunt zou komen.",checks:["Condensrisico voorkomen","Koelvraag blijft bestaan","Herstart na veilige marge"]},cooling_limiter:{label:"Softwaremaximum actief",summary:"Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum en blijft de veiligheidsmarges bewaken.",checks:["Koelvraag actief","Softwaremaximum actief","Marge blijft bewaakt"]},sensor_fallback:{label:"Sensorwaarde onzeker",summary:"Een meting is tijdelijk minder zeker. Het systeem kiest daarom voorzichtig gedrag.",checks:["Metingen gecontroleerd","Veilige keuze voorrang","Herstel zodra data stabiel is"]},restart_wait:{label:"Koeling wacht op veilige herstart",summary:"De koelvraag is nog aanwezig. Na de koelstop wacht het systeem tot de veilige marge voldoende is hersteld.",checks:["Herstart wacht bewust","Marge moet stabiel blijven","Daarna opnieuw beoordelen"]},level1_hold:{label:"Voorzichtig blijven koelen",summary:"De koeling blijft nog even laag totdat duidelijk is dat de veilige marge terug is.",checks:["Even wachten met opschalen","Geen snelle sprong omhoog","Comfortvraag blijft bewaakt"]},room_cap:{label:"Kamervraag begrenst",summary:"De kamer vraagt koeling, maar niet genoeg om harder te gaan koelen.",checks:["Kamer koelt richting setpoint","Vraag blijft beperkt","Rustige regeling"]},oil_return_recovery:{label:"Compressorherstel",summary:"Het systeem geeft compressorherstel tijdelijk voorrang en blijft de veiligheid bewaken.",checks:["Compressorprotectie actief","Gecontroleerd herstel","Veiligheid blijft bewaakt"]}}),p1=Object.freeze({label:"Keuze van het systeem",summary:"Keuze van het systeem",checks:[]});function qr(e){return d1[e]||p1}function fh(e){return qr(e).label}function ch(e,t=!1){let r=Number(e);return Number.isFinite(r)&&(r>0||t&&r===0)?`CM${r}`:""}function Yi(e,t){let r=ch(e),n=ch(t,!0);return r&&n&&r!==n?`${r} \u2192 ${n}`:""}function m1(e,t){let r=String(e?.event_type||""),n=Number(e?.cm)||0,a=Number(e?.value_a);return r==="boiler_assist_start"?Yi(t||2,n===3?3:n):r==="boiler_assist_stop"?Yi(t===3?3:t,n>0?n:2):r==="flow_hold_start"&&n===1?Yi(t,1):r==="flow_hold_clear"&&n===1&&Number.isFinite(a)?Yi(1,a):""}function g1(e){let t=String(e?.event_type||""),r=Number(e?.cm)||0,n=Number(e?.value_a);return t==="flow_hold_clear"&&r===1&&Number.isFinite(n)?n:t==="frost_protection_clear"?0:r}function hh(e){let t=String(e?.modeTransitionLabel||"").trim();if(t)return t;let r=String(e?.modeLabel||"").trim();return r.includes("\u2192")?r:""}function mu(){let e=ts(j("coolingLimiterReasonCode",""));return{requestActive:C("coolingRequestActive"),permitted:v("coolingPermitted")?C("coolingPermitted"):!0,reasonCode:e||"inactive",rawDemand:Po("coolingDemandRaw",0,"","\u2014"),limitedDemand:Po("coolingLimitedDemand",0,"","\u2014"),allowedMax:Po("coolingLimiterAllowedMax",0,"","\u2014"),dewPoint:Po("coolingDewPointSelected",1,"\xB0C","\u2014"),safeSupply:Po("coolingEffectiveMinSupplyTemp",1,"\xB0C","\u2014"),guardMode:j("coolingGuardMode","Dauwpuntbewaking"),blockReason:j("coolingBlockReason","Ready")}}function bh(e){return{event:"Moment",span:"Periode",aggregate:"Samenvatting"}[e]||"Record"}function kr(e,t="neutral",r=""){let n=r?de(r,"oq-working-pill-icon"):"";return`<span class="oq-working-pill oq-working-pill--${s(t)}">${n}<span>${s(e)}</span></span>`}function f1(e){let t=e?.reasonCode||e?.primaryReason;return ph(e?.modeLabel)==="cm98"&&t==="frost_protection"}function yu(e){return f1(e)?'<span class="oq-working-mode-badge" aria-label="Technische mode CM98">CM98</span>':""}function wh(e){let t=e?.reasonCode||e?.primaryReason||"keep_current",r=e?.source||"HP1 + HP2";if(t==="better_heat")return{title:"Keuze van het systeem",verdict:"Twee warmtepompen actief",summary:"Omdat de warmtevraag hoog blijft, leveren twee warmtepompen rustiger vermogen dan \xE9\xE9n warmtepomp op hoge belasting.",rows:[{option:"E\xE9n warmtepomp",result:"Te weinig reserve",code:"better_heat",detail:"De vraag bleef langer hoog dan \xE9\xE9n warmtepomp rustig kan dragen.",tone:"muted"},{option:"Andere losse pomp",result:"Geen voordeel",code:"hold_active",detail:"Wisselen naar de andere pomp zou geen rustiger gedrag geven.",tone:"muted"},{option:"Twee warmtepompen",result:"Gekozen",code:"better_heat",detail:"Samen leveren ze meer reserve en minder belasting per pomp.",tone:"selected"}]};if(t==="demand_decreased"||t==="less_power")return{title:"Keuze van het systeem",verdict:"E\xE9n warmtepomp is genoeg",summary:"De warmtevraag is gezakt. E\xE9n warmtepomp kan de resterende warmte rustiger en zuiniger leveren.",rows:[{option:"Twee warmtepompen",result:"Niet meer nodig",code:"less_power",detail:"Samen leveren ze meer vermogen dan nu nodig is.",tone:"muted"},{option:r,result:"Blijft actief",code:"less_power",detail:"E\xE9n warmtepomp dekt de lagere vraag rustiger.",tone:"selected"}]};if(t==="runtime_lead")return{title:"Keuze van het systeem",verdict:`${r} gestart`,summary:"De warmtepompen zijn gelijkwaardig. De keuze volgt uit draaiuren, beschikbaarheid en wachttijden.",rows:[{option:"HP1",result:r==="HP1"?"Gekozen":"Niet nu",code:"runtime_lead",detail:"Past het beste bij de actuele draaiurenbalans.",tone:r==="HP1"?"selected":"muted"},{option:"HP2",result:r==="HP2"?"Gekozen":"Niet nu",code:"runtime_lead",detail:"Gelijkwaardige pomp, maar nu minder gunstig in balans of wachttijd.",tone:r==="HP2"?"selected":"muted"}]};if(["min_rest_active","no_candidate","candidate_in_rest","candidate_in_defrost","candidate_unavailable"].includes(t))return{title:"Startcontrole",verdict:"Start uitgesteld",summary:qr(t).summary,rows:[{option:r,result:"Wacht nog",code:t,detail:qr(t).summary,tone:"limited"},{option:"Opnieuw beoordelen",result:"Straks",code:"hold_active",detail:"Het systeem probeert opnieuw zodra starten verstandig is.",tone:"muted"}]};if(["flow_preflow","flow_postflow","flow_too_low"].includes(t)){let a=(e?.realEventType||e?.rawDecisionEvent?.event_type||"")==="flow_hold_clear",i=t==="flow_postflow";if(a)return{title:i?"Waterflow afronden":"Waterflow bevestigd",verdict:i?"Naloop klaar":"Start vrijgegeven",summary:i?"De pompnaloop is afgerond. Het systeem kan terug naar standby.":"De waterflow is voldoende. De regelaar kan doorgaan met de volgende stap.",rows:[{option:"Waterflow",result:"Voldoende",code:t,detail:"De gemeten circulatie is vrijgegeven voor de volgende stap.",tone:"selected"},{option:"Warmtepomp",result:i?"Gestopt":"Vrijgegeven",code:t,detail:i?"De warmtepomp is gestopt; de naloop is nu ook klaar.":"De compressor mag nu volgens de normale regeling starten.",tone:"selected"},{option:"Regelaar",result:"Gaat verder",code:"keep_current",detail:"De controller vervolgt automatisch de normale regeling.",tone:"muted"}]};let l=t==="flow_too_low";return{title:"Waterflow eerst",verdict:i?"Naloop actief":l?"Start geblokkeerd":"Voorloop actief",summary:qr(t).summary,rows:[{option:"Waterflow",result:l?"Blijft te laag":i?"Wordt afgerond":"Wordt opgebouwd",code:t,detail:"De pomp zorgt voor circulatie voordat de volgende stap vrij is.",tone:l?"limited":"selected"},{option:"Warmtepomp",result:i?"Gestopt":l?"Start geblokkeerd":"Wacht op voorloop",code:t,detail:"De compressor start pas als de flowconditie veilig is.",tone:l?"limited":"muted"},{option:"Regelaar",result:l?"Blijft controleren":"Controleert automatisch",code:"keep_current",detail:"De controller beoordeelt de waterflow automatisch opnieuw.",tone:"muted"}]}}if(t==="defrost_hold"||t==="defrost_boost")return{title:"Bescherming",verdict:"Ontdooien krijgt voorrang",summary:"Tijdens ontdooien houdt het systeem de regeling rustig, zodat de warmtepomp vanzelf kan herstellen.",rows:[{option:"Actieve warmtepomp",result:"Rustig laten herstellen",code:"defrost_hold",detail:"Niet wisselen zolang ontdooien of herstel actief is.",tone:"selected"},{option:"Extra bron",result:t==="defrost_boost"?"Helpt mee":"Stand-by",code:t,detail:"Alleen inzetten als comfort of vermogen daarom vraagt.",tone:t==="defrost_boost"?"selected":"muted"}]};if(t==="boiler_assist")return{title:"Bronkeuze",verdict:"CV ondersteunt tijdelijk",summary:"De warmtepompen blijven de basis leveren. CV vult alleen aan zolang extra vermogen nodig is.",rows:[{option:"Alleen warmtepompen",result:"Te weinig reserve",code:"better_heat",detail:"De vraag bleef hoger dan de warmtepompen rustig konden leveren.",tone:"muted"},{option:"CV-ketel",result:"Tijdelijk bij",code:"boiler_assist",detail:"CV levert extra vermogen en stopt zodra de vraag zakt.",tone:"selected"},{option:"Na piek",result:"Terug naar HP",code:"less_power",detail:"De warmtepompen nemen het weer over als ondersteuning niet meer nodig is.",tone:"muted"}]};if(t==="sticky_protection")return{title:"Pompbescherming",verdict:"Korte pomprun",summary:"Alleen de pomp draait kort. De warmtepompen blijven uit omdat er geen verwarmings- of koelvraag is.",rows:[{option:"Verwarmen",result:"Niet nodig",code:"keep_current",detail:"Geen warmtevraag vanuit kamer of regeling.",tone:"muted"},{option:"Koelen",result:"Niet nodig",code:"keep_current",detail:"Geen koelvraag vanuit de kamer.",tone:"muted"},{option:"Pomp",result:"Kort aan",code:"sticky_protection",detail:"De dagelijkse bescherming laat de pomp ongeveer 1 minuut draaien.",tone:"selected"}]};if(["capacity_cap","room_cap","cooling_limiter"].includes(t)){let n=mu();return{title:"Koelregeling",verdict:`Maximaal ingesteld niveau ${n.allowedMax}`,summary:"De koelvraag wordt uitgevoerd binnen het ingestelde maximum. Dit is normale regeling, geen aandachtspunt.",rows:[{option:"Gevraagd koelniveau",result:n.rawDemand,code:"coolingDemandRaw",detail:"Wat de kamer vraagt voordat het ingestelde maximum meetelt.",tone:"muted"},{option:"Ingesteld maximum",result:n.allowedMax,code:t,detail:"Het hoogste niveau dat de software nu toestaat.",tone:"selected"},{option:"Uitgestuurd niveau",result:n.limitedDemand,code:"coolingLimitedDemand",detail:"Het niveau dat de warmtepomp op dit moment krijgt.",tone:"normal"}]}}if(t==="buffer_stop")return{title:"Koelregeling",verdict:"Water al koud genoeg",summary:"Er is koelvraag, maar de actuele watertemperatuur vraagt nu geen extra koeling.",rows:[{option:"Koelvraag",result:"Blijft actief",code:"coolingDemandRaw",detail:"De kamer blijft om koeling vragen.",tone:"muted"},{option:"Watertemperatuur",result:"Koud genoeg",code:"buffer_stop",detail:"De aanvoer is al koud genoeg voor dit moment.",tone:"selected"},{option:"Warmtepomp",result:"Wacht",code:"keep_current",detail:"De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.",tone:"muted"}]};if(["falling_gap","projected_floor","dew_stop","restart_wait","level1_hold","oil_return_recovery","sensor_fallback"].includes(t)){let n=mu();return{title:"Koelbewaking",verdict:n.permitted?`Maximaal koelniveau ${n.allowedMax}`:"Koeling tijdelijk gepauzeerd",summary:"De koelvraag blijft actief, maar dauwpunt, aanvoer of compressorconditie vraagt tijdelijk voorzichtig gedrag.",rows:[{option:"Gevraagd koelniveau",result:n.rawDemand,code:"coolingDemandRaw",detail:"Wat de kamer vraagt voordat bewaking meetelt.",tone:"muted"},{option:"Maximaal veilig",result:n.allowedMax,code:t,detail:"Het hoogste niveau dat nu veilig is met de huidige dauwpuntmarge.",tone:"selected"},{option:"Uitgestuurd niveau",result:n.limitedDemand,code:"coolingLimitedDemand",detail:"Het niveau dat de warmtepomp op dit moment krijgt.",tone:"limited"}]}}return null}function yh(e){return e?`
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
    `:""}function h1(e=Date.now()){let t=vu().filter(c=>["startup_inhibit_start","startup_inhibit_refresh","startup_inhibit_clear"].includes(String(c?.event_type||""))).sort(Su),r=t[t.length-1];if(!r||!["startup_inhibit_start","startup_inhibit_refresh"].includes(String(r.event_type)))return null;let n=uo(r),a=Math.max(0,Number(r?.value_b)||0),i=Number.isFinite(n)?Math.max(0,(e-n)/1e3):0,l=Math.max(0,Math.ceil(a-i));return a>0&&l<=0?null:{event:r,subject:String(r?.subject||"SYSTEM").toUpperCase(),targetMode:Number(r?.value_a)||0,remainingS:l,remainingLabel:l>0?`Nog ${Math.max(1,Math.ceil(l/60))} min`:"Wachttijd actief"}}function vh(e){let t=o1(e),r=j("controlModeLabel","\u2014"),n=ph(r),a=n?n.toUpperCase():r,i=e.find(F=>F.title==="HP1")||e[0],l=e.find(F=>F.title==="HP2"),c=du(i),u=l?du(l):!1,p=c&&u,g=t.defrostActive,w=mu(),y=t.coolingProtection,h=t.coolingCapped,m=t.coolingMode||t.coolingRequest,d=v("stickyActive")&&C("stickyActive"),b=t.boilerActive,S=h1(),q="E\xE9n warmtepomp actief",E="De actuele vraag past binnen \xE9\xE9n warmtepomp. De andere warmtepomp blijft beschikbaar als extra capaciteit nodig is.",k="Een extra warmtepomp schakelt bij zodra de vraag lang genoeg hoog blijft en alle wachttijden vrij zijn.",$="normal",_="keep_current",P="Live";if(n==="cm98")q="Vorstbescherming actief",E="Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",k="Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",$="limited",_="frost_protection",P="Bescherming actief";else if(d)q="Pompbescherming actief",E="Er is geen warmte- of koelvraag. De pomp draait kort om vastzitten na lange stilstand te voorkomen.",k="Na ongeveer 1 minuut stopt de pomp en blijft het systeem standby tot er comfortvraag of bescherming nodig is.",_="sticky_protection",P="Dagelijkse run";else if(S){let F=S.targetMode===1;q=F?"Koeling wacht na herstart":"Verwarming wacht na herstart",E=F?"Er is koelvraag, maar de compressor blijft na de herstart nog kort uit om een te snelle herstart te voorkomen.":"Er is warmtevraag, maar de compressor blijft na de herstart nog kort uit om een te snelle herstart te voorkomen.",k=F?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.",_="startup_inhibit",P=S.remainingLabel||"Wachttijd actief"}else if(w.reasonCode==="buffer_stop")q="Koeling wacht: water al koud genoeg",E="Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.",k="De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.",_="buffer_stop",P="Koelvraag actief";else if(y){let F=w.reasonCode&&w.reasonCode!=="inactive"?w.reasonCode:"soft_guard",A=F==="restart_wait";q=A?"Koeling wacht op veilige herstart":w.permitted?"Koeling tijdelijk beperkt":"Koeling tijdelijk gepauzeerd",E=A?"De koelvraag is nog aanwezig. Na de koelstop wacht het systeem tot de veilige marge voldoende is hersteld.":`Er is koelvraag, maar het systeem koelt nu maximaal op niveau ${w.allowedMax} om condens te voorkomen.`,k=A?"De warmtepomp start automatisch opnieuw zodra de veilige marge voldoende en stabiel is.":"Koeling neemt stap voor stap toe zodra de dauwpuntmarge veilig en stabiel is.",$="limited",_=F,P="Koelvraag actief"}else if(h){let F=w.allowedMax&&w.allowedMax!=="\u2014"?`niveau ${w.allowedMax}`:"het ingestelde maximum",A=["capacity_cap","room_cap","cooling_limiter"].includes(w.reasonCode)?w.reasonCode:"capacity_cap";q="Koeling actief op ingesteld maximum",E=`Er is koelvraag. Het systeem koelt maximaal op ${F}, zoals ingesteld in de software.`,k="Koeling blijft binnen dit maximum. Dauwpunt, aanvoer en waterflow worden op de achtergrond bewaakt.",_=A,P="Koelvraag actief"}else m?(q="Koeling actief",E="Er is koelvraag en dauwpuntbewaking geeft koeling vrij. Het systeem blijft marge en waterflow bewaken.",k="Koeling blijft actief tot de kamertemperatuur richting setpoint zakt of bescherming ingrijpt.",_="keep_current",P="Koelen"):b?(q="CV-ketel ondersteunt",E="De CV-ketel helpt tijdelijk omdat de warmtevraag meer vermogen vraagt dan de warmtepompen nu leveren.",k="De CV-ketel stopt zodra de warmtepompen de vraag weer zelf kunnen dragen.",$="limited",_="boiler_assist",P="Ondersteuning actief"):g?(q="Ontdooien actief",E="Een warmtepomp ontdooit tijdelijk. Het systeem houdt de keuze rustig zodat het ontdooien vanzelf kan afronden.",k="De warmtepomp hervat automatisch zodra het ontdooien klaar is.",$="limited",_="defrost_hold",P="Tijdelijk"):p?(q="Duo-bedrijf actief",E="Beide warmtepompen draaien omdat de warmtevraag hoog blijft. Dit is normaal winterbedrijf.",k="E\xE9n warmtepomp stopt zodra de warmtevraag voldoende afneemt of single-bedrijf weer effici\xEBnter is.",_="better_heat",P="Actief"):!c&&!u&&(q="Geen warmtepomp actief",E="Er is nu geen warmtepompactie nodig, of het systeem wacht door bescherming of rusttijd.",k="Bij nieuwe vraag kiest het systeem opnieuw de best passende warmtepomp.",_="keep_current",P="Stand-by");let B=S&&["HP1","BOTH"].includes(S.subject),H=S&&["HP2","BOTH"].includes(S.subject);return{title:q,copy:E,expectation:k,severity:$,primaryReason:_,sinceLabel:P,modeLabel:a,strategyLabel:r1(),reasonLabel:fh(_),hp1Running:c,hp2Running:u,hp2Available:!!l,hp1Status:c?"Actief":B?"Wacht":"Beschikbaar",hp2Status:l?u?"Actief":H?"Wacht":"Beschikbaar":"Niet aanwezig",cvStatus:b?"Actief":"Uit",outsideTemp:Po("outsideTempSelected",1,"\xB0C","\u2014"),supplyTemp:Po("supplyTemp",1,"\xB0C","\u2014"),flow:Po("flowSelected",0,"L/h","\u2014"),hp1Starts:ah("hp1CompressorStarts24h","\u2014"),hp2Starts:ah("hp2CompressorStarts24h",l?"\u2014":"n.v.t."),hp1Hours:nh("hp1RuntimeHours","\u2014"),hp2Hours:l?nh("hp2RuntimeHours","\u2014"):"n.v.t.",cooling:w,coolingProtection:y,startupInhibit:S,coolingCapped:h}}function vu(){let e=o.decisionLog;return e?.ok&&Array.isArray(e.events)?e.events:[]}function uo(e){let t=Number(e?.epoch_s);if(Number.isFinite(t)&&t>0)return t*1e3;let r=Number(o.decisionLog?.meta?.boot_epoch_s),n=Number(e?.uptime_s);return Number.isFinite(r)&&r>0&&Number.isFinite(n)&&n>=0?(r+n)*1e3:Number.NaN}function es(e){let t=uo(e);if(Number.isFinite(t))return t/1e3;let r=Number(e?.uptime_s);return Number.isFinite(r)?r:Number(e?.seq)||0}function Su(e,t){let r=es(e)-es(t);return r!==0?r:(Number(e?.seq)||0)-(Number(t?.seq)||0)}function Sh(e,t=Date.now()){let r=uo(e);if(Number.isFinite(r))return Math.max(0,Math.round((t-r)/6e4));let n=Number(o.decisionLog?.meta?.uptime_s),a=Number(e?.uptime_s);return Number.isFinite(n)&&Number.isFinite(a)?Math.max(0,Math.round((n-a)/60)):Number.NaN}function uh(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function Sr(e,t=Date.now(),r="auto"){if(!Number.isFinite(e))return"Onbekend";let n=new Date(e),a=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});if(r==="time")return a;if(r==="weekday")return`${n.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${a}`;let i=new Date(t),l=new Date(i);return l.setDate(l.getDate()-1),uh(n,i)?a:uh(n,l)?`gisteren ${a}`:`${n.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${a}`}function Ji(e,t=mt(),r=Date.now()){let n=Math.max(0,Math.min(1440,Number(e)||0)),a=Er(t,r);return a.start+n/1440*(a.end-a.start)}function b1(e,t=mt(),r=Date.now()){let n=uo(e),a=(u,p,g)=>!Number.isFinite(u)||u<p||u>g?Number.NaN:(u-p)/Math.max(1,g-p)*1440;if(Number.isFinite(n)){let u=Er(t,r);return a(n,u.start,u.end)}let i=Sh(e,r);if(!Number.isFinite(i))return Number.NaN;let l=No().find(u=>u.id===t);if(l?.calendarDay||l?.custom)return Number.NaN;let c=hu(t,r);return i<=c?1440-i/c*1440:Number.NaN}function w1(e,t=mt(),r=Date.now()){let n=uo(e);if(!Number.isFinite(n)){let a=Sh(e,r);return Number.isFinite(a)?A1(a):"Onbekend"}return t==="week"||t==="last48"||t==="last3d"||t==="custom"?Sr(n,r,"weekday"):t.startsWith("last")?Sr(n,r,"auto"):Sr(n,r,"time")}function qh(e){let t=Math.max(0,Math.round(Number(e)||0));if(!t)return"";if(t<60)return`${t}s`;if(t<3600)return`${Math.round(t/60)} min`;let r=Math.floor(t/3600),n=Math.round(t%3600/60);return n?`${r}u ${n}m`:`${r}u`}function qu(e){let t=String(e||"").toUpperCase();return{SYSTEM:"Systeem",HP1:"HP1",HP2:"HP2",BOTH:"HP1 + HP2",CV:"CV-ketel",COOLING:"Koeling",PUMP:"Pomp",CONTROLLER:"Regelaar"}[t]||"Systeem"}function pt(e,t){let r=String(e||"").toUpperCase(),n=qu(e);return r!=="HP1"&&r!=="HP2"&&r!=="BOTH"?n:Number(t)===5?`${n} (koelen)`:Number(t)>0?`${n} (verwarmen)`:n}function y1(e){let t=String(e?._oq_active_cooling_subject||"").toUpperCase();return pt(t==="HP1"||t==="HP2"||t==="BOTH"?t:e?.subject,5)}function ku(e){let t=String(e?.subject||"").toUpperCase();return t==="HP1"||t==="HP2"?t:""}function v1(e){let t=String(e?.event_type||""),r=qu(e?.subject),n=String(e?.reason||"unknown"),a=Number(e?._oq_context_cm??e?.cm)===5,i=e?._oq_active_cooling_source||"De warmtepomp",l=e?._oq_active_heating_source||"De warmtepomp",c=String(e?._oq_cooling_stop_reason||(n==="dew_stop"?"dew_stop":"")),u=["less_power","demand_decreased","cooling_request_cleared"].includes(n),p=n==="heating_request_cleared",g=!!e?._oq_cooling_runtime_hold,w=!!e?._oq_heating_runtime_hold,y=fu(n),h=["soft_guard","sensor_fallback","no_candidate","flow_preflow"].includes(n),m=qr(n),d=n==="flow_preflow",b=n==="flow_too_low",S={title:"Keuze van het systeem",summary:"De regelaar heeft een keuze vastgelegd.",detail:m.summary,next:"Het systeem beoordeelt opnieuw zodra vraag, marge of beschikbaarheid verandert."};return{source_start:{title:a?`Koeling gestart (${r})`:`${r} gestart`,reasonLabel:a?"Koeling gestart":"",reasonSummary:a?"Koeling is vrijgegeven en de gekozen warmtepomp start met koelen.":"",summary:a?`${r} is gestart om te koelen. Dauwpunt, waterflow en aanvoertemperatuur blijven bewaakt.`:`${r} is gekozen op basis van beschikbaarheid, wachttijd en draaiurenbalans.`,detail:a?"De koelvraag is vrijgegeven. HP1 en HP2 zijn gelijkwaardig; de regelaar kiest de beschikbare bron die nu het beste past.":"HP1 en HP2 zijn gelijkwaardig. De regelaar kiest de beschikbare bron die op dat moment het beste past.",next:a?"Koeling blijft actief zolang er koelvraag is en de veilige marges vrij blijven.":"Als de vraag hoog blijft, beoordeelt het systeem of extra vermogen nodig is."},source_stop:{title:a?c==="dew_stop"?`${r} gestopt door dauwpunt`:u?"Koeling gestopt: geen koelvraag":`Koeling afgerond (${r})`:p?"Verwarming gestopt: geen warmtevraag":n==="less_power"?"E\xE9n warmtepomp stopt":`${r} gestopt`,reasonLabel:a?c==="dew_stop"?"Dauwpuntstop":u?"Geen koelvraag":"Koeling afgerond":p?"Geen warmtevraag":n==="less_power"?"E\xE9n warmtepomp is genoeg":"",reasonSummary:a?c==="dew_stop"?"De warmtepomp stopte omdat de dauwpuntbewaking koelen pauzeerde.":u?"De koelvraag is weggevallen of voldoende afgenomen.":"De koelactie is afgerond. Een korte pompnaloop kan daarna normaal zijn.":p?"De warmtevraag is weggevallen. Een korte pompnaloop kan daarna normaal zijn.":n==="less_power"?"De warmtevraag is afgenomen; \xE9\xE9n warmtepomp kan de resterende vraag dragen.":"",summary:a?c==="dew_stop"?`${r} stopte omdat verder koelen te dicht bij het dauwpunt kwam.`:u?"Er is geen koelvraag meer; de warmtepomp stopt met koelen.":`${r} is klaar met koelen.`:p?"Er is geen warmtevraag meer; de warmtepomp stopt met verwarmen.":n==="less_power"?"De vraag is lager. E\xE9n warmtepomp kan de resterende warmtevraag rustig dragen.":`${r} is gestopt omdat minder vermogen voldoende is of bescherming voorrang kreeg.`,detail:a?c==="dew_stop"?"Dit is beschermingsgedrag. Het systeem voorkomt condens en kan later opnieuw koelen zodra de marge veilig is.":"De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden.":p?"De regeling vraagt geen warmte meer. De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden.":"De regelaar voorkomt onnodig doordraaien en houdt tegelijk wachttijden en bescherming in de gaten.",next:a?c==="dew_stop"?"Bij blijvende koelvraag start koeling opnieuw zodra de dauwpuntmarge veilig genoeg is.":"Het systeem blijft standby of rondt de naloop af totdat er opnieuw koelvraag is.":p?"Het systeem blijft standby totdat er opnieuw warmtevraag is.":"Bij stijgende vraag kan dezelfde of de andere warmtepomp opnieuw starten."},topology_change:{title:a?e?.to==="idle"?n==="cooling_request_cleared"?"Koeling gestopt: geen koelvraag":n==="dew_stop"?"Koeling gestopt door dauwpunt":"Koeling gestopt":"Koeling actief":e?.to==="idle"&&p?"Verwarming gestopt: geen warmtevraag":e?.to==="duo"?"Twee warmtepompen verwarmen":"E\xE9n warmtepomp verwarmt",reasonLabel:a?e?.to==="idle"?n==="cooling_request_cleared"?"Geen koelvraag":n==="dew_stop"?"Dauwpuntstop":"Koeling gestopt":"Koeling actief":e?.to==="idle"&&p?"Geen warmtevraag":"",reasonSummary:a?e?.to==="idle"?n==="cooling_request_cleared"?"De koelvraag is weggevallen. Eventuele naloop is normaal.":n==="dew_stop"?"Koeling pauzeert om condens te voorkomen. Herstart kan zodra de marge veilig is.":"Er is geen warmtepomp meer actief voor koeling. Eventuele naloop is normaal.":"Koeling is actief. Het systeem bewaakt tegelijk de veilige marges.":e?.to==="idle"&&p?"De warmtevraag is weggevallen. Eventuele naloop is normaal.":"",summary:a?e?.to==="idle"?n==="cooling_request_cleared"?"De koelvraag is weg. Er is geen warmtepomp meer actief voor koeling.":n==="dew_stop"?"Koeling stopt tijdelijk omdat verder koelen te dicht bij het dauwpunt komt.":"Er is geen warmtepomp meer actief voor koeling.":`${r} koelt. Het systeem blijft dauwpunt, waterflow en aanvoertemperatuur bewaken.`:e?.to==="duo"?"Samen leveren de warmtepompen rustiger vermogen dan \xE9\xE9n warmtepomp op hoge belasting.":e?.to==="idle"&&p?"Er is geen warmtepomp meer actief voor verwarmen.":"De vraag is lager. E\xE9n warmtepomp kan de resterende vraag weer rustig dragen.",detail:a?"Koelen gebruikt dezelfde bronkeuze-logica als verwarmen: de warmtepompen zijn gelijkwaardig en de controller kiest de rustigste beschikbare bron.":"De duo-keuze gaat niet over hoofd- en hulppomp. De warmtepompen zijn gelijkwaardig; het systeem kiest de rustigste combinatie.",next:a?"Koeling blijft actief zolang er koelvraag is en bescherming geen beperking vraagt.":e?.to==="duo"?"Duo-bedrijf blijft actief zolang de extra reserve nuttig is.":e?.to==="idle"&&p?"Het systeem blijft standby totdat er opnieuw warmtevraag is.":"De tweede warmtepomp blijft beschikbaar als de vraag opnieuw stijgt."},decision_hold:{title:n==="defrost_hold"?"Keuze kort vastgehouden":"Start of wissel uitgesteld",summary:n==="defrost_hold"?"De regelaar laat ontdooien rustig afronden voordat hij opnieuw schakelt.":"De regelaar wacht bewust even om korte cycli en onrustig gedrag te voorkomen.",detail:m.summary,next:"Na de wachttijd beoordeelt het systeem opnieuw wat de rustigste keuze is."},decision_blocked:{title:n==="flow_too_low"?"Start geblokkeerd: waterflow te laag":r==="CV-ketel"?"CV-ketel niet vrijgegeven":"Actie geblokkeerd",reasonLabel:n==="flow_too_low"?"Waterflow blijft te laag":"",reasonSummary:n==="flow_too_low"?"De normale voorlooptijd is verstreken. De warmtepomp blijft veilig uit totdat voldoende water circuleert.":"",summary:n==="flow_too_low"?"De pomp draait, maar na de normale voorlooptijd is nog niet genoeg waterflow gemeten.":r==="CV-ketel"?"Er was een mogelijke hulpvraag, maar de CV-ketel was niet vrijgegeven.":"De gevraagde actie is tijdelijk niet toegestaan door een voorwaarde of bescherming.",detail:n==="flow_too_low"?"Dit is pas een blokkade nadat de normale opbouwtijd is verstreken; een korte lage flow direct na het starten hoort hier niet bij.":m.summary,next:n==="flow_too_low"?"De regelaar blijft de waterflow volgen en geeft de start automatisch vrij zodra de circulatie voldoende en stabiel is.":"De regelaar probeert opnieuw zodra de voorwaarden vrij zijn.",checks:n==="flow_too_low"?["Voorlooptijd verstreken","Warmtepomp blijft veilig uit","Waterflow wordt opnieuw beoordeeld"]:null},candidate_blocked:{title:`${r} wacht nog`,summary:n==="candidate_in_rest"?`${r} zit nog in rusttijd na een vorige stop.`:`${r} is nu nog geen veilige kandidaat om te starten.`,detail:m.summary,next:"De regelaar probeert opnieuw zodra de voorwaarde vrij is en de vraag blijft bestaan."},flow_hold_start:{title:n==="flow_postflow"?g?"Koeling loopt nog kort door":w?"Verwarming loopt nog kort door":a?"Naloop na koelen actief":"Naloop actief":b?"Start wacht op voldoende waterflow":a?"Voorloop voor koelen":"Voorloop voor start",reasonLabel:n==="flow_postflow"?g||w?"Minimale looptijd":a?"Naloop na koelen":"Naloop actief":b?"Waterflow blijft te laag":a?"Voorloop voor koelen":"Voorloop actief",reasonSummary:a?n==="flow_postflow"?g?`${i} staat nog op Cooling terwijl het systeem al in CM1 naloop zit.`:"De pomp draait kort na om het koelbedrijf netjes af te ronden.":"De pomp draait eerst kort zodat de flow stabiel is voordat de warmtepomp met koelen start.":w?`${l} verwarmt nog terwijl de regelaar al in CM1 naloop zit.`:"",summary:a?n==="flow_postflow"?g?`${i} koelt nog kort door door minimale looptijd; het systeem zit al in naloop.`:"De pomp draait kort na zodat het koelbedrijf netjes wordt afgerond.":b?"De voorlooptijd is verstreken, maar de waterflow is nog niet voldoende om veilig met koelen te starten.":"De pomp draait eerst kort voor. Daarna mag de warmtepomp met koelen starten.":b?"De voorlooptijd is verstreken, maar de waterflow is nog niet voldoende om de warmtepomp veilig te starten.":d?"De pomp draait eerst kort voor zodat de flow stabiel is voordat de warmtepomp start.":w?`${l} verwarmt nog kort door door minimale looptijd; het systeem zit al in naloop.`:m.summary,detail:a?g?"De controller vraagt geen nieuwe koelactie meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop.":"Dit is een normale startstap. De pomp krijgt eerst ongeveer 30 seconden om waterflow op te bouwen; daarna wordt de koelactie vrijgegeven.":w?"De regelaar vraagt geen nieuwe warmte meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop.":"CM1 wordt gebruikt als korte flowfase. De pomp krijgt eerst even tijd om waterflow op te bouwen voordat de warmtepomp start of stopt.",next:a?n==="flow_postflow"?g?`${i} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`:"Daarna blijft het systeem standby of beoordeelt het een nieuwe koelvraag.":"Na de korte voorloop gaat het systeem automatisch door met koelen.":w?`${l} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`:"De regelaar gaat automatisch verder zodra de flowfase klaar is."},flow_hold_clear:{title:n==="flow_postflow"?a?"Naloop na koelen klaar":"Naloop klaar":b?"Waterflow hersteld":a?"Voorloop voor koelen klaar":"Voorloop klaar",reasonLabel:n==="flow_postflow"?a?"Naloop na koelen":"Naloop actief":b?"Waterflow hersteld":a?"Koelen vrijgegeven":"Voorloop klaar",reasonSummary:n==="flow_postflow"?a?"De korte pompnaloop na koelen is afgerond.":"De korte pompnaloop is afgerond.":b?"De waterflow is hersteld en de tijdelijke startblokkade is opgeheven.":a?"De waterflow is voldoende; de warmtepomp kan met koelen verder.":"De waterflow is voldoende; de warmtepomp is vrijgegeven voor de volgende stap.",summary:a?n==="flow_postflow"?"De pomp heeft kort nagedraaid; het koelbedrijf is afgerond.":"De waterflow is voldoende; koeling kan verder.":n==="flow_postflow"?"De pomp heeft kort nagedraaid; het systeem kan terug naar standby.":"De waterflowfase is afgerond; de normale regeling kan verder.",detail:a?"De flowfase hoort bij het koeltraject. Dit is normaal gedrag rond starten of stoppen van koeling.":n==="flow_postflow"?"De warmtepomp is gestopt en de pomp heeft de korte naloop afgerond.":"De pomp heeft voldoende circulatie opgebouwd. De startvoorwaarde voor waterflow is nu vrij.",next:a?n==="flow_postflow"?"Het systeem blijft standby totdat er opnieuw koelvraag of bescherming nodig is.":"De controller vervolgt met koelen en blijft dauwpunt en aanvoer bewaken.":"De controller vervolgt met verwarmen, koelen, vorstbescherming of standby.",checks:n==="flow_postflow"?["Naloop afgerond","Warmtepomp gestopt","Regeling gaat naar standby"]:b?["Waterflow hersteld","Startblokkade opgeheven","Regeling gaat verder"]:["Waterflow voldoende","Warmtepomp vrijgegeven","Regeling gaat verder"]},startup_inhibit_start:{title:Number(e?.value_a)===1?"Koeling wacht na herstart":"Verwarming wacht na herstart",reasonLabel:"Wachttijd na herstart",reasonSummary:"De compressor blijft na een herstart kort uit om een te snelle herstart te voorkomen.",summary:Number(e?.value_a)===1?"Er is koelvraag, maar de warmtepomp wacht nog kort na de herstart.":"Er is warmtevraag, maar de warmtepomp wacht nog kort na de herstart.",detail:"De controller kent na een reboot de voorgaande stoptijd niet meer. Daarom houdt hij eenmaal de ingestelde minimale uit-tijd aan voordat een compressor mag starten.",next:Number(e?.value_a)===1?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.",checks:["Comfortvraag aanwezig","Compressor blijft nog uit","Start volgt automatisch"]},startup_inhibit_clear:{title:"Wachttijd na herstart voorbij",reasonLabel:"Wachttijd afgerond",reasonSummary:"De compressor mag weer starten als de vraag nog aanwezig is.",summary:"De wachttijd na de herstart is verstreken.",detail:"De minimale uit-tijd na de reboot is afgerond. Alle normale startvoorwaarden blijven van toepassing.",next:"Bij aanhoudende vraag gaat de controller automatisch verder met de gekozen warmtepomp.",checks:["Wachttijd verstreken","Start weer toegestaan","Regeling gaat verder"]},startup_inhibit_refresh:{title:Number(e?.value_a)===1?"Koelvraag tijdens wachttijd gewijzigd":"Warmtevraag tijdens wachttijd gewijzigd",reasonLabel:"Wachttijd blijft actief",reasonSummary:"De gekozen warmtepomp of doelmodus veranderde, maar de wachttijd na de herstart loopt door.",summary:"De controller heeft de actuele vraag opnieuw beoordeeld. De compressor blijft wachten tot dezelfde wachttijd voorbij is.",detail:"Tijdens de wachttijd veranderde welke warmtepomp of doelmodus gewenst is. De blokkering is niet opgeheven; alleen de context van de wachtperiode is bijgewerkt.",next:"Zodra de wachttijd voorbij is, mag de dan gekozen warmtepomp automatisch starten.",checks:["Vraag opnieuw beoordeeld","Wachttijd blijft actief","Start volgt automatisch"]},defrost_seen_start:{title:`Ontdooien gestart (${r})`,summary:`${r} ontdooit kort. Dat is normaal bij koud en vochtig weer.`,detail:"De buitenunit bepaalt zelf hoe lang ontdooien duurt. De regelaar voorkomt ondertussen onnodige wissels.",next:"Na ontdooien levert de warmtepomp automatisch weer normaal mee."},defrost_seen_clear:{title:`Ontdooien klaar (${r})`,summary:`${r} heeft ontdooien afgerond en kan weer normaal vermogen leveren.`,detail:"De regelaar ziet dat de ontdooifase voorbij is en laat de normale regeling weer doorlopen.",next:"Bij aanhoudende vraag blijft de warmtepomp actief of schakelt duo-bedrijf bij."},cooling_limited:{title:n==="dew_stop"?"Koeling gestopt door dauwpunt":n==="restart_wait"?"Koeling wacht op veilige herstart":n==="buffer_stop"?"Koeling wacht: water al koud genoeg":y?"Koeling tijdelijk beperkt":"Koeling op ingesteld maximum",summary:n==="dew_stop"?`${i} stopt omdat verder koelen te dicht bij het dauwpunt komt.`:n==="restart_wait"?"De koelvraag is nog aanwezig. Het systeem wacht met opnieuw starten tot de veilige marge voldoende is hersteld.":n==="buffer_stop"?"Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.":y?"Er is koelvraag, maar het systeem houdt het koelvermogen tijdelijk lager.":"Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum.",detail:m.summary,next:n==="restart_wait"?"De warmtepomp start automatisch opnieuw zodra de veilige marge voldoende en stabiel is.":n==="buffer_stop"?"De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.":y?"Koeling wordt vrijgegeven zodra de veilige marge stabiel genoeg is.":"Koeling blijft binnen dit maximum zolang de instelling en koelvraag gelijk blijven."},cooling_released:{title:"Koeling vrijgegeven",summary:"De veilige marge is terug. De warmtepomp mag weer normaal koelen.",detail:"De dauwpunt- en temperatuurmarge is voldoende hersteld om de begrenzing los te laten.",next:"De regelaar blijft koelen zolang de kamer daarom vraagt."},sticky_pump_run:{title:"Pompbescherming uitgevoerd",summary:"De pomp draaide kort na langere stilstand. Dit is geen verwarmings- of koelvraag.",detail:"Deze korte run voorkomt dat de pomp na stilstand vast gaat zitten.",next:"De volgende preventieve run volgt pas na de ingestelde beschermingstijd."},frost_protection_start:{title:"Vorstbescherming actief",summary:"Het systeem laat water circuleren om bevriezing te voorkomen.",detail:"Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",next:"Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt."},frost_protection_clear:{title:"Vorstbescherming gestopt",summary:"Het systeem verlaat de vorstbescherming en gaat terug naar normale regeling.",detail:"Het watercircuit hoeft niet langer apart beschermd te worden.",next:"Bij nieuw vorstrisico kan de bescherming automatisch opnieuw starten."},boiler_assist_start:{title:"CV-ketel ondersteunt tijdelijk",summary:"De CV-ketel helpt omdat extra capaciteit tijdelijk nuttig is.",detail:"De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",next:"De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen."},boiler_assist_stop:h?{title:n==="sensor_fallback"?"CV-ondersteuning gestopt: meting ontbreekt":n==="no_candidate"?"CV-ondersteuning niet beschikbaar":n==="flow_preflow"?"CV-ondersteuning wacht op voorloop":"CV-ondersteuning veilig gestopt",summary:n==="sensor_fallback"?"De CV-ketel is gestopt omdat een betrouwbare aanvoertemperatuur ontbreekt.":n==="no_candidate"?"De CV-ketel is uitgeschakeld of kan nu niet worden ingezet.":n==="flow_preflow"?"De CV-ketel wacht tijdens de test kort tot de waterflow stabiel is.":"De CV-ketel is gestopt omdat een veiligheidsgrens voor de watertemperatuur actief is.",detail:"Dit is een beschermende of configuratiegebonden keuze, niet een teken dat de warmtevraag vanzelf is afgenomen.",next:"De regelaar beoordeelt automatisch opnieuw zodra de blokkade is opgeheven."}:{title:"CV-ondersteuning gestopt",summary:"De extra ondersteuning is niet meer nodig.",detail:"De warmtevraag is genoeg gedaald of de warmtepompen kunnen het weer zelf dragen.",next:"De CV-ketel blijft beschikbaar als er later opnieuw extra capaciteit nodig is."},attention_pattern:{title:"Aandachtspunt gezien",summary:n==="start_stop_rate_high"?"Er zijn relatief veel starts/stops gezien. Dat is nuttig om te volgen.":"Het systeem ziet een patroon dat extra aandacht verdient.",detail:m.summary,next:"Als het patroon aanhoudt, blijft dit zichtbaar voor support en analyse."}}[t]||S}function S1(e,t,r){let n=Number(t?.duration_s);if(!Number.isFinite(n)||n<=0)return e;let a=ma(t,r);return Math.max(e,Math.min(1440,e+Math.max(5,a)))}function q1(e){let t=String(e?.event_type||""),r=String(e?.reason||"");if(kh(e)||r==="buffer_stop")return"normal";if(fu(r))return"limited";if(t==="flow_hold_start"||t==="flow_hold_clear"){if(r==="flow_preflow"||r==="flow_postflow")return"normal";if(r==="flow_too_low")return t==="flow_hold_start"?"limited":"normal"}return String(e?.severity||"normal")}function kh(e){if(String(e?.event_type||"")!=="cooling_limited")return!1;let t=String(e?.reason||"");return["capacity_cap","room_cap","cooling_limiter","simmer","falling_gap","level1_hold"].includes(t)?!0:t==="projected_floor"&&Number(e?.value_a)>0}function k1(e,t,r){let n=String(e?.event_type||""),a=String(e?.reason||"unknown");if(!n||n==="boot_marker"||e?._oq_hidden||(n==="defrost_seen_start"||n==="defrost_seen_clear")&&Number(e?._oq_context_cm??e?.cm)===5||kh(e)||n==="cooling_released")return null;let i=b1(e,t,r);if(!Number.isFinite(i))return null;let l=v1(e),c=Number(e?._oq_context_cm??e?.cm),u=n==="cooling_limited"||n==="cooling_released"?y1(e):n==="source_start"||n==="source_stop"||n==="topology_change"?pt(e?.subject,c):qu(e?.subject),p=qh(e?.duration_s),g=q1(e);return{id:`fw-${e.seq||e.uptime_s||n}`,kind:"event",severity:g,time:w1(e,t,r),title:l.title,summary:l.summary,detailTitle:"Waarom gebeurde dit?",detail:l.detail,next:l.next,source:u,reasonLabel:l.reasonLabel||"",reasonSummary:l.reasonSummary||"",reasonCode:a,modeLabel:Number(e?.cm)>0?`CM${Number(e.cm)}`:"CM?",modeTransitionLabel:e?._oq_mode_transition||"",duration:p,graphStart:Math.max(0,Math.min(1440,i)),graphEnd:S1(i,e,t),realEventType:n,rawDecisionEvent:e,checks:Array.isArray(l.checks)?l.checks:null,timelineHidden:(n==="source_start"||n==="topology_change")&&c===5||n==="source_stop"&&(e?._oq_cooling_stop_reason==="dew_stop"||a==="dew_stop")||n==="startup_inhibit_start"||n==="startup_inhibit_refresh"||n==="startup_inhibit_clear"}}function E1(e,t,r,n){if(!Number.isFinite(e)||!Number.isFinite(t)||t<=e)return null;let a=Er(r,n),i=Math.max(e,a.start),l=Math.min(t,a.end);if(l<=i)return null;let c=Math.max(1,a.end-a.start);return{start:(i-a.start)/c*1440,end:(l-a.start)/c*1440,durationS:Math.max(0,Math.round((l-i)/1e3))}}function T1(e){let t=Number(e?._oq_context_cm??e?.cm);return Number.isFinite(t)&&t>0?`CM${t}`:"CM?"}function pa(e,t,r){let n=E1(e.startEpochMs,e.endEpochMs,t,r);return!n||n.durationS<Number(e.minDurationS||60)?null:{id:e.id,kind:"span",severity:e.severity||"normal",time:Th(n.start,n.end,!!e.isOpen),duration:qh(n.durationS),title:e.title,summary:e.summary,detailTitle:e.detailTitle||"Waarom liep deze periode?",detail:e.detail,next:e.next,source:e.source||"Systeem",reasonCode:e.reasonCode||"keep_current",reasonLabel:e.reasonLabel||"",reasonSummary:e.reasonSummary||"",modeLabel:e.modeLabel||T1(e.startEvent),modeTransitionLabel:"",graphStart:Math.max(0,Math.min(1440,n.start)),graphEnd:Math.max(0,Math.min(1440,n.end)),derivedFromDecisionLog:!0}}function C1(e,t,r){let n=Er(t,r),a={HP1:[],HP2:[],cooling:[],boiler:[],frost:[],startupInhibit:[]},i={HP1:null,HP2:null,cooling:null,boiler:null,frost:null,startupInhibit:null},l=d=>{let b=String(d||"").toUpperCase();return b==="BOTH"?["HP1","HP2"]:b==="HP1"||b==="HP2"?[b]:[]},c=d=>uo(d),u=(d,b)=>{let S=c(b);!Number.isFinite(S)||i[d]||(i[d]={key:d,startEvent:b,startEpochMs:S})},p=(d,b)=>{let S=i[d],q=c(b);!S||!Number.isFinite(q)||(q>S.startEpochMs&&a[d].push({...S,endEvent:b,endEpochMs:q}),i[d]=null)},g=d=>{["HP1","HP2"].some(S=>i[S]&&Number(i[S].startEvent?._oq_context_cm??i[S].startEvent?.cm)===5)||p("cooling",d)};e.filter(d=>d&&!d._oq_hidden).sort(Su).forEach(d=>{let b=String(d?.event_type||""),S=Number(d?._oq_context_cm??d?.cm);if(b==="boot_marker")Object.keys(i).forEach(q=>p(q,d));else if(b==="source_start")l(d.subject).forEach(q=>u(q,d)),S===5&&u("cooling",d);else if(b==="source_stop")l(d.subject).forEach(q=>p(q,d)),(S===5||i.cooling)&&g(d);else if(b==="topology_change")if(d.to==="duo")u("HP1",d),u("HP2",d);else if(d.to==="single"){let q=ku(d);q?(u(q,d),p(q==="HP1"?"HP2":"HP1",d)):p("HP2",d),g(d)}else d.to==="idle"&&(p("HP1",d),p("HP2",d),p("cooling",d));else b==="boiler_assist_start"?u("boiler",d):b==="boiler_assist_stop"?p("boiler",d):b==="frost_protection_start"?u("frost",d):b==="frost_protection_clear"?p("frost",d):b==="startup_inhibit_start"?u("startupInhibit",d):b==="startup_inhibit_refresh"?(p("startupInhibit",d),u("startupInhibit",d)):b==="startup_inhibit_clear"?p("startupInhibit",d):b==="flow_hold_clear"&&d.reason==="flow_postflow"&&p("cooling",d)}),Object.keys(i).forEach(d=>{if(i[d]){let b=t==="today"?Math.min(n.end,r):n.end;a[d].push({...i[d],endEvent:null,endEpochMs:b,isOpen:!0})}});let w=[],y=d=>{d&&w.push(d)},h=(d,b)=>d.startEpochMs<b.endEpochMs&&b.startEpochMs<d.endEpochMs,m=d=>{let b=["HP1","HP2"].filter(S=>a[S].some(q=>Number(q.startEvent?._oq_context_cm??q.startEvent?.cm)===5&&h(q,d)));return b.length===2?pt("BOTH",5):b.length===1?pt(b[0],5):pt(d.startEvent?.subject,5)};return a.startupInhibit.forEach((d,b)=>{let q=(Number(d.startEvent?.value_a)||0)===1,E=String(d.endEvent?.event_type||"")==="startup_inhibit_refresh";y(pa({id:`fw-span-startup-inhibit-${b}-${d.startEvent?.seq||d.startEpochMs}`,startEpochMs:d.startEpochMs,endEpochMs:d.endEpochMs,isOpen:!!d.isOpen,startEvent:d.startEvent,severity:"normal",title:d.isOpen?"Warmtepomp wacht na herstart":"Warmtepomp wachtte na herstart",summary:q?"Er was koelvraag, maar de compressor bleef na de herstart nog kort uit.":"Er was warmtevraag, maar de compressor bleef na de herstart nog kort uit.",detail:"Na een reboot houdt de controller eenmaal de minimale uit-tijd aan. Zo kan een compressor niet te snel opnieuw starten wanneer de vorige stoptijd onbekend is.",next:d.isOpen?q?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.":E?"De gewenste warmtepomp of doelmodus veranderde, maar de wachttijd bleef actief.":"Na deze periode ging de normale regeling automatisch verder.",source:pt(d.startEvent?.subject,q?5:2),reasonCode:"startup_inhibit",reasonLabel:"Wachttijd na herstart",reasonSummary:"De compressor werd bewust nog niet gestart.",modeLabel:q?"CM5":"CM2",minDurationS:1},t,r))}),a.boiler.forEach((d,b)=>{y(pa({id:`fw-span-boiler-${b}-${d.startEvent?.seq||d.startEpochMs}`,startEpochMs:d.startEpochMs,endEpochMs:d.endEpochMs,isOpen:!!d.isOpen,startEvent:d.startEvent,severity:"normal",title:"CV-ketel ondersteunde tijdelijk",summary:"De CV-ketel hielp tijdelijk mee toen extra vermogen nuttig was.",detail:"De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",next:"De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen.",source:"CV-ketel",reasonCode:"boiler_assist",modeLabel:"CM3",minDurationS:120},t,r))}),a.cooling.forEach((d,b)=>{y(pa({id:`fw-span-cooling-${b}-${d.startEvent?.seq||d.startEpochMs}`,startEpochMs:d.startEpochMs,endEpochMs:d.endEpochMs,isOpen:!!d.isOpen,startEvent:d.startEvent,severity:"normal",title:"Koeling actief",summary:"Er was koelvraag en de warmtepomp koelde binnen de normale regeling.",detail:"Tijdens koelen bewaakt de controller continu waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij die normale regeling.",next:"Koeling stopt zodra de koelvraag wegvalt of tijdelijk pauzeert als een veiligheidsmarge daarom vraagt.",source:m(d),reasonCode:"keep_current",reasonLabel:"Koeling gestart",reasonSummary:"De koelrun is gestart en liep binnen de normale regeling.",modeLabel:"CM5",minDurationS:d.isOpen?1:120},t,r))}),a.frost.forEach((d,b)=>{y(pa({id:`fw-span-frost-${b}-${d.startEvent?.seq||d.startEpochMs}`,startEpochMs:d.startEpochMs,endEpochMs:d.endEpochMs,isOpen:!!d.isOpen,startEvent:d.startEvent,severity:"limited",title:"Vorstbescherming actief",summary:"Het systeem liet water circuleren om bevriezing te voorkomen.",detail:"Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",next:"Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",source:"Systeem",reasonCode:"frost_protection",modeLabel:"CM98",minDurationS:60},t,r))}),a.HP1.forEach((d,b)=>{a.HP2.forEach(S=>{let q=Math.max(d.startEpochMs,S.startEpochMs),E=Math.min(d.endEpochMs,S.endEpochMs),k=d.startEpochMs>=S.startEpochMs?d.startEvent:S.startEvent,$=Number(d.startEvent?._oq_context_cm??d.startEvent?.cm),_=Number(S.startEvent?._oq_context_cm??S.startEvent?.cm);if(Number(k?._oq_context_cm??k?.cm)===5||$===5||_===5)return;let B=!!(d.isOpen&&S.isOpen);y(pa({id:`fw-span-duo-${b}-${d.startEvent?.seq||d.startEpochMs}-${S.startEvent?.seq||S.startEpochMs}`,startEpochMs:q,endEpochMs:E,isOpen:B,startEvent:k,severity:"normal",title:"Twee warmtepompen verwarmen",summary:"HP1 en HP2 draaiden tegelijk omdat extra capaciteit nuttig was.",detail:"De warmtepompen zijn gelijkwaardig. Twee bronnen verdelen de belasting wanneer \xE9\xE9n warmtepomp de vraag minder rustig kan dragen.",next:"Het systeem schakelt terug naar \xE9\xE9n warmtepomp zodra single-bedrijf weer voldoende of rustiger is.",source:pt("BOTH",2),reasonCode:"better_heat",modeLabel:"CM2",minDurationS:300},t,r))})}),w}function Eh(e){let t=[...e].sort(Su),r={HP1:0,HP2:0},n={HP1:!1,HP2:!1},a=0,i=0,l=0,c="",u=g=>{let w=String(g||"").toUpperCase();return w==="BOTH"?["HP1","HP2"]:w==="HP1"||w==="HP2"?[w]:[]},p=g=>{let w=es(t[g]);for(let y=1;y<=6&&g+y<t.length;y+=1){let h=t[g+y],m=es(h);if(Number.isFinite(w)&&Number.isFinite(m)&&m-w>300)break;let d=String(h?.event_type||"");if(d==="flow_hold_clear"&&Number(h?.value_a)===5||(d==="source_start"||d==="topology_change"||d==="cooling_limited")&&Number(h?.cm)===5)return 5;if(d==="flow_hold_start")break}return 0};return t.map((g,w)=>{let y={...g},h=String(g?.event_type||""),m=String(g?.subject||"").toUpperCase(),d=String(g?.reason||""),b=Number(g?.cm)||0;h==="boot_marker"&&(r.HP1=0,r.HP2=0,n.HP1=!1,n.HP2=!1,a=0,i=0,l=0,c="");let S=b,q=!1,E="",k="",$=!1,_="",P=!1,B="",H=l,F=()=>["HP1","HP2"].filter(D=>r[D]===5),A=()=>["HP1","HP2"].filter(D=>r[D]>0&&r[D]!==5);if(h==="source_start")S=b||S,u(m).forEach(D=>{r[D]=S});else if(h==="source_stop")S=u(m).map(N=>r[N]).find(N=>N>0)||S,S===5&&c&&(B=c,c=""),u(m).forEach(N=>{r[N]=0});else if(h==="topology_change")g?.to==="idle"?(S=a||S,a=0):(g?.to==="single"||g?.to==="duo")&&(S=b||a||S,a=S);else if(h==="flow_hold_start"){let D=F(),N=A(),Z=Number(g?.value_a);S=d==="flow_postflow"?a||S:Z||p(w)||S,d==="flow_postflow"&&S===5&&D.length&&(E=D.join(" + "),$=!0),d==="flow_postflow"&&S!==5&&N.length&&(_=N.join(" + "),P=!0),i=S}else if(h==="flow_hold_clear")S=Number(g?.value_a)||i||a||S,i=0;else if(h==="cooling_limited"||h==="cooling_released"){S=5;let D=F();D.length&&(E=D.join(" + "),k=D.length===2?"BOTH":D[0]),h==="cooling_limited"&&d==="dew_stop"&&(c="dew_stop")}if(h==="defrost_seen_start"||h==="defrost_seen_clear"){let D=m==="HP1"||m==="HP2"?m:"HP1";S===5||b===5?q=!0:h==="defrost_seen_start"?n[D]=!0:n[D]?n[D]=!1:q=!0}y._oq_context_cm=S,y._oq_hidden=q,y._oq_active_cooling_source=E,y._oq_active_cooling_subject=k,y._oq_cooling_runtime_hold=$,y._oq_active_heating_source=_,y._oq_heating_runtime_hold=P,y._oq_cooling_stop_reason=B,y._oq_previous_cm=H,y._oq_mode_transition=m1(g,H);let L=g1(g);return Number.isFinite(L)&&(l=L),y})}function x1(){let e=vu(),t=mt(),r=Date.now(),n=Eh(e),a=n.map(l=>k1(l,t,r)).filter(Boolean),i=C1(n,t,r);return[...a,...i].sort((l,c)=>{let u=Kt(c).start-Kt(l).start;if(u!==0)return u;let p={event:0,span:1,aggregate:2};return(p[l.kind]??3)-(p[c.kind]??3)})}function $1(e){let t=x1();return t.length?t:[]}function M1(e){let t=e.filter(r=>!r.timelineHidden);return t.some(r=>r.id===o.controlReplaySelectedEpisode)?t.find(r=>r.id===o.controlReplaySelectedEpisode):t.find(r=>r.kind==="span"&&r.reasonCode==="better_heat")||t.find(r=>r.kind==="span")||t[0]||null}function dh(e){let t=String(e||"").match(/(\d{1,2}):(\d{2})/);if(!t)return Number.NaN;let r=Number.parseInt(t[1],10),n=Number.parseInt(t[2],10);return!Number.isFinite(r)||!Number.isFinite(n)?Number.NaN:Math.max(0,Math.min(1440,r*60+n))}function Kt(e){if(Number.isFinite(Number(e?.graphStart))){let a=Math.max(0,Math.min(1440,Number(e.graphStart))),i=Number.isFinite(Number(e?.graphEnd))?Math.max(a,Math.min(1440,Number(e.graphEnd))):a;return{start:a,end:i}}let t=String(e?.time||"").match(/\d{1,2}:\d{2}/g)||[],r=dh(t[0]),n=dh(t[1]);return!Number.isNaN(r)&&!Number.isNaN(n)?{start:r,end:Math.max(r,n)}:Number.isNaN(r)?{start:430,end:430}:{start:r,end:r}}function Eu(){let e=Number(o.controlReplayGraphMinute);return Number.isFinite(e)?Math.max(0,Math.min(1440,Math.round(e/5)*5)):430}function A1(e){let t=Math.max(0,Math.round(Number(e)||0));if(t<=5)return"Nu";let r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?n>0?`${r}d ${n}u geleden`:`${r}d geleden`:n>0?a>0?`${n}u ${a}m geleden`:`${n}u geleden`:`${a}m geleden`}function gu(e,t=ga()){let r=Math.max(0,Math.min(1440,Number(e)||0));return t.calendarDay==="today"?Sr(Ji(r,"today"),Date.now(),"time"):t.calendarDay==="yesterday"?Sr(Ji(r,"yesterday"),Date.now(),"time"):t.id==="week"||t.id==="last48"||t.id==="last3d"||t.id==="custom"?Sr(Ji(r,t.id),Date.now(),"weekday"):Sr(Ji(r,t.id),Date.now(),"auto")}function H1(e,t){let r=Math.max(0,Math.min(1440,Number(t)||0)),n={span:0,aggregate:1,event:2};return e.filter(i=>!i.timelineHidden).map(i=>{let l=R1(i);if(r<l.start||r>l.end)return null;let c=Math.max(1,l.end-l.start);return{item:i,score:c+(n[i.kind]??3)*.1}}).filter(Boolean).sort((i,l)=>i.score-l.score)[0]?.item||null||_1(e,r)}function ma(e,t=mt()){let r=Number(e?.duration_s);return!Number.isFinite(r)||r<=0?0:r/60*(1440/hu(t))}function R1(e){let t=Kt(e),r=String(e?.realEventType||""),n=ma(e?.rawDecisionEvent);if(r==="defrost_seen_clear"&&n>0){let a=Math.max(5,n);return{start:Math.max(0,t.start-a),end:t.start}}if((r==="flow_hold_clear"||r==="frost_protection_clear")&&n>0){let a=Math.max(1,n);return{start:Math.max(0,t.start-a),end:t.start}}return t.end>t.start?t:e?.kind==="event"?{start:t.start,end:Math.min(1440,t.start+12)}:t}function Th(e,t,r=!1){let n=ga(),a=gu(e,n),i=r||t>=1440?"nu":gu(t,n);return`${a}-${i}`}function Ch(e=mt(),t=Date.now()){if(e!=="today")return 1440;let r=new Date(t);return Math.max(0,Math.min(1440,Math.round(r.getHours()*60+r.getMinutes()+r.getSeconds()/60)))}function _1(e,t){let r=[],n=new Map,a=[...e].filter(A=>A.rawDecisionEvent).sort((A,L)=>Kt(A).start-Kt(L).start),i=(A,L,D)=>{n.has(A)||n.set(A,{label:A,item:L,start:D})},l=(A,L)=>{let D=n.get(A);D&&(r.push({...D,end:Math.max(D.start,L)}),n.delete(A))},c=A=>{n.has("Koeling")&&!n.has("HP1")&&!n.has("HP2")&&l("Koeling",A)},u=A=>{let L=String(A||"").toUpperCase(),D=[];return(L==="HP1"||L==="BOTH")&&D.push("HP1"),(L==="HP2"||L==="BOTH")&&D.push("HP2"),D},p=$h(),g={reasonCode:"keep_current",severity:"normal",modeLabel:p.sourceModes.HP1||p.sourceModes.HP2?`CM${p.sourceModes.HP1||p.sourceModes.HP2}`:"CM?"};p.HP1&&i("HP1",g,0),p.HP2&&i("HP2",g,0),p.boiler&&i("CV-ketel",g,0),p.cooling&&i("Koeling",g,0),a.forEach(A=>{let L=Kt(A),D=String(A.realEventType||""),N=A.rawDecisionEvent||{},Z=Number(N._oq_context_cm??N.cm),I=u(N.subject);if(D==="source_start")I.forEach(W=>i(W,A,L.start)),Z===5&&i("Koeling",A,L.start);else if(D==="source_stop")I.forEach(W=>l(W,L.start)),(Z===5||n.has("Koeling"))&&c(L.start);else if(D==="topology_change")if(N.to==="duo")i("HP1",A,L.start),i("HP2",A,L.start);else if(N.to==="single"){let W=ku(N);W?(i(W,A,L.start),l(W==="HP1"?"HP2":"HP1",L.start)):l("HP2",L.start),c(L.start)}else N.to==="idle"&&(l("HP1",L.start),l("HP2",L.start),l("Koeling",L.start));else D==="boiler_assist_start"?i("CV-ketel",A,L.start):D==="boiler_assist_stop"?l("CV-ketel",L.start):D==="flow_hold_clear"&&N.reason==="flow_postflow"&&l("Koeling",L.start)});let w=Ch();n.forEach(A=>{A.start<=w&&r.push({...A,end:w})});let y=r.filter(A=>t>=A.start&&t<=A.end);if(!y.length)return null;let h=new Set(y.map(A=>A.label)),m=["HP1","HP2"].filter(A=>h.has(A)),d=h.has("CV-ketel"),b=h.has("Koeling"),S=y.filter(A=>m.includes(A.label)||A.label==="CV-ketel"||A.label==="Koeling").sort((A,L)=>A.start-L.start)[0]||y[0],q=Math.max(...y.map(A=>A.start)),E=Math.min(...y.map(A=>A.end)),k=[...m,d?"CV-ketel":"",b?"Koeling":""].filter(Boolean).join(" + "),$="Bron actief",_="Deze bron was op dit tijdstip actief.",P="De grafiek toont hier een lopende periode. De start of stop staat als los beslismoment in de tijdlijn.",B="De controller blijft opnieuw beoordelen of deze bron nodig blijft.",H=S.item?.reasonCode||"keep_current",F="normal";return b?($="Koeling actief",_=m.length?`${m.join(" en ")} koelde${m.length===1?"":"n"} op dit tijdstip binnen de normale regeling.`:"De koeling was op dit tijdstip actief.",P="De controller bewaakt daarbij waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij de normale regeling.",B="Koeling gaat door zolang er koelvraag is en de veiligheidsmarges vrij blijven.",k=m.length===2?pt("BOTH",5):m.length===1?pt(m[0],5):"Koeling",H=S.item?.reasonCode||"keep_current",F=S.item?.severity||"normal"):m.length===2&&d?($="Warmtepompen en CV-ketel actief",_="Beide warmtepompen draaiden en de CV-ketel ondersteunde tijdelijk.",P="De warmtepompen leverden de basis. De CV-ketel vulde alleen aan zolang extra vermogen nodig was.",B="CV-ondersteuning stopt zodra de warmtepompen de vraag weer zelf rustig kunnen dragen.",H="boiler_assist",F="limited"):m.length===2?($="Twee warmtepompen verwarmen",_="HP1 en HP2 verwarmden tegelijk op dit tijdstip.",P="Twee gelijkwaardige warmtepompen kunnen hoge vraag rustiger leveren dan \xE9\xE9n warmtepomp op hoge belasting.",B="E\xE9n warmtepomp stopt zodra single-bedrijf weer voldoende of rustiger is.",k=pt("BOTH",2),H="better_heat"):m.length===1&&d?($=`${m[0]} en CV-ketel actief`,_="De warmtepomp draaide en de CV-ketel ondersteunde tijdelijk.",P="De CV-ketel vult alleen aan wanneer de warmtepomp de actuele vraag niet rustig genoeg kan dragen.",B="De CV-ketel stopt zodra aanvullende ondersteuning niet meer nodig is.",H="boiler_assist",F="limited"):m.length===1?($=`${m[0]} verwarmt`,_=`${m[0]} leverde op dit tijdstip warmte.`,P="De andere warmtepomp blijft beschikbaar. De controller schakelt pas bij of wisselt pas wanneer dat rustiger of nuttiger is.",B="Bij stijgende vraag kan een tweede warmtepomp bijschakelen; bij dalende vraag stopt deze bron.",k=pt(m[0],2),H=S.item?.reasonCode||"runtime_lead"):d&&($="CV-ketel ondersteunt",_="De CV-ketel leverde op dit tijdstip extra vermogen.",P="CV-ondersteuning is aanvullend op de warmtepompen en blijft tijdelijk.",B="De CV-ketel stopt zodra de extra capaciteit niet meer nodig is.",H="boiler_assist",F="limited"),{id:`graph-context-${Math.round(t)}-${Array.from(h).join("-")}`,kind:"span",severity:F,time:Th(q,E),duration:"",title:$,summary:_,detailTitle:"Wat gebeurt hier?",detail:P,next:B,source:k||"Systeem",reasonCode:H,modeLabel:S.item?.modeLabel||"CM?",graphStart:q,graphEnd:E}}function P1(){let e=bu();return`
      <div class="oq-working-control-group">
        <span class="oq-working-control-label">Weergave</span>
        <div class="oq-working-tabs" role="tablist" aria-label="Beslislog weergave">
          ${mh().map(t=>`
            <button
              class="oq-working-tab${e===t.id?" is-active":""}"
              type="button"
              role="tab"
              aria-selected="${e===t.id?"true":"false"}"
              data-oq-action="select-control-replay-tab"
              data-replay-tab="${s(t.id)}"
            >
              ${de(t.icon,"oq-working-tab-icon")}
              <span>${s(t.label)}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `}function N1(){let e=mt(),t=ga(),r=i1(),n=No().filter(g=>!g.quick&&!g.custom),a=s1(),i=l1(a),l=ih(a.start),c=ih(a.end),u=o.controlReplayPeriodMenuOpen,p=e==="custom"?"Eigen periode":r.some(g=>g.id===e)?"Kies periode":t.shortLabel;return`
      <div class="oq-working-control-group oq-working-control-group--period">
        <span class="oq-working-control-label">Periode</span>
        <div class="oq-working-window-controls" role="group" aria-label="Periode">
          <div class="oq-working-window-choices" aria-label="Snelle periodekeuzes">
          ${r.map(g=>`
            <button
              class="oq-working-window-choice${e===g.id?" is-active":""}"
              type="button"
              data-oq-action="select-control-replay-window"
              data-replay-window="${s(g.id)}"
              aria-pressed="${e===g.id?"true":"false"}"
              aria-label="${s(g.label)}"
            >
              ${s(g.shortLabel)}
            </button>
          `).join("")}
          </div>
          <div class="oq-working-period-menu" data-oq-control-replay-period-menu>
            <button
              class="oq-working-period-menu-toggle${u||!r.some(g=>g.id===e)?" is-active":""}"
              type="button"
              aria-expanded="${u?"true":"false"}"
              aria-haspopup="dialog"
              data-oq-action="toggle-control-replay-period-menu"
            >
              <span>${s(p)}</span>
              <span class="oq-working-period-menu-chevron" aria-hidden="true"></span>
            </button>
            ${u?`
              <section class="oq-working-period-popover" role="dialog" aria-label="Kies periode">
                <div class="oq-working-period-popover-head">
                  <strong>Ander tijdvenster</strong>
                </div>
                <div class="oq-working-period-option-grid">
                  ${n.map(g=>`
                    <button
                      class="oq-working-period-option${e===g.id?" is-active":""}"
                      type="button"
                      data-oq-action="select-control-replay-window"
                      data-replay-window="${s(g.id)}"
                      aria-pressed="${e===g.id?"true":"false"}"
                    >${s(g.shortLabel)}</button>
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
                            ${sh(l.hour)}
                          </select>
                        </div>
                      </label>
                      <label>
                        <span>Tot</span>
                        <div class="oq-working-period-date-hour">
                          <input type="date" min="${s(i.endMinDate)}" max="${s(i.endMaxDate)}" value="${s(c.date)}" data-oq-control-replay-custom-end-date data-oq-control-replay-custom-input>
                          <select aria-label="Uur tot" data-oq-control-replay-custom-end-hour data-oq-control-replay-custom-input>
                            ${sh(c.hour)}
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
    `}function D1(e){let t=wu(e.severity);return`
      <section class="oq-working-now oq-working-now--${s(t.tone)}">
        <div class="oq-working-now-main">
          <span class="oq-working-eyebrow">Actuele situatie</span>
          <h2>${s(e.title)}${yu(e)}</h2>
          <p>${s(e.copy)}</p>
          <div class="oq-working-pill-row">
            ${kr(t.label,t.tone,"shield")}
            ${kr(e.reasonLabel,"info","target")}
            ${kr(e.sinceLabel,"context")}
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
    `}function L1(e,t){let r=wu(e.severity),n=t&&t.id===e.id,a=bh(e.kind),i=hh(e);return`
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
            ${yu(e)}
            ${e.count?`<em>${s(e.count)}</em>`:""}
          </span>
          <span class="oq-working-entry-summary">${s(e.summary)}</span>
          <span class="oq-working-entry-meta">
            <span>${s(e.source)}</span>
            ${i?`<span class="oq-working-entry-meta-mode">${s(i)}</span>`:""}
            <span>${s(e.reasonLabel||fh(e.reasonCode))}</span>
            ${e.duration?`<span>Duur: ${s(e.duration)}</span>`:""}
          </span>
        </span>
        <span class="oq-working-entry-status">${s(r.label)}</span>
      </button>
    `}function xh(e){if(!e)return"";let t=wu(e.severity),r=qr(e.reasonCode),n=e.reasonLabel||r.label,a=e.reasonSummary||r.summary,i=wh(e),l=hh(e),c=Array.isArray(e.checks)?e.checks:r.checks;return`
      <aside class="oq-working-detail oq-working-detail--${s(t.tone)}">
        <div>
          <span class="oq-working-eyebrow">Geselecteerd</span>
          <h3>${s(e.title)}${yu(e)}</h3>
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
        ${yh(i)}
        ${c.length?`
          <div class="oq-working-checks" aria-label="Beslisfactoren">
            ${c.map(u=>`<span>${de("shield","oq-working-reason-icon")} ${s(u)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-working-pill-row">
          ${kr(t.label,t.tone,"shield")}
          ${kr(n,"info","target")}
          ${kr(e.source,"context")}
        </div>
        <details class="oq-working-support" data-replay-support-item="${s(e.id)}"${o.controlReplaySupportDetailsItemId===e.id?" open":""}>
          <summary data-oq-action="toggle-control-replay-support-details">Details voor support</summary>
          <dl>
            <div><dt>Record</dt><dd>${s(bh(e.kind))}</dd></div>
            <div><dt>Bron</dt><dd>${s(e.source)}</dd></div>
            <div><dt>Control mode</dt><dd>${s(e.modeLabel)}</dd></div>
            ${l?`<div><dt>CM wijziging</dt><dd>${s(l)}</dd></div>`:""}
            <div><dt>Reason code</dt><dd>${s(e.reasonCode)}</dd></div>
          </dl>
        </details>
      </aside>
    `}function O1(e){return`
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
    `}function Zi(e,t){return`
      <div class="oq-working-empty">
        <strong>${s(e)}</strong>
        <span>${s(t)}</span>
      </div>
    `}function I1(e,t){let r=ga(),a=e.filter(c=>!c.timelineHidden).slice(0,80),i=String(o.decisionLogError||"").trim(),l=!a.length&&!o.decisionLog&&!i;return`
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
                ${a.map(c=>L1(c,t)).join("")}
              </div>`:i?Zi("Beslislog niet beschikbaar",`De firmwarelog kon niet worden geladen (${i}). Dit betekent niet dat deze periode leeg is.`):l?Zi("Beslislog laden","De controllerkeuzes worden opgehaald. Dit duurt meestal maar heel kort."):Zi("Nog geen gebeurtenissen","De beslislog is leeg voor deze periode. Nieuwe controllerkeuzes verschijnen hier zodra de firmware ze vastlegt.")}
        </section>
        ${t?xh(t):""}
      </div>
    `}function uu(e,t,r,n,a,i=""){return`
      <article class="oq-working-source-card${a?" is-active":""}">
        <div>
          <span>${s(e)}</span>
          <strong>${s(t)}</strong>
        </div>
        ${i?`<p class="oq-working-source-card-note">${s(i)}</p>`:`<dl>
          <div><dt>Starts 24u</dt><dd>${s(r)}</dd></div>
          <div><dt>Draaiuren</dt><dd>${s(n)}</dd></div>
        </dl>`}
      </article>
    `}function F1(e){let t=qr(e.primaryReason),r=wh({primaryReason:e.primaryReason,source:e.hp1Running&&e.hp2Running?"HP1 + HP2":e.hp1Running?"HP1":e.hp2Running?"HP2":"Geen bron"}),n=!!e.coolingProtection,a=!!e.coolingCapped,i=e.primaryReason==="restart_wait",l=e.primaryReason==="buffer_stop",c=e.primaryReason==="startup_inhibit",u=e.primaryReason==="sticky_protection",p=c?"Startvoorwaarde":l?"Koelregeling":"Bescherming",g=c?"Wacht na herstart":l?"Water al koud genoeg":n?i?"Wacht op veilige herstart":"Koeling tijdelijk beperkt":a?"Koeling met ingesteld maximum":u?"Geen comfortvraag actief":"Geen beperking actief",w=c?"Na een reboot blijft de compressor eenmaal de minimale uit-tijd uit. Bij aanhoudende vraag start de gekozen warmtepomp daarna automatisch.":l?"Dit is normale regeling. De koelvraag blijft actief, maar de warmtepomp hoeft nu geen extra koude aan het water toe te voegen.":n?i?"De koelvraag blijft aanwezig. De warmtepomp start opnieuw zodra de veilige marge voldoende is hersteld.":"De aanvoer blijft boven de veilige grens. Daarom koelt het systeem tijdelijk minder hard.":a?"Dit is normale koeling binnen de ingestelde softwaregrens. Dauwpunt en waterflow blijven wel gewoon bewaakt.":u?"Alleen de pomp draait kort. De warmtepompen blijven uit en er worden geen compressorstarts geteld.":"Ontdooien, minimum rusttijd, dauwpunt en waterflow blijven bewaakt. Ze verschijnen hier zodra ze gedrag begrenzen.",y=c?[["Vraag actief","info","activity"],[e.startupInhibit?.remainingLabel||"Wachttijd actief","normal","clock"],["Automatische start","context","play"]]:l?[["Koelvraag actief","info","snowflake"],["Water koud genoeg","normal","droplet"],["Automatische herstart","context","activity"]]:n?[["Dauwpunt bewaakt","limited","droplet"],[`Max. niveau ${e.cooling.allowedMax}`,"info","target"],[`Nu niveau ${e.cooling.limitedDemand}`,"context","bar-chart"]]:a?[[`Ingesteld max. ${e.cooling.allowedMax}`,"info","target"],[`Nu niveau ${e.cooling.limitedDemand}`,"normal","bar-chart"],["Marge bewaakt","context","shield"]]:u?[["Korte pomprun","normal","shield"],["Geen koelvraag","context","snowflake"],["Geen warmtepompstart","info","activity"]]:[["Ontdooien vrij","normal","snowflake"],["Rusttijd vrij","normal","activity"],["Waterflow bewaakt","info","waves"]],h=e.cooling.requestActive||n||a||e.strategyLabel==="Koeling",m=[["Aanvoer",e.supplyTemp],["Buiten",e.outsideTemp],["Flow",e.flow]];return h||m.push(["Strategie",e.strategyLabel]),h&&(m.push(["Dauwpunt",e.cooling.dewPoint]),m.push(["Veilige min.",e.cooling.safeSupply])),`
      <div class="oq-working-status">
        ${D1(e)}
        <div class="oq-working-status-grid">
          <section class="oq-working-status-main${r?"":" oq-working-status-main--wide"}">
            <span class="oq-working-eyebrow">Waarom deze keuze?</span>
            <h3>${s(t.label)}</h3>
            <p>${s(t.summary)}</p>
            <div class="oq-working-reason-list">
              ${t.checks.map(d=>`<span>${de("target","oq-working-reason-icon")} ${s(d)}</span>`).join("")}
            </div>
          </section>
          ${r?`
            <section class="oq-working-optimizer-panel">
              ${yh(r)}
            </section>
          `:""}
          <section class="oq-working-source-grid" aria-label="Bronnen">
            ${uu("HP1",e.hp1Status,e.hp1Starts,e.hp1Hours,e.hp1Running)}
            ${uu("HP2",e.hp2Status,e.hp2Starts,e.hp2Hours,e.hp2Running)}
            ${uu("CV",e.cvStatus,"","",e.cvStatus==="Actief",h?"Geen rol bij koelen.":"Tijdelijke ondersteuning bij extra warmtevraag.")}
          </section>
          <section class="oq-working-guard-panel">
            <span class="oq-working-eyebrow">${s(p)}</span>
            <h3>${s(g)}</h3>
            <p>${s(w)}</p>
            <div class="oq-working-pill-row">
              ${y.map(([d,b,S])=>kr(d,b,S)).join("")}
            </div>
          </section>
          <section class="oq-working-telemetry">
            <span class="oq-working-eyebrow">Context</span>
            <dl>
              ${m.map(([d,b])=>`<div><dt>${s(d)}</dt><dd>${s(b)}</dd></div>`).join("")}
            </dl>
          </section>
        </div>
      </div>
    `}function j1(e,t,r){return`
      <div class="oq-working-chart-lane">
        <span>${s(e)}</span>
        <div class="oq-working-chart-track">
          ${r.map(n=>`
            <i class="oq-working-chart-segment oq-working-chart-segment--${s(n.tone||t)}" style="--oq-chart-left:${rh(n.start)}%;--oq-chart-width:${rh(n.width)}%;"></i>
          `).join("")}
        </div>
      </div>
    `}function $h(){let e=Er(),t={HP1:!1,HP2:!1,boiler:!1,cooling:!1},r={HP1:0,HP2:0},n=i=>{let l=String(i||"").toUpperCase();return l==="BOTH"?["HP1","HP2"]:l==="HP1"||l==="HP2"?[l]:[]};return Eh(vu()).filter(i=>i&&!i._oq_hidden).sort((i,l)=>{let c=uo(i),u=uo(l);return(Number.isFinite(c)?c:Number.POSITIVE_INFINITY)-(Number.isFinite(u)?u:Number.POSITIVE_INFINITY)}).forEach(i=>{let l=uo(i);if(!Number.isFinite(l)||l>e.start)return;let c=String(i.event_type||""),u=Number(i._oq_context_cm??i.cm);c==="source_start"?n(i.subject).forEach(p=>{t[p]=!0,r[p]=u}):c==="source_stop"?n(i.subject).forEach(p=>{t[p]=!1,r[p]=0}):c==="boiler_assist_start"?t.boiler=!0:c==="boiler_assist_stop"&&(t.boiler=!1)}),t.cooling=["HP1","HP2"].some(i=>t[i]&&r[i]===5),{...t,sourceModes:r}}function W1(e){if(!e.some(h=>h.rawDecisionEvent))return null;let t=[{label:"HP1",tone:"running",segments:[]},{label:"HP2",tone:"running",segments:[]},{label:"CV-ketel",tone:"assist",segments:[]},{label:"Koeling",tone:"cooling",segments:[]},{label:"Ontdooien",tone:"defrost",segments:[]},{label:"Bescherming",tone:"limited",segments:[]}],r=Object.fromEntries(t.map(h=>[h.label,h])),n=(h,m,d,b,S=.5)=>{if(!r[h]||!Number.isFinite(m))return;let q=Math.max(0,Math.min(1440,Number(m))),E=Number.isFinite(d)?Math.max(q,Math.min(1440,Number(d))):q,k=Math.max(S,(E-q)/1440*100);r[h].segments.push({start:q/1440*100,width:k,tone:b})},a=(h,m,d,b=.5)=>{let S=Kt(m);n(h,S.start,S.end,d,b)},i=[...e].filter(h=>h.rawDecisionEvent).sort((h,m)=>Kt(h).start-Kt(m).start),l={HP1:null,HP2:null,"CV-ketel":null,Koeling:null},c=(h,m)=>{l[h]==null&&(l[h]=m)},u=(h,m,d="running",b=.8)=>l[h]==null?!1:(n(h,l[h],m,d,b),l[h]=null,!0),p=h=>{l.Koeling!=null&&l.HP1==null&&l.HP2==null&&u("Koeling",h,"cooling",.8)},g={},w=$h();w.HP1&&c("HP1",0),w.HP2&&c("HP2",0),w.boiler&&c("CV-ketel",0),w.cooling&&c("Koeling",0),i.forEach(h=>{let m=Kt(h),d=String(h.realEventType||""),b=String(h.rawDecisionEvent?.subject||"").toUpperCase(),S=Number(h.rawDecisionEvent?._oq_context_cm??h.rawDecisionEvent?.cm),q=[];if((b==="HP1"||b==="BOTH")&&q.push("HP1"),(b==="HP2"||b==="BOTH")&&q.push("HP2"),d==="source_start")q.forEach(k=>c(k,m.start)),S===5&&c("Koeling",m.start);else if(d==="source_stop")q.forEach(k=>{u(k,m.start,"running")||a(k,h,"standby",.55)}),(S===5||l.Koeling!=null)&&p(m.start);else if(d==="topology_change")if(h.rawDecisionEvent?.to==="duo")c("HP1",m.start),c("HP2",m.start);else if(h.rawDecisionEvent?.to==="single"){let k=ku(h.rawDecisionEvent);k?(c(k,m.start),u(k==="HP1"?"HP2":"HP1",m.start,"running",.8)):u("HP2",m.start,"running",.8),p(m.start)}else h.rawDecisionEvent?.to==="idle"&&(u("HP1",m.start,"running",.8),u("HP2",m.start,"running",.8),u("Koeling",m.start,"cooling",.8));else if(d==="boiler_assist_start")c("CV-ketel",m.start);else if(d==="boiler_assist_stop")u("CV-ketel",m.start,"assist",.65)||a("CV-ketel",h,"standby",.65);else if(d==="candidate_blocked"||d==="flow_hold_start")a("Bescherming",h,"limited",.7);else if(d==="flow_hold_clear"){let k=Math.max(1,ma(h.rawDecisionEvent));n("Bescherming",Math.max(0,m.start-k),m.start,"limited",.7),h.rawDecisionEvent?.reason==="flow_postflow"&&u("Koeling",m.start,"cooling",.8)}if(d==="defrost_seen_start")g[b||"SYSTEM"]=m.start;else if(d==="defrost_seen_clear"&&g[b||"SYSTEM"]!=null)n("Ontdooien",g[b||"SYSTEM"],m.start,"defrost",.7),g[b||"SYSTEM"]=null;else if(d==="defrost_seen_clear"&&Number(h.rawDecisionEvent?.duration_s)>0){let k=Math.max(5,ma(h.rawDecisionEvent));n("Ontdooien",Math.max(0,m.start-k),m.start,"defrost",.7)}if(!(d==="candidate_blocked"||d==="flow_hold_start"||d==="flow_hold_clear")&&(h.severity==="limited"||h.severity==="attention"||d==="decision_blocked"||d==="decision_hold")&&a("Bescherming",h,h.severity==="attention"?"assist":"limited",.7),d==="sticky_pump_run"&&a("Bescherming",h,"safe",.6),d==="frost_protection_start")a("Bescherming",h,"limited",.8);else if(d==="frost_protection_clear"){let k=Math.max(1,ma(h.rawDecisionEvent));n("Bescherming",Math.max(0,m.start-k),m.start,"limited",.8)}});let y=Ch();return Object.entries(l).forEach(([h,m])=>{m!=null&&m<=y&&n(h,m,y,h==="CV-ketel"?"assist":h==="Koeling"?"cooling":"running",.8)}),Object.values(g).forEach(h=>{h!=null&&n("Ontdooien",h,Math.min(1440,h+7),"defrost",.7)}),t.filter(h=>h.segments.length)}function V1(e){let t=W1(e);return t||[]}function B1(e,t){let r=Eu(),n=r/1440*100,a=ga(),i=gu(r,a),l=V1(t),c=l.length?l.map(u=>j1(u.label,u.tone,u.segments)).join(""):Zi("Nog geen grafiekdata","De grafiek gebruikt alleen echte beslislog-records. Nieuwe bronwissels, defrosts of begrenzingen verschijnen hier vanzelf.");return`
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
            ${a.axis.map(u=>`<span>${s(u)}</span>`).join("")}
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
        ${e?xh(e):O1(i)}
      </div>
    `}function Mh(e){let t=vh(e);return we({tab:bu(),window:mt(),periodMenuOpen:o.controlReplayPeriodMenuOpen,customPeriodOpen:o.controlReplayCustomPeriodOpen,customStart:o.controlReplayCustomStart,customEnd:o.controlReplayCustomEnd,customPeriodError:o.controlReplayCustomPeriodError,selected:o.controlReplaySelectedEpisode,supportDetailsItem:o.controlReplaySupportDetailsItemId,graphMinute:Eu(),mode:t.modeLabel,title:t.title,reason:t.primaryReason,hp1Running:t.hp1Running,hp2Running:t.hp2Running,hp1Starts:t.hp1Starts,hp2Starts:t.hp2Starts,hp1Hours:t.hp1Hours,hp2Hours:t.hp2Hours,cvStatus:t.cvStatus,strategy:t.strategyLabel,outside:t.outsideTemp,supply:t.supplyTemp,flow:t.flow,cooling:t.cooling,coolingProtection:t.coolingProtection,coolingCapped:t.coolingCapped,decisionLog:o.decisionLogSignature,decisionLogError:o.decisionLogError,theme:o.overviewTheme})}function Ah(e){let t=vh(e),r=$1(e),n=M1(r),a=bu(),i=a==="graphs"?H1(r,Eu()):n,l=a==="status"?F1(t):a==="graphs"?B1(i,r):I1(r,i),c=a==="status"?"":N1();return`
      <section class="oq-working" data-render-signature="${s(Mh(e))}">
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
            ${P1()}
            ${c}
          </div>
        </header>
        ${l}
      </section>
    `}function Hh(){let e=ua();return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${Ah(e)}
        </div>
      </section>
    `}function K1(){if(!o.root||o.appView!=="control")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-working"):null;if(!e||!t)return!1;let r=document.activeElement;if(r&&r.closest("[data-oq-control-replay-period-menu]")&&r.matches("[data-oq-control-replay-custom-input]"))return!0;let n=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==n&&(e.className=n);let a=ua();return Xe(t,Mh(a),Ah(a))||!0}So({patchControlReplayDom:K1});function z1(){let e=document.activeElement;return o.appView!=="settings"||!o.root?.contains(e)||!e?.dataset?.oqField?null:{field:e.dataset.oqField,modalId:e.closest("[data-oq-modal]")?.dataset.oqModal||"",selectionStart:e.selectionStart,selectionEnd:e.selectionEnd}}function U1(e){if(!e||!o.root)return;let t=document.activeElement.closest("[data-oq-modal]");if((t?.dataset.oqModal||"")!==e.modalId)return;let r=(t||o.root).querySelector(`[data-oq-field="${e.field}"]`);!r||r.disabled||(r.focus({preventScroll:!0}),typeof e.selectionStart=="number"&&typeof r.setSelectionRange=="function"&&r.setSelectionRange(e.selectionStart,e.selectionEnd))}function G1(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${mf()}
        ${gf()}
      </section>
    `}function Q1(){return te({modalId:"initial-load",titleId:"oq-loading-modal-title",kicker:"OpenQuatt",title:"OpenQuatt laden",backdropClass:"oq-helper-modal-backdrop--loading",modalClass:"oq-helper-modal--reconnect oq-helper-modal--loading",role:"status",ariaLive:"polite",bodyMarkup:`
        <p class="oq-helper-modal-copy">We wachten tot de zichtbare gegevens compleet zijn, zodat de interface niet half gevuld verschijnt. Dit kan enkele seconden duren.</p>
        <div class="oq-helper-reconnect-status oq-helper-loading-status">
          <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
          <div>
            <strong>Eerste synchronisatie</strong>
            <span>De velden op dit scherm worden compleet klaargezet.</span>
          </div>
        </div>
      `})}function Y1(){return o.appView==="overview"?eh():o.appView==="control"?Hh():o.appView==="energy"?Mf():o.appView==="diagnosis"?Uf():o.appView==="results"?Af():G1()}function J1(){let e=gc();return`
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
    `}function Z1(){let e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function X1(e){if(!e||o.deferDevControlSelectRender)return;o.deferDevControlSelectRender=!0;let t=()=>{e.removeEventListener("blur",t),e.removeEventListener("change",t),o.deferDevControlSelectRender=!1,window.setTimeout(()=>Rh(),0)};e.addEventListener("blur",t,{once:!0}),e.addEventListener("change",t,{once:!0})}function eT(){if(o.nativeOpen||o.appView!=="settings"||o.renderedAppView!=="settings"||o.renderedSettingsGroup!==o.settingsGroup)return null;let e=document.scrollingElement||document.documentElement,t=Number(window.scrollY||e?.scrollTop||0);return!Number.isFinite(t)||t<=0?null:{group:o.settingsGroup,left:Number(window.scrollX||e?.scrollLeft||0),top:t}}function tT(e){if(!e)return;let t=(o.settingsPageScrollRestoreToken||0)+1;o.settingsPageScrollRestoreToken=t;let r=()=>{if(t!==o.settingsPageScrollRestoreToken||o.nativeOpen||o.appView!=="settings"||o.settingsGroup!==e.group)return;let n=document.scrollingElement||document.documentElement;if(!n)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),i=Math.min(e.top,a);window.scrollTo({left:e.left,top:i,behavior:"auto"})};window.requestAnimationFrame(()=>{r(),window.requestAnimationFrame(r),window.setTimeout(r,80)})}function Rh(){if(!o.root)return;let e=Z1();if(e){X1(e);return}let t=z1(),r=Dd(o.root),n=o.systemModal==="webserver-logs"?no():null,a=o.systemModal==="cm100-commissioning"?Jp():null,i=String(o.systemModal||"").startsWith("service-task-")?Xp():null,l=o.systemModal==="history-storage"?tm():null,c=o.systemModal==="settings-backup-restore"?rm():null,u=o.quickStartModalOpen?rf():null,p=eT();if(o.nativeOpen){o.root.innerHTML=`
        ${fc()}
        ${Ng()}
      `,Os(o.root),Fs(o.root,r),o.renderedAppView="native",o.renderedSettingsGroup="",o.settingsRenderSignature="",o.headerRenderSignature=$i(),_r({mqttSensorsModalRenderSignature:""}),$n(),Vn(),Nl(),$s(),xs(),ao(n),Hl(a),Rl(i),_l(l),Pl(c),$c(u);return}let g=Y1(),w=o.loadingEntities?`${g}${Q1()}`:g,y=o.appView==="overview"||o.appView==="control"||o.appView==="energy"||o.appView==="diagnosis"||o.appView==="results";o.root.innerHTML=`
      ${fc()}
      <div class="oq-helper-shell${o.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${y?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${As}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${Pg()}
          </div>
      ${bd()}
      ${w}
      ${J1()}
        </div>
      </div>
      ${tf()}
      ${fm()}
      ${Dg()}
      ${mm()}
    `,Os(o.root),Fs(o.root,r),U1(t),o.renderedAppView=o.appView,o.renderedSettingsGroup=o.appView==="settings"?o.settingsGroup:"",o.settingsRenderSignature=o.appView==="settings"?Cn():"",o.headerRenderSignature=$i(),_r({mqttSensorsModalRenderSignature:o.systemModal==="mqtt-sensors"?za():""}),xn(),oh(),Nl(),Go(),sa(),Vn(),$s(),xs(),ao(n),Hl(a),Rl(i),_l(l),Pl(c),$c(u),tT(p)}yd(Rh);function Ph({stepId:e,telemetryAvailable:t,choiceAvailable:r,choiceValue:n}){let a=n===!1||["off","false","0"].includes(String(n).trim().toLowerCase());return e==="usage-telemetry"&&t&&r&&a}function _h(e){return e===!0||["on","true","1"].includes(String(e).trim().toLowerCase())?!0:e===!1||["off","false","0"].includes(String(e).trim().toLowerCase())?!1:null}function cn({telemetryValue:e,choiceValue:t,expectedEnabled:r}){let n=_h(e);return _h(t)===!0&&n!==null&&n===r}async function oT(e,t){let r="usageTelemetryEnabled",n=o.entities[r]?{...o.entities[r]}:null;o.busyAction=`switch-${r}`,o.controlNotice="",o.controlError="",f();try{let a=t?"turn_on":"turn_off",i=await fetch(Q(e.domain,e.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);if(await V([r,"usageTelemetryChoiceConfigured"],"all"),!cn({telemetryValue:T(r),choiceValue:T("usageTelemetryChoiceConfigured"),expectedEnabled:t}))throw new Error("de controller heeft de opgeslagen keuze niet bevestigd");o.controlNotice=`${e.name} ${t?"ingeschakeld":"uitgeschakeld"}.`}catch(a){let i=!1;try{let l=await fetch(Q(e.domain,e.name,"turn_off"),{method:"POST"});if(!l.ok)throw new Error(`HTTP ${l.status}`);await V([r,"usageTelemetryChoiceConfigured"],"all"),i=cn({telemetryValue:T(r),choiceValue:T("usageTelemetryChoiceConfigured"),expectedEnabled:!1})}catch{}i?o.controlNotice=t?"Inschakelen kon niet worden bevestigd. Delen is veilig uitgeschakeld.":"Delen is uitgeschakeld.":(n?o.entities[r]=n:delete o.entities[r],o.controlError=`De keuze kon niet veilig worden bevestigd. Controleer de verbinding en probeer opnieuw (${a.message}).`)}finally{o.busyAction="",f()}}async function fa(e,t){let r=O[e];o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.entities[e]={...o.entities[e]||{},state:t,value:t},f();try{let n=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(t)}`,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${r.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(Me({updateInstallCompleted:!1,updateInstallCompletedVersion:""}),o.entities.firmwareUpdateChannel={...o.entities.firmwareUpdateChannel||{},state:t,value:t},On(t),f(),await In(),o.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(o.controlNotice="Logger level bijgewerkt.",o.systemModal==="webserver-logs"&&xo()):e==="webServerLogHistoryEnabled"?(["1","on","true"].includes(String(t).toLowerCase())?(o.webServerLogHistoryLoaded=!1,xo()):nr(),o.systemModal==="webserver-logs"&&f()):o.appView==="settings"?await V(Zo(),"all"):await V(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...rt,...Oo],"state"),e==="strategy"&&o.appView!=="settings"&&await V(ae(t)?he.map(a=>a.key):At,"state")}catch(n){o.controlError=`${r.name} kon niet worden bijgewerkt. ${n.message}`}finally{o.busyAction="",f()}}async function os(e,t){let r=O[e];if(r){if(e==="usageTelemetryEnabled"){await oT(r,t);return}o.busyAction=`switch-${e}`,o.controlNotice="",o.controlError="",f();try{let n=t?"turn_on":"turn_off",a=await fetch(Q(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:t,state:t},o.controlNotice=`${r.name} ${t?"ingeschakeld":"uitgeschakeld"}.`,o.busyAction="",o.appView==="overview"?await V([...yn,...nt,"setupComplete",...Qt],"state"):o.appView==="settings"?(await V(Zo(),"all"),Nr.includes(e)&&Ro()):await V(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...rt,...Oo],"state"),e==="webServerLogHistoryEnabled"&&(t?(o.webServerLogHistoryLoaded=!1,xo()):nr(),o.systemModal==="webserver-logs"&&f()),f()}catch(n){o.controlError=`${r.name} aanpassen mislukt (${n.message}).`,f()}finally{o.busyAction="",f()}}}async function ha(e,t,r=""){let n=O[e],a=be(e,t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=a,f();try{let i=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=r||`${n.name} bijgewerkt.`,await V(o.appView==="settings"?Zo():[...new Set([e,"setupComplete","strategy",...rt,...Oo])],"state")}catch(i){o.inputDrafts[e]=String(a).replace(".",","),o.controlError=`${n.name} kon niet worden bijgewerkt. ${i.message}`}finally{o.busyAction="",f()}}async function Nh(e,t){let r=O[e],n=Rt(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",f();try{let a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.controlNotice=`${r.name} bijgewerkt.`,await V(o.appView==="settings"?Zo():[e,"setupComplete"],"state")}catch(a){o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",f()}}async function Dh(e,t){let r=O[e],n=String(t||"").trim();o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=n,f();try{let a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:n,state:n},delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${r.name} bijgewerkt.`,await V(o.appView==="settings"?Zo():[e,"setupComplete"],"state")}catch(a){o.inputDrafts[e]=n,o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",f()}}async function Tu(e,t){let r=O[e],n=Ge(t)||Vo,a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:n,state:n},n}async function Lh(e,t){let r=O[e],n=t?"turn_on":"turn_off",a=await fetch(Q(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:t,state:t},t}async function Oh(){await V([...new Set([...yn,...nt,"setupComplete",...Qt])],"state")}async function Ih(e,t){let r=O[e],n=Ge(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",f();try{await Tu(e,n),o.controlNotice=`${r.name} bijgewerkt.`,await V(o.appView==="settings"?Zo():[e,"setupComplete","openquattEnabled"],"state")}catch(a){o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",f()}}async function rs(e){let t=Ge(e);if(e&&!t){o.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",f();return}if(t&&!v("openquattResumeAt")){o.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",f();return}o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",f();let r=!1;try{v("openquattResumeAt")&&(await Tu("openquattResumeAt",t||Vo),r=!!t),await Lh("openquattEnabled",!1),o.pauseResumeDraft=t?Ra(t):"",o.systemModal="",o.controlNotice=t?`Openquatt regeling is tijdelijk uitgeschakeld tot ${Hr(t)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Oh()}catch(n){if(r&&v("openquattResumeAt"))try{await Tu("openquattResumeAt",Vo)}catch{}o.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${n.message}`}finally{o.busyAction="",f()}}async function Fh(){o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",f();try{await Lh("openquattEnabled",!0),o.pauseResumeDraft="",o.systemModal="",o.controlNotice="Openquatt regeling is weer actief.",await Oh()}catch(e){o.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{o.busyAction="",f()}}async function Cu(e){let t=O[e];o.busyAction=e,o.controlError="",o.controlNotice="",f();try{let r=await fetch(Q(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);o.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await V(["setupComplete"],"state"),e==="reset"&&(o.currentStep=Cr[0].id,o.quickStartSetupDraft="",o.quickStartSetupConfirmed=!1,o.quickStartModalMode="wizard",o.quickStartModalOpen=!0),o.quickStartModalOpen=e!=="apply",Pt("overview",{syncMode:"replace"}),ye({forceFast:!0})}catch(r){o.controlError=`Actie mislukt voor "${t.name}". ${r.message}`}finally{o.busyAction="",f()}}function rT(){window.requestAnimationFrame(()=>{if(!o.root||o.systemModal!=="service-task-hp-water-calibration")return;let e=o.root.querySelector("[data-oq-service-task-scroller]"),t=o.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!t)return;let r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),a=e.scrollTop+n.top-r.top-24;e.scrollTop=Math.max(0,a)})}async function un(e,t={}){let r=O[e];if(r){o.busyAction=e,o.controlError="",o.controlNotice="",f();try{let n=await fetch(Q(r.domain,r.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","decisionLogHistoryFlush","decisionLogHistoryClear","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||Ta.has(e)||(Xt(),o.systemModal=""),o.controlNotice=t.successNotice||`${r.name} gestart.`,t.reconnectMode&&wo(t.reconnectMode),Array.isArray(t.refreshKeys)&&t.refreshKeys.length){let i=Number(t.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await V(t.refreshKeys,"state")}}catch(n){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!1,o.commissioningTaskLock=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!1,o.commissioningTaskLock=""):e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!1,o.commissioningTaskLock=""):e==="airPurgeStart"?(o.pendingAirPurgeStart=!1,o.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock=""):e==="manualFlowStart"?(o.pendingManualFlowStart=!1,o.commissioningTaskLock=""):e==="manualHpStart"&&(o.pendingManualHpStart=!1,o.commissioningTaskLock=""),o.controlError=`${t.errorPrefix||`Actie mislukt voor "${r.name}"`}. ${n.message}`}finally{o.busyAction="",f(),e==="hpWaterCalibrationApply"&&rT()}}}function xu(e){let t=o.root?o.root.querySelector(".oq-helper-curve-svg"):null;if(!t||!o.draggingCurveKey)return;let r=t.getBoundingClientRect(),n=22,a=180,i=(e-r.top)/r.height*240,c=70-(Math.min(n+a,Math.max(n,i))-n)/a*50,u=be(o.draggingCurveKey,c);String(T(o.draggingCurveKey))!==String(u)&&(o.drafts[o.draggingCurveKey]=u,f())}var nT={"select-settings-option":e=>{let t=e.dataset.selectKey||"",r=e.dataset.selectOption||"";t&&r&&String(T(t)||"")!==r&&fa(t,r)},"toggle-overview-control":e=>{let t=e.dataset.controlKey||"",r=(e.dataset.controlState||"").toLowerCase();t&&(r==="on"||r==="off")&&os(t,r==="on")},"select-overview-control-option":e=>{let t=e.dataset.controlKey||"",r=e.dataset.controlOption||"";t&&r&&String(T(t)||"")!==r&&fa(t,r)},"suggest-curve-fallback":()=>{let e=Pa();e&&ha("curveFallbackSupply",e.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.")},apply:()=>Cu("apply"),reset:()=>Cu("reset")};function jh(e,t){return ie(nT,e,t)}var aT=[{actions:["commissioningCm100Start","commissioningCm100Stop"],keys:["commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive"]},{actions:["boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply"],keys:["commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower"]},{actions:["flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply"],keys:["commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi"]},{actions:["airPurgeStart","airPurgeAbort"],keys:["commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode"]},{actions:["hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply"],keys:["commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode"]},{actions:["manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling"],keys:["commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint"]},{actions:["manualHpStart","manualHpAbort"],keys:["commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"]}];function iT(e){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!0,o.commissioningTaskLock="cm100",o.commissioningBoilerHeatPowerDisplay=""):e==="commissioningCm100Stop"?(o.pendingCommissioningCm100Start=!1,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="",o.commissioningBoilerHeatPowerDisplay=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!0,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="boiler",o.commissioningBoilerHeatPowerDisplay=""):e==="boilerPowerTestAbort"||e==="boilerPowerTestApply"?o.commissioningTaskLock="boiler":e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="autotune"):e==="flowAutotuneAbort"||e==="flowAutotuneApply"?o.commissioningTaskLock="autotune":e==="airPurgeStart"?(o.pendingAirPurgeStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="purge"):e==="airPurgeAbort"?o.commissioningTaskLock="purge":e==="manualFlowStart"?(o.pendingManualFlowStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-flow"):e==="manualFlowAbort"?o.commissioningTaskLock="manual-flow":e==="manualHpStart"?(o.pendingManualHpStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-hp"):e==="manualHpAbort"?o.commissioningTaskLock="manual-hp":e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.commissioningTaskLock="hp-water-calibration"):(e==="hpWaterCalibrationAbort"||e==="hpWaterCalibrationApply")&&(o.commissioningTaskLock="hp-water-calibration")}function sT(e){if(e==="acknowledgeCompressorCyclingAlert")return{refreshKeys:[...hn]};let t=aT.find(({actions:r})=>r.includes(e));if(t)return{refreshKeys:[...t.keys]};if(Ta.has(e)){let r=Bu(e);if(r){let n=e.endsWith("Load");return{refreshKeys:ds(r),refreshDelayMs:n?1200:3200,successNotice:n?`HP${r} ODU runtime tabel lezen aangevraagd.`:`HP${r} ODU runtime write aangevraagd; controleer status/readback.`,errorPrefix:`ODU runtime actie mislukt voor HP${r}`}}}return{}}function Wh(e,t){if(e!=="press-named-button")return!1;let r=String(t.dataset.oqButtonKey||t.dataset.buttonKey||t.getAttribute("data-oq-button-key")||"").trim();return r&&(iT(r),un(r,sT(r))),!0}var Vh=10080*60*1e3;function Bh(e){o.controlReplayGraphMinute=e==="week"?1230:e==="today"||e==="yesterday"?720:1e3}function Kh(e){let t=new Date(String(e||"")).getTime();return Number.isFinite(t)?t:Number.NaN}var lT={"select-control-replay-tab":({button:e})=>{let t=e.dataset.replayTab||"status";o.controlReplayTab=Vs(t)||"status",o.appView==="control"&&Qo("push"),f()},"select-control-replay-window":({button:e})=>{let t=Bs(e.dataset.replayWindow||"")||"last24";t!=="custom"&&(o.controlReplayWindow=t,o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,o.controlReplayCustomPeriodError="",Bh(t),o.appView==="control"&&Qo("push")),f()},"toggle-control-replay-period-menu":()=>{o.controlReplayPeriodMenuOpen=!o.controlReplayPeriodMenuOpen,o.controlReplayCustomPeriodOpen=o.controlReplayPeriodMenuOpen&&o.controlReplayWindow==="custom",o.controlReplayCustomPeriodError="",f()},"toggle-control-replay-custom-period":()=>{o.controlReplayCustomPeriodOpen=!o.controlReplayCustomPeriodOpen,o.controlReplayCustomPeriodError="",f()},"apply-control-replay-custom-period":({button:e})=>{let t=e.closest("[data-oq-control-replay-period-menu]"),r=String(t?.querySelector("[data-oq-control-replay-custom-start-date]")?.value||""),n=String(t?.querySelector("[data-oq-control-replay-custom-start-hour]")?.value||""),a=String(t?.querySelector("[data-oq-control-replay-custom-end-date]")?.value||""),i=String(t?.querySelector("[data-oq-control-replay-custom-end-hour]")?.value||""),l=`${r}T${n}:00`,c=`${a}T${i}:00`,u=Kh(l),p=Kh(c);if(!Number.isFinite(u)||!Number.isFinite(p)||p<=u){o.controlReplayCustomPeriodError="Kies een eindtijd na de starttijd.",f();return}if(p-u>Vh){o.controlReplayCustomPeriodError="Een eigen periode mag maximaal 7 dagen beslaan.",f();return}let g=Date.now();if(u<g-Vh||p>g+60*1e3){o.controlReplayCustomPeriodError="Kies een periode binnen de laatste 7 dagen.",f();return}o.controlReplayCustomStart=l,o.controlReplayCustomEnd=c,o.controlReplayCustomPeriodError="",o.controlReplayWindow="custom",o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,Bh("custom"),o.appView==="control"&&Qo("push"),f()},"select-control-replay-episode":({button:e})=>{o.controlReplaySelectedEpisode=e.dataset.replayEpisode||"",f()},"toggle-control-replay-support-details":({button:e,event:t})=>{t.preventDefault();let r=e.closest(".oq-working-support"),n=r?.dataset.replaySupportItem||"";o.controlReplaySupportDetailsItemId=r&&r.hasAttribute("open")?"":n,f()}};function zh(e,t,r){return ie(lT,e,{button:t,event:r})}async function cT(){let e=O.checkFirmwareUpdates;if(e){o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateCheckBusy=!0,o.controlError="",o.controlNotice="",f();try{await ba("current build",{poll:!1,force:!0}),On();let t=await fetch(Q(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await In(),o.controlNotice="Firmwarecontrole bijgewerkt."}catch(t){o.controlError=`Firmwarecontrole mislukte. ${t.message}`}finally{o.updateCheckBusy=!1,f()}}}async function uT(){try{await V(Yt,"all",{concurrency:Ut,forceMissing:!0}),o.updateModalOpen&&f()}catch{}}async function ba(e,t={}){let r=O.firmwareUpdateTarget;if(!r||!v("firmwareUpdateTarget"))return!1;let n=String(e||"").trim();if(!n)return!1;if(!t.force&&String(T("firmwareUpdateTarget")||"").trim()===n)return!0;o.entities.firmwareUpdateTarget={...o.entities.firmwareUpdateTarget||{},state:n,value:n};let a=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.poll!==!1?(On(),await In({expectedBuildLabel:t.expectedBuildLabel||""})):!0}async function dT(){let e=me();if(e){o.firmwareAdvancedOpen=!1,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,Te(),Ze(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=io(e),Ot(),o.updateInstallMode="normal",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",f();try{await ba("current build",{poll:!1,force:!0}),o.updateInstallTargetVersion=io(me()||{})||o.updateInstallTargetVersion,Wr();let t=O.installFirmwareUpdateTarget,r=t&&v("installFirmwareUpdateTarget")?Q(t.domain,t.name,"press"):Q("update","Firmware Update","install"),n=await fetch(r,{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);await ur({initialDelayMs:fo,pollDelayMs:Ar})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=se()||o.updateInstallTargetVersion,o.controlNotice=""):o.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(t){o.controlError=`OTA-update is mislukt. ${t.message}`}finally{lr(),f()}}}async function Gh(){let e=Xa(),t=O.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareConnectionSwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",f();return}o.updateManualUploadOpen=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Te(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="connection-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=oe(),o.updateInstallTargetVersion=se()||"",Ot(),o.controlError="",o.controlNotice="",f();try{if(!await ba("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=io(me()||{})||se()||"",Ot(),f(),Wr();let n=await fetch(Q(t.domain,t.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await ur({initialDelayMs:fo,pollDelayMs:Ar}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=se()||o.updateInstallTargetVersion||"",o.firmwareConnectionSwitchConfirmed=!1,o.controlNotice="";else{let i=it(e.targetConnection);o.controlNotice=`Verbindingswissel naar ${i} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(r){o.controlError=`Verbindingswissel is mislukt. ${r.message}`}finally{lr(),f()}}}async function Qh(){let e=ei(),t=O.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareTopologySwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",f();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Te(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="topology-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=se()||"",Ot(),o.controlError="",o.controlNotice="",f();try{if(!await ba("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=io(me()||{})||se()||"",Ot(),f(),Wr();let n=await fetch(Q(t.domain,t.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(await ur({initialDelayMs:fo,pollDelayMs:Ar}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=se()||o.updateInstallTargetVersion||"",o.firmwareTopologySwitchConfirmed=!1,o.controlNotice="";else{let i=er(e.targetTopology);o.controlNotice=`Opstellingswissel naar ${i} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(r){o.controlError=`Opstellingswissel is mislukt. ${r.message}`}finally{lr(),f()}}}async function pT(e){let t=O.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,Te(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="build-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=se()||"",Ot(),o.controlError="",o.controlNotice="",f();try{if(!await ba(e.targetOption,{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=io(me()||{})||se()||"",Ot(),f(),Wr();let n=await fetch(Q(t.domain,t.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);await ur({initialDelayMs:fo,pollDelayMs:Ar})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=se()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice=`Setupwissel naar ${e.targetBuildLabel} is gestart. Wacht tot het device opnieuw bereikbaar is.`}catch(r){o.controlError=`Setupwissel is mislukt. ${r.message}`}finally{lr(),f()}}}async function Yh(){let[e,t]=String(o.quickStartSetupDraft||"").split(":"),r=ti(e,t);if(!r.available||r.targetOption==="current build"){o.currentStep="generation",f();return}if(!o.quickStartSetupConfirmed){o.controlError="Bevestig eerst dat de gekozen setup klaar is voor gebruik.",f();return}if(!r.canSwitch){o.controlError="Deze firmware kan de gekozen setup nog niet direct installeren. Werk de firmware eerst bij.",f();return}r.targetOption==="alternate connection"?(o.firmwareConnectionSwitchConfirmed=!0,await Gh()):r.targetOption==="alternate topology"?(o.firmwareTopologySwitchConfirmed=!0,await Qh()):await pT(r)}async function mT(e,t){let r=Nn(e,t);if(!r)throw new Error("Geen geldig PR-target gevonden.");let n=await fetch(r.releaseApiUrl,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});if(n.status===404)throw new Error(`Geen testfirmware gevonden voor PR ${e}. Controleer of het label de build al heeft gepubliceerd.`);if(!n.ok)throw new Error(`GitHub API gaf HTTP ${n.status}`);let a=await n.json(),i=Array.isArray(a.assets)?a.assets:[],l=i.find(g=>g&&g.name===t.otaFileName),c=i.find(g=>g&&g.name===t.md5FileName);if(!l||!l.browser_download_url)throw new Error(`PR ${e} bevat geen OTA-build voor ${t.label}.`);if(!c||!c.browser_download_url)throw new Error(`PR ${e} mist de md5-controle voor ${t.label}.`);let u=String(a.name||a.tag_name||`PR ${e}`).trim(),p=String(l.updated_at||a.published_at||"").trim();return{otaUrl:l.browser_download_url,md5Url:c.browser_download_url,label:p?`${u} \xB7 ${p.replace("T"," ").replace("Z"," UTC")}`:u}}async function Uh(e,t){if(!v(e))throw new Error(`${O[e]?.name||e} is niet beschikbaar op deze firmware.`);let r=await Wt(e,t);o.entities[e]={...o.entities[e]||{},state:r,value:r}}async function gT(){let e=sr(),t=jr(),r=O.installFirmwareTestOta;if(!e){o.updateTestFirmwareError="Vul een geldig PR-nummer in.",f();return}if(!t.available){o.updateTestFirmwareError=t.error||"Dit firmwaretarget wordt niet herkend.",f();return}if(!o.updateTestFirmwareConfirmed){o.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",f();return}if(!r||!v("installFirmwareTestOta")){o.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",f();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Te(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion="",Ot(),o.updateInstallMode="test-firmware",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null,f();let n=!1;try{let a=await mT(e,t);o.updateTestFirmwareBuild=a.label,f(),await Uh("firmwareTestOtaUrl",a.otaUrl),await Uh("firmwareTestOtaMd5Url",a.md5Url),n=!0,Wr();let i=await fetch(Q(r.domain,r.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);await ur({initialDelayMs:fo,pollDelayMs:Ar})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=se()||`PR ${e}`,o.updateTestFirmwareOpen=!1,Ze(),o.controlNotice=""):o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){n&&vl(a.message)?o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:o.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{lr(),f()}}async function fT(){let e=o.updateManualUploadFile;if(!e){o.updateManualUploadError="Kies eerst een firmwarebestand.",f();return}o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=se()||"",Ot(),o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateManualUploadError="",f();try{let t=new FormData;t.append("update",e,e.name||"firmware.bin");let r=await fetch("/update",{method:"POST",body:t});if(!r.ok)throw new Error(`HTTP ${r.status}`);o.updateManualUploadOpen=!1,Te(),await ur()?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=se()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(t){o.updateManualUploadError=`Handmatige upload mislukte. ${t.message}`}finally{lr(),f()}}var hT={"open-update-modal":()=>(o.updateModalOpen=!0,f(),uT()),"close-update-modal":()=>{o.updateModalOpen=!1,o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,Te(),Ze(),f()},"run-firmware-check":()=>cT(),"install-firmware-update":()=>dT(),"install-firmware-connection-switch":()=>Gh(),"install-firmware-topology-switch":()=>Qh(),"toggle-firmware-advanced":()=>{o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen?(o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Te(),Ze()):o.firmwareAdvancedOpen=!0,f()},"toggle-firmware-connection-switch":()=>{o.firmwareConnectionSwitchOpen=!o.firmwareConnectionSwitchOpen,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareConnectionSwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Te(),Ze()),f()},"toggle-firmware-topology-switch":()=>{o.firmwareTopologySwitchOpen=!o.firmwareTopologySwitchOpen,o.firmwareTopologySwitchConfirmed=!1,o.firmwareTopologySwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Te(),Ze()),f()},"toggle-firmware-upload":()=>{o.updateManualUploadOpen?(o.updateManualUploadOpen=!1,Te()):(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateTestFirmwareOpen=!1,Ze(),o.updateManualUploadError=""),f()},"upload-firmware-file":()=>fT(),"toggle-firmware-test":()=>{o.updateTestFirmwareOpen?(o.updateTestFirmwareOpen=!1,Ze()):(o.firmwareAdvancedOpen=!0,o.updateTestFirmwareOpen=!0,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Te(),o.updateTestFirmwareError=""),f()},"install-firmware-test":()=>gT()};function Jh(e){return ie(hT,e)}function bT(e=o.currentStep){let t=["setupComplete","strategy","usageTelemetryEnabled","usageTelemetryChoiceConfigured",...nt];return e==="setup"?[...new Set([...t,...Yt])]:e==="generation"?[...new Set([...t,"installationTopology",...Mr,"hpGeneration"])]:e==="flow-source"?[...new Set([...t,"hpGeneration",...wt])]:e==="thermostat-source"?[...new Set([...t,...Io])]:e==="boiler"?[...new Set([...t,"boilerCvAssistEnabled","boilerRatedHeatPower"])]:e==="strategy"?[...new Set([...t,"strategy"])]:e==="heating"?[...new Set([...t,...At,...Fo,"dayMax","silentMax"])]:e==="flow"?[...new Set([...t,...rt,...$r])]:e==="water"?[...new Set([...t,"maxWater"])]:e==="silent"?[...new Set([...t,...jo])]:e==="usage-telemetry"?[...new Set([...t,"usageTelemetryEnabled","usageTelemetryChoiceConfigured"])]:e==="confirm"?[...new Set([...t,"installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...wt,...Io,...rt,...$r,...At,...Fo,"maxWater",...jo])]:t}async function $u(e=o.currentStep){let t=bT(e);try{await V(t,"all",{concurrency:Gt}),o.quickStartModalOpen&&o.currentStep===e&&!o.nativeOpen&&f()}catch{}}async function Zh(){if(Ph({stepId:o.currentStep,telemetryAvailable:v("usageTelemetryEnabled"),choiceAvailable:v("usageTelemetryChoiceConfigured"),choiceValue:T("usageTelemetryChoiceConfigured")})){o.busyAction="switch-usageTelemetryEnabled",o.controlNotice="",o.controlError="",f();try{if(await ns("usageTelemetryEnabled",!0),await V(["usageTelemetryEnabled","usageTelemetryChoiceConfigured"],"all"),!cn({telemetryValue:T("usageTelemetryEnabled"),choiceValue:T("usageTelemetryChoiceConfigured"),expectedEnabled:!0}))throw new Error("De controller heeft de keuze niet bevestigd.")}catch(e){let t=!1;try{await ns("usageTelemetryEnabled",!1),await V(["usageTelemetryEnabled","usageTelemetryChoiceConfigured"],"all"),t=cn({telemetryValue:T("usageTelemetryEnabled"),choiceValue:T("usageTelemetryChoiceConfigured"),expectedEnabled:!1})}catch{}t?o.controlNotice="De standaardkeuze kon niet worden ingeschakeld. Delen is bevestigd uitgeschakeld; je kunt doorgaan of het opnieuw inschakelen.":o.controlError=`De keuze kon niet veilig worden bevestigd. Controleer de verbinding en probeer opnieuw. ${e.message}`}finally{o.busyAction="",f()}}}async function Xh(){let e=rn();if(!e.canApply){o.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",f();return}o.busyAction="quickstart-flow-source",o.controlNotice="",o.controlError="",f();let t=async(r,n)=>{if(!v(r))return;let a=T(r);if(typeof n=="boolean"&&C(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await Wt(r,n);o.entities[r]={...o.entities[r]||{},value:i,state:i}};try{e.requiresCic?(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),await t("flowSource","CIC"),o.quickStartCicFeedUrlDraft=null,o.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await t("qFlowSource",e.qFlowTarget),await t("flowSource","Outdoor unit"),o.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await V(wt,"all")}catch(r){o.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{o.busyAction="",f()}}async function eb(){o.busyAction="quickstart-flow-refresh",o.controlNotice="",o.controlError="",f();try{await V(wt,"all");let e=rn();o.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){o.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{o.busyAction="",f()}}async function ns(e,t){let r=O[e];if(!r||!v(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");let n=await fetch(Q(r.domain,r.name,t?"turn_on":"turn_off"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`)}async function wT(){let e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(r=>{o.optionalMissingEntities&&delete o.optionalMissingEntities[r],delete o.entities[r]}),await V(e,"all");let t=e.filter(r=>!o.entities[r]);if(t.length){let r=t.map(n=>O[n]?.name||n).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${r}.`)}}async function yT(){for(let e=0;e<40;e+=1){await new Promise(t=>window.setTimeout(t,1e3));try{await V(wt,"state")}catch{return}if(!C("quickFlowTest")){o.busyAction!=="quickstart-flow-test-abort"&&(o.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),f();return}}}async function tb(){if(!rn().canRunFlowTest){o.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",f();return}o.busyAction="quickstart-flow-test-start",o.controlNotice="",o.controlError="",f();let t=!1;try{if(await wT(),!C("cm100Active")){let a=O.commissioningCm100Start,i=await fetch(Q(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);t=!0}let r=C("cm100Active")&&String(T("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!r&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await V(["commissioningStatus","cm100Active"],"state"),r=C("cm100Active")&&String(T("commissioningStatus")||"").trim()==="CM100 READY";if(!r){let a=String(T("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await ns("quickFlowTest",!0),await V(wt,"all");let n=String(T("commissioningStatus")||"").trim();if(!C("quickFlowTest"))throw new Error(n||"De waterpomptest kon niet worden gestart.");o.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",yT()}catch(r){if(t&&!C("quickFlowTest"))try{let n=O.commissioningCm100Stop;await fetch(Q(n.domain,n.name,"press"),{method:"POST"})}catch{}o.controlError=`Waterpomptest starten mislukt. ${r.message}`}finally{o.busyAction="",f()}}async function ob(){o.busyAction="quickstart-flow-test-abort",o.controlNotice="",o.controlError="",f();try{await ns("quickFlowTest",!1),await V(wt,"all"),o.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){o.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{o.busyAction="",f()}}async function rb(){let e=_i();if(!e.canApply){o.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",f();return}o.busyAction="quickstart-thermostat-source",o.controlNotice="",o.controlError="",f();let t=async(r,n)=>{if(!v(r))return;let a=T(r);if(typeof n=="boolean"&&C(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await Wt(r,n);o.entities[r]={...o.entities[r]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await t("otEnabled",!0):e.selectedSource==="CIC"&&(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),o.quickStartCicFeedUrlDraft=null),await t("roomTempSource",e.selectedSource),await t("roomSetpointSource",e.selectedSource),o.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await V(Io,"all")}catch(r){o.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{o.busyAction="",f()}}var as="quickstart-usage-telemetry-prepare",Mu=0;async function Au(e){let t=++Mu,r=e==="usage-telemetry";if(r){if(o.busyAction&&o.busyAction!==as)return;o.busyAction=as,f()}else o.busyAction===as&&(o.busyAction="",f());try{if(await $u(e),t!==Mu||o.currentStep!==e)return;r&&await Zh()}finally{t===Mu&&o.busyAction===as&&(o.busyAction="",f())}}function nb(e){af(e),o.currentStep==="usage-telemetry"&&(o.controlError="",o.controlNotice=""),f(),Au(o.currentStep)}var vT={"close-quickstart-modal":()=>{o.quickStartModalOpen=!1,f()},"open-quickstart-modal":()=>{o.currentStep="setup",o.quickStartModalMode="wizard",o.quickStartModalOpen=!0,f()},"open-generation-modal":()=>{o.currentStep="generation",o.quickStartModalMode="generation",o.quickStartModalOpen=!0,f()},"select-step":e=>{o.currentStep=e.dataset.stepId||"generation",o.currentStep==="usage-telemetry"&&(o.controlError="",o.controlNotice=""),f(),Au(o.currentStep)},"select-quickstart-setup":e=>{o.quickStartSetupDraft=e.dataset.setupTarget||"",o.quickStartSetupConfirmed=!1,o.controlError="",o.controlNotice="",f(),$u("setup")},"install-quickstart-setup":()=>Yh(),"apply-quickstart-flow-source":()=>Xh(),"refresh-quickstart-flow-signal":()=>eb(),"start-quickstart-flow-test":()=>tb(),"abort-quickstart-flow-test":()=>ob(),"apply-quickstart-thermostat-source":()=>rb(),"retry-usage-telemetry-choice":()=>Au("usage-telemetry"),"confirm-no-usage-telemetry":()=>os("usageTelemetryEnabled",!1),"previous-step":()=>nb(-1),"next-step":()=>nb(1)};function ab(e,t){return ie(vT,e,t)}function ST(){Xt(),pr(),o.systemModal="",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authNotice="",o.authError="",o.apiSecurityNotice="",o.apiSecurityError="",Jn(),f(),jn()}var qT={"open-connectivity-modal":()=>{o.systemModal="connectivity",f()},"open-restart-confirm":()=>{o.systemModal="restart-confirm",f()},"open-silent-settings-modal":()=>{o.systemModal="silent-settings",f()},"open-openquatt-pause-modal":()=>{o.pauseResumeDraft=_a(),o.systemModal="openquatt-pause",f()},"enable-openquatt-now":()=>Fh(),"apply-openquatt-preset":e=>{let t=Es(e.dataset.pausePreset||"");o.pauseResumeDraft=t,rs(t)},"apply-openquatt-indefinite":()=>rs(""),"apply-openquatt-custom-pause":()=>{if(!String(o.pauseResumeDraft||"").trim()){o.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",f();return}rs(o.pauseResumeDraft||"")},"close-system-modal":()=>ST(),"confirm-restart":()=>un("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})};function ib(e,t){return ie(qT,e,t)}function kT(e){let t=e.dataset.surface==="native";if(o.nativeOpen===t)return o.nativeOpen?ui():void 0;o.nativeOpen=t,Ul(o.nativeOpen?"native":"app"),o.controlError="",o.controlNotice="",o.settingsInfoOpen="",Me({updateModalOpen:!1,firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareTopologySwitchOpen:!1,updateManualUploadOpen:!1,updateTestFirmwareOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchConfirmed:!1}),Te(),Ze(),Xt(),o.systemModal="";let r=o.nativeOpen?ui():void 0;return f(),ci(),window.requestAnimationFrame(()=>{o.nativeOpen&&o.nativeApp?o.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):o.nativeOpen||window.scrollTo({top:0,behavior:"smooth"})}),r}var ET={"toggle-interface-panel":()=>{Wn(!o.interfacePanelOpen),f()},"select-surface":e=>kT(e)};function sb(e,t){return ie(ET,e,t)}function lb(){o.systemModal="",Pt("settings"),li("service"),f(),ye({forceFast:!0})}function TT(e){let t=String(e.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(t)&&(o.systemModal=`service-task-${t}`,f(),ye({forceFast:!0}))}function dn(e,t,r,n){e.preventDefault();let a=t.closest(r);o[n]=!(a&&a.hasAttribute("open")),f()}var CT={"select-view":e=>{if((e.dataset.viewId||"")==="diagnosis"&&!yt())return;let t=e.dataset.viewId||"overview";Pt(t,{syncMode:"push"}),f(),ye({forceFast:!0})},"select-trend-window":e=>{e.disabled||(Jr(Number(e.dataset.trendHours||24)),f(),uc({force:!0}).then(t=>{t&&f()}))},"select-energy-history-view":e=>{e.disabled||vf(e.dataset.energyHistoryView||"day")},"shift-energy-history-period":e=>{e.disabled||Tf(o.energyHistoryView||"day",e.dataset.energyHistoryDirection||"1")},"select-energy-history-now":e=>{e.disabled||Cf(o.energyHistoryView||"day")},"select-settings-group":e=>{li(e.dataset.groupId||fe[0].id),f(),ye({forceFast:!0})},"toggle-overview-theme":()=>{xm(o.overviewTheme==="light"?"dark":"light"),f()},"select-hp-visual":e=>{$m(e.dataset.hpVisual==="compact"?"compact":"schematic"),f()},"select-hp-layout":e=>{Mm(e.dataset.hpLayout||"equal"),f()},"toggle-installation-monitoring-details":(e,t)=>{dn(t,e,".oq-settings-monitoring-details","installationMonitoringDetailsOpen")},"toggle-integration-diagnostics":(e,t)=>{dn(t,e,".oq-settings-integration-diagnostics","integrationDiagnosticsOpen")},"toggle-odu-runtime-frequency-details":(e,t)=>{dn(t,e,".oq-settings-odu-runtime-details","oduRuntimeFrequencyDetailsOpen")},"toggle-usage-telemetry-details":(e,t)=>{dn(t,e,".oq-usage-disclosure--collapsible","usageTelemetryDetailsOpen")},"toggle-storage-technical-details":(e,t)=>{dn(t,e,".oq-settings-storage-technical","settingsStorageDetailsOpen")},"toggle-storage-advanced":(e,t)=>{dn(t,e,".oq-settings-storage-advanced","settingsStorageAdvancedOpen")},"open-cm100-commissioning-modal":()=>lb(),"open-installation-monitoring":()=>lb(),"open-service-task-modal":e=>TT(e)};function cb(e,t,r){return ie(CT,e,t,r)}var xT=[cb,zh,ab,Em,Rd,qp,e=>wg(e,{triggerNamedButton:un}),Jh,jh,am,ib,Wh,sb];function db(){window.setTimeout(()=>{let e=document.activeElement;o.focusedField=e&&e.dataset&&e.dataset.oqField||"",o.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot"))},0)}function pb(e){e.target.closest(".oq-ph-concept-hotspot")&&(o.settingsInteractionLock=!0)}function mb(e){let t=e.target.closest(".oq-ph-concept-hotspot");if(!t||e.relatedTarget&&t.contains(e.relatedTarget))return;let r=o.root&&o.root.querySelector(".oq-ph-concept-hotspot:hover"),n=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;o.settingsInteractionLock=!!(r||n)}function gb(e){if(e.target.dataset.oqQuickstartSetupConfirm){o.quickStartSetupConfirmed=!!e.target.checked,f();return}if(e.target.dataset.oqFirmwareConnectionConfirm){Me({firmwareConnectionSwitchConfirmed:!!e.target.checked}),f();return}if(e.target.dataset.oqFirmwareTopologyConfirm){Me({firmwareTopologySwitchConfirmed:!!e.target.checked}),f();return}if(e.target.dataset.oqFirmwareTestConfirm){Me({updateTestFirmwareConfirmed:!!e.target.checked,updateTestFirmwareError:""});let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!o.updateTestFirmwareConfirmed||!sr()),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){Me({updateTestFirmwarePr:String(e.target.value||""),updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null});let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-firmware-test-confirm="true"]');a&&(a.checked=!1);let i=n?.querySelector('[data-oq-action="install-firmware-test"]');i&&(i.disabled=!0);let l=jr(),c=Nn(sr(),l),u=n?.querySelector('[data-oq-firmware-test-asset-note="true"]');u&&(u.textContent=c?l.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),n?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqMqttField){vp(e.target);return}if(e.target.dataset.oqBackupMqttPassword!==void 0){o.settingsBackupMqttPassword=String(e.target.value||""),o.settingsBackupError="";let n=e.target.closest(".oq-helper-modal")?.querySelector('[data-oq-action="confirm-settings-backup-restore"]');n&&(n.disabled=!o.settingsBackupMqttPassword,n.textContent=o.settingsBackupMqttPassword?"Herstellen":"Vul MQTT-wachtwoord in"),e.target.closest(".oq-helper-modal")?.querySelector(".oq-settings-backup-error")?.remove();return}let r=e.target.dataset.oqField;if(!r){if(e.target.dataset.oqQuickstartCicUrl!==void 0){o.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){o.quickStartThermostatSourceDraft=String(e.target.value||""),f();return}let n=e.target.dataset.oqAuthField;if(n){o.authNotice="",o.authError="",n==="username"?o.authDraftUsername=String(e.target.value||""):n==="currentPassword"?o.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?o.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(o.authDraftConfirmPassword=String(e.target.value||""));return}return}if(e.target.dataset.oqPauseDraft){o.pauseResumeDraft=String(e.target.value||"");return}if(O[r]?.domain==="text"){o.inputDrafts[r]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(o.inputDrafts[r]=e.target.value);let n=Re(e.target.value);if(!Number.isNaN(n)){let a=be(r,e.target.value);if(o.drafts[r]=a,e.target.type==="range"){let i=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");i&&(i.textContent=J(r,a))}}}}function fb(e){Wg(e)}function ub(e,t){return e.deltaMode===1?t*16:e.deltaMode===2?t*window.innerHeight:t}function $T(e){let t=e?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){let r=window.getComputedStyle(t),n=/(auto|scroll)/.test(r.overflowY)&&t.scrollHeight>t.clientHeight,a=/(auto|scroll)/.test(r.overflowX)&&t.scrollWidth>t.clientWidth;if(n||a)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function hb(e){let t=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!t||!o.root||!o.root.contains(t)||document.activeElement!==t)return;e.preventDefault(),t.blur();let r=$T(t);r&&typeof r.scrollBy=="function"&&r.scrollBy({left:ub(e,e.deltaX||0),top:ub(e,e.deltaY||0),behavior:"auto"})}function bb(e){if(e.target.dataset.oqBackupFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",hg(n);return}if(e.target.dataset.oqFirmwareUploadFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",n?Me({firmwareAdvancedOpen:!0,updateManualUploadOpen:!0,updateManualUploadFile:n,updateManualUploadFileName:n.name||"",updateManualUploadError:""}):Te(),f();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof ra=="function"&&ra(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}if(e.target.dataset.oqEnergyHistoryExportMode!==void 0){_t({energyHistoryExportMode:Zr(e.target.value),energyHistoryExportError:"",energyHistoryExportNotice:""}),f();return}let t=e.target.dataset.oqField;if(!t)return;let r=O[t];if(r){if(r.domain==="select"){fa(t,String(e.target.value));return}if(r.domain==="number"){ha(t,e.target.value);return}if(r.domain==="text"){Dh(t,e.target.value);return}if(r.domain==="time"){let n=Rt(e.target.value);if(!n){o.controlError=`${r.name} verwacht tijd als HH:MM.`,f();return}Nh(t,n);return}if(r.domain==="datetime"){let n=Ge(e.target.value);if(!n){o.controlError=`${r.name} verwacht datum en tijd.`,f();return}Ih(t,n);return}}}function wb(e){let t=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(t){let g=t.querySelector("input[data-oq-field]");if(g&&(g.type==="time"||g.type==="datetime-local")&&typeof g.showPicker=="function")try{g.showPicker()}catch{}}let r=e.target.closest('[data-oq-action="toggle-settings-info"]'),n=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-control-replay-period-menu]"),l=e.target.closest("[data-oq-modal]");if(r){let g=r.dataset.infoId||"";o.settingsInfoOpen=o.settingsInfoOpen===g?"":g,f();return}let c=e.target.closest("[data-oq-action]"),u=o.interfacePanelOpen&&!a;if(!c){let g=!1;if(o.settingsInfoOpen&&!n&&(o.settingsInfoOpen="",g=!0),u&&(Wn(!1),g=!0),o.controlReplayPeriodMenuOpen&&!i&&(o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,g=!0),l&&e.target===l){if(l.dataset.oqModal==="quickstart-forced")return;o.updateModalOpen&&(Me({updateModalOpen:!1,firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareTopologySwitchOpen:!1,updateManualUploadOpen:!1,updateTestFirmwareOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchConfirmed:!1}),Te(),Ze(),g=!0),o.systemModal&&(Jn(),Xt(),o.systemModal="",g=!0)}g&&f();return}u&&c.dataset.oqAction!=="toggle-interface-panel"&&Wn(!1);let p=c.dataset.oqAction;xT.some(g=>g(p,c,e))||Sd(p,c)}function MT(e){let t=Math.max(0,Math.min(1440,Math.round(e/5)*5));!Number.isNaN(t)&&o.controlReplayGraphMinute!==t&&(o.controlReplayGraphMinute=t,f())}function yb(e,t){let r=t||o.root?.querySelector("[data-oq-control-replay-scrub]");if(!r)return;let n=r.getBoundingClientRect();if(!n.width)return;let a=Math.max(0,Math.min(1,(e-n.left)/n.width));MT(a*1440)}function vb(e){let t=e.target.closest("[data-oq-control-replay-scrub]");if(t){o.controlReplayScrubbing=!0,e.preventDefault(),yb(e.clientX,t);return}let r=e.target.closest("[data-curve-key]");!r||!ae()||(o.draggingCurveKey=r.dataset.curveKey||"",xu(e.clientY))}function Sb(e){if(typeof Pc=="function"&&Pc(e),o.controlReplayScrubbing){e.preventDefault(),yb(e.clientX);return}o.draggingCurveKey&&xu(e.clientY)}function qb(){if(o.controlReplayScrubbing){o.controlReplayScrubbing=!1;return}if(!o.draggingCurveKey)return;let e=o.draggingCurveKey,t=be(e,T(e));o.draggingCurveKey="",ha(e,t,"Curvepunt bijgewerkt.")}Bd({handleChange:bb,handleClick:wb,handleFocusChange:db,handleInput:gb,handleKeyDown:fb,handlePointerDown:vb,handlePointerMove:Sb,handlePointerUp:qb,handleSettingsInteractionEnd:mb,handleSettingsInteractionStart:pb,handleWheel:hb});Hm();})();
