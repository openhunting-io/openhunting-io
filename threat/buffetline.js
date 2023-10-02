var threatdata = {
    "name": "BUFFETLINE",
    "alias": "BUFFETLINE",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Downloader, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "BUFFETLINE",
        "names": [
            {
                "name": "BUFFETLINE"
            }
        ],
        "description": "(US-CERT) This report looks at a full-featured beaconing implant. This sample uses PolarSSL for session authentication, but then utilizes a FakeTLS scheme for network encoding using a modified RC4 algorithm. It has the capability to download, upload, delete, and execute files; enable Windows CLI access; create and terminate processes; and perform target system enumeration.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/analysis-reports/ar20-045f"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.buffetline"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BUFFETLINE"
        ],
        "uuid": "346a101f-489c-4d64-994b-f12ff6b60a1a",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "buffetline",
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
            "data_url": "https://www.us-cert.gov/ncas/analysis-reports/ar20-045f",
            "date": "2020-02-14",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Malware Analysis Report (AR20-045F): MAR-10271944-3.v1 - North Korean Trojan: BUFFETLINE",
            "categories": [
                "BUFFETLINE"
            ]
        }
    ],
    "mitre": []
};