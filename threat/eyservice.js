var threatdata = {
    "name": "EYService",
    "alias": "EYService",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "EYService",
        "names": [
            {
                "name": "EYService"
            }
        ],
        "description": "(Epic Turla) The main functionality orchestrating the different subcomponents is contained within Data.bin, later renamed to \u2018svchost.exe\u2019. The orchestrator takes 17 different three digit codes to divert functionality within a giant switch statement. Some of the codes have not been fully implemented up to the latest samples I\u2019ve found so far, which further suggests a continued developmental effort.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.epicturla.com/blog/the-lost-nazar",
            "https://blog.malwarelab.pl/posts/nazar_eyservice/",
            "https://research.checkpoint.com/2020/nazar-spirits-of-the-past/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.eyservice"
        ],
        "uuid": "d1357aaf-4d8d-4164-a083-7c706e00fcbe",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "eyservice",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://research.checkpoint.com/2020/nazar-spirits-of-the-past/",
            "date": "2020-05-05",
            "organization": "Checkpoint",
            "author": "Check Point Research",
            "title": "Nazar: Spirits of the Past",
            "categories": [
                "EYService"
            ]
        },
        {
            "data_url": "https://blog.malwarelab.pl/posts/nazar_eyservice_comm/",
            "date": "2020-04-27",
            "organization": "MalwareLab.pl",
            "author": "Maciej Kotowicz",
            "title": "Quick look at Nazar's backdoor - Network Communication",
            "categories": [
                "EYService"
            ]
        },
        {
            "data_url": "https://blog.malwarelab.pl/posts/nazar_eyservice/",
            "date": "2020-04-23",
            "organization": "MalwareLab.pl",
            "author": "Maciej Kotowicz",
            "title": "Quick look at Nazar backdoor - Capabilities",
            "categories": [
                "EYService"
            ]
        },
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
        },
        {
            "data_url": "https://www.crysys.hu/publications/files/tedi/ukatemicrysys_territorialdispute.pdf",
            "date": "2018-03",
            "organization": "CrySyS Lab",
            "author": "Boldizsar Bencsath",
            "title": "Territorial Dispute \u2013 NSA\u2019s perspective on APT landscape",
            "categories": [
                "9002 RAT",
                "Agent.BTZ",
                "DuQu",
                "EYService",
                "Flame",
                "FlowerShop",
                "Stuxnet",
                "Uroburos"
            ]
        }
    ],
    "mitre": []
};