var threatdata = {
    "name": "xsPlus",
    "alias": "xsPlus, xsControl, nokian",
    "category": "Malware",
    "type": "Loader, Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "xsPlus",
        "names": [
            {
                "name": "xsPlus"
            },
            {
                "name": "xsControl"
            },
            {
                "name": "nokian"
            }
        ],
        "description": "(Kaspersky) In 2014 the Naikon gang was found to be using another tool that maintains an internal name \u201cxsPlus\u201d and \u201cxsControl\u201d. This builder and its backdoors produce components with the \u201cNOKIAN95/WEBx\u201d user-agent strings, for which there are multiple versions.",
        "category": "Malware",
        "type": [
            "Loader",
            "Backdoor"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07205555/TheNaikonAPT-MsnMM1.pdf",
            "https://securelist.com/analysis/publications/69953/the-naikon-apt/",
            "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xsplus"
        ],
        "uuid": "e0d785f4-56fb-46ad-a134-0b50133bdc03",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xsplus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://securelist.com/analysis/publications/69953/the-naikon-apt/",
            "date": "2015-05-14",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "The Naikon APT",
            "categories": [
                "Naikon",
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus",
                "APT30",
                "Naikon"
            ]
        },
        {
            "data_url": "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/TheNaikonAPT-MsnMM1.pdf",
            "date": "2015-05",
            "organization": "Kaspersky Labs",
            "author": "Kurt Baumgartner",
            "title": "The MsnMM Campaigns - The Earliest Naikon APTCampaigns",
            "categories": [
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/fireye/images/rpt-apt30.pdf",
            "date": "2015-04",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT30 AND THE MECHANICS OF A LONG-RUNNING CYBER ESPIONAGE OPERATION",
            "categories": [
                "BACKBEND",
                "backspace",
                "CREAMSICLE",
                "FLASHFLOOD",
                "GEMCUTTER",
                "MILKMAID",
                "Naikon",
                "NETEAGLE",
                "ORANGEADE",
                "SHIPSHAPE",
                "SPACESHIP",
                "SslMM",
                "Sys10",
                "WinMM",
                "xsPlus",
                "APT30"
            ]
        }
    ],
    "mitre": []
};