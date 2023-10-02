const rule = {
    "id": "e6fab621-38d4-4ba4-82a6-e767d2d0b20c",
    "info": {
        "name": "Rules Detect Retefe",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2022-01-21 19:00:41",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Retefe",
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
                        "c76482802a369e6230d198123ceba32a801c6300fc7af306872a5a642adc445a",
                        "f44b80767dd5d095a338f4a2ef6f80358b43764b4ec00827922bd7e4b19ecc83",
                        "fd0e2aab29278cdbb6fc77665adcbf334040b7a0a3bbda315b943009e84618a0",
                        "8e679f87ba503f3dfad96266ca79de7bfe3092dc6a58c0fe0438f7d4b19f0bbd"
                    ]
                }
            ]
        }
    ]
};