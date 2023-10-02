var threatdata = {
    "name": "OPERA1ER",
    "alias": "OPERA1ER, DESKTOP-GROUP, Common Raven, NXSMS, Bluebottle",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-05",
    "all_data": {
        "actor": "OPERA1ER",
        "names": [
            {
                "name": "OPERA1ER",
                "name-giver": "Group-IB"
            },
            {
                "name": "DESKTOP-GROUP",
                "name-giver": "c-APT-ure"
            },
            {
                "name": "Common Raven",
                "name-giver": "SWIFT"
            },
            {
                "name": "NXSMS",
                "name-giver": "Orange-CERT-CC"
            },
            {
                "name": "Bluebottle",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2016",
        "description": "(Group-IB) Digital forensics artifacts analyzed by Group-IB and Orange following more than 30 successful intrusions of OPERA1ER between 2018 and 2022 helped to trace down affected organizations in Ivory Coast, Mali, Burkina Faso, Benin, Cameroon, Bangladesh, Gabon, Niger, Nigeria, Paraguay, Senegal, Sierra Leone, Uganda, Togo, Argentina. Many of the victims identified were successfully attacked twice, and their infrastructure was then used to attack other organizations. According to Group-IB\u2019s evaluation, between 2018 and 2022, OPERA1ER managed to steal at least $11 million, and the actual amount of damage could be as high as $30 million.",
        "observed-sectors": [
            "Financial",
            "Telecommunications"
        ],
        "observed-countries": [
            "Argentina",
            "Bangladesh",
            "Benin",
            "Burkina Faso",
            "Cameroon",
            "Cote d'Ivoire",
            "Gabon",
            "Mali",
            "Niger",
            "Nigeria",
            "Paraguay",
            "Senegal",
            "Sierra Leone",
            "Togo",
            "Uganda"
        ],
        "tools": [
            "Agent Tesla",
            "BitRAT",
            "BlackNET RAT",
            "Cobalt Strike",
            "Metasploit",
            "NetWire RC",
            "Neutrino",
            "Ngrok",
            "PsExec",
            "RDPWrap",
            "RemcosRAT",
            "Revealer Keylogger",
            "VenomRAT",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2022-05",
                "activity": "Bluebottle: Campaign Hits Banks in French-speaking Countries in Africa\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/bluebottle-banks-targeted-africa"
            }
        ],
        "counter-operations": [
            {
                "date": "2023-07",
                "activity": "Operation \u201cNervone\u201d\nSuspected key figure of notorious cybercrime group arrested in joint operation\nhttps://www.interpol.int/News-and-Events/News/2023/Suspected-key-figure-of-notorious-cybercrime-group-arrested-in-joint-operation"
            }
        ],
        "information": [
            "https://www.group-ib.com/media-center/press-releases/opera1er/"
        ],
        "uuid": "a3c4d317-7ad1-4353-9102-ff64b20996d5",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "opera1er",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.group-ib.com/opera1er-apt",
            "date": "2022-11-03",
            "organization": "Group-IB",
            "author": "Rustam Mirkasymov",
            "title": "Financially motivated, dangerously activated:  OPERA1ER APT in Africa",
            "categories": [
                "Cobalt Strike",
                "Common Raven"
            ]
        },
        {
            "data_url": "https://www2.swift.com/isac/report/10118",
            "date": "2021",
            "organization": "SWIFT",
            "author": "SWIFT",
            "title": "SWIFT Report on COMMON Raven",
            "categories": [
                "Common Raven"
            ]
        },
        {
            "data_url": "https://www.rewterz.com/rewterz-news/rewterz-threat-alert-common-raven-iocs",
            "date": "2020-11-19",
            "organization": "Rewterz Information Security",
            "author": "Rewterz Information Security",
            "title": "Rewterz Threat Alert \u2013 Common Raven \u2013 IOCs",
            "categories": [
                "BatchWiper",
                "Common Raven"
            ]
        }
    ],
    "mitre": []
};