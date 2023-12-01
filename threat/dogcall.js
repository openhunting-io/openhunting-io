var threatdata = {
    "name": "DOGCALL",
    "alias": "DOGCALL",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "DOGCALL",
        "names": [
            {
                "name": "DOGCALL"
            }
        ],
        "description": "(FireEye) DOGCALL is a backdoor commonly distributed as an encoded binary file downloaded and decrypted by shellcode following the exploitation of weaponized documents. DOGCALL is capable of capturing screenshots, logging keystrokes, evading analysis with anti-virtual machine detections, and leveraging cloud storage APIs such as Cloud, Box, Dropbox, and Yandex.\n\nDOGCALL was used to target South Korean Government and military organizations in March and April 2017.<br >\nThe malware is typically dropped using an HWP exploit in a lure document.\n\nThe wiper tool, {{RUHAPPY}}, was found on some of the systems targeted by DOGCALL. While DOGCALL is primarily an espionage tool, RUHAPPY is a destructive wiper tool meant to render systems inoperable.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0213/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:dogcall"
        ],
        "uuid": "26caccee-f011-40c9-b1a7-e29e763f3d39",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RokRAT",
            "malware_alias": "DOGCALL",
            "malware": "win.rokrat",
            "last_update": "2023-10-10 14:37:44",
            "tags": [
                "RokRat",
                "RokRAT",
                "APT37",
                "RAT",
                "APT",
                "GOLDBACKDOOR"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "cc96ba45dd2b6a6d7aa300d77e49c095",
                        "timestamp": "2023-10-10 14:37:44"
                    },
                    {
                        "value": "fd67ad03cc71d3397f962896365ed510",
                        "timestamp": "2023-09-13 15:43:07"
                    },
                    {
                        "value": "44ba46dfff78bc62a3b2619d308ca40c",
                        "timestamp": "2023-07-05 07:21:18"
                    },
                    {
                        "value": "71dbebb8a31ea3de0115851bb15fd2bc",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "fbaab65888859d25437e8803a7139633",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "1011dc2d8450da88011b890ea81c9083",
                        "timestamp": "2023-07-04 08:04:35"
                    },
                    {
                        "value": "7095811df4cb1ee4135ce605af7f163f",
                        "timestamp": "2023-05-24 18:07:28"
                    },
                    {
                        "value": "5f9e0afb3503d909984b3b30d038bdc5",
                        "timestamp": "2023-05-24 18:07:28"
                    },
                    {
                        "value": "487769a19f032e981f33023b2cb7fe10",
                        "timestamp": "2023-05-15 15:04:40"
                    },
                    {
                        "value": "74e3d84492845067a0da6cfa00c064eb",
                        "timestamp": "2023-05-15 15:04:40"
                    },
                    {
                        "value": "8d7f38cbdca2fc4d8f6ea451398ca378",
                        "timestamp": "2023-05-15 15:04:40"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-10-10 14:37:44",
    "file_name": "dogcall",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "dogcall",
            "procedure_code": "s0213",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0213",
            "techniques": [
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
                    "procedure_description": "dogcall is encrypted using single-byte xor.[101]"
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
                    "procedure_description": "dogcall is capable of logging keystrokes.[56][57]"
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
                    "procedure_description": "dogcall can capture microphone data from the victim's machine.[10]"
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
                    "procedure_description": "dogcall is capable of logging keystrokes.[56][57]"
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
                    "procedure_description": "dogcall is capable of capturing screenshots of the victim's machine.[51][52]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "dogcall can download and execute additional payloads.[147]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "dogcall is capable of leveraging cloud storage apis such as cloud, box, dropbox, and yandex for c2.[3][25]"
                }
            ]
        }
    ]
};