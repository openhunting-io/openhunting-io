var threatdata = {
    "name": "P8RAT",
    "alias": "P8RAT, GreetCake",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "P8RAT",
        "names": [
            {
                "name": "P8RAT"
            },
            {
                "name": "GreetCake"
            }
        ],
        "description": "(Kaspersky) One of {{Ecipekac}}\u2019s payloads is a new fileless malware which we call P8RAT (a.k.a GreetCake). P8RAT has the following unique data structure used to store the C2 communication configuration. We collected several samples of P8RAT during our research and found no C2 address of P8RAT that was used more than once. In total we found 10 backdoor commands in all the collected P8RAT samples. The most recent P8RAT sample, with the compilation timestamp of December 14, 2020, shows a new backdoor command with the code number of \u201c309\u201d implemented. The command \u201c304\u201d, which was present in earlier samples and carries similar functionality, was removed.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://securelist.com/apt10-sophisticated-multi-layered-loader-ecipekac-discovered-in-a41apt-campaign/101519/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0626/"
        ],
        "uuid": "b5cb59ac-bfd5-400f-91ba-57472c375fd3",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "p8rat",
    "analysis": null
};