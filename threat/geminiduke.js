var threatdata = {
    "name": "GeminiDuke",
    "alias": "GeminiDuke",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Loader",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "GeminiDuke",
        "names": [
            {
                "name": "GeminiDuke"
            }
        ],
        "description": "(F-Secure) The GeminiDuke toolset consists of a core information stealer, a loader and multiple persistence-related components. Unlike {{CosmicDuke}} and {{PinchDuke}}, GeminiDuke primarily collects information on the victim computer\u2019s configuration. The collected details include:\n\u2022 Local user accounts\n\u2022 Network settings\n\u2022 Internet proxy settings\n\u2022 Installed drivers\n\u2022 Running processes\n\u2022 Programs previously executed by users\n\u2022 Programs and services configured to automatically run at startup\n\u2022 Values of environment variables\n\u2022 Files and folders present in any users home folder\n\u2022 Files and folders present in any users My Documents\n\u2022 Programs installed to the Program Files folder\n\u2022 Recently accessed files, folders and programs\n\nAs is common for malware, the GeminiDuke infostealer uses a mutex to ensure that only one instance of itself is running at a time. What is less common is that the name used for the mutex is often a timestamp. We believe these timestamps to be generated during the compilation of GeminiDuke from the local time of the computer being used.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Loader"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0049/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.geminiduke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:GeminiDuke"
        ],
        "uuid": "584ac10a-2dc5-4633-9d8a-0980870bbd1f",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "geminiduke",
    "analysis": null
};