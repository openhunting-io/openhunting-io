const rule = {
    "id": "e8849e9a-ee8a-49b7-bbd9-0bd0bda8a6ca",
    "info": {
        "name": "Rules Detect CryptoLocker",
        "author": "Openhunting",
        "date": "2021-09-14",
        "modified": "2022-10-20 05:13:44",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for CryptoLocker",
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
                        "2996c535d6bc32f9363fb8f4b68548f47d5d54f4af5011b0f34083b5a894516c",
                        "dca30184f7d26505407363fb0cbc66f8a64abab97405c159bdc518a23cb291c2",
                        "4651d46328666fc64e80865dd29bc3af07db58df270a94b98cc3ddfc3aaf59e5",
                        "32016cf36c5e99a6c8fba8fd4ffad8b5f301cac55439ae73fec5db799ac341ab",
                        "dfdf48403506835206467e72952fc59fa3fb3c9dabc36090e82979e0b3a624c7",
                        "2bf361eb8b8ae57d7da109faa8a6ebf7039c3ec432e2e627b5e89b52b6919fc1",
                        "a2481f0e6e6ba5262846a3c9919fc3f0",
                        "b2a29f36d9a7948576dd585298670875542da6eb91ba3873ec72d3a9c86edee7",
                        "9e8bbc3cd87e16335a700fee228e9fa3ed6f67209b0297f5997c50097b7f8386",
                        "b51f47e14c1c008e40daeaa223daa815b60f8008911ecfacca4aa8f0f5ec747e",
                        "41e1da703899d4c55111e36750af19ddc0ab50de94907703031c0fe0c8c33d4c",
                        "0ab795074e75a90975dd30d5e2b2331e87b65c17f2bdf2b796b83dccaf524019",
                        "70b785e5cb5b2e61c0f5da4a71ab0bbd14d9a0849387f037e0d75cc1ffe0a082"
                    ]
                }
            ]
        }
    ]
};