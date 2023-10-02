var threatdata = {
    "name": "Living off the Land",
    "alias": "Living off the Land, LOLBins, LOLBAS",
    "category": "Tools",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "Living off the Land",
        "names": [
            {
                "name": "Living off the Land"
            },
            {
                "name": "LOLBins"
            },
            {
                "name": "LOLBAS"
            }
        ],
        "description": "(Talos) Attackers' trends tend to come and go. But one popular technique we're seeing at this time is the use of living-off-the-land binaries \u2014 or 'LoLBins'. LoLBins are used by different actors combined with fileless malware and legitimate cloud services to improve chances of staying undetected within an organisation, usually during post-exploitation attack phases.\n\nLiving-off-the-land tactics mean that attackers are using pre-installed tools to carry out their work. This makes it more difficult for defenders to detect attacks and researchers to identify the attackers behind the campaign. In the attacks we're seeing, there are binaries supplied by the victim's operating system that are normally used for legitimate purposes, but in these cases, are being abused by the attackers.\n\n(LOLBAS Project) The goal of the LOLBAS project is to document every binary, script, and library that can be used for Living Off The Land techniques.\n\nA LOLBin/Lib/Script must:\n\n\u2022 Be a Microsoft-signed file, either native to the OS or downloaded from Microsoft.\n\u2022 Have extra 'unexpected' functionality. It is not interesting to document intended use cases.\no Exceptions are application whitelisting bypasses\n\u2022 Have functionality that would be useful to an APT or red team\n\nInteresting functionality can include:\n\n\u2022 Executing code\no Arbitrary code execution\no Pass-through execution of other programs (unsigned) or scripts (via a LOLBin)\n\u2022 Compiling code\n\u2022 File operations\no Downloading\no Upload\no Copy\n\u2022 Persistence\no Pass-through persistence utilizing existing LOLBin\no Persistence (e.g. hide data in ADS, execute at logon)\n\u2022 UAC bypass\n\u2022 Credential theft\n\u2022 Dumping process memory\n\u2022 Surveillance (e.g. keylogger, network trace)\n\u2022 Log evasion/modification\n\u2022 DLL side-loading/hijacking without being relocated elsewhere in the filesystem.",
        "category": "Tools",
        "information": [
            "https://github.com/LOLBAS-Project/LOLBAS",
            "https://lolbas-project.github.io/",
            "https://blog.talosintelligence.com/2019/11/hunting-for-lolbins.html",
            "https://www.microsoft.com/security/blog/2021/03/09/azure-lolbins-protecting-against-the-dual-use-of-virtual-machine-extensions/",
            "https://www.darkreading.com/edge-articles/is-an-attacker-living-off-your-land-",
            "https://www.cybereason.com/blog/threat-hunting-from-lolbins-to-your-crown-jewels",
            "https://pentera.io/blog/the-lol-isnt-so-funny-when-it-bites-you-in-the-bas/",
            "https://www.darkreading.com/vulnerabilities-threats/as-lotl-attacks-evolve-so-must-defenses"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:lolbin"
        ],
        "uuid": "d54e09cf-97b7-40a4-b30e-4c0a2bf0ea40",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "living_off_the_land",
    "analysis": null,
    "articles": [],
    "mitre": []
};