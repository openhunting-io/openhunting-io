var threatdata = {
    "name": "BreachRAT",
    "alias": "BreachRAT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "BreachRAT",
        "names": [
            {
                "name": "BreachRAT"
            }
        ],
        "description": "(FireEye) The payload is a backdoor that we call the Breach Remote Administration Tool (BreachRAT) written in C++. We had not previously observed this payload used by these threat actors. The malware name is derived from the hardcoded PDB path found in the RAT: C:\\Work\\Breach Remote Administration Tool\\Release\\Client.pdb. This RAT communicates with 5.189.145.248, a command and control (C2) IP address that this group has used previously with other malware, including {{DarkComet}} and {{njRAT}}.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2016/06/apt_group_sends_spea.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.breach_rat"
        ],
        "uuid": "807e9d0d-79f0-4da5-91c7-c8c073fc6782",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "breachrat",
    "analysis": null
};