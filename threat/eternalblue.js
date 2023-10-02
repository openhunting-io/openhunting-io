var threatdata = {
    "name": "EternalBlue",
    "alias": "EternalBlue",
    "category": "Exploits",
    "type": "0-day",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "EternalBlue",
        "names": [
            {
                "name": "EternalBlue"
            }
        ],
        "description": "(Check Point) The EternalBlue exploitation tool was leaked by \u201cThe Shadow Brokers\u201d group on April 14, 2017, in their fifth leak, \u201cLost in Translation.\u201d  The leak included many exploitation tools like EternalBlue that are based on multiple vulnerabilities in the Windows implementation of SMB protocol.\n\nEternalBlue works on all Windows versions prior to Windows 8. These versions contain an interprocess communication share (IPC$) that allows a null session. This means that the connection is established via anonymous login and null session is allowed by default. Null session allows the client to send different commands to the server.",
        "category": "Exploits",
        "type": [
            "0-day"
        ],
        "information": [
            "https://research.checkpoint.com/2017/eternalblue-everything-know/",
            "https://cybernews.com/security/eternalblue-vulnerability-exploit-explained/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:EternalBlue"
        ],
        "uuid": "cb1f1730-b938-44da-99ef-a15d7b16fee2",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "eternalblue",
    "analysis": null,
    "articles": [],
    "mitre": []
};