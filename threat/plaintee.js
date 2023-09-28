var threatdata = {
    "name": "PLAINTEE",
    "alias": "PLAINTEE",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "PLAINTEE",
        "names": [
            {
                "name": "PLAINTEE"
            }
        ],
        "description": "(Palo Alto) PLAINTEE is unusual in that it uses a custom UDP protocol for its network communications.\n\nPLAINTEE will create a unique GUID via a call to CoCreateGuid() to be used as an identifier for the victim. The malware then proceeds to collect general system enumeration data about the infected machine and enters a loop where it will decode an embedded config blob and send an initial beacon to the C2 server.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-rancor-targeted-attacks-south-east-asia-using-plaintee-ddkong-malware-families/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0254/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.plaintee"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PLAINTEE"
        ],
        "uuid": "4e8876cc-a6e4-4e3b-8637-e77d6363a1ad",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "plaintee",
    "analysis": null
};