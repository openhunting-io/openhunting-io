var threatdata = {
    "name": "KOMPROGO",
    "alias": "KOMPROGO, Splinter RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "KOMPROGO",
        "names": [
            {
                "name": "KOMPROGO"
            },
            {
                "name": "Splinter RAT"
            }
        ],
        "description": "(Cylance) Splinter arrives as an MSBuild project file containing a Base64 encoded PowerShell script generated using the MSFvenom psh-reflection module. As in the case of Remy, it utilizes on-the-fly C# compilation and strips off several PowerShell wrappers before the shellcode that calls the final payload is invoked. The backdoor itself is a Win32 PE EXE file and has the capability to collect information, download and execute payloads, run WMI queries, and manipulate files, processes, and registry entries. The overall functionality of Splinter appears pretty much in line with the \u201cKOMPROGO\u201d malware (as described in the FireEye APT32 report).",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.cylance.com/content/dam/cylance-web/en-us/resources/knowledge-center/resource-library/reports/SpyRATsofOceanLotusMalwareWhitePaper.pdf",
            "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0156/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.komprogo"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:KOMPROGO"
        ],
        "uuid": "27f94f7d-9871-458b-aac3-7d48efce7047",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "komprogo",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cylance.com/content/dam/cylance-web/en-us/resources/knowledge-center/resource-library/reports/SpyRATsofOceanLotusMalwareWhitePaper.pdf",
            "date": "2018-11-02",
            "organization": "Cylance",
            "author": "Cylance",
            "title": "The SpyRATs of OceanLotus",
            "categories": [
                "KOMPROGO",
                "PHOREAL"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html",
            "date": "2017-05-14",
            "organization": "FireEye",
            "author": "Nick Carr",
            "title": "Cyber Espionage is Alive and Well: APT32 and the Threat to Global Corporations",
            "categories": [
                "OceanLotus",
                "Cuegoe",
                "KOMPROGO",
                "SOUNDBITE",
                "APT32"
            ]
        },
        {
            "data_url": "https://ruxcon.org.au/assets/2017/slides/bart-RuxCon-Presentation.pptx",
            "date": "2017",
            "organization": "FireEye",
            "author": "Bart Inglot",
            "title": "ATTACKER ANTICS: Illustrations of Ingenuity",
            "categories": [
                "KOMPROGO",
                "SOUNDBITE"
            ]
        },
        {
            "data_url": "https://www.symantec.com/security_response/earthlink_writeup.jsp?docid=2015-120808-5327-99",
            "date": "2015-12-08",
            "organization": "Symantec",
            "author": "Symantec",
            "title": "Backdoor.Komprogo",
            "categories": [
                "KOMPROGO"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "komprogo",
            "procedure_code": "s0156",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0156",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "komprogo is capable of creating a reverse shell.[182]"
                },
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
                    "procedure_description": "komprogo is capable of running wmi queries.[65]"
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
                    "procedure_description": "komprogo is capable of retrieving information about the infected system.[196]"
                }
            ]
        },
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