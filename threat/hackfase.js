var threatdata = {
    "name": "Hackfase",
    "alias": "Hackfase, Hacksfase",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "Hackfase",
        "names": [
            {
                "name": "Hackfase"
            },
            {
                "name": "Hacksfase"
            }
        ],
        "description": "This family of malware is a backdoor that provides reverse shell, process creation, system statistics collection, process enumeration, and process termination capabilities. This family is designed to be a service DLL and does not contain an installation mechanism. It usually communicates over port 443. Some variants use their own encryption, others use SSL.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf",
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hacksfase"
        ],
        "uuid": "5e88d4ca-07b1-42fb-9220-c5b0b3bf20f3",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "hackfase",
    "analysis": null
};