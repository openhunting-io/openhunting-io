var threatdata = {
    "name": "Freenki Loader",
    "alias": "Freenki Loader",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-12-15",
    "all_data": {
        "tool": "Freenki Loader",
        "names": [
            {
                "name": "Freenki Loader"
            }
        ],
        "description": "(Palo Alto) Freenki has two main purposes. The first is to collect host information and the other is to serve as a second stage downloader. Each of these will be explained in detail in the following section.\n\nFreenki depends on the right command line argument being passed to execute any of its interesting code, if no arguments are passed it simply exits.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-freemilk-highly-targeted-spear-phishing-campaign/",
            "http://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.freenki"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:freenki"
        ],
        "uuid": "b91345a6-2eb5-46bd-8486-cab5545489b4",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "freenki_loader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/l/who-is-the-threat-actor-behind-operation-earth-kitsune-.html",
            "date": "2020-12-15",
            "organization": "Trend Micro",
            "author": "William Gamazo Sanchez",
            "title": "Who is the Threat Actor Behind Operation Earth Kitsune?",
            "categories": [
                "Freenki Loader",
                "SLUB"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/01/korea-in-crosshairs.html",
            "date": "2018-01-16",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "Korea In The Crosshairs",
            "categories": [
                "Freenki Loader",
                "RokRAT",
                "APT37"
            ]
        },
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