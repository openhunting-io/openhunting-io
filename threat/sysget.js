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
    "file_name": "sysget",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2017/01/unit42-dragonok-updates-toolset-targets-multiple-geographic-regions/",
            "date": "2017-01-05",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Josh Grunzweig",
            "title": "DragonOK Updates Toolset and Targets Multiple Geographic Regions",
            "categories": [
                "IsSpace",
                "SysGet"
            ]
        },
        {
            "data_url": "http://csecybsec.com/download/zlab/20180713_CSE_APT28_X-Agent_Op-Roman%20Holiday-Report_v6_1.pdf",
            "date": "2014",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "Operation Quantum Entanglement",
            "categories": [
                "IsSpace",
                "NewCT",
                "Poison Ivy",
                "SysGet"
            ]
        }
    ],
    "mitre": []
};