var threatdata = {
    "name": "Nibatad",
    "alias": "Nibatad",
    "category": "Malware",
    "type": "Loader, Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Nibatad",
        "names": [
            {
                "name": "Nibatad"
            }
        ],
        "description": "(Symantec) In some attacks, Whitefly has used a second piece of custom malware, Trojan.Nibatad. Like {{Vcrodat}}, Nibatad is also a loader that leverages search order hijacking, and downloads an encrypted payload to the infected computer. And similar to Vcrodat, the Nibatad payload is designed to facilitate information theft from an infected computer.\n\nWhile Vcrodat is delivered via the malicious dropper, we have yet to discover how Nibatad is delivered to the infected computer. Why Whitefly uses these two different loaders in some of its attacks remains unknown. And while we have found both Vcrodat and Nibatad inside individual victim organizations, we have not found any evidence of them being used simultaneously on a single computer.",
        "category": "Malware",
        "type": [
            "Loader",
            "Downloader"
        ],
        "information": [
            "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/whitefly-espionage-singapore?es_p=8774683"
        ],
        "uuid": "083cff3b-8471-4192-8f4d-9dc8e52b0659",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "nibatad",
    "analysis": null
};