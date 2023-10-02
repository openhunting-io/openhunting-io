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
    "file_name": "slub",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/l/who-is-the-threat-actor-behind-operation-earth-kitsune-.html",
            "date": "2020-12-15",
            "organization": "Trend Micro",
            "author": "William Gamazo Sanchez",
            "title": "Who is the Threat Actor Behind Operation Earth Kitsune?",
            "categories": [
                "Freenki Loader",
                "SLUB"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/en_us/research/20/j/operation-earth-kitsune-a-dance-of-two-new-backdoors.html",
            "date": "2020-10-28",
            "organization": "Trend Micro",
            "author": "William Gamazo Sanchez",
            "title": "Operation Earth Kitsune: A Dance of Two New Backdoors",
            "categories": [
                "AgfSpy",
                "DneSpy",
                "SLUB"
            ]
        },
        {
            "data_url": "https://documents.trendmicro.com/assets/white_papers/wp-operation-earth-kitsune.pdf",
            "date": "2020-10-19",
            "organization": "Trend Micro",
            "author": "Nelson William Gamazo Sanchez",
            "title": "Operation Earth Kitsune: Tracking SLUB\u2019s Current Operations",
            "categories": [
                "SLUB"
            ]
        },
        {
            "data_url": "https://www.virusbulletin.com/uploads/pdf/conference_slides/2019/VB2019-LunghiHorejsi.pdf",
            "date": "2019-10-02",
            "organization": "Virus Bulletin",
            "author": "Daniel Lunghi",
            "title": "Abusing third-party cloud services in targeted attacks",
            "categories": [
                "BadNews",
                "SLUB"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/new-slub-backdoor-uses-github-communicates-via-slack/",
            "date": "2019-03-07",
            "organization": "Trend Micro",
            "author": "Cedric Pernet",
            "title": "New SLUB Backdoor Uses GitHub, Communicates via Slack",
            "categories": [
                "SLUB"
            ]
        }
    ],
    "mitre": []
};