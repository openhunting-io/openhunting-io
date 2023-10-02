var threatdata = {
    "name": "PwnPOS",
    "alias": "PwnPOS",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "PwnPOS",
        "names": [
            {
                "name": "PwnPOS"
            }
        ],
        "description": "(Trend Micro) PwnPOS is one of those perfect examples of malware that\u2019s able to fly under the radar all these years due to its simple but thoughtful construction; albeit not being future proof. Technically, there are two components of PwnPOS: 1) the RAM scraper binary, and 2) the binary responsible for data exfiltration. While the RAM scraper component remains constant, the data exfiltration component has seen several changes \u2013 implying that there are two, and possibly distinct, authors. The RAM scraper goes through a process\u2019 memory and dumps the data to the file and the binary uses SMTP for data exfiltration.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/pwnpos-old-undetected-pos-malware-still-causing-havoc/",
            "https://www.brimorlabsblog.com/2015/03/and-you-get-pos-malware-nameand-you-get.html"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.pwnpos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:PwnPOS"
        ],
        "uuid": "2dae9d51-6708-44f3-9253-21bc4262d92f",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "pwnpos",
    "analysis": null,
    "articles": [],
    "mitre": []
};