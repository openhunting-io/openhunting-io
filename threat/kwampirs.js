var threatdata = {
    "name": "Kwampirs",
    "alias": "Kwampirs",
    "category": "Malware",
    "type": "Backdoor, Worm",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Kwampirs",
        "names": [
            {
                "name": "Kwampirs"
            }
        ],
        "description": "Kwampirs is a family of malware which uses SMB to spread. It typically will not execute or deploy in environments in which there is no publicly available admin$ share. It is a fully featured backdoor which can download additional modules. Typical C2 traffic is over HTTP and includes 'q=[ENCRYPTED DATA]' in the URI.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Worm"
        ],
        "information": [
            "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/orangeworm-targets-healthcare-us-europe-asia",
            "https://lab52.io/blog/orangeworm-group-kwampirs-analysis-update/",
            "https://blog.reversinglabs.com/blog/unpacking-kwampirs-rat"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0236/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.kwampirs"
        ],
        "uuid": "2543f59c-c8b9-4316-b66a-a30945a2a701",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "kwampirs",
    "analysis": null
};