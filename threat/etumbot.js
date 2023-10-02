var threatdata = {
    "name": "ETUMBOT",
    "alias": "ETUMBOT, RIPTIDE, HIGHTIDE, Exploz, Specfix",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "ETUMBOT",
        "names": [
            {
                "name": "ETUMBOT"
            },
            {
                "name": "RIPTIDE"
            },
            {
                "name": "HIGHTIDE"
            },
            {
                "name": "Exploz"
            },
            {
                "name": "Specfix"
            }
        ],
        "description": "(FireEye) FireEye observed APT12 utilizing RIPTIDE, a proxy-aware backdoor that communicates via HTTP to a hard-coded command and control (C2) server. RIPTIDE\u2019s first communication with its C2 server fetches an encryption key, and the RC4 encryption key is used to encrypt all further communication.\n\nIn June 2014, Arbor Networks published an article describing the RIPTIDE backdoor and its C2 infrastructure in great depth. The blog highlighted that the backdoor was utilized in campaigns from March 2011 till May 2014.\n\nFollowing the release of the article, FireEye observed a distinct change in RIPTIDE\u2019s protocols and strings. We suspect this change was a direct result of the Arbor blog post in order to decrease detection of RIPTIDE by security vendors. The changes to RIPTIDE were significant enough to circumvent existing RIPTIDE detection rules. FireEye dubbed this new malware family HIGHTIDE.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2014/09/darwins-favorite-apt-group-2.html",
            "https://www.arbornetworks.com/blog/asert/wp-content/uploads/2014/06/ASERT-Threat-Intelligence-Brief-2014-07-Illuminating-Etumbot-APT.pdf",
            "https://www.zscaler.com/blogs/research/cnacom-open-source-exploitation-strategic-web-compromise"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0003/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.etumbot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:etumbot"
        ],
        "uuid": "2f137525-43e3-4296-bbcd-b7d626694f4a",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "etumbot",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "riptide",
            "procedure_code": "s0003",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0003",
            "techniques": [
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "apt12 has used riptide, a rat that uses http to communicate.[286]"
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
                    "procedure_description": "apt12 has used the riptide rat, which communicates over http with a payload encrypted with rc4.[116]"
                }
            ]
        }
    ]
};