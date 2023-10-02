var threatdata = {
    "name": "More_eggs",
    "alias": "More_eggs, SpicyOmelette, Terra Loader, SKID",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2023-04-20",
    "all_data": {
        "tool": "More_eggs",
        "names": [
            {
                "name": "More_eggs"
            },
            {
                "name": "SpicyOmelette"
            },
            {
                "name": "Terra Loader"
            },
            {
                "name": "SKID"
            }
        ],
        "description": "More_eggs is a JavaScript backdoor used by the Cobalt group. It attempts to connect to its C&C server and retrieve tasks to carry out, some of which are:\n- d&exec = download and execute PE file\n- gtfo = delete files/startup entries and terminate\n- more_eggs = download additional/new scripts\n- more_onion = run new script and terminate current script\n- more_power = run command shell commands",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://securityintelligence.com/posts/more_eggs-anyone-threat-actor-itg08-strikes-again/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/backdoor-carrying-emails-set-sights-on-russian-speaking-businesses/",
            "https://reaqta.com/2018/03/spear-phishing-campaign-leveraging-msxsl/",
            "https://www.secureworks.com/blog/cybercriminals-increasingly-trying-to-ensnare-the-big-financial-fish",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/cobalt-spam-runs-use-macros-cve-2017-8759-exploit/",
            "https://blog.talosintelligence.com/2018/07/multiple-cobalt-personality-disorder.html",
            "https://www.proofpoint.com/us/threat-insight/post/fake-jobs-campaigns-delivering-moreeggs-backdoor-fake-job-offers",
            "https://asert.arbornetworks.com/double-the-infection-double-the-fun/",
            "https://quointelligence.eu/2018/11/golden-chickens-uncovering-a-malware-as-a-service-maas-provider-and-two-new-threat-actors-using/",
            "https://www.esentire.com/blog/hackers-spearphish-corporate-hiring-managers-with-poisoned-resumes-infecting-them-with-the-more-eggs-malware"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0284/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.more_eggs"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:More_eggs"
        ],
        "uuid": "a23df665-46df-4134-8375-0b05c14f617b",
        "last-card-change": "2022-05-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "more_eggs",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.securonix.com/blog/threat-labs-security-advisory-new-ocxharvester-attack-campaign-leverages-modernized-more_eggs-suite/",
            "date": "2023-04-20",
            "organization": "Securonix",
            "author": "Den Iyzvyk",
            "title": "New OCX#HARVESTER Attack Campaign Leverages a Modernized More_eggs Suite to Target Victims",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://sec0wn.blogspot.com/2023/03/how-do-you-like-dem-eggs-i-like-mine.html?m=1",
            "date": "2023-03-10",
            "organization": "Security0wnage",
            "author": "Security0wnage",
            "title": "How Do You Like Dem Eggs? I like Mine Scrambled, Really Scrambled - A Look at Recent more_eggs Samples",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://www.esentire.com/web-native-pages/unmasking-venom-spider",
            "date": "2023-01-24",
            "organization": "eSentire",
            "author": "Joe Stewart",
            "title": "Unmasking Venom Spider",
            "categories": [
                "More_eggs",
                "TerraPreter",
                "TerraLoader",
                "VenomLNK"
            ]
        },
        {
            "data_url": "https://expel.com/blog/more-eggs-and-some-linkedin-resume-spearphishing",
            "date": "2022-08-25",
            "organization": "Expel",
            "author": "Kyle Pellett",
            "title": "MORE_EGGS and Some LinkedIn Resum\u00e9 Spearphishing",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/hackers-spearphish-corporate-hiring-managers-with-poisoned-resumes-infecting-them-with-the-more-eggs-malware",
            "date": "2022-04-21",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "Hackers Spearphish Corporate Hiring Managers with Poisoned Resumes, Infecting Them with the More_Eggs Malware, Warns eSentire",
            "categories": [
                "More_eggs",
                "TerraLoader",
                "VenomLNK"
            ]
        },
        {
            "data_url": "https://www.esentire.com/security-advisories/hackers-spearphish-professionals-on-linkedin-with-fake-job-offers-infecting-them-with-malware-warns-esentire",
            "date": "2021-04-05",
            "organization": "eSentire",
            "author": "eSentire",
            "title": "Hackers Spearphish Professionals on LinkedIn with Fake Job Offers, Infecting them with Malware, Warns eSentire",
            "categories": [
                "More_eggs",
                "TerraPreter",
                "TerraLoader",
                "VenomLNK"
            ]
        },
        {
            "data_url": "https://twitter.com/Arkbird_SOLG/status/1301536930069278727",
            "date": "2020-09-03",
            "organization": "Twitter (@Arkbird_SOLG)",
            "author": "Arkbird",
            "title": "Tweet on development in more_eggs",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://quointelligence.eu/2020/07/golden-chickens-evolution-of-the-maas/",
            "date": "2020-07-20",
            "organization": "",
            "author": "QuoIntelligence",
            "title": "Golden Chickens: Evolution Oof the MaaS",
            "categories": [
                "More_eggs",
                "TerraLoader",
                "TerraStealer",
                "VenomLNK"
            ]
        },
        {
            "data_url": "https://github.com/eset/malware-ioc/tree/master/evilnum",
            "date": "2020-07-10",
            "organization": "Github (eset)",
            "author": "Mat\u00edas Porolli",
            "title": "Evilnum\u2009\u2014\u2009Indicators of Compromise",
            "categories": [
                "EVILNUM",
                "More_eggs",
                "EVILNUM",
                "TerraStealer"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/07/09/more-evil-deep-look-evilnum-toolset/",
            "date": "2020-07-09",
            "organization": "ESET Research",
            "author": "Mat\u00edas Porolli",
            "title": "More evil: A deep look at Evilnum and its toolset",
            "categories": [
                "EVILNUM",
                "More_eggs",
                "EVILNUM",
                "TerraPreter",
                "TerraStealer",
                "TerraTV",
                "Evilnum"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/REXBtbnI2zXj4H3u6ofMMw",
            "date": "2020-06-04",
            "organization": "",
            "author": "Chianxin Virus Response Center",
            "title": "\u811a\u672c\u7cfb\u8d3c\u5bc7\u4e4b\u98ce\u5174\u8d77\uff0c\u4e70\u5356\u4f53\u7cfb\u582a\u6bd4\u52d2\u7d22\u8f6f\u4ef6",
            "categories": [
                "EVILNUM",
                "More_eggs"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/itg08-aka-fin6-partners-with-trickbot-gang-uses-anchor-framework/",
            "date": "2020-04-07",
            "organization": "SecurityIntelligence",
            "author": "Ole Villadsen",
            "title": "ITG08 (aka FIN6) Partners With TrickBot Gang, Uses Anchor Framework",
            "categories": [
                "More_eggs",
                "Anchor",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-kingswood",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD KINGSWOOD",
            "categories": [
                "More_eggs",
                "ATMSpitter",
                "Cobalt Strike",
                "CobInt",
                "MimiKatz",
                "Cobalt"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-kingswood",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD KINGSWOOD",
            "categories": [
                "More_eggs",
                "ATMSpitter",
                "Cobalt Strike",
                "CobInt",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/more_eggs-anyone-threat-actor-itg08-strikes-again/",
            "date": "2019-08-29",
            "organization": "Security Intelligence",
            "author": "Ole Villadsen",
            "title": "More_eggs, Anyone? Threat Actor ITG08 Strikes Again",
            "categories": [
                "More_eggs",
                "FIN6"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/files/News/CaseStudies/study/262/Bitdefender-WhitePaper-An-APT-Blueprint-Gaining-New-Visibility-into-Financial-Threats-interactive.pdf",
            "date": "2019-06-04",
            "organization": "Bitdefender",
            "author": "Bitdefender",
            "title": "An APT Blueprint: Gaining New Visibility into Financial Threats",
            "categories": [
                "More_eggs",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/fake-jobs-campaigns-delivering-moreeggs-backdoor-fake-job-offers",
            "date": "2019-02-21",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Insight Team",
            "title": "Fake Jobs: Campaigns Delivering More_eggs Backdoor via Fake Job Offers",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/software/S0284/",
            "date": "2018-10-17",
            "organization": "MITRE ATT&CK",
            "author": "MITRE",
            "title": "Software Description: More_eggs",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/cobalt-gang-2.0",
            "date": "2018-10-08",
            "organization": "Morphisec",
            "author": "Michael Gorelik",
            "title": "Cobalt Group 2.0",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/cybercriminals-increasingly-trying-to-ensnare-the-big-financial-fish",
            "date": "2018-09-27",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Cybercriminals Increasingly Trying to Ensnare the Big Financial Fish",
            "categories": [
                "More_eggs",
                "Cobalt"
            ]
        },
        {
            "data_url": "https://asert.arbornetworks.com/double-the-infection-double-the-fun/",
            "date": "2018-08-30",
            "organization": "NetScout",
            "author": "ASERT Team",
            "title": "Double the Infection, Double the Fun",
            "categories": [
                "More_eggs",
                "CobInt"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/07/multiple-cobalt-personality-disorder.html",
            "date": "2018-07-31",
            "organization": "Cisco Talos",
            "author": "Vanja Svajcer",
            "title": "Multiple Cobalt Personality Disorder",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://reaqta.com/2018/03/spear-phishing-campaign-leveraging-msxsl/",
            "date": "2018-03-02",
            "organization": "Reaqta",
            "author": "Reaqta",
            "title": "Spear-phishing campaign leveraging on MSXSL",
            "categories": [
                "More_eggs"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/cobalt-spam-runs-use-macros-cve-2017-8759-exploit/",
            "date": "2017-11-20",
            "organization": "Trend Micro",
            "author": "Ronnie Giagone",
            "title": "Cobalt Strikes Again: Spam Runs Use Macros and CVE-2017-8759 Exploit Against Russian Banks",
            "categories": [
                "More_eggs",
                "Cobalt"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/backdoor-carrying-emails-set-sights-on-russian-speaking-businesses/",
            "date": "2017-08-07",
            "organization": "Trend Micro",
            "author": "Lenart Bermejo",
            "title": "Backdoor-carrying Emails Set Sights on Russian-speaking Businesses",
            "categories": [
                "More_eggs"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "spicyomelette",
            "procedure_code": "s0646",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0646",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "spicyomelette has been distributed via emails containing a malicious link that appears to be a pdf document.[34]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "spicyomelette has the ability to execute arbitrary javascript code on a compromised host.[62]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "spicyomelette has been executed through malicious links within spearphishing emails.[25]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "spicyomelette has been signed with valid digital certificates.[65]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "spicyomelette can identify payment systems, payment gateways, and atm systems in compromised environments.[83]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518",
                    "technique_link": "https://attack.mitre.org/techniques/T1518",
                    "technique_name": "software discovery",
                    "technique_description": "adversaries may attempt to get a listing of software and software versions that are installed on a system or in a cloud environment. adversaries may use the information from software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "spicyomelette can enumerate running software on a targeted system.[32]"
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
                    "procedure_description": "spicyomelette can check for the presence of 29 different antivirus tools.[94]"
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
                    "procedure_description": "spicyomelette can identify the system name of a compromised host.[346]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "spicyomelette can identify the ip of a compromised system.[216]"
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
                    "procedure_description": "spicyomelette has collected data and other information from a compromised host.[173]"
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
                    "procedure_description": "spicyomelette can download malicious files from threat actor controlled aws url's.[424]"
                }
            ]
        },
        {
            "procedure_name": "more_eggs",
            "procedure_code": "s0284",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0284",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "more_eggs has used cmd.exe for execution.[224][225]"
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
                    "procedure_description": "more_eggs will decode malware components that are then dropped to the system.[151]"
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
                    "procedure_description": "more_eggs can remove itself from a system.[44][152]"
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
                    "procedure_description": "more_eggs's payload has been encrypted with a key that has the hostname and processor family information appended to the end.[218]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1553.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1553/002",
                    "technique_name": "subvert trust controls : code signing",
                    "technique_description": "adversaries may create, acquire, or steal code signing materials to sign their malware or tools. code signing provides a level of authenticity on a binary from the developer and a guarantee that the binary has not been tampered with.  the certificates used during an operation may be created, acquired, or stolen by the adversary.   unlike invalid code signature, this activity will result in a valid signature.",
                    "procedure_description": "more_eggs has used a signed binary shellcode loader and a signed dynamic link library (dll) to create a reverse shell.[31]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/010",
                    "technique_name": "system binary proxy execution : regsvr32",
                    "technique_description": "adversaries may abuse regsvr32.exe to proxy execution of malicious code. regsvr32.exe is a command-line program used to register and unregister object linking and embedding controls, including dynamic link libraries (dlls), on windows systems. the regsvr32.exe binary may also be signed by microsoft.",
                    "procedure_description": "more_eggs has used regsvr32.exe to execute the malicious dll.[26]"
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
                    "procedure_description": "more_eggs can obtain information on installed anti-malware programs.[67]"
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
                    "procedure_description": "more_eggs has the capability to gather the os version and computer name.[235][236]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "more_eggs has the capability to gather the ip address from the victim's machine.[145]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1016/001",
                    "technique_name": "system network configuration discovery : internet connection discovery",
                    "technique_description": "adversaries may check for internet connectivity on compromised systems. this may be performed during automated discovery and can be accomplished in numerous ways such as using ping, tracert, and get requests to websites.",
                    "procedure_description": "more_eggs has used http get requests to check internet connectivity.[7]"
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
                    "procedure_description": "more_eggs has the capability to gather the username from the victim's machine.[119][120]"
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
                    "procedure_description": "more_eggs uses https for c2.[67][214]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "more_eggs has used base91 encoding, along with encryption, for c2 communication.[56]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "more_eggs has used an rc4-based encryption method for its c2 communications.[92]"
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
                    "procedure_description": "more_eggs can download and launch additional payloads.[300][301]"
                }
            ]
        }
    ]
};