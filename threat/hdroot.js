var threatdata = {
    "name": "HDRoot",
    "alias": "HDRoot, HDD Rootkit",
    "category": "Malware",
    "type": "Backdoor, Rootkit",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "HDRoot",
        "names": [
            {
                "name": "HDRoot"
            },
            {
                "name": "HDD Rootkit"
            }
        ],
        "description": "(Kaspersky) The program parameters are quite self-explanatory \u2013 this tool installs a bootkit that infects the operating system during the boot stage with an arbitrary backdoor specified as a parameter. The backdoor has to be a Win32 executable or dynamic link library.\n\nThis utility is called \u201cHDD Rootkit\u201d; hence the base of our verdict names HDRoot. On 22 August 2006 the version number was 1.2.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Rootkit"
        ],
        "information": [
            "https://securelist.com/i-am-hdroot-part-1/72275/",
            "https://securelist.com/analysis/publications/72356/i-am-hdroot-part-2/",
            "http://williamshowalter.com/a-universal-windows-bootkit/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hdroot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:hdroot"
        ],
        "uuid": "e4011e0b-4d30-47ab-999a-2859bd0302ef",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hdroot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/i-am-hdroot-part-2/72356/",
            "date": "2015-10-13",
            "organization": "Kaspersky Labs",
            "author": "Dmitry Tarakanov",
            "title": "I am HDRoot! Part 2",
            "categories": [
                "HDRoot"
            ]
        },
        {
            "data_url": "https://securelist.com/i-am-hdroot-part-1/72275/",
            "date": "2015-10-06",
            "organization": "Kaspersky Labs",
            "author": "Dmitry Tarakanov",
            "title": "I am HDRoot! Part 1",
            "categories": [
                "HDRoot"
            ]
        }
    ],
    "mitre": []
};