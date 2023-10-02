var threatdata = {
    "name": "Destover",
    "alias": "Destover, Sierras",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Destover",
        "names": [
            {
                "name": "Destover"
            },
            {
                "name": "Sierras"
            }
        ],
        "description": "(Kaspersky) The most interesting aspects of the destructive functionality of the malware are related to the selection and storage/delivery of the drivers that are now used repeatedly in these kinds of sabotage attacks.\n\nThe Destover droppers install and run EldoS {{RawDisk}} drivers to evade NTFS security permissions and overwrite disk data and the MBR itself. There are implications for data recovery in this. In the case of the DarkSeoul malware, the overwritten data could be restored using a method similar to the restoration of the Shamoon \u2018destroyed\u2019 data. Destover data recovery is likely to be the same.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://securelist.com/destover/67985/",
            "https://securingtomorrow.mcafee.com/mcafee-labs/analyzing-operation-ghostsecret-attack-seeks-to-steal-data-worldwide/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sierras"
        ],
        "uuid": "b23d9046-7958-4dc8-9cb6-2c8b7386b8bc",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "destover",
    "analysis": null,
    "articles": [],
    "mitre": []
};