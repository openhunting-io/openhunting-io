var threatdata = {
    "name": "MQsTTang",
    "alias": "MQsTTang, QMAGENT",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-09-07",
    "all_data": {
        "tool": "MQsTTang",
        "names": [
            {
                "name": "MQsTTang"
            },
            {
                "name": "QMAGENT"
            }
        ],
        "description": "(ESET) MQsTTang is a barebones backdoor that allows the attacker to execute arbitrary commands on a victim\u2019s machine and get the output. Even so, it does present some interesting characteristics. Chief among these is its use of the MQTT protocol for C&C communication. MQTT is typically used for communication between IoT devices and controllers, and the protocol hasn\u2019t been used in many publicly documented malware families.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2023/03/02/mqsttang-mustang-panda-latest-backdoor-treads-new-ground-qt-mqtt/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mqsttang"
        ],
        "uuid": "f5c4e883-7cc8-4774-8ac6-8398bff48f83",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mqsttang",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.sekoia.io/my-teas-not-cold-an-overview-of-china-cyber-threat/",
            "date": "2023-09-07",
            "organization": "Sekoia",
            "author": "Jamila B.",
            "title": "My Tea\u2019s not cold. An overview of China\u2019s cyber threat",
            "categories": [
                "Melofee",
                "PingPull",
                "SoWaT",
                "Sword2033",
                "MgBot",
                "MQsTTang",
                "PlugX",
                "TONESHELL"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2023/03/02/mqsttang-mustang-panda-latest-backdoor-treads-new-ground-qt-mqtt/",
            "date": "2023-03-02",
            "organization": "ESET Research",
            "author": "Alexandre C\u00f4t\u00e9 Cyr",
            "title": "MQsTTang: Mustang Panda\u2019s latest backdoor treads new ground with Qt and MQTT",
            "categories": [
                "MQsTTang"
            ]
        }
    ],
    "mitre": []
};