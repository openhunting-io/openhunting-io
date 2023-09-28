var threatdata = {
    "name": "KOMPROGO",
    "alias": "KOMPROGO, Splinter RAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "KOMPROGO",
        "names": [
            {
                "name": "KOMPROGO"
            },
            {
                "name": "Splinter RAT"
            }
        ],
        "description": "(Cylance) Splinter arrives as an MSBuild project file containing a Base64 encoded PowerShell script generated using the MSFvenom psh-reflection module. As in the case of Remy, it utilizes on-the-fly C# compilation and strips off several PowerShell wrappers before the shellcode that calls the final payload is invoked. The backdoor itself is a Win32 PE EXE file and has the capability to collect information, download and execute payloads, run WMI queries, and manipulate files, processes, and registry entries. The overall functionality of Splinter appears pretty much in line with the \u201cKOMPROGO\u201d malware (as described in the FireEye APT32 report).",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.cylance.com/content/dam/cylance-web/en-us/resources/knowledge-center/resource-library/reports/SpyRATsofOceanLotusMalwareWhitePaper.pdf",
            "https://www.fireeye.com/blog/threat-research/2017/05/cyber-espionage-apt32.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0156/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.komprogo"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:KOMPROGO"
        ],
        "uuid": "27f94f7d-9871-458b-aac3-7d48efce7047",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "komprogo",
    "analysis": null
};