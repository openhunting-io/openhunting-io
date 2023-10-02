var threatdata = {
    "name": "EQUATIONDRUG",
    "alias": "EQUATIONDRUG, EQUESTRE",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "EQUATIONDRUG",
        "names": [
            {
                "name": "EQUATIONDRUG"
            },
            {
                "name": "EQUESTRE"
            }
        ],
        "description": "(Kaspersky) EquationDrug is one of the main espionage platforms used by the Equation Group, a highly sophisticated threat actor that has been engaged in multiple CNE (computer network exploitation) operations dating back to 2001, and perhaps as early as 1996.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08064459/Equation_group_questions_and_answers.pdf",
            "https://securelist.com/equation-the-death-star-of-malware-galaxy/68750/",
            "https://securelist.com/inside-the-equationdrug-espionage-platform/69203/",
            "http://artemonsecurity.blogspot.com/2017/03/equationdrug-rootkit-analysis-mstcp32sys.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.equationdrug"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:equationdrug"
        ],
        "uuid": "c6f4d24f-a693-4954-9a8f-4bbfd17d8341",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "equationdrug",
    "analysis": null,
    "articles": [],
    "mitre": [
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
        },
        {
            "procedure_name": "equation",
            "procedure_code": "g0020",
            "procedure_type": "apt-group",
            "procedure_link": "https://attack.mitre.org/groups/G0020",
            "techniques": [
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1542.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/002",
                    "technique_name": "pre-os boot : component firmware",
                    "technique_description": "adversaries may modify component firmware to persist on systems. some adversaries may employ sophisticated means to compromise computer components and install malicious firmware that will execute adversary code outside of the operating system and main system firmware or bios. this technique may be similar to system firmware but conducted upon other system components/devices that may not have the same capability or level of integrity checking.",
                    "procedure_description": "equation is known to have the capability to overwrite the firmware on hard drives from some manufacturers.[2]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1480.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1480/001",
                    "technique_name": "execution guardrails : environmental keying",
                    "technique_description": "adversaries may environmentally key payloads or other features of malware to evade defenses and constraint execution to a specific target environment. environmental keying uses cryptography to constrain execution or actions based on adversary supplied environment specific conditions that are expected to be present on the target. environmental keying is an implementation of execution guardrails that utilizes cryptographic techniques for deriving encryption/decryption keys from specific types of values in a given computing environment.",
                    "procedure_description": "equation has been observed utilizing environmental keying in payload delivery.[2][9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/005",
                    "technique_name": "hide artifacts : hidden file system",
                    "technique_description": "adversaries may use a hidden file system to conceal malicious activity from users and security tools. file systems provide a structure to store and access data from physical storage. typically, a user engages with a file system through applications that allow them to access files and directories, which are an abstraction from their physical location (ex: disk sector). standard file systems include fat, ntfs, ext4, and apfs. file systems can also contain other structures, such as the volume boot record (vbr) and master file table (mft) in ntfs.",
                    "procedure_description": "equation has used an encrypted virtual file system stored in the windows registry.[4]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1542.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/002",
                    "technique_name": "pre-os boot : component firmware",
                    "technique_description": "adversaries may modify component firmware to persist on systems. some adversaries may employ sophisticated means to compromise computer components and install malicious firmware that will execute adversary code outside of the operating system and main system firmware or bios. this technique may be similar to system firmware but conducted upon other system components/devices that may not have the same capability or level of integrity checking.",
                    "procedure_description": "equation is known to have the capability to overwrite the firmware on hard drives from some manufacturers.[2]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "equation has used tools with the functionality to search for specific information about the attached hard drive that could be used to identify and overwrite the firmware.[18]"
                }
            ]
        }
    ]
};