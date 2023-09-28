var threatdata = {
    "name": "FlawedAmmyy",
    "alias": "FlawedAmmyy, AmmyyRAT",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "FlawedAmmyy",
        "names": [
            {
                "name": "FlawedAmmyy"
            },
            {
                "name": "AmmyyRAT"
            }
        ],
        "description": "(Proofpoint) Ammyy Admin is a popular remote access tool used by businesses and consumers to handle remote control and diagnostics on Microsoft Windows machines. However, leaked source code for Version 3 of Ammyy Admin has emerged as a Remote Access Trojan called FlawedAmmyy appearing in a variety of malicious campaigns. For infected individuals, this means that attackers potentially have complete access to their PCs, giving threat actors the ability to access a variety of services, steal files and credentials, and much more.  We have seen FlawedAmmyy in both massive campaigns, potentially creating a large base of compromised computers, as well as targeted campaigns that create opportunities for actors to steal customer data, proprietary information, and more.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/leaked-ammyy-admin-source-code-turned-malware",
            "https://www.sans.org/reading-room/whitepapers/reverseengineeringmalware/unpacking-decrypting-flawedammyy-38930",
            "https://secrary.com/ReversingMalware/AMMY_RAT_Downloader/",
            "https://www.proofpoint.com/us/threat-insight/post/ta505-abusing-settingcontent-ms-within-pdf-files-distribute-flawedammyy-rat",
            "https://github.com/Coldzer0/Ammyy-v3"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0381/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.flawedammyy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:flawedammyy"
        ],
        "uuid": "12a4f267-6f13-4033-a9c9-f797fb2ebd45",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "FlawedAmmyy",
            "malware_alias": null,
            "malware": "win.flawedammyy",
            "last_update": "2021-06-24 03:00:24",
            "tags": [
                "flawedammyy"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "9a7c58bd98d70631aa1473f7b57b426db367d72429a5455b433a05ee251f3236",
                        "timestamp": "2021-06-24 03:00:24"
                    },
                    {
                        "value": "be82341a12ea83d9efadc9ac35cf16d327f8499c99107dcde88dd0f5df84523c",
                        "timestamp": "2021-06-24 03:00:24"
                    },
                    {
                        "value": "2fcfdbfc9ecd109d69dcac7d4392c38850ab01be9f16eb0d642cd032cf5e4df3",
                        "timestamp": "2021-06-24 03:00:23"
                    },
                    {
                        "value": "128e754f15fdb00d218fb23431bf0fbdc65d64eef294d72535b0c07eb5472136",
                        "timestamp": "2021-06-24 03:00:23"
                    },
                    {
                        "value": "133af1615fbbccaa23539b369ef23dfed375626746f212533ff975ec1165f2c5",
                        "timestamp": "2021-04-11 11:30:39"
                    },
                    {
                        "value": "9c711abf56181897762b131d27e7beae405cc199f69018eb5df4e343e74b78d9",
                        "timestamp": "2021-04-11 11:30:39"
                    },
                    {
                        "value": "d39c8e33fb70f415fa396022faa3fb5cea2a20d932546ea59f3b151ae6953c3e",
                        "timestamp": "2021-04-11 11:30:39"
                    },
                    {
                        "value": "1831806fc27d496f0f9dcfd8402724189deaeb5f8bcf0118f3d6484d0bdee9ed",
                        "timestamp": "2021-04-11 11:30:39"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-06-24 03:00:24",
    "mitre": [],
    "file_name": "flawedammyy",
    "analysis": null
};