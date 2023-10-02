var threatdata = {
    "name": "Cadet Blizzard",
    "alias": "Cadet Blizzard, DEV-0586",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-22",
    "all_data": {
        "actor": "Cadet Blizzard",
        "names": [
            {
                "name": "Cadet Blizzard",
                "name-giver": "Microsoft"
            },
            {
                "name": "DEV-0586",
                "name-giver": "Microsoft"
            }
        ],
        "country": [
            "Russia"
        ],
        "sponsor": "State-sponsored, GRU",
        "motivation": [
            "Information theft and espionage",
            "Sabotage and destruction"
        ],
        "first-seen": "2020",
        "description": "(Microsoft) Microsoft assesses that Cadet Blizzard operations are associated with the Russian General Staff Main Intelligence Directorate (GRU) but are separate from other known and more established GRU-affiliated groups such as Forest Blizzard ({{Sofacy, APT 28, Fancy Bear, Sednit}}) and Seashell Blizzard ({{Sandworm Team, Iron Viking, Voodoo Bear}}). While Microsoft constantly tracks a number of activity groups with varying degrees of Russian government affiliation, the emergence of a novel GRU affiliated actor, particularly one which has conducted destructive cyber operations likely supporting broader military objectives in Ukraine, is a notable development in the Russian cyber threat landscape. A month before Russia invaded Ukraine, Cadet Blizzard foreshadowed future destructive activity when it created and deployed WhisperGate, a destructive capability that wipes Master Boot Records (MBRs), against Ukrainian government organizations. Cadet Blizzard is also linked to the defacements of several Ukrainian organization websites, as well as multiple operations, including the hack-and-leak forum known as \u201cFree Civilian\u201d.\n\nMicrosoft has tracked Cadet Blizzard since the deployment of WhisperGate in January 2022. We assess that they have been operational in some capacity since at least 2020 and continue to perform network operations through the present. Operationally consistent with the remit and assessed objectives of GRU-led operations throughout Russia\u2019s invasion of Ukraine, Cadet Blizzard has engaged in focused destructive attacks, espionage, and information operations in regionally significant areas. Cadet Blizzard\u2019s operations, though comparatively less prolific in both scale and scope to more established threat actors such as Seashell Blizzard, are structured to deliver impact and frequently run the risk of hampering continuity of network operations and exposing sensitive information through targeted hack-and-leak operations. Primary targeted sectors include government organizations and information technology providers in Ukraine, although organizations in Europe and Latin America have also been targeted.",
        "observed-sectors": [
            "Government",
            "IT",
            "Law enforcement",
            "NGOs"
        ],
        "observed-countries": [
            "Ukraine",
            "Europe, Central Asia and Latin America"
        ],
        "tools": [
            "GO Simple Tunnel",
            "Impacket",
            "netcat",
            "P0wnyshell",
            "reGeorg",
            "WhisperGate",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2022-01",
                "activity": "Operation \u201cBleeding Bear\u201d\nDestructive malware targeting Ukrainian organizations\nhttps://www.microsoft.com/security/blog/2022/01/15/destructive-malware-targeting-ukrainian-organizations/"
            }
        ],
        "information": [
            "https://www.microsoft.com/en-us/security/blog/2023/06/14/cadet-blizzard-emerges-as-a-novel-and-distinct-russian-threat-actor/"
        ],
        "uuid": "4f64a76f-0650-49dd-9386-d7813916463a",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cadet_blizzard",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/ruinousursa/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Ruinous Ursa",
            "categories": [
                "WhisperGate",
                "DEV-0586"
            ]
        },
        {
            "data_url": "https://msrc-blog.microsoft.com/2022/02/28/analysis-resources-cyber-threat-activity-ukraine/",
            "date": "2022-02-28",
            "organization": "Microsoft",
            "author": "MSRC Team",
            "title": "Cyber threat activity in Ukraine: analysis and resources",
            "categories": [
                "CaddyWiper",
                "DesertBlade",
                "DoubleZero",
                "HermeticWiper",
                "INDUSTROYER2",
                "IsaacWiper",
                "PartyTicket",
                "WhisperGate",
                "DEV-0586"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/01/15/destructive-malware-targeting-ukrainian-organizations/",
            "date": "2022-01-15",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Destructive malware targeting Ukrainian organizations (DEV-0586)",
            "categories": [
                "WhisperGate",
                "DEV-0586"
            ]
        }
    ],
    "mitre": []
};