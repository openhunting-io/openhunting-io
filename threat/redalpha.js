var threatdata = {
    "name": "RedAlpha",
    "alias": "RedAlpha",
    "category": "APT",
    "type": "-",
    "modified": "2022-09-12",
    "all_data": {
        "actor": "RedAlpha",
        "names": [
            {
                "name": "RedAlpha",
                "name-giver": "Recorded Future"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, possibly PLA and/or Nanjing Qinglan Information Technology Co. Ltd",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "The original research from Citizen Lab did not give this group a name.\n\n(Recorded Future) Recorded Future\u2019s Insikt Group has identified two new cyberespionage campaigns targeting the Tibetan community over the past two years. The campaigns, which we are collectively naming RedAlpha, combine light reconnaissance, selective targeting, and diverse malicious tooling. We discovered this activity as the result of pivoting off of a new malware sample observed targeting the Tibetan community based in India.\n\nInsikt Group\u2019s analysis of infrastructure overlap among the new campaigns reveals wider targeting of the Chinese \u201cFive Poisons,\u201d in addition to South and Southeast Asian governments. Based on the campaign\u2019s targeting of \u201cFive Poisons\u201d-related organizations, overlapping infrastructure, and links to malware used by other Chinese APTs uncovered during our research, we assess with medium confidence that the RedAlpha campaigns were conducted by a Chinese APT.\n\nInfrastructure overlaps have been found with {{APT 17, Deputy Dog, Elderwood, Sneaky Panda}}, {{Icefog, Dagger Panda}} and {{NetTraveler, APT 21, Hammer Panda}}.",
        "observed-sectors": [
            "Government",
            "the Tibetan and Uyghur communities and Falun Gong supporters"
        ],
        "observed-countries": [
            "Hong Kong",
            "India",
            "Myanmar",
            "Pakistan",
            "Sri Lanka",
            "Thailand",
            "South and Southeast Asia"
        ],
        "tools": [
            "FormerFirstRAT",
            "Gh0st RAT",
            "NetHelp Infostealer",
            "njRAT",
            "RedAlpha",
            "a vulnerability in MS Office"
        ],
        "operations": [
            {
                "date": "2017",
                "activity": "RedAlpha: New Campaigns Discovered Targeting the Tibetan Community\nhttps://www.recordedfuture.com/redalpha-cyber-campaigns/\nhttps://go.recordedfuture.com/hubfs/reports/cta-2018-0626.pdf"
            },
            {
                "date": "2021",
                "activity": "RedAlpha Conducts Multi-Year Credential Theft Campaign Targeting Global Humanitarian, Think Tank, and Government Organizations\nhttps://go.recordedfuture.com/hubfs/reports/ta-2022-0816.pdf"
            }
        ],
        "information": [
            "https://citizenlab.ca/2018/01/spying-on-a-budget-inside-a-phishing-operation-with-targets-in-the-tibetan-community/"
        ],
        "uuid": "e049d10f-81fd-4cc0-bb61-46f75594a1b9",
        "last-card-change": "2022-09-12",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "redalpha",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/ta-2022-0816.pdf",
            "date": "2022-08-16",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "RedAlpha Conducts Multi-Year Credential Theft Campaign Targeting Global Humanitarian, Think Tank, and Government Organizations",
            "categories": [
                "RedAlpha"
            ]
        },
        {
            "data_url": "https://www.pwc.com/gx/en/issues/cybersecurity/cyber-threat-intelligence/cyber-year-in-retrospect/yir-cyber-threats-report-download.pdf",
            "date": "2022-04-28",
            "organization": "PWC",
            "author": "PWC UK",
            "title": "Cyber Threats 2021: A Year in Retrospect",
            "categories": [
                "BPFDoor",
                "APT15",
                "APT31",
                "APT41",
                "APT9",
                "BlackTech",
                "BRONZE EDGEWOOD",
                "DAGGER PANDA",
                "Earth Lusca",
                "HAFNIUM",
                "HAZY TIGER",
                "Inception Framework",
                "LOTUS PANDA",
                "QUILTED TIGER",
                "RedAlpha",
                "Red Dev 17",
                "Red Menshen",
                "Red Nue",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/chinese-cyberespionage-operations",
            "date": "2018-08-16",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Chinese Cyberespionage Originating From Tsinghua University Infrastructure",
            "categories": [
                "ext4",
                "RedAlpha"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2018-0626.pdf",
            "date": "2018-06-26",
            "organization": "Recorded Future",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "RedAlpha: New Campaigns Discovered Targeting theTibetan Community",
            "categories": [
                "RedAlpha"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/redalpha-cyber-campaigns/",
            "date": "2018-06-26",
            "organization": "Recorded Future",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "RedAlpha: New Campaigns Discovered Targeting the Tibetan Community",
            "categories": [
                "RedAlpha",
                "RedAlpha"
            ]
        }
    ],
    "mitre": []
};