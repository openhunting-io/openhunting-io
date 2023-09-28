var threatdata = {
    "name": "CozyDuke",
    "alias": "CozyDuke, CozyCar, CozyBear, Cozer, EuroAPT",
    "category": "Malware",
    "type": "Backdoor, Credential stealer, Keylogger, Remote command",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "CozyDuke",
        "names": [
            {
                "name": "CozyDuke"
            },
            {
                "name": "CozyCar"
            },
            {
                "name": "CozyBear"
            },
            {
                "name": "Cozer"
            },
            {
                "name": "EuroAPT"
            }
        ],
        "description": "(F-Secure) CozyDuke is not simply a malware toolset; rather, it is a modular malware platform formed around a core backdoor component. This component can be instructed by the C&C server to download and execute arbitrary modules, and it is these modules that provide CozyDuke with its vast array of functionality. Known CozyDuke modules include:\n\u2022 Command execution module for executing arbitrary Windows Command Prompt commands\n\u2022 Password stealer module\n\u2022 NT LAN Manager (NTLM) hash stealer module\n\u2022 System information gathering module\n\u2022 Screenshot module\n\nIn addition to modules, CozyDuke can also be instructed to download and execute other, independent executables. In some observed cases, these executables were self-extracting archive files containing common hacking tools, such as {{PsExec}} and {{Mimikatz}}, combined with script files that execute these tools. In other cases, CozyDuke has been observed downloading and executing tools from other toolsets used by the Dukes such as {{OnionDuke}}, {{SeaDuke}}, and {{HammerDuke}}.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Credential stealer",
            "Keylogger",
            "Remote command"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0046/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cozyduke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:cozyduke"
        ],
        "uuid": "d6e64a22-315a-4384-8d4f-9803fb281b45",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "cozyduke",
    "analysis": null
};