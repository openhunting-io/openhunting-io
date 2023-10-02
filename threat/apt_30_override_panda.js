var threatdata = {
    "name": "APT 30, Override Panda",
    "alias": "APT 30, Override Panda, CTG-5326, Bronze Geneva, Bronze Sterling, RADIUM, Raspberry Typhoon",
    "category": "APT",
    "type": "-",
    "modified": "2023-04-26",
    "all_data": {
        "actor": "APT 30, Override Panda",
        "names": [
            {
                "name": "APT 30",
                "name-giver": "Mandiant"
            },
            {
                "name": "Override Panda",
                "name-giver": "CrowdStrike"
            },
            {
                "name": "CTG-5326",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Bronze Geneva",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Bronze Sterling",
                "name-giver": "SecureWorks"
            },
            {
                "name": "RADIUM",
                "name-giver": "Microsoft"
            },
            {
                "name": "Raspberry Typhoon",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2005",
        "description": "APT 30 is a threat group suspected to be associated with the Chinese government. While {{Naikon, Lotus Panda}} shares some characteristics with APT 30, the two groups do not appear to be exact matches.\n\n(FireEye) When our Singapore-based FireEye labs team examined malware aimed predominantly at entities in Southeast Asia and India, we suspected that we were peering into a regionally focused cyber espionage operation. The malware revealed a decade-long operation focused on targets\u2014government and commercial\u2014who hold key political, economic, and military information about the region. This group, who we call APT30, stands out not only for their sustained activity and regional focus, but also for their continued success despite maintaining relatively consistent tools, tactics, and infrastructure since at least 2005.\n\nBased on our knowledge of APT30\u2019s targeting activity and tools, their objective appears to be data theft as opposed to financial gain. APT30 has not been observed to target victims or data that can be readily monetized (for example, credit card data, personally identifiable information, or bank transfer credentials). Instead, their tools include functionality that allows them to identify and steal documents, including what appears to be an interest in documents that may be stored on air-gapped networks.\n\nThe group expresses a distinct interest in organizations and governments associated with ASEAN, particularly so around the time of official ASEAN meetings.\n\nMany of APT30\u2019s decoy documents use topics related to Southeast Asia, India, border areas, and broader security and diplomatic issues. Decoy documents attached to spear phishing emails are frequently indicators of intended targeting because threat actors generally tailor these emails to entice their intended targets \u2014who typically work on related issues\u2014to click on the attachments and infect themselves.\n\nIn addition to APT30\u2019s Southeast Asia and India focus, we\u2019ve observed APT30 target journalists reporting on issues traditionally considered to be focal points for the Chinese Communist Party\u2019s sense of legitimacy, such as corruption, the economy, and human rights. In China, the Communist Party has the ultimate authority over the government. China-based threat groups have targeted journalists before; we believe they often do so to get a better understanding on developing stories to anticipate unfavorable coverage and better position themselves to shape public messaging.",
        "observed-sectors": [
            "Defense",
            "Government"
        ],
        "observed-countries": [
            "ASEAN",
            "Bhutan",
            "Brunei",
            "Cambodia",
            "India",
            "Indonesia",
            "Japan",
            "Laos",
            "Malaysia",
            "Myanmar",
            "Nepal",
            "Philippines",
            "Saudi Arabia",
            "Singapore",
            "South Korea",
            "Thailand",
            "Vietnam",
            "USA"
        ],
        "tools": [
            "BackBend",
            "Backspace",
            "Creamsicle",
            "Flashflood",
            "Gemcutter",
            "Milkmaid",
            "NetEagle",
            "Orangeade",
            "Shipshape",
            "Spaceship"
        ],
        "information": [
            "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G0013/"
        ],
        "uuid": "a97aea4e-ac99-4506-89e6-ba1e5b766b0d",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "apt_30_override_panda",
    "analysis": null,
    "articles": [],
    "mitre": []
};