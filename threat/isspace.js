var threatdata = {
    "name": "IsSpace",
    "alias": "IsSpace, NfLog RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "IsSpace",
        "names": [
            {
                "name": "IsSpace"
            },
            {
                "name": "NfLog RAT"
            }
        ],
        "description": "(Palo Alto) To determine the flow of execution, IsSpace gathers various data about the infected host, such as administrative rights of the user, operating system version, and CPU architecture.\n\nIf IsSpace determines that it is running as an administrator on a Microsoft Windows 7 system on a 32-bit platform, it will attempt to execute itself accordingly, using a side-loading technique.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/watering-hole-attack-on-aerospace-firm-exploits-cve-2015-5122-to-install-isspace-backdoor/",
            "https://unit42.paloaltonetworks.com/unit42-dragonok-updates-toolset-targets-multiple-geographic-regions/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.isspace"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:IsSpace"
        ],
        "uuid": "fc217926-738a-4c3e-8d5f-987259d84030",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "isspace",
    "analysis": null
};