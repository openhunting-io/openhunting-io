var threatdata = {
    "name": "LOWBALL",
    "alias": "LOWBALL",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "LOWBALL",
        "names": [
            {
                "name": "LOWBALL"
            }
        ],
        "description": "(FireEye) This backdoor, known as LOWBALL, uses the legitimate Dropbox cloud-storage service to act as the CnC server. It uses the Dropbox API with a hardcoded bearer access token and has the ability to download, upload, and execute files. The communication occurs via HTTPS over port 443.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2015/11/china-based-threat.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0042/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lowball"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:lowball"
        ],
        "uuid": "1cf868dc-4067-40c8-aaec-a47cfac9f37c",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "lowball",
    "analysis": null
};