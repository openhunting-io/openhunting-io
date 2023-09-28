var threatdata = {
    "name": "HyperBro",
    "alias": "HyperBro",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Credential stealer, Keylogger",
    "modified": "2021-11-01",
    "all_data": {
        "tool": "HyperBro",
        "names": [
            {
                "name": "HyperBro"
            }
        ],
        "description": "(Kaspersky) The operators used the HyperBro Trojan as their last-stage in-memory remote administration tool (RAT). The timestamps for these modules are from December 2017 until January 2018. The anti-detection launcher and decompressor make extensive use of {{Metasploit}}\u2019s shikata_ga_nai encoder as well as LZNT1 compression.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Keylogger"
        ],
        "information": [
            "https://securelist.com/luckymouse-hits-national-data-center/86083/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0398/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hyperbro"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:hyperbro"
        ],
        "uuid": "b4c5f160-6c46-4cd3-8abe-420b314ffe0e",
        "last-card-change": "2021-11-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "HyperBro",
            "malware_alias": null,
            "malware": "win.hyperbro",
            "last_update": "2023-06-16 11:35:45",
            "tags": [],
            "ioc": {
                "ip:port": [
                    {
                        "value": "138.124.180.56:443",
                        "timestamp": "2023-06-16 11:35:44"
                    },
                    {
                        "value": "103.79.78.48:443",
                        "timestamp": "2023-06-16 11:35:45"
                    },
                    {
                        "value": "138.124.180.108:443",
                        "timestamp": "2023-06-16 11:35:45"
                    },
                    {
                        "value": "85.204.74.143:443",
                        "timestamp": "2023-06-16 11:35:45"
                    },
                    {
                        "value": "104.168.211.246:443",
                        "timestamp": "2023-06-16 11:35:44"
                    },
                    {
                        "value": "80.92.206.158:443",
                        "timestamp": "2023-04-21 11:35:32"
                    },
                    {
                        "value": "89.35.178.105:443",
                        "timestamp": "2023-06-16 11:35:44"
                    },
                    {
                        "value": "103.79.76.232:443",
                        "timestamp": "2023-06-16 11:35:44"
                    },
                    {
                        "value": "45.77.32.139:443",
                        "timestamp": "2023-06-16 11:35:43"
                    },
                    {
                        "value": "45.77.250.141:443",
                        "timestamp": "2023-06-16 11:35:43"
                    },
                    {
                        "value": "154.38.118.188:443",
                        "timestamp": "2023-06-16 11:35:43"
                    },
                    {
                        "value": "8.218.77.161:443",
                        "timestamp": "2023-06-16 11:35:43"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "08710b30b89f6c2eee2c250132acd9a39571f93a26736ddf4dbb4e23041f74f2",
                        "timestamp": "2022-01-26 17:15:00"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "bc259ab9cca395620b1466771d8b9c45",
                        "timestamp": "2022-01-26 17:15:00"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-06-16 11:35:45",
    "mitre": [],
    "file_name": "hyperbro",
    "analysis": null
};