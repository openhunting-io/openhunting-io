var threatdata = {
    "name": "Elirks",
    "alias": "Elirks",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Elirks",
        "names": [
            {
                "name": "Elirks"
            }
        ],
        "description": "(Palo Alto) Elirks, less widely known than {{PlugX}}, is a basic backdoor Trojan, first discovered in 2010, that is primarily used to steal information from compromised systems. We mostly observe attacks using Elirks occurring in East Asia. One of the unique features of the malware is that it retrieves its C2 address by accessing a pre-determined microblog service or SNS. Attackers create accounts on those services and post encoded IP addresses or the domain names of real C2 servers in advance of distributing the backdoor. We have seen multiple Elirks variants using Japanese blog services for the last couple of years.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-tracking-elirks-variants-in-japan-similarities-to-previous-attacks/",
            "https://researchcenter.paloaltonetworks.com/2016/09/mile-tea-cyber-espionage-campaign-targets-asia-pacific-businesses-and-government-agencies/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.elirks"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:elirks"
        ],
        "uuid": "51e51b03-0133-427f-8465-bceeefc52ee9",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "elirks",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/09/mile-tea-cyber-espionage-campaign-targets-asia-pacific-businesses-and-government-agencies/",
            "date": "2016-09-15",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kaoru Hayashi",
            "title": "MILE TEA: Cyber Espionage Campaign Targets Asia Pacific Businesses and Government Agencies",
            "categories": [
                "Elirks",
                "Logedrut",
                "Micrass"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-tracking-elirks-variants-in-japan-similarities-to-previous-attacks/",
            "date": "2016-06-23",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Kaoru Hayashi",
            "title": "Tracking Elirks Variants in Japan: Similarities to Previous Attacks",
            "categories": [
                "Elirks"
            ]
        }
    ],
    "mitre": []
};