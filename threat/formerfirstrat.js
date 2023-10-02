var threatdata = {
    "name": "FormerFirstRAT",
    "alias": "FormerFirstRAT, FF-RAT, ffrat",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "FormerFirstRAT",
        "names": [
            {
                "name": "FormerFirstRAT"
            },
            {
                "name": "FF-RAT"
            },
            {
                "name": "ffrat"
            }
        ],
        "description": "(Palo Alto) This remote administration tool (RAT) is referred to as \u201cFormerFirstRAT\u201d by its authors. FormerFirstRAT communicates using unencrypted HTTP over port 443; the use of mismatching ports and communication protocols is not uncommon in targeted attack campaigns. In addition, port / protocol mis-match traffic can be an indicator of bad activity.\n\nThe remote server has the ability to respond and provide instructions to the RAT. We have identified the following functionalities:\n\u2022 Modify sleep timer between requests\n\u2022 Execute a command and return the command output\n\u2022 Browse the file system\n\u2022 Download files\n\u2022 Delete files\n\u2022 Exfiltrate victim information",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit-42-identifies-new-dragonok-backdoor-malware-deployed-against-japanese-targets/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.former_first_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:formerfirstrat"
        ],
        "uuid": "d04ba5af-cabc-4710-bf6e-84688a211480",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "formerfirstrat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/shallowtaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Shallow Taurus",
            "categories": [
                "FormerFirstRAT",
                "IsSpace",
                "NewCT",
                "PlugX",
                "Poison Ivy",
                "Tidepool",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/space-pirates-tools-and-connections/",
            "date": "2022-05-17",
            "organization": "Positive Technologies",
            "author": "Positive Technologies",
            "title": "Space Pirates: analyzing the tools and connections of a new hacker group",
            "categories": [
                "FormerFirstRAT",
                "PlugX",
                "Poison Ivy",
                "Rovnix",
                "ShadowPad",
                "Zupdax"
            ]
        },
        {
            "data_url": "https://decoded.avast.io/luigicamastra/operation-dragon-castling-apt-group-targeting-betting-companies",
            "date": "2022-03-22",
            "organization": "Avast Decoded",
            "author": "Luigino Camastra",
            "title": "Operation Dragon Castling: APT group targeting betting companies",
            "categories": [
                "FormerFirstRAT",
                "MulCom",
                "TianWu"
            ]
        },
        {
            "data_url": "https://threatvector.cylance.com/en_us/home/breaking-down-ff-rat-malware.html",
            "date": "2017-06-13",
            "organization": "Cylance",
            "author": "Cylance Threat Research Team",
            "title": "Threat Spotlight: Breaking Down FF-Rat Malware",
            "categories": [
                "FormerFirstRAT"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2015/04/unit-42-identifies-new-dragonok-backdoor-malware-deployed-against-japanese-targets/",
            "date": "2015-04-14",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jen Miller-Osborn",
            "title": "Unit 42 Identifies New DragonOK Backdoor Malware Deployed Against Japanese Targets",
            "categories": [
                "FormerFirstRAT"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        }
    ]
};