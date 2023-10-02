var threatdata = {
    "name": "Buhtrap, Ratopak Spider",
    "alias": "Buhtrap, Ratopak Spider, UAC-0008",
    "category": "APT",
    "type": "-",
    "modified": "2022-04-08",
    "all_data": {
        "actor": "Buhtrap, Ratopak Spider",
        "names": [
            {
                "name": "Buhtrap",
                "name-giver": "Group-IB"
            },
            {
                "name": "Ratopak Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "UAC-0008",
                "name-giver": "CERT-UA"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2015",
        "description": "(Group-IB) Buhtrap has been active since 2014, however their first attacks against financial institutions were only detected in August 2015. Earlier, the group had only focused on targeting banking clients. At the moment, the group is known to target Russian and Ukrainian banks.\n\nFrom August 2015 to February 2016 Buhtrap managed to conduct 13 successful attacks against Russian banks for a total amount of 1.8 billion rubles ($25.7 mln). The number of successful attacks against Ukrainian banks has not been identified.\n\nBuhtrap is the first hacker group using a network worm to infect the overall bank infrastructure that significantly increases the difficulty of removing all malicious functions from the network. As a result, banks have to shut down the whole infrastructure which provokes delay in servicing customers and additional losses.\n\nMalicious programs intentionally scan for machines with an automated Bank-Customer system of the Central Bank of Russia (further referred to as BCS CBR). We have not identified incidents of attacks involving online money transfer systems, ATM machines or payment gates which are known to be of interest for other criminal groups.\n\nBuhtrap has some infrastructure overlap with {{TA505, Graceful Spider, Gold Evergreen}}.",
        "observed-sectors": [
            "Financial",
            "Government"
        ],
        "observed-countries": [
            "Russia",
            "Ukraine"
        ],
        "tools": [
            "Buhtrap",
            "FlawedAmmyy",
            "Niteris EK",
            "NSIS"
        ],
        "operations": [
            {
                "date": "2014",
                "activity": "On October 20, 2014 we notified Group-IB Bot-Trek Intelligence subscribers about phishing emails which were sent from the info@beeline-mail.ru address with the subject \u201cInvoice No 522375-\u0424\u041b\u041e\u0420\u041b-14-115\u201d (pic. 1). The beeline-mail.ru domain name was also registered on October 20, 2014.\nhttps://www.group-ib.com/brochures/gib-buhtrap-report.pdf"
            },
            {
                "date": "2015-10",
                "activity": "We noticed in late October that users visiting the Ammyy website to download the free version of its remote administrator software were being served a bundle containing not only the legitimate Remote Desktop Software Ammyy Admin, but also an NSIS (Nullsoft Scriptable Installation Software) installer ultimately intended to install the tools used by the Buhtrap gang to spy on and control their victims\u2019 computers.\nhttps://www.welivesecurity.com/2015/11/11/operation-buhtrap-malware-distributed-via-ammyy-com/"
            },
            {
                "date": "2015-12",
                "activity": "In December 2015, employees from several Russian banks were targeted with spoofed emails, a common technique in attack campaigns. The emails were made to look like they were from the Central Bank of Russia and offered employment to their recipients. Instead of being an actual employment offer, the emails were an attempt to deliver Trojan.Ratopak onto the target\u2019s computer.\nhttps://www.symantec.com/connect/blogs/russian-bank-employees-received-fake-job-offers-targeted-email-attack"
            },
            {
                "date": "2016-09",
                "activity": "Breach of the Russian boxing site allboxing[.].ru\nhttps://www.forcepoint.com/blog/security-labs/highly-evasive-code-injection-awaits-user-interaction-delivering-malware"
            },
            {
                "date": "2017",
                "activity": "Operation \u201cTwoBee\u201d\nBuhtrap resurfaced in the beginning of 2017 in the TwoBee campaign, where it served primarily as means of malware delivery. In March of last year, it hit the news (literally), spreading through several compromised major news outlets in whose main pages malicious actors implanted scripts. This scripts executed an exploit for Internet Explorer in visitor\u2019s browsers.\nhttps://www.kaspersky.com/blog/financial-trojans-2019/25690/"
            },
            {
                "date": "2019-06",
                "activity": "Throughout our tracking, we\u2019ve seen this group deploy its main backdoor as well as other tools against various victims, but June 2019 was the first time we saw the Buhtrap group use a zero-day exploit as part of a campaign. In that case, we observed Buhtrap using a local privilege escalation exploit, CVE-2019-1132, against one of its victims.\nhttps://www.welivesecurity.com/2019/07/11/buhtrap-zero-day-espionage-campaigns/"
            }
        ],
        "information": [
            "https://www.group-ib.com/brochures/gib-buhtrap-report.pdf",
            "https://www.welivesecurity.com/2015/04/09/operation-buhtrap/"
        ],
        "uuid": "30df5485-c9bd-4d36-a685-4f202162e323",
        "last-card-change": "2022-04-08",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "buhtrap_ratopak_spider",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.scythe.io/library/threatthursday-buhtrap",
            "date": "2020-06-11",
            "organization": "SCYTHE",
            "author": "Jorge Orchilles",
            "title": "#ThreatThursday - Buhtrap",
            "categories": [
                "Buhtrap"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/operation-ta505-part3/",
            "date": "2020-05-24",
            "organization": "Positive Technologies",
            "author": "PT ESC Threat Intelligence",
            "title": "Operation TA505: network infrastructure. Part 3.",
            "categories": [
                "AndroMut",
                "Buhtrap",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2019/07/11/buhtrap-zero-day-espionage-campaigns/",
            "date": "2019-07-11",
            "organization": "ESET Research",
            "author": "Jean-Ian Boutin",
            "title": "Buhtrap group uses zero\u2011day in latest espionage campaigns",
            "categories": [
                "Buhtrap"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2019/04/30/buhtrap-backdoor-ransomware-advertising-platform/",
            "date": "2019-04-30",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Buhtrap backdoor and Buran ransomware distributed via major advertising platform",
            "categories": [
                "Buhtrap",
                "ClipBanker",
                "RTM"
            ]
        },
        {
            "data_url": "https://dcso.de/2019/03/14/pegasus-buhtrap-analysis-of-the-malware-stage-based-on-the-leaked-source-code",
            "date": "2019-03-14",
            "organization": "DCSO",
            "author": "DCSO",
            "title": "Pegasus/Buhtrap analysis of the malware stage based on the leaked source code",
            "categories": [
                "Buhtrap"
            ]
        },
        {
            "data_url": "https://malware-research.org/carbanak-source-code-leaked/",
            "date": "2018-07-11",
            "organization": "GelosSnake Blog",
            "author": "Omri Segev Moyal",
            "title": "NotCarbanak Mystery - Source Code Leak",
            "categories": [
                "Buhtrap"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=8e498912-44f8-4ea0-ac50-4544f0fedd6c&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2016-02-22",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Russian bank employees received fake job offers in targeted email attack",
            "categories": [
                "Buhtrap",
                "BuhTrap"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/russian-bank-employees-received-fake-job-offers-targeted-email-attack",
            "date": "2016-02-22",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Russian bank employees received fake job offers in targeted email attack",
            "categories": [
                "Buhtrap",
                "BuhTrap"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2015/04/09/operation-buhtrap/",
            "date": "2015-04-09",
            "organization": "ESET Research",
            "author": "Jean-Ian Boutin",
            "title": "Operation Buhtrap, the trap for Russian accountants",
            "categories": [
                "Buhtrap",
                "BuhTrap"
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