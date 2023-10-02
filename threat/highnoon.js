var threatdata = {
    "name": "HighNoon",
    "alias": "HighNoon",
    "category": "Malware",
    "type": "Backdoor, Rootkit",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "HighNoon",
        "names": [
            {
                "name": "HighNoon"
            }
        ],
        "description": "(FireEye) HIGHNOON is a backdoor that consists of multiple components, including a loader, dynamic-link library (DLL), and a rootkit. When loaded, the DLL may deploy one of two embedded drivers to conceal network traffic and communicate with its command and control server to download and launch memory-resident DLL plugins.\n\nHighNoon seems to be a variant of {{Winnti}}.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Rootkit"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/08/game-over-detecting-and-stopping-an-apt41-operation.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.highnoon",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.highnoon_bin"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:HIGHNOON"
        ],
        "uuid": "24a67ed1-9fa5-4d77-a1dd-9cf8a6011beb",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "highnoon",
    "analysis": null,
    "articles": [],
    "mitre": []
};