var threatdata = {
    "name": "Lucky Cat",
    "alias": "Lucky Cat",
    "category": "APT",
    "type": "-",
    "modified": "2021-02-25",
    "all_data": {
        "actor": "Lucky Cat",
        "names": [
            {
                "name": "Lucky Cat",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(Symantec) A series of attacks, targeting both Indian military research and south Asian shipping organizations, demonstrate the minimum level of effort required to successfully compromise a target and steal sensitive information. The attackers use very simple malware, which required little development time or skills, in conjunction with freely available Web hosting, to implement a highly effective attack. It is a case of the attackers obtaining a maximum return on their investment. The attack shows how an intelligent attacker does not need to be particularly technically skilled in order to steal the information they are after. The attack begins, as is often the case, with an email sent to the victim. A malicious document is attached to the email, which, when loaded, activates the malware.  The attackers use tailored emails to encourage the victim to open the email. For example, one email sent to an academic claimed to be a call for papers for a conference (CFP).\n\nThe vast majority of the victims were based in India, with some in Malaysia. The victim industry was mostly military research and also shipping based in the Arabian and South China seas. In some instances the attackers appeared to have a clear goal, whereby specific files were retrieved from certain compromised computers. In other cases, the attackers used more of a \u2018shotgun\u2019 like approach, copying every file from a computer. Military technologies were obviously the focus of one particular attack with what appeared to be source code stolen. 45 different attacker IP addresses were observed. Out of those, 43 were within the same IP address range based in Sichuan province, China. The remaining two were based in South Korea. The pattern of attacker connections implies that the IP addresses are being used as a VPN, probably in an attempt to render the attackers anonymous.\n\nThe attacks have been active from at least April 2011 up to February 2012. The attackers are intelligent and focused, employing the minimum amount of work necessary for the maximum gain. They do not use zero day exploits or complicated threats, instead they rely on effective social engineering and lax security measures on the part of the victims.",
        "observed-sectors": [
            "Aerospace",
            "Defense",
            "Engineering",
            "Shipping and Logistics",
            "Tibetan activists"
        ],
        "observed-countries": [
            "India",
            "Japan",
            "Malaysia",
            "Tibet"
        ],
        "tools": [
            "Comfoo",
            "Lucky Cat",
            "Sojax",
            "WMI Ghost"
        ],
        "information": [
            "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the_luckycat_hackers.pdf",
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp_luckycat_redux.pdf"
        ],
        "uuid": "5472bd65-7a33-4ae8-9918-79509d45f2df",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lucky_cat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/ta413-leverages-new-friarfox-browser-extension-target-gmail-accounts-global",
            "date": "2021-02-25",
            "organization": "Proofpoint",
            "author": "Michael Raggi",
            "title": "TA413 Leverages New FriarFox Browser Extension to Target the Gmail Accounts of Global Tibetan Organizations",
            "categories": [
                "scanbox",
                "Sepulcher",
                "Lucky Cat"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/chinese-apt-ta413-resumes-targeting-tibet-following-covid-19-themed-economic",
            "date": "2020-09-02",
            "organization": "Proofpoint",
            "author": "Proofpoint",
            "title": "Chinese APT TA413 Resumes Targeting of Tibet Following COVID-19 Themed Economic Espionage Campaign Delivering Sepulcher Malware Targeting Europe",
            "categories": [
                "Sepulcher",
                "Lucky Cat"
            ]
        },
        {
            "data_url": "https://vx-underground.org/papers/luckycat-hackers-12-en.pdf",
            "date": "2012-03",
            "organization": "Symantec",
            "author": "Symantec",
            "title": "The Luckycat Hackers",
            "categories": [
                "Lucky Cat"
            ]
        },
        {
            "data_url": "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp_luckycat_redux.pdf",
            "date": "2012",
            "organization": "Trend Micro",
            "author": "Forward-Looking Threat Research Team",
            "title": "Inside an APT Campaign with Multiple Targets in India and Japan",
            "categories": [
                "Lucky Cat"
            ]
        },
        {
            "data_url": "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the_luckycat_hackers.pdf",
            "date": "2012",
            "organization": "Symantec",
            "author": "Various",
            "title": "The Luckycat Hackers",
            "categories": [
                "Lucky Cat"
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