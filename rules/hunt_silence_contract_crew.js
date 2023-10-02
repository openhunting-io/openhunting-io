const rule = {
    "id": "7896dcc2-ab6d-4c06-8c1d-a9039193cdf0",
    "info": {
        "name": "Rules Detect Silence, Contract Crew",
        "author": "Openhunting",
        "date": "2023-07-06",
        "modified": "2023-09-11 07:20:20",
        "severity": "High",
        "category": "APT",
        "description": "Rules IOC for Silence, Contract Crew",
        "tags": [
            "truebot",
            "Silence",
            "TrueBot"
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
                        "dremmfyttrred.com",
                        "ber6vjyb.com",
                        "62.204.41.69",
                        "62.204.41.69",
                        "62.204.41.69",
                        "nefosferta.com",
                        "files-gate.com",
                        "nitutdra.com",
                        "dragonetzone.com",
                        "midnigthwaall.com",
                        "romidonionhhgtt.com",
                        "revisionnumeer.com",
                        "rprotecruuio.com",
                        "blocksdeer.com",
                        "essadonio.com",
                        "listofword.com",
                        "cdn-backdl.com",
                        "nomoresense.com",
                        "ronoliffuion.com",
                        "bluespiredice.com",
                        "dremmfyttrred.com",
                        "ber6vjyb.com",
                        "droogggdhfhf.com",
                        "46.161.40.128",
                        "45.182.189.71",
                        "46.161.40.92",
                        "45.182.189.118",
                        "45.182.189.91",
                        "45.182.189.120",
                        "45.182.189.119",
                        "92.118.36.210",
                        "45.182.189.200",
                        "193.29.13.157",
                        "88.214.27.100",
                        "179.60.150.120",
                        "45.182.189.103",
                        "45.182.189.103",
                        "92.118.36.252"
                    ]
                }
            ]
        }
    ]
};