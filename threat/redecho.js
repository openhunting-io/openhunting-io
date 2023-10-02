var threatdata = {
    "name": "RedEcho",
    "alias": "RedEcho",
    "category": "APT",
    "type": "-",
    "modified": "2022-04-08",
    "all_data": {
        "actor": "RedEcho",
        "names": [
            {
                "name": "RedEcho",
                "name-giver": "Recorded Future"
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
        "description": "(Recorded Future) Since early 2020, Recorded Future\u2019s Insikt Group observed a large increase in suspected targeted intrusion activity against Indian organizations from Chinese state-sponsored groups. From mid-2020 onwards, Recorded Future\u2019s midpoint collection revealed a steep rise in the use of infrastructure tracked as AXIOMATICASYMPTOTE, which encompasses ShadowPad command and control (C2) servers, to target a large swathe of India\u2019s power sector. 10 distinct Indian power sector organizations, including 4 of the 5 Regional Load Despatch Centres (RLDC) responsible for operation of the power grid through balancing electricity supply and demand, have been identified as targets in a concerted campaign against India\u2019s critical infrastructure. Other targets identified included 2 Indian seaports.\n\nUsing a combination of proactive adversary infrastructure detections, domain analysis, and Recorded Future Network Traffic Analysis, we have determined that a subset of these AXIOMATICASYMPTOTE servers share some common infrastructure tactics, techniques, and procedures (TTPs) with several previously reported Chinese state-sponsored groups, including {{APT 41}} and {{Tonto Team, HartBeat, Karma Panda}}.\n\nDespite some overlaps with previous groups, Insikt Group does not currently believe there is enough evidence to firmly attribute the activity in this particular campaign to an existing public group and therefore continue to track it as a closely related but distinct activity group, RedEcho.\n\nAlso see {{TAG-38}}.",
        "observed-sectors": [
            "Energy",
            "Maritime and Shipbuilding"
        ],
        "observed-countries": [
            "India"
        ],
        "tools": [
            "ShadowPad Winnti"
        ],
        "information": [
            "https://go.recordedfuture.com/redecho-insikt-group-report",
            "https://therecord.media/redecho-group-parks-domains-after-public-exposure/"
        ],
        "uuid": "660f5bfa-d726-4935-a2be-7efa6ed8a366",
        "last-card-change": "2022-04-08",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "redecho",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://therecord.media/redecho-group-parks-domains-after-public-exposure/",
            "date": "2021-03-29",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "RedEcho group parks domains after public exposure",
            "categories": [
                "PlugX",
                "ShadowPad",
                "RedEcho"
            ]
        },
        {
            "data_url": "https://www.recordedfuture.com/redecho-targeting-indian-power-sector/",
            "date": "2021-02-28",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "China-linked Group RedEcho Targets the Indian Power Sector Amid Heightened Border Tensions",
            "categories": [
                "PlugX",
                "ShadowPad",
                "RedEcho"
            ]
        }
    ],
    "mitre": []
};