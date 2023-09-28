var threatdata = {
    "name": "Decrypt-RDCMan.ps1",
    "alias": "Decrypt-RDCMan.ps1",
    "category": "Malware",
    "type": "Vulnerability scanner",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Decrypt-RDCMan.ps1",
        "names": [
            {
                "name": "Decrypt-RDCMan.ps1"
            }
        ],
        "description": "(SecureWorks) Decrypt-RDCMan.ps1 is a component of the {{PoshC2}} penetration testing framework. It is used to decrypt passwords stored in the RDCMan configuration file, which stores details of servers and encrypted credentials to quickly establish remote desktop sessions. Recovered credentials could give the threat actors additional access within the environment. LYCEUM deployed this tool via {{DanBot}} approximately one hour after gaining initial access to a compromised environment.",
        "category": "Malware",
        "type": [
            "Vulnerability scanner"
        ],
        "information": [
            "https://www.secureworks.com/blog/lyceum-takes-center-stage-in-middle-east-campaign",
            "https://github.com/nettitude/PoshC2/blob/master/Modules/Decrypt-RDCMan.ps1"
        ],
        "uuid": "ea6934f2-757c-4ac1-a661-68e0fe0be04c",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "decrypt-rdcman.ps1",
    "analysis": null
};