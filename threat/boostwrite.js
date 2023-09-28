var threatdata = {
    "name": "Boostwrite",
    "alias": "Boostwrite",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2020-04-22",
    "all_data": {
        "tool": "Boostwrite",
        "names": [
            {
                "name": "Boostwrite"
            }
        ],
        "description": "(FireEye) An in-memory-only dropper that decrypts embedded payloads using an encryption key retrieved from a remote server at runtime. FIN7 has been observed making small changes to this malware family using multiple methods to avoid traditional antivirus detection, including a BOOSTWRITE sample where the dropper was signed by a valid Certificate Authority. One of the analyzed BOOSTWRITE variants contained two payloads: {{Carbanak}} and {{RDFSNIFFER}}.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2019/10/mahalo-fin7-responding-to-new-tools-and-techniques.html"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0415/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.boostwrite"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:BOOSTWRITE"
        ],
        "uuid": "2df5d2a9-b01b-46ff-b2e1-d1c332db8479",
        "last-card-change": "2020-04-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "boostwrite",
    "analysis": null
};