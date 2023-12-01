var threatdata = {
    "name": "BlackNET RAT",
    "alias": "BlackNET RAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-02-17",
    "all_data": {
        "tool": "BlackNET RAT",
        "names": [
            {
                "name": "BlackNET RAT"
            }
        ],
        "description": "(Malpedia) Advanced and modern Windows botnet with PHP panel developed using VB.NET. It has a lot of functionalities including: stealing/grabbing files and passwords, keylogging, cryptojacking, loading files, executing commands, etc. It is open source and emerged at the end of 2019.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blacknet_rat",
            "https://labs.k7computing.com/index.php/dark-side-of-blacknet-rat/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blacknet_rat"
        ],
        "uuid": "12b565ab-4c7d-4bdf-9fce-a0e7d1b32ca3",
        "last-card-change": "2023-02-17",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "BlackNET RAT",
            "malware_alias": null,
            "malware": "win.blacknet_rat",
            "last_update": "2023-12-01 17:36:04",
            "tags": [
                "blacknet",
                "censys",
                "ViriBack",
                "KAMATERA",
                "247RACK",
                "panel",
                "RAT",
                "HETZNER-AS",
                "BlackNET",
                "C2",
                "AS-REG",
                "GO-DADDY-COM-LLC",
                "BlackNet",
                "ORACLE-BMC-31898",
                "MICROSOFT-CORP-MSN-AS-BLOCK",
                "rat",
                "LABIXE"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "freepalestine.top",
                        "timestamp": "2023-12-01 17:36:04"
                    },
                    {
                        "value": "ts.bagelswap.site",
                        "timestamp": "2023-11-05 15:00:09"
                    },
                    {
                        "value": "www.ts.bagelswap.site",
                        "timestamp": "2023-11-04 17:24:14"
                    },
                    {
                        "value": "www.auth08-verify3.dynamic-dns.net",
                        "timestamp": "2023-10-17 19:21:02"
                    },
                    {
                        "value": "auth08-verify3.dynamic-dns.net",
                        "timestamp": "2023-10-17 19:21:01"
                    },
                    {
                        "value": "p.kcchann.com",
                        "timestamp": "2023-10-17 19:21:00"
                    },
                    {
                        "value": "bot.gsmgit.com",
                        "timestamp": "2023-10-17 19:21:00"
                    },
                    {
                        "value": "whywishyouweredead.us",
                        "timestamp": "2023-10-17 19:21:00"
                    },
                    {
                        "value": "crypromo.com",
                        "timestamp": "2023-09-25 23:48:14"
                    },
                    {
                        "value": "maddoxdevelopment.online",
                        "timestamp": "2023-09-25 23:48:14"
                    },
                    {
                        "value": "pako.saturncnc.tk",
                        "timestamp": "2023-03-18 23:48:20"
                    },
                    {
                        "value": "qube.host",
                        "timestamp": "2021-12-31 06:32:47"
                    }
                ],
                "ip:port": [
                    {
                        "value": "20.163.158.142:443",
                        "timestamp": "2023-11-06 18:07:09"
                    },
                    {
                        "value": "20.163.158.142:80",
                        "timestamp": "2023-11-06 18:07:08"
                    },
                    {
                        "value": "2.57.19.173:443",
                        "timestamp": "2023-10-17 19:21:02"
                    },
                    {
                        "value": "2.57.19.173:80",
                        "timestamp": "2023-10-17 19:21:01"
                    },
                    {
                        "value": "103.90.161.122:80",
                        "timestamp": "2023-10-17 19:20:59"
                    },
                    {
                        "value": "103.90.161.122:443",
                        "timestamp": "2023-10-17 19:20:59"
                    },
                    {
                        "value": "146.19.191.190:80",
                        "timestamp": "2023-05-15 23:48:14"
                    },
                    {
                        "value": "80.85.157.98:80",
                        "timestamp": "2023-01-28 23:48:35"
                    },
                    {
                        "value": "45.133.1.98:80",
                        "timestamp": "2021-03-25 15:16:44"
                    }
                ],
                "url": [
                    {
                        "value": "http://clearmu.top/blacknet/receive.php",
                        "timestamp": "2023-10-15 09:15:22"
                    },
                    {
                        "value": "http://f0575824.xsph.ru/blacknet/receive.php",
                        "timestamp": "2023-06-18 07:31:28"
                    },
                    {
                        "value": "http://bankslip.info/dadsroots//receive.php",
                        "timestamp": "2023-05-25 10:10:12"
                    },
                    {
                        "value": "http://bankslip.info/nash//receive.php",
                        "timestamp": "2023-05-25 03:50:14"
                    },
                    {
                        "value": "http://cofix.best//receive.php",
                        "timestamp": "2023-03-24 15:20:32"
                    },
                    {
                        "value": "http://ecrew.sytes.net//receive.php",
                        "timestamp": "2023-02-07 02:30:37"
                    },
                    {
                        "value": "http://18.117.193.148//receive.php",
                        "timestamp": "2023-01-23 15:10:30"
                    },
                    {
                        "value": "http://74.208.16.112/net/receive.php",
                        "timestamp": "2022-12-30 15:15:22"
                    },
                    {
                        "value": "http://zee.zight.ru/receive.php",
                        "timestamp": "2022-11-16 03:15:17"
                    },
                    {
                        "value": "http://noctorships.ga/BlackNET/Panel//receive.php",
                        "timestamp": "2022-11-12 12:30:30"
                    },
                    {
                        "value": "http://zenginlerclubmuck.xyz/blacknet/receive.php",
                        "timestamp": "2022-10-03 16:16:18"
                    },
                    {
                        "value": "http://91.134.238.134:8010/receive.php",
                        "timestamp": "2022-08-14 06:00:25"
                    },
                    {
                        "value": "http://valsinki.xyz/blacknet/receive.php",
                        "timestamp": "2022-08-07 18:35:33"
                    },
                    {
                        "value": "http://finalb.xyz/NiggaNet/receive.php",
                        "timestamp": "2022-03-16 18:10:56"
                    },
                    {
                        "value": "http://finalb.xyz/NiggaNet",
                        "timestamp": "2022-03-16 17:48:56"
                    },
                    {
                        "value": "http://23c1-128-199-237-110.ngrok.io/Bot-Net/BlackNET/Panel/receive.php",
                        "timestamp": "2022-02-26 00:40:37"
                    },
                    {
                        "value": "http://theblogreader-blog.wtf/panel//receive.php",
                        "timestamp": "2022-02-21 21:20:44"
                    },
                    {
                        "value": "http://hksec.hk/wp-admin/html//receive.php",
                        "timestamp": "2021-11-27 02:47:20"
                    },
                    {
                        "value": "http://gpay-safe.ru/x//receive.php",
                        "timestamp": "2021-08-24 22:41:59"
                    },
                    {
                        "value": "http://officialcomerce1.xyz/lee/receive.php",
                        "timestamp": "2021-08-13 18:03:13"
                    },
                    {
                        "value": "http://furyx.de/panel/receive.php",
                        "timestamp": "2021-08-01 01:25:42"
                    },
                    {
                        "value": "http://100.26.17.80/receive.php",
                        "timestamp": "2021-07-30 22:06:27"
                    },
                    {
                        "value": "http://54.237.66.139/receive.php",
                        "timestamp": "2021-07-22 07:00:51"
                    },
                    {
                        "value": "http://185.212.44.211/receive.php",
                        "timestamp": "2021-06-27 14:05:33"
                    },
                    {
                        "value": "http://weboss.in/blacknet/receive.php",
                        "timestamp": "2021-06-18 00:41:00"
                    },
                    {
                        "value": "http://monomolecular-tone.000webhostapp.com/receive.php",
                        "timestamp": "2021-06-14 19:51:46"
                    },
                    {
                        "value": "http://34.227.13.244/receive.php",
                        "timestamp": "2021-06-13 13:25:29"
                    },
                    {
                        "value": "http://45.130.138.51//receive.php",
                        "timestamp": "2021-05-29 12:10:28"
                    },
                    {
                        "value": "http://ytgyuityuity.ru//uJKGWJTjXBP2/receive.php",
                        "timestamp": "2021-05-23 21:20:45"
                    },
                    {
                        "value": "http://a0541862.xsph.ru//receive.php",
                        "timestamp": "2021-05-18 08:50:15"
                    },
                    {
                        "value": "http://142.202.136.146/NET/receive.php",
                        "timestamp": "2021-05-09 10:25:39"
                    },
                    {
                        "value": "http://chomotrov.rf.gd/receive.php",
                        "timestamp": "2021-04-24 22:55:13"
                    },
                    {
                        "value": "http://www.rtmmodz.a2hosted.com//receive.php",
                        "timestamp": "2021-04-21 21:36:11"
                    },
                    {
                        "value": "http://micros0ftcenter.xyz/uJKGWJTjXBP2//receive.php",
                        "timestamp": "2021-04-16 22:25:25"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "a94970a63494de9eecb666dd6a91b43d",
                        "timestamp": "2021-06-29 03:15:14"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "94bcc274b54ed4fd6f9d0b3b6e07225d63e058f2961fffc225cc144b68bc0188",
                        "timestamp": "2021-05-18 09:00:25"
                    },
                    {
                        "value": "55ff1e0a4e5866d565ceeb9baafac73fdcb4464160fc6c78104d935009935cd7",
                        "timestamp": "2021-05-18 09:00:25"
                    },
                    {
                        "value": "af4586015e689d670854702df4aa5748eb90da472dc6c479f065bfb49e624d0c",
                        "timestamp": "2021-05-18 09:00:25"
                    },
                    {
                        "value": "150a0f0a59a04f7023a5f7e8c1739949b1cd40d15550fdbc58f7616af24e2a30",
                        "timestamp": "2021-05-18 09:00:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-12-01 17:36:04",
    "file_name": "blacknet_rat",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.minerva-labs.com/become-a-vip-victim-with-new-discord-distributed-malware",
            "date": "2021-08-26",
            "organization": "Minerva Labs",
            "author": "Minerva Labs",
            "title": "Become A VIP Victim With New Discord Distributed Malware",
            "categories": [
                "BlackNET RAT",
                "RedLine Stealer"
            ]
        },
        {
            "data_url": "https://github.com/mave12/BlackNET-3.7.0.1",
            "date": "2021-01-13",
            "organization": "Github (Mave12)",
            "author": "Mave12",
            "title": "Github Repository: BlackNET 3.7.0.1",
            "categories": [
                "BlackNET RAT"
            ]
        },
        {
            "data_url": "https://labs.k7computing.com/?p=21365",
            "date": "2020-12-24",
            "organization": "K7 Security",
            "author": "K7 Labs",
            "title": "Dark Side Of BlackNET RAT",
            "categories": [
                "BlackNET RAT"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2020/03/fake-corona-antivirus-distributes-blacknet-remote-administration-tool/",
            "date": "2020-03-23",
            "organization": "Malwarebytes",
            "author": "Threat Intelligence Team",
            "title": "Fake \u201cCorona Antivirus\u201d distributes BlackNET remote administration tool",
            "categories": [
                "BlackNET RAT"
            ]
        },
        {
            "data_url": "http://www.pwncode.io/2019/12/blacknet-rat-when-you-leave-panel.html",
            "date": "2019-12-25",
            "organization": "pwncode.io blog",
            "author": "c0d3inj3cT",
            "title": "BlackNet RAT - When you leave the Panel unprotected",
            "categories": [
                "BlackNET RAT"
            ]
        },
        {
            "data_url": "https://github.com/FarisCode511/BlackNET/",
            "date": "2019-01-04",
            "organization": "Github (BlackHacker511)",
            "author": "BlackHacker511",
            "title": "Github Repository: BlackNET",
            "categories": [
                "BlackNET RAT"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "at",
            "procedure_code": "s0110",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0110",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                },
                {
                    "tactic_code": "ta0004",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0004",
                    "tactic_name": "privilege escalation",
                    "tactic_alias": "privilege_escalation",
                    "tactic_description": "The adversary is trying to gain higher-level permissions.",
                    "technique_code": "t1053.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1053/002",
                    "technique_name": "scheduled task/job : at",
                    "technique_description": "adversaries may abuse the at utility to perform task scheduling for initial or recurring execution of malicious code. the at utility exists as an executable within windows, linux, and macos for scheduling tasks at a specified time and date. although deprecated in favor of scheduled task's schtasks in windows environments, using at requires that the task scheduler service be running, and the user to be logged on as a member of the local administrators group.",
                    "procedure_description": "at can be used to schedule a task on a system to be executed at a specific date or time.[4][1]"
                }
            ]
        },
        {
            "procedure_name": "net",
            "procedure_code": "s0039",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0039",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1569.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1569/002",
                    "technique_name": "system services : service execution",
                    "technique_description": "adversaries may abuse the windows service control manager to execute malicious commands or payloads. the windows service control manager (services.exe) is an interface to manage and manipulate services. the service control manager is accessible to users via gui components as well as system utilities such as sc.exe and net.",
                    "procedure_description": "the net start and net stop commands can be used in net to execute or stop windows services.[36]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/001",
                    "technique_name": "create account : local account",
                    "technique_description": "adversaries may create a local account to maintain access to victim systems. local accounts are those configured by an organization for use by users, remote support, services, or for administration on a single system or service. with a sufficient level of access, the net user /add command can be used to create a local account. on macos systems the dscl -create command can be used to create a local account. local accounts may also be added to network devices, often via common network device cli commands such as username.",
                    "procedure_description": "the net user username \\password commands in net can be used to create a local account.[20]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1136.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1136/002",
                    "technique_name": "create account : domain account",
                    "technique_description": "adversaries may create a domain account to maintain access to victim systems. domain accounts are those managed by active directory domain services where access and permissions are configured across systems and services that are part of that domain. domain accounts can cover user, administrator, and service accounts. with a sufficient level of access, the net user /add /domain command can be used to create a domain account.",
                    "procedure_description": "the net user username \\password \\domain commands in net can be used to create a domain account.[6]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/005",
                    "technique_name": "indicator removal : network share connection removal",
                    "technique_description": "adversaries may remove share connections that are no longer useful in order to clean up traces of their operation. windows shared drive and smb/windows admin shares connections can be removed when no longer needed. net is an example utility that can be used to remove network share connections with the net use \\system\\share /delete command.",
                    "procedure_description": "the net use \\system\\share /delete command can be used in net to remove an established connection to a network share.[1]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1087.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1087/001",
                    "technique_name": "account discovery : local account",
                    "technique_description": "adversaries may attempt to get a listing of local system accounts. this information can help adversaries determine which local accounts exist on a system to aid in follow-on behavior.",
                    "procedure_description": "commands under net user can be used in net to gather information about and manipulate user accounts.[27]"
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
                    "procedure_description": "net commands used with the /domain flag can be used to gather information about and manipulate user accounts on the current domain.[32]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1135",
                    "technique_link": "https://attack.mitre.org/techniques/T1135",
                    "technique_name": "network share discovery",
                    "technique_description": "adversaries may look for folders and drives shared on remote systems as a means of identifying sources of information to gather as a precursor for collection and to identify potential systems of interest for lateral movement. networks often contain shared network drives and folders that enable users to access file directories on various systems across a network.",
                    "procedure_description": "the net view \\remotesystem and net share commands in net can be used to find shared drives and directories on remote and local systems respectively.[38]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1201",
                    "technique_link": "https://attack.mitre.org/techniques/T1201",
                    "technique_name": "password policy discovery",
                    "technique_description": "adversaries may attempt to access detailed information about the password policy used within an enterprise network or cloud environment. password policies are a way to enforce complex passwords that are difficult to guess or crack through brute force. this information may help the adversary to create a list of common passwords and launch dictionary and/or brute force attacks which adheres to the policy (e.g. if the minimum password length should be 8, then not trying passwords such as 'pass123'; not checking for more than 3-4 passwords per account if the lockout is set to 6 as to not lock out accounts).",
                    "procedure_description": "the net accounts and net accounts /domain commands with net can be used to obtain password policy information.[9]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/001",
                    "technique_name": "permission groups discovery : local groups",
                    "technique_description": "adversaries may attempt to find local system groups and permission settings. the knowledge of local system permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as the users found within the local administrators group.",
                    "procedure_description": "commands such as net group and net localgroup can be used in net to gather information about and manipulate groups.[17]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1069.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1069/002",
                    "technique_name": "permission groups discovery : domain groups",
                    "technique_description": "adversaries may attempt to find domain-level groups and permission settings. the knowledge of domain-level permission groups can help adversaries determine which groups exist and which users belong to a particular group. adversaries may use this information to determine which users have elevated permissions, such as domain administrators.",
                    "procedure_description": "commands such as net group /domain can be used in net to gather information about and manipulate groups.[21]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1018",
                    "technique_link": "https://attack.mitre.org/techniques/T1018",
                    "technique_name": "remote system discovery",
                    "technique_description": "adversaries may attempt to get a listing of other systems by ip address, hostname, or other logical identifier on a network that may be used for lateral movement from the current system. functionality could exist within remote access tools to enable this, but utilities available on the operating system could also be used such as  ping or net view using net.",
                    "procedure_description": "commands such as net view can be used in net to gather information about available remote systems.[62]"
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
                    "procedure_description": "commands such as net use and net session can be used in net to gather information about network connections from a particular host.[56]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1007",
                    "technique_link": "https://attack.mitre.org/techniques/T1007",
                    "technique_name": "system service discovery",
                    "technique_description": "adversaries may try to gather information about registered local system services. adversaries may obtain information about services using tools as well as os utility commands such as sc query, tasklist /svc, systemctl --type=service, and net start.",
                    "procedure_description": "the net start command can be used in net to find information about windows services.[37]"
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
                    "procedure_description": "the net time command can be used in net to determine the local or remote system time.[52]"
                },
                {
                    "tactic_code": "ta0008",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0008",
                    "tactic_name": "lateral movement",
                    "tactic_alias": "lateral_movement",
                    "tactic_description": "The adversary is trying to move through your environment.",
                    "technique_code": "t1021.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1021/002",
                    "technique_name": "remote services : smb/windows admin shares",
                    "technique_description": "adversaries may use valid accounts to interact with a remote network share using server message block (smb). the adversary may then perform actions as the logged-on user.",
                    "procedure_description": "lateral movement can be done with net through net use commands to connect to the on remote systems.[37]"
                }
            ]
        }
    ]
};