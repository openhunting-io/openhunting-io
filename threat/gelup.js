var threatdata = {
    "name": "Gelup",
    "alias": "Gelup",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-04-20",
    "all_data": {
        "tool": "Gelup",
        "names": [
            {
                "name": "Gelup"
            }
        ],
        "description": "(Trend Micro) In the same June 20 campaign, we also found another apparently new, undisclosed malware, which we named \u201cGelup\u201d. A custom packer was also used to pack some variants of this malware. Again, it uses the same packer that TA505 has been using.\n\nThe unpacked payload is written in C++ and basically works as a downloader for another malware. What makes Gelup different, however, is its obfuscation technique and UAC-bypassing function bymocking trusted directories (spoofing the file\u2019s execution path in a trusted directory), abusing auto-elevated executables, and using the dynamic-link library (DLL) side-loading technique.\n\nFirst, Gelup resolves most Windows application programming interfaces (APIs) by using the hash just before calling it \u2014a common technique used by a lot of malware families. Second, the strings in Gelup\u2019s code are decrypted at runtime.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://documents.trendmicro.com/assets/Tech-Brief-Latest-Spam-Campaigns-from-TA505-Now-Using-New-Malware-Tools-Gelup-and-FlowerPippi.pdf"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Gelup"
        ],
        "uuid": "fabed506-43cc-4663-8ad1-586396c8b76a",
        "last-card-change": "2020-04-20",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "gelup",
    "analysis": null,
    "articles": [],
    "mitre": []
};