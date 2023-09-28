var threatdata = {
    "name": "Qadars",
    "alias": "Qadars",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Credential stealer, Botnet",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Qadars",
        "names": [
            {
                "name": "Qadars"
            }
        ],
        "description": "(ESET) A new banking Trojan has been making its round in the past few months. First publicly discussed by LEXSI, this banking Trojan has been very active, infecting users throughout the world. Its modus operandi is banking fraud through web injection. While this approach has been present for a long time in various banking Trojan families, it is still effective. Win32/Qadars uses a wide variety of webinjects, some with Android mobile components, used to bypass online banking security and to gain access to user\u2019s bank account. Usually, banking Trojans either target a broad array of financial institutions or focus on a much smaller subset, usually institutions of which the user base is geographically close. Win32/Qadars fall in the second category: it pinpoints users in specific regions and uses webinject configuration files tailored to the banks most commonly used by the victims.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.welivesecurity.com/2013/12/18/qadars-a-banking-trojan-with-the-netherlands-in-its-sights/",
            "https://securityintelligence.com/meanwhile-britain-qadars-v3-hardens-evasion-targets-18-uk-banks/",
            "https://info.phishlabs.com/blog/dissecting-the-qadars-banking-trojan",
            "https://pages.phishlabs.com/rs/130-BFB-942/images/Qadars%20-%20Final.pdf",
            "https://securityintelligence.com/an-analysis-of-the-qadars-trojan/",
            "https://www.johannesbader.ch/2016/04/the-dga-of-qadars/",
            "https://www.countercept.com/our-thinking/decrypting-qadars-banking-trojan-c2-traffic/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.qadars"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Qadars"
        ],
        "uuid": "144de65c-7f10-4653-a970-eb3ea79e64e2",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Qadars",
            "malware_alias": null,
            "malware": "win.qadars",
            "last_update": "2021-04-30 12:55:36",
            "tags": [
                "qakbot",
                "qadars"
            ],
            "ioc": {
                "sha3_384_hash": [
                    {
                        "value": "de1e6a5b7ab1bb7fc9e0be59fb10da914c2b6343104cd422471cc9bc4064958f5012975939baaeae4f2bc4cdbc76b142",
                        "timestamp": "2021-04-30 12:55:36"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "3c4e06abf9b4cea93e79c05d3355780d96cfc009",
                        "timestamp": "2021-04-30 10:22:46"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "e9d6516853f869788a26b4ef80b0fbcc",
                        "timestamp": "2021-04-30 10:11:36"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "29516452f5a958474c9ed362a9e3f71909148d950945c27a3e83fdfcc8184728",
                        "timestamp": "2021-04-30 09:34:02"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-04-30 12:55:36",
    "mitre": [],
    "file_name": "qadars",
    "analysis": null
};