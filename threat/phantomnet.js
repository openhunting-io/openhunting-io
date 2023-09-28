var threatdata = {
    "name": "PhantomNet",
    "alias": "PhantomNet, SManager",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Loader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "PhantomNet",
        "names": [
            {
                "name": "PhantomNet"
            },
            {
                "name": "SManager"
            }
        ],
        "description": "(ESET) The backdoor was named Smanager_ssl.DLL by its developers but we use PhantomNet, as that was the project name used in an older version of this backdoor. This most recent version was compiled on the 26th of April 2020, almost two months before the supply-chain attack. In addition to Vietnam, we have seen victims in the Philippines, but unfortunately we did not uncover the delivery mechanism in those cases.\nThis backdoor is quite simple and most of the malicious capabilities are likely deployed through additional plugins. It can retrieve the victim\u2019s proxy configuration and use it to reach out to the command and control (C&C) server. This shows that the targets are likely to be working in a corporate network.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/12/17/operation-signsight-supply-chain-attack-southeast-asia/",
            "https://insight-jp.nttsecurity.com/post/102glv5/pandas-new-arsenal-part-3-smanager",
            "https://0xthreatintel.medium.com/reversing-apt-tool-smanager-unpacked-d413a04961c4",
            "https://0xthreatintel.medium.com/how-to-unpack-smanager-apt-tool-cb5909819214"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.smanager"
        ],
        "uuid": "41b6f923-e7a8-4e88-bbea-1894be386ed4",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "SManager",
            "malware_alias": "PhantomNet",
            "malware": "win.smanager",
            "last_update": "2022-07-13 06:36:14",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "840c2aa0d5e5217bc73e2607a74ec2f979c76f77cae2a70dd9d87ad49adda922",
                        "timestamp": "2022-07-13 06:36:14"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-13 06:36:14",
    "mitre": [],
    "file_name": "phantomnet",
    "analysis": null
};