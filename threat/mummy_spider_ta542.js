var threatdata = {
    "name": "Mummy Spider, TA542",
    "alias": "Mummy Spider, TA542, ATK 104, Mealybug, Gold Crestwood",
    "category": "APT",
    "type": "-",
    "modified": "2022-11-18",
    "all_data": {
        "actor": "Mummy Spider, TA542",
        "names": [
            {
                "name": "Mummy Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TA542",
                "name-giver": "Proofpoint"
            },
            {
                "name": "ATK 104",
                "name-giver": "Thales"
            },
            {
                "name": "Mealybug",
                "name-giver": "Symantec"
            },
            {
                "name": "Gold Crestwood",
                "name-giver": "SecureWorks"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2014",
        "description": "(Crowdstrike) Mummy Spider is a criminal entity linked to the core development of the malware most commonly known as Emotet or Geodo. First observed in mid-2014, this malware shared code with the Bugat (aka Feodo) banking Trojan. However, Mummy Spider swiftly developed the malware\u2019s capabilities to include an RSA key exchange for command and control (C2) communication and a modular architecture.\n\nMummy Spider does not follow typical criminal behavioral patterns. In particular, Mummy Spider usually conducts attacks for a few months before ceasing operations for a period of between three and 12 months, before returning with a new variant or version.\n\nAfter a 10 month hiatus, Mummy Spider returned Emotet to operation in December 2016 but the latest variant is not deploying a banking Trojan module with web injects, it is currently acting as a \u2018loader\u2019 delivering other malware packages. The primary modules perform reconnaissance on victim machines, drop freeware tools for credential collection from web browsers and mail clients and a spam plugin for self-propagation. The malware is also issuing commands to download and execute other malware families such as the banking Trojans Dridex and Qakbot.\n\nMummy Spider advertised Emotet on underground forums until 2015, at which time it became private. Therefore, it is highly likely that Emotet is operated solely for use by Mummy Spider or with a small trusted group of customers.\n\nEmotet has been observed to distribute BokBot ({{Lunar Spider}}), Dridex ({{Indrik Spider}}), DoppelPaymer ({{Doppel Spider}}), Zeus Panda ({{Bamboo Spider, TA544}}) and Trickbot ({{Wizard Spider, Gold Blackburn}}), as well as QakBot ({{Mallard Spider}}).",
        "observed-sectors": [
            "Defense",
            "Energy",
            "Financial",
            "Government",
            "Healthcare",
            "Manufacturing",
            "Retail",
            "Shipping and Logistics",
            "Utilities",
            "Technology"
        ],
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "Emotet"
        ],
        "operations": [
            {
                "date": "2017-08",
                "activity": "While the earlier variants of EMOTET primarily targeted the banking sector, our Smart Protection Network (SPN) data reveals that this time, the malware isn\u2019t being picky about the industries it chooses to attack. The affected companies come from different industries, including manufacturing, food and beverage, and healthcare. Again, it is possible that due to the nature of its distribution, EMOTET now has a wider scope.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/emotet-returns-starts-spreading-via-spam-botnet/"
            },
            {
                "date": "2018-10",
                "activity": "Emotet Awakens With New Campaign of Mass Email Exfiltration\nhttps://www.kryptoslogic.com/blog/2018/10/emotet-awakens-with-new-campaign-of-mass-email-exfiltration/"
            },
            {
                "date": "2018-11",
                "activity": "According to our telemetry, the latest Emotet activity was launched on November 5, 2018, following a period of low activity. Figure 1 shows a spike in the Emotet detection rate in the beginning of November 2018, as seen in our telemetry data.\nhttps://www.welivesecurity.com/2018/11/09/emotet-launches-major-new-spam-campaign/\nhttps://www.welivesecurity.com/2018/12/28/analysis-latest-emotet-propagation-campaign/"
            },
            {
                "date": "2018-11",
                "activity": "Secret Service Investigates Breach at U.S. Govt IT Contractor\nhttps://krebsonsecurity.com/2019/09/secret-service-investigates-breach-at-u-s-govt-it-contractor/"
            },
            {
                "date": "2019-01",
                "activity": "Between January 1, 2019, to May 1, 2019, threat actors conducted thousands of malicious email campaigns, hundreds of which were sent to Canadian organizations. While discussions of threats in this region often focus on \u201cNorth America\u201d generally or just the United States, nearly 100 campaigns during this period were either specifically targeted at Canadian organizations or were customized for Canadian audiences.\nhttps://www.proofpoint.com/us/threat-insight/post/beyond-north-america-threat-actors-target-canada-specifically"
            },
            {
                "date": "2019-04",
                "activity": "Beginning the morning of April 9th, the Emotet gang began utilizing what appears to be the stolen emails of their victims. It was noted back in October of 2018 that a new module was added that could steal the email content on a victim\u2019s machine.\nhttps://cofense.com/emotet-gang-switches-highly-customized-templates-utilizing-stolen-email-content-victims/"
            },
            {
                "date": "2019-09",
                "activity": "Emotet is back after a summer break\nhttps://blog.talosintelligence.com/2019/09/emotet-is-back-after-summer-break.html\nhttps://threatpost.com/emotet-resurgence-continues-with-new-tactics-techniques-and-procedures/149914/"
            },
            {
                "date": "2019-12",
                "activity": "The city of Frankfurt, Germany, became the latest victim of Emotet after an infection forced it to close its IT network. But the financial center wasn\u2019t the only area that was targeted by Emotet, as there were also incidents that occurred in Gie\u00dfen and Bad Homburg, a town and a city north of Frankfurt, respectively, as well as in Freiburg, a city in southwest Germany.\nhttps://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/emotet-attack-causes-shutdown-of-frankfurt-s-it-network"
            },
            {
                "date": "2020-01",
                "activity": "Threat actor group TA542, the group that\u2019s behind Emotet, is back from their Christmas holiday. Based on past activity and what we\u2019re seeing in just three days, one of the world\u2019s most disruptive threats is back to work and everyone around the world should take note and implement steps to protect themselves.\nhttps://www.proofpoint.com/us/corporate-blog/post/emotet-returns-after-holiday-break-major-campaigns\nhttps://blog.talosintelligence.com/2020/01/stolen-emails-reflect-emotets-organic.html"
            },
            {
                "date": "2020-01",
                "activity": "Pretending to be the Permanent Mission of Norway, the Emotet operators performed a targeted phishing attack against email addresses associated with users at the United Nations.\nhttps://www.bleepingcomputer.com/news/security/united-nations-targeted-with-emotet-malware-phishing-attack/"
            },
            {
                "date": "2020-01",
                "activity": "EMOTET Uses Corona Virus Outbreak in New Spam Campaign\nhttps://www.trendmicro.com/vinfo/th/threat-encyclopedia/spam/3682/emotet-uses-corona-virus-outbreak-in-new-spam-campaign"
            },
            {
                "date": "2020-02",
                "activity": "Emotet Evolves With new Wi-Fi Spreader\nhttps://www.binarydefense.com/emotet-evolves-with-new-wi-fi-spreader/"
            },
            {
                "date": "2020-02",
                "activity": "Emotet SMiShing Uses Fake Bank Domains in Targeted Attacks, Payloads Hint at TrickBot Connection\nhttps://securityintelligence.com/posts/emotet-smishing-uses-fake-bank-domains-in-targeted-attacks-payloads-hint-at-trickbot-connection/"
            },
            {
                "date": "2020-03",
                "activity": "Emotet Wi-Fi Spreader Upgraded\nhttps://www.binarydefense.com/emotet-wi-fi-spreader-upgraded/"
            },
            {
                "date": "2020-06",
                "activity": "Emotet malware now steals your email attachments to attack contacts\nhttps://www.bleepingcomputer.com/news/security/emotet-malware-now-steals-your-email-attachments-to-attack-contacts/"
            },
            {
                "date": "2020-07",
                "activity": "It was never a question of \u201cif\u201d but \u201cwhen\u201d. After five months of absence, the dreaded Emotet has returned. Following several false alarms over the last few weeks, a spam campaign was first spotted on July 13 showing signs of a likely comeback.\nhttps://blog.malwarebytes.com/trojans/2020/07/long-dreaded-emotet-has-returned/"
            },
            {
                "date": "2020-07",
                "activity": "Researchers tracking Emotet botnet noticed that the malware started to push QakBot banking trojan at an unusually high rate, replacing the longtime TrickBot payload.\nhttps://www.bleepingcomputer.com/news/security/emotet-botnet-is-now-heavily-spreading-qakbot-malware/"
            },
            {
                "date": "2020-08",
                "activity": "Emotet malware strikes U.S. businesses with COVID-19 spam\nhttps://www.bleepingcomputer.com/news/security/emotet-malware-strikes-us-businesses-with-covid-19-spam/"
            },
            {
                "date": "2020-08",
                "activity": "Emotet strikes Quebec\u2019s Department of Justice\nhttps://www.welivesecurity.com/2020/09/16/emotet-quebec-department-justice-eset/"
            },
            {
                "date": "2020-08",
                "activity": "Since August, CISA and MS-ISAC have seen a significant increase in malicious cyber actors targeting state and local governments with Emotet phishing emails.\nhttps://us-cert.cisa.gov/ncas/alerts/aa20-280a"
            },
            {
                "date": "2020-10",
                "activity": "On October 1, 2020, we observed thousands of Emotet email messages with the subject \u201cTeam Blue Take Action\u201d sent to hundreds of organizations in the US. The message body is taken directly from a page on the Democratic National Committee's website, with the addition of a line requesting that the recipient open the attached document.\nhttps://www.proofpoint.com/us/blog/threat-insight/emotet-makes-timely-adoption-political-and-elections-lures"
            },
            {
                "date": "2020-10",
                "activity": "New Emotet attacks use fake Windows Update lures\nhttps://www.zdnet.com/article/new-emotet-attacks-use-fake-windows-update-lures/"
            },
            {
                "date": "2020-12",
                "activity": "Emotet malware hits Lithuania's National Public Health Center\nhttps://www.bleepingcomputer.com/news/security/emotet-malware-hits-lithuanias-national-public-health-center/"
            },
            {
                "date": "2021-11",
                "activity": "Emotet malware is back and rebuilding its botnet via TrickBot\nhttps://www.bleepingcomputer.com/news/security/emotet-malware-is-back-and-rebuilding-its-botnet-via-trickbot/"
            },
            {
                "date": "2021-12",
                "activity": "Emotet now drops Cobalt Strike, fast forwards ransomware attacks\nhttps://www.bleepingcomputer.com/news/security/emotet-now-drops-cobalt-strike-fast-forwards-ransomware-attacks/"
            },
            {
                "date": "2022-01",
                "activity": "Emotet Spam Abuses Unconventional IP Address Formats to Spread Malware\nhttps://www.trendmicro.com/en_us/research/22/a/emotet-spam-abuses-unconventional-ip-address-formats-spread-malware.html"
            },
            {
                "date": "2022-02",
                "activity": "New Emotet Infection Method\nhttps://unit42.paloaltonetworks.com/new-emotet-infection-method/"
            },
            {
                "date": "2022-03",
                "activity": "Emotet Targeting Japanese Organizations\nhttps://www.cybereason.com/blog/research/threat-alert-emotet-targeting-japanese-organizations"
            },
            {
                "date": "2022-03",
                "activity": "Emotet Spoofs IRS in Tax Season-Themed Phishing Email Campaign\nhttps://cofense.com/blog/emotet-spoofs-irs-in-tax-season/"
            },
            {
                "date": "2022-04",
                "activity": "Emotet modules and recent attacks\nhttps://securelist.com/emotet-modules-and-recent-attacks/106290/"
            },
            {
                "date": "2022-04",
                "activity": "Emotet botnet switches to 64-bit modules, increases activity\nhttps://www.bleepingcomputer.com/news/security/emotet-botnet-switches-to-64-bit-modules-increases-activity/"
            },
            {
                "date": "2022-04",
                "activity": "Emotet malware infects users again after fixing broken installer\nhttps://www.bleepingcomputer.com/news/security/emotet-malware-infects-users-again-after-fixing-broken-installer/"
            },
            {
                "date": "2022-04",
                "activity": "Emotet Tests New Delivery Techniques\nhttps://www.proofpoint.com/us/blog/threat-insight/emotet-tests-new-delivery-techniques"
            },
            {
                "date": "2022-04",
                "activity": "Emotet malware now installs via PowerShell in Windows shortcut files\nhttps://www.bleepingcomputer.com/news/security/emotet-malware-now-installs-via-powershell-in-windows-shortcut-files/"
            },
            {
                "date": "2022-06",
                "activity": "Emotet malware now steals credit cards from Google Chrome users\nhttps://www.bleepingcomputer.com/news/security/emotet-malware-now-steals-credit-cards-from-google-chrome-users/"
            },
            {
                "date": "2022-06",
                "activity": "Back From the Dead, Emotet Returns in 2022\nhttps://www.deepinstinct.com/blog/emotet-malware-returns-in-2022"
            },
            {
                "date": "2022-11",
                "activity": "Emotet botnet starts blasting malware again after 4 month break\nhttps://www.bleepingcomputer.com/news/security/emotet-botnet-starts-blasting-malware-again-after-4-month-break/\nhttps://blog.talosintelligence.com/emotet-coming-in-hot/"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-07",
                "activity": "A vigilante is sabotaging the Emotet botnet by replacing malware payloads with GIFs\nhttps://www.zdnet.com/article/a-vigilante-is-sabotaging-the-emotet-botnet-by-replacing-malware-payloads-with-gifs/"
            },
            {
                "date": "2021-01",
                "activity": "World\u2019s most dangerous malware EMOTET disrupted through global action\nhttps://www.europol.europa.eu/media-press/newsroom/news/world%e2%80%99s-most-dangerous-malware-emotet-disrupted-through-global-action"
            }
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-banking-malware-uses-network-sniffing-for-data-theft/",
            "https://documents.trendmicro.com/assets/white_papers/ExploringEmotetsActivities_Final.pdf",
            "https://www.crowdstrike.com/blog/meet-crowdstrikes-adversary-of-the-month-for-february-mummy-spider/",
            "https://www.proofpoint.com/us/threat-insight/post/threat-actor-profile-ta542-banker-malware-distribution-service",
            "https://www.malwarebytes.com/emotet/",
            "https://www.symantec.com/blogs/threat-intelligence/evolution-emotet-trojan-distributor",
            "https://securelist.com/the-banking-trojan-emotet-detailed-analysis/69560/"
        ],
        "uuid": "64df4c69-c290-4579-b9de-ca5bdb786ec4",
        "last-card-change": "2022-11-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mummy_spider_ta542",
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