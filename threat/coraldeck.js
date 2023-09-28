var threatdata = {
    "name": "CORALDECK",
    "alias": "CORALDECK",
    "category": "Malware",
    "type": "Exfiltration, Dropper",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "CORALDECK",
        "names": [
            {
                "name": "CORALDECK"
            }
        ],
        "description": "(FireEye) CORALDECK is an exfiltration tool that searches for specified files and exfiltrates them in password protected archives using hardcoded HTTP POST headers. CORALDECK has been observed dropping and using Winrar to exfiltrate data in password protected RAR files as well as WinImage and zip archives.",
        "category": "Malware",
        "type": [
            "Exfiltration",
            "Dropper"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0212/"
        ],
        "uuid": "bb2028cf-4303-4bc2-8dc7-3499f3d2f705",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "coraldeck",
    "analysis": null
};