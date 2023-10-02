var threatdata = {
    "name": "Pacha Group",
    "alias": "Pacha Group",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Pacha Group",
        "names": [
            {
                "name": "Pacha Group",
                "name-giver": "Intezer"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2018",
        "description": "(Intezer) Antd is a miner found in the wild on September 18, 2018. Recently we discovered that the authors from Antd are actively delivering newer campaigns deploying a broad number of components, most of them completely undetected and operating within compromised third party Linux servers. Furthermore, we have observed that some of the techniques implemented by this group are unconventional, and there is an element of sophistication to them. We believe the authors behind this malware are from Chinese origin. We have labeled the undetected Linux.Antd variants, Linux.GreedyAntd and classified the threat actor as Pacha Group.",
        "tools": [
            "Antd",
            "DDG",
            "Korkerds",
            "XMRig"
        ],
        "operations": [
            {
                "date": "2018-09",
                "activity": "Intezer has evidence dating back to September 2018 which shows Pacha Group has been using a cryptomining malware that has gone undetected on other engines.\nhttps://www.intezer.com/blog-pacha-group-deploying-undetected-cryptojacking-campaigns/"
            },
            {
                "date": "2019-05",
                "activity": "Pacha Group Competing against {{Rocke, Iron Group}} Group for Cryptocurrency Mining Foothold on the Cloud\nhttps://www.intezer.com/blog-technical-analysis-cryptocurrency-mining-war-on-the-cloud/"
            }
        ],
        "information": [
            "https://www.intezer.com/blog-technical-analysis-pacha-group/"
        ],
        "uuid": "4ca48576-dcc1-42dc-84c9-5201977aa56b",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pacha_group",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.intezer.com/blog-technical-analysis-cryptocurrency-mining-war-on-the-cloud/",
            "date": "2019-05-09",
            "organization": "Intezer",
            "author": "Ignacio Sanmillan",
            "title": "Technical Analysis: Pacha Group Competing against Rocke Group for Cryptocurrency Mining Foothold on the Cloud",
            "categories": [
                "GreedyAntd",
                "Pacha Group",
                "Rocke"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog-technical-analysis-pacha-group/",
            "date": "2019-02-28",
            "organization": "Intezer",
            "author": "Ignacio Sanmillan",
            "title": "Technical Analysis: Pacha Group Deploying Undetected Cryptojacking Campaigns on Linux Servers",
            "categories": [
                "Pacha Group"
            ]
        }
    ],
    "mitre": []
};