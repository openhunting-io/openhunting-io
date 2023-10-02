var threatdata = {
    "name": "SDelete",
    "alias": "SDelete",
    "category": "Tools",
    "type": "-",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "SDelete",
        "names": [
            {
                "name": "SDelete"
            }
        ],
        "description": "SDelete is an application that securely deletes data in a way that makes it unrecoverable. It is part of the Microsoft {{SysInternals}} suite of tools.",
        "category": "Tools",
        "information": [
            "https://docs.microsoft.com/en-us/sysinternals/downloads/sdelete"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0195/"
        ],
        "uuid": "b22effce-d399-4d60-be20-e522779062d0",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sdelete",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "sdelete",
            "procedure_code": "s0195",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0195",
            "techniques": [
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
                    "procedure_description": "sdelete deletes data in a way that makes it unrecoverable.[1]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1485",
                    "technique_link": "https://attack.mitre.org/techniques/T1485",
                    "technique_name": "data destruction",
                    "technique_description": "adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. data destruction is likely to render stored data irrecoverable by forensic techniques through overwriting files or data on local and remote drives. common operating system file deletion commands such as del and rm often only remove pointers to files without wiping the contents of the files themselves, making the files recoverable by proper forensic methodology. this behavior is distinct from disk content wipe and disk structure wipe because individual files are destroyed rather than sections of a storage disk or the disk's logical structure.",
                    "procedure_description": "sdelete deletes data in a way that makes it unrecoverable.[34]"
                }
            ]
        }
    ]
};