var threatdata = {
    "name": "ZooPark",
    "alias": "ZooPark, TG-2884, Cobalt Juno, APT-C-38, Saber Lion",
    "category": "APT",
    "type": "-",
    "modified": "2021-08-10",
    "all_data": {
        "actor": "ZooPark",
        "names": [
            {
                "name": "ZooPark",
                "name-giver": "Kaspersky"
            },
            {
                "name": "TG-2884",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Cobalt Juno",
                "name-giver": "SecureWorks"
            },
            {
                "name": "APT-C-38",
                "name-giver": "Qihoo 360"
            },
            {
                "name": "Saber Lion",
                "name-giver": "?"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2015",
        "description": "(Kaspersky) ZooPark is a cyberespionage operation that has been focusing on Middle Eastern targets since at least June 2015. The threat actors behind ZooPark infect Android devices using several generations of malware we label from v1-v4, with v4 being the most recent version deployed in 2017.\n\nThe preferred infection vector for ZooPark is waterhole attacks. We found several news websites that have been hacked by the attackers to redirect visitors to a downloading site that serves malicious APKs. Some of the themes observed in campaign include \u201cKurdistan referendum\u201d, \u201cTelegramGroups\u201d and \u201cAlnaharegypt news\u201d, among others.\n\nTarget profile has evolved during the last years of campaign, focusing on victims in Egypt, Jordan, Morocco, Lebanon and Iran.",
        "observed-sectors": [
            "Media",
            "United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA) in Amman, Jordan"
        ],
        "observed-countries": [
            "Egypt",
            "Iraq",
            "Iran",
            "Jordan",
            "Kuwait",
            "Lebanon",
            "Morocco",
            "Kurdistan"
        ],
        "tools": [
            "ZooPark"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/05/24122414/ZooPark_for_public_final_edited.pdf"
        ],
        "uuid": "7d58d4fb-0ed4-4384-a16b-ea023145ddb9",
        "last-card-change": "2021-08-10",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "zoopark",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-juno",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT JUNO",
            "categories": [
                "ZooPark",
                "COBALT JUNO"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2019/91897/",
            "date": "2019-08-01",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2019",
            "categories": [
                "ZooPark",
                "magecart",
                "POWERSTATS",
                "Chaperone",
                "COMpfun",
                "EternalPetya",
                "FinFisher RAT",
                "HawkEye Keylogger",
                "HOPLIGHT",
                "Microcin",
                "NjRAT",
                "Olympic Destroyer",
                "PLEAD",
                "RokRAT",
                "Triton",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://securelist.com/whos-who-in-the-zoo/85394/",
            "date": "2018-05-03",
            "organization": "Kaspersky Labs",
            "author": "Alexey Firsh",
            "title": "Who\u2019s who in the Zoo",
            "categories": [
                "ZooPark",
                "ZooPark"
            ]
        },
        {
            "data_url": "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/05/03114450/ZooPark_for_public_final_edit.pdf",
            "date": "2018-05-03",
            "organization": "Kaspersky Labs",
            "author": "Alexey Firsh",
            "title": "WHO\u2019S WHO IN THEZOO. CYBERESPIONAGE OPERATION TARGETS ANDROID USERS IN THE MIDDLE EAST.",
            "categories": [
                "ZooPark"
            ]
        },
        {
            "data_url": "https://securelist.com/whos-who-in-the-zoo/85394",
            "date": "2018-05-03",
            "organization": "Kaspersky Labs",
            "author": "Alexey Firsh",
            "title": "Who\u2019s who in the Zoo",
            "categories": [
                "ZooPark"
            ]
        }
    ],
    "mitre": []
};