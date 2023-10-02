var threatdata = {
    "name": "SkinnyBoy",
    "alias": "SkinnyBoy",
    "category": "Malware",
    "type": "Backdoor, Info stealer",
    "modified": "2021-12-28",
    "all_data": {
        "tool": "SkinnyBoy",
        "names": [
            {
                "name": "SkinnyBoy"
            }
        ],
        "description": "(Cluster25) The vector of the infection is a spear phishing email delivering a Word Office document with a significant name related  to  an  International  Conference. Both the vector and its naming are consistent with APT28 / FancyBear TTPs.As expected, the document triggers a MACRO function able to extract a Microsoft Dynamic Link Library (DLL) which then acts as downloader of a SkinnyBoy dropper (tdp1.exe) from a first dropurl.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Info stealer"
        ],
        "information": [
            "https://cluster25.io/wp-content/uploads/2021/05/2021-05_FancyBear.pdf",
            "https://cybergeeks.tech/skinnyboy-apt28/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.skinnyboy"
        ],
        "uuid": "7c800792-38a5-4583-88f1-2ee873960680",
        "last-card-change": "2021-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "skinnyboy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://cybergeeks.tech/skinnyboy-apt28/",
            "date": "2021-08-03",
            "organization": "Cyber Geeks",
            "author": "CyberMasterV",
            "title": "A step-by-step analysis of the new malware used by APT28/Sofacy called SkinnyBoy",
            "categories": [
                "SkinnyBoy"
            ]
        },
        {
            "data_url": "https://cluster25.io/wp-content/uploads/2021/05/2021-05_FancyBear.pdf",
            "date": "2021-05",
            "organization": "Cluster25",
            "author": "Cluster25",
            "title": "A Not So Fancy Game: Exploring the New SkinnyBoy Bear's Backdoor",
            "categories": [
                "SkinnyBoy"
            ]
        }
    ],
    "mitre": []
};