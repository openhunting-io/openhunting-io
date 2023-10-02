var threatdata = {
    "name": "BarbWire",
    "alias": "BarbWire",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Keylogger, Downloader, Exfiltration",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "BarbWire",
        "names": [
            {
                "name": "BarbWire"
            }
        ],
        "description": "(Cybereason) The backdoor component of APT-C-23\u2019s operation is a very capable piece of malware, and it is obvious that a lot of effort was put into hiding its capabilities using a custom base64 algorithm. Its main goal is to fully compromise the victim machine, gaining access to their most sensitive data. The backdoor\u2019s main capabilities include:\n\u2022 Persistence\n\u2022 OS Reconnaissance\n\u2022 Data encryption\n\u2022 Keylogging\n\u2022 Screen capturing\n\u2022 Audio recording\n\u2022 Download additional malware\n\u2022 Local/external drives and directory enumeration\n\u2022 Steal specific file types and exfiltrate data",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Keylogger",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-bearded-barbie-apt-c-23-campaign-targeting-israeli-officials"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.barbwire"
        ],
        "uuid": "97f960d1-4a27-4432-ad27-a21a572ef9ce",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "barbwire",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cybereason.com/blog/operation-bearded-barbie-apt-c-23-campaign-targeting-israeli-officials",
            "date": "2022-04-06",
            "organization": "Cybereason",
            "author": "Cybereason Nocturnus",
            "title": "Operation Bearded Barbie: APT-C-23 Campaign Targeting Israeli Officials",
            "categories": [
                "Barb(ie) Downloader",
                "BarbWire"
            ]
        }
    ],
    "mitre": []
};