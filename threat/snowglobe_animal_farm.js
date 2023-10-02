var threatdata = {
    "name": "Snowglobe, Animal Farm",
    "alias": "Snowglobe, Animal Farm, SIG20, ATK 8",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-24",
    "all_data": {
        "actor": "Snowglobe, Animal Farm",
        "names": [
            {
                "name": "Snowglobe",
                "name-giver": "CSEC"
            },
            {
                "name": "Animal Farm",
                "name-giver": "Kaspersky"
            },
            {
                "name": "SIG20",
                "name-giver": "NSA"
            },
            {
                "name": "ATK 8",
                "name-giver": "Thales"
            }
        ],
        "country": [
            "France"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(GData) The revelation about the existence of yet another potentially nation-state driven spyware occurred in March 2014 when Le Monde first published information about top secret slides originating from 2011 and part of their content. But the slides Le Monde published revealed only a small part of the picture \u2013 several slides were cut out, some information was redacted. Germany\u2019s Der Spiegel re-published the slide set with far less deletions recently, in January 2015, and therefore gave a deeper insight about what CSEC actually says they have tracked down.\n\nThe newly published documents reveal: the so called operation SNOWGLOBE, was discovered in 2009 (slide 9) and consists of three different \u201cimplants\u201d, two were dubbed snowballs and one \u201cmore sophisticated implant, discovered in mid-2010\u201d is tagged as snowman (slide 7). According to slide 22, \u201cCSEC assesses, with moderate certainty, SNOWGLOBE to be a state-sponsored CNO [Cyber Network Operation] effort, put forth by a French intelligence agency.\u201d The information given dates back to 2011 and nothing else has been published since. Now that specific Babar samples have been identified and analyzed, there might be new information, also with regards to similarities or differences between the two Remote Administration Tools (RATs) EvilBunny and Babar.",
        "observed-sectors": [
            "Defense",
            "Government",
            "Media",
            "private sectors"
        ],
        "observed-countries": [
            "Algeria",
            "Austria",
            "China",
            "Congo",
            "Cote d'Ivoire",
            "Germany",
            "Greece",
            "Iran",
            "Iraq",
            "Israel",
            "Malaysia",
            "Morocco",
            "Netherlands",
            "New Zealand",
            "Norway",
            "Russia",
            "Spain",
            "Syria",
            "Turkey",
            "UK",
            "Ukraine",
            "USA"
        ],
        "tools": [
            "Babar",
            "Casper",
            "Dino",
            "EvilBunny",
            "Tafacalou",
            "Nbot",
            "Chocopop"
        ],
        "information": [
            "https://www.gdatasoftware.com/blog/2015/02/24270-babar-espionage-software-finally-found-and-put-under-the-microscope",
            "https://resources.infosecinstitute.com/animal-farm-apt-and-the-shadow-of-france-intelligence/",
            "https://www.welivesecurity.com/2015/06/30/dino-spying-malware-analyzed/"
        ],
        "uuid": "1321cfb0-511e-41a0-86a5-e7f1582911af",
        "last-card-change": "2020-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "snowglobe_animal_farm",
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