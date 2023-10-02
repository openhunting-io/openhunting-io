var threatdata = {
    "name": "PowerStallion",
    "alias": "PowerStallion",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "PowerStallion",
        "names": [
            {
                "name": "PowerStallion"
            }
        ],
        "description": "(ESET) PowerStallion is a lightweight PowerShell backdoor using Microsoft OneDrive, a storage service in the cloud, as C&C server. The credentials are hardcoded at the beginning of the script.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2019/05/29/turla-powershell-usage/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0393/"
        ],
        "uuid": "8ee24910-db8b-454e-a322-aa5a37c51aa9",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powerstallion",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "powerstallion",
            "procedure_code": "s0393",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0393",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/001",
                    "technique_name": "command and scripting interpreter : powershell",
                    "technique_description": "adversaries may abuse powershell commands and scripts for execution. powershell is a powerful interactive command-line interface and scripting environment included in the windows operating system. adversaries can use powershell to perform a number of actions, including discovery of information and execution of code. examples include the start-process cmdlet which can be used to run an executable and the invoke-command cmdlet which runs a command locally or on a remote computer (though administrator permissions are required to use powershell to connect to remote systems).",
                    "procedure_description": "powerstallion uses powershell loops to iteratively check for available commands in its onedrive c2 server.[184]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/006",
                    "technique_name": "indicator removal : timestomp",
                    "technique_description": "adversaries may modify file time attributes to hide new or changes to existing files. timestomping is a technique that modifies the timestamps of a file (the modify, access, create, and change times), often to mimic files that are in the same folder. this is done, for example, on files that have been modified or created by the adversary so that they do not appear conspicuous to forensic investigators or file analysis tools.",
                    "procedure_description": "powerstallion modifies the mac times of its local log files to match that of the victim's desktop.ini file.[44]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "powerstallion uses a xor cipher to encrypt command output written to its onedrive c2 server.[256]"
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
                    "procedure_description": "powerstallion has been used to monitor process lists.[206]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1102.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1102/002",
                    "technique_name": "web service : bidirectional communication",
                    "technique_description": "adversaries may use an existing, legitimate external web service as a means for sending commands to and receiving output from a compromised system over the web service channel. compromised systems may leverage popular websites and social media to host command and control (c2) instructions. those infected systems can then send the output from those commands back over that web service channel. the return traffic may occur in a variety of ways, depending on the web service being utilized. for example, the return traffic may take the form of the compromised system posting a comment on a forum, issuing a pull request to development project, updating a document hosted on a web service, or by sending a tweet.",
                    "procedure_description": "powerstallion uses microsoft onedrive as a c2 server via a network drive mapped with net use.[39]"
                }
            ]
        }
    ]
};