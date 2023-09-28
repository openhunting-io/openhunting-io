var threatdata = {
    "name": "Deed RAT",
    "alias": "Deed RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Loader",
    "modified": "2022-07-19",
    "all_data": {
        "tool": "Deed RAT",
        "names": [
            {
                "name": "Deed RAT"
            }
        ],
        "description": "(BleepingComputer) Deed RAT's functions depend on which plugins are fetched and loaded. For example, PT has seen eight plugins for startup, C2 config, installation, code injection into processes, network interactions, connection management, registry editing, registry monitoring, and proxy sniffing.\n\nThe supported protocols for C2 communication include TCP, TLS, HTTP, HTTPS, UDP, and DNS, so there's generally a high level of versatility.\n\nThe commands supported by Deed RAT are the following:\n\u2022 Collect system information\n\u2022 Create a separate communication channel for a plugin\n\u2022 Self-remove\n\u2022 Ping\n\u2022 Deactivate connection\n\u2022 Update the shellcode for an injection stored in the registry\n\u2022 Update the main shellcode on disk and delete all plugins",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://www.bleepingcomputer.com/news/security/chinese-space-pirates-are-hacking-russian-aerospace-firms/",
            "https://www.ptsecurity.com/ru-ru/research/pt-esc-threat-intelligence/space-pirates-tools-and-connections/"
        ],
        "uuid": "53fff35a-7a4a-466a-8baa-02ffb46929ec",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "deed_rat",
    "analysis": null
};