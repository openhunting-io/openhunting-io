var threatdata = {
    "name": "GCMAN",
    "alias": "GCMAN",
    "category": "Malware",
    "type": "Banking trojan",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "GCMAN",
        "names": [
            {
                "name": "GCMAN"
            }
        ],
        "description": "(Kaspersky) The initial infection mechanism is handled by spear-phishing. A financial institution is targeted with e-mails carrying a malicious RAR archive. When the RAR archive is opened an executable is started instead of a Microsoft Word document, resulting in infection. The group also plants a cron script into the bank's server to generate financial transactions at the rate of $200 per minute.",
        "category": "Malware",
        "type": [
            "Banking trojan"
        ],
        "information": [
            "https://www.kaspersky.com/resource-center/threats/gcman",
            "https://securelist.com/apt-style-bank-robberies-increase-with-metel-gcman-and-carbanak-2-0-attacks/73638/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gcman"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:gcman"
        ],
        "uuid": "e825b6cc-cf52-4c62-936c-8ca786176b8d",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "gcman",
    "analysis": null
};