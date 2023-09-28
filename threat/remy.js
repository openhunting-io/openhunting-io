var threatdata = {
    "name": "Remy",
    "alias": "Remy, Remy RAT, WINDSHIELD",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Remy",
        "names": [
            {
                "name": "Remy"
            },
            {
                "name": "Remy RAT"
            },
            {
                "name": "WINDSHIELD"
            }
        ],
        "description": "(Cylance) Arriving as an obfuscated PowerShell script built using the MSFvenom psh-reflection payload, the Remy DLL payload is ultimately unpacked, injected into memory, and executed via a Veil shellcode payload.\n\nThe Remy DLL shares code with Backdoor.Win32.Denis (Kaspersky), and appears to be related to the \u201cWINDSHIELD\u201d malware (described in the FireEye APT32 report).",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.cylance.com/content/dam/cylance-web/en-us/resources/knowledge-center/resource-library/reports/SpyRATsofOceanLotusMalwareWhitePaper.pdf",
            "https://threatvector.cylance.com/en_us/home/report-oceanlotus-apt-group-leveraging-steganography.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.remy"
        ],
        "uuid": "5f4763dc-2637-4fd7-8387-29de883b56ba",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "remy",
    "analysis": null
};