var threatdata = {
    "name": "XMRig",
    "alias": "XMRig",
    "category": "Tools",
    "type": "Miner",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "XMRig",
        "names": [
            {
                "name": "XMRig"
            }
        ],
        "description": "(FireEye) XMRIG is an open-source Monero cryptocurrency miner. It has variants for CPU, NVIDIA GPU, and AMD GPU mining.",
        "category": "Tools",
        "type": [
            "Miner"
        ],
        "information": [
            "https://paper.bobylive.com/Security/APT_Report/APT-41.pdf",
            "https://securelist.com/miner-xmrig/99151/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xmrig"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:XMRig"
        ],
        "uuid": "d713097f-61f3-4e1a-a1a0-c542a23a0999",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "xmrig",
            "malware_alias": null,
            "malware": "win.xmrig",
            "last_update": "2023-11-17 14:55:26",
            "tags": [
                "POST"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://135.181.11.36/api/endpoint.php",
                        "timestamp": "2023-11-17 14:55:26"
                    },
                    {
                        "value": "http://77.105.147.158:5001/upload/",
                        "timestamp": "2023-08-27 20:12:23"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-17 14:55:26",
    "file_name": "xmrig",
    "analysis": null,
    "articles": [],
    "mitre": []
};