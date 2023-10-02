var threatdata = {
    "name": "ChewBacca",
    "alias": "ChewBacca",
    "category": "Malware",
    "type": "POS malware, Keylogger, Credential stealer",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "ChewBacca",
        "names": [
            {
                "name": "ChewBacca"
            }
        ],
        "description": "(Trend Micro) ChewBacca is a PoS RAM scraper family, first discovered at the end of 2013, which uses the Tor network to exfiltrate stolen data. When first executed, ChewBacca copies itself to %USERPROFILE%\\START MENU\\Programs\\Startup\\spoolsv.exe and adds itself to an Auto Start runkey to remain persistent. It is self-contained and installs obfsproxy v0.2.3.25\u2014a Tor proxy application\u2014in %TEMP%. It then hooks WH_KEYBOARD_LL, which monitors keyboard input events. This allows ChewBacca to capture all keyboard events, which are then logged to %TEMP%\\system.log.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Keylogger",
            "Credential stealer"
        ],
        "information": [
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf",
            "https://www.securelist.com/en/blog/208214185/ChewBacca_a_new_episode_of_Tor_based_Malware",
            "https://threatpost.com/chewbacca-point-of-sale-malware-campaign-found-in-10-countries/103985/",
            "https://threatpost.com/points-of-sale-poorly-secured-facing-sophisticated-attacks/106027/",
            "http://vinsula.com/2014/03/01/chewbacca-tor-based-pos-malware/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.chewbacca"
        ],
        "uuid": "639ab604-a3b4-4e35-9eaf-b67b0d4d9503",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "chewbacca",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://vinsula.com/2014/03/01/chewbacca-tor-based-pos-malware/",
            "date": "2014-03-01",
            "organization": "Vinsula",
            "author": "Ivo Ivanov",
            "title": "ChewBacca \u2013 A TOR Based POS Malware",
            "categories": [
                "ChewBacca"
            ]
        }
    ],
    "mitre": []
};