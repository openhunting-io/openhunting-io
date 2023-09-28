var threatdata = {
    "name": "CosmicDuke",
    "alias": "CosmicDuke, TinyBaron, BotgenStudios, NemesisGemina",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer, Credential stealer, Exfiltration",
    "modified": "2023-04-26",
    "all_data": {
        "tool": "CosmicDuke",
        "names": [
            {
                "name": "CosmicDuke"
            },
            {
                "name": "TinyBaron"
            },
            {
                "name": "BotgenStudios"
            },
            {
                "name": "NemesisGemina"
            }
        ],
        "description": "(F-Secure) The CosmicDuke toolset is designed around a main information stealer component. This information stealer is augmented by a variety of components that the toolset operators may selectively include with the main component to provide additional functionalities, such as multiple methods of establishing persistence, as well as modules that attempt to exploit privilege escalation vulnerabilities in order to execute CosmicDuke with higher privileges. CosmicDuke\u2019s information stealing functionality includes:\n\u2022 Keylogging\n\u2022 Taking screenshots\n\u2022 Stealing clipboard contents\n\u2022 Stealing user files with file extensions that match a predefined list\n\u2022 Exporting the users cryptographic certificates including private keys\n\u2022 Collecting user credentials, including passwords, for a variety of popular chat and email programs as well as from web browsers\n\nCosmicDuke may use HTTP, HTTPS, FTP or WebDav to exfiltrate the collected data to a hardcoded C&C server.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf",
            "https://www.cyfirma.com/outofband/cosmicduke-malware-analysis/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0050/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cosmicduke"
        ],
        "uuid": "75a23886-9c93-4a6f-88ab-c540721d2392",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "cosmicduke",
    "analysis": null
};