const rule = {
    "id": "c7854c08-33ba-43a5-8f58-0c7d6fd44057",
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