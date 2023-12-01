var threatdata = {
    "name": "EnvyScout",
    "alias": "EnvyScout, ROOTSAW",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2023-09-22",
    "all_data": {
        "tool": "EnvyScout",
        "names": [
            {
                "name": "EnvyScout"
            },
            {
                "name": "ROOTSAW"
            }
        ],
        "description": "EnvyScout is a dropper that has been used by APT29 since at least 2021.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0634"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.envyscout"
        ],
        "uuid": "821512eb-4755-42b8-a70e-b8fd6053e839",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "EnvyScout",
            "malware_alias": "ROOTSAW",
            "malware": "win.envyscout",
            "last_update": "2022-07-08 16:50:23",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "3aa44a7951ad95d02c426e9e2a174c2e",
                        "timestamp": "2022-07-08 16:50:23"
                    },
                    {
                        "value": "6228d15e3bb50adfa59c1bdf5f6ce9f0",
                        "timestamp": "2022-07-08 16:50:23"
                    },
                    {
                        "value": "59b5d262532dab929bbe56c90a0257d2",
                        "timestamp": "2022-07-08 16:50:23"
                    },
                    {
                        "value": "6812031432039a89fa741e9338f8e887",
                        "timestamp": "2022-07-08 16:50:23"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-08 16:50:23",
    "file_name": "envyscout",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/blog/apt29-evolving-diplomatic-phishing",
            "date": "2023-09-22",
            "organization": "Mandiant",
            "author": "Luke Jenkins",
            "title": "Backchannel Diplomacy: APT29\u2019s Rapidly Evolving Diplomatic Phishing Operations",
            "categories": [
                "Brute Ratel C4",
                "Cobalt Strike",
                "EnvyScout",
                "GraphDrop",
                "QUARTERRIG",
                "sRDI",
                "Unidentified 107 (APT29)"
            ]
        },
        {
            "data_url": "https://cert.pl/posts/2023/04/kampania-szpiegowska-apt29/",
            "date": "2023-04-13",
            "organization": "CERT.PL",
            "author": "CERT.PL",
            "title": "CERT Polska and SKW warn against the activities of Russian spies",
            "categories": [
                "BOOMBOX",
                "EnvyScout",
                "SUNBURST"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2023/03/nobelium-targets-eu-governments-assisting-ukraine",
            "date": "2023-03-14",
            "organization": "Blackberry",
            "author": "BlackBerry Research & Intelligence Team",
            "title": "NOBELIUM Uses Poland's Ambassador\u2019s Visit to the U.S. to Target EU Governments Assisting Ukraine",
            "categories": [
                "EnvyScout",
                "GraphicalNeutrino"
            ]
        },
        {
            "data_url": "https://mrtiepolo.medium.com/sophisticated-apt29-campaign-abuses-notion-api-to-target-the-european-commission-200188059f58",
            "date": "2023-03-10",
            "organization": "Mrtiepolo",
            "author": "Gianluca Tiepolo",
            "title": "Sophisticated APT29 Campaign Abuses Notion API to Target the European Commission",
            "categories": [
                "BEATDROP",
                "EnvyScout",
                "GraphicalNeutrino",
                "tDiscoverer",
                "VaporRage"
            ]
        },
        {
            "data_url": "https://www.incibe-cert.es/sites/default/files/contenidos/estudios/doc/incibe-cert_estudio_analisis_nobelium_2022_v1.pdf",
            "date": "2022-09-06",
            "organization": "INCIBE-CERT",
            "author": "INCIBE",
            "title": "Estudio del an\u00e1lisis de Nobelium",
            "categories": [
                "BEATDROP",
                "BOOMBOX",
                "Cobalt Strike",
                "EnvyScout",
                "Unidentified 099 (APT29 Dropbox Loader)",
                "VaporRage"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/cloaked-ursa-online-storage-services-campaigns/",
            "date": "2022-07-19",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Mike Harbison",
            "title": "Russian APT29 Hackers Use Online Storage Services, DropBox and Google Drive",
            "categories": [
                "Cobalt Strike",
                "EnvyScout",
                "Gdrive"
            ]
        },
        {
            "data_url": "https://cert-agid.gov.it/news/il-malware-envyscout-apt29-e-stato-veicolato-anche-in-italia/",
            "date": "2022-07-08",
            "organization": "Cert-AgID",
            "author": "Cert-AgID",
            "title": "Il malware EnvyScout (APT29) \u00e8 stato veicolato anche in Italia",
            "categories": [
                "EnvyScout",
                "Unidentified 098 (APT29 Slack Downloader)"
            ]
        },
        {
            "data_url": "https://blog.bushidotoken.net/2022/06/overview-of-russian-gru-and-svr.html",
            "date": "2022-06-26",
            "organization": "",
            "author": "BushidoToken",
            "title": "Overview of Russian GRU and SVR Cyberespionage Campaigns 1H 2022",
            "categories": [
                "Cobalt Strike",
                "CredoMap",
                "EnvyScout"
            ]
        },
        {
            "data_url": "https://go.recordedfuture.com/hubfs/reports/cta-2022-0503.pdf",
            "date": "2022-05-03",
            "organization": "Recorded Future",
            "author": "Insikt Group\u00ae",
            "title": "SOLARDEFLECTION C2 Infrastructure Used by NOBELIUM in Company Brand Misuse",
            "categories": [
                "Cobalt Strike",
                "EnvyScout"
            ]
        },
        {
            "data_url": "https://www.sekoia.io/en/nobeliums-envyscout-infection-chain-goes-in-the-registry-targeting-embassies/",
            "date": "2022-01-06",
            "organization": "Sekoia",
            "author": "sekoia",
            "title": "NOBELIUM\u2019s EnvyScout infection chain goes in the registry, targeting embassies",
            "categories": [
                "Cobalt Strike",
                "EnvyScout"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "envyscout",
            "procedure_code": "s0634",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0634",
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
                    "procedure_description": "envyscout has been distributed via spearphishing as an email attachment.[88]"
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
                    "procedure_description": "envyscout can use cmd.exe to execute malicious files on compromised hosts.[116]"
                },
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.007",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/007",
                    "technique_name": "command and scripting interpreter : javascript",
                    "technique_description": "adversaries may abuse various implementations of javascript for execution. javascript (js) is a platform-independent scripting language (compiled just-in-time at runtime) commonly associated with scripts in webpages, though js can be executed in runtime environments outside the browser.",
                    "procedure_description": "envyscout can write files to disk with javascript using a modified version of the open-source tool filesaver.[32]"
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
                    "procedure_description": "envyscout has been executed through malicious files attached to e-mails.[45]"
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
                    "procedure_description": "envyscout can deobfuscate and write malicious iso files to disk.[36]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1480",
                    "technique_link": "https://attack.mitre.org/techniques/T1480",
                    "technique_name": "execution guardrails",
                    "technique_description": "adversaries may use execution guardrails to constrain execution or actions based on adversary supplied and environment specific conditions that are expected to be present on the target. guardrails ensure that a payload only executes against an intended target and reduces collateral damage from an adversary\u2019s campaign. values an adversary can provide about a target system or environment to use as guardrails may include specific network share names, attached physical devices, files, joined active directory (ad) domains, and local/external ip addresses.",
                    "procedure_description": "envyscout can call window.location.pathname to ensure that embedded files are being executed from the c: drive, and will terminate if they are not.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/001",
                    "technique_name": "hide artifacts : hidden files and directories",
                    "technique_description": "adversaries may set files and directories to be hidden to evade detection mechanisms. to prevent normal users from accidentally changing special files on a system, most operating systems have the concept of a \u2018hidden\u2019 file. these files don\u2019t show up when a user browses the file system with a gui or when using normal commands on the command line. users must explicitly ask to show the hidden files either via a series of graphical user interface (gui) prompts or with command line switches (dir /a for windows and ls \u2013a for linux and macos).",
                    "procedure_description": "envyscout can use hidden directories and files to hide malicious executables.[18]"
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
                    "procedure_description": "envyscout has used folder icons for malicious files to lure victims into opening them.[6]"
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
                    "procedure_description": "envyscout can base64 encode payloads.[58]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027.006",
                    "technique_link": "https://attack.mitre.org/techniques/T1027/006",
                    "technique_name": "obfuscated files or information : html smuggling",
                    "technique_description": "adversaries may smuggle data and files past content filters by hiding malicious payloads inside of seemingly benign html files. html documents can store large binary objects known as javascript blobs (immutable data that represents raw bytes) that can later be constructed into file-like objects. data may also be stored in data urls, which enable embedding media type or mime files inline of html documents. html5 also introduced a download attribute that may be used to initiate file downloads.",
                    "procedure_description": "envyscout contains javascript code that can extract an encoded blob from its html body and write it to disk.[6]"
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
                    "procedure_description": "envyscout has the ability to proxy execution of malicious files with rundll32.[23]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1187",
                    "technique_link": "https://attack.mitre.org/techniques/T1187",
                    "technique_name": "forced authentication",
                    "technique_description": "adversaries may gather credential material by invoking or forcing a user to automatically provide authentication information through a mechanism in which they can intercept.",
                    "procedure_description": "envyscout can use protocol handlers to coax the operating system to send ntlmv2 authentication responses to attacker-controlled infrastructure.[11]"
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
                    "procedure_description": "envyscout can determine whether the iso payload was received by a windows or ios device.[67]"
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
                    "procedure_description": "envyscout can collect sensitive ntlm material from a compromised host.[64]"
                }
            ]
        }
    ]
};