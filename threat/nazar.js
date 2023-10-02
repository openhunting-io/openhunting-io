var threatdata = {
    "name": "Nazar",
    "alias": "Nazar, SIG37, Iron Tiger",
    "category": "APT",
    "type": "-",
    "modified": "2020-05-07",
    "all_data": {
        "actor": "Nazar",
        "names": [
            {
                "name": "Nazar",
                "name-giver": "Epic Turla"
            },
            {
                "name": "SIG37",
                "name-giver": "NSA"
            },
            {
                "name": "Iron Tiger",
                "name-giver": "CrySys"
            }
        ],
        "country": [
            "Iran"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2008",
        "description": "(Epic Turla) It\u2019s hard to understand the scope of this operation without access to victimology (e.g.: endpoint visibility or command-and-control sinkholing). Additionally, some possible timestomping muddies the water between this operation possible originating in 2008-2009 or actually coming into full force in 2010-2013 (the latter dates being corroborated by VT firstseen submission times and second-stage drop timestamps). There\u2019s a level of variable developmental capability visible throughout the stages. Multiple components are abused commonly-available resources, while the orchestrator and two of the DLL drops actually display some developmental ingenuity (in the form of seemingly novel COM techniques). Far from the most advanced coding practices but definitely better than the sort of .NET garbage other \u2018Farsi-speaking\u2019 APTs have gotten away with in the past.\n\nSomehow, this operation found its way onto the NSA\u2019s radar pre-2013. As far as I can tell, it\u2019s eluded specific coverage from the security industry. A possible scenario to account for the disparate visibility between the NSA and Western researchers when it comes to this cluster of activity is that these samples were exclusively encountered on Iranian boxes overlapping with EQGRP implants. Submissions of Nazar subcomponents from Iran (as well as privately shared visibility into historical and ongoing victimology clustered entirely on Iranian machines) could support that theory. Perhaps this is an internal monitoring framework (a la Attor) but given the sparse availability of historical data, I wouldn\u2019t push that beyond a low-confidence assessment, at this time.",
        "tools": [
            "Distribute.exe",
            "EYService",
            "GpUpdates.exe",
            "Microolap Packet Sniffer"
        ],
        "information": [
            "https://www.epicturla.com/blog/the-lost-nazar",
            "https://research.checkpoint.com/2020/nazar-spirits-of-the-past/"
        ],
        "uuid": "7bc83157-e747-4668-ab0d-f343aead75c1",
        "last-card-change": "2020-05-07",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "nazar",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.epicturla.com/blog/the-lost-nazar",
            "date": "2020-04-22",
            "organization": "EpicTurla",
            "author": "Juan Andr\u00e9s Guerrero-Saade",
            "title": "Nazar: A Lost Amulet",
            "categories": [
                "EYService",
                "Nazar"
            ]
        }
    ],
    "mitre": []
};