var threatdata = {
    "name": "Gozi",
    "alias": "Gozi, CRM, Gozi CRM, Papras, Ursnif, Snifula",
    "category": "Malware",
    "type": "Banking trojan, Credential stealer",
    "modified": "2023-09-06",
    "all_data": {
        "tool": "Gozi",
        "names": [
            {
                "name": "Gozi"
            },
            {
                "name": "CRM"
            },
            {
                "name": "Gozi CRM"
            },
            {
                "name": "Papras"
            },
            {
                "name": "Ursnif"
            },
            {
                "name": "Snifula"
            }
        ],
        "description": "(SecureWorks) A single attack by a single variant compromises more than 5200 hosts and 10,000 user accounts on hundreds of sites.\n\n\u2022 Steals SSL data using advanced Winsock2 functionality\n\u2022 State-of-the-art, modularized trojan code\n\u2022 Spread through IE browser exploits\n\u2022 Undetected for weeks, months by many AV vendors\n\u2022 Customized server/database code to collect sensitive data\n\u2022 Customer interface for on-line purchases of stolen data\n\u2022 Accounts compromised by stealing data primarily from infected home PCs\n\u2022 Accounts at top financial, retail, health care, and government services affected\n\u2022 Data's black market value at least $2 million",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Credential stealer"
        ],
        "information": [
            "https://www.secureworks.com/research/gozi",
            "https://blog.gdatasoftware.com/2016/11/29325-analysis-ursnif-spying-on-your-data-since-2007",
            "http://researchcenter.paloaltonetworks.com/2017/02/unit42-banking-trojans-ursnif-global-distribution-networks-identified/",
            "https://lokalhost.pl/gozi_tree.txt",
            "https://blog.avast.com/ursnif-victim-data",
            "https://securityintelligence.com/posts/ursnif-cerberus-android-malware-bank-transfers-italy/",
            "https://www.mandiant.com/resources/blog/rm3-ldr4-ursnif-banking-fraud",
            "https://securityintelligence.com/posts/gozi-strikes-again-targeting-banks-cryptocurrency-and-more/"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.gozi"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:gozi"
        ],
        "uuid": "f8740da3-1d35-498a-a026-74ce0c034f6d",
        "last-card-change": "2023-09-06",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "Gozi",
            "malware_alias": "CRM,Gozi CRM,Papras,Snifula,Ursnif",
            "malware": "win.gozi",
            "last_update": "2023-07-18 16:45:33",
            "tags": [
                "Ursnif",
                "cutwail",
                "exe",
                "RM3Loader",
                "RigEK",
                "geo",
                "LDR4",
                "zip",
                "IFSB",
                "202108021",
                "c2",
                "js",
                "gozi",
                "Gozi",
                "ISFB",
                "ursnif",
                "TA551",
                "ITA",
                "RM3",
                "panel"
            ],
            "ioc": {
                "url": [
                    {
                        "value": "http://45.155.249.91",
                        "timestamp": "2023-07-18 16:45:33"
                    },
                    {
                        "value": "https://liset.che3ck.bi1ng.com",
                        "timestamp": "2023-07-18 16:45:32"
                    },
                    {
                        "value": "https://lisfwhite.ch2eck.yaheoo.com",
                        "timestamp": "2023-07-18 16:45:31"
                    },
                    {
                        "value": "http://45.155.250.58",
                        "timestamp": "2023-07-18 16:45:31"
                    },
                    {
                        "value": "https://listwhfite.check3.yaho1o.com",
                        "timestamp": "2023-07-18 16:45:29"
                    },
                    {
                        "value": "http://79.132.130.230",
                        "timestamp": "2023-07-18 16:45:28"
                    },
                    {
                        "value": "http://45.11.182.38",
                        "timestamp": "2023-07-18 16:45:27"
                    },
                    {
                        "value": "http://cajaminoretino.site/signed/3939.7z",
                        "timestamp": "2023-07-18 16:41:26"
                    },
                    {
                        "value": "http://78.153.130.9",
                        "timestamp": "2023-06-08 23:25:50"
                    },
                    {
                        "value": "http://45.15.157.239",
                        "timestamp": "2023-06-08 23:25:50"
                    },
                    {
                        "value": "https://www.patrickforeilly.com/vps/",
                        "timestamp": "2023-06-08 23:21:45"
                    },
                    {
                        "value": "https://fuelrescue.ie/wp/",
                        "timestamp": "2023-06-08 23:21:43"
                    },
                    {
                        "value": "https://whatswit.com/",
                        "timestamp": "2023-02-22 10:46:48"
                    },
                    {
                        "value": "http://194.76.224.234",
                        "timestamp": "2022-12-15 16:55:55"
                    },
                    {
                        "value": "http://176.10.111.45",
                        "timestamp": "2022-12-15 16:55:55"
                    },
                    {
                        "value": "http://79.132.128.151",
                        "timestamp": "2022-12-15 16:55:55"
                    },
                    {
                        "value": "http://176.10.111.47",
                        "timestamp": "2022-12-15 16:55:55"
                    },
                    {
                        "value": "http://108.61.165.145",
                        "timestamp": "2022-12-15 16:55:55"
                    },
                    {
                        "value": "http://37.120.222.23",
                        "timestamp": "2022-12-15 16:55:55"
                    },
                    {
                        "value": "http://79.132.128.146",
                        "timestamp": "2022-12-15 16:55:55"
                    },
                    {
                        "value": "http://176.10.119.229",
                        "timestamp": "2022-12-15 16:55:55"
                    },
                    {
                        "value": "https://dominikania.com/",
                        "timestamp": "2022-09-20 09:16:13"
                    },
                    {
                        "value": "http://5.42.199.72/cook32.rar",
                        "timestamp": "2022-07-14 11:32:02"
                    },
                    {
                        "value": "http://5.42.199.72/cook64.rar",
                        "timestamp": "2022-07-14 11:32:02"
                    },
                    {
                        "value": "http://5.42.199.72/stilak32.rar",
                        "timestamp": "2022-07-14 11:32:01"
                    },
                    {
                        "value": "http://5.42.199.72/stilak64.rar",
                        "timestamp": "2022-07-14 11:32:01"
                    },
                    {
                        "value": "https://domanaic.com/",
                        "timestamp": "2022-07-14 11:31:45"
                    },
                    {
                        "value": "https://investprides.com/",
                        "timestamp": "2022-06-29 09:32:04"
                    },
                    {
                        "value": "https://consaltins.com/",
                        "timestamp": "2022-06-07 08:49:25"
                    },
                    {
                        "value": "https://inmanagment.com/",
                        "timestamp": "2022-05-25 08:56:16"
                    },
                    {
                        "value": "https://managmentoria.com",
                        "timestamp": "2022-05-17 09:23:49"
                    },
                    {
                        "value": "https://investoriant.com/",
                        "timestamp": "2022-05-04 10:24:29"
                    },
                    {
                        "value": "https://inversinbiz.com",
                        "timestamp": "2022-04-28 08:41:09"
                    },
                    {
                        "value": "https://bizinvetment.com/",
                        "timestamp": "2022-04-27 09:29:06"
                    },
                    {
                        "value": "https://hotroad.cyou/index.htm",
                        "timestamp": "2021-09-03 15:38:31"
                    },
                    {
                        "value": "https://monotep.xyz/index.htm",
                        "timestamp": "2021-09-03 15:38:31"
                    },
                    {
                        "value": "https://free.mynowministries.com/app.dll",
                        "timestamp": "2021-07-14 14:15:27"
                    }
                ],
                "ip:port": [
                    {
                        "value": "45.11.182.38:443",
                        "timestamp": "2023-07-18 16:40:18"
                    },
                    {
                        "value": "31.41.44.125:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "193.233.72.14:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "91.149.218.248:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "194.87.47.138:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "46.8.210.80:443",
                        "timestamp": "2023-01-12 12:59:34"
                    },
                    {
                        "value": "62.173.140.103:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "62.173.140.8:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "31.41.44.124:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "62.173.138.234:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "31.41.44.112:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "91.107.119.114:443",
                        "timestamp": "2023-01-10 13:27:55"
                    },
                    {
                        "value": "194.55.186.246:80",
                        "timestamp": "2022-12-18 02:18:38"
                    },
                    {
                        "value": "91.242.217.28:80",
                        "timestamp": "2022-12-18 01:16:27"
                    },
                    {
                        "value": "91.241.93.111:80",
                        "timestamp": "2022-12-18 01:16:27"
                    },
                    {
                        "value": "31.41.44.63:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "31.41.44.60:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "45.11.182.97:80",
                        "timestamp": "2022-12-18 01:16:27"
                    },
                    {
                        "value": "79.132.128.108:80",
                        "timestamp": "2022-12-18 01:16:27"
                    },
                    {
                        "value": "91.241.93.98:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "79.132.128.109:80",
                        "timestamp": "2022-12-18 01:16:27"
                    },
                    {
                        "value": "185.31.162.9:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "62.173.147.113:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "185.31.160.147:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "31.41.44.63:80",
                        "timestamp": "2022-12-15 19:32:39"
                    },
                    {
                        "value": "31.41.46.120:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "31.41.44.63:80",
                        "timestamp": "2022-12-15 19:32:39"
                    },
                    {
                        "value": "185.31.160.229:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "31.41.44.60:80",
                        "timestamp": "2022-12-15 19:32:38"
                    },
                    {
                        "value": "31.41.46.132:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "194.76.224.234:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "108.61.165.145:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "37.120.222.23:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "79.132.128.146:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "176.10.119.229:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "176.10.111.45:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "79.132.128.151:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "176.10.111.47:80",
                        "timestamp": "2022-12-15 20:48:03"
                    },
                    {
                        "value": "31.207.46.12:443",
                        "timestamp": "2022-11-30 10:22:54"
                    },
                    {
                        "value": "89.45.4.102:443",
                        "timestamp": "2022-09-20 09:16:54"
                    },
                    {
                        "value": "89.41.26.99:443",
                        "timestamp": "2022-09-20 09:16:53"
                    },
                    {
                        "value": "193.106.191.163:80",
                        "timestamp": "2022-09-20 14:39:16"
                    },
                    {
                        "value": "193.106.191.163:443",
                        "timestamp": "2022-09-20 09:16:54"
                    },
                    {
                        "value": "37.120.206.71:443",
                        "timestamp": "2022-08-03 11:06:01"
                    },
                    {
                        "value": "37.120.206.84:443",
                        "timestamp": "2022-08-03 11:06:01"
                    },
                    {
                        "value": "37.120.206.95:443",
                        "timestamp": "2022-08-03 11:06:02"
                    },
                    {
                        "value": "5.42.199.57:443",
                        "timestamp": "2022-08-03 11:06:02"
                    },
                    {
                        "value": "37.120.206.91:443",
                        "timestamp": "2022-08-03 11:06:02"
                    },
                    {
                        "value": "193.27.14.240:443",
                        "timestamp": "2022-07-20 10:33:53"
                    },
                    {
                        "value": "94.198.40.39:443",
                        "timestamp": "2022-07-20 10:33:53"
                    },
                    {
                        "value": "94.198.40.47:443",
                        "timestamp": "2022-07-20 10:33:53"
                    },
                    {
                        "value": "94.198.40.58:443",
                        "timestamp": "2022-09-30 20:54:31"
                    },
                    {
                        "value": "79.110.52.241:443",
                        "timestamp": "2022-07-14 11:50:24"
                    },
                    {
                        "value": "46.21.153.252:443",
                        "timestamp": "2022-07-14 11:50:23"
                    },
                    {
                        "value": "79.110.52.164:443",
                        "timestamp": "2022-07-07 09:49:09"
                    },
                    {
                        "value": "79.110.52.97:443",
                        "timestamp": "2022-07-07 09:49:09"
                    },
                    {
                        "value": "23.227.202.64:443",
                        "timestamp": "2022-07-14 11:50:23"
                    },
                    {
                        "value": "79.110.52.244:443",
                        "timestamp": "2022-07-14 11:50:23"
                    },
                    {
                        "value": "46.21.153.221:443",
                        "timestamp": "2022-06-29 09:32:49"
                    },
                    {
                        "value": "194.76.224.26:443",
                        "timestamp": "2022-06-29 09:32:49"
                    },
                    {
                        "value": "46.21.153.203:443",
                        "timestamp": "2022-06-29 09:32:49"
                    },
                    {
                        "value": "194.76.225.112:443",
                        "timestamp": "2022-06-29 09:32:48"
                    },
                    {
                        "value": "194.76.225.113:443",
                        "timestamp": "2022-06-29 09:32:48"
                    },
                    {
                        "value": "37.10.71.221:443",
                        "timestamp": "2022-06-07 08:51:00"
                    },
                    {
                        "value": "176.100.42.170:443",
                        "timestamp": "2022-06-07 08:50:56"
                    },
                    {
                        "value": "31.214.157.235:443",
                        "timestamp": "2022-06-07 08:50:54"
                    },
                    {
                        "value": "176.10.119.68:443",
                        "timestamp": "2022-05-25 08:54:58"
                    },
                    {
                        "value": "176.10.119.81:443",
                        "timestamp": "2022-05-25 08:54:58"
                    },
                    {
                        "value": "185.189.151.70:443",
                        "timestamp": "2022-05-17 08:49:35"
                    },
                    {
                        "value": "185.189.151.28:443",
                        "timestamp": "2022-05-17 08:49:33"
                    },
                    {
                        "value": "185.189.151.70:80",
                        "timestamp": "2022-05-04 10:16:19"
                    },
                    {
                        "value": "185.189.151.28:80",
                        "timestamp": "2022-05-04 10:16:18"
                    },
                    {
                        "value": "94.140.112.44:80",
                        "timestamp": "2022-04-28 08:38:55"
                    },
                    {
                        "value": "94.140.112.35:80",
                        "timestamp": "2022-04-28 08:38:55"
                    },
                    {
                        "value": "94.140.115.8:80",
                        "timestamp": "2022-04-28 08:38:54"
                    },
                    {
                        "value": "217.12.221.28:443",
                        "timestamp": "2021-07-06 15:07:45"
                    },
                    {
                        "value": "45.90.58.179:80",
                        "timestamp": "2021-07-06 15:07:45"
                    },
                    {
                        "value": "217.12.206.30:80",
                        "timestamp": "2021-07-06 15:07:45"
                    },
                    {
                        "value": "37.120.222.161:443",
                        "timestamp": "2021-06-22 15:02:02"
                    },
                    {
                        "value": "37.120.222.163:443",
                        "timestamp": "2021-06-22 15:02:02"
                    },
                    {
                        "value": "37.120.222.189:443",
                        "timestamp": "2021-06-22 15:02:02"
                    },
                    {
                        "value": "92.223.90.242:443",
                        "timestamp": "2021-04-02 18:12:04"
                    },
                    {
                        "value": "31.148.99.142:80",
                        "timestamp": "2021-03-16 19:43:51"
                    },
                    {
                        "value": "108.61.89.233:443",
                        "timestamp": "2021-03-16 19:43:51"
                    },
                    {
                        "value": "31.148.99.193:80",
                        "timestamp": "2021-03-16 19:43:51"
                    }
                ],
                "domain": [
                    {
                        "value": "mainertin.com",
                        "timestamp": "2023-05-25 15:12:11"
                    },
                    {
                        "value": "bamukal.top",
                        "timestamp": "2023-04-28 16:01:35"
                    },
                    {
                        "value": "ceredovza.top",
                        "timestamp": "2023-03-30 08:17:42"
                    },
                    {
                        "value": "kaskihkin-kotero.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "gribkoosov.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "tamdindyrdeos2.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "svoklavirivdia88.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "okpmakrodj09291.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "sastypedd6e.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "lambooauus.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "taktoeaayd7imus.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "sintesis03lo.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "leikocittoosih9racker.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "stydensjina88a8.ru",
                        "timestamp": "2022-12-27 20:12:32"
                    },
                    {
                        "value": "internetwork.top",
                        "timestamp": "2022-11-30 10:19:52"
                    },
                    {
                        "value": "diegxmlop.at",
                        "timestamp": "2022-11-30 10:19:52"
                    },
                    {
                        "value": "optinetwork.top",
                        "timestamp": "2022-12-06 13:45:15"
                    },
                    {
                        "value": "onlynetwork.top",
                        "timestamp": "2022-11-30 10:17:10"
                    },
                    {
                        "value": "interstarts.top",
                        "timestamp": "2022-09-20 09:17:16"
                    },
                    {
                        "value": "netope.xyz",
                        "timestamp": "2022-09-16 11:49:54"
                    },
                    {
                        "value": "pipap.xyz",
                        "timestamp": "2022-11-24 09:46:40"
                    },
                    {
                        "value": "tornton.xyz",
                        "timestamp": "2022-11-24 09:46:40"
                    },
                    {
                        "value": "astope.xyz",
                        "timestamp": "2022-11-24 09:46:39"
                    },
                    {
                        "value": "dodstep.cyou",
                        "timestamp": "2022-11-24 09:46:39"
                    },
                    {
                        "value": "fineg.xyz",
                        "timestamp": "2022-11-24 09:46:39"
                    },
                    {
                        "value": "fingerpin.cyou",
                        "timestamp": "2022-11-24 09:46:39"
                    },
                    {
                        "value": "giantos.xyz",
                        "timestamp": "2022-11-24 09:46:40"
                    },
                    {
                        "value": "kidup.xyz",
                        "timestamp": "2022-11-24 09:46:40"
                    },
                    {
                        "value": "lionnik.xyz",
                        "timestamp": "2022-11-24 09:46:40"
                    },
                    {
                        "value": "logotep.xyz",
                        "timestamp": "2022-11-24 09:46:40"
                    },
                    {
                        "value": "mainwog.xyz",
                        "timestamp": "2022-11-24 09:46:40"
                    },
                    {
                        "value": "superstarts.top",
                        "timestamp": "2022-08-31 10:26:16"
                    },
                    {
                        "value": "superlist.top",
                        "timestamp": "2022-09-20 09:17:16"
                    },
                    {
                        "value": "internetcoca.in",
                        "timestamp": "2022-11-30 10:17:10"
                    },
                    {
                        "value": "gigiman.xyz",
                        "timestamp": "2022-11-24 09:46:40"
                    },
                    {
                        "value": "daydayvin.xyz",
                        "timestamp": "2022-11-24 09:46:39"
                    },
                    {
                        "value": "xerkdeoleone.at",
                        "timestamp": "2022-08-03 11:02:54"
                    },
                    {
                        "value": "havefuntxmm.at",
                        "timestamp": "2022-08-03 11:02:54"
                    },
                    {
                        "value": "kimzooxl.at",
                        "timestamp": "2022-07-20 10:34:16"
                    },
                    {
                        "value": "deohomexm.at",
                        "timestamp": "2022-08-17 13:20:24"
                    },
                    {
                        "value": "geodezhols.at",
                        "timestamp": "2022-06-29 09:32:20"
                    },
                    {
                        "value": "xmhomestilesh.at",
                        "timestamp": "2022-06-29 09:32:20"
                    },
                    {
                        "value": "cabrioxmdes.at",
                        "timestamp": "2022-04-28 08:39:46"
                    },
                    {
                        "value": "hopexmder.net",
                        "timestamp": "2022-04-28 08:39:46"
                    },
                    {
                        "value": "fx.rhinobuff.com",
                        "timestamp": "2021-10-25 09:34:14"
                    },
                    {
                        "value": "fio.linosheart.com",
                        "timestamp": "2021-10-25 09:34:14"
                    },
                    {
                        "value": "app.updatebrouser.com",
                        "timestamp": "2021-09-24 09:39:18"
                    },
                    {
                        "value": "atl.bigbigpoppa.com",
                        "timestamp": "2021-09-16 14:00:41"
                    },
                    {
                        "value": "pop.urlovedstuff.com",
                        "timestamp": "2021-09-16 14:00:41"
                    },
                    {
                        "value": "selltaxes.com",
                        "timestamp": "2021-09-06 12:46:44"
                    },
                    {
                        "value": "inbiz-cons.com",
                        "timestamp": "2021-09-14 19:04:51"
                    },
                    {
                        "value": "hotroad.cyou",
                        "timestamp": "2021-09-03 15:39:32"
                    },
                    {
                        "value": "monotep.xyz",
                        "timestamp": "2021-09-03 15:39:32"
                    },
                    {
                        "value": "bizneshear.com",
                        "timestamp": "2021-08-23 11:32:05"
                    },
                    {
                        "value": "lyonshouseholds.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "kitchenstorage1999b.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "landryfocusg.com",
                        "timestamp": "2021-07-26 09:46:45"
                    },
                    {
                        "value": "heathcargos.com",
                        "timestamp": "2021-07-26 09:46:45"
                    },
                    {
                        "value": "beforehebertd.com",
                        "timestamp": "2021-07-26 09:46:45"
                    },
                    {
                        "value": "beckgazeg.com",
                        "timestamp": "2021-07-26 09:46:45"
                    },
                    {
                        "value": "glareestradad.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "blanchardrealtys.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "woodfrancisd.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "suitweeksd.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "siblingwileyd.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "saundersremindg.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "palacemanagement2012b.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "hubertrapg.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "haleymarkets.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "copelandmanagements.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "wayhensond.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "donaldsonhourg.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "clipraymondd.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "vastretail2005b.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "randallbidg.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "doseaudit2013b.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "branchsuitg.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "strugglevincentd.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "steptransport2017b.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "gainoil2004b.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "woodfringeg.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "nephewboring2013b.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "movekochd.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "hortonheavyg.com",
                        "timestamp": "2021-07-23 08:25:48"
                    },
                    {
                        "value": "sloanavocadog.com",
                        "timestamp": "2021-07-26 09:46:46"
                    },
                    {
                        "value": "dronmakerparallel.email",
                        "timestamp": "2021-07-14 14:53:21"
                    },
                    {
                        "value": "moonlightparallels.email",
                        "timestamp": "2021-07-14 14:53:21"
                    },
                    {
                        "value": "bizneswow.com",
                        "timestamp": "2021-07-13 13:39:39"
                    },
                    {
                        "value": "saleconsalt.com",
                        "timestamp": "2021-07-13 13:39:39"
                    },
                    {
                        "value": "gtr.antoinfer.com",
                        "timestamp": "2021-08-15 06:27:29"
                    },
                    {
                        "value": "app.bighomegl.at",
                        "timestamp": "2021-08-15 06:27:29"
                    },
                    {
                        "value": "kerimerunollu.club",
                        "timestamp": "2021-06-22 15:01:18"
                    },
                    {
                        "value": "lerimerunollu.club",
                        "timestamp": "2021-06-22 15:01:18"
                    },
                    {
                        "value": "jerimerunollu.club",
                        "timestamp": "2021-06-22 15:01:14"
                    },
                    {
                        "value": "gerimerunollu.club",
                        "timestamp": "2021-06-22 15:01:11"
                    },
                    {
                        "value": "herimerunollu.club",
                        "timestamp": "2021-06-22 15:01:12"
                    },
                    {
                        "value": "interwind.co",
                        "timestamp": "2021-03-30 07:34:09"
                    },
                    {
                        "value": "telewind.co",
                        "timestamp": "2021-03-30 07:34:09"
                    },
                    {
                        "value": "gotoregt.space",
                        "timestamp": "2021-03-25 18:34:09"
                    },
                    {
                        "value": "massidfberiatersksilkavayssstezya.ru",
                        "timestamp": "2021-03-16 19:42:55"
                    },
                    {
                        "value": "mononopu.xyz",
                        "timestamp": "2021-03-16 19:42:55"
                    },
                    {
                        "value": "stratosferiss.ru",
                        "timestamp": "2021-03-16 19:42:55"
                    },
                    {
                        "value": "drazbargura.xyz",
                        "timestamp": "2021-03-09 11:34:57"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "84085969e3d0effdc92707ce694e91400673ea11ac52b1a423bbba55738a6e95",
                        "timestamp": "2023-02-02 18:29:15"
                    },
                    {
                        "value": "d71edaf61b8f536eb7f9d28a345cded5ca3b2b84a6f4216671ee9fc2b7b4fbd4",
                        "timestamp": "2023-01-12 16:02:01"
                    },
                    {
                        "value": "cb3b67a980ba921625ecdf082d518c73a9f80ce1b2d4f428b6e950b20a9688bb",
                        "timestamp": "2023-01-11 15:00:25"
                    },
                    {
                        "value": "7d04f52af134980eef9544350ee216457910e7531a60c88ec9fa80daae59c2d3",
                        "timestamp": "2022-10-18 20:14:13"
                    },
                    {
                        "value": "db4158ecdd18f5f5a706b12d2af93169199e02a6d53270acc3f233aa2d459ed2",
                        "timestamp": "2022-04-27 21:17:00"
                    },
                    {
                        "value": "9b9d70e20c6e15fd5b242169465349a29ee0ec2399e62643039fe5dda46404a5",
                        "timestamp": "2022-04-13 13:58:57"
                    },
                    {
                        "value": "331594023f5e6ddef910b26f9895ca014db26df6e87d60c65a7ecfb0576867d2",
                        "timestamp": "2022-04-12 11:57:02"
                    },
                    {
                        "value": "6cf97570d317b42ef8bfd4ee4df21d217d5f27b73ff236049d70c37c5337909f",
                        "timestamp": "2022-04-07 14:51:27"
                    },
                    {
                        "value": "9d8dc9e1ef8194163ad1488c6f630d49868acca608929cf85c3d080fb3fde844",
                        "timestamp": "2021-12-14 09:43:02"
                    },
                    {
                        "value": "b85d912cdb8a4d222ec9aff890bd2d531e7587dfe5de1029db6eb99effb2c1c1",
                        "timestamp": "2021-12-14 09:43:00"
                    },
                    {
                        "value": "3361ac8727aba86ac7f3aac3a214c3cb76f1af9ff7ee5e94c52c30fdcb7d5064",
                        "timestamp": "2021-12-14 09:42:57"
                    },
                    {
                        "value": "28b21f38813becbebb681e4968a382dd77cff2849e55df091ede3f38d8e8f691",
                        "timestamp": "2021-12-14 09:42:55"
                    },
                    {
                        "value": "f8fadfcb3db52ec51916f3dd6c17ed28cb65e7d3836bb098b22182fd9a02d194",
                        "timestamp": "2021-11-22 15:23:30"
                    },
                    {
                        "value": "8c7e6a620f4bbc343c2695c2e034cc628062b5c2a6b05461fc41b05436f45147",
                        "timestamp": "2021-10-25 15:22:58"
                    },
                    {
                        "value": "c57a1c9570ff6ceff0a08770a142c348b5b3e5b2c03417c03c0fbffb7707069f",
                        "timestamp": "2021-10-25 15:22:58"
                    },
                    {
                        "value": "9ae5b2762e43566a26d39530831229138a3de4407243a22bf1caca6ddc8c5ec1",
                        "timestamp": "2021-10-25 15:22:57"
                    },
                    {
                        "value": "4850fd4d357e5351c8262d82a388985b2b2b981b101052eb731d5b5d26bf8a98",
                        "timestamp": "2021-10-25 15:22:57"
                    },
                    {
                        "value": "0570fd54d98349e62675cf1e53aa2197ed6c0df811350bfae9f64196b0a49278",
                        "timestamp": "2021-10-25 14:46:22"
                    },
                    {
                        "value": "ae795e7d999ef0276dc6887f909ab9ff32f0a32b4bbdbe15cae4a1e666f239bc",
                        "timestamp": "2021-10-07 16:07:01"
                    },
                    {
                        "value": "e05cb8c1e2a88c8132b25842ceffb198f8a3652fc8461f61af51eaa80c252466",
                        "timestamp": "2021-09-09 04:36:22"
                    },
                    {
                        "value": "3572695ef04fd4b3c6ed084989554a980fe7bbb425d7074dd21a3430fc83533c",
                        "timestamp": "2021-09-09 04:36:22"
                    },
                    {
                        "value": "97ff468754bb8c2cbcf6c1a9de775668b8025659c414f676e2069e19a532fa8e",
                        "timestamp": "2021-09-09 04:36:21"
                    },
                    {
                        "value": "8e877311c6c1dcc85079547eaea968cb6abe07dc4fb752419dcc3fef65e1cb97",
                        "timestamp": "2021-09-09 04:36:21"
                    },
                    {
                        "value": "0191114a1ad51d073bd2084d21f70d71f2ae748a790455c4a708915ad7533d2d",
                        "timestamp": "2021-09-10 17:09:06"
                    },
                    {
                        "value": "6700cc014e9ef5473a909a0c10d644661ccd0750ca942abd458cec91e32bf551",
                        "timestamp": "2021-08-29 15:24:36"
                    },
                    {
                        "value": "e3c3a17fc42ea3ee8eeddde053bdeed92daea8dd8ff7837295c2ec9e784d5a73",
                        "timestamp": "2021-08-16 12:04:03"
                    },
                    {
                        "value": "3cb61352d223e3cef687aa1530ec01ba1d915c0af2ba11440748bdd9d5e0f552",
                        "timestamp": "2021-08-16 12:04:03"
                    },
                    {
                        "value": "97c5706638a6f76b54d1960098063dc1e32d847695ec642ce0eafa4f2d9e99ef",
                        "timestamp": "2021-08-16 12:04:02"
                    },
                    {
                        "value": "b81b8e100611dbcec282117135f47c781087bd95a01dc5496cac6be334a8b0cc",
                        "timestamp": "2021-08-16 12:04:02"
                    },
                    {
                        "value": "68ab9c658f136782ec8e341d0ad8257989689882cfc03db4cdf719b3a68c8e85",
                        "timestamp": "2021-08-16 12:04:02"
                    },
                    {
                        "value": "af1b052362469a67fcd871558b24efa2be44a4b29f88112e5c2d2295a1dc4252",
                        "timestamp": "2021-08-16 12:04:02"
                    },
                    {
                        "value": "41e8bce42bc1a7aaa24f3747015454c9a9886deff8474b9f055176fd0ce299a9",
                        "timestamp": "2021-08-16 12:04:02"
                    },
                    {
                        "value": "419083ad47b6c0767556f4e89f30f5fe8476ea0286bf4b3301625cee4cdda324",
                        "timestamp": "2021-08-16 12:04:01"
                    },
                    {
                        "value": "a4c7d46ab94add85adc74f9686c7367fd82eaae508b3e2227db8e62930fb3da0",
                        "timestamp": "2021-07-29 23:44:33"
                    },
                    {
                        "value": "4eef8b6a5bcd808cd0ab0e33efcea2c2f9a36abe556e56556de8550383c9d3ce",
                        "timestamp": "2021-07-08 18:26:44"
                    },
                    {
                        "value": "0b78f55cdace8aa698075a88b5ee6276e3d237a82a40aa270b09430b5b819918",
                        "timestamp": "2021-07-08 18:26:44"
                    },
                    {
                        "value": "8fadf0ef51d3da5b76453a02a50dc5323f6f2397b32cbc0a69eb7ab77d9a5c8a",
                        "timestamp": "2021-07-07 15:00:01"
                    },
                    {
                        "value": "eb6e2519aa5c31174a1ed6c0193b2d0e49e9ed6ca1ac01ed94b3007b5e2f6993",
                        "timestamp": "2021-07-07 14:55:35"
                    },
                    {
                        "value": "3a029207d13c766ca53af708ac882ae45f504bb6e1ddd30b5ca745479d3c213b",
                        "timestamp": "2021-03-16 08:03:12"
                    },
                    {
                        "value": "a9a0db068a2ed9c7b9b3cdbe7f3c1c82a6f9d2c1c7d4b820820927da004b6cbf",
                        "timestamp": "2021-03-16 08:03:12"
                    },
                    {
                        "value": "e253396b940c5073bed19d7875cab032dfb0206f9b405bda0feb2bd40a38214a",
                        "timestamp": "2021-03-16 08:03:11"
                    },
                    {
                        "value": "a7cd55f6093c453408f7e3bb38459ef17f86aefb1bc642e72db2f6d11c355053",
                        "timestamp": "2021-03-16 08:03:11"
                    },
                    {
                        "value": "f71d3ac993ef4141a41823255510bbc7238989b7421d15fc1d8b1c9a3cd5f641",
                        "timestamp": "2021-03-16 04:45:09"
                    },
                    {
                        "value": "5f8e06218f6886179e5e038f7365c7dbb5638a19e39e229289e67231c2eab263",
                        "timestamp": "2021-03-12 12:10:47"
                    },
                    {
                        "value": "05b171c08c4e64655105a0174a81ee5676303d0c36e7005e0e3689cce7601d74",
                        "timestamp": "2021-03-12 12:10:47"
                    },
                    {
                        "value": "96b62010975e4d38103f9fdb6fea0ecaec996c9093198803f70503e8c65eb854",
                        "timestamp": "2021-03-12 12:10:47"
                    },
                    {
                        "value": "d2a65f13aab419474ecd6517c7439d9e5d70808cbdbe8785080a3084759bc0f2",
                        "timestamp": "2021-03-12 12:10:47"
                    },
                    {
                        "value": "6f6bff5795d6e32656ae0a254d3c4052181e04390fe6d1740d9c85392a5d280a",
                        "timestamp": "2021-03-12 11:32:25"
                    },
                    {
                        "value": "53aeb4ec6610971b46cd3f32b16c2d558919066e035a4b6c49514bb450c58513",
                        "timestamp": "2021-03-12 11:32:25"
                    },
                    {
                        "value": "4f1e953fa6ccb73e91fa6d21fa60c636324c0eb2204fad7f7d9858fc47653d02",
                        "timestamp": "2021-03-12 11:32:25"
                    },
                    {
                        "value": "6d626748d644400b78ae6d92865a51dd7d6746c4febb8aa2eff6605bbb2a6b78",
                        "timestamp": "2021-03-12 11:32:25"
                    },
                    {
                        "value": "c738d81cf3323d67d0e8bcca4df251c4f10a446d3f326e59adc29ed97d2c20b8",
                        "timestamp": "2021-03-12 10:33:28"
                    },
                    {
                        "value": "5398d074d2fb1cb69c38f25788b4c7960f0cdaa4ecf1d1091148af55ca3563a0",
                        "timestamp": "2021-03-12 10:33:28"
                    },
                    {
                        "value": "7026231ec5d4329d08e6f42057d710c078012d5610c9094d240387ec3a5195cf",
                        "timestamp": "2021-03-12 10:33:28"
                    },
                    {
                        "value": "0700fa851908bcd508385b8a6d90ff529ad91183256b18352812013d282ceb80",
                        "timestamp": "2021-03-12 10:33:28"
                    },
                    {
                        "value": "378f404274049990ae84612d42307b2bcfb27862357a28e4c707e33667516c46",
                        "timestamp": "2021-03-11 19:37:13"
                    },
                    {
                        "value": "5833c87bcb55898337f74a84402e525cab70a611276e3e2faa9e880ff4059ba3",
                        "timestamp": "2021-03-11 19:37:13"
                    },
                    {
                        "value": "333e994a6cbe411652d352c2b2142503c109e632ea4aa6a1d1a16ec357f4aed5",
                        "timestamp": "2021-03-11 14:46:27"
                    },
                    {
                        "value": "04d75e686658cbe11e91816d11fa7d45ba3818df296f249a7e103bf22a839637",
                        "timestamp": "2021-03-11 14:46:27"
                    },
                    {
                        "value": "b1183528945843a5130e12abed54b911ac663444f5fbba0e3b8105a1f53c27c2",
                        "timestamp": "2021-03-11 14:46:27"
                    },
                    {
                        "value": "263be47f602b2156c9282afdd6a0f1fe9bb9022cef2eb0a821e8d8153d3a8d06",
                        "timestamp": "2021-03-11 14:46:27"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "1DBA6023C933A8D7A9A6623C158BC4B7",
                        "timestamp": "2023-01-11 14:25:02"
                    },
                    {
                        "value": "4BFAAA69905094E5802890B24E7FB68B",
                        "timestamp": "2022-12-21 11:29:11"
                    },
                    {
                        "value": "198E7087E1DE8084F07A330EED60B644",
                        "timestamp": "2022-12-06 15:45:23"
                    },
                    {
                        "value": "3db94cf953886aeb630f1ae616a2ec25",
                        "timestamp": "2022-11-30 15:47:26"
                    },
                    {
                        "value": "d3032968085db665381d9cbd3569f330",
                        "timestamp": "2022-10-06 13:52:29"
                    },
                    {
                        "value": "39e211582339251cc9769e6b84bed9e4",
                        "timestamp": "2022-09-20 12:03:24"
                    },
                    {
                        "value": "438778440a0141d8e5d5a203afc6a737",
                        "timestamp": "2022-08-04 07:49:15"
                    },
                    {
                        "value": "b3c1a7962088e01bd31898ddf066cc5b",
                        "timestamp": "2022-06-13 11:17:45"
                    },
                    {
                        "value": "9254bcde5cd104ec4ed03abc069c17bb",
                        "timestamp": "2022-05-31 07:52:35"
                    },
                    {
                        "value": "dda8705c963cad14435f44dd2c5c1f69",
                        "timestamp": "2022-05-25 08:43:25"
                    },
                    {
                        "value": "6bbcc8a832ec6f17c283cee3e1095270",
                        "timestamp": "2022-05-17 13:06:07"
                    },
                    {
                        "value": "bda0c23f9cd91512429cb679d411966e",
                        "timestamp": "2022-05-04 10:31:27"
                    },
                    {
                        "value": "f174e9cf33397d9f7f58daf082315fe1",
                        "timestamp": "2022-04-28 12:40:36"
                    },
                    {
                        "value": "f8f0ff134975093b25fa7d1c7f3eec04",
                        "timestamp": "2022-04-27 21:17:04"
                    },
                    {
                        "value": "a60e301af2bf9c738d59bfa4182d37f9",
                        "timestamp": "2022-04-11 10:36:41"
                    },
                    {
                        "value": "56af6074a589ed0fd684f0fd097887d4",
                        "timestamp": "2022-03-28 15:12:48"
                    },
                    {
                        "value": "36125e116418e73ba7dab25fe0d30f1a",
                        "timestamp": "2022-03-28 10:36:35"
                    },
                    {
                        "value": "FB3DDA09EE71E005C9661701B7212FBA",
                        "timestamp": "2022-02-28 17:43:36"
                    },
                    {
                        "value": "bb5f2b798381cddc1217970139ebf534",
                        "timestamp": "2021-12-14 09:50:34"
                    },
                    {
                        "value": "82942b9cca076ae8292d44f49f7a68d9",
                        "timestamp": "2021-11-22 10:37:47"
                    },
                    {
                        "value": "a8ca4b1a0ab594b286145586e6b4921c",
                        "timestamp": "2021-10-26 13:08:56"
                    },
                    {
                        "value": "2172d539dfc31f78f87363c9837fc788",
                        "timestamp": "2021-10-25 14:45:34"
                    },
                    {
                        "value": "B659E82C06F1D4F6AB57DC310BDCFF28",
                        "timestamp": "2021-10-21 01:08:00"
                    },
                    {
                        "value": "13D7F1FC3C514D740754A56817CDFC87",
                        "timestamp": "2021-10-21 01:08:00"
                    },
                    {
                        "value": "32E83A1A8C2FB8DC673CA5281D7A7C6A",
                        "timestamp": "2021-10-21 01:08:00"
                    },
                    {
                        "value": "cd6170fcdcefc9cb6e24a99f6e3dd2ac",
                        "timestamp": "2021-10-18 10:54:58"
                    },
                    {
                        "value": "f64066fff51a9027fdcc09cc945348f1",
                        "timestamp": "2021-10-18 11:17:05"
                    },
                    {
                        "value": "9a024750ca83441f6a1eb0357207f832",
                        "timestamp": "2021-09-20 17:52:54"
                    },
                    {
                        "value": "79832148a283baaf88d8270158cdddde",
                        "timestamp": "2021-09-22 11:44:24"
                    },
                    {
                        "value": "170e2bfb117a17197835f149f981d98c",
                        "timestamp": "2021-09-16 10:18:08"
                    },
                    {
                        "value": "dc8c09dcce354cf148b724e4b5210cc4",
                        "timestamp": "2021-09-10 17:09:50"
                    },
                    {
                        "value": "389a4daa2839b884858a97bc907a7a5e",
                        "timestamp": "2021-09-30 15:53:35"
                    },
                    {
                        "value": "a17de50fcd71c572f423c943f926c2a9",
                        "timestamp": "2021-09-04 15:36:27"
                    },
                    {
                        "value": "5f25557c3a67cc816c456e44f9a89bbe",
                        "timestamp": "2021-08-23 10:27:40"
                    },
                    {
                        "value": "c27e15e92fc6401b37346e1356b358d6",
                        "timestamp": "2021-08-14 07:56:00"
                    },
                    {
                        "value": "1bd9f81020febf162aab0a71ca339da7",
                        "timestamp": "2021-07-28 08:30:12"
                    },
                    {
                        "value": "f3be390b01c85970deeae124ca36ce2d",
                        "timestamp": "2021-07-08 18:25:35"
                    },
                    {
                        "value": "7938f09ac6d8eac7759df4a508e3a214",
                        "timestamp": "2021-07-08 18:25:35"
                    },
                    {
                        "value": "3a3fb9591718e3bc405e6d8d21fb96dd",
                        "timestamp": "2021-07-07 14:59:37"
                    },
                    {
                        "value": "5522c21a05daf91658951bdf1c0e5271",
                        "timestamp": "2021-07-07 14:56:21"
                    },
                    {
                        "value": "8552e8721e0b222abd564304603f0266",
                        "timestamp": "2021-03-16 10:08:50"
                    },
                    {
                        "value": "ade30d11d454af76797f4aaa943ebf3e",
                        "timestamp": "2021-03-10 06:47:54"
                    }
                ],
                "sha1_hash": [
                    {
                        "value": "93114ecf1b2c711ec10e1fafdc834393efc11a97",
                        "timestamp": "2021-07-08 18:26:11"
                    },
                    {
                        "value": "ea955a964a42e373a6be6c50520dc750886ea695",
                        "timestamp": "2021-07-08 18:26:11"
                    },
                    {
                        "value": "72b3004d9bd12294ace027d793a154a5665104d9",
                        "timestamp": "2021-07-07 15:00:21"
                    },
                    {
                        "value": "fed4a9b4069cd2676928441ecf8c844cc7f4a9ee",
                        "timestamp": "2021-07-07 14:56:54"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-07-18 16:45:33",
    "mitre": [],
    "file_name": "gozi",
    "analysis": null
};