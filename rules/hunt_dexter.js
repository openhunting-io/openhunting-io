const rule = {
    "id": "45a17210-9777-446f-938d-0274b783ce4a",
    "info": {
        "name": "Rules Detect Dexter",
        "author": "Openhunting",
        "date": "2020-05-25",
        "modified": "2021-08-16 12:09:56",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Dexter",
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
                        "4eabb1adc035f035e010c0d0d259c683e18193f509946652ed8aa7c5d92b6a92",
                        "e41fb7878c89cc728005f3c82f7ee8c14ce27edcf4e307ddd8691f62dd5e6726"
                    ]
                }
            ]
        }
    ]
};