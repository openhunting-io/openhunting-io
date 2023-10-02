var threatdata = {
    "name": "BeaconLoader",
    "alias": "BeaconLoader",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-11-02",
    "all_data": {
        "tool": "BeaconLoader",
        "names": [
            {
                "name": "BeaconLoader"
            }
        ],
        "description": "(Positive Technologies) BeaconLoader is uploaded using DLL Hijacking. At the first stage, the library receives the addresses of the functions and libraries necessary for its operation. Then, it checks the name of the parent process and the privilege type (for further work, the SYSTEM type and names msdtc.exe, msdtc.exe.mui, and vmtoolsd.exe are required).",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/new-apt-group-chamelgang/"
        ],
        "uuid": "93c315eb-5c5a-4e9c-8b31-14216ff9a407",
        "last-card-change": "2021-11-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "beaconloader",
    "analysis": null,
    "articles": [],
    "mitre": []
};