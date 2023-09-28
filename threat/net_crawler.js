var threatdata = {
    "name": "Net Crawler",
    "alias": "Net Crawler, NetC",
    "category": "Malware",
    "type": "Reconnaissance, Worm, Credential stealer, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Net Crawler",
        "names": [
            {
                "name": "Net Crawler"
            },
            {
                "name": "NetC"
            }
        ],
        "description": "(Cylance) NetC is a tool developed in C# and has been observed being obfuscated with SmartAssembly, which is a tool used by legitimate businesses as well as .NET malware authors. Both known samples of NetC were compiled in April and May of 2013. It has the capability to run commands on all computers in the domain with credentials extracted from the initially compromised host. This capability allows it to operate as a utility for pivoting once a computer on the network has already been compromised. It also has the functionality to spread to other computers in the network, and then call itself again, worming throughout the network, returning harvested credentials and command results.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Worm",
            "Credential stealer",
            "Info stealer"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/operation-cleaver-net-crawler.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0056/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.netc"
        ],
        "uuid": "ebcc4be9-626e-436e-a182-21fbbc1650ea",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "net_crawler",
    "analysis": null
};