var threatdata = {
    "name": "ELMER",
    "alias": "ELMER, Elmost",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2021-01-25",
    "all_data": {
        "tool": "ELMER",
        "names": [
            {
                "name": "ELMER"
            },
            {
                "name": "Elmost"
            }
        ],
        "description": "(FireEye) The exploit documents delivered during the December campaigns dropped a binary containing an embedded variant of a backdoor we refer to as ELMER. ELMER is a non-persistent proxy-aware HTTP backdoor written in Delphi, and is capable of performing file uploads and downloads, file execution, and process and directory listings.\n\nTo retrieve commands, ELMER sends HTTP GET requests to a hard-coded CnC server, and parses the HTTP response packets received from the CnC server for an integer string corresponding to the command that needs to be executed. Table 2 lists the ELMER backdoors observed during the December campaigns.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2015/12/the-eps-awakens-part-two.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0064/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.elmer"
        ],
        "uuid": "b2351a30-d7be-4309-8f5d-9818164c9811",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "elmer",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cybergeeks.tech/a-detailed-analysis-of-elmer-backdoor-used-by-apt16/",
            "date": "2021-01-25",
            "organization": "CYBER GEEKS  All Things Infosec",
            "author": "CyberMasterV",
            "title": "A detailed analysis of ELMER Backdoor used by APT16",
            "categories": [
                "ELMER"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/software/S0064",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Tool description: ELMER",
            "categories": [
                "ELMER"
            ]
        },
        {
            "data_url": "https://attack.mitre.org/groups/G0023",
            "date": "2017-05-31",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "APT16",
            "categories": [
                "ELMER",
                "APT16"
            ]
        },
        {
            "data_url": "https://www.symantec.com/security-center/writeup/2015-122210-5724-99",
            "date": "2015-12-21",
            "organization": "Symantec",
            "author": "Kevin Savage",
            "title": "Backdoor.Elmost",
            "categories": [
                "ELMER"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2015/12/the-eps-awakens-part-two.html",
            "date": "2015-12-21",
            "organization": "FireEye",
            "author": "Ryann Winters",
            "title": "The EPS Awakens - Part 2",
            "categories": [
                "ELMER",
                "IRONHALO",
                "EvilPost"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "elmer",
            "procedure_code": "s0064",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0064",
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
                    "procedure_description": "elmer is capable of performing directory listings.[118]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "elmer is capable of performing process listings.[92]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "elmer uses http for command and control.[111]"
                }
            ]
        }
    ]
};