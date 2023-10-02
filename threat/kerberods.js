var threatdata = {
    "name": "Kerberods",
    "alias": "Kerberods",
    "category": "Malware",
    "type": "Dropper, Worm",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Kerberods",
        "names": [
            {
                "name": "Kerberods"
            }
        ],
        "description": "(Trend Micro) Kerberods is responsible for dropping the cryptocurrency miner (khugepageds, detected as Coinminer.Linux.MALXMR.UWEJI) and its rootkit component.\n\nOne particularly interesting aspect of the binary is the way it drops the rootkit.\n\nKerberods also has multiple ways of propagating itself, spreading via SSH and exploiting CVE-2019-1003001 and CVE-2019-1003000.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Worm"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/cve-2019-3396-redux-confluence-vulnerability-exploited-to-deliver-cryptocurrency-miner-with-rootkit/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.kerberods"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:kerberods"
        ],
        "uuid": "b2f59574-e769-4655-8b30-28e7c608bf41",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "kerberods",
    "analysis": null,
    "articles": [],
    "mitre": []
};