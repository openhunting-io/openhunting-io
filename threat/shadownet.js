var threatdata = {
    "name": "ShadowNet",
    "alias": "ShadowNet",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "ShadowNet",
        "names": [
            {
                "name": "ShadowNet"
            }
        ],
        "description": "(Citizen Lab) ShadowNet malware leverages Windows Management Instrumentation (WMI), a system tool meant for administrators. Its intended usage as a tool for collecting system information and automation makes it an ideal mechanism for gathering and exfiltrating data. The use of legitimate Windows features can make it more difficult for administrators to identify activity as malicious.\n\nShadowNet typically uses multi-layered C2 infrastructure that first connects to blog websites and then retrieves C2 information from encoded strings left on the blog. By using blog sites as intermediaries the attackers can maintain control of compromised machines even if a C2 is blocked by a network firewall or otherwise goes down. If a C2 needs to be updated the attackers can simply point the intermediaries to new servers.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://citizenlab.ca/2015/03/tibetan-uprising-day-malware-attacks/"
        ],
        "uuid": "93ab0ca2-e9e1-422e-b35e-04fe80d4974d",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "shadownet",
    "analysis": null
};