var threatdata = {
    "name": "WndTest",
    "alias": "WndTest",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "WndTest",
        "names": [
            {
                "name": "WndTest"
            }
        ],
        "description": "(Cylance) WndTest is the evolution of the PVZ tool chain into a single executable. The tool chain is minimized down to a command and control communications, keystroke logging, and clipboard monitoring. The command and control still supports upgrading, downloading, and executing of applications, as well as executing batch scripts. WndTest installs as a service and has been observed attempting to impersonate Adobe Report Service. WndTest starts using PHP servers for its command and control server, some of which are listed as defaced sites.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://www.cylance.com/content/dam/cylance/pdfs/reports/Cylance_Operation_Cleaver_Report.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.wndtest"
        ],
        "uuid": "a93adfe0-0977-4462-b74b-eefe7ac82ff8",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wndtest",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cylance.com/content/dam/cylance/pages/operation-cleaver/Cylance_Operation_Cleaver_Report.pdf",
            "date": "2016-04-06",
            "organization": "Cylance",
            "author": "Cylance",
            "title": "Operation Cleaver",
            "categories": [
                "CsExt",
                "Jasus",
                "KAgent",
                "NetC",
                "PvzOut",
                "SynFlooder",
                "TinyZbot",
                "WndTest",
                "ZhCat",
                "ZhMimikatz",
                "Cleaver"
            ]
        }
    ],
    "mitre": []
};