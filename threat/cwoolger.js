var threatdata = {
    "name": "CWoolger",
    "alias": "CWoolger, Woolger, WoolenLogger",
    "category": "Malware",
    "type": "Keylogger",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "CWoolger",
        "names": [
            {
                "name": "CWoolger"
            },
            {
                "name": "Woolger"
            },
            {
                "name": "WoolenLogger"
            }
        ],
        "description": "(Trend Micro) Debug strings are strings that are sometimes left behind in binaries, revealing information about the developer behind the code. This debug string shows us that the binary was compiled by a user account named \u201cWool3n.H4t,\u201d and that the project behind this code was dubbed \u201cCWoolger.\u201d\n\nThis malware is a keylogger, although from a technical point of view, it is not as advanced as its contemporaries. The malware also embedded some File Transfer Protocol (FTP) credentials of the attackers in clear text in the binary.",
        "category": "Malware",
        "type": [
            "Keylogger"
        ],
        "information": [
            "https://www.trendmicro.com.ru/media/wp/operation-woolen-goldfish-whitepaper-en.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.woolger"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:CWoolger"
        ],
        "uuid": "6b6c4916-6022-419f-b53c-423d13b029f2",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "cwoolger",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.checkpoint.com/wp-content/uploads/2015/11/rocket-kitten-report.pdf",
            "date": "2015-11",
            "organization": "Check Point",
            "author": "Check Point",
            "title": "ROCKET KIT TEN: A CAMPAIGN WITH 9 LIVES",
            "categories": [
                "FireMalv",
                "MPKBot",
                "Woolger",
                "Cleaver",
                "Rocket Kitten"
            ]
        },
        {
            "data_url": "http://www.trendmicro.it/media/wp/operation-woolen-goldfish-whitepaper-en.pdf",
            "date": "2015-03-24",
            "organization": "Trend Micro",
            "author": "Cedric Pernet",
            "title": "Operation Woolen-Goldfish: When Kittens Go Phishing",
            "categories": [
                "Ghole",
                "Woolger"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/wp/wp-operation-woolen-goldfish.pdf",
            "date": "2015-03-19",
            "organization": "Trend Micro",
            "author": "Cedric Pernet",
            "title": "Operation WOOLEN-GOLDFISH: When Kittens Go Phishing",
            "categories": [
                "Ghole",
                "Woolger"
            ]
        }
    ],
    "mitre": []
};