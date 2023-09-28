var threatdata = {
    "name": "BEATDROP",
    "alias": "BEATDROP",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "BEATDROP",
        "names": [
            {
                "name": "BEATDROP"
            }
        ],
        "description": "(Mandiant) BEATDROP is a downloader written in C that makes use of Trello for C2. Once executed, BEATDROP first maps its own copy of `ntdll.dll` into memory for the purpose of executing shellcode in its own process. BEATDROP first creates a suspended thread with RtlCreateUserThread which points to NtCreateFile.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/tracking-apt29-phishing-campaigns"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.beatdrop"
        ],
        "uuid": "4ddb55da-9631-4eb5-972d-a1627d807f46",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "beatdrop",
    "analysis": null
};