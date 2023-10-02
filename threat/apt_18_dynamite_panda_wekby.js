var threatdata = {
    "name": "APT 18, Dynamite Panda, Wekby",
    "alias": "APT 18, Dynamite Panda, TG-0416, Wekby, Scandium",
    "category": "APT",
    "type": "-",
    "modified": "2020-05-01",
    "all_data": {
        "actor": "APT 18, Dynamite Panda, Wekby",
        "names": [
            {
                "name": "APT 18",
                "name-giver": "Mandiant"
            },
            {
                "name": "Dynamite Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "TG-0416",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Wekby",
                "name-giver": "Palo Alto"
            },
            {
                "name": "Scandium",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored, PLA Navy",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2009",
        "description": "Wekby was described by Palo Alto Networks in a 2016 report as: \u2018Wekby is a group that has been active for a number of years, targeting various industries such as healthcare, telecommunications, aerospace, defense, and high tech. The group is known to leverage recently released exploits very shortly after those exploits are available, such as in the case of {{Hacking Team}}\u2019s Flash zero-day exploit.\u2019\n\nThis threat group has been seen since 2009.\n\nAPT 18 may be related to {{Night Dragon}} and/or {{Nitro, Covert Grove}}.",
        "observed-sectors": [
            "Aerospace",
            "Construction",
            "Defense",
            "Education",
            "Engineering",
            "Healthcare",
            "High-Tech",
            "Telecommunications",
            "Transportation",
            "Biotechnology"
        ],
        "observed-countries": [
            "USA"
        ],
        "tools": [
            "AtNow",
            "Gh0st RAT",
            "hcdLoader",
            "HTTPBrowser",
            "Pisloader",
            "StickyFingers",
            "0-day exploits for Flash"
        ],
        "operations": [
            {
                "date": "2014-04",
                "activity": "Community Health Systems data breach\nhttps://threatpost.com/apt-gang-branches-out-to-medical-espionage-in-community-health-breach/107828/\nhttps://www.venafi.com/blog/infographic-how-an-attack-by-a-cyber-espionage-operator-bypassed-security-controls"
            },
            {
                "date": "2015-06",
                "activity": "Attacks using DNS Requests as Command and Control Mechanism\nMethod: Phishing with obfuscated variants of the HTTPBrowser tool.\nhttps://www.anomali.com/blog/evasive-maneuvers-the-wekby-group-attempts-to-evade-analysis-via-custom-rop\nhttps://www.fireeye.com/blog/threat-research/2015/07/demonstrating_hustle.html"
            },
            {
                "date": "2016-05",
                "activity": "Attacks using DNS Requests as Command and Control Mechanism\nTarget: Organizations in the USA.\nMethod: Phishing with Pisloader dropper.\nhttps://unit42.paloaltonetworks.com/unit42-new-wekby-attacks-use-dns-requests-as-command-and-control-mechanism/"
            }
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0026/"
        ],
        "uuid": "aa2f3420-e239-4b0c-9066-c6f5804de6a8",
        "last-card-change": "2020-05-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_18_dynamite_panda_wekby",
    "analysis": null,
    "articles": [],
    "mitre": []
};