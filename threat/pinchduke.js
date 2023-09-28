var threatdata = {
    "name": "PinchDuke",
    "alias": "PinchDuke",
    "category": "Malware",
    "type": "Loader, Info stealer, Credential stealer, Exfiltration",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "PinchDuke",
        "names": [
            {
                "name": "PinchDuke"
            }
        ],
        "description": "(F-Secure) The PinchDuke toolset consists of multiple loaders and a core information stealer trojan. The loaders associated with the PinchDuke toolset have also been observed being used with {{CosmicDuke}}.\n\nThe PinchDuke information stealer gathers system configuration information, steals user credentials, and collects user files from the compromised host transferring these via HTTP(S) to a C&C server. We believe PinchDuke\u2019s credential stealing functionality is based on the source code of the Pinch credential stealing malware (also known as LdPinch) that was developed in the early 2000s and has later been openly distributed on underground forums.\n\nCredentials targeted by PinchDuke include ones associated with the following software or services:\n\u2022 The Bat!\n\u2022 Yahoo!\n\u2022 Mail.ru\n\u2022 Passport.Net\n\u2022 Google Talk\n\u2022 Netscape Navigator\n\u2022 Mozilla Firefox\n\u2022 Mozilla Thunderbird\n\u2022 Internet Explorer\n\u2022 Microsoft Outlook\n\u2022 WinInet Credential Cache\n\u2022 Lightweight Directory Access Protocol (LDAP)\n\nPinchDuke will also search for files that have been created within a predefined timeframe and whose file extension is present in a predefined list.",
        "category": "Malware",
        "type": [
            "Loader",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0048/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pinchduke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PinchDuke"
        ],
        "uuid": "ab078dbf-23c7-41b1-9be0-667ec1ca050c",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "pinchduke",
    "analysis": null
};