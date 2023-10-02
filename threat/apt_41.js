var threatdata = {
    "name": "APT 41",
    "alias": "APT 41, Double Dragon, TG-2633, Bronze Atlas, Red Kelpie, Blackfly, Earth Baku, SparklingGoblin, Grayfly",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-05",
    "all_data": {
        "actor": "APT 41",
        "names": [
            {
                "name": "APT 41",
                "name-giver": "FireEye"
            },
            {
                "name": "Double Dragon",
                "name-giver": "FireEye"
            },
            {
                "name": "TG-2633",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Bronze Atlas",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Red Kelpie",
                "name-giver": "PWC"
            },
            {
                "name": "Blackfly",
                "name-giver": "Symantec"
            },
            {
                "name": "Earth Baku",
                "name-giver": "Trend Micro"
            },
            {
                "name": "SparklingGoblin",
                "name-giver": "ESET"
            },
            {
                "name": "Grayfly",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Financial crime",
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "(FireEye) FireEye Threat Intelligence assesses with high confidence that APT41 is a prolific cyber threat group that carries out Chinese state-sponsored espionage activity in addition to financially motivated activity potentially outside of state control. Activity traces back to 2012 when individual members of APT41 conducted primarily financially motivated operations focused on the video game industry before expanding into likely state-sponsored activity. This is remarkable because explicit financially motivated targeting is unusual among Chinese state-sponsored threat groups, and evidence suggests these two motivations were balanced concurrently from 2014 onward.\n\n\u2022 APT41 overlaps at least partically with public reporting on group including {{Barium}} and {{Winnti Group, Blackfly, Wicked Panda}}. In some cases the primary observed similarity in the publicly reported Winnti activity was the use of the same malware \u2013 including HIGHNOON \u2013 across otherwise separate clusters of activity.\n\u2022 Previous FireEye Threat Intelligence reporting on the use of HIGHNOON and related activity was grouped together under both {{Ke3chang, Vixen Panda, APT 15, GREF, Playful Dragon}} and Mana, although we now understand this to be the work of several Chinese cyber espionage groups that share tools and digital certificates.\n\u2022 APT41 reflects our current understanding of what was previously reported as GREF, as well as additional indicators and activity gathered during our extensive review of our intelligence holdings.\n\nAPT 41 has 1 subgroup:\n1. {{Subgroup: Earth Longzhi}}\n\nAlso see {{Earth Lusca}} and {{RedGolf}}.",
        "observed-sectors": [
            "Construction",
            "Defense",
            "Education",
            "Energy",
            "Financial",
            "Government",
            "Healthcare",
            "High-Tech",
            "Hospitality",
            "Manufacturing",
            "Media",
            "Oil and gas",
            "Petrochemical",
            "Pharmaceutical",
            "Retail",
            "Telecommunications",
            "Transportation",
            "Online video game companies"
        ],
        "observed-countries": [
            "Australia",
            "Bahrain",
            "Brazil",
            "Canada",
            "Chile",
            "Denmark",
            "Finland",
            "France",
            "Georgia",
            "Hong Kong",
            "India",
            "Indonesia",
            "Italy",
            "Japan",
            "Malaysia",
            "Mexico",
            "Myanmar",
            "Netherlands",
            "Pakistan",
            "Philippines",
            "Poland",
            "Qatar",
            "Saudi Arabia",
            "Singapore",
            "South Korea",
            "South Africa",
            "Sri Lanka",
            "Sweden",
            "Switzerland",
            "Taiwan",
            "Thailand",
            "Turkey",
            "UAE",
            "UK",
            "USA",
            "Vietnam"
        ],
        "tools": [
            "9002 RAT",
            "AceHash",
            "ADORE.XSEC",
            "ASPXSpy",
            "Barlaiy",
            "BIOPASS RAT",
            "BlackCoffee",
            "certutil",
            "China Chopper",
            "Cobalt Strike",
            "COLDJAVA",
            "Crackshot",
            "CrossWalk",
            "DBoxAgent",
            "DEADEYE",
            "DEPLOYLOG",
            "Derusbi",
            "DIRTCLEANER",
            "DragonEgg",
            "EasyNight",
            "FunnySwitch",
            "GearShift",
            "Gh0st RAT",
            "HDRoot",
            "HighNoon",
            "HighNote",
            "HKDOOR",
            "HUI Loader",
            "Jumpall",
            "KEYPLUG",
            "LATELUNCH",
            "LIFEBOAT",
            "Lowkey",
            "MessageTap",
            "Meterpreter",
            "Mimikatz",
            "MoonBounce",
            "njRAT",
            "NTDSDump",
            "PACMAN",
            "PipeMon",
            "PlugX",
            "POTROAST",
            "PRIVATELOG",
            "pwdump",
            "RedXOR",
            "ROCKBOOT",
            "SAGEHIRE",
            "SerialVlogger",
            "ShadowHammer",
            "ShadowPad Winnti",
            "SideWalk",
            "Skip-2.0",
            "SPARKLOG",
            "Speculoos",
            "Spyder",
            "STASHLOG",
            "SWEETCANDLE",
            "TERA",
            "TIDYELF",
            "WIDETONE",
            "WINNKIT",
            "Winnti",
            "WINTERLOVE",
            "WyrmSpy",
            "xDll",
            "XDOOR",
            "XMRig",
            "ZXShell",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2016 Autumn",
                "activity": "Breach of TeamViewer\nhttps://www.bleepingcomputer.com/news/security/teamviewer-confirms-undisclosed-breach-from-2016/"
            },
            {
                "date": "2017-07",
                "activity": "ShadowPad is one of the largest known supply-chain attacks. Had it not been detected and patched so quickly, it could potentially have targeted hundreds of organizations worldwide.\nhttps://www.kaspersky.com/about/press-releases/2017_shadowpad-how-attackers-hide-backdoor-in-software-used-by-hundreds-of-large-companies-around-the-world"
            },
            {
                "date": "2018-06",
                "activity": "Operation \u201cShadowHammer\u201d\nA supply-chain attack dubbed \u201cOperation ShadowHammer\u201d has been uncovered, targeting users of the ASUS Live Update Utility with a backdoor injection. The China-backed BARIUM APT is suspected to be at the helm of the project.\nAccording to Kaspersky Lab, the campaign ran from June to at least November 2018 and may have impacted more than a million users worldwide \u2013 though the adversaries appear to have been after specific victims in Asia.\nhttps://threatpost.com/asus-pc-backdoors-shadowhammer/143129/"
            },
            {
                "date": "2019",
                "activity": "Operation \u201cCuckooBees\u201d\nCybereason Uncovers Massive Chinese Intellectual Property Theft Operation\nhttps://www.cybereason.com/blog/operation-cuckoobees-cybereason-uncovers-massive-chinese-intellectual-property-theft-operation\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/spyder-loader-cuckoobees-hong-kong"
            },
            {
                "date": "2019-03",
                "activity": "Although the malware uses different configurations in each case, the three affected software products included the same backdoor code and were launched using the same mechanism. While two of the compromised products no longer include the backdoor, one of the affected developers is still distributing the trojanized version: ironically, the game is named Infestation, and is produced by Thai developer Electronics Extreme.\nhttps://www.welivesecurity.com/2019/03/11/gaming-industry-scope-attackers-asia/"
            },
            {
                "date": "2019-04",
                "activity": "In April 2019, FireEye\u2019s Managed Defense team identified suspicious activity on a publicly-accessible web server at a U.S.-based research university. This activity, indicated that the attackers were exploiting CVE-2019-3396, a vulnerability in Atlassian Confluence Server that allowed for path traversal and remote code execution.\nhttps://www.fireeye.com/blog/threat-research/2019/08/game-over-detecting-and-stopping-an-apt41-operation.html"
            },
            {
                "date": "2019-08",
                "activity": "APT41\u2019s newest espionage tool, MESSAGETAP, was discovered during a 2019 investigation at a telecommunications network provider within a cluster of Linux servers. Specifically, these Linux servers operated as Short Message Service Center (SMSC) servers.\nhttps://www.fireeye.com/blog/threat-research/2019/10/messagetap-who-is-reading-your-text-messages.html"
            },
            {
                "date": "2019-10",
                "activity": "Winnti Group\u2019s skip\u20112.0: A Microsoft SQL Server backdoor\nhttps://www.welivesecurity.com/2019/10/21/winnti-group-skip2-0-microsoft-sql-server-backdoor/"
            },
            {
                "date": "2019-11",
                "activity": "In November 2019, we discovered a new campaign run by the Winnti Group against two Hong Kong universities. We found a new variant of the ShadowPad backdoor, the group\u2019s flagship backdoor, deployed using a new launcher and embedding numerous modules. The Winnti malware was also found at these universities a few weeks prior to ShadowPad.\nhttps://www.welivesecurity.com/2020/01/31/winnti-group-targeting-universities-hong-kong/"
            },
            {
                "date": "2020-01",
                "activity": "Between January 20 and March 11, FireEye observed APT41 attempt to exploit vulnerabilities in Citrix NetScaler/ADC, Cisco routers, and Zoho ManageEngine Desktop Central at over 75 FireEye customers.\nhttps://www.fireeye.com/blog/threat-research/2020/03/apt41-initiates-global-intrusion-campaign-using-multiple-exploits.html\nhttps://unit42.paloaltonetworks.com/apt41-using-new-speculoos-backdoor-to-target-organizations-globally/"
            },
            {
                "date": "2020-02",
                "activity": "In February 2020, we discovered a new, modular backdoor, which we named PipeMon. Persisting as a Print Processor, it was used by the Winnti Group against several video gaming companies that are based in South Korea and Taiwan and develop MMO (Massively Multiplayer Online) games. Video games developed by these companies are available on popular gaming platforms and have thousands of simultaneous players.\nhttps://www.welivesecurity.com/2020/05/21/no-game-over-winnti-group/"
            },
            {
                "date": "2020",
                "activity": "New Linux Backdoor RedXOR Likely Operated by Chinese Nation-State Actor\nhttps://www.intezer.com/blog/malware-analysis/new-linux-backdoor-redxor-likely-operated-by-chinese-nation-state-actor/"
            },
            {
                "date": "2020-03",
                "activity": "During threat research in March 2020, PT Expert Security Center specialists found a previously unknown backdoor and named it xDll, based on the original name found in the code. As a result of a configuration flaw of the malware's command and control (C2) server, some server directories were externally accessible.\nhttps://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/shadowpad-new-activity-from-the-winnti-group/"
            },
            {
                "date": "2020-04",
                "activity": "Hackers linked to Chinese government stole millions in Covid benefits, Secret Service says\nhttps://www.nbcnews.com/tech/security/chinese-hackers-covid-fraud-millions-rcna59636"
            },
            {
                "date": "2020-07",
                "activity": "APT41 Resurfaces as Earth Baku With New Cyberespionage Campaign\nhttps://www.trendmicro.com/en_us/research/21/h/apt41-resurfaces-as-earth-baku-with-new-cyberespionage-campaign.html"
            },
            {
                "date": "2020-10",
                "activity": "Lookout Attributes Advanced Android Surveillanceware to Chinese Espionage Group APT41\nhttps://www.lookout.com/threat-intelligence/article/wyrmspy-dragonegg-surveillanceware-apt41"
            },
            {
                "date": "2021",
                "activity": "APT41 World Tour 2021 on a tight schedule\nhttps://blog.group-ib.com/apt41-world-tour-2021"
            },
            {
                "date": "2021-02",
                "activity": "You never walk alone: The SideWalk backdoor gets a Linux variant\nhttps://www.welivesecurity.com/2022/09/14/you-never-walk-alone-sidewalk-backdoor-linux-variant/"
            },
            {
                "date": "2021 Early",
                "activity": "New Wave of Espionage Activity Targets Asian Governments\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/espionage-asia-governments"
            },
            {
                "date": "2021-03",
                "activity": "Operation \u201cColunmTK\u201d\nBig airline heist\nhttps://blog.group-ib.com/colunmtk_apt41"
            },
            {
                "date": "2021 Spring",
                "activity": "MoonBounce: the dark side of UEFI firmware\nhttps://securelist.com/moonbounce-the-dark-side-of-uefi-firmware/105468/"
            },
            {
                "date": "2021-05",
                "activity": "Does This Look Infected? A Summary of APT41 Targeting U.S. State Governments\nhttps://www.mandiant.com/resources/apt41-us-state-governments"
            },
            {
                "date": "2021-07",
                "activity": "BIOPASS RAT: New Malware Sniffs Victims via Live Streaming\nhttps://www.trendmicro.com/en_us/research/21/g/biopass-rat-new-malware-sniffs-victims-via-live-streaming.html"
            },
            {
                "date": "2021-08",
                "activity": "The SideWalk may be as dangerous as the CROSSWALK\nhttps://www.welivesecurity.com/2021/08/24/sidewalk-may-be-as-dangerous-as-crosswalk/"
            },
            {
                "date": "2022-08",
                "activity": "Winnti APT group docks in Sri Lanka for new campaign\nhttps://www.malwarebytes.com/blog/threat-intelligence/2022/winnti-apt-group-docks-in-sri-lanka-for-new-campaign-final.pdf"
            },
            {
                "date": "2022 Late",
                "activity": "Blackfly: Espionage Group Targets Materials Technology\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/blackfly-espionage-materials"
            }
        ],
        "counter-operations": [
            {
                "date": "2020-08",
                "activity": "Seven International Cyber Defendants, Including \u201cApt41\u201d Actors, Charged In Connection With Computer Intrusion Campaigns Against More Than 100 Victims Globally\nhttps://www.justice.gov/opa/pr/seven-international-cyber-defendants-including-apt41-actors-charged-connection-computer"
            }
        ],
        "information": [
            "http://content.fireeye.com/apt41/rpt-apt41",
            "https://arstechnica.com/information-technology/2018/05/researchers-link-a-decade-of-potent-hacks-to-chinese-intelligence-group/",
            "https://www.kaspersky.com/about/press-releases/2019_operation-shadowhammer-new-supply-chain-attack",
            "https://www.welivesecurity.com/wp-content/uploads/2019/10/ESET_Winnti.pdf",
            "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/higaisa-or-winnti-apt-41-backdoors-old-and-new/",
            "https://blogs.blackberry.com/en/2021/10/drawing-a-dragon-connecting-the-dots-to-find-apt41",
            "https://www.infosecurity-magazine.com/news/chinas-apt41-manages-library/",
            "https://www.hhs.gov/sites/default/files/apt41-recent-activity.pdf",
            "https://www.cyfirma.com/outofband/the-origins-of-apt-41-and-shadowpad-lineage/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0096/"
        ],
        "uuid": "2fe6ac14-796b-4d63-b136-2c20b88bdd9e",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_41",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "spark",
            "procedure_code": "s0543",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0543",
            "techniques": [
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
                    "procedure_description": "spark can use cmd.exe to run commands.[314]"
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
                    "procedure_description": "spark has used a custom xor algorithm to decrypt the payload.[218]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "spark has been packed with enigma protector to obfuscate its contents.[78]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/002",
                    "technique_name": "virtualization/sandbox evasion : user activity based checks",
                    "technique_description": "adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "spark has used a splash screen to check whether an user actively clicks on the screen before running malicious code.[7]"
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
                    "procedure_description": "spark can collect the hostname, keyboard layout, and language from the system.[344]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1614/001",
                    "technique_name": "system location discovery : system language discovery",
                    "technique_description": "adversaries may attempt to gather information about the system language of a victim in order to infer the geographical location of that host. this information may be used to shape follow-on behaviors, including whether the adversary infects the target and/or attempts specific actions. this decision may be employed by malware developers and operators to reduce their risk of attracting the attention of specific law enforcement agencies or prosecution/scrutiny from other entities.",
                    "procedure_description": "spark has checked the results of the getkeyboardlayoutlist and the language name returned by getlocaleinfoa to make sure they contain the word \"arabic\" before executing.[20]"
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
                    "procedure_description": "spark has run the whoami command and has a built-in command to identify the user logged in.[175]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/002",
                    "technique_name": "virtualization/sandbox evasion : user activity based checks",
                    "technique_description": "adversaries may employ various user activity checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "spark has used a splash screen to check whether an user actively clicks on the screen before running malicious code.[7]"
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
                    "procedure_description": "spark has used http post requests to communicate with its c2 server to receive commands.[315]"
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
                    "procedure_description": "spark has encoded communications with the c2 server with base64.[85]"
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
                    "procedure_description": "spark has exfiltrated data over the c2 channel.[119]"
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