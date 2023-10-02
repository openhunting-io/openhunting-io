var threatdata = {
    "name": "Datper",
    "alias": "Datper",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Datper",
        "names": [
            {
                "name": "Datper"
            }
        ],
        "description": "(JPCERT/CC) Datper communicates with a C&C server using HTTP protocol and operates based on the received commands. One of the characteristics is that it only communicates within a specific period of time.\n\nThe malware receives a command as a response to the above HTTP request, and it executes functions based on the commands. Functions that Datper can execute are the following:\n\u2022 Obtain host names, OS versions etc.\n\u2022 Obtain drive information\n\u2022 Configure communication intervals\n\u2022 Sleep for a set period of time\n\u2022 Execute a program\n\u2022 Operate on files (Obtain file lists, download, upload, delete)\n\u2022 Execute shell commands\n\nAfter executing these functions, Datper sends the results to a C&C server.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blogs.jpcert.or.jp/en/2017/08/detecting-datper-malware-from-proxy-logs.html",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/redbaldknight-bronze-butler-daserf-backdoor-now-using-steganography/",
            "https://www.secureworks.com/research/bronze-butler-targets-japanese-businesses"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.datper"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Datper"
        ],
        "uuid": "26cad6ce-54da-4ad1-8f06-24d59dd4603d",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "datper",
    "analysis": null,
    "articles": [
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
            "data_url": "https://www.macnica.net/mpressioncss/feature_05.html/",
            "date": "2020-01-28",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Tick \u200b\u200bGroup Aiming at Japanese Manufacturing",
            "categories": [
                "Datper",
                "xxmm"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/operation-endtrade-finding-multi-stage-backdoors-that-tick/",
            "date": "2019-11-29",
            "organization": "Trend Micro",
            "author": "Joey Chen",
            "title": "Operation ENDTRADE: Finding Multi-Stage Backdoors that TICK",
            "categories": [
                "Datper",
                "Lilith"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_ta_report_2019_2_nopw.pdf",
            "date": "2019-10-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in Cyber \u200b\u200bEspionage Targeting Japan 1st Half of 2019",
            "categories": [
                "PLEAD",
                "TSCookie",
                "Datper",
                "PLEAD"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_ta_report_2019.pdf",
            "date": "2019-04-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in Cyber \u200b\u200bEspionage Targeting Japan 2nd Half of 2018",
            "categories": [
                "Anel",
                "Cobalt Strike",
                "Datper",
                "PLEAD",
                "Quasar RAT",
                "RedLeaves",
                "taidoor",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_2018-1h-report_mnc_rev3_nopw.pdf",
            "date": "2018-10-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in cyber espionage (targeted attacks) targeting Japan | First half of 2018",
            "categories": [
                "Anel",
                "Cobalt Strike",
                "Datper",
                "FlawedAmmyy",
                "Quasar RAT",
                "RedLeaves",
                "taidoor",
                "Winnti",
                "xxmm"
            ]
        },
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/redbaldknight-bronze-butler-daserf-backdoor-now-using-steganography/",
            "date": "2017-11-07",
            "organization": "Trend Micro",
            "author": "Trendmicro",
            "title": "REDBALDKNIGHT/BRONZE BUTLER\u2019s Daserf Backdoor Now Using Steganography",
            "categories": [
                "Daserf",
                "Datper",
                "xxmm"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/bronze-butler-targets-japanese-businesses",
            "date": "2017-10-12",
            "organization": "Secureworks",
            "author": "CTU Research Team",
            "title": "BRONZE BUTLER Targets Japanese Enterprises",
            "categories": [
                "Daserf",
                "Datper",
                "rarstar",
                "xxmm",
                "Tick"
            ]
        },
        {
            "data_url": "http://blog.jpcert.or.jp/2017/08/detecting-datper-malware-from-proxy-logs.html",
            "date": "2017-08-21",
            "organization": "JPCERT/CC",
            "author": "Yu Nakamura",
            "title": "Detecting Datper Malware from Proxy Logs",
            "categories": [
                "Datper",
                "Tick"
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