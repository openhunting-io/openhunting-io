var threatdata = {
    "name": "TA516",
    "alias": "TA516, SmokingDro",
    "category": "APT",
    "type": "-",
    "modified": "2023-01-01",
    "all_data": {
        "actor": "TA516",
        "names": [
            {
                "name": "TA516",
                "name-giver": "Proofpoint"
            },
            {
                "name": "SmokingDro",
                "name-giver": "Proofpoint"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime",
            "Financial gain"
        ],
        "first-seen": "2016",
        "description": "(Proofpoint) This actor typically distributes instances of the SmokeLoader intermediate downloader, which, in turn, downloads additional malware of the actor\u2019s choice -- often banking Trojans. Figure 3 shows a lure document from a November campaign in which TA516 distributed fake resumes with malicious macros that, if enabled, launch a PowerShell script that downloads SmokeLoader. In this instance, we observed SmokeLoader downloading a Monero coinminer. Since the middle of 2017, TA516 has used similar macro-laden documents as well as malicious JavaScript hosted on Google Drive to distribute both Panda Banker and a coinminer executable via SmokeLoader, often in the same campaigns.",
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "AZORult",
            "Chthonic",
            "Smoke Loader",
            "Zeus Panda"
        ],
        "operations": [
            {
                "date": "2016-07",
                "activity": "Threat Actors Using Legitimate PayPal Accounts To Distribute Chthonic Banking Trojan\nhttps://www.proofpoint.com/us/threat-insight/post/threat-actors-using-legitimate-paypal-accounts-to-distribute-chthonic-banking-trojan"
            },
            {
                "date": "2018-07",
                "activity": "New version of AZORult stealer improves loading features, spreads alongside ransomware in new campaign\nhttps://www.proofpoint.com/us/threat-insight/post/new-version-azorult-stealer-improves-loading-features-spreads-alongside"
            },
            {
                "date": "2019-11",
                "activity": "New AZORult campaign abuses popular VPN service to steal cryptocurrency\nhttps://www.kaspersky.com/about/press-releases/2020_new-azorult-campaign-abuses-popular-vpn-service-to-steal-cryptocurrency"
            },
            {
                "date": "2020-02",
                "activity": "AZORult Campaign Adopts Novel Triple-Encryption Technique\nhttps://threatpost.com/azorult-campaign-encryption-technique/152508/"
            },
            {
                "date": "2020-02",
                "activity": "AZORult spreads as a fake ProtonVPN installer\nhttps://securelist.com/azorult-spreads-as-a-fake-protonvpn-installer/96261/"
            }
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/dialing-dollars-coinminers-appearing-malware-components-standalone-threats"
        ],
        "uuid": "24184e42-b04f-4878-8fd3-e53acf7526f2",
        "last-card-change": "2023-01-01",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ta516",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.thaicert.or.th/downloads/files/Threat_Group_Cards_v2.0.pdf",
            "date": "2020-07-08",
            "organization": "ThaiCERT",
            "author": "ThaiCERT",
            "title": "Threat Group Cards: A Threat Actor Encyclopedia",
            "categories": [
                "TA516",
                "TA547",
                "TA554",
                "TA555"
            ]
        }
    ],
    "mitre": []
};