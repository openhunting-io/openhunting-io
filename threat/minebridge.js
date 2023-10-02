var threatdata = {
    "name": "MINEBRIDGE",
    "alias": "MINEBRIDGE, MINEBRIDGE RAT, GazGolder",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2021-06-24",
    "all_data": {
        "tool": "MINEBRIDGE",
        "names": [
            {
                "name": "MINEBRIDGE"
            },
            {
                "name": "MINEBRIDGE RAT"
            },
            {
                "name": "GazGolder"
            }
        ],
        "description": "(FireEye) MINEBRIDGE is a 32-bit C++ backdoor designed to be loaded by an older, unpatched instance of the legitimate remote desktop software {{TeamViewer}} by DLL load-order hijacking. The backdoor hooks Windows APIs to prevent the victim from seeing the TeamViewer application. By default, MINEBRIDGE conducts command and control (C2) communication via HTTPS POST requests to hard-coded C2 domains. The POST requests contain a GUID derived from the system\u2019s volume serial number, a TeamViewer unique id and password, username, computer name, operating system version, and beacon interval. MINEBRIDGE can also communicate with a C2 server by sending TeamViewer chat messages using a custom window procedure hook. Collectively, the two C2 methods support commands for downloading and executing payloads, downloading arbitrary files, self-deletion and updating, process listing, shutting down and rebooting the system, executing arbitrary shell commands, process elevation, turning on/off TeamViewer's microphone, and gathering system UAC information.\n\nMINEBRIDGE\u2019s default method of communication is sending HTTPS POST requests over TCP port 443. This method of communication is always active; however, the beacon-interval time may be changed via a command. Before sending any C2 beacons, the sample waits to collect the TeamViewer generated unique id (<tv_id>) and password (<tv_pass>) via SetWindowsTextW hooks.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2020/01/stomp-2-dis-brilliance-in-the-visual-basics.html",
            "https://www.zscaler.com/blogs/security-research/return-minebridge-rat-new-ttps-and-social-engineering-lures",
            "https://labs.sentinelone.com/breaking-ta505s-crypter-with-an-smt-solver/",
            "https://blog.morphisec.com/minebridge-on-the-rise-sophisticated-delivery-mechanism"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.minebridge"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:MINEBRIDGE"
        ],
        "uuid": "a84d3839-83ef-427c-b914-f46018515096",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "minebridge",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/demystifying-full-attack-chain-minebridge-rat",
            "date": "2021-06-24",
            "organization": "Zscaler",
            "author": "Sudeep Singh",
            "title": "Demystifying the full attack chain of MineBridge RAT",
            "categories": [
                "MINEBRIDGE"
            ]
        },
        {
            "data_url": "https://blog.morphisec.com/minebridge-on-the-rise-sophisticated-delivery-mechanism",
            "date": "2021-03-09",
            "organization": "Morphisec",
            "author": "Alon Groisman",
            "title": "MineBridge Is on the Rise, With a Sophisticated Delivery Mechanism",
            "categories": [
                "MINEBRIDGE"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/return-minebridge-rat-new-ttps-and-social-engineering-lures",
            "date": "2021-02-23",
            "organization": "Zscaler",
            "author": "Sudeep Singh",
            "title": "Return of the MINEBRIDGE RAT With New TTPs and Social Engineering Lures",
            "categories": [
                "MINEBRIDGE"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/windows-finger-command-abused-by-phishing-to-download-malware/",
            "date": "2021-01-15",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Windows Finger command abused by phishing to download malware",
            "categories": [
                "MINEBRIDGE"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/breaking-ta505s-crypter-with-an-smt-solver/",
            "date": "2020-03-04",
            "organization": "SentinelOne",
            "author": "Jason Reaves",
            "title": "Breaking TA505\u2019s Crypter with an SMT Solver",
            "categories": [
                "Clop",
                "CryptoMix",
                "MINEBRIDGE"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/01/stomp-2-dis-brilliance-in-the-visual-basics.html",
            "date": "2020-02-05",
            "organization": "FireEye",
            "author": "Rick Cole",
            "title": "STOMP 2 DIS: Brilliance in the (Visual) Basics",
            "categories": [
                "MINEBRIDGE"
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