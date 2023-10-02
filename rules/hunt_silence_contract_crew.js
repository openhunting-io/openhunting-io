const rule = {
    "id": "e6f8fd0c-81ac-4143-bb52-af54f76904ee",
    "info": {
        "name": "Rules Detect Silence, Contract Crew",
        "author": "Openhunting",
        "date": "2023-07-06",
        "modified": "2023-09-11 07:20:20",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for Silence, Contract Crew",
        "tags": [
            "TrueBot",
            "Silence",
            "truebot"
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
                        "c0f8aeeb2d11c6e751ee87c40ee609aceb1c1036706a5af0d3d78738b6cc4125",
                        "f52363b6cf282669e5fcc5537b5c3451"
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
                        "essadonio.com",
                        "droogggdhfhf.com",
                        "193.29.13.157",
                        "92.118.36.252",
                        "nomoresense.com",
                        "46.161.40.128",
                        "45.182.189.103",
                        "cdn-backdl.com",
                        "nitutdra.com",
                        "62.204.41.69",
                        "listofword.com",
                        "45.182.189.71",
                        "blocksdeer.com",
                        "revisionnumeer.com",
                        "45.182.189.118",
                        "ber6vjyb.com",
                        "45.182.189.200",
                        "45.182.189.91",
                        "dragonetzone.com",
                        "dremmfyttrred.com",
                        "romidonionhhgtt.com",
                        "92.118.36.210",
                        "88.214.27.100",
                        "nefosferta.com",
                        "rprotecruuio.com",
                        "midnigthwaall.com",
                        "bluespiredice.com",
                        "46.161.40.92",
                        "45.182.189.119",
                        "ronoliffuion.com",
                        "45.182.189.120",
                        "179.60.150.120",
                        "files-gate.com"
                    ]
                }
            ]
        }
    ]
};