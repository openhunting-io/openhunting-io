var threatdata = {
    "name": "PoohMilk Loader",
    "alias": "PoohMilk Loader, PoohMilk",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "PoohMilk Loader",
        "names": [
            {
                "name": "PoohMilk Loader"
            },
            {
                "name": "PoohMilk"
            }
        ],
        "description": "(Palo Alto) Our analysis shows that PoohMilk is the first stage loader. After a successful exploitation, it sets persistence in the registry with the appropriate command line argument to execute the second stage payload, in this case, {{Freenki Loader}}.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-freemilk-highly-targeted-spear-phishing-campaign/",
            "http://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.poohmilk"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:poohmilk"
        ],
        "uuid": "bc01c3df-e07f-4d47-b0c6-dc9f7171dda1",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "poohmilk_loader",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html",
            "date": "2018-01-16",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "Korea In The Crosshairs",
            "categories": [
                "Freenki Loader",
                "PoohMilk Loader",
                "RokRAT",
                "APT37"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/10/unit42-freemilk-highly-targeted-spear-phishing-campaign/",
            "date": "2017-10-05",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Juan Cortes",
            "title": "FreeMilk: A Highly Targeted Spear Phishing Campaign",
            "categories": [
                "Freenki Loader",
                "PoohMilk Loader"
            ]
        }
    ],
    "mitre": []
};