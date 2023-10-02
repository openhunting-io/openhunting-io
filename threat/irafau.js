var threatdata = {
    "name": "IRAFAU",
    "alias": "IRAFAU",
    "category": "Malware",
    "type": "Backdoor",
    "modified": "2022-12-27",
    "all_data": {
        "tool": "IRAFAU",
        "names": [
            {
                "name": "IRAFAU"
            }
        ],
        "description": "(Fortinet) The backdoor, which we now call \u201cIRAFAU\u201d from a decrypted string found during analysis, comes as a file packed with what looks to be modified UPX. Regardless, unpacking it is simple.\n\nOnce unpacked, the backdoor malware\u2019s behavior was not obvious because its strings were still encrypted and APIs used had been dynamically imported.\n\nSo, the first thing this malware does is to initialize a structure where it stores the decrypted strings that will be used in the next function calls. This includes the command and control server string, function pointers, and dynamically imported APIs\u00a0that will be used throughout its execution. This structure is passed as a parameter to subsequent functions.",
        "category": "Malware",
        "type": [
            "Backdoor"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/cve-2017-11826-exploited-in-the-wild-with-politically-themed-rtf-document"
        ],
        "uuid": "5401d405-232f-4c64-ad31-4d30274bd90f",
        "last-card-change": "2022-12-27",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "irafau",
    "analysis": null,
    "articles": [],
    "mitre": []
};