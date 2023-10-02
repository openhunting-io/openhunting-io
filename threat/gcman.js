var threatdata = {
    "name": "GCMAN",
    "alias": "GCMAN",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "actor": "GCMAN",
        "names": [
            {
                "name": "GCMAN",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2016",
        "description": "(Kaspersky) A second group, which we call GCMAN because the malware is based on code compiled on the GCC compiler, emerged recently using similar techniques to the {{Corkow, Metel}} Group to infect banking institutions and attempt to transfer money to e-currency services.\n\nThe initial infection mechanism is handled by spear-phishing financial institution targets with e-mails carrying a malicious RAR archive to. Upon opening the RAR archive, an executable is started instead of a Microsoft Word document, resulting in infection.\n\nOnce inside the network, the GCMAN group uses legitimate and penetration testing tools such as Putty, VNC, and Meterpreter for lateral movement. Our investigation revealed an attack where the group then planted a cron script into bank\u2019s server, sending financial transactions at the rate of $200 per minute. A time-based scheduler was invoking the script every minute to post new transactions directly to upstream payment processing system. This allowed the group to transfer money to multiple e-currency services without these transactions being reported to any system inside the bank.",
        "observed-sectors": [
            "Financial"
        ],
        "observed-countries": [
            "Russia"
        ],
        "tools": [
            "GCMAN",
            "Meterpreter",
            "PuTTY",
            "VNC",
            "malicious RAR archives"
        ],
        "information": [
            "https://securelist.com/apt-style-bank-robberies-increase-with-metel-gcman-and-carbanak-2-0-attacks/73638/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0036/"
        ],
        "uuid": "e6eeb30a-a941-46f9-8340-20958f1d6cb0",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
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
    ],
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
    ]
};