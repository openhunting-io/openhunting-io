var threatdata = {
    "name": "PosCardStealer",
    "alias": "PosCardStealer",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "PosCardStealer",
        "names": [
            {
                "name": "PosCardStealer"
            }
        ],
        "description": "(Panda Security) The first attack we were able to analyze took place September 30, 2015 and affected 30 PoS systems. The malware was installed using PowerShell, a popular Windows tool. With this tool the file (MD5: 0B4F921CF2537FCED9CAACA179F6DFF4) was executed, with an internal date of creation for two days before (28/09/2015 17:07:59) and compiled with C++ visuals.\n\nThe installer\u2019s job is to infect the system with malware that is specifically designed for PoS systems. To do this, it uses different techniques in function with the PoS software installed on the system. In concrete, it looks for brain.exe (pertaining to Dinerware) and scpwin.exe processes, and installs the malware as follows depending on which of the two it finds.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://www.pandasecurity.com/mediacenter/malware/poscardstealer-malware-pos/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.poscardstealer"
        ],
        "uuid": "2d486642-f5ab-4f5f-8248-8a3085e06c82",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "poscardstealer",
    "analysis": null,
    "articles": [],
    "mitre": []
};