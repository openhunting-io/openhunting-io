var threatdata = {
    "name": "Graphite",
    "alias": "Graphite",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "Graphite",
        "names": [
            {
                "name": "Graphite"
            }
        ],
        "description": "(Cluster25) Once obtained a new OAuth2 token, the Graphite malware will query the Microsoft GraphAPIs for new commands by enumerating the child files in the check OneDrive subdirectory. If a new file is found, the content is downloaded and decrypted through an AES-256-CBCdecryption algorithm. The monitoring of task executions and the uploading of their results is managed through a dedicated thread. Finally, the malware allows remote command execution by allocating a new region of memory and executing the received shellcode by calling a new dedicated thread.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.cluster25.duskrise.com/2022/09/23/in-the-footsteps-of-the-fancy-bear-powerpoint-graphite/",
            "https://www.trellix.com/en-gb/about/newsroom/stories/threat-labs/prime-ministers-office-compromised.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.graphite"
        ],
        "uuid": "54731956-6a9c-4fac-8622-2623eb886502",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "graphite",
    "analysis": null
};