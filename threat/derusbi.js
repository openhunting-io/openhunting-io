var threatdata = {
    "name": "Derusbi",
    "alias": "Derusbi, PHOTO",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Derusbi",
        "names": [
            {
                "name": "Derusbi"
            },
            {
                "name": "PHOTO"
            }
        ],
        "description": "(Palo Alto) Derusbi is a backdoor Trojan believed to be used among a small group of attackers, which includes the Rancor group. This particular sample is a loader that loads an encrypted payload for its functionality. This DLL requires the loading executable to include a 32-byte key on the command line to be able to decrypt the embedded payload, which unfortunately we do not have. Even though we don\u2019t have the decryption key or loader, we have uncovered some interesting artifacts.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/rancor-cyber-espionage-group-uses-new-custom-malware-to-attack-southeast-asia/",
            "http://www.novetta.com/wp-content/uploads/2014/11/Derusbi.pdf",
            "https://www.threatconnect.com/the-anthem-hack-all-roads-lead-to-china/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0021/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.derusbi"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Derusbi"
        ],
        "uuid": "70e712fe-753d-4fdb-9da3-4b760cab51ee",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Derusbi",
            "malware_alias": "PHOTO",
            "malware": "win.derusbi",
            "last_update": "2021-07-10 21:52:39",
            "tags": [
                "derusbi"
            ],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "8af282aa37b9eff8ec3f9b9f9c275e1f",
                        "timestamp": "2021-07-10 21:52:39"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-07-10 21:52:39",
    "mitre": [],
    "file_name": "derusbi",
    "analysis": null
};