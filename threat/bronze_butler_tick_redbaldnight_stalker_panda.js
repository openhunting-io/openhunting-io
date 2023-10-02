var threatdata = {
    "name": "Bronze Butler, Tick, RedBaldNight, Stalker Panda",
    "alias": "Bronze Butler, CTG-2006, Tick, TEMP.Tick, RedBaldNight, Stalker Panda",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Bronze Butler, Tick, RedBaldNight, Stalker Panda",
        "names": [
            {
                "name": "Bronze Butler",
                "name-giver": "SecureWorks"
            },
            {
                "name": "CTG-2006",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Tick",
                "name-giver": "Symantec"
            },
            {
                "name": "TEMP.Tick",
                "name-giver": "FireEye"
            },
            {
                "name": "RedBaldNight",
                "name-giver": "Trend Micro"
            },
            {
                "name": "Stalker Panda",
                "name-giver": "Crowdstrike"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, National University of Defense and Technology",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2006",
        "description": "(SecureWorks) CTU analysis indicates that Bronze Butler primarily targets organizations located in Japan. The threat group has sought unauthorized access to networks of organizations associated with critical infrastructure, heavy industry, manufacturing, and international relations. Secureworks analysts have observed Bronze Bulter exfiltrating the following categories of data:\n\n\u2022 Intellectual property related to technology and development\n\u2022 Product specification\n\u2022 Sensitive business and sales-related information\n\u2022 Network and system configuration files\n\u2022 Email messages and meeting minutes\n\nThe focus on intellectual property, product details, and corporate information suggests that the group seeks information that they believe might be of value to competing organizations. The diverse targeting suggests that Bronze Bulter may be tasked by multiple teams or organizations with varying priorities.",
        "observed-sectors": [
            "Critical infrastructure",
            "Defense",
            "Engineering",
            "Government",
            "High-Tech",
            "Industrial",
            "Manufacturing",
            "Media",
            "Technology",
            "International relations"
        ],
        "observed-countries": [
            "China",
            "Hong Kong",
            "Japan",
            "Russia",
            "Singapore",
            "South Korea",
            "Taiwan",
            "USA"
        ],
        "tools": [
            "9002 RAT",
            "8.t Dropper",
            "Blogspot",
            "Daserf",
            "Datper",
            "Elirks",
            "Gh0st RAT",
            "gsecdump",
            "HomamDownloader",
            "Lilith RAT",
            "Mimikatz",
            "Minzen",
            "rarstar",
            "ShadowPad Winnti",
            "SymonLoader",
            "Windows Credentials Editor"
        ],
        "operations": [
            {
                "date": "2015-07",
                "activity": "Symantec discovered the most recent wave of Tick attacks in July 2015, when the group compromised three different Japanese websites with a Flash (.swf) exploit to mount watering hole attacks. Visitors to these websites were infected with a downloader known as Gofarer (Downloader.Gofarer). Gofarer collects information about the compromised computer and then downloads and installs Daserf.\nhttps://www.symantec.com/connect/blogs/tick-cyberespionage-group-zeros-japan"
            },
            {
                "date": "2017-04",
                "activity": "Wali is a backdoor used for targeted attacks. It gathers information about the compromised machines and their networks, in addition to stealing sensitive information and credentials. Wali\u2019s operators use this information to move laterally in an organization and compromise more machines.\nhttps://www.cybereason.com/blog/labs-shadowwali-new-variant-of-the-xxmm-family-of-backdoors"
            },
            {
                "date": "2017-11",
                "activity": "Daserf\u2019s infection chain accordingly evolved, as shown below. It has several methods for infecting its targets of interest: spear phishing emails, watering hole attacks, and exploiting a remote code execution vulnerability (CVE-2016-7836, patched last March 2017) in SKYSEA Client View, an IT asset management software widely used in Japan.\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/redbaldknight-bronze-butler-daserf-backdoor-now-using-steganography/"
            },
            {
                "date": "2018-06",
                "activity": "Tick Group Weaponized Secure USB Drives to Target Air-Gapped Critical Systems\nhttps://unit42.paloaltonetworks.com/unit42-tick-group-weaponized-secure-usb-drives-target-air-gapped-critical-systems/"
            },
            {
                "date": "2019",
                "activity": "Operation \u201cENDTRADE\u201d\nBy the first half of 2019, we found that the group was able to zero in on specific industries in Japan from which it could steal proprietary information and classified data. We named this campaign \u201cOperation ENDTRADE,\u201d based on its targets.\nhttps://documents.trendmicro.com/assets/pdf/Operation-ENDTRADE-TICK-s-Multi-Stage-Backdoors-for-Attacking-Industries-and-Stealing-Classified-Data.pdf"
            },
            {
                "date": "2019-06",
                "activity": "Breach of Mitsubishi Electric\nhttps://www.zdnet.com/article/mitsubishi-electric-discloses-security-breach-china-is-main-suspect/"
            },
            {
                "date": "2021-02",
                "activity": "Exchange servers under siege from at least 10 APT groups\nhttps://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/"
            },
            {
                "date": "2021-03",
                "activity": "The slow Tick\u2011ing time bomb: Tick APT group compromise of a DLP software developer in East Asia\nhttps://www.welivesecurity.com/2023/03/14/slow-ticking-time-bomb-tick-apt-group-dlp-software-developer-east-asia/\nhttps://asec.ahnlab.com/en/51340/"
            }
        ],
        "counter-operations": [
            {
                "date": "2021-04",
                "activity": "Tokyo police referred a Chinese man, who is a member of the Chinese Communist Party, to prosecutors Tuesday over his alleged involvement in the cyberattacks, they said.\nhttps://www.japantimes.co.jp/news/2021/04/20/national/chinese-military-japan-cyberattacks/"
            }
        ],
        "information": [
            "https://www.secureworks.com/research/bronze-butler-targets-japanese-businesses",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/redbaldknight-bronze-butler-daserf-backdoor-now-using-steganography/",
            "https://unit42.paloaltonetworks.com/unit42-tick-group-continues-attacks/",
            "https://blog.talosintelligence.com/2018/10/tracking-tick-through-recent-campaigns.html",
            "https://wikileaks.org/vault7/document/2015-08-20150814-256-CSIR-15005-Stalker-Panda/2015-08-20150814-256-CSIR-15005-Stalker-Panda.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0060/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=tick"
        ],
        "uuid": "334d9e0e-dab2-4bc5-8db2-5ab016f36947",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bronze_butler_tick_redbaldnight_stalker_panda",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/stalkertaurus/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Stalker Taurus",
            "categories": [
                "Tick"
            ]
        },
        {
            "data_url": "https://twitter.com/iiyonite/status/1384431491485155331",
            "date": "2021-04-20",
            "organization": "Twitter (@iiyonite)",
            "author": "Stefan Soesanto",
            "title": "Tweet on Uniti 61419",
            "categories": [
                "Tick"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/",
            "date": "2021-03-10",
            "organization": "ESET Research",
            "author": "Thomas Dupuy",
            "title": "Exchange servers under siege from at least 10 APT groups",
            "categories": [
                "Microcin",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT27",
                "APT41",
                "Calypso",
                "Tick",
                "ToddyCat",
                "Tonto Team",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-butler",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE BUTLER",
            "categories": [
                "Daserf",
                "xxmm",
                "Tick"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/bronze-butler",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Bronze Butler",
            "categories": [
                "Tick"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0060/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Group description: BRONZE BUTLER",
            "categories": [
                "Tick"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/redbaldknight-bronze-butler-daserf-backdoor-now-using-steganography/",
            "date": "2017-11-07",
            "organization": "Trend Micro",
            "author": "Joey Chen",
            "title": "REDBALDKNIGHT/BRONZE BUTLER\u2019s Daserf Backdoor Now Using Steganography",
            "categories": [
                "Tick"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/bronze-butler-targets-japanese-businesses",
            "date": "2017-10-12",
            "organization": "Secureworks",
            "author": "CTU Research Team",
            "title": "BRONZE BUTLER Targets Japanese Enterprises",
            "categories": [
                "Daserf",
                "Datper",
                "rarstar",
                "xxmm",
                "Tick"
            ]
        },
        {
            "data_url": "http://blog.jpcert.or.jp/2017/08/detecting-datper-malware-from-proxy-logs.html",
            "date": "2017-08-21",
            "organization": "JPCERT/CC",
            "author": "Yu Nakamura",
            "title": "Detecting Datper Malware from Proxy Logs",
            "categories": [
                "Datper",
                "Tick"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/07/unit42-tick-group-continues-attacks/",
            "date": "2017-07-25",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kaoru Hayashi",
            "title": "\u201cTick\u201d Group Continues Attacks",
            "categories": [
                "Daserf",
                "Tick"
            ]
        },
        {
            "data_url": "https://www.secureworks.jp/resources/rp-bronze-butler",
            "date": "2017-06-28",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "\u65e5\u672c\u4f01\u696d\u3092\u72d9\u3046\u9ad8\u5ea6\u306a\u30b5\u30a4\u30d0\u30fc\u653b\u6483\u306e\u5168\u8c8c \u2013 BRONZE BUTLER",
            "categories": [
                "Tick"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/tick-cyberespionage-group-zeros-japan",
            "date": "2016-04-28",
            "organization": "Symantec",
            "author": "Jon DiMaggio",
            "title": "Tick cyberespionage group zeros in on Japan",
            "categories": [
                "Tick"
            ]
        },
        {
            "data_url": "https://wikileaks.org/vault7/document/2015-08-20150814-256-CSIR-15005-Stalker-Panda/2015-08-20150814-256-CSIR-15005-Stalker-Panda.pdf",
            "date": "2015-08-14",
            "organization": "Raytheon Blackbird Technologies",
            "author": "Raytheon Blackbird Technologies",
            "title": "Stalker Panda",
            "categories": [
                "Tick"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "bronze butler",
            "procedure_code": "g0060",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0060",
            "techniques": [
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
                    "procedure_description": "bronze butler has obtained and used open-source tools such as mimikatz, gsecdump, and windows credential editor.[25]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1189",
                    "technique_link": "https://attack.mitre.org/techniques/T1189",
                    "technique_name": "drive-by compromise",
                    "technique_description": "adversaries may gain access to a system through a user visiting a website over the normal course of browsing. with this technique, the user's web browser is typically targeted for exploitation, but adversaries may also use compromised websites for non-exploitation behavior such as acquiring application access token.",
                    "procedure_description": "bronze butler compromised three japanese websites using a flash exploit to perform watering hole attacks.[17]"
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
                    "procedure_description": "bronze butler used spearphishing emails with malicious microsoft word attachments to infect victims.[48][49]"
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
                    "procedure_description": "bronze butler has used powershell for execution.[40]"
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
                    "procedure_description": "bronze butler has used batch scripts and the command-line interface for execution.[55]"
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
                    "procedure_description": "bronze butler has used vbs and vbe scripts for execution.[20][21]"
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
                    "procedure_description": "bronze butler has made use of python-based remote access tools.[6]"
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
                    "procedure_description": "bronze butler has exploited microsoft office vulnerabilities cve-2014-4114, cve-2018-0802, and cve-2018-0798 for execution.[28][29]"
                },
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
                    "procedure_description": "bronze butler has used at to register a scheduled task to execute malware during lateral movement.[5]"
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
                    "procedure_description": "bronze butler has used schtasks to register a scheduled task to execute malware during lateral movement.[32]"
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
                    "procedure_description": "bronze butler has attempted to get users to launch malicious microsoft word attachments delivered via spearphishing emails.[46][47]"
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
                    "procedure_description": "bronze butler has used a batch script that adds a registry run key to establish malware persistence.[50]"
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
                    "procedure_description": "bronze butler has used legitimate applications to side-load malicious dlls.[13]"
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
                    "procedure_description": "bronze butler has used at to register a scheduled task to execute malware during lateral movement.[5]"
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
                    "procedure_description": "bronze butler has used schtasks to register a scheduled task to execute malware during lateral movement.[32]"
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
                    "procedure_description": "bronze butler has used a windows 10 specific tool and xxmm to bypass uac for privilege escalation.[18][19]"
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
                    "procedure_description": "bronze butler has used a batch script that adds a registry run key to establish malware persistence.[50]"
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
                    "procedure_description": "bronze butler has used legitimate applications to side-load malicious dlls.[13]"
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
                    "procedure_description": "bronze butler has used at to register a scheduled task to execute malware during lateral movement.[5]"
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
                    "procedure_description": "bronze butler has used schtasks to register a scheduled task to execute malware during lateral movement.[32]"
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
                    "procedure_description": "bronze butler has used a windows 10 specific tool and xxmm to bypass uac for privilege escalation.[18][19]"
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
                    "procedure_description": "bronze butler downloads encoded payloads and decodes them on the victim.[38]"
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
                    "procedure_description": "bronze butler has used legitimate applications to side-load malicious dlls.[13]"
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
                    "procedure_description": "bronze butler has incorporated code into several tools that attempts to terminate anti-virus processes.[17]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "the bronze butler uploader or malware the uploader uses command to delete the rar archives after they have been exfiltrated.[33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "bronze butler has masked executables with document file icons including word and adobe pdf.[7]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/002",
                    "technique_name": "masquerading : right-to-left override",
                    "technique_description": "adversaries may abuse the right-to-left override (rtlo or rlo) character (u+202e) to disguise a string and/or file name to make it appear benign. rtlo is a non-printing unicode character that causes the text that follows it to be displayed in reverse. for example, a windows screensaver executable named march 25 \\u202excod.scr will display as march 25 rcs.docx. a javascript file named photo_high_re\\u202egnp.js will be displayed as photo_high_resj.png.",
                    "procedure_description": "bronze butler has used right-to-left override to deceive victims into executing several strains of malware.[5]"
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
                    "procedure_description": "bronze butler has given malware the same name as an existing file on the file share server to cause users to unwittingly launch and install the malware on additional systems.[28]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "bronze butler downloader code has included \"0\" characters at the end of the file to inflate the file size in a likely attempt to evade anti-virus detection.[8][9]"
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
                    "procedure_description": "bronze butler has used steganography in multiple operations to conceal malicious payloads.[3]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1550.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/003",
                    "technique_name": "use alternate authentication material : pass the ticket",
                    "technique_description": "adversaries may \"pass the ticket\" using stolen kerberos tickets to move laterally within an environment, bypassing normal system access controls. pass the ticket (ptt) is a method of authenticating to a system using kerberos tickets without having access to an account's password. kerberos authentication can be used as the first step to lateral movement to a remote system.",
                    "procedure_description": "bronze butler has created forged kerberos ticket granting ticket (tgt) and ticket granting service (tgs) tickets to maintain administrative access.[7]"
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
                    "procedure_description": "bronze butler has used various tools (such as mimikatz and wce) to perform credential dumping.[21]"
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
                    "procedure_description": "bronze butler has used net user /domain to identify account information.[12]"
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
                    "procedure_description": "bronze butler has collected a list of files from the victim and uploaded it to its c2 server, and then created a new list of specific files to steal.[64]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "bronze butler typically use ping and net to enumerate systems.[22]"
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
                    "procedure_description": "bronze butler has used tools to enumerate software installed on an infected host.[2]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "bronze butler has used troj_getversion to discover system services.[8]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "bronze butler has used net time to check the local time on a target system.[17]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1080",
                    "technique_link": "https://attack.mitre.org/techniques/T1080",
                    "technique_name": "taint shared content",
                    "technique_description": "adversaries may deliver payloads to remote systems by adding content to shared storage locations, such as network drives or internal code repositories. content stored on network drives or in other shared locations may be tainted by adding malicious programs, scripts, or exploit code to otherwise valid files. once a user opens the shared tainted content, the malicious portion can be executed to run the adversary's code on a remote system. adversaries may use tainted shared content to move laterally.",
                    "procedure_description": "bronze butler has placed malware on file shares and given it the same name as legitimate documents on the share.[2]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1550.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1550/003",
                    "technique_name": "use alternate authentication material : pass the ticket",
                    "technique_description": "adversaries may \"pass the ticket\" using stolen kerberos tickets to move laterally within an environment, bypassing normal system access controls. pass the ticket (ptt) is a method of authenticating to a system using kerberos tickets without having access to an account's password. kerberos authentication can be used as the first step to lateral movement to a remote system.",
                    "procedure_description": "bronze butler has created forged kerberos ticket granting ticket (tgt) and ticket granting service (tgs) tickets to maintain administrative access.[7]"
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
                    "procedure_description": "bronze butler has compressed data into password-protected rar archives prior to exfiltration.[13][14]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "bronze butler has exfiltrated files stolen from local systems.[30]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1039",
                    "technique_link": "https://attack.mitre.org/techniques/T1039",
                    "technique_name": "data from network shared drive",
                    "technique_description": "adversaries may search network shares on computers they have compromised to find files of interest. sensitive data can be collected from remote systems via shared network drives (host shared directory, network file server, etc.) that are accessible from the current system prior to exfiltration. interactive command shells may be in use, and common functionality within cmd may be used to gather information.",
                    "procedure_description": "bronze butler has exfiltrated files stolen from file shares.[3]"
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
                    "procedure_description": "bronze butler has used a tool to capture screenshots.[27][28]"
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
                    "procedure_description": "bronze butler malware has used http for c2.[46]"
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
                    "procedure_description": "several bronze butler tools encode data with base64 when posting it to a c2 server.[15]"
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
                    "procedure_description": "bronze butler has used rc4 encryption (for datper malware) and aes (for xxmm malware) to obfuscate http traffic. bronze butler has also used a tool called rarstar that encodes data with a custom xor algorithm when posting it to a c2 server.[20]"
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
                    "procedure_description": "bronze butler has used various tools to download files, including dget (a similar tool to wget).[77]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/001",
                    "technique_name": "web service : dead drop resolver",
                    "technique_description": "adversaries may use an existing, legitimate external web service to host information that points to additional command and control (c2) infrastructure. adversaries may post content, known as a dead drop resolver, on web services with embedded (and often obfuscated/encoded) domains or ip addresses. once infected, victims will reach out to and be redirected by these resolvers.",
                    "procedure_description": "bronze butler's msget downloader uses a dead drop resolver to access malicious payloads.[8]"
                }
            ]
        }
    ]
};