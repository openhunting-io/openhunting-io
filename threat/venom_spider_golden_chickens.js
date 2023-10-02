var threatdata = {
    "name": "Venom Spider, Golden Chickens",
    "alias": "Venom Spider, Golden Chickens",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-21",
    "all_data": {
        "actor": "Venom Spider, Golden Chickens",
        "names": [
            {
                "name": "Venom Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "Golden Chickens",
                "name-giver": "QuoINT"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2017",
        "description": "(Proofpoint) Since the middle of 2018, Proofpoint has been tracking campaigns abusing legitimate messaging services, offering fake jobs, and repeatedly following up via email to ultimately deliver the More_eggs backdoor. These campaigns primarily targeted US companies in various industries including retail, entertainment, pharmacy, and others that commonly employ online payments, such as online shopping portals.\n\nThe actor sending these campaigns attempts to establish rapport with potential victims by abusing LinkedIn\u2019s direct messaging service. In direct follow-up emails, the actor pretends to be from a staffing company with an offer of employment. In many cases, the actor supports the campaigns with fake websites that impersonate legitimate staffing companies. These websites, however, host the malicious payloads. In other cases, the actor uses a range of malicious attachments to distribute More_eggs.\n\nTaurus Loader has been observed to distribute GandCrab and Sodinokibi ({{Pinchy Spider, Gold Southfield}}) and Trickbot ({{Wizard Spider, Gold Blackburn}}), as well as their own tool More_eggs.",
        "observed-sectors": [
            "Entertainment",
            "Financial",
            "Pharmaceutical",
            "Retail"
        ],
        "observed-countries": [
            "USA"
        ],
        "tools": [
            "lite_more_eggs",
            "More_eggs",
            "Taurus Loader",
            "TerraCrypt",
            "TerraPreter",
            "TerraRecon",
            "TerraStealer",
            "TerraTV",
            "TerraWiper",
            "ThreatKit",
            "VenomKit",
            "VenomLNK"
        ],
        "operations": [
            {
                "date": "2019-02",
                "activity": "Phishers Target Anti-Money Laundering Officers at U.S. Credit Unions\nhttps://krebsonsecurity.com/2019/02/phishers-target-anti-money-laundering-officers-at-u-s-credit-unions/"
            }
        ],
        "information": [
            "https://quointelligence.eu/2018/11/golden-chickens-uncovering-a-malware-as-a-service-maas-provider-and-two-new-threat-actors-using/",
            "https://medium.com/@quoscient/golden-chickens-uncovering-a-malware-as-a-service-maas-provider-and-two-new-threat-actors-using-61cf0cb87648",
            "https://quointelligence.eu/2020/01/the-chicken-keeps-laying-new-eggs-uncovering-new-gc-maas-tools-used-by-top-tier-threat-actors/",
            "https://www.proofpoint.com/us/threat-insight/post/fake-jobs-campaigns-delivering-moreeggs-backdoor-fake-job-offers",
            "https://www.esentire.com/web-native-pages/unmasking-venom-spider",
            "https://www.esentire.com/web-native-pages/the-hunt-for-venom-spider-part-2"
        ],
        "uuid": "b7504991-61c8-41dc-9a22-664ece91c20f",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "venom_spider_golden_chickens",
    "analysis": null,
    "articles": [],
    "mitre": []
};