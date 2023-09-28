var threatdata = {
    "name": "Avaddon",
    "alias": "Avaddon",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Avaddon",
        "names": [
            {
                "name": "Avaddon"
            }
        ],
        "description": "(Awake Security) Avaddon is a cryptolocker ransomware written in C++ that is best known for encrypting files and changing the file extension to .avdn. The ransomware also deletes the volume shadow copies and other system backups and typically demands a ransom ranging between $150 and $900. Since the ransomware uses strong encryption algorithms like AES256 and RSA2048, no decryptor is available and it is impossible to decrypt the file without the key that was used to encrypt it. This ransomware is sold similar to other Ransomware-as-a-service(RaaS) like REvil. Thus, even someone with limited technical background can become an \u201caffiliate\u201d to spread the malware. In return, the profit gets shared between the threat actor and the affiliate. In this blog post we dissect this malware and discuss methods to perform threat hunting for the Avaddon ransomware family.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://awakesecurity.com/blog/threat-hunting-for-avaddon-ransomware/",
            "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-report-avaddon-and-new-techniques-emerge-industrial-sector-targeted",
            "https://www.subexsecure.com/pdf/malware-reports/June-2020/Avaddon_Ransomware.pdf",
            "https://arxiv.org/pdf/2102.04796.pdf",
            "https://labs.sentinelone.com/avaddon-raas-breaks-public-decryptor-continues-on-rampage/",
            "https://www.domaintools.com/resources/blog/avaddon-the-latest-raas-to-jump-on-the-extortion-bandwagon",
            "https://www.offensive-hackers.com/2020/06/this-new-avaddon-ransomware-targeting-worldwide-users.html",
            "https://www.proofpoint.com/us/blog/security-briefs/ransomware-initial-payload-reemerges-avaddon-philadelphia-mr-robot-and-more",
            "https://asec.ahnlab.com/en/17411/",
            "https://www.cybereason.com/blog/cybereason-vs.-avaddon-ransomware",
            "https://www.cyber.gov.au/sites/default/files/2021-05/2021-003%20Ongoing%20campaign%20using%20Avaddon%20Ransomware%20-%2020210508.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0640/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.avaddon"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:avaddon"
        ],
        "playbook": [
            "https://www.nomoreransom.org/uploads/Avaddon_documentation.pdf",
            "https://www.nomoreransom.org/uploads/Avaddon_documentation_new.pdf"
        ],
        "uuid": "edb7a031-1b90-4d7c-94b2-659a2d9759f9",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Avaddon",
            "malware_alias": null,
            "malware": "win.avaddon",
            "last_update": "2021-11-25 19:45:32",
            "tags": [
                "avaddon"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "f7b1faade074d93149edb5f1f2237298409e9f49dbe30ec6004269e0c59546e1",
                        "timestamp": "2021-11-25 19:45:32"
                    },
                    {
                        "value": "7dc978b567a63ee043ffc7640bb14f26fed200962b27dfb56d02d2ab10344c53",
                        "timestamp": "2021-11-25 19:45:31"
                    },
                    {
                        "value": "b9c3f34558bd6d18a4ecb8a3bc6722e56ef6072f2954e2a138ddde1793cea86f",
                        "timestamp": "2021-11-25 19:45:30"
                    },
                    {
                        "value": "1228d0f04f0ba82569fc1c0609f9fd6c377a91b9ea44c1e7f9f84b2b90552da2",
                        "timestamp": "2021-11-25 19:45:30"
                    },
                    {
                        "value": "58a2de7b3b5c4a1719b35fc1fd37811fad749bb81d794fe675cfba1f83f6e064",
                        "timestamp": "2021-06-09 05:35:37"
                    },
                    {
                        "value": "6b60be2abbe479f57f83c9af4682c2c8c65c98574307f920f5a0a7a47a85f72a",
                        "timestamp": "2021-06-09 05:35:37"
                    },
                    {
                        "value": "f7895214503b4888e4da809ac6869929bd33df0776177f10e4416e0879fd0672",
                        "timestamp": "2021-06-09 05:35:37"
                    },
                    {
                        "value": "319ec1a54148644197b40ed4d73b8fe5646c4f6ebf76d1487bce40a72d37baa7",
                        "timestamp": "2021-06-09 05:35:37"
                    },
                    {
                        "value": "e3493fea655027d88224954f32985caff0aebaa858df3314747f6f4e4a92ac8d",
                        "timestamp": "2021-05-28 14:47:49"
                    },
                    {
                        "value": "e224be036759ce0a8611d9863a0e6def4db9d5ea45948d63b82ab42627a8c919",
                        "timestamp": "2021-05-28 14:47:49"
                    },
                    {
                        "value": "81493b11fc6acd0d4d8bb653dd9fcdaec16affbcbb509c01f6377db68efceee3",
                        "timestamp": "2021-05-28 14:47:49"
                    },
                    {
                        "value": "433875f694fb7f96b4fe51e4c3d9a45515e849d1ffd9aa528fb9b23f6323e106",
                        "timestamp": "2021-05-28 14:47:49"
                    },
                    {
                        "value": "b2d554660744869010b032ae7442f6b9f78ed4918d9e23c669cea4bc592236a3",
                        "timestamp": "2021-05-28 14:47:48"
                    },
                    {
                        "value": "ddee9852f4a2b0bfa861eadce78e0366b3554b03f5619a1dc7507cd285b8a393",
                        "timestamp": "2021-05-28 14:47:48"
                    },
                    {
                        "value": "57aec830833d4baed7936376d3985d14c8bd5020bec6182ee00c8885b0218282",
                        "timestamp": "2021-05-28 14:47:48"
                    },
                    {
                        "value": "5886ac60da0c972c25c3a67c3cdb025ad5f87b471c5bf312b14e8671983d4201",
                        "timestamp": "2021-05-28 14:47:48"
                    },
                    {
                        "value": "5c3c7ca062428645ef199eea00b98ded1a1d97d8d534a3c9652a6b077349a395",
                        "timestamp": "2021-05-28 14:00:27"
                    },
                    {
                        "value": "accdf7be34e793269c8e340d73a34199a9a4b3503e9b2120e9f3ef250f18922c",
                        "timestamp": "2021-05-28 14:00:27"
                    },
                    {
                        "value": "e998f113f94fa5fd31b4c62ab245f5bbb163ad5e39ad2613f12efa9c8ceba6ad",
                        "timestamp": "2021-05-28 14:00:27"
                    },
                    {
                        "value": "a0424f14aa77301280d5ca5cbcb30ca9865c32ef0be4e33a65b0175907f163f4",
                        "timestamp": "2021-05-28 14:00:27"
                    },
                    {
                        "value": "bd2bbb9cf42fade98a4c9df8b28b21eba5015e23883d09b46b73a92962748000",
                        "timestamp": "2021-05-28 13:47:59"
                    },
                    {
                        "value": "fc95f4af5d0e0244e4a9556d908f0a9279bcaf0ac243f088e1971af7436c6335",
                        "timestamp": "2021-05-28 13:47:59"
                    },
                    {
                        "value": "240d0e4653fdcac298777ad397af4df50fe355aa87fd82146ae40e9e998eab90",
                        "timestamp": "2021-05-28 13:47:59"
                    },
                    {
                        "value": "f318f43399f0472b9ad8aa6667b47c2736f9beb4a4411c561af102016f7319c0",
                        "timestamp": "2021-05-28 13:47:59"
                    },
                    {
                        "value": "48d7cd572f14aed7a90d6b66097a885a889e6e7416a6aaa2eb442706ff661275",
                        "timestamp": "2021-05-17 10:30:35"
                    },
                    {
                        "value": "1a2eb88e8c189acb63177f0f27050e067340ccdec996de672f20f02f46f7d292",
                        "timestamp": "2021-05-17 10:30:35"
                    },
                    {
                        "value": "693b7b4d0546eafa22837413e7c98f18d276f1c6a2459a51371fc29b9d91b625",
                        "timestamp": "2021-05-17 10:30:35"
                    },
                    {
                        "value": "34de1542ad6cd0f8dd003c061efd1618696ca1c06343fc7532a880ccd2b497c2",
                        "timestamp": "2021-05-17 10:30:35"
                    },
                    {
                        "value": "32643547aefae01363ff01beb15fa818827896088670a78e814a227ca120975a",
                        "timestamp": "2021-04-23 06:06:11"
                    },
                    {
                        "value": "91e2140e38cab5d72b810dc8a3b0807cb6e7fb09e908379bafb4858ad15bc941",
                        "timestamp": "2021-04-23 06:06:11"
                    },
                    {
                        "value": "238a008d432b20076b075ba8ad25412a39f7c44540a59913e5d36a4c23d6c21c",
                        "timestamp": "2021-04-23 06:06:11"
                    },
                    {
                        "value": "c9a588001a2cf732b6636aaef03c9d147a37d122681de7d16e3f0f4c3717351e",
                        "timestamp": "2021-04-23 06:06:11"
                    },
                    {
                        "value": "c14dd4a0831ea2548e1ddfd54b9704fe8ad0057924ede041c8c064b66690a028",
                        "timestamp": "2021-03-22 01:00:32"
                    },
                    {
                        "value": "7e581424371b20d2b5a88547817c7350ac70a83940383ccf4293f38d866a0a84",
                        "timestamp": "2021-03-22 01:00:32"
                    },
                    {
                        "value": "adc75b7ab8b9296814d8f9c23d6033b1eb4b45550c1ddab30cdc7654f98dc46b",
                        "timestamp": "2021-03-22 01:00:32"
                    },
                    {
                        "value": "3d89284d1531d1f3d9c307f712d5fd8cc9f30bfa486e883265a9e0809fde4beb",
                        "timestamp": "2021-03-22 01:00:32"
                    },
                    {
                        "value": "8b921d2333babce2c668096229f4fb6942bad3c7a1436b9d209ee05432ede990",
                        "timestamp": "2021-03-11 06:54:59"
                    },
                    {
                        "value": "bc5c264c4dc0207f6d500c47f870cc2aef641c4bf0efa3b1a408b83922cc61ac",
                        "timestamp": "2021-03-11 06:54:59"
                    },
                    {
                        "value": "d0fb16b8c62a08ebebee2962cfd054b72dd70e2493dfe4fb658d7c3786cc6be1",
                        "timestamp": "2021-03-11 06:54:59"
                    },
                    {
                        "value": "74be995266568ae18ab3ceae79b210bc14f7fa433eebca23f92d7f82961e2a3f",
                        "timestamp": "2021-03-11 06:54:59"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-11-25 19:45:32",
    "mitre": [],
    "file_name": "avaddon",
    "analysis": null
};