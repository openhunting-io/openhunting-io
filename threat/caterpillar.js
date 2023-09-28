var threatdata = {
    "name": "Caterpillar",
    "alias": "Caterpillar",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader",
    "modified": "2021-04-19",
    "all_data": {
        "tool": "Caterpillar",
        "names": [
            {
                "name": "Caterpillar"
            }
        ],
        "description": "(ClearSky) Acting as a focal point, the group usually attacks webservers via a custom WebShell, namely Caterpillar \u2013 a variant of the open source WebShell \u2018{{ASPXSpy}}\u2019. By using WebShell, the attackers leave their fingerprint on the web server and the internal network, move laterally, and deploy additional tools. On each compromised network the attacker installed one or more WebShell, supposedly to gain persistence and diversify the use of similar tools. The attackers use the WebShell to communicate with their C&C server for running commands and exfiltrating sensitive information. Connection to the WebShell is made using NordVPN or ExpressVPN services.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.clearskysec.com/wp-content/uploads/2021/01/Lebanese-Cedar-APT.pdf"
        ],
        "uuid": "608a396b-d841-425f-955c-4d1ee77d65e5",
        "last-card-change": "2021-04-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "caterpillar",
    "analysis": null
};