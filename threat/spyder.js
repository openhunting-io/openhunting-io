var threatdata = {
    "name": "Spyder",
    "alias": "Spyder",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2022-07-19",
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
                "fragtor",
                "Fragtor",
                "Spyder",
                "Trojan",
                "trojan"
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
    "mitre": [],
    "file_name": "spyder",
    "analysis": null
};