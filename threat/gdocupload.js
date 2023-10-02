var threatdata = {
    "name": "GDOCUPLOAD",
    "alias": "GDOCUPLOAD",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "GDOCUPLOAD",
        "names": [
            {
                "name": "GDOCUPLOAD"
            }
        ],
        "description": "This family of malware is a utility designed to upload files to Google Docs. Nearly all communications are with docs.google.com are SSL encrypted. The malware does not use Google's published API to interact with their services. The malware does not currently work with Google Docs. It does not detect HTTP 302 redirections and will get caught in an infinite loop attempting to parse results from Google that are not present.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "uuid": "c257ce2d-344b-4323-b0b8-affa59a934bb",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gdocupload",
    "analysis": null,
    "articles": [],
    "mitre": []
};