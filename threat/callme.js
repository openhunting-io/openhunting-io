var threatdata = {
    "name": "CallMe",
    "alias": "CallMe",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "CallMe",
        "names": [
            {
                "name": "CallMe"
            }
        ],
        "description": "(Palo Alto) CallMe is a Trojan designed to run on the Apple OSX operating system. This Trojan was delivered in targeted attacks on Uyghur activists in 2013 and used infrastructure associated with {{FakeM}}.\n\nIn February 2013, AlienVault performed analysis on the CallMe Trojan and found that it is based on a tool called Tiny SHell, an OSX shell tool whose source code is available on the Internet. The Trojan uses AES to encrypt the communication channel its C2 server, which will provide one of three commands to carry out activities on the compromised system.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/scarlet-mimic-years-long-espionage-targets-minority-activists/",
            "https://cybersecurity.att.com/blogs/labs-research/cyber-espionage-campaign-against-the-uyghur-community-targeting-macosx-syst"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0609"
        ],
        "uuid": "631376c6-c3e1-4edb-804a-bf09c77fc2a5",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "callme",
    "analysis": null
};