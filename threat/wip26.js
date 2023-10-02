var threatdata = {
    "name": "WIP26",
    "alias": "WIP26",
    "category": "APT",
    "type": "-",
    "modified": "2023-02-17",
    "all_data": {
        "actor": "WIP26",
        "names": [
            {
                "name": "WIP26",
                "name-giver": "SentinelLabs"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2022",
        "description": "(SentinelLabs) In collaboration with QGroup GmbH, SentinelLabs is monitoring a threat activity we track as WIP26. The threat actor behind WIP26 has been targeting telecommunication providers in the Middle East. WIP26 is characterized by the abuse of public Cloud infrastructure \u2013 Microsoft 365 Mail, Microsoft Azure, Google Firebase, and Dropbox \u2013 for malware delivery, data exfiltration, and C2 purposes.\n\nThe WIP26 activity is initiated by precision targeting of employees through WhatsApp messages that contain Dropbox links to a malware loader. Tricking employees into downloading and executing the loader ultimately leads to the deployment of backdoors that leverage Microsoft 365 Mail and Google Firebase instances as C2 servers. We refer to these backdoors as CMD365 and CMDEmber, respectively. The main functionality of CMD365 and CMDEmber is to execute attacker-provided system commands using the Windows command interpreter.",
        "observed-sectors": [
            "Telecommunications"
        ],
        "observed-countries": [
            "Middle East"
        ],
        "tools": [
            "CMD365",
            "CMDEmber"
        ],
        "information": [
            "https://www.sentinelone.com/labs/wip26-espionage-threat-actors-abuse-cloud-infrastructure-in-targeted-telco-attacks/"
        ],
        "uuid": "3561e787-a13e-4191-83c1-86d37fb63412",
        "last-card-change": "2023-02-17",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "wip26",
    "analysis": null,
    "articles": [],
    "mitre": []
};