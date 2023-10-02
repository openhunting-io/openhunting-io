var threatdata = {
    "name": "Filerase",
    "alias": "Filerase",
    "category": "Malware",
    "type": "Wiper",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Filerase",
        "names": [
            {
                "name": "Filerase"
            }
        ],
        "description": "(Symantec) Unlike previous Shamoon attacks, these latest attacks involve a new, second piece of wiping malware (Trojan.Filerase). This malware will delete and overwrite files on the infected computer. Shamoon itself will meanwhile erase the master boot record of the computer, rendering it unusable.\n\nThe addition of the Filerase wiper makes these attacks more destructive than use of the Shamoon malware alone. While a computer infected by Shamoon could be unusable, files on the hard disk may be forensically recoverable. However, if the files are first wiped by the Filerase malware, recovery becomes impossible.\n\nFilerase is spread across the victim\u2019s network from one initial computer using a list of remote computers. This list is in the form of a text file and is unique to each victim, meaning the attackers likely gathered this information during an earlier reconnaissance phase of the intrusion. This list is first copied by a component called OCLC.exe and passed on to another tool called Spreader.exe. The Spreader component will then copy Filerase to all the computers listed. It will then simultaneously trigger the Filerase malware on all infected machines.",
        "category": "Malware",
        "type": [
            "Wiper"
        ],
        "information": [
            "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/shamoon-destructive-threat-re-emerges-new-sting-its-tail"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.filerase"
        ],
        "uuid": "6fdf99c2-8299-484b-a70a-ca2534092fde",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "filerase",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/shamoon-attackers-employ-new-tool-kit-to-wipe-infected-systems",
            "date": "2018-12-19",
            "organization": "McAfee",
            "author": "Thomas Roccia",
            "title": "Shamoon Attackers Employ New Tool Kit to Wipe Infected Systems",
            "categories": [
                "Filerase"
            ]
        },
        {
            "data_url": "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/shamoon-destructive-threat-re-emerges-new-sting-its-tail",
            "date": "2018-12-14",
            "organization": "Symantec",
            "author": "Critical Attack Discovery and Intelligence Team",
            "title": "Shamoon: Destructive Threat Re-Emerges with New Sting in its Tail",
            "categories": [
                "DistTrack",
                "Filerase",
                "StoneDrill",
                "OilRig"
            ]
        }
    ],
    "mitre": []
};