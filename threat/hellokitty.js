var threatdata = {
    "name": "HELLOKITTY",
    "alias": "HELLOKITTY, HelloKitty, KittyCrypt",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-02-14",
    "all_data": {
        "tool": "HELLOKITTY",
        "names": [
            {
                "name": "HELLOKITTY"
            },
            {
                "name": "HelloKitty"
            },
            {
                "name": "KittyCrypt"
            }
        ],
        "description": "(FireEye) HELLOKITTY ransomware\u2014used to target Polish video game developer CD Projekt Red\u2014is reportedly built from DEATHRANSOM.\nHELLOKITTY is named after a mutex named \u2018HELLOKITTYMutex,\u2019 used when the malware executable is launched",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2021/04/unc2447-sombrat-and-fivehands-ransomware-sophisticated-financial-threat.html",
            "https://www.bleepingcomputer.com/news/security/HELLOKITTY-ransomware-behind-cd-projekt-red-cyberattack-data-theft/",
            "https://www.bleepingcomputer.com/news/security/hellokitty-ransomware-is-targeting-vulnerable-sonicwall-devices/",
            "https://www.ic3.gov/Media/News/2021/211029.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0617/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hellokitty",
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.hellokitty"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=hellokitty-ransomware"
        ],
        "uuid": "fed08e25-fd63-4def-93d4-0fa8555fc680",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--c67a9b09-e3a1-407c-942c-d0bea138be04",
        "pb_file": "hellokitty-ransomware.json",
        "last_updated": "2021-09-30T08:58:13.728Z",
        "title": "HELLOKITTY RANSOMWARE",
        "industries": [
            "healthcare",
            "manufacturing",
            "pharmaceuticals"
        ],
        "regions": [
            "DE",
            "IT",
            "NL",
            "US"
        ],
        "malwares": [
            "Hello Kitty"
        ]
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hellokitty",
    "articles": [
        {
            "data_url": "https://www.intrinsec.com/vice-society-spreads-its-own-ransomware/",
            "date": "2023-02-14",
            "organization": "Intrinsec",
            "author": "Intrinsec",
            "title": "Vice-Society spreads its own ransomware",
            "categories": [
                "HelloKitty",
                "PolyVice",
                "Zeppelin"
            ]
        },
        {
            "data_url": "https://cocomelonc.github.io/malware/2023/01/04/malware-tricks-26.html",
            "date": "2023-01-04",
            "organization": "",
            "author": "cocomelonc",
            "title": "Malware development tricks: part 26. Mutex. C++ example.",
            "categories": [
                "AsyncRAT",
                "Conti",
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2022/09/esxi-targeting-ransomware-the-threats-that-are-after-your-virtual-machines-part-1.html",
            "date": "2022-09-28",
            "organization": "vmware",
            "author": "Giovanni Vigna",
            "title": "ESXi-Targeting Ransomware: The Threats That Are After Your Virtual Machines (Part 1)",
            "categories": [
                "Avoslocker",
                "Babuk",
                "Black Basta",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "Luna",
                "RansomEXX",
                "RedAlert Ransomware",
                "REvil"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2022/09/threat-report-illuminating-volume-shadow-deletion.html",
            "date": "2022-09-20",
            "organization": "vmware",
            "author": "Dana Behling",
            "title": "Threat Report: Illuminating Volume Shadow Deletion",
            "categories": [
                "Conti",
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-249a",
            "date": "2022-09-06",
            "organization": "CISA",
            "author": "US-CERT",
            "title": "Alert (AA22-249A) #StopRansomware: Vice Society",
            "categories": [
                "Cobalt Strike",
                "Empire Downloader",
                "FiveHands",
                "HelloKitty",
                "SystemBC",
                "Zeppelin"
            ]
        },
        {
            "data_url": "https://blog.sekoia.io/vice-society-a-discreet-but-steady-double-extortion-ransomware-group",
            "date": "2022-07-08",
            "organization": "Sekoia",
            "author": "Threat & Detection Research Team",
            "title": "Vice Society: a discreet but steady double extortion ransomware group",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://blog.sekoia.io/vice-society-a-discreet-but-steady-double-extortion-ransomware-group/",
            "date": "2022-07-08",
            "organization": "Sekoia",
            "author": "sekoia",
            "title": "Vice Society: a discreet but steady double extortion ransomware group",
            "categories": [
                "HelloKitty",
                "Zeppelin"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/discontinued-the-end-of-conti-s-brand-marks-new-chapter-for-cybercrime-landscape",
            "date": "2022-05-20",
            "organization": "AdvIntel",
            "author": "Yelisey Boguslavskiy",
            "title": "DisCONTInued: The End of Conti\u2019s Brand Marks New Chapter For Cybercrime Landscape",
            "categories": [
                "AvosLocker",
                "Black Basta",
                "BlackByte",
                "BlackCat",
                "Conti",
                "HelloKitty",
                "Hive"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself",
            "date": "2022-05-09",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "AnchorDNS",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "REvil",
                "FAKEUPDATES",
                "Griffon",
                "ATOMSILO",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "Emotet",
                "FiveHands",
                "Gozi",
                "HelloKitty",
                "Hive",
                "IcedID",
                "ISFB",
                "JSSLoader",
                "LockBit",
                "LockFile",
                "Maze",
                "NightSky",
                "Pandora",
                "Phobos",
                "Phoenix Locker",
                "PhotoLoader",
                "QakBot",
                "REvil",
                "Rook",
                "Ryuk",
                "SystemBC",
                "TrickBot",
                "WastedLocker",
                "BRONZE STARLIGHT"
            ]
        },
        {
            "data_url": "https://blog.bushidotoken.net/2022/05/gamer-cheater-hacker-spy.html",
            "date": "2022-05-01",
            "organization": "BushidoToken",
            "author": "BushidoToken",
            "title": "Gamer Cheater Hacker Spy",
            "categories": [
                "Egregor",
                "HelloKitty",
                "NetfilterRootkit",
                "RagnarLocker",
                "Winnti"
            ]
        },
        {
            "data_url": "https://medium.com/proferosec-osm/static-unpacker-and-decoder-for-hello-kitty-packer-91a3e8844cb7",
            "date": "2022-04-25",
            "organization": "Medium proferosec-osm",
            "author": "Brenton Morris",
            "title": "Static unpacker and decoder for Hello Kitty Packer",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.advintel.io/post/enter-karakurt-data-extortion-arm-of-prolific-ransomware-group",
            "date": "2022-04-18",
            "organization": "AdvIntel",
            "author": "Vitali Kremez",
            "title": "Enter KaraKurt: Data Extortion Arm of Prolific Ransomware Group",
            "categories": [
                "AvosLocker",
                "BazarBackdoor",
                "BlackByte",
                "BlackCat",
                "Cobalt Strike",
                "HelloKitty",
                "Hive"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/conti-affiliate-exposed-new-domain-names-ip-addresses-and-email-addresses-uncovered-by-esentire",
            "date": "2022-03-21",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "Conti Affiliate Exposed: New Domain Names, IP Addresses and Email Addresses Uncovered",
            "categories": [
                "HelloKitty",
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "FiveHands",
                "HelloKitty",
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/docs/vmw-exposing-malware-in-linux-based-multi-cloud-environments.pdf",
            "date": "2022-02-09",
            "organization": "vmware",
            "author": "VMWare",
            "title": "Exposing Malware in Linux-Based Multi-Cloud Environments",
            "categories": [
                "ACBackdoor",
                "BlackMatter",
                "DarkSide",
                "Erebus",
                "HelloKitty",
                "Kinsing",
                "PLEAD",
                "QNAPCrypt",
                "RansomEXX",
                "REvil",
                "Sysrv-hello",
                "TeamTNT",
                "Vermilion Strike",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.govinfosecurity.com/vice-society-ransomware-gang-disrupted-spar-stores-a-18225",
            "date": "2021-12-30",
            "organization": "GovInfo Security",
            "author": "Mathew J. Schwartz",
            "title": "Vice Society: Ransomware Gang Disrupted Spar Stores",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.speartip.com/resources/fbi-hellokitty-ransomware-adds-ddos-to-extortion-arsenal/",
            "date": "2021-11-02",
            "organization": "SpearTip",
            "author": "Chris Swagler",
            "title": "FBI Warning: HelloKitty Ransomware Add DDoS to Extortion Arsenal",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.ic3.gov/Media/News/2021/211029.pdf",
            "date": "2021-10-28",
            "organization": "FBI",
            "author": "FBI",
            "title": "CU-000154-MW: Tactics, Techniques, and Indicators of Compromise Associated with Hello Kitty/FiveHands Ransomware",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/hypervisor-jackpotting-ecrime-actors-increase-targeting-of-esxi-servers/",
            "date": "2021-08-30",
            "organization": "CrowdStrike",
            "author": "Michael Dawson",
            "title": "Hypervisor Jackpotting, Part 2: eCrime Actors Increase Targeting of ESXi Servers with Ransomware",
            "categories": [
                "Babuk",
                "HelloKitty",
                "REvil"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/emerging-ransomware-groups/",
            "date": "2021-08-24",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Ruchna Nigam",
            "title": "Ransomware Groups to Watch: Emerging Threats",
            "categories": [
                "HelloKitty",
                "AvosLocker",
                "HelloKitty",
                "Hive",
                "LockBit"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hellokitty-ransomware-is-targeting-vulnerable-sonicwall-devices/",
            "date": "2021-07-17",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "HelloKitty ransomware is targeting vulnerable SonicWall devices",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://soolidsnake.github.io/2021/07/17/hellokitty_linux.html",
            "date": "2021-07-17",
            "organization": "soolidsnake",
            "author": "soolidsnake",
            "title": "HelloKitty Linux version malware analysis",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/linux-version-of-hellokitty-ransomware-targets-vmware-esxi-servers/",
            "date": "2021-07-15",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Linux version of HelloKitty ransomware targets VMware ESXi servers",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/new-ransomware-variant-uses-golang-packer/",
            "date": "2021-06-28",
            "organization": "CrowdStrike",
            "author": "Alexandru Ghita",
            "title": "New Ransomware Variant Uses Golang Packer",
            "categories": [
                "FiveHands",
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.databreaches.net/babuk-re-organizes-as-payload-bin-offers-its-first-leak/",
            "date": "2021-05-31",
            "organization": "DataBreaches.net",
            "author": "Dissent",
            "title": "Babuk re-organizes as Payload Bin, offers its first leak",
            "categories": [
                "Babuk",
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/04/unc2447-sombrat-and-fivehands-ransomware-sophisticated-financial-threat.html",
            "date": "2021-04-29",
            "organization": "FireEye",
            "author": "Tyler McLellan",
            "title": "UNC2447 SOMBRAT and FIVEHANDS Ransomware: A Sophisticated Financial Threat",
            "categories": [
                "Cobalt Strike",
                "FiveHands",
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-spotlight/2021/03/hellokitty-when-cyberpunk-met-cy-purr-crime/",
            "date": "2021-03-18",
            "organization": "Malwarebytes",
            "author": "Jovi Umawing",
            "title": "HelloKitty: When Cyberpunk met cy-purr-crime",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/hellokitty-ransomware-lacks-stealth-but-still-strikes-home/",
            "date": "2021-03-08",
            "organization": "Sentinel LABS",
            "author": "Jim Walter",
            "title": "HelloKitty Ransomware Lacks Stealth, But Still Strikes Home",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://www.cadosecurity.com/post/punk-kitty-ransom-analysing-hellokitty-ransomware-attacks",
            "date": "2021-02-10",
            "organization": "Cado Security",
            "author": "Christopher Doman",
            "title": "Punk Kitty Ransom - Analysing HelloKitty Ransomware Attacks",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://twitter.com/fwosar/status/1359167108727332868",
            "date": "2021-02-09",
            "organization": "Twitter (@fwosar)",
            "author": "Fabian Wosar",
            "title": "Tweet on CD PROJEKT RED targeted by HelloKitty ransomware group",
            "categories": [
                "HelloKitty"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2020/11/hellokitty-ransomware.html",
            "date": "2020-11-13",
            "organization": "ID Ransomware",
            "author": "Andrew Ivanov",
            "title": "HelloKitty Ransomware",
            "categories": [
                "HelloKitty"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "hellokitty",
            "procedure_code": "s0617",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0617",
            "techniques": [
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
                    "procedure_description": "hellokitty can use wmi to delete volume shadow copies.[34]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "hellokitty has the ability to enumerate network resources.[28]"
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
                    "procedure_description": "hellokitty can search for specific processes to terminate.[121]"
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
                    "procedure_description": "hellokitty can enumerate logical drives on a target system.[109]"
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
                    "procedure_description": "hellokitty can use an embedded rsa-2048 public key to encrypt victim data for ransom.[41]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1490",
                    "technique_link": "https://attack.mitre.org/techniques/T1490",
                    "technique_name": "inhibit system recovery",
                    "technique_description": "adversaries may delete or remove built-in data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. this may deny access to available backups and recovery options.",
                    "procedure_description": "hellokitty can delete volume shadow copies on compromised hosts.[26]"
                }
            ]
        }
    ]
};