var threatdata = {
    "name": "AMTsol",
    "alias": "AMTsol, Adupihan",
    "category": "Malware",
    "type": "Exfiltration",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "AMTsol",
        "names": [
            {
                "name": "AMTsol"
            },
            {
                "name": "Adupihan"
            }
        ],
        "description": "(Microsoft) Since the 2016 publication, Microsoft has come across an evolution of PLATINUM\u2019s file-transfer tool, one that uses the Intel Active Management Technology (AMT) Serial-over-LAN (SOL) channel for communication. This channel works independently of the operating system (OS), rendering any communication over it invisible to firewall and network monitoring applications running on the host device. Until this incident, no malware had been discovered misusing the AMT SOL feature for communication.\n\nUpon discovery of this unique file-transfer tool, Microsoft shared information with Intel, and the two companies collaborated to analyze and better understand the purpose and implementation of the tool. We confirmed that the tool did not expose vulnerabilities in the management technology itself, but rather misused AMT SOL within target networks that have already been compromised to keep communication stealthy and evade security applications.",
        "category": "Malware",
        "type": [
            "Exfiltration"
        ],
        "information": [
            "https://www.microsoft.com/security/blog/2017/06/07/platinum-continues-to-evolve-find-ways-to-maintain-invisibility/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.amtsol"
        ],
        "uuid": "454c7a03-4419-43d9-9671-5c70a4a81a8d",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "amtsol",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blogs.technet.microsoft.com/mmpc/2017/06/07/platinum-continues-to-evolve-find-ways-to-maintain-invisibility/",
            "date": "2017-06-07",
            "organization": "Microsoft",
            "author": "Microsoft Defender ATP Research Team",
            "title": "PLATINUM continues to evolve, find ways to maintain invisibility",
            "categories": [
                "AMTsol"
            ]
        },
        {
            "data_url": "http://download.microsoft.com/download/2/2/5/225BFE3E-E1DE-4F5B-A77B-71200928D209/Platinum%20feature%20article%20-%20Targeted%20attacks%20in%20South%20and%20Southeast%20Asia%20April%202016.pdf",
            "date": "2016-04-26",
            "organization": "Microsoft",
            "author": "Windows Defender Advanced Threat Hunting Team",
            "title": "PLATINUM Targeted attacks in South and Southeast Asia",
            "categories": [
                "AMTsol",
                "PLATINUM"
            ]
        }
    ],
    "mitre": []
};