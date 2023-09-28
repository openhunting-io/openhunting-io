var threatdata = {
    "name": "JhoneRAT",
    "alias": "JhoneRAT",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Downloader, Dropper",
    "modified": "2021-04-24",
    "all_data": {
        "tool": "JhoneRAT",
        "names": [
            {
                "name": "JhoneRAT"
            }
        ],
        "description": "(Talos) Today, Cisco Talos is unveiling the details of a new RAT we have identified we're calling 'JhoneRAT.' This new RAT is dropped to the victims via malicious Microsoft Office documents. The dropper, along with the Python RAT, attempts to gather information on the victim's machine and then uses multiple cloud services: Google Drive, Twitter, ImgBB and Google Forms. The RAT attempts to download additional payloads and upload the information gathered during the reconnaissance phase. This particular RAT attempts to target a very specific set of Arabic-speaking countries. The filtering is performed by checking the keyboard layout of the infected systems.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Downloader",
            "Dropper"
        ],
        "information": [
            "https://blog.talosintelligence.com/2020/01/jhonerat.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.jhone_rat"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:JhoneRAT"
        ],
        "uuid": "21ed6073-21b0-41df-ba0a-312e06d1992c",
        "last-card-change": "2021-04-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "jhonerat",
    "analysis": null
};