const rule = {
    "id": "849001f0-df07-427f-9803-b422cbf9fd10",
    "info": {
        "name": "Rules Detect Vadokrist",
        "author": "Openhunting",
        "date": "2021-06-03",
        "modified": "2022-08-08 09:03:11",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Vadokrist",
        "tags": [],
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
                        "26cccd15142a1a8217598ece4fb28a1f70886b353c45e2b49f58c1bce963023b",
                        "ba6ceed0ce77372e2f67672206158a685e5af68cfc3ef1cd96b89b3732a2a8fa"
                    ]
                }
            ]
        }
    ]
};