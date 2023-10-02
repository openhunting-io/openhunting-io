const rule = {
    "id": "f277a7c8-1e56-401c-a1aa-3bfeb8c5f311",
    "info": {
        "name": "Rules Detect FASTCash",
        "author": "Openhunting",
        "date": "2020-08-27",
        "modified": "2023-04-26 18:30:06",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for FASTCash",
        "tags": [
            "Amadey",
            "Cerberus",
            "Gozi",
            "ISFB",
            "Hancitor"
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
                        "fersite24.xyz",
                        "vastyrannouse.at",
                        "conlymorect.ru",
                        "france2021flplayer.site",
                        "spabyasiande.ru",
                        "173.234.25.78",
                        "speeduppercolatorl.at",
                        "spain2021flplayer.site",
                        "france2021flplayer.info",
                        "rebreaksstonehen.at"
                    ]
                }
            ]
        }
    ]
};