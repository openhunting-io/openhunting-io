var threatdata = {
    "name": "DarkVNC",
    "alias": "DarkVNC",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "DarkVNC",
        "names": [
            {
                "name": "DarkVNC"
            }
        ],
        "description": "(Talos) DarkVNC attempts to connect to the C2 server using the TCP port 8080, likely to be less suspicious as this is one of the default ports for connections to HTTP proxies.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.talosintelligence.com/2020/04/azorult-brings-friends-to-party.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.darkvnc"
        ],
        "uuid": "345160e8-d7a0-482c-84da-5353ae011161",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "DarkVNC",
            "malware_alias": null,
            "malware": "win.darkvnc",
            "last_update": "2023-08-14 06:07:11",
            "tags": [
                "hvnc",
                "DarkVNC",
                "rat"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "aimtech.ddns.net",
                        "timestamp": "2023-08-14 06:07:11"
                    }
                ],
                "ip:port": [
                    {
                        "value": "2.152.208.135:5500",
                        "timestamp": "2023-08-14 04:53:45"
                    },
                    {
                        "value": "137.74.104.108:443",
                        "timestamp": "2022-11-01 19:13:33"
                    },
                    {
                        "value": "212.114.52.91:8080",
                        "timestamp": "2022-12-15 11:32:30"
                    },
                    {
                        "value": "135.181.175.108:8080",
                        "timestamp": "2022-12-15 11:32:30"
                    },
                    {
                        "value": "91.238.50.80:8080",
                        "timestamp": "2022-06-29 05:53:22"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-08-14 06:07:11",
    "mitre": [],
    "file_name": "darkvnc",
    "analysis": null
};