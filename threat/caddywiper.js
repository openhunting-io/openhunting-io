var threatdata = {
    "name": "CaddyWiper",
    "alias": "CaddyWiper, KillDisk.NCX",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "CaddyWiper",
        "names": [
            {
                "name": "CaddyWiper"
            },
            {
                "name": "KillDisk.NCX"
            }
        ],
        "description": "(ESET) ESET researchers have uncovered yet another destructive data wiper that was used in attacks against organizations in Ukraine.\nDubbed CaddyWiper by ESET analysts, the malware was first detected at 11.38 a.m. local time (9.38 a.m. UTC) on Monday. The wiper, which destroys user data and partition information from attached drives, was spotted on several dozen systems in a limited number of organizations. It is detected by ESET products as Win32/KillDisk.NCX.\nCaddyWiper bears no major code similarities to either {{HermeticWiper}} or {{IsaacWiper}}, the other two new data wipers that have struck organizations in Ukraine since February 23rd.\nMuch like with HermeticWiper, however, there\u2019s evidence to suggest that the bad actors behind CaddyWiper infiltrated the target\u2019s network before unleashing the wiper.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/03/15/caddywiper-new-wiper-malware-discovered-ukraine/",
            "https://blog.talosintelligence.com/2022/03/threat-advisory-caddywiper.html",
            "https://blog.malwarebytes.com/threat-intelligence/2022/03/double-header-isaacwiper-and-caddywiper/",
            "https://blog.morphisec.com/caddywiper-analysis-new-malware-attacking-ukraine",
            "https://www.welivesecurity.com/2022/04/12/industroyer2-industroyer-reloaded/",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0693/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.caddywiper"
        ],
        "uuid": "ed300463-d915-45b0-b79f-0a31acfe6bb0",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "CaddyWiper",
            "malware_alias": "KillDisk.NCX",
            "malware": "win.caddywiper",
            "last_update": "2022-03-16 23:20:57",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "a294620543334a721a2ae8eaaf9680a0786f4b9a216d75b55cfd28f39e9430ea",
                        "timestamp": "2022-03-16 23:20:57"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-03-16 23:20:57",
    "mitre": [],
    "file_name": "caddywiper",
    "analysis": null
};