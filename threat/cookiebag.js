var threatdata = {
    "name": "CookieBag",
    "alias": "CookieBag, TROJAN.COOKIES",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "CookieBag",
        "names": [
            {
                "name": "CookieBag"
            },
            {
                "name": "TROJAN.COOKIES"
            }
        ],
        "description": "This family of malware is a backdoor capable of file upload and download as well as providing remote interactive shell access to the compromised machine. Communication with the Command & Control (C2) servers uses a combination of single-byte XOR and Base64 encoded data in the Cookie and Set-Cookie HTTP header fields. Communication with the C2 servers is over port 80. Some variants install a registry key as means of a persistence mechanism. The hardcoded strings cited include a string of a command in common with several other APT1 families.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cookiebag"
        ],
        "uuid": "8df20cec-8073-495f-9c2d-cc6fb70028ec",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "cookiebag",
    "analysis": null
};