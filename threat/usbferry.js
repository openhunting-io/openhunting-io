var threatdata = {
    "name": "USBferry",
    "alias": "USBferry",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "USBferry",
        "names": [
            {
                "name": "USBferry"
            }
        ],
        "description": "(Trend Micro) USBferry has variants that perform different commands depending on specific targets; it can also combine capabilities, improve its stealth in infected environments, and steal critical information through USB storage.\n\nSpecific functions will be embedded in the trojan downloader to adopt the target environment. Our in-depth analysis found that when Tropic Trooper first penetrates the victim's environment, they will use basic sourcing scripts to collect the host network\u2019s topology, connection capability, and volume information. The second function uses USB storage to copy highly classified documents from the physically isolated environment. Moreover, this function copies certain files into the USB %RECYCLER% folder, monitors files\u2019 modified time, and updates the newest one to the USB device. The last function will infiltrate the target\u2019s internal machine with a customized Windows command and reverse backdoor malware.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/tropic-troopers-back-usbferry-attack-targets-air-gapped-environments/",
            "https://documents.trendmicro.com/assets/Tech-Brief-Tropic-Trooper-s-Back-USBferry-Attack-Targets-Air-gapped-Environments.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0452/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.usbferry"
        ],
        "uuid": "0089ab73-bdcf-4834-ba12-4eb76d2dbd25",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "usbferry",
    "analysis": null
};