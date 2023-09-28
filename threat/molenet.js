var threatdata = {
    "name": "MoleNet",
    "alias": "MoleNet",
    "category": "Malware",
    "type": "Backdoor, Downloader",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "MoleNet",
        "names": [
            {
                "name": "MoleNet"
            }
        ],
        "description": "(Cybereason) Perhaps one of the most intriguing tools discovered in this campaign is the MoleNet downloader. Even though the tool itself is previously undocumented, the Nocturnus Team found evidence that it has been in active development since at least 2019 with infrastructure operating as far back as 2017 while remaining under the radar. The MoleNet downloader is just one of the tools in Molerats\u2019 arsenal, and was discovered in this campaign being delivered by the {{DropBook}} backdoor along with the {{SharpStage}} and {{Spark}} backdoors. It is also written in .NET, and heavily obfuscated.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Downloader"
        ],
        "information": [
            "https://www.cybereason.com/hubfs/dam/collateral/reports/Molerats-in-the-Cloud-New-Malware-Arsenal-Abuses-Cloud-Platforms-in-Middle-East-Espionage-Campaign.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0553/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.molenet"
        ],
        "uuid": "9fba1892-f6ba-483d-92b0-a69bf4bfff96",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "molenet",
    "analysis": null
};