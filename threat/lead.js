var threatdata = {
    "name": "Lead",
    "alias": "Lead, TG-3279, Casper",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Lead",
        "names": [
            {
                "name": "Lead",
                "name-giver": "Microsoft"
            },
            {
                "name": "TG-3279",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Casper",
                "name-giver": "BlackBerry"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Microsoft) In the past few years, Lead\u2019s victims have included:\n\u2022 Multinational, multi-industry companies involved in the manufacture of textiles, chemicals, and electronics\n\u2022 Pharmaceutical companies\n\u2022 A company in the chemical industry\n\u2022 University faculty specializing in aeronautical engineering and research\n\u2022 A company involved in the design and manufacture of motor vehicles\n\u2022 A cybersecurity company focusing on protecting industrial control systems\n\nDuring these intrusions, Lead\u2019s objective was to steal sensitive data, including research materials, process documents, and project plans. Lead also steals code-signing certificates to sign its malware in subsequent attacks.\n\nIn most cases, Lead\u2019s attacks do not feature any advanced exploit techniques. The group also does not make special effort to cultivate victims prior to an attack. Instead, the group often simply emails a Winnti installer to potential victims, relying on basic social engineering tactics to convince recipients to run the attached malware. In some other cases, Lead gains access to a target by brute-forcing remote access login credentials, performing SQL injection, or exploiting unpatched web servers, and then they copy the Winnti installer directly to compromised machines.",
        "observed-sectors": [
            "Online video game companies",
            "Pharmaceutical",
            "Technology",
            "Telecommunications"
        ],
        "observed-countries": [
            "Japan",
            "USA"
        ],
        "tools": [
            "Cobalt Strike",
            "Winnti"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2017/01/25/detecting-threat-actors-in-recent-german-industrial-attacks-with-windows-defender-atp/"
        ],
        "uuid": "c874e794-c836-4714-9ed3-a168a967a942",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lead",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2015/03/05/casper-malware-babar-bunny-another-espionage-cartoon/",
            "date": "2015-03-05",
            "organization": "ESET Research",
            "author": "Joan Calvet",
            "title": "Casper Malware: After Babar and Bunny, Another Espionage Cartoon",
            "categories": [
                "Casper"
            ]
        }
    ],
    "mitre": []
};