var threatdata = {
    "name": "GandCrab",
    "alias": "GandCrab, GrandCrab",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2021-04-25",
    "all_data": {
        "tool": "GandCrab",
        "names": [
            {
                "name": "GandCrab"
            },
            {
                "name": "GrandCrab"
            }
        ],
        "description": "(VirusTotal) The GandCrab ransomware, which is no longer active, was actively distributed for a little over a year. GandCrab variants caused a great deal of damage worldwide, including in South Korea.\n\nThe GandCrab ransomware shares an interesting history with AhnLab. Like many other examples of ransomware, GandCrab searches for any running or pre-installed anti\u2011malware program and when it finds one it interferes with its normal execution and shuts it down. However, when it came to AhnLab, GandCrab went the extra mile, specifically targeting the company and its anti-malware program V3 Lite by mentioning it in its code. It even revealed a vulnerability in the security program and made attempts to delete it entirely.\n\nTo effectively respond to and protect against GandCrab attacks, the AhnLab Security Analysis Team analysed GandCrab and all its different versions by thoroughly investigating the distributed code, encryption method, restoration method, and the evasive method it used to avoid behaviour-based detection. Each time a new attack feature targeting AhnLab and V3 was identified, the company\u2019s product developers promptly addressed it to ensure maximum security.\n\nThe interesting conflict between AhnLab and the GandCrab ransomware was widely discussed in the IT security industry. However, the details that were revealed at the time were only the tip of the iceberg, with more details being kept private for reasons of confidentiality.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.virusbulletin.com/virusbulletin/2020/01/behind-scenes-gandcrabs-operation/",
            "https://www.bleepingcomputer.com/news/security/gandcrab-ransomware-being-distributed-via-malspam-disguised-as-receipts/",
            "http://asec.ahnlab.com/1145",
            "https://www.bleepingcomputer.com/news/security/gandcrab-operators-use-vidar-infostealer-as-a-forerunner/",
            "http://www.vmray.com/cyber-security-blog/gandcrab-ransomware-evolution-analysis/",
            "https://www.bleepingcomputer.com/news/security/gandcrab-ransomware-distributed-by-exploit-kits-appends-gdcb-extension/",
            "https://isc.sans.edu/diary/23417",
            "https://tccontre.blogspot.com/2018/11/re-gandcrab-downloader-theres-more-to.html",
            "https://blog.talosintelligence.com/2018/05/gandcrab-compromised-sites.html",
            "http://csecybsec.com/download/zlab/20181001_CSE_GandCrabv5.pdf",
            "https://blog.malwarebytes.com/threat-analysis/2018/01/gandcrab-ransomware-distributed-by-rig-and-grandsoft-exploit-kits/",
            "https://www.europol.europa.eu/newsroom/news/pay-no-more-universal-gandcrab-decryption-tool-released-for-free-no-more-ransom",
            "https://labs.bitdefender.com/2018/02/gandcrab-ransomware-decryption-tool-available-for-free/",
            "https://labs.bitdefender.com/2019/02/new-gandcrab-v5-1-decryptor-available-now/",
            "https://sensorstechforum.com/killswitch-file-now-available-gandcrab-v4-1-2-ransomware/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gandcrab"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:GandCrab"
        ],
        "playbook": [
            "https://www.nomoreransom.org/uploads/GANDCRAB%20RANSOMWARE%20DECRYPTION%20TOOL%20(002).pdf"
        ],
        "uuid": "0b2b37bc-8665-4409-90a2-35a56aec7341",
        "last-card-change": "2021-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Gandcrab",
            "malware_alias": "GrandCrab",
            "malware": "win.gandcrab",
            "last_update": "2022-11-10 12:45:07",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "0301296543c91492d49847ae636857a4",
                        "timestamp": "2022-11-10 12:45:07"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "e5033e178280fb731c19ee2903832f2e4bd61e1905f7b37630a3d91c6711c971",
                        "timestamp": "2022-05-29 05:03:32"
                    },
                    {
                        "value": "2698041f10b462c28e3474f72d0cbcca82fefe2c6125866e61f30973b47ea412",
                        "timestamp": "2022-05-29 05:03:28"
                    },
                    {
                        "value": "e5282fb73713b2f820fb5e8f756f9e7f07670b4a9c49ea1b2c6dabb43276c109",
                        "timestamp": "2022-05-08 19:45:47"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-11-10 12:45:07",
    "file_name": "gandcrab",
    "analysis": null,
    "articles": [],
    "mitre": []
};