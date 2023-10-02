var threatdata = {
    "name": "Erebus",
    "alias": "Erebus",
    "category": "Exploits",
    "type": "Ransomware",
    "modified": "2022-02-09",
    "all_data": {
        "tool": "Erebus",
        "names": [
            {
                "name": "Erebus"
            }
        ],
        "description": "(Trend Micro) Erebus ransomware (RANSOM_EREBUS.A) first emerged last September 2016 being distributed by malvertisements (malicious advertisements). The malicious ads diverted victims to the Rig exploit kit, which infects the victim's systems with the ransomware. This Erebus variant targets 423 file types, scrambles files with RSA-2048 encryption algorithm, and appends the affected files with the .ecrypt extension. This version of Erebus was observed using compromised websites in South Korea as its command and control (C&C) servers.",
        "category": "Exploits",
        "type": [
            "Ransomware"
        ],
        "information": [
            "https://www.trendmicro.com/vinfo/us/security/news/cyber-attacks/erebus-linux-ransomware-impact-to-servers-and-countermeasures",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/erebus-resurfaces-as-linux-ransomware/",
            "https://www.bleepingcomputer.com/news/security/erebus-ransomware-utilizes-a-uac-bypass-and-request-a-90-ransom-payment/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.erebus",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.erebus"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:erebus"
        ],
        "uuid": "2436d99d-14a6-427a-839b-856c5f3d902c",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "erebus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/docs/vmw-exposing-malware-in-linux-based-multi-cloud-environments.pdf",
            "date": "2022-02-09",
            "organization": "vmware",
            "author": "VMWare",
            "title": "Exposing Malware in Linux-Based Multi-Cloud Environments",
            "categories": [
                "ACBackdoor",
                "BlackMatter",
                "DarkSide",
                "Erebus",
                "HelloKitty",
                "Kinsing",
                "PLEAD",
                "QNAPCrypt",
                "RansomEXX",
                "REvil",
                "Sysrv-hello",
                "TeamTNT",
                "Vermilion Strike",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/erebus-resurfaces-as-linux-ransomware/",
            "date": "2017-06-19",
            "organization": "Trend Micro",
            "author": "Ziv Chang",
            "title": "Erebus Resurfaces as Linux Ransomware",
            "categories": [
                "Erebus"
            ]
        },
        {
            "data_url": "https://www.bleepingcomputer.com/news/security/erebus-ransomware-utilizes-a-uac-bypass-and-request-a-90-ransom-payment/",
            "date": "2017-02-07",
            "organization": "Bleeping Computer",
            "author": "Lawrence Abrams",
            "title": "Erebus Ransomware Utilizes a UAC Bypass and Request a $90 Ransom Payment",
            "categories": [
                "Erebus"
            ]
        }
    ],
    "mitre": []
};