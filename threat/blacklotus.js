var threatdata = {
    "name": "BlackLotus",
    "alias": "BlackLotus",
    "category": "Malware",
    "type": "Rootkit",
    "modified": "2023-09-05",
    "all_data": {
        "tool": "BlackLotus",
        "names": [
            {
                "name": "BlackLotus"
            }
        ],
        "description": "(ESET) The number of UEFI vulnerabilities discovered in recent years and the failures in patching them or revoking vulnerable binaries within a reasonable time window hasn\u2019t gone unnoticed by threat actors. As a result, the first publicly known UEFI bootkit bypassing the essential platform security feature \u2013 UEFI Secure Boot \u2013 is now a reality. In this blogpost we present the first public analysis of this UEFI bootkit, which is capable of running on even fully-up-to-date Windows 11 systems with UEFI Secure Boot enabled. Functionality of the bootkit and its individual features leads us to believe that we are dealing with a bootkit known as BlackLotus, the UEFI bootkit being sold on hacking forums for $5,000 since at least October 2022.",
        "category": "Malware",
        "type": [
            "Rootkit"
        ],
        "information": [
            "https://www.welivesecurity.com/2023/03/01/blacklotus-uefi-bootkit-myth-confirmed/",
            "https://www.bleepingcomputer.com/news/security/source-code-for-blacklotus-windows-uefi-malware-leaked-on-github/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.blacklotus"
        ],
        "playbook": [
            "https://media.defense.gov/2023/Jun/22/2003245723/-1/-1/0/CSI_BlackLotus_Mitigation_Guide.PDF"
        ],
        "uuid": "df277b10-a9da-4574-abe2-a2ef0753eaca",
        "last-card-change": "2023-09-05",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "blacklotus",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://mssplab.github.io/threat-hunting/2023/07/15/malware-src-blacklotus.html",
            "date": "2023-07-15",
            "organization": "MSSP Lab",
            "author": "cocomelonc",
            "title": "Malware source code investigation: BlackLotus - part 1",
            "categories": [
                "BlackLotus"
            ]
        },
        {
            "data_url": "https://kn0s-organization.gitbook.io/blacklotus-analysis-stage2-bootkit-rootkit-stage/",
            "date": "2023-05-29",
            "organization": "",
            "author": "kn0s-organization",
            "title": "BlackLotus stage 2 bootkit-rootkit analysis",
            "categories": [
                "BlackLotus"
            ]
        },
        {
            "data_url": "https://www.microsoft.com/en-us/security/blog/2023/04/11/guidance-for-investigating-attacks-using-cve-2022-21894-the-blacklotus-campaign/",
            "date": "2023-04-11",
            "organization": "Microsoft",
            "author": "Microsoft Incident Response",
            "title": "Guidance for investigating attacks using CVE-2022-21894: The BlackLotus campaign",
            "categories": [
                "BlackLotus"
            ]
        },
        {
            "data_url": "https://www.binarly.io/posts/The_Untold_Story_of_the_BlackLotus_UEFI_Bootkit/index.html",
            "date": "2023-03-09",
            "organization": "binarly",
            "author": "Aleksandr Matrosov",
            "title": "The Untold Story of the BlackLotus UEFI Bootkit",
            "categories": [
                "BlackLotus"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2023/03/01/blacklotus-uefi-bootkit-myth-confirmed/",
            "date": "2023-03-01",
            "organization": "ESET Research",
            "author": "Martin Smol\u00e1r",
            "title": "BlackLotus UEFI bootkit: Myth confirmed",
            "categories": [
                "BlackLotus"
            ]
        }
    ],
    "mitre": []
};