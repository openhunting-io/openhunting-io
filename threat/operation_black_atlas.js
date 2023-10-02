var threatdata = {
    "name": "Operation Black Atlas",
    "alias": "Operation Black Atlas",
    "category": "APT",
    "type": "-",
    "modified": "2020-05-24",
    "all_data": {
        "actor": "Operation Black Atlas",
        "names": [
            {
                "name": "Operation Black Atlas",
                "name-giver": "Trend Micro"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2015",
        "description": "(Trend Micro) With the coming holidays also come news of various credit card breaches that endanger the data of many industries and their customers. High-profile breaches, such as that of the Hilton Hotel and other similar establishments, were accomplished using point-of-sale (PoS) malware, leading many to fear digital threats on brick-and-mortar retailers this Thanksgiving, Black Friday, Cyber Monday, and the rest of the holiday season. Researchers also found a broad campaign that uses the modular ModPOS malware to steal payment card data from retailers in the US.\n\nHowever, from what we have seen, it is not only retailers in the US that are at risk of breaches. Our researchers recently found an early version of a potentially powerful, adaptable, and invisible botnet that seeks out PoS systems within networks. It has already extended its reach to small and medium sized business networks all over the world, including a healthcare organization in the US. We are calling this operation Black Atlas, in reference to BlackPOS, the malware primarily used in this operation.\n\nOperation Black Atlas has been around since September 2015, just in time to plant its seeds before the holiday season. Its targets include businesses in the healthcare, retail, and more industries which rely on card payment systems.",
        "observed-sectors": [
            "Financial",
            "Healthcare",
            "Hospitality",
            "Manufacturing",
            "Retail"
        ],
        "observed-countries": [
            "Australia",
            "Chile",
            "Germany",
            "India",
            "Taiwan",
            "UK",
            "USA"
        ],
        "tools": [
            "Alina POS",
            "BlackPOS",
            "Gorynych",
            "ModPOS",
            "NewPosThings"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-black-atlas-endangers-in-store-card-payments-and-smbs-worldwide-switches-between-blackpos-and-other-tools/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-black-atlas-part-2-tools-and-malware-used-and-how-to-detect-them/"
        ],
        "uuid": "d9f5f715-7598-4037-a55f-a5fbc31cb14b",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "operation_black_atlas",
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
        }
    ]
};