var threatdata = {
    "name": "Vatet",
    "alias": "Vatet",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-04-23",
    "all_data": {
        "tool": "Vatet",
        "names": [
            {
                "name": "Vatet"
            }
        ],
        "description": "(Palo Alto) Vatet is a custom loader that executes XOR encoded shellcode from the local disk or a network share. The loaders are typically open source applications found on GitHub, or other repositories, that the actors modify to load their shellcode. In most cases, the payload winds up being {{Cobalt Strike}} beacons and/or stagers, but some of the more recent payloads have been an updated version of the {{PyXie}} RAT. Vatet is often a precursor to enterprise-wide ransomware attacks.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/vatet-pyxie-defray777/",
            "https://www.microsoft.com/security/blog/2020/04/28/ransomware-groups-continue-to-target-healthcare-critical-services-heres-how-to-reduce-risk/"
        ],
        "uuid": "c026fd46-4d84-4351-85e7-5126e85f6d1b",
        "last-card-change": "2021-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "vatet",
    "analysis": null
};