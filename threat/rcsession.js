var threatdata = {
    "name": "RCSession",
    "alias": "RCSession",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "RCSession",
        "names": [
            {
                "name": "RCSession"
            }
        ],
        "description": "(SecureWorks) This basic RAT is installed via DLL side-loading, and CTU researchers observed BRONZE PRESIDENT installing it on multiple hosts during intrusions. RCSession was extracted from a file called English.rtf and launched via a hollowed svchost.exe process. RCSession connects to its C2 server via a custom protocol, can remotely execute commands, and can launch additional tools. CTU researchers have no evidence of other threat actors using RCSession or of wide proliferation of the tool, suggesting it may be exclusively used by BRONZE PRESIDENT.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.secureworks.com/research/bronze-president-targets-ngos"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0662/"
        ],
        "uuid": "07e50a75-39c7-4cab-b156-8f3fb1d13732",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "rcsession",
    "analysis": null
};