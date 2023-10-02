var threatdata = {
    "name": "Wassonite",
    "alias": "Wassonite",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-15",
    "all_data": {
        "actor": "Wassonite",
        "names": [
            {
                "name": "Wassonite",
                "name-giver": "Dragos"
            }
        ],
        "country": [
            "North Korea"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(Dragos) Dragos identified the WASSONITE activity group following a malware intrusion at the Kudankulam Nuclear Power Plant (KKNPP) nuclear facility in India. After further investigation, Dragos observed WASSONITE tools and behaviors targeting multiple industrial control system (ICS) entities including electric generation, nuclear energy, manufacturing, and organizations involved in space-centric research. WASSONITE has been active since at least 2018.\n\nWASSONITE targeting focuses on Asian entities, largely in India, as well as possibly Japan and South Korea. At this time, WASSONITE does not appear to have an ICS-specific disruptive or destructive capability. All the activity represents Stage 1 ICS kill-chain: access operations within IT networks.\n\nWASSONITE operations rely on deploying DTrack malware for remote access to victim machines, capturing credentials via Mimikatz and publicly available tools, and utilizing system tools to transfer files and move laterally within the enterprise system. Researchers first disclosed DTrack in late September 2019, and identified the tool targeting Indian financial institutions and research centers. DTrack is loosely connected to an earlier observed malware family, ATMDTrack, used for robbing ATM machines.\n\nThird-party security firms associate DTrack and its related malware to the {{Lazarus Group, Hidden Cobra, Labyrinth Chollima}}. Dragos also associates the activity group {{Covellite}} to Lazarus Group. However, while COVELLITE is also linked to broader Lazarus activity, this group leveraged substantially different capabilities and infrastructure to pursue a target set that does not overlap with observed WASSONITE activity.",
        "observed-sectors": [
            "Energy",
            "Oil and gas",
            "Manufacturing",
            "Research"
        ],
        "observed-countries": [
            "India",
            "Japan",
            "South Korea"
        ],
        "tools": [
            "Dtrack",
            "Mimikatz"
        ],
        "operations": [
            {
                "date": "2019-10",
                "activity": "Breach of the Kudankulam Nuclear Power Plant\nhttps://www.zdnet.com/article/confirmed-north-korean-malware-found-on-indian-nuclear-plants-network/"
            }
        ],
        "information": [
            "https://dragos.com/resource/wassonite/"
        ],
        "uuid": "7ff50a06-a05b-4871-b2d5-1a49dcab389b",
        "last-card-change": "2020-04-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wassonite",
    "analysis": null,
    "articles": [],
    "mitre": []
};