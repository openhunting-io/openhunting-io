var threatdata = {
    "name": "Volgmer",
    "alias": "Volgmer, Manuscrypt",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration, Botnet",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Volgmer",
        "names": [
            {
                "name": "Volgmer"
            },
            {
                "name": "Manuscrypt"
            }
        ],
        "description": "(US-CERT) Volgmer is a backdoor Trojan designed to provide covert access to a compromised system. Since at least 2013, HIDDEN COBRA actors have been observed using Volgmer malware in the wild to target the government, financial, automotive, and media industries.\n\nIt is suspected that spear phishing is the primary delivery mechanism for Volgmer infections; however, HIDDEN COBRA actors use a suite of custom tools, some of which could also be used to initially compromise a system. Therefore, it is possible that additional HIDDEN COBRA malware may be present on network infrastructure compromised with Volgmer.\n\nAs a backdoor Trojan, Volgmer has several capabilities including: gathering system information, updating service registry keys, downloading and uploading files, executing commands, terminating processes, and listing directories. In one of the samples received for analysis, the US-CERT Code Analysis Team observed botnet controller functionality.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Botnet"
        ],
        "information": [
            "https://www.us-cert.gov/ncas/alerts/TA17-318B",
            "https://securelist.com/operation-applejeus/87553/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0180/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.volgmer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:volgmer"
        ],
        "uuid": "4bfc72e1-fc12-4f92-93da-19b30ff82786",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "volgmer",
    "analysis": null
};