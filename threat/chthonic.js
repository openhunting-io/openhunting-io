var threatdata = {
    "name": "Chthonic",
    "alias": "Chthonic, AndroKINS",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Chthonic",
        "names": [
            {
                "name": "Chthonic"
            },
            {
                "name": "AndroKINS"
            }
        ],
        "description": "(Kaspersky) In the fall of 2014, we discovered a new banking Trojan, which caught our attention for two reasons:\n\u2022 First, it is interesting from the technical viewpoint, because it uses a new technique for loading modules.\n\u2022 Second, an analysis of its configuration files has shown that the malware targets a large number of online-banking systems: over 150 different banks and 20 payment systems in 15 countries. Banks in the UK, Spain, the US, Russia, Japan and Italy make up the majority of its potential targets.\n\nKaspersky Lab products detect the new banking malware as Trojan-Banker.Win32.Chthonic.\n\nThe Trojan is apparently an evolution of {{ZeusVM}}, although it has undergone a number of significant changes. Chthonic uses the same encryptor as {{Andromeda}} bots, the same encryption scheme as Zeus AES and Zeus V2 Trojans, and a virtual machine similar to that used in ZeusVM and {{KINS}} malware.",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://securelist.com/chthonic-a-new-modification-of-zeus/68176/",
            "https://www.proofpoint.com/us/threat-insight/post/threat-actors-using-legitimate-paypal-accounts-to-distribute-chthonic-banking-trojan",
            "https://www.s21sec.com/en/blog/2017/07/androkins/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.chthonic"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:chthonic"
        ],
        "uuid": "56684ac2-715b-418e-a3e5-34af3ee7b408",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "chthonic",
    "analysis": null
};