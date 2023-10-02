var threatdata = {
    "name": "Nautilus",
    "alias": "Nautilus",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Nautilus",
        "names": [
            {
                "name": "Nautilus"
            }
        ],
        "description": "Nautilus is very similar to {{Neuron}} both in the targeting of mail servers and how client communications are performed. This malware is referred to as Nautilus due to its embedded internal DLL name \u201cnautilus-service.dll\u201d, again sharing some resemblance to Neuron. The Nautilus service listens for HTTP requests from clients to process tasking requests such as executing commands, deleting files and writing files to disk.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://threatpost.com/turla-compromises-iranian-apt/149375/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.nautilus"
        ],
        "uuid": "20eaa3cf-8388-4a2e-b11b-cdee9413d8d1",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nautilus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/iron-hunter",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "IRON HUNTER",
            "categories": [
                "Agent.BTZ",
                "Cobra Carbon System",
                "LightNeuron",
                "Mosquito",
                "Nautilus",
                "Neuron",
                "Skipper",
                "Uroburos",
                "Turla"
            ]
        },
        {
            "data_url": "https://www.ncsc.gov.uk/news/turla-group-exploits-iran-apt-to-expand-coverage-of-victims",
            "date": "2019-10-21",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "Advisory: Turla group exploits Iranian APT to expand coverage of victims",
            "categories": [
                "Nautilus",
                "Neuron"
            ]
        },
        {
            "data_url": "https://www.ncsc.gov.uk/alerts/turla-group-malware",
            "date": "2018-01-17",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "Turla group malware",
            "categories": [
                "Nautilus",
                "Neuron"
            ]
        }
    ],
    "mitre": []
};