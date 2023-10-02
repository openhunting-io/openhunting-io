var threatdata = {
    "name": "Dexter",
    "alias": "Dexter, LusyPOS, StarDust",
    "category": "Malware",
    "type": "POS malware, Reconnaissance, Backdoor, Keylogger, Info stealer, Credential stealer, Botnet",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "Dexter",
        "names": [
            {
                "name": "Dexter"
            },
            {
                "name": "LusyPOS"
            },
            {
                "name": "StarDust"
            }
        ],
        "description": "(Trend Micro) Based on our analysis of the malware, BKDR_DEXTR.A downloads files, sends information, and checks memory for information among others. But the centerpiece of the malware is its ability to collect and send certain information to a remote server. Some of the possible data that can be stolen from POS systems include such as username, hostname, key to decrypt the sent information, OS information, and list of running processes. These data are then presumably duplicated by remote malicious users.\n\nThe malware executable is found to be packed or encrypted and when loaded, it loads long garbage code to decrypt the actual code. However, this decryption routine involves only a combination of XOR and ADD instructions, with the use of a hardcoded key.  The perpetrators behind \u2018Dexter\u2019 malware probably done this to make analysis difficult.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/infostealer-dexter-targets-checkout-systems/",
            "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/the-dexter-malware-getting-your-hands-dirty/",
            "https://securitykitten.github.io/2014/12/01/lusypos-and-tor.html",
            "https://volatility-labs.blogspot.com/2012/12/unpacking-dexter-pos-memory-dump.html",
            "https://kc.mcafee.com/resources/sites/MCAFEE/content/live/PRODUCT_DOCUMENTATION/25000/PD25658/en_US/McAfee_Labs_Threat_Advisory-LusyPOS.pdf",
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf",
            "https://www.secureworks.com/research/point-of-sale-malware-threats",
            "https://www.us-cert.gov/ncas/alerts/TA14-002A"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dexter"
        ],
        "uuid": "25d41291-d4ad-4a88-93c8-9f4cab025f12",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Dexter",
            "malware_alias": "LusyPOS",
            "malware": "win.dexter",
            "last_update": "2021-08-16 12:09:56",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "4eabb1adc035f035e010c0d0d259c683e18193f509946652ed8aa7c5d92b6a92",
                        "timestamp": "2021-08-16 12:09:56"
                    },
                    {
                        "value": "e41fb7878c89cc728005f3c82f7ee8c14ce27edcf4e307ddd8691f62dd5e6726",
                        "timestamp": "2021-08-16 12:09:55"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-08-16 12:09:56",
    "file_name": "dexter",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://contagiodump.blogspot.com/2012/12/dexter-pos-infostealer-samples-and.html",
            "date": "2012-12-23",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "Dec 2012 Dexter - POS Infostealer samples and information",
            "categories": [
                "Dexter"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/infostealer-dexter-targets-checkout-systems/",
            "date": "2012-12-21",
            "organization": "Trend Micro",
            "author": "Jason Pantig",
            "title": "Infostealer Dexter Targets Checkout Systems",
            "categories": [
                "Dexter"
            ]
        },
        {
            "data_url": "https://volatility-labs.blogspot.com/2012/12/unpacking-dexter-pos-memory-dump.html",
            "date": "2012-12-12",
            "organization": "Volatility Labs",
            "author": "Michael Hale Ligh",
            "title": "Unpacking Dexter POS \"Memory Dump Parsing\" Malware",
            "categories": [
                "Dexter"
            ]
        }
    ],
    "mitre": []
};