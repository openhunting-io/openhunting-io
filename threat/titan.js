var threatdata = {
    "name": "Titan",
    "alias": "Titan",
    "category": "Malware",
    "type": "Reconnaissance, Backdoor",
    "modified": "2020-04-23",
    "all_data": {
        "tool": "Titan",
        "names": [
            {
                "name": "Titan"
            }
        ],
        "description": "(Lookout) Titan usually comes with busybox and various native libraries that provide a range of functionality, from automated gathering of a user's data to being able to execute attacker specified instructions as superuser. Over time, Titan has evolved considerably with a distinct trend of malicious code shifting first from Java to native libraries, then moving into second stage components.",
        "category": "Malware",
        "type": [
            "Reconnaissance",
            "Backdoor"
        ],
        "information": [
            "https://blog.lookout.com/titan-mobile-threat"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.titan"
        ],
        "uuid": "9b6dce72-c1e4-4a54-9f03-7d4b56da7e1b",
        "last-card-change": "2020-04-23",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Titan",
            "malware_alias": null,
            "malware": "apk.titan",
            "last_update": "2023-01-31 12:01:55",
            "tags": [],
            "ioc": {
                "md5_hash": [
                    {
                        "value": "82040e02a2c16b12957659e1356a5e19",
                        "timestamp": "2023-01-31 12:01:55"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-01-31 12:01:55",
    "file_name": "titan",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.alienvault.com/blogs/labs-research/delivery-keyboy",
            "date": "2018-10-08",
            "organization": "AT&T Cybersecurity",
            "author": "Chris Doman",
            "title": "Delivery (Key)Boy",
            "categories": [
                "Titan"
            ]
        },
        {
            "data_url": "https://blog.lookout.com/titan-mobile-threat",
            "date": "2017-11-16",
            "organization": "Lookout",
            "author": "Michael Flossman",
            "title": "Tropic Trooper goes mobile with Titan surveillanceware",
            "categories": [
                "Titan",
                "APT23"
            ]
        }
    ],
    "mitre": []
};