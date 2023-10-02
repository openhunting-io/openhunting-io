var threatdata = {
    "name": "RomeoBravo",
    "alias": "RomeoBravo, BravoNC",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "RomeoBravo",
        "names": [
            {
                "name": "RomeoBravo"
            },
            {
                "name": "BravoNC"
            }
        ],
        "description": "(SecurityWeek) A new sample of {{WannaCry}} emerged in late March, and five organizations were infected with it. The {{RomeoAlfa}} and BravoNC backdoors were employed in these attacks, with the former used to drop WannaCry onto the compromised computers of at least two victims. AlphaNC is believed to be an evolution of {{Duuzer}}, a sub-family of the {{Destover}} wiping tool used in the Sony attacks.\n\nThese attacks hit organizations spanning a range of sectors and geographies, but Symantec found evidence of the tools used in the February attacks on the computers compromised in March and April as well.\n\nThe BravoNC Trojan was used to deliver WannaCry to the computers of at least two other victims, the security researchers say. The malware connects to a C&C server hosted at the same IP address as the IP address used by Destover and Duuzer samples, and which was also referred to in a Blue Coat report last year.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.securityweek.com/wannacry-highly-likely-work-north-korean-linked-hackers-symantec-says",
            "https://www.operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-RAT-and-Staging-Report.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.bravonc"
        ],
        "uuid": "38bd5c63-903d-4124-bb78-987dcc03937c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "romeobravo",
    "analysis": null,
    "articles": [
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