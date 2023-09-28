var threatdata = {
    "name": "PoshC2",
    "alias": "PoshC2",
    "category": "Tools",
    "type": "Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "PoshC2",
        "names": [
            {
                "name": "PoshC2"
            }
        ],
        "description": "PoshC2 is an open source remote administration and post-exploitation framework that is publicly available on GitHub. The server-side components of the tool are primarily written in Python, while the implants are written in PowerShell. Although PoshC2 is primarily focused on Windows implantation, it does contain a basic Python dropper for Linux/macOS.",
        "category": "Tools",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://github.com/nettitude/PoshC2/",
            "https://www.prodefence.org/poshc2-red-teaming-post-exploitation-tool/",
            "https://www.fireeye.com/blog/threat-research/2018/12/overruled-containing-a-potentially-destructive-adversary.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0378/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.poshc2"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:poshc2"
        ],
        "uuid": "18ebfad6-64bd-4c68-9339-3352d14a982e",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "PoshC2",
            "malware_alias": null,
            "malware": "win.poshc2",
            "last_update": "2022-10-17 18:59:43",
            "tags": [
                "Posh",
                "PostC2"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "95.213.145.101:443",
                        "timestamp": "2022-10-17 18:59:43"
                    },
                    {
                        "value": "46.243.186.112:3790",
                        "timestamp": "2021-06-22 14:59:36"
                    },
                    {
                        "value": "185.255.79.26:3790",
                        "timestamp": "2021-06-22 14:59:36"
                    },
                    {
                        "value": "103.39.230.213:3790",
                        "timestamp": "2021-06-22 14:59:36"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-10-17 18:59:43",
    "mitre": [],
    "file_name": "poshc2",
    "analysis": null
};