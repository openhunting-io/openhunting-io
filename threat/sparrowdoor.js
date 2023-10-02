var threatdata = {
    "name": "SparrowDoor",
    "alias": "SparrowDoor, FamousSparrow",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "SparrowDoor",
        "names": [
            {
                "name": "SparrowDoor"
            },
            {
                "name": "FamousSparrow"
            }
        ],
        "description": "(ESET) The connections could be either through a proxy or not, and they connect to the C&C server over port 443 (HTTPS). So, the communication should be encrypted using TLS. During the first attempt to contact the C&C server, SparrowDoor checks whether a connection can be established without using a proxy, and if it can\u2019t, then the data is sent through a proxy. All outgoing data is encrypted using the XOR key hH7@83#mi and all incoming data is decrypted using the XOR key h*^4hFa. The data has a structure that starts with a Command ID, followed by the length of the ensuing encrypted data, followed by the encrypted data.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.welivesecurity.com/2021/09/23/famoussparrow-suspicious-hotel-guest/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sparrow_door"
        ],
        "uuid": "c8a05977-6a47-489d-a31e-9893f985d816",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "sparrowdoor",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.ncsc.gov.uk/files/NCSC-MAR-SparrowDoor.pdf",
            "date": "2022-02-28",
            "organization": "NCSC UK",
            "author": "NCSC UK",
            "title": "Malware Analysis Report: SparrowDoor",
            "categories": [
                "SparrowDoor"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2021/09/23/famoussparrow-suspicious-hotel-guest/",
            "date": "2021-09-23",
            "organization": "ESET Research",
            "author": "Tahseen Bin Taj",
            "title": "FamousSparrow: A suspicious hotel guest",
            "categories": [
                "SparrowDoor"
            ]
        }
    ],
    "mitre": []
};