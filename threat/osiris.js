var threatdata = {
    "name": "Osiris",
    "alias": "Osiris",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2021-05-16",
    "all_data": {
        "tool": "Osiris",
        "names": [
            {
                "name": "Osiris"
            }
        ],
        "description": "(Check Point) Following our recent analysis of the {{Kronos}} banking Trojan, we discovered that Kronos has also now been enhanced to hide its communication with C&C server using Tor. While the author of Kronos continues to remain an issue of controversy, the new banking Trojan, Osiris, is thought to be primarily based on Kronos source code and most likely has the same author.",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://research.checkpoint.com/2018/osiris-enhanced-banking-trojan/"
        ],
        "uuid": "01dd8748-1009-4768-8a1d-368dfc145c82",
        "last-card-change": "2021-05-16",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Kronos",
            "malware_alias": "Osiris",
            "malware": "win.kronos",
            "last_update": "2021-09-04 12:30:30",
            "tags": [
                "osiris",
                "Kronos"
            ],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "e2984796f7308cdb70c172b14182a6f10dc9ed293d1c2dfac9c464f2e52599a0",
                        "timestamp": "2021-09-04 12:30:30"
                    },
                    {
                        "value": "28a020186c35ffc344fc71837693b7be3d5adaec4f24610915eb31ec15a626fd",
                        "timestamp": "2021-09-04 12:30:30"
                    },
                    {
                        "value": "63cfd63d995ec04f7c337708ff20ce4e2e118ab32e92395f1a815847bd2c01e2",
                        "timestamp": "2021-09-04 12:30:29"
                    },
                    {
                        "value": "09e90f1b1169b4725f8f7f5daabde617449a1a6817f12eaacc945451e001c62f",
                        "timestamp": "2021-09-04 12:30:28"
                    },
                    {
                        "value": "682b4509a0389207b6af79873f0b2c8b238b87ceacca3f44d2afe4f494dfe6e2",
                        "timestamp": "2021-09-01 09:30:26"
                    },
                    {
                        "value": "585ff16b69976f92d9d507b1b43c2ced804cf4fb30e822cf19f404a4f2245a96",
                        "timestamp": "2021-09-01 09:30:26"
                    },
                    {
                        "value": "500eeeea41a7991921fbd5ef01d164c0ee07809cdee3538d3309868204e1ac4f",
                        "timestamp": "2021-09-01 09:30:25"
                    },
                    {
                        "value": "82b2930af51d8cdb57db169338d9bead52d3c82769c4542f1465367c55cfc2ee",
                        "timestamp": "2021-09-01 09:30:25"
                    },
                    {
                        "value": "48bfc8877fa7102efd2cecf40b4f59166662d2a87f61ae1ad84b75bf14342c44",
                        "timestamp": "2021-08-16 12:10:14"
                    },
                    {
                        "value": "873608a4b03e2d7cdb4b8e618aa97636d635da35709c051913629929994846ee",
                        "timestamp": "2021-08-16 12:10:13"
                    },
                    {
                        "value": "541cd2039c7c3d9e4e5ff9b811a61f709a55580352135b403139a5288fa06f32",
                        "timestamp": "2021-06-22 13:39:36"
                    },
                    {
                        "value": "adde4ae9951c7eaf0e6da38a6d4a48d17c1992685b70e98cd3c248aca49dafe9",
                        "timestamp": "2021-06-22 13:39:36"
                    },
                    {
                        "value": "18cd059c6141fcff83f1a715a3599a35e18ee0e41500844ae9691f62df264d6e",
                        "timestamp": "2021-06-22 13:39:36"
                    },
                    {
                        "value": "9420352e6f0bd18b2e3cd99144ab76c1fca76b96bdba6e07b83bd5d1d2fb790b",
                        "timestamp": "2021-04-23 06:30:28"
                    },
                    {
                        "value": "e89dfa2bac41f774380b4f4a4f5f65002a054f0de9bccf26cbf16b2ef3f913de",
                        "timestamp": "2021-04-23 06:30:28"
                    },
                    {
                        "value": "fee88005a72b0dec13b45092e47b5275498e26beca1fae2193ab89e48e689c09",
                        "timestamp": "2021-04-23 06:30:28"
                    },
                    {
                        "value": "fe647c25fed5c6c15d6ecc449337110f1670a2d212617775d7b9f57667750c48",
                        "timestamp": "2021-04-23 06:30:28"
                    },
                    {
                        "value": "592b2eeb513d11fa7ec4e840f2db9f810e2aee3b16114cbad882b2157adad356",
                        "timestamp": "2021-03-29 07:00:31"
                    },
                    {
                        "value": "6d2ce3c4afc1f61a88ae30588ea913021ab6ce52a1f961879f07a621bde07f93",
                        "timestamp": "2021-03-29 07:00:31"
                    },
                    {
                        "value": "2d47ffef26bfea2b14c0690860487fd532005b70fcbd4d7695a738e4f1d5ff4d",
                        "timestamp": "2021-03-29 07:00:31"
                    },
                    {
                        "value": "b6e4ffe7aa6d987b3710729ce594007e5709a020de8ef4e4d48eaafbe7250903",
                        "timestamp": "2021-03-29 07:00:31"
                    }
                ],
                "url": [
                    {
                        "value": "http://95.214.235.237/f4t4r.exe",
                        "timestamp": "2021-03-10 08:09:59"
                    },
                    {
                        "value": "http://wifoweijijfoiwjweoi.xyz/panel/upload/data.cmp",
                        "timestamp": "2021-03-10 08:08:14"
                    },
                    {
                        "value": "http://wifoweijijfoiwjweoi.xyz/panel/connect.php",
                        "timestamp": "2021-03-10 08:08:14"
                    }
                ],
                "domain": [
                    {
                        "value": "wifoweijijfoiwjweoi.xyx",
                        "timestamp": "2021-03-10 08:08:34"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "d7634d1df27b569aaf2dd52f8f310027",
                        "timestamp": "2021-03-10 08:09:03"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-09-04 12:30:30",
    "file_name": "osiris",
    "analysis": null,
    "articles": [],
    "mitre": []
};