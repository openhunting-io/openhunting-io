var threatdata = {
    "name": "LoJax",
    "alias": "LoJax",
    "category": "Malware",
    "type": "Backdoor, Rootkit",
    "modified": "2022-05-27",
    "all_data": {
        "tool": "LoJax",
        "names": [
            {
                "name": "LoJax"
            }
        ],
        "description": "(ESET) Starting in at least early 2017, trojanized versions of an older userland agent of the popular LoJack anti-theft software from Absolute Software were found in the wild. We call this trojanized LoJack agent LoJax. LoJack attracted a lot of attention in recent years as it implements a UEFI/BIOS module as a persistence mechanism.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Rootkit"
        ],
        "information": [
            "https://www.welivesecurity.com/wp-content/uploads/2018/09/ESET-LoJax.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0397/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.lojax"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:lojax"
        ],
        "uuid": "67150a90-c0c3-47d3-bbb3-952f6d0a1499",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lojax",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://habr.com/ru/amp/post/668154/",
            "date": "2022-05-27",
            "organization": "PTSecurity",
            "author": "Anton Belousov",
            "title": "How bootkits are implemented in modern firmware and how UEFI differs from Legacy BIOS",
            "categories": [
                "LoJax",
                "MoonBounce"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/01/11/signed-kernel-drivers-unguarded-gateway-windows-core/",
            "date": "2022-01-11",
            "organization": "ESET Research",
            "author": "Michal Poslu\u0161n\u00fd",
            "title": "Signed kernel drivers \u2013 Unguarded gateway to Windows\u2019 core",
            "categories": [
                "InvisiMole",
                "LoJax",
                "RobinHood",
                "Slingshot"
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
            "data_url": "https://www.youtube.com/watch?v=VeoXT0nEcFU",
            "date": "2018-11-05",
            "organization": "Youtube (MSRC)",
            "author": "Jean-Ian Boutin",
            "title": "BlueHat v18 || First STRONTIUM UEFI Rootkit Unveiled",
            "categories": [
                "LoJax"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/election-security/apt28-espionage-military-government",
            "date": "2018-10-04",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "APT28: New Espionage Operations Target Military and Government Organizations",
            "categories": [
                "LoJax",
                "Seduploader",
                "X-Agent",
                "XTunnel",
                "Zebrocy",
                "APT28"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2018/09/ESET-LoJax.pdf",
            "date": "2018-09",
            "organization": "",
            "author": "ESET Research",
            "title": "LoJax: First UEFI rootkit found in the wild, courtesy of the Sednit group",
            "categories": [
                "LoJax"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "lojax",
            "procedure_code": "s0397",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0397",
            "techniques": [
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
                    "procedure_description": "lojax has modified the registry key \u2018hkey_local_machine\\system\\currentcontrolset\\control\\session manager\\bootexecute\u2019 from \u2018autocheck autochk \u2019 to \u2018autocheck autoche \u2019 in order to execute its payload during windows startup.[144]"
                },
                {
                    "tactic_code": "ta0003",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0003",
                    "tactic_name": "persistence",
                    "tactic_alias": "persistence",
                    "tactic_description": "The adversary is trying to maintain their foothold.",
                    "technique_code": "t1542.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/001",
                    "technique_name": "pre-os boot : system firmware",
                    "technique_description": "adversaries may modify system firmware to persist on systems.the bios (basic input/output system) and the unified extensible firmware interface (uefi) or extensible firmware interface (efi) are examples of system firmware that operate as the software interface between the operating system and hardware of a computer.",
                    "procedure_description": "lojax is a uefi bios rootkit deployed to persist remote access software on some targeted systems.[5]"
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
                    "procedure_description": "lojax has modified the registry key \u2018hkey_local_machine\\system\\currentcontrolset\\control\\session manager\\bootexecute\u2019 from \u2018autocheck autochk \u2019 to \u2018autocheck autoche \u2019 in order to execute its payload during windows startup.[144]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1564.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1564/004",
                    "technique_name": "hide artifacts : ntfs file attributes",
                    "technique_description": "adversaries may use ntfs file attributes to hide their malicious data in order to evade detection. every new technology file system (ntfs) formatted partition contains a master file table (mft) that maintains a record for every file/directory on the partition.  within mft entries are file attributes,  such as extended attributes (ea) and data [known as alternate data streams (adss) when more than one data attribute is present], that can be used to store arbitrary data (and even complete files).",
                    "procedure_description": "lojax has loaded an embedded ntfs dxe driver to be able to access and write to ntfs partitions.[15]"
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
                    "procedure_description": "lojax has modified the registry key \u2018hkey_local_machine\\system\\currentcontrolset\\control\\session manager\\bootexecute\u2019 from \u2018autocheck autochk \u2019 to \u2018autocheck autoche \u2019.[84]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1542.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1542/001",
                    "technique_name": "pre-os boot : system firmware",
                    "technique_description": "adversaries may modify system firmware to persist on systems.the bios (basic input/output system) and the unified extensible firmware interface (uefi) or extensible firmware interface (efi) are examples of system firmware that operate as the software interface between the operating system and hardware of a computer.",
                    "procedure_description": "lojax is a uefi bios rootkit deployed to persist remote access software on some targeted systems.[5]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1014",
                    "technique_link": "https://attack.mitre.org/techniques/T1014",
                    "technique_name": "rootkit",
                    "technique_description": "adversaries may use rootkits to hide the presence of programs, files, network connections, services, drivers, and other system components. rootkits are programs that hide the existence of malware by intercepting/hooking and modifying operating system api calls that supply system information.",
                    "procedure_description": "lojax is a uefi bios rootkit deployed to persist remote access software on some targeted systems.[6]"
                }
            ]
        }
    ]
};