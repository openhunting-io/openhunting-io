var threatdata = {
    "name": "Calypso",
    "alias": "Calypso, Bronze Medley",
    "category": "APT",
    "type": "-",
    "modified": "2021-11-02",
    "all_data": {
        "actor": "Calypso",
        "names": [
            {
                "name": "Calypso",
                "name-giver": "Positive Technologies"
            },
            {
                "name": "Bronze Medley",
                "name-giver": "SecureWorks"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Positive Technologies) The PT Expert Security Center first took note of Calypso in March 2019 during threat hunting. Our specialists collected multiple samples of malware used by the group. They have also identified the organizations hit by the attackers, as well as the attackers\u2019 C2 servers.\n\nOur data indicates that the group has been active since at least September 2016. The primary goal of the group is theft of confidential data. Main targets are governmental institutions in Brazil, India, Kazakhstan, Russia, Thailand, and Turkey.\n\nOur data gives reason to believe that the APT group is of Asian origin.",
        "observed-sectors": [
            "Government"
        ],
        "observed-countries": [
            "Afghanistan",
            "Belarus",
            "Brazil",
            "India",
            "Kazakhstan",
            "Kyrgyzstan",
            "Mongolia",
            "Russia",
            "Thailand",
            "Turkey",
            "Ukraine"
        ],
        "tools": [
            "Byeby",
            "Calypso RAT",
            "DCSync",
            "DoublePulsar",
            "EarthWorm",
            "EternalBlue",
            "EternalRomance",
            "FlyingDutchman",
            "Hussar",
            "Mimikatz",
            "nbtscan",
            "netcat",
            "OS_Check_445",
            "PlugX",
            "Quarks PwDump",
            "SysInternals",
            "TCP Port Scanner",
            "Whitebird",
            "ZXPortMap",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2021-03",
                "activity": "Exchange servers under siege from at least 10 APT groups\nhttps://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/"
            },
            {
                "date": "2021-08",
                "activity": "4 Chinese APT Groups Identified Targeting Mail Server of Afghan Telecommunications Firm Roshan\nhttps://www.recordedfuture.com/chinese-APT-groups-target-afghan-telecommunications-firm/"
            }
        ],
        "information": [
            "https://www.ptsecurity.com/ww-en/analytics/calypso-apt-2019/"
        ],
        "uuid": "f1a566ce-dff3-4f39-b9cb-d7acd82db584",
        "last-card-change": "2021-11-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "calypso",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/",
            "date": "2021-03-10",
            "organization": "ESET Research",
            "author": "Thomas Dupuy",
            "title": "Exchange servers under siege from at least 10 APT groups",
            "categories": [
                "Microcin",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT27",
                "APT41",
                "Calypso",
                "Tick",
                "ToddyCat",
                "Tonto Team",
                "Vicious Panda"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/upload/corporate/ru-ru/analytics/calypso-apt-2019-rus.pdf",
            "date": "2019-10-23",
            "organization": "Positive Technologies",
            "author": "Positive Technologies",
            "title": "Calypso APT",
            "categories": [
                "Calypso"
            ]
        }
    ],
    "mitre": []
};