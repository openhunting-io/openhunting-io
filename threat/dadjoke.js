var threatdata = {
    "name": "DADJOKE",
    "alias": "DADJOKE",
    "category": "Malware",
    "type": "Backdoor, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "DADJOKE",
        "names": [
            {
                "name": "DADJOKE"
            }
        ],
        "description": "DADJOKE was discovered as being distributed via email, targeting a South-East Asian Ministry of Defense. It is delivered as an embedded EXE file in a Word document using remote templates and a unique macro using multiple GET requests. The payload is deployed using load-order hijacking with a benign Windows Defender executable. Stage 1 has only beacon+download functionality, made to look like a PNG file. Additional analysis by Kaspersky found 8 campaigns over 2019 and no activity prior to January 2019, DADJOKE is attributed with medium confidence to APT40.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Exfiltration"
        ],
        "information": [
            "https://www.mycert.org.my/portal/advisory?id=MA-770.022020"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.dadjoke"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DADJOKE"
        ],
        "uuid": "bfad0282-84d5-4135-84f1-24687684f5e5",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "dadjoke",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://medium.com/@Sebdraven/apt-40-in-malaysia-61ed9c9642e9",
            "date": "2020-02-07",
            "organization": "Medium Sebdraven",
            "author": "S\u00e9bastien Larinier",
            "title": "APT 40 in Malaysia",
            "categories": [
                "DADJOKE"
            ]
        },
        {
            "data_url": "https://www.youtube.com/watch?v=vx9IB88wXSE",
            "date": "2020-01-03",
            "organization": "Youtube (BSides Belfast)",
            "author": "Brian Bartholomew",
            "title": "Nice One, Dad: Dissecting A Rare Malware Used By Leviathan",
            "categories": [
                "DADJOKE"
            ]
        },
        {
            "data_url": "https://prezi.com/view/jGyAzyy5dTOkDrtwsJi5/",
            "date": "2019-11-05",
            "organization": "",
            "author": "Brian Bartholomew",
            "title": "DADJOKE",
            "categories": [
                "DADJOKE"
            ]
        },
        {
            "data_url": "https://wemp.app/posts/80ab2b2d-4e0e-4960-94b7-4d452a06fd38?utm_source=latest-posts",
            "date": "2019-08-13",
            "organization": "",
            "author": "\u5947\u5b89\u4fe1\u5a01\u80c1\u60c5\u62a5\u4e2d\u5fc3",
            "title": "\u6d1e\u5bdf\u4eba\u6027\uff1a\u4e00\u8d77\u5229\u7528\u653f\u6cbb\u4eba\u7269\u6843\u8272\u4e11\u95fb\u7684\u8bf1\u9975\u653b\u51fb\u6d3b\u52a8\u62ab\u9732",
            "categories": [
                "DADJOKE"
            ]
        },
        {
            "data_url": "https://twitter.com/a_tweeter_user/status/1154764787823316993",
            "date": "2019-07-26",
            "organization": "Twitter (@a_tweeter_user)",
            "author": "a_tweeter_user",
            "title": "Tweet on Malware",
            "categories": [
                "DADJOKE"
            ]
        },
        {
            "data_url": "https://twitter.com/ClearskySec/status/1110941178231484417",
            "date": "2019-03-27",
            "organization": "Twitter (@ClearskySec)",
            "author": "ClearSky Cyber Security",
            "title": "Tweet on \"Timelines - ECRL.docx\"",
            "categories": [
                "DADJOKE"
            ]
        }
    ],
    "mitre": []
};