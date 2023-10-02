var threatdata = {
    "name": "XDMonitor",
    "alias": "XDMonitor",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-10-19",
    "all_data": {
        "tool": "XDMonitor",
        "names": [
            {
                "name": "XDMonitor"
            }
        ],
        "description": "(ESET) XDMonitor is intended to monitor the machine\u2019s activity. It monitors when removable drives are inserted by creating a new hidden window and registering it for device notification (using RegisterDeviceNotificationW and the GUID GUID_DEVINTERFACE_DISK). When a new drive is inserted, it crawls it recursively. When a file with an interesting extension (the same list as for XDList) is found, it encrypts it using RC4 (the hard-coded key is 1234123412341234) and uploads it to the C&C server.\nIt also takes a screenshot every minute. Unlike the screenshots taken by {{XDList}}, the image is not encrypted and is stored in %TEMP%\\tmp%YEAR%%MONTH%%DAY%_%TICK_COUNT%.s. The screenshot is uploaded to the C&C immediately after being taken.\nFinally, XDMonitor sends regular debug messages to the C&C server.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://vblocalhost.com/uploads/VB2020-Faou-Labelle.pdf"
        ],
        "uuid": "87dcdd53-b099-4067-ae5e-2bf242977fa0",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xdmonitor",
    "analysis": null,
    "articles": [],
    "mitre": [
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