var threatdata = {
    "name": "Nebulae",
    "alias": "Nebulae",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Nebulae",
        "names": [
            {
                "name": "Nebulae"
            }
        ],
        "description": "(Bitdefender) The analysis of the most recent samples showed that the backdoor is capable of:\n\u2022 Getting LogicalDrive information (Drive type, FreeSpace, VolumeInformation)\n\u2022 Listing, moving and deleting files and directories\n\u2022 Executing a process using CreateProcess or through a CMD shell\n\u2022 Listing and terminating processes\n\u2022 Downloading and uploading files from and to C&C\n\nCommunication with the C&C is realized by sending and receiving packets of a fixed form through a TCP connection. The format of packets can be visualized on the diagram below and represent an array of bytes of dynamic length with a 77 bytes header that stores the RC4 key used for payload encryption (the key is created by concatenating each fourth byte)",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.bitdefender.com/files/News/CaseStudies/study/396/Bitdefender-PR-Whitepaper-NAIKON-creat5397-en-EN.pdf",
            "https://www.cybereason.com/blog/deadringer-exposing-chinese-threat-actors-targeting-major-telcos"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0630/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.nebulae"
        ],
        "uuid": "5015e84a-0fd5-4850-9a07-41028e70a7ff",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "nebulae",
    "analysis": null
};