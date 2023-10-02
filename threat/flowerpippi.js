var threatdata = {
    "name": "FlowerPippi",
    "alias": "FlowerPippi",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "FlowerPippi",
        "names": [
            {
                "name": "FlowerPippi"
            }
        ],
        "description": "(Trend Micro) Some of FlowerPippi\u2019s variants were packed by a custom packer \u2014the same one that TA505 uses. The unpacked payload is written in C++ and works as backdoor or downloader malware. FlowerPippi doesn\u2019t have an AutoRun function by itself; it is standalone and straightforwardly retrieves the payload.\n\nFlowerPippi collects some of the user\u2019s information, which it sends to the C&C server. When collecting information, FlowerPippi generates the victim ID from the system\u2019s MAC address using the FNV-1a hash algorithm.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/Tech-Brief-Latest-Spam-Campaigns-from-TA505-Now-Using-New-Malware-Tools-Gelup-and-FlowerPippi.pdf"
        ],
        "uuid": "2c0f7f20-b2e6-44a6-8949-5fd6b08e3d92",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "flowerpippi",
    "analysis": null,
    "articles": [],
    "mitre": []
};