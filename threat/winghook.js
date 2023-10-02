var threatdata = {
    "name": "WINGHOOK",
    "alias": "WINGHOOK",
    "category": "Malware",
    "type": "Credential stealer",
    "modified": "2022-04-03",
    "all_data": {
        "tool": "WINGHOOK",
        "names": [
            {
                "name": "WINGHOOK"
            }
        ],
        "description": "(Mandiant) WINGHOOK is a keylogger for Linux and Unix based operating systems. It is packaged as a shared library (SO file) that hooks the read and fgets functions, which are two common functions used for processing user input. The captured data is stored in an encoded format in the directory /var/tmp/ with a filename that begins with .zmanDw.",
        "category": "Malware",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://www.mandiant.com/resources/unc2891-overview"
        ],
        "uuid": "397ad497-a122-48d7-895a-35cdd285f102",
        "last-card-change": "2022-04-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "winghook",
    "analysis": null,
    "articles": [],
    "mitre": []
};