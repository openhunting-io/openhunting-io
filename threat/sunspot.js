var threatdata = {
    "name": "SUNSPOT",
    "alias": "SUNSPOT",
    "category": "Malware",
    "type": "Rootkit",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SUNSPOT",
        "names": [
            {
                "name": "SUNSPOT"
            }
        ],
        "description": "(CrowdStrike) SUNSPOT is StellarParticle\u2019s malware used to insert the SUNBURST backdoor into software builds of the SolarWinds Orion IT management product.\nSUNSPOT monitors running processes for those involved in compilation of the Orion product and replaces one of the source files to include the SUNBURST backdoor code.\nSeveral safeguards were added to SUNSPOT to avoid the Orion builds from failing, potentially alerting developers to the adversary\u2019s presence.",
        "category": "Malware",
        "type": [
            "Rootkit"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/sunspot-malware-technical-analysis/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0562/"
        ],
        "uuid": "1d748959-f07e-49b8-acd5-ce46dbaee5d8",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sunspot",
    "analysis": null
};