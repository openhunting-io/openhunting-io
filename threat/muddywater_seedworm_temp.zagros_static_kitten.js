var threatdata = {
    "name": "MuddyWater, Seedworm, TEMP.Zagros, Static Kitten",
    "alias": "MuddyWater, Seedworm, TEMP.Zagros, Static Kitten, Mercury, TA450, Cobalt Ulster, ATK 51, T-APT-14, ITG17, Mango Sandstorm",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-05",
    "all_data": {
        "actor": "MuddyWater, Seedworm, TEMP.Zagros, Static Kitten",
        "names": [
            {
                "name": "MuddyWater",
                "name-giver": "Palo Alto"
            },
            {
                "name": "Seedworm",
                "name-giver": "Symantec"
            },
            {
                "name": "TEMP.Zagros",
                "name-giver": "FireEye"
            },
            {
                "name": "Static Kitten",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Mercury",
                "name-giver": "Microsoft"
            },
            {
                "name": "TA450",
                "name-giver": "Proofpoint"
            },
            {
                "name": "Cobalt Ulster",
                "name-giver": "SecureWorks"
            },
            {
                "name": "ATK 51",
                "name-giver": "Thales"
            },
            {
                "name": "T-APT-14",
                "name-giver": "Tencent"
            },
            {
                "name": "ITG17",
                "name-giver": "IBM"
            },
            {
                "name": "Mango Sandstorm",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Iran"
        ],
        "sponsor": "State-sponsored, IRGC (Islamic Republic Guard Corps)",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Reaqta) MuddyWater is an APT group that has been active throughout 2017, targeting victims in Middle East with in-memory vectors leveraging on Powershell, in a family of attacks now identified as \u201cLiving off the land\u201d, as they don\u2019t require the creation of new binaries on the victim\u2019s machine, thus maintaining a low detection profile and a low forensic footprint.\n\nThe operators behind MuddyWater are likely espionage motivated, we derive this information from the analysis of data and backdoors behaviors. We also find that despite the strong preponderance of victims from Pakistan, the most active targets appear to be in: Saudi Arabia, UAE and Iraq. Amongst the victims we identify a variety of entities with a stronger focus at Governments, Telcos and Oil companies.\n\nBy tracking the operations we finally figure out that the originating country is likely to be Iran, while it remains harder to ascertain whether MuddyWater is state sponsored or a criminal organization incline to espionage.",
        "observed-sectors": [
            "Defense",
            "Education",
            "Energy",
            "Financial",
            "Food and Agriculture",
            "Gaming",
            "Government",
            "Healthcare",
            "High-Tech",
            "IT",
            "Media",
            "NGOs",
            "Oil and gas",
            "Telecommunications",
            "Transportation"
        ],
        "observed-countries": [
            "Afghanistan",
            "Armenia",
            "Austria",
            "Azerbaijan",
            "Bahrain",
            "Belarus",
            "Egypt",
            "Georgia",
            "India",
            "Iran",
            "Iraq",
            "Israel",
            "Jordan",
            "Kuwait",
            "Laos",
            "Lebanon",
            "Mali",
            "Netherlands",
            "Oman",
            "Qatar",
            "Pakistan",
            "Russia",
            "Saudi Arabia",
            "Tajikistan",
            "Thailand",
            "Tunisia",
            "Turkey",
            "UAE",
            "Ukraine",
            "USA"
        ],
        "tools": [
            "ChromeCookiesView",
            "chrome-passwords",
            "CLOUDSTATS",
            "Cobalt Strike",
            "CrackMapExec",
            "DELPHSTATS",
            "EmpireProject",
            "FruityC2",
            "Koadic",
            "LaZagne",
            "Meterpreter",
            "Mimikatz",
            "Mudwater",
            "MZCookiesView",
            "PhonyC2",
            "Powermud",
            "PowerSploit",
            "POWERSTATS",
            "PowGoop",
            "PRB-Backdoor",
            "QUADAGENT",
            "Secure Socket Funneling",
            "SHARPSTATS",
            "Shootback",
            "Smbmap",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2017-02",
                "activity": "The MuddyWater attacks are primarily against Middle Eastern nations. However, we have also observed attacks against surrounding nations and beyond, including targets in India and the USA.\nhttps://unit42.paloaltonetworks.com/unit42-muddying-the-water-targeted-attacks-in-the-middle-east/"
            },
            {
                "date": "2018-01",
                "activity": "Updated Tactics, Techniques and Procedures in Spear Phishing Campaign\nWe attribute this activity to TEMP.Zagros (reported by Palo Alto Networks and Trend Micro as MuddyWater), an Iran-nexus actor that has been active since at least May 2017. This actor has engaged in prolific spear phishing of government and defense entities in Central and Southwest Asia.\nhttps://www.fireeye.com/blog/threat-research/2018/03/iranian-threat-group-updates-ttps-in-spear-phishing-campaign.html"
            },
            {
                "date": "2018-03",
                "activity": "Campaign Possibly Connected to \u201cMuddyWater\u201d Surfaces in the Middle East and Central Asia\nWe discovered a new campaign targeting organizations in Turkey, Pakistan and Tajikistan that has some similarities with an earlier campaign named MuddyWater, which hit various industries in several countries, primarily in the Middle East and Central Asia.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/campaign-possibly-connected-muddywater-surfaces-middle-east-central-asia/"
            },
            {
                "date": "2018-05",
                "activity": "Another Potential MuddyWater Campaign uses Powershell-based PRB-Backdoor\nIn May 2018, we found a new sample (Detected as W2KM_DLOADR.UHAOEEN) that may be related to this campaign. Like the previous campaigns, these samples again involve a Microsoft Word document embedded with a malicious macro that is capable of executing PowerShell (PS) scripts leading to a backdoor payload. One notable difference in the analyzed samples is that they do not directly download the Visual Basic Script(VBS) and PowerShell component files, and instead encode all the scripts on the document itself. The scripts will then be decoded and dropped to execute the payload without needing to download the component files.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/another-potential-muddywater-campaign-uses-powershell-based-prb-backdoor/"
            },
            {
                "date": "2018-05",
                "activity": "We recently noticed a large amount of spear phishing documents that appear to be targeting government bodies, military entities, telcos and educational institutions in Jordan, Turkey, Azerbaijan and Pakistan, in addition to the continuous targeting of Iraq and Saudi Arabia, other victims were also detected in Mali, Austria, Russia, Iran and Bahrain.. These new documents have appeared throughout 2018 and escalated from May onwards. The attacks are still ongoing.\nhttps://securelist.com/muddywater/88059/"
            },
            {
                "date": "2018-09",
                "activity": "Group remains highly active with more than 130 victims in 30 organizations hit since September 2018.\nSeedworm\u2019s motivations are much like many cyber espionage groups that we observe\u2014they seek to acquire actionable information about the targeted organizations and individuals. They accomplish this with a preference for speed and agility over operational security, which ultimately led to our identification of their key operational infrastructure.\nhttps://www.symantec.com/blogs/threat-intelligence/seedworm-espionage-group"
            },
            {
                "date": "2018-11",
                "activity": "Operations in Lebanon and Oman\nMuddyWater has recently been targeting victims likely from Lebanon and Oman, while leveraging compromised domains, one of which is owned by an Israeli web developer. The investigation aimed to uncover additional details regarding the compromise vector. Further, we wished to determine the infection vector, which is currently unknown. With that in mind, past experience implies that this might be a two-stage spear-phishing campaign.\nhttps://www.clearskysec.com/wp-content/uploads/2018/11/MuddyWater-Operations-in-Lebanon-and-Oman.pdf"
            },
            {
                "date": "2019-04",
                "activity": "Targeting Kurdish Political Groups and Organizations in Turkey\nHowever, unlike the previous vector, we did not identify this time any compromised servers used to host the malware\u2019s code. Instead, the lure document already contains the malicious code. We also detected five additional files that operate in a similar file to the aforementioned document; but unlike that file, these do not have any content.\nhttps://www.clearskysec.com/muddywater-targets-kurdish-groups-turkish-orgs/"
            },
            {
                "date": "2019-04",
                "activity": "The Iranian APT, MuddyWater, has been active since at least 2017. Most recently though, a new campaign, targeting Belarus, Turkey and Ukraine, has emerged that caught the attention of Check Point researchers.\nhttps://research.checkpoint.com/the-muddy-waters-of-apt-attacks/"
            },
            {
                "date": "2019-04",
                "activity": "Operation \u201cBlackWater\u201d\nNewly associated samples from April 2019 indicate attackers have added three distinct steps to their operations, allowing them to bypass certain security controls and suggesting that MuddyWater\u2019s tactics, techniques and procedures (TTPs) have evolved to evade detection.\nhttps://blog.talosintelligence.com/2019/05/recent-muddywater-associated-blackwater.html"
            },
            {
                "date": "2019-06",
                "activity": "Clearsky has detected new and advanced attack vector used by MuddyWater to target governmental entities and the telecommunication sector. Notably, the TTP includes decoy documents exploiting CVE-2017-0199 as the first stage of the attack. This is followed by the second stage of the attack \u2013 communication with the hacked C2 servers and downloading a file infected with the macros.\nhttps://www.clearskysec.com/muddywater2/"
            },
            {
                "date": "2019-06",
                "activity": "We came across new campaignsthat seem to bear the markings of MuddyWater \u2013a threat actor group with a history of targeting organizations in Middle Eastern and Asian countries. The group used new tools and payloads in campaigns over the first half of 2019, pointing to the continued work the group has put in since our last report on MuddyWaterin November 2018.\nhttps://documents.trendmicro.com/assets/white_papers/wp_new_muddywater_findings_uncovered.pdf"
            },
            {
                "date": "2019-12",
                "activity": "Group continues to be highly active in 2020, while tentative links to recently discovered PowGoop tool suggest possible retooling.\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/seedworm-apt-iran-middle-east"
            },
            {
                "date": "2019",
                "activity": "State-sponsored hackers abuse Slack API to steal airline data\nhttps://www.bleepingcomputer.com/news/security/state-sponsored-hackers-abuse-slack-api-to-steal-airline-data/"
            },
            {
                "date": "2020-09",
                "activity": "Operation \u201cQuicksand\u201d\nDuring September 2020, weidentified a new campaign targeting many prominent Israeli organizations.\nhttps://www.clearskysec.com/wp-content/uploads/2020/10/Operation-Quicksand.pdf"
            },
            {
                "date": "2020-10",
                "activity": "MSTIC has observed activity by the nation-state actor MERCURY using the CVE-2020-1472 exploit (ZeroLogon) in active campaigns over the last 2 weeks.\nhttps://www.zdnet.com/article/microsoft-says-iranian-hackers-are-exploiting-the-zerologon-vulnerability/"
            },
            {
                "date": "2020-12",
                "activity": "GitHub-hosted malware calculates Cobalt Strike payload from Imgur pic\nhttps://www.bleepingcomputer.com/news/security/github-hosted-malware-calculates-cobalt-strike-payload-from-imgur-pic/"
            },
            {
                "date": "2021-02",
                "activity": "Probable Iranian Cyber Actors, Static Kitten, Conducting Cyberespionage Campaign Targeting UAE and Kuwait Government Agencies\nhttps://www.anomali.com/blog/probable-iranian-cyber-actors-static-kitten-conducting-cyberespionage-campaign-targeting-uae-and-kuwait-government-agencies"
            },
            {
                "date": "2021-02",
                "activity": "Operation \u201cEarth Vetala\u201d\nEarth Vetala used spearphishing emails with embedded links to a legitimate file-sharing service to distribute their malicious package. The links were embedded within lure documents as well as emails.\nhttps://www.trendmicro.com/en_us/research/21/c/earth-vetala---muddywater-continues-to-target-organizations-in-t.html"
            },
            {
                "date": "2021-06",
                "activity": "Espionage Campaign Targets Telecoms Organizations across Middle East and Asia\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/espionage-campaign-telecoms-asia-middle-east"
            },
            {
                "date": "2021-11",
                "activity": "Iranian APT MuddyWater targets Turkish users via malicious PDFs, executables\nhttps://blog.talosintelligence.com/2022/01/iranian-apt-muddywater-targets-turkey.html"
            },
            {
                "date": "2021 Late",
                "activity": "New MuddyWater Threat: Old Kitten; New Tricks\nhttps://www.deepinstinct.com/blog/new-muddywater-threat-old-kitten-new-tricks"
            },
            {
                "date": "2022 Late",
                "activity": "APT groups muddying the waters for MSPs\nhttps://www.welivesecurity.com/2023/05/02/apt-groups-muddying-waters-msps/"
            },
            {
                "date": "2023-04",
                "activity": "MERCURY and DEV-1084: Destructive attack on hybrid environment\nhttps://www.microsoft.com/en-us/security/blog/2023/04/07/mercury-and-dev-1084-destructive-attack-on-hybrid-environment/"
            },
            {
                "date": "2023-04",
                "activity": "PhonyC2: Revealing a New Malicious Command & Control Framework by MuddyWater\nhttps://www.deepinstinct.com/blog/phonyc2-revealing-a-new-malicious-command-control-framework-by-muddywater"
            },
            {
                "date": "2023-05",
                "activity": "Microsoft: Iranian hacking groups join Papercut attack spree\nhttps://www.bleepingcomputer.com/news/security/microsoft-iranian-hacking-groups-join-papercut-attack-spree/"
            }
        ],
        "counter-operations": [
            {
                "date": "2019-05",
                "activity": "New leaks of Iranian cyber-espionage operations hit Telegram and the Dark Web\nhttps://www.zdnet.com/article/new-leaks-of-iranian-cyber-espionage-operations-hit-telegram-and-the-dark-web/\nUpdate: this leak may have been the work of the {{CIA}}."
            }
        ],
        "information": [
            "https://reaqta.com/2017/11/muddywater-apt-targeting-middle-east/",
            "https://www.symantec.com/blogs/threat-intelligence/seedworm-espionage-group",
            "https://www.cybercom.mil/Media/News/Article/2897570/iranian-intel-cyber-suite-of-malware-uses-open-source-tools/",
            "https://www.cisa.gov/uscert/ncas/alerts/aa22-055a",
            "https://blog.talosintelligence.com/2022/03/iranian-supergroup-muddywater.html",
            "https://www.group-ib.com/blog/muddywater-infrastructure/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0069/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=muddywater"
        ],
        "uuid": "0d5af1f9-fa2e-4ce9-a4ce-0c6fade938e9",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "muddywater_seedworm_temp.zagros_static_kitten",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/boggyserpens/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Boggy Serpens",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/cobalt-ulster",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT ULSTER",
            "categories": [
                "POWERSTATS",
                "Koadic",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2019/05/recent-muddywater-associated-blackwater.html",
            "date": "2019-05-20",
            "organization": "Cisco",
            "author": "Danny Adamitis",
            "title": "Recent MuddyWater-associated BlackWater campaign shows signs of new anti-detection techniques",
            "categories": [
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/new-leaks-of-iranian-cyber-espionage-operations-hit-telegram-and-the-dark-web/",
            "date": "2019-05-09",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "New leaks of Iranian cyber-espionage operations hit Telegram and the Dark Web",
            "categories": [
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/muddywater-targets-kurdish-groups-turkish-orgs/",
            "date": "2019-04-15",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Iranian APT MuddyWater Attack Infrastructure Targeting Kurdish Political Groups and Organizations in Turkey",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/muddywater",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "MuddyWater",
            "categories": [
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0069/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: MuddyWater",
            "categories": [
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/seedworm-espionage-group",
            "date": "2018-12-10",
            "organization": "Symantec",
            "author": "Symantec DeepSight Adversary Intelligence Team",
            "title": "Seedworm: Group Compromises Government Agencies, Oil & Gas, NGOs, Telecoms, and IT Firms",
            "categories": [
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://www.clearskysec.com/wp-content/uploads/2018/11/MuddyWater-Operations-in-Lebanon-and-Oman.pdf",
            "date": "2018-11",
            "organization": "ClearSky",
            "author": "ClearSky Cyber Security",
            "title": "MuddyWater Operations in Lebanon and Oman",
            "categories": [
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://securelist.com/muddywater/88059/",
            "date": "2018-10-10",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "MuddyWater expands operations",
            "categories": [
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/another-potential-muddywater-campaign-uses-powershell-based-prb-backdoor/",
            "date": "2018-06-14",
            "organization": "Trend Micro",
            "author": "Michael Villanueva",
            "title": "Another Potential MuddyWater Campaign uses Powershell-based PRB-Backdoor",
            "categories": [
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2018/03/iranian-threat-group-updates-ttps-in-spear-phishing-campaign.html",
            "date": "2018-03-13",
            "organization": "FireEye",
            "author": "Sudeep Singh",
            "title": "Iranian Threat Group Updates Tactics, Techniques and Procedures in Spear Phishing Campaign",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/campaign-possibly-connected-muddywater-surfaces-middle-east-central-asia/",
            "date": "2018-03-12",
            "organization": "Trend Micro",
            "author": "Jarom\u00edr Ho\u0159ej\u0161\u00ed",
            "title": "Campaign Possibly Connected to \u201cMuddyWater\u201d Surfaces in the Middle East and Central Asia",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-muddying-the-water-targeted-attacks-in-the-middle-east/",
            "date": "2017-11-14",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tom Lancaster",
            "title": "Muddying the Water: Targeted Attacks in the Middle East",
            "categories": [
                "POWERSTATS",
                "MuddyWater"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "muddywater",
            "procedure_code": "g0069",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0069",
            "techniques": [
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1589.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1589/002",
                    "technique_name": "gather victim identity information : email addresses",
                    "technique_description": "adversaries may gather email addresses that can be used during targeting. even if internal instances exist, organizations may have public-facing email infrastructure and addresses for employees.",
                    "procedure_description": "muddywater has specifically targeted government agency employees with spearphishing e-mails.[18]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1583.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1583/006",
                    "technique_name": "acquire infrastructure : web services",
                    "technique_description": "adversaries may register for web services\u00a0that can be used during targeting. a variety of popular websites exist for adversaries to register for a web-based service that can be abused during later stages of the adversary lifecycle, such as during command and control (web service), exfiltration over web service, or phishing. using common services, such as those offered by google or twitter, makes it easier for adversaries to hide in expected noise. by utilizing a web service, adversaries can make it difficult to physically tie back operations to them.",
                    "procedure_description": "muddywater has used file sharing services including onehub to distribute tools.[15][16]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/002",
                    "technique_name": "obtain capabilities : tool",
                    "technique_description": "adversaries may buy, steal, or download software tools that can be used during targeting. tools can be open or closed source, free or commercial. a tool can be used for malicious purposes by an adversary, but (unlike malware) were not intended to be used for those purposes (ex: psexec). tool acquisition can involve the procurement of commercial software licenses, including for red teaming tools such as cobalt strike. commercial software may be obtained through purchase, stealing licenses (or licensed copies of the software), or cracking trial versions.",
                    "procedure_description": "muddywater has made use of legitimate tools connectwise and remote utilities to gain access to target environment.[76]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1190",
                    "technique_link": "https://attack.mitre.org/techniques/T1190",
                    "technique_name": "exploit public-facing application",
                    "technique_description": "adversaries may attempt to exploit a weakness in an internet-facing host or system to initially access a network. the weakness in the system can be a software bug, a temporary glitch, or a misconfiguration.",
                    "procedure_description": "muddywater has exploited the microsoft exchange memory corruption vulnerability (cve-2020-0688).[47]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "muddywater has compromised third parties and used compromised accounts to send spearphishing emails with targeted attachments to recipients.[151][152][153][154][155][156] [157]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/002",
                    "technique_name": "phishing : spearphishing link",
                    "technique_description": "adversaries may send spearphishing emails with a malicious link in an attempt to gain access to victim systems. spearphishing with a link is a specific variant of spearphishing. it is different from other forms of spearphishing in that it employs the use of links to download malware contained in email, instead of attaching malicious files to the email itself, to avoid defenses that may inspect email attachments. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "muddywater has sent targeted spearphishing e-mails with malicious links.[75][76]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "muddywater has used powershell for execution.[152][153][154][155][156][157][158][159][160][161]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "muddywater has used a custom tool for creating reverse shells.[227]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "muddywater has used vbscript files to execute its powerstats payload, as well as macros.[89][90][91][92][93][94][95][96][97]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/006",
                    "technique_name": "command and scripting interpreter : python",
                    "technique_description": "adversaries may abuse python commands and scripts for execution. python is a very popular scripting/programming language, with capabilities to perform many functions. python can be executed interactively from the command-line (via the python.exe interpreter) or via scripts (.py) that can be written and distributed to different systems. python code can also be compiled into binary executables.",
                    "procedure_description": "muddywater has used developed tools in python including out1.[30]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "muddywater has used javascript files to execute its powerstats payload.[52][53][54]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1203",
                    "technique_link": "https://attack.mitre.org/techniques/T1203",
                    "technique_name": "exploitation for client execution",
                    "technique_description": "adversaries may exploit software vulnerabilities in client applications to execute code. vulnerabilities can exist in software due to unsecure coding practices that can lead to unanticipated behavior. adversaries can take advantage of certain vulnerabilities through targeted exploitation for the purpose of arbitrary code execution. oftentimes the most valuable exploits to an offensive toolkit are those that can be used to obtain code execution on a remote system because they can be used to gain access to that system. users will expect to see files related to the applications they commonly used to do work, so they are a useful target for exploit research and development because of their high utility.",
                    "procedure_description": "muddywater has exploited the office vulnerability cve-2017-0199 for execution.[61]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1559.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1559/001",
                    "technique_name": "inter-process communication : component object model",
                    "technique_description": "adversaries may use the windows component object model (com) for local code execution. com is an inter-process communication (ipc) component of the native windows application programming interface (api) that enables interaction between software objects, or executable code that implements one or more interfaces. through com, a client object can call methods of server objects, which are typically binary dynamic link libraries (dll) or executables (exe). remote com execution is facilitated by remote services such as  distributed component object model (dcom).",
                    "procedure_description": "muddywater has used malware that has the capability to execute malicious code via com, dcom, and outlook.[12][13][14]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1559.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1559/002",
                    "technique_name": "inter-process communication : dynamic data exchange",
                    "technique_description": "adversaries may use windows dynamic data exchange (dde) to execute arbitrary commands. dde is a client-server protocol for one-time and/or continuous inter-process communication (ipc) between applications. once a link is established, applications can autonomously exchange transactions consisting of strings, warm data links (notifications when a data item changes), hot data links (duplications of changes to a data item), and requests for command execution.",
                    "procedure_description": "muddywater has used malware that can execute powershell scripts via dde.[23]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "muddywater has used scheduled tasks to establish persistence.[112]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "muddywater has distributed urls in phishing e-mails that link to lure documents.[59][60]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "muddywater has attempted to get users to enable macros and launch malicious microsoft word documents delivered via spearphishing emails.[150][151][152][153][154][155][156][157][158][159]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "muddywater has used malware that leveraged wmi for execution and querying host information.[83][84][85][86]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "muddywater has added registry run key kcu\\software\\microsoft\\windows\\currentversion\\run\\systemtextencoding to establish persistence.[167][168][169][170][171][172]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "muddywater maintains persistence on victim networks through side-loading dlls to trick legitimate programs into running malware.[43]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1137.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1137/001",
                    "technique_name": "office application startup : office template macros",
                    "technique_description": "adversaries may abuse microsoft office templates to obtain persistence on a compromised system. microsoft office contains templates that are part of common office applications and are used to customize styles. the base templates within the application are used each time an application starts.",
                    "procedure_description": "muddywater has used a word template, normal.dotm, for persistence.[8]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "muddywater has used scheduled tasks to establish persistence.[112]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "muddywater uses various techniques to bypass uac.[43]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "muddywater has added registry run key kcu\\software\\microsoft\\windows\\currentversion\\run\\systemtextencoding to establish persistence.[167][168][169][170][171][172]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "muddywater maintains persistence on victim networks through side-loading dlls to trick legitimate programs into running malware.[43]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "muddywater has used scheduled tasks to establish persistence.[112]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1548.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1548/002",
                    "technique_name": "abuse elevation control mechanism : bypass user account control",
                    "technique_description": "adversaries may bypass uac mechanisms to elevate process privileges on system. windows user account control (uac) allows a program to elevate its privileges (tracked as integrity levels ranging from low to high) to perform a task under administrator-level permissions, possibly by prompting the user for confirmation. the impact to the user ranges from denying the operation under high enforcement to allowing the user to perform the action if they are in the local administrators group and click through the prompt or allowing them to enter an administrator password to complete the action.",
                    "procedure_description": "muddywater uses various techniques to bypass uac.[43]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "muddywater decoded base64-encoded powershell commands using a vbs file.[153][154][155][156]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/002",
                    "technique_name": "hijack execution flow : dll side-loading",
                    "technique_description": "adversaries may execute their own malicious payloads by side-loading dlls. similar to dll search order hijacking, side-loading involves hijacking which dll a program loads. but rather than just planting the dll within the search order of a program then waiting for the victim application to be invoked, adversaries may directly side-load their payloads by planting then invoking a legitimate application that executes their payload(s).",
                    "procedure_description": "muddywater maintains persistence on victim networks through side-loading dlls to trick legitimate programs into running malware.[43]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1562.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1562/001",
                    "technique_name": "impair defenses : disable or modify tools",
                    "technique_description": "adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. this may take many forms, such as killing security software processes or services, modifying / deleting registry keys or configuration files so that tools do not operate properly, or other methods to interfere with security tools scanning or reporting information. adversaries may also disable updates to prevent the latest security patches from reaching tools on victim systems.",
                    "procedure_description": "muddywater can disable the system's local proxy settings.[62]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "muddywater has disguised malicious executables and used filenames and registry key names associated with windows defender.[102][103][104]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/003",
                    "technique_name": "obfuscated files or information : steganography",
                    "technique_description": "adversaries may use steganography techniques in order to prevent the detection of hidden information. steganographic techniques can be used to hide data in digital media such as images, audio tracks, video clips, or text files.",
                    "procedure_description": "muddywater has stored obfuscated javascript code in an image file named temp.jpg.[15]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/004",
                    "technique_name": "obfuscated files or information : compile after delivery",
                    "technique_description": "adversaries may attempt to make payloads difficult to discover and analyze by delivering files to victims as uncompiled code. text-based source code files may subvert analysis and scrutiny from protections targeting executables/binaries. these payloads will need to be compiled before execution; typically via native utilities such as csc.exe or gcc/mingw.",
                    "procedure_description": "muddywater has used the .net csc.exe tool to compile executables from downloaded c# code.[1]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.010",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/010",
                    "technique_name": "obfuscated files or information : command obfuscation",
                    "technique_description": "adversaries may obfuscate content during command execution to impede detection. command-line obfuscation is a method of making strings and patterns within commands and scripts more difficult to signature and analyze. this type of obfuscation can be included within commands executed by delivered payloads (e.g., phishing and drive-by compromise) or interactively via command and scripting interpreter.",
                    "procedure_description": "muddywater has used daniel bohannon\u2019s invoke-obfuscation framework and obfuscated powershell scripts.[55][12] the group has also used other obfuscation methods, including base64 obfuscation of vbscripts and powershell commands.[55][56][57][58][59][60][61]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/003",
                    "technique_name": "system binary proxy execution : cmstp",
                    "technique_description": "adversaries may abuse cmstp to proxy execution of malicious code. the microsoft connection manager profile installer (cmstp.exe) is a command-line program used to install connection manager service profiles.  cmstp.exe accepts an installation information file (inf) as a parameter and installs a service profile leveraged for remote access connections.",
                    "procedure_description": "muddywater has used cmstp.exe and a malicious inf to execute its powerstats payload.[10]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/005",
                    "technique_name": "system binary proxy execution : mshta",
                    "technique_description": "adversaries may abuse mshta.exe to proxy execution of malicious .hta files and javascript or vbscript through a trusted windows utility. there are several examples of different types of threats leveraging mshta.exe during initial compromise and for execution of code",
                    "procedure_description": "muddywater has used mshta.exe to execute its powerstats payload and to pass a powershell one-liner for execution.[26][27]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "muddywater has used malware that leveraged rundll32.exe in a registry run key to execute a .dll.[68]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "muddywater has performed credential dumping with lazagne and other tools, including by dumping passwords saved in victim email.[22][23][24]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "muddywater has run tools including browser64 to steal passwords saved in victim web browsers.[54][55]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/001",
                    "technique_name": "os credential dumping : lsass memory",
                    "technique_description": "adversaries may attempt to access credential material stored in the process memory of the local security authority subsystem service (lsass). after a user logs on, the system generates and stores a variety of credential materials in lsass process memory. these credential materials can be harvested by an administrative user or system and used to conduct lateral movement using use alternate authentication material.",
                    "procedure_description": "muddywater has performed credential dumping with mimikatz and procdump64.exe.[60][61][62]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/004",
                    "technique_name": "os credential dumping : lsa secrets",
                    "technique_description": "adversaries with system access to a host may attempt to access local security authority (lsa) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. lsa secrets are stored in the registry at hkey_local_machine\\security\\policy\\secrets. lsa secrets can also be dumped from memory.",
                    "procedure_description": "muddywater has performed credential dumping with lazagne.[25][26]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/005",
                    "technique_name": "os credential dumping : cached domain credentials",
                    "technique_description": "adversaries may attempt to access cached domain credentials used to allow authentication to occur in the event a domain controller is unavailable.",
                    "procedure_description": "muddywater has performed credential dumping with lazagne.[9][10]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/001",
                    "technique_name": "unsecured credentials : credentials in files",
                    "technique_description": "adversaries may search local file systems and remote file shares for files containing insecurely stored credentials. these can be files created by users to store their own credentials, shared credential stores for a group of individuals, configuration files containing passwords for a system or service, or source code/binary files containing embedded passwords.",
                    "procedure_description": "muddywater has run a tool that steals passwords saved in victim email.[22]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "muddywater has used cmd.exe net user /domain to enumerate domain users.[31]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "muddywater has used malware that checked if the programdata folder had folders or files with the keywords \"kasper,\" \"panda,\" or \"eset.\"[202]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "muddywater has used malware to obtain a list of running processes on the system.[176][177]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518",
                    "technique_link": "https://attack.mitre.org/techniques/T1518",
                    "technique_name": "software discovery",
                    "technique_description": "adversaries may attempt to get a listing of software and software versions that are installed on a system or in a cloud environment. adversaries may use the information from software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "muddywater has used a powershell backdoor to check for skype connectivity on the target machine.[19]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1518.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1518/001",
                    "technique_name": "software discovery : security software discovery",
                    "technique_description": "adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. this may include things such as firewall rules and anti-virus. adversaries may use the information from security software discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "muddywater has used malware to check running processes against a hard-coded list of security tools often used by malware researchers.[69]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "muddywater has used malware that can collect the victim\u2019s os version and machine name.[238][239][240][241][242]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "muddywater has used malware to collect the victim\u2019s ip address and domain name.[148]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "muddywater has used a powershell backdoor to check for skype connections on the target machine.[54]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "muddywater has used malware that can collect the victim\u2019s username.[122][123]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1210",
                    "technique_link": "https://attack.mitre.org/techniques/T1210",
                    "technique_name": "exploitation of remote services",
                    "technique_description": "adversaries may exploit remote services to gain unauthorized access to internal systems once inside of a network. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code.\u00a0a common goal for post-compromise exploitation of remote services is for lateral movement to enable access to a remote system.",
                    "procedure_description": "muddywater has exploited the microsoft netlogon vulnerability (cve-2020-1472).[26]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "muddywater has used the native windows cabinet creation tool, makecab.exe, likely to compress stolen data to be uploaded.[48]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "muddywater has stored a decoy pdf file within a victim's %temp% folder.[63]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "muddywater has used malware that can capture screenshots of the victim\u2019s machine.[109]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "muddywater has used http for c2 communications.[216][217]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "muddywater has used tools to encode c2 communications including base64 encoding.[58][59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "muddywater has used aes to encrypt c2 responses.[94]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "muddywater has used malware that can upload additional files to the victim\u2019s machine.[304][305][306][307]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1104",
                    "technique_link": "https://attack.mitre.org/techniques/T1104",
                    "technique_name": "multi-stage channels",
                    "technique_description": "adversaries may create multiple stages for command and control that are employed under different conditions or for certain functions. use of multiple stages may obfuscate the command and control channel to make detection more difficult.",
                    "procedure_description": "muddywater has used one c2 to obtain enumeration scripts and monitor web logs, but a different c2 to send data back.[9]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/002",
                    "technique_name": "proxy : external proxy",
                    "technique_description": "adversaries may use an external proxy to act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, to provide resiliency in the face of connection loss, or to ride over existing trusted communications paths to avoid suspicion.",
                    "procedure_description": "muddywater has controlled powerstats from behind a proxy network to obfuscate the c2 location.[15] muddywater has used a series of compromised websites that victims connected to randomly to relay information to command and control (c2).[16][17]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1219",
                    "technique_link": "https://attack.mitre.org/techniques/T1219",
                    "technique_name": "remote access software",
                    "technique_description": "an adversary may use legitimate desktop support and remote access software, such as team viewer, anydesk, go2assist, logmein, ammyyadmin, etc, to establish an interactive command and control channel to target systems within networks. these services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment. remote access tools like vnc, ammyy, and teamviewer are used frequently when compared with other legitimate software commonly used by adversaries.",
                    "procedure_description": "muddywater has used a legitimate application, screenconnect, to manage systems remotely and move laterally.[20][21]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "muddywater has used web services including onehub to distribute remote access tools.[36]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "muddywater has used c2 infrastructure to receive exfiltrated data.[89]"
                }
            ]
        },
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
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};