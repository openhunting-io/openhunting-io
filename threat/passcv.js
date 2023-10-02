var threatdata = {
    "name": "PassCV",
    "alias": "PassCV",
    "category": "APT",
    "type": "-",
    "modified": "2020-04-14",
    "all_data": {
        "actor": "PassCV",
        "names": [
            {
                "name": "PassCV",
                "name-giver": "Blue Coat Systems"
            }
        ],
        "country": [
            "China"
        ],
        "sponsor": "State-sponsored",
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Cylance) Snorre Fagerland of Blue Coat Systems first coined the term PassCV in a blog post. His post provides a good introduction to the group and covers some of the older infrastructure, stolen code-signing certificate reuse, and other connections associated with the PassCV malware. There are several clues alluding to the possibility that multiple groups may be utilizing the same stolen signing certificates, but at this time SPEAR believes the current attacks are more likely being perpetrated by a single group employing multiple publicly available Remote Administration Tools (RATs).\n\nThe PassCV group has been operating with continued success and has already started to expand their malware repertoire into different off-the-shelf RATs and custom code. SPEAR identified eighteen previously undisclosed stolen Authenticode certificates. These certificates were originally issued to companies and individuals scattered across China, Taiwan, Korea, Europe, the United States and Russia.\n\nThe PassCV group typically utilized publicly available RATs in addition to some custom code, which ultimately provided backdoor functionality to affected systems via phony resumes and curriculum vitae (CVs). PassCV continues to maintain a heavy reliance on obfuscated and signed versions of older RATs like ZxShell and Ghost RAT, which have remained a favorite of the wider Chinese criminal community since their initial public release.",
        "observed-sectors": [
            "Online video game companies"
        ],
        "observed-countries": [
            "China",
            "Russia",
            "South Korea",
            "Taiwan",
            "USA",
            "Europe"
        ],
        "tools": [
            "Cobalt Strike",
            "Excalibur",
            "Gh0st RAT",
            "Kitkiot",
            "NetWire RC",
            "Winnti",
            "ZXShell"
        ],
        "information": [
            "https://threatvector.cylance.com/en_us/home/digitally-signed-malware-targeting-gaming-companies.html"
        ],
        "uuid": "ffbdc428-4ee2-4402-b604-385bad6cb8ac",
        "last-card-change": "2020-04-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "passcv",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://threatvector.cylance.com/en_us/home/digitally-signed-malware-targeting-gaming-companies.html",
            "date": "2016-10-18",
            "organization": "Cylance",
            "author": "Cylance Threat Research Team",
            "title": "Digitally Signed Malware Targeting Gaming Companies",
            "categories": [
                "PassCV"
            ]
        }
    ],
    "mitre": []
};