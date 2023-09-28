var threatdata = {
    "name": "SocksBot",
    "alias": "SocksBot, BIRDDOG, Nadrac",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Exfiltration, Downloader, Loader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "SocksBot",
        "names": [
            {
                "name": "SocksBot"
            },
            {
                "name": "BIRDDOG"
            },
            {
                "name": "Nadrac"
            }
        ],
        "description": "(Accenture) The SOCKSBOT implant has the following capabilities:\n\u2022 Enumerate processes (process list)\n\u2022 Take screenshots\n\u2022 Download, upload, write, and execute files\n\u2022 Create and inject into new processes\n\u2022 Communicate to C2 via sockets.\n\nThis implant will communicate with the designated C2 server by first creating a buffer and will, on first execution, communicate to the C2 server that it has successfully infected a target by using a .php URI that is pseudo-randomly generated. SOCKSBOT uses the ObtainUserAgentString API to determine the default user-agent of the machine.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Exfiltration",
            "Downloader",
            "Loader"
        ],
        "information": [
            "https://www.accenture.com/_acnmedia/pdf-83/accenture-goldfin-security-alert.pdf",
            "https://www.fireeye.com/blog/threat-research/2018/08/fin7-pursuing-an-enigmatic-and-evasive-global-criminal-operation.html",
            "https://documents.trendmicro.com/assets/tech-brief-untangling-the-patchwork-cyberespionage-group.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0273/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.socksbot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:socksbot"
        ],
        "uuid": "43ced180-196d-4510-95cf-a4f7d9f05d2a",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "socksbot",
    "analysis": null
};