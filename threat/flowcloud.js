var threatdata = {
    "name": "FlowCloud",
    "alias": "FlowCloud",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "FlowCloud",
        "names": [
            {
                "name": "FlowCloud"
            }
        ],
        "description": "(Proofpoint) While we found the ultimate execution method for both the LookBack {{GUP Proxy Tool}} and FlowCloud malware were the same across both macro versions, we found that the FlowCloud macro introduced a new method for the delivery of the malware.\n\nFlowCloud malware is capable of RAT functionalities based on its available commands including accessing the clipboard, installed applications, keyboard, mouse, screen, files, services, and processes with the ability to exfiltrate information via command and control. Additionally, the malware variants analyzed have several distinct characteristics that indicate the malware may have been active in the threat landscape since at least July 2016.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.proofpoint.com/us/blog/threat-insight/ta410-group-behind-lookback-attacks-against-us-utilities-sector-returns-new",
            "https://www.proofpoint.com/us/blog/threat-insight/flowcloud-version-413-malware-analysis",
            "https://www.ironnet.com/blog/china-cyber-attacks-the-current-threat-landscape",
            "https://nao-sec.org/2021/01/royal-road-redive.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.flowcloud"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:FlowCloud"
        ],
        "uuid": "1f53d01d-537d-46d0-969f-7971d49db920",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "flowcloud",
    "analysis": null
};