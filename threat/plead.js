var threatdata = {
    "name": "PLEAD",
    "alias": "PLEAD, DRAWDOWN, GOODTIMES, Linopid, TSCookie",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor, Info stealer, Credential stealer, Exfiltration",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "PLEAD",
        "names": [
            {
                "name": "PLEAD"
            },
            {
                "name": "DRAWDOWN"
            },
            {
                "name": "GOODTIMES"
            },
            {
                "name": "Linopid"
            },
            {
                "name": "TSCookie"
            }
        ],
        "description": "(Trend Micro) PLEAD\u2019s backdoor can:\n\n\u2022 Harvest saved credentials from browsers and email clients like Outlook\n\u2022 List drives, processes, open windows, and files\n\u2022 Open remote Shell\n\u2022 Upload target file\n\u2022 Execute applications via ShellExecute API\n\u2022 Delete target file",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor",
            "Info stealer",
            "Credential stealer",
            "Exfiltration"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/following-trail-blacktech-cyber-espionage-campaigns/",
            "http://blog.jpcert.or.jp/2018/03/malware-tscooki-7aa0.html",
            "https://blog.jpcert.or.jp/2018/06/plead-downloader-used-by-blacktech.html",
            "https://blogs.jpcert.or.jp/en/2018/11/tscookie2.html",
            "http://www.freebuf.com/column/159865.html",
            "https://www.welivesecurity.com/2018/07/09/certificates-stolen-taiwanese-tech-companies-plead-malware-campaign/",
            "https://documents.trendmicro.com/assets/appendix-following-the-trail-of-blacktechs-cyber-espionage-campaigns.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0435/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.plead",
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.tscookie"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PLEAD"
        ],
        "uuid": "9ed8c80d-8d26-487b-8b98-a31c2206e2ae",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "PLEAD",
            "malware_alias": null,
            "malware": "elf.plead",
            "last_update": "2022-05-23 00:13:11",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "55b075250dad5c15c6386bcdecbde1eb",
                        "timestamp": "2022-05-23 00:13:11"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-05-23 00:13:11",
    "mitre": [],
    "file_name": "plead",
    "analysis": null
};