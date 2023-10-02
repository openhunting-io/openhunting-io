var threatdata = {
    "name": "THREEBYTE",
    "alias": "THREEBYTE",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "THREEBYTE",
        "names": [
            {
                "name": "THREEBYTE"
            }
        ],
        "description": "(Check Point) Threebyte is a Backdoor that targets the Windows platform. This malware contacts a remote server to receive commands to execute on the infected system. It sends out information about the targeted system. Furthermore, it has been reportedly delivered to a victim's machine via exploitation of a Microsoft Word Document vulnerability (CVE-2012-0158). In order to survive system reboots, it adds a value to the Run key in the Registry.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://threatpoint.checkpoint.com/ThreatPortal/threat?threatType=malwarefamily&threatId=2098",
            "https://www.fireeye.com/blog/threat-research/2014/09/darwins-favorite-apt-group-2.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.threebyte"
        ],
        "uuid": "02dfdac5-9b39-43b2-aea4-8b91f3999064",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "threebyte",
    "analysis": null,
    "articles": [],
    "mitre": []
};