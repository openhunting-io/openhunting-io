var threatdata = {
    "name": "RagnarLocker",
    "alias": "RagnarLocker, Ragnar Locker",
    "category": "Malware",
    "type": "Ransomware, Big Game Hunting",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "RagnarLocker",
        "names": [
            {
                "name": "RagnarLocker"
            },
            {
                "name": "Ragnar Locker"
            }
        ],
        "description": "(McAfee) The RagnarLocker ransomware first appeared in the wild at the end of December 2019 as part of a campaign against compromised networks targeted by its operators.\nThe ransomware code is small (only 48kb after the protection in its custom packer is removed) and coded in a high programming language (C/C++). Like all ransomware, the goal of this malware is to encrypt all files that it can and request a ransom for decrypting them.\nRagnarLocker\u2019s operators, as we have seen with other bad actors recently, threaten to publish the information they get from compromised machines if ransoms are not paid.\nAfter conducting reconnaissance, the ransomware operators enter the victim\u2019s network and, in some pre-deployment stages, steal information before finally dropping the ransomware that will encrypt all files in the victim\u2019s machines.\nThe most notable RagnarLocker attack to date saw this malware deployed in a large company where the malware operators then requested a ransom of close to $11 million USD in return for not leaking information stolen from the company. In this report we will talk about the sample used in this attack.",
        "category": "Malware",
        "type": [
            "Ransomware",
            "Big Game Hunting"
        ],
        "information": [
            "https://www.mcafee.com/blogs/other-blogs/mcafee-labs/ragnarlocker-ransomware-threatens-to-release-confidential-information/",
            "https://zawadidone.nl/2020/06/01/lets-analyze-ragnar-locker.html",
            "https://www.deepinstinct.com/2020/04/27/ragnar-locker-ransomware-unlocked-by-deep-instinct/",
            "https://resources.infosecinstitute.com/topic/ragnar-locker-malware-what-it-is-how-it-works-and-how-to-prevent-it-malware-spotlight/",
            "https://securelist.com/targeted-ransomware-encrypting-data/99255/",
            "https://www.bankinfosecurity.com/fbi-warns-uptick-in-ragnar-locker-ransomware-activity-a-15454",
            "https://www.bleepingcomputer.com/news/security/fbi-ransomware-gang-breached-52-us-critical-infrastructure-orgs/",
            "https://www.tripwire.com/state-of-security/security-data-protection/ragnar-locker-ransomware-what-you-need-to-know/",
            "https://www.cybereason.com/blog/threat-analysis-report-ragnar-locker-ransomware-targeting-the-energy-sector"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0481/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ragnarlocker"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:ragnarlocker"
        ],
        "uuid": "9a967e7d-f989-4639-97f8-0ab46c34de1c",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "RagnarLocker",
            "malware_alias": null,
            "malware": "win.ragnarlocker",
            "last_update": "2021-12-08 15:54:52",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "afab912c41c920c867f1b2ada34114b22dcc9c5f3666edbfc4e9936c29a17a68",
                        "timestamp": "2021-12-08 15:54:52"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-12-08 15:54:52",
    "mitre": [],
    "file_name": "ragnarlocker",
    "analysis": null
};