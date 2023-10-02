const rule = {
    "id": "c373a6f3-a343-4073-8b2b-9cc87840b07c",
    "info": {
        "name": "Rules Detect Sality",
        "author": "Openhunting",
        "date": "2022-07-14",
        "modified": "2021-09-26 20:30:29",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Sality",
        "tags": [
            "sality"
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
                        "f66117bb7aff5ea3fb4241a5477edebc1f84844376b56b3c6ba6f5de7004d4c7",
                        "4ee41060b8f1c5679b10bebb8378f353ea62eb38ab27f041e3727dd8cb06b19d",
                        "1e21f175cd66fe91b5ff770b1e74c61b2df04c13044388e36dfd3d0768c9e6e5",
                        "33f8b063fa9eef4d6e83779a5f93c4ca9b8597c4e328ff0f789cbde0d72d24d0",
                        "bdb1b6c2151038f1023b551d26ef4eab2d5321066d3352d5357b8bee301b67b0",
                        "2eb74de9b3c016d03b96378e59557a6524918745c9c48df2a5a7ea5ca92d375a",
                        "f3dda8f48606c448d22a7b407f61757605acc028d3deddd0ad8c1e2742efcf86",
                        "513c36f4a21c7ebf125fe36b98fb2c065898b9f543a6e8dbbf3f9a041c5b86fa",
                        "cea7a79f688fe24df1c614bc6fdcb281c056f882307e2b9f7841dca56ae923f0",
                        "85e576aba88b0b3805d924e344feff58c27992d02675ba86126b88cb790afb7c",
                        "4444e65841972ce81243575afa168ebbe54e7cc2db6aa34d996f53a6b2d99043"
                    ]
                }
            ]
        }
    ]
};