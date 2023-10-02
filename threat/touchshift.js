var threatdata = {
    "name": "TOUCHSHIFT",
    "alias": "TOUCHSHIFT",
    "category": "Malware",
    "type": "Dropper",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "TOUCHSHIFT",
        "names": [
            {
                "name": "TOUCHSHIFT"
            }
        ],
        "description": "(Mandiant) TOUCHSHIFT is a malicious dropper that masquerades as mscoree.dll or netplwix.dll. TOUCHSHIFT is typically created in the same directory and simultaneously as a legitimate copy of a Windows binary. TOUCHSHIFT leverages DLL Search Order Hijacking to use the legitimate file to load and execute itself. TOUCHSHIFT has been observed containing one to two various payloads which it executes in-memory. Payloads that have been seen include {{TOUCHSHOT}}, {{TOUCHKEY}}, {{HOOKSHOT}}, {{TOUCHMOVE}}, and {{SIDESHOW}}.",
        "category": "Malware",
        "type": [
            "Dropper"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/lightshow-north-korea-unc2970"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.touchshift"
        ],
        "uuid": "be93acee-c964-4340-bfb4-5bae20f52a2f",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "touchshift",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mandiant.com/resources/blog/lightshow-north-korea-unc2970",
            "date": "2023-03-09",
            "organization": "Mandiant",
            "author": "Mandiant Intelligence",
            "title": "Stealing the LIGHTSHOW (Part One) \u2014 North Korea's UNC2970",
            "categories": [
                "CLOUDBURST",
                "TOUCHMOVE",
                "TOUCHSHIFT"
            ]
        }
    ],
    "mitre": []
};