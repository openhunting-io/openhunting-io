var threatdata = {
    "name": "ProLock",
    "alias": "ProLock, PwndLocker",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "ProLock",
        "names": [
            {
                "name": "ProLock"
            },
            {
                "name": "PwndLocker"
            }
        ],
        "description": "(ZDNet) In most of the incidents analyzed by security researchers, the ProLock ransomware was deployed on networks that have been previously infected with the {{QakBot}} trojan.\n\nThe Qakbot trojan is distributed via email spam campaigns or is dropped as a second-stage payload on computers previously infected with the Emotet trojan. System administrators who find computers infected with either of these two malware strains should isolate systems and audit their networks, as the ProLock gang could be already wandering around their systems.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.zdnet.com/article/prolock-ransomware-everything-you-need-to-know/",
            "https://www.group-ib.com/whitepapers/prolock.html",
            "https://news.sophos.com/en-us/2020/07/27/prolock-ransomware-gives-you-the-first-8-kilobytes-of-decryption-for-free/",
            "https://nakedsecurity.sophos.com/2020/07/27/prolock-ransomware-new-report-reveals-the-evolution-of-a-threat/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0654/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pwndlocker"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:prolock"
        ],
        "uuid": "2f0e2d3f-e9a2-40a1-8708-3a0dc89af7fb",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "prolock",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cert.ssi.gouv.fr/cti/CERTFR-2021-CTI-009/",
            "date": "2021-11-03",
            "organization": "CERT-FR",
            "author": "ANSSI",
            "title": "Identification of a new cybercriminal group: Lockean",
            "categories": [
                "DoppelPaymer",
                "Egregor",
                "Maze",
                "PwndLocker",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2021-CTI-009.pdf",
            "date": "2021-10-26",
            "organization": "",
            "author": "ANSSI",
            "title": "Identification of a new cyber criminal group: Lockean",
            "categories": [
                "Cobalt Strike",
                "DoppelPaymer",
                "Egregor",
                "Maze",
                "PwndLocker",
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://docs.google.com/spreadsheets/d/1MI8Z2tBhmqQ5X8Wf_ozv3dVjz5sJOs-3",
            "date": "2021-05-10",
            "organization": "DarkTracer",
            "author": "DarkTracer",
            "title": "Intelligence Report on Ransomware Gangs on the DarkWeb: List of victim organizations attacked by ransomware gangs released on the DarkWeb",
            "categories": [
                "RansomEXX",
                "Avaddon",
                "Babuk",
                "Clop",
                "Conti",
                "Cuba",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Hades",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "Nefilim",
                "Nemty",
                "Pay2Key",
                "PwndLocker",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Sekhmet",
                "SunCrypt",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://www.cyborgsecurity.com/cyborg_labs/hunting-ransomware-inhibiting-system-backup-or-recovery/",
            "date": "2021-05-06",
            "organization": "Cyborg Security",
            "author": "Brandon Denker",
            "title": "Ransomware: Hunting for Inhibiting System Backup or Recovery",
            "categories": [
                "Avaddon",
                "Conti",
                "DarkSide",
                "LockBit",
                "Mailto",
                "Maze",
                "Mespinoza",
                "Nemty",
                "PwndLocker",
                "RagnarLocker",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Snatch",
                "ThunderX"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20210305181115/https://cisoclub.ru/doc/otchet-kompanii-group-ib-ransomware-uncovered-2020-2021/?bp-attachment=group-ib_ransomware_uncovered_2020-2021.pdf",
            "date": "2021-03",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "Ransomware Uncovered 2020/2021",
            "categories": [
                "RansomEXX",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "IcedID",
                "Maze",
                "PwndLocker",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://medium.com/s2wlab/operation-synctrek-e5013df8d167",
            "date": "2021-02-15",
            "organization": "Medium s2wlab",
            "author": "Sojun Ryu",
            "title": "Operation SyncTrek",
            "categories": [
                "AbaddonPOS",
                "Azorult",
                "Clop",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.cronup.com/post/de-ataque-con-malware-a-incidente-de-ransomware",
            "date": "2021-02-02",
            "organization": "CRONUP",
            "author": "Germ\u00e1n Fern\u00e1ndez",
            "title": "De ataque con Malware a incidente de Ransomware",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DanaBot",
                "Dharma",
                "Dridex",
                "Egregor",
                "Emotet",
                "Empire Downloader",
                "FriedEx",
                "GootKit",
                "IcedID",
                "MegaCortex",
                "Nemty",
                "Phorpiex",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "SmokeLoader",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/threat-research/qakbot-reducing-its-on-disk-artifacts/",
            "date": "2020-12-15",
            "organization": "Hornetsecurity",
            "author": "Hornetsecurity Security Lab",
            "title": "QakBot reducing its on disk artifacts",
            "categories": [
                "Egregor",
                "PwndLocker",
                "QakBot"
            ]
        },
        {
            "data_url": "https://raw.githubusercontent.com/fboldewin/When-ransomware-hits-an-ATM-giant---The-Diebold-Nixdorf-case-dissected/main/When%20ransomware%20hits%20an%20ATM%20giant%20-%20The%20Diebold%20Nixdorf%20case%20dissected%20-%20Group-IB%20CyberCrimeCon2020.pdf",
            "date": "2020-11-27",
            "organization": "Fiducia & GAD IT AG",
            "author": "Frank Boldewin",
            "title": "When ransomware hits an ATM giant - The Diebold Nixdorf case dissected",
            "categories": [
                "PwndLocker",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/the-malware-that-usually-installs-ransomware-and-you-need-to-remove-right-away/",
            "date": "2020-11-20",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "The malware that usually installs ransomware and you need to remove right away",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "FriedEx",
                "MegaCortex",
                "Phorpiex",
                "PwndLocker",
                "QakBot",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.intrinsec.com/egregor-prolock/",
            "date": "2020-11-12",
            "organization": "Intrinsec",
            "author": "Jean Bichet",
            "title": "Egregor \u2013 Prolock: Fraternal Twins ?",
            "categories": [
                "Egregor",
                "PwndLocker",
                "QakBot"
            ]
        },
        {
            "data_url": "https://norfolkinfosec.com/tinypos-and-prolocker-an-odd-relationship/",
            "date": "2020-11-02",
            "organization": "One Night in Norfolk",
            "author": "Kevin Perlow",
            "title": "TinyPOS and ProLocker: An Odd Relationship",
            "categories": [
                "AbaddonPOS",
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/issues/cyber-security-services/insights/what-is-behind-ransomware-attacks-increase.html",
            "date": "2020-09-29",
            "organization": "PWC UK",
            "author": "Andy Auld",
            "title": "What's behind the increase in ransomware attacks this year?",
            "categories": [
                "DarkSide",
                "Avaddon",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FriedEx",
                "Mailto",
                "PwndLocker",
                "QakBot",
                "REvil",
                "Ryuk",
                "SMAUG",
                "SunCrypt",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.group-ib.com/blog/prolock_evolution",
            "date": "2020-09-10",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "Lock Like a Pro: Dive in Recent ProLock's Big Game Hunting",
            "categories": [
                "PwndLocker",
                "QakBot"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/07/27/prolock-ransomware-gives-you-the-first-8-kilobytes-of-decryption-for-free/",
            "date": "2020-07-27",
            "organization": "Sophos Labs",
            "author": "Sean Gallagher",
            "title": "ProLock ransomware gives you the first 8 kilobytes of decryption for free",
            "categories": [
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.hornetsecurity.com/en/security-information/qakbot-malspam-leading-to-prolock/",
            "date": "2020-06-16",
            "organization": "Hornetsecurity",
            "author": "Security Lab",
            "title": "QakBot malspam leading to ProLock: Nothing personal just business",
            "categories": [
                "PwndLocker",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/fbi-prolock-ransomware-gains-access-to-victim-networks-via-qakbot-infections/",
            "date": "2020-05-18",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "FBI: ProLock ransomware gains access to victim networks via Qakbot infections",
            "categories": [
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.group-ib.com/blog/prolock",
            "date": "2020-05-14",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "ATT&CKing ProLock Ransomware",
            "categories": [
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://soolidsnake.github.io/2020/05/11/Prolock_ransomware.html",
            "date": "2020-05-11",
            "organization": "",
            "author": "soolidsnake",
            "title": "ProLock malware analysis",
            "categories": [
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.cert-pa.it/notizie/pwndlocker-si-rinnova-in-prolock-ransomware/",
            "date": "2020-03-23",
            "organization": "Cert-Pa",
            "author": "Cert-PA",
            "title": "PwndLocker si rinnova in ProLock Ransomware",
            "categories": [
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/pwndlocker-ransomware-gets-pwned-decryption-now-available/",
            "date": "2020-03-05",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "PwndLocker Ransomware Gets Pwned: Decryption Now Available",
            "categories": [
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/new-pwndlocker-ransomware-targeting-us-cities-enterprises/",
            "date": "2020-03-02",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "New PwndLocker Ransomware Targeting U.S. Cities, Enterprises",
            "categories": [
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.it-klinika.rs/blog/paznja-novi-opasni-ransomware-pwndlocker-i-u-srbiji",
            "date": "2020-03-02",
            "organization": "IT Klinika",
            "author": "unknown",
            "title": "Pa\u017enja: Novi opasni ransomware pwndLocker i u Srbiji!",
            "categories": [
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://id-ransomware.blogspot.com/2019/10/pwndlocker-ransomware.html",
            "date": "2019-10-23",
            "organization": "ID Ransomware",
            "author": "Andrew Ivanov",
            "title": "PwndLocker Ransomware",
            "categories": [
                "PwndLocker"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "prolock",
            "procedure_code": "s0654",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0654",
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
                    "procedure_description": "prolock can use wmic to execute scripts on targeted hosts.[104]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1197",
                    "technique_link": "https://attack.mitre.org/techniques/T1197",
                    "technique_name": "bits jobs",
                    "technique_description": "adversaries may abuse bits jobs to persistently execute code and perform various background tasks. windows background intelligent transfer service (bits) is a low-bandwidth, asynchronous file transfer mechanism exposed through component object model (com). bits is commonly used by updaters, messengers, and other applications preferred to operate in the background (using available idle bandwidth) without interrupting other networked applications. file transfer tasks are implemented as bits jobs, which contain a queue of one or more file operations.",
                    "procedure_description": "prolock can use bits jobs to download its malicious payload.[21]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1068",
                    "technique_link": "https://attack.mitre.org/techniques/T1068",
                    "technique_name": "exploitation for privilege escalation",
                    "technique_description": "adversaries may exploit software vulnerabilities in an attempt to elevate privileges. exploitation of a software vulnerability occurs when an adversary takes advantage of a programming error in a program, service, or within the operating system software or kernel itself to execute adversary-controlled code. security constructs such as permission levels will often hinder access to information and use of certain techniques, so adversaries will likely need to perform privilege escalation to include use of software exploitation to circumvent those restrictions.",
                    "procedure_description": "prolock can use cve-2019-0859 to escalate privileges on a compromised host.[29]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1197",
                    "technique_link": "https://attack.mitre.org/techniques/T1197",
                    "technique_name": "bits jobs",
                    "technique_description": "adversaries may abuse bits jobs to persistently execute code and perform various background tasks. windows background intelligent transfer service (bits) is a low-bandwidth, asynchronous file transfer mechanism exposed through component object model (com). bits is commonly used by updaters, messengers, and other applications preferred to operate in the background (using available idle bandwidth) without interrupting other networked applications. file transfer tasks are implemented as bits jobs, which contain a queue of one or more file operations.",
                    "procedure_description": "prolock can use bits jobs to download its malicious payload.[21]"
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
                    "procedure_description": "prolock can remove files containing its payload after they are executed.[184]"
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
                    "procedure_description": "prolock can use .jpg and .bmp files to store its payload.[20]"
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
                    "procedure_description": "prolock can encrypt files on a compromised host with rc6, and encrypts the key with rsa-1024.[65]"
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
                    "procedure_description": "prolock can use vssadmin.exe to remove volume shadow copies.[44]"
                }
            ]
        }
    ]
};