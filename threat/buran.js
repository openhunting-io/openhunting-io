var threatdata = {
    "name": "Buran",
    "alias": "Buran, VegaLocker, Vega",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2022-03-16",
    "all_data": {
        "tool": "Buran",
        "names": [
            {
                "name": "Buran"
            },
            {
                "name": "VegaLocker"
            },
            {
                "name": "Vega"
            }
        ],
        "description": "(ESET) The component that first attracted our attention is the previously unseen Win32/Filecoder.Buran. It is a Delphi binary that sometimes comes packed. It was mainly distributed during February and March of 2019. It implements the expected behavior of ransomware, discovering local drives and network shares and encrypting files found on these devices. It doesn\u2019t require an internet connection to encrypt its victims\u2019 files, since it doesn\u2019t communicate with a server to send the encryption keys. Instead, it appends a \u201ctoken\u201d at the end of the ransom message and demands that the victims communicate with the operators via email or Bitmessage.\n\nTo encrypt as many important resources as possible, Filecoder.Buran starts a thread dedicated to killing key software that might have open handles on files containing valuable data, thus preventing them being encrypted. The targeted processes are mainly database management systems (DBMS). Furthermore, Filecoder.Buran removes log files and backups, to make it as difficult as possible for victims without any offline backups to recover their files.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://www.welivesecurity.com/2019/04/30/buhtrap-backdoor-ransomware-advertising-platform/",
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/buran-ransomware-the-evolution-of-vegalocker/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.vegalocker"
        ],
        "uuid": "a9995f6b-30ae-4e92-8fbf-60375500b7db",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "buran",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.symantec.broadcom.com/hubfs/SED/SED_Threat_Hunter_Reports_Alerts/SED_FY22Q2_SES_Ransomware-Threat-Landscape_WP.pdf",
            "date": "2022-03-16",
            "organization": "Symantec",
            "author": "Symantec Threat Hunter Team",
            "title": "The Ransomware Threat Landscape: What to Expect in 2022",
            "categories": [
                "AvosLocker",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Emotet",
                "Hive",
                "Karma",
                "Mespinoza",
                "Nemty",
                "Squirrelwaffle",
                "VegaLocker",
                "WastedLocker",
                "Yanluowang",
                "Zeppelin"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/man1-moskal-hancitor-and-a-side-of-ransomware-d77b4d991618",
            "date": "2021-01-10",
            "organization": "Medium walmartglobaltech",
            "author": "Jason Reaves",
            "title": "MAN1, Moskal, Hancitor and a side of Ransomware",
            "categories": [
                "Cobalt Strike",
                "Hancitor",
                "SendSafe",
                "VegaLocker"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/buran-ransomware-the-evolution-of-vegalocker/",
            "date": "2019-11-05",
            "organization": "McAfee",
            "author": "Alexandre Mundo",
            "title": "Buran Ransomware; the Evolution of VegaLocker",
            "categories": [
                "VegaLocker"
            ]
        },
        {
            "data_url": "https://twitter.com/malwrhunterteam/status/1095024267459284992",
            "date": "2019-02-11",
            "organization": "Twitter (@malwrhunterteam)",
            "author": "malwrhunterteam",
            "title": "Tweet on VegaLocker",
            "categories": [
                "VegaLocker"
            ]
        },
        {
            "data_url": "https://twitter.com/malwrhunterteam/status/1093136163836174339",
            "date": "2019-02-06",
            "organization": "Twitter (@malwrhunterteam)",
            "author": "MalwareHunterTeam",
            "title": "Tweet on Ransomware Sample",
            "categories": [
                "VegaLocker"
            ]
        }
    ],
    "mitre": []
};