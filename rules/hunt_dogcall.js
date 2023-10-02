const rule = {
    "id": "2f2897c6-036b-4f85-996c-20f283872561",
    "info": {
        "name": "Rules Detect DOGCALL",
        "author": "Openhunting",
        "date": "2020-04-23",
        "modified": "2023-09-13 15:43:07",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for DOGCALL",
        "tags": [
            "APT37",
            "GOLDBACKDOOR",
            "APT",
            "RokRAT",
            "RokRat",
            "RAT"
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
                        "fd67ad03cc71d3397f962896365ed510",
                        "5f9e0afb3503d909984b3b30d038bdc5",
                        "487769a19f032e981f33023b2cb7fe10",
                        "8d7f38cbdca2fc4d8f6ea451398ca378",
                        "1011dc2d8450da88011b890ea81c9083",
                        "fbaab65888859d25437e8803a7139633",
                        "7095811df4cb1ee4135ce605af7f163f",
                        "74e3d84492845067a0da6cfa00c064eb",
                        "44ba46dfff78bc62a3b2619d308ca40c",
                        "71dbebb8a31ea3de0115851bb15fd2bc"
                    ]
                }
            ]
        }
    ]
};