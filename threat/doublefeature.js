var threatdata = {
    "name": "DoubleFeature",
    "alias": "DoubleFeature",
    "category": "Malware",
    "type": "Reconnaissance",
    "modified": "2022-01-25",
    "all_data": {
        "tool": "DoubleFeature",
        "names": [
            {
                "name": "DoubleFeature"
            }
        ],
        "description": "(Check Point) To better understand the above structure and flow, we focused our research on a component of {{DanderSpritz}} named Doublefeature (or Df for short). According to its own internal documentation, this plugin \u201cGenerates a log & report about the types of tools that could be deployed on the target\u201d; a lot of the framework tools, in their own internal documentation, make the chilling claim that DoubleFeature is the only way to confirm their existence on a compromised system. After some pause, we figured that at least this means DoubleFeature could be used as a sort of Rosetta Stone for better understanding DanderSpritz modules, and systems compromised by them. DoubleFeature effectively, well, doubles as a diagnostic tool for victim machines carrying DanderSpritz \u2014 It\u2019s an incident response team\u2019s pipe dream.",
        "category": "Malware",
        "type": [
            "Reconnaissance"
        ],
        "information": [
            "https://research.checkpoint.com/2021/a-deep-dive-into-doublefeature-equation-groups-post-exploitation-dashboard/"
        ],
        "uuid": "a3223c7e-a8ba-4776-922a-ffdf1f1ec4fe",
        "last-card-change": "2022-01-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "doublefeature",
    "analysis": null
};