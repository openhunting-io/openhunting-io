var threatdata = {
    "name": "DEADEYE",
    "alias": "DEADEYE",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "DEADEYE",
        "names": [
            {
                "name": "DEADEYE"
            }
        ],
        "description": "(FireEye) Tracking APT41 activities over the past months, we observed multiple samples that shared two unique features: the use of RC5 encryption which we don\u2019t encounter often, and a unique string \u201cf@Ukd!rCto R$.\u201d. We track these samples as DEADEYE.\n\nDEADEYE comes in multiple variants:\n\u2022 DEADEYE.DOWN has the capability to download additional payloads.\n\u2022 DEADEYE.APPEND has additional payloads appended to it.\n\u2022 DEADEYE.EXT loads payloads that are already present on the system.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/10/lowkey-hunting-for-the-missing-volume-serial-id.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1052"
        ],
        "uuid": "ef5ffed4-c004-4742-9648-679ad06b6f31",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "deadeye",
    "analysis": null
};