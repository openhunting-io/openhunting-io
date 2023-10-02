var threatdata = {
    "name": "ISMDoor",
    "alias": "ISMDoor",
    "category": "Tools",
    "type": "Backdoor, Tunneling",
    "modified": "2022-07-18",
    "all_data": {
        "tool": "ISMDoor",
        "names": [
            {
                "name": "ISMDoor"
            }
        ],
        "description": "(Arbor) Ismdoor has an encrypted configuration that contains a primary and secondary C2 domain, various identifiers, timeouts, and flags. These values can be updated by later C2 commands. A substitution cipher is used to decrypt the configuration when it is needed. The character mapping has been consistent across samples and we have made available a Python snippet of it on Github.",
        "category": "Tools",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://www.netscout.com/blog/asert/greenbugs-dns-isms"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ismdoor"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ismdoor"
        ],
        "uuid": "889bdc01-47e6-4026-ae68-abe9dc87404e",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "ismdoor",
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
            "data_url": "http://www.clearskysec.com/greenbug/",
            "date": "2017-10-24",
            "organization": "ClearSky",
            "author": "ClearSky Research Team",
            "title": "Iranian Threat Agent Greenbug Impersonates Israeli High-Tech and Cyber Security Companies",
            "categories": [
                "ISMDoor"
            ]
        },
        {
            "data_url": "https://web.archive.org/web/20190331181353/https://www.symantec.com/connect/blogs/greenbug-cyberespionage-group-targeting-middle-east-possible-links-shamoon",
            "date": "2017-01-23",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Greenbug cyberespionage group targeting Middle East, possible links to Shamoon",
            "categories": [
                "DistTrack",
                "ISMDoor",
                "Greenbug"
            ]
        },
        {
            "data_url": "https://www.symantec.com/connect/blogs/greenbug-cyberespionage-group-targeting-middle-east-possible-links-shamoon",
            "date": "2017-01-23",
            "organization": "Symantec",
            "author": "Symantec Security Response",
            "title": "Greenbug cyberespionage group targeting Middle East, possible links to Shamoon",
            "categories": [
                "DistTrack",
                "ISMDoor",
                "Greenbug"
            ]
        }
    ],
    "mitre": []
};