const rule = {
    "id": "da51defd-6ef6-46ff-be6f-af3173e17bb4",
    "info": {
        "name": "Rules Detect LockBit",
        "author": "Openhunting",
        "date": "2023-09-07",
        "modified": "2023-06-01 19:03:24",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for LockBit",
        "tags": [
            "ransomware",
            "Lockbit",
            "lockbit",
            "KOR",
            "spyware",
            "Ransomware",
            "LockBit",
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
                        "c6cf5fd8f71abaf5645b8423f404183b3dea180b69080f53b9678500bab6f0de",
                        "f64b643de2bc7c368b0a13d12c584a09",
                        "fe5101b50e92a923d74cc6f0f4225539",
                        "2daa5fa152b627f5ae23d2e8fa4e3e399d4899729ad32f184e32d59fd4dd20ef",
                        "5e7b650a6e0070bceed648681bff20fe",
                        "442f78f823663cea5da451a9710ece34dbbb29d61985381e6393f6ea1219466b",
                        "67b05e96f47db0447da53beddbf9aff265cd02562c12428d787fdab0278ded2e",
                        "0f7c10dfa562adf15f1f6078ecaee788",
                        "03cea7c49abe78863ae2644ac77c8efb",
                        "2831b37cf521848142e8a5d69515b065",
                        "588dfcd0e8ebc570eaba342d6d220528a722be93a46c2dfa2306a7b662b25845",
                        "a2db758f099d8a6dec5fd500d033ce2fcd89b58b53d938fdb9d9cba2d91dba01",
                        "008520e6248952bd3ac9e16f144b6243"
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
                        "185.202.2.121",
                        "52.237.96.13",
                        "54.38.212.197",
                        "167.172.239.68",
                        "tinneatonenessnabobical.com",
                        "82.202.247.81",
                        "82.102.20.219",
                        "51.15.18.180",
                        "104.237.255.254",
                        "62.76.112.121",
                        "51.89.134.150"
                    ]
                }
            ]
        }
    ]
};