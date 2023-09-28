var threatdata = {
    "name": "TDTESS",
    "alias": "TDTESS",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "TDTESS",
        "names": [
            {
                "name": "TDTESS"
            }
        ],
        "description": "(ClearSky) TDTESS is 64-bit .NET binary backdoor that provides a reverse shell with an option to download and execute files. It routinely calls in to the command and control server for new instructions using basic authentication. Commands are sent via a web page. The malware creates a stealth service, which will not show on the service manager or other tools that enumerate services from WINAPI or Windows Management Instrumentation.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.clearskysec.com/wp-content/uploads/2017/07/Operation_Wilted_Tulip.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0164/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tdtess"
        ],
        "uuid": "c5b4a58f-1972-434b-bc58-b018be0f8276",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "tdtess",
    "analysis": null
};