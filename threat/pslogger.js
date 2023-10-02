var threatdata = {
    "name": "PSLogger",
    "alias": "PSLogger, ECCENTRICBANDWAGON",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Credential stealer, Info stealer",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "PSLogger",
        "names": [
            {
                "name": "PSLogger"
            },
            {
                "name": "ECCENTRICBANDWAGON"
            }
        ],
        "description": "The keylogging routine uses the GetKeyState and GetAsyncKeyState APIs and is not sophisticated, and logged keystroke and clipboard context is saved in plaintext.\n\nThe malware\u2019s other functionality is to capture the desktop, compressing the images and saving them in the same directory.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Info stealer"
        ],
        "information": [
            "https://norfolkinfosec.com/a-lazarus-keylogger-pslogger/",
            "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-239a"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pslogger"
        ],
        "uuid": "2744d3b4-396f-45ab-8d05-a2d08082c97f",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pslogger",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://us-cert.cisa.gov/ncas/analysis-reports/ar20-239a",
            "date": "2020-08-26",
            "organization": "CISA",
            "author": "CISA",
            "title": "MAR-10301706-1.v1 - North Korean Remote Access Tool: ECCENTRICBANDWAGON",
            "categories": [
                "PSLogger"
            ]
        },
        {
            "data_url": "https://twitter.com/KevinPerlow/status/1160766519615381504",
            "date": "2019-08-11",
            "organization": "Twitter (@KevinPerlow)",
            "author": "Kevin Perlow",
            "title": "Updated #Lazarus Keylogger (uploaded June)",
            "categories": [
                "PSLogger"
            ]
        },
        {
            "data_url": "https://norfolkinfosec.com/a-lazarus-keylogger-pslogger/",
            "date": "2019-01-22",
            "organization": "One Night in Norfolk",
            "author": "Norfolk",
            "title": "A Lazarus Keylogger- PSLogger",
            "categories": [
                "PSLogger"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "eccentricbandwagon",
            "procedure_code": "s0593",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0593",
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
                    "procedure_description": "eccentricbandwagon can use cmd to execute commands on a victim\u2019s machine.[109]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "eccentricbandwagon can delete log files generated from the malware stored at c:\\windows\\temp\\tmp0207.[61]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "eccentricbandwagon has encrypted strings with rc4.[109]"
                },
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
                    "procedure_description": "eccentricbandwagon can capture and store keystrokes.[61]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1074/001",
                    "technique_name": "data staged : local data staging",
                    "technique_description": "adversaries may stage collected data in a central location or directory on the local system prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "eccentricbandwagon has stored keystrokes and screenshots within the %temp%\\googlechrome, %temp%\\downloads, and %temp%\\trendmicroupdate directories.[31]"
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
                    "procedure_description": "eccentricbandwagon can capture and store keystrokes.[61]"
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
                    "procedure_description": "eccentricbandwagon can capture screenshots and store them locally.[57]"
                }
            ]
        }
    ]
};