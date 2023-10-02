var threatdata = {
    "name": "GhostEmperor",
    "alias": "GhostEmperor",
    "category": "APT",
    "type": "-",
    "modified": "2021-11-02",
    "all_data": {
        "actor": "GhostEmperor",
        "names": [
            {
                "name": "GhostEmperor",
                "name-giver": "Kaspersky"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2020",
        "description": "(Kaspersky) GhostEmperor is a Chinese-speaking threat actor that has mostly focused on targets in Southeast Asia, including several government entities and telecom companies. The group stands out because it uses a formerly unknown Windows kernel-mode rootkit. Rootkits provide remote control access over the servers they target. Acting covertly, rootkits are notorious for hiding from investigators and security solutions. To bypass the Windows Driver Signature Enforcement mechanism, GhostEmperor uses a loading scheme involving a component of an open-source project named \u201cCheat Engine.\u201d This advanced toolset is unique and Kaspersky researchers see no similarity to already known threat actors. Kaspersky experts have surmised that the toolset has been in use since at least July 2020.",
        "observed-sectors": [
            "Government",
            "Telecommunications"
        ],
        "observed-countries": [
            "Afghanistan",
            "Egypt",
            "Ethiopia",
            "Indonesia",
            "Malaysia",
            "Thailand",
            "Vietnam",
            "Southeast Asia"
        ],
        "tools": [
            "certutil",
            "nbtscan",
            "PsExec",
            "PsList",
            "ProcDump",
            "WinRAR"
        ],
        "information": [
            "https://securelist.com/ghostemperor-from-proxylogon-to-kernel-mode/104407/",
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2021/09/30094337/GhostEmperor_technical-details_PDF_eng.pdf"
        ],
        "uuid": "b88e37a4-1fc1-42da-bd72-6ad44758193f",
        "last-card-change": "2021-11-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ghostemperor",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/ghostemperor-from-proxylogon-to-kernel-mode/104407/",
            "date": "2021-09-30",
            "organization": "Kaspersky",
            "author": "Mark Lechtik",
            "title": "GhostEmperor: From ProxyLogon to kernel mode",
            "categories": [
                "GhostEmperor"
            ]
        },
        {
            "data_url": "https://www.kaspersky.com/about/press-releases/2021_ghostemperor-chinese-speaking-apt-targets-high-profile-victims-using-unknown-rootkit",
            "date": "2021-07-29",
            "organization": "Kaspersky",
            "author": "Kaspersky",
            "title": "GhostEmperor: Chinese-speaking APT targets high-profile victims using unknown rootkit",
            "categories": [
                "GhostEmperor"
            ]
        }
    ],
    "mitre": []
};