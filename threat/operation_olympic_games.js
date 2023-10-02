var threatdata = {
    "name": "Operation Olympic Games",
    "alias": "Operation Olympic Games, GOSSIPGIRL",
    "category": "APT",
    "type": "-",
    "modified": "2021-11-06",
    "all_data": {
        "actor": "Operation Olympic Games",
        "names": [
            {
                "name": "Operation Olympic Games",
                "name-giver": "self given"
            },
            {
                "name": "GOSSIPGIRL",
                "name-giver": "?"
            }
        ],
        "country": [
            "USA",
            "Israel"
        ],
        "sponsor": "State-sponsored, Equation Group (NSA), CIA and Unit 8200",
        "motivation": [
            "Information theft and espionage",
            "Sabotage and destruction"
        ],
        "first-seen": "2007",
        "description": "The events have been described in detail in the 2015 book Countdown to Zero Day and the 2016 documentary Zero Days. The piece of crucial information that was missing from both sources, how the malware was actually brought inside the facility, was documented in an investigative report in 2019.\n\n(The New York Times) From his first months in office, President Obama secretly ordered increasingly sophisticated attacks on the computer systems that run Iran\u2019s main nuclear enrichment facilities, significantly expanding America\u2019s first sustained use of cyberweapons, according to participants in the program.\n\nMr. Obama decided to accelerate the attacks \u2014 begun in the Bush administration and code-named Olympic Games \u2014 even after an element of the program accidentally became public in the summer of 2010 because of a programming error that allowed it to escape Iran\u2019s Natanz plant and sent it around the world on the Internet. Computer security experts who began studying the worm, which had been developed by the United States and Israel, gave it a name: Stuxnet.",
        "observed-sectors": [
            "Energy"
        ],
        "observed-countries": [
            "Iran"
        ],
        "tools": [
            "Stuxnet"
        ],
        "information": [
            "https://www.nytimes.com/2012/06/01/world/middleeast/obama-ordered-wave-of-cyberattacks-against-iran.html",
            "https://news.yahoo.com/revealed-how-a-secret-dutch-mole-aided-the-us-israeli-stuxnet-cyber-attack-on-iran-160026018.html"
        ],
        "uuid": "40c47a97-22a5-46d3-978e-f89c802dad93",
        "last-card-change": "2021-11-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_olympic_games",
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