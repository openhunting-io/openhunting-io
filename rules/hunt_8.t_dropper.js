const rule = {
    "id": "154fe33f-38c2-444f-9c48-b06be758fdc9",
    "info": {
        "name": "Rules Detect 8.t Dropper",
        "author": "Openhunting",
        "date": "2023-04-05",
        "modified": "2022-12-01 18:11:47",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for 8.t Dropper",
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
                        "f2779c63373e33fdbd001f336df36b01b0360cd6787c1cd29a6524cc7bcf1ffb",
                        "ca7f297dc04acad2fab04d5dc2de9475aed4186805f6c237c10b8f56b384cf30",
                        "7a7e519f82af8091b9ddd14e765357e8900522d422606aefda949270b9bf1a04",
                        "ba2c89192643f05e64f49b5cb3513a6a5bbfa719225af3b72c83587b8b774e8d"
                    ]
                }
            ]
        }
    ]
};