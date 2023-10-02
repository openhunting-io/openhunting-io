var threatdata = {
    "name": "CASHY200",
    "alias": "CASHY200",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "CASHY200",
        "names": [
            {
                "name": "CASHY200"
            }
        ],
        "description": "(Palo Alto) During our continued analysis of the xHunt campaign, we observed several domains with ties to the pasta58[.]com domain associated with known Sakabota command and control (C2) activity. In June 2019, we observed one of these overlapping domains, specifically, windows64x[.]com, being used as the C2 server for a new PowerShell based backdoor that we\u2019ve named CASHY200. This PowerShell backdoor used DNS tunneling to communicate with its C2 server, specifically by issuing DNS A queries to the actor controlled name server at the aforementioned domain. CASHY200 parses data provided by the C2 server within DNS answers to run commands on the system and send the results back to the C2 via DNS queries. In several samples, CASHY200 used randomly generated identifiers that are stored in the registry at HKCU\\Software\\Microsoft\\Cashe\\index and used the command value 200 to communicate with the C2 server. These details are the basis for the name CASHY200.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/more-xhunt-new-powershell-backdoor-blocked-through-dns-tunnel-detection/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.cashy200"
        ],
        "uuid": "41361ba3-bb89-463f-b716-f7428933462f",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cashy200",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/hunter-serpens/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Hunter Serpens",
            "categories": [
                "CASHY200",
                "Snugy",
                "COBALT KATANA"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/more-xhunt-new-powershell-backdoor-blocked-through-dns-tunnel-detection/",
            "date": "2019-10-10",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "xHunt Campaign: New PowerShell Backdoor Blocked Through DNS Tunnel Detection",
            "categories": [
                "CASHY200"
            ]
        }
    ],
    "mitre": []
};