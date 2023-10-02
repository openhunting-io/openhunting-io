var threatdata = {
    "name": "TEARDROP",
    "alias": "TEARDROP",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "TEARDROP",
        "names": [
            {
                "name": "TEARDROP"
            }
        ],
        "description": "(FireEye) Multiple {{SUNBURST}} samples have been recovered, delivering different payloads. In at least one instance the attackers deployed a previously unseen memory-only dropper we\u2019ve dubbed TEARDROP to deploy {{Cobalt Strike}} BEACON.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://us-cert.cisa.gov/ncas/alerts/aa20-352a",
            "http://www.fireeye.com/blog/threat-research/2020/12/evasive-attacker-leverages-solarwinds-supply-chain-compromises-with-sunburst-backdoor.html",
            "https://www.fireeye.com/blog/products-and-services/2020/12/global-intrusion-campaign-leverages-software-supply-chain-compromise.html",
            "https://github.com/fireeye/sunburst_countermeasures",
            "https://www.fireeye.com/blog/threat-research/2020/12/sunburst-additional-technical-details.html",
            "https://msrc-blog.microsoft.com/2020/12/13/customer-guidance-on-recent-nation-state-cyber-attacks/",
            "https://www.microsoft.com/security/blog/2020/12/18/analyzing-solorigate-the-compromised-dll-file-that-started-a-sophisticated-cyberattack-and-how-microsoft-defender-helps-protect/",
            "https://www.microsoft.com/security/blog/2021/01/20/deep-dive-into-the-solorigate-second-stage-activation-from-sunburst-to-teardrop-and-raindrop/",
            "https://www.guidepointsecurity.com/analysis-of-the-solarwinds-supply-chain-attack/",
            "https://blog.talosintelligence.com/2020/12/solarwinds-supplychain-coverage.html",
            "https://blog.malwarebytes.com/threat-analysis/2020/12/advanced-cyber-attack-hits-private-and-public-sector-via-supply-chain-software-update/",
            "https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-solarwinds-supply-chain-attack",
            "https://unit42.paloaltonetworks.com/fireeye-solarstorm-sunburst/",
            "https://unit42.paloaltonetworks.com/solarstorm-supply-chain-attack-timeline/",
            "https://www.volexity.com/blog/2020/12/14/dark-halo-leverages-solarwinds-compromise-to-breach-organizations/",
            "https://www.cadosecurity.com/post/responding-to-solarigate",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/sunburst-supply-chain-attack-solarwinds",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/solarwinds-unique-dga",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/solarwinds-sunburst-command-control",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/solarwinds-sunburst-sending-data",
            "https://www.picussecurity.com/resource/blog/ttps-used-in-the-solarwinds-breach",
            "https://blog.reversinglabs.com/blog/sunburst-the-next-level-of-stealth",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/sunburst-malware-and-solarwinds-supply-chain-compromise/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/additional-analysis-into-the-sunburst-backdoor/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/how-a-device-to-cloud-architecture-defends-against-the-solarwinds-supply-chain-compromise/",
            "https://www.tripwire.com/state-of-security/vert/vert-alert-solar-winds-supply-chain-attack/",
            "https://blog.cyberint.com/solarwinds-supply-chain-attack",
            "https://blog.checkpoint.com/2020/12/21/best-practice-identifying-and-mitigating-the-impact-of-sunburst/",
            "https://research.checkpoint.com/2020/sunburst-teardrop-and-the-netsec-new-normal/",
            "https://mp.weixin.qq.com/s/UqXC1vovKUu97569LkYm2Q",
            "https://blog.qualys.com/qualys-insights/2020/12/22/qualys-security-advisory-solarwinds-fireeye",
            "https://www.cyfirma.com/solarwinds-hack-sunburst-supernova-and-more/",
            "https://gist.github.com/SwitHak/8b59e740b187511caad1bf06caa44df1",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-039b"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0560/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.teardrop"
        ],
        "uuid": "65d92c90-e74c-44ae-9362-1065b68c4ed0",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "teardrop",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.bushidotoken.net/2022/07/space-invaders-cyber-threats-that-are.html",
            "date": "2022-07-31",
            "organization": "BushidoToken Blog",
            "author": "BushidoToken",
            "title": "Space Invaders: Cyber Threats That Are Out Of This World",
            "categories": [
                "Poison Ivy",
                "Raindrop",
                "SUNBURST",
                "TEARDROP",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/solarphoenix/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Solar Phoenix",
            "categories": [
                "SUNBURST",
                "TEARDROP",
                "UNC2452"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/unc2452-merged-into-apt29",
            "date": "2022-04-27",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "Assembling the Russian Nesting Doll: UNC2452 Merged into APT29",
            "categories": [
                "Cobalt Strike",
                "Raindrop",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/Attacks-Against-Government-Sector.pdf",
            "date": "2021-07-13",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Attacks Against the Government Sector",
            "categories": [
                "Raindrop",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=GfbxHy6xnbA",
            "date": "2021-07-13",
            "organization": "YouTube ( Matt Soseman)",
            "author": "Matt Soseman",
            "title": "Solarwinds and SUNBURST attacks compromised my lab!",
            "categories": [
                "Cobalt Strike",
                "Raindrop",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.sans.org/webcasts/contrarian-view-solarwinds-119515",
            "date": "2021-06-01",
            "organization": "SANS",
            "author": "Kevin Haley",
            "title": "A Contrarian View on SolarWinds",
            "categories": [
                "Cobalt Strike",
                "Raindrop",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=LA-XE5Jy2kU",
            "date": "2021-03-08",
            "organization": "Youtube (SANS Digital Forensics and Incident Response)",
            "author": "Katie Nickels",
            "title": "STAR Webcast: Making sense of SolarWinds through the lens of MITRE ATT&CK(R)",
            "categories": [
                "Cobalt Strike",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/03/04/goldmax-goldfinder-sibot-analyzing-nobelium-malware",
            "date": "2021-03-04",
            "organization": "Microsoft",
            "author": "Ramin Nafisi",
            "title": "GoldMax, GoldFinder, and Sibot: Analyzing NOBELIUM\u2019s layered persistence",
            "categories": [
                "SUNBURST",
                "TEARDROP",
                "UNC2452"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.accenture.com/us-en/blogs/cyber-defense/threat-intel-takeaways-solarigate",
            "date": "2021-02-16",
            "organization": "Accenture",
            "author": "Alexandrea Berninger",
            "title": "Hard lessons learned: Threat intel takeaways from the community response to Solarigate",
            "categories": [
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://blog.securehat.co.uk/malware-analysis/extracting-the-cobalt-strike-config-from-a-teardrop-loader",
            "date": "2021-02-09",
            "organization": "Securehat",
            "author": "Securehat",
            "title": "Extracting the Cobalt Strike Config from a TEARDROP Loader",
            "categories": [
                "Cobalt Strike",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-039b",
            "date": "2021-02-08",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR21-039B): MAR-10320115-1.v1 - TEARDROP",
            "categories": [
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/01/20/deep-dive-into-the-solorigate-second-stage-activation-from-sunburst-to-teardrop-and-raindrop/",
            "date": "2021-01-20",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Research Team",
            "title": "Deep dive into the Solorigate second-stage activation: From SUNBURST to TEARDROP and Raindrop",
            "categories": [
                "Cobalt Strike",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/solarwinds-raindrop-malware",
            "date": "2021-01-18",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Raindrop: New Malware Discovered in SolarWinds Investigation",
            "categories": [
                "Cobalt Strike",
                "Raindrop",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.brighttalk.com/webcast/7451/462719",
            "date": "2021-01-12",
            "organization": "BrightTALK (FireEye)",
            "author": "Ben Read",
            "title": "UNC2452: What We Know So Far",
            "categories": [
                "Cobalt Strike",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://orangematter.solarwinds.com/2021/01/11/new-findings-from-our-investigation-of-sunburst/",
            "date": "2021-01-11",
            "organization": "SolarWinds",
            "author": "Sudhakar Ramakrishna",
            "title": "New Findings From Our Investigation of SUNBURST",
            "categories": [
                "Cobalt Strike",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://twitter.com/TheEnergyStory/status/1346096298311741440",
            "date": "2021-01-04",
            "organization": "Twitter (@TheEnergyStory)",
            "author": "Dominik Reichel",
            "title": "Some small detail on compiler used for TEARDROP",
            "categories": [
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://file2.api.drift.com/download/drift-prod-file-uploads/417f%2F417f74ae8ddd24aa7c2b43a23093983f/Supply%20Chain%20Attacks_%20Cyber%20Criminals%20Target%20the%20Weakest%20Link.pdf",
            "date": "2021",
            "organization": "Symantec",
            "author": "Symantec Threat Hunter Team",
            "title": "Supply Chain Attacks:Cyber Criminals Target the Weakest Link",
            "categories": [
                "Cobalt Strike",
                "Raindrop",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/12/28/using-microsoft-365-defender-to-coordinate-protection-against-solorigate/",
            "date": "2020-12-28",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Team",
            "title": "Using Microsoft 365 Defender to protect against Solorigate",
            "categories": [
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://twitter.com/TheEnergyStory/status/1342041055563313152",
            "date": "2020-12-24",
            "organization": "Twitter (@TheEnergyStory)",
            "author": "Dominik Reichel",
            "title": "Tweet on TEARDROP sample",
            "categories": [
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/solarstorm-supply-chain-attack-timeline",
            "date": "2020-12-23",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "A Timeline Perspective of the SolarStorm Supply-Chain Attack",
            "categories": [
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://medium.com/mitre-attack/identifying-unc2452-related-techniques-9f7b6c7f3714",
            "date": "2020-12-22",
            "organization": "Medium mitre-attack",
            "author": "Matt Malone",
            "title": "Identifying UNC2452-Related Techniques for ATT&CK",
            "categories": [
                "SUNBURST",
                "TEARDROP",
                "UNC2452"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/sunburst-teardrop-and-the-netsec-new-normal/",
            "date": "2020-12-22",
            "organization": "Checkpoint",
            "author": "Check Point Research",
            "title": "SUNBURST, TEARDROP and the NetSec New Normal",
            "categories": [
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://msrc-blog.microsoft.com/2020/12/21/december-21st-2020-solorigate-resource-center/",
            "date": "2020-12-21",
            "organization": "Microsoft",
            "author": "MSRC Team",
            "title": "Solorigate Resource Center",
            "categories": [
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/what-we-have-learned-so-far-about-the-sunburst-solarwinds-hack",
            "date": "2020-12-21",
            "organization": "Fortinet",
            "author": "Udi Yavo",
            "title": "What We Have Learned So Far about the \u201cSunburst\u201d/SolarWinds Hack",
            "categories": [
                "Cobalt Strike",
                "SUNBURST",
                "TEARDROP"
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
            "data_url": "https://twitter.com/craiu/status/1339954817247158272",
            "date": "2020-12-18",
            "organization": "",
            "author": "Costin Raiu",
            "title": "Tweet from Costin Raiu about confirmed TEARDROP sample",
            "categories": [
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/12/solarwinds-supplychain-coverage.html#more",
            "date": "2020-12-14",
            "organization": "Cisco Talos",
            "author": "Nick Biasini",
            "title": "Threat Advisory: SolarWinds supply chain attack",
            "categories": [
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/sunburst-supply-chain-attack-solarwinds",
            "date": "2020-12-14",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Sunburst: Supply Chain Attack Targets SolarWinds Users",
            "categories": [
                "SUNBURST",
                "TEARDROP"
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
        },
        {
            "data_url": "https://0xc0decafe.com/malware-analyst-guide-to-pe-timestamps/",
            "date": "2020-01-22",
            "organization": "",
            "author": "Thomas Barabosch",
            "title": "The malware analyst\u2019s guide to PE timestamps",
            "categories": [
                "Azorult",
                "Gozi",
                "IcedID",
                "ISFB",
                "LOLSnif",
                "SUNBURST",
                "TEARDROP"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "teardrop",
            "procedure_code": "s0560",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0560",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "teardrop ran as a windows service from the c:\\windows\\syswow64 folder.[120][121]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "teardrop ran as a windows service from the c:\\windows\\syswow64 folder.[120][121]"
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
                    "procedure_description": "teardrop was decoded using a custom rolling xor algorithm to execute a customized cobalt strike payload.[228][229][186]"
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
                    "procedure_description": "teardrop files had names that resembled legitimate window file and directory names.[165][135]"
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
                    "procedure_description": "teardrop modified the registry to create a windows service for itself on a compromised host.[161]"
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
                    "procedure_description": "teardrop created and read from a file with a fake jpg header, and its payload was encrypted with a simple rotating xor cipher.[317][328][264]"
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
                    "procedure_description": "teardrop checked that hku\\software\\microsoft\\ctf existed before decoding its embedded payload.[89][93]"
                }
            ]
        }
    ]
};