var threatdata = {
    "name": "FlowCloud",
    "alias": "FlowCloud",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2022-04-27",
    "all_data": {
        "tool": "FlowCloud",
        "names": [
            {
                "name": "FlowCloud"
            }
        ],
        "description": "(Proofpoint) While we found the ultimate execution method for both the LookBack {{GUP Proxy Tool}} and FlowCloud malware were the same across both macro versions, we found that the FlowCloud macro introduced a new method for the delivery of the malware.\n\nFlowCloud malware is capable of RAT functionalities based on its available commands including accessing the clipboard, installed applications, keyboard, mouse, screen, files, services, and processes with the ability to exfiltrate information via command and control. Additionally, the malware variants analyzed have several distinct characteristics that indicate the malware may have been active in the threat landscape since at least July 2016.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.proofpoint.com/us/blog/threat-insight/ta410-group-behind-lookback-attacks-against-us-utilities-sector-returns-new",
            "https://www.proofpoint.com/us/blog/threat-insight/flowcloud-version-413-malware-analysis",
            "https://www.ironnet.com/blog/china-cyber-attacks-the-current-threat-landscape",
            "https://nao-sec.org/2021/01/royal-road-redive.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.flowcloud"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:FlowCloud"
        ],
        "uuid": "1f53d01d-537d-46d0-969f-7971d49db920",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "flowcloud",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2022/04/27/lookback-ta410-umbrella-cyberespionage-ttps-activity/",
            "date": "2022-04-27",
            "organization": "ESET Research",
            "author": "Matthieu Faou",
            "title": "A lookback under the TA410 umbrella: Its cyberespionage TTPs and activity",
            "categories": [
                "FlowCloud",
                "Lookback"
            ]
        },
        {
            "data_url": "https://www.dragos.com/blog/industry-news/new-ics-threat-activity-group-talonite/",
            "date": "2021-04-26",
            "organization": "Dragos",
            "author": "Dragos",
            "title": "New ICS Threat Activity Group: TALONITE",
            "categories": [
                "FlowCloud",
                "Lookback"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2021/01/royal-road-redive.html",
            "date": "2021-01-04",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "Royal Road! Re:Dive",
            "categories": [
                "8.t Dropper",
                "Chinoxy",
                "FlowCloud",
                "FunnyDream",
                "Lookback"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/china-cyber-attacks-the-current-threat-landscape",
            "date": "2020-12-24",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "China cyber attacks: the current threat landscape",
            "categories": [
                "PLEAD",
                "TSCookie",
                "FlowCloud",
                "Lookback",
                "PLEAD",
                "PlugX",
                "Quasar RAT",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/flowcloud-version-413-malware-analysis",
            "date": "2020-06-10",
            "organization": "Proofpoint",
            "author": "Dennis Schwarz",
            "title": "FlowCloud Version 4.1.3 Malware Analysis",
            "categories": [
                "FlowCloud"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/ta410-group-behind-lookback-attacks-against-us-utilities-sector-returns-new",
            "date": "2020-06-08",
            "organization": "Proofpoint",
            "author": "Michael Raggi",
            "title": "TA410: The Group Behind LookBack Attacks Against U.S. Utilities Sector Returns with New Malware",
            "categories": [
                "FlowCloud",
                "Lookback",
                "TA410"
            ]
        }
    ],
    "mitre": []
};