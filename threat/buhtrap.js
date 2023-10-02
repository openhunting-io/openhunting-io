var threatdata = {
    "name": "Buhtrap",
    "alias": "Buhtrap, Ratopak",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Keylogger, Credential stealer, Info stealer, Downloader, Exfiltration",
    "modified": "2020-06-11",
    "all_data": {
        "tool": "Buhtrap",
        "names": [
            {
                "name": "Buhtrap"
            },
            {
                "name": "Ratopak"
            }
        ],
        "description": "(ESET) The infection vector we have seen consists of Microsoft Word documents sent as email attachments that exploit CVE-2012-0158, a vulnerability in Microsoft Word that was patched three years ago. The images below show two of the decoy documents used in this campaign. The first document, titled \u201c\u0421\u0447\u0435\u0442 \u2116 522375-\u0424\u041b\u041e\u0420\u041b-14-115.doc\u201d mimics an invoice. The second, aptly titled \u201ckontrakt87.doc\u201d, copies a generic telecommunications service contract from MegaFon, a large Russian mobile phone operator.\n\nThe tools deployed on the victim\u2019s computer allow them to control it remotely and to record the user\u2019s actions. The malware allows the criminals to install a backdoor, attempt to obtain the account password, and even create a new account. They also install a keylogger, a clipboard stealer, a smart card module, and have the capability to download and execute additional malware.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Info stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.welivesecurity.com/2015/04/09/operation-buhtrap/",
            "https://malware-research.org/carbanak-source-code-leaked/",
            "https://www.group-ib.com/brochures/gib-buhtrap-report.pdf",
            "https://www.arbornetworks.com/blog/asert/diving-buhtrap-banking-trojan-activity/",
            "https://blog.dcso.de/pegasus-buhtrap-analysis-of-the-malware-stage-based-on-the-leaked-source-code/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.buhtrap"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:buhtrap"
        ],
        "uuid": "7790d629-5724-4da6-8201-e2b031e8c487",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "buhtrap",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.scythe.io/library/threatthursday-buhtrap",
            "date": "2020-06-11",
            "organization": "SCYTHE",
            "author": "Jorge Orchilles",
            "title": "#ThreatThursday - Buhtrap",
            "categories": [
                "Buhtrap"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/operation-ta505-part3/",
            "date": "2020-05-24",
            "organization": "Positive Technologies",
            "author": "PT ESC Threat Intelligence",
            "title": "Operation TA505: network infrastructure. Part 3.",
            "categories": [
                "AndroMut",
                "Buhtrap",
                "SmokeLoader"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2019/07/11/buhtrap-zero-day-espionage-campaigns/",
            "date": "2019-07-11",
            "organization": "ESET Research",
            "author": "Jean-Ian Boutin",
            "title": "Buhtrap group uses zero\u2011day in latest espionage campaigns",
            "categories": [
                "Buhtrap"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2019/04/30/buhtrap-backdoor-ransomware-advertising-platform/",
            "date": "2019-04-30",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Buhtrap backdoor and Buran ransomware distributed via major advertising platform",
            "categories": [
                "Buhtrap",
                "ClipBanker",
                "RTM"
            ]
        },
        {
            "data_url": "https://dcso.de/2019/03/14/pegasus-buhtrap-analysis-of-the-malware-stage-based-on-the-leaked-source-code",
            "date": "2019-03-14",
            "organization": "DCSO",
            "author": "DCSO",
            "title": "Pegasus/Buhtrap analysis of the malware stage based on the leaked source code",
            "categories": [
                "Buhtrap"
            ]
        },
        {
            "data_url": "https://malware-research.org/carbanak-source-code-leaked/",
            "date": "2018-07-11",
            "organization": "GelosSnake Blog",
            "author": "Omri Segev Moyal",
            "title": "NotCarbanak Mystery - Source Code Leak",
            "categories": [
                "Buhtrap"
            ]
        },
        {
            "data_url": "https://community.broadcom.com/symantecenterprise/communities/community-home/librarydocuments/viewdocument?DocumentKey=8e498912-44f8-4ea0-ac50-4544f0fedd6c&CommunityKey=1ecf5f55-9545-44d6-b0f4-4e4a7f5f5e68&tab=librarydocuments",
            "date": "2016-02-22",
            "organization": "Symantec",
            "author": "A L Johnson",
            "title": "Russian bank employees received fake job offers in targeted email attack",
            "categories": [
                "Buhtrap",
                "BuhTrap"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/russian-bank-employees-received-fake-job-offers-targeted-email-attack",
            "date": "2016-02-22",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Russian bank employees received fake job offers in targeted email attack",
            "categories": [
                "Buhtrap",
                "BuhTrap"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2015/04/09/operation-buhtrap/",
            "date": "2015-04-09",
            "organization": "ESET Research",
            "author": "Jean-Ian Boutin",
            "title": "Operation Buhtrap, the trap for Russian accountants",
            "categories": [
                "Buhtrap",
                "BuhTrap"
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