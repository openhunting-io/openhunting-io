var threatdata = {
    "name": "DEPLOYLOG",
    "alias": "DEPLOYLOG",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-07-19",
    "all_data": {
        "tool": "DEPLOYLOG",
        "names": [
            {
                "name": "DEPLOYLOG"
            }
        ],
        "description": "(Cybereason) DEPLOYLOG (dbghelp.dll) is a 64 bit DLL, with two purposes:\n\n\u2022 The first one is responsible for extracting and executing the attackers\u2019 rootkit, dubbed {{WINNKIT}}, from the CLFS log file.\n\u2022 After a successful deployment of the WINNKIT rootkit, DEPLOYLOG switches to its second task, which is communicating both with the remote C2 and the kernel-level rootkit.\n\nIt\u2019s noteworthy to mention that to evade detection, the attackers deployed DEPLOYLOG as dbghelp.dll, a generic, widely used name leveraged to masquerade as a legitimate file at the same location as PRIVATELOG (C:\\Windows\\System32\\WindowsPowerShell\\v1.0).",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive"
        ],
        "uuid": "c8cfd354-2ba8-4668-bd5b-73cf20816f26",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "deploylog",
    "analysis": null,
    "articles": [],
    "mitre": []
};