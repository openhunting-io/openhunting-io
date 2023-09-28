var threatdata = {
    "name": "Sepulcher",
    "alias": "Sepulcher",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Sepulcher",
        "names": [
            {
                "name": "Sepulcher"
            }
        ],
        "description": "(Proofpoint) Sepulcher malware has seven work modes that include conducting reconnaissance on an infected host, spawning a reverse command shell, reading from file, and writing to file. More granularly, additional commands exist within the intelligence gathering/reconnaissance work modes (1002, 1003, 1004) which carry out reconnaissance functionality within the infected host. These commands include obtaining information about the drives, file information, directory statistics, directory paths, directory content, running processes, and services. Additionally, it is capable of more active functionalities like deleting directories and files, creating directories, moving file source to destination, spawning a shell to execute commands, terminating a process, restarting a service, changing a service start type, and deleting a service.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.proofpoint.com/us/blog/threat-insight/chinese-apt-ta413-resumes-targeting-tibet-following-covid-19-themed-economic",
            "https://www.proofpoint.com/us/blog/threat-insight/ta413-leverages-new-friarfox-browser-extension-target-gmail-accounts-global"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sepulcher"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:sepulcher"
        ],
        "uuid": "0c4b65ac-4631-443d-8091-e5197e57575f",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sepulcher",
    "analysis": null
};