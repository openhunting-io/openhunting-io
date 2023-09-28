var threatdata = {
    "name": "Ramnit",
    "alias": "Ramnit, Nimnul",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer, Info stealer, Exfiltration",
    "modified": "2022-02-03",
    "all_data": {
        "tool": "Ramnit",
        "names": [
            {
                "name": "Ramnit"
            },
            {
                "name": "Nimnul"
            }
        ],
        "description": "(Cybereason) The Ramnit Trojan is a type of malware able to exfiltrate sensitive data. This kind of data can include anything ranging from banking credentials, FTP passwords, session cookies, and personal data. Leaking this information can easily destroy user trust in a business, and in the process lose customers and ruin reputations. Luckily, our onboarding was timely, and was able to detect the trojan just as it was beginning to exfiltrate information. Our customer used our remediation tool immediately to stop the exfiltration in its tracks.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer",
            "Info stealer",
            "Exfiltration"
        ],
        "information": [
            "https://www.cybereason.com/blog/banking-trojan-delivered-by-lolbins-ramnit-trojan",
            "https://malwarebreakdown.com/2017/08/23/the-seamless-campaign-isnt-losing-any-steam/",
            "http://www.nao-sec.org/2018/01/analyzing-ramnit-used-in-seamless.html",
            "http://contagiodump.blogspot.com/2012/01/blackhole-ramnit-samples-and-analysis.html",
            "https://www.cert.pl/en/news/single/ramnit-in-depth-analysis/",
            "https://research.checkpoint.com/ramnits-network-proxy-servers/",
            "http://www.vkremez.com/2018/02/deeper-dive-into-ramnit-banker-vnc-ifsb.html",
            "https://www.symantec.com/content/dam/symantec/docs/security-center/white-papers/w32-ramnit-analysis-15-en.pdf",
            "https://securityintelligence.com/posts/ramnit-banking-trojan-stealing-card-data/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.ramnit"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:Ramnit"
        ],
        "uuid": "662b809d-91d0-4190-b58d-b9080d2f70c3",
        "last-card-change": "2022-02-03",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Ramnit",
            "malware_alias": "Nimnul",
            "malware": "win.ramnit",
            "last_update": "2022-05-31 22:30:06",
            "tags": [
                "EVILDR",
                "EVILNUM",
                "EVILNK",
                "Ramnit"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "185.236.76.230:80",
                        "timestamp": "2022-05-31 22:30:06"
                    },
                    {
                        "value": "31.192.107.232:443",
                        "timestamp": "2022-05-31 22:29:30"
                    }
                ],
                "domain": [
                    {
                        "value": "www.treeboxmail.com",
                        "timestamp": "2022-05-31 22:28:55"
                    },
                    {
                        "value": "infntio.com",
                        "timestamp": "2022-05-31 22:28:12"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "42761e128d32aea9f3e2c0473c25a32b",
                        "timestamp": "2021-09-15 13:46:52"
                    },
                    {
                        "value": "2bb5aa4787a683f6cf87f5d682972e7e",
                        "timestamp": "2021-09-15 13:46:52"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-05-31 22:30:06",
    "mitre": [],
    "file_name": "ramnit",
    "analysis": null
};