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
    "mitre": [],
    "file_name": "quarks_pwdump",
    "analysis": null
};