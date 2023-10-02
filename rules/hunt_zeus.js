const rule = {
    "id": "6c81205f-52d6-405a-b1a7-179c223f1cb1",
    "info": {
        "name": "Rules Detect Zeus",
        "author": "Openhunting",
        "date": "2023-03-14",
        "modified": "2021-10-07 10:27:34",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Zeus",
        "tags": [
            "Zeus",
            "zeus"
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
                        "a6512b5271bc6e383ec6e3141ebb91b92a8a76a5f1d532ee6e185a253dc20830",
                        "26cf98ecf5aded7945370a870d158447895b2bdd2a4b1e34c082130e4119be44",
                        "043f535f68678652c50ff49cf03ee4b63fdbd03b76c732adfe83074335fbbb3b",
                        "ea30c0dc58f71a1720990021fda92d1e",
                        "5aff39b9d705974f87f58b420416b5fc",
                        "a6f3e35760bc2848cd258b786c1fd247"
                    ]
                }
            ]
        }
    ]
};