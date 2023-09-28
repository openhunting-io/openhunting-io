var threatdata = {
    "name": "Sality",
    "alias": "Sality, Sector, Kuku, SalLoad, Kookoo, SaliCode, Kukacka",
    "category": "Malware",
    "type": "Botnet, Worm, Downloader, Loader",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Sality",
        "names": [
            {
                "name": "Sality"
            },
            {
                "name": "Sector"
            },
            {
                "name": "Kuku"
            },
            {
                "name": "SalLoad"
            },
            {
                "name": "Kookoo"
            },
            {
                "name": "SaliCode"
            },
            {
                "name": "Kukacka"
            }
        ],
        "description": "(Cylance) The Sality virus infects local executables, removable storage, and remotely shared drives. It creates a peer-to-peer botnet which facilitates the downloading and execution of other malware. Sality can perform malicious code injection and modify its entry point to force code execution. This malware remains viable by adopting the successful strategies of other threats, implementing techniques like rootkit/backdoor capability, keylogging, and worm-like propagation.",
        "category": "Malware",
        "type": [
            "Botnet",
            "Worm",
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/cylance-vs-sality-malware.html",
            "https://www.botconf.eu/wp-content/uploads/2015/12/OK-P18-Kleissner-Sality.pdf",
            "https://en.wikipedia.org/wiki/Sality"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sality"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Sality"
        ],
        "uuid": "ccf23a1f-eec2-465a-89a8-fc38dfbfeea8",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Sality",
            "malware_alias": null,
            "malware": "win.sality",
            "last_update": "2021-09-26 20:30:29",
            "tags": [
                "sality"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "2eb74de9b3c016d03b96378e59557a6524918745c9c48df2a5a7ea5ca92d375a",
                        "timestamp": "2021-09-26 20:30:29"
                    },
                    {
                        "value": "513c36f4a21c7ebf125fe36b98fb2c065898b9f543a6e8dbbf3f9a041c5b86fa",
                        "timestamp": "2021-09-26 20:30:29"
                    },
                    {
                        "value": "33f8b063fa9eef4d6e83779a5f93c4ca9b8597c4e328ff0f789cbde0d72d24d0",
                        "timestamp": "2021-09-26 20:30:28"
                    },
                    {
                        "value": "4444e65841972ce81243575afa168ebbe54e7cc2db6aa34d996f53a6b2d99043",
                        "timestamp": "2021-09-26 20:30:28"
                    },
                    {
                        "value": "85e576aba88b0b3805d924e344feff58c27992d02675ba86126b88cb790afb7c",
                        "timestamp": "2021-07-24 08:00:31"
                    },
                    {
                        "value": "4ee41060b8f1c5679b10bebb8378f353ea62eb38ab27f041e3727dd8cb06b19d",
                        "timestamp": "2021-07-24 08:00:31"
                    },
                    {
                        "value": "f3dda8f48606c448d22a7b407f61757605acc028d3deddd0ad8c1e2742efcf86",
                        "timestamp": "2021-07-24 08:00:31"
                    },
                    {
                        "value": "cea7a79f688fe24df1c614bc6fdcb281c056f882307e2b9f7841dca56ae923f0",
                        "timestamp": "2021-07-24 08:00:30"
                    },
                    {
                        "value": "f66117bb7aff5ea3fb4241a5477edebc1f84844376b56b3c6ba6f5de7004d4c7",
                        "timestamp": "2021-04-06 13:14:34"
                    },
                    {
                        "value": "1e21f175cd66fe91b5ff770b1e74c61b2df04c13044388e36dfd3d0768c9e6e5",
                        "timestamp": "2021-04-06 13:14:34"
                    },
                    {
                        "value": "bdb1b6c2151038f1023b551d26ef4eab2d5321066d3352d5357b8bee301b67b0",
                        "timestamp": "2021-04-06 13:14:34"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-09-26 20:30:29",
    "mitre": [],
    "file_name": "sality",
    "analysis": null
};