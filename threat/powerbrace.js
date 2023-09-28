var threatdata = {
    "name": "PowerBrace",
    "alias": "PowerBrace",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "PowerBrace",
        "names": [
            {
                "name": "PowerBrace"
            }
        ],
        "description": "(IBM) PowerBrace is a PowerShell backdoor that supports multiple commands such as command execution, uploading/downloading files, etc. Most of the function names and variable names in PowerBrace have been replaced with MD5 hashes to make the analysis more difficult. Furthermore, many commands are Based64 encoded. It generates a random string as a session key, which is used in communication.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://exchange.xforce.ibmcloud.com/malware-analysis/guid:7ce62d3322cecbb29e55b27cd393b729"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powerbrace"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PowerBrace"
        ],
        "uuid": "1530863f-0139-4bd1-af9f-fc77f2df36a2",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "powerbrace",
    "analysis": null
};