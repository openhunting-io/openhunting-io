var threatdata = {
    "name": "SPARKLOG",
    "alias": "SPARKLOG",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-07-19",
    "all_data": {
        "tool": "SPARKLOG",
        "names": [
            {
                "name": "SPARKLOG"
            }
        ],
        "description": "(Cybereason) SPARKLOG (spark.exe) is a 32 bit executable written in C++, employed in this attack to extract a DLL from the CLFS file, decrypt it and then launch it for side-loading by Windows services running as SYSTEM. Executing this phase of the attack successfully enables the attackers to gain Privilege Escalation and also Persistence in a specific case.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive"
        ],
        "uuid": "b7eea0f5-2163-4a25-9078-77bdca383523",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sparklog",
    "analysis": null
};