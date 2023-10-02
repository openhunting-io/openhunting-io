var threatdata = {
    "name": "Speculoos",
    "alias": "Speculoos",
    "category": "Malware",
    "type": "Backdoor, Info stealer, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Speculoos",
        "names": [
            {
                "name": "Speculoos"
            }
        ],
        "description": "(Palo Alto) We identified a total of five samples from our dataset, all of which were approximately the same file size, but contain minute differences amongst the sample set. The subtle differences indicate that they likely originated from the same developer and were either recompiled or patched. As described by FireEye, Speculoos was delivered by exploiting CVE-2019-19781, a vulnerability affecting the Citrix Application Delivery Controller, Citrix Gateway, and Citrix SD-WAN WANOP appliances that allowed an adversary to remotely execute arbitrary commands.\n\nBased on the spread of industries and regions, in addition to the timing of the vulnerability disclosure, we believe this campaign may have been more opportunistic in nature compared to the highly targeted attack campaigns that are often associated with these types of adversaries. However, considering the exploitation of the vulnerability in conjunction with delivery of a backdoor specifically designed to execute on the associated FreeBSD operating system indicates the adversary was absolutely targeting the affected devices.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/apt41-using-new-speculoos-backdoor-to-target-organizations-globally/",
            "https://www.fireeye.com/blog/threat-research/2020/03/apt41-initiates-global-intrusion-campaign-using-multiple-exploits.html",
            "https://www.secureworks.com/research/threat-profiles/bronze-atlas"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.speculoos"
        ],
        "uuid": "0e4ffad1-f5b0-4e3d-af45-c3b017566c1e",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "speculoos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/apt41-using-new-speculoos-backdoor-to-target-organizations-globally/",
            "date": "2020-04-13",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Bryan Lee",
            "title": "APT41 Using New Speculoos Backdoor to Target Organizations Globally",
            "categories": [
                "Speculoos",
                "APT41"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2020/03/apt41-initiates-global-intrusion-campaign-using-multiple-exploits.html",
            "date": "2020-03-25",
            "organization": "FireEye",
            "author": "Christopher Glyer",
            "title": "This Is Not a Test: APT41 Initiates Global Intrusion Campaign Using Multiple Exploits",
            "categories": [
                "Speculoos",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/bronze-atlas",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "BRONZE ATLAS",
            "categories": [
                "Speculoos",
                "Winnti",
                "ACEHASH",
                "CCleaner Backdoor",
                "CHINACHOPPER",
                "Empire Downloader",
                "HTran",
                "MimiKatz",
                "PlugX",
                "Winnti",
                "APT41"
            ]
        }
    ],
    "mitre": []
};