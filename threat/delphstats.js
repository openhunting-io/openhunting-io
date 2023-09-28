var threatdata = {
    "name": "DELPHSTATS",
    "alias": "DELPHSTATS",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "DELPHSTATS",
        "names": [
            {
                "name": "DELPHSTATS"
            }
        ],
        "description": "(Trend Micro) This backdoor is written in the Delphi programming language, and queries the C&C server for a .dat file before executing it via the Powershell.exe process. Similar to the {{SHARPSTATS}} backdoor, DELPHSTATS employs custom PowerShell script with code similarities to the one embedded into the SHARPSTATS backdoor.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/white_papers/wp_new_muddywater_findings_uncovered.pdf"
        ],
        "uuid": "474bae78-f701-472e-af2d-dc0f220f3967",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "delphstats",
    "analysis": null
};