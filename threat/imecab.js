var threatdata = {
    "name": "Imecab",
    "alias": "Imecab",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Imecab",
        "names": [
            {
                "name": "Imecab"
            }
        ],
        "description": "(Symantec) The purpose of Trojan.Imecab is to set up a persistent remote access account on the target machine with a hardcoded password. Variants of the malware were also observed with the filename guester.exe which likely refers to the functionality of adding a powerful guest account to the system.\n\nThe malware installs itself in the system as a Windows service to achieve persistence and ensure that the guest account remains available to the attacker.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/leafminer-espionage-middle-east"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.imecab"
        ],
        "uuid": "0a4a941f-bbc7-4849-b7ec-fe113221a695",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "imecab",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/leafminer-espionage-middle-east",
            "date": "2018-07-25",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Leafminer: New Espionage Campaigns Targeting Middle Eastern Regions",
            "categories": [
                "Imecab",
                "Sorgu",
                "RASPITE"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/leafminer-espionage-middle-east",
            "date": "2018-07-25",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Leafminer: New Espionage Campaigns Targeting Middle Eastern Regions",
            "categories": [
                "Imecab",
                "MimiKatz",
                "Sorgu",
                "RASPITE"
            ]
        }
    ],
    "mitre": []
};