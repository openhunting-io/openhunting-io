const rule = {
    "id": "dbf0b6fc-0634-41fb-8b61-ac5873de8c89",
    "info": {
        "name": "Rules Detect Numando",
        "author": "Openhunting",
        "date": "2021-12-28",
        "modified": "2022-03-02 17:29:53",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Numando",
        "tags": [
            "Metamorfo",
            "Numando"
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
                        "308d07fa6ea5a3e88f7bbdcbc5d7df86efb1c39c6736ab16059d88046c99933f",
                        "e116a603ceb5d60463f54ad79b31b9a04a21b2c8afea1fb72149db2805a4d4d8"
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
                        "52.142.190.146",
                        "loa2.kicks-ass.net",
                        "18.230.24.96",
                        "clientes.is-saved.org"
                    ]
                }
            ]
        }
    ]
};