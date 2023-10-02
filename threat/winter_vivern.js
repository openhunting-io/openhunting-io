var threatdata = {
    "name": "Winter Vivern",
    "alias": "Winter Vivern, UAC-0114, TA473",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Winter Vivern",
        "names": [
            {
                "name": "Winter Vivern",
                "name-giver": "SentinelLabs"
            },
            {
                "name": "UAC-0114",
                "name-giver": "CERT-UA"
            },
            {
                "name": "TA473",
                "name-giver": "Proofpoint"
            }
        ],
        "country": [
            "[Unknown]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2021",
        "description": "(SentinelLabs) The Winter Vivern Advanced Persistent Threat (APT) is a noteworthy yet relatively underreported group that operates with pro-Russian objectives. DomainTools initially publicized the group in early 2021, naming it based on an initial command-and-control beacon URL string \u201cwintervivern,\u201d which is no longer in use. Subsequently, Lab52 shared additional analysis several months later, identifying new activity associated with Winter Vivern.\n\nThe group has avoided public disclosure since then, until recent attacks targeting Ukraine. A part of a Winter Vivern campaign was reported in recent weeks by the Polish CBZC, and then the Ukraine CERT as UAC-0114. In this activity, CERT-UA and the CBZC collaborated on the release of private technical details which assisted in our research to identify a wider set of activity on the threat actor, in addition to new victims and previously unknown specific technical details. Overall, we find that the Winter Vivern APT is a resource-limited but highly creative group that shows restraint in the scope of their attacks. Our analysis indicates that Winter Vivern activity aligns closely with global objectives that support the interests of Belarus and Russia\u2019s governments.\n\nAlso see {{MoustachedBouncer}}.",
        "observed-sectors": [
            "Defense",
            "Government"
        ],
        "observed-countries": [
            "India",
            "Lithuania",
            "Poland",
            "Slovakia",
            "Ukraine",
            "USA",
            "Europe"
        ],
        "tools": [
            "APERETIF"
        ],
        "operations": [
            {
                "date": "2023 Early",
                "activity": "Exploitation is a Dish Best Served Cold: Winter Vivern Uses Known Zimbra Vulnerability to Target Webmail Portals of NATO-Aligned Governments in Europe\nhttps://www.proofpoint.com/us/blog/threat-insight/exploitation-dish-best-served-cold-winter-vivern-uses-known-zimbra-vulnerability"
            }
        ],
        "information": [
            "https://www.sentinelone.com/labs/winter-vivern-uncovering-a-wave-of-global-espionage/",
            "https://www.domaintools.com/resources/blog/winter-vivern-a-look-at-re-crafted-government-maldocs/",
            "https://lab52.io/blog/winter-vivern-all-summer/"
        ],
        "uuid": "7b427e8e-151d-4f6e-9b4f-89cbb92e82bd",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "winter_vivern",
    "analysis": null,
    "articles": [],
    "mitre": []
};