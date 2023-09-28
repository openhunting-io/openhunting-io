var threatdata = {
    "name": "KINS",
    "alias": "KINS, Maple, Zeus.Maple, Kasper Internet Non-Security",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "KINS",
        "names": [
            {
                "name": "KINS"
            },
            {
                "name": "Maple"
            },
            {
                "name": "Zeus.Maple"
            },
            {
                "name": "Kasper Internet Non-Security"
            }
        ],
        "description": "(IBM) Trusteer researcher Avidan Avraham, who conducted a thorough analysis on the new variant, explains that ZeuS.Maple is a heavily modified version of {{Zeus}} 2.0.8.9. It implements unique browser re-patching techniques (browser patching is a method of stealing information from browser sessions; re-patching ensures the patch stays in place), an alternative naming generation algorithm, different anti-debugging and new anti-VM capabilities. It uses an encrypted configuration stored in the Windows registry, and in order to remain stealthy, ZeuS.Maple distribution in the wild is limited and controlled.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://securityintelligence.com/zeus-maple-variant-targets-canadian-online-banking-customers/",
            "https://github.com/nyx0/KINS"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.kins"
        ],
        "uuid": "0a94f5ac-0390-4c90-aeea-1e41652dc492",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "kins",
    "analysis": null
};