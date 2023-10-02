var threatdata = {
    "name": "dneSpy",
    "alias": "dneSpy",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "dneSpy",
        "names": [
            {
                "name": "dneSpy"
            }
        ],
        "description": "DneSpy collects information, takes screenshots, and downloads and executes the latest version of other malicious components in the infected system. The malware is designed to receive a \u201cpolicy\u201d file in JSON format with all the commands to execute. The policy file sent by the C&C server can be changed and updated over time, making dneSpy flexible and well-designed. The output of each executed command is zipped, encrypted, and exfiltrated to the C&C server. These characteristics make dneSpy a fully functional espionage backdoor.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/20/j/operation-earth-kitsune-a-dance-of-two-new-backdoors.html",
            "https://documents.trendmicro.com/assets/white_papers/wp-operation-earth-kitsune.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dnespy"
        ],
        "uuid": "1be82a99-1719-48c3-a640-e93743a4c823",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dnespy",
    "analysis": null,
    "articles": [],
    "mitre": []
};