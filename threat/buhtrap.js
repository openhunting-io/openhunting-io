var threatdata = {
    "name": "Buhtrap",
    "alias": "Buhtrap, Ratopak",
    "category": "Malware",
    "type": "Banking trojan, Backdoor, Keylogger, Credential stealer, Info stealer, Downloader, Exfiltration",
    "modified": "2020-05-13",
    "all_data": {
        "tool": "Buhtrap",
        "names": [
            {
                "name": "Buhtrap"
            },
            {
                "name": "Ratopak"
            }
        ],
        "description": "(ESET) The infection vector we have seen consists of Microsoft Word documents sent as email attachments that exploit CVE-2012-0158, a vulnerability in Microsoft Word that was patched three years ago. The images below show two of the decoy documents used in this campaign. The first document, titled \u201c\u0421\u0447\u0435\u0442 \u2116 522375-\u0424\u041b\u041e\u0420\u041b-14-115.doc\u201d mimics an invoice. The second, aptly titled \u201ckontrakt87.doc\u201d, copies a generic telecommunications service contract from MegaFon, a large Russian mobile phone operator.\n\nThe tools deployed on the victim\u2019s computer allow them to control it remotely and to record the user\u2019s actions. The malware allows the criminals to install a backdoor, attempt to obtain the account password, and even create a new account. They also install a keylogger, a clipboard stealer, a smart card module, and have the capability to download and execute additional malware.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Backdoor",
            "Keylogger",
            "Credential stealer",
            "Info stealer",
            "Downloader",
            "Exfiltration"
        ],
        "information": [
            "https://www.welivesecurity.com/2015/04/09/operation-buhtrap/",
            "https://malware-research.org/carbanak-source-code-leaked/",
            "https://www.group-ib.com/brochures/gib-buhtrap-report.pdf",
            "https://www.arbornetworks.com/blog/asert/diving-buhtrap-banking-trojan-activity/",
            "https://blog.dcso.de/pegasus-buhtrap-analysis-of-the-malware-stage-based-on-the-leaked-source-code/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.buhtrap"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:buhtrap"
        ],
        "uuid": "7790d629-5724-4da6-8201-e2b031e8c487",
        "last-card-change": "2020-05-13",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "buhtrap",
    "analysis": null
};