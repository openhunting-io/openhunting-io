var threatdata = {
    "name": "Diavol",
    "alias": "Diavol",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Diavol",
        "names": [
            {
                "name": "Diavol"
            }
        ],
        "description": "(Fortinet) As part of a rather unique encryption procedure, Diavol operates using user-mode Asynchronous Procedure Calls (APCs) without a symmetric encryption algorithm. Usually, ransomware authors aim to complete the encryption operation in the shortest amount of time. Asymmetric encryption algorithms are not the obvious choice as they significantly slower than symmetric algorithms.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/diavol-new-ransomware-used-by-wizard-spider",
            "https://www.speartip.com/resources/speartip-finds-new-diavol-ransomware-does-steal-data/",
            "https://securityintelligence.com/posts/analysis-of-diavol-ransomware-link-trickbot-gang/",
            "https://www.binarydefense.com/threat_watch/new-ransomware-diavol-being-dropped-by-trickbot/",
            "http://www.ic3.gov/Media/News/2022/220120.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0659/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.diavol"
        ],
        "playbook": [
            "https://www.bleepingcomputer.com/news/security/free-decryptor-released-for-trickbot-gangs-diavol-ransomware/"
        ],
        "uuid": "f25de7f3-032f-491e-90a0-4f1c5bcc7738",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Diavol",
            "malware_alias": null,
            "malware": "win.diavol",
            "last_update": "2021-12-29 05:59:45",
            "tags": [
                "Diavol",
                "Ransomware"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "e0c0e663bf44c9820b049f73f2910843ede20fd3e6cd0c9a22cbd2a48e1a228a",
                        "timestamp": "2021-12-29 05:59:45"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-12-29 05:59:45",
    "mitre": [],
    "file_name": "diavol",
    "analysis": null
};