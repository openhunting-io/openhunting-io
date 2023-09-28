var threatdata = {
    "name": "BadPatch",
    "alias": "BadPatch, WelcomeChat",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Downloader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "BadPatch",
        "names": [
            {
                "name": "BadPatch"
            },
            {
                "name": "WelcomeChat"
            }
        ],
        "description": "BadPatch is a Windows Trojan that was used in a Gaza Hackers-linked campaign.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-badpatch/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0337/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.badpatch"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BadPatch"
        ],
        "uuid": "d880e11c-a43c-4eb1-a9c7-27dea3ddf224",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BadPatch",
            "malware_alias": "WelcomeChat",
            "malware": "apk.badpatch",
            "last_update": "2022-07-09 23:31:58",
            "tags": [
                "android",
                "apk",
                "malware"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "127cdf77d9ed7e1ff41ab1a5184775647996182a4c24575692206641470d6f5d",
                        "timestamp": "2022-07-09 23:31:58"
                    },
                    {
                        "value": "db91896ffe5405cae62a07c61153fb7aa3eb4e159dc4889a1d636e7f403c979f",
                        "timestamp": "2022-07-09 23:31:58"
                    },
                    {
                        "value": "675770c13f59d6d0e72ed0ed81c7193f3c0975518b96b08155d268ec7cc39826",
                        "timestamp": "2022-07-09 23:31:58"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-09 23:31:58",
    "mitre": [],
    "file_name": "badpatch",
    "analysis": null
};