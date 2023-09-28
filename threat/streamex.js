var threatdata = {
    "name": "StreamEx",
    "alias": "StreamEx",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "StreamEx",
        "names": [
            {
                "name": "StreamEx"
            }
        ],
        "description": "(Cylance) Cylance dubbed this family of malware StreamEx, based upon a common exported function used across all samples \u2018stream\u2019, combined with the dropper functionality to append \u2018ex\u2019 to the DLL file name.\n\nThe StreamEx family has the ability to access and modify the user\u2019s file system, modify the registry, create system services, enumerate process and system information, enumerate network resources and drive types, scan for security tools such as firewall products and antivirus products, change browser security settings, and remotely execute commands. The malware documented in this post was predominantly 64-bit, however, there are 32-bit versions of the malware in the wild.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/shell-crew-variants-continue-to-fly-under-big-avs-radar.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0142/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:StreamEx"
        ],
        "uuid": "fa1c38a2-c132-470d-8a83-b5b6df3e2a00",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "streamex",
    "analysis": null
};