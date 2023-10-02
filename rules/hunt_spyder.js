const rule = {
    "id": "dc5f98a6-2f76-4d55-8858-dfff18653b72",
    "info": {
        "name": "Rules Detect Spyder",
        "author": "Openhunting",
        "date": "2023-08-07",
        "modified": "2023-09-02 23:48:09",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Spyder",
        "tags": [
            "fragtor",
            "Spyder",
            "Trojan",
            "Fragtor",
            "ViriBack",
            "trojan"
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
                        "e00609f98a5ce391934710a1a47f748bb063ae939555e1cb491c4e5cff69fa97",
                        "09d605c20a1de79592e839c6d78e5d3f"
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
                        "plainboardssixty.com",
                        "cdn.radar.game",
                        "radar.game",
                        "libreofficeupdates.com"
                    ]
                }
            ]
        }
    ]
};