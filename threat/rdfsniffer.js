var threatdata = {
    "name": "RDFSNIFFER",
    "alias": "RDFSNIFFER",
    "category": "Malware",
    "type": "ATM malware, Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "RDFSNIFFER",
        "names": [
            {
                "name": "RDFSNIFFER"
            }
        ],
        "description": "(FireEye) RDFSNIFFER, a payload of {{Boostwrite}}, appears to have been developed to tamper with NCR Corporation's \u201cAloha Command Center\u201d client. NCR Aloha Command Center is a remote administration toolset designed to manage and troubleshoot systems within payment card processing sectors running the Command Center Agent. The malware loads into the same process as the Command Center process by abusing the DLL load order of the legitimate Aloha utility. Mandiant provided this information to NCR.",
        "category": "Malware",
        "type": [
            "ATM malware",
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/10/mahalo-fin7-responding-to-new-tools-and-techniques.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0416/"
        ],
        "uuid": "d23c84b9-1a28-4c39-a9ab-3d9e9292030d",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "rdfsniffer",
    "analysis": null
};