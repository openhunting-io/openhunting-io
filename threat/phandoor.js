var threatdata = {
    "name": "PhanDoor",
    "alias": "PhanDoor",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "PhanDoor",
        "names": [
            {
                "name": "PhanDoor"
            }
        ],
        "description": "(AhnLab) Phandoor was used from January 2016 to the summer of 2017. It is characterized by having the string 'S^%' before the main character strings. (E.g. S^%s\\cmd.exe, S^nehomegpa.dll) However, some variants found in 2017 did not contain its character string, 'Anonymous?'\n\nWhen Phandoor is executed, it initializes and tries to connect to C&C server. At this time, the string 'Anonymous?' is sent to check whether that the server is functioning properly.\n\nAfter that, it receives commands from the C&C server such as to execute the cmd.exe file.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://global.ahnlab.com/global/upload/download/techreport/%5BAhnLab%5DAndariel_a_Subgroup_of_Lazarus%20(3).pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.phandoor"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Phandoor"
        ],
        "uuid": "33b662b7-1e05-4a52-bf0a-35358da6a780",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "phandoor",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://global.ahnlab.com/global/upload/download/techreport/[AhnLab]Andariel_a_Subgroup_of_Lazarus%20(3).pdf",
            "date": "2018-06-23",
            "organization": "AhnLab",
            "author": "AhnLab",
            "title": "Full Discloser of Andariel, A Subgroup of Lazarus Threat Group",
            "categories": [
                "PhanDoor",
                "Rifdoor"
            ]
        }
    ],
    "mitre": []
};