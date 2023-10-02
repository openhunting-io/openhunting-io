const rule = {
    "id": "e467a74f-b995-4044-abca-23347aaa1ca1",
    "info": {
        "name": "Rules Detect Xenomorph",
        "author": "Openhunting",
        "date": "2023-03-10",
        "modified": "2023-03-29 14:03:58",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Xenomorph",
        "tags": [
            "apk",
            "Xenomorph"
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
                        "dedeperesere.xyz",
                        "cofi.hk",
                        "t.me",
                        "bkp.had0.live",
                        "vldeolan.com"
                    ]
                }
            ]
        }
    ]
};