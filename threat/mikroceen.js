var threatdata = {
    "name": "Mikroceen",
    "alias": "Mikroceen, SixLittleMonkeys",
    "category": "APT",
    "type": "-",
    "modified": "2021-04-20",
    "all_data": {
        "actor": "Mikroceen",
        "names": [
            {
                "name": "Mikroceen",
                "name-giver": "ESET"
            },
            {
                "name": "SixLittleMonkeys",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(ESET) In this joint blogpost with fellow researchers from Avast, we provide a technical analysis of a constantly developed RAT that has been used in various targeted campaigns against both public and private subjects since late 2017. We observed multiple instances of attacks involving this RAT, and all of them happened in Central Asia. Among the targeted subjects were several important companies in the telecommunications and gas industries, and governmental entities.\n\nMoreover, we connect the dots between the latest campaign and three previously published reports: Kaspersky\u2019s Microcin against Russian military personnel, Palo Alto Networks\u2019 BYEBY against the Belarussian government and Checkpoint\u2019s {{Vicious Panda}} against the Mongolian public sector. Also, we discuss other malware that was typically a part of the attacker\u2019s toolset together with the RAT. We chose the name Mikroceen to cover all instances of the RAT, in acknowledgement of Kaspersky\u2019s initial report on the family. The misspelling is intentional, in order to avoid the established microbiological notion, but also to have at least phonemic agreement.",
        "observed-sectors": [
            "Defense",
            "Government",
            "Oil and gas",
            "Telecommunications"
        ],
        "observed-countries": [
            "Belarus",
            "Mongolia",
            "Russia",
            "Central Asia"
        ],
        "tools": [
            "Gh0st RAT",
            "logon.dll",
            "logsupport.dll",
            "Microcin",
            "Mimikatz",
            "pcaudit.bat",
            "sqllauncher.dll"
        ],
        "operations": [
            {
                "date": "2021-03",
                "activity": "Exchange servers under siege from at least 10 APT groups\nhttps://www.welivesecurity.com/2021/03/10/exchange-servers-under-siege-10-apt-groups/"
            }
        ],
        "information": [
            "https://www.welivesecurity.com/2020/05/14/mikroceen-spying-backdoor-high-profile-networks-central-asia/",
            "https://decoded.avast.io/luigicamastra/apt-group-planted-backdoors-targeting-high-profile-networks-in-central-asia/",
            "https://securelist.com/microcin-is-here/97353/"
        ],
        "uuid": "99c03ea2-2c7c-49fc-a513-9f2782b630a7",
        "last-card-change": "2021-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mikroceen",
    "analysis": null,
    "articles": [],
    "mitre": []
};