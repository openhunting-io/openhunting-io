var threatdata = {
    "name": "Emdivi",
    "alias": "Emdivi, Newsripper",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Emdivi",
        "names": [
            {
                "name": "Emdivi"
            },
            {
                "name": "Newsripper"
            }
        ],
        "description": "(Kaspersky) The emdivi family stores important data about itself, including C2, API name, strings for anti-analysis, value of mutexes, as well as the md5 checksum of backdoor commands and the internal proxy information. They are stored in encrypted form, and are decrypted when necessary. Therefore, to analyze an emdivi sample in detail, we need to locate which hex codes are encrypted, and how to decrypt them. In the process of decryption, a unique decryption key is required for each sample.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://securelist.com/new-activity-of-the-blue-termite-apt/71876/",
            "https://blogs.jpcert.or.jp/en/2015/11/emdivi-and-the-rise-of-targeted-attacks-in-japan.html",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/chessmaster-cyber-espionage-campaign/",
            "http://blog.trendmicro.com/trendlabs-security-intelligence/attackers-target-organizations-in-japan-transform-local-sites-into-cc-servers-for-emdivi-backdoor/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.emdivi"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:emdivi"
        ],
        "uuid": "bdd9c8ab-168e-4a3f-a35a-3dd670a9bd02",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "emdivi",
    "analysis": null
};