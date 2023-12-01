var threatdata = {
    "name": "Bahamut",
    "alias": "Bahamut",
    "category": "APT",
    "type": "-",
    "modified": "2023-09-06",
    "all_data": {
        "actor": "Bahamut",
        "names": [
            {
                "name": "Bahamut",
                "name-giver": "Bellingcat"
            }
        ],
        "country": [
            "[Middle East]"
        ],
        "motivation": [
            "Information theft and espionage"
        ],
        "first-seen": "2016",
        "description": "(Bellingcat) Bahamut was first noticed when it targeted a Middle Eastern human rights activist in the first week of January 2017. Later that month, the same tactics and patterns were seen in attempts against an Iranian women\u2019s activist \u2013 an individual commonly targeted by Iranian actors, such as {{Magic Hound, APT 35, Cobalt Illusion, Charming Kitten}} and the {{Sima}} campaign documented in our 2016 Black Hat talk. Recurrent patterns in hostnames, registrations, and phishing scripts provided a strong link between the two incidents, and older attempts were found that directly overlapped with these attacks. Over the course of the following months, several more attempts against the same individuals were observed, intended to steal credentials for iCloud and Gmail accounts.\n\nBahamut was also observed engaging in reconnaissance and counter-reconnaissance attempts, intended to harvest IP addresses of emails accounts. One attempt impersonated BBC News Alerts, using timely content related to the diplomatic conflict between Qatar and other Gulf states as bait. This message used external images embedded in the email to track where the lure would be opened.",
        "observed-sectors": [
            "Political, economic and social"
        ],
        "observed-countries": [
            "Egypt",
            "Iran",
            "Pakistan",
            "Palestine",
            "Qatar",
            "Tunisia",
            "Turkey",
            "UAE"
        ],
        "tools": [
            "Bahamut",
            "DownPaper"
        ],
        "operations": [
            {
                "date": "2016-12",
                "activity": "Beginning in December 2016, unconnected Middle Eastern human rights activists began to receive spear-phishing messages in English and Persian that were not related to any previously-known groups. These attempts differed from other tactics seen by us elsewhere, such as those connected to Iran, with better attention paid to the operation of the campaign.\nhttps://www.bellingcat.com/news/mena/2017/06/12/bahamut-pursuing-cyber-espionage-actor-middle-east/"
            },
            {
                "date": "2017-10",
                "activity": "For three months there was no apparent further activity from the actor. However, in the same week of September a series of spear-phishing attempts once again targeted a set of otherwise unrelated individuals, employing the same tactics as before. Bahamut remains active, and its operations are more extensive than first disclosed.\nhttps://www.bellingcat.com/resources/case-studies/2017/10/27/bahamut-revisited-cyber-espionage-middle-east-south-asia/"
            },
            {
                "date": "2018-06",
                "activity": "Cisco Talos has identified a highly targeted campaign against 13 iPhones which appears to be focused on India. The attacker deployed an open-source mobile device management (MDM) system to control enrolled devices.\nhttps://blog.talosintelligence.com/2018/07/Mobile-Malware-Campaign-uses-Malicious-MDM.html"
            },
            {
                "date": "2018-07",
                "activity": "Android-based malware with some similarities to the iOS malware we identified. That post kickstarted our investigation into any potential overlap between these campaigns and how they are potentially linked.\nThe new MDM platform we identified has similar victimology with Middle Eastern targets, namely Qatar, using a U.K. mobile number issued from LycaMobile. Bahamut targeted similar Qatar-based individuals during their campaign.\nhttps://blog.talosintelligence.com/2018/07/Mobile-Malware-Campaign-uses-Malicious-MDM-Part2.html"
            },
            {
                "date": "2020-06",
                "activity": "Bahamut Possibly Responsible for Multi-Stage Infection Chain Campaign\nhttps://www.anomali.com/blog/bahamut-possibly-responsible-for-multi-stage-infection-chain-campaign"
            },
            {
                "date": "2021-08",
                "activity": "Bahamut Threat Group Targeting Users Through Phishing Campaign\nhttps://blog.cyble.com/2021/08/10/bahamut-threat-group-targeting-users-through-phishing-campaign/"
            },
            {
                "date": "2022-01",
                "activity": "Bahamut cybermercenary group targets Android users with fake VPN apps\nhttps://www.welivesecurity.com/2022/11/23/bahamut-cybermercenary-group-targets-android-users-fake-vpn-apps/"
            },
            {
                "date": "2022-04",
                "activity": "Bahamut Android Malware returns with New Spying Capabilities\nhttps://blog.cyble.com/2022/06/29/bahamut-android-malware-returns-with-new-spying-capabilities/"
            },
            {
                "date": "2022-11",
                "activity": "APT Bahamut Attacks Indian Intelligence Operative using Android Malware\nhttps://www.cyfirma.com/outofband/apt-bahamut-attacks-indian-intelligence-operative-using-android-malware/"
            },
            {
                "date": "2023-07",
                "activity": "APT Bahamut Targets Individuals with Android Malware Using Spear Messaging\nhttps://www.cyfirma.com/outofband/apt-bahamut-targets-individuals-with-android-malware-using-spear-messaging/"
            }
        ],
        "information": [
            "https://www.bellingcat.com/news/mena/2017/06/12/bahamut-pursuing-cyber-espionage-actor-middle-east/",
            "https://www.blackberry.com/us/en/forms/enterprise/bahamut-report"
        ],
        "uuid": "90fb0276-a977-4d3e-a148-85a95778aebe",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Bahamut",
            "malware_alias": null,
            "malware": "win.bahamut",
            "last_update": "2023-06-09 23:48:11",
            "tags": [
                "Bahamut",
                "ViriBack"
            ],
            "ioc": {
                "domain": [
                    {
                        "value": "hbx5adg6vk.de",
                        "timestamp": "2023-06-09 23:48:11"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-06-09 23:48:11",
    "file_name": "bahamut",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.welivesecurity.com/2022/11/23/bahamut-cybermercenary-group-targets-android-users-fake-vpn-apps/",
            "date": "2022-11-23",
            "organization": "ESET Research",
            "author": "Luk\u00e1\u0161 \u0160tefanko",
            "title": "Bahamut cybermercenary group targets Android users with fake VPN apps",
            "categories": [
                "Bahamut"
            ]
        },
        {
            "data_url": "https://blog.cyble.com/2022/06/29/bahamut-android-malware-returns-with-new-spying-capabilities/",
            "date": "2022-06-29",
            "organization": "cyble",
            "author": "Cyble Research Labs",
            "title": "Bahamut Android Malware Returns With New Spying Capabilities",
            "categories": [
                "Bahamut"
            ]
        },
        {
            "data_url": "https://mp.weixin.qq.com/s/YAAybJBAvxqrQWYDg31BBw",
            "date": "2022-04-12",
            "organization": "360 Threat Intelligence Center",
            "author": "360 Beacon Lab",
            "title": "Recent attacks by Bahamut group revealed",
            "categories": [
                "Bahamut"
            ]
        },
        {
            "data_url": "https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/blackberry-com/asset/enterprise/pdf/direct/report-spark-bahamut.pdf",
            "date": "2020-10-06",
            "organization": "Blackberry",
            "author": "Blackberry Research",
            "title": "BAHAMUT: Hack-for-Hire Masters of Phishing, Fake News, and Fake Apps",
            "categories": [
                "Bahamut",
                "Bahamut"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/the-urpage-connection-to-bahamut-confucius-and-patchwork/",
            "date": "2018-08-29",
            "organization": "Trend Micro",
            "author": "Daniel Lunghi",
            "title": "The Urpage Connection to Bahamut, Confucius and Patchwork",
            "categories": [
                "AndroRAT",
                "Bahamut"
            ]
        },
        {
            "data_url": "https://www.bellingcat.com/resources/case-studies/2017/10/27/bahamut-revisited-cyber-espionage-middle-east-south-asia/",
            "date": "2017-10-27",
            "organization": "Bellingcat",
            "author": "Collin Anderson",
            "title": "Bahamut Revisited, More Cyber Espionage in the Middle East and South Asia",
            "categories": [
                "Bahamut",
                "Bahamut",
                "Bahamut"
            ]
        },
        {
            "data_url": "https://www.bellingcat.com/news/mena/2017/06/12/bahamut-pursuing-cyber-espionage-actor-middle-east/",
            "date": "2017-06-12",
            "organization": "Bellingcat",
            "author": "Collin Anderson",
            "title": "Bahamut, Pursuing a Cyber Espionage Actor in the Middle East",
            "categories": [
                "Bahamut",
                "Bahamut",
                "Bahamut"
            ]
        }
    ],
    "mitre": []
};