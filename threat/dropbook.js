var threatdata = {
    "name": "DropBook",
    "alias": "DropBook",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "DropBook",
        "names": [
            {
                "name": "DropBook"
            }
        ],
        "description": "(Cybereason) The newly discovered DropBook backdoor used fake Facebook accounts or Simplenote for command and control (C2) operations, and both {{SharpStage}} and DropBook implement a Dropbox client in order to exfiltrate the data stolen from their targets to a cloud storage, as well as for storing their espionage tools.\n\nDropBook can download and execute an extended arsenal of payloads stored on Dropbox, such as: {{MoleNet}} Downloader, {{QuasarRAT}}, SharpStage Backdoor, an updated version of DropBook, and ProcessExplorer, a legitimate tool by Microsoft to monitor Windows processes, often used by attackers for reconnaissance and to dump credentials.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.cybereason.com/hubfs/dam/collateral/reports/Molerats-in-the-Cloud-New-Malware-Arsenal-Abuses-Cloud-Platforms-in-Middle-East-Espionage-Campaign.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0547/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dropbook"
        ],
        "uuid": "7ff05b70-6c5f-4aa1-b95e-1c29508fded7",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dropbook",
    "analysis": null
};