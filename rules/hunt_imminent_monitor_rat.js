const rule = {
    "id": "8560afcb-4dbc-4437-85f7-d16c7d45c87f",
    "info": {
        "name": "Rules Detect Imminent Monitor RAT",
        "author": "Openhunting",
        "date": "2022-02-26",
        "modified": "2021-06-27 16:30:33",
        "severity": "High",
        "category": "Tools",
        "description": "Rules IOC for Imminent Monitor RAT",
        "tags": [
            "imminent"
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
                        "820e12af8f79fb8a108b80eea3bcf26dcc5d31c2c79072ee3cfceba1b22e355f",
                        "975cc3f3bd2bc6b0c3ba35733f0a3aee2b7772ab0410be735bf6f708cd379820",
                        "b1a76dd042b5b4c825472ae3d0ecbdbe9b73049c457814aaa54997e16a37a33f",
                        "efb143b7e8186a9761f9a88fbcbb8fb67e1dab6133961779060477ed6013e886",
                        "ad6d58c9d9a1a75e8c1e482d53df649427acf132ea82f3d205b78cdf0f5e438c",
                        "f2a489976001d04ddd83ba0cb2e49b0a523b6a6ccb25d0d8735f52796896be3c",
                        "2b21124d1683a0732c14190ec17c0aba4d33e3e00567607d8f7b7ed9754305b5",
                        "8067ef9073fdb633e0be1d590c03c0091b1801202ad070cf3872e8fda2a41639",
                        "6a2f2e1af097e8c7698ed3288f70da4a437811d17d4629bf3c2b7c37ce6b5f08",
                        "c130f3858f4692d6f6d4aa0c4cd2275fafc170131d0c9cb0fcfb455c6f3e211b",
                        "f74aa451fbd3135edc4874a628e4b2280561459c0933b9285ffad8a89e84d6bf",
                        "2c53417a6b4c4e4ba05f683ec402dbfca125384655e8fc6c529c696995860b81",
                        "acc69ae8822c6facb03542af4fcca5588408b41d351f7bc7988d462a7f8c60d2",
                        "9f505b6b238543bdf2f4dedea6e0d2d2b72f285ebcea82b76311878975857b62",
                        "8514ff9c2ada6af82ac8353ebafe4f9c924f3df51adafc416df5bde0726b3dfa",
                        "dc1f93435a858fed72eee637cb23ad024ba309ec030dfa53f2495cb16776ccfd",
                        "9e691357776fa8552f8bb78a89bccc3d4c92870708e303a07b8e157dd35f57ac",
                        "c54e959ac27aedd00ff31809ab211fcbaada77f402c8a1a67bef52b5e294d9f4",
                        "047c69ac4531bdf644f8a0a0a930958589930f86fdc4bfce992b76c9775fc906",
                        "b7ef9f5137720932895dbc0e1231e71451eace1e82f2baac3e208c969ec1e966"
                    ]
                }
            ]
        }
    ]
};