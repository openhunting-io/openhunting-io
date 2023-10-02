var threatdata = {
    "name": "Serveo",
    "alias": "Serveo",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Serveo",
        "names": [
            {
                "name": "Serveo"
            }
        ],
        "description": "(ClearSky) Serveo is a free tool for opening outside-facing servers and applications on a corporate network, whether on localhost or elsewhere. Unlike {{Ngrok}}, Serveo is an SSH-only server; also, any port that will be defined to it (safe for 22, 80, and 443 which are accessible from outside) will get another, unassigned TCP port instead. Using this service, the attacker was operating different services inside the network. Thus, for instance, the attacker had operated an RDP connection through the localhost on port 3389 (RDP); using Serveo, the attacker has opened this RDP for the outside world through port 12618 (TCP). The attacker has opened an SSH tunneling to another port in order to maintain an encrypted RDP on the attacked target.\n\nMoreover, like with the backdoor that had hardcoded and predefined credentials, here too the attacker separated every server that was opened to the outside world.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.clearskysec.com/wp-content/uploads/2020/02/ClearSky-Fox-Kitten-Campaign-v1.pdf"
        ],
        "uuid": "6f8f3241-ca9b-4fab-9a7e-ede5321c8b9c",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "serveo",
    "analysis": null,
    "articles": [],
    "mitre": []
};