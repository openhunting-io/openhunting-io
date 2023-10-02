var threatdata = {
    "name": "PowerTrick",
    "alias": "PowerTrick",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-06-24",
    "all_data": {
        "tool": "PowerTrick",
        "names": [
            {
                "name": "PowerTrick"
            }
        ],
        "description": "(SentinelLabs) SentinelLabs research into this PowerShell-based backdoor called \u201cPowerTrick\u201d traces back to the initial infection, we assess with high confidence at least some of the initial PowerTrick infections are being kicked off as a PowerShell task through normal TrickBot infections utilizing a repurposed backconnect module that can accept commands to execute called \u201cNewBCtest\u201d.\n\nAfter the initial stager for the \u201cPowerTrick backdoor\u201d is kicked off, then the actor issues the first command which is to download a larger backdoor. This process is similar to what you see in Powershell Empire with its stager component.\n\nPowerTrick is designed to execute commands and return the results in Base64 format, the system uses a generated UUID based on computer information as a \u201cbotID.\u201d",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://labs.sentinelone.com/top-tier-russian-organized-cybercrime-group-unveils-fileless-stealthy-powertrick-backdoor-for-high-value-targets/",
            "https://labs.sentinelone.com/inside-a-trickbot-cobaltstrike-attack-server/"
        ],
        "uuid": "48fd4d67-710f-4f16-86b8-de497183ee53",
        "last-card-change": "2020-06-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "powertrick",
    "analysis": null,
    "articles": [],
    "mitre": []
};