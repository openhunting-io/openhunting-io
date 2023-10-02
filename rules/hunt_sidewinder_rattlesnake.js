const rule = {
    "id": "db60cc2b-d362-4a07-b1a7-f5b3f986bd72",
    "info": {
        "name": "Rules Detect SideWinder, Rattlesnake",
        "author": "Openhunting",
        "date": "2023-06-21",
        "modified": "2023-08-15 19:15:38",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for SideWinder, Rattlesnake",
        "tags": [
            "APT",
            "apt",
            "SideWinder",
            "sidewinder",
            "13-213-47-21"
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
                        "7e461f6366681c5ae24920a31c3cfec6",
                        "056d1dc3032d04d7638c02056d5146c9",
                        "d0ca92ce29456931ad14aed48c3ea93f",
                        "40708e92422f0d1eb05d1e0e1732cd0d",
                        "69226ff2e9a95a2dcd489679af1d8a63",
                        "5356a1193252b4fb2265fc8ac10327a1",
                        "7631b61fb5a7217c4d746dfc9acdf8db",
                        "57d45be439544c8ce5e1c3ff68aa84c1192e56420e476d94202443870a29536c",
                        "356f30ba570428a6d0896e3960de8b70",
                        "f6a9ce5cb29328475e2a874cd1b575ff",
                        "976160013031ba3e0cb8d26d334c8f21",
                        "f77ff47ccf59cf1fe7f4dc8c31abbd64",
                        "6c8ac90f16acfc0ca871f74d47ac3856",
                        "5efddbdcf40ba01f1571140bad72dccb",
                        "ca93cb9833a0470de495681ce6dcf292",
                        "1315985f576b536a62b2c52beecfbcfa",
                        "c42dcdb934f3f8d5c242079b5d9f9938",
                        "ee9866864d026e695bf49231a43b521f",
                        "267870d2a7deec193cf6c2b6926f0451",
                        "ce2afa9c4b48aee2293744416a7811ec",
                        "3363ed14f070fc651515cd066b2c36aa",
                        "e9f6517f670c338544a35e1f622b4488",
                        "6af17fdbf7974c1a9a08a38b755d363b"
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
                        "ptcl-gov.info",
                        "mtss.bol-south.org",
                        "mofagov.info",
                        "ntc-govpk.serveftp.com",
                        "vpn-ptclnetpk.servehttp.com",
                        "ntc-govpk.servehttp.com",
                        "finance-govpk.servehttp.com",
                        "csd-govpk.servehttp.com",
                        "mofagov.live"
                    ]
                }
            ]
        }
    ]
};