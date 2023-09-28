var threatdata = {
    "name": "SideWalk",
    "alias": "SideWalk, ScrambleCross",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "SideWalk",
        "names": [
            {
                "name": "SideWalk"
            },
            {
                "name": "ScrambleCross"
            }
        ],
        "description": "(ESET) This backdoor shares multiple similarities with another backdoor used by the group: {{CrossWalk}}.\n\nSideWalk is a modular backdoor that can dynamically load additional modules sent from its C&C server, makes use of Google Docs as a dead drop resolver, and uses Cloudflare workers as a C&C server. It can also properly handle communication behind a proxy.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2021/08/24/sidewalk-may-be-as-dangerous-as-crosswalk/",
            "https://documents.trendmicro.com/assets/white_papers/wp-earth-baku-an-apt-group-targeting-indo-pacific-countries.pdf",
            "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/grayfly-china-sidewalk-malware"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sidewalk"
        ],
        "uuid": "7c20f5f1-cf05-4b00-b9d4-f30dae173daa",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "sidewalk",
    "analysis": null
};