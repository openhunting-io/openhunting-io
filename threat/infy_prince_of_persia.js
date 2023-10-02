var threatdata = {
    "name": "Infy, Prince of Persia",
    "alias": "Infy, Prince of Persia, Operation Mermaid, APT-C-07",
    "category": "APT",
    "type": "-",
    "modified": "2021-04-19",
    "all_data": {
        "actor": "Infy, Prince of Persia",
        "names": [
            {
                "name": "Infy",
                "name-giver": "Palo Alto"
            },
            {
                "name": "Prince of Persia",
                "name-giver": "Palo Alto"
            },
            {
                "name": "Operation Mermaid",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "APT-C-07",
                "name-giver": "Qihoo 360"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2007",
        "description": "Since early 2013, we have observed activity from a unique threat actor group, which we began to investigate based on increased activities against human right activists in the beginning of 2015. In line5with other research on the campaign, released prior to publication of this document, we have adopted the name \u201cInfy\u201d, which is based on labels used in the infrastructure and its two families of malware agents.\n\nThanks to information we have been able to collect during the course of our research, such as characteristics of the group\u2019s malware and development cycle, our research strongly supports the claim that the Infy group is of Iranian origin and potentially connected to the Iranian state. Amongst a backdrop of other incidents, Infy became one of the most frequently observed agents for attempted malware attacks against Iranian civil society beginning in late 2014, growing in use up to the February 2016 parliamentary election in Iran. After the conclusion of the parliamentary election, the rate of attempted intrusions and new compromises through the Infy agent slowed, but did not end. The trends witnessed in reports from recipients are reinforced through telemetry provided by design failures in more recent versions of the Infy malware.",
        "observed-sectors": [
            "Government",
            "private sectors"
        ],
        "observed-countries": [
            "Azerbaijan",
            "Bahrain",
            "Canada",
            "China",
            "Denmark",
            "France",
            "Germany",
            "India",
            "Iran",
            "Iraq",
            "Israel",
            "Italy",
            "Romania",
            "Netherlands",
            "Russia",
            "Saudi Arabia",
            "Sweden",
            "Syria",
            "Turkey",
            "UK",
            "USA"
        ],
        "tools": [
            "Infy",
            "Tonnerre"
        ],
        "operations": [
            {
                "date": "2015-05",
                "activity": "In May 2015, Palo Alto Networks WildFire detected two e-mails carrying malicious documents from a genuine and compromised Israeli Gmail account, sent to an Israeli industrial organization. One e-mail carried a Microsoft PowerPoint file named \u201cthanks.pps\u201d, the other a Microsoft Word document named \u201crequest.docx\u201d.\nhttps://unit42.paloaltonetworks.com/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/"
            },
            {
                "date": "2017-02",
                "activity": "In February 2017, we observed an evolution of the \u201cInfy\u201d malware that we\u2019re calling \u201cFoudre\u201d (\u201clightning\u201d, in French). The actors appear to have learned from our previous takedown and sinkholing of their Command and Control (C2) infrastructure \u2013 Foudre incorporates new anti-takeover techniques in an attempt to avoid their C2 domains being sinkholed as we did in 2016.\nhttps://unit42.paloaltonetworks.com/unit42-prince-persia-ride-lightning-infy-returns-foudre/"
            }
        ],
        "counter-operations": [
            {
                "date": "2016-06",
                "activity": "Prince of Persia \u2013 Game Over\nhttps://unit42.paloaltonetworks.com/unit42-prince-of-persia-game-over/"
            }
        ],
        "information": [
            "https://www.blackhat.com/docs/us-16/materials/us-16-Guarnieri-Iran-And-The-Soft-War-For-Internet-Dominance-wp.pdf"
        ],
        "uuid": "bd37587a-e905-44dd-8844-0b2dcfb96c8e",
        "last-card-change": "2021-04-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Infy",
            "malware_alias": "Foudre",
            "malware": "win.infy",
            "last_update": "2021-08-12 10:27:25",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "7cfe6b3d43caf0e6d990caf7b778d9c68e8e95f9ea6a44f9fefb46be5476c083",
                        "timestamp": "2021-07-30 22:44:44"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "16adbfb16dd14a5aa74c1f56545643c3",
                        "timestamp": "2021-08-12 10:27:25"
                    },
                    {
                        "value": "85b1fd8784862fa44a5076debf0c44d5",
                        "timestamp": "2021-08-12 10:27:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-08-12 10:27:25",
    "file_name": "infy_prince_of_persia",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://download.bitdefender.com/resources/files/News/CaseStudies/study/393/Bitdefender-Whitepaper-Iranian-APT-Makes-a-Comeback-with-Thunder-and-Lightning-Backdoor-and-Espionage-Combo.pdf",
            "date": "2021-02-18",
            "organization": "Bitdefender",
            "author": "Gheorghe Adrian Schipor",
            "title": "Iranian APT Makes a Comeback with \u201cThunder and Lightning\u201d Backdoor and Espionage Combo",
            "categories": [
                "Infy",
                "Tonnerre"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2021/after-lightning-comes-thunder/",
            "date": "2021-02-08",
            "organization": "Checkpoint",
            "author": "Safebreach Labs",
            "title": "After Lightning Comes Thunder",
            "categories": [
                "Infy",
                "Tonnerre"
            ]
        },
        {
            "data_url": "https://cloud.tencent.com/developer/article/1738806",
            "date": "2020-11-03",
            "organization": "Gcow-Sec",
            "author": "Shadow Chaser Group",
            "title": "\u7f8e\u4eba\u9c7c(Infy)APT\u7ec4\u7ec7\u7684\u5f52\u6765\u2014\u2014\u4f7f\u7528\u6700\u65b0\u7684Foudre\u540e\u95e8\u8fdb\u884c\u653b\u51fb\u6d3b\u52a8\u7684\u5206\u6790",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/prince-persia",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Prince of Persia",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://www.intezer.com/prince-of-persia-the-sands-of-foudre/",
            "date": "2018-08-17",
            "organization": "Intezer",
            "author": "Jay Rosenberg",
            "title": "Prince of Persia: The Sands of Foudre",
            "categories": [
                "Infy",
                "Infy"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/08/unit42-prince-persia-ride-lightning-infy-returns-foudre/",
            "date": "2017-08-01",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia \u2013 Ride the Lightning: Infy returns as \u201cFoudre\u201d",
            "categories": [
                "Infy",
                "Infy"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-prince-persia-ride-lightning-infy-returns-foudre/",
            "date": "2017-08-01",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia \u2013 Ride the Lightning: Infy returns as \u201cFoudre\u201d",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://iranthreats.github.io/",
            "date": "2016-08-04",
            "organization": "Iran Threats",
            "author": "Iran Threats",
            "title": "Iran Threats Webpage",
            "categories": [
                "Infy",
                "Sima"
            ]
        },
        {
            "data_url": "https://www.blackhat.com/docs/us-16/materials/us-16-Guarnieri-Iran-And-The-Soft-War-For-Internet-Dominance-wp.pdf",
            "date": "2016-08",
            "organization": "Black Hat",
            "author": "Claudio Guarnieri",
            "title": "Iran and the Soft Warfor Internet Dominance",
            "categories": [
                "Infy",
                "Sima"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2016/06/unit42-prince-of-persia-game-over/",
            "date": "2016-06-28",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia \u2013 Game Over",
            "categories": [
                "Infy",
                "Infy"
            ]
        },
        {
            "data_url": "https://www.freebuf.com/articles/network/105726.html",
            "date": "2016-05-31",
            "organization": "Freebuf",
            "author": "360",
            "title": "Operation Mermaid: 6 years of overseas targeted attacks revealed",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://github.com/pan-unit42/iocs/blob/master/prince_of_persia/hashes.csv",
            "date": "2016-05-02",
            "organization": "Github (pan-unit42)",
            "author": "Josh Grunzweig",
            "title": "Prince of Persia Hashes",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2016/05/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
            "date": "2016-05-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia: Infy Malware Active In Decade of Targeted Attacks",
            "categories": [
                "Infy",
                "Infy"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/05/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
            "date": "2016-05-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia: Infy Malware Active In Decade of Targeted Attacks",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
            "date": "2016-05-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia: Infy Malware Active In Decade of Targeted Attacks",
            "categories": [
                "Infy"
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