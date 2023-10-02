const rule = {
    "id": "ceb813e9-0948-48f8-9029-cd27a011141c",
    "info": {
        "name": "Rules Detect Adwind",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2023-09-07 05:55:41",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Adwind",
        "tags": [
            "TUR",
            "adwind",
            "Adwind",
            "RAT",
            "geo"
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
                        "a6be5be2d16a24430c795faa7ab7cc7826ed24d6d4bc74ad33da5c2ed0c793d0",
                        "f5673f2290ad72c69b5efe4f1b96a76239b3286a536db8b2e26e9544274472a4",
                        "b4bb442b04053e01e444cd22081854f871f893fdd91ca197664b2499a76b25bb",
                        "86bc35cf8621fc75d1c5f8256899e91ff39304e14446b25f7dd34943fd497e70",
                        "c3ea3ac0e09ae046261d51bd21e71c8c",
                        "a7872e2925ebf6f9b7a1992721d94ea74c9ac7ca2c9f24d2228c290616752410",
                        "43affdaf791ae623b1bcafa5c1d9a293b778b178c8fd9801379e055b4f09eb75",
                        "2251baa4e2ad666c402aa52de5a42a9e87f284b0033cbf8ecb08e957bd54a9bf",
                        "948c559d4804d44f7585e2d05029c94b9f46b52c7e7c035f5289129c828533a1",
                        "9da575dd2d5b7c1e9bab8b51a16cde457b3371c6dcdb0537356cf1497fa868f6"
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
                        "43.226.229.92",
                        "185.106.123.201",
                        "107.182.129.86",
                        "89.117.74.176",
                        "37.0.14.215",
                        "202.55.132.51",
                        "194.180.48.197",
                        "185.140.53.137",
                        "185.19.85.175",
                        "141.101.134.39",
                        "23.26.248.208",
                        "79.134.225.10",
                        "139.28.37.109",
                        "194.5.98.52",
                        "79.134.225.69",
                        "185.222.57.238",
                        "109.206.243.106",
                        "23.105.131.204",
                        "79.134.225.77",
                        "45.74.38.17",
                        "141.101.134.51",
                        "185.244.26.223",
                        "109.248.144.177",
                        "79.110.62.95",
                        "194.5.98.5",
                        "107.175.101.209",
                        "185.222.58.110",
                        "rat19.duckdns.org",
                        "78.142.18.221",
                        "185.19.85.160",
                        "84.38.129.32",
                        "185.222.58.76",
                        "103.187.4.71",
                        "172.111.141.63",
                        "45.147.231.41",
                        "45.138.16.101",
                        "178.170.138.163",
                        "192.236.198.236",
                        "172.93.187.66",
                        "46.183.220.114",
                        "ianticrish.tk",
                        "66.154.111.3",
                        "201.212.118.175",
                        "185.222.58.242"
                    ]
                }
            ]
        }
    ]
};