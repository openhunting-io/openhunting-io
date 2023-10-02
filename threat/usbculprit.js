var threatdata = {
    "name": "USBCulprit",
    "alias": "USBCulprit",
    "category": "Malware",
    "type": "Info stealer, Worm",
    "modified": "2021-12-01",
    "all_data": {
        "tool": "USBCulprit",
        "names": [
            {
                "name": "USBCulprit"
            }
        ],
        "description": "(Kaspersky) One of the most notable examples in Cycldek\u2019s toolset that demonstrates both data stealing and lateral movement capabilities is a malware we discovered and dubbed USBCulrpit. This tool, which we saw downloaded by {{RedCore}} implants in several instances, is capable of scanning various paths in victim machines, collecting documents with particular extensions and passing them on to USB drives when they are connected to the system. It can also selectively copy itself to a removable drive in the presence of a particular file, suggesting it can be spread laterally by having designated drives infected and the executable in them opened manually.",
        "category": "Malware",
        "type": [
            "Info stealer",
            "Worm"
        ],
        "information": [
            "https://securelist.com/cycldek-bridging-the-air-gap/97157/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.usbculprit"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:usbculprit"
        ],
        "uuid": "2efd7c09-c2d3-4e8c-b48b-5cda7a3a80e8",
        "last-card-change": "2021-05-15",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "usbculprit",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2021/12/eset_jumping_the_air_gap_wp.pdf",
            "date": "2021-12-01",
            "organization": "ESET Research",
            "author": "Alexis Dorais-Joncas",
            "title": "Jumping the air gap: 15 years of nation\u2011state effort",
            "categories": [
                "Agent.BTZ",
                "Fanny",
                "Flame",
                "Gauss",
                "PlugX",
                "Ramsay",
                "Retro",
                "Stuxnet",
                "USBCulprit",
                "USBferry"
            ]
        },
        {
            "data_url": "https://drive.google.com/file/d/11otA_VmL061KcFC5MhDYuNdIKHYbpyrd/view",
            "date": "2020-09-24",
            "organization": "CARO",
            "author": "Mark Lechtik",
            "title": "Cycldek aka Goblin Panda: Chronicles of the Goblin",
            "categories": [
                "NewCore RAT",
                "USBCulprit"
            ]
        },
        {
            "data_url": "https://securelist.com/cycldek-bridging-the-air-gap/97157/",
            "date": "2020-06-03",
            "organization": "Kaspersky Labs",
            "author": "GReAT",
            "title": "Cycldek: Bridging the (air) gap",
            "categories": [
                "8.t Dropper",
                "NewCore RAT",
                "PlugX",
                "USBCulprit",
                "GOBLIN PANDA",
                "Hellsing"
            ]
        }
    ],
    "mitre": []
};