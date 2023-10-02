var threatdata = {
    "name": "SUNBURST",
    "alias": "SUNBURST, Solorigate",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-04-13",
    "all_data": {
        "tool": "SUNBURST",
        "names": [
            {
                "name": "SUNBURST"
            },
            {
                "name": "Solorigate"
            }
        ],
        "description": "(US-CERT) The threat actor has been observed leveraging a software supply chain compromise of SolarWinds Orion products. The adversary added a malicious version of the binary solarwinds.orion.core.businesslayer.dll into the SolarWinds software lifecycle, which was then signed by the legitimate SolarWinds code signing certificate. This binary, once installed, calls out to a victim-specific avsvmcloud[.]com domain using a protocol designed to mimic legitimate SolarWinds protocol traffic. After the initial check-in, the adversary can use the Domain Name System (DNS) response to selectively send back new domains or IP addresses for interactive command and control (C2) traffic. Consequently, entities that observe traffic from their SolarWinds Orion devices to avsvmcloud[.]com should not immediately conclude that the adversary leveraged the SolarWinds Orion backdoor. Instead, additional investigation is needed into whether the SolarWinds Orion device engaged in further unexplained communications. If additional Canonical Name record (CNAME) resolutions associated with the avsvmcloud[.]com domain are observed, possible additional adversary action leveraging the backdoor has occurred.",
        "category": "Malware",
        "type": [
            "Backdoor"
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
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-039a"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0559/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sunburst"
        ],
        "uuid": "e0b7942d-4f1d-4565-a5fe-e9ac69a68d5b",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "SUNBURST",
            "malware_alias": "Solorigate",
            "malware": "win.sunburst",
            "last_update": "2022-04-29 13:31:13",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "CE77D116A074DAB7A22A0FD4F2C1AB475F16EEC42E1DED3C0B0AA8211FE858D6",
                        "timestamp": "2022-04-29 13:31:13"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-04-29 13:31:13",
    "file_name": "sunburst",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cert.pl/posts/2023/04/kampania-szpiegowska-apt29/",
            "date": "2023-04-13",
            "organization": "CERT.PL",
            "author": "CERT.PL",
            "title": "CERT Polska and SKW warn against the activities of Russian spies",
            "categories": [
                "BOOMBOX",
                "EnvyScout",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/malware/2022/09/10/malware-pers-10.html",
            "date": "2022-09-10",
            "organization": "",
            "author": "cocomelonc",
            "title": "Malware development: persistence - part 10. Using Image File Execution Options. Simple C++ example.",
            "categories": [
                "SUNBURST"
            ]
        },
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
            "data_url": "https://r136a1.info/2022/06/18/using-dotnetfile-to-get-a-sunburst-timeline-for-intelligence-gathering/",
            "date": "2022-06-18",
            "organization": "R136a1",
            "author": "Dominik Reichel",
            "title": "Using dotnetfile to get a Sunburst timeline for intelligence gathering",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://unit42.paloaltonetworks.com/strategically-aged-domain-detection/",
            "date": "2021-12-29",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Zhanhao Chen",
            "title": "Strategically Aged Domain Detection: Capture APT Attacks With DNS Traffic Trends",
            "categories": [
                "Chrysaor",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/autodesk-reveals-it-was-targeted-by-russian-solarwinds-hackers/",
            "date": "2021-09-02",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Autodesk reveals it was targeted by Russian SolarWinds hackers",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blog.gigamon.com/2021/07/27/ghosts-on-the-wire-expanding-conceptions-of-network-anomalies/",
            "date": "2021-07-27",
            "organization": "Gigamon",
            "author": "Joe Slowik",
            "title": "Ghosts on the Wire: Expanding Conceptions of Network Anomalies",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://youtu.be/SW8kVkwDOrc?t=24706",
            "date": "2021-06-12",
            "organization": "YouTube (BSidesBoulder)",
            "author": "Kurt Baumgartner",
            "title": "Same and Different - sesame street level attribution",
            "categories": [
                "Kazuar",
                "SUNBURST"
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
            "data_url": "https://www.wired.com/story/hacker-lexicon-what-is-a-supply-chain-attack/",
            "date": "2021-05-31",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "Hacker Lexicon: What Is a Supply Chain Attack?",
            "categories": [
                "EternalPetya",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-134a",
            "date": "2021-05-14",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Analysis Report (AR21-134A): Eviction Guidance for Networks Affected by the SolarWinds and Active Directory/M365 Compromise",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://therecord.media/solarwinds-says-fewer-than-100-customers-were-impacted-by-supply-chain-attack",
            "date": "2021-05-08",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "SolarWinds says fewer than 100 customers were impacted by supply chain attack",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.sec.gov/ix?doc=/Archives/edgar/data/1739942/000173994221000076/swi-20210507.htm",
            "date": "2021-05-07",
            "organization": "SolarWinds",
            "author": "Solarwind",
            "title": "An Investigative Update of the Cyberattack",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://community.riskiq.com/article/9a515637",
            "date": "2021-04-22",
            "organization": "RiskIQ",
            "author": "RiskIQ",
            "title": "SolarWinds: Advancing the Story",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.gov.pl/web/diplomacy/statement-on-solar-winds-orion-cyberattacks",
            "date": "2021-04-15",
            "organization": "Ministry of Foreign Affairs Republic of Poland",
            "author": "Ministry of Foreign Affairs Republic of Poland",
            "title": "Statement on Solar Winds Orion cyberattacks",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.mfa.gov.lv/en/news/latest-news/67813-latvia-s-statement-following-the-announcement-by-the-united-states-of-actions-to-respond-to-the-russian-federation-s-destabilizing-activities",
            "date": "2021-04-15",
            "organization": "Ministry of foreign affairs of the Republic of Latvia",
            "author": "Ministry of foreign affairs of the Republic of Latvia",
            "title": "Latvia\u2019s statement following the announcement by the United States of actions to respond to the Russian Federation\u2019s destabilizing activities (Deadlink)",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.consilium.europa.eu/en/press/press-releases/2021/04/15/declaration-by-the-high-representative-on-behalf-of-the-european-union-expressing-solidarity-with-the-united-states-on-the-impact-of-the-solarwinds-cyber-operation",
            "date": "2021-04-15",
            "organization": "European Council",
            "author": "Council of the European Union",
            "title": "Declaration by the High Representative on behalf of the European Union expressing solidarity with the United States on the impact of the SolarWinds cyber operation",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.nato.int/cps/en/natolive/official_texts_183168.htm?selectedLocale=en",
            "date": "2021-04-15",
            "organization": "North Atlantic Treaty Organization",
            "author": "NATO",
            "title": "North Atlantic Council Statement following the announcement by the United States of actions with regard to Russia",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa21-077a",
            "date": "2021-03-18",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Alert (AA21-077A): Detecting Post-Compromise Threat Activity Using the CHIRP IOC Detection Tool",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://github.com/cisagov/CHIRP",
            "date": "2021-03-18",
            "organization": "Github (cisagov)",
            "author": "CISA",
            "title": "CISA Hunt and Incident Response Program (CHIRP)",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/sites/default/files/publications/SolarWinds_and_AD-M365_Compromise-Detecting_APT_Activity_from_Known_TTPs.pdf",
            "date": "2021-03-17",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "SolarWinds and Active Directory/M365 Compromise: Detecting Advanced Persistent Threat Activity from Known Tactics, Techniques, and Procedures (Dead Link)",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.mimecast.com/incident-report/",
            "date": "2021-03-16",
            "organization": "Mimecast",
            "author": "Mimecast",
            "title": "Incident Report",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/remediating-apt-compromised-networks",
            "date": "2021-03-10",
            "organization": "US-CERT",
            "author": "CISA",
            "title": "Remediating Networks Affected by the SolarWinds and Active Directory/M365 Compromise",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://www.microsoft.com/en-us/security/business/threat-protection/solorigate-detection-guidance",
            "date": "2021-03-01",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Detect and defend against the recent nation-state cyber attack",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://www.youtube.com/watch?v=dV2QTLSecpc",
            "date": "2021-02-26",
            "organization": "YouTube (Oversight Committee)",
            "author": "Oversight Committee",
            "title": "Weathering the Storm: The Role of Private Tech in the SolarWinds Breach and Ongoing Campaign",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://github.com/github/codeql/tree/main/csharp/ql/src/experimental/Security%20Features/campaign",
            "date": "2021-02-25",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "CodeQL queries to hunt for Solorigate activity",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.brighttalk.com/webcast/7451/469525",
            "date": "2021-02-25",
            "organization": "BrightTALK (FireEye)",
            "author": "Andrew Rector",
            "title": "Light in the Dark: Hunting for SUNBURST",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/02/25/microsoft-open-sources-codeql-queries-used-to-hunt-for-solorigate-activity/",
            "date": "2021-02-25",
            "organization": "Microsoft",
            "author": "Microsoft Identity Security Team",
            "title": "Microsoft open sources CodeQL queries used to hunt for Solorigate activity",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/nasa-and-the-faa-were-also-breached-by-the-solarwinds-hackers/",
            "date": "2021-02-24",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "NASA and the FAA were also breached by the SolarWinds hackers",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://thenewstack.io/behind-the-scenes-of-the-sunburst-attack/",
            "date": "2021-02-19",
            "organization": "THE NEW STACK",
            "author": "Lior Sonntag",
            "title": "Behind the Scenes of the SunBurst Attack",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blog.apiiro.com/detect-and-prevent-the-solarwinds-build-time-code-injection-attack",
            "date": "2021-02-17",
            "organization": "apirro",
            "author": "Ariel Levy",
            "title": "Detect and prevent the SolarWinds build-time code injection attack",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://youtu.be/Ta_vatZ24Cs?t=59",
            "date": "2021-02-17",
            "organization": "YouTube (The White House)",
            "author": "Anne Neuberger",
            "title": "Update on Investigaton on Solarwinds supply chain attack from the Deputy National Security Advisor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://netresec.com/?b=212a6ad",
            "date": "2021-02-17",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "Targeting Process for the SolarWinds Backdoor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/products-and-services/2021/02/light-in-the-dark-hunting-for-sunburst.html",
            "date": "2021-02-16",
            "organization": "FireEye",
            "author": "Matt Bromiley",
            "title": "Light in the Dark: Hunting for SUNBURST",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar21-039a",
            "date": "2021-02-08",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR21-039A): SUNBURST",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.aon.com/cyber-solutions/aon_cyber_labs/cloudy-with-a-chance-of-persistent-email-access/",
            "date": "2021-01-29",
            "organization": "Aon",
            "author": "Partha Alwar",
            "title": "Cloudy with a Chance of Persistent Email Access",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=-Vsgmw2G4Wo",
            "date": "2021-01-28",
            "organization": "YouTube (Microsoft Security Community)",
            "author": "Microsoft",
            "title": "Microsoft 365 Defender webinar: Protect, Detect, and Respond to Solorigate using M365 Defender",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2021/deep-into-the-sunburst-attack/",
            "date": "2021-01-28",
            "organization": "Check Point",
            "author": "Lior Sonntag",
            "title": "Deep into the SunBurst Attack",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/mimecast-links-security-breach-to-solarwinds-hackers/",
            "date": "2021-01-26",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Mimecast links security breach to SolarWinds hackers",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://fidelissecurity.com/threatgeek/data-protection/ongoing-analysis-solarwinds-impact/",
            "date": "2021-01-26",
            "organization": "Fidelis",
            "author": "Chris Kubic",
            "title": "Ongoing Analysis of SolarWinds Impacts",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.mimecast.com/blog/important-security-update/",
            "date": "2021-01-26",
            "organization": "Mimecast",
            "author": "Mimecast Contributing Writer",
            "title": "Important Security Update",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://ics-cert.kaspersky.com/reports/2021/01/26/sunburst-industrial-victims/",
            "date": "2021-01-26",
            "organization": "Kaspersky Labs",
            "author": "Kaspersky Lab ICS CERT",
            "title": "SunBurst industrial victims",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://netresec.com/?b=211cd21",
            "date": "2021-01-25",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "Twenty-three SUNBURST Targets Identified",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://zengo.com/ungilded-secrets-a-new-paradigm-for-key-security/",
            "date": "2021-01-25",
            "organization": "ZenGo",
            "author": "Tal Be'ery",
            "title": "Ungilded Secrets: A New Paradigm for Key Security",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://vrieshd.medium.com/finding-sunburst-victims-and-targets-by-using-passivedns-osint-68f5704a3cdc",
            "date": "2021-01-24",
            "organization": "Medium vrieshd",
            "author": "VriesHD",
            "title": "Finding SUNBURST victims and targets by using passive DNS, OSINT",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/change-in-perspective-on-the-utility-of-sunburst-related-network-indicators#",
            "date": "2021-01-22",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Change in Perspective on the Utility of SUNBURST-related Network Indicators",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/solarwinds-sunburst-sending-data",
            "date": "2021-01-22",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "SolarWinds: How Sunburst Sends Data Back to the Attackers",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://notes.netbytesec.com/2021/01/solarwinds-attack-sunbursts-dll.html",
            "date": "2021-01-21",
            "organization": "NetbyteSEC",
            "author": "Fareed Fauzi",
            "title": "Solarwinds Attack: Sunburst's DLL Technical Analysis",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://github.com/fireeye/Mandiant-Azure-AD-Investigator",
            "date": "2021-01-19",
            "organization": "Github (fireeye)",
            "author": "FireEye",
            "title": "Mandiant Azure AD Investigator: Focusing on UNC2452 TTPs",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://www.a12d404.net/ranting/2021/01/17/msbuild-backdoor.html",
            "date": "2021-01-17",
            "organization": "a12d404",
            "author": "Markus Pi\u00e9ton",
            "title": "Backdooring MSBuild",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/solarwinds-sunburst-command-control",
            "date": "2021-01-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "SolarWinds: Insights into Attacker Command and Control Process",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/01/14/increasing-resilience-against-solorigate-and-other-sophisticated-attacks-with-microsoft-defender/",
            "date": "2021-01-14",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Team",
            "title": "Increasing resilience against Solorigate and other sophisticated attacks with Microsoft Defender",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/the-devils-in-the-details-sunburst-attribution",
            "date": "2021-01-14",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "The Devil\u2019s in the Details: SUNBURST Attribution",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://securelist.com/sunburst-backdoor-kazuar/99981/",
            "date": "2021-01-11",
            "organization": "Kaspersky Labs",
            "author": "Georgy Kucherin",
            "title": "Sunburst backdoor \u2013 code overlaps with Kazuar",
            "categories": [
                "Kazuar",
                "SUNBURST"
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
            "data_url": "https://netresec.com/?b=211f30f",
            "date": "2021-01-11",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "Robust Indicators of Compromise for SUNBURST",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/sunspot-malware-technical-analysis/",
            "date": "2021-01-11",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "SUNSPOT: An Implant in the Build Process",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://www.splunk.com/en_us/blog/security/a-golden-saml-journey-solarwinds-continued.html",
            "date": "2021-01-08",
            "organization": "splunk",
            "author": "Marcus LaFerrera",
            "title": "A Golden SAML Journey: SolarWinds Continued",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/solarwinds-unique-dga",
            "date": "2021-01-07",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "SolarWinds: How a Rare DGA Helped Attacker Communications Fly Under the Radar",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blog.truesec.com/2021/01/07/avoiding-supply-chain-attacks-similar-to-solarwinds-orions-sunburst",
            "date": "2021-01-07",
            "organization": "TRUESEC",
            "author": "Sebastian Olsson",
            "title": "Avoiding supply-chain attacks similar to SolarWinds Orion\u2019s (SUNBURST)",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://mitre-attack.github.io/attack-navigator/#layerURL=https://raw.githubusercontent.com/center-for-threat-informed-defense/public-resources/master/solorigate/UNC2452.json",
            "date": "2021-01-06",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "ATT&CK Navigator layer for UNC2452",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/department-justice-statement-solarwinds-update",
            "date": "2021-01-06",
            "organization": "Department of Justice",
            "author": "Department of Justice",
            "title": "Department of Justice Statement on Solarwinds Update",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/supply-chain-compromise",
            "date": "2021-01-06",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Supply Chain Compromise",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://github.com/SentineLabs/SolarWinds_Countermeasures",
            "date": "2021-01-06",
            "organization": "Github (SentinelLabs)",
            "author": "SentinelLabs",
            "title": "SolarWinds_Countermeasures",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/news/2021/01/05/joint-statement-federal-bureau-investigation-fbi-cybersecurity-and-infrastructure",
            "date": "2021-01-05",
            "organization": "",
            "author": "NSA",
            "title": "Joint Statement by the Federal Bureau of Investigation (FBI), the Cybersecurity and Infrastructure Security Agency (CISA), the Office of the Director of National Intelligence (ODNI), and the National Security Agency (NSA)",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.4hou.com/posts/KzZR",
            "date": "2021-01-05",
            "organization": "Sangfor",
            "author": "Clairvoyance Safety Laboratory",
            "title": "Red team's perspective on the TTPs in Sunburst's backdoor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://netresec.com/?b=2113a6a",
            "date": "2021-01-04",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "Finding Targeted SUNBURST Victims with pDNS",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/media/10916/download",
            "date": "2021",
            "organization": "Mandiant",
            "author": "Mandiant",
            "title": "M-TRENDS 2021",
            "categories": [
                "Cobalt Strike",
                "SUNBURST"
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
            "data_url": "https://www.domaintools.com/content/conceptualizing-a-continuum-of-cyber-threat-attribution.pdf",
            "date": "2021",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Conceptualizing a Continuum of Cyber Threat Attribution",
            "categories": [
                "CHINACHOPPER",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://msrc-blog.microsoft.com/2020/12/31/microsoft-internal-solorigate-investigation-update/",
            "date": "2020-12-31",
            "organization": "Microsoft",
            "author": "MSRC Team",
            "title": "Microsoft Internal Solorigate Investigation Update",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/solarwinds/sunburst-behavioral-analytics-and-collective-defense-in-action",
            "date": "2020-12-31",
            "organization": "IronNet",
            "author": "IronNet",
            "title": "SolarWinds/SUNBURST: Behavioral analytics and Collective Defense in action",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/pov-2020-1230.pdf",
            "date": "2020-12-30",
            "organization": "Recorded Future",
            "author": "John Wetzel",
            "title": "SOLARWINDS ATTRIBUTION: Are We Getting Ahead of Ourselves? An Analysis of UNC2452 Attribution",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.netresec.com/?page=Blog&month=2020-12&post=Extracting-Security-Products-from-SUNBURST-DNS-Beacons",
            "date": "2020-12-29",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "Extracting Security Products from SUNBURST DNS Beacons",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.cyberark.com/resources/threat-research-blog/golden-saml-revisited-the-solorigate-connection",
            "date": "2020-12-29",
            "organization": "CyberArk",
            "author": "Shaked Reiner",
            "title": "Golden SAML Revisited: The Solorigate Connection",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://www.comae.com/posts/sunburst-memory-analysis/",
            "date": "2020-12-25",
            "organization": "Comae",
            "author": "Matt Suiche",
            "title": "SUNBURST & Memory Analysis",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/12/sunburst-additional-technical-details.html",
            "date": "2020-12-24",
            "organization": "FireEye",
            "author": "Stephen Eckels",
            "title": "SUNBURST Additional Technical Details",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/UqXC1vovKUu97569LkYm2Q",
            "date": "2020-12-23",
            "organization": "Qianxin",
            "author": "Qi AnXin CERT",
            "title": "\u4eceSolarwinds\u4f9b\u5e94\u94fe\u653b\u51fb\uff08\u91d1\u94fe\u718a\uff09\u770bAPT\u884c\u52a8\u4e2d\u7684\u9690\u853d\u4f5c\u6218",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/crowdstrike-launches-free-tool-to-identify-and-help-mitigate-risks-in-azure-active-directory/",
            "date": "2020-12-23",
            "organization": "CrowdStrike",
            "author": "Michael Sentonas",
            "title": "CrowdStrike Launches Free Tool to Identify and Help Mitigate Risks in Azure Active Directory",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://prevasio.com/static/web/viewer.html?file=/static/Anatomy_Of_SolarWinds_Supply_Chain_Attack.pdf",
            "date": "2020-12-23",
            "organization": "Prevasio",
            "author": "Sergei Shevchenko",
            "title": "DNS Tunneling In The SolarWinds Supply Chain Attack",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://techcommunity.microsoft.com/t5/azure-active-directory-identity/azure-ad-workbook-to-help-you-assess-solorigate-risk/ba-p/2010718",
            "date": "2020-12-22",
            "organization": "Microsoft",
            "author": "Alex Weinert",
            "title": "Azure AD workbook to help you assess Solorigate risk",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blog.prevasio.com/2020/12/sunburst-backdoor-part-iii-dga-security.html",
            "date": "2020-12-22",
            "organization": "Prevasio",
            "author": "Sergei Shevchenko",
            "title": "Sunburst Backdoor, Part III: DGA & Security Software (Broken Link)",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/hitchhikers-guide-solarwinds-incident-response",
            "date": "2020-12-22",
            "organization": "Zscaler",
            "author": "Zscaler",
            "title": "The Hitchhiker\u2019s Guide to SolarWinds Incident Response",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/1R79Q1oC18GmKK8FYBoYEt0vYF7SpsvQI/view",
            "date": "2020-12-22",
            "organization": "FBI",
            "author": "FBI",
            "title": "PIN Number 20201222-001: Advanced Persistent Threat Actors Leverage SolarWinds Vulnerabilities",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=mbGN1xqy1jY",
            "date": "2020-12-22",
            "organization": "Youtube (Colin Hardy)",
            "author": "Colin Hardy",
            "title": "SUNBURST SolarWinds RECON - Malware Reverse Engineering, OSINT and Identifying Victims",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/solarwinds-attacks-stealthy-attackers-attempted-evade-detection",
            "date": "2020-12-22",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "SolarWinds Attacks: Stealthy Attackers Attempted To Evade Detection",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/how-a-device-to-cloud-architecture-defends-against-the-solarwinds-supply-chain-compromise/",
            "date": "2020-12-21",
            "organization": "McAfee",
            "author": "Mo Cashman",
            "title": "How A Device to Cloud Architecture Defends Against the SolarWinds Supply Chain Compromise",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/a-closer-look-at-the-solarwinds/sunburst-malware-dga-or-dns-tunneling",
            "date": "2020-12-21",
            "organization": "IronNet",
            "author": "Peter Rydzynski",
            "title": "SolarWinds/SUNBURST: DGA or DNS Tunneling?",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://techcommunity.microsoft.com/t5/azure-active-directory-identity/understanding-quot-solorigate-quot-s-identity-iocs-for-identity/ba-p/2007610",
            "date": "2020-12-21",
            "organization": "Microsoft",
            "author": "Alex Weinert",
            "title": "Understanding \"Solorigate\"'s Identity IOCs - for Identity Vendors and their customers.",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://news.sophos.com/en-us/2020/12/21/how-sunburst-malware-does-defense-evasion/",
            "date": "2020-12-21",
            "organization": "SophosLabs Uncut",
            "author": "SophosLabs Threat Research",
            "title": "How SunBurst malware does defense evasion",
            "categories": [
                "SUNBURST",
                "UNC2452"
            ]
        },
        {
            "data_url": "https://docs.google.com/spreadsheets/d/1u0_Df5OMsdzZcTkBDiaAtObbIOkMa5xbeXdKk_k0vWs",
            "date": "2020-12-20",
            "organization": "Twitter (@TychoTithonus)",
            "author": "Royce Williams",
            "title": "SolarWinds/SunBurst FNV-1a-XOR hashes found in analysis",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://medium.com/insomniacs/a-look-into-sunbursts-dga-ba4029193947",
            "date": "2020-12-20",
            "organization": "Medium Asuna Amawaka",
            "author": "Asuna Amawaka",
            "title": "A Look into SUNBURST\u2019s DGA",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/the-solarwinds-cyberattack-the-hack-the-victims-and-what-we-know/",
            "date": "2020-12-19",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "The SolarWinds cyberattack: The hack, the victims, and what we know",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://community.ibm.com/community/user/security/blogs/gladys-koskas1/2020/12/18/sunburst-indicator-detection-in-qradar",
            "date": "2020-12-18",
            "organization": "IBM",
            "author": "Gladys Koskas",
            "title": "SUNBURST indicator detection in QRadar",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://threatconnect.com/blog/tracking-sunburst-related-activity-with-threatconnect-dashboards",
            "date": "2020-12-18",
            "organization": "ThreatConnect",
            "author": "ThreatConnect",
            "title": "Tracking Sunburst-Related Activity with ThreatConnect Dashboards",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/solarwinds-sunburst-backdoor-inside-the-stealthy-apt-campaign/",
            "date": "2020-12-18",
            "organization": "Sentinel LABS",
            "author": "James Haughom",
            "title": "SolarWinds SUNBURST Backdoor: Inside the APT Campaign",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/continuous-eruption-further-analysis-of-the-solarwinds-supply-incident",
            "date": "2020-12-18",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Continuous Eruption: Further Analysis of the SolarWinds Supply Chain Incident",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://blog.cloudflare.com/a-quirk-in-the-sunburst-dga-algorithm/",
            "date": "2020-12-18",
            "organization": "Cloudflare",
            "author": "Nick Blazier",
            "title": "A quirk in the SUNBURST DGA algorithm",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://securelist.com/sunburst-connecting-the-dots-in-the-dns-requests/99862/",
            "date": "2020-12-18",
            "organization": "Kaspersky Labs",
            "author": "Igor Kuznetsov",
            "title": "Sunburst: connecting the dots in the DNS requests",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.elastic.co/blog/supervised-and-unsupervised-machine-learning-for-dga-detection",
            "date": "2020-12-18",
            "organization": "Elastic",
            "author": "Camilla Montonen",
            "title": "Combining supervised and unsupervised machine learning for DGA detection",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.prevasio.io/blog/sunburst-backdoor-part-ii-dga-the-list-of-victims",
            "date": "2020-12-17",
            "organization": "Prevasio",
            "author": "Sergei Shevchenko",
            "title": "Sunburst Backdoor, Part II: DGA & The List of Victims",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.netresec.com/?page=Blog&month=2020-12&post=Reassembling-Victim-Domain-Fragments-from-SUNBURST-DNS",
            "date": "2020-12-17",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "Reassembling Victim Domain Fragments from SUNBURST DNS",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/smoothing-the-bumps-of-onboarding-threat-indicators-into-splunk-enterprise-security.html",
            "date": "2020-12-17",
            "organization": "splunk",
            "author": "John Stoner",
            "title": "Onboarding Threat Indicators into Splunk Enterprise Security: SolarWinds Continued",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blog.truesec.com/2020/12/17/the-solarwinds-orion-sunburst-supply-chain-attack/",
            "date": "2020-12-17",
            "organization": "TRUESEC",
            "author": "Fabio Viggiani",
            "title": "The SolarWinds Orion SUNBURST supply-chain Attack",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.trustedsec.com/blog/solarwinds-backdoor-sunburst-incident-response-playbook/?hss_channel=tw-403811306",
            "date": "2020-12-17",
            "organization": "TrustedSec",
            "author": "Trustedsec",
            "title": "SolarWinds Backdoor (Sunburst) Incident Response Playbook",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=JoMwrkijTZ8",
            "date": "2020-12-17",
            "organization": "Youtube (Colin Hardy)",
            "author": "Colin Hardy",
            "title": "SUNBURST SolarWinds Malware - Tools, Tactics and Methods to get you started with Reverse Engineering",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/additional-analysis-into-the-sunburst-backdoor/",
            "date": "2020-12-17",
            "organization": "McAfee",
            "author": "Christiaan Beek",
            "title": "Additional Analysis into the SUNBURST Backdoor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/megabeets_/status/1339308801112027138",
            "date": "2020-12-17",
            "organization": "Twitter (@megabeets_)",
            "author": "Itay Cohen",
            "title": "Tweet on SUNBURST malware discussing some of its evasion techniques",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blogs.microsoft.com/on-the-issues/2020/12/17/cyberattacks-cybersecurity-solarwinds-fireeye/",
            "date": "2020-12-17",
            "organization": "Microsoft",
            "author": "Brad Smith",
            "title": "A moment of reckoning: the need for a strong and global cybersecurity response",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa20-352a",
            "date": "2020-12-17",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA20-352A): Advanced Persistent Threat Compromise of Government Agencies, Critical Infrastructure, and Private Sector Organizations",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/fireeye-microsoft-create-kill-switch-for-solarwinds-backdoor/",
            "date": "2020-12-16",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "FireEye, Microsoft create kill switch for SolarWinds backdoor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/0xrb/status/1339199268146442241",
            "date": "2020-12-16",
            "organization": "Twitter (@0xrb)",
            "author": "R. Bansal",
            "title": "List of domain infrastructure including DGA domain used by UNC2452",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/cybercdh/status/1339241246024404994",
            "date": "2020-12-16",
            "organization": "Twitter @cybercdh)",
            "author": "Colin Hardy",
            "title": "Tweet on 3 key actions SUNBURST performs as soon as it's invoked",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/v-ekPFtVNZG1W7vWjcuVug",
            "date": "2020-12-16",
            "organization": "Qianxin",
            "author": "Red Raindrop Team",
            "title": "\u4e2d\u62db\u76ee\u6807\u9996\u6b21\u62ab\u9732\uff1aSolarWinds\u4f9b\u5e94\u94fe\u653b\u51fb\u76f8\u5173\u57df\u540d\u751f\u6210\u7b97\u6cd5\u53ef\u7834\u89e3\uff01",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/Intel471Inc/status/1339233255741120513",
            "date": "2020-12-16",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Intel471's full statement on their knowledge of SolarWinds and the cybercriminal underground",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/FireEye/status/1339295983583244302",
            "date": "2020-12-16",
            "organization": "Twitter (@FireEye)",
            "author": "FireEye",
            "title": "Tweet on SUNBURST from FireEye detailing some additional information",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://pastebin.com/6EDgCKxd",
            "date": "2020-12-16",
            "organization": "Pastebin",
            "author": "Anonymous",
            "title": "Paste of subdomain & DGA domain names used in SolarWinds attack",
            "categories": [
                "SUNBURST",
                "UNC2452"
            ]
        },
        {
            "data_url": "https://www.cyborgsecurity.com/blog/sunburst-solarwinds-supply-chain-attack/",
            "date": "2020-12-16",
            "organization": "Cyborg Security",
            "author": "Josh Meltzer",
            "title": "SUNBURST: SolarWinds Supply-Chain Attack",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://techcommunity.microsoft.com/t5/azure-sentinel/solarwinds-post-compromise-hunting-with-azure-sentinel/ba-p/1995095",
            "date": "2020-12-16",
            "organization": "Microsoft",
            "author": "Shain Wray",
            "title": "SolarWinds Post-Compromise Hunting with Azure Sentinel",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blog.cloudflare.com/solarwinds-orion-compromise-trend-data/",
            "date": "2020-12-16",
            "organization": "Cloudflare",
            "author": "Jesse Kipp",
            "title": "Trend data on the SolarWinds Orion compromise",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://github.com/RedDrip7/SunBurst_DGA_Decode",
            "date": "2020-12-16",
            "organization": "Github (RedDrip7)",
            "author": "RedDrip7",
            "title": "A script to decode SUNBURST DGA domain",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blog.reversinglabs.com/blog/sunburst-the-next-level-of-stealth",
            "date": "2020-12-16",
            "organization": "ReversingLabs",
            "author": "Tomislav Pericin",
            "title": "SunBurst: the next level of stealth SolarWinds compromise exploited through sophistication and patience",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.cyborgsecurity.com/cyborg_labs/threat-hunt-deep-dives-solarwinds-supply-chain-compromise-solorigate-sunburst-backdoor/",
            "date": "2020-12-15",
            "organization": "Cyborg Security",
            "author": "Austin Jackson",
            "title": "Threat Hunt Deep Dives: SolarWinds Supply Chain Compromise (Solorigate / SUNBURST Backdoor)",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/lh7y_KHUxag_-pcFBC7d0Q",
            "date": "2020-12-15",
            "organization": "360 Threat Intelligence Center",
            "author": "Advanced Threat Institute",
            "title": "Operation Falling Eagle-the secret of the most influential supply chain attack in history",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.prevasio.io/blog/sunburst-backdoor-a-deeper-look-into-the-solarwinds-supply-chain-malware",
            "date": "2020-12-15",
            "organization": "Prevasio",
            "author": "Sergei Shevchenko",
            "title": "Sunburst Backdoor: A Deeper Look Into The SolarWinds' Supply Chain Malware (Broken link)",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/cybercdh/status/1338885244246765569",
            "date": "2020-12-15",
            "organization": "Twitter @cybercdh)",
            "author": "Colin Hardy",
            "title": "Tweet on CyberChef recipe to extract and decode strings from #SolarWinds malware binaries.",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://corelight.blog/2020/12/15/finding-sunburst-backdoor-with-zeek-logs-and-corelight/",
            "date": "2020-12-15",
            "organization": "Corelight",
            "author": "John Gamble",
            "title": "Finding SUNBURST Backdoor with Zeek Logs & Corelight",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://github.com/sophos-cybersecurity/solarwinds-threathunt",
            "date": "2020-12-15",
            "organization": "Github (sophos-cybersecurity)",
            "author": "Sophos Cyber Security Team",
            "title": "solarwinds-threathunt",
            "categories": [
                "Cobalt Strike",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/cybercdh/status/1338975171093336067",
            "date": "2020-12-15",
            "organization": "Twitter @cybercdh)",
            "author": "Colin Hardy",
            "title": "Tweet on some more capabilties of SUNBURST backdoor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.picussecurity.com/resource/blog/ttps-used-in-the-solarwinds-breach",
            "date": "2020-12-15",
            "organization": "PICUS Security",
            "author": "S\u00fcleyman \u00d6zarslan",
            "title": "Tactics, Techniques, and Procedures (TTPs) Used in the SolarWinds Breach",
            "categories": [
                "Cobalt Strike",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.volexity.com/blog/2020/12/14/dark-halo-leverages-solarwinds-compromise-to-breach-organizations/",
            "date": "2020-12-14",
            "organization": "Volexity",
            "author": "Damien Cash",
            "title": "Dark Halo Leverages SolarWinds Compromise to Breach Organizations",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/lordx64/status/1338526166051934213",
            "date": "2020-12-14",
            "organization": "Twitter (@lordx64)",
            "author": "Taha Karim",
            "title": "Tweet on a one liner to decrypt SUNBURST backdoor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/unraveling-network-infrastructure-linked-to-the-solarwinds-hack",
            "date": "2020-12-14",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Unraveling Network Infrastructure Linked to the SolarWinds Hack",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/sunburst-backdoor-detections-in-splunk.html",
            "date": "2020-12-14",
            "organization": "splunk",
            "author": "Ryan Kovar",
            "title": "Using Splunk to Detect Sunburst Backdoor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=cMauHTV-lJg",
            "date": "2020-12-14",
            "organization": "Youtube (Ali Hadi)",
            "author": "Ali Hadi",
            "title": "Learning about .NET Malware by Going Over the SUNBURST SolarWinds Backdoor",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/ItsReallyNick/status/1338382939835478016",
            "date": "2020-12-14",
            "organization": "Twitter (@ItsReallyNick)",
            "author": "Nick Carr",
            "title": "Tweet on summarizing post-compromise actvity of UNC2452",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/12/14/solarwinds-playbook/",
            "date": "2020-12-14",
            "organization": "Sophos",
            "author": "Ross McKerchar",
            "title": "Incident response playbook for responding to SolarWinds Orion compromise",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/fireeye-solarstorm-sunburst/",
            "date": "2020-12-14",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Threat Brief: SolarStorm and SUNBURST Customer Coverage",
            "categories": [
                "Cobalt Strike",
                "SUNBURST"
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
            "data_url": "https://www.trustedsec.com/blog/solarwinds-orion-and-unc2452-summary-and-recommendations/",
            "date": "2020-12-14",
            "organization": "TrustedSec",
            "author": "Nick Gilberti",
            "title": "SolarWinds Orion and UNC2452 \u2013 Summary and Recommendations",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://gist.github.com/olafhartong/71ffdd4cab4b6acd5cbcd1a0691ff82f",
            "date": "2020-12-14",
            "organization": "",
            "author": "Olaf Hartong",
            "title": "FireEye Sunburst KQL Detections",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://www.cadosecurity.com/post/responding-to-solarigate",
            "date": "2020-12-14",
            "organization": "Cado Security",
            "author": "Christopher Doman",
            "title": "Responding to Solarigate",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://twitter.com/KimZetter/status/1338305089597964290",
            "date": "2020-12-14",
            "organization": "Twitter (@KimZetter)",
            "author": "Kim Zetter",
            "title": "Tweet thread on microsoft report on Solarwind supply chain attack by UNC2452",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?Name=Trojan:MSIL/Solorigate.B!dha",
            "date": "2020-12-13",
            "organization": "Microsoft",
            "author": "Microsoft Security Intelligence",
            "title": "Trojan:MSIL/Solorigate.B!dha",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://us-cert.cisa.gov/ncas/current-activity/2020/12/13/active-exploitation-solarwinds-software",
            "date": "2020-12-13",
            "organization": "CISA",
            "author": "CISA",
            "title": "Active Exploitation of SolarWinds Software",
            "categories": [
                "SUNBURST"
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
            "data_url": "https://vxug.fakedoma.in/samples/Exotic/UNC2452/SolarWinds%20Breach/",
            "date": "2020-12-13",
            "organization": "",
            "author": "VX-Underground",
            "title": "Directory: /samples/Exotic/UNC2452/SolarWinds Breach/",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.securonix.com/web/wp-content/uploads/2020/12/threat_research_solarwinds_sunburst_eclipser_supply_chain.pdf",
            "date": "2020-12-08",
            "organization": "Securonix",
            "author": "Oleg Kolesnikov",
            "title": "Detecting SolarWinds/SUNBURST/ECLIPSER Supply Chain Attacks",
            "categories": [
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/current-threats/sunburst-malware.html",
            "date": "2020-12",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Solarwinds Breach Resource Center",
            "categories": [
                "SUNBURST"
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
            "procedure_name": "sunburst",
            "procedure_code": "s0559",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0559",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "sunburst used vbscripts to initiate the execution of payloads.[151]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "sunburst used the wmi query select * from win32_systemdriver to retrieve a driver listing.[123]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1546.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/012",
                    "technique_name": "event triggered execution : image file execution options injection",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by image file execution options (ifeo) debuggers. ifeos enable a developer to attach a debugger to an application. when a process is created, a debugger present in an application\u2019s ifeo will be prepended to the application\u2019s name, effectively launching the new process under the debugger (e.g., c:\\dbg\\ntsd.exe -g  notepad.exe).",
                    "procedure_description": "sunburst created an image file execution options (ifeo) debugger registry value for the process dllhost.exe to trigger the installation of cobalt strike.[10]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1546.012",
                    "technique_link": "https://attack.mitre.org/techniques/T1546/012",
                    "technique_name": "event triggered execution : image file execution options injection",
                    "technique_description": "adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by image file execution options (ifeo) debuggers. ifeos enable a developer to attach a debugger to an application. when a process is created, a debugger present in an application\u2019s ifeo will be prepended to the application\u2019s name, effectively launching the new process under the debugger (e.g., c:\\dbg\\ntsd.exe -g  notepad.exe).",
                    "procedure_description": "sunburst created an image file execution options (ifeo) debugger registry value for the process dllhost.exe to trigger the installation of cobalt strike.[10]"
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
                    "procedure_description": "sunburst attempted to disable software security services following checks against a fnv-1a + xor hashed hardcoded blocklist.[84]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070",
                    "technique_link": "https://attack.mitre.org/techniques/T1070",
                    "technique_name": "indicator removal",
                    "technique_description": "adversaries may delete or modify artifacts generated within systems to remove evidence of their presence or hinder defenses. various artifacts may be created by an adversary or something that can be attributed to an adversary\u2019s actions. typically these artifacts are used as defensive indicators related to monitored events, such as strings from downloaded files, logs that are generated from user actions, and other data analyzed by defenders. location, format, and type of artifact (such as command or login history) are often specific to each platform.",
                    "procedure_description": "sunburst removed http proxy registry values to clean up traces of execution.[23]"
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
                    "procedure_description": "sunburst had a command to delete files.[221][230]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/007",
                    "technique_name": "indicator removal : clear network connection history and configurations",
                    "technique_description": "adversaries may clear or remove evidence of malicious network connections in order to clean up traces of their operations. configuration settings as well as various artifacts that highlight connection history may be created on a system from behaviors that require network connections, such as remote services or external remote services. defenders may use these artifacts to monitor or otherwise analyze network connections created by adversaries.",
                    "procedure_description": "sunburst also removed the firewall rules it created during execution.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/009",
                    "technique_name": "indicator removal : clear persistence",
                    "technique_description": "adversaries may clear artifacts associated with previously established persistence on a host system to remove evidence of their activity. this may involve various actions, such as removing services, deleting executables, modify registry, plist file modification, or other methods of cleanup to prevent defenders from collecting evidence of their persistent presence. adversaries may also delete accounts previously created to maintain persistence (i.e. create account).",
                    "procedure_description": "sunburst removed ifeo registry values to clean up traces of persistence.[10]"
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
                    "procedure_description": "sunburst created vbscripts that were named after existing services or folders to blend into legitimate activities.[135]"
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
                    "procedure_description": "sunburst had commands that allow an attacker to write or delete registry keys, and was observed stopping services by setting their hklm\\system\\currentcontrolset\\services\\[service_name]\\start registry entries to value 4.[153][154] it also deleted previously-created image file execution options (ifeo) debugger registry values and registry keys related to http proxy to clean up traces of its activity.[155]"
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
                    "procedure_description": "sunburst strings were compressed and encoded in base64.[316] sunburst also obfuscated collected system information using a fnv-1a + xor algorithm.[317]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/005",
                    "technique_name": "obfuscated files or information : indicator removal from tools",
                    "technique_description": "adversaries may remove indicators from tools if they believe their malicious tool was detected, quarantined, or otherwise curtailed. they can modify the tool by removing the indicator and using the updated version that is no longer detected by the target's defensive systems or subsequent targets that may use similar systems.",
                    "procedure_description": "sunburst source code used generic variable names and pre-obfuscated strings, and was likely sanitized of developer comments before being added to sunspot.[18]"
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
                    "procedure_description": "sunburst was digitally signed by solarwinds from march - may 2020.[64]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "sunburst used rundll32 to execute payloads.[92]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "sunburst checked the domain name of the compromised host to verify it was running in a real environment.[54]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "sunburst remained dormant after initial access for a period of up to two weeks.[39]"
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
                    "procedure_description": "sunburst had commands to enumerate files and directories.[291][292]"
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
                    "procedure_description": "sunburst collected a list of process names that were hashed using a fnv-1a + xor algorithm to check against similarly-hashed hardcoded blocklists.[242]"
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
                    "procedure_description": "sunburst collected the registry value hkey_local_machine\\software\\microsoft\\cryptography\\machineguid from compromised hosts.[89]"
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
                    "procedure_description": "sunburst checked for a variety of antivirus/endpoint detection agents prior to execution.[99][100]"
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
                    "procedure_description": "sunburst collected hostname, os version, and device uptime.[357][358]"
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
                    "procedure_description": "sunburst collected all network interface mac addresses that are up and not loopback devices, as well as ip address, dhcp configuration, and domain information.[222]"
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
                    "procedure_description": "sunburst collected the username from a compromised host.[183][184]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "sunburst collected a list of service names that were hashed using a fnv-1a + xor algorithm to check against similarly-hashed hardcoded blocklists.[50]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "sunburst checked the domain name of the compromised host to verify it was running in a real environment.[54]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "sunburst remained dormant after initial access for a period of up to two weeks.[39]"
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
                    "procedure_description": "sunburst collected information from a compromised host.[177][178]"
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
                    "procedure_description": "sunburst communicated via http get or http post requests to third party servers for c2.[324]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "sunburst used dns for c2 traffic designed to mimic normal solarwinds api communications.[66]"
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
                    "procedure_description": "sunburst used base64 encoding in its c2 traffic.[89]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/001",
                    "technique_name": "data obfuscation : junk data",
                    "technique_description": "adversaries may add junk data to protocols used for command and control to make detection more difficult. by adding random or meaningless data to the protocols used for command and control, adversaries can prevent trivial methods for decoding, deciphering, or otherwise analyzing the traffic. examples may include appending/prepending data with junk characters or writing junk characters between significant characters.",
                    "procedure_description": "sunburst added junk bytes to its c2 over http.[12]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/002",
                    "technique_name": "data obfuscation : steganography",
                    "technique_description": "adversaries may use steganographic techniques to hide command and control traffic to make detection efforts more difficult. steganographic techniques can be used to hide data in digital messages that are transferred between systems. this hidden information can be used for command and control of compromised systems. in some cases, the passing of files embedded using steganography, such as image or document files, can be used for command and control.",
                    "procedure_description": "sunburst c2 data attempted to appear as benign xml related to .net assemblies or as a faux json blob.[9][10][11]"
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
                    "procedure_description": "sunburst masqueraded its network traffic as the orion improvement program (oip) protocol.[17]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568",
                    "technique_link": "https://attack.mitre.org/techniques/T1568",
                    "technique_name": "dynamic resolution",
                    "technique_description": "adversaries may dynamically establish connections to command and control infrastructure to evade common detections and remediations. this may be achieved by using malware that shares a common algorithm with the infrastructure the adversary uses to receive the malware's communications. these calculations can be used to dynamically adjust parameters such as the domain name, ip address, or port number the malware uses for command and control.",
                    "procedure_description": "sunburst dynamically resolved c2 infrastructure for randomly-generated subdomains within a parent domain.[16]"
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
                    "procedure_description": "sunburst encrypted c2 traffic using a single-byte-xor cipher.[130]"
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
                    "procedure_description": "sunburst delivered different payloads, including teardrop in at least one instance.[419]"
                }
            ]
        },
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
        }
    ]
};