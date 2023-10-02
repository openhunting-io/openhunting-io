const rule = {
    "id": "87f514d3-c880-4b7c-9b47-8d6ebc81b3bd",
    "info": {
        "name": "Rules Detect Xenomorph",
        "author": "Openhunting",
        "date": "2023-03-10",
        "modified": "2023-03-29 14:03:58",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Xenomorph",
        "tags": [
            "Xenomorph",
            "apk"
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
                        "team.mi1kyway.tech",
                        "t.me",
                        "bkp.had0.live",
                        "t.me",
                        "dedeperesere.xyz",
                        "vldeolan.com",
                        "cofi.hk"
                    ]
                }
            ]
        }
    ]
};