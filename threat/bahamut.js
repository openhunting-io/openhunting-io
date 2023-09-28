var threatdata = {
    "name": "Bahamut",
    "alias": "Bahamut",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Bahamut",
        "names": [
            {
                "name": "Bahamut"
            }
        ],
        "description": "(Bellingcat) The malware is also of low quality \u2013 in version 1.1 of Khuai Translator, the URLs to report back to the attacker contain typos (e.g. \u201chtpp://\u201d) that would lead to them being non-functional. This was resolved in a subsequent update, but other typos are present in both applications across web properties, internal functions, and application dialogues, suggesting that quality was not a priority for the attackers.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.bellingcat.com/news/mena/2017/06/12/bahamut-pursuing-cyber-espionage-actor-middle-east/",
            "https://www.bellingcat.com/resources/case-studies/2017/10/27/bahamut-revisited-cyber-espionage-middle-east-south-asia/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.bahamut",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bahamut"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Bahamut"
        ],
        "uuid": "f70c41f5-703e-4dcd-9594-6646e837a195",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Bahamut",
            "malware_alias": null,
            "malware": "win.bahamut",
            "last_update": "2023-06-09 23:48:11",
            "tags": [
                "ViriBack",
                "Bahamut"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "hbx5adg6vk.de",
                        "timestamp": "2023-06-09 23:48:11"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-06-09 23:48:11",
    "mitre": [],
    "file_name": "bahamut",
    "analysis": null
};