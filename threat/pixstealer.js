var threatdata = {
    "name": "PixStealer",
    "alias": "PixStealer, BrazKing",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "PixStealer",
        "names": [
            {
                "name": "PixStealer"
            },
            {
                "name": "BrazKing"
            }
        ],
        "description": "(Check Point) The PixStealer malware\u2019s internal name is \u201cPag Cashback 1.4\u2033. It was distributed on Google Play as a fake PagBank Cashback service and targeted only the Brazilian PagBank.\nThe package name com.pagcashback.beta indicates the application might be in the beta stage.\nPixStealer uses a \u201cless is more\u201d technique: as a very small app with minimum permissions and no connection to a C&C, it has only one function: transfer all of the victim\u2019s funds to an actor-controlled account.\nWith this approach, the malware cannot update itself by communicating with a C&C, or steal and upload any information about the victims, but achieves the very important goal: to stay undetectable.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://research.checkpoint.com/2021/pixstealer-a-new-wave-of-android-banking-trojans-abusing-accessibility-services/",
            "https://securityintelligence.com/posts/brazking-android-malware-upgraded-targeting-brazilian-banks/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.pixstealer"
        ],
        "uuid": "57ed45f3-db97-4bb6-a5f6-cb83a1f0fc16",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pixstealer",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securityintelligence.com/posts/brazking-android-malware-upgraded-targeting-brazilian-banks/",
            "date": "2021-11-17",
            "organization": "IBM",
            "author": "Shahar Tavor",
            "title": "BrazKing Android Malware Upgraded and Targeting Brazilian Banks",
            "categories": [
                "PixStealer"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2021/pixstealer-a-new-wave-of-android-banking-trojans-abusing-accessibility-services/",
            "date": "2021-09-29",
            "organization": "Check Point Research",
            "author": "Israel Wernik",
            "title": "PixStealer: a new wave of Android banking Trojans abusing Accessibility Services",
            "categories": [
                "PixStealer"
            ]
        }
    ],
    "mitre": []
};