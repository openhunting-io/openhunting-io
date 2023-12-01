var threatdata = {
    "name": "Ares",
    "alias": "Ares",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Keylogger, Credential stealer, Exfiltration",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Ares",
        "names": [
            {
                "name": "Ares"
            }
        ],
        "description": "(Zscaler) In February 2021, Zscaler ThreatLabz identified a new {{Kronos}} variant that surfaced via spam campaigns to German speakers, which calls itself Ares. In Greek mythology, Ares is the son of Zeus and grandson of Kronos. Thus, the naming convention appears to refer to this new malware variant as the third generation of Kronos. Ares still appears to be in development alongside an information stealer that harvests credentials from various applications including VPN clients, web browsers, and the malware can exfiltrate arbitrary files and cryptocurrency wallets.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Keylogger",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.zscaler.com/blogs/security-research/ares-malware-grandson-kronos-banking-trojan",
            "https://www.zscaler.com/blogs/security-research/ares-banking-trojan-learns-old-tricks-adds-defunct-qakbot-dga"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ares"
        ],
        "uuid": "96a3050d-9a39-4f47-912b-ff2de69327a2",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Ares",
            "malware_alias": null,
            "malware": "win.ares",
            "last_update": "2023-11-22 19:57:04",
            "tags": [
                "censys",
                "Ares",
                "HETZNER-CLOUD2-AS",
                "GOOGLE-CLOUD-PLATFORM",
                "RAT",
                "HETZNER-AS",
                "C2",
                "CONTABO",
                "AS-CHOOPA"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "18.142.254.96:80",
                        "timestamp": "2023-11-22 19:57:04"
                    },
                    {
                        "value": "66.42.93.127:3306",
                        "timestamp": "2023-11-16 21:17:59"
                    },
                    {
                        "value": "34.121.161.18:5900",
                        "timestamp": "2023-11-15 15:32:06"
                    },
                    {
                        "value": "2.58.113.190:8035",
                        "timestamp": "2023-11-11 10:06:43"
                    },
                    {
                        "value": "5.161.104.72:443",
                        "timestamp": "2023-10-25 18:45:27"
                    },
                    {
                        "value": "5.161.104.72:80",
                        "timestamp": "2023-10-25 18:45:27"
                    },
                    {
                        "value": "77.68.91.91:443",
                        "timestamp": "2023-10-25 18:45:26"
                    },
                    {
                        "value": "207.180.220.55:8015",
                        "timestamp": "2023-10-25 18:45:23"
                    },
                    {
                        "value": "161.97.151.220:7015",
                        "timestamp": "2023-10-25 18:45:22"
                    },
                    {
                        "value": "47.242.51.181:8080",
                        "timestamp": "2023-10-31 22:53:44"
                    },
                    {
                        "value": "142.11.236.77:80",
                        "timestamp": "2022-09-16 15:03:04"
                    }
                ],
                "domain": [
                    {
                        "value": "static.72.104.161.5.clients.your-server.de",
                        "timestamp": "2023-10-25 18:45:25"
                    },
                    {
                        "value": "winedoscom.stag.tempweb.dev",
                        "timestamp": "2023-10-25 18:45:25"
                    },
                    {
                        "value": "academy.marketing4ecommerce.net",
                        "timestamp": "2023-10-25 18:45:24"
                    },
                    {
                        "value": "h91.wpherc.dev",
                        "timestamp": "2023-10-25 18:45:23"
                    },
                    {
                        "value": "www.goldmineonline.co.uk",
                        "timestamp": "2023-10-25 18:45:22"
                    },
                    {
                        "value": "www.winedoscom.stag.tempweb.dev",
                        "timestamp": "2023-10-25 18:45:21"
                    },
                    {
                        "value": "host.wphercules.com",
                        "timestamp": "2023-10-25 18:45:20"
                    },
                    {
                        "value": "goldmineonline.co.uk",
                        "timestamp": "2023-10-25 18:45:19"
                    },
                    {
                        "value": "tomolina.top",
                        "timestamp": "2022-09-16 15:02:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-22 19:57:04",
    "file_name": "ares",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/ares-banking-trojan-learns-old-tricks-adds-defunct-qakbot-dga",
            "date": "2022-09-06",
            "organization": "Zscaler",
            "author": "Brett Stone-Gross",
            "title": "The Ares Banking Trojan Learns Old Tricks: Adds the Defunct Qakbot DGA",
            "categories": [
                "Ares",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/ares-malware-grandson-kronos-banking-trojan",
            "date": "2021-03-30",
            "organization": "Zscaler",
            "author": "Brett Stone-Gross",
            "title": "Ares Malware: The Grandson of the Kronos Banking Trojan",
            "categories": [
                "Ares",
                "Kronos"
            ]
        },
        {
            "data_url": "https://github.com/sweetsoftware/Ares",
            "date": "2017-12-07",
            "organization": "Github (sweetsoftware)",
            "author": "sweetsoftware",
            "title": "Ares",
            "categories": [
                "Ares"
            ]
        }
    ],
    "mitre": []
};