var threatdata = {
    "name": "GUP Proxy Tool",
    "alias": "GUP Proxy Tool",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "GUP Proxy Tool",
        "names": [
            {
                "name": "GUP Proxy Tool"
            }
        ],
        "description": "(Proofpoint) The GUP command and control proxy tool may impersonate the name of a piece of legitimate opensource\u202fsoftware available at\u202fwingup[.]org, which is used by Notepad++. In historic campaigns\u202fby APT adversaries, legitimate GUP.exe versions were utilized that were digitally signed by Notepad++. In this campaign, files appeared to impersonate the GUP.exe file name rather than being a legitimate signed binary. The function of this tool is to set up a TCP listener on a localhost, receive encoded data via requests from the\u202fSodomNormal\u202flocalhost module, and to forward this data to the command and control IP via HTTP. The GUP Proxy Tool has a hardcoded configuration which is included as both strings and integers.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/lookback-malware-targets-united-states-utilities-sector-phishing-attacks"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gup_proxy"
        ],
        "uuid": "bbb65fa6-b7ba-4d24-9b9d-5e189dcba544",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gup_proxy_tool",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/lookback-malware-targets-united-states-utilities-sector-phishing-attacks",
            "date": "2019-08-01",
            "organization": "Proofpoint",
            "author": "Michael Raggi",
            "title": "LookBack Malware Targets the United States Utilities Sector with Phishing Attacks Impersonating Engineering Licensing Boards",
            "categories": [
                "GUP Proxy Tool",
                "Lookback",
                "TA410"
            ]
        }
    ],
    "mitre": []
};