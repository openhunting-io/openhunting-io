const rule = {
    "id": "1f35267c-37ec-42d7-a08b-0aada7142ac7",
    "info": {
        "name": "Rules Detect Parallax RAT",
        "author": "Openhunting",
        "date": "2023-02-28",
        "modified": "2022-02-06 20:15:37",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Parallax RAT",
        "tags": [
            "ParallaxRAT",
            "RAT",
            "parallax"
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
                        "58a6a07940b4e3f69415097f67f8062938290677d0c9632f29a8facddd2de46f",
                        "d5cd720a149085f9604493ac08b665fbbd9df1e09df1600c2f4c4696630558fb",
                        "babd7c7528de9097db3a25174dcd7ce4b68ba3efe6e000d3496c8ffd8dd11d33",
                        "c11c33fe7f6d417c0fa032f715e9f7f0f6c2c6276e9cfe9d9c64ba7f6cc3acdf",
                        "8107ebe6b7406e813404166e75b77b3909f4036e665cf906135ca59092fec214",
                        "f4a48f22b86d2f6d02f91a39c1bbb72bea98ab0495be8c3153392c8c8d44eb34",
                        "912a6837c72e4684fdf08acb25a0f3d96a1764db24458ee8993b6d1864f1d0db",
                        "be7d9fdf7f4b40476a1b5310653015620b72488eb29ea33fd48c2aba6d83547a",
                        "a0047cf317557e9c0bcd28762fb2f9ec6a016d1a07ce7944cf1d931af7a4e2bc",
                        "1abe6247ae7b3f813281feb19c7415755ad45bbd5004c256c0e91cf4bb59f156",
                        "80c10ee5f21f92f89cbc293a59d2fd4c01c7958aacad15642558db700943fa22",
                        "927389b08b7d80346c9e1afcde0202aceac98283492eb493b73785ec22c5677b",
                        "614812173a116f9fbf2ca956993d71b5883f825d17602f873042d79cc79e76f8",
                        "d62d2888067b3dab7d93cba362202c4a17c086c531949b071f9758866b4c9d6b",
                        "a0c84cfe467ef4034df6fae0ed2d10bb7454715e8cd1bb8118da1e686f06454d",
                        "c56b2d3dee4a920070a792a31e8b007a35c02d67d429a37e43b3e8b3dc44faa7",
                        "6a63e9a5615fe995d09574f1d935299a0eef32da31d0d0d41988c77216b916ca",
                        "4ea90ef6db17221b9e74f9bd390f65e9877eac59a39fccd900dccad7d986a1ad",
                        "c50b72e5e434a4b14d5db4de2c3dfe34eff3561c8902290ab57798b84e5305fa",
                        "30b6a34230e15d9941fd4d37fe392c3306c8ef4c1de59c5c87d80068514565df",
                        "c6fa242b88805720daf185db905717ff44f23086bb89f3409f100d4f80d95d3f",
                        "abba8d0990bb52ecc9c282ca8e98e83076fbd5d86afe2efecdbc236a5c610de8",
                        "a7fab8c1fc7ffc5002452f5a783f7a43b263ad302fab8d9fdd412610122f77ce",
                        "7764deac5e57af30b369e616b5904163147abbbd960c420b1f2b2eec055238fb",
                        "a88998b7b275d866ea3aec24b45488299384a2d8e0f2db60447f26bd550856ce",
                        "8c6e507be687fd725cf66f3a4d405a43fc575a275024a5ed164e90b873fe447c",
                        "5d5684ccef3ce3b6e92405f73794796e131d3cb1424d757828c3fb62f70f6227",
                        "0444d0bab0ffad641edae84a28cdf4070dfeada30c51d8b204dec98c40154b5b",
                        "762d0dd4af7de2c8518562a993bb4203e0bbf01ef58a23df5fb12e37191e21c7",
                        "ccc04dc8264252deee19e690583b72d4c056b93bcdb492665877cc60973ac18a",
                        "222c327eef40050baf9e05f80d39f53bf7955bd84bf212887405a665060c369f"
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
                        "inpsaslimutari.com",
                        "5.2.68.94",
                        "51.195.57.236",
                        "51.195.57.236",
                        "51.195.57.229"
                    ]
                }
            ]
        }
    ]
};