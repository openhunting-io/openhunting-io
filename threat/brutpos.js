var threatdata = {
    "name": "BrutPOS",
    "alias": "BrutPOS",
    "category": "Malware",
    "type": "POS malware, Backdoor, Credential stealer, Botnet",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "BrutPOS",
        "names": [
            {
                "name": "BrutPOS"
            }
        ],
        "description": "(FireEye) There have been an increasing number of headlines about breaches at retailers in which attackers have made off with credit card data after compromising point-of-sale (POS) terminals. However, what is not commonly discussed is the fact that one third of these breaches are a result of weak default passwords in the remote administration software that is typically installed on these systems. While advanced exploits generate a lot of interest, sometimes it\u2019s defending the simple attacks that can keep your company from the headlines.\n\nIn this report, we document a botnet that we call BrutPOS which uses thousands of compromised computers to scan specified IP address ranges for RDP servers that have weak or default passwords in an effort to locate vulnerable POS systems.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2014/07/brutpos-rdp-bruteforcing-botnet-targeting-pos-systems.html",
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.brutpos"
        ],
        "uuid": "d064434d-c204-495f-843d-11df9afc9c6f",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "brutpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2014/07/brutpos-rdp-bruteforcing-botnet-targeting-pos-systems.html",
            "date": "2014-07-09",
            "organization": "FireEye",
            "author": "Nart Villeneuve",
            "title": "BrutPOS: RDP Bruteforcing Botnet Targeting POS Systems",
            "categories": [
                "BrutPOS"
            ]
        }
    ],
    "mitre": []
};