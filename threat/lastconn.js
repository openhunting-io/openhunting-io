var threatdata = {
    "name": "LastConn",
    "alias": "LastConn",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Downloader",
    "modified": "2021-08-10",
    "all_data": {
        "tool": "LastConn",
        "names": [
            {
                "name": "LastConn"
            }
        ],
        "description": "(Proofpoint) Based on Proofpoint visibility, the campaigns occurred on a weekly basis throughout early 2021 before abruptly stopping in March for a two-month hiatus. TA402, also known as Molerats and GazaHackerTeam, resumed email threat campaigns in early June 2021 with continued use of malware Proofpoint dubbed LastConn. Researchers assess with high confidence LastConn is an updated version of {{SharpStage}} malware first reported by Cybereason in December 2020.\n\nLastConn malware is specifically targeted at computers with an Arabic language pack installed to ensure it only infects specific targets. It uses Dropbox for all command and control (C2) capabilities and infrastructure. Proofpoint researchers assess LastConn is very actively developed and maintained malware. It features multiple capabilities that attempt to prevent both automated and manual malware analysis.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Downloader"
        ],
        "information": [
            "https://www.proofpoint.com/us/blog/threat-insight/new-ta402-molerats-malware-targets-governments-middle-east"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/global/pulses?q=tag:LastConn"
        ],
        "uuid": "8b102e75-19fe-4e04-98f7-4260ce4b4b4e",
        "last-card-change": "2021-08-10",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "lastconn",
    "analysis": null,
    "articles": [],
    "mitre": []
};