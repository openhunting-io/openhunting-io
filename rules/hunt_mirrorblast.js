const rule = {
    "id": "47d98371-8ff6-4df7-86e7-d28acfb0065c",
    "info": {
        "name": "Rules Detect MirrorBlast",
        "author": "Openhunting",
        "date": "2021-12-28",
        "modified": "2021-11-17 00:04:13",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for MirrorBlast",
        "tags": [
            "TA505",
            "MirrorBlast"
        ],
        "references": []
    },
    "method": [
        {
            "query": "SELECT * FROM files_information",
            "column_master": "path",
            "signature": [
                {
                    "name": "hash",
                    "indicator": [
                        "d6c487b1fb3d31851921b343f3d131f7cb4c0469a60484037a6fa8cfbdc29dea"
                    ]
                }
            ]
        },
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "dzikics-my-sharepoint.com",
                        "cdn03664-dl-fileshare.com",
                        "cdn-8846-sharepoint-office.com",
                        "dzikic-my-sharepoint.com",
                        "menorukis.su",
                        "dropmefilesbox.com",
                        "diarromonico.com",
                        "cdnfilesdrop.com",
                        "cdn0341.us-dropbox.com",
                        "cdn9883.us-dropbox.com",
                        "feristoaul.com",
                        "cdn-g0962.int-onedrive.com",
                        "dzikic-my-sharepoint.com",
                        "cdn-8846-sharepoint-office.com",
                        "guerdiqurt.com",
                        "fidufagios.com",
                        "dzikics-my-sharepoint.com",
                        "cdn03664-dl-fileshare.com",
                        "185.176.220.198"
                    ]
                }
            ]
        }
    ]
};