var threatdata = {
    "name": "WMI Ghost",
    "alias": "WMI Ghost, Wimmie, Syndicasec",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "WMI Ghost",
        "names": [
            {
                "name": "WMI Ghost"
            },
            {
                "name": "Wimmie"
            },
            {
                "name": "Syndicasec"
            }
        ],
        "description": "(Trend Micro) The malware used in the Luckycat campaign, detected by Trend Micro as TROJ_WIMMIE or VBS_WIMMIE, connects to a C&C server via HTTP over port 80. It is notable because it uses Windows Management Instrumentation (WMI) to establish persistence. VBS_WIMMIE registers a script that works as a backdoor to the WMI event handler and deletes files associated with it or TROJ_WIMMIE. As a result, the backdoor cannot be detected by antivirus software through simple file scanning.The compromised computer posts data to a PHP script that runs on the C&C server, usually count.php.\n\nThe initial communication results in the creation of a file on the C&C server that contains information on the compromised computer. Although the file is empty, the file name contains the hostname of the compromised computer, followed by its MAC address, along with the campaign code the attackers use to identify which malware attack caused the compromise:\n~[HOSTNAME]_[MAC_ADDRESS]_[CAMPAIGN_CODE]\n\nThe attacker then creates a file with a name that ends in @.c, which contains a command.\n[HOSTNAME]_[MAC_ADDRESS]_[CAMPAIGN_CODE]@.c\n\nThe compromised computer then downloads the file and executes the specified command, which may include any of the following:\n\u2022 Get external IP address\n\u2022 Execute shell command\n\u2022 Download file\n\u2022 Upload file\n\nThe compromised computer then sends the output to the C&C server and deletes the command file.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp_luckycat_redux.pdf",
            "https://secrary.com/ReversingMalware/WMIGhost/",
            "https://www.symantec.com/blogs/threat-intelligence/thrip-hits-satellite-telecoms-defense-targets"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.wmighost"
        ],
        "uuid": "79ca754c-8547-4c75-b7c9-836e9bf0034f",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wmi_ghost",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/thrip-hits-satellite-telecoms-defense-targets",
            "date": "2018-06-19",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Thrip: Espionage Group Hits Satellite, Telecoms, and Defense Companies",
            "categories": [
                "Catchamas",
                "Rikamanu",
                "Spedear",
                "WMI Ghost",
                "Thrip"
            ]
        },
        {
            "data_url": "https://secrary.com/ReversingMalware/WMIGhost/",
            "date": "2017-07-17",
            "organization": "Secrary Blog",
            "author": "Lasha Khasaia",
            "title": "WMIGhost / Wimmie - WMI malware",
            "categories": [
                "WMI Ghost"
            ]
        }
    ],
    "mitre": []
};