var threatdata = {
    "name": "MirrorBlast",
    "alias": "MirrorBlast",
    "category": "Malware",
    "type": "Downloader, Loader",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "MirrorBlast",
        "names": [
            {
                "name": "MirrorBlast"
            }
        ],
        "description": "No description available yet.",
        "category": "Malware",
        "type": [
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://www.proofpoint.com/us/blog/threat-insight/whatta-ta-ta505-ramps-activity-delivers-new-flawedgrace-variant",
            "https://frsecure.com/blog/the-rebol-yell-new-rebol-exploit/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mirrorblast"
        ],
        "uuid": "65acc33f-e402-4d39-a4a4-2a0fb7834f50",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "MirrorBlast",
            "malware_alias": null,
            "malware": "win.mirrorblast",
            "last_update": "2021-11-17 00:04:13",
            "tags": [
                "MirrorBlast",
                "TA505"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "dzikics-my-sharepoint.com",
                        "timestamp": "2021-10-20 12:12:53"
                    },
                    {
                        "value": "cdn03664-dl-fileshare.com",
                        "timestamp": "2021-10-20 12:12:52"
                    },
                    {
                        "value": "cdn-8846-sharepoint-office.com",
                        "timestamp": "2021-10-20 12:12:52"
                    },
                    {
                        "value": "dzikic-my-sharepoint.com",
                        "timestamp": "2021-10-20 12:12:52"
                    },
                    {
                        "value": "menorukis.su",
                        "timestamp": "2021-10-20 12:11:49"
                    },
                    {
                        "value": "dropmefilesbox.com",
                        "timestamp": "2021-10-15 10:26:43"
                    },
                    {
                        "value": "diarromonico.com",
                        "timestamp": "2021-10-15 07:45:52"
                    },
                    {
                        "value": "cdnfilesdrop.com",
                        "timestamp": "2021-10-14 11:57:07"
                    },
                    {
                        "value": "cdn0341.us-dropbox.com",
                        "timestamp": "2021-10-14 08:03:48"
                    },
                    {
                        "value": "cdn9883.us-dropbox.com",
                        "timestamp": "2021-10-14 08:03:48"
                    },
                    {
                        "value": "feristoaul.com",
                        "timestamp": "2021-10-20 12:11:49"
                    },
                    {
                        "value": "cdn-g0962.int-onedrive.com",
                        "timestamp": "2021-10-13 13:04:32"
                    },
                    {
                        "value": "dzikic-my-sharepoint.com",
                        "timestamp": "2021-10-07 09:26:24"
                    },
                    {
                        "value": "cdn-8846-sharepoint-office.com",
                        "timestamp": "2021-10-07 09:26:24"
                    },
                    {
                        "value": "guerdiqurt.com",
                        "timestamp": "2021-10-07 09:26:24"
                    },
                    {
                        "value": "fidufagios.com",
                        "timestamp": "2021-10-20 12:11:49"
                    },
                    {
                        "value": "dzikics-my-sharepoint.com",
                        "timestamp": "2021-10-07 09:26:23"
                    },
                    {
                        "value": "cdn03664-dl-fileshare.com",
                        "timestamp": "2021-10-07 09:26:08"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "d6c487b1fb3d31851921b343f3d131f7cb4c0469a60484037a6fa8cfbdc29dea",
                        "timestamp": "2021-11-17 00:04:13"
                    }
                ],
                "ip:port": [
                    {
                        "value": "185.176.220.198:80",
                        "timestamp": "2021-10-07 19:49:48"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-11-17 00:04:13",
    "mitre": [],
    "file_name": "mirrorblast",
    "analysis": null
};