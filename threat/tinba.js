var threatdata = {
    "name": "Tinba",
    "alias": "Tinba, Tiny Banker, TinyBanker, Tina, Illi, Zusy",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Tinba",
        "names": [
            {
                "name": "Tinba"
            },
            {
                "name": "Tiny Banker"
            },
            {
                "name": "TinyBanker"
            },
            {
                "name": "Tina"
            },
            {
                "name": "Illi"
            },
            {
                "name": "Zusy"
            }
        ],
        "description": "(Trend Micro) Tinba is a small data stealing Trojan-banker. It hooks into browsers and steals login data, as well as sniffs network traffic. As with several other sophisticated banker-Trojans, it also uses Man in the Browser (MiTB) tricks and Web injects to change the look and feel of certain Web pages. Its purpose is to circumvent Two Factor Authentication (2FA) or to trick the infected user into providing additional sensitive data such as credit card data.\n\nTinba is the smallest Trojan-banker CSIS has encountered to date, and it belongs to a new family of malware. The code is approximately 20 KB in size (including configuration and Web injects) and is simple without any packing or advanced encryption. Analyzed samples show that the antivirus detection is low.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp_w32-tinba-tinybanker.pdf",
            "https://labsblog.f-secure.com/2016/01/18/analyzing-tinba-configuration-data/",
            "http://www.theregister.co.uk/2012/06/04/small_banking_trojan/",
            "https://securityintelligence.com/tinba-trojan-sets-its-sights-on-romania/",
            "https://securityblog.switch.ch/2015/06/18/so-long-and-thanks-for-all-the-domains/",
            "http://contagiodump.blogspot.com/2012/06/amazon.html",
            "https://www.zscaler.com/blogs/research/look-recent-tinba-banking-trojan-variant",
            "http://stopmalvertising.com/malware-reports/mini-analysis-of-the-tinybanker-tinba.html",
            "http://securityintelligence.com/tinba-malware-reloaded-and-attacking-banks-around-the-world/",
            "https://github.com/nyx0/Tinba"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tinba"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:TinyBanker"
        ],
        "uuid": "b3b23d2b-3498-486f-a47f-e24ce93ed5fd",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "tinba",
    "analysis": null
};