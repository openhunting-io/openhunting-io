const rule = {
    "id": "37bd2b69-c34c-4773-a82c-0b50be88f373",
    "info": {
        "name": "Rules Detect Loda",
        "author": "Openhunting",
        "date": "2023-03-14",
        "modified": "2023-09-10 22:08:44",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Loda",
        "tags": [
            "PDF",
            "Loda",
            "LodaRAT"
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
                        "fae47086c34007307f6e2cd0c47a97d8",
                        "86a95def10c2b7a23b7762126f12203915d83d3d27263cc002f6602c7f01ddd2"
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
                        "195.123.221.123",
                        "presh147osidufhj.ddns.net",
                        "178.73.192.65",
                        "13.40.105.36",
                        "185.140.53.161",
                        "194.187.251.163",
                        "2.58.56.188",
                        "167.88.166.159",
                        "funmustsolutions.site",
                        "185.254.96.226",
                        "104.243.251.229",
                        "185.181.165.188",
                        "46.246.14.12",
                        "34.174.95.150",
                        "3.141.204.47",
                        "46.246.82.70",
                        "165.22.244.84",
                        "149.50.211.160",
                        "172.111.138.100",
                        "109.248.150.140",
                        "37.0.14.214",
                        "192.99.175.89",
                        "79.142.76.244",
                        "194.5.98.212",
                        "194.132.123.93",
                        "185.140.53.198",
                        "185.241.208.138",
                        "46.105.113.84"
                    ]
                }
            ]
        }
    ]
};