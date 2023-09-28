var threatdata = {
    "name": "Brambul",
    "alias": "Brambul, SierraBravo, SORRYBRUTE",
    "category": "Malware",
    "type": "Worm, Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Brambul",
        "names": [
            {
                "name": "Brambul"
            },
            {
                "name": "SierraBravo"
            },
            {
                "name": "SORRYBRUTE"
            }
        ],
        "description": "(US-CERT) Brambul malware is a malicious Windows 32-bit SMB worm that functions as a service dynamic link library file or a portable executable file often dropped and installed onto victims\u2019 networks by dropper malware. When executed, the malware attempts to establish contact with victim systems and IP addresses on victims\u2019 local subnets. If successful, the application attempts to gain unauthorized access via the SMB protocol (ports 139 and 445) by launching brute-force password attacks using a list of embedded passwords. Additionally, the malware generates random IP addresses for further attacks.",
        "category": "Malware",
        "type": [
            "Worm",
            "Backdoor"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA18-149A",
            "https://www.us-cert.gov/ncas/analysis-reports/AR18-149A",
            "https://www.acalvio.com/lateral-movement-technique-employed-by-hidden-cobra/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.brambul"
        ],
        "uuid": "7ae563c4-131b-46c0-a0e1-747a1dd55270",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "brambul",
    "analysis": null
};