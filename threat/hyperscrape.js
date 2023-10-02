var threatdata = {
    "name": "HYPERSCRAPE",
    "alias": "HYPERSCRAPE",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "HYPERSCRAPE",
        "names": [
            {
                "name": "HYPERSCRAPE"
            }
        ],
        "description": "(Google) HYPERSCRAPE requires the victim\u2019s account credentials to run using a valid, authenticated user session the attacker has hijacked, or credentials the attacker has already acquired. It spoofs the user agent to look like an outdated browser, which enables the basic HTML view in Gmail. Once logged in, the tool changes the account\u2019s language settings to English and iterates through the contents of the mailbox, individually downloading messages as .eml files and marking them unread. After the program has finished downloading the inbox, it reverts the language back to its original settings and deletes any security emails from Google. Earlier versions contained the option to request data from Google Takeout, a feature which allows users to export their data to a downloadable archive file.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "https://blog.google/threat-analysis-group/new-iranian-apt-data-extraction-tool/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hyperscrape"
        ],
        "uuid": "1274a300-b39b-48f0-8648-8e0f46fe91fe",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hyperscrape",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.google/threat-analysis-group/new-iranian-apt-data-extraction-tool/",
            "date": "2022-08-23",
            "organization": "Google",
            "author": "Ajax Bash",
            "title": "New Iranian APT data extraction tool",
            "categories": [
                "HYPERSCRAPE"
            ]
        }
    ],
    "mitre": []
};