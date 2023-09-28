var threatdata = {
    "name": "HammerDuke",
    "alias": "HammerDuke, HAMMERTOSS, NetDuke, tDiscoverer",
    "category": "Malware",
    "type": "Backdoor, Loader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "HammerDuke",
        "names": [
            {
                "name": "HammerDuke"
            },
            {
                "name": "HAMMERTOSS"
            },
            {
                "name": "NetDuke"
            },
            {
                "name": "tDiscoverer"
            }
        ],
        "description": "(F-Secure) HammerDuke is a simple backdoor that is apparently designed for similar use cases as SeaDuke. Specifically, the only known infection vector for HammerDuke is to be downloaded and executed by CozyDuke onto a victim that has already been compromised by that toolset. This, together with HammerDuke\u2019s simplistic backdoor functionality, suggests that it is primarily used by the Dukes group as a secondary backdoor left on {{CozyDuke}} victims after CozyDuke performed the initial infection and stole any readily available information from them.\n\nHammerDuke is however interesting because it is written in .NET, and even more so because of its occasional use of Twitter as a C&C communication channel. Some HammerDuke variants only contain a hardcoded C&C server address from which they will retrieve commands, but other HammerDuke variants will first use a custom algorithm to generate a Twitter account name based on the current date. If the account exists, HammerDuke will then search for tweets from that account with links to image files that contain embedded commands for the toolset to execute.\n\nHammerDuke\u2019s use of Twitter and crafted image files is reminiscent of other Duke toolsets. Both {{OnionDuke}} and {{MiniDuke}} also use date-based algorithms to generate Twitter account names and then searched for any tweets from those accounts that linked to image files. In contrast however, for OnionDuke and MiniDuke the linked image files contain embedded malware to be downloaded and executed, rather than instructions.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader"
        ],
        "information": [
            "https://blog-assets.f-secure.com/wp-content/uploads/2020/03/18122307/F-Secure_Dukes_Whitepaper.pdf",
            "https://paper.seebug.org/papers/APT/APT_CyberCriminal_Campagin/2015/apt29-hammertoss-stealthy-tactics-define-a.pdf",
            "https://www2.fireeye.com/rs/848-DID-242/images/rpt-apt29-hammertoss.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0037/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tdiscoverer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:HammerDuke"
        ],
        "uuid": "1e6b6d4a-107d-4162-a46f-364df9138fc0",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "hammerduke",
    "analysis": null
};