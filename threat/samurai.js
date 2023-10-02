var threatdata = {
    "name": "Samurai",
    "alias": "Samurai",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Loader, Exfiltration, Tunneling",
    "modified": "2022-07-19",
    "all_data": {
        "tool": "Samurai",
        "names": [
            {
                "name": "Samurai"
            }
        ],
        "description": "(Kaspersky) The final stage is a formerly unknown modular backdoor that we dubbed Samurai, due to a constant keyword used inside an important dictionary used by the malware to share data between its modules.\n\nThe library was developed in C# and uses the .NET HTTPListener class to receive and handle HTTP POST requests, looking for specially crafted requests that carry encrypted C# source code issued by the attackers. These programs will be in turn compiled and executed during runtime.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Loader",
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://securelist.com/toddycat/106799/"
        ],
        "uuid": "21f8ae06-a671-47b9-a2ff-158c7974f6c3",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "samurai",
    "analysis": null,
    "articles": [],
    "mitre": []
};