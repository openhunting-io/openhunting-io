var threatdata = {
    "name": "Farseer",
    "alias": "Farseer",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Farseer",
        "names": [
            {
                "name": "Farseer"
            }
        ],
        "description": "(Palo Alto) The threat actors behind Farseer, and related malware including {{HenBox}}, continue to grow their armoury with the addition of this previously-unknown malware family. The overlapping infrastructure, shared TTPs and similarities in malicious code and configurations highlights the web of threats used to target victims in and around the South East Asia region and perhaps beyond.\n\nFarseer payloads are backdoors that beacon to pre-configured C2 servers for instructions. The malware uses various techniques to evade detection and inhibit analysis. For example, DLL sideloading using trusted, signed executables allows the malware to execute rather seamlessly; some payloads are encrypted on disk preventing analysis, especially as decompression and decryption occurs at runtime, in-memory, where code is further altered to thwart forensic analysis.\n\nWhereas HenBox posed a threat for devices running Android, Farseer is built to target Windows, which appears to be more typical given previous threats seen from the group or groups behind this, and related malware.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/farseer-previously-unknown-malware-family-bolsters-the-chinese-armoury/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.farseer"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Farseer"
        ],
        "uuid": "3de28b40-0bda-4ae0-a87d-8e67085b5c7a",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "farseer",
    "analysis": null
};