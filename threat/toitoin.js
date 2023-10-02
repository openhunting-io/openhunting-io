var threatdata = {
    "name": "TOITOIN",
    "alias": "TOITOIN",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Info stealer, Credential stealer",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "TOITOIN",
        "names": [
            {
                "name": "TOITOIN"
            }
        ],
        "description": "(Zscaler) In the ever-evolving landscape of cyber threats, researchers from Zscaler ThreatLabz have recently uncovered a concerning development: a new targeted attack campaign striking businesses in the Latin American (LATAM) region. This sophisticated campaign employs a trojan that follows a multi-staged infection chain, utilizing specially crafted modules throughout each stage. These modules are custom designed to carry out malicious activities, such as injecting harmful code into remote processes, circumventing User Account Control via COM Elevation Moniker, and evading detection by Sandboxes through clever techniques like system reboots and parent process checks. The ultimate payload of this campaign is a new Latin American Trojan called TOITOIN, which incorporates a unique XOR decryption technique to decode its configuration file. Once decrypted, the trojan gathers crucial system information, as well as data pertaining to installed browsers and the Topaz OFD Protection Module, before sending it to the command and control server of the attackers in an encoded format.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.zscaler.com/blogs/security-research/toitoin-trojan-analyzing-new-multi-stage-attack-targeting-latam-region"
        ],
        "uuid": "75cbad82-cb51-401e-ac27-4cc29b29b1c3",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "toitoin",
    "analysis": null,
    "articles": [],
    "mitre": []
};