var threatdata = {
    "name": "Winnti",
    "alias": "Winnti, BleDoor, RbDoor, RibDoor",
    "category": "Malware",
    "type": "Reconnaissance, Rootkit, Backdoor, Downloader, Tunneling, Info stealer, Exfiltration",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Winnti",
        "names": [
            {
                "name": "Winnti"
            },
            {
                "name": "BleDoor"
            },
            {
                "name": "RbDoor"
            },
            {
                "name": "RibDoor"
            }
        ],
        "description": "(Kaspersky) So what does PlusDLL control? It turns out that the target functionality is implemented in different files. Each file provides a specific remote control feature and is downloaded from the attackers\u2019 server every time the system starts up. These files are not saved on disk or in the registry but are loaded directly into the memory.\n\nAt the very start of the operation, after launching the driver, PlusDLL collects information about the infected system. A unique identifier for the infected computer is generated based on information about the hard drive and the network adapter\u2019s MAC address, e.g., TKVFP-XZTTL-KXFWH-RBJLF-FXWJR. The attackers are interested primarily in the computer\u2019s name, the program which loaded the malicious library, as well as information about remote desktop sessions (session name, client name, user name and session time). All of this data is collected in a buffer, which is then compressed and sent to the attackers\u2019 control center.\n\nIn reply to this initial message from the bot, the control center sends the list of available plugins. Plugins are DLL libraries that provide specific remote control functions. Upon receiving the list of plugins, the bot downloads them, allocates them in the memory and passes control to these libraries.\n\nAlso see {{HighNoon}}, which seems to be a variant of Winnti.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Rootkit",
            "Backdoor",
            "Downloader",
            "Tunneling",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/20134508/winnti-more-than-just-a-game-130410.pdf",
            "https://www.welivesecurity.com/wp-content/uploads/2019/10/ESET_Winnti.pdf",
            "https://github.com/TKCERT/winnti-suricata-lua",
            "https://github.com/TKCERT/winnti-nmap-script",
            "https://github.com/TKCERT/winnti-detector",
            "https://www.protectwise.com/blog/winnti-evolution-going-open-source.html",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/winnti-abuses-github/",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/pigs-malware-examining-possible-member-winnti-group/",
            "https://securelist.com/games-are-over/70991/",
            "https://www.novetta.com/wp-content/uploads/2015/04/novetta_winntianalysis.pdf",
            "https://blogs.blackberry.com/en/2020/04/decade-of-the-rats"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0141/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.winnti",
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.winnti",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.winnti"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:winnti"
        ],
        "uuid": "9b25ce20-0707-4676-9b8e-b60a7d794bed",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Winnti",
            "malware_alias": null,
            "malware": "elf.winnti",
            "last_update": "2022-08-22 14:54:09",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "0816e820c5380f3690a605ed21e16680",
                        "timestamp": "2022-08-22 14:54:09"
                    },
                    {
                        "value": "c99397d66e49e2def1b17f57cd0c5fb9",
                        "timestamp": "2022-04-12 04:22:48"
                    },
                    {
                        "value": "87100cb600d876bd022a4d93ce6305a0",
                        "timestamp": "2022-01-28 20:57:14"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "a512950b07384ef98d9105da98755cc99a50e007d7976bfd1242b7c0dacec3cf",
                        "timestamp": "2022-05-14 05:09:11"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "b8d7b850dc185160a24a3ee43606a9ef41d60e80",
                        "timestamp": "2021-03-10 13:26:28"
                    }
                ],
                "ip:port": [
                    {
                        "value": "161.129.64.124:443",
                        "timestamp": "2021-03-10 13:25:47"
                    }
                ],
                "domain": [
                    {
                        "value": "mm.portomnail.com",
                        "timestamp": "2021-03-10 13:25:26"
                    },
                    {
                        "value": "back.rooter.tk",
                        "timestamp": "2021-03-10 13:25:26"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-22 14:54:09",
    "mitre": [],
    "file_name": "winnti",
    "analysis": null
};