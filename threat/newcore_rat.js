var threatdata = {
    "name": "NewCore RAT",
    "alias": "NewCore RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration, Tunneling",
    "modified": "2020-09-24",
    "all_data": {
        "tool": "NewCore RAT",
        "names": [
            {
                "name": "NewCore RAT"
            }
        ],
        "description": "(Fortinet) This RAT is a DLL file. Its malicious routines are contained in its imported function \u201cProcessTrans\u201d. However, executing the DLL without using the downloader will not work as the C&C server string is not embedded in its body. When the downloader calls the function \u201cProcessTrans\u201d, it supplies to the function the C&C server string and a handle to the C&C server internet session. In this case, Heuristic detection based on behavior will not work on the DLL alone.\n\nThis RAT is capable of the following:\n\n\u2022 Shutdown the machine\n\u2022 Restart the machine\n\u2022 Get disk list\n\u2022 Get directory list\n\u2022 Get file information\n\u2022 Get disk information\n\u2022 Rename files\n\u2022 Copy files\n\u2022 Delete files\n\u2022 Execute files\n\u2022 Search files\n\u2022 Download files\n\u2022 Upload files\n\u2022 Screen monitoring\n\u2022 Start command shell\n\nNewCore RAT may just be a rehashed {{PCClient}} RAT, but it proves to be effective in evading AV detection by using a combination of simple techniques such as DLL-hijacking, file-less execution of downloaded malware, and passing C&C information as parameter from downloader to the downloaded file.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/rehashed-rat-used-in-apt-campaign-against-vietnamese-organizations.html",
            "https://securelist.com/cycldek-bridging-the-air-gap/97157/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.newcore_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:NewCore"
        ],
        "uuid": "55a366cc-0771-4854-85a3-5eed99e33f9e",
        "last-card-change": "2020-06-04",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "newcore_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://drive.google.com/file/d/11otA_VmL061KcFC5MhDYuNdIKHYbpyrd/view",
            "date": "2020-09-24",
            "organization": "CARO",
            "author": "Mark Lechtik",
            "title": "Cycldek aka Goblin Panda: Chronicles of the Goblin",
            "categories": [
                "NewCore RAT",
                "USBCulprit"
            ]
        },
        {
            "data_url": "https://securelist.com/cycldek-bridging-the-air-gap/97157/",
            "date": "2020-06-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Cycldek: Bridging the (air) gap",
            "categories": [
                "8.t Dropper",
                "NewCore RAT",
                "PlugX",
                "USBCulprit",
                "GOBLIN PANDA",
                "Hellsing"
            ]
        },
        {
            "data_url": "https://blog.viettelcybersecurity.com/p1-chien-dich-cua-nhom-apt-trung-quoc-goblin-panda-tan-cong-vao-viet-nam-loi-dung-dai-dich-covid-19/",
            "date": "2020-05-01",
            "organization": "Viettel Cybersecurity",
            "author": "Cyberthreat",
            "title": "Chi\u1ebfn d\u1ecbch c\u1ee7a nh\u00f3m APT Trung Qu\u1ed1c Goblin Panda t\u1ea5n c\u00f4ng v\u00e0o Vi\u1ec7t Nam l\u1ee3i d\u1ee5ng \u0111\u1ea1i d\u1ecbch Covid-19 (ph\u1ea7n 1)",
            "categories": [
                "NewCore RAT",
                "PlugX"
            ]
        },
        {
            "data_url": "https://meltx0r.github.io/tech/2020/02/12/goblin-panda-apt.html",
            "date": "2020-02-12",
            "organization": "MeltX0R Security",
            "author": "MeltX0R",
            "title": "Goblin Panda APT: Recent infrastructure and RAT analysis",
            "categories": [
                "NewCore RAT"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2020/01/an-overhead-view-of-the-royal-road.html",
            "date": "2020-01-29",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "An Overhead View of the Royal Road",
            "categories": [
                "BLACKCOFFEE",
                "Cotx RAT",
                "Datper",
                "DDKONG",
                "Derusbi",
                "Icefog",
                "Korlia",
                "NewCore RAT",
                "PLAINTEE",
                "Poison Ivy",
                "Sisfader"
            ]
        },
        {
            "data_url": "https://medium.com/@Sebdraven/goblin-panda-continues-to-target-vietnam-bc2f0f56dcd6",
            "date": "2019-05-02",
            "organization": "Medium Sebdraven",
            "author": "S\u00e9bastien Larinier",
            "title": "Goblin Panda continues to target Vietnam",
            "categories": [
                "NewCore RAT"
            ]
        },
        {
            "data_url": "https://blog.fortinet.com/2017/09/05/rehashed-rat-used-in-apt-campaign-against-vietnamese-organizations",
            "date": "2017-09-05",
            "organization": "Fortinet",
            "author": "Jasper Manuel",
            "title": "Rehashed RAT Used in APT Campaign Against Vietnamese Organizations",
            "categories": [
                "NewCore RAT"
            ]
        }
    ],
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