const rule = {
    "id": "59a57e95-fe7f-45ad-8ef0-bd441af08b55",
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
                        "cdn-g0962.int-onedrive.com",
                        "cdnfilesdrop.com",
                        "feristoaul.com",
                        "dropmefilesbox.com",
                        "diarromonico.com",
                        "menorukis.su",
                        "cdn03664-dl-fileshare.com",
                        "185.176.220.198",
                        "cdn-8846-sharepoint-office.com",
                        "cdn9883.us-dropbox.com",
                        "fidufagios.com",
                        "guerdiqurt.com",
                        "dzikic-my-sharepoint.com",
                        "dzikics-my-sharepoint.com",
                        "cdn0341.us-dropbox.com"
                    ]
                }
            ]
        }
    ]
};