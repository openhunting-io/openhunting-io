var threatdata = {
    "name": "STASHLOG",
    "alias": "STASHLOG",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "STASHLOG",
        "names": [
            {
                "name": "STASHLOG"
            }
        ],
        "description": "(Cybereason) STASHLOG (shiver.exe / forsrv.exe) is a 32 bit executable that is being used to prepare the victim machine for further compromise, and to \u201cstash\u201d a malicious, encrypted payload to a CLFS log file. This payload will be decrypted at each phase to deliver the next phase in the infection.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.cybereason.com/blog/operation-cuckoobees-a-winnti-malware-arsenal-deep-dive",
            "https://www.mandiant.com/resources/unknown-actor-using-clfs-log-files-for-stealth"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.stashlog"
        ],
        "uuid": "073125dd-411b-4292-bb14-5b42780ee33d",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "stashlog",
    "analysis": null
};