var threatdata = {
    "name": "OceanLotus",
    "alias": "OceanLotus, OSX_OCEANLOTUS.D, Backdoor.MacOS.OCEANLOTUS.F",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "OceanLotus",
        "names": [
            {
                "name": "OceanLotus"
            },
            {
                "name": "OSX_OCEANLOTUS.D"
            },
            {
                "name": "Backdoor.MacOS.OCEANLOTUS.F"
            }
        ],
        "description": "OSX_OCEANLOTUS.D is a MacOS backdoor that has been used by APT32.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/new-macos-backdoor-linked-to-oceanlotus-found/",
            "https://www.welivesecurity.com/2019/04/09/oceanlotus-macos-malware-update/",
            "https://researchcenter.paloaltonetworks.com/2017/06/unit42-new-improved-macos-backdoor-oceanlotus/",
            "https://www.alienvault.com/blogs/labs-research/oceanlotus-for-os-x-an-application-bundle-pretending-to-be-an-adobe-flash-update"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0352/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.oceanlotus"
        ],
        "uuid": "36d247e3-947d-44ec-aec7-fdb514618882",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "OceanLotus",
            "malware_alias": null,
            "malware": "osx.oceanlotus",
            "last_update": "2022-08-10 11:07:46",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "8128a63bab1a0e5802d9db94eb2ce551",
                        "timestamp": "2022-08-10 11:07:46"
                    },
                    {
                        "value": "10246345345312321313253453547877",
                        "timestamp": "2022-08-10 11:07:46"
                    },
                    {
                        "value": "2cac346547f90788e731189573828c53",
                        "timestamp": "2022-04-29 09:45:01"
                    },
                    {
                        "value": "5b87ef34d174361f35b65c5ee684f1c3",
                        "timestamp": "2021-09-18 05:24:17"
                    },
                    {
                        "value": "9b4c57e61f4df3b546aedf58b2f299cf",
                        "timestamp": "2021-09-18 05:24:17"
                    },
                    {
                        "value": "f8ccff73406a3b6acad964a6376b2ae9",
                        "timestamp": "2021-08-24 10:07:25"
                    },
                    {
                        "value": "943cb4b5ffb69926803d7f9c3dd1bc7c",
                        "timestamp": "2021-09-02 02:42:43"
                    },
                    {
                        "value": "ec44a1e0f5af1c4bd3f308ff1b3fc879",
                        "timestamp": "2021-08-03 07:34:43"
                    },
                    {
                        "value": "204e1ad9eb40cdb8270dc9f4d5dfa0ab",
                        "timestamp": "2021-07-29 23:27:38"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "ed47f3141fd6ac45a8fd8c535ae8814c6cb65bbb86741956ee9a950e74fd11dd",
                        "timestamp": "2022-07-25 11:18:28"
                    },
                    {
                        "value": "8c3eb1bf5f4b150d29883a548be9e1922c1751409f78c49d1560d219390b5422",
                        "timestamp": "2022-07-25 10:51:59"
                    },
                    {
                        "value": "eeafcce05f9b40cb1c95b36dc9ee5eb109d16e289c6f9bae5fb85772a756d76a",
                        "timestamp": "2022-05-30 15:53:01"
                    },
                    {
                        "value": "09b9f43c8c70c9d1e2aded67a6c4b4e743e6e5886a25995abd40ad663fa07238",
                        "timestamp": "2022-05-30 15:52:59"
                    },
                    {
                        "value": "88ea4a892b416cc67d4554a1aa1b7f76c2aa8c31bd3ef2c801f0456c16317cac",
                        "timestamp": "2022-05-30 15:52:57"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-08-10 11:07:46",
    "mitre": [],
    "file_name": "oceanlotus",
    "analysis": null
};