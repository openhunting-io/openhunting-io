var threatdata = {
    "name": "SILENTUPLOADER",
    "alias": "SILENTUPLOADER",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "SILENTUPLOADER",
        "names": [
            {
                "name": "SILENTUPLOADER"
            }
        ],
        "description": "(Mandiant) SILENTUPLOADER is an uploader written in MSIL that is dropped by {{DOSTEALER}} and is designed to work specifically in tandem with it. It checks for files in a specified folder every 30 seconds and uploads them to a remote server.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "https://www.mandiant.com/media/17826"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.silentuploader"
        ],
        "uuid": "b266acee-e395-4283-ba2a-e9351886cc7f",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "silentuploader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/media/17826",
            "date": "2022-09-07",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "APT42: Crooked Charms, Cons  and Compromises",
            "categories": [
                "PINEFLOWER",
                "VINETHORN",
                "VBREVSHELL",
                "BROKEYOLK",
                "DOSTEALER",
                "GHAMBAR",
                "SILENTUPLOADER"
            ]
        }
    ],
    "mitre": []
};