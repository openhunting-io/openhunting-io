var threatdata = {
    "name": "RokRAT",
    "alias": "RokRAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Credential stealer, Info stealer, Exfiltration, Downloader",
    "modified": "2023-06-21",
    "all_data": {
        "tool": "RokRAT",
        "names": [
            {
                "name": "RokRAT"
            }
        ],
        "description": "(Carbon Black) ROKRAT is a Remote Access Trojan (RAT). ROKRAT provides attackers with numerous capabilities to introduce additional tools and malware onto a network, exfiltrate data, harvest credentials, as well as capture screenshots of the victim system. The latest variants of ROKRAT use internet cloud solutions such as PCloud, Dropbox, and Yandex as a command and control (C2) channel.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Info stealer",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://www.carbonblack.com/2018/02/27/threat-analysis-rokrat-malware/",
            "http://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/002/191/original/Talos_RokRatWhitePaper.pdf",
            "http://blog.talosintelligence.com/2017/04/introducing-rokrat.html",
            "http://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html",
            "https://www.intezer.com/apt37-final1stspy-reaping-the-freemilk/",
            "http://blog.talosintelligence.com/2017/11/ROKRAT-Reloaded.html",
            "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2018/november/rokrat-analysis/",
            "https://research.checkpoint.com/2023/chain-reaction-rokrats-missing-link/",
            "https://threatmon.io/reverse-engineering-rokrat-a-closer-look-at-apt37s-onedrive-based-attack-vector/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0240/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rokrat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ROKRAT"
        ],
        "uuid": "1339c5d9-ed14-42ef-b70d-58de896c5d42",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RokRAT",
            "malware_alias": "DOGCALL",
            "malware": "win.rokrat",
            "last_update": "2023-10-10 14:37:44",
            "tags": [
                "RokRat",
                "RokRAT",
                "APT37",
                "RAT",
                "APT",
                "GOLDBACKDOOR"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "cc96ba45dd2b6a6d7aa300d77e49c095",
                        "timestamp": "2023-10-10 14:37:44"
                    },
                    {
                        "value": "fd67ad03cc71d3397f962896365ed510",
                        "timestamp": "2023-09-13 15:43:07"
                    },
                    {
                        "value": "44ba46dfff78bc62a3b2619d308ca40c",
                        "timestamp": "2023-07-05 07:21:18"
                    },
                    {
                        "value": "71dbebb8a31ea3de0115851bb15fd2bc",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "fbaab65888859d25437e8803a7139633",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "1011dc2d8450da88011b890ea81c9083",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "7095811df4cb1ee4135ce605af7f163f",
                        "timestamp": "2023-05-24 18:07:28"
                    },
                    {
                        "value": "5f9e0afb3503d909984b3b30d038bdc5",
                        "timestamp": "2023-05-24 18:07:28"
                    },
                    {
                        "value": "487769a19f032e981f33023b2cb7fe10",
                        "timestamp": "2023-05-15 15:04:40"
                    },
                    {
                        "value": "74e3d84492845067a0da6cfa00c064eb",
                        "timestamp": "2023-05-15 15:04:40"
                    },
                    {
                        "value": "8d7f38cbdca2fc4d8f6ea451398ca378",
                        "timestamp": "2023-05-15 15:04:40"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-10-10 14:37:44",
    "file_name": "rokrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securityintelligence.com/posts/itg10-targeting-south-korean-entities/",
            "date": "2023-06-06",
            "organization": "Security Intelligence",
            "author": "Joshua Chung",
            "title": "ITG10 Likely Targeting South Korean Entities of Interest to the Democratic People\u2019s Republic of Korea (DPRK)",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2023/chain-reaction-rokrats-missing-link/",
            "date": "2023-05-01",
            "organization": "Check Point Research",
            "author": "Check Point Research",
            "title": "Chain Reaction: RokRAT's Missing Link",
            "categories": [
                "Amadey",
                "RokRAT"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/51751/",
            "date": "2023-04-26",
            "organization": "AhnLab",
            "author": "bghjmun",
            "title": "RokRAT Malware Distributed Through LNK Files (*.lnk): RedEyes (ScarCruft)",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "https://medium.com/s2wblog/scarcruft-bolsters-arsenal-for-targeting-individual-android-devices-97d2bcef4ab",
            "date": "2023-03-23",
            "organization": "Medium s2wlab",
            "author": "BLKSMTH",
            "title": "Scarcruft Bolsters Arsenal for targeting individual Android devices",
            "categories": [
                "RambleOn",
                "RokRAT"
            ]
        },
        {
            "data_url": "https://twitter.com/ESETresearch/status/1575103839115804672",
            "date": "2022-09-28",
            "organization": "Twitter (@ESETresearch)",
            "author": "ESET Research",
            "title": "Twitter Thread linking CloudMensis to RokRAT / ScarCruft",
            "categories": [
                "CloudMensis",
                "RokRAT"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/moldypisces/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Moldy Pisces",
            "categories": [
                "RokRAT",
                "APT37"
            ]
        },
        {
            "data_url": "https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/cyber-year-in-retrospect/yir-cyber-threats-annex-download.pdf",
            "date": "2022-04-28",
            "organization": "PWC",
            "author": "PWC UK",
            "title": "Cyber Threats 2021: A Year in Retrospect (Annex)",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "PlugX",
                "RokRAT",
                "Inception Framework",
                "Red Menshen"
            ]
        },
        {
            "data_url": "https://www.volexity.com/blog/2021/08/24/north-korean-bluelight-special-inkysquid-deploys-rokrat/",
            "date": "2021-08-24",
            "organization": "Volexity",
            "author": "Damien Cash",
            "title": "North Korean BLUELIGHT Special: InkySquid Deploys RokRAT",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/matryoshka-variant-of-rokrat-apt37-scarcruft-69774ea7bf48",
            "date": "2021-07-14",
            "organization": "Medium s2wlab",
            "author": "Jaeki Kim",
            "title": "Matryoshka : Variant of ROKRAT, APT37 (Scarcruft)",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/antisandbox-techniques/",
            "date": "2021-02-18",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "https://www.ptsecurity.com/ww-en/analytics/antisandbox-techniques/",
            "categories": [
                "Poet RAT",
                "Gravity RAT",
                "Ketrican",
                "Okrum",
                "OopsIE",
                "Remcos",
                "RogueRobinNET",
                "RokRAT",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2021/01/retrohunting-apt37-north-korean-apt-used-vba-self-decode-technique-to-inject-rokrat/",
            "date": "2021-01-06",
            "organization": "Malwarebytes",
            "author": "Hossein Jazi",
            "title": "Retrohunting APT37: North Korean APT used VBA self decode technique to inject RokRat",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www.ibm.com/downloads/cas/Z81AVOY7",
            "date": "2020-06-16",
            "organization": "IBM",
            "author": "IBM Security X-Force\u00ae Incident Responseand Intelligence Services (IRIS)",
            "title": "Cloud ThreatLandscape Report 2020",
            "categories": [
                "QNAPCrypt",
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www.picussecurity.com/blog/picus-10-critical-mitre-attck-techniques-t1055-process-injection",
            "date": "2020-05-21",
            "organization": "PICUS Security",
            "author": "S\u00fcleyman \u00d6zarslan",
            "title": "T1055 Process Injection",
            "categories": [
                "BlackEnergy",
                "Cardinal RAT",
                "Downdelph",
                "Emotet",
                "Kazuar",
                "RokRAT",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://github.com/ssp4rk/slides/blob/master/2019SAS_Behind_of_the_Mask_of_ScarCruft.pdf",
            "date": "2020-03-30",
            "organization": "Kaspersky SAS",
            "author": "Seongsu Park",
            "title": "Behind the Mask of ScarCruft",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/assets/cyber-threats-2019-retrospect.pdf",
            "date": "2020-03-03",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2019:A Year in Retrospect",
            "categories": [
                "KevDroid",
                "MESSAGETAP",
                "magecart",
                "AndroMut",
                "Cobalt Strike",
                "CobInt",
                "Crimson RAT",
                "DNSpionage",
                "Dridex",
                "Dtrack",
                "Emotet",
                "FlawedAmmyy",
                "FlawedGrace",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "GlobeImposter",
                "Grateful POS",
                "ISFB",
                "Kazuar",
                "LockerGoga",
                "Nokki",
                "QakBot",
                "Ramnit",
                "REvil",
                "Rifdoor",
                "RokRAT",
                "Ryuk",
                "shadowhammer",
                "ShadowPad",
                "Shifu",
                "Skipper",
                "StoneDrill",
                "Stuxnet",
                "TrickBot",
                "Winnti",
                "ZeroCleare",
                "APT41",
                "MUSTANG PANDA",
                "Sea Turtle"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/ressources/Lexfo-WhitePaper-The_Lazarus_Constellation.pdf",
            "date": "2020-02-19",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "The Lazarus Constellation A study on North Korean malware",
            "categories": [
                "FastCash",
                "AppleJeus",
                "BADCALL",
                "Bankshot",
                "Brambul",
                "Dtrack",
                "Duuzer",
                "DYEPACK",
                "ELECTRICFISH",
                "HARDRAIN",
                "Hermes",
                "HOPLIGHT",
                "Joanap",
                "KEYMARBLE",
                "Kimsuky",
                "MimiKatz",
                "MyDoom",
                "NACHOCHEESE",
                "NavRAT",
                "PowerRatankba",
                "RokRAT",
                "Sierra(Alfa,Bravo, ...)",
                "Volgmer",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://kindredsec.wordpress.com/2019/08/12/an-overview-of-public-platform-c2s/",
            "date": "2019-08-12",
            "organization": "Kindred Security",
            "author": "Kindred Security",
            "title": "An Overview of Public Platform C2\u2019s",
            "categories": [
                "HTML5 Encoding",
                "LOWBALL",
                "Makadocs",
                "MiniDuke",
                "RogueRobinNET",
                "RokRAT"
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
            "data_url": "https://securelist.com/scarcruft-continues-to-evolve-introduces-bluetooth-harvester/90729/",
            "date": "2019-05-13",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "ScarCruft continues to evolve, introduces Bluetooth harvester",
            "categories": [
                "Konni",
                "RokRAT",
                "UACMe",
                "APT37"
            ]
        },
        {
            "data_url": "http://v3lo.tistory.com/24",
            "date": "2018-11-16",
            "organization": "",
            "author": "Kim Yejun",
            "title": "Return to ROKRAT!! (feat. FAAAA...Sad...)",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www.intezer.com/apt37-final1stspy-reaping-the-freemilk/",
            "date": "2018-10-03",
            "organization": "Intezer",
            "author": "Jay Rosenberg",
            "title": "APT37: Final1stspy Reaping the FreeMilk",
            "categories": [
                "Final1stSpy",
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/2018/02/27/threat-analysis-rokrat-malware/",
            "date": "2018-02-27",
            "organization": "VMWare Carbon Black",
            "author": "Jared Myers",
            "title": "Threat Analysis: ROKRAT Malware",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf",
            "date": "2018-02-20",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT37 (REAPER) The Overlooked North Korean Actor",
            "categories": [
                "PoorWeb",
                "RokRAT",
                "APT37"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html",
            "date": "2018-01-16",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "Korea In The Crosshairs",
            "categories": [
                "Freenki Loader",
                "RokRAT",
                "APT37"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html",
            "date": "2018-01-16",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "Korea In The Crosshairs",
            "categories": [
                "Freenki Loader",
                "PoohMilk Loader",
                "RokRAT",
                "APT37"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/11/ROKRAT-Reloaded.html",
            "date": "2017-11-28",
            "organization": "Cisco",
            "author": "Warren Mercer",
            "title": "ROKRAT Reloaded",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/04/introducing-rokrat.html",
            "date": "2017-04-03",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "Introducing ROKRAT",
            "categories": [
                "RokRAT"
            ]
        },
        {
            "data_url": "http://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/002/191/original/Talos_RokRatWhitePaper.pdf",
            "date": "2017",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "Introducing ROKRAT",
            "categories": [
                "RokRAT"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "rokrat",
            "procedure_code": "s0240",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0240",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "rokrat has been delivered via spearphishing emails that contain a malicious hangul office or microsoft word document.[197]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "rokrat has used visual basic for execution.[136]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "rokrat can use a variety of api calls to execute shellcode.[147]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "rokrat has relied upon users clicking on a malicious attachment delivered through spearphishing.[205]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "rokrat can use virtualalloc, writeprocessmemory, and then createremotethread to execute shellcode within the address space of notepad.exe.[53]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1622",
                    "technique_link": "https://attack.mitre.org/techniques/T1622",
                    "technique_name": "debugger evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid debuggers. debuggers are typically used by defenders to trace and/or analyze the execution of potential malware payloads.",
                    "procedure_description": "rokrat can check for debugging tools.[12][13][14]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "rokrat can decrypt strings using the victim's hostname as the key.[201][202]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1480.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1480/001",
                    "technique_name": "execution guardrails : environmental keying",
                    "technique_description": "adversaries may environmentally key payloads or other features of malware to evade defenses and constraint execution to a specific target environment. environmental keying uses cryptography to constrain execution or actions based on adversary supplied environment specific conditions that are expected to be present on the target. environmental keying is an implementation of execution guardrails that utilizes cryptographic techniques for deriving encryption/decryption keys from specific types of values in a given computing environment.",
                    "procedure_description": "rokrat relies on a specific victim hostname to execute and decrypt important strings.[12]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "rokrat can request to delete files.[204]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "rokrat can modify the hkey_current_user\\software\\microsoft\\office\\ registry key so it can bypass the vb object model (vbom) on a compromised host.[138]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "rokrat can encrypt data prior to exfiltration by using an rsa public key.[35][282]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "rokrat can use virtualalloc, writeprocessmemory, and then createremotethread to execute shellcode within the address space of notepad.exe.[53]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "rokrat can check for vmware-related files and dlls related to sandboxes.[48][49][50]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "rokrat can steal credentials stored in web browsers by querying the sqlite database.[79]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/004",
                    "technique_name": "credentials from password stores : windows credential manager",
                    "technique_description": "adversaries may acquire credentials from the windows credential manager. the credential manager stores credentials for signing into websites, applications, and/or devices that request authentication through ntlm or kerberos in credential lockers (previously known as windows vaults).",
                    "procedure_description": "rokrat can steal credentials by leveraging the windows vault mechanism.[14]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "rokrat can use  setwindowshookex and getkeynametext to capture keystrokes.[157][158]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "rokrat can use  the getforegroundwindow and getwindowtext apis to discover where the user is typing.[29]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1622",
                    "technique_link": "https://attack.mitre.org/techniques/T1622",
                    "technique_name": "debugger evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid debuggers. debuggers are typically used by defenders to trace and/or analyze the execution of potential malware payloads.",
                    "procedure_description": "rokrat can check for debugging tools.[12][13][14]"
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
                    "procedure_description": "rokrat has the ability to gather a list of files and directories on the infected system.[260][261][262]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "rokrat can list the current running processes on the system.[219][220]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "rokrat can access the hklm\\system\\currentcontrolset\\services\\mssmbios\\data\\smbiosdata registry key to obtain the system manufacturer value to identify the machine type.[80]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "rokrat can gather the hostname and the os version to ensure it doesn\u2019t run on a windows xp or windows server 2003 systems.[314][315][316][317][318][319]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "rokrat can collect the username from a compromised host.[161]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "rokrat can check for vmware-related files and dlls related to sandboxes.[48][49][50]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "rokrat has an audio capture and eavesdropping module.[35]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "rokrat can extract clipboard data from a compromised host.[40]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "rokrat can collect host data and specific file types.[160][161][162]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "rokrat can use  setwindowshookex and getkeynametext to capture keystrokes.[157][158]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "rokrat can capture screenshots of the infected system using the gdi32 library.[144][145][146][147][148]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "rokrat can use http and https for command and control communication.[289][290][291]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "rokrat can retrieve additional malicious payloads from its c2 server.[389][390][30][391]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "rokrat has used legitimate social networking sites and cloud platforms (including but not limited to twitter, yandex, dropbox, and mediafire) for c2 communications.[42][43][44]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "rokrat can send collected files back over same c2 channel.[109]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1567.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1567/002",
                    "technique_name": "exfiltration over web service : exfiltration to cloud storage",
                    "technique_description": "adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel. cloud storage services allow for the storage, edit, and retrieval of data from a remote cloud storage server over the internet.",
                    "procedure_description": "rokrat can send collected data to cloud storage services such as pcloud.[24][25]"
                }
            ]
        },
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};