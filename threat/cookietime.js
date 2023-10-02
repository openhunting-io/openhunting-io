var threatdata = {
    "name": "CookieTime",
    "alias": "CookieTime",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-05-16",
    "all_data": {
        "tool": "CookieTime",
        "names": [
            {
                "name": "CookieTime"
            }
        ],
        "description": "(Kaspersky) Compared to the already known malware clusters of the Lazarus group, CookieTime shows a different structure and functionality. This malware communicates with the C2 server using the HTTP protocol. In order to deliver the request type to the C2 server, it uses encoded cookie values and fetches command files from the C2 server. The C2 communication takes advantage of steganography techniques, delivered in files exchanged between infected clients and the C2 server. The contents are disguised as GIF image files, but contain encrypted commands from the C2 server and command execution results.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/apt-trends-report-q1-2021/101967/"
        ],
        "uuid": "2c9c5743-a34a-4098-b66c-0c0ec474ab50",
        "last-card-change": "2021-05-16",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cookietime",
    "analysis": null,
    "articles": [],
    "mitre": []
};