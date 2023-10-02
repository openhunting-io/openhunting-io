var threatdata = {
    "name": "AnubisSpy",
    "alias": "AnubisSpy",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-05-21",
    "all_data": {
        "tool": "AnubisSpy",
        "names": [
            {
                "name": "AnubisSpy"
            }
        ],
        "description": "(Trend Micro) AnubisSpy can steal messages (SMS), photos, videos, contacts, email accounts, calendar events, and browser histories (i.e., Chrome and Samsung Internet Browser). It can also take screenshots and record audio, including calls. It can spy on the victim through apps installed on the device, a list of which is in its configuration file that can be updated. This includes Skype, WhatsApp, Facebook, and Twitter, among others.\n\nAfter the data are collected, they are encrypted and sent to the (C&C) server. AnubisSpy can also self-destruct to cover its tracks. It can run commands and delete files on the device, as well as install and uninstall Android Application Packages (APKs).\n\nAnubisSpy has several modules, each of which has a separate role. AnubisSpy\u2019s code is well constructed, indicating the developer/s\u2019 know-how.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/cyberespionage-campaign-sphinx-goes-mobile-anubisspy/",
            "https://documents.trendmicro.com/assets/tech-brief-cyberespionage-campaign-sphinx-goes-mobile-with-anubisspy.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.anubisspy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:anubisspy"
        ],
        "uuid": "808cf3ae-bce9-40a5-a4e9-14bb9c1c8424",
        "last-card-change": "2020-05-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "anubisspy",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/cyberespionage-campaign-sphinx-goes-mobile-anubisspy/",
            "date": "2017-12-19",
            "organization": "Trend Micro",
            "author": "Mobile Threat Response Team",
            "title": "Cyberespionage Campaign Sphinx Goes Mobile With AnubisSpy",
            "categories": [
                "AnubisSpy"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/tech-brief-cyberespionage-campaign-sphinx-goes-mobile-with-anubisspy.pdf",
            "date": "2017-12",
            "organization": "Trend Micro",
            "author": "Ecular Xu",
            "title": "Cyberespionage Campaign Sphinx Goes Mobile With AnubisSpy",
            "categories": [
                "AnubisSpy"
            ]
        }
    ],
    "mitre": []
};