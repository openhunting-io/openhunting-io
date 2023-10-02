var threatdata = {
    "name": "GoldenEagle",
    "alias": "GoldenEagle",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "GoldenEagle",
        "names": [
            {
                "name": "GoldenEagle"
            }
        ],
        "description": "(Lookout) Among the aspects that make GoldenEagle particularly interesting is that the earliest test samples of this family appeared as early as 2012, making it one of the longest-running surveillanceware families we have observed to date. GoldenEagle code has been identified in an impressively large and diverse set of applications over the years. These samples can be divided into two major groups: those that exfiltrate data via HTTP and those that exfiltrate data via SMTP, i.e., by sending exfiltrated data in file attachments of emails to an attacker-controlled mailbox using innocuous-looking subjects and mail body content. The latter technique, while appearing in the early stages of GoldenEagle development, has resurfaced in samples signed and analysed in May 2020.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.lookout.com/documents/threat-reports/us/lookout-uyghur-malware-tr-us.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0551/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.goldeneagle"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:GoldenEagle"
        ],
        "uuid": "b36d7de7-3c91-4019-96b1-196c144c1e9f",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "goldeneagle",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.lookout.com/documents/threat-reports/us/lookout-uyghur-malware-tr-us.pdf",
            "date": "2020-06",
            "organization": "Lookout",
            "author": "Apurva Kumar",
            "title": "Mobile APT SurveillanceCampaigns Targeting Uyghurs A collection of long-running Android tooling connected to a Chinese mAPT actor",
            "categories": [
                "CarbonSteal",
                "DoubleAgent",
                "GoldenEagle",
                "SilkBean"
            ]
        }
    ],
    "mitre": []
};