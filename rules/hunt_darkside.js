const rule = {
    "id": "1d0b74c5-8759-44ee-b1eb-f2e29e9094fb",
    "info": {
        "name": "Rules Detect DarkSide",
        "author": "Openhunting",
        "date": "2023-07-11",
        "modified": "2022-08-01 01:00:56",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for DarkSide",
        "tags": [
            "fsecurec3",
            "Ransomware",
            "darkside",
            "DarkSide",
            "Darkside"
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
                        "91a6a1e91ab7b1802b0b2b29e3bea4d237ec93300f1f5e20776d268e102b4c36",
                        "3e0651bab2b363a1c6fcdae2ea9486f98c3b6243b8d9d57d12f49ad67d560e95",
                        "0c1f2f914e5b512df229ffea8a27078ddcf992eb175fc05d02aa3bc3fe29a932",
                        "b9d60d450664c1e8fbfd6b2ec58fdeb2fd81797e183906a4536b59bc4f79846f",
                        "0a0c225f0e5ee941a79f2b7701f1285e4975a2859eb4d025d96d9e366e81abb9",
                        "457936c28938616495836c472b3389a0870574bee6a5dc026d5bd14979c6202c",
                        "43e61519be440115eeaa3738a0e4aa4bb3c8ac5f9bdfce1a896db17a374eb8aa",
                        "2c1e20a4b38634b97de398246bc3c8082d47663702a46bb885dc7fcc5f71daa1",
                        "52e7f65b07b0ddf716b7b3a04c1308c5c9c744d71b4edf6e6b9a3273ba24df7b",
                        "bfb31c96f9e6285f5bb60433f2e45898b8a7183a2591157dc1d766be16c29893",
                        "273c68d24bf1b305163237649cd0aff54679114a9fe43fad0c771a58e33e35db",
                        "c0202ff392172a9f76340f1e3bb478f99667ae5b744f9816c16f6cf8c53f874b",
                        "acb23245ab5c6d1a478f11f3b58e7cde9032827445ad6ab4dcf99ecddfea88d9",
                        "156335b95ba216456f1ac0894b7b9d6ad95404ac7df447940f21646ca0090673",
                        "adcb912694b1abcdf9c467b5d47abe7590b590777b88045d10992d34a27aa06e",
                        "f764c49daffdacafa94aaece1d5094e0fac794639758e673440329b02c0fda39",
                        "ba57e3301a4fe3b136f3126dc717b55c40b1e6a3ef9f951b9b85ede731d61de2",
                        "3c6ef6cc69f330c2ec1844096515f07664969cd0e4ee4e3621f37feefda19b2d",
                        "577527dc6459ebb9c992ebe75aafb86e09831af3f381f2d10d5501262d0aa16c",
                        "2c7d10f64dc39ea9bd6f18d9d1e1204f0c62324e8da148354d557bba17e3c615",
                        "5da3e6b4bea1eaceddb048a4a6bd702291189f42d15c4b2670de78984329b0a9",
                        "e51e4c372edf2bbe476a4b7630225c1875c5ccea2ed55b418bd793c54ce9a84d",
                        "235d09c111097d3ddcffe50f8d36bf26a530838b340ba24ed008665acbdeda7d",
                        "ec57ee2255eebc15d6c60df7352c074be05d0524fa49e15c3832e78709c84167",
                        "12ee27f56ec8a2a3eb2fe69179be3f7a7193ce2b92963ad33356ed299f7ed975",
                        "bac2149254f5ce314bab830f574e16c9d67e81985329619841431034c31646e0",
                        "2d82be244e23001148ed5a6d83856b6f7cd20c3f7786481303d5d584c51ff5f0",
                        "b6855793aebdd821a7f368585335cb132a043d30cb1f8dccceb5d2127ed4b9a4",
                        "f913d43ba0a9f921b1376b26cd30fa34",
                        "472d28010651900ff78c3b044603ecd4f8850f867b74e8b5717b051638d4e536",
                        "5c01028c0ec766e56fc4c94eaa360aa0fdb527e5697545c37168b707236f8378",
                        "0839aabe5fd63b16844a27b3c586c02a044d119010a1a40ee4035501c34eae0d",
                        "766a18b368783351c92a96d3ca56b38b413397dc0abbbe9d612ae0e088831dd0",
                        "8b9add9365c530686c8c87a955548e08a1a8ada42db80774bfe45516c786c07f",
                        "3bf81d4362c1f8e1a5c96620162c81806bd2dd819cdd39ff9be74012257e05ed",
                        "a1998da14ccf238fbde79bfd715e9ea19cf48d3697de7b7c77cab63223480011",
                        "da3bb9669fb983ad8d2ffc01aab9d56198bd9cedf2cc4387f19f4604a070a9b5",
                        "a471fdf6b137a6035b2a2746703cd696089940698fd533860d34e71cc6586850",
                        "1f0d9f6070ecf5f2a3ae44e676431490b28d4264f9009cdf6a73cee931fbd411",
                        "e46c8f0b0a4df001e6744258e1d79956dffb80f5e867a188d561c33ea26edebe",
                        "98272cada9caf84c31d70fdc3705e95ef73cb4a5c507e2cf3caee1893a7a6f63",
                        "520bd9ed608c668810971dbd51184c6a29819674280b018dc4027bc38fc42e57",
                        "0727bd037c8c7ec64ec75f77fe61c94ad32705db1a8ebd2785392f61ca716cc7",
                        "3609272795c8f8ba1275959d1457b03f6143efaaf8cd037547cd561e68763237",
                        "9cee5522a7ca2bfca7cd3d9daba23e9a30deb6205f56c12045839075f7627297",
                        "2e50eb85f6e271001e69c5733af95c34728893145766066c5ff8708dcc0e43b2",
                        "cd5e0152db06472f37bdfb23dd4b9ed40d642c4aac24406cb4c6d73adf80faa7",
                        "10d1371824df34e1516b410bc9f01f982053d81c8970d7e86a1525120b467ed2",
                        "952ead109c44e94ad26130436c46902106182f22c425a8a5f9cdb5045ac0dc35",
                        "58a513f83af2b326c313b41de94e8e172d538f5d4d8be71965b664ad4b260f94",
                        "695f40a66dab8620d3156d76d4d785402c6267a08d0f1f6026157df1b8b319bc",
                        "d97c0b6ee613e03aa3256fcdd3757e54ba4c7bb5910887247dc857f2701f9a46",
                        "a11cc5051e3a88428db495f6d8e4b6381a1cb3fa5946a525ef5c00bfcb44e210",
                        "1d4c0b32aea68056755daf70689699200ffa09688495ccd65a0907cade18bd2a",
                        "ad6ea296f1887e0cc3d928d48205fbc2822c7801bba8d77e9315ea3e1dff122f",
                        "b326d11dd90c2e4efb0a384981f71c2bd1a6faa0553d6389acb08945b699f73d",
                        "e9a2a429ece0a2916f4688e472cfe31023fe0774d0e392b4049c7a6963e78979",
                        "151fbd6c299e734f7853497bd083abfa29f8c186a9db31dbe330ace2d35660d5",
                        "684ce737c1df26159dc117c485e1c922db9f8fb3d8dc086da47a6ca18fa43dc1",
                        "22eb6b037787725c00ed201066a2c6d7bc834eb5ab841041b352fefaa5952e57",
                        "ad98b5776080fdc5cef30132937f752bc326f9401097f847903dc12b381ff83c",
                        "bac7f1cb70a0fe909590f7b270248705d216b4abaf4e5dd4969fa4f1949badec",
                        "521c503bc3f5d8b2aa8819e8e30e2019e74ea9649a57529fb32c3dfc66a1e7ef",
                        "9cc2a17025664ad91cdc2573a5947a5637ef8aad699ba7068c544607e88e70da"
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
                        "darksidfqzcuhtk2.onion",
                        "51.79.243.236",
                        "darksidedxcftmqa.onion"
                    ]
                }
            ]
        }
    ]
};