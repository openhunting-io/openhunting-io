var threatdata = {
    "name": "HermeticWiper",
    "alias": "HermeticWiper, DriveSlayer, FoxBlade, KillDisk.NCV, Trojan.Killdisk, NEARMISS",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2023-04-26",
    "all_data": {
        "tool": "HermeticWiper",
        "names": [
            {
                "name": "HermeticWiper"
            },
            {
                "name": "DriveSlayer"
            },
            {
                "name": "FoxBlade"
            },
            {
                "name": "KillDisk.NCV"
            },
            {
                "name": "Trojan.Killdisk"
            },
            {
                "name": "NEARMISS"
            }
        ],
        "description": "(SentinelOne) At first glance, HermeticWiper appears to be a custom-written application with very few standard functions. The malware sample is 114KBs in size and roughly 70% of that is composed of resources. The developers are using a tried and tested technique of wiper malware, abusing a benign partition management driver, in order to carry out the more damaging components of their attacks. Both the Lazarus Group ({{Destover}}) and APT33 ({{DistTrack}}) took advantage of Eldos {{RawDisk}} in order to get direct userland access to the filesystem without calling Windows APIs. HermeticWiper uses a similar technique by abusing a different driver, empntdrv.sys.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://www.sentinelone.com/labs/hermetic-wiper-ukraine-under-attack/",
            "https://www.welivesecurity.com/2022/02/24/hermeticwiper-new-data-wiping-malware-hits-ukraine/",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ukraine-wiper-malware-russia",
            "https://blog.talosintelligence.com/2022/02/threat-advisory-hermeticwiper.html",
            "https://securityintelligence.com/posts/new-destructive-malware-cyber-attacks-ukraine/",
            "https://www.cisa.gov/uscert/ncas/alerts/aa22-057a",
            "https://securelist.com/elections-goransom-and-hermeticwiper-attack/105960/",
            "https://www.deepinstinct.com/blog/hermeticwiper-malware-the-russian-ukrainian-cyber-war",
            "https://www.cybereason.com/blog/cybereason-vs.-hermeticwiper-and-isaacwiper",
            "https://blog.malwarebytes.com/threat-intelligence/2022/03/hermeticwiper-a-detailed-analysis-of-the-destructive-malware-that-targeted-ukraine/",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works",
            "https://www.cyfirma.com/outofband/hermetic-wiper-malware-report/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0697/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hermeticwiper"
        ],
        "uuid": "52c5df55-aa7b-4911-8f6f-5853927e6668",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--e5388435-2f21-4cb1-bf43-3e2b990461e1",
        "pb_file": "hermeticwiper.json",
        "last_updated": "2022-02-28T13:15:07.029Z",
        "title": "HERMETICWIPER MALWARE",
        "industries": [
            "government"
        ],
        "regions": [
            "LT",
            "LV",
            "UA"
        ],
        "malwares": []
    },
    "ioc_data": [
        {
            "malware_printable": "HermeticWiper",
            "malware_alias": "DriveSlayer,FoxBlade,KillDisk.NCV,NEARMISS",
            "malware": "win.hermeticwiper",
            "last_update": "2022-03-30 00:19:42",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "a64c3e0522fad787b95bfb6a30c3aed1b5786e69e88e023c062ec7e5cebf4d3e",
                        "timestamp": "2022-03-30 00:19:42"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "ffea1266b09abbf0ceb59119746d8630",
                        "timestamp": "2022-03-29 17:27:47"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-03-30 00:19:42",
    "mitre": [],
    "file_name": "hermeticwiper"
};