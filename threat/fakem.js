var threatdata = {
    "name": "FakeM",
    "alias": "FakeM, FakeM RAT, Terminator RAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "FakeM",
        "names": [
            {
                "name": "FakeM"
            },
            {
                "name": "FakeM RAT"
            },
            {
                "name": "Terminator RAT"
            }
        ],
        "description": "(Trend Micro) We found a family of RATs that we call \u201cFAKEM\u201d that make their network traffic look like various protocols. Some variants attempt to disguise network traffic to look like Windows\u00ae Messenger and Yahoo!\u00ae Messenger traffic. Another variant tries to make the content of its traffic look like HTML. While the disguises the RATs use are simple and distinguishable from legitimate traffic, they may be just good enough to avoid further scrutiny.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-fakem-rat.pdf",
            "https://www.welivesecurity.com/wp-content/uploads/2014/01/Advanced-Persistent-Threats.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0076/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.terminator_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:FakeM"
        ],
        "uuid": "821cb159-baed-4d8b-9ac4-5740abcd6b2b",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "fakem",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2014/01/Advanced-Persistent-Threats.pdf",
            "date": "2013-12-05",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "Did you sayAdvanced Persistent Threats?",
            "categories": [
                "Terminator RAT"
            ]
        },
        {
            "data_url": "https://malware.lu/assets/files/articles/RAP002_APT1_Technical_backstage.1.0.pdf",
            "date": "2013-03-27",
            "organization": "Malware.lu",
            "author": "Paul Rascagn\u00e8res",
            "title": "APT1: technical backstage",
            "categories": [
                "Terminator RAT"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/wp/wp-fakem-rat.pdf",
            "date": "2013",
            "organization": "Trend Micro",
            "author": "Nart Villeneuve",
            "title": "FAKEM RAT",
            "categories": [
                "Terminator RAT"
            ]
        },
        {
            "data_url": "http://contagiodump.blogspot.com/2012/06/rat-samples-from-syrian-targeted.html",
            "date": "2012-06-21",
            "organization": "Contagio Dump",
            "author": "Mila Parkour",
            "title": "RAT samples from Syrian Targeted attacks - Blackshades RAT, XTreme RAT, Dark Comet RAT used by Syrian Electronic Army",
            "categories": [
                "BlackShades",
                "DarkComet",
                "Terminator RAT"
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
        },
        {
            "procedure_name": "fakem",
            "procedure_code": "s0076",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0076",
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
                    "procedure_description": "fakem contains a keylogger module.[66]"
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
                    "procedure_description": "fakem contains a keylogger module.[66]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/003",
                    "technique_name": "data obfuscation : protocol impersonation",
                    "technique_description": "adversaries may impersonate legitimate protocols or web service traffic to disguise command and control activity and thwart analysis efforts. by impersonating legitimate protocols or web services, adversaries can make their command and control traffic blend in with legitimate network traffic.",
                    "procedure_description": "fakem c2 traffic attempts to evade detection by resembling data generated by legitimate messenger applications, such as msn and yahoo! messengers. additionally, some variants of fakem use modified ssl code for communications back to c2 servers, making ssl decryption ineffective.[5]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "the original variant of fakem encrypts c2 traffic using a custom encryption cipher that uses an xor key of \"yhcra\" and bit rotation between each xor operation. some variants of fakem use rc4 to encrypt c2 traffic.[22]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "some variants of fakem use ssl to communicate with c2 servers.[24]"
                }
            ]
        },
        {
            "procedure_name": "tor",
            "procedure_code": "s0183",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0183",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "tor encapsulates traffic in multiple layers of encryption, using tls by default.[59]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1090/003",
                    "technique_name": "proxy : multi-hop proxy",
                    "technique_description": "to disguise the source of malicious traffic, adversaries may chain together multiple proxies. typically, a defender will be able to identify the last proxy traffic traversed before it enters their network; the defender may or may not be able to identify any previous proxies before the last-hop proxy. this technique makes identifying the original source of the malicious traffic even more difficult by requiring the defender to trace malicious traffic through several proxies to identify its source. a particular variant of this behavior is to use onion routing networks, such as the publicly available tor network.",
                    "procedure_description": "traffic traversing the tor network will be forwarded to multiple nodes before exiting the tor network and continuing on to its intended destination.[21]"
                }
            ]
        }
    ]
};