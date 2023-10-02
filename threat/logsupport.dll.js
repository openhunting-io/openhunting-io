var threatdata = {
    "name": "logsupport.dll",
    "alias": "logsupport.dll",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-18",
    "all_data": {
        "tool": "logsupport.dll",
        "names": [
            {
                "name": "logsupport.dll"
            }
        ],
        "description": "(Avast) logsupport.dll is primarily used as a backdoor, but uses a different C&C server than the other backdoors. Its corresponding log file is located at %TEMP%\\rar%[A-Z0-9]{4}%.tmp. The structure of the log file is also the same. The main difference is that the log file is encrypted by a XOR cipher with a hardcoded key.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://decoded.avast.io/luigicamastra/apt-group-planted-backdoors-targeting-high-profile-networks-in-central-asia/"
        ],
        "uuid": "4f8de0d8-abe2-432e-9d7c-9a629dfc9972",
        "last-card-change": "2020-05-18",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "logsupport.dll",
    "analysis": null,
    "articles": [],
    "mitre": []
};