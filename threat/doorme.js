var threatdata = {
    "name": "DoorMe",
    "alias": "DoorMe",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-08-18",
    "all_data": {
        "tool": "DoorMe",
        "names": [
            {
                "name": "DoorMe"
            }
        ],
        "description": "(Positive Technologies) Among the malware samples we found during the incident investigation, the DoorMe backdoor is the most interesting. Basically, it is a native IIS module that is registered as a filter through which HTTP requests and responses are processed.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/new-apt-group-chamelgang/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.doorme"
        ],
        "uuid": "e420c439-ae93-4de2-80ee-04233fe777d4",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "doorme",
    "analysis": null,
    "articles": [
        {
            "data_url": "http://stillu.cc/assets/slides/2023-08-Unmasking%20CamoFei.pdf",
            "date": "2023-08-18",
            "organization": "TEAMT5",
            "author": "Still Hsu",
            "title": "Unmasking CamoFei: An In-depth Analysis of an Emerging APT Group Focused on Healthcare Sectors in East Asia",
            "categories": [
                "CatB",
                "Cobalt Strike",
                "DoorMe",
                "GIMMICK"
            ]
        },
        {
            "data_url": "https://www.elastic.co/security-labs/update-to-the-REF2924-intrusion-set-and-related-campaigns",
            "date": "2023-02-02",
            "organization": "Elastic",
            "author": "Salim Bitam",
            "title": "Update to the REF2924 intrusion set and related campaigns",
            "categories": [
                "DoorMe",
                "ShadowPad",
                "SiestaGraph"
            ]
        },
        {
            "data_url": "https://www.elastic.co/security-labs/siestagraph-new-implant-uncovered-in-asean-member-foreign-ministry",
            "date": "2022-12-16",
            "organization": "Elastic",
            "author": "Samir Bousseaden",
            "title": "SiestaGraph: New implant uncovered in ASEAN member foreign ministry",
            "categories": [
                "DoorMe",
                "SiestaGraph"
            ]
        },
        {
            "data_url": "https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/new-apt-group-chamelgang/",
            "date": "2021-09-30",
            "organization": "PTSecurity",
            "author": "PT Expert Security Center",
            "title": "Masters of Mimicry: new APT group ChamelGang and its arsenal",
            "categories": [
                "DoorMe"
            ]
        }
    ],
    "mitre": []
};