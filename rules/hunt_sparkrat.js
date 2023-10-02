const rule = {
    "id": "a72cbbe2-f175-4c3f-8ab6-2835a1eabd86",
    "info": {
        "name": "Rules Detect SparkRAT",
        "author": "Openhunting",
        "date": "2023-09-05",
        "modified": "2023-09-07 06:40:25",
        "severity": "High",
        "category": "Tools",
        "description": "Rules IOC for SparkRAT",
        "tags": [
            "APT36",
            "RAT",
            "APT",
            "TransparentTribe",
            "SparkRAT"
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
                        "8942c78d1c9abee21c58ba2444083b40",
                        "606115347958dca7ac3c206c643d5419",
                        "f7e2dac6a8edf639212bdd4af905ba2c",
                        "ca77027959864b4809487127321694f7",
                        "ebc8f74281e0481b9da06b8c0d421ba6",
                        "2e66189aa1b6fd345a9c13124844ebbc"
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
                        "6jxbmkpe.torontobotdns.com",
                        "43.140.252.169",
                        "130.185.238.251"
                    ]
                }
            ]
        }
    ]
};