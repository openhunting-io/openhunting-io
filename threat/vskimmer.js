var threatdata = {
    "name": "vSkimmer",
    "alias": "vSkimmer",
    "category": "Malware",
    "type": "POS malware, Reconnaissance, Backdoor, Credential stealer, Botnet",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "vSkimmer",
        "names": [
            {
                "name": "vSkimmer"
            }
        ],
        "description": "(XyliBox) Functions:\n- Track 2 grabber\n- HTTP Loader (Download & Execute)\n- Update bot itself\n\nWorking Modes:\n- Online: If internet is reachable it will try to bypass firewalls and communicate to a the control panel.\n- Offline: If internet is not reachable it wait for a specific pendrive/flashdrive plugged in and copy logs to it.\n\nServer coded in PHP (can be modified on request to send logs to remote server, via smtp, etc.. )\nClient coded in C++ no dependencies, 66kb, cryptable. (can be customized)",
        "category": "Malware",
        "type": [
            "POS malware",
            "Reconnaissance",
            "Backdoor",
            "Credential stealer",
            "Botnet"
        ],
        "information": [
            "https://www.xylibox.com/2013/01/vskimmer.html",
            "http://vkremez.weebly.com/cyber-security/-backdoor-win32hesetoxa-vskimmer-pos-malware-analysis",
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf",
            "https://www.secureworks.com/research/point-of-sale-malware-threats"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.vskimmer"
        ],
        "uuid": "680688a9-239b-49e8-bc5a-37af1fd852c1",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "vskimmer",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://vkremez.weebly.com/cyber-security/-backdoor-win32hesetoxa-vskimmer-pos-malware-analysis",
            "date": "2015-12-26",
            "organization": "Flashpoint",
            "author": "Vitali Kremez",
            "title": "Backdoor: Win32/Hesetox.A: vSkimmer POS Malware Analysis \ufeff",
            "categories": [
                "vSkimmer"
            ]
        },
        {
            "data_url": "https://securingtomorrow.mcafee.com/mcafee-labs/vskimmer-botnet-targets-credit-card-payment-terminals/",
            "date": "2013-03-21",
            "organization": "McAfee",
            "author": "McAfee",
            "title": "VSkimmer Botnet Targets Credit Card Payment Terminals",
            "categories": [
                "vSkimmer"
            ]
        },
        {
            "data_url": "http://www.xylibox.com/2013/01/vskimmer.html",
            "date": "2013-01-25",
            "organization": "",
            "author": "Xylitol",
            "title": "vSkimmer, Another POS malware",
            "categories": [
                "vSkimmer"
            ]
        }
    ],
    "mitre": []
};