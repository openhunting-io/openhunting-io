var threatdata = {
    "name": "Sibot",
    "alias": "Sibot",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Sibot",
        "names": [
            {
                "name": "Sibot"
            }
        ],
        "description": "(Microsoft) Sibot is a dual-purpose malware implemented in VBScript. It is designed to achieve persistence on the infected machine then download and execute a payload from a remote C2 server.  The VBScript file is given a name that impersonates legitimate Windows tasks and is either stored in the registry of the compromised system or in an obfuscated format on disk. The VBScript is then run via a scheduled task.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2021/03/04/goldmax-goldfinder-sibot-analyzing-nobelium-malware/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0589/"
        ],
        "uuid": "802e155d-1e1c-43b2-9ec9-a790dc43ac74",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sibot",
    "analysis": null
};