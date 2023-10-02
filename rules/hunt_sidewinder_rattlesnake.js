const rule = {
    "id": "db25e812-6409-4ead-b499-b44f0db1ed7a",
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
            "13-213-47-21",
            "apt",
            "sidewinder",
            "SideWinder"
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
                        "57d45be439544c8ce5e1c3ff68aa84c1192e56420e476d94202443870a29536c",
                        "5356a1193252b4fb2265fc8ac10327a1",
                        "d0ca92ce29456931ad14aed48c3ea93f",
                        "6af17fdbf7974c1a9a08a38b755d363b",
                        "5efddbdcf40ba01f1571140bad72dccb",
                        "ca93cb9833a0470de495681ce6dcf292",
                        "ce2afa9c4b48aee2293744416a7811ec",
                        "1315985f576b536a62b2c52beecfbcfa",
                        "40708e92422f0d1eb05d1e0e1732cd0d",
                        "f6a9ce5cb29328475e2a874cd1b575ff",
                        "976160013031ba3e0cb8d26d334c8f21",
                        "3363ed14f070fc651515cd066b2c36aa",
                        "c42dcdb934f3f8d5c242079b5d9f9938",
                        "356f30ba570428a6d0896e3960de8b70",
                        "6c8ac90f16acfc0ca871f74d47ac3856",
                        "69226ff2e9a95a2dcd489679af1d8a63",
                        "056d1dc3032d04d7638c02056d5146c9",
                        "7e461f6366681c5ae24920a31c3cfec6",
                        "267870d2a7deec193cf6c2b6926f0451",
                        "f77ff47ccf59cf1fe7f4dc8c31abbd64",
                        "e9f6517f670c338544a35e1f622b4488",
                        "7631b61fb5a7217c4d746dfc9acdf8db",
                        "ee9866864d026e695bf49231a43b521f"
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
                        "mtss.bol-south.org",
                        "csd-govpk.servehttp.com",
                        "finance-govpk.servehttp.com",
                        "ntc-govpk.serveftp.com",
                        "ntc-govpk.servehttp.com",
                        "vpn-ptclnetpk.servehttp.com",
                        "ptcl-gov.info",
                        "mofagov.live",
                        "mofagov.info"
                    ]
                }
            ]
        }
    ]
};