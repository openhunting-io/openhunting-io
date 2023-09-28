var threatdata = {
    "name": "Evilnum",
    "alias": "Evilnum, EVILNUM, Marvel",
    "category": "Malware",
    "type": "Loader, Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Evilnum",
        "names": [
            {
                "name": "Evilnum"
            },
            {
                "name": "EVILNUM"
            },
            {
                "name": "Marvel"
            }
        ],
        "description": "(ESET) This component communicates with a C&C server and acts as a backdoor without the need for any additional program. However, in most attacks that we have seen, the attackers deployed additional components as they saw fit and used the JS malware only as a first stage.\n\nThe first known mention of this JavaScript malware was in May 2018 in this pwncode article.",
        "category": "Malware",
        "type": [
            "Loader",
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/07/09/more-evil-deep-look-evilnum-toolset/",
            "http://www.pwncode.io/2018/05/javascript-based-bot-using-github-c.html",
            "https://blog.prevailion.com/2020/05/phantom-in-command-shell5.html",
            "https://securelist.com/deathstalker-mercenary-triumvirate/98177/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0568/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.evilnum",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.evilnum"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:evilnum"
        ],
        "uuid": "57ac4c19-94d8-4e6e-9240-f10c0e2e3940",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "EVILNUM",
            "malware_alias": null,
            "malware": "js.evilnum",
            "last_update": "2022-08-01 20:06:39",
            "tags": [
                "EvilNum",
                "EVILNUM"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "cec06262d1d35f8ea013670c540e30e8",
                        "timestamp": "2022-08-01 20:06:39"
                    },
                    {
                        "value": "4b357bdd7d34050f85b7ef1d497a87dc",
                        "timestamp": "2022-08-01 20:06:39"
                    }
                ],
                "domain": [
                    {
                        "value": "kalpoipolpmi.net",
                        "timestamp": "2022-06-03 21:07:57"
                    },
                    {
                        "value": "8as1s2.com",
                        "timestamp": "2022-06-03 21:07:56"
                    },
                    {
                        "value": "cspapop110.com",
                        "timestamp": "2022-06-03 21:07:54"
                    },
                    {
                        "value": "forme539.ddns.net",
                        "timestamp": "2022-06-03 20:14:52"
                    }
                ],
                "ip:port": [
                    {
                        "value": "5.206.227.72:2222",
                        "timestamp": "2022-06-03 20:14:53"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-01 20:06:39",
    "mitre": [],
    "file_name": "evilnum",
    "analysis": null
};