var threatdata = {
    "name": "SLUB",
    "alias": "SLUB",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Downloader, Exfiltration",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "SLUB",
        "names": [
            {
                "name": "SLUB"
            }
        ],
        "description": "(Trend Micro) We recently came across a previously unknown malware that piqued our interest in multiple ways. For starters, we discovered it being spread via watering hole attacks, a technique that involves an attacker compromising a website before adding code to it so visitors are redirected to the infecting code. In this case, each visitor is redirected only once. The infection was done by exploiting CVE-2018-8174, a VBScript engine vulnerability that was patched by Microsoft back in May 2018.\nSecond, it uses a multi-stage infection scheme. After it exploits the vulnerability, it downloads a DLL and runs it in PowerShell (PS). This file, which is a downloader, then downloads and runs the second executable file containing a backdoor. The first stage downloader also checks for the existence of different kinds of antivirus software processes, and then proceeds to exit if any is found. At the time of discovery, the backdoor was seemingly unknown to AV products.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.trendmicro.com/en_us/research/19/c/new-slub-backdoor-uses-github-communicates-via-slack.html",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/SLUB-gets-rid-of-github-intensifies-slack-use/",
            "https://documents.trendmicro.com/assets/white_papers/wp-operation-earth-kitsune.pdf",
            "https://www.virusbulletin.com/uploads/pdf/conference_slides/2019/VB2019-LunghiHorejsi.pdf"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.slub"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:slub"
        ],
        "uuid": "576647b7-c4ec-4642-baa2-0d9b53d9ae3c",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "slub",
    "analysis": null
};