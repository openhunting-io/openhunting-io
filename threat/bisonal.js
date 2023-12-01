var threatdata = {
    "name": "Bisonal",
    "alias": "Bisonal, Korlia",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration, Downloader",
    "modified": "2023-09-19",
    "all_data": {
        "tool": "Bisonal",
        "names": [
            {
                "name": "Bisonal"
            },
            {
                "name": "Korlia"
            }
        ],
        "description": "(Palo Alto) In early May, Unit 42 discovered an attack campaign against at least one defense company in Russia and one unidentified organization in South Korea delivering a variant of Bisonal malware. While not previously publicly documented, the variant has been in the wild since at least 2014. There are three primary differences between it and older Bisonal malware including a different cipher and encryption for C2 communication, and a large rewrite of the code for both network communication and maintaining persistence. To date, we have only collected 14 samples of this variant, indicating it may be sparingly used. The adversary behind these attacks lured the targets into launching the Microsoft Windows executable malware by masquerading it as a PDF file (using a fake PDF icon) and reusing publicly available data for the decoy PDF file\u2019s contents.\n\nAttacks using Bisonal have been blogged about in the past. In 2013, both COSEINC and FireEye revealed attacks using Bisonal against Japanese organizations. In October 2017, AhnLab published a report called \u201cOperation Bitter Biscuit,\u201d an attack campaign against South Korea, Japan, India and Russia using Bisonal and its successors, Bioazih and Dexbia. We believe it is likely these tools are being used by one group of attackers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-bisonal-malware-used-attacks-russia-south-korea/",
            "https://camal.coseinc.com/publish/2013Bisonal.pdf",
            "https://www.rsaconference.com/writable/presentations/file_upload/cle-t04_final_v1.pdf",
            "https://blog.talosintelligence.com/2020/03/bisonal-10-years-of-play.html",
            "https://securitykitten.github.io/2014/11/25/curious-korlia.html",
            "https://securelist.com/cactuspete-apt-groups-updated-bisonal-backdoor/97962/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0268/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.korlia"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:bisonal"
        ],
        "uuid": "c23db213-667e-48ca-ae9f-c19c503762ef",
        "last-card-change": "2020-08-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Bisonal",
            "malware_alias": null,
            "malware": "win.bisonal",
            "last_update": "2023-09-20 07:36:22",
            "tags": [
                "APT",
                "TAG-74"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "kybook.viewdns.net",
                        "timestamp": "2023-09-20 07:36:22"
                    },
                    {
                        "value": "leader.gotdns.ch",
                        "timestamp": "2023-09-20 07:35:56"
                    },
                    {
                        "value": "likms.hopto.org",
                        "timestamp": "2023-09-20 07:35:56"
                    },
                    {
                        "value": "logindaums.ddnsking.com",
                        "timestamp": "2023-09-20 07:35:55"
                    },
                    {
                        "value": "loginsdaum.viewdns.net",
                        "timestamp": "2023-09-20 07:35:54"
                    },
                    {
                        "value": "mafolog.serveminecraft.net",
                        "timestamp": "2023-09-20 07:35:54"
                    },
                    {
                        "value": "mailplug.ddnsking.com",
                        "timestamp": "2023-09-20 07:35:54"
                    },
                    {
                        "value": "minjoo2.servehttp.com",
                        "timestamp": "2023-09-20 07:35:54"
                    },
                    {
                        "value": "mintaek.bounceme.net",
                        "timestamp": "2023-09-20 07:35:53"
                    },
                    {
                        "value": "munjanara.servehttp.com",
                        "timestamp": "2023-09-20 07:35:52"
                    },
                    {
                        "value": "pattern.webhop.me",
                        "timestamp": "2023-09-20 07:35:52"
                    },
                    {
                        "value": "necgo.serveblog.net",
                        "timestamp": "2023-09-20 07:35:50"
                    },
                    {
                        "value": "pixoneer.myvnc.com",
                        "timestamp": "2023-09-20 07:35:50"
                    },
                    {
                        "value": "plomacy.ddnsking.com",
                        "timestamp": "2023-09-20 07:35:50"
                    },
                    {
                        "value": "proeso.servehttp.com",
                        "timestamp": "2023-09-20 07:35:49"
                    },
                    {
                        "value": "prparty.webhop.me",
                        "timestamp": "2023-09-20 07:35:48"
                    },
                    {
                        "value": "puacgo1.servemp3.com",
                        "timestamp": "2023-09-20 07:35:48"
                    },
                    {
                        "value": "saevit.servebeer.com",
                        "timestamp": "2023-09-20 07:35:47"
                    },
                    {
                        "value": "safety.viewdns.net",
                        "timestamp": "2023-09-20 07:35:47"
                    },
                    {
                        "value": "samgiblue.servegame.com",
                        "timestamp": "2023-09-20 07:35:46"
                    },
                    {
                        "value": "sarang.serveminecraft.net",
                        "timestamp": "2023-09-20 07:35:45"
                    },
                    {
                        "value": "satreci.bounceme.net",
                        "timestamp": "2023-09-20 07:35:45"
                    },
                    {
                        "value": "sejonglog.hopto.org",
                        "timestamp": "2023-09-20 07:35:45"
                    },
                    {
                        "value": "signga.redirectme.net",
                        "timestamp": "2023-09-20 07:35:44"
                    },
                    {
                        "value": "skparty.myonlineportal.org",
                        "timestamp": "2023-09-20 07:35:44"
                    },
                    {
                        "value": "steering.viewdns.net",
                        "timestamp": "2023-09-20 07:35:44"
                    },
                    {
                        "value": "stjpmsko.serveblog.net",
                        "timestamp": "2023-09-20 07:35:44"
                    },
                    {
                        "value": "themiujoo.viewdns.net",
                        "timestamp": "2023-09-20 07:35:43"
                    },
                    {
                        "value": "surveymonkey.myddns.me",
                        "timestamp": "2023-09-20 07:35:42"
                    },
                    {
                        "value": "tsuago.servehalflife.com",
                        "timestamp": "2023-09-20 07:35:42"
                    },
                    {
                        "value": "tsuagos.servehalflife.com",
                        "timestamp": "2023-09-20 07:35:42"
                    },
                    {
                        "value": "unipedu.servebeer.com",
                        "timestamp": "2023-09-20 07:35:41"
                    },
                    {
                        "value": "visdpaka.servemp3.com",
                        "timestamp": "2023-09-20 07:35:41"
                    },
                    {
                        "value": "visual.webhop.me",
                        "timestamp": "2023-09-20 07:35:40"
                    },
                    {
                        "value": "wwl1764.ddnsking.com",
                        "timestamp": "2023-09-20 07:35:40"
                    },
                    {
                        "value": "anrnet.servegame.com",
                        "timestamp": "2023-09-20 07:35:37"
                    },
                    {
                        "value": "alleyk.onthewifi.com",
                        "timestamp": "2023-09-20 07:35:36"
                    },
                    {
                        "value": "asheepa.sytes.net",
                        "timestamp": "2023-09-20 07:35:36"
                    },
                    {
                        "value": "attachdaum.servecounterstrike.com",
                        "timestamp": "2023-09-20 07:35:35"
                    },
                    {
                        "value": "attachmaildaum.serveblog.net",
                        "timestamp": "2023-09-20 07:35:35"
                    },
                    {
                        "value": "attachmaildaum.servecounterstrike.com",
                        "timestamp": "2023-09-20 07:35:34"
                    },
                    {
                        "value": "bizmeka.viewdns.net",
                        "timestamp": "2023-09-20 07:35:34"
                    },
                    {
                        "value": "bucketnec.bounceme.net",
                        "timestamp": "2023-09-20 07:35:34"
                    },
                    {
                        "value": "eduin21.zapto.org",
                        "timestamp": "2023-09-20 07:34:46"
                    },
                    {
                        "value": "chsoun.serveftp.com",
                        "timestamp": "2023-09-20 07:34:45"
                    },
                    {
                        "value": "ckstar.zapto.org",
                        "timestamp": "2023-09-20 07:34:45"
                    },
                    {
                        "value": "daecheol.myvnc.com",
                        "timestamp": "2023-09-20 07:34:44"
                    },
                    {
                        "value": "eburim.viewdns.net",
                        "timestamp": "2023-09-20 07:34:43"
                    },
                    {
                        "value": "elecinfonec.servehalflife.com",
                        "timestamp": "2023-09-20 07:34:43"
                    },
                    {
                        "value": "foodlab.hopto.org",
                        "timestamp": "2023-09-20 07:34:43"
                    },
                    {
                        "value": "finance.my-homeip.com",
                        "timestamp": "2023-09-20 07:34:42"
                    },
                    {
                        "value": "formsgle.freedynamicdns.net",
                        "timestamp": "2023-09-20 07:34:42"
                    },
                    {
                        "value": "formsgle.freedynamicdns.org",
                        "timestamp": "2023-09-20 07:34:41"
                    },
                    {
                        "value": "fresh.servepics.com",
                        "timestamp": "2023-09-20 07:34:41"
                    },
                    {
                        "value": "global.freedynamicdns.net",
                        "timestamp": "2023-09-20 07:34:40"
                    },
                    {
                        "value": "global.freedynamicdns.org",
                        "timestamp": "2023-09-20 07:34:40"
                    },
                    {
                        "value": "hairouni.serveblog.net",
                        "timestamp": "2023-09-20 07:34:39"
                    },
                    {
                        "value": "hamonsoft.serveblog.net",
                        "timestamp": "2023-09-20 07:34:39"
                    },
                    {
                        "value": "hanseo1.hopto.org",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "harvest.my-homeip.net",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "hometax.onthewifi.com",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "hwarang.myddns.me",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "jaminss.viewdns.net",
                        "timestamp": "2023-09-20 07:34:38"
                    },
                    {
                        "value": "janara.freedynamicdns.org",
                        "timestamp": "2023-09-20 07:34:36"
                    },
                    {
                        "value": "jeoash.servemp3.com",
                        "timestamp": "2023-09-20 07:34:36"
                    },
                    {
                        "value": "jstreco.myftp.biz",
                        "timestamp": "2023-09-20 07:34:36"
                    },
                    {
                        "value": "kanager.bounceme.net",
                        "timestamp": "2023-09-20 07:34:36"
                    },
                    {
                        "value": "kcgselect.servehalflife.com",
                        "timestamp": "2023-09-20 07:34:32"
                    },
                    {
                        "value": "kjmacgk.ddnsking.com",
                        "timestamp": "2023-09-20 07:34:32"
                    },
                    {
                        "value": "kookmina.servecounterstrike.com",
                        "timestamp": "2023-09-20 07:34:32"
                    },
                    {
                        "value": "ksd22.myddns.me",
                        "timestamp": "2023-09-20 07:34:30"
                    },
                    {
                        "value": "kumohhic.viewdns.net",
                        "timestamp": "2023-09-20 07:34:30"
                    }
                ]
            }
        },
        {
            "malware_printable": "Korlia",
            "malware_alias": "Bisonal",
            "malware": "win.korlia",
            "last_update": "2021-03-11 08:22:12",
            "tags": [],
            "ioc": {
                "ip:port": [
                    {
                        "value": "158.247.214.154:80",
                        "timestamp": "2021-03-11 08:22:12"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-09-20 07:36:22",
    "file_name": "bisonal",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2023-0919.pdf",
            "date": "2023-09-19",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "Multi-year Chinese APT Campaign Targets South Korean Academic, Government, and Political Entities",
            "categories": [
                "Korlia"
            ]
        },
        {
            "data_url": "https://www.sentinelone.com/labs/targets-of-interest-russian-organizations-increasingly-under-attack-by-chinese-apts/",
            "date": "2022-07-07",
            "organization": "Sentinel LABS",
            "author": "Tom Hegel",
            "title": "Targets of Interest - Russian Organizations Increasingly Under Attack By Chinese APTs",
            "categories": [
                "8.t Dropper",
                "Korlia"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=_fstHQSK-kk",
            "date": "2021-07-08",
            "organization": "YouTube (PT Product Update)",
            "author": "Denis Kuvshinov",
            "title": "How winnti APT grouping works",
            "categories": [
                "Korlia",
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/upload/corporate/ru-ru/webinars/ics/winnti-shadowpad.pdf",
            "date": "2021-07-08",
            "organization": "PTSecurity",
            "author": "Denis Kuvshinov",
            "title": "How winnti APT grouping works",
            "categories": [
                "Korlia",
                "ShadowPad",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/upload/corporate/ww-en/pt-esc/winnti-2020-eng.pdf",
            "date": "2020-09-08",
            "organization": "PTSecurity",
            "author": "PTSecurity",
            "title": "ShadowPad: new activity from the Winnti group",
            "categories": [
                "CCleaner Backdoor",
                "Korlia",
                "ShadowPad",
                "TypeHash"
            ]
        },
        {
            "data_url": "https://securelist.com/cactuspete-apt-groups-updated-bisonal-backdoor/97962/",
            "date": "2020-08-13",
            "organization": "Kaspersky Labs",
            "author": "Konstantin Zykov",
            "title": "CactusPete APT group\u2019s updated Bisonal backdoor",
            "categories": [
                "Korlia",
                "Tonto Team"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2020/vicious-panda-the-covid-campaign/",
            "date": "2020-03-12",
            "organization": "Check Point",
            "author": "Check Point Research",
            "title": "Vicious Panda: The COVID Campaign",
            "categories": [
                "8.t Dropper",
                "BYEBY",
                "Enfal",
                "Korlia",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2020/03/bisonal-10-years-of-play.html",
            "date": "2020-03-05",
            "organization": "Cisco Talos",
            "author": "Warren Mercer",
            "title": "Bisonal: 10 years of play",
            "categories": [
                "Korlia"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/1298",
            "date": "2020-03-05",
            "organization": "AhnLab",
            "author": "AhnLab ASEC Analysis Team",
            "title": "\uc2e0\ucc9c\uc9c0 \ube44\uc0c1\uc5f0\ub77d\ucc98 \uc704\uc7a5\ud55c Bisonal \uc545\uc131\ucf54\ub4dc \uc720\ud3ec \uc911",
            "categories": [
                "Korlia"
            ]
        },
        {
            "data_url": "https://nao-sec.org/2020/01/an-overhead-view-of-the-royal-road.html",
            "date": "2020-01-29",
            "organization": "nao_sec blog",
            "author": "nao_sec",
            "title": "An Overhead View of the Royal Road",
            "categories": [
                "BLACKCOFFEE",
                "Cotx RAT",
                "Datper",
                "DDKONG",
                "Derusbi",
                "Icefog",
                "Korlia",
                "NewCore RAT",
                "PLAINTEE",
                "Poison Ivy",
                "Sisfader"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2020/pdf/JSAC2020_3_takai_jp.pdf",
            "date": "2020-01-17",
            "organization": "NTT Security",
            "author": "Takai Hajime",
            "title": "Operation Bitter Biscuit",
            "categories": [
                "Korlia"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-huntley",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE HUNTLEY",
            "categories": [
                "Korlia"
            ]
        },
        {
            "data_url": "https://global.ahnlab.com/global/upload/download/asecreport/ASEC%20REPORT_vol.93_ENG.pdf",
            "date": "2019-03-22",
            "organization": "AhnLab",
            "author": "AhnLab ASEC Analysis Team",
            "title": "ASEC REPORT VOL.93 Q4 2018",
            "categories": [
                "Korlia"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-bisonal-malware-used-attacks-russia-south-korea/",
            "date": "2018-07-31",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kaoru Hayashi",
            "title": "Bisonal Malware Used in Attacks Against Russia and South Korea",
            "categories": [
                "Korlia"
            ]
        },
        {
            "data_url": "https://www.slideshare.net/StefanoMaccaglia/bsides-ir-in-heterogeneous-environment",
            "date": "2018-05-15",
            "organization": "BSides Detroit",
            "author": "Keven Murphy",
            "title": "IR in Heterogeneous Environment",
            "categories": [
                "Korlia",
                "Poison Ivy"
            ]
        },
        {
            "data_url": "https://github.com/malware-kitten/securitykitten.github.io/blob/master/_posts/2014-11-25-curious-korlia.md",
            "date": "2014-11-25",
            "organization": "Adventures in Security",
            "author": "Nick Hoffman",
            "title": "Curious Korlia",
            "categories": [
                "Korlia"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20130920120931/https:/www.rsaconference.com/writable/presentations/file_upload/cle-t04_final_v1.pdf",
            "date": "2013",
            "organization": "FireEye",
            "author": "Alex Lanstein",
            "title": "APTs By The Dozen: Dissecting Advanced Attacks",
            "categories": [
                "Korlia"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "bisonal",
            "procedure_code": "s0268",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0268",
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
                    "procedure_description": "bisonal has been delivered as malicious email attachments.[42]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "bisonal has launched cmd.exe and used the shellexecutew() api function to execute commands on the system.[44][45][46]"
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
                    "procedure_description": "bisonal's dropper creates vbs scripts on the victim\u2019s machine.[18][19]"
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
                    "procedure_description": "bisonal has used the windows api to communicate with the service control manager to execute a thread.[36]"
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
                    "procedure_description": "bisonal has relied on users to execute malicious file attachments delivered via spearphishing emails.[37]"
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
                    "procedure_description": "bisonal has added itself to the registry key hkey_current_user\\software\\microsoft\\currentversion\\run\\ for persistence.[44][45]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "bisonal has been modified to be used as a windows service.[23]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1137.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1137/006",
                    "technique_name": "office application startup : add-ins",
                    "technique_description": "adversaries may abuse microsoft office add-ins to obtain persistence on a compromised system. office add-ins can be used to add functionality to office programs.  there are different types of add-ins that can be used by the various office products; including word/excel add-in libraries (wll/xll), vba add-ins, office component object model (com) add-ins, automation add-ins, vba editor (vbe), visual studio tools for office (vsto) add-ins, and outlook add-ins.",
                    "procedure_description": "bisonal has been loaded through a .wll extension added to the %appdata%\\microsoft\\word\\startup\\ repository.[4]"
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
                    "procedure_description": "bisonal has added itself to the registry key hkey_current_user\\software\\microsoft\\currentversion\\run\\ for persistence.[44][45]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1543.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1543/003",
                    "technique_name": "create or modify system process : windows service",
                    "technique_description": "adversaries may create or modify windows services to repeatedly execute malicious payloads as part of persistence. when windows boots up, it starts programs or applications called services that perform background system functions. windows service configuration information, including the file path to the service's executable or recovery programs/commands, is stored in the windows registry.",
                    "procedure_description": "bisonal has been modified to be used as a windows service.[23]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "bisonal has decoded strings in the malware using xor and rc4.[33][34]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "bisonal will delete its dropper and vbs scripts from the victim\u2019s machine.[27][28][29]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036",
                    "technique_link": "https://attack.mitre.org/techniques/T1036",
                    "technique_name": "masquerading",
                    "technique_description": "adversaries may attempt to manipulate features of their artifacts to make them appear legitimate or benign to users and/or security tools. masquerading occurs when the name or location of an object, legitimate or malicious, is manipulated or abused for the sake of evading defenses and observation. this may include manipulating file metadata, tricking users into misidentifying the file type, and giving legitimate task or service names.",
                    "procedure_description": "bisonal dropped a decoy payload with a .jpg extension that contained a malicious visual basic script.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "bisonal has renamed malicious code to msacm32.dll to hide within a legitimate library; earlier versions were disguised as winhelp.[24]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1112",
                    "technique_link": "https://attack.mitre.org/techniques/T1112",
                    "technique_name": "modify registry",
                    "technique_description": "adversaries may interact with the windows registry to hide configuration information within registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution.",
                    "procedure_description": "bisonal has deleted registry keys to clean up its prior activity.[20]"
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
                    "procedure_description": "bisonal's dll file and non-malicious decoy file are encrypted with rc4 and some function name strings are obfuscated.[50][51]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/001",
                    "technique_name": "obfuscated files or information : binary padding",
                    "technique_description": "adversaries may use binary padding to add junk data and change the on-disk representation of malware. this can be done without affecting the functionality or behavior of a binary, but can increase the size of the binary beyond what some security tools are capable of handling due to file size limitations.",
                    "procedure_description": "bisonal has appended random binary data to the end of itself to generate a large binary.[6]"
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
                    "procedure_description": "bisonal has used the mpress packer and similar tools for obfuscation.[19]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1218.011",
                    "technique_link": "https://attack.mitre.org/techniques/T1218/011",
                    "technique_name": "system binary proxy execution : rundll32",
                    "technique_description": "adversaries may abuse rundll32.exe to proxy execution of malicious code. using rundll32.exe, vice executing directly (i.e. shared modules), may avoid triggering security tools that may not monitor execution of the rundll32.exe process because of allowlists or false positives from normal operations. rundll32.exe is commonly associated with executing dll payloads (ex: rundll32.exe {dllname, dllfunction}).",
                    "procedure_description": "bisonal has used rundll32.exe to execute as part of the registry run key it adds: hkey_current_user \\software\\microsoft\\windows\\currentversion\\run\\\"vert\" = \"rundll32.exe c:\\windows\\temp\\pvcu.dll , qszdez\".[20]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497",
                    "technique_link": "https://attack.mitre.org/techniques/T1497",
                    "technique_name": "virtualization/sandbox evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "bisonal can check to determine if the compromised system is running on vmware.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "bisonal has checked if the malware is running in a virtual environment with the anti-debug function gettickcount() to compare the timing.[11][12]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1083",
                    "technique_link": "https://attack.mitre.org/techniques/T1083",
                    "technique_name": "file and directory discovery",
                    "technique_description": "adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. adversaries may use the information from file and directory discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "bisonal can retrieve a file listing from the system.[43][44]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1057",
                    "technique_link": "https://attack.mitre.org/techniques/T1057",
                    "technique_name": "process discovery",
                    "technique_description": "adversaries may attempt to get information about running processes on a system. information obtained could be used to gain an understanding of common software/applications running on systems within the network. adversaries may use the information from process discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "bisonal can obtain a list of running processes on the victim\u2019s machine.[32][33][34]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "bisonal has used the regqueryvalueexa function to retrieve proxy information in the registry.[14]"
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
                    "procedure_description": "bisonal has used commands and api calls to gather system information.[54][55][56]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1016",
                    "technique_link": "https://attack.mitre.org/techniques/T1016",
                    "technique_name": "system network configuration discovery",
                    "technique_description": "adversaries may look for details about the network configuration and settings, such as ip and/or mac addresses, of systems they access or through information discovery of remote systems. several operating system administration utilities exist that can be used to gather this information. examples include arp, ipconfig/ifconfig, nbtstat, and route.",
                    "procedure_description": "bisonal can execute ipconfig on the victim\u2019s machine.[34][35][36]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1124",
                    "technique_link": "https://attack.mitre.org/techniques/T1124",
                    "technique_name": "system time discovery",
                    "technique_description": "an adversary may gather the system time and/or time zone from a local or remote system. the system time is set and stored by the windows time service within a domain to maintain time synchronization between systems and services in an enterprise network.",
                    "procedure_description": "bisonal can check the system time set on the infected host.[15]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497",
                    "technique_link": "https://attack.mitre.org/techniques/T1497",
                    "technique_name": "virtualization/sandbox evasion",
                    "technique_description": "adversaries may employ various means to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "bisonal can check to determine if the compromised system is running on vmware.[5]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/003",
                    "technique_name": "virtualization/sandbox evasion : time based evasion",
                    "technique_description": "adversaries may employ various time-based methods to detect and avoid virtualization and analysis environments. this may include enumerating time-based properties, such as uptime or the system clock, as well as the use of timers or other triggers to avoid a virtual machine environment (vme) or sandbox, specifically those that are automated or only operate for a limited amount of time.",
                    "procedure_description": "bisonal has checked if the malware is running in a virtual environment with the anti-debug function gettickcount() to compare the timing.[11][12]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "bisonal has collected information from a compromised host.[26]"
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
                    "procedure_description": "bisonal has used http for c2 communications.[37][38]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1132.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1132/001",
                    "technique_name": "data encoding : standard encoding",
                    "technique_description": "adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. command and control (c2) information can be encoded using a standard data encoding system that adheres to existing protocol specifications. common data encoding schemes include ascii, unicode, hexadecimal, base64, and mime. some data encoding systems may also result in data compression, such as gzip.",
                    "procedure_description": "bisonal has encoded binary data with base64 and ascii.[12][13]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568",
                    "technique_link": "https://attack.mitre.org/techniques/T1568",
                    "technique_name": "dynamic resolution",
                    "technique_description": "adversaries may dynamically establish connections to command and control infrastructure to evade common detections and remediations. this may be achieved by using malware that shares a common algorithm with the infrastructure the adversary uses to receive the malware's communications. these calculations can be used to dynamically adjust parameters such as the domain name, ip address, or port number the malware uses for command and control.",
                    "procedure_description": "bisonal has used a dynamic dns service for c2.[4]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1573.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1573/001",
                    "technique_name": "encrypted channel : symmetric cryptography",
                    "technique_description": "adversaries may employ a known symmetric encryption algorithm to conceal command and control traffic rather than relying on any inherent protections provided by a communication protocol. symmetric encryption algorithms use the same key for plaintext encryption and ciphertext decryption. common symmetric encryption algorithms include aes, des, 3des, blowfish, and rc4.",
                    "procedure_description": "bisonal variants reported on in 2014 and 2015 used a simple xor cipher for c2. some bisonal samples encrypt c2 communications with rc4.[15][16][17]"
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
                    "procedure_description": "bisonal has the capability to download files to execute on the victim\u2019s machine.[64][65][66]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1095",
                    "technique_link": "https://attack.mitre.org/techniques/T1095",
                    "technique_name": "non-application layer protocol",
                    "technique_description": "adversaries may use an osi non-application layer protocol for communication between host and c2 server or among infected hosts within a network. the list of possible protocols is extensive. specific examples include use of network layer protocols, such as the internet control message protocol (icmp), transport layer protocols, such as the user datagram protocol (udp), session layer protocols, such as socket secure (socks), as well as redirected/tunneled protocols, such as serial over lan (sol).",
                    "procedure_description": "bisonal has used raw sockets for network communication.[10]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1090",
                    "technique_link": "https://attack.mitre.org/techniques/T1090",
                    "technique_name": "proxy",
                    "technique_description": "adversaries may use a connection proxy to direct network traffic between systems or act as an intermediary for network communications to a command and control server to avoid direct connections to their infrastructure. many tools exist that enable traffic redirection through proxies or port redirection, including htran, zxproxy, and zxportmap.  adversaries use these types of proxies to manage command and control communications, reduce the number of simultaneous outbound network connections, provide resiliency in the face of connection loss, or to ride over existing trusted communications paths between victims to avoid suspicion. adversaries may chain together multiple proxies to further disguise the source of malicious traffic.",
                    "procedure_description": "bisonal has supported use of a proxy server.[6]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "bisonal has added the exfiltrated data to the url over the c2 channel.[14]"
                }
            ]
        }
    ]
};