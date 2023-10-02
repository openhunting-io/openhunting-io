var threatdata = {
    "name": "TOUCHSHOT",
    "alias": "TOUCHSHOT",
    "category": "Malware",
    "type": "Info stealer",
    "modified": "2023-04-25",
    "all_data": {
        "tool": "TOUCHSHOT",
        "names": [
            {
                "name": "TOUCHSHOT"
            }
        ],
        "description": "(Mandiant) TOUCHSHOT takes screenshots of the system on which it is running and saves them to a file to be retrieved by the threat actor at a later time. TOUCHSHOT is configured to take a screenshot every three seconds, and then uses ZLIB to compress the images. The compressed data is then appended to a file that it creates and continues appending new screenshots to this file until the file reaches five megabytes in size, at which point it will create a new file with the same naming convention. TOUCHSHOT was seen embedded in the same instance of TOUCHSHIFT as {{TOUCHKEY}}.",
        "category": "Malware",
        "type": [
            "Info stealer"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/lightshow-north-korea-unc2970"
        ],
        "uuid": "cf42dea8-6652-4af4-9f06-859cc6551eaa",
        "last-card-change": "2023-04-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "touchshot",
    "analysis": null,
    "articles": [],
    "mitre": []
};