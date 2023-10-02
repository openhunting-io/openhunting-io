var threatdata = {
    "name": "CORALDECK",
    "alias": "CORALDECK",
    "category": "Malware",
    "type": "Exfiltration, Dropper",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "CORALDECK",
        "names": [
            {
                "name": "CORALDECK"
            }
        ],
        "description": "(FireEye) CORALDECK is an exfiltration tool that searches for specified files and exfiltrates them in password protected archives using hardcoded HTTP POST headers. CORALDECK has been observed dropping and using Winrar to exfiltrate data in password protected RAR files as well as WinImage and zip archives.",
        "category": "Malware",
        "type": [
            "Exfiltration",
            "Dropper"
        ],
        "information": [
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt_APT37.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0212/"
        ],
        "uuid": "bb2028cf-4303-4bc2-8dc7-3499f3d2f705",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "coraldeck",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "coraldeck",
            "procedure_code": "s0212",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0212",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "coraldeck searches for specified files.[84]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1560.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1560/001",
                    "technique_name": "archive collected data : archive via utility",
                    "technique_description": "adversaries may use utilities to compress and/or encrypt collected data prior to exfiltration. many utilities include functionalities to compress, encrypt, or otherwise package data into a format that is easier/more secure to transport.",
                    "procedure_description": "coraldeck has created password-protected rar, winimage, and zip archives to be exfiltrated.[23]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/003",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over unencrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an un-encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "coraldeck has exfiltrated data in http post headers.[15]"
                }
            ]
        }
    ]
};