var threatdata = {
    "name": "BLUELIGHT",
    "alias": "BLUELIGHT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Downloader, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "BLUELIGHT",
        "names": [
            {
                "name": "BLUELIGHT"
            }
        ],
        "description": "(Volexity) The BLUELIGHT malware family uses different cloud providers to facilitate C2. This specific sample leveraged the Microsoft Graph API for its C2 operations. Upon start-up, BLUELIGHT performs an oauth2 token authentication using hard-coded parameters. Once the client is authenticated, BLUELIGHT creates a new subdirectory in the OneDrive appfolder and populates it with several subdirectories used by the C2 protocol.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.volexity.com/blog/2021/08/17/north-korean-apt-inkysquid-infects-victims-using-browser-exploits/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0657/"
        ],
        "uuid": "ed4fb152-2560-48d0-aea4-aee2e43ff69f",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "bluelight",
    "analysis": null
};