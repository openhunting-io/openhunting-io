var threatdata = {
    "name": "Indrik Spider",
    "alias": "Indrik Spider, Gold Drake, Gold Winter, Evil Corp, UNC2165, DEV-0243, Manatee Tempest",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Indrik Spider",
        "names": [
            {
                "name": "Indrik Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Gold Drake",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Gold Winter",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Evil Corp",
                "name-giver": "self given"
            },
            {
                "name": "UNC2165",
                "name-giver": "Mandiant"
            },
            {
                "name": "DEV-0243",
                "name-giver": "Microsoft"
            },
            {
                "name": "Manatee Tempest",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Financial crime",
            "Financial gain"
        ],
        "first-seen": "2007",
        "description": "(CrowdStrike) Indrik Spider is a sophisticated eCrime group that has been operating Dridex since June 2014. In 2015 and 2016, Dridex was one of the most prolific eCrime banking  rojans on the market and, since 2014, those efforts are thought to have netted Indrik Spider millions of dollars in criminal profits. Throughout its years of operation, Dridex has received multiple updates with new modules developed and new anti-analysis features added to the malware.\n\nIn August 2017, a new ransomware variant identified as BitPaymer was reported to have ransomed the U.K.\u2019s National Health Service (NHS), with a high ransom demand of 53 BTC (approximately $200,000 USD). The targeting of an organization rather than individuals, and the high ransom demands, made BitPaymer stand out from other contemporary ransomware at the time. Though the encryption and ransom functionality of BitPaymer was not technically sophisticated, the malware contained multiple anti-analysis features that overlapped with Dridex. Later technical analysis of BitPaymer indicated that it had been developed by Indrik Spider, suggesting the group had expanded its criminal operation to include ransomware as a monetization strategy.\n\nIndrik Spider appears to be a subgroup of {{TA505, Graceful Spider, Gold Evergreen}}. In 2019, a subgroup of Indrik Spider split off into {{Doppel Spider}}.\n\nDridex has been observed to be distributed via Necurs (operated by {{Monty Spider}}) and Emotet (operated by {{Mummy Spider, TA542}}).",
        "observed-sectors": [
            "Financial",
            "Government",
            "Healthcare",
            "Media"
        ],
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "Advanced Port Scanner",
            "Babuk Locker",
            "BitPaymer",
            "Cobalt Strike",
            "Cridex",
            "Dridex",
            "EmpireProject",
            "Hades",
            "Macaw Locker",
            "MEGAsync",
            "Metasploit",
            "Mimikatz",
            "PayloadBIN",
            "Phoenix",
            "PowerSploit",
            "PsExec",
            "Raspberry Robin",
            "SocGholish",
            "WastedLoader",
            "WastedLocker"
        ],
        "operations": [
            {
                "date": "2017-08",
                "activity": "Several hospitals part of the NHS Lanarkshire board were hit on Friday by a version of the Bit Paymer ransomware.\nThe NHS Lanarkshire board includes hospitals such as Hairmyres Hospital in East Kilbride, Monklands Hospital in Airdrie and Wishaw General Hospital.\nhttps://www.bleepingcomputer.com/news/security/bit-paymer-ransomware-hits-scottish-hospitals/"
            },
            {
                "date": "2018-07",
                "activity": "BitPaymer Ransomware Paralyzes IT Systems of the Alaskan Town\nhttps://socprime.com/en/news/bitpaymer-ransomware-paralyzes-it-systems-of-the-alaskan-town/"
            },
            {
                "date": "2019-01",
                "activity": "Arizona Beverages knocked offline by ransomware attack\nhttps://techcrunch.com/2019/04/02/arizona-beverages-ransomware/"
            },
            {
                "date": "2019-05",
                "activity": "BitPaymer Ransomware Leveraging New Custom Packer Framework Against Targets Across the U.S.\nhttps://blog.morphisec.com/bitpaymer-ransomware-with-new-custom-packer-framework"
            },
            {
                "date": "2019-08",
                "activity": "Apple Zero-Day Exploited in New BitPaymer Campaign\nhttps://blog.morphisec.com/apple-zero-day-exploited-in-bitpaymer-campaign"
            },
            {
                "date": "2019-10",
                "activity": "Pilz, one of the world's largest producers of automation tools, has been down for more than a week after suffering a ransomware infection.\nhttps://www.zdnet.com/article/major-german-manufacturer-still-down-a-week-after-getting-hit-by-ransomware/"
            },
            {
                "date": "2019-11",
                "activity": "Everis, an NTT DATA company and one of Spain's largest managed service providers (MSP), had its computer systems encrypted today in a ransomware attack, just as it happened to Spain's largest radio station Cadena SER (Sociedad Espa\u00f1ola de Radiodifusi\u00f3n).\nhttps://www.bleepingcomputer.com/news/security/ransomware-attacks-hit-everis-and-spains-largest-radio-network/"
            },
            {
                "date": "2020-05",
                "activity": "WastedLocker: A New Ransomware Variant Developed By The Evil Corp Group\nhttps://research.nccgroup.com/2020/06/23/wastedlocker-a-new-ransomware-variant-developed-by-the-evil-corp-group/"
            },
            {
                "date": "2020-07",
                "activity": "Garmin services and production go down after ransomware attack\nhttps://www.zdnet.com/article/garmin-services-and-production-go-down-after-ransomware-attack/"
            },
            {
                "date": "2020-12",
                "activity": "INDRIK SPIDER Supersedes WastedLocker with Hades Ransomware to Circumvent OFAC Sanctions\nhttps://www.crowdstrike.com/blog/hades-ransomware-successor-to-indrik-spiders-wastedlocker/"
            },
            {
                "date": "2021-03",
                "activity": "Insurance giant CNA hit by new Phoenix CryptoLocker ransomware\nhttps://www.bleepingcomputer.com/news/security/insurance-giant-cna-hit-by-new-phoenix-cryptolocker-ransomware/"
            },
            {
                "date": "2021-05",
                "activity": "RIG Exploit Kit delivers WastedLoader malware\nhttps://www.bitdefender.com/files/News/CaseStudies/study/397/Bitdefender-PR-Whitepaper-RIG-creat5362-en-EN.pdf"
            },
            {
                "date": "2021-06",
                "activity": "New Evil Corp ransomware mimics PayloadBin gang to evade US sanctions\nhttps://www.bleepingcomputer.com/news/security/new-evil-corp-ransomware-mimics-payloadbin-gang-to-evade-us-sanctions/"
            },
            {
                "date": "2021-09",
                "activity": "Trucking giant Forward Air reports ransomware data breach\nhttps://www.bleepingcomputer.com/news/security/trucking-giant-forward-air-reports-ransomware-data-breach/"
            },
            {
                "date": "2021-10",
                "activity": "Sinclair Broadcast Hack Linked to Notorious Russian Cybergang\nhttps://www.bloomberg.com/news/articles/2021-10-20/sinclair-broadcast-hack-linked-to-notorious-russian-cybergang"
            },
            {
                "date": "2021-10",
                "activity": "Olympus US systems hit by cyberattack over the weekend\nhttps://www.bleepingcomputer.com/news/security/olympus-us-systems-hit-by-cyberattack-over-the-weekend/"
            },
            {
                "date": "2021-12",
                "activity": "Dridex malware trolls employees with fake job termination emails\nhttps://www.bleepingcomputer.com/news/security/dridex-malware-trolls-employees-with-fake-job-termination-emails/"
            },
            {
                "date": "2021-12",
                "activity": "Dridex Omicron phishing taunts with funeral helpline number\nhttps://www.bleepingcomputer.com/news/security/dridex-omicron-phishing-taunts-with-funeral-helpline-number/"
            }
        ],
        "counter-operations": [
            {
                "date": "2015-10",
                "activity": "In the fall of 2015, the Dell SecureWorks Counter Threat Unit (CTU) research team collaborated with the UK National Crime Agency (NCA), the U.S. Federal Bureau of Investigation (FBI), and the Shadowserver Foundation to take over the Dridex banking trojan.\nhttps://www.secureworks.com/research/dridex-bugat-v5-botnet-takeover-operation"
            },
            {
                "date": "2019-12",
                "activity": "Russian National Charged with Decade-Long Series of Hacking and Bank Fraud Offenses Resulting in Tens of Millions in Losses and Second Russian National Charged with Involvement in Deployment of \u201cBugat\u201d Malware\nhttps://www.justice.gov/opa/pr/russian-national-charged-decade-long-series-hacking-and-bank-fraud-offenses-resulting-tens"
            },
            {
                "date": "2019-12",
                "activity": "Treasury Sanctions Evil Corp, the Russia-Based Cybercriminal Group Behind Dridex Malware\nhttps://home.treasury.gov/news/press-releases/sm845"
            }
        ],
        "information": [
            "https://www.crowdstrike.com/blog/big-game-hunting-the-evolution-of-indrik-spider-from-dridex-wire-fraud-to-bitpaymer-targeted-ransomware/",
            "https://www.welivesecurity.com/2018/01/26/friedex-bitpaymer-ransomware-work-dridex-authors/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/spanish-mssp-targeted-by-bitpaymer-ransomware/",
            "https://www.us-cert.gov/ncas/alerts/aa19-339a",
            "https://blog.truesec.com/2021/05/05/are-the-notorious-cyber-criminals-evil-corp-actually-russian-spies/",
            "https://www.secureworks.com/research/threat-profiles/gold-winter",
            "https://www.mandiant.com/resources/unc2165-shifts-to-evade-sanctions"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0119/"
        ],
        "uuid": "a13e6ede-eb86-499f-837e-820845da04a6",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "indrik_spider",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://www.secureworks.com/research/threat-profiles/gold-drake",
            "date": "2021",
            "organization": "",
            "author": "SecureWorks",
            "title": "Threat Profile: GOLD DRAKE",
            "categories": [
                "Cobalt Strike",
                "Dridex",
                "FriedEx",
                "Koadic",
                "MimiKatz",
                "WastedLocker",
                "Evil Corp"
            ]
        },
        {
            "data_url": "https://en.wikipedia.org/wiki/Maksim_Yakubets",
            "date": "2020-10-03",
            "organization": "Wikipedia",
            "author": "Wikpedia",
            "title": "Wikipedia Page: Maksim Yakubets",
            "categories": [
                "Dridex",
                "Feodo",
                "Evil Corp"
            ]
        },
        {
            "data_url": "https://www.bbc.com/news/world-us-canada-53195749",
            "date": "2020-06-26",
            "organization": "BBC",
            "author": "BBC News",
            "title": "Russian hacker group Evil Corp targets US workers at home",
            "categories": [
                "WastedLocker",
                "Evil Corp"
            ]
        },
        {
            "data_url": "https://krebsonsecurity.com/2019/12/inside-evil-corp-a-100m-cybercrime-menace/",
            "date": "2019-12-19",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Inside \u2018Evil Corp,\u2019 a $100M Cybercrime Menace",
            "categories": [
                "Dridex",
                "Gameover P2P",
                "Zeus",
                "Evil Corp"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/dridex-bugat-v5-botnet-takeover-operation",
            "date": "2015-10-13",
            "organization": "Secureworks",
            "author": "Brett Stone-Gross",
            "title": "Dridex (Bugat v5) Botnet Takeover Operation",
            "categories": [
                "Dridex",
                "Evil Corp"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "indrik spider",
            "procedure_code": "g0119",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0119",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1584.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1584/004",
                    "technique_name": "compromise infrastructure : server",
                    "technique_description": "adversaries may compromise third-party servers that can be used during targeting. use of servers allows an adversary to stage, launch, and execute an operation. during post-compromise activity, adversaries may utilize servers for various tasks, including for command and control. instead of purchasing a server or virtual private server, adversaries may compromise third-party servers in support of operations.",
                    "procedure_description": "indrik spider has served fake updates via legitimate websites that have been compromised.[4]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "indrik spider has collected credentials from infected systems, including domain accounts.[9]"
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
                    "procedure_description": "indrik spider has used powershell empire for execution of malware.[120][121]"
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
                    "procedure_description": "indrik spider has used batch scripts on victim's machines.[163]"
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
                    "procedure_description": "indrik spider has used malicious javascript files for several components of their attack.[41]"
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
                    "procedure_description": "indrik spider has attempted to get users to click on a malicious zipped file.[116]"
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
                    "procedure_description": "indrik spider has used wmic to execute commands on remote computers.[61]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136",
                    "technique_link": "https://attack.mitre.org/techniques/T1136",
                    "technique_name": "create account",
                    "technique_description": "adversaries may create an account to maintain access to victim systems. with a sufficient level of access, creating such accounts may be used to establish secondary credentialed access that do not require persistent remote access tools to be deployed on the system.",
                    "procedure_description": "indrik spider used wmic.exe to add a new user to the system.[2]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "indrik spider has collected credentials from infected systems, including domain accounts.[9]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1484.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1484/001",
                    "technique_name": "domain policy modification : group policy modification",
                    "technique_description": "adversaries may modify group policy objects (gpos) to subvert the intended discretionary access controls for a domain, usually with the intention of escalating privileges on the domain. group policy allows for centralized management of user and computer settings in active directory (ad). gpos are containers for group policy settings made up of files stored within a predictable network path \\<domain>\\sysvol\\<domain>\\policies\\.",
                    "procedure_description": "indrik spider has used group policy objects to deploy batch scripts.[12]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "indrik spider has collected credentials from infected systems, including domain accounts.[9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1484.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1484/001",
                    "technique_name": "domain policy modification : group policy modification",
                    "technique_description": "adversaries may modify group policy objects (gpos) to subvert the intended discretionary access controls for a domain, usually with the intention of escalating privileges on the domain. group policy allows for centralized management of user and computer settings in active directory (ad). gpos are containers for group policy settings made up of files stored within a predictable network path \\<domain>\\sysvol\\<domain>\\policies\\.",
                    "procedure_description": "indrik spider has used group policy objects to deploy batch scripts.[12]"
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
                    "procedure_description": "indrik spider used psexec to leverage windows defender to disable scanning of all downloaded files and to restrict real-time monitoring.[44]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/001",
                    "technique_name": "indicator removal : clear windows event logs",
                    "technique_description": "adversaries may clear windows event logs to hide the activity of an intrusion. windows event logs are a record of a computer's alerts and notifications. there are three system-defined sources of events: system, application, and security, with five event types: error, warning, information, success audit, and failure audit.",
                    "procedure_description": "indrik spider has used cobalt strike to empty log files.[20]"
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
                    "procedure_description": "indrik spider used fake updates for flashplayer plugin and google chrome as initial infection vectors.[74]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1078.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1078/002",
                    "technique_name": "valid accounts : domain accounts",
                    "technique_description": "adversaries may obtain and abuse credentials of a domain account as a means of gaining initial access, persistence, privilege escalation, or defense evasion. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover users, administrators, and services.",
                    "procedure_description": "indrik spider has collected credentials from infected systems, including domain accounts.[9]"
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
                    "procedure_description": "indrik spider used cobalt strike to carry out credential dumping using procdump.[39]"
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
                    "procedure_description": "indrik spider has used powerview to enumerate all windows server, windows server 2003, and windows 7 instances in the active directory database.[49]"
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
                    "procedure_description": "indrik spider has used the win32_service wmi class to retrieve a list of services from the system.[28]"
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
                    "procedure_description": "indrik spider has stored collected date in a .tmp file.[40]"
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
                    "procedure_description": "indrik spider has downloaded additional scripts, malware, and tools onto a compromised host.[224][225]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1486",
                    "technique_link": "https://attack.mitre.org/techniques/T1486",
                    "technique_name": "data encrypted for impact",
                    "technique_description": "adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. they can attempt to render stored data inaccessible by encrypting files or data on local and remote drives and withholding access to a decryption key. this may be done in order to extract monetary compensation from a victim in exchange for decryption or a decryption key (ransomware) or to render data permanently inaccessible in cases where the key is not saved or transmitted.",
                    "procedure_description": "indrik spider has encrypted domain-controlled systems using bitpaymer.[20]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1489",
                    "technique_link": "https://attack.mitre.org/techniques/T1489",
                    "technique_name": "service stop",
                    "technique_description": "adversaries may stop or disable services on a system to render those services unavailable to legitimate users. stopping critical services or processes can inhibit or stop response to an incident or aid in the adversary's overall objectives to cause damage to the environment.",
                    "procedure_description": "indrik spider has used psexec to stop services prior to the execution of ransomware.[21]"
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
        }
    ]
};