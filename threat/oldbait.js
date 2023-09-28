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
    "mitre": [],
    "file_name": "oldbait",
    "analysis": null
};