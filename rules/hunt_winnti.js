const rule = {
    "id": "92ec9eb9-89e1-4fc0-aa26-9bef1514e438",
    "info": {
        "name": "Rules Detect Winnti",
        "author": "Openhunting",
        "date": "2023-08-07",
        "modified": "2022-08-22 14:54:09",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Winnti",
        "tags": [],
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
                        "a512950b07384ef98d9105da98755cc99a50e007d7976bfd1242b7c0dacec3cf",
                        "0816e820c5380f3690a605ed21e16680",
                        "c99397d66e49e2def1b17f57cd0c5fb9",
                        "87100cb600d876bd022a4d93ce6305a0"
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
                        "mm.portomnail.com",
                        "back.rooter.tk",
                        "161.129.64.124"
                    ]
                }
            ]
        }
    ]
};