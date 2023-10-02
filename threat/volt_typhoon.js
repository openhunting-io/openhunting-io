var threatdata = {
    "name": "Volt Typhoon",
    "alias": "Volt Typhoon, Vanguard Panda",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Volt Typhoon",
        "names": [
            {
                "name": "Volt Typhoon",
                "name-giver": "Microsoft"
            },
            {
                "name": "Vanguard Panda",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2020",
        "description": "(Microsoft) Microsoft has uncovered stealthy and targeted malicious activity focused on post-compromise credential access and network system discovery aimed at critical infrastructure organizations in the United States. The attack is carried out by Volt Typhoon, a state-sponsored actor based in China that typically focuses on espionage and information gathering. Microsoft assesses with moderate confidence that this Volt Typhoon campaign is pursuing development of capabilities that could disrupt critical communications infrastructure between the United States and Asia region during future crises.\n\nVolt Typhoon has been active since mid-2021 and has targeted critical infrastructure organizations in Guam and elsewhere in the United States. In this campaign, the affected organizations span the communications, manufacturing, utility, transportation, construction, maritime, government, information technology, and education sectors. Observed behavior suggests that the threat actor intends to perform espionage and maintain access without being detected for as long as possible. Microsoft is choosing to highlight this Volt Typhoon activity at this time because of our significant concern around the potential for further impact to our customers. Although our visibility into these threats has given us the ability to deploy detections to our customers, the lack of visibility into other parts of the actor\u2019s activity compelled us to drive broader community awareness and further investigations and protections across the security ecosystem.",
        "observed-sectors": [
            "Construction",
            "Education",
            "Government",
            "IT",
            "Maritime and Shipbuilding",
            "Manufacturing",
            "Telecommunications",
            "Transportation",
            "Utilities"
        ],
        "observed-countries": [
            "USA"
        ],
        "tools": [
            "FRP",
            "Impacket",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2023-06",
                "activity": "Analysis of CVE-2023-27997 and Clarifications on Volt Typhoon Campaign\nhttps://www.fortinet.com/blog/psirt-blogs/analysis-of-cve-2023-27997-and-clarifications-on-volt-typhoon-campaign"
            },
            {
                "date": "2023-06",
                "activity": "Business as Usual: Falcon Complete MDR Thwarts Novel VANGUARD PANDA (Volt Typhoon) Tradecraft\nhttps://www.crowdstrike.com/blog/falcon-complete-thwarts-vanguard-panda-tradecraft/"
            },
            {
                "date": "2023-07",
                "activity": "China's Volt Typhoon APT Burrows Deeper Into US Critical Infrastructure\nhttps://www.darkreading.com/vulnerabilities-threats/china-s-volt-typhoon-apt-burrows-us-critical-infrastructure"
            }
        ],
        "information": [
            "https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/"
        ],
        "uuid": "a8b73194-0ca4-41b0-85ff-3793b83e47c0",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "volt_typhoon",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/blog/chinese-cyberespionage-group-bronze-silhouette-targets-us-government-and-defense-organizations",
            "date": "2023-05-24",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Chinese Cyberespionage Group BRONZE SILHOUETTE Targets U.S. Government and Defense Organizations",
            "categories": [
                "Volt Typhoon"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/",
            "date": "2023-05-24",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence",
            "title": "Volt Typhoon targets US critical infrastructure with living-off-the-land techniques",
            "categories": [
                "Volt Typhoon"
            ]
        }
    ],
    "mitre": []
};