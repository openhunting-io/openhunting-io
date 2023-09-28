var threatdata = {
    "name": "X-Agent",
    "alias": "X-Agent, Xagent, Popr-d30, SPLM, CHOPSTICK, fysbis, Backdoor.SofacyX, webhp",
    "category": "Malware",
    "type": "Backdoor, Keylogger, Info stealer, Tunneling",
    "modified": "2022-12-30",
    "all_data": {
        "tool": "X-Agent",
        "names": [
            {
                "name": "X-Agent"
            },
            {
                "name": "Xagent"
            },
            {
                "name": "Popr-d30"
            },
            {
                "name": "SPLM"
            },
            {
                "name": "CHOPSTICK"
            },
            {
                "name": "fysbis"
            },
            {
                "name": "Backdoor.SofacyX"
            },
            {
                "name": "webhp"
            }
        ],
        "description": "CHOPSTICK is a malware family of modular backdoors used by APT28. It has been used since at least 2012 and is usually dropped on victims as second-stage malware, though it has been used as first-stage malware in several cases. It has both Windows and Linux variants. It is tracked separately from the X-Agent for Android.",
        "category": "Malware",
        "type": [
            "Backdoor",
            "Keylogger",
            "Info stealer",
            "Tunneling"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-apt28.pdf",
            "http://blog.crysys.hu/2017/01/technical-details-on-the-fancy-bear-android-malware-poprd30-apk/",
            "http://blog.crysys.hu/2017/03/update-on-the-fancy-bear-android-malware-poprd30-apk/",
            "https://contagiodump.blogspot.de/2017/02/russian-apt-apt28-collection-of-samples.html",
            "https://download.bitdefender.com/resources/files/News/CaseStudies/study/143/Bitdefender-Whitepaper-APT-Mac-A4-en-EN-web.pdf",
            "http://www.welivesecurity.com/wp-content/uploads/2016/10/eset-sednit-part-2.pdf",
            "https://www.welivesecurity.com/2017/12/21/sednit-update-fancy-bear-spent-year/",
            "https://www.thecssc.com/wp-content/uploads/2018/10/4OctoberIOC-APT28-malware-advisory.pdf",
            "http://www2.fireeye.com/rs/fireye/images/rpt-apt28.pdf",
            "https://www.crowdstrike.com/blog/bears-midst-intrusion-democratic-national-committee/",
            "http://csecybsec.com/download/zlab/20180713_CSE_APT28_X-Agent_Op-Roman%20Holiday-Report_v6_1.pdf"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0023/",
            "https://attack.mitre.org/software/S0410/",
            "https://attack.mitre.org/software/S0161/",
            "https://attack.mitre.org/software/S0314/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.popr-d30",
            "https://malpedia.caad.fkie.fraunhofer.de/details/elf.xagent",
            "https://malpedia.caad.fkie.fraunhofer.de/details/osx.xagent",
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.xagent"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:X-Agent"
        ],
        "uuid": "d4eb88ba-57f3-4528-bda2-5c05b113e924",
        "last-card-change": "2022-12-30",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "X-Agent",
            "malware_alias": "splm,chopstick,fysbis",
            "malware": "elf.xagent",
            "last_update": "2022-07-31 18:45:01",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "c75ffcb1a96a4aa0700af898650aac12",
                        "timestamp": "2022-07-31 18:45:01"
                    },
                    {
                        "value": "c0ca0af1f0f646e52dc05af024693b6f",
                        "timestamp": "2022-07-31 18:45:01"
                    },
                    {
                        "value": "540e4a7a28ca1514e53c2564993d8d87",
                        "timestamp": "2022-07-31 18:45:01"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-31 18:45:01",
    "mitre": [],
    "file_name": "x-agent",
    "analysis": null
};