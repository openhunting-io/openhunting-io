var threatdata = {
    "name": "ManItsMe",
    "alias": "ManItsMe",
    "category": "Malware",
    "type": "Dropper, Backdoor, Exfiltration",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "ManItsMe",
        "names": [
            {
                "name": "ManItsMe"
            }
        ],
        "description": "This family of malware will beacon out at random intervals to the remote attacker. The attacker can run programs, execute arbitrary commands, and easily upload and download files. This IOC looks for both the dropper file and the backdoor.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf",
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.manitsme"
        ],
        "uuid": "6b34880a-0238-4f93-84c1-a00ad38a3202",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "manitsme",
    "analysis": null
};