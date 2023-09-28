var threatdata = {
    "name": "Lazarus",
    "alias": "Lazarus, HIDDEN COBRA RAT/Worm",
    "category": "Malware",
    "type": "Backdoor, Worm, Downloader, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Lazarus",
        "names": [
            {
                "name": "Lazarus"
            },
            {
                "name": "HIDDEN COBRA RAT/Worm"
            }
        ],
        "description": "(US-CERT) This submission includes four unique files. The first is an installer for additional malware: a Remote Access Trojan (RAT) and a malicious Dynamic Link Library (DLL) that functions as a Server Message Block (SMB) Worm. The fourth file is another SMB worm in the form of a Windows 32-bit executable.\n\nBoth SMB worms attempt to spread locally and to random IP addresses on the public Internet by attempting to brute force vulnerable systems using a built-in list of common passwords. The RAT included with the SMB worm provides the attacker with the ability to deliver additional malware, run local commands, and exfiltrate data.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Worm",
            "Downloader",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/analysis-reports/AR18-149A"
        ],
        "uuid": "a9a4e1b1-d1fd-446f-9ea9-fa4a62f9a48a",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "lazarus",
    "analysis": null
};