var threatdata = {
    "name": "Crutch",
    "alias": "Crutch",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Crutch",
        "names": [
            {
                "name": "Crutch"
            }
        ],
        "description": "(ESET) We were able to capture some of the commands sent by the operators to several Crutch v3 instances, which is helpful to understand the goal of the operation. The operators were mainly doing reconnaissance, lateral movement and espionage.\nThe main malicious activity is the staging, compression and exfiltration of documents and various files, as shown in Figure 1. These are commands manually executed by the operators, thus not showing the automated collection of documents by the drive monitor component described in a later section.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/12/02/turla-crutch-keeping-back-door-open/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0538/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.crutch"
        ],
        "uuid": "f1fccfe7-45d8-4a18-ac92-ef5aca3809a7",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "crutch",
    "analysis": null
};