var threatdata = {
    "name": "WhisperGate",
    "alias": "WhisperGate, WhisperKill, PAYWIPE",
    "category": "Malware",
    "type": "Ransomware, Wiper",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "WhisperGate",
        "names": [
            {
                "name": "WhisperGate"
            },
            {
                "name": "WhisperKill"
            },
            {
                "name": "PAYWIPE"
            }
        ],
        "description": "(Microsoft) The malware resides in various working directories, including C:\\PerfLogs, C:\\ProgramData, C:\\, and C:\\temp, and is often named stage1.exe. In the observed intrusions, the malware executes via Impacket, a publicly available capability often used by threat actors for lateral movement and execution.\nThe two-stage malware overwrites the Master Boot Record (MBR) on victim systems with a ransom note (Stage 1). The MBR is the part of a hard drive that tells the computer how to load its operating system. The ransom note contains a Bitcoin wallet and Tox ID (a unique account identifier used in the Tox encrypted messaging protocol) that have not been previously observed by MSTIC.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Wiper"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2022/01/15/destructive-malware-targeting-ukrainian-organizations/",
            "https://elastic.github.io/security-research/malware/2022/01/01.operation-bleeding-bear/article/",
            "https://unit42.paloaltonetworks.com/ukraine-cyber-conflict-cve-2021-32648-whispergate/",
            "https://blog.talosintelligence.com/2022/01/ukraine-campaign-delivers-defacement.html",
            "https://www.deepinstinct.com/blog/the-ukrainian-government-cyberattack-what-you-need-to-know",
            "https://therecord.media/ukrainian-government-calls-out-false-flag-operation-in-recent-data-wiping-attack/",
            "https://www.cybereason.com/blog/cybereason-vs.-whispergate-wiper",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0689/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.whispergate"
        ],
        "uuid": "fb9145d6-3e77-48f0-80ae-a2897eaf49d3",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "WhisperGate",
            "malware_alias": "PAYWIPE",
            "malware": "win.whispergate",
            "last_update": "2022-02-23 20:41:00",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "5d5c99a08a7d927346ca2dafa7973fc1",
                        "timestamp": "2022-02-23 20:41:00"
                    },
                    {
                        "value": "3F4A16B29F2F0532B7CE3E7656799125",
                        "timestamp": "2022-02-23 20:41:00"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-02-23 20:41:00",
    "mitre": [],
    "file_name": "whispergate",
    "analysis": null
};