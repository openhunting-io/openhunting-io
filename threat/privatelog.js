var threatdata = {
    "name": "PRIVATELOG",
    "alias": "PRIVATELOG",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "PRIVATELOG",
        "names": [
            {
                "name": "PRIVATELOG"
            }
        ],
        "description": "(Cybereason) PRIVATELOG is a module that exists in 2 forms:\n<BR />\u2022 Wlbsctrl.dll: A DLL to be side-loaded by the IKEEXT service, aiming to execute on Windows Vista to Windows 7 operating systems.\n\u2022 Prntvpt.dll: A DLL to be side loaded by the PrintNotify service, aiming to execute on Windows Server 2012 to Windows 10 operating systems.\n\nAs both of the DLLs are being loaded by native Windows services, they both live in the context of the svchost process, but differ in their execution flow.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive",
            "https://www.mandiant.com/resources/unknown-actor-using-clfs-log-files-for-stealth"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.privatelog"
        ],
        "uuid": "3f25cda3-f293-4a3a-9b3a-7cdef172f7d9",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "privatelog",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cybereason.com/blog/operation-cuckoobees-deep-dive-into-stealthy-winnti-techniques",
            "date": "2022-05-04",
            "organization": "Cybereason",
            "author": "Chen Erlich",
            "title": "Operation CuckooBees: Deep-Dive into Stealthy Winnti Techniques",
            "categories": [
                "PRIVATELOG",
                "Spyder",
                "STASHLOG",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive",
            "date": "2022-05-04",
            "organization": "Cybereason",
            "author": "Chen Erlich",
            "title": "Operation CuckooBees: A Winnti Malware Arsenal Deep-Dive",
            "categories": [
                "PRIVATELOG",
                "Spyder",
                "STASHLOG",
                "Winnti"
            ]
        },
        {
            "data_url": "https://twitter.com/ESETresearch/status/1433819369784610828",
            "date": "2021-09-03",
            "organization": "Twitter (@ESETresearch)",
            "author": "ESET Research",
            "title": "Twitter thread on SPARKLOG, a launcher component for PRIVATELOG along with STASHLOG",
            "categories": [
                "PRIVATELOG",
                "STASHLOG"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/09/unknown-actor-using-clfs-log-files-for-stealth.html",
            "date": "2021-09-01",
            "organization": "FireEye",
            "author": "Adrien Bataille",
            "title": "Too Log; Didn't Read \u2014 Unknown Actor Using CLFS Log Files for Stealth",
            "categories": [
                "PRIVATELOG",
                "STASHLOG"
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