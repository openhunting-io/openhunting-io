var threatdata = {
    "name": "Allanite",
    "alias": "Allanite, Palmetto Fusion",
    "category": "APT",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "actor": "Allanite",
        "names": [
            {
                "name": "Allanite",
                "name-giver": "Dragos"
            },
            {
                "name": "Palmetto Fusion",
                "name-giver": "DHS"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2017",
        "description": "(Dragos) Allanite accesses business and industrial control (ICS) networks, conducts reconnaissance, and gathers intelligence in United States and United Kingdom electric utility sectors. Dragos assesses with moderate confidence that Allanite operators continue to maintain ICS network access to: (1) understand the operational environment necessary to develop disruptive capabilities, (2) have ready access from which to disrupt electric utilities.\n\nAllanite uses email phishing campaigns and compromised websites called watering holes to steal credentials and gain access to target networks, including collecting and distributing screenshots of industrial control systems. Allanite operations limit themselves to information gathering and have not demonstrated any disruptive or damaging capabilities.\n\nAllanite conducts malware-less operations primarily leveraging legitimate and available tools in the Windows operating system.",
        "observed-sectors": [
            "Energy"
        ],
        "observed-countries": [
            "UK",
            "USA"
        ],
        "tools": [
            "Inveigh",
            "PsExec",
            "SecreetsDump",
            "THC Hydra",
            "Powershell scripts"
        ],
        "information": [
            "https://dragos.com/resource/allanite/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/groups/G1000/"
        ],
        "uuid": "3f52e219-e79f-44e8-81b3-3e36441fd20b",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "allanite",
    "analysis": null,
    "articles": [],
    "mitre": []
};