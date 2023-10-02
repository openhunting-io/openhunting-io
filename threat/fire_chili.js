var threatdata = {
    "name": "Fire Chili",
    "alias": "Fire Chili",
    "category": "Malware",
    "type": "Rootkit",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "Fire Chili",
        "names": [
            {
                "name": "Fire Chili"
            }
        ],
        "description": "(BleepingComputer) In a recent Deep Panda campaign discovered by Fortinet, the hacking group is deploying the new 'Fire Chili' rootkit to evade detection on compromised systems.\nA rootkit is malware typically installed as a driver that hooks various Windows APIs to hide the presence of other files and configuration settings in the operating system. For example, by hooking Windows programming functions, a rootkit can filter data to not display malicious file names, processes, and Registry keys APIs to Windows programs requesting the data.\nIn the attacks, the rootkit is signed by valid digital certificates allowing it to bypass detection by security software and load into Windows without any warnings.",
        "category": "Malware",
        "type": [
            "Rootkit"
        ],
        "information": [
            "https://www.bleepingcomputer.com/news/security/chinese-hacking-group-uses-new-fire-chili-windows-rootkit/",
            "https://www.fortinet.com/blog/threat-research/deep-panda-log4shell-fire-chili-rootkits"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.firechili"
        ],
        "uuid": "b2a4a72c-91cf-4a8e-be0e-ae24de1e080c",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "fire_chili",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://thehackernews.com/2022/04/chinese-hackers-target-vmware-horizon.html",
            "date": "2022-04-01",
            "organization": "The Hacker News",
            "author": "Ravie Lakshmanan",
            "title": "Chinese Hackers Target VMware Horizon Servers with Log4Shell to Deploy Rootkit",
            "categories": [
                "Fire Chili",
                "Ghost RAT"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/deep-panda-log4shell-fire-chili-rootkits",
            "date": "2022-03-30",
            "organization": "Fortinet",
            "author": "Rotem Sde-Or",
            "title": "New Milestones for Deep Panda: Log4Shell and Digitally Signed Fire Chili Rootkits",
            "categories": [
                "Fire Chili",
                "Ghost RAT"
            ]
        }
    ],
    "mitre": []
};