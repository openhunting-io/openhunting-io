var threatdata = {
    "name": "Marcher",
    "alias": "Marcher",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Marcher",
        "names": [
            {
                "name": "Marcher"
            }
        ],
        "description": "(ZScaler) Upon infection, Marcher would inspect the victim\u2019s device and send a list of all installed apps to its command and control (C&C) server. If the malware found any German financial apps installed in the device, it would show a fake page asking for credentials of that particular institution. Unaware that the login page is a fake, the victim would provide their credentials where they would then be sent to the malware\u2019s C&C. The malware would also show a fake Google Play payment page if the infected device did not have any German financial firm apps.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://www.zscaler.de/blogs/research/android-marcher-continuously-evolving-mobile-malware",
            "https://www.clientsidedetection.com/marcher.html",
            "https://www.clientsidedetection.com/exobot_v2_update___staying_ahead_of_the_competition.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0522/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.marcher"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Marcher"
        ],
        "uuid": "7edce969-8cb1-410a-abb1-1612803b3e35",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "marcher",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/mobile-malware-evolution-2019/96280/",
            "date": "2020-02-25",
            "organization": "Kaspersky Labs",
            "author": "Victor Chebyshev",
            "title": "Mobile malware evolution 2019",
            "categories": [
                "Anubis",
                "Asacub",
                "Dvmap",
                "FlexNet",
                "HiddenAd",
                "Marcher",
                "Svpeng",
                "Triada"
            ]
        },
        {
            "data_url": "https://www.zscaler.de/blogs/research/android-marcher-continuously-evolving-mobile-malware",
            "date": "2016-08-10",
            "organization": "Zscaler",
            "author": "Viral Gandhi",
            "title": "Android Marcher: Continuously Evolving Mobile Malware",
            "categories": [
                "Marcher"
            ]
        }
    ],
    "mitre": []
};