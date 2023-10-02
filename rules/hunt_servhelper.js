const rule = {
    "id": "c3ca8f4a-6151-40c2-be7e-7c07f912916b",
    "info": {
        "name": "Rules Detect ServHelper",
        "author": "Openhunting",
        "date": "2022-09-06",
        "modified": "2021-12-18 08:10:07",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for ServHelper",
        "tags": [
            "servhelper",
            "ServHelper",
            "ServHelpe"
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
                        "65f47cd450bd96cba40e838cb0355638a1d43b3ac51d3d6e97a469d5425a7874",
                        "5c48fce985e7b875be1a88334fa98f4db5611117bd39959e2e5980f0b3e8094d",
                        "0ee089365adfe14f05cf599a6f74aecba426ad0270eb3ddff135c99b1c5c0a48",
                        "7a521b89bee36ec9231a5cdff5b79132335843fb10be72c1b1426ef4c3935e4a",
                        "8082bfe8a9f63854d6317cf6ddc0c18c54140ee5d179a96bfe9900c90d994518",
                        "84c41dc018689fcb2fc4240f1e0267a5ee82232e3bcd541f5f5bed4139cfcd55",
                        "d74b6c6a24a192266f78de7209ac83d43add79818bf28d367b51813465dac6db",
                        "dcbce5bc929785a63efb6d9180a479c33fcf882e39b4d0f0b581713b193f38cf",
                        "53882829be84aba37e9a3e3367301b7800ba1aac3007af62d6620fcc170f4f7b",
                        "3342d9e46d1b50083fa7da9e8f72d578b10e0cced3dca29b2e5bf9dc219349da",
                        "be5543ea72f61dd230233cc9a875bd2b0e1dd68d9addc8d12bbb09dd97730ff4",
                        "10675ecac736bf3fa5175330ef22d3f1e252a698072c58cba3de0a208e751fb2",
                        "177d6aab26c15ecf87f29f92ad0eaff355d195de1c0ef17d9cb9b7483c288934",
                        "6c4aab4c3bd1ba8f77a781d70ecbc1b4c7dfd9d3c7ad60158fb8d35d1d4246e2",
                        "f519d4517271e01ea6807890fcbc1573e64844b6a8105aa7c3462ea65bb3c7fe",
                        "a45ce871e292ee5d5effccb273909abb62773ad8cb308f90726e8820ecca76d6",
                        "e5f0bc80d04cac1456c2b4c572d352efd5b6717a262141508fe6919c8e3bb5a3",
                        "42d3aa6d8f6d7c2f4ed5c4a0d0b3b160bbcf1964d82c0f095026f7c75e110c14",
                        "555f654fb51e632ba2cf49b865b6de5f5772ffba0229d73021a1c6a6f65dab08",
                        "f25560518e8bebbc0abdde4c0241833e432ad4c56f934bb18067c1abf7305959",
                        "10d971c860d4f8ad93b86f47fbc0cd285897769dd60bb68dea4377bb6e7d6f1f",
                        "2c563c0ca6aadef9b039b1e542329bec04c9915f433e6b27026cf08db52aceb6",
                        "08a75beea96e15a6bc2e838cf0649ef0e3be100b819d4513b816778f18903c12",
                        "1409acb6dd320620a038e8571fa1bfdbbdc659f240a5a17d1db2c8af530ae548"
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
                        "sbbsats5d5asdv3.xyz",
                        "z7gzv6sw6ui9.xyz",
                        "nacuasujciiwi3.xyz",
                        "hsuahiysautcr.xyz",
                        "kasisausnasaysar.xyz",
                        "asdyyauscuauusc.xyz",
                        "osdnvnauurt.xyz",
                        "aosdnvnauurt.xyz",
                        "zdov9v88e83jfa.xyz",
                        "saudjyyvv663.xyz",
                        "iasfugibz9x.xyz",
                        "zuvujvhuaif.xyz",
                        "whereihjeu3.xyz",
                        "hitnaiguat.xyz",
                        "sadiviai9d9asd.xyz",
                        "potuybze.xyz",
                        "asdidjvjvaias.xyz",
                        "afggaiir3a.xyz",
                        "afspfigjeb.cn",
                        "soajfvhv235ua.xyz",
                        "afditnzurh.xyz",
                        "kbpsorjbus6.pw",
                        "pgf5ga4g4b.cn",
                        "enroter1984.cn",
                        "neboley.cn",
                        "asdjausg.cn",
                        "afsifufufgg42.cn",
                        "afsibibia3.xyz",
                        "jfiisnvvz.xyz",
                        "igibhbyehvyga.xyz",
                        "jfuag3.cn",
                        "novacation.cn",
                        "wheredoyougo.cn",
                        "syvgevyhz.cn",
                        "185.163.45.248",
                        "194.180.174.56",
                        "194.180.174.20",
                        "185.163.47.254",
                        "185.163.45.90",
                        "185.163.47.171",
                        "185.163.45.87",
                        "103.113.159.7",
                        "140.82.57.172",
                        "45.77.122.108",
                        "5.181.156.79",
                        "185.225.19.253",
                        "5.181.156.250"
                    ]
                }
            ]
        }
    ]
};