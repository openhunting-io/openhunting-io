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
    "mitre": [],
    "file_name": "halfbaked",
    "analysis": null
};