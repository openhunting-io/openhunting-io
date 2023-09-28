var threatdata = {
    "name": "Retefe",
    "alias": "Retefe, Dok, Tsukuba, Werdlod",
    "category": "Malware",
    "type": "Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Retefe",
        "names": [
            {
                "name": "Retefe"
            },
            {
                "name": "Dok"
            },
            {
                "name": "Tsukuba"
            },
            {
                "name": "Werdlod"
            }
        ],
        "description": "(Check Point) Once OSX/Dok infection is complete, the attackers gain complete access to all victim communication, including communication encrypted by SSL. This is done by redirecting victim traffic through a malicious proxy server.",
        "category": "Malware",
        "type": [
            "Tunneling"
        ],
        "information": [
            "https://blog.checkpoint.com/2017/04/27/osx-malware-catching-wants-read-https-traffic/",
            "https://www.govcert.admin.ch/blog/33/the-retefe-saga",
            "http://www.brycampbell.co.uk/new-blog/2017/4/30/retefe-and-osxdok-one-and-the-same",
            "https://blog.checkpoint.com/2017/07/13/osxdok-refuses-go-away-money/",
            "https://www.proofpoint.com/us/threat-insight/post/retefe-banking-trojan-leverages-eternalblue-exploit-swiss-campaigns",
            "https://blog.avast.com/the-evolution-of-the-retefe-banking-trojan",
            "https://threatpost.com/eternalblue-exploit-used-in-retefe-banking-trojan-campaign/128103/",
            "https://github.com/cocaman/retefe",
            "https://www.govcert.admin.ch/blog/35/reversing-retefe",
            "https://researchcenter.paloaltonetworks.com/2015/08/retefe-banking-trojan-targets-sweden-switzerland-and-japan/",
            "https://github.com/Tomasuh/retefe-unpacker",
            "https://securityintelligence.com/news/retefe-banking-trojan-returns-with-smoke-loader-as-its-intermediate-loader/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0281/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.retefe",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.retefe"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Retefe"
        ],
        "uuid": "7816abd3-afe2-413c-a0f8-5c080d92ed82",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Retefe",
            "malware_alias": null,
            "malware": "apk.retefe",
            "last_update": "2022-01-21 19:00:41",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "c76482802a369e6230d198123ceba32a801c6300fc7af306872a5a642adc445a",
                        "timestamp": "2022-01-21 19:00:41"
                    },
                    {
                        "value": "f44b80767dd5d095a338f4a2ef6f80358b43764b4ec00827922bd7e4b19ecc83",
                        "timestamp": "2022-01-21 19:00:36"
                    },
                    {
                        "value": "fd0e2aab29278cdbb6fc77665adcbf334040b7a0a3bbda315b943009e84618a0",
                        "timestamp": "2022-01-21 19:00:30"
                    },
                    {
                        "value": "8e679f87ba503f3dfad96266ca79de7bfe3092dc6a58c0fe0438f7d4b19f0bbd",
                        "timestamp": "2022-01-21 19:00:27"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-01-21 19:00:41",
    "mitre": [],
    "file_name": "retefe",
    "analysis": null
};