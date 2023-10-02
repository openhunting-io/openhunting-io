var threatdata = {
    "name": "Multigrain",
    "alias": "Multigrain, Multigrain POS",
    "category": "Malware",
    "type": "POS malware, Credential stealer",
    "modified": "2020-05-24",
    "all_data": {
        "tool": "Multigrain",
        "names": [
            {
                "name": "Multigrain"
            },
            {
                "name": "Multigrain POS"
            }
        ],
        "description": "(FireEye) FireEye recently discovered a new variant of a point of sale (POS) malware family known as {{NewPosThings}}. This variant, which we call \u201cMULTIGRAIN\u201d, consists largely of a subset of slightly modified code from NewPosThings. The variant is highly targeted, digitally signed, and exfiltrates stolen payment card data over DNS. The addition of DNS-based exfiltration is new for this malware family; however, other POS malware families such as {{BernhardPOS}} and {{BlackPOS}} have used this technique in the past.",
        "category": "Malware",
        "type": [
            "POS malware",
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/blog/threat-research/2016/04/multigrain_pointo.html",
            "https://www.pandasecurity.com/mediacenter/malware/multigrain-malware-pos/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.multigrain_pos"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:multigrain"
        ],
        "uuid": "4af3fb73-4104-49ad-b124-59d1ae82939f",
        "last-card-change": "2020-05-24",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [],
    "last_ioc_update": null,
    "file_name": "multigrain",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.pandasecurity.com/mediacenter/malware/multigrain-malware-pos/",
            "date": "2016-08-04",
            "organization": "Panda Security",
            "author": "Panda Security",
            "title": "What is Multigrain? Learn what makes this PoS malware different",
            "categories": [
                "Multigrain POS"
            ]
        },
        {
            "data_url": "https://www.fireeye.com/blog/threat-research/2016/04/multigrain_pointo.html",
            "date": "2016-04-19",
            "organization": "FireEye",
            "author": "Cian Lynch",
            "title": "MULTIGRAIN \u2013 Point of Sale Attackers Make an Unhealthy Addition to the Pantry",
            "categories": [
                "Multigrain POS"
            ]
        }
    ],
    "mitre": []
};