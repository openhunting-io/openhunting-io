var threatdata = {
    "name": "PowerShower",
    "alias": "PowerShower",
    "category": "Malware",
    "type": "Reconnaissance, Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "PowerShower",
        "names": [
            {
                "name": "PowerShower"
            }
        ],
        "description": "(Palo Alto) POWERSHOWER acts as an initial reconnaissance foothold and is almost certainly used to download and execute a secondary payload with a more complete set of features. By only using this simple backdoor to establish a foothold, the attacker can hold back their most sophisticated and complex malware for later stages, making them less likely to be detected.\n\n In a nutshell, POWERSHOWER allows the attacker to:\n\n\u2022 Fingerprint the machine, and upload this information to the initial C&C.\n\u2022 Clean up a significant amount of forensic evidence from the dropper process, as we detail below.\n\u2022 Run a secondary payload, if the attacker decides the target machine is sufficiently interesting (based on analysis of the system data sent from the first beacon)",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-inception-attackers-target-europe-year-old-office-vulnerability/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0441/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powershower"
        ],
        "uuid": "8f922508-3fd3-4018-997b-a7a9075af23e",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "powershower",
    "analysis": null
};