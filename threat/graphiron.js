var threatdata = {
    "name": "Graphiron",
    "alias": "Graphiron",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "Graphiron",
        "names": [
            {
                "name": "Graphiron"
            }
        ],
        "description": "(Symantec) Graphiron is a two-stage threat consisting of a downloader (Downloader.Graphiron) and a payload (Infostealer.Graphiron).\n\nThe payload is capable of carrying out the following tasks:\n\n\u2022 Reads MachineGuid\n\u2022 Obtains the IP address from https://checkip.amazonaws.com\n\u2022 Retrieves the hostname, system info, and user info\n\u2022 Steals data from Firefox and Thunderbird\n\u2022 Steals private keys from MobaXTerm.\n\u2022 Steals SSH known hosts\n\u2022 Steals data from PuTTY\n\u2022 Steals stored passwords\n\u2022 Takes screenshots\n\u2022 Creates a directory\n\u2022 Lists a directory\n\u2022 Runs a shell command\n\u2022 Steals an arbitrary file",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/nodaria-ukraine-infostealer"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.graphiron"
        ],
        "uuid": "6b99018f-62bf-4df9-9a0f-c6209ba5c734",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "graphiron",
    "analysis": null
};