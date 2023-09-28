var threatdata = {
    "name": "CostaBricks",
    "alias": "CostaBricks",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "CostaBricks",
        "names": [
            {
                "name": "CostaBricks"
            }
        ],
        "description": "(BlackBerry) The loader used with 32-bit backdoors is more technically compelling. It implements a simple custom-built virtual machine mechanism that will execute an embedded bytecode to decode and inject the payload into memory.\nThis attempt at obfuscation, although not new, is rather uncommon in relation to targeted attacks. Code virtualization has been most prevalent in commercial software protectors which use much more advanced solutions; simpler virtual machines are sometimes also featured in off-the-shelf malicious packers used by widespread financial crimeware. This particular implementation, however, is unique (there are just a handful of samples in the public domain) and seems to be used only with {{SombRAT}} payloads \u2013 which makes us believe it is a custom-built tool that is private to the attackers.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://blogs.blackberry.com/en/2020/11/the-costaricto-campaign-cyber-espionage-outsourced"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0614/"
        ],
        "uuid": "3d97f5f2-fffb-4fac-9248-9c8f531d8cc7",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "costabricks",
    "analysis": null
};