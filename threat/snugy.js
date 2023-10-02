var threatdata = {
    "name": "Snugy",
    "alias": "Snugy",
    "category": "Malware",
    "type": "Backdoor, Tunneling",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "Snugy",
        "names": [
            {
                "name": "Snugy"
            }
        ],
        "description": "(Palo Alto) The OfficeIntegrator.ps1 file seen in the ResolutionHosts task is a PowerShell-based backdoor we call Snugy, which allows an actor to obtain the system\u2019s hostname and to run commands. Snugy is a variant of the {{CASHY200}} backdoor used by actors in previous attacks in the xHunt campaign. In July 2019, Trend Micro created a detection signature for this backdoor called Backdoor.PS1.NETERO.A, which suggests that this particular variant of CASHY200 has been around for over a year. We are calling this variant of the backdoor Snugy, as {{Netero}} is already a name of a variant of the {{Hisoka}} tool used by the xHunt actors.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Tunneling"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/xhunt-campaign-backdoors/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/ps1.snugy"
        ],
        "uuid": "496a74e7-daf3-4672-b9e1-82209f8dd487",
        "last-card-change": "2022-12-29",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "snugy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://unit42.paloaltonetworks.com/atoms/hunter-serpens/",
            "date": "2022-07-18",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Unit 42",
            "title": "Hunter Serpens",
            "categories": [
                "CASHY200",
                "Snugy",
                "COBALT KATANA"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/xhunt-campaign-backdoors/",
            "date": "2020-11-09",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Robert Falcone",
            "title": "xHunt Campaign: Newly Discovered Backdoors Using Deleted Email Drafts and DNS Tunneling for Command and Control",
            "categories": [
                "Snugy"
            ]
        }
    ],
    "mitre": []
};