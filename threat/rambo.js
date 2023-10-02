var threatdata = {
    "name": "Rambo",
    "alias": "Rambo, brebsd",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Rambo",
        "names": [
            {
                "name": "Rambo"
            },
            {
                "name": "brebsd"
            }
        ],
        "description": "(securitykitten) Rambo is a unique backdoor with features that are the result of some odd design decisions. In the initial dropper the configuration containing offsets and filenames are encoded with TEA, however the binaries are not encoded at all. It uses AES to encode the host information that is sent out over the network, however the C2 is hidden with a single byte XOR. While they may not make much sense to a reverse engineer, it gives some idea to the information that the author doesn\u2019t want to be easily recovered. By writing commands to temporary files and trying to communicate between multiple processes, the authors turn a simple stage 1 implant into something that is confusing and more difficult to study.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://talos-intelligence-site.s3.amazonaws.com/production/document_files/files/000/000/062/original/RamboDIMVA2016.pdf",
            "https://securitykitten.github.io/2017/02/15/the-rambo-backdoor.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.rambo"
        ],
        "uuid": "3aafd694-df10-45cb-85dd-25e4cee2d92b",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "rambo",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-overbrook",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE OVERBROOK",
            "categories": [
                "Aveo",
                "DDKONG",
                "IsSpace",
                "PLAINTEE",
                "PlugX",
                "Rambo",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://github.com/m0n0ph1/APT_CyberCriminal_Campagin_Collections-1/blob/master/2017/2017.02.15.deep-dive-dragonok-rambo-backdoor/Deep%20Dive%20on%20the%20DragonOK%20Rambo%20Backdoor%20_%20Morphick%20Cyber%20Security.pdf",
            "date": "2017-02-15",
            "organization": "Morphick",
            "author": "Nick Hoffman",
            "title": "Deep Dive on the DragonOK Rambo Backdoor",
            "categories": [
                "Rambo",
                "DragonOK"
            ]
        },
        {
            "data_url": "https://github.com/malware-kitten/securitykitten.github.io/blob/master/_posts/2017-02-15-the-rambo-backdoor.md",
            "date": "2017-02-15",
            "organization": "Adventures in Security",
            "author": "Nick Hoffman",
            "title": "The Rambo Backdoor",
            "categories": [
                "Rambo"
            ]
        }
    ],
    "mitre": []
};