var threatdata = {
    "name": "METALJACK",
    "alias": "METALJACK, denesRAT",
    "category": "Malware",
    "type": "Loader, Reconnaissance, Backdoor",
    "modified": "2022-12-28",
    "all_data": {
        "tool": "METALJACK",
        "names": [
            {
                "name": "METALJACK"
            },
            {
                "name": "denesRAT"
            }
        ],
        "description": "(FireEye) The malware also loads shellcode in an additional resource, which contains the METALJACK payload. The shellcode performs a system survey to collect the victim's computer name and username and then appends those values to a URL string using libjs.inquirerjs[.]com. It then attempts to call out to the URL. If the callout is successful, the malware loads the METALJACK payload into memory.",
        "category": "Malware",
        "type": [
            "Loader",
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2020/04/apt32-targeting-chinese-government-in-covid-19-related-espionage.html",
            "https://go.recordedfuture.com/hubfs/reports/cta-2020-1110.pdf",
            "https://ti.qianxin.com/blog/articles/coronavirus-analysis-of-global-outbreak-related-cyber-attacks/",
            "https://s.tencent.com/research/report/944.html",
            "https://www.secrss.com/articles/17900",
            "https://www.pwc.co.uk/cyber-security/pdf/pwc-cyber-threats-2020-a-year-in-retrospect.pdf",
            "https://m.threatbook.cn/detail/2527",
            "https://www.youtube.com/watch?v=ftjDH65kw6E",
            "https://blog.viettelcybersecurity.com/apt32-deobfuscation-arsenal-deobfuscating-mot-vai-loai-obfucation-toolkit-cua-apt32-phan-1/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.metaljack"
        ],
        "uuid": "9454a6a5-f24f-456a-970b-89182881719f",
        "last-card-change": "2022-12-28",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "mitre": [],
    "file_name": "metaljack",
    "analysis": null
};