var threatdata = {
    "name": "OLDBAIT",
    "alias": "OLDBAIT, Sasfis",
    "category": "Malware",
    "type": "Credential stealer",
    "modified": "2022-12-29",
    "all_data": {
        "tool": "OLDBAIT",
        "names": [
            {
                "name": "OLDBAIT"
            },
            {
                "name": "Sasfis"
            }
        ],
        "description": "(FireEye) OLDBAIT is a credential harvester that installs itself in %ALLUSERPROFILE%\\\\Application Data\\Microsoft\\MediaPlayer\\updatewindws.exe. There is a missing space in the MediaPlayer directory and the filename is missing the \u2018o\u2019 character. Both the internal strings and logic are obfuscated and are unpacked at startup. Credentials for the following applications are collected:\n\u2022 Internet Explorer\n\u2022 Mozilla Firefox\n\u2022 Eudora\n\u2022 The Bat! (an email client made by a Moldovan company)\n\u2022 Becky! (an email client made by a Japanese company)\n\nBoth email and HTTP can be used to send out the collected credentials.\n\nNote: In some places it is mistakenly named {{Sasfis}}, which however seems to be a completely different and unrelated malware family.",
        "category": "Malware",
        "type": [
            "Credential stealer"
        ],
        "information": [
            "https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-apt28.pdf",
            "https://www.secjuice.com/fancy-bear-review/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S0138/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.oldbait"
        ],
        "uuid": "487c6c1a-4baa-4586-85fb-032677f460be",
        "last-card-change": "2022-12-29",
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
    "file_name": "oldbait",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://www.secjuice.com/fancy-bear-review/",
            "date": "2018-08-26",
            "organization": "SecJuice",
            "author": "SecJuice",
            "title": "Remember Fancy Bear?",
            "categories": [
                "OLDBAIT"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/sites/default/files/2021-09/APT28-Center-of-Storm-2017.pdf",
            "date": "2017-01-10",
            "organization": "FireEye",
            "author": "FireEye iSIGHT Intelligence",
            "title": "APT28:  At The Center  Of The Storm",
            "categories": [
                "Coreshell",
                "OLDBAIT",
                "Sedreco",
                "Seduploader",
                "X-Agent"
            ]
        },
        {
            "data_url": "https://www2.fireeye.com/rs/fireye/images/rpt-apt28.pdf",
            "date": "2014",
            "organization": "FireEye",
            "author": "FireEye",
            "title": "APT28: A Windows into Russia's Cyber Espionage Operations?",
            "categories": [
                "OLDBAIT"
            ]
        },
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
    "mitre": [
        {
            "procedure_name": "oldbait",
            "procedure_code": "s0138",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S0138",
            "techniques": [
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1036.005",
                    "technique_link": "https://attack.mitre.org/techniques/T1036/005",
                    "technique_name": "masquerading : match legitimate name or location",
                    "technique_description": "adversaries may match or approximate the name or location of legitimate files or resources when naming/placing them. this is done for the sake of evading defenses and observation. this may be done by placing an executable in a commonly trusted directory (ex: under system32) or giving it the name of a legitimate, trusted program (ex: svchost.exe). in containerized environments, this may also be done by creating a resource in a namespace that matches the naming convention of a container pod or cluster. alternatively, a file or container image name given may be a close approximation to legitimate programs/images or something innocuous.",
                    "procedure_description": "oldbait installs itself in %alluserprofile%\\application data\\microsoft\\mediaplayer\\updatewindws.exe; the directory name is missing a space and the file name is missing the letter \"o.\"[111]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1027",
                    "technique_link": "https://attack.mitre.org/techniques/T1027",
                    "technique_name": "obfuscated files or information",
                    "technique_description": "adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. this is common behavior that can be used across different platforms and the network to evade defenses.",
                    "procedure_description": "oldbait obfuscates internal strings and unpacks them at startup.[88]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555",
                    "technique_link": "https://attack.mitre.org/techniques/T1555",
                    "technique_name": "credentials from password stores",
                    "technique_description": "adversaries may search for common password storage locations to obtain user credentials. passwords are stored in several places on a system, depending on the operating system or application holding the credentials. there are also specific applications that store passwords to make it easier for users manage and maintain. once credentials are obtained, they can be used to perform lateral movement and access restricted information.",
                    "procedure_description": "oldbait collects credentials from several email clients.[30]"
                },
                {
                    "tactic_code": "ta0006",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0006",
                    "tactic_name": "credential access",
                    "tactic_alias": "credential_access",
                    "tactic_description": "The adversary is trying to steal account names and passwords.",
                    "technique_code": "t1555.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1555/003",
                    "technique_name": "credentials from password stores : credentials from web browsers",
                    "technique_description": "adversaries may acquire credentials from web browsers by reading files specific to the target browser. web browsers commonly save credentials such as website usernames and passwords so that they do not need to be entered manually in the future. web browsers typically store the credentials in an encrypted format within a credential store; however, methods exist to extract plaintext credentials from web browsers.",
                    "procedure_description": "oldbait collects credentials from internet explorer, mozilla firefox, and eudora.[66]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/001",
                    "technique_name": "application layer protocol : web protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "oldbait can use http for c2.[17]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/003",
                    "technique_name": "application layer protocol : mail protocols",
                    "technique_description": "adversaries may communicate using application layer protocols associated with electronic mail delivery to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "oldbait can use smtp for c2.[4]"
                }
            ]
        }
    ]
};