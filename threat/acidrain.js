var threatdata = {
    "name": "AcidRain",
    "alias": "AcidRain",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "AcidRain",
        "names": [
            {
                "name": "AcidRain"
            }
        ],
        "description": "(SentinelOne) AcidRain\u2019s functionality is relatively straightforward and takes a bruteforce attempt that possibly signifies that the attackers were either unfamiliar with the particulars of the target firmware or wanted the tool to remain generic and reusable. The binary performs an in-depth wipe of the filesystem and various known storage device files. If the code is running as root, AcidRain performs an initial recursive overwrite and delete of non-standard files in the filesystem.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://www.sentinelone.com/labs/acidrain-a-modem-wiper-rains-down-on-europe/",
            "https://therecord.media/a-deeper-look-at-the-malware-being-used-on-ukrainian-targets/",
            "https://cybersecurity.att.com/blogs/labs-research/analysis-on-recent-wiper-attacks-examples-and-how-they-wiper-malware-works"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.acidrain"
        ],
        "uuid": "d5402160-095e-43cf-a6bc-86671d5e10bb",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "acidrain",
    "analysis": null
};