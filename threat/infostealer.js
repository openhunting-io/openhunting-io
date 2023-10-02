var threatdata = {
    "name": "Infostealer",
    "alias": "Infostealer, stereoversioncontrol",
    "category": "Malware",
    "type": "Reconnaissance, Info stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Infostealer",
        "names": [
            {
                "name": "Infostealer"
            },
            {
                "name": "stereoversioncontrol"
            }
        ],
        "description": "(FireEye) Infostealer/stereoversioncontrol.exe downloads a RAR file, as well as the {{get-logon-history.ps1}} tool. It runs several commands on the infected machine to gather information about it and also the Firefox data of all users of the machine. It then compresses this information before transferring it to a remote directory. Infostealer/Sha.exe/Sha432.exe operates in a similar manner, gathering information about the infected machine.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Info stealer"
        ],
        "information": [
            "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/tortoiseshell-apt-supply-chain"
        ],
        "uuid": "37806589-2fd5-4d04-aed6-f1d7bb633263",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "infostealer",
    "analysis": null,
    "articles": [],
    "mitre": []
};