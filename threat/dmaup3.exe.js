var threatdata = {
    "name": "DmaUp3.exe",
    "alias": "DmaUp3.exe",
    "category": "Malware",
    "type": "Reconnaissance, Credential stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "DmaUp3.exe",
        "names": [
            {
                "name": "DmaUp3.exe"
            }
        ],
        "description": "(Kaspersky) The module collects information about current system which includes the following:\n\u2022 Network adapter MAC address\n\u2022 CPU Name and Identifier\n\u2022 System default codepage\n\u2022 Windows OS and Service Pack versions\n\u2022 Hostname and IP address\n\u2022 Local user name\n\u2022 Cached passwords for Internet Explorer 6/7/8/9 (Protected Storage and IntelliForms)\n\u2022 Mozilla Firefox stored secrets (<12.0)\n\u2022 Chrome stored secrets\n\u2022 MS Outlook Express accounts\n\u2022 MS Windows Mail accounts\n\u2022 MS Windows Live Mail accounts\n\u2022 MS Outlook accounts (SMTP/IMAP/POP3/HTTP)\n\u2022 MSN Messenger\n\u2022 Gmail Nofifier credentials\n\u2022 Google Desktop accounts\n\u2022 Google Talk accounts\n\nIf the module reveals that current System default codepage is 0412 (Korean) it terminates.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Credential stealer"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08070901/darkhotelappendixindicators_kl.pdf"
        ],
        "uuid": "c4e969d2-f993-4a23-8cc9-7b117f14182e",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dmaup3.exe",
    "analysis": null,
    "articles": [],
    "mitre": []
};