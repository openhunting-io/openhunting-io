var threatdata = {
    "name": "PowerSpritz",
    "alias": "PowerSpritz",
    "category": "Malware",
    "type": "Dropper, Downloader",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "PowerSpritz",
        "names": [
            {
                "name": "PowerSpritz"
            }
        ],
        "description": "(Proofpoint) PowerSpritz is a Windows executable that hides both its legitimate payload and malicious PowerShell command using a non-standard implementation of the already rarely used Spritz encryption algorithm.\n\nPowerSpritz decrypts a legitimate Skype or Telegram installer using a custom Spritz implementation with the key \u201cZnxkai@if8qa9w9489\u201d. PowerSpritz then writes the legitimate installer to disk in the directory returned by GetTempPathA either as a hardcoded filename such as SkypeSetup.exe or, in some versions, as the filename returned by GetTempFileNameA. The installer is then executed to trick the potential victim into thinking they downloaded a legitimate, working application installer or update. Finally, Spritz uses the same key to decrypt a PowerShell command that downloads the first stage of {{PowerRatankba}}.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/sites/default/files/pfpt-us-wp-north-korea-bitten-by-bitcoin-bug.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.powerspritz"
        ],
        "uuid": "f28aaa58-5e8d-469b-82db-dbf7fb246947",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powerspritz",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.proofpoint.com/sites/default/files/pfpt-us-wp-north-korea-bitten-by-bitcoin-bug.pdf",
            "date": "2017-12-19",
            "organization": "Proofpoint",
            "author": "Darien Huss",
            "title": "North Korea Bitten by  Bitcoin Bug",
            "categories": [
                "QUICKCAFE",
                "PowerSpritz",
                "Ghost RAT",
                "PowerRatankba"
            ]
        }
    ],
    "mitre": []
};