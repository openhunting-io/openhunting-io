var threatdata = {
    "name": "PLEAD",
    "alias": "PLEAD, DRAWDOWN, GOODTIMES, Linopid, TSCookie",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "PLEAD",
        "names": [
            {
                "name": "PLEAD"
            },
            {
                "name": "DRAWDOWN"
            },
            {
                "name": "GOODTIMES"
            },
            {
                "name": "Linopid"
            },
            {
                "name": "TSCookie"
            }
        ],
        "description": "(Trend Micro) PLEAD\u2019s backdoor can:\n\n\u2022 Harvest saved credentials from browsers and email clients like Outlook\n\u2022 List drives, processes, open windows, and files\n\u2022 Open remote Shell\n\u2022 Upload target file\n\u2022 Execute applications via ShellExecute API\n\u2022 Delete target file",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/following-trail-blacktech-cyber-espionage-campaigns/",
            "http://blog.jpcert.or.jp/2018/03/malware-tscooki-7aa0.html",
            "https://blog.jpcert.or.jp/2018/06/plead-downloader-used-by-blacktech.html",
            "https://blogs.jpcert.or.jp/en/2018/11/tscookie2.html",
            "http://www.freebuf.com/column/159865.html",
            "https://www.welivesecurity.com/2018/07/09/certificates-stolen-taiwanese-tech-companies-plead-malware-campaign/",
            "https://documents.trendmicro.com/assets/appendix-following-the-trail-of-blacktechs-cyber-espionage-campaigns.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0435/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.plead",
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.tscookie"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PLEAD"
        ],
        "uuid": "9ed8c80d-8d26-487b-8b98-a31c2206e2ae",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "PLEAD",
            "malware_alias": null,
            "malware": "elf.plead",
            "last_update": "2022-05-23 00:13:11",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "55b075250dad5c15c6386bcdecbde1eb",
                        "timestamp": "2022-05-23 00:13:11"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-05-23 00:13:11",
    "file_name": "plead",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://jp.security.ntt/resources/EN-BlackTech_2021.pdf",
            "date": "2022-09-29",
            "organization": "NTT",
            "author": "NTT Security Holdings Corporation",
            "title": "Report on APT Attacks by  BlackTech",
            "categories": [
                "Bifrost",
                "PLEAD",
                "TSCookie",
                "Flagpro",
                "Gh0stTimes",
                "SelfMake Loader",
                "SPIDERPIG RAT"
            ]
        },
        {
            "data_url": "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/docs/vmw-exposing-malware-in-linux-based-multi-cloud-environments.pdf",
            "date": "2022-02-09",
            "organization": "vmware",
            "author": "VMWare",
            "title": "Exposing Malware in Linux-Based Multi-Cloud Environments",
            "categories": [
                "ACBackdoor",
                "BlackMatter",
                "DarkSide",
                "Erebus",
                "HelloKitty",
                "Kinsing",
                "PLEAD",
                "QNAPCrypt",
                "RansomEXX",
                "REvil",
                "Sysrv-hello",
                "TeamTNT",
                "Vermilion Strike",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://twitter.com/ESETresearch/status/1382054011264700416",
            "date": "2021-04-13",
            "organization": "Twitter (@ESETresearch)",
            "author": "ESET Research",
            "title": "Tweet on TSCookie for FreeBSD platform",
            "categories": [
                "TSCookie"
            ]
        },
        {
            "data_url": "https://cyberandramen.net/2021/02/11/blacktech-updates-elf-plead-backdoor/",
            "date": "2021-02-11",
            "organization": "Cyber And Ramen blog",
            "author": "Mike R",
            "title": "BlackTech Updates Elf-Plead Backdoor",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "https://www.ironnet.com/blog/china-cyber-attacks-the-current-threat-landscape",
            "date": "2020-12-24",
            "organization": "IronNet",
            "author": "Adam Hlavek",
            "title": "China cyber attacks: the current threat landscape",
            "categories": [
                "PLEAD",
                "TSCookie",
                "FlowCloud",
                "Lookback",
                "PLEAD",
                "PlugX",
                "Quasar RAT",
                "Winnti"
            ]
        },
        {
            "data_url": "https://www.intezer.com/blog/cloud-security/top-linux-cloud-threats-of-2020/",
            "date": "2020-12-21",
            "organization": "Intezer",
            "author": "Intezer",
            "title": "Top Linux Cloud Threats of 2020",
            "categories": [
                "AgeLocker",
                "AnchorDNS",
                "Blackrota",
                "Cloud Snooper",
                "Dacls",
                "Doki",
                "FritzFrog",
                "IPStorm",
                "Kaiji",
                "Kinsing",
                "NOTROBIN",
                "Penquin Turla",
                "PLEAD",
                "Prometei",
                "RansomEXX",
                "Stantinko",
                "TeamTNT",
                "TSCookie",
                "WellMail",
                "elf.wellmess",
                "TeamTNT"
            ]
        },
        {
            "data_url": "https://www.cyberandramen.net/home/blacktech-doesnt-miss-a-step-a-quick-analysis-of-a-busy-2020",
            "date": "2020-12-19",
            "organization": "Cyber And Ramen blog",
            "author": "Mike R",
            "title": "Persistence Pays Off: A Brief Look at BlackTech\u2019s 2020",
            "categories": [
                "PLEAD",
                "TSCookie",
                "PLEAD"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2020/11/elf-plead.html",
            "date": "2020-11-16",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "ELF_PLEAD - Linux Malware Used by BlackTech",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/palmerworm-blacktech-espionage-apt",
            "date": "2020-09-29",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Palmerworm: Espionage Gang Targets the Media, Finance, and Other Sectors",
            "categories": [
                "KIVARS",
                "PLEAD",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.macnica.net/pdf/mpressioncss_ta_report_2019_4_en.pdf",
            "date": "2020-05-01",
            "organization": "Macnica Networks",
            "author": "TeamT5",
            "title": "Cyber Espionage Tradecraft in the Real World Adversaries targeting Japan in the second half of 2019",
            "categories": [
                "TSCookie",
                "LODEINFO"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2020/03/elf-tscookie.html",
            "date": "2020-03-05",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "ELF_TSCookie - Linux Malware Used by BlackTech",
            "categories": [
                "TSCookie"
            ]
        },
        {
            "data_url": "https://jsac.jpcert.or.jp/archive/2020/pdf/JSAC2020_0_JPCERT_en.pdf",
            "date": "2020-01-17",
            "organization": "JPCERT/CC",
            "author": "Takayoshi Shiigi",
            "title": "Looking back on the incidents in 2019",
            "categories": [
                "TSCookie",
                "NodeRAT",
                "Emotet",
                "PoshC2",
                "Quasar RAT"
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
            "data_url": "https://web.archive.org/web/20200229012206/https://www.sans.org/cyber-security-summit/archives/file/summit-archive-1574947724.pdf",
            "date": "2019-11-22",
            "organization": "SANS Cyber Security Summit",
            "author": "Sveva Vittoria Scenarelli",
            "title": "Need for PLEAD: BlackTech Pursuit",
            "categories": [
                "BLUETHER",
                "PLEAD"
            ]
        },
        {
            "data_url": "https://summit.fireeye.com/content/dam/fireeye-www/summit/cds-2019/presentations/cds19-executive-s08-achievement-unlocked.pdf",
            "date": "2019-11-19",
            "organization": "FireEye",
            "author": "Kelli Vanderlee",
            "title": "Achievement Unlocked: Chinese Cyber Espionage Evolves to Support Higher Level Missions",
            "categories": [
                "MESSAGETAP",
                "TSCookie",
                "ACEHASH",
                "CHINACHOPPER",
                "Cobalt Strike",
                "Derusbi",
                "Empire Downloader",
                "Ghost RAT",
                "HIGHNOON",
                "HTran",
                "MimiKatz",
                "NetWire RC",
                "poisonplug",
                "Poison Ivy",
                "pupy",
                "Quasar RAT",
                "ZXShell"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_ta_report_2019_2_nopw.pdf",
            "date": "2019-10-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in Cyber \u200b\u200bEspionage Targeting Japan 1st Half of 2019",
            "categories": [
                "PLEAD",
                "TSCookie",
                "Datper",
                "PLEAD"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2019/09/tscookie-loader.html",
            "date": "2019-09-18",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Malware Used by BlackTech after Network Intrusion",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q2-2019/91897/",
            "date": "2019-08-01",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "APT trends report Q2 2019",
            "categories": [
                "ZooPark",
                "magecart",
                "POWERSTATS",
                "Chaperone",
                "COMpfun",
                "EternalPetya",
                "FinFisher RAT",
                "HawkEye Keylogger",
                "HOPLIGHT",
                "Microcin",
                "NjRAT",
                "Olympic Destroyer",
                "PLEAD",
                "RokRAT",
                "Triton",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2019/05/tscookie3.html",
            "date": "2019-05-30",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Bug in Malware \u201cTSCookie\u201d - Fails to Read Configuration - (Update)",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2019/05/14/plead-malware-mitm-asus-webstorage/",
            "date": "2019-05-14",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "Plead malware distributed via MitM attacks at router level, misusing ASUS WebStorage",
            "categories": [
                "PLEAD",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_ta_report_2019.pdf",
            "date": "2019-04-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in Cyber \u200b\u200bEspionage Targeting Japan 2nd Half of 2018",
            "categories": [
                "Anel",
                "Cobalt Strike",
                "Datper",
                "PLEAD",
                "Quasar RAT",
                "RedLeaves",
                "taidoor",
                "Zebrocy"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2018/11/tscookie2.html",
            "date": "2018-11-12",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "Bug in Malware \u201cTSCookie\u201d - Fails to Read Configuration",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/07/09/certificates-stolen-taiwanese-tech-companies-plead-malware-campaign/",
            "date": "2018-07-09",
            "organization": "ESET Research",
            "author": "Anton Cherepanov",
            "title": "Certificates stolen from Taiwanese tech\u2011companies misused in Plead malware campaign",
            "categories": [
                "PLEAD",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://blog.jpcert.or.jp/2018/06/plead-downloader-used-by-blacktech.html",
            "date": "2018-06-08",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "PLEAD Downloader Used by BlackTech",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "http://blog.jpcert.or.jp/2018/03/malware-tscooki-7aa0.html",
            "date": "2018-03-06",
            "organization": "",
            "author": "Shusei Tomonaga",
            "title": "Malware \u201cTSCookie\u201d",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "http://www.freebuf.com/column/159865.html",
            "date": "2018-01-10",
            "organization": "Freebuf",
            "author": "Tencent Computer Manager",
            "title": "Analysis of BlackTech's latest APT attack",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/17/f/following-trail-blacktech-cyber-espionage-campaigns.html",
            "date": "2017-06-22",
            "organization": "Trend Micro",
            "author": "Lenart Bermejo",
            "title": "The Trail of BlackTech\u2019s Cyber Espionage Campaigns",
            "categories": [
                "bifrose",
                "KIVARS",
                "PLEAD"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/following-trail-blacktech-cyber-espionage-campaigns/",
            "date": "2017-06-22",
            "organization": "Trend Micro",
            "author": "Lenart Bermejo",
            "title": "Following the Trail of BlackTech\u2019s Cyber Espionage Campaigns",
            "categories": [
                "PLEAD",
                "BlackTech"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/appendix-following-the-trail-of-blacktechs-cyber-espionage-campaigns.pdf",
            "date": "2017-06",
            "organization": "Trend Micro",
            "author": "Lenart Bermejo",
            "title": "Following the Trail of BlackTech\u2019s Cyber Espionage Campaigns",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2016/04/ghosts_in_the_endpoi.html",
            "date": "2016-04-13",
            "organization": "FireEye",
            "author": "Daniel Regalado",
            "title": "Ghosts in the Endpoint",
            "categories": [
                "PLEAD"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/kivars-with-venom-targeted-attacks-upgrade-with-64-bit-support/",
            "date": "2014-07-02",
            "organization": "Trend Micro",
            "author": "Kervin Alintanahin",
            "title": "KIVARS With Venom: Targeted Attacks Upgrade with 64-bit \u201cSupport\u201d",
            "categories": [
                "FakeWord",
                "KIVARS",
                "PLEAD",
                "Poison RAT",
                "Zeus"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "plead",
            "procedure_code": "s0435",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0435",
            "techniques": [
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
                    "procedure_description": "plead has the ability to execute shell commands on the compromised host.[261]"
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
                    "procedure_description": "plead can use shellexecute to execute applications.[135]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "plead has been executed via malicious links in e-mails.[18]"
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
                    "procedure_description": "plead has been executed via malicious e-mail attachments.[42]"
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
                    "procedure_description": "plead has the ability to delete files on the compromised host.[125]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "plead has the ability to steal saved passwords from microsoft outlook.[31]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "plead can harvest saved credentials from browsers such as google chrome, microsoft internet explorer, and mozilla firefox.[68][69]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1010",
                    "technique_link": "https://attack.mitre.org/techniques/T1010",
                    "technique_name": "application window discovery",
                    "technique_description": "adversaries may attempt to get a listing of open application windows. window listings could convey information about how the system is used. for example, information about application windows could be used identify potential data to collect as well as identifying security tooling (security software discovery) to evade.",
                    "procedure_description": "plead has the ability to list open windows on the compromised host.[24][24]"
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
                    "procedure_description": "plead has the ability to list drives and files on the compromised host.[170][229]"
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
                    "procedure_description": "plead has the ability to list processes on the compromised host.[197]"
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
                    "procedure_description": "plead has used http for communications with command and control (c2) servers.[245][246]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1001.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1001/001",
                    "technique_name": "data obfuscation : junk data",
                    "technique_description": "adversaries may add junk data to protocols used for command and control to make detection more difficult. by adding random or meaningless data to the protocols used for command and control, adversaries can prevent trivial methods for decoding, deciphering, or otherwise analyzing the traffic. examples may include appending/prepending data with junk characters or writing junk characters between significant characters.",
                    "procedure_description": "plead samples were found to be highly obfuscated with junk code.[10][11]"
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
                    "procedure_description": "plead has used rc4 encryption to download modules.[106]"
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
                    "procedure_description": "plead has the ability to upload and download files to and from an infected host.[346]"
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
                    "procedure_description": "plead has the ability to proxy network communications.[35]"
                }
            ]
        },
        {
            "procedure_name": "tscookie",
            "procedure_code": "s0436",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0436",
            "techniques": [
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
                    "procedure_description": "tscookie has the ability to execute shell commands on the infected host.[337]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1204.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1204/001",
                    "technique_name": "user execution : malicious link",
                    "technique_description": "an adversary may rely upon a user clicking a malicious link in order to gain execution. users may be subjected to social engineering to get them to click on a link that will lead to code execution. this user action will typically be observed as follow-on behavior from spearphishing link. clicking on a link may also lead to other execution techniques such as exploitation of a browser or application vulnerability via exploitation for client execution. links may also lead users to download files that require execution via malicious file.",
                    "procedure_description": "tscookie has been executed via malicious links embedded in e-mails spoofing the ministries of education, culture, sports, science and technology of japan.[101]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "tscookie has the ability to inject code into the svchost.exe, iexplorer.exe, explorer.exe, and default browser processes.[64]"
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
                    "procedure_description": "tscookie has the ability to decrypt, load, and execute a dll and its resources.[238]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1055",
                    "technique_link": "https://attack.mitre.org/techniques/T1055",
                    "technique_name": "process injection",
                    "technique_description": "adversaries may inject code into processes in order to evade process-based defenses as well as possibly elevate privileges. process injection is a method of executing arbitrary code in the address space of a separate live process. running code in the context of another process may allow access to the process's memory, system/network resources, and possibly elevated privileges. execution via process injection may also evade detection from security products since the execution is masked under a legitimate process.",
                    "procedure_description": "tscookie has the ability to inject code into the svchost.exe, iexplorer.exe, explorer.exe, and default browser processes.[64]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "tscookie has the ability to steal saved passwords from the internet explorer, edge, firefox, and chrome browsers.[91]"
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
                    "procedure_description": "tscookie has the ability to discover drive information on the infected host.[307]"
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
                    "procedure_description": "tscookie has the ability to list processes on the infected host.[262]"
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
                    "procedure_description": "tscookie has the ability to identify the ip of the infected host.[236]"
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
                    "procedure_description": "tscookie can multiple protocols including http and https in communication with command and control (c2) servers.[347][348]"
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
                    "procedure_description": "tscookie has encrypted network communications with rc4.[139]"
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
                    "procedure_description": "tscookie has the ability to upload and download files to and from the infected host.[451]"
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
                    "procedure_description": "tscookie can use icmp to receive information on the destination server.[69]"
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
                    "procedure_description": "tscookie has the ability to proxy communications with command and control (c2) servers.[45]"
                }
            ]
        }
    ]
};