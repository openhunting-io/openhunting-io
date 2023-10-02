var threatdata = {
    "name": "PNGLoad",
    "alias": "PNGLoad",
    "category": "Malware",
    "type": "Loader",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "PNGLoad",
        "names": [
            {
                "name": "PNGLoad"
            }
        ],
        "description": "(ESET) PNGLoad is the second-stage payload deployed by Worok on compromised systems and, according to ESET telemetry, loaded either by {{CLRLoad}} or {{PowHeartBeat}}. While we don\u2019t see any code in PowHeartBeat that directly loads PNGLoad, the backdoor has the capabilities to download and execute additional payloads from the C&C server, which is likely how the attackers have deployed PNGLoad on systems compromised with PowHeartBeat. PNGLoad is a loader that uses bytes from PNG files to create a payload to execute. It is a 64-bit .NET executable \u2013 obfuscated with .NET Reactor \u2013 that masquerades as legitimate software. For example, Figure 11 shows the CLR headers of a sample masquerading as a WinRAR DLL.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.welivesecurity.com/2022/09/06/worok-big-picture/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.png_load"
        ],
        "uuid": "f9459882-ea88-44c9-aaa5-b4f51918e0f5",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pngload",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2022/09/06/worok-big-picture/",
            "date": "2022-09-06",
            "organization": "ESET Research",
            "author": "Thibaut Passilly",
            "title": "Worok: The big picture",
            "categories": [
                "MimiKatz",
                "PNGLoad",
                "reGeorg",
                "ShadowPad",
                "Worok"
            ]
        }
    ],
    "mitre": []
};