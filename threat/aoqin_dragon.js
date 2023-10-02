var threatdata = {
    "name": "Aoqin Dragon",
    "alias": "Aoqin Dragon, UNC94",
    "category": "APT",
    "type": "-",
    "modified": "2023-01-01",
    "all_data": {
        "actor": "Aoqin Dragon",
        "names": [
            {
                "name": "Aoqin Dragon",
                "name-giver": "SentinelLabs"
            },
            {
                "name": "UNC94",
                "name-giver": "Mandiant"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(SentinelLabs) SentinelLabs has uncovered a cluster of activity beginning at least as far back as 2013 and continuing to the present day, primarily targeting organizations in Southeast Asia and Australia. We assess that the threat actor\u2019s primary focus is espionage and relates to targets in Australia, Cambodia, Hong Kong, Singapore, and Vietnam. We track this activity as \u2018Aoqin Dragon\u2019.\n\nThe threat actor has a history of using document lures with pornographic themes to infect users and makes heavy use of USB shortcut techniques to spread the malware and infect additional targets. Attacks attributable to Aoqin Dragon typically drop one of two backdoors, Mongall and a modified version of the open source Heyoka project.",
        "observed-sectors": [
            "Education",
            "Government",
            "Telecommunications"
        ],
        "observed-countries": [
            "Australia",
            "Cambodia",
            "Hong Kong",
            "Singapore",
            "Vietnam"
        ],
        "tools": [
            "Mongall"
        ],
        "information": [
            "https://www.sentinelone.com/labs/aoqin-dragon-newly-discovered-chinese-linked-apt-has-been-quietly-spying-on-organizations-for-10-years/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G1007/"
        ],
        "uuid": "b7569cec-8a82-4a0f-80d3-a4659ba2161d",
        "last-card-change": "2023-01-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "aoqin_dragon",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://khonggianmang.vn/uploads/CB_941_Canhbao_APT_36c5a857fa.pdf",
            "date": "2022-06-27",
            "organization": "Socialist Republic of Vietnam",
            "author": "Information Department of Information Security",
            "title": "V/v to review and prevent risks attack APT",
            "categories": [
                "Aoqin Dragon"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/aoqin-dragon-newly-discovered-chinese-linked-apt-has-been-quietly-spying-on-organizations-for-10-years/",
            "date": "2022-06-09",
            "organization": "Sentinel LABS",
            "author": "Joey Chen",
            "title": "Aoqin Dragon | Newly-Discovered Chinese-linked APT Has Been Quietly Spying On Organizations For 10 Years",
            "categories": [
                "heyoka",
                "mongall",
                "Aoqin Dragon"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "aoqin dragon",
            "procedure_code": "g1007",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G1007",
            "techniques": [
                {
                    "tactic_code": "ta0042",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0042",
                    "tactic_name": "resource development",
                    "tactic_alias": "resource_development",
                    "tactic_description": "The adversary is trying to establish resources they can use to support operations.",
                    "technique_code": "t1587.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1587/001",
                    "technique_name": "develop capabilities : malware",
                    "technique_description": "adversaries may develop malware and malware components that can be used during targeting. building malicious software can include the development of payloads, droppers, post-compromise tools, backdoors (including backdoored images), packers, c2 protocols, and the creation of infected removable media. adversaries may develop malware to support their operations, creating a means for maintaining control of remote machines, evading defenses, and executing post-compromise behaviors.",
                    "procedure_description": "aoqin dragon has used custom malware, including mongall and heyoka backdoor, in their operations.[6]"
                },
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
                    "procedure_description": "aoqin dragon obtained the heyoka open source exfiltration tool and subsequently modified it for their operations.[2]"
                },
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "aoqin dragon has used a dropper that employs a worm infection strategy using a removable device to breach a secure network environment.[5]"
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
                    "procedure_description": "aoqin dragon has exploited cve-2012-0158 and cve-2010-3333 for execution against targeted systems.[6]"
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
                    "procedure_description": "aoqin dragon has lured victims into opening weaponized documents, fake external drives, and fake antivirus to execute malicious payloads.[6]"
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
                    "procedure_description": "aoqin dragon has used fake icons including antivirus and external drives to disguise malicious payloads.[3]"
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
                    "procedure_description": "aoqin dragon has used the themida packer to obfuscate malicious payloads.[5]"
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
                    "procedure_description": "aoqin dragon has run scripts to identify file formats including microsoft word.[9]"
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
                    "procedure_description": "aoqin dragon has spread malware in target networks by copying modules to folders masquerading as removable devices.[3]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1091",
                    "technique_link": "https://attack.mitre.org/techniques/T1091",
                    "technique_name": "replication through removable media",
                    "technique_description": "adversaries may move onto systems, possibly those on disconnected or air-gapped networks, by copying malware to removable media and taking advantage of autorun features when the media is inserted into a system and executes. in the case of lateral movement, this may occur through modification of executable files stored on removable media or by copying malware and renaming it to look like a legitimate file to trick users into executing it on a separate system. in the case of initial access, this may occur through manual manipulation of the media, modification of systems used to initially format the media, or modification to the media's firmware itself.",
                    "procedure_description": "aoqin dragon has used a dropper that employs a worm infection strategy using a removable device to breach a secure network environment.[5]"
                }
            ]
        }
    ]
};