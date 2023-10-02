var threatdata = {
    "name": "BLUEAGAVE",
    "alias": "BLUEAGAVE",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-12-26",
    "all_data": {
        "tool": "BLUEAGAVE",
        "names": [
            {
                "name": "BLUEAGAVE"
            }
        ],
        "description": "(Mandiant) FIN13 has also extensively deployed the PowerShell passive backdoor BLUEAGAVE on target hosts when establishing an initial foothold in an environment. BLUEAGAVE utilizes the HttpListener .NET class to establish a local HTTP server on high ephemeral ports (65510-65512). The backdoor listens for incoming HTTP requests to the root URI / on the established port, parses the HTTP request, and executes the URL encoded data stored within the \u2018kmd\u2019 variable of the request via the Windows Command Prompt (cmd.exe). The output of this command is then sent back to the operator in the body of the HTTP response. In addition, Mandiant has identified a Perl version of BLUEAGAVE which allows FIN13 to establish a foothold on Linux systems.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.mandiant.com/resources/fin13-cybercriminal-mexico"
        ],
        "uuid": "0380de25-2be3-4367-81a5-6dce337093ef",
        "last-card-change": "2021-12-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blueagave",
    "analysis": null,
    "articles": [],
    "mitre": []
};