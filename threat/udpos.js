var threatdata = {
    "name": "UDPoS",
    "alias": "UDPoS",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "UDPoS",
        "names": [
            {
                "name": "UDPoS"
            }
        ],
        "description": "(Forcepoint) Point of Sale malware has been around for some time and has been deployed against a broad range of businesses from retailers to hotel groups. However, this appears to be a new family which we are currently calling 'UDPoS' owing to its heavy use of UDP-based DNS traffic. At the time of writing, it's unclear whether the malware is currently being used in campaigns in the wild, although the coordinated use of LogMeIn-themed filenames and C2 URLs, coupled with evidence of an earlier Intel-themed variant, suggest that it may well be.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://www.forcepoint.com/blog/x-labs/udpos-exfiltrating-credit-card-data-dns",
            "https://threatmatrix.cylance.com/en_us/home/threat-spotlight-inside-udpos-malware.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.udpos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:udp%20pos"
        ],
        "uuid": "d1b2544d-3721-4d8f-91e6-5d777a5f56d9",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "udpos",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.forcepoint.com/blog/x-labs/udpos-exfiltrating-credit-card-data-dns",
            "date": "2018-02-08",
            "organization": "Forcepoint",
            "author": "Robert Neumann",
            "title": "UDPoS - exfiltrating credit card data via DNS",
            "categories": [
                "UDPoS"
            ]
        }
    ],
    "mitre": []
};