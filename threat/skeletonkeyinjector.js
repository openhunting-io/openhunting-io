var threatdata = {
    "name": "SkeletonKeyInjector",
    "alias": "SkeletonKeyInjector",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "SkeletonKeyInjector",
        "names": [
            {
                "name": "SkeletonKeyInjector"
            }
        ],
        "description": "(CyCraft) The discovery of a related binary led us to initially believe the sample was a Dumpert. However, a more in-depth analysis revealed that the d3d11.dll sample implanted a skeleton key, where adversaries could persistently control (before the system reboot) the infected machine and machines under the infected AD. More specifically, the malware was an account manipulation tool that contained code extracted from both Dumpert and {{Mimikatz}}. We called this malware SkeletonKeyInjector. The malware employed a technique that altered the NTLM authentication program and implanted a skeleton key to allow adversaries to log-in without a valid credential. This allowed the adversary to achieve the following objectives:\n\u25cf Persistence: After the code in memory was altered, the adversary could gain access to the compromised machines before the next system reboot. As AD machines are rarely rebooted, the adversary was able to control the machines for a very long time.\n\u25cf Defense Evasion: Aside from the different login password and login algorithm scheme, there was no difference when compared to a normal login activity. Furthermore, normal users could still log-in to the system via their original password. Thus, the probability of being exposed was low.\n\u25cf Lateral Movement: Adversaries could use the skeleton key to login to other machines that were in the same domain. This made it easier for an adversary to conduct lateral movement.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://cycraft.com/download/%5BTLP-White%5D20200415%20Chimera_V4.1.pdf"
        ],
        "uuid": "ac256455-69de-4b40-9ca5-bb207aaf5b08",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "skeletonkeyinjector",
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