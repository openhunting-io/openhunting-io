var threatdata = {
    "name": "ReverseRAT",
    "alias": "ReverseRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "ReverseRAT",
        "names": [
            {
                "name": "ReverseRAT"
            }
        ],
        "description": "(Talos) Another previously undiscovered C#-based reverse shell that also monitors removable drives. It is based on {{CetaRAT}}.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://s3.amazonaws.com/talos-intelligence-site/production/document_files/files/000/095/591/original/062521_SideCopy_%281%29.pdf?1625657388",
            "https://www.seqrite.com/documents/en/white-papers/Whitepaper-OperationSideCopy.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.reverse_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/global/pulses?q=tag:reverserat"
        ],
        "uuid": "c5f9f121-65c4-471d-a300-1296f3fe9619",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ReverseRAT",
            "malware_alias": null,
            "malware": "win.reverse_rat",
            "last_update": "2023-02-01 08:36:07",
            "tags": [
                "ReverseRAT",
                "RAT"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "185.174.102.54:443",
                        "timestamp": "2023-02-01 08:36:07"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "0baa1d0cc20d80fa47eeb764292b9e98",
                        "timestamp": "2023-02-01 08:35:34"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-02-01 08:36:07",
    "mitre": [],
    "file_name": "reverserat",
    "analysis": null
};