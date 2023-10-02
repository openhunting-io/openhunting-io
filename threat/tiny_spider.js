var threatdata = {
    "name": "Tiny Spider",
    "alias": "Tiny Spider",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "Tiny Spider",
        "names": [
            {
                "name": "Tiny Spider",
                "name-giver": "CrowdStrike"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Financial crime"
        ],
        "first-seen": "2015",
        "description": "(ForcePoint) It all starts with the delivery of a small loader called TinyLoader, an obfuscated executable withsimple\u2013yet powerful \u2013downloader functionality. Upon execution, it will first brute force its own decryption key (a 32-bit value, meaning this takes a fraction of second on modern PCs) before using this to decrypt the main program code.\n\nThe core functionality of the decrypted code is communication with a set of hardcoded C2 servers by IP and port. If the C2 is active, it will provide what is effectively a piece of shellcode, encrypted by another 32-bit constant. This shellcode is not \u2018fire and forget\u2019: it instead sees the loader establish a semi-interactive two-way communication with the C2. Note that the earliest traits and mentions of TinyLoader go back to as far as 2015.",
        "observed-sectors": [
            "Retail"
        ],
        "observed-countries": [
            "Worldwide"
        ],
        "tools": [
            "PinkKite",
            "PsExec",
            "TinyPOS",
            "TinyLoader"
        ],
        "operations": [
            {
                "date": "2017",
                "activity": "A new family of point-of-sale malware, dubbed PinkKite, has been identified by researchers who say the malware is tiny in size, but can delivered a hefty blow to POS endpoints.\nhttps://threatpost.com/new-pos-malware-pinkkite-takes-flight/130428/"
            }
        ],
        "information": [
            "https://www.forcepoint.com/sites/default/files/resources/files/report-tinypos-analysis-en.pdf"
        ],
        "uuid": "ca6c6c94-9ef8-4aa4-8d9e-ad943b9fbe23",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tiny_spider",
    "analysis": null,
    "articles": [],
    "mitre": []
};