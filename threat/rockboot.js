var threatdata = {
    "name": "ROCKBOOT",
    "alias": "ROCKBOOT",
    "category": "Malware",
    "type": "Loader",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "ROCKBOOT",
        "names": [
            {
                "name": "ROCKBOOT"
            }
        ],
        "description": "(FireEye) ROCKBOOT can access and write to the compromised system's hard disk drive beneath the operating system and file system to bypass the normal MBR boot sequence and execute malware prior to the host operating system being initialized. ROCKBOOT does not contain a malicious payload but relies on a secondary payload for malicious activities, which is specified at install time.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://paper.bobylive.com/Security/APT_Report/APT-41.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0112/"
        ],
        "uuid": "135aca6a-613b-46e9-92c3-b812c08643fb",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "rockboot",
    "analysis": null
};