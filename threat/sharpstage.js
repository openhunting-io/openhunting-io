var threatdata = {
    "name": "SharpStage",
    "alias": "SharpStage",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "SharpStage",
        "names": [
            {
                "name": "SharpStage"
            }
        ],
        "description": "(Cybereason) The dropper downloaded from the SharpStage C2 has several backdoor capabilities including implementation of a Dropbox client API along with a check for the presence of the Arabic language in order to execute only on desired targets and to evade sandbox detection, as the default language setting is usually English.\nPrior to the language check, the backdoor automatically captures the screen and saves the image in the %temp% folder.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.cybereason.com/hubfs/dam/collateral/reports/Molerats-in-the-Cloud-New-Malware-Arsenal-Abuses-Cloud-Platforms-in-Middle-East-Espionage-Campaign.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0546/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sharpstage"
        ],
        "uuid": "ee189bfb-8bcc-45eb-bb38-ff8fe5da63c1",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sharpstage",
    "analysis": null
};