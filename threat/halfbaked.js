var threatdata = {
    "name": "HALFBAKED",
    "alias": "HALFBAKED, VB Flash",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "HALFBAKED",
        "names": [
            {
                "name": "HALFBAKED"
            },
            {
                "name": "VB Flash"
            }
        ],
        "description": "(FireEye) The HALFBAKED malware family consists of multiple components designed to establish and maintain a foothold in victim networks, with the ultimate goal of gaining access to sensitive financial information. This version of HALFBAKED connects to the following C2 server:\n\nhxxp://198[.]100.119.6:80/cd\nhxxp://198[.]100.119.6:443/cd\nhxxp://198[.]100.119.6:8080/cd\n\nThis version of HALFBAKED listens for the following commands from the C2 server:\n\n\u2022 info: Sends victim machine information (OS, Processor, BIOS and running processes) using WMI queries\n\u2022 processList: Send list of process running\n\u2022 screenshot: Takes screen shot of victim machine (using 58d2a83f777688.78384945.ps1)\n\u2022 runvbs: Executes a VB script\n\u2022 runexe: Executes EXE file\n\u2022 runps1: Executes PowerShell script\n\u2022 delete: Delete the specified file\n\u2022 update: Update the specified file",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/04/fin7-phishing-lnk.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0151/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/vbs.halfbaked"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:halfbaked"
        ],
        "uuid": "7c520285-abe4-4a29-afc3-47ae713edd82",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "halfbaked",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://attack.mitre.org/software/S0151/",
            "date": "2019",
            "organization": "MITRE",
            "author": "MITRE ATT&CK",
            "title": "Tool description: HALFBAKED",
            "categories": [
                "HALFBAKED"
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
            "data_url": "https://www.fireeye.com/blog/threat-research/2017/04/fin7-phishing-lnk.html",
            "date": "2017-04-24",
            "organization": "FireEye",
            "author": "Saravanan Mohankumar",
            "title": "FIN7 Evolution and the Phishing LNK",
            "categories": [
                "HALFBAKED",
                "FIN7"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "halfbaked",
            "procedure_code": "s0151",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0151",
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
                    "procedure_description": "halfbaked can execute powershell scripts.[95]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "halfbaked can use wmi queries to gather system information.[56]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "halfbaked can delete a specified file.[95]"
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
                    "procedure_description": "halfbaked can obtain information about running processes on the victim.[120]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "halfbaked can obtain information about the os, processor, and bios.[154]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "halfbaked can obtain screenshots from the victim.[72]"
                }
            ]
        }
    ]
};