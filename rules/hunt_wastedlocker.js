const rule = {
    "id": "a38fcb2c-bf79-468a-be3b-5e9cd03fced1",
    "info": {
        "name": "Rules Detect WastedLocker",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2021-04-06 13:14:40",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for WastedLocker",
        "tags": [
            "wastedlocker"
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
                        "2261dbc9977932cd8dac9bccd7aae8472cdbd8e588aa4f10b02c8a1c0a6051d1",
                        "905ea119ad8d3e54cd228c458a1b5681abc1f35df782977a23812ec4efa0288a",
                        "82D841869E912A772413BB37F30307B0"
                    ]
                }
            ]
        }
    ]
};