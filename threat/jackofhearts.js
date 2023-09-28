var threatdata = {
    "name": "JackOfHearts",
    "alias": "JackOfHearts, SLOTHFULMEDIA",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "JackOfHearts",
        "names": [
            {
                "name": "JackOfHearts"
            },
            {
                "name": "SLOTHFULMEDIA"
            }
        ],
        "description": "(Kaspersky) JackOfHearts is the dropper associated with {{QueenOfHearts}}: its role is to write the malware somewhere on the disk (for instance: %AppData%\\mediaplayer.exe) and create a Windows service pointing to it as well as a shortcut in the startup folder that is also used to immediately launch QueenOfHearts. This shortcut is the one that contains references to a \u201cdavid\u201d user highlighted by the DHS CISA report.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://securelist.com/iamtheking-and-the-slothfulmedia-malware-family/99000/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0533/"
        ],
        "uuid": "344874b3-ab32-46b1-826d-13a9ca6b5441",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "jackofhearts",
    "analysis": null
};