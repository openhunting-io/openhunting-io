var threatdata = {
    "name": "TinyPOS",
    "alias": "TinyPOS",
    "category": "Malware",
    "type": "POS malware, Backdoor, Info stealer",
    "modified": "2020-05-26",
    "all_data": {
        "tool": "TinyPOS",
        "names": [
            {
                "name": "TinyPOS"
            }
        ],
        "description": "(Forcepoint) It all starts with the delivery of a small loader called {{TinyLoader}}, an obfuscated executable withsimple -yet powerful- downloader functionality. Upon execution, it will first brute force its own decryption key (a 32-bit value, meaning this takes a fraction of second on modern PCs) before using this to decrypt the main program code.\n\nCode-wise the POS component is very similar to the loader, except there is no additional encryption, as whenever it is delivered the operators are almost certain -due to the pre-filtering above- that a valuable target has been identified.\nThis component works like any other POS memory scraper: opening processes based on either a predefined black or whitelist of process names, creating a new thread for each matching one and scanning their full memory range for Track 1 and Track 2 credit card data. If such data is found, first it will be verified by the Luhn algorithm for integrity, then it will be encrypted by a pre-defined key (another 32 or 64-bit value stored in the POS binary itself) and either sent to yet another C2 identified, again, by IP/port combination or it will be saved locally.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.forcepoint.com/sites/default/files/resources/files/report-tinypos-analysis-en.pdf",
            "https://blog.talosintelligence.com/2019/11/c2-with-it-all.html",
            "https://www.carbonblack.com/2020/05/21/tau-technical-report-new-attack-combines-tinypos-with-living-off-the-land-techniques-for-scraping-credit-card-data/",
            "https://github.com/carbonblack/tau-tools/tree/master/malware_specific/TinyPOS"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Tinypos"
        ],
        "uuid": "2698c733-ab93-4b51-acc8-3265209d0005",
        "last-card-change": "2020-05-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tinypos",
    "analysis": null,
    "articles": [],
    "mitre": []
};