const rule = {
    "id": "c5918e39-5f36-45a5-8926-81b77bc8307d",
    "info": {
        "name": "Rules Detect BetaBot",
        "author": "Openhunting",
        "date": "2022-08-08",
        "modified": "2023-04-26 18:30:05",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BetaBot",
        "tags": [
            "MEX",
            "Neurevt",
            "mx",
            "BetaBot",
            "geo",
            "betabot"
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
                        "23873f7412c1985c6b227e7b0a9f3ae5",
                        "02dce269070bfec91e4f01a67d774167f8208f17211e8027d8a7fe3dc62a356b",
                        "2ced2c14eece71c72c5e45e8a607bb4c",
                        "55c12cb22033e12af48c4bb80b660e4ace8ed2364e7147979e30355bab7d5469",
                        "8df03bfad7860d4f609e48de215c6f40fbb0de78bdaeb08fdf3409e722585efb",
                        "1b2c4ed9193792bfe48a5722705085e2afa7c14fd19512cb280e9750924852b4",
                        "7733c3d804cbb59a0c643e7318ae437ad3b5577289e5a44417a3768696f614f0",
                        "273811e7b3de14abc8cfbbb28be4ab3c39922ff09c869f1a4b6b357577f0d374",
                        "f3c6ec081b07206679c92b3ce2066fe2db39e8977c650bf126cfd390637ae651",
                        "eb7cea525ecef555356c13b6948c21ddad4b8a622ff4c027f285c0c096570253",
                        "4efd9a3fa2d25d6706213feb3299dd0f73777aad01217b9e3df046064fdbbb7e",
                        "808e34a763acd79d01eeb1f54b18a551",
                        "b6d6a7e37e23e7a65e964bc982979ceb94ab98a49fccf77cb888388fafa974eb",
                        "f7e4a28f1ed37123d6e0851e573cd640",
                        "e28c66491d701757a7b370aae235521e5e409edc45a1a90b544b4fb704324f70",
                        "fea0fdad9f440f68feb5c3b6f4952a952375397a6220c253fe7d3eeb15523397"
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
                        "mayoristas.divisared.es",
                        "rusianlover.icu",
                        "103.194.170.51",
                        "urbanworld.ml",
                        "firecrackers.ru",
                        "b.7thegamejuststarted11k7.com",
                        "informaciones.siidocumentos.cu",
                        "russk18.icu",
                        "b.uandmearertyasport1.com",
                        "b.new2u700andmearevideos1k1.com",
                        "faded.website",
                        "ns1.globsynbschool.com",
                        "elkip.ru",
                        "www.globsyn.com",
                        "russk21.icu",
                        "darrassaad.com",
                        "russk17.icu",
                        "zakriasons.co",
                        "b.9thegamejuststarted14k9.com",
                        "sunny-displays.com",
                        "issasname.ws",
                        "eatlunch.top",
                        "siidocumentos.icu",
                        "moscow13.at",
                        "b.12thegamejuststarted10k12.com",
                        "b.5dietmydartk5.com",
                        "www.climetrics.com",
                        "www.sahebzaman.org",
                        "api.wifi-update.biz",
                        "dacosse.com",
                        "update-silo.com",
                        "cleanhomemade.com",
                        "tachie.com",
                        "russk20.icu",
                        "russk19.icu",
                        "z0m1.com"
                    ]
                }
            ]
        }
    ]
};