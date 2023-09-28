var threatdata = {
    "name": "Griffon",
    "alias": "Griffon, Harpy",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Griffon",
        "names": [
            {
                "name": "Griffon"
            },
            {
                "name": "Harpy"
            }
        ],
        "description": "(Kaspersky) The GRIFFON implant is a lightweight JScript validator-style implant without any persistence mechanism. The malware is designed for receiving modules to be executed in-memory and sending the results to C2s. We were able to obtain four different modules during the investigation.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://securelist.com/fin7-5-the-infamous-cybercrime-rig-fin7-continues-its-activities/90703/",
            "https://www.africacybersecurityconference.com/document/CrowdStrike_GTR_2019.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0417/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.griffon"
        ],
        "uuid": "5be696af-2b6d-4673-a2c4-81a80023fb67",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Griffon",
            "malware_alias": "Harpy",
            "malware": "js.griffon",
            "last_update": "2021-09-14 13:11:48",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "caa7667bfdbcb04ceb9d81df93fe805dfe4ac8a04b9dd3eaab7b5f7c87c4fc9c",
                        "timestamp": "2021-09-14 13:11:48"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "f1680aa55c88220bcf83e24d89628cc9",
                        "timestamp": "2021-09-03 09:32:40"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-09-14 13:11:48",
    "mitre": [],
    "file_name": "griffon",
    "analysis": null
};