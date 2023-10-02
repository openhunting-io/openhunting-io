var threatdata = {
    "name": "Backoff",
    "alias": "Backoff, Backoff POS",
    "category": "Malware",
    "type": "POS malware, Reconnaissance, Backdoor, Keylogger, Credential stealer, Botnet",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Backoff",
        "names": [
            {
                "name": "Backoff"
            },
            {
                "name": "Backoff POS"
            }
        ],
        "description": "(Trend Micro) Backoff \u2013 a successor of {{Alina POS}} (aka Track) whose variants are known for scanning all running processes to retrieve card track data and gather affected system information, Backoff, uses the same installation technique used in the Alina family of PoS RAM-scraping malware. Based on our research, Backoff implements an updated data search function and drops a watchdog process to ensure that it continuously runs in the system. Discovered by the US Computer Emergency Readiness Team (US CERT), this PoS malware targeted the US. Interestingly, we saw a clear decrease of hits during \u201cdead hours\u201d specifically at 2:00 AM, and an apparent recurring rise of hits at 10:00 AM. This trend follows regular business operation hours wherein PoS devices are more likely to be active and in use. Generally, the hits increase during business hours and decline during off-hours.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/the-evolution-of-point-of-sale-pos-malware",
            "https://www.us-cert.gov/ncas/alerts/TA14-212A",
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.backoff"
        ],
        "uuid": "6dc5bc96-090e-4f1d-904a-bf9d92766450",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "backoff",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/sinkholing-the-backoff-pos-trojan/66305/",
            "date": "2014-08-29",
            "organization": "Kaspersky Labs",
            "author": "Costin Raiu",
            "title": "Sinkholing the Backoff POS Trojan",
            "categories": [
                "Backoff POS"
            ]
        }
    ],
    "mitre": []
};