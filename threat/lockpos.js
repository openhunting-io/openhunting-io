var threatdata = {
    "name": "LockPOS",
    "alias": "LockPOS",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "LockPOS",
        "names": [
            {
                "name": "LockPOS"
            }
        ],
        "description": "(Cylance) LockPOS is a point-of-sale malware discovered in 2017 that is used to exfiltrate payment card data from targeted point-of-sale systems\u2019 memory. The most recent version of LockPOS examined here changed its injection technique to drop the malware directly to the kernel to evade detection and bypass traditional antivirus (AV) hooks.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/threat-spotlight-lockpos-point-of-sale-malware.html",
            "https://www.arbornetworks.com/blog/asert/lockpos-joins-flock/",
            "https://www.cyberbit.com/new-lockpos-malware-injection-technique/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lock_pos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:LockPoS"
        ],
        "uuid": "d309aab8-3ff4-4f80-8d7f-a1834714fac9",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lockpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cylance.com/en_us/blog/threat-spotlight-lockpos-point-of-sale-malware.html",
            "date": "2018-01-16",
            "organization": "Cylance",
            "author": "Cylance Threat Research Team",
            "title": "Threat Spotlight: LockPOS Point of Sale Malware",
            "categories": [
                "LockPOS"
            ]
        },
        {
            "data_url": "https://www.cyberbit.com/new-lockpos-malware-injection-technique/",
            "date": "2018-01-03",
            "organization": "Cyberbit",
            "author": "Hod Gavriel",
            "title": "New LockPoS Malware Injection Technique",
            "categories": [
                "LockPOS"
            ]
        },
        {
            "data_url": "https://www.arbornetworks.com/blog/asert/lockpos-joins-flock/",
            "date": "2017-07-12",
            "organization": "NetScout",
            "author": "Dennis Schwarz",
            "title": "LockPoS Joins the Flock",
            "categories": [
                "LockPOS"
            ]
        }
    ],
    "mitre": []
};