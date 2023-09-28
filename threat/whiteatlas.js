var threatdata = {
    "name": "WhiteAtlas",
    "alias": "WhiteAtlas",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "WhiteAtlas",
        "names": [
            {
                "name": "WhiteAtlas"
            }
        ],
        "description": "(Kaspersky) The White Atlas framework often utilized a small Javascript script to execute the malware dropper payload after it was decrypted by the VBA macro code, then to delete the dropper afterwards. A much more advanced and highly obfuscated Javascript script was utilized in White Atlas samples that dropped a Firefox extension backdoor developed by Turla, but again the script was responsible for the simple tasks of writing out the extension.json configuration file for the extension and deleting itself for cleanup purposes.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://securelist.com/shedding-skin-turlas-fresh-faces/88069/"
        ],
        "uuid": "c3f21a5b-b2fa-4c71-a4bc-8295b78e10cc",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "whiteatlas",
    "analysis": null
};