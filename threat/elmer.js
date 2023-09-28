var threatdata = {
    "name": "ELMER",
    "alias": "ELMER, Elmost",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "ELMER",
        "names": [
            {
                "name": "ELMER"
            },
            {
                "name": "Elmost"
            }
        ],
        "description": "(FireEye) The exploit documents delivered during the December campaigns dropped a binary containing an embedded variant of a backdoor we refer to as ELMER. ELMER is a non-persistent proxy-aware HTTP backdoor written in Delphi, and is capable of performing file uploads and downloads, file execution, and process and directory listings.\n\nTo retrieve commands, ELMER sends HTTP GET requests to a hard-coded CnC server, and parses the HTTP response packets received from the CnC server for an integer string corresponding to the command that needs to be executed. Table 2 lists the ELMER backdoors observed during the December campaigns.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2015/12/the-eps-awakens-part-two.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0064/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.elmer"
        ],
        "uuid": "b2351a30-d7be-4309-8f5d-9818164c9811",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "elmer",
    "analysis": null
};