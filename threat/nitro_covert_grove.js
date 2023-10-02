var threatdata = {
    "name": "Nitro, Covert Grove",
    "alias": "Nitro, Covert Grove",
    "category": "APT",
    "type": "-",
    "modified": "2021-08-25",
    "all_data": {
        "actor": "Nitro, Covert Grove",
        "names": [
            {
                "name": "Nitro",
                "name-giver": "Symantec"
            },
            {
                "name": "Covert Grove",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(Symantec) The Nitro Attacks: Stealing Secrets from the Chemical Industry\n\nThe attackers have changed their targets over time. From late April to early May, the attackers focused on human rights related NGOs. They then moved on to the motor industry in late May. From June until mid-July no activity was detected. At this point, the current attack campaign against the chemical industry began. This particular attack has lasted much longer than previous attacks, spanning two and a half months.\n\nA total of 29 companies in the chemical sector were confirmed to be targeted in this attack wave and another 19 in various other sectors, primarily the defense sector, were seen to be affected as well. These 48 companies are the minimum number of companies targeted and likely other companies were also targeted. In a recent two week period, 101 unique IP addresses contacted a command and control server with traffic consistent with an infected machine. These Ips represented 52 different unique Internet Service Providers or organizations in 20 countries.\n\nNitro may be related to {{APT 18, Dynamite Panda, Wekby}}.",
        "observed-sectors": [
            "Automotive",
            "Chemical",
            "NGOs",
            "Technology"
        ],
        "observed-countries": [
            "Argentina",
            "Bangladesh",
            "Canada",
            "China",
            "Czech",
            "Finland",
            "France",
            "Germany",
            "Hong Kong",
            "India",
            "Japan",
            "Netherlands",
            "Norway",
            "Russia",
            "Singapore",
            "South Korea",
            "Sweden",
            "Taiwan",
            "UK",
            "USA"
        ],
        "tools": [
            "Gh0st RAT",
            "PCClient",
            "Poison Ivy",
            "Spindest"
        ],
        "operations": [
            {
                "date": "2014-07",
                "activity": "New Indicators of Compromise found\nHistorically, Nitro is known for targeted spear phishing campaigns and using Poison Ivy malware, which was not seen in these attacks. Since at least 2013, Nitro appears to have somewhat modified their malware and delivery methods to include Spindest and legitimate compromised websites, as reported by Cyber Squared\u2019s TCIRT.\nhttps://unit42.paloaltonetworks.com/new-indicators-compromise-apt-group-nitro-uncovered/"
            }
        ],
        "information": [
            "https://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the_nitro_attacks.pdf",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/the-significance-of-the-nitro-attacks/"
        ],
        "uuid": "86c30d93-a2e8-4d04-9881-884cc59d7e19",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nitro_covert_grove",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://twitter.com/malwrhunterteam/status/1430616882231578624",
            "date": "2021-08-25",
            "organization": "Twitter (@malwrhunterteam)",
            "author": "MalwareHunterTeam",
            "title": "Tweet on Hydra-variant with Dutch ransom note",
            "categories": [
                "Nitro"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/discord-nitro-gift-codes-now-demanded-as-ransomware-payments/",
            "date": "2021-04-18",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Discord Nitro gift codes now demanded as ransomware payments",
            "categories": [
                "Nitro"
            ]
        },
        {
            "data_url": "https://github.com/nightfallgt/nitro-ransomware",
            "date": "2021-04-12",
            "organization": "Github (NightfallGT)",
            "author": "NightfallGT",
            "title": "Nitro Ransomware - Proof of Concept",
            "categories": [
                "Nitro"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/new-indicators-compromise-apt-group-nitro-uncovered/",
            "date": "2014-10-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Jen Miller-Osborn",
            "title": "New Indicators of Compromise for APT Group Nitro Uncovered",
            "categories": [
                "Nitro"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/wp/wp-detecting-apt-activity-with-network-traffic-analysis.pdf",
            "date": "2012-10-23",
            "organization": "Trend Micro",
            "author": "Nart Villeneuve",
            "title": "Detecting APT Activity with Network Traffic Analysis",
            "categories": [
                "Enfal",
                "Gh0stnet",
                "Nitro",
                "sykipot",
                "taidoor"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/the-significance-of-the-nitro-attacks/",
            "date": "2011-10-31",
            "organization": "Trend Micro",
            "author": "Nart Villeneuve",
            "title": "The Significance of the \"Nitro\" Attacks",
            "categories": [
                "Nitro"
            ]
        },
        {
            "data_url": "http://www.symantec.com/content/en/us/enterprise/media/security_response/whitepapers/the_nitro_attacks.pdf",
            "date": "2011",
            "organization": "Symantec",
            "author": "Eric Chien",
            "title": "The Nitro Attacks",
            "categories": [
                "Nitro"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2011/the_nitro_attacks.pdf",
            "date": "2011",
            "organization": "Symantec",
            "author": "Erica Eng",
            "title": "The Nitro Attacks: Stealing Secrets from the Chemical Industry",
            "categories": [
                "Poison Ivy",
                "Nitro"
            ]
        }
    ],
    "mitre": []
};