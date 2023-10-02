var threatdata = {
    "name": "POWBAT",
    "alias": "POWBAT",
    "category": "Malware",
    "type": "Info stealer, Exfiltration, Tunneling",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "POWBAT",
        "names": [
            {
                "name": "POWBAT"
            }
        ],
        "description": "(FireEye) After the macro successfully creates the scheduled task, the dropped VBScript, update.vbs (Figure 5), will be launched every three minutes. This VBScript performs the following operations:\n\n1. Leverages PowerShell to download content from the URI hxxp://go0gIe[.]com/sysupdate.aspx?req=xxx\\dwn&m=d and saves it in the directory %PUBLIC%\\Libraries\\dn.\n2. Uses PowerShell to download a BAT file from the URI hxxp://go0gIe[.]com/sysupdate.aspx?req=xxx\\bat&m=d and saves it in the directory %PUBLIC%\\Libraries\\dn.\n3. Executes the BAT file and stores the results in a file in the path %PUBLIC%\\Libraries\\up.\n4. Uploads this file to the server by sending an HTTP POST request to the URI hxxp://go0gIe[.]com/sysupdate.aspx?req=xxx\\upl&m=u.\n5. Finally, it executes the PowerShell script dns.ps1, which is used for the purpose of data exfiltration using DNS.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2016/05/targeted_attacksaga.html",
            "https://www.fireeye.com/blog/threat-research/2017/12/targeted-attack-in-middle-east-by-apt34.html"
        ],
        "uuid": "e87032a7-d42b-4d9b-a20e-9380e1c51cd7",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powbat",
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