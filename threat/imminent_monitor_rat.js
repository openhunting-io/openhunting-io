var threatdata = {
    "name": "Imminent Monitor RAT",
    "alias": "Imminent Monitor RAT, Imminent Monitor",
    "category": "Tools",
    "type": "Backdoor, Info stealer, Credential stealer",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Imminent Monitor RAT",
        "names": [
            {
                "name": "Imminent Monitor RAT"
            },
            {
                "name": "Imminent Monitor"
            }
        ],
        "description": "(Palo Alto) A RAT offered for sale since 2012.\n\nThe ImminentMonitor Client Control Panel offers a clean, easy-to-use interface to build and control ImminentMonitor client malware. As well as the full Remote Desktop access of any RAT, features less noticeable by the victim include:\n\n\u2022 File manager\n\u2022 Process manager\n\u2022 Window manager\n\u2022 Clipboard manager\n\u2022 Registry manager\n\u2022 Startup manager\n\u2022 Command prompt\n\u2022 TCP connection\n\u2022 Remote webcam monitoring\n\u2022 Remote microphone monitoring\n\u2022 Password recovery",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/imminent-monitor-a-rat-down-under/",
            "https://ti.360.net/blog/articles/apt-c-36-continuous-attacks-targeting-colombian-government-institutions-and-corporations-en/",
            "https://itsjack.cc/blog/2016/01/imminent-monitor-4-rat-analysis-a-glance/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.imminent_monitor_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Imminent%20Monitor"
        ],
        "uuid": "b9236211-46f9-4e2c-89ca-a1fed4f2ea04",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Imminent Monitor RAT",
            "malware_alias": null,
            "malware": "win.imminent_monitor_rat",
            "last_update": "2021-06-27 16:30:33",
            "tags": [
                "imminent"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "8067ef9073fdb633e0be1d590c03c0091b1801202ad070cf3872e8fda2a41639",
                        "timestamp": "2021-06-27 16:30:33"
                    },
                    {
                        "value": "6a2f2e1af097e8c7698ed3288f70da4a437811d17d4629bf3c2b7c37ce6b5f08",
                        "timestamp": "2021-06-27 16:30:32"
                    },
                    {
                        "value": "c54e959ac27aedd00ff31809ab211fcbaada77f402c8a1a67bef52b5e294d9f4",
                        "timestamp": "2021-06-27 16:30:31"
                    },
                    {
                        "value": "8514ff9c2ada6af82ac8353ebafe4f9c924f3df51adafc416df5bde0726b3dfa",
                        "timestamp": "2021-06-27 16:30:31"
                    },
                    {
                        "value": "f2a489976001d04ddd83ba0cb2e49b0a523b6a6ccb25d0d8735f52796896be3c",
                        "timestamp": "2021-06-11 06:30:31"
                    },
                    {
                        "value": "c130f3858f4692d6f6d4aa0c4cd2275fafc170131d0c9cb0fcfb455c6f3e211b",
                        "timestamp": "2021-06-11 06:30:30"
                    },
                    {
                        "value": "f74aa451fbd3135edc4874a628e4b2280561459c0933b9285ffad8a89e84d6bf",
                        "timestamp": "2021-06-11 06:30:30"
                    },
                    {
                        "value": "b1a76dd042b5b4c825472ae3d0ecbdbe9b73049c457814aaa54997e16a37a33f",
                        "timestamp": "2021-06-11 06:30:30"
                    },
                    {
                        "value": "ad6d58c9d9a1a75e8c1e482d53df649427acf132ea82f3d205b78cdf0f5e438c",
                        "timestamp": "2021-06-09 17:30:24"
                    },
                    {
                        "value": "2c53417a6b4c4e4ba05f683ec402dbfca125384655e8fc6c529c696995860b81",
                        "timestamp": "2021-06-09 17:30:24"
                    },
                    {
                        "value": "efb143b7e8186a9761f9a88fbcbb8fb67e1dab6133961779060477ed6013e886",
                        "timestamp": "2021-06-09 17:30:24"
                    },
                    {
                        "value": "9f505b6b238543bdf2f4dedea6e0d2d2b72f285ebcea82b76311878975857b62",
                        "timestamp": "2021-06-09 17:30:24"
                    },
                    {
                        "value": "2b21124d1683a0732c14190ec17c0aba4d33e3e00567607d8f7b7ed9754305b5",
                        "timestamp": "2021-06-07 16:17:28"
                    },
                    {
                        "value": "047c69ac4531bdf644f8a0a0a930958589930f86fdc4bfce992b76c9775fc906",
                        "timestamp": "2021-06-07 16:17:28"
                    },
                    {
                        "value": "dc1f93435a858fed72eee637cb23ad024ba309ec030dfa53f2495cb16776ccfd",
                        "timestamp": "2021-06-07 16:17:28"
                    },
                    {
                        "value": "975cc3f3bd2bc6b0c3ba35733f0a3aee2b7772ab0410be735bf6f708cd379820",
                        "timestamp": "2021-06-07 16:17:28"
                    },
                    {
                        "value": "b7ef9f5137720932895dbc0e1231e71451eace1e82f2baac3e208c969ec1e966",
                        "timestamp": "2021-06-03 22:19:53"
                    },
                    {
                        "value": "820e12af8f79fb8a108b80eea3bcf26dcc5d31c2c79072ee3cfceba1b22e355f",
                        "timestamp": "2021-06-03 22:19:52"
                    },
                    {
                        "value": "acc69ae8822c6facb03542af4fcca5588408b41d351f7bc7988d462a7f8c60d2",
                        "timestamp": "2021-06-03 22:19:52"
                    },
                    {
                        "value": "9e691357776fa8552f8bb78a89bccc3d4c92870708e303a07b8e157dd35f57ac",
                        "timestamp": "2021-06-03 22:19:52"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-06-27 16:30:33",
    "mitre": [],
    "file_name": "imminent_monitor_rat",
    "analysis": null
};