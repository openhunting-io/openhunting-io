var threatdata = {
    "name": "HiKit",
    "alias": "HiKit",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "HiKit",
        "names": [
            {
                "name": "HiKit"
            }
        ],
        "description": "(Novetta) Hikit consists of at least two generations of malware that provides basic RAT functionality. The first generation of Hikit (referred to as \u201cGen 1\u201d) operates as a server and requires an externally exposed network interface in order for an attacker to access the victim machine. The second generation of Hikit (referred to as \u201cGen 2\u201d) uses the more traditional client model and beacons out to an attacker\u2019s C2 server. While the communication models shifted dramatically between Gen 1 and Gen 2, both generations of Hikit retain the same basic RAT function consisting of remote command shell, file management, network proxy and port forwarding.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.novetta.com/wp-content/uploads/2014/11/HiKit.pdf",
            "https://www.recordedfuture.com/hidden-lynx-analysis/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0009/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.hikit"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:hikit"
        ],
        "uuid": "4b11af2b-ef10-4160-ac62-046b4289e683",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "hikit",
    "analysis": null
};