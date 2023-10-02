var threatdata = {
    "name": "Hermes",
    "alias": "Hermes",
    "category": "Malware",
    "type": "Ransomware",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Hermes",
        "names": [
            {
                "name": "Hermes"
            }
        ],
        "description": "(Malwarebytes) The ransomware copies itself into %TEMP% under the name svchosta.exe and redeploys itself from that location. The initial sample is then deleted.\n\nThe ransomware is not particularly stealthy\u2014some windows pop up during its run. For example, we are asked to run a batch script with administrator privileges.\n\nThe authors didn\u2019t bother to deploy any UAC bypass technique, relying only on social engineering for this. The pop-up is deployed in a loop, and by this way it tries to force the user into accepting it. But even if we don\u2019t let the batch script be deployed, the main executable proceeds with encryption.",
        "category": "Malware",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://blog.malwarebytes.com/threat-analysis/2018/03/hermes-ransomware-distributed-to-south-koreans-via-recent-flash-zero-day/",
            "https://blog.dcso.de/enterprise-malware-as-a-service/",
            "https://www.proofpoint.com/us/threat-insight/post/new-version-azorult-stealer-improves-loading-features-spreads-alongside"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hermes"
        ],
        "uuid": "af449984-8b3c-48da-aec9-bf6a133f3f8c",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "hermes",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://krebsonsecurity.com/2021/08/ransomware-gangs-and-the-name-game-distraction/",
            "date": "2021-08-05",
            "organization": "KrebsOnSecurity",
            "author": "Brian Krebs",
            "title": "Ransomware Gangs and the Name Game Distraction",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Babuk",
                "Cerber",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "FriedEx",
                "Gandcrab",
                "Hermes",
                "Maze",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet"
            ]
        },
        {
            "data_url": "https://i.blackhat.com/eu-20/Wednesday/eu-20-Rivera-From-Zero-To-Sixty-The-Story-Of-North-Koreas-Rapid-Ascent-To-Becoming-A-Global-Cyber-Superpower.pdf",
            "date": "2020-12-09",
            "organization": "CrowdStrike",
            "author": "Josh Burgess",
            "title": "From Zero to SixtyThe Story of North Korea\u2019s Rapid Ascent to Becoming a Global Cyber Superpower",
            "categories": [
                "FastCash",
                "Hermes",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://vxhive.blogspot.com/2020/11/deep-dive-into-hermes-ransomware.html",
            "date": "2020-11-21",
            "organization": "vxhive blog",
            "author": "0xastrovax",
            "title": "Deep Dive Into HERMES Ransomware",
            "categories": [
                "Hermes"
            ]
        },
        {
            "data_url": "https://medium.com/ax1al/reversing-ryuk-eef8ffd55f12",
            "date": "2020-11-14",
            "organization": "Medium 0xastrovax",
            "author": "astrovax",
            "title": "Deep Dive Into Ryuk Ransomware",
            "categories": [
                "Hermes",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/03/05/human-operated-ransomware-attacks-a-preventable-disaster/",
            "date": "2020-03-05",
            "organization": "Microsoft",
            "author": "Microsoft Threat Protection Intelligence Team",
            "title": "Human-operated ransomware attacks: A preventable disaster",
            "categories": [
                "Dharma",
                "DoppelPaymer",
                "Dridex",
                "EternalPetya",
                "Gandcrab",
                "Hermes",
                "LockerGoga",
                "MegaCortex",
                "MimiKatz",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SamSam",
                "TrickBot",
                "WannaCryptor",
                "PARINACOTA"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/ressources/Lexfo-WhitePaper-The_Lazarus_Constellation.pdf",
            "date": "2020-02-19",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "The Lazarus Constellation A study on North Korean malware",
            "categories": [
                "FastCash",
                "AppleJeus",
                "BADCALL",
                "Bankshot",
                "Brambul",
                "Dtrack",
                "Duuzer",
                "DYEPACK",
                "ELECTRICFISH",
                "HARDRAIN",
                "Hermes",
                "HOPLIGHT",
                "Joanap",
                "KEYMARBLE",
                "Kimsuky",
                "MimiKatz",
                "MyDoom",
                "NACHOCHEESE",
                "NavRAT",
                "PowerRatankba",
                "RokRAT",
                "Sierra(Alfa,Bravo, ...)",
                "Volgmer",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20200922165625/https://dcso.de/2019/03/18/enterprise-malware-as-a-service/",
            "date": "2019-03-18",
            "organization": "DCSO",
            "author": "DCSO",
            "title": "Enterprise Malware-as-a-Service: Lazarus Group and the Evolution of Ransomware",
            "categories": [
                "Hermes"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=9nuo-AGg4p4",
            "date": "2018-11-17",
            "organization": "Youtube (Demonslay335)",
            "author": "Michael Gillespie",
            "title": "Analyzing Ransomware - Beginner Static Analysis",
            "categories": [
                "Hermes"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/new-version-azorult-stealer-improves-loading-features-spreads-alongside",
            "date": "2018-07-30",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "New version of AZORult stealer improves loading features, spreads alongside ransomware in new campaign",
            "categories": [
                "Azorult",
                "Hermes"
            ]
        },
        {
            "data_url": "https://www.malwarebytes.com/blog/news/2018/03/hermes-ransomware-distributed-to-south-koreans-via-recent-flash-zero-day",
            "date": "2018-03-14",
            "organization": "Malwarebytes Labs",
            "author": "hasherezade",
            "title": "Hermes ransomware distributed to South Koreans via recent Flash zero-day",
            "categories": [
                "Hermes"
            ]
        },
        {
            "data_url": "http://baesystemsai.blogspot.de/2017/10/taiwan-heist-lazarus-tools.html",
            "date": "2017-10-16",
            "organization": "",
            "author": "Sergei Shevchenko",
            "title": "Taiwan Heist: Lazarus Tools and Ransomware",
            "categories": [
                "Bitsran",
                "Hermes"
            ]
        }
    ],
    "mitre": []
};