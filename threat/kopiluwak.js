var threatdata = {
    "name": "KopiLuwak",
    "alias": "KopiLuwak",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "KopiLuwak",
        "names": [
            {
                "name": "KopiLuwak"
            }
        ],
        "description": "(Kaspersky) The KopiLuwak script is decoded by macro code very similar to that previously seen with {{IcedCoffee}}, but the resulting script is not the final step. This script is executed with a parameter used as a key to RC4 decrypt an additional layer of javascript that contains the system information collection and command and control beaconing functionality. KopiLuwak performs a more comprehensive system and network reconnaissance collection, and like IcedCoffee leaves very little on disk for investigators to discover other than the base script.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/shedding-skin-turlas-fresh-faces/88069/",
            "https://securelist.com/blog/research/77429/kopiluwak-a-new-javascript-payload-from-turla/",
            "https://www.proofpoint.com/us/threat-insight/post/turla-apt-actor-refreshes-kopiluwak-javascript-backdoor-use-g20-themed-attack"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/js.kopiluwak"
        ],
        "uuid": "bf8419b4-0007-4045-bf5f-646e9bfbdc07",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "kopiluwak",
    "analysis": null
};