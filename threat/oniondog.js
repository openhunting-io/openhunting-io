var threatdata = {
    "name": "OnionDog",
    "alias": "OnionDog",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "OnionDog",
        "names": [
            {
                "name": "OnionDog",
                "name-giver": "Qihoo 360"
            }
        ],
        "country": [
            "South Korea"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "Seems to be a Cyber Drill that is conducted every year rather than an APT, according to findings from TrendMicro.\n\n(Qihoo 360) The Helios Team at 360 SkyEye Labs recently revealed that a hacker group named OnionDog has been infiltrating and stealing information from the energy, transportation and other infrastructure industries of Korean-language countries through the Internet. According to big data correlation analysis, OnionDog's first activity can be traced back to October, 2013 and in the following two years it was only active between late July and early September. The self-set life cycle of a Trojan attack is 15 days on average and is distinctly organizational and objective-oriented.\n\nOnionDog malware is transmitted by taking advantage of the vulnerability of the popular office software Hangul in Korean-language countries, and it attacked network-isolated targets through a USB Worm. In addition, OnionDog also used darkweb ('Onion City') communications tools, with which it can visit the domain without the Onion browser, making its real identity hidden in the completely anonymous Tor network.",
        "observed-sectors": [
            "Energy",
            "Government",
            "Transportation",
            "Utilities"
        ],
        "observed-countries": [
            "South Korea"
        ],
        "tools": [
            "Malware on USB stick"
        ],
        "information": [
            "https://www.prnewswire.com/news-releases/onion-dog-a-3-year-old-apt-focused-on-the-energy-and-transportation-industries-in-korean-language-countries-is-exposed-by-360-300232441.html",
            "https://www.qianxin.com/assets/doc/apt_report/en/OPERATION%20ONIONDOG%20%E2%80%93Disclosing%20Targeted%20Attacks%20on%20Government.pdf",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/oniondog-not-targeted-attack-cyber-drill/"
        ],
        "uuid": "acc879e8-ecaf-4090-bebf-7ce411e19820",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "oniondog",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/onion-dog",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Onion Dog",
            "categories": [
                "OnionDog"
            ]
        },
        {
            "data_url": "http://news.softpedia.com/news/korean-energy-and-transportation-targets-attacked-by-oniondog-apt-501534.shtml",
            "date": "2016-03-09",
            "organization": "SOFTPEDIA\u00ae NEWS",
            "author": "Catalin Cimpanu",
            "title": "Korean Energy and Transportation Targets Attacked by OnionDog APT",
            "categories": [
                "OnionDog"
            ]
        }
    ],
    "mitre": []
};