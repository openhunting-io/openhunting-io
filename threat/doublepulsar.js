var threatdata = {
    "name": "DoublePulsar",
    "alias": "DoublePulsar",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-06-10",
    "all_data": {
        "tool": "DoublePulsar",
        "names": [
            {
                "name": "DoublePulsar"
            }
        ],
        "description": "(Trend Micro) DoublePulsar is a memory-based kernel payload that allows attackers to inject arbitrary Dynamic-link Library (DLL) files to the system processes and execute shellcode payloads, ultimately providing attackers unprecedented access to infected x86 and 64-bit systems. Trend Micro\u2019s continuous analysis of the dump suggests that {{EternalBlue}} is one of the exploits that also executes DoublePulsar as payload. EternalBlue is part of the Fuzzbunch framework (also found in the dump) responsible for executing the exploits.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/malware-using-exploits-from-shadow-brokers-in-the-wild",
            "https://countercept.com/our-thinking/doublepulsar-usermode-analysis-generic-reflective-dll-loader/",
            "https://countercept.com/our-thinking/analyzing-the-doublepulsar-kernel-dll-injection-technique/",
            "https://github.com/countercept/doublepulsar-c2-traffic-decryptor",
            "https://labs.nettitude.com/blog/a-quick-analysis-of-the-latest-shadow-brokers-dump/",
            "https://en.wikipedia.org/wiki/DoublePulsar"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.doublepulsar"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DoublePulsar"
        ],
        "uuid": "15f91367-9891-423d-9c11-060172f7a7f6",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "doublepulsar",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2021/06/10/backdoordiplomacy-upgrading-quarian-turian/",
            "date": "2021-06-10",
            "organization": "ESET Research",
            "author": "Adam Burgher",
            "title": "BackdoorDiplomacy: Upgrading from Quarian to Turian",
            "categories": [
                "CHINACHOPPER",
                "DoublePulsar",
                "EternalRocks",
                "turian",
                "BackdoorDiplomacy"
            ]
        },
        {
            "data_url": "https://www.symantec.com/blogs/threat-intelligence/buckeye-windows-zero-day-exploit",
            "date": "2019-05-07",
            "organization": "Symantec",
            "author": "Security Response Attack Investigation Team",
            "title": "Buckeye: Espionage Outfit Used Equation Group Tools Prior to Shadow Brokers Leak",
            "categories": [
                "DoublePulsar"
            ]
        }
    ],
    "mitre": []
};