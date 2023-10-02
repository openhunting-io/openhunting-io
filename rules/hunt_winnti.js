const rule = {
    "id": "5b29bc04-4210-42e5-b95b-d75dee0ad31e",
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
                        "0816e820c5380f3690a605ed21e16680",
                        "c99397d66e49e2def1b17f57cd0c5fb9",
                        "87100cb600d876bd022a4d93ce6305a0",
                        "a512950b07384ef98d9105da98755cc99a50e007d7976bfd1242b7c0dacec3cf"
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
                        "back.rooter.tk",
                        "mm.portomnail.com",
                        "161.129.64.124"
                    ]
                }
            ]
        }
    ]
};