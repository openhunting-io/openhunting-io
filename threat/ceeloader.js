var threatdata = {
    "name": "CEELOADER",
    "alias": "CEELOADER",
    "category": "Malware",
    "type": "Loader",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "CEELOADER",
        "names": [
            {
                "name": "CEELOADER"
            }
        ],
        "description": "(Mandiant) The threat actor used native Windows tools to perform initial reconnaissance, credential theft and deploy {{Cobalt Strike}} BEACON to devices via PowerShell.\nThe actor then used this BEACON implant to persistently install CEELOADER as a Scheduled Task that ran on login as SYSTEM on specific systems. CEELOADER is [a] downloader that decrypts a shellcode payload to execute in memory on the victim device.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.mandiant.com/resources/russian-targeting-gov-business"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ceeloader"
        ],
        "uuid": "7faa4be1-750b-4e78-8c2e-ee6e23483813",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ceeloader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/blog/russian-targeting-gov-business",
            "date": "2022-11-29",
            "organization": "Mandiant",
            "author": "Luke Jenkins",
            "title": "Suspected Russian Activity Targeting Government and Business Entities Around the Globe",
            "categories": [
                "CEELOADER"
            ]
        }
    ],
    "mitre": []
};