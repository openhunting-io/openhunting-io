var threatdata = {
    "name": "Sneepy",
    "alias": "Sneepy, ByeByeShell",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Sneepy",
        "names": [
            {
                "name": "Sneepy"
            },
            {
                "name": "ByeByeShell"
            }
        ],
        "description": "(Rapid7) The main backdoor installed and executed on the victims' systems appears to be a custom reverse shell with just a handful of features. Due to a lack of public literature about this case, I decided to dub this family as ByeByeShell.\n\nWhen disassembling the binary you can quickly understand the mechanics of the backdoor. After some quick initialization, the backdoor XORs an embedded string with 0x9D to extract the IP address of the C&C server. Subsequently it establishes a connection to it (generally on port 80) and checks in with some basic information about the system.\n\nAfter the check-in message is sent, the malware enters a continuous loop in which it will keep silently waiting for commands from the open socket connection. From now on, it expects some manual interaction from the attacker.\n\nThe supported commands are:\n\u2022 shell\n\u2022 comd\n\u2022 sleep\n\u2022 quit\n\u2022 kill",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://blog.rapid7.com/2013/08/19/byebye-and-the-targeting-of-pakistan/",
            "https://researchcenter.paloaltonetworks.com/2016/09/unit42-confucius-says-malware-families-get-further-by-abusing-legitimate-websites/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sneepy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:sneepy"
        ],
        "uuid": "a14d2307-9669-4ae7-afd3-f2af09e498b2",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sneepy",
    "analysis": null,
    "articles": [],
    "mitre": []
};