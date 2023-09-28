var threatdata = {
    "name": "SysGet",
    "alias": "SysGet, HelloBridge",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "SysGet",
        "names": [
            {
                "name": "SysGet"
            },
            {
                "name": "HelloBridge"
            }
        ],
        "description": "(Palo Alto) All of the Sysget files used in this campaign communicate with a single command and control (C2) server, hosted at biosnews[.]info. Sysget communicates with this server using the HTTP protocol.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit-42-identifies-new-dragonok-backdoor-malware-deployed-against-japanese-targets/",
            "https://unit42.paloaltonetworks.com/unit42-dragonok-updates-toolset-targets-multiple-geographic-regions/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sysget"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Sysget"
        ],
        "uuid": "421f573b-e4bd-4937-848b-47ff4b06cf5b",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sysget",
    "analysis": null
};