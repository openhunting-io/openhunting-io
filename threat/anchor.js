var threatdata = {
    "name": "Anchor",
    "alias": "Anchor, Anchor_DNS",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Anchor",
        "names": [
            {
                "name": "Anchor"
            },
            {
                "name": "Anchor_DNS"
            }
        ],
        "description": "(Cybereason) During our investigation, we found several unidentified malware samples related to {{TrickBot}} infections. The malware is dubbed Anchor by its authors and has been active since August 2018. Unlike Anchor_DNS, the Anchor malware does not implement communication over DNS. However, it does share many behavioral, code, and string similarities with Anchor_DNS and some similarities to TrickBot.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.cybereason.com/blog/dropping-anchor-from-a-trickbot-infection-to-the-discovery-of-the-anchor-malware",
            "https://www.bleepingcomputer.com/news/security/trickbots-new-linux-malware-covertly-infects-windows-devices/",
            "https://thedfirreport.com/2021/03/08/bazar-drops-the-anchor"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0504/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.anchor"
        ],
        "uuid": "6bbe4681-573c-417b-bb91-657aef026509",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Anchor",
            "malware_alias": null,
            "malware": "win.anchor",
            "last_update": "2021-07-27 20:01:12",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "a8a8c66b155fcf9bfdf34ba0aca98991440c3d34b8a597c3fdebc8da251c9634",
                        "timestamp": "2021-07-27 20:01:12"
                    },
                    {
                        "value": "ba801f1c2e2c5f5cd961e887cb0776f2d5cee8d17164f29b138a8952dd162165",
                        "timestamp": "2021-07-27 20:01:12"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-07-27 20:01:12",
    "mitre": [],
    "file_name": "anchor",
    "analysis": null
};