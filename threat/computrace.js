var threatdata = {
    "name": "Computrace",
    "alias": "Computrace, LoJack",
    "category": "Malware",
    "type": "Rootkit",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Computrace",
        "names": [
            {
                "name": "Computrace"
            },
            {
                "name": "LoJack"
            }
        ],
        "description": "(Malwarebytes) Security researchers have detected the first known instance of a UEFI bootkit being used in targeted campaigns against government entities across Central and Eastern Europe. The attack focuses on UFEI-enabled computers and relies on a persistence mechanism that has been stolen from a legitimate, but often questioned, software called Computrace that comes by default on many computer systems.\n\nThis Computrace agent from Absolute Software is a service designed to recover lost or stolen computers, the underlying technology of which is based on the LoJack Stolen Vehicle Recovery System. In 2005, Absolute Software licensed the LoJack name and subsequent tracking technology to aid in recovery efforts of stolen computers. After negotiations with manufacturers, the Computrace agent from Absolute Software\u2014or LoJack for computers\u2014now comes pre-loaded on a large number of machines.",
        "category": "Malware",
        "type": [
            "Rootkit"
        ],
        "information": [
            "https://blog.malwarebytes.com/cybercrime/hacking/2018/10/lojack-for-computers-used-to-attack-european-government/",
            "https://www.lastline.com/labsblog/apt28-rollercoaster-the-lowdown-on-hijacked-lojack/",
            "https://bartblaze.blogspot.de/2014/11/thoughts-on-absolute-computrace.html",
            "https://asert.arbornetworks.com/lojack-becomes-a-double-agent/",
            "https://www.absolute.com/en/resources/faq/absolute-response-to-arbor-lojack-research"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.computrace"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:computrace"
        ],
        "uuid": "0ed6c93b-24a1-477f-b921-a3741bc0eba9",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "computrace",
    "analysis": null
};