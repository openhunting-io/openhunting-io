var threatdata = {
    "name": "SNUGRIDE",
    "alias": "SNUGRIDE",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "SNUGRIDE",
        "names": [
            {
                "name": "SNUGRIDE"
            }
        ],
        "description": "(FireEye) SNUGRIDE is a backdoor that communicates with its C2 server through HTTP requests. Messages are encrypted using AES with a static key. The malware\u2019s capabilities include taking a system survey, access to the filesystem, executing commands and a reverse shell. Persistence is maintained through a Run registry key.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/04/apt10_menupass_grou.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0159/"
        ],
        "uuid": "cc7180a9-4d8d-44fc-b9e0-118e0534a725",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "snugride",
    "analysis": null
};