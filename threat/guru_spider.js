var threatdata = {
    "name": "Guru Spider",
    "alias": "Guru Spider",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Guru Spider",
        "names": [
            {
                "name": "Guru Spider",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "Russia"
        ],
        "motivation": [
            "Financial gain"
        ],
        "first-seen": "2014",
        "description": "(Forcepoint) Quant is not new or a very novel piece of malware: we covered the basics of it last year when it was first advertised by its creator, MrRaiX, and began to emerge in the wild. However, analysis of the newly obtained samples quickly revealed some differences to the previously documented Quant-based Locky and Pony campaigns. Further, these newest samples all appeared to attempt to download the same payload files from the C2 server after their initial connection.",
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "Madness PRO DDoS",
            "MBS BTC Stealer",
            "MKL Pro Keylogger",
            "Quant Loader",
            "Z*Stealer"
        ],
        "operations": [
            {
                "date": "2016-09",
                "activity": "On September 1, 2016 a new trojan downloader became available to purchase on various Russian underground forums. Named 'Quant Loader' by its creator, the downloader has already been used to distribute the Locky Zepto crypto-ransomware, and Pony (aka Fareit) malware families.\nhttps://www.forcepoint.com/blog/x-labs/locky-distributor-uses-newly-released-quant-loader-sold-russian-underground"
            },
            {
                "date": "2018-03",
                "activity": "QuantLoader is a Trojan downloader that has been available for sale on underground forums for quite some time now. It has been used in campaigns serving a range of malware, including ransomware, Banking Trojans, and RATs. The campaign that we are going to analyze is serving a BackDoor.\nhttps://blog.malwarebytes.com/threat-analysis/2018/03/an-in-depth-malware-analysis-of-quantloader/"
            },
            {
                "date": "2018-03",
                "activity": "Barracuda Threat Spotlight: New URL File Outbreak Could be a Ransomware Attempt\nhttps://blog.barracuda.com/2018/04/10/barracuda-threat-spotlight-new-url-file-outbreak-could-be-a-ransomware-attempt/"
            }
        ],
        "information": [
            "https://www.forcepoint.com/blog/x-labs/locky-distributor-uses-newly-released-quant-loader-sold-russian-underground",
            "https://www.forcepoint.com/zh-hant/blog/security-labs/quantize-or-capitalize"
        ],
        "uuid": "37981739-ee01-4d4f-aa5f-aa1c76d23b0d",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "guru_spider",
    "analysis": null,
    "articles": [],
    "mitre": []
};