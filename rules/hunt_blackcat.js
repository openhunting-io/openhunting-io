const rule = {
    "id": "36988a99-121e-4425-885c-3eac729589c2",
    "info": {
        "name": "Rules Detect BlackCat",
        "author": "Openhunting",
        "date": "2023-09-12",
        "modified": "2022-05-10 22:56:56",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BlackCat",
        "tags": [
            "Windows",
            "Ransomware",
            "BlackCat",
            "linux"
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
                        "bd337d4e83ab1c2cacb43e4569f977d188f1bb7c7a077026304bf186d49d4117",
                        "4e18f9293a6a72d5d42dad179b532407f45663098f959ea552ae43dbb9725cbf",
                        "28d7e6fe31dc00f82cb032ba29aad6429837ba5efb83c2ce4d31d565896e1169",
                        "f8c08d00ff6e8c6adb1a93cd133b19302d0b651afd73ccb54e3b6ac6c60d99c6",
                        "13828b390d5f58b002e808c2c4f02fdd920e236cc8015480fa33b6c1a9300e31",
                        "5bdc0fb5cfbd42de726aacc40eddca034b5fa4afcc88ddfb40a3d9ae18672898",
                        "59868f4b346bd401e067380cac69080709c86e06fae219bfb5bc17605a71ab3f",
                        "f7a038f9b91c40e9d67f4168997d7d8c12c2d27cd9e36c413dd021796a24e083",
                        "9802a1e8fb425ac3a7c0a7fca5a17cfcb7f3f5f0962deb29e3982f0bece95e26",
                        "38834b796ed025563774167716a477e9217d45e47def20facb027325f2a790d1",
                        "3a08e3bfec2db5dbece359ac9662e65361a8625a0122e68b56cd5ef3aedf8ce1",
                        "f837f1cd60e9941aa60f7be50a8f2aaaac380f560db8ee001408f35c1b7a97cb",
                        "658e07739ad0137bceb910a351ce3fe4913f6fcc3f63e6ff2eb726e45f29e582",
                        "2cf54942e8cf0ef6296deaa7975618dadff0c32535295d3f0d5f577552229ffc",
                        "c8b3b67ea4d7625f8b37ba59eed5c9406b3ef04b7a19b97e5dd5dab1bd59f283",
                        "c3e5d4e62ae4eca2bfca22f8f3c8cbec12757f78107e91e85404611548e06e40",
                        "c5ad3534e1c939661b71f56144d19ff36e9ea365fdb47e4f8e2d267c39376486",
                        "731adcf2d7fb61a8335e23dbee2436249e5d5753977ec465754c6b699e9bf161",
                        "1af1ca666e48afc933e2eda0ae1d6e88ebd23d27c54fd1d882161fd8c70b678e",
                        "173c4085c23080d9fb19280cc507d28d",
                        "7154fdb1ef9044da59fcfdbdd1ed9abc1a594cacb41a0aeddb5cd9fdaeea5ea8",
                        "5121f08cf8614a65d7a86c2f462c0694c132e2877a7f54ab7fcefd7ee5235a42",
                        "3d7cf20ca6476e14e0a026f9bdd8ff1f26995cdc5854c3adb41a6135ef11ba83",
                        "cefea76dfdbb48cfe1a3db2c8df34e898e29bec9b2c13e79ef40655c637833ae",
                        "b588823eb5c65f36d067d496881d9c704d3ba57100c273656a56a43215f35442",
                        "0c6f444c6940a3688ffc6f8b9d5774c032e3551ebbccb64e4280ae7fc1fac479",
                        "15b57c1b68cd6ce3c161042e0f3be9f32d78151fe95461eedc59a79fc222c7ed",
                        "056d28621dca8990caf159f8e14069a2343b48146473d2ac586ca9a51dfbbba7",
                        "7e363b5f1ba373782261713fa99e8bbc35ddda97e48799c4eb28f17989da8d8e",
                        "e7060538ee4b48b0b975c8928c617f218703dab7aa7814ce97481596f2a78556",
                        "7b2449bb8be1b37a9d580c2592a67a759a3116fe640041d0f36dc93ca3db4487",
                        "cda37b13d1fdee1b4262b5a6146a35d8fc88fa572e55437a47a950037cc65d40",
                        "9f6876762614e407d0ee6005f165dd4bbd12cb21986abc4a3a5c7dc6271fcdc3",
                        "722f1c1527b2c788746fec4dd1af70b0c703644336909735f8f23f6ef265784b"
                    ]
                }
            ]
        }
    ]
};