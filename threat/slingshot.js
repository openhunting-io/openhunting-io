var threatdata = {
    "name": "Slingshot",
    "alias": "Slingshot",
    "category": "Malware",
    "type": "Loader",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "Slingshot",
        "names": [
            {
                "name": "Slingshot"
            }
        ],
        "description": "(Kaspersky) While analysing an incident which involved a suspected keylogger, we identified a malicious library able to interact with a virtual file system, which is usually the sign of an advanced APT actor. This turned out to be a malicious loader internally named \u2018Slingshot\u2019, part of a new, and highly sophisticated attack platform that rivals Project Sauron and {{Regin}} in complexity.\n\nThe initial loader replaces the victim\u00b4s legitimate Windows library \u2018scesrv.dll\u2019 with a malicious one of exactly the same size. Not only that, it interacts with several other modules including a ring-0 loader, kernel-mode network sniffer, own base-independent packer, and virtual filesystem, among others.\n\nFollowing infection, Slingshot would load a number of modules onto the victim device, including two huge and powerful ones: {{Cahnadr}}, the kernel mode module, and {{GollumApp}}, a user mode module. The two modules are connected and able to support each other in information gathering, persistence and data exfiltration.",
        "category": "Malware",
        "type": [
            "Loader"
        ],
        "information": [
            "https://securelist.com/apt-slingshot/84312/",
            "https://s3-eu-west-1.amazonaws.com/khub-media/wp-content/uploads/sites/43/2018/03/09133534/The-Slingshot-APT_report_ENG_final.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.slingshot"
        ],
        "uuid": "24bf0029-00d6-4eb3-9410-922221a07e36",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "slingshot",
    "analysis": null
};