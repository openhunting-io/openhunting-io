var threatdata = {
    "name": "CALENDAR",
    "alias": "CALENDAR",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "CALENDAR",
        "names": [
            {
                "name": "CALENDAR"
            }
        ],
        "description": "This family of malware uses Google Calendar to retrieve commands and send results. It retrieves event feeds associated with Google Calendar, where each event contains commands from the attacker for the malware to perform. Results are posted back to the event feed. The malware authenticates with Google using the hard coded email address and passwords. The malware uses the deprecated ClientLogin authentication API from Google. The malware is registered as a service dll as a persistence mechanism. Artifacts of this may be found in the registry.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf",
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0025/"
        ],
        "uuid": "8654f906-6d71-4f2d-af7a-fc5f49e8afc2",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "calendar",
    "analysis": null
};