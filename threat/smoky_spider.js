var threatdata = {
    "name": "Smoky Spider",
    "alias": "Smoky Spider",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Smoky Spider",
        "names": [
            {
                "name": "Smoky Spider",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2011",
        "description": "(IBM) According to 360 NetLab, the (relatively) ancient malware downloader has enjoyed a slow burn on the black market, where malicious actors can pick up a customized copy for $850. While other researchers have identified various aspects of the threat, 360 NetLab took aim at the malware\u2019s admin panel, which offers support for multiple plugins and functions \u2014 such as FORM GRAB, BOT LIST, KEYLOGGER and more \u2014 designed to help attackers successfully infiltrate targeted devices.\n\nThe flexibility of Smoke Loader remains its biggest appeal; it was among the top 10 malware threats detected by Check Point in December 2018. It\u2019s the first time a second-stage downloader has made the list, and may indicate a coming shift in the threat profiles of typical malware attacks.\n\nSmoke Loader has been observed to distribute DoppelPaymer ({{Doppel Spider}}), TinyLoader ({{Tiny Spider}}), DanaBot ({{Scully Spider, TA547}}), BokBot ({{Lunar Spider}}), Zeus Panda ({{Bamboo Spider, TA544}}) and TrickBot ({{Wizard Spider, Gold Blackburn}}).",
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "Smoke Loader",
            "Sasfis"
        ],
        "operations": [
            {
                "date": "2015",
                "activity": "Smoke Loader \u2013 downloader with a smokescreen still alive\nhttps://blog.malwarebytes.com/threat-analysis/2016/08/smoke-loader-downloader-with-a-smokescreen-still-alive/"
            },
            {
                "date": "2018-04",
                "activity": "Smoke Loader malware improves after Microsoft spoils its Campaign\nhttps://www.spamhaus.org/news/article/774/smoke-loader-malware-improves-after-microsoft-spoils-its-campaign"
            },
            {
                "date": "2018-06",
                "activity": "Smoking Guns - Smoke Loader learned new tricks\nhttps://blog.talosintelligence.com/2018/07/smoking-guns-smoke-loader-learned-new.html"
            },
            {
                "date": "2018-07",
                "activity": "The Cylance Threat Research team recently dissected a resurgent form of Smoke Loader. Our investigation uncovered two other samples of malware working with Smoke Loader: a document packed with malicious macros, and Trickbot, a banking Trojan.\nhttps://threatvector.cylance.com/en_us/home/threat-spotlight-resurgent-smoke-loader-malware-dissected.html"
            },
            {
                "date": "2018-11",
                "activity": "Analysis of Smoke Loader in New Tsunami Campaign\nhttps://unit42.paloaltonetworks.com/analysis-of-smoke-loader-in-new-tsunami-campaign/"
            },
            {
                "date": "2019-04",
                "activity": "Proofpoint observed that the malware returned to regular attacks against German and Swiss users in April 2019 after taking a hiatus in 2018. These campaigns helped reveal several new techniques now employed by the banking Trojan. One geographically targeted campaign against Switzerland, for instance, used an Object Linking and Embedding (OLE) package to deliver Smoke Loader. This threat, in turn, downloaded Retefe two hours after infection.\nhttps://securityintelligence.com/news/retefe-banking-trojan-returns-with-smoke-loader-as-its-intermediate-loader/"
            }
        ],
        "counter-operations": [
            {
                "date": "2018-03",
                "activity": "Behavior monitoring combined with machine learning spoils a massive Dofoil coin mining campaign\nhttps://www.microsoft.com/security/blog/2018/03/07/behavior-monitoring-combined-with-machine-learning-spoils-a-massive-dofoil-coin-mining-campaign/"
            }
        ],
        "information": [
            "https://www.webroot.com/blog/2012/02/03/a-peek-inside-the-smoke-malware-loader/",
            "https://www.cert.pl/en/news/single/dissecting-smoke-loader/",
            "https://blog.netlab.360.com/smoke-loader-the-core-files-the-admin-panel-the-plugins-and-the-3rd-party-patch/",
            "https://securityintelligence.com/news/smoke-loader-botnet-still-active-on-black-market-after-8-years/"
        ],
        "uuid": "a74110c6-af39-4e20-a9fa-85a90cb44c62",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "smoky_spider",
    "analysis": null,
    "articles": [],
    "mitre": []
};