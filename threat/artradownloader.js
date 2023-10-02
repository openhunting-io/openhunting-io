var threatdata = {
    "name": "ArtraDownloader",
    "alias": "ArtraDownloader, Artra Downloader",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "ArtraDownloader",
        "names": [
            {
                "name": "ArtraDownloader"
            },
            {
                "name": "Artra Downloader"
            }
        ],
        "description": "(Palo Alto) Overall, the ArtraDownloader malware family is not sophisticated, leveraging simple registry keys for persistence and HTTP requests to download and execute a remote file. Important strings within these samples are obfuscated by adding or subtracting from each byte within a string. This same obfuscation routine is used when sending data via HTTP.\n\nThis downloader has frequently been observed downloading the Remote Access Trojan (RAT) {{BitterRAT}} which is associated with BITTER threat operations.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/multiple-artradownloader-variants-used-by-bitter-to-target-pakistan/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.artra"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ArtraDownloader"
        ],
        "uuid": "b8d91e49-6460-40aa-9a70-28398600fb95",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "artradownloader",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secuinfra.com/en/techtalk/whatever-floats-your-boat-bitter-apt-continues-to-target-bangladesh/",
            "date": "2022-07-05",
            "organization": "SECUINFRA",
            "author": "SECUINFRA Falcon Team",
            "title": "Whatever floats your Boat \u2013 Bitter APT continues to target Bangladesh",
            "categories": [
                "AlmondRAT",
                "Artra Downloader",
                "Bitter RAT",
                "ZxxZ"
            ]
        },
        {
            "data_url": "https://blog.talosintelligence.com/2022/05/bitter-apt-adds-bangladesh-to-their.html",
            "date": "2022-05-11",
            "organization": "Cisco Talos",
            "author": "Cisco Talos",
            "title": "Bitter APT adds Bangladesh to their targets",
            "categories": [
                "AndroRAT",
                "Artra Downloader",
                "Bitter RAT",
                "ZxxZ"
            ]
        },
        {
            "data_url": "https://securelist.com/apt-trends-report-q1-2021/101967/",
            "date": "2021-04-27",
            "organization": "Kaspersky",
            "author": "GReAT",
            "title": "APT trends report Q1 2021",
            "categories": [
                "PAS",
                "Artra Downloader",
                "BadNews",
                "Bozok",
                "DILLJUICE",
                "Kazuar",
                "Quasar RAT",
                "SodaMaster"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/files/News/CaseStudies/study/352/Bitdefender-PR-Whitepaper-BitterAPT-creat4571-en-EN-GenericUse.pdf",
            "date": "2020-06-19",
            "organization": "Bitdefender",
            "author": "Oana Asoltanei",
            "title": "BitterAPT Revisited: the Untold Evolution of an Android Espionage Tool",
            "categories": [
                "AndroRAT",
                "Artra Downloader",
                "Bitter RAT",
                "HAZY TIGER"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/multiple-artradownloader-variants-used-by-bitter-to-target-pakistan/",
            "date": "2019-02-25",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Josh Grunzweig",
            "title": "Multiple ArtraDownloader Variants Used by BITTER to Target Pakistan",
            "categories": [
                "Artra Downloader"
            ]
        },
        {
            "data_url": "https://www.freebuf.com/articles/database/192726.html",
            "date": "2018-12-25",
            "organization": "Tencent",
            "author": "\u817e\u8baf\u7535\u8111\u7ba1\u5bb6",
            "title": "BITTER/T-APT-17 reports on the latest attacks on sensitive agencies such as military, nuclear, and government agencies in China",
            "categories": [
                "Artra Downloader"
            ]
        },
        {
            "data_url": "https://ti.360.net/blog/articles/analysis-of-targeted-attack-against-pakistan-by-exploiting-inpage-vulnerability-and-related-apt-groups-english",
            "date": "2018-11-29",
            "organization": "360 Threat Intelligence",
            "author": "Qi Anxin Threat Intelligence Center",
            "title": "Analysis Of Targeted Attack Against Pakistan By Exploiting InPage Vulnerability And Related APT Groups",
            "categories": [
                "Artra Downloader"
            ]
        }
    ],
    "mitre": []
};