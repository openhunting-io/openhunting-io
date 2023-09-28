var threatdata = {
    "name": "COLDCAT",
    "alias": "COLDCAT",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2023-04-26",
    "all_data": {
        "tool": "COLDCAT",
        "names": [
            {
                "name": "COLDCAT"
            }
        ],
        "description": "(Mandiant) COLDCAT is a complex downloader. COLDCAT generates unique host identifier information, and beacons it to a C2 that is specified in a separate file via POST request with the data in the cookie header. After a brief handshake, the malware expects base64 encoded shellcode to execute in response.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/3cx-software-supply-chain-compromise"
        ],
        "uuid": "e00ea69d-da41-4489-9936-0e892e128cfc",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "coldcat",
    "analysis": null
};