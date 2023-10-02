const rule = {
    "id": "f73dbd21-9e21-4aa8-86f4-b4a5c2c9d031",
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
                        "gcl-page.biz",
                        "gcl-page.biz",
                        "gcl-partners.in",
                        "gcl-partners.in",
                        "appwebstat.biz",
                        "appwebstat.biz",
                        "web-stat.biz",
                        "ad-postback.biz",
                        "ad-postback.biz",
                        "ads-postback.biz",
                        "postbackstat.biz",
                        "postbackstat.biz",
                        "g-localdevice.biz",
                        "gcl-gb.biz",
                        "ggc-partners.info",
                        "ggc-partners.info",
                        "ggc-partners.info",
                        "cleaner-partners.top",
                        "ggc-partners.in",
                        "ggc-partners.top",
                        "ggc-partners.top",
                        "gcc-prtnrs.top",
                        "gcc-prtnrs.top",
                        "gc-prtnrs.top",
                        "gc-prtnrs.top",
                        "gc-prtnrs.top",
                        "cleaner-partners.top"
                    ]
                }
            ]
        }
    ]
};