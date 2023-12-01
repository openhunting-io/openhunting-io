var threatdata = {
    "name": "DragonEgg",
    "alias": "DragonEgg",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2023-10-02",
    "all_data": {
        "tool": "DragonEgg",
        "names": [
            {
                "name": "DragonEgg"
            }
        ],
        "description": "(Lookout) Similar to {{WyrmSpy}}, DragonEgg appears to rely on additional payloads to implement the full scale of its surveillance functionality.\n\nAt launch, the malware acquires \u2014 either from C2 infrastructure or a bundled file within the APK \u2014 a payload often named \u201csmallmload.jar\u201d which attempts to acquire and launch additional functionality. Like WyrmSpy, the DragonEgg samples request extensive permissions for services that are not directly exploited in the core app. \n\nWe suspect that by trojanizing legitimate chat apps like Telegram, APT41 is trying to remain inconspicuous while requesting access to extensive device data. Messaging apps typically request access to sensitive device data, and by hiding its surveillance functionality within a large, fully-functional app, the threat actor is better able to remain inconspicuous while the app is running on the device or statically analyzed by a researcher.",
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
        "uuid": "b92e627c-2e0f-4d95-90f1-798028d00ba1",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dragonegg",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.threatfabric.com/blogs/lightspy-mapt-mobile-payment-system-attack",
            "date": "2023-10-02",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "LightSpy mAPT Mobile Payment System Attack",
            "categories": [
                "DragonEgg",
                "WyrmSpy",
                "lightSpy"
            ]
        },
        {
            "data_url": "https://www.lookout.com/threat-intelligence/article/wyrmspy-dragonegg-surveillanceware-apt41",
            "date": "2023-07-19",
            "organization": "Lookout",
            "author": "Kristina Balaam",
            "title": "Lookout Attributes Advanced Android Surveillanceware to Chinese Espionage Group APT41",
            "categories": [
                "DragonEgg",
                "WyrmSpy"
            ]
        }
    ],
    "mitre": []
};