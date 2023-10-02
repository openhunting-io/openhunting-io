const rule = {
    "id": "a57d6227-48e2-454a-9067-935a547bbe40",
    "info": {
        "name": "Rules Detect Diavol",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2021-12-29 05:59:45",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Diavol",
        "tags": [
            "Ransomware",
            "Diavol"
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
                        "e0c0e663bf44c9820b049f73f2910843ede20fd3e6cd0c9a22cbd2a48e1a228a"
                    ]
                }
            ]
        }
    ]
};