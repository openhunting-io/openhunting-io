var threatdata = {
    "name": "ETUMBOT",
    "alias": "ETUMBOT, RIPTIDE, HIGHTIDE, Exploz, Specfix",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "ETUMBOT",
        "names": [
            {
                "name": "ETUMBOT"
            },
            {
                "name": "RIPTIDE"
            },
            {
                "name": "HIGHTIDE"
            },
            {
                "name": "Exploz"
            },
            {
                "name": "Specfix"
            }
        ],
        "description": "(FireEye) FireEye observed APT12 utilizing RIPTIDE, a proxy-aware backdoor that communicates via HTTP to a hard-coded command and control (C2) server. RIPTIDE\u2019s first communication with its C2 server fetches an encryption key, and the RC4 encryption key is used to encrypt all further communication.\n\nIn June 2014, Arbor Networks published an article describing the RIPTIDE backdoor and its C2 infrastructure in great depth. The blog highlighted that the backdoor was utilized in campaigns from March 2011 till May 2014.\n\nFollowing the release of the article, FireEye observed a distinct change in RIPTIDE\u2019s protocols and strings. We suspect this change was a direct result of the Arbor blog post in order to decrease detection of RIPTIDE by security vendors. The changes to RIPTIDE were significant enough to circumvent existing RIPTIDE detection rules. FireEye dubbed this new malware family HIGHTIDE.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2014/09/darwins-favorite-apt-group-2.html",
            "https://www.arbornetworks.com/blog/asert/wp-content/uploads/2014/06/ASERT-Threat-Intelligence-Brief-2014-07-Illuminating-Etumbot-APT.pdf",
            "https://www.zscaler.com/blogs/research/cnacom-open-source-exploitation-strategic-web-compromise"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0003/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.etumbot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:etumbot"
        ],
        "uuid": "2f137525-43e3-4296-bbcd-b7d626694f4a",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "etumbot",
    "analysis": null
};