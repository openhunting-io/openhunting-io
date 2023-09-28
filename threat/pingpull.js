var threatdata = {
    "name": "PingPull",
    "alias": "PingPull",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "PingPull",
        "names": [
            {
                "name": "PingPull"
            }
        ],
        "description": "(Palo Alto) PingPull has the capability to leverage three protocols (ICMP, HTTP(S) and raw TCP) for command and control (C2). While the use of ICMP tunneling is not a new technique, PingPull uses ICMP to make it more difficult to detect its C2 communications, as few organizations implement inspection of ICMP traffic on their networks. This blog provides a detailed breakdown of this new tool as well as the GALLIUM group's recent infrastructure.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/pingpull-gallium/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1031/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.pingpull"
        ],
        "uuid": "810f83c1-2cc8-44a2-9fee-e24e84dfc349",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "pingpull",
    "analysis": null
};