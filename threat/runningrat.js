var threatdata = {
    "name": "RunningRAT",
    "alias": "RunningRAT, Running RAT, running_rat",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "RunningRAT",
        "names": [
            {
                "name": "RunningRAT"
            },
            {
                "name": "Running RAT"
            },
            {
                "name": "running_rat"
            }
        ],
        "description": "(McAfee) RunningRat is a remote access Trojan (RAT) that operates with two DLLs. It gets its name from a hardcoded string embedded in the malware. Upon being dropped onto a system, the first DLL executes. This DLL serves three main functions: killing antimalware, unpacking and executing the main RAT DLL, and obtaining persistence. The malware drops the Windows batch file dx.bat, which attempts to kill the task daumcleaner.exe; a Korean security program. The batch file then attempts to remove itself.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/gold-dragon-widens-olympics-malware-attacks-gains-permanent-presence-on-victims-systems/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0253/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.runningrat"
        ],
        "uuid": "df6926cd-9c41-4db7-a233-54e6ebebb6ee",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "runningrat",
    "analysis": null
};