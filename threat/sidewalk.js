var threatdata = {
    "name": "SideWalk",
    "alias": "SideWalk, ScrambleCross",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2023-07-18",
    "all_data": {
        "tool": "SideWalk",
        "names": [
            {
                "name": "SideWalk"
            },
            {
                "name": "ScrambleCross"
            }
        ],
        "description": "(ESET) This backdoor shares multiple similarities with another backdoor used by the group: {{CrossWalk}}.\n\nSideWalk is a modular backdoor that can dynamically load additional modules sent from its C&C server, makes use of Google Docs as a dead drop resolver, and uses Cloudflare workers as a C&C server. It can also properly handle communication behind a proxy.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2021/08/24/sidewalk-may-be-as-dangerous-as-crosswalk/",
            "https://documents.trendmicro.com/assets/white_papers/wp-earth-baku-an-apt-group-targeting-indo-pacific-countries.pdf",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/grayfly-china-sidewalk-malware"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sidewalk"
        ],
        "uuid": "7c20f5f1-cf05-4b00-b9d4-f30dae173daa",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sidewalk",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/blog/chinese-espionage-tactics",
            "date": "2023-07-18",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "Stealth Mode: Chinese Cyber Espionage Actors Continue to Evolve Tactics to Avoid Detection",
            "categories": [
                "BPFDoor",
                "SALTWATER",
                "SEASPY",
                "SideWalk",
                "ZuoRAT",
                "Daxin",
                "HyperBro",
                "HyperSSL",
                "Waterbear"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/09/14/you-never-walk-alone-sidewalk-backdoor-linux-variant/",
            "date": "2022-09-14",
            "organization": "ESET Research",
            "author": "Vladislav Hr\u010dka",
            "title": "You never walk alone: The SideWalk backdoor gets a Linux variant",
            "categories": [
                "SideWalk"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/grayfly-china-sidewalk-malware",
            "date": "2021-09-09",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Grayfly: Chinese Threat Actor Uses Newly-discovered Sidewalk Malware",
            "categories": [
                "CROSSWALK",
                "MimiKatz",
                "SideWalk"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-earth-baku-an-apt-group-targeting-indo-pacific-countries.pdf",
            "date": "2021-08-25",
            "organization": "Trend Micro",
            "author": "Hara Hiroaki",
            "title": "Earth Baku An APT Group Targeting Indo-Pacific Countries  With New Stealth Loaders and Backdoor",
            "categories": [
                "Cobalt Strike",
                "SideWalk"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/08/24/sidewalk-may-be-as-dangerous-as-crosswalk/",
            "date": "2021-08-24",
            "organization": "ESET Research",
            "author": "Thibaut Passilly",
            "title": "The SideWalk may be as dangerous as the CROSSWALK",
            "categories": [
                "Cobalt Strike",
                "CROSSWALK",
                "SideWalk"
            ]
        }
    ],
    "mitre": []
};