var threatdata = {
    "name": "RogueRobin",
    "alias": "RogueRobin, RogueRobinNET",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration, Tunneling",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "RogueRobin",
        "names": [
            {
                "name": "RogueRobin"
            },
            {
                "name": "RogueRobinNET"
            }
        ],
        "description": "(Palo Alto) In our original blog on DarkHydrus, we analyzed a PowerShell-based payload we named RogueRobin. While performing the analysis on the delivery documents using the .sct file AppLocker bypass, we noticed the C# payload was functionally similar to the original RogueRobin payload. The similarities between the PowerShell and C# variants of RogueRobin suggests that the DarkHydrus group ported their code to a compiled variant.\n\nThe C# variant of RogueRobin attempts to detect if it is executing in a sandbox environment using the same commands as in the PowerShell variant of RogueRobin. The series of commands, as seen in Table 2, include checks for virtualized environments, low memory, and processor counts, in addition to checks for common analysis tools running on the system. The Trojan also checks to see if a debugger is attached to its processes and will exit if it detects the presence of a debugger.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Tunneling"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/darkhydrus-delivers-new-trojan-that-can-use-google-drive-for-c2-communications/",
            "https://researchcenter.paloaltonetworks.com/2018/07/unit42-new-threat-actor-group-darkhydrus-targets-middle-east-government/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0270/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.roguerobin",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.roguerobin"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:RogueRobin"
        ],
        "uuid": "87ad16c6-a771-4f89-bdd3-c5e2ad4f3354",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "roguerobin",
    "analysis": null
};