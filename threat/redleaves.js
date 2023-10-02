var threatdata = {
    "name": "RedLeaves",
    "alias": "RedLeaves, BUGJUICE",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "RedLeaves",
        "names": [
            {
                "name": "RedLeaves"
            },
            {
                "name": "BUGJUICE"
            }
        ],
        "description": "(US-CERT) The REDLEAVES implant consists of three parts: an executable, a loader, and the implant shellcode. The REDLEAVES implant is a remote administration Trojan (RAT) that is built in Visual C++ and makes heavy use of thread generation during its execution. The implant contains a number of functions typical of RATs, including system enumeration and creating a remote shell back to the C2.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA17-117A",
            "http://blog.macnica.net/blog/2017/12/post-8c22.html",
            "https://www.accenture.com/t20180423T055005Z__w__/se-en/_acnmedia/PDF-76/Accenture-Hogfish-Threat-Analysis.pdf",
            "http://blog.jpcert.or.jp/.s/2017/04/redleaves---malware-based-on-open-source-rat.html",
            "https://www.jpcert.or.jp/magazine/acreport-redleaves.html",
            "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-annex-b-final.pdf",
            "http://go.recordedfuture.com/hubfs/reports/cta-2019-0206.pdf",
            "https://github.com/nccgroup/Cyber-Defence/tree/master/Technical%20Notes/Red%20Leaves"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0153/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.redleaves"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:redleaves"
        ],
        "uuid": "30de5fb0-f7b6-4795-9732-e90515d91451",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RedLeaves",
            "malware_alias": "BUGJUICE",
            "malware": "win.redleaves",
            "last_update": "2022-03-03 10:38:51",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "2b7e4e5758699f924f50615e8fe48e13bf428d7aa1fcbfb2ed4f64a0fd6a8f93",
                        "timestamp": "2022-03-03 10:38:51"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-03-03 10:38:51",
    "file_name": "redleaves",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-riverside",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE RIVERSIDE",
            "categories": [
                "Anel",
                "ChChes",
                "Cobalt Strike",
                "PlugX",
                "Poison Ivy",
                "Quasar RAT",
                "RedLeaves",
                "APT10"
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
            "data_url": "http://go.recordedfuture.com/hubfs/reports/cta-2019-0206.pdf",
            "date": "2019-02-06",
            "organization": "Recorded Future",
            "author": "Insikt Group",
            "title": "APT10 Targeted NorwegianMSP and US Companies in Sustained Campaign",
            "categories": [
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://www.cyber.gov.au/sites/default/files/2019-03/msp_investigation_report.pdf",
            "date": "2018-12-14",
            "organization": "Australian Cyber Security Centre",
            "author": "ASD",
            "title": "Investigationreport: Compromise of an Australian companyvia their Managed Service Provider",
            "categories": [
                "PlugX",
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://www.macnica.net/file/mpressioncss_2018-1h-report_mnc_rev3_nopw.pdf",
            "date": "2018-10-01",
            "organization": "Macnica Networks",
            "author": "Macnica Networks",
            "title": "Trends in cyber espionage (targeted attacks) targeting Japan | First half of 2018",
            "categories": [
                "Anel",
                "Cobalt Strike",
                "Datper",
                "FlawedAmmyy",
                "Quasar RAT",
                "RedLeaves",
                "taidoor",
                "Winnti",
                "xxmm"
            ]
        },
        {
            "data_url": "https://www.accenture.com/t20180423T055005Z__w__/se-en/_acnmedia/PDF-76/Accenture-Hogfish-Threat-Analysis.pdf",
            "date": "2018-04-23",
            "organization": "Accenture Security",
            "author": "Bart Parys",
            "title": "HOGFISH REDLEAVES CAMPAIGN: HOGFISH (APT10) targets Japan with RedLeaves implants in \u201cnew battle\u201d",
            "categories": [
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://www.accenture.com/t20180423T055005Z_w_/se-en/_acnmedia/PDF-76/Accenture-Hogfish-Threat-Analysis.pdf",
            "date": "2018-04-23",
            "organization": "Accenture Security",
            "author": "Bart Parys",
            "title": "HOGFISH REDLEAVES CAMPAIGN: HOGFISH (APT10) targets Japan with RedLeaves implants in \u201cnew battle\u201d",
            "categories": [
                "RedLeaves",
                "APT10"
            ]
        },
        {
            "data_url": "http://blog.macnica.net/blog/2017/12/post-8c22.html",
            "date": "2017-12-04",
            "organization": "Macnica",
            "author": "Macnica",
            "title": "New method of macro malware disguised as defense-related files",
            "categories": [
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/2017/05/09/carbon-black-threat-research-dissects-red-leaves-malware-leverages-dll-side-loading/",
            "date": "2017-05-09",
            "organization": "VMWare Carbon Black",
            "author": "Jared Myers",
            "title": "Carbon Black Threat Research Dissects Red Leaves Malware, Which Leverages DLL Side Loading",
            "categories": [
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://community.rsa.com/community/products/netwitness/blog/2017/05/03/hunting-pack-use-case-redleaves-malware",
            "date": "2017-05-03",
            "organization": "RSA Link",
            "author": "Ahmed Sonbol",
            "title": "Hunting pack use case: RedLeaves malware",
            "categories": [
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://www.us-cert.gov/ncas/alerts/TA17-117A",
            "date": "2017-04-27",
            "organization": "US-CERT",
            "author": "US-CERT",
            "title": "Alert (TA17-117A): Intrusions Affecting Multiple Victims Across Multiple Sectors",
            "categories": [
                "PlugX",
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://blogs.jpcert.or.jp/en/2017/04/redleaves---malware-based-on-open-source-rat.html",
            "date": "2017-04-03",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "RedLeaves - Malware Based on Open Source RAT",
            "categories": [
                "PlugX",
                "RedLeaves",
                "Trochilus RAT"
            ]
        },
        {
            "data_url": "https://www.jpcert.or.jp/magazine/acreport-redleaves.html",
            "date": "2017-04-03",
            "organization": "JPCERT/CC",
            "author": "Shusei Tomonaga",
            "title": "\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eRAT\u3092\u6539\u826f\u3057\u305f\u30de\u30eb\u30a6\u30a8\u30a2RedLeaves",
            "categories": [
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://github.com/nccgroup/Cyber-Defence/tree/master/Technical%20Notes/Red%20Leaves",
            "date": "2017-04-03",
            "organization": "Github (nccgroup)",
            "author": "David Cannings",
            "title": "Technical Notes on RedLeaves",
            "categories": [
                "RedLeaves"
            ]
        },
        {
            "data_url": "https://www.pwc.co.uk/cyber-security/pdf/cloud-hopper-annex-b-final.pdf",
            "date": "2017-04",
            "organization": "PricewaterhouseCoopers",
            "author": "PricewaterhouseCoopers",
            "title": "Operation Cloud Hopper: Technical Annex",
            "categories": [
                "ChChes",
                "PlugX",
                "Quasar RAT",
                "RedLeaves",
                "Trochilus RAT"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "redleaves",
            "procedure_code": "s0153",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0153",
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
                    "procedure_description": "redleaves can receive and execute commands with cmd.exe. it can also provide a reverse shell.[212][278]"
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
                    "procedure_description": "redleaves attempts to add a shortcut file in the startup folder to achieve persistence. if this fails, it attempts to add registry run keys.[56][220]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "redleaves attempts to add a shortcut file in the startup folder to achieve persistence.[27][28]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "redleaves is launched through use of dll search order hijacking to load a malicious dll.[33]"
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
                    "procedure_description": "redleaves attempts to add a shortcut file in the startup folder to achieve persistence. if this fails, it attempts to add registry run keys.[56][220]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1547.009",
                    "technique_link": "https://attack.mitre.org/techniques/T1547/009",
                    "technique_name": "boot or logon autostart execution : shortcut modification",
                    "technique_description": "adversaries may create or modify shortcuts that can execute a program during system boot or user login. shortcuts or symbolic links are used to reference other files or programs that will be opened or executed when the shortcut is clicked or executed by a system startup process.",
                    "procedure_description": "redleaves attempts to add a shortcut file in the startup folder to achieve persistence.[27][28]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "redleaves is launched through use of dll search order hijacking to load a malicious dll.[33]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1574.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1574/001",
                    "technique_name": "hijack execution flow : dll search order hijacking",
                    "technique_description": "adversaries may execute their own malicious payloads by hijacking the search order used to load dlls. windows systems use a common method to look for required dlls to load into a program.  hijacking dll loads may be for the purpose of establishing persistence as well as elevating privileges and/or evading restrictions on file execution.",
                    "procedure_description": "redleaves is launched through use of dll search order hijacking to load a malicious dll.[33]"
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
                    "procedure_description": "redleaves can delete specified files.[197]"
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
                    "procedure_description": "a redleaves configuration file is encrypted with a simple xor key, 0x53.[268]"
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
                    "procedure_description": "redleaves can gather browser usernames and passwords.[78]"
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
                    "procedure_description": "redleaves can enumerate and search for files and directories.[246][72]"
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
                    "procedure_description": "redleaves can gather extended system information including the hostname, os version number, platform, memory information, time elapsed since system startup, and cpu information.[87][300]"
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
                    "procedure_description": "redleaves can obtain information about network parameters.[141]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1049",
                    "technique_link": "https://attack.mitre.org/techniques/T1049",
                    "technique_name": "system network connections discovery",
                    "technique_description": "adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.",
                    "procedure_description": "redleaves can enumerate drives and remote desktop sessions.[73]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1033",
                    "technique_link": "https://attack.mitre.org/techniques/T1033",
                    "technique_name": "system owner/user discovery",
                    "technique_description": "adversaries may attempt to identify the primary user, currently logged in user, set of users that commonly uses a system, or whether a user is actively using the system. they may do this, for example, by retrieving account usernames or by using os credential dumping. the information may be collected in a number of different ways using other discovery techniques, because user and username details are prevalent throughout a system and include running process ownership, file/directory ownership, session information, and system logs. adversaries may use the information from system owner/user discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "redleaves can obtain information about the logged on user both locally and for remote desktop sessions.[155]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1113",
                    "technique_link": "https://attack.mitre.org/techniques/T1113",
                    "technique_name": "screen capture",
                    "technique_description": "adversaries may attempt to take screen captures of the desktop to gather information over the course of an operation. screen capturing functionality may be included as a feature of a remote access tool used in post-compromise operations. taking a screenshot is also typically possible through native utilities or api calls, such as copyfromscreen, xwd, or screencapture.",
                    "procedure_description": "redleaves can capture screenshots.[137][138]"
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
                    "procedure_description": "redleaves can communicate to its c2 over http and https if directed.[273][274]"
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
                    "procedure_description": "redleaves has encrypted c2 traffic with rc4, previously using keys of 88888888 and babybear.[115]"
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
                    "procedure_description": "redleaves is capable of downloading a file from a specified url.[376]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1571",
                    "technique_link": "https://attack.mitre.org/techniques/T1571",
                    "technique_name": "non-standard port",
                    "technique_description": "adversaries may communicate using a protocol and port pairing that are typically not associated. for example, https over port 8088 or port 587 as opposed to the traditional port 443. adversaries may make changes to the standard port used by a protocol to bypass filtering or muddle analysis/parsing of network data.",
                    "procedure_description": "redleaves can use http over non-standard ports, such as 995, for c2.[31]"
                }
            ]
        }
    ]
};