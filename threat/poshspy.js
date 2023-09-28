var threatdata = {
    "name": "POSHSPY",
    "alias": "POSHSPY",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "POSHSPY",
        "names": [
            {
                "name": "POSHSPY"
            }
        ],
        "description": "(FireEye) POSHSPY makes the most of using built-in Windows features \u2013 so-called \u201c{{Living off the Land}}\u201d \u2013 to make an especially stealthy backdoor. POSHSPY's use of WMI to both store and persist the backdoor code makes it nearly invisible to anyone not familiar with the intricacies of WMI. Its use of a PowerShell payload means that only legitimate system processes are utilized and that the malicious code execution can only be identified through enhanced logging or in memory. The backdoor's infrequent beaconing, traffic obfuscation, extensive encryption and use of geographically local, legitimate websites for command and control (C2) make identification of its network traffic difficult. Every aspect of POSHSPY is efficient and covert.\n\nMandiant initially identified an early variant of the POSHSPY backdoor deployed as PowerShell scripts during an incident response engagement in 2015. Later in that same engagement, the attacker updated the deployment of the backdoor to use WMI for storage and persistence. Mandiant has since identified POSHSPY in several other environments compromised by APT29 over the past two years.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2017/03/dissecting_one_ofap.html",
            "https://github.com/matthewdunwoody/POSHSPY"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0150/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.poshspy"
        ],
        "uuid": "28eff50b-ad42-43e6-b5ee-2bbabd58d9b6",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "poshspy",
    "analysis": null
};