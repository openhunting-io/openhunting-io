var threatdata = {
    "name": "Neuron",
    "alias": "Neuron",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Neuron",
        "names": [
            {
                "name": "Neuron"
            }
        ],
        "description": "Neuron consists of both client and server components. The Neuron client and Neuron service are written using the .NET framework with some codebase overlaps. The Neuron client is used to infect victim endpoints and extract sensitive information from local client machines. The Neuron server is used to infect network infrastructure such as mail and web servers, and acts as local Command & Control (C2) for the client component. Establishing a local C2 limits interaction with the target network and remote hosts. It also reduces the log footprint of actor infrastructure and enables client interaction to appear more convincing as the traffic is contained within the target network.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://threatpost.com/turla-compromises-iranian-apt/149375/",
            "https://www.ncsc.gov.uk/alerts/turla-group-malware"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.neuron"
        ],
        "uuid": "a74ca4f9-33e7-4e5b-80d9-a4accb4368d8",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "neuron",
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