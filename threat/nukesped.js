var threatdata = {
    "name": "NukeSped",
    "alias": "NukeSped",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "NukeSped",
        "names": [
            {
                "name": "NukeSped"
            }
        ],
        "description": "(Fortinet) We have reverse-engineered the logic of the RAT and found many classical RAT features:\n\n\u2022 Iterate files in a folder\n\u2022 Create a process as another user\n\u2022 Iterate processes and modules\n\u2022 Terminate a process\n\u2022 Create a process\n\u2022 Write a file\n\u2022 Read a file\n\u2022 Connect to a remote host\n\u2022 Move a file<br >\u2022 Retrieve and launch additional payloads from the internet\n\u2022 Get information about installed disks, including the disk type and the amount of free space on the disk\n\u2022 Get the current directory\n\u2022 Change to a different directory\n\u2022 Remove itself and artifacts associated with it from the infected system",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/deep-analysis-nukesped-rat.html"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:nukesped"
        ],
        "uuid": "c3cd0b9b-69d9-4e2d-9e56-b856dd8b48a9",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nukesped",
    "analysis": null,
    "articles": [],
    "mitre": []
};