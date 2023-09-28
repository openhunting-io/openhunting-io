var threatdata = {
    "name": "MiniDuke",
    "alias": "MiniDuke",
    "category": "Malware",
    "type": "Downloader, Backdoor",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "MiniDuke",
        "names": [
            {
                "name": "MiniDuke"
            }
        ],
        "description": "(F-Secure) The MiniDuke toolset consists of multiple downloader and backdoor components, which are commonly referred to as the MiniDuke \u201cstage 1\u201d, \u201cstage 2\u201d, and \u201cstage 3\u201d components as per Kaspersky\u2019s original MiniDuke whitepaper. Additionally, a specific loader is often associated with the MiniDuke toolset and is referred to as the \u201cMiniDuke loader\u201d.\n\nWhile the loader has often been used together with other MiniDuke components, it has also commonly been used in conjunction with {{CosmicDuke}} and {{PinchDuke}}. In fact, the oldest samples of the loader that we have found were used with PinchDuke. To avoid confusion however, we have decided to continue referring to the loader as the \u201cMiniDuke loader\u201d.\n\nTwo details about MiniDuke components are worth noting. Firstly, some of the MiniDuke components were written in Assembly language. While many malware were written in Assembly during the \u2018old days\u2018 of curiosity-driven virus writing, it has since become a rarity. Secondly, some of the MiniDuke components do not contain a hardcoded C&C server address, but instead obtain the address of a current C&C server via Twitter. The use of Twitter either to initially obtain the address of a C&C server (or as a backup if no hardcoded primary C&C server responds) is a feature also found in {{OnionDuke}}, {{CozyDuke}}, and {{HammerDuke}}.",
        "category": "Malware",
        "type": [
            "Downloader",
            "Backdoor"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf",
            "https://securelist.com/the-miniduke-mystery-pdf-0-day-government-spy-assembler-0x29a-micro-backdoor/31112/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0051/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.miniduke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:miniduke"
        ],
        "uuid": "a5e00272-5532-4ea6-a45c-4fe8231772a4",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "miniduke",
    "analysis": null
};