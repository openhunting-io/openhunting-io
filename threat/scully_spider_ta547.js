var threatdata = {
    "name": "Scully Spider, TA547",
    "alias": "Scully Spider, TA547",
    "category": "APT",
    "type": "-",
    "modified": "2020-07-08",
    "all_data": {
        "actor": "Scully Spider, TA547",
        "names": [
            {
                "name": "Scully Spider",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TA547",
                "name-giver": "Proofpoint"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime",
            "Financial gain"
        ],
        "first-seen": "2017",
        "description": "(Proofpoint) TA547 is responsible for many other campaigns since at least November 2017. The other campaigns by the actor were often localized to countries such as Australia, Germany, the United Kingdom, and Italy. Delivered malware included ZLoader (a.k.a. Terdot), Gootkit, Ursnif, Corebot, Panda Banker, Atmos, Mazar Bot, and Red Alert Android malware.\n\nIt is worth noting that samples of DanaBot found in a public malware repository contained different campaign IDs (the \u201ca=\u201d parameter) than the ones we observed in the wild, suggesting that there may be activity other than that which we observed.\n\nFinally, we should mention that DanaBot bears some similarities in its technical implementation and choices of technology to earlier malware, in particular Reveton and CryptXXX [1], which were also written in Delphi and communicated using raw TCP to port 443. These malware strains also featured similarities in the style of C&C traffic.\n\nDanaBot has been observed to be distributed by Smoke Loader (operated by {{Smoky Spider}}).\n\nDanaBot itself has been observed to distribute CoreBot ({{Boson Spider}}), GandCrab and Sodinokibi ({{Pinchy Spider, Gold Southfield}}) and TrickBot ({{Wizard Spider, Gold Blackburn}}).",
        "observed-sectors": [
            "Financial"
        ],
        "observed-countries": [
            "Austria",
            "Australia",
            "Brazil",
            "Canada",
            "Colombia",
            "Germany",
            "Hong Kong",
            "Iraq",
            "Italy",
            "Poland",
            "New Zealand",
            "UK",
            "Ukraine",
            "USA"
        ],
        "tools": [
            "DanaBot"
        ],
        "operations": [
            {
                "date": "2018-09",
                "activity": "Recently, we have spotted a surge in activity of DanaBot, a stealthy banking Trojan discovered earlier this year. The malware, first observed in campaigns targeting Australia and later Poland, has apparently expanded further, with campaigns popping up in Italy, Germany, Austria, and as of September 2018, Ukraine.\nhttps://www.welivesecurity.com/2018/09/21/danabot-targeting-europe-adds-new-features/"
            },
            {
                "date": "2018-11",
                "activity": "DanaBot appears to have outgrown the banking Trojan category. According to our research, its operators have recently been experimenting with cunning email-address-harvesting and spam-sending features, capable of misusing webmail accounts of existing victims for further malware distribution.\nhttps://www.welivesecurity.com/2018/12/06/danabot-evolves-beyond-banking-trojan-new-spam/"
            },
            {
                "date": "2019-01",
                "activity": "The fast-evolving, modular Trojan DanaBot has undergone further changes, with the latest version featuring an entirely new communication protocol. The protocol, introduced to DanaBot at the end of January 2019, adds several layers of encryption to DanaBot\u2019s C&C communication.\nhttps://www.welivesecurity.com/2019/02/07/danabot-updated-new-cc-communication/"
            },
            {
                "date": "2019-04",
                "activity": "DanaBot Demands a Ransom Payment\nhttps://research.checkpoint.com/2019/danabot-demands-a-ransom-payment/"
            },
            {
                "date": "2019-09",
                "activity": "Like most of the other notable banking trojans, DanaBot continues to shift tactics and evolve in order to stay relevant. F5 malware researchers first noticed these shifting tactics in September 2019, however, it is possible they began even earlier.\nhttps://www.f5.com/labs/articles/threat-intelligence/danabot-s-new-tactics-and-targets-arrive-in-time-for-peak-phishi"
            }
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/danabot-new-banking-trojan-surfaces-down-under-0",
            "https://h3collective.io/review-of-a-danabot-infection/",
            "https://www.fortinet.com/blog/threat-research/breakdown-of-a-targeted-danabot-attack.html"
        ],
        "uuid": "23122dca-5529-4f8f-b69d-d4a31a00c20a",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "scully_spider_ta547",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.thaicert.or.th/downloads/files/Threat_Group_Cards_v2.0.pdf",
            "date": "2020-07-08",
            "organization": "ThaiCERT",
            "author": "ThaiCERT",
            "title": "Threat Group Cards: A Threat Actor Encyclopedia",
            "categories": [
                "TA516",
                "TA547",
                "TA554",
                "TA555"
            ]
        }
    ],
    "mitre": []
};