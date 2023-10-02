var threatdata = {
    "name": "Pegasus",
    "alias": "Pegasus, Q Suite, Chrysaor, JigglyPuff",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2023-04-26",
    "all_data": {
        "tool": "Pegasus",
        "names": [
            {
                "name": "Pegasus"
            },
            {
                "name": "Q Suite"
            },
            {
                "name": "Chrysaor"
            },
            {
                "name": "JigglyPuff"
            }
        ],
        "description": "(Citizen Lab) Israel-based \u201cCyber Warfare\u201d vendor NSO Group produces and sells a mobile phone spyware suite called Pegasus. To monitor a target, a government operator of Pegasus must convince the target to click on a specially crafted exploit link, which, when clicked, delivers a chain of zero-day exploits to penetrate security features on the phone and installs Pegasus without the user\u2019s knowledge or permission. Once the phone is exploited and Pegasus is installed, it begins contacting the operator\u2019s command and control (C&C) servers to receive and execute operators\u2019 commands, and send back the target\u2019s private data, including passwords, contact lists, calendar events, text messages, and live voice calls from popular mobile messaging apps. The operator can even turn on the phone\u2019s camera and microphone to capture activity in the phone\u2019s vicinity.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://citizenlab.ca/2018/09/hide-and-seek-tracking-nso-groups-pegasus-spyware-to-operations-in-45-countries/",
            "https://info.lookout.com/rs/051-ESQ-475/images/lookout-pegasus-android-technical-analysis.pdf",
            "https://security.googleblog.com/2017/04/an-investigation-of-chrysaor-malware-on.html",
            "https://media.ccc.de/v/33c3-7901-pegasus_internals",
            "https://www.amnesty.org/en/latest/research/2020/06/moroccan-journalist-targeted-with-network-injection-attacks-using-nso-groups-tools/",
            "https://citizenlab.ca/2020/08/nothing-sacred-nso-sypware-in-togo/",
            "https://tech.firstlook.media/how-to-defend-against-pegasus-nso-group-s-sophisticated-spyware",
            "https://citizenlab.ca/2021/08/bahrain-hacks-activists-with-nso-group-zero-click-iphone-exploits/",
            "https://citizenlab.ca/2021/09/forcedentry-nso-group-imessage-zero-click-exploit-captured-in-the-wild/",
            "https://www.trendmicro.com/en_us/research/21/i/analyzing-pegasus-spywares-zero-click-iphone-exploit-forcedentry.html",
            "https://www.bbc.co.uk/news/world-middle-east-58814978",
            "https://citizenlab.ca/2021/10/breaking-news-new-york-times-journalist-ben-hubbard-pegasus/",
            "https://therecord.media/us-sanctions-four-companies-selling-hacking-tools-including-nso-group-candiru/",
            "https://www.frontlinedefenders.org/en/statement-report/statement-targeting-palestinian-hrds-pegasus",
            "https://www.apple.com/newsroom/2021/11/apple-sues-nso-group-to-curb-the-abuse-of-state-sponsored-spyware/",
            "https://www.bleepingcomputer.com/news/security/us-state-dept-employees-phones-hacked-using-nso-spyware/",
            "https://googleprojectzero.blogspot.com/2021/12/a-deep-dive-into-nso-zero-click.html",
            "https://citizenlab.ca/2021/12/pegasus-vs-predator-dissidents-doubly-infected-iphone-reveals-cytrox-mercenary-spyware/",
            "https://www.amnesty.org/en/latest/news/2022/01/el-salvador-pegasus-spyware-surveillance-journalists/",
            "https://therecord.media/finland-says-it-found-nsos-pegasus-spyware-on-diplomats-phones/",
            "https://www.securityweek.com/new-report-alleges-widespread-pegasus-spying-israel-police",
            "https://www.reuters.com/technology/how-saudi-womans-iphone-revealed-hacking-around-world-2022-02-17/",
            "https://citizenlab.ca/2022/04/uk-government-officials-targeted-pegasus/",
            "https://citizenlab.ca/2022/04/catalangate-extensive-mercenary-spyware-operation-against-catalans-using-pegasus-candiru/",
            "https://therecord.media/spyware-attack-targeted-spanish-prime-ministers-phone/",
            "https://www.securityweek.com/dutch-used-pegasus-spyware-most-wanted-criminal-report",
            "https://citizenlab.ca/2022/07/geckospy-pegasus-spyware-used-against-thailands-pro-democracy-movement/",
            "https://citizenlab.ca/2022/10/new-pegasus-spyware-abuses-identified-in-mexico/",
            "https://www.reuters.com/world/europe/polish-mayor-targeted-by-pegasus-spyware-media-2023-03-03/",
            "https://citizenlab.ca/2023/04/nso-groups-pegasus-spyware-returns-in-2022/",
            "https://www.jamf.com/blog/threat-advisory-mobile-spyware-continues-to-evolve/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0316/",
            "https://attack.mitre.org/software/S0289/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.chrysaor"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Pegasus"
        ],
        "uuid": "ff64b1c1-6846-4f3f-9dae-0e23f866299e",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pegasus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cybergeeks.tech/a-technical-analysis-of-pegasus-for-android-part-3/",
            "date": "2022-10-31",
            "organization": "Cyber Geeks",
            "author": "Vlad Pasca",
            "title": "A Technical Analysis of Pegasus for Android - Part 3",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://cybergeeks.tech/a-technical-analysis-of-pegasus-for-android-part-2/",
            "date": "2022-09-27",
            "organization": "Cyber Geeks",
            "author": "Vlad Pasca",
            "title": "A technical analysis of Pegasus for Android \u2013 Part 2",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://cybergeeks.tech/a-technical-analysis-of-pegasus-for-android-part-1",
            "date": "2022-08-29",
            "organization": "CYBER GEEKS  All Things Infosec",
            "author": "CyberMasterV",
            "title": "A Technical Analysis of Pegasus for Android \u2013 Part 1",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.cybertrends.it/pegasus-lo-spyware-per-smartphone-come-funziona-e-come-ci-si-puo-proteggere/",
            "date": "2022-08-10",
            "organization": "Cybersecurity Trends",
            "author": "Costin Raiu",
            "title": "\u201cPegasus\u201d, the spyware for smartphones. How does it work and how can you protect yourself?",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/google-predator-spyware-infected-android-devices-using-zero-days/",
            "date": "2022-05-22",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "Google: Predator spyware infected Android devices using zero-days",
            "categories": [
                "Alien",
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2022/04/catalangate-extensive-mercenary-spyware-operation-against-catalans-using-pegasus-candiru/",
            "date": "2022-04-18",
            "organization": "CitizenLab",
            "author": "John Scott-Railton",
            "title": "CatalanGate Extensive Mercenary Spyware Operation against Catalans Using Pegasus and Candiru",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2022/04/peace-through-pegasus-jordanian-human-rights-defenders-and-journalists-hacked-with-pegasus-spyware/",
            "date": "2022-04-05",
            "organization": "CitizenLab",
            "author": "Mohammed Al-Maskati",
            "title": "Peace through Pegasus Jordanian Human Rights Defenders and Journalists Hacked with Pegasus Spyware",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.reuters.com/technology/how-saudi-womans-iphone-revealed-hacking-around-world-2022-02-17/",
            "date": "2022-02-18",
            "organization": "Reuters",
            "author": "Joel Schectman",
            "title": "How a Saudi woman's iPhone revealed hacking around the world",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://lifars.com/2022/01/forensics-analysis-of-the-nso-groups-pegasus-spyware/",
            "date": "2022-01-12",
            "organization": "",
            "author": "LIFARS",
            "title": "Forensics Analysis of the NSO Group\u2019s Pegasus Spyware",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/strategically-aged-domain-detection/",
            "date": "2021-12-29",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Zhanhao Chen",
            "title": "Strategically Aged Domain Detection: Capture APT Attacks With DNS Traffic Trends",
            "categories": [
                "Chrysaor",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2021/12/pegasus-vs-predator-dissidents-doubly-infected-iphone-reveals-cytrox-mercenary-spyware/",
            "date": "2021-12-16",
            "organization": "CitizenLab",
            "author": "Kristin Berdan",
            "title": "Pegasus vs. Predator: Dissident's Doubly-Infected iPhone Reveals Cytrox Mercenary Spyware",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://irpimedia.irpi.eu/sorveglianze-cy4gate/",
            "date": "2021-11-17",
            "organization": "Investigative reporting project Italy",
            "author": "Lorenzo Bagnoli",
            "title": "Sorveglianza: l\u2019azienda italiana che vuole sfidare i colossi NSO e Palantir",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2021/11/palestinian-human-rights-defenders-hacked-nso-groups-pegasus-spyware/",
            "date": "2021-11-08",
            "organization": "CitizenLab",
            "author": "CitizenLab",
            "title": "Devices of Palestinian Human Rights Defenders Hacked with NSO Group\u2019s Pegasus Spyware",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.cyjax.com/2021/10/26/mercenary-apts-an-exploration/",
            "date": "2021-10-26",
            "organization": "cyjax",
            "author": "william thomas",
            "title": "Mercenary APTs \u2013 An Exploration",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2021/10/breaking-news-new-york-times-journalist-ben-hubbard-pegasus/",
            "date": "2021-10-24",
            "organization": "CitizenLab",
            "author": "Bill Marczak",
            "title": "Breaking the News New York Times Journalist Ben Hubbard Hacked with Pegasus after Reporting on Previous Hacking Attempts",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://objective-see.com/blog/blog_0x67.html",
            "date": "2021-09-16",
            "organization": "Objective-See",
            "author": "Tom McGuire",
            "title": "Analysis of CVE-2021-30860 the flaw and fix of a zero-click vulnerability, exploited in the wild",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/i/analyzing-pegasus-spywares-zero-click-iphone-exploit-forcedentry.html",
            "date": "2021-09-15",
            "organization": "Trend Micro",
            "author": "Mickey Jin",
            "title": "Analyzing The ForcedEntry Zero-Click iPhone Exploit Used By Pegasus (CVE-2021-30860)",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://blog.zecops.com/research/the-recent-ios-0-click-cve-2021-30860-sounds-familiar-an-unreleased-write-up-one-year-later/",
            "date": "2021-09-14",
            "organization": "ZecOps",
            "author": "ZecOps Research Team",
            "title": "The Recent iOS 0-Click, CVE-2021-30860, Sounds Familiar. An Unreleased Write-up: One Year Later",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2021/08/bahrain-hacks-activists-with-nso-group-zero-click-iphone-exploits/",
            "date": "2021-08-24",
            "organization": "CitizenLab",
            "author": "Bill Marczak",
            "title": "From Pearl to Pegasus Bahraini Government Hacks Activists with NSO Group Zero-Click iPhone Exploits",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/h/confucius-uses-pegasus-spyware-related-lures-to-target-pakistani.html",
            "date": "2021-08-17",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "Confucius Uses Pegasus Spyware-related Lures to Target Pakistani Military",
            "categories": [
                "Chrysaor",
                "Confucius"
            ]
        },
        {
            "data_url": "https://zetter.substack.com/p/pegasus-spyware-how-it-works-and",
            "date": "2021-08-04",
            "organization": "Zero Day",
            "author": "Kim Zetter",
            "title": "Pegasus Spyware: How It Works and What It Collects",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://nex.sx/blog/2021/08/03/the-pegasus-project.html",
            "date": "2021-08-03",
            "organization": "nex.sx",
            "author": "Claudio Guarnieri",
            "title": "The Pegasus Project",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://thewire.in/government/indian-army-bsf-raw-pegasus-spyware-threat",
            "date": "2021-07-26",
            "organization": "The Wire",
            "author": "Kabir Agarwal",
            "title": "From Army and BSF to RAW, Spyware Threat Touched National Security Field Too",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://arkadiyt.com/2021/07/25/scanning-your-iphone-for-nso-group-pegasus-malware/",
            "date": "2021-07-25",
            "organization": "Arkadiy Tetelman A Security Blog",
            "author": "Arkadiy Tetelman",
            "title": "Scanning your iPhone for Pegasus, NSO Group's malware",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://twitter.com/HackSysTeam/status/1418223814387765258?s=20",
            "date": "2021-07-22",
            "organization": "Twitter (@HackSysTeam)",
            "author": "HackSys Team",
            "title": "Tweet on analysis of Pegasus",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://twitter.com/alexanderjaeger/status/1417447732030189569",
            "date": "2021-07-20",
            "organization": "Twitter (@alexanderjaeger)",
            "author": "alexander jaeger",
            "title": "Tweet on timesketch timeline for Pegasus related activities",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://threatpost.com/nso-pegasus-spyware-bans-apple-accountability/167965/",
            "date": "2021-07-20",
            "organization": "Threatpost",
            "author": "Tara Seals",
            "title": "Researchers: NSO Group\u2019s Pegasus Spyware Should Spark Bans, Apple Accountability",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.washingtonpost.com/world/2021/07/19/india-nso-pegasus/",
            "date": "2021-07-19",
            "organization": "Washington Post",
            "author": "Joanna Slater",
            "title": "The spyware is sold to governments to fight terrorism. In India, it was used to hack journalists and others.",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.vice.com/en/article/xgx5bw/amazon-aws-shuts-down-nso-group-infrastructure",
            "date": "2021-07-19",
            "organization": "Vice",
            "author": "Joseph Cox",
            "title": "Amazon Shuts Down NSO Group Infrastructure",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.washingtonpost.com/technology/2021/07/19/apple-iphone-nso/",
            "date": "2021-07-19",
            "organization": "Washington Post",
            "author": "Craig Timberg",
            "title": "Despite the hype, iPhone security no match for NSO spyware",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/iphones-running-latest-ios-hacked-to-deploy-nso-group-spyware/",
            "date": "2021-07-19",
            "organization": "Bleeping Computer",
            "author": "Sergiu Gatlan",
            "title": "iPhones running latest iOS hacked to deploy NSO Group spyware",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.amnesty.org/en/latest/news/2021/07/the-pegasus-project/",
            "date": "2021-07-18",
            "organization": "Amnesty International",
            "author": "Amnesty International",
            "title": "Massive data leak reveals Israeli NSO Group's spyware used to target activists, journalists, and political leaders globally",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.theguardian.com/news/series/pegasus-project",
            "date": "2021-07-18",
            "organization": "The Guardian",
            "author": "The Guardian",
            "title": "The Guardian's covereage on Pegasus Project",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.theguardian.com/world/2021/jul/18/nso-spyware-used-to-target-family-of-jamal-khashoggi-leaked-data-shows-saudis-pegasus",
            "date": "2021-07-18",
            "organization": "The Guardian",
            "author": "Stephanie Kirchgaessner",
            "title": "Saudis behind NSO spyware attack on Jamal Khashoggi\u2019s family, leak suggests",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.theguardian.com/news/2021/jul/18/revealed-murdered-journalist-number-selected-mexico-nso-client-cecilio-pineda-birto",
            "date": "2021-07-18",
            "organization": "The Guardian",
            "author": "Nina Lakhani",
            "title": "Revealed: murdered journalist\u2019s number selected by Mexican NSO client",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://forbiddenstories.org/about-the-pegasus-project/",
            "date": "2021-07-18",
            "organization": "forbidden stories",
            "author": "forbidden stories",
            "title": "About The Pegasus Project",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://thewire.in/tag/pegasus-project",
            "date": "2021-07-18",
            "organization": "The Wire",
            "author": "The Wire",
            "title": "The WIre's covereage on Pegasus Project",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.theguardian.com/world/2021/jul/18/revealed-leak-uncovers-global-abuse-of-cyber-surveillance-weapon-nso-group-pegasus",
            "date": "2021-07-18",
            "organization": "The Guardian",
            "author": "Stephanie Kirchgaessner",
            "title": "Revealed: leak uncovers global abuse of cyber-surveillance weapon",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://twitter.com/billmarczak/status/1416801439402262529",
            "date": "2021-07-18",
            "organization": "Twitter (@billmarczak)",
            "author": "Bill Marczak",
            "title": "Twitter thread with a couple of interesting bits from AmnestyTech's new report on Pegasus",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.lemonde.fr/projet-pegasus/article/2021/07/18/au-maroc-comme-en-france-des-journalistes-mis-sous-surveillance-avec-le-logiciel-pegasus_6088654_6088648.html",
            "date": "2021-07-18",
            "organization": "Lemonde",
            "author": "Damien Leloup",
            "title": "From Rabat to Paris, Morocco does not let go of journalists",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.washingtonpost.com/technology/2021/07/18/reactions-pegasus-project-nso/",
            "date": "2021-07-18",
            "organization": "Washington Post",
            "author": "Drew Harwell",
            "title": "NSO Group vows to investigate potential spyware abuse following Pegasus Project investigation",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.washingtonpost.com/investigations/interactive/2021/jamal-khashoggi-wife-fiancee-cellphone-hack/?itid=co_pegasus_5",
            "date": "2021-07-18",
            "organization": "Washington Post",
            "author": "Dana Priest",
            "title": "Jamal Khashoggi\u2019s wife targeted with spyware before his death",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://thewire.in/media/pegasus-project-spyware-indian-journalists",
            "date": "2021-07-18",
            "organization": "The Wire",
            "author": "Anuj Srivas",
            "title": "Snoop List Has 40 Indian Journalists, Forensic Tests Confirm Presence of Pegasus Spyware on Some",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://thewire.in/government/project-pegasus-journalists-ministers-activists-phones-spying",
            "date": "2021-07-18",
            "organization": "The Wire",
            "author": "Siddharth Varadarajan",
            "title": "Pegasus Project: How Phones of Journalists, Ministers, Activists May Have Been Used to Spy On Them",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.washingtonpost.com/investigations/interactive/2021/nso-spyware-pegasus-cellphones/",
            "date": "2021-07-18",
            "organization": "Washington Post",
            "author": "Dana Priest",
            "title": "Private spy software sold by NSO Group found on cellphones worldwide",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://github.com/AmnestyTech/investigations/tree/master/2021-07-18_nso",
            "date": "2021-07-18",
            "organization": "Github (AmnestyTech)",
            "author": "Amnesty International",
            "title": "NSO Group Pegasus Indicator of Compromise",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://forbiddenstories.org/the-pegasus-project-a-worldwide-collaboration-to-counter-a-global-crime/",
            "date": "2021-07-18",
            "organization": "forbidden stories",
            "author": "Laurent Richard",
            "title": "The Pegasus Project: A Worldwide Collaboration to Counter a Global Crime",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.theguardian.com/news/2021/jul/18/viktor-orban-using-nso-spyware-in-assault-on-media-data-suggests",
            "date": "2021-07-18",
            "organization": "The Guardian",
            "author": "Shaun Walker",
            "title": "Viktor Orb\u00e1n using NSO spyware in assault on media, data suggests",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://forbiddenstories.org/pegasus-the-new-global-weapon-for-silencing-journalists/",
            "date": "2021-07-18",
            "organization": "forbidden stories",
            "author": "Phineas Rueckert",
            "title": "Pegasus: The new global weapon for silencing journalists",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://thewire.in/rights/sar-geelani-pegasus-spyware-phone-messages",
            "date": "2021-07-18",
            "organization": "The Wire",
            "author": "Sukanya Shantha",
            "title": "Digital Forensics Show S.A.R. Geelani\u2019s Phone Was Hacked, Likely With Zero-Click Exploit",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.washingtonpost.com/investigations/2021/07/18/takeaways-nso-pegasus-project/",
            "date": "2021-07-18",
            "organization": "Washington Post",
            "author": "Washington Post Staff",
            "title": "Takeaways from the Pegasus Project",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2021/07/amnesty-peer-review/",
            "date": "2021-07-18",
            "organization": "CitizenLab",
            "author": "Bill Marczak",
            "title": "Independent Peer Review of Amnesty International\u2019s Forensic Methods for Identifying Pegasus Spyware",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.amnesty.org/en/latest/research/2021/07/forensic-methodology-report-how-to-catch-nso-groups-pegasus/",
            "date": "2021-07-18",
            "organization": "Amnesty International",
            "author": "Amnesty International",
            "title": "Forensic Methodology Report: How to catch NSO Group\u2019s Pegasus",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://www.amnesty.org/en/latest/research/2021/07/forensic-methodology-report-appendix-d/",
            "date": "2021-07-18",
            "organization": "Amnesty International",
            "author": "Amnesty International",
            "title": "Forensic Methodology Report: Pegasus Forensic Traces per Target",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2020/12/the-great-ipwn-journalists-hacked-with-suspected-nso-group-imessage-zero-click-exploit/",
            "date": "2020-12-20",
            "organization": "CitizenLab",
            "author": "Bill Marczak",
            "title": "The Great iPwn Journalists Hacked with Suspected NSO Group iMessage \u2018Zero-Click\u2019 Exploit",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://googleprojectzero.blogspot.com/2021/12/a-deep-dive-into-nso-zero-click.html",
            "date": "2020-12-15",
            "organization": "Google Project Zero",
            "author": "Ian Beer",
            "title": "A deep dive into an NSO zero-click iMessage exploit: Remote Code Execution",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://ti.qianxin.com/uploads/2020/02/13/cb78386a082f465f259b37dae5df4884.pdf",
            "date": "2020-02-13",
            "organization": "Qianxin",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "APT Report 2019",
            "categories": [
                "Chrysaor",
                "Exodus",
                "Dacls",
                "VPNFilter",
                "DNSRat",
                "Griffon",
                "KopiLuwak",
                "More_eggs",
                "SQLRat",
                "AppleJeus",
                "BONDUPDATER",
                "Agent.BTZ",
                "Anchor",
                "AndroMut",
                "AppleJeus",
                "BOOSTWRITE",
                "Brambul",
                "Carbanak",
                "Cobalt Strike",
                "Dacls",
                "DistTrack",
                "DNSpionage",
                "Dtrack",
                "ELECTRICFISH",
                "FlawedAmmyy",
                "FlawedGrace",
                "Get2",
                "Grateful POS",
                "HOPLIGHT",
                "Imminent Monitor RAT",
                "jason",
                "Joanap",
                "KerrDown",
                "KEYMARBLE",
                "Lambert",
                "LightNeuron",
                "LoJax",
                "MiniDuke",
                "PolyglotDuke",
                "PowerRatankba",
                "Rising Sun",
                "SDBbot",
                "ServHelper",
                "Snatch",
                "Stuxnet",
                "TinyMet",
                "tRat",
                "TrickBot",
                "Volgmer",
                "X-Agent",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2020/01/stopping-the-press-new-york-times-journalist-targeted-by-saudi-linked-pegasus-spyware-operator/",
            "date": "2020-01-28",
            "organization": "CitizenLab",
            "author": "Bill Marczak",
            "title": "Stopping the Press: New York Times Journalist Targeted by Saudi-linked Pegasus Spyware Operator",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://citizenlab.ca/2018/09/hide-and-seek-tracking-nso-groups-pegasus-spyware-to-operations-in-45-countries/",
            "date": "2018-09-18",
            "organization": "The Citizenlab",
            "author": "Bill Marczak",
            "title": "Hide and Seek: Tracking NSO Group\u2019s Pegasus Spyware to Operations in 45 Countries",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://android-developers.googleblog.com/2017/04/an-investigation-of-chrysaor-malware-on.html",
            "date": "2017-04-03",
            "organization": "Google",
            "author": "Rich Cannings",
            "title": "An investigation of Chrysaor Malware on Android",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://security.googleblog.com/2017/04/an-investigation-of-chrysaor-malware-on.html",
            "date": "2017-04-03",
            "organization": "Google",
            "author": "Rich Cannings",
            "title": "An Investigation of Chrysaor Malware on Android",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://info.lookout.com/rs/051-ESQ-475/images/lookout-pegasus-android-technical-analysis.pdf",
            "date": "2017-04",
            "organization": "Lookout",
            "author": "Lookout",
            "title": "Pegasus for Android: Technical Analysis and Findings of Chrysaor",
            "categories": [
                "Chrysaor"
            ]
        },
        {
            "data_url": "https://media.ccc.de/v/33c3-7901-pegasus_internals",
            "date": "2016-12-27",
            "organization": "CCC",
            "author": "Max Bazally",
            "title": "Pegasus internals: Technical Teardown of the Pegasus malware and Trident exploit chain",
            "categories": [
                "Chrysaor"
            ]
        }
    ],
    "mitre": []
};