var threatdata = {
    "name": "NcFTPPut",
    "alias": "NcFTPPut",
    "category": "Tools",
    "type": "-",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "NcFTPPut",
        "names": [
            {
                "name": "NcFTPPut"
            }
        ],
        "description": "NcFTP Client (also known as just NcFTP) is a set of FREE application programs implementing the File Transfer Protocol (FTP).",
        "category": "Tools",
        "information": [
            "https://www.ncftp.com/ncftp/"
        ],
        "uuid": "65c83023-06f6-4d42-b7d1-9530d78f7c52",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ncftpput",
    "analysis": null,
    "articles": [],
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