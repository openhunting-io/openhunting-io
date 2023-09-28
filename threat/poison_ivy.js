var threatdata = {
    "name": "Poison Ivy",
    "alias": "Poison Ivy, pivy, poisonivy, Gen:Trojan.Heur.PT, Darkmoon, Chymine, SPIVY",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Poison Ivy",
        "names": [
            {
                "name": "Poison Ivy"
            },
            {
                "name": "pivy"
            },
            {
                "name": "poisonivy"
            },
            {
                "name": "Gen:Trojan.Heur.PT"
            },
            {
                "name": "Darkmoon"
            },
            {
                "name": "Chymine"
            },
            {
                "name": "SPIVY"
            }
        ],
        "description": "Poison Ivy is a popular remote access tool (RAT) that has been used by many groups.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-poison-ivy.pdf",
            "https://www.fortinet.com/blog/threat-research/deep-analysis-of-new-poison-ivy-variant.html",
            "https://blog.fortinet.com/2017/09/15/deep-analysis-of-new-poison-ivy-plugx-variant-part-ii",
            "http://contagiodump.blogspot.com/2010/01/jan-17-trojan-darkmoonb-exe-haiti.html",
            "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2017/august/analysing-a-recent-poison-ivy-sample/",
            "https://researchcenter.paloaltonetworks.com/2016/04/unit42-new-poison-ivy-rat-variant-targets-hong-kong-pro-democracy-activists/",
            "https://www.fireeye.com/blog/threat-research/2013/08/operation-molerats-middle-east-cyber-attacks-using-poison-ivy.html",
            "https://www.fireeye.com/blog/threat-research/2013/10/know-your-enemy-tracking-a-rapidly-evolving-apt-actor.html",
            "https://researchcenter.paloaltonetworks.com/2014/09/recent-watering-hole-attacks-attributed-apt-group-th3bug-using-poison-ivy/",
            "http://blogs.360.cn/post/APT_C_01_en.html",
            "https://researchcenter.paloaltonetworks.com/2016/11/unit42-tropic-trooper-targets-taiwanese-government-and-fossil-fuel-provider-with-poison-ivy/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0012/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.poison_ivy",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.darkmoon"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Poison%20Ivy"
        ],
        "uuid": "f0250d37-fcad-40db-bfa4-adb597d651db",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Poison Ivy",
            "malware_alias": "SPIVY,pivy,poisonivy",
            "malware": "win.poison_ivy",
            "last_update": "2022-10-03 13:10:02",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "c616002f3cce0fd52d6ead8621a9f1f1",
                        "timestamp": "2022-10-03 13:10:02"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-10-03 13:10:02",
    "mitre": [],
    "file_name": "poison_ivy",
    "analysis": null
};