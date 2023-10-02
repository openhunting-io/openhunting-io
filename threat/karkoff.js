var threatdata = {
    "name": "Karkoff",
    "alias": "Karkoff, MailDropper, DropperBackdoor, CACTUSPIPE",
    "category": "Malware",
    "type": "Backdoor, Dropper",
    "modified": "2023-02-02",
    "all_data": {
        "tool": "Karkoff",
        "names": [
            {
                "name": "Karkoff"
            },
            {
                "name": "MailDropper"
            },
            {
                "name": "DropperBackdoor"
            },
            {
                "name": "CACTUSPIPE"
            }
        ],
        "description": "(Talos) In April, Cisco Talos identified an undocumented malware developed in .NET. On the analyzed samples, the malware author left two different internal names in plain text: 'DropperBackdoor' and 'Karkoff.' We decided to use the second name as the malware's moniker, as it is less generic. The malware is lightweight compared to other malware due to its small size and allows remote code execution from the C2 server. There is no obfuscation and the code can be easily disassembled.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Dropper"
        ],
        "information": [
            "https://blog.talosintelligence.com/2019/04/dnspionage-brings-out-karkoff.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.karkoff"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Karkoff"
        ],
        "uuid": "330eed05-5332-4314-a9ef-ebe891bc3153",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "karkoff",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/en_us/research/23/b/new-apt34-malware-targets-the-middle-east.html",
            "date": "2023-02-02",
            "organization": "Trend Micro",
            "author": "Mohamed Fahmy",
            "title": "New APT34 Malware Targets The Middle East",
            "categories": [
                "Karkoff",
                "RedCap",
                "Saitama Backdoor"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/o_EVjBVN2sQ1q7cl4rUXoQ",
            "date": "2021-06-16",
            "organization": "Venustech",
            "author": "ADLab",
            "title": "APT34 organization latest in-depth analysis report on attack activities",
            "categories": [
                "Karkoff"
            ]
        },
        {
            "data_url": "https://blog.telsy.com/apt34-aka-oilrig-attacks-lebanon-government-entities-with-maildropper-implant/",
            "date": "2020-03-02",
            "organization": "Telsy",
            "author": "Telsy",
            "title": "APT34 (aka OilRig, aka Helix Kitten) attacks Lebanon government entities with MailDropper implants",
            "categories": [
                "Karkoff"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/karkoff-2020-a-new-apt34-espionage-operation-involves-lebanon-government/",
            "date": "2020-03-02",
            "organization": "Yoroi",
            "author": "ZLAB-Yoroi",
            "title": "Karkoff 2020: a new APT34 espionage operation involves Lebanon Government",
            "categories": [
                "Karkoff"
            ]
        },
        {
            "data_url": "https://www.secureworks.com/research/threat-profiles/cobalt-edgewater",
            "date": "2020",
            "organization": "Secureworks",
            "author": "SecureWorks",
            "title": "COBALT EDGEWATER",
            "categories": [
                "DNSpionage",
                "Karkoff",
                "DNSpionage"
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
            "data_url": "https://blog.talosintelligence.com/2019/04/dnspionage-brings-out-karkoff.html",
            "date": "2019-04-23",
            "organization": "Talos",
            "author": "Warren Mercer",
            "title": "DNSpionage brings out the Karkoff",
            "categories": [
                "DNSpionage",
                "Karkoff",
                "DNSpionage"
            ]
        }
    ],
    "mitre": []
};