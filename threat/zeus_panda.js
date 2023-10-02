var threatdata = {
    "name": "Zeus Panda",
    "alias": "Zeus Panda, ZeusPanda, PandaBanker",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer, Downloader, Botnet",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Zeus Panda",
        "names": [
            {
                "name": "Zeus Panda"
            },
            {
                "name": "ZeusPanda"
            },
            {
                "name": "PandaBanker"
            }
        ],
        "description": "(Proofpoint) Banking Trojans work by injecting code into web pages as they are viewed on infected machines, allowing the malware to harvest banking credentials and credit card information as victims interact with legitimate sites. Most often, the injects -- the code that actually performs the man-in-the-browser attacks -- are configured for region-specific banking sites. More recently, we have seen injects for online payment sites, casinos, retailers, and more appearing in banking Trojan campaigns.\n\nSince November -- a period of time that includes Thanksgiving, Black Friday, Cyber Monday and now leading up to Christmas -- we have observed Zeus Panda banking Trojan campaigns that have an increasing focus on non-banking targets with an extensive list of injects clearly designed to capitalize on holiday shopping and activities.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer",
            "Downloader",
            "Botnet"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/zeus-panda-banking-trojan-targets-online-holiday-shoppers",
            "https://github.com/JR0driguezB/malware_configs/tree/master/PandaBanker",
            "https://cyber.wtf/2017/02/03/zeus-panda-webinjects-a-case-study/",
            "https://cyber.wtf/2017/03/13/zeus-panda-webinjects-dont-trust-your-eyes/",
            "https://www.arbornetworks.com/blog/asert/panda-bankers-future-dga/",
            "https://f5.com/labs/articles/threat-intelligence/malware/panda-malware-broadens-targets-to-cryptocurrency-exchanges-and-social-media",
            "https://www.proofpoint.com/tw/threat-insight/post/panda-banker-new-banking-trojan-hits-the-market",
            "https://www.spamhaus.org/news/article/771/",
            "https://www.vkremez.com/2018/08/lets-learn-dissecting-panda-banker.html",
            "http://blog.talosintelligence.com/2017/11/zeus-panda-campaign.html",
            "https://blogs.forcepoint.com/security-labs/zeus-panda-delivered-sundown-targets-uk-banks",
            "https://www.arbornetworks.com/blog/asert/panda-banker-zeros-in-on-japanese-targets/",
            "https://cyberwtf.files.wordpress.com/2017/07/panda-whitepaper.pdf",
            "https://www.arbornetworks.com/blog/asert/let-pandas-zeus-zeus-zeus-zeus/",
            "http://www.vkremez.com/2018/01/lets-learn-dissect-panda-banking.html",
            "https://en.wikipedia.org/wiki/ZeuS_Panda"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0330/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pandabanker"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:zeus%20panda"
        ],
        "uuid": "863ac646-bf1b-4f62-8a85-7b4569a88808",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "zeus_panda",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/ssl-tls-technical-brief/ssl-tls-technical-brief.pdf",
            "date": "2021-09-03",
            "organization": "Trend Micro",
            "author": "Mohamad Mokbel",
            "title": "The State of SSL/TLS Certificate Usage in  Malware C&C Communications",
            "categories": [
                "AdWind",
                "ostap",
                "AsyncRAT",
                "BazarBackdoor",
                "BitRAT",
                "Buer",
                "Chthonic",
                "CloudEyE",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "FindPOS",
                "GootKit",
                "Gozi",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "Orcus RAT",
                "PandaBanker",
                "Qadars",
                "QakBot",
                "Quasar RAT",
                "Rockloader",
                "ServHelper",
                "Shifu",
                "SManager",
                "TorrentLocker",
                "TrickBot",
                "Vawtrak",
                "Zeus",
                "Zloader"
            ]
        },
        {
            "data_url": "https://medium.com/@crovax/panda-banker-analysis-part-1-d08b3a855847",
            "date": "2021-08-21",
            "organization": "Medium Crovax",
            "author": "Crovax",
            "title": "Panda Banker Analysis Part 1",
            "categories": [
                "PandaBanker"
            ]
        },
        {
            "data_url": "https://www.f5.com/labs/articles/education/banking-trojans-a-reference-guide-to-the-malware-family-tree",
            "date": "2020-08-09",
            "organization": "F5 Labs",
            "author": "Remi Cohen",
            "title": "Banking Trojans: A Reference Guide to the Malware Family Tree",
            "categories": [
                "BackSwap",
                "Carberp",
                "Citadel",
                "DanaBot",
                "Dridex",
                "Dyre",
                "Emotet",
                "Gozi",
                "Kronos",
                "PandaBanker",
                "Ramnit",
                "Shylock",
                "SpyEye",
                "Tinba",
                "TrickBot",
                "Vawtrak",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=J7VOfAJvxEY",
            "date": "2020-05-20",
            "organization": "Youtube (nonepizza)",
            "author": "nonepizza",
            "title": "(PandaBanker Analysis) Fixing Corrupted PE Headers and Unmapping an Executable",
            "categories": [
                "PandaBanker"
            ]
        },
        {
            "data_url": "https://www.slideshare.net/codeblue_jp/cb19-cyber-threat-landscape-in-japan-revealing-threat-in-the-shadow-by-chi-en-shen-ashley-oleg-bondarenko",
            "date": "2019-12-12",
            "organization": "FireEye",
            "author": "Chi-en Shen",
            "title": "Cyber Threat Landscape in Japan \u2013 Revealing Threat in the Shadow",
            "categories": [
                "Cerberus",
                "TSCookie",
                "Cobalt Strike",
                "Dtrack",
                "Emotet",
                "Formbook",
                "IcedID",
                "Icefog",
                "IRONHALO",
                "Loki Password Stealer (PWS)",
                "PandaBanker",
                "PLEAD",
                "poisonplug",
                "TrickBot",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta544-targets-geographies-italy-japan-range-malware",
            "date": "2019-07-11",
            "organization": "Proofpoint",
            "author": "Proofpoint Threat Insight Team",
            "title": "Threat Actor Profile: TA544 targets geographies from Italy to Japan with a range of malware",
            "categories": [
                "ISFB",
                "PandaBanker",
                "UrlZone",
                "NARWHAL SPIDER"
            ]
        },
        {
            "data_url": "https://github.com/JR0driguezB/malware_configs/tree/master/PandaBanker",
            "date": "2018-10-09",
            "organization": "Github (JR0driguezB)",
            "author": "JR0driguezB",
            "title": "Malware Configs - Pandabanker",
            "categories": [
                "PandaBanker"
            ]
        },
        {
            "data_url": "https://www.vkremez.com/2018/08/lets-learn-dissecting-panda-banker.html",
            "date": "2018-08-20",
            "organization": "Vitali Kremez Blog",
            "author": "Vitali Kremez",
            "title": "Let's Learn: Dissecting Panda Banker & Modules: Webinject, Grabber & Keylogger DLL Modules",
            "categories": [
                "PandaBanker"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/holiday-lull-not-so-much",
            "date": "2018-01-12",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Holiday lull? Not so much",
            "categories": [
                "Dridex",
                "Emotet",
                "GlobeImposter",
                "ISFB",
                "Necurs",
                "PandaBanker",
                "UrlZone",
                "NARWHAL SPIDER"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/zeus-panda-banking-trojan-targets-online-holiday-shoppers",
            "date": "2017-12-14",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "Zeus Panda Banking Trojan Targets Online Holiday Shoppers",
            "categories": [
                "PandaBanker"
            ]
        },
        {
            "data_url": "http://blog.talosintelligence.com/2017/11/zeus-panda-campaign.html",
            "date": "2017-11-02",
            "organization": "Talos",
            "author": "Edmund Brumaghin",
            "title": "Poisoning the Well: Banking Trojan Targets Google Search Results",
            "categories": [
                "PandaBanker"
            ]
        },
        {
            "data_url": "https://cyberwtf.files.wordpress.com/2017/07/panda-whitepaper.pdf",
            "date": "2017-06-22",
            "organization": "G Data",
            "author": "Luca Ebach",
            "title": "Analysis Results of Zeus.Variant.Panda",
            "categories": [
                "PandaBanker"
            ]
        },
        {
            "data_url": "https://cyber.wtf/2017/03/13/zeus-panda-webinjects-dont-trust-your-eyes/",
            "date": "2017-03-13",
            "organization": "",
            "author": "Manuel K.-B.",
            "title": "Zeus Panda Webinjects: Don\u2019t trust your eyes",
            "categories": [
                "PandaBanker"
            ]
        },
        {
            "data_url": "https://cyber.wtf/2017/02/03/zeus-panda-webinjects-a-case-study/",
            "date": "2017-02-03",
            "organization": "",
            "author": "Manuel K.-B.",
            "title": "Zeus Panda Webinjects: a case study",
            "categories": [
                "PandaBanker"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "zeus panda",
            "procedure_code": "s0330",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0330",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059",
                    "technique_link": "https://attack.mitre.org/techniques/T1059",
                    "technique_name": "command and scripting interpreter",
                    "technique_description": "adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. these interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. most systems come with some built-in command-line interface and scripting capabilities, for example, macos and linux distributions include some flavor of unix shell while windows installations include the windows command shell and powershell.",
                    "procedure_description": "zeus panda can launch remote scripts on the victim\u2019s machine.[45]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "zeus panda uses powershell to download and execute the payload.[250]"
                },
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
                    "procedure_description": "zeus panda can launch an interface where it can execute several commands on the victim\u2019s pc.[357]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "zeus panda adds persistence by creating registry run keys.[284][285]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "zeus panda adds persistence by creating registry run keys.[284][285]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/002",
                    "technique_name": "process injection : portable executable injection",
                    "technique_description": "adversaries may inject portable executables (pe) into processes in order to evade process-based defenses as well as possibly elevate privileges. pe injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "zeus panda checks processes on the system and if they meet the necessary requirements, it injects into that process.[8]"
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
                    "procedure_description": "zeus panda decrypts strings in the code during the execution process.[266]"
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
                    "procedure_description": "zeus panda has a command to delete a file. it also can uninstall scripts and delete files to cover its track.[261]"
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
                    "procedure_description": "zeus panda modifies several registry keys under hkcu\\software\\microsoft\\internet explorer\\ phishingfilter\\ to disable phishing filters.[181]"
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
                    "procedure_description": "zeus panda encrypts strings with xor. zeus panda also encrypts all configuration and settings in aes and rc4.[363][364]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "zeus panda obfuscates the macro commands in its initial payload.[89]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/002",
                    "technique_name": "process injection : portable executable injection",
                    "technique_description": "adversaries may inject portable executables (pe) into processes in order to evade process-based defenses as well as possibly elevate privileges. pe injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "zeus panda checks processes on the system and if they meet the necessary requirements, it injects into that process.[8]"
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
                    "procedure_description": "zeus panda can perform keylogging on the victim\u2019s machine by hooking the functions translatemessage and wm_keydown.[183]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/004",
                    "technique_name": "input capture : credential api hooking",
                    "technique_description": "adversaries may hook into windows application programming interface (api) functions to collect user credentials. malicious hooking mechanisms may capture api calls that include parameters that reveal user authentication credentials. unlike keylogging,  this technique focuses specifically on api functions that include parameters that reveal user credentials. hooking involves redirecting calls to these functions and can be implemented via:",
                    "procedure_description": "zeus panda hooks processes by leveraging its own iat hooked functions.[16]"
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
                    "procedure_description": "zeus panda searches for specific directories on the victim\u2019s machine.[339]"
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
                    "procedure_description": "zeus panda checks for running processes on the victim\u2019s machine.[281]"
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
                    "procedure_description": "zeus panda checks for the existence of a registry key and if it contains certain values.[106]"
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
                    "procedure_description": "zeus panda checks to see if anti-virus, anti-spyware, or firewall products are installed in the victim\u2019s environment.[121][122]"
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
                    "procedure_description": "zeus panda collects the os version, system architecture, computer name, product id, install date, and information on the keyboard mapping to determine the language used on the system.[410][411]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1614/001",
                    "technique_name": "system location discovery : system language discovery",
                    "technique_description": "adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. this information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. this decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.",
                    "procedure_description": "zeus panda queries the system's keyboard mapping to determine the language used on the system. it will terminate execution if it detects lang_russian, lang_belarusian, lang_kazak, or lang_ukrainian.[22]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "zeus panda collects the current system time (utc) and sends it back to the c2 server.[84]"
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
                    "procedure_description": "zeus panda can hook getclipboarddata function to watch for clipboard pastes to collect.[47]"
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
                    "procedure_description": "zeus panda can perform keylogging on the victim\u2019s machine by hooking the functions translatemessage and wm_keydown.[183]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/004",
                    "technique_name": "input capture : credential api hooking",
                    "technique_description": "adversaries may hook into windows application programming interface (api) functions to collect user credentials. malicious hooking mechanisms may capture api calls that include parameters that reveal user authentication credentials. unlike keylogging,  this technique focuses specifically on api functions that include parameters that reveal user credentials. hooking involves redirecting calls to these functions and can be implemented via:",
                    "procedure_description": "zeus panda hooks processes by leveraging its own iat hooked functions.[16]"
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
                    "procedure_description": "zeus panda can take screenshots of the victim\u2019s machine.[186]"
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
                    "procedure_description": "zeus panda uses http for c2 communications.[384]"
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
                    "procedure_description": "zeus panda can download additional malware plug-in modules and execute them on the victim\u2019s machine.[490]"
                }
            ]
        }
    ]
};