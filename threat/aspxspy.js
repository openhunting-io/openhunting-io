var threatdata = {
    "name": "ASPXSpy",
    "alias": "ASPXSpy, ASPXTool",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "ASPXSpy",
        "names": [
            {
                "name": "ASPXSpy"
            },
            {
                "name": "ASPXTool"
            }
        ],
        "description": "ASPXSpy is a Web shell. It has been modified by Threat Group-3390 actors to create the ASPXTool version.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.secureworks.com/research/threat-group-3390-targets-organizations-for-cyberespionage",
            "https://github.com/ysrc/webshell-sample/blob/master/aspx/a91320483df0178eb3cafea830c1bd94585fc896.aspx"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0073/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/php.aspxspy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:AspxSpy"
        ],
        "uuid": "71c01097-281f-4248-aba1-1084ab606b5e",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "ASPXSpy",
            "malware_alias": null,
            "malware": "php.aspxspy",
            "last_update": "2022-10-27 21:48:47",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "2d2219ec82eef8522273f5944f693bed989e8c1adef15b680a5abe183a9ea59b",
                        "timestamp": "2022-10-27 21:48:47"
                    },
                    {
                        "value": "f543d95c9bf56d23342eacf1837e9e09dca11910ba17076f187bf83d2e26059c",
                        "timestamp": "2022-09-12 03:32:03"
                    },
                    {
                        "value": "5cce5f7d9fb1af3ace0712d7d37ffb8c5af2f4150037373c7a683b50085f6a86",
                        "timestamp": "2022-09-12 03:32:01"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-10-27 21:48:47",
    "mitre": [],
    "file_name": "aspxspy",
    "analysis": null
};