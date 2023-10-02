var threatdata = {
    "name": "Enfal",
    "alias": "Enfal, Lurid",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Enfal",
        "names": [
            {
                "name": "Enfal"
            },
            {
                "name": "Lurid"
            }
        ],
        "description": "(Trend Micro) The Lurid Downloader, often referred to as Enfal, is a well-known malware family. It is, however, not created with a publicly available toolkit that can be purchased by any aspiring cybercriminal. This malware family has, in the past, been used to target both the U.S. government and nongovernmental organizations (NGOs). However, there appear to be no direct links between this particular network and previous ones.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/trend-micro-exposes-lurid-apt/",
            "https://www.bsk-consulting.de/2015/10/17/how-to-write-simple-but-sound-yara-rules-part-2/",
            "https://researchcenter.paloaltonetworks.com/2015/05/cmstar-downloader-lurid-and-enfals-new-cousin/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0010/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.enfal"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:enfal"
        ],
        "uuid": "3f7ba2f1-b299-4601-8965-6ccf900ebdde",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "enfal",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/2020/vicious-panda-the-covid-campaign/",
            "date": "2020-03-12",
            "organization": "Check Point",
            "author": "Check Point Research",
            "title": "Vicious Panda: The COVID Campaign",
            "categories": [
                "8.t Dropper",
                "BYEBY",
                "Enfal",
                "Korlia",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-palace",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE PALACE",
            "categories": [
                "BS2005",
                "Enfal",
                "Mirage",
                "RoyalCli",
                "Royal DNS",
                "APT15"
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
            "data_url": "https://attack.mitre.org/groups/G0011",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "PittyTiger",
            "categories": [
                "Enfal",
                "Ghost RAT",
                "MimiKatz",
                "Poison Ivy",
                "APT24"
            ]
        },
        {
            "data_url": "https://www.bsk-consulting.de/2015/10/17/how-to-write-simple-but-sound-yara-rules-part-2/",
            "date": "2015-10-17",
            "organization": "BSK Consulting",
            "author": "Florian Roth",
            "title": "How to Write Simple but Sound Yara Rules \u2013 Part 2",
            "categories": [
                "Enfal"
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
            "data_url": "https://documents.trendmicro.com/assets/wp/wp-detecting-apt-activity-with-network-traffic-analysis.pdf",
            "date": "2012-10-23",
            "organization": "Trend Micro",
            "author": "Nart Villeneuve",
            "title": "Detecting APT Activity with Network Traffic Analysis",
            "categories": [
                "Enfal",
                "Gh0stnet",
                "Nitro",
                "sykipot",
                "taidoor"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "lurid",
            "procedure_code": "s0010",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0010",
            "techniques": [
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560",
                    "technique_link": "https://attack.mitre.org/techniques/T1560",
                    "technique_name": "archive collected data",
                    "technique_description": "an adversary may compress and/or encrypt data that is collected prior to exfiltration. compressing the data can help to obfuscate the collected data and minimize the amount of data sent over the network. encryption can be used to hide information that is being exfiltrated from detection or make exfiltration less conspicuous upon inspection by a defender.",
                    "procedure_description": "lurid can compress data before sending it.[36]"
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
                    "procedure_description": "lurid performs xor encryption.[85]"
                }
            ]
        }
    ]
};