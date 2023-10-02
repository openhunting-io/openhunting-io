var threatdata = {
    "name": "sctrls",
    "alias": "sctrls",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "sctrls",
        "names": [
            {
                "name": "sctrls"
            }
        ],
        "description": "(Trend Micro) The sctrls backdoor has these functions:\n\u2022 Compute the unique identifier (hash) from the username and computer name.\n\u2022 Register a new user on the C&C server; this registration creates a new folder with hash name (<some_name>.php?b=<hash>).\n\u2022 Read contents of the folder with the hash name from the C&C server, then download and run executables from that particular folder.\n\nThe malware operators can then upload binaries of shells or file stealers that will be executed into the respective folders. The directories of their C&C server were unsecured, and we were able to access all their registered victims (hashes) - numbering around 50 - as well as the other backdoors and file stealers in their employ.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/research-deciphering-confucius-cyberespionage-operations.pdf"
        ],
        "uuid": "f169f172-39e0-4605-bc70-6a4fd090f0b6",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sctrls",
    "analysis": null,
    "articles": [],
    "mitre": []
};