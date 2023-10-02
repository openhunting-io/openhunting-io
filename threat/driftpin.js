var threatdata = {
    "name": "DRIFTPIN",
    "alias": "DRIFTPIN, Toshliph, Spy.Agent.ORM",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2022-04-27",
    "all_data": {
        "tool": "DRIFTPIN",
        "names": [
            {
                "name": "DRIFTPIN"
            },
            {
                "name": "Toshliph"
            },
            {
                "name": "Spy.Agent.ORM"
            }
        ],
        "description": "Driftpin is a small and simple backdoor that enables the attackers to assess the victim. When executed the trojan connects to a C&C server and receives commands to grab screenshots, enumerate running processes and get information about the system and campaign ID.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/06/behind-the-carbanak-backdoor.html",
            "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s05-att&cking-fin7.pdf",
            "https://www.welivesecurity.com/2015/09/08/carbanak-gang-is-back-and-packing-new-guns/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.driftpin"
        ],
        "uuid": "5237bab9-26a6-4f50-9d15-ecd3d9bdb811",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "driftpin",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cert.ssi.gouv.fr/uploads/20220427_NP_TLPWHITE_ANSSI_FIN7.pdf",
            "date": "2022-04-27",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "LE GROUPE CYBERCRIMINEL FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "SQLRat",
                "POWERSOURCE",
                "Andromeda",
                "BABYMETAL",
                "BlackCat",
                "BlackMatter",
                "BOOSTWRITE",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "Dridex",
                "DRIFTPIN",
                "Gameover P2P",
                "MimiKatz",
                "Murofet",
                "Qadars",
                "Ranbyus",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-niagara",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD NIAGARA",
            "categories": [
                "Bateleur",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DRIFTPIN",
                "TinyMet",
                "FIN7"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2018/presentations/cds18-technical-s05-att&cking-fin7.pdf",
            "date": "2018-10-01",
            "organization": "FireEye",
            "author": "Regina Elwell",
            "title": "ATT&CKing FIN7",
            "categories": [
                "Bateleur",
                "BELLHOP",
                "Griffon",
                "ANTAK",
                "POWERPIPE",
                "POWERSOURCE",
                "HALFBAKED",
                "BABYMETAL",
                "Carbanak",
                "Cobalt Strike",
                "DNSMessenger",
                "DRIFTPIN",
                "PILLOWMINT",
                "SocksBot"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/06/behind-the-carbanak-backdoor.html",
            "date": "2017-06-12",
            "organization": "FireEye",
            "author": "Barry Vengerik",
            "title": "Behind the CARBANAK Backdoor",
            "categories": [
                "Carbanak",
                "DRIFTPIN"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2015/09/08/carbanak-gang-is-back-and-packing-new-guns/",
            "date": "2015-09-08",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "Carbanak gang is back and packing new guns",
            "categories": [
                "DRIFTPIN"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "ftp",
            "procedure_code": "s0095",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0095",
            "techniques": [
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1570",
                    "technique_link": "https://attack.mitre.org/techniques/T1570",
                    "technique_name": "lateral tool transfer",
                    "technique_description": "adversaries may transfer tools or other files between systems in a compromised environment. once brought into the victim environment (i.e. ingress tool transfer) files may then be copied from one system to another to stage adversary tools or other files over the course of an operation. adversaries may copy files between internal victim systems to support lateral movement using inherent file sharing protocols such as file sharing over smb/windows admin shares to connected network shares or with authenticated connections via remote desktop protocol.",
                    "procedure_description": "ftp may be abused by adversaries to transfer tools or files between systems within a compromised environment.[16][17]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "ftp may be abused by adversaries to transfer tools or files from an external system into a compromised environment.[186][187]"
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
                    "procedure_description": "ftp may be used to exfiltrate data separate from the main command and control protocol.[20][21]"
                }
            ]
        }
    ]
};