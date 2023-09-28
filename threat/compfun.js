var threatdata = {
    "name": "COMpfun",
    "alias": "COMpfun, Reductor RAT",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "COMpfun",
        "names": [
            {
                "name": "COMpfun"
            },
            {
                "name": "Reductor RAT"
            }
        ],
        "description": "(G-Data) G DATA SecurityLabs experts discovered a new Remote Administration Tool, which we dubbed COMpfun. This RAT supports 32-bit and 64-bit Windows versions, up to the Windows 8 operating system. The features are rather common for today\u2019s espionage tools: file management (download and upload), screenshot taking, Keylogger functionality, code execution possibility and more. It uses the HTTPS and an asymmetric encryption (RSA) to communicate with the command and control server. The big novelty is the persistence mechanism: the malware hijacks a legitimate COM object in order to be injected into the processes of the compromised system. And it is remarkable, that this hijacking action does not need administrator rights. With this RAT, Attackers could spy on an infected system for quite a long time, as this detection evasion and persistence mechanism is indeed pretty advanced!",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer"
        ],
        "information": [
            "https://www.gdatasoftware.com/blog/2014/10/23941-com-object-hijacking-the-discreet-way-of-persistence",
            "https://securelist.com/compfun-successor-reductor/93633/",
            "https://securelist.com/compfun-http-status-based-trojan/96874/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.compfun"
        ],
        "uuid": "bf661fd5-7355-48f3-ae5b-bd692345b4bb",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "compfun",
    "analysis": null
};