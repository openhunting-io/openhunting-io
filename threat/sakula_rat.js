var threatdata = {
    "name": "Sakula RAT",
    "alias": "Sakula RAT, Sakula, Sakurel, VIPER",
    "category": "Malware",
    "type": "Backdoor, Downloader, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Sakula RAT",
        "names": [
            {
                "name": "Sakula RAT"
            },
            {
                "name": "Sakula"
            },
            {
                "name": "Sakurel"
            },
            {
                "name": "VIPER"
            }
        ],
        "description": "(SecureWorks) Sakula uses HTTP GET and POST communication for command and control (C2). Network communication is obfuscated with single-byte XOR encoding. Sakula also leverages single-byte XOR encoding to obfuscate various strings and files embedded in the resource section, which are subsequently used for User Account Control (UAC) bypass on both 32 and 64-bit systems.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.secureworks.com/research/sakula-malware-family",
            "https://cyberthreatintelligenceblog.wordpress.com/2018/11/16/c0ld-case-from-aerospace-to-chinas-interests/",
            "https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2016/june/sakula-an-adventure-in-dll-planting/",
            "https://github.com/nccgroup/Cyber-Defence/tree/master/Technical%20Notes/Sakula"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0074/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sakula_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Sakula"
        ],
        "uuid": "60bcd6ad-2ac9-4ca8-82d2-54b200d0b098",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sakula_rat",
    "analysis": null
};