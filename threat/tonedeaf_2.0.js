var threatdata = {
    "name": "TONEDEAF 2.0",
    "alias": "TONEDEAF 2.0",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Tunneling, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "TONEDEAF 2.0",
        "names": [
            {
                "name": "TONEDEAF 2.0"
            }
        ],
        "description": "(Intezer) At first glance, \u201cClient update.exe\u201d seems like a completely new backdoor malware. However, further examination reveals it\u2019s most likely a highly modified version of the previously seen {{TONEDEAF}} backdoor. TONEDEAF is a backdoor that communicates with its Command and Control server via HTTP in order to receive and execute commands. It was mentioned in FireEye\u2019s recent report about an ongoing APT34 operation, as one of the group\u2019s custom tools. We have named the new variant TONEDEAF 2.0.\n\nTONEDEAF 2.0 is an advanced version of TONEDEAF, serving the same purpose as the original, but with a revamped C2 communication protocol and a substantially modified code base. In contrast to the original TONEDEAF, TONEDEAF 2.0 contains solely arbitrary shell execution capabilities, and doesn\u2019t support any predefined commands. It\u2019s also more stealthy and contains new tricks such as dynamic importing, string decoding, and a victim deception method.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Tunneling",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://intezer.com/blog/apt/new-iranian-campaign-tailored-to-us-companies-uses-updated-toolset/"
        ],
        "uuid": "23cf2c05-faff-48b6-91af-4fc9158edbec",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tonedeaf_2.0",
    "analysis": null,
    "articles": [],
    "mitre": []
};