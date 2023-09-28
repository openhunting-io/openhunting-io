var threatdata = {
    "name": "TABBYCAT",
    "alias": "TABBYCAT",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2022-09-13",
    "all_data": {
        "tool": "TABBYCAT",
        "names": [
            {
                "name": "TABBYCAT"
            }
        ],
        "description": "(Mandiant) TABBYCAT is a Microsoft Word VBA macro that functions as a dropper. It relies on social engineering in order to be executed as a macro within a decoy Microsoft Word document. It decodes a payload embedded in a UserForm and launches it. TABBYCAT has been observed dropping the {{VBREVSHELL}} backdoor.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.mandiant.com/media/17826"
        ],
        "uuid": "f2492a15-807d-4884-a9c5-26a237bad2bf",
        "last-card-change": "2022-09-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "tabbycat",
    "analysis": null
};