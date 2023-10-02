const rule = {
    "id": "271b6081-5860-4a23-8499-b362b53dc91e",
    "info": {
        "name": "Rules Detect Griffon",
        "author": "Openhunting",
        "date": "2022-12-29",
        "modified": "2021-09-14 13:11:48",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Griffon",
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
                        "caa7667bfdbcb04ceb9d81df93fe805dfe4ac8a04b9dd3eaab7b5f7c87c4fc9c",
                        "f1680aa55c88220bcf83e24d89628cc9"
                    ]
                }
            ]
        }
    ]
};