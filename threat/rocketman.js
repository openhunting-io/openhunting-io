var threatdata = {
    "name": "RocketMan",
    "alias": "RocketMan",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "RocketMan",
        "names": [
            {
                "name": "RocketMan"
            }
        ],
        "description": "(Kaspersky) We call this Trojan RocketMan after the string the developer uses for beaconing. Another string inside this malware is \u201cTrumpTower\u201d, used as an RC4 encryption initial vector.\n\nThis malware reads the C2 IP and port from the registry where it was saved by the previous stager. It processes the following commands from its C2 that are received encrypted over HTTP:",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/turla-renews-its-arsenal-with-topinambour/91687/"
        ],
        "uuid": "64c28fe2-1597-4b3a-b877-818e2687cd67",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "rocketman",
    "analysis": null
};