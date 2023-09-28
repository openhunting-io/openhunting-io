var threatdata = {
    "name": "QUADAGENT",
    "alias": "QUADAGENT",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "QUADAGENT",
        "names": [
            {
                "name": "QUADAGENT"
            }
        ],
        "description": "(Palo Alto) Once the QUADAGENT payload has executed, it will use rdppath[.]com as the C2, first via HTTPS, then HTTP, then via DNS tunneling, each being used as a corresponding fallback channel if the former fails.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-oilrig-targets-technology-service-provider-government-agency-quadagent/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0269/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.quadagent"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:QUADAGENT"
        ],
        "uuid": "0951e35a-f91b-43e8-936a-e6b6f1439555",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "quadagent",
    "analysis": null
};