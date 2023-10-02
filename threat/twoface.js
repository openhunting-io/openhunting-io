var threatdata = {
    "name": "TwoFace",
    "alias": "TwoFace, Minion, HighShell, HyperShell, SEASHARPEE",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "TwoFace",
        "names": [
            {
                "name": "TwoFace"
            },
            {
                "name": "Minion"
            },
            {
                "name": "HighShell"
            },
            {
                "name": "HyperShell"
            },
            {
                "name": "SEASHARPEE"
            }
        ],
        "description": "According to Unit42, TwoFace is a two-staged (loader+payload) webshell, written in C# and meant to run on webservers with ASP.NET. The author of the initial loader webshell included legitimate and expected content that will be displayed if a visitor accesses the shell in a browser, likely to remain undetected. The code in the loader webshell includes obfuscated variable names and the embedded payload is encoded and encrypted. To interact with the loader webshell, the threat actor uses HTTP POST requests to the compromised server.\n\nThe secondary webshell, which we call the payload, is embedded within the loader in encrypted form and contains additional functionality that we will discuss in further detail. When the threat actor wants to interact with the remote server, they provide data that the loader will use to modify a decryption key embedded within the loader that will be in turn used to decrypt the embedded TwoFace payload. Commands supported by the payload are execution of programs, up-, download and deletion of files and capability to manipulate MAC timestamps.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-twoface-webshell-persistent-access-point-lateral-movement/",
            "https://unit42.paloaltonetworks.com/unit42-oilrig-performs-tests-twoface-webshell/",
            "https://www.zdnet.com/article/source-code-of-iranian-cyber-espionage-tools-leaked-on-telegram/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0185/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/asp.twoface"
        ],
        "uuid": "f02989df-45bc-4162-ba5b-8617795ee749",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "twoface",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/evasive-serpens/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Evasive Serpens",
            "categories": [
                "TwoFace",
                "ISMAgent",
                "ISMDoor",
                "OopsIE",
                "RDAT",
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/full-spectrum-detections-five-popular-web-shells/",
            "date": "2021-12-14",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Full Spectrum Detections for 5 Popular Web Shells: Alfa, SharPyShell, Krypton, ASPXSpy, and TWOFACE",
            "categories": [
                "TwoFace"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/incident-response-polar-ransomware-apt27/",
            "date": "2020-11-27",
            "organization": "PTSecurity",
            "author": "Denis Goydenko",
            "title": "Investigation with a twist: an accidental APT attack and averted data destruction",
            "categories": [
                "TwoFace",
                "CHINACHOPPER",
                "HyperBro",
                "MegaCortex",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/1oA4YSwXLxEF-EXJcrM76Bc4_7ZfBGYE4/view",
            "date": "2020-09-25",
            "organization": "",
            "author": "Emanuele De Lucia",
            "title": "APT vs Internet Service Providers",
            "categories": [
                "TwoFace",
                "RGDoor"
            ]
        },
        {
            "data_url": "https://www.cyber.gov.au/sites/default/files/2020-06/ACSC-Advisory-2020-008-Copy-Paste-Compromises.pdf",
            "date": "2020-06-18",
            "organization": "Australian Cyber Security Centre",
            "author": "Australian Cyber Security Centre (ACSC)",
            "title": "Advisory 2020-008: Copy-Paste Compromises \u2013tactics, techniques and procedures used to target multiple Australian networks",
            "categories": [
                "TwoFace",
                "Cobalt Strike",
                "Empire Downloader"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2020-0312.pdf",
            "date": "2020-03-12",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Swallowing the Snake\u2019s Tail: Tracking Turla Infrastructure",
            "categories": [
                "TwoFace",
                "Mosquito"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200307113010/https://www.sans.org/cyber-security-summit/archives/file/summit-archive-1574947864.pdf",
            "date": "2020-01",
            "organization": "FireEye",
            "author": "Tom Hall",
            "title": "Mandiant IR Grab Bag of Attacker Activity",
            "categories": [
                "TwoFace",
                "CHINACHOPPER",
                "HyperBro",
                "HyperSSL"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-gypsy",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT GYPSY",
            "categories": [
                "TwoFace",
                "MacDownloader",
                "BONDUPDATER",
                "pupy",
                "Helminth",
                "jason",
                "RGDoor",
                "TinyZbot",
                "OilRig"
            ]
        },
        {
            "data_url": "https://cyware.com/blog/apt34-the-helix-kitten-cybercriminal-group-loves-to-meow-middle-eastern-and-international-organizations-48ae",
            "date": "2019-08-22",
            "organization": "Cyware",
            "author": "Cyware",
            "title": "APT34: The Helix Kitten Cybercriminal Group Loves to Meow Middle Eastern and International Organizations",
            "categories": [
                "TwoFace",
                "BONDUPDATER",
                "POWRUNER",
                "QUADAGENT",
                "Helminth",
                "ISMAgent",
                "Karkoff",
                "LONGWATCH",
                "OopsIE",
                "PICKPOCKET",
                "RGDoor",
                "VALUEVAULT"
            ]
        },
        {
            "data_url": "https://www.sans.org/cyber-security-summit/archives/file/summit-archive-1536345486.pdf",
            "date": "2019-07-08",
            "organization": "SANS",
            "author": "Josh M. Bryant",
            "title": "Hunting Webshells: Tracking TwoFace",
            "categories": [
                "TwoFace"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=GjquFKa4afU",
            "date": "2019-02-13",
            "organization": "Youtube (SANS Digital Forensics & Incident Response)",
            "author": "Josh Bryant",
            "title": "Hunting Webshells: Tracking TwoFace - SANS Threat Hunting Summit 2018",
            "categories": [
                "TwoFace"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?time_continue=1333&v=1CGAmjAV8nI",
            "date": "2018-07-07",
            "organization": "Youtube (SteelCon)",
            "author": "Dan Caban",
            "title": "You\u2019ve Got Mail!",
            "categories": [
                "TwoFace"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-oilrig-performs-tests-twoface-webshell/",
            "date": "2017-12-11",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "OilRig Performs Tests on the TwoFace Webshell",
            "categories": [
                "TwoFace"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-twoface-webshell-persistent-access-point-lateral-movement/",
            "date": "2017-07-31",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "TwoFace Webshell: Persistent Access Point for Lateral Movement",
            "categories": [
                "TwoFace",
                "OilRig"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/source-code-of-iranian-cyber-espionage-tools-leaked-on-telegram/",
            "date": "2015-09-17",
            "organization": "F-Secure",
            "author": "F-Secure Global",
            "title": "The Dukes: 7 Years Of Russian Cyber-Espionage",
            "categories": [
                "TwoFace",
                "BONDUPDATER",
                "DNSpionage"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "seasharpee",
            "procedure_code": "s0185",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0185",
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
                    "procedure_description": "seasharpee can execute commands on victims.[297]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1505.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1505/003",
                    "technique_name": "server software component : web shell",
                    "technique_description": "adversaries may backdoor web servers with web shells to establish persistent access to systems. a web shell is a web script that is placed on an openly accessible web server to allow an adversary to use the web server as a gateway into a network. a web shell may provide a set of functions to execute or a command-line interface on the system that hosts the web server.",
                    "procedure_description": "seasharpee is a web shell.[29]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/006",
                    "technique_name": "indicator removal : timestomp",
                    "technique_description": "adversaries may modify file time attributes to hide new or changes to existing files. timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder. this is done, for example, on files that have been modified or created by the adversary so that they do not appear conspicuous to forensic investigators or file analysis tools.",
                    "procedure_description": "seasharpee can timestomp files on victims using a web shell.[47]"
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
                    "procedure_description": "seasharpee can download remote files onto victims.[399]"
                }
            ]
        },
        {
            "procedure_name": "arp",
            "procedure_code": "s0099",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0099",
            "techniques": [
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
                    "procedure_description": "arp can be used to display a host's arp cache, which may include address resolutions for remote systems.[14][15]"
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
                    "procedure_description": "arp can be used to display arp configuration information on the host.[22]"
                }
            ]
        }
    ]
};