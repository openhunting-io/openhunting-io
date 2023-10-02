var threatdata = {
    "name": "XDSpy",
    "alias": "XDSpy",
    "category": "APT",
    "type": "-",
    "modified": "2021-04-29",
    "all_data": {
        "actor": "XDSpy",
        "names": [
            {
                "name": "XDSpy",
                "name-giver": "ESET"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2011",
        "description": "(ESET) Rare is the APT group that goes largely undetected for nine years, but XDSpy is just that; a previously undocumented espionage group that has been active since 2011. It has attracted very little public attention, with the exception of an advisory from the Belarusian CERT in February 2020. In the interim, the group compromised many government agencies and private companies in Eastern Europe and the Balkans.\n\nIn this paper, we present our analysis of this nine-year-long espionage campaign, active since 2011, but which apparently went dark in February 2020.\n\nWith its primary purpose seemingly being cyber espionage, this group stole documents and other sensitive files, such as victims\u2019 mailboxes. These outcomes were achieved through the use of the XDSpy malware ecosystem, composed of at least seven components: XDDown, XDRecon, XDList, XDMonitor, XDUpload, XDLoc and XDPass. As our research has not uncovered links with any previously known APT groups, we have attributed this malware toolset to a previously unknown group.",
        "observed-sectors": [
            "Government"
        ],
        "observed-countries": [
            "Belarus",
            "Moldova",
            "Russia",
            "Serbia",
            "Ukraine"
        ],
        "tools": [
            "ChromePass",
            "IE PassView",
            "MailPassView",
            "Network Password Recovery",
            "OperaPassView",
            "PasswordFox",
            "Protected Storage PassView",
            "XDDown",
            "XDList",
            "XDLoc",
            "XDMonitor",
            "XDPass",
            "XDRecon",
            "XDUpload"
        ],
        "information": [
            "https://vblocalhost.com/uploads/VB2020-Faou-Labelle.pdf"
        ],
        "uuid": "647ee86f-5474-437c-b2e3-825424b0fd1c",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "xdspy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2021/04/ESET_Industry_Report_Government.pdf",
            "date": "2021-04-29",
            "organization": "ESET Research",
            "author": "Robert Lipovsky",
            "title": "ESET Industry Report on Government: Targeted but not alone",
            "categories": [
                "Exaramel",
                "Crutch",
                "Exaramel",
                "HyperBro",
                "HyperSSL",
                "InvisiMole",
                "XDSpy"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/10/02/xdspy-stealing-government-secrets-since-2011/",
            "date": "2020-10-02",
            "organization": "ESET Research",
            "author": "Matthieu Faou",
            "title": "XDSpy: Stealing government secrets since 2011",
            "categories": [
                "XDSpy",
                "XDSpy"
            ]
        },
        {
            "data_url": "https://github.com/eset/malware-ioc/tree/master/xdspy/",
            "date": "2020-10-01",
            "organization": "Github (eset)",
            "author": "Matthieu Faou",
            "title": "XDSpy Indicators of Compromise",
            "categories": [
                "XDSpy",
                "XDSpy"
            ]
        },
        {
            "data_url": "https://vblocalhost.com/uploads/VB2020-Faou-Labelle.pdf",
            "date": "2020-09-30",
            "organization": "Virus Bulletin",
            "author": "Matthieu Faou",
            "title": "XDSPY: STEALING GOVERNMENT SECRETS SINCE 2011",
            "categories": [
                "XDSpy",
                "XDSpy"
            ]
        }
    ],
    "mitre": []
};