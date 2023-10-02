var threatdata = {
    "name": "TA2552",
    "alias": "TA2552",
    "category": "APT",
    "type": "-",
    "modified": "2020-10-19",
    "all_data": {
        "actor": "TA2552",
        "names": [
            {
                "name": "TA2552",
                "name-giver": "Proofpoint"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2019",
        "description": "(Proofpoint) Since January 2020, Proofpoint researchers have tracked an actor abusing Microsoft Office 365 (O365) third-party application (3PA) access, with suspected activity dating back to August 2019. The actor, known as TA2552, uses well-crafted Spanish language lures that leverage a narrow range of themes and brands. The lures entice users to click a link in the message, taking them to the legitimate Microsoft third-party apps consent page. There they are prompted to grant a third-party application read-only user permissions to their O365 account via OAuth2 or other token-based authorization methods. TA2552 seeks access to specific account resources like the user\u2019s contacts and mail. Requesting read-only permissions for such account resources could be used to conduct account reconnaissance, silently steal data, or to intercept password reset messages from other accounts such as those at financial institutions. While organizations with global presence have received messages from this group, they appear to choose recipients who are likely Spanish speakers.",
        "information": [
            "https://www.proofpoint.com/us/blog/threat-insight/ta2552-uses-oauth-access-token-phishing-exploit-read-only-risks"
        ],
        "uuid": "8677d61e-2bbd-4767-9f5d-90f14810911b",
        "last-card-change": "2020-10-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ta2552",
    "analysis": null,
    "articles": [],
    "mitre": []
};