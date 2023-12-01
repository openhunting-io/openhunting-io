var threatdata = {
    "name": "BokBot",
    "alias": "BokBot, IcedID, IceID",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2023-10-12",
    "all_data": {
        "tool": "BokBot",
        "names": [
            {
                "name": "BokBot"
            },
            {
                "name": "IcedID"
            },
            {
                "name": "IceID"
            }
        ],
        "description": "Analysis Observations:\n\n\u2022 It sets up persistence by creating a Scheduled Task with the following characteristics:\n\u2022 Name: Update\n\u2022 Trigger: At Log on\n\u2022 Action: %LocalAppData%\\$Example\\\\waroupada.exe /i\n\u2022 Conditions: Stop if the computer ceases to be idle.\n\u2022 The sub-directory within %LocalAppdata%, Appears to be randomly picked from the list of directories within %ProgramFiles%. This needs more verification.\n\u2022 The filename remained static during analysis.\n\u2022 The original malware exe (ex. waroupada.exe) will spawn an instance of svchost.exe as a sub-process and then inject/execute its malicious code within it\n\u2022 If \u201c/i\u201d is not passed as an argument, it sets up persistence and waits for reboot.\n\u2022 If \u201c/I\u201d is passed as an argument (as is the case when the scheduled task is triggered at login), it skips persistence setup and actually executes; resulting in C2 communication.\n\u2022 Employs an interesting method for sleeping by calling the Sleep function of kernel32.dll from the shell, like so:\nrundll32.exe kernel32,Sleep -s\n\u2022 Setup a local listener to proxy traffic on 127.0.0.1:50000\n\n**[Example Log from C2 Network Communication]**\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] connect\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] recv: POST /forum/posting.php?a=0&b=4FC0302F4C59D8CDB8&d=0&e=63&f=0&g=0&h=0&r=0&i=266390&j=11 HTTP/1.1\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] recv: Connection: close\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] recv: Content-Type: application/x-www-form-urlencoded\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] recv: Content-Length: 196\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] recv: Host: evil.com\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] recv: <(POSTDATA)>\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] info: POST data stored to: /var/lib/inetsim/http/postdata/a90b931cb23df85aa6e3f0039958b031c3b053a2\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] info: **Request URL: hxxps://evil.com/forum/posting.php?a=0&b=4FC0302F4C59D8CDB8&d=0&e=63&f=0&g=0&h=0&r=0&i=266390&j=11**\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] info: Sending fake file configured for extension 'php'.\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] send: HTTP/1.1 200 OK\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] send: Content-Type: text/html\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] send: Server: INetSim HTTPs Server\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] send: Date: Mon, 19 Mar 2018 16:45:55 GMT\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] send: Connection: Close\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] send: Content-Length: 258\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] info: Sending file: /var/lib/inetsim/http/fakefiles/sample.html\n[2018-03-19 12:45:55] [42078] [https_443_tcp 44785] [172.16.0.130:54803] stat: 1 **method=POST url=hxxps://evil.com/forum/posting.php?a=0&b=4FC0302F4C59D8CDB8&d=0&e=63&f=0&g=0&h=0&r=0&i=266390&j=11** sent=/var/lib/inetsim/http/fakefiles/sample.html postdata=/var/lib/inetsim/http/postdata/a90b931cb23df85aa6e3f0039958b031c3b053a2",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://www.crowdstrike.com/blog/bokbots-man-in-the-browser-overview/",
            "https://securityintelligence.com/new-banking-trojan-icedid-discovered-by-ibm-x-force-research/",
            "https://securityintelligence.com/posts/breaking-the-ice-a-deep-dive-into-the-icedid-banking-trojans-new-major-version-release/",
            "https://blog.talosintelligence.com/2018/04/icedid-banking-trojan.html",
            "https://digitalguardian.com/blog/iceid-banking-trojan-targeting-banks-payment-card-providers-e-commerce-sites",
            "https://www.fidelissecurity.com/threatgeek/2017/11/tracking-emotet-payload-icedid",
            "https://securityintelligence.com/icedid-operators-using-atsengine-injection-panel-to-hit-e-commerce-sites/",
            "https://www.crowdstrike.com/blog/digging-into-bokbots-core-module/",
            "https://www.vkremez.com/2018/09/lets-learn-deeper-dive-into.html",
            "http://www.intezer.com/icedid-banking-trojan-shares-code-pony-2-0-trojan/",
            "https://blog.fox-it.com/2018/08/09/bokbot-the-rebirth-of-a-banker/",
            "https://blogs.juniper.net/en-us/threat-research/covid-19-and-fmla-campaigns-used-to-install-new-icedid-banking-malware",
            "https://blogs.juniper.net/en-us/threat-research/iceid-campaign-strikes-back",
            "https://www.intezer.com/blog/research/conversation-hijacking-campaign-delivering-icedid/",
            "https://www.fortinet.com/blog/threat-research/spoofed-invoice-drops-iced-id",
            "https://www.cybereason.com/blog/threat-analysis-from-icedid-to-domain-compromise"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.icedid"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BokBot"
        ],
        "uuid": "f1341974-6e5c-4254-8f53-b231fcda1bd1",
        "last-card-change": "2023-02-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bokbot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.netresec.com/?page=Blog&month=2023-10&post=Forensic-Timeline-of-an-IcedID-Infection",
            "date": "2023-10-12",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "Forensic Timeline of an IcedID Infection",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "IcedID Downloader"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2023%20Q3%20Botnet%20Threat%20Update.pdf",
            "date": "2023-10-12",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q3 2023",
            "categories": [
                "FluBot",
                "AsyncRAT",
                "Ave Maria",
                "Cobalt Strike",
                "DCRat",
                "Havoc",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "NjRAT",
                "QakBot",
                "Quasar RAT",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Rhadamanthys",
                "Sliver",
                "Stealc",
                "Tofsee",
                "Vidar"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2023/08/28/html-smuggling-leads-to-domain-wide-ransomware/",
            "date": "2023-08-28",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "HTML Smuggling Leads to Domain Wide Ransomware",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "Nokoyawa Ransomware"
            ]
        },
        {
            "data_url": "https://www.team-cymru.com/post/inside-the-icedid-backconnect-protocol-part-2",
            "date": "2023-07-28",
            "organization": "Team Cymru",
            "author": "S2 Research Team",
            "title": "Inside the IcedID BackConnect Protocol (Part 2)",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2023%20Q2%20Botnet%20Threat%20Update.pdf",
            "date": "2023-07-11",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q2 2023",
            "categories": [
                "Hydra",
                "AsyncRAT",
                "Aurora Stealer",
                "Ave Maria",
                "BumbleBee",
                "Cobalt Strike",
                "DCRat",
                "Havoc",
                "IcedID",
                "ISFB",
                "NjRAT",
                "QakBot",
                "Quasar RAT",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Rhadamanthys",
                "Sliver",
                "Tofsee"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/wireshark-quiz-icedid-answers/",
            "date": "2023-05-30",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brad Duncan",
            "title": "Cold as Ice: Answers to Unit 42 Wireshark Quiz for IcedID",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2023/05/22/icedid-macro-ends-in-nokoyawa-ransomware/",
            "date": "2023-05-22",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "IcedID Macro Ends in Nokoyawa Ransomware",
            "categories": [
                "IcedID",
                "Nokoyawa Ransomware",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://github.com/0xThiebaut/PCAPeek/",
            "date": "2023-05-21",
            "organization": "Github (0xThiebaut)",
            "author": "Maxime Thiebaut",
            "title": "PCAPeek",
            "categories": [
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.elastic.co/security-labs/unpacking-icedid",
            "date": "2023-05-04",
            "organization": "Elastic",
            "author": "Cyril Fran\u00e7ois",
            "title": "Unpacking ICEDID",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://blog.unpac.me/2023/05/03/unpacme-weekly-new-version-of-icedid-loader",
            "date": "2023-05-03",
            "organization": "unpac.me",
            "author": "Sean Wilson",
            "title": "UnpacMe Weekly: New Version of IcedId Loader",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/teasing-secrets-malware-configuration-parsing",
            "date": "2023-05-03",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Mark Lim",
            "title": "Teasing the Secrets From Threat Actors: Malware Configuration Parsing at Scale",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://research.loginsoft.com/threat-research/icedid-malware-traversing-through-its-various-incarnations/",
            "date": "2023-05-02",
            "organization": "loginsoft",
            "author": "System-41",
            "title": "IcedID Malware: Traversing Through its Various Incarnations",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.spreaker.com/user/16860719/proofpoint-e29-mix-v1",
            "date": "2023-04-28",
            "organization": "DISCARDED Podcast",
            "author": "Joe Wise",
            "title": "Beyond Banking: IcedID Gets Forked",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://www.first.org/resources/papers/amsterdam23/IcedID-FIRST-AMS-2023.pdf",
            "date": "2023-04-21",
            "organization": "Sophos",
            "author": "Colin Cowie",
            "title": "IcedID: Defrosting a Recent Campaign Illustrating evolving tactics and shared infrastructure",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/29740",
            "date": "2023-04-12",
            "organization": "InfoSec Handlers Diary Blog",
            "author": "Brad Duncan",
            "title": "Recent IcedID (Bokbot) activity",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://dshield.org/diary/Recent+IcedID+Bokbot+activity/29740/",
            "date": "2023-04-12",
            "organization": "SANS ISC",
            "author": "Brad Duncan",
            "title": "Recent IcedID (Bokbot) activity",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://info.spamhaus.com/hubfs/Botnet%20Reports/2023%20Q1%20Botnet%20Threat%20Update.pdf",
            "date": "2023-04-12",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q1 2023",
            "categories": [
                "FluBot",
                "Amadey",
                "AsyncRAT",
                "Aurora",
                "Ave Maria",
                "BumbleBee",
                "Cobalt Strike",
                "DCRat",
                "Emotet",
                "IcedID",
                "ISFB",
                "NjRAT",
                "QakBot",
                "RecordBreaker",
                "RedLine Stealer",
                "Remcos",
                "Rhadamanthys",
                "Sliver",
                "Tofsee",
                "Vidar"
            ]
        },
        {
            "data_url": "https://twitter.com/Unit42_Intel/status/1645851799427874818",
            "date": "2023-04-11",
            "organization": "Twitter (@Unit42_Intel)",
            "author": "Unit42",
            "title": "Tweet on change of IcedID backconnect traffic port from 8080 to 443",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2023/04/03/malicious-iso-file-leads-to-domain-wide-ransomware/",
            "date": "2023-04-03",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Malicious ISO File Leads to Domain Wide Ransomware",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "Mount Locker"
            ]
        },
        {
            "data_url": "https://research.loginsoft.com/threat-research/from-innocence-to-malice-the-onenote-malware-campaign-uncovered/",
            "date": "2023-03-30",
            "organization": "loginsoft",
            "author": "Saharsh Agrawal",
            "title": "From Innocence to Malice: The OneNote Malware Campaign Uncovered",
            "categories": [
                "Agent Tesla",
                "AsyncRAT",
                "DOUBLEBACK",
                "Emotet",
                "Formbook",
                "IcedID",
                "NetWire RC",
                "QakBot",
                "Quasar RAT",
                "RedLine Stealer",
                "XWorm"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/fork-ice-new-era-icedid",
            "date": "2023-03-27",
            "organization": "Proofpoint",
            "author": "Pim Trouerbach",
            "title": "Fork in the Ice: The New Era of IcedID",
            "categories": [
                "IcedID",
                "PHOTOFORK",
                "PHOTOLITE",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://blog.nviso.eu/2023/03/20/icedids-vnc-backdoors-dark-cat-anubis-keyhole/",
            "date": "2023-03-20",
            "organization": "NVISO Labs",
            "author": "Maxime Thiebaut",
            "title": "IcedID\u2019s VNC Backdoors: Dark Cat, Anubis & Keyhole",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.elastic.co/security-labs/thawing-the-permafrost-of-icedid-summary",
            "date": "2023-03-17",
            "organization": "Elastic",
            "author": "Cyril Fran\u00e7ois",
            "title": "Thawing the permafrost of ICEDID Summary",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/onenote-growing-threat-malware-distribution",
            "date": "2023-03-01",
            "organization": "Zscaler",
            "author": "Meghraj Nandanwar",
            "title": "OneNote: A Growing Threat for Malware Distribution",
            "categories": [
                "AsyncRAT",
                "Cobalt Strike",
                "IcedID",
                "QakBot",
                "RedLine Stealer"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/malvertising-surges-to-distribute-malware",
            "date": "2023-02-28",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Malvertising Surges to Distribute Malware",
            "categories": [
                "BATLOADER",
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.prodaft.com/m/reports/RIG___TLP_CLEAR-1.pdf",
            "date": "2023-02-27",
            "organization": "PRODAFT Threat Intelligence",
            "author": "PRODAFT",
            "title": "RIG Exploit Kit: In-Depth Analysis",
            "categories": [
                "Dridex",
                "IcedID",
                "ISFB",
                "PureCrypter",
                "Raccoon",
                "RecordBreaker",
                "RedLine Stealer",
                "Royal Ransom",
                "Silence",
                "SmokeLoader",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.team-cymru.com/post/from-chile-with-malware",
            "date": "2023-02-24",
            "organization": "Team Cymru",
            "author": "Team Cymru",
            "title": "Desde Chile con Malware (From Chile with Malware)",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://www.netresec.com/?page=Blog&month=2023-02&post=How-to-Identify-IcedID-Network-Traffic",
            "date": "2023-02-15",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "How to Identify IcedID Network Traffic",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2023/01/emotet-returns-with-new-methods-of-evasion",
            "date": "2023-01-20",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "Emotet Returns With New Methods of Evasion",
            "categories": [
                "Emotet",
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.intrinsec.com/emotet-returns-and-deploys-loaders/",
            "date": "2023-01-09",
            "organization": "Intrinsec",
            "author": "Intrinsec",
            "title": "Emotet returns and deploys loaders",
            "categories": [
                "BumbleBee",
                "Emotet",
                "IcedID",
                "PHOTOLITE"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_ie/research/22/l/icedid-botnet-distributors-abuse-google-ppc-to-distribute-malware.html",
            "date": "2022-12-23",
            "organization": "Trendmicro",
            "author": "Ian Kenefick",
            "title": "IcedID Botnet Distributors Abuse Google PPC to Distribute Malware",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.team-cymru.com/post/inside-the-icedid-backconnect-protocol",
            "date": "2022-12-21",
            "organization": "Team Cymru",
            "author": "S2 Research Team",
            "title": "Inside the IcedID BackConnect Protocol",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/1jB0CsDvAADSrBeGxoi5gzyx8eQIiOJ2G/view",
            "date": "2022-12-18",
            "organization": "ZAYOTEM",
            "author": "Berkay DO\u011eAN",
            "title": "IcedID Technical Analysis Report",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/Google+ads+lead+to+fake+software+pages+pushing+IcedID+Bokbot/29344",
            "date": "2022-12-15",
            "organization": "ISC",
            "author": "Brad Duncan",
            "title": "Google ads lead to fake software pages pushing IcedID (Bokbot)",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://twitter.com/embee_research/status/1592067841154756610?s=20",
            "date": "2022-11-14",
            "organization": "Twitter (@embee_research)",
            "author": "Matthew",
            "title": "Twitter thread on Yara Signatures for Qakbot Encryption Routines",
            "categories": [
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.elastic.co/security-labs/icedids-network-infrastructure-is-alive-and-well",
            "date": "2022-10-31",
            "organization": "Elastic",
            "author": "Seth Goodwin",
            "title": "ICEDIDs network infrastructure is alive and well",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.netresec.com/?page=Blog&month=2022-10&post=IcedID-BackConnect-Protocol",
            "date": "2022-10-12",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "IcedID BackConnect Protocol",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.team-cymru.com/post/a-visualizza-into-recent-icedid-campaigns",
            "date": "2022-10-07",
            "organization": "Team Cymru",
            "author": "S2 Research Team",
            "title": "A Visualizza into Recent IcedID Campaigns: Reconstructing Threat Actor Metrics with Pure Signal\u2122 Recon",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://blog.google/threat-analysis-group/initial-access-broker-repurposing-techniques-in-targeted-attacks-against-ukraine/",
            "date": "2022-09-07",
            "organization": "Google",
            "author": "Pierre-Marc Bureau",
            "title": "Initial access broker repurposing techniques in targeted attacks against Ukraine",
            "categories": [
                "AnchorMail",
                "Cobalt Strike",
                "IcedID"
            ]
        },
        {
            "data_url": "https://michaelkoczwara.medium.com/hunting-c2-with-shodan-223ca250d06f",
            "date": "2022-09-01",
            "organization": "Medium michaelkoczwara",
            "author": "Michael Koczwara",
            "title": "Hunting C2/Adversaries Infrastructure with Shodan and Censys",
            "categories": [
                "Brute Ratel C4",
                "Cobalt Strike",
                "Deimos",
                "GRUNT",
                "IcedID",
                "Merlin",
                "Meterpreter",
                "Nighthawk",
                "PoshC2",
                "Sliver"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/rss/28934",
            "date": "2022-08-12",
            "organization": "SANS ISC",
            "author": "Brad Duncan",
            "title": "Monster Libra (TA551/Shathak) pushes IcedID (Bokbot) with Dark VNC and Cobalt Strike",
            "categories": [
                "Cobalt Strike",
                "DarkVNC",
                "IcedID"
            ]
        },
        {
            "data_url": "https://medium.com/walmartglobaltech/icedid-leverages-privateloader-7744771bf87f",
            "date": "2022-08-04",
            "organization": "Medium walmartglobaltech",
            "author": "Joshua Platt",
            "title": "IcedID leverages PrivateLoader",
            "categories": [
                "IcedID",
                "PrivateLoader"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/IcedID+%28Bokbot%29+with+Dark+VNC+and+Cobalt+Strike/28884",
            "date": "2022-07-27",
            "organization": "SANS ISC",
            "author": "Brad Duncan",
            "title": "IcedID (Bokbot) with Dark VNC and Cobalt Strike",
            "categories": [
                "DarkVNC",
                "IcedID"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/monsterlibra/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Monster Libra",
            "categories": [
                "Valak",
                "IcedID",
                "GOLD CABIN"
            ]
        },
        {
            "data_url": "https://resecurity.com/blog/article/shortcut-based-lnk-attacks-delivering-malicious-code-on-the-rise",
            "date": "2022-07-17",
            "organization": "Resecurity",
            "author": "Resecurity",
            "title": "Shortcut-Based (LNK) Attacks Delivering Malicious Code On The Rise",
            "categories": [
                "AsyncRAT",
                "BumbleBee",
                "Emotet",
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/trickbot-group-systematically-attacking-ukraine",
            "date": "2022-07-07",
            "organization": "IBM",
            "author": "Ole Villadsen",
            "title": "Unprecedented Shift: The Trickbot Group is Systematically Attacking Ukraine",
            "categories": [
                "AnchorMail",
                "BumbleBee",
                "Cobalt Strike",
                "IcedID",
                "Meterpreter"
            ]
        },
        {
            "data_url": "https://www.socinvestigation.com/icedid-banking-trojan-returns-with-new-ttps-detection-response/",
            "date": "2022-06-24",
            "organization": "Soc Investigation",
            "author": "BalaGanesh",
            "title": "IcedID Banking Trojan returns with new TTPS \u2013 Detection & Response",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/rise-of-lnk-shortcut-files-malware/",
            "date": "2022-06-21",
            "organization": "McAfee",
            "author": "Lakshya Mathur",
            "title": "Rise of LNK (Shortcut files) Malware",
            "categories": [
                "BazarBackdoor",
                "Emotet",
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://matth.dmz42.org/posts/2022/automatically-unpacking-icedid-stage1-with-angr/",
            "date": "2022-05-30",
            "organization": "",
            "author": "Matthieu Walter",
            "title": "Automatically Unpacking IcedID Stage 1 with Angr",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/posts/itg23-crypters-cooperation-between-cybercriminal-groups/",
            "date": "2022-05-19",
            "organization": "IBM",
            "author": "Charlotte Hammond",
            "title": "ITG23 Crypters Highlight Cooperation Between Cybercriminal Groups",
            "categories": [
                "IcedID",
                "ISFB",
                "Mount Locker"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-ransomexx",
            "date": "2022-05-17",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Ransomware Spotlight: RansomEXX",
            "categories": [
                "LaZagne",
                "Cobalt Strike",
                "IcedID",
                "MimiKatz",
                "PyXie",
                "RansomEXX",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/malware-before-ransomware-trojan-information-stealer-cobalt-strike",
            "date": "2022-05-12",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "What malware to look for if you want to prevent a ransomware attack",
            "categories": [
                "Conti",
                "BumbleBee",
                "Cobalt Strike",
                "IcedID",
                "Sliver"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/diary/28636",
            "date": "2022-05-11",
            "organization": "InfoSec Handlers Diary Blog",
            "author": "Brad Duncan",
            "title": "TA578 using thread-hijacked emails to push ISO files for Bumblebee malware",
            "categories": [
                "BumbleBee",
                "Cobalt Strike",
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2022/05/09/ransomware-as-a-service-understanding-the-cybercrime-gig-economy-and-how-to-protect-yourself",
            "date": "2022-05-09",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Threat Intelligence Team",
            "title": "Ransomware-as-a-service: Understanding the cybercrime gig economy and how to protect yourself",
            "categories": [
                "AnchorDNS",
                "BlackCat",
                "BlackMatter",
                "Conti",
                "DarkSide",
                "HelloKitty",
                "Hive",
                "LockBit",
                "REvil",
                "FAKEUPDATES",
                "Griffon",
                "ATOMSILO",
                "BazarBackdoor",
                "BlackCat",
                "BlackMatter",
                "Blister",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "Emotet",
                "FiveHands",
                "Gozi",
                "HelloKitty",
                "Hive",
                "IcedID",
                "ISFB",
                "JSSLoader",
                "LockBit",
                "LockFile",
                "Maze",
                "NightSky",
                "Pandora",
                "Phobos",
                "Phoenix Locker",
                "PhotoLoader",
                "QakBot",
                "REvil",
                "Rook",
                "Ryuk",
                "SystemBC",
                "TrickBot",
                "WastedLocker",
                "BRONZE STARLIGHT"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-vs.-quantum-locker-ransomware",
            "date": "2022-05-09",
            "organization": "Cybereason",
            "author": "Lior Rochberger",
            "title": "Cybereason vs. Quantum Locker Ransomware",
            "categories": [
                "IcedID",
                "Mount Locker"
            ]
        },
        {
            "data_url": "https://twitter.com/felixw3000/status/1521816045769662468",
            "date": "2022-05-04",
            "organization": "Twitter (@felixw3000)",
            "author": "Felix",
            "title": "Twitter Thread with info on infection chain with IcedId, Cobalt Strike, and Hidden VNC.",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ransomware-hive-conti-avoslocker",
            "date": "2022-04-28",
            "organization": "Symantec",
            "author": "Karthikeyan C Kasiviswanathan",
            "title": "Ransomware: How Attackers are Breaching Corporate Networks",
            "categories": [
                "AvosLocker",
                "Conti",
                "Emotet",
                "Hive",
                "IcedID",
                "PhotoLoader",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://intel471.com/blog/conti-emotet-ransomware-conti-leaks",
            "date": "2022-04-26",
            "organization": "Intel 471",
            "author": "Intel 471",
            "title": "Conti and Emotet: A constantly destructive duo",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "Emotet",
                "IcedID",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2022/04/25/quantum-ransomware/",
            "date": "2022-04-25",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Quantum Ransomware",
            "categories": [
                "Cobalt Strike",
                "IcedID"
            ]
        },
        {
            "data_url": "https://blog.bushidotoken.net/2022/04/lessons-from-conti-leaks.html",
            "date": "2022-04-17",
            "organization": "BushidoToken Blog",
            "author": "BushidoToken",
            "title": "Lessons from the Conti Leaks",
            "categories": [
                "BazarBackdoor",
                "Conti",
                "Emotet",
                "IcedID",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/hackers-target-ukrainian-govt-with-icedid-malware-zimbra-exploits/",
            "date": "2022-04-14",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "Hackers target Ukrainian govt with IcedID malware, Zimbra exploits",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://cert.gov.ua/article/39609",
            "date": "2022-04-14",
            "organization": "Cert-UA",
            "author": "Cert-UA",
            "title": "Cyberattack on Ukrainian state organizations using IcedID malware (CERT-UA#4464)",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2022/04/04/stolen-images-campaign-ends-in-conti-ransomware/",
            "date": "2022-04-04",
            "organization": "The DFIR Report",
            "author": "@0xtornado",
            "title": "Stolen Images Campaign Ends in Conti Ransomware",
            "categories": [
                "Conti",
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs/conti-leaks-examining-the-panama-papers-of-ransomware.html",
            "date": "2022-03-31",
            "organization": "Trellix",
            "author": "John Fokker",
            "title": "Conti Leaks: Examining the Panama Papers of Ransomware",
            "categories": [
                "LockBit",
                "Amadey",
                "Buer",
                "Conti",
                "IcedID",
                "LockBit",
                "Mailto",
                "Maze",
                "PhotoLoader",
                "Ryuk",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://threatpost.com/exchange-servers-speared-in-icedid-phishing-campaign/179137/",
            "date": "2022-03-29",
            "organization": "Threat Post",
            "author": "Elizabeth Montalbano",
            "title": "Exchange Servers Speared in IcedID Phishing Campaign",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog/research/conversation-hijacking-campaign-delivering-icedid/",
            "date": "2022-03-28",
            "organization": "Intezer",
            "author": "Joakim Kennedy",
            "title": "New Conversation Hijacking Campaign Delivering IcedID",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/spoofed-invoice-drops-iced-id",
            "date": "2022-03-28",
            "organization": "Fortinet",
            "author": "James Slaughter",
            "title": "Spoofed Invoice Used to Drop IcedID",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/microsoft-exchange-targeted-for-icedid-reply-chain-hijacking-attacks/",
            "date": "2022-03-28",
            "organization": "Bleeping Computer",
            "author": "Bill Toulas",
            "title": "Microsoft Exchange targeted for IcedID reply-chain hijacking attacks",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/gold-ulrick-leaks-reveal-organizational-structure-and-relationships",
            "date": "2022-03-23",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "GOLD ULRICK Leaks Reveal Organizational Structure and Relationships",
            "categories": [
                "Conti",
                "Emotet",
                "IcedID",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://content.secureworks.com/-/media/Files/US/Reports/Monthly%20Threat%20Intelligence/Secureworks_ECO1_ThreatIntelligenceExecutiveReport2022Vol2.ashx",
            "date": "2022-03-23",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Threat Intelligence Executive Report Volume 2022, Number 2",
            "categories": [
                "Conti",
                "Emotet",
                "IcedID",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/conti-affiliate-exposed-new-domain-names-ip-addresses-and-email-addresses-uncovered-by-esentire",
            "date": "2022-03-21",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "Conti Affiliate Exposed: New Domain Names, IP Addresses and Email Addresses Uncovered",
            "categories": [
                "HelloKitty",
                "BazarBackdoor",
                "Cobalt Strike",
                "Conti",
                "FiveHands",
                "HelloKitty",
                "IcedID"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/rpt/rpt-navigating-new-frontiers-trend-micro-2021-annual-cybersecurity-report.pdf",
            "date": "2022-03-17",
            "organization": "Trend Micro",
            "author": "Trend Micro Research",
            "title": "Navigating New Frontiers Trend Micro 2021 Annual Cybersecurity Report",
            "categories": [
                "REvil",
                "BazarBackdoor",
                "Buer",
                "IcedID",
                "QakBot",
                "REvil"
            ]
        },
        {
            "data_url": "https://eln0ty.github.io/malware%20analysis/IcedID/",
            "date": "2022-03-17",
            "organization": "Github (eln0ty)",
            "author": "Abdallah Elnoty",
            "title": "IcedID Analysis",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://nikpx.github.io/malware/analysis/2022/03/09/BokBot",
            "date": "2022-03-09",
            "organization": "nikpx",
            "author": "xors",
            "title": "BokBot Technical Analysis",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.esentire.com/blog/icedid-to-cobalt-strike-in-under-20-minutes",
            "date": "2022-02-22",
            "organization": "eSentire",
            "author": "eSentire Threat Response Unit (TRU)",
            "title": "IcedID to Cobalt Strike In Under 20 Minutes",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/threat-analysis-report-all-paths-lead-to-cobalt-strike-icedid-emotet-and-qbot",
            "date": "2022-02-10",
            "organization": "Cybereason",
            "author": "Cybereason Global SOC Team",
            "title": "Threat Analysis Report: All Paths Lead to Cobalt Strike - IcedID, Emotet and QBot",
            "categories": [
                "Cobalt Strike",
                "Emotet",
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-0118.pdf",
            "date": "2022-01-18",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "2021 Adversary Infrastructure Report",
            "categories": [
                "BazarBackdoor",
                "Cobalt Strike",
                "Dridex",
                "IcedID",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://forensicitguy.github.io/analyzing-icedid-document/",
            "date": "2022-01-01",
            "organization": "forensicitguy",
            "author": "Tony Lambert",
            "title": "Analyzing an IcedID Loader Document",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/forums/diary/How+the+Contact+Forms+campaign+tricks+people/28142/",
            "date": "2021-12-16",
            "organization": "InfoSec Handlers Diary Blog",
            "author": "Brad Duncan",
            "title": "How the \"Contact Forms\" campaign tricks people",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/forums/diary/TA551+Shathak+pushes+IcedID+Bokbot/28092/",
            "date": "2021-12-03",
            "organization": "SANS ISC InfoSec Forums",
            "author": "Brad Duncan",
            "title": "TA551 (Shathak) pushes IcedID (Bokbot)",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/ransomware-graphic-blog",
            "date": "2021-11-16",
            "organization": "IronNet",
            "author": "IronNet Threat Research",
            "title": "How IronNet's Behavioral Analytics Detect REvil and Conti Ransomware",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "IcedID",
                "REvil"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2021-1112.pdf",
            "date": "2021-11-12",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "The Business of Fraud: Botnet Malware Dissemination",
            "categories": [
                "Mozi",
                "Dridex",
                "IcedID",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.splunk.com/en_us/blog/security/detecting-icedid-could-it-be-a-trickbot-copycat.html",
            "date": "2021-11-04",
            "organization": "splunk",
            "author": "Splunk Threat Research Team",
            "title": "Detecting IcedID... Could It Be A Trickbot Copycat?",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://team-cymru.com/blog/2021/11/03/webinject-panel-administration-a-vantage-point-into-multiple-threat-actor-campaigns/",
            "date": "2021-11-03",
            "organization": "Team Cymru",
            "author": "tcblogposts",
            "title": "Webinject Panel Administration: A Vantage Point into Multiple Threat Actor Campaigns - A Case Study on the Value of Threat Reconnaisance",
            "categories": [
                "DoppelDridex",
                "IcedID",
                "QakBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/",
            "date": "2021-10-18",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "IcedID to XingLocker Ransomware in 24 hours",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "Mount Locker"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/j/ransomware-operators-found-using-new-franchise-business-model.html",
            "date": "2021-10-15",
            "organization": "Trend Micro",
            "author": "Fernando Merc\u00eas",
            "title": "Ransomware Operators Found Using New \"Franchise\" Business Model",
            "categories": [
                "Glupteba",
                "IcedID",
                "Mount Locker"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/content/dam/trendmicro/global/en/research/21/i/ssl-tls-technical-brief/ssl-tls-technical-brief.pdf",
            "date": "2021-09-03",
            "organization": "Trend Micro",
            "author": "Mohamad Mokbel",
            "title": "The State of SSL/TLS Certificate Usage in  Malware C&C Communications",
            "categories": [
                "AdWind",
                "ostap",
                "AsyncRAT",
                "BazarBackdoor",
                "BitRAT",
                "Buer",
                "Chthonic",
                "CloudEyE",
                "Cobalt Strike",
                "DCRat",
                "Dridex",
                "FindPOS",
                "GootKit",
                "Gozi",
                "IcedID",
                "ISFB",
                "Nanocore RAT",
                "Orcus RAT",
                "PandaBanker",
                "Qadars",
                "QakBot",
                "Quasar RAT",
                "Rockloader",
                "ServHelper",
                "Shifu",
                "SManager",
                "TorrentLocker",
                "TrickBot",
                "Vawtrak",
                "Zeus",
                "Zloader"
            ]
        },
        {
            "data_url": "https://symantec.broadcom.com/hubfs/The_Ransomware_Threat_September_2021.pdf",
            "date": "2021-08-15",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "The Ransomware Threat",
            "categories": [
                "Babuk",
                "BlackMatter",
                "DarkSide",
                "Avaddon",
                "Babuk",
                "BADHATCH",
                "BazarBackdoor",
                "BlackMatter",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DarkSide",
                "DoppelPaymer",
                "Egregor",
                "Emotet",
                "FiveHands",
                "FriedEx",
                "Hades",
                "IcedID",
                "LockBit",
                "Maze",
                "MegaCortex",
                "MimiKatz",
                "QakBot",
                "RagnarLocker",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://therecord.media/meet-prometheus-the-secret-tds-behind-some-of-todays-malware-campaigns/",
            "date": "2021-08-05",
            "organization": "The Record",
            "author": "Catalin Cimpanu",
            "title": "Meet Prometheus, the secret TDS behind some of today\u2019s malware campaigns",
            "categories": [
                "Buer",
                "campoloader",
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://blog.group-ib.com/prometheus-tds",
            "date": "2021-08-05",
            "organization": "Group-IB",
            "author": "Viktor Okorokov",
            "title": "Prometheus TDS The key to success for Campo Loader, Hancitor, IcedID, and QBot",
            "categories": [
                "Prometheus Backdoor",
                "Buer",
                "campoloader",
                "Hancitor",
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://threatresearch.ext.hp.com/detecting-ta551-domains/",
            "date": "2021-07-30",
            "organization": "HP",
            "author": "Patrick Schl\u00e4pfer",
            "title": "Detecting TA551 domains",
            "categories": [
                "Valak",
                "Dridex",
                "IcedID",
                "ISFB",
                "QakBot"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2021/07/hunting-icedid-and-unpacking-automation-with-qiling.html",
            "date": "2021-07-26",
            "organization": "vmware",
            "author": "Quentin Fois",
            "title": "Hunting IcedID and unpacking automation with Qiling",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://github.com/Lastline-Inc/iocs-tools/tree/main/2021-07-IcedID-Part-2",
            "date": "2021-07-23",
            "organization": "Github (Lastline-Inc)",
            "author": "Quentin Fois",
            "title": "YARA rules, IOCs and Scripts for extracting IcedID C2s",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/07/19/icedid-and-cobalt-strike-vs-antivirus/",
            "date": "2021-07-19",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "IcedID and Cobalt Strike vs Antivirus",
            "categories": [
                "Cobalt Strike",
                "IcedID"
            ]
        },
        {
            "data_url": "https://ceriumnetworks.com/threat-of-the-month-icedid-malware/",
            "date": "2021-07-14",
            "organization": "Cerium Networks",
            "author": "Blumira",
            "title": "Threat of the Month: IcedID Malware",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blogs.vmware.com/security/2021/07/icedid-analysis-and-detection.html",
            "date": "2021-07-08",
            "organization": "vmware",
            "author": "Quentin Fois",
            "title": "IcedID: Analysis and Detection",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.cynet.com/attack-techniques-hands-on/shelob-moonlight-spinning-a-larger-web/",
            "date": "2021-06-30",
            "organization": "Cynet",
            "author": "Max Malyutin",
            "title": "Shelob Moonlight \u2013 Spinning a Larger Web From IcedID to CONTI, a Trojan and Ransomware collaboration",
            "categories": [
                "Conti",
                "IcedID"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/evasive-maneuvers-massive-icedid-campaign-aims-for-stealth-with-benign-macros/",
            "date": "2021-06-24",
            "organization": "SentinelOne",
            "author": "Marco Figueroa",
            "title": "Evasive Maneuvers | Massive IcedID Campaign Aims For Stealth with Benign Macros",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://securelist.com/malicious-spam-campaigns-delivering-banking-trojans/102917",
            "date": "2021-06-24",
            "organization": "Kaspersky",
            "author": "Anton Kuzmenko",
            "title": "Malicious spam campaigns delivering banking Trojans",
            "categories": [
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/06/20/from-word-to-lateral-movement-in-1-hour/",
            "date": "2021-06-20",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "From Word to Lateral Movement in 1 Hour",
            "categories": [
                "Cobalt Strike",
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/first-step-initial-access-leads-ransomware",
            "date": "2021-06-16",
            "organization": "Proofpoint",
            "author": "Selena Larson",
            "title": "The First Step: Initial Access Leads to Ransomware",
            "categories": [
                "BazarBackdoor",
                "Egregor",
                "IcedID",
                "Maze",
                "QakBot",
                "REvil",
                "Ryuk",
                "TrickBot",
                "WastedLocker"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=wMXD4Sv1Alw",
            "date": "2021-05-29",
            "organization": "Youtube (AhmedS Kasmani)",
            "author": "AhmedS Kasmani",
            "title": "Analysis of ICEID Malware Installer DLL",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2021/melting-ice-tracking-icedid-servers-with-a-few-simple-steps/",
            "date": "2021-05-26",
            "organization": "Check Point",
            "author": "Alex Ilgayev",
            "title": "Melting Ice \u2013 Tracking IcedID Servers with a few simple steps",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://team-cymru.com/blog/2021/05/19/tracking-bokbot-infrastructure/",
            "date": "2021-05-19",
            "organization": "Team Cymru",
            "author": "Josh Hopkins",
            "title": "Tracking BokBot Infrastructure Mapping a Vast and Currently Active BokBot Network",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blog.reconinfosec.com/an-encounter-with-ta551-shathak",
            "date": "2021-05-18",
            "organization": "RECON INFOSEC",
            "author": "Andrew Cook",
            "title": "An Encounter With TA551/Shathak",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.telekom.com/en/blog/group/article/let-s-set-ice-on-fire-hunting-and-detecting-icedid-infections-627240",
            "date": "2021-05-17",
            "organization": "Telekom",
            "author": "Thomas Barabosch",
            "title": "Let\u2019s set ice on fire: Hunting and detecting IcedID infections",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://github.com/telekom-security/icedid_analysis",
            "date": "2021-05-17",
            "organization": "Github (telekom-security)",
            "author": "Deutsche Telekom Security GmbH",
            "title": "icedid_analysis",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/05/12/conti-ransomware/",
            "date": "2021-05-12",
            "organization": "",
            "author": "The DFIR Report",
            "title": "Conti Ransomware",
            "categories": [
                "Cobalt Strike",
                "Conti",
                "IcedID"
            ]
        },
        {
            "data_url": "https://malwation.com/icedid-malware-technical-analysis-report/",
            "date": "2021-05-10",
            "organization": "MALWATION",
            "author": "malwation",
            "title": "IcedID Malware Technical Analysis Report",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://netresec.com/?b=214d7ff",
            "date": "2021-04-19",
            "organization": "Netresec",
            "author": "Erik Hjelmvik",
            "title": "Analysing a malware PCAP with IcedID and Cobalt Strike traffic",
            "categories": [
                "Cobalt Strike",
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=YEqLIR6hfOM",
            "date": "2021-04-17",
            "organization": "YouTube (Worcester DEFCON Group)",
            "author": "Joel Snape",
            "title": "Inside IcedID: Anatomy Of An Infostealer",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.silentpush.com/blog/malicious-infrastructure-as-a-service",
            "date": "2021-04-13",
            "organization": "Silent Push",
            "author": "Martijn Grooten",
            "title": "Malicious infrastructure as a service",
            "categories": [
                "IcedID",
                "PhotoLoader",
                "QakBot"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/21/d/a-spike-in-bazarcall-and-icedid-activity.html",
            "date": "2021-04-12",
            "organization": "Trend Micro",
            "author": "Raphael Centeno",
            "title": "A Spike in BazarCall and IcedID Activity Detected in March",
            "categories": [
                "BazarBackdoor",
                "IcedID"
            ]
        },
        {
            "data_url": "https://4rchib4ld.github.io/blog/IcedIDOnMyNeckImTheCoolest/",
            "date": "2021-04-11",
            "organization": "4rchibld",
            "author": "4rchibld",
            "title": "IcedID on my neck I\u2019m the coolest",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=oZ4bwnjcXWg",
            "date": "2021-04-10",
            "organization": "Youtube (AhmedS Kasmani)",
            "author": "AhmedS Kasmani",
            "title": "Malware Analysis: IcedID Banking Trojan JavaScript Dropper",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://aaqeel01.wordpress.com/2021/04/09/icedid-analysis/",
            "date": "2021-04-09",
            "organization": "aaqeel01",
            "author": "Ali Aqeel",
            "title": "IcedID Analysis",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2021/04/09/investigating-a-unique-form-of-email-delivery-for-icedid-malware/",
            "date": "2021-04-09",
            "organization": "Microsoft",
            "author": "Emily Hacker",
            "title": "Investigating a unique \u201cform\u201d of email delivery for IcedID malware",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.uptycs.com/blog/icedid-campaign-spotted-being-spiced-with-excel-4-macros",
            "date": "2021-04-07",
            "organization": "Uptycs",
            "author": "Ashwin Vamshi",
            "title": "IcedID campaign spotted being spiced with Excel 4 Macros",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blog.minerva-labs.com/icedid-maas",
            "date": "2021-04-07",
            "organization": "Minerva",
            "author": "Minerva Labs",
            "title": "IcedID - A New Threat In Office Attachments",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blog.reversinglabs.com/blog/code-reuse-across-packers-and-dll-loaders",
            "date": "2021-04-01",
            "organization": "Reversing Labs",
            "author": "Robert Simmons",
            "title": "Code Reuse Across Packers and DLL Loaders",
            "categories": [
                "IcedID",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://www.silentpush.com/blog/icedid-command-and-control-infrastructure",
            "date": "2021-03-31",
            "organization": "Silent Push",
            "author": "Martijn Grooten",
            "title": "IcedID Command and Control Infrastructure",
            "categories": [
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://resource.redcanary.com/rs/003-YRU-314/images/2021-Threat-Detection-Report.pdf",
            "date": "2021-03-31",
            "organization": "Red Canary",
            "author": "Red Canary",
            "title": "2021 Threat Detection Report",
            "categories": [
                "Shlayer",
                "Andromeda",
                "Cobalt Strike",
                "Dridex",
                "Emotet",
                "IcedID",
                "MimiKatz",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://thedfirreport.com/2021/03/29/sodinokibi-aka-revil-ransomware/",
            "date": "2021-03-29",
            "organization": "The DFIR Report",
            "author": "The DFIR Report",
            "title": "Sodinokibi (aka REvil) Ransomware",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.binarydefense.com/icedid-gziploader-analysis/",
            "date": "2021-03-12",
            "organization": "Binary Defense",
            "author": "James Quinn",
            "title": "IcedID GZIPLOADER Analysis",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.f5.com/labs/articles/threat-intelligence/icedid-banking-trojan-uses-covid-19-pandemic-to-lure-new-victims",
            "date": "2021-03-04",
            "organization": "F5",
            "author": "Dor Nizar",
            "title": "IcedID Banking Trojan Uses COVID-19 Pandemic to Lure New Victims",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20210305181115/https://cisoclub.ru/doc/otchet-kompanii-group-ib-ransomware-uncovered-2020-2021/?bp-attachment=group-ib_ransomware_uncovered_2020-2021.pdf",
            "date": "2021-03",
            "organization": "Group-IB",
            "author": "Oleg Skulkin",
            "title": "Ransomware Uncovered 2020/2021",
            "categories": [
                "RansomEXX",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Conti",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "IcedID",
                "Maze",
                "PwndLocker",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/carbon-spider-sprite-spider-target-esxi-servers-with-ransomware/?utm_campaign=blog&utm_medium=soc&utm_source=twtr&utm_content=sprout",
            "date": "2021-02-26",
            "organization": "CrowdStrike",
            "author": "Eric Loui",
            "title": "Hypervisor Jackpotting: CARBON SPIDER and SPRITE SPIDER Target ESXi Servers With Ransomware to Maximize Impact",
            "categories": [
                "DarkSide",
                "RansomEXX",
                "Griffon",
                "Carbanak",
                "Cobalt Strike",
                "DarkSide",
                "IcedID",
                "MimiKatz",
                "PyXie",
                "RansomEXX",
                "REvil"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2021/02/melting-unc2198-icedid-to-ransomware-operations.html",
            "date": "2021-02-25",
            "organization": "FireEye",
            "author": "Bryce Abdo",
            "title": "So Unchill: Melting UNC2198 ICEDID to Ransomware Operations",
            "categories": [
                "MOUSEISLAND",
                "Cobalt Strike",
                "Egregor",
                "IcedID",
                "Maze",
                "SystemBC"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.mimecast.com/globalassets/documents/whitepapers/taa551-treatresearch_final-1.15.21.pdf",
            "date": "2021-02-03",
            "organization": "",
            "author": "Mimecast",
            "title": "TA551/Shathak Threat Research",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.cronup.com/post/de-ataque-con-malware-a-incidente-de-ransomware",
            "date": "2021-02-02",
            "organization": "CRONUP",
            "author": "Germ\u00e1n Fern\u00e1ndez",
            "title": "De ataque con Malware a incidente de Ransomware",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DanaBot",
                "Dharma",
                "Dridex",
                "Egregor",
                "Emotet",
                "Empire Downloader",
                "FriedEx",
                "GootKit",
                "IcedID",
                "MegaCortex",
                "Nemty",
                "Phorpiex",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "SmokeLoader",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://elis531989.medium.com/funtastic-packers-and-where-to-find-them-41429a7ef9a7",
            "date": "2021-01-19",
            "organization": "Medium elis531989",
            "author": "Eli Salem",
            "title": "Funtastic Packers And Where To Find Them",
            "categories": [
                "Get2",
                "IcedID",
                "QakBot"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/wireshark-tutorial-emotet-infection/",
            "date": "2021-01-19",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brad Duncan",
            "title": "Wireshark Tutorial: Examining Emotet Infection Traffic",
            "categories": [
                "Emotet",
                "GootKit",
                "IcedID",
                "QakBot",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://tccontre.blogspot.com/2021/01/",
            "date": "2021-01-18",
            "organization": "tccontre Blog",
            "author": "tcontre",
            "title": "Extracting Shellcode in ICEID .PNG Steganography",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/",
            "date": "2021-01-09",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "Command and Control Traffic Patterns",
            "categories": [
                "ostap",
                "LaZagne",
                "Agent Tesla",
                "Azorult",
                "Buer",
                "Cobalt Strike",
                "DanaBot",
                "DarkComet",
                "Dridex",
                "Emotet",
                "Formbook",
                "IcedID",
                "ISFB",
                "NetWire RC",
                "PlugX",
                "Quasar RAT",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/ta551-shathak-icedid/",
            "date": "2021-01-07",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Brad Duncan",
            "title": "TA551: Email Attack Campaign Switches from Valak to IcedID",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://awakesecurity.com/blog/detecting-icedid-and-cobalt-strike-beacon-with-network-detection-and-response/",
            "date": "2021",
            "organization": "AWAKE",
            "author": "Awake Security",
            "title": "Breaking the Ice: Detecting IcedID and Cobalt Strike Beacon with Network Detection and Response (NDR)",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "PhotoLoader"
            ]
        },
        {
            "data_url": "https://www.nri-secure.co.jp/blog/explaining-the-tendency-of-malware-icedid",
            "date": "2020-12-10",
            "organization": "NRI SECURE",
            "author": "NeoSOC",
            "title": "\u30de\u30eb\u30a6\u30a7\u30a2\u300cIcedID\u300d\u306e\u691c\u77e5\u50be\u5411\u3068\u611f\u67d3\u306b\u81f3\u308b\u30d7\u30ed\u30bb\u30b9\u3092\u5fb9\u5e95\u89e3\u8aac",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/security/blog/2020/12/09/edr-in-block-mode-stops-icedid-cold/",
            "date": "2020-12-09",
            "organization": "Microsoft",
            "author": "Microsoft 365 Defender Research Team",
            "title": "EDR in block mode stops IcedID cold",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/12/quarterly-ir-report-fall-2020-q4.html",
            "date": "2020-12-09",
            "organization": "Cisco",
            "author": "David Liebenberg",
            "title": "Quarterly Report: Incident Response trends from Fall 2020",
            "categories": [
                "Cobalt Strike",
                "IcedID",
                "Maze",
                "RansomEXX",
                "Ryuk"
            ]
        },
        {
            "data_url": "https://blog.cyberint.com/icedid-stealer-man-in-the-browser-banking-trojan",
            "date": "2020-12-02",
            "organization": "CyberInt",
            "author": "Cyberint Research",
            "title": "IcedID Stealer Man-in-the-browser Banking Trojan",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.cybereason.com/blog/cybereason-vs-egregor-ransomware",
            "date": "2020-11-26",
            "organization": "Cybereason",
            "author": "Lior Rochberger",
            "title": "Cybereason vs. Egregor Ransomware",
            "categories": [
                "Cobalt Strike",
                "Egregor",
                "IcedID",
                "ISFB",
                "QakBot"
            ]
        },
        {
            "data_url": "https://download.microsoft.com/download/f/8/1/f816b8b6-bee3-41e5-b6cc-e925a5688f61/Microsoft_Digital_Defense_Report_2020_September.pdf",
            "date": "2020-09-29",
            "organization": "Microsoft",
            "author": "Microsoft",
            "title": "Microsoft Digital Defense Report",
            "categories": [
                "Emotet",
                "IcedID",
                "Mailto",
                "Maze",
                "QakBot",
                "REvil",
                "RobinHood",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://kienmanowar.wordpress.com/2020/08/16/manual-unpacking-icedid-write-up/",
            "date": "2020-08-16",
            "organization": "kienmanowar Blog",
            "author": "m4n0w4r",
            "title": "Manual Unpacking IcedID Write-up",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blogs.juniper.net/en-us/threat-research/iceid-campaign-strikes-back",
            "date": "2020-08-12",
            "organization": "Juniper",
            "author": "Paul Kimayong",
            "title": "IcedID Campaign Strikes Back",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://tccontre.blogspot.com/2020/08/learning-from-iceid-loader-including.html",
            "date": "2020-08-10",
            "organization": "tccontre Blog",
            "author": "tccontre",
            "title": "Learning From ICEID loader - Including its Steganography Payload Parsing",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.spamhaus.org/news/images/botnet-report-2020-q2/2020-q2-spamhaus-botnet-threat-report.pdf",
            "date": "2020-07-30",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q2 2020",
            "categories": [
                "AdWind",
                "Agent Tesla",
                "Arkei Stealer",
                "AsyncRAT",
                "Ave Maria",
                "Azorult",
                "DanaBot",
                "Emotet",
                "IcedID",
                "ISFB",
                "KPOT Stealer",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Pony",
                "Raccoon",
                "RedLine Stealer",
                "Remcos",
                "Zloader"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/07/valak-emerges.html",
            "date": "2020-07-01",
            "organization": "Cisco Talos",
            "author": "Nick Biasini",
            "title": "Threat Spotlight: Valak Slithers Its Way Into Manufacturing and Transportation Networks",
            "categories": [
                "Valak",
                "IcedID",
                "ISFB",
                "MyKings Spreader"
            ]
        },
        {
            "data_url": "https://zero2auto.com/2020/06/22/unpacking-visual-basic-packers/",
            "date": "2020-06-22",
            "organization": "zero2auto",
            "author": "Daniel Bunce",
            "title": "Unpacking Visual Basic Packers \u2013 IcedID",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blogs.juniper.net/en-us/threat-research/covid-19-and-fmla-campaigns-used-to-install-new-icedid-banking-malware",
            "date": "2020-06-18",
            "organization": "Juniper",
            "author": "Paul Kimayong",
            "title": "COVID-19 and FMLA Campaigns used to install new IcedID banking malware",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://github.com/f0wl/deICEr",
            "date": "2020-06-17",
            "organization": "Github (f0wl)",
            "author": "Marius Genheimer",
            "title": "deICEr: A Go tool for extracting config from IcedID second stage Loaders",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.group-ib.com/blog/icedid",
            "date": "2020-05-29",
            "organization": "Group-IB",
            "author": "Ivan Pisarev",
            "title": "IcedID: When ice burns through bank accounts",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2020/02/18/nearly-a-quarter-of-malware-now-communicates-using-tls/",
            "date": "2020-02-18",
            "organization": "Sophos Labs",
            "author": "Luca Nagy",
            "title": "Nearly a quarter of malware now communicates using TLS",
            "categories": [
                "Dridex",
                "IcedID",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://0xc0decafe.com/malware-analyst-guide-to-pe-timestamps/",
            "date": "2020-01-22",
            "organization": "",
            "author": "Thomas Barabosch",
            "title": "The malware analyst\u2019s guide to PE timestamps",
            "categories": [
                "Azorult",
                "Gozi",
                "IcedID",
                "ISFB",
                "LOLSnif",
                "SUNBURST",
                "TEARDROP"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/gold-swathmore",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "GOLD SWATHMORE",
            "categories": [
                "GlobeImposter",
                "Gozi",
                "IcedID",
                "TrickBot",
                "LUNAR SPIDER"
            ]
        },
        {
            "data_url": "https://gist.github.com/psrok1/e6bf5851d674edda03a201e7f24a5e6b",
            "date": "2019-12-18",
            "organization": "Github (psrok1)",
            "author": "Pawe\u0142 Srokosz",
            "title": "IcedID PNG Extractor",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.slideshare.net/codeblue_jp/cb19-cyber-threat-landscape-in-japan-revealing-threat-in-the-shadow-by-chi-en-shen-ashley-oleg-bondarenko",
            "date": "2019-12-12",
            "organization": "FireEye",
            "author": "Chi-en Shen",
            "title": "Cyber Threat Landscape in Japan \u2013 Revealing Threat in the Shadow",
            "categories": [
                "Cerberus",
                "TSCookie",
                "Cobalt Strike",
                "Dtrack",
                "Emotet",
                "Formbook",
                "IcedID",
                "Icefog",
                "IRONHALO",
                "Loki Password Stealer (PWS)",
                "PandaBanker",
                "PLEAD",
                "poisonplug",
                "TrickBot",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2019/12/new-version-of-icedid-trojan-uses-steganographic-payloads/",
            "date": "2019-12-03",
            "organization": "Malwarebytes",
            "author": "Threat Intelligence Team",
            "title": "New version of IcedID Trojan uses steganographic payloads",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/icedid-malware-analysis-part-one.html",
            "date": "2019-07-09",
            "organization": "Fortinet",
            "author": "Kai Lu",
            "title": "A Deep Dive Into IcedID Malware: Part I - Unpacking, Hooking and Process Injection",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://medium.com/@dawid.golak/icedid-aka-bokbot-analysis-with-ghidra-560e3eccb766",
            "date": "2019-06-25",
            "organization": "",
            "author": "Dawid Golak",
            "title": "IcedID aka #Bokbot Analysis with Ghidra",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/icedid-malware-analysis-part-two.html",
            "date": "2019-06-16",
            "organization": "Fortinet",
            "author": "Kai Lu",
            "title": "A Deep Dive Into IcedID Malware: Part II - Analysis of the Core IcedID Payload (Parent Process)",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/icedid-banking-trojan-spruces-up-injection-tactics-to-add-stealth/",
            "date": "2019-04-04",
            "organization": "SecurityIntelligence",
            "author": "Nir Somech",
            "title": "IcedID Banking Trojan Spruces Up Injection Tactics to Add Stealth",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/bokbots-man-in-the-browser-overview/",
            "date": "2019-03-21",
            "organization": "CrowdStrike",
            "author": "Shaun Hurley",
            "title": "Interception: Dissecting BokBot\u2019s \u201cMan in the Browser\u201d",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/sin-ful-spiders-wizard-spider-and-lunar-spider-sharing-the-same-web/",
            "date": "2019-02-15",
            "organization": "CrowdStrike",
            "author": "Brendon Feeley",
            "title": "\u201cSin\u201d-ful SPIDERS: WIZARD SPIDER and LUNAR SPIDER Sharing the Same Web",
            "categories": [
                "Dyre",
                "IcedID",
                "TrickBot",
                "Vawtrak",
                "LUNAR SPIDER",
                "WIZARD SPIDER"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/icedid-operators-using-atsengine-injection-panel-to-hit-e-commerce-sites/",
            "date": "2019-02-06",
            "organization": "SecurityIntelligence",
            "author": "Itzik Chimino",
            "title": "IcedID Operators Using ATSEngine Injection Panel to Hit E-Commerce Sites",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.crowdstrike.com/blog/digging-into-bokbots-core-module/",
            "date": "2019-01-03",
            "organization": "CrowdStrike",
            "author": "Shaun Hurley",
            "title": "Digging into BokBot\u2019s Core Module",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=7Dk7NkIbVqY",
            "date": "2018-11-09",
            "organization": "Youtube (OALabs)",
            "author": "Sean Wilson",
            "title": "Reverse Engineering IcedID / Bokbot Malware Part 2",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=wObF9n2UIAM",
            "date": "2018-10-26",
            "organization": "Youtube (OALabs)",
            "author": "Sergei Frankoff",
            "title": "Unpacking Bokbot / IcedID Malware - Part 1",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://www.vkremez.com/2018/09/lets-learn-deeper-dive-into.html",
            "date": "2018-09-07",
            "organization": "",
            "author": "Vitali Kremez",
            "title": "Let's Learn: Deeper Dive into \"IcedID\"/\"BokBot\" Banking Malware: Part 1",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://blog.fox-it.com/2018/08/09/bokbot-the-rebirth-of-a-banker/",
            "date": "2018-08-09",
            "organization": "Fox-IT",
            "author": "Alfred Klason",
            "title": "Bokbot: The (re)birth of a banker",
            "categories": [
                "IcedID",
                "Vawtrak"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2018/04/icedid-banking-trojan.html",
            "date": "2018-04-10",
            "organization": "Cisco Talos",
            "author": "Ross Gibb",
            "title": "IcedID Banking Trojan Teams up with Ursnif/Dreambot for Distribution",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://digitalguardian.com/blog/iceid-banking-trojan-targeting-banks-payment-card-providers-e-commerce-sites",
            "date": "2017-11-14",
            "organization": "Digital Guardian",
            "author": "Chris Brook",
            "title": "IceID Banking Trojan Targeting Banks, Payment Card Providers, E-Commerce Sites",
            "categories": [
                "IcedID"
            ]
        },
        {
            "data_url": "https://securityintelligence.com/new-banking-trojan-icedid-discovered-by-ibm-x-force-research/",
            "date": "2017-11-13",
            "organization": "SecurityIntelligence",
            "author": "Limor Kessem",
            "title": "New Banking Trojan IcedID Discovered by IBM X-Force Research",
            "categories": [
                "IcedID",
                "IcedID Downloader"
            ]
        },
        {
            "data_url": "http://www.intezer.com/icedid-banking-trojan-shares-code-pony-2-0-trojan/",
            "date": "2017-11-13",
            "organization": "Intezer",
            "author": "Jay Rosenberg",
            "title": "IcedID Banking Trojan Shares Code with Pony 2.0 Trojan",
            "categories": [
                "IcedID",
                "IcedID Downloader"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "icedid",
            "procedure_code": "s0483",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0483",
            "techniques": [
                {
                    "tactic_code": "ta0001",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0001",
                    "tactic_name": "initial access",
                    "tactic_alias": "initial_access",
                    "tactic_description": "The adversary is trying to get into your network.",
                    "technique_code": "t1566.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1566/001",
                    "technique_name": "phishing : spearphishing attachment",
                    "technique_description": "adversaries may send spearphishing emails with a malicious attachment in an attempt to gain access to victim systems. spearphishing attachment is a specific variant of spearphishing. spearphishing attachment is different from other forms of spearphishing in that it employs the use of malware attached to an email. all forms of spearphishing are electronically delivered social engineering targeted at a specific individual, company, or industry. in this scenario, adversaries attach a file to the spearphishing email and usually rely upon user execution to gain execution. spearphishing may also involve social engineering techniques, such as posing as a trusted source.",
                    "procedure_description": "icedid has been delivered via phishing e-mails with malicious attachments.[114]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/005",
                    "technique_name": "command and scripting interpreter : visual basic",
                    "technique_description": "adversaries may abuse visual basic (vb) for execution. vb is a programming language created by microsoft with interoperability with many windows technologies such as component object model and the native api through the windows api. although tagged as legacy with no planned future evolutions, vb is integrated and supported in the .net framework and cross-platform .net core.",
                    "procedure_description": "icedid has used obfuscated vba string expressions.[66]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1106",
                    "technique_link": "https://attack.mitre.org/techniques/T1106",
                    "technique_name": "native api",
                    "technique_description": "adversaries may interact with the native os application programming interface (api) to execute behaviors. native apis provide a controlled means of calling low-level os services within the kernel, such as those involving hardware/devices, memory, and processes. these native apis are leveraged by the os during system boot (when other system components are not yet initialized) as well as carrying out tasks and requests during routine operations.",
                    "procedure_description": "icedid has called zwwritevirtualmemory, zwprotectvirtualmemory, zwqueueapcthread, and ntresumethread to inject itself into a remote process.[98]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "icedid has created a scheduled task that executes every hour to establish persistence.[83]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/002",
                    "technique_name": "user execution : malicious file",
                    "technique_description": "an adversary may rely upon a user opening a malicious file in order to gain execution. users may be subjected to social engineering to get them to open a file that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing attachment. adversaries may use several types of files that require a user to execute them, including .doc, .pdf, .xls, .rtf, .scr, .exe, .lnk, .pif, and .cpl.",
                    "procedure_description": "icedid has been executed through word documents with malicious embedded macros.[110]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1047",
                    "technique_link": "https://attack.mitre.org/techniques/T1047",
                    "technique_name": "windows management instrumentation",
                    "technique_description": "adversaries may abuse windows management instrumentation (wmi) to execute malicious commands and payloads. wmi is an administration feature that provides a uniform environment to access windows system components. the wmi service enables both local and remote access, though the latter is facilitated by remote services such as distributed component object model (dcom) and windows remote management (winrm). remote wmi over dcom operates using port 135, whereas wmi over winrm operates over port 5985 when using http and 5986 for https.",
                    "procedure_description": "icedid has used wmi to execute binaries.[59]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "icedid has established persistence by creating a registry run key.[121]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "icedid has created a scheduled task that executes every hour to establish persistence.[83]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/001",
                    "technique_name": "boot or logon autostart execution : registry run keys / startup folder",
                    "technique_description": "adversaries may achieve persistence by adding a program to a startup folder or referencing it with a registry run key. adding an entry to the \"run keys\" in the registry or startup folder will cause the program referenced to be executed when a user logs in. these programs will be executed under the context of the user and will have the account's associated permissions level.",
                    "procedure_description": "icedid has established persistence by creating a registry run key.[121]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/004",
                    "technique_name": "process injection : asynchronous procedure call",
                    "technique_description": "adversaries may inject malicious code into processes via the asynchronous procedure call (apc) queue in order to evade process-based defenses as well as possibly elevate privileges. apc injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "icedid has used zwqueueapcthread to inject itself into remote processes.[9]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/005",
                    "technique_name": "scheduled task/job : scheduled task",
                    "technique_description": "adversaries may abuse the windows task scheduler to perform task scheduling for initial or recurring execution of malicious code. there are multiple ways to access the task scheduler in windows. the schtasks utility can be run directly on the command line, or the task scheduler can be opened through the gui within the administrator tools section of the control panel. in some cases, adversaries have used a .net wrapper for the windows task scheduler, and alternatively, adversaries have used the windows netapi32 library to create a scheduled task.",
                    "procedure_description": "icedid has created a scheduled task that executes every hour to establish persistence.[83]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "icedid has utilzed encrypted binaries and base64 encoded strings.[165]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/002",
                    "technique_name": "obfuscated files or information : software packing",
                    "technique_description": "adversaries may perform software packing or virtual machine software protection to conceal their code. software packing is a method of compressing or encrypting an executable. packing an executable changes the file signature in an attempt to avoid signature-based detection. most decompression techniques decompress the executable code in memory. virtual machine software protection translates an executable's original code into a special format that only a special virtual machine can run. a virtual machine is then called to run this code.",
                    "procedure_description": "icedid has packed and encrypted its loader module.[51]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/003",
                    "technique_name": "obfuscated files or information : steganography",
                    "technique_description": "adversaries may use steganography techniques in order to prevent the detection of hidden information. steganographic techniques can be used to hide data in digital media such as images, audio tracks, video clips, or text files.",
                    "procedure_description": "icedid has embedded binaries within rc4 encrypted .png files.[11]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1055/004",
                    "technique_name": "process injection : asynchronous procedure call",
                    "technique_description": "adversaries may inject malicious code into processes via the asynchronous procedure call (apc) queue in order to evade process-based defenses as well as possibly elevate privileges. apc injection is a method of executing arbitrary code in the address space of a separate live process.",
                    "procedure_description": "icedid has used zwqueueapcthread to inject itself into remote processes.[9]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/007",
                    "technique_name": "system binary proxy execution : msiexec",
                    "technique_description": "adversaries may abuse msiexec.exe to proxy execution of malicious payloads. msiexec.exe is the command-line utility for the windows installer and is thus commonly associated with executing installation packages (.msi). the msiexec.exe binary may also be digitally signed by microsoft.",
                    "procedure_description": "icedid can inject itself into a suspended msiexec.exe process to send beacons to c2 while appearing as a normal msi application. [12]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/002",
                    "technique_name": "account discovery : domain account",
                    "technique_description": "adversaries may attempt to get a listing of domain accounts. this information can help adversaries determine which domain accounts exist to aid in follow-on behavior such as targeting specific accounts which possess particular privileges.",
                    "procedure_description": "icedid can query ldap to identify additional users on the network to infect.[27]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069",
                    "technique_link": "https://attack.mitre.org/techniques/T1069",
                    "technique_name": "permission groups discovery",
                    "technique_description": "adversaries may attempt to discover group and permission settings. this information can help adversaries determine which user accounts and groups are available, the membership of users in particular groups, and which users and groups have elevated permissions.",
                    "procedure_description": "icedid has the ability to identify workgroup membership.[4]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "icedid has the ability to identify the computer name and os version on a compromised host.[170]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1185",
                    "technique_link": "https://attack.mitre.org/techniques/T1185",
                    "technique_name": "browser session hijacking",
                    "technique_description": "adversaries may take advantage of security vulnerabilities and inherent functionality in browser software to change content, modify user-behaviors, and intercept information as part of various browser session hijacking techniques.",
                    "procedure_description": "icedid has used web injection attacks to redirect victims to spoofed sites designed to harvest banking and other credentials.  icedid can use a self signed tls certificate in connection with the spoofed site and simultaneously maintains a live connection with the legitimate site to display the correct url and certificates in the browser.[14][15]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "icedid has used https in communications with c2.[163]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/002",
                    "technique_name": "encrypted channel : asymmetric cryptography",
                    "technique_description": "adversaries may employ a known asymmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. asymmetric cryptography, also known as public key cryptography, uses a keypair per party: one public that can be freely distributed, and one private. due to how the keys are generated, the sender encrypts data with the receiver\u2019s public key and the receiver decrypts the data with their private key. this ensures that only the intended recipient can read the encrypted data. common public key encryption algorithms include rsa and elgamal.",
                    "procedure_description": "icedid has used ssl and tls in communications with c2.[28][29]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "icedid has the ability to download additional modules and a configuration file from c2.[222][223]"
                }
            ]
        }
    ]
};