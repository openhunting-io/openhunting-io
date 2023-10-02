var threatdata = {
    "name": "BackBend",
    "alias": "BackBend",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "BackBend",
        "names": [
            {
                "name": "BackBend"
            }
        ],
        "description": "FireEye describes BACKBEND as a secondary downloader used as a backup mechanism in the case the primary backdoor is removed. When executed, BACKBEND checks for the presence of the mutexes MicrosoftZj or MicrosoftZjBak (both associated with {{Backspace}} variants). If either of the mutexes exist, the malware exits.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.backbend"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BACKBEND"
        ],
        "uuid": "37dfba7c-7342-4b75-b3a1-3222f329562d",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "backbend",
    "analysis": null,
    "articles": [],
    "mitre": []
};