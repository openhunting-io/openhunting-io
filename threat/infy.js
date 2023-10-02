var threatdata = {
    "name": "Infy",
    "alias": "Infy, Foudre",
    "category": "Malware",
    "type": "Reconnaissance",
    "modified": "2021-02-18",
    "all_data": {
        "tool": "Infy",
        "names": [
            {
                "name": "Infy"
            },
            {
                "name": "Foudre"
            }
        ],
        "description": "(Palo Alto) The malware connects to the C2 every five minutes using HTTP, posting:\n\n<computer name>\n<user name>\ndn = n1\nver = 30\nlfolder= f\ncpuid=\nmachineguid (from hklm\\SOFTWARE\\Microsoft\\Cryptography\\machineguid)\ntt= time",
        "category": "Malware",
        "type": [
            "Reconnaissance"
        ],
        "information": [
            "https://unit42.paloaltonetworks.com/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
            "https://www.intezer.com/prince-of-persia-the-sands-of-foudre/",
            "https://researchcenter.paloaltonetworks.com/2017/08/unit42-prince-persia-ride-lightning-infy-returns-foudre/",
            "https://github.com/pan-unit42/iocs/blob/master/prince_of_persia/hashes.csv"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.infy"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:infy"
        ],
        "uuid": "cfe90b10-0ec9-47d0-9774-a163fd3b7321",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Infy",
            "malware_alias": "Foudre",
            "malware": "win.infy",
            "last_update": "2021-08-12 10:27:25",
            "tags": [],
            "ioc": {
                "sha256_hash": [
                    {
                        "value": "7cfe6b3d43caf0e6d990caf7b778d9c68e8e95f9ea6a44f9fefb46be5476c083",
                        "timestamp": "2021-07-30 22:44:44"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "16adbfb16dd14a5aa74c1f56545643c3",
                        "timestamp": "2021-08-12 10:27:25"
                    },
                    {
                        "value": "85b1fd8784862fa44a5076debf0c44d5",
                        "timestamp": "2021-08-12 10:27:25"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2021-08-12 10:27:25",
    "file_name": "infy",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://download.bitdefender.com/resources/files/News/CaseStudies/study/393/Bitdefender-Whitepaper-Iranian-APT-Makes-a-Comeback-with-Thunder-and-Lightning-Backdoor-and-Espionage-Combo.pdf",
            "date": "2021-02-18",
            "organization": "Bitdefender",
            "author": "Gheorghe Adrian Schipor",
            "title": "Iranian APT Makes a Comeback with \u201cThunder and Lightning\u201d Backdoor and Espionage Combo",
            "categories": [
                "Infy",
                "Tonnerre"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2021/after-lightning-comes-thunder/",
            "date": "2021-02-08",
            "organization": "Checkpoint",
            "author": "Safebreach Labs",
            "title": "After Lightning Comes Thunder",
            "categories": [
                "Infy",
                "Tonnerre"
            ]
        },
        {
            "data_url": "https://cloud.tencent.com/developer/article/1738806",
            "date": "2020-11-03",
            "organization": "Gcow-Sec",
            "author": "Shadow Chaser Group",
            "title": "\u7f8e\u4eba\u9c7c(Infy)APT\u7ec4\u7ec7\u7684\u5f52\u6765\u2014\u2014\u4f7f\u7528\u6700\u65b0\u7684Foudre\u540e\u95e8\u8fdb\u884c\u653b\u51fb\u6d3b\u52a8\u7684\u5206\u6790",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://www.cfr.org/interactive/cyber-operations/prince-persia",
            "date": "2019",
            "organization": "Council on Foreign Relations",
            "author": "Cyber Operations Tracker",
            "title": "Prince of Persia",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://www.intezer.com/prince-of-persia-the-sands-of-foudre/",
            "date": "2018-08-17",
            "organization": "Intezer",
            "author": "Jay Rosenberg",
            "title": "Prince of Persia: The Sands of Foudre",
            "categories": [
                "Infy",
                "Infy"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2017/08/unit42-prince-persia-ride-lightning-infy-returns-foudre/",
            "date": "2017-08-01",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia \u2013 Ride the Lightning: Infy returns as \u201cFoudre\u201d",
            "categories": [
                "Infy",
                "Infy"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/unit42-prince-persia-ride-lightning-infy-returns-foudre/",
            "date": "2017-08-01",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia \u2013 Ride the Lightning: Infy returns as \u201cFoudre\u201d",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://iranthreats.github.io/",
            "date": "2016-08-04",
            "organization": "Iran Threats",
            "author": "Iran Threats",
            "title": "Iran Threats Webpage",
            "categories": [
                "Infy",
                "Sima"
            ]
        },
        {
            "data_url": "https://www.blackhat.com/docs/us-16/materials/us-16-Guarnieri-Iran-And-The-Soft-War-For-Internet-Dominance-wp.pdf",
            "date": "2016-08",
            "organization": "Black Hat",
            "author": "Claudio Guarnieri",
            "title": "Iran and the Soft Warfor Internet Dominance",
            "categories": [
                "Infy",
                "Sima"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2016/06/unit42-prince-of-persia-game-over/",
            "date": "2016-06-28",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia \u2013 Game Over",
            "categories": [
                "Infy",
                "Infy"
            ]
        },
        {
            "data_url": "https://www.freebuf.com/articles/network/105726.html",
            "date": "2016-05-31",
            "organization": "Freebuf",
            "author": "360",
            "title": "Operation Mermaid: 6 years of overseas targeted attacks revealed",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://github.com/pan-unit42/iocs/blob/master/prince_of_persia/hashes.csv",
            "date": "2016-05-02",
            "organization": "Github (pan-unit42)",
            "author": "Josh Grunzweig",
            "title": "Prince of Persia Hashes",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "http://researchcenter.paloaltonetworks.com/2016/05/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
            "date": "2016-05-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia: Infy Malware Active In Decade of Targeted Attacks",
            "categories": [
                "Infy",
                "Infy"
            ]
        },
        {
            "data_url": "https://researchcenter.paloaltonetworks.com/2016/05/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
            "date": "2016-05-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia: Infy Malware Active In Decade of Targeted Attacks",
            "categories": [
                "Infy"
            ]
        },
        {
            "data_url": "https://unit42.paloaltonetworks.com/prince-of-persia-infy-malware-active-in-decade-of-targeted-attacks/",
            "date": "2016-05-02",
            "organization": "Palo Alto Networks Unit 42",
            "author": "Tomer Bar",
            "title": "Prince of Persia: Infy Malware Active In Decade of Targeted Attacks",
            "categories": [
                "Infy"
            ]
        }
    ],
    "mitre": []
};