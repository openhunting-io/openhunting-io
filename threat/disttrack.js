var threatdata = {
    "name": "DistTrack",
    "alias": "DistTrack, Shamoon",
    "category": "Malware",
    "type": "ICS malware, Wiper, Worm",
    "modified": "2022-09-26",
    "all_data": {
        "tool": "DistTrack",
        "names": [
            {
                "name": "DistTrack"
            },
            {
                "name": "Shamoon"
            }
        ],
        "description": "(Cylance) The malware known as Disttrack is a destructive worm that targets a system\u2019s master boot record (MBR). Disttrack is also known as Shamoon because the original payload included debugging information that referenced a programming database file with this unique name in the path.\n\nDisttrack\u2019s payload has spread in waves, mainly targeting Saudi Arabia\u2019s critical infrastructure, including, but not limited to: Saudi Aramco, Saudi Arabia\u2019s General Authority of Civil Aviation (GACA), and the Saudi Electric Company, leaving critical systems unusable. It is relentless, stealthy, and persistent as it waits in the shadows of infected computers as a Windows service and attacks on hardcoded dates, like a ticking time-bomb waiting to go off every 90 seconds.",
        "category": "Malware",
        "type": [
            "ICS malware",
            "Wiper",
            "Worm"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/threat-spotlight-disttrack-malware.html",
            "http://contagiodump.blogspot.com/2012/08/shamoon-or-disttracka-samples.html",
            "http://researchcenter.paloaltonetworks.com/2016/11/unit42-shamoon-2-return-disttrack-wiper/",
            "http://researchcenter.paloaltonetworks.com/2017/03/unit42-shamoon-2-delivering-disttrack/",
            "https://unit42.paloaltonetworks.com/unit42-second-wave-shamoon-2-attacks-identified/",
            "https://unit42.paloaltonetworks.com/shamoon-3-targets-oil-gas-organization/",
            "http://www.vinransomware.com/blog/detailed-threat-analysis-of-shamoon-2-0-malware",
            "https://www.codeandsec.com/Sophisticated-CyberWeapon-Shamoon-2-Malware-Analysis"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0140/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.disttrack"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Disttrack",
            "https://otx.alienvault.com/browse/pulses?q=tag:shamoon"
        ],
        "uuid": "3f2012fe-69e0-4c62-8695-c79a2d0ce48c",
        "last-card-change": "2020-06-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "disttrack",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.crowdstrike.com/blog/the-anatomy-of-wiper-malware-part-3/",
            "date": "2022-09-26",
            "organization": "CrowdStrike",
            "author": "Ioan Iacob",
            "title": "The Anatomy of Wiper Malware, Part 3: Input/Output Controls",
            "categories": [
                "CaddyWiper",
                "DEADWOOD",
                "DistTrack",
                "DoubleZero",
                "DUSTMAN",
                "HermeticWiper",
                "IsaacWiper",
                "Meteor",
                "Petya",
                "Sierra(Alfa,Bravo, ...)",
                "StoneDrill",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/the-anatomy-of-wiper-malware-part-1/",
            "date": "2022-08-12",
            "organization": "CrowdStrike",
            "author": "Ioan Iacob",
            "title": "The Anatomy of Wiper Malware, Part 1: Common Techniques",
            "categories": [
                "Apostle",
                "CaddyWiper",
                "DEADWOOD",
                "DistTrack",
                "DoubleZero",
                "DUSTMAN",
                "HermeticWiper",
                "IsaacWiper",
                "IsraBye",
                "KillDisk",
                "Meteor",
                "Olympic Destroyer",
                "Ordinypt",
                "Petya",
                "Sierra(Alfa,Bravo, ...)",
                "StoneDrill",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/the-increasing-wiper-malware-threat",
            "date": "2022-04-28",
            "organization": "Fortinet",
            "author": "Gergely Revay",
            "title": "An Overview of the Increasing Wiper Malware Threat",
            "categories": [
                "AcidRain",
                "CaddyWiper",
                "DistTrack",
                "DoubleZero",
                "EternalPetya",
                "HermeticWiper",
                "IsaacWiper",
                "Olympic Destroyer",
                "Ordinypt",
                "WhisperGate",
                "ZeroCleare"
            ]
        },
        {
            "data_url": "https://resources.cylera.com/hubfs/Cylera%20Labs/Cylera%20Labs%20Kwampirs%20Shamoon%20Technical%20Report.pdf",
            "date": "2022-03-08",
            "organization": "Cylera",
            "author": "Cylera",
            "title": "The link between Kwampirs (Orangeworm) and Shamoon APTs",
            "categories": [
                "DistTrack",
                "Kwampirs"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/Attacks-Against-Critical_Infrastructrure.pdf",
            "date": "2021-08-05",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Attacks Against Critical Infrastructure: A Global Concern",
            "categories": [
                "BlackEnergy",
                "DarkSide",
                "DistTrack",
                "Stuxnet"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.zdnet.com/article/fbi-warns-about-ongoing-attacks-against-software-supply-chain-companies/",
            "date": "2020-02-10",
            "organization": "ZDNet",
            "author": "Catalin Cimpanu",
            "title": "FBI warns about ongoing attacks against software supply chain companies",
            "categories": [
                "DistTrack",
                "Kwampirs"
            ]
        },
        {
            "data_url": "https://malwareindepth.com/shamoon-2012/",
            "date": "2019-12-21",
            "organization": "MalwareInDepth",
            "author": "Myrtus 0x0",
            "title": "Shamoon 2012 Complete Analysis",
            "categories": [
                "DistTrack"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/shamoon-destructive-threat-re-emerges-new-sting-its-tail",
            "date": "2018-12-14",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Shamoon: Destructive Threat Re-Emerges with New Sting in its Tail",
            "categories": [
                "DistTrack",
                "Filerase",
                "StoneDrill",
                "OilRig"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/shamoon-3-targets-oil-gas-organization/",
            "date": "2018-12-13",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Shamoon 3 Targets Oil and Gas Organization",
            "categories": [
                "DistTrack"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2017/03/unit42-shamoon-2-delivering-disttrack/",
            "date": "2017-03-26",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Shamoon 2: Delivering Disttrack",
            "categories": [
                "DistTrack"
            ]
        },
        {
            "data_url": "https://content.fireeye.com/m-trends/rpt-m-trends-2017",
            "date": "2017-03-14",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "M-Trend 2017: A View From the Front Lines",
            "categories": [
                "DistTrack",
                "Powersniff",
                "FIN8"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=5758557d-6e3a-4174-90f3-fa92a712ecd9&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2017-02-27",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Shamoon: Multi-staged destructive attacks limited to specific targets",
            "categories": [
                "DistTrack",
                "MimiKatz",
                "Rocket Kitten"
            ]
        },
        {
            "data_url": "http://www.vinransomware.com/blog/detailed-threat-analysis-of-shamoon-2-0-malware",
            "date": "2017-02-05",
            "organization": "VinRansomware",
            "author": "Gregory Paul",
            "title": "Detailed threat analysis of Shamoon 2.0 Malware",
            "categories": [
                "DistTrack"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20190331181353/https://www.symantec.com/connect/blogs/greenbug-cyberespionage-group-targeting-middle-east-possible-links-shamoon",
            "date": "2017-01-23",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Greenbug cyberespionage group targeting Middle East, possible links to Shamoon",
            "categories": [
                "DistTrack",
                "ISMDoor",
                "Greenbug"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/greenbug-cyberespionage-group-targeting-middle-east-possible-links-shamoon",
            "date": "2017-01-23",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Greenbug cyberespionage group targeting Middle East, possible links to Shamoon",
            "categories": [
                "DistTrack",
                "ISMDoor",
                "Greenbug"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-second-wave-shamoon-2-attacks-identified/",
            "date": "2017-01-09",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Second Wave of Shamoon 2 Attacks Identified",
            "categories": [
                "DistTrack"
            ]
        },
        {
            "data_url": "https://www.codeandsec.com/Sophisticated-CyberWeapon-Shamoon-2-Malware-Analysis",
            "date": "2016-12-03",
            "organization": "Coding and Security",
            "author": "Coding",
            "title": "\"Sophisticated\" and \"Genius\" Shamoon 2.0 Malware Analysis",
            "categories": [
                "DistTrack"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2016/11/unit42-shamoon-2-return-disttrack-wiper/?adbsc=social68389776&adbid=804134348374970368&adbpl=tw&adbpr=4487645412",
            "date": "2016-11-30",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "Shamoon 2: Return of the Disttrack Wiper",
            "categories": [
                "DistTrack"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=ad6f8259-2bb4-4f7f-b8e1-710b35a4cbed&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2016-11-30",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Shamoon: Back from the dead and destructive as ever",
            "categories": [
                "DistTrack",
                "OilRig"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2012/08/shamoon-or-disttracka-samples.html",
            "date": "2012-08-17",
            "organization": "Contagiodump Blog",
            "author": "Mila Parkour",
            "title": "Shamoon or DistTrack.A samples",
            "categories": [
                "DistTrack"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20120818235442/https://www.symantec.com/connect/blogs/shamoon-attacks",
            "date": "2012-08-16",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "The Shamoon Attacks",
            "categories": [
                "DistTrack",
                "OilRig"
            ]
        },
        {
            "data_url": "https://securelist.com/shamoon-the-wiper-copycats-at-work/",
            "date": "2012-08-16",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Shamoon the Wiper \u2013 Copycats at Work",
            "categories": [
                "DistTrack"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "shamoon",
            "procedure_code": "s0140",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0140",
            "techniques": [
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
                    "procedure_description": "if shamoon cannot access shares using current privileges, it attempts access using hard coded, domain-specific credentials gathered earlier in the intrusion.[19][20]"
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
                    "procedure_description": "shamoon copies an executable payload to the target system by using smb/windows admin shares and then scheduling an unnamed task to execute the malware.[157][158]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "shamoon creates a new service named \"ntssrv\" to execute the payload. shamoon can also spread via psexec.[52][53]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "shamoon creates a new service named \"ntssrv\" to execute the payload. newer versions create the \"maintenacesrv\" and \"hdv_725x\" services.[108][109]"
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
                    "procedure_description": "shamoon copies an executable payload to the target system by using smb/windows admin shares and then scheduling an unnamed task to execute the malware.[157][158]"
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
                    "procedure_description": "if shamoon cannot access shares using current privileges, it attempts access using hard coded, domain-specific credentials gathered earlier in the intrusion.[19][20]"
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
                    "procedure_description": "shamoon attempts to disable uac remote restrictions by modifying the registry.[57]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1134.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/001",
                    "technique_name": "access token manipulation : token impersonation/theft",
                    "technique_description": "adversaries may duplicate then impersonate another user's existing token to escalate privileges and bypass access controls. for example, an adversary can duplicate an existing token using duplicatetoken or duplicatetokenex. the token can then be used with impersonateloggedonuser to allow the calling thread to impersonate a logged on user's security context, or with setthreadtoken to assign the impersonated token to a thread.",
                    "procedure_description": "shamoon can impersonate tokens using logonuser, impersonateloggedonuser, and impersonatenamedpipeclient.[12]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "shamoon creates a new service named \"ntssrv\" to execute the payload. newer versions create the \"maintenacesrv\" and \"hdv_725x\" services.[108][109]"
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
                    "procedure_description": "shamoon copies an executable payload to the target system by using smb/windows admin shares and then scheduling an unnamed task to execute the malware.[157][158]"
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
                    "procedure_description": "if shamoon cannot access shares using current privileges, it attempts access using hard coded, domain-specific credentials gathered earlier in the intrusion.[19][20]"
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
                    "procedure_description": "shamoon attempts to disable uac remote restrictions by modifying the registry.[57]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1134.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1134/001",
                    "technique_name": "access token manipulation : token impersonation/theft",
                    "technique_description": "adversaries may duplicate then impersonate another user's existing token to escalate privileges and bypass access controls. for example, an adversary can duplicate an existing token using duplicatetoken or duplicatetokenex. the token can then be used with impersonateloggedonuser to allow the calling thread to impersonate a logged on user's security context, or with setthreadtoken to assign the impersonated token to a thread.",
                    "procedure_description": "shamoon can impersonate tokens using logonuser, impersonateloggedonuser, and impersonatenamedpipeclient.[12]"
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
                    "procedure_description": "shamoon decrypts ciphertext using an xor cipher and a base64-encoded string.[209]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/006",
                    "technique_name": "indicator removal : timestomp",
                    "technique_description": "adversaries may modify file time attributes to hide new or changes to existing files. timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder. this is done, for example, on files that have been modified or created by the adversary so that they do not appear conspicuous to forensic investigators or file analysis tools.",
                    "procedure_description": "shamoon can change the modified time for files to evade forensic detection.[48]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/004",
                    "technique_name": "masquerading : masquerade task or service",
                    "technique_description": "adversaries may attempt to manipulate the name of a task or service to make it appear legitimate or benign. tasks/services executed by the task scheduler or systemd will typically be given a name and/or description. windows services will have a service name as well as a display name. many benign tasks and services exist that have commonly associated names. adversaries may give tasks or services names that are similar or identical to those of legitimate ones.",
                    "procedure_description": "shamoon creates a new service named \"ntssrv\" that attempts to appear legitimate; the service's display name is \"microsoft network realtime inspection service\" and its description is \"helps guard against time change attempts targeting known and newly discovered vulnerabilities in network time protocols.\" newer versions create the \"maintenacesrv\" service, which misspells the word \"maintenance.\"[3][65]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "once shamoon has access to a network share, it enables the remoteregistry service on the target system. it will then connect to the system with regconnectregistryw and modify the registry to disable uac remote restrictions by setting software\\microsoft\\windows\\currentversion\\policies\\system\\localaccounttokenfilterpolicy to 1.[142][143][144]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "shamoon contains base64-encoded strings.[292]"
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
                    "procedure_description": "if shamoon cannot access shares using current privileges, it attempts access using hard coded, domain-specific credentials gathered earlier in the intrusion.[19][20]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "shamoon queries several registry keys to identify hard disk partitions to overwrite.[82]"
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
                    "procedure_description": "shamoon scans the c-class subnet of the ips on the victim's interfaces.[78]"
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
                    "procedure_description": "shamoon obtains the victim's operating system version and keyboard layout and sends the information to the c2 server.[329][330]"
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
                    "procedure_description": "shamoon obtains the target's ip address and local network segment.[207][208]"
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
                    "procedure_description": "shamoon obtains the system time and will only activate if it is greater than a preset date.[63][64]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "shamoon attempts to copy itself to remote machines on the network.[27]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "shamoon accesses network share(s), enables share access to the target device, copies an executable payload to the target system, and uses a scheduled task/job to execute the malware.[48]"
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
                    "procedure_description": "shamoon has used http for c2.[299]"
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
                    "procedure_description": "shamoon can download an executable to run on the victim.[404]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1485",
                    "technique_link": "https://attack.mitre.org/techniques/T1485",
                    "technique_name": "data destruction",
                    "technique_description": "adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. data destruction is likely to render stored data irrecoverable by forensic techniques through overwriting files or data on local and remote drives. common operating system file deletion commands such as del and rm often only remove pointers to files without wiping the contents of the files themselves, making the files recoverable by proper forensic methodology. this behavior is distinct from disk content wipe and disk structure wipe because individual files are destroyed rather than sections of a storage disk or the disk's logical structure.",
                    "procedure_description": "shamoon attempts to overwrite operating system files and disk structures with image files.[1][2][3] in a later variant, randomly generated data was used for data overwrites.[5][35]"
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
                    "procedure_description": "shamoon has an operational mode for encrypting data instead of overwriting it.[83][84]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1561.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1561/002",
                    "technique_name": "disk wipe : disk structure wipe",
                    "technique_description": "adversaries may corrupt or wipe the disk data structures on a hard drive necessary to boot a system; targeting specific critical systems or in large numbers in a network to interrupt availability to system and network resources.",
                    "procedure_description": "shamoon has been seen overwriting features of disk structure such as the mbr.[1][2][3][5]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1529",
                    "technique_link": "https://attack.mitre.org/techniques/T1529",
                    "technique_name": "system shutdown/reboot",
                    "technique_description": "adversaries may shutdown/reboot systems to interrupt access to, or aid in the destruction of, those systems. operating systems may contain commands to initiate a shutdown/reboot of a machine or network device. in some cases, these commands may also be used to initiate a shutdown/reboot of a remote computer or network device via network device cli (e.g. reload).",
                    "procedure_description": "shamoon will reboot the infected system once the wiping functionality has been completed.[17][18]"
                }
            ]
        }
    ]
};