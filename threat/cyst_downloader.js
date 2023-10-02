var threatdata = {
    "name": "Cyst Downloader",
    "alias": "Cyst Downloader",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Cyst Downloader",
        "names": [
            {
                "name": "Cyst Downloader"
            }
        ],
        "description": "(Proofpoint) In at least in one case we observed an MWI document install a previously unknown malware (SHA256: af17a3b5bf4c78283b2ee338ac6d457b9f3e7b7187c7e9d8651452b78574b3d3). We are calling it the Cyst Downloader. The functionality of this loader is limited. It can create a mutex such as \u201csyst<10 digits>\u201d and communicate with the the C&C server to receive a DLL plugin. The URI path pattern of the C&C beacon contains a folder (random alphanumeric name) followed by a file (random alphanumeric name) with a .jpg, .php, .gif, or .png extension. The downloaded DLL is encrypted with a hardcoded '\\x28\\xBF\\x0A\\xBE\\x5B\\x6E\\x70\\x03' RC4  key and base64 encoded. The server sends the DLL in HTML comments in a fake 404 response.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/microsoft-word-intruder-integrates-cve-2017-0199-utilized-cobalt-group-target"
        ],
        "uuid": "89f71881-355d-455c-bfaa-b310d1695b5d",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cyst_downloader",
    "analysis": null,
    "articles": [],
    "mitre": []
};