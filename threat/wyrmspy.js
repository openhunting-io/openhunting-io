var threatdata = {
    "name": "WyrmSpy",
    "alias": "WyrmSpy",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "WyrmSpy",
        "names": [
            {
                "name": "WyrmSpy"
            }
        ],
        "description": "(Lookout) After it\u2019s installed and launched, WyrmSpy uses known rooting tools to gain escalated privileges to the device and perform surveillance activities specified by commands received from its C2 servers. These commands include instructing the malware to upload log files, photos stored on the device, and acquire device location using the Baidu Location library.\n\nAlthough we were not able to acquire additional modules from the C2 infrastructure at the time of discovery, we assess with high confidence that a secondary payload is used by the malware to perform additional surveillance functionality. This is based on the permissions that WyrmSpy obtains but does not use in the code contained in the app, which indicates abilities to exfiltrate additional data, such as SMS and audio recordings.\n\nConfiguration files used by the malware to execute instructions received by the C2 further support this hypothesis, with references to \u201cAudioRecord\u201d and \u201cFiles\u201d set to true or false based on received commands.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.lookout.com/threat-intelligence/article/wyrmspy-dragonegg-surveillanceware-apt41"
        ],
        "uuid": "fc5f26a3-382f-498c-982d-b9a165c301bf",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "wyrmspy",
    "analysis": null
};