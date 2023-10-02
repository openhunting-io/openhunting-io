const rule = {
    "id": "54f4162c-aa7d-41e2-bb16-f3d8d5ccc8ad",
    "info": {
        "name": "Rules Detect Mydoom",
        "author": "Openhunting",
        "date": "2021-04-24",
        "modified": "2021-09-03 13:45:33",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Mydoom",
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
                        "f2404d51758aff593e8405e3731390f650a15e1dcdbaa3b6969e7fd196784136",
                        "bc6062cbb58a6c337d1b14602bdcd90dc9cbf678ca8c6e0a90f5422bff601a57",
                        "0ead89a60b4d19bfca4a7d25391acf27e21a2e921eeb45327e1e23737f89a806",
                        "861525f3ad7e0efd744472f30b1c7b8f762c606ec91b5663bbf817f2814de2a6"
                    ]
                }
            ]
        }
    ]
};