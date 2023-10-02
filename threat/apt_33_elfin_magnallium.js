var threatdata = {
    "name": "APT 33, Elfin, Magnallium",
    "alias": "APT 33, Elfin, Magnallium, Holmium, ATK 35, Refined Kitten, TA451, Cobalt Trinity, Peach Sandstorm",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "APT 33, Elfin, Magnallium",
        "names": [
            {
                "name": "APT 33",
                "name-giver": "Mandiant"
            },
            {
                "name": "Elfin",
                "name-giver": "Symantec"
            },
            {
                "name": "Magnallium",
                "name-giver": "Dragos"
            },
            {
                "name": "Holmium",
                "name-giver": "Microsoft"
            },
            {
                "name": "ATK 35",
                "name-giver": "Thales"
            },
            {
                "name": "Refined Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TA451",
                "name-giver": "Proofpoint"
            },
            {
                "name": "Cobalt Trinity",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Peach Sandstorm",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage",
            "Sabotage and destruction"
        ],
        "first-seen": "2013",
        "description": "(FireEye) When discussing suspected Middle Eastern hacker groups with destructive capabilities, many automatically think of the suspected Iranian group that previously used SHAMOON \u2013 aka Disttrack \u2013 to target organizations in the Persian Gulf. However, over the past few years, we have been tracking a separate, less widely known suspected Iranian group with potential destructive capabilities, whom we call APT33. Our analysis reveals that APT33 is a capable group that has carried out cyber espionage operations since at least 2013. We assess APT33 works at the behest of the Iranian government.\n\nAPT33 has targeted organizations \u2013 spanning multiple industries \u2013 headquartered in the United States, Saudi Arabia and South Korea. APT33 has shown particular interest in organizations in the aviation sector involved in both military and commercial capacities, as well as organizations in the energy sector with ties to petrochemical production.\n\nAPT 33 seems to be closely related to {{OilRig, APT 34, Helix Kitten, Chrysene}} since at least 2017.",
        "observed-sectors": [
            "Aviation",
            "Defense",
            "Education",
            "Energy",
            "Financial",
            "Government",
            "Healthcare",
            "High-Tech",
            "Manufacturing",
            "Media",
            "Petrochemical",
            "others"
        ],
        "observed-countries": [
            "Iran",
            "Iraq",
            "Israel",
            "Saudi Arabia",
            "South Korea",
            "UK",
            "USA"
        ],
        "tools": [
            "AutoIt backdoor",
            "DarkComet",
            "DistTrack",
            "EmpireProject",
            "Filerase",
            "JuicyPotato",
            "LaZagne",
            "Mimikatz",
            "NanoCore RAT",
            "NetWire RC",
            "PoshC2",
            "PowerBand",
            "PowerSploit",
            "POWERTON",
            "PsList",
            "PupyRAT",
            "QuasarRAT",
            "RemcosRAT",
            "Ruler",
            "SHAPESHIFT",
            "StoneDrill",
            "TURNEDUP",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2019-03",
                "activity": "Attacks on Multiple Organizations in Saudi Arabia and U.S.\nThe Elfin espionage group (aka APT33) has remained highly active over the past three years, attacking at least 50 organizations in Saudi Arabia, the United States, and a range of other countries.\nhttps://www.symantec.com/blogs/threat-intelligence/elfin-apt33-espionage"
            },
            {
                "date": "2019-07",
                "activity": "US Cyber Command has issued an alert via Twitter today about threat actors abusing an Outlook vulnerability to plant malware on government networks.\nThe vulnerability is CVE-2017-11774, a security bug that Microsoft patched in Outlook in the October 2017 Patch Tuesday.\nhttps://www.zdnet.com/article/us-cyber-command-issues-alert-about-hackers-exploiting-outlook-vulnerability/"
            },
            {
                "date": "2019-11",
                "activity": "More than a Dozen Obfuscated APT33 Botnets Used for Extreme Narrow Targeting\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/more-than-a-dozen-obfuscated-apt33-botnets-used-for-extreme-narrow-targeting/"
            }
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/09/apt33-insights-into-iranian-cyber-espionage.html",
            "https://en.wikipedia.org/wiki/Elfin_Team"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0064/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=oilrig"
        ],
        "uuid": "958e1f46-a2b6-4beb-8cb0-ddc90c08368e",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_33_elfin_magnallium",
    "analysis": null,
    "articles": [],
    "mitre": [
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};