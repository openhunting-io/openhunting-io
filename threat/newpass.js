var threatdata = {
    "name": "NewPass",
    "alias": "NewPass",
    "category": "Malware",
    "type": "Dropper, Loader, Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "NewPass",
        "names": [
            {
                "name": "NewPass"
            }
        ],
        "description": "(Telsy) NewPass is quite a complex malware composed by different components that rely on an encoded file to pass information and configuration between each other. There are at least three components of the malware: a dropper, that deploys the binary file; a loader library, that is able to decode the binary file extracting the last component, responsible for performing specific operations, such as communicate with the attackers\u2019 command and control server (the \u201cagent\u201d)\n\nThe loader and the agent share a JSON configuration resident in memory that demonstrate the potential of the malware and the ease with which the attackers can customize the implant by simply changing the configuration entries\u2019 values.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Loader",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.telsy.com/turla-venomous-bear-updates-its-arsenal-newpass-appears-on-the-apt-threat-scene/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.newpass"
        ],
        "uuid": "d41d2836-84ec-437b-8be4-f112271f88e9",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "newpass",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.telsy.com/turla-venomous-bear-updates-its-arsenal-newpass-appears-on-the-apt-threat-scene/",
            "date": "2020-07-14",
            "organization": "Telsy",
            "author": "Telsy",
            "title": "Turla / Venomous Bear updates its arsenal: \u201cNewPass\u201d appears on the APT threat scene",
            "categories": [
                "NewPass",
                "Turla"
            ]
        }
    ],
    "mitre": []
};