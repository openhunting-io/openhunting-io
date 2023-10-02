const rule = {
    "id": "90d3bc89-c427-42cb-b3d3-5b861499a171",
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
                        "82D841869E912A772413BB37F30307B0",
                        "2261dbc9977932cd8dac9bccd7aae8472cdbd8e588aa4f10b02c8a1c0a6051d1",
                        "905ea119ad8d3e54cd228c458a1b5681abc1f35df782977a23812ec4efa0288a"
                    ]
                }
            ]
        }
    ]
};