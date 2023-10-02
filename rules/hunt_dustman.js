const rule = {
    "id": "7a1c9a16-29a5-4add-ace1-9ff389a250f0",
    "info": {
        "name": "Rules Detect Dustman",
        "author": "Openhunting",
        "date": "2021-04-24",
        "modified": "2021-04-28 16:02:43",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Dustman",
        "tags": [
            "dustman"
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
                        "a9397eb9e95087db7e03239c689776d56c1450d685568564acd90e1532c78882"
                    ]
                }
            ]
        }
    ]
};