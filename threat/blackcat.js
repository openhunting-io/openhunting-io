var threatdata = {
    "name": "BlackCat",
    "alias": "BlackCat, ALPHV, ALPHVM, Noberus",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "BlackCat",
        "names": [
            {
                "name": "BlackCat"
            },
            {
                "name": "ALPHV"
            },
            {
                "name": "ALPHVM"
            },
            {
                "name": "Noberus"
            }
        ],
        "description": "(Palo Alto) The malware itself is coded in the Rust programming language. Though this is not the first piece of malware to use Rust, it is one of the first, if not the first, piece of ransomware to use it. By leveraging this programming language, the malware authors are able to easily compile it against various operating system architectures. Given its numerous native options, Rust is highly customizable, which facilitates the ability to pivot and individualize attacks.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/blackcat-ransomware/",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/noberus-blackcat-alphv-rust-ransomware",
            "https://www.bleepingcomputer.com/news/security/alphv-blackcat-this-years-most-sophisticated-ransomware/",
            "https://www.intrinsec.com/alphv-ransomware-gang-analysis/",
            "https://www.sentinelone.com/labs/blackcat-ransomware-highly-configurable-rust-driven-raas-on-the-prowl-for-victims/",
            "https://www.varonis.com/blog/alphv-blackcat-ransomware",
            "https://cybersecurity.att.com/blogs/labs-research/blackcat-ransomware",
            "https://www.cybereason.com/blog/cybereason-vs.-blackcat-ransomware",
            "https://blog.talosintelligence.com/2022/03/from-blackmatter-to-blackcat-analyzing.html",
            "https://securelist.com/a-bad-luck-blackcat/106254/",
            "https://www.darkreading.com/attacks-breaches/blackcat-purveyor-shows-ransomware-operators-have-nine-lives",
            "https://www.trendmicro.com/en_us/research/22/d/an-investigation-of-the-blackcat-ransomware.html",
            "https://www.ic3.gov/Media/News/2022/220420.pdf",
            "https://www.microsoft.com/security/blog/2022/06/13/the-many-lives-of-blackcat-ransomware/",
            "https://www.trendmicro.com/en_us/research/23/e/blackcat-ransomware-deploys-new-signed-kernel-driver.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1068"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blackcat",
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.blackcat"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=blackcat-ransomware"
        ],
        "uuid": "b7260119-d178-4d47-9a11-2d32c0d4cd9c",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "analysis": {
        "id": "report--afe1a8b7-58ab-4232-971f-b96abae8657c",
        "pb_file": "blackcat-ransomware.json",
        "last_updated": "2022-01-27T14:18:25.222Z",
        "title": "BLACKCAT RANSOMWARE",
        "industries": [
            "aerospace",
            "commercial",
            "construction",
            "engineering",
            "financial-services",
            "government-local",
            "healthcare",
            "hospitality-leisure",
            "insurance",
            "manufacturing",
            "retail",
            "technology",
            "telecommunications",
            "transportation"
        ],
        "regions": [
            "DE",
            "ES",
            "FR",
            "NL",
            "PH",
            "US"
        ],
        "malwares": []
    },
    "ioc_data": [
        {
            "malware_printable": "BlackCat",
            "malware_alias": "ALPHV,Noberus",
            "malware": "elf.blackcat",
            "last_update": "2022-05-10 22:56:56",
            "tags": [
                "Windows",
                "Ransomware",
                "BlackCat",
                "linux"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "173c4085c23080d9fb19280cc507d28d",
                        "timestamp": "2022-05-10 22:56:56"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "056d28621dca8990caf159f8e14069a2343b48146473d2ac586ca9a51dfbbba7",
                        "timestamp": "2022-04-10 20:19:26"
                    },
                    {
                        "value": "3a08e3bfec2db5dbece359ac9662e65361a8625a0122e68b56cd5ef3aedf8ce1",
                        "timestamp": "2022-01-08 06:05:52"
                    },
                    {
                        "value": "9802a1e8fb425ac3a7c0a7fca5a17cfcb7f3f5f0962deb29e3982f0bece95e26",
                        "timestamp": "2022-01-08 06:05:50"
                    },
                    {
                        "value": "e7060538ee4b48b0b975c8928c617f218703dab7aa7814ce97481596f2a78556",
                        "timestamp": "2022-01-08 06:05:49"
                    },
                    {
                        "value": "f7a038f9b91c40e9d67f4168997d7d8c12c2d27cd9e36c413dd021796a24e083",
                        "timestamp": "2022-01-08 06:05:47"
                    },
                    {
                        "value": "5121f08cf8614a65d7a86c2f462c0694c132e2877a7f54ab7fcefd7ee5235a42",
                        "timestamp": "2022-01-08 06:05:46"
                    },
                    {
                        "value": "f8c08d00ff6e8c6adb1a93cd133b19302d0b651afd73ccb54e3b6ac6c60d99c6",
                        "timestamp": "2022-01-08 06:05:45"
                    },
                    {
                        "value": "9f6876762614e407d0ee6005f165dd4bbd12cb21986abc4a3a5c7dc6271fcdc3",
                        "timestamp": "2022-01-08 06:03:35"
                    },
                    {
                        "value": "722f1c1527b2c788746fec4dd1af70b0c703644336909735f8f23f6ef265784b",
                        "timestamp": "2022-01-08 06:03:34"
                    },
                    {
                        "value": "13828b390d5f58b002e808c2c4f02fdd920e236cc8015480fa33b6c1a9300e31",
                        "timestamp": "2022-01-08 06:03:33"
                    },
                    {
                        "value": "15b57c1b68cd6ce3c161042e0f3be9f32d78151fe95461eedc59a79fc222c7ed",
                        "timestamp": "2022-01-08 06:03:33"
                    },
                    {
                        "value": "1af1ca666e48afc933e2eda0ae1d6e88ebd23d27c54fd1d882161fd8c70b678e",
                        "timestamp": "2022-01-08 06:03:32"
                    },
                    {
                        "value": "c3e5d4e62ae4eca2bfca22f8f3c8cbec12757f78107e91e85404611548e06e40",
                        "timestamp": "2022-01-08 06:03:32"
                    },
                    {
                        "value": "f837f1cd60e9941aa60f7be50a8f2aaaac380f560db8ee001408f35c1b7a97cb",
                        "timestamp": "2022-01-08 06:03:31"
                    },
                    {
                        "value": "4e18f9293a6a72d5d42dad179b532407f45663098f959ea552ae43dbb9725cbf",
                        "timestamp": "2022-01-08 06:03:31"
                    },
                    {
                        "value": "7b2449bb8be1b37a9d580c2592a67a759a3116fe640041d0f36dc93ca3db4487",
                        "timestamp": "2022-01-08 06:03:30"
                    },
                    {
                        "value": "cda37b13d1fdee1b4262b5a6146a35d8fc88fa572e55437a47a950037cc65d40",
                        "timestamp": "2022-01-08 06:03:30"
                    },
                    {
                        "value": "3d7cf20ca6476e14e0a026f9bdd8ff1f26995cdc5854c3adb41a6135ef11ba83",
                        "timestamp": "2022-01-08 06:03:29"
                    },
                    {
                        "value": "38834b796ed025563774167716a477e9217d45e47def20facb027325f2a790d1",
                        "timestamp": "2022-01-08 06:03:29"
                    },
                    {
                        "value": "b588823eb5c65f36d067d496881d9c704d3ba57100c273656a56a43215f35442",
                        "timestamp": "2022-01-08 06:03:28"
                    },
                    {
                        "value": "7e363b5f1ba373782261713fa99e8bbc35ddda97e48799c4eb28f17989da8d8e",
                        "timestamp": "2022-01-08 06:03:28"
                    },
                    {
                        "value": "cefea76dfdbb48cfe1a3db2c8df34e898e29bec9b2c13e79ef40655c637833ae",
                        "timestamp": "2022-01-08 06:03:27"
                    },
                    {
                        "value": "0c6f444c6940a3688ffc6f8b9d5774c032e3551ebbccb64e4280ae7fc1fac479",
                        "timestamp": "2022-01-08 06:03:27"
                    },
                    {
                        "value": "c5ad3534e1c939661b71f56144d19ff36e9ea365fdb47e4f8e2d267c39376486",
                        "timestamp": "2022-01-08 06:03:26"
                    },
                    {
                        "value": "658e07739ad0137bceb910a351ce3fe4913f6fcc3f63e6ff2eb726e45f29e582",
                        "timestamp": "2022-01-08 06:03:25"
                    },
                    {
                        "value": "7154fdb1ef9044da59fcfdbdd1ed9abc1a594cacb41a0aeddb5cd9fdaeea5ea8",
                        "timestamp": "2022-01-08 06:03:25"
                    },
                    {
                        "value": "59868f4b346bd401e067380cac69080709c86e06fae219bfb5bc17605a71ab3f",
                        "timestamp": "2022-01-08 06:03:24"
                    },
                    {
                        "value": "c8b3b67ea4d7625f8b37ba59eed5c9406b3ef04b7a19b97e5dd5dab1bd59f283",
                        "timestamp": "2022-01-08 06:03:24"
                    },
                    {
                        "value": "731adcf2d7fb61a8335e23dbee2436249e5d5753977ec465754c6b699e9bf161",
                        "timestamp": "2022-01-08 06:03:23"
                    },
                    {
                        "value": "2cf54942e8cf0ef6296deaa7975618dadff0c32535295d3f0d5f577552229ffc",
                        "timestamp": "2022-01-08 06:03:22"
                    },
                    {
                        "value": "5bdc0fb5cfbd42de726aacc40eddca034b5fa4afcc88ddfb40a3d9ae18672898",
                        "timestamp": "2022-01-08 06:03:22"
                    },
                    {
                        "value": "28d7e6fe31dc00f82cb032ba29aad6429837ba5efb83c2ce4d31d565896e1169",
                        "timestamp": "2022-01-08 06:03:21"
                    },
                    {
                        "value": "bd337d4e83ab1c2cacb43e4569f977d188f1bb7c7a077026304bf186d49d4117",
                        "timestamp": "2022-01-08 06:03:20"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-05-10 22:56:56",
    "mitre": [],
    "file_name": "blackcat"
};