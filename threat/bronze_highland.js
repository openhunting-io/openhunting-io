var threatdata = {
    "name": "Bronze Highland",
    "alias": "Bronze Highland, Evasive Panda, Daggerfly",
    "category": "APT",
    "type": "-",
    "modified": "2023-06-21",
    "all_data": {
        "actor": "Bronze Highland",
        "names": [
            {
                "name": "Bronze Highland",
                "name-giver": "SecureWorks"
            },
            {
                "name": "Evasive Panda",
                "name-giver": "Malwarebytes"
            },
            {
                "name": "Daggerfly",
                "name-giver": "Symantec"
            }
        ],
        "country": [
            "China"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2012",
        "description": "(SecureWorks) BRONZE HIGHLAND has been observed using spearphishing as an initial infection vector to deploy the MgBot remote access trojan against targets in Hong Kong. Third party reporting suggests the threat group also targets India, Malaysia and Taiwan and leverages Cobalt Strike and KsRemote Android Rat. CTU researchers assess with moderate confidence that BRONZE HIGHLAND operates on behalf of China and has a remit covering espionage against domestic human rights and pro-democracy advocates and nations neighbouring China.",
        "observed-sectors": [
            "Telecommunications",
            "human rights and pro-democracy advocates"
        ],
        "observed-countries": [
            "China",
            "Hong Kong",
            "India",
            "Macao",
            "Malaysia",
            "Myanmar",
            "Nigeria",
            "Philippines",
            "Taiwan",
            "Vietnam",
            "Africa"
        ],
        "tools": [
            "Cobalt Strike",
            "MgBot",
            "KsRemote",
            "Living off the Land"
        ],
        "operations": [
            {
                "date": "2020",
                "activity": "Evasive Panda APT group delivers malware via updates for popular Chinese software\nhttps://www.welivesecurity.com/2023/04/26/evasive-panda-apt-group-malware-updates-popular-chinese-software/"
            },
            {
                "date": "2022-11",
                "activity": "Daggerfly: APT Actor Targets Telecoms Company in Africa\nhttps://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/apt-attacks-telecoms-africa-mgbot"
            }
        ],
        "information": [
            "https://www.secureworks.com/research/threat-profiles",
            "https://blog.malwarebytes.com/threat-analysis/2020/07/chinese-apt-group-targets-india-and-hong-kong-using-new-variant-of-mgbot-malware/",
            "https://vb2020.vblocalhost.com/uploads/VB2020-43.pdf"
        ],
        "uuid": "8c9d0ce1-0e92-4de2-b8e0-053b16ad37ed",
        "last-card-change": "2023-06-21",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "bronze_highland",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://vb2020.vblocalhost.com/uploads/VB2020-43.pdf",
            "date": "2020-09-30",
            "organization": "Malwarebytes",
            "author": "Hossein Jazi",
            "title": "Evasive Panda",
            "categories": [
                "MgBot",
                "BRONZE HIGHLAND",
                "Evasive Panda"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2020/07/chinese-apt-group-targets-india-and-hong-kong-using-new-variant-of-mgbot-malware/",
            "date": "2020-07-21",
            "organization": "Malwarebytes",
            "author": "Hossein Jazi",
            "title": "Chinese APT group targets India and Hong Kong using new variant of MgBot malware",
            "categories": [
                "KSREMOTE",
                "Cobalt Strike",
                "MgBot",
                "Evasive Panda"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2014/02/needle-haystack",
            "date": "2014-02-03",
            "organization": "Virus Bulletin",
            "author": "Gabor Szappanos",
            "title": "Needle in a haystack",
            "categories": [
                "Evasive Panda"
            ]
        }
    ],
    "mitre": []
};