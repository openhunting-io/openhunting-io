var threatdata = {
    "name": "CHAINSHOT",
    "alias": "CHAINSHOT",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "CHAINSHOT",
        "names": [
            {
                "name": "CHAINSHOT"
            }
        ],
        "description": "(Palo Alto) We uncovered part of a new toolkit which was used as a downloader alongside Adobe Flash exploit CVE-2018-5002 to target victims in the Middle East. This was possible because the attacker made a mistake in using insecure 512-bit RSA encryption. The malware sends user information encrypted to the attacker server and attempts to download a final stage implant. It was allegedly developed with the help of an unknown framework and makes extensive use of custom error handling. Because the attacker made another mistake in using the same SSL certificate for similar attacks, we were able to uncover additional infrastructure indicating a larger campaign.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/unit42-slicing-dicing-cve-2018-5002-payloads-new-chainshot-malware/",
            "https://atr-blog.gigamon.com/2018/06/07/adobe-flash-zero-day-leveraged-for-targeted-attack-in-middle-east/",
            "https://www.icebrg.io/blog/adobe-flash-zero-day-targeted-attack"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.chainshot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:chainshot"
        ],
        "uuid": "da13a57a-3d8e-4c94-bbd1-107ba0629882",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "chainshot",
    "analysis": null,
    "articles": [],
    "mitre": []
};