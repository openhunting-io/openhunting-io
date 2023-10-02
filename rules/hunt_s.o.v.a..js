const rule = {
    "id": "729be102-bf9a-4140-bc37-8814869a4b61",
    "info": {
        "name": "Rules Detect S.O.V.A.",
        "author": "Openhunting",
        "date": "2023-06-22",
        "modified": "2023-03-24 09:04:51",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for S.O.V.A.",
        "tags": [
            "Nexus",
            "SOVA",
            "Android",
            "Banking",
            "Botnet",
            "C2panel"
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
                        "b5fe7385acde76459ebc61edaf6b510f9c6d42b4c54cba565b232670985f4bce",
                        "b7c94b8a0562ad87bd7f5764dd5b416f6cd267dec46f5157160477eb68a8bcc7",
                        "bbaf483c2b6f67f22eb6e1fa00f200e9c1e201b0110070acaefd416cf846b1aa",
                        "dcd04daa033f25e662b75edc4764657db033782c3191baa973d6c2da3f0f0d95",
                        "e9c42b55b2bfb18bb62858fa306c0aca8aad41764ffe7eac76def46ef83470e8",
                        "f5b4bd285e955d64f23e1ada3735dc4a37fe16dde9d7674d99a8cb033df2deb6",
                        "615715495cbc3e52a7cef9e7cfe4b5a6e4343c4caa36f7ee41d786789bc7aa93",
                        "74b780ed98cac6b72fd82d3260e216cd19968ba0d470f3934e618272f174c41a",
                        "493f24d7e8543ad526e6e30cd6e23b7d71d4391d2534d48cd54099697e85e53f",
                        "207915d32231466213c7ebc2113fb83c960003d8a72d15d402c22c821d771474",
                        "01ed7609e3bab9bcfc4cab9e055854e0d48b136bdecc6cf294e6f737a76fec02",
                        "6d78c5319a11c39296a576859deb5e396a1bd8621f631e95e9079bf89ced110a",
                        "188fb1d3a8bad42c9ed3cde807fe9f4de4899aaa9ba88bc055dbd7a42ba1beb5",
                        "601ad7c2874feac89a1d32d2b40c17256c5f2ecd1440f6bdb6a300f9821271e0",
                        "804f74149244cf400a28d13b684bb8d32535f31860f69b977f0cc386108c089f",
                        "8e03be6f58d97dd0ab31b37343a23e30b0bb6dc27589dce1cf7984db2cdfb43e",
                        "a6638f0b820902e69d81541c67386d68153f56c986da5e9d05b149cd2d8240c0",
                        "dbadfd1fb9aa563fefc1005934470c0284cf7a6b42411f37fc476936aeb08ee5",
                        "f31587897bd39f51debe148a4f9402346431eb85d9a0def8bfc5adeacadac635",
                        "f3a263ff80fa866f6afbf9ccd6c0b9cf8c6d221a78fd43d182a505079c7747d9",
                        "f68896d4dbb535e0bac2d51448be3cd959d3ab1d64284826d9d4199f8251639e",
                        "21343fd8eda5e491bafa9d953675afcaec9bc87fc97c791559b63411a9c93fa0",
                        "6f7e57ed7239905fafc3947160b5fc89ad615772d2a694299999d2fe080453f4",
                        "ad6150d59f5a77ad1a9a05bcbb77b6746d10e15efcd84a4afec99169e5bdaa10",
                        "d5cad5cc6147eb82ec39c58b08348e61c2391fcf6aee1038744091dc0814a70f",
                        "14cd7b6d59808b533a819620fdbea9c9813a9f1614e886534a2d03a41e119608",
                        "182cc43b2817250ebd80a116f82a7a410ded22ea12821ca192f8a8d29d3b0b09",
                        "45b64a90d9342d7046b5008355085fa23bdfe2843f82c60c557139135c23e44e",
                        "4f16706287452fe3c5ff0980100f068330625174dec45f23a3169cc760c8c922",
                        "546bc8d7b0386e95c231dff26cc755fc241bdea33243691625ec63a0a3a9487e",
                        "556c3ebebadeaa04e09e05447ab6cffa9481b18625dc3a0eae590e275e6ed53a",
                        "62ac8afc16d45c18a99b44745daf1a62a462b32cb664c3d3e2bf15ceefc45d9c",
                        "66de574ab3558614e486681813dc1104b7384870e49eba38660ee82a0c73bec0",
                        "6d3145569c1c4634073a97a16b56a78e4430053cbdab14e302457b0abfc388f3",
                        "72633ea297b9e621e099dd070019ecd623ee93c62b4f9d47f24726816f69cc7d",
                        "93094e8a36e0330cb5a49b7689687c0d12dc1858d6364ad42394aff8387bf1f7",
                        "6c779ef382428fb5d6fca1919552fc42"
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
                        "5.161.105.24",
                        "5.161.116.222",
                        "45.81.243.180",
                        "45.81.243.181",
                        "45.81.243.203",
                        "45.81.243.204",
                        "85.31.45.128",
                        "85.31.45.130",
                        "109.206.240.7",
                        "176.107.160.28",
                        "176.107.160.64",
                        "5.161.16.85",
                        "5.161.22.241",
                        "5.161.189.178"
                    ]
                }
            ]
        }
    ]
};