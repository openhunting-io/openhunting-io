var threatdata = {
    "name": "sLoad",
    "alias": "sLoad, StarsLord",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Banking trojan, Info stealer, Downloader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "sLoad",
        "names": [
            {
                "name": "sLoad"
            },
            {
                "name": "StarsLord"
            }
        ],
        "description": "(Proofpoint) sLoad is also written in PowerShell. At the time of this writing, the latest version of sLoad was 5.07b, which we will analyze here. It includes noteworthy features such as:\n\n\u2022 Collection of information to report to the C&C server that includes:\no A list of running process\no Presence of .ICA files on the system (likely Citrix-related)\no Whether an Outlook folder is present on the system\no Additional reconnaissance data\n\u2022 The ability to take screenshots\n\u2022 Checking the DNS cache for specific domains (e.g., targeted banks)\n\u2022 Loading external binaries",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Banking trojan",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/sload-and-ramnit-pairing-sustained-campaigns-against-uk-and-italy",
            "https://threatpost.com/sload-malware-revamped-starslord-l-features/152084/",
            "https://cyware.com/news/new-sload-malware-downloader-being-leveraged-by-apt-group-ta554-to-spread-ramnit-7d03f2d9",
            "https://isc.sans.edu/forums/diary/Malicious+Powershell+Targeting+UK+Bank+Customers/23675/",
            "https://blog.yoroi.company/research/the-sload-powershell-threat-is-expanding-to-italy/",
            "https://www.cybereason.com/blog/banking-trojan-delivered-by-lolbins-ramnit-trojan"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.sload"
        ],
        "uuid": "02ef4587-9f94-4cfd-869a-7bebeb283516",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "sLoad",
            "malware_alias": "Starslord",
            "malware": "ps1.sload",
            "last_update": "2022-02-07 14:39:30",
            "tags": [
                "sLoad"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "hgjui.eu",
                        "timestamp": "2022-02-07 14:39:30"
                    },
                    {
                        "value": "hkjt.eu",
                        "timestamp": "2022-02-07 14:39:30"
                    },
                    {
                        "value": "opoietj.eu",
                        "timestamp": "2021-07-05 13:23:18"
                    },
                    {
                        "value": "sertyty.eu",
                        "timestamp": "2021-07-05 13:23:18"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-02-07 14:39:30",
    "mitre": [],
    "file_name": "sload",
    "analysis": null
};