var threatdata = {
    "name": "Auriga",
    "alias": "Auriga, Riodrv",
    "category": "Malware",
    "type": "Backdoor, Keylogger",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Auriga",
        "names": [
            {
                "name": "Auriga"
            },
            {
                "name": "Riodrv"
            }
        ],
        "description": "The AURIGA malware family shares a large amount of functionality with the {{bangat}} backdoor. The malware family contains functionality for keystroke logging, creating and killing processes, performing file system and registry modifications, spawning interactive command shells, performing process injection, logging off the current user or shutting down the local machine. The AURIGA malware contains a driver component which is used to inject the malware DLL into other processes. This driver can also perform process and IP connection hiding. The malware family will create a copy of cmd.exe to perform its C2 activity, and replace the 'Microsoft corp' strings in the cmd.exe binary with different values. The malware family typically maintains persistence through installing itself as a service.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf",
            "http://contagiodump.blogspot.com/2013/03/mandiant-apt1-samples-categorized-by.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.auriga"
        ],
        "uuid": "2f8361b0-f1d1-4cc4-9c67-642df54a181a",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "auriga",
    "analysis": null
};