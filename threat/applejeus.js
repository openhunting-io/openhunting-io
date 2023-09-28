var threatdata = {
    "name": "AppleJeus",
    "alias": "AppleJeus",
    "category": "Malware",
    "type": "Reconnaissance, Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "AppleJeus",
        "names": [
            {
                "name": "AppleJeus"
            }
        ],
        "description": "(Kaspersky) The main purpose of Updater.exe is to collect the victim\u2019s host information and send it back to the server. Upon launch, the malware creates a unique string with the format string template \u201c%09d-%05d\u201d based on random values, which is used as a unique identifier of the infected host. This malware collects process lists, excluding \u201c[System Process]\u201d and \u201cSystem\u201d processes and gets the exact OS version from the registry value at \u201cHKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\u201d. It seems that such values only exist from Windows 10, so we assume that the author developed and tested it on Windows 10.\n\nAt the end of the installation process, the installer immediately runs the Updater.exe module with the \u201cCheckUpdate\u201d parameter. This file looks like a regular tool and most likely will not arouse the suspicion of system administrators. After all, it even contains a valid digital signature, which belongs to the same vendor. But the devil is in the detail, as usual.\n\nThe code writer developed this project under the codename \u201cjeus\u201d, which was discovered in a PDB path included in the updater and used as unique HTTP multipart message data separator string. Because of this, and the fact that the attacked platforms include Apple macOS, we decided to call this Operation AppleJeus.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Downloader"
        ],
        "information": [
            "https://securelist.com/operation-applejeus/87553/",
            "https://us-cert.cisa.gov/ncas/current-activity/2021/02/17/north-korean-malicious-cyber-activity-applejeus"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0584/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.applejeus",
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.applejeus"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:AppleJeus"
        ],
        "uuid": "2ef2a76e-950e-49fd-be23-a1f1d5c61f5e",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "applejeus",
    "analysis": null
};