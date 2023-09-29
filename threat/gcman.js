var threatdata = {
    "name": "GCMAN",
    "alias": "GCMAN",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "GCMAN",
        "names": [
            {
                "name": "GCMAN"
            }
        ],
        "description": "(Kaspersky) The initial infection mechanism is handled by spear-phishing. A financial institution is targeted with e-mails carrying a malicious RAR archive. When the RAR archive is opened an executable is started instead of a Microsoft Word document, resulting in infection. The group also plants a cron script into the bank's server to generate financial transactions at the rate of $200 per minute.",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://www.kaspersky.com/resource-center/threats/gcman",
            "https://securelist.com/apt-style-bank-robberies-increase-with-metel-gcman-and-carbanak-2-0-attacks/73638/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gcman"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:gcman"
        ],
        "uuid": "e825b6cc-cf52-4c62-936c-8ca786176b8d",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [
        {
            "procedure_name": "gcman",
            "procedure_code": "g0036",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0036",
            "techniques": [
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/004",
                    "technique_name": "remote services : ssh",
                    "technique_description": "adversaries may use valid accounts to log into remote machines using secure shell (ssh). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "gcman uses putty for lateral movement.[8]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/005",
                    "technique_name": "remote services : vnc",
                    "technique_description": "adversaries may use valid accounts to remotely control machines using virtual network computing (vnc).  vnc is a platform-independent desktop sharing system that uses the rfb (\"remote framebuffer\") protocol to enable users to remotely control another computer\u2019s display by relaying the screen, mouse, and keyboard inputs over the network.",
                    "procedure_description": "gcman uses vnc for lateral movement.[17]"
                }
            ]
        }
    ],
    "file_name": "gcman",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/groups/G0036/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: GCMAN",
            "categories": [
                "GCMAN"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-style-bank-robberies-increase-with-metel-gcman-and-carbanak-2-0-attacks/73638/",
            "date": "2016-02-08",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT-style bank robberies increase with Metel, GCMAN and Carbanak 2.0 attacks",
            "categories": [
                "gcman",
                "GCMAN"
            ]
        }
    ]
};