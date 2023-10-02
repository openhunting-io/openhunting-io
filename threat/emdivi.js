var threatdata = {
    "name": "Emdivi",
    "alias": "Emdivi, Newsripper",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Emdivi",
        "names": [
            {
                "name": "Emdivi"
            },
            {
                "name": "Newsripper"
            }
        ],
        "description": "(Kaspersky) The emdivi family stores important data about itself, including C2, API name, strings for anti-analysis, value of mutexes, as well as the md5 checksum of backdoor commands and the internal proxy information. They are stored in encrypted form, and are decrypted when necessary. Therefore, to analyze an emdivi sample in detail, we need to locate which hex codes are encrypted, and how to decrypt them. In the process of decryption, a unique decryption key is required for each sample.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/new-activity-of-the-blue-termite-apt/71876/",
            "https://blogs.jpcert.or.jp/en/2015/11/emdivi-and-the-rise-of-targeted-attacks-in-japan.html",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/chessmaster-cyber-espionage-campaign/",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/attackers-target-organizations-in-japan-transform-local-sites-into-cc-servers-for-emdivi-backdoor/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.emdivi"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:emdivi"
        ],
        "uuid": "bdd9c8ab-168e-4a3f-a35a-3dd670a9bd02",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "emdivi",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2020/05/vb2019-paper-apt-cases-exploiting-vulnerabilities-regionspecific-software/",
            "date": "2019-11-11",
            "organization": "Virus Bulletin",
            "author": "Shusei Tomonaga",
            "title": "APT cases exploiting vulnerabilities in region\u2011specific software",
            "categories": [
                "NodeRAT",
                "Emdivi",
                "PlugX"
            ]
        },
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/chessmaster-cyber-espionage-campaign/",
            "date": "2017-07-27",
            "organization": "Trend Micro",
            "author": "Benson Sy",
            "title": "ChessMaster Makes its Move: A Look into the Campaign\u2019s Cyberespionage Arsenal",
            "categories": [
                "Emdivi"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/security_report_20160613.pdf",
            "date": "2016-06-13",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Survey of the actual situation of the large-scale cyber spy activity that hit Japan | 1st edition",
            "categories": [
                "Emdivi",
                "PlugX"
            ]
        },
        {
            "data_url": "http://blog.jpcert.or.jp/2015/11/decrypting-strings-in-emdivi.html",
            "date": "2015-11-19",
            "organization": "JPCERT/CC",
            "author": "You Nakatsuru",
            "title": "Decrypting Strings in Emdivi",
            "categories": [
                "Emdivi"
            ]
        },
        {
            "data_url": "http://blog.trendmicro.com/trendlabs-security-intelligence/attackers-target-organizations-in-japan-transform-local-sites-into-cc-servers-for-emdivi-backdoor/",
            "date": "2015-09-01",
            "organization": "Trend Micro",
            "author": "Benson Sy",
            "title": "Attackers Target Organizations in Japan; Transform Local Sites into C&C Servers for EMDIVI Backdoor",
            "categories": [
                "Emdivi"
            ]
        },
        {
            "data_url": "https://securelist.com/new-activity-of-the-blue-termite-apt/71876/",
            "date": "2015-08-20",
            "organization": "Kaspersky Labs",
            "author": "Suguru Ishimaru",
            "title": "New activity of the Blue Termite APT",
            "categories": [
                "Emdivi"
            ]
        }
    ],
    "mitre": []
};