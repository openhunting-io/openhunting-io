var threatdata = {
    "name": "DRIGO",
    "alias": "DRIGO",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "DRIGO",
        "names": [
            {
                "name": "DRIGO"
            }
        ],
        "description": "(Trend Micro) PLEAD also uses the document-targeting exfiltration tool DRIGO, which mainly searches the infected machine for documents. Each copy of DRIGO contains a refresh token tied to specific Gmail accounts used by the attackers, which are in turn linked to a Google Drive account. The stolen files are uploaded to these Google Drives, where the attackers can harvest them.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/following-trail-blacktech-cyber-espionage-campaigns/"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DRIGO"
        ],
        "uuid": "d27ed600-5ef6-40f4-a5bb-46049a37c827",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "drigo",
    "analysis": null,
    "articles": [],
    "mitre": []
};