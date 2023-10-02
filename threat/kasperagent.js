var threatdata = {
    "name": "KasperAgent",
    "alias": "KasperAgent",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "KasperAgent",
        "names": [
            {
                "name": "KasperAgent"
            }
        ],
        "description": "(Palo Alto) ASPERAGENT is developed in Microsoft Visual C++ and attempts to disguise itself as a product that does not exist: \u201cAdobe Cinema Video Player\u201d. The malware first establishes persistence using the classic method of adding a Run key, using the value \u201cMediaSystem\u201d.\n\nThe malware connects to a C2 serverhosted on www.mailsinfo[.]net. The C2 server string in the binary is \u201cobfuscated\u201d in the most basic of senses, with the author adding \u2018@\u2019  characters between letters and splitting the starting \u201cwww.m\u201d to another string.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-targeted-attacks-middle-east-using-kasperagent-micropsia/",
            "https://www.threatconnect.com/blog/kasperagent-malware-campaign/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.kasperagent"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:KASPERAGENT"
        ],
        "uuid": "0dd10463-768e-4b4e-b473-845cfe285f13",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "kasperagent",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.threatconnect.com/blog/kasperagent-malware-campaign/",
            "date": "2017-06-14",
            "organization": "ThreatConnect",
            "author": "ThreatConnect Research Team",
            "title": "Phantom of the Opaera: New KASPERAGENT Malware Campaign",
            "categories": [
                "KasperAgent",
                "AridViper"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2017/04/unit42-targeted-attacks-middle-east-using-kasperagent-micropsia/",
            "date": "2017-04-05",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Targeted Attacks in the Middle East Using KASPERAGENT and MICROPSIA",
            "categories": [
                "KasperAgent",
                "Micropsia"
            ]
        }
    ],
    "mitre": []
};