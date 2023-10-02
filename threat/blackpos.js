var threatdata = {
    "name": "BlackPOS",
    "alias": "BlackPOS, FrameworkPOS, Kaptoxa, POSWDS, Reedum, MMon",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "BlackPOS",
        "names": [
            {
                "name": "BlackPOS"
            },
            {
                "name": "FrameworkPOS"
            },
            {
                "name": "Kaptoxa"
            },
            {
                "name": "POSWDS"
            },
            {
                "name": "Reedum"
            },
            {
                "name": "MMon"
            }
        ],
        "description": "(Trend Micro) In 2012, the source code of BlackPOS was leaked, enabling other cybercriminals and attackers to enhance its code.\n\nEven though BlackPOS ver2 has an entirely different code compared to the BlackPOS which compromised Target, it duplicates the data exfiltration technique used by the Target BlackPOS. It is an improved clone of the original, which is why we decided to call this BlackPOS ver2.\n\nIt is also being reported in the press that some security vendors called this malware as \u201cFrameworkPOS.\u201d",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-blackpos-malware-emerges-in-the-wild-targets-retail-accounts/",
            "https://www.welivesecurity.com/2013/12/19/target-down-biggest-data-breach-ever-leaks-40-million-credit-and-debit-cards-from-retailer-at-height-of-shopping-season/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/home-depot-breach-linked-to-blackpos-malware/",
            "https://labs.sentinelone.com/fin6-frameworkpos-point-of-sale-malware-analysis-internals-2/",
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf",
            "https://www.secureworks.com/research/point-of-sale-malware-threats",
            "https://threatpost.com/points-of-sale-poorly-secured-facing-sophisticated-attacks/106027/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blackpos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:blackpos",
            "https://otx.alienvault.com/browse/pulses?q=tag:FrameworkPOS"
        ],
        "uuid": "41ad02a6-84e7-4a4a-bc6f-ac6ac0d8219b",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blackpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://usa.visa.com/dam/VCOM/global/support-legal/documents/new-pos-malware-samples.pdf",
            "date": "2020-09-25",
            "organization": "VISA",
            "author": "Visa Security Alert",
            "title": "Visa Security Alert: New Malware Samples  identified in Point-of-Sale Compromises",
            "categories": [
                "BlackPOS",
                "pwnpos",
                "rtpos"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-black-atlas-endangers-in-store-card-payments-and-smbs-worldwide-switches-between-blackpos-and-other-tools/",
            "date": "2015-12-01",
            "organization": "Trend Micro",
            "author": "Jay Yaneza",
            "title": "Operation Black Atlas Endangers In-Store Card Payments and SMBs Worldwide; Switches between BlackPOS and Other Tools",
            "categories": [
                "Alina POS",
                "BlackPOS",
                "Kronos",
                "NewPosThings"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200509171721/https://raw.githubusercontent.com/fdiskyou/threat-INTel/master/2015/GlobalThreatIntelReport.pdf",
            "date": "2015-02-06",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "CrowdStrike Global Threat Intel Report 2014",
            "categories": [
                "BlackPOS",
                "CryptoLocker",
                "Derusbi",
                "Elise",
                "Enfal",
                "EvilGrab",
                "Gameover P2P",
                "HttpBrowser",
                "Medusa",
                "Mirage",
                "Naikon",
                "NetTraveler",
                "pirpi",
                "PlugX",
                "Poison Ivy",
                "Sakula RAT",
                "Sinowal",
                "sykipot",
                "taidoor"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/new-blackpos-malware-emerges-in-the-wild-targets-retail-accounts/",
            "date": "2014-08-29",
            "organization": "Trend Micro",
            "author": "Rhena Inocencio",
            "title": "New BlackPOS Malware Emerges in the Wild, Targets Retail Accounts",
            "categories": [
                "BlackPOS"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "frameworkpos",
            "procedure_code": "s0503",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0503",
            "techniques": [
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
                    "procedure_description": "frameworkpos can enumerate and exclude selected processes on a compromised host to speed execution of memory scraping.[106]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/003",
                    "technique_name": "archive collected data : archive via custom method",
                    "technique_description": "an adversary may compress or encrypt data that is collected prior to exfiltration using a custom method. adversaries may choose to use custom archival methods, such as encryption with xor or stream ciphers implemented with no external library or utility references. custom implementations of well-known compression algorithms have also been used.",
                    "procedure_description": "frameworkpos can xor credit card information before exfiltration.[12]"
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
                    "procedure_description": "frameworkpos can collect elements related to credit card data from process memory.[76]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "frameworkpos can identifiy payment card track data on the victim and copy it to a local file in a subdirectory of c:\\windows.[36]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048",
                    "technique_link": "https://attack.mitre.org/techniques/T1048",
                    "technique_name": "exfiltration over alternative protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over a different protocol than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "frameworkpos can use dns tunneling for exfiltration of credit card data.[5]"
                }
            ]
        }
    ]
};