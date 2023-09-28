var threatdata = {
    "name": "Cannon",
    "alias": "Cannon",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Cannon",
        "names": [
            {
                "name": "Cannon"
            }
        ],
        "description": "(Palo Alto) We were able to collect a second delivery document that shared the Joohn author from the crash list(Lion Air Boeing 737).docx document, as well as the 188.241.58[.]170 C2 IP to host its remote template. Structurally this sample was very similar to the initially analyzed document, but the payload turned out to be a completely new tool which we have named Cannon.\n\nThe tool is written in C# whose malicious code exists in a namespace called cannon, which is the basis of the Trojan\u2019s name. The Trojan functions primarily as a downloader that relies on emails to communicate between the Trojan and the C2 server. To communicate with the C2 server, the Trojan will send emails to specific email addresses via SMTPS over TCP port 587. The specific functions of Cannon can be seen in Table 1. This tool also has a heavy reliance on EventHandlers with timers to run its methods in a specific order and potentially increase its evasion capability.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-sofacy-continues-global-attacks-wheels-new-cannon-trojan/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0351/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.cannon"
        ],
        "uuid": "1aec48e0-cc52-4706-944d-e04a84c41452",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "cannon",
    "analysis": null
};