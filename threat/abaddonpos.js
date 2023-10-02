var threatdata = {
    "name": "AbaddonPOS",
    "alias": "AbaddonPOS",
    "category": "Malware",
    "type": "POS malware",
    "modified": "2021-02-15",
    "all_data": {
        "tool": "AbaddonPOS",
        "names": [
            {
                "name": "AbaddonPOS"
            }
        ],
        "description": "(Proofpoint) Proofpoint threat researchers recently detected a new addition to PoS malware landscape. Named AbaddonPOS by Proofpoint researchers, this sample was initially discovered as it was being downloaded in the process of a {{Vawtrak}} infection. This use of additional payloads to enhance attack capabilities offers another example of efforts by threat actors to expand their target surfaces through the delivery of multiple payloads in a single campaign, in this case by including potential PoS terminals. This post will analyze AbaddonPOS; discuss the observed infection vectors; and expose, details on the downloader used to retrieve this new PoS malware. We will also provide evidence to demonstrate that the downloader malware and PoS malware are closely related, perhaps even written by the same actor or actors.",
        "category": "Malware",
        "type": [
            "POS malware"
        ],
        "information": [
            "https://www.proofpoint.com/us/threat-insight/post/AbaddonPOS-A-New-Point-Of-Sale-Threat-Linked-To-Vawtrak",
            "https://threatpost.com/new-pos-malware-pinkkite-takes-flight/130428/",
            "https://www.proofpoint.com/us/threat-insight/post/abaddonpos-now-targeting-specific-pos-software"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.abaddon_pos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:abaddonpos"
        ],
        "uuid": "1e27e4a7-2583-4e55-9fe3-ffee54333563",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "abaddonpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://medium.com/s2wlab/operation-synctrek-e5013df8d167",
            "date": "2021-02-15",
            "organization": "Medium s2wlab",
            "author": "Sojun Ryu",
            "title": "Operation SyncTrek",
            "categories": [
                "AbaddonPOS",
                "Azorult",
                "Clop",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://norfolkinfosec.com/tinypos-and-prolocker-an-odd-relationship/",
            "date": "2020-11-02",
            "organization": "One Night in Norfolk",
            "author": "Kevin Perlow",
            "title": "TinyPOS and ProLocker: An Odd Relationship",
            "categories": [
                "AbaddonPOS",
                "PwndLocker"
            ]
        },
        {
            "data_url": "https://www.carbonblack.com/2020/05/21/tau-technical-report-new-attack-combines-tinypos-with-living-off-the-land-techniques-for-scraping-credit-card-data/",
            "date": "2020-05-21",
            "organization": "VMWare Carbon Black",
            "author": "Jared Myers",
            "title": "TAU Technical Report: New Attack Combines TinyPOS With Living-off-the-Land Techniques for Scraping Credit Card Data",
            "categories": [
                "AbaddonPOS"
            ]
        },
        {
            "data_url": "https://threatpost.com/new-pos-malware-pinkkite-takes-flight/130428/",
            "date": "2018-03-14",
            "organization": "Threatpost",
            "author": "Tom Spring",
            "title": "New POS Malware PinkKite Takes Flight",
            "categories": [
                "AbaddonPOS"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/abaddonpos-now-targeting-specific-pos-software",
            "date": "2016-05-10",
            "organization": "Proofpoint",
            "author": "Matthew Mesa",
            "title": "Setting Sights On Retail: AbaddonPOS Now Targeting Specific POS Software",
            "categories": [
                "AbaddonPOS",
                "TinyLoader"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/AbaddonPOS-A-New-Point-Of-Sale-Threat-Linked-To-Vawtrak",
            "date": "2015-11-11",
            "organization": "Proofpoint",
            "author": "Darien Huss",
            "title": "AbaddonPOS: A new point of sale threat linked to Vawtrak",
            "categories": [
                "AbaddonPOS",
                "TinyLoader"
            ]
        }
    ],
    "mitre": []
};