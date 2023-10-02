var threatdata = {
    "name": "RCLONE",
    "alias": "RCLONE, Rclone",
    "category": "Tools",
    "type": "Downloader, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "RCLONE",
        "names": [
            {
                "name": "RCLONE"
            },
            {
                "name": "Rclone"
            }
        ],
        "description": "Rclone is a command line program for syncing files with cloud storage services such as Dropbox, Google Drive, Amazon S3, and MEGA. Rclone has been used in a number of ransomware campaigns, including those associated with the {{Conti}} and {{DarkSide}} Ransomware-as-a-Service operations.",
        "category": "Tools",
        "type": [
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://rclone.org",
            "https://www.fireeye.com/blog/threat-research/2021/04/unc2447-sombrat-and-fivehands-ransomware-sophisticated-financial-threat.html",
            "https://redcanary.com/blog/rclone-mega-extortion/",
            "https://research.nccgroup.com/2021/05/27/detecting-rclone-an-effective-tool-for-exfiltration/",
            "https://thedfirreport.com/2021/11/29/continuing-the-bazar-ransomware-story/",
            "https://unit42.paloaltonetworks.com/darkside-ransomware/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1040/"
        ],
        "uuid": "80a8ce0c-d799-4dcd-b2e4-c78c67687b5f",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rclone",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "rclone",
            "procedure_code": "s1040",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1040",
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
                    "procedure_description": "rclone can list files and directories with the ls, lsd, and lsl commands.[245]"
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
                    "procedure_description": "rclone can compress files using gzip prior to exfiltration.[65]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1030",
                    "technique_link": "https://attack.mitre.org/techniques/T1030",
                    "technique_name": "data transfer size limits",
                    "technique_description": "an adversary may exfiltrate data in fixed size chunks instead of whole files or limit packet sizes below certain thresholds. this approach may be used to avoid triggering network data transfer threshold alerts.",
                    "procedure_description": "the rclone \"chunker\" overlay supports splitting large files in smaller chunks during upload to circumvent size limits.[14][3]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1048.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1048/002",
                    "technique_name": "exfiltration over alternative protocol : exfiltration over asymmetric encrypted non-c2 protocol",
                    "technique_description": "adversaries may steal data by exfiltrating it over an asymmetrically encrypted network protocol other than that of the existing command and control channel. the data may also be sent to an alternate network location from the main command and control server.",
                    "procedure_description": "rclone can exfiltrate data over sftp or https via webdav.[2]"
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
                    "procedure_description": "rclone can exfiltrate data over ftp or http, including http via webdav.[28]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1567.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1567/002",
                    "technique_name": "exfiltration over web service : exfiltration to cloud storage",
                    "technique_description": "adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel. cloud storage services allow for the storage, edit, and retrieval of data from a remote cloud storage server over the internet.",
                    "procedure_description": "rclone can exfiltrate data to cloud storage services such as dropbox, google drive, amazon s3, and mega.[23][3]"
                }
            ]
        }
    ]
};