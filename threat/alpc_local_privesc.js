var threatdata = {
    "name": "ALPC Local PrivEsc",
    "alias": "ALPC Local PrivEsc",
    "category": "Exploits",
    "type": "0-day",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "ALPC Local PrivEsc",
        "names": [
            {
                "name": "ALPC Local PrivEsc"
            }
        ],
        "description": "(ESET) On August 27, 2018, a so-called zero-day vulnerability affecting Microsoft Windows was published on GitHub and publicized via a rather acerbic tweet.\n\nIt seems obvious that this was not part of a coordinated vulnerability disclosure and there was no patch at the time this tweet (since deleted) was published to fix the vulnerability.\n\nIt affects Microsoft Windows OSes from Windows 7 to Windows 10, and in particular the Advanced Local Procedure Call (ALPC) function, and allows a Local Privilege Escalation (LPE). LPE allows an executable or process to escalate privileges. In that specific case, it allows an executable launched by a restricted user to gain administrative rights.",
        "category": "Exploits",
        "type": [
            "0-day"
        ],
        "information": [
            "https://www.welivesecurity.com/2018/09/05/powerpool-malware-exploits-zero-day-vulnerability/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.alpc_lpe",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.powerpool"
        ],
        "uuid": "28800477-058d-4f60-bdab-719858a266dc",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "alpc_local_privesc",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2018/09/05/powerpool-malware-exploits-zero-day-vulnerability/",
            "date": "2018-09-05",
            "organization": "ESET Research",
            "author": "Matthieu Faou",
            "title": "PowerPool malware exploits ALPC LPE zero\u2011day vulnerability",
            "categories": [
                "ALPC Local PrivEsc",
                "PowerPool"
            ]
        }
    ],
    "mitre": []
};