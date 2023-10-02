var threatdata = {
    "name": "Putter Panda, APT 2",
    "alias": "Putter Panda, TG-6952, APT 2, Group 36, Sulphur",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "Putter Panda, APT 2",
        "names": [
            {
                "name": "Putter Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TG-6952",
                "name-giver": "SecureWorks"
            },
            {
                "name": "APT 2",
                "name-giver": "Mandiant"
            },
            {
                "name": "Group 36",
                "name-giver": "Talos"
            },
            {
                "name": "Sulphur",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, Unit 61486 of the 12th Bureau of the PLA\u2019s 3rd General Staff Department (GSD)",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2007",
        "description": "Putter Panda is the name of bad actor responsible for a series of cyberespionage operations originating in Shanghai, security experts linked its operation to the activity of the People\u2019s Liberation Army 3rd General Staff Department 12th Bureau Unit 61486.\n\nA fake yoga brochure was one of different emails used for a spear-phishing campaign conducted by the stealth Chinese cyber unit according an investigation conducted by researchers at the CrowdStrike security firm. Also in this case the experts believe that we are facing with a large scale cyberespionage campaign targeting government entities, contractors and research companies in Europe, USA and Japan.\n\nThe group has been operating since at least 2007 and appears very interested in research companies in the space and satellite industry, experts at CrowdStrike have collected evidence of a numerous attacks against these industries.",
        "observed-sectors": [
            "Defense",
            "Government",
            "Research",
            "Technology"
        ],
        "observed-countries": [
            "USA"
        ],
        "tools": [
            "3PARA RAT",
            "4H RAT",
            "httpclient",
            "MSUpdater",
            "pngdowner"
        ],
        "information": [
            "https://cdn0.vox-cdn.com/assets/4589853/crowdstrike-intelligence-report-putter-panda.original.pdf",
            "https://en.wikipedia.org/wiki/PLA_Unit_61486"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0024/"
        ],
        "uuid": "028aa521-2de8-49c4-88d7-455f4d9141ba",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "putter_panda_apt_2",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "putter panda",
            "procedure_code": "g0024",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0024",
            "techniques": [
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
                    "procedure_description": "a dropper used by putter panda installs itself into the asep registry key hkcu\\software\\microsoft\\windows\\currentversion\\run with a value named mcupdate.[210]"
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
                    "procedure_description": "a dropper used by putter panda installs itself into the asep registry key hkcu\\software\\microsoft\\windows\\currentversion\\run with a value named mcupdate.[210]"
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
                    "procedure_description": "an executable dropped onto victims by putter panda aims to inject the specified dll into a process that would normally be accessing the network, including outlook express (msinm.exe), outlook (outlook.exe), internet explorer (iexplore.exe), and firefox (firefox.exe).[56]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "malware used by putter panda attempts to terminate processes corresponding to two components of sophos anti-virus (savadminservice.exe and savservice.exe).[71]"
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
                    "procedure_description": "droppers used by putter panda use rc4 or a 16-byte xor key consisting of the bytes 0xa0 \u2013 0xaf to obfuscate payloads.[261]"
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
                    "procedure_description": "an executable dropped onto victims by putter panda aims to inject the specified dll into a process that would normally be accessing the network, including outlook express (msinm.exe), outlook (outlook.exe), internet explorer (iexplore.exe), and firefox (firefox.exe).[56]"
                }
            ]
        }
    ]
};