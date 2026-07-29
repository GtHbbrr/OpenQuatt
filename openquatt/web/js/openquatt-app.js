/* Generated minified bundle: js/openquatt-app.js. */
/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */
(()=>{var Fs={main:"https://github.com/OpenQuatt/OpenQuatt/releases/latest",dev:"https://github.com/OpenQuatt/OpenQuatt/releases/tag/dev-latest"},js="https://oi.esphome.io/v3/www.js",Gt=2,Qt=4,Rn=6e4,Va="Power House",Ka="Water Temperature Control (heating curve)",Or=[["setup","Kies je setup","Controleer of je Q-edition als Single of Duo en via Wi-Fi of Ethernet moet werken."],["generation","Kies je Quatt Hybrid","Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar."],["flow-source","Flowmeting configureren","Controleer en activeer de flowbron die bij jouw Quatt-versie en controller hoort."],["thermostat-source","Thermostaatgegevens configureren","Leg vast waar OpenQuatt de kamertemperatuur en het kamer-setpoint samen vandaan haalt."],["boiler","CV-ketel of boiler","Leg vast of er een ketel is en hoe die fysiek is aangesloten.","boilerCvAssistEnabled"],["strategy","Kies de verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs."],["heating","Werk de regeling uit","Stel nu de gekozen regeling verder in. De inhoud hieronder past zich aan aan je keuze."],["flow","Flowregeling en afstelling","Leg daarna vast hoe de pomp geregeld moet worden en welke waarden daarbij horen. De autotune staat later onder Instellingen \u2192 Installatie \u2192 Service & commissioning."],["water","Watertemperatuur beveiligen","Controleer de normale bovengrens en de tripgrens voor het watercircuit."],["silent","Stille uren en niveaus","Stel daarna het stille venster en de compressorlimieten voor dag en nacht in."],["usage-telemetry","Gebruiksstatistieken","Kies of OpenQuatt beperkte technische gebruiksstatistieken mag delen. Tijdens een nieuwe Quick Start staat delen standaard aan.","usageTelemetryEnabled"],["confirm","Bevestigen en afronden","Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid."]].map(([e,t,r,n],a)=>({id:e,kicker:`Stap ${a+1}`,title:t,copy:r,...n?{optionalEntity:n}:{}})),Hn=[1,2],Pr=Array.from({length:11},(e,t)=>t),za=["cooling","heating"];function nw(e){return e==="cooling"?"cooling":"heating"}function aw(e){return e==="cooling"?"Cooling":"Heating"}function zo(e,t,r){return`hp${e}OduRuntime${aw(t)}F${r}`}function _e(e,t){return`hp${e}OduRuntimeFrequency${t}`}function Ws(e){return[_e(e,"Enable"),_e(e,"Load"),_e(e,"Apply"),_e(e,"Status"),...za.flatMap(t=>Pr.map(r=>zo(e,t,r)))]}function Ed(e){let t=String(e||"").match(/^hp([12])OduRuntimeFrequency(?:Load|Apply)$/);return t?Number(t[1]):0}var Ua=Hn.flatMap(Ws),Ga=new Set(Hn.flatMap(e=>[_e(e,"Load"),_e(e,"Apply")])),I={setupComplete:{domain:"binary_sensor",name:"Setup Complete",optional:!0},status:{domain:"binary_sensor",name:"Status",optional:!0},firmwareUpdate:{domain:"update",name:"Firmware Update",optional:!0},firmwareUpdateChannel:{domain:"select",name:"Firmware Update Channel",optional:!0},firmwareUpdateTarget:{domain:"select",name:"Firmware Update Target",optional:!0},firmwareUpdateProgress:{domain:"sensor",name:"Firmware Update Progress",optional:!0},firmwareUpdateStatus:{domain:"text_sensor",name:"Firmware Update Status",optional:!0},firmwareTestOtaUrl:{domain:"text",name:"Firmware Test OTA URL",optional:!0},firmwareTestOtaMd5Url:{domain:"text",name:"Firmware Test OTA MD5 URL",optional:!0},checkFirmwareUpdates:{domain:"button",name:"Check Firmware Updates",optional:!0},installFirmwareTestOta:{domain:"button",name:"Install Firmware Test OTA",optional:!0},installFirmwareUpdateTarget:{domain:"button",name:"Install Firmware Update Target",optional:!0},restartAction:{domain:"button",name:"Restart",optional:!0},uptime:{domain:"sensor",name:"Uptime",optional:!0},uptimeReadable:{domain:"text_sensor",name:"Uptime readable",optional:!0},timeNowHhmm:{domain:"text_sensor",name:"Time now (HH:MM)",optional:!0},timeValid:{domain:"binary_sensor",name:"Time valid",optional:!0},ipAddress:{domain:"text_sensor",name:"IP Address",optional:!0},wifiSsid:{domain:"text_sensor",name:"WiFi SSID",optional:!0},projectVersionText:{domain:"text_sensor",name:"OpenQuatt Version",optional:!0},releaseChannelText:{domain:"text_sensor",name:"OpenQuatt Release Channel",optional:!0},installationTopology:{domain:"text_sensor",name:"OpenQuatt Installation Topology",optional:!0},hardwareProfileText:{domain:"text_sensor",name:"OpenQuatt Hardware Profile",optional:!0},hardwareRevisionText:{domain:"text_sensor",name:"OpenQuatt Hardware Revision",optional:!0},connectionText:{domain:"text_sensor",name:"OpenQuatt Connection",optional:!0},wifiSignal:{domain:"sensor",name:"WiFi Signal",optional:!0},espInternalTemp:{domain:"sensor",name:"ESP Internal Temperature",optional:!0},statusLedsEnabled:{domain:"switch",name:"Status LEDs enabled",optional:!0},usageTelemetryEnabled:{domain:"switch",name:"Usage statistics",optional:!0},usageTelemetryChoiceConfigured:{domain:"binary_sensor",name:"Usage statistics choice configured",optional:!0},usageTelemetryInstallationId:{domain:"text_sensor",name:"Usage statistics installation ID",optional:!0},hpGeneration:{domain:"select",name:"Quatt Hybrid version"},strategy:{domain:"select",name:"Heating Control Mode"},openquattEnabled:{domain:"switch",name:"OpenQuatt Enabled",optional:!0},boilerCvAssistEnabled:{domain:"switch",name:"Boiler assist enabled",optional:!0},boilerFaultFallbackEnabled:{domain:"switch",name:"Boiler fallback on heat-pump fault",optional:!0},boilerConnection:{domain:"select",name:"Boiler connection",optional:!0},otbConnectionAutoSelected:{domain:"binary_sensor",name:"OTB - Boiler Connection Auto-selected",optional:!0},otbConnectionMismatch:{domain:"binary_sensor",name:"OTB - Boiler Connection Mismatch",optional:!0},manualCoolingEnable:{domain:"switch",name:"Manual Cooling Enable",optional:!0},cicCompatibilityMode:{domain:"switch",name:"CiC Compatibility Mode",optional:!0},silentModeOverride:{domain:"select",name:"Silent Mode Override",optional:!0},controlModeOverride:{domain:"select",name:"CM Override",optional:!0},heatingEnableSelected:{domain:"binary_sensor",name:"Heating Enable (Selected)",optional:!0},heatingEnableValid:{domain:"binary_sensor",name:"Heating Enable Valid",optional:!0},heatingBlockedByThermostat:{domain:"binary_sensor",name:"Heating blocked by thermostat",optional:!0},coolingEnableValid:{domain:"binary_sensor",name:"Cooling Enable Valid",optional:!0},coolingEnableSelected:{domain:"binary_sensor",name:"Cooling Enable (Selected)",optional:!0},coolingRequestActive:{domain:"binary_sensor",name:"Cooling Request Active",optional:!0},coolingPermitted:{domain:"binary_sensor",name:"Cooling Permitted",optional:!0},coolingBlockReason:{domain:"text_sensor",name:"Cooling Block Reason",optional:!0},coolingGuardMode:{domain:"text_sensor",name:"Cooling Guard Mode",optional:!0},coolingDewPointSelected:{domain:"sensor",name:"Cooling Dew Point (Selected)",optional:!0},coolingDewPointSource:{domain:"select",name:"Cooling Dew Point Source",optional:!0},coolingDewPointHa:{domain:"sensor",name:"HA - Cooling Dew Point",optional:!0},coolingDewPointHaValid:{domain:"binary_sensor",name:"HA - Cooling Dew Point Valid",optional:!0},mqttCoolingDewPoint:{domain:"sensor",name:"MQTT Cooling Dew Point",optional:!0},mqttCoolingDewPointAge:{domain:"sensor",name:"MQTT Cooling Dew Point Age",optional:!0},mqttCoolingDewPointValid:{domain:"binary_sensor",name:"MQTT Cooling Dew Point Valid",optional:!0},coolingMinimumSafeSupplyTemp:{domain:"sensor",name:"Cooling Minimum Safe Supply Temp",optional:!0},coolingEffectiveMinSupplyTemp:{domain:"sensor",name:"Cooling Effective Minimum Supply Temp",optional:!0},coolingFallbackNightMinOutdoorTemp:{domain:"sensor",name:"Cooling Fallback Night Minimum Outdoor Temp",optional:!0},coolingFallbackMinSupplyTemp:{domain:"sensor",name:"Cooling Fallback Minimum Supply Temp",optional:!0},coolingSupplyTarget:{domain:"sensor",name:"Cooling Supply Target",optional:!0},coolingSupplyError:{domain:"sensor",name:"Cooling Supply Error",optional:!0},coolingDemandRaw:{domain:"sensor",name:"Cooling Demand (raw)",optional:!0},coolingBaseDemandRaw:{domain:"sensor",name:"Cooling base demand raw",optional:!0},coolingLimitedDemand:{domain:"sensor",name:"Cooling limited demand",optional:!0},coolingLimiterAllowedMax:{domain:"sensor",name:"Cooling limiter allowed max",optional:!0},coolingBufferGapFiltered:{domain:"sensor",name:"Cooling buffer gap filtered",optional:!0},coolingBufferGapRate:{domain:"sensor",name:"Cooling buffer gap rate",optional:!0},coolingProjectedGap:{domain:"sensor",name:"Cooling projected gap",optional:!0},coolingProjectionBrakeActive:{domain:"sensor",name:"Cooling projection brake active",optional:!0},coolingDewGap:{domain:"sensor",name:"Cooling dew gap",optional:!0},coolingStopBufferGap:{domain:"sensor",name:"Cooling stop buffer gap",optional:!0},coolingLimiterReasonCode:{domain:"sensor",name:"Cooling limiter reason code",optional:!0},coolingStopReasonCode:{domain:"sensor",name:"Cooling stop reason code",optional:!0},coolingRequestReasonCode:{domain:"sensor",name:"Cooling request reason code",optional:!0},coolingRequestHp1Level:{domain:"sensor",name:"Cooling request HP1 level",optional:!0},coolingRequestHp2Level:{domain:"sensor",name:"Cooling request HP2 level",optional:!0},coolingRequestOwnerHp:{domain:"sensor",name:"Cooling request owner HP",optional:!0},coolingOwnerHp:{domain:"sensor",name:"Cooling owner HP",optional:!0},coolingWaterCycleActive:{domain:"sensor",name:"Cooling water cycle active",optional:!0},waterSupplySource:{domain:"select",name:"Water Supply Source",optional:!0},flowSource:{domain:"select",name:"Flow Source",optional:!0},qFlowSource:{domain:"select",name:"Q Flow Source",optional:!0},outdoorUnitFlowMode:{domain:"select",name:"Outdoor Unit Flow Mode",optional:!0},outsideTempSource:{domain:"select",name:"Outside Temperature Source",optional:!0},roomTempSource:{domain:"select",name:"Room Temperature Source",optional:!0},roomSetpointSource:{domain:"select",name:"Room Setpoint Source",optional:!0},heatingEnableSource:{domain:"select",name:"Heating Enable Source",optional:!0},coolingEnableSource:{domain:"select",name:"Cooling Enable Source",optional:!0},localWaterSupplyTempSource:{domain:"select",name:"Local Water Supply Temp Source",optional:!0},coolingMinimumSupplyTemp:{domain:"number",name:"Cooling Minimum Supply Temp",optional:!0},coolingDemandMax:{domain:"number",name:"Cooling Demand Max",optional:!0},coolingRestartDelta:{domain:"number",name:"Cooling Restart Delta",optional:!0},coolingPidKp:{domain:"number",name:"Cooling PID Kp",optional:!0},coolingPidKi:{domain:"number",name:"Cooling PID Ki",optional:!0},coolingPidKd:{domain:"number",name:"Cooling PID Kd",optional:!0},coolingSafetyMargin:{domain:"number",name:"Cooling Safety Margin",optional:!0},coolingRoomRequestRequired:{domain:"switch",name:"Cooling Room Request Required",optional:!0},coolingRequestOnDelta:{domain:"number",name:"Cooling Request On Delta",optional:!0},coolingRequestOffDelta:{domain:"number",name:"Cooling Request Off Delta",optional:!0},coolingWithoutDewPointMode:{domain:"select",name:"Cooling Without Dew Point",optional:!0},flowControlMode:{domain:"select",name:"Flow Control Mode"},flowSetpoint:{domain:"number",name:"Flow Setpoint"},coolingFlowSetpoint:{domain:"number",name:"Cooling Flow Setpoint",optional:!0},manualIpwm:{domain:"number",name:"Manual iPWM"},compressorStarts2hWarningLimit:{domain:"number",name:"Compressor starts 2h warning limit",optional:!0},compressorStarts72hWarningLimit:{domain:"number",name:"Compressor starts 72h warning limit",optional:!0},compressorCyclingWarning2h:{domain:"binary_sensor",name:"Compressor cycling warning 2h",optional:!0},compressorCyclingWarning72h:{domain:"binary_sensor",name:"Compressor cycling warning 72h",optional:!0},alternatingCompressorStartsWarning:{domain:"binary_sensor",name:"Alternating compressor starts warning",optional:!0},compressorCyclingAlertLatched:{domain:"binary_sensor",name:"Compressor cycling alert latched",optional:!0},compressorCyclingAlertAlternating:{domain:"binary_sensor",name:"Compressor cycling alert alternating",optional:!0},compressorCyclingAlertFirstSeen:{domain:"sensor",name:"Compressor cycling alert first seen",optional:!0},compressorCyclingAlertLastSeen:{domain:"sensor",name:"Compressor cycling alert last seen",optional:!0},compressorCyclingAlertHp1Peak2h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 2h",optional:!0},compressorCyclingAlertHp1Peak72h:{domain:"sensor",name:"Compressor cycling alert HP1 peak 72h",optional:!0},compressorCyclingAlertHp2Peak2h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 2h",optional:!0},compressorCyclingAlertHp2Peak72h:{domain:"sensor",name:"Compressor cycling alert HP2 peak 72h",optional:!0},acknowledgeCompressorCyclingAlert:{domain:"button",name:"Acknowledge compressor cycling alert",optional:!0},acknowledgeHpIncidents:{domain:"button",name:"Acknowledge recovered HP incidents",optional:!0},hp1CompressorStarts2h:{domain:"sensor",name:"HP1 - Compressor starts 2h",optional:!0},hp1CompressorStarts6h:{domain:"sensor",name:"HP1 - Compressor starts 6h",optional:!0},hp1CompressorStarts24h:{domain:"sensor",name:"HP1 - Compressor starts 24h",optional:!0},hp1CompressorStarts72h:{domain:"sensor",name:"HP1 - Compressor starts 72h",optional:!0},hp1CompressorLastStartAge:{domain:"sensor",name:"HP1 - Compressor last start age",optional:!0},hp1RuntimeHours:{domain:"sensor",name:"HP1 - Runtime Hours",optional:!0},resetRuntimeCountersHp1:{domain:"button",name:"Reset Runtime Counters (HP1)",optional:!0},hp2CompressorStarts2h:{domain:"sensor",name:"HP2 - Compressor starts 2h",optional:!0},hp2CompressorStarts6h:{domain:"sensor",name:"HP2 - Compressor starts 6h",optional:!0},hp2CompressorStarts24h:{domain:"sensor",name:"HP2 - Compressor starts 24h",optional:!0},hp2CompressorStarts72h:{domain:"sensor",name:"HP2 - Compressor starts 72h",optional:!0},hp2CompressorLastStartAge:{domain:"sensor",name:"HP2 - Compressor last start age",optional:!0},hp2RuntimeHours:{domain:"sensor",name:"HP2 - Runtime Hours",optional:!0},resetRuntimeCountersHp1Hp2:{domain:"button",name:"Reset Runtime Counters (HP1+HP2)",optional:!0},runtimeLeadHp:{domain:"text_sensor",name:"Runtime lead HP",optional:!0},resetCumulativeEnergyCounters:{domain:"button",name:"Reset Cumulative Energy Counters",optional:!0},lowflowFaultActive:{domain:"binary_sensor",name:"Lowflow fault active",optional:!0},pt1000ReadProblem:{domain:"binary_sensor",name:"PT1000 read problem",optional:!0},waterSupplyTempFallbackActive:{domain:"binary_sensor",name:"Water Supply Temp Fallback Active",optional:!0},flowMismatch:{domain:"binary_sensor",name:"Flow mismatch (HP1 vs HP2)",optional:!0},cicPollingEnabled:{domain:"switch",name:"CIC - Enable polling",optional:!0},cicFeedUrl:{domain:"text",name:"CIC - Feed URL",optional:!0},cicWaterSupplyTemp:{domain:"sensor",name:"CIC - Water Supply Temp",optional:!0},cicControlSetpoint:{domain:"sensor",name:"CIC - Control setpoint",optional:!0},cicRoomSetpoint:{domain:"sensor",name:"CIC - Room setpoint",optional:!0},cicRoomTemp:{domain:"sensor",name:"CIC - Room temperature",optional:!0},cicFlowrate:{domain:"sensor",name:"CIC - Flowrate (filtered)",optional:!0},cicLastSuccessAge:{domain:"sensor",name:"CIC - Last success age",optional:!0},cicChEnabled:{domain:"binary_sensor",name:"CIC - CH enabled",optional:!0},cicChEnableValid:{domain:"binary_sensor",name:"CIC - CH enable valid",optional:!0},cicCoolingEnabled:{domain:"binary_sensor",name:"CIC - Cooling enabled",optional:!0},cicJsonFeedOk:{domain:"binary_sensor",name:"CIC - JSON Feed OK",optional:!0},cicDataStale:{domain:"binary_sensor",name:"CIC - Data stale",optional:!0},otEnabled:{domain:"switch",name:"OpenTherm Enabled",optional:!0},otThermostatChEnable:{domain:"binary_sensor",name:"OT - Thermostat CH Enable",optional:!0},otThermostatStatusValid:{domain:"binary_sensor",name:"OT - Thermostat Status Valid",optional:!0},otThermostatCoolingEnable:{domain:"binary_sensor",name:"OT - Thermostat Cooling Enable",optional:!0},otLinkProblem:{domain:"binary_sensor",name:"OT - Link Problem",optional:!0},otControlSetpoint:{domain:"sensor",name:"OT - Control Setpoint",optional:!0},otRoomSetpoint:{domain:"sensor",name:"OT - Room Setpoint",optional:!0},otRoomTemp:{domain:"sensor",name:"OT - Room Temperature",optional:!0},otbLinkAvailable:{domain:"binary_sensor",name:"OTB - Boiler Link Available",optional:!0},otbChCommand:{domain:"switch",name:"OTB - Central Heating Command",optional:!0},otbControlSetpointCommand:{domain:"number",name:"OTB - Control Setpoint Command",optional:!0},otbFaultIndication:{domain:"binary_sensor",name:"OTB - Fault Indication",optional:!0},otbChActive:{domain:"binary_sensor",name:"OTB - Central Heating Active",optional:!0},otbDhwActive:{domain:"binary_sensor",name:"OTB - Domestic Hot Water Active",optional:!0},otbFlameOn:{domain:"binary_sensor",name:"OTB - Flame On",optional:!0},otbDiagnosticIndication:{domain:"binary_sensor",name:"OTB - Diagnostic Indication",optional:!0},otbDhwPresent:{domain:"binary_sensor",name:"OTB - DHW Present",optional:!0},otbServiceRequest:{domain:"binary_sensor",name:"OTB - Service Required",optional:!0},otbLockoutReset:{domain:"binary_sensor",name:"OTB - Lockout Reset",optional:!0},otbLowWaterPressure:{domain:"binary_sensor",name:"OTB - Low Water Pressure",optional:!0},otbFlameFault:{domain:"binary_sensor",name:"OTB - Flame Fault",optional:!0},otbAirPressureFault:{domain:"binary_sensor",name:"OTB - Air Pressure Fault",optional:!0},otbWaterOverTemp:{domain:"binary_sensor",name:"OTB - Water Overtemperature",optional:!0},otbRelativeModulation:{domain:"sensor",name:"OTB - Relative Modulation",optional:!0},otbChPressure:{domain:"sensor",name:"OTB - CH Water Pressure",optional:!0},otbBoilerWaterTemp:{domain:"sensor",name:"OTB - Boiler Water Temperature",optional:!0},otbReturnWaterTemp:{domain:"sensor",name:"OTB - Return Water Temperature",optional:!0},otbDhwTemp:{domain:"sensor",name:"OTB - Domestic Hot Water Temperature",optional:!0},otbOemFaultCode:{domain:"sensor",name:"OTB - OEM Fault Code",optional:!0},otbOemDiagnosticCode:{domain:"sensor",name:"OTB - OEM Diagnostic Code",optional:!0},otbMaxCapacity:{domain:"sensor",name:"OTB - Maximum Boiler Capacity",optional:!0},otbMinModulation:{domain:"sensor",name:"OTB - Minimum Modulation",optional:!0},otbOpenThermVersion:{domain:"sensor",name:"OTB - OpenTherm Device Version",optional:!0},otbDeviceType:{domain:"sensor",name:"OTB - Device Type",optional:!0},otbDeviceVersion:{domain:"sensor",name:"OTB - Device Product Version",optional:!0},otbLastResponseAge:{domain:"sensor",name:"OTB - Last Response Age",optional:!0},otbResponseCount:{domain:"sensor",name:"OTB - Valid Response Count",optional:!0},otbLastResponseId:{domain:"sensor",name:"OTB - Last Response Message ID",optional:!0},flowKp:{domain:"number",name:"Flow PI Kp",optional:!0},flowKi:{domain:"number",name:"Flow PI Ki",optional:!0},boilerRatedHeatPower:{domain:"number",name:"Boiler rated heat power",optional:!0},boilerSupportStartThreshold:{domain:"number",name:"CM3 deficit ON threshold",optional:!0},boilerSupportStopThreshold:{domain:"number",name:"CM3 deficit OFF threshold",optional:!0},commissioningCm100Start:{domain:"button",name:"CM100 Start",optional:!0},commissioningCm100Stop:{domain:"button",name:"CM100 Stop",optional:!0},commissioningStatus:{domain:"text_sensor",name:"Commissioning status",optional:!0},cm100Active:{domain:"binary_sensor",name:"CM100 active",optional:!0},boilerPowerTestStart:{domain:"button",name:"Boiler Power Test Start",optional:!0},boilerPowerTestAbort:{domain:"button",name:"Boiler Power Test Abort",optional:!0},boilerPowerTestApply:{domain:"button",name:"Boiler Power Test Apply",optional:!0},boilerPowerTestResult:{domain:"sensor",name:"Boiler power test result",optional:!0},boilerPowerTestConfidence:{domain:"sensor",name:"Boiler power test confidence",optional:!0},boilerPowerTestActive:{domain:"binary_sensor",name:"Boiler power test active",optional:!0},boilerPowerTestStatus:{domain:"text_sensor",name:"Boiler power test status",optional:!0},flowAutotuneStart:{domain:"button",name:"Flow Autotune Start",optional:!0},flowAutotuneAbort:{domain:"button",name:"Flow Autotune Abort",optional:!0},flowAutotuneApply:{domain:"button",name:"Apply Flow Autotune Kp-Ki",optional:!0},flowAutotuneStatus:{domain:"text_sensor",name:"Flow Autotune status",optional:!0},flowKpSuggested:{domain:"number",name:"Flow Autotune Kp suggested",optional:!0},flowKiSuggested:{domain:"number",name:"Flow Autotune Ki suggested",optional:!0},airPurgeStart:{domain:"button",name:"Air Purge Start",optional:!0},airPurgeAbort:{domain:"button",name:"Air Purge Abort",optional:!0},airPurgeReturnToAuto:{domain:"switch",name:"Air purge return to Auto",optional:!0},airPurgeActive:{domain:"binary_sensor",name:"Air purge active",optional:!0},airPurgeStatus:{domain:"text_sensor",name:"Air purge status",optional:!0},airPurgeRemaining:{domain:"sensor",name:"Air purge remaining",optional:!0},airPurgePhase:{domain:"sensor",name:"Air purge phase",optional:!0},airPurgeTargetIpwm:{domain:"sensor",name:"Air purge target iPWM",optional:!0},manualFlowStart:{domain:"button",name:"Manual Flow Start",optional:!0},manualFlowAbort:{domain:"button",name:"Manual Flow Abort",optional:!0},manualFlowApplyHeating:{domain:"button",name:"Apply Manual Flow To Heating",optional:!0},manualFlowApplyCooling:{domain:"button",name:"Apply Manual Flow To Cooling",optional:!0},manualFlowActive:{domain:"binary_sensor",name:"Manual flow active",optional:!0},manualFlowStatus:{domain:"text_sensor",name:"Manual flow status",optional:!0},manualFlowSetpoint:{domain:"number",name:"Manual flow service setpoint",optional:!0},manualFlowTargetIpwm:{domain:"sensor",name:"Manual flow target iPWM",optional:!0},quickFlowTest:{domain:"switch",name:"Quick flow test",optional:!0},manualHpStart:{domain:"button",name:"Manual HP Start",optional:!0},manualHpAbort:{domain:"button",name:"Manual HP Abort",optional:!0},manualHpActive:{domain:"binary_sensor",name:"Manual HP active",optional:!0},manualHpStatus:{domain:"text_sensor",name:"Manual HP status",optional:!0},manualHpGuardStatus:{domain:"text_sensor",name:"Manual HP guard status",optional:!0},manualHp1Mode:{domain:"select",name:"Manual HP1 service mode",optional:!0},manualHp2Mode:{domain:"select",name:"Manual HP2 service mode",optional:!0},manualHp1Level:{domain:"number",name:"Manual HP1 compressor level",optional:!0},manualHp2Level:{domain:"number",name:"Manual HP2 compressor level",optional:!0},hpWaterCalibrationStart:{domain:"button",name:"HP Water Calibration Start",optional:!0},hpWaterCalibrationAbort:{domain:"button",name:"HP Water Calibration Abort",optional:!0},hpWaterCalibrationApply:{domain:"button",name:"Apply HP Water Calibration Offsets",optional:!0},hpWaterCalibrationActive:{domain:"binary_sensor",name:"HP water calibration active",optional:!0},hpWaterCalibrationStatus:{domain:"text_sensor",name:"HP water calibration status",optional:!0},hpWaterCalibrationRemaining:{domain:"sensor",name:"HP water calibration remaining",optional:!0},hpWaterCalibrationPhase:{domain:"sensor",name:"HP water calibration phase",optional:!0},hpWaterCalibrationSpread:{domain:"sensor",name:"HP water calibration spread",optional:!0},hpWaterCalibrationSupplyDelta:{domain:"sensor",name:"HP water calibration supply delta",optional:!0},hpWaterCalibrationStableProgress:{domain:"sensor",name:"HP water calibration stable window progress",optional:!0},hpWaterCalibrationStableRequired:{domain:"sensor",name:"HP water calibration stable window required",optional:!0},hpWaterCalibrationResultReference:{domain:"sensor",name:"HP water calibration result reference",optional:!0},hpWaterCalibrationResultSpreadBefore:{domain:"sensor",name:"HP water calibration result spread before",optional:!0},hpWaterCalibrationResultExpectedSpread:{domain:"sensor",name:"HP water calibration result expected spread",optional:!0},hpWaterCalibrationResultHp1InRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water in raw average",optional:!0},hpWaterCalibrationResultHp1OutRawAvg:{domain:"sensor",name:"HP water calibration result HP1 water out raw average",optional:!0},hpWaterCalibrationResultHp2InRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water in raw average",optional:!0},hpWaterCalibrationResultHp2OutRawAvg:{domain:"sensor",name:"HP water calibration result HP2 water out raw average",optional:!0},hp1WaterInOffset:{domain:"number",name:"HP1 water in temperature offset",optional:!0},hp1WaterOutOffset:{domain:"number",name:"HP1 water out temperature offset",optional:!0},hp2WaterInOffset:{domain:"number",name:"HP2 water in temperature offset",optional:!0},hp2WaterOutOffset:{domain:"number",name:"HP2 water out temperature offset",optional:!0},hp1WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP1 water in offset suggested",optional:!0},hp1WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP1 water out offset suggested",optional:!0},hp2WaterInOffsetSuggested:{domain:"number",name:"HP calibration HP2 water in offset suggested",optional:!0},hp2WaterOutOffsetSuggested:{domain:"number",name:"HP calibration HP2 water out offset suggested",optional:!0},controlModeLabel:{domain:"text_sensor",name:"Control Mode (Label)"},flowMode:{domain:"text_sensor",name:"Flow Mode"},dayMax:{domain:"number",name:"Day max level"},silentMax:{domain:"number",name:"Silent max level"},silentStartTime:{domain:"time",name:"Silent start time"},silentEndTime:{domain:"time",name:"Silent end time"},openquattResumeAt:{domain:"datetime",name:"OpenQuatt resume at",optional:!0},maxWater:{domain:"number",name:"Maximum water temperature"},minRuntime:{domain:"number",name:"Minimum runtime"},totalPower:{domain:"sensor",name:"Total Power Input"},heatingPowerInput:{domain:"sensor",name:"Heating Power Input",optional:!0},coolingPowerInput:{domain:"sensor",name:"Cooling Power Input",optional:!0},totalCop:{domain:"sensor",name:"Total COP"},totalEer:{domain:"sensor",name:"Total EER",optional:!0},totalHeat:{domain:"sensor",name:"Total Heat Power"},totalCoolingPower:{domain:"sensor",name:"Total Cooling Power",optional:!0},boilerActive:{domain:"binary_sensor",name:"Boiler active",optional:!0},boilerCommandValid:{domain:"binary_sensor",name:"Boiler command valid",optional:!0},boilerCommandActive:{domain:"binary_sensor",name:"Boiler command active",optional:!0},boilerCommandTargetTemperature:{domain:"sensor",name:"Boiler command target temperature",optional:!0},boilerCommandRequestedPower:{domain:"sensor",name:"Boiler command requested power",optional:!0},boilerCommandAge:{domain:"sensor",name:"Boiler command age",optional:!0},boilerCommandSource:{domain:"text_sensor",name:"Boiler command source",optional:!0},boilerBlockReason:{domain:"text_sensor",name:"Boiler block reason",optional:!0},boilerHeatPower:{domain:"sensor",name:"Boiler Heat Power",optional:!0},systemHeatPower:{domain:"sensor",name:"System Heat Power",optional:!0},flowSelected:{domain:"sensor",name:"Flow average (Selected)"},flowLocal:{domain:"sensor",name:"Flow average (local)",optional:!0},controllerFlow:{domain:"sensor",name:"Controller Flow",optional:!0},trendHistoryEnabled:{domain:"switch",name:"Trendopslag",optional:!0},trendHistoryFlashEnabled:{domain:"switch",name:"Trendhistorie opslaan in flash",optional:!0},webServerLogHistoryEnabled:{domain:"switch",name:"RAM log history",optional:!0},debugLevel:{domain:"select",name:"Debug Level",optional:!0},trendHistoryFlush:{domain:"button",name:"Trendhistorie nu opslaan",optional:!0},decisionLogHistoryEnabled:{domain:"switch",name:"Beslisloghistorie bewaren",optional:!0},decisionLogHistoryFlush:{domain:"button",name:"Beslisloghistorie nu opslaan",optional:!0},decisionLogHistoryClear:{domain:"button",name:"Beslisloghistorie wissen",optional:!0},lifetimeEnergyHistoryEnabled:{domain:"switch",name:"Lifetime energiehistorie opslaan",optional:!0},lifetimeEnergyHourRetention:{domain:"select",name:"Uurdetail bewaren",optional:!0},lifetimeEnergyHistoryCapture:{domain:"button",name:"Lifetime energiehistorie nu opslaan",optional:!0},lifetimeEnergyHistoryClear:{domain:"button",name:"Lifetime energiehistorie wissen",optional:!0},electricalEnergyDaily:{domain:"sensor",name:"Electrical Energy Daily",optional:!0},electricalEnergyCumulative:{domain:"sensor",name:"Electrical Energy Cumulative",optional:!0},heatingElectricalEnergyDaily:{domain:"sensor",name:"Heating Electrical Energy Daily",optional:!0},heatingElectricalEnergyCumulative:{domain:"sensor",name:"Heating Electrical Energy Cumulative",optional:!0},coolingElectricalEnergyDaily:{domain:"sensor",name:"Cooling Electrical Energy Daily",optional:!0},coolingElectricalEnergyCumulative:{domain:"sensor",name:"Cooling Electrical Energy Cumulative",optional:!0},heatpumpThermalEnergyDaily:{domain:"sensor",name:"HeatPump Thermal Energy Daily",optional:!0},heatpumpThermalEnergyCumulative:{domain:"sensor",name:"HeatPump Thermal Energy Cumulative",optional:!0},heatpumpCoolingEnergyDaily:{domain:"sensor",name:"HeatPump Cooling Energy Daily",optional:!0},heatpumpCoolingEnergyCumulative:{domain:"sensor",name:"HeatPump Cooling Energy Cumulative",optional:!0},heatpumpCopDaily:{domain:"sensor",name:"HeatPump COP Daily",optional:!0},heatpumpCopCumulative:{domain:"sensor",name:"HeatPump COP Cumulative",optional:!0},heatpumpEerDaily:{domain:"sensor",name:"HeatPump EER Daily",optional:!0},heatpumpEerCumulative:{domain:"sensor",name:"HeatPump EER Cumulative",optional:!0},boilerThermalEnergyDaily:{domain:"sensor",name:"Boiler Thermal Energy Daily",optional:!0},boilerThermalEnergyCumulative:{domain:"sensor",name:"Boiler Thermal Energy Cumulative",optional:!0},systemThermalEnergyDaily:{domain:"sensor",name:"System Thermal Energy Daily",optional:!0},systemThermalEnergyCumulative:{domain:"sensor",name:"System Thermal Energy Cumulative",optional:!0},roomTemp:{domain:"sensor",name:"Room Temperature (Selected)"},roomSetpoint:{domain:"sensor",name:"Room Setpoint (Selected)"},supplyTemp:{domain:"sensor",name:"Water Supply Temp (Selected)"},outsideTempSelected:{domain:"sensor",name:"Outside Temperature (Selected)",optional:!0},waterSupplyTempEsp:{domain:"sensor",name:"Water Supply Temp",optional:!0},waterSupplyTempPt1000:{domain:"sensor",name:"Water Supply Temp (PT1000)",optional:!0},waterSupplyTempDs18b20:{domain:"sensor",name:"Water Supply Temp (DS18B20)",optional:!0},outsideTempLocalAggregated:{domain:"sensor",name:"Outside Temperature (Local aggregated)",optional:!0},outsideTempHa:{domain:"sensor",name:"HA - Outside Temperature",optional:!0},waterSupplyTempHa:{domain:"sensor",name:"HA - Water Supply Temperature",optional:!0},roomSetpointHa:{domain:"sensor",name:"HA - Thermostat Setpoint",optional:!0},roomTempHa:{domain:"sensor",name:"HA - Thermostat Room Temperature",optional:!0},mqttOutsideTemperature:{domain:"sensor",name:"MQTT Outside Temperature",optional:!0},mqttOutsideTemperatureAge:{domain:"sensor",name:"MQTT Outside Temperature Age",optional:!0},mqttOutsideTemperatureValid:{domain:"binary_sensor",name:"MQTT Outside Temperature Valid",optional:!0},mqttRoomTemperature:{domain:"sensor",name:"MQTT Room Temperature",optional:!0},mqttRoomTemperatureAge:{domain:"sensor",name:"MQTT Room Temperature Age",optional:!0},mqttRoomTemperatureValid:{domain:"binary_sensor",name:"MQTT Room Temperature Valid",optional:!0},mqttRoomSetpoint:{domain:"sensor",name:"MQTT Room Setpoint",optional:!0},mqttRoomSetpointAge:{domain:"sensor",name:"MQTT Room Setpoint Age",optional:!0},mqttRoomSetpointValid:{domain:"binary_sensor",name:"MQTT Room Setpoint Valid",optional:!0},mqttHeatingEnable:{domain:"binary_sensor",name:"MQTT Heating Enable",optional:!0},mqttHeatingEnableAge:{domain:"sensor",name:"MQTT Heating Enable Age",optional:!0},mqttHeatingEnableValid:{domain:"binary_sensor",name:"MQTT Heating Enable Valid",optional:!0},mqttCoolingEnable:{domain:"binary_sensor",name:"MQTT Cooling Enable",optional:!0},mqttCoolingEnableAge:{domain:"sensor",name:"MQTT Cooling Enable Age",optional:!0},mqttCoolingEnableValid:{domain:"binary_sensor",name:"MQTT Cooling Enable Valid",optional:!0},heatingEnableHa:{domain:"binary_sensor",name:"HA - Heating Enable",optional:!0},coolingEnableHa:{domain:"binary_sensor",name:"HA - Cooling Enable",optional:!0},outsideTempHaValid:{domain:"binary_sensor",name:"HA - Outside Temperature Valid",optional:!0},waterSupplyTempHaValid:{domain:"binary_sensor",name:"HA - Water Supply Temperature Valid",optional:!0},roomSetpointHaValid:{domain:"binary_sensor",name:"HA - Room Setpoint Valid",optional:!0},roomTempHaValid:{domain:"binary_sensor",name:"HA - Room Temperature Valid",optional:!0},heatingEnableHaValid:{domain:"binary_sensor",name:"HA - Heating Enable Valid",optional:!0},coolingEnableHaValid:{domain:"binary_sensor",name:"HA - Cooling Enable Valid",optional:!0},roomTempEffectiveSource:{domain:"text_sensor",name:"Room Temperature Effective Source",optional:!0},roomSetpointEffectiveSource:{domain:"text_sensor",name:"Room Setpoint Effective Source",optional:!0},waterSupplyTempEffectiveSource:{domain:"text_sensor",name:"Water Supply Temp Effective Source",optional:!0},heatingEnableEffectiveSource:{domain:"text_sensor",name:"Heating Enable Effective Source",optional:!0},coolingEnableEffectiveSource:{domain:"text_sensor",name:"Cooling Enable Effective Source",optional:!0},curveSupplyTarget:{domain:"sensor",name:"Heating Curve Supply Target"},requestReason:{domain:"text_sensor",name:"Request Reason",optional:!0},strategyActiveCode:{domain:"sensor",name:"Strategy active code",optional:!0},strategyPhaseCode:{domain:"sensor",name:"Strategy phase code",optional:!0},strategyRequestedPower:{domain:"sensor",name:"Strategy requested power",optional:!0},strategySupplyTarget:{domain:"sensor",name:"Strategy supply target",optional:!0},strategyWaterLimitFactor:{domain:"sensor",name:"Strategy water limit factor",optional:!0},strategyRequestActive:{domain:"binary_sensor",name:"Strategy request active",optional:!0},strategyWaterTripActive:{domain:"binary_sensor",name:"Strategy water trip active",optional:!0},strategyWaterHardTripActive:{domain:"binary_sensor",name:"Strategy water hard trip active",optional:!0},curveDemandEffective:{domain:"sensor",name:"Curve demand (effective)",optional:!0},curveDemandDiscrete:{domain:"sensor",name:"Curve demand (discrete)",optional:!0},curveDispatchTotalLevel:{domain:"sensor",name:"Curve dispatch total level",optional:!0},curveTargetHp1Level:{domain:"sensor",name:"Curve target HP1 level",optional:!0},curveTargetHp2Level:{domain:"sensor",name:"Curve target HP2 level",optional:!0},curveRestartInhibit:{domain:"sensor",name:"Curve restart inhibit",optional:!0},curvePhase:{domain:"text_sensor",name:"Curve Phase",optional:!0},curveOperatingRegime:{domain:"text_sensor",name:"Curve operating regime",optional:!0},curveCapacityMode:{domain:"text_sensor",name:"Curve capacity mode",optional:!0},hpCapacity:{domain:"sensor",name:"HP capacity (W)",optional:!0},hpDeficit:{domain:"sensor",name:"HP deficit (W)",optional:!0},phouseHouse:{domain:"sensor",name:"Power House \u2013 P_house",optional:!0},phouseReq:{domain:"sensor",name:"Power House \u2013 P_req",optional:!0},duoOptimizerReason:{domain:"text_sensor",name:"Duo optimizer reason",optional:!0},selectedInputHoldActive:{domain:"text_sensor",name:"Selected Input Hold Active",optional:!0},silentActive:{domain:"binary_sensor",name:"Silent active"},silentStatus:{domain:"text_sensor",name:"Silent status",optional:!0},silentWindow:{domain:"text_sensor",name:"Silent window (start-end)",optional:!0},stickyActive:{domain:"binary_sensor",name:"Sticky pump active"},housePower:{domain:"number",name:"Rated maximum house power"},houseColdTemp:{domain:"number",name:"House cold temp"},houseOutdoorMax:{domain:"number",name:"Maximum heating outdoor temperature"},phResponseProfile:{domain:"select",name:"Power House response profile"},phKp:{domain:"number",name:"Power House temperature reaction"},phComfortBelow:{domain:"number",name:"Power House comfort below setpoint"},phComfortAbove:{domain:"number",name:"Power House comfort above setpoint"},phDemandRiseTime:{domain:"number",name:"Power House demand rise time"},phDemandFallTime:{domain:"number",name:"Power House demand fall time"},lowLoadDynamicThresholds:{domain:"text_sensor",name:"Low-load dynamic thresholds",optional:!0},lowLoadDynamicOffFactor:{domain:"number",name:"Low-load dynamic OFF factor",optional:!0},lowLoadDynamicOnFactor:{domain:"number",name:"Low-load dynamic ON factor",optional:!0},lowLoadMinimumHysteresis:{domain:"number",name:"Low-load minimum hysteresis",optional:!0},lowLoadCm2ReentryBlock:{domain:"number",name:"Low-load CM2 re-entry block",optional:!0},curveControlProfile:{domain:"select",name:"Heating Curve Control Profile"},heatingCurvePidKp:{domain:"number",name:"Heating Curve PID Kp",optional:!0},heatingCurvePidKi:{domain:"number",name:"Heating Curve PID Ki",optional:!0},heatingCurvePidKd:{domain:"number",name:"Heating Curve PID Kd",optional:!0},curveFallbackSupply:{domain:"number",name:"Curve Fallback Tsupply (No Outside Temp)"},curveM20:{domain:"number",name:"Curve Tsupply @ -20\xB0C"},curveM10:{domain:"number",name:"Curve Tsupply @ -10\xB0C"},curve0:{domain:"number",name:"Curve Tsupply @ 0\xB0C"},curve5:{domain:"number",name:"Curve Tsupply @ 5\xB0C"},curve10:{domain:"number",name:"Curve Tsupply @ 10\xB0C"},curve15:{domain:"number",name:"Curve Tsupply @ 15\xB0C"},hp1ExcludedA:{domain:"select",name:"HP1 - Excluded compressor level A"},hp1ExcludedB:{domain:"select",name:"HP1 - Excluded compressor level B"},hp1Power:{domain:"sensor",name:"HP1 - Power Input"},hp1Heat:{domain:"sensor",name:"HP1 - Heat Power"},hp1Cooling:{domain:"sensor",name:"HP1 - Cooling Power"},hp1Cop:{domain:"sensor",name:"HP1 - COP"},hp1Compressor:{domain:"sensor",name:"HP1 compressor level",optional:!0},hp1Freq:{domain:"sensor",name:"HP1 - Compressor frequency"},hp1FanSpeed:{domain:"sensor",name:"HP1 - Fan speed"},hp1Flow:{domain:"sensor",name:"HP1 - Flow"},hp1EvaporatorCoilTemp:{domain:"sensor",name:"HP1 - Evaporator coil temperature"},hp1InnerCoilTemp:{domain:"sensor",name:"HP1 - Inner coil temperature"},hp1OutsideTemp:{domain:"sensor",name:"HP1 - Outside temperature"},hp1CondenserPressure:{domain:"sensor",name:"HP1 - Condenser pressure"},hp1DischargeTemp:{domain:"sensor",name:"HP1 - Gas discharge temperature"},hp1EvaporatorPressure:{domain:"sensor",name:"HP1 - Evaporator pressure"},hp1ReturnTemp:{domain:"sensor",name:"HP1 - Gas return temperature"},hp1WaterIn:{domain:"sensor",name:"HP1 - Water in temperature"},hp1WaterOut:{domain:"sensor",name:"HP1 - Water out temperature"},hp1WaterInRaw:{domain:"sensor",name:"HP1 - Water in temperature raw",optional:!0},hp1WaterOutRaw:{domain:"sensor",name:"HP1 - Water out temperature raw",optional:!0},hp1Mode:{domain:"text_sensor",name:"HP1 - Working Mode Label"},hp1Failures:{domain:"text_sensor",name:"HP1 - Active Failures List"},hp1Defrost:{domain:"binary_sensor",name:"HP1 - Defrost"},hp1BottomPlate:{domain:"binary_sensor",name:"HP1 - Bottom plate heater"},hp1Crankcase:{domain:"binary_sensor",name:"HP1 - Crankcase heater"},hp1Eev:{domain:"sensor",name:"HP1 - EEV steps"},hp1FourWay:{domain:"binary_sensor",name:"HP1 - 4-Way valve"},hp2ExcludedA:{domain:"select",name:"HP2 - Excluded compressor level A",optional:!0},hp2ExcludedB:{domain:"select",name:"HP2 - Excluded compressor level B",optional:!0},hp2Power:{domain:"sensor",name:"HP2 - Power Input",optional:!0},hp2Heat:{domain:"sensor",name:"HP2 - Heat Power",optional:!0},hp2Cooling:{domain:"sensor",name:"HP2 - Cooling Power",optional:!0},hp2Cop:{domain:"sensor",name:"HP2 - COP",optional:!0},hp2Compressor:{domain:"sensor",name:"HP2 compressor level",optional:!0},hp2Freq:{domain:"sensor",name:"HP2 - Compressor frequency",optional:!0},hp2FanSpeed:{domain:"sensor",name:"HP2 - Fan speed",optional:!0},hp2Flow:{domain:"sensor",name:"HP2 - Flow",optional:!0},hp2EvaporatorCoilTemp:{domain:"sensor",name:"HP2 - Evaporator coil temperature",optional:!0},hp2InnerCoilTemp:{domain:"sensor",name:"HP2 - Inner coil temperature",optional:!0},hp2OutsideTemp:{domain:"sensor",name:"HP2 - Outside temperature",optional:!0},hp2CondenserPressure:{domain:"sensor",name:"HP2 - Condenser pressure",optional:!0},hp2DischargeTemp:{domain:"sensor",name:"HP2 - Gas discharge temperature",optional:!0},hp2EvaporatorPressure:{domain:"sensor",name:"HP2 - Evaporator pressure",optional:!0},hp2ReturnTemp:{domain:"sensor",name:"HP2 - Gas return temperature",optional:!0},hp2WaterIn:{domain:"sensor",name:"HP2 - Water in temperature",optional:!0},hp2WaterOut:{domain:"sensor",name:"HP2 - Water out temperature",optional:!0},hp2WaterInRaw:{domain:"sensor",name:"HP2 - Water in temperature raw",optional:!0},hp2WaterOutRaw:{domain:"sensor",name:"HP2 - Water out temperature raw",optional:!0},hp2Mode:{domain:"text_sensor",name:"HP2 - Working Mode Label",optional:!0},hp2Failures:{domain:"text_sensor",name:"HP2 - Active Failures List",optional:!0},hp2Defrost:{domain:"binary_sensor",name:"HP2 - Defrost",optional:!0},hp2BottomPlate:{domain:"binary_sensor",name:"HP2 - Bottom plate heater",optional:!0},hp2Crankcase:{domain:"binary_sensor",name:"HP2 - Crankcase heater",optional:!0},hp2Eev:{domain:"sensor",name:"HP2 - EEV steps",optional:!0},hp2FourWay:{domain:"binary_sensor",name:"HP2 - 4-Way valve",optional:!0},apply:{domain:"button",name:"Complete setup"},reset:{domain:"button",name:"Reset setup state"}};Hn.forEach(e=>{let t=`HP${e} - EXPERIMENTAL`;I[_e(e,"Enable")]={domain:"switch",name:`${t} ODU runtime frequency write enable`,optional:!0},I[_e(e,"Load")]={domain:"button",name:`${t} load ODU runtime frequency table`,optional:!0},I[_e(e,"Apply")]={domain:"button",name:`${t} apply ODU runtime frequency table`,optional:!0},I[_e(e,"Status")]={domain:"text_sensor",name:`${t} ODU runtime frequency status`,optional:!0},za.forEach(r=>{Pr.forEach(n=>{I[zo(e,r,n)]={domain:"number",name:`${t} ${nw(r)} F${n} runtime Hz`,optional:!0}})})});var Qa=[{id:"overview",label:"Overzicht",icon:"monitor-dashboard"},{id:"energy",label:"Energie",icon:"zap"},{id:"results",label:"Resultaten",icon:"bar-chart"},{id:"control",label:"Beslislog",icon:"activity",badge:"BETA"},{id:"diagnosis",label:"Diagnose",icon:"activity"},{id:"settings",label:"Instellingen",icon:"settings"}],Td=new Set(Qa.map(e=>e.id)),iw={activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',"bar-chart":'<path d="M4 19V5"/><path d="M20 19H4"/><rect x="7" y="11" width="3" height="5" rx="1"/><rect x="12" y="7" width="3" height="9" rx="1"/><rect x="17" y="3" width="3" height="13" rx="1"/>',clipboard:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',"clipboard-check":'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/><path d="m11 14 2 2 4-5"/>',droplet:'<path d="M12 3.2s6 6.5 6 10.8a6 6 0 0 1-12 0c0-4.3 6-10.8 6-10.8z"/>',flame:'<path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.04 -1.77 4.74 -3 6c-1.23 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.53 -1.06 -3.94 -2 -5c-1.79 3 -2.79 3 -4 2z"/>',"home-cog":'<path d="M5 12h-2l9 -9l9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h4"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1"/><circle cx="17" cy="18" r="2"/><path d="M17 14.5v1.5"/><path d="M17 20v1.5"/><path d="M13.97 16.25l1.3 .75"/><path d="M18.73 19l1.3 .75"/><path d="M20.03 16.25l-1.3 .75"/><path d="M15.27 19l-1.3 .75"/>',link:'<path d="M9 15l6 -6"/><path d="M11 6l.46 -.54a5 5 0 0 1 7.08 7.08l-.54 .46"/><path d="M13 18l-.46 .54a5 5 0 0 1 -7.08 -7.08l.54 -.46"/>',"monitor-dashboard":'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M6.5 7h7v4h-7z"/><path d="M16 7h2"/><path d="M16 10h2"/><path d="M6.5 13h3"/><path d="M11 13h2.5"/>',"more-horizontal":'<path d="M5 12h.01"/><path d="M12 12h.01"/><path d="M19 12h.01"/>',settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/>',server:'<rect x="3" y="4" width="18" height="8" rx="3"/><rect x="3" y="12" width="18" height="8" rx="3"/><path d="M7 8h.01"/><path d="M7 16h.01"/>',shield:'<path d="M12 3 19 6v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6z"/><path d="m9 12 2 2 4-5"/>',snowflake:'<path d="M12 4v16"/><path d="M4 12h16"/><path d="m6.4 6.4 11.2 11.2"/><path d="m17.6 6.4 -11.2 11.2"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66 -1.41 1.41"/><path d="m19.07 4.93 -1.41 1.41"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>',thermometer:'<path d="M14 14.76V5a2 2 0 0 0-4 0v9.76a4 4 0 1 0 4 0z"/><path d="M12 9v6"/>',tool:'<path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8z"/>',waves:'<path d="M3 8c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 13c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/><path d="M3 18c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0"/>',wifi:'<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'};function ge(e,t=""){let r=iw[e];return r?`<svg${t?` class="${sw(t)}"`:""} viewBox="0 0 24 24" aria-hidden="true" focusable="false">${r}</svg>`:""}function sw(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}var Se=[{id:"installation",label:"Installatie",icon:"home-cog"},{id:"heating",label:"Verwarmen",icon:"flame"},{id:"cooling",label:"Koelen",icon:"snowflake"},{id:"integrations",label:"Bronnen / integraties",icon:"link"},{id:"service",label:"Service",icon:"tool"},{id:"system",label:"Systeem",icon:"server"}],Ie=new Set(Se.map(e=>e.id)),Ya=[{title:"HP1",accent:"blue",keys:{power:"hp1Power",heat:"hp1Heat",cooling:"hp1Cooling",cop:"hp1Cop",compressor:"hp1Compressor",freq:"hp1Freq",fanSpeed:"hp1FanSpeed",flow:"hp1Flow",evaporatorCoilTemp:"hp1EvaporatorCoilTemp",innerCoilTemp:"hp1InnerCoilTemp",outsideTemp:"hp1OutsideTemp",condenserPressure:"hp1CondenserPressure",dischargeTemp:"hp1DischargeTemp",evaporatorPressure:"hp1EvaporatorPressure",returnTemp:"hp1ReturnTemp",waterIn:"hp1WaterIn",waterOut:"hp1WaterOut",mode:"hp1Mode",failures:"hp1Failures",defrost:"hp1Defrost",bottomPlate:"hp1BottomPlate",crankcase:"hp1Crankcase",eev:"hp1Eev",fourWay:"hp1FourWay"}},{title:"HP2",accent:"orange",keys:{power:"hp2Power",heat:"hp2Heat",cooling:"hp2Cooling",cop:"hp2Cop",compressor:"hp2Compressor",freq:"hp2Freq",fanSpeed:"hp2FanSpeed",flow:"hp2Flow",evaporatorCoilTemp:"hp2EvaporatorCoilTemp",innerCoilTemp:"hp2InnerCoilTemp",outsideTemp:"hp2OutsideTemp",condenserPressure:"hp2CondenserPressure",dischargeTemp:"hp2DischargeTemp",evaporatorPressure:"hp2EvaporatorPressure",returnTemp:"hp2ReturnTemp",waterIn:"hp2WaterIn",waterOut:"hp2WaterOut",mode:"hp2Mode",failures:"hp2Failures",defrost:"hp2Defrost",bottomPlate:"hp2BottomPlate",crankcase:"hp2Crankcase",eev:"hp2Eev",fourWay:"hp2FourWay"}}],Cd=Ya.flatMap(e=>Object.values(e.keys)),lw=new Set(["cop","compressor","mode","failures","defrost","bottomPlate","crankcase","eev","fourWay"]),cw=Ya.flatMap(e=>Object.entries(e.keys).filter(([t])=>!lw.has(t)).map(([,t])=>t)),ke=[{key:"curveM20",outdoor:-20,label:"-20\xB0C"},{key:"curveM10",outdoor:-10,label:"-10\xB0C"},{key:"curve0",outdoor:0,label:"0\xB0C"},{key:"curve5",outdoor:5,label:"5\xB0C"},{key:"curve10",outdoor:10,label:"10\xB0C"},{key:"curve15",outdoor:15,label:"15\xB0C"}],xt=["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"],Uo=["dayMax","silentMax","maxWater"],nt=["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm"],Lr=["flowKp","flowKi"],Dn=["hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset"],Nn=["hp1WaterInRaw","hp1WaterIn","hp1WaterOutRaw","hp1WaterOut","hp2WaterInRaw","hp2WaterIn","hp2WaterOutRaw","hp2WaterOut"],On=["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","compressorCyclingAlertAlternating","compressorCyclingAlertFirstSeen","compressorCyclingAlertLastSeen","compressorCyclingAlertHp1Peak2h","compressorCyclingAlertHp1Peak72h","compressorCyclingAlertHp2Peak2h","compressorCyclingAlertHp2Peak72h","acknowledgeCompressorCyclingAlert","acknowledgeHpIncidents","hp1CompressorStarts2h","hp1CompressorStarts6h","hp1CompressorStarts24h","hp1CompressorStarts72h","hp1CompressorLastStartAge","hp2CompressorStarts2h","hp2CompressorStarts6h","hp2CompressorStarts24h","hp2CompressorStarts72h","hp2CompressorLastStartAge","lowflowFaultActive","pt1000ReadProblem","waterSupplyTempFallbackActive","flowMismatch","boilerFaultFallbackEnabled","cicPollingEnabled","cicDataStale","otEnabled","otThermostatStatusValid","otLinkProblem","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","hp1Failures","hp2Failures"],uw=["compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","compressorCyclingAlertLatched","lowflowFaultActive","pt1000ReadProblem","waterSupplyTempFallbackActive","flowMismatch","cicPollingEnabled","cicDataStale","otEnabled","otThermostatStatusValid","otLinkProblem","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","hp1Failures","hp2Failures"],Ja=["commissioningStatus","cm100Active","commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","boilerHeatPower","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeStart","airPurgeAbort","airPurgeReturnToAuto","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualFlowActive","manualFlowStatus","manualFlowSetpoint","manualFlowTargetIpwm","manualHpStart","manualHpAbort","manualHpActive","manualHpStatus","manualHpGuardStatus","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg",...Nn,"hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"],Pn=new Set(["commissioningStatus","cm100Active","boilerPowerTestResult","boilerPowerTestConfidence","boilerPowerTestActive","boilerPowerTestStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","airPurgeActive","airPurgeStatus","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","manualFlowActive","manualFlowStatus","manualFlowTargetIpwm","manualHpActive","manualHpStatus","manualHpGuardStatus","hpWaterCalibrationActive","hpWaterCalibrationStatus","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg"]),Bs=["cicCompatibilityMode"],Vs=["otEnabled","otLinkProblem"],Go=["boilerConnection","boilerFaultFallbackEnabled"],Ks=["cicPollingEnabled","cicFeedUrl","cicDataStale"],zs=["otThermostatChEnable","otThermostatCoolingEnable","otControlSetpoint","otRoomSetpoint","otRoomTemp"],Za=["boilerCommandValid","boilerCommandActive","boilerCommandTargetTemperature","boilerCommandRequestedPower","boilerCommandAge","boilerCommandSource","boilerBlockReason"],Xa=["otbLinkAvailable","otbChCommand","otbControlSetpointCommand","otbFaultIndication","otbChActive","otbDhwActive","otbFlameOn","otbDiagnosticIndication","otbDhwPresent","otbServiceRequest","otbLockoutReset","otbLowWaterPressure","otbFlameFault","otbAirPressureFault","otbWaterOverTemp","otbRelativeModulation","otbChPressure","otbBoilerWaterTemp","otbReturnWaterTemp","otbDhwTemp","otbOemFaultCode","otbOemDiagnosticCode","otbMaxCapacity","otbMinModulation","otbOpenThermVersion","otbDeviceType","otbDeviceVersion","otbLastResponseAge","otbResponseCount","otbLastResponseId"],Us=["cicJsonFeedOk","cicWaterSupplyTemp","cicControlSetpoint","cicRoomSetpoint","cicRoomTemp","cicFlowrate","cicLastSuccessAge","cicChEnabled","cicCoolingEnabled"],Ln=["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource"],Gs=["supplyTemp","waterSupplyTempEffectiveSource","waterSupplyTempEsp","waterSupplyTempPt1000","waterSupplyTempDs18b20","waterSupplyTempHa","waterSupplyTempHaValid","flowSelected","flowLocal","controllerFlow","hp1Flow","hp2Flow","outsideTempSelected","outsideTempLocalAggregated","outsideTempHa","outsideTempHaValid","mqttOutsideTemperature","mqttOutsideTemperatureAge","mqttOutsideTemperatureValid","roomTemp","roomTempEffectiveSource","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpoint","roomSetpointEffectiveSource","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid","mqttHeatingEnable","mqttHeatingEnableAge","mqttHeatingEnableValid","heatingEnableSelected","heatingEnableValid","heatingBlockedByThermostat","heatingEnableEffectiveSource","otThermostatChEnable","otThermostatStatusValid","cicChEnabled","cicChEnableValid","heatingEnableHa","heatingEnableHaValid","mqttCoolingEnable","mqttCoolingEnableAge","mqttCoolingEnableValid","coolingEnableValid","coolingEnableSelected","coolingEnableEffectiveSource","otThermostatCoolingEnable","coolingEnableHa","coolingEnableHaValid","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid"],bt=["hardwareProfileText","hpGeneration","flowSource","qFlowSource","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicFlowrate","controllerFlow","flowSelected","flowLocal","hp1Flow","hp2Flow","commissioningCm100Start","commissioningCm100Stop","commissioningStatus","cm100Active","quickFlowTest"],Qo=["hardwareProfileText","roomTempSource","roomSetpointSource","roomTemp","roomSetpoint","roomTempEffectiveSource","roomSetpointEffectiveSource","otEnabled","otLinkProblem","otRoomTemp","otRoomSetpoint","cicPollingEnabled","cicFeedUrl","cicJsonFeedOk","cicDataStale","cicRoomTemp","cicRoomSetpoint","roomTempHa","roomTempHaValid","mqttRoomTemperature","mqttRoomTemperatureAge","mqttRoomTemperatureValid","roomSetpointHa","roomSetpointHaValid","mqttRoomSetpoint","mqttRoomSetpointAge","mqttRoomSetpointValid"],Qs=["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingDewPointSource","coolingWithoutDewPointMode","coolingGuardMode","coolingDewPointSelected","coolingDewPointHa","coolingDewPointHaValid","mqttCoolingDewPoint","mqttCoolingDewPointAge","mqttCoolingDewPointValid","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp"],Yo=[...ke.map(e=>e.key),"curveFallbackSupply","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd"],Ys=["minRuntime","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"],Jo=["silentStartTime","silentEndTime","silentMax","dayMax"],ei=["boilerSupportStartThreshold","boilerSupportStopThreshold"],Js=["controlModeOverride","hp1RuntimeHours","hp2RuntimeHours","runtimeLeadHp","resetRuntimeCountersHp1","resetRuntimeCountersHp1Hp2"],xd=1e4;var ti=[{minutes:15,label:"15 min"},{minutes:30,label:"30 min"},{minutes:60,label:"1 uur"}],Zo=["projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","hardwareRevisionText","connectionText","timeValid","controlModeLabel","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","flowSelected","flowControlMode","flowMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi","totalPower","heatingPowerInput","coolingPowerInput","hp1Mode","hp1Compressor","hp1Freq","hp1Flow","hp1Power","hp1Heat","hp1Cooling","hp1EvaporatorCoilTemp","hp1InnerCoilTemp","hp1CondenserPressure","hp1EvaporatorPressure","hp1WaterIn","hp1WaterOut","hp1Defrost","hp1Failures","hp2Mode","hp2Compressor","hp2Freq","hp2Flow","hp2Power","hp2Heat","hp2Cooling","hp2EvaporatorCoilTemp","hp2InnerCoilTemp","hp2CondenserPressure","hp2EvaporatorPressure","hp2WaterIn","hp2WaterOut","hp2Defrost","hp2Failures","coolingEnableSelected","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingMinimumSupplyTemp","coolingSafetyMargin","coolingRoomRequestRequired","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingBaseDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingBufferGapFiltered","coolingBufferGapRate","coolingProjectedGap","coolingProjectionBrakeActive","coolingDewGap","coolingStopBufferGap","coolingLimiterReasonCode","coolingStopReasonCode","coolingRequestReasonCode","coolingRequestHp1Level","coolingRequestHp2Level","coolingRequestOwnerHp","coolingOwnerHp","coolingWaterCycleActive","requestReason","strategyActiveCode","strategyPhaseCode","strategyRequestedPower","strategySupplyTarget","strategyWaterLimitFactor","strategyRequestActive","strategyWaterTripActive","strategyWaterHardTripActive","curveControlProfile","heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd","curveSupplyTarget","curveDemandEffective","curveDemandDiscrete","curveDispatchTotalLevel","curveTargetHp1Level","curveTargetHp2Level","curveRestartInhibit","curvePhase","curveOperatingRegime","curveCapacityMode","phouseHouse","phouseReq","hpCapacity","hpDeficit","duoOptimizerReason","selectedInputHoldActive","silentActive","lowLoadDynamicThresholds","lowLoadDynamicOffFactor","lowLoadDynamicOnFactor","lowLoadMinimumHysteresis","lowLoadCm2ReentryBlock","lowflowFaultActive","flowMismatch","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","cicDataStale","otLinkProblem"],Yt=["firmwareUpdate","firmwareUpdateChannel","firmwareUpdateTarget","firmwareUpdateProgress","firmwareUpdateStatus"],dw=["firmwareTestOtaUrl","firmwareTestOtaMd5Url","installFirmwareTestOta"],Mt=[...Yt,...dw,"installFirmwareUpdateTarget","projectVersionText","releaseChannelText","installationTopology","hardwareProfileText","connectionText"],Ir=["hp2ExcludedA","hp2ExcludedB","hp2Power","hp2WaterOut"],at=["status","uptime","uptimeReadable","timeNowHhmm","timeValid","ipAddress","wifiSsid","wifiSignal","installationTopology","hardwareProfileText","connectionText","hpGeneration","projectVersionText","releaseChannelText","espInternalTemp","controlModeOverride"],In=["strategy","openquattEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","boilerCvAssistEnabled","boilerConnection","openquattResumeAt","manualCoolingEnable","silentModeOverride","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","coolingRequestActive","coolingPermitted","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","controlModeLabel","flowMode","totalPower","heatingPowerInput","coolingPowerInput","totalCop","totalEer","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive","boilerCommandValid","boilerCommandActive","boilerCommandTargetTemperature","boilerCommandRequestedPower","boilerBlockReason","boilerHeatPower","otbLinkAvailable","otbFaultIndication","otbChActive","otbDhwActive","otbFlameOn","otbDiagnosticIndication","otbRelativeModulation","otbChPressure","otbBoilerWaterTemp","otbReturnWaterTemp","otbLastResponseAge","systemHeatPower","electricalEnergyDaily","electricalEnergyCumulative","heatingElectricalEnergyDaily","heatingElectricalEnergyCumulative","coolingElectricalEnergyDaily","coolingElectricalEnergyCumulative","heatpumpThermalEnergyDaily","heatpumpThermalEnergyCumulative","heatpumpCoolingEnergyDaily","heatpumpCoolingEnergyCumulative","heatpumpCopDaily","heatpumpCopCumulative","heatpumpEerDaily","heatpumpEerCumulative","boilerThermalEnergyDaily","boilerThermalEnergyCumulative","systemThermalEnergyDaily","systemThermalEnergyCumulative","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive",...Cd],Md=["strategyActiveCode","hp1CompressorStarts24h","hp2CompressorStarts24h","hp1RuntimeHours","hp2RuntimeHours"],Zs=["strategy","openquattEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","boilerCvAssistEnabled","boilerRatedHeatPower","boilerConnection","boilerFaultFallbackEnabled","openquattResumeAt","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","trendHistoryEnabled","trendHistoryFlashEnabled","coolingPermitted","coolingRequestActive","coolingBlockReason","coolingGuardMode","coolingDewPointSelected","coolingEffectiveMinSupplyTemp","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","controlModeLabel","flowMode","flowSelected","outsideTempSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget","silentActive","stickyActive","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","totalCop","totalEer","strategyRequestedPower","phouseReq","hpCapacity","boilerActive","boilerCommandValid","boilerCommandActive","boilerCommandTargetTemperature","boilerCommandRequestedPower","boilerBlockReason","boilerHeatPower","otbLinkAvailable","otbFaultIndication","otbChActive","otbDhwActive","otbFlameOn","otbDiagnosticIndication","otbRelativeModulation","otbChPressure","otbBoilerWaterTemp","otbReturnWaterTemp","otbLastResponseAge","systemHeatPower","silentModeOverride",...Cd,...uw],$d=["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Go,"otbConnectionAutoSelected","strategy",...xt,...Yo,...nt,"maxWater",...Jo,...bt,...Qo,"coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingEffectiveMinSupplyTemp","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingSupplyTarget","coolingSupplyError","coolingDemandRaw","coolingLimitedDemand","coolingLimiterAllowedMax","coolingLimiterReasonCode","totalPower","heatingPowerInput","coolingPowerInput","totalHeat","totalCoolingPower","strategyRequestedPower","phouseHouse","phouseReq","hpCapacity","boilerActive",...Za,"boilerHeatPower",...Xa,"systemHeatPower","flowSelected","roomTemp","roomSetpoint","supplyTemp","curveSupplyTarget",...cw],oi=[{label:"Nu",tone:"blue",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","heatingPowerInput"],["Warmteafgifte","totalHeat"],["COP","totalCop"]]},{title:"CV-ketel",rows:[["Warmteafgifte","boilerHeatPower"]]},{title:"Systeem",rows:[["Warmteafgifte","systemHeatPower"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektrisch vermogen","coolingPowerInput"],["Koelafgifte","totalCoolingPower"],["COP (EER)","totalEer"]]}]}]},{label:"Vandaag",tone:"orange",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyDaily"],["Warmte","heatpumpThermalEnergyDaily"],["COP","heatpumpCopDaily"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyDaily"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyDaily"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyDaily"],["Koeling","heatpumpCoolingEnergyDaily"],["COP (EER)","heatpumpEerDaily"]]}]}]},{label:"Cumulatief",tone:"green",counterResetKey:"resetCumulativeEnergyCounters",categories:[{title:"Verwarmen",tone:"orange",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","heatingElectricalEnergyCumulative"],["Warmte","heatpumpThermalEnergyCumulative"],["COP","heatpumpCopCumulative"]]},{title:"CV-ketel",rows:[["Warmte","boilerThermalEnergyCumulative"]]},{title:"Systeem",rows:[["Warmte","systemThermalEnergyCumulative"]]}]},{title:"Koelen",tone:"blue",groups:[{title:"Warmtepomp",rows:[["Elektriciteit","coolingElectricalEnergyCumulative"],["Koeling","heatpumpCoolingEnergyCumulative"],["COP (EER)","heatpumpEerCumulative"]]}]}]}],ri=["strategy","installationTopology","hpGeneration","openquattEnabled","boilerCvAssistEnabled","boilerRatedHeatPower",...Go,...ei,...Ja,"manualCoolingEnable","usageTelemetryEnabled","usageTelemetryInstallationId","silentModeOverride","trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","decisionLogHistoryEnabled","decisionLogHistoryFlush","decisionLogHistoryClear","webServerLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear",...Bs,...Vs,...zs,...Za,...Xa,...Ks,...Us,...Ln,...Gs,...nt,...Lr,...Dn,...Nn,...On,...Qs,...Uo,...xt,...Yo,...Ys,...Jo,...Js,...Ua];var b0=new Set(["installationTopology",...Ja,...Ua,"cicDataStale","otLinkProblem","otbChCommand","otbControlSetpointCommand","coolingGuardMode","coolingFallbackNightMinOutdoorTemp","coolingFallbackMinSupplyTemp","coolingEffectiveMinSupplyTemp","statusLedsEnabled","usageTelemetryEnabled","controlModeOverride"]),Jt=[{id:"installation",label:"Installatie",keys:["setupComplete","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Go,...ei]},{id:"operation",label:"Bediening",keys:["strategy","openquattEnabled","manualCoolingEnable","silentModeOverride","openquattResumeAt"]},{id:"integrations",label:"Integraties",keys:["otEnabled","cicPollingEnabled","cicFeedUrl","cicCompatibilityMode"]},{id:"sensor_sources",label:"Sensorbronnen",keys:["waterSupplySource","localWaterSupplyTempSource","flowSource","qFlowSource","outdoorUnitFlowMode","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource","coolingDewPointSource",...Dn]},{id:"comfort",label:"Comfort",keys:["silentStartTime","silentEndTime","dayMax","silentMax","maxWater"]},{id:"heatingCurve",label:"Stooklijn",keys:["curveControlProfile","curveFallbackSupply",...ke.map(e=>e.key),"heatingCurvePidKp","heatingCurvePidKi","heatingCurvePidKd"]},{id:"powerHouse",label:"Power House",keys:["housePower","houseColdTemp","houseOutdoorMax","phResponseProfile","phKp","phComfortBelow","phComfortAbove","phDemandRiseTime","phDemandFallTime"]},{id:"flow",label:"Flow",keys:["flowControlMode","flowSetpoint","coolingFlowSetpoint","manualIpwm","flowKp","flowKi"]},{id:"cooling",label:"Koeling",keys:["coolingMinimumSupplyTemp","coolingDemandMax","coolingRestartDelta","coolingPidKp","coolingPidKi","coolingPidKd","coolingRoomRequestRequired","coolingRequestOnDelta","coolingRequestOffDelta","coolingSafetyMargin","coolingWithoutDewPointMode"]},{id:"compressor",label:"Compressor",keys:["minRuntime","compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","hp1ExcludedA","hp1ExcludedB","hp2ExcludedA","hp2ExcludedB"]},{id:"system",label:"Systeem",keys:["trendHistoryEnabled","trendHistoryFlashEnabled","decisionLogHistoryEnabled","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","webServerLogHistoryEnabled","firmwareUpdateChannel"]}],Xs=2,yo=[...new Set(Jt.flatMap(e=>e.keys))],Ad=new Set(yo),_d=5e3,Rd=3e4,Hd=6e4,So=12e3,Fr=4e3,Dd=1500,Nd=3e4,Od=3e4,Pd=1e3,Fn=3e4,el=250,Ld=750,pw=22,Id=pw/1.7,Fd=360/3.2,Xo="2000-01-01 00:00:00";function jd(e){return{controlReplayTab:"status",controlReplayWindow:"last24",controlReplayPeriodMenuOpen:!1,controlReplayCustomPeriodOpen:!1,controlReplayCustomStart:"",controlReplayCustomEnd:"",controlReplayCustomPeriodError:"",controlReplaySelectedEpisode:"",controlReplaySupportDetailsItemId:"",controlReplayGraphMinute:1e3,controlReplayScrubbing:!1,decisionLog:null,decisionLogError:"",decisionLogSignature:"",decisionLogLastFetchAt:0,decisionLogFetchPromise:null,decisionLogStorageMetadata:{},decisionLogStorageMetadataError:"",decisionLogStorageMetadataSignature:"",decisionLogStorageMetadataLastFetchAt:0,decisionLogStorageMetadataFetchPromise:null,trendWindowHours:e,trendHistoryRaw:"",trendHistoryError:"",trendHistorySignature:"",trendHistoryNowMs:Number.NaN,trendHistoryLastFetchAt:0,trendHistoryFetchPromise:null,trendHistoryMetadata:{},trendHistoryMetadataError:"",trendHistoryMetadataSignature:"",trendHistoryMetadataLastFetchAt:0,trendHistoryMetadataFetchPromise:null,energyHistoryRaw:"",energyHistoryError:"",energyHistorySignature:"",energyHistoryNowMs:Number.NaN,energyHistoryLastFetchAt:0,energyHistoryRequestQuery:"",energyHistoryFetchQuery:"",energyHistoryFetchPromise:null,energyHistoryCsrfToken:"",energyHistoryView:"day",energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:"",energyHistoryExportMode:"days_and_hours",energyHistoryExportBusy:!1,energyHistoryExportError:"",energyHistoryExportNotice:"",settingsStorageAdvancedOpen:!1,settingsStorageDetailsOpen:!1,settingsStoragePage:"overview",energyHistoryPeriodSelection:{day:"",week:"",month:"",year:""}}}function Wd(e){return{webServerLogSource:null,webServerLogConnected:!1,webServerLogEnabled:null,webServerLogError:"",webServerLogHistoryLoading:!1,webServerLogHistoryError:"",webServerLogHistoryRequestToken:0,webServerLogHistoryLoaded:!1,webServerLogCsrfToken:"",webServerLogHistoryNeedsReconcile:!1,webServerLogScrollRestoreToken:0,cm100CommissioningScrollRestoreToken:0,serviceTaskModalScrollRestoreToken:0,historyStorageModalScrollRestoreToken:0,quickStartScrollRestoreToken:0,quickStartCicFeedUrlDraft:null,quickStartThermostatSourceDraft:null,quickStartSetupDraft:"",quickStartSetupConfirmed:!1,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogRecentTail:[],webServerLogRecentAnchorAt:0,webServerLogEntries:[],debugRecordingActive:!1,debugRecordingStartedAt:0,debugRecordingEndsAt:0,debugRecordingTimer:null,debugRecordingSamples:[],debugRecordingError:"",debugRecordingNotice:"",debugRecordingBusy:!1,debugRecordingLastSampleAt:0,debugRecordingSequence:0,debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingEvents:[],debugRecordingSelectedMinutes:15,debugRecordingDeviceStatus:null,debugRecordingAcknowledgedId:e,debugRecordingDeviceBundle:null,debugRecordingDevicePollTimer:null}}function Bd(){return{complete:!1,lastKnownInstallationTopology:"",quickStartModalOpen:!0,loadingEntities:!0,entities:{},optionalMissingEntities:{},renderedAppView:"",renderedSettingsGroup:"",settingsPageScrollRestoreToken:0,settingsInfoOpen:"",settingsAdvancedOpen:{},pendingControlModeOverride:"",installationMonitoringDetailsOpen:!1,compressorLimitsOpen:!1,integrationDiagnosticsOpen:!1,oduRuntimeFrequencyDetailsOpen:!1,usageTelemetryDetailsOpen:!1,installationMonitoringProblemSignature:"",incidentMonitoringSnapshot:null,incidentMonitoringError:"",incidentMonitoringUnsupported:!1,incidentMonitoringFailureCount:0,incidentMonitoringSignature:"",incidentMonitoringRenderPending:!1,incidentMonitoringLastFetchAt:0,incidentMonitoringFetchPromise:null,incidentAction:{hp:0,kind:"",requestId:0,pending:!1,ok:null,result:""},settingsInteractionLock:!1,settingsRenderSignature:"",settingsBackupDraft:null,settingsBackupMqttPassword:"",settingsBackupRestoreResult:null,settingsBackupError:"",settingsBackupBusy:!1,pendingCommissioningCm100Start:!1,pendingBoilerPowerTestStart:!1,pendingFlowAutotuneStart:!1,pendingAirPurgeStart:!1,pendingManualFlowStart:!1,pendingManualHpStart:!1,pendingHpWaterCalibrationStart:!1,commissioningTaskLock:"",commissioningBoilerHeatPowerDisplay:"",headerRenderSignature:"",drafts:{},inputDrafts:{},focusedField:""}}function Vd(){return{authStatus:null,authDraftUsername:"",authDraftCurrentPassword:"",authDraftNewPassword:"",authDraftConfirmPassword:"",authBusy:!1,authNotice:"",authError:"",apiSecurityStatus:null,apiSecurityBusy:!1,apiSecurityNotice:"",apiSecurityError:"",mqttStatus:null,mqttDraftEnabled:!1,mqttDraftBroker:"",mqttDraftPort:"1883",mqttDraftUsername:"",mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1,mqttBusy:!1,mqttNotice:"",mqttError:"",mqttCopiedTopicKey:"",mqttCopiedTopicTimer:null,mqttExpandedTopicKey:"",mqttInputToggleBusyKey:"",mqttRetainedToggleBusyKey:"",mqttSensorsModalRenderSignature:""}}function Kd(){return{updateCheckBusy:!1,updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallStatusPollObserved:!1,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:"",firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchOpen:!1,firmwareTopologySwitchConfirmed:!1,updateInstallCompleted:!1,updateInstallCompletedVersion:"",updateManualUploadOpen:!1,updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:"",updateTestFirmwareOpen:!1,updateTestFirmwarePr:"",updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null,pauseResumeDraft:""}}function zd(e){return{draggingCurveKey:"",motionFrame:0,motionStartedAt:0,reducedMotion:e,motionPreferenceMedia:null,motionPreferenceListener:null,motionTargets:{pipeFlows:[],fanBlades:[]}}}function mw(){try{return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id")||"")}catch{return""}}var $t=24,er=[3,12,24,72,168,336,720],o={mounted:!1,root:null,nativeApp:null,nativeFrontendLoaded:!1,nativeFrontendLoading:!1,pollTimer:null,supplementaryPrimeTimer:null,entitySyncInFlight:!1,pendingEntitySyncOptions:null,lastEntitySyncAttemptAt:0,lastFastEntitySyncAt:0,lastBulkEntitySyncAt:0,lastStaticEntitySyncAt:0,lastAuthStatusRefreshAt:0,loginAuthStatusPollTimer:null,lastApiSecurityStatusRefreshAt:0,lastMqttStatusRefreshAt:0,summary:"",stage:"Laden...",interfacePanelOpen:fw(),devPanelOpen:!1,nativeOpen:hw()==="native",currentStep:"setup",quickStartModalMode:"wizard",settingsGroup:bw(),appView:"",overviewTheme:gw(),hpVisualMode:vw(),hpLayoutMode:ww(),...jd(yw()),deviceReconnectMode:"",deviceReconnectStartedAt:0,deviceReconnectRecoveryStartedAt:0,deviceReconnectRecoveryTimer:null,deviceReconnectLastError:"",ota:{on:!1,ok:0,id:null,wait:!1,base:null},firmwareOtaQuietUntil:0,firmwareOtaQuietTimer:null,entitySyncFailureCount:0,lastEntitySyncAt:0,lastEntitySyncSuccessAt:0,lastEntityResponseAt:0,overviewMetadataHydrated:!1,overviewMetadataHydrating:!1,busyAction:"",controlError:"",controlNotice:"",...Wd(mw()),...Bd(),updateModalOpen:!1,systemModal:"",...Vd(),...Kd(),...zd(Sw())};function gw(){try{return window.localStorage.getItem("oq-overview-theme")==="dark"?"dark":"light"}catch{return"light"}}function fw(){return!1}function hw(){try{return window.localStorage.getItem("oq-active-surface")==="native"?"native":"app"}catch{return"app"}}function bw(){try{let e=window.localStorage.getItem("oq-settings-group");return Ie.has(e)?e:Se[0].id}catch{return Se[0].id}}function vw(){try{return window.localStorage.getItem("oq-hp-visual-mode")==="compact"?"compact":"schematic"}catch{return"schematic"}}function ww(){try{let e=window.localStorage.getItem("oq-hp-layout-mode");return e==="focus-hp1"||e==="focus-hp2"?e:"equal"}catch{return"equal"}}function yw(){try{let e=Number(window.localStorage.getItem("oq-trend-window-hours"));return er.includes(e)?e:$t}catch{return $t}}function tl(){if(typeof window>"u"||typeof window.matchMedia!="function")return null;try{return window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return null}}function Sw(){return!!tl()?.matches}function y(e){return!!o.entities[e]}function T(e){if(Object.prototype.hasOwnProperty.call(o.drafts,e))return o.drafts[e];let t=o.entities[e];return t?t.value??t.state??"":""}function ze(e){let t=o.entities[e]||{};return{min:Number(t.min_value??0),max:Number(t.max_value??100),step:Number(t.step??1),uom:t.uom||""}}function pe(e){if(typeof e=="number")return e;let t=String(e??"").trim().replace(",",".");return!t||t==="-"||t==="."||t==="-."?Number.NaN:Number(t)}function At(e){let t=String(e||"").trim();if(!t)return"";let r=t.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]||"0");return[n,a,i].some(l=>Number.isNaN(l))||n<0||n>23||a<0||a>59||i<0||i>59?"":`${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function jn(e){let t=At(e);return t?t.slice(0,5):""}function Xe(e){let t=String(e||"").trim();if(!t)return"";let r=t.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);if(!r)return"";let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),c=Number(r[5]),d=Number(r[6]||"0");return[n,a,i,l,c,d].some(u=>Number.isNaN(u))||n<2e3||a<1||a>12||i<1||i>31||l<0||l>23||c<0||c>59||d<0||d>59?"":`${String(n).padStart(4,"0")}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")} ${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}:${String(d).padStart(2,"0")}`}function ni(e){let t=Xe(e);return!t||t===Xo?"":t.slice(0,16).replace(" ","T")}function Gd(e){let t=Xe(e);if(!t||t===Xo)return null;let r=t.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);if(!r)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=Number(r[4]),c=Number(r[5]),d=Number(r[6]),u=new Date(n,a-1,i,l,c,d,0);return Number.isNaN(u.getTime())?null:u}function Wn(e=T("openquattResumeAt")){return!!Gd(e)}function jr(e,t=!1){let r=Gd(e);return r?new Intl.DateTimeFormat("nl-NL",t?{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}:{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}).format(r):""}function Ud(e){let t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${t}-${r}-${n}T${a}:${i}`}function kw(e){let t=new Date(e.getTime());t.setSeconds(0,0);let r=t.getMinutes(),n=r%15;return n!==0&&t.setMinutes(r+(15-n)),t}function ol(e){let t=new Date;if(e==="2h"||e==="8h"){let r=e==="2h"?2:8,n=kw(new Date(t.getTime()+r*3600*1e3));return Ud(n)}if(e==="tomorrow-morning"){let r=new Date(t);return r.setDate(r.getDate()+1),r.setHours(7,0,0,0),Ud(r)}return""}function ai(){let e=ni(o.pauseResumeDraft);if(e)return e;let t=ni(T("openquattResumeAt"));return t||ol("2h")}function Y(e,t=T(e)){if(t===""||t===null||Number.isNaN(Number(t)))return"\u2014";let r=ze(e),n=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return`${Number(t).toFixed(n)}${r.uom?` ${r.uom}`:""}`}function qe(e,t){let r=ze(e),n=pe(t);if(Number.isNaN(n)){let d=pe(o.entities[e]?.value??o.entities[e]?.state??"");return Number.isNaN(d)?r.min:d}let a=Math.min(r.max,Math.max(r.min,n)),i=Math.round((a-r.min)/r.step),l=r.min+i*r.step,c=r.step<1?Math.min(4,Math.max(1,String(r.step).split(".")[1]?.length||1)):0;return Number(l.toFixed(c))}function ii(){let e=ke[Math.floor(ke.length/2-1)],t=ke[Math.floor(ke.length/2)];if(!e||!t||!y("curveFallbackSupply"))return null;let r=qe(e.key,T(e.key)),n=qe(t.key,T(t.key)),a=(r+n)/2,i=qe("curveFallbackSupply",a);return{value:i,label:Y("curveFallbackSupply",i),basis:`Afgeleid uit het midden van je stooklijn (${e.label} en ${t.label}).`,isCurrent:qe("curveFallbackSupply",T("curveFallbackSupply"))===i}}function qw(e){let t=String(e||"").replace(/\/$/,"");if(!t)return"";let r=t.split("/").pop()||"";return/\.[a-z0-9]+$/i.test(r)?t.slice(0,-r.length).replace(/\/$/,"")||"":t}function Ne(){return qw(window.location.pathname)}function Q(e,t,r=""){let n=r?`/${r}`:"";return`${Ne()}/${e}/${encodeURIComponent(t)}${n}`}function se(e=T("strategy")){return String(e||"").includes("Water Temperature Control")}function Qd(e=T("flowControlMode")){return String(e||"").toLowerCase().includes("manual")}function U(e,t,r=""){let n=Number(e);return Number.isNaN(n)?"\u2014":`${n.toFixed(t)}${r?` ${r}`:""}`}function tr(e){if(!Number.isFinite(e)||e<0)return"\u2014";let t=Math.floor(e),r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?`${r}d ${n}u`:n>0?`${n}u ${a}m`:`${a}m`}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Yd(){let e=[];e.push(se()?"Stooklijn":"Power House");let t=String(T(se()?"curveControlProfile":"phResponseProfile")||"").trim();t&&e.push(`profiel ${t}`);let r=String(T("flowControlMode")||"").trim();return r&&e.push(`flow ${r==="Manual PWM"?"handmatig":"setpoint"}`),r==="Manual PWM"&&y("manualIpwm")?e.push(`iPWM ${Y("manualIpwm")}`):y("flowSetpoint")&&e.push(`flow ${Y("flowSetpoint")}`),y("dayMax")&&e.push(`dag ${Y("dayMax")}`),y("silentMax")&&e.push(`silent ${Y("silentMax")}`),y("maxWater")&&e.push(`max water ${Y("maxWater")}`),e.filter(Boolean).join(", ")||"Instellingen beschikbaar"}function j(e,t="\u2014"){let r=o.entities[e];if(!r)return t;if(typeof r.state=="string"&&r.state.trim()!=="")return r.state;let n=r.value??r.state;return n==null||n===""?t:typeof n=="boolean"?n?"Aan":"Uit":typeof n=="number"&&!Number.isNaN(n)&&r.uom?`${n} ${r.uom}`:String(n)}function R(e){let t=Number(T(e));return Number.isNaN(t)?NaN:t}function rl(e){let t=String(e||"").toLowerCase();return t.includes("cop")||t.includes("eer")}function nl(e){let t=String(e||"");if(t==="totalEer"){let r=R("totalCoolingPower"),n=R("coolingPowerInput"),a=Number.isNaN(n)?R("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}if(t==="totalCop"){let r=R("totalHeat"),n=R("heatingPowerInput"),a=Number.isNaN(n)?R("totalPower"):n;return!Number.isNaN(r)&&!Number.isNaN(a)&&a>=5?r/a:NaN}return NaN}function Wr(e,t=""){let r=String(o.entities[e]?.uom||"").trim();return r||{totalPower:"W",heatingPowerInput:"W",coolingPowerInput:"W",totalHeat:"W",totalCoolingPower:"W",boilerHeatPower:"W",systemHeatPower:"W",hpCapacity:"W",hpDeficit:"W",flowSelected:"L/h",hp1Flow:"L/h",hp2Flow:"L/h",supplyTemp:"\xB0C",curveSupplyTarget:"\xB0C",coolingSupplyTarget:"\xB0C",coolingEffectiveMinSupplyTemp:"\xB0C",coolingDemandRaw:"W",hp1EvaporatorCoilTemp:"\xB0C",hp1InnerCoilTemp:"\xB0C",hp1OutsideTemp:"\xB0C",hp1CondenserPressure:"bar",hp1DischargeTemp:"\xB0C",hp1EvaporatorPressure:"bar",hp1ReturnTemp:"\xB0C",hp1WaterIn:"\xB0C",hp1WaterOut:"\xB0C",hp2EvaporatorCoilTemp:"\xB0C",hp2InnerCoilTemp:"\xB0C",hp2OutsideTemp:"\xB0C",hp2CondenserPressure:"bar",hp2DischargeTemp:"\xB0C",hp2EvaporatorPressure:"bar",hp2ReturnTemp:"\xB0C",hp2WaterIn:"\xB0C",hp2WaterOut:"\xB0C"}[e]||t}function it(e){let t=o.entities[e],r=nl(e);if(!t)return Number.isNaN(r)?"\u2014":U(r,1,Wr(e));let n=R(e);if(Number.isNaN(n))return Number.isNaN(r)?j(e):U(r,1,Wr(e));let a=n>0||Number.isNaN(r)?n:r,i=rl(e)?1:0;return U(a,i,Wr(e))}function C(e){let t=o.entities[e];if(!t)return!1;if(typeof t.value=="boolean")return t.value;let r=String(t.state??t.value??"").toLowerCase();return r==="on"||r==="true"||r==="1"}function vt(){return!y("trendHistoryEnabled")||C("trendHistoryEnabled")}function si(){let e=o.entities.setupComplete;if(!e)return null;let t=String(e.state??e.value??"").trim().toLowerCase();return!t||t==="unknown"||t==="unavailable"?null:t==="on"||t==="true"||t==="1"?!0:t==="off"||t==="false"||t==="0"?!1:null}function Jd(){return`
      <div class="oq-helper-app-nav">
        ${Qa.filter(e=>e.id!=="diagnosis"||vt()).map(e=>`
          <button
            class="oq-helper-app-tab ${o.appView===e.id?"is-active":""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${s(e.id)}"
          >
            ${ge(e.icon,"oq-helper-app-tab-icon")}
            <span>${s(e.label)}</span>
            ${e.badge?`<span class="oq-helper-app-tab-badge">${s(e.badge)}</span>`:""}
          </button>
        `).join("")}
      </div>
    `}function Ew(e=o.appView){return Qa.find(t=>t.id===e)?.label||"OpenQuatt"}function al(){if(typeof document>"u")return;if(o.nativeOpen){document.title="ESPHome fallback \u2022 OpenQuatt";return}let e=Ew();document.title=`${e} \u2022 OpenQuatt`}function il(){if(typeof document>"u")return;if(o.nativeOpen){document.documentElement.classList.add("oq-surface-native"),document.body&&document.body.classList.add("oq-surface-native"),document.documentElement.classList.remove("oq-page-dark","oq-page-light"),document.body&&document.body.classList.remove("oq-page-dark","oq-page-light");return}document.documentElement.classList.remove("oq-surface-native"),document.body&&document.body.classList.remove("oq-surface-native");let e=o.overviewTheme==="dark";document.documentElement.classList.toggle("oq-page-dark",e),document.documentElement.classList.toggle("oq-page-light",!e),document.body&&(document.body.classList.toggle("oq-page-dark",e),document.body.classList.toggle("oq-page-light",!e))}var li="data:image/webp;base64,UklGRkYTAABXRUJQVlA4WAoAAAAQAAAAFwEAoQAAQUxQSIQFAAABP8XIbdtIley0s/z/x3Ode0Tk4k8CpJxRRSgNYKzz3nRIJg6AWOWbUNtIUvMGz/bfMD4ki+j/BMhc78q22SWzD6eqXANQ6YyWHpBbHuAO0xaTPk8xvlOG2jaSIl//bb9ARBYREyCNXdG+4pvDmvYddgfv+5YkyZIkybaQNF8b5v8/9ZrKD2buWfe5PEXEBMjRtm2Nlff9/mR8Dm7lKfGSNfgafBPeuUNH5WRfuPt48r1IO/kuKhIRE+D/y5JhMtZKMkQ6WW1YAjauY5BaHQJZTZDYf+lWHiX3rp/ejqwWjL0LD4oCYS6K4v4ppFpIF4tHDx9bmJ48fvi0OAZbfsmPrs6yPFOYLGtVvm+727LLB7uUCFGM0SDl5ZojWPpHe9cqCSCiTEBJW9rOJRe2dBwAEWeCxm4fyz+BABFpCrBUAwRAxJqox78izhrwmMlrQDGrRYsZWQON/xv/N/5v/N/4v/F/4///htY/iBAsaNwZ+wsJSYIgBS27PzLGzLA/XmtFUhRnWg3ymLFjW401zxkzi/0BEklRqnSKaJ0UM2+ftWGw7mIsNtjvQbNEJXXoVI7j1OD02jFj57hng43VbbA1mHHpl0rTgoQ0nLWQ1qJmvbFzW5vW5jmMWWs7pr5Imp3RmWhNhISd1gwsZug1dm5X1rzMNMxMGychkuaQ7KCd6eXMIWdOP2zLAShYAmxz1+7dGLuw0a42PWalp7QqQdCKItpBfkwOG1qINwGs+TEzs2e4GPyMea4pcXDelmeEaEJWbunSm5UGQIyTBGHq/7o4M5k2uA2WGYveOY6jM6uFZclinStr2XJ70x8QhTgJhGM8+7ef0HamrsbCdjafF8Qp6fystgjL9GDZzj3TkI2+sxKJOBNu0/f5f0WTe2w1YnYs78v7MqidQTOtZcsyWiw7Rt2X73N3D5RXsPdf2/+OIbcsrJXl22WeHQ5KSka3tcYyy2paIPnz7lb4/jlZWrxa7BhplpGbJa1lvaWbsTBEHiyzbLjaYIb4cYyd6tu03+ufUzke9baNqvvT3ZAdTTiIVg9mWmvm2eb1Yl3rNht3tt3du/28zsG60c9Jmd7CYv1DGD32NjEbDtKnmR9+/HA6lTra0SOibsJeTWnJsBjT3LMxhs328/6s9POzZ17qVWdJCz36hdZvsL5bv9v6jaZ92ttwG67NdScmeL6xfc6Pc47TChLrmMiEGpR5LsvDcw1d7+s6RjIvpdJM01JSeWnSesuXjT79addjn5jXZaaNdbk2e72UI8FSl8nM8R5L08LO2KwNspFl7gOzPEfj7hhQQYC0cc9SkkSIIO+9fN8fblnzebHmuYZhBjO32WZ3JiNBmOMG5TU0RFtn9sNs0GXDjFlrD+yx5rUrOAVJeHYt5UUvQp69jD615o/f0D4ZDfNxDGPMzMxmowgDEZbPWZ55zdIVs02oec4wrHlOy9ZNZgDh7xmWhF5o+ZTlvfXyFziaz3uZ52DrzcaMDH8Th+mlZYSWnZHVMErmtXlGJdLODi0lUkoi8on8kr5A67H+fF+/2RfGB+ZhZjaztXUbt81y2brGDMNsCnkNiXAWIXKmBxERD0JoQT7m11ujNdlLI/ZVo8l27K09fnG+YjAMxjDmgY21GdNsGPMww3y9NdNCWZnyfAminX1QQ54P9Fh75Pdf/tx7e87rfPIyLGODsTasMd3M2nRbG/uGfM4zzxDkA/LMaz728t6a/A0u9vI+H/fwxuCFwZjXeQ6GmV+MJi3PYMlrPudzL+jl+/xR1/pzve6bj/M+3659Wtj0aIstpvkDZmmPfPsN0fx6k2k91rRYj/WYvlhfTNZ6WazH9DItFss+tCb76uN857VZQ7PW/FnDvnv24Z/y2lpvPJq/5PYP6//JAlZQOCCcDQAAcDgAnQEqGAGiAD5hLJNGpCKiISUTHBiADAlpbgrt04/Gw/v5uaPkQF4uE+CtA/lvZ/F2PjX/1cb2wSrn/JegxT1fJt9VZBkc/CH9Xx33rXPi2UlWg/CPyiccPcGvHvgHuP/0vCv3l/4XiS9FyJDw6+j9A72V+sf8z0mPjfOv+09E/pt4yJlfUR9eepkXCACZ5hgXmbT0XMkiyUUlsuKm34QCBgWbxW0bTPj0Kpq9deeUGnmAc4Vs8dYfzW5zWvo3R/6cVI05bZfEjiDxjtyI76+DGUdnptkHydxOf4GiBXfjUsafxMmNmFzcfR2579h742pjfTwstZvJ9dxQqnzf4hokiEnCAL7I+jZK3MHTWJEV4/FWX71sMLYZ9y8t17Mndj1ElMSCITS8YdBb38202kJmROJCVAkmkeZUHxLO5nfwtEr9ES3c0CILtPPyFXAE4fuFQbjNHhSJM4zt4vSQeAL3EEAKC2nHWnNRhpmgZPCbENDTVodgM+XUDkSygAC4pBYyd4aVsvASvJBnYavSKoGXxSqbAZcMbMdMdMSbmA9dG+w/pP6Y549Nz3n+tqhGgC7JXBV/vnnvndBUkiVKHucUhVQBdnLbbfFmUAD+/4WMXfzq8nWZd3GUY5zDFN9ucGvsqhznV56f78veXQ2yYG/xTft/OL2fhrBb3heuLQGfqZCu3ij4A/g1Rtms1RXEzfOTWq6yt5+21Q41DLo61plt00W/Ujp0RNpGt1b40DJyztOM+1mcR+nSwk9KR5Bi6AT3ASeRqv6cRq+4in0QJK2ClVwZVYGueLZ0Ia0kSUrEjh9Q8156UUlrAvLSS7TGnDqpvcfVcKyM5vvCud7B5J5QDXkO5e5N7Ak7V6xbMQX912tIrb5ENJEyj4wvxk3BJixA4HMN8l1duy9BwAtbr/CaXh8IPX4s9QNdQiVP7Nu7EdZ+R6qcdtVolVEzZA6a7irylPm1MZ0H6qF1cdYGqXsdOo9WPH7xMQ9nxVnvTbpQzTWLMVMq/FiFvXXirDHhvTakB3I3M5IgsMepp3ayY5h2F6gqfw+F9GSnn1ZOxsMyhcQud3CoAm8hD2z9m0ALnftLrJnG77BWdMsWd9Wtyqctg5esLelgW45qToHE0GDm1MKpteVWTXFhzdolVCQy4xJBDd9n0ETF4KRPVkGA25r/0btdQYEvsB5CrC4oEQ4TnkayXsRdrMxl3Un841o0l2Mq6+P30O7OfGRn/W9LVQVPXsqDOHbu+kwqm8tDU6Bf4l9VaPCPYIwPXULpTvnrulLMzvv1bEhGYedXGzfK516flzIYrslqrnaW8fJsijiW20lqZHZXppv1XeOvuTJq4rqtB/N03NiLQgnBy+Ebi/2sLFXG5JlflbEIBpAW7Fok/AlSqWg5NFkU5TQP188hTXabuxpRF1GvND9M0csDExT4pXPo+hIHtilg2QUqZXXpaFEkyfc9brfIP/d7YZW7dQKuZFy0GYswm73/984TbTP1HvVMV+6OovorVxV8H+hVgzWe5pN22HBAVXz2M92LW7Ao2jRI/t2fjDWPTMkrM4xgrv4YTpmTHYbv/hKhZvpuSG5KBNGVg4IpcDy5EP7dUNHHCYIie/qvR7I4WLtXn9hxqNgnQt0auwUf4NSmH6Ngb+puHFvZVmOUHEkoi45E4F3x97FdCAfvz6+ME4VPyAEAORmvXz1AuL/wWYwkXnLqLlJB6d933yzkS5KgsWAzDFVeIpQpFpoNG5A+b852D8yO+zpQU4dv00nZPxfJTP9K1rqqhqtlWDvl9vyIs2Sxr/tsSLFEyGk0BDgUIC/VcckDZ8qMss9GNy42ik9f/63aU+oLTqnv3M+8+SWVLOg2bPmek7/tVAgs7Aqvh9QF8gkhuG8j2pIqsZaTSOwrpeG9mlqzs4ZLGfUeE+gZpORx1U6vuGd+LI3mrgZy4dcsIOeZhrTLcPR6R356yeJUNiSKipEj7zsX8JGczYzvb5b928gFdD/8EZcME8c0YQS/lTpd6GO19REwepjnCB3//U41J4bROSzA7mOy9TNqZ0spXzfv/p1FqXu+oiwQzoIsJOjN45fcl8fp01jl5fHWZaHO6h9XZiROwkAEG+llMQSpAOtr+eckRt4CrjrF+ErcUJ7KoqfBTDTFGmCXYdlnwYUwoK9ttKS9jfhH+/bJsJUoA0pAAXfM8NSfnYQuyJnxp9H6UaSyL90ewT+9HCo0sXbtHSNUri5zz4E5VcD5o2NX75lI9EZcKcCf8XzVa6otA8XgmBLcyAPbHJqeeAOrOdRuAUh7d3SPtnqs3MbPklHmWmuKWp4iF9eFFU0BCXeZl+zbrLeY4P3cu+EPQDyjOE4ou+pu2yge6Q9P6gpqIvaft5efeoqUxvQ8QFQO/DSF6dmu8d27VxAzMKPS1BCi0ndLx+mFPBcmNT5WuwFTP2nSIzTeACTDscYVHsRbUHqGxfpdAFBcv2ZWJE3BpaQS0TGSeiF4UzPM7qcz4GTLPOMpXKT2OyJgAHeYbyIK/0CKDvCOnM0CLPQHUYmBp/p1jb96nCmnFuQDaGDYcDOfbvERok56ofEhCU3d5Biqtdd4b2W1tLQK/Q7Q7YTcyWXFncbxwBN/iDbJCUMo+jTiGCGRsxdmLszdDNNLza6T10Vg+FzrXNZ//pERjkKUD8ZhHtUbVAsa9pkD1TFgaHbkiqUe3mrd7tWVErs5ub2tWmBRvQ/trgHPNTX3Sgl2siC2T0TdAlz86a/HoUD22fTk4Ui7nlLqdrhPJTHdv3HH1Y3dH6LHEBmo7EDiECshFc37uLC4+9n3W0tTbHT/TDrsQRuQ+IoSXpsdBWl7KzFBmAE1+07ipcV3MNcLpMP+JpRz4xCBu4T3ZHXbkSNGkEiWEtqczh5vYZ/PwQEfPtvmLZHMDS97qlCgzgHDvegxFqKRGxysKhQ/22H/K5wUm312onuRW+SSPmlms+C2f5Oc/40sOR3YjUWm0VAw2HgmIQPr4QuL+3ZddKBNhDP4LtuhAqKZPw8GkrYOgpLn91Na0wfe3HitXkLqoyi4AHvROiT22g3eY+87W+6RoC0bTef6Njf3psIG/JIGaaqqXsVHW/PxCjiz6hRcDC9vyu4p14Ido8OtWP3HaXcK9k6wc3OGuW2QhuQHFtW8yt6vOibC8b8idk/yMd5QMTx6VGvXuPfF4oMuNqcWyvjtigEadTMA5SMEYFJSmsjJ/KasIeW3HmXbHYs4yCOE7sNTnc4yJ3L8ikUdE13ECAUImTlrP+JB9B3+MQszFhAz/iNpSqwdRCcHqIokzFzRJQLqjofT+D7sKXEUNhte9rZRwzp+oWqIgDPlJikIUKL0WlRtCdzgSzjA4moFd0jk6bCp/A4LybTRucXfK1QfG59R3uMPLfev+lnaydGO438PgfFrSmIoSqXYY5TrF1pIydGpk3iu6yYEXo/Gt99rueDdn5MDP8Y/tpfAz3y50bqreZpt0h70PL5woRQCZex1mgHeB60E7yFS4GPFD4sItm8/Bf49B4UZb5mv4l4jclD+JULfTpna+6GHa3JYMtCwpwoHqq34FuKwfdVuIJeanfBGn+O8h93bG60K9ADw1j6VTH4t0C4gS2Kob85i10ovDkX4/tcaGa6XT9raElqQsyRp9yg+1EsWXJh/eK1u5Z3ZTGHtxiDKAuy1O5E1/Oan6kzsTaOkEVCG8HrFlRUanNFJKnRkIfR/g1UnstMoV7rQgRZNEStmpov0NQAxKcpxhB1GvihyaXuV/tNAMUpTuXROD0QFYKJtCX2QiqZsnE5HPneEpWSz8I59gnjOnM/NweqmfqnlJPblPeKftAqaPJ7SfR/wo5idoblTpthEueXUjPJdY9CMxWwX/vrXqwslRE4G/+N44EwUeZMdVfPrqM2YYLf6i6wsT0utMBmWRf/TWKHSQr3va9Uxwl01oeYa/FfnQLHyRLxgsdlQNYC8eO8Xsd7g/PcCbSE2RQ+nbN9BedRGE2rlaHq/XZg9QTDZrivceVGpFY7qrxYcE4AqCN02IKaMPQr8e9cFGtp7vEsWvVDFqslXKv5lR9YRMrPk+CZnFaHLHON21qpyaIUYXy9Rhvs9EPj6HVOLYCdkWI7YJrgaLisaHKvxgLQeY99VdEjcdQD56165oHmvcO0CJ16o1nkTE6/clu7XjR+DaWDS77reU5ezq0mSjKLlSgKNUXci05T2NO1fQfXTObOEjeDey/nFLmu8NhBrtABMXS8eJMv3JPKl6cepEisebIX9TCyuW3kxF4IrO6ssxsT056SFzmC+BDaiNIhL+LSQ2hZWMNxd5CHjX1i6/6axJjhcNq4VUnkumtTIFxySJEpMoo6iEujWsgmkjN3UY2jmsQqbk2FBR7HsY68lJo+a2UJ9OsUs0xFejvzVT2Ltd801tBtjv8wAwFSpr2dF/R8thAKP1SwgqIpKZf3eZMSlGfGp/8Q06kJWyGc4sdP5WXhMYSB17RTgbbgRzcYATJfMXxZd+qmNOREQMrZVlipGh18iyp0Xiuc0o3qzvUA7nAT5ou4j+N0GbAirZK4UgNCcnhVkCDZuc6AmY/2mb4+zJxr9RvMsNKM0eX02n5vhcnsOlodTlcwCJLMVE5PG60Is/oXX4Ag49eRfBroGs2AuBkMoAAAAAAAAAA==",sl="data:image/webp;base64,UklGRgoWAABXRUJQVlA4WAoAAAAQAAAAFwEAmAAAQUxQSJkEAAABCcZtJClS9fJu55/wMd8zov8TAPhIJOkovxId/muMQ4xnj1nE7G0msXB8jCfQhtq2bRj5/7fTkylTREwAoEcI9GD3yKPeO9F3JEmWJNu2NWnij7VHRFbN51rrixsApfwPEgAGAAuAiAmYADm2tR3bE9voVLJm6VIjSEaQMWQSRmdXnkAGYNu2jerH84TfeddXX+uO8aw71lOlMldETMDf+s2alxg6vHfTiyIwz6+ePelA7QtUXFnbsQC1CNBVI4pUceQtJuOWCFDzfLqP5YpjIzlXNxGm5+uMammqICra9bMywfq1yyBPFSRZTyyFS+H98QoCHR2Fi+lHBco4AUOi5P+S/0tB92hR8n+p9ooWKFY40dJjhRQrnGjpsULESleswKNFvFS08GgRLxUt4qVHi3ipaOHRouT/23g9Wtx5XXhE2IMhwvc9mm76iX0wBFOu87BHrMGwDPoaPpnrRpaGGB27sLbWizFxRqHzLeGQJZdpkevZMZjtAIWhoMn13eUkrYQWrY7BGBvGBukrYZsagIFIK5Elgu2Ybf7y2l5/ofJhV9i0ccO8b8qXr1TwhY1tx/t6ve/2Sqq3oUzQHuuWCjer75+/+X4r31J1Y6aZrdmcqWi47MsHV8Cs6G6y5CgS+g7RgWH0trUB3d+9dKAFi6W1p/6eTHKmiZaM3C4L1iyYOUWzec3fWqB47f3zh+WvAurNCCa7aznbvhmzy5RmfOwUKDx6NuD1e7k5ybkGc+4iqXz/0LfqW/JafGix5OvTnJHQsfYL02fTsaxpyGJ0MR3T1VpYHy2W9SvLjhjddBMh7tinYxt3vdhumMT+bpfv7LVe25Xvvq1K368//enP9/+/fv1qR3bt31Sr/C1lZf7a5vUaM2PsYke7WHvyg/OP3/LT3YWOy0iiI1Xqq++3r5kVXwus9f9vuZxzft+97/baXvO2uY6Vfa2gFsDskytLKZH0hX152cZudqxZbK6Ghh3ZP8/ZetR0oJEzLkIiSUqnsY055lZ4yhkHrTEGW29tF4Ss5Mv6juO4jCR0raRljNmamcMw51zO47mf9o/QbjJZ60HLw1xHbkIiiooYNr+hEAjM8updb9aW6xYiq5XTcRyQEOIyzBrGmnMwDHbVnrWrp/sdl4vmcZPHRxZ0kKuWIJIxONdwrQSCrS1r5nEuGlH25XJH7kIg1JLFYDDn3K+1i+ZyLOxqR+v4x2+HiXVzmesu5PLQ1WVzOjgOcoEwQzO3u8k5U8zYmBmMMZeD9QjTPF92fHzxT96xfNoFsjyNXEe6EolIFFo66OLjwYW5HHfz+IH5yWVh7e5Hp6EdDQ1ZpqF1t9w3dPW4aehwlctcxyEOQZAzD3t0zlwP5ume3M4vLtfLaO2jf+Kj9cHytNEOXaDdBDnzAPl8d3M/mE+HJnb1k4vldmiyTPuZdSws7K4Ja31y2WhHRn64deTDnO3qMr869/OL87vH/bIWFssRaw+W583DJ2h3Xf2DhrUHHZPJfcdv7441xLJn2q/cL5dr+XRB3hqtPWh+OOtuP9PuWtaN5Xodj5/8g69pMjK07PhPN1g3/zcWAFZQOCBKEQAA8EEAnQEqGAGZAD5hKpFFpCKiEzo+/EAGBLO3JdC9vcPfscF+8IbT+HpptB5+bP+u1/1/+x/ofLSTf2xN9ER8UPjc/rUg/bw89r58G+gbtrkqCj/gz5S/b8k45P7Po3eTLwT+fPYCwX/yv/S/wfdoZz/Zv1u9gj1i+jf9b+3e4B6f/ZfsU+BP9/wG/fnvKfI/YA/iP8x/v39h/o/xI/zv/v/z35M++/5u/0H93/Jb6Nf7L/oP79+8H94/////8m3oi/sijBf7gslXN41NTcGjSMAK1D0u5kv3kUAzwvzp4I77zF7KLbFgI2fSnIrQn/yfzjV2qBs/ih2bzsAGOLl8tbgyPLxmeFp1/pvT/kgXK9HdsW8FxJZ/A6Ebk80sLUedX2bHpL8vi/LCReOSJnl4IHGvU4vsZ6np4x8Y9kLMpnsHDw1oAVbYTWqRTk3998sjLylgLIPx13/PyNLYDOXyjdIicFRL7dDkb6K71RGCQQ6TUxF+K0xs5d+RMAk9hGDhhZSKWO3/9hZg9XVUXOXk90p/IIoY3HMrZDteLFkdGSaUjdNH1tDxRCqnYS3BaiS1JALJAHBCfFvgjjxC887vDg4DX0es2emZtvfN+G8x7+owb0st1GArSTc+zIVQf+4jwplAczd4afYMNs3JdRGWMkVU/vSFydq1K+hw241FaKr/3Kxni9o340zUPoUhafMEzpynHyoXEAAA/v1uqvwqyDZQj/kwXO/06pEf9H6obQyhbakG+tfkad9u//cW7pXcgWaCjPvHCAij03EvvTyuA6uZkKdljh3DuVangMkK2vXB7brTX5MAW4dPm2JyhDOsMEgwnPT3tDpwnitL2/Ea6IhHn3aNZcKQR9BjacRzGtwQ3VLag9BHhAizUcfk5HqmJfkyv8WzCUtK6KkXAXPW8UyHuQ4FUu/DJaHchg/A1oGizFKlkLd27pTef7B6VwwJFKmlMV028Nqf+hnuIasADazwUElQ3nAhi04d1F0RIzW+i+8ULm1lgNAACuFLpIwZmVfRdwsohhN8Ex1A2Kvo/MtOylvedTqWn+FSyn/W4qRY8YALzfXJ57y72tKpBlr4zCS9c4xw0+r/80DGkToeIz3o4+in0LU/6N8Bnb7mEzqia0E/ggM8bq9/o2Ihr988LgxhWdQBQBQBVoAvs8ruv02k/CXlPFt790RqwHzYiLotM67MWX00KWUyfX6N6dzb+cif3wecPwoSN3SjYFCoNoguEdBBXhohLQ35JEsEzOiKo9dpajSM1lT7jam+sNRemxJSLTRS5fP+hjMobrCS4IA5TwuoFwESTQnF09BYewlsCeS6mjU+TO6nb6MJ3qanI5KbsMSYhrZ5uXAixwkfC3qAtH3Qc4Y/OQG48WcJHchD0T51zHCAY/xlafoey5jI9whtQ5X6/3bzJBJu6qsBS6UVK0tZo+FFyx2insjaDG0Ct/IW+dKjP8XjrfWmnOUOm6+tSZwQ+/KD2h+dwPcyhXLLYrw3xRQGNX5o3QSpuAQFhfI3QRooL87QXwgnBsB0FUO5+8MyMB9y6jq/X9S4m0vCtBZ0BDlYQF9BjO5ZW6hP7a1cSq5R8zt58XzkiZGM4j3m3VajB4ztB6Hx4zoE9rNiTgLtsbLMO71V5ukk4XseDkw9dSS9gHkXT8nXW3B4v7t/SuUEDSXwEZTWi3602FaQjpXPxl/5ortdlvkLf69SJwTLTfpIblfi1XlyU9uNzjPd20inPnK5bjTc+UNBpQRj/Ipm/OqP374Ts+DckIrDOC64auh/46RKYum2BiaRJQ2hOJKjSwu4ixBN9QPcohO5zvJdLeXd6m/MuwDXiDftNWdjjton2MsXdvenb5H8YWCQ7rzrSnBoHZKh7xrXuOP04vJFYlk/E4+v0/auEUsiEBI8j2buHBV+dtn9IzbaJRJV1S0iZJ3s7vaFm+W7YKXU28UxFbbqV06lAJ2i7o9g1lYBxH5QWWMqZncULddiZ3Pz20NcyijgaFZfS/LAnnGnWMcULO2KWUu3oYE29Umt1wRxK7eXGuUps0a+AOI33zA7p2IYkcIlM26blgAXXT1Y8BcaPxGCJAvwwErUJB/RN+hVCfjmbIxreMEQ5QUnZVtG8iHwuA083mXZ+i03aP3jjgdm0eBUgZ4rVOx9SDLaOlBLR7xEyFcYsVWt0/9MPQWvnsuhEBo57LkWRcLvfGQKKiL6jtfLajpJNmP0VosdbdORgcEYKWwX5/KrTHfPYR6wRzmZJ7ns75uwAEL3fv+IHPpEtq5cH0clUrayC1R6gEPJzGWsmpbhE7XA0mg7SMrePmNm92uaQ1T3eK1Hy0d0WijsR7y0MkOpc/uGfkGDlzD4E0EM3cRC4g1CSeR7jzAO8mDkRNG6Rfbqwv11Cq7MJ28+SkDllTwR7id1AVyNd+boeijUdDuK3FuIlnZ8t4ft5ZFqnOwbNEJOmVZ0j/xds/+0t2kOZU3w8IfBpCxbATt6Va06VhDrp16bWlp2x+WOoKQ6e21ZssT43yivI61QRF5qOlzJk1sXi2DTMEs6SNBpRB/0az9IIxJO2YBwnJmOrGrOL2TzRHz7kdu7d24HfsNHy0fPqRVrNAP9N/pjxj3LM9qcv39zgpy1M3WEv11Wqxt8GzkvWgqaObeW0X7Z3OX7Oj5bKtlUF1i6JrP34LsJMEp/oyaa1BqN7BqR6Prio0rpXNphsjzDXCoroRPL30E3qgVt0rslusMGyZ2LEgl7avwXvNjkYIz3yl557eV7BxRXG7ftxtLl9mSbi3QNAvj/BmAxsNq1pRxibwE+yU76IQaqJQzQcjg05+pplSoCf+DD3OvDKj7I9qN2rDuIzTubjJTzCAE/sVoH7vF0oFswcrb0y6IHdTJn1AhRKcHIiaMh7R9hnlqz+2SXDk0XeZQctdrdxe6cRo4SQyfk2aBtQHk5yJ/WlL2DuJlTLzJyKKKBPRXxM5PSZ/XvRzhftcKGeYAvDnoUVXDChLRgVsY0f2sUjAfio6D6Nijq0AANFNELilLM2fVVktybz3W6e+EIW1P7vLChEtHhOOOk/5EJHpyXecI8uKGaRhyJJ9AVT/pXBeAmQRWqcoR7LeqqCayO4P7aDnwMIYbNys/D+3lir6nrbLe/40277WF8ez/wl6yhAYYvLokwFfPyXwjbeAmaQ7HvFrZIfQArcTZy0AF5D0AITiMcCvK4BGQtH16aarAwiQRna2WI3a6jZld0bz6j7/cFLzCIWfLZ1tNxNBZe+u3O4F9a59GhpqooHd/uBxCMvsR6JEIm94jRZ81THQQc9fBCT5IsJJbSvdo2zcZ533fTtxrqo3IxNiuwgbDenL6Byzkio9fmZwDpQGjg0Y4ZRxj6UKML0o+xhzs/tW4M/r67Hfz4WyhB3r5tGo7cxIi3P224WspGeuSMiweAF4ORoFj9PN9EDBilYkPkMOp2OVpEkYoNqmndcaJrTrE9lZV9jiCWThYIVdoGDPszUA0T3jHv4xnv9NtUx6ZexF5XIpyaGAekT8zGJih8W0Tjkdtc3jO9mirvTq5iwen963w1vWNVRKrHvBlR8h23226KdSOdeE87LhtEB+knuyRbl2vSEPL8NdKrNtUcmzBftjYPhcZNg+Nh0Vkq7iAYMIKDB5kPd6126oBeF1l3vCOpaLR7dtdC+XCSWAnMlcm2Dyw/Qcf9zUh1JsAG16JuoWyWj1A76ip9uADb65pkEgidalb+GVlTN62aC5eK9paB/E/+r220xkWifYtCHimIQDl/6ZmKv2v/Y+p0p59U5YlAltTCt46/EWAo8BSFbOjhJjXO7adq2gLAcrcc+Z8uQKQlmHWXpL07g/UOB828NwOtq3X3894FcoW+xh0bDElJpuTpKJxIJ0PIlOfRX8r6vj7brMvVkpebhvWITJXv/ytlt9RfsQs30JbF4MfZYtxxa4UrZHXezAz3ETa7JRvFGkp3Rwr16j7e9xCjCenWAvKR/Snbvn/tBKBNR9QxutwoPBExgPa3L/z9TRXOpySLwjbp/3UXATguulxgwv/tu/f/C+O1P4ipXHS3X+vZ52mK3M0LDvWSoL2k0GdmlYGd+I0dYOASE0juW4PAsJ0nBrxiRNlSi2sIMaTMJSoITvXlA/sChKHE/UjuWDE3vbTNJq3n1Vz2f1TXD2YEEj7x+dn3OpjbNe2VCf0ZaRuT3wmcXA6n0QUc3mB43C9urWOe1Xgx8CttSKAZaYvly9+KqG0aNAPUGfcVrag7Ij529LKShDR4NgJgRvQdnfqVSe4yITuNH2APaICqSCC1jHgTCE9v2N2heWqDc8JuMbB+NL26sxifXlg46o2ib2P1GI7RyQ7DtXsewJLwMmu5i45bwvrU+jL1uVBbvxIg4+W+w3IkM/NMNxiEiDzvh24jstDpLQh5+m1uGvcKIEltnaWjLuF/beHTDbn4tEfqCwfM2rSWMTSaetmClL8lrUtZGCkNEXrZ16iyN51JCV6Hx5Zdd2Lqq9FVWxD/MKCsB50D2b00alyXuzlP2AZmlvcKjJYSnSiYyf2Cn7iY2FSCihFwjGHD2tJu+d5UQpldokYuGhLZmIPNuGGnS9QChefmiXpkfvGNLEVLvfgsXKpJsD3ZsOvf+Jgebp2iyX6xaFbxis/m7ldIiWdcCieZN/JVOnGo6opjX9oJSbsEqxG3ZuDuZdr12UPdOzANE2uv+HNNPIn9PebGWNGmc289EqF3bN5WFROxZMttbeHDNBfmaopMgasYiMOUMxp69QWo3HNKx2B4sLU/nO+8tBVdbcufWSveWDGGShZzRgWL+EnJbcTLSSCMHcSrpmv6bqMfshQpbtdmeKngxBbUVn5+Z5WvukiTJ1zu5rtz1Di/bNGrEHWtwa5+kaur1rHbMCkTlrA0n/rv3oTvW/7+/ByMZqbrZscgX8KTngG4uT2YFwF0ZmCE5eDVAoqNMK0JkUSfMp6JHNPUktpIXubSK6k8V7XkNrRE8N3/+QUJY8TgtcZblc2AFadjFcKAmcxWHFi4Eoqadsu/ODUihh5MaVS8fVWAe0GaVgOFp32GHZojZk9zx5XiLVp+sRNILr5zpGb9DOywa8jk8Iuv5WtB4DZVxaWgJWCWKyKA/qGVFYrLPQTQsjkXZrmFOvl395CxPJeSWIwqCjLPaMD2hC1c9b1+bTf5BtjfigPZnB3grxUyFoyh4FwAIczIpL5CILpa2bniCcbeMqKuVbL1+rYhcABaZIMe3Wsssmgr4KOH/yfQ9VC4VlCP8hUJB6zbO0QEuFADX3x3W6r63Tna+GYW8RXhTv7f8BuYhoAgumamPPlc0dmrI/iiOGb2l1SUm2M+d9Yx8/a4az9VlEJ01NAt8zIQ4/NtaFnuhM+qYZM36osBwYIUB0UjUe3LSg3IBGnfnJzbgI7aMVo2TkEkeQQadbIpn39O6ksb7t+0iHsAKrP5wUyOai7RA0A4X2hqn1AF++1lRABQ7kx8Ykwl4kyADQY1SBVvfJ7lD0WDeVpO0QsDFrWKoRzBofMZ4FWtATBZULDrBKPLDaqQBMuEv/QdkvBT3/FinCoSlGLQVpbf6VudPtW9Q50dn8lWJiyvZ43twx/uCfarZPDXOCrDPb7cHJSxEBmMj4nhzfQds1vSHUJ0GMJg3TU3pK0p6sNKFoBaA3M6zT9EbB1/+2J13FNDEvl3ezeGWuwZgyU1yLX/Fu9MrYQkDhr7qlMJvI6+Z6vOKRO0sIJJwjXXByUOfrhHi7I8R+JeohTYbZvtQ+YsmX4rdxAUrbXuCElMXfGNDBlpoYnNYWBZMceismupzY0uQOih3U6Q7N7/z8nxZE8ijfmHi24jeCMM4hqNlKjhcVssoJ9c6/SdamX3+wpWaDTmwRDKrcXCol/Nx6OTQW8nGvQHPILnwwF5wvQAAAAAAAAAAA==",ll='<svg class="oq-helper-logo-mark" role="img" aria-label="OpenQuatt logo" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 2680 900"><path d="M342.5 34.5a250 250 0 0 0 9 30q3.989 10.461 8 21 .486 7.441 5 13a939 939 0 0 0 52.5 110 2240 2240 0 0 0 60 96 5301 5301 0 0 1 69 102 417.3 417.3 0 0 1 33.5 64q.078 4.27 3 7 20.139 43.56 22.5 92a483 483 0 0 1-.5 49q-1.838 7.185-2 15-2.427 4.007-2 9l-2 11q-2.361 2.403-2 6v2q-3.93 5.764-5 13a361.4 361.4 0 0 1-25 51q-4.657 4.162-7 10-68.629 88.06-179 104a852 852 0 0 0-35 3q-16.507.25-33-.5-2.822-.297-5-1.5-9.157-2.244-19-2h-2q-7.544-2.872-16-3-113.521-21.405-172.5-121-43.368-84.229-27-178 7.821-43.96 27-84a586 586 0 0 1 33-56 5116 5116 0 0 0 130-196q21.751-40.5 42-82a2875 2875 0 0 1 20-49 273 273 0 0 0 11-35 59 59 0 0 1 5-9 29.8 29.8 0 0 1 3.5 9" style="fill:#204b96"/><path d="M342.5 34.5q6.278 14.341 9 30a250 250 0 0 1-9-30" style="fill:#6386b9"/><path d="M359.5 85.5q3.351 6.034 5 13-4.514-5.559-5-13" style="fill:#6486b9"/><path d="M342.5 119.5a571 571 0 0 1 14 40q.764 7.805 5 14v1q-.135 3.978 2 7a31.7 31.7 0 0 1 2 6q-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7-.135 3.978 2 7 8.966 31.83 13 65a1521 1521 0 0 0 4.5 49q.75 18.493.5 37v3q-1.152 1.144-1.5 3a919 919 0 0 0-3.5 30 85.4 85.4 0 0 0-1.5 13q26.267-39.549 29.5-87 .999-7.984 1-16.5.29-12.09-2-23.5a12.9 12.9 0 0 1 .5-5 56.1 56.1 0 0 1 10.5 17q-.11 2.29 2 3a1350 1350 0 0 1 17 37q-.501 4.486 3 7 4.654 9.453 7 20-.135 3.978 2 7-.135 3.978 2 7 3.267 9.564 4 20-.367 8.376 2 16 2.406 100.067-83 152-1.393-1.783-1-4 2.31-6.847 2-14.5.012-12.645-3-24.5.31-4.493-2-8-7.76-31.019-27.5-56-35.843 63.187-56 133l-3 5q-31.104 11.837-64.5 15.5a356 356 0 0 1-31 2.5q-18.405-58.648-2.5-118a202.4 202.4 0 0 1 17-39q45.29-69.55 83-144 28.532-61.85 40.5-129 6.37-24.912 7-51a167 167 0 0 0 3-18" style="fill:#eb8832"/><path d="M342.5 119.5a167 167 0 0 1-3 18 83.7 83.7 0 0 1 2-19q.91.186 1 1" style="fill:#575c6a"/><path d="M356.5 159.5a86.7 86.7 0 0 1 5 14q-4.236-6.195-5-14" style="fill:#a57341"/><path d="M361.5 174.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7144"/><path d="M339.5 137.5q-.63 26.088-7 51a1077 1077 0 0 0 7-51" style="fill:#445877"/><path d="M365.5 187.5q2.135 3.022 2 7-2.135-3.022-2-7M367.5 194.5q2.135 3.022 2 7-2.135-3.022-2-7M369.5 201.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#a07241"/><path d="M371.5 208.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9f7241"/><path d="M386.5 280.5a2229 2229 0 0 1 5.5 43q1.241 21.759-.5 43 .25-18.507-.5-37a1521 1521 0 0 1-4.5-49" style="fill:#987048"/><path d="M424.5 300.5q2.11.71 2 3-2.11-.71-2-3" style="fill:#746657"/><path d="M413.5 288.5q2.29 11.41 2 23.5-.001 8.516-1 16.5a601 601 0 0 0-1-40" style="fill:#485a73"/><path d="M443.5 340.5q2.347 3.014 3 7-3.501-2.514-3-7" style="fill:#a37144"/><path d="M453.5 367.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#9a6f46"/><path d="M455.5 374.5q2.135 3.022 2 7-2.135-3.022-2-7" style="fill:#926e47"/><path d="M391.5 369.5a317 317 0 0 1-5 33 919 919 0 0 1 3.5-30q.348-1.856 1.5-3" style="fill:#ac753c"/><path d="M461.5 401.5q2.186 7.647 2 16-2.367-7.624-2-16" style="fill:#a2733e"/><path d="M770.5 570.5a399 399 0 0 1 2-36q17.486-55.719 75-68.5 49.058-9.816 96 7 58.332 28.392 53.5 93.5-5.29 63.812-66.5 83.5-48.666 11.477-97-1-56.79-19.032-63-78.5m101-71q-31.006 3.518-48 30-9.226 23.782-4.5 49 12.264 35.252 49.5 39.5a194.4 194.4 0 0 0 37-1q15.804-4.398 28-15 21.365-23.762 15.5-55.5-4.6-23.892-24.5-37.5-25.143-11.653-53-9.5" style="fill:#3a89f3"/><path d="M1730.5 462.5q54.855-7.164 99 25.5c25.1 22.952 34.93 51.452 29.5 85.5q-5.445 28.14-25.5 48.5a215 215 0 0 0 32 24c.46.414.79.914 1 1.5a149.5 149.5 0 0 1-36.5 20l-3.5-.5a188.7 188.7 0 0 0-30-21.5c-32.01 10.572-64.34 11.739-97 3.5q-63.69-21.966-66-89.5 1.605-68.33 66-90.5c10.23-3.279 20.57-5.446 31-6.5m6 38c-2.47.817-5.14 1.317-8 1.5-20.21 4.676-34.38 16.51-42.5 35.5-8.24 27.209-2.08 50.375 18.5 69.5 19.63 11.699 40.3 13.699 62 6 .46-.414.79-.914 1-1.5-6.67-8.333-13.33-16.667-20-25a118 118 0 0 1 29-1.5c6.69 1.517 12.36 4.85 17 10 1.33.667 2.67.667 4 0 5.51-5.845 9.34-12.679 11.5-20.5 7.34-26.312.18-47.478-21.5-63.5q-23.79-12.921-51-10.5" style="fill:#ed8933"/><path d="M1567.5 469.5v-1h46c.32 6.854-.01 13.521-1 20v-19z" style="fill:#96c5f4"/><path d="M2250.5 648.5a326 326 0 0 0-14-37h-88a1243 1243 0 0 1-16 38.5c-16.66.5-33.33.667-50 .5a193 193 0 0 1 6.5-18 18553 18553 0 0 0 72-161c.83-.833 1.67-1.667 2.5-2.5q27-1 54 0c1.93.251 3.77.751 5.5 1.5q39.6 90.064 79.5 180c-17.57.631-34.9-.036-52-2m-59-142a1039 1039 0 0 1-23.5 57 130 130 0 0 0-4.5 15c19.68.333 39.34 0 59-1a1621 1621 0 0 1-27.5-66c-.9-1.931-2.07-3.597-3.5-5" style="fill:#ed8a33"/><path d="M2485.5 469.5v-1h180v37h-68c22.16-.997 44.49-1.331 67-1v-35z" style="fill:#eea659"/><path d="M1140.5 469.5c48.87 4.374 71.71 31.041 68.5 80-5.61 24.948-20.45 41.781-44.5 50.5a143 143 0 0 1-32 5c-20.66.5-41.33.667-62 .5-1 14.824-1.33 29.824-1 45h-43v-181zm-70 99c17.5 1.162 35.16 1.329 53 .5 2.54-.186 4.87-.686 7-1.5q19.125.322 28.5-16c8.31-25.692-.85-40.859-27.5-45.5-20.33-.5-40.66-.667-61-.5z" style="fill:#3989f3"/><path d="M1280.5 592.5c-.99 7.148-1.32 14.481-1 22h112v36c-51.88.655-103.55-.011-155-2a4879 4879 0 0 1-.5-165q.255-7.053 1.5-14 76.44-1.493 153-1v37h-111v38h102v34h-101z" style="fill:#3b8af3"/><path d="M1565.5 588.5q.42 1.184 1.5 2c.5-40.332.67-80.665.5-121h45v42c-1 46.164-1.33 92.497-1 139h-49a281 281 0 0 1-15.5-18 5912 5912 0 0 0-80-103c-.5 40.332-.67 80.665-.5 121h-43c.24-1.291-.1-2.291-1-3v-179c16.36-.283 32.69.217 49 1.5 31.55 39.375 62.88 78.875 94 118.5" style="fill:#3889f3"/><path d="M1567.5 468.5v1c.17 40.335 0 80.668-.5 121q-1.08-.816-1.5-2c.67-40 1.33-80 2-120" style="fill:#cfe7f9"/><path d="M1930.5 469.5a6522 6522 0 0 1 1.5 114c3.1 19.099 14.27 30.266 33.5 33.5 11.47 1.124 22.8.457 34-2 17.01-7.195 25.68-20.028 26-38.5 1-35.496 1.33-71.163 1-107h46v116q-10.38 61.13-72 68.5c-16.67.667-33.33.667-50 0q-58.77-9.515-66-68.5v-116z" style="fill:#ed8933"/><path d="M2072.5 585.5v-116h-46c.33 35.837 0 71.504-1 107v-108h48c.33 39.17 0 78.17-1 117" style="fill:#f1bd83"/><path d="M2461.5 468.5c1.42.951 3.09 1.284 5 1v35q-36.255-.497-72 1v145h-46v-8c1-45.83 1.33-91.83 1-138h-67v-35c59.64-.985 119.31-1.318 179-1M2485.5 469.5h179v35c-22.51-.331-44.84.003-67 1v145h-48v-145c-21.16-.997-42.49-1.331-64-1z" style="fill:#ed8932"/><path d="M579.5 470.5q2.348 3.014 3 7-2.922-2.73-3-7" style="fill:#7393c0"/><path d="M2282.5 469.5v35h67c.33 46.17 0 92.17-1 138v-137h-67c-.33-12.178 0-24.178 1-36" style="fill:#f2bd80"/><path d="M2461.5 468.5h6v37h-73q35.745-1.497 72-1v-35c-1.91.284-3.58-.049-5-1" style="fill:#f2bd82"/><path d="M2485.5 468.5v36c21.51-.331 42.84.003 64 1h-65c-.33-12.511 0-24.845 1-37" style="fill:#f2be84"/><path d="M1930.5 469.5h-46v116c-1-38.83-1.33-77.83-1-117 15.84-.33 31.51.004 47 1" style="fill:#ed9e49"/><path d="M376.5 518.5q2.31 3.507 2 8-1.902-3.608-2-8" style="fill:#575e68"/><path d="M378.5 526.5q3.012 11.855 3 24.5.31 7.653-2 14.5a544 544 0 0 0-1-39" style="fill:#555a71"/><path d="M772.5 534.5a399 399 0 0 0-2 36q-1.735-12.235-.5-25 .628-5.838 2.5-11" style="fill:#85b9f5"/><path d="M557.5 586.5q.837 1.935 3 2.5-56.438-5.331-112 6a1117 1117 0 0 0-43 12 2536 2536 0 0 1-107 37 412 412 0 0 1-76 13q-47.99 3.102-91-18a620 620 0 0 1-24-16.5q-3.118-9.6-2.5-20a345 345 0 0 0 36.5 21.5 194.3 194.3 0 0 0 42 9.5q44.101 4.2 87-7a550 550 0 0 0 32-7.5 1150 1150 0 0 1 96-31 342 342 0 0 1 82.5-11.5q39.153-1.598 76.5 10" style="fill:#81cbf2"/><path d="M557.5 586.5a248 248 0 0 0 15 4q-12.054 137.357-138 193.5-104.056 39.986-207-2-100.8-48.767-120-159.5a620 620 0 0 0 24 16.5q43.01 21.102 91 18a412 412 0 0 0 76-13 2536 2536 0 0 0 107-37 1117 1117 0 0 1 43-12q55.562-11.331 112-6-2.163-.565-3-2.5" style="fill:#3888f2"/><path d="M1280.5 592.5v21h89v1h-90c-.32-7.519.01-14.852 1-22" style="fill:#c9e0f8"/><path d="M604.5 618.5q.297 7.875-2 15 .162-7.815 2-15" style="fill:#a6bbd7"/><path d="M270.5 626.5q-42.899 11.2-87 7a659 659 0 0 0 53-1.5 1796 1796 0 0 1 34-5.5" style="fill:#3a6fb0"/><path d="M602.5 633.5q.427 4.993-2 9-.427-4.993 2-9" style="fill:#839fc7"/><path d="M1369.5 614.5v-1h23v38h-156v-3a3024 3024 0 0 0 155 2v-36z" style="fill:#76b1f3"/><path d="M1422.5 647.5c.9.709 1.24 1.709 1 3h43a485 485 0 0 1-44 1z" style="fill:#98c7f8"/><path d="M1612.5 511.5v140c-16.84.33-33.51-.003-50-1h49c-.33-46.503 0-92.836 1-139" style="fill:#7bb4f4"/><path d="M2394.5 505.5h1v146c-15.84.33-31.51-.004-47-1h46z" style="fill:#f6d4ac"/><path d="M598.5 653.5q.361 3.597-2 6-.361-3.597 2-6" style="fill:#8fa9cb"/><path d="M596.5 661.5q-1.649 6.966-5 13 1.07-7.236 5-13" style="fill:#7294c1"/><path d="M566.5 725.5q-2.343 5.838-7 10 2.343-5.838 7-10" style="fill:#a3b9d4"/><path d="M270.5 835.5q8.456.128 16 3-8.341-.684-16-3" style="fill:#557cb2"/><path d="M288.5 838.5q9.843-.244 19 2-9.825.069-19-2" style="fill:#597eb4"/><path d="M380.5 839.5q-17.097 3.54-35 3a852 852 0 0 1 35-3" style="fill:#7d9ac4"/></svg>';var cl=null;function Zd(e){cl=typeof e=="function"?e:null}function h(){cl&&cl()}function Tw(e){return e instanceof Error&&e.message?e.message:String(e||"Onbekende fout")}function Xd(e,t){o.controlError=`Actie ${e||"(onbekend)"} mislukt. ${Tw(t)}`,h(),console.error(`[OpenQuatt] Action failed: ${e||"(unknown)"}`,t)}function le(e,t,...r){let n=e[t];if(!n)return!1;try{let a=n(...r);a&&typeof a.then=="function"&&a.catch(i=>Xd(t,i))}catch(a){Xd(t,a)}return!0}function ep(e,t=null){e&&console.warn(`[OpenQuatt] Unknown action: ${e}`,t||"")}function Bn(e,t={},r=Od){if(t.force===!0)return!0;let n=Number(e||0);return!n||Date.now()-n>=r}function Zt(){return o.appView==="settings"&&o.settingsGroup==="system"}function tp(){return o.appView==="settings"&&o.settingsGroup==="integrations"}function op(e=o.authStatus||{}){return[e.enabled?"on":"off",e.setup_window_active?"armed":"locked",String(e.username||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function rp(){let e=o.authStatus||{};o.authDraftUsername=e.enabled?String(e.username||"").trim():"",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword=""}function ui(e=o.apiSecurityStatus||{}){return[e.transport_active?"active":"idle",e.key_present?"has-key":"no-key",e.provisioning_pending?"pending":"settled",e.provisioning_closed?"closed":"open"].join(":")}function np(){return o.systemModal==="login"||o.systemModal==="api-security"||Zt()}function ap(){return o.systemModal==="api-security"||Zt()}async function or(e={}){if(!Bn(o.lastAuthStatusRefreshAt,e))return!1;o.lastAuthStatusRefreshAt=Date.now();try{let t=await fetch("/auth/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n={enabled:!!r.enabled,setup_window_active:!!r.setup_window_active,username:String(r.username||""),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},a=op(),i=op(n);return o.authStatus=n,a!==i&&rp(),o.systemModal==="login"&&(o.authError=""),a!==i}catch(t){return o.systemModal==="login"&&(o.authError=`Loginstatus kon niet worden geladen. ${t.message}`),!1}}function ci(){return o.nativeOpen||o.systemModal!=="login"?!1:(o.authStatus||{}).setup_window_active!==!0}function ko(){o.loginAuthStatusPollTimer&&(window.clearTimeout(o.loginAuthStatusPollTimer),o.loginAuthStatusPollTimer=null)}function ip(e=Pd){o.loginAuthStatusPollTimer||!ci()||(o.loginAuthStatusPollTimer=window.setTimeout(async()=>{if(o.loginAuthStatusPollTimer=null,!ci())return;let t=o.authError;(await or({force:!0})||o.authError!==t)&&o.systemModal==="login"&&h(),ci()&&ip()},Math.max(0,Number(e)||0)))}async function Cw(e={}){if(o.systemModal!=="login")return!1;let t=o.authError,r=await or({force:!0});return(r||o.authError!==t)&&o.systemModal==="login"&&h(),e.poll!==!1&&ci()&&ip(),r}async function di(e={}){if(!Bn(o.lastApiSecurityStatusRefreshAt,e))return!1;o.lastApiSecurityStatusRefreshAt=Date.now();try{let t=await fetch("/api-security/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n={transport_active:!!r.transport_active,key_present:!!r.key_present,provisioning_pending:!!r.provisioning_pending,provisioning_closed:!!r.provisioning_closed},a=ui(),i=ui(n);return o.apiSecurityStatus=n,o.apiSecurityError="",a!==i&&(o.apiSecurityNotice=""),a!==i}catch(t){return o.apiSecurityError=`API-beveiliging kon niet worden geladen. ${t.message}`,o.systemModal==="api-security"&&h(),!1}}async function xw(){let e=o.authStatus||{},t=e.enabled===!0,r=e.setup_window_active===!0,n=String(o.authDraftCurrentPassword||""),a=String(o.authDraftUsername||"").trim(),i=String(o.authDraftNewPassword||""),l=String(o.authDraftConfirmPassword||"");if(!a||!i){o.authError="Vul een gebruikersnaam en wachtwoord in.",h();return}if(i!==l){o.authError="De twee wachtwoorden zijn niet gelijk.",h();return}if(t&&!n){o.authError="Vul je huidige wachtwoord in.",h();return}if(!t&&!r){o.authError="Houd de herstelknop 5 seconden vast.",h();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",h();return}o.authBusy=!0,o.authError="",o.authNotice="",h();try{let c=new URLSearchParams;c.set("csrf_token",e.csrf_token),c.set("current_password",n),c.set("new_username",a),c.set("new_password",i);let d=await fetch("/auth/change",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:c.toString()}),u=await d.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!d.ok||!u.ok)throw new Error(u.error||`HTTP ${d.status}`);await or({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername=String(o.authStatus?.username||a).trim(),o.authNotice=t?"Login aangepast.":"Login staat nu aan.",o.authError="",h()}catch(c){o.authError=`Opslaan is mislukt. ${c.message}`,h()}finally{o.authBusy=!1,h()}}async function Mw(){let e=o.authStatus||{};if(!e.enabled){o.authNotice="Login staat al uit.",o.authError="",h();return}let t=String(o.authDraftCurrentPassword||"");if(!t){o.authError="Vul je huidige wachtwoord in.",h();return}if(!e.csrf_token){o.authError="Logingegevens laden nog. Probeer het zo opnieuw.",h();return}o.authBusy=!0,o.authError="",o.authNotice="",h();try{let r=new URLSearchParams;r.set("csrf_token",e.csrf_token),r.set("current_password",t);let n=await fetch("/auth/disable",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:r.toString()}),a=await n.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!n.ok||!a.ok)throw new Error(a.error||`HTTP ${n.status}`);await or({force:!0}),o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authDraftUsername="",o.authNotice="Login staat nu uit.",o.authError="",h()}catch(r){o.authError=`Uitzetten is mislukt. ${r.message}`,h()}finally{o.authBusy=!1,h()}}var $w={"open-login-modal":()=>(o.systemModal="login",rp(),o.authNotice="",o.authError="",h(),Cw({poll:!0})),"open-api-security-modal":async()=>{o.systemModal="api-security",o.apiSecurityNotice="",o.apiSecurityError="",h(),await di({force:!0}),o.systemModal==="api-security"&&h()},"save-web-auth":()=>xw(),"disable-web-auth":()=>Mw()};function sp(e){return le($w,e)}function G(e){let t=o.entities[e];if(!t)return o.optionalMissingEntities?.[e]?`${e}:__optional_missing__`:`${e}:__missing__`;let r=t.state??t.value??"",n=Array.isArray(t.option)?t.option.join(","):Array.isArray(t.options)?t.options.join(","):"",a=[t.min_value??"",t.max_value??"",t.step??"",t.uom??""].join(",");return`${e}:${r}::${n}::${a}`}function we(e){try{return JSON.stringify(e)}catch{return String(e??"")}}function Vn(){return[o.appView,o.settingsGroup,o.busyAction,o.loadingEntities?"loading":"ready",o.incidentMonitoringSignature,o.incidentMonitoringError,we(o.incidentAction),ui(),G("setupComplete"),...ri.map(e=>G(e))].join("|")}function pi(){return[o.appView,o.busyAction,G("openquattEnabled"),G("openquattResumeAt"),G("manualCoolingEnable"),G("coolingEnableSource"),G("coolingEnableSelected"),G("coolingEnableEffectiveSource"),G("silentModeOverride"),G("controlModeLabel"),G("coolingPermitted"),G("coolingRequestActive"),G("coolingBlockReason"),G("silentActive")].join("|")}var mi="",ul=null,Aw=["id","data-oq-action","data-oq-field","data-group-id","data-view-id","aria-label"];function _w(e){if(!e||e===document.body||typeof e.getAttribute!="function")return null;let t=Aw.map(r=>[r,e.getAttribute(r)]).filter(([,r])=>r);return t.length?{tagName:e.tagName,attributes:t}:null}function Rw(e,t){return!e||!t?null:Array.from(e.querySelectorAll(t.tagName.toLowerCase())).find(r=>t.attributes.every(([n,a])=>r.getAttribute(n)===a))||null}function ee({id:e="",modalId:t,titleId:r,kicker:n,title:a,copy:i="",body:l="",bodyMarkup:c="",actions:d="",backdropClass:u="",className:m="",modalClass:v="",role:w="dialog",ariaModal:f=w==="dialog",ariaLive:g="",sectionAttributes:p="",closeAction:b="",closeLabel:S="",headerMarkup:k="",copyInHeader:E=!1}){let q=t||e,M=v||m,_=c||l;!mi&&typeof document<"u"&&!document.querySelector('[role="dialog"][aria-modal="true"]')&&(ul=_w(document.activeElement));let H=`oq-helper-modal-backdrop${o.overviewTheme==="dark"?" oq-helper-modal-backdrop--dark":""}${u?` ${u}`:""}`,F=`oq-helper-modal${M?` ${M}`:""}`,L=b?`<button class="oq-helper-modal-close" type="button" data-oq-action="${s(b)}" aria-label="${s(S)}">\xD7</button>`:"",W=[`role="${s(w)}"`,f?'aria-modal="true"':"",g?`aria-live="${s(g)}"`:"",`aria-labelledby="${s(r)}"`,p,'tabindex="-1"'].filter(Boolean).join(" ");return`
    <div class="${H}" data-oq-modal="${s(q)}" data-oq-modal-scroll="backdrop">
      <section class="${F}" ${W} data-oq-modal-scroll="dialog">
        ${k||`<div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">${s(n)}</p>
            <h2 class="oq-helper-modal-title" id="${s(r)}">${s(a)}</h2>
            ${i&&E?`<p class="oq-helper-modal-copy">${s(i)}</p>`:""}
          </div>
          ${L}
        </div>`}
        ${i&&!E?`<p class="oq-helper-modal-copy">${s(i)}</p>`:""}
        ${_}
        ${d?`<div class="oq-helper-modal-actions">${d}</div>`:""}
      </section>
    </div>
  `}function dl(e){if(!e||typeof document>"u")return;let t=e.querySelector('[role="dialog"][aria-modal="true"]');if(t){mi=t.closest("[data-oq-modal]")?.dataset.oqModal||"dialog",t.contains(document.activeElement)||(t.querySelector(".oq-helper-modal-close, button, input, select, textarea, a[href]")||t).focus({preventScroll:!0});return}mi&&Rw(e,ul)?.focus({preventScroll:!0}),mi="",ul=null}var pl=0;function up(e){let t=e?.querySelector('[role="dialog"][aria-modal="true"]');return t?{modalId:String(e.dataset?.oqModal||""),titleId:String(t.getAttribute("aria-labelledby")||"")}:null}function lp(e,t){return!e||!t?null:Array.from(e.querySelectorAll("[data-oq-modal]")).find(r=>{let n=up(r);return n&&n.modalId===t.modalId&&n.titleId===t.titleId})||null}function Hw(e,t){if(!e||!t?.contains(e)||typeof e.getAttribute!="function")return null;let r=Array.from(e.attributes||[]).filter(({name:l,value:c})=>(c||l.startsWith("data-oq-"))&&(l==="id"||l==="name"||l==="aria-label"||l.startsWith("data-oq-"))).map(({name:l,value:c})=>[l,c]);if(!r.length)return null;let n=String(e.tagName||"").toLowerCase(),i=Array.from(t.querySelectorAll(n)).filter(l=>r.every(([c,d])=>l.getAttribute(c)===d)).indexOf(e);return i<0?null:{tagName:n,attributes:r,index:i}}function cp(e,t){return!e||!t?null:Array.from(e.querySelectorAll(t.tagName)).filter(n=>t.attributes.every(([a,i])=>n.getAttribute(a)===i))[t.index]||null}function Dw(e,t){if(!e||!t?.contains(e)||typeof e.getBoundingClientRect!="function")return null;let r=e.getBoundingClientRect(),n=Number(r?.top);return Number.isFinite(n)?{top:n}:null}function Nw(e){return[e,...e.querySelectorAll("[data-oq-modal-scroll]")].map(t=>({key:String(t.dataset?.oqModalScroll||"backdrop"),left:Number(t.scrollLeft||0),top:Number(t.scrollTop||0)}))}function Ow(e,t){if(!e)return;let r=[e,...e.querySelectorAll("[data-oq-modal-scroll]")];t.forEach(n=>{let a=r.find(i=>String(i.dataset?.oqModalScroll||"backdrop")===n.key);a&&(a.scrollLeft=n.left,a.scrollTop=n.top)})}function Pw(e,t,r){if(!e||!t||!r||typeof t.getBoundingClientRect!="function")return;let n=Number(t.getBoundingClientRect()?.top);if(!Number.isFinite(n))return;let a=n-r.top;if(Math.abs(a)<.5)return;let i=[e,...e.querySelectorAll("[data-oq-modal-scroll]")].reverse().find(l=>l.contains(t)&&Number(l.scrollHeight)>Number(l.clientHeight));i&&(i.scrollTop+=a)}function dp(e){if(!e||typeof document>"u")return null;let n=((typeof document.activeElement?.closest=="function"?document.activeElement.closest("[data-oq-modal]"):null)?.querySelector('[role="dialog"][aria-modal="true"]')||e.querySelector('[role="dialog"][aria-modal="true"]'))?.closest("[data-oq-modal]"),a=up(n);return!n||!a?null:{identity:a,focus:Hw(document.activeElement,n),focusAnchor:Dw(document.activeElement,n),scrollPositions:Nw(n)}}function ml(e,t){let r=pl+1;if(pl=r,!e||!t)return;let n=()=>{if(pl!==r)return;let l=lp(e,t.identity);Ow(l,t.scrollPositions);let c=cp(l,t.focus);Pw(l,c,t.focusAnchor)},a=lp(e,t.identity);n();let i=cp(a,t.focus);i&&!i.disabled&&(i.focus({preventScroll:!0}),n()),window.requestAnimationFrame(n)}function Kn(){o.root&&(o.root.style.removeProperty("--oq-flow-offset"),o.root.style.removeProperty("--oq-flow-offset-reverse"),o.root.style.removeProperty("--oq-fan-rotation"),o.root.getAttribute("style")||o.root.removeAttribute("style"))}function pp(){return o.motionTargets={pipeFlows:[],fanBlades:[]},o.root?(o.root.querySelectorAll(".oq-hp-schematic-board.is-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-pipe-flow").forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)").forEach(n=>{n.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach(a=>{o.motionTargets.pipeFlows.push(a)})}),o.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running").forEach(n=>{n.querySelectorAll(".oq-hp-tech-fan-blades").forEach(a=>{o.motionTargets.fanBlades.push(a)})}),o.motionTargets.pipeFlows.length+o.motionTargets.fanBlades.length):0}function Lw(){return o.motionTargets.pipeFlows.length>0||o.motionTargets.fanBlades.length>0}function mp(e=performance.now()){if(!o.root||o.reducedMotion||!Lw()&&pp()===0)return!1;o.motionStartedAt||(o.motionStartedAt=e);let t=(e-o.motionStartedAt)/1e3,r=t*Fd%360;return o.motionTargets.pipeFlows.forEach(n=>{let a=n.dataset.oqFlowVariant==="water"?.42:1,i=-(t*Id*a);n.style.strokeDashoffset=`${i.toFixed(3)}px`}),o.motionTargets.fanBlades.forEach(n=>{n.style.transform=`rotate(${r.toFixed(3)}deg)`}),!0}function gp(e){if(!mp(e)){o.motionFrame=0,o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(gp)}function rr(){if(o.reducedMotion||pp()===0||o.motionFrame)return;let e=performance.now();if(o.motionStartedAt=e,!mp(e)){o.motionStartedAt=0;return}o.motionFrame=window.requestAnimationFrame(gp)}function zn(){o.motionFrame&&(window.cancelAnimationFrame(o.motionFrame),o.motionFrame=0),o.motionStartedAt=0,Kn()}var fp=null,hp=null;function bp({start:e,stop:t}={}){fp=typeof e=="function"?e:null,hp=typeof t=="function"?t:null}function gl(){fp?.()}function vp(){hp?.()}var Ue={};function wp(e={}){Object.keys(Ue).forEach(t=>{delete Ue[t]}),Object.assign(Ue,e)}function yp(e){Ue.handleChange?.(e)}function Sp(e){Ue.handleClick?.(e)}function fl(e){Ue.handleFocusChange?.(e)}function kp(e){Ue.handleInput?.(e)}function qp(e){Ue.handleKeyDown?.(e)}function Ep(e){Ue.handlePointerDown?.(e)}function Tp(e){Ue.handlePointerMove?.(e)}function Cp(e){Ue.handlePointerUp?.(e)}function xp(e){Ue.handleSettingsInteractionEnd?.(e)}function Mp(e){Ue.handleSettingsInteractionStart?.(e)}function $p(e){Ue.handleWheel?.(e)}function qo(){return"overview"}function Un(e){return e==="trends"&&(e="diagnosis"),!Td.has(e)||e==="diagnosis"&&!vt()?"":e}function Br(e){return String(e||"").trim().toLowerCase()}function hl(e){let t=Br(e);return{actueel:"status",current:"status",status:"status",situatie:"status",tijdlijn:"timeline",timeline:"timeline",log:"timeline",grafiek:"graphs",grafieken:"graphs",graphs:"graphs",graph:"graphs"}[t]||""}function Iw(e=o.controlReplayTab){let t={status:"current",timeline:"timeline",graphs:"graphs"};return t[e]||t.status}function bl(e){let t=Br(e);return{"1h":"last1",last1:"last1","2h":"last2",last2:"last2","4h":"last4",last4:"last4","8h":"last8",last8:"last8","12h":"last12",last12:"last12","24h":"last24",last24:"last24","48h":"last48",last48:"last48","3d":"last3d",last3d:"last3d","7d":"week",week:"week",today:"today",yesterday:"yesterday",custom:"custom"}[t]||""}function Fw(e=o.controlReplayWindow){let t={last1:"1h",last2:"2h",last4:"4h",last8:"8h",last12:"12h",last24:"24h",last48:"48h",last3d:"3d",today:"today",yesterday:"yesterday",week:"7d",custom:"custom"};return t[e]||t.last24}function Gn(){try{let e=new URL(window.location.href),t=Br(e.searchParams.get("view")||""),r=Un(t);if(r)return r;let n=Br(e.hash.replace(/^#/,""));return Un(n)||""}catch{return""}}function vl(){try{let e=new URL(window.location.href);return hl(e.searchParams.get("controlTab")||e.searchParams.get("controlView")||"")}catch{return""}}function wl(){try{let e=new URL(window.location.href);return bl(e.searchParams.get("controlPeriod")||"")}catch{return""}}function yl(){try{let e=new URL(window.location.href);return{start:String(e.searchParams.get("controlStart")||""),end:String(e.searchParams.get("controlEnd")||"")}}catch{return{start:"",end:""}}}function Sl(){try{let e=new URL(window.location.href),t=Br(e.searchParams.get("section")||"");if(Ie.has(t))return t;let r=Br(e.searchParams.get("group")||"");return Ie.has(r)?r:""}catch{return""}}function nr(e="replace"){try{let t=new URL(window.location.href),r=Un(o.appView)||qo();if(t.searchParams.set("view",r),r==="settings"){let a=Ie.has(o.settingsGroup)?o.settingsGroup:Se[0].id;t.searchParams.set("section",a),t.searchParams.delete("group")}else t.searchParams.delete("section"),t.searchParams.delete("group");r==="control"?(t.searchParams.set("controlTab",Iw()),t.searchParams.set("controlPeriod",Fw()),o.controlReplayWindow==="custom"&&o.controlReplayCustomStart&&o.controlReplayCustomEnd?(t.searchParams.set("controlStart",o.controlReplayCustomStart),t.searchParams.set("controlEnd",o.controlReplayCustomEnd)):(t.searchParams.delete("controlStart"),t.searchParams.delete("controlEnd")),t.searchParams.delete("controlView")):(t.searchParams.delete("controlTab"),t.searchParams.delete("controlPeriod"),t.searchParams.delete("controlStart"),t.searchParams.delete("controlEnd"),t.searchParams.delete("controlView")),t.hash&&Un(t.hash.replace(/^#/,""))&&(t.hash="");let n=e==="push"?"pushState":"replaceState";window.history[n]({oqView:r,oqSettingsSection:r==="settings"?o.settingsGroup:"",oqControlTab:r==="control"?o.controlReplayTab:"",oqControlPeriod:r==="control"?o.controlReplayWindow:""},"",t.toString())}catch{}}function _t(e,t={}){let r=Un(e)||qo(),n=t.syncMode||"replace",a=o.appView!==r;o.appView=r,(a||t.forceSync)&&nr(n)}var jw={debugRecording:e=>e.startsWith("debugRecording"),energyHistory:e=>e.startsWith("energyHistory"),firmware:e=>e==="updateModalOpen"||e.startsWith("update")||e.startsWith("firmware"),mqtt:e=>e.startsWith("mqtt"),webServerLog:e=>e.startsWith("webServerLog")};function Qn(e,t){let r=jw[e],n=Object.keys(t).find(a=>!r(a));if(n)throw new Error(`${e} state beheert sleutel ${n} niet.`);Object.assign(o,t)}var gi=e=>Qn("debugRecording",e),Rt=e=>Qn("energyHistory",e),Re=e=>Qn("firmware",e),Vr=e=>Qn("mqtt",e),et=e=>Qn("webServerLog",e);function fi(e=Date.now()){return Number(o.firmwareOtaQuietUntil||0)>e}var Ww=new Set(["compressor oil return"]);function Eo(e){let t=String(e||"").trim();return!t||t==="None"?"Geen actieve storingen":t}function Bw(e){let t=Eo(e);return t==="Geen actieve storingen"?[]:t.split(",").map(r=>r.trim()).filter(r=>r&&!Ww.has(r.toLowerCase()))}function hi(e){let t=Bw(e);return t.length>0?t.join(", "):"Geen actieve storingen"}var bi=Object.freeze({normal:0,limited:1,attention:2,fault:3}),vi=Object.freeze({none:{label:"Geen bijzondere systeemactie",copy:"",severity:"normal"},boiler_assist:{label:"CV ondersteunt tijdelijk",copy:"De warmtepomp blijft de basis leveren; de CV-ketel ondersteunt tijdelijk.",severity:"normal"},boiler_fallback:{label:"Ketel neemt verwarming over",copy:"De warmtepomp is niet beschikbaar. De CV-ketel krijgt tijdelijk de verwarmingsopdracht.",severity:"fault"},fallback_blocked:{label:"Ketelfallback niet vrijgegeven",copy:"OpenQuatt kan de ketel niet veilig vrijgeven.",severity:"fault"}}),Dp=[[1,"main_line_current","Netstroombeveiliging"],[2,"compressor_phase_current","Compressorfasestroom"],[3,"ipm_module","IPM-vermogensmodule"],[4,"compressor_oil_return","Olie-retour actief"],[5,"high_pressure_switch","Hogedrukbeveiliging"],[6,"high_pressure_speed_limit","Toerental begrensd door hoge druk"],[7,"first_start_preheat","Eerste-startvoorverwarming"],[8,"gas_discharge_temperature","Persgastemperatuur te hoog"],[9,"evaporator_coil_temperature","Verdampertemperatuur buiten bereik"],[10,"ac_voltage","Netspanning buiten bereik"],[11,"ambient_temperature_range","Buitentemperatuur buiten werkgebied"],[12,"ambient_temperature_frequency_limit","Vermogen begrensd door buitentemperatuur"],[13,"low_pressure_switch","Lagedrukbeveiliging"],[14,"low_pressure_speed_limit","Toerental begrensd door lage druk"],[17,"ambient_temperature_sensor","Buitentemperatuursensor"],[18,"evaporator_coil_temperature_sensor","Verdampertemperatuursensor"],[19,"gas_discharge_temperature_sensor","Persgastemperatuursensor"],[20,"gas_return_temperature_sensor","Zuiggastemperatuursensor"],[21,"evaporator_pressure_sensor_lock","Verdamperdruksensor vergrendeld"],[22,"condenser_pressure_sensor","Condensordruksensor"],[23,"high_pressure_switch_lock","Hogedrukbeveiliging vergrendeld"],[24,"low_pressure_switch_lock","Lagedrukbeveiliging vergrendeld"],[25,"fan","Ventilatorstoring"],[27,"evaporating_pressure_lock","Verdamperdruk vergrendeld"],[28,"condenser_pressure_lock","Condensordruk vergrendeld"],[30,"evi_pressure_sensor","EVI-druksensor"],[31,"evi_inlet_temperature_sensor","EVI-inlaattemperatuursensor"],[32,"evi_outlet_temperature_sensor","EVI-uitlaattemperatuursensor"],[33,"odu_master_slave_communication","Communicatie tussen buitenunits"],[34,"odu_control_pcb_communication","Communicatie met ODU-regelprint"],[35,"compressor_phase_current_failure","Compressorfasestroomstoring"],[36,"compressor_phase_current_overload","Compressorfasestroom overbelast"],[37,"compressor_driver","Compressordriver"],[38,"module_vdc_voltage","DC-tussenkringspanning"],[39,"ac_current","AC-stroommeting"],[40,"eeprom","ODU-geheugen"],[41,"fan_drive_pcb","Ventilatorregelprint"],[42,"inlet_water_temperature_sensor","Inlaatwatertemperatuursensor"],[43,"outlet_water_temperature_sensor","Uitlaatwatertemperatuursensor"],[44,"inner_coil_temperature_sensor","Binnenste-wisselaartemperatuursensor"],[46,"dc_water_pump","Waterpomp in buitenunit"],[1001,"hp_link_loss","Verbinding met warmtepomp bevestigd weg"],[1002,"hp_start_failed","Warmtepompstart niet bevestigd"],[1003,"hp_stop_unconfirmed","Warmtepompstop niet bevestigd"],[1004,"hp_manual_reset_persistence_failure","Opslag van handmatige resetstatus mislukt"]],Ap=new Map(Dp.map(([e,,t])=>[e,t])),_p=Object.freeze(Object.fromEntries(Dp.map(([,e,t])=>[e,t]))),ql=Object.freeze({status:"Status",protection:"Beveiliging",warning:"Waarschuwing",fault:"Storing",unknown:"Technische melding"}),Vw=Object.freeze({limit_capacity:"ODU begrenst het vermogen",block_start:"start blokkeren",stop_compressor:"compressor stoppen",mark_hp_unavailable:"warmtepomp niet beschikbaar",allow_cm4:"CM4 na systeemcontroles toestaan",block_boiler:"ketel blokkeren",require_confirmed_odu_power_cycle:"bevestigde ODU-powercycle vereist",pump_unavailable:"ODU-waterpomp niet beschikbaar"}),Kw=Object.freeze({when_bit_clears:"automatisch zodra de ODU-melding verdwijnt",stable_reads_and_recovery_window:"automatisch na stabiele herstelmetingen",after_stable_reads:"automatisch na meerdere stabiele metingen",preheat_complete:"automatisch zodra de voorverwarming klaar is",confirmed_odu_power_cycle:"na een uitgevoerde en bevestigde ODU-powercycle",stable_telemetry:"automatisch na stabiele telemetrie",explicit_retry_after_safe_stop:"na een veilige stop en expliciete herstart",fresh_stop_confirmation:"na een nieuwe bevestigde stopstatus",review_required:"na technische beoordeling"}),zw=Object.freeze({none:"",wait_for_automatic_recovery:"Wacht op automatisch herstel.",check_installation:"Controleer de installatie.",contact_installer:"Neem contact op met de installateur."}),Zn=Object.freeze({start_failure_cleared:"De startblokkering is vrijgegeven. De normale startvoorwaarden blijven gelden.",no_start_failure:"Er is geen startfout meer om vrij te geven.",stop_not_confirmed:"De warmtepomp is nog niet veilig als gestopt bevestigd.",link_not_healthy:"De verbinding met de warmtepomp is nog niet stabiel genoeg.",hard_fault_active:"Er is nog een actieve warmtepompstoring.",fault_recovery_pending:"Het automatische storingsherstel is nog niet afgerond.",odu_power_cycle_confirmed:"De bevestigde ODU-powercycle is verwerkt.",no_cleared_manual_reset_latch:"Er is geen herstelde powercycle-latch om vrij te geven.",persistence_unavailable:"De resetstatus kan momenteel niet veilig worden opgeslagen.",persistence_write_failed:"Het opslaan van de resetstatus is mislukt; de blokkering blijft actief.",incident_state_changed:"De incidentstatus veranderde tijdens de actie; controleer de actuele melding.",invalid_hp:"De gekozen warmtepomp is ongeldig.",hp_not_configured:"Deze warmtepomp is niet geconfigureerd.",queue_unavailable:"De controller kan de actie momenteel niet in de hoofdloop plaatsen.",action_in_progress:"Voor deze warmtepomp wordt al een incidentactie verwerkt.",invalid_request_id:"De incidentactie heeft geen geldig actienummer.",forbidden:"De beveiligingscontrole van de actie is mislukt."}),Uw=Object.freeze(["Geen blokkade","Handmatige override actief","Commissioning actief","Koeling actief","Vorstbescherming actief","Geen warmtevraag","Ketelfallback staat uit","Er is nog een warmtepomp beschikbaar","Beschikbaarheid warmtepompen nog niet zeker","Nog geen bevestigde fallbackoorzaak","Stopstatus warmtepomp nog niet veilig bevestigd","Flowmeting niet beschikbaar","Waterflow onvoldoende","Aanvoertemperatuur niet beschikbaar","Ketelbeveiliging geeft niet vrij"]),Xt=e=>!!e&&typeof e=="object"&&!Array.isArray(e),de=(e,t=null)=>{let r=Number(e);return Number.isInteger(r)&&r>=0?r:t},Kr=e=>e===!0,Gw=e=>typeof e=="boolean"?e:null,El=(...e)=>e.reduce((t,r)=>bi[r]>bi[t]?r:t,"normal");function Qw(e){if(typeof e!="string")return e;try{return JSON.parse(e)}catch{return null}}function Rp(e){let t=Number(e);return!Number.isInteger(t)||t<1||t>48?"":`R${2119+Math.floor((t-1)/16)}.b${(t-1)%16}`}function Xn(e={}){let t=String(e.displayLabel??e.display_label??"").trim();if(t)return t;let r=Number(e.id),n=String(e.key||"").trim().toLowerCase();if(n==="unclassified_odu_fault"){let i=Rp(r);return i?`Niet-geclassificeerde ODU-melding (${i})`:"Niet-geclassificeerde ODU-melding"}if(_p[n])return _p[n];if(Ap.has(r))return Ap.get(r);if(n){let i=n.replace(/^odu_/,"").replaceAll("_"," ");return`ODU-melding: ${i.charAt(0).toUpperCase()}${i.slice(1)}`}let a=Rp(r);return a?`Niet-geclassificeerde ODU-melding (${a})`:"Niet-geclassificeerde warmtepompmelding"}function Np(e){return ql[String(e||"").toLowerCase()]||ql.unknown}function Op(e=[]){let t=e.map(n=>String(n).toLowerCase()),r=t.filter(n=>n!=="display").map(n=>Vw[n]||"").filter(Boolean);return r.length?r:t.includes("display")?["alleen tonen"]:[]}function Pp(e){return Kw[String(e||"").toLowerCase()]||String(e||"").replaceAll("_"," ")}function Tl(e){return zw[String(e||"").toLowerCase()]??String(e||"").replaceAll("_"," ")}function Cl(e,t){let r=Number(e);if(Number.isFinite(r)&&r>=946684800)return new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(r*1e3));let n=Number(t);if(!Number.isFinite(n)||n<0)return"";let a=Math.round(n/6e4);return`${a<60?`${a} min`:`${Math.floor(a/60)}u ${a%60}m`} na controllerstart`}function wi(e){return Uw[Number(e)]||"Onbekende veiligheidsblokkade"}function xl(e){return vi[String(e||"").toLowerCase()]||vi.none}function Lp(e={}){return e.active?{label:"Actief",tone:e.severity==="fault"?"fault":"warning"}:e.recovering?{label:"Herstelt",tone:"warning"}:e.latched&&!e.acknowledged?{label:"Hersteld \xB7 vastgehouden",tone:"warning"}:{label:"Hersteld",tone:"clear"}}function Ip(e={}){let t={bootstrap:"Verbinding wordt opgebouwd",healthy:"Verbinding gezond",suspect:"Korte hapering wordt eerst bevestigd",lost:"Verbinding bevestigd weg",recovering:"Verbinding herstelt",unknown:"Verbindingsstatus onbekend"},r={unknown:"Compressorstatus onbekend",stopped:"Compressor gestopt",start_requested:"Start aangevraagd",wait_mode:"Wacht op bedrijfsmodus",wait_compressor:"Wacht op compressorbevestiging",running:"Compressor draait",stopping:"Stop aangevraagd",stop_unconfirmed:"Stop nog niet bevestigd"},n=`${t[e.linkState]||t.unknown} \xB7 ${r[e.runState]||r.unknown}`;return e.faultActive||e.protectionState==="fault_active"?{label:"Storing actief",note:n,tone:"fault"}:e.linkState==="lost"?{label:"Niet beschikbaar",note:n,tone:"fault"}:e.protectionState==="start_blocked"?{label:"Start tijdelijk geblokkeerd",note:n,tone:"warning"}:e.protectionState==="limited"?{label:"Vermogen begrensd",note:n,tone:"warning"}:e.availability==="recovering"||e.linkState==="recovering"?{label:"Herstel wordt bevestigd",note:n,tone:"warning"}:e.availableForStart||e.availability==="available"?{label:"Beschikbaar",note:n,tone:"clear"}:{label:"Status wordt bepaald",note:n,tone:e.linkState==="suspect"?"clear":"warning"}}function Yw(e,t){if(!Xt(e)||!Xt(e.definition)||!Xt(e.runtime))return null;let r=e.definition,n=e.runtime,a=de(r.id);if(a===null)return null;let i=ql[r.category]?r.category:"unknown",l=r.severity,c=["active","recovering","latched"].includes(n.lifecycle)?n.lifecycle:"cleared",d=c==="latched"?"cleared":c,u=Array.isArray(r.effects)?[...new Set(r.effects.filter(m=>typeof m=="string"))]:[];return{id:String(a),key:String(r.key||"").trim(),displayLabel:String(r.display_label||"").trim(),subject:t,category:i,severity:l==="info"?"normal":l==="fault"?"fault":"attention",lifecycle:d,active:d==="active",recovering:d==="recovering",latched:Kr(n.latched)||c==="latched",acknowledged:Kr(n.acknowledged),effects:u,effectMask:de(r.effect_mask),firstSeenS:de(n.first_seen_s),lastSeenS:de(n.last_seen_s),firstSeenMs:de(n.first_seen_ms),lastSeenMs:de(n.last_seen_ms),occurrenceCount:de(n.occurrence_count,0),register:de(r.register_address),bit:de(r.bit),recoveryCondition:String(r.recovery_condition||"").trim(),userAction:String(r.user_action||"").trim()}}function Jw(e){if(!Xt(e))return null;let t=de(e.index);if(t!==1&&t!==2)return null;let r=String(e.link_state||"unknown"),n=String(e.protection_state||"unknown"),a=Kr(e.available_for_start),i=Kr(e.must_stop),l=String(e.availability||"unknown");l==="unknown"&&(l=a?"available":r==="recovering"||n==="fault_recovery"?"recovering":i||r==="lost"||n==="fault_active"?"unavailable":n==="start_blocked"?"blocked":"unknown");let c=`hp${t}`,d=Hp(e.last_action_result),u=Array.isArray(e.action_results)?e.action_results.map(Hp).filter(Boolean):[];return d&&!u.some(m=>m.requestId===d.requestId&&m.action===d.action)&&u.push(d),{index:t,subject:c,linkState:r,protectionState:n,runState:String(e.run_state||"unknown"),availability:l,availableForStart:a,mustStop:i,faultActive:Kr(e.fault_active),lastActionResult:d,actionResults:u,incidents:Array.isArray(e.incidents)?e.incidents.map(m=>Yw(m,c)).filter(Boolean):[]}}function Hp(e){if(!Xt(e))return null;let t=de(e.sequence),r=de(e.request_id);return t===null||r===null||r<1?null:{sequence:t,requestId:r,action:String(e.action||"").trim(),ok:e.ok===!0,result:String(e.result||"").trim(),atMs:de(e.at_ms,0)}}function Fp(e){let t=Xt(e)?e:{},r=de(t.control_mode,0),n=vi[t.action]?t.action:"none",a=String(t.boiler_role||"off"),i=r===3?"assist":r===4?"fallback":a,l=String(t.previous_boiler_role||"off"),c=Kr(t.boiler_command_active),d=de(t.fallback_block_reason,0),u=n!=="none"?n:r===3?"boiler_assist":r===4?"boiler_fallback":"none",m=u==="boiler_fallback"&&!c?"fallback_blocked":u==="boiler_assist"&&!c?"none":u,v=Gw(t.boiler_output_continuous);return{controlMode:r,action:m,boilerRole:i,previousBoilerRole:l,boilerCommandActive:c,boilerOutputContinuous:v,boilerTransition:l==="assist"&&i==="fallback"?v===!0?"assist_to_fallback_continuous":v===!1?"assist_to_fallback_interrupted":"assist_to_fallback":"none",fallbackBlockReason:d}}function kl(e,t=null){return{valid:!1,error:e,schemaVersion:t,actionCsrfToken:"",generatedAtS:null,system:Fp({}),heatPumps:[]}}function jp(e){let t=Qw(e);if(!Xt(t))return kl("invalid_payload");let r=de(t.schema_version);return r===null?kl("missing_schema_version"):r!==1?kl("unsupported_schema_version",r):{valid:!0,error:"",schemaVersion:r,actionCsrfToken:String(t.action_csrf_token||""),generatedAtS:de(t.generated_at_s),system:Fp(t.system),heatPumps:Array.isArray(t.heat_pumps)?t.heat_pumps.map(Jw).filter(Boolean).sort((n,a)=>n.index-a.index):[]}}function Wp(e={},t=null){let r=de(e.hp,0);if(t!==null&&r!==Number(t)||r!==1&&r!==2)return{visible:!1,label:"",copy:"",tone:"clear"};let n=e.kind==="confirm_odu_power_cycle"?"ODU-powercycle":"Startfout";return e.pending?{visible:!0,label:e.outcomeUnknown?`${n}: uitkomst controleren`:`${n}: verwerking loopt`,copy:e.outcomeUnknown?"Het antwoord ging verloren. OpenQuatt controleert met hetzelfde actienummer of de controller de actie heeft verwerkt.":"De controller heeft het verzoek geaccepteerd; OpenQuatt wacht op het resultaat met hetzelfde actienummer.",tone:"warning"}:e.ok===!0?{visible:!0,label:`${n}: uitgevoerd`,copy:Zn[e.result]||"De controller heeft de actie bevestigd.",tone:"clear"}:e.ok===!1?{visible:!0,label:`${n}: niet uitgevoerd`,copy:Zn[e.result]||String(e.message||"De controller heeft de actie geweigerd."),tone:"fault"}:{visible:!1,label:"",copy:"",tone:"clear"}}function Zw(e,t){let r=de(t?.requestId,0),n=de(t?.hp,0);if(!t?.pending||r<1||n!==1&&n!==2)return t;let a=e.heatPumps.find(l=>l.index===n),i=a?.actionResults?.find(l=>l.requestId===r&&l.action===t.kind)||a?.lastActionResult;return!i||i.requestId!==r||i.action!==t.kind?t:{...t,pending:!1,ok:i.ok,result:i.result,sequence:i.sequence,completedAtMs:i.atMs}}var Yn=Date.now()>>>0||1;function Bp(e=globalThis.crypto){if(e?.getRandomValues){let t=new Uint32Array(1);if(e.getRandomValues(t),t[0]!==0)return t[0]}return Yn=Yn+1>>>0,Yn===0&&(Yn=1),Yn}function Jn(e,t){let r=new Error(e);return r.incidentActionDefinitive=t,r}async function Vp(e,t,r,n,a,i){let l=de(r,0);if(l!==1&&l!==2)throw new Error(Zn.invalid_hp);let c=de(n,0);if(c<1)throw Jn(Zn.invalid_request_id,!0);let d=t.endsWith("/retry-start")?"start_failure_retry":t.endsWith("/confirm-odu-power-cycle")?"confirm_odu_power_cycle":"";if(!d)throw new Error("Onbekende incidentactie.");let u=p=>e(t,{method:"POST",credentials:"same-origin",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:new URLSearchParams({hp:String(l),request_id:String(c),csrf_token:String(p||"")})}),m=String(a||""),v=null,w=null;for(let p=0;p<2&&!v;p+=1)try{v=await u(m)}catch(b){w=b}if(!v)throw Jn(w?.message||"Geen antwoord van de controller.",!1);if(v.status===403&&typeof i=="function"){m=String(await i()||"");try{v=await u(m)}catch(p){throw Jn(p?.message||"Geen antwoord van de controller.",!1)}}let f={};try{f=await v.json()}catch{}if(v.status!==202||f?.accepted!==!0){let p=String(f?.result||"");throw Jn(Zn[p]||`Incidentactie HTTP ${v.status}`,!0)}let g=de(f.action_id,0);if(f.hp!==l||f.action!==d||g!==c)throw Jn("De controller gaf geen geldige actiebevestiging terug.",!1);return{hp:l,action:d,actionId:g,csrfToken:m}}var Xw=e=>e.active||e.recovering||e.lifecycle==="cleared"&&e.latched&&!e.acknowledged;function ey(e){let t=Xt(e)&&typeof e.valid=="boolean"&&Array.isArray(e.heatPumps)?e:jp(e);if(!t.valid)return{available:!1,active:!1,severity:"normal",title:"Geen incidentgegevens",copy:"",problemCount:0,activeIncidentCount:0,recoveredIncidentCount:0,systemAction:"none",systemActionLabel:vi.none.label,boilerRole:"off",boilerTransition:"none",problems:[],snapshot:t};let n=t.heatPumps.flatMap(g=>g.incidents).filter(g=>g.category!=="status"&&Xw(g)),a=n.filter(g=>g.active||g.recovering),i=n.filter(g=>!g.active&&!g.recovering),l=t.system.action,c=xl(l),d=n.reduce((g,p)=>El(g,i.includes(p)?"attention":p.severity),"normal"),u=El(d,c.severity),m=c.severity!=="normal",v=n.map(g=>({key:`incident:${g.subject}:${g.id}`,label:`${g.subject==="hp1"?"Warmtepomp 1":"Warmtepomp 2"}: ${Xn(g)}`,severity:i.includes(g)?"attention":g.severity,incidentId:g.id}));m&&v.unshift({key:`system-action:${l}`,label:c.label,severity:c.severity,incidentId:""});let w="Geen bijzonderheden",f="OpenQuatt ziet op dit moment geen actieve incidenten.";if(l==="boiler_fallback"||l==="fallback_blocked"?(w=c.label,f=c.copy):a.some(g=>g.severity==="fault")?(w="Storing actief",f=`${a.length} actief incident${a.length===1?"":"en"} zichtbaar.`):a.length?(w="Aandacht nodig",f=`${a.length} actief aandachtspunt${a.length===1?"":"en"} zichtbaar.`):i.length&&(w="Eerdere melding nog niet bevestigd",f=`${i.length} hersteld incident${i.length===1?"":"en"} blijft zichtbaar tot bevestiging.`),l==="fallback_blocked"){let g=t.system.fallbackBlockReason;f=`${f} ${g?`Blokkade: ${wi(g)}.`:"Er is geen blokkadereden aangeleverd; de ketelopdracht blijft inactief."}`}return t.system.boilerCommandActive&&t.system.boilerTransition==="assist_to_fallback_continuous"&&(f=`${f} De controller gaf tijdens de rolwisseling geen uit/aan-puls.`),{available:!0,active:n.length>0||m,severity:u,title:w,copy:f,problemCount:v.length,activeIncidentCount:a.length,recoveredIncidentCount:i.length,systemAction:l,systemActionLabel:c.label,boilerRole:t.system.boilerRole,boilerTransition:t.system.boilerTransition,problems:v,snapshot:t}}function Kp(e,t){let r=Xt(e)?e:{},n=ey(t);if(!n.available)return{...r,incidentMonitoring:n};let a=[],i=new Set;for(let u of[...n.problems,...r.problems||[]])u?.key&&!i.has(u.key)&&(i.add(u.key),a.push(u));let l=r.active?"attention":"normal",c=n.active&&bi[n.severity]>bi[l],d=c?n.copy:r.copy||n.copy;return c&&r.active&&r.problems?.length?d+=` Daarnaast zijn ${r.problems.length} bestaande aandachtspunt${r.problems.length===1?"":"en"} zichtbaar.`:!c&&n.active&&(d+=` Daarnaast zijn ${n.problemCount} incidentmelding${n.problemCount===1?"":"en"} zichtbaar.`),{...r,problems:a,active:!!r.active||n.active,severity:El(l,n.severity),title:c?n.title:r.title||n.title,copy:d,incidentMonitoring:n}}function zp(e={},t,r=Date.now()){let n=jp(t);if(!n.valid)throw new Error(`incident monitoring ${n.error}`);let{generatedAtS:a,...i}=n,l=JSON.stringify(i),c=Zw(n,e.incidentAction||{});return{changed:e.incidentMonitoringSignature!==l||!!e.incidentMonitoringError||e.incidentMonitoringUnsupported===!0||c!==e.incidentAction,incidentMonitoringSnapshot:n,incidentMonitoringError:"",incidentMonitoringUnsupported:!1,incidentMonitoringFailureCount:0,incidentMonitoringSignature:l,incidentMonitoringLastFetchAt:r,incidentAction:c}}function Up(e={},t,r=Date.now()){let n=Number(e.incidentMonitoringFailureCount||0)+1,a=String(e.incidentMonitoringError||""),i=String(t?.message||t||"Incidentgegevens konden niet worden bijgewerkt."),c=/\bHTTP (?:401|403)\b/i.test(i)||n>=3?i:a;return{changed:c!==a,incidentMonitoringSnapshot:e.incidentMonitoringSnapshot||null,incidentMonitoringError:c,incidentMonitoringUnsupported:!1,incidentMonitoringFailureCount:n,incidentMonitoringSignature:String(e.incidentMonitoringSignature||""),incidentMonitoringLastFetchAt:r}}function Gp(e={},t=Date.now()){return{changed:!!(e.incidentMonitoringSnapshot||e.incidentMonitoringError||!e.incidentMonitoringUnsupported),incidentMonitoringSnapshot:null,incidentMonitoringError:"",incidentMonitoringUnsupported:!0,incidentMonitoringFailureCount:0,incidentMonitoringSignature:"",incidentMonitoringLastFetchAt:t}}var ty=["roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"];function Z(e){return y(e)&&C(e)}function Ht(e){return!y(e)||C(e)}function $l(e){return y(e)?Eo(j(e,"None")):""}function Ml(e){return y(e)?hi(j(e,"None")):""}function ea(e){let t=Ml(e).trim().toLowerCase();return!!t&&t!=="geen actieve storingen"}function Dt(){let e=[],t=!!o.incidentMonitoringError,r=!!(o.incidentMonitoringSnapshot?.valid&&!t),n=Z("compressorCyclingWarning2h")||Z("compressorCyclingWarning72h")||Z("alternatingCompressorStartsWarning"),a=Z("compressorCyclingAlertLatched"),i=Ht("cicPollingEnabled"),l=Ht("otEnabled"),d=ty.some(p=>y(p)&&String(T(p)||"").trim()==="OT thermostat")&&y("otThermostatStatusValid")&&!C("otThermostatStatusValid"),u=(p,b)=>{Z(p)&&e.push({key:p,label:b})};u("compressorCyclingWarning2h","Te veel compressorstarts in 2 uur"),u("compressorCyclingWarning72h","Te veel compressorstarts in 72 uur"),u("alternatingCompressorStartsWarning","Warmtepompen starten opvallend vaak om en om"),u("lowflowFaultActive","Te lage flow"),u("pt1000ReadProblem","PT1000-aanvoersensor geeft geen geldige meting"),u("waterSupplyTempFallbackActive","Aanvoertemperatuur gebruikt de warmtepompuitlaat als fallback"),u("flowMismatch","Flowverschil tussen warmtepomp 1 en 2"),i&&u("cicDataStale","CIC-data is verouderd"),d&&e.push({key:"otThermostatStatusInvalid",label:"Geen actuele OpenTherm-thermostaatstatus"}),l&&(d||u("otLinkProblem","OpenTherm-verbinding meldt een probleem")),!r&&ea("hp1Failures")&&e.push({key:"hp1Failures",label:`Warmtepomp 1: ${Ml("hp1Failures")}`}),!r&&ea("hp2Failures")&&e.push({key:"hp2Failures",label:`Warmtepomp 2: ${Ml("hp2Failures")}`});let m=e.length;a&&!n&&e.unshift({key:"compressorCyclingAlertLatched",label:"Pendelen eerder gedetecteerd; melding nog niet bevestigd"});let v={problems:e,active:e.length>0,cyclingAlertLatched:a,cyclingAlertActive:n,cyclingAlertRecovered:a&&!n,title:m>0?"Aandacht nodig":a?"Eerdere waarschuwing nog niet bevestigd":"Geen bijzonderheden",copy:m>0?`${e.length} aandachtspunt${e.length===1?"":"en"} zichtbaar. Bekijk hieronder de details.`:a?"Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt.":"OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen."},w=r?Kp(v,o.incidentMonitoringSnapshot):v;if(!t)return w;let f={key:"incident-monitoring-stale",label:"Warmtepompstatus wordt opnieuw opgehaald",severity:"attention",source:"incident_manager"},g=w.problems.some(p=>p.key===f.key)?w.problems:[f,...w.problems];return{...w,active:!0,severity:w.severity==="fault"?"fault":"attention",problems:g,title:w.active?w.title:"Warmtepompstatus wordt vernieuwd",copy:w.active?`${w.copy} De warmtepompstatus wordt opnieuw opgehaald en oude incidentgegevens worden niet als actueel getoond. Ververs de pagina als dit na een controllerherstart blijft staan.`:"OpenQuatt haalt de actuele warmtepompstatus opnieuw op. Oude incidentgegevens worden niet als actueel getoond. Ververs de pagina als dit na een controllerherstart blijft staan.",incidentMonitoringStale:!0}}function zr(e){let t=e.active?e.problems.map(r=>r.key).sort().join("|"):"";if(!t){o.installationMonitoringProblemSignature="";return}t!==o.installationMonitoringProblemSignature&&(o.installationMonitoringProblemSignature=t,o.installationMonitoringDetailsOpen=!0)}var oy=1500,ry=1500;function Qp(){let e=o.entities.uptime,t=o.entities.projectVersionText;return[+(e?.value??e?.state)*(String(e?.state||e?.uom).endsWith("s")?1e3:36e5),t?.state||t?.value||""]}function Yp(){ar(),o.ota.on=!0,o.ota.base=[...Qp(),performance.now()]}function ar(){let e=o.ota;e.id&&(window.clearTimeout(e.id),e.id=null),e.on=!1,e.ok=0,e.wait=!1,e.base=null}function Ur(e=3e5){let t=o.ota;t.on&&(t.id&&window.clearTimeout(t.id),t.wait=!0,t.id=window.setTimeout(()=>{t.id=null,t.wait&&ar()},e))}function Jp(){let e=o.ota;if(!e.on||!e.wait)return;let t=Qp();(t[0]<e.base[0]||isNaN(e.base[0])&&t[0]+1e3<=performance.now()-e.base[2]||e.ok===2||e.base[1]&&t[1]&&t[1]!==e.base[1])&&Gr()}function Gr(e=ry){let t=o.ota;!t.on||t.id&&!t.wait||(t.id&&window.clearTimeout(t.id),t.wait=!1,t.id=window.setTimeout(()=>{t.on&&(ar(),window.location.reload())},e))}function Al(){o.deviceReconnectRecoveryTimer&&(window.clearTimeout(o.deviceReconnectRecoveryTimer),o.deviceReconnectRecoveryTimer=null)}function To(){return Number(o.deviceReconnectRecoveryStartedAt||0)>0}function ny(){return To()?Number(o.deviceReconnectRecoveryStartedAt||0):Number(o.deviceReconnectStartedAt||0)}function Zp(){return To()?"Gegevens verversen":"Wachten op gegevens"}function Xp(){let e=ny(),t=e>0?Math.max(0,Math.round((Date.now()-e)/1e3)):0;return To()?t>0?`${t}s aan het verversen`:"Net weer online":t>0?`${t}s bezig`:"Net gestart"}function _l(){if(!o.deviceReconnectMode||To())return!1;Al(),o.deviceReconnectRecoveryStartedAt=Date.now(),o.deviceReconnectLastError="",o.entitySyncFailureCount=0;let e=o.deviceReconnectRecoveryStartedAt;return o.deviceReconnectRecoveryTimer=window.setTimeout(()=>{o.deviceReconnectMode&&Number(o.deviceReconnectRecoveryStartedAt||0)===e&&(Rl(),h())},oy),h(),!0}function Co(e="reconnect",t=""){o.deviceReconnectMode||(o.deviceReconnectStartedAt=Date.now()),Al(),o.deviceReconnectMode=e,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError=t?String(t):o.deviceReconnectLastError,o.systemModal="",Re({updateModalOpen:!1}),o.controlError=""}function Rl(){Al(),!(!o.deviceReconnectMode&&!o.entitySyncFailureCount)&&(o.deviceReconnectMode="",o.deviceReconnectStartedAt=0,o.deviceReconnectRecoveryStartedAt=0,o.deviceReconnectLastError="",o.entitySyncFailureCount=0)}function em(){return To()?"OpenQuatt is weer online":o.deviceReconnectMode==="ota"?"OpenQuatt wordt bijgewerkt":o.deviceReconnectMode==="restart"?"OpenQuatt herstart":"Verbinding herstellen"}function tm(){return To()?o.deviceReconnectMode==="ota"?"De update is bijna klaar. We verversen nu de gegevens en het logboek.":"De controller reageert weer. We verversen nu de gegevens en het logboek.":o.deviceReconnectMode==="ota"?"De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.":o.deviceReconnectMode==="restart"?"De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.":"De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden."}var Hl=null,Dl=null;function om({getSignature:e,patch:t}={}){Hl=typeof e=="function"?e:null,Dl=typeof t=="function"?t:null}function rm(){return Hl?Hl():""}function Nl(){return Dl?Dl():!1}var Ol=null;function nm({patch:e}={}){Ol=typeof e=="function"?e:null}function am(){return Ol?Ol():!1}var Qr=["trendHistoryEnabled","trendHistoryFlashEnabled","trendHistoryFlush","decisionLogHistoryEnabled","decisionLogHistoryFlush","decisionLogHistoryClear","lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"],Pl=["trendHistoryEnabled","trendHistoryFlashEnabled"];var Ll=["lifetimeEnergyHistoryEnabled","lifetimeEnergyHourRetention","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"];function eo(){return[...new Set(Qr)]}var wt={};function im(e={}){wt={refreshEnergyHistoryData:typeof e.refreshEnergyHistoryData=="function"?e.refreshEnergyHistoryData:null,refreshSettingsStorageState:typeof e.refreshSettingsStorageState=="function"?e.refreshSettingsStorageState:null,refreshTrendHistoryData:typeof e.refreshTrendHistoryData=="function"?e.refreshTrendHistoryData:null,refreshTrendHistoryMetadata:typeof e.refreshTrendHistoryMetadata=="function"?e.refreshTrendHistoryMetadata:null,shouldRefreshSettingsStorageForCurrentSurface:typeof e.shouldRefreshSettingsStorageForCurrentSurface=="function"?e.shouldRefreshSettingsStorageForCurrentSurface:null}}function Il(){return wt.shouldRefreshSettingsStorageForCurrentSurface?wt.shouldRefreshSettingsStorageForCurrentSurface():!1}async function sm(e={}){return wt.refreshTrendHistoryMetadata?wt.refreshTrendHistoryMetadata(e):!1}async function lm(e={}){return wt.refreshSettingsStorageState?wt.refreshSettingsStorageState(e):!1}async function Fl(e={}){return wt.refreshTrendHistoryData?wt.refreshTrendHistoryData(e):!1}async function yi(e={}){return wt.refreshEnergyHistoryData?wt.refreshEnergyHistoryData(e):!1}var yt={};function xo(e={}){Object.entries(e).forEach(([t,r])=>{typeof r=="function"&&(yt[t]=r)})}function cm(){return yt.patchEnergyDom?yt.patchEnergyDom():!1}function um(){return yt.patchResultsDom?yt.patchResultsDom():!1}function dm(){return yt.patchOverviewDom?yt.patchOverviewDom():!1}function jl(){return yt.patchControlReplayDom?yt.patchControlReplayDom():!1}function pm(){return yt.patchDiagnosisDom?yt.patchDiagnosisDom():!1}var ir={};function mm(e={}){ir={clearOutput:typeof e.clearOutput=="function"?e.clearOutput:null,closeStream:typeof e.closeStream=="function"?e.closeStream:null,resetRecoveryState:typeof e.resetRecoveryState=="function"?e.resetRecoveryState:null}}function Wl(){if(ir.closeStream)return ir.closeStream();let e=o.webServerLogSource;e&&e.close(),et({webServerLogSource:null,webServerLogConnected:!1})}function Bl(){if(ir.clearOutput)return ir.clearOutput();et({webServerLogEntries:[],webServerLogError:"",webServerLogRaw:"",webServerLogNotice:""})}function Vl(){if(ir.resetRecoveryState)return ir.resetRecoveryState();Wl(),et({webServerLogEnabled:null,webServerLogConnected:!1}),Bl()}async function Yr(e,t={},r=0,n=""){if(typeof AbortController!="function"||!Number.isFinite(r)||r<=0)return fetch(e,t);let a=new AbortController,i=window.setTimeout(()=>a.abort(),r);try{return await fetch(e,{...t,signal:a.signal})}catch(l){throw a.signal.aborted?new Error(n||`request timed out after ${r}ms`):l}finally{window.clearTimeout(i)}}async function Jr(e){if(!e)return!1;if(window.navigator?.clipboard?.writeText&&window.isSecureContext)return await window.navigator.clipboard.writeText(e),!0;let t=document.activeElement,r=document.createElement("textarea");r.value=e,r.setAttribute("readonly",""),r.style.position="fixed",r.style.top="-1000px",r.style.opacity="0",document.body.appendChild(r),r.focus({preventScroll:!0}),r.select();let n=!1;try{n=document.execCommand("copy")}finally{document.body.removeChild(r),t?.isConnected&&typeof t.focus=="function"&&t.focus({preventScroll:!0})}return n}function Kl(e,t){let r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=t,n.rel="noreferrer",document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}function zl(e,t,r="text/plain"){Kl(new Blob([t],{type:r}),e)}function gm(e,t){zl(e,JSON.stringify(t,null,2),"application/json")}function fm(){let e=o.mqttStatus;return e?e.enabled&&e.connected?"Verbonden":e.enabled?"Ingeschakeld":e.broker?"Uit":"Niet ingesteld":"Laden..."}function hm(){let e=o.mqttStatus;if(!e)return"MQTT-status wordt geladen.";let t=String(e.broker||"").trim(),r=Number(e.port||1883),n=t?`${t}:${r}`:"geen broker";return e.enabled&&e.connected?`Verbonden met ${n}.`:e.enabled?t?`MQTT staat aan; verbinding met ${n} is nog niet bevestigd.`:"MQTT staat aan, maar er is nog geen broker ingesteld.":t?`Broker ${n} is opgeslagen, maar MQTT inputbronnen staan uit.`:"MQTT inputbronnen staan uit. Stel een broker in om externe bronwaarden te ontvangen."}function ay(e,t=2){let r=R(e);return Number.isFinite(r)?`
      <span class="oq-settings-mqtt-sensor-value-number">${s(r.toFixed(t))}</span>
      <span class="oq-settings-mqtt-sensor-value-unit">\xB0C</span>
    `:'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>'}function iy(e){if(!y(e.valueKey)||!C(e.validKey))return'<span class="oq-settings-mqtt-sensor-value-missing">Geen meting</span>';let t=e.activeLabel||"Toegestaan",r=e.inactiveLabel||"Geblokkeerd";return`<span class="oq-settings-mqtt-sensor-value-boolean">${s(C(e.valueKey)?t:r)}</span>`}function sy(e){return e.kind==="binary"?iy(e):ay(e.valueKey)}function ly(e){let t=R(e);return Number.isFinite(t)?t<60?`${Math.round(t)} s`:t<3600?`${Math.round(t/60)} min`:`${Math.round(t/3600)} u`:"\u2014"}function Ul(e){return y(e)?C(e)?"Geldig":"Ontbreekt of verouderd":"Nog geen status"}function Gl(e){let t=o.mqttStatus?.input_topics;if(t&&typeof t=="object"){let r=String(t[e]||"").trim();if(r)return r}return e==="cooling_dew_point"?String(o.mqttStatus?.dew_point_topic||"").trim():""}function Si(e){let t=o.mqttStatus?.input_enabled;return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,e)?t[e]!==!1:!0}function cy(e){let t=o.mqttStatus?.input_retained;return!!(t&&typeof t=="object"&&t[e])}function Ql(e){let t=o.mqttStatus?.input_accept_retained;return!!(t&&typeof t=="object"&&t[e])}function bm(){return[{topicKey:"cooling_dew_point",label:"Dauwpunt",valueKey:"mqttCoolingDewPoint",ageKey:"mqttCoolingDewPointAge",validKey:"mqttCoolingDewPointValid",staleCopy:"15 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 16.2, 16,2, 16.2 \xB0C of {"value":16.2}. Geldig bereik: -20..35 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"outside_temperature",label:"Buitentemperatuur",valueKey:"mqttOutsideTemperature",ageKey:"mqttOutsideTemperatureAge",validKey:"mqttOutsideTemperatureValid",staleCopy:"30 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 15.0, 15,0, 15.0 \xB0C of {"value":15.0}. Geldig bereik: -40..60 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_temperature",label:"Kamertemperatuur",valueKey:"mqttRoomTemperature",ageKey:"mqttRoomTemperatureAge",validKey:"mqttRoomTemperatureValid",staleCopy:"10 minuten",payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer live een temperatuur in \xB0C. Voorbeelden: 21.1, 21,1, 21.1 \xB0C of {"value":21.1}. Geldig bereik: 0..50 \xB0C. Retained berichten worden niet gebruikt voor regeling.'},{topicKey:"room_setpoint",label:"Kamer setpoint",valueKey:"mqttRoomSetpoint",ageKey:"mqttRoomSetpointAge",validKey:"mqttRoomSetpointValid",staleCopy:"nieuw bericht",stateful:!0,payloadInfoTitle:"Temperatuurpayload",payloadInfo:'Publiceer een setpoint in \xB0C. Voorbeelden: 21.0, 21,0, 21.0 \xB0C of {"value":21.0}. Geldig bereik: 5..35 \xB0C.'},{topicKey:"heating_enable",label:"Warmtetoestemming",valueKey:"mqttHeatingEnable",ageKey:"mqttHeatingEnableAge",validKey:"mqttHeatingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer warmtetoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}.'},{topicKey:"cooling_enable",label:"Koeltoestemming",valueKey:"mqttCoolingEnable",ageKey:"mqttCoolingEnableAge",validKey:"mqttCoolingEnableValid",staleCopy:"nieuw bericht",kind:"binary",stateful:!0,payloadInfoTitle:"Booleanpayload",payloadInfo:'Publiceer koeltoestemming als boolean. Geaccepteerd: true/false, 1/0, on/off, yes/no of {"value":true}.'}]}function Yl(e=bm()){if(!e.length)return"Geen sensoren";let t=e.filter(i=>Si(i.topicKey)),r=e.length-t.length;if(!t.length)return`${r} ${r===1?"topic":"topics"} uitgeschakeld`;let n=t.filter(i=>C(i.validKey)).length,a=n===t.length?`${n} ${n===1?"sensor":"sensoren"} geldig`:`${n} van ${t.length} sensoren geldig`;return r?`${a} \xB7 ${r} uit`:a}function vm(){let e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,r=!!o.mqttDraftClearPassword,n=e.password_set?"Leeg laten om huidig wachtwoord te behouden":"Optioneel",a=o.mqttNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${s(o.mqttNotice)}</span></div>`:"",i=o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:"";return ee({id:"system",titleId:"oq-mqtt-modal-title",kicker:"Integratie",title:"MQTT brokerconfiguratie",copy:"Stel de broker in waarop OpenQuatt MQTT-inputs beluistert.",closeAction:"close-system-modal",closeLabel:"Sluit MQTT brokerconfiguratie",body:`
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
      `})}function wm(){let e=bm(),t=Math.max(1,Math.round(Number(o.mqttStatus?.non_retained_stateful_timeout_s||1800)/60)),r=e.some(l=>l.topicKey===o.mqttExpandedTopicKey)?o.mqttExpandedTopicKey:"",n=Yl(e),a=e.map(l=>{let c=Gl(l.topicKey),d=c||"Wordt geladen...",u=ly(l.ageKey),m=Si(l.topicKey),v=C(l.validKey),w=m&&v&&cy(l.topicKey),f=l.stateful&&Ql(l.topicKey),g=o.mqttCopiedTopicKey===l.topicKey,p=r===l.topicKey,b=o.mqttInputToggleBusyKey===l.topicKey||o.mqttRetainedToggleBusyKey===l.topicKey,S=m?v?"valid":"invalid":"disabled",k=m?v?"geldig":"ongeldig":"uit",E=m?Ul(l.validKey):"Uitgeschakeld",q=m?v?l.stateful?f?`Laatste MQTT-publicatie ${u==="\u2014"?"onbekend":`${u} geleden`}. De waarde blijft geldig tot een nieuwe payload, uitschakelen of herstart.`:`Laatste live MQTT-publicatie ${u==="\u2014"?"onbekend":`${u} geleden`}. De waarde blijft maximaal ${t} minuten geldig en vervalt bij een MQTT-disconnect.`:`Laatste MQTT-publicatie ${u==="\u2014"?"onbekend":`${u} geleden`}. Zonder nieuwe MQTT-publicatie wordt de waarde na ${l.staleCopy} ongeldig.`:u==="\u2014"?"Nog geen geldige MQTT-publicatie ontvangen.":`Laatste MQTT-publicatie ${u} geleden; de waarde is niet meer geldig.`:"Dit topic wordt niet gebruikt. OpenQuatt subscribed er niet op.",M=m?"Topic uitschakelen":"Topic gebruiken",_="Retained MQTT-waarde: ontvangen bij verbinden met de broker.",H=f?"Brokerwaarde wordt na reconnect of herstart opnieuw gebruikt.":`Alleen live waarden; maximaal ${t} minuten geldig en direct ongeldig bij disconnect.`,F=l.stateful?`${l.payloadInfo} ${f?"Retained berichten worden geaccepteerd.":`Retained berichten worden genegeerd; live waarden verlopen na ${t} minuten.`}`:l.payloadInfo;return`
        <article class="oq-settings-mqtt-sensor-row${p?" is-open":""}${m?"":" is-disabled"}">
          <div
            class="oq-settings-mqtt-sensor-summary"
            data-oq-action="toggle-mqtt-sensor-topic"
            data-oq-mqtt-topic-key="${s(l.topicKey)}"
            aria-expanded="${p?"true":"false"}"
          >
            <span class="oq-settings-mqtt-sensor-name">${s(l.label)}</span>
            <span class="oq-settings-mqtt-sensor-value">
              ${m?sy(l):'<span class="oq-settings-mqtt-sensor-value-missing">\u2014</span>'}
            </span>
            <span class="oq-settings-mqtt-sensor-status-cell">
              <em
                class="oq-settings-mqtt-sensor-status oq-settings-mqtt-sensor-status--${S}"
                title="${s(q)}"
                aria-label="${s(E)}: ${s(q)}"
              >${s(k)}</em>
              ${w?`<span class="oq-settings-mqtt-sensor-retained" title="${s(_)}" aria-label="${s(_)}">R</span>`:""}
            </span>
            <button
              class="oq-settings-toggle-switch oq-settings-mqtt-sensor-inline-toggle${m?" is-on":""}"
              type="button"
              data-oq-action="toggle-mqtt-input"
              data-oq-mqtt-topic-key="${s(l.topicKey)}"
              aria-pressed="${m?"true":"false"}"
              aria-label="${s(`${l.label}: ${M}`)}"
              title="${s(M)}"
              ${b||!o.mqttStatus?.csrf_token?"disabled":""}
            >
              <span class="oq-settings-toggle-switch-track"><span class="oq-settings-toggle-switch-knob"></span></span>
            </button>
            <span class="oq-settings-mqtt-sensor-chevron" aria-hidden="true"></span>
          </div>
          ${p?`
            <div class="oq-settings-mqtt-sensor-topic">
              ${l.stateful?`
                <div class="oq-settings-mqtt-retained-setting">
                  <span class="oq-settings-mqtt-retained-setting-copy">
                    <strong>Retained waarde gebruiken</strong>
                    <small>${s(H)}</small>
                  </span>
                  <button
                    class="oq-settings-toggle-switch oq-settings-mqtt-retained-toggle${f?" is-on":""}"
                    type="button"
                    data-oq-action="toggle-mqtt-retained"
                    data-oq-mqtt-topic-key="${s(l.topicKey)}"
                    aria-pressed="${f?"true":"false"}"
                    aria-label="${s(`${l.label}: retained waarde ${f?"uitschakelen":"gebruiken"}`)}"
                    title="${f?"Retained waarde negeren":"Retained waarde gebruiken"}"
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
                <div class="oq-settings-mqtt-topic-field${g?" is-copied":""}">
                  <code>${s(d)}</code>
                  <button
                    class="oq-settings-mqtt-topic-copy"
                    type="button"
                    data-oq-action="copy-mqtt-topic"
                    data-oq-mqtt-topic-key="${s(l.topicKey)}"
                    aria-label="${s(g?`MQTT-topic voor ${l.label} gekopieerd`:`Kopieer MQTT-topic voor ${l.label}`)}"
                    title="${g?"Gekopieerd":"Kopieer topic"}"
                    ${c?"":"disabled"}
                  >
                    ${ge(g?"clipboard-check":"clipboard","oq-settings-mqtt-topic-copy-icon")}
                  </button>
                </div>
                <details class="oq-settings-mqtt-topic-info">
                  <summary aria-label="${s(`Payloadinformatie voor ${l.label}`)}">i</summary>
                  <div class="oq-settings-mqtt-topic-info-popover">
                    <strong>${s(l.payloadInfoTitle||"Payload")}</strong>
                    <p>${s(F||"")}</p>
                  </div>
                </details>
              </div>
            </div>
          `:""}
        </article>
      `}).join(""),i=o.mqttError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.mqttError)}</div>`:"";return ee({id:"system",titleId:"oq-mqtt-sensors-modal-title",kicker:"Integratie",title:"MQTT sensoren",className:"oq-helper-modal--mqtt-sensors",headerMarkup:`<div class="oq-settings-mqtt-modal-head">
            <span class="oq-settings-mqtt-modal-icon">${uy("oq-settings-mqtt-modal-logo")}</span>
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
          </div>`})}function uy(e=""){return`
      <svg${e?` class="${s(e)}"`:""} viewBox="0 0 320 320" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.1,180.6v117.1c0,8.4,6.8,15.3,15.3,15.3H142C141,239.8,80.9,180.7,7.1,180.6z"/>
        <path d="M7.1,84.1v49.8c99,0.9,179.4,80.7,180.4,179.1h51.7C238.2,186.6,134.5,84.2,7.1,84.1z"/>
        <path d="M312.9,297.6V193.5C278.1,107.2,207.3,38.9,119,7.1H22.4c-8.4,0-15.3,6.8-15.3,15.3v15c152.6,0.9,276.6,124,277.6,275.6h13C306.1,312.9,312.9,306.1,312.9,297.6z"/>
        <path d="M272.6,49.8c14.5,14.4,28.6,31.7,40.4,47.8V22.4c0-8.4-6.8-15.3-15.3-15.3h-77.3C238.4,19.7,256.6,33.9,272.6,49.8z"/>
      </svg>
    `}function Jl(e=o.mqttStatus||{}){let t=e.input_topics&&typeof e.input_topics=="object"?e.input_topics:{},r=e.input_enabled&&typeof e.input_enabled=="object"?e.input_enabled:{},n=e.input_retained&&typeof e.input_retained=="object"?e.input_retained:{},a=e.input_accept_retained&&typeof e.input_accept_retained=="object"?e.input_accept_retained:{};return[e.enabled?"on":"off",e.connected?"connected":"idle",String(e.broker||""),String(e.port||""),String(e.username||""),e.password_set?"password":"nopassword",String(e.dew_point_topic||""),JSON.stringify(t),JSON.stringify(r),JSON.stringify(n),JSON.stringify(a),String(e.non_retained_stateful_timeout_s||""),String(e.source||""),String(e.csrf_token||"")].join(":")}function ki(){return[o.systemModal,o.mqttExpandedTopicKey||"",o.mqttCopiedTopicKey||"",o.mqttInputToggleBusyKey||"",o.mqttRetainedToggleBusyKey||"",o.mqttError||"",Jl(),G("mqttCoolingDewPoint"),G("mqttCoolingDewPointAge"),G("mqttCoolingDewPointValid"),G("mqttOutsideTemperature"),G("mqttOutsideTemperatureAge"),G("mqttOutsideTemperatureValid"),G("mqttRoomTemperature"),G("mqttRoomTemperatureAge"),G("mqttRoomTemperatureValid"),G("mqttRoomSetpoint"),G("mqttRoomSetpointAge"),G("mqttRoomSetpointValid"),G("mqttHeatingEnable"),G("mqttHeatingEnableAge"),G("mqttHeatingEnableValid"),G("mqttCoolingEnable"),G("mqttCoolingEnableAge"),G("mqttCoolingEnableValid")].join("|")}function Sm(){let e=o.mqttStatus||{};Vr({mqttDraftEnabled:e.enabled===!0,mqttDraftBroker:String(e.broker||""),mqttDraftPort:String(e.port||1883),mqttDraftUsername:String(e.username||""),mqttDraftPassword:"",mqttDraftClearPassword:!1,mqttDraftDirty:!1})}function km(e){let t=e?.dataset?.oqMqttField;if(!t)return!1;if(Vr({mqttNotice:"",mqttError:"",mqttDraftDirty:!0}),t==="enabled")o.mqttDraftEnabled=!!e.checked;else if(t==="broker")o.mqttDraftBroker=String(e.value||"");else if(t==="port")o.mqttDraftPort=String(e.value||"");else if(t==="username")o.mqttDraftUsername=String(e.value||"");else if(t==="password")o.mqttDraftPassword=String(e.value||"");else if(t==="clear-password"){o.mqttDraftClearPassword=!!e.checked,o.mqttDraftClearPassword&&(o.mqttDraftPassword="");let r=e.closest(".oq-helper-modal")?.querySelector('[data-oq-mqtt-field="password"]');r&&(r.value=o.mqttDraftPassword,r.disabled=o.mqttBusy||o.mqttDraftClearPassword)}return e.closest(".oq-helper-modal")?.querySelectorAll(".oq-helper-modal-success, .oq-helper-modal-note--error").forEach(r=>{r.remove()}),!0}function qm(){return o.systemModal==="mqtt"||o.systemModal==="mqtt-sensors"||tp()}async function sr(e={}){if(!Bn(o.lastMqttStatusRefreshAt,e))return!1;o.lastMqttStatusRefreshAt=Date.now();try{let t=await fetch("/mqtt/status",{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json(),n=r.input_topics&&typeof r.input_topics=="object"?r.input_topics:{},a={};Object.entries(n).forEach(([p,b])=>{a[String(p)]=String(b||"")});let i=r.input_enabled&&typeof r.input_enabled=="object"?r.input_enabled:{},l={};Object.entries(i).forEach(([p,b])=>{l[String(p)]=b!==!1&&String(b).toLowerCase()!=="false"});let c=r.input_retained&&typeof r.input_retained=="object"?r.input_retained:{},d={};Object.entries(c).forEach(([p,b])=>{d[String(p)]=b===!0||String(b).toLowerCase()==="true"});let u=r.input_accept_retained&&typeof r.input_accept_retained=="object"?r.input_accept_retained:{},m={cooling_dew_point:!1,outside_temperature:!1,room_temperature:!1,room_setpoint:!0,heating_enable:!0,cooling_enable:!0};Object.entries(u).forEach(([p,b])=>{m[String(p)]=b===!0||String(b).toLowerCase()==="true"});let v=String(a.cooling_dew_point||r.dew_point_topic||"");a.cooling_dew_point=v;let w={enabled:!!r.enabled,connected:!!r.connected,broker:String(r.broker||""),port:Number(r.port||1883),username:String(r.username||""),password_set:!!r.password_set,dew_point_topic:v,input_topics:a,input_enabled:l,input_retained:d,input_accept_retained:m,non_retained_stateful_timeout_s:Number(r.non_retained_stateful_timeout_s||1800),source:String(r.source||""),csrf_token:String(r.csrf_token||"")},f=Jl(),g=Jl(w);return o.mqttStatus=w,f!==g&&(o.systemModal==="mqtt"&&o.mqttDraftDirty||Sm(),o.mqttNotice=""),o.mqttError="",f!==g}catch(t){return o.mqttError=`MQTT-status kon niet worden geladen. ${t.message}`,!1}}async function ym(e="cooling_dew_point"){let t=Gl(e);if(!t){o.mqttError="MQTT-topic is nog niet geladen.",o.mqttCopiedTopicKey="",h();return}try{let r=await Jr(t);o.mqttNotice="",o.mqttError=r?"":"Kopi\xEBren is niet gelukt.",o.mqttCopiedTopicKey=r?e:"",o.mqttCopiedTopicTimer&&window.clearTimeout(o.mqttCopiedTopicTimer),r&&(o.mqttCopiedTopicTimer=window.setTimeout(()=>{o.mqttCopiedTopicKey="",o.mqttCopiedTopicTimer=null,o.systemModal==="mqtt-sensors"&&h()},1800))}catch(r){o.mqttError=`Kopi\xEBren is mislukt. ${r.message}`,o.mqttCopiedTopicKey=""}h()}async function dy(e,t){let r=o.mqttStatus||{};if(!r.csrf_token){o.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",h();return}o.mqttInputToggleBusyKey=e,o.mqttNotice="",o.mqttError="",h();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("enabled",t?"true":"false");let a=await fetch("/mqtt/input/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);o.lastMqttStatusRefreshAt=0,await sr({force:!0})}catch(n){o.mqttError=`MQTT-topic kon niet worden opgeslagen. ${n.message}`}finally{o.mqttInputToggleBusyKey===e&&(o.mqttInputToggleBusyKey=""),h()}}async function py(e,t){let r=o.mqttStatus||{};if(!r.csrf_token){o.mqttError="MQTT-status wordt nog geladen. Probeer het zo opnieuw.",h();return}o.mqttRetainedToggleBusyKey=e,o.mqttNotice="",o.mqttError="",h();try{let n=new URLSearchParams;n.set("csrf_token",r.csrf_token),n.set("input",e),n.set("accept_retained",t?"true":"false");let a=await fetch("/mqtt/input/retained/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`);o.lastMqttStatusRefreshAt=0,await sr({force:!0})}catch(n){o.mqttError=`Retained-instelling kon niet worden opgeslagen. ${n.message}`}finally{o.mqttRetainedToggleBusyKey===e&&(o.mqttRetainedToggleBusyKey=""),h()}}async function my(){let e=o.mqttStatus||{},t=!!o.mqttDraftEnabled,r=String(o.mqttDraftBroker||"").trim(),n=String(o.mqttDraftPort||"").trim(),a=n?Number(n):t?0:1883,i=!t&&!r,l=i?"":String(o.mqttDraftUsername||"").trim(),c=i||!!o.mqttDraftClearPassword,d=c?"":String(o.mqttDraftPassword||"");if(!e.csrf_token){o.mqttError="MQTT-configuratie laadt nog. Probeer het zo opnieuw.",h();return}if((t||n)&&(!Number.isInteger(a)||a<1||a>65535)){o.mqttError="Vul een geldige poort in.",h();return}if(t&&!r){o.mqttError="Vul een broker in als je MQTT inschakelt.",h();return}o.mqttBusy=!0,o.mqttNotice="",o.mqttError="",h();try{let u=new URLSearchParams;u.set("csrf_token",e.csrf_token),u.set("enabled",t?"true":"false"),u.set("broker",r),u.set("port",String(a)),u.set("username",l),u.set("password",d),u.set("clear_password",c?"true":"false");let m=await fetch("/mqtt/save",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:u.toString()}),v=await m.json().catch(()=>({ok:!1,error:"invalid_response"}));if(!m.ok||!v.ok)throw new Error(v.error||`HTTP ${m.status}`);o.mqttDraftDirty=!1,await sr({force:!0}),o.mqttDraftPassword="",o.mqttDraftClearPassword=!1,o.mqttNotice=t?"MQTT-configuratie opgeslagen. De MQTT-verbinding wordt gestart.":"MQTT-configuratie opgeslagen.",o.mqttError="",h()}catch(u){o.mqttError=`Opslaan is mislukt. ${u.message}`,h()}finally{o.mqttBusy=!1,h()}}var gy={"open-mqtt-modal":()=>(o.systemModal="mqtt",Sm(),o.mqttDraftDirty=!1,o.mqttNotice="",o.mqttError="",h(),sr({force:!0})),"open-mqtt-sensors-modal":()=>(o.systemModal="mqtt-sensors",o.mqttNotice="",o.mqttError="",o.mqttCopiedTopicKey="",o.mqttExpandedTopicKey="",o.mqttInputToggleBusyKey="",o.mqttRetainedToggleBusyKey="",h(),sr({force:!0}).then(e=>{e&&o.systemModal==="mqtt-sensors"&&h()})),"toggle-mqtt-sensor-topic":e=>{let t=e.dataset?.oqMqttTopicKey||"cooling_dew_point";o.mqttExpandedTopicKey=o.mqttExpandedTopicKey===t?"":t,o.mqttError="",h()},"toggle-mqtt-input":e=>{let t=e.dataset?.oqMqttTopicKey||"cooling_dew_point";return dy(t,!Si(t))},"toggle-mqtt-retained":e=>{let t=e.dataset?.oqMqttTopicKey||"";if(t)return py(t,!Ql(t))},"copy-mqtt-topic":e=>ym(e.dataset?.oqMqttTopicKey||"cooling_dew_point"),"copy-mqtt-dew-topic":e=>ym(e.dataset?.oqMqttTopicKey||"cooling_dew_point"),"save-mqtt-config":()=>my()};function Em(e,t){return le(gy,e,t)}function Hm(){if(o.nativeOpen||o.appView!=="settings")return;let e=()=>{if(!(o.nativeOpen||o.appView!=="settings")){if(o.loadingEntities||o.focusedField||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock){window.setTimeout(Hm,250);return}Ee({prefetchView:"overview",forceFast:!0})}};if(typeof window.requestIdleCallback=="function"){window.requestIdleCallback(e,{timeout:2e3});return}window.setTimeout(e,0)}async function Dm(){if(o.nativeOpen||!oc()||o.overviewMetadataHydrated||o.overviewMetadataHydrating)return!1;let e=Ry();if(!e.length)return o.overviewMetadataHydrated=!0,!1;o.overviewMetadataHydrating=!0;try{return await z(e,"all",{concurrency:Gt}),o.overviewMetadataHydrated=!0,!0}catch{return!1}finally{o.overviewMetadataHydrating=!1,o.mounted&&!o.nativeOpen&&h()}}async function fy(e,t="state"){if(!(!e.length||o.nativeOpen)){o.entitySyncInFlight=!0;try{await z(e,t,{concurrency:t==="all"?Gt:Qt})}finally{o.entitySyncInFlight=!1;let r=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,r&&!o.nativeOpen&&window.setTimeout(()=>{Ee(r)},0)}o.mounted&&!o.nativeOpen&&h()}}async function hy(){if(!o.nativeOpen)try{oc()&&await Dm(),(o.appView==="overview"||o.appView==="control"||o.appView==="diagnosis")&&await Fl({force:!0}),o.appView==="results"&&await yi({force:!0}),await or({force:!0}),Zt()&&await Promise.all([di({force:!0}),lm({forceTrendHistory:!0,forceEnergyHistory:!0})])}finally{o.mounted&&!o.nativeOpen&&h(),Hm()}}async function Nm(){if(o.nativeOpen)return;o.loadingEntities=!0,h();let e=vy();e>0&&await new Promise(i=>window.setTimeout(i,e));let t=aS(),r=iS(t),n=o.appView==="settings"?"all":"state";try{await Promise.all([z(t,n,{concurrency:n==="all"?Gt:Qt}),nc()?Mo({force:!0}):!1]),o.appView==="settings"?await Ny():await Dy()}finally{o.loadingEntities=!1,h()}let a=o.appView==="settings"?"all":"state";window.setTimeout(()=>{fy(r,a)},Cy),Lm(ec())}var Tm={installation:["hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Go,"otbLinkAvailable","otbConnectionAutoSelected","otbConnectionMismatch","flowControlMode","flowSetpoint","manualIpwm","silentStartTime","silentEndTime","maxWater","minRuntime"],service:["compressorStarts2hWarningLimit","compressorStarts72hWarningLimit","compressorCyclingWarning2h","compressorCyclingWarning72h","alternatingCompressorStartsWarning","boilerFaultFallbackEnabled","commissioningStatus","cm100Active"],heating:["strategy"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode"],integrations:["otEnabled","cicPollingEnabled","flowSource","boilerConnection","boilerCommandValid","otbLinkAvailable"],system:["setupComplete","projectVersionText","releaseChannelText","firmwareUpdateChannel","statusLedsEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","usageTelemetryInstallationId"]},by={installation:["setupComplete","installationTopology","hpGeneration","boilerCvAssistEnabled","boilerRatedHeatPower",...Go,"otbLinkAvailable","otbConnectionAutoSelected","otbConnectionMismatch",...ei,...nt,...Lr,...Jo,...Ys,...Dn,...Nn,"maxWater",...Ua],service:[...On,...Ja,...Dn,...Nn,"boilerCvAssistEnabled","boilerRatedHeatPower","flowSelected","flowKp","flowKi",...Js],heating:["strategy",...xt,...Yo,"dayMax","silentMax"],cooling:["manualCoolingEnable","coolingWithoutDewPointMode","coolingDewPointSelected","coolingMinimumSafeSupplyTemp","coolingSupplyTarget","coolingSupplyError",...Qs],integrations:[...Vs,...zs,...Go,...Za,...Xa,...Ks,...Us,...Ln,...Gs,...Bs],system:["setupComplete",...Yt,"firmwareUpdateChannel","projectVersionText","releaseChannelText","statusLedsEnabled","usageTelemetryEnabled","usageTelemetryChoiceConfigured","usageTelemetryInstallationId",...Qr,"webServerLogHistoryEnabled","debugLevel"]};function lr(){return[...new Set(["setupComplete",...ri])]}function vy(){return Number.isFinite(0),0}var Om=["strategy","controlModeLabel","openquattEnabled","installationTopology","hpGeneration","totalPower","flowSelected","totalCop","manualCoolingEnable","coolingEnableSource","coolingEnableSelected","coolingEnableEffectiveSource","silentModeOverride","totalHeat","totalCoolingPower"],wy=["strategy","controlModeLabel","hpGeneration","coolingEnableEffectiveSource"],yy=["totalPower","flowSelected"],Sy=["totalHeat","totalCoolingPower"],ky=2e3,qy=250,Ey=5e3,Ty=250;function Xl(e=o.settingsGroup){let t=Ie.has(e)?e:Se[0].id;return[...new Set(["setupComplete","strategy",...at,...by[t]||[]])]}function Pm(){let e=Ie.has(o.settingsGroup)?o.settingsGroup:Se[0].id;return[...new Set(Tm[e]||Tm.installation)]}var Cy=1200,xy=1800,My=0,$y=3500;function Zl(){return["setupComplete","strategy","usageTelemetryEnabled","usageTelemetryChoiceConfigured",...at]}function Ay(){let e=new Set;return oi.forEach(t=>{t.counterResetKey&&e.add(t.counterResetKey),(t.categories||[]).forEach(r=>{(r.groups||[]).forEach(n=>{(n.rows||[]).forEach(a=>{let i=Array.isArray(a)?a[1]:"";i&&e.add(i)})})})}),[...e]}function ta(e,t={}){let r=t.forceFast===!0,n=t.includeBulk===!0;return e==="energy"||e==="results"?[...new Set([...Zl(),...e==="energy"?Om:[],...Ay(),...e==="results"?Ll:[]])]:[...new Set([...Zl(),...r||!n?Zs:In,...e==="control"?Md:[],...e==="diagnosis"?Pl:[]])]}function ec(e=o.appView){return e==="diagnosis"||e==="results"||e==="settings"&&Zt()?My:xy}function Lm(e=ec()){o.nativeOpen||(o.supplementaryPrimeTimer&&window.clearTimeout(o.supplementaryPrimeTimer),o.supplementaryPrimeTimer=window.setTimeout(()=>{o.supplementaryPrimeTimer=null,hy()},e))}function _y(e={}){let t=o.pendingEntitySyncOptions||{},r={...t,...e};t.forceBulk||e.forceBulk?(r.forceBulk=!0,r.forceFast=!1):(t.forceFast||e.forceFast)&&(r.forceFast=!0),o.pendingEntitySyncOptions=r}function tc(e){let t=String(T(e)??"").trim().toLowerCase();return t!==""&&t!=="unknown"&&t!=="unavailable"&&t!=="nan"}function Cm(e){return tc(e)&&Number.isFinite(pe(T(e)))}function oc(){return o.appView==="overview"||o.appView==="diagnosis"||o.appView==="energy"}function Ry(){return $d.filter(e=>{let t=o.entities[e];return t?!String(t.uom??t.unit_of_measurement??"").trim():!I[e]?.optional})}function xm(){return oc()?wy.every(tc)&&yy.every(Cm)&&Sy.some(Cm):!0}function Hy(){return o.appView==="settings"}function Mm(){return Hy()?Pm().every(e=>I[e]?.optional&&!o.entities[e]?!0:tc(e)):!0}async function Dy(){if(xm())return;let e=Date.now()+ky;for(;!o.nativeOpen&&!xm()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,qy));try{await z(Om,"state")}catch{return}}}async function Ny(){if(Mm())return;let e=Date.now()+Ey;for(;!o.nativeOpen&&!Mm()&&Date.now()<e;){await new Promise(t=>window.setTimeout(t,Ty));try{await z(Pm(),"all")}catch{return}}}var Oy=8e3,Im=3e3,Py="/openquatt/entities",Ly=900,Iy="/openquatt/service/status",Fy="/openquatt/decision-log",jy="/openquatt/incidents",Wy=15e3,By=1e4;function qi(){return o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint?Im:Oy}function Ei(e){let t=String(e||"").toLowerCase();return t.includes("failed to fetch")||t.includes("load failed")||t.includes("networkerror")||t.includes("network request failed")||t.includes("connection refused")||t.includes("connection reset")||t.includes("err_connection")||t.includes("timeout")}var Vy=300*1e3;function Ky(){if(o.optionalMissingEntities)for(let e of Object.keys(o.optionalMissingEntities))delete o.optionalMissingEntities[e]}function $m(){let e=Date.now();o.lastEntitySyncAt=e,o.lastEntitySyncSuccessAt=e,o.entitySyncFailureCount=0,Jp(),!!o.deviceReconnectMode&&typeof _l=="function"&&_l()&&(o.lastFastEntitySyncAt=0,o.lastBulkEntitySyncAt=0,o.lastStaticEntitySyncAt=0,o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,o.decisionLog=null,o.decisionLogError="",o.decisionLogSignature="",o.decisionLogLastFetchAt=0,o.incidentMonitoringSnapshot=null,o.incidentMonitoringError="",o.incidentMonitoringUnsupported=!1,o.incidentMonitoringFailureCount=0,o.incidentMonitoringSignature="",o.incidentMonitoringRenderPending=!1,o.incidentMonitoringLastFetchAt=0,o.incidentAction={hp:0,kind:"",requestId:0,pending:!1,ok:null,result:""},typeof Vl=="function"?Vl():(Wl(),Bl(),et({webServerLogEnabled:null,webServerLogConnected:!1})),Ky())}function Fm(e){if(!Ei(e)){o.entitySyncFailureCount=0,Rl();return}o.ota.ok===1&&(o.ota.ok=2),o.entitySyncFailureCount=Number(o.entitySyncFailureCount||0)+1,o.deviceReconnectLastError=String(e||""),(o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||o.ota.on||o.entitySyncFailureCount>=2)&&Co(o.updateInstallBusy||o.updateInstallPhaseHint||o.ota.on?"ota":o.busyAction==="restartAction"?"restart":"reconnect",e)}function zy(e=Date.now(),t={}){if(t.forceProbe===!0||o.deviceReconnectMode||o.busyAction==="restartAction"||o.updateInstallBusy||o.updateInstallPhaseHint||Number(o.entitySyncFailureCount||0)>0)return!0;let r=Number(o.lastEntitySyncSuccessAt||o.lastEntitySyncAt||o.lastEntityResponseAt||0);if(!r)return!0;let n=document.hidden?Fn:Nd;return e-r>=n}async function Uy(){let e=I.status||I.setupComplete;if(!e)return{ok:!0,message:""};let t=o.deviceReconnectMode?Im:Dd,r=Q(e.domain,e.name);try{let n=await Yr(r,{cache:"no-store"},t,`${e.name} request timed out after ${t}ms`);return o.lastEntityResponseAt=Date.now(),{ok:n.ok||n.status===404,message:n.ok||n.status===404?"":`${e.name} HTTP ${n.status}`}}catch(n){return{ok:!1,message:n.message||String(n)}}}function Gy(e,t=Date.now()){let r=o.optionalMissingEntities?.[e];return!I[e]?.optional||!r?!1:t-Number(r)<Vy}function Qy(e,t=Date.now()){o.optionalMissingEntities&&(o.optionalMissingEntities[e]=t)}function Yy(e){let t=I[e];return t?`${e}	${t.domain}	${t.name}`:""}function Am(e,t){let r=new URLSearchParams;return r.set("detail",t==="all"?"all":"state"),r.set("entities",e.join(`
`)),r.toString()}function rc(e,t){let r=[],n=[],a=[],i="";return e.forEach(l=>{let c=Yy(l);if(!c)return;let d=[...a,c],u=Am(d,t);if(a.length&&u.length>Ly){r.push({keys:n,body:i}),n=[l],a=[c],i=Am(a,t);return}n=[...n,l],a=d,i=u}),a.length&&r.push({keys:n,body:i}),r}async function Jy(e){let t=qi(),r={method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.body},n=await Yr(Py,r,t,`bulk entities request timed out after ${t}ms`);if(!n.ok)throw new Error(`bulk entities HTTP ${n.status}`);return n.json()}async function Zy(){let e=qi(),r=await Yr(Iy,{cache:"no-store",headers:{"Cache-Control":"no-store"}},e,`service status request timed out after ${e}ms`);if(!r.ok)throw new Error(`service status HTTP ${r.status}`);return r.json()}async function Xy(){let e=qi(),r=await Yr(Fy,{cache:"no-store",headers:{"Cache-Control":"no-store"}},e,`decision log request timed out after ${e}ms`);if(!r.ok)throw new Error(`decision log HTTP ${r.status}`);return r.json()}async function eS(){let e=qi(),t=await Yr(jy,{cache:"no-store",headers:{"Cache-Control":"no-store"}},e,`incident monitoring request timed out after ${e}ms`);if(t.status===404)return{unsupported:!0,payload:null};if(!t.ok)throw new Error(`incident monitoring HTTP ${t.status}`);return{unsupported:!1,payload:await t.json()}}function nc(e=o.appView,t=o.settingsGroup){return e==="overview"||e==="settings"&&t==="service"}async function Mo(e={}){if(!nc()&&e.prefetchOverview!==!0)return!1;let t=e.force===!0,r=Date.now();if(o.incidentMonitoringFetchPromise)return o.incidentMonitoringFetchPromise;if(!t&&o.incidentMonitoringUnsupported||!t&&r-Number(o.incidentMonitoringLastFetchAt||0)<By)return!1;let n=i=>(Object.assign(o,i),i.changed&&zr(Dt()),i.changed),a=(async()=>{try{let i=await eS();return n(i.unsupported?Gp(o):zp(o,i.payload))}catch(i){return n(Up(o,i))}})();o.incidentMonitoringFetchPromise=a;try{return await a}finally{o.incidentMonitoringFetchPromise===a&&(o.incidentMonitoringFetchPromise=null)}}function tS(e={}){let t=Array.isArray(e.events)?e.events:[],r=Array.isArray(e.buckets)?e.buckets:[],n=t[0]||{},a=t[t.length-1]||{},i=r[r.length-1]||{};return[e?.meta?.event_count??t.length,e?.meta?.dropped_count??0,t.length,n.seq??"",a.seq??"",a.uptime_s??"",e?.meta?.boot_epoch_s??"",n.epoch_s??"",a.epoch_s??"",r.length,i.hour_start_uptime_s??"",i.hour_start_epoch_s??"",i.source??"",i.attention_count??"",e?.meta?.flash_write_count??""].join("|")}async function oS(e={}){if(o.appView!=="control")return!1;let t=e.force===!0,r=Date.now();if(!t&&o.decisionLogFetchPromise)return o.decisionLogFetchPromise;if(!t&&(o.decisionLog||o.decisionLogError)&&r-Number(o.decisionLogLastFetchAt||0)<Wy)return!1;o.decisionLogFetchPromise=(async()=>{let n=await Xy(),a=Array.isArray(n?.events)?n.events:[];if(!n?.ok||!Array.isArray(n?.events))throw new Error("decision log response mist events");let i=tS(n),l=o.decisionLogError!==""||o.decisionLogSignature!==i||!o.decisionLog;return o.decisionLog={...n,events:a,buckets:Array.isArray(n.buckets)?n.buckets:[]},o.decisionLogError="",o.decisionLogSignature=i,o.decisionLogLastFetchAt=Date.now(),l})();try{return await o.decisionLogFetchPromise}catch(n){let a=n.message||String(n),i=!!o.decisionLog||o.decisionLogError!==a;return o.decisionLog=null,o.decisionLogError=a,o.decisionLogSignature="",o.decisionLogLastFetchAt=Date.now(),i}finally{o.decisionLogFetchPromise=null}}function rS(e={}){let t=e?.entities&&typeof e.entities=="object"?e.entities:{};Object.entries(t).forEach(([r,n])=>{Pn.has(r)&&(o.optionalMissingEntities&&delete o.optionalMissingEntities[r],o.entities[r]=jm(r,o.entities[r],n))})}async function nS(e){if(!e.length)return{ok:!0,message:""};try{let t=await Zy();return rS(t),o.lastEntityResponseAt=Date.now(),{ok:!0,message:""}}catch(t){return{ok:!1,message:t.message||String(t)}}}async function z(e,t="state",r={}){let n=Date.now(),a=r.forceMissing===!0,i=e.filter(b=>a||Pn.has(b)||!Gy(b,n));if(!i.length)return;let l=i.filter(b=>Pn.has(b)),c=i.filter(b=>!Pn.has(b)),u=(await nS(l)).ok?c:[...c,...l];if(!u.length){_m(),zr(Dt()),o.busyAction||($m(),o.controlError="");return}let m=Number(r.concurrency),v=Number.isFinite(m)&&m>0?Math.floor(m):Gt,w=rc(u,t),f=Math.max(1,Math.min(v,Gt)),g=[];for(let b=0;b<w.length;b+=f){let S=w.slice(b,b+f),k=await Promise.allSettled(S.map(async E=>({chunk:E,payload:await Jy(E)})));g.push(...k)}g.some(b=>b.status==="fulfilled")&&(o.lastEntityResponseAt=Date.now());let p="";g.forEach(b=>{if(b.status!=="fulfilled"){let M=b.reason.message||String(b.reason);p||(p=M);return}let{chunk:S,payload:k}=b.value,E=k?.entities&&typeof k.entities=="object"?k.entities:{},q=new Set(Array.isArray(k?.missing)?k.missing:[]);S.keys.forEach(M=>{if(Object.prototype.hasOwnProperty.call(E,M)){o.optionalMissingEntities&&delete o.optionalMissingEntities[M],o.entities[M]=jm(M,o.entities[M],E[M]);return}let _=I[M];_?.optional?q.has(M)&&Qy(M,n):p||(p=`${_?.name||M} ontbreekt in bulk response`)})}),_m(),zr(Dt()),p?(Fm(p),o.deviceReconnectMode?o.controlError="":o.controlError=`Niet alle helpervelden konden worden ververst. ${p}`):o.busyAction||($m(),o.controlError="")}function jm(e,t={},r={}){let n={...t||{},...r||{}};return I[e]?.domain==="select"&&(!String(r.state??"").trim()&&String(t?.state??"").trim()&&(n.state=t.state),!String(r.value??"").trim()&&String(t?.value??"").trim()&&(n.value=t.value),!Array.isArray(r.option)&&Array.isArray(t?.option)&&(n.option=t.option),!Array.isArray(r.options)&&Array.isArray(t?.options)&&(n.options=t.options)),n}function _m(){o.complete=si(),o.stage=o.complete===!0?"Gereed":o.complete===!1?"Quick Start":"Laden...",o.summary=Yd(),o.appView==="diagnosis"&&!vt()&&_t(qo(),{syncMode:"replace",forceSync:!0}),o.appView||_t(Gn()||qo(),{syncMode:"replace",forceSync:!0})}function aS(){let e=Zl();return o.appView==="settings"?[...new Set([...e,...Xl()])]:o.appView==="energy"||o.appView==="results"?ta(o.appView,{forceFast:!0}):o.appView==="overview"||o.appView==="diagnosis"?ta(o.appView,{forceFast:!0}):[...new Set(e)]}function iS(e=[]){let t=new Set(e);return(o.appView==="settings"?Xl():o.appView==="overview"||o.appView==="control"||o.appView==="diagnosis"?[...new Set([...ta(o.appView,{includeBulk:!0}),...Yt])]:o.appView==="energy"||o.appView==="results"?[...new Set([...ta(o.appView,{forceFast:!0}),...Yt])]:[...new Set(["setupComplete","strategy",...at])]).filter(n=>!t.has(n))}function Rm(e=Date.now(),t={}){return t.forceBulk===!0?!0:e-Number(o.lastBulkEntitySyncAt||0)>=Rd}async function Ee(e={}){if(o.nativeOpen||o.loadingEntities||o.draggingCurveKey||o.busyAction||o.settingsInteractionLock)return;if(o.updateInstallBusy||fi()){o.pendingEntitySyncOptions=null;return}if(o.focusedField&&o.appView!=="settings")return;if(o.entitySyncInFlight){_y(e);return}let t=Date.now();if(document.hidden&&t-Number(o.lastEntitySyncAttemptAt||0)<Fn)return;let r=o.appView,n=e.prefetchView==="overview"&&!e.forceBulk&&r==="settings",a=n?"overview":r,i=a==="overview"||a==="control"||a==="diagnosis"||a==="energy"||a==="results",l=e.forceFast===!0&&!e.forceBulk,c=!l&&!n&&Rm(t,e),u=t-Number(o.lastStaticEntitySyncAt||0)>=Hd||o.updateInstallBusy||o.updateInstallPhaseHint?Yt:[],m=o.quickStartModalOpen&&o.currentStep==="flow-source"?bt:[],v=o.quickStartModalOpen&&o.currentStep==="setup"?Mt:[],w=o.quickStartModalOpen&&o.currentStep==="thermostat-source"?Qo:[],f=Il()?eo():[],g=n?[...Zs,...at,"setupComplete",...u]:i?[...ta(a,{forceFast:l,includeBulk:c}),...u]:r==="settings"?[...new Set([...Xl(),...f,...u])]:c?["setupComplete",...u,...at,"strategy",...Uo,...nt,...se()?ke.map(p=>p.key):xt]:["setupComplete",...at,"strategy",...u];o.entitySyncInFlight=!0,o.lastEntitySyncAttemptAt=t;try{let p=o.deviceReconnectMode,b=zy(t,e)?await Uy():{ok:!0,message:""};if(!b.ok){Fm(b.message),n||h();return}if(await z([...new Set([...g,...o.ota.wait?["uptime","projectVersionText"]:[],...v,...m,...w])],n?"state":r==="settings"||v.length?"all":"state",{concurrency:l&&i?Qt:Gt}),o.lastFastEntitySyncAt=Date.now(),c&&(a==="overview"||a==="control"||a==="diagnosis")&&!n&&(o.lastBulkEntitySyncAt=o.lastFastEntitySyncAt),u.length&&(o.lastStaticEntitySyncAt=o.lastFastEntitySyncAt),n){await Mo({prefetchOverview:!0});return}i&&!o.overviewMetadataHydrated&&!o.overviewMetadataHydrating&&Dm();let S=p!==o.deviceReconnectMode,k=nc(a,o.settingsGroup)?await Mo({force:e.forceIncidentMonitoring===!0}):!1,E=l&&i,q=E?!1:a==="overview"||a==="control"||a==="diagnosis"?await Fl():!1,M=E?!1:o.appView==="results"?await yi():!1,_=a==="control"?await oS({force:e.forceDecisionLog===!0}):!1,H=E?!1:Il()?(await Promise.all([sm(),yi({metaOnly:!0})])).some(Boolean):!1,F=E||!np()?!1:await or(),L=E||!ap()?!1:await di(),W=E||!qm()?!1:await sr({force:o.systemModal==="mqtt-sensors"}),x=rm();if(E&&!o.nativeOpen&&Lm(ec(a)),S){h();return}if(k&&o.appView==="settings"&&o.settingsGroup==="service"){o.focusedField?o.incidentMonitoringRenderPending=!0:(o.incidentMonitoringRenderPending=!1,h());return}if(q&&o.appView==="diagnosis"&&!o.root?.querySelector(".oq-overview-trends")){h();return}if(M&&o.appView==="results"&&!o.root?.querySelector(".oq-energy-history")){h();return}if(_&&o.appView==="control"){jl()||h();return}if(H&&o.appView==="settings"){h();return}if(F&&(o.systemModal==="login"||Zt())){h();return}if(L&&o.appView==="settings"){h();return}if(o.systemModal==="mqtt-sensors"){ki()!==o.mqttSensorsModalRenderSignature&&h();return}if(W&&o.appView==="settings"){h();return}let O=!!(o.updateModalOpen||o.systemModal||o.interfacePanelOpen);if(x!==o.headerRenderSignature)if(O&&Nl())o.headerRenderSignature=x;else{h();return}else Nl();if(o.appView==="settings"&&String(o.systemModal||"").startsWith("service-task-")){Vn()!==o.settingsRenderSignature&&h();return}if(O)return;if(o.appView==="settings"){let D=Vn();if(D!==o.settingsRenderSignature&&!o.focusedField){h();return}if(!am()){o.focusedField||h();return}o.focusedField&&(o.settingsRenderSignature=D);return}if(o.appView==="diagnosis"){pm()||h();return}if(o.appView==="control"){jl()||h();return}if(o.appView==="energy"){cm()||h();return}if(o.appView==="results"){um()||h();return}dm()||h()}catch(p){n||(o.controlError=`Helperstatus kon niet worden geladen. ${p.message}`,h())}finally{o.entitySyncInFlight=!1;let p=o.pendingEntitySyncOptions;o.pendingEntitySyncOptions=null,p&&!o.nativeOpen&&window.setTimeout(()=>{Ee(p)},0),l&&(a==="overview"||a==="control"||a==="diagnosis")&&!n&&!o.nativeOpen&&!p&&Rm(Date.now())&&window.setTimeout(()=>{Ee({forceBulk:!0})},$y)}}function Nt(){return{}}function sS(){let e=String(T("hpGeneration")||"").trim();return e||""}function cr(e){let t=String(e||"").trim().toLowerCase();return t==="single"||t.includes("quatt single")||t.includes("openquatt single")?"single":t==="duo"||t.includes("quatt duo")||t.includes("openquatt duo")?"duo":""}function lS(){if(!Array.isArray(Ir))return"";if(Ir.some(t=>y(t)))return"duo";let e=o.optionalMissingEntities||{};return Ir.every(t=>e[t])?"single":""}function ac(e){let t=cr(e);return(t==="single"||t==="duo")&&typeof o<"u"&&o&&typeof o=="object"&&(o.lastKnownInstallationTopology=t),t}function cS(){if(typeof o<"u"&&o&&typeof o=="object"){let e=String(o.lastKnownInstallationTopology||"").trim().toLowerCase();if(e==="single"||e==="duo")return e}return""}function ne(){let e=cr(T("installationTopology"));if(e==="single"||e==="duo")return ac(e);let t=cr(Nt().installation);if(t==="single"||t==="duo")return ac(t);let r=lS();return r?ac(r):cS()}function Ot(){let e=ne(),t=sS();return e==="single"?t?`Quatt Single ${t}`:"Quatt Single":e==="duo"?t?`Quatt Duo ${t}`:"Quatt Duo":t?`Quatt Hybrid ${t}`:"Quatt Hybrid"}function tt(){return"OpenQuatt"}function oa(e){let t=String(e||"").trim().toLowerCase();return t==="wifi"||t==="wi-fi"||t.includes("wifi")||t.includes("wi-fi")?"wifi":t==="eth"||t==="ethernet"||t.includes("ethernet")?"eth":""}function st(e=lt()){return e==="wifi"?"Wi-Fi":e==="eth"?"Ethernet":"Onbekend"}function ur(e=ne()){return e==="single"?"Single":e==="duo"?"Duo":"Onbekende opstelling"}function Zr(){let e=String(T("hardwareProfileText")||"").trim().toLowerCase();return e&&e!=="unknown"&&e!=="onbekend"?e:String(Nt().hardwareProfile||e).trim().toLowerCase()}function lt(){return oa(T("connectionText")||Nt().connection)}function Wm(){let e=lt();return e==="wifi"?"eth":e==="eth"?"wifi":""}function Bm(){let e=ne();return e==="single"?"duo":e==="duo"?"single":""}function $o(e=ne(),t=lt()){let r=ur(e),n=Zr();return n==="heatpump_controller_q"?`Heatpump Controller Q ${r} ${st(t)}`:n==="heatpump_listener"?`Heatpump Listener ${r} ${st(t)}`:n==="waveshare"?`Waveshare ${r} ${st(t)}`:`${tt()} ${r} ${st(t)}`}function ic(){let e=C("timeValid"),t=String(T("timeNowHhmm")||"").trim();if(t&&t!=="invalid")return t;if(y("timeValid")&&!e)return"Geen tijdsync";try{return new Intl.DateTimeFormat("nl-NL",{hour:"2-digit",minute:"2-digit"}).format(new Date)}catch{return new Date().toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"})}}function Ti(){return y("timeValid")&&!C("timeValid")?"Geen tijdsync":`${new Intl.DateTimeFormat("nl-NL",{day:"numeric",month:"short",year:"numeric"}).format(new Date)} \xB7 ${ic()}`}function uS(e){return String(e?.uom??e?.unit_of_measurement??"").trim().toLowerCase()}function dS(e){let t=e?.state;if(t!==""&&t!==null&&t!==void 0){let a=Number(t);if(Number.isFinite(a))return a}let r=e?.value,n=Number(r);return Number.isFinite(n)?n:NaN}function Xr(){let e=dS(o.entities.uptime);if(Number.isFinite(e)&&e>=0){let n=uS(o.entities.uptime);if(n==="d")return tr(e*1440);if(n==="h")return tr(e*60);if(n==="s")return tr(e/60)}let t=String(o.entities.uptimeReadable?.state??o.entities.uptimeReadable?.value??"").trim();if(t&&t.toLowerCase()!=="unknown")return t;let r=Number(Nt().bootedAt);return!Number.isFinite(r)||r<=0?"\u2014":tr((Date.now()-r)/6e4)}function en(){let e=String(o.entities.ipAddress?.state??o.entities.ipAddress?.value??"").trim();if(e)return e;let t=String(Nt().ipAddress||"").trim();return t||(typeof window<"u"?String(window.location.hostname||"").trim():"")||"\u2014"}function Ao({getScroller:e,getToken:t,setToken:r,isActive:n=()=>!0,getIdentity:a=null,preserveGrowth:i=!1,stickToBottom:l=!1,nearBottomThreshold:c=48}){function d(){let w=e();if(!w)return null;let f={scrollTop:w.scrollTop};if((i||l)&&(f.scrollHeight=w.scrollHeight),l){let g=w.scrollHeight-w.scrollTop-w.clientHeight;f.stickToBottom=g<c}return a&&(f.identity=a(w)),f}function u(w){if(!w)return;let f=e();if(!f||a&&a(f)!==w.identity)return;if(w.stickToBottom){f.scrollTop=f.scrollHeight;return}let g=i?f.scrollHeight-Number(w.scrollHeight||0):0;f.scrollTop=Math.max(0,Number(w.scrollTop||0)+g)}function m(w,f=!0){if(!w)return;let g=Number(t()||0)+1;r(g);let p=()=>{Number(t()||0)!==g||!n()||u(w)};if(f){window.requestAnimationFrame(p);return}p()}function v(){r(Number(t()||0)+1)}return{capture:d,invalidate:v,queue:m,restore:u}}function He(e){return Object.prototype.hasOwnProperty.call(o.inputDrafts,e)?o.inputDrafts[e]:T(e)}function _o({key:e,value:t,meta:r,controlClass:n,inputClass:a="oq-helper-input",inputAttributes:i="",unitMarkup:l=""}){return`
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
  `}function Pt(e,t,r){return r?`
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
  `:""}function fe(e,t,r,n,a="",i=""){return`<article class="oq-helper-surface oq-settings-field${a?` ${a}`:""}" data-oq-settings-field="${s(e)}"><div class="oq-settings-field-head"><h3>${s(t)}</h3>${Pt(e,t,r)}</div><div class="oq-settings-field-control">${n}</div>${i}</article>`}function Oe(e,t,r,n,a=""){return fe(e,t,r,`<div class="oq-settings-static-value">${s(n)}</div>`,a)}function ct({label:e,value:t,note:r="",action:n="",className:a="",dataAttribute:i="data-oq-diagnostics-row",dataValue:l=""}){let c=`oq-settings-system-row${n?" oq-settings-system-row--with-action":""}${a?` ${s(a)}`:""}`,d=i&&l?` ${i}="${s(l)}"`:"";return!n&&!r?`<div class="${c}"${d}><span class="oq-settings-system-row-label">${s(e)}</span><strong class="oq-settings-system-row-value">${s(t)}</strong></div>`:`<div class="${c}"${d}><div class="oq-settings-system-row-copy"><p class="oq-settings-system-row-label">${s(e)}</p><strong class="oq-settings-system-row-value">${s(t)}</strong>${r?`<p class="oq-settings-system-row-note">${s(r)}</p>`:""}</div>${n}</div>`}function Ce(e,t={}){let r=typeof t=="number"?{decimals:t}:t||{},n=o.entities[e];if(!n)return"\u2014";let a=pe(n.value??n.state);if(Number.isFinite(a)){let c=Number.isInteger(a)?0:Number.isFinite(r.decimals)?r.decimals:1,d=a.toFixed(Math.max(0,c));return r.trimTrailingZeros&&d.includes(".")&&(d=d.replace(/\.?0+$/,"")),`${d}${n.uom?` ${n.uom}`:""}`}let i=String(n.state??n.value??"").trim(),l=i.toLowerCase();return!i||l==="nan"||l==="unknown"||l==="unavailable"?"\u2014":i}function to(e,t="\u2014"){let r=o.entities[e];if(!r)return t;let n=String(r.state??r.value??"").trim();return!n||n==="0"||n==="\u2014"?t:n}function oo(e,t="",r=2){let n=Number(e);return Number.isFinite(n)?`${n.toFixed(Math.max(0,r))}${t?` ${t}`:""}`:"\u2014"}function xe(e,t=2){return Ce(e,{decimals:t})}function dr(e,t="IDLE"){let r=to(e,t),n=String(r??"").trim();return!n||n==="0"||n==="UNKNOWN"||n==="UNAVAILABLE"||n==="NAN"?t:n}function Ci(){let e=to("commissioningStatus",""),t=C("cm100Active"),r=String(e||"").trim().toUpperCase();return(t||r==="CM100 READY"||r==="CM100 STOPPED"||r.includes("DONE")||r.includes("FAILED")||r.includes("ABORT")||r.includes("APPLIED")||r.includes("REFUSED"))&&(o.pendingCommissioningCm100Start=!1),r&&r!=="0"?r==="IDLE"&&o.pendingCommissioningCm100Start?"CM100 REQUESTED":r:o.pendingCommissioningCm100Start?"CM100 REQUESTED":t?"CM100 READY":"IDLE"}function Te(e){let t=String(e||"").trim();return t?{None:"Geen",Manual:"Handmatig",Disabled:"Niet gebruiken","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OT-thermostaat + handmatig","CIC + Manual":"CIC + handmatig","CIC + HA input + Manual":"CIC + HA-invoer + handmatig",Balanced:"Gebalanceerd",Stable:"Stabiel",Responsive:"Direct",Calm:"Rustig",Custom:"Aangepast",[Ka]:"Stooklijn",[Va]:"Power House","Dew point required":"Dauwpuntmeting vereist","Dew point":"Dauwpunt","Dew point (MQTT)":"Dauwpunt (MQTT)","Dew point (HA)":"Dauwpunt (HA)","Allow without dew point":"Dauwpuntsbenadering","Allow without dew point, use fallback":"Dauwpuntsbenadering","Allow without dew point, use dew point approximation":"Dauwpuntsbenadering","Allow without dew point, user responsibility":"Expliciet toestaan",Fallback:"Dauwpuntsbenadering","Fallback blocked":"Dauwpuntsbenadering geblokkeerd","User responsibility":"Expliciet toegestaan",Local:"Lokaal",CIC:"CIC","HA input":"HA-invoer","CIC + HA input":"CIC + HA-invoer","OT thermostat":"OT-thermostaat","Outdoor unit":"Buitenunit","Local - PT1000":"Lokaal - PT1000","Local - DS18B20":"Lokaal - DS18B20","HP1 water out (fallback)":"HP1 uitgaand water (fallback)","HP2 water out (fallback)":"HP2 uitgaand water (fallback)",Unavailable:"Niet beschikbaar",Auto:"Auto","CIC or HA input":"CIC of HA-invoer","Flowmeter HP1":"Flowmeter HP1","Flowmeter HP2":"Flowmeter HP2","Local aggregate HP1/HP2":"Gecombineerde flow HP1/HP2"}[t]||t:""}function tn({key:e,option:t,currentValue:r,busy:n,copy:a="",meta:i="",image:l="",imageAlt:c="",infoTitle:d="",infoCopy:u="",infoId:m=""}){let v=t===r,w=`
    <button
      class="oq-helper-surface oq-settings-choice-card${v?" is-active":""}${l?" oq-settings-choice-card--with-image":""}${u?" oq-settings-choice-card--has-info":""}"
      type="button"
      data-oq-action="select-settings-option"
      data-select-key="${s(e)}"
      data-select-option="${s(t)}"
      aria-pressed="${v?"true":"false"}"
      ${n?"disabled":""}
    >
      <span class="oq-settings-choice-head">
        <span class="oq-settings-choice-title">${s(Te(t))}</span>
        ${i?`<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${s(i)}</span></span>`:""}
      </span>
      ${l?`<span class="oq-settings-choice-media"><img src="${s(l)}" alt="${s(c||Te(t))}" loading="lazy" decoding="async"></span>`:""}
      ${a?`<span class="oq-settings-choice-copy">${s(a)}</span>`:""}
    </button>
  `;if(!u)return w;let f=d||Te(t),g=m||`${e}-${t}`;return`
    <article class="oq-settings-choice-card-shell${v?" is-active":""}${l?" oq-settings-choice-card-shell--with-image":""}">
      ${w}
      ${Pt(g,f,u)}
    </article>
  `}function Lt(e={}){return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function Ro(e,t,r,n=""){if(!y(e))return"";let a=o.entities[e]||{},i=String(T(e)||""),l=Lt(a);return fe(e,t,r,`<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${s(e)}" ${o.loadingEntities?"disabled":""}>${l.map(c=>`<option value="${s(c)}" ${c===i?"selected":""}>${s(Te(c))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`,n)}function pr(e,t,r,n){let a=String(n||"").trim();if(!a)return"";let i=!!o.settingsAdvancedOpen?.[e];return`
    <details class="oq-settings-advanced" data-oq-settings-advanced="${s(e)}"${i?" open":""}>
      <summary data-oq-action="toggle-settings-advanced" data-settings-advanced="${s(e)}">${s(t)}</summary>
      <div class="oq-settings-advanced-body">
        ${r?`<p class="oq-settings-advanced-copy">${s(r)}</p>`:""}
        ${a}
      </div>
    </details>
  `}function pS(e,t,r="Aan",n="Uit"){return`<span class="oq-settings-toggle-state${t?" is-on":""}" data-oq-switch-pill="${s(e)}" data-on-label="${s(r)}" data-off-label="${s(n)}">${s(t?r:n)}</span>`}function ut(e,t,r,n,a="Aan",i="Uit",l=!0){let c=r?a:i,d=r?"off":"on";return`
    <div class="oq-settings-compact-switch-row">
      ${l?pS(e,r,a,i):""}
      <button
        class="oq-settings-toggle-switch${r?" is-on":""}"
        type="button"
        role="switch"
        data-oq-action="toggle-overview-control"
        data-control-key="${s(e)}"
        data-control-state="${s(d)}"
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
  `}function sc(e,t,r="",n=""){let a=t?r:n;return a?`<p data-oq-switch-copy="${s(e)}" data-on-copy="${s(r)}" data-off-copy="${s(n)}">${s(a)}</p>`:""}function Vm(e,t,r,n="",a="",i=""){if(!y(e))return"";let l=!!T(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return fe(e,t,r,`
      <div class="oq-settings-compact-switch-field">
        ${ut(e,t,l,c)}
        ${sc(e,l,n,a)}
      </div>
    `,i)}function Km(e,t,r,n,a=""){if(!y(e))return"";let i=!!T(e),l=o.loadingEntities||o.busyAction===`switch-${e}`;return fe(e,t,r,`
      <div class="oq-settings-compact-switch-field">
        ${ut(e,t,i,l)}
        ${n?`<p>${s(n)}</p>`:""}
      </div>
    `,a)}function xi(e,t,r){if(!y(e))return"";let n=!!T(e),a=o.loadingEntities||o.busyAction===`switch-${e}`;return`
    <article class="oq-settings-integration-card" data-oq-settings-field="${s(e)}">
      <div class="oq-settings-integration-card-head">
        <h4>${s(t)}</h4>
      </div>
      <p>${s(r)}</p>
      ${ut(e,t,n,a)}
    </article>
  `}function Ge(e,t,r="oq-helper-button oq-helper-button--ghost",n=!1){return`
    <button
      class="${r}"
      type="button"
      data-oq-action="press-named-button"
      data-oq-button-key="${s(e)}"
      ${n?"disabled":""}
    >
      ${s(t)}
    </button>
  `}function mr({active:e,startKey:t,stopKey:r,startLabel:n,stopLabel:a,startClass:i="oq-helper-button oq-helper-button--primary",stopClass:l="oq-helper-button oq-helper-button--ghost",startDisabled:c=!1,stopDisabled:d=!1}){return Ge(e?r:t,e?a:n,e?l:i,e?d:c)}function zm(e,t,r,n,a=""){if(!y(e))return"";let i=o.entities[e]||{},l=String(T(e)||""),c=Lt(i),d=o.loadingEntities||o.busyAction===`save-${e}`,u=`
    <div class="oq-settings-choice-grid">
      ${c.map(m=>{let v=n[m]||"",w=typeof v=="string"?v:v.copy||"",f=typeof v=="string"?"":v.image||"",g=typeof v=="string"?"":v.alt||"";return tn({key:e,option:m,currentValue:l,busy:d,copy:w,image:f,imageAlt:g})}).join("")}
    </div>
  `;return fe(e,t,r,u,a)}function oe(e,t,r,n="",a={}){if(!y(e))return"";let i=ze(e),l=He(e),c=a.unitOverride||i.uom||"",d=a.showUnit!==!1&&!!c,u=d&&a.unitMode!=="outside",m=_o({key:e,value:l,meta:i,controlClass:`oq-helper-control${d&&!u?" oq-helper-control--split":""}${u?" oq-helper-control--suffix":""}`,unitMarkup:d?u?`<span class="oq-helper-unit-chip">${s(c)}</span>`:`<span class="oq-helper-unit">${s(c)}</span>`:""});return fe(e,t,r,m,n,a.footerMarkup||"")}function ro(e,t,r,n="",a={}){if(!y(e))return"";let i=ze(e),l=qe(e,T(e)),c=a.minLabel||`${i.min}${i.uom||""}`,d=a.maxLabel||`${i.max}${i.uom||""}`,u=a.valueLabel||Y(e,l);return fe(e,t,r,`<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${s(c)}</span><strong>${s(u)}</strong><span>${s(d)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${s(e)}" min="${i.min}" max="${i.max}" step="${i.step}" value="${l}" ${o.loadingEntities?"disabled":""}></label>`,n)}function on(e,t,r,n={}){if(!y(e))return"";let a=ze(e),i=He(e),l=n.compact===!0,c=n.embedded===!0,d=n.infoId||e,u=n.showCopy!==!1;return`
    <article class="oq-settings-mini-field${l?" oq-settings-mini-field--compact":""}${c?" oq-settings-mini-field--embedded":""}">
      <div class="oq-settings-mini-copy">
        <div class="oq-settings-mini-copy-head">
          <h5>${s(t)}</h5>
          ${r?Pt(d,t,r):""}
        </div>
        ${r&&u?`<p>${s(r)}</p>`:""}
      </div>
      ${_o({key:e,value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:a.uom?`<span class="oq-helper-unit-chip">${s(a.uom)}</span>`:""})}
    </article>
  `}function lc(e,t,r,n=""){if(!y(e))return"";let a=jn(T(e));return fe(e,t,r,`<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${s(e)}" value="${s(a)}" ${o.loadingEntities?"disabled":""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`,n||"oq-settings-field--time")}function re(e,t,r,n,a="",i=""){return`<section class="oq-settings-section${i?` ${s(i)}`:""}"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${s(e)}</p>${a?`<div class="oq-settings-section-head-meta-badge">${a}</div>`:""}</div><h3>${s(t)}</h3><p>${s(r)}</p></div>${n}</section>`}var Um=250;function Gm(){return[]}function fr(){return typeof window>"u"?!1:Gm().length>0}function mS(){return`${Ne()}/events`}function gS(){return`${Ne()}/openquatt/logs/recent`}function fS(){return`${Ne()}/openquatt/logs/clear`}function Mi(){let e=o.entities?.webServerLogHistoryEnabled;if(!e)return!0;if(typeof e.value=="boolean")return e.value;let t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function $i(){return o.nativeOpen?"Niet beschikbaar":fr()?"Voorbeeld":o.webServerLogEnabled===!1?"Niet beschikbaar":"Beschikbaar"}function hS(e){let t=Math.max(0,Math.floor(Number(e)/1e3)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return`${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Qm(e){let t=Number(e)||0;if(t>9466848e5){let r=e instanceof Date?e:new Date(t),n={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",n).format(r)}catch{return r.toLocaleString("nl-NL",n)}}return hS(t)}function bS(e){let t=Number(e)||0;if(t>9466848e5)return new Date(t).toLocaleString("nl-NL",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});let r=Math.max(0,Math.floor(t/1e3)),n=Math.floor(r/3600),a=Math.floor(r%3600/60),i=r%60;return`Sinds opstart: ${n}u ${a}m ${i}s`}function vS(){return o.nativeOpen?"Niet beschikbaar":fr()?Mi()?"Voorbeeld buffer aan":"Voorbeeld buffer uit":Mi()?"Buffer aan":"Buffer uit"}function wS(){return Mi()?"Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.":"Geen tijdelijke buffer in RAM. De viewer toont alleen live /events."}function uc(){return o.entities?.debugLevel||null}function Ym(e=uc()){let t=Array.isArray(e?.option)?e.option:Array.isArray(e?.options)?e.options:[];return t.length?t:["NONE","ERROR","WARN","INFO","CONFIG","DEBUG"]}function yS(e=uc()){let t=String(e?.value??e?.state??"").trim(),r=Ym(e);return r.includes(t)?t:r.includes("INFO")?"INFO":r[0]||""}function Jm(e,t=null){if(!e||!t)return!1;let r=Number(e.seq),n=Number(t.seq);if(Number.isFinite(r)&&Number.isFinite(n)&&r===n)return!0;let a=String(e.raw??e.text??"").trim(),i=String(t.raw??t.text??"").trim();if(!a||a!==i)return!1;let l=Number(e.receivedAt??e.ts??0),c=Number(t.receivedAt??t.ts??0);return Math.abs(l-c)<=2e3}function SS(e,t){let r=Number(e.receivedAt??e.ts??0),n=Number(t.receivedAt??t.ts??0);if(r!==n)return r-n;let a=Number(e.seq??0),i=Number(t.seq??0);return a!==i?a-i:String(e.raw??"").localeCompare(String(t.raw??""))}function cc(e,{prepend:t=!1}={}){if(!Array.isArray(e)||e.length===0)return;let r=t?[...e,...o.webServerLogEntries]:[...o.webServerLogEntries,...e];r.sort(SS);let n=[];for(let a of r){let i=n[n.length-1]||null;Jm(a,i)||n.push(a)}o.webServerLogEntries=n.slice(-Um)}function dc(e,t={}){let r=WS(e).trimEnd(),n=Number(t.receivedAt),a=Number(t.seq);return{raw:e,text:r,tone:BS(e),receivedAt:Number.isFinite(n)?n:Date.now(),seq:Number.isFinite(a)?a:void 0}}function kS(e,t){let n=Math.max(0,t-e-1)*9e4;return Date.now()-n}function qS(){let e=Gm(),t=e.length;return e.map((r,n)=>dc(r,{receivedAt:kS(n,t),seq:n+1}))}function ES(){let e=vc();e&&(e.scrollTop=e.scrollHeight)}var pc=Ao({getScroller:vc,getToken:()=>o.webServerLogScrollRestoreToken,setToken:e=>{o.webServerLogScrollRestoreToken=e},isActive:()=>o.systemModal==="webserver-logs",preserveGrowth:!0,stickToBottom:!0}),no=pc.capture,ao=pc.queue;function TS(){return o.root?o.root.querySelector("[data-oq-cm100-commissioning-scroller]"):null}var Zm=Ao({getScroller:TS,getToken:()=>o.cm100CommissioningScrollRestoreToken,setToken:e=>{o.cm100CommissioningScrollRestoreToken=e},isActive:()=>o.systemModal==="cm100-commissioning",preserveGrowth:!0,stickToBottom:!0}),Xm=Zm.capture,mc=Zm.queue;function CS(){return o.root?o.root.querySelector("[data-oq-service-task-scroller]"):null}var eg=Ao({getScroller:CS,getToken:()=>o.serviceTaskModalScrollRestoreToken,setToken:e=>{o.serviceTaskModalScrollRestoreToken=e},isActive:()=>String(o.systemModal||"").startsWith("service-task-")}),tg=eg.capture,gc=eg.queue;function xS(){return o.root?o.root.querySelector("[data-oq-history-storage-scroller]"):null}var og=Ao({getScroller:xS,getToken:()=>o.historyStorageModalScrollRestoreToken,setToken:e=>{o.historyStorageModalScrollRestoreToken=e},isActive:()=>o.systemModal==="history-storage"}),rg=og.capture,fc=og.queue;function MS(){return o.root?o.root.querySelector("[data-oq-settings-backup-restore-scroller]"):null}var ng=Ao({getScroller:MS,getToken:()=>o.settingsBackupRestoreScrollRestoreToken,setToken:e=>{o.settingsBackupRestoreScrollRestoreToken=e},isActive:()=>o.systemModal==="settings-backup-restore"}),ag=ng.capture,hc=ng.queue;async function Ho(e={}){if(o.nativeOpen||typeof window.fetch!="function")return;let t=e.scrollState||no(),r=e.replaceEntries===!0||o.webServerLogHistoryNeedsReconcile===!0,n=r?new Set(o.webServerLogEntries):null,a=Number(o.webServerLogHistoryRequestToken||0)+1;o.webServerLogHistoryRequestToken=a,o.webServerLogHistoryLoading=!0,o.webServerLogHistoryError="";try{let i=await window.fetch(gS(),{headers:{"Cache-Control":"no-store"}});if(!i.ok)throw new Error(`HTTP ${i.status}`);let l=await i.json();if(o.systemModal!=="webserver-logs"||o.webServerLogHistoryRequestToken!==a)return;o.webServerLogCsrfToken=String(l.csrf_token||"");let c=AS(l),d=r?o.webServerLogEntries.filter(u=>!n.has(u)):[];r&&(o.webServerLogEntries=[],o.webServerLogRecentTail=[],o.webServerLogRecentAnchorAt=0),o.webServerLogHistoryLoaded=!0,o.webServerLogHistoryNeedsReconcile=!1,c.length>0&&(cc(c,{prepend:!0}),o.webServerLogRecentTail=c.slice(-4).map(u=>String(u.raw??u.text??"")),o.webServerLogRecentAnchorAt=Date.now()),d.length>0&&cc(d)}catch(i){o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===a&&(o.webServerLogHistoryError=i instanceof Error?i.message:"Recente logs konden niet worden opgehaald.")}finally{o.webServerLogHistoryRequestToken===a&&(o.webServerLogHistoryLoading=!1),o.systemModal==="webserver-logs"&&o.webServerLogHistoryRequestToken===a&&(h(),ao(t))}}function $S(e,t=0){if(!e||typeof e!="object")return null;let r=String(e.raw??"").trim()||String(e.message??"").trim();return r?dc(r,{receivedAt:Number(e.ts??e.timestamp_ms??e.receivedAt??Date.now()),seq:Number(e.seq??t)}):null}function AS(e){return!e||typeof e!="object"?[]:e.enabled===!1?[]:(Array.isArray(e.entries)?e.entries:[]).map((r,n)=>$S(r,n+1)).filter(r=>r!==null)}function _S(e){if(!e||!Array.isArray(o.webServerLogRecentTail)||o.webServerLogRecentTail.length===0||Date.now()-Number(o.webServerLogRecentAnchorAt||0)>2500)return!1;let r=String(e.raw??e.text??"").trim();return r?o.webServerLogRecentTail.includes(r):!1}function RS(e,t=o.webServerLogEntries){return!e||!Array.isArray(t)||t.length===0?!1:t.some(r=>Jm(e,r))}function HS(){fr()&&o.webServerLogEntries.length===0&&et({webServerLogEntries:qS()}),et({webServerLogCopyMessage:"",webServerLogCopyError:""}),o.settingsInfoOpen="",o.systemModal="webserver-logs",h(),z(["webServerLogHistoryEnabled","debugLevel"],"all",{forceFast:!0}).then(()=>{if(o.systemModal!=="webserver-logs")return;let e=no();h(),ao(e)}),ES(),(!o.webServerLogHistoryLoaded||o.webServerLogEntries.length===0)&&Ho()}function gr(){et({webServerLogEntries:[],webServerLogError:"",webServerLogHistoryError:"",webServerLogHistoryLoading:!1,webServerLogHistoryLoaded:!1,webServerLogHistoryNeedsReconcile:!1,webServerLogCopyMessage:"",webServerLogCopyError:"",webServerLogHistoryRequestToken:o.webServerLogHistoryRequestToken+1,webServerLogRecentTail:[],webServerLogRecentAnchorAt:0}),pc.invalidate(),o.systemModal==="webserver-logs"&&h()}async function DS(){if(o.busyAction)return!1;if(o.nativeOpen||fr())return gr(),!0;if(typeof window.fetch!="function")return o.webServerLogHistoryError="De RAM-logbuffer kan niet vanuit deze browser worden geleegd.",h(),!1;let e=String(o.webServerLogCsrfToken||"");if(!e)return o.webServerLogHistoryError="De beveiligingstoken voor de RAM-logbuffer ontbreekt. Open het logboek opnieuw.",h(),!1;o.busyAction="clear-webserver-log-history",o.webServerLogHistoryError="",St(),h();let t=!1;try{let n=e,a=!1;for(;;){let i=new URLSearchParams;i.set("csrf_token",n);let l=await window.fetch(fS(),{method:"POST",body:i});if(!(l.status===403&&!a&&(a=!0,et({webServerLogCsrfToken:"",webServerLogHistoryLoaded:!1,webServerLogHistoryRequestToken:o.webServerLogHistoryRequestToken+1}),await Ho(),n=String(o.webServerLogCsrfToken||""),n))){if(!l.ok)throw new Error(`HTTP ${l.status}`);break}}gr(),t=!0}catch(n){et({webServerLogHistoryLoaded:!1,webServerLogHistoryNeedsReconcile:!0}),o.webServerLogHistoryError=`De RAM-logbuffer kon niet worden geleegd (${n instanceof Error?n.message:"onbekende fout"}).`}finally{o.busyAction="",o.systemModal==="webserver-logs"&&h()}let r=o.webServerLogHistoryError;return o.systemModal==="webserver-logs"&&(await Ho(),r&&(o.webServerLogHistoryError=r,h())),t}function NS(){let e=no();St(),et({webServerLogEnabled:null,webServerLogConnected:!1,webServerLogCsrfToken:""}),gr(),o.systemModal==="webserver-logs"&&Ho({scrollState:e})}function bc(){if(fr()){St();return}if(!(o.mounted&&!o.nativeOpen&&o.systemModal==="webserver-logs"&&o.busyAction!=="clear-webserver-log-history")){St();return}if(o.webServerLogEnabled===!1){St();return}o.webServerLogSource||OS()}function OS(){if(fr()){o.webServerLogEnabled=!0,o.webServerLogConnected=!1,o.webServerLogError="",h();return}if(typeof window.EventSource!="function"){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="Deze browser ondersteunt geen live logstream.",h();return}try{let e=new window.EventSource(mS());o.webServerLogSource=e,e.addEventListener("open",PS),e.addEventListener("ping",LS),e.addEventListener("log",FS),e.onerror=IS}catch(e){o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError=e instanceof Error?e.message:"De live logstream kon niet worden geopend.",St(),h()}}function St(){let e=o.webServerLogSource;if(e)try{e.close()}catch{}o.webServerLogSource=null,o.webServerLogConnected=!1}function PS(){if(!o.webServerLogSource||o.nativeOpen)return;let e=o.systemModal==="webserver-logs"?no():null;o.webServerLogEnabled=!0,o.webServerLogConnected=!0,o.webServerLogError="",h(),ao(e)}mm({clearOutput:gr,closeStream:St,resetRecoveryState:NS});function LS(){if(!o.webServerLogSource||o.nativeOpen)return;let e=o.systemModal==="webserver-logs"?no():null;o.webServerLogEnabled=!0,o.webServerLogConnected||(o.webServerLogConnected=!0,o.webServerLogError="",h(),ao(e))}function IS(){if(!o.webServerLogSource)return;let e=o.systemModal==="webserver-logs"?no():null;o.webServerLogEnabled=!1,o.webServerLogConnected=!1,o.webServerLogError="De live logstream kon niet worden geopend.",St(),h(),ao(e)}function FS(e){if(!o.webServerLogSource||!e||typeof e.data!="string")return;let t=no(),r=jS(e.data);if(!r)return;let n=r.split(/\r?\n/).filter(d=>d.trim()!=="");if(n.length===0)return;let i=n.map(d=>dc(d)).filter(d=>!_S(d)&&!RS(d));if(i.length===0)return;cc(i);let l=KS(),c=vc();VS(l),zS(i,l),o.webServerLogEnabled=!0,c&&t&&ao(t,!1)}function jS(e){let t=String(e??"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd();if(!t)return"";let r=t.trim();if(r.startsWith("{")&&r.endsWith("}")||r.startsWith("[")&&r.endsWith("]"))try{let n=JSON.parse(r),a=typeof n=="string"?n:n?.message??n?.msg??n?.text??n?.data??n?.payload??"";if(typeof a=="string"&&a.trim())return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}catch{}return t}function WS(e){return String(e??"").replace(/\x1b\[[0-9;]*m/g,"")}function BS(e){let t=String(e??""),r=Array.from(t.matchAll(/\x1b\[([0-9;]*)m/g));for(let i=r.length-1;i>=0;i-=1){let l=r[i][1].split(";").map(c=>Number(c)).filter(c=>Number.isFinite(c));for(let c=l.length-1;c>=0;c-=1){let d=l[c];if(d===31||d===91)return"error";if(d===33||d===93)return"warning";if(d===32||d===92)return"info";if(d===36||d===96||d===34||d===35)return"debug";if(d===37||d===90||d===38||d===97)return"verbose"}}let n=t.match(/\[(E|W|I|D|V|VV)\]/i);if(!n)return"plain";let a=n[1].toUpperCase();return a==="E"?"error":a==="W"?"warning":a==="I"?"info":a==="D"?"debug":"verbose"}function VS(e){for(;o.webServerLogEntries.length>Um;)o.webServerLogEntries.shift(),e&&e.firstElementChild&&e.removeChild(e.firstElementChild)}function KS(){return o.root?o.root.querySelector("[data-oq-webserver-log-output]"):null}function vc(){return o.root?o.root.querySelector("[data-oq-webserver-log-scroller]"):null}function zS(e,t){if(!(!t||e.length===0)){t.dataset.webServerLogEmpty==="true"&&(t.dataset.webServerLogEmpty="false",t.innerHTML="");for(let r of e)t.insertAdjacentHTML("beforeend",ig(r))}}function ig(e){let t=Qm(e.receivedAt),r=bS(e.receivedAt);return`
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${s(e.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${s(new Date(Number(e.receivedAt)||Date.now()).toISOString())}" title="${s(r)}">${s(t)}</time>
      <span class="oq-webserver-log-entry-text">${s(e.text||e.raw||" ")}</span>
    </div>
  `}function US(e=o.webServerLogEntries){return e.length?e.map(t=>ig(t)).join(""):`
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `}function GS(){let e=[];return o.webServerLogHistoryLoading&&e.push('<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>'),o.webServerLogCopyMessage&&e.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopi\xEBren</strong>
        <span>${s(o.webServerLogCopyMessage)}</span>
      </div>
    `),o.webServerLogCopyError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogCopyError)}</p>`),o.webServerLogHistoryError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogHistoryError)}</p>`),o.webServerLogError&&e.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${s(o.webServerLogError)}</p>`),e.length?e.join(""):""}function QS(){let e=Mi(),t=o.loadingEntities||!!o.busyAction,r=vS(),n=wS(),a=YS();return`
    <div class="oq-webserver-log-history-shell">
      ${cg({dataValue:"webserverLogHistory",label:"RAM log history",value:r,infoId:"webserverLogHistory",infoCopy:n,action:`<button
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
  `}function YS(){let e=uc();if(!e)return"";let t=Ym(e),r=yS(e),n=o.loadingEntities||!!o.busyAction;return`
    ${cg({dataValue:"debugLevel",label:"Logger level",value:r||"Onbekend",infoId:"webserverLoggerLevel",infoCopy:"DEBUG is tijdelijk en wordt na een herstart teruggezet naar INFO. Bij veel Modbusverkeer kan DEBUG zoveel logging produceren dat de web-app en Home Assistant traag of onbereikbaar worden.",note:r==="DEBUG"?"DEBUG kan de web-app en Home Assistant vertragen.":"",action:`<label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${n?"disabled":""}>
          ${t.map(i=>`<option value="${s(i)}" ${i===r?"selected":""}>${s(i)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>`})}
  `}function JS(){return o.webServerLogEntries.map(e=>{let t=String(e.raw??e.text??"").trimEnd();return t.trim()?`${Qm(e.receivedAt)} ${t}`:""}).filter(e=>e.trim()!=="").join(`
`)}async function ZS(){let e=JS();if(o.webServerLogCopyMessage="",o.webServerLogCopyError="",!e){o.webServerLogCopyError="Er zijn nog geen logregels om te kopi\xEBren.",h();return}try{if(!await Jr(e))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");o.webServerLogCopyMessage=`${o.webServerLogEntries.length} logregel${o.webServerLogEntries.length===1?"":"s"} gekopieerd.`}catch(t){o.webServerLogCopyError=t instanceof Error?t.message:"Kopi\xEBren naar het klembord is niet gelukt."}o.systemModal==="webserver-logs"&&h()}var XS={"open-webserver-log-modal":()=>HS(),"clear-webserver-log-output":()=>DS(),"copy-webserver-log-output":()=>ZS()};function sg(e){return le(XS,e)}function lg(){let e=fr(),t=o.busyAction==="clear-webserver-log-history",r=!!o.busyAction||o.webServerLogHistoryLoading||!e&&!o.nativeOpen&&!o.webServerLogCsrfToken;return ee({id:"system",titleId:"oq-webserver-log-modal-title",kicker:"Diagnostiek",title:"OpenQuatt log",copy:e?"Hier zie je voorbeeldmeldingen uit de lokale preview.":"Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde.",className:"oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal",closeAction:"close-system-modal",closeLabel:"Sluit logboek",body:`
        ${QS()}
        ${GS()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${o.webServerLogEntries.length===0?"true":"false"}">
            ${US()}
          </div>
        </div>`,actions:`
      <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${o.webServerLogEntries.length===0?"disabled":""}>Kopieer log</button>
      <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output" ${r?"disabled":""}>${t?"Legen...":"Legen"}</button>
      <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
    `})}function cg({dataValue:e,label:t,value:r,infoId:n,infoCopy:a,action:i,note:l=""}){return`
    <div
      class="oq-settings-system-row oq-settings-system-row--with-action oq-webserver-log-control-card${l?" oq-webserver-log-control-card--warning":""}"
      data-oq-diagnostics-row="${s(e)}"
    >
      <div class="oq-settings-system-row-copy">
        <p class="oq-settings-system-row-label">${s(t)}</p>
        <div class="oq-webserver-log-control-card-value">
          <strong class="oq-settings-system-row-value">${s(r)}</strong>
          ${Pt(n,t,a)}
        </div>
        ${l?`<p class="oq-settings-system-row-note">${s(l)}</p>`:""}
      </div>
      ${i}
    </div>
  `}function ek(){let e=o.entities.firmwareUpdateTarget||{};return Array.isArray(e.option)?e.option:Array.isArray(e.options)?e.options:[]}function wc(e){return ek().includes(e)}function _i(){let e=Zr(),t=ne(),r=lt(),n=Wm();return e!=="heatpump_controller_q"||t!=="single"&&t!=="duo"||r!=="wifi"&&r!=="eth"||!n?null:{canSwitch:y("firmwareUpdateTarget")&&wc("alternate connection")&&y("installFirmwareUpdateTarget"),currentConnection:r,targetConnection:n,currentLabel:st(r),targetLabel:st(n),currentBuildLabel:$o(t,r),targetBuildLabel:$o(t,n)}}function Ri(){let e=Zr(),t=ne(),r=Bm(),n=lt(),a=e==="heatpump_controller_q"?["wifi","eth"]:["wifi"];return!["heatpump_controller_q","heatpump_listener","waveshare"].includes(e)||t!=="single"&&t!=="duo"||!r||!a.includes(n)?null:{canSwitch:y("firmwareUpdateTarget")&&wc("alternate topology")&&y("installFirmwareUpdateTarget"),currentTopology:t,targetTopology:r,currentConnection:n,targetConnection:n,currentLabel:ur(t),targetLabel:ur(r),currentBuildLabel:$o(t,n),targetBuildLabel:$o(r,n)}}function Hi(e,t){let r=Zr(),n=ne(),a=lt(),i=cr(e),l=oa(t),c=i&&i!==n,d=l&&l!==a,u=c&&d?"alternate topology and connection":c?"alternate topology":d?"alternate connection":"current build",m=r==="heatpump_controller_q"&&["single","duo"].includes(n)&&["single","duo"].includes(i)&&["wifi","eth"].includes(a)&&["wifi","eth"].includes(l),v=y("firmwareUpdateTarget"),w=wc(u),f=y("installFirmwareUpdateTarget");return{available:m,canSwitch:m&&u!=="current build"&&v&&w&&f,targetEntityAvailable:v,targetOptionAvailable:w,installActionAvailable:f,currentTopology:n,currentConnection:a,targetTopology:i,targetConnection:l,targetOption:u,currentBuildLabel:$o(n,a),targetBuildLabel:$o(i,l)}}function Do(e=o.updateTestFirmwarePr){let t=String(e||"").trim().replace(/^#?pr[-\s]*/i,"").replace(/^#/,"");return/^\d{1,6}$/.test(t)?t:""}function nn(){let e=Zr(),t=ne(),r=lt(),a={waveshare:{slug:"waveshare",label:"Waveshare",connections:["wifi"]},heatpump_listener:{slug:"heatpump-listener",label:"Heatpump Listener",connections:["wifi"]},heatpump_controller_q:{slug:"heatpump-controller-q",label:"Heatpump Controller Q",connections:["wifi","eth"]}}[e];if(!a||t!=="single"&&t!=="duo"||!a.connections.includes(r))return{available:!1,label:"Onbekend target",error:"Deze firmware meldt geen herkenbaar hardware-, opstelling- of verbindingsprofiel."};let i=`openquatt-${a.slug}-${t}-${r}`,l=t==="duo"?"Duo":"Single";return{available:!0,artifactName:i,otaFileName:`${i}.firmware.ota.bin`,label:`${a.label} ${l} ${st(r)}`}}function ra(e=Do(),t=nn()){let r=Do(e);if(!r||!t.available)return null;let a=`${`https://github.com/OpenQuatt/OpenQuatt/releases/download/pr-${r}`}/${t.otaFileName}`;return{otaUrl:a,md5Url:`${a}.md5`,label:`PR ${r} \xB7 ${t.label}`}}function Oo(){if(dt())return"Controleren";let e=kt();if(e)return e.phaseLabel;if(Sc())return"Bijgewerkt";if(hr())return"Bezig";if(vr())return"Beschikbaar";let t=fg();if(t!==null&&t<=0)return"Actueel";let r=Nt();return typeof r.updateLabel=="string"&&r.updateLabel.trim()?r.updateLabel.trim():r.updateAvailable===!0?"Beschikbaar":r.updateAvailable===!1||gg()?"Actueel":ye()?"Nog niet gecontroleerd":"\u2014"}function ye(){return o.entities.firmwareUpdate||null}function Di(){let e=ye();return e?String(e.state??e.value??"").trim().toLowerCase():""}function tk(){let e=o.entities.firmwareUpdateStatus;return e?String(e.state??e.value??"").trim():""}function na(){return tk().toLowerCase()}function pg(){let e=o.entities.firmwareUpdateProgress;if(!e)return Number.NaN;let t=Number(e.value??e.state);return Number.isNaN(t)?Number.NaN:Math.max(0,Math.min(100,t))}function yc(){let e=String(o.updateInstallTargetVersion||"").trim(),t=ce();return!e||!t?!1:aa(t,e)>=0}function ok(e=ye()||{}){let t=io(e),r=ce(e);return!t||!r?!1:aa(r,t)>=0}function mg(){return(yc()||ok())&&!dt()&&!rn()&&!vr()}function rk(){return o.updateInstallMode===""||o.updateInstallMode==="test-firmware"?!!(o.ota.id&&!o.ota.wait):!rn()&&!hr()&&yc()}function Sc(){return(o.updateInstallCompleted||mg())&&!dt()&&!kt()&&!vr()}function br(){Re({updateInstallBusy:!1,updateInstallTargetVersion:"",updateInstallPhaseHint:"",updateInstallProgressHint:Number.NaN,updateInstallStatusPollObserved:!1,updateInstallMode:"",updateInstallTargetConnection:"",updateInstallTargetTopology:""}),dk()}function It(){o.updateInstallPhaseHint="starting",o.updateInstallProgressHint=0,o.updateInstallStatusPollObserved=!1}function Me(){Re({updateManualUploadFile:null,updateManualUploadFileName:"",updateManualUploadError:""})}function ot(e={}){Re({...e.clearPr?{updateTestFirmwarePr:""}:{},updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null})}function nk(){let e=na(),t=pg(),r=e!=="rebooting"||!o.updateInstallBusy||o.updateInstallStatusPollObserved;if((e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting")&&r){o.updateInstallPhaseHint=e,Number.isNaN(t)||(o.updateInstallProgressHint=e==="rebooting"?Math.max(t,100):t);return}if(o.updateInstallBusy){if(o.updateInstallMode==="normal"&&yc()){o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100;return}o.controlNotice.includes("opnieuw is opgestart")&&(o.updateInstallPhaseHint="rebooting",o.updateInstallProgressHint=100)}}function rn(){let e=na();return e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting"}function ak(){let e=na();return e==="error"?"De firmware-installatie op het device is mislukt. Controleer de netwerkverbinding en probeer opnieuw.":e==="aborted"?"De firmware-installatie is door het device afgebroken. Probeer de installatie opnieuw.":""}function kt(){nk();let e=na(),t=e==="starting"||e==="retrying"||e==="uploading"||e==="rebooting"&&(!o.updateInstallBusy||o.updateInstallStatusPollObserved),r=t?e:o.updateInstallPhaseHint,n=pg(),a=Number.isNaN(o.updateInstallProgressHint)?0:Math.round(o.updateInstallProgressHint),i=t&&!Number.isNaN(n)?Math.round(n):a;return!rn()&&!o.updateInstallBusy?null:r==="rebooting"?{phaseLabel:"Herstarten",percent:Math.max(i,100),copy:o.updateInstallMode==="test-firmware"?"Testfirmware is geplaatst. Het device start opnieuw op en komt daarna vanzelf terug.":o.updateInstallMode==="connection-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna via de gekozen verbinding terug.":o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?"Firmware is geplaatst. Het device start opnieuw op en komt daarna met de gekozen opstelling terug.":"Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug."}:r==="retrying"?{phaseLabel:"Opnieuw proberen",percent:0,copy:"De eerste verbinding voor de firmwaredownload mislukte. OpenQuatt probeert het automatisch nog \xE9\xE9n keer."}:r==="uploading"?{phaseLabel:"Uploaden",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware wordt nu door ${tt()} gedownload en ge\xEFnstalleerd.`:o.updateInstallMode==="connection-switch"?`De ${st(o.updateInstallTargetConnection)}-build wordt nu naar ${tt()} verzonden.`:o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?`De ${$o(o.updateInstallTargetTopology,o.updateInstallTargetConnection)}-build wordt nu naar ${tt()} verzonden.`:`Firmware wordt nu naar ${tt()} verzonden.`}:{phaseLabel:"Installeren",percent:i,copy:o.updateInstallMode==="test-firmware"?`Testfirmware-installatie is gestart voor ${tt()}.`:o.updateInstallMode==="connection-switch"?`Verbindingswissel naar ${st(o.updateInstallTargetConnection)} is gestart.`:o.updateInstallMode==="topology-switch"||o.updateInstallMode==="build-switch"?`Opstellingswissel naar ${ur(o.updateInstallTargetTopology)} is gestart.`:`OTA-update is gestart voor ${tt()}.`}}function io(e=ye()||{}){let t=String(e.latest_version||"").trim();if(t)return t;let r=String(e.value||"").trim(),n=String(e.current_version||"").trim();return r&&r!==n&&/^v/i.test(r)?r:""}function ce(e=ye()||{}){let t=String(o.entities.projectVersionText?.state||o.entities.projectVersionText?.value||"").trim();return t||String(e.current_version||"").trim()}function ik(e=ye()||{}){let t=ce(e),r=String(e.current_version||"").trim();return!t||!r||t===r?!1:aa(t,r)>0}function kc(e=ye()||{},t=No()){let r=String(t||"").trim().toLowerCase(),n=String(e.release_url||"").trim().toLowerCase(),a=io(e).toLowerCase();if(!r||r==="\u2014")return!0;if(r==="dev"){if(n){if(n.includes("/dev-latest"))return!0;if(a)return a.includes("-dev")}return a?a.includes("-dev"):!1}if(r==="main"){if(n){if(n.includes("/dev-latest"))return!1;if(a)return!a.includes("-dev")}return a?!a.includes("-dev"):!1}return!0}function ug(e){let r=String(e||"").trim().match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);return r?{major:Number(r[1]),minor:Number(r[2]),patch:Number(r[3]),prereleaseTag:r[4]||"",prereleaseNumber:r[5]?Number(r[5]):null}:null}function aa(e,t){let r=ug(e),n=ug(t);if(!r||!n)return 0;if(r.major!==n.major)return r.major>n.major?1:-1;if(r.minor!==n.minor)return r.minor>n.minor?1:-1;if(r.patch!==n.patch)return r.patch>n.patch?1:-1;let a=!r.prereleaseTag,i=!n.prereleaseTag;return a!==i?a?1:-1:r.prereleaseTag!==n.prereleaseTag?r.prereleaseTag>n.prereleaseTag?1:-1:r.prereleaseNumber!==n.prereleaseNumber?(r.prereleaseNumber||0)>(n.prereleaseNumber||0)?1:-1:0}function hr(){if(mg())return!1;let e=Di();return o.updateInstallBusy||e==="installing"||e==="in_progress"||e==="updating"||e.includes("install")}function dt(){let e=Di();return o.updateCheckBusy||e==="checking"||e==="check"||e==="checking_for_update"||e.includes("checking")}function vr(){let e=Di();if(!kc())return!1;let t=fg();return t!==null?t>0:e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")?!1:e==="available"||e==="pending"||e.includes("available")?!0:Nt().updateAvailable===!0}function gg(){let e=Di();return e==="installed"||e==="current"||e==="up_to_date"||e==="none"||e.includes("up to date")||e.includes("no update")||ik()}function qc(){let e=ye()||{},t=ce(e)||"\u2014",r=kc(e)?io(e):"",n=r?aa(r,t):null;return!dt()&&n!==null&&n<=0&&(r=""),{current:t,latest:r||"\u2014"}}function fg(){let{current:e,latest:t}=qc();return e==="\u2014"||t==="\u2014"?null:aa(t,e)}function hg(e=No()){let t=String(e||"").trim().toLowerCase();return Fs[t]||Fs.main}function sk(){let e=String((ye()||{}).release_url||"").trim(),t=hg();return!e||t.includes("/dev-latest")&&!e.includes("/dev-latest")||!t.includes("/dev-latest")&&e.includes("/dev-latest")?t:e}function lk(){return tt()}function No(){return String(T("firmwareUpdateChannel")||o.entities.releaseChannelText?.state||o.entities.releaseChannelText?.value||"\u2014").trim()||"\u2014"}function ck(){return qc().latest!=="\u2014"}function dg(e){return String(e||"").toLowerCase().replace(/wi[\s-]?fi/g,"wifi").replace(/[^a-z0-9]+/g,"")}function uk(e,t=ye()||{}){let r=dg(e);return r?dg(`${t.title||""} ${t.summary||""}`).includes(r):!0}function bg(e){return new Promise(t=>window.setTimeout(t,e))}function an(e=So){let r=Date.now()+e;o.firmwareOtaQuietUntil=Math.max(Number(o.firmwareOtaQuietUntil||0),r),o.pendingEntitySyncOptions=null,vp(),typeof St=="function"&&St(),o.firmwareOtaQuietTimer&&window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=window.setTimeout(()=>{o.firmwareOtaQuietTimer=null,o.firmwareOtaQuietUntil=0,!o.updateInstallBusy&&!o.nativeOpen&&gl()},e)}function dk(){o.firmwareOtaQuietTimer&&(window.clearTimeout(o.firmwareOtaQuietTimer),o.firmwareOtaQuietTimer=null),o.firmwareOtaQuietUntil=0,o.nativeOpen||gl()}function vg(){return o.deviceReconnectMode?ee({modalId:"reconnect",titleId:"oq-reconnect-modal-title",kicker:"Systeem",title:em(),modalClass:"oq-helper-modal--reconnect",role:"status",ariaLive:"polite",bodyMarkup:`
        <p class="oq-helper-modal-copy">${s(tm())}</p>
        <div class="oq-helper-reconnect-status">
          <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
          <div>
            <strong>${s(Zp())}</strong>
            <span>${s(Xp())}</span>
          </div>
        </div>
      `}):""}function ia(e=No()){let t=ye()||{},r=ce(t);o.entities.firmwareUpdate={...t,state:"CHECKING",value:"",latest_version:"",latestVersion:"",summary:"",release_url:hg(e),current_version:r}}async function sa(e={}){let t=String(e.expectedBuildLabel||"").trim();for(let r=0;r<6;r+=1){await bg(r===0?900:1200),await z(Mt,"all",{forceMissing:!0});let n=kc(),a=!t||uk(t),i=ck(),l=dt(),c=Oo();if(n&&a&&(i||!l&&c!=="Nog niet gecontroleerd"))return!0}return!1}async function wr(e={}){let t=!1,r=Number.isFinite(Number(e.initialDelayMs))?Math.max(0,Number(e.initialDelayMs)):700,n=Number.isFinite(Number(e.pollDelayMs))?Math.max(250,Number(e.pollDelayMs)):1e3;for(let a=0;a<45;a+=1){await bg(a===0?r:n);try{let i=o.entities.firmwareUpdateStatus,l=o.ota.wait?[...Mt,"uptime"]:Mt;await z(l,"all",{forceMissing:!0});let c=na();o.entities.firmwareUpdateStatus!==i&&(o.updateInstallStatusPollObserved=!0);let d=ak();if(d){let u=new Error(d);throw u.firmwareInstallTerminal=!0,u}if(c==="rebooting"&&o.updateInstallStatusPollObserved&&Co("ota"),h(),o.updateInstallMode==="connection-switch"){let u=oa(o.updateInstallTargetConnection);if(u&&lt()===u&&!rn()&&!hr())return Gr(),!0}else if(o.updateInstallMode==="topology-switch"){let u=cr(o.updateInstallTargetTopology);if(u&&ne()===u&&!rn()&&!hr())return Gr(),!0}else if(o.updateInstallMode==="build-switch"){let u=cr(o.updateInstallTargetTopology),m=oa(o.updateInstallTargetConnection);if(u&&m&&ne()===u&&lt()===m&&!rn()&&!hr())return Gr(),!0}else if(rk())return Gr(),!0}catch(i){if(i?.firmwareInstallTerminal)throw ar(),i;t||(o.controlNotice="Wachten tot het device opnieuw is opgestart...",h(),t=!0)}}return Ur(),!1}function pk(){let e=No(),t=kt();if(t)return t.copy;if(Sc()){let r=o.updateInstallCompletedVersion||ce()||No();return`${tt()} draait nu op ${r}.`}return hr()?`OTA-update wordt voorbereid voor ${tt()}. Het device kan kort herstarten.`:dt()?`We controleren of er op kanaal ${e} een nieuwe firmware beschikbaar is.`:vr()?"Er staat een nieuwere firmware klaar.":gg()?`Je draait al de nieuwste firmware op kanaal ${e}.`:"Kies een kanaal en controleer of er een nieuwere firmware klaarstaat."}function wg(){return!!(o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen)}function Ai(e,t,r,n,a=!1){return`
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
    `}function mk(e,t,r,n){if(!wg())return"";let i=!!(kt()||o.updateInstallBusy||dt());return`
      <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle oq-firmware-advanced-panel">
        <div class="oq-firmware-advanced-head">
          <div>
            <strong>Geavanceerd</strong>
            <span>Gebruik deze opties alleen als je bewust van de normale OTA-flow afwijkt.</span>
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-firmware-advanced-hide" type="button" data-oq-action="toggle-firmware-advanced" ${i?"disabled":""}>Verbergen</button>
        </div>
        <div class="oq-firmware-advanced-options">
          ${e?Ai("toggle-firmware-connection-switch","Verbinding wisselen",`Naar ${t.targetLabel}`,o.firmwareConnectionSwitchOpen,i):""}
          ${r?Ai("toggle-firmware-topology-switch","Opstelling wisselen",`Naar ${n.targetLabel}`,o.firmwareTopologySwitchOpen,i):""}
          ${Ai("toggle-firmware-upload","Handmatige upload","Lokaal OTA-bestand",o.updateManualUploadOpen,i)}
          ${Ai("toggle-firmware-test","Testfirmware","PR-release installeren",o.updateTestFirmwareOpen,i)}
        </div>
        ${gk()}
        ${fk()}
        ${bk()}
        ${hk()}
      </div>
    `}function gk(){let e=_i();if(!e||!o.firmwareConnectionSwitchOpen)return"";let r=!!(kt()||o.updateInstallBusy||dt()),n=!!o.firmwareConnectionSwitchConfirmed,a=e.targetConnection==="eth",i=!e.canSwitch,l=a?"Sluit eerst de netwerkkabel aan. Na de herstart verdwijnt Wi-Fi uit deze firmware.":"Na de herstart verdwijnt Ethernet uit deze firmware. Als er geen Wi-Fi-gegevens bekend zijn, start het OpenQuatt fallback access point.",c=i?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Verbindingswissel wordt geladen. Open deze modal opnieuw of wacht een moment als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Verbinding wisselen</strong>
          <span>Installeer dezelfde ${s(No())}-build voor de andere netwerkverbinding.</span>
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
    `}function fk(){let e=Ri();if(!e||!o.firmwareTopologySwitchOpen)return"";let r=!!(kt()||o.updateInstallBusy||dt()),n=!!o.firmwareTopologySwitchConfirmed,a=!e.canSwitch,i=e.targetTopology==="duo",l=i?"Controleer eerst dat de tweede warmtepomp is aangesloten en geconfigureerd. Na de herstart bevat deze firmware HP2-regeling en HP2-diagnostiek.":"Na de herstart verdwijnt HP2-regeling en HP2-diagnostiek uit deze firmware. Gebruik dit alleen als deze controller als Single-installatie verder moet draaien.",c=a?'<p class="oq-helper-modal-note oq-helper-modal-note--muted">Opstellingswissel vereist firmware met de target-optie alternate topology. Werk eerst normaal bij als de knop disabled blijft.</p>':"";return`
      <div class="oq-firmware-advanced-detail">
        <div class="oq-firmware-advanced-detail-head">
          <strong>Opstelling wisselen</strong>
          <span>Installeer dezelfde ${s(No())}-build voor de andere Single/Duo-opstelling.</span>
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
    `}function hk(){if(!o.updateTestFirmwareOpen)return"";let t=!!(kt()||o.updateInstallBusy||dt()),r=Do(),n=nn(),a=ra(r,n),i=!!(n.available&&y("firmwareTestOtaUrl")&&y("firmwareTestOtaMd5Url")&&y("installFirmwareTestOta")),l=!!(r&&i),c=o.updateTestFirmwareBuild||null,d=n.available?n.label:n.error,u=a?n.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen.";return`
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
    `}function bk(){if(!o.updateManualUploadOpen)return"";let t=!!(kt()||o.updateInstallBusy||dt()),r=String(o.updateManualUploadFileName||o.updateManualUploadFile?.name||"").trim();return`
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
    `}function yg(){if(!o.updateModalOpen)return"";let e=ye(),t=o.entities.firmwareUpdateChannel||null,{current:r,latest:n}=qc(),a=dt(),i=hr(),l=vr(),c=pk(),d=kt(),u=Sc(),m=sk(),v=u?"Firmware-update afgerond":d||i?"Firmware-update bezig":a?"Controleren op firmware-update":lk(),w=t?Array.isArray(t.option)?t.option:Array.isArray(t.options)?t.options:[]:[],f=_i(),g=Ri(),p=!!(f&&!u),b=!!(g&&!u);return ee({id:"firmware-update",titleId:"oq-update-modal-title",kicker:"OTA-update",title:v,copy:c,backdropClass:a||i||d?"is-busy":"",className:"oq-helper-modal--firmware oq-helper-modal--scrollable",closeAction:"close-update-modal",closeLabel:"Sluit update-popup",body:`
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
              <strong class="oq-helper-modal-value">${s(Oo())}</strong>
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
              <strong class="oq-helper-modal-value">${s(No())}</strong>
            </div>
          </div>
          ${w.length?`
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${w.map(S=>`
                  <option value="${s(S)}" ${String(T("firmwareUpdateChannel")||"")===S?"selected":""}>${s(S)}</option>
                `).join("")}
              </select>
            </label>
          `:""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen. Bestaande OpenQuatt-instellingen blijven behouden.</p>
          <div class="oq-helper-modal-actions oq-firmware-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${a||i||d?"disabled":""}>
              ${a?"Controleren...":"Controleer opnieuw"}
            </button>
            ${u?'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>':`<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!l||i||a||d||!e?"disabled":""}>
              ${i?"Bijwerken...":"Nu bijwerken"}
            </button>`}
            ${m?`<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${s(m)}" target="_blank" rel="noreferrer">Release notes</a>`:""}
            ${wg()?"":`
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="toggle-firmware-advanced" ${a||i||d?"disabled":""}>
                Geavanceerd
              </button>
            `}
          </div>
          ${mk(p,f,b,g)}`})}function Ft(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.sample_count||0)):Array.isArray(o.debugRecordingSamples)?o.debugRecordingSamples.length:0}function jt(e=o.debugRecordingDeviceStatus){return e?.rolling===!0||String(e?.mode||"").toLowerCase()==="rolling"}function Oi(e=o.debugRecordingDeviceStatus){return jt(e)&&e?.frozen===!0&&!e?.active}function yr(e){let t=Math.max(0,Math.round(Number(e||0)/1e3)),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return r>0?`${r}u ${String(n).padStart(2,"0")}m`:n>0?`${n}m ${String(a).padStart(2,"0")}s`:`${a}s`}function kg(){return o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.retained_duration_s||0)*1e3):qg()}function qg(){if(o.debugRecordingDeviceStatus)return Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0)*1e3);if(!o.debugRecordingStartedAt)return 0;let e=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return Math.max(0,e-Number(o.debugRecordingStartedAt||e))}function la(){return o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Niet beschikbaar":Oi()?"Rolling gestopt":o.debugRecordingActive&&jt()?"Rolling actief":o.debugRecordingActive?"Bezig met opnemen":Ft()>0?"Voltooid":"Niet gestart"}function Pi(){return Oi()?"Rolling debug is gestopt. De recente samples blijven bewaard tot je downloadt, kopieert, hervat of een nieuwe opname start.":o.debugRecordingActive&&jt()?"Rolling debug bewaart continu de recente samples. Download of kopieer maakt een momentopname; rolling blijft daarna doorlopen.":o.debugRecordingActive?"De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.":Ft()>0?"De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.":o.debugRecordingDeviceStatus&&o.debugRecordingDeviceStatus.available===!1?"Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.":"Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden."}function Eg(){return Oi()?"Gestopt":o.debugRecordingActive&&jt()?`Rolling \xB7 ${yr(kg())}`:o.debugRecordingActive?`Loopt \xB7 ${yr(Tg())}`:Ft()>0?"Klaar":la()}function vk(){let e=Number(o.debugRecordingSelectedMinutes||15);return ti.map(r=>Number(r.minutes)).includes(e)?e:Number(ti[0]?.minutes||15)}function wk(e){o.debugRecordingActive||(gi({debugRecordingSelectedMinutes:Math.max(1,Number(e)||15),debugRecordingNotice:"",debugRecordingError:""}),h())}function Tg(){return jt()?0:o.debugRecordingDeviceStatus?Math.max(0,Number(o.debugRecordingDeviceStatus.remaining_s||0)*1e3):o.debugRecordingActive?Math.max(0,Number(o.debugRecordingEndsAt||0)-Date.now()):0}function yk(){if(o.debugRecordingDeviceStatus){if(jt()){let a=Math.max(1,Number(o.debugRecordingDeviceStatus.sample_capacity||0));return Math.max(0,Math.min(100,Ft()/a*100))}let r=Math.max(1,Number(o.debugRecordingDeviceStatus.duration_s||0)),n=Math.max(0,Number(o.debugRecordingDeviceStatus.elapsed_s||0));return!o.debugRecordingActive&&Ft()>0?100:Math.max(0,Math.min(100,n/r*100))}if(!o.debugRecordingActive||!o.debugRecordingStartedAt||!o.debugRecordingEndsAt)return Ft()>0?100:0;let e=Math.max(1,Number(o.debugRecordingEndsAt)-Number(o.debugRecordingStartedAt)),t=Math.max(0,Date.now()-Number(o.debugRecordingStartedAt));return Math.max(0,Math.min(100,t/e*100))}function Cg(e=o.debugRecordingDeviceStatus){return String(e?.recording_id??e?.recording?.recording_id??"").trim()}function xg(e){if(e?.recording?.active)return;let t=Cg(e);if(t){o.debugRecordingAcknowledgedId=t;try{window.localStorage.setItem("oq-debug-recording-acknowledged-id",t)}catch{}}}function Ec(){let e=o.debugRecordingDeviceStatus,t=Math.max(0,Number(e?.sample_count||0));if(!e||e.available===!1||!e.active&&t===0)return"";let r=!!e.active;if(!r&&Cg(e)===o.debugRecordingAcknowledgedId)return"";let n=jt(e),a=yr(Math.max(0,Number(e.retained_duration_s||0))*1e3),i=yr(Math.max(0,Number(e.remaining_s||0))*1e3),l=r?n?`Rolling debug \xB7 ${a}`:`Debug loopt \xB7 ${i}`:n?"Rolling gestopt":"Debug klaar",c=r?n?`Rolling debug loopt, laatste ${a} beschikbaar`:`Debugopname loopt, nog ${i}`:n?"Rolling debug gestopt; recente buffer klaar om te downloaden":"Debugopname klaar om te downloaden";return`
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
  `}function Sk(){if(!o.root)return;if(o.interfacePanelOpen){h();return}let e=o.root.querySelector(".oq-helper-hub--collapsed .oq-helper-hub-head-actions");if(!e)return;let t=e.querySelector(".oq-debug-recording-header-status"),r=Ec();if(!r){t?.remove();return}if(t){t.outerHTML=r;return}e.insertAdjacentHTML("afterbegin",r)}function kk(){if(!o.root)return;let e=o.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');if(!e)return;let t=e.querySelector(".oq-settings-system-row-value"),r=e.querySelector(".oq-settings-system-row-note");t&&(t.textContent=la()),r&&(r.textContent=Pi())}function Tc(e){let t={activity:'<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',status:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',clock:'<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',samples:'<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',changes:'<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',file:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',storage:'<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',play:'<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',stop:'<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',download:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',copy:'<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',check:'<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',alert:'<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>'};return t[e]||t.status}function qk(e){return`<span class="oq-debug-recording-icon" aria-hidden="true">${Tc(e)}</span>`}function so(e){return`<span class="oq-debug-recording-button-icon" aria-hidden="true">${Tc(e)}</span>`}function Ek(){return[...Zo]}function Tk(){let e=[];return Zo.forEach((t,r)=>{let n=o.entities?.[t]||{},a=String(n.uom??n.unit_of_measurement??"").trim();a&&e.push([r,a])}),e}function Ck(e){return Array.isArray(e)?e.map((t,r)=>t===null?null:[r,t]).filter(Boolean):[]}function Li(){o.debugRecordingTimer&&(window.clearTimeout(o.debugRecordingTimer),o.debugRecordingTimer=null)}function Sr(){o.debugRecordingDevicePollTimer&&(window.clearTimeout(o.debugRecordingDevicePollTimer),o.debugRecordingDevicePollTimer=null)}function Po(e){return`${Ne()}/openquatt/debug-recording/${e}`}function sn(e){let t=e&&typeof e=="object"?e:{};o.debugRecordingDeviceStatus=t,o.debugRecordingActive=!!t.active,o.debugRecordingStartedAt=t.active||Number(t.sample_count||0)>0?Date.now()-Math.max(0,Number(t.elapsed_s||0)*1e3):0,o.debugRecordingEndsAt=t.active?Date.now()+Math.max(0,Number(t.remaining_s||0)*1e3):0,o.debugRecordingLastSampleAt=Number(t.sample_count||0)>0?Date.now():0}function Cc(){sn({ok:!1,available:!1,active:!1,mode:"manual",rolling:!1,frozen:!1,storage:"unavailable",interval_s:0,duration_s:0,elapsed_s:0,remaining_s:0,sample_count:0,sample_capacity:0,estimated_size:0,buffer:"unavailable"})}async function xk(){let e=await window.fetch(Po("status"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();return sn(t),t}function ca(e=2e3){Sr(),o.debugRecordingActive&&(o.debugRecordingDevicePollTimer=window.setTimeout(()=>{Ii({silent:!0})},Math.max(0,Number(o.systemModal==="debug-recording"?e:5e3)||0)))}async function Ii(e={}){e.silent||(o.debugRecordingBusy=!0,o.debugRecordingError="",h());try{await xk(),!o.debugRecordingActive&&e.silent&&(o.debugRecordingNotice="Debugopname is afgerond."),ca()}catch(t){Cc(),o.debugRecordingError=`Status kon niet worden opgehaald. ${t.message||String(t)}`}finally{e.silent||(o.debugRecordingBusy=!1),!e.silent||o.systemModal==="debug-recording"?h():(Sk(),kk())}}async function Mg(){let e=rc(Zo,"state"),t=null;for(let r=0;r<e.length;r+=1){let n=await window.fetch(Po(`configure?reset=${r===0?"1":"0"}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store","Content-Type":"application/x-www-form-urlencoded"},body:e[r].body});if(!n.ok)throw new Error(`configuratie HTTP ${n.status}`);t=await n.json()}if(Number(t?.entity_field_count||0)!==Zo.length)throw new Error(`onvolledige debugset (${Number(t?.entity_field_count||0)}/${Zo.length})`);return t}async function Mk(e){let t=Math.max(1,Number(e)||15);Li(),Sr(),gi({debugRecordingBusy:!0,debugRecordingError:"",debugRecordingNotice:"",debugRecordingSamples:[],debugRecordingEvents:[],debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingDeviceBundle:null,debugRecordingLastSampleAt:0,debugRecordingSequence:0}),h();try{await Mg();let r=await window.fetch(Po(`start?duration_s=${encodeURIComponent(t*60)}`),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.json();sn(n),ca()}catch(r){Cc(),o.debugRecordingError=`Debugopname kon niet worden gestart. ${r.message||String(r)}`}finally{o.debugRecordingBusy=!1,h()}}async function $k(){Li(),Sr(),gi({debugRecordingBusy:!0,debugRecordingError:"",debugRecordingNotice:"",debugRecordingSamples:[],debugRecordingEvents:[],debugRecordingInitialValues:null,debugRecordingLastValues:null,debugRecordingDeviceBundle:null,debugRecordingLastSampleAt:0,debugRecordingSequence:0}),h();try{await Mg();let e=await window.fetch(Po("start?rolling=1"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();sn(t),ca()}catch(e){Cc(),o.debugRecordingError=`Rolling debug kon niet worden gestart. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,h()}}async function Ak(){let e=await window.fetch(Po("freeze"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=await e.json();return sn(t),Sr(),t}async function _k(){Li(),o.debugRecordingBusy=!0,o.debugRecordingError="",h();try{await Ak(),o.debugRecordingNotice="Rolling debug is gestopt. De recente buffer blijft bewaard."}catch(e){o.debugRecordingError=`Rolling debug kon niet worden gestopt. ${e.message||String(e)}`}finally{o.debugRecordingBusy=!1,h()}}async function Rk(e={}){Li(),Sr(),o.debugRecordingBusy=!0,o.debugRecordingError="",h();try{let t=await window.fetch(Po("stop"),{method:"POST",cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();sn(r),o.debugRecordingNotice=e.completed?"Debugopname is afgerond.":"Debugopname is gestopt."}catch(t){o.debugRecordingError=`Debugopname kon niet worden gestopt. ${t.message||String(t)}`}finally{o.debugRecordingBusy=!1,h()}}function Sg(e={}){let t=o.debugRecordingActive?Date.now():Number(o.debugRecordingLastSampleAt||Date.now());return{format:"openquatt-debug-v2",schema_version:2,kind:"openquatt_debug_recording",encoding:"column-delta-json-v2",exported_at:new Date().toISOString(),source:e.source||{},recording:{started_at:o.debugRecordingStartedAt?new Date(Number(o.debugRecordingStartedAt)).toISOString():"",ended_at:t?new Date(t).toISOString():"",active:!!o.debugRecordingActive,duration_s:o.debugRecordingStartedAt?Math.round(Math.max(0,t-Number(o.debugRecordingStartedAt))/1e3):0,interval_s:Math.round(xd/1e3),sample_count:Ft(),column_count:Zo.length,storage:"browser"},columns:Ek(),units:Tk(),initial:Ck(o.debugRecordingInitialValues),samples:o.debugRecordingSamples||[],events:o.debugRecordingEvents||[],...e.logs?{logs:e.logs}:{}}}function Ni(e){return JSON.stringify(e)}function Hk(){let e=Number(o.debugRecordingDeviceStatus?.estimated_size||0);if(e>0)return e;try{return new Blob([Ni(Sg())]).size}catch{return Ni(Sg()).length}}function Dk(e){let t=Math.max(0,Number(e)||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${(t/1024).toFixed(1)} kB`:`${Math.round(t)} B`}function Nk(e){let t=e?.exported_at||(e?.exported_at_ms?new Date(Number(e.exported_at_ms)).toISOString():new Date().toISOString()),r=String(t).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e?.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-debug-recording-${r}.oqdebug.json`}async function Ok(){if(Ft()===0){o.debugRecordingError="Er is nog geen debugopname om te downloaden.",h();return}o.debugRecordingBusy=!0,o.debugRecordingError="";let e=o.debugRecordingActive&&jt();h();try{let t=await window.fetch(Po("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();o.debugRecordingDeviceBundle=r,zl(Nk(r),Ni(r),"application/json"),xg(r),o.debugRecordingNotice=e?"Momentopname gedownload. Rolling debug loopt door.":"Supportbestand gedownload."}catch{o.debugRecordingError="Download mislukt. Probeer opnieuw of kopieer de data."}finally{o.debugRecordingBusy=!1,h()}}async function Pk(){if(Ft()===0){o.debugRecordingError="Er is nog geen debugopname om te kopi\xEBren.",h();return}o.debugRecordingBusy=!0,o.debugRecordingError="";let e=o.debugRecordingActive&&jt();h();try{let t=await window.fetch(Po("download"),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);let r=await t.json();if(o.debugRecordingDeviceBundle=r,!await Jr(Ni(r)))throw new Error("Kopi\xEBren naar het klembord is niet gelukt.");xg(r),o.debugRecordingNotice=e?"Momentopname gekopieerd. Rolling debug loopt door.":"Supportbestand gekopieerd."}catch{o.debugRecordingError="Kopi\xEBren mislukt. Probeer opnieuw of download het supportbestand."}finally{o.debugRecordingBusy=!1,h()}}var Lk={"open-debug-recording-modal":()=>(o.systemModal="debug-recording",o.debugRecordingError="",o.debugRecordingNotice="",h(),Ii()),"start-debug-recording":e=>Mk(e.dataset.debugMinutes||15),"start-rolling-debug-recording":()=>$k(),"select-debug-recording-duration":e=>wk(e.dataset.debugMinutes||15),"stop-debug-recording":()=>Rk(),"freeze-debug-recording":()=>_k(),"download-debug-recording":()=>Ok(),"copy-debug-recording":()=>Pk()};function $g(e,t){return le(Lk,e,t)}function Ag(){let e=o.debugRecordingActive,t=jt(),r=Oi(),n=Ft(),a=o.debugRecordingBusy,i=Dk(Hk()),l=Array.isArray(o.debugRecordingDeviceBundle?.events)?o.debugRecordingDeviceBundle.events.length:Array.isArray(o.debugRecordingEvents)?o.debugRecordingEvents.length:0,c=vk(),d=Tg(),u=kg(),m=yk(),v=n>0,w=`${m.toFixed(1)}%`,f=[{icon:"status",label:"Status",value:la()},{icon:"clock",label:t?"Retentie":"Duur",value:yr(t?u:qg())},{icon:"samples",label:"Samples",value:String(n)},{icon:"changes",label:"Statuswijzigingen",value:String(l)},{icon:"file",label:"Geschatte grootte",value:`\xB1 ${i}`},{icon:"storage",label:"Opslag",value:o.debugRecordingDeviceStatus?.available===!1?"Niet beschikbaar":"Apparaatgeheugen"}],g=o.debugRecordingError?{kind:"error",icon:"alert",text:o.debugRecordingError}:o.debugRecordingNotice?{kind:"success",icon:"check",text:o.debugRecordingNotice}:null;return ee({id:"system",titleId:"oq-debug-recording-modal-title",kicker:"Diagnostiek",title:"Debugopname",copy:Pi(),className:"oq-debug-recording-modal",closeAction:"close-system-modal",closeLabel:"Sluit debugopname",body:`
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${Tc("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${e?`
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>${s(t?`Laatste ${yr(u)} bewaard`:`Nog ${yr(d)}`)}</span>
                <strong>${s(t?`${n}/${Number(o.debugRecordingDeviceStatus?.sample_capacity||0)}`:`${Math.round(m)}%`)}</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${s(w)}"></span>
              </div>
            </div>
          `:""}
          <dl class="oq-debug-recording-stats">
            ${f.map(p=>`
              <div class="oq-debug-recording-stat">
                <dt>${qk(p.icon)}${s(p.label)}</dt>
                <dd>${s(p.value)}</dd>
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
              ${ti.map(p=>{let b=Number(p.minutes)===c;return`
                  <button
                    class="oq-debug-recording-segment${b?" oq-debug-recording-segment--selected":""}"
                    type="button"
                    data-oq-action="select-debug-recording-duration"
                    data-debug-minutes="${p.minutes}"
                    aria-pressed="${b?"true":"false"}"
                    ${e||a?"disabled":""}
                  >
                    ${s(p.label)}
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
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!v||a?"disabled":""}>${so("download")}${e&&t?"Download tot nu toe":"Download supportbestand"}</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!v||a?"disabled":""}>${so("copy")}${e&&t?"Kopieer tot nu toe":"Kopieer data"}</button>
          ${g?`
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${g.kind}" role="status">
              ${so(g.icon)}
              <span>${s(g.text)}</span>
            </p>
          `:""}
        </div>`})}function Rg(e){o.overviewTheme=e==="dark"?"dark":"light";try{window.localStorage.setItem("oq-overview-theme",o.overviewTheme)}catch{}}function ua(e){o.interfacePanelOpen=e===!0}function xc(e){try{window.localStorage.setItem("oq-active-surface",e==="native"?"native":"app")}catch{}}function Fi(e,t={}){o.settingsGroup=Ie.has(e)?e:Se[0].id;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}t.syncUrl!==!1&&o.appView==="settings"&&nr(t.syncMode||"replace")}function Hg(e){o.hpVisualMode=e==="compact"?"compact":"schematic";try{window.localStorage.setItem("oq-hp-visual-mode",o.hpVisualMode)}catch{}}function Dg(e){o.hpLayoutMode=e==="focus-hp1"||e==="focus-hp2"?e:"equal";try{window.localStorage.setItem("oq-hp-layout-mode",o.hpLayoutMode)}catch{}}function Ik(e){if(o.reducedMotion=!!e?.matches,o.reducedMotion){zn();return}rr()}function Fk(){let e=tl();!e||o.motionPreferenceMedia===e||(o.motionPreferenceMedia=e,o.motionPreferenceListener=Ik,typeof e.addEventListener=="function"?e.addEventListener("change",o.motionPreferenceListener):typeof e.addListener=="function"&&e.addListener(o.motionPreferenceListener),o.reducedMotion=!!e.matches)}function jk(){return Object.keys(o.entities).length>0}function Wk(){return el+Math.floor(Math.random()*(Ld-el+1))}function Bk(){return(document.hidden?Fn:_d)+Wk()}function Ng(e=Bk()){o.pollTimer||o.nativeOpen||o.updateInstallBusy||fi()||(o.pollTimer=window.setTimeout(async()=>{o.pollTimer=null,await Ee(),Ng()},e))}function Mc(){Ng()}function $c(){o.pollTimer&&(window.clearTimeout(o.pollTimer),o.pollTimer=null)}bp({start:Mc,stop:$c});function Vk(){o.nativeOpen||($c(),Mc(),document.hidden||Ee({forceProbe:!0}))}function ji(e={}){if(da(),o.nativeOpen){$c(),zn(),o.nativeFrontendLoaded||Wi();return}if(rr(),Mc(),e.refresh!==!1){if(!jk()){Nm();return}Ee({forceFast:!0})}}function Kk(){let e=Gn()||qo(),t=e==="settings"?Sl()||o.settingsGroup:"",r=e==="control"?vl()||"status":o.controlReplayTab,n=e==="control"?wl()||"last24":o.controlReplayWindow,a=e==="control"?yl():null;if(!(e===o.appView&&(e!=="settings"||t===o.settingsGroup)&&(e!=="control"||r===o.controlReplayTab&&n===o.controlReplayWindow&&(!a||a.start===o.controlReplayCustomStart&&a.end===o.controlReplayCustomEnd)))){if(o.appView=e,e==="control"&&(o.controlReplayTab=r,o.controlReplayWindow=n,o.controlReplayCustomStart=a?.start||"",o.controlReplayCustomEnd=a?.end||"",o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,o.controlReplayCustomPeriodError=""),e==="settings"&&t){o.settingsGroup=t;try{window.localStorage.setItem("oq-settings-group",o.settingsGroup)}catch{}}h(),Ee({forceFast:!0})}}function da(){o.nativeApp&&(o.nativeApp.classList.add("oq-native-app"),o.nativeApp.classList.toggle("oq-native-app--collapsed",!o.nativeOpen),o.nativeApp.setAttribute("aria-hidden",o.nativeOpen?"false":"true"))}function Og(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_g,{once:!0}):_g(),window.addEventListener("pointermove",Tp),window.addEventListener("pointerup",Cp),window.addEventListener("popstate",Kk),document.addEventListener("visibilitychange",Vk)}function _g(){zk();let e=document.querySelector("esp-app");e||(e=document.createElement("esp-app"),document.body.appendChild(e)),o.nativeApp=e,o.nativeFrontendLoaded=Array.from(document.scripts).some(t=>t.src===js),o.mounted||(Uk(e),o.mounted=!0,ji()),da(),o.nativeOpen||(Ee(),Ii({silent:!0}))}function zk(){if(!document.head)return;let e=document.head.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1")}function Uk(e){let t=document.createElement("section");t.id="oq-helper-root",t.lang="nl-NL",document.documentElement&&!document.documentElement.lang&&(document.documentElement.lang="nl-NL"),e.parentNode.insertBefore(t,e),t.addEventListener("click",Sp),t.addEventListener("change",yp),t.addEventListener("input",kp),t.addEventListener("keydown",qp),t.addEventListener("wheel",$p,{passive:!1}),t.addEventListener("focusin",fl),t.addEventListener("focusout",fl),t.addEventListener("mouseover",Mp),t.addEventListener("mouseout",xp),t.addEventListener("pointerdown",Ep),o.root=t,Fk();let r=Gn()||qo(),n=r==="settings"?Sl():"",a=r==="control"?vl():"",i=r==="control"?wl():"",l=r==="control"?yl():null;n&&Fi(n,{syncUrl:!1}),a&&(o.controlReplayTab=a),i&&(o.controlReplayWindow=i,o.controlReplayCustomStart=l?.start||"",o.controlReplayCustomEnd=l?.end||""),_t(r,{syncMode:"replace",forceSync:!0}),Kn(),h()}function Gk(e){return new Promise((t,r)=>{if(!e){t();return}let n=Array.from(document.scripts).find(i=>i.src===e);if(n){if(n.dataset.loaded==="true"){t();return}n.addEventListener("load",()=>t(),{once:!0}),n.addEventListener("error",i=>r(i),{once:!0});return}let a=document.createElement("script");a.src=e,a.async=!1,a.addEventListener("load",()=>{a.dataset.loaded="true",t()},{once:!0}),a.addEventListener("error",i=>r(i),{once:!0}),document.head.appendChild(a)})}async function Wi(){if(!(o.nativeFrontendLoaded||o.nativeFrontendLoading)){o.nativeFrontendLoading=!0,o.nativeOpen&&h();try{await Gk(js),o.nativeFrontendLoaded=!0}catch(e){o.controlError=`ESPHome fallback kon niet worden geladen. ${e.message||e}`,o.nativeOpen=!1,xc("app"),h(),ji()}finally{o.nativeFrontendLoading=!1,o.nativeOpen&&h()}}}function pa(){let e=o.authStatus;return e?e.enabled?e.setup_window_active?"Instelvenster":"Beveiligd":"Onbeveiligd":"Laden..."}function Qk(){return"Login"}function Yk(){let e=o.authStatus;return e?e.enabled?"De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.":"De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.":"We halen de huidige loginstatus op."}function ma(){let e=o.authStatus;return e?e.enabled?e.setup_window_active?"Login actief. Tijdelijk instelvenster is open.":`Login actief${e.source?` via ${e.source}`:""}.`:e.setup_window_active?"Login uit. Tijdelijk instelvenster is open.":"Login uit. Webtoegang is open / onbeveiligd op het netwerk.":"Logingegevens laden..."}function ln(){if(o.apiSecurityError)return"Niet beschikbaar";let e=o.apiSecurityStatus;return e?e.transport_active===!0?"Actief":e.provisioning_closed===!0?"Niet beschikbaar":e.provisioning_pending===!0?"Wacht op koppeling":"Niet beschikbaar":"Laden..."}function cn(){if(o.apiSecurityError)return"De beveiligingsstatus kon niet worden opgehaald. Controleer de verbinding met het apparaat en probeer het opnieuw.";let e=o.apiSecurityStatus;return e?e.transport_active===!0?"De beveiliging voor Home Assistant is ingesteld.":e.provisioning_pending===!0?"Dit apparaat is nog niet gekoppeld. Na een opstart kan Home Assistant 10 minuten lang de beveiligde verbinding instellen. Daarna worden nieuwe koppelpogingen geweigerd.":e.provisioning_closed===!0?"De eerste koppeling is niet binnen 10 minuten gelukt. Zet het apparaat kort uit en weer aan om opnieuw te proberen.":"De beveiligde verbinding is tijdelijk niet beschikbaar.":"Beveiligde verbinding wordt gecontroleerd."}function Jk(){return"Beveiligde verbinding met Home Assistant"}function Zk(){return"Home Assistant regelt deze beveiliging automatisch. Je hoeft hier niets in te stellen."}function Bi(e,t,r="",n=!1){return`
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
    `}function Pg(){return ee({id:"system",titleId:"oq-api-security-modal-title",kicker:"Toegang",title:Jk(),copy:Zk(),className:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit API-beveiliging popup",body:`
        <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
          <div class="oq-helper-modal-grid">
            ${Bi("Status",ln(),cn())}
            ${Bi("Beheer","Automatisch door Home Assistant","De beveiligingssleutel wordt automatisch ingesteld en bewaard.")}
          </div>
        </div>`,actions:'<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Gereed</button>'})}function Lg(){let e=o.authStatus||{},t=e.enabled===!0,r=e.setup_window_active===!0,n=t||r,a=t?String(e.username||"").trim():"",i=o.authNotice?`<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${s(o.authNotice)}</span></div>`:"",l=o.authError?`<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${s(o.authError)}</div>`:"",d=n?`
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
      `;return ee({id:"system",titleId:"oq-login-modal-title",kicker:"Systeem",title:Qk(),copy:Yk(),closeAction:"close-system-modal",closeLabel:"Sluit login-popup",body:`
          ${i}
          ${l}
          <div class="oq-helper-modal-grid">
            ${Bi("Beveiligingsstatus",pa(),ma())}
            ${Bi("Gebruiker",t?a||"Geen naam":"Geen login",t?"Deze naam gebruik je om in te loggen.":"Er staat nog geen login op het device.")}
          </div>
          ${d}`,actions:`
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.authBusy?"disabled":""}>Gereed</button>
        ${t?`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${o.authBusy?"disabled":""}>Uitzetten</button>`:""}
        ${n?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${o.authBusy?"disabled":""}>${t?"Opslaan":"Login opslaan"}</button>`:""}`})}function ga(e,t,r){let n=R(t),a=R(r);if(Number.isFinite(n)&&Number.isFinite(a))return n-a;let i=R(e);return Number.isFinite(i)?i:NaN}function Ac(e="oq-settings-grid"){let t=Xk();return`
      <div class="${s(e)}">
        ${oe("maxWater","Maximale watertemperatuur","Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5\xB0C boven deze grens.")}
      </div>
      ${t}
    `}function Xk(){let e=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",offsetKey:"hp1WaterInOffset",finalKey:"hp1WaterIn"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",offsetKey:"hp1WaterOutOffset",finalKey:"hp1WaterOut"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",offsetKey:"hp2WaterInOffset",finalKey:"hp2WaterIn"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",offsetKey:"hp2WaterOutOffset",finalKey:"hp2WaterOut"}].filter(r=>y(r.offsetKey)&&y(r.finalKey));if(!e.length)return"";let t=r=>{let n=ze(r.offsetKey),a=ga(r.rawKey,r.finalKey,r.offsetKey),i=pe(He(r.offsetKey)),l=Number.isFinite(a)&&Number.isFinite(i)?oo(a+i,n.uom||"\xB0C",2):xe(r.finalKey,2);return`
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${s(r.offsetKey)}" data-oq-hp-offset-raw-key="${s(r.rawKey)}" data-oq-hp-offset-final-key="${s(r.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${s(r.label)}</strong>
            <span data-oq-hp-offset-active>${s(xe(r.finalKey,2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${s(`${r.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${s(Number.isFinite(a)?oo(a,n.uom||"\xB0C",2):xe(r.rawKey,2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${_o({key:r.offsetKey,value:He(r.offsetKey),meta:n,controlClass:"oq-helper-control oq-helper-control--suffix",inputClass:"oq-helper-input oq-helper-input--compact-number",unitMarkup:n.uom?`<span class="oq-helper-unit-chip">${s(n.uom)}</span>`:""})}
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
    `}function Ig(){return re("Beveiliging","Watertemperatuur","Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.",Ac())}function Fg(e,t){let r=R(e),n=R(t),a=Number.isNaN(r)?"Lvl \u2014":`Lvl ${Math.round(r)}`,i=Number.isNaN(n)?"\u2014 Hz":`${Math.round(n)} Hz`;return`${a} (${i})`}function eq(e){let t=String(e||"").trim().toUpperCase();return!t||t==="0"||t==="IDLE"||t==="CM100 READY"||t==="CM100 STOPPED"||t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED")?!1:t.includes("REQUESTED")||t.includes("WAITING")||t.includes("WACHTEN")||t.includes("SETTLING")||t.includes("MEASUR")||t.includes("COOLDOWN")||t.includes("RUNNING")||t.includes("VALIDATING")||t.includes("STARTED")||t.includes("RECOVER")||t.includes("PHASE")||t.includes("STEADY")||t.includes("PULSE")||t.includes("STABILIZE")||t.includes("STEP")}function $e(e){let t=String(e||"").trim().toUpperCase();return t?t.includes("DONE")||t.includes("FAILED")||t.includes("ABORT")||t.includes("APPLIED")||t.includes("REFUSED"):!1}function kr(e){let t=String(e||"").trim().toUpperCase();return t.includes("WAITING_FOR_CM100")||t.includes("CM100 REQUESTED")||t.includes("WACHTEN OP CM100")||t==="WACHTEN"}function un(e){return eq(e)&&!kr(e)}function Vi(e="",t=""){let r=String(e||"").trim().toUpperCase(),n=String(t||"").trim().toLowerCase(),a=r.split(/[^A-Z0-9]+/).filter(Boolean),i=u=>{let m=String(u||"").trim().toUpperCase();return m?r===m||r.startsWith(`${m}:`)||r.startsWith(`${m} `)||a.includes(m):!1},l={boiler:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:12},{match:["FLOW_SETTLING"],phase:"Flow stabiliseren",percent:28},{match:["BOILER_SETTLING"],phase:"Boiler stabiliseren",percent:48},{match:["MEASURING"],phase:"Meten",percent:72},{match:["COOLDOWN"],phase:"Afronden",percent:90},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],autotune:[{match:["REQUESTED","WAITING_FOR_CM100","REFUSED"],phase:"Voorbereiden",percent:10},{match:["WAITING_FOR_FLOW","SETTLING"],phase:"Flow stabiliseren",percent:26},{match:["STEP2"],phase:"Staptest 2",percent:56},{match:["STEP","STEP1"],phase:"Staptest 1",percent:42},{match:["VALIDATING_SETTLING"],phase:"Flow valideren",percent:70},{match:["VALIDATING"],phase:"Flow valideren",percent:84},{match:["RECOVERING"],phase:"Herstellen",percent:92},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],purge:[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["PHASE1","STEADY"],phase:"Rustige doorstroming",percent:22},{match:["PHASE2","PULSE"],phase:"Pulsen",percent:62},{match:["PHASE3","STABILIZE"],phase:"Stabiliseren",percent:90},{match:["DONE"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],"hp-water-calibration":[{match:["REQUESTED","STARTED","REFUSED"],phase:"Voorbereiden",percent:8},{match:["MIXING"],phase:"Water mengen",percent:42},{match:["MEASURING"],phase:"Sensoren meten",percent:78},{match:["DONE","APPLIED"],phase:"Klaar",percent:100},{match:["ABORTED","FAILED","ABORT"],phase:"Afgebroken",percent:100}],cm100:[{match:["REQUESTED"],phase:"Wachten op CM100",percent:0},{match:["WAITING_FOR_CM100"],phase:"Wachten op CM100",percent:0},{match:["CM100 READY"],phase:"Klaar",percent:100},{match:["IDLE"],phase:"Klaar",percent:100}]};if(!r||r==="\u2014"||r==="UNKNOWN"||r==="UNAVAILABLE"||r==="NAN")return{phase:"Wachten",percent:0};if(r.includes("WAITING")||r.includes("WACHTEN"))return{phase:"Wachten",percent:0};if(n!=="cm100"&&(r==="IDLE"||r==="CM0 - STANDBY"||r==="CM100 READY"||r==="CM100 STOPPED"||r==="GEPAUZEERD"))return{phase:"Wachten",percent:0};let d=(l[n]||[]).find(u=>u.match.some(m=>i(m)));return d||(r.includes("DONE")||r.includes("APPLIED")?{phase:"Klaar",percent:100}:r.includes("ABORT")||r.includes("FAILED")||r.includes("REFUSED")?{phase:"Afgebroken",percent:100}:n==="cm100"&&r.includes("CM100")?{phase:"Klaar",percent:100}:{phase:e,percent:0})}function dn({taskKey:e,title:t,copy:r,subcopy:n="",status:a,statusCopy:i,progressTask:l,actions:c="",controls:d="",metrics:u="",className:m=""}){return`
      <article class="oq-settings-commissioning-card${m?` ${s(m)}`:""}" data-oq-commissioning-task="${s(e)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${s(t)}</h3>
            <p>${s(r)}</p>
            ${n?`<p class="oq-settings-commissioning-card-subcopy">${s(n)}</p>`:""}
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
    `}function tq({status:e,running:t,resultReady:r,startDisabled:n,abortDisabled:a,applyDisabled:i,busy:l,controlsAvailable:c}){let d=String(e||"").toUpperCase(),u=d.includes("FAILED")||d.includes("REFUSED")||d.includes("ABORT"),m=d.includes("APPLIED"),v=y("hp2WaterIn")||y("hp2WaterOut")||y("hp2WaterInRaw")||y("hp2WaterOutRaw"),w=R("hpWaterCalibrationStableProgress"),f=R("hpWaterCalibrationStableRequired"),g=R("hpWaterCalibrationRemaining"),p=Math.round(R("hpWaterCalibrationPhase")),b=t&&(p===1||d.includes("MIXING")),S=t&&!b,k=300,E=60,q=Number.isFinite(g)?Math.max(0,k-g):NaN,M=Number.isFinite(q)?Math.max(0,E-q):NaN,_=b&&Number.isFinite(q)?Math.max(0,Math.min(100,q/E*100)):S&&Number.isFinite(w)&&Number.isFinite(f)&&f>0?Math.max(0,Math.min(100,w/f*100)):t&&Number.isFinite(g)?Math.max(0,Math.min(100,100-g/k*100)):r?100:0,H=r&&y("hpWaterCalibrationResultSpreadBefore")?xe("hpWaterCalibrationResultSpreadBefore",2):xe("hpWaterCalibrationSpread",2),F=b?"Water mengen":Number.isFinite(w)&&Number.isFinite(f)&&f>0?w>0?`${Math.round(Math.max(0,w))} / ${Math.round(f)} s binnen grenzen`:"Nog niet binnen grenzen":"Wachten op stabiel venster",L=r?3:t?2:1,W=m?"Offsets toegepast":r?`Meting klaar - spreiding ${H}`:t?b?`Water mengen${Number.isFinite(M)&&M>0?` - meting start over ${Math.round(M)} s`:""}`:`Meting bezig - ${Number.isFinite(g)&&g>0?`max. ${Math.round(g)} s resterend`:F}`:u?"Meting niet voltooid":"Voorbereiding",x=m?"De voorgestelde offsets zijn opgeslagen.":r?"Controleer de voorgestelde offsets en pas ze toe.":t?b?"De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen.":"De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.":u?to("hpWaterCalibrationStatus","Controleer de voorwaarden en start opnieuw."):v?"Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht.":"Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.",O=[{label:"HP1 water in",rawKey:"hp1WaterInRaw",liveKey:"hp1WaterIn",resultRawKey:"hpWaterCalibrationResultHp1InRawAvg",offsetKey:"hp1WaterInOffset",suggestedKey:"hp1WaterInOffsetSuggested"},{label:"HP1 water uit",rawKey:"hp1WaterOutRaw",liveKey:"hp1WaterOut",resultRawKey:"hpWaterCalibrationResultHp1OutRawAvg",offsetKey:"hp1WaterOutOffset",suggestedKey:"hp1WaterOutOffsetSuggested"},{label:"HP2 water in",rawKey:"hp2WaterInRaw",liveKey:"hp2WaterIn",resultRawKey:"hpWaterCalibrationResultHp2InRawAvg",offsetKey:"hp2WaterInOffset",suggestedKey:"hp2WaterInOffsetSuggested"},{label:"HP2 water uit",rawKey:"hp2WaterOutRaw",liveKey:"hp2WaterOut",resultRawKey:"hpWaterCalibrationResultHp2OutRawAvg",offsetKey:"hp2WaterOutOffset",suggestedKey:"hp2WaterOutOffsetSuggested"}].filter(P=>y(P.liveKey)||y(P.rawKey)||y(P.offsetKey)),D=(P,B)=>{let X=L>P;return`
        <div class="oq-settings-hp-calibration-step${X?" is-done":""}${L===P?" is-active":""}">
          <span>${X?"\u2713":P}</span>
          <strong>${s(B)}</strong>
        </div>
      `},N=P=>`
        <article class="oq-settings-hp-calibration-live-card">
          <span>${s(P.label)}</span>
          <strong>${s(xe(P.liveKey,2))}</strong>
        </article>
      `,J=P=>{let B=R(P.resultRawKey),X=Number.isFinite(B)?B:ga(P.rawKey,P.liveKey,P.offsetKey),Pe=R(P.suggestedKey),Tt=Number.isFinite(X)&&Number.isFinite(Pe)?oo(X+Pe,o.entities[P.suggestedKey]?.uom||"\xB0C",2):"\u2014";return`
        <tr>
          <th scope="row">${s(P.label)}</th>
          <td>${s(Number.isFinite(X)?oo(X,o.entities[P.liveKey]?.uom||"\xB0C",2):"\u2014")}</td>
          <td>${s(xe(P.offsetKey,2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${s(xe(P.suggestedKey,2))}</span></td>
          <td>${s(Tt)}</td>
        </tr>
      `};return`
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${D(1,"Voorbereiding")}
          ${D(2,"Meting")}
          ${D(3,"Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${r?" is-success":t?" is-active":u?" is-warning":""}">
          <div>
            <strong>${s(W)}</strong>
            <p>${s(x)}</p>
          </div>
          ${t||r?`<span>${s(t?F:"Resultaat beschikbaar")}</span>`:""}
          ${t?`<div class="oq-settings-hp-calibration-progress"><i style="width: ${_.toFixed(0)}%"></i></div>`:""}
        </div>

        ${t?`
          <div class="oq-settings-hp-calibration-live-grid">
            ${O.map(N).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${s(xe("hpWaterCalibrationSpread",2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${s(xe("hpWaterCalibrationSupplyDelta",2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        `:""}

        ${r?`
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${s(xe("hpWaterCalibrationResultReference",2))}</span>
              <span>Supply verschil ${s(xe("hpWaterCalibrationSupplyDelta",2))}</span>
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
                  ${O.map(J).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

        ${c?`
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${mr({active:t,startKey:"hpWaterCalibrationStart",stopKey:"hpWaterCalibrationAbort",startLabel:"Kalibratie starten",stopLabel:"Meting stoppen",startDisabled:l||n,stopDisabled:l||a})}
            ${o.entities.hpWaterCalibrationApply?Ge("hpWaterCalibrationApply","Offsets toepassen","oq-helper-button oq-helper-button--primary",l||i):""}
          </div>
        `:""}
      </div>
    `}function jg(){let e=y("boilerCvAssistEnabled")&&C("boilerCvAssistEnabled"),t=Ci(),r=C("cm100Active"),n=String(t||"").trim().toUpperCase(),a=kr(t),i=!a&&(r||n==="CM100 READY"),l=o.commissioningTaskLock==="cm100",c=o.loadingEntities||o.busyAction==="commissioningCm100Start"||o.busyAction==="commissioningCm100Stop"||l,d=!!o.pendingCommissioningCm100Start,u=c||i||a,m=c||!i,v=dr("boilerPowerTestStatus","IDLE"),w=Vi(v,"boiler"),f=C("boilerPowerTestActive"),g=o.loadingEntities||o.busyAction==="boilerPowerTestStart"||o.busyAction==="boilerPowerTestAbort"||o.busyAction==="boilerPowerTestApply",p=!!(o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort||o.entities.boilerPowerTestApply),b=!!o.pendingBoilerPowerTestStart,S=o.commissioningTaskLock==="boiler",k=kr(v),q=!$e(v)&&(f||b||S||un(v))&&!k,M=Ce("boilerRatedHeatPower"),_=Ce("boilerHeatPower"),H=R("boilerHeatPower"),F=H>0?_:q&&o.commissioningBoilerHeatPowerDisplay?o.commissioningBoilerHeatPowerDisplay:_;H>0&&(o.commissioningBoilerHeatPowerDisplay=_);let L=dr("flowAutotuneStatus","IDLE"),W=Vi(L,"autotune"),x=o.loadingEntities||o.busyAction==="flowAutotuneStart"||o.busyAction==="flowAutotuneAbort"||o.busyAction==="flowAutotuneApply",O=!!(o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort||o.entities.flowAutotuneApply),D=!!o.pendingFlowAutotuneStart,N=o.commissioningTaskLock==="autotune",J=kr(L),B=!$e(L)&&(D||N||un(L))&&!J,X=dr("airPurgeStatus","IDLE"),Pe=Vi(X,"purge"),Tt=C("airPurgeActive"),ht=o.loadingEntities||o.busyAction==="airPurgeStart"||o.busyAction==="airPurgeAbort",mo=!!(o.entities.airPurgeStart||o.entities.airPurgeAbort),Ct=!!o.pendingAirPurgeStart,Le=o.commissioningTaskLock==="purge",me=!$e(X)&&(Tt||Ct||Le||un(X)),An=/DONE/.test(String(X||"").toUpperCase()),Nr=!!(mo||o.entities.airPurgeStatus||o.entities.airPurgeReturnToAuto),$=Ce("airPurgeRemaining",{decimals:0}),A=R("airPurgePhase"),V=A===1?"Rustig":A===2?"Pulsen":A===3?"Stabiliseren":Pe.phase,K=dr("manualFlowStatus","IDLE"),te=C("manualFlowActive"),ae=o.loadingEntities||o.busyAction==="manualFlowStart"||o.busyAction==="manualFlowAbort",he=!!(o.entities.manualFlowStart||o.entities.manualFlowAbort),be=!!o.pendingManualFlowStart,ue=o.commissioningTaskLock==="manual-flow",ve=!$e(K)&&(te||be||ue||un(K)),Je=dr("manualHpStatus","IDLE"),go=C("manualHpActive"),De=o.loadingEntities||o.busyAction==="manualHpStart"||o.busyAction==="manualHpAbort",fo=!!(o.entities.manualHpStart||o.entities.manualHpAbort),ho=!!o.pendingManualHpStart,Ve=o.commissioningTaskLock==="manual-hp",Ae=!$e(Je)&&(go||ho||Ve||un(Je)),_n=/SAFETY STOP/.test(String(Je||"").toUpperCase()),Ke=/STOPPING/.test(String(Je||"").toUpperCase()),vo=dr("hpWaterCalibrationStatus","IDLE"),Lv=Vi(vo,"hp-water-calibration"),gd=C("hpWaterCalibrationActive"),ja=o.loadingEntities||o.busyAction==="hpWaterCalibrationStart"||o.busyAction==="hpWaterCalibrationAbort"||o.busyAction==="hpWaterCalibrationApply",fd=!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort||o.entities.hpWaterCalibrationApply),Wa=!!o.pendingHpWaterCalibrationStart,wo=o.commissioningTaskLock==="hp-water-calibration",Ze=!$e(vo)&&(gd||Wa||wo||un(vo)),Ba=/DONE|APPLIED/.test(String(vo||"").toUpperCase()),hd=/APPLIED/.test(String(vo||"").toUpperCase()),Iv=Ce("flowKpSuggested",{decimals:5,trimTrailingZeros:!0}),Fv=Ce("flowKiSuggested",{decimals:5,trimTrailingZeros:!0}),bd=/DONE|APPLIED/.test(String(v||"").toUpperCase()),vd=/DONE|APPLIED/.test(String(L||"").toUpperCase()),Ps=i?k?"Wachten op CM100":q?w.phase:bd?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Ls=i?J?"Wachten op CM100":B?W.phase:vd?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",Is=i?me?Pe.phase:An?"Klaar":"Klaar om te starten":"Wachten op CM100",wd=i?ve?"Actief":"Klaar om te starten":"Wachten op CM100",yd=i?Ae?Ke?"Bezig met stoppen":_n?"Veiligheidsstop":"Actief":"Klaar om te starten":"Wachten op CM100",Sd=i?Ze?Lv.phase:hd?"Offsets toegepast":Ba?"Klaar om toe te passen":"Klaar om te starten":"Wachten op CM100",kd=!i||g||!p||B||me||ve||Ae||Ze||q||N||Le||ue||Ve||wo||b,jv=g||!(q||S||b),Wv=g||kd||!bd||B||me||Ze,qd=!i||x||!O||q||me||ve||Ae||Ze||B||S||Le||ue||Ve||wo||D,Bv=x||!(B||N||D),Vv=x||qd||!vd||q||me||Ze,Kv=!i||ht||!mo||q||B||ve||Ae||Ze||me||S||N||ue||Ve||wo||Ct,zv=ht||!(me||Le||Ct),Uv=!i||ae||!he||q||B||me||Ae||Ze||ve||S||N||Le||Ve||wo||be,Gv=ae||!(ve||ue||be),Qv=!i||De||!fo||q||B||me||ve||Ze||Ae||S||N||Le||ue||wo||ho,Yv=De||!(Ae||Ve||ho),Jv=!i||ja||!fd||q||B||me||ve||Ae||Ze||S||N||Le||ue||Ve||Wa,Zv=ja||!(Ze||wo||Wa),Xv=ja||Ze||!Ba||hd;d&&i&&(o.pendingCommissioningCm100Start=!1),l&&(i||/READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(n))&&(o.commissioningTaskLock=""),b&&(f||$e(v))&&(o.pendingBoilerPowerTestStart=!1),S&&$e(v)&&(o.commissioningTaskLock=""),D&&$e(L)&&(o.pendingFlowAutotuneStart=!1),N&&$e(L)&&(o.commissioningTaskLock=""),Ct&&(Tt||$e(X))&&(o.pendingAirPurgeStart=!1),Le&&$e(X)&&(o.commissioningTaskLock=""),be&&(te||$e(K))&&(o.pendingManualFlowStart=!1),ue&&(te||$e(K))&&(o.commissioningTaskLock=""),ho&&(go||$e(Je))&&(o.pendingManualHpStart=!1),Ve&&(go||$e(Je))&&(o.commissioningTaskLock=""),Wa&&(gd||$e(vo))&&(o.pendingHpWaterCalibrationStart=!1),wo&&$e(vo)&&(o.commissioningTaskLock="");let ew=a?"Wachten op CM100":t,tw=a?"Service-stand wordt geopend. Wacht tot CM100 klaar staat.":i?"CM100 is actief en klaar voor service-taken.":"Start de service-stand voordat je een taak uitvoert.",ow=[{key:"hp-water-calibration",title:"Temperatuursensoren kalibreren",label:"Sensor kalibratie",summary:"Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",status:Sd,available:!!(fd||o.entities.hpWaterCalibrationStatus),openDisabled:!i,cardMarkup:dn({taskKey:"hp-water-calibration",title:"Temperatuursensoren kalibreren",copy:"Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",subcopy:"De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",status:Sd,statusCopy:Ze?"De pomp draait en de firmware wacht op een stabiel temperatuurbeeld.":Ba?"Controleer de voorgestelde offsets voordat je ze toepast.":i?"CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn.":"Start CM100 eerst.",progressTask:"hp-water-calibration",controls:tq({status:vo,running:Ze,resultReady:Ba,startDisabled:Jv,abortDisabled:Zv,applyDisabled:Xv,busy:ja,controlsAvailable:!!(o.entities.hpWaterCalibrationStart||o.entities.hpWaterCalibrationAbort)}),className:"oq-settings-commissioning-card--hp-water-calibration"})},{key:"manual-flow",title:"Handmatige flowregeling",label:"Handmatige flow",summary:"Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",status:wd,available:!!(he||o.entities.manualFlowStatus),openDisabled:!i,cardMarkup:dn({taskKey:"manual-flow",title:"Handmatige flowregeling",copy:"Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",subcopy:"De bestaande PI-regeling blijft de pomp aansturen.",status:wd,statusCopy:ve?"De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow.":i?"CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp.":"Start CM100 eerst.",progressTask:"",controls:`
            <div class="oq-settings-manual-flow-control">
              ${ro("manualFlowSetpoint","Tijdelijke gewenste flow","Pas deze waarde aan terwijl de waterpomp draait.","oq-settings-field--compact")}
              ${o.entities.manualFlowStart||o.entities.manualFlowAbort?mr({active:ve,startKey:"manualFlowStart",stopKey:"manualFlowAbort",startLabel:"Waterpomp starten",stopLabel:"Waterpomp stoppen",startDisabled:ae||Uv,stopDisabled:ae||Gv}):""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${Oe("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",Ce("flowSelected"),"oq-settings-field--compact")}
            ${Oe("manualFlowTargetIpwm","Actuele pompstand","Door de PI-regeling aangevraagde pompstand.",Ce("manualFlowTargetIpwm"),"oq-settings-field--compact")}
          `}),modalActions:`
          ${o.entities.manualFlowApplyHeating?Ge("manualFlowApplyHeating","Overnemen voor verwarmen","oq-helper-button oq-helper-button--ghost",ae):""}
          ${o.entities.manualFlowApplyCooling?Ge("manualFlowApplyCooling","Overnemen voor koelen","oq-helper-button oq-helper-button--ghost",ae):""}
        `},{key:"manual-hp",title:"Handmatige warmtepompbediening",label:"Handmatige warmtepomp",summary:"Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",status:yd,available:!!(fo||o.entities.manualHpStatus),openDisabled:!i,cardMarkup:dn({taskKey:"manual-hp",title:"Handmatige warmtepompbediening",copy:"Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",subcopy:"Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",status:yd,statusCopy:Ae?Ke?"De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond.":_n?"De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt.":"De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.":i?"CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven.":"Start CM100 eerst.",progressTask:"",actions:`
            ${o.entities.manualHpStart||o.entities.manualHpAbort?mr({active:Ae,startKey:"manualHpStart",stopKey:"manualHpAbort",startLabel:"Bediening starten",stopLabel:"Bediening stoppen",startDisabled:De||Qv,stopDisabled:De||Yv}):""}
          `,controls:`
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${Ro("manualHp1Mode","Warmtepomp 1 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                ${ro("manualHp1Level","Warmtepomp 1 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
              </div>
              ${y("hp2ExcludedA")?`
                <div class="oq-settings-manual-hp-unit">
                  ${Ro("manualHp2Mode","Warmtepomp 2 werkmodus","Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.","oq-settings-field--compact")}
                  ${ro("manualHp2Level","Warmtepomp 2 compressorstand","Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.","oq-settings-field--compact")}
                </div>
              `:""}
            </div>
          `,metrics:`
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${Oe("flowSelected","Gemeten flow","Actuele doorstroming in het watercircuit.",Ce("flowSelected"),"oq-settings-field--compact")}
              ${Oe("hp1Compressor","Warmtepomp 1 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",Fg("hp1Compressor","hp1Freq"),"oq-settings-field--compact")}
              ${y("hp2Compressor")?Oe("hp2Compressor","Warmtepomp 2 actueel","Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.",Fg("hp2Compressor","hp2Freq"),"oq-settings-field--compact"):""}
            </div>
            ${Oe("manualHpGuardStatus","Bewaking","Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.",T("manualHpGuardStatus")||"Vrijgegeven","oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${Oe("hp1Failures","Warmtepomp 1 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Eo(j("hp1Failures","None")),"oq-settings-field--compact")}
              ${y("hp2Failures")?Oe("hp2Failures","Warmtepomp 2 statusmelding","Actuele melding die de warmtepomp zelf rapporteert.",Eo(j("hp2Failures","None")),"oq-settings-field--compact"):""}
            </div>
          `})},{key:"autotune",title:"Flow autotune",label:"Autotune",summary:"Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",status:Ls,available:!0,openDisabled:kr(Ls),cardMarkup:dn({taskKey:"autotune",title:"Flow autotune",copy:"Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",subcopy:"Na toepassen worden de flow-instellingen bijgewerkt.",status:Ls,statusCopy:J?"Wacht totdat CM100 actief is voordat je autotune start.":B?"Autotune draait op dit moment.":i?"CM100 staat klaar. Start de autotune wanneer je wilt.":"Start CM100 eerst en voer daarna autotune uit.",progressTask:"autotune",actions:`
            ${o.entities.flowAutotuneStart||o.entities.flowAutotuneAbort?mr({active:B,startKey:"flowAutotuneStart",stopKey:"flowAutotuneAbort",startLabel:"Autotune starten",stopLabel:"Autotune stoppen",startDisabled:x||qd,stopDisabled:x||Bv}):""}
            ${o.entities.flowAutotuneApply?Ge("flowAutotuneApply","Toepassen","oq-helper-button oq-helper-button--ghost",x||Vv):""}
          `,metrics:`
            ${Oe("flowKpSuggested","Voorgestelde Kp","Kp bepaalt hoe sterk de regeling meteen corrigeert.",Iv,"oq-settings-field--compact")}
            ${Oe("flowKiSuggested","Voorgestelde Ki","Ki corrigeert kleine afwijkingen langzaam weg.",Fv,"oq-settings-field--compact")}
          `})},{key:"boiler",title:"Boiler power test",label:"Boiler test",summary:"Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",status:Ps,available:e,openDisabled:kr(Ps),cardMarkup:dn({taskKey:"boiler",title:"Boiler power test",copy:"Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",subcopy:`Ingesteld boilervermogen: ${s(M)}`,status:Ps,statusCopy:k?"Wacht totdat CM100 actief is voordat je de boiler-test start.":q?"De boiler-test draait op dit moment.":i?"CM100 staat klaar. Start de boiler-test wanneer je wilt.":"Start CM100 eerst en voer daarna de boilervermogentest uit.",progressTask:"boiler",actions:`
            ${o.entities.boilerPowerTestStart||o.entities.boilerPowerTestAbort?mr({active:q,startKey:"boilerPowerTestStart",stopKey:"boilerPowerTestAbort",startLabel:"Boiler test starten",stopLabel:"Boiler test stoppen",startDisabled:g||kd,stopDisabled:g||jv}):""}
            ${o.entities.boilerPowerTestApply?Ge("boilerPowerTestApply","Toepassen","oq-helper-button oq-helper-button--ghost",g||Wv):""}
          `,metrics:`
            ${Oe("boilerHeatPower","Actueel vermogen","Live meting tijdens de boiler-test.",F)}
            ${Oe("boilerPowerTestResult","Gemeten testresultaat","Afgerond resultaat van de laatste boiler-test.",Ce("boilerPowerTestResult"))}
          `})},{key:"purge",title:"Ontluchten",label:"Ontluchten",summary:"Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",status:Is,available:Nr,openDisabled:kr(Is),cardMarkup:dn({taskKey:"purge",title:"Ontluchten",copy:"Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",subcopy:"Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",status:Is,statusCopy:me?"Ontluchten loopt vast 5 minuten door en stopt daarna automatisch.":i?"CM100 staat klaar. Start ontluchten wanneer het circuit open staat.":"Start CM100 eerst en voer daarna ontluchten uit.",progressTask:"purge",className:"oq-settings-commissioning-card--air-purge",actions:`
            ${o.entities.airPurgeStart||o.entities.airPurgeAbort?mr({active:me,startKey:"airPurgeStart",stopKey:"airPurgeAbort",startLabel:"Ontluchten starten",stopLabel:"Ontluchten stoppen",startDisabled:ht||Kv,stopDisabled:ht||zv}):""}
          `,metrics:`
            ${Oe("airPurgeRemaining","Resterende tijd","Ontluchten loopt maximaal 5 minuten.",$,"oq-settings-field--compact")}
            ${Oe("airPurgePhase","Fase","Laat zien welk deel van het ontluchten nu actief is.",V,"oq-settings-field--compact")}
            ${Oe("flowSelected","Actuele flow","Gemeten flow tijdens het ontluchten.",Ce("flowSelected"),"oq-settings-field--compact")}
            ${Km("airPurgeReturnToAuto","Na afloop","","Service mode (CM100) afsluiten","oq-settings-field--span-2 oq-settings-field--compact")}
          `})}].filter(rw=>rw.available);return{cm100Status:ew,cm100StartDisabled:u,cm100StopDisabled:m,serviceStatusCopy:tw,tasks:ow}}function oq(e){return ct({dataAttribute:"data-oq-service-task",dataValue:e.key,className:"oq-settings-service-row",label:e.label,value:e.status,note:e.summary,action:`<button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${s(e.key)}"
          ${e.openDisabled?"disabled":""}
        >
          ${e.openDisabled?"Wachten op CM100":"Openen"}
        </button>`})}function fa(e){return{Auto:"Automatische regeling","Force CM0":"CM0 \xB7 stand-by","Force CM1":"CM1 \xB7 alleen circulatie","Force CM98":"CM98 \xB7 vorstcirculatie"}[String(e||"")]||String(e||"Onbekend")}function rq(){if(!y("controlModeOverride"))return"";let e=String(T("controlModeOverride")||"Auto"),t=e!=="Auto",r=o.loadingEntities||o.busyAction==="save-controlModeOverride",n=o.entities.controlModeOverride||{},a=(Array.isArray(n.option)?n.option:n.options||[]).filter(i=>["Auto","Force CM0","Force CM1","Force CM98"].includes(i));return`
      <div class="oq-settings-service-override${t?" is-active":""}">
        <div class="oq-settings-service-override-copy">
          <p class="oq-helper-label">${t?"Testmodus actief":"Tijdelijke testmodus"}</p>
          <h4>${s(t?fa(e):"Regelmodus tijdelijk forceren")}</h4>
          <p>${s(t?"De normale moduskeuze is overruled. De controller keert uiterlijk 30 minuten na activering automatisch terug naar de normale regeling.":"Alleen voor een gerichte test. Een geforceerde modus omzeilt tijdelijk de normale moduskeuze en verloopt automatisch na maximaal 30 minuten.")}</p>
        </div>
        <div class="oq-settings-service-override-actions">
          ${a.map(i=>i==="Auto"?t?`<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="clear-control-mode-override" ${r?"disabled":""}>Terug naar automatisch</button>`:"":i===e?"":`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="open-control-mode-override-confirm" data-control-mode-option="${s(i)}" ${r?"disabled":""}>${s(fa(i))}</button>`).join("")}
        </div>
      </div>
    `}function Wg(){let e=y("resetRuntimeCountersHp1Hp2")?"resetRuntimeCountersHp1Hp2":y("resetRuntimeCountersHp1")?"resetRuntimeCountersHp1":"",t=y("hp1RuntimeHours"),r=y("hp2RuntimeHours"),n=R("hp1RuntimeHours"),a=R("hp2RuntimeHours"),i=Number.isFinite(n)&&Number.isFinite(a),l=i?Math.abs(n-a):Number.NaN,c=i?`${Number.isInteger(l)?l.toFixed(0):l.toFixed(1).replace(".",",")} h verschil`:"Verschil onbekend",d=i?n===a?"Beide warmtepompen hebben evenveel gedraaid.":`${n>a?"HP1":"HP2"} heeft meer gedraaid.`:"De runtimebalans wordt geladen.",u=!i||n===a?"is-even":n>a?"is-hp1-higher":"is-hp2-higher",m=i&&Math.max(Math.abs(n),Math.abs(a))>0?Math.min(28,Math.max(8,l/Math.max(Math.abs(n),Math.abs(a))*500)):0,v=y("runtimeLeadHp")?to("runtimeLeadHp",""):"",w=["HP1","HP2"].includes(v)?v:"",f=w?`<span class="oq-settings-runtime-lead"><span aria-hidden="true"></span>${s(`${w} leidend`)}</span>`:"",g=e?`<button class="oq-settings-runtime-reset" type="button" data-oq-action="open-runtime-reset-confirm" aria-label="Draaiurentellers resetten" ${o.busyAction===e?"disabled":""}>${o.busyAction===e?"Resetten\u2026":"Balans resetten"}</button>`:"",p=t||r?`
        <div class="oq-settings-runtime-balance${r?"":" is-single"}">
          <div class="oq-settings-runtime-balance-head">
            <p>Runtimebalans</p>
            <div class="oq-settings-runtime-balance-head-actions">
              ${f}
              ${g}
            </div>
          </div>
          <div class="oq-settings-runtime-balance-grid">
            ${t?`
              <div class="oq-settings-runtime-metric oq-settings-runtime-metric--hp1">
                <span>HP1</span>
                <strong>${s(Ce("hp1RuntimeHours"))}</strong>
              </div>
            `:""}
            ${r?`
              <div class="oq-settings-runtime-comparison" aria-label="${s(`${c}. ${d}`)}">
                <span class="oq-settings-runtime-track ${u}" style="--oq-runtime-delta-span: ${m.toFixed(1)}%;" aria-hidden="true"></span>
                <strong>${s(c)}</strong>
                <small>${s(d)}</small>
              </div>
              <div class="oq-settings-runtime-metric oq-settings-runtime-metric--hp2">
                <span>HP2</span>
                <strong>${s(Ce("hp2RuntimeHours"))}</strong>
              </div>
            `:'<p class="oq-settings-runtime-single-copy">Opgetelde compressorlooptijd.</p>'}
          </div>
        </div>
      `:"";return p?re("Onderhoud","Draaiuren","Bekijk de runtimebalans. Begin de interne balans alleen opnieuw na onderhoud.",`
        <div class="oq-settings-maintenance-shell" id="oq-settings-maintenance">
          ${p}
        </div>
      `,"","oq-settings-section--maintenance"):""}function Bg(){let e=jg();return re("Service","Service & commissioning","Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",`
        <div class="oq-settings-service-shell">
          ${rq()}
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${s(e.cm100Status)}</strong>
              <p>${s(e.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${o.entities.commissioningCm100Start?Ge("commissioningCm100Start","Service starten","oq-helper-button oq-helper-button--primary",e.cm100StartDisabled):""}
              ${o.entities.commissioningCm100Stop?Ge("commissioningCm100Stop","Service stoppen","oq-helper-button oq-helper-button--ghost",e.cm100StopDisabled):""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${e.tasks.map(t=>oq(t)).join("")}
          </div>
        </div>
      `)}function Vg(){let e=String(o.systemModal||"").replace(/^service-task-/,""),r=jg().tasks.find(n=>n.key===e);return r?ee({id:"system",titleId:"oq-service-task-modal-title",kicker:"Service",title:r.title,copy:r.summary,className:"oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task",sectionAttributes:"data-oq-service-task-scroller",closeAction:"close-system-modal",closeLabel:`Sluit ${r.title}`,body:`<div class="oq-settings-service-task-modal-body">${r.cardMarkup}</div>`,actions:`${r.modalActions||""}<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>`}):""}function Ki(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${lc("silentStartTime","Start stille uren","Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${lc("silentEndTime","Einde stille uren","Vanaf dit tijdstip stopt de stille modus weer.")}
        ${ro("silentMax","Maximaal niveau tijdens stille uren","Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${ro("dayMax","Maximaal niveau overdag","Zo ver mag het systeem overdag opschalen.")}
      </div>
    `}function Kg(){return re("Comfort","Stille uren","Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",Ki())}function zg(){return Ki("oq-settings-grid oq-settings-grid--modal")}var zi=["electricalInputWh","heatingInputWh","coolingInputWh","heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh","systemHeatOutputWh"],nq=["Zo","Ma","Di","Wo","Do","Vr","Za"];function Ui(e){let t={storedDayCount:0,oldestDateKey:null,newestDateKey:null,hourStoredDayCount:0,hourOldestDateKey:null,hourNewestDateKey:null,hourRequestedRetentionDays:0,hourSlotCount:0,hourPartitionAvailable:!1,hourRecordCount:0,hourWriteCount:0,hourStorageKb:0,hourLastWriteTimestampS:0,dayPartitionAvailable:!1,dayStorageKb:0,dayWriteCount:0,dayLastWriteTimestampS:0};return String(e||"").split(/\r?\n/).forEach(r=>{let n=r.split("|");r.startsWith("@bounds|")?(t.storedDayCount=Number(n[1])||0,t.oldestDateKey=Number(n[2])||null,t.newestDateKey=Number(n[3])||null,t.hourStoredDayCount=Number(n[4])||0,t.hourOldestDateKey=Number(n[5])||null,t.hourNewestDateKey=Number(n[6])||null):r.startsWith("@day_retention|")?(t.dayPartitionAvailable=Number(n[1])===1,t.dayStorageKb=Number(n[2])||0,t.dayWriteCount=Number(n[3])||0,t.dayLastWriteTimestampS=Number(n[4])||0):r.startsWith("@hour_retention|")&&(t.hourRequestedRetentionDays=Number(n[1])||0,t.hourSlotCount=Number(n[2])||0,t.hourPartitionAvailable=Number(n[3])===1,t.hourRecordCount=Number(n[4])||0,t.hourWriteCount=Number(n[5])||0,t.hourStorageKb=Number(n[6])||0,t.hourLastWriteTimestampS=Number(n[7])||0)}),t}function Fe(e){return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function _c(e,t,r){return new Date(e,t-1,r,12,0,0)}function Rc(e,t){return new Date(e,t,0).getDate()}function Ug(e){return String(e).padStart(2,"0")}function ie(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return null;let r=Math.floor(t/1e4),n=Math.floor(t/100)%100,a=t%100;if(r<2020||n<1||n>12||a<1||a>31)return null;let i=new Date(r,n-1,a,12,0,0);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:{key:t,year:r,month:n,day:a,date:i}}function Gi(e){let t=ie(e);return t?`${t.year}-${Ug(t.month)}-${Ug(t.day)}`:""}function Hc(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e||"").trim());if(!t)return null;let r=Number(t[1]),n=Number(t[2]),a=Number(t[3]),i=_c(r,n,a);return i.getFullYear()!==r||i.getMonth()+1!==n||i.getDate()!==a?null:ie(Fe(i))}function Qg(e,t){return Number(e)*100+Number(t)}function Qi(e){return Qg(e.getFullYear(),e.getMonth()+1)}function qr(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return null;let r=Math.floor(t/100),n=t%100;return r<2020||n<1||n>12?null:{key:t,year:r,month:n,date:new Date(r,n-1,1,12,0,0)}}function Yg(e){let t=String(e||"").trim(),r=/^(\d{4})-(\d{2})$/.exec(t);return qr(r?Qg(Number(r[1]),Number(r[2])):t)}function Dc(e,t){let r=qr(e);if(!r)return"";let n=new Date(r.year,r.month-1+Number(t||0),1,12,0,0);return String(Qi(n))}function pn(e){let t=new Date(e.getTime()),r=t.getDay(),n=r===0?-6:1-r;return t.setDate(t.getDate()+n),t.setHours(12,0,0,0),t}function Er(e,t){let r=new Date(e.getTime());return r.setDate(r.getDate()+t),r.setHours(12,0,0,0),r}function Gg(e){return e.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}).replace(/\./g,"")}function Nc(e){let t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-r+3);let n=t.getUTCFullYear(),a=new Date(Date.UTC(n,0,4)),i=(a.getUTCDay()+6)%7;return a.setUTCDate(a.getUTCDate()-i+3),{week:1+Math.round((t-a)/(10080*60*1e3)),year:n}}function Oc(e){return Fe(pn(e))}function Jg(e){let t=Hc(e)||ie(e);return t?ie(Fe(pn(t.date))):null}function Pc(e){let t=ie(e);if(!t)return"Week";let r=pn(t.date),n=Er(r,6);return`Week ${Nc(r).week} (${Gg(r)} - ${Gg(n)})`}function Wt(e,t="day"){let r=ie(e);return r?t==="weekday"?nq[r.date.getDay()]||"":t==="month"?r.date.toLocaleDateString("nl-NL",{month:"short"}):t==="year"?String(r.year):r.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"short"}):"\u2014"}function aq(e){let t=Number(e);return Number.isFinite(t)&&t>=0?t:null}function Lc(e,t=0){return Object.fromEntries(zi.map((r,n)=>[r,aq(e[t+n])]))}function Zg(e){let t=String(e||"").trim();if(!t||t.startsWith("@"))return null;let r=t.split("|");if(r.length<10)return null;let n=Number(r[0]),a=Number(r[1]),i=Number(r[2]),l=ie(a);return!Number.isFinite(n)||!l?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,partial:!!(i&1),source:"flash",...Lc(r,3)}}function Ic(e){let t=String(e||"").trim();if(!t.startsWith("@current|"))return null;let r=t.split("|");if(r.length<9)return null;let n=Number(r[1]),a=ie(n);return a?{sequence:Number.MAX_SAFE_INTEGER,dateKey:n,year:a.year,month:a.month,day:a.day,partial:!0,source:"current",...Lc(r,2)}:null}function Xg(e){let t=String(e||"").trim();if(!t.startsWith("@hour|"))return null;let r=t.split("|");if(r.length<11)return null;let n=Number(r[1]),a=Number(r[2]),i=Number(r[3]),l=ie(a);return!Number.isFinite(n)||!l||!Number.isInteger(i)||i<0||i>23?null:{sequence:n,dateKey:a,year:l.year,month:l.month,day:l.day,hour:i,partial:!0,source:"hour",label:String(i),tooltipLabel:`${String(i).padStart(2,"0")}:00 - ${String((i+1)%24).padStart(2,"0")}:00`,sortKey:a*100+i,...Lc(r,4)}}function mn(e,t){let r=Number(e?.[t]);return Number.isFinite(r)&&r>=0?r:0}var Ji=Object.freeze(["cooling_dew_point","outside_temperature","room_temperature","room_setpoint","heating_enable","cooling_enable"]),Zi=Object.freeze(["room_setpoint","heating_enable","cooling_enable"]),iq=new Set(["coolingDewPointSource","outsideTempSource","roomTempSource","roomSetpointSource","heatingEnableSource","coolingEnableSource"]);function gn(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Yi(e,t,r=!1){let n=gn(e)?e:{};return Object.fromEntries(t.map(a=>[a,Object.prototype.hasOwnProperty.call(n,a)?n[a]===!0||String(n[a]).toLowerCase()==="true":r]))}function ef(e){if(!gn(e))return null;let t=Number(e.port||1883);return{enabled:e.enabled===!0,broker:String(e.broker||"").trim(),port:Number.isInteger(t)&&t>=1&&t<=65535?t:1883,username:String(e.username||"").trim(),password_was_set:e.password_set===!0,input_enabled:Yi(e.input_enabled,Ji,!0),input_accept_retained:Yi(e.input_accept_retained,Zi,!0)}}function tf(e){if(e==null)return null;if(!gn(e))throw new Error("MQTT-configuratie in backup is ongeldig.");let t=String(e.broker||"").trim(),r=String(e.username||"").trim(),n=Number(e.port),a=e.enabled===!0;if(!Number.isInteger(n)||n<1||n>65535)throw new Error("MQTT-poort in backup is ongeldig.");if(t.length>64||a&&!t)throw new Error("MQTT-broker in backup is ongeldig.");if(r.length>64)throw new Error("MQTT-gebruikersnaam in backup is ongeldig.");return{enabled:a,broker:t,port:n,username:r,password_was_set:e.password_was_set===!0,input_enabled:Yi(e.input_enabled,Ji,!0),input_accept_retained:Yi(e.input_accept_retained,Zi,!0)}}function ha(e){return!!e?.password_was_set}function of(e,t){return iq.has(e)&&/\bMQTT\b/i.test(String(t||""))}function rf(e,t){let r=new Map((t||[]).map(a=>[a.id,new Set(a.keys||[])])),n=[];return Object.entries(gn(e)?e:{}).forEach(([a,i])=>{let l=r.get(a);if(!l){gn(i)?Object.keys(i).forEach(c=>n.push({section:a,key:c})):n.push({section:a,key:a});return}gn(i)&&Object.keys(i).forEach(c=>{l.has(c)||n.push({section:a,key:c})})}),n}var Fc=null;function nf(e){Fc=typeof e=="function"?e:null}function ba(){return Fc?Fc():"?meta=1"}async function Bt(e,t){let r=I[e];if(!r)throw new Error(`Onbekend veld ${e}.`);if(r.domain==="select"){let n=String(t||"").trim(),a=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="number"){let n=qe(e,t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="time"){let n=At(t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="datetime"){let n=Xe(t),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="text"){let n=String(t||"").trim(),a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return n}if(r.domain==="switch"||r.domain==="binary_sensor"){let n=!!t,a=n?"turn_on":"turn_off",i=await fetch(Q(r.domain,r.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);return n}throw new Error(`${r.name} kan niet worden hersteld.`)}function sq(e){if(typeof e?.value=="boolean")return e.value;let t=String(e?.state??e?.value??"").trim().toLowerCase();return["on","true","1"].includes(t)?!0:["off","false","0"].includes(t)?!1:null}async function af(e,t){let r=I[e];if(!r||r.domain!=="switch")throw new Error(`Onbekende schakelaar ${e}.`);let n=await fetch(Q(r.domain,r.name),{cache:"no-store",headers:{"Cache-Control":"no-store"}});if(!n.ok)throw new Error(`Controleren mislukt: HTTP ${n.status}`);let a=sq(await n.json());if(a===null)throw new Error(`${r.name} gaf geen geldige status terug.`);return a===!!t}function jc(){let e=o.entities?.trendHistoryFlashEnabled;if(!e)return!1;if(typeof e.value=="boolean")return e.value;let t=String(e.state??e.value??"").toLowerCase();return t==="on"||t==="true"||t==="1"}function lq(){return jc()?er:er.filter(e=>e<=168)}function va(e){let t=lq(),r=Number(e);return t.includes(r)?r:Number.isFinite(r)&&r>t[t.length-1]?t[t.length-1]:t.includes($t)?$t:t[0]}function fn(e){o.trendWindowHours=va(e);try{window.localStorage.setItem("oq-trend-window-hours",String(o.trendWindowHours))}catch{}}function uq(e){return Object.prototype.hasOwnProperty.call(e,"hour")||Object.prototype.hasOwnProperty.call(e,"hour_of_day")||Object.prototype.hasOwnProperty.call(e,"hourOfDay")}function dq(e){return e.some(t=>rs(t)!==void 0)}function pq(e){let t=new Set;for(let r of e){let n=mf(r.date_key??r.dateKey??r.date??r.from??rs(r));if(n){if(t.has(n))return!0;t.add(n)}}return!1}function cf(e){return e.some(uq)||dq(e)&&pq(e)}function mq(){return{available:"Alleen live",oldest:"Geen data",newest:"Geen data",lastFlush:"Geen data",sizeKb:0,writes:0,nowMs:Number.NaN}}function gq(e={}){return{enabled:e?.enabled===!0,available:e?.available===!0,storedEvents:Math.max(0,Number(e?.stored_events)||0),capacityEvents:Math.max(0,Number(e?.capacity_events)||5120),retentionDays:Math.max(0,Number(e?.retention_days)||7),oldestEpochS:Math.max(0,Number(e?.oldest_epoch_s)||0),newestEpochS:Math.max(0,Number(e?.newest_epoch_s)||0),lastFlushEpochS:Math.max(0,Number(e?.last_flush_epoch_s)||0),storageBytes:Math.max(0,Number(e?.storage_bytes)||0),writeCount:Math.max(0,Number(e?.write_count)||0)}}async function fq(e={}){let t=e.force===!0,r=Date.now();if(!t&&o.decisionLogStorageMetadataFetchPromise)return o.decisionLogStorageMetadataFetchPromise;if(!t&&(o.decisionLogStorageMetadataSignature||o.decisionLogStorageMetadataError)&&r-Number(o.decisionLogStorageMetadataLastFetchAt||0)<Rn)return!1;o.decisionLogStorageMetadataFetchPromise=(async()=>{let n=await fetch(`${Ne()}/openquatt/decision-log?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.json();if(!a?.ok)throw new Error("ongeldig antwoord");let i=JSON.stringify(a),l=i!==o.decisionLogStorageMetadataSignature||o.decisionLogStorageMetadataError!=="";return o.decisionLogStorageMetadata=gq(a),o.decisionLogStorageMetadataError="",o.decisionLogStorageMetadataSignature=i,o.decisionLogStorageMetadataLastFetchAt=Date.now(),l})();try{return await o.decisionLogStorageMetadataFetchPromise}catch(n){let a=`Beslisloghistorie kon niet worden geladen. ${n.message}`,i=o.decisionLogStorageMetadataError!==a;return o.decisionLogStorageMetadata={},o.decisionLogStorageMetadataError=a,o.decisionLogStorageMetadataSignature="",o.decisionLogStorageMetadataLastFetchAt=Date.now(),i}finally{o.decisionLogStorageMetadataFetchPromise=null}}function hq(e){let t=mq();return String(e||"").split(/\r?\n/).forEach(r=>{if(r.startsWith("@now|")){t.nowMs=Number(r.slice(5));return}if(!r.startsWith("@flash|"))return;let n=r.split("|");t.available=n[1]||t.available,t.oldest=n[2]||t.oldest,t.newest=n[3]||t.newest,t.lastFlush=n[4]||t.lastFlush,t.sizeKb=Number(n[5])||0,t.writes=Number(n[6])||0}),t}async function uf(e={}){if(!y("trendHistoryEnabled")&&!bn()){let n=!!(o.trendHistoryMetadataSignature||o.trendHistoryMetadataError);return o.trendHistoryMetadata={},o.trendHistoryMetadataError="",o.trendHistoryMetadataSignature="",o.trendHistoryMetadataLastFetchAt=0,n}let t=e.force===!0,r=Date.now();if(!t&&o.trendHistoryMetadataFetchPromise)return o.trendHistoryMetadataFetchPromise;if(!t&&(o.trendHistoryMetadataSignature||o.trendHistoryMetadataError)&&r-Number(o.trendHistoryMetadataLastFetchAt||0)<Rn)return!1;o.trendHistoryMetadataFetchPromise=(async()=>{let n=await fetch(`${Ne()}/trends/history?meta=1`,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let a=await n.text(),i=hq(a),l=`${a.length}|${a.slice(0,120)}|${a.slice(-120)}`,c=l!==o.trendHistoryMetadataSignature||o.trendHistoryMetadataError!=="";return o.trendHistoryMetadata=i,o.trendHistoryMetadataError="",o.trendHistoryMetadataSignature=l,o.trendHistoryMetadataLastFetchAt=Date.now(),c})();try{return await o.trendHistoryMetadataFetchPromise}catch(n){let a=`Trendhistorie metadata kon niet worden geladen. ${n.message}`,i=o.trendHistoryMetadataError!==a;return o.trendHistoryMetadata={},o.trendHistoryMetadataError=a,o.trendHistoryMetadataSignature="",o.trendHistoryMetadataLastFetchAt=Date.now(),i}finally{o.trendHistoryMetadataFetchPromise=null}}async function os(e={}){await z(eo(),"all",{concurrency:Qt,forceMissing:e.forceMissing===!0}),await Promise.all([uf({force:e.forceTrendHistory===!0}),fq({force:e.forceDecisionLog===!0}),Tr({force:e.forceEnergyHistory===!0,metaOnly:!0})])}function Io(e=[250,1e3,2500],t={}){e.forEach(r=>{window.setTimeout(()=>{o.nativeOpen||o.appView!=="settings"||os({forceMissing:r===0,forceTrendHistory:t.forceTrendHistory===!0,forceDecisionLog:t.forceDecisionLog===!0,forceEnergyHistory:t.forceEnergyHistory===!0}).finally(()=>{o.appView==="settings"&&o.mounted&&!o.nativeOpen&&h()})},r)})}var bq="@schema|openquatt.energy_history_import.v1",vq=850,wa=[{id:"days",label:"Alleen dagtotalen",fileLabel:"daily"},{id:"days_and_hours",label:"Dagtotalen + uurdetail",fileLabel:"daily-hourly"},{id:"hours",label:"Alleen uurdetail",fileLabel:"hourly"}],wq={forbidden:"Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",partition_unavailable:"Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",time_unavailable:"De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",empty_records:"Er zijn geen records verstuurd.",payload_too_large:"Deze importbatch is te groot. Probeer het bestand opnieuw te importeren."},qt={electricalInput:["electrical_input_wh","electricalInputWh","energy_hp_electric","hpElectric","hp_electric_wh","total_hp_electric_wh","totalHpElectric"],heatingInput:["heating_input_wh","heatingInputWh"],coolingInput:["cooling_input_wh","coolingInputWh"],heatpumpHeatOutput:["heatpump_heat_output_wh","heatpumpHeatOutputWh","energy_hp_heat","hpHeat","hp_heat_wh","total_hp_heat_wh","totalHpHeat"],heatpumpCoolingOutput:["heatpump_cooling_output_wh","heatpumpCoolingOutputWh","energy_hp_cooling","hpCooling","hp_cooling_wh","total_hp_cooling_wh","totalHpCooling"],boilerHeatOutput:["boiler_heat_output_wh","boilerHeatOutputWh","energy_boiler_heat","boilerHeat","boiler_heat_wh","total_boiler_heat_wh","totalBoilerHeat"],systemHeatOutput:["system_heat_output_wh","systemHeatOutputWh"]};function hn(e){let t=String(e||"").trim();return wa.some(r=>r.id===t)?t:"days_and_hours"}function df(e){let t=hn(e);return wa.find(r=>r.id===t)||wa[1]}function yq(e){let t=df(e),r=new Date().toISOString().slice(0,10);return`openquatt-energy-history-${t.fileLabel}-${r}.json`}async function Sq(){if(o.energyHistoryExportBusy)return;let e=hn(o.energyHistoryExportMode),t=df(e);if(Rt({energyHistoryExportMode:e,energyHistoryExportBusy:!0,energyHistoryExportError:"",energyHistoryExportNotice:""}),h(),bn()){o.energyHistoryExportBusy=!1,o.energyHistoryExportNotice=`Preview: ${t.label.toLowerCase()} zou als JSON worden gedownload.`,h();return}try{let r=await fetch(`${Ne()}/energy/history/export?mode=${encodeURIComponent(e)}`,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.blob();Kl(n,yq(e)),o.energyHistoryExportNotice=`${t.label} ge\xEBxporteerd.`}catch(r){o.energyHistoryExportError=`Exporteren mislukt. ${r.message}`}finally{o.energyHistoryExportBusy=!1,h()}}function pf(e=!1){let t=e?o.energyHistoryImportNotice:"";Rt({energyHistoryImportFileName:"",energyHistoryImportSource:"",energyHistoryImportRange:"",energyHistoryImportRecords:[],energyHistoryImportHourRecords:[],energyHistoryImportDuplicateCount:0,energyHistoryImportSkippedCount:0,energyHistoryImportInvalidCount:0,energyHistoryImportUnsupportedCount:0,energyHistoryImportBusy:!1,energyHistoryImportProgressPercent:0,energyHistoryImportError:"",energyHistoryImportNotice:t})}function mf(e){if(e==null||e==="")return 0;let t=String(e).trim(),r=gf(t);if(r)return r.dateKey;let n=t.match(/^\d{8}$/)?.[0]||t.match(/^(\d{4})-(\d{2})-(\d{2})$/)?.slice(1).join(""),a=n?ie(n):null;if(!a){let i=new Date(t);a=Number.isNaN(i.getTime())?null:ie(Fe(i))}return a&&a.year<=2099?a.key:0}function sf(e){let t=String(Math.round(Number(e)||0)).padStart(8,"0");return/^\d{8}$/.test(t)?`${t.slice(6,8)}-${t.slice(4,6)}-${t.slice(0,4)}`:""}function rs(e){return e.timestamp??e.time??e.datetime??e.date_time??e.dateTime}function gf(e){if(e==null||e==="")return null;let t=String(e).trim(),r=t.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i);if(!r)return null;let n=/(?:Z|[+-]\d{2}:?\d{2})$/i.test(t),a=Number(r[1]),i=Number(r[2]),l=Number(r[3]),c=Number(r[4]),d=Number(r[5]||"0"),u=Number(r[6]||"0");if([a,i,l,c,d,u].some(p=>Number.isNaN(p)))return null;let m=n?new Date(t):new Date(a,i-1,l,c,d,u,0);if(Number.isNaN(m.getTime()))return null;let v=m.getFullYear(),w=m.getMonth()+1,f=m.getDate(),g=m.getHours();return v<2020||v>2099||w<1||w>12||f<1||f>31?null:{dateKey:v*1e4+w*100+f,hour:g}}function ff(e){if(e==null||e==="")return null;let t=Number(String(e).trim().replace(",","."));return!Number.isFinite(t)||t<0||t>=4294967295?null:Math.round(t)}function Lo(e,t,r=null){for(let n of t){if(!Object.prototype.hasOwnProperty.call(e,n))continue;let a=ff(e[n]);if(a!==null)return a}return r}function Xi(e,t){return Lo(e,t)!==null}function hf(e){let t=mf(e.date_key??e.dateKey??e.date??e.from??rs(e));if(!t)return null;let r=Lo(e,qt.electricalInput),n=Lo(e,qt.heatpumpHeatOutput);if(r===null||n===null)return null;let a=Lo(e,qt.heatingInput,r),i=Lo(e,qt.coolingInput,0),l=Lo(e,qt.heatpumpCoolingOutput,0),c=Lo(e,qt.boilerHeatOutput,0),d=Lo(e,qt.systemHeatOutput,n+c),u=Xi(e,qt.heatingInput)||Xi(e,qt.coolingInput)||Xi(e,qt.heatpumpCoolingOutput)||Xi(e,qt.systemHeatOutput);return[a,i,l,c,d].some(m=>m===null)?null:{dateKey:t,electricalInputWh:r,heatingInputWh:a,coolingInputWh:i,heatpumpHeatOutputWh:n,heatpumpCoolingOutputWh:l,boilerHeatOutputWh:c,systemHeatOutputWh:d,hasFullImportFields:u}}function kq(e){let t=ff(e.hour??e.hour_of_day??e.hourOfDay);if(t!==null&&t>=0&&t<=23)return t;let r=rs(e);if(r){let n=String(r).trim(),a=gf(n);if(a)return a.hour;let i=new Date(n);if(!Number.isNaN(i.getTime()))return i.getHours();let l=n.match(/^(\d{1,2})(?::\d{2})/);if(l){let c=Number(l[1]);if(c>=0&&c<=23)return c}}return-1}function qq(e){let t=hf(e),r=kq(e);return!t||r<0||r>23?null:{...t,hour:r}}function Eq(e){let t=[],r=[],n="",a=!1,i=()=>{r.push(n),n=""},l=()=>{i(),r.some(d=>String(d).trim()!=="")&&t.push(r),r=[]};for(let d=0;d<e.length;d+=1){let u=e[d];a?u==='"'&&e[d+1]==='"'?(n+='"',d+=1):u==='"'?a=!1:n+=u:u==='"'?a=!0:u===","?i():u===`
`?l():u!=="\r"&&(n+=u)}if((n||r.length)&&l(),!t.length)return[];let c=t.shift().map(d=>String(d||"").trim());return t.map(d=>{let u={};return c.forEach((m,v)=>{m&&(u[m]=d[v]??"")}),u})}function es(e){return!e||typeof e!="object"||Array.isArray(e)||!e.summary||typeof e.summary!="object"||Array.isArray(e.summary)?e:{...e.summary,...e}}function Tq(e){let t=[],r=[];if(Array.isArray(e)){let l=e.map(es);return cf(l)?r.push(...l):t.push(...l),{dailyRows:t,hourlyRows:r,source:"JSON"}}let n=String(e?.schema||e?.import_schema||"JSON").trim()||"JSON",a=Array.isArray(e?.days)?e.days:Array.isArray(e?.daily)?e.daily:Array.isArray(e?.openquatt_import?.daily)?e.openquatt_import.daily:[],i=Array.isArray(e?.hourly)?e.hourly:Array.isArray(e?.hours)?e.hours:Array.isArray(e?.openquatt_import?.hourly)?e.openquatt_import.hourly:[];return t.push(...a.map(es)),r.push(...i.map(es)),a.forEach(l=>{Array.isArray(l?.samples)&&l.samples.forEach(c=>{r.push(es({...c,date:c.date??l.date}))})}),{dailyRows:t,hourlyRows:r,source:n}}function Cq(e,t){let r=String(t||"").trim();if(!r)throw new Error("Bestand is leeg.");let n=[],a=[],i="";if(r[0]==="{"||r[0]==="["){let g=Tq(JSON.parse(r));n=g.dailyRows,a=g.hourlyRows,i=g.source}else{let g=Eq(r);cf(g)||String(e||"").toLowerCase().includes("hour")?a=g:n=g,i="CSV"}let l=new Map,c=new Map,d=0,u=0;n.forEach(g=>{let p=hf(g);if(!p){u+=1;return}l.has(p.dateKey)&&(d+=1),l.set(p.dateKey,p)}),a.forEach(g=>{let p=qq(g);if(!p){u+=1;return}let b=`${p.dateKey}:${p.hour}`;c.has(b)&&(d+=1),c.set(b,p)});let m=[...l.values()].sort((g,p)=>g.dateKey-p.dateKey),v=[...c.values()].sort((g,p)=>g.dateKey-p.dateKey||g.hour-p.hour);if(!m.length&&!v.length)throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");let w=[...m.map(g=>g.dateKey),...v.map(g=>g.dateKey)].sort((g,p)=>g-p),f=w.length?`${sf(w[0])} t/m ${sf(w[w.length-1])}`:"";return{records:m,hourRecords:v,source:i,range:f,duplicates:d,invalid:u}}function xq(e){return e.hasFullImportFields?["day",e.dateKey,e.electricalInputWh,e.heatingInputWh,e.coolingInputWh,e.heatpumpHeatOutputWh,e.heatpumpCoolingOutputWh,e.boilerHeatOutputWh,e.systemHeatOutputWh].join("|"):["day",e.dateKey,e.electricalInputWh,e.heatpumpHeatOutputWh,e.boilerHeatOutputWh].join("|")}function Mq(e){let t=new Map;return e.forEach(r=>{t.has(r.dateKey)||t.set(r.dateKey,new Map),t.get(r.dateKey).set(r.hour,r)}),[...t.entries()].sort((r,n)=>r[0]-n[0]).map(([r,n])=>{let a=0,i=[],l=[...n.values()].some(c=>c.hasFullImportFields);for(let c=0;c<24;c+=1){let d=n.get(c);d&&(a|=1<<c),l?i.push(d?.electricalInputWh??0,d?.heatingInputWh??0,d?.coolingInputWh??0,d?.heatpumpHeatOutputWh??0,d?.heatpumpCoolingOutputWh??0,d?.boilerHeatOutputWh??0,d?.systemHeatOutputWh??0):i.push(d?.electricalInputWh??0,d?.heatpumpHeatOutputWh??0,d?.boilerHeatOutputWh??0)}return["hourday",r,a,...i].join("|")})}function bf(e){let t=new URLSearchParams;return t.set("records",[bq,...e].join(`
`)),o.energyHistoryCsrfToken&&t.set("csrf_token",o.energyHistoryCsrfToken),t}function $q(e){let t=[],r=[];return e.forEach(n=>{let a=[...r,n];r.length&&String(bf(a)).length>vq?(t.push(r),r=[n]):r=a}),r.length&&t.push(r),t}function Aq(e){let t=[];e.written>0&&t.push(`${e.written} dagrecords`),e.hourWritten>0&&t.push(`${e.hourWritten} uurdagen`);let r=t.length?`${t.join(" en ")} ge\xEFmporteerd.`:"Geen nieuwe records ge\xEFmporteerd.",n=[];return e.duplicates>0&&n.push(`${e.duplicates} al aanwezig`),e.skipped>0&&n.push(`${e.skipped} overgeslagen`),e.invalid>0&&n.push(`${e.invalid} ongeldig`),e.unsupported>0&&n.push(`${e.unsupported} onbekend`),n.length?`${r} (${n.join(", ")}.)`:r}async function _q(e){let t=await fetch(`${Ne()}/energy/history/import`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:bf(e)}),r=await t.text(),n={};try{n=r?JSON.parse(r):{}}catch{n={}}if(!t.ok||n.ok===!1){let a=n.error?String(n.error):"";throw new Error(wq[a]||a||`HTTP ${t.status}`)}return n}function vf(e){let t=String(e||"").split(/\r?\n/).find(r=>r.startsWith("@csrf|"));return t?t.slice(6):""}async function Rq(){if(bn())return;let e=await fetch(`${Ne()}/energy/history?meta=1`,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);let t=vf(await e.text());if(!t)throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");o.energyHistoryCsrfToken=t}function Hq(e,t){o.energyHistoryImportProgressPercent=t>0?Math.min(99,Math.max(1,Math.round(e/t*100))):0,h()}async function Dq(e){if(pf(),!e){h();return}Rt({energyHistoryImportFileName:e.name||"exportbestand"});try{let t=Cq(e.name||"",await e.text());Rt({energyHistoryImportRecords:t.records,energyHistoryImportHourRecords:t.hourRecords,energyHistoryImportSource:t.source,energyHistoryImportRange:t.range,energyHistoryImportDuplicateCount:t.duplicates,energyHistoryImportInvalidCount:t.invalid})}catch(t){o.energyHistoryImportError=`Bestand kon niet worden gelezen. ${t.message}`}h()}function Nq(){let e=document.createElement("input");e.type="file",e.accept=".json,.csv,application/json,text/csv,text/plain",e.style.position="fixed",e.style.left="-1000px",e.style.top="0",e.addEventListener("change",()=>{let t=e.files&&e.files[0]?e.files[0]:null;window.setTimeout(()=>e.remove(),0),Dq(t)},{once:!0}),document.body.appendChild(e),e.click()}async function Oq(){if(o.energyHistoryImportBusy)return;let e=[...o.energyHistoryImportRecords.map(xq),...Mq(o.energyHistoryImportHourRecords)];if(!e.length){o.energyHistoryImportError="Kies eerst een exportbestand met dag- of uurrecords.",h();return}if(o.energyHistoryImportBusy=!0,o.energyHistoryImportError="",o.energyHistoryImportNotice="",o.energyHistoryImportProgressPercent=1,h(),bn()){let n=new Set(o.energyHistoryImportHourRecords.map(a=>a.dateKey)).size;o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,o.energyHistoryImportNotice=`Preview: ${o.energyHistoryImportRecords.length} dagrecords en ${n} uurdagen zouden worden ge\xEFmporteerd.`,h();return}let t={written:0,hourWritten:0,duplicates:0,skipped:0,invalid:0,unsupported:0},r=0;try{await Rq();let n=$q(e);for(let a of n){let i=await _q(a);t.written+=Number(i.written||0),t.hourWritten+=Number(i.hour_written||0),t.duplicates+=Number(i.duplicates||0),t.skipped+=Number(i.skipped||0),t.invalid+=Number(i.invalid||0),t.unsupported+=Number(i.unsupported||0),r+=a.length,Hq(r,e.length)}o.energyHistoryImportProgressPercent=100,o.energyHistoryImportNotice=Aq(t),o.energyHistoryImportError="",o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,await os({forceMissing:!0,forceEnergyHistory:!0})}catch(n){o.energyHistoryImportError=`Importeren mislukt. ${n.message}`}finally{o.energyHistoryImportBusy=!1,o.energyHistoryImportProgressPercent=0,h()}}function Pq(){return Zt()||o.appView==="settings"&&o.systemModal==="history-storage"}function ya(){o.settingsBackupDraft=null,o.settingsBackupMqttPassword="",o.settingsBackupError="",o.settingsBackupBusy=!1}function Lq(){return{device:tt(),installation:Ot(),topology:typeof ne=="function"?ne():"",firmware_version:ce(),firmware_channel:String(T("firmwareUpdateChannel")||T("releaseChannelText")||"").trim()}}function wf(e){let t=I[e];if(!t)return;if(e==="setupComplete")return si();let r=T(e);if(r===""||r===null||r===void 0)return;if(t.domain==="switch"||t.domain==="binary_sensor")return C(e);if(t.domain==="number"){let a=pe(r);return Number.isNaN(a)?void 0:a}return t.domain==="time"?At(r)||void 0:t.domain==="datetime"?Xe(r)||void 0:String(r||"").trim()||void 0}function yf(e=null){let t={};return Jt.forEach(r=>{let n={};r.keys.forEach(a=>{let i=wf(a);i!==void 0&&(n[a]=i)}),t[r.id]=n}),{schema_version:Xs,exported_at:new Date().toISOString(),source:Lq(),settings:t,mqtt:e}}async function Sf(){let e=await fetch("/mqtt/status",{cache:"no-store"});if(e.status===404)return null;if(!e.ok)throw new Error(`MQTT-status HTTP ${e.status}`);return e.json()}function Iq(e=yf()){let t=String(e.exported_at||new Date().toISOString()).replace(/[:.]/g,"-").replace(/T/,"_").replace(/Z$/,"Z");return`${String(e.source?.installation||"OpenQuatt").replace(/\s+/g,"-").toLowerCase()}-settings-backup-${t}.json`}function Wc(e){let t=I[e];return t?.name?t.name:e.replaceAll(/([a-z])([A-Z])/g,"$1 $2").replaceAll(/_/g," ").trim()}function lf(e,t){if(t==null||t==="")return"\u2014";let r=I[e];return r?r.domain==="number"?Y(e,t):r.domain==="time"?At(t)?.slice(0,5)||"\u2014":r.domain==="datetime"?Xe(t)||"\u2014":r.domain==="switch"||r.domain==="binary_sensor"?t?"Aan":"Uit":String(t).trim()||"\u2014":String(t).trim()||"\u2014"}function Fq(e){switch(e){case"same":return"Gelijk";case"different":return"Wijkt af";case"missing":return"Ontbreekt in backup";case"current-missing":return"Niet op huidige installatie";case"optional-missing":case"optional-unavailable":return"Ontbreekt";default:return"Onbekend"}}function Bc(e){let t=e?.settings&&typeof e.settings=="object"?e.settings:{},r=e?.source&&typeof e.source=="object"?e.source:{},n=Ad,a=0,i=0,l=0,c=0,d=0,u=0,m=0,v=0,w=Jt.map(f=>{let g=t[f.id]&&typeof t[f.id]=="object"?t[f.id]:{},p=0,b=0,S=0,k=0,E=0,q=0,M=0,_=f.keys.map(H=>{let L=!!I[H]?.optional,W=Object.prototype.hasOwnProperty.call(g,H),x=W?g[H]:void 0,O=wf(H),D=y(H),N=W?lf(H,x):L?"Niet op huidige installatie":"Ontbreekt in backup",J=D?lf(H,O):L?"Niet beschikbaar op huidige installatie":"Ontbreekt op huidige installatie",P="same";return!W&&L?P="optional-missing":W?D?JSON.stringify(O)!==JSON.stringify(x)&&(P="different"):P=L?"optional-unavailable":"current-missing":P="missing",D&&(M+=1,v+=1),P!=="same"&&(q+=1,m+=1),L?(E+=1,W?(S+=1,l+=1):(k+=1,c+=1)):W?(p+=1,a+=1):(b+=1,i+=1),{key:H,label:Wc(H),optional:L,hasBackupValue:W,backupDisplay:N,currentDisplay:J,status:P,statusLabel:Fq(P)}});return u+=f.keys.filter(H=>!I[H]?.optional).length,{id:f.id,label:f.label,present:p,currentPresent:M,requiredTotal:f.keys.filter(H=>!I[H]?.optional).length,optionalTotal:E,optionalPresent:S,optionalMissing:k,requiredMissing:b,total:f.keys.length,differenceCount:q,rows:_}});return Object.entries(t).forEach(([f,g])=>{if(!Jt.some(p=>p.id===f)){d+=1;return}!g||typeof g!="object"||Object.keys(g).forEach(p=>{n.has(p)||(d+=1)})}),{source:r,sectionSummaries:w,requiredPresent:a,requiredMissing:i,requiredAvailable:u,optionalPresent:l,optionalMissing:c,unknown:d,differenceCount:m,currentPresent:v,requiredTotal:u,total:yo.length}}function jq(e,t=""){let r=JSON.parse(e);if(!r||typeof r!="object")throw new Error("Backupbestand bevat geen JSON-object.");let n=Number(r.schema_version??r.schemaVersion??0);if(!Number.isInteger(n)||n<1||n>Xs)throw new Error("Onbekende backupversie.");let a=r.settings&&typeof r.settings=="object"?r.settings:{},i=n>=2?tf(r.mqtt):null,l={schema_version:n,exported_at:String(r.exported_at||""),source:r.source&&typeof r.source=="object"?r.source:{},settings:a,mqtt:i,file_name:t||""};return l.summary=Bc(l),l}async function Wq(){o.settingsBackupBusy=!0,o.controlError="",o.controlNotice="",h();try{await z(yo,"all");let e=await Sf();return yf(ef(e))}finally{o.settingsBackupBusy=!1,h()}}async function Bq(){if(!o.settingsBackupBusy)try{let e=await Wq();gm(Iq(e),e),o.controlNotice="Settings-backup gedownload.",h()}catch(e){o.controlError=`Backup exporteren mislukt. ${e.message}`,h()}}async function kf(e){if(!(!e||o.settingsBackupBusy)){o.settingsBackupBusy=!0,o.settingsBackupDraft=null,o.settingsBackupMqttPassword="",o.settingsBackupRestoreResult=null,o.settingsBackupError="",o.controlError="",o.controlNotice="",h();try{let t=await e.text();await z(yo,"all");let r=jq(t,e.name||"");o.settingsBackupDraft=r,o.systemModal="settings-backup-restore"}catch(t){o.settingsBackupDraft=null,o.settingsBackupError=`Backupbestand kon niet worden gelezen. ${t.message}`}finally{o.settingsBackupBusy=!1,h()}}}function je(e,t,r,n="",a="warning"){return{key:e,section:t,label:{"mqtt.config":"MQTT-configuratie"}[e]||(e.startsWith("mqtt.")?e.replace(/^mqtt\./,"MQTT ").replaceAll("_"," "):Wc(e)),reason:r,detail:n,severity:a}}function Vq(e){return rf(e?.settings,Jt).map(({section:t,key:r})=>({key:r,section:t,label:Wc(r),reason:"Onbekend veld",detail:"Deze firmware kent dit veld niet; de waarde is niet toegepast.",severity:"warning"}))}async function ts(e,t,r){let n=new URLSearchParams;n.set("csrf_token",t),Object.entries(r).forEach(([l,c])=>n.set(l,String(c)));let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:n.toString()}),i=await a.json().catch(()=>({}));if(!a.ok||i?.ok===!1)throw new Error(i?.error||`HTTP ${a.status}`)}async function Kq(e,t){if(!e)return null;if(ha(e)&&!t)throw new Error("MQTT-wachtwoord ontbreekt.");let r=await Sf(),n=String(r?.csrf_token||"");if(!r||!n)throw new Error("MQTT-configuratie is niet beschikbaar op deze firmware.");return await ts("/mqtt/save",n,{enabled:!1,broker:e.broker,port:e.port,username:e.username,password:t||"",clear_password:!e.password_was_set}),{csrfToken:n,mqtt:e}}async function zq(e,t){if(!e)return;let{csrfToken:r,mqtt:n}=e;for(let a of Ji)await ts("/mqtt/input/save",r,{input:a,enabled:n.input_enabled[a]}),t.push(`mqtt.input_enabled.${a}`);for(let a of Zi)await ts("/mqtt/input/retained/save",r,{input:a,accept_retained:n.input_accept_retained[a]}),t.push(`mqtt.input_accept_retained.${a}`);n.enabled&&await ts("/mqtt/save",r,{enabled:!0,broker:n.broker,port:n.port,username:n.username,password:"",clear_password:!1}),t.push("mqtt.config")}function qf(e,t){return e&&!t}function Uq(e,t,r){return!qf(e,t)||r}async function Gq(){let e=o.settingsBackupDraft;if(!e||o.settingsBackupBusy)return;let t=String(o.settingsBackupMqttPassword||"");if(ha(e.mqtt)&&!t){o.settingsBackupError="Vul het MQTT-wachtwoord in om deze backup te herstellen.",h();return}o.settingsBackupBusy=!0,o.settingsBackupError="",o.controlError="",o.controlNotice="",h();let r=[],n=[],a=Vq(e),i=[],l=!1,c=!1,d=!0,u=null,m=!1,v=e.mqtt?"":"Backup bevat geen MQTT-configuratie.";try{if(await z([...yo,"usageTelemetryEnabled"],"all"),c=C("setupComplete"),e.mqtt)try{u=await Kq(e.mqtt,t)}catch(p){v=String(p?.message||p),n.push(je("mqtt.config","mqtt","MQTT niet voorbereid",v,"error"))}for(let p of Jt){let b=e.settings?.[p.id]&&typeof e.settings[p.id]=="object"?e.settings[p.id]:{};for(let S of p.keys){if(!Object.prototype.hasOwnProperty.call(b,S)){n.push(je(S,p.label,"Ontbreekt in backup","De huidige firmwarewaarde of firmware-default is behouden."));continue}let k=b[S];if(S==="setupComplete"){l=k===!0;continue}if(S==="openquattEnabled")continue;if(of(S,k)){i.push({key:S,value:k,section:p});continue}if(!I[S]||!y(S)){n.push(je(S,p.label,"Niet beschikbaar","Deze instelling bestaat niet op de huidige installatie of firmware."));continue}try{await Bt(S,k),r.push(S)}catch(q){n.push(je(S,p.label,"Schrijven mislukt",String(q?.message||q),"error"))}}}if(u)try{await zq(u,r),m=!0}catch(p){v=String(p?.message||p),n.push(je("mqtt.config","mqtt","MQTT herstellen mislukt",`${v} MQTT blijft uitgeschakeld.`,"error"))}for(let{key:p,value:b,section:S}of i){if(!m){n.push(je(p,S.label,"MQTT-bron niet toegepast",`${v||"MQTT kon niet worden hersteld."} De huidige bronselectie is behouden.`,"error"));continue}if(!I[p]||!y(p)){n.push(je(p,S.label,"Niet beschikbaar","Deze instelling bestaat niet op de huidige installatie of firmware."));continue}try{await Bt(p,b),r.push(p)}catch(E){n.push(je(p,S.label,"Schrijven mislukt",String(E?.message||E),"error"))}}let w=e.settings?.operation||{};if(Object.prototype.hasOwnProperty.call(w,"openquattEnabled"))if(!y("openquattEnabled"))n.push(je("openquattEnabled","Bediening","Niet beschikbaar","De OpenQuatt-regeling kon niet naar de backupwaarde worden gezet."));else try{await Bt("openquattEnabled",w.openquattEnabled),r.push("openquattEnabled")}catch(p){n.push(je("openquattEnabled","Bediening","Schrijven mislukt",String(p?.message||p),"error"))}let f=qf(l,c),g=y("usageTelemetryEnabled");if(!Uq(l,c,g))d=!1,n.push(je("usageTelemetryEnabled","Installatie","Gebruiksstatistieken niet beschikbaar","Setup kan niet veilig worden afgerond zolang deze instelling ontbreekt.","error"));else if(f)try{if(await Bt("usageTelemetryEnabled",!1),!await af("usageTelemetryEnabled",!1))throw new Error("De controller bevestigde niet dat gebruiksstatistieken uitstaan.");r.push("usageTelemetryEnabled")}catch(p){d=!1,n.push(je("usageTelemetryEnabled","Installatie","Gebruiksstatistieken uitschakelen mislukt",String(p?.message||p),"error"))}if(l&&I.apply&&d)try{let p=await fetch(Q("button","Complete setup","press"),{method:"POST"});if(!p.ok)throw new Error(`HTTP ${p.status}`);r.push("setupComplete")}catch(p){n.push(je("setupComplete","Installatie","Setup bevestigen mislukt",String(p?.message||p),"error"))}else l&&!d?n.push(je("setupComplete","Installatie","Setup bewust niet afgerond","Gebruiksstatistieken konden niet veilig worden uitgeschakeld.","error")):Object.prototype.hasOwnProperty.call(e.settings?.installation||{},"setupComplete")&&n.push(je("setupComplete","Installatie","Bewust niet toegepast","De setup stond in de backup niet als voltooid."));try{await Ee()}catch{}o.settingsBackupRestoreResult={applied:r,skipped:n,unknown:a,mqttIncluded:!!e.mqtt,sourceSchemaVersion:e.schema_version},o.systemModal="settings-backup-success",o.controlNotice=`Backup hersteld (${r.length} toegepast${n.length?`, ${n.length} niet toegepast`:""}${a.length?`, ${a.length} onbekend`:""}).`,ya()}catch(w){o.settingsBackupError=`Backup herstellen mislukt. ${w.message}`,o.settingsBackupMqttPassword=""}finally{o.settingsBackupBusy=!1,h()}}function bn(){return!1}async function Vc(e={}){if(!vt()){let n=!!(o.trendHistoryRaw||o.trendHistoryError);return o.trendHistoryRaw="",o.trendHistoryError="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=0,n}if(bn())return!1;let t=e.force===!0,r=Date.now();if(!t&&o.trendHistoryFetchPromise)return o.trendHistoryFetchPromise;if(!t&&(o.trendHistoryRaw||o.trendHistoryError)&&r-Number(o.trendHistoryLastFetchAt||0)<Rn)return!1;o.trendHistoryFetchPromise=(async()=>{let n=va(o.trendWindowHours||$t);n!==o.trendWindowHours&&fn(n);let a=await fetch(`${Ne()}/trends/history?hours=${encodeURIComponent(String(n))}`,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);let i=await a.text(),l=i.split(/\r?\n/),c=Number.NaN,d=i;l.length&&l[0].startsWith("@now|")&&(c=Number(l[0].slice(5)),d=l.slice(1).join(`
`));let u=`${n}|${d.length}|${d.slice(0,120)}|${d.slice(-120)}`,m=Number.isFinite(o.trendHistoryNowMs),w=Number.isFinite(c)?!m||o.trendHistoryNowMs!==c:m,f=d!==o.trendHistoryRaw||o.trendHistoryError!==""||o.trendHistorySignature!==u||w;return o.trendHistoryRaw=d,o.trendHistoryError="",o.trendHistorySignature=u,o.trendHistoryNowMs=Number.isFinite(c)?c:Number.NaN,o.trendHistoryLastFetchAt=Date.now(),f})();try{return await o.trendHistoryFetchPromise}catch(n){let a=`Trendhistorie kon niet worden geladen. ${n.message}`,i=o.trendHistoryError!==a;return o.trendHistoryError=a,o.trendHistoryRaw="",o.trendHistorySignature="",o.trendHistoryNowMs=Number.NaN,o.trendHistoryLastFetchAt=Date.now(),i}finally{o.trendHistoryFetchPromise=null}}async function Tr(e={}){if(!y("lifetimeEnergyHistoryEnabled")&&!bn()){let a=!!(o.energyHistoryRaw||o.energyHistoryError);return o.energyHistoryRaw="",o.energyHistoryError="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=0,o.energyHistoryRequestQuery="",o.energyHistoryFetchQuery="",o.energyHistoryCsrfToken="",a}let t=e.force===!0,r=Date.now(),n=e.metaOnly===!0?"?meta=1":typeof ba=="function"?ba():"";if(!t&&o.energyHistoryFetchPromise&&o.energyHistoryFetchQuery===n)return o.energyHistoryFetchPromise;if(!t&&o.energyHistoryRequestQuery===n&&(o.energyHistoryRaw||o.energyHistoryError)&&r-Number(o.energyHistoryLastFetchAt||0)<Rn)return!1;o.energyHistoryFetchQuery=n,o.energyHistoryFetchPromise=(async()=>{let a=async p=>{let b=await fetch(`${Ne()}/energy/history${p}`,{cache:"no-store"});if(!b.ok)throw new Error(`HTTP ${b.status}`);return b.text()},i=n,l=await a(i);if(e.metaOnly!==!0&&i.includes("meta=1")&&typeof ba=="function"){let p=o.energyHistoryRaw;o.energyHistoryRaw=l;let b=ba();o.energyHistoryRaw=p,b&&b!==i&&(i=b,l=await a(i))}let c=l.split(/\r?\n/),d=vf(l)||o.energyHistoryCsrfToken,u=Number.NaN;c.forEach(p=>{p.startsWith("@now|")&&(u=Number(p.slice(5)))});let m=`${l.length}|${l.slice(0,120)}|${l.slice(-120)}`,v=Number.isFinite(o.energyHistoryNowMs),f=Number.isFinite(u)?!v||o.energyHistoryNowMs!==u:v,g=l!==o.energyHistoryRaw||o.energyHistoryError!==""||o.energyHistorySignature!==m||f||d!==o.energyHistoryCsrfToken;return o.energyHistoryRaw=l,o.energyHistoryError="",o.energyHistorySignature=m,o.energyHistoryNowMs=Number.isFinite(u)?u:Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=i,o.energyHistoryCsrfToken=d,g})();try{return await o.energyHistoryFetchPromise}catch(a){let i=`Energiehistorie kon niet worden geladen. ${a.message}`,l=o.energyHistoryError!==i;return o.energyHistoryError=i,o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryNowMs=Number.NaN,o.energyHistoryLastFetchAt=Date.now(),o.energyHistoryRequestQuery=n,o.energyHistoryCsrfToken="",l}finally{o.energyHistoryFetchPromise=null}}im({refreshEnergyHistoryData:Tr,refreshSettingsStorageState:os,refreshTrendHistoryData:Vc,refreshTrendHistoryMetadata:uf,shouldRefreshSettingsStorageForCurrentSurface:Pq});var Qq={"flush-trend-history":({triggerNamedButton:e})=>e("trendHistoryFlush",{successNotice:"Diagnosegeschiedenis is opgeslagen.",errorPrefix:"Diagnosegeschiedenis kon niet worden opgeslagen",refreshKeys:eo(),refreshDelayMs:500}).then(()=>{Io(void 0,{forceTrendHistory:!0})}),"flush-decision-log-history":({triggerNamedButton:e})=>e("decisionLogHistoryFlush",{successNotice:"Beslisloghistorie is opgeslagen.",errorPrefix:"Beslisloghistorie kon niet worden opgeslagen",refreshKeys:eo(),refreshDelayMs:500}).then(()=>{o.decisionLogStorageMetadataLastFetchAt=0,Io(void 0,{forceDecisionLog:!0})}),"clear-decision-log-history":({triggerNamedButton:e})=>{if(window.confirm(`Beslisloghistorie wissen?

Alle bewaarde gebeurtenissen worden verwijderd. De actuele beslislog blijft beschikbaar.`))return e("decisionLogHistoryClear",{successNotice:"Beslisloghistorie is gewist.",errorPrefix:"Beslisloghistorie kon niet worden gewist",refreshKeys:eo(),refreshDelayMs:500}).then(()=>{o.decisionLogStorageMetadataLastFetchAt=0,Io(void 0,{forceDecisionLog:!0})})},"save-lifetime-energy-history":({triggerNamedButton:e})=>e("lifetimeEnergyHistoryCapture",{successNotice:"Energiehistorie is opgeslagen.",errorPrefix:"Energiehistorie kon niet worden opgeslagen",refreshKeys:eo(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,Io(),o.appView==="results"&&Tr({force:!0}).then(()=>h())}),"clear-lifetime-energy-history":({triggerNamedButton:e})=>{if(window.confirm(`Energiehistorie wissen?

Alle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.`))return e("lifetimeEnergyHistoryClear",{successNotice:"Energiehistorie is gewist.",errorPrefix:"Energiehistorie kon niet worden gewist",refreshKeys:eo(),refreshDelayMs:500}).then(()=>{o.energyHistoryRaw="",o.energyHistorySignature="",o.energyHistoryLastFetchAt=0,Io(),o.appView==="results"&&Tr({force:!0}).then(()=>h())})},"select-energy-history-import-file":()=>Nq(),"clear-energy-history-import-file":()=>{pf(),h()},"import-energy-history-file":()=>Oq(),"export-energy-history":()=>Sq(),"open-history-storage-modal":()=>{o.settingsStoragePage="overview",o.systemModal="history-storage",h();let e=os({forceMissing:!0,forceTrendHistory:!0,forceDecisionLog:!0,forceEnergyHistory:!0}).finally(()=>{o.systemModal==="history-storage"&&h()});return Io([1e3,3e3,7e3]),e},"open-storage-diagnosis":()=>{o.settingsStoragePage="diagnosis",h()},"open-storage-decision-log":()=>{o.settingsStoragePage="decision-log",h()},"open-storage-energy":()=>{o.settingsStoragePage="energy",h()},"back-storage-overview":()=>{o.settingsStoragePage="overview",h()},"download-settings-backup":()=>Bq(),"open-settings-backup-import":()=>{o.settingsBackupMqttPassword="",o.settingsBackupRestoreResult=null,o.settingsBackupError="",o.systemModal="settings-backup-import",h()},"confirm-settings-backup-restore":()=>Gq()};function Ef(e,t){return le(Qq,e,t)}function Kc(e,t,r="",n=!1){return`
      <div class="oq-settings-storage-summary-metric${n?" is-on":""}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<em>${s(r)}</em>`:""}
      </div>
    `}function Cf(e){let t=String(e||"").trim(),r=t.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);return r?`${r[1]} ${r[1]==="1"?"dag":"dagen"}`:t}function ns(e,t,r,n="",a="",i=""){if(!y(e))return"";let l=!!T(e),c=o.loadingEntities||o.busyAction===`switch-${e}`;return`
      <article class="oq-settings-storage-row" data-oq-settings-field="${s(e)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${s(t)}</h4>
            ${i?`<span>${s(i)}</span>`:""}
          </div>
          <p>${s(r)}</p>
          ${sc(e,l,n,a)}
        </div>
        ${ut(e,t,l,c)}
      </article>
    `}function Yq(e,t,r,n=""){if(!y(e))return"";let a=o.entities[e],i=Array.isArray(a?.option)?a.option:[],l=String(T(e)||"");return i.length?`
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
            ${i.map(c=>`<option value="${s(c)}" ${c===l?"selected":""}>${s(Te(c))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `:""}function Jq(e){return y(e)||!!I[e]&&!o.optionalMissingEntities?.[e]}function Sa(e,t,r,n={}){if(!Jq(e))return"";let a=y(e),i=a&&(o.loadingEntities||o.busyAction===e),l=n.disabled===!0||!a,c=n.buttonClass||"oq-helper-button oq-helper-button--ghost";return`
      <button
        class="${s(c)}"
        type="button"
        data-oq-action="${s(r)}"
        ${i||l?"disabled":""}
      >
        ${s(i&&n.busyLabel||t)}
      </button>
    `}function Zq(){return o.trendHistoryMetadata&&typeof o.trendHistoryMetadata=="object"?o.trendHistoryMetadata:{}}function vn(){return!!o.trendHistoryMetadataSignature}function wn(){return!!(o.energyHistoryRaw||o.energyHistorySignature)}function pt(e){return e?"Niet geladen":"Laden..."}function We(e,t="\u2014"){if(y(e))return Ce(e);let r=Xq(e);return r==null||r===""?t:r}function Xq(e){let t=Zq();if(e==="trendHistoryFlashAvailable")return vn()?t.available||"Alleen live":pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashOldest")return vn()?t.oldest||"Geen data":pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashNewest")return vn()?t.newest||"Geen data":pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashLastFlush")return vn()?t.lastFlush||"Geen data":pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashSize")return vn()?is(t.sizeKb):pt(o.trendHistoryMetadataError);if(e==="trendHistoryFlashWrites")return vn()?ka(t.writes):pt(o.trendHistoryMetadataError);let r=Af(),a=String(o.energyHistoryRaw||"").includes("@day_retention|");return e==="lifetimeEnergyHistoryAvailable"?wn()?a&&!r.dayPartitionAvailable?"Niet beschikbaar":xf(r.storedDayCount,"Geen data"):pt(o.energyHistoryError):e==="lifetimeEnergyHistoryOldest"?wn()?Tf(r.oldestDateKey):pt(o.energyHistoryError):e==="lifetimeEnergyHistoryNewest"?wn()?Tf(r.newestDateKey):pt(o.energyHistoryError):e==="lifetimeEnergyHistoryLastWrite"?wn()?as(r.dayLastWriteTimestampS):pt(o.energyHistoryError):e==="lifetimeEnergyHistorySize"?wn()?is(r.dayStorageKb):pt(o.energyHistoryError):e==="lifetimeEnergyHistoryWrites"?wn()?ka(r.dayWriteCount):pt(o.energyHistoryError):null}function xf(e,t="Geen data"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:`${Math.round(r)} ${Math.round(r)===1?"dag":"dagen"}`}function Mf(e,t="Nog geen historie"){let r=Math.max(0,Math.round(Number(e)||0));return r<=0?t:`${r} ${r===1?"gebeurtenis":"gebeurtenissen"}`}function $f(){return o.decisionLogStorageMetadata&&typeof o.decisionLogStorageMetadata=="object"?o.decisionLogStorageMetadata:{}}function is(e,t="\u2014"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:`${Math.round(r)} kB`}function ka(e,t="0"){let r=Number(e);return!Number.isFinite(r)||r<=0?t:String(Math.round(r))}function Tf(e){let t=ie(e);return t?t.date.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"}):"Geen data"}function as(e,t="Geen data"){let r=Number(e);if(!Number.isFinite(r)||r<=0)return t;let n=new Date(r*1e3),a=n.toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit"}),i=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return`${a} ${i}`}function Af(){return Ui(o.energyHistoryRaw)}function eE(e){let t=Array.isArray(e.items)?e.items:[];return`
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
    `}function zc(e){let t=e.filter(Boolean);return t.length?`
      <details class="oq-settings-storage-technical"${o.settingsStorageDetailsOpen?" open":""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Bewaartermijn, ruimte en opslagmomenten</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${s(t.map(r=>`${r.shortLabel}: ${r.primary}`).join(" \xB7 "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${t.map(eE).join("")}
        </div>
      </details>
    `:""}function _f(){if(!y("trendHistoryEnabled")&&!y("decisionLogHistoryEnabled")&&!y("lifetimeEnergyHistoryEnabled"))return"";let e=C("trendHistoryEnabled"),t=e&&C("trendHistoryFlashEnabled"),r=y("lifetimeEnergyHistoryEnabled"),n=r&&C("lifetimeEnergyHistoryEnabled"),a=y("decisionLogHistoryEnabled"),i=a&&C("decisionLogHistoryEnabled"),l=$f(),c=t?We("trendHistoryFlashAvailable","Alleen live"):"Alleen live",d=r?Cf(We("lifetimeEnergyHistoryAvailable","Geen data")):"Geen data";return re("Diagnose","Gegevens bewaren","Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",`
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${y("trendHistoryEnabled")?Kc("Diagnose",t?c:e?"Alleen live":"Uit",t?"Blijft bewaard na herstart":"Tijdelijk",e):""}
            ${a?Kc("Beslislog",i?Mf(l.storedEvents):"Alleen sinds herstart",i?"Maximaal 7 dagen":"Tijdelijk",i):""}
            ${r?Kc("Energie",d,n?"Blijft bewaard na herstart":"Uit",n):""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `)}function tE(){if(!y("lifetimeEnergyHistoryEnabled"))return"";let e=o.energyHistoryImportRecords.length,t=new Set(o.energyHistoryImportHourRecords.map(c=>c.dateKey)).size,r=[];e>0&&r.push(`${e} dagrecords`),t>0&&r.push(`${t} uurdagen`),o.energyHistoryImportRange&&r.push(o.energyHistoryImportRange),o.energyHistoryImportSource&&r.push(o.energyHistoryImportSource),o.energyHistoryImportInvalidCount>0&&r.push(`${o.energyHistoryImportInvalidCount} regels niet gebruikt`);let n=!!o.energyHistoryImportFileName,a=e>0||t>0,i=Number(o.energyHistoryImportProgressPercent||0),l=o.energyHistoryImportBusy?`Importeren...${i>0?` (${i}%)`:""}`:"Importeren";return`
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
    `}function oE(){if(!y("lifetimeEnergyHistoryEnabled"))return"";let e=hn(o.energyHistoryExportMode),t=wa.map(n=>`
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
    `}function Rf(){let e=["diagnosis","decision-log","energy"].includes(o.settingsStoragePage)?o.settingsStoragePage:"overview",t=y("trendHistoryEnabled")&&C("trendHistoryEnabled"),r=t&&y("trendHistoryFlashEnabled")&&C("trendHistoryFlashEnabled"),n=y("decisionLogHistoryEnabled"),a=n&&C("decisionLogHistoryEnabled"),i=$f(),l=Mf(i.storedEvents),c=y("lifetimeEnergyHistoryEnabled"),d=c&&C("lifetimeEnergyHistoryEnabled"),u=c?We("lifetimeEnergyHistoryAvailable","Geen data"):"Geen data",m=Cf(u),v=y("lifetimeEnergyHistoryClear")&&!["Geen data","\u2014"].includes(u),w=t&&y("trendHistoryFlush"),f=a&&y("decisionLogHistoryFlush"),g=y("lifetimeEnergyHistoryCapture"),p=Af(),b=String(o.energyHistoryRaw||"").includes("@hour_retention|"),S=b&&!p.hourPartitionAvailable,k=b?S?"Alleen live":xf(p.hourStoredDayCount,"Geen uurdata"):"Laden...",E=b&&!S?is(p.hourStorageKb):"\u2014",q=b&&!S?ka(p.hourWriteCount):"\u2014",M=b&&!S?as(p.hourLastWriteTimestampS):"Geen data",_=e==="overview"?"":`
      <button class="oq-settings-storage-back" type="button" data-oq-action="back-storage-overview">
        <span aria-hidden="true">\u2190</span> Opslagoverzicht
      </button>`,H=(N,J,P,B,X,Pe)=>`
      <button class="oq-settings-storage-hub-item${Pe?" is-on":""}" type="button" data-oq-action="${s(N)}">
        <span class="oq-settings-storage-hub-copy">
          <span>${s(J)}</span>
          <strong>${s(P)}</strong>
          <em>${s(B)}</em>
        </span>
        <span class="oq-settings-storage-hub-status">
          <strong>${s(X)}</strong>
          <span aria-hidden="true">\u203A</span>
        </span>
      </button>`,F={title:"Diagnosegeschiedenis",meta:"Technische details",shortLabel:"Diagnose",primary:We("trendHistoryFlashAvailable","Alleen live"),note:`Laatste meting: ${We("trendHistoryFlashNewest","Geen data")}`,items:[{label:"Bewaarperiode",value:We("trendHistoryFlashAvailable","Alleen live")},{label:"Opslagruimte",value:We("trendHistoryFlashSize")},{label:"Opslagacties",value:We("trendHistoryFlashWrites","0")},{label:"Laatst opgeslagen",value:We("trendHistoryFlashLastFlush","Geen data")}]},L={title:"Beslisloghistorie",meta:"Technische details",shortLabel:"Beslislog",primary:a?l:"Alleen sinds herstart",note:i.lastFlushEpochS?`Laatst opgeslagen: ${as(i.lastFlushEpochS)}`:"Nog niet opgeslagen",items:[{label:"Aantal",value:ka(i.storedEvents)},{label:"Ruimte",value:is(Number(i.storageBytes||0)/1024)},{label:"Schrijfacties",value:ka(i.writeCount)},{label:"Laatste opslag",value:as(i.lastFlushEpochS)}]},W=[{title:"Dagtotalen",meta:"Technische details",shortLabel:"Dag",primary:m,note:`${We("lifetimeEnergyHistoryOldest","Geen data")} t/m ${We("lifetimeEnergyHistoryNewest","Geen data")}`,items:[{label:"Dagen bewaard",value:m},{label:"Opslagruimte",value:We("lifetimeEnergyHistorySize")},{label:"Opslagacties",value:We("lifetimeEnergyHistoryWrites","0")},{label:"Laatst opgeslagen",value:We("lifetimeEnergyHistoryLastWrite","Geen data")}]},y("lifetimeEnergyHourRetention")?{title:"Uurdetail",meta:"Technische details",shortLabel:"Uur",primary:k,note:"Detail voor de daggrafiek",items:[{label:"Dagen bewaard",value:k},{label:"Opslagruimte",value:E},{label:"Opslagacties",value:q},{label:"Laatst opgeslagen",value:M}]}:null],x="Gegevens bewaren",O="Kies welk soort historie je wilt bekijken of aanpassen. Dit verandert niets aan de aansturing van je warmtepomp.",D=`
      <div class="oq-settings-storage-hub">
        ${H("open-storage-diagnosis","Diagnose","Technische meetgegevens","Temperaturen, doorstroming en vermogen voor grafieken en support.",r?We("trendHistoryFlashAvailable","Historie actief"):t?"Alleen live":"Uit",t)}
        ${n?H("open-storage-decision-log","Beslislog","Keuzes van de controller","Exacte momenten, redenen, bronwissels en bescherming.",a?`${l} \xB7 max. 7 dagen`:"Alleen sinds herstart",a):""}
        ${c?H("open-storage-energy","Resultaten","Energiehistorie","Dagtotalen en uurdetail voor opbrengst, verbruik en rendement.",d?m:"Uit",d):""}
      </div>
      <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> gegevens die worden bewaard, blijven beschikbaar na een herstart. Tijdelijke gegevens bestaan alleen zolang de controller online is.</p>`;return e==="diagnosis"?(x="Diagnosegegevens",O="Beheer technische meetreeksen voor diagnosegrafieken en hulp bij problemen.",D=`${_}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${ns("trendHistoryEnabled","Recente diagnosegegevens","Bewaar de laatste meetpunten zolang de controller online is.","Deze gegevens zijn tijdelijk en verdwijnen na een herstart.","Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.","Tijdelijk")}
          ${ns("trendHistoryFlashEnabled","Diagnosegeschiedenis bewaren","Bewaar recente diagnosegegevens ook na een herstart of update.","OpenQuatt slaat ongeveer ieder uur een blok op.","Bestaande geschiedenis blijft staan.","Blijft bewaard na herstart")}
          ${w?`<div class="oq-settings-storage-inline-action"><div><h4>Diagnose nu opslaan</h4><p>Maak v\xF3\xF3r een update of herstart een extra opslagmoment.</p></div>${Sa("trendHistoryFlush","Nu opslaan","flush-trend-history",{disabled:!r,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${zc([F])}`):e==="decision-log"?(x="Beslisloghistorie",O="Bewaar exacte controllerkeuzes en gebeurtenissen, maximaal zeven dagen.",D=`${_}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${ns("decisionLogHistoryEnabled","Beslisloghistorie bewaren","Bewaar exacte momenten en redenen uit de beslislog.","De laatste zeven dagen blijven beschikbaar na een herstart of update.","De actuele beslislog blijft tijdelijk beschikbaar; bestaande historie blijft staan.","Blijft bewaard na herstart")}
          ${f?`<div class="oq-settings-storage-inline-action"><div><h4>Beslislog nu opslaan</h4><p>Sla nieuwe gebeurtenissen alvast op v\xF3\xF3r een update of herstart.</p></div>${Sa("decisionLogHistoryFlush","Nu opslaan","flush-decision-log-history",{disabled:!a,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${zc([L])}
      ${y("decisionLogHistoryClear")?`<details class="oq-settings-storage-advanced"${o.settingsStorageAdvancedOpen?" open":""}><summary data-oq-action="toggle-storage-advanced">Geavanceerd</summary><div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger"><div><h4>Beslisloghistorie wissen</h4><p>Verwijder alle bewaarde gebeurtenissen. De actuele beslislog blijft staan.</p></div>${Sa("decisionLogHistoryClear","Historie wissen","clear-decision-log-history",{disabled:Number(i.storedEvents||0)<=0,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}</div></details>`:""}`):e==="energy"&&(x="Energiehistorie",O="Beheer dagtotalen en uurdetail voor de Resultatenpagina.",D=`${_}<section class="oq-settings-storage-domain oq-settings-storage-domain--single">
        <div class="oq-settings-storage-domain-rows">
          ${ns("lifetimeEnergyHistoryEnabled","Dagtotalen bewaren","Bewaar elke dag een samenvatting van je energiegegevens.","Resultaten blijven beschikbaar na een herstart of update.","Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.","Blijft bewaard na herstart")}
          ${Yq("lifetimeEnergyHourRetention","Uurdetail bewaren","Kies hoelang OpenQuatt detail per uur bewaart voor de daggrafiek.","Bewaartermijn")}
          ${g?`<div class="oq-settings-storage-inline-action"><div><h4>Vandaag alvast opslaan</h4><p>Maak v\xF3\xF3r een update of herstart een extra opslagmoment.</p></div>${Sa("lifetimeEnergyHistoryCapture","Vandaag opslaan","save-lifetime-energy-history",{disabled:!d,busyLabel:"Opslaan..."})}</div>`:""}
        </div>
      </section>${zc(W)}
      <details class="oq-settings-storage-advanced"${o.settingsStorageAdvancedOpen?" open":""}><summary data-oq-action="toggle-storage-advanced">Geavanceerd</summary><div class="oq-settings-storage-advanced-body">${oE()}${tE()}${y("lifetimeEnergyHistoryClear")?`<div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger"><div><h4>Energiehistorie wissen</h4><p>Verwijder alle bewaarde dagtotalen en begin opnieuw.</p></div>${Sa("lifetimeEnergyHistoryClear","Historie wissen","clear-lifetime-energy-history",{disabled:!v,buttonClass:"oq-helper-button oq-helper-button--warning",busyLabel:"Wissen..."})}</div>`:""}</div></details>`),ee({id:"system",titleId:"oq-history-storage-modal-title",kicker:e==="overview"?"Gegevens":"Gegevens bewaren",title:x,copy:O,className:"oq-helper-modal--scrollable oq-settings-storage-modal",sectionAttributes:"data-oq-history-storage-scroller",closeAction:"close-system-modal",closeLabel:"Sluit gegevens bewaren",body:D,actions:'<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>'})}function Hf(){let e=o.settingsBackupBusy,t=yo.length,r=Jt.length;return re("Beheer","Backup en restore","Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",`
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
      `)}function Df(){let e=o.settingsBackupBusy;return ee({id:"system",titleId:"oq-backup-import-modal-title",kicker:"Beheer",title:"Backup herstellen",copy:"Kies een JSON-backup om de instellingen te vergelijken en daarna gericht terug te zetten.",className:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit backup import popup",body:`
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
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}`,actions:`<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>`})}function Nf(){let e=o.settingsBackupDraft;if(!e)return"";let t=e.summary||Bc(e),r=String(e.source?.installation||e.source?.device||"Onbekend"),n=Ot(),a=String(e.source?.firmware_version||"Onbekend"),i=String(e.source?.firmware_channel||"").trim()||"Onbekend",l=String(e.source?.topology||"").trim()||"Onbekend",c=ce(),d=typeof ne=="function"?ne():"",u=l!=="Onbekend"&&d&&l!==d,m=r!=="Onbekend"&&r!==n,v=e.mqtt,w=ha(v),f=w&&!String(o.settingsBackupMqttPassword||""),g=v?v.enabled?"Ingeschakeld":"Uitgeschakeld":"Niet in backup",p=v?`${v.broker||"Geen broker"}:${v.port} \xB7 ${v.password_was_set?"Wachtwoord niet opgeslagen":"Geen wachtwoord ingesteld"}`:"MQTT-configuratie en MQTT-afhankelijke bronselecties worden niet hersteld.",b=u||m?"De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed.":t.requiredMissing?"Ontbrekende velden houden hun firmware-default.":"Velden zonder waarde worden overgeslagen.";return ee({id:"system",titleId:"oq-backup-modal-title",kicker:"Beheer",title:"Backup herstellen",copy:"Deze backup zet alleen de instellingen terug die OpenQuatt in de web-app beheert. Klap een sectie open om backup- en huidige waarden naast elkaar te vergelijken.",className:"oq-helper-modal--wide oq-helper-modal--scrollable",sectionAttributes:"data-oq-settings-backup-restore-scroller",closeAction:"close-system-modal",closeLabel:"Sluit backup-popup",body:`
          <div class="oq-helper-modal-grid oq-settings-backup-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backup van</span>
              <strong class="oq-helper-modal-value">${s(r)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${s(l)} \xB7 Firmware: ${s(a)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${s(n)}</strong>
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
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">MQTT-configuratie</span>
              <strong class="oq-helper-modal-value">${s(g)}</strong>
              <span class="oq-helper-modal-subvalue">${s(p)}</span>
            </div>
          </div>
          ${w?`
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
                    ${S.rows.map(k=>`
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${s(k.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${s(k.label)}</strong>
                          <span>${s(k.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${s(k.status)}">
                            <span>Backup</span>
                            <strong>${s(k.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${s(k.status)}">
                            <span>Nu</span>
                            <strong>${s(k.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${t.unknown||t.requiredMissing||m?" oq-settings-action-note--warning":""}">${s(b)}</p>
          ${o.settingsBackupError?`<p class="oq-settings-backup-error">${s(o.settingsBackupError)}</p>`:""}`,actions:`
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${o.settingsBackupBusy?"disabled":""}>Annuleren</button>
        <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${o.settingsBackupBusy||f?"disabled":""}>${o.settingsBackupBusy?"Herstellen...":f?"Vul MQTT-wachtwoord in":"Herstellen"}</button>
      `})}function ss(){return[o.interfacePanelOpen?"open":"closed",o.nativeOpen?"native":"app",o.appView,o.complete?"complete":"incomplete",o.overviewTheme,o.hpVisualMode,G("installationTopology"),G("hardwareProfileText"),G("connectionText"),o.firmwareAdvancedOpen?"firmware-advanced-open":"firmware-advanced-closed",o.firmwareConnectionSwitchOpen?"connection-open":"connection-closed",o.firmwareTopologySwitchOpen?"topology-open":"topology-closed",o.updateManualUploadOpen?"upload-open":"upload-closed",o.updateTestFirmwareOpen?"test-open":"test-closed",o.updateTestFirmwareError,G("hpGeneration"),G("projectVersionText"),G("releaseChannelText"),G("controlModeOverride"),Uc()].join("|")}function Of(){if(!y("controlModeOverride"))return"";let e=String(T("controlModeOverride")||"Auto");if(e==="Auto")return"";let t=o.busyAction==="save-controlModeOverride",r=String(o.controlError||"").startsWith("CM Override")?`<p class="oq-helper-error" role="alert">${s(o.controlError)}</p>`:"";return`
      <aside class="oq-control-mode-override-banner" role="status" aria-live="polite">
        <div>
          <span>Testmodus actief</span>
          <strong>${s(fa(e))}</strong>
          <p>De normale moduskeuze is tijdelijk overruled. De controller keert uiterlijk 30 minuten na activering automatisch terug naar automatisch.</p>
          ${r}
        </div>
        <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="clear-control-mode-override" ${t?"disabled":""}>
          ${t?"Bezig...":"Terug naar automatisch"}
        </button>
      </aside>
    `}function Uc(){let e=Math.max(Number(o.lastEntityResponseAt||0),Number(o.lastEntitySyncAt||0)),t=Number(o.deviceReconnectStartedAt||0);return o.entitySyncFailureCount>0&&!o.deviceReconnectMode?"Bezig":e>0&&(!o.deviceReconnectMode||e>=t)?"Verbonden":o.deviceReconnectMode?To()?"Verbonden":o.deviceReconnectMode==="reconnect"?"Offline":"Bezig":y("status")&&!C("status")?"Offline":"Bezig"}function Gc(){return String(T("projectVersionText")||"").trim()||"\u2014"}function rE(){let e=Gc();return e&&e!=="\u2014"?e:Oo()}function ls(){let e=o.entities.espInternalTemp;if(!e)return"\u2014";let t=R("espInternalTemp");return Number.isNaN(t)?j("espInternalTemp"):U(t,1,e.uom||" \xB0C")}function nE(){let e=[["Netwerkstatus",Uc()],["IP-adres",en()]],t=String(T("wifiSsid")||"").trim();t&&e.push(["WiFi SSID",t]);let r=o.entities.wifiSignal;if(r){let n=R("wifiSignal");Number.isNaN(n)||e.push(["WiFi signaal",U(n,0,r.uom||" dBm")])}return e}function Pf(e){return e==="version"?"open-update-modal":e==="connectivity"?"open-connectivity-modal":e==="debugRecording"?"open-debug-recording-modal":e==="webserverLog"?"open-webserver-log-modal":e==="login"?"open-login-modal":""}function Lf(){return[["installation","Installatie",Ot()],["uptime","Uptime",Xr()],["connectivity","Connectiviteit",Uc()],["time","Tijd",ic()],["version","Versie",rE(),!!ye()],["debugRecording","Debugopname",Eg(),!0],["webserverLog","Logboek",$i(),!0]]}function If(){return vr()}function Ff(e){return e==="version"&&If()}function qa(){return`
      <div class="oq-helper-status-grid">
        ${Lf().map(([t,r,n,a])=>{let i=Pf(t),l=!!(a||i),c=Ff(t);return`
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
    `}function aE(){if(!o.root)return!1;let e=o.root.querySelector(".oq-helper-status-grid");if(!e)return!!o.root.querySelector(".oq-helper-hub");let t=Lf();if(e.querySelectorAll("[data-oq-header-status]").length!==t.length)return e.outerHTML=qa(),!0;for(let[n,a,i,l]of t){let c=e.querySelector(`[data-oq-header-status="${n}"]`);if(!c)return e.outerHTML=qa(),!0;let d=Pf(n),u=!!(l||d);if(c.tagName.toLowerCase()!==(u?"button":"div"))return e.outerHTML=qa(),!0;let m=c.querySelector(".oq-helper-status-label"),v=c.querySelector(".oq-helper-status-value");if(!m||!v)return e.outerHTML=qa(),!0;m.textContent!==a&&(m.textContent=a);let w=Ff(n),f=w?`<span class="oq-helper-status-value-text">${s(i)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>`:s(i);v.innerHTML!==f&&(v.innerHTML=f),u?c.setAttribute("data-oq-action",d):c.removeAttribute("data-oq-action"),c.classList.toggle("oq-helper-status-item--button",u),c.classList.toggle("oq-helper-status-item--attention",w)}return!0}function iE(){return""}function Qc(){return""}function jf(){let e=o.nativeOpen?"native":"app",t=If();return o.interfacePanelOpen?`
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
          ${qa()}
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
            ${Ec()}
            <button
              class="oq-helper-hub-toggle${t?" oq-helper-hub-toggle--attention":""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >${ge("more-horizontal","oq-helper-hub-toggle-icon")}${t?'<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>':""}</button>
          </div>
        </aside>
      `}function Wf(){let e=o.nativeOpen?"native":"app",t=o.nativeFrontendLoading?"ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief.":"De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.",r=o.controlError?`<p class="oq-native-surface-note oq-native-surface-note--error">${s(o.controlError)}</p>`:"";return`
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
    `}om({getSignature:ss,patch:aE});function Bf(){if(o.systemModal==="login")return Lg();if(o.systemModal==="api-security")return Pg();if(o.systemModal==="mqtt")return vm();if(o.systemModal==="mqtt-sensors")return wm();if(o.systemModal==="connectivity"){let e=nE();return ee({modalId:"system",titleId:"oq-system-modal-title",kicker:"Systeem",title:"Connectiviteit",closeAction:"close-system-modal",closeLabel:"Sluit systeem-popup",bodyMarkup:`
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
        `})}if(o.systemModal==="settings-backup-restore")return Nf();if(o.systemModal==="settings-backup-import")return Df();if(o.systemModal==="history-storage")return Rf();if(String(o.systemModal||"").startsWith("service-task-"))return Vg();if(o.systemModal==="settings-backup-success"){let e=o.controlNotice||"Backup hersteld.",t=o.settingsBackupRestoreResult||{applied:[],skipped:[],unknown:[],mqttIncluded:!1},r=[...t.skipped,...t.unknown],n=r.length?`
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
      `:"";return ee({modalId:"system",titleId:"oq-backup-success-modal-title",kicker:"Beheer",title:"Backup hersteld",closeAction:"close-system-modal",closeLabel:"Sluit bevestiging",className:"oq-helper-modal--wide oq-helper-modal--scrollable",bodyMarkup:`
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
        `})}if(o.systemModal==="control-mode-override-confirm"){let e=String(o.pendingControlModeOverride||""),t=o.busyAction==="save-controlModeOverride";return ee({modalId:"system",titleId:"oq-control-mode-override-modal-title",kicker:"Service \xB7 tijdelijke testmodus",title:`${fa(e)} activeren?`,closeAction:"close-system-modal",closeLabel:"Sluit testmodus-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">Deze keuze omzeilt tijdelijk de normale regelmodus. Gebruik dit alleen voor een gerichte test en houd de installatie tijdens de test in de gaten.</p>
          <p class="oq-settings-action-note oq-settings-action-note--warning">De override stopt automatisch na maximaal 30 minuten. Je kunt hem eerder be\xEBindigen via de waarschuwing bovenaan de web-app.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${t?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--warning" type="button" data-oq-action="confirm-control-mode-override" ${t?"disabled":""}>${t?"Activeren...":"Tijdelijk activeren"}</button>
          </div>
        `})}if(o.systemModal==="runtime-reset-confirm"){let e=y("resetRuntimeCountersHp1Hp2"),t=e?"resetRuntimeCountersHp1Hp2":"resetRuntimeCountersHp1",r=o.busyAction===t;return ee({modalId:"system",titleId:"oq-runtime-reset-modal-title",kicker:"Onderhoud",title:`${e?"Beide draaitijdbalansen":"Draaitijdbalans"} resetten?`,closeAction:"close-system-modal",closeLabel:"Sluit draaitijd-resetpopup",bodyMarkup:`
          <p class="oq-helper-modal-copy">De in OpenQuatt bijgehouden compressorlooptijd wordt op nul gezet${e?" voor beide warmtepompen":""}. Gebruik dit alleen na vervanging of wanneer de runtimebalans bewust opnieuw moet beginnen.</p>
          <p class="oq-settings-action-note oq-settings-action-note--warning">Dit wijzigt geen fysieke teller in de warmtepomp zelf. De nieuwe waarden kunnen binnen ongeveer \xE9\xE9n minuut zichtbaar worden.</p>
          ${o.controlError?`<p class="oq-helper-error" role="alert">${s(o.controlError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${r?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--warning" type="button" data-oq-action="confirm-runtime-reset" ${r?"disabled":""}>${r?"Resetten...":"Tellers resetten"}</button>
          </div>
        `})}if(o.systemModal==="energy-counter-reset-confirm"){let e=o.busyAction==="resetCumulativeEnergyCounters";return ee({modalId:"system",titleId:"oq-energy-counter-reset-modal-title",kicker:"Onderhoud",title:"Cumulatieve energietellers resetten?",closeAction:"close-system-modal",closeLabel:"Sluit energieteller-resetpopup",bodyMarkup:`
          <p class="oq-helper-modal-copy">De cumulatieve elektriciteits-, warmte- en koelenergiemeters van OpenQuatt beginnen opnieuw bij nul.</p>
          <p class="oq-settings-action-note oq-settings-action-note--warning">Eerder opgebouwde totalen blijven niet beschikbaar in deze tellers. Externe historie in Home Assistant wordt hiermee niet verwijderd.</p>
          ${o.controlError?`<p class="oq-helper-error" role="alert">${s(o.controlError)}</p>`:""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--warning" type="button" data-oq-action="confirm-energy-counter-reset" ${e?"disabled":""}>${e?"Resetten...":"Energietellers resetten"}</button>
          </div>
        `})}if(o.systemModal==="restart-confirm"){let e=o.busyAction==="restartAction";return ee({modalId:"system",titleId:"oq-restart-modal-title",kicker:"Systeem",title:"OpenQuatt herstarten?",closeAction:"close-system-modal",closeLabel:"Sluit herstart-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">De webinterface en regeling zijn tijdens de herstart kort niet bereikbaar. Daarna komt OpenQuatt vanzelf terug.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${e?"disabled":""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-restart" ${e?"disabled":""}>${e?"Herstarten...":"Herstarten"}</button>
          </div>
        `})}if(o.systemModal==="silent-settings")return ee({modalId:"system",titleId:"oq-silent-settings-modal-title",kicker:"Stille uren",title:"Stille uren instellen",modalClass:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit stille-uren-popup",bodyMarkup:`
          <p class="oq-helper-modal-copy">Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen. Wijzigingen worden direct toegepast.</p>
          <div class="oq-helper-modal-body">
            ${zg()}
          </div>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        `});if(o.systemModal==="webserver-logs")return lg();if(o.systemModal==="debug-recording")return Ag();if(o.systemModal==="openquatt-pause"){let e=C("openquattEnabled"),t=o.busyAction==="openquatt-regulation",r=y("openquattResumeAt"),n=o.loadingEntities||o.entitySyncInFlight,a=r||!n,i=Wn(),l=jr(T("openquattResumeAt")),c=ai();return ee({modalId:"system",titleId:"oq-openquatt-pause-modal-title",kicker:"Bediening",title:"Openquatt regeling",modalClass:"oq-helper-modal--wide",closeAction:"close-system-modal",closeLabel:"Sluit regeling-popup",bodyMarkup:`
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
        `})}return""}function sE(e=!1){let t=ii();return t?`
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
    `:""}function Yc(){return`
      <div class="oq-settings-curve-grid">
        ${ke.map(e=>oe(e.key,`Aanvoertemp. bij ${e.label}`,`Doelaanvoertemperatuur bij ${e.label} buitentemperatuur.`)).join("")}
        ${oe("curveFallbackSupply","Fallback-aanvoertemperatuur zonder buitentemperatuur","Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.","oq-settings-field--curve-fallback-card",{footerMarkup:sE()})}
      </div>
    `}function lE(){let e=[oe("heatingCurvePidKp","Proportionele reactie (Kp)","Bepaalt hoe sterk de regeling direct reageert op het verschil tussen gewenste en gemeten aanvoertemperatuur."),oe("heatingCurvePidKi","Langdurige correctie (Ki)","Corrigeert een klein temperatuurverschil dat langere tijd blijft bestaan. Verhoog alleen in kleine stappen."),oe("heatingCurvePidKd","Demping (Kd)","Remt snelle veranderingen af. Een te hoge waarde kan de regeling onnodig traag of onrustig maken.")].filter(Boolean).join("");return pr("heating-curve","Geavanceerde stooklijnafstelling","Deze PID-waarden verfijnen de temperatuurcorrectie boven op de stooklijn. Laat ze op de standaardwaarden staan zolang de regeling stabiel reageert.",e?`<div class="oq-settings-grid oq-settings-grid--pid">${e}</div>`:"")}function Jc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${Ro("strategy","Verwarmingsstrategie","Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `}function Zc(e="oq-settings-grid"){let t=[oe("flowSetpoint","Gewenste flow verwarmen","De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),oe("coolingFlowSetpoint","Gewenste flow koelen","De flow die OpenQuatt gebruikt tijdens actieve koeling.")].filter(Boolean).join("");return`
      <div class="${s(e)}">
        ${Ro("flowControlMode","Regelmodus","Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${Qd()?oe("manualIpwm","Vaste pompstand","Deze pompstand wordt gebruikt zolang de regeling op handmatig staat."):t}
      </div>
    `}function cE(e="oq-settings-grid"){let t=[oe("flowKp","Flow PI Kp","Hoe sterk de regeling direct reageert op een afwijking."),oe("flowKi","Flow PI Ki","Hoe snel de regeling kleine restfouten wegwerkt.")].filter(Boolean);return t.length?`
      <div class="${s(e)}">
        ${t.join("")}
      </div>
    `:""}function Xc(e="oq-settings-grid"){return`
      <div class="${s(e)}">
        ${oe("houseColdTemp","Koude referentietemperatuur","Bij Quatt is -10 \xB0C de standaard. Samen met het nominale woningvermogen bepaalt deze temperatuur hoe de warmtevraag bij koud weer wordt geschaald.")}
        ${oe("houseOutdoorMax","Maximum heating outdoor temperature","Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${oe("housePower","Nominaal woningvermogen","Hoeveel warmte je woning ongeveer nodig heeft bij de koude referentietemperatuur hierboven.")}
        ${uE()}
      </div>
    `}function eu(){let e=se();return`
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-helper-surface oq-settings-strategy-card${e?"":" is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${s(Va)}"
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
          data-select-option="${s(Ka)}"
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
    `}function uE(){if(!y("phResponseProfile"))return"";let e=String(T("phResponseProfile")||""),t=o.loadingEntities||o.busyAction==="save-phResponseProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${[{value:"Calm",label:"Rustig",rise:"12 min",fall:"5 min",meta:"Opbouw 12 min \xB7 Afbouw 5 min",copy:"Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt."},{value:"Balanced",label:"Gebalanceerd",rise:"8 min",fall:"3 min",meta:"Opbouw 8 min \xB7 Afbouw 3 min",copy:"Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik."},{value:"Responsive",label:"Direct",rise:"5 min",fall:"2 min",meta:"Opbouw 5 min \xB7 Afbouw 2 min",copy:"Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien."},{value:"Custom",label:"Aangepast",rise:"Vrij",fall:"Instelbaar",meta:"Opbouw en afbouw instelbaar",copy:"Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen."}].map(a=>{let i=a.value===e;return a.value==="Custom"&&i?`
              <div class="oq-helper-surface oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${s(a.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${s(a.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${s(a.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${on("phDemandRiseTime","Opbouwtijd","Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.",{compact:!0,showCopy:!1,infoId:"phDemandRiseTime-inline",embedded:!0})}
                  ${on("phDemandFallTime","Afbouwtijd","Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.",{compact:!0,showCopy:!1,infoId:"phDemandFallTime-inline",embedded:!0})}
                </div>
              </div>
            `:tn({key:"phResponseProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})}).join("")}
      </div>
    `;return fe("phResponseProfile","Power House responsprofiel","Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",n,"oq-settings-field--span-2")}function tu(){if(!y("curveControlProfile"))return"";let e=String(T("curveControlProfile")||""),t=o.loadingEntities||o.busyAction==="save-curveControlProfile",n=`
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${[{value:"Comfort",label:"Comfort",meta:"Eerder starten \xB7 Fijner trimmen",copy:"Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt."},{value:"Balanced",label:"Gebalanceerd",meta:"Middenweg \xB7 Voorspelbaar gedrag",copy:"De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg."},{value:"Stable",label:"Stabiel",meta:"Meer filtering \xB7 Rustigere stappen",copy:"Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt."}].map(a=>tn({key:"curveControlProfile",option:a.value,currentValue:e,busy:t,copy:a.copy,meta:a.meta})).join("")}
      </div>
    `;return fe("curveControlProfile","Regelprofiel","Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",n,"oq-settings-field--span-2")}function dE(){let e=(N,J=0)=>{let P=R(N);return Number.isNaN(P)?J:Math.max(0,P)},r=e("phComfortBelow",.1),n=e("phComfortAbove",.3),a=e("phKp",3e3),i=20-r,l=20+n,c=620,d=184,u=46,m=24,v=18,w=40,f=96,g=c-u-m,p=Math.min(20-1.2,i-.35),b=Math.max(20+1.2,l+.35),S=N=>u+(N-p)/Math.max(.01,b-p)*g,k=S(p),E=S(b),q=S(i),M=S(20),_=S(l),H=Math.abs(i-20)>.001,F=Math.abs(l-20)>.001,L=v+24,W=d-w,x=f-44,O=(N,J,P,B="")=>{let Tt=Math.max(k+4,Math.min(E-110-4,N-55)),ht=N-14,mo=x,Ct=28,Le=f-x+16;return`
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${s(`${J} ${P}`)}">
          <rect class="oq-ph-concept-hit" x="${ht}" y="${mo}" width="${Ct}" height="${Le}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${N}" cy="${f}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${B?` oq-ph-concept-tooltip--${B}`:""}" transform="translate(${Tt} ${x})">
            <rect class="oq-ph-concept-tooltip-panel" width="110" height="36" rx="10"></rect>
            <text x="${110/2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${s(J)}</text>
            <text x="${110/2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${s(P)}</text>
          </g>
        </g>
      `},D=[`M ${k.toFixed(1)} ${L.toFixed(1)}`,`L ${q.toFixed(1)} ${f.toFixed(1)}`,`L ${_.toFixed(1)} ${f.toFixed(1)}`,`L ${E.toFixed(1)} ${W.toFixed(1)}`].join(" ");return`
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${s(U(20,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${s(U(i,1,"\xB0C"))} \u2013 ${s(U(l,1,"\xB0C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${s(U(a,0," W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${c} ${d}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${k.toFixed(1)}" y="${v}" width="${Math.max(20,q-k).toFixed(1)}" height="${(d-v-w).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${q.toFixed(1)}" y="${v}" width="${Math.max(20,_-q).toFixed(1)}" height="${(d-v-w).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${_.toFixed(1)}" y="${v}" width="${Math.max(20,E-_).toFixed(1)}" height="${(d-v-w).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${k}" y1="${v}" x2="${k}" y2="${d-w}" class="oq-ph-concept-axis"></line>
            <line x1="${k}" y1="${f}" x2="${E}" y2="${f}" class="oq-ph-concept-axis"></line>
            <line x1="${M}" y1="${v}" x2="${M}" y2="${d-w}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${D}" class="oq-ph-concept-curve"></path>

            ${H?`<line x1="${q}" y1="${f-12}" x2="${q}" y2="${f+12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>`:""}
            <line x1="${M}" y1="${f-14}" x2="${M}" y2="${f+14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${F?`<line x1="${_}" y1="${f-12}" x2="${_}" y2="${f+12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>`:""}
            ${H?`<circle cx="${q}" cy="${f}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>`:""}
            <circle cx="${M}" cy="${f}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${F?`<circle cx="${_}" cy="${f}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>`:""}
            ${H?O(q,"Comfort onder setpoint",U(i,1,"\xB0C"),"below"):""}
            ${O(M,"Setpoint",U(20,1,"\xB0C"),"setpoint")}
            ${F?O(_,"Comfort boven setpoint",U(l,1,"\xB0C"),"above"):""}

            <text x="${k+8}" y="${v+18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${k+8}" y="${d-w-8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${k}" y="${d-26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${E}" y="${d-26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${H?`<text x="${q-5}" y="${d-14}" text-anchor="end" class="oq-ph-concept-tick-value">${s(U(i,1,"\xB0C"))}</text>`:""}
            <text x="${M}" y="${d-14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${s(U(20,1,"\xB0C"))}</text>
            ${F?`<text x="${_+5}" y="${d-14}" text-anchor="start" class="oq-ph-concept-tick-value">${s(U(l,1,"\xB0C"))}</text>`:""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${s(U(i,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${s(U(i,1,"\xB0C"))} \u2013 ${s(U(l,1,"\xB0C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${s(U(l,1,"\xB0C"))}</span>
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
    `}function ou(){let e=[oe("phKp","Temperatuurreactie","Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.","",{unitOverride:"W/K"}),oe("phComfortBelow","Comfort onder setpoint","Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),oe("phComfortAbove","Comfort boven setpoint","Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint.")].filter(Boolean);return e.length?`
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${dE()}
        <div class="oq-settings-grid">
          ${e.join("")}
        </div>
      </div>
    `:""}function ru(e,t,r){let n=[Ro(t,"Stand A","Kies hier welke compressorstand je wilt uitsluiten."),Ro(r,"Stand B","Kies hier nog een compressorstand die je wilt overslaan.")].filter(Boolean).join("");return n?`
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
    `:""}function Vf(){let e=cE();return re("Installatie","Flowregeling","Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",`
        ${Zc()}
        ${e?`
          ${pr("flow","Geavanceerde flow-afstelling","Kp en Ki bepalen hoe stevig de flowregeling corrigeert. Gebruik bij voorkeur eerst de autotune onder Service & commissioning en wijzig daarna alleen in kleine stappen.",e)}
        `:""}
      `)}function Kf(){let e=se()?`
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
            ${nu()}
          </div>
          ${Yc()}
          ${lE()}
        </div>
      `:`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${Xc()}
          ${ou()}
        </div>
      `;return re("Regeling","Verwarmingsstrategie","Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",`
        ${Jc()}
        ${eu()}
        ${e}
      `)}function nu(){let r={top:22,right:18,bottom:38,left:34},n=560-r.left-r.right,a=240-r.top-r.bottom,i=ke[0].outdoor,l=ke[ke.length-1].outdoor,c=f=>r.left+(f-i)/(l-i)*n,d=f=>r.top+(70-f)/50*a,u=[20,30,40,50,60,70].map(f=>{let g=d(f);return`
          <line x1="${r.left}" y1="${g}" x2="${560-r.right}" y2="${g}" class="oq-helper-curve-grid" />
          <text x="8" y="${g+4}" class="oq-helper-curve-axis-label">${f}\xB0</text>
        `}).join(""),m=ke.map(f=>`
        <text x="${c(f.outdoor)}" y="228" text-anchor="middle" class="oq-helper-curve-axis-label">${s(f.label)}</text>
      `).join(""),v=ke.map(f=>`${c(f.outdoor)},${d(qe(f.key,T(f.key)))}`).join(" "),w=ke.map(f=>{let g=qe(f.key,T(f.key));return`
          <g>
            <circle
              cx="${c(f.outdoor)}"
              cy="${d(g)}"
              r="7"
              class="oq-helper-curve-point ${o.draggingCurveKey===f.key?"is-dragging":""}"
              data-curve-key="${s(f.key)}"
            />
            <text x="${c(f.outdoor)}" y="${d(g)-14}" text-anchor="middle" class="oq-helper-curve-point-label">${g.toFixed(1)}\xB0</text>
          </g>
        `}).join("");return`
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 560 240" role="img" aria-label="Stooklijn-editor">
          ${u}
          <polyline points="${v}" class="oq-helper-curve-line" />
          ${w}
          ${m}
        </svg>
      </div>
    `}var Fo=Object.freeze({UNKNOWN:"unknown",SUPPORTED:"supported",UNSUPPORTED:"unsupported"});function zf({linkEntityPresent:e=!1,linkEntityConfirmedMissing:t=!1}={}){return e?Fo.SUPPORTED:t?Fo.UNSUPPORTED:Fo.UNKNOWN}function Uf(e=[],t=Fo.UNKNOWN){return t===Fo.SUPPORTED?[...e]:e.filter(r=>r!=="OpenTherm")}var Gf="Automatische ketelovername bij warmtepompstoring",pE="Laat de cv-ketel overnemen als alle warmtepompen door een storing uitvallen. Dit gebeurt pas na veilige stop en geldige flow, temperatuur en ketelaansturing. OpenQuatt stelt dit zelf vast; je hoeft niets te bevestigen. Een korte communicatiedip telt niet als storing.";function mE(){return Hn.filter(e=>y(_e(e,"Status"))||y(_e(e,"Load"))||y(zo(e,"cooling",0)))}function gE(e){return pe(He(e))}function fE(e){let t=[];return za.forEach(r=>{let n=-1/0;Pr.forEach(a=>{let i=zo(e,r,a),l=gE(i);(!Number.isFinite(l)||l<0||l>120||l<n)&&t.push(`${r==="cooling"?"C":"H"}F${a}`),Number.isFinite(l)&&(n=l)})}),{valid:t.length===0,invalid:t}}function hE(e){let t=String(T(`hp${e}Mode`)||"").trim(),r=pe(T(`hp${e}Freq`)),n=t&&t!=="Onbekend"&&t!=="Unknown",a=Number.isFinite(r),i=n&&/standby|stand-by/i.test(t),l=a&&r<=.5,c=n?i?a?l?"Standby en compressor uit.":`Compressor draait op ${r.toFixed(0)} Hz.`:"Compressorfrequentie is onbekend.":`ODU staat in ${t}.`:"ODU status is onbekend.";return{mode:n?t:"Onbekend",freq:Number.isFinite(r)?`${r.toFixed(0)} Hz`:"Onbekend",safe:i&&l,reason:c}}function bE(e){let t=String(e||"").toUpperCase();return!e||t==="UNKNOWN"||t==="UNAVAILABLE"?"Nog geen readback of apply-status ontvangen.":t.includes("APPLIED")?"Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.":t.includes("GUARD_READ_REQUESTED")?"Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.":t.includes("WRITE_QUEUED")||t.includes("WRITE_CONFIRMED")?"Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.":t.includes("FAILED")?"Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.":t.includes("LOADED")?"Readback is in de velden geladen. Controleer de waarden voordat je schrijft.":t.includes("BLOCKED")?"Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.":t.includes("LOAD_REQUESTED")?"Readback is aangevraagd bij de ODU.":"Laatste status van de experimentele runtime tabel."}function Qf(e,t){return y(e)?_o({key:e,value:He(e),meta:ze(e),controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",inputClass:"oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",inputAttributes:`data-oq-odu-runtime-tab-index="${t}"`,unitMarkup:'<span class="oq-helper-unit-chip">Hz</span>'}):'<span class="oq-settings-odu-runtime-missing">-</span>'}function vE(e){let t=Pr.length;return`
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${s(`HP${e} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${Pr.map(r=>`
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${r}</span>
            <div role="cell">${Qf(zo(e,"cooling",r),r)}</div>
            <div role="cell">${Qf(zo(e,"heating",r),t+r)}</div>
          </div>
        `).join("")}
      </div>
    `}function Zf(e){if(e.key!=="Tab"||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.target&&e.target.closest?e.target.closest("input[data-oq-odu-runtime-tab-index]"):null,r=t?t.closest(".oq-settings-odu-runtime-table"):null;if(!t||!r)return;let n=Array.from(r.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)")).sort((l,c)=>Number(l.dataset.oqOduRuntimeTabIndex||0)-Number(c.dataset.oqOduRuntimeTabIndex||0)),a=n.indexOf(t),i=n[a+(e.shiftKey?-1:1)];a<0||!i||(e.preventDefault(),i.focus(),typeof i.select=="function"&&i.select())}function wE(e){let t=_e(e,"Enable"),r=_e(e,"Load"),n=_e(e,"Apply"),a=_e(e,"Status"),i=String(T(a)||"").trim()||"Nog niet geladen",l=fE(e),c=hE(e),d=!!T(t),u=o.loadingEntities||o.busyAction===r||o.busyAction===n,m=u||!d||!l.valid||!c.safe||!y(n),v=l.valid?"Waarden zijn 0-120 Hz en per tabel oplopend.":`Controleer ${l.invalid.slice(0,5).join(", ")}${l.invalid.length>5?"...":""}.`;return`
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${e}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${s(c.reason)} Laatste compressorfrequentie: ${s(c.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${y(r)?Ge(r,o.busyAction===r?"Lezen...":"Uit ODU laden","oq-helper-button oq-helper-button--ghost",u):""}
      ${y(t)?ut(t,`HP${e} writes vrijgeven`,d,u,"Enable","Locked"):""}
            ${y(n)?Ge(n,o.busyAction===n?"Schrijven...":"Runtime toepassen","oq-helper-button oq-helper-button--warning",m):""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${i.toUpperCase().includes("BLOCKED")?" is-warning":i.toUpperCase().includes("APPLIED")||i.toUpperCase().includes("LOADED")?" is-success":""}">
          <div>
            <span>Status</span>
            <strong>${s(i)}</strong>
          </div>
          <p>${s(bE(i))}</p>
        </div>
        ${vE(e)}
        <p class="oq-settings-odu-runtime-validation${l.valid&&c.safe?" is-ok":" is-warning"}">${s(v)} ${s(c.safe?"":c.reason)}</p>
      </article>
    `}function Xf(){let e=mE();return e.length?`
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
            ${e.map(t=>wE(t)).join("")}
          </div>
        </div>
      </details>
    `:""}function lo(e,t="Aandacht",r="OK",n="warning"){return`<span class="oq-settings-monitoring-badge is-${s(e?n:"clear")}">${s(e?t:r)}</span>`}function Cr({label:e,value:t,note:r="",active:n=!1}){return`
      <div class="oq-settings-monitoring-row${n?" is-warning":""}">
        <div>
          <p>${s(e)}</p>
          <strong>${s(t)}</strong>
          ${r?`<span>${s(r)}</span>`:""}
        </div>
        ${lo(n)}
      </div>
    `}function eh(e){return(e?.incidents||[]).filter(t=>t.active||t.recovering||t.latched&&!t.acknowledged)}function yE(e){let t=Lp(e),r=Op(e.effects),n=Cl(e.firstSeenS,e.firstSeenMs),a=Cl(e.lastSeenS,e.lastSeenMs),i=[r.length?["Effect",r.join(", ")]:null,n?["Eerste optreden",n]:null,a?["Laatste optreden",a]:null,e.recoveryCondition?["Herstel",Pp(e.recoveryCondition)]:null,Tl(e.userAction)?["Gebruikersactie",Tl(e.userAction)]:null,e.occurrenceCount>1?["Bevestigd",`${e.occurrenceCount} keer sinds controllerstart`]:null].filter(Boolean);return`
      <div class="oq-settings-monitoring-incident">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>${s(Np(e.category))}</p>
            <strong>${s(Xn(e))}</strong>
          </div>
          ${lo(t.tone!=="clear",t.label,t.label,t.tone)}
        </div>
        ${i.length?`<dl>${i.map(([l,c])=>`<div><dt>${s(l)}</dt><dd>${s(c)}</dd></div>`).join("")}</dl>`:""}
      </div>
    `}function SE(e){let t=Ip(e),r=eh(e),n=r.some(c=>c.id==="1002"&&c.active),a=r.some(c=>!c.active&&!c.recovering&&c.latched&&!c.acknowledged&&c.recoveryCondition==="confirmed_odu_power_cycle"),i=Wp(o.incidentAction,e.index),l=o.incidentAction?.pending===!0;return`
      <div class="oq-settings-monitoring-rows">
        <div class="oq-settings-monitoring-row${t.tone==="clear"?"":" is-warning"}">
          <div>
            <p>Warmtepomp ${s(e.index)}</p>
            <strong>${s(t.label)}</strong>
            <span>${s(t.note)}</span>
          </div>
          ${lo(t.tone!=="clear",t.tone==="fault"?"Niet beschikbaar":"Begrensd",t.label,t.tone)}
        </div>
        ${r.map(yE).join("")}
        ${n?`
          <div class="oq-settings-monitoring-incident">
            <div class="oq-settings-monitoring-incident-action">
              <button
                class="oq-helper-button oq-helper-button--warning"
                type="button"
                data-oq-action="retry-hp-start"
                data-oq-hp-index="${e.index}"
                ${l?"disabled":""}
              >${o.incidentAction?.pending&&o.incidentAction.hp===e.index&&o.incidentAction.kind==="start_failure_retry"?"Retry wordt verwerkt...":`Startretry HP${e.index}`}</button>
              <span>Alleen na een bevestigde veilige stop; actieve fouten, verbindingsherstel en andere startblokkades blijven gelden.</span>
            </div>
          </div>
        `:""}
        ${a?`
          <div class="oq-settings-monitoring-incident">
            <div class="oq-settings-monitoring-incident-action">
              <button
                class="oq-helper-button oq-helper-button--warning"
                type="button"
                data-oq-action="confirm-hp-power-cycle"
                data-oq-hp-index="${e.index}"
                ${l?"disabled":""}
              >${o.incidentAction?.pending&&o.incidentAction.hp===e.index&&o.incidentAction.kind==="confirm_odu_power_cycle"?"Bevestiging wordt verwerkt...":`ODU-powercycle HP${e.index} bevestigen`}</button>
              <span>Alleen nadat buitenunit HP${s(e.index)} werkelijk spanningsloos is geweest; dit geeft uitsluitend de herstelde safety-latch van deze HP vrij.</span>
            </div>
          </div>
        `:""}
        ${i.visible?`
          <div class="oq-settings-monitoring-incident">
            <div class="oq-settings-monitoring-incident-head">
              <div>
                <p>Herstelactie</p>
                <strong>${s(i.label)}</strong>
              </div>
              ${lo(i.tone!=="clear",i.tone==="fault"?"Geweigerd":"In behandeling","Uitgevoerd",i.tone)}
            </div>
            <span>${s(i.copy)}</span>
          </div>
        `:""}
      </div>
    `}function kE(e){let t=e.incidentMonitoring?.snapshot?.heatPumps||[];if(!t.length)return"";let r=t.flatMap(eh),a=r.filter(i=>i.latched&&!i.acknowledged&&!i.active&&!i.recovering).filter(i=>i.recoveryCondition!=="confirmed_odu_power_cycle");return`
      <article class="oq-settings-monitoring-card">
        <header>
          <p>Warmtepompen</p>
          ${lo(r.some(i=>i.category!=="status"),"Incident","OK","warning")}
        </header>
        <span>Bevestigde status per warmtepomp. Een korte communicatiehapering wordt eerst gecontroleerd voordat OpenQuatt ingrijpt.</span>
        <div class="oq-settings-monitoring-rows">
          ${t.map(SE).join("")}
        </div>
        ${a.length>0&&y("acknowledgeHpIncidents")?`
          <div class="oq-settings-monitoring-incident-action">
            ${Ge("acknowledgeHpIncidents","Herstelde meldingen bevestigen","oq-helper-button oq-helper-button--ghost")}
            <span>Alleen herstelde, vastgehouden meldingen verdwijnen; actieve incidenten blijven staan.</span>
          </div>
        `:""}
      </article>
    `}function qE(e){let t=Number(e?.controlMode)||0,r=!!e?.boilerCommandActive,n=String(e?.action||"none"),a=xl(n);return t===3?r?{title:"CM3 \xB7 CV ondersteunt",copy:"De warmtepomp blijft de primaire warmtebron; de CV-ketel vult tijdelijk aan.",tone:"clear"}:{title:"CM3 \xB7 ondersteuningsrol niet actief",copy:"CM3 is de regelrol, maar de ketel wordt op dit moment niet aangestuurd.",tone:"warning"}:t===4?r?{title:"CM4 \xB7 ketelfallback aangestuurd",copy:"De warmtepompen zijn niet inzetbaar; de CV-ketel krijgt de verwarmingsopdracht.",tone:"fault"}:{title:"CM4 \xB7 fallback niet actief",copy:e.fallbackBlockReason?`De fallbackrol is gekozen, maar de ketel wordt niet aangestuurd. Blokkade: ${wi(e.fallbackBlockReason)}.`:"De fallbackrol is gekozen, maar de ketel wordt niet aangestuurd; er is geen blokkadereden aangeleverd.",tone:"fault"}:n==="fallback_blocked"?{title:a.label,copy:`${a.copy} Blokkade: ${wi(e.fallbackBlockReason)}.`,tone:"fault"}:{title:t>=0?`CM${t} \xB7 normale regeling`:"Normale regeling",copy:"Er is geen bijzondere ketelreactie voor een warmtepompincident actief.",tone:"clear"}}function EE(e){let t=e.incidentMonitoring?.snapshot?.system;if(!t)return"";let r=qE(t),n=t.boilerCommandActive&&t.boilerTransition==="assist_to_fallback_continuous"&&t.boilerOutputContinuous===!0?"Overgang CM3 \u2192 CM4: de ketelopdracht bleef volgens de controller actief en kreeg geen uit/aan-puls.":"";return`
      <article class="oq-settings-monitoring-card oq-settings-monitoring-system">
        <header>
          <p>Systeemreactie</p>
          ${lo(r.tone!=="clear",r.tone==="fault"?"Fallback":"Inactief","Normaal",r.tone==="fault"?"fault":"warning")}
        </header>
        <strong class="oq-settings-monitoring-card-value">${s(r.title)}</strong>
        <span>${s(r.copy)}</span>
        ${n?Cr({label:"Overgang CM3 \u2192 CM4",value:"Geen uit/aan-puls",note:n}):""}
      </article>
    `}function jo(e){let t=R(e);return Number.isNaN(t)?"\u2014":String(Math.max(0,Math.round(t)))}function TE(e){let t=R(e);if(Number.isNaN(t))return"Nog niet gemeten";if(t<1)return"Zojuist";if(t<60)return`${Math.round(t)} min geleden`;let r=Math.floor(t/60),n=Math.round(t%60);return`${r}u ${n}m geleden`}function Yf(e){let t=R(e);return Number.isNaN(t)||t<=0?"Tijdstip onbekend":new Intl.DateTimeFormat("nl-NL",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t*1e3))}function CE(e){if(!e.cyclingAlertLatched)return"";let t=Z("compressorCyclingAlertAlternating"),r=jo("compressorCyclingAlertHp1Peak2h"),n=jo("compressorCyclingAlertHp1Peak72h"),a=y("compressorCyclingAlertHp2Peak2h")?jo("compressorCyclingAlertHp2Peak2h"):"",i=y("compressorCyclingAlertHp2Peak72h")?jo("compressorCyclingAlertHp2Peak72h"):"";return`
      <div class="oq-settings-monitoring-incident${e.cyclingAlertActive?" is-active":" is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${e.cyclingAlertActive?"Pendelen is nu actief":"Pendelen is niet meer actief"}</strong>
          </div>
          ${lo(e.cyclingAlertActive,"Actief","Hersteld")}
        </div>
        <span>${e.cyclingAlertActive?"De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen.":"OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${s(Yf("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${s(Yf("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${s(r)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${s(n)} starts</dd></div>
          ${a?`<div><dt>HP2 2 uur</dt><dd>${s(a)} starts</dd></div>`:""}
          ${i?`<div><dt>HP2 72 uur</dt><dd>${s(i)} starts</dd></div>`:""}
          ${t?"<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>":""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${o.entities.acknowledgeCompressorCyclingAlert?Ge("acknowledgeCompressorCyclingAlert","Melding bevestigen","oq-helper-button oq-helper-button--ghost",e.cyclingAlertActive):""}
          <span>${e.cyclingAlertActive?"Bevestigen wordt beschikbaar zodra het pendelen is gestopt.":"Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `}function Jf(e,t){return y(`${t}CompressorStarts2h`)?`<tr><th scope="row">${s(e)}</th>
      <td>${s(TE(`${t}CompressorLastStartAge`))}</td><td class="is-alarm">${s(jo(`${t}CompressorStarts2h`))}</td>
      <td>${s(jo(`${t}CompressorStarts6h`))}</td><td>${s(jo(`${t}CompressorStarts24h`))}</td>
      <td class="is-alarm">${s(jo(`${t}CompressorStarts72h`))}</td></tr>`:""}function th(){let e=Dt();zr(e);let t=!!e.incidentMonitoring?.available,r=Ht("cicPollingEnabled"),n=Ht("otEnabled"),a=[y("lowflowFaultActive")?Cr({label:"Flow",value:Z("lowflowFaultActive")?"Te lage flow gemeld":"Geen lage-flowmelding",active:Z("lowflowFaultActive")}):"",y("flowMismatch")?Cr({label:"Flowvergelijking duo",value:Z("flowMismatch")?"Afwijking tussen warmtepompen":"Geen afwijking gemeld",active:Z("flowMismatch")}):""].filter(Boolean).join(""),i=[y("cicDataStale")?Cr({label:"CIC-data",value:r?Z("cicDataStale")?"Verouderd":"Geen probleem gemeld":"Polling uitgeschakeld",active:r&&Z("cicDataStale")}):"",y("otLinkProblem")?Cr({label:"OpenTherm",value:n?Z("otLinkProblem")?"Verbindingsprobleem":"Geen probleem gemeld":"Uitgeschakeld",active:n&&Z("otLinkProblem")}):""].filter(Boolean).join(""),l=t?"":[y("hp1Failures")?Cr({label:"Warmtepomp 1",value:$l("hp1Failures"),active:ea("hp1Failures")}):"",y("hp2Failures")?Cr({label:"Warmtepomp 2",value:$l("hp2Failures"),active:ea("hp2Failures")}):""].filter(Boolean).join(""),c=R("compressorStarts2hWarningLimit"),d=R("compressorStarts72hWarningLimit"),u=Z("compressorCyclingWarning2h")||Z("compressorCyclingWarning72h")||Z("alternatingCompressorStartsWarning")||e.cyclingAlertLatched,m=a?`
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${a}</div>
      </article>
    `:"",v=l?`
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${l}</div>
      </article>
    `:"",w=t?kE(e):"",f=t?EE(e):"",g=i?`
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${i}</div>
      </article>
    `:"";return re("Bewaking","Installatiebewaking","Lokale diagnose van warmtepompincidenten, systeemreactie, compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",`
        <div class="oq-settings-monitoring-summary${e.severity==="fault"?" is-fault":e.active?" is-warning":" is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${s(e.title)}</strong>
            <span>${s(e.copy)}</span>
          </div>
          ${lo(e.active,e.severity==="fault"?"Storing":e.incidentMonitoringStale?"Niet actueel":"Aandacht nodig","Alles rustig",e.severity==="fault"?"fault":"warning")}
        </div>
        <details class="oq-settings-monitoring-details"${o.installationMonitoringDetailsOpen?" open":""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Details en systeemreactie</strong>
          </summary>
        ${e.active?`
          <div class="oq-settings-monitoring-active-list">
            ${e.problems.map(p=>`<span>${s(p.label)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          ${f}
          ${w}
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${lo(u)}
            </header>
            <span>Starts sinds de laatste controllerherstart.</span>
            ${CE(e)}
            <div class="oq-starts-panel">
              <table class="oq-starts"><thead><tr><th scope="col">Warmtepomp</th><th scope="col">Laatste</th><th scope="col" class="is-alarm">2 uur</th><th scope="col">6 uur</th><th scope="col">24 uur</th><th scope="col" class="is-alarm">72 uur</th></tr></thead>
                <tbody>
                  ${Jf("Warmtepomp 1","hp1")}
                  ${Jf("Warmtepomp 2","hp2")}
                </tbody>
              </table>
              ${o.compressorLimitsOpen?`
                <div class="oq-start-editor">
                  <strong>Alarmgrenzen</strong>
                  <div class="oq-start-fields" id="oq-start-fields">
                    ${on("compressorStarts2hWarningLimit","2 uur","",{compact:!0})}
                    ${on("compressorStarts72hWarningLimit","72 uur","",{compact:!0})}
                  </div>
                  <button type="button" class="oq-helper-button oq-helper-button--ghost oq-start-done" data-oq-action="toggle-compressor-limits" aria-expanded="true" aria-controls="oq-start-fields">Gereed</button>
                </div>
              `:`
                <button type="button" class="oq-start-summary" data-oq-action="toggle-compressor-limits" aria-expanded="false">
                  <span><strong>Alarmgrenzen</strong><span>${Number.isNaN(c)?"\u2014":Math.round(c)} / 2 uur \xB7 ${Number.isNaN(d)?"\u2014":Math.round(d)} / 72 uur</span></span>
                  <strong>Aanpassen \u203A</strong>
                </button>
              `}
            </div>
          </article>
          ${v}
          </div>
          <div class="oq-settings-monitoring-column">
            ${m}
            ${g}
          </div>
        </div>
        </details>
      `)}function au(){if(!y("hpGeneration"))return"";let e={V1:{copy:"Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",image:li,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1",infoCopy:`Model: AMM4
Kenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.`},"V1.5":{copy:"Voor Quatt V1.5-installaties.",image:li,alt:"Quatt Hybrid V1 en V1.5",infoTitle:"V1.5",infoCopy:`Model: AMM4-V1.5
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`},V2:{copy:"Voor Quatt V2.",image:sl,alt:"Quatt Hybrid V2",infoTitle:"V2",infoCopy:`Model: AMH6 of AMH6-2
Kenmerken: Flowmeter in de buitenunit ge\xEFntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.`}},t=o.entities.hpGeneration||{},r=String(T("hpGeneration")||""),n=Lt(t),a=o.loadingEntities||o.busyAction==="save-hpGeneration";return`
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${n.map(i=>{let l=e[i]||{};return tn({key:"hpGeneration",option:i,currentValue:r,busy:a,copy:l.copy||"",image:l.image||"",imageAlt:l.alt||"",infoTitle:l.infoTitle||"",infoCopy:l.infoCopy||"",infoId:`hp-generation-${String(i).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`})}).join("")}
        </div>
      </div>
    `}function oh(){let e=Ot(),t=o.entities.hpGeneration||{},r=y("hpGeneration")&&Lt(t).length>0;return!e&&!r?"":re("Basis","Quatt Hybrid-versie","Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",`
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
      `)}function iu(e="oq-settings-grid oq-settings-boiler-simple-grid",t=!1){if(!y("boilerCvAssistEnabled"))return"";let r=C("boilerCvAssistEnabled"),n=y("boilerRatedHeatPower"),a=ze("boilerRatedHeatPower"),i=He("boilerRatedHeatPower"),l=o.loadingEntities||o.busyAction==="switch-boilerCvAssistEnabled",c=y("boilerFaultFallbackEnabled"),d=c&&C("boilerFaultFallbackEnabled"),u=o.loadingEntities||o.busyAction==="switch-boilerFaultFallbackEnabled",m=y("boilerConnection"),v=m?String(T("boilerConnection")||"R1"):"R1",w=zf({linkEntityPresent:y("otbLinkAvailable"),linkEntityConfirmedMissing:!!o.optionalMissingEntities?.otbLinkAvailable}),f=w===Fo.SUPPORTED,g=w!==Fo.UNKNOWN,p=v==="R1"&&C("otbConnectionMismatch"),b=v==="OpenTherm"&&C("otbConnectionAutoSelected"),S=m?Uf(Lt(o.entities.boilerConnection||{}),w):[],k=m&&g?`
      <label class="oq-settings-control oq-settings-control--select">
        <select class="oq-helper-select" data-oq-field="boilerConnection" ${o.loadingEntities?"disabled":""}>
          ${S.map(L=>`
            <option value="${s(L)}" ${L===v?"selected":""}>
              ${s(L==="OpenTherm"?"OpenTherm (OTB)":"Aan/uit (R1)")}
            </option>
          `).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    `:m?`
      <div class="oq-settings-boiler-power-empty" role="status" aria-live="polite">
        <strong>Beschikbaarheid controleren\u2026</strong>
        <p>De aansluitingskeuze is tijdelijk geblokkeerd.</p>
      </div>
    `:"",q=n?_o({key:"boilerRatedHeatPower",value:i,meta:a,controlClass:"oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",unitMarkup:'<span class="oq-helper-unit-chip">W</span>'}):`
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${s("Deze firmware levert nog geen bewerkbare boilervermogensinstelling.")}</p>
        </div>
      `,M=r&&n?'<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>':"",_=b?`
        <div class="oq-settings-boiler-connection-note is-success" role="status" aria-live="polite">
          <strong>OpenTherm-ketel gedetecteerd</strong>
          <p>OpenTherm (OTB) is automatisch als ketelaansluiting geselecteerd.</p>
        </div>
      `:v==="R1"&&f?p?`
          <div class="oq-settings-boiler-connection-note is-warning" role="alert">
            <strong>OpenTherm-ketel gevonden</strong>
            <p>Kies OpenTherm (OTB).</p>
          </div>
        `:`
          <p class="oq-settings-boiler-connection-note">OT-controle bij opstart actief.</p>
        `:"",H=!se()&&r?[oe("boilerSupportStartThreshold","Ondersteuning starten vanaf","Standaard 1000 W. Power House moet eerst minimaal 2 minuten zonder ketelondersteuning draaien; daarna moet het warmtetekort 5 minuten onafgebroken boven deze grens blijven."),oe("boilerSupportStopThreshold","Ondersteuning stoppen onder","Standaard 400 W. Ketelondersteuning blijft minimaal 5 minuten actief en stopt pas wanneer het warmtetekort daarna 2 minuten onder deze grens blijft.")].filter(Boolean).join(""):"",F=pr("boiler-support","Wanneer ketelondersteuning start en stopt","Alleen voor Power House. Het warmtetekort is het gevraagde woningvermogen min het maximaal beschikbare warmtepompvermogen, met minimaal 0 W. Tussen beide grenzen blijft de huidige toestand behouden. Deze waarden veranderen het ketelvermogen en de OpenTherm-aansturing niet.",H?`<div class="oq-settings-grid">${H}</div>`:"");return`
        <div class="${s(e)}">
          ${fe("boilerCvAssistEnabled","CV-ketel / boiler aanwezig","Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",`
              <div class="oq-settings-compact-switch-field">
                ${ut("boilerCvAssistEnabled","CV-ketel / boiler aanwezig",r,l)}
              </div>
            `,"oq-settings-field--compact")}

          ${(r||p||b)&&m?fe("boilerConnection","Ketelaansluiting",g?f?"Kies de aansluiting die fysiek met de ketel is verbonden. OpenQuatt gebruikt nooit beide routes tegelijk.":"Deze hardware ondersteunt alleen de aan/uit-aansluiting via R1.":"OpenQuatt controleert welke ketelaansluitingen deze hardware ondersteunt.",k,"oq-settings-field--compact",_):""}

          ${r?fe("boilerRatedHeatPower","Ingesteld boilervermogen","Vul hier het vermogen in dat OpenQuatt mag meerekenen.",`
              <div class="oq-settings-boiler-power-inline">
                ${q}
              </div>
            `,r&&n?"oq-settings-field--compact":"oq-settings-field--compact is-disabled",M):""}
          ${r&&t&&c?fe("boilerFaultFallbackEnabled",Gf,pE,`
              <div class="oq-settings-compact-switch-field">
                ${ut("boilerFaultFallbackEnabled",Gf,d,u)}
              </div>
            `,"oq-settings-field--compact"):""}

          ${F}
        </div>
      `}function rh(){if(!y("boilerCvAssistEnabled"))return"";let e=C("boilerCvAssistEnabled");return re("Basis","CV-ketel of boiler",e?"Kies hoe de ketel is aangesloten en hoeveel effectief vermogen OpenQuatt als ondersteuning mag gebruiken.":"Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",iu("oq-settings-grid oq-settings-boiler-simple-grid",!0))}function nh(){let e=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",t=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";return re("Setup","Quick Start","Bekijk of de Quick Start nog open staat of al is afgerond.",`
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
      `)}function ah(){let e=Oo(),t=Ti(),r=o.busyAction==="restartAction";return re("Diagnostiek","Systeemstatus","Snelle statusinformatie voor support, controle en onderhoud.",`
        <div class="oq-settings-system-summary">
          ${ct({dataValue:"uptime",label:"Uptime",value:Xr()})}
          ${ct({dataValue:"ip",label:"IP-adres",value:en()})}
          ${ct({dataValue:"updates",label:"Updates",value:e,action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>`})}
          ${ct({dataValue:"webserverLog",label:"Logboek",value:$i(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>`})}
          ${ct({dataValue:"debugRecording",label:"Debugopname",value:la(),note:Pi(),action:`<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>`})}
          ${ct({dataValue:"datetime",label:"Datum/tijd",value:t})}
          ${ct({dataValue:"espTemp",label:"ESP-temp",value:ls()})}
          ${ct({dataValue:"restart",label:"Herstart OpenQuatt",value:"Opnieuw opstarten",note:"Dit onderbreekt de webinterface kort.",action:`<button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${r?"disabled":""}
            >
              ${r?"Herstarten...":"Herstarten"}
            </button>`})}
          ${y("statusLedsEnabled")?`
            ${ct({dataValue:"statusLeds",label:"Status-LEDs",value:C("statusLedsEnabled")?"Aan":"Uit",note:"Schakelt de gele netwerk-LED en rode storings-LED op de Q-edition controller.",action:ut("statusLedsEnabled","Status-LEDs",C("statusLedsEnabled"),o.loadingEntities||o.busyAction==="switch-statusLedsEnabled")})}
          `:""}
        </div>
      `)}function ih(){let e=[ru("Warmtepomp 1","hp1ExcludedA","hp1ExcludedB"),ru("Warmtepomp 2","hp2ExcludedA","hp2ExcludedB")].filter(Boolean).join("");return re("Installatie","Compressorinstellingen","Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",`
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${oe("minRuntime","Minimale draaitijd","Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${y("hp2ExcludedA")?"":" oq-settings-hp-columns--single"}">
            ${e}
          </div>
        </div>
      `)}var xE=JSON.stringify({schema_version:1,message_id:"c8272f30-b64d-4af0-a13c-bf8e0cbde842",installation_id:"7df1c1f8-fc47-4ac8-b0d7-94d8c42d772f",timestamp_s:1784527200,uptime_s:86420,firmware_version:"v0.44.0",release_channel:"main",hardware_profile:"heatpump_controller_q",hardware_revision:"1.0 (batch 42)",topology:"duo",connection:"wifi",heap_free_b:178432,heap_min_free_b:151008,heap_largest_block_b:98304,psram_free_b:7023616,loop_time_ms:14,esp_internal_temp_c:47.8,wifi_rssi_dbm:-61,reset_reason:"power_on",cic_polling_enabled:!0,cic_compatibility_enabled:!1,ot_thermostat_enabled:!0,boiler_assist_enabled:!0,boiler_connection:"on_off",mqtt_inputs_enabled:!1,trend_ram_enabled:!0,trend_flash_enabled:!1,decision_log_flash_enabled:!1,energy_history_flash_enabled:!0,ram_log_history_enabled:!0},null,2);function cs({enabled:e,busy:t,settings:r=!1}){let n=r?"Na inschakelen verstuurt OpenQuatt vrijwel direct en daarna ongeveer elk uur technische gegevens naar de OpenQuatt-loggingserver.":"Na het afronden verstuurt OpenQuatt vrijwel direct en daarna ongeveer elk uur technische gegevens naar de OpenQuatt-loggingserver.",a=r&&e&&y("usageTelemetryInstallationId")?String(T("usageTelemetryInstallationId")||"").trim():"",i=["unknown","unavailable","nan"].includes(a.toLowerCase())?"":a;return`
    <div class="oq-usage-consent${e?" is-enabled":""}${r?" oq-usage-consent--settings":""}">
      <div class="oq-usage-consent-copy">
        <span class="oq-usage-consent-icon" aria-hidden="true">${ge("bar-chart","oq-usage-consent-icon-svg")}</span>
        <div>
          <span class="oq-usage-consent-kicker">Vrijwillige keuze</span>
          <h3>Beperkte statistieken delen</h3>
          <p>${n}</p>
          ${i?`<div class="oq-usage-consent-installation-id"><strong>Installatie-ID</strong><code>${s(i)}</code></div>`:""}
        </div>
      </div>
      <div class="oq-usage-consent-action">
        ${ut("usageTelemetryEnabled","Technische gebruiksstatistieken delen",e,t,"Delen","Niet delen")}
      </div>
    </div>
  `}function us({collapsible:e=!1,idPrefix:t="oq-usage",open:r=!1}={}){let n=s(t),a=`${n}-included-title`,i=`${n}-excluded-title`,l=`
    <div class="oq-usage-disclosure-grid">
      <section class="oq-usage-disclosure-column" aria-labelledby="${a}">
        <div class="oq-usage-disclosure-column-head">
          <span class="oq-usage-disclosure-column-icon is-included" aria-hidden="true">${ge("bar-chart","oq-usage-disclosure-icon-svg")}</span>
          <h4 id="${a}">In het bericht</h4>
        </div>
        <ul>
          <li><strong>Installatie</strong><span>Willekeurig ID, tijdstip en uptime</span></li>
          <li><strong>Software</strong><span>Versie en releasekanaal</span></li>
          <li><strong>Platform</strong><span>Hardware, opstelling, verbinding en wifi-signaal</span></li>
          <li><strong>Systeemstatus</strong><span>Geheugen, looptijd, chiptemperatuur en herstartreden</span></li>
          <li><strong>Functies</strong><span>Aan/uit-status van CiC, OpenTherm-thermostaat, ketelondersteuning, MQTT-inputs en lokale historie; plus de ketelaansluiting (aan/uit of OpenTherm)</span></li>
        </ul>
      </section>
      <section class="oq-usage-disclosure-column is-excluded" aria-labelledby="${i}">
        <div class="oq-usage-disclosure-column-head">
          <span class="oq-usage-disclosure-column-icon" aria-hidden="true">${ge("shield","oq-usage-disclosure-icon-svg")}</span>
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
      <pre><code>${s(xE)}</code></pre>
    </details>
    <p class="oq-usage-network-note">${ge("server","oq-usage-network-note-icon")} De OpenQuatt-loggingserver kan, zoals iedere internetdienst, technisch wel het bron-IP-adres zien. OpenQuatt slaat dit IP-adres niet op.</p>
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
  `}function ME(){let e=ne(),t=lt(),r=`${e}:${t}`,n=o.quickStartSetupDraft||r,[a,i]=n.split(":");return{...Hi(a,i),currentKey:r,selectedKey:n,changes:n!==r,targetIsDuo:a==="duo",targetIsEthernet:i==="eth"}}function $E(){let e=ME(),t=kt(),r=!!(t||o.updateInstallBusy),n=[["single:wifi","Single \xB7 Wi-Fi","E\xE9n warmtepomp via het draadloze netwerk."],["single:eth","Single \xB7 Ethernet","E\xE9n warmtepomp via een vaste netwerkkabel."],["duo:wifi","Duo \xB7 Wi-Fi","Twee warmtepompen via het draadloze netwerk."],["duo:eth","Duo \xB7 Ethernet","Twee warmtepompen via een vaste netwerkkabel."]],a=[e.targetIsDuo?"De tweede warmtepomp is aangesloten en hoort bij deze controller.":"Deze controller wordt voor \xE9\xE9n warmtepomp gebruikt.",e.targetIsEthernet?"De netwerkkabel is aangesloten.":"De Wi-Fi-gegevens zijn beschikbaar op de controller."];return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("setup"))}</p>
        <h2 class="oq-helper-section-title">Kies je setup</h2>
        <p class="oq-helper-section-copy">De gemarkeerde setup is de configuratie die nu op je Q-edition actief is. Kies alleen een andere setup als je installatie anders is opgebouwd of een andere netwerkverbinding moet gebruiken.</p>
        <div class="oq-helper-fields">
          ${n.map(([i,l,c])=>{let d=e.selectedKey===i,u=e.currentKey===i;return`
              <button
                class="oq-helper-field oq-helper-field--step${d?" is-current":""}"
                type="button"
                data-oq-action="select-quickstart-setup"
                data-setup-target="${s(i)}"
                aria-pressed="${d?"true":"false"}"
                ${r?"disabled":""}
              >
                <div class="oq-helper-field-step-head">
                  <h3>${s(l)}</h3>
                  ${u?'<span class="oq-helper-field-step-state">Actief</span>':""}
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
        `:Et()}
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function ch(e="wizard"){return e==="picker"?`
        <section class="oq-helper-panel">
          ${au()}
          <div class="oq-helper-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-quickstart-modal">Gereed</button>
          </div>
        </section>
      `:`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("generation"))}</p>
        <h2 class="oq-helper-section-title">Kies je Quatt Hybrid</h2>
        <p class="oq-helper-section-copy">Geef hier aan welke Quatt Hybrid je hebt. Dan zet OpenQuatt de juiste regeling klaar.</p>
        ${au()}
        ${Et()}
      </section>
    `}function AE(e){let t=String(e||"").trim();if(!t)return"";try{let r=new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t)?t:`http://${t}`);return r.protocol!=="http:"&&r.protocol!=="https:"?"":(r.port||(r.port="8080"),(!r.pathname||r.pathname==="/")&&(r.pathname="/beta/feed/data.json"),r.toString())}catch{return""}}function uh(){let e=String(T("cicFeedUrl")||"").trim(),t=o.quickStartCicFeedUrlDraft===null?e:String(o.quickStartCicFeedUrlDraft||"");return{configuredUrl:e,draftUrl:t,normalizedDraftUrl:AE(t)}}function dh(e,t){return`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartCicFeedUrl">
        <div class="oq-settings-field-head">
          <h3>CiC JSON-feed</h3>
          ${Pt("quickStartCicFeedUrl","CiC JSON-feed","Vul een IP-adres, hostname of volledige URL in. Bij alleen een adres gebruikt OpenQuatt automatisch poort 8080 en /beta/feed/data.json.")}
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
    `}function sh(e){let t=String(e||"").trim().toLowerCase();return t==="heatpump_controller_q"||t.includes("q-edition")||t.includes("controller q")?"heatpump_controller_q":t==="heatpump_listener"||t.includes("listener")?"heatpump_listener":t==="waveshare"||t.includes("waveshare")?"waveshare":""}function su(){let e=sh(T("hardwareProfileText")),t=!1;return e||(e=sh(Nt().hardwareProfile)),!e&&y("qFlowSource")?(e="heatpump_controller_q",t=!0):!e&&y("flowSource")&&y("cicPollingEnabled")&&(e="remote",t=!0),{profile:e,inferred:t,isQEdition:e==="heatpump_controller_q",isRemoteProfile:e==="heatpump_listener"||e==="waveshare"||e==="remote",hardwareKnown:!!e,hardwareLabel:e==="heatpump_controller_q"?"Heatpump Controller Q-edition":e==="heatpump_listener"?"Heatpump Listener":e==="waveshare"?"Waveshare":e==="remote"?"Heatpump Listener / Waveshare":"Onbekend hardwareprofiel"}}function yn(){let e=String(T("hpGeneration")||"").trim(),t=su(),r=e==="V1",{isQEdition:n,isRemoteProfile:a,hardwareKnown:i}=t,l=r&&a,c=n?r?"Local":"Outdoor unit":"",d=l?"CIC":"Outdoor unit",u=String(T("flowSource")||"").trim(),m=String(T("qFlowSource")||"").trim(),v=C("cicPollingEnabled"),w=C("cicJsonFeedOk"),f=C("cicDataStale"),g=uh(),p=u===d&&(!c||m===c),b=l?p&&v&&!!g.configuredUrl:p,S=l?"cicFlowrate":n&&r?"controllerFlow":ne()==="duo"?"flowLocal":"hp1Flow",k=R(S),E=Number.isFinite(k),q=C("quickFlowTest"),M=i?l?"Nog configureren":"Nog activeren":"Hardwareprofiel niet herkend";l&&b?M=w&&E?k>0?"Geldig":"Bron actief, geen circulatie":f?"Geen actuele CiC-data":w?"Verbonden, wacht op flow":"Verbinding controleren":!l&&b&&(M=E?k>0?"Geldig":"Bron actief, geen circulatie":"Wacht op actuele flow");let _=l?"CiC JSON-feed":n&&r?"Lokale flowmeter op de controller":"Flowmeter in de buitenunit via Modbus",H=l?"Een Quatt V1 heeft op dit hardwareprofiel geen lokaal aangesloten flowmeter. Configureer daarom de lokale CiC JSON-feed.":n&&r?"Bij Quatt V1 is de centrale flowmeter lokaal aangesloten op de Q-edition controller.":`Bij Quatt ${e||"V1.5/V2"} zit de flowmeter in de buitenunit en leest OpenQuatt deze via Modbus.`;return{generation:e,hardwareLabel:t.hardwareLabel,requiresCic:l,qFlowTarget:c,flowSourceTarget:d,configurationApplied:b,sourceLabel:_,explanation:H,status:M,flowValue:k,flowAvailable:E,flowTestActive:q,canRunFlowTest:b,...g,canApply:i&&y("flowSource")&&(!c||y("qFlowSource"))&&(!l||y("cicPollingEnabled")&&y("cicFeedUrl")&&!!g.normalizedDraftUrl)}}function ds(){let e=su(),{isQEdition:t,isRemoteProfile:r}=e,n=String(T("roomTempSource")||"").trim(),a=String(T("roomSetpointSource")||"").trim(),i=n===a&&["CIC","OT thermostat","HA input"].includes(n)?n:"",l=t?"OT thermostat":o.quickStartThermostatSourceDraft||(i==="CIC"||i==="HA input"?i:"CIC"),c=uh(),u=n===l&&a===l&&(l!=="OT thermostat"||C("otEnabled"))&&(l!=="CIC"||C("cicPollingEnabled")&&!!c.configuredUrl),m=l==="OT thermostat"?["otRoomTemp","otRoomSetpoint"]:l==="CIC"?["cicRoomTemp","cicRoomSetpoint"]:["roomTempHa","roomSetpointHa"],v=R(m[0]),w=R(m[1]),f=Number.isFinite(v)&&Number.isFinite(w),g=l==="OT thermostat"?C("otEnabled")&&!C("otLinkProblem")&&f:l==="CIC"?C("cicJsonFeedOk")&&!C("cicDataStale")&&f:C("roomTempHaValid")&&C("roomSetpointHaValid")&&f,p=t||r?"Nog activeren":"Hardwareprofiel niet herkend";u&&(p=g?"Geldig":l==="OT thermostat"?"OpenTherm-verbinding controleren":l==="CIC"?"CiC-feed controleren":"HA-proxy's controleren");let b=l==="OT thermostat"?"OpenTherm-thermostaat":l==="CIC"?"CiC JSON-feed":"Home Assistant-proxy's",S=t?"De Q-edition leest kamertemperatuur en kamer-setpoint rechtstreeks uit via OpenTherm.":l==="CIC"?"OpenQuatt leest beide thermostaatwaarden samen uit de lokale CiC JSON-feed.":"OpenQuatt gebruikt de vaste HA-proxy's voor kamertemperatuur en kamer-setpoint.";return{hardwareLabel:e.hardwareLabel,isQEdition:t,isRemoteProfile:r,selectedSource:l,sourceLabel:b,explanation:S,configurationApplied:u,status:p,roomTempValue:v,roomSetpointValue:w,valuesAvailable:f,...c,canApply:(t||r)&&y("roomTempSource")&&y("roomSetpointSource")&&(l!=="OT thermostat"||y("otEnabled"))&&(l!=="CIC"||y("cicPollingEnabled")&&y("cicFeedUrl")&&!!c.normalizedDraftUrl)}}function _E(){let e=yn(),t=o.busyAction==="quickstart-flow-source"||o.busyAction==="quickstart-flow-refresh",r=o.busyAction==="quickstart-flow-test-start"||o.busyAction==="quickstart-flow-test-abort",n=t||r||e.flowTestActive,a=e.status==="Geldig"||e.status==="Bron actief, geen circulatie"?" is-active":"",i=e.flowAvailable?`${Math.round(e.flowValue)} L/h`:"Nog geen actuele waarde",l=e.requiresCic?dh(e,n):"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("flow-source"))}</p>
        <h2 class="oq-helper-section-title">Flowmeting configureren</h2>
        <p class="oq-helper-section-copy">Je Quatt-versie en het hardwareprofiel bepalen automatisch welke flowbron nodig is. Controleer de uitkomst en activeer de configuratie.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${fe("quickStartFlowSource","Vastgestelde flowbron",e.explanation,`
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
        ${Et({nextDisabled:!e.configurationApplied||e.flowTestActive||r,nextDisabledLabel:r?"Even wachten":e.flowTestActive?"Test loopt":e.requiresCic?"Sla eerst op":"Activeer eerst"})}
      </section>
    `}function RE(){let e=ds(),t=o.busyAction==="quickstart-thermostat-source",r=e.status==="Geldig"?" is-active":"",n=e.isRemoteProfile?`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2" data-oq-settings-field="quickStartThermostatSource">
        <div class="oq-settings-field-head">
          <h3>Gegevensbron</h3>
          ${Pt("quickStartThermostatSource","Gegevensbron","Kamertemperatuur en kamer-setpoint worden bewust als gekoppeld paar ingesteld.")}
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
    `:"",a=e.selectedSource==="CIC"?dh(e,t):"",i=e.selectedSource==="HA input"?`
      <article class="oq-helper-surface oq-settings-field oq-settings-field--span-2">
        <div class="oq-settings-field-head"><h3>Home Assistant-contract</h3></div>
        <div class="oq-settings-field-control">
          <p class="oq-settings-action-note">Verwacht <strong>sensor.openquatt_ext_room_temperature</strong> en <strong>sensor.openquatt_ext_room_setpoint</strong>, plus de bijbehorende <strong>_valid</strong> binary sensors.</p>
          <p class="oq-settings-action-note"><a href="https://github.com/OpenQuatt/OpenQuatt/tree/main/docs/dashboard#optioneel-dynamische-bronselectie-via-home-assistant" target="_blank" rel="noreferrer">Bekijk de Home Assistant-configuratie en het dynamische bronnenpakket</a>.</p>
        </div>
      </article>
    `:"";return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("thermostat-source"))}</p>
        <h2 class="oq-helper-section-title">Thermostaatgegevens configureren</h2>
        <p class="oq-helper-section-copy">Kamertemperatuur en kamer-setpoint horen bij dezelfde thermostaatbron en worden daarom samen ingesteld.</p>
        <div class="oq-settings-grid oq-settings-grid--quickstart">
          ${fe("quickStartThermostatSourceStatus",e.isQEdition?"Vastgestelde thermostaatbron":"Gekozen thermostaatbron",e.explanation,`
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
        ${Et({nextDisabled:!e.configurationApplied,nextDisabledLabel:e.isQEdition?"Activeer eerst":"Sla eerst op"})}
      </section>
    `}function ph(){return!o.quickStartModalOpen||o.loadingEntities||o.complete===null||o.complete&&o.quickStartModalMode!=="generation"?"":o.quickStartModalMode==="generation"?ee({id:"quickstart-forced",titleId:"oq-generation-modal-title",kicker:"Installatie",title:"Quatt Hybrid-versie aanpassen",copy:"Kies de versie die bij jouw Quatt hoort. Deze keuze bepaalt de basis van de regeling.",copyInHeader:!0,backdropClass:"oq-helper-modal-backdrop--quickstart",className:"oq-helper-modal--wide oq-helper-modal--quickstart oq-helper-modal--generation",sectionAttributes:'data-oq-quickstart-scroller data-oq-quickstart-step="generation"',closeAction:"close-quickstart-modal",closeLabel:"Sluit versie-popup",body:ch("picker")}):ee({id:"quickstart-forced",titleId:"oq-quickstart-modal-title",kicker:"Quick Start",title:"Rond eerst de Quick Start af",copy:"Controleer eerst je setup en loop daarna stap voor stap door de basisinstellingen.",copyInHeader:!0,backdropClass:"oq-helper-modal-backdrop--quickstart",className:"oq-helper-modal--wide oq-helper-modal--quickstart",sectionAttributes:`data-oq-quickstart-scroller data-oq-quickstart-step="${s(fh().id)}"`,closeAction:"close-quickstart-modal",closeLabel:"Sluit Quick Start-popup",body:`<div class="oq-helper-grid oq-helper-grid--quickstart oq-helper-grid--quickstart-modal">${jE()}${VE()}</div>`})}function HE(){return o.root?o.root.querySelector("[data-oq-quickstart-scroller]"):null}var mh=Ao({getScroller:HE,getToken:()=>o.quickStartScrollRestoreToken,setToken:e=>{o.quickStartScrollRestoreToken=e},isActive:()=>o.quickStartModalOpen,getIdentity:e=>String(e.dataset.oqQuickstartStep||""),preserveGrowth:!0,stickToBottom:!0}),gh=mh.capture,lu=mh.queue;function lh(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("strategy"))}</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${eu()}
        ${Jc("oq-settings-grid oq-settings-grid--quickstart")}
        ${Et()}
      </section>
    `}function DE(){let e=C("otbConnectionMismatch");return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("boiler"))}</p>
        <h2 class="oq-helper-section-title">CV-ketel of boiler</h2>
        <p class="oq-helper-section-copy">Geef aan of er een ketel aanwezig is, hoe die is aangesloten en of deze automatisch mag overnemen wanneer alle warmtepompen door een storing uitvallen.</p>
        ${iu("oq-settings-grid oq-settings-grid--quickstart oq-settings-boiler-simple-grid",!0)}
        ${Et({nextDisabled:e})}
      </section>
    `}function NE(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("flow"))}</p>
        <h2 class="oq-helper-section-title">Flowregeling en afstelling</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt de pomp regelt. De Kp- en Ki-waarden en autotune vind je later terug onder Instellingen \u2192 Installatie \u2192 Flowregeling en Service & commissioning.</p>
        ${Zc("oq-settings-grid oq-settings-grid--quickstart")}
        ${Et()}
      </section>
    `}function OE(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("heating"))}</p>
        <h2 class="oq-helper-section-title">${s(se()?"Stooklijn instellen":"Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${s(se()?"Stel hier je stooklijn en fallback-aanvoertemperatuur in.":"Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.")}
        </p>
        ${se()?`
            <div class="oq-settings-grid oq-settings-grid--quickstart">${tu()}</div>
            <div class="oq-settings-curve-shell">
              ${nu()}
            </div>
            ${Yc()}
          `:`
            ${Xc("oq-settings-grid oq-settings-grid--quickstart")}
            ${ou()}
          `}
        ${Et()}
      </section>
    `}function PE(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("water"))}</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5\xB0C erboven hard in.</p>
        ${Ac("oq-settings-grid oq-settings-grid--quickstart")}
        ${Et()}
      </section>
    `}function LE(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("silent"))}</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${Ki("oq-settings-grid oq-settings-grid--quickstart")}
        ${Et()}
      </section>
    `}function IE(){let e=C("usageTelemetryEnabled"),t=C("usageTelemetryChoiceConfigured"),r=o.loadingEntities||!!o.busyAction;return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("usage-telemetry"))}</p>
        <h2 class="oq-helper-section-title">Gebruiksstatistieken</h2>
        <p class="oq-helper-section-copy">Bij een nieuwe Quick Start staat het delen van beperkte technische statistieken standaard aan. Wil je dit niet, zet delen hier uit. Je kunt de keuze later altijd wijzigen.</p>
        ${cs({enabled:e,busy:r})}
        ${us()}
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
        ${Et({nextDisabled:r||!t||!!o.controlError,nextDisabledLabel:r||!t?"Keuze opslaan...":"Controleer keuze"})}
      </section>
    `}function FE(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">${s(mt("confirm"))}</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog \xE9\xE9n keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${KE()}
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
    `}function jE(){let e=fh().id;return e==="setup"?$E():e==="generation"?ch():e==="boiler"?y("boilerCvAssistEnabled")?DE():lh():e==="flow-source"?_E():e==="thermostat-source"?RE():e==="flow"?NE():e==="heating"?OE():e==="water"?PE():e==="silent"?LE():e==="usage-telemetry"?IE():e==="confirm"?FE():lh()}function xr(){let e=su().isQEdition;return Or.filter(t=>(t.id!=="setup"||e)&&(!t.optionalEntity||y(t.optionalEntity)))}function mt(e){let t=xr().findIndex(r=>r.id===e);return`Stap ${Math.max(0,t)+1}`}function WE(e){let t=ps(),r=e===t,n=o.complete===!0||e<t;return{tone:r?"current":n?"done":"upcoming",label:r?"Actief":n?"Gereed":"Volgend",current:r}}function BE(e=!1){return xr().map((t,r)=>{let n=WE(r);return`
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
      `}).join("")}function fh(){let e=xr();return e.find(t=>t.id===o.currentStep)||e[0]||Or[0]}function ps(){return Math.max(0,xr().findIndex(e=>e.id===o.currentStep))}function hh(e){let t=xr(),r=Math.min(t.length-1,Math.max(0,ps()+e));o.currentStep=t[r]?.id||Or[0].id}function Et(e={}){let t=ps(),r=xr(),n=t>0?r[t-1]:null,a=t<r.length-1?r[t+1]:null;return`
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
    `}function VE(){let e=ps(),t=xr();return`
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${e+1} van ${t.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${BE(!0)}
        </div>
        ${o.controlNotice?`<p class="oq-helper-notice">${s(o.controlNotice)}</p>`:""}
        ${o.controlError?`<p class="oq-helper-error">${s(o.controlError)}</p>`:""}
      </section>
    `}function KE(){let e=Te(j("hpGeneration")),t=se()?"Stooklijn":"Power House",r=S=>Te(j(S)),n=[],a=se()?[["Regelprofiel",r("curveControlProfile")],["Aanvoer bij -20\xB0C",Y("curveM20")],["Aanvoer bij -10\xB0C",Y("curveM10")],["Aanvoer bij 0\xB0C",Y("curve0")],["Aanvoer bij 5\xB0C",Y("curve5")],["Aanvoer bij 10\xB0C",Y("curve10")],["Aanvoer bij 15\xB0C",Y("curve15")],["Fallback-aanvoer",Y("curveFallbackSupply")]]:[["Profiel",r("phResponseProfile")],["Rated maximum house power",Y("housePower")],["Maximum heating outdoor temperature",Y("houseOutdoorMax")],["Temperatuurreactie",Y("phKp")],["Comfort onder setpoint",Y("phComfortBelow")],["Comfort boven setpoint",Y("phComfortAbove")]],i=String(T("flowControlMode")||""),l=yn(),c=[["Status",l.status],["Actuele flow",l.flowAvailable?`${Math.round(l.flowValue)} L/h`:"Nog geen actuele waarde"]],d=ds(),u=[["Status",d.status],["Kamertemperatuur",Number.isFinite(d.roomTempValue)?`${d.roomTempValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"],["Kamer-setpoint",Number.isFinite(d.roomSetpointValue)?`${d.roomSetpointValue.toFixed(1)} \xB0C`:"Nog geen actuele waarde"]],m=[["Flowregeling",i==="Manual PWM"?"Vaste pompstand":"Gewenste flow"],i==="Manual PWM"?["Vaste pompstand",Y("manualIpwm")]:["Gewenste flow",Y("flowSetpoint")]],v=y("boilerCvAssistEnabled")?[["CV-ketel/boiler aanwezig",C("boilerCvAssistEnabled")?"Ja":"Nee"],...C("boilerCvAssistEnabled")?[...y("boilerConnection")?[["Ketelaansluiting",String(T("boilerConnection")||"R1")==="OpenTherm"?"OpenTherm (OTB)":"Aan/uit (R1)"]]:[],["Ingesteld ketelvermogen",Y("boilerRatedHeatPower")],...y("boilerFaultFallbackEnabled")?[["Automatische ketelovername bij warmtepompstoring",C("boilerFaultFallbackEnabled")?"Aan":"Uit"]]:[]]:[]]:[],w=[["Maximale watertemperatuur",Y("maxWater")]],f=[["Start stille uren",jn(T("silentStartTime"))||"\u2014"],["Einde stille uren",jn(T("silentEndTime"))||"\u2014"],["Maximaal niveau tijdens stille uren",Y("silentMax")],["Maximaal niveau overdag",Y("dayMax")]],g=y("usageTelemetryEnabled")?[["Technische gebruiksstatistieken",C("usageTelemetryEnabled")?"Delen":"Niet delen"]]:[],p=S=>`
      <div class="oq-helper-review-list">
        ${S.filter(k=>k&&k[1]).map(([k,E])=>`
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${s(k)}</span>
                <strong class="oq-helper-review-value">${s(E)}</strong>
              </div>
            `).join("")}
      </div>
    `,b=(S,k,E="")=>`
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${s(S)}</h3>
        ${E?`<p class="oq-helper-review-summary"><strong>${s(E)}</strong></p>`:""}
        ${p(k)}
      </article>
    `;return`
      <div class="oq-helper-fields oq-helper-fields--review">
        ${b("Quatt Hybrid-versie",n,e)}
        ${b("Flowmeting",c,l.sourceLabel)}
        ${b("Verwarmingsstrategie",a,t)}
        ${b("Watertemperatuur",w)}
        ${b("Thermostaatgegevens",u,d.sourceLabel)}
        ${b("Flowregeling",m)}
        ${v.length?b("CV-ketel / boiler",v):""}
        ${b("Stille uren",f)}
        ${g.length?b("Gebruiksstatistieken",g):""}
      </div>
    `}function Ea(e,t){return`
      <div class="oq-settings-cooling-fact">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
      </div>
    `}function cu(e){let t=String(e||"").trim();return t?{Ready:"Gereed","Waiting for room request":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","Cooling enabled, waiting for room temperature above cooling setpoint":"Koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint","No dew point source":"Geen dauwpuntbron","OpenQuatt paused":"OpenQuatt gepauzeerd","Cooling disabled":"Koeling uitgeschakeld","Cooling minimum unavailable":"Minimale koel-aanvoer onbekend","Flow too low":"Flow te laag","Fallback active":"Dauwpuntsbenadering actief","Fallback active (+0.5\xB0C warm night)":"Dauwpuntsbenadering actief (+0,5\xB0C warme nacht)","Fallback active (+1.0\xB0C very warm night)":"Dauwpuntsbenadering actief (+1,0\xB0C zeer warme nacht)","Fallback active (+1.5\xB0C tropical night)":"Dauwpuntsbenadering actief (+1,5\xB0C tropische nacht)","User responsibility (no dew point or fallback)":"Expliciet toegestaan (geen dauwpunt of benadering)","Fallback cooling active":"Dauwpuntsbenadering actief","Fallback corrected by warm night":"Dauwpuntsbenadering gecorrigeerd door warme nacht","Fallback blocked by tropical night":"Dauwpuntsbenadering geblokkeerd door tropische nacht"}[t]||t:""}function bh(){let e=!y("coolingRoomRequestRequired")||C("coolingRoomRequestRequired"),t=[oe("coolingMinimumSupplyTemp","Minimale koel-aanvoer","Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),ro("coolingDemandMax","Maximale koelsterkte","Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.","",{minLabel:"Rustig",maxLabel:"Krachtig",valueLabel:`${Y("coolingDemandMax")} max`}),oe("coolingRestartDelta","Herstartmarge watertemperatuur","Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),oe("coolingSafetyMargin","Dauwpunt veiligheidsmarge","Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur.")].filter(Boolean),r=[y("coolingRoomRequestRequired")?Vm("coolingRoomRequestRequired","Koelvraag via kamerthermostaat","Aan: OpenQuatt wacht op echte koelvraag vanuit de kamer. Uit: koeltoestemming geldt direct als koelvraag.","Koelvraag start en stopt met de marges hieronder.","Koeltoestemming geldt direct als koelvraag. De start- en stopmarge worden nu niet gebruikt.","oq-settings-field--span-2"):"",e?oe("coolingRequestOnDelta","Koelvraag start boven setpoint","Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."):"",e?oe("coolingRequestOffDelta","Koelvraag stopt boven setpoint","Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."):""].filter(Boolean),n=r.length>0,a=y("coolingWithoutDewPointMode"),i=[y("coolingGuardMode")?Ea("Route",Te(j("coolingGuardMode","Onbekend"))):"",y("coolingEffectiveMinSupplyTemp")?Ea("Actieve ondergrens",j("coolingEffectiveMinSupplyTemp","\u2014")):""].filter(Boolean),l=i.length?fe("coolingGuardStatus","Actuele beveiliging","Laat zien welke route koeling nu begrenst en welke ondergrens daadwerkelijk geldt.",`<div class="oq-settings-cooling-facts">${i.join("")}</div>`,"oq-settings-field--span-2 oq-settings-field--cooling-status"):"",c=[y("outsideTempSelected")?Ea("Actuele buitentemperatuur",j("outsideTempSelected","\u2014")):"",y("coolingFallbackNightMinOutdoorTemp")?Ea("Nachtminimum buitentemperatuur",j("coolingFallbackNightMinOutdoorTemp","\u2014")):"",y("coolingFallbackMinSupplyTemp")?Ea("Berekende minimum watertemperatuur",j("coolingFallbackMinSupplyTemp","\u2014")):""].filter(Boolean),d=c.length?`<div class="oq-settings-cooling-fallback-metrics">${c.join("")}</div>`:"",u=a||c.length>0,v=j("coolingGuardMode","").toLowerCase().includes("fallback"),w=[oe("coolingPidKp","Proportionele reactie (Kp)","Bepaalt hoe sterk de koelregeling direct reageert op het verschil tussen gewenste en gemeten aanvoertemperatuur."),oe("coolingPidKi","Langdurige correctie (Ki)","Corrigeert een klein temperatuurverschil dat langere tijd blijft bestaan. Verhoog alleen in kleine stappen."),oe("coolingPidKd","Demping (Kd)","Remt snelle veranderingen af. Een te hoge waarde kan de koelregeling onnodig traag of onrustig maken.")].filter(Boolean).join(""),f=pr("cooling","Geavanceerde koelafstelling","Deze PID-waarden verfijnen hoe OpenQuatt het koel-aanvoerdoel volgt. Laat ze op de standaardwaarden staan zolang koeling stabiel en zonder pendelen werkt.",w?`<div class="oq-settings-grid oq-settings-grid--pid">${w}</div>`:"");if(!t.length&&!n&&!a&&!l&&!u&&!f)return"";let g={"Dew point required":"Gebruik alleen een betrouwbare dauwpuntmeting. Zonder meting blijft koeling uit.","Allow without dew point":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use fallback":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, use dew point approximation":"Gebruik dauwpunt waar mogelijk. Zonder meting geldt de conservatieve benadering hieronder.","Allow without dew point, user responsibility":"Negeer dauwpunt en benadering; alleen de ingestelde minimale koel-aanvoer geldt."};return re("Koeling","Koelingsinstellingen","Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",`
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
            ${a?zm("coolingWithoutDewPointMode","Keuze koelbeveiliging","Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.",g,"oq-settings-field--span-2 oq-settings-field--cooling-guard-choice"):""}
            ${l}
            ${u?`
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline"${v?" open":""}>
              <summary>Dauwpuntsbenadering bekijken</summary>
              <div class="oq-settings-callout-body">
                ${d}
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
        ${f}
      `)}function vh(){let e=y("otEnabled"),t=y("cicPollingEnabled")||y("cicFeedUrl"),r=y("cicCompatibilityMode"),n=y("otLinkProblem")||y("otbLinkAvailable")||y("boilerCommandValid")||y("cicDataStale")||y("cicJsonFeedOk");if(!e&&!t&&!r&&!n)return"";let a=Ht("cicPollingEnabled"),i=Ht("otEnabled"),c=String(T("boilerConnection")||"R1")==="OpenTherm",d=({label:E,value:q,active:M=!1})=>`
      <div class="oq-settings-integration-diagnostic-item${M?" is-warning":""}">
        <dt>${s(E)}</dt>
        <dd>${s(q)}</dd>
      </div>
    `,u=(E,q,M="Actief",_="Normaal",H={})=>{if(!y(E))return"";let F=Z(E);return d({label:q,value:F?M:_,active:H.warningWhenActive&&F||H.warningWhenInactive&&!F})},m=(E,q,M={})=>{let _=M.fallbackKey||"";return!y(E)&&!(_&&y(_))?"":d({label:q,value:Ce(y(E)?E:_,M)})},v=(E,q)=>{let M=q.filter(Boolean).join("");return M?`
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${s(E)}</h4>
          <dl>${M}</dl>
        </article>
      `:""},w=y("cicFeedUrl")?`
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
            value="${s(String(He("cicFeedUrl")||""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${o.loadingEntities?"disabled":""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    `:"",f=v("OpenTherm thermostaat (OTT)",[y("otLinkProblem")?d({label:"Thermostaatlink",value:i?Z("otLinkProblem")?"Probleem":"OK":"Uitgeschakeld",active:i&&Z("otLinkProblem")}):"",u("otThermostatStatusValid","Status geldig","Ja","Nee"),u("otThermostatChEnable","Thermostaat CH","Actief","Normaal"),u("otThermostatCoolingEnable","Thermostaat koeling","Actief","Normaal"),m("otControlSetpoint","Control setpoint"),m("otRoomSetpoint","Room setpoint",{fallbackKey:"roomSetpoint"}),m("otRoomTemp","Room temperature",{fallbackKey:"roomTemp"})]),g=v("Ketelregeling",[y("boilerConnection")?d({label:"Aansluiting",value:c?"OpenTherm (OTB)":"Aan/uit (R1)"}):"",u("boilerCommandValid","Commando geldig","Ja","Nee",{warningWhenInactive:!0}),u("boilerCommandActive","Warmtevraag","Actief","Uit"),m("boilerCommandSource","Bron"),m("boilerCommandTargetTemperature","Doeltemperatuur"),m("boilerCommandRequestedPower","Gevraagd vermogen"),m("boilerCommandAge","Commando-ouderdom"),m("boilerBlockReason","Blokkadereden")]),p=[y("otbLinkAvailable")?d({label:"Ketellink",value:c?Z("otbLinkAvailable")?"OK":"Niet verbonden":"Niet geselecteerd",active:c&&!Z("otbLinkAvailable")}):""];c&&p.push(u("otbChCommand","CH-commando","Actief","Uit"),m("otbControlSetpointCommand","TSet-commando"),u("otbChActive","CV actief","Actief","Uit"),u("otbFlameOn","Vlam","Aan","Uit"),u("otbDhwActive","Tapwater actief","Actief","Uit"),m("otbRelativeModulation","Modulatie"),m("otbChPressure","Waterdruk"),m("otbBoilerWaterTemp","Keteltemperatuur"),m("otbReturnWaterTemp","Retourtemperatuur"),m("otbDhwTemp","Tapwatertemperatuur"),u("otbFaultIndication","Ketelfout","Actief","Geen",{warningWhenActive:!0}),u("otbDiagnosticIndication","Diagnosemelding","Actief","Geen",{warningWhenActive:!0}),u("otbServiceRequest","Service gevraagd","Ja","Nee",{warningWhenActive:!0}),u("otbLowWaterPressure","Lage waterdruk","Ja","Nee",{warningWhenActive:!0}),u("otbFlameFault","Vlamstoring","Ja","Nee",{warningWhenActive:!0}),u("otbAirPressureFault","Luchtdrukstoring","Ja","Nee",{warningWhenActive:!0}),u("otbWaterOverTemp","Overtemperatuur","Ja","Nee",{warningWhenActive:!0}),m("otbOemFaultCode","OEM-foutcode"),m("otbOemDiagnosticCode","OEM-diagnosecode"),m("otbLastResponseAge","Laatste response"),m("otbLastResponseId","Laatste message-ID"),m("otbResponseCount","Geldige responses"));let b=v("OpenTherm ketel (OTB)",p),S=v("CIC-feed",[y("cicJsonFeedOk")?d({label:"JSON-feed",value:a?Z("cicJsonFeedOk")?"OK":"Probleem":"Polling uit",active:a&&!Z("cicJsonFeedOk")}):"",y("cicDataStale")?d({label:"Data",value:a?Z("cicDataStale")?"Verouderd":"Actueel":"Polling uit",active:a&&Z("cicDataStale")}):"",u("cicChEnabled","CH-vraag","Actief","Normaal"),u("cicCoolingEnabled","Koeling","Actief","Normaal"),m("cicControlSetpoint","Control setpoint"),m("cicRoomSetpoint","Room setpoint"),m("cicRoomTemp","Room temperature"),m("cicFlowrate","Flow"),m("cicLastSuccessAge","Laatste succes")]),k=f||g||b||S?`
      <details class="oq-settings-integration-diagnostics"${o.integrationDiagnosticsOpen?" open":""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>Thermostaat-, ketel- en CiC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${f}
          ${g}
          ${b}
          ${S}
        </div>
      </details>
    `:"";return re("Integratie","OpenTherm en CiC","Configureer de thermostaatbus, externe CiC-feed en Quatt app-compatibiliteit.",`
        <div class="oq-settings-integration-grid">
          <p class="oq-settings-action-note oq-settings-integration-card--wide">
            De aansluiting van de cv-ketel \u2014 OpenTherm of aan/uit via R1 \u2014 stel je in onder <strong>Instellingen \u2192 Installatie</strong>. Daarom wordt deze hier niet apart weergegeven.
          </p>
          ${xi("otEnabled","OpenTherm-thermostaat","Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${xi("cicPollingEnabled","CIC-polling","JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${xi("cicCompatibilityMode","CiC-compatibiliteit","Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${w}
        </div>
        ${k}
      `)}function wh(){if(!Ln.some($=>y($)))return"";let t=Ht("cicPollingEnabled"),r=Ht("otEnabled"),n=($={})=>$.haValueKey||($.haKeys||[]).find(A=>!/valid$/i.test(A))||"",a=($={})=>$.haValidKey||($.haKeys||[]).find(A=>/valid$/i.test(A))||"",i=($="",A="")=>!!$&&!!A&&y($)&&y(A)&&Z(A),l=($={})=>i(n($),a($)),c={mqttCoolingDewPoint:"cooling_dew_point",mqttOutsideTemperature:"outside_temperature",mqttRoomTemperature:"room_temperature",mqttRoomSetpoint:"room_setpoint",mqttHeatingEnable:"heating_enable",mqttCoolingEnable:"cooling_enable"},d=o.mqttStatus?.enabled!==!1,u=($={})=>$.mqttTopicKey||c[$.valueKey]||"",m=($="")=>{if(!d)return!1;if(!$)return!0;let A=o.mqttStatus?.input_enabled;return A&&typeof A=="object"&&Object.prototype.hasOwnProperty.call(A,$)?A[$]!==!1:!0},v=($="")=>d?m($)?"":"MQTT-topic staat uit":"MQTT staat uit",w=$=>/\bMQTT\b/i.test(String($||"")),f=($,A={})=>$==="CIC"?t:$==="OT thermostat"?r:$==="HA input"?l(A):$==="CIC or HA input"?t||l(A):w($)?m(u(A)):$==="Flowmeter HP2"?y("hp2Flow"):$==="Local aggregate HP1/HP2"?y("flowLocal")||y("hp2Flow"):!0,g=($,A={})=>$==="CIC"&&!t?"CIC-polling staat uit":$==="OT thermostat"&&!r?"OpenTherm staat uit":$==="HA input"&&!l(A)?"HA-bron ongeldig":$==="CIC or HA input"&&!t&&!l(A)?"CIC en HA ontbreken":w($)?v(u(A)):$==="Flowmeter HP2"&&!y("hp2Flow")?"HP2-flow ontbreekt":$==="Local aggregate HP1/HP2"&&!y("flowLocal")&&!y("hp2Flow")?"Lokale flow ontbreekt":"",p=($,A="Actief",V="Normaal")=>y($)?Z($)?A:V:"",b=($,A={})=>{let V=String($||"").trim();return V?A.optionLabels?.[V]||Te(V):""},S=($,A={})=>{let V=String(T($)||"").trim();return V?b(V,A):""},k=$=>{let A=to($,"");return A?Te(A):""},E=$=>{let A=String(to($,"")||"").trim();return!A||A==="None"?"":Te(A)},q=(...$)=>$.find(A=>String(A||"").trim())||"",M=()=>{let $=to("waterSupplyTempEffectiveSource","");if($)return Te($);let A=S("waterSupplySource");if(String(T("waterSupplySource")||"")==="Local"&&y("localWaterSupplyTempSource")){let V=S("localWaterSupplyTempSource");return V?`${A} - ${V}`:A}return A},_=()=>{let $=String(T("flowSource")||"").trim();if($==="Outdoor unit"){if(y("qFlowSource")){let A=String(T("qFlowSource")||"").trim(),V=String(T("hpGeneration")||"").trim();return A==="Local"||A==="Auto"&&V==="V1"?A==="Auto"?"Lokaal (auto)":"Lokaal":q(S("outdoorUnitFlowMode"),A==="Auto"?"Buitenunit (auto)":"Buitenunit")}return q(S("outdoorUnitFlowMode"),"Quatt-flow")}return Te($)},H=()=>{let $=String(T("outsideTempSource")||"").trim(),A=v("outside_temperature");if($==="MQTT"&&A)return A;if($!=="Auto")return Te($);let V=R("outsideTempLocalAggregated"),K=R("outsideTempHa"),te=R("mqttOutsideTemperature"),ae=!Number.isNaN(V),he=y("outsideTempHaValid")?Z("outsideTempHaValid")&&!Number.isNaN(K):!Number.isNaN(K),be=m("outside_temperature")&&y("mqttOutsideTemperatureValid")&&Z("mqttOutsideTemperatureValid")&&!Number.isNaN(te),ue=[ae?{label:"Buitenunit",value:V}:null,he?{label:"HA-invoer",value:K}:null,be?{label:"MQTT",value:te}:null].filter(Boolean);return ue.length?ue.reduce((Ye,ve)=>ve.value<Ye.value?ve:Ye,ue[0]).label:"Auto"},F=$=>{if(!y($))return NaN;let A=Number(T($));if(Number.isFinite(A))return A;let K=String(o.entities[$]?.state??"").trim().replace(",",".").match(/-?\d+(?:\.\d+)?/);return K?Number(K[0]):NaN},L=($,A="")=>{if(!y($))return!1;let V=F($);return(A?Z(A):!0)&&Number.isFinite(V)},W=()=>{let $=String(T("coolingDewPointSource")||"").trim();if($==="Home Assistant")return L("coolingDewPointHa","coolingDewPointHaValid")?"HA-invoer":"HA-invoer ontbreekt";if($==="MQTT"){let K=v("cooling_dew_point");return K||(L("mqttCoolingDewPoint","mqttCoolingDewPointValid")?"MQTT":"MQTT ontbreekt of verouderd")}let A=L("coolingDewPointHa","coolingDewPointHaValid"),V=m("cooling_dew_point")&&L("mqttCoolingDewPoint","mqttCoolingDewPointValid");if(A&&V){let K=F("coolingDewPointHa");return F("mqttCoolingDewPoint")>K?"MQTT":"HA-invoer"}return A?"HA-invoer":V?"MQTT":$?Te($):"Auto"},x=({label:$,value:A="",key:V="",active:K=!1,status:te="",statusTone:ae="",statusTitle:he=""})=>{let be=A||(V?Ce(V):"");if(!be&&!te)return"";let ue=String(ae||"").replace(/[^a-z0-9_-]/gi,""),Ye=he||te,ve=te?`<em class="oq-settings-source-status${ue?` oq-settings-source-status--${s(ue)}`:""}" title="${s(Ye)}" aria-label="${s(`${te}: ${Ye}`)}">${s(te)}</em>`:"";return`
        <div class="oq-settings-source-row${K?" is-warning":""}${te?" has-status":""}">
          <span>${s($)}${ve}</span>
          <strong>${s(be)}</strong>
        </div>
      `},O=({label:$="HA-invoer",valueKey:A="",validKey:V="",value:K=""})=>{if(!A||!V||!y(A)||!y(V))return[];let te=Z(V);return[x({label:$,key:A,value:K,status:te?"Geldig":"Ongeldig",statusTone:te?"valid":"invalid",statusTitle:te?"Home Assistant geeft dit signaal geldig door. OpenQuatt mag deze HA-invoer gebruiken.":"Home Assistant geeft dit signaal niet geldig door. OpenQuatt gebruikt deze HA-invoer dan niet als bron."})]},D=({label:$="MQTT",valueKey:A="",validKey:V="",value:K="",topicKey:te=""})=>{if(!A||!V||!y(A)||!y(V))return[];if(!m(te||c[A]))return[];let ae=Z(V),he=ae?"MQTT heeft een geldige, recente waarde ontvangen. OpenQuatt mag deze MQTT-invoer gebruiken.":"MQTT heeft nog geen geldige recente waarde ontvangen. OpenQuatt gebruikt deze MQTT-invoer dan niet als bron.";return[x({label:$,key:A,value:ae?K:"\u2014",status:Ul(V),statusTone:ae?"valid":"invalid",statusTitle:he})]},N=({title:$,icon:A="",content:V="",rows:K=[],copy:te="",className:ae=""})=>{let he=K.filter(Boolean).join("");return!V&&!he&&!te?"":`
        <section class="oq-settings-source-group${ae?` ${s(ae)}`:""}">
          <h5>
            ${A?`<span class="oq-settings-source-group-icon">${ge(A,"oq-settings-source-group-icon-svg")}</span>`:""}
            <span>${s($)}</span>
          </h5>
          ${V?`<div class="oq-settings-source-group-content">${V}</div>`:""}
          ${he?`<div class="oq-settings-source-rows">${he}</div>`:""}
          ${te?`<p class="oq-settings-source-group-copy">${s(te)}</p>`:""}
        </section>
      `},J=($,A={})=>{if(!y($))return{markup:"",warning:""};let V=o.entities[$]||{},K=String(T($)||""),te=Lt(V),ae=new Set(A.hiddenOptions||[]),he=K&&ae.has(K),be=te.filter(De=>!ae.has(De)&&f(De,A)),ue=K&&!f(K,A),Ye=w(K)&&!d||K==="HA input"&&A.keepUnavailableCurrent!==!0,Je=(he&&!be.includes(K)?[K,...be]:ue&&!Ye&&!be.includes(K)?[K,...be]:be).map(De=>{let fo=b(De,A);return`<option value="${s(De)}" ${De===K?"selected":""}>${s(fo)}</option>`}).join(""),go=ue&&Ye?'<option value="" selected disabled>Kies een beschikbare bron</option>':"";return{markup:`
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${s(A.label||"Bron")}</span>
              ${A.infoCopy?Pt(A.infoId||$,A.infoTitle||A.label||"Bron",A.infoCopy):""}
            </span>
            <select class="oq-helper-select" data-oq-field="${s($)}" ${o.loadingEntities?"disabled":""}>
              ${go}${Je}
            </select>
          </label>
        `,warning:he?"Huidige bron is legacy; kies een nieuwe bron.":ue?`Huidige bron niet beschikbaar: ${g(K,A)}`:""}},P=({key:$,title:A,icon:V="",select:K,secondarySelect:te=null,secondarySelects:ae=null,activeRows:he=[],measurementRows:be=[],activeCopy:ue="",rows:Ye=[],warning:ve=""})=>{let Je=K&&K.when!==!1?J(K.key,K):{markup:"",warning:""},De=(Array.isArray(ae)?ae:te?[te]:[]).filter(Ke=>Ke&&Ke.when!==!1).map(Ke=>J(Ke.key,Ke)).filter(Ke=>Ke.markup),fo=De.map(Ke=>Ke.markup).join(""),ho=De.map(Ke=>Ke.warning).find(Boolean)||"",Ve=Ye.filter(Boolean).join(""),bo=`${Je.markup}${fo}`,Ae=Je.warning||ho||ve,_n=[N({title:"Configuratie",icon:"settings",className:"oq-settings-source-group--config",content:bo?`
            <div class="oq-settings-source-controls">
              ${bo}
            </div>
            ${Ae?`<p class="oq-settings-source-warning">${s(Ae)}</p>`:""}
          `:""}),N({title:"Actief",icon:"target",rows:he,copy:ue,className:"oq-settings-source-group--active"}),N({title:"Metingen",icon:"activity",rows:be,className:"oq-settings-source-group--measurements"})].filter(Boolean).join("");return!_n&&!bo&&!Ve?"":`
        <article class="oq-settings-source-card" data-oq-settings-field="${s($||K.key)}">
          <div class="oq-settings-source-card-head">
            ${V?`<span class="oq-settings-source-card-icon">${ge(V,"oq-settings-source-card-icon-svg")}</span>`:""}
            <h4>${s(A)}</h4>
          </div>
          ${_n||`
            ${bo?`
              <div class="oq-settings-source-controls">
                ${bo}
              </div>
            `:""}
            ${Ae?`<p class="oq-settings-source-warning">${s(Ae)}</p>`:""}
            ${Ve?`<div class="oq-settings-source-rows">${Ve}</div>`:""}
          `}
        </article>
      `},B=String(T("waterSupplySource")||""),X=String(T("flowSource")||""),Pe=String(T("qFlowSource")||""),Tt=String(T("outsideTempSource")||"").trim(),ht=String(T("heatingEnableSource")||"").trim()==="Disabled",mo=S("heatingEnableSource",{optionLabels:{Disabled:"Niet gebruiken"}}),Ct=String(T("coolingEnableSource")||"").trim()==="Disabled",Le={Disabled:"Niet gebruiken / handmatig",CIC:"CIC (legacy)","CIC or HA input":"CIC of HA-invoer (legacy)"},$n=S("coolingEnableSource",{optionLabels:Le}),me=E("coolingEnableEffectiveSource"),An=d?i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn buitenunit, HA-invoer en MQTT geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een bron geldig, dan wordt die gebruikt.":"Auto gebruikt de laagste geldige buitentemperatuurbron.":i("outsideTempHa","outsideTempHaValid")?"Auto gebruikt de laagste geldige buitentemperatuurbron van de buitenunit en HA-invoer. Is er maar een bron geldig, dan wordt die gebruikt.":"Auto gebruikt de laagste geldige buitentemperatuurbron.",Nr=[P({key:"room-temperature",title:"Kamertemperatuur",icon:"thermometer",select:{key:"roomTempSource",label:"Bron",haKeys:["roomTempHa","roomTempHaValid"],mqttTopicKey:"room_temperature"},activeRows:[x({label:"Waarde",key:"roomTemp"}),x({label:"Bron",value:k("roomTempEffectiveSource")})],measurementRows:[t?x({label:"CIC",key:"cicRoomTemp"}):"",r?x({label:"OpenTherm",key:"otRoomTemp"}):"",...O({valueKey:"roomTempHa",validKey:"roomTempHaValid"}),...D({valueKey:"mqttRoomTemperature",validKey:"mqttRoomTemperatureValid"})]}),P({key:"room-setpoint",title:"Kamer setpoint",icon:"target",select:{key:"roomSetpointSource",label:"Bron",haKeys:["roomSetpointHa","roomSetpointHaValid"],mqttTopicKey:"room_setpoint"},activeRows:[x({label:"Waarde",key:"roomSetpoint"}),x({label:"Bron",value:k("roomSetpointEffectiveSource")})],measurementRows:[t?x({label:"CIC",key:"cicRoomSetpoint"}):"",r?x({label:"OpenTherm",key:"otRoomSetpoint"}):"",...O({valueKey:"roomSetpointHa",validKey:"roomSetpointHaValid"}),...D({valueKey:"mqttRoomSetpoint",validKey:"mqttRoomSetpointValid"})]}),P({key:"water-supply",title:"Aanvoertemperatuur",icon:"droplet",select:{key:"waterSupplySource",label:"Bron",haKeys:["waterSupplyTempHa","waterSupplyTempHaValid"]},secondarySelect:{key:"localWaterSupplyTempSource",label:"Lokale sensor",when:B==="Local"&&y("localWaterSupplyTempSource")},activeRows:[x({label:"Waarde",key:"supplyTemp"}),x({label:"Bron",value:M()})],measurementRows:[x({label:"Lokale selectie",key:"waterSupplyTempEsp"}),x({label:"PT1000",key:"waterSupplyTempPt1000"}),x({label:"DS18B20",key:"waterSupplyTempDs18b20"}),t?x({label:"CIC",key:"cicWaterSupplyTemp"}):"",...O({valueKey:"waterSupplyTempHa",validKey:"waterSupplyTempHaValid"})]}),P({key:"flow-source",title:"Flow",icon:"waves",select:{key:"flowSource",label:"Bron",optionLabels:{"Outdoor unit":"Quatt-flow"},when:t||X==="CIC"},secondarySelects:[{key:"qFlowSource",label:"Flowpad",infoId:"qFlowSource-info",infoCopy:"Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",when:X==="Outdoor unit"&&y("qFlowSource")},{key:"outdoorUnitFlowMode",label:"Meterkeuze",infoId:"outdoorUnitFlowMode-info",infoCopy:"Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",when:X==="Outdoor unit"&&y("outdoorUnitFlowMode")&&(!y("qFlowSource")||Pe!=="Local")}],activeRows:[x({label:"OpenQuatt-flow",key:"flowSelected"}),x({label:"Bron",value:_()})],measurementRows:[x({label:"Controller-flowmeter",key:"controllerFlow"}),x({label:"Gecombineerd HP1/HP2",key:"flowLocal"}),x({label:"Flowmeter HP1",key:"hp1Flow"}),x({label:"Flowmeter HP2",key:"hp2Flow"}),t?x({label:"CIC",key:"cicFlowrate"}):""]}),P({key:"outside-temperature",title:"Buitentemperatuur",icon:"sun",warning:Tt==="MQTT"?"Na een (her)start is de MQTT-buitentemperatuur pas geldig na een nieuwe live publicatie. Tot die tijd ontbreekt de buitentemperatuur en kan OpenQuatt naar CM98 (antivriescirculatie) gaan. De wachttijd hangt af van het publicatie-interval. Overweeg daarom Auto; dan kan OpenQuatt tijdens het wachten een andere geldige buitentemperatuurbron gebruiken.":"",select:{key:"outsideTempSource",label:"Buiten bron",haKeys:["outsideTempHa","outsideTempHaValid"],mqttTopicKey:"outside_temperature",infoId:"outsideTempSource-auto-info",infoCopy:An},activeRows:[x({label:"Waarde",key:"outsideTempSelected"}),x({label:"Bron",value:H()})],measurementRows:[x({label:"Buitenunit",key:"outsideTempLocalAggregated"}),...O({valueKey:"outsideTempHa",validKey:"outsideTempHaValid"}),...D({valueKey:"mqttOutsideTemperature",validKey:"mqttOutsideTemperatureValid"})]}),P({key:"heating-enable",title:"Warmtetoestemming",icon:"flame",select:{key:"heatingEnableSource",label:"Bron",optionLabels:{Disabled:"Niet gebruiken"},haKeys:["heatingEnableHa","heatingEnableHaValid"],mqttTopicKey:"heating_enable",keepUnavailableCurrent:!0},activeRows:[x({label:"Toestemming",value:ht?"Niet gebruikt":p("heatingEnableSelected","Toegestaan","Geblokkeerd")}),ht?"":x({label:"Bron",value:mo})],measurementRows:[r?x({label:"OpenTherm",value:p("otThermostatChEnable","Toegestaan","Geblokkeerd")}):"",t?x({label:"CIC",value:p("cicChEnabled","Toegestaan","Geblokkeerd")}):"",...O({valueKey:"heatingEnableHa",validKey:"heatingEnableHaValid",value:p("heatingEnableHa","Toegestaan","Geblokkeerd")}),...D({valueKey:"mqttHeatingEnable",validKey:"mqttHeatingEnableValid",value:p("mqttHeatingEnable","Toegestaan","Geblokkeerd")})]}),P({key:"cooling-enable",title:"Koeltoestemming",icon:"snowflake",select:{key:"coolingEnableSource",label:"Bron",optionLabels:Le,hiddenOptions:["CIC","CIC or HA input"],haKeys:["coolingEnableHa","coolingEnableHaValid"],mqttTopicKey:"cooling_enable",keepUnavailableCurrent:!0},activeRows:[x({label:"Toestemming",value:p("coolingEnableSelected","Toegestaan","Geblokkeerd")}),Ct?"":x({label:"Bron",value:$n}),me&&me!==$n?x({label:"Via",value:me}):""],measurementRows:[x({label:"Handmatig",value:p("manualCoolingEnable","Aan","Uit")}),r?x({label:"OpenTherm",value:p("otThermostatCoolingEnable","Toegestaan","Geblokkeerd")}):"",...O({valueKey:"coolingEnableHa",validKey:"coolingEnableHaValid",value:p("coolingEnableHa","Toegestaan","Geblokkeerd")}),...D({valueKey:"mqttCoolingEnable",validKey:"mqttCoolingEnableValid",value:p("mqttCoolingEnable","Toegestaan","Geblokkeerd")})]}),P({key:"cooling-dew-point",title:"Koelingsdauwpunt",icon:"thermometer",select:{key:"coolingDewPointSource",label:"Bron",haKeys:["coolingDewPointHa","coolingDewPointHaValid"],mqttTopicKey:"cooling_dew_point",infoId:"coolingDewPointSource-info",infoCopy:d?"Auto gebruikt de hoogste geldige waarde als Home Assistant en MQTT tegelijk geldig zijn. Kies Home Assistant of MQTT om die bron expliciet te vereisen.":"Auto gebruikt een geldige Home Assistant-waarde wanneer die beschikbaar is. Kies Home Assistant om die bron expliciet te vereisen."},activeRows:[x({label:"Waarde",key:"coolingDewPointSelected"}),x({label:"Bron",value:W()})],measurementRows:[...O({valueKey:"coolingDewPointHa",validKey:"coolingDewPointHaValid"}),...D({valueKey:"mqttCoolingDewPoint",validKey:"mqttCoolingDewPointValid"})]})].filter(Boolean);return Nr.length?re("Bronnen","Sensorselectie","Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",`<div class="oq-settings-source-grid">${Nr.join("")}</div>`):""}function yh(){let e=Yl(),r=o.mqttStatus?.enabled===!0?`
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
                <strong class="oq-settings-quickstart-status-value">${s(fm())}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(hm())}</p>
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
      `)}function Sh(){if(!y("usageTelemetryEnabled"))return"";let e=C("usageTelemetryEnabled"),t=o.loadingEntities||o.busyAction==="switch-usageTelemetryEnabled";return re("Privacy","Gebruiksstatistieken","Hier kies je of OpenQuatt beperkte technische gebruiksstatistieken deelt. Wifi-netwerknaam, wifi-wachtwoord en andere wachtwoorden of inloggegevens worden nooit meegestuurd. Een niet-bevestigde keuze blijft uit.",`<div class="oq-usage-settings">
      ${cs({enabled:e,busy:t,settings:!0})}
      ${us({collapsible:!0,idPrefix:"oq-settings-usage",open:o.usageTelemetryDetailsOpen})}
    </div>`)}function kh(){let e=[["login","Login",pa(),ma(),"open-login-modal"],["api","Beveiligde verbinding met Home Assistant",ln(),cn(),"open-api-security-modal"]];return re("Toegang","Toegang & Beveiliging","Beheer hier de web-login en bekijk of Home Assistant veilig verbonden is.",`
        <div class="oq-settings-access-security-shell">
          ${e.map(([t,r,n,a,i])=>`
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="${t}">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">${s(r)}</p>
                <strong class="oq-settings-quickstart-status-value">${s(n)}</strong>
                <p class="oq-settings-quickstart-status-copy">${s(a)}</p>
              </div>
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="${i}">${t==="api"?"Status":"Aanpassen"}</button>
            </div>
          </div>
          `).join("")}
        </div>
      `)}function qh(){let e=Ie.has(o.settingsGroup)?o.settingsGroup:Se[0].id;return`
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${Se.map(t=>`
          <button
            class="oq-settings-group-button${t.id===e?" is-active":""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${s(t.id)}"
            aria-pressed="${t.id===e?"true":"false"}"
          >
            ${ge(t.icon,"oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${s(t.label)}</span>
          </button>
        `).join("")}
      </nav>
    `}function Eh(){let e=Ie.has(o.settingsGroup)?o.settingsGroup:Se[0].id;return`
      <div class="oq-settings-group-stack">
        ${(e==="installation"?[oh(),rh(),Vf(),Kg(),Ig(),ih(),Xf()]:e==="service"?[th(),Bg(),Wg()]:e==="heating"?[Kf()]:e==="cooling"?[bh()]:e==="integrations"?[vh(),yh(),wh()]:[nh(),_f(),kh(),Sh(),Hf(),ah()]).filter(Boolean).join("")}
      </div>
    `}function zE(){if(!o.root||o.appView!=="settings")return!1;let e=o.root.querySelector(".oq-settings-group-nav"),t=o.root.querySelector(".oq-settings-group-stack");if(!e||!t)return!1;let r=Ie.has(o.settingsGroup)?o.settingsGroup:Se[0].id;if(r==="service")return!1;let n=e.querySelectorAll(".oq-settings-group-button");if(n.length!==Se.length)return!1;n.forEach(g=>{let b=String(g.dataset.groupId||"")===r;g.classList.toggle("is-active",b),g.setAttribute("aria-pressed",b?"true":"false")}),t.querySelectorAll(".oq-settings-info").forEach(g=>{let p=String(g.dataset.oqSettingsInfo||""),b=o.settingsInfoOpen===p;g.classList.toggle("is-open",b);let S=g.querySelector(".oq-settings-info-popover");S&&(S.hidden=!b);let k=g.querySelector(".oq-settings-info-button");k&&k.setAttribute("aria-expanded",b?"true":"false")}),t.querySelectorAll("[data-oq-settings-field]").forEach(g=>{let p=String(g.dataset.oqSettingsField||"");if(!p)return;let b=g.querySelector(".oq-settings-static-value");if(b){let E=j(p);b.textContent!==E&&(b.textContent=E)}g.querySelectorAll("select[data-oq-field]").forEach(E=>{let q=String(E.dataset.oqField||p),M=String(T(q)||"");E.value!==M&&(E.value=M)}),g.querySelectorAll("input[data-oq-field]").forEach(E=>{let q=String(E.dataset.oqField||p),M=String(He(q)||"");E.value!==M&&(E.value=M)});let S=g.querySelector(".oq-helper-slider-meta strong"),k=g.querySelector('input[type="range"][data-oq-field]');if(S&&k){let E=Y(p,qe(p,T(p)));S.textContent!==E&&(S.textContent=E)}}),t.querySelectorAll("[data-select-key]").forEach(g=>{let p=String(g.dataset.selectKey||""),b=String(g.dataset.selectOption||""),S=String(T(p)||""),k=b===S;g.classList.toggle("is-active",k),g.setAttribute("aria-pressed",k?"true":"false"),p==="strategy"?g.disabled=o.loadingEntities||o.busyAction==="save-strategy":p==="hpGeneration"?g.disabled=o.loadingEntities||o.busyAction==="save-hpGeneration":p==="curveControlProfile"?g.disabled=o.loadingEntities||o.busyAction==="save-curveControlProfile":p==="phResponseProfile"&&(g.disabled=o.loadingEntities||o.busyAction==="save-phResponseProfile");let E=g.closest(".oq-settings-choice-card-shell");E&&E.classList.toggle("is-active",k)});let a=t.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");if(a){let g=String(T("phResponseProfile")||"")==="Custom";a.classList.toggle("is-active",g),a.querySelectorAll("input[data-oq-field]").forEach(b=>{let S=String(b.dataset.oqField||""),k=String(He(S)||"");b.value!==k&&(b.value=k)})}t.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach(g=>{let p=String(g.dataset.controlKey||""),b=!!T(p),S=String(g.dataset.onLabel||"Aan"),k=String(g.dataset.offLabel||"Uit"),E=String(g.dataset.switchTitle||p),q=b?S:k;g.dataset.controlState=b?"off":"on",g.classList.toggle("is-on",b),g.setAttribute("aria-checked",b?"true":"false"),g.setAttribute("aria-label",`${E}: ${q}`),g.disabled=o.loadingEntities||o.busyAction===`switch-${p}`}),t.querySelectorAll("[data-oq-switch-pill]").forEach(g=>{let p=String(g.dataset.oqSwitchPill||""),b=!!T(p),S=String(g.dataset.onLabel||"Aan"),k=String(g.dataset.offLabel||"Uit"),E=b?S:k;g.classList.toggle("is-on",b),g.textContent!==E&&(g.textContent=E)}),t.querySelectorAll("[data-oq-switch-copy]").forEach(g=>{let p=String(g.dataset.oqSwitchCopy||""),b=!!T(p),S=String(g.dataset.onCopy||""),k=String(g.dataset.offCopy||""),E=b?S:k;g.hidden=!E,g.textContent!==E&&(g.textContent=E)});let i=t.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");if(i){let g=i.querySelector(".oq-settings-quickstart-status-value"),p=i.querySelector(".oq-settings-quickstart-status-copy"),b=i.querySelector('button[data-oq-action="open-generation-modal"]'),S=Ot(),k=o.entities.hpGeneration||{},E=y("hpGeneration")&&Lt(k).length>0;if(g){let q=S||"Onbekend";g.textContent!==q&&(g.textContent=q)}if(p){let q="Pas dit aan als je een andere Quatt Hybrid hebt.";p.textContent!==q&&(p.textContent=q)}b&&(b.disabled=!E||o.loadingEntities||o.busyAction==="save-hpGeneration")}let l=t.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");if(l){let g=l.querySelector(".oq-settings-quickstart-status-value"),p=l.querySelector(".oq-settings-quickstart-status-copy"),b=l.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]'),S=Ci(),k=C("cm100Active");g&&g.textContent!==S&&(g.textContent=S);let E=k?"CM100 is actief en klaar voor commissioning.":"Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";p&&p.textContent!==E&&(p.textContent=E),b&&(b.disabled=o.loadingEntities)}let c=t.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");if(c){let g=c.querySelector(".oq-settings-quickstart-status-value"),p=c.querySelector(".oq-settings-quickstart-status-copy"),b=c.querySelector('button[data-oq-action="reset"]'),S=o.complete===!0?"Afgerond":o.complete===!1?"Open":"Laden...",k=o.complete===!0?"Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset.":o.complete===!1?"Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen.":"De status van Quick Start wordt nog geladen.";g&&g.textContent!==S&&(g.textContent=S),p&&p.textContent!==k&&(p.textContent=k),b&&(b.disabled=o.busyAction==="reset")}let d=t.querySelectorAll("[data-oq-access-security-item]");d.length&&d.forEach(g=>{let p=String(g.dataset.oqAccessSecurityItem||""),b=g.querySelector(".oq-settings-quickstart-status-value"),S=g.querySelector(".oq-settings-quickstart-status-copy"),k=g.querySelector("button[data-oq-action]");if(p==="login"){let E=pa(),q=ma();b&&b.textContent!==E&&(b.textContent=E),S&&S.textContent!==q&&(S.textContent=q)}else if(p==="api"){let E=ln(),q=cn();b&&b.textContent!==E&&(b.textContent=E),S&&S.textContent!==q&&(S.textContent=q)}k&&(k.disabled=!1)});let u=t.querySelector(".oq-settings-system-summary");if(u){let g=u.querySelectorAll(".oq-settings-system-row"),p={uptime:Xr(),ip:en(),updates:Oo(),datetime:Ti(),espTemp:ls(),restart:"Opnieuw opstarten"};g.forEach(k=>{let E=k.querySelector(".oq-settings-system-row-value"),q=k.dataset.oqDiagnosticsRow||"";if(E&&Object.prototype.hasOwnProperty.call(p,q)){let M=p[q];E.textContent!==M&&(E.textContent=M)}});let b=u.querySelector('button[data-oq-action="open-update-modal"]');b&&(b.disabled=!1);let S=u.querySelector('button[data-oq-action="open-restart-confirm"]');if(S){let k=o.busyAction==="restartAction";S.disabled=k,S.textContent=k?"Herstarten...":"Herstarten"}}t.querySelectorAll(".oq-settings-hp-offset-row").forEach(g=>{let p=String(g.dataset.oqSettingsField||""),b=String(g.dataset.oqHpOffsetRawKey||""),S=String(g.dataset.oqHpOffsetFinalKey||"");if(!p||!b||!S)return;let k=ze(p),E=ga(b,S,p),q=pe(He(p)),M=Number.isFinite(E)&&Number.isFinite(q)?oo(E+q,k.uom||"\xB0C",2):xe(S,2),_=g.querySelector("[data-oq-hp-offset-active]");if(_){let L=`${xe(S,2)} actief`;_.textContent!==L&&(_.textContent=L)}let H=g.querySelector("[data-oq-hp-offset-raw]");if(H){let L=Number.isFinite(E)?oo(E,k.uom||"\xB0C",2):xe(b,2);H.textContent!==L&&(H.textContent=L)}let F=g.querySelector("[data-oq-hp-offset-final]");F&&F.textContent!==M&&(F.textContent=M)});let m=t.querySelector(".oq-settings-curve-shell"),v=se();if(!!m!==v)return!1;let w=!!a,f=String(T("phResponseProfile")||"")==="Custom";return w===f}nm({patch:zE});function Th(){return j("controlModeLabel","").toLowerCase().includes("standby")}function Vt(e,t){e&&e.innerHTML!==t&&(e.innerHTML=t)}function rt(e,t,r){return!e||e.dataset.renderSignature===t?!1:(e.outerHTML=r,!0)}function UE([e,t]){let r=nl(t);if(!y(t)&&Number.isNaN(r))return"";let n=rl(t)?it(t):j(t);return`
      <div class="oq-overview-energy-row">
        <span>${s(e)}</span>
        <strong>${s(n)}</strong>
      </div>
    `}function GE(e){let t=e.rows.map(UE).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-group">
        <h5>${s(e.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${t}
        </div>
      </section>
    `:""}function QE(e){let t=e.groups.map(GE).filter(Boolean).join("");return t?`
      <section class="oq-overview-energy-category oq-overview-energy-category--${s(e.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${s(e.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${t}
        </div>
      </section>
    `:""}function YE(e){let t=e.categories.map(QE).filter(Boolean).join("");if(!t)return"";let r=String(e.counterResetKey||""),n=r&&y(r)?`
        <button class="oq-overview-energy-reset" type="button" data-oq-action="open-energy-counter-reset-confirm" aria-label="Cumulatieve energietellers resetten" ${o.busyAction===r?"disabled":""}>
          Tellers resetten
        </button>
      `:"";return`
      <article class="oq-overview-energy-column oq-overview-energy-column--${s(e.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${s(e.label)}</h4>
          ${n}
        </div>
        <div class="oq-overview-energy-groups">
          ${t}
        </div>
      </article>
    `}function du(){let e=oi.map(YE).filter(Boolean),t=["oq-overview-energy-grid",e.length===1?"oq-overview-energy-grid--single":"",e.length===2?"oq-overview-energy-grid--two":""].filter(Boolean).join(" ");return{renderedColumns:e,gridClassName:t}}function xh(e=du()){return we(e)}function Mh(e=du()){return`
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${s(xh(e))}">
        <div class="${s(e.gridClassName)}">
          ${e.renderedColumns.join("")}
        </div>
      </section>
    `}var $h=[{id:"day",label:"Dag"},{id:"week",label:"Week"},{id:"month",label:"Maand"},{id:"year",label:"Jaar"},{id:"all",label:"Alles"}],JE=new Set(["day","week","month","year"]);function Be(e){let t=String(e||"").trim();return $h.some(r=>r.id===t)?t:"day"}function Ah(e){let t=Be(e);o.energyHistoryView!==t&&(Rt({energyHistoryView:t,energyHistoryLastFetchAt:0}),h(),_h())}function _h(){typeof Tr=="function"&&Tr({force:!0}).then(e=>{e&&h()})}function kn(e){return JE.has(Be(e))}function fs(){let e=new Date;return e.getFullYear()*1e4+(e.getMonth()+1)*100+e.getDate()}function Rh(){return Ui(o.energyHistoryRaw)}function pu(){let e=String(o.energyHistoryRaw||""),t=null;return e.split(/\r?\n/).forEach(r=>{let n=Ic(r);n&&(t=n.dateKey)}),t}function ZE(e=[],t=!0){let r=pu(),n=Rh(),a=(Array.isArray(e)?e:[]).map(i=>Number(i?.dateKey)).filter(Number.isFinite);return Number.isFinite(Number(n.newestDateKey))&&a.push(Number(n.newestDateKey)),Number.isFinite(Number(r))&&a.push(Number(r)),t&&hs().forEach(i=>{let l=Number(i?.dateKey);Number.isFinite(l)&&a.push(l)}),a.length?Math.max(...a):fs()}function Mr(e){let t=R(e);return!Number.isFinite(t)||t<0?null:Math.round(t*1e3)}function XE(){let e=pu()||fs(),t=ie(e);if(!t)return null;let r={sequence:Number.MAX_SAFE_INTEGER-1,dateKey:e,year:t.year,month:t.month,day:t.day,partial:!0,source:"sensors",electricalInputWh:Mr("electricalEnergyDaily"),heatingInputWh:Mr("heatingElectricalEnergyDaily"),coolingInputWh:Mr("coolingElectricalEnergyDaily"),heatpumpHeatOutputWh:Mr("heatpumpThermalEnergyDaily"),heatpumpCoolingOutputWh:Mr("heatpumpCoolingEnergyDaily"),boilerHeatOutputWh:Mr("boilerThermalEnergyDaily"),systemHeatOutputWh:Mr("systemThermalEnergyDaily")};return zi.some(n=>Number.isFinite(r[n]))?r:null}function Ta(){let e=new Map;String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(i=>{let l=Zg(i)||Ic(i);if(!l)return;let c=e.get(l.dateKey);(!c||l.sequence>=c.sequence)&&e.set(l.dateKey,l)});let r=XE();r&&!e.has(r.dateKey)&&e.set(r.dateKey,r);let n=new Set(e.keys()),a=new Map;return hs().forEach(i=>{if(n.has(i.dateKey))return;let l=a.get(i.dateKey);if(!l){let c=ie(i.dateKey);if(!c)return;l=$r({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:Wt(c.key),sortKey:c.key,source:"hour-summary"}),l.tooltipLabel=`${Wt(i.dateKey)} \xB7 uurdata sinds herstart`,a.set(i.dateKey,l)}Ar(l,i)}),a.forEach((i,l)=>{e.set(l,i)}),[...e.values()].sort((i,l)=>i.dateKey-l.dateKey)}function hs(){let e=new Map;return String(o.energyHistoryRaw||"").split(/\r?\n/).forEach(r=>{let n=Xg(r);if(!n)return;let a=`${n.dateKey}:${n.hour}`,i=e.get(a);(!i||n.sequence>=i.sequence)&&e.set(a,n)}),[...e.values()].sort((r,n)=>r.sortKey-n.sortKey)}function eT(e){return hs().filter(t=>t.dateKey===Number(e))}function Sn(e,t){return e.reduce((r,n)=>r+mn(n,t),0)}function tT(e){return["heatpumpHeatOutputWh","heatpumpCoolingOutputWh","boilerHeatOutputWh"].reduce((t,r)=>t+mn(e,r),0)}function oT(e){return mn(e,"electricalInputWh")+tT(e)}function gs(e,t){let r=Number(e),n=Number(t);return!Number.isFinite(r)||!Number.isFinite(n)||n<=0?"\u2014":(r/n).toFixed(2)}function Qe(e,t=1){let r=Number(e);return Number.isFinite(r)?Math.abs(r)>=999500?`${(r/1e6).toFixed(2)} MWh`:Math.abs(r)<1e3?`${Math.round(r)} Wh`:`${(r/1e3).toFixed(t)} kWh`:"\u2014"}function $r({dateKey:e,year:t,month:r,day:n,hour:a=null,label:i,tooltipLabel:l="",sortKey:c,source:d="bucket"}){return{sequence:0,dateKey:e,year:t,month:r,day:n,hour:a,label:i,tooltipLabel:l,sortKey:c??e,partial:!1,source:d,electricalInputWh:0,heatingInputWh:0,coolingInputWh:0,heatpumpHeatOutputWh:0,heatpumpCoolingOutputWh:0,boilerHeatOutputWh:0,systemHeatOutputWh:0}}function Ar(e,t){return zi.forEach(r=>{e[r]+=mn(t,r)}),e.partial=e.partial||!!t?.partial,e.sequence=Math.max(Number(e.sequence||0),Number(t?.sequence||0)),e}function rT(e){let t=new Map;return e.forEach(r=>{t.set(r.dateKey,r)}),t}function Hh(e,t){let r=Be(e);if(r==="day"){let n=Hc(t)||ie(t);return n?String(n.key):""}if(r==="week"){let n=Jg(t);return n?String(n.key):""}if(r==="month"){let n=Yg(t);return n?String(n.key):""}if(r==="year"){let n=Number(t);return Number.isInteger(n)&&n>=2020&&n<=2200?String(n):""}return""}function bs(e,t){let r=Be(t),n=ie(ZE(e,!0)),a=Rh(),i=hs(),l=[...e.map(f=>f.dateKey),...i.map(f=>f.dateKey)].filter(f=>Number.isFinite(Number(f)));Number.isFinite(Number(a.oldestDateKey))&&l.push(Number(a.oldestDateKey)),Number.isFinite(Number(a.newestDateKey))&&l.push(Number(a.newestDateKey));let c=l.length?Math.min(...l.map(Number)):n?.key,u=(c?ie(c):n)?.date||n?.date||new Date,m=n?.date||new Date,v=n?.key||fs(),w=v;return r==="week"?(v=Oc(u),w=Oc(m)):r==="month"?(v=Qi(u),w=Qi(m)):r==="year"?(v=u.getFullYear(),w=m.getFullYear()):(v=Fe(u),w=Fe(m)),Number(v)>Number(w)&&(v=w),{min:String(v),max:String(w)}}function Dh(e,t){let r=Number(e);return Number.isFinite(r)?r<Number(t.min)?String(t.min):r>Number(t.max)?String(t.max):String(e):String(t.max)}function nT(e,t,r=bs(e,t)){let n=Be(t),a=o.energyHistoryPeriodSelection?.[n],i=Hh(n,a);return Dh(i||r.max,r)}function aT(e,t){let r=Be(e),n=[],a=0;if(r==="week"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<6e3;){let l=ie(i);n.push({value:i,label:Pc(i),group:l?String(Nc(l.date).year):""}),i=l?String(Fe(Er(l.date,-7))):"",a+=1}return n}if(r==="month"){let i=String(t.max);for(;Number(i)>=Number(t.min)&&a<1200;){let l=qr(i);if(!l)break;n.push({value:i,label:l.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"}),group:String(l.year)}),i=Dc(i,-1),a+=1}return n}if(r==="year")for(let i=Number(t.max);i>=Number(t.min);i-=1)n.push({value:String(i),label:String(i)});return n}function vs(e,t){let r=Be(t);if(!kn(r))return{view:r,selectedValue:"",minValue:"",maxValue:"",canPrevious:!1,canNext:!1,isNow:!0,options:[]};let n=bs(e,r),a=nT(e,r,n);return{view:r,selectedValue:a,minValue:n.min,maxValue:n.max,canPrevious:Number(a)>Number(n.min),canNext:Number(a)<Number(n.max),isNow:Number(a)===Number(n.max),options:aT(r,n)}}function iT(e,t){let r=Be(t);if(!kn(r))return{from:"",to:"",hours:"0"};let n=vs(e,r);if(r==="day")return{from:n.selectedValue,to:n.selectedValue,hours:"1"};if(r==="week"){let a=ie(n.selectedValue);if(!a)return{from:"",to:"",hours:"0"};let i=pn(a.date),l=Er(i,6);return{from:String(Fe(i)),to:String(Fe(l)),hours:"0"}}if(r==="month"){let a=qr(n.selectedValue);return a?{from:String(a.year*1e4+a.month*100+1),to:String(a.year*1e4+a.month*100+Rc(a.year,a.month)),hours:"0"}:{from:"",to:"",hours:"0"}}if(r==="year"){let a=Number(n.selectedValue);return Number.isInteger(a)?{from:`${a}0101`,to:`${a}1231`,hours:"0"}:{from:"",to:"",hours:"0"}}return{from:"",to:"",hours:"0"}}function sT(){if(!String(o.energyHistoryRaw||"").trim())return"?meta=1";let e=Ta(),t=iT(e,o.energyHistoryView||"day"),r=new URLSearchParams;t.from&&r.set("from",t.from),t.to&&r.set("to",t.to),r.set("hours",t.hours);let n=r.toString();return n?`?${n}`:""}nf(sT);function Ca(e,t){let r=Be(e);if(!kn(r))return;let n=Ta(),a=bs(n,r),i=Hh(r,t),l=Dh(i||a.max,a);Rt({energyHistoryPeriodSelection:{...o.energyHistoryPeriodSelection,[r]:l},energyHistoryLastFetchAt:0}),h(),_h()}function Nh(e,t){let r=Be(e);if(!kn(r))return;let n=Ta(),a=vs(n,r),i=Number(t)<0?-1:1,l=a.selectedValue;if(r==="day"){let c=ie(a.selectedValue);l=c?String(Fe(Er(c.date,i))):l}else if(r==="week"){let c=ie(a.selectedValue);l=c?String(Fe(Er(c.date,i*7))):l}else r==="month"?l=Dc(a.selectedValue,i):r==="year"&&(l=String(Number(a.selectedValue)+i));Ca(r,l)}function Oh(e){let t=Be(e);if(!kn(t))return;let r=Ta(),n=bs(r,t);Ca(t,n.max)}function lT(e,t,r=vs(e,t)){let n=Be(t),a=rT(e);if(!e.length&&n==="all")return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};if(n==="day"){let c=ie(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let d=eT(c.key);if(d.length){let f=new Map(d.map(p=>[p.hour,p])),g=[];for(let p=0;p<24;p+=1){let b=String(p),S=`${c.date.toLocaleDateString("nl-NL",{day:"numeric",month:"long"})} \xB7 ${String(p).padStart(2,"0")}:00 - ${String((p+1)%24).padStart(2,"0")}:00`,k=$r({dateKey:c.key,year:c.year,month:c.month,day:c.day,hour:p,label:b,tooltipLabel:S,sortKey:p,source:"hour"}),E=f.get(p);E&&Ar(k,E),g.push(k)}return{buckets:g,title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 uurdata sinds herstart`}}let u=a.get(c.key),m=pu()||fs(),v=c.key===m?"Vandaag":Wt(c.key),w=$r({dateKey:c.key,year:c.year,month:c.month,day:c.day,label:v,sortKey:c.key,source:"day"});return u&&Ar(w,u),{buckets:[w],title:"Dag",detail:`${c.date.toLocaleDateString("nl-NL",{weekday:"long",day:"numeric",month:"long",year:"numeric"})} \xB7 dagtotaal`}}if(n==="week"){let c=ie(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let d=pn(c.date),u=[];for(let m=0;m<7;m+=1){let v=Er(d,m),w=Fe(v),f=ie(w),g=$r({dateKey:w,year:f.year,month:f.month,day:f.day,label:Wt(w,"weekday"),sortKey:w}),p=a.get(w);p&&Ar(g,p),u.push(g)}return{buckets:u,title:"Week",detail:Pc(r.selectedValue)}}if(n==="month"){let c=qr(r.selectedValue);if(!c)return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let d=Rc(c.year,c.month),u=[];for(let m=1;m<=d;m+=1){let v=_c(c.year,c.month,m),w=Fe(v),f=$r({dateKey:w,year:c.year,month:c.month,day:m,label:String(m),sortKey:w}),g=a.get(w);g&&Ar(f,g),u.push(f)}return{buckets:u,title:"Maand",detail:c.date.toLocaleDateString("nl-NL",{month:"long",year:"numeric"})}}if(n==="year"){let c=Number(r.selectedValue);if(!Number.isInteger(c))return{buckets:[],title:"Geen data",detail:"Lifetime energiehistorie"};let d=[];for(let u=1;u<=12;u+=1){let m=c*1e4+u*100+1,v=$r({dateKey:m,year:c,month:u,day:1,label:Wt(m,"month"),sortKey:u,source:"month"});e.filter(w=>w.year===c&&w.month===u).forEach(w=>Ar(v,w)),d.push(v)}return{buckets:d,title:"Jaar",detail:String(c)}}let i=new Map;e.forEach(c=>{i.has(c.year)||i.set(c.year,$r({dateKey:c.year*1e4+101,year:c.year,month:1,day:1,label:String(c.year),sortKey:c.year,source:"year"})),Ar(i.get(c.year),c)});let l=[...i.values()].sort((c,d)=>c.sortKey-d.sortKey);return{buckets:l,title:"Alles",detail:l.length?`${l[0].label} - ${l[l.length-1].label}`:"Geen data"}}function cT(e){let t=Sn(e,"heatpumpHeatOutputWh"),r=Sn(e,"heatpumpCoolingOutputWh"),n=Sn(e,"boilerHeatOutputWh");return{electricalInputWh:Sn(e,"electricalInputWh"),heatingInputWh:Sn(e,"heatingInputWh"),coolingInputWh:Sn(e,"coolingInputWh"),heatOutputWh:t,coolingOutputWh:r,boilerOutputWh:n,outputWh:t+r+n}}function uT(e){let t=Number(e.heatOutputWh||0)+Number(e.coolingOutputWh||0),r=Number(e.boilerOutputWh||0),n=t+r;return!Number.isFinite(n)||n<=0?Number.NaN:t/n*100}function dT(e){let t=gs(e.heatOutputWh,e.heatingInputWh),r=gs(e.coolingOutputWh,e.coolingInputWh),n=Number(e.heatOutputWh||0)>0&&t!=="\u2014",a=Number(e.coolingOutputWh||0)>0&&r!=="\u2014";return n&&a?{label:"COP / EER",value:`${t} / ${r}`}:a?{label:"Gemiddelde EER",value:r}:{label:"Gemiddelde COP",value:t}}function ms(e,t,r=""){return`
      <div class="oq-energy-history-stat">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${r?`<p>${s(r)}</p>`:""}
      </div>
    `}function uu(e,t,r){let n=[];r.forEach(i=>{let l=String(i.group||""),c=n[n.length-1];(!c||c.label!==l)&&(c={label:l,options:[]},n.push(c)),c.options.push(i)});let a=n.some(i=>i.label)?n.map(i=>i.label?`
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
    `}function Ch(e){return e.view==="day"?`
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${s(Gi(e.selectedValue))}"
            min="${s(Gi(e.minValue))}"
            max="${s(Gi(e.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `:e.view==="week"?uu(e,"Week",e.options):e.view==="month"?uu(e,"Maand",e.options):e.view==="year"?uu(e,"Jaar",e.options):`
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `}function pT(e){return kn(e.view)?`
      <div class="oq-energy-history-period oq-energy-history-period--${s(e.view)}">
        ${Ch(e)}
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
          ${Ch(e)}
        </div>
      `}function mT(){let e=document.activeElement;return!!(e&&e.closest&&e.closest(".oq-energy-history-period"))}function gT(e){return`
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${$h.map(t=>{let r=t.id===e;return`
            <button
              type="button"
              class="oq-energy-history-view-tab ${r?"is-active":""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${s(t.id)}"
              aria-selected="${r?"true":"false"}"
            >${s(t.label)}</button>
          `}).join("")}
      </div>
    `}function fT(e){let t=Number(e.electricalInputWh||0),r=Number(e.heatOutputWh||0),n=Number(e.coolingOutputWh||0),a=Number(e.boilerOutputWh||0),i=a>0?"boiler":"boiler-zero",l=Math.max(1,t+r+n+a),c=u=>`${Math.max(0,Number(u||0)/l*100).toFixed(2)}%`,d=uT(e);return`
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${c(t)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${c(r)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${c(n)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${s(i)}" style="width: ${c(a)}"></span>
          <strong>${Number.isFinite(d)?`${Math.round(d)}%`:"\u2014"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${s(Qe(r,1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${s(Qe(t,1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${s(Qe(n,1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(i)}"></i>${s(Qe(a,1))} cv-ketel</span>
        </div>
      </div>
    `}function hT(e){let t=Math.max(1,Number(e||0)/1e3),r=Math.pow(10,Math.floor(Math.log10(t))),n=t/r;return(n<=1.5?1.5:n<=3?3:n<=6?6:10)*r*1e3}function bT(e){let t=Number(e);return Number.isFinite(t)?t>=999500?`${Number((t/1e6).toFixed(1))}`:`${Number((t/1e3).toFixed(1))}`:""}function vT(e){return e>=999500?"MWh":"kWh"}function wT(e){let u=Math.max(1e3,...e.map(oT)),m=hT(u),v=e.length?1218/e.length:1218,w=Math.max(6,Math.min(38,v*.68));return{width:1280,height:260,left:44,right:18,top:26,bottom:38,plotWidth:1218,plotHeight:196,axisMax:m,barSlot:v,barWidth:w,yOf:g=>26+(1-Math.min(1,Math.max(0,Number(g||0)/m)))*196}}function yT(e){let t=gs(e.heatpumpHeatOutputWh,e.heatingInputWh),r=gs(e.heatpumpCoolingOutputWh,e.coolingInputWh);return[e.tooltipLabel||e.label||Wt(e.dateKey),`Elektrisch totaal: ${Qe(e.electricalInputWh,1)}`,`Elektrisch verwarmen: ${Qe(e.heatingInputWh,1)}`,`Elektrisch koelen: ${Qe(e.coolingInputWh,1)}`,`Warmtepomp warmte: ${Qe(e.heatpumpHeatOutputWh,1)}`,`Warmtepomp koeling: ${Qe(e.heatpumpCoolingOutputWh,1)}`,`Cv-ketel warmte: ${Qe(e.boilerHeatOutputWh,1)}`,`COP verwarmen: ${t}`,`EER koelen: ${r}`].join(`
`)}function ST(e,t=""){if(!e.length)return`
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;let r=wT(e),n=vT(r.axisMax),a=[0,.25,.5,.75,1].map(l=>r.axisMax*l),i=e.map((l,c)=>{let d=r.left+r.barSlot*c+r.barSlot/2,u=[{key:"electricalInputWh",className:"input",label:"Verbruikte elektriciteit"},{key:"heatpumpHeatOutputWh",className:"heat",label:"Warmte door warmtepomp"},{key:"heatpumpCoolingOutputWh",className:"cooling",label:"Koeling warmtepomp"},{key:"boilerHeatOutputWh",className:"boiler",label:"Cv-ketel"}],m=r.height-r.bottom,v=u.map(p=>{let b=mn(l,p.key);if(b<=0)return"";let S=b/r.axisMax*r.plotHeight;return m-=S,`
          <rect
            x="${(d-r.barWidth/2).toFixed(1)}"
            y="${m.toFixed(1)}"
            width="${r.barWidth.toFixed(1)}"
            height="${Math.max(1.4,S).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${p.className}"
          >
            <title>${s(`${l.label} \xB7 ${p.label}: ${Qe(b,1)}`)}</title>
          </rect>
        `}).join(""),f=e.length<=12||c===0||c===e.length-1||c%3===0?`<text x="${d.toFixed(1)}" y="${r.height-18}" text-anchor="middle" class="oq-energy-history-axis-label">${s(l.label||Wt(l.dateKey))}</text>`:"",g=yT(l);return`
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${s(g)}" tabindex="0">
          <title>${s(g)}</title>
          <rect
            x="${(d-r.barWidth/2-4).toFixed(1)}"
            y="${r.top.toFixed(1)}"
            width="${(r.barWidth+8).toFixed(1)}"
            height="${r.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${v}
        </g>
        ${f}
      `}).join("");return`
      <svg class="oq-energy-history-chart oq-energy-history-chart--${s(Be(t))}" viewBox="0 0 ${r.width} ${r.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${r.width}" height="${r.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${r.left}" y="18" class="oq-energy-history-axis-unit">${s(n)}</text>
        ${a.map(l=>{let c=r.yOf(l);return`
            <line x1="${r.left}" y1="${c.toFixed(1)}" x2="${r.width-r.right}" y2="${c.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${r.left-10}" y="${c.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${s(bT(l))}</text>
          `}).join("")}
        ${i}
      </svg>
    `}function kT(e=null){let t=Number(e?.boilerOutputWh||0)>0?"boiler":"boiler-zero";return`
      <div class="oq-energy-history-legend">
        ${[["input","Elektrisch"],["heat","Warmte"],["cooling","Koeling"],[t,"Ketel"]].map(([n,a])=>`
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${s(n)}"></i>${s(a)}</span>
        `).join("")}
      </div>
    `}function qT(e,t,r,n){let a=Be(r)==="day"?Number(n):Number.NaN,i=Number.isFinite(a)?e.find(l=>l.dateKey===a):null;return i?[i]:t}function mu(){let e=Ta(),t=Be(o.energyHistoryView),r=vs(e,t),n=lT(e,t,r),a=qT(e,n.buckets,t,r.selectedValue),i=cT(a);return{records:e,buckets:n.buckets,viewModel:n,periodControl:r,summary:i,activeView:t}}function Ph(e=mu()){return we({energyHistorySignature:o.energyHistorySignature||"",energyHistoryError:o.energyHistoryError||"",activeView:e.activeView,periodView:e.periodControl.view,periodValue:e.periodControl.selectedValue,periodMin:e.periodControl.minValue,periodMax:e.periodControl.maxValue,recordCount:e.records.length,bucketCount:e.buckets.length,latestDate:e.records[e.records.length-1]?.dateKey||0,summary:e.summary})}function Lh(e=mu()){let t=e.summary,r=dT(t),n=e.buckets[0]?.dateKey?Wt(e.buckets[0].dateKey):"\u2014",a=e.buckets[e.buckets.length-1]?.dateKey?Wt(e.buckets[e.buckets.length-1].dateKey):"\u2014";return`
      <section class="oq-energy-history" data-render-signature="${s(Ph(e))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${s(e.viewModel.title)} \xB7 ${s(e.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${gT(e.activeView)}
          ${pT(e.periodControl)}
        </div>
        ${o.energyHistoryError?`<p class="oq-energy-history-error">${s(o.energyHistoryError)}</p>`:""}
        <div class="oq-energy-history-stats">
          ${ms(r.label,r.value,`${s(n)} - ${s(a)}`)}
          ${ms("Elektrisch",Qe(t.electricalInputWh,1),"verbruikt")}
          ${ms("Warmtepomp",Qe(t.heatOutputWh+t.coolingOutputWh,1),"warmte en koeling")}
          ${ms("Cv-ketel",Qe(t.boilerOutputWh,1),"thermisch")}
        </div>
        ${fT(t)}
        <div class="oq-energy-history-chart-head">
          <h4>${s(e.viewModel.title)}</h4>
          <span>${s(e.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${ST(e.buckets,e.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${kT(t)}
      </section>
    `}function gu(e){if(o.appView!=="results"||!o.root)return;let t=e.target.closest?.("[data-oq-energy-history-tip]"),r=t?.closest?.(".oq-energy-history-chart-wrap")||o.root.querySelector(".oq-energy-history-chart-wrap"),n=r?.querySelector(".oq-energy-history-tooltip");if(!t||!r||!n){n&&n.classList.remove("is-visible");return}let a=String(t.dataset.oqEnergyHistoryTip||"").split(/\n/).filter(Boolean);if(!a.length){n.classList.remove("is-visible");return}n.innerHTML=`
      <strong>${s(a[0])}</strong>
      ${a.slice(1).map(u=>`<span>${s(u)}</span>`).join("")}
    `;let i=r.getBoundingClientRect();n.classList.add("is-visible");let l=n.getBoundingClientRect(),c=Math.min(Math.max(8,e.clientX-i.left+14),Math.max(8,i.width-l.width-8)),d=Math.min(Math.max(8,e.clientY-i.top-l.height-12),Math.max(8,i.height-l.height-8));n.style.transform=`translate(${c.toFixed(0)}px, ${d.toFixed(0)}px)`}function Ih(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${Mh()}
        </div>
      </section>
    `}function Fh(){return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${Lh()}
        </div>
      </section>
    `}function ET(){if(!o.root||o.appView!=="energy")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-overview-energy"):null;if(!e||!t)return!1;let r=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==r&&(e.className=r);let n=du();return rt(t,xh(n),Mh(n))}function TT(){if(!o.root||o.appView!=="results")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-energy-history"):null;if(!e||!t)return!1;let r=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==r&&(e.className=r);let n=mu(),a=mT();return(a?!1:rt(t,Ph(n),Lh(n)))||a}xo({patchEnergyDom:ET,patchResultsDom:TT});var CT=Object.fromEntries([["hp_fault","Warmtepompstoring","Een bevestigde ODU-storing bepaalt beschikbaarheid en systeemreactie."],["hp_protection","Warmtepompbeveiliging","De HP begrenst of blokkeert zichzelf tot de voorwaarde herstelt."],["hp_preheat","Eerste-startvoorverwarming","De compressor wacht op de vereiste voorverwarming."],["hp_link_loss","HP-verbinding bevestigd weg","Een korte hapering is eerst gefilterd; bevestigde uitval wijzigt de beschikbaarheid."],["hp_start_failed","Warmtepompstart niet bevestigd","De start leidde niet op tijd tot een draaiende compressor."],["hp_stop_unconfirmed","Warmtepompstop niet bevestigd","De veilige stopstatus is nog niet bevestigd."],["hp_persistence_failure","Resetstatus niet veilig opgeslagen","OpenQuatt blokkeert start en fallback omdat de handmatige resetstatus niet veilig kon worden opgeslagen."],["hp_recovery_wait","Warmtepompherstel wordt bevestigd","Herstel is gezien, maar moet eerst stabiel blijven."],["hp_recovered","Warmtepomp stabiel hersteld","De warmtepomp is weer inzetbaar; de ketelfallback kan gecontroleerd worden be\xEBindigd."],["boiler_fallback","Ketelfallback (CM4)","CM4 is na controle van de systeemvoorwaarden vrijgegeven."],["fallback_blocked","Ketelfallback geblokkeerd","Een veiligheidsvoorwaarde geeft CM4 nog niet vrij."],["heating_request","Warmtevraag actief","De actie volgt op geldige warmtevraag."],["commissioning","Commissioning heeft voorrang","Een servicetaak beheert de installatie."],["supervisory_override","Handmatige override heeft voorrang","Een override blokkeert automatische fallback."]].map(([e,t,r])=>[e,{label:t,summary:r,checks:[]}])),xT=new Set(["incident_start","incident_clear","incident_acknowledged","hp_availability_change","control_mode_change","boiler_fallback_start","boiler_fallback_stop","hp_start_confirmed","hp_stop_confirmed"]),MT={hp_link_loss:"hp_link_loss",hp_start_failed:"hp_start_failed",hp_stop_unconfirmed:"hp_stop_unconfirmed",hp_persistence_failure:"hp_manual_reset_persistence_failure"},$T={available:["weer beschikbaar","De warmtepomp is stabiel hersteld."],recovering:["herstelt","Herstel wordt eerst stabiel bevestigd."],faulted:["niet beschikbaar door storing","Een bevestigde storing blokkeert een nieuwe start."],offline:["verbinding bevestigd weg","De communicatie bleef na meerdere controles weg."],preheat:["wacht op voorverwarming","De compressorstart is tijdelijk geblokkeerd."],blocked:["tijdelijk niet startklaar","Een technische voorwaarde blokkeert de start."],suspect:["status wordt gecontroleerd","Een korte hapering verandert de beschikbaarheid nog niet."]},AT={label:"Technische statuswijziging",summary:"Een bevestigde statuswijziging is verwerkt.",checks:[]},_T="OpenQuatt beoordeelt de veilige vervolgstap automatisch.",Kt=e=>{let t=Number(e);return Number.isInteger(t)&&t>=0&&t<=100?t:null},qn=(e,t,r,n=_T)=>({title:e,summary:t,detail:r.summary,next:n,reasonLabel:r.label,checks:r.checks||[]});function fu(e){return CT[String(e||"")]||null}function jh(e,t="Warmtepomp"){let r=String(e?.event_type||"");if(!xT.has(r))return null;let n=fu(e.reason)||AT,a=Xn({id:e.value_a,key:MT[e.reason]||""});if(r==="incident_start")return qn(Number(e.value_a)>=1e3?a:`${a} actief`,`${t}: de melding is bevestigd en telt mee in de regeling.`,n);if(r==="incident_clear"){let l=(Number(e.flags)&1)!==0;return qn(`${a} hersteld`,l?`${t}: de oorzaak is weg, maar de melding blijft vastgehouden tot bevestiging.`:`${t}: de oorzaak is stabiel hersteld.`,{...n,label:"Incident hersteld"})}if(r==="incident_acknowledged")return qn(`${a} bevestigd`,`${t}: de herstelde, vastgehouden melding is bevestigd.`,{...n,label:"Herstelde melding bevestigd"});if(r==="hp_availability_change"){let l=$T[e.to]||["beschikbaarheid gewijzigd","De beschikbaarheid is opnieuw bepaald."];return qn(`${t} ${l[0]}`,l[1],n)}if(r==="control_mode_change"){let l=Kt(e.value_a),c=Kt(e.value_b)??Kt(e.cm);return qn(l!==null&&c!==null?`CM${l} \u2192 CM${c}`:"Control mode gewijzigd",c===4&&l===3?"De regelrol wijzigt van CV-ondersteuning naar ketelfallback.":"De supervisor heeft een nieuwe regelrol gekozen.",c===4?{...n,label:"Ketelfallbackrol (CM4)"}:n,"De uitvoerstatus toont apart of de gekozen bron wordt aangestuurd.")}let i={boiler_fallback_start:["Ketelfallback gestart (CM4)","Geen warmtepomp is inzetbaar en de voorwaarden geven de ketel vrij.","Ketelfallback actief"],boiler_fallback_stop:["Ketelfallback gestopt","CM4 is niet meer nodig of vrijgegeven.","Ketelfallback be\xEBindigd"],hp_start_confirmed:[`${t} gestart`,"De compressorstart is bevestigd.","Start bevestigd"],hp_stop_confirmed:[`${t} gestopt`,"De stopopdracht is bevestigd.","Stop bevestigd"]}[r];return qn(i[0],i[1],{...n,label:i[2]})}function Wh(e){let t=String(e?.event_type||"");return["incident_clear","incident_acknowledged","boiler_fallback_stop","hp_start_confirmed","hp_stop_confirmed"].includes(t)?"normal":t!=="hp_availability_change"?"":e.to==="available"?"normal":["recovering","preheat","blocked","suspect"].includes(e.to)?"limited":["faulted","offline"].includes(e.to)?"fault":""}function hu(e,t){if(e?.event_type==="control_mode_change")return{from:Kt(e.value_a)??Kt(t),to:Kt(e.value_b)??Kt(e.cm)};if(e?.event_type==="boiler_fallback_start"){let r=Kt(e.cm);return{from:Kt(t)??(r===4?null:r),to:4}}if(e?.event_type==="boiler_fallback_stop"){let r=Kt(e.cm);return{from:4,to:r===4?null:r}}return null}function Bh(e){return hu(e,null)?.to??null}function RT({label:e,value:t,tone:r,note:n,status:a=!1}){return`
      <article class="oq-overview-stat oq-overview-stat--${s(r)}${a?" oq-overview-stat--status":""}">
        <p>${s(e)}</p>
        <strong>${s(t)}</strong>
        <span>${s(n)}</span>
      </article>
    `}function $a(e,t=!1){return e.map(r=>RT({...r,value:Object.prototype.hasOwnProperty.call(r,"key")?it(r.key):r.value,status:t})).join("")}function yu(e){return`
      <div class="oq-overview-sectionhead">
        <h3>${s(e)}</h3>
      </div>
    `}function Su(){let e=Dt();return`
      <aside class="oq-overview-monitoring-notice${e.active?" is-warning":" is-hidden"}" data-oq-monitoring-notice data-render-signature="${s(we(e))}">
        <div>
          <p>Installatiebewaking</p>
          <strong>${s(e.title)}</strong>
          <span>${s(e.problems.map(t=>t.label).join(" \xB7 "))}</span>
        </div>
        <button type="button" data-oq-action="open-installation-monitoring">Bekijk diagnose</button>
      </aside>
    `}function Uh({className:e,title:t,copy:r,body:n,signature:a=""}){let i=a?` data-render-signature="${s(a)}"`:"";return`
      <section class="${s(e)}"${i}>
        ${t?`<div class="oq-overview-system-copy"><h3>${s(t)}</h3><p>${s(r)}</p></div>`:""}
        ${n}
      </section>
    `}function Vh(e){let t=String(e||"").trim();return{None:"geen bron",Manual:"handmatig",Disabled:"handmatig","HA input":"HA-invoer",MQTT:"MQTT","OT thermostat":"OpenTherm","HA input + Manual":"HA-invoer + handmatig","MQTT + Manual":"MQTT + handmatig","OT thermostat + Manual":"OpenTherm + handmatig"}[t]||t}function xa(e,t){return!t||t==="geen bron"?e:`${e} Toestemming: ${t}.`}function ku(e,t){return t?"Actief":e==="Stand-by"?"Stand-by":e==="Onbekend"?"Onbekend":"Niet actief"}function HT(e,t){let r=t?"active":"neutral",n=ku(e,t);return`<span class="oq-overview-chip oq-overview-chip--${s(r)}" data-oq-bind="panel-status">${s(n)}</span>`}function DT(e){return`
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
    `}function qu(e,t,r,n){return`${r?DT(n):""}${HT(e,t)}`}function Gh(e,t,r,n,a){if(!e)return;let i=we({mode:t,running:r,warningActive:n,failureText:a});e.dataset.renderSignature!==i&&(Vt(e,qu(t,r,n,a)),e.dataset.renderSignature=i)}function ws(e,t,r=""){return`
      <div class="oq-overview-row">
        <span>${s(e)}</span>
        <strong>${s(r||j(t))}</strong>
      </div>
    `}function NT(e,t,r="blue",n=""){return`
      <article class="oq-overview-metric oq-overview-metric--${s(r)}">
        <span>${s(e)}</span>
        <strong>${s(t)}</strong>
        ${n?`<p>${s(n)}</p>`:""}
      </article>
    `}function OT(e){return Number.isNaN(e)?"\u2014":`${e>0?"+":""}${e.toFixed(1)} \xB0C`}var PT=tr;function LT(e){let r=String(e||"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!r)return Number.NaN;let n=Number(r[1]),a=Number(r[2]);return Number.isNaN(n)||Number.isNaN(a)||n<0||n>23||a<0||a>59?Number.NaN:n*60+a}function IT(e){let t=LT(j("timeNowHhmm",""));if(!Number.isFinite(t))return"";let r=Math.round(e),n=((t-r)%1440+1440)%1440,a=Math.floor(n/60),i=n%60;return`${String(a).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function FT(e,t){let r=Math.max(0,(Number(t)-Number(e))/6e4),n=PT(r),a=y("timeValid")&&C("timeValid")?IT(r):"";return a?{value:a,note:`${n} geleden`}:{value:`${n} geleden`,note:"Geen tijdsync"}}function jT(e){let t=Number(e);return Number.isNaN(t)?"\u2014":`${t>0?"+":t<0?"-":""}${Math.abs(t).toFixed(0)} W`}function Qh(){return["outsideTempSelected","hp1OutsideTemp","hp2OutsideTemp"].find(e=>y(e))||""}function WT(){return["hp1WaterIn","hp2WaterIn"].find(e=>y(e))||""}function Yh(e=j("controlModeLabel","")){let t=String(e||"").toLowerCase();return t.includes("cm5")||t.includes("cooling")||t.includes("koeling")}function zt(){return Yh()}function Jh(e,t){let r=String(e||"").trim().toLowerCase();return r==="waiting for room request"||r==="wacht op kamervraag"||r==="cooling enabled, waiting for room temperature above cooling setpoint"||r==="koeling toegestaan, wacht op kamertemperatuur boven koel-setpoint"?!0:t?!1:r==="flow too low"||r==="flow te laag"||r==="flow unavailable"}function Eu(){return zt()?"Koeling":se()?"Stooklijn":"Power House"}function BT(){let e=["phouseReq","strategyRequestedPower"];for(let t of e){let r=R(t);if(!Number.isNaN(r))return r}return Number.NaN}function Zh(){let e=BT(),t=R("phouseHouse"),r=R("totalHeat"),n=R("hpCapacity"),a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:e-t,i="Nog aan het opbouwen",l="Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";return!Number.isNaN(e)&&!Number.isNaN(n)&&e>n+150?(i="Capaciteit begrenst",l="De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren."):!Number.isNaN(e)&&!Number.isNaN(r)&&r<e-250?(i="Levert minder dan gevraagd",l="De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&r>e+250?(i="Levert meer dan gevraagd",l="De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag."):!Number.isNaN(e)&&!Number.isNaN(r)&&(i="In balans",l="Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar."),{requestedText:U(e,0,"W"),houseText:U(t,0,"W"),correctionText:jT(a),capacityText:it("hpCapacity"),statusTitle:i,statusCopy:l}}function Xh(){let e=R("curveSupplyTarget"),t=R("supplyTemp"),r=Qh(),n=r?R(r):Number.NaN,a=Number.isNaN(e)||Number.isNaN(t)?Number.NaN:t-e,i=!!r&&Number.isNaN(n),l="Stuurt op buitentemperatuur",c="De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";return i?(l="Fallback actief",c="De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer."):!Number.isNaN(a)&&a<-1?(l="Nog onder doel",c="De actuele aanvoertemperatuur ligt nog onder de doelaanvoer."):!Number.isNaN(a)&&a>1?(l="Boven doel",c="De actuele aanvoertemperatuur ligt nu boven de doelaanvoer."):Number.isNaN(a)||(l="Dicht bij doel",c="De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer."),{targetText:it("curveSupplyTarget"),supplyText:it("supplyTemp"),deltaText:OT(a),capacityText:it("hpCapacity"),statusTitle:l,statusCopy:c}}function eb(){let e=R("supplyTemp"),t=j("coolingGuardMode",""),r=j("coolingFallbackNightMinOutdoorTemp","\u2014"),n=R("coolingSupplyError"),a=R("coolingDemandRaw"),i=C("coolingPermitted"),l=C("coolingRequestActive"),c=j("coolingBlockReason","Onbekend"),d=cu(c),u=Jh(c,l),m="Wacht op koelvraag",v="Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";return u?(m="Wacht op koelvraag",v="Koeling is toegestaan en wacht tot de kamertemperatuur boven het koel-setpoint komt."):i?l?!Number.isNaN(a)&&a<=0?(m="Houdt doel vast",v="De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken."):!Number.isNaN(n)&&n>1?(m="Trekt aanvoer omlaag",v="De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel."):!Number.isNaN(n)&&n>.2?(m="Benadert koeldoel",v="De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur."):Number.isNaN(n)||(m="Koelt rustig door",v="De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje."):(m="Koeling gereed",v="Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling."):(m="Koeling geblokkeerd",v=`Blokkade: ${d}.`),{targetText:it("coolingSupplyTarget"),supplyText:it("supplyTemp"),safeFloorText:it("coolingEffectiveMinSupplyTemp"),guardMode:t,fallbackNightMin:r,demandText:it("coolingDemandRaw"),statusTitle:m,statusCopy:v,permitted:i,requestActive:l,blockReason:d,waitingForRoomRequest:u}}function ys(){if(zt()){let t=eb(),r=t.guardMode.toLowerCase(),n=r.includes("user responsibility"),a=r.includes("fallback");return{title:"Koelregeling",copy:n?"Koeling draait expliciet zonder dauwpuntmeting of dauwpuntsbenadering. De ingestelde minimale koel-aanvoer blijft gelden.":"Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",focusLabel:"Koeldoel",focusValue:t.targetText,focusCopy:t.statusCopy,metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu door het systeem loopt."},{label:n?"Ingestelde grens":a?"Berekende grens":"Veilige aanvoergrens",value:t.safeFloorText,tone:"blue",note:n?"Geen dauwpuntmeting of benadering; dit is de ingestelde minimale koel-aanvoer.":a?`Conservatieve dauwpuntsbenadering. Nachtminimum: ${t.fallbackNightMin}.`:"Dauwpunt plus veiligheidsmarge."},{label:"Koelvraag",value:t.demandText,tone:"sky",note:"De huidige koelvraag van de regelaar."}]}}if(se()){let t=Xh();return{title:"Stooklijnregeling",copy:"De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",focusLabel:"Doelaanvoer",focusValue:t.targetText,focusCopy:"De aanvoertemperatuur waar de regeling nu naartoe werkt.",metrics:[{label:"Actuele aanvoertemperatuur",value:t.supplyText,tone:"orange",note:"Wat nu wordt geleverd."},{label:"Afwijking doelaanvoer",value:t.deltaText,tone:"blue",note:"Verschil met het doel."},{label:"Beschikbare warmtecapaciteit",value:t.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}let e=Zh();return{title:"Vermogensbalans",copy:"Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",focusLabel:"Gevraagd vermogen",focusValue:e.requestedText,focusCopy:"De warmtevraag waar Power House nu naartoe stuurt.",metrics:[{label:"Berekende huisvraag",value:e.houseText,tone:"blue",note:"Op basis van woning en buitentemperatuur."},{label:"Kamercorrectie",value:e.correctionText,tone:"orange",note:"Extra bijsturing rond setpoint."},{label:"Beschikbare warmtecapaciteit",value:e.capacityText,tone:"sky",note:"Bij huidige buitentemperatuur."}]}}function Tu(e){return Uh({className:"oq-overview-system",title:e.title,copy:e.copy,signature:we(e),body:`
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${s(e.focusLabel)}</span>
            <strong>${s(e.focusValue)}</strong>
            <p>${s(e.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${e.metrics.map(t=>NT(t.label,t.value,t.tone,t.note)).join("")}
        </div>
      `})}function VT(){if(!C("openquattEnabled"))return{label:"Regeling nu",value:"Regeling tijdelijk uit",tone:"orange"};if(zt()){let n=eb(),a=n.waitingForRoomRequest?"neutral":n.permitted?n.statusTitle==="Koelt rustig door"||n.statusTitle==="Houdt temperatuur vast"?"green":n.statusTitle==="Koeling gereed"?"neutral":"sky":"orange";return{label:"Regeling nu",value:n.statusTitle,tone:a}}if(Th())return{label:"Regeling nu",value:"Stand-by",tone:"neutral"};let t=(se()?Xh():Zh()).statusTitle;return{label:"Regeling nu",value:t,tone:t==="In balans"||t==="Dicht bij doel"?"green":t==="Nog aan het opbouwen"||t==="Stuurt op buitentemperatuur"?"neutral":"orange"}}function KT(){return C("openquattEnabled")?zt()?C("coolingPermitted")?C("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:j("coolingBlockReason","Koeling geblokkeerd"),tone:"orange"}:C("silentActive")?{label:"Systeem",value:"Stille uren actief",tone:"neutral"}:C("stickyActive")?{label:"Systeem",value:"Pompbescherming actief",tone:"neutral"}:{label:"Systeem",value:"Normaal",tone:"neutral"}:{label:"Systeem",value:"Vorstbeveiliging blijft actief",tone:"neutral"}}function Cu(e,t){let r=VT(),n=KT();return[{label:"Strategie",value:e,tone:"orange",note:"regelstrategie"},{label:"Controlmode",value:t,tone:"orange",note:"actieve modus"},{label:"Regeling",value:r.value,tone:"orange",note:"wat OpenQuatt nu doet"},{label:"Systeem",value:n.value,tone:"orange",note:"actieve randvoorwaarde"}]}function xu(e,t){let r=Cu(e,t);return`
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${s(we(r))}">
        ${yu("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${$a(r,!0)}
        </div>
      </section>
    `}function Mu(){let e=zt();return[{key:"totalPower",label:"Elektrisch vermogen",tone:"blue",note:"hele systeem"},{key:e?"totalCoolingPower":"totalHeat",label:e?"Koelvermogen":"Verwarmingsvermogen",tone:"orange",note:"thermisch vermogen"},{key:e?"totalEer":"totalCop",label:e?"COP (EER)":"COP",tone:"green",note:"rendement"},{key:"flowSelected",label:"Flow",tone:"sky",note:"watercircuit"}]}function zT(){let e=C("openquattEnabled"),t=T("openquattResumeAt"),r=Wn(t),n=(o.loadingEntities||o.entitySyncInFlight)&&!y("openquattResumeAt"),a=C("manualCoolingEnable"),i=y("coolingEnableSelected")?C("coolingEnableSelected"):a,l=Vh(j("coolingEnableEffectiveSource","")),c=String(T("coolingEnableSource")||"").trim(),d=Vh(T("coolingEnableSource")),u=String(T("silentModeOverride")||"Schedule"),m=!C("coolingPermitted"),v=C("coolingRequestActive"),w=Yh(),f=j("coolingBlockReason",""),g=Jh(f,v),p="Uit",b=c==="Disabled"?"Koeling is niet toegestaan: handmatig staat uit.":d&&d!=="geen bron"?`Koeling is niet toegestaan: ${d} geeft geen toestemming en handmatig staat uit.`:"Koeling is niet toegestaan.";i&&w?(p="Actief",b=xa("Koeling draait nu.",l)):i&&g?(p="Aan",b=xa("Koeling is toegestaan en wacht op kamertemperatuur boven het koel-setpoint.",l)):i&&m?(p="Geblokkeerd",b=xa(cu(f||"Koeling wacht nog op veilige condities."),l)):i&&v?(p="Start bijna",b=xa("Er is koelvraag. Koeling start zodra dat kan.",l)):i&&(p="Aan",b=xa("Koeling is toegestaan en wacht op koelvraag.",l));let S="Uit",k="Stille modus staat uit.",E="neutral";return u==="On"?(S="Aan",k="Stille modus staat geforceerd aan, ook buiten het tijdvenster.",E="orange"):u==="Schedule"&&(S="Schema",C("silentActive")?(k="Stille modus staat nu aan via het tijdvenster.",E="violet"):k="Stille modus volgt het tijdvenster."),[{key:"openquattEnabled",label:"Openquatt regeling",status:e?"Actief":"Tijdelijk uit",copy:e?"Verwarmen en koelen worden automatisch geregeld.":r?"Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief.":"Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.",tone:e?"green":"orange",kind:"openquatt-control",meta:e?[]:[n?{label:"Hervatten",value:"Laden\u2026",tone:"neutral",loading:!0}:{label:r?"Hervat automatisch":"Hervatten",value:r?jr(t,!0):"Handmatig",tone:r?"orange":"neutral"}]},{key:"manualCoolingEnable",label:"Koeling",status:p,copy:b,buttonLabel:a?"Handmatig uit":"Handmatig aan",nextState:a?"off":"on",tone:i?w?"blue":"sky":"neutral"},{key:"silentModeOverride",label:"Stille modus",status:S,copy:k,tone:E,kind:"select",selectedOption:u,settingsAction:!0,options:[{value:"Off",label:"Uit"},{value:"On",label:"Aan"},{value:"Schedule",label:"Schema"}]}].filter(q=>y(q.key))}function UT(e=[]){return e.length?`
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
    `:""}function En({className:e,action:t,label:r,busy:n=!1,loading:a=!1,attrs:i=""}){return`
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
    `}function GT(e){if(e.kind==="openquatt-control"){let t=o.busyAction==="openquatt-regulation",r=(o.loadingEntities||o.entitySyncInFlight)&&!y("openquattResumeAt");return C("openquattEnabled")?`<div class="oq-overview-controlpanel-actions">${En({className:"oq-overview-controlpanel-toggle",action:"open-openquatt-pause-modal",label:"Tijdelijk uitschakelen",busy:t})}</div>`:`
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${En({className:"oq-overview-controlpanel-toggle",action:"enable-openquatt-now",label:"Nu inschakelen",busy:t})}
            ${En(r?{className:"oq-overview-controlpanel-segment oq-overview-controlpanel-segment--loading",action:"",label:"Hervatopties laden\u2026",loading:!0}:{className:"oq-overview-controlpanel-segment",action:"open-openquatt-pause-modal",label:Wn()?"Moment wijzigen":"Automatisch hervatten"})}
          </div>
        `}if(e.kind==="select"){let t=o.busyAction===`save-${e.key}`;return`
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${e.options.map(r=>En({className:`oq-overview-controlpanel-segment${e.selectedOption===r.value?" is-selected":""}`,action:"select-overview-control-option",label:r.label,busy:t,attrs:`data-control-key="${s(e.key)}" data-control-option="${s(r.value)}"`})).join("")}
          </div>
          ${e.settingsAction?'<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">\u2699</button>':""}
        </div>
      `}return`
      <div class="oq-overview-controlpanel-actions">
        ${En({className:"oq-overview-controlpanel-toggle",action:"toggle-overview-control",label:e.buttonLabel,busy:o.busyAction===`switch-${e.key}`,attrs:`data-control-key="${s(e.key)}" data-control-state="${s(e.nextState)}"`})}
      </div>
    `}function $u(){let e=zT();return e.length?`
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${yu("Bediening")}
        ${e.map(t=>`
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${s(t.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${s(t.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${s(t.tone)}">${s(t.status)}</strong>
            </div>
            <p>${s(t.copy)}</p>
            ${UT(t.meta)}
            ${GT(t)}
          </article>
        `).join("")}
      </section>
    `:""}function tb(e){let t=j("controlModeLabel");return`
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
              ${yu("Kerncijfers")}
              <div class="oq-overview-top">
                ${$a(Mu())}
              </div>
            </section>
            ${xu(e,t)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${s(pi())}">
            ${$u()}
          </aside>
        </div>
      </section>
    `}function Ss(){let e=Qh(),t=WT();return zt()?{title:"Koeltemperaturen",copy:"De belangrijkste temperaturen voor kamercomfort, koeldoel en dauwpuntveiligheid.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},{label:"Koeldoel",key:"coolingSupplyTarget"},{label:"Veilige aanvoergrens",key:"coolingMinimumSafeSupplyTemp"},{label:"Dauwpunt",key:"coolingDewPointSelected"}]}:{title:"Temperaturen",copy:"De belangrijkste temperaturen voor comfort en regeling.",rows:[{label:"Kamertemperatuur",key:"roomTemp"},{label:"Kamer setpoint",key:"roomSetpoint"},{label:"Aanvoertemperatuur",key:"supplyTemp"},...t?[{label:"Retourtemperatuur",key:t}]:[],e?{label:"Buitentemperatuur",key:e}:{label:"Buitentemperatuur",key:"",value:"\u2014"}]}}function Au(e=Ss()){return we({...e,values:e.rows.map(t=>t.value||j(t.key))})}function _u(){let e=Ss();return Uh({className:"oq-overview-temps",title:e.title,copy:e.copy,signature:Au(e),body:`
        <div class="oq-overview-temps-list">
          ${e.rows.map(t=>ws(t.label,t.key,t.value||"")).join("")}
        </div>
      `})}var Kh=360,QT=100;function co(){let e=va(o.trendWindowHours||$t);return e!==o.trendWindowHours&&fn(e),e}function ob(e=co()){return Math.max(1,Number(e)||24)*60*60*1e3}function YT(e=co()){let t=Number(e)||24;return t>=72&&t%24===0?`${t/24}d`:`${t}u`}function Ru(e=co()){let t=Number(e)||24;if(t>=72&&t%24===0){let r=t/24;return`${r} ${r===1?"dag":"dagen"}`}return`${t} uur`}function bu(e){if(!Number.isFinite(e))return"\u2014";let t=new Date(e);if(Number.isNaN(t.getTime()))return"\u2014";let r={day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};try{return new Intl.DateTimeFormat("nl-NL",r).format(t)}catch{return t.toLocaleString("nl-NL",r)}}function JT(e){let t=String(e||"").trim().split("|");if(t.length<5)return null;let r=Number(t[0]);if(!Number.isFinite(r))return null;let n=a=>{let i=Number(a);return Number.isFinite(i)?i:null};return{t:r,outside:n(t[1]),supply:n(t[2]),room:t.length>=8?n(t[3]):null,roomSetpoint:t.length>=8?n(t[4]):null,flow:t.length>=8?n(t[5]):null,input:t.length>=8?n(t[6]):n(t[3]),output:t.length>=8?n(t[7]):n(t[4])}}function wu(){return!1}function vu(e=co()){return[]}function rb(){let e=ob(),t=String(o.trendHistoryRaw||"").trim();if(!t)return wu()?vu():[];let r=t.split(/\r?\n/).map(JT).filter(Boolean),n=r.length?r[r.length-1].t:Number.NaN,a=Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:Number.isFinite(n)?n:Number.NaN;if(!Number.isFinite(a))return r.length?r.slice(-Kh):vu();let i=Math.max(0,a-e),l=r.filter(c=>c.t>=i).slice(-Kh);return l.length?l:wu()?vu(windowHours):[]}function Hu(){let e=co(),t=Ru(e),r=rb(),n=wu()&&r.length===0,a=zt();return[{id:"temperatures",title:"Temperaturen",copy:`Buiten- en aanvoertemperatuur van de laatste ${t}.`,tone:"orange",samples:r,mock:n,windowHours:e,series:[{id:"outside",sampleKey:"outside",currentKey:"outsideTempSelected",label:"Buiten",tone:"orange",decimals:1,unit:" \xB0C"},{id:"supply",sampleKey:"supply",currentKey:"supplyTemp",label:"Aanvoer",tone:"blue",decimals:1,unit:" \xB0C"}]},{id:"power",title:"Vermogen",copy:`Elektrisch vermogen en verwarmingsvermogen van de laatste ${t}.`,tone:"green",samples:r,mock:n,windowHours:e,series:[{id:"input",sampleKey:"input",currentKey:"totalPower",label:"Elektrisch vermogen",tone:"green",decimals:0,unit:" W"},{id:"output",sampleKey:"output",currentKey:a?"totalCoolingPower":"totalHeat",label:a?"Koelvermogen":"Verwarmingsvermogen",tone:"sky",decimals:0,unit:" W"}]},{id:"rendement",title:"Rendement",copy:`COP van de laatste ${t}.`,tone:"slate",samples:r,mock:n,windowHours:e,series:[{id:"cop",label:"COP",tone:"slate",decimals:1,unit:"",currentKey:a?"totalEer":"totalCop",derive:i=>{let l=Number(i?.input),c=Number(i?.output);return!Number.isFinite(l)||!Number.isFinite(c)||l<QT?Number.NaN:c/l}}]},{id:"comfort",title:"Comfort",copy:`Kamertemperatuur en setpoint van de laatste ${t}.`,tone:"blue",samples:r,mock:n,windowHours:e,series:[{id:"roomTemp",sampleKey:"room",currentKey:"roomTemp",label:"Kamertemperatuur",tone:"blue",decimals:1,unit:" \xB0C"},{id:"roomSetpoint",sampleKey:"roomSetpoint",currentKey:"roomSetpoint",label:"Kamer setpoint",tone:"orange",decimals:1,unit:" \xB0C"}]},{id:"flow",title:"Flow",copy:`Flow van de laatste ${t}.`,tone:"sky",samples:r,mock:n,windowHours:e,series:[{id:"flow",sampleKey:"flow",currentKey:"flowSelected",label:"Flow",tone:"sky",decimals:0,unit:" L/h",axisMin:0,axisTickStep:250}]}]}function ZT(e){let t=e.samples[e.samples.length-1]||null;return we({id:e.id,windowHours:e.windowHours,sampleCount:e.samples.length,firstTimestamp:e.samples[0]?.t||0,lastTimestamp:t?.t||0,trendSignature:o.trendHistorySignature||"",latestValues:t?[t.outside,t.supply,t.room,t.roomSetpoint,t.flow,t.input,t.output]:[]})}function Ma(e,t){if(!e||!t)return Number.NaN;let r=typeof e.derive=="function"?e.derive(t):t?.[e.sampleKey],n=Number(r);return Number.isFinite(n)?n:Number.NaN}function XT(e,t){let r=[];return e.forEach(n=>{t.forEach(a=>{let i=Ma(a,n);Number.isFinite(i)&&r.push(i)})}),r.length?{min:Math.min(...r),max:Math.max(...r)}:{min:0,max:1}}function eC(e){if(!Number.isFinite(e)||e<=0)return 1;let t=Math.floor(Math.log10(e)),r=e/10**t,n;return r<=1?n=1:r<=2?n=2:r<=5?n=5:n=10,n*10**t}function tC(e,t){let r=Number.isFinite(e?.min)?e.min:0,n=Number.isFinite(e?.max)?e.max:1,a=Math.max(n-r,1),i=Array.isArray(t)?t.map(w=>Number(w?.axisMin)).find(w=>Number.isFinite(w)):Number.NaN,l=Array.isArray(t)?t.map(w=>Number(w?.axisMax)).find(w=>Number.isFinite(w)):Number.NaN,c=Array.isArray(t)?t.map(w=>Number(w?.axisTickStep)).find(w=>Number.isFinite(w)&&w>0):Number.NaN,d=Math.max(1,Number.isFinite(c)?c:eC(a/4)),u=[];if(Number.isFinite(i)||Number.isFinite(l)){let w=Number.isFinite(i)?i:0,f=Number.isFinite(l)?l:Math.ceil(n/d)*d,g=Math.floor(w/d)*d,p=Math.ceil(f/d)*d;for(let b=g;b<=p+d*.5;b+=d)u.push(b)}else{let w=a/d,f=w<=1.8?3:w<=4.25?5:7,g=Math.floor(f/2),p=(r+n)/2,b=Math.round(p/d)*d;for(let S=-g;S<=g;S+=1)u.push(b+S*d)}let m=u[0],v=u[u.length-1];return{ticks:u,axisMin:m,axisMax:v,axisDecimals:0}}function nb(e,t,r={}){let n=Number(r.windowHours),a=Number.isFinite(n)?n:co(),i=ob(a),l=640,c=220,d=46,u=18,m=18,v=34,w=l-d-u,f=c-m-v,g=e[e.length-1],p=!!r.mockData,b=p?i:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:g?g.t:0,S=p?0:b-i,k=Math.max(b-S,1),E=k,q=XT(e,t),M=q.min===q.max?{min:q.min-1,max:q.max+1}:{min:q.min-Math.max((q.max-q.min)*.12,1),max:q.max+Math.max((q.max-q.min)*.12,1)},_=tC(q,t),H=N=>d+(N-S)/k*w,F=N=>{if(!Number.isFinite(N))return Number.NaN;let J=(N-M.min)/Math.max(M.max-M.min,1);return m+(1-Math.min(1,Math.max(0,J)))*f},L=[0,.5,1].map(N=>d+w*N),W=_.ticks.map(N=>F(N)),x=_.ticks.map((N,J)=>({x:d-10,y:W[J],text:U(N,_.axisDecimals)})),O=e.map(N=>{let J=H(N.t),P=t.map(B=>{let X=Ma(B,N);return Number.isFinite(X)?{seriesId:B.id||B.sampleKey||B.label,tone:B.tone,label:B.label,decimals:B.decimals,unit:B.unit,value:X,x:J,y:F(X)}:null});return{sample:N,x:J,values:P}}),D=t.flatMap(N=>{let J=[],P=[];return e.forEach(B=>{let X=Ma(N,B);if(!Number.isFinite(X)){P.length&&(J.push(P),P=[]);return}P.push({x:H(B.t),y:F(X)})}),P.length&&J.push(P),J.map(B=>B.length<2?{tone:N.tone,points:B,path:""}:{tone:N.tone,points:B,path:B.map((X,Pe)=>`${Pe===0?"M":"L"} ${X.x.toFixed(1)} ${X.y.toFixed(1)}`).join(" ")})});return{width:l,height:c,left:d,right:u,top:m,bottom:v,plotWidth:w,plotHeight:f,latest:g,uptimeMs:E,endTime:b,startTime:S,span:k,windowHours:a,range:q,displayRange:M,gridXs:L,gridYs:W,yAxisLabels:x,points:O,tracks:D,series:t}}function ks(){return we({windowHours:co(),trendSignature:o.trendHistorySignature||"",trendNowMs:Number.isFinite(o.trendHistoryNowMs)?o.trendHistoryNowMs:0,coolingActive:zt()})}function oC(e){return Hu().find(t=>t.id===e)||null}function rC(e,t){if(!e||!Array.isArray(e.points)||e.points.length===0)return-1;let r=0,n=Math.abs(e.points[0].x-t);return e.points.forEach((a,i)=>{let l=Math.abs(a.x-t);l<n&&(r=i,n=l)}),r}function nC(e,t){let r=ab(e,t);return`
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${s(e.tone)}" data-oq-trend-current="${s(e.id)}">
        <span>${s(e.label)}</span>
        <strong>${s(U(r,e.decimals,e.unit))}</strong>
      </div>
    `}function ab(e,t){if(e?.currentKey&&y(e.currentKey)){let r=R(e.currentKey);if(Number.isFinite(r))return r}return Ma(e,t)}function Du(e){e&&Hu().forEach(t=>{let r=e.querySelector(`[data-oq-trend-card="${t.id}"]`),n=t.samples[t.samples.length-1]||null;r&&t.series.forEach(a=>{let l=r.querySelector(`[data-oq-trend-current="${a.id}"]`)?.querySelector("strong"),c=U(ab(a,n),a.decimals,a.unit);l&&l.textContent!==c&&(l.textContent=c)})})}function aC(e,t,r=!1,n=co()){let a=nb(e,t,{mockData:r,windowHours:n}),i=Ru(n),l=bu(a.startTime),c=bu(a.startTime+a.span/2),d=bu(a.endTime),u=a.tracks.flatMap(m=>{if(m.points.length<2){let v=m.points[0];return v?`
          <circle
            cx="${v.x.toFixed(1)}"
            cy="${v.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${s(m.tone)}"
          ></circle>
        `:[]}return`
        <path d="${m.path}" class="oq-overview-trend-line oq-overview-trend-line--${s(m.tone)}"></path>
        <circle
          cx="${m.points[m.points.length-1].x.toFixed(1)}"
          cy="${m.points[m.points.length-1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${s(m.tone)}"
        ></circle>
      `}).join("");return`
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${a.width} ${a.height}" role="img" aria-label="Trendgrafiek van de laatste ${i}">
        <rect x="0" y="0" width="${a.width}" height="${a.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${a.gridXs.map(m=>`<line x1="${m.toFixed(1)}" y1="${a.top}" x2="${m.toFixed(1)}" y2="${a.height-a.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${a.gridYs.map(m=>`<line x1="${a.left}" y1="${m.toFixed(1)}" x2="${a.width-a.right}" y2="${m.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${u}
        ${a.yAxisLabels.map(m=>`
          <text
            x="${m.x}"
            y="${m.y.toFixed(1)}"
            class="oq-overview-trend-axis-label oq-overview-trend-axis-label--y"
            text-anchor="end"
            dominant-baseline="middle"
          >${s(m.text)}</text>
        `).join("")}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${a.left}" y1="${a.top}" x2="${a.left}" y2="${a.height-a.bottom}" class="oq-overview-trend-hover-line"></line>
          ${t.map(m=>`
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${s(m.tone)}"
              data-oq-trend-hover-dot="${s(m.id||m.sampleKey||m.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${a.left}" y1="${a.height-a.bottom}" x2="${a.width-a.right}" y2="${a.height-a.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${a.left}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="start">${s(l)}</text>
        <text x="${a.left+a.plotWidth/2}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="middle">${s(c)}</text>
        <text x="${a.width-a.right}" y="${a.height-12}" class="oq-overview-trend-axis-label" text-anchor="end">${s(d)}</text>
      </svg>
    `}function iC(e){let t=e.samples[e.samples.length-1]||null,r=Ru(e.windowHours);return`
      <article class="oq-overview-trendcard oq-overview-trendcard--${s(e.tone)}" data-oq-trend-card="${s(e.id)}" data-render-signature="${s(ZT(e))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${s(r)}</p>
            <h4>${s(e.title)}</h4>
            <p>${s(e.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${e.series.map(n=>nC(n,t)).join("")}
            </div>
          </div>
        </div>
        ${aC(e.samples,e.series,e.mock,e.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>\u2014</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `}function qs(){let e=Hu();return`
      <section class="oq-overview-trends" aria-label="Diagnose" data-render-signature="${s(ks())}">
        <div class="oq-overview-trends-grid">
          ${e.map(iC).join("")}
        </div>
      </section>
    `}function sC(){return`
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `}function lC(){let e=co(),t=jc();return`
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${er.map(r=>`
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
          >${s(YT(r))}</button>
        `})()}
        `).join("")}
      </div>
    `}function cC(){let e="overview-trends-history",t=o.settingsInfoOpen===e;return`
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
    `}function ib(){let e=vt(),r=rb().length>0;return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${cC()}
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
                  ${lC()}
                </div>
              `:""}
            </div>
          </div>
          ${e&&r?qs():sC()}
        </div>
      </section>
    `}function uC(){if(!o.root||o.appView!=="diagnosis")return!1;let e=o.root.querySelector(".oq-overview-board");if(!e)return!1;let t=e.querySelector(".oq-overview-trends");return t?(rt(t,ks(),qs()),Du(e),Aa(e),!0):!1}function Nu(e){if(!e)return null;let t=e.__oqTrendHoverNodes;if(t&&t.chart&&t.hoverLayer&&t.hoverPanel)return t;let r=e.querySelector("[data-oq-trend-hover-layer]"),n={chart:e.querySelector(".oq-overview-trend-chart"),hoverLayer:r,hoverPanel:e.querySelector("[data-oq-trend-hover]"),hoverTime:e.querySelector("[data-oq-trend-hover-time]"),hoverNote:e.querySelector("[data-oq-trend-hover-note]"),hoverValues:e.querySelector("[data-oq-trend-hover-values]"),hoverLine:r?r.querySelector(".oq-overview-trend-hover-line"):null,hoverDots:{}};return r&&r.querySelectorAll("[data-oq-trend-hover-dot]").forEach(a=>{n.hoverDots[a.getAttribute("data-oq-trend-hover-dot")]=a}),e.__oqTrendHoverNodes=n,n}function zh(e,t,r,n=Nu(e)){if(!e||!t||!Array.isArray(t.points)||t.points.length===0)return;let a=Math.max(0,Math.min(t.points.length-1,r)),i=t.points[a];if(!i||!n||!n.chart||!n.hoverLayer||!n.hoverPanel||!n.hoverTime||!n.hoverNote||!n.hoverValues)return;let l=String(a);if(!n.hoverPanel.hidden&&e.dataset.oqTrendHoverIndex===l)return;let c=FT(i.sample.t,t.endTime);n.hoverPanel.hidden=!1,n.hoverLayer.removeAttribute("hidden"),n.hoverTime.textContent=c.value,n.hoverNote.textContent=c.note,n.hoverLine&&(n.hoverLine.setAttribute("x1",i.x.toFixed(1)),n.hoverLine.setAttribute("x2",i.x.toFixed(1)));let d=[];t.series.forEach(u=>{let m=Ma(u,i.sample),v=u.id||u.sampleKey||u.label,w=n.hoverDots[v];if(!Number.isFinite(m)){w&&w.setAttribute("display","none");return}let f=i.values.find(g=>g.seriesId===v);w&&f&&(w.removeAttribute("display"),w.setAttribute("cx",f.x.toFixed(1)),w.setAttribute("cy",f.y.toFixed(1))),d.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${s(u.tone)}">
          <span>${s(u.label)}</span>
          <strong>${s(U(m,u.decimals,u.unit))}</strong>
        </div>
      `)}),n.hoverValues.innerHTML=d.join(""),e.dataset.oqTrendHoverIndex=l}function dC(e){if(!e)return;let t=Nu(e);t?.hoverPanel&&(t.hoverPanel.hidden=!0),t?.hoverLayer&&t.hoverLayer.setAttribute("hidden",""),delete e.dataset.oqTrendHoverIndex}function Aa(e=o.root){if(!e)return;e.querySelectorAll("[data-oq-trend-card]").forEach(r=>{let n=r.dataset.renderSignature||"";if(r.__oqTrendBoundSignature===n)return;typeof r.__oqTrendCleanup=="function"&&r.__oqTrendCleanup(),r.__oqTrendHoverNodes=null,r.__oqTrendBoundSignature=n;let a=r.querySelector(".oq-overview-trend-chart");if(!a)return;let i=oC(r.dataset.oqTrendCard);if(!i)return;let l=nb(i.samples,i.series,{mockData:i.mock});r.__oqTrendModel=l;let c=Nu(r),d=0,u=null,m=()=>{let f=u;u=null,d=0;let g=a.getBoundingClientRect();if(!g.width||!g.height)return;let p=Number(f?.clientX);if(!Number.isFinite(p)){zh(r,l,l.points.length-1,c);return}let S=Math.min(g.width,Math.max(0,p-g.left))/g.width*l.width,k=rC(l,S);zh(r,l,k,c)},v=f=>{u=f,d||(d=window.requestAnimationFrame(m))},w=()=>{d&&(window.cancelAnimationFrame(d),d=0),u=null,dC(r)};a.addEventListener("pointermove",v),a.addEventListener("pointerenter",v),a.addEventListener("pointerleave",w),a.addEventListener("focus",v),a.addEventListener("blur",w),a.addEventListener("touchstart",v,{passive:!0}),r.__oqTrendCleanup=()=>{d&&(window.cancelAnimationFrame(d),d=0),u=null,a.removeEventListener("pointermove",v),a.removeEventListener("pointerenter",v),a.removeEventListener("pointerleave",w),a.removeEventListener("focus",v),a.removeEventListener("blur",w),a.removeEventListener("touchstart",v)}})}xo({patchDiagnosisDom:uC});function Wu(e,t,r){let n=Ts(j(t.mode,"Unknown")),a=C(t.defrost),i=Eo(j(t.failures,"None")),l=hi(i),c=n==="Verwarmen"||n==="Koelen"||a;return{mode:n,defrostActive:a,failures:i,warningFailures:l,running:c,thermalKey:n==="Koelen"?t.cooling:t.heat,schematic:SC(e,t,r,n,a,l,c)}}function lb(e,t=null){return`<h3>${s(e)}</h3>${t?`<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${s(t.layout)}">${MC(t.layout==="equal"?"minus":"plus")}<span>${s(t.label)}</span></button>`:""}`}function Pu(e,t,r,n){return`<div class="oq-overview-hp-status">${qu(e,t,r,n)}</div>`}function pC(e,t){return t?"ontdooit":e==="Verwarmen"?"verwarmt":e==="Koelen"?"koelt":e==="Stand-by"?"stand-by":"onbekend"}function cb(e){return!Array.isArray(e)||e.length===0?"":`<p class="oq-overview-hp-summary">${s(e.map(t=>`${t.title} ${pC(Ts(j(t.keys.mode,"Unknown")),C(t.keys.defrost))}`).join(", "))}</p>`}function mC(e){let t=o.entities[e];if(!t)return"Positie: \u2014";let r=R(e);return Number.isNaN(r)?`Positie: ${j(e)}`:`Positie: ${U(r,0,t.uom||"")}`}function gC(e){return y(e)?`Positie: ${C(e)?"Koelen/Defrost":"Verwarmen"}`:"Positie: \u2014"}function Ts(e){let t=String(e||"").trim();return!t||t==="Unknown"?"Onbekend":t==="Standby"?"Stand-by":t==="Heating"?"Verwarmen":t==="Cooling"?"Koelen":t}function Lu(e,t,r,n=!0,a="default"){return`
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${s(t)}" data-oq-pipe="${s(e)}">
        <path class="oq-hp-tech-pipe-base" d="${s(r)}" />
        <path class="oq-hp-tech-pipe-core" d="${s(r)}" />
        ${n?`<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${s(a)}" d="${s(r)}" />`:""}
      </g>
    `}function fC(e,t,r){return e==="temperature"?`
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
    `}function _a({bind:e,modifier:t,x:r,y:n,width:a,kicker:i,detail:l,detailBind:c="",icon:d="heater",direction:u="down"}){let v=r+26,w=n+22,f=c?` data-oq-bind="${s(c)}"`:"",g="";if(u==="up"){let p=r+Math.round(a*.52);g=`M${p-6} ${n} L${p} ${n-8} L${p+6} ${n} Z`}else if(u==="left"){let p=n+Math.round(22);g=`M${r} ${p-6} L${r-8} ${p} L${r} ${p+6} Z`}else if(u==="right"){let p=n+Math.round(22);g=`M${r+a} ${p-6} L${r+a+8} ${p} L${r+a} ${p+6} Z`}else{let p=r+Math.round(a*.52);g=`M${p-6} ${n+44} L${p} ${n+44+8} L${p+6} ${n+44} Z`}return`
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${s(t)}"
        data-oq-bind="${s(e)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${r}" y="${n}" width="${a}" height="44" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${v}" cy="${w}" r="11.5" />
        ${fC(d,v,w)}
        <text class="oq-hp-tech-tooltip-kicker" x="${r+48}" y="${n+16}">${s(i)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${r+48}" y="${n+32}"${f}>${s(l)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${g}" />
      </g>
    `}function Iu({bind:e,x:t,y:r,width:n,value:a,label:i,ariaLabel:l="",align:c="start"}){let d=l||`${i} temperatuur ${a}`,u=c==="end",m=c==="center",v=m?"middle":u?"end":"start",w=m?t+n/2:u?t+n-2:t+2;return`
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${s(e)}-reading"
        data-oq-tooltip-target="${s(e)}"
        tabindex="0"
        aria-label="${s(d)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${t}" y="${r}" width="${n}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${w}" y="${r+13}" text-anchor="${v}" data-oq-bind="${s(e)}-value">${s(a)}</text>
      </g>
    `}function hC({tooltip:e,...t}){return`${Iu(t)}${_a({bind:t.bind,...e})}`}function bC({bind:e,ariaLabel:t,x:r,y:n,width:a,height:i,rx:l,tooltip:c}){return`
      <g class="oq-hp-tech-hotspot" data-oq-bind="${s(e)}-trigger" data-oq-tooltip-target="${s(e)}" tabindex="0" aria-label="${s(t)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${r}" y="${n}" width="${a}" height="${i}" rx="${l}" />
      </g>
      ${_a({bind:e,...c})}
    `}function Ou({bind:e,className:t,active:r,ariaLabel:n,attrs:a="",activeClass:i="is-active",content:l,tooltip:c}){return`
      <g class="${[t,r&&i?i:""].filter(Boolean).join(" ")}" data-oq-bind="${s(e)}" data-oq-tooltip-target="${s(e)}" tabindex="${r?"0":"-1"}" aria-label="${s(n)}" ${a}>
        ${l}
      </g>
      ${_a({bind:e,...c})}
    `}function vC({label:e,value:t,bind:r,ariaLabel:n="",valueBind:a="",labelBind:i="",labelMarkup:l=""}){return`
      <div class="oq-hp-tech-footer-item">
        <span${n?` aria-label="${s(n)}"`:""}${i?` data-oq-bind="${s(i)}"`:""}>${l||s(e)}</span>
        <strong${a?` data-oq-bind="${s(a)}"`:""}>${s(t)}</strong>
      </div>
    `}function uo(e,t,r=""){let n=R(e);return Number.isNaN(n)?j(e):U(n,t,Wr(e,r))}function wC(e){let r=String(T("hpGeneration")||"").trim()==="V1"&&e==="hp1Flow"?["flowSelected","controllerFlow","flowLocal",e]:[e];return r.filter((n,a)=>n&&r.indexOf(n)===a)}function yC(e){let t=wC(e),r=t.find(n=>y(n))||e;for(let n of t){if(!y(n))continue;let a=R(n);if(!Number.isNaN(a))return{key:n,value:a,text:U(a,0,Wr(n,"L/h"))}}return{key:r,value:Number.NaN,text:j(r)}}function SC(e,t,r,n,a,i,l){let c=R(t.freq),d=Number.isNaN(c)?"\u2014":String(Math.round(c)),u=R(t.power),m=R(t.heat),v=R(t.cooling),w=yC(t.flow),f=w.value,g=n==="Koelen"?v:m,p=l||!Number.isNaN(c)&&c>0||!Number.isNaN(u)&&u>80||!Number.isNaN(m)&&m>150,b=!Number.isNaN(f)&&f>0,S=ku(n,p),k=i==="Geen actieve storingen"?"Geen storingen":i,E=k!=="Geen storingen",q=a?"Actief":"Uit",M=uo(t.waterOut,1,"\xB0C"),_=uo(t.waterIn,1,"\xB0C"),H=w.text,F=uo(t.evaporatorCoilTemp,1,"\xB0C"),L=uo(t.innerCoilTemp,1,"\xB0C"),W=uo(t.outsideTemp,1,"\xB0C"),x=uo(t.condenserPressure,1,"bar"),O=uo(t.dischargeTemp,1,"\xB0C"),D=uo(t.evaporatorPressure,1,"bar"),N=uo(t.returnTemp,1,"\xB0C"),J=C(t.bottomPlate),P=C(t.crankcase),B=mC(t.eev),X=gC(t.fourWay),Pe=U(u,0,"W"),Tt=U(g,0,"W"),ht=n==="Koelen"?!Number.isNaN(u)&&u>=5&&!Number.isNaN(v)?v/u:Number.NaN:R(t.cop),mo=U(ht,1),Ct=n==="Koelen"?"COP (EER)":"COP",Le=n==="Koelen"?"Koelafgifte":"Warmteafgifte",$n=n==="Koelen"?"afgegeven koeling":"afgegeven warmte",me=R(t.fanSpeed),An=!Number.isNaN(me)&&me>0,Nr=Number.isNaN(me)?"\u2014":`${Math.round(me)} rpm`,$=a||n==="Koelen",A=$?"Verdamper":"Condensor",V=$?"Condensor":"Verdamper",K=$?"return":"supply",te=$?"supply":"return",ae=360,he=384,be=214,ue="M278 220 C278 228 273 234 266 234",Ye="M278 220 C278 228 283 234 290 234",ve="M290 234 C284 234 279 240 278 248",Je="M266 234 C272 234 277 240 278 248",go=$?`M290 234 H${ae} Q372 ${be} ${he} 234 H436 V134 H480`:"M266 234 H180 V134 H164",De=$?"M164 134 H180 V234 H266":`M480 134 H436 V234 H${he} Q372 ${be} ${ae} 234 H290`,fo="M296 150 H278 V220",ho="M278 248 V268 H372 V150 H356",Ve=$?"M480 294 H337":"M164 294 H315",bo=$?"M315 294 H164":"M337 294 H480",Ae=["oq-hp-schematic-board",`oq-hp-schematic-board--${r}`,p?"is-running":"",b?"is-water-flowing":"",An?"is-fan-running":"",$?"is-reversed":"",a?"is-defrost":""].filter(Boolean).join(" ");return{title:e,boardClass:Ae,statusText:S,failureText:k,warningActive:E,waterFlowActive:b,defrostActive:a,defrostText:q,mode:n,reverseCycle:$,compressorFreqText:`${d} Hz`,leftExchangerTitle:A,rightExchangerTitle:V,supplyLineTone:K,returnLineTone:te,waterOutText:M,waterInText:_,flowText:H,evaporatorCoilTempText:F,innerCoilTempText:L,outsideTempText:W,dischargePressureText:x,dischargeTempText:O,suctionPressureText:D,suctionTempText:N,bottomPlateActive:J,crankcaseActive:P,eevPositionText:B,fourWayPositionText:X,powerText:Pe,heatText:Tt,heatLabel:Le,heatDescription:$n,efficiencyText:mo,efficiencyLabel:Ct,fanRpmText:Nr,hotgasValveHeat:ue,hotgasValveCool:Ye,suctionValveHeat:ve,suctionValveCool:Je,leftValveTone:$?"suction":"hotgas",rightValveTone:$?"hotgas":"suction",pipes:{supply:{tone:K,d:"M104 134 H18",animated:!0,flowVariant:"water"},return:{tone:te,d:"M18 294 H104",animated:!0,flowVariant:"water"},compressorDischarge:{tone:"hotgas",d:fo,animated:!0,flowVariant:"default"},hotgasExternal:{tone:"hotgas",d:go,animated:!0,flowVariant:"default"},liquid:{tone:"liquid",d:Ve,animated:!0,flowVariant:"default"},expansion:{tone:"expansion",d:bo,animated:!0,flowVariant:"default"},suctionExternal:{tone:"suction",d:De,animated:!0,flowVariant:"default"},suctionCompressor:{tone:"suction",d:ho,animated:!0,flowVariant:"default"}}}}function kC(e){let t=String(e.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-"),r=`${t}-cond-water-heat`,n=`${t}-cond-water-cool`,a=`${t}-cond-ref`,i=e.reverseCycle?n:r,l=[{label:"Werkmodus",value:e.mode,valueBind:"footer-mode"},{label:"Stroomverbruik",ariaLabel:"Stroomverbruik",labelMarkup:"Stroom<br>verbruik",value:e.powerText,valueBind:"footer-power"},{label:e.heatLabel,ariaLabel:e.heatLabel,labelBind:"footer-heat-label",labelMarkup:e.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte",value:e.heatText,valueBind:"footer-heat"},{label:e.efficiencyLabel,labelBind:"footer-efficiency-label",value:e.efficiencyText,valueBind:"footer-efficiency"}],c=[{bind:"flow",x:52,y:308,width:72,value:e.flowText,label:"Flow",ariaLabel:`Flow ${e.flowText}`,align:"center",tooltip:{modifier:e.returnLineTone,icon:"flow",x:110,y:276,width:126,kicker:"Flow",detail:"CV-circuit",direction:"left"}},{bind:"discharge-pressure",x:218,y:138,width:50,value:e.dischargePressureText,label:"Persdruk",ariaLabel:`Persdruk ${e.dischargePressureText}`,align:"end",tooltip:{modifier:"warm",icon:"pressure",x:82,y:120,width:118,kicker:"Druk",detail:"Perszijde",direction:"right"}},{bind:"discharge-temp",x:218,y:166,width:50,value:e.dischargeTempText,label:"Perstemperatuur",ariaLabel:`Perstemperatuur ${e.dischargeTempText}`,align:"end",tooltip:{modifier:"warm",icon:"temperature",x:80,y:174,width:142,kicker:"Temperatuur",detail:"Perszijde",direction:"right"}},{bind:"suction-pressure",x:378,y:138,width:50,value:e.suctionPressureText,label:"Zuigdruk",ariaLabel:`Zuigdruk ${e.suctionPressureText}`,tooltip:{modifier:"component",icon:"pressure",x:438,y:120,width:118,kicker:"Druk",detail:"Zuigzijde",direction:"left"}},{bind:"suction-temp",x:378,y:166,width:50,value:e.suctionTempText,label:"Zuigtemperatuur",ariaLabel:`Zuigtemperatuur ${e.suctionTempText}`,tooltip:{modifier:"component",icon:"temperature",x:414,y:174,width:142,kicker:"Temperatuur",detail:"Zuigzijde",direction:"left"}},{bind:"inner-coil-temp",x:120,y:166,width:52,value:e.innerCoilTempText,label:"Inner coil temperatuur",ariaLabel:`Inner coil temperatuur ${e.innerCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:174,y:148,width:132,kicker:"Temperatuur",detail:"Condensor",direction:"right"}},{bind:"evaporator-temp",x:484,y:166,width:52,value:e.evaporatorCoilTempText,label:"Verdampertemperatuur",ariaLabel:`Verdampertemperatuur ${e.evaporatorCoilTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:344,y:148,width:132,kicker:"Temperatuur",detail:"Verdamper",direction:"right"}},{bind:"outside-temp",x:548,y:110,width:48,value:e.outsideTempText,label:"Buitentemperatuur",ariaLabel:`Buitentemperatuur ${e.outsideTempText}`,align:"center",tooltip:{modifier:"component",icon:"temperature",x:424,y:92,width:136,kicker:"Temperatuur",detail:"Buitenlucht",direction:"right"}},{bind:"fan-speed",x:520,y:258,width:60,value:e.fanRpmText,label:"Ventilatorsnelheid",ariaLabel:`Ventilatorsnelheid ${e.fanRpmText}`,align:"center",tooltip:{modifier:"component",icon:"fan",x:410,y:236,width:118,kicker:"Ventilator",detail:"Toerental",direction:"right"}},{bind:"supply",x:22,y:114,width:58,value:e.waterOutText,label:"Aanvoer",tooltip:{modifier:e.supplyLineTone,icon:"temperature",x:96,y:96,width:124,kicker:"Temperatuur",detail:"Aanvoer",direction:"left"}},{bind:"return",x:22,y:274,width:58,value:e.waterInText,label:"Retour",tooltip:{modifier:e.returnLineTone,icon:"temperature",x:96,y:252,width:124,kicker:"Temperatuur",detail:"Retour",direction:"left"}}],d=[{bind:"compressor-freq",ariaLabel:`Compressorfrequentie ${e.compressorFreqText}`,x:300,y:148,width:52,height:26,rx:12,tooltip:{modifier:"component",icon:"fan",x:366,y:130,width:136,kicker:"Frequentie",detail:"Compressor",direction:"left"}},{bind:"fourway",ariaLabel:`4-wegklep, ${e.fourWayPositionText}`,x:252,y:208,width:52,height:52,rx:16,tooltip:{modifier:"component",icon:"fourway",x:308,y:198,width:196,kicker:"4-wegklep",detail:e.fourWayPositionText,detailBind:"fourway-detail",direction:"left"}},{bind:"eev",ariaLabel:`Expansieventiel, ${e.eevPositionText}`,x:301,y:275,width:50,height:38,rx:12,tooltip:{modifier:"component",icon:"eev",x:340,y:252,width:202,kicker:"Expansieventiel",detail:e.eevPositionText,detailBind:"eev-detail",direction:"left"}}];return`
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

            ${Object.entries(e.pipes).map(([u,m])=>Lu(u.replace(/[A-Z]/g,v=>`-${v.toLowerCase()}`),m.tone,m.d,m.animated,m.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${e.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${c.map(hC).join("")}
            ${Ou({bind:"bottom-heater",className:"oq-hp-tech-bottom-heater",active:e.bottomPlateActive,ariaLabel:"Bottom plate heater actief",content:`
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,tooltip:{modifier:"warm",x:372,y:269,width:210,kicker:"Verwarming",detail:"Bodemplaatverwarming aan"}})}
            ${Ou({bind:"crankcase-heater",className:"oq-hp-tech-crankcase-heater",active:e.crankcaseActive,ariaLabel:"Crank case heater actief",content:`
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,tooltip:{modifier:"warm",x:224,y:142,width:172,kicker:"Verwarming",detail:"Carterverwarming aan"}})}
            ${Ou({bind:"defrost-badge",className:"oq-hp-tech-defrost-badge",active:e.defrostActive,activeClass:"",ariaLabel:e.defrostActive?"Defrost actief":"Defrost uit",attrs:'transform="translate(532 288)"',content:`
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

            ${d.map(bC).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${l.map(vC).join("")}
          </div>
        </div>
      </div>
    `}function ub(e,t,r,n="normal",a=null){if(!y(t.power))return"";let i=Wu(e,t,r),{mode:l,defrostActive:c,running:d,thermalKey:u}=i,m=i.schematic;return o.hpVisualMode==="schematic"?`
        <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${lb(e,a)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${Pu(l,d,m.warningActive,m.failureText)}
            </div>
          </div>
          ${kC(m)}
        </section>
      `:`
      <section class="oq-overview-hp oq-overview-hp--${s(r)} oq-overview-hp--${s(n)}" data-oq-hp-panel="${s(e)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${s(e)}</h3>
          </div>
          ${Pu(l,d,m.warningActive,m.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${$a([{key:t.power,label:"Stroomverbruik",tone:"blue",note:"elektrisch verbruik"},{key:u,label:m.heatLabel,tone:"orange",note:m.heatDescription},{label:m.efficiencyLabel,value:m.efficiencyText,tone:"green",note:"actueel"}])}
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
          ${ws("Water in",t.waterIn)}
          ${ws("Water out",t.waterOut)}
        </div>
      </section>
    `}function Bu(){return C("boilerCvAssistEnabled")&&y("boilerHeatPower")}function qC(){return(typeof ne=="function"?ne():"")!=="single"&&y("hp2WaterOut")?"hp2WaterOut":"hp1WaterOut"}function EC(){return y("flowSelected")?"flowSelected":(typeof ne=="function"?ne():"")!=="single"&&y("hp2Flow")?"hp2Flow":"hp1Flow"}function TC({opentherm:e,linkAvailable:t,fault:r,dhwActive:n,flameOn:a,chActive:i,commandActive:l,commandValid:c,requestedPower:d,blockReason:u}){if(e&&r)return{code:"fault",text:"Storing",copy:"Ketel meldt een storing",tone:"danger"};if(e&&!t)return{code:"offline",text:"Geen verbinding",copy:"Geen OpenTherm-reactie",tone:"offline"};if(e&&n)return{code:"dhw",text:"Tapwater",copy:"Ketel verwarmt tapwater",tone:"dhw"};if(e&&a)return{code:"heating",text:"Verwarmt",copy:"Vlam actief voor CV",tone:"active"};if(i)return{code:"heating",text:"CV actief",copy:e?"CV-circulatie actief":"Levert ondersteuning",tone:"active"};if(l)return{code:"starting",text:"Start gevraagd",copy:e?"Wacht op de ketel":"Ketel wordt aangestuurd",tone:"waiting"};let m=String(u||"").trim().toLowerCase();return Number.isFinite(d)&&d>0&&(!c||m&&m!=="no boiler heat request"&&m!=="boiler/cv assist disabled")?{code:"blocked",text:"Wacht",copy:"Warmtevraag is tijdelijk geblokkeerd",tone:"waiting"}:{code:"idle",text:"Uit",copy:"Geen ondersteuning",tone:"neutral"}}function Cs(){let e=String(T("boilerConnection")||"R1")==="OpenTherm",t=!e||C("otbLinkAvailable"),r=R("boilerHeatPower"),n=R(EC()),a=e?t&&C("otbChActive"):y("boilerActive")?C("boilerActive"):!Number.isNaN(r)&&r>20,i=e&&t&&C("otbFlameOn"),l=e&&t&&C("otbDhwActive"),c=e&&t&&["otbFaultIndication","otbFlameFault","otbAirPressureFault","otbWaterOverTemp","otbLowWaterPressure"].some(W=>C(W)),d=e&&t&&C("otbDiagnosticIndication"),u=y("boilerCommandActive")&&C("boilerCommandActive"),m=!y("boilerCommandValid")||C("boilerCommandValid"),v=R("boilerCommandRequestedPower"),w=j("boilerBlockReason",""),f=TC({opentherm:e,linkAvailable:t,fault:c,dhwActive:l,flameOn:i,chActive:a,commandActive:u,commandValid:m,requestedPower:v,blockReason:w}),g=!Number.isNaN(n)&&n>0,p=U(r,0,"W"),b=U(n,0,"L/h"),S=W=>t?R(W):Number.NaN,k=U(e?S("otbReturnWaterTemp"):R(qC()),1,"\xB0C"),E=U(e?S("otbBoilerWaterTemp"):R("supplyTemp"),1,"\xB0C"),q=U(S("otbChPressure"),1,"bar"),M=U(S("boilerCommandTargetTemperature"),1,"\xB0C"),_=U(S("otbRelativeModulation"),0,"%"),H=U(S("otbDhwTemp"),1,"\xB0C"),F=d&&!c?"Diagnostische melding beschikbaar":"",L=["oq-boiler-card",a?"is-running":"is-idle",i?"has-flame":"",`is-${f.code}`].filter(Boolean).join(" ");return{active:a,chActive:a,flameOn:i,dhwActive:l,fault:c,diagnostic:d,opentherm:e,linkAvailable:t,commandActive:u,commandValid:m,blockReason:w,flowActive:g,heatText:p,flowText:b,returnTempText:k,supplyTempText:E,pressureText:q,targetText:M,modulationText:_,dhwTempText:H,returnTempLabel:e?"Ketelretour":"Retour",supplyTempLabel:e?"Ketelwater":"Aanvoer",transportText:e?"OpenTherm":"Aan/uit R1",statusText:f.text,statusCopy:f.copy,statusCode:f.code,statusTone:f.tone,statusDetail:F||(f.code==="blocked"&&w?w:""),boardClass:L,flowPathClass:g?"is-flowing":"is-static"}}function Vu(e=Cs()){return we({version:"boiler-visual-mode-v1",visualMode:o.hpVisualMode,transport:e.opentherm?"opentherm":"r1",dhwActive:e.dhwActive})}function CC(e,t=Cs()){let r=e.querySelector(".oq-boiler-card");r&&(r.className=["oq-boiler-card",t.active?"is-running":"is-idle",t.flameOn?"has-flame":"",`is-${t.statusCode}`,t.flowActive?"is-flowing":"is-static"].filter(Boolean).join(" "));let n=e.querySelector(".oq-overview-chip");n&&(n.className=`oq-overview-chip oq-overview-chip--${t.statusTone}`,n.textContent!==t.statusText&&(n.textContent=t.statusText));let a=e.querySelector(".oq-boiler-summary-box--support");a&&(a.classList.toggle("is-active",t.active),a.classList.toggle("is-idle",!t.active),a.dataset.status=t.statusCode);let i=e.querySelector(".oq-boiler-summary-box--support strong");i&&i.textContent!==t.statusCopy&&(i.textContent=t.statusCopy);let l=e.querySelector("[data-oq-boiler-heat-value]");l&&l.textContent!==t.heatText&&(l.textContent=t.heatText),e.querySelectorAll("[data-oq-boiler-flow-value]").forEach(p=>{p.textContent!==t.flowText&&(p.textContent=t.flowText)});let c=e.querySelector("[data-oq-boiler-status-value]");c&&c.textContent!==t.statusCopy&&(c.textContent=t.statusCopy);let d=e.querySelector('[data-oq-bind="boiler-return-value"]');d&&d.textContent!==t.returnTempText&&(d.textContent=t.returnTempText);let u=e.querySelector('[data-oq-bind="boiler-return-reading"]');u&&u.setAttribute("aria-label",`${t.returnTempLabel} ${t.returnTempText}`);let m=e.querySelector('[data-oq-bind="boiler-supply-value"]');m&&m.textContent!==t.supplyTempText&&(m.textContent=t.supplyTempText);let v=e.querySelector('[data-oq-bind="boiler-supply-reading"]');v&&v.setAttribute("aria-label",`${t.supplyTempLabel} ${t.supplyTempText}`);let w=e.querySelector(".oq-boiler-mini-svg");w&&w.setAttribute("aria-label",`CV-ketel: ${t.statusCopy}`);let f=e.querySelector("[data-oq-boiler-status-detail]");f&&(f.hidden=!t.statusDetail,f.textContent!==t.statusDetail&&(f.textContent=t.statusDetail));let g={pressure:t.pressureText,target:t.targetText,modulation:t.modulationText,dhw:t.dhwTempText};Object.entries(g).forEach(([p,b])=>{let S=e.querySelector(`[data-oq-boiler-${p}-value]`);S&&S.textContent!==b&&(S.textContent=b)})}function xC(e){return`
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${s(Vu(e))}">
        <div class="oq-overview-hp-head">
          <div>
            <span class="oq-boiler-eyebrow">${s(e.transportText)}</span>
            <h3>CV-ketel / boiler</h3>
          </div>
          <span class="oq-overview-chip oq-overview-chip--${e.statusTone}">${s(e.statusText)}</span>
        </div>
        <div class="oq-overview-hp-stats">
          <article class="oq-overview-stat oq-overview-stat--orange">
            <p>Warmteafgifte</p>
            <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
            <span>afgegeven warmte</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--blue">
            <p>${s(e.returnTempLabel)}</p>
            <strong data-oq-bind="boiler-return-value">${s(e.returnTempText)}</strong>
            <span>retour naar boiler</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--sky">
            <p>${s(e.supplyTempLabel)}</p>
            <strong data-oq-bind="boiler-supply-value">${s(e.supplyTempText)}</strong>
            <span>${e.opentherm?"gemeten door ketel":"naar het systeem"}</span>
          </article>
        </div>
        ${e.opentherm?db(e):""}
        <p class="oq-boiler-status-detail" data-oq-boiler-status-detail${e.statusDetail?"":" hidden"}>${s(e.statusDetail)}</p>
      </section>
    `}function db(e){return`
      <div class="oq-boiler-telemetry" aria-label="OpenTherm ketelwaarden">
        <div class="oq-boiler-telemetry-item">
          <span>Druk</span>
          <strong data-oq-boiler-pressure-value>${s(e.pressureText)}</strong>
        </div>
        <div class="oq-boiler-telemetry-item">
          <span>CV-doel</span>
          <strong data-oq-boiler-target-value>${s(e.targetText)}</strong>
        </div>
        <div class="oq-boiler-telemetry-item">
          <span>Modulatie</span>
          <strong data-oq-boiler-modulation-value>${s(e.modulationText)}</strong>
        </div>
        ${e.dhwActive?`
          <div class="oq-boiler-telemetry-item oq-boiler-telemetry-item--dhw">
            <span>Tapwater</span>
            <strong data-oq-boiler-dhw-value>${s(e.dhwTempText)}</strong>
          </div>
        `:""}
      </div>
    `}function Fu(){if(!Bu())return"";let e=Cs();return o.hpVisualMode!=="schematic"?xC(e):`
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${s(Vu(e))}">
        <div class="${s([e.boardClass,e.flowPathClass].filter(Boolean).join(" "))}">
          <div class="oq-boiler-card-main">
            <div class="oq-boiler-card-head">
              <div>
                <span class="oq-boiler-eyebrow">Ondersteuning \xB7 ${s(e.transportText)}</span>
                <h3>CV-ketel / boiler</h3>
              </div>
              <span class="oq-overview-chip oq-overview-chip--${e.statusTone}">${s(e.statusText)}</span>
            </div>
            <p class="oq-boiler-copy">${e.opentherm?"Live ketelstatus en ondersteuning naast de warmtepomp.":"De ketel geeft ondersteuning wanneer de warmtepomp extra hulp nodig heeft."}</p>
            <div class="oq-boiler-mini-schematic">
              <svg class="oq-boiler-mini-svg" viewBox="0 0 420 132" role="img" aria-label="CV-ketel: ${s(e.statusCopy)}">
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
                ${Lu("boiler-return","return","M24 88 H166 C180 88 190 80 196 68",!0,"water")}
                ${Lu("boiler-supply","supply","M224 52 C232 40 244 36 258 36 H396",!0,"water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)" aria-hidden="true">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${Iu({bind:"boiler-return",x:22,y:70,width:78,value:e.returnTempText,label:e.returnTempLabel,ariaLabel:`${e.returnTempLabel} ${e.returnTempText}`,align:"start"})}
                ${_a({bind:"boiler-return",modifier:"return",icon:"temperature",x:82,y:70,width:124,kicker:"Temperatuur",detail:e.returnTempLabel,direction:"left"})}
                ${Iu({bind:"boiler-supply",x:320,y:16,width:76,value:e.supplyTempText,label:e.supplyTempLabel,ariaLabel:`${e.supplyTempLabel} ${e.supplyTempText}`,align:"end"})}
                ${_a({bind:"boiler-supply",modifier:"supply",icon:"temperature",x:294,y:14,width:124,kicker:"Temperatuur",detail:e.supplyTempLabel,direction:"right"})}
              </svg>
              <div class="oq-boiler-summary-grid">
                <div class="oq-boiler-summary-box oq-boiler-summary-box--power">
                  <span>Geleverd vermogen</span>
                  <strong data-oq-boiler-heat-value>${s(e.heatText)}</strong>
                </div>
                <div class="oq-boiler-summary-box oq-boiler-summary-box--support ${e.active?"is-active":"is-idle"}" data-status="${s(e.statusCode)}">
                  <span>Ondersteuning</span>
                  <strong data-oq-boiler-status-value>${s(e.statusCopy)}</strong>
                </div>
              </div>
              ${e.opentherm?db(e):""}
              <p class="oq-boiler-status-detail" data-oq-boiler-status-detail${e.statusDetail?"":" hidden"}>${s(e.statusDetail)}</p>
            </div>
          </div>
        </div>
      </section>
    `}function Ha(){let e=typeof ne=="function"?ne():"";return Ya.filter(t=>e==="single"&&t.title==="HP2"?!1:y(t.keys.power))}function Ku(e){return!Array.isArray(e)||e.length<2||o.hpVisualMode!=="schematic"?"equal":o.hpLayoutMode==="focus-hp1"||o.hpLayoutMode==="focus-hp2"?o.hpLayoutMode:"equal"}function Es(e,t,r){return!Array.isArray(t)||t.length<2?"normal":r==="focus-hp1"?e===0?"focus":"muted":r==="focus-hp2"?e===1?"focus":"muted":"normal"}function ju(e,t,r){return!Array.isArray(t)||t.length<2||o.hpVisualMode!=="schematic"?null:Es(e,t,r)==="focus"?{layout:"equal",label:"Toon beide"}:{layout:e===0?"focus-hp1":"focus-hp2",label:"Vergroot"}}function pb(e){return!Array.isArray(e)||e.length!==1?Ku(e):Bu()?"equal":"single"}function MC(e="plus"){return`
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${e==="minus"?"M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z":"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z"}" fill="currentColor"></path>
      </svg>
    `}function mb(e){return!Array.isArray(e)||e.length===0?"":`
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${cb(e)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="schematic"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${o.hpVisualMode==="compact"?" is-active":""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `}function $C(e,t){if(!e)return!1;let r=e.querySelector(".oq-overview-hp-tools-copy"),n=e.querySelector('[data-hp-visual="schematic"]'),a=e.querySelector('[data-hp-visual="compact"]');return!r||!n||!a?(Vt(e,mb(t)),!0):(Vt(r,`
      <h3>Warmtepompen</h3>
      ${cb(t)}
    `),n.classList.toggle("is-active",o.hpVisualMode==="schematic"),a.classList.toggle("is-active",o.hpVisualMode==="compact"),!0)}function gb(){let e=Eu(),t=Ha(),r=Ku(t),n=pb(t),a=mb(t);return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${Su()}
          ${tb(e)}
          <div class="oq-overview-main">
            ${Tu(ys())}
            ${_u()}
          </div>
          ${a?`<div class="oq-overview-hp-tools">${a}</div>`:""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${s(n)}">
            ${t.map((i,l)=>ub(i.title,i.keys,i.accent,Es(l,t,r),ju(l,t,r))).join("")}
            ${Fu()}
          </div>
        </div>
      </section>
    `}function AC(e,t,r){if(!e)return;let n=e.querySelector(t);n&&n.textContent!==r&&(n.textContent=r)}function Tn(e,t,r){e&&e.getAttribute(t)!==r&&e.setAttribute(t,r)}function _C(e,t){t.forEach(([r,n])=>{AC(e,`[data-oq-bind="${r}"]`,n)})}function RC(e,t){t.forEach(([r,n])=>{Tn(e.querySelector(`[data-oq-bind="${r}"]`),"aria-label",n)})}function HC(e,t,r,n=""){let a=e.querySelector(`[data-oq-bind="${t}"]`);a&&(a.classList.toggle("is-active",r),Tn(a,"tabindex",r?"0":"-1"),!r&&n&&xs(e.querySelector(`[data-oq-bind="${n}"]`)))}function DC(e,t,r){Tn(e.querySelector(`[data-oq-bind="${t}"]`),"fill",r)}function Ra(e,t,r,n){if(!e)return;let a=`${t}${r}`;n.map(l=>`${t}${l}`).find(l=>e.classList.contains(l))!==a&&(n.forEach(l=>e.classList.remove(`${t}${l}`)),e.classList.add(a))}function NC(e,t,r,n){let a=e.querySelector(`[data-oq-pipe="${t}"]`);a&&(Ra(a,"oq-hp-tech-pipe--",r,["supply","return","hotgas","liquid","expansion","suction"]),a.querySelectorAll("path").forEach(i=>{i.getAttribute("d")!==n&&i.setAttribute("d",n)}))}function xs(e){e&&(e.classList.remove("is-active"),e.setAttribute("aria-hidden","true"))}function sb(e,t,r){!e||!t||!r||(e.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach(n=>{n!==r&&xs(n)}),t.appendChild(r),r.classList.add("is-active"),r.setAttribute("aria-hidden","false"))}function OC(e,t,r,n){if(!e||!t||!r||!n||r.dataset.oqTooltipWired==="true")return;r.dataset.oqTooltipWired="true";let a=()=>{r.matches(":hover")||document.activeElement===r||xs(n)};r.addEventListener("mouseenter",()=>sb(e,t,n)),r.addEventListener("mouseleave",a),r.addEventListener("focus",()=>sb(e,t,n)),r.addEventListener("blur",a)}function fb(e){if(!e)return;let t=e.querySelector(".oq-hp-tech-svg");if(!t)return;let r=t.querySelector(".oq-hp-tech-tooltip-layer");r||(r=document.createElementNS("http://www.w3.org/2000/svg","g"),r.setAttribute("class","oq-hp-tech-tooltip-layer"),t.appendChild(r)),Array.from(t.querySelectorAll(".oq-hp-tech-tooltip")).forEach(n=>{r.appendChild(n)}),e.querySelectorAll("[data-oq-tooltip-target]").forEach(n=>{let a=n.getAttribute("data-oq-tooltip-target");if(!a)return;let i=e.querySelector(`[data-oq-bind="${a}-tooltip"]`);OC(e,r,n,i)})}function hb(e=o.root){e&&e.querySelectorAll("[data-oq-hp-board]").forEach(t=>{fb(t)})}function PC(e,t,r,n,a=null,i=null){if(!e)return;let l=i||Wu(t,r,n),{mode:c,running:d}=l,u=l.schematic,m=e.querySelector(".oq-overview-hp-head-title");m&&Vt(m,lb(t,a));let v=e.querySelector(".oq-overview-hp-head-side");if(v){let b=v.querySelector(".oq-overview-hp-status");b||(Vt(v,Pu(c,d,u.warningActive,u.failureText)),b=v.querySelector(".oq-overview-hp-status")),Gh(b,c,d,u.warningActive,u.failureText)}let w=e.querySelector("[data-oq-hp-board]");if(!w)return;w.className!==u.boardClass&&(w.className=u.boardClass),_C(w,[["status",u.statusText],["left-exchanger-title",u.leftExchangerTitle],["right-exchanger-title",u.rightExchangerTitle],["compressor-freq",u.compressorFreqText],["flow-value",u.flowText],["inner-coil-temp-value",u.innerCoilTempText],["evaporator-temp-value",u.evaporatorCoilTempText],["outside-temp-value",u.outsideTempText],["discharge-pressure-value",u.dischargePressureText],["discharge-temp-value",u.dischargeTempText],["suction-pressure-value",u.suctionPressureText],["suction-temp-value",u.suctionTempText],["supply-value",u.waterOutText],["return-value",u.waterInText],["footer-mode",u.mode],["footer-power",u.powerText],["footer-heat",u.heatText],["footer-efficiency-label",u.efficiencyLabel],["footer-efficiency",u.efficiencyText],["fan-speed-value",u.fanRpmText],["fourway-detail",u.fourWayPositionText],["eev-detail",u.eevPositionText]]);let f=w.querySelector('[data-oq-bind="footer-heat-label"]');if(f){Tn(f,"aria-label",u.heatLabel);let b=u.heatLabel==="Koelafgifte"?"Koel<br>afgifte":"Warmte<br>afgifte";f.innerHTML!==b&&(f.innerHTML=b)}[["bottom-heater",u.bottomPlateActive],["crankcase-heater",u.crankcaseActive]].forEach(([b,S])=>{HC(w,b,S,`${b}-tooltip`)});let g=w.querySelector('[data-oq-bind="defrost-badge"]');g&&(Tn(g,"tabindex",u.defrostActive?"0":"-1"),Tn(g,"aria-label",u.defrostActive?"Defrost actief":"Defrost uit"),u.defrostActive||xs(w.querySelector('[data-oq-bind="defrost-badge-tooltip"]'))),[["supply-tooltip",u.supplyLineTone],["return-tooltip",u.returnLineTone]].forEach(([b,S])=>{Ra(w.querySelector(`[data-oq-bind="${b}"]`),"oq-hp-tech-tooltip--",S,["warm","supply","return"])}),RC(w,[["supply-reading",`Aanvoer temperatuur ${u.waterOutText}`],["flow-reading",`Flow ${u.flowText}`],["inner-coil-temp-reading",`Inner coil temperatuur ${u.innerCoilTempText}`],["evaporator-temp-reading",`Verdampertemperatuur ${u.evaporatorCoilTempText}`],["outside-temp-reading",`Buitentemperatuur ${u.outsideTempText}`],["compressor-freq-trigger",`Compressorfrequentie ${u.compressorFreqText}`],["fan-speed-reading",`Ventilatorsnelheid ${u.fanRpmText}`],["discharge-pressure-reading",`Persdruk ${u.dischargePressureText}`],["discharge-temp-reading",`Perstemperatuur ${u.dischargeTempText}`],["return-reading",`Retour temperatuur ${u.waterInText}`],["suction-pressure-reading",`Zuigdruk ${u.suctionPressureText}`],["suction-temp-reading",`Zuigtemperatuur ${u.suctionTempText}`],["fourway-trigger",`4-wegklep, ${u.fourWayPositionText}`],["eev-trigger",`Expansieventiel, ${u.eevPositionText}`]]),Ra(w.querySelector(".oq-hp-tech-pump"),"oq-hp-tech-pump--",u.returnLineTone,["supply","return"]);let p=String(u.title||"hp").toLowerCase().replace(/[^a-z0-9]+/g,"-");DC(w,"cond-water",`url(#${u.reverseCycle?`${p}-cond-water-cool`:`${p}-cond-water-heat`})`),Object.entries(u.pipes).forEach(([b,S])=>{NC(w,b.replace(/[A-Z]/g,k=>`-${k.toLowerCase()}`),S.tone,S.d)}),fb(w),rr()}function LC(){if(!o.root||o.appView!=="overview")return!1;let e=o.root.querySelector(".oq-overview-board");if(!e)return!1;let t=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==t&&(e.className=t);let r=Eu(),n=e.querySelector("[data-oq-monitoring-notice]"),a=e.querySelector(".oq-overview-summary-shell"),i=e.querySelector(".oq-overview-system"),l=e.querySelector(".oq-overview-temps"),c=e.querySelector(".oq-overview-trends"),d=e.querySelector(".oq-overview-hp-tools"),u=e.querySelector(".oq-overview-hp-grid"),m=e.querySelector("[data-oq-boiler-panel]"),v=Ha();if(n){let k=Dt();rt(n,we(k),Su())}if(a){let k=a.querySelector(".oq-overview-top");k&&Vt(k,$a(Mu()));let E=a.querySelector(".oq-overview-statuspanel");if(E){let M=j("controlModeLabel");rt(E,we(Cu(r,M)),xu(r,M))}let q=a.querySelector(".oq-overview-summary-side");if(q){let M=pi();q.dataset.renderSignature!==M&&(Vt(q,$u()),q.dataset.renderSignature=M)}}if(i&&rt(i,we(ys()),Tu(ys())),l){let k=Ss();rt(l,Au(k),_u())}if(c&&o.appView==="overview"&&(rt(c,ks(),qs()),Du(e)),Aa(e),!d||!u)return!1;let w=Ku(v),f=pb(v);if($C(d,v),Ra(u,"oq-overview-hp-grid--",f,["single","equal","focus-hp1","focus-hp2"]),o.hpVisualMode!=="schematic"){let k=[...v.map((q,M)=>ub(q.title,q.keys,q.accent,Es(M,v,w),ju(M,v,w))),Fu()].join(""),E=we({visualMode:o.hpVisualMode,layout:f,markup:k});return u.dataset.renderSignature!==E&&(Vt(u,k),u.dataset.renderSignature=E),!0}let g=Bu()?Cs():null,p=g?Fu():"",b=g?Vu(g):"";return!!m!=!!p||(m&&m.dataset.renderSignature!==b?m.outerHTML=p:m&&g&&CC(m,g),u.querySelectorAll("[data-oq-hp-panel]").length!==v.length)?!1:(v.forEach((k,E)=>{let q=e.querySelector(`[data-oq-hp-panel="${k.title}"]`);if(q){let M=Wu(k.title,k.keys,k.accent);Ra(q,"oq-overview-hp--",Es(E,v,w),["normal","focus","muted"]),PC(q,k.title,k.keys,k.accent,ju(E,v,w),M)}}),!0)}xo({patchOverviewDom:LC});function bb(e){let t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}function IC(e,t="\u2014"){if(!y(e))return t;let r=R(e);return Number.isFinite(r)?String(Math.round(r)):t}function Wo(e,t=1,r="",n="\u2014"){if(!y(e))return n;let a=R(e);return Number.isFinite(a)?`${a.toFixed(t)}${r?` ${r}`:""}`:n}function vb(e,t="\u2014"){if(!y(e))return t;let r=R(e);return Number.isFinite(r)?`${Math.round(r)} u`:t}function Uu(e){if(!e||!e.keys)return!1;let t=Ts(j(e.keys.mode,"Unknown")),r=R(e.keys.freq);return t==="Verwarmen"||t==="Koelen"||C(e.keys.defrost)||t==="Onbekend"&&Number.isFinite(r)&&r>0}var FC=Object.freeze({0:"inactive",1:"full",2:"projected_floor",3:"simmer",4:"falling_gap",5:"buffer_stop",6:"dew_stop",7:"fallback_floor",8:"restart_wait",9:"room_cap",10:"fallback_cap1",11:"level1_hold",12:"oil_return_hold",13:"oil_return_recovery",14:"capacity_cap"});function Rs(e){let t=String(e||"").trim().toLowerCase();if(!t)return"";let r=Number(t);return Number.isInteger(r)?FC[r]||"unknown":t}function jC(e){return["","full","inactive","none","unknown","unavailable"].includes(Rs(e))}function Ju(e){return["dew_stop","falling_gap","projected_floor","restart_wait","sensor_fallback","oil_return_recovery","level1_hold"].includes(Rs(e))}function WC(e){let t=C("coolingRequestActive"),r=j("coolingLimiterReasonCode",""),n=Rs(r),a=t&&n&&!jC(n),i=t&&y("coolingPermitted")&&!C("coolingPermitted"),l=i||a&&Ju(n),c=a&&!l,d=zt()||t,u=e.filter(Uu).length,m=e.some(f=>f.title==="HP2"),v=e.some(f=>C(f.keys.defrost)),w=y("boilerActive")&&C("boilerActive");return{title:"Control mode",copy:"De tab toont dezelfde eventlogica voor elke control mode.",hpRunningCount:u,hp2Available:m,defrostActive:v,boilerActive:w,coolingMode:d,coolingRequest:t,coolingBlocked:i,coolingLimited:l||c,coolingProtection:l,coolingCapped:c,coolingLimiterReason:n||"inactive"}}function Cb(e){let t=String(e||"").trim().toLowerCase();return t.includes("cm100")?"cm100":t.includes("cm98")?"cm98":t.includes("cm5")?"cm5":t.includes("cm4")?"cm4":t.includes("cm3")?"cm3":t.includes("cm2")?"cm2":t.includes("cm1")?"cm1":t.includes("cm0")?"cm0":""}function BC(){let e=Math.round(R("strategyActiveCode"));return e===1?"Koeling":e===2?"Stooklijn":e===3?"Power House":j("strategy","\u2014")}function wb(e,t="\u2014"){let r=IC(e,t);return r==="\u2014"?t:r}var VC=Object.freeze([["status","Actueel","shield"],["timeline","Tijdlijn","activity"],["graphs","Grafieken","bar-chart"]].map(([e,t,r])=>Object.freeze({id:e,label:t,icon:r}))),KC=Object.freeze([["last1","Laatste 1 uur","1 uur","Laatste 1 uur","Recente beslismomenten in het afgelopen uur.","De gekozen tijd verbindt grafiek en uitleg over het laatste uur.",{durationMinutes:60}],["last2","Laatste 2 uur","2 uur","Laatste 2 uur","Recente beslismomenten in de afgelopen twee uur.","De gekozen tijd verbindt grafiek en uitleg over de laatste twee uur.",{durationMinutes:120}],["last4","Laatste 4 uur","4 uur","Laatste 4 uur","Recente momenten en periodes voor een gerichte diagnose.","De gekozen tijd verbindt grafiek en uitleg over de laatste vier uur.",{durationMinutes:240,quick:!0}],["last8","Laatste 8 uur","8 uur","Laatste 8 uur","Een compacte terugblik op de laatste acht uur.","De gekozen tijd verbindt grafiek en uitleg over de laatste acht uur.",{durationMinutes:480}],["last12","Laatste 12 uur","12 uur","Laatste 12 uur","Een dagdeel met alle belangrijke beslismomenten.","De gekozen tijd verbindt grafiek en uitleg over de laatste twaalf uur.",{durationMinutes:720}],["last24","Afgelopen 24 uur","24 uur","Afgelopen 24 uur","Gebeurtenissen die verklaren hoe het systeem in de huidige situatie kwam.","De gekozen tijd verbindt grafiek en uitleg over de laatste 24 uur.",{durationMinutes:1440,quick:!0}],["last48","Afgelopen 48 uur","48 uur","Afgelopen 48 uur","Twee dagen met belangrijke momenten en perioden.","De gekozen tijd verbindt grafiek en uitleg over de laatste 48 uur.",{durationMinutes:2880}],["last3d","Afgelopen 3 dagen","3 dagen","Afgelopen 3 dagen","Een terugblik op patronen over drie dagen.","De gekozen tijd verbindt grafiek en uitleg over de laatste drie dagen.",{durationMinutes:4320}],["today","Vandaag","Vandaag","Vandaag","Belangrijke momenten en periodes sinds middernacht.","De gekozen tijd verbindt grafiek en uitleg voor vandaag.",{calendarDay:"today",quick:!0}],["yesterday","Gisteren","Gisteren","Gisteren","Terugkijken naar een volledige kalenderdag.","De gekozen tijd verbindt grafiek en uitleg voor gisteren.",{calendarDay:"yesterday",quick:!0}],["week","7 dagen","7 dagen","Afgelopen 7 dagen","Patronen zoals defrosts, starts/stops en bescherming over meerdere dagen.","De gekozen tijd verbindt grafiek en uitleg binnen de weekselectie.",{durationMinutes:10080,quick:!0}],["custom","Eigen periode","Eigen periode","Eigen periode","Een zelfgekozen begin- en eindmoment.","De gekozen tijd verbindt grafiek en uitleg over de gekozen periode.",{custom:!0}]].map(([e,t,r,n,a,i,l])=>Object.freeze({id:e,label:t,shortLabel:r,eyebrow:n,title:"Tijdlijn",copy:a,graphCopy:i,...l})));function xb(){return VC}function Bo(){return KC}function zC(){return Bo().filter(e=>e.quick)}function As(e){let t=new Date(String(e||"")).getTime();return Number.isFinite(t)?t:Number.NaN}function Mb(){let e=As(o.controlReplayCustomStart),t=As(o.controlReplayCustomEnd);return!Number.isFinite(e)||!Number.isFinite(t)||t<=e?null:{start:e,end:t}}function Gu(e){let t=new Date(e);t.setMinutes(0,0,0);let r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`}function Da(e){return Gu(e).slice(0,10)}function yb(e){let r=String(e||"").match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):00$/);return{date:r?.[1]||"",hour:r?.[2]||"00"}}function Sb(e){return Array.from({length:24},(t,r)=>{let n=String(r).padStart(2,"0");return`<option value="${n}"${n===e?" selected":""}>${n} uur</option>`}).join("")}function UC(){let e=Date.now();return{start:o.controlReplayCustomStart||Gu(e-1440*60*1e3),end:o.controlReplayCustomEnd||Gu(e)}}function GC(e,t=Date.now()){let n=new Date(t).setMinutes(0,0,0),a=Math.ceil((t-6048e5)/(3600*1e3))*60*60*1e3,i=As(e.start),l=Number.isFinite(i)?Math.max(a,Math.min(n,i)):n-1440*60*1e3,c=As(e.end),d=Number.isFinite(c)?Math.max(l,Math.min(n,c)):n;return{earliestDate:Da(a),latestDate:Da(n),startMaxDate:Da(Math.min(n,d)),endMinDate:Da(l),endMaxDate:Da(Math.min(n,l+6048e5))}}function Dr(e=ft(),t=Date.now()){let r=Bo().find(a=>a.id===e)||Bo().find(a=>a.id==="last24");if(r?.calendarDay){let a=new Date(t);return a.setHours(0,0,0,0),r.calendarDay==="yesterday"&&a.setDate(a.getDate()-1),{start:a.getTime(),end:a.getTime()+1440*60*1e3}}if(r?.custom)return Mb()||{start:t-1440*60*1e3,end:t};let n=Number(r?.durationMinutes)||1440;return{start:t-n*60*1e3,end:t}}function Zu(e=ft(),t=Date.now()){let r=Dr(e,t);return Math.max(1,(r.end-r.start)/(60*1e3))}function QC(e,t=!1){let r=new Date(e),n=r.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});return t?`${r.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${n}`:n}function YC(e=ft(),t=Date.now()){if(e==="today"||e==="yesterday")return["00:00","06:00","12:00","18:00","24:00"];let r=Dr(e,t),a=Zu(e,t)>1440||e==="custom";return[0,.25,.5,.75,1].map((i,l)=>l===4&&e!=="custom"?"Nu":QC(r.start+(r.end-r.start)*i,a))}function Xu(){return xb().some(e=>e.id===o.controlReplayTab)?o.controlReplayTab:"status"}function ft(){let e=Bo().find(t=>t.id===o.controlReplayWindow);return e?.custom&&!Mb()?"last24":e?o.controlReplayWindow:"last24"}function La(){let e=ft();return{...Bo().find(r=>r.id===e)||Bo().find(r=>r.id==="last24"),axis:YC(e)}}var kb=Object.freeze({normal:{label:"Normaal",tone:"normal"},limited:{label:"Bescherming actief",tone:"limited"},attention:{label:"Aandacht",tone:"attention"},fault:{label:"Storing",tone:"fault"}});function ed(e="normal"){return kb[e]||kb.normal}var JC=Object.freeze({keep_current:{label:"Huidige keuze blijft logisch",summary:"De huidige stand past bij de vraag in huis. Wisselen zou nu weinig voordeel geven.",checks:["Vraag blijft binnen de band","Geen betere keuze nodig","Rustig door laten lopen"]},hold_active:{label:"Wissel bewust uitgesteld",summary:"Het systeem wacht bewust even, zodat warmtepompen niet onnodig vaak starten en stoppen.",checks:["Vraag is nog niet duidelijk anders","Minimale looptijd telt mee","Actieve bron werkt nog goed"]},defrost_hold:{label:"Ontdooien rustig laten verlopen",summary:"Een warmtepomp ontdooit kort. Dat is normaal wintergedrag en herstelt vanzelf.",checks:["Ontdooien actief of net klaar","Warmte kan kort lager zijn","Herstart gebeurt automatisch"]},better_heat:{label:"Twee pompen passen beter",summary:"De warmtevraag blijft hoog. Twee warmtepompen kunnen die vraag rustiger leveren dan \xE9\xE9n pomp op hoge belasting.",checks:["Warmtevraag blijft hoog","Beide warmtepompen beschikbaar","Samen leveren ze rustiger vermogen"]},soft_guard:{label:"Veilige marge bewaakt",summary:"Het systeem begrenst zichzelf om veilig binnen de temperatuur- en flowgrenzen te blijven.",checks:["Veiligheidsmarge bewaakt","Geen storing","Begrenzing verdwijnt vanzelf"]},less_power:{label:"Minder vermogen nodig",summary:"De vraag neemt af. E\xE9n warmtepomp kan de resterende vraag weer rustig dragen.",checks:["Vraag neemt af","E\xE9n warmtepomp is genoeg","Minder elektrisch vermogen nodig"]},cooling_request_cleared:{label:"Geen koelvraag meer",summary:"De koelvraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",checks:["Koelvraag weg","Warmtepomp stopt","Naloop kan normaal zijn"]},heating_request_cleared:{label:"Geen warmtevraag meer",summary:"De warmtevraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",checks:["Warmtevraag weg","Warmtepomp stopt","Naloop kan normaal zijn"]},no_candidate:{label:"Nog geen veilige start",summary:"Er is vraag, maar een start is nu nog niet verstandig door wachttijd of bescherming.",checks:["Beschikbaarheid gecontroleerd","Bescherming of wachttijd actief","Straks opnieuw beoordelen"]},candidate_in_rest:{label:"Rusttijd loopt nog",summary:"De warmtepomp is kort geleden gestopt en wacht nog even om korte cycli te voorkomen.",checks:["Vorige stop is recent","Start wordt uitgesteld","Bij blijvende vraag opnieuw beoordelen"]},candidate_in_defrost:{label:"Warmtepomp ontdooit",summary:"Deze warmtepomp kan nu niet starten of wisselen omdat ontdooien eerst rustig moet afronden.",checks:["Ontdooien actief","Niet onnodig wisselen","Automatisch opnieuw beoordelen"]},candidate_unavailable:{label:"Warmtepomp niet beschikbaar",summary:"De warmtepomp is nu geen geschikte kandidaat door beschikbaarheid of technische begrenzing.",checks:["Kandidaat gecontroleerd","Voorwaarde niet vrij","Andere keuze blijft mogelijk"]},defrost_boost:{label:"Ontdooien opgevangen",summary:"Een andere bron kan tijdelijk helpen terwijl een warmtepomp ontdooit.",checks:["Ontdooien verlaagt kort vermogen","Andere bron beschikbaar","Comfort blijft beschermd"]},boiler_assist:{label:"CV ondersteunt tijdelijk",summary:"De CV-ketel helpt alleen wanneer de warmtevraag tijdelijk meer vermogen vraagt dan de warmtepompen rustig kunnen leveren.",checks:["Warmtevraag blijft hoog","Warmtepompen leveren maximaal rustig vermogen","CV stopt zodra ondersteuning niet meer nodig is"]},runtime_lead:{label:"Draaiurenbalans",summary:"De warmtepompen zijn gelijkwaardig. Het systeem kiest de pomp die het beste past bij draaiuren, beschikbaarheid en wachttijd.",checks:["Draaiuren vergeleken","Warmtepomp beschikbaar","Wachttijd vrij"]},oil_return_hold:{label:"Compressor beschermen",summary:"De warmtepomp blijft kort doorlopen om de compressor netjes te beschermen.",checks:["Minimale looptijd actief","Stop wordt uitgesteld","Korte cyclus voorkomen"]},single_topology:{label:"E\xE9n warmtepomp aanwezig",summary:"Er is maar \xE9\xE9n warmtepomp beschikbaar. Keuzes met twee warmtepompen zijn dan niet van toepassing.",checks:["Opstelling gecontroleerd","Geen tweede warmtepomp","Keuze blijft beperkt"]},demand_decreased:{label:"Warmtevraag nam af",summary:"De vraag zakte terug. Minder vermogen is genoeg om de woning op temperatuur te houden.",checks:["Vraag is lager","Stopvertraging verlopen","Andere warmtepomp blijft actief"]},min_rest_active:{label:"Minimum rusttijd actief",summary:"De warmtepomp wacht nog even om korte starts en onnodige belasting te voorkomen.",checks:["Vorige stop is recent","Rusttijd loopt","Start volgt als vraag blijft"]},start_stop_rate_high:{label:"Veel starts/stops",summary:"De warmtepomp start vaker dan wenselijk. Dat is niet direct een storing, maar wel nuttig om te bekijken.",checks:["Startteller hoog","Geen acute storing","Nuttig voor support"]},sticky_protection:{label:"Pompbescherming",summary:"De pomp draait kort zodat hij na lange stilstand niet vast gaat zitten. Dit is geen verwarmings- of koelvraag.",checks:["Geen comfortvraag","Dagelijkse bescherming actief","Alleen korte pomprun"]},frost_protection:{label:"Vorstbescherming",summary:"Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",checks:["Geen comfortvraag nodig","Vorstrisico bewaakt","Water blijft circuleren"]},flow_preflow:{label:"Voorloop actief",summary:"De pomp bouwt eerst waterflow op voordat de warmtepomp mag starten.",checks:["Waterflow opbouwen","Warmtepomp nog niet vrij","Start volgt automatisch"]},flow_postflow:{label:"Naloop actief",summary:"De pomp blijft kort nadraaien zodat warmte netjes uit het systeem wordt afgevoerd.",checks:["Warmtepomp stopt","Pomp draait kort door","Daarna standby"]},flow_too_low:{label:"Waterflow blijft te laag",summary:"De normale voorlooptijd is verstreken, maar de waterflow is nog niet voldoende voor een veilige start.",checks:["Voorlooptijd verstreken","Start blijft geblokkeerd","Flow wordt opnieuw beoordeeld"]},startup_inhibit:{label:"Wachttijd na herstart",summary:"Na een herstart blijft de compressor kort uit om een te snelle herstart te voorkomen.",checks:["Comfortvraag is aanwezig","Compressor wacht nog","Start volgt automatisch"]},capacity_cap:{label:"Ingesteld koelmaximum",summary:"Er is koelvraag. Het systeem blijft binnen het maximale koelniveau dat in de software is ingesteld.",checks:["Koelvraag actief","Softwaremaximum actief","Dauwpunt blijft bewaakt"]},falling_gap:{label:"Dauwpuntmarge daalt",summary:"De marge tot het dauwpunt wordt kleiner. Het systeem grijpt vroeg in om condens te voorkomen.",checks:["Marge daalt","Aanvoer blijft veilig","Koeling blijft voorzichtig actief"]},projected_floor:{label:"Aanvoer nadert veilige ondergrens",summary:"De aanvoer dreigt te koud te worden. Het systeem verlaagt de koeling preventief.",checks:["Aanvoer voorspeld","Veilige grens leidend","Geen storing"]},simmer:{label:"Koeling rustig bijgesteld",summary:"De koeling blijft op een laag niveau zodat de temperatuur rustig richting setpoint kan bewegen.",checks:["Lage koelvraag","Geen abrupte stop","Rustige regeling"]},buffer_stop:{label:"Water al koud genoeg",summary:"Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.",checks:["Koelvraag blijft actief","Water is al koud genoeg","Start volgt automatisch"]},dew_stop:{label:"Dauwpuntstop",summary:"De warmtepomp stopt kort omdat verder koelen te dicht bij het dauwpunt zou komen.",checks:["Condensrisico voorkomen","Koelvraag blijft bestaan","Herstart na veilige marge"]},cooling_limiter:{label:"Softwaremaximum actief",summary:"Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum en blijft de veiligheidsmarges bewaken.",checks:["Koelvraag actief","Softwaremaximum actief","Marge blijft bewaakt"]},sensor_fallback:{label:"Sensorwaarde onzeker",summary:"Een meting is tijdelijk minder zeker. Het systeem kiest daarom voorzichtig gedrag.",checks:["Metingen gecontroleerd","Veilige keuze voorrang","Herstel zodra data stabiel is"]},restart_wait:{label:"Koeling wacht op veilige herstart",summary:"De koelvraag is nog aanwezig. Na de koelstop wacht het systeem tot de veilige marge voldoende is hersteld.",checks:["Herstart wacht bewust","Marge moet stabiel blijven","Daarna opnieuw beoordelen"]},level1_hold:{label:"Voorzichtig blijven koelen",summary:"De koeling blijft nog even laag totdat duidelijk is dat de veilige marge terug is.",checks:["Even wachten met opschalen","Geen snelle sprong omhoog","Comfortvraag blijft bewaakt"]},room_cap:{label:"Kamervraag begrenst",summary:"De kamer vraagt koeling, maar niet genoeg om harder te gaan koelen.",checks:["Kamer koelt richting setpoint","Vraag blijft beperkt","Rustige regeling"]},oil_return_recovery:{label:"Compressorherstel",summary:"Het systeem geeft compressorherstel tijdelijk voorrang en blijft de veiligheid bewaken.",checks:["Compressorprotectie actief","Gecontroleerd herstel","Veiligheid blijft bewaakt"]}}),ZC=Object.freeze({label:"Keuze van het systeem",summary:"Keuze van het systeem",checks:[]});function Rr(e){return JC[e]||fu(e)||ZC}function $b(e){return Rr(e).label}function qb(e,t=!1){let r=Number(e);return Number.isFinite(r)&&(r>0||t&&r===0)?`CM${r}`:""}function Na(e,t){let r=qb(e),n=qb(t,!0);return r&&n&&r!==n?`${r} \u2192 ${n}`:""}function XC(e,t){let r=String(e?.event_type||""),n=Number(e?.cm)||0,a=Number(e?.value_a);if(r==="boiler_assist_start")return Na(t||2,n===3?3:n);if(r==="boiler_assist_stop")return Na(t===3?3:t,n>0?n:2);if(r==="flow_hold_start"&&n===1)return Na(t,1);if(r==="flow_hold_clear"&&n===1&&Number.isFinite(a))return Na(1,a);let i=hu(e,t);return i?Na(i.from,i.to):""}function e1(e){let t=String(e?.event_type||""),r=Number(e?.cm)||0,n=Number(e?.value_a);if(t==="flow_hold_clear"&&r===1&&Number.isFinite(n))return n;if(t==="frost_protection_clear")return 0;let a=Bh(e);return a!==null?a:r}function Ab(e){let t=String(e?.modeTransitionLabel||"").trim();if(t)return t;let r=String(e?.modeLabel||"").trim();return r.includes("\u2192")?r:""}function Qu(){let e=Rs(j("coolingLimiterReasonCode",""));return{requestActive:C("coolingRequestActive"),permitted:y("coolingPermitted")?C("coolingPermitted"):!0,reasonCode:e||"inactive",rawDemand:Wo("coolingDemandRaw",0,"","\u2014"),limitedDemand:Wo("coolingLimitedDemand",0,"","\u2014"),allowedMax:Wo("coolingLimiterAllowedMax",0,"","\u2014"),dewPoint:Wo("coolingDewPointSelected",1,"\xB0C","\u2014"),safeSupply:Wo("coolingEffectiveMinSupplyTemp",1,"\xB0C","\u2014"),guardMode:j("coolingGuardMode","Dauwpuntbewaking"),blockReason:j("coolingBlockReason","Ready")}}function _b(e){return{event:"Moment",span:"Periode",aggregate:"Samenvatting"}[e]||"Record"}function Hr(e,t="neutral",r=""){let n=r?ge(r,"oq-working-pill-icon"):"";return`<span class="oq-working-pill oq-working-pill--${s(t)}">${n}<span>${s(e)}</span></span>`}function t1(e){let t=e?.reasonCode||e?.primaryReason;return Cb(e?.modeLabel)==="cm98"&&t==="frost_protection"}function td(e){return t1(e)?'<span class="oq-working-mode-badge" aria-label="Technische mode CM98">CM98</span>':""}function Rb(e){let t=e?.reasonCode||e?.primaryReason||"keep_current",r=e?.source||"HP1 + HP2";if(t==="better_heat")return{title:"Keuze van het systeem",verdict:"Twee warmtepompen actief",summary:"Omdat de warmtevraag hoog blijft, leveren twee warmtepompen rustiger vermogen dan \xE9\xE9n warmtepomp op hoge belasting.",rows:[{option:"E\xE9n warmtepomp",result:"Te weinig reserve",code:"better_heat",detail:"De vraag bleef langer hoog dan \xE9\xE9n warmtepomp rustig kan dragen.",tone:"muted"},{option:"Andere losse pomp",result:"Geen voordeel",code:"hold_active",detail:"Wisselen naar de andere pomp zou geen rustiger gedrag geven.",tone:"muted"},{option:"Twee warmtepompen",result:"Gekozen",code:"better_heat",detail:"Samen leveren ze meer reserve en minder belasting per pomp.",tone:"selected"}]};if(t==="demand_decreased"||t==="less_power")return{title:"Keuze van het systeem",verdict:"E\xE9n warmtepomp is genoeg",summary:"De warmtevraag is gezakt. E\xE9n warmtepomp kan de resterende warmte rustiger en zuiniger leveren.",rows:[{option:"Twee warmtepompen",result:"Niet meer nodig",code:"less_power",detail:"Samen leveren ze meer vermogen dan nu nodig is.",tone:"muted"},{option:r,result:"Blijft actief",code:"less_power",detail:"E\xE9n warmtepomp dekt de lagere vraag rustiger.",tone:"selected"}]};if(t==="runtime_lead")return{title:"Keuze van het systeem",verdict:`${r} gestart`,summary:"De warmtepompen zijn gelijkwaardig. De keuze volgt uit draaiuren, beschikbaarheid en wachttijden.",rows:[{option:"HP1",result:r==="HP1"?"Gekozen":"Niet nu",code:"runtime_lead",detail:"Past het beste bij de actuele draaiurenbalans.",tone:r==="HP1"?"selected":"muted"},{option:"HP2",result:r==="HP2"?"Gekozen":"Niet nu",code:"runtime_lead",detail:"Gelijkwaardige pomp, maar nu minder gunstig in balans of wachttijd.",tone:r==="HP2"?"selected":"muted"}]};if(["min_rest_active","no_candidate","candidate_in_rest","candidate_in_defrost","candidate_unavailable"].includes(t))return{title:"Startcontrole",verdict:"Start uitgesteld",summary:Rr(t).summary,rows:[{option:r,result:"Wacht nog",code:t,detail:Rr(t).summary,tone:"limited"},{option:"Opnieuw beoordelen",result:"Straks",code:"hold_active",detail:"Het systeem probeert opnieuw zodra starten verstandig is.",tone:"muted"}]};if(["flow_preflow","flow_postflow","flow_too_low"].includes(t)){let a=(e?.realEventType||e?.rawDecisionEvent?.event_type||"")==="flow_hold_clear",i=t==="flow_postflow";if(a)return{title:i?"Waterflow afronden":"Waterflow bevestigd",verdict:i?"Naloop klaar":"Start vrijgegeven",summary:i?"De pompnaloop is afgerond. Het systeem kan terug naar standby.":"De waterflow is voldoende. De regelaar kan doorgaan met de volgende stap.",rows:[{option:"Waterflow",result:"Voldoende",code:t,detail:"De gemeten circulatie is vrijgegeven voor de volgende stap.",tone:"selected"},{option:"Warmtepomp",result:i?"Gestopt":"Vrijgegeven",code:t,detail:i?"De warmtepomp is gestopt; de naloop is nu ook klaar.":"De compressor mag nu volgens de normale regeling starten.",tone:"selected"},{option:"Regelaar",result:"Gaat verder",code:"keep_current",detail:"De controller vervolgt automatisch de normale regeling.",tone:"muted"}]};let l=t==="flow_too_low";return{title:"Waterflow eerst",verdict:i?"Naloop actief":l?"Start geblokkeerd":"Voorloop actief",summary:Rr(t).summary,rows:[{option:"Waterflow",result:l?"Blijft te laag":i?"Wordt afgerond":"Wordt opgebouwd",code:t,detail:"De pomp zorgt voor circulatie voordat de volgende stap vrij is.",tone:l?"limited":"selected"},{option:"Warmtepomp",result:i?"Gestopt":l?"Start geblokkeerd":"Wacht op voorloop",code:t,detail:"De compressor start pas als de flowconditie veilig is.",tone:l?"limited":"muted"},{option:"Regelaar",result:l?"Blijft controleren":"Controleert automatisch",code:"keep_current",detail:"De controller beoordeelt de waterflow automatisch opnieuw.",tone:"muted"}]}}if(t==="defrost_hold"||t==="defrost_boost")return{title:"Bescherming",verdict:"Ontdooien krijgt voorrang",summary:"Tijdens ontdooien houdt het systeem de regeling rustig, zodat de warmtepomp vanzelf kan herstellen.",rows:[{option:"Actieve warmtepomp",result:"Rustig laten herstellen",code:"defrost_hold",detail:"Niet wisselen zolang ontdooien of herstel actief is.",tone:"selected"},{option:"Extra bron",result:t==="defrost_boost"?"Helpt mee":"Stand-by",code:t,detail:"Alleen inzetten als comfort of vermogen daarom vraagt.",tone:t==="defrost_boost"?"selected":"muted"}]};if(t==="boiler_assist")return{title:"Bronkeuze",verdict:"CV ondersteunt tijdelijk",summary:"De warmtepompen blijven de basis leveren. CV vult alleen aan zolang extra vermogen nodig is.",rows:[{option:"Alleen warmtepompen",result:"Te weinig reserve",code:"better_heat",detail:"De vraag bleef hoger dan de warmtepompen rustig konden leveren.",tone:"muted"},{option:"CV-ketel",result:"Tijdelijk bij",code:"boiler_assist",detail:"CV levert extra vermogen en stopt zodra de vraag zakt.",tone:"selected"},{option:"Na piek",result:"Terug naar HP",code:"less_power",detail:"De warmtepompen nemen het weer over als ondersteuning niet meer nodig is.",tone:"muted"}]};if(t==="sticky_protection")return{title:"Pompbescherming",verdict:"Korte pomprun",summary:"Alleen de pomp draait kort. De warmtepompen blijven uit omdat er geen verwarmings- of koelvraag is.",rows:[{option:"Verwarmen",result:"Niet nodig",code:"keep_current",detail:"Geen warmtevraag vanuit kamer of regeling.",tone:"muted"},{option:"Koelen",result:"Niet nodig",code:"keep_current",detail:"Geen koelvraag vanuit de kamer.",tone:"muted"},{option:"Pomp",result:"Kort aan",code:"sticky_protection",detail:"De dagelijkse bescherming laat de pomp ongeveer 1 minuut draaien.",tone:"selected"}]};if(["capacity_cap","room_cap","cooling_limiter"].includes(t)){let n=Qu();return{title:"Koelregeling",verdict:`Maximaal ingesteld niveau ${n.allowedMax}`,summary:"De koelvraag wordt uitgevoerd binnen het ingestelde maximum. Dit is normale regeling, geen aandachtspunt.",rows:[{option:"Gevraagd koelniveau",result:n.rawDemand,code:"coolingDemandRaw",detail:"Wat de kamer vraagt voordat het ingestelde maximum meetelt.",tone:"muted"},{option:"Ingesteld maximum",result:n.allowedMax,code:t,detail:"Het hoogste niveau dat de software nu toestaat.",tone:"selected"},{option:"Uitgestuurd niveau",result:n.limitedDemand,code:"coolingLimitedDemand",detail:"Het niveau dat de warmtepomp op dit moment krijgt.",tone:"normal"}]}}if(t==="buffer_stop")return{title:"Koelregeling",verdict:"Water al koud genoeg",summary:"Er is koelvraag, maar de actuele watertemperatuur vraagt nu geen extra koeling.",rows:[{option:"Koelvraag",result:"Blijft actief",code:"coolingDemandRaw",detail:"De kamer blijft om koeling vragen.",tone:"muted"},{option:"Watertemperatuur",result:"Koud genoeg",code:"buffer_stop",detail:"De aanvoer is al koud genoeg voor dit moment.",tone:"selected"},{option:"Warmtepomp",result:"Wacht",code:"keep_current",detail:"De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.",tone:"muted"}]};if(["falling_gap","projected_floor","dew_stop","restart_wait","level1_hold","oil_return_recovery","sensor_fallback"].includes(t)){let n=Qu();return{title:"Koelbewaking",verdict:n.permitted?`Maximaal koelniveau ${n.allowedMax}`:"Koeling tijdelijk gepauzeerd",summary:"De koelvraag blijft actief, maar dauwpunt, aanvoer of compressorconditie vraagt tijdelijk voorzichtig gedrag.",rows:[{option:"Gevraagd koelniveau",result:n.rawDemand,code:"coolingDemandRaw",detail:"Wat de kamer vraagt voordat bewaking meetelt.",tone:"muted"},{option:"Maximaal veilig",result:n.allowedMax,code:t,detail:"Het hoogste niveau dat nu veilig is met de huidige dauwpuntmarge.",tone:"selected"},{option:"Uitgestuurd niveau",result:n.limitedDemand,code:"coolingLimitedDemand",detail:"Het niveau dat de warmtepomp op dit moment krijgt.",tone:"limited"}]}}return null}function Hb(e){return e?`
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
    `:""}function o1(e=Date.now()){let t=od().filter(c=>["startup_inhibit_start","startup_inhibit_refresh","startup_inhibit_clear"].includes(String(c?.event_type||""))).sort(rd),r=t[t.length-1];if(!r||!["startup_inhibit_start","startup_inhibit_refresh"].includes(String(r.event_type)))return null;let n=po(r),a=Math.max(0,Number(r?.value_b)||0),i=Number.isFinite(n)?Math.max(0,(e-n)/1e3):0,l=Math.max(0,Math.ceil(a-i));return a>0&&l<=0?null:{event:r,subject:String(r?.subject||"SYSTEM").toUpperCase(),targetMode:Number(r?.value_a)||0,remainingS:l,remainingLabel:l>0?`Nog ${Math.max(1,Math.ceil(l/60))} min`:"Wachttijd actief"}}function Db(e){let t=WC(e),r=j("controlModeLabel","\u2014"),n=Cb(r),a=n?n.toUpperCase():r,i=e.find(W=>W.title==="HP1")||e[0],l=e.find(W=>W.title==="HP2"),c=Uu(i),d=l?Uu(l):!1,u=c&&d,m=t.defrostActive,v=Qu(),w=t.coolingProtection,f=t.coolingCapped,g=t.coolingMode||t.coolingRequest,p=y("stickyActive")&&C("stickyActive"),b=t.boilerActive,S=o1(),k="E\xE9n warmtepomp actief",E="De actuele vraag past binnen \xE9\xE9n warmtepomp. De andere warmtepomp blijft beschikbaar als extra capaciteit nodig is.",q="Een extra warmtepomp schakelt bij zodra de vraag lang genoeg hoog blijft en alle wachttijden vrij zijn.",M="normal",_="keep_current",H="Live";if(n==="cm98")k="Vorstbescherming actief",E="Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",q="Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",M="limited",_="frost_protection",H="Bescherming actief";else if(p)k="Pompbescherming actief",E="Er is geen warmte- of koelvraag. De pomp draait kort om vastzitten na lange stilstand te voorkomen.",q="Na ongeveer 1 minuut stopt de pomp en blijft het systeem standby tot er comfortvraag of bescherming nodig is.",_="sticky_protection",H="Dagelijkse run";else if(S){let W=S.targetMode===1;k=W?"Koeling wacht na herstart":"Verwarming wacht na herstart",E=W?"Er is koelvraag, maar de compressor blijft na de herstart nog kort uit om een te snelle herstart te voorkomen.":"Er is warmtevraag, maar de compressor blijft na de herstart nog kort uit om een te snelle herstart te voorkomen.",q=W?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.",_="startup_inhibit",H=S.remainingLabel||"Wachttijd actief"}else if(v.reasonCode==="buffer_stop")k="Koeling wacht: water al koud genoeg",E="Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.",q="De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.",_="buffer_stop",H="Koelvraag actief";else if(w){let W=v.reasonCode&&v.reasonCode!=="inactive"?v.reasonCode:"soft_guard",x=W==="restart_wait";k=x?"Koeling wacht op veilige herstart":v.permitted?"Koeling tijdelijk beperkt":"Koeling tijdelijk gepauzeerd",E=x?"De koelvraag is nog aanwezig. Na de koelstop wacht het systeem tot de veilige marge voldoende is hersteld.":`Er is koelvraag, maar het systeem koelt nu maximaal op niveau ${v.allowedMax} om condens te voorkomen.`,q=x?"De warmtepomp start automatisch opnieuw zodra de veilige marge voldoende en stabiel is.":"Koeling neemt stap voor stap toe zodra de dauwpuntmarge veilig en stabiel is.",M="limited",_=W,H="Koelvraag actief"}else if(f){let W=v.allowedMax&&v.allowedMax!=="\u2014"?`niveau ${v.allowedMax}`:"het ingestelde maximum",x=["capacity_cap","room_cap","cooling_limiter"].includes(v.reasonCode)?v.reasonCode:"capacity_cap";k="Koeling actief op ingesteld maximum",E=`Er is koelvraag. Het systeem koelt maximaal op ${W}, zoals ingesteld in de software.`,q="Koeling blijft binnen dit maximum. Dauwpunt, aanvoer en waterflow worden op de achtergrond bewaakt.",_=x,H="Koelvraag actief"}else g?(k="Koeling actief",E="Er is koelvraag en dauwpuntbewaking geeft koeling vrij. Het systeem blijft marge en waterflow bewaken.",q="Koeling blijft actief tot de kamertemperatuur richting setpoint zakt of bescherming ingrijpt.",_="keep_current",H="Koelen"):n==="cm4"?(k=b?"Ketelfallback actief":"Ketelfallbackrol niet actief",E=b?"Geen warmtepomp is inzetbaar; de CV-ketel krijgt in CM4 de verwarmingsopdracht.":"CM4 is als regelrol gekozen, maar de keteluitvoer is op dit moment niet actief.",q=b?"OpenQuatt blijft warmtepompherstel en alle veiligheidsvoorwaarden bewaken.":"De uitvoer blijft uit totdat de benodigde veiligheidsvoorwaarden geldig zijn.",M="fault",_=b?"boiler_fallback":"fallback_blocked",H=b?"Fallback actief":"Uitvoer geblokkeerd"):b?(k="CV-ketel ondersteunt",E="De CV-ketel helpt tijdelijk omdat de warmtevraag meer vermogen vraagt dan de warmtepompen nu leveren.",q="De CV-ketel stopt zodra de warmtepompen de vraag weer zelf kunnen dragen.",M="limited",_="boiler_assist",H="Ondersteuning actief"):m?(k="Ontdooien actief",E="Een warmtepomp ontdooit tijdelijk. Het systeem houdt de keuze rustig zodat het ontdooien vanzelf kan afronden.",q="De warmtepomp hervat automatisch zodra het ontdooien klaar is.",M="limited",_="defrost_hold",H="Tijdelijk"):u?(k="Duo-bedrijf actief",E="Beide warmtepompen draaien omdat de warmtevraag hoog blijft. Dit is normaal winterbedrijf.",q="E\xE9n warmtepomp stopt zodra de warmtevraag voldoende afneemt of single-bedrijf weer effici\xEBnter is.",_="better_heat",H="Actief"):!c&&!d&&(k="Geen warmtepomp actief",E="Er is nu geen warmtepompactie nodig, of het systeem wacht door bescherming of rusttijd.",q="Bij nieuwe vraag kiest het systeem opnieuw de best passende warmtepomp.",_="keep_current",H="Stand-by");let F=S&&["HP1","BOTH"].includes(S.subject),L=S&&["HP2","BOTH"].includes(S.subject);return{title:k,copy:E,expectation:q,severity:M,primaryReason:_,sinceLabel:H,modeLabel:a,strategyLabel:BC(),reasonLabel:$b(_),hp1Running:c,hp2Running:d,hp2Available:!!l,hp1Status:c?"Actief":F?"Wacht":"Beschikbaar",hp2Status:l?d?"Actief":L?"Wacht":"Beschikbaar":"Niet aanwezig",cvStatus:b?n==="cm4"?"Fallback":"Actief":"Uit",outsideTemp:Wo("outsideTempSelected",1,"\xB0C","\u2014"),supplyTemp:Wo("supplyTemp",1,"\xB0C","\u2014"),flow:Wo("flowSelected",0,"L/h","\u2014"),hp1Starts:wb("hp1CompressorStarts24h","\u2014"),hp2Starts:wb("hp2CompressorStarts24h",l?"\u2014":"n.v.t."),hp1Hours:vb("hp1RuntimeHours","\u2014"),hp2Hours:l?vb("hp2RuntimeHours","\u2014"):"n.v.t.",cooling:v,coolingProtection:w,startupInhibit:S,coolingCapped:f}}function od(){let e=o.decisionLog;return e?.ok&&Array.isArray(e.events)?e.events:[]}function po(e){let t=Number(e?.epoch_s);if(Number.isFinite(t)&&t>0)return t*1e3;let r=Number(o.decisionLog?.meta?.boot_epoch_s),n=Number(e?.uptime_s);return Number.isFinite(r)&&r>0&&Number.isFinite(n)&&n>=0?(r+n)*1e3:Number.NaN}function _s(e){let t=po(e);if(Number.isFinite(t))return t/1e3;let r=Number(e?.uptime_s);return Number.isFinite(r)?r:Number(e?.seq)||0}function rd(e,t){let r=_s(e)-_s(t);return r!==0?r:(Number(e?.seq)||0)-(Number(t?.seq)||0)}function Nb(e,t=Date.now()){let r=po(e);if(Number.isFinite(r))return Math.max(0,Math.round((t-r)/6e4));let n=Number(o.decisionLog?.meta?.uptime_s),a=Number(e?.uptime_s);return Number.isFinite(n)&&Number.isFinite(a)?Math.max(0,Math.round((n-a)/60)):Number.NaN}function Eb(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function _r(e,t=Date.now(),r="auto"){if(!Number.isFinite(e))return"Onbekend";let n=new Date(e),a=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit"});if(r==="time")return a;if(r==="weekday")return`${n.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${a}`;let i=new Date(t),l=new Date(i);return l.setDate(l.getDate()-1),Eb(n,i)?a:Eb(n,l)?`gisteren ${a}`:`${n.toLocaleDateString("nl-NL",{weekday:"short"}).replace(".","")} ${a}`}function Ms(e,t=ft(),r=Date.now()){let n=Math.max(0,Math.min(1440,Number(e)||0)),a=Dr(t,r);return a.start+n/1440*(a.end-a.start)}function r1(e,t=ft(),r=Date.now()){let n=po(e),a=(d,u,m)=>!Number.isFinite(d)||d<u||d>m?Number.NaN:(d-u)/Math.max(1,m-u)*1440;if(Number.isFinite(n)){let d=Dr(t,r);return a(n,d.start,d.end)}let i=Nb(e,r);if(!Number.isFinite(i))return Number.NaN;let l=Bo().find(d=>d.id===t);if(l?.calendarDay||l?.custom)return Number.NaN;let c=Zu(t,r);return i<=c?1440-i/c*1440:Number.NaN}function n1(e,t=ft(),r=Date.now()){let n=po(e);if(!Number.isFinite(n)){let a=Nb(e,r);return Number.isFinite(a)?h1(a):"Onbekend"}return t==="week"||t==="last48"||t==="last3d"||t==="custom"?_r(n,r,"weekday"):t.startsWith("last")?_r(n,r,"auto"):_r(n,r,"time")}function Ob(e){let t=Math.max(0,Math.round(Number(e)||0));if(!t)return"";if(t<60)return`${t}s`;if(t<3600)return`${Math.round(t/60)} min`;let r=Math.floor(t/3600),n=Math.round(t%3600/60);return n?`${r}u ${n}m`:`${r}u`}function nd(e){let t=String(e||"").toUpperCase();return{SYSTEM:"Systeem",HP1:"HP1",HP2:"HP2",BOTH:"HP1 + HP2",CV:"CV-ketel",COOLING:"Koeling",PUMP:"Pomp",CONTROLLER:"Regelaar"}[t]||"Systeem"}function gt(e,t){let r=String(e||"").toUpperCase(),n=nd(e);return r!=="HP1"&&r!=="HP2"&&r!=="BOTH"?n:Number(t)===5?`${n} (koelen)`:Number(t)>0?`${n} (verwarmen)`:n}function a1(e){let t=String(e?._oq_active_cooling_subject||"").toUpperCase();return gt(t==="HP1"||t==="HP2"||t==="BOTH"?t:e?.subject,5)}function ad(e){let t=String(e?.subject||"").toUpperCase();return t==="HP1"||t==="HP2"?t:""}function i1(e){let t=String(e?.event_type||""),r=nd(e?.subject),n=String(e?.reason||"unknown"),a=Number(e?._oq_context_cm??e?.cm)===5,i=e?._oq_active_cooling_source||"De warmtepomp",l=e?._oq_active_heating_source||"De warmtepomp",c=String(e?._oq_cooling_stop_reason||(n==="dew_stop"?"dew_stop":"")),d=["less_power","demand_decreased","cooling_request_cleared"].includes(n),u=n==="heating_request_cleared",m=!!e?._oq_cooling_runtime_hold,v=!!e?._oq_heating_runtime_hold,w=Ju(n),f=["soft_guard","sensor_fallback","no_candidate","flow_preflow"].includes(n),g=Rr(n),p=n==="flow_preflow",b=n==="flow_too_low",S=jh(e,r);if(S)return S;let k={title:"Keuze van het systeem",summary:"De regelaar heeft een keuze vastgelegd.",detail:g.summary,next:"Het systeem beoordeelt opnieuw zodra vraag, marge of beschikbaarheid verandert."};return{source_start:{title:a?`Koeling gestart (${r})`:`${r} gestart`,reasonLabel:a?"Koeling gestart":"",reasonSummary:a?"Koeling is vrijgegeven en de gekozen warmtepomp start met koelen.":"",summary:a?`${r} is gestart om te koelen. Dauwpunt, waterflow en aanvoertemperatuur blijven bewaakt.`:`${r} is gekozen op basis van beschikbaarheid, wachttijd en draaiurenbalans.`,detail:a?"De koelvraag is vrijgegeven. HP1 en HP2 zijn gelijkwaardig; de regelaar kiest de beschikbare bron die nu het beste past.":"HP1 en HP2 zijn gelijkwaardig. De regelaar kiest de beschikbare bron die op dat moment het beste past.",next:a?"Koeling blijft actief zolang er koelvraag is en de veilige marges vrij blijven.":"Als de vraag hoog blijft, beoordeelt het systeem of extra vermogen nodig is."},source_stop:{title:a?c==="dew_stop"?`${r} gestopt door dauwpunt`:d?"Koeling gestopt: geen koelvraag":`Koeling afgerond (${r})`:u?"Verwarming gestopt: geen warmtevraag":n==="less_power"?"E\xE9n warmtepomp stopt":`${r} gestopt`,reasonLabel:a?c==="dew_stop"?"Dauwpuntstop":d?"Geen koelvraag":"Koeling afgerond":u?"Geen warmtevraag":n==="less_power"?"E\xE9n warmtepomp is genoeg":"",reasonSummary:a?c==="dew_stop"?"De warmtepomp stopte omdat de dauwpuntbewaking koelen pauzeerde.":d?"De koelvraag is weggevallen of voldoende afgenomen.":"De koelactie is afgerond. Een korte pompnaloop kan daarna normaal zijn.":u?"De warmtevraag is weggevallen. Een korte pompnaloop kan daarna normaal zijn.":n==="less_power"?"De warmtevraag is afgenomen; \xE9\xE9n warmtepomp kan de resterende vraag dragen.":"",summary:a?c==="dew_stop"?`${r} stopte omdat verder koelen te dicht bij het dauwpunt kwam.`:d?"Er is geen koelvraag meer; de warmtepomp stopt met koelen.":`${r} is klaar met koelen.`:u?"Er is geen warmtevraag meer; de warmtepomp stopt met verwarmen.":n==="less_power"?"De vraag is lager. E\xE9n warmtepomp kan de resterende warmtevraag rustig dragen.":`${r} is gestopt omdat minder vermogen voldoende is of bescherming voorrang kreeg.`,detail:a?c==="dew_stop"?"Dit is beschermingsgedrag. Het systeem voorkomt condens en kan later opnieuw koelen zodra de marge veilig is.":"De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden.":u?"De regeling vraagt geen warmte meer. De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden.":"De regelaar voorkomt onnodig doordraaien en houdt tegelijk wachttijden en bescherming in de gaten.",next:a?c==="dew_stop"?"Bij blijvende koelvraag start koeling opnieuw zodra de dauwpuntmarge veilig genoeg is.":"Het systeem blijft standby of rondt de naloop af totdat er opnieuw koelvraag is.":u?"Het systeem blijft standby totdat er opnieuw warmtevraag is.":"Bij stijgende vraag kan dezelfde of de andere warmtepomp opnieuw starten."},topology_change:{title:a?e?.to==="idle"?n==="cooling_request_cleared"?"Koeling gestopt: geen koelvraag":n==="dew_stop"?"Koeling gestopt door dauwpunt":"Koeling gestopt":"Koeling actief":e?.to==="idle"&&u?"Verwarming gestopt: geen warmtevraag":e?.to==="duo"?"Twee warmtepompen verwarmen":"E\xE9n warmtepomp verwarmt",reasonLabel:a?e?.to==="idle"?n==="cooling_request_cleared"?"Geen koelvraag":n==="dew_stop"?"Dauwpuntstop":"Koeling gestopt":"Koeling actief":e?.to==="idle"&&u?"Geen warmtevraag":"",reasonSummary:a?e?.to==="idle"?n==="cooling_request_cleared"?"De koelvraag is weggevallen. Eventuele naloop is normaal.":n==="dew_stop"?"Koeling pauzeert om condens te voorkomen. Herstart kan zodra de marge veilig is.":"Er is geen warmtepomp meer actief voor koeling. Eventuele naloop is normaal.":"Koeling is actief. Het systeem bewaakt tegelijk de veilige marges.":e?.to==="idle"&&u?"De warmtevraag is weggevallen. Eventuele naloop is normaal.":"",summary:a?e?.to==="idle"?n==="cooling_request_cleared"?"De koelvraag is weg. Er is geen warmtepomp meer actief voor koeling.":n==="dew_stop"?"Koeling stopt tijdelijk omdat verder koelen te dicht bij het dauwpunt komt.":"Er is geen warmtepomp meer actief voor koeling.":`${r} koelt. Het systeem blijft dauwpunt, waterflow en aanvoertemperatuur bewaken.`:e?.to==="duo"?"Samen leveren de warmtepompen rustiger vermogen dan \xE9\xE9n warmtepomp op hoge belasting.":e?.to==="idle"&&u?"Er is geen warmtepomp meer actief voor verwarmen.":"De vraag is lager. E\xE9n warmtepomp kan de resterende vraag weer rustig dragen.",detail:a?"Koelen gebruikt dezelfde bronkeuze-logica als verwarmen: de warmtepompen zijn gelijkwaardig en de controller kiest de rustigste beschikbare bron.":"De duo-keuze gaat niet over hoofd- en hulppomp. De warmtepompen zijn gelijkwaardig; het systeem kiest de rustigste combinatie.",next:a?"Koeling blijft actief zolang er koelvraag is en bescherming geen beperking vraagt.":e?.to==="duo"?"Duo-bedrijf blijft actief zolang de extra reserve nuttig is.":e?.to==="idle"&&u?"Het systeem blijft standby totdat er opnieuw warmtevraag is.":"De tweede warmtepomp blijft beschikbaar als de vraag opnieuw stijgt."},decision_hold:{title:n==="defrost_hold"?"Keuze kort vastgehouden":"Start of wissel uitgesteld",summary:n==="defrost_hold"?"De regelaar laat ontdooien rustig afronden voordat hij opnieuw schakelt.":"De regelaar wacht bewust even om korte cycli en onrustig gedrag te voorkomen.",detail:g.summary,next:"Na de wachttijd beoordeelt het systeem opnieuw wat de rustigste keuze is."},decision_blocked:{title:n==="flow_too_low"?"Start geblokkeerd: waterflow te laag":r==="CV-ketel"?"CV-ketel niet vrijgegeven":"Actie geblokkeerd",reasonLabel:n==="flow_too_low"?"Waterflow blijft te laag":"",reasonSummary:n==="flow_too_low"?"De normale voorlooptijd is verstreken. De warmtepomp blijft veilig uit totdat voldoende water circuleert.":"",summary:n==="flow_too_low"?"De pomp draait, maar na de normale voorlooptijd is nog niet genoeg waterflow gemeten.":r==="CV-ketel"?"Er was een mogelijke hulpvraag, maar de CV-ketel was niet vrijgegeven.":"De gevraagde actie is tijdelijk niet toegestaan door een voorwaarde of bescherming.",detail:n==="flow_too_low"?"Dit is pas een blokkade nadat de normale opbouwtijd is verstreken; een korte lage flow direct na het starten hoort hier niet bij.":g.summary,next:n==="flow_too_low"?"De regelaar blijft de waterflow volgen en geeft de start automatisch vrij zodra de circulatie voldoende en stabiel is.":"De regelaar probeert opnieuw zodra de voorwaarden vrij zijn.",checks:n==="flow_too_low"?["Voorlooptijd verstreken","Warmtepomp blijft veilig uit","Waterflow wordt opnieuw beoordeeld"]:null},candidate_blocked:{title:`${r} wacht nog`,summary:n==="candidate_in_rest"?`${r} zit nog in rusttijd na een vorige stop.`:`${r} is nu nog geen veilige kandidaat om te starten.`,detail:g.summary,next:"De regelaar probeert opnieuw zodra de voorwaarde vrij is en de vraag blijft bestaan."},flow_hold_start:{title:n==="flow_postflow"?m?"Koeling loopt nog kort door":v?"Verwarming loopt nog kort door":a?"Naloop na koelen actief":"Naloop actief":b?"Start wacht op voldoende waterflow":a?"Voorloop voor koelen":"Voorloop voor start",reasonLabel:n==="flow_postflow"?m||v?"Minimale looptijd":a?"Naloop na koelen":"Naloop actief":b?"Waterflow blijft te laag":a?"Voorloop voor koelen":"Voorloop actief",reasonSummary:a?n==="flow_postflow"?m?`${i} staat nog op Cooling terwijl het systeem al in CM1 naloop zit.`:"De pomp draait kort na om het koelbedrijf netjes af te ronden.":"De pomp draait eerst kort zodat de flow stabiel is voordat de warmtepomp met koelen start.":v?`${l} verwarmt nog terwijl de regelaar al in CM1 naloop zit.`:"",summary:a?n==="flow_postflow"?m?`${i} koelt nog kort door door minimale looptijd; het systeem zit al in naloop.`:"De pomp draait kort na zodat het koelbedrijf netjes wordt afgerond.":b?"De voorlooptijd is verstreken, maar de waterflow is nog niet voldoende om veilig met koelen te starten.":"De pomp draait eerst kort voor. Daarna mag de warmtepomp met koelen starten.":b?"De voorlooptijd is verstreken, maar de waterflow is nog niet voldoende om de warmtepomp veilig te starten.":p?"De pomp draait eerst kort voor zodat de flow stabiel is voordat de warmtepomp start.":v?`${l} verwarmt nog kort door door minimale looptijd; het systeem zit al in naloop.`:g.summary,detail:a?m?"De controller vraagt geen nieuwe koelactie meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop.":"Dit is een normale startstap. De pomp krijgt eerst ongeveer 30 seconden om waterflow op te bouwen; daarna wordt de koelactie vrijgegeven.":v?"De regelaar vraagt geen nieuwe warmte meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop.":"CM1 wordt gebruikt als korte flowfase. De pomp krijgt eerst even tijd om waterflow op te bouwen voordat de warmtepomp start of stopt.",next:a?n==="flow_postflow"?m?`${i} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`:"Daarna blijft het systeem standby of beoordeelt het een nieuwe koelvraag.":"Na de korte voorloop gaat het systeem automatisch door met koelen.":v?`${l} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`:"De regelaar gaat automatisch verder zodra de flowfase klaar is."},flow_hold_clear:{title:n==="flow_postflow"?a?"Naloop na koelen klaar":"Naloop klaar":b?"Waterflow hersteld":a?"Voorloop voor koelen klaar":"Voorloop klaar",reasonLabel:n==="flow_postflow"?a?"Naloop na koelen":"Naloop actief":b?"Waterflow hersteld":a?"Koelen vrijgegeven":"Voorloop klaar",reasonSummary:n==="flow_postflow"?a?"De korte pompnaloop na koelen is afgerond.":"De korte pompnaloop is afgerond.":b?"De waterflow is hersteld en de tijdelijke startblokkade is opgeheven.":a?"De waterflow is voldoende; de warmtepomp kan met koelen verder.":"De waterflow is voldoende; de warmtepomp is vrijgegeven voor de volgende stap.",summary:a?n==="flow_postflow"?"De pomp heeft kort nagedraaid; het koelbedrijf is afgerond.":"De waterflow is voldoende; koeling kan verder.":n==="flow_postflow"?"De pomp heeft kort nagedraaid; het systeem kan terug naar standby.":"De waterflowfase is afgerond; de normale regeling kan verder.",detail:a?"De flowfase hoort bij het koeltraject. Dit is normaal gedrag rond starten of stoppen van koeling.":n==="flow_postflow"?"De warmtepomp is gestopt en de pomp heeft de korte naloop afgerond.":"De pomp heeft voldoende circulatie opgebouwd. De startvoorwaarde voor waterflow is nu vrij.",next:a?n==="flow_postflow"?"Het systeem blijft standby totdat er opnieuw koelvraag of bescherming nodig is.":"De controller vervolgt met koelen en blijft dauwpunt en aanvoer bewaken.":"De controller vervolgt met verwarmen, koelen, vorstbescherming of standby.",checks:n==="flow_postflow"?["Naloop afgerond","Warmtepomp gestopt","Regeling gaat naar standby"]:b?["Waterflow hersteld","Startblokkade opgeheven","Regeling gaat verder"]:["Waterflow voldoende","Warmtepomp vrijgegeven","Regeling gaat verder"]},startup_inhibit_start:{title:Number(e?.value_a)===1?"Koeling wacht na herstart":"Verwarming wacht na herstart",reasonLabel:"Wachttijd na herstart",reasonSummary:"De compressor blijft na een herstart kort uit om een te snelle herstart te voorkomen.",summary:Number(e?.value_a)===1?"Er is koelvraag, maar de warmtepomp wacht nog kort na de herstart.":"Er is warmtevraag, maar de warmtepomp wacht nog kort na de herstart.",detail:"De controller kent na een reboot de voorgaande stoptijd niet meer. Daarom houdt hij eenmaal de ingestelde minimale uit-tijd aan voordat een compressor mag starten.",next:Number(e?.value_a)===1?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.",checks:["Comfortvraag aanwezig","Compressor blijft nog uit","Start volgt automatisch"]},startup_inhibit_clear:{title:"Wachttijd na herstart voorbij",reasonLabel:"Wachttijd afgerond",reasonSummary:"De compressor mag weer starten als de vraag nog aanwezig is.",summary:"De wachttijd na de herstart is verstreken.",detail:"De minimale uit-tijd na de reboot is afgerond. Alle normale startvoorwaarden blijven van toepassing.",next:"Bij aanhoudende vraag gaat de controller automatisch verder met de gekozen warmtepomp.",checks:["Wachttijd verstreken","Start weer toegestaan","Regeling gaat verder"]},startup_inhibit_refresh:{title:Number(e?.value_a)===1?"Koelvraag tijdens wachttijd gewijzigd":"Warmtevraag tijdens wachttijd gewijzigd",reasonLabel:"Wachttijd blijft actief",reasonSummary:"De gekozen warmtepomp of doelmodus veranderde, maar de wachttijd na de herstart loopt door.",summary:"De controller heeft de actuele vraag opnieuw beoordeeld. De compressor blijft wachten tot dezelfde wachttijd voorbij is.",detail:"Tijdens de wachttijd veranderde welke warmtepomp of doelmodus gewenst is. De blokkering is niet opgeheven; alleen de context van de wachtperiode is bijgewerkt.",next:"Zodra de wachttijd voorbij is, mag de dan gekozen warmtepomp automatisch starten.",checks:["Vraag opnieuw beoordeeld","Wachttijd blijft actief","Start volgt automatisch"]},defrost_seen_start:{title:`Ontdooien gestart (${r})`,summary:`${r} ontdooit kort. Dat is normaal bij koud en vochtig weer.`,detail:"De buitenunit bepaalt zelf hoe lang ontdooien duurt. De regelaar voorkomt ondertussen onnodige wissels.",next:"Na ontdooien levert de warmtepomp automatisch weer normaal mee."},defrost_seen_clear:{title:`Ontdooien klaar (${r})`,summary:`${r} heeft ontdooien afgerond en kan weer normaal vermogen leveren.`,detail:"De regelaar ziet dat de ontdooifase voorbij is en laat de normale regeling weer doorlopen.",next:"Bij aanhoudende vraag blijft de warmtepomp actief of schakelt duo-bedrijf bij."},cooling_limited:{title:n==="dew_stop"?"Koeling gestopt door dauwpunt":n==="restart_wait"?"Koeling wacht op veilige herstart":n==="buffer_stop"?"Koeling wacht: water al koud genoeg":w?"Koeling tijdelijk beperkt":"Koeling op ingesteld maximum",summary:n==="dew_stop"?`${i} stopt omdat verder koelen te dicht bij het dauwpunt komt.`:n==="restart_wait"?"De koelvraag is nog aanwezig. Het systeem wacht met opnieuw starten tot de veilige marge voldoende is hersteld.":n==="buffer_stop"?"Er is koelvraag, maar het water is al koud genoeg. De warmtepomp hoeft daarom nu niet te starten.":w?"Er is koelvraag, maar het systeem houdt het koelvermogen tijdelijk lager.":"Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum.",detail:g.summary,next:n==="restart_wait"?"De warmtepomp start automatisch opnieuw zodra de veilige marge voldoende en stabiel is.":n==="buffer_stop"?"De warmtepomp start automatisch zodra opnieuw actieve koeling nodig is.":w?"Koeling wordt vrijgegeven zodra de veilige marge stabiel genoeg is.":"Koeling blijft binnen dit maximum zolang de instelling en koelvraag gelijk blijven."},cooling_released:{title:"Koeling vrijgegeven",summary:"De veilige marge is terug. De warmtepomp mag weer normaal koelen.",detail:"De dauwpunt- en temperatuurmarge is voldoende hersteld om de begrenzing los te laten.",next:"De regelaar blijft koelen zolang de kamer daarom vraagt."},sticky_pump_run:{title:"Pompbescherming uitgevoerd",summary:"De pomp draaide kort na langere stilstand. Dit is geen verwarmings- of koelvraag.",detail:"Deze korte run voorkomt dat de pomp na stilstand vast gaat zitten.",next:"De volgende preventieve run volgt pas na de ingestelde beschermingstijd."},frost_protection_start:{title:"Vorstbescherming actief",summary:"Het systeem laat water circuleren om bevriezing te voorkomen.",detail:"Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",next:"Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt."},frost_protection_clear:{title:"Vorstbescherming gestopt",summary:"Het systeem verlaat de vorstbescherming en gaat terug naar normale regeling.",detail:"Het watercircuit hoeft niet langer apart beschermd te worden.",next:"Bij nieuw vorstrisico kan de bescherming automatisch opnieuw starten."},boiler_assist_start:{title:"CV-ketel ondersteunt tijdelijk",summary:"De CV-ketel helpt omdat extra capaciteit tijdelijk nuttig is.",detail:"De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",next:"De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen."},boiler_assist_stop:f?{title:n==="sensor_fallback"?"CV-ondersteuning gestopt: meting ontbreekt":n==="no_candidate"?"CV-ondersteuning niet beschikbaar":n==="flow_preflow"?"CV-ondersteuning wacht op voorloop":"CV-ondersteuning veilig gestopt",summary:n==="sensor_fallback"?"De CV-ketel is gestopt omdat een betrouwbare aanvoertemperatuur ontbreekt.":n==="no_candidate"?"De CV-ketel is uitgeschakeld of kan nu niet worden ingezet.":n==="flow_preflow"?"De CV-ketel wacht tijdens de test kort tot de waterflow stabiel is.":"De CV-ketel is gestopt omdat een veiligheidsgrens voor de watertemperatuur actief is.",detail:"Dit is een beschermende of configuratiegebonden keuze, niet een teken dat de warmtevraag vanzelf is afgenomen.",next:"De regelaar beoordeelt automatisch opnieuw zodra de blokkade is opgeheven."}:{title:"CV-ondersteuning gestopt",summary:"De extra ondersteuning is niet meer nodig.",detail:"De warmtevraag is genoeg gedaald of de warmtepompen kunnen het weer zelf dragen.",next:"De CV-ketel blijft beschikbaar als er later opnieuw extra capaciteit nodig is."},attention_pattern:{title:"Aandachtspunt gezien",summary:n==="start_stop_rate_high"?"Er zijn relatief veel starts/stops gezien. Dat is nuttig om te volgen.":"Het systeem ziet een patroon dat extra aandacht verdient.",detail:g.summary,next:"Als het patroon aanhoudt, blijft dit zichtbaar voor support en analyse."}}[t]||k}function s1(e,t,r){let n=Number(t?.duration_s);if(!Number.isFinite(n)||n<=0)return e;let a=Pa(t,r);return Math.max(e,Math.min(1440,e+Math.max(5,a)))}function l1(e){let t=String(e?.event_type||""),r=String(e?.reason||""),n=Wh(e);if(n)return n;if(Pb(e)||r==="buffer_stop")return"normal";if(Ju(r))return"limited";if(t==="flow_hold_start"||t==="flow_hold_clear"){if(r==="flow_preflow"||r==="flow_postflow")return"normal";if(r==="flow_too_low")return t==="flow_hold_start"?"limited":"normal"}return String(e?.severity||"normal")}function Pb(e){if(String(e?.event_type||"")!=="cooling_limited")return!1;let t=String(e?.reason||"");return["capacity_cap","room_cap","cooling_limiter","simmer","falling_gap","level1_hold"].includes(t)?!0:t==="projected_floor"&&Number(e?.value_a)>0}function c1(e,t,r){let n=String(e?.event_type||""),a=String(e?.reason||"unknown");if(!n||n==="boot_marker"||e?._oq_hidden||(n==="defrost_seen_start"||n==="defrost_seen_clear")&&Number(e?._oq_context_cm??e?.cm)===5||Pb(e)||n==="cooling_released")return null;let i=r1(e,t,r);if(!Number.isFinite(i))return null;let l=i1(e),c=Number(e?._oq_context_cm??e?.cm),d=n==="cooling_limited"||n==="cooling_released"?a1(e):n==="source_start"||n==="source_stop"||n==="topology_change"?gt(e?.subject,c):nd(e?.subject),u=Ob(e?.duration_s),m=l1(e);return{id:`fw-${e.seq||e.uptime_s||n}`,kind:"event",severity:m,time:n1(e,t,r),title:l.title,summary:l.summary,detailTitle:"Waarom gebeurde dit?",detail:l.detail,next:l.next,source:d,reasonLabel:l.reasonLabel||"",reasonSummary:l.reasonSummary||"",reasonCode:a,modeLabel:Number(e?.cm)>0?`CM${Number(e.cm)}`:"CM?",modeTransitionLabel:e?._oq_mode_transition||"",duration:u,graphStart:Math.max(0,Math.min(1440,i)),graphEnd:s1(i,e,t),realEventType:n,rawDecisionEvent:e,checks:Array.isArray(l.checks)?l.checks:null,timelineHidden:(n==="source_start"||n==="topology_change")&&c===5||n==="source_stop"&&(e?._oq_cooling_stop_reason==="dew_stop"||a==="dew_stop")||n==="startup_inhibit_start"||n==="startup_inhibit_refresh"||n==="startup_inhibit_clear"}}function u1(e,t,r,n){if(!Number.isFinite(e)||!Number.isFinite(t)||t<=e)return null;let a=Dr(r,n),i=Math.max(e,a.start),l=Math.min(t,a.end);if(l<=i)return null;let c=Math.max(1,a.end-a.start);return{start:(i-a.start)/c*1440,end:(l-a.start)/c*1440,durationS:Math.max(0,Math.round((l-i)/1e3))}}function d1(e){let t=Number(e?._oq_context_cm??e?.cm);return Number.isFinite(t)&&t>0?`CM${t}`:"CM?"}function Oa(e,t,r){let n=u1(e.startEpochMs,e.endEpochMs,t,r);return!n||n.durationS<Number(e.minDurationS||60)?null:{id:e.id,kind:"span",severity:e.severity||"normal",time:Ib(n.start,n.end,!!e.isOpen),duration:Ob(n.durationS),title:e.title,summary:e.summary,detailTitle:e.detailTitle||"Waarom liep deze periode?",detail:e.detail,next:e.next,source:e.source||"Systeem",reasonCode:e.reasonCode||"keep_current",reasonLabel:e.reasonLabel||"",reasonSummary:e.reasonSummary||"",modeLabel:e.modeLabel||d1(e.startEvent),modeTransitionLabel:"",graphStart:Math.max(0,Math.min(1440,n.start)),graphEnd:Math.max(0,Math.min(1440,n.end)),derivedFromDecisionLog:!0}}function p1(e,t,r){let n=Dr(t,r),a={HP1:[],HP2:[],cooling:[],boiler:[],frost:[],startupInhibit:[]},i={HP1:null,HP2:null,cooling:null,boiler:null,frost:null,startupInhibit:null},l=p=>{let b=String(p||"").toUpperCase();return b==="BOTH"?["HP1","HP2"]:b==="HP1"||b==="HP2"?[b]:[]},c=p=>po(p),d=(p,b)=>{let S=c(b);!Number.isFinite(S)||i[p]||(i[p]={key:p,startEvent:b,startEpochMs:S})},u=(p,b)=>{let S=i[p],k=c(b);!S||!Number.isFinite(k)||(k>S.startEpochMs&&a[p].push({...S,endEvent:b,endEpochMs:k}),i[p]=null)},m=p=>{["HP1","HP2"].some(S=>i[S]&&Number(i[S].startEvent?._oq_context_cm??i[S].startEvent?.cm)===5)||u("cooling",p)};e.filter(p=>p&&!p._oq_hidden).sort(rd).forEach(p=>{let b=String(p?.event_type||""),S=Number(p?._oq_context_cm??p?.cm);if(b==="boot_marker")Object.keys(i).forEach(k=>u(k,p));else if(b==="source_start")l(p.subject).forEach(k=>d(k,p)),S===5&&d("cooling",p);else if(b==="source_stop")l(p.subject).forEach(k=>u(k,p)),(S===5||i.cooling)&&m(p);else if(b==="topology_change")if(p.to==="duo")d("HP1",p),d("HP2",p);else if(p.to==="single"){let k=ad(p);k?(d(k,p),u(k==="HP1"?"HP2":"HP1",p)):u("HP2",p),m(p)}else p.to==="idle"&&(u("HP1",p),u("HP2",p),u("cooling",p));else b==="boiler_assist_start"||b==="boiler_fallback_start"?d("boiler",p):b==="boiler_assist_stop"||b==="boiler_fallback_stop"?u("boiler",p):b==="frost_protection_start"?d("frost",p):b==="frost_protection_clear"?u("frost",p):b==="startup_inhibit_start"?d("startupInhibit",p):b==="startup_inhibit_refresh"?(u("startupInhibit",p),d("startupInhibit",p)):b==="startup_inhibit_clear"?u("startupInhibit",p):b==="flow_hold_clear"&&p.reason==="flow_postflow"&&u("cooling",p)}),Object.keys(i).forEach(p=>{if(i[p]){let b=t==="today"?Math.min(n.end,r):n.end;a[p].push({...i[p],endEvent:null,endEpochMs:b,isOpen:!0})}});let v=[],w=p=>{p&&v.push(p)},f=(p,b)=>p.startEpochMs<b.endEpochMs&&b.startEpochMs<p.endEpochMs,g=p=>{let b=["HP1","HP2"].filter(S=>a[S].some(k=>Number(k.startEvent?._oq_context_cm??k.startEvent?.cm)===5&&f(k,p)));return b.length===2?gt("BOTH",5):b.length===1?gt(b[0],5):gt(p.startEvent?.subject,5)};return a.startupInhibit.forEach((p,b)=>{let k=(Number(p.startEvent?.value_a)||0)===1,E=String(p.endEvent?.event_type||"")==="startup_inhibit_refresh";w(Oa({id:`fw-span-startup-inhibit-${b}-${p.startEvent?.seq||p.startEpochMs}`,startEpochMs:p.startEpochMs,endEpochMs:p.endEpochMs,isOpen:!!p.isOpen,startEvent:p.startEvent,severity:"normal",title:p.isOpen?"Warmtepomp wacht na herstart":"Warmtepomp wachtte na herstart",summary:k?"Er was koelvraag, maar de compressor bleef na de herstart nog kort uit.":"Er was warmtevraag, maar de compressor bleef na de herstart nog kort uit.",detail:"Na een reboot houdt de controller eenmaal de minimale uit-tijd aan. Zo kan een compressor niet te snel opnieuw starten wanneer de vorige stoptijd onbekend is.",next:p.isOpen?k?"De warmtepomp start automatisch met koelen zodra de wachttijd voorbij is.":"De warmtepomp start automatisch met verwarmen zodra de wachttijd voorbij is.":E?"De gewenste warmtepomp of doelmodus veranderde, maar de wachttijd bleef actief.":"Na deze periode ging de normale regeling automatisch verder.",source:gt(p.startEvent?.subject,k?5:2),reasonCode:"startup_inhibit",reasonLabel:"Wachttijd na herstart",reasonSummary:"De compressor werd bewust nog niet gestart.",modeLabel:k?"CM5":"CM2",minDurationS:1},t,r))}),a.boiler.forEach((p,b)=>{let S=String(p.startEvent?.event_type||"")==="boiler_fallback_start";w(Oa({id:`fw-span-boiler-${b}-${p.startEvent?.seq||p.startEpochMs}`,startEpochMs:p.startEpochMs,endEpochMs:p.endEpochMs,isOpen:!!p.isOpen,startEvent:p.startEvent,severity:S?"limited":"normal",title:S?"CV-ketel nam verwarming tijdelijk over":"CV-ketel ondersteunde tijdelijk",summary:S?"Geen warmtepomp was veilig inzetbaar; de CV-ketel verwarmde tijdelijk in CM4.":"De CV-ketel hielp tijdelijk mee toen extra vermogen nuttig was.",detail:S?"De foutfallback start pas na bevestigde HP-uitval, verse stopbevestiging en geldige installatiebeveiligingen.":"De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",next:S?"OpenQuatt stopt CM4 zodra een warmtepomp stabiel is hersteld of een veiligheidsvoorwaarde de fallback blokkeert.":"De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen.",source:"CV-ketel",reasonCode:S?"boiler_fallback":"boiler_assist",modeLabel:S?"CM4":"CM3",minDurationS:S?1:120},t,r))}),a.cooling.forEach((p,b)=>{w(Oa({id:`fw-span-cooling-${b}-${p.startEvent?.seq||p.startEpochMs}`,startEpochMs:p.startEpochMs,endEpochMs:p.endEpochMs,isOpen:!!p.isOpen,startEvent:p.startEvent,severity:"normal",title:"Koeling actief",summary:"Er was koelvraag en de warmtepomp koelde binnen de normale regeling.",detail:"Tijdens koelen bewaakt de controller continu waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij die normale regeling.",next:"Koeling stopt zodra de koelvraag wegvalt of tijdelijk pauzeert als een veiligheidsmarge daarom vraagt.",source:g(p),reasonCode:"keep_current",reasonLabel:"Koeling gestart",reasonSummary:"De koelrun is gestart en liep binnen de normale regeling.",modeLabel:"CM5",minDurationS:p.isOpen?1:120},t,r))}),a.frost.forEach((p,b)=>{w(Oa({id:`fw-span-frost-${b}-${p.startEvent?.seq||p.startEpochMs}`,startEpochMs:p.startEpochMs,endEpochMs:p.endEpochMs,isOpen:!!p.isOpen,startEvent:p.startEvent,severity:"limited",title:"Vorstbescherming actief",summary:"Het systeem liet water circuleren om bevriezing te voorkomen.",detail:"Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",next:"Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",source:"Systeem",reasonCode:"frost_protection",modeLabel:"CM98",minDurationS:60},t,r))}),a.HP1.forEach((p,b)=>{a.HP2.forEach(S=>{let k=Math.max(p.startEpochMs,S.startEpochMs),E=Math.min(p.endEpochMs,S.endEpochMs),q=p.startEpochMs>=S.startEpochMs?p.startEvent:S.startEvent,M=Number(p.startEvent?._oq_context_cm??p.startEvent?.cm),_=Number(S.startEvent?._oq_context_cm??S.startEvent?.cm);if(Number(q?._oq_context_cm??q?.cm)===5||M===5||_===5)return;let F=!!(p.isOpen&&S.isOpen);w(Oa({id:`fw-span-duo-${b}-${p.startEvent?.seq||p.startEpochMs}-${S.startEvent?.seq||S.startEpochMs}`,startEpochMs:k,endEpochMs:E,isOpen:F,startEvent:q,severity:"normal",title:"Twee warmtepompen verwarmen",summary:"HP1 en HP2 draaiden tegelijk omdat extra capaciteit nuttig was.",detail:"De warmtepompen zijn gelijkwaardig. Twee bronnen verdelen de belasting wanneer \xE9\xE9n warmtepomp de vraag minder rustig kan dragen.",next:"Het systeem schakelt terug naar \xE9\xE9n warmtepomp zodra single-bedrijf weer voldoende of rustiger is.",source:gt("BOTH",2),reasonCode:"better_heat",modeLabel:"CM2",minDurationS:300},t,r))})}),v}function Lb(e){let t=[...e].sort(rd),r={HP1:0,HP2:0},n={HP1:!1,HP2:!1},a=0,i=0,l=0,c="",d=m=>{let v=String(m||"").toUpperCase();return v==="BOTH"?["HP1","HP2"]:v==="HP1"||v==="HP2"?[v]:[]},u=m=>{let v=_s(t[m]);for(let w=1;w<=6&&m+w<t.length;w+=1){let f=t[m+w],g=_s(f);if(Number.isFinite(v)&&Number.isFinite(g)&&g-v>300)break;let p=String(f?.event_type||"");if(p==="flow_hold_clear"&&Number(f?.value_a)===5||(p==="source_start"||p==="topology_change"||p==="cooling_limited")&&Number(f?.cm)===5)return 5;if(p==="flow_hold_start")break}return 0};return t.map((m,v)=>{let w={...m},f=String(m?.event_type||""),g=String(m?.subject||"").toUpperCase(),p=String(m?.reason||""),b=Number(m?.cm)||0;f==="boot_marker"&&(r.HP1=0,r.HP2=0,n.HP1=!1,n.HP2=!1,a=0,i=0,l=0,c="");let S=b,k=!1,E="",q="",M=!1,_="",H=!1,F="",L=l,W=()=>["HP1","HP2"].filter(D=>r[D]===5),x=()=>["HP1","HP2"].filter(D=>r[D]>0&&r[D]!==5);if(f==="source_start")S=b||S,d(g).forEach(D=>{r[D]=S});else if(f==="source_stop")S=d(g).map(N=>r[N]).find(N=>N>0)||S,S===5&&c&&(F=c,c=""),d(g).forEach(N=>{r[N]=0});else if(f==="topology_change")m?.to==="idle"?(S=a||S,a=0):(m?.to==="single"||m?.to==="duo")&&(S=b||a||S,a=S);else if(f==="flow_hold_start"){let D=W(),N=x(),J=Number(m?.value_a);S=p==="flow_postflow"?a||S:J||u(v)||S,p==="flow_postflow"&&S===5&&D.length&&(E=D.join(" + "),M=!0),p==="flow_postflow"&&S!==5&&N.length&&(_=N.join(" + "),H=!0),i=S}else if(f==="flow_hold_clear")S=Number(m?.value_a)||i||a||S,i=0;else if(f==="cooling_limited"||f==="cooling_released"){S=5;let D=W();D.length&&(E=D.join(" + "),q=D.length===2?"BOTH":D[0]),f==="cooling_limited"&&p==="dew_stop"&&(c="dew_stop")}if(f==="defrost_seen_start"||f==="defrost_seen_clear"){let D=g==="HP1"||g==="HP2"?g:"HP1";S===5||b===5?k=!0:f==="defrost_seen_start"?n[D]=!0:n[D]?n[D]=!1:k=!0}w._oq_context_cm=S,w._oq_hidden=k,w._oq_active_cooling_source=E,w._oq_active_cooling_subject=q,w._oq_cooling_runtime_hold=M,w._oq_active_heating_source=_,w._oq_heating_runtime_hold=H,w._oq_cooling_stop_reason=F,w._oq_previous_cm=L,w._oq_mode_transition=XC(m,L);let O=e1(m);return Number.isFinite(O)&&(l=O),w})}function m1(){let e=od(),t=ft(),r=Date.now(),n=Lb(e),a=n.map(l=>c1(l,t,r)).filter(Boolean),i=p1(n,t,r);return[...a,...i].sort((l,c)=>{let d=Ut(c).start-Ut(l).start;if(d!==0)return d;let u={event:0,span:1,aggregate:2};return(u[l.kind]??3)-(u[c.kind]??3)})}function g1(e){let t=m1();return t.length?t:[]}function f1(e){let t=e.filter(r=>!r.timelineHidden);return t.some(r=>r.id===o.controlReplaySelectedEpisode)?t.find(r=>r.id===o.controlReplaySelectedEpisode):t.find(r=>r.kind==="span"&&r.reasonCode==="better_heat")||t.find(r=>r.kind==="span")||t[0]||null}function Tb(e){let t=String(e||"").match(/(\d{1,2}):(\d{2})/);if(!t)return Number.NaN;let r=Number.parseInt(t[1],10),n=Number.parseInt(t[2],10);return!Number.isFinite(r)||!Number.isFinite(n)?Number.NaN:Math.max(0,Math.min(1440,r*60+n))}function Ut(e){if(Number.isFinite(Number(e?.graphStart))){let a=Math.max(0,Math.min(1440,Number(e.graphStart))),i=Number.isFinite(Number(e?.graphEnd))?Math.max(a,Math.min(1440,Number(e.graphEnd))):a;return{start:a,end:i}}let t=String(e?.time||"").match(/\d{1,2}:\d{2}/g)||[],r=Tb(t[0]),n=Tb(t[1]);return!Number.isNaN(r)&&!Number.isNaN(n)?{start:r,end:Math.max(r,n)}:Number.isNaN(r)?{start:430,end:430}:{start:r,end:r}}function id(){let e=Number(o.controlReplayGraphMinute);return Number.isFinite(e)?Math.max(0,Math.min(1440,Math.round(e/5)*5)):430}function h1(e){let t=Math.max(0,Math.round(Number(e)||0));if(t<=5)return"Nu";let r=Math.floor(t/1440),n=Math.floor(t%1440/60),a=t%60;return r>0?n>0?`${r}d ${n}u geleden`:`${r}d geleden`:n>0?a>0?`${n}u ${a}m geleden`:`${n}u geleden`:`${a}m geleden`}function Yu(e,t=La()){let r=Math.max(0,Math.min(1440,Number(e)||0));return t.calendarDay==="today"?_r(Ms(r,"today"),Date.now(),"time"):t.calendarDay==="yesterday"?_r(Ms(r,"yesterday"),Date.now(),"time"):t.id==="week"||t.id==="last48"||t.id==="last3d"||t.id==="custom"?_r(Ms(r,t.id),Date.now(),"weekday"):_r(Ms(r,t.id),Date.now(),"auto")}function b1(e,t){let r=Math.max(0,Math.min(1440,Number(t)||0)),n={span:0,aggregate:1,event:2};return e.filter(i=>!i.timelineHidden).map(i=>{let l=v1(i);if(r<l.start||r>l.end)return null;let c=Math.max(1,l.end-l.start);return{item:i,score:c+(n[i.kind]??3)*.1}}).filter(Boolean).sort((i,l)=>i.score-l.score)[0]?.item||null||w1(e,r)}function Pa(e,t=ft()){let r=Number(e?.duration_s);return!Number.isFinite(r)||r<=0?0:r/60*(1440/Zu(t))}function v1(e){let t=Ut(e),r=String(e?.realEventType||""),n=Pa(e?.rawDecisionEvent);if(r==="defrost_seen_clear"&&n>0){let a=Math.max(5,n);return{start:Math.max(0,t.start-a),end:t.start}}if((r==="flow_hold_clear"||r==="frost_protection_clear")&&n>0){let a=Math.max(1,n);return{start:Math.max(0,t.start-a),end:t.start}}return t.end>t.start?t:e?.kind==="event"?{start:t.start,end:Math.min(1440,t.start+12)}:t}function Ib(e,t,r=!1){let n=La(),a=Yu(e,n),i=r||t>=1440?"nu":Yu(t,n);return`${a}-${i}`}function Fb(e=ft(),t=Date.now()){if(e!=="today")return 1440;let r=new Date(t);return Math.max(0,Math.min(1440,Math.round(r.getHours()*60+r.getMinutes()+r.getSeconds()/60)))}function w1(e,t){let r=[],n=new Map,a=[...e].filter(x=>x.rawDecisionEvent).sort((x,O)=>Ut(x).start-Ut(O).start),i=(x,O,D)=>{n.has(x)||n.set(x,{label:x,item:O,start:D})},l=(x,O)=>{let D=n.get(x);D&&(r.push({...D,end:Math.max(D.start,O)}),n.delete(x))},c=x=>{n.has("Koeling")&&!n.has("HP1")&&!n.has("HP2")&&l("Koeling",x)},d=x=>{let O=String(x||"").toUpperCase(),D=[];return(O==="HP1"||O==="BOTH")&&D.push("HP1"),(O==="HP2"||O==="BOTH")&&D.push("HP2"),D},u=Wb(),m={reasonCode:"keep_current",severity:"normal",modeLabel:u.sourceModes.HP1||u.sourceModes.HP2?`CM${u.sourceModes.HP1||u.sourceModes.HP2}`:"CM?"};u.HP1&&i("HP1",m,0),u.HP2&&i("HP2",m,0),u.boiler&&i("CV-ketel",m,0),u.cooling&&i("Koeling",m,0),a.forEach(x=>{let O=Ut(x),D=String(x.realEventType||""),N=x.rawDecisionEvent||{},J=Number(N._oq_context_cm??N.cm),P=d(N.subject);if(D==="source_start")P.forEach(B=>i(B,x,O.start)),J===5&&i("Koeling",x,O.start);else if(D==="source_stop")P.forEach(B=>l(B,O.start)),(J===5||n.has("Koeling"))&&c(O.start);else if(D==="topology_change")if(N.to==="duo")i("HP1",x,O.start),i("HP2",x,O.start);else if(N.to==="single"){let B=ad(N);B?(i(B,x,O.start),l(B==="HP1"?"HP2":"HP1",O.start)):l("HP2",O.start),c(O.start)}else N.to==="idle"&&(l("HP1",O.start),l("HP2",O.start),l("Koeling",O.start));else D==="boiler_assist_start"||D==="boiler_fallback_start"?i("CV-ketel",x,O.start):D==="boiler_assist_stop"||D==="boiler_fallback_stop"?l("CV-ketel",O.start):D==="flow_hold_clear"&&N.reason==="flow_postflow"&&l("Koeling",O.start)});let v=Fb();n.forEach(x=>{x.start<=v&&r.push({...x,end:v})});let w=r.filter(x=>t>=x.start&&t<=x.end);if(!w.length)return null;let f=new Set(w.map(x=>x.label)),g=["HP1","HP2"].filter(x=>f.has(x)),p=f.has("CV-ketel"),b=f.has("Koeling"),S=w.filter(x=>g.includes(x.label)||x.label==="CV-ketel"||x.label==="Koeling").sort((x,O)=>x.start-O.start)[0]||w[0],k=Math.max(...w.map(x=>x.start)),E=Math.min(...w.map(x=>x.end)),q=[...g,p?"CV-ketel":"",b?"Koeling":""].filter(Boolean).join(" + "),M="Bron actief",_="Deze bron was op dit tijdstip actief.",H="De grafiek toont hier een lopende periode. De start of stop staat als los beslismoment in de tijdlijn.",F="De controller blijft opnieuw beoordelen of deze bron nodig blijft.",L=S.item?.reasonCode||"keep_current",W="normal";return b?(M="Koeling actief",_=g.length?`${g.join(" en ")} koelde${g.length===1?"":"n"} op dit tijdstip binnen de normale regeling.`:"De koeling was op dit tijdstip actief.",H="De controller bewaakt daarbij waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij de normale regeling.",F="Koeling gaat door zolang er koelvraag is en de veiligheidsmarges vrij blijven.",q=g.length===2?gt("BOTH",5):g.length===1?gt(g[0],5):"Koeling",L=S.item?.reasonCode||"keep_current",W=S.item?.severity||"normal"):g.length===2&&p?(M="Warmtepompen en CV-ketel actief",_="Beide warmtepompen draaiden en de CV-ketel ondersteunde tijdelijk.",H="De warmtepompen leverden de basis. De CV-ketel vulde alleen aan zolang extra vermogen nodig was.",F="CV-ondersteuning stopt zodra de warmtepompen de vraag weer zelf rustig kunnen dragen.",L="boiler_assist",W="limited"):g.length===2?(M="Twee warmtepompen verwarmen",_="HP1 en HP2 verwarmden tegelijk op dit tijdstip.",H="Twee gelijkwaardige warmtepompen kunnen hoge vraag rustiger leveren dan \xE9\xE9n warmtepomp op hoge belasting.",F="E\xE9n warmtepomp stopt zodra single-bedrijf weer voldoende of rustiger is.",q=gt("BOTH",2),L="better_heat"):g.length===1&&p?(M=`${g[0]} en CV-ketel actief`,_="De warmtepomp draaide en de CV-ketel ondersteunde tijdelijk.",H="De CV-ketel vult alleen aan wanneer de warmtepomp de actuele vraag niet rustig genoeg kan dragen.",F="De CV-ketel stopt zodra aanvullende ondersteuning niet meer nodig is.",L="boiler_assist",W="limited"):g.length===1?(M=`${g[0]} verwarmt`,_=`${g[0]} leverde op dit tijdstip warmte.`,H="De andere warmtepomp blijft beschikbaar. De controller schakelt pas bij of wisselt pas wanneer dat rustiger of nuttiger is.",F="Bij stijgende vraag kan een tweede warmtepomp bijschakelen; bij dalende vraag stopt deze bron.",q=gt(g[0],2),L=S.item?.reasonCode||"runtime_lead"):p&&(M="CV-ketel ondersteunt",_="De CV-ketel leverde op dit tijdstip extra vermogen.",H="CV-ondersteuning is aanvullend op de warmtepompen en blijft tijdelijk.",F="De CV-ketel stopt zodra de extra capaciteit niet meer nodig is.",L="boiler_assist",W="limited"),{id:`graph-context-${Math.round(t)}-${Array.from(f).join("-")}`,kind:"span",severity:W,time:Ib(k,E),duration:"",title:M,summary:_,detailTitle:"Wat gebeurt hier?",detail:H,next:F,source:q||"Systeem",reasonCode:L,modeLabel:S.item?.modeLabel||"CM?",graphStart:k,graphEnd:E}}function y1(){let e=Xu();return`
      <div class="oq-working-control-group">
        <span class="oq-working-control-label">Weergave</span>
        <div class="oq-working-tabs" role="tablist" aria-label="Beslislog weergave">
          ${xb().map(t=>`
            <button
              class="oq-working-tab${e===t.id?" is-active":""}"
              type="button"
              role="tab"
              aria-selected="${e===t.id?"true":"false"}"
              data-oq-action="select-control-replay-tab"
              data-replay-tab="${s(t.id)}"
            >
              ${ge(t.icon,"oq-working-tab-icon")}
              <span>${s(t.label)}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `}function S1(){let e=ft(),t=La(),r=zC(),n=Bo().filter(m=>!m.quick&&!m.custom),a=UC(),i=GC(a),l=yb(a.start),c=yb(a.end),d=o.controlReplayPeriodMenuOpen,u=e==="custom"?"Eigen periode":r.some(m=>m.id===e)?"Kies periode":t.shortLabel;return`
      <div class="oq-working-control-group oq-working-control-group--period">
        <span class="oq-working-control-label">Periode</span>
        <div class="oq-working-window-controls" role="group" aria-label="Periode">
          <div class="oq-working-window-choices" aria-label="Snelle periodekeuzes">
          ${r.map(m=>`
            <button
              class="oq-working-window-choice${e===m.id?" is-active":""}"
              type="button"
              data-oq-action="select-control-replay-window"
              data-replay-window="${s(m.id)}"
              aria-pressed="${e===m.id?"true":"false"}"
              aria-label="${s(m.label)}"
            >
              ${s(m.shortLabel)}
            </button>
          `).join("")}
          </div>
          <div class="oq-working-period-menu" data-oq-control-replay-period-menu>
            <button
              class="oq-working-period-menu-toggle${d||!r.some(m=>m.id===e)?" is-active":""}"
              type="button"
              aria-expanded="${d?"true":"false"}"
              aria-haspopup="dialog"
              data-oq-action="toggle-control-replay-period-menu"
            >
              <span>${s(u)}</span>
              <span class="oq-working-period-menu-chevron" aria-hidden="true"></span>
            </button>
            ${d?`
              <section class="oq-working-period-popover" role="dialog" aria-label="Kies periode">
                <div class="oq-working-period-popover-head">
                  <strong>Ander tijdvenster</strong>
                </div>
                <div class="oq-working-period-option-grid">
                  ${n.map(m=>`
                    <button
                      class="oq-working-period-option${e===m.id?" is-active":""}"
                      type="button"
                      data-oq-action="select-control-replay-window"
                      data-replay-window="${s(m.id)}"
                      aria-pressed="${e===m.id?"true":"false"}"
                    >${s(m.shortLabel)}</button>
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
                            ${Sb(l.hour)}
                          </select>
                        </div>
                      </label>
                      <label>
                        <span>Tot</span>
                        <div class="oq-working-period-date-hour">
                          <input type="date" min="${s(i.endMinDate)}" max="${s(i.endMaxDate)}" value="${s(c.date)}" data-oq-control-replay-custom-end-date data-oq-control-replay-custom-input>
                          <select aria-label="Uur tot" data-oq-control-replay-custom-end-hour data-oq-control-replay-custom-input>
                            ${Sb(c.hour)}
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
    `}function k1(e){let t=ed(e.severity);return`
      <section class="oq-working-now oq-working-now--${s(t.tone)}">
        <div class="oq-working-now-main">
          <span class="oq-working-eyebrow">Actuele situatie</span>
          <h2>${s(e.title)}${td(e)}</h2>
          <p>${s(e.copy)}</p>
          <div class="oq-working-pill-row">
            ${Hr(t.label,t.tone,"shield")}
            ${Hr(e.reasonLabel,"info","target")}
            ${Hr(e.sinceLabel,"context")}
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
    `}function q1(e,t){let r=ed(e.severity),n=t&&t.id===e.id,a=_b(e.kind),i=Ab(e);return`
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
            ${td(e)}
            ${e.count?`<em>${s(e.count)}</em>`:""}
          </span>
          <span class="oq-working-entry-summary">${s(e.summary)}</span>
          <span class="oq-working-entry-meta">
            <span>${s(e.source)}</span>
            ${i?`<span class="oq-working-entry-meta-mode">${s(i)}</span>`:""}
            <span>${s(e.reasonLabel||$b(e.reasonCode))}</span>
            ${e.duration?`<span>Duur: ${s(e.duration)}</span>`:""}
          </span>
        </span>
        <span class="oq-working-entry-status">${s(r.label)}</span>
      </button>
    `}function jb(e){if(!e)return"";let t=ed(e.severity),r=Rr(e.reasonCode),n=e.reasonLabel||r.label,a=e.reasonSummary||r.summary,i=Rb(e),l=Ab(e),c=Array.isArray(e.checks)?e.checks:r.checks;return`
      <aside class="oq-working-detail oq-working-detail--${s(t.tone)}">
        <div>
          <span class="oq-working-eyebrow">Geselecteerd</span>
          <h3>${s(e.title)}${td(e)}</h3>
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
        ${Hb(i)}
        ${c.length?`
          <div class="oq-working-checks" aria-label="Beslisfactoren">
            ${c.map(d=>`<span>${ge("shield","oq-working-reason-icon")} ${s(d)}</span>`).join("")}
          </div>
        `:""}
        <div class="oq-working-pill-row">
          ${Hr(t.label,t.tone,"shield")}
          ${Hr(n,"info","target")}
          ${Hr(e.source,"context")}
        </div>
        <details class="oq-working-support" data-replay-support-item="${s(e.id)}"${o.controlReplaySupportDetailsItemId===e.id?" open":""}>
          <summary data-oq-action="toggle-control-replay-support-details">Details voor support</summary>
          <dl>
            <div><dt>Record</dt><dd>${s(_b(e.kind))}</dd></div>
            <div><dt>Bron</dt><dd>${s(e.source)}</dd></div>
            <div><dt>Control mode</dt><dd>${s(e.modeLabel)}</dd></div>
            ${l?`<div><dt>CM wijziging</dt><dd>${s(l)}</dd></div>`:""}
            <div><dt>Reason code</dt><dd>${s(e.reasonCode)}</dd></div>
          </dl>
        </details>
      </aside>
    `}function E1(e){return`
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
    `}function $s(e,t){return`
      <div class="oq-working-empty">
        <strong>${s(e)}</strong>
        <span>${s(t)}</span>
      </div>
    `}function T1(e,t){let r=La(),a=e.filter(c=>!c.timelineHidden).slice(0,80),i=String(o.decisionLogError||"").trim(),l=!a.length&&!o.decisionLog&&!i;return`
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
              </div>`:i?$s("Beslislog niet beschikbaar",`De firmwarelog kon niet worden geladen (${i}). Dit betekent niet dat deze periode leeg is.`):l?$s("Beslislog laden","De controllerkeuzes worden opgehaald. Dit duurt meestal maar heel kort."):$s("Nog geen gebeurtenissen","De beslislog is leeg voor deze periode. Nieuwe controllerkeuzes verschijnen hier zodra de firmware ze vastlegt.")}
        </section>
        ${t?jb(t):""}
      </div>
    `}function zu(e,t,r,n,a,i=""){return`
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
    `}function C1(e){let t=Rr(e.primaryReason),r=Rb({primaryReason:e.primaryReason,source:e.hp1Running&&e.hp2Running?"HP1 + HP2":e.hp1Running?"HP1":e.hp2Running?"HP2":"Geen bron"}),n=!!e.coolingProtection,a=!!e.coolingCapped,i=e.primaryReason==="restart_wait",l=e.primaryReason==="buffer_stop",c=e.primaryReason==="startup_inhibit",d=e.primaryReason==="sticky_protection",u=c?"Startvoorwaarde":l?"Koelregeling":"Bescherming",m=c?"Wacht na herstart":l?"Water al koud genoeg":n?i?"Wacht op veilige herstart":"Koeling tijdelijk beperkt":a?"Koeling met ingesteld maximum":d?"Geen comfortvraag actief":"Geen beperking actief",v=c?"Na een reboot blijft de compressor eenmaal de minimale uit-tijd uit. Bij aanhoudende vraag start de gekozen warmtepomp daarna automatisch.":l?"Dit is normale regeling. De koelvraag blijft actief, maar de warmtepomp hoeft nu geen extra koude aan het water toe te voegen.":n?i?"De koelvraag blijft aanwezig. De warmtepomp start opnieuw zodra de veilige marge voldoende is hersteld.":"De aanvoer blijft boven de veilige grens. Daarom koelt het systeem tijdelijk minder hard.":a?"Dit is normale koeling binnen de ingestelde softwaregrens. Dauwpunt en waterflow blijven wel gewoon bewaakt.":d?"Alleen de pomp draait kort. De warmtepompen blijven uit en er worden geen compressorstarts geteld.":"Ontdooien, minimum rusttijd, dauwpunt en waterflow blijven bewaakt. Ze verschijnen hier zodra ze gedrag begrenzen.",w=c?[["Vraag actief","info","activity"],[e.startupInhibit?.remainingLabel||"Wachttijd actief","normal","clock"],["Automatische start","context","play"]]:l?[["Koelvraag actief","info","snowflake"],["Water koud genoeg","normal","droplet"],["Automatische herstart","context","activity"]]:n?[["Dauwpunt bewaakt","limited","droplet"],[`Max. niveau ${e.cooling.allowedMax}`,"info","target"],[`Nu niveau ${e.cooling.limitedDemand}`,"context","bar-chart"]]:a?[[`Ingesteld max. ${e.cooling.allowedMax}`,"info","target"],[`Nu niveau ${e.cooling.limitedDemand}`,"normal","bar-chart"],["Marge bewaakt","context","shield"]]:d?[["Korte pomprun","normal","shield"],["Geen koelvraag","context","snowflake"],["Geen warmtepompstart","info","activity"]]:[["Ontdooien vrij","normal","snowflake"],["Rusttijd vrij","normal","activity"],["Waterflow bewaakt","info","waves"]],f=e.cooling.requestActive||n||a||e.strategyLabel==="Koeling",g=[["Aanvoer",e.supplyTemp],["Buiten",e.outsideTemp],["Flow",e.flow]];return f||g.push(["Strategie",e.strategyLabel]),f&&(g.push(["Dauwpunt",e.cooling.dewPoint]),g.push(["Veilige min.",e.cooling.safeSupply])),`
      <div class="oq-working-status">
        ${k1(e)}
        <div class="oq-working-status-grid">
          <section class="oq-working-status-main${r?"":" oq-working-status-main--wide"}">
            <span class="oq-working-eyebrow">Waarom deze keuze?</span>
            <h3>${s(t.label)}</h3>
            <p>${s(t.summary)}</p>
            <div class="oq-working-reason-list">
              ${t.checks.map(p=>`<span>${ge("target","oq-working-reason-icon")} ${s(p)}</span>`).join("")}
            </div>
          </section>
          ${r?`
            <section class="oq-working-optimizer-panel">
              ${Hb(r)}
            </section>
          `:""}
          <section class="oq-working-source-grid" aria-label="Bronnen">
            ${zu("HP1",e.hp1Status,e.hp1Starts,e.hp1Hours,e.hp1Running)}
            ${zu("HP2",e.hp2Status,e.hp2Starts,e.hp2Hours,e.hp2Running)}
            ${zu("CV",e.cvStatus,"","",e.cvStatus==="Actief",f?"Geen rol bij koelen.":"Tijdelijke ondersteuning bij extra warmtevraag.")}
          </section>
          <section class="oq-working-guard-panel">
            <span class="oq-working-eyebrow">${s(u)}</span>
            <h3>${s(m)}</h3>
            <p>${s(v)}</p>
            <div class="oq-working-pill-row">
              ${w.map(([p,b,S])=>Hr(p,b,S)).join("")}
            </div>
          </section>
          <section class="oq-working-telemetry">
            <span class="oq-working-eyebrow">Context</span>
            <dl>
              ${g.map(([p,b])=>`<div><dt>${s(p)}</dt><dd>${s(b)}</dd></div>`).join("")}
            </dl>
          </section>
        </div>
      </div>
    `}function x1(e,t,r){return`
      <div class="oq-working-chart-lane">
        <span>${s(e)}</span>
        <div class="oq-working-chart-track">
          ${r.map(n=>`
            <i class="oq-working-chart-segment oq-working-chart-segment--${s(n.tone||t)}" style="--oq-chart-left:${bb(n.start)}%;--oq-chart-width:${bb(n.width)}%;"></i>
          `).join("")}
        </div>
      </div>
    `}function Wb(){let e=Dr(),t={HP1:!1,HP2:!1,boiler:!1,cooling:!1},r={HP1:0,HP2:0},n=i=>{let l=String(i||"").toUpperCase();return l==="BOTH"?["HP1","HP2"]:l==="HP1"||l==="HP2"?[l]:[]};return Lb(od()).filter(i=>i&&!i._oq_hidden).sort((i,l)=>{let c=po(i),d=po(l);return(Number.isFinite(c)?c:Number.POSITIVE_INFINITY)-(Number.isFinite(d)?d:Number.POSITIVE_INFINITY)}).forEach(i=>{let l=po(i);if(!Number.isFinite(l)||l>e.start)return;let c=String(i.event_type||""),d=Number(i._oq_context_cm??i.cm);c==="source_start"?n(i.subject).forEach(u=>{t[u]=!0,r[u]=d}):c==="source_stop"?n(i.subject).forEach(u=>{t[u]=!1,r[u]=0}):c==="boiler_assist_start"||c==="boiler_fallback_start"?t.boiler=!0:(c==="boiler_assist_stop"||c==="boiler_fallback_stop")&&(t.boiler=!1)}),t.cooling=["HP1","HP2"].some(i=>t[i]&&r[i]===5),{...t,sourceModes:r}}function M1(e){if(!e.some(f=>f.rawDecisionEvent))return null;let t=[{label:"HP1",tone:"running",segments:[]},{label:"HP2",tone:"running",segments:[]},{label:"CV-ketel",tone:"assist",segments:[]},{label:"Koeling",tone:"cooling",segments:[]},{label:"Ontdooien",tone:"defrost",segments:[]},{label:"Bescherming",tone:"limited",segments:[]}],r=Object.fromEntries(t.map(f=>[f.label,f])),n=(f,g,p,b,S=.5)=>{if(!r[f]||!Number.isFinite(g))return;let k=Math.max(0,Math.min(1440,Number(g))),E=Number.isFinite(p)?Math.max(k,Math.min(1440,Number(p))):k,q=Math.max(S,(E-k)/1440*100);r[f].segments.push({start:k/1440*100,width:q,tone:b})},a=(f,g,p,b=.5)=>{let S=Ut(g);n(f,S.start,S.end,p,b)},i=[...e].filter(f=>f.rawDecisionEvent).sort((f,g)=>Ut(f).start-Ut(g).start),l={HP1:null,HP2:null,"CV-ketel":null,Koeling:null},c=(f,g)=>{l[f]==null&&(l[f]=g)},d=(f,g,p="running",b=.8)=>l[f]==null?!1:(n(f,l[f],g,p,b),l[f]=null,!0),u=f=>{l.Koeling!=null&&l.HP1==null&&l.HP2==null&&d("Koeling",f,"cooling",.8)},m={},v=Wb();v.HP1&&c("HP1",0),v.HP2&&c("HP2",0),v.boiler&&c("CV-ketel",0),v.cooling&&c("Koeling",0),i.forEach(f=>{let g=Ut(f),p=String(f.realEventType||""),b=String(f.rawDecisionEvent?.subject||"").toUpperCase(),S=Number(f.rawDecisionEvent?._oq_context_cm??f.rawDecisionEvent?.cm),k=[];if((b==="HP1"||b==="BOTH")&&k.push("HP1"),(b==="HP2"||b==="BOTH")&&k.push("HP2"),p==="source_start")k.forEach(q=>c(q,g.start)),S===5&&c("Koeling",g.start);else if(p==="source_stop")k.forEach(q=>{d(q,g.start,"running")||a(q,f,"standby",.55)}),(S===5||l.Koeling!=null)&&u(g.start);else if(p==="topology_change")if(f.rawDecisionEvent?.to==="duo")c("HP1",g.start),c("HP2",g.start);else if(f.rawDecisionEvent?.to==="single"){let q=ad(f.rawDecisionEvent);q?(c(q,g.start),d(q==="HP1"?"HP2":"HP1",g.start,"running",.8)):d("HP2",g.start,"running",.8),u(g.start)}else f.rawDecisionEvent?.to==="idle"&&(d("HP1",g.start,"running",.8),d("HP2",g.start,"running",.8),d("Koeling",g.start,"cooling",.8));else if(p==="boiler_assist_start"||p==="boiler_fallback_start")c("CV-ketel",g.start);else if(p==="boiler_assist_stop"||p==="boiler_fallback_stop")d("CV-ketel",g.start,"assist",.65)||a("CV-ketel",f,"standby",.65);else if(p==="candidate_blocked"||p==="flow_hold_start")a("Bescherming",f,"limited",.7);else if(p==="flow_hold_clear"){let q=Math.max(1,Pa(f.rawDecisionEvent));n("Bescherming",Math.max(0,g.start-q),g.start,"limited",.7),f.rawDecisionEvent?.reason==="flow_postflow"&&d("Koeling",g.start,"cooling",.8)}if(p==="defrost_seen_start")m[b||"SYSTEM"]=g.start;else if(p==="defrost_seen_clear"&&m[b||"SYSTEM"]!=null)n("Ontdooien",m[b||"SYSTEM"],g.start,"defrost",.7),m[b||"SYSTEM"]=null;else if(p==="defrost_seen_clear"&&Number(f.rawDecisionEvent?.duration_s)>0){let q=Math.max(5,Pa(f.rawDecisionEvent));n("Ontdooien",Math.max(0,g.start-q),g.start,"defrost",.7)}if(!(p==="candidate_blocked"||p==="flow_hold_start"||p==="flow_hold_clear")&&(f.severity==="limited"||f.severity==="attention"||p==="decision_blocked"||p==="decision_hold")&&a("Bescherming",f,f.severity==="attention"?"assist":"limited",.7),p==="sticky_pump_run"&&a("Bescherming",f,"safe",.6),p==="frost_protection_start")a("Bescherming",f,"limited",.8);else if(p==="frost_protection_clear"){let q=Math.max(1,Pa(f.rawDecisionEvent));n("Bescherming",Math.max(0,g.start-q),g.start,"limited",.8)}});let w=Fb();return Object.entries(l).forEach(([f,g])=>{g!=null&&g<=w&&n(f,g,w,f==="CV-ketel"?"assist":f==="Koeling"?"cooling":"running",.8)}),Object.values(m).forEach(f=>{f!=null&&n("Ontdooien",f,Math.min(1440,f+7),"defrost",.7)}),t.filter(f=>f.segments.length)}function $1(e){let t=M1(e);return t||[]}function A1(e,t){let r=id(),n=r/1440*100,a=La(),i=Yu(r,a),l=$1(t),c=l.length?l.map(d=>x1(d.label,d.tone,d.segments)).join(""):$s("Nog geen grafiekdata","De grafiek gebruikt alleen echte beslislog-records. Nieuwe bronwissels, defrosts of begrenzingen verschijnen hier vanzelf.");return`
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
            ${a.axis.map(d=>`<span>${s(d)}</span>`).join("")}
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
        ${e?jb(e):E1(i)}
      </div>
    `}function Bb(e){let t=Db(e);return we({tab:Xu(),window:ft(),periodMenuOpen:o.controlReplayPeriodMenuOpen,customPeriodOpen:o.controlReplayCustomPeriodOpen,customStart:o.controlReplayCustomStart,customEnd:o.controlReplayCustomEnd,customPeriodError:o.controlReplayCustomPeriodError,selected:o.controlReplaySelectedEpisode,supportDetailsItem:o.controlReplaySupportDetailsItemId,graphMinute:id(),mode:t.modeLabel,title:t.title,reason:t.primaryReason,hp1Running:t.hp1Running,hp2Running:t.hp2Running,hp1Starts:t.hp1Starts,hp2Starts:t.hp2Starts,hp1Hours:t.hp1Hours,hp2Hours:t.hp2Hours,cvStatus:t.cvStatus,strategy:t.strategyLabel,outside:t.outsideTemp,supply:t.supplyTemp,flow:t.flow,cooling:t.cooling,coolingProtection:t.coolingProtection,coolingCapped:t.coolingCapped,decisionLog:o.decisionLogSignature,decisionLogError:o.decisionLogError,theme:o.overviewTheme})}function Vb(e){let t=Db(e),r=g1(e),n=f1(r),a=Xu(),i=a==="graphs"?b1(r,id()):n,l=a==="status"?C1(t):a==="graphs"?A1(i,r):T1(r,i),c=a==="status"?"":S1();return`
      <section class="oq-working" data-render-signature="${s(Bb(e))}">
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
    `}function Kb(){let e=Ha();return`
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${s(o.overviewTheme)}">
          ${Vb(e)}
        </div>
      </section>
    `}function _1(){if(!o.root||o.appView!=="control")return!1;let e=o.root.querySelector(".oq-overview-board"),t=e?e.querySelector(".oq-working"):null;if(!e||!t)return!1;let r=document.activeElement;if(r&&r.closest("[data-oq-control-replay-period-menu]")&&r.matches("[data-oq-control-replay-custom-input]"))return!0;let n=`oq-overview-board oq-overview-board--${o.overviewTheme}`;e.className!==n&&(e.className=n);let a=Ha();return rt(t,Bb(a),Vb(a))||!0}xo({patchControlReplayDom:_1});function R1(){let e=document.activeElement;return o.appView!=="settings"||!o.root?.contains(e)||!e?.dataset?.oqField?null:{field:e.dataset.oqField,modalId:e.closest("[data-oq-modal]")?.dataset.oqModal||"",selectionStart:e.selectionStart,selectionEnd:e.selectionEnd}}function H1(e){if(!e||!o.root)return;let t=document.activeElement.closest("[data-oq-modal]");if((t?.dataset.oqModal||"")!==e.modalId)return;let r=(t||o.root).querySelector(`[data-oq-field="${e.field}"]`);!r||r.disabled||(r.focus({preventScroll:!0}),typeof e.selectionStart=="number"&&typeof r.setSelectionRange=="function"&&r.setSelectionRange(e.selectionStart,e.selectionEnd))}function D1(){return`
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${o.controlError?`<p class="oq-helper-error" role="alert">${s(o.controlError)}</p>`:""}
        ${o.controlNotice?`<p class="oq-helper-notice" role="status">${s(o.controlNotice)}</p>`:""}
        ${qh()}
        ${Eh()}
      </section>
    `}function N1(){return ee({modalId:"initial-load",titleId:"oq-loading-modal-title",kicker:"OpenQuatt",title:"OpenQuatt laden",backdropClass:"oq-helper-modal-backdrop--loading",modalClass:"oq-helper-modal--reconnect oq-helper-modal--loading",role:"status",ariaLive:"polite",bodyMarkup:`
        <p class="oq-helper-modal-copy">We wachten tot de zichtbare gegevens compleet zijn, zodat de interface niet half gevuld verschijnt. Dit kan enkele seconden duren.</p>
        <div class="oq-helper-reconnect-status oq-helper-loading-status">
          <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
          <div>
            <strong>Eerste synchronisatie</strong>
            <span>De velden op dit scherm worden compleet klaargezet.</span>
          </div>
        </div>
      `})}function O1(){return o.appView==="overview"?gb():o.appView==="control"?Kb():o.appView==="energy"?Ih():o.appView==="diagnosis"?ib():o.appView==="results"?Fh():D1()}function P1(){let e=Gc();return`
      <footer class="oq-helper-powered-by" aria-label="Platform">
        ${e&&e!=="\u2014"?`<span class="oq-helper-footer-version">OpenQuatt ${s(e)}</span>`:""}
        <nav class="oq-helper-footer-links" aria-label="OpenQuatt links">
          <a href="https://openquatt.github.io/OpenQuatt/" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://github.com/OpenQuatt/OpenQuatt" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a class="oq-helper-powered-by-link" href="https://esphome.io/" target="_blank" rel="noreferrer" aria-label="Built with ESPHome">
          <span>Built with</span>
          <img class="oq-helper-powered-by-logo" src="https://media.esphome.io/logo/logo-text-on-light.svg" alt="ESPHome" loading="lazy" decoding="async">
        </a>
      </footer>
    `}function L1(){let e=typeof document<"u"?document.activeElement:null;return!e||typeof e.matches!="function"?null:e.matches("select[data-oq-dev-control]")?e:null}function I1(e){if(!e||o.deferDevControlSelectRender)return;o.deferDevControlSelectRender=!0;let t=()=>{e.removeEventListener("blur",t),e.removeEventListener("change",t),o.deferDevControlSelectRender=!1,window.setTimeout(()=>zb(),0)};e.addEventListener("blur",t,{once:!0}),e.addEventListener("change",t,{once:!0})}function F1(){if(o.nativeOpen||o.appView!=="settings"||o.renderedAppView!=="settings"||o.renderedSettingsGroup!==o.settingsGroup)return null;let e=document.scrollingElement||document.documentElement,t=Number(window.scrollY||e?.scrollTop||0);return!Number.isFinite(t)||t<=0?null:{group:o.settingsGroup,left:Number(window.scrollX||e?.scrollLeft||0),top:t}}function j1(e){if(!e)return;let t=(o.settingsPageScrollRestoreToken||0)+1;o.settingsPageScrollRestoreToken=t;let r=()=>{if(t!==o.settingsPageScrollRestoreToken||o.nativeOpen||o.appView!=="settings"||o.settingsGroup!==e.group)return;let n=document.scrollingElement||document.documentElement;if(!n)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),i=Math.min(e.top,a);window.scrollTo({left:e.left,top:i,behavior:"auto"})};window.requestAnimationFrame(()=>{r(),window.requestAnimationFrame(r),window.setTimeout(r,80)})}function zb(){if(!o.root)return;let e=L1();if(e){I1(e);return}let t=R1(),r=dp(o.root),n=o.systemModal==="webserver-logs"?no():null,a=o.systemModal==="cm100-commissioning"?Xm():null,i=String(o.systemModal||"").startsWith("service-task-")?tg():null,l=o.systemModal==="history-storage"?rg():null,c=o.systemModal==="settings-backup-restore"?ag():null,d=o.quickStartModalOpen?gh():null,u=F1();if(o.nativeOpen){o.root.innerHTML=`
        ${Qc()}
        ${Wf()}
      `,dl(o.root),ml(o.root,r),o.renderedAppView="native",o.renderedSettingsGroup="",o.settingsRenderSignature="",o.headerRenderSignature=ss(),Vr({mqttSensorsModalRenderSignature:""}),zn(),da(),bc(),il(),al(),ao(n),mc(a),gc(i),fc(l),hc(c),lu(d);return}let m=O1(),v=o.loadingEntities?`${m}${N1()}`:m,w=o.appView==="overview"||o.appView==="control"||o.appView==="energy"||o.appView==="diagnosis"||o.appView==="results";o.root.innerHTML=`
      ${Qc()}
      <div class="oq-helper-shell${o.overviewTheme==="dark"?" oq-helper-shell--dark":""}">
        <div class="oq-helper-card${w?" oq-helper-card--wide-flush":""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${ll}
              <div class="oq-helper-brand-copy">
                  <h1>OpenQuatt Control</h1>
                </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${jf()}
          </div>
      ${Jd()}
      ${Of()}
      ${v}
      ${P1()}
        </div>
      </div>
      ${ph()}
      ${yg()}
      ${Bf()}
      ${vg()}
    `,dl(o.root),ml(o.root,r),H1(t),o.renderedAppView=o.appView,o.renderedSettingsGroup=o.appView==="settings"?o.settingsGroup:"",o.settingsRenderSignature=o.appView==="settings"?Vn():"",o.headerRenderSignature=ss(),Vr({mqttSensorsModalRenderSignature:o.systemModal==="mqtt-sensors"?ki():""}),Kn(),hb(),bc(),rr(),Aa(),da(),il(),al(),ao(n),mc(a),gc(i),fc(l),hc(c),lu(d),j1(u)}Zd(zb);function Gb({stepId:e,telemetryAvailable:t,choiceAvailable:r,choiceValue:n}){let a=n===!1||["off","false","0"].includes(String(n).trim().toLowerCase());return e==="usage-telemetry"&&t&&r&&a}function Ub(e){return e===!0||["on","true","1"].includes(String(e).trim().toLowerCase())?!0:e===!1||["off","false","0"].includes(String(e).trim().toLowerCase())?!1:null}function Cn({telemetryValue:e,choiceValue:t,expectedEnabled:r}){let n=Ub(e);return Ub(t)===!0&&n!==null&&n===r}async function W1(e,t){let r="usageTelemetryEnabled",n=o.entities[r]?{...o.entities[r]}:null;o.busyAction=`switch-${r}`,o.controlNotice="",o.controlError="",h();try{let a=t?"turn_on":"turn_off",i=await fetch(Q(e.domain,e.name,a),{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);if(await z([r,"usageTelemetryChoiceConfigured","usageTelemetryInstallationId"],"all"),!Cn({telemetryValue:T(r),choiceValue:T("usageTelemetryChoiceConfigured"),expectedEnabled:t}))throw new Error("de controller heeft de opgeslagen keuze niet bevestigd");o.controlNotice=`${e.name} ${t?"ingeschakeld":"uitgeschakeld"}.`}catch(a){let i=!1;try{let l=await fetch(Q(e.domain,e.name,"turn_off"),{method:"POST"});if(!l.ok)throw new Error(`HTTP ${l.status}`);await z([r,"usageTelemetryChoiceConfigured","usageTelemetryInstallationId"],"all"),i=Cn({telemetryValue:T(r),choiceValue:T("usageTelemetryChoiceConfigured"),expectedEnabled:!1})}catch{}i?o.controlNotice=t?"Inschakelen kon niet worden bevestigd. Delen is veilig uitgeschakeld.":"Delen is uitgeschakeld.":(n?o.entities[r]=n:delete o.entities[r],o.controlError=`De keuze kon niet veilig worden bevestigd. Controleer de verbinding en probeer opnieuw (${a.message}).`)}finally{o.busyAction="",h()}}async function Vo(e,t){let r=I[e],n=o.entities[e]?{...o.entities[e]}:null,a=e==="controlModeOverride";o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",a||(o.entities[e]={...o.entities[e]||{},state:t,value:t}),h();try{let i=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(t)}`,{method:"POST"});if(!i.ok)throw new Error(`HTTP ${i.status}`);if(a){let l=null;try{let d=await fetch(Q(r.domain,r.name),{cache:"no-store"});if(!d.ok)throw new Error(`HTTP ${d.status}`);l=await d.json()}catch(d){let u=t==="Auto"?String(n?.value??n?.state??"Force CM0"):t;throw o.entities[e]={...n||{},state:u,value:u},new Error(`de controllerstatus kon niet worden bevestigd (${d.message})`)}let c=String(l?.value??l?.state??"");if(o.entities[e]={...n||{},...l||{}},c!==t)throw new Error(`de controller meldt nog "${c||"onbekend"}"`)}delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=a?t==="Auto"?"De normale moduskeuze is weer actief.":`${t} is tijdelijk actief en verloopt automatisch na maximaal 30 minuten.`:`${r.name} bijgewerkt.`,e==="firmwareUpdateChannel"?(Re({updateInstallCompleted:!1,updateInstallCompletedVersion:""}),o.entities.firmwareUpdateChannel={...o.entities.firmwareUpdateChannel||{},state:t,value:t},ia(t),h(),await sa(),o.controlNotice="Releasekanaal bijgewerkt."):e==="debugLevel"?(o.controlNotice="Logger level bijgewerkt.",o.systemModal==="webserver-logs"&&Ho()):e==="webServerLogHistoryEnabled"?(["1","on","true"].includes(String(t).toLowerCase())?(o.webServerLogHistoryLoaded=!1,Ho()):gr(),o.systemModal==="webserver-logs"&&h()):o.appView==="settings"?await z(lr(),"all"):await z(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...nt,...Uo],"state"),e==="strategy"&&o.appView!=="settings"&&await z(se(t)?ke.map(l=>l.key):xt,"state")}catch(i){!a&&n&&(o.entities[e]=n),o.controlError=`${r.name} kon niet worden bijgewerkt. ${i.message}`}finally{o.busyAction="",h()}}function B1(e,t,r=o.entities){let n=pe(t);if(!Number.isFinite(n))return"";if(e==="boilerSupportStartThreshold"){let a=pe(r.boilerSupportStopThreshold?.value??r.boilerSupportStopThreshold?.state);if(Number.isFinite(a)&&n<=a)return`De startgrens moet hoger zijn dan de stopgrens (${a} W).`}if(e==="boilerSupportStopThreshold"){let a=pe(r.boilerSupportStartThreshold?.value??r.boilerSupportStartThreshold?.state);if(Number.isFinite(a)&&n>=a)return`De stopgrens moet lager zijn dan de startgrens (${a} W).`}return""}async function Hs(e,t){let r=I[e];if(r){if(e==="usageTelemetryEnabled"){await W1(r,t);return}o.busyAction=`switch-${e}`,o.controlNotice="",o.controlError="",h();try{let n=t?"turn_on":"turn_off",a=await fetch(Q(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:t,state:t},o.controlNotice=`${r.name} ${t?"ingeschakeld":"uitgeschakeld"}.`,o.busyAction="",o.appView==="overview"?await z([...In,...at,"setupComplete",...Yt],"state"):o.appView==="settings"?(await z(lr(),"all"),Qr.includes(e)&&Io()):await z(["setupComplete","strategy","openquattEnabled","manualCoolingEnable","silentModeOverride",...nt,...Uo],"state"),e==="webServerLogHistoryEnabled"&&(t?(o.webServerLogHistoryLoaded=!1,Ho()):gr(),o.systemModal==="webserver-logs"&&h()),h()}catch(n){o.controlError=`${r.name} aanpassen mislukt (${n.message}).`,h()}finally{o.busyAction="",h()}}}async function Ia(e,t,r=""){let n=I[e],a=qe(e,t),i=B1(e,a);if(i){o.controlNotice="",o.controlError=i,o.inputDrafts[e]=String(t??""),o.drafts[e]=a,h();return}o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=a,h();try{let l=await fetch(`${Q(n.domain,n.name,"set")}?value=${encodeURIComponent(a)}`,{method:"POST"});if(!l.ok)throw new Error(`HTTP ${l.status}`);delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=r||`${n.name} bijgewerkt.`,await z(o.appView==="settings"?lr():[...new Set([e,"setupComplete","strategy",...nt,...Uo])],"state")}catch(l){o.inputDrafts[e]=String(a).replace(".",","),o.controlError=`${n.name} kon niet worden bijgewerkt. ${l.message}`}finally{o.busyAction="",h()}}async function Qb(e,t){let r=I[e],n=At(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",h();try{let a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.controlNotice=`${r.name} bijgewerkt.`,await z(o.appView==="settings"?lr():[e,"setupComplete"],"state")}catch(a){o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",h()}}async function Yb(e,t){let r=I[e],n=String(t||"").trim();o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",o.inputDrafts[e]=String(t??""),o.drafts[e]=n,h();try{let a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);o.entities[e]={...o.entities[e]||{},value:n,state:n},delete o.drafts[e],delete o.inputDrafts[e],o.controlNotice=`${r.name} bijgewerkt.`,await z(o.appView==="settings"?lr():[e,"setupComplete"],"state")}catch(a){o.inputDrafts[e]=n,o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",h()}}async function sd(e,t){let r=I[e],n=Xe(t)||Xo,a=await fetch(`${Q(r.domain,r.name,"set")}?value=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:n,state:n},n}async function Jb(e,t){let r=I[e],n=t?"turn_on":"turn_off",a=await fetch(Q(r.domain,r.name,n),{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return o.entities[e]={...o.entities[e]||{},value:t,state:t},t}async function Zb(){await z([...new Set([...In,...at,"setupComplete",...Yt])],"state")}async function Xb(e,t){let r=I[e],n=Xe(t);o.busyAction=`save-${e}`,o.controlNotice="",o.controlError="",h();try{await sd(e,n),o.controlNotice=`${r.name} bijgewerkt.`,await z(o.appView==="settings"?lr():[e,"setupComplete","openquattEnabled"],"state")}catch(a){o.controlError=`${r.name} kon niet worden bijgewerkt. ${a.message}`}finally{o.busyAction="",h()}}async function Ds(e){let t=Xe(e);if(e&&!t){o.controlError="Kies een geldig hervatmoment om automatisch weer in te schakelen.",h();return}if(t&&!y("openquattResumeAt")){o.controlError="Automatisch hervatten is op deze firmware nog niet beschikbaar.",h();return}o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",h();let r=!1;try{y("openquattResumeAt")&&(await sd("openquattResumeAt",t||Xo),r=!!t),await Jb("openquattEnabled",!1),o.pauseResumeDraft=t?ni(t):"",o.systemModal="",o.controlNotice=t?`Openquatt regeling is tijdelijk uitgeschakeld tot ${jr(t)}.`:"Openquatt regeling is uitgeschakeld zonder eindmoment.",await Zb()}catch(n){if(r&&y("openquattResumeAt"))try{await sd("openquattResumeAt",Xo)}catch{}o.controlError=`Openquatt regeling kon niet worden bijgewerkt. ${n.message}`}finally{o.busyAction="",h()}}async function ev(){o.busyAction="openquatt-regulation",o.controlNotice="",o.controlError="",h();try{await Jb("openquattEnabled",!0),o.pauseResumeDraft="",o.systemModal="",o.controlNotice="Openquatt regeling is weer actief.",await Zb()}catch(e){o.controlError=`Openquatt regeling kon niet worden ingeschakeld. ${e.message}`}finally{o.busyAction="",h()}}async function ld(e){let t=I[e];o.busyAction=e,o.controlError="",o.controlNotice="",h();try{let r=await fetch(Q(t.domain,t.name,"press"),{method:"POST"});if(!r.ok)throw new Error(`HTTP ${r.status}`);o.controlNotice=e==="apply"?"Setup gemarkeerd als afgerond.":"Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.",await z(["setupComplete"],"state"),e==="reset"&&(o.currentStep=Or[0].id,o.quickStartSetupDraft="",o.quickStartSetupConfirmed=!1,o.quickStartModalMode="wizard",o.quickStartModalOpen=!0),o.quickStartModalOpen=e!=="apply",_t("overview",{syncMode:"replace"}),Ee({forceFast:!0})}catch(r){o.controlError=`Actie mislukt voor "${t.name}". ${r.message}`}finally{o.busyAction="",h()}}function V1(){window.requestAnimationFrame(()=>{if(!o.root||o.systemModal!=="service-task-hp-water-calibration")return;let e=o.root.querySelector("[data-oq-service-task-scroller]"),t=o.root.querySelector("[data-oq-hp-water-calibration-actions]");if(!e||!t)return;let r=e.getBoundingClientRect(),n=t.getBoundingClientRect(),a=e.scrollTop+n.top-r.top-24;e.scrollTop=Math.max(0,a)})}async function tv(e,t){let r=t==="start_failure_retry"?"/openquatt/incidents/retry-start":t==="confirm_odu_power_cycle"?"/openquatt/incidents/confirm-odu-power-cycle":"";if(!r||e!==1&&e!==2)return;let n=o.incidentAction?.pending&&o.incidentAction.hp===e&&o.incidentAction.kind===t;if(n&&!o.incidentAction.outcomeUnknown){await Mo({force:!0});return}let a=n?o.incidentAction.requestId:Bp();o.busyAction=`incident-${t}-hp${e}`,o.controlError="",o.controlNotice="",o.incidentAction={hp:e,kind:t,requestId:a,pending:!0,ok:null,result:""},h();try{let i=await Vp(fetch,r,e,a,o.incidentMonitoringSnapshot?.actionCsrfToken||"",async()=>(await Mo({force:!0}),o.incidentMonitoringSnapshot?.actionCsrfToken||""));o.incidentAction={hp:e,kind:t,requestId:a,pending:!0,ok:null,result:""},o.controlNotice=`Actie voor HP${e} geaccepteerd; resultaat wordt gecontroleerd.`,h()}catch(i){let l=i.incidentActionDefinitive===!0;o.incidentAction=l?{hp:e,kind:t,requestId:a,pending:!1,ok:!1,result:"",message:i.message||String(i)}:{hp:e,kind:t,requestId:a,pending:!0,outcomeUnknown:!0,ok:null,result:"",message:i.message||String(i)},l?o.controlError=`Actie voor HP${e} niet uitgevoerd. ${i.message||i}`:o.controlNotice=`Antwoord voor HP${e} ging verloren; resultaat wordt met hetzelfde actienummer gecontroleerd.`}finally{for(let i of[0,500,1500]){if(!o.incidentAction.pending)break;i&&await new Promise(l=>window.setTimeout(l,i)),await Mo({force:!0})}o.busyAction="",h()}}async function Ko(e,t={}){let r=I[e];if(r){o.busyAction=e,o.controlError="",o.controlNotice="",h();try{let n=await fetch(Q(r.domain,r.name,"press"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`);if(["commissioningCm100Start","commissioningCm100Stop","boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply","flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply","airPurgeStart","airPurgeAbort","hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply","manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling","manualHpStart","manualHpAbort","trendHistoryFlush","decisionLogHistoryFlush","decisionLogHistoryClear","lifetimeEnergyHistoryCapture","lifetimeEnergyHistoryClear"].includes(e)||Ga.has(e)||(ko(),o.systemModal=""),o.controlNotice=t.successNotice||`${r.name} gestart.`,t.reconnectMode&&Co(t.reconnectMode),Array.isArray(t.refreshKeys)&&t.refreshKeys.length){let i=Number(t.refreshDelayMs||0);Number.isFinite(i)&&i>0&&await new Promise(l=>window.setTimeout(l,i)),await z(t.refreshKeys,"state")}t.refreshIncidentMonitoring===!0&&await Mo({force:!0})}catch(n){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!1,o.commissioningTaskLock=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!1,o.commissioningTaskLock=""):e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!1,o.commissioningTaskLock=""):e==="airPurgeStart"?(o.pendingAirPurgeStart=!1,o.commissioningTaskLock=""):e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock=""):e==="manualFlowStart"?(o.pendingManualFlowStart=!1,o.commissioningTaskLock=""):e==="manualHpStart"&&(o.pendingManualHpStart=!1,o.commissioningTaskLock=""),o.controlError=`${t.errorPrefix||`Actie mislukt voor "${r.name}"`}. ${n.message}`}finally{o.busyAction="",h(),e==="hpWaterCalibrationApply"&&V1()}}}function cd(e){let t=o.root?o.root.querySelector(".oq-helper-curve-svg"):null;if(!t||!o.draggingCurveKey)return;let r=t.getBoundingClientRect(),n=22,a=180,i=(e-r.top)/r.height*240,c=70-(Math.min(n+a,Math.max(n,i))-n)/a*50,d=qe(o.draggingCurveKey,c);String(T(o.draggingCurveKey))!==String(d)&&(o.drafts[o.draggingCurveKey]=d,h())}var K1={"select-settings-option":e=>{let t=e.dataset.selectKey||"",r=e.dataset.selectOption||"";t&&r&&String(T(t)||"")!==r&&Vo(t,r)},"toggle-overview-control":e=>{let t=e.dataset.controlKey||"",r=(e.dataset.controlState||"").toLowerCase();t&&(r==="on"||r==="off")&&Hs(t,r==="on")},"select-overview-control-option":e=>{let t=e.dataset.controlKey||"",r=e.dataset.controlOption||"";t&&r&&String(T(t)||"")!==r&&Vo(t,r)},"suggest-curve-fallback":()=>{let e=ii();e&&Ia("curveFallbackSupply",e.value,"Fallback-aanvoertemperatuur uit de stooklijn overgenomen.")},apply:()=>ld("apply"),reset:()=>ld("reset")};function ov(e,t){return le(K1,e,t)}var z1=[{actions:["commissioningCm100Start","commissioningCm100Stop"],keys:["commissioningStatus","cm100Active","boilerPowerTestStatus","boilerPowerTestActive","flowAutotuneStatus","airPurgeStatus","airPurgeActive","manualFlowStatus","manualFlowActive","manualHpStatus","manualHpGuardStatus","manualHpActive","hpWaterCalibrationStatus","hpWaterCalibrationActive"]},{actions:["boilerPowerTestStart","boilerPowerTestAbort","boilerPowerTestApply"],keys:["commissioningStatus","boilerPowerTestStatus","boilerPowerTestActive","boilerHeatPower","boilerPowerTestResult","boilerRatedHeatPower"]},{actions:["flowAutotuneStart","flowAutotuneAbort","flowAutotuneApply"],keys:["commissioningStatus","flowAutotuneStatus","flowKpSuggested","flowKiSuggested","flowKp","flowKi"]},{actions:["airPurgeStart","airPurgeAbort"],keys:["commissioningStatus","airPurgeStatus","airPurgeActive","airPurgeRemaining","airPurgePhase","airPurgeTargetIpwm","flowMode"]},{actions:["hpWaterCalibrationStart","hpWaterCalibrationAbort","hpWaterCalibrationApply"],keys:["commissioningStatus","hpWaterCalibrationStatus","hpWaterCalibrationActive","hpWaterCalibrationRemaining","hpWaterCalibrationPhase","hpWaterCalibrationSpread","hpWaterCalibrationSupplyDelta","hpWaterCalibrationStableProgress","hpWaterCalibrationStableRequired","hpWaterCalibrationResultReference","hpWaterCalibrationResultSpreadBefore","hpWaterCalibrationResultExpectedSpread","hpWaterCalibrationResultHp1InRawAvg","hpWaterCalibrationResultHp1OutRawAvg","hpWaterCalibrationResultHp2InRawAvg","hpWaterCalibrationResultHp2OutRawAvg","hp1WaterInRaw","hp1WaterOutRaw","hp2WaterInRaw","hp2WaterOutRaw","hp1WaterIn","hp1WaterOut","hp2WaterIn","hp2WaterOut","hp1WaterInOffset","hp1WaterOutOffset","hp2WaterInOffset","hp2WaterOutOffset","hp1WaterInOffsetSuggested","hp1WaterOutOffsetSuggested","hp2WaterInOffsetSuggested","hp2WaterOutOffsetSuggested","flowMode"]},{actions:["manualFlowStart","manualFlowAbort","manualFlowApplyHeating","manualFlowApplyCooling"],keys:["commissioningStatus","manualFlowStatus","manualFlowActive","manualFlowSetpoint","manualFlowTargetIpwm","flowSelected","flowMode","flowSetpoint","coolingFlowSetpoint"]},{actions:["manualHpStart","manualHpAbort"],keys:["commissioningStatus","manualHpStatus","manualHpGuardStatus","manualHpActive","manualHp1Mode","manualHp2Mode","manualHp1Level","manualHp2Level","flowSelected","hp1Compressor","hp1Freq","hp1Failures","hp2Compressor","hp2Freq","hp2Failures","hp1Mode","hp2Mode"]}];function U1(e){e==="commissioningCm100Start"?(o.pendingCommissioningCm100Start=!0,o.commissioningTaskLock="cm100",o.commissioningBoilerHeatPowerDisplay=""):e==="commissioningCm100Stop"?(o.pendingCommissioningCm100Start=!1,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="",o.commissioningBoilerHeatPowerDisplay=""):e==="boilerPowerTestStart"?(o.pendingBoilerPowerTestStart=!0,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="boiler",o.commissioningBoilerHeatPowerDisplay=""):e==="boilerPowerTestAbort"||e==="boilerPowerTestApply"?o.commissioningTaskLock="boiler":e==="flowAutotuneStart"?(o.pendingFlowAutotuneStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="autotune"):e==="flowAutotuneAbort"||e==="flowAutotuneApply"?o.commissioningTaskLock="autotune":e==="airPurgeStart"?(o.pendingAirPurgeStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="purge"):e==="airPurgeAbort"?o.commissioningTaskLock="purge":e==="manualFlowStart"?(o.pendingManualFlowStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualHpStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-flow"):e==="manualFlowAbort"?o.commissioningTaskLock="manual-flow":e==="manualHpStart"?(o.pendingManualHpStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingHpWaterCalibrationStart=!1,o.commissioningTaskLock="manual-hp"):e==="manualHpAbort"?o.commissioningTaskLock="manual-hp":e==="hpWaterCalibrationStart"?(o.pendingHpWaterCalibrationStart=!0,o.pendingBoilerPowerTestStart=!1,o.pendingFlowAutotuneStart=!1,o.pendingAirPurgeStart=!1,o.pendingManualFlowStart=!1,o.pendingManualHpStart=!1,o.commissioningTaskLock="hp-water-calibration"):(e==="hpWaterCalibrationAbort"||e==="hpWaterCalibrationApply")&&(o.commissioningTaskLock="hp-water-calibration")}function G1(e){if(e==="acknowledgeCompressorCyclingAlert")return{refreshKeys:[...On]};if(e==="acknowledgeHpIncidents")return{refreshIncidentMonitoring:!0};let t=z1.find(({actions:r})=>r.includes(e));if(t)return{refreshKeys:[...t.keys]};if(Ga.has(e)){let r=Ed(e);if(r){let n=e.endsWith("Load");return{refreshKeys:Ws(r),refreshDelayMs:n?1200:3200,successNotice:n?`HP${r} ODU runtime tabel lezen aangevraagd.`:`HP${r} ODU runtime write aangevraagd; controleer status/readback.`,errorPrefix:`ODU runtime actie mislukt voor HP${r}`}}}return{}}function rv(e,t){if(e==="retry-hp-start"||e==="confirm-hp-power-cycle"){let n=Number(t.dataset.oqHpIndex||0);if(n!==1&&n!==2)return!0;let a=e==="retry-hp-start"?"start_failure_retry":"confirm_odu_power_cycle";return a==="confirm_odu_power_cycle"&&!window.confirm(`HP${n} ODU-powercycle bevestigen?

Bevestig alleen als deze buitenunit werkelijk spanningsloos is geweest. Hiermee geef je uitsluitend de herstelde safety-latch van HP${n} vrij; een actieve fout blijft staan.`)||tv(n,a),!0}if(e!=="press-named-button")return!1;let r=String(t.dataset.oqButtonKey||t.dataset.buttonKey||t.getAttribute("data-oq-button-key")||"").trim();return r&&(U1(r),Ko(r,G1(r))),!0}var nv=10080*60*1e3;function av(e){o.controlReplayGraphMinute=e==="week"?1230:e==="today"||e==="yesterday"?720:1e3}function iv(e){let t=new Date(String(e||"")).getTime();return Number.isFinite(t)?t:Number.NaN}var Q1={"select-control-replay-tab":({button:e})=>{let t=e.dataset.replayTab||"status";o.controlReplayTab=hl(t)||"status",o.appView==="control"&&nr("push"),h()},"select-control-replay-window":({button:e})=>{let t=bl(e.dataset.replayWindow||"")||"last24";t!=="custom"&&(o.controlReplayWindow=t,o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,o.controlReplayCustomPeriodError="",av(t),o.appView==="control"&&nr("push")),h()},"toggle-control-replay-period-menu":()=>{o.controlReplayPeriodMenuOpen=!o.controlReplayPeriodMenuOpen,o.controlReplayCustomPeriodOpen=o.controlReplayPeriodMenuOpen&&o.controlReplayWindow==="custom",o.controlReplayCustomPeriodError="",h()},"toggle-control-replay-custom-period":()=>{o.controlReplayCustomPeriodOpen=!o.controlReplayCustomPeriodOpen,o.controlReplayCustomPeriodError="",h()},"apply-control-replay-custom-period":({button:e})=>{let t=e.closest("[data-oq-control-replay-period-menu]"),r=String(t?.querySelector("[data-oq-control-replay-custom-start-date]")?.value||""),n=String(t?.querySelector("[data-oq-control-replay-custom-start-hour]")?.value||""),a=String(t?.querySelector("[data-oq-control-replay-custom-end-date]")?.value||""),i=String(t?.querySelector("[data-oq-control-replay-custom-end-hour]")?.value||""),l=`${r}T${n}:00`,c=`${a}T${i}:00`,d=iv(l),u=iv(c);if(!Number.isFinite(d)||!Number.isFinite(u)||u<=d){o.controlReplayCustomPeriodError="Kies een eindtijd na de starttijd.",h();return}if(u-d>nv){o.controlReplayCustomPeriodError="Een eigen periode mag maximaal 7 dagen beslaan.",h();return}let m=Date.now();if(d<m-nv||u>m+60*1e3){o.controlReplayCustomPeriodError="Kies een periode binnen de laatste 7 dagen.",h();return}o.controlReplayCustomStart=l,o.controlReplayCustomEnd=c,o.controlReplayCustomPeriodError="",o.controlReplayWindow="custom",o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,av("custom"),o.appView==="control"&&nr("push"),h()},"select-control-replay-episode":({button:e})=>{o.controlReplaySelectedEpisode=e.dataset.replayEpisode||"",h()},"toggle-control-replay-support-details":({button:e,event:t})=>{t.preventDefault();let r=e.closest(".oq-working-support"),n=r?.dataset.replaySupportItem||"";o.controlReplaySupportDetailsItemId=r&&r.hasAttribute("open")?"":n,h()}};function sv(e,t,r){return le(Q1,e,{button:t,event:r})}async function xn(e,t){Yp();try{let r=await fetch(e,t);if(!r.ok)throw new Error(`HTTP ${r.status}`);o.ota.ok=1}catch(r){throw Ei(r.message)?(Ur(),Co("ota",r.message)):ar(),r}}async function Y1(){let e=I.checkFirmwareUpdates;if(e){o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateCheckBusy=!0,o.controlError="",o.controlNotice="",h();try{await Fa("current build",{poll:!1,force:!0}),ia();let t=await fetch(Q(e.domain,e.name,"press"),{method:"POST"});if(!t.ok)throw new Error(`HTTP ${t.status}`);await sa(),o.controlNotice="Firmwarecontrole bijgewerkt."}catch(t){o.controlError=`Firmwarecontrole mislukte. ${t.message}`}finally{o.updateCheckBusy=!1,h()}}}async function J1(){try{await z(Mt,"all",{concurrency:Gt,forceMissing:!0}),o.updateModalOpen&&h()}catch{}}async function Fa(e,t={}){let r=I.firmwareUpdateTarget;if(!r||!y("firmwareUpdateTarget"))return!1;let n=String(e||"").trim();if(!n)return!1;if(!t.force&&String(T("firmwareUpdateTarget")||"").trim()===n)return!0;o.entities.firmwareUpdateTarget={...o.entities.firmwareUpdateTarget||{},state:n,value:n};let a=await fetch(`${Q(r.domain,r.name,"set")}?option=${encodeURIComponent(n)}`,{method:"POST"});if(!a.ok)throw new Error(`HTTP ${a.status}`);return t.poll!==!1?(ia(),await sa({expectedBuildLabel:t.expectedBuildLabel||""})):!0}async function Z1(){let e=ye();if(e){o.firmwareAdvancedOpen=!1,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,Me(),ot(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=io(e),It(),o.updateInstallMode="normal",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",h();try{await Fa("current build",{poll:!1,force:!0}),o.updateInstallTargetVersion=io(ye()||{})||o.updateInstallTargetVersion,an();let t=I.installFirmwareUpdateTarget,r=t&&y("installFirmwareUpdateTarget")?Q(t.domain,t.name,"press"):Q("update","Firmware Update","install");await xn(r,{method:"POST"}),await wr({initialDelayMs:So,pollDelayMs:Fr})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=ce()||o.updateInstallTargetVersion,o.controlNotice=""):o.controlNotice="OTA-update gestart. Wacht tot het device weer online is."}catch(t){o.controlError=`OTA-update is mislukt. ${t.message}`}finally{br(),h()}}}async function cv(){let e=_i(),t=I.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareConnectionSwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de verbindingswissel.",h();return}o.updateManualUploadOpen=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Me(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="connection-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=ne(),o.updateInstallTargetVersion=ce()||"",It(),o.controlError="",o.controlNotice="",h();try{if(!await Fa("alternate connection",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");if(o.updateInstallTargetVersion=io(ye()||{})||ce()||"",It(),h(),an(),await xn(Q(t.domain,t.name,"press"),{method:"POST"}),await wr({initialDelayMs:So,pollDelayMs:Fr}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=ce()||o.updateInstallTargetVersion||"",o.firmwareConnectionSwitchConfirmed=!1,o.controlNotice="";else{let a=st(e.targetConnection);o.controlNotice=`Verbindingswissel naar ${a} is gestart. Wacht tot het device via die verbinding terugkomt.`}}catch(r){o.controlError=`Verbindingswissel is mislukt. ${r.message}`}finally{br(),h()}}}async function uv(){let e=Ri(),t=I.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){if(!o.firmwareTopologySwitchConfirmed){o.controlError="Bevestig eerst de waarschuwing voor de opstellingswissel.",h();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Me(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="topology-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=ce()||"",It(),o.controlError="",o.controlNotice="",h();try{if(!await Fa("alternate topology",{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");if(o.updateInstallTargetVersion=io(ye()||{})||ce()||"",It(),h(),an(),await xn(Q(t.domain,t.name,"press"),{method:"POST"}),await wr({initialDelayMs:So,pollDelayMs:Fr}))o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=ce()||o.updateInstallTargetVersion||"",o.firmwareTopologySwitchConfirmed=!1,o.controlNotice="";else{let a=ur(e.targetTopology);o.controlNotice=`Opstellingswissel naar ${a} is gestart. Wacht tot het device met die opstelling terugkomt.`}}catch(r){o.controlError=`Opstellingswissel is mislukt. ${r.message}`}finally{br(),h()}}}async function X1(e){let t=I.installFirmwareUpdateTarget;if(!(!e||!e.canSwitch||!t)){o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,Me(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallMode="build-switch",o.updateInstallTargetConnection=e.targetConnection,o.updateInstallTargetTopology=e.targetTopology,o.updateInstallTargetVersion=ce()||"",It(),o.controlError="",o.controlNotice="",h();try{if(!await Fa(e.targetOption,{force:!0,expectedBuildLabel:e.targetBuildLabel}))throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");o.updateInstallTargetVersion=io(ye()||{})||ce()||"",It(),h(),an(),await xn(Q(t.domain,t.name,"press"),{method:"POST"}),await wr({initialDelayMs:So,pollDelayMs:Fr})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=ce()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice=`Setupwissel naar ${e.targetBuildLabel} is gestart. Wacht tot het device opnieuw bereikbaar is.`}catch(r){o.controlError=`Setupwissel is mislukt. ${r.message}`}finally{br(),h()}}}async function dv(){let[e,t]=String(o.quickStartSetupDraft||"").split(":"),r=Hi(e,t);if(!r.available||r.targetOption==="current build"){o.currentStep="generation",h();return}if(!o.quickStartSetupConfirmed){o.controlError="Bevestig eerst dat de gekozen setup klaar is voor gebruik.",h();return}if(!r.canSwitch){o.controlError="Deze firmware kan de gekozen setup nog niet direct installeren. Werk de firmware eerst bij.",h();return}r.targetOption==="alternate connection"?(o.firmwareConnectionSwitchConfirmed=!0,await cv()):r.targetOption==="alternate topology"?(o.firmwareTopologySwitchConfirmed=!0,await uv()):await X1(r)}async function lv(e,t){if(!y(e))throw new Error(`${I[e]?.name||e} is niet beschikbaar op deze firmware.`);let r=await Bt(e,t);o.entities[e]={...o.entities[e]||{},state:r,value:r}}async function e0(){let e=Do(),t=nn(),r=I.installFirmwareTestOta;if(!e){o.updateTestFirmwareError="Vul een geldig PR-nummer in.",h();return}if(!t.available){o.updateTestFirmwareError=t.error||"Dit firmwaretarget wordt niet herkend.",h();return}if(!o.updateTestFirmwareConfirmed){o.updateTestFirmwareError="Bevestig eerst dat je testfirmware wilt installeren.",h();return}if(!r||!y("installFirmwareTestOta")){o.updateTestFirmwareError="Deze firmware bevat de testfirmware-installatieknop nog niet.",h();return}o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Me(),o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion="",It(),o.updateInstallMode="test-firmware",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateTestFirmwareError="",o.updateTestFirmwareBuild=null,h();let n=!1;try{let a=ra(e,t);if(!a)throw new Error("Geen geldig PR-target gevonden.");o.updateTestFirmwareBuild=a.label,h(),await lv("firmwareTestOtaUrl",a.otaUrl),await lv("firmwareTestOtaMd5Url",a.md5Url),n=!0,an(),await xn(Q(r.domain,r.name,"press"),{method:"POST"}),Ur(),await wr({initialDelayMs:So,pollDelayMs:Fr})?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=ce()||`PR ${e}`,o.updateTestFirmwareOpen=!1,ot(),o.controlNotice=""):o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`}catch(a){n&&Ei(a.message)?o.controlNotice=`Testfirmware uit PR ${e} is gestart. Wacht tot het device weer online is.`:o.updateTestFirmwareError=`Testfirmware installeren mislukte. ${a.message}`}finally{br(),h()}}async function t0(){let e=o.updateManualUploadFile;if(!e){o.updateManualUploadError="Kies eerst een firmwarebestand.",h();return}o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.updateInstallBusy=!0,o.updateInstallTargetVersion=ce()||"",It(),o.updateInstallMode="",o.updateInstallTargetConnection="",o.updateInstallTargetTopology="",o.controlError="",o.controlNotice="",o.updateManualUploadError="",h();try{let t=new FormData;t.append("update",e,e.name||"firmware.bin"),await xn("/update",{method:"POST",body:t}),Ur(),o.updateManualUploadOpen=!1,Me(),await wr()?(o.updateInstallCompleted=!0,o.updateInstallCompletedVersion=ce()||o.updateInstallTargetVersion||"",o.controlNotice=""):o.controlNotice="Handmatige OTA-upload gestart. Wacht tot het device weer online is."}catch(t){o.updateManualUploadError=`Handmatige upload mislukte. ${t.message}`}finally{br(),h()}}var o0={"open-update-modal":()=>(o.updateModalOpen=!0,h(),J1()),"close-update-modal":()=>{o.updateModalOpen=!1,o.updateInstallCompleted=!1,o.updateInstallCompletedVersion="",o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareTopologySwitchOpen=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchConfirmed=!1,Me(),ot(),h()},"run-firmware-check":()=>Y1(),"install-firmware-update":()=>Z1(),"install-firmware-connection-switch":()=>cv(),"install-firmware-topology-switch":()=>uv(),"toggle-firmware-advanced":()=>{o.firmwareAdvancedOpen||o.firmwareConnectionSwitchOpen||o.firmwareTopologySwitchOpen||o.updateManualUploadOpen||o.updateTestFirmwareOpen?(o.firmwareAdvancedOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Me(),ot()):o.firmwareAdvancedOpen=!0,h()},"toggle-firmware-connection-switch":()=>{o.firmwareConnectionSwitchOpen=!o.firmwareConnectionSwitchOpen,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareConnectionSwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Me(),ot()),h()},"toggle-firmware-topology-switch":()=>{o.firmwareTopologySwitchOpen=!o.firmwareTopologySwitchOpen,o.firmwareTopologySwitchConfirmed=!1,o.firmwareTopologySwitchOpen&&(o.firmwareAdvancedOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.updateManualUploadOpen=!1,o.updateTestFirmwareOpen=!1,Me(),ot()),h()},"toggle-firmware-upload":()=>{o.updateManualUploadOpen?(o.updateManualUploadOpen=!1,Me()):(o.firmwareAdvancedOpen=!0,o.updateManualUploadOpen=!0,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,o.updateTestFirmwareOpen=!1,ot(),o.updateManualUploadError=""),h()},"upload-firmware-file":()=>t0(),"toggle-firmware-test":()=>{o.updateTestFirmwareOpen?(o.updateTestFirmwareOpen=!1,ot()):(o.firmwareAdvancedOpen=!0,o.updateTestFirmwareOpen=!0,o.updateManualUploadOpen=!1,o.firmwareConnectionSwitchOpen=!1,o.firmwareConnectionSwitchConfirmed=!1,o.firmwareTopologySwitchOpen=!1,o.firmwareTopologySwitchConfirmed=!1,Me(),o.updateTestFirmwareError=""),h()},"install-firmware-test":()=>e0()};function pv(e){return le(o0,e)}function r0(e=o.currentStep){let t=["setupComplete","strategy","usageTelemetryEnabled","usageTelemetryChoiceConfigured",...at];return e==="setup"?[...new Set([...t,...Mt])]:e==="generation"?[...new Set([...t,"installationTopology",...Ir,"hpGeneration"])]:e==="flow-source"?[...new Set([...t,"hpGeneration",...bt])]:e==="thermostat-source"?[...new Set([...t,...Qo])]:e==="boiler"?[...new Set([...t,"boilerCvAssistEnabled","boilerFaultFallbackEnabled","boilerConnection","boilerRatedHeatPower","otbLinkAvailable"])]:e==="strategy"?[...new Set([...t,"strategy"])]:e==="heating"?[...new Set([...t,...xt,...Yo,"dayMax","silentMax"])]:e==="flow"?[...new Set([...t,...nt,...Lr])]:e==="water"?[...new Set([...t,"maxWater"])]:e==="silent"?[...new Set([...t,...Jo])]:e==="usage-telemetry"?[...new Set([...t,"usageTelemetryEnabled","usageTelemetryChoiceConfigured"])]:e==="confirm"?[...new Set([...t,"installationTopology","hpGeneration","boilerCvAssistEnabled","boilerFaultFallbackEnabled","boilerConnection","boilerRatedHeatPower",...bt,...Qo,...nt,...Lr,...xt,...Yo,"maxWater",...Jo])]:t}async function ud(e=o.currentStep){let t=r0(e);try{await z(t,"all",{concurrency:Qt}),o.quickStartModalOpen&&o.currentStep===e&&!o.nativeOpen&&h()}catch{}}async function mv(){if(Gb({stepId:o.currentStep,telemetryAvailable:y("usageTelemetryEnabled"),choiceAvailable:y("usageTelemetryChoiceConfigured"),choiceValue:T("usageTelemetryChoiceConfigured")})){o.busyAction="switch-usageTelemetryEnabled",o.controlNotice="",o.controlError="",h();try{if(await Ns("usageTelemetryEnabled",!0),await z(["usageTelemetryEnabled","usageTelemetryChoiceConfigured"],"all"),!Cn({telemetryValue:T("usageTelemetryEnabled"),choiceValue:T("usageTelemetryChoiceConfigured"),expectedEnabled:!0}))throw new Error("De controller heeft de keuze niet bevestigd.")}catch(e){let t=!1;try{await Ns("usageTelemetryEnabled",!1),await z(["usageTelemetryEnabled","usageTelemetryChoiceConfigured"],"all"),t=Cn({telemetryValue:T("usageTelemetryEnabled"),choiceValue:T("usageTelemetryChoiceConfigured"),expectedEnabled:!1})}catch{}t?o.controlNotice="De standaardkeuze kon niet worden ingeschakeld. Delen is bevestigd uitgeschakeld; je kunt doorgaan of het opnieuw inschakelen.":o.controlError=`De keuze kon niet veilig worden bevestigd. Controleer de verbinding en probeer opnieuw. ${e.message}`}finally{o.busyAction="",h()}}}async function gv(){let e=yn();if(!e.canApply){o.controlError=e.requiresCic?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste flowbroninstelling is niet beschikbaar in deze firmware.",h();return}o.busyAction="quickstart-flow-source",o.controlNotice="",o.controlError="",h();let t=async(r,n)=>{if(!y(r))return;let a=T(r);if(typeof n=="boolean"&&C(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await Bt(r,n);o.entities[r]={...o.entities[r]||{},value:i,state:i}};try{e.requiresCic?(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),await t("flowSource","CIC"),o.quickStartCicFeedUrlDraft=null,o.controlNotice="CiC-flowmeting ingesteld. OpenQuatt controleert nu de JSON-feed."):(e.qFlowTarget&&await t("qFlowSource",e.qFlowTarget),await t("flowSource","Outdoor unit"),o.controlNotice=e.qFlowTarget==="Local"?"De lokale flowmeter op de Q-edition controller is ingesteld.":"De flowmeter in de buitenunit is ingesteld als Modbus-bron."),await z(bt,"all")}catch(r){o.controlError=`Flowconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{o.busyAction="",h()}}async function fv(){o.busyAction="quickstart-flow-refresh",o.controlNotice="",o.controlError="",h();try{await z(bt,"all");let e=yn();o.controlNotice=e.flowAvailable?e.flowValue>0?`Flowsignaal bijgewerkt: ${Math.round(e.flowValue)} L/h.`:"Het flowsignaal is beschikbaar; momenteel is er geen circulatie.":"Nog geen actuele flowwaarde ontvangen."}catch(e){o.controlError=`Flowsignaal controleren mislukt. ${e.message}`}finally{o.busyAction="",h()}}async function Ns(e,t){let r=I[e];if(!r||!y(e))throw new Error("Deze firmware bevat de vereiste testbediening niet.");let n=await fetch(Q(r.domain,r.name,t?"turn_on":"turn_off"),{method:"POST"});if(!n.ok)throw new Error(`HTTP ${n.status}`)}async function n0(){let e=["commissioningCm100Start","commissioningCm100Stop","quickFlowTest"];e.forEach(r=>{o.optionalMissingEntities&&delete o.optionalMissingEntities[r],delete o.entities[r]}),await z(e,"all");let t=e.filter(r=>!o.entities[r]);if(t.length){let r=t.map(n=>I[n]?.name||n).join(", ");throw new Error(`Interne waterpomptestbediening ontbreekt: ${r}.`)}}async function a0(){for(let e=0;e<40;e+=1){await new Promise(t=>window.setTimeout(t,1e3));try{await z(bt,"state")}catch{return}if(!C("quickFlowTest")){o.busyAction!=="quickstart-flow-test-abort"&&(o.controlNotice="Waterpomptest afgerond. OpenQuatt is teruggekeerd naar de normale regeling."),h();return}}}async function hv(){if(!yn().canRunFlowTest){o.controlError="Activeer eerst de flowconfiguratie of installeer firmware met de waterpomptest.",h();return}o.busyAction="quickstart-flow-test-start",o.controlNotice="",o.controlError="",h();let t=!1;try{if(await n0(),!C("cm100Active")){let a=I.commissioningCm100Start,i=await fetch(Q(a.domain,a.name,"press"),{method:"POST"});if(!i.ok)throw new Error(`CM100 starten gaf HTTP ${i.status}`);t=!0}let r=C("cm100Active")&&String(T("commissioningStatus")||"").trim()==="CM100 READY";for(let a=0;!r&&a<20;a+=1)await new Promise(i=>window.setTimeout(i,500)),await z(["commissioningStatus","cm100Active"],"state"),r=C("cm100Active")&&String(T("commissioningStatus")||"").trim()==="CM100 READY";if(!r){let a=String(T("commissioningStatus")||"").trim();throw a?new Error(`Service-stand werd niet gereed: ${a}.`):new Error("Service-stand CM100 werd niet op tijd gereed.")}await Ns("quickFlowTest",!0),await z(bt,"all");let n=String(T("commissioningStatus")||"").trim();if(!C("quickFlowTest"))throw new Error(n||"De waterpomptest kon niet worden gestart.");o.controlNotice="Waterpomptest gestart: alleen de pomp draait 30 seconden op 400 iPWM.",a0()}catch(r){if(t&&!C("quickFlowTest"))try{let n=I.commissioningCm100Stop;await fetch(Q(n.domain,n.name,"press"),{method:"POST"})}catch{}o.controlError=`Waterpomptest starten mislukt. ${r.message}`}finally{o.busyAction="",h()}}async function bv(){o.busyAction="quickstart-flow-test-abort",o.controlNotice="",o.controlError="",h();try{await Ns("quickFlowTest",!1),await z(bt,"all"),o.controlNotice="Waterpomptest gestopt. OpenQuatt keert terug naar de normale regeling."}catch(e){o.controlError=`Waterpomptest stoppen mislukt. ${e.message}`}finally{o.busyAction="",h()}}async function vv(){let e=ds();if(!e.canApply){o.controlError=e.selectedSource==="CIC"?"Vul eerst een geldig CiC-adres of een geldige feed-URL in.":"De vereiste thermostaatbroninstelling is niet beschikbaar in deze firmware.",h();return}o.busyAction="quickstart-thermostat-source",o.controlNotice="",o.controlError="",h();let t=async(r,n)=>{if(!y(r))return;let a=T(r);if(typeof n=="boolean"&&C(r)===n||typeof n!="boolean"&&String(a)===String(n))return;let i=await Bt(r,n);o.entities[r]={...o.entities[r]||{},value:i,state:i}};try{e.selectedSource==="OT thermostat"?await t("otEnabled",!0):e.selectedSource==="CIC"&&(await t("cicFeedUrl",e.normalizedDraftUrl),await t("cicPollingEnabled",!0),o.quickStartCicFeedUrlDraft=null),await t("roomTempSource",e.selectedSource),await t("roomSetpointSource",e.selectedSource),o.controlNotice=e.selectedSource==="OT thermostat"?"Kamertemperatuur en setpoint zijn gekoppeld aan OpenTherm.":e.selectedSource==="CIC"?"Kamertemperatuur en setpoint zijn gekoppeld aan de CiC JSON-feed.":"Kamertemperatuur en setpoint zijn gekoppeld aan Home Assistant.",await z(Qo,"all")}catch(r){o.controlError=`Thermostaatconfiguratie kon niet volledig worden toegepast. ${r.message}`}finally{o.busyAction="",h()}}var Os="quickstart-usage-telemetry-prepare",dd=0;async function pd(e){let t=++dd,r=e==="usage-telemetry";if(r){if(o.busyAction&&o.busyAction!==Os)return;o.busyAction=Os,h()}else o.busyAction===Os&&(o.busyAction="",h());try{if(await ud(e),t!==dd||o.currentStep!==e)return;r&&await mv()}finally{t===dd&&o.busyAction===Os&&(o.busyAction="",h())}}function wv(e){hh(e),o.currentStep==="usage-telemetry"&&(o.controlError="",o.controlNotice=""),h(),pd(o.currentStep)}var i0={"close-quickstart-modal":()=>{o.quickStartModalOpen=!1,h()},"open-quickstart-modal":()=>{o.currentStep="setup",o.quickStartModalMode="wizard",o.quickStartModalOpen=!0,h()},"open-generation-modal":()=>{o.currentStep="generation",o.quickStartModalMode="generation",o.quickStartModalOpen=!0,h()},"select-step":e=>{o.currentStep=e.dataset.stepId||"generation",o.currentStep==="usage-telemetry"&&(o.controlError="",o.controlNotice=""),h(),pd(o.currentStep)},"select-quickstart-setup":e=>{o.quickStartSetupDraft=e.dataset.setupTarget||"",o.quickStartSetupConfirmed=!1,o.controlError="",o.controlNotice="",h(),ud("setup")},"install-quickstart-setup":()=>dv(),"apply-quickstart-flow-source":()=>gv(),"refresh-quickstart-flow-signal":()=>fv(),"start-quickstart-flow-test":()=>hv(),"abort-quickstart-flow-test":()=>bv(),"apply-quickstart-thermostat-source":()=>vv(),"retry-usage-telemetry-choice":()=>pd("usage-telemetry"),"confirm-no-usage-telemetry":()=>Hs("usageTelemetryEnabled",!1),"previous-step":()=>wv(-1),"next-step":()=>wv(1)};function yv(e,t){return le(i0,e,t)}function md(){ko(),Sr(),o.systemModal="",o.authDraftCurrentPassword="",o.authDraftNewPassword="",o.authDraftConfirmPassword="",o.authNotice="",o.authError="",o.apiSecurityNotice="",o.apiSecurityError="",o.pendingControlModeOverride="",ya(),h(),ca()}var s0={"open-connectivity-modal":()=>{o.systemModal="connectivity",h()},"open-restart-confirm":()=>{o.systemModal="restart-confirm",h()},"open-control-mode-override-confirm":e=>{let t=String(e.dataset.controlModeOption||"");["Force CM0","Force CM1","Force CM98"].includes(t)&&(o.controlError="",o.controlNotice="",o.pendingControlModeOverride=t,o.systemModal="control-mode-override-confirm",h())},"confirm-control-mode-override":()=>{let e=String(o.pendingControlModeOverride||"");if(!["Force CM0","Force CM1","Force CM98"].includes(e)){md();return}return o.pendingControlModeOverride="",o.systemModal="",Vo("controlModeOverride",e)},"clear-control-mode-override":()=>Vo("controlModeOverride","Auto"),"open-runtime-reset-confirm":()=>{o.controlError="",o.controlNotice="",o.systemModal="runtime-reset-confirm",h()},"confirm-runtime-reset":()=>{let e=y("resetRuntimeCountersHp1Hp2")?"resetRuntimeCountersHp1Hp2":y("resetRuntimeCountersHp1")?"resetRuntimeCountersHp1":"";if(!e){md();return}return Ko(e,{successNotice:"De draaitijdbalans is teruggezet. Nieuwe tellerwaarden kunnen binnen ongeveer \xE9\xE9n minuut zichtbaar worden.",errorPrefix:"Draaiurentellers resetten mislukt"})},"open-energy-counter-reset-confirm":()=>{o.controlError="",o.controlNotice="",o.systemModal="energy-counter-reset-confirm",h()},"confirm-energy-counter-reset":()=>Ko("resetCumulativeEnergyCounters",{successNotice:"De cumulatieve energietellers zijn teruggezet.",errorPrefix:"Energietellers resetten mislukt"}),"open-silent-settings-modal":()=>{o.systemModal="silent-settings",h()},"open-openquatt-pause-modal":()=>{o.pauseResumeDraft=ai(),o.systemModal="openquatt-pause",h()},"enable-openquatt-now":()=>ev(),"apply-openquatt-preset":e=>{let t=ol(e.dataset.pausePreset||"");o.pauseResumeDraft=t,Ds(t)},"apply-openquatt-indefinite":()=>Ds(""),"apply-openquatt-custom-pause":()=>{if(!String(o.pauseResumeDraft||"").trim()){o.controlError="Kies eerst een datum en tijd om automatisch te hervatten.",h();return}Ds(o.pauseResumeDraft||"")},"close-system-modal":()=>md(),"confirm-restart":()=>Ko("restartAction",{successNotice:"OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",errorPrefix:"Herstart mislukt",reconnectMode:"restart"})};function Sv(e,t){return le(s0,e,t)}function l0(e){let t=e.dataset.surface==="native";if(o.nativeOpen===t)return o.nativeOpen?Wi():void 0;o.nativeOpen=t,xc(o.nativeOpen?"native":"app"),o.controlError="",o.controlNotice="",o.settingsInfoOpen="",Re({updateModalOpen:!1,firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareTopologySwitchOpen:!1,updateManualUploadOpen:!1,updateTestFirmwareOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchConfirmed:!1}),Me(),ot(),ko(),o.systemModal="";let r=o.nativeOpen?Wi():void 0;return h(),ji(),window.requestAnimationFrame(()=>{o.nativeOpen&&o.nativeApp?o.nativeApp.scrollIntoView({behavior:"smooth",block:"start"}):o.nativeOpen||window.scrollTo({top:0,behavior:"smooth"})}),r}var c0={"toggle-interface-panel":()=>{ua(!o.interfacePanelOpen),h()},"select-surface":e=>l0(e)};function kv(e,t){return le(c0,e,t)}function qv(){o.systemModal="",_t("settings"),Fi("service"),h(),Ee({forceFast:!0})}function u0(e){let t=String(e.dataset.serviceTask||"").trim();["autotune","boiler","purge","manual-flow","manual-hp","hp-water-calibration"].includes(t)&&(o.systemModal=`service-task-${t}`,h(),Ee({forceFast:!0}))}function Mn(e,t,r,n){e.preventDefault();let a=t.closest(r);o[n]=!(a&&a.hasAttribute("open")),h()}function d0(e,t){e.preventDefault();let r=String(t.dataset.settingsAdvanced||"").trim();if(!r)return;let n=t.closest(`[data-oq-settings-advanced="${r}"]`);o.settingsAdvancedOpen={...o.settingsAdvancedOpen||{},[r]:!(n&&n.hasAttribute("open"))},h()}var p0={"select-view":e=>{if((e.dataset.viewId||"")==="diagnosis"&&!vt())return;let t=e.dataset.viewId||"overview";_t(t,{syncMode:"push"}),h(),Ee({forceFast:!0})},"select-trend-window":e=>{e.disabled||(fn(Number(e.dataset.trendHours||24)),h(),Vc({force:!0}).then(t=>{t&&h()}))},"select-energy-history-view":e=>{e.disabled||Ah(e.dataset.energyHistoryView||"day")},"shift-energy-history-period":e=>{e.disabled||Nh(o.energyHistoryView||"day",e.dataset.energyHistoryDirection||"1")},"select-energy-history-now":e=>{e.disabled||Oh(o.energyHistoryView||"day")},"select-settings-group":e=>{Fi(e.dataset.groupId||Se[0].id),h(),Ee({forceFast:!0})},"toggle-overview-theme":()=>{Rg(o.overviewTheme==="light"?"dark":"light"),h()},"select-hp-visual":e=>{Hg(e.dataset.hpVisual==="compact"?"compact":"schematic"),h()},"select-hp-layout":e=>{Dg(e.dataset.hpLayout||"equal"),h()},"toggle-installation-monitoring-details":(e,t)=>{Mn(t,e,".oq-settings-monitoring-details","installationMonitoringDetailsOpen")},"toggle-compressor-limits":()=>{o.compressorLimitsOpen=!o.compressorLimitsOpen,h()},"toggle-integration-diagnostics":(e,t)=>{Mn(t,e,".oq-settings-integration-diagnostics","integrationDiagnosticsOpen")},"toggle-odu-runtime-frequency-details":(e,t)=>{Mn(t,e,".oq-settings-odu-runtime-details","oduRuntimeFrequencyDetailsOpen")},"toggle-usage-telemetry-details":(e,t)=>{Mn(t,e,".oq-usage-disclosure--collapsible","usageTelemetryDetailsOpen")},"toggle-storage-technical-details":(e,t)=>{Mn(t,e,".oq-settings-storage-technical","settingsStorageDetailsOpen")},"toggle-storage-advanced":(e,t)=>{Mn(t,e,".oq-settings-storage-advanced","settingsStorageAdvancedOpen")},"toggle-settings-advanced":(e,t)=>{d0(t,e)},"open-cm100-commissioning-modal":()=>qv(),"open-installation-monitoring":()=>qv(),"open-service-task-modal":e=>u0(e)};function Ev(e,t,r){return le(p0,e,t,r)}var m0=[Ev,sv,yv,$g,sp,Em,e=>Ef(e,{triggerNamedButton:Ko}),pv,ov,sg,Sv,rv,kv];function Cv(){window.setTimeout(()=>{let e=document.activeElement;o.focusedField=e&&e.dataset&&e.dataset.oqField||"",o.settingsInteractionLock=!!(e&&e.closest&&e.closest(".oq-ph-concept-hotspot")),!o.focusedField&&o.incidentMonitoringRenderPending&&o.appView==="settings"&&o.settingsGroup==="service"&&(o.incidentMonitoringRenderPending=!1,h())},0)}function xv(e){e.target.closest(".oq-ph-concept-hotspot")&&(o.settingsInteractionLock=!0)}function Mv(e){let t=e.target.closest(".oq-ph-concept-hotspot");if(!t||e.relatedTarget&&t.contains(e.relatedTarget))return;let r=o.root&&o.root.querySelector(".oq-ph-concept-hotspot:hover"),n=document.activeElement&&document.activeElement.closest?document.activeElement.closest(".oq-ph-concept-hotspot"):null;o.settingsInteractionLock=!!(r||n)}function $v(e){if(e.target.dataset.oqQuickstartSetupConfirm){o.quickStartSetupConfirmed=!!e.target.checked,h();return}if(e.target.dataset.oqFirmwareConnectionConfirm){Re({firmwareConnectionSwitchConfirmed:!!e.target.checked}),h();return}if(e.target.dataset.oqFirmwareTopologyConfirm){Re({firmwareTopologySwitchConfirmed:!!e.target.checked}),h();return}if(e.target.dataset.oqFirmwareTestConfirm){Re({updateTestFirmwareConfirmed:!!e.target.checked,updateTestFirmwareError:""});let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-action="install-firmware-test"]');a&&(a.disabled=!o.updateTestFirmwareConfirmed||!Do()),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqFirmwareTestPr){Re({updateTestFirmwarePr:String(e.target.value||""),updateTestFirmwareConfirmed:!1,updateTestFirmwareError:"",updateTestFirmwareBuild:null});let n=e.target.closest(".oq-helper-modal-callout"),a=n?.querySelector('[data-oq-firmware-test-confirm="true"]');a&&(a.checked=!1);let i=n?.querySelector('[data-oq-action="install-firmware-test"]');i&&(i.disabled=!0);let l=nn(),c=ra(Do(),l),d=n?.querySelector('[data-oq-firmware-test-asset-note="true"]');d&&(d.textContent=c?l.otaFileName:"Vul een PR-nummer in om de OTA-build te kiezen."),n?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove(),n?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();return}if(e.target.dataset.oqMqttField){km(e.target);return}if(e.target.dataset.oqBackupMqttPassword!==void 0){o.settingsBackupMqttPassword=String(e.target.value||""),o.settingsBackupError="";let n=e.target.closest(".oq-helper-modal")?.querySelector('[data-oq-action="confirm-settings-backup-restore"]');n&&(n.disabled=!o.settingsBackupMqttPassword,n.textContent=o.settingsBackupMqttPassword?"Herstellen":"Vul MQTT-wachtwoord in"),e.target.closest(".oq-helper-modal")?.querySelector(".oq-settings-backup-error")?.remove();return}let r=e.target.dataset.oqField;if(!r){if(e.target.dataset.oqQuickstartCicUrl!==void 0){o.quickStartCicFeedUrlDraft=String(e.target.value||"");return}if(e.target.dataset.oqQuickstartThermostatSource!==void 0){o.quickStartThermostatSourceDraft=String(e.target.value||""),h();return}let n=e.target.dataset.oqAuthField;if(n){o.authNotice="",o.authError="",n==="username"?o.authDraftUsername=String(e.target.value||""):n==="currentPassword"?o.authDraftCurrentPassword=String(e.target.value||""):n==="newPassword"?o.authDraftNewPassword=String(e.target.value||""):n==="confirmPassword"&&(o.authDraftConfirmPassword=String(e.target.value||""));return}return}if(e.target.dataset.oqPauseDraft){o.pauseResumeDraft=String(e.target.value||"");return}if(I[r]?.domain==="text"){o.inputDrafts[r]=String(e.target.value||"");return}if(e.target.type==="range"||e.target.type==="number"){e.target.type==="number"&&(o.inputDrafts[r]=e.target.value);let n=pe(e.target.value);if(!Number.isNaN(n)){let a=qe(r,e.target.value);if(o.drafts[r]=a,e.target.type==="range"){let i=e.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");i&&(i.textContent=Y(r,a))}}}}function Av(e){Zf(e)}function Tv(e,t){return e.deltaMode===1?t*16:e.deltaMode===2?t*window.innerHeight:t}function g0(e){let t=e?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){let r=window.getComputedStyle(t),n=/(auto|scroll)/.test(r.overflowY)&&t.scrollHeight>t.clientHeight,a=/(auto|scroll)/.test(r.overflowX)&&t.scrollWidth>t.clientWidth;if(n||a)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function _v(e){let t=e.target&&e.target.closest?e.target.closest('input[type="number"]'):null;if(!t||!o.root||!o.root.contains(t)||document.activeElement!==t)return;e.preventDefault(),t.blur();let r=g0(t);r&&typeof r.scrollBy=="function"&&r.scrollBy({left:Tv(e,e.deltaX||0),top:Tv(e,e.deltaY||0),behavior:"auto"})}function Rv(e){if(e.target.dataset.oqBackupFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",kf(n);return}if(e.target.dataset.oqFirmwareUploadFileInput){let n=e.target.files&&e.target.files[0]?e.target.files[0]:null;e.target.value="",n?Re({firmwareAdvancedOpen:!0,updateManualUploadOpen:!0,updateManualUploadFile:n,updateManualUploadFileName:n.name||"",updateManualUploadError:""}):Me(),h();return}if(e.target.dataset.oqEnergyHistoryPeriodInput){typeof Ca=="function"&&Ca(e.target.dataset.oqEnergyHistoryPeriodInput,e.target.value);return}if(e.target.dataset.oqEnergyHistoryExportMode!==void 0){Rt({energyHistoryExportMode:hn(e.target.value),energyHistoryExportError:"",energyHistoryExportNotice:""}),h();return}let t=e.target.dataset.oqField;if(!t)return;let r=I[t];if(r){if(r.domain==="select"){Vo(t,String(e.target.value));return}if(r.domain==="number"){Ia(t,e.target.value);return}if(r.domain==="text"){Yb(t,e.target.value);return}if(r.domain==="time"){let n=At(e.target.value);if(!n){o.controlError=`${r.name} verwacht tijd als HH:MM.`,h();return}Qb(t,n);return}if(r.domain==="datetime"){let n=Xe(e.target.value);if(!n){o.controlError=`${r.name} verwacht datum en tijd.`,h();return}Xb(t,n);return}}}function Hv(e){let t=e.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");if(t){let m=t.querySelector("input[data-oq-field]");if(m&&(m.type==="time"||m.type==="datetime-local")&&typeof m.showPicker=="function")try{m.showPicker()}catch{}}let r=e.target.closest('[data-oq-action="toggle-settings-info"]'),n=e.target.closest("[data-oq-settings-info]"),a=e.target.closest(".oq-helper-hub"),i=e.target.closest("[data-oq-control-replay-period-menu]"),l=e.target.closest("[data-oq-modal]");if(r){let m=r.dataset.infoId||"";o.settingsInfoOpen=o.settingsInfoOpen===m?"":m,h();return}let c=e.target.closest("[data-oq-action]"),d=o.interfacePanelOpen&&!a;if(!c){let m=!1;if(o.settingsInfoOpen&&!n&&(o.settingsInfoOpen="",m=!0),d&&(ua(!1),m=!0),o.controlReplayPeriodMenuOpen&&!i&&(o.controlReplayPeriodMenuOpen=!1,o.controlReplayCustomPeriodOpen=!1,m=!0),l&&e.target===l){if(l.dataset.oqModal==="quickstart-forced")return;o.updateModalOpen&&(Re({updateModalOpen:!1,firmwareAdvancedOpen:!1,firmwareConnectionSwitchOpen:!1,firmwareTopologySwitchOpen:!1,updateManualUploadOpen:!1,updateTestFirmwareOpen:!1,firmwareConnectionSwitchConfirmed:!1,firmwareTopologySwitchConfirmed:!1}),Me(),ot(),m=!0),o.systemModal&&(ya(),ko(),o.systemModal="",m=!0)}m&&h();return}d&&c.dataset.oqAction!=="toggle-interface-panel"&&ua(!1);let u=c.dataset.oqAction;m0.some(m=>m(u,c,e))||ep(u,c)}function f0(e){let t=Math.max(0,Math.min(1440,Math.round(e/5)*5));!Number.isNaN(t)&&o.controlReplayGraphMinute!==t&&(o.controlReplayGraphMinute=t,h())}function Dv(e,t){let r=t||o.root?.querySelector("[data-oq-control-replay-scrub]");if(!r)return;let n=r.getBoundingClientRect();if(!n.width)return;let a=Math.max(0,Math.min(1,(e-n.left)/n.width));f0(a*1440)}function Nv(e){let t=e.target.closest("[data-oq-control-replay-scrub]");if(t){o.controlReplayScrubbing=!0,e.preventDefault(),Dv(e.clientX,t);return}let r=e.target.closest("[data-curve-key]");!r||!se()||(o.draggingCurveKey=r.dataset.curveKey||"",cd(e.clientY))}function Ov(e){if(typeof gu=="function"&&gu(e),o.controlReplayScrubbing){e.preventDefault(),Dv(e.clientX);return}o.draggingCurveKey&&cd(e.clientY)}function Pv(){if(o.controlReplayScrubbing){o.controlReplayScrubbing=!1;return}if(!o.draggingCurveKey)return;let e=o.draggingCurveKey,t=qe(e,T(e));o.draggingCurveKey="",Ia(e,t,"Curvepunt bijgewerkt.")}wp({handleChange:Rv,handleClick:Hv,handleFocusChange:Cv,handleInput:$v,handleKeyDown:Av,handlePointerDown:Nv,handlePointerMove:Ov,handlePointerUp:Pv,handleSettingsInteractionEnd:Mv,handleSettingsInteractionStart:xv,handleWheel:_v});Og();})();
