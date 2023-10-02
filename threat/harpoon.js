var threatdata = {
    "name": "Harpoon",
    "alias": "Harpoon, Garpun",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Harpoon",
        "names": [
            {
                "name": "Harpoon"
            },
            {
                "name": "Garpun"
            }
        ],
        "description": "(Qihoo 360) [Google translated] Harpoon is a backdoor program for specific users independently developed by the Golden Eagle (APT-C-34) organization, which is implemented using Delphi. We obtained the instruction manual of the backdoor. The backdoor has powerful information collection functions, including screen captures, audio recordings, clipboard records, keyboard records, and stealing files with specific extensions.\n\nThe STS Harpoon program provides the following functions:\n\u2022 Keylogger\n\u2022 Clipboard record\n\u2022 Take screenshots of the active window on the desktop of the target computer at predetermined intervals;\n\u2022 List the contents of a given directory on the hard disk of the target computer;\n\u2022 Get Skype login name, contact list and chat messages;\n\u2022 Get Skype and Google Hangouts callers and voice records;\n\u2022 Record sound from the microphone and eavesdrop;\n\u2022 Copy the specified file from the target computer;\n\u2022 Automatically copy document files from removable media on the target computer;\n\u2022 Package all the intercepted and copied information into an encrypted dat file, and then save them in the specified directory;\n\u2022 Send the obtained information to the specified FTP;\n\u2022 Run programs or operating system commands;\n\u2022 Download files from a given FTP and release them to a specified directory;\n\u2022 Remotely reconfigure and update components;\n\u2022 Receive information from a given FTP and automatically unzip the file to a specified directory;\n\u2022 Self-destruct\n\nThe information collected by the backdoor is encrypted and uploaded to the designated FTP server. The related collected information is in the encrypted configuration file.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "http://blogs.360.cn/post/APT-C-34_Golden_Falcon.html"
        ],
        "uuid": "e74394ee-e4ab-4642-aca4-fa84d0dcabbf",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "harpoon",
    "analysis": null,
    "articles": [],
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