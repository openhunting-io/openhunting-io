const rule = {
    "id": "129fee7e-d542-4686-985a-a10d1b5d3092",
    "info": {
        "name": "Rules Detect Konni",
        "author": "Openhunting",
        "date": "2022-09-06",
        "modified": "2023-09-14 13:56:56",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for Konni",
        "tags": [
            "KONNI",
            "APT37",
            "APT Konni",
            "APT",
            "Konni"
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
                        "168BCC063501D191D82AAA3A32741A12",
                        "2c2b800c2e20f5f3ae0332bf59f8df13",
                        "7e5cc47880bf2ccd244cf925093d2d16",
                        "d245f208d2a682f4d2c4464557973bf26dee756b251f162adb00b4074b4db3ac",
                        "FF4067B4865C9B49DA2F28AC12CA5C1A",
                        "0fa91325446fd53a3bc2b1dee29cfce3",
                        "705c8d431b4b8fa834491ff6975a0532",
                        "66fba06e965f9a6ea192db7f452ea9b6",
                        "3a3ce0a1794b548682167da692052dc2",
                        "B86C38AE5C24C55831D7F8CA3CBEB814",
                        "d668a24ca81e99750fc0808dec51f69e",
                        "bc3fb948dc956f79dbc7aac06442d6ef",
                        "c62a1fb8d29db14fc89fe67430f6bf30",
                        "32a60c3697e5d59e0cb83b9d829f256d",
                        "5225df55b1d1be397012e9823cd936766c6dcecdbd3dab79d07691db33ce81e8",
                        "b693e3d2f2cab550ad4f8c5722776498",
                        "24ef6a627d69f6bfe4b8325f74a8adba",
                        "19dc387bffdc0a22f640bd38af320db4",
                        "90468E4BDF61CF146030515ED3E15D81",
                        "a51912c138ae264b61c6edb492c355a6",
                        "8100d6d5524e040874bf8348384a2017",
                        "ce866ae254de4cabd60a95abcc52c315",
                        "9bb69ea4bc80f3f5fc628f794eb4a4024f8f3a4a748335e925adfb8f5b5e97fe",
                        "DB31A36E1684C568FA3529D60A59BA29",
                        "24949137f4a88bee8a11e0060a5eeb11",
                        "395b6399fea137783ffdac84f2d4c256",
                        "00e6e9ed4666623860686c123ed334f0"
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
                        "naver.files001.com",
                        "e9f0dkd.c1.biz",
                        "88.119.169.73",
                        "centhosting.net",
                        "ttzcloud.com",
                        "88.119.169.93",
                        "213.252.244.251",
                        "headsity.com",
                        "anrun.kr",
                        "overseeby.com",
                        "gg1593.c1.biz",
                        "88.119.169.96",
                        "ske9dhn.c1.biz",
                        "88.119.175.109",
                        "serviceset.net",
                        "naver.downfiles.org"
                    ]
                }
            ]
        }
    ]
};