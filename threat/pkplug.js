var threatdata = {
    "name": "PKPLUG",
    "alias": "PKPLUG",
    "category": "APT",
    "type": "-",
    "modified": "2021-08-09",
    "all_data": {
        "actor": "PKPLUG",
        "names": [
            {
                "name": "PKPLUG",
                "name-giver": "Palo Alto"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Palo Alto) For three years, Unit 42 has tracked a set of cyber espionage attack campaigns across Asia, which used a mix of publicly available and custom malware. Unit 42 created the moniker \u201cPKPLUG\u201d for the threat actor group, or groups, behind these and other documented attacks referenced later in this report. We say group or groups as our current visibility doesn\u2019t allow us to determine with high confidence if this is the work of one group, or more than one group which uses the same tools and has the same tasking. The name comes from the tactic of delivering PlugX malware inside ZIP archive files as part of a DLL side-loading package. The ZIP file format contains the ASCII magic-bytes \u201cPK\u201d in its header, hence PKPLUG.",
        "observed-sectors": [
            "Government",
            "Healthcare"
        ],
        "observed-countries": [
            "China",
            "Indonesia",
            "Mongolia",
            "Myanmar",
            "Taiwan",
            "Tibet",
            "Vietnam"
        ],
        "tools": [
            "9002 RAT",
            "Farseer",
            "HenBox",
            "PlugX",
            "Poison Ivy",
            "THOR",
            "Zupdax"
        ],
        "operations": [
            {
                "date": "2021-03",
                "activity": "THOR: Previously Unseen PlugX Variant Deployed During Microsoft Exchange Server Attacks by PKPLUG Group\nhttps://unit42.paloaltonetworks.com/thor-plugx-variant/"
            }
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/pkplug_chinese_cyber_espionage_group_attacking_asia/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=pkplug"
        ],
        "uuid": "3fb2534f-f233-4247-a653-5fc809212951",
        "last-card-change": "2021-08-09",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pkplug",
    "analysis": null,
    "articles": [],
    "mitre": []
};