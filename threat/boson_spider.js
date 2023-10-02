var threatdata = {
    "name": "Boson Spider",
    "alias": "Boson Spider",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Boson Spider",
        "names": [
            {
                "name": "Boson Spider",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2015",
        "description": "(IBM) When it comes to discovering new malware, it is much more common for researchers to run across information stealers, ransomware and remote-access tools (RATs) than it is to encounter brand new complex codes like banking Trojans or targeted attack tools such as Duqu.\n\nNonetheless, it is the lesser breeds, like information stealers and RATs, that are a lot more prolific in the wild. And while banking Trojans or targeted attacks are quite specific in what they do, information stealers are by far less discriminatory and thus end up affecting a greater number of people and organizations.\n\nThat brings us to CoreBot, a new information stealer discovered and analyzed by IBM Security X-Force researchers, who indicate this is one malware piece to watch out for. CoreBot appears to be quite modular, which means that its structure and internal makeup were programmed in a way that allows for the easy adding of new data theft and endpoint control mechanisms.\n\nCoreBot was discovered while the researchers were studying the activity of malware on Trusteer-protected enterprise endpoints. The malware\u2019s compiled file was named \u201ccore\u201d by its developer. Antivirus engines do not specify this malware\u2019s name yet and detect it under generic names such as Dynamer!ac or Eldorado. But while CoreBot may appear artless at first glance, without real-time theft capabilities, it is more interesting on the inside.\n\nCoreBot has been observed to be distributed by DinaBot (operated by {{Scully Spider, TA547}}).",
        "observed-sectors": [
            "Financial"
        ],
        "observed-countries": [
            "Australia",
            "Canada",
            "Japan",
            "UK",
            "USA",
            "Europe"
        ],
        "tools": [
            "CoreBot"
        ],
        "operations": [
            {
                "date": "2017-11",
                "activity": "Spotted by researchers at Deep Instinct, a new version of CoreBot is being distributed in spam email campaigns with the intention of stealing information from customers of Canadian banking websites.\nCustomers of TD, Des-Jardins, RBC, Scotia Bank, Banque National are all targeted by those behind the campaign, with successful execution of the malware allowing the attackers to steal the credentials of infected users as they login into these sites.\nhttps://www.zdnet.com/article/corebot-banking-trojan-malware-returns-after-two-year-break/"
            }
        ],
        "information": [
            "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report_BosonSpider.pdf",
            "https://securityintelligence.com/watch-out-for-corebot-new-stealer-in-the-wild/"
        ],
        "uuid": "165f23ac-4e69-433d-bc3a-5e8acd384c16",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "boson_spider",
    "analysis": null,
    "articles": [],
    "mitre": []
};