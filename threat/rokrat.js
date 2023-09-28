var threatdata = {
    "name": "RokRAT",
    "alias": "RokRAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Credential stealer, Info stealer, Exfiltration, Downloader",
    "modified": "2023-06-21",
    "all_data": {
        "tool": "RokRAT",
        "names": [
            {
                "name": "RokRAT"
            }
        ],
        "description": "(Carbon Black) ROKRAT is a Remote Access Trojan (RAT). ROKRAT provides attackers with numerous capabilities to introduce additional tools and malware onto a network, exfiltrate data, harvest credentials, as well as capture screenshots of the victim system. The latest variants of ROKRAT use internet cloud solutions such as PCloud, Dropbox, and Yandex as a command and control (C2) channel.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Info stealer",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://www.carbonblack.com/2018/02/27/threat-analysis-rokrat-malware/",
            "http://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/002/191/original/Talos_RokRatWhitePaper.pdf",
            "http://blog.talosintelligence.com/2017/04/introducing-rokrat.html",
            "http://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html",
            "https://www.intezer.com/apt37-final1stspy-reaping-the-freemilk/",
            "http://blog.talosintelligence.com/2017/11/ROKRAT-Reloaded.html",
            "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2018/november/rokrat-analysis/",
            "https://research.checkpoint.com/2023/chain-reaction-rokrats-missing-link/",
            "https://threatmon.io/reverse-engineering-rokrat-a-closer-look-at-apt37s-onedrive-based-attack-vector/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0240/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rokrat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ROKRAT"
        ],
        "uuid": "1339c5d9-ed14-42ef-b70d-58de896c5d42",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RokRAT",
            "malware_alias": "DOGCALL",
            "malware": "win.rokrat",
            "last_update": "2023-09-13 15:43:07",
            "tags": [
                "RokRat",
                "APT37",
                "RokRAT",
                "APT",
                "GOLDBACKDOOR",
                "RAT"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "fd67ad03cc71d3397f962896365ed510",
                        "timestamp": "2023-09-13 15:43:07"
                    },
                    {
                        "value": "44ba46dfff78bc62a3b2619d308ca40c",
                        "timestamp": "2023-07-05 07:21:18"
                    },
                    {
                        "value": "71dbebb8a31ea3de0115851bb15fd2bc",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "fbaab65888859d25437e8803a7139633",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "1011dc2d8450da88011b890ea81c9083",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "7095811df4cb1ee4135ce605af7f163f",
                        "timestamp": "2023-05-24 18:07:28"
                    },
                    {
                        "value": "5f9e0afb3503d909984b3b30d038bdc5",
                        "timestamp": "2023-05-24 18:07:28"
                    },
                    {
                        "value": "487769a19f032e981f33023b2cb7fe10",
                        "timestamp": "2023-05-15 15:04:40"
                    },
                    {
                        "value": "74e3d84492845067a0da6cfa00c064eb",
                        "timestamp": "2023-05-15 15:04:40"
                    },
                    {
                        "value": "8d7f38cbdca2fc4d8f6ea451398ca378",
                        "timestamp": "2023-05-15 15:04:40"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-13 15:43:07",
    "mitre": [],
    "file_name": "rokrat",
    "analysis": null
};