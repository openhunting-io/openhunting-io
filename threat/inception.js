var threatdata = {
    "name": "Inception",
    "alias": "Inception",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Inception",
        "names": [
            {
                "name": "Inception"
            }
        ],
        "description": "(Symantec) Word documents attached to Inception\u2019s spear-phishing emails leveraged two Microsoft Office vulnerabilities (CVE-2014-1761 and CVE-2012-0158) to install malware on the recipient\u2019s computer. The malware had a multi-staged structure that began with a malicious RTF document and ended with an in-memory DLL payload that communicated, via the WebDAV protocol, with a command and control (C&C) address from a legitimate cloud service provider (CloudMe.com). The name \u201cInception\u201d comes from the group\u2019s many levels of obfuscation and indirection it employed in delivering this payload.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://symantec-blogs.broadcom.com/blogs/threat-intelligence/inception-framework-hiding-behind-proxies"
        ],
        "uuid": "639ea4a1-7345-4e52-88b8-cc1cdb73ef2b",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "inception",
    "analysis": null
};