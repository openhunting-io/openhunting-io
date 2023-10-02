var threatdata = {
    "name": "Ketrum",
    "alias": "Ketrum",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Ketrum",
        "names": [
            {
                "name": "Ketrum"
            }
        ],
        "description": "(Intezer) The three samples we discovered seem to be a mix of the {{Ketrican}} and {{Okrum}} backdoors documented by researchers at ESET in 2019. Features have been merged from these two malware families to create a different RAT class for the group. We\u2019ve decided to call this umbrella of malware \u201cKetrum.\u201d\n\nThe new samples we found continue the Ke3chang group\u2019s strategy of using a basic backdoor to gain control over the victim\u2019s device, so that an operator can then connect to it and run commands manually to conduct further operations.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.intezer.com/blog/research/the-evolution-of-apt15s-codebase-2020/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ketrum"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ketrum"
        ],
        "uuid": "93db3d8b-4060-4a36-b6ed-ee3aa8797752",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ketrum",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.intezer.com/blog/research/the-evolution-of-apt15s-codebase-2020/",
            "date": "2020-05-21",
            "organization": "Intezer",
            "author": "Paul Litvak",
            "title": "The Evolution of APT15\u2019s Codebase 2020",
            "categories": [
                "Ketrican",
                "Ketrum",
                "Okrum"
            ]
        }
    ],
    "mitre": []
};