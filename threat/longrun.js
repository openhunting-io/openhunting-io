var threatdata = {
    "name": "LONGRUN",
    "alias": "LONGRUN",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "LONGRUN",
        "names": [
            {
                "name": "LONGRUN"
            }
        ],
        "description": "LONGRUN is a backdoor designed to communicate with a hard-coded IP address and provide the attackers with a custom interactive shell.  It supports file uploads and downloads, and executing arbitrary commands on the compromised machine.  When LONGRUN executes, it first loads configuration data stored as an obfuscated string inside the PE resource section. The distinctive string thequickbrownfxjmpsvalzydg is used as part of the input to the decoding algorithm.  When the configuration data string is decoded it is parsed and treated as an IP and port number.  The malware then connects to the host and begins interacting with it over a custom protocol.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "uuid": "7f5652d8-d82d-4298-ad2d-effcb67444ae",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "longrun",
    "analysis": null,
    "articles": [],
    "mitre": []
};