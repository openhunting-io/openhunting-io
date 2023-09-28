var threatdata = {
    "name": "FlawedGrace",
    "alias": "FlawedGrace, GraceWire",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "FlawedGrace",
        "names": [
            {
                "name": "FlawedGrace"
            },
            {
                "name": "GraceWire"
            }
        ],
        "description": "(Proofpoint) FlawedGrace is a remote access trojan (RAT) named after debugging artifacts (class names) left in the analyzed sample.\n\nThe malware is written in C++. It is a very large program and makes extensive use of object-oriented and multithreaded programming techniques. This makes reverse engineering and debugging the malware both difficult and time consuming. The coding style and techniques suggest that FlawedGrace was not written by the same developer as {{ServHelper}}.\n\nFlawedGrace uses a complicated binary protocol for its command and control. It can use a configurable port for communications, but all samples we have observed to date have used port 443. Figure 8 shows an example of the first four messages between an infected system and C&C server.\n\nFlawedGrace also uses a series of commands, provided below for reference:\n\u2022 target_remove\n\u2022 target_update\n\u2022 target_reboot\n\u2022 target_module_load\n\u2022 target_module_load_external\n\u2022 target_module_unload\n\u2022 target_download\n\u2022 target_upload\n\u2022 target_rdp\n\u2022 target_passwords\n\u2022 target_servers\n\u2022 target_script\n\u2022 destroy_os\n\u2022 desktop_stat",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/servhelper-and-flawedgrace-new-malware-introduced-ta505",
            "https://www.msreverseengineering.com/blog/2019/1/14/a-quick-solution-to-an-ugly-reverse-engineering-problem"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0383/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.flawedgrace"
        ],
        "uuid": "2e3f838e-197c-412f-a98d-4b3ad248baa6",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "FlawedGrace",
            "malware_alias": "GraceWire",
            "malware": "win.flawedgrace",
            "last_update": "2021-10-20 12:13:33",
            "tags": [],
            "ioc": {
                "domain": [
                    {
                        "value": "cdn-wfs-nspod.com",
                        "timestamp": "2021-10-20 12:13:33"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-10-20 12:13:33",
    "mitre": [],
    "file_name": "flawedgrace",
    "analysis": null
};