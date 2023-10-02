var threatdata = {
    "name": "HARDRAIN",
    "alias": "HARDRAIN",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "HARDRAIN",
        "names": [
            {
                "name": "HARDRAIN"
            }
        ],
        "description": "(US-CERT) This report provides analysis of three (3) malicious executable files. The first two (2) files are 32-bit Windows executables that function as Proxy servers and implement a 'Fake TLS' method similar to the behavior described in a previously published NCCIC report, MAR-10135536-B.  The third file is an Executable Linkable Format (ELF) file designed to run on Android platforms as a fully functioning Remote Access Tool (RAT).",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.us-cert.gov/sites/default/files/publications/MAR-10135536-F.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0246/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.hardrain",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hardrain"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:HARDRAIN"
        ],
        "uuid": "c8c2fb9c-d95d-4af7-9b76-bb911985b367",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hardrain",
    "analysis": null,
    "articles": [
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
            "data_url": "https://www.us-cert.gov/sites/default/files/publications/MAR-10135536-F.pdf",
            "date": "2018-02-05",
            "organization": "US-CERT",
            "author": "Unknown Unknown",
            "title": "HIDDEN COBRA - North Korean Malicious Cyber Activity",
            "categories": [
                "HARDRAIN",
                "HARDRAIN"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-operation-blockbuster-goes-mobile/",
            "date": "2017-11-20",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Anthony Kasza",
            "title": "Operation Blockbuster Goes Mobile",
            "categories": [
                "HARDRAIN"
            ]
        },
        {
            "data_url": "https://securingtomorrow.mcafee.com/mcafee-labs/android-malware-appears-linked-to-lazarus-cybercrime-group/#sf174581990",
            "date": "2017-11-20",
            "organization": "McAfee",
            "author": "Inhee Han",
            "title": "Android Malware Appears Linked to Lazarus Cybercrime Group",
            "categories": [
                "HARDRAIN"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "hardrain",
            "procedure_code": "s0246",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0246",
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
                    "procedure_description": "hardrain uses cmd.exe to execute netshcommands.[148]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/004",
                    "technique_name": "impair defenses : disable or modify system firewall",
                    "technique_description": "adversaries may disable or modify system firewalls in order to bypass controls limiting network usage. changes could be disabling the entire mechanism as well as adding, deleting, or modifying particular rules. this can be done numerous ways depending on the operating system, including via command-line, editing windows registry keys, and windows control panel.",
                    "procedure_description": "hardrain opens the windows firewall to modify incoming connections.[14]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/003",
                    "technique_name": "data obfuscation : protocol impersonation",
                    "technique_description": "adversaries may impersonate legitimate protocols or web service traffic to disguise command and control activity and thwart analysis efforts. by impersonating legitimate protocols or web services, adversaries can make their command and control traffic blend in with legitimate network traffic.",
                    "procedure_description": "hardrain uses faketls to communicate with its c2 server.[7]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "hardrain binds and listens on port 443 with a faketls method.[17]"
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
                    "procedure_description": "hardrain uses the command cmd.exe /c netsh firewall add portopening tcp 443 \"adp\" and makes the victim machine function as a proxy server.[20]"
                }
            ]
        }
    ]
};