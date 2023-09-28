var threatdata = {
    "name": "IHEATE",
    "alias": "IHEATE",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "IHEATE",
        "names": [
            {
                "name": "IHEATE"
            }
        ],
        "description": "(Trend Micro) These attacks targeting users in the United States used a variant of {{IXESHE}} which has been seen in Taiwan since 2009 named IHEATE. These showed some differences from known IXESHE variants: they had a different command-and-control (C&C) communication model and encryption methods.\n\nOne IHEATE sample we found contains the string \u201cEMC112\u201d as part of the C&C traffic. Such strings are frequently used to identify different campaigns. In this particular case, the 112 part of the string matched the malware sample\u2019s compilation date of January 12.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/ixeshe-derivative-iheate-targets-users-america/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:iheate"
        ],
        "uuid": "28292c71-c66a-450d-a2d0-d096f954e150",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "iheate",
    "analysis": null
};