var threatdata = {
    "name": "ISMAgent",
    "alias": "ISMAgent",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "ISMAgent",
        "names": [
            {
                "name": "ISMAgent"
            }
        ],
        "description": "(Palo Alto) On May 1, 2017, Arbor Networks published research on {{ISMDoor}} using DNS tunneling to communicate with its C2 server, which is nearly identical to the DNS tunneling the payload of this attack carries out. Due to considerable differences and evidence of potentially different authors between the previous ISMDoor samples and this newly discovered variant, we are tracking this new variant as ISMAgent.\n\nThe ISMAgent tool comes with a default configuration that specifies the C2 domain and the number of minutes between further attempts to execute the tool. However, an actor can use command line arguments to create a new ISMAgent sample that is configured with a specified C2 domain and a specified number of minutes to automatically execute the Trojan.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-oilrig-uses-ismdoor-variant-possibly-linked-greenbug-threat-group/",
            "https://unit42.paloaltonetworks.com/dns-tunneling-in-the-wild-overview-of-oilrigs-dns-tunneling/",
            "http://www.clearskysec.com/ismagent/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ismagent"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ISMAgent"
        ],
        "uuid": "da73c338-cd73-48fb-be70-3498915cfad5",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ismagent",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/evasive-serpens/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Evasive Serpens",
            "categories": [
                "TwoFace",
                "ISMAgent",
                "ISMDoor",
                "OopsIE",
                "RDAT",
                "OilRig"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/greenbug-espionage-telco-south-asia",
            "date": "2020-05-19",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Sophisticated Espionage Group Turns Attention to Telecom Providers in South Asia",
            "categories": [
                "ISMAgent",
                "ISMDoor"
            ]
        },
        {
            "data_url": "https://cyware.com/blog/apt34-the-helix-kitten-cybercriminal-group-loves-to-meow-middle-eastern-and-international-organizations-48ae",
            "date": "2019-08-22",
            "organization": "Cyware",
            "author": "Cyware",
            "title": "APT34: The Helix Kitten Cybercriminal Group Loves to Meow Middle Eastern and International Organizations",
            "categories": [
                "TwoFace",
                "BONDUPDATER",
                "POWRUNER",
                "QUADAGENT",
                "Helminth",
                "ISMAgent",
                "Karkoff",
                "LONGWATCH",
                "OopsIE",
                "PICKPOCKET",
                "RGDoor",
                "VALUEVAULT"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/dns-tunneling-in-the-wild-overview-of-oilrigs-dns-tunneling/",
            "date": "2019-04-16",
            "organization": "",
            "author": "Robert Falcone",
            "title": "DNS Tunneling in the Wild: Overview of OilRig\u2019s DNS Tunneling",
            "categories": [
                "BONDUPDATER",
                "QUADAGENT",
                "Alma Communicator",
                "Helminth",
                "ISMAgent"
            ]
        },
        {
            "data_url": "http://www.clearskysec.com/ismagent/",
            "date": "2017-08-28",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Recent ISMAgent Samples and Infrastructure by Iranian Threat Group GreenBug",
            "categories": [
                "ISMAgent"
            ]
        }
    ],
    "mitre": []
};