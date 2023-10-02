var threatdata = {
    "name": "China Chopper",
    "alias": "China Chopper, CHINACHOPPER, SinoChopper",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-16",
    "all_data": {
        "tool": "China Chopper",
        "names": [
            {
                "name": "China Chopper"
            },
            {
                "name": "CHINACHOPPER"
            },
            {
                "name": "SinoChopper"
            }
        ],
        "description": "(Talos) China Chopper is a tool that allows attackers to remotely control the target system that needs to be running a web server application before it can be targeted by the tool. The web shell works on different platforms, but in this case, we focused only on compromised Windows hosts. China Chopper is a tool that has been used by some state-sponsored actors such as Leviathan and Threat Group-3390, but during our investigation we've seen actors with varying skill levels.\n\nIn our research, we discovered both Internet Information Services (IIS) and Apache web servers compromised with China Chopper web shells. We do not have additional data about how the web shell was installed, but there are several web application frameworks such as older versions of Oracle WebLogic or WordPress that may have been targeted with known remote code execution or file inclusion exploits.\n\nChina Chopper provides the actor with a simple GUI that allows them to configure servers to connect to and generate server-side code that must be added to the targeted website code in order to communicate.\n\nThe server-side code is extremely simple and contains, depending on the application platform, just a single line of code. The backdoor supports .NET Active Server Pages or PHP.\n\nWe cannot be sure if the simplicity of the server code was a deliberate decision on the part of the China Chopper developers to make detection more difficult, but using pattern matching on such as short snippet may produce some false positive detections.\n\nThe China Chopper client communicates with affected servers using HTTP POST requests. The only function of the server-side code is to evaluate the request parameter specified during the configuration of the server code in the client GUI. In our example, the expected parameter name is 'test.' The communication over HTTP can be easily spotted in the network packet captures.\n\nChina Chopper contains a remote shell (Virtual Terminal) function that has a first suggested command of 'netstat an|find 'ESTABLISHED.'' and it is very likely that this command will be seen in process creation logs on affected systems.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/2019/08/china-chopper-still-active-9-years-later.html",
            "https://informationonsecurity.blogspot.com/2012/11/china-chopper-webshell.html",
            "https://www.fireeye.com/blog/threat-research/2013/08/breaking-down-the-china-chopper-web-shell-part-i.html",
            "https://www.fireeye.com/blog/threat-research/2018/03/suspected-chinese-espionage-group-targeting-maritime-and-engineering-industries.html",
            "https://en.wikipedia.org/wiki/China_Chopper"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0020/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.chinachopper"
        ],
        "uuid": "f712900d-e7eb-4873-93b7-eefd7aba61c2",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "china_chopper",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.paloaltonetworks.com/blog/security-operations/through-the-cortex-xdr-lens-uncovering-a-new-activity-group-targeting-governments-in-the-middle-east-and-africa/",
            "date": "2023-06-16",
            "organization": "Palo Alto Networks: Cortex Threat Research",
            "author": "Lior Rochberger",
            "title": "Through the Cortex XDR Lens: Uncovering a New Activity Group Targeting Governments in the Middle East and Africa",
            "categories": [
                "CHINACHOPPER",
                "Ladon",
                "Yasso"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/witchetty-steganography-espionage",
            "date": "2022-09-29",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Witchetty: Group Uses Updated Toolset in Attacks on Governments in Middle East",
            "categories": [
                "CHINACHOPPER",
                "Lookback",
                "MimiKatz",
                "PlugX",
                "Unidentified 096 (Keylogger)",
                "x4"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/07/26/malicious-iis-extensions-quietly-open-persistent-backdoors-into-servers/",
            "date": "2022-07-26",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Research Team",
            "title": "Malicious IIS extensions quietly open persistent backdoors into servers",
            "categories": [
                "CHINACHOPPER",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/iron-taurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Iron Taurus",
            "categories": [
                "CHINACHOPPER",
                "Ghost RAT",
                "Wonknu",
                "ZXShell",
                "APT27"
            ]
        },
        {
            "data_url": "https://secjoes-reports.s3.eu-central-1.amazonaws.com/Backdoor%2Bvia%2BXFF%2BMysterious%2BThreat%2BActor%2BUnder%2BRadar.pdf",
            "date": "2022-06-15",
            "organization": "Security Joes",
            "author": "Charles Lomboni",
            "title": "Backdoor via XFF: Mysterious Threat Actor Under Radar",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2022/pdf/JSAC2022_9_yanagishita-tamada-nakatsuru-ishimaru_en.pdf",
            "date": "2022-01-27",
            "organization": "JSAC 2021",
            "author": "Hajime Yanagishita",
            "title": "What We Can Do against the Chaotic  A41APT Campaign",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "HUI Loader",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/11/babuk-exploits-exchange.html",
            "date": "2021-11-03",
            "organization": "Cisco Talos",
            "author": "Chetan Raghuprasad",
            "title": "Microsoft Exchange vulnerabilities exploited once again for ransomware, this time with Babuk",
            "categories": [
                "Babuk",
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/09/proxyshell-exploiting-microsoft-exchange-servers.html",
            "date": "2021-09-03",
            "organization": "FireEye",
            "author": "Adrian Sanchez Hernandez",
            "title": "PST, Want a Shell? ProxyShell Exploiting Microsoft Exchange Servers",
            "categories": [
                "CHINACHOPPER",
                "HTran"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/deadringer-exposing-chinese-threat-actors-targeting-major-telcos",
            "date": "2021-08-03",
            "organization": "Cybereason",
            "author": "Assaf Dahan",
            "title": "DeadRinger: Exposing Chinese Threat Actors Targeting Major Telcos",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "MimiKatz",
                "Nebulae"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/ongoing-campaign-leveraging-exchange-vulnerability-potentially-linked-to-iran",
            "date": "2021-07-20",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Ongoing Campaign Leveraging Exchange Vulnerability Potentially Linked to Iran",
            "categories": [
                "CHINACHOPPER",
                "MimiKatz",
                "RGDoor"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/06/10/backdoordiplomacy-upgrading-quarian-turian/",
            "date": "2021-06-10",
            "organization": "ESET Research",
            "author": "Adam Burgher",
            "title": "BackdoorDiplomacy: Upgrading from Quarian to Turian",
            "categories": [
                "CHINACHOPPER",
                "DoublePulsar",
                "EternalRocks",
                "turian",
                "BackdoorDiplomacy"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/05/lemon-duck-spreads-wings.html",
            "date": "2021-05-07",
            "organization": "Cisco Talos",
            "author": "Caitlin Huey",
            "title": "Lemon Duck spreads its wings: Actors target Microsoft Exchange servers, incorporate new TTPs",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "Lemon Duck"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/05/07/new-lemon-duck-variants-exploiting-microsoft-exchange-server/?cmp=30728",
            "date": "2021-05-07",
            "organization": "SophosLabs Uncut",
            "author": "Rajesh Nataraj",
            "title": "New Lemon Duck variants exploiting Microsoft Exchange Server",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "Lemon Duck"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/e/proxylogon-a-coinminer--a-ransomware--and-a-botnet-join-the-part.html",
            "date": "2021-05-06",
            "organization": "Trend Micro",
            "author": "Arianne Dela Cruz",
            "title": "Proxylogon: A Coinminer, a Ransomware, and a Botnet Join the Party",
            "categories": [
                "BlackKingdom Ransomware",
                "CHINACHOPPER",
                "Lemon Duck",
                "Prometei"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/multi-factor-authentication-new-attacks",
            "date": "2021-05-05",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Multi-Factor Authentication: Headache for Cyber Actors Inspires New Attack Techniques",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/d/hello-ransomware-uses-updated-china-chopper-web-shell-sharepoint-vulnerability.html",
            "date": "2021-04-27",
            "organization": "Trend Micro",
            "author": "Janus Agcaoili",
            "title": "Hello Ransomware Uses Updated China Chopper Web Shell, SharePoint Vulnerability",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/d/could-the-microsoft-exchange-breach-be-stopped.html",
            "date": "2021-04-16",
            "organization": "Trend Micro",
            "author": "Nitesh Surana",
            "title": "Could the Microsoft Exchange breach be stopped?",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/exchange-server-credential-harvesting/",
            "date": "2021-04-15",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Actor Exploits Microsoft Exchange Server Vulnerabilities, Cortex XDR Blocks Harvesting of Credentials",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.imperva.com/blog/imperva-observes-hive-of-activity-following-hafnium-microsoft-exchange-disclosures/",
            "date": "2021-03-26",
            "organization": "Imperva",
            "author": "Daniel Johnston",
            "title": "Imperva Observes Hive of Activity Following Hafnium Microsoft Exchange Disclosures",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://techcommunity.microsoft.com/t5/azure-sentinel/web-shell-threat-hunting-with-azure-sentinel/ba-p/2234968",
            "date": "2021-03-25",
            "organization": "Microsoft",
            "author": "Tom McElroy",
            "title": "Web Shell Threat Hunting with Azure Sentinel",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/03/25/analyzing-attacks-taking-advantage-of-the-exchange-server-vulnerabilities/",
            "date": "2021-03-25",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Analyzing attacks taking advantage of the Exchange Server vulnerabilities",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://twitter.com/CyberRaiju/status/1373582619707867136",
            "date": "2021-03-21",
            "organization": "Twitter (@CyberRaiju)",
            "author": "Jai Minton",
            "title": "Twitter Thread with analysis of .NET China Chopper",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Cyber-Sicherheit/Vorfaelle/Exchange-Schwachstellen-2021/MSExchange_Schwachstelle_Detektion_Reaktion.pdf",
            "date": "2021-03-19",
            "organization": "Bundesamt f\u00fcr Sicherheit in der Informationstechnik",
            "author": "CERT-Bund",
            "title": "Microsoft Exchange Schwachstellen Detektion und Reaktion (CVE-2021-26855, CVE-2021-26857, CVE-2021-26858, CVE-2021-27065)",
            "categories": [
                "CHINACHOPPER",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/hafnium-china-chopper-and-aspnet-runtime/",
            "date": "2021-03-15",
            "organization": "Trustwave",
            "author": "Joshua Deacon",
            "title": "HAFNIUM, China Chopper and ASP.NET Runtime",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/microsoft-exchange-server-attack-timeline/",
            "date": "2021-03-11",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Microsoft Exchange Server Attack Timeline",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.devo.com/blog/detect-and-investigate-hafnium-using-devo/",
            "date": "2021-03-11",
            "organization": "DEVO",
            "author": "Fran Gomez",
            "title": "Detection and Investigation Using Devo: HAFNIUM 0-day Exploits on Microsoft Exchange Service",
            "categories": [
                "CHINACHOPPER",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://www.cyborgsecurity.com/blog/you-dont-know-the-hafnium-of-it/",
            "date": "2021-03-11",
            "organization": "Cyborg Security",
            "author": "Josh Campbell",
            "title": "You Don't Know the HAFNIUM of it...",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "PowerCat"
            ]
        },
        {
            "data_url": "https://www.picussecurity.com/resource/blog/ttps-hafnium-microsoft-exchange-servers",
            "date": "2021-03-10",
            "organization": "PICUS Security",
            "author": "S\u00fcleyman \u00d6zarslan",
            "title": "Tactics, Techniques, and Procedures (TTPs) Used by HAFNIUM to Target Microsoft Exchange Servers",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://blog.joshlemon.com.au/hafnium-exchange-attacks/",
            "date": "2021-03-10",
            "organization": "Lemon's InfoSec Ramblings",
            "author": "Josh Lemon",
            "title": "Microsoft Exchange & the HAFNIUM Threat Actor",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.domaintools.com/resources/blog/examining-exchange-exploitation-and-its-lessons-for-defenders",
            "date": "2021-03-10",
            "organization": "DomainTools",
            "author": "Joe Slowik",
            "title": "Examining Exchange Exploitation and its Lessons for Defenders",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://redcanary.com/blog/microsoft-exchange-attacks",
            "date": "2021-03-09",
            "organization": "Red Canary",
            "author": "Tony Lambert",
            "title": "Microsoft Exchange server exploitation: how to detect, mitigate, and stay calm",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/remediation-steps-for-the-Microsoft-Exchange-Server-vulnerabilities/",
            "date": "2021-03-09",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Remediation Steps for the Microsoft Exchange Server Vulnerabilities",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.praetorian.com/blog/reproducing-proxylogon-exploit/",
            "date": "2021-03-09",
            "organization": "PRAETORIAN",
            "author": "Anthony Weems",
            "title": "Reproducing the Microsoft Exchange Proxylogon Exploit Chain",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=rn-6t7OygGk",
            "date": "2021-03-09",
            "organization": "YouTube (John Hammond)",
            "author": "John Hammond",
            "title": "HAFNIUM - Post-Exploitation Analysis from Microsoft Exchange",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/microsoft-exchange-server-protection",
            "date": "2021-03-08",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "How Symantec Stops Microsoft Exchange Server Attacks",
            "categories": [
                "CHINACHOPPER",
                "MimiKatz"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/china-chopper-webshell/",
            "date": "2021-03-08",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jeff White",
            "title": "Analyzing Attacks Against Microsoft Exchange Server With China Chopper Webshells",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://blog.truesec.com/2021/03/07/exchange-zero-day-proxylogon-and-hafnium/",
            "date": "2021-03-07",
            "organization": "TRUESEC",
            "author": "Rasmus Gr\u00f6nlund",
            "title": "Tracking Microsoft Exchange Zero-Day ProxyLogon and HAFNIUM",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.wired.com/story/china-microsoft-exchange-server-hack-victims/",
            "date": "2021-03-05",
            "organization": "Wired",
            "author": "Andy Greenberg",
            "title": "Chinese Hacking Spree Hit an \u2018Astronomical\u2019 Number of Victims",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.huntress.com/hubfs/Mass%20Exploitation%20of%20Microsoft%20Exchange%20(2).pdf",
            "date": "2021-03-05",
            "organization": "Huntress Labs",
            "author": "Huntress Labs",
            "title": "Operation Exchange Marauder",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/falcon-complete-stops-microsoft-exchange-server-zero-day-exploits",
            "date": "2021-03-04",
            "organization": "CrowdStrike",
            "author": "The Falcon Complete Team",
            "title": "Falcon Complete Stops Microsoft Exchange Server Zero-Day Exploits",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/03/detection-response-to-exploitation-of-microsoft-exchange-zero-day-vulnerabilities.html",
            "date": "2021-03-04",
            "organization": "FireEye",
            "author": "Matt Bromiley",
            "title": "Detection and Response to Exploitation of Microsoft Exchange Zero-Day Vulnerabilities",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://www.huntress.com/hubfs/Videos/Webinars/Overlay-Mass_Exploitation_of_Exchange.mp4",
            "date": "2021-03-04",
            "organization": "Huntress Labs",
            "author": "Huntress Labs",
            "title": "Operation Exchange Marauder",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.huntress.com/blog/rapid-response-mass-exploitation-of-on-prem-exchange-servers",
            "date": "2021-03-03",
            "organization": "Huntress Labs",
            "author": "John Hammond",
            "title": "Rapid Response: Mass Exploitation of On-Prem Exchange Servers",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0125/",
            "date": "2021-03-03",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "HAFNIUM",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://www.reddit.com/r/msp/comments/lwmo5c/mass_exploitation_of_onprem_exchange_servers",
            "date": "2021-03-03",
            "organization": "Huntress Labs",
            "author": "Huntress Labs",
            "title": "Mass exploitation of on-prem Exchange servers :(",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://www.volexity.com/blog/2021/03/02/active-exploitation-of-microsoft-exchange-zero-day-vulnerabilities/",
            "date": "2021-03-02",
            "organization": "Volexity",
            "author": "Josh Grunzweig",
            "title": "Operation Exchange Marauder: Active Exploitation of Multiple Zero-Day Microsoft Exchange Vulnerabilities",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://blog.rapid7.com/2021/03/03/rapid7s-insightidr-enables-detection-and-response-to-microsoft-exchange-0-day",
            "date": "2021-03-02",
            "organization": "Rapid7 Labs",
            "author": "Andrew Christian",
            "title": "Rapid7\u2019s InsightIDR Enables Detection And Response to Microsoft Exchange Zero-Day",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://twitter.com/ESETresearch/status/1366862946488451088",
            "date": "2021-03-02",
            "organization": "Twitter (@ESETresearch)",
            "author": "ESET Research",
            "title": "Tweet on Exchange RCE",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers",
            "date": "2021-03-02",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence Center (MSTIC)",
            "title": "HAFNIUM targeting Exchange Servers with 0-day exploits",
            "categories": [
                "CHINACHOPPER",
                "HAFNIUM"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/a/targeted-attack-using-chopper-aspx-web-shell-exposed-via-managed.html",
            "date": "2021-01-29",
            "organization": "Trend Micro",
            "author": "Trend Micro",
            "title": "Chopper ASPX web shell used in targeted attack",
            "categories": [
                "CHINACHOPPER",
                "MimiKatz"
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
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa20-275a",
            "date": "2020-10-01",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA20-275A): Potential for China Cyber Response to Heightened U.S.-China Tensions",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "Empire Downloader",
                "MimiKatz",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/alerts/aa20-259a",
            "date": "2020-09-15",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (AA20-259A): Iran-Based Threat Actor Exploits VPN Vulnerabilities",
            "categories": [
                "CHINACHOPPER",
                "Fox Kitten"
            ]
        },
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-259a",
            "date": "2020-09-15",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR20-259A): Iranian Web Shells",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.justice.gov/opa/pr/two-chinese-hackers-working-ministry-state-security-charged-global-computer-intrusion",
            "date": "2020-07-21",
            "organization": "Department of Justice",
            "author": "Department of Justice",
            "title": "Two Chinese Hackers Working with the Ministry of State Security Charged with Global Computer Intrusion Campaign Targeting Intellectual Property and Confidential Business Information, Including COVID-19 Research",
            "categories": [
                "CHINACHOPPER",
                "BRONZE SPRING"
            ]
        },
        {
            "data_url": "https://adeo.com.tr/wp-content/uploads/2020/02/APT10_Report.pdf",
            "date": "2020-02-21",
            "organization": "ADEO DFIR",
            "author": "ADEO DFIR",
            "title": "APT10 Threat Analysis Report",
            "categories": [
                "CHINACHOPPER",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Quasar RAT"
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
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-president",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE PRESIDENT",
            "categories": [
                "CHINACHOPPER",
                "Cobalt Strike",
                "PlugX",
                "MUSTANG PANDA"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-mohawk",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE MOHAWK",
            "categories": [
                "AIRBREAK",
                "scanbox",
                "BLACKCOFFEE",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "homefry",
                "murkytop",
                "SeDll",
                "APT40"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-union",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE UNION",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "Enfal",
                "Ghost RAT",
                "HttpBrowser",
                "HyperBro",
                "owaauth",
                "PlugX",
                "Poison Ivy",
                "ZXShell",
                "APT27"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-atlas",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE ATLAS",
            "categories": [
                "Speculoos",
                "Winnti",
                "ACEHASH",
                "CCleaner Backdoor",
                "CHINACHOPPER",
                "Empire Downloader",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT41"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-express",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE EXPRESS",
            "categories": [
                "9002 RAT",
                "CHINACHOPPER",
                "IsSpace",
                "NewCT",
                "PlugX",
                "smac",
                "APT26"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2019/12/12/gallium-targeting-global-telecom/",
            "date": "2019-12-12",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence Center",
            "title": "GALLIUM: Targeting global telecom",
            "categories": [
                "CHINACHOPPER",
                "Ghost RAT",
                "HTran",
                "MimiKatz",
                "Poison Ivy",
                "GALLIUM"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2019/presentations/cds19-executive-s08-achievement-unlocked.pdf",
            "date": "2019-11-19",
            "organization": "FireEye",
            "author": "Kelli Vanderlee",
            "title": "Achievement Unlocked: Chinese Cyber Espionage Evolves to Support Higher Level Missions",
            "categories": [
                "MESSAGETAP",
                "TSCookie",
                "ACEHASH",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "Empire Downloader",
                "Ghost RAT",
                "HIGHNOON",
                "HTran",
                "MimiKatz",
                "NetWire RC",
                "poisonplug",
                "Poison Ivy",
                "pupy",
                "Quasar RAT",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0096",
            "date": "2019-09-23",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "APT41",
            "categories": [
                "Derusbi",
                "MESSAGETAP",
                "Winnti",
                "ASPXSpy",
                "BLACKCOFFEE",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "Empire Downloader",
                "Ghost RAT",
                "MimiKatz",
                "NjRAT",
                "PlugX",
                "ShadowPad",
                "Winnti",
                "ZXShell",
                "APT41"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/08/china-chopper-still-active-9-years-later.html",
            "date": "2019-08-27",
            "organization": "Cisco Talos",
            "author": "Paul Rascagn\u00e8res",
            "title": "China Chopper still active 9 years later",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2019/08/game-over-detecting-and-stopping-an-apt41-operation.html",
            "date": "2019-08-19",
            "organization": "FireEye",
            "author": "Alex Pennino",
            "title": "GAME OVER: Detecting and Stopping an APT41 Operation",
            "categories": [
                "ACEHASH",
                "CHINACHOPPER",
                "HIGHNOON"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/operation-soft-cell-a-worldwide-campaign-against-telecommunications-providers",
            "date": "2019-06-25",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "OPERATION SOFT CELL: A WORLDWIDE CAMPAIGN AGAINST TELECOMMUNICATIONS PROVIDERS",
            "categories": [
                "CHINACHOPPER",
                "HTran",
                "MimiKatz",
                "Poison Ivy",
                "Operation Soft Cell"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/emissary-panda-attacks-middle-east-government-sharepoint-servers/",
            "date": "2019-05-28",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Emissary Panda Attacks Middle East Government Sharepoint Servers",
            "categories": [
                "CHINACHOPPER",
                "HyperSSL"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/software/S0020/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Tool description: China Chopper",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/03/suspected-chinese-espionage-group-targeting-maritime-and-engineering-industries.html",
            "date": "2018-03-16",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Suspected Chinese Cyber Espionage Group (TEMP.Periscope) Targeting U.S. Engineering and Maritime Industries",
            "categories": [
                "badflick",
                "BLACKCOFFEE",
                "CHINACHOPPER",
                "homefry",
                "murkytop",
                "SeDll",
                "APT40"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/an-end-to-smash-and-grab-more-targeted-approaches/",
            "date": "2017-12-20",
            "organization": "CrowdStrike",
            "author": "Adam Kozy",
            "title": "An End to \u201cSmash-and-Grab\u201d and a Move to More Targeted Approaches",
            "categories": [
                "CHINACHOPPER"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2013/08/breaking-down-the-china-chopper-web-shell-part-i.html",
            "date": "2013-08-07",
            "organization": "FireEye",
            "author": "Ian Ahl",
            "title": "Breaking Down the China Chopper Web Shell - Part I",
            "categories": [
                "CHINACHOPPER"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "china chopper",
            "procedure_code": "s0020",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0020",
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
                    "procedure_description": "china chopper's server component is capable of opening a command terminal.[69][70][71]"
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
                    "procedure_description": "china chopper's server component is a web shell payload.[2]"
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
                    "procedure_description": "china chopper's server component can change the timestamp of files.[14][15][16]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "china chopper's client component is packed with upx.[22]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1110.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1110/001",
                    "technique_name": "brute force : password guessing",
                    "technique_description": "adversaries with no prior knowledge of legitimate credentials within the system or environment may guess passwords to attempt access to accounts. without knowledge of the password for an account, an adversary may opt to systematically guess the password using a repetitive or iterative mechanism. an adversary may guess login credentials without prior knowledge of system or environment passwords during an operation by using a list of common passwords. password guessing may or may not take into account the target's policies on password complexity or use policies that may lock accounts out after a number of failed attempts.",
                    "procedure_description": "china chopper's server component can perform brute force password guessing against authentication portals.[7]"
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
                    "procedure_description": "china chopper's server component can list directory contents.[74][75]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1046",
                    "technique_link": "https://attack.mitre.org/techniques/T1046",
                    "technique_name": "network service discovery",
                    "technique_description": "adversaries may attempt to get a listing of services running on remote hosts and local network infrastructure devices, including those that may be vulnerable to remote software exploitation. common methods to acquire this information include port and/or vulnerability scans using tools that are brought onto a system.",
                    "procedure_description": "china chopper's server component can spider authentication portals.[16]"
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
                    "procedure_description": "china chopper's server component can upload local files.[39][40][41][42]"
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
                    "procedure_description": "china chopper's server component executes code sent via http post commands.[63]"
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
                    "procedure_description": "china chopper's server component can download remote files.[107][108][109][110]"
                }
            ]
        }
    ]
};