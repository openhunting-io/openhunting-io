var threatdata = {
    "name": "PhantomNet",
    "alias": "PhantomNet, SManager",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Loader",
    "modified": "2023-10-03",
    "all_data": {
        "tool": "PhantomNet",
        "names": [
            {
                "name": "PhantomNet"
            },
            {
                "name": "SManager"
            }
        ],
        "description": "(ESET) The backdoor was named Smanager_ssl.DLL by its developers but we use PhantomNet, as that was the project name used in an older version of this backdoor. This most recent version was compiled on the 26th of April 2020, almost two months before the supply-chain attack. In addition to Vietnam, we have seen victims in the Philippines, but unfortunately we did not uncover the delivery mechanism in those cases.\nThis backdoor is quite simple and most of the malicious capabilities are likely deployed through additional plugins. It can retrieve the victim\u2019s proxy configuration and use it to reach out to the command and control (C&C) server. This shows that the targets are likely to be working in a corporate network.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://www.welivesecurity.com/2020/12/17/operation-signsight-supply-chain-attack-southeast-asia/",
            "https://insight-jp.nttsecurity.com/post/102glv5/pandas-new-arsenal-part-3-smanager",
            "https://0xthreatintel.medium.com/reversing-apt-tool-smanager-unpacked-d413a04961c4",
            "https://0xthreatintel.medium.com/how-to-unpack-smanager-apt-tool-cb5909819214"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.smanager"
        ],
        "uuid": "41b6f923-e7a8-4e88-bbea-1894be386ed4",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "SManager",
            "malware_alias": "PhantomNet",
            "malware": "win.smanager",
            "last_update": "2022-07-13 06:36:14",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "840c2aa0d5e5217bc73e2607a74ec2f979c76f77cae2a70dd9d87ad49adda922",
                        "timestamp": "2022-07-13 06:36:14"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-13 06:36:14",
    "file_name": "phantomnet",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.elastic.co/security-labs/introducing-the-ref5961-intrusion-set",
            "date": "2023-10-03",
            "organization": "Elastic",
            "author": "Daniel Stepanic",
            "title": "Introducing the REF5961 intrusion set (RUDEBIRD, DOWNTOWN, and EAGERBEE)",
            "categories": [
                "EagerBee",
                "SManager",
                "REF2924",
                "REF5961"
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
            "data_url": "https://blog.group-ib.com/task",
            "date": "2021-08-03",
            "organization": "Group-IB",
            "author": "Anastasia Tikhonova",
            "title": "The Art of Cyberwarfare Chinese APTs attack Russia",
            "categories": [
                "Albaniiutas",
                "Mail-O",
                "SManager",
                "TA428"
            ]
        },
        {
            "data_url": "https://labs.sentinelone.com/thundercats-hack-the-fsb-your-taxes-didnt-pay-for-this-op/",
            "date": "2021-06-08",
            "organization": "SentinelOne",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "ThunderCats Hack the FSB | Your Taxes Didn\u2019t Pay For This Op",
            "categories": [
                "Mail-O",
                "SManager",
                "Tmanger"
            ]
        },
        {
            "data_url": "https://0xthreatintel.medium.com/how-to-unpack-smanager-apt-tool-cb5909819214",
            "date": "2021-02-19",
            "organization": "Medium 0xthreatintel",
            "author": "0xthreatintel",
            "title": "How to unpack SManager APT tool?",
            "categories": [
                "SManager"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2021/02/re020-elephantrat-kunming-version-our-latest-discovered-RAT-of-Panda.html",
            "date": "2021-02-17",
            "organization": "VinCSS",
            "author": "Tr\u01b0\u01a1ng Qu\u1ed1c Ng\u00e2n",
            "title": "[RE020] ElephantRAT (Kunming version): our latest discovered RAT of Panda and the similarities with recently Smanager RAT",
            "categories": [
                "SManager"
            ]
        },
        {
            "data_url": "https://0xthreatintel.medium.com/reversing-apt-tool-smanager-unpacked-d413a04961c4",
            "date": "2021-01-26",
            "organization": "Medium 0xthreatintel",
            "author": "0xthreatintel",
            "title": "Reversing APT Tool : SManager (Unpacked)",
            "categories": [
                "SManager"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2020/12/re018-2-analyzing-new-malware-of-china-panda-hacker-group-used-to-attack-supply-chain-against-vietnam-government-certification-authority.html?m=1",
            "date": "2020-12-25",
            "organization": "VinCSS",
            "author": "Tr\u01b0\u01a1ng Qu\u1ed1c Ng\u00e2n",
            "title": "[RE018-2] Analyzing new malware of China Panda hacker group used to attack supply chain against Vietnam Government Certification Authority - Part 2",
            "categories": [
                "SManager"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2020/12/re018-1-analyzing-new-malware-of-china-panda-hacker-group-used-to-attack-supply-chain-against-vietnam-government-certification-authority.html",
            "date": "2020-12-19",
            "organization": "VinCSS",
            "author": "Tr\u01b0\u01a1ng Qu\u1ed1c Ng\u00e2n",
            "title": "[RE018-1] Analyzing new malware of China Panda hacker group used to attack supply chain against Vietnam Government Certification Authority - Part 1",
            "categories": [
                "SManager"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2020/12/re017-2-phan-tich-ky-thuat-dong-ma-doc-moi-co-nhieu-dau-hieu-lien-quan-toi-nhom-tin-tac-Panda.html",
            "date": "2020-12-19",
            "organization": "VinCSS",
            "author": "Tr\u01b0\u01a1ng Qu\u1ed1c Ng\u00e2n",
            "title": "[RE017-2] Ph\u00e2n t\u00edch k\u1ef9 thu\u1eadt d\u00f2ng m\u00e3 \u0111\u1ed9c m\u1edbi \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea5n c\u00f4ng chu\u1ed7i cung \u1ee9ng nh\u1eafm v\u00e0o Ban C\u01a1 y\u1ebfu Ch\u00ednh ph\u1ee7 Vi\u1ec7t Nam c\u1ee7a nh\u00f3m tin t\u1eb7c Panda Trung Qu\u1ed1c (Ph\u1ea7n 2)",
            "categories": [
                "SManager"
            ]
        },
        {
            "data_url": "https://blog.vincss.net/2020/12/phan-tich-ky-thuat-dong-ma-doc-moi-co-nhieu-dau-hieu-lien-quan-toi-nhom-tin-tac-Panda.html",
            "date": "2020-12-17",
            "organization": "VinCSS",
            "author": "VinCSS",
            "title": "[RE017-1] Ph\u00e2n t\u00edch k\u1ef9 thu\u1eadt d\u00f2ng m\u00e3 \u0111\u1ed9c m\u1edbi \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ea5n c\u00f4ng chu\u1ed7i cung \u1ee9ng nh\u1eafm v\u00e0o Ban C\u01a1 y\u1ebfu Ch\u00ednh ph\u1ee7 Vi\u1ec7t Nam c\u1ee7a nh\u00f3m tin t\u1eb7c Panda Trung Qu\u1ed1c (Ph\u1ea7n 1)",
            "categories": [
                "SManager"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2020/12/17/operation-signsight-supply-chain-attack-southeast-asia/",
            "date": "2020-12-17",
            "organization": "ESET Research",
            "author": "Ignacio Sanmillan",
            "title": "Operation SignSight: Supply\u2011chain attack against a certification authority in Southeast Asia",
            "categories": [
                "SManager"
            ]
        },
        {
            "data_url": "https://insight-jp.nttsecurity.com/post/102glv5/pandas-new-arsenal-part-3-smanager",
            "date": "2020-12-11",
            "organization": "NTT Security",
            "author": "Hiroki Hada",
            "title": "Panda\u2019s New Arsenal: Part 3 Smanager",
            "categories": [
                "FunnyDream",
                "SManager",
                "Tmanger"
            ]
        }
    ],
    "mitre": [
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