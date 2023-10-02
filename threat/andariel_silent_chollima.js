var threatdata = {
    "name": "Andariel, Silent Chollima",
    "alias": "Andariel, Silent Chollima, Stonefly, Plutonium, Onyx Sleet",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Andariel, Silent Chollima",
        "names": [
            {
                "name": "Andariel",
                "name-giver": "FSI"
            },
            {
                "name": "Silent Chollima",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Stonefly",
                "name-giver": "Symantec"
            },
            {
                "name": "Plutonium",
                "name-giver": "Microsoft"
            },
            {
                "name": "Onyx Sleet",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "North Korea"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2014",
        "description": "A subgroup of {{Lazarus Group, Hidden Cobra, Labyrinth Chollima}}.",
        "operations": [
            {
                "date": "2014",
                "activity": "Operation \u201cBLACKMINE\u201d\nTarget: South Korean organizations.\nMethod: Information theft and espionage."
            },
            {
                "date": "2014",
                "activity": "Operation \u201cGHOSTRAT\u201d\nTarget: Defense industry.\nMethod: Information theft and espionage."
            },
            {
                "date": "2014",
                "activity": "Operation \u201cXEDA\u201d\nTarget: Foreign defense industries.\nMethod: Information theft and espionage."
            },
            {
                "date": "2015",
                "activity": "Operation \u201cINITROY\u201d/Phase 1\nTarget: South Korean organizations.\nMethod: Information theft/early phase operation."
            },
            {
                "date": "2015",
                "activity": "Operation \u201cDESERTWOLF\u201d/Phase 3\nTarget: South Korean defense industry.\nMethod: Information theft and espionage."
            },
            {
                "date": "2015",
                "activity": "Operation \u201cBLACKSHEEP\u201d/Phase 3.\nTarget: Defense industry.\nMethod: Information theft and espionage."
            },
            {
                "date": "2016",
                "activity": "Operation \u201cINITROY\u201d/Phase 2\nTarget: South Korean organizations.\nMethod: Information theft/early phase operation."
            },
            {
                "date": "2016",
                "activity": "Operation \u201cVANXATM\u201d\nTarget: ATM companies.\nMethod: Financial theft/BPC."
            },
            {
                "date": "2017",
                "activity": "Operation \u201cMayday\u201d\nTarget: South Koran Financial Company.\nMethod: Information theft and espionage."
            },
            {
                "date": "2018-06",
                "activity": "Operation \u201cGoldenAxe\u201d\nhttps://blog.trendmicro.com/trendlabs-security-intelligence/new-andariel-reconnaissance-tactics-hint-at-next-targets/"
            },
            {
                "date": "2021-04",
                "activity": "Lazarus APT conceals malicious code within BMP image to drop its RAT\nhttps://blog.malwarebytes.com/malwarebytes-news/2021/04/lazarus-apt-conceals-malicious-code-within-bmp-file-to-drop-its-rat/\nhttps://securelist.com/andariel-evolves-to-target-south-korea-with-ransomware/102811/"
            },
            {
                "date": "2021-06",
                "activity": "Andariel evolves to target South Korea with ransomware\nhttps://securelist.com/andariel-evolves-to-target-south-korea-with-ransomware/102811/"
            },
            {
                "date": "2022-02",
                "activity": "Stonefly: North Korea-linked Spying Operation Continues to Hit High-value Targets\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/stonefly-north-korea-espionage"
            },
            {
                "date": "2022-08",
                "activity": "Andariel deploys DTrack and Maui ransomware\nhttps://securelist.com/andariel-deploys-dtrack-and-maui-ransomware/107063/"
            },
            {
                "date": "2023-06",
                "activity": "Andariel\u2019s silly mistakes and a new malware family\nhttps://securelist.com/lazarus-andariel-mistakes-and-easyrat/110119/"
            }
        ],
        "information": [
            "https://asec.ahnlab.com/en/56405/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0138/"
        ],
        "uuid": "00089621-cabc-421a-b2ce-3fd18f6bfa9c",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "andariel_silent_chollima",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://docs.huihoo.com/rsaconference/usa-2014/anf-t07b-the-art-of-attribution-identifying-and-pursuing-your-cyber-adversaries-final.pdf",
            "date": "2014-02-24",
            "organization": "RSA Conference",
            "author": "Dmitri Alperovitch",
            "title": "The Art of Attribution Identifying and Pursuing your Cyber Adversaries",
            "categories": [
                "ANDROMEDA SPIDER",
                "APT19",
                "DEXTOROUS SPIDER",
                "Silent Chollima",
                "SINGING SPIDER",
                "Tonto Team",
                "TOXIC PANDA",
                "UNION SPIDER"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "andariel",
            "procedure_code": "g0138",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0138",
            "techniques": [
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1592.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1592/002",
                    "technique_name": "gather victim host information : software",
                    "technique_description": "adversaries may gather information about the victim's host software that can be used during targeting. information about installed software may include a variety of details such as types and versions on specific hosts, as well as the presence of additional components that might be indicative of added defensive protections (ex: antivirus, siems, etc.).",
                    "procedure_description": "andariel has inserted a malicious script within compromised websites to collect potential victim information such as browser type, system language, flash player version, and other data.[2]"
                },
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1590.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1590/005",
                    "technique_name": "gather victim network information : ip addresses",
                    "technique_description": "adversaries may gather the victim's ip addresses that can be used during targeting. public ip addresses may be allocated to organizations by block, or a range of sequential addresses. information about assigned ip addresses may include a variety of details, such as which ip addresses are in use. ip addresses may also enable an adversary to derive other details about a victim, such as organizational size, physical location(s), internet service provider, and or where/how their publicly-facing infrastructure is hosted.",
                    "procedure_description": "andariel has limited its watering hole attacks to specific ip address ranges.[4]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1588.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1588/001",
                    "technique_name": "obtain capabilities : malware",
                    "technique_description": "adversaries may buy, steal, or download malware that can be used during targeting. malicious software can include payloads, droppers, post-compromise tools, backdoors, packers, and c2 protocols. adversaries may acquire malware to support their operations, obtaining a means for maintaining control of remote machines, evading defenses, and executing post-compromise behaviors.",
                    "procedure_description": "andariel has used a variety of publicly-available remote access trojans (rats) for its operations.[1]"
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
                    "procedure_description": "andariel has used watering hole attacks, often with zero-day exploits, to gain initial access to victims within a specific ip range.[3][4]"
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
                    "procedure_description": "andariel has conducted spearphishing campaigns that included malicious word or excel attachments.[4][5]"
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
                    "procedure_description": "andariel has exploited numerous activex vulnerabilities, including zero-days.[3][4][5]"
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
                    "procedure_description": "andariel has attempted to lure victims into enabling malicious macros within email attachments.[5]"
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
                    "procedure_description": "andariel has hidden malicious executables within png files.[4][5]"
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
                    "procedure_description": "andariel has used tasklist to enumerate processes and find a specific string.[6]"
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
                    "procedure_description": "andariel has used the netstat -naop tcp command to display tcp connections on a victim's machine.[6]"
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
                    "procedure_description": "andariel has collected large numbers of files from compromised network systems for later extraction.[4]"
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
                    "procedure_description": "andariel has downloaded additional tools and malware onto compromised hosts.[12]"
                }
            ]
        }
    ]
};