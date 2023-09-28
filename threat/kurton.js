var threatdata = {
    "name": "Kurton",
    "alias": "Kurton",
    "category": "Malware",
    "type": "Backdoor, Tunneling, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Kurton",
        "names": [
            {
                "name": "Kurton"
            }
        ],
        "description": "This family of malware is a backdoor that tunnels its connection through a preconfigured proxy. The malware communicates with a remote command and control server over HTTPS via the proxy. The malware installs itself as a Windows service with a service name supplied by the attacker but defaults to IPRIP if no service name is provided during install.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling",
            "Info stealer"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf",
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.kurton"
        ],
        "uuid": "666cd633-8570-4784-84d8-6e934d7b6e12",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "kurton",
    "analysis": null
};