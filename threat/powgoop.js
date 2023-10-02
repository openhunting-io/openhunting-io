var threatdata = {
    "name": "PowGoop",
    "alias": "PowGoop",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "PowGoop",
        "names": [
            {
                "name": "PowGoop"
            }
        ],
        "description": "(Palo Alto) The PowGoop downloader has two components: a DLL loader and a PowerShell-based downloader. The PowGoop loader component is responsible for decrypting and running the PowerShell code that comprises the PowGoop downloader. The PowGoop loader DLL that existed in the same environment as LogicalDuckBill had a filename of goopdate.dll that was likely sideloaded by the legitimate and signed Google Update executable. The sideloading process would start with the legitimate GoogleUpdate.exe file loading a legitimate DLL with a name of goopdate86.dll. The sideloading would occur when the goopdate86.dll library loads the goopdate.dll file, which effectively runs the PowGoop loader.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/thanos-ransomware/",
            "https://www.clearskysec.com/wp-content/uploads/2020/10/Operation-Quicksand.pdf",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/seedworm-apt-iran-middle-east"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1046/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powgoop"
        ],
        "uuid": "5bb80638-3bd5-4921-adc9-ef529ced2d91",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powgoop",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.security.ntt/blog/analysis-of-an-iranian-apts-e400-powgoop-variant",
            "date": "2022-05-11",
            "organization": "NTT Security Holdings",
            "author": "NTT Security Holdings",
            "title": "Analysis of an Iranian APTs \u201cE400\u201d PowGoop Variant Reveals Dozens of Control Servers Dating Back to 2020",
            "categories": [
                "PowGoop"
            ]
        },
        {
            "data_url": "https://www.inforisktoday.com/muddywater-targets-critical-infrastructure-in-asia-europe-a-18611",
            "date": "2022-02-25",
            "organization": "infoRisk TODAY",
            "author": "Prajeet Nair",
            "title": "MuddyWater Targets Critical Infrastructure in Asia, Europe",
            "categories": [
                "POWERSTATS",
                "PowGoop",
                "STARWHALE",
                "GRAMDOOR",
                "MoriAgent"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-055a",
            "date": "2022-02-24",
            "organization": "",
            "author": "FBI",
            "title": "Alert (AA22-055A) Iranian Government-Sponsored Actors Conduct Cyber Operations Against Global Government and Commercial Networks",
            "categories": [
                "POWERSTATS",
                "PowGoop",
                "MoriAgent"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-055A_Iranian_Government-Sponsored_Actors_Conduct_Cyber_Operations.pdf",
            "date": "2022-02-24",
            "organization": "",
            "author": "FBI",
            "title": "Iranian Government-Sponsored Actors Conduct Cyber Operations Against Global Government  and Commercial Networks",
            "categories": [
                "POWERSTATS",
                "PowGoop",
                "GRAMDOOR",
                "MoriAgent"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/wading-through-muddy-waters-recent-activity-of-an-iranian-state-sponsored-threat-actor/",
            "date": "2022-01-12",
            "organization": "Sentinel LABS",
            "author": "Amitai Ben Shushan Ehrlich",
            "title": "Wading Through Muddy Waters | Recent Activity of an Iranian State-Sponsored Threat Actor",
            "categories": [
                "PowGoop"
            ]
        },
        {
            "data_url": "https://www.cybercom.mil/Media/News/Article/2897570/iranian-intel-cyber-suite-of-malware-uses-open-source-tools/",
            "date": "2022-01-12",
            "organization": "U.S. Cyber Command",
            "author": "U.S. Cyber Command",
            "title": "Iranian intel cyber suite of malware uses open source tools",
            "categories": [
                "PowGoop",
                "MoriAgent"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "date": "2021-02-28",
            "organization": "PWC UK",
            "author": "PWC UK",
            "title": "Cyber Threats 2020: A Year in Retrospect",
            "categories": [
                "elf.wellmess",
                "FlowerPower",
                "PowGoop",
                "8.t Dropper",
                "Agent.BTZ",
                "Agent Tesla",
                "Appleseed",
                "Ave Maria",
                "Bankshot",
                "BazarBackdoor",
                "BLINDINGCAN",
                "Chinoxy",
                "Conti",
                "Cotx RAT",
                "Crimson RAT",
                "DUSTMAN",
                "Emotet",
                "FriedEx",
                "FunnyDream",
                "Hakbit",
                "Mailto",
                "Maze",
                "METALJACK",
                "Nefilim",
                "Oblique RAT",
                "Pay2Key",
                "PlugX",
                "QakBot",
                "REvil",
                "Ryuk",
                "StoneDrill",
                "StrongPity",
                "SUNBURST",
                "SUPERNOVA",
                "TrickBot",
                "TurlaRPC",
                "Turla SilentMoon",
                "WastedLocker",
                "WellMess",
                "Winnti",
                "ZeroCleare",
                "APT10",
                "APT23",
                "APT27",
                "APT31",
                "APT41",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "Inception Framework",
                "MUSTANG PANDA",
                "Red Charon",
                "Red Nue",
                "Sea Turtle",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://www.cyberscoop.com/muddywater-iran-symantec-middle-east/",
            "date": "2020-10-21",
            "organization": "CyberScoop",
            "author": "Sean Lyngaas",
            "title": "'MuddyWater' spies suspected in attacks against Middle East governments, telecoms",
            "categories": [
                "PowGoop"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/seedworm-apt-iran-middle-east",
            "date": "2020-10-21",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Seedworm: Iran-Linked Group Continues to Target Organizations in the Middle East",
            "categories": [
                "PowGoop"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2020/10/Operation-Quicksand.pdf",
            "date": "2020-10-15",
            "organization": "ClearSky",
            "author": "ClearSky",
            "title": "Operation Quicksand: MuddyWater\u2019s Offensive Attack Against Israeli Organizations",
            "categories": [
                "PowGoop",
                "Covicli"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/thanos-ransomware/",
            "date": "2020-09-04",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Thanos Ransomware: Destructive Variant Targeting State-Run Organizations in the Middle East and North Africa",
            "categories": [
                "PowGoop",
                "Hakbit"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "powgoop",
            "procedure_code": "s1046",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1046",
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
                    "procedure_description": "powgoop has the ability to use powershell scripts to execute commands.[160]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "powgoop can side-load goopdate.dll into googleupdate.exe.[43][54]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "powgoop can side-load goopdate.dll into googleupdate.exe.[43][54]"
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
                    "procedure_description": "powgoop can decrypt powershell scripts for execution.[152][176]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "powgoop can side-load goopdate.dll into googleupdate.exe.[43][54]"
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
                    "procedure_description": "powgoop has disguised a powershell script as a .dat file (goopdate.dat).[28]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "powgoop has used a dll named goopdate.dll to impersonate a legitimate google update file.[126]"
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
                    "procedure_description": "powgoop can send http get requests to malicious servers.[252]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/002",
                    "technique_name": "data encoding : non-standard encoding",
                    "technique_description": "adversaries may encode data with a non-standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a non-standard data encoding system that diverges from existing protocol specifications. non-standard data encoding schemes may be based on or related to standard data encoding schemes, such as a modified base64 encoding for the message body of an http request.",
                    "procedure_description": "powgoop can use a modified base64 encoding mechanism to send data to and from the c2 server.[8]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573",
                    "technique_link": "https://attack.mitre.org/techniques/T1573",
                    "technique_name": "encrypted channel",
                    "technique_description": "adversaries may employ a known encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. despite the use of a secure algorithm, these implementations may be vulnerable to reverse engineering if secret keys are encoded and/or generated within malware samples/configuration files.",
                    "procedure_description": "powgoop can receive encrypted commands from c2.[12]"
                }
            ]
        }
    ]
};