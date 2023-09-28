var threatdata = {
    "name": "WARP",
    "alias": "WARP",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "WARP",
        "names": [
            {
                "name": "WARP"
            }
        ],
        "description": "The WARP malware family is an HTTP based backdoor written in C++, and the majority of its code base is borrowed from source code available in the public domain.  Network communications are implemented using the same WWW client library (w3c.cpp) available from www.dankrusi.com/file_69653F3336383837.html.  The malware has system survey functionality (collects hostname, current user, system uptime, CPU speed, etc.) taken directly from the BO2K backdoor available from www.bo2k.com.  It also contains the hard disk identification code found at www.winsim.com/diskid32/diskid32.cpp.  When the WARP executing remote commands, the malware creates a copy of the ?%SYSTEMROOT%\\system32\\cmd.exe? file as '%USERPROFILE%\\Temp\\~ISUN32.EXE'.  The version signature information of the duplicate executable is zeroed out.  Some WARP variants maintain persistence through the use of DLL search order hijacking.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "uuid": "7d3f89d6-21b4-46aa-bf98-945ceda5a847",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "warp",
    "analysis": null
};