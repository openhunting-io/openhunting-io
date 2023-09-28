var threatdata = {
    "name": "SharkBot",
    "alias": "SharkBot",
    "category": "Malware",
    "type": "Banking trojan, Info stealer, Credential stealer",
    "modified": "2023-06-22",
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
            "last_update": "2023-08-01 15:31:01",
            "tags": [
                "C2",
                "SharkBot",
                "sharkbot"
            ],
            "ioc": {
                "ip:port": [
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
                        "timestamp": "2023-08-01 15:31:01"
                    },
                    {
                        "value": "45.11.180.240:80",
                        "timestamp": "2023-08-01 15:31:00"
                    },
                    {
                        "value": "45.11.180.82:80",
                        "timestamp": "2023-08-01 15:31:00"
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
    "last_ioc_update": "2023-08-01 15:31:01",
    "mitre": [],
    "file_name": "sharkbot",
    "analysis": null
};