var threatdata = {
    "name": "WastedLoader",
    "alias": "WastedLoader",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "WastedLoader",
        "names": [
            {
                "name": "WastedLoader"
            }
        ],
        "description": "(Bitdefender) The delivered malware looks like a new variant of {{WastedLocker}}, but this new sample is missing the ransomware part, which is probably downloaded from the C&C servers. Because it works like a loader for the downloaded payload, we named it WastedLoader.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://www.bitdefender.com/files/News/CaseStudies/study/397/Bitdefender-PR-Whitepaper-RIG-creat5362-en-EN.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.wastedloader"
        ],
        "uuid": "53a0739e-ed03-407b-bc85-8a370070a210",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wastedloader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://killingthebear.jorgetesta.tech/actors/evil-corp",
            "date": "2022-06-13",
            "organization": "Jorge Testa",
            "author": "Jorge Testa",
            "title": "Killing The Bear - Evil Corp",
            "categories": [
                "FAKEUPDATES",
                "Babuk",
                "Blister",
                "DoppelPaymer",
                "Dridex",
                "Entropy",
                "FriedEx",
                "Hades",
                "Macaw",
                "Phoenix Locker",
                "WastedLoader",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/files/News/CaseStudies/study/397/Bitdefender-PR-Whitepaper-RIG-creat5362-en-EN.pdf",
            "date": "2021-05-18",
            "organization": "Bitdefender",
            "author": "Mihai Neagu",
            "title": "New WastedLoader Campaign Delivered Through RIG Exploit Kit",
            "categories": [
                "WastedLoader",
                "WastedLocker"
            ]
        }
    ],
    "mitre": []
};