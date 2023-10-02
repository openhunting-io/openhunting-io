const rule = {
    "id": "88594f13-6ff7-40b9-a4bb-21e96e64b5e3",
    "info": {
        "name": "Rules Detect GandCrab",
        "author": "Openhunting",
        "date": "2021-04-25",
        "modified": "2022-11-10 12:45:07",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for GandCrab",
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
                        "2698041f10b462c28e3474f72d0cbcca82fefe2c6125866e61f30973b47ea412",
                        "e5033e178280fb731c19ee2903832f2e4bd61e1905f7b37630a3d91c6711c971",
                        "e5282fb73713b2f820fb5e8f756f9e7f07670b4a9c49ea1b2c6dabb43276c109",
                        "0301296543c91492d49847ae636857a4"
                    ]
                }
            ]
        }
    ]
};