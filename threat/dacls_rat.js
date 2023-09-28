var threatdata = {
    "name": "Dacls RAT",
    "alias": "Dacls RAT, Dacls",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Dacls RAT",
        "names": [
            {
                "name": "Dacls RAT"
            },
            {
                "name": "Dacls"
            }
        ],
        "description": "(Qihoo 360) Dacls is a new type of remote-control software targeting both Windows and Linux environment. Its functions are modular, the C2 protocol uses TLS and RC4 double-layer encryption, the configuration file uses AES encryption and supports C2 instruction dynamic update. The Win32.Dacls plug-in module is dynamically loaded through a remote URL, and the Linux version of the plug-in is compiled directly in the Bot program.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.netlab.360.com/dacls-the-dual-platform-rat-en/",
            "https://blog.malwarebytes.com/threat-analysis/2020/05/new-mac-variant-of-lazarus-dacls-rat-distributed-via-trojanized-2fa-app/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.dacls",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dacls",
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.dacls"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Dacls"
        ],
        "uuid": "ece6a72a-df67-40cb-8f1a-17bb6fee43cc",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "dacls_rat",
    "analysis": null
};