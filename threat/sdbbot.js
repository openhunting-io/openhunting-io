var threatdata = {
    "name": "SDBbot",
    "alias": "SDBbot",
    "category": "Malware",
    "type": "Backdoor, Loader, Info stealer, Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SDBbot",
        "names": [
            {
                "name": "SDBbot"
            }
        ],
        "description": "(Proofpoint) SDBbot is a new remote access Trojan (RAT) written in C++ that has been delivered by the {{Get2}} downloader in recent TA505 campaigns. Its name is derived from the debugging log file (sdb.log.txt) and DLL name (BotDLL[.]dll) used in the initial analyzed sample. It also makes use of application shimming for persistence. SDBbot is composed of three pieces: an installer, a loader, and a RAT component.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Loader",
            "Info stealer",
            "Tunneling"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/ta505-distributes-new-sdbbot-remote-access-trojan-get2-downloader",
            "https://www.cyber.gov.au/acsc/view-all-content/alerts/sdbbot-targeting-health-sector"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0461/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sdbbot"
        ],
        "uuid": "8b99f47b-f765-4128-8f44-31881f1bd3c0",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sdbbot",
    "analysis": null
};