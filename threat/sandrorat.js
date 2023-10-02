var threatdata = {
    "name": "SandroRAT",
    "alias": "SandroRAT",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "SandroRAT",
        "names": [
            {
                "name": "SandroRAT"
            }
        ],
        "description": "(McAfee) Just as any other Android RAT (such as AndroRAT), the malware can remotely execute several commands to perform any of the following actions:\n\n\u2022 Steal sensitive personal information such as contact list, SMS messages (inbox, outbox, and sent), call logs (incoming, outgoing, and missed calls), browser history (title, link, date), bookmarks and GPS location (latitude and longitude).\n\u2022 Intercept incoming calls and record those in a WAV file on the SD card to later leak the file.\n\u2022 Update itself (or install additional malware) by downloading and prompting the user to install the file update.apk.\n\u2022 Intercept, block, and steal incoming SMS messages.\n\u2022 Send MMS messages with parameters (phone number and text) provided by the control server.\n\u2022 Insert and delete SMS messages and contacts.\n\u2022 Record surrounding sound and store it in an adaptive multi-rate file on the SD card to later send to a remote server.\n\u2022 Open the dialer with a number provided by the attacker or execute USSD codes.\n\u2022 Display Toast (pop-up) messages on the infected device.\n\nA novel functionality of this threat is its ability to access the encrypted Whatsapp chats (available in the path /WhatsApp/Databases/msgstore.db.crypt5 on the SD card) and obtain the unique encryption key using the Google email account of the device to get the chats in plain text and store them in the file waddb.sr",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/sandrorat-android-rat-targeting-polish-banking-users-via-e-mail-phishing/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:SandroRAT"
        ],
        "uuid": "08636d6f-1a0d-46ee-bc95-1586b9995db3",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sandrorat",
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