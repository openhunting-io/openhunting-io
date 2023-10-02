var threatdata = {
    "name": "MgBot",
    "alias": "MgBot, BLame, Mgmbot",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2023-09-07",
    "all_data": {
        "tool": "MgBot",
        "names": [
            {
                "name": "MgBot"
            },
            {
                "name": "BLame"
            },
            {
                "name": "Mgmbot"
            }
        ],
        "description": "(Malwarebytes) MgBot uses several anti-analysis and anti-virtualization techniques. The code is self modifying which means it alters its code sections during runtime. This makes static analysis of the sample harder.\n\nMgBot tries to avoid running in known virtualized environment such as VmWare, Sandboxie and VirtualBox. To identify if it\u2019s running in one of these environments, it looks for the following DLL files: vmhgfs.dll, sbiedll.dll and vboxogl.dll and if it finds any of these DLLs, it goes to an infinite loop without doing any malicious activity.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://blog.malwarebytes.com/threat-analysis/2020/07/chinese-apt-group-targets-india-and-hong-kong-using-new-variant-of-mgbot-malware/",
            "https://vb2020.vblocalhost.com/uploads/VB2020-43.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.mgbot"
        ],
        "uuid": "ff3865c1-fb45-4197-89a2-2cce3bed17bb",
        "last-card-change": "2021-08-10",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "mgbot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://blog.sekoia.io/my-teas-not-cold-an-overview-of-china-cyber-threat/",
            "date": "2023-09-07",
            "organization": "Sekoia",
            "author": "Jamila B.",
            "title": "My Tea\u2019s not cold. An overview of China\u2019s cyber threat",
            "categories": [
                "Melofee",
                "PingPull",
                "SoWaT",
                "Sword2033",
                "MgBot",
                "MQsTTang",
                "PlugX",
                "TONESHELL"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2023/04/26/evasive-panda-apt-group-malware-updates-popular-chinese-software/",
            "date": "2023-04-26",
            "organization": "ESET Research",
            "author": "Facundo Mu\u00f1oz",
            "title": "Evasive Panda APT group delivers malware via updates for popular Chinese software",
            "categories": [
                "MgBot",
                "BRONZE HIGHLAND"
            ]
        },
        {
            "data_url": "https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/apt-attacks-telecoms-africa-mgbot",
            "date": "2023-04-20",
            "organization": "Symantec",
            "author": "Threat Hunter Team",
            "title": "Daggerfly: APT Actor Targets Telecoms Company in Africa",
            "categories": [
                "MgBot"
            ]
        },
        {
            "data_url": "https://twitter.com/GossiTheDog/status/1438500100238577670",
            "date": "2021-09-16",
            "organization": "Twitter (@GossiTheDog)",
            "author": "Kevin Beaumont",
            "title": "Tweet on some unknown threat actor dropping Mgbot, custom IIS modular backdoor and cobalstrike using exploiting ProxyShell",
            "categories": [
                "Cobalt Strike",
                "MgBot"
            ]
        },
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
            "data_url": "https://www.youtube.com/watch?v=LeKi0KfzOow&list=PLffioUnqXWkdzWcZXH-bzPVgcs2R4r7iS&index=1&t=2154s",
            "date": "2020-09-30",
            "organization": "Youtube (Virus Bulletin)",
            "author": "Hossein Jazi",
            "title": "Evasive Panda",
            "categories": [
                "MgBot",
                "BRONZE HIGHLAND"
            ]
        },
        {
            "data_url": "https://blog.malwarebytes.com/threat-analysis/2020/07/chinese-apt-group-targets-india-and-hong-kong-using-new-variant-of-mgbot-malware",
            "date": "2020-07-21",
            "organization": "Malwarebytes Labs",
            "author": "Hossein Jazi",
            "title": "Chinese APT group targets India and Hong Kong using new variant of MgBot malware",
            "categories": [
                "MgBot",
                "BRONZE HIGHLAND"
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
        }
    ],
    "mitre": []
};