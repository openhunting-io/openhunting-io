var threatdata = {
    "name": "DOGCALL",
    "alias": "DOGCALL",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "DOGCALL",
        "names": [
            {
                "name": "DOGCALL"
            }
        ],
        "description": "(FireEye) DOGCALL is a backdoor commonly distributed as an encoded binary file downloaded and decrypted by shellcode following the exploitation of weaponized documents. DOGCALL is capable of capturing screenshots, logging keystrokes, evading analysis with anti-virtual machine detections, and leveraging cloud storage APIs such as Cloud, Box, Dropbox, and Yandex.\n\nDOGCALL was used to target South Korean Government and military organizations in March and April 2017.<br >\nThe malware is typically dropped using an HWP exploit in a lure document.\n\nThe wiper tool, {{RUHAPPY}}, was found on some of the systems targeted by DOGCALL. While DOGCALL is primarily an espionage tool, RUHAPPY is a destructive wiper tool meant to render systems inoperable.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0213/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:dogcall"
        ],
        "uuid": "26caccee-f011-40c9-b1a7-e29e763f3d39",
        "last-card-change": "2020-04-23",
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
    "file_name": "dogcall",
    "analysis": null
};