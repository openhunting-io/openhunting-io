const rule = {
    "id": "2aed161d-7672-45c8-a106-f6ecad34a69b",
    "info": {
        "name": "Rules Detect OceanLotus",
        "author": "Openhunting",
        "date": "2022-12-30",
        "modified": "2022-08-10 11:07:46",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for OceanLotus",
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
                        "09b9f43c8c70c9d1e2aded67a6c4b4e743e6e5886a25995abd40ad663fa07238",
                        "5b87ef34d174361f35b65c5ee684f1c3",
                        "88ea4a892b416cc67d4554a1aa1b7f76c2aa8c31bd3ef2c801f0456c16317cac",
                        "8128a63bab1a0e5802d9db94eb2ce551",
                        "943cb4b5ffb69926803d7f9c3dd1bc7c",
                        "8c3eb1bf5f4b150d29883a548be9e1922c1751409f78c49d1560d219390b5422",
                        "f8ccff73406a3b6acad964a6376b2ae9",
                        "204e1ad9eb40cdb8270dc9f4d5dfa0ab",
                        "9b4c57e61f4df3b546aedf58b2f299cf",
                        "2cac346547f90788e731189573828c53",
                        "eeafcce05f9b40cb1c95b36dc9ee5eb109d16e289c6f9bae5fb85772a756d76a",
                        "ed47f3141fd6ac45a8fd8c535ae8814c6cb65bbb86741956ee9a950e74fd11dd",
                        "10246345345312321313253453547877",
                        "ec44a1e0f5af1c4bd3f308ff1b3fc879"
                    ]
                }
            ]
        }
    ]
};