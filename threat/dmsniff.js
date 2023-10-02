var threatdata = {
    "name": "DMSniff",
    "alias": "DMSniff",
    "category": "Malware",
    "type": "POS malware, Backdoor, Credential stealer, Botnet",
    "modified": "2023-08-30",
    "all_data": {
        "tool": "DMSniff",
        "names": [
            {
                "name": "DMSniff"
            }
        ],
        "description": "(Flashpoint) Point-of-sale malware previously only privately sold has been used in breaches of small- and medium-sized businesses in the restaurant and entertainment industries. The malware, known as DMSniff, also uses a domain generation algorithm (DGA) to create lists of command-and-control domains on the fly. This technique is valuable to an attacker because if domains are taken down by law enforcement, technology companies, or hosting providers, the malware can still communicate and receive commands or share stolen data.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.flashpoint-intel.com/blog/dmsniff-pos-malware-actively-leveraged-target-medium-sized-businesses/",
            "https://cis.verint.com/2019/05/07/the-awakening-of-pos-malware-or-has-it-really-been-dormant/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dmsniff"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DMSniff"
        ],
        "uuid": "16da60d7-679d-44e6-b978-5256ee10f428",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dmsniff",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://medium.com/walmartglobaltech/gazavat-expiro-dmsniff-connection-and-dga-analysis-8b965cc0221d",
            "date": "2023-08-30",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "Gazavat / Expiro DMSniff connection and DGA analysis",
            "categories": [
                "DMSniff",
                "Expiro"
            ]
        },
        {
            "data_url": "https://www.flashpoint-intel.com/blog/dmsniff-pos-malware-actively-leveraged-target-medium-sized-businesses/",
            "date": "2019-03-13",
            "organization": "Flashpoint",
            "author": "Jason Reaves",
            "title": "\u2018DMSniff\u2019 POS Malware Actively Leveraged to Target Small-, Medium-Sized Businesses",
            "categories": [
                "DMSniff"
            ]
        }
    ],
    "mitre": []
};