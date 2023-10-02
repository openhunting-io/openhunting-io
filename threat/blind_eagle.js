var threatdata = {
    "name": "Blind Eagle",
    "alias": "Blind Eagle, APT-C-36",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "Blind Eagle",
        "names": [
            {
                "name": "Blind Eagle",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "APT-C-36",
                "name-giver": "Qihoo 360"
            }
        ],
        "country": [
            "Colombia"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Qihoo 360) Since April 2018, an APT group (Blind Eagle, APT-C-36) suspected coming from South America carried out continuous targeted attacks against Colombian government institutions as well as important corporations in financial sector, petroleum industry, professional manufacturing, etc.\n\nTill this moment, 360 Threat Intelligence Center captured 29 bait documents, 62 Trojan samples and multiple related malicious domains in total. Attackers are targeting Windows platform and aiming at government institutions as well as big companies in Colombia.",
        "observed-sectors": [
            "Energy",
            "Financial",
            "Government",
            "Healthcare",
            "Manufacturing",
            "large domestic companies and multinational corporation branches"
        ],
        "observed-countries": [
            "Colombia",
            "Ecuador",
            "Panama",
            "Spain"
        ],
        "tools": [
            "AsyncRAT",
            "BitRAT",
            "Imminent Monitor RAT",
            "njRAT",
            "LimeRAT",
            "RemcosRAT",
            "Warzone RAT"
        ],
        "operations": [
            {
                "date": "2021-09",
                "activity": "APT-C-36 Updates Its Spam Campaign Against South American Entities With Commodity RATs\nhttps://www.trendmicro.com/en_us/research/21/i/apt-c-36-updates-its-long-term-spam-campaign-against-south-ameri.html"
            },
            {
                "date": "2022",
                "activity": "BlindEagle Targeting Ecuador With Sharpened Tools\nhttps://research.checkpoint.com/2023/blindeagle-targeting-ecuador-with-sharpened-tools/"
            },
            {
                "date": "2023-02",
                "activity": "Blind Eagle Deploys Fake UUE Files and Fsociety to Target Colombia's Judiciary, Financial, Public, and Law Enforcement Entities\nhttps://blogs.blackberry.com/en/2023/02/blind-eagle-apt-c-36-targets-colombia"
            }
        ],
        "information": [
            "https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/",
            "https://threatmon.io/apt-blind-eagles-malware-arsenal-technical-analysis/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0099/"
        ],
        "uuid": "1421d8ca-9aff-4245-8ee4-cdf72c4c65c5",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blind_eagle",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/",
            "date": "2019-02-18",
            "organization": "360 Threat Intelligence",
            "author": "Anxin Threat Intelligence Center",
            "title": "APT-C-36: Continuous Attacks Targeting Colombian Government Institutions and Corporations",
            "categories": [
                "Imminent Monitor RAT",
                "APT-C-36"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "apt-c-36",
            "procedure_code": "g0099",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0099",
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
                    "procedure_description": "apt-c-36 obtained and used a modified variant of imminent monitor.[3]"
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
                    "procedure_description": "apt-c-36 has used spearphishing emails with password protected rar attachment to avoid being detected by the email gateway.[7]"
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
                    "procedure_description": "apt-c-36 has embedded a vbscript within a malicious word document which is executed upon the document opening.[8]"
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
                    "procedure_description": "apt-c-36 has used a macro function to set scheduled tasks, disguised as those used by google.[8]"
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
                    "procedure_description": "apt-c-36 has prompted victims to accept macros in order to execute the subsequent payload.[9]"
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
                    "procedure_description": "apt-c-36 has used a macro function to set scheduled tasks, disguised as those used by google.[8]"
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
                    "procedure_description": "apt-c-36 has used a macro function to set scheduled tasks, disguised as those used by google.[8]"
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
                    "procedure_description": "apt-c-36 has disguised its scheduled tasks as those used by google.[5]"
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
                    "procedure_description": "apt-c-36 has used confuserex to obfuscate its variant of imminent monitor, compressed payload and rat packages, and password protected encrypted email attachments to avoid detection.[17]"
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
                    "procedure_description": "apt-c-36 has downloaded binary data from a specified domain after the malicious document is opened.[13]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "apt-c-36 has used port 4050 for c2 communications.[4]"
                }
            ]
        }
    ]
};