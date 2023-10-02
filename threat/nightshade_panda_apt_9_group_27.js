var threatdata = {
    "name": "Nightshade Panda, APT 9, Group 27",
    "alias": "Nightshade Panda, APT 9, Group 27, FlowerLady, FlowerShow",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Nightshade Panda, APT 9, Group 27",
        "names": [
            {
                "name": "Nightshade Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "APT 9",
                "name-giver": "Mandiant"
            },
            {
                "name": "Group 27",
                "name-giver": "ASERT"
            },
            {
                "name": "FlowerLady",
                "name-giver": "Context"
            },
            {
                "name": "FlowerShow",
                "name-giver": "Context"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2013",
        "description": "(Softpedia) Arbor\u2019s ASERT team is now reporting that, after looking deeper at that particular campaign, and by exposing a new trail in the group\u2019s activities, they managed to identify a new RAT that was undetectable at that time by most antivirus vendors.\n\nNamed Trochilus, this new RAT was part of Group 27\u2019s malware portfolio that included six other malware strains, all served together or in different combinations, based on the data that needed to be stolen from each victim.\n\nThis collection of malware, dubbed the Seven Pointed Dagger by ASERT experts, included two different PlugX versions, two different Trochilus RAT versions, one version of the 3012 variant of the 9002 RAT, one EvilGrab RAT version, and one unknown piece of malware, which the team has not entirely decloaked just yet.",
        "observed-sectors": [
            "Energy",
            "Government",
            "Media",
            "Utilities"
        ],
        "observed-countries": [
            "Myanmar",
            "Thailand",
            "USA",
            "Europe"
        ],
        "tools": [
            "3102 RAT",
            "9002 RAT",
            "EvilGrab RAT",
            "MoonWind RAT",
            "PlugX",
            "Poison Ivy",
            "Trochilus RAT"
        ],
        "operations": [
            {
                "date": "2015-05",
                "activity": "Operation \u201cSeven Pointed Dagger\u201d\nDuring that campaign, the threat actor identified as Group 27 used watering hole attacks on official Myanmar government websites to infect unsuspecting users with the PlugX malware (an RAT) when accessing information on the upcoming Myanmar elections.\nhttps://news.softpedia.com/news/trochilus-rat-evades-antivirus-detection-used-for-cyber-espionage-in-south-east-asia-498776.shtml\nhttps://unit42.paloaltonetworks.com/evilgrab-delivered-by-watering-hole-attack-on-president-of-myanmars-website/\nhttp://pages.arbornetworks.com/rs/082-KNA-087/images/ASERT%20Threat%20Intelligence%20Brief%202015-05%20PlugX%20Threat%20Activity%20in%20Myanmar.pdf"
            },
            {
                "date": "2015-05",
                "activity": "Chinese Actors Use \u20183102\u2019 Malware in Attacks on US Government and EU Media\nhttps://unit42.paloaltonetworks.com/chinese-actors-use-3102-malware-in-attacks-on-us-government-and-eu-media/"
            },
            {
                "date": "2016-09",
                "activity": "From September 2016 through late November 2016, a threat actor group used both the Trochilus RAT and a newly idenfied RAT we\u2019ve named MoonWind to target organizations in Thailand, including a utility organization. We chose the name \u2018MoonWind\u2019 based on debugging strings we saw within the samples, as well as the compiler used to generate the samples. The attackers compromised two legitimate Thai websites to host the malware, which is a tactic this group has used in the past.\nhttps://unit42.paloaltonetworks.com/unit42-trochilus-rat-new-moonwind-rat-used-attack-thai-utility-organizations/"
            }
        ],
        "uuid": "8a0bdb6e-8aff-478b-a9bc-29732ec3e99c",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nightshade_panda_apt_9_group_27",
    "analysis": null,
    "articles": [],
    "mitre": []
};