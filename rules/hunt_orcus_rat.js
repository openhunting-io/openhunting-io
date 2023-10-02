const rule = {
    "id": "2298ad1e-6cb8-4021-b09d-e9d96e2c7600",
    "info": {
        "name": "Rules Detect Orcus RAT",
        "author": "Openhunting",
        "date": "2023-02-15",
        "modified": "2023-09-22 05:58:19",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Orcus RAT",
        "tags": [
            "RAT",
            "OrcusRAT",
            "orcus"
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
                        "9e8275b30324d42e998d3cf2d666e666465b3c48fb66ab0de2cf890c6552e8f7",
                        "a9fe52010982ccd3628a5a882c019556b361c3fa7c29cb8052ff66f02bd28490",
                        "a22f48f8311869ea019de57004372b3ce4da2757ac5ede342368b0bc381fe857",
                        "0b0b33ac7db4c1d33b44265f722c064189a19f2a0381cc877301a1aba7b02910",
                        "3e40414d3d75b88373027c33bbe22e90a6ef7fdf7c98b8b6e8a8e51b4b781a56",
                        "4bc2d84d15ae45ccbb03aa55b17d1a03fdf2f55efe3540d7e1762d4b58a538c9",
                        "e29f4bf53c18db917e9b29daa1d2b1efb442a37c41d2c8bcd7840f3f9db2534f",
                        "dd3df410ec256d46fb3a3a5e5d5a62d7ba48175926c58d8100d422c62540a395",
                        "28027fae1edf2324a8165c9f1a82273f958385c4947e8750a6bdcf29ec2e4906",
                        "c961c19943e6b90918070b48e4570d83605820f9ea198bc6078e8cbf84b434d2",
                        "b5be399ecc2efefe63a79f5f36350aaa27250726b1760560845f1aa5f8aeee78",
                        "0c3a1e4598b32bfcdf0226964c07af858c56e22c112fc4719f833738733958b8",
                        "5fe03c646fcc7a7b912b2266fe54c645f203d22bfae171bf5f089e9934711dbb",
                        "3e4ef7b0224b4601e28838ec6319634315025d824c1404a2a9e114139dbdbe21",
                        "aaee81218658e32ec29047708178447f479f7e57298f6a1416696a291ac18f25",
                        "f79e81bc04c4450e167307625f7a181aaf8884f71cc6b53dbe4adfaa767e2b54",
                        "53943895601cbc79561cb30c9957715400d82a255d97ce36fe1b383bf3c240da",
                        "ef629de5eaab1c1627d208934f991ebe171d997d44b14bfec7a40e1a9fa89acb",
                        "424eb42fa596ee2e87a3498979a56ceea933c35d61604d87a0acab76b6baed93",
                        "a3455a1192f8d9cdaeb56087f2884d9a3d13da199e8bc4f4ce96245bb831c4fe",
                        "d20fc189729837d2f7b39f976fdcc66318b7c5358001d13057b46c32d36a5260",
                        "83ee132d4ae14e9a0963af00c2a937d70da63d696bfbbcbc4e1b5d976beeb4a7",
                        "a28549c1130d3ac6360078c6223be51046fd6ef442644975ff735a9a36c8922f"
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
                        "93.108.180.0",
                        "147.185.221.229",
                        "193.138.195.211",
                        "193.32.219.170",
                        "95.217.123.5",
                        "122.186.23.243",
                        "116.122.117.97",
                        "84.201.188.187",
                        "84.21.172.55",
                        "13.53.37.168",
                        "sellygg.tk",
                        "94.103.87.238",
                        "realitygaming.us",
                        "107.182.128.18",
                        "176.58.61.217",
                        "18.117.142.49",
                        "209.25.141.180",
                        "67.242.2.35",
                        "115.79.199.11",
                        "94.60.124.63",
                        "3.133.207.110",
                        "79.134.225.92",
                        "89.190.226.232",
                        "135.148.12.151",
                        "blog.sellygg.tk",
                        "sudorat.top",
                        "194.110.112.45",
                        "217.114.43.29",
                        "136.144.41.171",
                        "216.250.97.121",
                        "162.244.82.93",
                        "185.163.47.163",
                        "61.69.245.176",
                        "20.89.177.186",
                        "134.122.84.252",
                        "ab.realitygaming.us",
                        "199.195.253.181",
                        "3.143.239.116",
                        "193.111.248.239",
                        "86.105.9.67",
                        "178.154.244.45",
                        "74.201.28.60",
                        "209.25.142.180",
                        "209.25.140.180",
                        "98.229.214.124",
                        "109.171.5.62",
                        "185.175.56.98",
                        "45.146.253.103",
                        "80.80.130.104",
                        "3.137.146.78",
                        "209.25.141.212",
                        "3.129.187.220",
                        "179.61.251.127"
                    ]
                }
            ]
        }
    ]
};