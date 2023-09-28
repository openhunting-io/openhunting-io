var threatdata = {
    "name": "Tomiris",
    "alias": "Tomiris",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-04-26",
    "all_data": {
        "tool": "Tomiris",
        "names": [
            {
                "name": "Tomiris"
            }
        ],
        "description": "(Kaspersky) Tomiris is a backdoor written in Go whose role is to continuously query its C2 server for executables to download and execute on the victim system. Before performing any operations, it sleeps for at least nine minutes in a possible attempt to defeat sandbox-based analysis systems.\n(Kaspersky) The backdoor, dubbed Tomiris, bears a number of similarities to the second-stage malware, Sunshuttle (aka {{GoldMax}}), used by DarkHalo last year. However, there are also a number of overlaps between Tomiris and {{Kazuar}}, a backdoor that has been linked to the Turla APT threat actor. None of the similarities is enough to link Tomiris and Sunshuttle with high confidence. However, taken together they suggest the possibility of common authorship or shared development practices.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/darkhalo-after-solarwinds-the-tomiris-connection/104311/",
            "https://securelist.com/apt-trends-report-q3-2021/104708/",
            "https://securelist.com/tomiris-called-they-want-their-turla-malware-back/109552/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0671/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.tomiris"
        ],
        "uuid": "ef8ea9c8-3129-4a0a-b6ac-de68286feb5e",
        "last-card-change": "2023-04-26",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "tomiris",
    "analysis": null
};