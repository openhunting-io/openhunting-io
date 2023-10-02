var threatdata = {
    "name": "RomeoAlfa",
    "alias": "RomeoAlfa, AlphaNC",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "RomeoAlfa",
        "names": [
            {
                "name": "RomeoAlfa"
            },
            {
                "name": "AlphaNC"
            }
        ],
        "description": "(IBM) ALPHANC is a backdoor which is capable of the following:\n\u2022 Collecting system information\n\u2022 Executing command line commands\n\u2022 Launching, listing, and terminating processes\n\u2022 Uploading and downloading files\n\u2022 Deleting files\nALPHANC appears to be a lightweight variant of {{Duuzer}} based on similarities in functionality, capability, and style of how certain tasks are performed.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://exchange.xforce.ibmcloud.com/malware-analysis/guid:fe28057927a67466dbfc9f2ec1f8adc9",
            "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.alphanc"
        ],
        "uuid": "9703e296-4cb2-4510-aa80-655370d4d9a0",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "romeoalfa",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/nickel-gladstone",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "NICKEL GLADSTONE",
            "categories": [
                "AlphaNC",
                "Bankshot",
                "Ratankba",
                "Lazarus Group"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/wannacry-ransomware-attacks-show-strong-links-lazarus-group",
            "date": "2017-05-22",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "WannaCry: Ransomware attacks show strong links to Lazarus group",
            "categories": [
                "AlphaNC",
                "BravoNC",
                "Duuzer",
                "Sierra(Alfa,Bravo, ...)",
                "WannaCryptor"
            ]
        }
    ],
    "mitre": []
};