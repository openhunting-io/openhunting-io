var threatdata = {
    "name": "Operation Shady RAT",
    "alias": "Operation Shady RAT",
    "category": "APT",
    "type": "-",
    "modified": "2021-05-21",
    "all_data": {
        "actor": "Operation Shady RAT",
        "names": [
            {
                "name": "Operation Shady RAT",
                "name-giver": "McAfee"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, PLA Unit 61398",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2006",
        "description": "(McAfee) With the goal of raising the level of public awareness today we are publishing the most comprehensive analysis ever revealed of victim profiles from a five year targeted operation by one specific actor\u2014Operation Shady RAT, as I have named it at McAfee (RAT is a common acronym in the industry which stands for Remote Access Tool).\n\nThis is not a new attack, and the vast majority of the victims have long since remediated these specific infections (although whether most realized the seriousness of the intrusion or simply cleaned up the infected machine without further analysis into the data loss is an open question). McAfee has detected the malware variants and other relevant indicators for years with Generic Downloader.x and Generic BackDoor.t heuristic signatures (those who have had prior experience with this specific adversary may recognize it by the use of encrypted HTML comments in web pages that serve as a command channel to the infected machine).\n\nMcAfee has gained access to one specific Command & Control server used by the intruders. We have collected logs that reveal the full extent of the victim population since mid-2006 when the log collection began. Note that the actual intrusion activity may have begun well before that time but that is the earliest evidence we have for the start of the compromises. The compromises themselves were standard procedure for these types of targeted intrusions: a spear-phishing email containing an exploit is sent to an individual with the right level of access at the company, and the exploit when opened on an unpatched system will trigger a download of the implant malware. That malware will execute and initiate a backdoor communication channel to the Command & Control web server and interpret the instructions encoded in the hidden comments embedded in the webpage code. This will be quickly followed by live intruders jumping on to the infected machine and proceeding to quickly escalate privileges and move laterally within the organization to establish new persistent footholds via additional compromised machines running implant malware, as well as targeting for quick exfiltration the key data they came for.",
        "observed-sectors": [
            "Energy",
            "Government",
            "Industrial",
            "IT",
            "Media",
            "Telecommunications",
            "Think Tanks",
            "Non-profit organizations"
        ],
        "observed-countries": [
            "Canada",
            "Denmark",
            "Germany",
            "Hong Kong",
            "India",
            "Indonesia",
            "Japan",
            "Singapore",
            "South Korea",
            "Switzerland",
            "Taiwan",
            "UK",
            "USA",
            "Vietnam"
        ],
        "information": [
            "https://web.archive.org/web/20110804083836/http:/www.mcafee.com/us/resources/white-papers/wp-operation-shady-rat.pdf",
            "https://www.vanityfair.com/news/2011/09/chinese-hacking-201109",
            "https://en.wikipedia.org/wiki/Operation_Shady_RAT"
        ],
        "uuid": "3227cd76-90c0-4139-83c0-afbdb298d1f2",
        "last-card-change": "2021-05-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_shady_rat",
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