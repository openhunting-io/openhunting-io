var threatdata = {
    "name": "PowerPunch",
    "alias": "PowerPunch",
    "category": "Malware",
    "type": "Downloader, Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "PowerPunch",
        "names": [
            {
                "name": "PowerPunch"
            }
        ],
        "description": "(Microsoft) PowerPunch is executed from within PowerShell as a one-line command, encoded using Base64. These binaries also exhibit features that rely on data from the compromised host to inform encryption of the next stage. PowerPunch also provides an excellent example of this. The VolumeSerialNumber of the host serves as the basis for a multibyte XOR key. The key is applied to an executable payload downloaded directly from adversary infrastructure, allowing for an encryption key unique to the target host. Ultimately, a next-stage executable is remotely retrieved and dropped to disk prior to execution.",
        "category": "Malware",
        "type": [
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2022/02/04/actinium-targets-ukrainian-organizations/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0685/"
        ],
        "uuid": "2653faee-fcff-4add-8934-b0ae27606c61",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "powerpunch",
    "analysis": null
};