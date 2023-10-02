var threatdata = {
    "name": "NotPetya",
    "alias": "NotPetya, EternalPetya, ExPetr, Pnyetya, Petna, Nyetya, NonPetya, nPetya, Petrwrap, Diskcoder.C, GoldenEye",
    "category": "Malware",
    "type": "Ransomware, Wiper, Worm, Remote command",
    "modified": "2023-01-29",
    "all_data": {
        "tool": "NotPetya",
        "names": [
            {
                "name": "NotPetya"
            },
            {
                "name": "EternalPetya"
            },
            {
                "name": "ExPetr"
            },
            {
                "name": "Pnyetya"
            },
            {
                "name": "Petna"
            },
            {
                "name": "Nyetya"
            },
            {
                "name": "NonPetya"
            },
            {
                "name": "nPetya"
            },
            {
                "name": "Petrwrap"
            },
            {
                "name": "Diskcoder.C"
            },
            {
                "name": "GoldenEye"
            }
        ],
        "description": "(US-CERT) On June 27, 2017, NCCIC was notified of Petya malware events occurring in multiple countries and affecting multiple sectors. This variant of the Petya malware\u2014referred to as NotPetya\u2014encrypts files with extensions from a hard-coded list. Additionally, if the malware gains administrator rights, it encrypts the master boot record (MBR), making the infected Windows computers unusable. NotPetya differs from previous Petya malware primarily in its propagation methods.\n\nNotPetya leverages multiple propagation methods to spread within an infected network. According to malware analysis, NotPetya attempts the lateral movement techniques below:\n\n\u2022 {{PsExec}} - a legitimate Windows administration tool\n\u2022 WMI - Windows Management Instrumentation, a legitimate Windows component\n\u2022 {{EternalBlue}} - the same Windows SMBv1 exploit used by {{WannaCry}}\n\u2022 {{EternalRomance}} - another Windows SMBv1 exploit",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Wiper",
            "Worm",
            "Remote command"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA17-181A",
            "https://securelist.com/from-blackenergy-to-expetr/78937/",
            "https://www.washingtonpost.com/world/national-security/russian-military-was-behind-notpetya-cyberattack-in-ukraine-cia-concludes/2018/01/12/048d8506-f7ca-11e7-b34a-b85626af34ef_story.html",
            "https://blogs.technet.microsoft.com/mmpc/2017/06/29/windows-10-platform-resilience-against-the-petya-ransomware-attack/",
            "https://labsblog.f-secure.com/2017/06/30/eternal-petya-from-a-developers-perspective/",
            "https://securelist.com/expetrpetyanotpetya-is-a-wiper-not-ransomware/78902/",
            "https://threatpost.com/ukrainian-man-arrested-charged-in-notpetya-distribution/127391/",
            "http://blog.erratasec.com/2017/06/nonpetya-no-evidence-it-was-smokescreen.html",
            "https://www.crowdstrike.com/blog/petrwrap-technical-analysis-part-2-further-findings-and-potential-for-mbr-recovery/",
            "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2017/september/eternalglue-part-one-rebuilding-notpetya-to-assess-real-world-resilience/",
            "https://blog.malwarebytes.com/threat-analysis/2017/06/eternalpetya-yet-another-stolen-piece-package/",
            "https://labsblog.f-secure.com/2017/06/29/petya-i-want-to-believe/",
            "https://www.theguardian.com/technology/2017/jul/03/notpetya-malware-attacks-ukraine-warrant-retaliation-nato-researcher-tomas-minarik",
            "https://blog.malwarebytes.com/cybercrime/2017/07/keeping-up-with-the-petyas-demystifying-the-malware-family/",
            "https://www.crowdstrike.com/blog/fast-spreading-petrwrap-ransomware-attack-combines-eternalblue-exploit-credential-stealing/",
            "https://blog.comae.io/petya-2017-is-a-wiper-not-a-ransomware-9ea1d8961d3b",
            "http://blog.talosintelligence.com/2017/06/worldwide-ransomware-variant.html",
            "https://securelist.com/schroedingers-petya/78870/",
            "https://www.welivesecurity.com/2017/06/30/telebots-back-supply-chain-attacks-against-ukraine/",
            "https://www.bleepingcomputer.com/news/security/ransomware-attacks-continue-in-ukraine-with-mysterious-wannacry-clone/",
            "https://www.gdatasoftware.com/blog/2017/07/29859-who-is-behind-petna",
            "https://medium.com/@thegrugq/pnyetya-yet-another-ransomware-outbreak-59afd1ee89d4",
            "https://www.welivesecurity.com/2017/10/24/kiev-metro-hit-new-variant-infamous-diskcoder-ransomware/",
            "https://blog.malwarebytes.com/threat-analysis/2017/06/eternalpetya-lost-salsa20-key/",
            "https://www.welivesecurity.com/2018/10/11/new-telebots-backdoor-linking-industroyer-notpetya/",
            "https://isc.sans.edu/forums/diary/Checking+out+the+new+Petya+variant/22562/",
            "https://tisiphone.net/2017/06/28/why-notpetya-kept-me-awake-you-should-worry-too/",
            "https://blog.malwarebytes.com/threat-analysis/2016/05/petya-and-mischa-ransomware-duet-p1/",
            "https://blog.malwarebytes.com/threat-analysis/2016/07/third-time-unlucky-improved-petya-is-out/",
            "https://blog.malwarebytes.com/malwarebytes-news/2017/07/bye-bye-petya-decryptor-old-versions-released/",
            "https://blog.malwarebytes.com/threat-analysis/2016/04/petya-ransomware/",
            "https://www.dropbox.com/s/hksfa7zzc17jgrq/Whitepaper%20Petya%20Ransomware.pdf?dl=0"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0368/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.eternal_petya",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.petya"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:notpetya"
        ],
        "uuid": "f1c756d0-c922-45d9-94d5-fb355f523add",
        "last-card-change": "2020-05-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "notpetya",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://medium.com/@Ilandu/petya-not-petya-ransomware-9619cbbb0786",
            "date": "2023-01-29",
            "organization": "Acronis",
            "author": "Ilan Duhin",
            "title": "Petya/Not Petya Ransomware Analysis",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.atlanticcouncil.org/content-series/tech-at-the-leading-edge/the-russian-cyber-unit-that-hacks-targets-on-site/",
            "date": "2022-11-18",
            "organization": "Atlantic Council",
            "author": "Justin Sherman",
            "title": "GRU 26165: The Russian cyber unit that hacks targets on-site",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://therecord.media/mondelez-and-zurich-reach-settlement-in-notpetya-cyberattack-insurance-suit/",
            "date": "2022-10-31",
            "organization": "The Record",
            "author": "Alexander Martin",
            "title": "Mondelez and Zurich reach settlement in NotPetya cyberattack insurance suit",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=mrTdSdMMgnk",
            "date": "2022-10-24",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Alexander Adamov",
            "title": "Russian wipers in the cyberwar against Ukraine",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "HermeticWizard",
                "INDUSTROYER2",
                "IsaacWiper",
                "KillDisk",
                "PartyTicket",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/the-increasing-wiper-malware-threat",
            "date": "2022-04-28",
            "organization": "Fortinet",
            "author": "Gergely Revay",
            "title": "An Overview of the Increasing Wiper Malware Threat",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DistTrack",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "IsaacWiper",
                "Olympic Destroyer",
                "Ordinypt",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-110A_Joint_CSA_Russian_State-Sponsored_and_Criminal_Cyber_Threats_to_Critical_Infrastructure_4_20_22_Final.pdf",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA22-110A Joint CSA: Russian State-Sponsored and Criminal Cyber  Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-110a",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-110A): Russian State-Sponsored and Criminal Cyber Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader",
                "Killnet"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2022/03/01/diskkill-hermeticwiper-and-notpetya-dissimilarities/",
            "date": "2022-03-01",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "DiskKill/HermeticWiper and NotPetya (Dis)similarities",
            "categories": [
                "EternalPetya",
                "HermeticWiper"
            ]
        },
        {
            "data_url": "https://cyberpeaceinstitute.org/ukraine-timeline-of-cyberattacks",
            "date": "2022-02-25",
            "organization": "",
            "author": "CyberPeace Institute",
            "title": "UKRAINE: Timeline of Cyberattacks",
            "categories": [
                "VPNFilter",
                "EternalPetya",
                "HermeticWiper",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/02/current-executive-guidance-for-ongoing.html",
            "date": "2022-02-24",
            "organization": "Talos",
            "author": "Mitch Neff",
            "title": "Threat Advisory: Current executive guidance for ongoing cyberattacks in Ukraine",
            "categories": [
                "VPNFilter",
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://blog.nviso.eu/2022/02/24/threat-update-ukraine-russia-tensions/",
            "date": "2022-02-24",
            "organization": "nviso",
            "author": "Michel Coene",
            "title": "Threat Update \u2013 Ukraine & Russia conflict",
            "categories": [
                "EternalPetya",
                "GreyEnergy",
                "HermeticWiper",
                "Industroyer",
                "KillDisk",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://www.tesorion.nl/en/resources/pdfstore/Report-OSINT-Russia-Ukraine-Conflict-Cyberaspect.pdf",
            "date": "2022-02-24",
            "organization": "Tesorion",
            "author": "TESORION",
            "title": "Report OSINT: Russia/ Ukraine Conflict Cyberaspect",
            "categories": [
                "Mirai",
                "VPNFilter",
                "BlackEnergy",
                "EternalPetya",
                "HermeticWiper",
                "Industroyer",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://istari-global.com/spotlight/the-untold-story-of-notpetya/",
            "date": "2022-02-23",
            "organization": "ISTARI",
            "author": "Manuel Hepfer",
            "title": "Re-cap: The Untold Story of NotPetya, The Most Devastating Cyberattack in History",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-0909.pdf",
            "date": "2021-09-09",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Dark Covenant: Connections Between the Russian State and Criminal Actors",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "Gameover P2P",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/hacker-lexicon-what-is-a-supply-chain-attack/",
            "date": "2021-05-31",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "Hacker Lexicon: What Is a Supply Chain Attack?",
            "categories": [
                "EternalPetya",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://securityandtechnology.org/wp-content/uploads/2021/04/IST-Ransomware-Task-Force_Final_Report.pdf",
            "date": "2021-04-29",
            "organization": "The Institute for Security and Technology",
            "author": "The Institute for Security and Technology",
            "title": "Combating Ransomware A Comprehensive Framework for Action: Key Recommendations from the  Ransomware Task Force",
            "categories": [
                "Conti",
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/russian-cyber-attack-campaigns-and-actors",
            "date": "2020-12-21",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "Russian cyber attack campaigns and actors",
            "categories": [
                "WellMail",
                "elf.wellmess",
                "Agent.BTZ",
                "BlackEnergy",
                "EternalPetya",
                "Havex RAT",
                "Industroyer",
                "Ryuk",
                "Triton",
                "WellMess"
            ]
        },
        {
            "data_url": "https://pylos.co/2020/11/04/the-enigmatic-energetic-bear/",
            "date": "2020-11-04",
            "organization": "Stranded on Pylos Blog",
            "author": "Joe Slowik",
            "title": "The Enigmatic Energetic Bear",
            "categories": [
                "EternalPetya",
                "Havex RAT"
            ]
        },
        {
            "data_url": "https://www.riskint.blog/post/revisited-fancy-bear-s-new-faces-and-sandworms-too",
            "date": "2020-10-19",
            "organization": "Riskint Blog",
            "author": "Curtis",
            "title": "Revisited: Fancy Bear's New Faces...and Sandworms' too",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "Industroyer",
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://www.gov.uk/government/news/uk-exposes-series-of-russian-cyber-attacks-against-olympic-and-paralympic-games",
            "date": "2020-10-19",
            "organization": "UK Government",
            "author": "ForeignCommonwealth & Development Office",
            "title": "UK exposes series of Russian cyber attacks against Olympic and Paralympic Games",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "EternalPetya",
                "Industroyer"
            ]
        },
        {
            "data_url": "https://www.cyberscoop.com/russian-hackers-notpetya-charges-gru/",
            "date": "2020-10-19",
            "organization": "CyberScoop",
            "author": "Tim Starks",
            "title": "US charges Russian GRU officers for NotPetya, other major hacks",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/us-indicts-sandworm-hackers-russia-cyberwar-unit/",
            "date": "2020-10-19",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "US Indicts Sandworm, Russia's Most Destructive Cyberwar Unit",
            "categories": [
                "EternalPetya",
                "Olympic Destroyer"
            ]
        },
        {
            "data_url": "https://aguinet.github.io//blog/2020/08/29/miasm-bootloader.html",
            "date": "2020-08-29",
            "organization": "Aguinet",
            "author": "Adrien Guinet",
            "title": "Emulating NotPetya bootloader with Miasm",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.atlanticcouncil.org/wp-content/uploads/2020/07/Breaking-trust-Shades-of-crisis-across-an-insecure-software-supply-chain.pdf",
            "date": "2020-07-29",
            "organization": "Atlantic Council",
            "author": "Trey Herr",
            "title": "BREAKING TRUST: Shades of Crisis Across an Insecure Software Supply Chain",
            "categories": [
                "EternalPetya",
                "GoldenSpy",
                "Kwampirs",
                "Stuxnet"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2020/97937/",
            "date": "2020-07-29",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2020",
            "categories": [
                "PhantomLance",
                "Dacls",
                "Penquin Turla",
                "elf.wellmess",
                "AppleJeus",
                "Dacls",
                "AcidBox",
                "Cobalt Strike",
                "Dacls",
                "EternalPetya",
                "Godlike12",
                "Olympic Destroyer",
                "PlugX",
                "shadowhammer",
                "ShadowPad",
                "Sinowal",
                "VHD Ransomware",
                "Volgmer",
                "WellMess",
                "X-Agent",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://gvnshtn.com/maersk-me-notpetya/",
            "date": "2020-06-21",
            "organization": "GVNSHTN",
            "author": "Gavin Ashton",
            "title": "Maersk, me & notPetya",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://securelist.com/big-threats-using-code-similarity-part-1/97239/",
            "date": "2020-06-09",
            "organization": "Kaspersky Labs",
            "author": "Costin Raiu",
            "title": "Looking at Big Threats Using Code Similarity. Part 1",
            "categories": [
                "Penquin Turla",
                "CCleaner Backdoor",
                "EternalPetya",
                "Regin",
                "WannaCryptor",
                "XTunnel"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/03/05/human-operated-ransomware-attacks-a-preventable-disaster/",
            "date": "2020-03-05",
            "organization": "Microsoft",
            "author": "Microsoft Threat Protection Intelligence Team",
            "title": "Human-operated ransomware attacks: A preventable disaster",
            "categories": [
                "Dharma",
                "DoppelPaymer",
                "Dridex",
                "EternalPetya",
                "Gandcrab",
                "Hermes",
                "LockerGoga",
                "MegaCortex",
                "MimiKatz",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam",
                "TrickBot",
                "WannaCryptor",
                "PARINACOTA"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-viking",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON VIKING",
            "categories": [
                "BlackEnergy",
                "EternalPetya",
                "GreyEnergy",
                "Industroyer",
                "KillDisk",
                "TeleBot",
                "TeleDoor"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2019/91897/",
            "date": "2019-08-01",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2019",
            "categories": [
                "ZooPark",
                "magecart",
                "POWERSTATS",
                "Chaperone",
                "COMpfun",
                "EternalPetya",
                "FinFisher RAT",
                "HawkEye Keylogger",
                "HOPLIGHT",
                "Microcin",
                "NjRAT",
                "Olympic Destroyer",
                "PLEAD",
                "RokRAT",
                "Triton",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/10/11/new-telebots-backdoor-linking-industroyer-notpetya/",
            "date": "2018-10-11",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "New TeleBots backdoor: First evidence linking Industroyer to NotPetya",
            "categories": [
                "Exaramel",
                "EternalPetya",
                "Exaramel",
                "Industroyer"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/",
            "date": "2018-08-22",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "The Untold Story of NotPetya, the Most Devastating Cyberattack in History",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.washingtonpost.com/world/national-security/russian-military-was-behind-notpetya-cyberattack-in-ukraine-cia-concludes/2018/01/12/048d8506-f7ca-11e7-b34a-b85626af34ef_story.html",
            "date": "2018-01-13",
            "organization": "The Washington Post",
            "author": "Ellen Nakashima",
            "title": "Russian military was behind \u2018NotPetya\u2019 cyberattack in Ukraine, CIA concludes",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://labsblog.f-secure.com/2017/10/27/the-big-difference-with-bad-rabbit/",
            "date": "2017-10-27",
            "organization": "F-Secure",
            "author": "F-Secure Global",
            "title": "The big difference with Bad Rabbit",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/10/backswing-pulling-a-badrabbit-out-of-a-hat.html",
            "date": "2017-10-26",
            "organization": "FireEye",
            "author": "Barry Vengerik",
            "title": "BACKSWING - Pulling a BADRABBIT Out of a Hat",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.reversinglabs.com/newsroom/news/reversinglabs-yara-rule-detects-badrabbit-encryption-routine-specifics.html",
            "date": "2017-10-26",
            "organization": "Reversing Labs",
            "author": "None",
            "title": "ReversingLabs' YARA rule detects BadRabbit encryption routine specifics",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.riskiq.com/blog/labs/badrabbit/",
            "date": "2017-10-25",
            "organization": "RiskIQ",
            "author": "Yonathan Klijnsma",
            "title": "Down the Rabbit Hole: Tracking the BadRabbit Ransomware to a Long Ongoing Campaign of Target Selection",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "http://www.intezer.com/notpetya-returns-bad-rabbit/",
            "date": "2017-10-24",
            "organization": "Intezer",
            "author": "Jay Rosenberg",
            "title": "NotPetya Returns as Bad Rabbit",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/10/24/kiev-metro-hit-new-variant-infamous-diskcoder-ransomware/?utm_content=buffer8ffe4&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer",
            "date": "2017-10-24",
            "organization": "ESET Research",
            "author": "Editor",
            "title": "Kiev metro hit with a new variant of the infamous Diskcoder ransomware",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/10/bad-rabbit.html",
            "date": "2017-10-24",
            "organization": "Cisco Talos",
            "author": "Nick Biasini",
            "title": "Threat Spotlight: Follow the Bad Rabbit",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/10/24/bad-rabbit-not-petya-back/",
            "date": "2017-10-24",
            "organization": "ESET Research",
            "author": "Marc-Etienne M.L\u00e9veill\u00e9",
            "title": "Bad Rabbit: Not\u2011Petya is back with improved ransomware",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://securelist.com/bad-rabbit-ransomware/82851/",
            "date": "2017-10-24",
            "organization": "Kaspersky Labs",
            "author": "Orkhan Mamedov",
            "title": "Bad Rabbit ransomware",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/badrabbit-ransomware-notpetya-russia-ukraine/",
            "date": "2017-10-24",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "New Ransomware Linked to NotPetya Sweeps Russia and Ukraine",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2017/september/eternalglue-part-one-rebuilding-notpetya-to-assess-real-world-resilience/",
            "date": "2017-09-19",
            "organization": "NCC Group",
            "author": "Ollie Whitehouse",
            "title": "EternalGlue part one: Rebuilding NotPetya to assess real-world resilience",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/10/24/bad-rabbit-not-petya-back",
            "date": "2017-08-24",
            "organization": "ESET Research",
            "author": "Marc-Etienne M.L\u00e9veill\u00e9",
            "title": "Bad Rabbit: Not\u2011Petya is back with improved ransomware",
            "categories": [
                "EternalPetya",
                "Sandworm"
            ]
        },
        {
            "data_url": "https://threatpost.com/ukrainian-man-arrested-charged-in-notpetya-distribution/127391/",
            "date": "2017-08-11",
            "organization": "Threatpost",
            "author": "Tom Spring",
            "title": "Ukrainian Man Arrested, Charged in NotPetya Distribution",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/cybercrime/2017/07/keeping-up-with-the-petyas-demystifying-the-malware-family/",
            "date": "2017-07-14",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Keeping up with the Petyas: Demystifying the malware family",
            "categories": [
                "EternalPetya",
                "GoldenEye",
                "PetrWrap",
                "Petya"
            ]
        },
        {
            "data_url": "https://securelist.com/in-expetrpetyas-shadow-fakecry-ransomware-wave-hits-ukraine/78973/",
            "date": "2017-07-04",
            "organization": "Kaspersky",
            "author": "Anton Ivanov",
            "title": "In ExPetr/Petya\u2019s shadow, FakeCry ransomware wave hits Ukraine",
            "categories": [
                "EternalPetya",
                "FakeCry"
            ]
        },
        {
            "data_url": "https://www.theguardian.com/technology/2017/jul/03/notpetya-malware-attacks-ukraine-warrant-retaliation-nato-researcher-tomas-minarik",
            "date": "2017-07-03",
            "organization": "The Guardian",
            "author": "Alex Hern",
            "title": "'NotPetya' malware attacks could warrant retaliation, says Nato affiliated-researcher",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.gdatasoftware.com/blog/2017/07/29859-who-is-behind-petna",
            "date": "2017-07-03",
            "organization": "G Data",
            "author": "G Data",
            "title": "Who is behind Petna?",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/petrwrap-technical-analysis-part-2-further-findings-and-potential-for-mbr-recovery/",
            "date": "2017-07-03",
            "organization": "CrowdStrike",
            "author": "Shaun Hurley",
            "title": "NotPetya Technical Analysis Part II: Further Findings and Potential for MBR Recovery",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/06/30/telebots-back-supply-chain-attacks-against-ukraine/",
            "date": "2017-06-30",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "TeleBots are back: Supply\u2011chain attacks against Ukraine",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2017/06/eternalpetya-yet-another-stolen-piece-package/",
            "date": "2017-06-30",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "EternalPetya \u2013 yet another stolen piece in the package?",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://securelist.com/from-blackenergy-to-expetr/78937/",
            "date": "2017-06-30",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "From BlackEnergy to ExPetr",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://blogs.technet.microsoft.com/mmpc/2017/06/29/windows-10-platform-resilience-against-the-petya-ransomware-attack/",
            "date": "2017-06-29",
            "organization": "Microsoft",
            "author": "Microsoft Defender ATP Research Team",
            "title": "Windows 10 platform resilience against the Petya ransomware attack",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2017/06/eternalpetya-lost-salsa20-key/",
            "date": "2017-06-29",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "EternalPetya and the lost Salsa20 key",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/ransomware-attacks-continue-in-ukraine-with-mysterious-wannacry-clone/",
            "date": "2017-06-29",
            "organization": "Bleeping Computer",
            "author": "Catalin Cimpanu",
            "title": "Ransomware Attacks Continue in Ukraine with Mysterious WannaCry Clone",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "http://blog.erratasec.com/2017/06/nonpetya-no-evidence-it-was-smokescreen.html",
            "date": "2017-06-29",
            "organization": "",
            "author": "Robert Graham",
            "title": "NonPetya: no evidence it was a \"smokescreen\"",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://tisiphone.net/2017/06/28/why-notpetya-kept-me-awake-you-should-worry-too/",
            "date": "2017-06-28",
            "organization": "",
            "author": "hacks4pancakes",
            "title": "Why NotPetya Kept Me Awake (& You Should Worry Too)",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://securelist.com/expetrpetyanotpetya-is-a-wiper-not-ransomware/78902/",
            "date": "2017-06-28",
            "organization": "Kaspersky Labs",
            "author": "Anton Ivanov",
            "title": "ExPetr/Petya/NotPetya is a Wiper, Not Ransomware",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/fast-spreading-petrwrap-ransomware-attack-combines-eternalblue-exploit-credential-stealing/",
            "date": "2017-06-28",
            "organization": "CrowdStrike",
            "author": "Falcon Intelligence Team",
            "title": "CrowdStrike Protects Against NotPetya Attack",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://securelist.com/schroedingers-petya/78870/",
            "date": "2017-06-27",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Schroedinger\u2019s Pet(ya)",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/forums/diary/Checking+out+the+new+Petya+variant/22562/",
            "date": "2017-06-27",
            "organization": "SANS",
            "author": "Brad Duncan",
            "title": "Checking out the new Petya variant",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://medium.com/@thegrugq/pnyetya-yet-another-ransomware-outbreak-59afd1ee89d4",
            "date": "2017-06-27",
            "organization": "Medium thegrugq",
            "author": "thegrugq",
            "title": "Pnyetya: Yet Another Ransomware Outbreak",
            "categories": [
                "EternalPetya"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2017/06/27/new-ransomware-attack-hits-ukraine",
            "date": "2017-06-27",
            "organization": "ESET Research",
            "author": "Editor",
            "title": "New WannaCryptor\u2011like ransomware attack hits globally: All you need to know",
            "categories": [
                "EternalPetya",
                "Sandworm"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0034",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Sandworm Team",
            "categories": [
                "CyclopsBlink",
                "Exaramel",
                "BlackEnergy",
                "EternalPetya",
                "Exaramel",
                "GreyEnergy",
                "KillDisk",
                "MimiKatz",
                "Olympic Destroyer",
                "Sandworm"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "notpetya",
            "procedure_code": "s0368",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0368",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/003",
                    "technique_name": "valid accounts : local accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a local account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
                    "procedure_description": "notpetya can use valid credentials with psexec or wmic to spread itself to remote systems.[8][9]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "notpetya creates a task to reboot the system one hour after infection.[118]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "notpetya can use psexec to help propagate itself across a network.[39][40]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "notpetya can use wmic to help propagate itself across a network.[91][92]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "notpetya creates a task to reboot the system one hour after infection.[118]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/003",
                    "technique_name": "valid accounts : local accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a local account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
                    "procedure_description": "notpetya can use valid credentials with psexec or wmic to spread itself to remote systems.[8][9]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "notpetya creates a task to reboot the system one hour after infection.[118]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/003",
                    "technique_name": "valid accounts : local accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a local account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
                    "procedure_description": "notpetya can use valid credentials with psexec or wmic to spread itself to remote systems.[8][9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/001",
                    "technique_name": "indicator removal : clear windows event logs",
                    "technique_description": "adversaries may clear windows event logs to hide the activity of an intrusion. windows event logs are a record of a computer's alerts and notifications. there are three system-defined sources of events: system, application, and security, with five event types: error, warning, information, success audit, and failure audit.",
                    "procedure_description": "notpetya uses wevtutil to clear the windows event logs.[24][25]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "notpetya drops psexec with the filename dllhost.dat.[23]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "notpetya uses rundll32.exe to install itself on remote systems when accessed via psexec or wmic.[71]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/003",
                    "technique_name": "valid accounts : local accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a local account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service.",
                    "procedure_description": "notpetya can use valid credentials with psexec or wmic to spread itself to remote systems.[8][9]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "notpetya contains a modified version of mimikatz to help gather credentials that are later used for lateral movement.[63][64][59]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "notpetya searches for files ending with dozens of different file extensions prior to encryption.[208]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "notpetya determines if specific antivirus programs are running on an infected host machine.[74]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1210",
                    "technique_link": "https://attack.mitre.org/techniques/T1210",
                    "technique_name": "exploitation of remote services",
                    "technique_description": "adversaries may exploit remote services to gain unauthorized access to internal systems once inside of a network. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code.\u00a0a common goal for post-compromise exploitation of remote services is for lateral movement to enable access to a remote system.",
                    "procedure_description": "notpetya can use two exploits in smbv1, eternalblue and eternalromance, to spread itself to other remote systems on the network.[27][28][29]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "notpetya can use psexec, which interacts with the admin$ network share to execute commands on remote systems.[39][40][41]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "notpetya encrypts user files and disk structures like the mbr with 2048-bit rsa.[60][3][61]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1529",
                    "technique_link": "https://attack.mitre.org/techniques/T1529",
                    "technique_name": "system shutdown/reboot",
                    "technique_description": "adversaries may shutdown/reboot systems to interrupt access to, or aid in the destruction of, those systems. operating systems may contain commands to initiate a shutdown/reboot of a machine or network device. in some cases, these commands may also be used to initiate a shutdown/reboot of a remote computer or network device via network device cli (e.g. reload).",
                    "procedure_description": "notpetya will reboot the system one hour after infection.[3][16]"
                }
            ]
        }
    ]
};