var threatdata = {
    "name": "Cyber fighters of Izz Ad-Din Al Qassam, Fraternal Jackal",
    "alias": "Cyber fighters of Izz Ad-Din Al Qassam, Qassam Cyber Fighters, QCF, Fraternal Jackal",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-19",
    "all_data": {
        "actor": "Cyber fighters of Izz Ad-Din Al Qassam, Fraternal Jackal",
        "names": [
            {
                "name": "Cyber fighters of Izz Ad-Din Al Qassam",
                "name-giver": "self given"
            },
            {
                "name": "Qassam Cyber Fighters",
                "name-giver": "self given"
            },
            {
                "name": "QCF",
                "name-giver": "self given"
            },
            {
                "name": "Fraternal Jackal",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Sabotage and destruction"
        ],
        "first-seen": "2012",
        "description": "(MEMRI) On September 18, 2012, the Qassam Cyber Fighters (QCF) posted its first message, in both English and Arabic, on its Pastebin page; the message warned the world that it was now targeting U.S. banks for hacking attacks, and would do so in the future as well.\n\nSince its emergence, the group has vowed to continue to carry out cyber attacks against Western targets until YouTube removes the anti-Muslim video 'Innocence of Muslims,' stating in its first communiqu\u00e9: 'All the Muslim youths who are active in the Cyber world will attack to American and Zionist bases as much as needed such that they say that they are sorry about that insult.'\n\nSince the September 18, 2012 message, in which it announced that it was planning to attack the Bank of America and New York Stock Exchange on that date, it has been widely speculated that the group's origins are in fact Iranian. Western media sources, as well as analysts who have studied the QCF, have stated that it is actually an Iranian front. Cyber security analyst Dancho Danchev performed the most authoritative open-source intelligence (OSINT) analysis on the issue of the group's links to Iran, aimed at exposing one of the individuals in the group, while former Senator Joseph I. Lieberman told C-Span that he believed that Iran's government was sponsoring the group's attacks on U.S. banks in retaliation for Western economic sanctions. Additionally, The New York Times quoted unnamed U.S. intelligence officials stating that the 'group is a convenient cover for Iran.'\n\nThe QCF claims to have attacked Bank of America, the New York Stock Exchange, Capital One Financial Corp, SunTrust Banks Inc., BB&T, HSBC, JPMorgan Chase & CO, PNC Financial Services, U.S. Bancorp, Citigroup Citibank, Wells Fargo & Company, Ally Financial, Fifth Third Bancorp, Zions Bancorporation, Union Bank, Comerica, Citizens Bank, Umpqua Bank, People's United Bank, University Federal Credit Union, Patelco Credit Union, American Express, KeyCorp, Ameriprise Financial, Citizens Financial, BBVA Compass, UMB Financial Corporation, M&T Bank, Bank of the West, Regions Financial Corp, Euronext, and Synovus Financial Corporation.",
        "observed-sectors": [
            "Financial"
        ],
        "observed-countries": [
            "USA"
        ],
        "counter-operations": [
            {
                "date": "2016-05",
                "activity": "U.S. Accuses 7 Iranians Of Cyberattacks On Banks And Dam\nhttps://www.forbes.com/sites/thomasbrewster/2016/03/24/iran-hackers-charged-bank-ddos-attacks-banks/"
            }
        ],
        "information": [
            "https://www.memri.org/reports/rise-and-fall-qassam-cyber-fighters-arab-hacking-group-or-iranian-cyber-front-review-its",
            "http://ddanchev.blogspot.com.es/2012/09/dissecting-operation-ababil-osint.html",
            "https://krebsonsecurity.com/tag/izz-ad-din-al-qassam-cyber-fighters/",
            "https://en.wikipedia.org/wiki/Operation_Ababil"
        ],
        "uuid": "f64252d6-0e52-4fd9-8151-06bf35dcd905",
        "last-card-change": "2020-04-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cyber_fighters_of_izz_ad-din_al_qassam_fraternal_jackal",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://ddanchev.blogspot.com.es/2012/09/dissecting-operation-ababil-osint.html",
            "date": "2012-09-28",
            "organization": "Dancho Danchev's Blog",
            "author": "Dancho Danchev",
            "title": "Dissecting 'Operation Ababil' - an OSINT Analysis",
            "categories": [
                "Cyber fighters of Izz Ad-Din Al Qassam"
            ]
        },
        {
            "data_url": "http://pastebin.com/u/QassamCyberFighters",
            "date": "2012-09-18",
            "organization": "Pastebin",
            "author": "QassamCyberFighters",
            "title": "QassamCyberFighters's Pastebin",
            "categories": [
                "Cyber fighters of Izz Ad-Din Al Qassam"
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