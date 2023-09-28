var threatdata = {
    "name": "Spark",
    "alias": "Spark",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Keylogger, Info stealer, Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "Spark",
        "names": [
            {
                "name": "Spark"
            }
        ],
        "description": "(Cybereason) The Spark backdoor allows the attackers to:\n\u2022 Collect information about the infected machine.\n\u2022 Encrypt the collected data and send it to the attackers over the HTTP protocol.\n\u2022 Download additional payloads.\n\u2022 Log keystrokes.\n\u2022 Record audio using the computer\u2019s microphone.\n\u2022 Execute commands on the infected machine.\n\nThe creators of the Spark backdoor use a few techniques that are intended to keep the backdoor under-the-radar, including:\n\u2022 Packing the payloads with the Enigma packer.\n\u2022 Checking for antivirus and other security products using WMI.\n\u2022 Validating Arabic keyboard and language settings on the infected machine.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.cybereason.com/blog/new-cyber-espionage-campaigns-targeting-palestinians-part-one"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0543/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.spark"
        ],
        "uuid": "934e2c2c-e02e-4deb-afa4-064a1b10c29b",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "spark",
    "analysis": null
};