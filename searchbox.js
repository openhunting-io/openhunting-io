const suggestions = [
    {
        "text": "Dridex (Dridex, Bugat v5)",
        "url": "threat-library-detail.html?data=dridex"
    },
    {
        "text": "Cobalt Strike (Cobalt Strike, CobaltStrike, Agentemis, BEACON, cobeacon)",
        "url": "threat-library-detail.html?data=cobalt_strike"
    },
    {
        "text": "Amadey (Amadey)",
        "url": "threat-library-detail.html?data=amadey"
    },
    {
        "text": "AZORult (AZORult, PuffStealer, Rultazo)",
        "url": "threat-library-detail.html?data=azorult"
    },
    {
        "text": "TeamSpy (TeamSpy, TVSpy, TVRAT, SpY-Agent, TeamViewerENT)",
        "url": "threat-library-detail.html?data=teamspy"
    },
    {
        "text": "Agent Tesla (Agent Tesla, AgentTesla, AgenTesla, Origin Logger, Negasteal)",
        "url": "threat-library-detail.html?data=agent_tesla"
    },
    {
        "text": "Ave Maria (Ave Maria, AVE_MARIA, AveMariaRAT, avemaria)",
        "url": "threat-library-detail.html?data=ave_maria"
    },
    {
        "text": "AsyncRAT (AsyncRAT)",
        "url": "threat-library-detail.html?data=asyncrat"
    },
    {
        "text": "NanoCore RAT (NanoCore RAT, NanoCore, Nancrat, Zurten, Atros2.CKPN)",
        "url": "threat-library-detail.html?data=nanocore_rat"
    },
    {
        "text": "DarkCrystal RAT (DarkCrystal RAT, DCRat)",
        "url": "threat-library-detail.html?data=darkcrystal_rat"
    },
    {
        "text": "Get2 (Get2, FRIENDSPEAK, GetandGo)",
        "url": "threat-library-detail.html?data=get2"
    },
    {
        "text": "Meterpreter (Meterpreter)",
        "url": "threat-library-detail.html?data=meterpreter"
    },
    {
        "text": "Sliver (Sliver)",
        "url": "threat-library-detail.html?data=sliver"
    },
    {
        "text": "Vjw0rm (Vjw0rm, Vengeance Justice Worm)",
        "url": "threat-library-detail.html?data=vjw0rm"
    },
    {
        "text": "BlackNET RAT (BlackNET RAT)",
        "url": "threat-library-detail.html?data=blacknet_rat"
    },
    {
        "text": "njRAT (njRAT, Bladabindi, Jorik)",
        "url": "threat-library-detail.html?data=njrat"
    },
    {
        "text": "Responder (Responder, SpiderLabs Responder)",
        "url": "threat-library-detail.html?data=responder"
    },
    {
        "text": "RMS (RMS, Remote Manipulator System, Gussdoor)",
        "url": "threat-library-detail.html?data=rms"
    },
    {
        "text": "BumbleBee (BumbleBee)",
        "url": "threat-library-detail.html?data=bumblebee"
    },
    {
        "text": "VIDAR (VIDAR)",
        "url": "threat-library-detail.html?data=vidar"
    },
    {
        "text": "BitRAT (BitRAT)",
        "url": "threat-library-detail.html?data=bitrat"
    },
    {
        "text": "Mekotio (Mekotio, Metamorfo, Casbaneiro)",
        "url": "threat-library-detail.html?data=mekotio"
    },
    {
        "text": "Orcus RAT (Orcus RAT, Orcus, Schnorchel)",
        "url": "threat-library-detail.html?data=orcus_rat"
    },
    {
        "text": "BazarBackdoor (BazarBackdoor, BazarLoader, BEERBOT, BazarCall, KEGTAP, Team9Backdoor, bazaloader)",
        "url": "threat-library-detail.html?data=bazarbackdoor"
    },
    {
        "text": "Formbook (Formbook, win.xloader)",
        "url": "threat-library-detail.html?data=formbook"
    },
    {
        "text": "Crimson RAT (Crimson RAT, Crimson, SEEDOOR, Scarimson, MSIL, MSIL/Crimson)",
        "url": "threat-library-detail.html?data=crimson_rat"
    },
    {
        "text": "Bisonal (Bisonal, Korlia)",
        "url": "threat-library-detail.html?data=bisonal"
    },
    {
        "text": "Kimsuky (Kimsuky)",
        "url": "threat-library-detail.html?data=kimsuky"
    },
    {
        "text": "GodFather (GodFather)",
        "url": "threat-library-detail.html?data=godfather"
    },
    {
        "text": "Pony (Pony, Pony Loader, Siplog, Fareit)",
        "url": "threat-library-detail.html?data=pony"
    },
    {
        "text": "SystemBC (SystemBC, Coroxy)",
        "url": "threat-library-detail.html?data=systembc"
    },
    {
        "text": "Cerberus (Cerberus)",
        "url": "threat-library-detail.html?data=cerberus"
    },
    {
        "text": "Konni (Konni)",
        "url": "threat-library-detail.html?data=konni"
    },
    {
        "text": "DOGCALL (DOGCALL)",
        "url": "threat-library-detail.html?data=dogcall"
    },
    {
        "text": "RokRAT (RokRAT)",
        "url": "threat-library-detail.html?data=rokrat"
    },
    {
        "text": "DarkComet (DarkComet, DarkKomet, Fynloski, FYNLOS, klovbot, Krademok, Breut)",
        "url": "threat-library-detail.html?data=darkcomet"
    },
    {
        "text": "LokiBot (LokiBot, Loki, LokiPWS, Loki.Rat, ForeIT)",
        "url": "threat-library-detail.html?data=lokibot"
    },
    {
        "text": "Silence (Silence, Silence.Downloader, TrueBot)",
        "url": "threat-library-detail.html?data=silence"
    },
    {
        "text": "NetWire RC (NetWire RC, NetWire RAT, NetWired RC, NetWire, NetWeird, Recam)",
        "url": "threat-library-detail.html?data=netwire_rc"
    },
    {
        "text": "Loda (Loda, Loda RAT, LodaRAT, Nymeria)",
        "url": "threat-library-detail.html?data=loda"
    },
    {
        "text": "SparkRAT (SparkRAT)",
        "url": "threat-library-detail.html?data=sparkrat"
    },
    {
        "text": "Adwind (Adwind, Adwind RAT, Frutas, jFrutas, UnReCoM, Alien Spy, AlienSpy, JSocket, Sockrat, jBiFrost, JBifrost RAT, Unknown RAT, jConnectPro RAT, Unrecom, Trojan.Maljava)",
        "url": "threat-library-detail.html?data=adwind"
    },
    {
        "text": "Emotet (Emotet, Geodo, Heodo)",
        "url": "threat-library-detail.html?data=emotet"
    },
    {
        "text": "ERMAC (ERMAC)",
        "url": "threat-library-detail.html?data=ermac"
    },
    {
        "text": "Spyder (Spyder)",
        "url": "threat-library-detail.html?data=spyder"
    },
    {
        "text": "LimeRAT (LimeRAT)",
        "url": "threat-library-detail.html?data=limerat"
    },
    {
        "text": "Magecart (Magecart)",
        "url": "threat-library-detail.html?data=magecart"
    },
    {
        "text": "QakBot (QakBot, QuakBot, QuackBot, Qbot, PinkSlip, Pinkslipbot, Oakboat)",
        "url": "threat-library-detail.html?data=qakbot"
    },
    {
        "text": "XMRig (XMRig)",
        "url": "threat-library-detail.html?data=xmrig"
    },
    {
        "text": "TrickBot (TrickBot, Trickster, The Trick, TheTrick, Totbrick, TrickLoader, TSPY_TRICKLOAD)",
        "url": "threat-library-detail.html?data=trickbot"
    },
    {
        "text": "Mimikatz (Mimikatz)",
        "url": "threat-library-detail.html?data=mimikatz"
    },
    {
        "text": "DarkVNC (DarkVNC)",
        "url": "threat-library-detail.html?data=darkvnc"
    },
    {
        "text": "DIRTCLEANER (DIRTCLEANER, CCleaner Backdoor)",
        "url": "threat-library-detail.html?data=dirtcleaner"
    },
    {
        "text": "Bandook (Bandook, Bandok)",
        "url": "threat-library-detail.html?data=bandook"
    },
    {
        "text": "SharkBot (SharkBot)",
        "url": "threat-library-detail.html?data=sharkbot"
    },
    {
        "text": "DanaBot (DanaBot)",
        "url": "threat-library-detail.html?data=danabot"
    },
    {
        "text": "Gozi (Gozi, CRM, Gozi CRM, Papras, Ursnif, Snifula)",
        "url": "threat-library-detail.html?data=gozi"
    },
    {
        "text": "TinyNuke (TinyNuke, NukeBot, Nuclear Bot, MicroBankingTrojan, Xbot)",
        "url": "threat-library-detail.html?data=tinynuke"
    },
    {
        "text": "Grandoreiro (Grandoreiro)",
        "url": "threat-library-detail.html?data=grandoreiro"
    },
    {
        "text": "HyperBro (HyperBro)",
        "url": "threat-library-detail.html?data=hyperbro"
    },
    {
        "text": "Bahamut (Bahamut)",
        "url": "threat-library-detail.html?data=bahamut"
    },
    {
        "text": "Raspberry Robin (Raspberry Robin, RaspberryRobin, LINK_MSIEXEC, QNAP-Worm)",
        "url": "threat-library-detail.html?data=raspberry_robin"
    },
    {
        "text": "LockBit (LockBit, ABCD Ransomware, LockBit Black)",
        "url": "threat-library-detail.html?data=lockbit"
    },
    {
        "text": "Z*Stealer (Z*Stealer, ZStealer)",
        "url": "threat-library-detail.html?data=zstealer"
    },
    {
        "text": "JSSLoader (JSSLoader, FOWLGAZE)",
        "url": "threat-library-detail.html?data=jssloader"
    },
    {
        "text": "AndroRAT (AndroRAT)",
        "url": "threat-library-detail.html?data=androrat"
    },
    {
        "text": "ROMCOM RAT (ROMCOM RAT, ROMCOM)",
        "url": "threat-library-detail.html?data=romcom_rat"
    },
    {
        "text": "FASTCash (FASTCash)",
        "url": "threat-library-detail.html?data=fastcash"
    },
    {
        "text": "BetaBot (BetaBot, Neurevt)",
        "url": "threat-library-detail.html?data=betabot"
    },
    {
        "text": "Conti (Conti)",
        "url": "threat-library-detail.html?data=conti"
    },
    {
        "text": "PlugX (PlugX, Destroy RAT, DestroyRAT, Korplug, Sogu, Kaba, Xamtrav, Agent.dhwf, RedDelta, TIGERPLUG, Thoper, TVT)",
        "url": "threat-library-detail.html?data=plugx"
    },
    {
        "text": "Xenomorph (Xenomorph)",
        "url": "threat-library-detail.html?data=xenomorph"
    },
    {
        "text": "Anubis (Anubis, BankBot, Go_P00t, android.bankbot, android.bankspy)",
        "url": "threat-library-detail.html?data=anubis"
    },
    {
        "text": "S.O.V.A. (S.O.V.A.)",
        "url": "threat-library-detail.html?data=s.o.v.a."
    },
    {
        "text": "Clop (Clop, Cl0p)",
        "url": "threat-library-detail.html?data=clop"
    },
    {
        "text": "Ficker Stealer (Ficker Stealer)",
        "url": "threat-library-detail.html?data=ficker_stealer"
    },
    {
        "text": "Colibri Loader (Colibri Loader)",
        "url": "threat-library-detail.html?data=colibri_loader"
    },
    {
        "text": "ReverseRAT (ReverseRAT)",
        "url": "threat-library-detail.html?data=reverserat"
    },
    {
        "text": "Titan (Titan)",
        "url": "threat-library-detail.html?data=titan"
    },
    {
        "text": "BlackMatter (BlackMatter)",
        "url": "threat-library-detail.html?data=blackmatter"
    },
    {
        "text": "8.t Dropper (8.t Dropper, 8.t RTF exploit builder, 8t_dropper, RoyalRoad)",
        "url": "threat-library-detail.html?data=8.t_dropper"
    },
    {
        "text": "Nymaim (Nymaim, nymain)",
        "url": "threat-library-detail.html?data=nymaim"
    },
    {
        "text": "GandCrab (GandCrab, GrandCrab)",
        "url": "threat-library-detail.html?data=gandcrab"
    },
    {
        "text": "Cutwail (Cutwail, Pushdo)",
        "url": "threat-library-detail.html?data=cutwail"
    },
    {
        "text": "ASPXSpy (ASPXSpy, ASPXTool)",
        "url": "threat-library-detail.html?data=aspxspy"
    },
    {
        "text": "CryptoLocker (CryptoLocker)",
        "url": "threat-library-detail.html?data=cryptolocker"
    },
    {
        "text": "PoshC2 (PoshC2)",
        "url": "threat-library-detail.html?data=poshc2"
    },
    {
        "text": "Poison Ivy (Poison Ivy, pivy, poisonivy, Gen:Trojan.Heur.PT, Darkmoon, Chymine, SPIVY)",
        "url": "threat-library-detail.html?data=poison_ivy"
    },
    {
        "text": "Ares (Ares)",
        "url": "threat-library-detail.html?data=ares"
    },
    {
        "text": "ZeroCleare (ZeroCleare)",
        "url": "threat-library-detail.html?data=zerocleare"
    },
    {
        "text": "Confucius (Confucius, ChatSpy)",
        "url": "threat-library-detail.html?data=confucius"
    },
    {
        "text": "Brata (Brata, AmexTroll)",
        "url": "threat-library-detail.html?data=brata"
    },
    {
        "text": "Winnti (Winnti, BleDoor, RbDoor, RibDoor)",
        "url": "threat-library-detail.html?data=winnti"
    },
    {
        "text": "DreamBot (DreamBot)",
        "url": "threat-library-detail.html?data=dreambot"
    },
    {
        "text": "SmsSpy (SmsSpy)",
        "url": "threat-library-detail.html?data=smsspy"
    },
    {
        "text": "OceanLotus (OceanLotus, OSX_OCEANLOTUS.D, Backdoor.MacOS.OCEANLOTUS.F)",
        "url": "threat-library-detail.html?data=oceanlotus"
    },
    {
        "text": "Vadokrist (Vadokrist)",
        "url": "threat-library-detail.html?data=vadokrist"
    },
    {
        "text": "Evilnum (Evilnum, EVILNUM, Marvel)",
        "url": "threat-library-detail.html?data=evilnum"
    },
    {
        "text": "DarkSide (DarkSide)",
        "url": "threat-library-detail.html?data=darkside"
    },
    {
        "text": "X-Agent (X-Agent, Xagent, Popr-d30, SPLM, CHOPSTICK, fysbis, Backdoor.SofacyX, webhp)",
        "url": "threat-library-detail.html?data=x-agent"
    },
    {
        "text": "Roaming Mantis (Roaming Mantis, MoqHao, XLoader, Wroba)",
        "url": "threat-library-detail.html?data=roaming_mantis"
    },
    {
        "text": "BADNEWS (BADNEWS, JakyllHyde)",
        "url": "threat-library-detail.html?data=badnews"
    },
    {
        "text": "OLDBAIT (OLDBAIT, Sasfis)",
        "url": "threat-library-detail.html?data=oldbait"
    },
    {
        "text": "Sasfis (Sasfis, Oficla)",
        "url": "threat-library-detail.html?data=sasfis"
    },
    {
        "text": "PhantomNet (PhantomNet, SManager)",
        "url": "threat-library-detail.html?data=phantomnet"
    },
    {
        "text": "BadPatch (BadPatch, WelcomeChat)",
        "url": "threat-library-detail.html?data=badpatch"
    },
    {
        "text": "EnvyScout (EnvyScout, ROOTSAW)",
        "url": "threat-library-detail.html?data=envyscout"
    },
    {
        "text": "Hancitor (Hancitor, Chanitor)",
        "url": "threat-library-detail.html?data=hancitor"
    },
    {
        "text": "Ramnit (Ramnit, Nimnul)",
        "url": "threat-library-detail.html?data=ramnit"
    },
    {
        "text": "PLEAD (PLEAD, DRAWDOWN, GOODTIMES, Linopid, TSCookie)",
        "url": "threat-library-detail.html?data=plead"
    },
    {
        "text": "BlackCat (BlackCat, ALPHV, ALPHVM, Noberus)",
        "url": "threat-library-detail.html?data=blackcat"
    },
    {
        "text": "Machete (Machete, El Machete)",
        "url": "threat-library-detail.html?data=machete"
    },
    {
        "text": "SUNBURST (SUNBURST, Solorigate)",
        "url": "threat-library-detail.html?data=sunburst"
    },
    {
        "text": "HermeticWiper (HermeticWiper, DriveSlayer, FoxBlade, KillDisk.NCV, Trojan.Killdisk, NEARMISS)",
        "url": "threat-library-detail.html?data=hermeticwiper"
    },
    {
        "text": "CaddyWiper (CaddyWiper, KillDisk.NCX)",
        "url": "threat-library-detail.html?data=caddywiper"
    },
    {
        "text": "IsaacWiper (IsaacWiper, LASAINRAW)",
        "url": "threat-library-detail.html?data=isaacwiper"
    },
    {
        "text": "ZLoader (ZLoader, Terdot, DELoader)",
        "url": "threat-library-detail.html?data=zloader"
    },
    {
        "text": "RedLeaves (RedLeaves, BUGJUICE)",
        "url": "threat-library-detail.html?data=redleaves"
    },
    {
        "text": "Numando (Numando)",
        "url": "threat-library-detail.html?data=numando"
    },
    {
        "text": "WhisperGate (WhisperGate, WhisperKill, PAYWIPE)",
        "url": "threat-library-detail.html?data=whispergate"
    },
    {
        "text": "sLoad (sLoad, StarsLord)",
        "url": "threat-library-detail.html?data=sload"
    },
    {
        "text": "Parallax RAT (Parallax RAT, ParallaxRAT, Parallax)",
        "url": "threat-library-detail.html?data=parallax_rat"
    },
    {
        "text": "SpyMax (SpyMax)",
        "url": "threat-library-detail.html?data=spymax"
    },
    {
        "text": "Retefe (Retefe, Dok, Tsukuba, Werdlod)",
        "url": "threat-library-detail.html?data=retefe"
    },
    {
        "text": "Diavol (Diavol)",
        "url": "threat-library-detail.html?data=diavol"
    },
    {
        "text": "ServHelper (ServHelper)",
        "url": "threat-library-detail.html?data=servhelper"
    },
    {
        "text": "Cuba (Cuba, COLDDRAW)",
        "url": "threat-library-detail.html?data=cuba"
    },
    {
        "text": "RagnarLocker (RagnarLocker, Ragnar Locker)",
        "url": "threat-library-detail.html?data=ragnarlocker"
    },
    {
        "text": "Avaddon (Avaddon)",
        "url": "threat-library-detail.html?data=avaddon"
    },
    {
        "text": "MirrorBlast (MirrorBlast)",
        "url": "threat-library-detail.html?data=mirrorblast"
    },
    {
        "text": "FlawedGrace (FlawedGrace, GraceWire)",
        "url": "threat-library-detail.html?data=flawedgrace"
    },
    {
        "text": "Zeus (Zeus, ZeuS, Zbot, Trojan.Zbot, Wsnpoem, Gorhax, Kneber)",
        "url": "threat-library-detail.html?data=zeus"
    },
    {
        "text": "Sality (Sality, Sector, Kuku, SalLoad, Kookoo, SaliCode, Kukacka)",
        "url": "threat-library-detail.html?data=sality"
    },
    {
        "text": "RDAT (RDAT, GREYSTUFF)",
        "url": "threat-library-detail.html?data=rdat"
    },
    {
        "text": "Griffon (Griffon, Harpy)",
        "url": "threat-library-detail.html?data=griffon"
    },
    {
        "text": "Kronos (Kronos)",
        "url": "threat-library-detail.html?data=kronos"
    },
    {
        "text": "Osiris (Osiris)",
        "url": "threat-library-detail.html?data=osiris"
    },
    {
        "text": "Mydoom (Mydoom, Novarg, Mimail)",
        "url": "threat-library-detail.html?data=mydoom"
    },
    {
        "text": "Dexter (Dexter, LusyPOS, StarDust)",
        "url": "threat-library-detail.html?data=dexter"
    },
    {
        "text": "Micropsia (Micropsia)",
        "url": "threat-library-detail.html?data=micropsia"
    },
    {
        "text": "Infy (Infy, Foudre)",
        "url": "threat-library-detail.html?data=infy"
    },
    {
        "text": "Anchor (Anchor, Anchor_DNS)",
        "url": "threat-library-detail.html?data=anchor"
    },
    {
        "text": "Janeleiro (Janeleiro)",
        "url": "threat-library-detail.html?data=janeleiro"
    },
    {
        "text": "WellMail (WellMail)",
        "url": "threat-library-detail.html?data=wellmail"
    },
    {
        "text": "Derusbi (Derusbi, PHOTO)",
        "url": "threat-library-detail.html?data=derusbi"
    },
    {
        "text": "Imminent Monitor RAT (Imminent Monitor RAT, Imminent Monitor)",
        "url": "threat-library-detail.html?data=imminent_monitor_rat"
    },
    {
        "text": "FlawedAmmyy (FlawedAmmyy, AmmyyRAT)",
        "url": "threat-library-detail.html?data=flawedammyy"
    },
    {
        "text": "Nefilim (Nefilim, Nephilim)",
        "url": "threat-library-detail.html?data=nefilim"
    },
    {
        "text": "ARTFULPIE (ARTFULPIE)",
        "url": "threat-library-detail.html?data=artfulpie"
    },
    {
        "text": "Qadars (Qadars)",
        "url": "threat-library-detail.html?data=qadars"
    },
    {
        "text": "Dustman (Dustman)",
        "url": "threat-library-detail.html?data=dustman"
    },
    {
        "text": "Cinobi (Cinobi)",
        "url": "threat-library-detail.html?data=cinobi"
    },
    {
        "text": "WastedLocker (WastedLocker)",
        "url": "threat-library-detail.html?data=wastedlocker"
    },
    {
        "text": "Ryuk (Ryuk)",
        "url": "threat-library-detail.html?data=ryuk"
    },
    {
        "text": "MedusaLocker (MedusaLocker, AKO Doxware, AKO Ransomware, MedusaReborn)",
        "url": "threat-library-detail.html?data=medusalocker"
    },
    {
        "text": "SeDLL (SeDLL)",
        "url": "threat-library-detail.html?data=sedll"
    },
    {
        "text": "Albaniiutas (Albaniiutas, BlueTraveller)",
        "url": "threat-library-detail.html?data=albaniiutas"
    },
    {
        "text": "StrongPity (StrongPity)",
        "url": "threat-library-detail.html?data=strongpity"
    },
    {
        "text": "Locky (Locky)",
        "url": "threat-library-detail.html?data=locky"
    },
    {
        "text": "RedXOR (RedXOR)",
        "url": "threat-library-detail.html?data=redxor"
    },
    {
        "text": "BlackRock (BlackRock, AmpleBot)",
        "url": "threat-library-detail.html?data=blackrock"
    },
    {
        "text": "3102 RAT (3102 RAT)",
        "url": "threat-library-detail.html?data=3102_rat"
    },
    {
        "text": "3PARA RAT (3PARA RAT)",
        "url": "threat-library-detail.html?data=3para_rat"
    },
    {
        "text": "3proxy (3proxy)",
        "url": "threat-library-detail.html?data=3proxy"
    },
    {
        "text": "3Rat Client (3Rat Client)",
        "url": "threat-library-detail.html?data=3rat_client"
    },
    {
        "text": "404-Input-shell web shell (404-Input-shell web shell)",
        "url": "threat-library-detail.html?data=404-input-shell_web_shell"
    },
    {
        "text": "4H RAT (4H RAT, 4h_rat)",
        "url": "threat-library-detail.html?data=4h_rat"
    },
    {
        "text": "7Logger (7Logger)",
        "url": "threat-library-detail.html?data=7logger"
    },
    {
        "text": "7-Zip (7-Zip)",
        "url": "threat-library-detail.html?data=7-zip"
    },
    {
        "text": "888 RAT (888 RAT)",
        "url": "threat-library-detail.html?data=888_rat"
    },
    {
        "text": "9002 RAT (9002 RAT, McRAT, MdmBot, Homux, Hydraq, HidraQ, HOMEUNIX, Aurora, Roarur)",
        "url": "threat-library-detail.html?data=9002_rat"
    },
    {
        "text": "AbaddonPOS (AbaddonPOS)",
        "url": "threat-library-detail.html?data=abaddonpos"
    },
    {
        "text": "AceHash (AceHash)",
        "url": "threat-library-detail.html?data=acehash"
    },
    {
        "text": "AcidRain (AcidRain)",
        "url": "threat-library-detail.html?data=acidrain"
    },
    {
        "text": "ActionRAT (ActionRAT)",
        "url": "threat-library-detail.html?data=actionrat"
    },
    {
        "text": "ActionSpy (ActionSpy, AxeSpy)",
        "url": "threat-library-detail.html?data=actionspy"
    },
    {
        "text": "Acunetix Web Vulnerability Scanner (Acunetix Web Vulnerability Scanner)",
        "url": "threat-library-detail.html?data=acunetix_web_vulnerability_scanner"
    },
    {
        "text": "adbupd (adbupd)",
        "url": "threat-library-detail.html?data=adbupd"
    },
    {
        "text": "AdFind (AdFind)",
        "url": "threat-library-detail.html?data=adfind"
    },
    {
        "text": "Adminer (Adminer)",
        "url": "threat-library-detail.html?data=adminer"
    },
    {
        "text": "AdobeARM (AdobeARM)",
        "url": "threat-library-detail.html?data=adobearm"
    },
    {
        "text": "ADORE.XSEC (ADORE.XSEC)",
        "url": "threat-library-detail.html?data=adore.xsec"
    },
    {
        "text": "Advanced Port Scanner (Advanced Port Scanner)",
        "url": "threat-library-detail.html?data=advanced_port_scanner"
    },
    {
        "text": "AdvisorsBot (AdvisorsBot)",
        "url": "threat-library-detail.html?data=advisorsbot"
    },
    {
        "text": "Adzok (Adzok, Invisible Remote Administrator)",
        "url": "threat-library-detail.html?data=adzok"
    },
    {
        "text": "Agent.BTZ (Agent.BTZ, Minit, Chinch, Sun rootkit)",
        "url": "threat-library-detail.html?data=agent.btz"
    },
    {
        "text": "Agent.DNE (Agent.DNE)",
        "url": "threat-library-detail.html?data=agent.dne"
    },
    {
        "text": "agfSpy (agfSpy)",
        "url": "threat-library-detail.html?data=agfspy"
    },
    {
        "text": "Aggah (Aggah)",
        "url": "threat-library-detail.html?data=aggah"
    },
    {
        "text": "AIRBREAK (AIRBREAK, Orz)",
        "url": "threat-library-detail.html?data=airbreak"
    },
    {
        "text": "Alice (Alice, AliceATM, PrAlice, Project Alice)",
        "url": "threat-library-detail.html?data=alice"
    },
    {
        "text": "Alina POS (Alina POS, Track, alina_eagle, alina_spark, aline_joker, katrina)",
        "url": "threat-library-detail.html?data=alina_pos"
    },
    {
        "text": "Allakore RAT (Allakore RAT, AllaKore)",
        "url": "threat-library-detail.html?data=allakore_rat"
    },
    {
        "text": "Alma Communicator (Alma Communicator)",
        "url": "threat-library-detail.html?data=alma_communicator"
    },
    {
        "text": "ALPC Local PrivEsc (ALPC Local PrivEsc)",
        "url": "threat-library-detail.html?data=alpc_local_privesc"
    },
    {
        "text": "Amavaldo (Amavaldo)",
        "url": "threat-library-detail.html?data=amavaldo"
    },
    {
        "text": "Amphibeon (Amphibeon)",
        "url": "threat-library-detail.html?data=amphibeon"
    },
    {
        "text": "AMTsol (AMTsol, Adupihan)",
        "url": "threat-library-detail.html?data=amtsol"
    },
    {
        "text": "Andaratm (Andaratm)",
        "url": "threat-library-detail.html?data=andaratm"
    },
    {
        "text": "AndoServer (AndoServer)",
        "url": "threat-library-detail.html?data=andoserver"
    },
    {
        "text": "Android RAT (Android RAT)",
        "url": "threat-library-detail.html?data=android_rat"
    },
    {
        "text": "Andromeda (Andromeda, Gamarue, B106-Gamarue, B67-SS-Gamarue, b66)",
        "url": "threat-library-detail.html?data=andromeda"
    },
    {
        "text": "AndroMut (AndroMut)",
        "url": "threat-library-detail.html?data=andromut"
    },
    {
        "text": "Anel (Anel, lena, UpperCut)",
        "url": "threat-library-detail.html?data=anel"
    },
    {
        "text": "Antak (Antak)",
        "url": "threat-library-detail.html?data=antak"
    },
    {
        "text": "Antd (Antd, GreedyAntd)",
        "url": "threat-library-detail.html?data=antd"
    },
    {
        "text": "AntSword (AntSword)",
        "url": "threat-library-detail.html?data=antsword"
    },
    {
        "text": "AnubisSpy (AnubisSpy)",
        "url": "threat-library-detail.html?data=anubisspy"
    },
    {
        "text": "AnyDesk (AnyDesk)",
        "url": "threat-library-detail.html?data=anydesk"
    },
    {
        "text": "ApacheStealer (ApacheStealer)",
        "url": "threat-library-detail.html?data=apachestealer"
    },
    {
        "text": "APERETIF (APERETIF)",
        "url": "threat-library-detail.html?data=aperetif"
    },
    {
        "text": "Apocalipto (Apocalipto)",
        "url": "threat-library-detail.html?data=apocalipto"
    },
    {
        "text": "Apostle (Apostle)",
        "url": "threat-library-detail.html?data=apostle"
    },
    {
        "text": "AppleJeus (AppleJeus)",
        "url": "threat-library-detail.html?data=applejeus"
    },
    {
        "text": "AppleSeed (AppleSeed, JamBog)",
        "url": "threat-library-detail.html?data=appleseed"
    },
    {
        "text": "APT3 Keylogger (APT3 Keylogger)",
        "url": "threat-library-detail.html?data=apt3_keylogger"
    },
    {
        "text": "AresRAT (AresRAT)",
        "url": "threat-library-detail.html?data=aresrat"
    },
    {
        "text": "ArguePatch (ArguePatch)",
        "url": "threat-library-detail.html?data=arguepatch"
    },
    {
        "text": "Aria-body (Aria-body, AR)",
        "url": "threat-library-detail.html?data=aria-body"
    },
    {
        "text": "Aria-body loader (Aria-body loader)",
        "url": "threat-library-detail.html?data=aria-body_loader"
    },
    {
        "text": "ARL (ARL, Asset Reconnaissance Lighthouse)",
        "url": "threat-library-detail.html?data=arl"
    },
    {
        "text": "ArtraDownloader (ArtraDownloader, Artra Downloader)",
        "url": "threat-library-detail.html?data=artradownloader"
    },
    {
        "text": "Aryan (Aryan)",
        "url": "threat-library-detail.html?data=aryan"
    },
    {
        "text": "Asacub (Asacub, Trojan-SMS.AndroidOS.Smaps)",
        "url": "threat-library-detail.html?data=asacub"
    },
    {
        "text": "Asruex (Asruex)",
        "url": "threat-library-detail.html?data=asruex"
    },
    {
        "text": "Astra (Astra)",
        "url": "threat-library-detail.html?data=astra"
    },
    {
        "text": "ATI-Agent (ATI-Agent)",
        "url": "threat-library-detail.html?data=ati-agent"
    },
    {
        "text": "ATMDtrack (ATMDtrack)",
        "url": "threat-library-detail.html?data=atmdtrack"
    },
    {
        "text": "ATMii (ATMii)",
        "url": "threat-library-detail.html?data=atmii"
    },
    {
        "text": "ATMitch (ATMitch)",
        "url": "threat-library-detail.html?data=atmitch"
    },
    {
        "text": "Atmos (Atmos)",
        "url": "threat-library-detail.html?data=atmos"
    },
    {
        "text": "Atmosphere (Atmosphere)",
        "url": "threat-library-detail.html?data=atmosphere"
    },
    {
        "text": "ATMRipper (ATMRipper, Ripper, Ripper ATM)",
        "url": "threat-library-detail.html?data=atmripper"
    },
    {
        "text": "ATMSpitter (ATMSpitter)",
        "url": "threat-library-detail.html?data=atmspitter"
    },
    {
        "text": "AtNow (AtNow)",
        "url": "threat-library-detail.html?data=atnow"
    },
    {
        "text": "AtomSilo (AtomSilo)",
        "url": "threat-library-detail.html?data=atomsilo"
    },
    {
        "text": "AuditCred (AuditCred, ROptimizer)",
        "url": "threat-library-detail.html?data=auditcred"
    },
    {
        "text": "August Stealer (August Stealer)",
        "url": "threat-library-detail.html?data=august_stealer"
    },
    {
        "text": "AUMLIB (AUMLIB, yayih, bbsinfo, mswab, Graftor)",
        "url": "threat-library-detail.html?data=aumlib"
    },
    {
        "text": "Auriga (Auriga, Riodrv)",
        "url": "threat-library-detail.html?data=auriga"
    },
    {
        "text": "AutoIt backdoor (AutoIt backdoor)",
        "url": "threat-library-detail.html?data=autoit_backdoor"
    },
    {
        "text": "Avalanche (Avalanche)",
        "url": "threat-library-detail.html?data=avalanche"
    },
    {
        "text": "Aversome infector (Aversome infector)",
        "url": "threat-library-detail.html?data=aversome_infector"
    },
    {
        "text": "AWFULSHRED (AWFULSHRED)",
        "url": "threat-library-detail.html?data=awfulshred"
    },
    {
        "text": "Babar (Babar, SNOWBALL)",
        "url": "threat-library-detail.html?data=babar"
    },
    {
        "text": "Babuk Locker (Babuk Locker, Babuk, Babyk, Vasa Locker)",
        "url": "threat-library-detail.html?data=babuk_locker"
    },
    {
        "text": "BABYMETAL (BABYMETAL)",
        "url": "threat-library-detail.html?data=babymetal"
    },
    {
        "text": "BabyShark (BabyShark)",
        "url": "threat-library-detail.html?data=babyshark"
    },
    {
        "text": "BackBend (BackBend)",
        "url": "threat-library-detail.html?data=backbend"
    },
    {
        "text": "BackConfig (BackConfig)",
        "url": "threat-library-detail.html?data=backconfig"
    },
    {
        "text": "Backdoor Batel (Backdoor Batel, Batel)",
        "url": "threat-library-detail.html?data=backdoor_batel"
    },
    {
        "text": "Backoff (Backoff, Backoff POS)",
        "url": "threat-library-detail.html?data=backoff"
    },
    {
        "text": "Backspace (Backspace, Lecna, ZRLnk)",
        "url": "threat-library-detail.html?data=backspace"
    },
    {
        "text": "Backswap (Backswap)",
        "url": "threat-library-detail.html?data=backswap"
    },
    {
        "text": "BadBazaar (BadBazaar)",
        "url": "threat-library-detail.html?data=badbazaar"
    },
    {
        "text": "BADCALL (BADCALL)",
        "url": "threat-library-detail.html?data=badcall"
    },
    {
        "text": "BADFLICK (BADFLICK)",
        "url": "threat-library-detail.html?data=badflick"
    },
    {
        "text": "BadHatch (BadHatch)",
        "url": "threat-library-detail.html?data=badhatch"
    },
    {
        "text": "BadPotato (BadPotato)",
        "url": "threat-library-detail.html?data=badpotato"
    },
    {
        "text": "BadRabbit (BadRabbit)",
        "url": "threat-library-detail.html?data=badrabbit"
    },
    {
        "text": "Baka (Baka)",
        "url": "threat-library-detail.html?data=baka"
    },
    {
        "text": "Banatrix (Banatrix)",
        "url": "threat-library-detail.html?data=banatrix"
    },
    {
        "text": "bangat (bangat)",
        "url": "threat-library-detail.html?data=bangat"
    },
    {
        "text": "Banjori (Banjori, BankPatch, BackPatcher, MultiBanker 2)",
        "url": "threat-library-detail.html?data=banjori"
    },
    {
        "text": "Bankshot (Bankshot, COPPERHEDGE, Trojan Manuscript)",
        "url": "threat-library-detail.html?data=bankshot"
    },
    {
        "text": "BanSwift (BanSwift)",
        "url": "threat-library-detail.html?data=banswift"
    },
    {
        "text": "Barb(ie) Downloader (Barb(ie) Downloader)",
        "url": "threat-library-detail.html?data=barb(ie)_downloader"
    },
    {
        "text": "BarbWire (BarbWire)",
        "url": "threat-library-detail.html?data=barbwire"
    },
    {
        "text": "Barlaiy (Barlaiy, POISONPLUG)",
        "url": "threat-library-detail.html?data=barlaiy"
    },
    {
        "text": "Bart (Bart)",
        "url": "threat-library-detail.html?data=bart"
    },
    {
        "text": "Bateleur (Bateleur)",
        "url": "threat-library-detail.html?data=bateleur"
    },
    {
        "text": "BBSRAT (BBSRAT)",
        "url": "threat-library-detail.html?data=bbsrat"
    },
    {
        "text": "BeaconLoader (BeaconLoader)",
        "url": "threat-library-detail.html?data=beaconloader"
    },
    {
        "text": "BEATDROP (BEATDROP)",
        "url": "threat-library-detail.html?data=beatdrop"
    },
    {
        "text": "BeEF (BeEF)",
        "url": "threat-library-detail.html?data=beef"
    },
    {
        "text": "beendoor (beendoor)",
        "url": "threat-library-detail.html?data=beendoor"
    },
    {
        "text": "Behinder (Behinder)",
        "url": "threat-library-detail.html?data=behinder"
    },
    {
        "text": "BELLHOP (BELLHOP)",
        "url": "threat-library-detail.html?data=bellhop"
    },
    {
        "text": "Bemstour (Bemstour)",
        "url": "threat-library-detail.html?data=bemstour"
    },
    {
        "text": "BendyBear (BendyBear)",
        "url": "threat-library-detail.html?data=bendybear"
    },
    {
        "text": "Benghazi.exe (Benghazi.exe)",
        "url": "threat-library-detail.html?data=benghazi.exe"
    },
    {
        "text": "BernhardPOS (BernhardPOS)",
        "url": "threat-library-detail.html?data=bernhardpos"
    },
    {
        "text": "Bezigate (Bezigate)",
        "url": "threat-library-detail.html?data=bezigate"
    },
    {
        "text": "BH_A006 (BH_A006)",
        "url": "threat-library-detail.html?data=bh_a006"
    },
    {
        "text": "BHUNT (BHUNT)",
        "url": "threat-library-detail.html?data=bhunt"
    },
    {
        "text": "BIFROST (BIFROST, elf.bifrose)",
        "url": "threat-library-detail.html?data=bifrost"
    },
    {
        "text": "BigpipeLoader (BigpipeLoader)",
        "url": "threat-library-detail.html?data=bigpipeloader"
    },
    {
        "text": "BINBASH (BINBASH)",
        "url": "threat-library-detail.html?data=binbash"
    },
    {
        "text": "Bioazih (Bioazih)",
        "url": "threat-library-detail.html?data=bioazih"
    },
    {
        "text": "BIOLOAD (BIOLOAD)",
        "url": "threat-library-detail.html?data=bioload"
    },
    {
        "text": "BIOPASS RAT (BIOPASS RAT, BIOPASS)",
        "url": "threat-library-detail.html?data=biopass_rat"
    },
    {
        "text": "BIRDWATCH (BIRDWATCH)",
        "url": "threat-library-detail.html?data=birdwatch"
    },
    {
        "text": "BISCUIT (BISCUIT, zxdosml)",
        "url": "threat-library-detail.html?data=biscuit"
    },
    {
        "text": "BISTROMATH (BISTROMATH)",
        "url": "threat-library-detail.html?data=bistromath"
    },
    {
        "text": "BitPaymer (BitPaymer, FriedEx, IEncrypt, wp_encrypt)",
        "url": "threat-library-detail.html?data=bitpaymer"
    },
    {
        "text": "Bitsran (Bitsran, SHADYCAT)",
        "url": "threat-library-detail.html?data=bitsran"
    },
    {
        "text": "BitterRAT (BitterRAT, Bitter RAT)",
        "url": "threat-library-detail.html?data=bitterrat"
    },
    {
        "text": "BITTERSWEET (BITTERSWEET)",
        "url": "threat-library-detail.html?data=bittersweet"
    },
    {
        "text": "Bizarro (Bizarro, Bizzaro)",
        "url": "threat-library-detail.html?data=bizarro"
    },
    {
        "text": "BlackCoffee (BlackCoffee, PNGRAT, ZoxPNG, gresim)",
        "url": "threat-library-detail.html?data=blackcoffee"
    },
    {
        "text": "BlackEnergy (BlackEnergy, Black Energy)",
        "url": "threat-library-detail.html?data=blackenergy"
    },
    {
        "text": "Black Lambert (Black Lambert)",
        "url": "threat-library-detail.html?data=black_lambert"
    },
    {
        "text": "BlackLotus (BlackLotus)",
        "url": "threat-library-detail.html?data=blacklotus"
    },
    {
        "text": "BlackMould (BlackMould)",
        "url": "threat-library-detail.html?data=blackmould"
    },
    {
        "text": "BlackPOS (BlackPOS, FrameworkPOS, Kaptoxa, POSWDS, Reedum, MMon)",
        "url": "threat-library-detail.html?data=blackpos"
    },
    {
        "text": "BlackRAT (BlackRAT, BlackRemote)",
        "url": "threat-library-detail.html?data=blackrat"
    },
    {
        "text": "BLINDINGCAN (BLINDINGCAN, DRATzarus RAT)",
        "url": "threat-library-detail.html?data=blindingcan"
    },
    {
        "text": "BlindToad (BlindToad)",
        "url": "threat-library-detail.html?data=blindtoad"
    },
    {
        "text": "Blogspot (Blogspot)",
        "url": "threat-library-detail.html?data=blogspot"
    },
    {
        "text": "BloodHound (BloodHound)",
        "url": "threat-library-detail.html?data=bloodhound"
    },
    {
        "text": "BlotchyQuasar (BlotchyQuasar)",
        "url": "threat-library-detail.html?data=blotchyquasar"
    },
    {
        "text": "BLUEAGAVE (BLUEAGAVE)",
        "url": "threat-library-detail.html?data=blueagave"
    },
    {
        "text": "BlueCore (BlueCore)",
        "url": "threat-library-detail.html?data=bluecore"
    },
    {
        "text": "BLUEHAZE (BLUEHAZE)",
        "url": "threat-library-detail.html?data=bluehaze"
    },
    {
        "text": "BLUELIGHT (BLUELIGHT)",
        "url": "threat-library-detail.html?data=bluelight"
    },
    {
        "text": "BlueShell (BlueShell)",
        "url": "threat-library-detail.html?data=blueshell"
    },
    {
        "text": "BLUESTEAL (BLUESTEAL)",
        "url": "threat-library-detail.html?data=bluesteal"
    },
    {
        "text": "Blue Lambert (Blue Lambert)",
        "url": "threat-library-detail.html?data=blue_lambert"
    },
    {
        "text": "Bluether (Bluether, CAPGELD)",
        "url": "threat-library-detail.html?data=bluether"
    },
    {
        "text": "BokBot (BokBot, IcedID, IceID)",
        "url": "threat-library-detail.html?data=bokbot"
    },
    {
        "text": "BONDUPDATER (BONDUPDATER, Poison Frog, Glimpse)",
        "url": "threat-library-detail.html?data=bondupdater"
    },
    {
        "text": "Bookcode (Bookcode)",
        "url": "threat-library-detail.html?data=bookcode"
    },
    {
        "text": "Bookworm (Bookworm)",
        "url": "threat-library-detail.html?data=bookworm"
    },
    {
        "text": "Boostwrite (Boostwrite)",
        "url": "threat-library-detail.html?data=boostwrite"
    },
    {
        "text": "BootWreck (BootWreck, MBRkiller)",
        "url": "threat-library-detail.html?data=bootwreck"
    },
    {
        "text": "Bouncer (Bouncer)",
        "url": "threat-library-detail.html?data=bouncer"
    },
    {
        "text": "Bourbon (Bourbon)",
        "url": "threat-library-detail.html?data=bourbon"
    },
    {
        "text": "Bozok (Bozok, Bozok RAT)",
        "url": "threat-library-detail.html?data=bozok"
    },
    {
        "text": "Brambul (Brambul, SierraBravo, SORRYBRUTE)",
        "url": "threat-library-detail.html?data=brambul"
    },
    {
        "text": "BrasDex (BrasDex)",
        "url": "threat-library-detail.html?data=brasdex"
    },
    {
        "text": "Brave Prince (Brave Prince)",
        "url": "threat-library-detail.html?data=brave_prince"
    },
    {
        "text": "BreachRAT (BreachRAT)",
        "url": "threat-library-detail.html?data=breachrat"
    },
    {
        "text": "Briba (Briba)",
        "url": "threat-library-detail.html?data=briba"
    },
    {
        "text": "BrittleBush (BrittleBush)",
        "url": "threat-library-detail.html?data=brittlebush"
    },
    {
        "text": "BROKEYOLK (BROKEYOLK)",
        "url": "threat-library-detail.html?data=brokeyolk"
    },
    {
        "text": "BroStealer (BroStealer)",
        "url": "threat-library-detail.html?data=brostealer"
    },
    {
        "text": "BrowserGhost (BrowserGhost)",
        "url": "threat-library-detail.html?data=browserghost"
    },
    {
        "text": "BrowsingHistoryView (BrowsingHistoryView)",
        "url": "threat-library-detail.html?data=browsinghistoryview"
    },
    {
        "text": "Brute Ratel (Brute Ratel)",
        "url": "threat-library-detail.html?data=brute_ratel"
    },
    {
        "text": "BrutishCommand (BrutishCommand)",
        "url": "threat-library-detail.html?data=brutishcommand"
    },
    {
        "text": "BrutPOS (BrutPOS)",
        "url": "threat-library-detail.html?data=brutpos"
    },
    {
        "text": "BS2005 (BS2005)",
        "url": "threat-library-detail.html?data=bs2005"
    },
    {
        "text": "BTC Changer (BTC Changer)",
        "url": "threat-library-detail.html?data=btc_changer"
    },
    {
        "text": "BUBBLEWRAP (BUBBLEWRAP, Backdoor.APT.FakeWinHTTPHelper)",
        "url": "threat-library-detail.html?data=bubblewrap"
    },
    {
        "text": "BUFFETLINE (BUFFETLINE)",
        "url": "threat-library-detail.html?data=buffetline"
    },
    {
        "text": "Buhtrap (Buhtrap, Ratopak)",
        "url": "threat-library-detail.html?data=buhtrap"
    },
    {
        "text": "Buran (Buran, VegaLocker, Vega)",
        "url": "threat-library-detail.html?data=buran"
    },
    {
        "text": "BUSTEDPIPE (BUSTEDPIPE)",
        "url": "threat-library-detail.html?data=bustedpipe"
    },
    {
        "text": "Bvp47 (Bvp47)",
        "url": "threat-library-detail.html?data=bvp47"
    },
    {
        "text": "Byeby (Byeby)",
        "url": "threat-library-detail.html?data=byeby"
    },
    {
        "text": "Bypass-UAC (Bypass-UAC)",
        "url": "threat-library-detail.html?data=bypass-uac"
    },
    {
        "text": "C0d0so0 (C0d0so0)",
        "url": "threat-library-detail.html?data=c0d0so0"
    },
    {
        "text": "Cachedump (Cachedump)",
        "url": "threat-library-detail.html?data=cachedump"
    },
    {
        "text": "CACTUSTORCH (CACTUSTORCH)",
        "url": "threat-library-detail.html?data=cactustorch"
    },
    {
        "text": "Cadelspy (Cadelspy, Cadelle, WinSpy)",
        "url": "threat-library-detail.html?data=cadelspy"
    },
    {
        "text": "Cahnadr (Cahnadr, NDriver)",
        "url": "threat-library-detail.html?data=cahnadr"
    },
    {
        "text": "Cain & Abel (Cain & Abel)",
        "url": "threat-library-detail.html?data=cain__abel"
    },
    {
        "text": "CAKETAP (CAKETAP)",
        "url": "threat-library-detail.html?data=caketap"
    },
    {
        "text": "CALENDAR (CALENDAR)",
        "url": "threat-library-detail.html?data=calendar"
    },
    {
        "text": "Calfbot (Calfbot)",
        "url": "threat-library-detail.html?data=calfbot"
    },
    {
        "text": "callCam (callCam)",
        "url": "threat-library-detail.html?data=callcam"
    },
    {
        "text": "CallMe (CallMe)",
        "url": "threat-library-detail.html?data=callme"
    },
    {
        "text": "Calypso RAT (Calypso RAT)",
        "url": "threat-library-detail.html?data=calypso_rat"
    },
    {
        "text": "CamCapture Plugin (CamCapture Plugin)",
        "url": "threat-library-detail.html?data=camcapture_plugin"
    },
    {
        "text": "CamuBot (CamuBot)",
        "url": "threat-library-detail.html?data=camubot"
    },
    {
        "text": "Cannon (Cannon)",
        "url": "threat-library-detail.html?data=cannon"
    },
    {
        "text": "CapraRAT (CapraRAT)",
        "url": "threat-library-detail.html?data=caprarat"
    },
    {
        "text": "Capriccio RAT (Capriccio RAT)",
        "url": "threat-library-detail.html?data=capriccio_rat"
    },
    {
        "text": "CapturaTela (CapturaTela)",
        "url": "threat-library-detail.html?data=capturatela"
    },
    {
        "text": "Carbanak (Carbanak, Anunak, Sekur, Sekur RAT)",
        "url": "threat-library-detail.html?data=carbanak"
    },
    {
        "text": "CarbonSteal (CarbonSteal)",
        "url": "threat-library-detail.html?data=carbonsteal"
    },
    {
        "text": "Cardinal RAT (Cardinal RAT)",
        "url": "threat-library-detail.html?data=cardinal_rat"
    },
    {
        "text": "Careto (Careto, Mask, Appetite)",
        "url": "threat-library-detail.html?data=careto"
    },
    {
        "text": "CARROTBALL (CARROTBALL)",
        "url": "threat-library-detail.html?data=carrotball"
    },
    {
        "text": "CARROTBAT (CARROTBAT)",
        "url": "threat-library-detail.html?data=carrotbat"
    },
    {
        "text": "CASHY200 (CASHY200)",
        "url": "threat-library-detail.html?data=cashy200"
    },
    {
        "text": "Casper (Casper)",
        "url": "threat-library-detail.html?data=casper"
    },
    {
        "text": "Castov (Castov)",
        "url": "threat-library-detail.html?data=castov"
    },
    {
        "text": "Catchamas (Catchamas)",
        "url": "threat-library-detail.html?data=catchamas"
    },
    {
        "text": "Catelites Bot (Catelites Bot, Catelites)",
        "url": "threat-library-detail.html?data=catelites_bot"
    },
    {
        "text": "Caterpillar (Caterpillar)",
        "url": "threat-library-detail.html?data=caterpillar"
    },
    {
        "text": "ccf32 (ccf32)",
        "url": "threat-library-detail.html?data=ccf32"
    },
    {
        "text": "CDorked (CDorked, CDorked.A)",
        "url": "threat-library-detail.html?data=cdorked"
    },
    {
        "text": "CEELOADER (CEELOADER)",
        "url": "threat-library-detail.html?data=ceeloader"
    },
    {
        "text": "CenterPOS (CenterPOS, Cerebrus)",
        "url": "threat-library-detail.html?data=centerpos"
    },
    {
        "text": "certutil (certutil, certutil.exe)",
        "url": "threat-library-detail.html?data=certutil"
    },
    {
        "text": "CetaRAT (CetaRAT)",
        "url": "threat-library-detail.html?data=cetarat"
    },
    {
        "text": "Chaes (Chaes)",
        "url": "threat-library-detail.html?data=chaes"
    },
    {
        "text": "CHAINSHOT (CHAINSHOT)",
        "url": "threat-library-detail.html?data=chainshot"
    },
    {
        "text": "CHAIRSMACK (CHAIRSMACK)",
        "url": "threat-library-detail.html?data=chairsmack"
    },
    {
        "text": "ChChes (ChChes, HAYMAKER, Ham Backdoor, Scorpion)",
        "url": "threat-library-detail.html?data=chches"
    },
    {
        "text": "CheckID (CheckID)",
        "url": "threat-library-detail.html?data=checkid"
    },
    {
        "text": "CheeseTray (CheeseTray, CROWDEDFLOUNDER)",
        "url": "threat-library-detail.html?data=cheesetray"
    },
    {
        "text": "Cherry Picker (Cherry Picker, Cherry Picker POS, CherryPicker POS, cherrypickerpos, cherrypicker, cherry_picker)",
        "url": "threat-library-detail.html?data=cherry_picker"
    },
    {
        "text": "ChewBacca (ChewBacca)",
        "url": "threat-library-detail.html?data=chewbacca"
    },
    {
        "text": "China Chopper (China Chopper, CHINACHOPPER, SinoChopper)",
        "url": "threat-library-detail.html?data=china_chopper"
    },
    {
        "text": "Chinoxy (Chinoxy)",
        "url": "threat-library-detail.html?data=chinoxy"
    },
    {
        "text": "Chocopop (Chocopop)",
        "url": "threat-library-detail.html?data=chocopop"
    },
    {
        "text": "ChromeCookiesView (ChromeCookiesView)",
        "url": "threat-library-detail.html?data=chromecookiesview"
    },
    {
        "text": "ChromePass (ChromePass)",
        "url": "threat-library-detail.html?data=chromepass"
    },
    {
        "text": "chrome-passwords (chrome-passwords)",
        "url": "threat-library-detail.html?data=chrome-passwords"
    },
    {
        "text": "Chrommme (Chrommme)",
        "url": "threat-library-detail.html?data=chrommme"
    },
    {
        "text": "Chthonic (Chthonic, AndroKINS)",
        "url": "threat-library-detail.html?data=chthonic"
    },
    {
        "text": "Circles (Circles)",
        "url": "threat-library-detail.html?data=circles"
    },
    {
        "text": "Citadel (Citadel)",
        "url": "threat-library-detail.html?data=citadel"
    },
    {
        "text": "CLAMBLING (CLAMBLING, Clambling)",
        "url": "threat-library-detail.html?data=clambling"
    },
    {
        "text": "Clayslide (Clayslide)",
        "url": "threat-library-detail.html?data=clayslide"
    },
    {
        "text": "Cleaner (Cleaner)",
        "url": "threat-library-detail.html?data=cleaner"
    },
    {
        "text": "CleanToad (CleanToad)",
        "url": "threat-library-detail.html?data=cleantoad"
    },
    {
        "text": "ClientTraficForwarder (ClientTraficForwarder)",
        "url": "threat-library-detail.html?data=clienttraficforwarder"
    },
    {
        "text": "CLOSEWATCH (CLOSEWATCH)",
        "url": "threat-library-detail.html?data=closewatch"
    },
    {
        "text": "CloudDuke (CloudDuke, Cloud Duke, MiniDionis, CloudLook)",
        "url": "threat-library-detail.html?data=cloudduke"
    },
    {
        "text": "CLOUDSTATS (CLOUDSTATS)",
        "url": "threat-library-detail.html?data=cloudstats"
    },
    {
        "text": "CMD365 (CMD365)",
        "url": "threat-library-detail.html?data=cmd365"
    },
    {
        "text": "CMDEmber (CMDEmber)",
        "url": "threat-library-detail.html?data=cmdember"
    },
    {
        "text": "CmdSQL (CmdSQL)",
        "url": "threat-library-detail.html?data=cmdsql"
    },
    {
        "text": "Cmstar (Cmstar, meciv)",
        "url": "threat-library-detail.html?data=cmstar"
    },
    {
        "text": "CobInt (CobInt, COOLPANTS)",
        "url": "threat-library-detail.html?data=cobint"
    },
    {
        "text": "Cobra Carbon System (Cobra Carbon System, Carbon, Pfinet)",
        "url": "threat-library-detail.html?data=cobra_carbon_system"
    },
    {
        "text": "Cobra DocGuard (Cobra DocGuard)",
        "url": "threat-library-detail.html?data=cobra_docguard"
    },
    {
        "text": "COLDCAT (COLDCAT)",
        "url": "threat-library-detail.html?data=coldcat"
    },
    {
        "text": "COLDJAVA (COLDJAVA)",
        "url": "threat-library-detail.html?data=coldjava"
    },
    {
        "text": "CollectionRAT (CollectionRAT)",
        "url": "threat-library-detail.html?data=collectionrat"
    },
    {
        "text": "Combos (Combos)",
        "url": "threat-library-detail.html?data=combos"
    },
    {
        "text": "Comet (Comet, Meteor, Stardust)",
        "url": "threat-library-detail.html?data=comet"
    },
    {
        "text": "Comfoo (Comfoo, Comfoo RAT)",
        "url": "threat-library-detail.html?data=comfoo"
    },
    {
        "text": "Commix (Commix)",
        "url": "threat-library-detail.html?data=commix"
    },
    {
        "text": "CommonMagic (CommonMagic)",
        "url": "threat-library-detail.html?data=commonmagic"
    },
    {
        "text": "Comnie (Comnie)",
        "url": "threat-library-detail.html?data=comnie"
    },
    {
        "text": "COMpfun (COMpfun, Reductor RAT)",
        "url": "threat-library-detail.html?data=compfun"
    },
    {
        "text": "Computrace (Computrace, LoJack)",
        "url": "threat-library-detail.html?data=computrace"
    },
    {
        "text": "ComRAT (ComRAT)",
        "url": "threat-library-detail.html?data=comrat"
    },
    {
        "text": "Concealment Troy (Concealment Troy, concealment_troy)",
        "url": "threat-library-detail.html?data=concealment_troy"
    },
    {
        "text": "Contopee (Contopee, WHITEOUT)",
        "url": "threat-library-detail.html?data=contopee"
    },
    {
        "text": "CookieBag (CookieBag, TROJAN.COOKIES)",
        "url": "threat-library-detail.html?data=cookiebag"
    },
    {
        "text": "CookieTime (CookieTime)",
        "url": "threat-library-detail.html?data=cookietime"
    },
    {
        "text": "CORALDECK (CORALDECK)",
        "url": "threat-library-detail.html?data=coraldeck"
    },
    {
        "text": "CordScan (CordScan)",
        "url": "threat-library-detail.html?data=cordscan"
    },
    {
        "text": "CoreBot (CoreBot)",
        "url": "threat-library-detail.html?data=corebot"
    },
    {
        "text": "Corentry (Corentry, Fluxwire)",
        "url": "threat-library-detail.html?data=corentry"
    },
    {
        "text": "CoreLoader (CoreLoader)",
        "url": "threat-library-detail.html?data=coreloader"
    },
    {
        "text": "CORESHELL (CORESHELL, SOURFACE, Sofacy)",
        "url": "threat-library-detail.html?data=coreshell"
    },
    {
        "text": "Corkow (Corkow)",
        "url": "threat-library-detail.html?data=corkow"
    },
    {
        "text": "CosmicDuke (CosmicDuke, TinyBaron, BotgenStudios, NemesisGemina)",
        "url": "threat-library-detail.html?data=cosmicduke"
    },
    {
        "text": "CostaBricks (CostaBricks)",
        "url": "threat-library-detail.html?data=costabricks"
    },
    {
        "text": "Cotx RAT (Cotx RAT)",
        "url": "threat-library-detail.html?data=cotx_rat"
    },
    {
        "text": "CoughingDown (CoughingDown)",
        "url": "threat-library-detail.html?data=coughingdown"
    },
    {
        "text": "CozyDuke (CozyDuke, CozyCar, CozyBear, Cozer, EuroAPT)",
        "url": "threat-library-detail.html?data=cozyduke"
    },
    {
        "text": "CrackMapExec (CrackMapExec)",
        "url": "threat-library-detail.html?data=crackmapexec"
    },
    {
        "text": "Crackshot (Crackshot)",
        "url": "threat-library-detail.html?data=crackshot"
    },
    {
        "text": "Creamsicle (Creamsicle)",
        "url": "threat-library-detail.html?data=creamsicle"
    },
    {
        "text": "CredRaptor (CredRaptor)",
        "url": "threat-library-detail.html?data=credraptor"
    },
    {
        "text": "CREDRIVER (CREDRIVER)",
        "url": "threat-library-detail.html?data=credriver"
    },
    {
        "text": "CreepyDrive (CreepyDrive)",
        "url": "threat-library-detail.html?data=creepydrive"
    },
    {
        "text": "CreepySnail (CreepySnail)",
        "url": "threat-library-detail.html?data=creepysnail"
    },
    {
        "text": "Cridex (Cridex, Bugat, Feodo)",
        "url": "threat-library-detail.html?data=cridex"
    },
    {
        "text": "CLRLoad (CLRLoad)",
        "url": "threat-library-detail.html?data=clrload"
    },
    {
        "text": "CronBot (CronBot)",
        "url": "threat-library-detail.html?data=cronbot"
    },
    {
        "text": "CrossRAT (CrossRAT, Trupto)",
        "url": "threat-library-detail.html?data=crossrat"
    },
    {
        "text": "CrossWalk (CrossWalk, Motnug, ProxIP, TOMMYGUN)",
        "url": "threat-library-detail.html?data=crosswalk"
    },
    {
        "text": "CROWVIEW (CROWVIEW)",
        "url": "threat-library-detail.html?data=crowview"
    },
    {
        "text": "CroxLoader (CroxLoader)",
        "url": "threat-library-detail.html?data=croxloader"
    },
    {
        "text": "Crutch (Crutch)",
        "url": "threat-library-detail.html?data=crutch"
    },
    {
        "text": "Crypta (Crypta)",
        "url": "threat-library-detail.html?data=crypta"
    },
    {
        "text": "Cryptcat (Cryptcat)",
        "url": "threat-library-detail.html?data=cryptcat"
    },
    {
        "text": "CrypticConvo (CrypticConvo)",
        "url": "threat-library-detail.html?data=crypticconvo"
    },
    {
        "text": "CryptoMix (CryptoMix, CryptFile2, Zeta, CryptoShield)",
        "url": "threat-library-detail.html?data=cryptomix"
    },
    {
        "text": "CryptoWall (CryptoWall)",
        "url": "threat-library-detail.html?data=cryptowall"
    },
    {
        "text": "CryWiper (CryWiper)",
        "url": "threat-library-detail.html?data=crywiper"
    },
    {
        "text": "CsExt (CsExt)",
        "url": "threat-library-detail.html?data=csext"
    },
    {
        "text": "CSPY Downloader (CSPY Downloader)",
        "url": "threat-library-detail.html?data=cspy_downloader"
    },
    {
        "text": "Ctealer (Ctealer)",
        "url": "threat-library-detail.html?data=ctealer"
    },
    {
        "text": "Cucky (Cucky)",
        "url": "threat-library-detail.html?data=cucky"
    },
    {
        "text": "Cuegoe (Cuegoe)",
        "url": "threat-library-detail.html?data=cuegoe"
    },
    {
        "text": "Cutlet Maker (Cutlet Maker, Cutlet)",
        "url": "threat-library-detail.html?data=cutlet_maker"
    },
    {
        "text": "CWoolger (CWoolger, Woolger, WoolenLogger)",
        "url": "threat-library-detail.html?data=cwoolger"
    },
    {
        "text": "Cyan Lambert (Cyan Lambert)",
        "url": "threat-library-detail.html?data=cyan_lambert"
    },
    {
        "text": "CyberGate RAT (CyberGate RAT, CyberGate, Rebhip)",
        "url": "threat-library-detail.html?data=cybergate_rat"
    },
    {
        "text": "Cyclops Blink (Cyclops Blink, CyclopsBlink)",
        "url": "threat-library-detail.html?data=cyclops_blink"
    },
    {
        "text": "Cyst Downloader (Cyst Downloader)",
        "url": "threat-library-detail.html?data=cyst_downloader"
    },
    {
        "text": "Dacls RAT (Dacls RAT, Dacls)",
        "url": "threat-library-detail.html?data=dacls_rat"
    },
    {
        "text": "DADJOKE (DADJOKE)",
        "url": "threat-library-detail.html?data=dadjoke"
    },
    {
        "text": "Dadstache (Dadstache)",
        "url": "threat-library-detail.html?data=dadstache"
    },
    {
        "text": "Dagger Three (Dagger Three)",
        "url": "threat-library-detail.html?data=dagger_three"
    },
    {
        "text": "Dairy (Dairy)",
        "url": "threat-library-detail.html?data=dairy"
    },
    {
        "text": "DanBot (DanBot)",
        "url": "threat-library-detail.html?data=danbot"
    },
    {
        "text": "DanderSpritz (DanderSpritz)",
        "url": "threat-library-detail.html?data=danderspritz"
    },
    {
        "text": "DanDrop (DanDrop)",
        "url": "threat-library-detail.html?data=dandrop"
    },
    {
        "text": "Danfuan (Danfuan)",
        "url": "threat-library-detail.html?data=danfuan"
    },
    {
        "text": "DARKDEW (DARKDEW)",
        "url": "threat-library-detail.html?data=darkdew"
    },
    {
        "text": "DarkHotel (DarkHotel)",
        "url": "threat-library-detail.html?data=darkhotel"
    },
    {
        "text": "DarkPulsar (DarkPulsar)",
        "url": "threat-library-detail.html?data=darkpulsar"
    },
    {
        "text": "DarkRAT (DarkRAT)",
        "url": "threat-library-detail.html?data=darkrat"
    },
    {
        "text": "Dark Tequila (Dark Tequila, DarkTequila)",
        "url": "threat-library-detail.html?data=dark_tequila"
    },
    {
        "text": "DarthPusher (DarthPusher)",
        "url": "threat-library-detail.html?data=darthpusher"
    },
    {
        "text": "Daserf (Daserf, Muirim, Nioupale)",
        "url": "threat-library-detail.html?data=daserf"
    },
    {
        "text": "Datper (Datper)",
        "url": "threat-library-detail.html?data=datper"
    },
    {
        "text": "DAVESHELL (DAVESHELL)",
        "url": "threat-library-detail.html?data=daveshell"
    },
    {
        "text": "DBoxAgent (DBoxAgent)",
        "url": "threat-library-detail.html?data=dboxagent"
    },
    {
        "text": "DbxDump Utility (DbxDump Utility)",
        "url": "threat-library-detail.html?data=dbxdump_utility"
    },
    {
        "text": "DCSrv (DCSrv, DCrSrv)",
        "url": "threat-library-detail.html?data=dcsrv"
    },
    {
        "text": "DCSync (DCSync)",
        "url": "threat-library-detail.html?data=dcsync"
    },
    {
        "text": "DDG (DDG)",
        "url": "threat-library-detail.html?data=ddg"
    },
    {
        "text": "DDKONG (DDKONG)",
        "url": "threat-library-detail.html?data=ddkong"
    },
    {
        "text": "DEADEYE (DEADEYE)",
        "url": "threat-library-detail.html?data=deadeye"
    },
    {
        "text": "DEADWOOD (DEADWOOD, Detbosit, DETBOSIT, Agrius, SQLShred)",
        "url": "threat-library-detail.html?data=deadwood"
    },
    {
        "text": "DealersChoice (DealersChoice)",
        "url": "threat-library-detail.html?data=dealerschoice"
    },
    {
        "text": "DeathRansom (DeathRansom, deathransom, DEATHRANSOM, wacatac)",
        "url": "threat-library-detail.html?data=deathransom"
    },
    {
        "text": "DebugView (DebugView)",
        "url": "threat-library-detail.html?data=debugview"
    },
    {
        "text": "Decebal (Decebal)",
        "url": "threat-library-detail.html?data=decebal"
    },
    {
        "text": "Decrypt-RDCMan.ps1 (Decrypt-RDCMan.ps1)",
        "url": "threat-library-detail.html?data=decrypt-rdcman.ps1"
    },
    {
        "text": "DeepCreep (DeepCreep)",
        "url": "threat-library-detail.html?data=deepcreep"
    },
    {
        "text": "Deed RAT (Deed RAT)",
        "url": "threat-library-detail.html?data=deed_rat"
    },
    {
        "text": "Defray777 (Defray777, Defray, Defray 2018, Target777, Ransom X, RansomExx, Glushkov)",
        "url": "threat-library-detail.html?data=defray777"
    },
    {
        "text": "DELPHSTATS (DELPHSTATS)",
        "url": "threat-library-detail.html?data=delphstats"
    },
    {
        "text": "DeltaCharlie (DeltaCharlie)",
        "url": "threat-library-detail.html?data=deltacharlie"
    },
    {
        "text": "Dendroid (Dendroid)",
        "url": "threat-library-detail.html?data=dendroid"
    },
    {
        "text": "DEPLOYLOG (DEPLOYLOG)",
        "url": "threat-library-detail.html?data=deploylog"
    },
    {
        "text": "Depriz (Depriz)",
        "url": "threat-library-detail.html?data=depriz"
    },
    {
        "text": "DeputyDog (DeputyDog, Fexel)",
        "url": "threat-library-detail.html?data=deputydog"
    },
    {
        "text": "Desert Scorpion (Desert Scorpion)",
        "url": "threat-library-detail.html?data=desert_scorpion"
    },
    {
        "text": "DessertDown (DessertDown)",
        "url": "threat-library-detail.html?data=dessertdown"
    },
    {
        "text": "Destover (Destover, Sierras)",
        "url": "threat-library-detail.html?data=destover"
    },
    {
        "text": "DetaRAT (DetaRAT)",
        "url": "threat-library-detail.html?data=detarat"
    },
    {
        "text": "Dexbia (Dexbia, CONIME)",
        "url": "threat-library-detail.html?data=dexbia"
    },
    {
        "text": "dfrgntfs5.sqt (dfrgntfs5.sqt)",
        "url": "threat-library-detail.html?data=dfrgntfs5.sqt"
    },
    {
        "text": "DILLJUICE (DILLJUICE, FYAnti)",
        "url": "threat-library-detail.html?data=dilljuice"
    },
    {
        "text": "DILLWEED (DILLWEED)",
        "url": "threat-library-detail.html?data=dillweed"
    },
    {
        "text": "DilongTrash (DilongTrash)",
        "url": "threat-library-detail.html?data=dilongtrash"
    },
    {
        "text": "Dino (Dino)",
        "url": "threat-library-detail.html?data=dino"
    },
    {
        "text": "DinoTrain (DinoTrain)",
        "url": "threat-library-detail.html?data=dinotrain"
    },
    {
        "text": "DirBuster (DirBuster)",
        "url": "threat-library-detail.html?data=dirbuster"
    },
    {
        "text": "Dirsearch (Dirsearch)",
        "url": "threat-library-detail.html?data=dirsearch"
    },
    {
        "text": "Distribute.exe (Distribute.exe)",
        "url": "threat-library-detail.html?data=distribute.exe"
    },
    {
        "text": "DistTrack (DistTrack, Shamoon)",
        "url": "threat-library-detail.html?data=disttrack"
    },
    {
        "text": "DKMC (DKMC)",
        "url": "threat-library-detail.html?data=dkmc"
    },
    {
        "text": "DmaUp3.exe (DmaUp3.exe)",
        "url": "threat-library-detail.html?data=dmaup3.exe"
    },
    {
        "text": "DMSniff (DMSniff)",
        "url": "threat-library-detail.html?data=dmsniff"
    },
    {
        "text": "dmsSpy (dmsSpy)",
        "url": "threat-library-detail.html?data=dmsspy"
    },
    {
        "text": "dneSpy (dneSpy)",
        "url": "threat-library-detail.html?data=dnespy"
    },
    {
        "text": "DNSExfitrator (DNSExfitrator)",
        "url": "threat-library-detail.html?data=dnsexfitrator"
    },
    {
        "text": "DNSMessenger (DNSMessenger, TEXTMATE)",
        "url": "threat-library-detail.html?data=dnsmessenger"
    },
    {
        "text": "DNSpionage (DNSpionage, Agent Drable, AgentDrable)",
        "url": "threat-library-detail.html?data=dnspionage"
    },
    {
        "text": "DNSRat (DNSRat, DNSbot)",
        "url": "threat-library-detail.html?data=dnsrat"
    },
    {
        "text": "Dolphin (Dolphin)",
        "url": "threat-library-detail.html?data=dolphin"
    },
    {
        "text": "DoorMe (DoorMe)",
        "url": "threat-library-detail.html?data=doorme"
    },
    {
        "text": "DoppelPaymer (DoppelPaymer, Pay OR Grief)",
        "url": "threat-library-detail.html?data=doppelpaymer"
    },
    {
        "text": "Doraemon (Doraemon)",
        "url": "threat-library-detail.html?data=doraemon"
    },
    {
        "text": "Dorshel (Dorshel)",
        "url": "threat-library-detail.html?data=dorshel"
    },
    {
        "text": "DOSTEALER (DOSTEALER)",
        "url": "threat-library-detail.html?data=dostealer"
    },
    {
        "text": "DoubleAgent (DoubleAgent)",
        "url": "threat-library-detail.html?data=doubleagent"
    },
    {
        "text": "DOUBLEFANTASY (DOUBLEFANTASY, DoubleFantasy, VALIDATOR)",
        "url": "threat-library-detail.html?data=doublefantasy"
    },
    {
        "text": "DoubleFeature (DoubleFeature)",
        "url": "threat-library-detail.html?data=doublefeature"
    },
    {
        "text": "DoublePulsar (DoublePulsar)",
        "url": "threat-library-detail.html?data=doublepulsar"
    },
    {
        "text": "DoubleZero (DoubleZero, FiberLake)",
        "url": "threat-library-detail.html?data=doublezero"
    },
    {
        "text": "DoubleT (DoubleT)",
        "url": "threat-library-detail.html?data=doublet"
    },
    {
        "text": "Downdelph (Downdelph, Delphacy)",
        "url": "threat-library-detail.html?data=downdelph"
    },
    {
        "text": "Downeks (Downeks)",
        "url": "threat-library-detail.html?data=downeks"
    },
    {
        "text": "DownPaper (DownPaper)",
        "url": "threat-library-detail.html?data=downpaper"
    },
    {
        "text": "Dozer (Dozer, Mytob)",
        "url": "threat-library-detail.html?data=dozer"
    },
    {
        "text": "Dracarys (Dracarys)",
        "url": "threat-library-detail.html?data=dracarys"
    },
    {
        "text": "DragonEgg (DragonEgg)",
        "url": "threat-library-detail.html?data=dragonegg"
    },
    {
        "text": "DRAWSTRING (DRAWSTRING)",
        "url": "threat-library-detail.html?data=drawstring"
    },
    {
        "text": "DRIFTPIN (DRIFTPIN, Toshliph, Spy.Agent.ORM)",
        "url": "threat-library-detail.html?data=driftpin"
    },
    {
        "text": "DRIGO (DRIGO)",
        "url": "threat-library-detail.html?data=drigo"
    },
    {
        "text": "Dripion (Dripion, Masson)",
        "url": "threat-library-detail.html?data=dripion"
    },
    {
        "text": "DroidJack (DroidJack)",
        "url": "threat-library-detail.html?data=droidjack"
    },
    {
        "text": "DroidPlugin (DroidPlugin)",
        "url": "threat-library-detail.html?data=droidplugin"
    },
    {
        "text": "DropBook (DropBook)",
        "url": "threat-library-detail.html?data=dropbook"
    },
    {
        "text": "Dropbox (Dropbox)",
        "url": "threat-library-detail.html?data=dropbox"
    },
    {
        "text": "DropPhone (DropPhone)",
        "url": "threat-library-detail.html?data=dropphone"
    },
    {
        "text": "Drovorub (Drovorub)",
        "url": "threat-library-detail.html?data=drovorub"
    },
    {
        "text": "Drupalgeddon (Drupalgeddon)",
        "url": "threat-library-detail.html?data=drupalgeddon"
    },
    {
        "text": "Dtrack (Dtrack, TroyRAT)",
        "url": "threat-library-detail.html?data=dtrack"
    },
    {
        "text": "Dudear (Dudear)",
        "url": "threat-library-detail.html?data=dudear"
    },
    {
        "text": "Dudell (Dudell)",
        "url": "threat-library-detail.html?data=dudell"
    },
    {
        "text": "Duqu (Duqu, Tilded)",
        "url": "threat-library-detail.html?data=duqu"
    },
    {
        "text": "DustySky (DustySky, NeD Worm)",
        "url": "threat-library-detail.html?data=dustysky"
    },
    {
        "text": "Duuzer (Duuzer, Escad)",
        "url": "threat-library-detail.html?data=duuzer"
    },
    {
        "text": "DvDupdate.dll (DvDupdate.dll)",
        "url": "threat-library-detail.html?data=dvdupdate.dll"
    },
    {
        "text": "DyePack (DyePack, swift)",
        "url": "threat-library-detail.html?data=dyepack"
    },
    {
        "text": "Dyre (Dyre, Dyreza, Dyzap, Dyranges)",
        "url": "threat-library-detail.html?data=dyre"
    },
    {
        "text": "EarthWorm (EarthWorm)",
        "url": "threat-library-detail.html?data=earthworm"
    },
    {
        "text": "EasyNight (EasyNight)",
        "url": "threat-library-detail.html?data=easynight"
    },
    {
        "text": "Ebury (Ebury)",
        "url": "threat-library-detail.html?data=ebury"
    },
    {
        "text": "EFSPotato (EFSPotato)",
        "url": "threat-library-detail.html?data=efspotato"
    },
    {
        "text": "Egregor (Egregor)",
        "url": "threat-library-detail.html?data=egregor"
    },
    {
        "text": "EHAGBPSL (EHAGBPSL, EHAGBPSL Loader)",
        "url": "threat-library-detail.html?data=ehagbpsl"
    },
    {
        "text": "EHDevel (EHDevel)",
        "url": "threat-library-detail.html?data=ehdevel"
    },
    {
        "text": "Ecipekac (Ecipekac, DESLoader, SigLoader, HEAVYHAND)",
        "url": "threat-library-detail.html?data=ecipekac"
    },
    {
        "text": "EKANS (EKANS, Snake, SNAKEHOSE)",
        "url": "threat-library-detail.html?data=ekans"
    },
    {
        "text": "ELECTRICFISH (ELECTRICFISH, Alreay)",
        "url": "threat-library-detail.html?data=electricfish"
    },
    {
        "text": "Elirks (Elirks)",
        "url": "threat-library-detail.html?data=elirks"
    },
    {
        "text": "Elise (Elise, BKDR_ESILE, EVILNEST, Page)",
        "url": "threat-library-detail.html?data=elise"
    },
    {
        "text": "ELMER (ELMER, Elmost)",
        "url": "threat-library-detail.html?data=elmer"
    },
    {
        "text": "EmailStealer (EmailStealer)",
        "url": "threat-library-detail.html?data=emailstealer"
    },
    {
        "text": "EMASTEAL (EMASTEAL)",
        "url": "threat-library-detail.html?data=emasteal"
    },
    {
        "text": "Emdivi (Emdivi, Newsripper)",
        "url": "threat-library-detail.html?data=emdivi"
    },
    {
        "text": "Emissary (Emissary)",
        "url": "threat-library-detail.html?data=emissary"
    },
    {
        "text": "EmpireDNSAgent (EmpireDNSAgent, EDA)",
        "url": "threat-library-detail.html?data=empirednsagent"
    },
    {
        "text": "EmpireProject (EmpireProject, Empire, EmPyre, PowerShell Empire)",
        "url": "threat-library-detail.html?data=empireproject"
    },
    {
        "text": "Empoder (Empoder)",
        "url": "threat-library-detail.html?data=empoder"
    },
    {
        "text": "ENCODE MMC (ENCODE MMC)",
        "url": "threat-library-detail.html?data=encode_mmc"
    },
    {
        "text": "Enfal (Enfal, Lurid)",
        "url": "threat-library-detail.html?data=enfal"
    },
    {
        "text": "Eomobi (Eomobi)",
        "url": "threat-library-detail.html?data=eomobi"
    },
    {
        "text": "Epic (Epic, Epic Turla, Tavdig, Wipbot, WorldCupSec, TadjMakhal)",
        "url": "threat-library-detail.html?data=epic"
    },
    {
        "text": "EpicenterRAT (EpicenterRAT)",
        "url": "threat-library-detail.html?data=epicenterrat"
    },
    {
        "text": "EQUATIONDRUG (EQUATIONDRUG, EQUESTRE)",
        "url": "threat-library-detail.html?data=equationdrug"
    },
    {
        "text": "EQUATIONLASER (EQUATIONLASER)",
        "url": "threat-library-detail.html?data=equationlaser"
    },
    {
        "text": "Erebus (Erebus)",
        "url": "threat-library-detail.html?data=erebus"
    },
    {
        "text": "EternalBlue (EternalBlue)",
        "url": "threat-library-detail.html?data=eternalblue"
    },
    {
        "text": "EternalRomance (EternalRomance)",
        "url": "threat-library-detail.html?data=eternalromance"
    },
    {
        "text": "ETUMBOT (ETUMBOT, RIPTIDE, HIGHTIDE, Exploz, Specfix)",
        "url": "threat-library-detail.html?data=etumbot"
    },
    {
        "text": "EvilBunny (EvilBunny)",
        "url": "threat-library-detail.html?data=evilbunny"
    },
    {
        "text": "EvilGnome (EvilGnome)",
        "url": "threat-library-detail.html?data=evilgnome"
    },
    {
        "text": "EvilGrab RAT (EvilGrab RAT, EvilGrab, Vidgrab, Wmonder, BKDR_HGDER, BKDR_EVILOGE, BKDR_NVICM)",
        "url": "threat-library-detail.html?data=evilgrab_rat"
    },
    {
        "text": "EVILSUN (EVILSUN)",
        "url": "threat-library-detail.html?data=evilsun"
    },
    {
        "text": "Exaramel (Exaramel)",
        "url": "threat-library-detail.html?data=exaramel"
    },
    {
        "text": "Excalibur (Excalibur, Sabresac, Saber)",
        "url": "threat-library-detail.html?data=excalibur"
    },
    {
        "text": "ExDudell (ExDudell)",
        "url": "threat-library-detail.html?data=exdudell"
    },
    {
        "text": "ExileRAT (ExileRAT, Exile RAT)",
        "url": "threat-library-detail.html?data=exilerat"
    },
    {
        "text": "ExoBot (ExoBot)",
        "url": "threat-library-detail.html?data=exobot"
    },
    {
        "text": "ExoBotCompact (ExoBotCompact, Coper, Octo)",
        "url": "threat-library-detail.html?data=exobotcompact"
    },
    {
        "text": "Explosive (Explosive)",
        "url": "threat-library-detail.html?data=explosive"
    },
    {
        "text": "EYE (EYE)",
        "url": "threat-library-detail.html?data=eye"
    },
    {
        "text": "EYService (EYService)",
        "url": "threat-library-detail.html?data=eyservice"
    },
    {
        "text": "FakeFish (FakeFish)",
        "url": "threat-library-detail.html?data=fakefish"
    },
    {
        "text": "FakeHighFive (FakeHighFive)",
        "url": "threat-library-detail.html?data=fakehighfive"
    },
    {
        "text": "FakeM (FakeM, FakeM RAT, Terminator RAT)",
        "url": "threat-library-detail.html?data=fakem"
    },
    {
        "text": "FakeTC (FakeTC)",
        "url": "threat-library-detail.html?data=faketc"
    },
    {
        "text": "FALLCHILL (FALLCHILL, FallChill RAT)",
        "url": "threat-library-detail.html?data=fallchill"
    },
    {
        "text": "FANNY (FANNY, DEMENTIAWHEEL)",
        "url": "threat-library-detail.html?data=fanny"
    },
    {
        "text": "Fantasy (Fantasy)",
        "url": "threat-library-detail.html?data=fantasy"
    },
    {
        "text": "Farse (Farse)",
        "url": "threat-library-detail.html?data=farse"
    },
    {
        "text": "Farseer (Farseer)",
        "url": "threat-library-detail.html?data=farseer"
    },
    {
        "text": "FastPOS (FastPOS)",
        "url": "threat-library-detail.html?data=fastpos"
    },
    {
        "text": "FatDuke (FatDuke)",
        "url": "threat-library-detail.html?data=fatduke"
    },
    {
        "text": "Felismus (Felismus)",
        "url": "threat-library-detail.html?data=felismus"
    },
    {
        "text": "Felixroot (Felixroot, GreyEnergy mini)",
        "url": "threat-library-detail.html?data=felixroot"
    },
    {
        "text": "FighterPOS (FighterPOS)",
        "url": "threat-library-detail.html?data=fighterpos"
    },
    {
        "text": "Filerase (Filerase)",
        "url": "threat-library-detail.html?data=filerase"
    },
    {
        "text": "Filepak (Filepak)",
        "url": "threat-library-detail.html?data=filepak"
    },
    {
        "text": "FilepakMonitor (FilepakMonitor)",
        "url": "threat-library-detail.html?data=filepakmonitor"
    },
    {
        "text": "FileZilla (FileZilla)",
        "url": "threat-library-detail.html?data=filezilla"
    },
    {
        "text": "Fimlis (Fimlis)",
        "url": "threat-library-detail.html?data=fimlis"
    },
    {
        "text": "Final1stSpy (Final1stSpy)",
        "url": "threat-library-detail.html?data=final1stspy"
    },
    {
        "text": "FindPOS (FindPOS, PoSeidon)",
        "url": "threat-library-detail.html?data=findpos"
    },
    {
        "text": "FinFisher (FinFisher, FinFisher RAT, FinSpy)",
        "url": "threat-library-detail.html?data=finfisher"
    },
    {
        "text": "fingerprintjs2 (fingerprintjs2)",
        "url": "threat-library-detail.html?data=fingerprintjs2"
    },
    {
        "text": "Fire Chili (Fire Chili)",
        "url": "threat-library-detail.html?data=fire_chili"
    },
    {
        "text": "FireMalv (FireMalv)",
        "url": "threat-library-detail.html?data=firemalv"
    },
    {
        "text": "FireMaster (FireMaster)",
        "url": "threat-library-detail.html?data=firemaster"
    },
    {
        "text": "Fishmaster (Fishmaster, JollyJellyfish)",
        "url": "threat-library-detail.html?data=fishmaster"
    },
    {
        "text": "FIVEHANDS (FIVEHANDS, Thieflock)",
        "url": "threat-library-detail.html?data=fivehands"
    },
    {
        "text": "FiXS (FiXS)",
        "url": "threat-library-detail.html?data=fixs"
    },
    {
        "text": "Flagpro (Flagpro, BUSYICE)",
        "url": "threat-library-detail.html?data=flagpro"
    },
    {
        "text": "Flame (Flame, Flamer, sKyWIper, Skywiper)",
        "url": "threat-library-detail.html?data=flame"
    },
    {
        "text": "Flapjack (Flapjack)",
        "url": "threat-library-detail.html?data=flapjack"
    },
    {
        "text": "Flashflood (Flashflood)",
        "url": "threat-library-detail.html?data=flashflood"
    },
    {
        "text": "FlipCreep (FlipCreep)",
        "url": "threat-library-detail.html?data=flipcreep"
    },
    {
        "text": "FLIPSIDE (FLIPSIDE)",
        "url": "threat-library-detail.html?data=flipside"
    },
    {
        "text": "FlokiBot (FlokiBot)",
        "url": "threat-library-detail.html?data=flokibot"
    },
    {
        "text": "FlowCloud (FlowCloud)",
        "url": "threat-library-detail.html?data=flowcloud"
    },
    {
        "text": "FLOWERPIPE (FLOWERPIPE)",
        "url": "threat-library-detail.html?data=flowerpipe"
    },
    {
        "text": "FlowerPippi (FlowerPippi)",
        "url": "threat-library-detail.html?data=flowerpippi"
    },
    {
        "text": "FlowerPower (FlowerPower, BoBoStealer)",
        "url": "threat-library-detail.html?data=flowerpower"
    },
    {
        "text": "FlyingDutchman (FlyingDutchman)",
        "url": "threat-library-detail.html?data=flyingdutchman"
    },
    {
        "text": "Fobber (Fobber)",
        "url": "threat-library-detail.html?data=fobber"
    },
    {
        "text": "FoggyWeb (FoggyWeb)",
        "url": "threat-library-detail.html?data=foggyweb"
    },
    {
        "text": "Foozer (Foozer)",
        "url": "threat-library-detail.html?data=foozer"
    },
    {
        "text": "FORKBEARD (FORKBEARD)",
        "url": "threat-library-detail.html?data=forkbeard"
    },
    {
        "text": "FormerFirstRAT (FormerFirstRAT, FF-RAT, ffrat)",
        "url": "threat-library-detail.html?data=formerfirstrat"
    },
    {
        "text": "FoundCore (FoundCore, RainyDay)",
        "url": "threat-library-detail.html?data=foundcore"
    },
    {
        "text": "FOXGRABBER (FOXGRABBER)",
        "url": "threat-library-detail.html?data=foxgrabber"
    },
    {
        "text": "Fox Panel (Fox Panel)",
        "url": "threat-library-detail.html?data=fox_panel"
    },
    {
        "text": "FRAUDROP (FRAUDROP)",
        "url": "threat-library-detail.html?data=fraudrop"
    },
    {
        "text": "Freenki Loader (Freenki Loader)",
        "url": "threat-library-detail.html?data=freenki_loader"
    },
    {
        "text": "FrozenCell (FrozenCell)",
        "url": "threat-library-detail.html?data=frozencell"
    },
    {
        "text": "FRP (FRP, Fast Reverse Proxy)",
        "url": "threat-library-detail.html?data=frp"
    },
    {
        "text": "FruityC2 (FruityC2)",
        "url": "threat-library-detail.html?data=fruityc2"
    },
    {
        "text": "fscan (fscan)",
        "url": "threat-library-detail.html?data=fscan"
    },
    {
        "text": "FullThrottle (FullThrottle)",
        "url": "threat-library-detail.html?data=fullthrottle"
    },
    {
        "text": "FunnyDream (FunnyDream)",
        "url": "threat-library-detail.html?data=funnydream"
    },
    {
        "text": "FunnySwitch (FunnySwitch, RouterGod)",
        "url": "threat-library-detail.html?data=funnyswitch"
    },
    {
        "text": "FurBall (FurBall)",
        "url": "threat-library-detail.html?data=furball"
    },
    {
        "text": "GamaPOS (GamaPOS, pios)",
        "url": "threat-library-detail.html?data=gamapos"
    },
    {
        "text": "Gamaredon (Gamaredon)",
        "url": "threat-library-detail.html?data=gamaredon"
    },
    {
        "text": "GameOver Zeus (GameOver Zeus, Peer-to-Peer Zeus, P2P Zeus, GOZ)",
        "url": "threat-library-detail.html?data=gameover_zeus"
    },
    {
        "text": "Gazer (Gazer, WhiteBear)",
        "url": "threat-library-detail.html?data=gazer"
    },
    {
        "text": "Gcat (Gcat)",
        "url": "threat-library-detail.html?data=gcat"
    },
    {
        "text": "GCMAN (GCMAN)",
        "url": "threat-library-detail.html?data=gcman"
    },
    {
        "text": "GDOCUPLOAD (GDOCUPLOAD)",
        "url": "threat-library-detail.html?data=gdocupload"
    },
    {
        "text": "GearShift (GearShift)",
        "url": "threat-library-detail.html?data=gearshift"
    },
    {
        "text": "GELCAPSULE (GELCAPSULE)",
        "url": "threat-library-detail.html?data=gelcapsule"
    },
    {
        "text": "Gelsemine (Gelsemine)",
        "url": "threat-library-detail.html?data=gelsemine"
    },
    {
        "text": "Gelsenicine (Gelsenicine)",
        "url": "threat-library-detail.html?data=gelsenicine"
    },
    {
        "text": "Gelsevirine (Gelsevirine)",
        "url": "threat-library-detail.html?data=gelsevirine"
    },
    {
        "text": "Gelup (Gelup)",
        "url": "threat-library-detail.html?data=gelup"
    },
    {
        "text": "Gemcutter (Gemcutter)",
        "url": "threat-library-detail.html?data=gemcutter"
    },
    {
        "text": "GeminiDuke (GeminiDuke)",
        "url": "threat-library-detail.html?data=geminiduke"
    },
    {
        "text": "Geppei (Geppei)",
        "url": "threat-library-detail.html?data=geppei"
    },
    {
        "text": "Get-LAPSP.ps1 (Get-LAPSP.ps1)",
        "url": "threat-library-detail.html?data=get-lapsp.ps1"
    },
    {
        "text": "get-logon-history.ps1 (get-logon-history.ps1)",
        "url": "threat-library-detail.html?data=get-logon-history.ps1"
    },
    {
        "text": "GetMail (GetMail)",
        "url": "threat-library-detail.html?data=getmail"
    },
    {
        "text": "GetMyPass (GetMyPass, getmypos)",
        "url": "threat-library-detail.html?data=getmypass"
    },
    {
        "text": "GetUserSPNS.vbs (GetUserSPNS.vbs)",
        "url": "threat-library-detail.html?data=getuserspns.vbs"
    },
    {
        "text": "Gh0stnet (Gh0stnet, Ghostnet, Remosh)",
        "url": "threat-library-detail.html?data=gh0stnet"
    },
    {
        "text": "Gh0st RAT (Gh0st RAT, Ghost RAT, AngryRebel, Farfli, PCRat, Moudour, Mydoor)",
        "url": "threat-library-detail.html?data=gh0st_rat"
    },
    {
        "text": "Gh0stTimes (Gh0stTimes)",
        "url": "threat-library-detail.html?data=gh0sttimes"
    },
    {
        "text": "Ghambar (Ghambar)",
        "url": "threat-library-detail.html?data=ghambar"
    },
    {
        "text": "Ghole (Ghole, Gholee, CoreImpact (Modified))",
        "url": "threat-library-detail.html?data=ghole"
    },
    {
        "text": "Gigabud (Gigabud, Gigabud RAT)",
        "url": "threat-library-detail.html?data=gigabud"
    },
    {
        "text": "GlanceLove (GlanceLove, WinkChat)",
        "url": "threat-library-detail.html?data=glancelove"
    },
    {
        "text": "GLASSES (GLASSES, Wordpress Bruteforcer)",
        "url": "threat-library-detail.html?data=glasses"
    },
    {
        "text": "GlitchPOS (GlitchPOS)",
        "url": "threat-library-detail.html?data=glitchpos"
    },
    {
        "text": "GlobeImposter (GlobeImposter, Fake Globe)",
        "url": "threat-library-detail.html?data=globeimposter"
    },
    {
        "text": "GLOOXMAIL (GLOOXMAIL, Trojan.GTALK)",
        "url": "threat-library-detail.html?data=glooxmail"
    },
    {
        "text": "glue30.dll (glue30.dll)",
        "url": "threat-library-detail.html?data=glue30.dll"
    },
    {
        "text": "GnatSpy (GnatSpy)",
        "url": "threat-library-detail.html?data=gnatspy"
    },
    {
        "text": "GoBot2 (GoBot2)",
        "url": "threat-library-detail.html?data=gobot2"
    },
    {
        "text": "GoBuster (GoBuster)",
        "url": "threat-library-detail.html?data=gobuster"
    },
    {
        "text": "Godlua (Godlua)",
        "url": "threat-library-detail.html?data=godlua"
    },
    {
        "text": "Godzilla (Godzilla, Godzilla Loader)",
        "url": "threat-library-detail.html?data=godzilla"
    },
    {
        "text": "GOGGLES (GOGGLES, TROJAN.FOXY)",
        "url": "threat-library-detail.html?data=goggles"
    },
    {
        "text": "GOLDBACKDOOR (GOLDBACKDOOR)",
        "url": "threat-library-detail.html?data=goldbackdoor"
    },
    {
        "text": "Gold Dragon (Gold Dragon, GoldDragon, Lovexxx)",
        "url": "threat-library-detail.html?data=gold_dragon"
    },
    {
        "text": "GoldenEagle (GoldenEagle)",
        "url": "threat-library-detail.html?data=goldeneagle"
    },
    {
        "text": "GoldenRAT (GoldenRAT)",
        "url": "threat-library-detail.html?data=goldenrat"
    },
    {
        "text": "GoldFinder (GoldFinder)",
        "url": "threat-library-detail.html?data=goldfinder"
    },
    {
        "text": "GoldMax (GoldMax, SUNSHUTTLE)",
        "url": "threat-library-detail.html?data=goldmax"
    },
    {
        "text": "GolfSpy (GolfSpy)",
        "url": "threat-library-detail.html?data=golfspy"
    },
    {
        "text": "GollumApp (GollumApp)",
        "url": "threat-library-detail.html?data=gollumapp"
    },
    {
        "text": "Gon (Gon)",
        "url": "threat-library-detail.html?data=gon"
    },
    {
        "text": "Goodor (Goodor, Fuerboos)",
        "url": "threat-library-detail.html?data=goodor"
    },
    {
        "text": "GoogleDrive RAT (GoogleDrive RAT)",
        "url": "threat-library-detail.html?data=googledrive_rat"
    },
    {
        "text": "Goopy (Goopy)",
        "url": "threat-library-detail.html?data=goopy"
    },
    {
        "text": "Gootkit (Gootkit, Gootloader, Xswkit, talalpek, Waldek)",
        "url": "threat-library-detail.html?data=gootkit"
    },
    {
        "text": "Gophe (Gophe)",
        "url": "threat-library-detail.html?data=gophe"
    },
    {
        "text": "Gopuram (Gopuram)",
        "url": "threat-library-detail.html?data=gopuram"
    },
    {
        "text": "Gorynych (Gorynych, Gorynch, Diamond Fox, DiamondFox, Crystal)",
        "url": "threat-library-detail.html?data=gorynych"
    },
    {
        "text": "GO Simple Tunnel (GO Simple Tunnel, GOST)",
        "url": "threat-library-detail.html?data=go_simple_tunnel"
    },
    {
        "text": "GotoHTTP (GotoHTTP)",
        "url": "threat-library-detail.html?data=gotohttp"
    },
    {
        "text": "Gozi ISFB (Gozi ISFB, ISFB, Pandemyia)",
        "url": "threat-library-detail.html?data=gozi_isfb"
    },
    {
        "text": "Gozi v2 (Gozi v2, Gozi Prinimalka, Prinimalka-Gozi)",
        "url": "threat-library-detail.html?data=gozi_v2"
    },
    {
        "text": "GozNym (GozNym)",
        "url": "threat-library-detail.html?data=goznym"
    },
    {
        "text": "gpresult (gpresult, Group Policy Results Tool)",
        "url": "threat-library-detail.html?data=gpresult"
    },
    {
        "text": "GpUpdates.exe (GpUpdates.exe)",
        "url": "threat-library-detail.html?data=gpupdates.exe"
    },
    {
        "text": "GraphicalNeutrino (GraphicalNeutrino)",
        "url": "threat-library-detail.html?data=graphicalneutrino"
    },
    {
        "text": "GraphicalProton (GraphicalProton)",
        "url": "threat-library-detail.html?data=graphicalproton"
    },
    {
        "text": "Graphican (Graphican)",
        "url": "threat-library-detail.html?data=graphican"
    },
    {
        "text": "Graphiron (Graphiron)",
        "url": "threat-library-detail.html?data=graphiron"
    },
    {
        "text": "Graphite (Graphite)",
        "url": "threat-library-detail.html?data=graphite"
    },
    {
        "text": "Graphon (Graphon)",
        "url": "threat-library-detail.html?data=graphon"
    },
    {
        "text": "GraphSteel (GraphSteel, Elephant Client)",
        "url": "threat-library-detail.html?data=graphsteel"
    },
    {
        "text": "Grateful POS (Grateful POS, TRINITY)",
        "url": "threat-library-detail.html?data=grateful_pos"
    },
    {
        "text": "GRAYFISH (GRAYFISH)",
        "url": "threat-library-detail.html?data=grayfish"
    },
    {
        "text": "Gray Lambert (Gray Lambert)",
        "url": "threat-library-detail.html?data=gray_lambert"
    },
    {
        "text": "Grease (Grease)",
        "url": "threat-library-detail.html?data=grease"
    },
    {
        "text": "GREENCAT (GREENCAT)",
        "url": "threat-library-detail.html?data=greencat"
    },
    {
        "text": "GreenDispenser (GreenDispenser)",
        "url": "threat-library-detail.html?data=greendispenser"
    },
    {
        "text": "Green Lambert (Green Lambert)",
        "url": "threat-library-detail.html?data=green_lambert"
    },
    {
        "text": "GreezeBackdoor (GreezeBackdoor)",
        "url": "threat-library-detail.html?data=greezebackdoor"
    },
    {
        "text": "GreyEnergy (GreyEnergy)",
        "url": "threat-library-detail.html?data=greyenergy"
    },
    {
        "text": "Grief (Grief, Pay or Grief)",
        "url": "threat-library-detail.html?data=grief"
    },
    {
        "text": "GRILLMARK (GRILLMARK, Hellsing Backdoor)",
        "url": "threat-library-detail.html?data=grillmark"
    },
    {
        "text": "GrimPlant (GrimPlant, Elephant Implant)",
        "url": "threat-library-detail.html?data=grimplant"
    },
    {
        "text": "GROK (GROK)",
        "url": "threat-library-detail.html?data=grok"
    },
    {
        "text": "gsecdump (gsecdump)",
        "url": "threat-library-detail.html?data=gsecdump"
    },
    {
        "text": "GuLoader (GuLoader, vbdropper, CloudEyE)",
        "url": "threat-library-detail.html?data=guloader"
    },
    {
        "text": "GUNTERS (GUNTERS)",
        "url": "threat-library-detail.html?data=gunters"
    },
    {
        "text": "GUP Proxy Tool (GUP Proxy Tool)",
        "url": "threat-library-detail.html?data=gup_proxy_tool"
    },
    {
        "text": "H1N1 Loader (H1N1 Loader, H1N1)",
        "url": "threat-library-detail.html?data=h1n1_loader"
    },
    {
        "text": "HackBrowserData (HackBrowserData)",
        "url": "threat-library-detail.html?data=hackbrowserdata"
    },
    {
        "text": "Hackfase (Hackfase, Hacksfase)",
        "url": "threat-library-detail.html?data=hackfase"
    },
    {
        "text": "Hades (Hades)",
        "url": "threat-library-detail.html?data=hades"
    },
    {
        "text": "HALFBAKED (HALFBAKED, VB Flash)",
        "url": "threat-library-detail.html?data=halfbaked"
    },
    {
        "text": "HALFSHELL (HALFSHELL)",
        "url": "threat-library-detail.html?data=halfshell"
    },
    {
        "text": "HammerDuke (HammerDuke, HAMMERTOSS, NetDuke, tDiscoverer)",
        "url": "threat-library-detail.html?data=hammerduke"
    },
    {
        "text": "Hannotog (Hannotog)",
        "url": "threat-library-detail.html?data=hannotog"
    },
    {
        "text": "HAPPYWORK (HAPPYWORK)",
        "url": "threat-library-detail.html?data=happywork"
    },
    {
        "text": "HARDRAIN (HARDRAIN)",
        "url": "threat-library-detail.html?data=hardrain"
    },
    {
        "text": "Harpoon (Harpoon, Garpun)",
        "url": "threat-library-detail.html?data=harpoon"
    },
    {
        "text": "Havex RAT (Havex RAT, Havex, Oldrea, Backdoor.Oldrea, Fertger, PEACEPIPE)",
        "url": "threat-library-detail.html?data=havex_rat"
    },
    {
        "text": "Havij (Havij)",
        "url": "threat-library-detail.html?data=havij"
    },
    {
        "text": "Hawup (Hawup, Hawup RAT)",
        "url": "threat-library-detail.html?data=hawup"
    },
    {
        "text": "hcdLoader (hcdLoader)",
        "url": "threat-library-detail.html?data=hcdloader"
    },
    {
        "text": "HDoor (HDoor, Custom HDoor)",
        "url": "threat-library-detail.html?data=hdoor"
    },
    {
        "text": "HDRoot (HDRoot, HDD Rootkit)",
        "url": "threat-library-detail.html?data=hdroot"
    },
    {
        "text": "Helauto (Helauto)",
        "url": "threat-library-detail.html?data=helauto"
    },
    {
        "text": "Hello EK (Hello EK, LightsOut 2.0)",
        "url": "threat-library-detail.html?data=hello_ek"
    },
    {
        "text": "HELLOKITTY (HELLOKITTY, HelloKitty, KittyCrypt)",
        "url": "threat-library-detail.html?data=hellokitty"
    },
    {
        "text": "Helminth (Helminth)",
        "url": "threat-library-detail.html?data=helminth"
    },
    {
        "text": "HenBox (HenBox)",
        "url": "threat-library-detail.html?data=henbox"
    },
    {
        "text": "Heriplor (Heriplor)",
        "url": "threat-library-detail.html?data=heriplor"
    },
    {
        "text": "Hermes (Hermes)",
        "url": "threat-library-detail.html?data=hermes"
    },
    {
        "text": "HermeticRansom (HermeticRansom, PartyTicket, Elections GoRansom, SonicVote)",
        "url": "threat-library-detail.html?data=hermeticransom"
    },
    {
        "text": "HermeticWizard (HermeticWizard)",
        "url": "threat-library-detail.html?data=hermeticwizard"
    },
    {
        "text": "HesperBot (HesperBot)",
        "url": "threat-library-detail.html?data=hesperbot"
    },
    {
        "text": "HiddenLotus (HiddenLotus)",
        "url": "threat-library-detail.html?data=hiddenlotus"
    },
    {
        "text": "HIDEDRV (HIDEDRV)",
        "url": "threat-library-detail.html?data=hidedrv"
    },
    {
        "text": "HighNoon (HighNoon)",
        "url": "threat-library-detail.html?data=highnoon"
    },
    {
        "text": "HighNote (HighNote, ChyNode)",
        "url": "threat-library-detail.html?data=highnote"
    },
    {
        "text": "HiKit (HiKit)",
        "url": "threat-library-detail.html?data=hikit"
    },
    {
        "text": "Hisoka (Hisoka)",
        "url": "threat-library-detail.html?data=hisoka"
    },
    {
        "text": "HKDOOR (HKDOOR)",
        "url": "threat-library-detail.html?data=hkdoor"
    },
    {
        "text": "Hodur (Hodur)",
        "url": "threat-library-detail.html?data=hodur"
    },
    {
        "text": "HomamDownloader (HomamDownloader)",
        "url": "threat-library-detail.html?data=homamdownloader"
    },
    {
        "text": "HOMEFRY (HOMEFRY)",
        "url": "threat-library-detail.html?data=homefry"
    },
    {
        "text": "HOOKSHOT (HOOKSHOT)",
        "url": "threat-library-detail.html?data=hookshot"
    },
    {
        "text": "HOPLIGHT (HOPLIGHT, HANGMAN)",
        "url": "threat-library-detail.html?data=hoplight"
    },
    {
        "text": "HopperTick (HopperTick)",
        "url": "threat-library-detail.html?data=hoppertick"
    },
    {
        "text": "Hornbill (Hornbill)",
        "url": "threat-library-detail.html?data=hornbill"
    },
    {
        "text": "HOTCROISSANT (HOTCROISSANT, HotCroissant)",
        "url": "threat-library-detail.html?data=hotcroissant"
    },
    {
        "text": "HotelAlfa (HotelAlfa)",
        "url": "threat-library-detail.html?data=hotelalfa"
    },
    {
        "text": "HOTLANE (HOTLANE)",
        "url": "threat-library-detail.html?data=hotlane"
    },
    {
        "text": "Hotwax (Hotwax, HOTWAX)",
        "url": "threat-library-detail.html?data=hotwax"
    },
    {
        "text": "HtDnDownLoader (HtDnDownLoader)",
        "url": "threat-library-detail.html?data=htdndownloader"
    },
    {
        "text": "HTML5 Encoding (HTML5 Encoding)",
        "url": "threat-library-detail.html?data=html5_encoding"
    },
    {
        "text": "HTran (HTran, HUC Packet Transmit Tool)",
        "url": "threat-library-detail.html?data=htran"
    },
    {
        "text": "HTTPBrowser (HTTPBrowser, HttpBrowser RAT, HttpDump, TokenControl, Token Control)",
        "url": "threat-library-detail.html?data=httpbrowser"
    },
    {
        "text": "httpclient (httpclient)",
        "url": "threat-library-detail.html?data=httpclient"
    },
    {
        "text": "Http Dr0pper (Http Dr0pper, httpdr0pper, httpdropper)",
        "url": "threat-library-detail.html?data=http_dr0pper"
    },
    {
        "text": "HTTP Troy (HTTP Troy, http_troy)",
        "url": "threat-library-detail.html?data=http_troy"
    },
    {
        "text": "HTTPTunnel (HTTPTunnel)",
        "url": "threat-library-detail.html?data=httptunnel"
    },
    {
        "text": "HUC Port Banner Scanner (HUC Port Banner Scanner)",
        "url": "threat-library-detail.html?data=huc_port_banner_scanner"
    },
    {
        "text": "HUI Loader (HUI Loader)",
        "url": "threat-library-detail.html?data=hui_loader"
    },
    {
        "text": "HummingBad (HummingBad)",
        "url": "threat-library-detail.html?data=hummingbad"
    },
    {
        "text": "HummingWhale (HummingWhale)",
        "url": "threat-library-detail.html?data=hummingwhale"
    },
    {
        "text": "Hunter (Hunter)",
        "url": "threat-library-detail.html?data=hunter"
    },
    {
        "text": "Hupigon (Hupigon, Hupigon RAT, BKDR_HUPIGON, MFC Huner)",
        "url": "threat-library-detail.html?data=hupigon"
    },
    {
        "text": "Hurix (Hurix)",
        "url": "threat-library-detail.html?data=hurix"
    },
    {
        "text": "Hussar (Hussar)",
        "url": "threat-library-detail.html?data=hussar"
    },
    {
        "text": "H-Worm (H-Worm, H-Worm RAT, Houdini RAT, Houdini, Hworm, Njw0rm, Iniduoh, Jenxcus, Kognito, WSHRAT, dinihou, dunihi)",
        "url": "threat-library-detail.html?data=h-worm"
    },
    {
        "text": "HYPERSCRAPE (HYPERSCRAPE)",
        "url": "threat-library-detail.html?data=hyperscrape"
    },
    {
        "text": "HyperStack (HyperStack, GoldenSky, SilentMoon, Turla SilentMoon, BigBoss, Cacao)",
        "url": "threat-library-detail.html?data=hyperstack"
    },
    {
        "text": "IAP (IAP)",
        "url": "threat-library-detail.html?data=iap"
    },
    {
        "text": "IceCube (IceCube)",
        "url": "threat-library-detail.html?data=icecube"
    },
    {
        "text": "IcedCoffee (IcedCoffee)",
        "url": "threat-library-detail.html?data=icedcoffee"
    },
    {
        "text": "Icefog (Icefog, Fucobha)",
        "url": "threat-library-detail.html?data=icefog"
    },
    {
        "text": "Ice IX (Ice IX)",
        "url": "threat-library-detail.html?data=ice_ix"
    },
    {
        "text": "IconDown (IconDown)",
        "url": "threat-library-detail.html?data=icondown"
    },
    {
        "text": "ICONICSTEALER (ICONICSTEALER)",
        "url": "threat-library-detail.html?data=iconicstealer"
    },
    {
        "text": "IE PassView (IE PassView)",
        "url": "threat-library-detail.html?data=ie_passview"
    },
    {
        "text": "IGT supertool (IGT supertool, Information Gathering Tool)",
        "url": "threat-library-detail.html?data=igt_supertool"
    },
    {
        "text": "IHEATE (IHEATE)",
        "url": "threat-library-detail.html?data=iheate"
    },
    {
        "text": "Imecab (Imecab)",
        "url": "threat-library-detail.html?data=imecab"
    },
    {
        "text": "Impacket (Impacket)",
        "url": "threat-library-detail.html?data=impacket"
    },
    {
        "text": "Inception (Inception)",
        "url": "threat-library-detail.html?data=inception"
    },
    {
        "text": "Industrial Spy (Industrial Spy)",
        "url": "threat-library-detail.html?data=industrial_spy"
    },
    {
        "text": "Industroyer (Industroyer, Crash, CrashOverride, CRASHOVERRIDE, Win32/Industroyer)",
        "url": "threat-library-detail.html?data=industroyer"
    },
    {
        "text": "Industroyer2 (Industroyer2)",
        "url": "threat-library-detail.html?data=industroyer2"
    },
    {
        "text": "Infostealer (Infostealer, stereoversioncontrol)",
        "url": "threat-library-detail.html?data=infostealer"
    },
    {
        "text": "Inveigh (Inveigh)",
        "url": "threat-library-detail.html?data=inveigh"
    },
    {
        "text": "InvisiMole (InvisiMole)",
        "url": "threat-library-detail.html?data=invisimole"
    },
    {
        "text": "Invoke-Ngrok (Invoke-Ngrok)",
        "url": "threat-library-detail.html?data=invoke-ngrok"
    },
    {
        "text": "Invoke-SMBAutoBrute (Invoke-SMBAutoBrute)",
        "url": "threat-library-detail.html?data=invoke-smbautobrute"
    },
    {
        "text": "Invoke the Hash (Invoke the Hash)",
        "url": "threat-library-detail.html?data=invoke_the_hash"
    },
    {
        "text": "IPsec Helper (IPsec Helper)",
        "url": "threat-library-detail.html?data=ipsec_helper"
    },
    {
        "text": "IRAFAU (IRAFAU)",
        "url": "threat-library-detail.html?data=irafau"
    },
    {
        "text": "IRONHALO (IRONHALO)",
        "url": "threat-library-detail.html?data=ironhalo"
    },
    {
        "text": "IronNetInjector (IronNetInjector)",
        "url": "threat-library-detail.html?data=ironnetinjector"
    },
    {
        "text": "IronPython (IronPython)",
        "url": "threat-library-detail.html?data=ironpython"
    },
    {
        "text": "IRONSQUIRREL (IRONSQUIRREL)",
        "url": "threat-library-detail.html?data=ironsquirrel"
    },
    {
        "text": "ISMAgent (ISMAgent)",
        "url": "threat-library-detail.html?data=ismagent"
    },
    {
        "text": "ISMDoor (ISMDoor)",
        "url": "threat-library-detail.html?data=ismdoor"
    },
    {
        "text": "ISMInjector (ISMInjector, Agent Injector)",
        "url": "threat-library-detail.html?data=isminjector"
    },
    {
        "text": "IsSpace (IsSpace, NfLog RAT)",
        "url": "threat-library-detail.html?data=isspace"
    },
    {
        "text": "Ivoke (Ivoke)",
        "url": "threat-library-detail.html?data=ivoke"
    },
    {
        "text": "IXESHE (IXESHE)",
        "url": "threat-library-detail.html?data=ixeshe"
    },
    {
        "text": "JackalControl (JackalControl)",
        "url": "threat-library-detail.html?data=jackalcontrol"
    },
    {
        "text": "JackalPerInfo (JackalPerInfo)",
        "url": "threat-library-detail.html?data=jackalperinfo"
    },
    {
        "text": "JackalScreenWatcher (JackalScreenWatcher)",
        "url": "threat-library-detail.html?data=jackalscreenwatcher"
    },
    {
        "text": "JackalSteal (JackalSteal)",
        "url": "threat-library-detail.html?data=jackalsteal"
    },
    {
        "text": "JackalWorm (JackalWorm)",
        "url": "threat-library-detail.html?data=jackalworm"
    },
    {
        "text": "JackOfHearts (JackOfHearts, SLOTHFULMEDIA)",
        "url": "threat-library-detail.html?data=jackofhearts"
    },
    {
        "text": "JackPOS (JackPOS)",
        "url": "threat-library-detail.html?data=jackpos"
    },
    {
        "text": "JadeRAT (JadeRAT)",
        "url": "threat-library-detail.html?data=jaderat"
    },
    {
        "text": "Jaff (Jaff, Rakhni)",
        "url": "threat-library-detail.html?data=jaff"
    },
    {
        "text": "Janicab (Janicab)",
        "url": "threat-library-detail.html?data=janicab"
    },
    {
        "text": "Jason (Jason)",
        "url": "threat-library-detail.html?data=jason"
    },
    {
        "text": "Jasus (Jasus)",
        "url": "threat-library-detail.html?data=jasus"
    },
    {
        "text": "Javafog (Javafog)",
        "url": "threat-library-detail.html?data=javafog"
    },
    {
        "text": "JESTBOT (JESTBOT)",
        "url": "threat-library-detail.html?data=jestbot"
    },
    {
        "text": "JhoneRAT (JhoneRAT)",
        "url": "threat-library-detail.html?data=jhonerat"
    },
    {
        "text": "JHUHUGIT (JHUHUGIT, Seduploader, JKEYSKW, Sednit, Downrage, GAMEFISH, carberplike, SofacyCarberp, Carberp, Trojan.Sofacy)",
        "url": "threat-library-detail.html?data=jhuhugit"
    },
    {
        "text": "JLOGRAB (JLOGRAB)",
        "url": "threat-library-detail.html?data=jlograb"
    },
    {
        "text": "JLORAT (JLORAT)",
        "url": "threat-library-detail.html?data=jlorat"
    },
    {
        "text": "Joanap (Joanap, SierraJuliett-MikeOne, SierraJuliett-MikeTwo)",
        "url": "threat-library-detail.html?data=joanap"
    },
    {
        "text": "Jokra (Jokra, KillMBR, Dembr)",
        "url": "threat-library-detail.html?data=jokra"
    },
    {
        "text": "JpgRun (JpgRun, JpgRun Loader)",
        "url": "threat-library-detail.html?data=jpgrun"
    },
    {
        "text": "JPIN (JPIN)",
        "url": "threat-library-detail.html?data=jpin"
    },
    {
        "text": "JRat (JRat, Jacksbot)",
        "url": "threat-library-detail.html?data=jrat"
    },
    {
        "text": "JripBot (JripBot, Jiripbot)",
        "url": "threat-library-detail.html?data=jripbot"
    },
    {
        "text": "JS Flash (JS Flash)",
        "url": "threat-library-detail.html?data=js_flash"
    },
    {
        "text": "JsonCookies (JsonCookies)",
        "url": "threat-library-detail.html?data=jsoncookies"
    },
    {
        "text": "jsp File browser (jsp File browser)",
        "url": "threat-library-detail.html?data=jsp_file_browser"
    },
    {
        "text": "JSPRAT (JSPRAT)",
        "url": "threat-library-detail.html?data=jsprat"
    },
    {
        "text": "JSPSPY (JSPSPY)",
        "url": "threat-library-detail.html?data=jspspy"
    },
    {
        "text": "JuicyPotato (JuicyPotato)",
        "url": "threat-library-detail.html?data=juicypotato"
    },
    {
        "text": "Jumpall (Jumpall)",
        "url": "threat-library-detail.html?data=jumpall"
    },
    {
        "text": "KAgent (KAgent)",
        "url": "threat-library-detail.html?data=kagent"
    },
    {
        "text": "KamiKakaBot (KamiKakaBot)",
        "url": "threat-library-detail.html?data=kamikakabot"
    },
    {
        "text": "KARAE (KARAE)",
        "url": "threat-library-detail.html?data=karae"
    },
    {
        "text": "Karagany (Karagany, Karagny, Trojan.Karagany, xFrost)",
        "url": "threat-library-detail.html?data=karagany"
    },
    {
        "text": "Karba (Karba, Trojan.Win32.Karba.e)",
        "url": "threat-library-detail.html?data=karba"
    },
    {
        "text": "Karius (Karius)",
        "url": "threat-library-detail.html?data=karius"
    },
    {
        "text": "Karkoff (Karkoff, MailDropper, DropperBackdoor, CACTUSPIPE)",
        "url": "threat-library-detail.html?data=karkoff"
    },
    {
        "text": "KasperAgent (KasperAgent)",
        "url": "threat-library-detail.html?data=kasperagent"
    },
    {
        "text": "Kazuar (Kazuar)",
        "url": "threat-library-detail.html?data=kazuar"
    },
    {
        "text": "KeeThief (KeeThief)",
        "url": "threat-library-detail.html?data=keethief"
    },
    {
        "text": "Kegotip (Kegotip)",
        "url": "threat-library-detail.html?data=kegotip"
    },
    {
        "text": "Kelihos (Kelihos, Waledac, Hlux)",
        "url": "threat-library-detail.html?data=kelihos"
    },
    {
        "text": "Kerberoast (Kerberoast)",
        "url": "threat-library-detail.html?data=kerberoast"
    },
    {
        "text": "Kerberods (Kerberods)",
        "url": "threat-library-detail.html?data=kerberods"
    },
    {
        "text": "KerrDown (KerrDown)",
        "url": "threat-library-detail.html?data=kerrdown"
    },
    {
        "text": "Ketrican (Ketrican)",
        "url": "threat-library-detail.html?data=ketrican"
    },
    {
        "text": "Ketrum (Ketrum)",
        "url": "threat-library-detail.html?data=ketrum"
    },
    {
        "text": "KevDroid (KevDroid)",
        "url": "threat-library-detail.html?data=kevdroid"
    },
    {
        "text": "KeyBoy (KeyBoy, TSSL)",
        "url": "threat-library-detail.html?data=keyboy"
    },
    {
        "text": "KEYMARBLE (KEYMARBLE)",
        "url": "threat-library-detail.html?data=keymarble"
    },
    {
        "text": "KEYPLUG (KEYPLUG, ELFSHELF)",
        "url": "threat-library-detail.html?data=keyplug"
    },
    {
        "text": "Keyrecord (Keyrecord)",
        "url": "threat-library-detail.html?data=keyrecord"
    },
    {
        "text": "KGH_SPY (KGH_SPY, KGH Spyware Suite)",
        "url": "threat-library-detail.html?data=kgh_spy"
    },
    {
        "text": "KHRAT (KHRAT)",
        "url": "threat-library-detail.html?data=khrat"
    },
    {
        "text": "Kikothac (Kikothac)",
        "url": "threat-library-detail.html?data=kikothac"
    },
    {
        "text": "KillDisk (KillDisk, Win32/KillDisk.NBI, Win32/KillDisk.NBH, Win32/KillDisk.NBD, Win32/KillDisk.NBC, Win32/KillDisk.NBB)",
        "url": "threat-library-detail.html?data=killdisk"
    },
    {
        "text": "Killua (Killua)",
        "url": "threat-library-detail.html?data=killua"
    },
    {
        "text": "KimJongRAT (KimJongRAT)",
        "url": "threat-library-detail.html?data=kimjongrat"
    },
    {
        "text": "KingOfHearts (KingOfHearts)",
        "url": "threat-library-detail.html?data=kingofhearts"
    },
    {
        "text": "KINS (KINS, Maple, Zeus.Maple, Kasper Internet Non-Security)",
        "url": "threat-library-detail.html?data=kins"
    },
    {
        "text": "Kitkiot (Kitkiot)",
        "url": "threat-library-detail.html?data=kitkiot"
    },
    {
        "text": "KIVARS (KIVARS)",
        "url": "threat-library-detail.html?data=kivars"
    },
    {
        "text": "kl.ps1 (kl.ps1)",
        "url": "threat-library-detail.html?data=kl.ps1"
    },
    {
        "text": "KLRD (KLRD)",
        "url": "threat-library-detail.html?data=klrd"
    },
    {
        "text": "Koadic (Koadic)",
        "url": "threat-library-detail.html?data=koadic"
    },
    {
        "text": "KOCTOPUS (KOCTOPUS)",
        "url": "threat-library-detail.html?data=koctopus"
    },
    {
        "text": "Komplex (Komplex)",
        "url": "threat-library-detail.html?data=komplex"
    },
    {
        "text": "KOMPROGO (KOMPROGO, Splinter RAT)",
        "url": "threat-library-detail.html?data=komprogo"
    },
    {
        "text": "KopiLuwak (KopiLuwak)",
        "url": "threat-library-detail.html?data=kopiluwak"
    },
    {
        "text": "Koredos (Koredos)",
        "url": "threat-library-detail.html?data=koredos"
    },
    {
        "text": "Korkerds (Korkerds)",
        "url": "threat-library-detail.html?data=korkerds"
    },
    {
        "text": "KPortScan (KPortScan)",
        "url": "threat-library-detail.html?data=kportscan"
    },
    {
        "text": "KRBanker (KRBanker, Blackmoon)",
        "url": "threat-library-detail.html?data=krbanker"
    },
    {
        "text": "KSL0T (KSL0T)",
        "url": "threat-library-detail.html?data=ksl0t"
    },
    {
        "text": "KsRemote (KsRemote)",
        "url": "threat-library-detail.html?data=ksremote"
    },
    {
        "text": "Kurton (Kurton)",
        "url": "threat-library-detail.html?data=kurton"
    },
    {
        "text": "Kwampirs (Kwampirs)",
        "url": "threat-library-detail.html?data=kwampirs"
    },
    {
        "text": "LadonGo (LadonGo)",
        "url": "threat-library-detail.html?data=ladongo"
    },
    {
        "text": "Lambert (Lambert, Plexor)",
        "url": "threat-library-detail.html?data=lambert"
    },
    {
        "text": "Lastacloud (Lastacloud)",
        "url": "threat-library-detail.html?data=lastacloud"
    },
    {
        "text": "LastConn (LastConn)",
        "url": "threat-library-detail.html?data=lastconn"
    },
    {
        "text": "LATCHKEY (LATCHKEY)",
        "url": "threat-library-detail.html?data=latchkey"
    },
    {
        "text": "LATELUNCH (LATELUNCH)",
        "url": "threat-library-detail.html?data=latelunch"
    },
    {
        "text": "LaZagne (LaZagne)",
        "url": "threat-library-detail.html?data=lazagne"
    },
    {
        "text": "Lazarus (Lazarus, HIDDEN COBRA RAT/Worm)",
        "url": "threat-library-detail.html?data=lazarus"
    },
    {
        "text": "LazyCat (LazyCat)",
        "url": "threat-library-detail.html?data=lazycat"
    },
    {
        "text": "lcx (lcx)",
        "url": "threat-library-detail.html?data=lcx"
    },
    {
        "text": "Leash (Leash)",
        "url": "threat-library-detail.html?data=leash"
    },
    {
        "text": "LEMONSTICK (LEMONSTICK)",
        "url": "threat-library-detail.html?data=lemonstick"
    },
    {
        "text": "LEMPO (LEMPO)",
        "url": "threat-library-detail.html?data=lempo"
    },
    {
        "text": "Leo RAT (Leo RAT)",
        "url": "threat-library-detail.html?data=leo_rat"
    },
    {
        "text": "LEOUNCIA (LEOUNCIA, shoco)",
        "url": "threat-library-detail.html?data=leouncia"
    },
    {
        "text": "Licat (Licat, Murofet)",
        "url": "threat-library-detail.html?data=licat"
    },
    {
        "text": "liderc (liderc)",
        "url": "threat-library-detail.html?data=liderc"
    },
    {
        "text": "LIFEBOAT (LIFEBOAT)",
        "url": "threat-library-detail.html?data=lifeboat"
    },
    {
        "text": "LIGHTBOLT (LIGHTBOLT)",
        "url": "threat-library-detail.html?data=lightbolt"
    },
    {
        "text": "LightBot (LightBot)",
        "url": "threat-library-detail.html?data=lightbot"
    },
    {
        "text": "LIGHTDART (LIGHTDART)",
        "url": "threat-library-detail.html?data=lightdart"
    },
    {
        "text": "LightNeuron (LightNeuron, NETTRANS, XTRANS)",
        "url": "threat-library-detail.html?data=lightneuron"
    },
    {
        "text": "LIGHTSHIFT (LIGHTSHIFT)",
        "url": "threat-library-detail.html?data=lightshift"
    },
    {
        "text": "LIGHTSHOW (LIGHTSHOW)",
        "url": "threat-library-detail.html?data=lightshow"
    },
    {
        "text": "LightsOut EK (LightsOut EK)",
        "url": "threat-library-detail.html?data=lightsout_ek"
    },
    {
        "text": "lightSpy (lightSpy)",
        "url": "threat-library-detail.html?data=lightspy"
    },
    {
        "text": "Lilith RAT (Lilith RAT, Lilith)",
        "url": "threat-library-detail.html?data=lilith_rat"
    },
    {
        "text": "Limepad (Limepad)",
        "url": "threat-library-detail.html?data=limepad"
    },
    {
        "text": "Linfo (Linfo)",
        "url": "threat-library-detail.html?data=linfo"
    },
    {
        "text": "Listrix (Listrix)",
        "url": "threat-library-detail.html?data=listrix"
    },
    {
        "text": "LiteDuke (LiteDuke)",
        "url": "threat-library-detail.html?data=liteduke"
    },
    {
        "text": "lite_more_eggs (lite_more_eggs)",
        "url": "threat-library-detail.html?data=lite_more_eggs"
    },
    {
        "text": "Little Pig (Little Pig)",
        "url": "threat-library-detail.html?data=little_pig"
    },
    {
        "text": "Living off the Land (Living off the Land, LOLBins, LOLBAS)",
        "url": "threat-library-detail.html?data=living_off_the_land"
    },
    {
        "text": "Lizar (Lizar, Tirion, DICELOADER)",
        "url": "threat-library-detail.html?data=lizar"
    },
    {
        "text": "LOADOUT (LOADOUT)",
        "url": "threat-library-detail.html?data=loadout"
    },
    {
        "text": "LockerGoga (LockerGoga)",
        "url": "threat-library-detail.html?data=lockergoga"
    },
    {
        "text": "LockFile (LockFile)",
        "url": "threat-library-detail.html?data=lockfile"
    },
    {
        "text": "LockPOS (LockPOS)",
        "url": "threat-library-detail.html?data=lockpos"
    },
    {
        "text": "LODEINFO (LODEINFO)",
        "url": "threat-library-detail.html?data=lodeinfo"
    },
    {
        "text": "LOGBLEACH (LOGBLEACH)",
        "url": "threat-library-detail.html?data=logbleach"
    },
    {
        "text": "Logger Module (Logger Module)",
        "url": "threat-library-detail.html?data=logger_module"
    },
    {
        "text": "logon.dll (logon.dll)",
        "url": "threat-library-detail.html?data=logon.dll"
    },
    {
        "text": "LogPOS (LogPOS)",
        "url": "threat-library-detail.html?data=logpos"
    },
    {
        "text": "logsupport.dll (logsupport.dll)",
        "url": "threat-library-detail.html?data=logsupport.dll"
    },
    {
        "text": "LoJax (LoJax)",
        "url": "threat-library-detail.html?data=lojax"
    },
    {
        "text": "LONGRUN (LONGRUN)",
        "url": "threat-library-detail.html?data=longrun"
    },
    {
        "text": "LONGWATCH (LONGWATCH)",
        "url": "threat-library-detail.html?data=longwatch"
    },
    {
        "text": "LOWBALL (LOWBALL)",
        "url": "threat-library-detail.html?data=lowball"
    },
    {
        "text": "Lowkey (Lowkey, PortReuse)",
        "url": "threat-library-detail.html?data=lowkey"
    },
    {
        "text": "LSD (LSD)",
        "url": "threat-library-detail.html?data=lsd"
    },
    {
        "text": "Lslsass (Lslsass)",
        "url": "threat-library-detail.html?data=lslsass"
    },
    {
        "text": "Lucky Cat (Lucky Cat, LuckyCat)",
        "url": "threat-library-detail.html?data=lucky_cat"
    },
    {
        "text": "Luminosity RAT (Luminosity RAT, LuminosityLink)",
        "url": "threat-library-detail.html?data=luminosity_rat"
    },
    {
        "text": "LUNCHMONEY (LUNCHMONEY)",
        "url": "threat-library-detail.html?data=lunchmoney"
    },
    {
        "text": "Lurk (Lurk)",
        "url": "threat-library-detail.html?data=lurk"
    },
    {
        "text": "LZ77 (LZ77)",
        "url": "threat-library-detail.html?data=lz77"
    },
    {
        "text": "Macaw Locker (Macaw Locker)",
        "url": "threat-library-detail.html?data=macaw_locker"
    },
    {
        "text": "Madi (Madi)",
        "url": "threat-library-detail.html?data=madi"
    },
    {
        "text": "Madness PRO DDoS (Madness PRO DDoS)",
        "url": "threat-library-detail.html?data=madness_pro_ddos"
    },
    {
        "text": "Magenta Lambert (Magenta Lambert)",
        "url": "threat-library-detail.html?data=magenta_lambert"
    },
    {
        "text": "MAGICDROP (MAGICDROP)",
        "url": "threat-library-detail.html?data=magicdrop"
    },
    {
        "text": "MagicRAT (MagicRAT)",
        "url": "threat-library-detail.html?data=magicrat"
    },
    {
        "text": "MagicWeb (MagicWeb)",
        "url": "threat-library-detail.html?data=magicweb"
    },
    {
        "text": "MailPassView (MailPassView)",
        "url": "threat-library-detail.html?data=mailpassview"
    },
    {
        "text": "MAILSLOT (MAILSLOT)",
        "url": "threat-library-detail.html?data=mailslot"
    },
    {
        "text": "Maintools.js (Maintools.js)",
        "url": "threat-library-detail.html?data=maintools.js"
    },
    {
        "text": "MajikPOS (MajikPOS)",
        "url": "threat-library-detail.html?data=majikpos"
    },
    {
        "text": "MalumPOS (MalumPOS)",
        "url": "threat-library-detail.html?data=malumpos"
    },
    {
        "text": "ManItsMe (ManItsMe)",
        "url": "threat-library-detail.html?data=manitsme"
    },
    {
        "text": "MAPIget (MAPIget)",
        "url": "threat-library-detail.html?data=mapiget"
    },
    {
        "text": "Marcher (Marcher)",
        "url": "threat-library-detail.html?data=marcher"
    },
    {
        "text": "MargulasRAT (MargulasRAT)",
        "url": "threat-library-detail.html?data=margulasrat"
    },
    {
        "text": "MarkiRAT (MarkiRAT)",
        "url": "threat-library-detail.html?data=markirat"
    },
    {
        "text": "Marlin (Marlin)",
        "url": "threat-library-detail.html?data=marlin"
    },
    {
        "text": "MATA (MATA)",
        "url": "threat-library-detail.html?data=mata"
    },
    {
        "text": "Matiex (Matiex)",
        "url": "threat-library-detail.html?data=matiex"
    },
    {
        "text": "Matrix Banker (Matrix Banker, RediModiUpd)",
        "url": "threat-library-detail.html?data=matrix_banker"
    },
    {
        "text": "Matryoshka RAT (Matryoshka RAT, Matryoshka)",
        "url": "threat-library-detail.html?data=matryoshka_rat"
    },
    {
        "text": "Maxtrilha (Maxtrilha)",
        "url": "threat-library-detail.html?data=maxtrilha"
    },
    {
        "text": "Maze (Maze, ChaCha)",
        "url": "threat-library-detail.html?data=maze"
    },
    {
        "text": "MBR Eraser (MBR Eraser)",
        "url": "threat-library-detail.html?data=mbr_eraser"
    },
    {
        "text": "MBS BTC Stealer (MBS BTC Stealer)",
        "url": "threat-library-detail.html?data=mbs_btc_stealer"
    },
    {
        "text": "Md_client (Md_client)",
        "url": "threat-library-detail.html?data=md_client"
    },
    {
        "text": "MechaFlounder (MechaFlounder)",
        "url": "threat-library-detail.html?data=mechaflounder"
    },
    {
        "text": "Mechanical (Mechanical, GoldStamp)",
        "url": "threat-library-detail.html?data=mechanical"
    },
    {
        "text": "meek (meek)",
        "url": "threat-library-detail.html?data=meek"
    },
    {
        "text": "MegaCreep (MegaCreep)",
        "url": "threat-library-detail.html?data=megacreep"
    },
    {
        "text": "MEGAsync (MEGAsync)",
        "url": "threat-library-detail.html?data=megasync"
    },
    {
        "text": "Merdoor (Merdoor)",
        "url": "threat-library-detail.html?data=merdoor"
    },
    {
        "text": "MessageTap (MessageTap)",
        "url": "threat-library-detail.html?data=messagetap"
    },
    {
        "text": "METALJACK (METALJACK, denesRAT)",
        "url": "threat-library-detail.html?data=metaljack"
    },
    {
        "text": "Metasploit (Metasploit)",
        "url": "threat-library-detail.html?data=metasploit"
    },
    {
        "text": "Metasploit Stager (Metasploit Stager)",
        "url": "threat-library-detail.html?data=metasploit_stager"
    },
    {
        "text": "Metel (Metel)",
        "url": "threat-library-detail.html?data=metel"
    },
    {
        "text": "MFC Keyloggers (MFC Keyloggers)",
        "url": "threat-library-detail.html?data=mfc_keyloggers"
    },
    {
        "text": "MgBot (MgBot, BLame, Mgmbot)",
        "url": "threat-library-detail.html?data=mgbot"
    },
    {
        "text": "MiamiBeach (MiamiBeach)",
        "url": "threat-library-detail.html?data=miamibeach"
    },
    {
        "text": "Microolap Packet Sniffer (Microolap Packet Sniffer, TCPDUMP for Windows)",
        "url": "threat-library-detail.html?data=microolap_packet_sniffer"
    },
    {
        "text": "Microcin (Microcin, Mikroceen)",
        "url": "threat-library-detail.html?data=microcin"
    },
    {
        "text": "MIGLOGCLEANER (MIGLOGCLEANER)",
        "url": "threat-library-detail.html?data=miglogcleaner"
    },
    {
        "text": "Milan (Milan, James)",
        "url": "threat-library-detail.html?data=milan"
    },
    {
        "text": "MILKDROP (MILKDROP)",
        "url": "threat-library-detail.html?data=milkdrop"
    },
    {
        "text": "Milkmaid (Milkmaid)",
        "url": "threat-library-detail.html?data=milkmaid"
    },
    {
        "text": "Milum (Milum)",
        "url": "threat-library-detail.html?data=milum"
    },
    {
        "text": "MINEBRIDGE (MINEBRIDGE, MINEBRIDGE RAT, GazGolder)",
        "url": "threat-library-detail.html?data=minebridge"
    },
    {
        "text": "MINEDOOR (MINEDOOR)",
        "url": "threat-library-detail.html?data=minedoor"
    },
    {
        "text": "MiniASP (MiniASP)",
        "url": "threat-library-detail.html?data=miniasp"
    },
    {
        "text": "MiniDuke (MiniDuke)",
        "url": "threat-library-detail.html?data=miniduke"
    },
    {
        "text": "MiniWebCmdShell (MiniWebCmdShell)",
        "url": "threat-library-detail.html?data=miniwebcmdshell"
    },
    {
        "text": "Minzen (Minzen, XXMM, Wali, ShadowWali, ShadowWalker)",
        "url": "threat-library-detail.html?data=minzen"
    },
    {
        "text": "MirageFox (MirageFox)",
        "url": "threat-library-detail.html?data=miragefox"
    },
    {
        "text": "MirrorStealer (MirrorStealer)",
        "url": "threat-library-detail.html?data=mirrorstealer"
    },
    {
        "text": "Misdat (Misdat)",
        "url": "threat-library-detail.html?data=misdat"
    },
    {
        "text": "MISTCLOAK (MISTCLOAK)",
        "url": "threat-library-detail.html?data=mistcloak"
    },
    {
        "text": "MiS-Type (MiS-Type)",
        "url": "threat-library-detail.html?data=mis-type"
    },
    {
        "text": "Mivast (Mivast)",
        "url": "threat-library-detail.html?data=mivast"
    },
    {
        "text": "MIXLABEL (MIXLABEL)",
        "url": "threat-library-detail.html?data=mixlabel"
    },
    {
        "text": "MKL Pro Keylogger (MKL Pro Keylogger)",
        "url": "threat-library-detail.html?data=mkl_pro_keylogger"
    },
    {
        "text": "MMRat (MMRat)",
        "url": "threat-library-detail.html?data=mmrat"
    },
    {
        "text": "Mobzsar (Mobzsar)",
        "url": "threat-library-detail.html?data=mobzsar"
    },
    {
        "text": "MobileOrder (MobileOrder)",
        "url": "threat-library-detail.html?data=mobileorder"
    },
    {
        "text": "ModPipe (ModPipe)",
        "url": "threat-library-detail.html?data=modpipe"
    },
    {
        "text": "ModPOS (ModPOS, straxbot)",
        "url": "threat-library-detail.html?data=modpos"
    },
    {
        "text": "MoleNet (MoleNet)",
        "url": "threat-library-detail.html?data=molenet"
    },
    {
        "text": "Molerat Loader (Molerat Loader)",
        "url": "threat-library-detail.html?data=molerat_loader"
    },
    {
        "text": "Moneybird (Moneybird)",
        "url": "threat-library-detail.html?data=moneybird"
    },
    {
        "text": "MoneyTaker (MoneyTaker)",
        "url": "threat-library-detail.html?data=moneytaker"
    },
    {
        "text": "Mongall (Mongall)",
        "url": "threat-library-detail.html?data=mongall"
    },
    {
        "text": "MoonBounce (MoonBounce)",
        "url": "threat-library-detail.html?data=moonbounce"
    },
    {
        "text": "MOONSHINE (MOONSHINE)",
        "url": "threat-library-detail.html?data=moonshine"
    },
    {
        "text": "MoonWind RAT (MoonWind RAT, MoonWind)",
        "url": "threat-library-detail.html?data=moonwind_rat"
    },
    {
        "text": "More_eggs (More_eggs, SpicyOmelette, Terra Loader, SKID)",
        "url": "threat-library-detail.html?data=more_eggs"
    },
    {
        "text": "Moriya (Moriya)",
        "url": "threat-library-detail.html?data=moriya"
    },
    {
        "text": "Mosquito (Mosquito)",
        "url": "threat-library-detail.html?data=mosquito"
    },
    {
        "text": "Moudoor (Moudoor, SCAR)",
        "url": "threat-library-detail.html?data=moudoor"
    },
    {
        "text": "MOVEit Freely (MOVEit Freely)",
        "url": "threat-library-detail.html?data=moveit_freely"
    },
    {
        "text": "MPKBot (MPKBot, MPK)",
        "url": "threat-library-detail.html?data=mpkbot"
    },
    {
        "text": "MQsTTang (MQsTTang, QMAGENT)",
        "url": "threat-library-detail.html?data=mqsttang"
    },
    {
        "text": "MrPerfectInstaller (MrPerfectInstaller)",
        "url": "threat-library-detail.html?data=mrperfectinstaller"
    },
    {
        "text": "MS Exchange Tool (MS Exchange Tool)",
        "url": "threat-library-detail.html?data=ms_exchange_tool"
    },
    {
        "text": "msieckc.exe (msieckc.exe)",
        "url": "threat-library-detail.html?data=msieckc.exe"
    },
    {
        "text": "MSFvenom (MSFvenom)",
        "url": "threat-library-detail.html?data=msfvenom"
    },
    {
        "text": "MSUpdater (MSUpdater)",
        "url": "threat-library-detail.html?data=msupdater"
    },
    {
        "text": "msvcrt58.sqt (msvcrt58.sqt)",
        "url": "threat-library-detail.html?data=msvcrt58.sqt"
    },
    {
        "text": "Mudwater (Mudwater)",
        "url": "threat-library-detail.html?data=mudwater"
    },
    {
        "text": "Multigrain (Multigrain, Multigrain POS)",
        "url": "threat-library-detail.html?data=multigrain"
    },
    {
        "text": "MultiPipeLoader (MultiPipeLoader)",
        "url": "threat-library-detail.html?data=multipipeloader"
    },
    {
        "text": "MumbaiDown (MumbaiDown)",
        "url": "threat-library-detail.html?data=mumbaidown"
    },
    {
        "text": "MURKYTOP (MURKYTOP)",
        "url": "threat-library-detail.html?data=murkytop"
    },
    {
        "text": "MY24 (MY24)",
        "url": "threat-library-detail.html?data=my24"
    },
    {
        "text": "MyDogs (MyDogs)",
        "url": "threat-library-detail.html?data=mydogs"
    },
    {
        "text": "MyKLoadClient (MyKLoadClient)",
        "url": "threat-library-detail.html?data=mykloadclient"
    },
    {
        "text": "MysteryBot (MysteryBot)",
        "url": "threat-library-detail.html?data=mysterybot"
    },
    {
        "text": "MysterySnail RAT (MysterySnail RAT, MysterySnail)",
        "url": "threat-library-detail.html?data=mysterysnail_rat"
    },
    {
        "text": "MZCookiesView (MZCookiesView)",
        "url": "threat-library-detail.html?data=mzcookiesview"
    },
    {
        "text": "N1stAgent (N1stAgent)",
        "url": "threat-library-detail.html?data=n1stagent"
    },
    {
        "text": "NachoCheese (NachoCheese, NACHOCHEESE, Cyruslish, TWOPENCE, VIVACIOUSGIFT)",
        "url": "threat-library-detail.html?data=nachocheese"
    },
    {
        "text": "Naid (Naid, Trojan.Naid, Mdmbot.E, AGENT.GUNZ, AGENT.AQUP.DROPPER, AGENT.BMZA, MCRAT.A, AGENT.ABQMR)",
        "url": "threat-library-detail.html?data=naid"
    },
    {
        "text": "Naikon (Naikon, XsFunction, Sacto)",
        "url": "threat-library-detail.html?data=naikon"
    },
    {
        "text": "NAILGUN (NAILGUN)",
        "url": "threat-library-detail.html?data=nailgun"
    },
    {
        "text": "NanHaiShu (NanHaiShu)",
        "url": "threat-library-detail.html?data=nanhaishu"
    },
    {
        "text": "Nautilus (Nautilus)",
        "url": "threat-library-detail.html?data=nautilus"
    },
    {
        "text": "NavRAT (NavRAT, JinhoSpy)",
        "url": "threat-library-detail.html?data=navrat"
    },
    {
        "text": "NB65 (NB65)",
        "url": "threat-library-detail.html?data=nb65"
    },
    {
        "text": "Nbot (Nbot, TFC)",
        "url": "threat-library-detail.html?data=nbot"
    },
    {
        "text": "nbtscan (nbtscan, NBTscan)",
        "url": "threat-library-detail.html?data=nbtscan"
    },
    {
        "text": "nbtstat (nbtstat)",
        "url": "threat-library-detail.html?data=nbtstat"
    },
    {
        "text": "NCAT (NCAT)",
        "url": "threat-library-detail.html?data=ncat"
    },
    {
        "text": "NcFTPPut (NcFTPPut)",
        "url": "threat-library-detail.html?data=ncftpput"
    },
    {
        "text": "NDiskMonitor (NDiskMonitor)",
        "url": "threat-library-detail.html?data=ndiskmonitor"
    },
    {
        "text": "Nebulae (Nebulae)",
        "url": "threat-library-detail.html?data=nebulae"
    },
    {
        "text": "Necurs (Necurs, nucurs)",
        "url": "threat-library-detail.html?data=necurs"
    },
    {
        "text": "Nemim (Nemim, Nemain)",
        "url": "threat-library-detail.html?data=nemim"
    },
    {
        "text": "Nemty (Nemty)",
        "url": "threat-library-detail.html?data=nemty"
    },
    {
        "text": "NeoPocket (NeoPocket)",
        "url": "threat-library-detail.html?data=neopocket"
    },
    {
        "text": "Neptun (Neptun)",
        "url": "threat-library-detail.html?data=neptun"
    },
    {
        "text": "Nerex (Nerex)",
        "url": "threat-library-detail.html?data=nerex"
    },
    {
        "text": "NestEgg (NestEgg)",
        "url": "threat-library-detail.html?data=nestegg"
    },
    {
        "text": "netcat (netcat)",
        "url": "threat-library-detail.html?data=netcat"
    },
    {
        "text": "Net Crawler (Net Crawler, NetC)",
        "url": "threat-library-detail.html?data=net_crawler"
    },
    {
        "text": "NetEagle (NetEagle, ScoutEagle, scout, Neteagle_Scout, norton)",
        "url": "threat-library-detail.html?data=neteagle"
    },
    {
        "text": "Netero (Netero)",
        "url": "threat-library-detail.html?data=netero"
    },
    {
        "text": "NetExec (NetExec)",
        "url": "threat-library-detail.html?data=netexec"
    },
    {
        "text": "NetFlash (NetFlash)",
        "url": "threat-library-detail.html?data=netflash"
    },
    {
        "text": "NetHelp Infostealer (NetHelp Infostealer, NetHelp Striker)",
        "url": "threat-library-detail.html?data=nethelp_infostealer"
    },
    {
        "text": "NetPwdDump (NetPwdDump)",
        "url": "threat-library-detail.html?data=netpwddump"
    },
    {
        "text": "NetSess (NetSess)",
        "url": "threat-library-detail.html?data=netsess"
    },
    {
        "text": "NetSessionEnum (NetSessionEnum)",
        "url": "threat-library-detail.html?data=netsessionenum"
    },
    {
        "text": "NetSupport Manager (NetSupport Manager, NetSupport Manager RAT, NetSupportManager RAT, NetSupport)",
        "url": "threat-library-detail.html?data=netsupport_manager"
    },
    {
        "text": "NetTraveler (NetTraveler, TravNet, Netfile)",
        "url": "threat-library-detail.html?data=nettraveler"
    },
    {
        "text": "NetUseEngine (NetUseEngine)",
        "url": "threat-library-detail.html?data=netuseengine"
    },
    {
        "text": "Netview (Netview)",
        "url": "threat-library-detail.html?data=netview"
    },
    {
        "text": "NETVulture (NETVulture)",
        "url": "threat-library-detail.html?data=netvulture"
    },
    {
        "text": "NetWalker (NetWalker, MailTo, Koko Ransomware)",
        "url": "threat-library-detail.html?data=netwalker"
    },
    {
        "text": "NETWoolger (NETWoolger)",
        "url": "threat-library-detail.html?data=netwoolger"
    },
    {
        "text": "Network Password Recovery (Network Password Recovery)",
        "url": "threat-library-detail.html?data=network_password_recovery"
    },
    {
        "text": "Neuron (Neuron)",
        "url": "threat-library-detail.html?data=neuron"
    },
    {
        "text": "Neutrino (Neutrino, Neutrino Bot, Neutrino Exploit Kit, Kasidet)",
        "url": "threat-library-detail.html?data=neutrino"
    },
    {
        "text": "Neutrino POS (Neutrino POS, Jimmy)",
        "url": "threat-library-detail.html?data=neutrino_pos"
    },
    {
        "text": "NewCore RAT (NewCore RAT)",
        "url": "threat-library-detail.html?data=newcore_rat"
    },
    {
        "text": "NewCT (NewCT, CT)",
        "url": "threat-library-detail.html?data=newct"
    },
    {
        "text": "NewCT2 (NewCT2)",
        "url": "threat-library-detail.html?data=newct2"
    },
    {
        "text": "NewPass (NewPass)",
        "url": "threat-library-detail.html?data=newpass"
    },
    {
        "text": "NewPosThings (NewPosThings)",
        "url": "threat-library-detail.html?data=newposthings"
    },
    {
        "text": "NewsReels (NewsReels)",
        "url": "threat-library-detail.html?data=newsreels"
    },
    {
        "text": "NFlog (NFlog)",
        "url": "threat-library-detail.html?data=nflog"
    },
    {
        "text": "Ngrok (Ngrok)",
        "url": "threat-library-detail.html?data=ngrok"
    },
    {
        "text": "Nibatad (Nibatad)",
        "url": "threat-library-detail.html?data=nibatad"
    },
    {
        "text": "Nidiran (Nidiran, Backdoor.Nidiran)",
        "url": "threat-library-detail.html?data=nidiran"
    },
    {
        "text": "NIGHTJAR (NIGHTJAR)",
        "url": "threat-library-detail.html?data=nightjar"
    },
    {
        "text": "NightSky (NightSky, Night Sky)",
        "url": "threat-library-detail.html?data=nightsky"
    },
    {
        "text": "NimbleMamba (NimbleMamba)",
        "url": "threat-library-detail.html?data=nimblemamba"
    },
    {
        "text": "Nimcy (Nimcy)",
        "url": "threat-library-detail.html?data=nimcy"
    },
    {
        "text": "NineBlog (NineBlog)",
        "url": "threat-library-detail.html?data=nineblog"
    },
    {
        "text": "Ninja (Ninja)",
        "url": "threat-library-detail.html?data=ninja"
    },
    {
        "text": "Nishang (Nishang)",
        "url": "threat-library-detail.html?data=nishang"
    },
    {
        "text": "Niteris EK (Niteris EK, CottonCastle)",
        "url": "threat-library-detail.html?data=niteris_ek"
    },
    {
        "text": "NitlovePOS (NitlovePOS, nitlove)",
        "url": "threat-library-detail.html?data=nitlovepos"
    },
    {
        "text": "nmap (nmap)",
        "url": "threat-library-detail.html?data=nmap"
    },
    {
        "text": "Nokki (Nokki)",
        "url": "threat-library-detail.html?data=nokki"
    },
    {
        "text": "Non-sucking Service Manager (Non-sucking Service Manager, NSSM)",
        "url": "threat-library-detail.html?data=non-sucking_service_manager"
    },
    {
        "text": "NotPetya (NotPetya, EternalPetya, ExPetr, Pnyetya, Petna, Nyetya, NonPetya, nPetya, Petrwrap, Diskcoder.C, GoldenEye)",
        "url": "threat-library-detail.html?data=notpetya"
    },
    {
        "text": "NPS (NPS)",
        "url": "threat-library-detail.html?data=nps"
    },
    {
        "text": "NSIS (NSIS, Nullsoft Scriptable Install System)",
        "url": "threat-library-detail.html?data=nsis"
    },
    {
        "text": "NTDSDump (NTDSDump)",
        "url": "threat-library-detail.html?data=ntdsdump"
    },
    {
        "text": "NukeSped (NukeSped)",
        "url": "threat-library-detail.html?data=nukesped"
    },
    {
        "text": "ObfuBerry (ObfuBerry)",
        "url": "threat-library-detail.html?data=obfuberry"
    },
    {
        "text": "ObfuMerry (ObfuMerry)",
        "url": "threat-library-detail.html?data=obfumerry"
    },
    {
        "text": "ObliqueRAT (ObliqueRAT, Oblique RAT)",
        "url": "threat-library-detail.html?data=obliquerat"
    },
    {
        "text": "Oceansalt (Oceansalt)",
        "url": "threat-library-detail.html?data=oceansalt"
    },
    {
        "text": "Octopus (Octopus)",
        "url": "threat-library-detail.html?data=octopus"
    },
    {
        "text": "OddJob (OddJob)",
        "url": "threat-library-detail.html?data=oddjob"
    },
    {
        "text": "Odinaff (Odinaff)",
        "url": "threat-library-detail.html?data=odinaff"
    },
    {
        "text": "OilRig (OilRig)",
        "url": "threat-library-detail.html?data=oilrig"
    },
    {
        "text": "Okrum (Okrum)",
        "url": "threat-library-detail.html?data=okrum"
    },
    {
        "text": "OKSOLO (OKSOLO)",
        "url": "threat-library-detail.html?data=oksolo"
    },
    {
        "text": "Olympic Destroyer (Olympic Destroyer, SOURGRAPE)",
        "url": "threat-library-detail.html?data=olympic_destroyer"
    },
    {
        "text": "OnionDuke (OnionDuke)",
        "url": "threat-library-detail.html?data=onionduke"
    },
    {
        "text": "OopsIE (OopsIE)",
        "url": "threat-library-detail.html?data=oopsie"
    },
    {
        "text": "OpBlockBuster (OpBlockBuster)",
        "url": "threat-library-detail.html?data=opblockbuster"
    },
    {
        "text": "OpenDoc (OpenDoc)",
        "url": "threat-library-detail.html?data=opendoc"
    },
    {
        "text": "OPENSHACKLE (OPENSHACKLE)",
        "url": "threat-library-detail.html?data=openshackle"
    },
    {
        "text": "OperaPassView (OperaPassView)",
        "url": "threat-library-detail.html?data=operapassview"
    },
    {
        "text": "OpGhoul (OpGhoul)",
        "url": "threat-library-detail.html?data=opghoul"
    },
    {
        "text": "Orangeade (Orangeade)",
        "url": "threat-library-detail.html?data=orangeade"
    },
    {
        "text": "Orat (Orat)",
        "url": "threat-library-detail.html?data=orat"
    },
    {
        "text": "oRAT (oRAT)",
        "url": "threat-library-detail.html?data=orat"
    },
    {
        "text": "ORCSHRED (ORCSHRED)",
        "url": "threat-library-detail.html?data=orcshred"
    },
    {
        "text": "OS_Check_445 (OS_Check_445)",
        "url": "threat-library-detail.html?data=os_check_445"
    },
    {
        "text": "OSInfo (OSInfo)",
        "url": "threat-library-detail.html?data=osinfo"
    },
    {
        "text": "OutLoader (OutLoader)",
        "url": "threat-library-detail.html?data=outloader"
    },
    {
        "text": "Outlook Backdoor (Outlook Backdoor, FACADE)",
        "url": "threat-library-detail.html?data=outlook_backdoor"
    },
    {
        "text": "OutSteel (OutSteel)",
        "url": "threat-library-detail.html?data=outsteel"
    },
    {
        "text": "OwaAuth (OwaAuth, luckyowa)",
        "url": "threat-library-detail.html?data=owaauth"
    },
    {
        "text": "Owowa (Owowa)",
        "url": "threat-library-detail.html?data=owowa"
    },
    {
        "text": "OwlProxy (OwlProxy)",
        "url": "threat-library-detail.html?data=owlproxy"
    },
    {
        "text": "P0wnyshell (P0wnyshell)",
        "url": "threat-library-detail.html?data=p0wnyshell"
    },
    {
        "text": "P8RAT (P8RAT, GreetCake)",
        "url": "threat-library-detail.html?data=p8rat"
    },
    {
        "text": "PACMAN (PACMAN)",
        "url": "threat-library-detail.html?data=pacman"
    },
    {
        "text": "PAExec (PAExec)",
        "url": "threat-library-detail.html?data=paexec"
    },
    {
        "text": "Pagoda (Pagoda)",
        "url": "threat-library-detail.html?data=pagoda"
    },
    {
        "text": "Paladin RAT (Paladin RAT, Paladin)",
        "url": "threat-library-detail.html?data=paladin_rat"
    },
    {
        "text": "Pallas (Pallas)",
        "url": "threat-library-detail.html?data=pallas"
    },
    {
        "text": "Pandora (Pandora)",
        "url": "threat-library-detail.html?data=pandora"
    },
    {
        "text": "PapaCreep (PapaCreep)",
        "url": "threat-library-detail.html?data=papacreep"
    },
    {
        "text": "Paperbug (Paperbug)",
        "url": "threat-library-detail.html?data=paperbug"
    },
    {
        "text": "P.A.S. (P.A.S., PAS, Fobushell)",
        "url": "threat-library-detail.html?data=p.a.s."
    },
    {
        "text": "Pasam (Pasam)",
        "url": "threat-library-detail.html?data=pasam"
    },
    {
        "text": "PassKillDisk (PassKillDisk)",
        "url": "threat-library-detail.html?data=passkilldisk"
    },
    {
        "text": "Pass-The-Hash Toolkit (Pass-The-Hash Toolkit)",
        "url": "threat-library-detail.html?data=pass-the-hash_toolkit"
    },
    {
        "text": "PasswordFox (PasswordFox)",
        "url": "threat-library-detail.html?data=passwordfox"
    },
    {
        "text": "Patao (Patao)",
        "url": "threat-library-detail.html?data=patao"
    },
    {
        "text": "Pay2Key (Pay2Key, Cobalt)",
        "url": "threat-library-detail.html?data=pay2key"
    },
    {
        "text": "PayloadBIN (PayloadBIN)",
        "url": "threat-library-detail.html?data=payloadbin"
    },
    {
        "text": "pcaudit.bat (pcaudit.bat)",
        "url": "threat-library-detail.html?data=pcaudit.bat"
    },
    {
        "text": "PCClient (PCClient)",
        "url": "threat-library-detail.html?data=pcclient"
    },
    {
        "text": "PCHUNTER (PCHUNTER)",
        "url": "threat-library-detail.html?data=pchunter"
    },
    {
        "text": "PCShare (PCShare)",
        "url": "threat-library-detail.html?data=pcshare"
    },
    {
        "text": "PEBBLEDASH (PEBBLEDASH)",
        "url": "threat-library-detail.html?data=pebbledash"
    },
    {
        "text": "Pegasus (Pegasus, Q Suite, Chrysaor, JigglyPuff)",
        "url": "threat-library-detail.html?data=pegasus"
    },
    {
        "text": "Penquin Turla (Penquin Turla)",
        "url": "threat-library-detail.html?data=penquin_turla"
    },
    {
        "text": "Peppy RAT (Peppy RAT, Peppy Trojan)",
        "url": "threat-library-detail.html?data=peppy_rat"
    },
    {
        "text": "pgift (pgift, ReRol)",
        "url": "threat-library-detail.html?data=pgift"
    },
    {
        "text": "PhanDoor (PhanDoor)",
        "url": "threat-library-detail.html?data=phandoor"
    },
    {
        "text": "PhantomLance (PhantomLance, PWNDROID1, Android.Backdoor.736.origin)",
        "url": "threat-library-detail.html?data=phantomlance"
    },
    {
        "text": "Philadelphia (Philadelphia, Philadephia Ransom)",
        "url": "threat-library-detail.html?data=philadelphia"
    },
    {
        "text": "Phishery (Phishery, Trojan.Phisherly)",
        "url": "threat-library-detail.html?data=phishery"
    },
    {
        "text": "Phoenix (Phoenix, Phoenix Locker)",
        "url": "threat-library-detail.html?data=phoenix"
    },
    {
        "text": "PhonyC2 (PhonyC2)",
        "url": "threat-library-detail.html?data=phonyc2"
    },
    {
        "text": "PHOREAL (PHOREAL, Rizzo)",
        "url": "threat-library-detail.html?data=phoreal"
    },
    {
        "text": "PHPMailer (PHPMailer)",
        "url": "threat-library-detail.html?data=phpmailer"
    },
    {
        "text": "PhpSpy (PhpSpy)",
        "url": "threat-library-detail.html?data=phpspy"
    },
    {
        "text": "PICKPOCKET (PICKPOCKET)",
        "url": "threat-library-detail.html?data=pickpocket"
    },
    {
        "text": "Pierogi (Pierogi)",
        "url": "threat-library-detail.html?data=pierogi"
    },
    {
        "text": "PiggyBack (PiggyBack)",
        "url": "threat-library-detail.html?data=piggyback"
    },
    {
        "text": "PinchDuke (PinchDuke)",
        "url": "threat-library-detail.html?data=pinchduke"
    },
    {
        "text": "PINEFLOWER (PINEFLOWER, CORRUPT KITTEN)",
        "url": "threat-library-detail.html?data=pineflower"
    },
    {
        "text": "PingPull (PingPull)",
        "url": "threat-library-detail.html?data=pingpull"
    },
    {
        "text": "PinkKite (PinkKite)",
        "url": "threat-library-detail.html?data=pinkkite"
    },
    {
        "text": "Pink Lambert (Pink Lambert)",
        "url": "threat-library-detail.html?data=pink_lambert"
    },
    {
        "text": "Pioneer (Pioneer, Virus.Win32.Pioneer.dx, igfxext.exe)",
        "url": "threat-library-detail.html?data=pioneer"
    },
    {
        "text": "PipeMon (PipeMon)",
        "url": "threat-library-detail.html?data=pipemon"
    },
    {
        "text": "Pirpi (Pirpi, SHOTPUT, Badey, EXL, CookieCutter, Backdoor.APT.CookieCutter)",
        "url": "threat-library-detail.html?data=pirpi"
    },
    {
        "text": "Pisloader (Pisloader, Roseam)",
        "url": "threat-library-detail.html?data=pisloader"
    },
    {
        "text": "Pitty (Pitty, PittyTiger RAT)",
        "url": "threat-library-detail.html?data=pitty"
    },
    {
        "text": "PixPirate (PixPirate)",
        "url": "threat-library-detail.html?data=pixpirate"
    },
    {
        "text": "PixStealer (PixStealer, BrazKing)",
        "url": "threat-library-detail.html?data=pixstealer"
    },
    {
        "text": "PLAINTEE (PLAINTEE)",
        "url": "threat-library-detail.html?data=plaintee"
    },
    {
        "text": "PLANKWALK (PLANKWALK)",
        "url": "threat-library-detail.html?data=plankwalk"
    },
    {
        "text": "Plink (Plink, PuTTY Link)",
        "url": "threat-library-detail.html?data=plink"
    },
    {
        "text": "Ploutus (Ploutus, Ploutus ATM, Plotus)",
        "url": "threat-library-detail.html?data=ploutus"
    },
    {
        "text": "PluginPhantom (PluginPhantom)",
        "url": "threat-library-detail.html?data=pluginphantom"
    },
    {
        "text": "pngdowner (pngdowner)",
        "url": "threat-library-detail.html?data=pngdowner"
    },
    {
        "text": "PNGLoad (PNGLoad)",
        "url": "threat-library-detail.html?data=pngload"
    },
    {
        "text": "PocoDown (PocoDown, Blitz, PocoDownloader)",
        "url": "threat-library-detail.html?data=pocodown"
    },
    {
        "text": "PoisonCarp (PoisonCarp, INSOMNIA)",
        "url": "threat-library-detail.html?data=poisoncarp"
    },
    {
        "text": "Poldat (Poldat, Zlib, KABOB)",
        "url": "threat-library-detail.html?data=poldat"
    },
    {
        "text": "PolyglotDuke (PolyglotDuke)",
        "url": "threat-library-detail.html?data=polyglotduke"
    },
    {
        "text": "PoohMilk Loader (PoohMilk Loader, PoohMilk)",
        "url": "threat-library-detail.html?data=poohmilk_loader"
    },
    {
        "text": "POOLRAT (POOLRAT)",
        "url": "threat-library-detail.html?data=poolrat"
    },
    {
        "text": "POORAIM (POORAIM, Backdoor.APT.POORAIM)",
        "url": "threat-library-detail.html?data=pooraim"
    },
    {
        "text": "POPFLASH (POPFLASH)",
        "url": "threat-library-detail.html?data=popflash"
    },
    {
        "text": "Port.exe (Port.exe)",
        "url": "threat-library-detail.html?data=port.exe"
    },
    {
        "text": "PORTHOLE (PORTHOLE)",
        "url": "threat-library-detail.html?data=porthole"
    },
    {
        "text": "PortQry (PortQry)",
        "url": "threat-library-detail.html?data=portqry"
    },
    {
        "text": "PortScan (PortScan)",
        "url": "threat-library-detail.html?data=portscan"
    },
    {
        "text": "PosCardStealer (PosCardStealer)",
        "url": "threat-library-detail.html?data=poscardstealer"
    },
    {
        "text": "PoshAdvisor (PoshAdvisor)",
        "url": "threat-library-detail.html?data=poshadvisor"
    },
    {
        "text": "POSHSPY (POSHSPY)",
        "url": "threat-library-detail.html?data=poshspy"
    },
    {
        "text": "PoSlurp (PoSlurp, PUNCHTRACK, PSVC)",
        "url": "threat-library-detail.html?data=poslurp"
    },
    {
        "text": "POTROAST (POTROAST)",
        "url": "threat-library-detail.html?data=potroast"
    },
    {
        "text": "POWBAT (POWBAT)",
        "url": "threat-library-detail.html?data=powbat"
    },
    {
        "text": "PowerBand (PowerBand)",
        "url": "threat-library-detail.html?data=powerband"
    },
    {
        "text": "PowerBrace (PowerBrace)",
        "url": "threat-library-detail.html?data=powerbrace"
    },
    {
        "text": "PowerDuke (PowerDuke)",
        "url": "threat-library-detail.html?data=powerduke"
    },
    {
        "text": "PowerDump (PowerDump)",
        "url": "threat-library-detail.html?data=powerdump"
    },
    {
        "text": "Powerkatz (Powerkatz)",
        "url": "threat-library-detail.html?data=powerkatz"
    },
    {
        "text": "PowerLess Backdoor (PowerLess Backdoor)",
        "url": "threat-library-detail.html?data=powerless_backdoor"
    },
    {
        "text": "PowerMagic (PowerMagic)",
        "url": "threat-library-detail.html?data=powermagic"
    },
    {
        "text": "Powermud (Powermud)",
        "url": "threat-library-detail.html?data=powermud"
    },
    {
        "text": "PowerPepper (PowerPepper)",
        "url": "threat-library-detail.html?data=powerpepper"
    },
    {
        "text": "POWERPIPE (POWERPIPE)",
        "url": "threat-library-detail.html?data=powerpipe"
    },
    {
        "text": "POWERPLANT (POWERPLANT, KillACK)",
        "url": "threat-library-detail.html?data=powerplant"
    },
    {
        "text": "POWERPOST (POWERPOST)",
        "url": "threat-library-detail.html?data=powerpost"
    },
    {
        "text": "PowerPunch (PowerPunch)",
        "url": "threat-library-detail.html?data=powerpunch"
    },
    {
        "text": "PowerRatankba (PowerRatankba, QUICKRIDE.POWER)",
        "url": "threat-library-detail.html?data=powerratankba"
    },
    {
        "text": "PowerShell RAT (PowerShell RAT)",
        "url": "threat-library-detail.html?data=powershell_rat"
    },
    {
        "text": "PowerShellRunner-based RPC backdoor (PowerShellRunner-based RPC backdoor, PowerShellRunner)",
        "url": "threat-library-detail.html?data=powershellrunner-based_rpc_backdoor"
    },
    {
        "text": "PowerShower (PowerShower)",
        "url": "threat-library-detail.html?data=powershower"
    },
    {
        "text": "Powersing (Powersing)",
        "url": "threat-library-detail.html?data=powersing"
    },
    {
        "text": "POWERSOURCE (POWERSOURCE)",
        "url": "threat-library-detail.html?data=powersource"
    },
    {
        "text": "PowerSploit (PowerSploit)",
        "url": "threat-library-detail.html?data=powersploit"
    },
    {
        "text": "PowerSpritz (PowerSpritz)",
        "url": "threat-library-detail.html?data=powerspritz"
    },
    {
        "text": "PowerStallion (PowerStallion)",
        "url": "threat-library-detail.html?data=powerstallion"
    },
    {
        "text": "POWERSTAR (POWERSTAR, CharmPower)",
        "url": "threat-library-detail.html?data=powerstar"
    },
    {
        "text": "POWERSTATS (POWERSTATS, Valyria)",
        "url": "threat-library-detail.html?data=powerstats"
    },
    {
        "text": "PowerTask (PowerTask)",
        "url": "threat-library-detail.html?data=powertask"
    },
    {
        "text": "POWERTON (POWERTON)",
        "url": "threat-library-detail.html?data=powerton"
    },
    {
        "text": "PowerTrick (PowerTrick)",
        "url": "threat-library-detail.html?data=powertrick"
    },
    {
        "text": "PowerView (PowerView)",
        "url": "threat-library-detail.html?data=powerview"
    },
    {
        "text": "PowGoop (PowGoop)",
        "url": "threat-library-detail.html?data=powgoop"
    },
    {
        "text": "PowHeartBeat (PowHeartBeat)",
        "url": "threat-library-detail.html?data=powheartbeat"
    },
    {
        "text": "POWRUNER (POWRUNER)",
        "url": "threat-library-detail.html?data=powruner"
    },
    {
        "text": "POWSSHNET (POWSSHNET)",
        "url": "threat-library-detail.html?data=powsshnet"
    },
    {
        "text": "PRB-Backdoor (PRB-Backdoor, prb_backdoor)",
        "url": "threat-library-detail.html?data=prb-backdoor"
    },
    {
        "text": "Prikormka (Prikormka)",
        "url": "threat-library-detail.html?data=prikormka"
    },
    {
        "text": "Prilex (Prilex)",
        "url": "threat-library-detail.html?data=prilex"
    },
    {
        "text": "PRIVATELOG (PRIVATELOG)",
        "url": "threat-library-detail.html?data=privatelog"
    },
    {
        "text": "ProcDump (ProcDump)",
        "url": "threat-library-detail.html?data=procdump"
    },
    {
        "text": "ProduKey (ProduKey)",
        "url": "threat-library-detail.html?data=produkey"
    },
    {
        "text": "ProLock (ProLock, PwndLocker)",
        "url": "threat-library-detail.html?data=prolock"
    },
    {
        "text": "Pro-Ocean (Pro-Ocean)",
        "url": "threat-library-detail.html?data=pro-ocean"
    },
    {
        "text": "Pro POS (Pro POS)",
        "url": "threat-library-detail.html?data=pro_pos"
    },
    {
        "text": "Protected Storage PassView (Protected Storage PassView)",
        "url": "threat-library-detail.html?data=protected_storage_passview"
    },
    {
        "text": "Protux (Protux)",
        "url": "threat-library-detail.html?data=protux"
    },
    {
        "text": "ProxyBot (ProxyBot)",
        "url": "threat-library-detail.html?data=proxybot"
    },
    {
        "text": "ProxyChains (ProxyChains)",
        "url": "threat-library-detail.html?data=proxychains"
    },
    {
        "text": "Proxysvc (Proxysvc)",
        "url": "threat-library-detail.html?data=proxysvc"
    },
    {
        "text": "ProxyT (ProxyT)",
        "url": "threat-library-detail.html?data=proxyt"
    },
    {
        "text": "PseudoManuscrypt (PseudoManuscrypt)",
        "url": "threat-library-detail.html?data=pseudomanuscrypt"
    },
    {
        "text": "PsExec (PsExec)",
        "url": "threat-library-detail.html?data=psexec"
    },
    {
        "text": "psinstrc.ps1 (psinstrc.ps1)",
        "url": "threat-library-detail.html?data=psinstrc.ps1"
    },
    {
        "text": "PsiXBot (PsiXBot, PsiX)",
        "url": "threat-library-detail.html?data=psixbot"
    },
    {
        "text": "PsList (PsList)",
        "url": "threat-library-detail.html?data=pslist"
    },
    {
        "text": "PSLogger (PSLogger, ECCENTRICBANDWAGON)",
        "url": "threat-library-detail.html?data=pslogger"
    },
    {
        "text": "Psylo (Psylo)",
        "url": "threat-library-detail.html?data=psylo"
    },
    {
        "text": "Pteranodon (Pteranodon, Pterodo)",
        "url": "threat-library-detail.html?data=pteranodon"
    },
    {
        "text": "PubFantacy (PubFantacy)",
        "url": "threat-library-detail.html?data=pubfantacy"
    },
    {
        "text": "PUBLOAD (PUBLOAD)",
        "url": "threat-library-detail.html?data=pubload"
    },
    {
        "text": "PunchBuggy (PunchBuggy, ShellTea, Powersniff)",
        "url": "threat-library-detail.html?data=punchbuggy"
    },
    {
        "text": "Punkey (Punkey, PunkeyPOS, Punkey POS, pospunk)",
        "url": "threat-library-detail.html?data=punkey"
    },
    {
        "text": "PuppetLoader (PuppetLoader)",
        "url": "threat-library-detail.html?data=puppetloader"
    },
    {
        "text": "PupyRAT (PupyRAT, Pupy, pupy)",
        "url": "threat-library-detail.html?data=pupyrat"
    },
    {
        "text": "Purple Lambert (Purple Lambert)",
        "url": "threat-library-detail.html?data=purple_lambert"
    },
    {
        "text": "PuTTY (PuTTY)",
        "url": "threat-library-detail.html?data=putty"
    },
    {
        "text": "PVE Find AD Users (PVE Find AD Users)",
        "url": "threat-library-detail.html?data=pve_find_ad_users"
    },
    {
        "text": "PVZ-In (PVZ-In)",
        "url": "threat-library-detail.html?data=pvz-in"
    },
    {
        "text": "PVZ-Out (PVZ-Out, PvzOut)",
        "url": "threat-library-detail.html?data=pvz-out"
    },
    {
        "text": "pwdump (pwdump)",
        "url": "threat-library-detail.html?data=pwdump"
    },
    {
        "text": "PwnPOS (PwnPOS)",
        "url": "threat-library-detail.html?data=pwnpos"
    },
    {
        "text": "Pyark (Pyark)",
        "url": "threat-library-detail.html?data=pyark"
    },
    {
        "text": "PyDCrypt (PyDCrypt)",
        "url": "threat-library-detail.html?data=pydcrypt"
    },
    {
        "text": "PyFlash (PyFlash)",
        "url": "threat-library-detail.html?data=pyflash"
    },
    {
        "text": "Pylot (Pylot, Travle)",
        "url": "threat-library-detail.html?data=pylot"
    },
    {
        "text": "PyMICROPSIA (PyMICROPSIA)",
        "url": "threat-library-detail.html?data=pymicropsia"
    },
    {
        "text": "PythocyDbg (PythocyDbg)",
        "url": "threat-library-detail.html?data=pythocydbg"
    },
    {
        "text": "PyVil RAT (PyVil RAT, PyVil)",
        "url": "threat-library-detail.html?data=pyvil_rat"
    },
    {
        "text": "PyXie (PyXie, PyXie RAT)",
        "url": "threat-library-detail.html?data=pyxie"
    },
    {
        "text": "QCRat (QCRat)",
        "url": "threat-library-detail.html?data=qcrat"
    },
    {
        "text": "QUADAGENT (QUADAGENT)",
        "url": "threat-library-detail.html?data=quadagent"
    },
    {
        "text": "Quant Loader (Quant Loader, QuantLoader)",
        "url": "threat-library-detail.html?data=quant_loader"
    },
    {
        "text": "QuarkBandit (QuarkBandit)",
        "url": "threat-library-detail.html?data=quarkbandit"
    },
    {
        "text": "Quarks PwDump (Quarks PwDump)",
        "url": "threat-library-detail.html?data=quarks_pwdump"
    },
    {
        "text": "QuasarRAT (QuasarRAT, Quasar RAT, CinaRAT, Yggdrasil)",
        "url": "threat-library-detail.html?data=quasarrat"
    },
    {
        "text": "QueenOfClubs (QueenOfClubs, SlothfulMedia)",
        "url": "threat-library-detail.html?data=queenofclubs"
    },
    {
        "text": "QueenOfHearts (QueenOfHearts)",
        "url": "threat-library-detail.html?data=queenofhearts"
    },
    {
        "text": "Quickcafe (Quickcafe)",
        "url": "threat-library-detail.html?data=quickcafe"
    },
    {
        "text": "QUIETEXIT (QUIETEXIT)",
        "url": "threat-library-detail.html?data=quietexit"
    },
    {
        "text": "QuietSieve (QuietSieve)",
        "url": "threat-library-detail.html?data=quietsieve"
    },
    {
        "text": "QuiteRAT (QuiteRAT)",
        "url": "threat-library-detail.html?data=quiterat"
    },
    {
        "text": "RADIOSTAR (RADIOSTAR)",
        "url": "threat-library-detail.html?data=radiostar"
    },
    {
        "text": "Ragnatela (Ragnatela, Ragnatela RAT)",
        "url": "threat-library-detail.html?data=ragnatela"
    },
    {
        "text": "RaidBase (RaidBase)",
        "url": "threat-library-detail.html?data=raidbase"
    },
    {
        "text": "RAINDROP (RAINDROP)",
        "url": "threat-library-detail.html?data=raindrop"
    },
    {
        "text": "Rambo (Rambo, brebsd)",
        "url": "threat-library-detail.html?data=rambo"
    },
    {
        "text": "Ramsay (Ramsay)",
        "url": "threat-library-detail.html?data=ramsay"
    },
    {
        "text": "Rana (Rana)",
        "url": "threat-library-detail.html?data=rana"
    },
    {
        "text": "Ranbyus (Ranbyus)",
        "url": "threat-library-detail.html?data=ranbyus"
    },
    {
        "text": "RansomBoggs (RansomBoggs)",
        "url": "threat-library-detail.html?data=ransomboggs"
    },
    {
        "text": "RapidStealer (RapidStealer)",
        "url": "threat-library-detail.html?data=rapidstealer"
    },
    {
        "text": "rarstar (rarstar)",
        "url": "threat-library-detail.html?data=rarstar"
    },
    {
        "text": "RARSTONE (RARSTONE)",
        "url": "threat-library-detail.html?data=rarstone"
    },
    {
        "text": "Ratankba (Ratankba, Ratabanka, QUICKRIDE)",
        "url": "threat-library-detail.html?data=ratankba"
    },
    {
        "text": "RatankbaPOS (RatankbaPOS, RatabankaPOS)",
        "url": "threat-library-detail.html?data=ratankbapos"
    },
    {
        "text": "RATel (RATel)",
        "url": "threat-library-detail.html?data=ratel"
    },
    {
        "text": "RatSnif (RatSnif)",
        "url": "threat-library-detail.html?data=ratsnif"
    },
    {
        "text": "RawDisk (RawDisk)",
        "url": "threat-library-detail.html?data=rawdisk"
    },
    {
        "text": "RawPOS (RawPOS, FIENDCRY, DUEBREW, DRIFTWOOD)",
        "url": "threat-library-detail.html?data=rawpos"
    },
    {
        "text": "RCLONE (RCLONE, Rclone)",
        "url": "threat-library-detail.html?data=rclone"
    },
    {
        "text": "RCSession (RCSession)",
        "url": "threat-library-detail.html?data=rcsession"
    },
    {
        "text": "RCS Galileo (RCS Galileo)",
        "url": "threat-library-detail.html?data=rcs_galileo"
    },
    {
        "text": "RC SHELL (RC SHELL)",
        "url": "threat-library-detail.html?data=rc_shell"
    },
    {
        "text": "Rdasrv (Rdasrv)",
        "url": "threat-library-detail.html?data=rdasrv"
    },
    {
        "text": "RDFSNIFFER (RDFSNIFFER)",
        "url": "threat-library-detail.html?data=rdfsniffer"
    },
    {
        "text": "RDP (RDP, Remote Desktop Protocol)",
        "url": "threat-library-detail.html?data=rdp"
    },
    {
        "text": "RDPWrap (RDPWrap)",
        "url": "threat-library-detail.html?data=rdpwrap"
    },
    {
        "text": "Recon (Recon)",
        "url": "threat-library-detail.html?data=recon"
    },
    {
        "text": "ReconModule (ReconModule)",
        "url": "threat-library-detail.html?data=reconmodule"
    },
    {
        "text": "ReconShark (ReconShark)",
        "url": "threat-library-detail.html?data=reconshark"
    },
    {
        "text": "Red Alert (Red Alert, Red Alert 2.0)",
        "url": "threat-library-detail.html?data=red_alert"
    },
    {
        "text": "RedAlpha (RedAlpha)",
        "url": "threat-library-detail.html?data=redalpha"
    },
    {
        "text": "RedCore (RedCore)",
        "url": "threat-library-detail.html?data=redcore"
    },
    {
        "text": "RedPepper (RedPepper, Adupib)",
        "url": "threat-library-detail.html?data=redpepper"
    },
    {
        "text": "RedSalt (RedSalt, Dipsind)",
        "url": "threat-library-detail.html?data=redsalt"
    },
    {
        "text": "RedShawl (RedShawl)",
        "url": "threat-library-detail.html?data=redshawl"
    },
    {
        "text": "ReflectiveGnome (ReflectiveGnome)",
        "url": "threat-library-detail.html?data=reflectivegnome"
    },
    {
        "text": "RegDuke (RegDuke)",
        "url": "threat-library-detail.html?data=regduke"
    },
    {
        "text": "reGeorg (reGeorg)",
        "url": "threat-library-detail.html?data=regeorg"
    },
    {
        "text": "Regin (Regin, Prax, WarriorPride)",
        "url": "threat-library-detail.html?data=regin"
    },
    {
        "text": "Remcom (Remcom, RemoteCommandExecution)",
        "url": "threat-library-detail.html?data=remcom"
    },
    {
        "text": "RemcosRAT (RemcosRAT, Remcos, Remvio, Socmer)",
        "url": "threat-library-detail.html?data=remcosrat"
    },
    {
        "text": "Remexi (Remexi, CACHEMONEY)",
        "url": "threat-library-detail.html?data=remexi"
    },
    {
        "text": "remote-access-c3 (remote-access-c3)",
        "url": "threat-library-detail.html?data=remote-access-c3"
    },
    {
        "text": "RemoteCMD (RemoteCMD)",
        "url": "threat-library-detail.html?data=remotecmd"
    },
    {
        "text": "Remote CMD/PowerShell terminal (Remote CMD/PowerShell terminal)",
        "url": "threat-library-detail.html?data=remote_cmdpowershell_terminal"
    },
    {
        "text": "Remote Control System (Remote Control System, RCS, Crisis)",
        "url": "threat-library-detail.html?data=remote_control_system"
    },
    {
        "text": "Remote Desktop PassView (Remote Desktop PassView)",
        "url": "threat-library-detail.html?data=remote_desktop_passview"
    },
    {
        "text": "Remsec (Remsec, Backdoor.Remsec, ProjectSauron)",
        "url": "threat-library-detail.html?data=remsec"
    },
    {
        "text": "RemShell (RemShell)",
        "url": "threat-library-detail.html?data=remshell"
    },
    {
        "text": "RemShell Downloader (RemShell Downloader)",
        "url": "threat-library-detail.html?data=remshell_downloader"
    },
    {
        "text": "Remy (Remy, Remy RAT, WINDSHIELD)",
        "url": "threat-library-detail.html?data=remy"
    },
    {
        "text": "Resetter (Resetter)",
        "url": "threat-library-detail.html?data=resetter"
    },
    {
        "text": "Retefe (Android) (Retefe (Android))",
        "url": "threat-library-detail.html?data=retefe_(android)"
    },
    {
        "text": "Retro (Retro)",
        "url": "threat-library-detail.html?data=retro"
    },
    {
        "text": "Revealer Keylogger (Revealer Keylogger)",
        "url": "threat-library-detail.html?data=revealer_keylogger"
    },
    {
        "text": "RevengeRAT (RevengeRAT, Revenge RAT, Revenge, Revetrat)",
        "url": "threat-library-detail.html?data=revengerat"
    },
    {
        "text": "ReZer0 (ReZer0)",
        "url": "threat-library-detail.html?data=rezer0"
    },
    {
        "text": "RGDoor (RGDoor)",
        "url": "threat-library-detail.html?data=rgdoor"
    },
    {
        "text": "RICECURRY (RICECURRY, Exploit.APT.RICECURRY)",
        "url": "threat-library-detail.html?data=ricecurry"
    },
    {
        "text": "Rifdoor (Rifdoor)",
        "url": "threat-library-detail.html?data=rifdoor"
    },
    {
        "text": "Rikamanu (Rikamanu)",
        "url": "threat-library-detail.html?data=rikamanu"
    },
    {
        "text": "Rising Sun (Rising Sun)",
        "url": "threat-library-detail.html?data=rising_sun"
    },
    {
        "text": "RoboSki (RoboSki)",
        "url": "threat-library-detail.html?data=roboski"
    },
    {
        "text": "ROCK (ROCK, yellowalbatross)",
        "url": "threat-library-detail.html?data=rock"
    },
    {
        "text": "ROCKBOOT (ROCKBOOT)",
        "url": "threat-library-detail.html?data=rockboot"
    },
    {
        "text": "RocketMan (RocketMan)",
        "url": "threat-library-detail.html?data=rocketman"
    },
    {
        "text": "RockLoader (RockLoader)",
        "url": "threat-library-detail.html?data=rockloader"
    },
    {
        "text": "RogueRobin (RogueRobin, RogueRobinNET)",
        "url": "threat-library-detail.html?data=roguerobin"
    },
    {
        "text": "Roland (Roland, Roland RAT)",
        "url": "threat-library-detail.html?data=roland"
    },
    {
        "text": "Romeos (Romeos, RomeoCore, Romeo-CoreOne, R-C1)",
        "url": "threat-library-detail.html?data=romeos"
    },
    {
        "text": "RomeoAlfa (RomeoAlfa, AlphaNC)",
        "url": "threat-library-detail.html?data=romeoalfa"
    },
    {
        "text": "RomeoBravo (RomeoBravo, BravoNC)",
        "url": "threat-library-detail.html?data=romeobravo"
    },
    {
        "text": "RomeoCharlie (RomeoCharlie)",
        "url": "threat-library-detail.html?data=romeocharlie"
    },
    {
        "text": "RomeoDelta (RomeoDelta, DeltaNC)",
        "url": "threat-library-detail.html?data=romeodelta"
    },
    {
        "text": "RomeoEcho (RomeoEcho)",
        "url": "threat-library-detail.html?data=romeoecho"
    },
    {
        "text": "RomeoFoxtrot (RomeoFoxtrot)",
        "url": "threat-library-detail.html?data=romeofoxtrot"
    },
    {
        "text": "RomeoGolf (RomeoGolf)",
        "url": "threat-library-detail.html?data=romeogolf"
    },
    {
        "text": "RomeoHotel (RomeoHotel)",
        "url": "threat-library-detail.html?data=romeohotel"
    },
    {
        "text": "RomeoMike (RomeoMike)",
        "url": "threat-library-detail.html?data=romeomike"
    },
    {
        "text": "RomeoNovember (RomeoNovember)",
        "url": "threat-library-detail.html?data=romeonovember"
    },
    {
        "text": "RomeoWhiskey (RomeoWhiskey, Winsec)",
        "url": "threat-library-detail.html?data=romeowhiskey"
    },
    {
        "text": "Rook (Rook)",
        "url": "threat-library-detail.html?data=rook"
    },
    {
        "text": "Roopy (Roopy)",
        "url": "threat-library-detail.html?data=roopy"
    },
    {
        "text": "RottenPotato (RottenPotato)",
        "url": "threat-library-detail.html?data=rottenpotato"
    },
    {
        "text": "ROUTERSCAN (ROUTERSCAN)",
        "url": "threat-library-detail.html?data=routerscan"
    },
    {
        "text": "RoyalCli (RoyalCli)",
        "url": "threat-library-detail.html?data=royalcli"
    },
    {
        "text": "RoyalDNS (RoyalDNS, Royal DNS)",
        "url": "threat-library-detail.html?data=royaldns"
    },
    {
        "text": "RTM (RTM, RTM Banker, Redaman)",
        "url": "threat-library-detail.html?data=rtm"
    },
    {
        "text": "RtPOS (RtPOS)",
        "url": "threat-library-detail.html?data=rtpos"
    },
    {
        "text": "Rubeus (Rubeus)",
        "url": "threat-library-detail.html?data=rubeus"
    },
    {
        "text": "RUHAPPY (RUHAPPY)",
        "url": "threat-library-detail.html?data=ruhappy"
    },
    {
        "text": "Ruler (Ruler)",
        "url": "threat-library-detail.html?data=ruler"
    },
    {
        "text": "RunningRAT (RunningRAT, Running RAT, running_rat)",
        "url": "threat-library-detail.html?data=runningrat"
    },
    {
        "text": "RURansom (RURansom)",
        "url": "threat-library-detail.html?data=ruransom"
    },
    {
        "text": "RustBucket (RustBucket)",
        "url": "threat-library-detail.html?data=rustbucket"
    },
    {
        "text": "S3BROWSER (S3BROWSER)",
        "url": "threat-library-detail.html?data=s3browser"
    },
    {
        "text": "Safe (Safe)",
        "url": "threat-library-detail.html?data=safe"
    },
    {
        "text": "SafetyKatz (SafetyKatz)",
        "url": "threat-library-detail.html?data=safetykatz"
    },
    {
        "text": "SAGEHIRE (SAGEHIRE)",
        "url": "threat-library-detail.html?data=sagehire"
    },
    {
        "text": "Sagerunex (Sagerunex)",
        "url": "threat-library-detail.html?data=sagerunex"
    },
    {
        "text": "SaintBot (SaintBot, Saint Bot)",
        "url": "threat-library-detail.html?data=saintbot"
    },
    {
        "text": "Saitama (Saitama, Saitama Backdoor)",
        "url": "threat-library-detail.html?data=saitama"
    },
    {
        "text": "Sakabota (Sakabota)",
        "url": "threat-library-detail.html?data=sakabota"
    },
    {
        "text": "Sakula RAT (Sakula RAT, Sakula, Sakurel, VIPER)",
        "url": "threat-library-detail.html?data=sakula_rat"
    },
    {
        "text": "Salgorea (Salgorea, BadCake)",
        "url": "threat-library-detail.html?data=salgorea"
    },
    {
        "text": "SALTLICK (SALTLICK)",
        "url": "threat-library-detail.html?data=saltlick"
    },
    {
        "text": "SamSam (SamSam, Samas)",
        "url": "threat-library-detail.html?data=samsam"
    },
    {
        "text": "Samurai (Samurai)",
        "url": "threat-library-detail.html?data=samurai"
    },
    {
        "text": "Sandboxie (Sandboxie)",
        "url": "threat-library-detail.html?data=sandboxie"
    },
    {
        "text": "SandroRAT (SandroRAT)",
        "url": "threat-library-detail.html?data=sandrorat"
    },
    {
        "text": "Sardonic (Sardonic)",
        "url": "threat-library-detail.html?data=sardonic"
    },
    {
        "text": "Satellite Turla (Satellite Turla)",
        "url": "threat-library-detail.html?data=satellite_turla"
    },
    {
        "text": "scanbox (scanbox)",
        "url": "threat-library-detail.html?data=scanbox"
    },
    {
        "text": "ScanPOS (ScanPOS)",
        "url": "threat-library-detail.html?data=scanpos"
    },
    {
        "text": "ScarCruft (ScarCruft, StarCruft)",
        "url": "threat-library-detail.html?data=scarcruft"
    },
    {
        "text": "Scieron (Scieron)",
        "url": "threat-library-detail.html?data=scieron"
    },
    {
        "text": "Scotch (Scotch)",
        "url": "threat-library-detail.html?data=scotch"
    },
    {
        "text": "Scote (Scote)",
        "url": "threat-library-detail.html?data=scote"
    },
    {
        "text": "SCRAPMINT (SCRAPMINT)",
        "url": "threat-library-detail.html?data=scrapmint"
    },
    {
        "text": "ScreenCap (ScreenCap)",
        "url": "threat-library-detail.html?data=screencap"
    },
    {
        "text": "Screenshotter (Screenshotter)",
        "url": "threat-library-detail.html?data=screenshotter"
    },
    {
        "text": "sctrls (sctrls)",
        "url": "threat-library-detail.html?data=sctrls"
    },
    {
        "text": "SDBbot (SDBbot)",
        "url": "threat-library-detail.html?data=sdbbot"
    },
    {
        "text": "SDelete (SDelete)",
        "url": "threat-library-detail.html?data=sdelete"
    },
    {
        "text": "SeaDuke (SeaDuke, SeaDaddy, SeaDesk, SeaDask)",
        "url": "threat-library-detail.html?data=seaduke"
    },
    {
        "text": "Seasalt (Seasalt)",
        "url": "threat-library-detail.html?data=seasalt"
    },
    {
        "text": "SEAWEED (SEAWEED)",
        "url": "threat-library-detail.html?data=seaweed"
    },
    {
        "text": "SecHack (SecHack)",
        "url": "threat-library-detail.html?data=sechack"
    },
    {
        "text": "SecreetsDump (SecreetsDump)",
        "url": "threat-library-detail.html?data=secreetsdump"
    },
    {
        "text": "Secure FTP Client (Secure FTP Client)",
        "url": "threat-library-detail.html?data=secure_ftp_client"
    },
    {
        "text": "Secure Socket Funneling (Secure Socket Funneling, SSF)",
        "url": "threat-library-detail.html?data=secure_socket_funneling"
    },
    {
        "text": "Sedkit (Sedkit)",
        "url": "threat-library-detail.html?data=sedkit"
    },
    {
        "text": "Sedreco (Sedreco, AZZY, EVILTOSS, ADVSTORESHELL, NETUI)",
        "url": "threat-library-detail.html?data=sedreco"
    },
    {
        "text": "Separ (Separ)",
        "url": "threat-library-detail.html?data=separ"
    },
    {
        "text": "Sepulcher (Sepulcher)",
        "url": "threat-library-detail.html?data=sepulcher"
    },
    {
        "text": "SerialVlogger (SerialVlogger)",
        "url": "threat-library-detail.html?data=serialvlogger"
    },
    {
        "text": "Serveo (Serveo)",
        "url": "threat-library-detail.html?data=serveo"
    },
    {
        "text": "SessionGopher (SessionGopher)",
        "url": "threat-library-detail.html?data=sessiongopher"
    },
    {
        "text": "ShadowHammer (ShadowHammer, DAYJOB)",
        "url": "threat-library-detail.html?data=shadowhammer"
    },
    {
        "text": "ShadowNet (ShadowNet)",
        "url": "threat-library-detail.html?data=shadownet"
    },
    {
        "text": "ShadowPad Winnti (ShadowPad Winnti, POISONPLUG.SHADOW, XShellGhost)",
        "url": "threat-library-detail.html?data=shadowpad_winnti"
    },
    {
        "text": "ShadyRAT (ShadyRAT)",
        "url": "threat-library-detail.html?data=shadyrat"
    },
    {
        "text": "SHAPESHIFT (SHAPESHIFT)",
        "url": "threat-library-detail.html?data=shapeshift"
    },
    {
        "text": "shareip (shareip, remotecmd)",
        "url": "threat-library-detail.html?data=shareip"
    },
    {
        "text": "Shark (Shark)",
        "url": "threat-library-detail.html?data=shark"
    },
    {
        "text": "SHARPEXT (SHARPEXT)",
        "url": "threat-library-detail.html?data=sharpext"
    },
    {
        "text": "SharpHound (SharpHound)",
        "url": "threat-library-detail.html?data=sharphound"
    },
    {
        "text": "SHARPKNOT (SHARPKNOT, Bitrep)",
        "url": "threat-library-detail.html?data=sharpknot"
    },
    {
        "text": "Sharp-SMBExec (Sharp-SMBExec)",
        "url": "threat-library-detail.html?data=sharp-smbexec"
    },
    {
        "text": "SharpSploit (SharpSploit)",
        "url": "threat-library-detail.html?data=sharpsploit"
    },
    {
        "text": "SharpStage (SharpStage)",
        "url": "threat-library-detail.html?data=sharpstage"
    },
    {
        "text": "SHARPSTATS (SHARPSTATS)",
        "url": "threat-library-detail.html?data=sharpstats"
    },
    {
        "text": "SharpToken (SharpToken)",
        "url": "threat-library-detail.html?data=sharptoken"
    },
    {
        "text": "SharpView (SharpView)",
        "url": "threat-library-detail.html?data=sharpview"
    },
    {
        "text": "SharPyShell (SharPyShell)",
        "url": "threat-library-detail.html?data=sharpyshell"
    },
    {
        "text": "SheepRAT (SheepRAT)",
        "url": "threat-library-detail.html?data=sheeprat"
    },
    {
        "text": "ShellClient (ShellClient)",
        "url": "threat-library-detail.html?data=shellclient"
    },
    {
        "text": "SHELLSWEEP (SHELLSWEEP)",
        "url": "threat-library-detail.html?data=shellsweep"
    },
    {
        "text": "Shifu (Shifu)",
        "url": "threat-library-detail.html?data=shifu"
    },
    {
        "text": "ShimRAT (ShimRAT, Shim RAT)",
        "url": "threat-library-detail.html?data=shimrat"
    },
    {
        "text": "Shipshape (Shipshape)",
        "url": "threat-library-detail.html?data=shipshape"
    },
    {
        "text": "Shootback (Shootback)",
        "url": "threat-library-detail.html?data=shootback"
    },
    {
        "text": "SHORTBENCH (SHORTBENCH)",
        "url": "threat-library-detail.html?data=shortbench"
    },
    {
        "text": "SHUTTERSPEED (SHUTTERSPEED)",
        "url": "threat-library-detail.html?data=shutterspeed"
    },
    {
        "text": "Shylock (Shylock, Caphaw)",
        "url": "threat-library-detail.html?data=shylock"
    },
    {
        "text": "Sibot (Sibot)",
        "url": "threat-library-detail.html?data=sibot"
    },
    {
        "text": "SIDESHOW (SIDESHOW)",
        "url": "threat-library-detail.html?data=sideshow"
    },
    {
        "text": "SideTwist (SideTwist)",
        "url": "threat-library-detail.html?data=sidetwist"
    },
    {
        "text": "SideWalk (SideWalk, ScrambleCross)",
        "url": "threat-library-detail.html?data=sidewalk"
    },
    {
        "text": "SierraAlfa (SierraAlfa)",
        "url": "threat-library-detail.html?data=sierraalfa"
    },
    {
        "text": "SierraCharlie (SierraCharlie)",
        "url": "threat-library-detail.html?data=sierracharlie"
    },
    {
        "text": "SIGFLIP (SIGFLIP)",
        "url": "threat-library-detail.html?data=sigflip"
    },
    {
        "text": "SIGTRANslator (SIGTRANslator)",
        "url": "threat-library-detail.html?data=sigtranslator"
    },
    {
        "text": "SilentCMD (SilentCMD)",
        "url": "threat-library-detail.html?data=silentcmd"
    },
    {
        "text": "Silent Night (Silent Night)",
        "url": "threat-library-detail.html?data=silent_night"
    },
    {
        "text": "SILENTUPLOADER (SILENTUPLOADER)",
        "url": "threat-library-detail.html?data=silentuploader"
    },
    {
        "text": "SilkBean (SilkBean)",
        "url": "threat-library-detail.html?data=silkbean"
    },
    {
        "text": "SilverHawk (SilverHawk)",
        "url": "threat-library-detail.html?data=silverhawk"
    },
    {
        "text": "Silver Lambert (Silver Lambert)",
        "url": "threat-library-detail.html?data=silver_lambert"
    },
    {
        "text": "Sima (Sima)",
        "url": "threat-library-detail.html?data=sima"
    },
    {
        "text": "SimplexTea (SimplexTea)",
        "url": "threat-library-detail.html?data=simplextea"
    },
    {
        "text": "Sinowal (Sinowal, Anserin, Mebroot, Quarian, Theola, Torpig)",
        "url": "threat-library-detail.html?data=sinowal"
    },
    {
        "text": "sip_telephone (sip_telephone)",
        "url": "threat-library-detail.html?data=sip_telephone"
    },
    {
        "text": "Sisfader (Sisfader, Sisfader RAT)",
        "url": "threat-library-detail.html?data=sisfader"
    },
    {
        "text": "Sisron (Sisron)",
        "url": "threat-library-detail.html?data=sisron"
    },
    {
        "text": "SIXPACK (SIXPACK)",
        "url": "threat-library-detail.html?data=sixpack"
    },
    {
        "text": "SkeletonKeyInjector (SkeletonKeyInjector)",
        "url": "threat-library-detail.html?data=skeletonkeyinjector"
    },
    {
        "text": "SkiBoot (SkiBoot)",
        "url": "threat-library-detail.html?data=skiboot"
    },
    {
        "text": "Skimer (Skimer)",
        "url": "threat-library-detail.html?data=skimer"
    },
    {
        "text": "SkinnyBoy (SkinnyBoy)",
        "url": "threat-library-detail.html?data=skinnyboy"
    },
    {
        "text": "Skip-2.0 (Skip-2.0)",
        "url": "threat-library-detail.html?data=skip-2.0"
    },
    {
        "text": "Skipper (Skipper, Kotel)",
        "url": "threat-library-detail.html?data=skipper"
    },
    {
        "text": "SLAPSTICK (SLAPSTICK)",
        "url": "threat-library-detail.html?data=slapstick"
    },
    {
        "text": "SLICKSHOES (SLICKSHOES)",
        "url": "threat-library-detail.html?data=slickshoes"
    },
    {
        "text": "Slingshot (Slingshot)",
        "url": "threat-library-detail.html?data=slingshot"
    },
    {
        "text": "SLOWDRIFT (SLOWDRIFT)",
        "url": "threat-library-detail.html?data=slowdrift"
    },
    {
        "text": "SLOWROLL (SLOWROLL)",
        "url": "threat-library-detail.html?data=slowroll"
    },
    {
        "text": "SLRat (SLRat)",
        "url": "threat-library-detail.html?data=slrat"
    },
    {
        "text": "SLUB (SLUB)",
        "url": "threat-library-detail.html?data=slub"
    },
    {
        "text": "SMBExec (SMBExec)",
        "url": "threat-library-detail.html?data=smbexec"
    },
    {
        "text": "Smbmap (Smbmap)",
        "url": "threat-library-detail.html?data=smbmap"
    },
    {
        "text": "smbscan (smbscan)",
        "url": "threat-library-detail.html?data=smbscan"
    },
    {
        "text": "smbtool (smbtool)",
        "url": "threat-library-detail.html?data=smbtool"
    },
    {
        "text": "SMBTouch (SMBTouch)",
        "url": "threat-library-detail.html?data=smbtouch"
    },
    {
        "text": "SMBTrap (SMBTrap)",
        "url": "threat-library-detail.html?data=smbtrap"
    },
    {
        "text": "Smoke Loader (Smoke Loader, SmokeLoader, Smoke, Dofoil, Sharik)",
        "url": "threat-library-detail.html?data=smoke_loader"
    },
    {
        "text": "Snatch (Snatch)",
        "url": "threat-library-detail.html?data=snatch"
    },
    {
        "text": "Sneepy (Sneepy, ByeByeShell)",
        "url": "threat-library-detail.html?data=sneepy"
    },
    {
        "text": "SniffPass (SniffPass)",
        "url": "threat-library-detail.html?data=sniffpass"
    },
    {
        "text": "SnifLite (SnifLite)",
        "url": "threat-library-detail.html?data=sniflite"
    },
    {
        "text": "SNUGRIDE (SNUGRIDE)",
        "url": "threat-library-detail.html?data=snugride"
    },
    {
        "text": "Snugy (Snugy)",
        "url": "threat-library-detail.html?data=snugy"
    },
    {
        "text": "SocksBot (SocksBot, BIRDDOG, Nadrac)",
        "url": "threat-library-detail.html?data=socksbot"
    },
    {
        "text": "SocGholish (SocGholish, FAKEUPDATES, FakeUpdate)",
        "url": "threat-library-detail.html?data=socgholish"
    },
    {
        "text": "SodaMaster (SodaMaster, DelfsCake, dfls, DARKTOWN, HEAVYPOT)",
        "url": "threat-library-detail.html?data=sodamaster"
    },
    {
        "text": "Sodinokibi (Sodinokibi, Sodin, REvil)",
        "url": "threat-library-detail.html?data=sodinokibi"
    },
    {
        "text": "SodomMain (SodomMain, SodomMain RAT)",
        "url": "threat-library-detail.html?data=sodommain"
    },
    {
        "text": "SodomNormal (SodomNormal)",
        "url": "threat-library-detail.html?data=sodomnormal"
    },
    {
        "text": "SoftEther VPN (SoftEther VPN)",
        "url": "threat-library-detail.html?data=softether_vpn"
    },
    {
        "text": "SoftPerfect Network Scanner (SoftPerfect Network Scanner)",
        "url": "threat-library-detail.html?data=softperfect_network_scanner"
    },
    {
        "text": "Sojax (Sojax)",
        "url": "threat-library-detail.html?data=sojax"
    },
    {
        "text": "SOLOSHRED (SOLOSHRED)",
        "url": "threat-library-detail.html?data=soloshred"
    },
    {
        "text": "SombRAT (SombRAT)",
        "url": "threat-library-detail.html?data=sombrat"
    },
    {
        "text": "SoreFang (SoreFang)",
        "url": "threat-library-detail.html?data=sorefang"
    },
    {
        "text": "Sorgu (Sorgu)",
        "url": "threat-library-detail.html?data=sorgu"
    },
    {
        "text": "Soraya (Soraya)",
        "url": "threat-library-detail.html?data=soraya"
    },
    {
        "text": "SOUNDBITE (SOUNDBITE, Denis)",
        "url": "threat-library-detail.html?data=soundbite"
    },
    {
        "text": "SOUNDWAVE (SOUNDWAVE)",
        "url": "threat-library-detail.html?data=soundwave"
    },
    {
        "text": "Spaceship (Spaceship)",
        "url": "threat-library-detail.html?data=spaceship"
    },
    {
        "text": "Spark (Spark)",
        "url": "threat-library-detail.html?data=spark"
    },
    {
        "text": "SPARKLOG (SPARKLOG)",
        "url": "threat-library-detail.html?data=sparklog"
    },
    {
        "text": "SparrowDoor (SparrowDoor, FamousSparrow)",
        "url": "threat-library-detail.html?data=sparrowdoor"
    },
    {
        "text": "Speculoos (Speculoos)",
        "url": "threat-library-detail.html?data=speculoos"
    },
    {
        "text": "Spedear (Spedear)",
        "url": "threat-library-detail.html?data=spedear"
    },
    {
        "text": "Spindest (Spindest, Backdoor.Apocalipto)",
        "url": "threat-library-detail.html?data=spindest"
    },
    {
        "text": "SPINOFF (SPINOFF)",
        "url": "threat-library-detail.html?data=spinoff"
    },
    {
        "text": "SPINNER (SPINNER)",
        "url": "threat-library-detail.html?data=spinner"
    },
    {
        "text": "SPOONBEARD (SPOONBEARD)",
        "url": "threat-library-detail.html?data=spoonbeard"
    },
    {
        "text": "spwebmember (spwebmember)",
        "url": "threat-library-detail.html?data=spwebmember"
    },
    {
        "text": "SpyEye (SpyEye)",
        "url": "threat-library-detail.html?data=spyeye"
    },
    {
        "text": "SpyNote RAT (SpyNote RAT, SpyNote)",
        "url": "threat-library-detail.html?data=spynote_rat"
    },
    {
        "text": "SpyWaller (SpyWaller)",
        "url": "threat-library-detail.html?data=spywaller"
    },
    {
        "text": "sqllauncher.dll (sqllauncher.dll)",
        "url": "threat-library-detail.html?data=sqllauncher.dll"
    },
    {
        "text": "sqlmap (sqlmap)",
        "url": "threat-library-detail.html?data=sqlmap"
    },
    {
        "text": "SQLRAT (SQLRAT)",
        "url": "threat-library-detail.html?data=sqlrat"
    },
    {
        "text": "SScan (SScan)",
        "url": "threat-library-detail.html?data=sscan"
    },
    {
        "text": "SSHMinion (SSHMinion)",
        "url": "threat-library-detail.html?data=sshminion"
    },
    {
        "text": "SslMM (SslMM)",
        "url": "threat-library-detail.html?data=sslmm"
    },
    {
        "text": "SSLove RAT (SSLove RAT)",
        "url": "threat-library-detail.html?data=sslove_rat"
    },
    {
        "text": "StarLoader (StarLoader)",
        "url": "threat-library-detail.html?data=starloader"
    },
    {
        "text": "StarsyPound (StarsyPound)",
        "url": "threat-library-detail.html?data=starsypound"
    },
    {
        "text": "STASHLOG (STASHLOG)",
        "url": "threat-library-detail.html?data=stashlog"
    },
    {
        "text": "Stealer (Stealer)",
        "url": "threat-library-detail.html?data=stealer"
    },
    {
        "text": "StealthFalcon (StealthFalcon)",
        "url": "threat-library-detail.html?data=stealthfalcon"
    },
    {
        "text": "Stealth Mango (Stealth Mango)",
        "url": "threat-library-detail.html?data=stealth_mango"
    },
    {
        "text": "STEELCORGI (STEELCORGI)",
        "url": "threat-library-detail.html?data=steelcorgi"
    },
    {
        "text": "STEELHOUND (STEELHOUND)",
        "url": "threat-library-detail.html?data=steelhound"
    },
    {
        "text": "StickyFingers (StickyFingers, QUICKBALL)",
        "url": "threat-library-detail.html?data=stickyfingers"
    },
    {
        "text": "Stink (Stink)",
        "url": "threat-library-detail.html?data=stink"
    },
    {
        "text": "StoneDrill (StoneDrill, DROPSHOT)",
        "url": "threat-library-detail.html?data=stonedrill"
    },
    {
        "text": "StreamEx (StreamEx)",
        "url": "threat-library-detail.html?data=streamex"
    },
    {
        "text": "StrifeWater (StrifeWater, StrifeWater RAT)",
        "url": "threat-library-detail.html?data=strifewater"
    },
    {
        "text": "StrongPity2 (StrongPity2)",
        "url": "threat-library-detail.html?data=strongpity2"
    },
    {
        "text": "StrongPity3 (StrongPity3)",
        "url": "threat-library-detail.html?data=strongpity3"
    },
    {
        "text": "STSRCheck (STSRCheck)",
        "url": "threat-library-detail.html?data=stsrcheck"
    },
    {
        "text": "Stunnel (Stunnel)",
        "url": "threat-library-detail.html?data=stunnel"
    },
    {
        "text": "Stuxnet (Stuxnet, W32.Stuxnet)",
        "url": "threat-library-detail.html?data=stuxnet"
    },
    {
        "text": "S-Type (S-Type)",
        "url": "threat-library-detail.html?data=s-type"
    },
    {
        "text": "Subbrute (Subbrute)",
        "url": "threat-library-detail.html?data=subbrute"
    },
    {
        "text": "Sublist3r (Sublist3r)",
        "url": "threat-library-detail.html?data=sublist3r"
    },
    {
        "text": "SubtractThis (SubtractThis)",
        "url": "threat-library-detail.html?data=subtractthis"
    },
    {
        "text": "SUCEFUL (SUCEFUL)",
        "url": "threat-library-detail.html?data=suceful"
    },
    {
        "text": "SUDDENICON (SUDDENICON)",
        "url": "threat-library-detail.html?data=suddenicon"
    },
    {
        "text": "SUN4ME (SUN4ME)",
        "url": "threat-library-detail.html?data=sun4me"
    },
    {
        "text": "SunBird (SunBird)",
        "url": "threat-library-detail.html?data=sunbird"
    },
    {
        "text": "SunCrypt (SunCrypt)",
        "url": "threat-library-detail.html?data=suncrypt"
    },
    {
        "text": "SUNSPOT (SUNSPOT)",
        "url": "threat-library-detail.html?data=sunspot"
    },
    {
        "text": "SUPERNOVA (SUPERNOVA)",
        "url": "threat-library-detail.html?data=supernova"
    },
    {
        "text": "SVCMONDR (SVCMONDR)",
        "url": "threat-library-detail.html?data=svcmondr"
    },
    {
        "text": "SWEARJAR (SWEARJAR)",
        "url": "threat-library-detail.html?data=swearjar"
    },
    {
        "text": "SWEETCANDLE (SWEETCANDLE)",
        "url": "threat-library-detail.html?data=sweetcandle"
    },
    {
        "text": "SWEETDROP (SWEETDROP)",
        "url": "threat-library-detail.html?data=sweetdrop"
    },
    {
        "text": "SweetPotato (SweetPotato)",
        "url": "threat-library-detail.html?data=sweetpotato"
    },
    {
        "text": "SwiftSlicer (SwiftSlicer, JaguarBlade)",
        "url": "threat-library-detail.html?data=swiftslicer"
    },
    {
        "text": "swissknife2 (swissknife2)",
        "url": "threat-library-detail.html?data=swissknife2"
    },
    {
        "text": "Sword (Sword)",
        "url": "threat-library-detail.html?data=sword"
    },
    {
        "text": "Sword2033 (Sword2033)",
        "url": "threat-library-detail.html?data=sword2033"
    },
    {
        "text": "Sykipot (Sykipot, Getkys, Wkysol)",
        "url": "threat-library-detail.html?data=sykipot"
    },
    {
        "text": "Symatic Loader (Symatic Loader)",
        "url": "threat-library-detail.html?data=symatic_loader"
    },
    {
        "text": "SymonLoader (SymonLoader)",
        "url": "threat-library-detail.html?data=symonloader"
    },
    {
        "text": "SynFlooder (SynFlooder)",
        "url": "threat-library-detail.html?data=synflooder"
    },
    {
        "text": "Sys10 (Sys10)",
        "url": "threat-library-detail.html?data=sys10"
    },
    {
        "text": "Syscon (Syscon, SYSCON, Sanny)",
        "url": "threat-library-detail.html?data=syscon"
    },
    {
        "text": "SysGet (SysGet, HelloBridge)",
        "url": "threat-library-detail.html?data=sysget"
    },
    {
        "text": "SysInternals (SysInternals)",
        "url": "threat-library-detail.html?data=sysinternals"
    },
    {
        "text": "SysKit (SysKit, IvizTech, MANGOPUNCH)",
        "url": "threat-library-detail.html?data=syskit"
    },
    {
        "text": "Sysmain (Sysmain)",
        "url": "threat-library-detail.html?data=sysmain"
    },
    {
        "text": "SysUpdate (SysUpdate, FOCUSFJORD, HyperSSL, Soldier)",
        "url": "threat-library-detail.html?data=sysupdate"
    },
    {
        "text": "TABBYCAT (TABBYCAT)",
        "url": "threat-library-detail.html?data=tabbycat"
    },
    {
        "text": "TabMsgSQL (TabMsgSQL, LETSGO)",
        "url": "threat-library-detail.html?data=tabmsgsql"
    },
    {
        "text": "Tafacalou (Tafacalou)",
        "url": "threat-library-detail.html?data=tafacalou"
    },
    {
        "text": "Taidoor (Taidoor, simbot)",
        "url": "threat-library-detail.html?data=taidoor"
    },
    {
        "text": "TAINTEDSCRIBE (TAINTEDSCRIBE)",
        "url": "threat-library-detail.html?data=taintedscribe"
    },
    {
        "text": "TAMECAT (TAMECAT)",
        "url": "threat-library-detail.html?data=tamecat"
    },
    {
        "text": "Tapaoux (Tapaoux)",
        "url": "threat-library-detail.html?data=tapaoux"
    },
    {
        "text": "Tarsip (Tarsip)",
        "url": "threat-library-detail.html?data=tarsip"
    },
    {
        "text": "Taurus Loader (Taurus Loader, Taurus Builder, Taurus Builder Kit)",
        "url": "threat-library-detail.html?data=taurus_loader"
    },
    {
        "text": "TAXHAUL (TAXHAUL)",
        "url": "threat-library-detail.html?data=taxhaul"
    },
    {
        "text": "TcpBridge (TcpBridge)",
        "url": "threat-library-detail.html?data=tcpbridge"
    },
    {
        "text": "TCP Port Scanner (TCP Port Scanner)",
        "url": "threat-library-detail.html?data=tcp_port_scanner"
    },
    {
        "text": "Tcp_transfer (Tcp_transfer)",
        "url": "threat-library-detail.html?data=tcp_transfer"
    },
    {
        "text": "Tdrop (Tdrop)",
        "url": "threat-library-detail.html?data=tdrop"
    },
    {
        "text": "Tdrop2 (Tdrop2)",
        "url": "threat-library-detail.html?data=tdrop2"
    },
    {
        "text": "TDTESS (TDTESS)",
        "url": "threat-library-detail.html?data=tdtess"
    },
    {
        "text": "TeaBot (TeaBot, Anatsa, Toddler, ReBot)",
        "url": "threat-library-detail.html?data=teabot"
    },
    {
        "text": "TeamViewer (TeamViewer)",
        "url": "threat-library-detail.html?data=teamviewer"
    },
    {
        "text": "TEARDROP (TEARDROP)",
        "url": "threat-library-detail.html?data=teardrop"
    },
    {
        "text": "TechnoCreep (TechnoCreep)",
        "url": "threat-library-detail.html?data=technocreep"
    },
    {
        "text": "TeleBot (TeleBot)",
        "url": "threat-library-detail.html?data=telebot"
    },
    {
        "text": "TeleDoor (TeleDoor)",
        "url": "threat-library-detail.html?data=teledoor"
    },
    {
        "text": "Telemiris (Telemiris)",
        "url": "threat-library-detail.html?data=telemiris"
    },
    {
        "text": "TelePowerBot (TelePowerBot)",
        "url": "threat-library-detail.html?data=telepowerbot"
    },
    {
        "text": "Tempting Cedar Spyware (Tempting Cedar Spyware, TemptingCedar Spyware)",
        "url": "threat-library-detail.html?data=tempting_cedar_spyware"
    },
    {
        "text": "TERA (TERA)",
        "url": "threat-library-detail.html?data=tera"
    },
    {
        "text": "Termite (Termite)",
        "url": "threat-library-detail.html?data=termite"
    },
    {
        "text": "Terracotta VPN (Terracotta VPN)",
        "url": "threat-library-detail.html?data=terracotta_vpn"
    },
    {
        "text": "TerraCrypt (TerraCrypt, PureLocker)",
        "url": "threat-library-detail.html?data=terracrypt"
    },
    {
        "text": "TerraPreter (TerraPreter)",
        "url": "threat-library-detail.html?data=terrapreter"
    },
    {
        "text": "TerraRecon (TerraRecon, Taurus Loader Reconnaissance Module)",
        "url": "threat-library-detail.html?data=terrarecon"
    },
    {
        "text": "TerraStealer (TerraStealer, Taurus Loader Stealer Module, StealerOne, SONE)",
        "url": "threat-library-detail.html?data=terrastealer"
    },
    {
        "text": "TerraTV (TerraTV, Taurus Loader TeamViewer Module)",
        "url": "threat-library-detail.html?data=terratv"
    },
    {
        "text": "TerraWiper (TerraWiper)",
        "url": "threat-library-detail.html?data=terrawiper"
    },
    {
        "text": "TeslaGun (TeslaGun)",
        "url": "threat-library-detail.html?data=teslagun"
    },
    {
        "text": "TFlower (TFlower)",
        "url": "threat-library-detail.html?data=tflower"
    },
    {
        "text": "THC Hydra (THC Hydra)",
        "url": "threat-library-detail.html?data=thc_hydra"
    },
    {
        "text": "THOR (THOR)",
        "url": "threat-library-detail.html?data=thor"
    },
    {
        "text": "ThreatNeedle (ThreatNeedle)",
        "url": "threat-library-detail.html?data=threatneedle"
    },
    {
        "text": "ThreatKit (ThreatKit)",
        "url": "threat-library-detail.html?data=threatkit"
    },
    {
        "text": "THREEBYTE (THREEBYTE)",
        "url": "threat-library-detail.html?data=threebyte"
    },
    {
        "text": "ThreeDollars (ThreeDollars)",
        "url": "threat-library-detail.html?data=threedollars"
    },
    {
        "text": "TidePool (TidePool)",
        "url": "threat-library-detail.html?data=tidepool"
    },
    {
        "text": "TIDYELF (TIDYELF)",
        "url": "threat-library-detail.html?data=tidyelf"
    },
    {
        "text": "TigerRAT (TigerRAT, Tiger RAT)",
        "url": "threat-library-detail.html?data=tigerrat"
    },
    {
        "text": "Tinba (Tinba, Tiny Banker, TinyBanker, Tina, Illi, Zusy)",
        "url": "threat-library-detail.html?data=tinba"
    },
    {
        "text": "TinyCryptor (TinyCryptor)",
        "url": "threat-library-detail.html?data=tinycryptor"
    },
    {
        "text": "TinyLoader (TinyLoader)",
        "url": "threat-library-detail.html?data=tinyloader"
    },
    {
        "text": "TinyMet (TinyMet, TiniMet)",
        "url": "threat-library-detail.html?data=tinymet"
    },
    {
        "text": "TinyNode (TinyNode)",
        "url": "threat-library-detail.html?data=tinynode"
    },
    {
        "text": "TinyNote (TinyNote)",
        "url": "threat-library-detail.html?data=tinynote"
    },
    {
        "text": "TinyPOS (TinyPOS)",
        "url": "threat-library-detail.html?data=tinypos"
    },
    {
        "text": "TinyPosh (TinyPosh)",
        "url": "threat-library-detail.html?data=tinyposh"
    },
    {
        "text": "Tiny SHell (Tiny SHell, tsh)",
        "url": "threat-library-detail.html?data=tiny_shell"
    },
    {
        "text": "TinyTurla (TinyTurla)",
        "url": "threat-library-detail.html?data=tinyturla"
    },
    {
        "text": "TINYTYPHON (TINYTYPHON)",
        "url": "threat-library-detail.html?data=tinytyphon"
    },
    {
        "text": "TinyZBot (TinyZBot)",
        "url": "threat-library-detail.html?data=tinyzbot"
    },
    {
        "text": "Titanium (Titanium)",
        "url": "threat-library-detail.html?data=titanium"
    },
    {
        "text": "TManger (TManger, LuckyBack)",
        "url": "threat-library-detail.html?data=tmanger"
    },
    {
        "text": "Tofu Backdoor (Tofu Backdoor)",
        "url": "threat-library-detail.html?data=tofu_backdoor"
    },
    {
        "text": "TOITOIN (TOITOIN)",
        "url": "threat-library-detail.html?data=toitoin"
    },
    {
        "text": "Tomiris (Tomiris)",
        "url": "threat-library-detail.html?data=tomiris"
    },
    {
        "text": "TOM-Skype (TOM-Skype)",
        "url": "threat-library-detail.html?data=tom-skype"
    },
    {
        "text": "TONEDEAF (TONEDEAF)",
        "url": "threat-library-detail.html?data=tonedeaf"
    },
    {
        "text": "TONEDEAF 2.0 (TONEDEAF 2.0)",
        "url": "threat-library-detail.html?data=tonedeaf_2.0"
    },
    {
        "text": "TONEINS (TONEINS)",
        "url": "threat-library-detail.html?data=toneins"
    },
    {
        "text": "TONESHELL (TONESHELL)",
        "url": "threat-library-detail.html?data=toneshell"
    },
    {
        "text": "Tonnerre (Tonnerre)",
        "url": "threat-library-detail.html?data=tonnerre"
    },
    {
        "text": "Topinambour (Topinambour)",
        "url": "threat-library-detail.html?data=topinambour"
    },
    {
        "text": "Torn RAT (Torn RAT)",
        "url": "threat-library-detail.html?data=torn_rat"
    },
    {
        "text": "TOUCHKEY (TOUCHKEY)",
        "url": "threat-library-detail.html?data=touchkey"
    },
    {
        "text": "TOUCHMOVE (TOUCHMOVE)",
        "url": "threat-library-detail.html?data=touchmove"
    },
    {
        "text": "TOUCHSHIFT (TOUCHSHIFT)",
        "url": "threat-library-detail.html?data=touchshift"
    },
    {
        "text": "TOUCHSHOT (TOUCHSHOT)",
        "url": "threat-library-detail.html?data=touchshot"
    },
    {
        "text": "TrailBlazer (TrailBlazer)",
        "url": "threat-library-detail.html?data=trailblazer"
    },
    {
        "text": "TreasureHunter (TreasureHunter, TREASUREHUNT, huntpos)",
        "url": "threat-library-detail.html?data=treasurehunter"
    },
    {
        "text": "TriangleDB (TriangleDB)",
        "url": "threat-library-detail.html?data=triangledb"
    },
    {
        "text": "TrickMo (TrickMo)",
        "url": "threat-library-detail.html?data=trickmo"
    },
    {
        "text": "TRIPLEFANTASY (TRIPLEFANTASY)",
        "url": "threat-library-detail.html?data=triplefantasy"
    },
    {
        "text": "Triton (Triton, TRITON, Trisis, TRISIS, HatMan)",
        "url": "threat-library-detail.html?data=triton"
    },
    {
        "text": "TriFive (TriFive)",
        "url": "threat-library-detail.html?data=trifive"
    },
    {
        "text": "Trochilus RAT (Trochilus RAT)",
        "url": "threat-library-detail.html?data=trochilus_rat"
    },
    {
        "text": "Troy (Troy)",
        "url": "threat-library-detail.html?data=troy"
    },
    {
        "text": "Truvasys (Truvasys)",
        "url": "threat-library-detail.html?data=truvasys"
    },
    {
        "text": "TTCalc (TTCalc)",
        "url": "threat-library-detail.html?data=ttcalc"
    },
    {
        "text": "Tunnus (Tunnus, QUIETCANARY)",
        "url": "threat-library-detail.html?data=tunnus"
    },
    {
        "text": "Turian (Turian)",
        "url": "threat-library-detail.html?data=turian"
    },
    {
        "text": "TurlaChopper (TurlaChopper)",
        "url": "threat-library-detail.html?data=turlachopper"
    },
    {
        "text": "TURNEDUP (TURNEDUP, Notestuk)",
        "url": "threat-library-detail.html?data=turnedup"
    },
    {
        "text": "TwoFace (TwoFace, Minion, HighShell, HyperShell, SEASHARPEE)",
        "url": "threat-library-detail.html?data=twoface"
    },
    {
        "text": "TypeConfig (TypeConfig, SafeDisk)",
        "url": "threat-library-detail.html?data=typeconfig"
    },
    {
        "text": "TYPEFRAME (TYPEFRAME)",
        "url": "threat-library-detail.html?data=typeframe"
    },
    {
        "text": "Tyupkin (Tyupkin, Padpin)",
        "url": "threat-library-detail.html?data=tyupkin"
    },
    {
        "text": "UDPoS (UDPoS)",
        "url": "threat-library-detail.html?data=udpos"
    },
    {
        "text": "UltraVNC (UltraVNC)",
        "url": "threat-library-detail.html?data=ultravnc"
    },
    {
        "text": "Underground (Underground)",
        "url": "threat-library-detail.html?data=underground"
    },
    {
        "text": "UNITEDRAKE (UNITEDRAKE)",
        "url": "threat-library-detail.html?data=unitedrake"
    },
    {
        "text": "Unknown Logger (Unknown Logger)",
        "url": "threat-library-detail.html?data=unknown_logger"
    },
    {
        "text": "Upatre (Upatre)",
        "url": "threat-library-detail.html?data=upatre"
    },
    {
        "text": "updater.mod (updater.mod)",
        "url": "threat-library-detail.html?data=updater.mod"
    },
    {
        "text": "UPDATESEE (UPDATESEE)",
        "url": "threat-library-detail.html?data=updatesee"
    },
    {
        "text": "UpDocX (UpDocX)",
        "url": "threat-library-detail.html?data=updocx"
    },
    {
        "text": "UPXShell (UPXShell)",
        "url": "threat-library-detail.html?data=upxshell"
    },
    {
        "text": "URLZone (URLZone, Bebloh, Shiotob)",
        "url": "threat-library-detail.html?data=urlzone"
    },
    {
        "text": "Uroburos (Uroburos, Urouros, Turla, Snake)",
        "url": "threat-library-detail.html?data=uroburos"
    },
    {
        "text": "USBCulprit (USBCulprit)",
        "url": "threat-library-detail.html?data=usbculprit"
    },
    {
        "text": "UsbDoc (UsbDoc)",
        "url": "threat-library-detail.html?data=usbdoc"
    },
    {
        "text": "UsbExe (UsbExe)",
        "url": "threat-library-detail.html?data=usbexe"
    },
    {
        "text": "USBferry (USBferry)",
        "url": "threat-library-detail.html?data=usbferry"
    },
    {
        "text": "USBStealer (USBStealer, Win32/USBStealer, USB Stealer)",
        "url": "threat-library-detail.html?data=usbstealer"
    },
    {
        "text": "USBWorm (USBWorm)",
        "url": "threat-library-detail.html?data=usbworm"
    },
    {
        "text": "Valak (Valak, Valek)",
        "url": "threat-library-detail.html?data=valak"
    },
    {
        "text": "ValeforBeta (ValeforBeta)",
        "url": "threat-library-detail.html?data=valeforbeta"
    },
    {
        "text": "VALUEVAULT (VALUEVAULT)",
        "url": "threat-library-detail.html?data=valuevault"
    },
    {
        "text": "VAMP (VAMP, android.micropsia)",
        "url": "threat-library-detail.html?data=vamp"
    },
    {
        "text": "Vasport (Vasport)",
        "url": "threat-library-detail.html?data=vasport"
    },
    {
        "text": "Vatet (Vatet)",
        "url": "threat-library-detail.html?data=vatet"
    },
    {
        "text": "Vawtrak (Vawtrak, Catch, grabnew, NeverQuest)",
        "url": "threat-library-detail.html?data=vawtrak"
    },
    {
        "text": "VBREVSHELL (VBREVSHELL)",
        "url": "threat-library-detail.html?data=vbrevshell"
    },
    {
        "text": "VBShower (VBShower)",
        "url": "threat-library-detail.html?data=vbshower"
    },
    {
        "text": "Vcrodat (Vcrodat)",
        "url": "threat-library-detail.html?data=vcrodat"
    },
    {
        "text": "Veil (Veil)",
        "url": "threat-library-detail.html?data=veil"
    },
    {
        "text": "VEILEDSIGNAL (VEILEDSIGNAL)",
        "url": "threat-library-detail.html?data=veiledsignal"
    },
    {
        "text": "VENOMBITE (VENOMBITE)",
        "url": "threat-library-detail.html?data=venombite"
    },
    {
        "text": "VenomKit (VenomKit)",
        "url": "threat-library-detail.html?data=venomkit"
    },
    {
        "text": "VenomLNK (VenomLNK)",
        "url": "threat-library-detail.html?data=venomlnk"
    },
    {
        "text": "VenomRAT (VenomRAT)",
        "url": "threat-library-detail.html?data=venomrat"
    },
    {
        "text": "VHD (VHD, VHD Ransomware)",
        "url": "threat-library-detail.html?data=vhd"
    },
    {
        "text": "ViceLeaker (ViceLeaker, Triout)",
        "url": "threat-library-detail.html?data=viceleaker"
    },
    {
        "text": "VIDEOKILLER (VIDEOKILLER)",
        "url": "threat-library-detail.html?data=videokiller"
    },
    {
        "text": "VileRAT (VileRAT)",
        "url": "threat-library-detail.html?data=vilerat"
    },
    {
        "text": "VINETHORN (VINETHORN)",
        "url": "threat-library-detail.html?data=vinethorn"
    },
    {
        "text": "Violet Lambert (Violet Lambert)",
        "url": "threat-library-detail.html?data=violet_lambert"
    },
    {
        "text": "Viper (Viper)",
        "url": "threat-library-detail.html?data=viper"
    },
    {
        "text": "ViperRAT (ViperRAT, Viper RAT)",
        "url": "threat-library-detail.html?data=viperrat"
    },
    {
        "text": "Vizom (Vizom)",
        "url": "threat-library-detail.html?data=vizom"
    },
    {
        "text": "Vminst (Vminst)",
        "url": "threat-library-detail.html?data=vminst"
    },
    {
        "text": "VNC (VNC, Virtual Network Computing)",
        "url": "threat-library-detail.html?data=vnc"
    },
    {
        "text": "Voice Massege.apk (Voice Massege.apk)",
        "url": "threat-library-detail.html?data=voice_massege.apk"
    },
    {
        "text": "Volgmer (Volgmer, Manuscrypt)",
        "url": "threat-library-detail.html?data=volgmer"
    },
    {
        "text": "VolatileVenom (VolatileVenom)",
        "url": "threat-library-detail.html?data=volatilevenom"
    },
    {
        "text": "VPNFilter (VPNFilter)",
        "url": "threat-library-detail.html?data=vpnfilter"
    },
    {
        "text": "VSingle (VSingle)",
        "url": "threat-library-detail.html?data=vsingle"
    },
    {
        "text": "vSkimmer (vSkimmer)",
        "url": "threat-library-detail.html?data=vskimmer"
    },
    {
        "text": "Vyveva (Vyveva)",
        "url": "threat-library-detail.html?data=vyveva"
    },
    {
        "text": "w32times (w32times)",
        "url": "threat-library-detail.html?data=w32times"
    },
    {
        "text": "Wadhrama (Wadhrama)",
        "url": "threat-library-detail.html?data=wadhrama"
    },
    {
        "text": "Waizsar RAT (Waizsar RAT)",
        "url": "threat-library-detail.html?data=waizsar_rat"
    },
    {
        "text": "WannaCry (WannaCry, WannaCrypt, WannaCryptor, Wcry, WanaCry, WanaCrypt, WanaCrypt0r, Wana Decrypt0r)",
        "url": "threat-library-detail.html?data=wannacry"
    },
    {
        "text": "WARP (WARP)",
        "url": "threat-library-detail.html?data=warp"
    },
    {
        "text": "WARPRISM (WARPRISM)",
        "url": "threat-library-detail.html?data=warprism"
    },
    {
        "text": "Warzone RAT (Warzone RAT, Warzone)",
        "url": "threat-library-detail.html?data=warzone_rat"
    },
    {
        "text": "WastedLoader (WastedLoader)",
        "url": "threat-library-detail.html?data=wastedloader"
    },
    {
        "text": "WaterSpout (WaterSpout)",
        "url": "threat-library-detail.html?data=waterspout"
    },
    {
        "text": "WbBot (WbBot)",
        "url": "threat-library-detail.html?data=wbbot"
    },
    {
        "text": "WebBrowserPassView (WebBrowserPassView)",
        "url": "threat-library-detail.html?data=webbrowserpassview"
    },
    {
        "text": "WebC2 (WebC2, WebC2-AdSpace, WebC2-Ausov, WebC2-Bolid, WebC2-Cson, WebC2-DIV, WebC2-GreenCat, WebC2-Head, WebC2-Kt3, WebC2-Qbp, WebC2-Rave, WebC2-Table, WebC2-UGX, WebC2-Yahoo)",
        "url": "threat-library-detail.html?data=webc2"
    },
    {
        "text": "Webmask (Webmask)",
        "url": "threat-library-detail.html?data=webmask"
    },
    {
        "text": "WellMess (WellMess, elf.wellmess)",
        "url": "threat-library-detail.html?data=wellmess"
    },
    {
        "text": "WHEATSCAN (WHEATSCAN)",
        "url": "threat-library-detail.html?data=wheatscan"
    },
    {
        "text": "WhiskerSpy (WhiskerSpy)",
        "url": "threat-library-detail.html?data=whiskerspy"
    },
    {
        "text": "Whisky (Whisky)",
        "url": "threat-library-detail.html?data=whisky"
    },
    {
        "text": "WhiteAtlas (WhiteAtlas)",
        "url": "threat-library-detail.html?data=whiteatlas"
    },
    {
        "text": "Whitebird (Whitebird)",
        "url": "threat-library-detail.html?data=whitebird"
    },
    {
        "text": "White Lambert (White Lambert)",
        "url": "threat-library-detail.html?data=white_lambert"
    },
    {
        "text": "Wiarp (Wiarp)",
        "url": "threat-library-detail.html?data=wiarp"
    },
    {
        "text": "WIDETONE (WIDETONE)",
        "url": "threat-library-detail.html?data=widetone"
    },
    {
        "text": "Wii (Wii)",
        "url": "threat-library-detail.html?data=wii"
    },
    {
        "text": "Windows Credentials Editor (Windows Credentials Editor, Windows Credential Editor, WCE)",
        "url": "threat-library-detail.html?data=windows_credentials_editor"
    },
    {
        "text": "WindTail (WindTail)",
        "url": "threat-library-detail.html?data=windtail"
    },
    {
        "text": "WINERACK (WINERACK)",
        "url": "threat-library-detail.html?data=winerack"
    },
    {
        "text": "Winexe (Winexe)",
        "url": "threat-library-detail.html?data=winexe"
    },
    {
        "text": "Wingbird (Wingbird)",
        "url": "threat-library-detail.html?data=wingbird"
    },
    {
        "text": "WINGCRACK (WINGCRACK)",
        "url": "threat-library-detail.html?data=wingcrack"
    },
    {
        "text": "WINGHOOK (WINGHOOK)",
        "url": "threat-library-detail.html?data=winghook"
    },
    {
        "text": "WinIDS (WinIDS)",
        "url": "threat-library-detail.html?data=winids"
    },
    {
        "text": "WinMM (WinMM)",
        "url": "threat-library-detail.html?data=winmm"
    },
    {
        "text": "WINNKIT (WINNKIT)",
        "url": "threat-library-detail.html?data=winnkit"
    },
    {
        "text": "WinorDLL64 (WinorDLL64)",
        "url": "threat-library-detail.html?data=winordll64"
    },
    {
        "text": "WinPot (WinPot, ATMPot)",
        "url": "threat-library-detail.html?data=winpot"
    },
    {
        "text": "WinRAR (WinRAR)",
        "url": "threat-library-detail.html?data=winrar"
    },
    {
        "text": "WinSCP (WinSCP)",
        "url": "threat-library-detail.html?data=winscp"
    },
    {
        "text": "Winsloader (Winsloader)",
        "url": "threat-library-detail.html?data=winsloader"
    },
    {
        "text": "WINTERLOVE (WINTERLOVE)",
        "url": "threat-library-detail.html?data=winterlove"
    },
    {
        "text": "WispRider (WispRider)",
        "url": "threat-library-detail.html?data=wisprider"
    },
    {
        "text": "WinZip (WinZip)",
        "url": "threat-library-detail.html?data=winzip"
    },
    {
        "text": "WIPERIGHT (WIPERIGHT)",
        "url": "threat-library-detail.html?data=wiperight"
    },
    {
        "text": "WITCHCOVEN (WITCHCOVEN)",
        "url": "threat-library-detail.html?data=witchcoven"
    },
    {
        "text": "WmiExec (WmiExec)",
        "url": "threat-library-detail.html?data=wmiexec"
    },
    {
        "text": "WMI Ghost (WMI Ghost, Wimmie, Syndicasec)",
        "url": "threat-library-detail.html?data=wmi_ghost"
    },
    {
        "text": "WndTest (WndTest)",
        "url": "threat-library-detail.html?data=wndtest"
    },
    {
        "text": "WolfRAT (WolfRAT, W1_RAT)",
        "url": "threat-library-detail.html?data=wolfrat"
    },
    {
        "text": "Wormhole (Wormhole)",
        "url": "threat-library-detail.html?data=wormhole"
    },
    {
        "text": "Wpscan (Wpscan)",
        "url": "threat-library-detail.html?data=wpscan"
    },
    {
        "text": "WSCSPL (WSCSPL)",
        "url": "threat-library-detail.html?data=wscspl"
    },
    {
        "text": "WSO (WSO, Webshell by Orb)",
        "url": "threat-library-detail.html?data=wso"
    },
    {
        "text": "WyrmSpy (WyrmSpy)",
        "url": "threat-library-detail.html?data=wyrmspy"
    },
    {
        "text": "Xbash (Xbash)",
        "url": "threat-library-detail.html?data=xbash"
    },
    {
        "text": "XBOT-POS (XBOT-POS, XBot POS)",
        "url": "threat-library-detail.html?data=xbot-pos"
    },
    {
        "text": "XBOW (XBOW)",
        "url": "threat-library-detail.html?data=xbow"
    },
    {
        "text": "XDDown (XDDown)",
        "url": "threat-library-detail.html?data=xddown"
    },
    {
        "text": "xDll (xDll)",
        "url": "threat-library-detail.html?data=xdll"
    },
    {
        "text": "XDOOR (XDOOR, X-Door)",
        "url": "threat-library-detail.html?data=xdoor"
    },
    {
        "text": "XDList (XDList)",
        "url": "threat-library-detail.html?data=xdlist"
    },
    {
        "text": "XDLoc (XDLoc)",
        "url": "threat-library-detail.html?data=xdloc"
    },
    {
        "text": "XDMonitor (XDMonitor)",
        "url": "threat-library-detail.html?data=xdmonitor"
    },
    {
        "text": "XDPass (XDPass)",
        "url": "threat-library-detail.html?data=xdpass"
    },
    {
        "text": "XDRecon (XDRecon)",
        "url": "threat-library-detail.html?data=xdrecon"
    },
    {
        "text": "XDUpload (XDUpload)",
        "url": "threat-library-detail.html?data=xdupload"
    },
    {
        "text": "xfs-disp.exe (xfs-disp.exe)",
        "url": "threat-library-detail.html?data=xfs-disp.exe"
    },
    {
        "text": "xPack (xPack, NERAPACK)",
        "url": "threat-library-detail.html?data=xpack"
    },
    {
        "text": "xRAT (xRAT)",
        "url": "threat-library-detail.html?data=xrat"
    },
    {
        "text": "XServer (XServer, Filesnfer)",
        "url": "threat-library-detail.html?data=xserver"
    },
    {
        "text": "XSLCmd (XSLCmd)",
        "url": "threat-library-detail.html?data=xslcmd"
    },
    {
        "text": "xsPlus (xsPlus, xsControl, nokian)",
        "url": "threat-library-detail.html?data=xsplus"
    },
    {
        "text": "XtremeRAT (XtremeRAT, Xtreme RAT, ExtRat)",
        "url": "threat-library-detail.html?data=xtremerat"
    },
    {
        "text": "X-Tunnel (X-Tunnel, XTunnel, Shunnael, Trojan.Shunnael, XAPS)",
        "url": "threat-library-detail.html?data=x-tunnel"
    },
    {
        "text": "Yahoyah (Yahoyah, W32/Seeav)",
        "url": "threat-library-detail.html?data=yahoyah"
    },
    {
        "text": "YamaBot (YamaBot, Kaos)",
        "url": "threat-library-detail.html?data=yamabot"
    },
    {
        "text": "Yispecter (Yispecter, ZxxZ)",
        "url": "threat-library-detail.html?data=yispecter"
    },
    {
        "text": "Yort (Yort)",
        "url": "threat-library-detail.html?data=yort"
    },
    {
        "text": "yty (yty, Jaca)",
        "url": "threat-library-detail.html?data=yty"
    },
    {
        "text": "ZAP (ZAP)",
        "url": "threat-library-detail.html?data=zap"
    },
    {
        "text": "Zebrocy (Zebrocy, Zekapab)",
        "url": "threat-library-detail.html?data=zebrocy"
    },
    {
        "text": "ZeGhost (ZeGhost, BackDoor-FBZT!52D84425CDF2, Trojan.Win32.Staser.ytq, Win32/Zegost.BW)",
        "url": "threat-library-detail.html?data=zeghost"
    },
    {
        "text": "ZE Loader (ZE Loader)",
        "url": "threat-library-detail.html?data=ze_loader"
    },
    {
        "text": "ZeroT (ZeroT)",
        "url": "threat-library-detail.html?data=zerot"
    },
    {
        "text": "Zeus OpenSSL (Zeus OpenSSL, Zeus Sphinx, XSphinx)",
        "url": "threat-library-detail.html?data=zeus_openssl"
    },
    {
        "text": "Zeus Panda (Zeus Panda, ZeusPanda, PandaBanker)",
        "url": "threat-library-detail.html?data=zeus_panda"
    },
    {
        "text": "ZeusPOS (ZeusPOS)",
        "url": "threat-library-detail.html?data=zeuspos"
    },
    {
        "text": "ZeusVM (ZeusVM, VM Zeus, VMzeus, Zberp)",
        "url": "threat-library-detail.html?data=zeusvm"
    },
    {
        "text": "zhCat (zhCat)",
        "url": "threat-library-detail.html?data=zhcat"
    },
    {
        "text": "zhMimikatz (zhMimikatz)",
        "url": "threat-library-detail.html?data=zhmimikatz"
    },
    {
        "text": "ZitMo (ZitMo, ZeuS-in-the-Mobile)",
        "url": "threat-library-detail.html?data=zitmo"
    },
    {
        "text": "zl4vq.sqt (zl4vq.sqt)",
        "url": "threat-library-detail.html?data=zl4vq.sqt"
    },
    {
        "text": "ZMsg (ZMsg)",
        "url": "threat-library-detail.html?data=zmsg"
    },
    {
        "text": "ZooPark (ZooPark)",
        "url": "threat-library-detail.html?data=zoopark"
    },
    {
        "text": "ZoxRPC (ZoxRPC, Gresim)",
        "url": "threat-library-detail.html?data=zoxrpc"
    },
    {
        "text": "XPCTRA (XPCTRA, Expectra)",
        "url": "threat-library-detail.html?data=xpctra"
    },
    {
        "text": "ZPP (ZPP)",
        "url": "threat-library-detail.html?data=zpp"
    },
    {
        "text": "ZUMKONG (ZUMKONG)",
        "url": "threat-library-detail.html?data=zumkong"
    },
    {
        "text": "Zupdax (Zupdax)",
        "url": "threat-library-detail.html?data=zupdax"
    },
    {
        "text": "zwShell (zwShell)",
        "url": "threat-library-detail.html?data=zwshell"
    },
    {
        "text": "ZXPortMap (ZXPortMap)",
        "url": "threat-library-detail.html?data=zxportmap"
    },
    {
        "text": "ZXShell (ZXShell, Sensocode)",
        "url": "threat-library-detail.html?data=zxshell"
    }
];
