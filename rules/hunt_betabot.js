const rule = {
    "id": "d4939b05-fb72-4baf-bed3-10131641a32e",
    "info": {
        "name": "Rules Detect BetaBot",
        "author": "Openhunting",
        "date": "2022-08-08",
        "modified": "2023-04-26 18:30:05",
        "severity": "High",
        "category": "Malware",
        "description": "Rules IOC for BetaBot",
        "tags": [
            "Neurevt",
            "mx",
            "geo",
            "MEX",
            "betabot",
            "BetaBot"
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
                        "1b2c4ed9193792bfe48a5722705085e2afa7c14fd19512cb280e9750924852b4",
                        "7733c3d804cbb59a0c643e7318ae437ad3b5577289e5a44417a3768696f614f0",
                        "b6d6a7e37e23e7a65e964bc982979ceb94ab98a49fccf77cb888388fafa974eb",
                        "f3c6ec081b07206679c92b3ce2066fe2db39e8977c650bf126cfd390637ae651",
                        "fea0fdad9f440f68feb5c3b6f4952a952375397a6220c253fe7d3eeb15523397",
                        "e28c66491d701757a7b370aae235521e5e409edc45a1a90b544b4fb704324f70",
                        "8df03bfad7860d4f609e48de215c6f40fbb0de78bdaeb08fdf3409e722585efb",
                        "55c12cb22033e12af48c4bb80b660e4ace8ed2364e7147979e30355bab7d5469",
                        "273811e7b3de14abc8cfbbb28be4ab3c39922ff09c869f1a4b6b357577f0d374",
                        "eb7cea525ecef555356c13b6948c21ddad4b8a622ff4c027f285c0c096570253",
                        "4efd9a3fa2d25d6706213feb3299dd0f73777aad01217b9e3df046064fdbbb7e",
                        "02dce269070bfec91e4f01a67d774167f8208f17211e8027d8a7fe3dc62a356b",
                        "23873f7412c1985c6b227e7b0a9f3ae5",
                        "808e34a763acd79d01eeb1f54b18a551",
                        "f7e4a28f1ed37123d6e0851e573cd640",
                        "2ced2c14eece71c72c5e45e8a607bb4c"
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
                        "b.uandmearertyasport1.com",
                        "elkip.ru",
                        "urbanworld.ml",
                        "api.wifi-update.biz",
                        "z0m1.com",
                        "issasname.ws",
                        "sunny-displays.com",
                        "b.5dietmydartk5.com",
                        "www.climetrics.com",
                        "ns1.globsynbschool.com",
                        "www.globsyn.com",
                        "mayoristas.divisared.es",
                        "www.sahebzaman.org",
                        "cleanhomemade.com",
                        "eatlunch.top",
                        "russk21.icu",
                        "update-silo.com",
                        "dacosse.com",
                        "moscow13.at",
                        "russk21.icu",
                        "moscow13.at",
                        "b.new2u700andmearevideos1k1.com",
                        "russk20.icu",
                        "moscow13.at",
                        "russk19.icu",
                        "faded.website",
                        "russk18.icu",
                        "103.194.170.51",
                        "tachie.com",
                        "darrassaad.com",
                        "firecrackers.ru",
                        "russk18.icu",
                        "b.9thegamejuststarted14k9.com",
                        "b.12thegamejuststarted10k12.com",
                        "b.7thegamejuststarted11k7.com",
                        "russk17.icu",
                        "rusianlover.icu",
                        "rusianlover.icu",
                        "zakriasons.co",
                        "russk21.icu",
                        "rusianlover.icu",
                        "siidocumentos.icu",
                        "informaciones.siidocumentos.cu"
                    ]
                }
            ]
        }
    ]
};