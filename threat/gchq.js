var threatdata = {
    "name": "GCHQ",
    "alias": "GCHQ, Government Communications Headquarters",
    "category": "APT",
    "type": "-",
    "modified": "2020-07-17",
    "all_data": {
        "actor": "GCHQ",
        "names": [
            {
                "name": "GCHQ",
                "name-giver": "real name"
            },
            {
                "name": "Government Communications Headquarters",
                "name-giver": "real name"
            }
        ],
        "country": [
            "UK"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "1919",
        "description": "(Wikipedia) GCHQ gains its intelligence by monitoring a wide variety of communications and other electronic signals. For this, a number of stations have been established in the UK and overseas. The listening stations are at Cheltenham itself, Bude, Scarborough, Ascension Island, and with the United States at Menwith Hill. Ayios Nikolaos Station in Cyprus is run by the British Army for GCHQ.\n\nAs revealed by Edward Snowden in The Guardian, GCHQ spied on foreign politicians visiting the 2009 G-20 London Summit by eavesdropping phonecalls and emails and monitoring their computers, and in some cases even ongoing after the summit via keyloggers that had been installed during the summit.\n\nOther publicly exposed major APT activities from GCHQ involve the wholesale worldwide spying from programs such as, together with {{Equation Group}}, INCENSER, where various international Internet trunks were tapped.",
        "observed-sectors": [
            "Government",
            "Telecommunications"
        ],
        "observed-countries": [
            "Belgium",
            "UK"
        ],
        "tools": [
            "Regin"
        ],
        "operations": [
            {
                "date": "2009",
                "activity": "GCHQ intercepted foreign politicians' communications at G20 summits\nhttps://www.theguardian.com/uk/2013/jun/16/gchq-intercepted-communications-g20-summits"
            },
            {
                "date": "2010",
                "activity": "Operation Socialist\nBreach of the infrastructure of the Belgian telecommunications company Belgacom.\nhttps://theintercept.com/2014/12/13/belgacom-hack-gchq-inside-story/"
            }
        ],
        "information": [
            "https://en.wikipedia.org/wiki/GCHQ",
            "https://www.electrospaces.net/2014/11/incenser-or-how-nsa-and-gchq-are.html"
        ],
        "uuid": "9d92be76-3493-4c22-a22c-73e34bb2bb66",
        "last-card-change": "2020-07-17",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gchq",
    "analysis": null,
    "articles": [],
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