var threatdata = {
    "name": "SUPERNOVA",
    "alias": "SUPERNOVA",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SUPERNOVA",
        "names": [
            {
                "name": "SUPERNOVA"
            }
        ],
        "description": "(Palo Alto) In the analysis of the trojanized Orion artifacts, the .NET .dll app_web_logoimagehandler.ashx.b6031896.dll was dubbed SUPERNOVA, but little detail of its operation has been publicly explored. NOTE: The SUPERNOVA webshell\u2019s association with the SolarStorm actors is now questionable due to the aforementioned .dll not being digitally signed, unlike the SUNBURST .dll. This may indicate that the webshell was not implanted early in SolarWinds\u2019 software development pipeline as was SUNBURST, and was instead dropped by a third party. Additionally, Guidepoint Security conducted their own research into SUPERNOVA, with similar conclusions.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/solarstorm-supernova/",
            "https://www.guidepointsecurity.com/supernova-solarwinds-net-webshell-analysis/",
            "https://labs.sentinelone.com/solarwinds-understanding-detecting-the-supernova-webshell-trojan/",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-027a",
            "https://www.secureworks.com/blog/supernova-web-shell-deployment-linked-to-spiral-threat-group",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-112"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0578/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.supernova"
        ],
        "uuid": "d066195c-0a56-41bc-9f4b-b2e8eeda540b",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "supernova",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-112a",
            "date": "2021-04-22",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "AR21-112A: CISA Identifies SUPERNOVA Malware During Incident Response",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/supernova-redux-with-a-generous-portion-of-masquerading.html",
            "date": "2021-04-22",
            "organization": "splunk",
            "author": "John Stoner",
            "title": "SUPERNOVA Redux, with a Generous Portion of Masquerading",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/supernova-web-shell-deployment-linked-to-spiral-threat-group",
            "date": "2021-03-08",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "SUPERNOVA Web Shell Deployment Linked to SPIRAL Threat Group",
            "categories": [
                "SUPERNOVA",
                "BRONZE SPIRAL"
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
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-027a",
            "date": "2021-01-27",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR21-027A): MAR-10319053-1.v1 - Supernova",
            "categories": [
                "SUPERNOVA",
                "BRONZE SPIRAL"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa21-008a",
            "date": "2021-01-08",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA21-008A): Detecting Post-Compromise Threat Activity in Microsoft Cloud Environments",
            "categories": [
                "SUNBURST",
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/detecting-supernova-malware-solarwinds-continued.html",
            "date": "2021-01-04",
            "organization": "splunk",
            "author": "John Stoner",
            "title": "Detecting Supernova Malware: SolarWinds Continued",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=7WX5fCEzTlA",
            "date": "2020-12-31",
            "organization": "Youtube (Colin Hardy)",
            "author": "Colin Hardy",
            "title": "SUPERNOVA - Everything you need to know to Reverse Engineer an APT WebShell",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://twitter.com/MalwareRE/status/1342888881373503488",
            "date": "2020-12-26",
            "organization": "Twitter (@MalwareRE)",
            "author": "Ramin Nafisi",
            "title": "Tweet on active exploitation of 0day vulnerability in the SolarWinds Orion",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/solarwinds-understanding-detecting-the-supernova-webshell-trojan",
            "date": "2020-12-23",
            "organization": "Sentinel LABS",
            "author": "Marco Figueroa",
            "title": "SolarWinds | Understanding & Detecting the SUPERNOVA Webshell Trojan",
            "categories": [
                "SUPERNOVA",
                "BRONZE SPIRAL"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/solarwinds-understanding-detecting-the-supernova-webshell-trojan/",
            "date": "2020-12-23",
            "organization": "Sentinel LABS",
            "author": "Marco Figueroa",
            "title": "SolarWinds | Understanding & Detecting the SUPERNOVA Webshell Trojan",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.anquanke.com/post/id/226029",
            "date": "2020-12-18",
            "organization": "360Quake",
            "author": "360Quake",
            "title": "SolarWinds\u5931\u9677\u670d\u52a1\u5668\u6d4b\u7ed8\u5206\u6790\u62a5\u544a",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/12/18/analyzing-solorigate-the-compromised-dll-file-that-started-a-sophisticated-cyberattack-and-how-microsoft-defender-helps-protect/",
            "date": "2020-12-18",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Research Team",
            "title": "Analyzing Solorigate, the compromised DLL file that started a sophisticated cyberattack, and how Microsoft Defender helps protect customers",
            "categories": [
                "SUNBURST",
                "SUPERNOVA",
                "TEARDROP",
                "UNC2452"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/solarstorm-supernova",
            "date": "2020-12-17",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Matthew Tennis",
            "title": "SUPERNOVA SolarWinds .NET Webshell Analysis",
            "categories": [
                "SUPERNOVA",
                "BRONZE SPIRAL"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/solarstorm-supernova/",
            "date": "2020-12-17",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Matt Tennis",
            "title": "SUPERNOVA: SolarStorm\u2019s Novel .NET Webshell",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.guidepointsecurity.com/supernova-solarwinds-net-webshell-analysis/",
            "date": "2020-12-16",
            "organization": "GuidePoint Security",
            "author": "Wes Riley",
            "title": "SUPERNOVA SolarWinds .NET Webshell Analysis",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://github.com/fireeye/sunburst_countermeasures/pull/5",
            "date": "2020-12-15",
            "organization": "Github (itsreallynick)",
            "author": "Nick Carr",
            "title": "A quick note from Nick Carr on COSMICGALE and SUPERNOVA that those are unrelated to UC2452 intrusion campaign",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/l/overview-of-recent-sunburst-targeted-attacks.html",
            "date": "2020-12-15",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Overview of Recent Sunburst Targeted Attacks",
            "categories": [
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.guidepointsecurity.com/blog/supernova-solarwinds-net-webshell-analysis",
            "date": "2020-12-14",
            "organization": "GuidePoint Security",
            "author": "GuidePoint Security",
            "title": "SUPERNOVA SolarWinds .NET Webshell Analysis",
            "categories": [
                "SUPERNOVA",
                "BRONZE SPIRAL"
            ]
        },
        {
            "data_url": "https://www.solarwinds.com/securityadvisory/faq",
            "date": "2020-12-14",
            "organization": "Solarwind",
            "author": "Solarwind",
            "title": "Security Advisory on SolarWinds Supply chain attack FAQ",
            "categories": [
                "SUNBURST",
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://www.solarwinds.com/securityadvisory",
            "date": "2020-12-14",
            "organization": "Solarwind",
            "author": "Solarwind",
            "title": "Security Advisory on SolarWinds Supply chain attack",
            "categories": [
                "SUNBURST",
                "SUPERNOVA"
            ]
        },
        {
            "data_url": "https://github.com/fireeye/sunburst_countermeasures",
            "date": "2020-12-13",
            "organization": "Github (fireeye)",
            "author": "FireEye",
            "title": "SUNBURST Countermeasures",
            "categories": [
                "SUNBURST",
                "SUPERNOVA",
                "TEARDROP",
                "UNC2452"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/12/evasive-attacker-leverages-solarwinds-supply-chain-compromises-with-sunburst-backdoor.html",
            "date": "2020-12-13",
            "organization": "FireEye",
            "author": "Andrew Archer",
            "title": "Highly Evasive Attacker Leverages SolarWinds Supply Chain to Compromise Multiple Global Victims With SUNBURST Backdoor",
            "categories": [
                "SUNBURST",
                "SUPERNOVA",
                "TEARDROP",
                "UNC2452"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "supernova",
            "procedure_code": "s0578",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0578",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1203",
                    "technique_link": "https://attack.mitre.org/techniques/T1203",
                    "technique_name": "exploitation for client execution",
                    "technique_description": "adversaries may exploit software vulnerabilities in client applications to execute code. vulnerabilities can exist in software due to unsecure coding practices that can lead to unanticipated behavior. adversaries can take advantage of certain vulnerabilities through targeted exploitation for the purpose of arbitrary code execution. oftentimes the most valuable exploits to an offensive toolkit are those that can be used to obtain code execution on a remote system because they can be used to gain access to that system. users will expect to see files related to the applications they commonly used to do work, so they are a useful target for exploit research and development because of their high utility.",
                    "procedure_description": "supernova was installed via exploitation of a solarwinds orion api authentication bypass vulnerability (cve-2020-10148).[79][80]"
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
                    "procedure_description": "supernova is a web shell.[34][35][36]"
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
                    "procedure_description": "supernova has masqueraded as a legitimate solarwinds dll.[161][162]"
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
                    "procedure_description": "supernova contained base64-encoded strings.[319]"
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
                    "procedure_description": "supernova had to receive an http get request containing a specific set of parameters in order to execute.[325][326]"
                }
            ]
        }
    ]
};