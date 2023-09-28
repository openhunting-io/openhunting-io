var threatdata = {
    "name": "GoldFinder",
    "alias": "GoldFinder",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "GoldFinder",
        "names": [
            {
                "name": "GoldFinder"
            }
        ],
        "description": "(Microsoft) Another tool written in Go, GoldFinder was most likely used as a custom HTTP tracer tool that logs the route or hops that a packet takes to reach a hardcoded C2 server. When launched, the malware issues an HTTP request for a hardcoded IP address (e.g., hxxps://185[.]225[.]69[.]69/) and logs the HTTP response to a plaintext log file (e.g., loglog.txt created in the present working directory).",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2021/03/04/goldmax-goldfinder-sibot-analyzing-nobelium-malware/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0597/"
        ],
        "uuid": "6cb4acd2-9c86-4cf4-a037-4107feac5704",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "goldfinder",
    "analysis": null
};