const rule = {
    "id": "03671a72-e880-4ae8-9241-0a50ce64b57a",
    "info": {
        "name": "Rules Detect FASTCash",
        "author": "Openhunting",
        "date": "2020-08-27",
        "modified": "2023-04-26 18:30:06",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for FASTCash",
        "tags": [
            "Cerberus",
            "Gozi",
            "Hancitor",
            "Amadey",
            "ISFB"
        ],
        "references": []
    },
    "method": [
        {
            "query": "select * from process_open_sockets",
            "column_master": "remote_access",
            "signature": [
                {
                    "name": "domain",
                    "indicator": [
                        "173.234.25.78",
                        "rebreaksstonehen.at",
                        "speeduppercolatorl.at",
                        "vastyrannouse.at",
                        "conlymorect.ru",
                        "spabyasiande.ru",
                        "france2021flplayer.info",
                        "france2021flplayer.site",
                        "spain2021flplayer.site",
                        "fersite24.xyz"
                    ]
                }
            ]
        }
    ]
};