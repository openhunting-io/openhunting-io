var threatdata = {
    "name": "Sysmain",
    "alias": "Sysmain",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Sysmain",
        "names": [
            {
                "name": "Sysmain"
            }
        ],
        "description": "(Kaspersky) The autonomous part of Sysmain installs and registers itself to be persistent in the system. Then it gathers general information about the victims system, like\n\u2022 User- and computer names\n\u2022 Locale information\n\u2022 Network- and drive status\n\u2022 Default browsers\n\u2022 Running processes\n\u2022 File listing of the users profile directory.\n\nWhen ready, this data is submitted to one of the C&C-servers. After that, it checks periodically for new commands from C&C (pulling via HTTP).\n\nWith a set of 11 commands, the malware is able to:\n\u2022 Execute shell-commands\n\u2022 Launch additional executables or libraries (sent by the attacker)\n\u2022 Collect arbitrary files for later exfiltration\n\u2022 Examine the victim\u2019s filesystem.\n\nThere are also commands used for maintenance purposes. Among others, there are commands to change the pubkey for C&C-communication or delete its traces in the registry.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/08080817/EB-YetiJuly2014-Public.pdf"
        ],
        "uuid": "0290ce40-4114-48ba-a170-d1c40ca57a7d",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sysmain",
    "analysis": null,
    "articles": [],
    "mitre": []
};