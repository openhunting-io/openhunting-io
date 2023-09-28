var threatdata = {
    "name": "xPack",
    "alias": "xPack, NERAPACK",
    "category": "Malware",
    "type": "Backdoor, Remote command, Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "xPack",
        "names": [
            {
                "name": "xPack"
            },
            {
                "name": "NERAPACK"
            }
        ],
        "description": "(Symantec) The backdoor allowed the attackers to run WMI commands remotely, while there is also evidence that they leveraged {{EternalBlue}} exploits in the backdoor. The attackers appeared to have the ability to interact with SMB shares, and it's possible that they used mounted shares over SMB to transfer files from attacker-controlled infrastructure. There is also evidence that the attackers were able to browse the web through the backdoor, likely using it as a proxy to mask their IP address.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Remote command",
            "Exfiltration"
        ],
        "information": [
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/china-apt-antlion-taiwan-financial-attacks"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xpack"
        ],
        "uuid": "499c6ccf-8841-4343-92fe-fa4b37a6fc49",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "xpack",
    "analysis": null
};