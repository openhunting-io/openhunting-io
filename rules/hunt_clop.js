const rule = {
    "id": "eae69f0b-e222-44a8-9696-17c1795ca254",
    "info": {
        "name": "Rules Detect Clop",
        "author": "Openhunting",
        "date": "2023-09-05",
        "modified": "2023-03-23 18:12:56",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Clop",
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
                        "31e0439e6ef1dd29c0db6d96bac59446",
                        "afe7f87478ba6dfca15839f958e9b2ef",
                        "dd5cee48cdd586045c5fb059a1120e15",
                        "8bd774fbc6f846992abda69ddabc3fb7",
                        "4431b6302b7d5b1098a61469bdfca982",
                        "5e52f75d17c80dd104ce0da05fdfc362",
                        "f59d2a3c925f331aae7437dd7ac1a7c8"
                    ]
                }
            ]
        }
    ]
};