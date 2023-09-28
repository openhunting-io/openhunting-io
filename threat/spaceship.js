var threatdata = {
    "name": "Spaceship",
    "alias": "Spaceship",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Spaceship",
        "names": [
            {
                "name": "Spaceship"
            }
        ],
        "description": "(FireEye) SPACESHIP searches for files with a specified set of file extensions and copies them to a removable drive. FireEye believes that SHIPSHAPE is used to copy SPACESHIP to a removable drive, which could be used to infect another victim computer, including an air-gapped computer. SPACESHIP is then used to steal documents from the air-gapped system, copying them to a removable drive inserted into the SPACESHIP-infected system.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2015/05/20081935/rpt-apt30.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0035/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.spaceship"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:spaceship"
        ],
        "uuid": "61a36a16-f4cb-4174-9151-7c5890c874b7",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "spaceship",
    "analysis": null
};