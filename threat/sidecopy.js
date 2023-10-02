var threatdata = {
    "name": "SideCopy",
    "alias": "SideCopy",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-25",
    "all_data": {
        "actor": "SideCopy",
        "names": [
            {
                "name": "SideCopy",
                "name-giver": "Seqrite"
            }
        ],
        "country": [
            "Pakistan"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Seqrite) Operation SideCopy is active from early 2019, till date.\nThis cyber-operation has been only targeting Indian defence forces and armed forces personnel.\nMalware modules seen are constantly under development and updated modules are released after a reconnaissance of victim data.\nActors are keeping track of malware detections and updating modules when detected by AV.\nAlmost all CnC belongs to Contabo GmbH and server names are similar to machine names found in the Transparent Tribe report.\nThis threat actor is misleading the security community by copying TTPs that point at {{SideWinder, Rattlesnake}} APT group.\nWe suspect this threat actor has links with {{Transparent Tribe, APT 36}} APT group.",
        "observed-countries": [
            "India"
        ],
        "tools": [
            "ActionRAT",
            "Allakore RAT",
            "CetaRAT",
            "DetaRAT",
            "EpicenterRAT",
            "Lilith RAT",
            "MargulasRAT",
            "njRAT",
            "ReverseRAT"
        ],
        "operations": [
            {
                "date": "2021-07",
                "activity": "InSideCopy: How this APT continues to evolve its arsenal\nhttps://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/095/591/original/062521_SideCopy_%281%29.pdf?1625657388"
            },
            {
                "date": "2023-02",
                "activity": "APT SideCopy Targeting Indian Government Entities\nhttps://threatmon.io/apt-sidecopy-targeting-indian-government-entities/"
            },
            {
                "date": "2023-03",
                "activity": "Notorious SideCopy APT group sets sights on India\u2019s DRDO\nhttps://blog.cyble.com/2023/03/21/notorious-sidecopy-apt-group-sets-sights-on-indias-drdo/"
            }
        ],
        "counter-operations": [
            {
                "date": "2021-08",
                "activity": "Taking Action Against Hackers in Pakistan and Syria\nhttps://about.fb.com/news/2021/11/taking-action-against-hackers-in-pakistan-and-syria/"
            }
        ],
        "information": [
            "https://www.seqrite.com/blog/operation-sidecopy/",
            "https://blog.malwarebytes.com/threat-intelligence/2021/12/sidecopy-apt-connecting-lures-to-victims-payloads-to-infrastructure/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G1008/"
        ],
        "uuid": "9fd705e5-6b3c-4e0b-b21c-ebb9dc854fc3",
        "last-card-change": "2023-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sidecopy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.telsy.com/sidecopy-apt-from-windows-to-nix/",
            "date": "2022-01-05",
            "organization": "Telsy",
            "author": "Claudio Di Giuseppe",
            "title": "SIDECOPY APT: From Windows to *nix",
            "categories": [
                "SideCopy"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-intelligence/2021/12/sidecopy-apt-connecting-lures-to-victims-payloads-to-infrastructure/",
            "date": "2021-12-02",
            "organization": "Malwarebytes",
            "author": "Hossein Jazi",
            "title": "SideCopy APT: Connecting lures to victims, payloads to infrastructure",
            "categories": [
                "SideCopy"
            ]
        },
        {
            "data_url": "https://about.fb.com/news/2021/11/taking-action-against-hackers-in-pakistan-and-syria/",
            "date": "2021-11-16",
            "organization": "META",
            "author": "Mike Dvilyanski",
            "title": "Taking Action Against Hackers in Pakistan and Syria",
            "categories": [
                "SideCopy"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2021/07/sidecopy.html",
            "date": "2021-07-07",
            "organization": "Talos Intelligence",
            "author": "Asheer Malhotra",
            "title": "InSideCopy: How this APT continues to evolve its arsenal",
            "categories": [
                "AllaKore",
                "NjRAT",
                "SideCopy"
            ]
        },
        {
            "data_url": "https://www.seqrite.com/blog/operation-sidecopy/",
            "date": "2020-09-23",
            "organization": "Seqrite",
            "author": "Kalpesh Mantri",
            "title": "Operation SideCopy!",
            "categories": [
                "SideCopy"
            ]
        },
        {
            "data_url": "https://sebdraven.medium.com/copy-cat-of-apt-sidewinder-1893059ca68d",
            "date": "2019-07-08",
            "organization": "Medium Sebdraven",
            "author": "S\u00e9bastien Larinier",
            "title": "Copy cat of APT Sidewinder ?",
            "categories": [
                "AllaKore",
                "SideCopy"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "sidecopy",
            "procedure_code": "g1008",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G1008",
            "techniques": [
                {
                    "tactic_code": "ta0043",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0043",
                    "tactic_name": "reconnaissance",
                    "tactic_alias": "reconnaissance",
                    "tactic_description": "The adversary is trying to gather information they can use to plan future operations.",
                    "technique_code": "t1598.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1598/002",
                    "technique_name": "phishing for information : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing messages with a malicious attachment to elicit sensitive information that can be used during targeting. spearphishing for information is an attempt to trick targets into divulging information, frequently credentials or other actionable information. spearphishing for information frequently involves social engineering techniques, such as posing as a source with a reason to collect information (ex: establish accounts or compromise accounts) and/or sending multiple, seemingly urgent messages.",
                    "procedure_description": "sidecopy has crafted generic lures for spam campaigns to collect emails and credentials for targeting efforts.[5]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1584.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1584/001",
                    "technique_name": "compromise infrastructure : domains",
                    "technique_description": "adversaries may hijack domains and/or subdomains that can be used during targeting. domain registration hijacking is the act of changing the registration of a domain name without the permission of the original registrant. adversaries may gain access to an email account for the person listed as the owner of the domain. the adversary can then claim that they forgot their password in order to make changes to the domain registration. other possibilities include social engineering a domain registration help desk to gain access to an account or taking advantage of renewal process gaps.",
                    "procedure_description": "sidecopy has compromised domains for some of their infrastructure, including for c2 and staging malware.[15]"
                },
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1608.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1608/001",
                    "technique_name": "stage capabilities : upload malware",
                    "technique_description": "adversaries may upload malware to third-party or adversary controlled infrastructure to make it accessible during targeting. malicious software can include payloads, droppers, post-compromise tools, backdoors, and a variety of other malicious content. adversaries may upload malware to support their operations, such as making a payload available to a victim network to enable ingress tool transfer by placing it on an internet accessible web server.",
                    "procedure_description": "sidecopy has used compromised domains to host its malicious payloads.[24]"
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
                    "procedure_description": "sidecopy has sent spearphishing emails with malicious hta file attachments.[205]"
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
                    "procedure_description": "sidecopy has sent microsoft office publisher documents to victims that have embedded malicious macros that execute an hta file via calling mshta.exe.[142]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "sidecopy has executed malware by calling the api function createprocessw.[154]"
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
                    "procedure_description": "sidecopy has attempted to lure victims into clicking on malicious embedded archive files sent via spearphishing campaigns.[211]"
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
                    "procedure_description": "sidecopy has used a malicious loader dll file to execute the credwiz.exe process and side-load the malicious payload duser.dll.[58]"
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
                    "procedure_description": "sidecopy has used a malicious loader dll file to execute the credwiz.exe process and side-load the malicious payload duser.dll.[58]"
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
                    "procedure_description": "sidecopy has used a malicious loader dll file to execute the credwiz.exe process and side-load the malicious payload duser.dll.[58]"
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
                    "procedure_description": "sidecopy has used a legitimate dll file name, duser.dll to disguise a malicious remote access tool.[148]"
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
                    "procedure_description": "sidecopy has utilized mshta.exe to execute a malicious hta file.[32]"
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
                    "procedure_description": "sidecopy has collected browser information from a compromised host.[28]"
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
                    "procedure_description": "sidecopy uses a loader dll file to collect av product names from an infected host.[4]"
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
                    "procedure_description": "sidecopy has identified the os version of a compromised host.[8]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1614",
                    "technique_link": "https://attack.mitre.org/techniques/T1614",
                    "technique_name": "system location discovery",
                    "technique_description": "adversaries may gather information in an attempt to calculate the geographical location of a victim host. adversaries may use the information from system location discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "sidecopy has identified the country location of a compromised host.[15]"
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
                    "procedure_description": "sidecopy has identified the ip address of a compromised host.[3]"
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
                    "procedure_description": "sidecopy has delivered trojanized executables via spearphishing emails that contacts actor-controlled servers to download malicious payloads.[4]"
                }
            ]
        }
    ]
};