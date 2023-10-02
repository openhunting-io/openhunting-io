var threatdata = {
    "name": "TriFive",
    "alias": "TriFive",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-01-20",
    "all_data": {
        "tool": "TriFive",
        "names": [
            {
                "name": "TriFive"
            }
        ],
        "description": "(Palo Alto) TriFive is a previously unseen PowerShell-based backdoor that the xHunt actors installed on the compromised Exchange server, executing every five minutes via a scheduled task. TriFive provided backdoor access to the Exchange server by logging into a legitimate user\u2019s inbox and obtaining a PowerShell script from an email draft within the deleted emails folder. The TriFive sample used a legitimate account name and credentials from the targeted organization. This suggests that the threat actor had stolen the account\u2019s credentials prior to the installation of the TriFive backdoor.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/xhunt-campaign-backdoors/"
        ],
        "uuid": "3b63f65e-6d5f-4ab4-b64f-750309ace196",
        "last-card-change": "2021-01-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "trifive",
    "analysis": null,
    "articles": [],
    "mitre": []
};