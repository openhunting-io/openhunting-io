var threatdata = {
    "name": "SeaDuke",
    "alias": "SeaDuke, SeaDaddy, SeaDesk, SeaDask",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SeaDuke",
        "names": [
            {
                "name": "SeaDuke"
            },
            {
                "name": "SeaDaddy"
            },
            {
                "name": "SeaDesk"
            },
            {
                "name": "SeaDask"
            }
        ],
        "description": "(F-Secure) SeaDuke is a simple backdoor that focuses on executing commands retrieved from its C&C server, such as uploading and downloading files, executing system commands and evaluating additional Python code. SeaDuke is made interesting by the fact that it is written in Python and designed to be cross-platform so that it works on both Windows and Linux.\n\nThe only known infection vector for SeaDuke is via an existing {{CozyDuke}} infection, wherein CozyDuke downloads and executes the SeaDuke toolset.\n\nLike {{HammerDuke}}, SeaDuke appears to be used by the Dukes group primarily as a secondary backdoor left on CozyDuke victims after that toolset has completed the initial infection and stolen any readily available information from them.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf",
            "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0053/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.seadaddy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:seaduke"
        ],
        "uuid": "8fe4f869-e5d7-4844-ab0b-57d67fd38000",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "seaduke",
    "analysis": null
};