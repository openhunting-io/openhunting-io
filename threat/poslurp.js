var threatdata = {
    "name": "PoSlurp",
    "alias": "PoSlurp, PUNCHTRACK, PSVC",
    "category": "Malware",
    "type": "POS malware, Backdoor, Info stealer",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "PoSlurp",
        "names": [
            {
                "name": "PoSlurp"
            },
            {
                "name": "PUNCHTRACK"
            },
            {
                "name": "PSVC"
            }
        ],
        "description": "(Trend Micro) PoSlurp scrapes credit card data processed by the PoS devices, including stored and encrypted card data prior to malware infection. Once the information is extracted from the infected system, the attackers can check and verify the validity of the data offline. PoSlurp also allows the attackers to inject other commands, access files, copy log files back to the server, and delete log files, among others.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/fin8-reemerges-with-new-pos-malware-badhatch"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0197/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.poslurp"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PoSlurp"
        ],
        "uuid": "40074bfa-a8db-4cd2-89d4-200c99d717f2",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "poslurp",
    "analysis": null
};