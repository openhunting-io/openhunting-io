const rule = {
    "id": "13d31302-543f-4844-9d81-29c0d768eed2",
    "info": {
        "name": "Rules Detect BADNEWS",
        "author": "Openhunting",
        "date": "2021-05-16",
        "modified": "2022-07-18 07:03:41",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BADNEWS",
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
                        "5dc86d29f26cb9792a285533fdff8835"
                    ]
                }
            ]
        }
    ]
};