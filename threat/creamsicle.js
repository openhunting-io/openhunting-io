var threatdata = {
    "name": "Creamsicle",
    "alias": "Creamsicle",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Creamsicle",
        "names": [
            {
                "name": "Creamsicle"
            }
        ],
        "description": "(FireEye) CREAMSICLE attempts to download an encoded executable from a specified location.\n\nThe downloaded file is decoded, written to disk as %APPDATA%\\Norton360\\Engine\\5.1.0.29\\ccSvcHst.exe, and padded with 51,200,000 null bytes. CREAMSICLE does not appear to execute the downloaded file, presumably relying on Windows to do so (using the shortcut file in the user\u2019s Startup folder) the next time the user logs in.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2015/05/20081935/rpt-apt30.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.creamsicle"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:CREAMSICLE"
        ],
        "uuid": "ec3678b0-7ffb-4b53-ae26-cfbd54dfc3df",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "creamsicle",
    "analysis": null,
    "articles": [],
    "mitre": []
};