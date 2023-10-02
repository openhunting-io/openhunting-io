var threatdata = {
    "name": "KIVARS",
    "alias": "KIVARS",
    "category": "Malware",
    "type": "Reconnaissance",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "KIVARS",
        "names": [
            {
                "name": "KIVARS"
            }
        ],
        "description": "(Trend Micro) The encryption for the initial packets sent by the BKDR_KIVARS uses RC4 as the encryption. It includes the following information:\n\n\u2022 Victim\u2019s IP\n\u2022 Possible Campaign ID\n\u2022 OS version\n\u2022 Hostname\n\u2022 Username\n\u2022 KIVARS version\n\u2022 Recent Document\\Desktop folder\n\u2022 Keyboard Layout",
        "category": "Malware",
        "type": [
            "Reconnaissance"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/kivars-with-venom-targeted-attacks-upgrade-with-64-bit-support/",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/palmerworm-blacktech-espionage-apt",
            "https://www.trendmicro.com/en_us/research/17/f/following-trail-blacktech-cyber-espionage-campaigns.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0437/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.kivars"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:kivars"
        ],
        "uuid": "8c076c07-b2f3-4b9e-88b5-638b31d12e2d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "kivars",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/palmerworm-blacktech-espionage-apt",
            "date": "2020-09-29",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Palmerworm: Espionage Gang Targets the Media, Finance, and Other Sectors",
            "categories": [
                "KIVARS",
                "PLEAD",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/17/f/following-trail-blacktech-cyber-espionage-campaigns.html",
            "date": "2017-06-22",
            "organization": "Trend Micro",
            "author": "Lenart Bermejo",
            "title": "The Trail of BlackTech\u2019s Cyber Espionage Campaigns",
            "categories": [
                "bifrose",
                "KIVARS",
                "PLEAD"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/16/c/threat-actors-behind-shrouded-crossbow-creates-bifrose-for-unix.html",
            "date": "2016-03-01",
            "organization": "Trend Micro",
            "author": "Razor Huang",
            "title": "Shrouded Crossbow Creators Behind BIFROSE for UNIX",
            "categories": [
                "KIVARS"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/kivars-with-venom-targeted-attacks-upgrade-with-64-bit-support/",
            "date": "2014-07-02",
            "organization": "Trend Micro",
            "author": "Kervin Alintanahin",
            "title": "KIVARS With Venom: Targeted Attacks Upgrade with 64-bit \u201cSupport\u201d",
            "categories": [
                "FakeWord",
                "KIVARS",
                "PLEAD",
                "Poison RAT",
                "Zeus"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "kivars",
            "procedure_code": "s0437",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0437",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/003",
                    "technique_name": "hide artifacts : hidden window",
                    "technique_description": "adversaries may use hidden windows to conceal malicious activity from the plain sight of users. in some cases, windows that would typically be displayed when an application carries out an operation can be hidden. this may be utilized by system administrators to avoid disrupting user work environments when carrying out administrative tasks.",
                    "procedure_description": "kivars has the ability to conceal its activity through hiding active windows.[26]"
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
                    "procedure_description": "kivars has the ability to uninstall malware from the infected host.[125]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "kivars has the ability to initiate keylogging on the infected host.[96]"
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
                    "procedure_description": "kivars has the ability to list drives on the infected host.[170]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021",
                    "technique_link": "https://attack.mitre.org/techniques/T1021",
                    "technique_name": "remote services",
                    "technique_description": "adversaries may use valid accounts to log into a service that accepts remote connections, such as telnet, ssh, and vnc. the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "kivars has the ability to remotely trigger keyboard input and mouse clicks. [9]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "kivars has the ability to initiate keylogging on the infected host.[96]"
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
                    "procedure_description": "kivars has the ability to capture screenshots on the infected host.[88]"
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
                    "procedure_description": "kivars has the ability to download and execute files.[246]"
                }
            ]
        }
    ]
};