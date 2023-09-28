var threatdata = {
    "name": "MSUpdater",
    "alias": "MSUpdater",
    "category": "Malware",
    "type": "Dropper, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "MSUpdater",
        "names": [
            {
                "name": "MSUpdater"
            }
        ],
        "description": "(ZScaler) The malware dropped and launched from the PDF exploit has been seen to be virtual machine (VM) aware in order to prevent analysis within a sandbox. The Trojan functionality is decrypted at run-time, and includes expected functionality, such as, downloading, uploading, and executing files driven by commands from the C&C. Communication with the C&C is over HTTP but is encoded to evade detection. The Trojan file name (e.g., 'msupdate.exe') and the HTTP paths used in the C&C (e.g., '/microsoftupdate/getupdate/default.aspx') are used to stay under the radar by appearing to be related to Microsoft Windows Update - hence the name given to this Trojan.",
        "category": "Malware",
        "type": [
            "Dropper",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.zscaler.com/blogs/research/msupdater-trojan-and-link-targeted-attacks",
            "https://cybersecurity.att.com/blogs/labs-research/msupdater-trojan-found-using-cve-2012-0158-space-and-missile-defense-conference"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:msupdater"
        ],
        "uuid": "e288f4fe-9d9f-4f36-be19-6895ad1ada0c",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "msupdater",
    "analysis": null
};