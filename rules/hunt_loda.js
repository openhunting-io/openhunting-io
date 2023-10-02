const rule = {
    "id": "4884f51c-c5bc-4500-b7b7-7f9144ca88ce",
    "info": {
        "name": "Rules Detect Loda",
        "author": "Openhunting",
        "date": "2023-03-14",
        "modified": "2023-09-10 22:08:44",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Loda",
        "tags": [
            "LodaRAT",
            "PDF",
            "Loda"
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
                        "86a95def10c2b7a23b7762126f12203915d83d3d27263cc002f6602c7f01ddd2",
                        "fae47086c34007307f6e2cd0c47a97d8"
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
                        "funmustsolutions.site",
                        "presh147osidufhj.ddns.net",
                        "37.0.14.214",
                        "167.88.166.159",
                        "172.111.138.100",
                        "149.50.211.160",
                        "104.243.251.229",
                        "185.241.208.138",
                        "2.58.56.188",
                        "46.105.113.84",
                        "46.246.14.12",
                        "185.254.96.226",
                        "3.141.204.47",
                        "185.181.165.188",
                        "165.22.244.84",
                        "13.40.105.36",
                        "194.5.98.212",
                        "46.246.82.70",
                        "109.248.150.140",
                        "178.73.192.65",
                        "34.174.95.150",
                        "194.5.98.212",
                        "194.132.123.93",
                        "192.99.175.89",
                        "185.140.53.198",
                        "185.140.53.161",
                        "79.142.76.244",
                        "195.123.221.123",
                        "79.142.76.244",
                        "194.5.98.212",
                        "194.187.251.163"
                    ]
                }
            ]
        }
    ]
};