var threatdata = {
    "name": "Tdrop2",
    "alias": "Tdrop2",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Tdrop2",
        "names": [
            {
                "name": "Tdrop2"
            }
        ],
        "description": "(Palo Alto) The new malware variant, which we call TDrop2, proceeds to select a legitimate Microsoft Windows executable in the system32 folder executes it, and then uses the legitimate executable\u2019s process as a container for the malicious code, a technique known as process hollowing. Once successfully executed, the corresponding process then attempts to retrieve the second-stage payload.\n\nThe second-stage instruction attempts to obfuscate its activity by retrieving a payload that appears to be an image file, but upon further inspection appears actually to be a portable executable.\n\nThe C2 server replaces the first two bytes, which are normally \u2018MZ\u2019, with the characters \u2018DW\u2019, which may allow this C2 activity to evade rudimentary network security solutions and thus increase the success rate of retrieval.\n\nOnce downloaded, the dropper will replace the initial two bytes prior to executing it. This second stage payload will once again perform process hollowing against a randomly selected Windows executable located in the system32 folder.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/tdrop2-attacks-suggest-dark-seoul-attackers-return/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:tdrop2"
        ],
        "uuid": "88ec0db2-4836-4b8e-b9d9-e03118c2de08",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "tdrop2",
    "analysis": null,
    "articles": [],
    "mitre": []
};