var threatdata = {
    "name": "Quarks PwDump",
    "alias": "Quarks PwDump",
    "category": "Tools",
    "type": "Credential stealer",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Quarks PwDump",
        "names": [
            {
                "name": "Quarks PwDump"
            }
        ],
        "description": "Quarks PwDump is new open source tool to dump various types of Windows credentials: local account, domain accounts, cached domain credentials and bitlocker. The tool is currently dedicated to work live on operating systems limiting the risk of undermining their integrity or stability. It requires administrator's privileges and is still in beta test.\n\nQuarks PwDump is a native Win32 open source tool to extract credentials from Windows operating systems.\n\nIt currently extracts : Local accounts NT/LM hashes + history Domain accounts NT/LM hashes + history stored in NTDS.dit file Cached domain credentials Bitlocker recovery information (recovery passwords & key packages) stored in NTDS.dit",
        "category": "Tools",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://blog.quarkslab.com/quarks-pwdump.html"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:QuarksPwDump"
        ],
        "uuid": "73a33d7f-d3c9-421b-bb7d-51c5b14b2ae3",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "quarks_pwdump",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "pwdump",
            "procedure_code": "s0006",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0006",
            "techniques": [
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1003.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1003/002",
                    "technique_name": "os credential dumping : security account manager",
                    "technique_description": "adversaries may attempt to extract credential material from the security account manager (sam) database either through in-memory techniques or through the windows registry where the sam database is stored. the sam is a database file that contains local accounts for the host, typically those found with the net user command. enumerating the sam database requires system level access.",
                    "procedure_description": "pwdump can be used to dump credentials from the sam.[27]"
                }
            ]
        }
    ]
};