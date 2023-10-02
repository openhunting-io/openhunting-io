const rule = {
    "id": "d21fe723-9823-4480-bb91-3478776e6b52",
    "info": {
        "name": "Rules Detect Spyder",
        "author": "Openhunting",
        "date": "2023-08-07",
        "modified": "2023-09-02 23:48:09",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Spyder",
        "tags": [
            "trojan",
            "Spyder",
            "fragtor",
            "ViriBack",
            "Fragtor",
            "Trojan"
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
                        "cdn.radar.game",
                        "plainboardssixty.com",
                        "libreofficeupdates.com",
                        "radar.game",
                        "cdn.radar.game"
                    ]
                }
            ]
        }
    ]
};