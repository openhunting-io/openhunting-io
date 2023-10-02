var threatdata = {
    "name": "Pro-Ocean",
    "alias": "Pro-Ocean",
    "category": "Malware",
    "type": "Miner",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Pro-Ocean",
        "names": [
            {
                "name": "Pro-Ocean"
            }
        ],
        "description": "(Palo Alto) Pro-Ocean uses known vulnerabilities to target cloud applications. In our analysis, we found Pro-Ocean targeting Apache ActiveMQ (CVE-2016-3088), Oracle WebLogic (CVE-2017-10271) and Redis (unsecure instances). In the case that the malware runs in Tencent Cloud or Alibaba Cloud, it will use the exact code of the previous malware to uninstall monitoring agents to avoid detection. Additionally, it attempts to remove other malware and miners including Luoxk, BillGates, {{XMRig}} and Hashfish before installation. Once installed, the malware kills any process that uses the CPU heavily, so that it\u2019s able to use 100% of the CPU and mine Monero efficiently.",
        "category": "Malware",
        "type": [
            "Miner"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/pro-ocean-rocke-groups-new-cryptojacking-malware/",
            "https://seguranca-informatica.pt/new-cryptojacking-malware-called-pro-ocean-is-now-attacking-apache-oracle-and-redis-servers/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.pro_ocean"
        ],
        "uuid": "794ffbdf-64e6-4f00-911d-a359a08c02a5",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pro-ocean",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://seguranca-informatica.pt/new-cryptojacking-malware-called-pro-ocean-is-now-attacking-apache-oracle-and-redis-servers/",
            "date": "2021-02-03",
            "organization": "Seguranca Informatica",
            "author": "Pedro Tavares",
            "title": "New cryptojacking malware called Pro-Ocean is now attacking Apache, Oracle and Redis servers",
            "categories": [
                "Pro-Ocean"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/pro-ocean-rocke-groups-new-cryptojacking-malware/",
            "date": "2021-01-28",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Aviv Sasson",
            "title": "Pro-Ocean: Rocke Group\u2019s New Cryptojacking Malware",
            "categories": [
                "Pro-Ocean"
            ]
        }
    ],
    "mitre": []
};