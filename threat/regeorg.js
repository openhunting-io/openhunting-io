var threatdata = {
    "name": "reGeorg",
    "alias": "reGeorg",
    "category": "Tools",
    "type": "Backdoor, Tunneling",
    "modified": "2023-10-26",
    "all_data": {
        "tool": "reGeorg",
        "names": [
            {
                "name": "reGeorg"
            }
        ],
        "description": "The successor to reDuh, pwn a bastion webserver and create SOCKS proxies through the DMZ. Pivot and pwn.",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://github.com/sensepost/reGeorg",
            "https://sensepost.com/discover/tools/reGeorg/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.regeorg"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:regeorg"
        ],
        "uuid": "bdd03dfa-f700-4573-b490-d895d4641e61",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "regeorg",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.cert.ssi.gouv.fr/uploads/CERTFR-2023-CTI-009.pdf",
            "date": "2023-10-26",
            "organization": "ANSSI",
            "author": "ANSSI",
            "title": "Attack Campaigns of APT28 since 2021",
            "categories": [
                "CredoMap",
                "DriveOcean",
                "Empire Downloader",
                "Graphite",
                "MimiKatz",
                "Mocky LNK",
                "reGeorg"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2023/06/14/cadet-blizzard-emerges-as-a-novel-and-distinct-russian-threat-actor/",
            "date": "2023-06-14",
            "organization": "Microsoft",
            "author": "Microsoft Threat Intelligence",
            "title": "Cadet Blizzard emerges as a novel and distinct Russian threat actor",
            "categories": [
                "p0wnyshell",
                "reGeorg",
                "WhisperGate"
            ]
        },
        {
            "data_url": "https://securelist.com/defttorero-tactics-techniques-and-procedures/107610/",
            "date": "2022-10-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "DeftTorero: tactics, techniques and procedures of intrusions revealed",
            "categories": [
                "Nightrunner",
                "Tunna",
                "ASPXSpy",
                "LaZagne",
                "ExplosiveRAT",
                "reGeorg",
                "Volatile Cedar"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/09/06/worok-big-picture/",
            "date": "2022-09-06",
            "organization": "ESET Research",
            "author": "Thibaut Passilly",
            "title": "Worok: The big picture",
            "categories": [
                "MimiKatz",
                "PNGLoad",
                "reGeorg",
                "ShadowPad",
                "Worok"
            ]
        },
        {
            "data_url": "https://media.defense.gov/2021/Jul/01/2002753896/-1/-1/1/CSA_GRU_GLOBAL_BRUTE_FORCE_CAMPAIGN_UOO158036-21.PDF",
            "date": "2021-07-01",
            "organization": "",
            "author": "CISA",
            "title": "Russian GRU (APT28) Conducting Global Brute Force Campaign to Compromise Enterprise and Cloud Environments",
            "categories": [
                "reGeorg"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/samsam-ransomware-campaigns",
            "date": "2018-02-15",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "SamSam Ransomware Campaigns",
            "categories": [
                "MimiKatz",
                "reGeorg",
                "SamSam",
                "BOSS SPIDER"
            ]
        },
        {
            "data_url": "https://github.com/sensepost/reGeorg",
            "date": "2017-02-16",
            "organization": "Github (sensepost)",
            "author": "sensepost",
            "title": "reGeorg",
            "categories": [
                "reGeorg"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/blog/ransomware-deployed-by-adversary",
            "date": "2016-03-30",
            "organization": "Secureworks",
            "author": "Counter Threat Unit ResearchTeam",
            "title": "Ransomware Deployed by Adversary with Established Foothold",
            "categories": [
                "MimiKatz",
                "reGeorg",
                "SamSam",
                "BOSS SPIDER"
            ]
        },
        {
            "data_url": "https://sensepost.com/discover/tools/reGeorg/",
            "date": "2014-11-14",
            "organization": "Sensepost",
            "author": "Willem Mouton",
            "title": "reGeorg",
            "categories": [
                "reGeorg"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "reg",
            "procedure_code": "s0075",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0075",
            "techniques": [
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
                    "procedure_description": "reg may be used to interact with and modify the windows registry of a local or remote system at the command-line interface.[1]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1552.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1552/002",
                    "technique_name": "unsecured credentials : credentials in registry",
                    "technique_description": "adversaries may search the registry on compromised systems for insecurely stored credentials. the windows registry stores configuration information that can be used by the system or other programs. adversaries may query the registry looking for credentials and passwords that have been stored for use by other programs or services. sometimes these credentials are used for automatic logons.",
                    "procedure_description": "reg may be used to find credentials in the windows registry.[1]"
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
                    "procedure_description": "reg may be used to gather details from the windows registry of a local or remote system at the command-line interface.[77]"
                }
            ]
        }
    ]
};