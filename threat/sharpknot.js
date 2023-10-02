var threatdata = {
    "name": "SHARPKNOT",
    "alias": "SHARPKNOT, Bitrep",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "SHARPKNOT",
        "names": [
            {
                "name": "SHARPKNOT"
            },
            {
                "name": "Bitrep"
            }
        ],
        "description": "(US-CERT) This file is a malicious 32-bit Windows executable. Analysis indicates the primary purpose of this application is to destroy a compromised Windows system by overwriting and deleting the Master Boot Record (MBR) on the victim's system and deleting files on network mapped shares as well as physically attached storage devices.\n\nThe malware must be executed from a command line using any alphanumeric character or string as an argument. Once executed, themalware first attempts to disable the 'System Event Notification' and 'Alerter' services.\n\nNote: The Alerter service is present in Windows XP and Windows 2003, which are no longer supported by Microsoft.  Current operating systems supported by Microsoft do not run the Alerter service.\n\nNext, the malware overwrites the MBR, displaying a status in the command (CMD) window.  If the malware is able to overwrite the MBR, an 'OK' status is displayed in the CMD window. If the malware is unable to overwrite the MBR, a 'Fail' status is displayed.\n\nAfter the MBR is overwritten, the malware attempts to gain access to physical and network drives attached to the victim's system and recursively enumerate through the drive\u2019s contents. When the malware identifies a file, it overwrites the file's contents with NULL bytes, renames the file with a randomly generated file name, then deletes the file, making forensic recovery impossible.\n\nIf the malware is able to overwrite, rename and delete the file, the CMD window will display a 'Break>' status.  If the malware is only able to delete the file, the CMD window will display a 'Del>' status.\n\nOnce the malware has completed deleting files, the system is rebooted. If the malware has executed successfully, the system is rendered inoperative.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://www.us-cert.gov/sites/default/files/publications/MAR-10135536.11.WHITE.pdf",
            "https://eromang.zataz.com/tag/agentbase-exe/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sharpknot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:SHARPKNOT"
        ],
        "uuid": "c233247d-9333-41c5-ac32-8910a5f357e4",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sharpknot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.us-cert.gov/sites/default/files/publications/MAR-10135536.11.WHITE.pdf",
            "date": "2018-03-09",
            "organization": "NCCIC",
            "author": "NCCIC",
            "title": "Malware Analysis Report Sharpknot",
            "categories": [
                "SHARPKNOT"
            ]
        },
        {
            "data_url": "https://eromang.zataz.com/tag/agentbase-exe/",
            "date": "2013-04-02",
            "organization": "",
            "author": "Eric Romang",
            "title": "Dark South Korea Total War Review",
            "categories": [
                "SHARPKNOT"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "arp",
            "procedure_code": "s0099",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0099",
            "techniques": [
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "arp can be used to display a host's arp cache, which may include address resolutions for remote systems.[14][15]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "arp can be used to display arp configuration information on the host.[22]"
                }
            ]
        }
    ]
};