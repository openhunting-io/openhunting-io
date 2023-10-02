var threatdata = {
    "name": "IcedCoffee",
    "alias": "IcedCoffee",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "IcedCoffee",
        "names": [
            {
                "name": "IcedCoffee"
            }
        ],
        "description": "(Kaspersky) IcedCoffee is a fairly basic backdoor which uses WMI to collect a variety of system and user information from the system, which is then encoded with base64, encrypted with RC4 and submitted via HTTP POST to the C2 server. IcedCoffee has no built-in command capability, instead it may receive javascript files from the C2 server, which are deobfuscated and executed in memory, leaving nothing behind on disk for forensic analysis. IcedCoffee was not widely deployed, rather it was targeted at diplomats, including Ambassadors, of European governments.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/shedding-skin-turlas-fresh-faces/88069/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:icedcoffee"
        ],
        "uuid": "7576109c-8a9f-49eb-9f4f-bb382535bcf5",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "icedcoffee",
    "analysis": null,
    "articles": [],
    "mitre": []
};