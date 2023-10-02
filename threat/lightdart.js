var threatdata = {
    "name": "LIGHTDART",
    "alias": "LIGHTDART",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "LIGHTDART",
        "names": [
            {
                "name": "LIGHTDART"
            }
        ],
        "description": "LIGHTDART is a tool used to access a pre-configured web page that hosts an interface to query a database or data set. The tool then downloads the results of a query against that web page to an encrypted RAR file. This RAR file (1.rar) is renamed and uploaded to an attacker controlled FTP server, or uploaded via an HTTP POST with a .jpg extension. The malware will execute this search once a day. The target webpage usually contains information useful to the attacker, which is updated on a regular basis. Examples of targeted information include weather information or ship coordinates.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "uuid": "e9767a75-c5bf-4193-a6b0-1d7dcdec01d1",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lightdart",
    "analysis": null,
    "articles": [],
    "mitre": []
};