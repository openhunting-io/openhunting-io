var threatdata = {
    "name": "SPINNER",
    "alias": "SPINNER",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Exfiltration",
    "modified": "2022-07-19",
    "all_data": {
        "tool": "SPINNER",
        "names": [
            {
                "name": "SPINNER"
            }
        ],
        "description": "(Check Point) Many of the functions inside the final payload share similar logic with the SPINNER variant described above, but the payload lacks the compiler-level obfuscations observed in the newer campaign making it easier to analyze. Furthermore, the previous version of the backdoor contains additional features. This is another indication that the initial SPINNER backdoor version we observed is only a part of the bigger payload. It\u2019s likely the actors eventually split the payload and only equipped the first stage of the main backdoor with essential functions: enumeration of the victim\u2019s machine and execution of the next stage payloads received from the C&C server.\n\nThe full version of the SPINNER backdoor contains the following capabilities:\n\u2022 Collects information about the infected machine (enumerate disks, files).\n\u2022 Exfiltrates files from the infected machine and manipulates the local files.\n\u2022 Runs OS commands and executes downloaded payload, as part of typical backdoor capabilities.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://research.checkpoint.com/2022/twisted-panda-chinese-apt-espionage-operation-against-russians-state-owned-defense-institutes/"
        ],
        "uuid": "783d3b2e-0298-469d-84b5-e10fa395d6e3",
        "last-card-change": "2022-07-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "spinner",
    "analysis": null,
    "articles": [],
    "mitre": []
};