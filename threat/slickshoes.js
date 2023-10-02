var threatdata = {
    "name": "SLICKSHOES",
    "alias": "SLICKSHOES",
    "category": "Malware",
    "type": "Reconnaissance, Dropper, Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "SLICKSHOES",
        "names": [
            {
                "name": "SLICKSHOES"
            }
        ],
        "description": "(US-CERT) This sample is a Themida-packed dropper that decodes and drops a file 'C:\\Windows\\Web\\taskenc.exe' which is a Themida-packed beaconing implant. The beaconing implant does not execute the dropped file nor does it schedule any tasks to run the malware. The dropped beaconing implant uses an indigenous network encoding algorithm and is capable of many features including conducting system surveys, file upload/download, process and command execution, and screen captures.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Dropper",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/analysis-reports/ar20-045b"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.slickshoes"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:SLICKSHOES"
        ],
        "uuid": "b21f7e86-bebd-47fb-a24f-89af8ac4726d",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "slickshoes",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://labs.sentinelone.com/dprk-hidden-cobra-update-north-korean-malicious-cyber-activity/",
            "date": "2020-02-25",
            "organization": "SentinelOne",
            "author": "Jim Walter",
            "title": "DPRK Hidden Cobra Update: North Korean Malicious Cyber Activity",
            "categories": [
                "ARTFULPIE",
                "BISTROMATH",
                "BUFFETLINE",
                "CHEESETRAY",
                "HOPLIGHT",
                "HOTCROISSANT",
                "SLICKSHOES"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/analysis-reports/ar20-045b",
            "date": "2020-02-14",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR20\u2013045B): MAR-10265965-2.v1 - North Korean Trojan: SLICKSHOES",
            "categories": [
                "SLICKSHOES"
            ]
        }
    ],
    "mitre": []
};