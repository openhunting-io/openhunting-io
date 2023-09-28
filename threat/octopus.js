var threatdata = {
    "name": "Octopus",
    "alias": "Octopus",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Octopus",
        "names": [
            {
                "name": "Octopus"
            }
        ],
        "description": "(Kaspersky) The name was originally coined by ESET in 2017 after the 0ct0pus3.php script used by the actor on their old C2 servers.\n\nIn the case of Octopus, DustSquad used Delphi as their programming language of choice, which is unusual for such an actor.\n\nIn April 2018 we discovered a new Octopus sample pretending to be Telegram Messenger with a Russian interface. We couldn\u00b4t find any legitimate software that this malware appears to be impersonating; in fact, we don\u00b4t believe it exists. The Trojan uses third-party Delphi libraries like The Indy Project for JSON-based C2 communications and TurboPower Abbrevia (sourceforge.net/projects/tpabbrevia) for compression. Malware persistence is basic and achieved via the system registry. The server side uses commercial hosting in different countries with .php scripts deployed.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/octopus-infested-seas-of-central-asia/88200/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0340/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.octopus"
        ],
        "uuid": "3d3bf55f-402e-4122-a52b-196aed8e6507",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "octopus",
    "analysis": null
};