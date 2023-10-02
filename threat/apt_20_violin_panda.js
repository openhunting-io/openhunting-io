var threatdata = {
    "name": "APT 20, Violin Panda",
    "alias": "APT 20, APT 8, Violin Panda, TH3Bug",
    "category": "APT",
    "type": "-",
    "modified": "2022-02-10",
    "all_data": {
        "actor": "APT 20, Violin Panda",
        "names": [
            {
                "name": "APT 20",
                "name-giver": "FireEye"
            },
            {
                "name": "APT 8",
                "name-giver": "Mandiant"
            },
            {
                "name": "Violin Panda",
                "name-giver": "Crowdstrike"
            },
            {
                "name": "TH3Bug",
                "name-giver": "Palo Alto"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2014",
        "description": "(Palo Alto) We\u2019ve uncovered some new data and likely attribution regarding a series of APT watering hole attacks this past summer. Watering hole attacks are an increasingly popular component of APT campaigns, as many people are more aware of spear phishing and are less likely to open documents or click on links in unsolicited emails.  Watering hole attacks offer a much better chance of success because they involve compromising legitimate websites and installing malware intended to compromise website visitors. These are often popular websites frequented by people who work in specific industries or have political sympathies to which the actors want to gain access.\nIn contrast to many other APT campaigns, which tend to rely heavily on spear phishing to gain victims, \u201cth3bug\u201d is known for compromising legitimate websites their intended visitors are likely to frequent.  Over the summer they compromised several sites, including a well-known Uyghur website written in that native language.\n\nThis group could be related to {{Axiom, Group 72}}.",
        "observed-sectors": [
            "Aviation",
            "Chemical",
            "Construction",
            "Defense",
            "Energy",
            "Engineering",
            "Financial",
            "Government",
            "Healthcare",
            "High-Tech",
            "Pharmaceutical",
            "Telecommunications",
            "Transportation",
            "Uyghur sympathizers"
        ],
        "observed-countries": [
            "Brazil",
            "China",
            "France",
            "Germany",
            "Italy",
            "Mexico",
            "Portugal",
            "Spain",
            "Thailand",
            "UK",
            "USA",
            "East Asia"
        ],
        "tools": [
            "BloodHound",
            "KeeThief",
            "Kerberoast",
            "Mimikatz",
            "PlugX",
            "Poison Ivy",
            "ProcDump",
            "PsExec",
            "SharpHound",
            "SMBExec",
            "WinRAR",
            "XServer",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2017",
                "activity": "Operation \u201cWocao\u201d\nhttps://resources.fox-it.com/rs/170-CAK-271/images/201912_Report_Operation_Wocao.pdf"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/recent-watering-hole-attacks-attributed-apt-group-th3bug-using-poison-ivy/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=th3bug"
        ],
        "uuid": "73a85c37-08ef-4df4-ac98-7cb07b58715b",
        "last-card-change": "2022-02-10",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_20_violin_panda",
    "analysis": null,
    "articles": [],
    "mitre": []
};