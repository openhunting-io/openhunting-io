var threatdata = {
    "name": "Cutwail",
    "alias": "Cutwail, Pushdo",
    "category": "Malware",
    "type": "Botnet, Downloader",
    "modified": "2021-04-20",
    "all_data": {
        "tool": "Cutwail",
        "names": [
            {
                "name": "Cutwail"
            },
            {
                "name": "Pushdo"
            }
        ],
        "description": "Pushdo is usually classified as a 'downloader' trojan - meaning its true purpose is to download and install additional malicious software. There are dozens of downloader trojan families out there, but Pushdo is actually more sophisticated than most, but that sophistication lies in the Pushdo control server rather than the trojan.",
        "category": "Malware",
        "type": [
            "Botnet",
            "Downloader"
        ],
        "information": [
            "https://www.blueliv.com/research/tracking-the-footproints-of-pushdo-trojan/",
            "https://www.trendmicro.de/cloud-content/us/pdfs/business/white-papers/wp_study-of-pushdo-cutwail-botnet.pdf",
            "https://www.secureworks.com/research/pushdo",
            "http://malware-traffic-analysis.net/2017/04/03/index2.html",
            "https://securityintelligence.com/posts/dridex-campaign-propelled-by-cutwail-botnet-and-powershell/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cutwail",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pushdo"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:cutwail"
        ],
        "uuid": "bfadc267-6096-4807-aa1d-2f048fe81a8f",
        "last-card-change": "2021-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Cutwail",
            "malware_alias": null,
            "malware": "win.cutwail",
            "last_update": "2022-11-10 11:06:37",
            "tags": [
                "cutwail",
                "Cutwail",
                "maldoc"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "a7c46f5427a76c8e4338ea9fdf0056c8",
                        "timestamp": "2022-11-10 11:06:37"
                    },
                    {
                        "value": "83abd103d768757014043bc25a2e73ab",
                        "timestamp": "2022-11-02 10:45:48"
                    },
                    {
                        "value": "4e52c38e4a7aa11b53b1432f66383a5f",
                        "timestamp": "2022-08-18 10:10:55"
                    },
                    {
                        "value": "eae2fa763b7c00ca4b7d5f57c5d3ea0d",
                        "timestamp": "2022-08-03 11:44:25"
                    },
                    {
                        "value": "9737703391db4a58cead1e1525719cb0",
                        "timestamp": "2022-07-20 10:23:10"
                    },
                    {
                        "value": "19dba59c1cd8667fd8ede1e0ef7a2e71",
                        "timestamp": "2022-07-16 21:54:08"
                    },
                    {
                        "value": "18625572bfa5c43e880823c53bed502c",
                        "timestamp": "2022-06-29 09:28:33"
                    },
                    {
                        "value": "cf850d35ca73d2f7565ff71628c1b620",
                        "timestamp": "2022-06-14 11:10:27"
                    },
                    {
                        "value": "c8cd88ef38e0c74a74e255df1cfb35ab",
                        "timestamp": "2022-06-07 13:40:19"
                    },
                    {
                        "value": "14542a3509c7fbc2888a5962ee69e07c",
                        "timestamp": "2022-03-22 09:59:08"
                    },
                    {
                        "value": "44bbbdac3334b73c0f8773202d36cc60",
                        "timestamp": "2022-02-01 13:27:32"
                    },
                    {
                        "value": "ac50c89f3656c1386a6c43ca01a6156d",
                        "timestamp": "2022-01-26 09:28:28"
                    },
                    {
                        "value": "4e8ec74a93b831a92a1b016722e79365",
                        "timestamp": "2022-01-24 09:56:29"
                    },
                    {
                        "value": "4cacbcdb4b03ddc0f1af39b11acbda32",
                        "timestamp": "2021-05-19 19:40:01"
                    },
                    {
                        "value": "38eee9f09cc38dad8af2cff7e9be0db2",
                        "timestamp": "2021-04-07 09:02:28"
                    },
                    {
                        "value": "47f7006dc586d532962011c15595100c",
                        "timestamp": "2021-03-28 09:10:48"
                    }
                ],
                "domain": [
                    {
                        "value": "dokpio.com",
                        "timestamp": "2022-07-25 13:31:52"
                    },
                    {
                        "value": "investprides.com",
                        "timestamp": "2022-06-20 13:34:29"
                    },
                    {
                        "value": "managmentoria.com",
                        "timestamp": "2022-05-10 14:23:35"
                    },
                    {
                        "value": "euconsalting.com",
                        "timestamp": "2022-02-07 14:38:30"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-11-10 11:06:37",
    "mitre": [],
    "file_name": "cutwail",
    "analysis": null
};