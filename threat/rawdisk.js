var threatdata = {
    "name": "RawDisk",
    "alias": "RawDisk",
    "category": "Tools",
    "type": "-",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "RawDisk",
        "names": [
            {
                "name": "RawDisk"
            }
        ],
        "description": "RawDisk is a legitimate commercial driver from the EldoS Corporation that is used for interacting with files, disks, and partitions. The driver allows for direct modification of data on a local computer's hard drive. In some cases, the tool can enact these raw disk modifications from user-mode processes, circumventing Windows operating system security features.",
        "category": "Tools",
        "information": [
            "https://web.archive.org/web/20160303200515/https://operationblockbuster.com/wp-content/uploads/2016/02/Operation-Blockbuster-Destructive-Malware-Report.pdf",
            "https://www.itprotoday.com/windows-78/eldos-provides-raw-disk-access-vista-and-xp"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0364/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:rawdisk"
        ],
        "uuid": "327e1f94-7307-4f57-a992-f7e7cc206f5e",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rawdisk",
    "analysis": null,
    "articles": [],
    "mitre": [
        {
            "procedure_name": "rawdisk",
            "procedure_code": "s0364",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0364",
            "techniques": [
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
                    "procedure_description": "rawdisk was used in shamoon to write to protected system locations such as the mbr and disk partitions in an effort to destroy data.[3][5]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1561.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1561/001",
                    "technique_name": "disk wipe : disk content wipe",
                    "technique_description": "adversaries may erase the contents of storage devices on specific systems or in large numbers in a network to interrupt availability to system and network resources.",
                    "procedure_description": "rawdisk has been used to directly access the hard disk to help overwrite arbitrarily sized portions of disk content.[2]"
                },
                {
                    "tactic_code": "ta0040",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0040",
                    "tactic_name": "impact",
                    "tactic_alias": "impact",
                    "tactic_description": "The adversary is trying to manipulate, interrupt, or destroy your systems and data.",
                    "technique_code": "t1561.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1561/002",
                    "technique_name": "disk wipe : disk structure wipe",
                    "technique_description": "adversaries may corrupt or wipe the disk data structures on a hard drive necessary to boot a system; targeting specific critical systems or in large numbers in a network to interrupt availability to system and network resources.",
                    "procedure_description": "rawdisk was used in shamoon to help overwrite components of disk structure like the mbr and disk partitions.[3][5]"
                }
            ]
        }
    ]
};