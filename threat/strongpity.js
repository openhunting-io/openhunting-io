var threatdata = {
    "name": "StrongPity",
    "alias": "StrongPity",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "StrongPity",
        "names": [
            {
                "name": "StrongPity"
            }
        ],
        "description": "Trojanized WinRAR installer.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://securelist.com/on-the-strongpity-waterhole-attacks-targeting-italian-and-belgian-encryption-users/76147/",
            "https://www.welivesecurity.com/2017/12/08/strongpity-like-spyware-replaces-finfisher/",
            "https://citizenlab.ca/2018/03/bad-traffic-sandvines-packetlogic-devices-deploy-government-spyware-turkey-syria/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0491/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.strongpity"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:StrongPity"
        ],
        "uuid": "3c0765e5-1f2b-4d96-81a2-f4f7f9cc6198",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "StrongPity",
            "malware_alias": null,
            "malware": "win.strongpity",
            "last_update": "2021-03-14 12:06:42",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "0f609dd490b21c85e9c8d1db8995e791",
                        "timestamp": "2021-03-14 12:06:42"
                    },
                    {
                        "value": "d3e206ec0c7e2bb4dbe3897607e14722",
                        "timestamp": "2021-03-11 20:39:41"
                    },
                    {
                        "value": "62eab80792db53bf945ff0f835790d36",
                        "timestamp": "2021-03-11 20:39:41"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-03-14 12:06:42",
    "mitre": [],
    "file_name": "strongpity",
    "analysis": null
};