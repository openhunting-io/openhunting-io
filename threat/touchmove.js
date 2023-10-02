var threatdata = {
    "name": "TOUCHMOVE",
    "alias": "TOUCHMOVE",
    "category": "Malware",
    "type": "Loader",
    "modified": "2023-06-22",
    "all_data": {
        "tool": "TOUCHMOVE",
        "names": [
            {
                "name": "TOUCHMOVE"
            }
        ],
        "description": "(Mandiant) TOUCHMOVE is a loader that decrypts a configuration file and a payload, both of which must be on disk, and then executes the payload. TOUCHMOVE generates an RC6 key to decrypt the two files by querying the system\u2019s BIOS date, version, manufacturer, and product name. Once decrypted, the results are XOR encoded with a hardcoded key. If the generated RC6 key is incorrect, the configuration and payload files will not successfully decrypt, indicating that UNC2970 compiles instances of TOUCHMOVE after having already conducted reconnaissance on the target victim system. Once the RC6 key is successfully generated, a handle is created to the configuration file, and the decryption process is conducted. If the configuration file is successfully decrypted, the payload\u2019s full path is located within it, and the same decryption process then occurs on the payload. Following this, the payload is executed.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.mandiant.com/resources/blog/lightshow-north-korea-unc2970"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.touchmove"
        ],
        "uuid": "390dffdf-3bba-41e0-949e-9634cad4636f",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "touchmove",
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
        },
        {
            "data_url": "https://www.welivesecurity.com/2022/09/30/amazon-themed-campaigns-lazarus-netherlands-belgium/",
            "date": "2022-09-30",
            "organization": "ESET Research",
            "author": "Peter K\u00e1lnai",
            "title": "Amazon\u2011themed campaigns of Lazarus in the Netherlands and Belgium",
            "categories": [
                "BLINDINGCAN",
                "FudModule",
                "HTTP(S) uploader",
                "TOUCHMOVE"
            ]
        }
    ],
    "mitre": []
};