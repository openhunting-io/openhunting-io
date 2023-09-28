var threatdata = {
    "name": "Clop",
    "alias": "Clop, Cl0p",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "Clop",
        "names": [
            {
                "name": "Clop"
            },
            {
                "name": "Cl0p"
            }
        ],
        "description": "Clop is a ransomware which uses the .clop extension after having encrypted the victim's files. Another unique characteristic belonging with Clop is in the string: 'Dont Worry C|0P' included into the ransom notes. It is a variant of {{CryptoMix}} ransomware, but it additionally attempts to disable Windows Defender and to remove the Microsoft Security Essentials in order to avoid user space detection.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/clop-ransomware/",
            "https://www.bleepingcomputer.com/news/security/clop-ransomware-now-kills-windows-10-apps-and-3rd-party-tools/",
            "https://www.telekom.com/en/blog/group/article/cybersecurity-ta505-returns-with-a-new-bag-of-tricks-602104",
            "https://www.cybereason.com/blog/cybereason-vs.-clop-ransomware",
            "https://www.notion.so/S2W-LAB-Analysis-of-Clop-Ransomware-suspiciously-related-to-the-Recent-Incident-English-088056baf01242409a6e9f844f0c5f2e",
            "https://www.telekom.com/en/blog/group/article/inside-of-cl0p-s-ransomware-operation-615824",
            "https://blog.malwarebytes.com/malwarebytes-news/2021/02/clop-targets-execs-ransomware-tactics-get-another-new-twist/",
            "https://unit42.paloaltonetworks.com/clop-ransomware/",
            "https://www.cybereason.com/blog/cl0p-ransomware-gang-tries-to-topple-the-house-of-cards",
            "https://www.sentinelone.com/labs/cl0p-ransomware-targets-linux-systems-with-flawed-encryption-decryptor-available/",
            "https://flashpoint.io/blog/clop-ransomware-threat/",
            "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a",
            "https://www.darkreading.com/dr-tech/cl0p-in-your-network-how-to-find-out",
            "https://www.fortinet.com/blog/threat-research/ransomware-roundup-cl0p"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0611/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.clop"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Clop"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=clop-ransomware",
            "https://www.sentinelone.com/labs/cl0p-ransomware-targets-linux-systems-with-flawed-encryption-decryptor-available/"
        ],
        "uuid": "8792eefb-d852-4a24-ad09-46614ef7a815",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--70d827ca-ec87-423a-8ad5-b5eb94f86ae2",
        "pb_file": "clop-ransomware.json",
        "last_updated": "2021-09-30T00:00:00.000Z",
        "title": "CLOP RANSOMWARE",
        "industries": [
            "aerospace",
            "automotive",
            "education",
            "energy",
            "engineering",
            "financial-services",
            "healthcare",
            "manufacturing",
            "pharmaceuticals",
            "retail",
            "technology",
            "telecommunications",
            "transportation"
        ],
        "regions": [
            "AU",
            "DK",
            "GB",
            "IN",
            "MX",
            "SG",
            "TR",
            "US"
        ],
        "malwares": [
            "Clop"
        ]
    },
    "ioc_data": [
        {
            "malware_printable": "Clop",
            "malware_alias": "Cl0p",
            "malware": "elf.clop",
            "last_update": "2023-03-23 18:12:56",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "31e0439e6ef1dd29c0db6d96bac59446",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "f59d2a3c925f331aae7437dd7ac1a7c8",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "8bd774fbc6f846992abda69ddabc3fb7",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "dd5cee48cdd586045c5fb059a1120e15",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "5e52f75d17c80dd104ce0da05fdfc362",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "4431b6302b7d5b1098a61469bdfca982",
                        "timestamp": "2023-03-23 18:12:56"
                    },
                    {
                        "value": "afe7f87478ba6dfca15839f958e9b2ef",
                        "timestamp": "2023-03-23 18:12:56"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "a1a628cca993f9455d22ca2c248ddca7e743683e",
                        "timestamp": "2023-03-23 18:09:08"
                    },
                    {
                        "value": "a6e940b1bd92864b742fbd5ed9b2ef763d788ea7",
                        "timestamp": "2023-03-23 18:09:08"
                    },
                    {
                        "value": "ac71b646b0237b487c08478736b58f208a98eebf",
                        "timestamp": "2023-03-23 18:09:08"
                    },
                    {
                        "value": "77ea0fd635a37194efc1f3e0f5012a4704992b0e",
                        "timestamp": "2023-03-23 18:09:08"
                    },
                    {
                        "value": "40b7b386c2c6944a6571c6dcfb23aaae026e8e82",
                        "timestamp": "2023-03-23 18:09:07"
                    },
                    {
                        "value": "4fa2b95b7cde72ff81554cfbddc31bbf77530d4d",
                        "timestamp": "2023-03-23 18:09:07"
                    },
                    {
                        "value": "ba5c5b5cbd6abdf64131722240703fb585ee8b56",
                        "timestamp": "2023-03-23 18:08:16"
                    },
                    {
                        "value": "46b02cc186b85e11c3d59790c3a0bfd2ae1f82a5",
                        "timestamp": "2023-03-23 18:08:16"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-03-23 18:12:56",
    "mitre": [],
    "file_name": "clop"
};