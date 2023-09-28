var threatdata = {
    "name": "OwaAuth",
    "alias": "OwaAuth, luckyowa",
    "category": "Malware",
    "type": "Backdoor, Credential stealer",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "OwaAuth",
        "names": [
            {
                "name": "OwaAuth"
            },
            {
                "name": "luckyowa"
            }
        ],
        "description": "(SecureWorks) A web shell and credential stealer deployed to Microsoft Exchange servers. It is installed as an ISAPI filter. Captured credentials are DES-encrypted using the password '12345678' and are written to the log.txt file in the root directory. Like the {{China Chopper}} web shell, the OwaAuth web shell requires a password. However, the OwaAuth web shell password contains the victim organization's name.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Credential stealer"
        ],
        "information": [
            "https://www.secureworks.com/research/threat-group-3390-targets-organizations-for-cyberespionage",
            "https://threatpost.com/targeted-attack-exposes-owa-weakness/114925/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0072/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.owaauth"
        ],
        "uuid": "0dd041d7-9044-4ec3-b5cc-485b6bf92f8f",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "owaauth",
    "analysis": null
};