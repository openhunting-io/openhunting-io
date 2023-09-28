var threatdata = {
    "name": "BendyBear",
    "alias": "BendyBear",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "BendyBear",
        "names": [
            {
                "name": "BendyBear"
            }
        ],
        "description": "(Palo Alto) The BendyBear sample was determined to be x64 shellcode for a stage-zero implant whose sole function is to download a more robust implant from a command and control (C2) server. Shellcode, despite its name, is used to describe the small piece of code loaded onto the target immediately following exploitation, regardless of whether or not it actually spawns a command shell. At 10,000+ bytes, BendyBear is noticeably larger than most, and uses its size to implement advanced features and anti-analysis techniques, such as modified RC4 encryption, signature block verification, and polymorphic code.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/bendybear-shellcode-blacktech/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0574/"
        ],
        "playbook": [
            "https://pan-unit42.github.io/playbook_viewer/?pb=bendybear"
        ],
        "uuid": "8a45f278-6be3-4157-896d-9af9ec672f29",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "bendybear",
    "analysis": null
};