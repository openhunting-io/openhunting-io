var threatdata = {
    "name": "PowerPool",
    "alias": "PowerPool",
    "category": "APT",
    "type": "-",
    "modified": "2020-10-02",
    "all_data": {
        "actor": "PowerPool",
        "names": [
            {
                "name": "PowerPool",
                "name-giver": "ESET"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2018",
        "description": "(ESET) On August 27, 2018, a so-called zero-day vulnerability affecting Microsoft Windows was published on GitHub and publicized via a rather acerbic tweet.\n\nIt seems obvious that this was not part of a coordinated vulnerability disclosure and there was no patch at the time this tweet (since deleted) was published to fix the vulnerability.\n\nIt affects Microsoft Windows OSes from Windows 7 to Windows 10, and in particular the Advanced Local Procedure Call (ALPC) function, and allows a Local Privilege Escalation (LPE). LPE allows an executable or process to escalate privileges. In that specific case, it allows an executable launched by a restricted user to gain administrative rights.\n\nThe tweet linked to a GitHub repository that contains Proof-of-Concept code for the exploit. Not only was a compiled version released \u2013 the source code was also. Consequently, anyone can modify and recompile the exploit, in order to \u201cimprove it\u201d, evade detection, or even incorporate it into their code.\n\nAs one could have predicted, it took only two days before we first identified the use of this exploit in a malicious campaign from a group we have dubbed PowerPool. This group has a small number of victims and according to both our telemetry and uploads to VirusTotal (we only considered manual uploads from the web interface), the targeted countries include Chile, Germany, India, the Philippines, Poland, Russia, the United Kingdom, the United States and Ukraine.",
        "observed-countries": [
            "Chile",
            "Germany",
            "India",
            "Philippines",
            "Poland",
            "Russia",
            "UK",
            "Ukraine",
            "USA",
            "others"
        ],
        "tools": [
            "ALPC Local PrivEsc",
            "FireMaster",
            "PowerDump",
            "PowerSploit",
            "Quarks PwDump",
            "SMBExec"
        ],
        "information": [
            "https://www.welivesecurity.com/2018/09/05/powerpool-malware-exploits-zero-day-vulnerability/"
        ],
        "uuid": "8ed6a653-b094-43f9-9127-628a84a6b72a",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powerpool",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://twitter.com/craiu/status/1311920398259367942",
            "date": "2020-10-02",
            "organization": "Twitter (@craiu)",
            "author": "Costin Raiu",
            "title": "Tweet about IAmTheKing / PowerPool actor naming",
            "categories": [
                "PowerPool"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/windows-task-scheduler-zero-day-exploited-by-malware/",
            "date": "2018-09-05",
            "organization": "Bleeping Computer",
            "author": "Ionut Ilascu",
            "title": "Windows Task Scheduler Zero Day Exploited by Malware",
            "categories": [
                "PowerPool"
            ]
        },
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