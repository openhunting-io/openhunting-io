var threatdata = {
    "name": "SilkBean",
    "alias": "SilkBean",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration, Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SilkBean",
        "names": [
            {
                "name": "SilkBean"
            }
        ],
        "description": "(Lookout) A hallmark of SilkBean is the comprehensive RAT (remote access trojan) functionality that allows an attacker to execute over 70 different commands on an infected device. SilkBean is delivered via applications that possess malicious functionality, but mimic titles and icons that a target may want to install.   The legitimate app with functionality the user expects is packaged within the malware and installed after SilkBean successfully infects a target device.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://www.lookout.com/documents/threat-reports/us/lookout-uyghur-malware-tr-us.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0549/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.silkbean"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:SilkBean"
        ],
        "uuid": "747eae20-6c45-4079-b4f3-8f841b60c32d",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "silkbean",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.lookout.com/documents/threat-reports/us/lookout-uyghur-malware-tr-us.pdf",
            "date": "2020-06",
            "organization": "Lookout",
            "author": "Apurva Kumar",
            "title": "Mobile APT SurveillanceCampaigns Targeting Uyghurs A collection of long-running Android tooling connected to a Chinese mAPT actor",
            "categories": [
                "CarbonSteal",
                "DoubleAgent",
                "GoldenEagle",
                "SilkBean"
            ]
        }
    ],
    "mitre": []
};