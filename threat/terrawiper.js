var threatdata = {
    "name": "TerraWiper",
    "alias": "TerraWiper",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2020-07-10",
    "all_data": {
        "tool": "TerraWiper",
        "names": [
            {
                "name": "TerraWiper"
            }
        ],
        "description": "(QuoINT) In October 2018 while hunting for {{TerraCrypt}} variants we discovered a wiper malware we dubbed TerraWiper. TerraWiper is a Master Boot Record (MBR) wiper compiled from PureBasic, and it uses a slightly different version of the obfuscator used for TerraLoader variants. TerraWiper samples attempt to render a machine unbootable by zero-ing its MBR. Therefore, it would be possible for an infected computer to easily recover the data, or to make the machine boot again by fixing its MBR.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://quointelligence.eu/2020/01/the-chicken-keeps-laying-new-eggs-uncovering-new-gc-maas-tools-used-by-top-tier-threat-actors/"
        ],
        "uuid": "20f5dc28-f743-4940-ae85-6c77d0223dc2",
        "last-card-change": "2020-07-10",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "terrawiper",
    "analysis": null
};