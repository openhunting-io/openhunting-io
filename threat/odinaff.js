var threatdata = {
    "name": "Odinaff",
    "alias": "Odinaff",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Odinaff",
        "names": [
            {
                "name": "Odinaff"
            }
        ],
        "description": "(ZDNet) Odinaff is a sophisticated Trojan which is capable of taking screenshots of infected systems between every five and 30 seconds which it sends back to a remote command-and-control server. The Trojan also downloads and executes RC4 cipher keys and can issue shell commands.\n\nOnce the Odinaff Trojan has performed the initial compromise of the infected machine, a second piece of malware known as {{Backdoor Batel}} is installed. This second malware infection is capable of running payloads solely in the memory, effectively enabling it to stealthily run in the background.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://www.zdnet.com/article/odinaff-trojan-attacks-banks-and-more-monitoring-networks-and-stealing-credentials/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.odinaff"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Odinaff"
        ],
        "uuid": "85eefecf-0a21-418d-9d4e-75360649efc3",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "odinaff",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.symantec.com/connect/blogs/odinaff-new-trojan-used-high-level-financial-attacks",
            "date": "2016-10-11",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Odinaff: New Trojan used in high level financial attacks",
            "categories": [
                "Cobalt Strike",
                "KLRD",
                "MimiKatz",
                "Odinaff"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20161223002016/https://www.symantec.com/connect/blogs/odinaff-new-trojan-used-high-level-financial-attacks",
            "date": "2016-10-11",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Odinaff: New Trojan used in high level financial attacks",
            "categories": [
                "Batel",
                "FlawedAmmyy",
                "Odinaff",
                "RMS",
                "FIN7"
            ]
        }
    ],
    "mitre": []
};