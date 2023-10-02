var threatdata = {
    "name": "Cyber Caliphate Army (CCA), United Cyber Caliphate (UCC)",
    "alias": "Cyber Caliphate Army (CCA), United Cyber Caliphate (UCC), Islamic State Hacking Division, ATK 133, TAG-CT6",
    "category": "APT",
    "type": "-",
    "modified": "2021-12-09",
    "all_data": {
        "actor": "Cyber Caliphate Army (CCA), United Cyber Caliphate (UCC)",
        "names": [
            {
                "name": "Cyber Caliphate Army (CCA)",
                "name-giver": "self given"
            },
            {
                "name": "United Cyber Caliphate (UCC)",
                "name-giver": "self given"
            },
            {
                "name": "Islamic State Hacking Division",
                "name-giver": "self given"
            },
            {
                "name": "ATK 133",
                "name-giver": "Thales"
            },
            {
                "name": "TAG-CT6",
                "name-giver": "Recorded Future"
            }
        ],
        "country": [
            "[ISIS]"
        ],
        "motivation": [
            "Sabotage and destruction"
        ],
        "first-seen": "2014",
        "description": "(Wikipedia) Islamic State Hacking Division or United Cyber Caliphate refers to any number of group self-identifying as the digital army for Islamic State of Iraq and Levant. The cyber security group had pledged allegiance to Jeremy An and his objectives in late 2014. Their recent claims and hacks have led FBI director James Comey to state that his agency does not yet have the capabilities to limit ISIL attempts to recruit Americans through social media. Russian military hackers have been identified as using the CyberCaliphate nomer to cover several hacking attacks, notably on TV5Monde and the Twitter of US CENTCOM.\n\nA list of names and details said to be of American military personnel was released by unknown parties who said they were part of the ISHD, but doubts were raised on the source and nature of the data.",
        "observed-sectors": [
            "Defense",
            "Government"
        ],
        "observed-countries": [
            "Australia",
            "Canada",
            "UK",
            "USA"
        ],
        "operations": [
            {
                "date": "2015-02",
                "activity": "U.S. military wives\u2019 death threats\nFive military wives received death threats from a hacker group calling itself \u201cCyberCaliphate\u201d, claiming to be an Islamic State affiliate, on February 10, 2015. This was later discovered to have been a false flag attack by {{Sofacy, APT 28, Fancy Bear, Sednit}}, when the victims\u2019 email addresses were found to have been in the Fancy Bear phishing target list.\nhttps://www.apnews.com/4d174e45ef5843a0ba82e804f080988f"
            },
            {
                "date": "2015-04",
                "activity": "Tasmania's Hobart International Airport website has been shut down after it was hacked and defaced with a statement supporting the radical Islamist group\nhttps://www.telegraph.co.uk/news/worldnews/islamic-state/11531794/Australian-airport-website-hacked-by-Islamic-State.html"
            },
            {
                "date": "2015-04",
                "activity": "Compromise of TV5Monde in France\n\u201cA group calling itself the Cyber Caliphate, linked to so-called Islamic State, first claimed responsibility. But an investigation now suggests the attack was in fact carried out by a group of Russian hackers. ({{Sofacy, APT 28, Fancy Bear, Sednit}}, ed.)\u201d\nhttps://www.bbc.com/news/technology-37590375"
            },
            {
                "date": "2015-06",
                "activity": "ISIS 'kill list' includes names of 151 Canadians\nhttps://www.cbc.ca/news/canada/isis-kill-list-canadians-1.3637214"
            },
            {
                "date": "2015-08",
                "activity": "Isis 'hacking division' releases details of 1,400 Americans and urges attacks\nhttps://www.theguardian.com/world/2015/aug/13/isis-hacking-division-releases-details-of-1400-americans-and-urges-attacks"
            },
            {
                "date": "2015-09",
                "activity": "ISIS hackers intercept top secret British Government emails in major security breach uncovered by {{GCHQ}}\nhttps://www.mirror.co.uk/news/uk-news/isis-hackers-intercept-top-secret-6428423"
            },
            {
                "date": "2017-04",
                "activity": "ISIS-linked Cyber Group Releases 'Kill List' of 8,786 US Targets For Lone Wolf Attacks\nhttps://www.newsweek.com/isis-linked-cyber-group-releases-kill-list-8786-us-targets-lone-wolf-attacks-578765"
            }
        ],
        "information": [
            "https://en.wikipedia.org/wiki/Islamic_State_Hacking_Division"
        ],
        "uuid": "82cebb46-cbb7-49b5-8405-1f04b46f1b5c",
        "last-card-change": "2021-12-09",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cyber_caliphate_army_(cca)_united_cyber_caliphate_(ucc)",
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