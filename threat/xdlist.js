var threatdata = {
    "name": "XDList",
    "alias": "XDList",
    "category": "Malware",
    "type": "Reconnaissance, Info stealer",
    "modified": "2020-10-19",
    "all_data": {
        "tool": "XDList",
        "names": [
            {
                "name": "XDList"
            }
        ],
        "description": "(ESET) XDList gathers information about the computers\u2019 files. It starts by recursive enumeration of all files on the C: drive, then writes the path of \u2018interesting\u2019 files to %APPDATA%\\Temp.NET\\list.dat. Some folders, such as Program Files, Windows, Temp or Temporary Internet Files, are not crawled, probably in order to reduce the number of files reported.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Info stealer"
        ],
        "information": [
            "https://vblocalhost.com/uploads/VB2020-Faou-Labelle.pdf"
        ],
        "uuid": "b94acbb3-e2ad-4de1-823c-7bb1dc1f3cc7",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xdlist",
    "analysis": null,
    "articles": [],
    "mitre": []
};