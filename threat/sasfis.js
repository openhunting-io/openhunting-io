var threatdata = {
    "name": "Sasfis",
    "alias": "Sasfis, Oficla",
    "category": "Malware",
    "type": "Downloader",
    "modified": "2020-05-14",
    "all_data": {
        "tool": "Sasfis",
        "names": [
            {
                "name": "Sasfis"
            },
            {
                "name": "Oficla"
            }
        ],
        "description": "Sasfis acts mostly as a downloader that has been observed to download Asprox and FakeAV. According to a VirusBulletin article from 2012, it is likely authored by the same group as SmokeLoader.",
        "category": "Malware",
        "type": [
            "Downloader"
        ],
        "information": [
            "https://blog.trendmicro.com/trendlabs-security-intelligence/sasfis-malware-uses-a-new-trick/",
            "https://blog.trendmicro.com/trendlabs-security-intelligence/sasfis-fizzles-in-the-background/",
            "https://isc.sans.edu/forums/diary/Sasfis+Propagation/8860/",
            "https://www.sophos.com/en-us/threat-center/threat-analyses/viruses-and-spyware/Troj~Sasfis-O/detailed-analysis.aspx",
            "https://www.virusbulletin.com/virusbulletin/2012/11/tracking-2012-sasfis-campaign"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.sasfis"
        ],
        "uuid": "5d6311a3-d859-4832-92c4-8bff582b24de",
        "last-card-change": "2020-05-14",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "OLDBAIT",
            "malware_alias": "Sasfis",
            "malware": "win.oldbait",
            "last_update": "2022-07-14 20:12:39",
            "tags": [],
            "ioc": {
                "domain": [
                    {
                        "value": "login.qwwxthn.xyz",
                        "timestamp": "2022-07-14 20:12:39"
                    },
                    {
                        "value": "login.seafoodsconnection.com",
                        "timestamp": "2022-07-14 20:12:39"
                    },
                    {
                        "value": "login.sunmarks.co.uk",
                        "timestamp": "2022-07-14 20:12:39"
                    },
                    {
                        "value": "login.tfosorcimonline.xyz",
                        "timestamp": "2022-07-14 20:12:39"
                    },
                    {
                        "value": "login.whitmanlab.uk",
                        "timestamp": "2022-07-14 20:12:39"
                    },
                    {
                        "value": "login.yi087011.xyz",
                        "timestamp": "2022-07-14 20:12:39"
                    },
                    {
                        "value": "login.mcrsfts-update.cloud",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mcrsfts-update.digital",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mcrsfts-virtualofficevm.com",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mcrsftsvm-app.digital",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mcrsftsvm-app.live",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mcrsfts-voiceapp.digital",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mcrsftsvoice-mail.cloud",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.microsecurity.us",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.microstoff.xyz",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mljs365.xyz",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mwhhncndn.xyz",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.mycrsfts-passwd.live",
                        "timestamp": "2022-07-14 20:12:38"
                    },
                    {
                        "value": "login.hfs923.shop",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.karlandpearson.com",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.klm2136.click",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.login-micro.mcrsfts-passwdupdate.com",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrosfts-updata.live",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrosfts-update.cloud",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrosfts-update.digital",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrosftts-update.cloud",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrsft-audio.xyz",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrsfts-cloud.live",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrsfts-passwd.cloud",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrsfts-passwd.digital",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.mcrsfts-passwdupdate.com",
                        "timestamp": "2022-07-14 20:12:37"
                    },
                    {
                        "value": "login.actionspsort.cam",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.akasmisoft.xyz",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.aueuth11.live",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.auth009.xyz",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.auth2022.live",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.auth83kl.live",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.bittermann-hh.co",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.cbhbanlc.com",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.cleanifl.com",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.clfonl365.xyz",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.gddss36.live",
                        "timestamp": "2022-07-14 20:12:36"
                    },
                    {
                        "value": "login.grodno-pl.com",
                        "timestamp": "2022-07-14 20:12:36"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2022-07-14 20:12:39",
    "file_name": "sasfis",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.virusbulletin.com/virusbulletin/2012/11/tracking-2012-sasfis-campaign",
            "date": "2012-11-01",
            "organization": "Virus Bulletin",
            "author": "Micky Pun",
            "title": "Tracking the 2012 Sasfis campaign",
            "categories": [
                "Asprox",
                "Sasfis"
            ]
        },
        {
            "data_url": "https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/sasfis",
            "date": "2012-10-09",
            "organization": "Trend Micro",
            "author": "Dianne Lagrimas",
            "title": "SASFIS",
            "categories": [
                "Sasfis"
            ]
        },
        {
            "data_url": "https://www.sophos.com/en-us/threat-center/threat-analyses/viruses-and-spyware/Troj~Sasfis-O/detailed-analysis.aspx",
            "date": "2011-04-16",
            "organization": "Sophos",
            "author": "Sophos",
            "title": "Troj/Sasfis-O",
            "categories": [
                "Sasfis"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/sasfis-malware-uses-a-new-trick/",
            "date": "2010-05-31",
            "organization": "Trend Micro",
            "author": "Joseph Cepe",
            "title": "SASFIS Malware Uses a New Trick",
            "categories": [
                "Sasfis"
            ]
        },
        {
            "data_url": "https://isc.sans.edu/forums/diary/Sasfis+Propagation/8860/",
            "date": "2010-05-27",
            "organization": "SANS ISC InfoSec Forums",
            "author": "Kevin Liston",
            "title": "Sasfis Propagation",
            "categories": [
                "Sasfis"
            ]
        },
        {
            "data_url": "https://www.symantec.com/security-center/writeup/2010-020210-5440-99",
            "date": "2010-02-02",
            "organization": "Symantec",
            "author": "\u00c9amonn Young",
            "title": "Trojan.Sasfis",
            "categories": [
                "Sasfis"
            ]
        },
        {
            "data_url": "https://blog.trendmicro.com/trendlabs-security-intelligence/sasfis-fizzles-in-the-background/",
            "date": "2010-01-21",
            "organization": "Trend Micro",
            "author": "Loucif Kharouni",
            "title": "SASFIS Fizzles in the Background",
            "categories": [
                "Sasfis"
            ]
        }
    ],
    "mitre": []
};