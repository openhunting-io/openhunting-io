var threatdata = {
    "name": "Samurai Panda",
    "alias": "Samurai Panda",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Samurai Panda",
        "names": [
            {
                "name": "Samurai Panda",
                "name-giver": "CrowdStrike"
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
        "description": "(CrowdStrike) Samurai Panda is interesting in that their target selection tends to focus on Asia Pacific victims in Japan, the Republic of Korea, and other democratic Asian victims. Beginning in 2009, we\u2019ve observed this actor conduct more than 40 unique campaigns that we\u2019ve identified in the malware configurations\u2019 campaign codes. These codes are often leveraged in the malware used by coordinated targeted attackers to differentiate victims that were successfully compromised from different target sets.\n\nThe implant delivered by Samurai Panda uses a typical installation process whereby they:\n1. Leverage a spear-phish with an exploit to get control of the execution flow of the targeted application. This file \u201cdrops\u201d an XOR-encoded payload that unpacks itself and a configuration file.\n2. Next, the implant, which can perform in several different modes, typically will install itself as a service and then begin beaconing out to an adversary-controlled host.\n3. If that command-and-control host is online, the malicious service will download and instantiate a backdoor that provides remote access to the attacker, who will see the infected host\u2019s identification information as well as the campaign code.",
        "observed-sectors": [
            "Defense",
            "Government"
        ],
        "observed-countries": [
            "Hong Kong",
            "Japan",
            "South Korea",
            "UK",
            "USA"
        ],
        "tools": [
            "FormerFirstRAT",
            "IsSpace",
            "PlugX",
            "Poldat",
            "Sykipot"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/whois-samurai-panda/"
        ],
        "uuid": "32e28369-30a3-4675-8e0a-04c91c1def98",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "samurai_panda",
    "analysis": null,
    "articles": [],
    "mitre": []
};