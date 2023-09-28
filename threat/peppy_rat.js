var threatdata = {
    "name": "Peppy RAT",
    "alias": "Peppy RAT, Peppy Trojan",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer, Downloader, Exfiltration",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Peppy RAT",
        "names": [
            {
                "name": "Peppy RAT"
            },
            {
                "name": "Peppy Trojan"
            }
        ],
        "description": "(Proofpoint) Peppy is a Python-based RAT with the majority of its appearances having similarities or definite overlap with MSIL/{{Crimson RAT}} appearances. Peppy communicates to its C&C over HTTP and utilizes SQLite for much of its internal functionality and tracking of exfiltrated files. The primary purpose of Peppy may be the automated exfiltration of potentially interesting files and keylogs. Once Peppy successfully communicates to its C&C, the keylogging and exfiltration of files using configurable search parameters begins. Files are exfiltrated using HTTP POST requests.\n\nIn addition to keylogging and the exfiltration of files, Peppy is also capable of accepting commands from its C&C to update itself, disable itself, exfiltrate a specific file, uninstall itself, execute a shell command, take screenshots, spawn a reverse shell, and download a remote file and execute it.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.proofpoint.com/sites/default/files/proofpoint-operation-transparent-tribe-threat-insight-en.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.peppy_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Peppy%20RAT"
        ],
        "uuid": "23a7f4a8-9826-47a8-a7e8-1c4da9f44ca6",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "peppy_rat",
    "analysis": null
};