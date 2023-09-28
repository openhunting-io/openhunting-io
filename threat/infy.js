var threatdata = {
    "name": "Infy",
    "alias": "Infy, Foudre",
    "category": "Malware",
    "type": "Reconnaissance",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Infy",
        "names": [
            {
                "name": "Infy"
            },
            {
                "name": "Foudre"
            }
        ],
        "description": "(Palo Alto) The malware connects to the C2 every five minutes using HTTP, posting:\n\n<computer name>\n<user name>\ndn = n1\nver = 30\nlfolder= f\ncpuid=\nmachineguid (from hklm\\SOFTWARE\\Microsoft\\Cryptography\\machineguid)\ntt= time",
        "category": "Malware",
        "type": [
            "Reconnaissance"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
            "https://www.intezer.com/prince-of-persia-the-sands-of-foudre/",
            "https://researchcenter.paloaltonetworks.com/2017/08/unit42-prince-persia-ride-lightning-infy-returns-foudre/",
            "https://github.com/pan-unit42/iocs/blob/master/prince_of_persia/hashes.csv"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.infy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:infy"
        ],
        "uuid": "cfe90b10-0ec9-47d0-9774-a163fd3b7321",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Infy",
            "malware_alias": "Foudre",
            "malware": "win.infy",
            "last_update": "2021-08-12 10:27:25",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "7cfe6b3d43caf0e6d990caf7b778d9c68e8e95f9ea6a44f9fefb46be5476c083",
                        "timestamp": "2021-07-30 22:44:44"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "16adbfb16dd14a5aa74c1f56545643c3",
                        "timestamp": "2021-08-12 10:27:25"
                    },
                    {
                        "value": "85b1fd8784862fa44a5076debf0c44d5",
                        "timestamp": "2021-08-12 10:27:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-08-12 10:27:25",
    "mitre": [],
    "file_name": "infy",
    "analysis": null
};