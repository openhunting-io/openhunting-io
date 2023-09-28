var threatdata = {
    "name": "MedusaLocker",
    "alias": "MedusaLocker, AKO Doxware, AKO Ransomware, MedusaReborn",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting, Reconnaissance",
    "modified": "2022-07-20",
    "all_data": {
        "tool": "MedusaLocker",
        "names": [
            {
                "name": "MedusaLocker"
            },
            {
                "name": "AKO Doxware"
            },
            {
                "name": "AKO Ransomware"
            },
            {
                "name": "MedusaReborn"
            }
        ],
        "description": "(Cybereason) The MedusaLocker ransomware first emerged in September 2019, infecting and encrypting Windows machines around the world. There have been reports of MedusaLocker attacks across multiple industries, especially the healthcare industry which suffered a great deal of ransomware attacks during the COVID-19 pandemic.\n\nIn order to maximize the chances of successful encryption of the files on the compromised machine, MedusaLocker restarts the machine in safe mode before execution. This method is used to avoid security tools that might not run when the computer starts in safe mode.\n\nMedusaLocker avoids encrypting executable files, most likely to avoid rendering the targeted system unusable for paying the ransom. To make it even more dangerous, MedusaLocker uses a combination of AES and RSA-2048, making the procedure of brute forcing the encryption practically impossible.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting",
            "Reconnaissance"
        ],
        "information": [
            "https://www.cybereason.com/blog/medusalocker-ransomware",
            "https://www.bleepingcomputer.com/news/security/medusalocker-ransomware-wants-its-share-of-your-money/",
            "https://www.binarydefense.com/threat_watch/new-ransomware-medusalocker/",
            "https://www.sentinelone.com/blog/how-medusalocker-ransomware-aggressively-targets-remote-hosts/",
            "https://www.carbonblack.com/blog/tau-threat-analysis-medusa-locker-ransomware/",
            "https://cyware.com/news/uncovering-the-abilities-of-medusalocker-ransomware-3fb92eca",
            "https://blog.talosintelligence.com/2020/04/medusalocker.html",
            "https://www.cisa.gov/uscert/ncas/alerts/aa22-181a"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.medusalocker"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:medusalocker"
        ],
        "uuid": "2680cd2f-0911-418c-8414-d01b475df8f2",
        "last-card-change": "2022-07-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "MedusaLocker",
            "malware_alias": "AKO Ransomware,AKO Doxware,MedusaReborn",
            "malware": "win.medusalocker",
            "last_update": "2021-03-29 11:30:30",
            "tags": [
                "medusalocker"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "4dd950fcdcd8483ec9346b4a5214931134975c439cf463daa3a0518cfc5db9a6",
                        "timestamp": "2021-03-29 11:30:30"
                    },
                    {
                        "value": "613f0384286bf9956143e5cd7f885cc9b2cf30acaab2fe67a891ff26aaa162fc",
                        "timestamp": "2021-03-29 11:30:30"
                    },
                    {
                        "value": "8894becff9f3ebc9c2d734b5f3341fd73017ef3bd42c2a40008b3325586cd0ee",
                        "timestamp": "2021-03-29 11:30:30"
                    },
                    {
                        "value": "38ad791e5f0df27a55116ec18f2c31cc41feaaf7d235d85497a6cfa39ebfbebb",
                        "timestamp": "2021-03-29 11:30:30"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-03-29 11:30:30",
    "mitre": [],
    "file_name": "medusalocker",
    "analysis": null
};