var threatdata = {
    "name": "Tonnerre",
    "alias": "Tonnerre",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Tonnerre",
        "names": [
            {
                "name": "Tonnerre"
            }
        ],
        "description": "(Check Point) The malware contains 5 Delphi forms, with each one responsible for a different capability:\nForm1 \u2013 Malware Installation and upgrading process.\nForm2 \u2013 Collects files from predefined folders \u2013 Documents, Downloads, Pictures and more.\nForm3 \u2013 Connects to an FTP server to exfiltrate collected data and get further commands.\nForm4 \u2013 Collects files from removable devices for exfiltration.\nForm5 \u2013 Uses the lame command line tool to record sound.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://research.checkpoint.com/2021/after-lightning-comes-thunder/",
            "https://download.bitdefender.com/resources/files/News/CaseStudies/study/393/Bitdefender-Whitepaper-Iranian-APT-Makes-a-Comeback-with-Thunder-and-Lightning-Backdoor-and-Espionage-Combo.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tonnerre"
        ],
        "uuid": "bdbeb269-24c2-494e-a6c0-aba5a0cb6e59",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tonnerre",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://download.bitdefender.com/resources/files/News/CaseStudies/study/393/Bitdefender-Whitepaper-Iranian-APT-Makes-a-Comeback-with-Thunder-and-Lightning-Backdoor-and-Espionage-Combo.pdf",
            "date": "2021-02-18",
            "organization": "Bitdefender",
            "author": "Gheorghe Adrian Schipor",
            "title": "Iranian APT Makes a Comeback with \u201cThunder and Lightning\u201d Backdoor and Espionage Combo",
            "categories": [
                "Infy",
                "Tonnerre"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2021/after-lightning-comes-thunder/",
            "date": "2021-02-08",
            "organization": "Checkpoint",
            "author": "Safebreach Labs",
            "title": "After Lightning Comes Thunder",
            "categories": [
                "Infy",
                "Tonnerre"
            ]
        }
    ],
    "mitre": []
};