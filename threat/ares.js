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
            "last_update": "2022-09-16 15:03:04",
            "tags": [
                "Ares"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "142.11.236.77:80",
                        "timestamp": "2022-09-16 15:03:04"
                    }
                ],
                "domain": [
                    {
                        "value": "tomolina.top",
                        "timestamp": "2022-09-16 15:02:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-09-16 15:03:04",
    "mitre": [],
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
    ]
};