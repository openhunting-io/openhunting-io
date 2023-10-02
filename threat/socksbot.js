var threatdata = {
    "name": "SocksBot",
    "alias": "SocksBot, BIRDDOG, Nadrac",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration, Downloader, Loader",
    "modified": "2022-11-03",
    "all_data": {
        "tool": "SocksBot",
        "names": [
            {
                "name": "SocksBot"
            },
            {
                "name": "BIRDDOG"
            },
            {
                "name": "Nadrac"
            }
        ],
        "description": "(Accenture) The SOCKSBOT implant has the following capabilities:\n\u2022 Enumerate processes (process list)\n\u2022 Take screenshots\n\u2022 Download, upload, write, and execute files\n\u2022 Create and inject into new processes\n\u2022 Communicate to C2 via sockets.\n\nThis implant will communicate with the designated C2 server by first creating a buffer and will, on first execution, communicate to the C2 server that it has successfully infected a target by using a .php URI that is pseudo-randomly generated. SOCKSBOT uses the ObtainUserAgentString API to determine the default user-agent of the machine.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://www.accenture.com/_acnmedia/pdf-83/accenture-goldfin-security-alert.pdf",
            "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html",
            "https://documents.trendmicro.com/assets/tech-brief-untangling-the-patchwork-cyberespionage-group.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0273/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.socksbot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:socksbot"
        ],
        "uuid": "43ced180-196d-4510-95cf-a4f7d9f05d2a",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "socksbot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://assets.sentinelone.com/sentinellabs22/sentinellabs-blackbasta",
            "date": "2022-11-03",
            "organization": "SentinelOne",
            "author": "SentinelLabs",
            "title": "Black Basta Ransomware | Attacks deploy Custom EDR Evasion Tools tied to FIN7 Threat Actor",
            "categories": [
                "Black Basta",
                "QakBot",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://cert.ssi.gouv.fr/uploads/20220427_NP_TLPWHITE_ANSSI_FIN7.pdf",
            "date": "2022-04-27",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "LE GROUPE CYBERCRIMINEL FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "SQLRat",
                "POWERSOURCE",
                "Andromeda",
                "BABYMETAL",
                "BlackCat",
                "BlackMatter",
                "BOOSTWRITE",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "Dridex",
                "DRIFTPIN",
                "Gameover P2P",
                "MimiKatz",
                "Murofet",
                "Qadars",
                "Ranbyus",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/tech-brief-untangling-the-patchwork-cyberespionage-group.pdf",
            "date": "2018-10-09",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Untangling the Patchwork Espionage Group",
            "categories": [
                "BadNews",
                "SocksBot",
                "QUILTED TIGER"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s05-att&cking-fin7.pdf",
            "date": "2018-10-01",
            "organization": "FireEye",
            "author": "Regina Elwell",
            "title": "ATT&CKing FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "ANTAK",
                "POWERPIPE",
                "POWERSOURCE",
                "HALFBAKED",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "DRIFTPIN",
                "PILLOWMINT",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html",
            "date": "2018-08-01",
            "organization": "FireEye",
            "author": "Nick Carr",
            "title": "On the Hunt for FIN7: Pursuing an Enigmatic and Evasive Global Criminal Operation",
            "categories": [
                "BELLHOP",
                "POWERPIPE",
                "BABYMETAL",
                "SocksBot",
                "FIN7"
            ]
        },
        {
            "data_url": "https://threatminer.org/report.php?q=Accenture-Goldfin-Security-Alert.pdf&y=2018",
            "date": "2018-07-26",
            "organization": "Accenture Security",
            "author": "Michael Yip",
            "title": "GOLDFIN: A Persistent Campaign Targeting CIS Countries with SOCKSBOT",
            "categories": [
                "SocksBot"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "socksbot",
            "procedure_code": "s0273",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0273",
            "techniques": [
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
                    "procedure_description": "socksbot can write and execute powershell scripts.[175]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "socksbot creates a suspended svchost process and injects its dll into it.[64]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/001",
                    "technique_name": "process injection : dynamic-link library injection",
                    "technique_description": "adversaries may inject dynamic-link libraries (dlls) into processes in order to evade process-based defenses as well as possibly elevate privileges. dll injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "socksbot creates a suspended svchost process and injects its dll into it.[64]"
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
                    "procedure_description": "socksbot can list all running processes.[232]"
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
                    "procedure_description": "socksbot can take screenshots.[161]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "socksbot can start socks proxy threads.[43]"
                }
            ]
        }
    ]
};