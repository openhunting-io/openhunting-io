var threatdata = {
    "name": "SerialVlogger",
    "alias": "SerialVlogger",
    "category": "Malware",
    "type": "Loader",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "SerialVlogger",
        "names": [
            {
                "name": "SerialVlogger"
            }
        ],
        "description": "(Malwarebytes) By using {{DBoxAgent}}, attackers had already full control of their victim's machine. They were able to steal information and also to deploy additional pieces of malware. In that regard, only selected victims received this second stage that used jcef_helper.exe , libcef.dll and vlog.ipdb files.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.malwarebytes.com/blog/threat-intelligence/2022/winnti-apt-group-docks-in-sri-lanka-for-new-campaign-final.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.serialvlogger"
        ],
        "uuid": "98c8bb93-8382-4c86-97a4-6938ea738867",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "serialvlogger",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.malwarebytes.com/blog/threat-intelligence/2022/winnti-apt-group-docks-in-sri-lanka-for-new-campaign-final.pdf",
            "date": "2020-10-12",
            "organization": "Malwarebytes Labs",
            "author": "Roberto Santos",
            "title": "Winnti APT group docks in Sri Lanka for new campaign",
            "categories": [
                "DBoxAgent",
                "SerialVlogger",
                "Winnti"
            ]
        }
    ],
    "mitre": []
};