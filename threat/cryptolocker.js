var threatdata = {
    "name": "CryptoLocker",
    "alias": "CryptoLocker",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2021-09-14",
    "all_data": {
        "tool": "CryptoLocker",
        "names": [
            {
                "name": "CryptoLocker"
            }
        ],
        "description": "CryptoLocker is a new sophisticated malware that was launched in the late 2013. It is designed to attack Windows operating system by encrypting all the files from the system using a RSA-2048 public key. To decrypt the mentioned files, the user has to pay a ransom (usually 300 USD/EUR) or 2 BitCoins.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://www.secureworks.com/research/cryptolocker-ransomware"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cryptolocker"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Cryptolocker"
        ],
        "uuid": "cc589047-8cdb-4c0e-8496-e366020a005c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "CryptoLocker",
            "malware_alias": null,
            "malware": "win.cryptolocker",
            "last_update": "2022-10-20 05:13:44",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "a2481f0e6e6ba5262846a3c9919fc3f0",
                        "timestamp": "2022-10-20 05:13:44"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "2bf361eb8b8ae57d7da109faa8a6ebf7039c3ec432e2e627b5e89b52b6919fc1",
                        "timestamp": "2021-12-20 07:45:35"
                    },
                    {
                        "value": "41e1da703899d4c55111e36750af19ddc0ab50de94907703031c0fe0c8c33d4c",
                        "timestamp": "2021-12-20 07:45:34"
                    },
                    {
                        "value": "4651d46328666fc64e80865dd29bc3af07db58df270a94b98cc3ddfc3aaf59e5",
                        "timestamp": "2021-12-20 07:45:32"
                    },
                    {
                        "value": "70b785e5cb5b2e61c0f5da4a71ab0bbd14d9a0849387f037e0d75cc1ffe0a082",
                        "timestamp": "2021-12-20 07:45:30"
                    },
                    {
                        "value": "b51f47e14c1c008e40daeaa223daa815b60f8008911ecfacca4aa8f0f5ec747e",
                        "timestamp": "2021-10-30 06:30:33"
                    },
                    {
                        "value": "9e8bbc3cd87e16335a700fee228e9fa3ed6f67209b0297f5997c50097b7f8386",
                        "timestamp": "2021-10-30 06:30:32"
                    },
                    {
                        "value": "0ab795074e75a90975dd30d5e2b2331e87b65c17f2bdf2b796b83dccaf524019",
                        "timestamp": "2021-10-30 06:30:31"
                    },
                    {
                        "value": "dca30184f7d26505407363fb0cbc66f8a64abab97405c159bdc518a23cb291c2",
                        "timestamp": "2021-10-30 06:30:31"
                    },
                    {
                        "value": "dfdf48403506835206467e72952fc59fa3fb3c9dabc36090e82979e0b3a624c7",
                        "timestamp": "2021-10-21 14:45:25"
                    },
                    {
                        "value": "2996c535d6bc32f9363fb8f4b68548f47d5d54f4af5011b0f34083b5a894516c",
                        "timestamp": "2021-10-21 14:45:24"
                    },
                    {
                        "value": "32016cf36c5e99a6c8fba8fd4ffad8b5f301cac55439ae73fec5db799ac341ab",
                        "timestamp": "2021-10-21 14:45:24"
                    },
                    {
                        "value": "b2a29f36d9a7948576dd585298670875542da6eb91ba3873ec72d3a9c86edee7",
                        "timestamp": "2021-10-21 14:45:23"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-10-20 05:13:44",
    "file_name": "cryptolocker",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.crowdstrike.com/blog/how-big-game-hunting-ttps-shifted-after-darkside-pipeline-attack/",
            "date": "2021-09-14",
            "organization": "CrowdStrike",
            "author": "CrowdStrike Intelligence Team",
            "title": "Big Game Hunting TTPs Continue to Shift After DarkSide Pipeline Attack",
            "categories": [
                "BlackMatter",
                "DarkSide",
                "REvil",
                "Avaddon",
                "BlackMatter",
                "Clop",
                "Conti",
                "CryptoLocker",
                "DarkSide",
                "DoppelPaymer",
                "Hades",
                "REvil"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-evergreen",
            "date": "2021",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD EVERGREEN",
            "categories": [
                "CryptoLocker",
                "Pony",
                "Zeus",
                "GOLD EVERGREEN"
            ]
        },
        {
            "data_url": "https://sites.temple.edu/care/ci-rw-attacks/",
            "date": "2020-08",
            "organization": "Temple University",
            "author": "CARE",
            "title": "Critical Infrastructure Ransomware Attacks",
            "categories": [
                "CryptoLocker",
                "Cryptowall",
                "DoppelPaymer",
                "FriedEx",
                "Mailto",
                "Maze",
                "REvil",
                "Ryuk",
                "SamSam",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2020-CTI-008.pdf",
            "date": "2020-07-17",
            "organization": "CERT-FR",
            "author": "CERT-FR",
            "title": "The Malware Dridex: Origins and Uses",
            "categories": [
                "Andromeda",
                "CryptoLocker",
                "Cutwail",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Gameover P2P",
                "Gandcrab",
                "ISFB",
                "Murofet",
                "Necurs",
                "Predator The Thief",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-evergreen",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD EVERGREEN",
            "categories": [
                "CryptoLocker",
                "Pony",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/evolution-of-the-gold-evergreen-threat-group",
            "date": "2017-05-15",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Evolution of the GOLD EVERGREEN Threat Group",
            "categories": [
                "CryptoLocker",
                "Dridex",
                "Dyre",
                "Gameover P2P",
                "Murofet",
                "TrickBot",
                "Zeus",
                "GOLD EVERGREEN"
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
            "data_url": "https://www.justice.gov/opa/pr/us-leads-multi-national-action-against-gameover-zeus-botnet-and-cryptolocker-ransomware",
            "date": "2014-02-02",
            "organization": "Department of Justice",
            "author": "Office of Public Affairs",
            "title": "U.S. Leads Multi-National Action Against \u201cGameover Zeus\u201d Botnet and \u201cCryptolocker\u201d Ransomware, Charges Botnet Administrator",
            "categories": [
                "CryptoLocker"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/cryptolocker-ransomware",
            "date": "2013-12-18",
            "organization": "Secureworks",
            "author": "Keith Jarvis",
            "title": "CryptoLocker Ransomware",
            "categories": [
                "CryptoLocker"
            ]
        }
    ],
    "mitre": []
};