var threatdata = {
    "name": "ShellClient",
    "alias": "ShellClient",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2021-11-02",
    "all_data": {
        "tool": "ShellClient",
        "names": [
            {
                "name": "ShellClient"
            }
        ],
        "description": "(Cybereason) The investigation into Operation GhostShell also revealed that ShellClient dates back to at least 2018, and has been continuously evolving ever since while successfully evading most security tools and remaining completely unknown. By studying the ShellClient development cycles, the researchers were able to observe how ShellClient has morphed over time from a rather simple reverse shell to a sophisticated RAT used to facilitate cyber espionage operations while remaining undetected.\n\nThe most recent ShellClient versions observed in Operation GhostShell follow the trend of abusing cloud-based storage services, in this case the popular Dropbox service. The ShellClient authors chose to abandon their previous C2 domain and replace the command and control mechanism of the malware with a more simple yet more stealthy C2 channel using Dropbox to exfiltrate the stolen data as well as to send commands to the malware. This trend has been increasingly adopted by many threat actors due to its simplicity and the ability to effectively blend in with legitimate network traffic.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-ghostshell-novel-rat-targets-global-aerospace-and-telecoms-firms"
        ],
        "uuid": "ee4d9bc0-74e7-4547-b189-5c25c86ee2ed",
        "last-card-change": "2021-11-02",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "shellclient",
    "analysis": null,
    "articles": [],
    "mitre": []
};