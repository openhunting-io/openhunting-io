var threatdata = {
    "name": "Cadelspy",
    "alias": "Cadelspy, Cadelle, WinSpy",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Cadelspy",
        "names": [
            {
                "name": "Cadelspy"
            },
            {
                "name": "Cadelle"
            },
            {
                "name": "WinSpy"
            }
        ],
        "description": "(SecurityWeek) Cadelspy, which is delivered via a dropper, is designed to harvest system information and clipboard data, log keystrokes, collect the titles of open windows, record audio, capture screenshots and photos via the webcam, and steal documents printed by the user.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://www.securityweek.com/apparently-linked-iran-spy-groups-target-middle-east"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0454/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cadelspy"
        ],
        "uuid": "89ceabfc-a102-4ca1-97b4-937e61678a46",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cadelspy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets",
            "date": "2015-12-07",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Iran-based attackers use back door threats to spy on Middle Eastern targets",
            "categories": [
                "APT39",
                "Cadelle"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20191221064439/https://www.symantec.com/connect/blogs/iran-based-attackers-use-back-door-threats-spy-middle-eastern-targets",
            "date": "2015-12-07",
            "organization": "Symantec",
            "author": "Security Response",
            "title": "Iran-based attackers use back door threats to spy on Middle Eastern targets",
            "categories": [
                "CadelSpy",
                "Remexi",
                "Cadelle"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "cadelspy",
            "procedure_code": "s0454",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0454",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "cadelspy has the ability to log keystrokes on the compromised host.[32]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "cadelspy has the ability to identify open windows on the compromised host.[5]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1120",
                    "technique_link": "https://attack.mitre.org/techniques/T1120",
                    "technique_name": "peripheral device discovery",
                    "technique_description": "adversaries may attempt to gather information about attached peripheral devices and components connected to a computer system. peripheral devices could include auxiliary resources that support a variety of functionalities such as keyboards, printers, cameras, smart card readers, or removable storage. the information may be used to enhance their awareness of the system and network environment or may be used for further actions.",
                    "procedure_description": "cadelspy has the ability to steal information about printers and the documents sent to printers.[12]"
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
                    "procedure_description": "cadelspy has the ability to discover information about the compromised host.[76]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560",
                    "technique_link": "https://attack.mitre.org/techniques/T1560",
                    "technique_name": "archive collected data",
                    "technique_description": "an adversary may compress and/or encrypt data that is collected prior to exfiltration. compressing the data can help to obfuscate the collected data and minimize the amount of data sent over the network. encryption can be used to hide information that is being exfiltrated from detection or make exfiltration less conspicuous upon inspection by a defender.",
                    "procedure_description": "cadelspy has the ability to compress stolen data into a .cab file.[13]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1123",
                    "technique_link": "https://attack.mitre.org/techniques/T1123",
                    "technique_name": "audio capture",
                    "technique_description": "an adversary can leverage a computer's peripheral devices (e.g., microphones and webcams) or applications (e.g., voice and video call services) to capture audio recordings for the purpose of listening into sensitive conversations to gather information.",
                    "procedure_description": "cadelspy has the ability to record audio from the compromised host.[4]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1115",
                    "technique_link": "https://attack.mitre.org/techniques/T1115",
                    "technique_name": "clipboard data",
                    "technique_description": "adversaries may collect data stored in the clipboard from users copying information within or between applications.",
                    "procedure_description": "cadelspy has the ability to steal data from the clipboard.[14]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1056.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1056/001",
                    "technique_name": "input capture : keylogging",
                    "technique_description": "adversaries may log user keystrokes to intercept credentials as the user types them. keylogging is likely to be used to acquire credentials for new access opportunities when os credential dumping efforts are not effective, and may require an adversary to intercept keystrokes on a system for a substantial period of time before credentials can be successfully captured.",
                    "procedure_description": "cadelspy has the ability to log keystrokes on the compromised host.[32]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "cadelspy has the ability to capture screenshots and webcam photos.[30]"
                }
            ]
        }
    ]
};