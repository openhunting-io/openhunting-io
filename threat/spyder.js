var threatdata = {
    "name": "Spyder",
    "alias": "Spyder",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2023-08-07",
    "all_data": {
        "tool": "Spyder",
        "names": [
            {
                "name": "Spyder"
            }
        ],
        "description": "(Dr.Web) In December 2020, the Doctor Web virus laboratory was contacted by a telecommunications company based in Central Asia after its employees discovered suspicious files on their corporate network. During the examination, our analysts extracted and studied a malicious sample, which turned out to be one of the backdoors used by the hacker group known as Winnti.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://news.drweb.com/show/?i=14154&lng=en",
            "https://www.recordedfuture.com/chinese-group-tag-22-targets-nepal-philippines-taiwan/",
            "https://hello.global.ntt/-/media/ntt/global/insights/white-papers/the-operations-of-winnti-group.pdf",
            "https://securitynews.sonicwall.com/xmlpost/chinas-winnti-spyder-module/",
            "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.spyder"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/global/pulses?q=tag:spyder"
        ],
        "uuid": "a43f8b27-b8a0-4526-a67e-84b8842c752c",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Spyder",
            "malware_alias": null,
            "malware": "win.spyder",
            "last_update": "2023-09-02 23:48:09",
            "tags": [
                "ViriBack",
                "Trojan",
                "Fragtor",
                "trojan",
                "fragtor",
                "Spyder"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "plainboardssixty.com",
                        "timestamp": "2023-09-02 23:48:09"
                    },
                    {
                        "value": "libreofficeupdates.com",
                        "timestamp": "2023-09-02 23:48:09"
                    },
                    {
                        "value": "radar.game",
                        "timestamp": "2023-01-18 22:41:24"
                    },
                    {
                        "value": "cdn.radar.game",
                        "timestamp": "2023-01-18 22:41:24"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "09d605c20a1de79592e839c6d78e5d3f",
                        "timestamp": "2023-01-18 22:23:41"
                    }
                ],
                "url": [
                    {
                        "value": "https://cdn.radar.game/dl/pc/installer/radarinstaller.exe",
                        "timestamp": "2023-01-18 22:21:21"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "e00609f98a5ce391934710a1a47f748bb063ae939555e1cb491c4e5cff69fa97",
                        "timestamp": "2023-01-18 22:16:49"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-02 23:48:09",
    "file_name": "spyder",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2023-0808.pdf",
            "date": "2023-08-07",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "RedHotel: A Prolific, Chinese State-Sponsored Group Operating at a Global Scale",
            "categories": [
                "Winnti",
                "Brute Ratel C4",
                "Cobalt Strike",
                "FunnySwitch",
                "PlugX",
                "ShadowPad",
                "Spyder"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/operation-cuckoobees-deep-dive-into-stealthy-winnti-techniques",
            "date": "2022-05-04",
            "organization": "Cybereason",
            "author": "Chen Erlich",
            "title": "Operation CuckooBees: Deep-Dive into Stealthy Winnti Techniques",
            "categories": [
                "PRIVATELOG",
                "Spyder",
                "STASHLOG",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive",
            "date": "2022-05-04",
            "organization": "Cybereason",
            "author": "Chen Erlich",
            "title": "Operation CuckooBees: A Winnti Malware Arsenal Deep-Dive",
            "categories": [
                "PRIVATELOG",
                "Spyder",
                "STASHLOG",
                "Winnti"
            ]
        },
        {
            "data_url": "https://speakerdeck.com/aragorntseng/winnti-is-coming-evolution-after-prosecution-at-hitcon2021",
            "date": "2021-12-16",
            "organization": "TEAMT5",
            "author": "Charles Li",
            "title": "Winnti is Coming - Evolution after Prosecution",
            "categories": [
                "Cobalt Strike",
                "FishMaster",
                "FunnySwitch",
                "HIGHNOON",
                "ShadowPad",
                "Spyder"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/chinese-group-tag-22-targets-nepal-philippines-taiwan/",
            "date": "2021-07-08",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "Chinese State-Sponsored Activity Group TAG-22 Targets Nepal, the Philippines, and Taiwan Using Winnti and Other Tooling",
            "categories": [
                "ShadowPad",
                "Spyder",
                "Winnti"
            ]
        },
        {
            "data_url": "https://hello.global.ntt/-/media/ntt/global/insights/white-papers/the-operations-of-winnti-group.pdf",
            "date": "2021-04-29",
            "organization": "NTT",
            "author": "Threat Detection NTT Ltd.",
            "title": "The Operations of Winnti group",
            "categories": [
                "Cobalt Strike",
                "ShadowPad",
                "Spyder",
                "Winnti",
                "Earth Lusca"
            ]
        },
        {
            "data_url": "https://securitynews.sonicwall.com/xmlpost/chinas-winnti-spyder-module/",
            "date": "2021-03-26",
            "organization": "SonicWall",
            "author": "SonicWall CaptureLabs Threats Research Team",
            "title": "China\u2019s \u201cWinnti\u201d Spyder Module",
            "categories": [
                "Spyder"
            ]
        },
        {
            "data_url": "https://st.drweb.com/static/new-www/news/2021/march/BackDoor.Spyder.1_en.pdf",
            "date": "2021-03-01",
            "organization": "Dr.Web",
            "author": "Dr.Web",
            "title": "Study of the Spyder modularbackdoor for targeted attacks",
            "categories": [
                "Spyder"
            ]
        },
        {
            "data_url": "https://vms.drweb.com/virus/?i=23648386",
            "date": "2020-03-01",
            "organization": "Dr.Web",
            "author": "Dr.Web",
            "title": "BackDoor.Spyder.1",
            "categories": [
                "Spyder"
            ]
        }
    ],
    "mitre": []
};