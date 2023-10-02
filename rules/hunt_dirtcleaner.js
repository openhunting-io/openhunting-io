const rule = {
    "id": "1274e8df-5901-4069-9c62-98bb0cc0a221",
    "info": {
        "name": "Rules Detect DIRTCLEANER",
        "author": "Openhunting",
        "date": "2021-10-27",
        "modified": "2023-08-11 00:00:38",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for DIRTCLEANER",
        "tags": [
            "GCleaner"
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
                        "gcc-prtnrs.top",
                        "cleaner-partners.top",
                        "g-localdevice.biz",
                        "gc-prtnrs.top",
                        "ggc-partners.in",
                        "ads-postback.biz",
                        "web-stat.biz",
                        "ad-postback.biz",
                        "appwebstat.biz",
                        "gcl-page.biz",
                        "gcl-gb.biz",
                        "postbackstat.biz",
                        "ggc-partners.top",
                        "ggc-partners.info",
                        "gcl-partners.in"
                    ]
                }
            ]
        }
    ]
};