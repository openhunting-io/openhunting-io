var threatdata = {
    "name": "KingOfHearts",
    "alias": "KingOfHearts",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2020-10-19",
    "all_data": {
        "tool": "KingOfHearts",
        "names": [
            {
                "name": "KingOfHearts"
            }
        ],
        "description": "(Kaspersky) In terms of capabilities, KingOfHearts offers nothing more than the basic features you would expect from a backdoor:\n\u2022 Arbitrary command execution\n\u2022 File system manipulation: listing drives and files, deleting, uploading and downloading data, etc.\n\u2022 Listing of running processes with the option to terminate any of them\n\u2022 Capturing screenshots using a custom standalone utility, described below\n\nRather than developing sophisticated features, the malware developers instead opted to include anti-debugging and virtualization detection routines. Communications with the C2 server take place over HTTP(S), implemented with the wsdlpull open source library. The backdoor looks for new orders every second by sending a heartbeat to the C2 (the \u201cHEART\u201d command, hence the name).",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://securelist.com/iamtheking-and-the-slothfulmedia-malware-family/99000/"
        ],
        "uuid": "c8d96d97-8458-4183-b778-4123781fdc06",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "kingofhearts",
    "analysis": null,
    "articles": [],
    "mitre": []
};