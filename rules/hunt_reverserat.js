const rule = {
    "id": "d7ddc2c7-8972-4e82-8297-71767db6478f",
    "info": {
        "name": "Rules Detect ReverseRAT",
        "author": "Openhunting",
        "date": "2023-02-16",
        "modified": "2023-02-01 08:36:07",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ReverseRAT",
        "tags": [
            "RAT",
            "ReverseRAT"
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
                        "0baa1d0cc20d80fa47eeb764292b9e98"
                    ]
                }
            ]
        },
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "185.174.102.54"
                    ]
                }
            ]
        }
    ]
};