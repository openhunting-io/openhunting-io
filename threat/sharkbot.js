var threatdata = {
    "name": "SharkBot",
    "alias": "SharkBot",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer",
    "modified": "2023-07-29",
    "all_data": {
        "tool": "SharkBot",
        "names": [
            {
                "name": "SharkBot"
            }
        ],
        "description": "(Cleafy) At the end of October 2021, a new Android banking trojan appeared on Cleafy's telemetries. Since the lack of information and the absence of a proper nomenclature of this malware family, we decided to dub it SharkBot to better track this family inside our internal Threat Intelligence taxonomy.\n\nSharkBot belongs to a \u201cnew\u201d generation of mobile malware, as it is able to perform ATS attacks inside the infected device. This technique has been already seen recently from other banking trojans, such as Gustuff. ATS (Automatic Transfer System) is an advanced attack technique (fairly new on Android) which enables attackers to auto-fill fields in legitimate mobile banking apps and initiate money transfers from the compromised devices. Contrary to TeaBot and Oscorp/UBEL where a live operator is required to insert and authorize a money transfer, with ATS technique Threat Actors can scale up their operations with minimum user intervention. We assume that SharkBot is trying to bypass behavioural detection countermeasures (e.g.,biometrics) put in place by multiple banks and financial services with the abuse of Android Accessibility Services, also bypassing the need of a \u201cnew device enrollment\u201d.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Info stealer",
            "Credential stealer"
        ],
        "information": [
            "https://www.cleafy.com/cleafy-labs/sharkbot-a-new-generation-of-android-trojan-is-targeting-banks-in-europe",
            "https://research.nccgroup.com/2022/03/03/sharkbot-a-new-generation-android-banking-trojan-being-distributed-on-google-play-store/",
            "https://blog.checkpoint.com/2022/04/07/android-banking-stealer-dubbed-sharkbot-found-disguised-as-legitimate-anti-virus-apps-on-the-google-play-store/",
            "https://www.bitdefender.com/blog/labs/android-sharkbot-droppers-on-google-play-underlines-platforms-security-needs/"
        ],
        "mitre-attack": [
            "https://attack.mitre.org/software/S1055"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/apk.sharkbot"
        ],
        "uuid": "fba647ac-53a5-4801-828c-6f6cc549bc09",
        "last-card-change": "2023-06-22",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "SharkBot",
            "malware_alias": null,
            "malware": "apk.sharkbot",
            "last_update": "2023-12-01 11:34:41",
            "tags": [
                "SharkBot",
                "sharkbot",
                "C2"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "67.223.117.90:80",
                        "timestamp": "2023-12-01 11:34:41"
                    },
                    {
                        "value": "45.11.180.20:80",
                        "timestamp": "2023-06-28 11:34:19"
                    },
                    {
                        "value": "45.11.182.62:80",
                        "timestamp": "2023-03-29 11:34:24"
                    },
                    {
                        "value": "194.76.227.205:80",
                        "timestamp": "2023-03-15 11:34:34"
                    },
                    {
                        "value": "176.10.111.236:80",
                        "timestamp": "2023-03-18 11:34:32"
                    },
                    {
                        "value": "79.132.133.244:80",
                        "timestamp": "2023-04-05 11:34:03"
                    },
                    {
                        "value": "45.11.182.33:80",
                        "timestamp": "2023-04-05 11:34:03"
                    },
                    {
                        "value": "176.10.111.192:80",
                        "timestamp": "2023-03-11 14:27:30"
                    },
                    {
                        "value": "176.10.111.199:80",
                        "timestamp": "2023-03-11 14:27:30"
                    },
                    {
                        "value": "185.219.220.78:80",
                        "timestamp": "2023-04-22 11:33:42"
                    },
                    {
                        "value": "185.219.220.136:80",
                        "timestamp": "2023-05-06 11:34:00"
                    },
                    {
                        "value": "91.241.93.150:80",
                        "timestamp": "2023-12-01 11:34:41"
                    },
                    {
                        "value": "45.11.180.240:80",
                        "timestamp": "2023-08-01 15:31:00"
                    },
                    {
                        "value": "45.11.180.82:80",
                        "timestamp": "2023-12-01 11:34:41"
                    },
                    {
                        "value": "37.10.71.172:80",
                        "timestamp": "2023-02-18 14:34:23"
                    },
                    {
                        "value": "79.132.131.131:80",
                        "timestamp": "2023-02-07 11:34:29"
                    },
                    {
                        "value": "91.242.217.147:80",
                        "timestamp": "2023-01-08 11:33:59"
                    },
                    {
                        "value": "185.212.47.163:80",
                        "timestamp": "2023-01-25 11:34:35"
                    },
                    {
                        "value": "79.132.128.91:80",
                        "timestamp": "2022-12-26 11:34:17"
                    },
                    {
                        "value": "185.212.47.160:80",
                        "timestamp": "2023-01-25 11:34:35"
                    },
                    {
                        "value": "185.212.47.161:80",
                        "timestamp": "2023-01-25 11:34:35"
                    },
                    {
                        "value": "194.76.226.146:80",
                        "timestamp": "2022-11-23 11:34:56"
                    },
                    {
                        "value": "45.11.180.179:80",
                        "timestamp": "2023-05-17 11:33:52"
                    },
                    {
                        "value": "185.158.248.19:80",
                        "timestamp": "2023-02-13 11:34:53"
                    },
                    {
                        "value": "185.219.220.199:80",
                        "timestamp": "2022-11-23 11:34:56"
                    },
                    {
                        "value": "185.212.44.119:80",
                        "timestamp": "2022-11-09 11:36:46"
                    },
                    {
                        "value": "109.230.199.126:80",
                        "timestamp": "2022-12-29 11:34:07"
                    },
                    {
                        "value": "185.158.249.89:80",
                        "timestamp": "2022-11-01 11:38:15"
                    },
                    {
                        "value": "185.212.47.91:80",
                        "timestamp": "2023-02-18 14:34:23"
                    },
                    {
                        "value": "185.219.221.240:80",
                        "timestamp": "2022-09-04 11:36:08"
                    },
                    {
                        "value": "91.240.202.132:80",
                        "timestamp": "2023-02-18 14:34:23"
                    },
                    {
                        "value": "109.230.199.150:80",
                        "timestamp": "2022-10-12 11:43:06"
                    },
                    {
                        "value": "185.212.47.113:80",
                        "timestamp": "2022-09-13 11:39:26"
                    },
                    {
                        "value": "185.158.251.96:80",
                        "timestamp": "2023-04-05 11:34:03"
                    },
                    {
                        "value": "185.158.251.207:80",
                        "timestamp": "2022-12-06 11:34:40"
                    },
                    {
                        "value": "109.230.199.47:80",
                        "timestamp": "2022-07-28 17:22:13"
                    },
                    {
                        "value": "176.10.118.146:80",
                        "timestamp": "2022-09-27 11:41:40"
                    },
                    {
                        "value": "176.10.125.87:80",
                        "timestamp": "2022-07-28 17:22:14"
                    },
                    {
                        "value": "185.158.249.30:80",
                        "timestamp": "2022-06-26 09:26:59"
                    },
                    {
                        "value": "185.212.47.207:80",
                        "timestamp": "2023-01-14 11:34:14"
                    },
                    {
                        "value": "185.219.221.139:80",
                        "timestamp": "2022-09-25 11:38:54"
                    },
                    {
                        "value": "194.76.224.43:80",
                        "timestamp": "2022-09-02 11:49:33"
                    },
                    {
                        "value": "185.219.221.65:80",
                        "timestamp": "2022-06-05 10:43:55"
                    },
                    {
                        "value": "185.158.251.232:80",
                        "timestamp": "2022-07-28 17:22:14"
                    },
                    {
                        "value": "176.10.118.210:80",
                        "timestamp": "2022-05-25 16:51:27"
                    },
                    {
                        "value": "185.158.249.39:80",
                        "timestamp": "2022-07-28 17:22:14"
                    },
                    {
                        "value": "185.212.47.146:80",
                        "timestamp": "2022-03-13 16:05:15"
                    },
                    {
                        "value": "185.158.249.172:80",
                        "timestamp": "2022-07-07 17:33:43"
                    },
                    {
                        "value": "185.219.221.99:80",
                        "timestamp": "2022-05-25 16:51:30"
                    },
                    {
                        "value": "91.240.202.161:80",
                        "timestamp": "2022-09-27 11:41:38"
                    },
                    {
                        "value": "109.230.199.99:80",
                        "timestamp": "2022-03-13 16:05:14"
                    },
                    {
                        "value": "176.10.119.156:80",
                        "timestamp": "2022-04-23 17:22:46"
                    }
                ],
                "domain": [
                    {
                        "value": "87a312e6bb2524d4.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "8d7c621736f6cb25.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "92cf772e294ea095.store",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "9ac0dbea6cd369e3.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "9c8b601990eacf18.live",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "a41997fcd5e0bd32.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "a7b8fa0a1e291cc2.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "b6a30d41c85f0edb.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "bcc1326dc8ca5b17.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "c097a245578c61ef.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "c9267e7172c23fea.store",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "cc4d3debe7c33d08.live",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "cd306c22c6332008.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "d3a9f935b1c82ed3.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "d48c662d57cd23e8.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "d6c73e3ea9b2429d.live",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "d8aa80c3bfe1dad4.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "de3dea888febbf08.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "e91d4ba9a1864c7d.live",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "efd67574d8f47f75.info",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "f15d584827297704.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "f176cf5598f68448.live",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "f20ae55adaaf797f.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "fae361e39435d13c.xyz",
                        "timestamp": "2023-01-25 09:31:33"
                    },
                    {
                        "value": "1b0f3fddf8845df6.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "2369341ad9bbc9a6.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "2a2258751af08761.store",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "2ada1ec5a15bbced.info",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "35b98a2504c08951.live",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "35fbe7fc67cdc20d.top",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "3ab3704445b56546.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "3ddafe944f1dba48.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "3e95e96af806995d.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "3e98c5e2e712f2fc.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "431f4c8044b780c4.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "437435a4cce520bc.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "45ba560c3a67b2e5.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "4f581a978fe0eadf.live",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "5139097f5ef3edc1.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "5a8777db35d45d0a.live",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "5e6acd8a05c2bb35.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "614e7cd1c623698a.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "69a4e33b882cffaf.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "6a00a421e44ead9e.live",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "75b84d88067cb231.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "77eb439d6788793e.com",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "7a4edf69ed3d21f9.live",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "7dc286fdab8292dc.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "80b51e6b4a4942d8.live",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "81041b70fdc3a8d2.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "827c153abcc78ce2.live",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "871d9314bb8bf8da.xyz",
                        "timestamp": "2023-01-25 09:31:32"
                    },
                    {
                        "value": "075a42f94213a494.live",
                        "timestamp": "2023-01-25 09:31:31"
                    },
                    {
                        "value": "086df9b3b637e40d.info",
                        "timestamp": "2023-01-25 09:31:31"
                    },
                    {
                        "value": "0b125b25007220d9.xyz",
                        "timestamp": "2023-01-25 09:31:31"
                    },
                    {
                        "value": "124261b08c52b166.xyz",
                        "timestamp": "2023-01-25 09:31:31"
                    },
                    {
                        "value": "12d6363d1d12242d.live",
                        "timestamp": "2023-01-25 09:31:31"
                    },
                    {
                        "value": "norriscras.store",
                        "timestamp": "2022-12-08 07:34:27"
                    },
                    {
                        "value": "norriscras.online",
                        "timestamp": "2022-12-08 07:34:27"
                    },
                    {
                        "value": "norriscras.shop",
                        "timestamp": "2022-12-08 07:34:27"
                    },
                    {
                        "value": "admfor.me",
                        "timestamp": "2022-09-04 07:01:33"
                    },
                    {
                        "value": "admforall.xyz",
                        "timestamp": "2022-09-02 17:10:06"
                    },
                    {
                        "value": "poletio.space",
                        "timestamp": "2022-09-02 17:10:06"
                    },
                    {
                        "value": "stathere.me",
                        "timestamp": "2022-09-02 17:10:06"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "277ef0716e661f4cee565f8a5838c5a8447ac9dd42e27bfd2e2a404d7b35d869",
                        "timestamp": "2022-03-15 14:20:07"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "9b7de37409f92e43d800c81a192fddee",
                        "timestamp": "2021-12-02 15:06:13"
                    },
                    {
                        "value": "beae001d3bbdcf7a05c053e6773f9796",
                        "timestamp": "2021-11-18 09:54:16"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-12-01 11:34:41",
    "file_name": "sharkbot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://services.google.com/fh/files/blogs/gcat_threathorizons_full_jul2023.pdf",
            "date": "2023-07-29",
            "organization": "Google",
            "author": "Google Cybersecurity Action Team",
            "title": "Threat Horizons August 2023 Threat Horizons Report",
            "categories": [
                "SharkBot",
                "Cobalt Strike"
            ]
        },
        {
            "data_url": "https://www.threatfabric.com/blogs/the-attack-of-the-droppers.html",
            "date": "2022-10-28",
            "organization": "ThreatFabric",
            "author": "ThreatFabric",
            "title": "Malware wars: the attack of the droppers",
            "categories": [
                "Brunhilda",
                "SharkBot",
                "Vultur"
            ]
        },
        {
            "data_url": "https://muha2xmad.github.io/malware-analysis/sharkbot/",
            "date": "2022-09-06",
            "organization": "Github (muha2xmad)",
            "author": "Muhammad Hasan Ali",
            "title": "Technical analysis of SharkBot android malware",
            "categories": [
                "SharkBot"
            ]
        },
        {
            "data_url": "https://blog.fox-it.com/2022/09/02/sharkbot-is-back-in-google-play/",
            "date": "2022-09-02",
            "organization": "nccgroup",
            "author": "Alberto Segura",
            "title": "Sharkbot is back in Google Play",
            "categories": [
                "SharkBot"
            ]
        },
        {
            "data_url": "https://bin.re/blog/the-dgas-of-sharkbot/",
            "date": "2022-06-04",
            "organization": "bin.re",
            "author": "Johannes Bader",
            "title": "The Domain Generation Algorithms of SharkBot",
            "categories": [
                "SharkBot"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/2022/google-is-on-guard-sharks-shall-not-pass/",
            "date": "2022-04-07",
            "organization": "Checkpoint",
            "author": "Alex Shamshur",
            "title": "Google is on guard: sharks shall not pass!",
            "categories": [
                "SharkBot"
            ]
        },
        {
            "data_url": "https://research.nccgroup.com/2022/03/03/sharkbot-a-new-generation-android-banking-trojan-being-distributed-on-google-play-store/",
            "date": "2022-03-03",
            "organization": "NCC Group",
            "author": "RIFT: Research and Intelligence Fusion Team",
            "title": "SharkBot: a \u201cnew\u201d generation Android banking Trojan being distributed on Google Play Store",
            "categories": [
                "SharkBot"
            ]
        },
        {
            "data_url": "https://blog.fox-it.com/2022/03/03/sharkbot-a-new-generation-android-banking-trojan-being-distributed-on-google-play-store/",
            "date": "2022-03-03",
            "organization": "Fox-IT",
            "author": "Alberto Segura",
            "title": "SharkBot: a \u201cnew\u201d generation Android banking Trojan being distributed on Google Play Store",
            "categories": [
                "SharkBot"
            ]
        },
        {
            "data_url": "https://www.cleafy.com/cleafy-labs/sharkbot-a-new-generation-of-android-trojan-is-targeting-banks-in-europe",
            "date": "2021-11-11",
            "organization": "Cleafy",
            "author": "Cleafy",
            "title": "SharkBot: a new generation of Android Trojans is targeting banks in Europe",
            "categories": [
                "SharkBot"
            ]
        }
    ],
    "mitre": [
        {
            "procedure_name": "shark",
            "procedure_code": "s1019",
            "procedure_type": "software",
            "procedure_link": "https://attack.mitre.org/software/S1019",
            "techniques": [
                {
                    "tactic_code": "ta0002",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0002",
                    "tactic_name": "execution",
                    "tactic_alias": "execution",
                    "tactic_description": "The adversary is trying to run malicious code.",
                    "technique_code": "t1059.003",
                    "technique_link": "https://attack.mitre.org/techniques/T1059/003",
                    "technique_name": "command and scripting interpreter : windows command shell",
                    "technique_description": "adversaries may abuse the windows command shell for execution. the windows command shell (cmd) is the primary command prompt on windows systems. the windows command prompt can be used to control almost any aspect of a system, with various permission levels required for different subsets of commands. the command prompt can be invoked remotely via remote services such as ssh.",
                    "procedure_description": "shark has the ability to use cmd to execute commands.[94][301]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1140",
                    "technique_link": "https://attack.mitre.org/techniques/T1140",
                    "technique_name": "deobfuscate/decode files or information",
                    "technique_description": "adversaries may use obfuscated files or information to hide artifacts of an intrusion from analysis. they may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. methods for doing that include built-in functionality of malware or by using utilities present on the system.",
                    "procedure_description": "shark can extract and decrypt downloaded .zip files.[210]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1070.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1070/004",
                    "technique_name": "indicator removal : file deletion",
                    "technique_description": "adversaries may delete files left behind by the actions of their intrusion activity. malware, tools, or other non-native files dropped or created on a system by an adversary (ex: ingress tool transfer) may leave traces to indicate to what was done within a network and how. removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.",
                    "procedure_description": "shark can delete files downloaded to the compromised host.[51]"
                },
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
                    "procedure_description": "shark binaries have been named audioddg.pdb and winlangdb.pdb in order to appear legitimate.[44]"
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
                    "procedure_description": "shark can use encrypted and encoded files for c2 configuration.[215][293]"
                },
                {
                    "tactic_code": "ta0005",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0005",
                    "tactic_name": "defense evasion",
                    "tactic_alias": "defense_evasion",
                    "tactic_description": "The adversary is trying to avoid being detected.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "shark can stop execution if the screen width of the targeted machine is not over 600 pixels.[52]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1012",
                    "technique_link": "https://attack.mitre.org/techniques/T1012",
                    "technique_name": "query registry",
                    "technique_description": "adversaries may interact with the windows registry to gather information about the system, configuration, and installed software.",
                    "procedure_description": "shark can query hkey_local_machine\\software\\microsoft\\cryptography machineguid to retrieve the machine guid.[60]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1082",
                    "technique_link": "https://attack.mitre.org/techniques/T1082",
                    "technique_name": "system information discovery",
                    "technique_description": "an adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. adversaries may use the information from system information discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.",
                    "procedure_description": "shark can collect the guid of a targeted machine.[229][230]"
                },
                {
                    "tactic_code": "ta0007",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0007",
                    "tactic_name": "discovery",
                    "tactic_alias": "discovery",
                    "tactic_description": "The adversary is trying to figure out your environment.",
                    "technique_code": "t1497.001",
                    "technique_link": "https://attack.mitre.org/techniques/T1497/001",
                    "technique_name": "virtualization/sandbox evasion : system checks",
                    "technique_description": "adversaries may employ various system checks to detect and avoid virtualization and analysis environments. this may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (vme) or sandbox. if the adversary detects a vme, they may alter their malware to disengage from the victim or conceal the core functions of the implant. they may also search for vme artifacts before dropping secondary or additional payloads. adversaries may use the information learned from virtualization/sandbox evasion during automated discovery to shape follow-on behaviors.",
                    "procedure_description": "shark can stop execution if the screen width of the targeted machine is not over 600 pixels.[52]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1005",
                    "technique_link": "https://attack.mitre.org/techniques/T1005",
                    "technique_name": "data from local system",
                    "technique_description": "adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to exfiltration.",
                    "procedure_description": "shark can upload files to its c2.[120][167]"
                },
                {
                    "tactic_code": "ta0009",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0009",
                    "tactic_name": "collection",
                    "tactic_alias": "collection",
                    "tactic_description": "The adversary is trying to gather data of interest to their goal.",
                    "technique_code": "t1074",
                    "technique_link": "https://attack.mitre.org/techniques/T1074",
                    "technique_name": "data staged",
                    "technique_description": "adversaries may stage collected data in a central location or directory prior to exfiltration. data may be kept in separate files or combined into one file through techniques such as archive collected data. interactive command shells may be used, and common functionality within cmd and bash may be used to copy data into a staging location.",
                    "procedure_description": "shark has stored information in folders named u1 and u2 prior to exfiltration.[5]"
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
                    "procedure_description": "shark has the ability to use http in c2 communications.[210][211]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1071.004",
                    "technique_link": "https://attack.mitre.org/techniques/T1071/004",
                    "technique_name": "application layer protocol : dns",
                    "technique_description": "adversaries may communicate using the domain name system (dns) application layer protocol to avoid detection/network filtering by blending in with existing traffic. commands to the remote system, and often the results of those commands, will be embedded within the protocol traffic between the client and server.",
                    "procedure_description": "shark can use dns in c2 communications.[40][41]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1568.002",
                    "technique_link": "https://attack.mitre.org/techniques/T1568/002",
                    "technique_name": "dynamic resolution : domain generation algorithms",
                    "technique_description": "adversaries may make use of domain generation algorithms (dgas) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static ip addresses or domains. this has the advantage of making it much harder for defenders to block, track, or take over the command and control channel, as there potentially could be thousands of domains that malware can check for instructions.",
                    "procedure_description": "shark can send dns c2 communications using a unique domain generation algorithm.[27][21]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1008",
                    "technique_link": "https://attack.mitre.org/techniques/T1008",
                    "technique_name": "fallback channels",
                    "technique_description": "adversaries may use fallback or alternate communication channels if the primary channel is compromised or inaccessible in order to maintain reliable command and control and to avoid data transfer thresholds.",
                    "procedure_description": "shark can update its configuration to use a different c2 server.[41]"
                },
                {
                    "tactic_code": "ta0011",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0011",
                    "tactic_name": "command and control",
                    "tactic_alias": "command_and_control",
                    "tactic_description": "The adversary is trying to communicate with compromised systems to control them.",
                    "technique_code": "t1105",
                    "technique_link": "https://attack.mitre.org/techniques/T1105",
                    "technique_name": "ingress tool transfer",
                    "technique_description": "adversaries may transfer tools or other files from an external system into a compromised environment. tools or files may be copied from an external adversary-controlled system to the victim network through the command and control channel or through alternate protocols such as ftp. once present, adversaries may also transfer/spread tools between victim devices within a compromised environment (i.e. lateral tool transfer).",
                    "procedure_description": "shark  can download additional files from its c2 via http or dns.[293][405]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1041",
                    "technique_link": "https://attack.mitre.org/techniques/T1041",
                    "technique_name": "exfiltration over c2 channel",
                    "technique_description": "adversaries may steal data by exfiltrating it over an existing command and control channel. stolen data is encoded into the normal communications channel using the same protocol as command and control communications.",
                    "procedure_description": "shark has the ability to upload files from the compromised host over a dns or http c2 channel.[111]"
                },
                {
                    "tactic_code": "ta0010",
                    "tactic_link": "https://attack.mitre.org/tactics/TA0010",
                    "tactic_name": "exfiltration",
                    "tactic_alias": "exfiltration",
                    "tactic_description": "The adversary is trying to steal data.",
                    "technique_code": "t1029",
                    "technique_link": "https://attack.mitre.org/techniques/T1029",
                    "technique_name": "scheduled transfer",
                    "technique_description": "adversaries may schedule data exfiltration to be performed only at certain times of day or at certain intervals. this could be done to blend traffic patterns with normal activity or availability.",
                    "procedure_description": "shark can pause c2 communications for a specified time.[15]"
                }
            ]
        }
    ]
};