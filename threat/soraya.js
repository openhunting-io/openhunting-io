var threatdata = {
    "name": "Soraya",
    "alias": "Soraya",
    "category": "Malware",
    "type": "POS malware, Reconnaissance, Credential stealer",
    "modified": "2020-05-25",
    "all_data": {
        "tool": "Soraya",
        "names": [
            {
                "name": "Soraya"
            }
        ],
        "description": "(Trend Micro) Soraya is a {{Dexter}}-and-{{Zeus}}-inspired PoS RAM scraper variant first discovered in June 2014. It is custom-packed to obfuscate its code and to make it difficult for security researchers to reverse-engineer its binary. When first executed, Soraya injects its code into several running processes. It borrowed tricks from ZeuS and hooks the NtResumeThread API, which is called by Windows to execute new processes. It then injects its code into all newly created processes. It also copies itself to the %APPDATA% directory and adds itself to an Auto Start runkey to remain persistent.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Reconnaissance",
            "Credential stealer"
        ],
        "information": [
            "https://www.trendmicro.de/cloud-content/us/pdfs/security-intelligence/white-papers/wp-pos-ram-scraper-malware.pdf",
            "https://www.codeandsec.com/Soraya-Malware-Analysis-Dropper",
            "https://www.arbornetworks.com/blog/asert/the-best-of-both-worlds-soraya/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.soraya"
        ],
        "uuid": "223cafbc-5cf7-4767-aef1-d4033e5b661b",
        "last-card-change": "2020-05-25",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "soraya",
    "analysis": null,
    "articles": [],
    "mitre": []
};