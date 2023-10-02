var threatdata = {
    "name": "Catelites Bot",
    "alias": "Catelites Bot, Catelites",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Catelites Bot",
        "names": [
            {
                "name": "Catelites Bot"
            },
            {
                "name": "Catelites"
            }
        ],
        "description": "(Avast) Now, the Avast Threat Labs team have uncovered and analyzed with SfyLabs a new version of the malware, dubbed Catelites Bot, which shares similarities with the malware used for {{CronBot}}.\n\nWhile we are still investigating the details of this malware, here is what we know: this malware gets \u201cdropped\u201d onto your device after you download an app from a third-party app store (not official shops like Google Play) or from malicious adware (malvertisements) or phishing sites. Once dropped onto your Android device, the malicious app looks like the icon seen in the screen below and is titled \u201cSystem Application.\u201d\n\nWorse still, this piece of malware can also go after your bank account login details. This malware has the ability to pose as over 2,200 banks and financial institutions. It does so by adopting the logo and mobile application name of a bank used in the Google Play Store, allowing the author to use simple templates to harvest username and password or credit card information. The overlay is HTML-based and not as sophisticated as other Android banking malware such as {{LokiBot}}, {{Red Alert}}, or {{ExoBot}}, but the power here is clearly in the shotgun approach: using simple phishing overlay screens, the criminals are able to target many more users, increasing their likelihood of financial gain.",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://blog.avast.com/new-version-of-mobile-malware-catelites-possibly-linked-to-cron-cyber-gang"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.catelites"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Catelites"
        ],
        "uuid": "7792fc81-4715-436d-8eab-ccc560958972",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "catelites_bot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.youtube.com/watch?v=1LOy0ZyjEOk",
            "date": "2017-12-20",
            "organization": "YouTube",
            "author": "Avast",
            "title": "Video about Catelites Bot - Airbank Example",
            "categories": [
                "Catelites"
            ]
        },
        {
            "data_url": "https://blog.avast.com/new-version-of-mobile-malware-catelites-possibly-linked-to-cron-cyber-gang",
            "date": "2017-12-20",
            "organization": "Avast",
            "author": "Nikolaos Chrysaidos",
            "title": "New version of mobile malware Catelites possibly linked to Cron cyber gang",
            "categories": [
                "Catelites"
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