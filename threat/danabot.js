var threatdata = {
    "name": "DanaBot",
    "alias": "DanaBot",
    "category": "Malware",
    "type": "Banking trojan, Keylogger, Credential stealer, Info stealer",
    "modified": "2023-07-17",
    "all_data": {
        "tool": "DanaBot",
        "names": [
            {
                "name": "DanaBot"
            }
        ],
        "description": "(Fortinet) It is a modular banking Trojan that has been historically linked to combining operations with other malware operators, such as those behind {{Gootkit}}. Other modules associated with DanaBot include remote desktop through VNC, information stealing, and keylogging. While it appears that this recent attack may be looking to establish a foothold in the network, the reasons behind this are currently unknown.",
        "category": "Malware",
        "type": [
            "Banking trojan",
            "Keylogger",
            "Credential stealer",
            "Info stealer"
        ],
        "information": [
            "https://www.fortinet.com/blog/threat-research/breakdown-of-a-targeted-danabot-attack.html",
            "https://0ffset.wordpress.com/2018/06/05/post-0x08-analyzing-danabot-downloader/",
            "https://www.proofpoint.com/us/threat-insight/post/danabot-gains-popularity-and-targets-us-organizations-large-campaigns",
            "https://asert.arbornetworks.com/danabots-travels-a-global-perspective/",
            "https://www.welivesecurity.com/2018/09/21/danabot-targeting-europe-adds-new-features/",
            "https://www.proofpoint.com/us/threat-insight/post/danabot-new-banking-trojan-surfaces-down-under-0",
            "https://www.proofpoint.com/us/threat-insight/post/danabot-control-panel-revealed",
            "https://www.trustwave.com/Resources/SpiderLabs-Blog/DanaBot-Riding-Fake-MYOB-Invoice-Emails/",
            "https://www.welivesecurity.com/2018/12/06/danabot-evolves-beyond-banking-trojan-new-spam/",
            "https://www.welivesecurity.com/2019/02/07/danabot-updated-new-cc-communication/",
            "https://blog.yoroi.company/research/dissecting-the-danabot-paylaod-targeting-italy/",
            "https://www.proofpoint.com/us/blog/threat-insight/new-year-new-version-danabot"
        ],
        "malpedia": [
            "https://malpedia.caad.fkie.fraunhofer.de/details/win.danabot"
        ],
        "alienvault-otx": [
            "https://otx.alienvault.com/browse/pulses?q=tag:DanaBot"
        ],
        "uuid": "1e2a3277-3948-4f60-8a32-e9b9757f9330",
        "last-card-change": "2021-04-19",
        "source": "https://apt.etda.or.th/cgi-bin/listtools.cgi"
    },
    "ioc_data": [
        {
            "malware_printable": "DanaBot",
            "malware_alias": null,
            "malware": "win.danabot",
            "last_update": "2023-11-16 04:15:08",
            "tags": [
                "Danabot",
                "danabot",
                "DanaBot",
                "ViaPrivateLoader",
                "c2",
                "2718",
                "dropped-by-smokeloader"
            ],
            "ioc": {
                "ip:port": [
                    {
                        "value": "142.11.242.31:443",
                        "timestamp": "2023-11-16 04:15:08"
                    },
                    {
                        "value": "173.214.169.17:443",
                        "timestamp": "2023-10-03 16:04:47"
                    },
                    {
                        "value": "195.123.224.82:443",
                        "timestamp": "2023-10-03 16:04:47"
                    },
                    {
                        "value": "213.252.245.80:443",
                        "timestamp": "2023-06-04 11:00:12"
                    },
                    {
                        "value": "23.254.227.74:443",
                        "timestamp": "2023-06-04 06:15:11"
                    },
                    {
                        "value": "23.254.144.209:443",
                        "timestamp": "2023-06-03 20:10:05"
                    },
                    {
                        "value": "188.191.106.71:443",
                        "timestamp": "2023-03-22 13:09:03"
                    },
                    {
                        "value": "104.234.11.33:443",
                        "timestamp": "2023-03-22 13:09:03"
                    },
                    {
                        "value": "23.254.226.136:443",
                        "timestamp": "2023-03-22 13:09:02"
                    },
                    {
                        "value": "104.234.147.45:443",
                        "timestamp": "2023-03-22 13:09:02"
                    },
                    {
                        "value": "192.236.146.203:443",
                        "timestamp": "2023-03-04 22:15:19"
                    },
                    {
                        "value": "35.199.103.5:443",
                        "timestamp": "2023-02-03 23:20:39"
                    },
                    {
                        "value": "34.247.234.201:443",
                        "timestamp": "2023-01-12 07:22:20"
                    },
                    {
                        "value": "34.90.104.246:443",
                        "timestamp": "2023-01-12 07:22:20"
                    },
                    {
                        "value": "35.194.193.144:443",
                        "timestamp": "2023-01-12 07:22:20"
                    },
                    {
                        "value": "34.105.203.100:443",
                        "timestamp": "2023-01-05 16:41:35"
                    },
                    {
                        "value": "35.236.67.31:443",
                        "timestamp": "2023-01-05 16:41:35"
                    },
                    {
                        "value": "35.199.99.16:443",
                        "timestamp": "2023-01-05 16:41:34"
                    },
                    {
                        "value": "35.220.142.90:443",
                        "timestamp": "2023-01-05 16:41:34"
                    },
                    {
                        "value": "192.236.146.39:443",
                        "timestamp": "2022-12-30 16:00:28"
                    },
                    {
                        "value": "35.228.162.70:443",
                        "timestamp": "2022-12-27 17:20:19"
                    },
                    {
                        "value": "34.95.4.102:443",
                        "timestamp": "2022-12-27 17:15:18"
                    },
                    {
                        "value": "35.220.149.58:443",
                        "timestamp": "2022-12-27 17:10:16"
                    },
                    {
                        "value": "192.236.192.241:443",
                        "timestamp": "2022-11-26 04:20:20"
                    },
                    {
                        "value": "54.250.13.251:443",
                        "timestamp": "2022-11-12 09:00:37"
                    },
                    {
                        "value": "185.243.114.28:443",
                        "timestamp": "2022-10-29 13:40:09"
                    },
                    {
                        "value": "167.114.188.38:443",
                        "timestamp": "2022-10-04 05:09:10"
                    },
                    {
                        "value": "185.112.83.26:443",
                        "timestamp": "2022-07-29 21:31:08"
                    },
                    {
                        "value": "192.3.26.107:443",
                        "timestamp": "2022-07-16 17:40:31"
                    },
                    {
                        "value": "66.85.185.120:443",
                        "timestamp": "2022-07-04 20:15:31"
                    },
                    {
                        "value": "192.161.48.5:443",
                        "timestamp": "2022-06-26 17:51:22"
                    },
                    {
                        "value": "192.3.26.98:443",
                        "timestamp": "2022-06-26 17:51:13"
                    },
                    {
                        "value": "45.147.228.212:443",
                        "timestamp": "2022-06-25 18:39:15"
                    },
                    {
                        "value": "134.119.186.199:443",
                        "timestamp": "2022-06-25 17:17:19"
                    },
                    {
                        "value": "192.236.192.238:443",
                        "timestamp": "2022-06-25 15:47:04"
                    },
                    {
                        "value": "37.120.222.107:443",
                        "timestamp": "2022-06-23 18:18:47"
                    },
                    {
                        "value": "142.11.206.50:443",
                        "timestamp": "2022-06-18 00:27:59"
                    },
                    {
                        "value": "185.62.58.191:443",
                        "timestamp": "2022-05-16 22:22:09"
                    },
                    {
                        "value": "192.236.199.175:443",
                        "timestamp": "2022-05-16 22:22:09"
                    },
                    {
                        "value": "125.67.68.19:54068",
                        "timestamp": "2022-05-16 22:22:08"
                    },
                    {
                        "value": "164.109.193.8:54068",
                        "timestamp": "2022-05-16 22:22:08"
                    },
                    {
                        "value": "172.93.201.242:443",
                        "timestamp": "2022-05-16 22:22:08"
                    },
                    {
                        "value": "117.83.162.13:54068",
                        "timestamp": "2022-05-16 22:22:07"
                    },
                    {
                        "value": "195.123.220.45:443",
                        "timestamp": "2022-05-16 22:17:36"
                    },
                    {
                        "value": "195.123.246.209:443",
                        "timestamp": "2022-05-16 22:17:36"
                    },
                    {
                        "value": "215.212.21.6:443",
                        "timestamp": "2022-05-16 22:17:36"
                    },
                    {
                        "value": "233.175.187.96:443",
                        "timestamp": "2022-05-16 22:17:36"
                    },
                    {
                        "value": "237.250.131.153:443",
                        "timestamp": "2022-05-16 22:17:36"
                    },
                    {
                        "value": "142.167.76.43:443",
                        "timestamp": "2022-05-16 22:17:35"
                    },
                    {
                        "value": "149.255.35.125:443",
                        "timestamp": "2022-05-16 22:17:35"
                    },
                    {
                        "value": "155.120.247.148:443",
                        "timestamp": "2022-05-16 22:17:35"
                    },
                    {
                        "value": "157.64.238.1:443",
                        "timestamp": "2022-05-16 22:17:35"
                    },
                    {
                        "value": "178.209.51.211:443",
                        "timestamp": "2022-05-16 22:17:35"
                    },
                    {
                        "value": "179.43.133.35:443",
                        "timestamp": "2022-05-16 22:17:35"
                    },
                    {
                        "value": "84.19.37.39:443",
                        "timestamp": "2022-05-16 22:17:34"
                    },
                    {
                        "value": "84.141.50.190:443",
                        "timestamp": "2022-05-16 22:17:34"
                    },
                    {
                        "value": "89.44.9.132:443",
                        "timestamp": "2022-05-16 22:17:34"
                    },
                    {
                        "value": "89.45.4.126:443",
                        "timestamp": "2022-05-16 22:17:34"
                    },
                    {
                        "value": "89.144.25.104:443",
                        "timestamp": "2022-05-16 22:17:34"
                    },
                    {
                        "value": "106.137.226.19:443",
                        "timestamp": "2022-05-16 22:17:34"
                    },
                    {
                        "value": "51.178.195.151:443",
                        "timestamp": "2022-05-16 22:17:33"
                    },
                    {
                        "value": "51.222.39.81:443",
                        "timestamp": "2022-05-16 22:17:33"
                    },
                    {
                        "value": "59.37.192.38:443",
                        "timestamp": "2022-05-16 22:17:33"
                    },
                    {
                        "value": "64.188.23.70:443",
                        "timestamp": "2022-05-16 22:17:33"
                    },
                    {
                        "value": "67.248.84.113:443",
                        "timestamp": "2022-05-16 22:17:33"
                    },
                    {
                        "value": "68.158.26.25:443",
                        "timestamp": "2022-05-16 22:17:33"
                    },
                    {
                        "value": "75.56.111.148:443",
                        "timestamp": "2022-05-16 22:17:33"
                    },
                    {
                        "value": "38.68.50.179:443",
                        "timestamp": "2022-05-16 22:17:32"
                    },
                    {
                        "value": "44.202.197.21:443",
                        "timestamp": "2022-05-16 22:17:32"
                    },
                    {
                        "value": "45.147.231.218:443",
                        "timestamp": "2022-05-16 22:17:32"
                    },
                    {
                        "value": "51.77.7.204:443",
                        "timestamp": "2022-05-16 22:17:32"
                    },
                    {
                        "value": "192.236.147.212:443",
                        "timestamp": "2023-07-31 21:02:53"
                    },
                    {
                        "value": "192.236.160.249:443",
                        "timestamp": "2022-04-25 07:36:02"
                    },
                    {
                        "value": "192.236.176.108:443",
                        "timestamp": "2022-04-19 07:36:20"
                    },
                    {
                        "value": "23.254.228.176:443",
                        "timestamp": "2022-04-18 11:41:15"
                    },
                    {
                        "value": "23.254.129.180:443",
                        "timestamp": "2022-04-15 23:10:54"
                    },
                    {
                        "value": "192.236.160.244:443",
                        "timestamp": "2022-04-15 07:56:13"
                    },
                    {
                        "value": "104.168.148.6:443",
                        "timestamp": "2022-04-13 20:01:49"
                    },
                    {
                        "value": "192.236.161.79:443",
                        "timestamp": "2022-04-12 17:46:11"
                    },
                    {
                        "value": "104.168.167.51:443",
                        "timestamp": "2022-04-04 05:11:08"
                    },
                    {
                        "value": "86.105.252.18:443",
                        "timestamp": "2022-03-31 15:41:55"
                    },
                    {
                        "value": "134.119.186.198:443",
                        "timestamp": "2022-03-31 10:41:50"
                    },
                    {
                        "value": "23.254.133.7:443",
                        "timestamp": "2022-03-27 23:20:48"
                    },
                    {
                        "value": "23.254.217.192:443",
                        "timestamp": "2022-03-26 17:05:59"
                    },
                    {
                        "value": "23.254.134.53:443",
                        "timestamp": "2022-03-22 19:27:18"
                    },
                    {
                        "value": "192.236.146.173:443",
                        "timestamp": "2022-03-22 17:02:23"
                    },
                    {
                        "value": "192.119.110.73:443",
                        "timestamp": "2022-03-14 17:36:35"
                    },
                    {
                        "value": "185.62.58.85:443",
                        "timestamp": "2022-03-13 14:15:28"
                    },
                    {
                        "value": "103.144.139.105:443",
                        "timestamp": "2022-03-11 21:36:25"
                    },
                    {
                        "value": "23.254.164.106:443",
                        "timestamp": "2022-03-09 12:26:45"
                    },
                    {
                        "value": "23.254.201.147:443",
                        "timestamp": "2022-03-06 20:35:30"
                    },
                    {
                        "value": "192.236.236.83:443",
                        "timestamp": "2022-07-04 12:17:09"
                    },
                    {
                        "value": "192.236.161.4:443",
                        "timestamp": "2022-03-06 18:55:16"
                    },
                    {
                        "value": "45.147.231.150:443",
                        "timestamp": "2022-03-04 22:35:59"
                    },
                    {
                        "value": "23.106.123.249:443",
                        "timestamp": "2022-03-04 11:00:54"
                    },
                    {
                        "value": "23.106.122.14:443",
                        "timestamp": "2022-02-24 05:53:06"
                    },
                    {
                        "value": "5.9.224.217:443",
                        "timestamp": "2022-02-22 22:41:25"
                    },
                    {
                        "value": "142.11.244.223:443",
                        "timestamp": "2022-01-14 01:45:56"
                    },
                    {
                        "value": "192.236.194.72:443",
                        "timestamp": "2022-01-14 01:45:56"
                    },
                    {
                        "value": "192.119.110.4:443",
                        "timestamp": "2022-01-14 01:45:56"
                    },
                    {
                        "value": "34.129.5.173:443",
                        "timestamp": "2021-08-13 19:01:50"
                    },
                    {
                        "value": "35.226.27.224:443",
                        "timestamp": "2021-08-13 19:01:50"
                    },
                    {
                        "value": "178.62.118.134:443",
                        "timestamp": "2021-08-13 19:01:50"
                    },
                    {
                        "value": "184.95.51.175:443",
                        "timestamp": "2021-05-05 22:02:54"
                    },
                    {
                        "value": "184.95.51.183:443",
                        "timestamp": "2021-05-05 22:02:53"
                    },
                    {
                        "value": "37.220.31.94:443",
                        "timestamp": "2021-05-05 22:02:53"
                    },
                    {
                        "value": "192.210.198.12:443",
                        "timestamp": "2021-05-05 22:02:53"
                    }
                ],
                "domain": [
                    {
                        "value": "lugbara.top",
                        "timestamp": "2023-07-21 08:48:19"
                    },
                    {
                        "value": "naagara.top",
                        "timestamp": "2023-01-12 13:11:32"
                    },
                    {
                        "value": "koumbasara.top",
                        "timestamp": "2023-01-05 16:39:34"
                    }
                ],
                "md5_hash": [
                    {
                        "value": "5c6352790c02dc6c8de1cdf48a1d9759",
                        "timestamp": "2022-12-17 13:02:07"
                    },
                    {
                        "value": "50795361db9455af2f85372f3cfe0a47",
                        "timestamp": "2022-12-17 12:02:01"
                    },
                    {
                        "value": "2141c84aab4a7591fb50e4fd24a9c2a7",
                        "timestamp": "2022-12-17 06:45:09"
                    },
                    {
                        "value": "c00d207efb855910154389b48404e550",
                        "timestamp": "2021-08-12 22:47:32"
                    },
                    {
                        "value": "e2dd6e94fcc2851d7e2258c8abe1faf5",
                        "timestamp": "2021-08-12 22:47:31"
                    },
                    {
                        "value": "aeeef159543b28995b1f742085a2c6a0",
                        "timestamp": "2021-08-12 22:47:31"
                    }
                ],
                "sha256_hash": [
                    {
                        "value": "5a7dacab8291e7072a10b63744fd3a7eb3a9f8459408b9f0ba13e0f32b1e50ac",
                        "timestamp": "2022-01-12 23:26:03"
                    },
                    {
                        "value": "9b106bace5dbeb4ff2e124b8670847e237d67b81c2b8be3a55972f6cd116b95c",
                        "timestamp": "2022-01-12 23:26:02"
                    },
                    {
                        "value": "a943fafc17a66bdc7cf8463f5b3ccf75b13d5808c8a2375cc89ce4f6d5637f42",
                        "timestamp": "2022-01-12 23:26:00"
                    },
                    {
                        "value": "c28a554c3f79232a83b0938eab014a442f9704a8d9211641da40caa73b48ab60",
                        "timestamp": "2022-01-12 23:25:59"
                    },
                    {
                        "value": "ed49acda24ea6cf3e5ab5efd2c16ea2e7d515eba0d158fcd393ddc2bcf17bc30",
                        "timestamp": "2022-01-12 23:25:57"
                    },
                    {
                        "value": "f81209f58798a17fa0b3e531ea75acd1d55a9722faa5c6603fbc6e3cae16d3ae",
                        "timestamp": "2022-01-09 09:30:36"
                    },
                    {
                        "value": "2d0bd38ea59864cdcd710759abea3f670449eb4505b54c8a8d22128691deefc1",
                        "timestamp": "2022-01-09 09:30:35"
                    },
                    {
                        "value": "30d7878bec4cdb7fbd81b0909dac326e283bdfd29f19eaf3c368fd110d18275f",
                        "timestamp": "2022-01-09 09:30:34"
                    },
                    {
                        "value": "2a009cecbb0b5f61ac6956e12a8ffd880a5c6c5fcce207d48a39dec829daff6d",
                        "timestamp": "2022-01-09 09:30:33"
                    },
                    {
                        "value": "b1f25b5696c2905f50e3d21d3b61b0c6cc019ec5ae6fb45bced9863803e47d71",
                        "timestamp": "2022-01-09 08:45:40"
                    },
                    {
                        "value": "49a27bdf654664d7129347c56f56029026623971624ab03978d24ca974497f20",
                        "timestamp": "2022-01-09 08:45:38"
                    },
                    {
                        "value": "8e3d5524bf828da4115d823162120b3875ec0c36725f6002910f2018e3e3bfab",
                        "timestamp": "2022-01-09 08:45:36"
                    },
                    {
                        "value": "47c2ec67d40d8e342db29823981ab4539c758486d30d00bd15106acdb39a96cc",
                        "timestamp": "2022-01-09 08:45:35"
                    },
                    {
                        "value": "a51fd4d01935860fd54cf9055d6de32a00f580c4522ea28fb434a519c22e136b",
                        "timestamp": "2022-01-08 16:15:35"
                    },
                    {
                        "value": "79d5a92e6ca45c70a7e6ba9696b7d09192b46a9831f00482d1aeda36d5a00445",
                        "timestamp": "2022-01-08 16:15:33"
                    },
                    {
                        "value": "7d3b2e91c3cfb16df02f63b973c69a2047b8031295a49e4fffa0fad3dba975f0",
                        "timestamp": "2022-01-08 16:15:31"
                    },
                    {
                        "value": "cf10cad3b15bac59bdf48a71791d3affd9f13606e8bcc7311756a1309f866e9a",
                        "timestamp": "2022-01-08 16:15:29"
                    },
                    {
                        "value": "d08e787230a310b04178561c43d3f3845021ea4dd32cb8c97d0b741fe1ca7f2a",
                        "timestamp": "2022-01-06 08:30:35"
                    },
                    {
                        "value": "e4536dcb7bb29d7ea9cb878b95117b4c2e6726569daf0e97e25ba2d66db475d4",
                        "timestamp": "2022-01-06 08:30:34"
                    },
                    {
                        "value": "549703aaf0200c930b110e8e18913a6349a32172d236ae5bef866e7990a07a04",
                        "timestamp": "2022-01-06 08:30:32"
                    },
                    {
                        "value": "e23a34dd54d502d5dc84ac2c7058f286f43d8c8e88d0b2f92dbf4c11bae17674",
                        "timestamp": "2022-01-06 08:30:30"
                    },
                    {
                        "value": "223be915192a813a5605b413bf4e0c3e6a25e2a96e744e151facf653aa079a0a",
                        "timestamp": "2021-12-08 20:33:02"
                    },
                    {
                        "value": "36ae41f4e0a327328126a9f48075594a2e6099a1173c46d8cd16b22a45138d1f",
                        "timestamp": "2021-12-08 20:33:01"
                    },
                    {
                        "value": "abbf2fc7c2934987d33e0a280530ee00acdc28e3e2b13c8bf1a5164f2471132e",
                        "timestamp": "2021-12-08 20:33:01"
                    },
                    {
                        "value": "c4052e4ba0e7702cab707543206211791d8a13854660189214e9782b888ebb47",
                        "timestamp": "2021-12-08 20:33:00"
                    },
                    {
                        "value": "dd0adf97b359d884717ea69b023f6bb72afeee242288df721a5b30d85bf7f567",
                        "timestamp": "2021-12-08 20:32:59"
                    },
                    {
                        "value": "fe473d3279291d547d0eb5afb3a3ea1c4e1638c35c91997c61b5486d812dc698",
                        "timestamp": "2021-12-08 20:32:59"
                    },
                    {
                        "value": "583ac3ce9c73137c8defe7e8f48ce58d114b01323218b97fb7be0eb4b81a02e9",
                        "timestamp": "2021-12-08 20:32:57"
                    },
                    {
                        "value": "bca2cd7717cdb369c9adce03d4117ab2c0a71a6b8d2cb30c7551e4f8d321770a",
                        "timestamp": "2021-12-08 20:32:57"
                    },
                    {
                        "value": "b82c218fa6763ab588fe7345c63c3f3f0f8c3f4be6f1ed86de67454f9dcf6b1a",
                        "timestamp": "2021-12-08 20:32:56"
                    },
                    {
                        "value": "3d8e8bef3f3530d076dd9a7f983f896ef4c29ea6a3407d0b6e7cb5e9a908eae0",
                        "timestamp": "2021-12-08 20:32:56"
                    },
                    {
                        "value": "2669a9625e6d0b7869ccc59173a77d83a11002c93faf5df67bd6c1c5dc8e3514",
                        "timestamp": "2021-12-08 20:32:55"
                    },
                    {
                        "value": "f99f2fbe9c40f027c39e4ff57d444007f2d0d6b040fa4737a8c4569fcdffe91b",
                        "timestamp": "2021-12-08 20:32:54"
                    },
                    {
                        "value": "7805fe3ed51586271c54f625091f394625e087a4157e3ad45e0222786772de8c",
                        "timestamp": "2021-12-08 20:32:53"
                    },
                    {
                        "value": "42439ff1648e0248fd97d89fbcf01a4fcfc5c6fb36588437677657b0e6bc029a",
                        "timestamp": "2021-12-08 20:32:53"
                    },
                    {
                        "value": "b8e77d811f9b99557346abe1df7c6d962e166e60c2099f0852d98fa66b7543de",
                        "timestamp": "2021-12-08 20:32:52"
                    },
                    {
                        "value": "ee53cf56f393658949e4756c48e63e0c02542c1403c87e72d926bfb6b0306809",
                        "timestamp": "2021-12-08 20:32:51"
                    },
                    {
                        "value": "a42ef19f8a27e6bdc9ad661ef619c6a5bc893c76ec50d3251738dfdfe2f9f761",
                        "timestamp": "2021-12-08 20:32:50"
                    },
                    {
                        "value": "d6cf8c771ec2f3edf1e7e45530b1620d383a75651b32c6798311759bbe859f81",
                        "timestamp": "2021-12-08 20:32:50"
                    },
                    {
                        "value": "d7df40b24c77a224bd8bd3b4c0c07d91c32e80433b864c31fe721e81592ef760",
                        "timestamp": "2021-12-08 20:32:49"
                    },
                    {
                        "value": "288af5481ddf9be28fd2ee717f48845e43190bf352b80f1f2f0831fbb27a8996",
                        "timestamp": "2021-12-08 20:32:48"
                    },
                    {
                        "value": "e4034630fff8d1822306f54c49c5b3c655e21872648431b6987aaa41b197bdf2",
                        "timestamp": "2021-12-08 20:32:48"
                    },
                    {
                        "value": "de143fd5ada529566f4d4164267ebfbf7ddd217a8dc9149531fd33cd2a20495a",
                        "timestamp": "2021-12-08 20:32:46"
                    },
                    {
                        "value": "9940217828d518f09fedcbab0afa95e46f7820d24fb72eee2970601784be2149",
                        "timestamp": "2021-12-08 20:32:46"
                    },
                    {
                        "value": "02d1ea2d48d894eda0725cc7a33af3e72a6d3a861b8a94f9ad4281e832ef68bc",
                        "timestamp": "2021-12-08 20:32:45"
                    },
                    {
                        "value": "6d61e8f956d3c79cc9847f709b9f2ba331d7e1558d2d73995566e0e4c8c57005",
                        "timestamp": "2021-12-08 20:32:44"
                    },
                    {
                        "value": "aeee9c17c62edf0b47ec0ca31ee8e47b6c1b71afe32a459b0c3acf036f3bcbf2",
                        "timestamp": "2021-12-08 20:32:43"
                    },
                    {
                        "value": "615aa3a7ee8704e16e93ba731035d4bcc3f4464ecdb44766e814bdd05fff0426",
                        "timestamp": "2021-12-08 20:32:43"
                    },
                    {
                        "value": "0fb45b5d6bf9835ddd444e7b16556b4f2934f57bd052555f41b4a621107e29da",
                        "timestamp": "2021-12-08 20:32:42"
                    },
                    {
                        "value": "c9235e42f21a05c2cb93df44ad11e0b63fbc383213fa3338cf3f98a39ec7e997",
                        "timestamp": "2021-12-08 20:32:41"
                    },
                    {
                        "value": "513c3612bfc6a2cdb9500b26372de3e66e065e3850188001d35ef4886cc7f3ae",
                        "timestamp": "2021-12-08 20:32:40"
                    },
                    {
                        "value": "f70449514e5a2f85e09c781301f6209f94b3e2ed16b0d3e041fcd2aaaca0735b",
                        "timestamp": "2021-12-08 20:32:40"
                    },
                    {
                        "value": "fc4b7a78f65229baedeb6da5bee6e51718ef5d0ccabbf1d4e67013ecf22176cd",
                        "timestamp": "2021-12-08 20:32:39"
                    },
                    {
                        "value": "c995da4307762b8b3cbfb83c4f82438eb20c5c74d5a5fa2937e4184e04183108",
                        "timestamp": "2021-12-08 20:32:38"
                    },
                    {
                        "value": "7ece9dddae81307b8855fb493213e5f5fe08ee9c8884df64275f1ed85c4a2703",
                        "timestamp": "2021-12-08 20:32:37"
                    },
                    {
                        "value": "b7ec80cf5fed648abbe3d451dade1ea209d692728a1983f63bed2399b3bf4eff",
                        "timestamp": "2021-12-08 20:32:36"
                    },
                    {
                        "value": "1861a3c66ead6a287ddc2370c3152e7b5b6afdfe9f79b028e5ae69b8b71d03ad",
                        "timestamp": "2021-12-08 20:32:35"
                    },
                    {
                        "value": "2c1220aa6173ddb03c172c2d57c07b85fbbfc1b513e5af6e40ecdbc0ba13c447",
                        "timestamp": "2021-12-08 20:32:35"
                    },
                    {
                        "value": "e112df756b83e7000c7c1321043356907cae84fceb046dab0bdf560a7c5f6732",
                        "timestamp": "2021-12-08 20:32:34"
                    },
                    {
                        "value": "1dbd116e274afd9e7e9f6973e5c80b60854a77da22bdd3bd5128866240c77550",
                        "timestamp": "2021-12-08 20:32:33"
                    },
                    {
                        "value": "44fd3f83da4c1d24b8040f7160d3193fd8c8a7849aa655630e6b02ff05fa8502",
                        "timestamp": "2021-12-08 20:32:31"
                    },
                    {
                        "value": "cb63d313761e689a4436056872281236f6d4b588408ea2161c2aefe9a7842272",
                        "timestamp": "2021-12-08 20:32:31"
                    },
                    {
                        "value": "d27017e63f3a917ab20fc065433ec21ec78b3a645fcc880dcb42947a316f06ab",
                        "timestamp": "2021-12-08 20:32:30"
                    },
                    {
                        "value": "d7fef407b2173d42c448f4883565ea526f9107eddbfa8d5b04266a33e982d079",
                        "timestamp": "2021-12-08 20:32:30"
                    },
                    {
                        "value": "3ec00cfd5981ca588d33e8ba70f7a0fd69443adac6e5f7814e9537bc091615e9",
                        "timestamp": "2021-12-08 20:32:29"
                    },
                    {
                        "value": "52c5fe457d100eb42684081ad1f00142dfb0a15d5d17176a869c4cbb948bd6f9",
                        "timestamp": "2021-12-08 20:32:28"
                    },
                    {
                        "value": "8b6633f6261ba0c91945520979f2ae55bce8ff89b77e6da3c423f6638a3ff24b",
                        "timestamp": "2021-12-08 20:32:27"
                    },
                    {
                        "value": "a302d914f175a4c85b630a7b7d42aa3734cde38802953771f20cee2edf076d37",
                        "timestamp": "2021-12-08 20:32:27"
                    },
                    {
                        "value": "8d84edeaffaa7665b886e3736791aefd249be5961e117d2b53bf677eb3ce987d",
                        "timestamp": "2021-12-08 20:32:26"
                    },
                    {
                        "value": "2f19ab6eaa3f8e92a6ce296c13a83b52c5bc2850c8fba002255dd5b38057080b",
                        "timestamp": "2021-12-08 20:32:25"
                    },
                    {
                        "value": "53113d6920a503b8839688d52e809f48fd45a606bea0c04b954bfdb6ba8bed11",
                        "timestamp": "2021-11-27 05:26:51"
                    },
                    {
                        "value": "20928b27d844789f413114c6416770d41c4c7e425b423c27d2c79642808a0158",
                        "timestamp": "2021-11-27 05:26:50"
                    },
                    {
                        "value": "4bf0fe359a4fcf45a55ed32c48a8df579beb7a312ceb657151734f09872ff1d3",
                        "timestamp": "2021-11-27 05:26:50"
                    },
                    {
                        "value": "4cd19c176f6f2798836799d9f0dd09969a3e512b57d64b7a1fcf29a2e1991784",
                        "timestamp": "2021-11-27 05:26:49"
                    },
                    {
                        "value": "5b775105ef47e387f6994285246b379c00ac003641998c696cee5457d2625e1c",
                        "timestamp": "2021-11-27 05:26:49"
                    },
                    {
                        "value": "d06075cf26325058f96026a0cf4b2f63a8beb391f1168b0ae7c94901ad5398b2",
                        "timestamp": "2021-11-27 05:26:48"
                    },
                    {
                        "value": "3dd8a0cefed3be35e5863e231a43dcd755002de9f34ccb2f82fa3629632f2c7b",
                        "timestamp": "2021-11-27 05:26:48"
                    },
                    {
                        "value": "6a7c45907ae28030a13cb6beceaaa503eb91092cea27eb6ebc3f7329381d2481",
                        "timestamp": "2021-11-27 05:26:47"
                    },
                    {
                        "value": "24ee8b9c50277bcd18ff63a6d599b5709f4ca7c85bdaf729efd9d2f8ad240c8a",
                        "timestamp": "2021-11-27 05:26:47"
                    },
                    {
                        "value": "13733839ae5450f941d6c72753b7bcf2a392cc6d49b3047615005e87f6219d43",
                        "timestamp": "2021-11-27 05:26:46"
                    },
                    {
                        "value": "18e80719e9b7cc6e5bd1e2fc9ed110d7391102c26bb8fd16bec9e20bc85a4be4",
                        "timestamp": "2021-11-27 05:26:46"
                    },
                    {
                        "value": "2fa8421878e7dcbb1fd31b48ffca1fbc7724096e9e7e2018c26b4203ea224c1a",
                        "timestamp": "2021-11-27 05:26:46"
                    },
                    {
                        "value": "d24039260ce1774f7179bf9ca21d13ce9e7bc62fdd812f7a5c7439773f9cd063",
                        "timestamp": "2021-11-27 05:26:45"
                    },
                    {
                        "value": "cba7928754f8974a8f6bb665d90f15d86bb9e0e8e5efeaac6a0c54981dd98455",
                        "timestamp": "2021-11-27 05:26:45"
                    },
                    {
                        "value": "eda8179363f8f64b2500c9d0e5b2f04d859738f48b82422c33afa00c2b247410",
                        "timestamp": "2021-11-27 05:26:44"
                    },
                    {
                        "value": "09d1b4dbf516df090efba13cfadcfddd5a9454677951baeef54c0102450cb9ee",
                        "timestamp": "2021-11-27 05:26:44"
                    },
                    {
                        "value": "7ca771543f7163e35b7c53f69347063047a7a0fa74c96163c3a4fb91dd6a3260",
                        "timestamp": "2021-11-27 05:26:43"
                    },
                    {
                        "value": "25a699a7f6ef7af54ae81cd596e8242bedfd7c140d4888b5d1db5d88924a0468",
                        "timestamp": "2021-11-27 05:26:43"
                    },
                    {
                        "value": "ff748a8dd9f97df46e649a78ba4e0abab2e958249776b34cd07f2eb24ac1a261",
                        "timestamp": "2021-11-27 05:26:42"
                    },
                    {
                        "value": "601b7ea310266eae4cb135ddc732589d169a93b9cde7a22f57121bb730573168",
                        "timestamp": "2021-11-27 05:26:42"
                    },
                    {
                        "value": "a0e753284c955c0aa1f9674cabb1fdf66f3d9a4e4d9e5f6edc84dbb46902f905",
                        "timestamp": "2021-11-27 05:26:41"
                    },
                    {
                        "value": "73e410272abea7716c4027a237dafda37b7d4dc2b79cf043ed2982237b9cacf3",
                        "timestamp": "2021-11-27 05:26:41"
                    },
                    {
                        "value": "66dcbbafec8fcc8c03b421dfd6cae589fd54476892bf430d0852101eea09359d",
                        "timestamp": "2021-11-27 05:26:40"
                    },
                    {
                        "value": "54a461c180834087909e44b5e18752c56a1c7a71adcb78d044395b3dd8633ee9",
                        "timestamp": "2021-11-27 05:26:40"
                    },
                    {
                        "value": "36ef2b031d9bc0552e72403ea2ec997141e228d2dd081334cacb8fee4e8200ce",
                        "timestamp": "2021-11-27 05:26:39"
                    },
                    {
                        "value": "741ec1356e3656ded487d397843a1b51e32e5cc0fd8642ee32db928141cf45db",
                        "timestamp": "2021-11-27 05:26:39"
                    },
                    {
                        "value": "0e7a37a09dd865d68e98cdbf0211ae888bbccfd2f49f3a2347154005401c0f38",
                        "timestamp": "2021-11-27 05:26:39"
                    },
                    {
                        "value": "fbf615117a08d8081847b4cb8ce7bde919c12eeb7c11a3fc76ebe13476cb6767",
                        "timestamp": "2021-11-27 05:26:38"
                    },
                    {
                        "value": "a8270adf6ab0a5451198b18cf87a4caca24ee434a16111815994d3b5de319ee2",
                        "timestamp": "2021-11-27 05:26:37"
                    },
                    {
                        "value": "e3bb2c88ee879b0c765c965c4c815b3fbb073ff73de7f7c017e5b965e096d817",
                        "timestamp": "2021-11-27 05:26:37"
                    },
                    {
                        "value": "276284657e8d7085aeddf4aa6ab65a509178c796529a9e674ab17d396f6e9ea4",
                        "timestamp": "2021-11-27 05:26:37"
                    },
                    {
                        "value": "62e5e8f9834d5d3bc33231281f77562faef00b6cb2aa93fb85870fdda4cc8186",
                        "timestamp": "2021-11-27 05:26:36"
                    },
                    {
                        "value": "ed4f61f47a45889a76e27fe93dab4b85deadda3b5ad8a624e7ca30b874876e59",
                        "timestamp": "2021-11-27 05:26:36"
                    },
                    {
                        "value": "1272d03a5a4fcd3feb1ec8aaa66dbd2469f63b346d3d23b66135c5d5a9ec80fc",
                        "timestamp": "2021-11-27 05:26:35"
                    },
                    {
                        "value": "655b06168c6290f7f7c4fe5468060ced2b6c08acb529b87f10dcc4c8c688a125",
                        "timestamp": "2021-11-27 05:26:35"
                    },
                    {
                        "value": "4d091cb86631e1239c9a5918df130bcf49c36c4b143599d9eac684b0e775b2ab",
                        "timestamp": "2021-11-27 05:26:34"
                    },
                    {
                        "value": "20d5fb2c061bafbab5e0a6ab912b76414767d32900a62f8698a379ce3e1840e3",
                        "timestamp": "2021-11-27 05:26:33"
                    },
                    {
                        "value": "56c19456e1e344b28d67f4dc2757aa3d48e69e2f0afe3b3d548686e9c4c1441b",
                        "timestamp": "2021-11-27 05:26:33"
                    },
                    {
                        "value": "e7dc41940b17f0a12d6b670fa1c99b2bf23b2ef7c2811f9fa3618e6af806170d",
                        "timestamp": "2021-11-27 05:26:32"
                    },
                    {
                        "value": "ae0bc28a27191b24d53c63a09d7055f799c8213641fb18508a68490b7562d161",
                        "timestamp": "2021-11-27 05:26:32"
                    },
                    {
                        "value": "537c05daf7c91a24b554beaf210733b2cbb1d5690d65e863642da03ff139c141",
                        "timestamp": "2021-11-27 05:26:31"
                    },
                    {
                        "value": "e498c036dae36a82b0bb2ec5fab76a85bb9fd57a198139734f450ee2054aa6f5",
                        "timestamp": "2021-11-27 05:26:31"
                    },
                    {
                        "value": "1272d20345dc197b0775e7ba257bf9d5359e1367fe53142805af27dd3e1c5394",
                        "timestamp": "2021-11-27 05:26:30"
                    },
                    {
                        "value": "5843f3faffac08d7a93f1203c0ac75223661a4a9ad22dfed35781d80ccf7b041",
                        "timestamp": "2021-11-27 05:26:30"
                    },
                    {
                        "value": "ae8e738d04038f945a7b33bfeba13749a72fe0aa4cd03743dcc010ff06b05b70",
                        "timestamp": "2021-11-27 05:26:29"
                    },
                    {
                        "value": "fb73f0960f67178eea193ec865098e8c8caa4abd014e9b433ab55a489d757904",
                        "timestamp": "2021-11-27 05:26:29"
                    },
                    {
                        "value": "5e792d7dd0fd2d0b8bcc86d3fa543f4b45f9711c920a4799ce0047732a575fe0",
                        "timestamp": "2021-11-27 05:26:28"
                    },
                    {
                        "value": "bd9fece7c22649a56c7f0003afa6b75be30348ff86a163b6448cbda1ebfa2cee",
                        "timestamp": "2021-11-26 20:43:32"
                    },
                    {
                        "value": "11ca2585e0c97f602aacfa10dcc33bc1318fbd3fdf906dfc9c58ec32d8e659df",
                        "timestamp": "2021-11-26 20:43:30"
                    },
                    {
                        "value": "f6c52f4ee1f87623ee637d80bcc79020cb569e9ab44b948ee605013fa3021436",
                        "timestamp": "2021-11-26 20:43:29"
                    },
                    {
                        "value": "5d3dc4f367d718ede22525c22a50ece2f65fd6d8be5f1622c417a1a3c20d3ceb",
                        "timestamp": "2021-11-26 20:43:27"
                    },
                    {
                        "value": "4c050fee4e6296846fc3c5929082a79eb198147d7e96bf3c3e38ede389ef3bbe",
                        "timestamp": "2021-11-26 20:43:26"
                    },
                    {
                        "value": "bcd34b49f87ca89c76abcfc9270b69d8bcc07ba20b5bf5d049f6306a6e841154",
                        "timestamp": "2021-11-26 20:43:25"
                    },
                    {
                        "value": "fcea822c5a20bb1f01657e419c47aafd2a40bf1bc0bda0a83522f383012d9fd8",
                        "timestamp": "2021-11-26 20:43:23"
                    },
                    {
                        "value": "d2a8313230553380eb2ea6dd705c19d8810f76993ee4179f55ef4886aae3c0b7",
                        "timestamp": "2021-11-26 20:43:22"
                    },
                    {
                        "value": "5ba71dc33aba025186d5cb8c8526244e7f05f493e8115bf4976a95cc4fdd7f12",
                        "timestamp": "2021-11-26 20:43:21"
                    },
                    {
                        "value": "be83c3ee2c8b569c99a1abe298495d1fd8fb25233c803fe047ef2b57db12ca9c",
                        "timestamp": "2021-11-26 20:43:20"
                    },
                    {
                        "value": "550a85c3544c6c9b5ee88595ca7e74958ea8cb0c0dbd8d6e4ff4b400b294049a",
                        "timestamp": "2021-11-26 20:43:18"
                    },
                    {
                        "value": "5aa6226062739d0bb6552c3f225f5fe4fc6f7a4f20aa82db3c77799a6abe5856",
                        "timestamp": "2021-11-26 20:43:16"
                    },
                    {
                        "value": "fc95f865a94db99f3f0319eba253e90e0e49e26b09c35235e31af333c2914512",
                        "timestamp": "2021-11-26 20:43:13"
                    },
                    {
                        "value": "59ade9888fdbc16ec6fc29cd99a5788598bb3fcbe2bb28ec89f380ed8cf16ce9",
                        "timestamp": "2021-11-26 20:43:10"
                    },
                    {
                        "value": "2adbe25d36e4786ed3052e7e092cc11514d682e4bf64522a3a88d7cf34c75a07",
                        "timestamp": "2021-11-26 20:43:07"
                    },
                    {
                        "value": "a5e5466c287637da41ce1c643eef57a9af67fba947c90248b4715249159cf151",
                        "timestamp": "2021-11-26 20:43:05"
                    },
                    {
                        "value": "8fc66346160a362e2c0810c77e63b5d1aaff5659e3789f2baa6653e834f8b058",
                        "timestamp": "2021-11-26 20:43:04"
                    },
                    {
                        "value": "0ab2b0288032ff8c6baccfb53fcaa61482b39ef8420ba18df5b09549ecf2ef7b",
                        "timestamp": "2021-11-26 20:43:02"
                    },
                    {
                        "value": "63f96f64fa86fcf41e6d05c96c17267601e33cfdb3f647bbd9ba483f76a78eb8",
                        "timestamp": "2021-11-26 20:43:02"
                    },
                    {
                        "value": "3d2a229ea708c6b7fd0b2f86690d14b32aaf9b8d5542d46e746074e000524c07",
                        "timestamp": "2021-11-26 20:43:01"
                    },
                    {
                        "value": "bdead3d0f7a5d479b1b2f9ac6f06a6122cd88448f0d9f3b70efe72add3a25c66",
                        "timestamp": "2021-11-26 20:43:00"
                    },
                    {
                        "value": "51b0f7b6942520da5d50eebb0cce6f1d5052a2a1dae0b3b52683b83895e8a143",
                        "timestamp": "2021-11-26 20:42:59"
                    },
                    {
                        "value": "4db2818f2bebebf8acbc555ca1ccdb72c81fb18c01c2b576ed3db316fa4969b0",
                        "timestamp": "2021-11-26 20:42:58"
                    },
                    {
                        "value": "eb9e3aee0ce8ff0a52993abe08324e57aeb48d8b11f56001885d6dcda95851ed",
                        "timestamp": "2021-11-26 20:42:58"
                    },
                    {
                        "value": "9d584dd4375bd774d1e6721a903d2e3e9faeccdcf9e8fcc1ffb389d53684bb42",
                        "timestamp": "2021-11-26 20:42:57"
                    },
                    {
                        "value": "7eba674fb8db83263818b296f189846873d9774f376efd78d08db813ec1c08d0",
                        "timestamp": "2021-11-26 20:42:56"
                    },
                    {
                        "value": "d003959c3c18ae05d0d3d6838df416bd353cc94a2c4e49dc181c730583022cbe",
                        "timestamp": "2021-11-26 20:42:55"
                    },
                    {
                        "value": "2a421a2b442ef7fdda7e45eaddbb037b3ee0abf8454c55d4a570fd995b1e9e6b",
                        "timestamp": "2021-11-26 20:42:54"
                    },
                    {
                        "value": "f0b6e9f8cb49b7e6d2d29a0ad54fedbb7a64aa2785a8cc399a60fe1f80a2e789",
                        "timestamp": "2021-11-26 20:42:53"
                    },
                    {
                        "value": "dd41e89f72177927e26b702fd68d6c827702c9de39aab297d887ba942b1feb1a",
                        "timestamp": "2021-11-26 20:42:52"
                    },
                    {
                        "value": "8dbbadaf0b1c8048a534219874d5d899f8620d6e970f8e8fc509542f67ced9f5",
                        "timestamp": "2021-11-26 20:42:52"
                    },
                    {
                        "value": "6bc82748d6132315e894ef9ac65bcea7c4dd3276856efbe42c570dd1f8dae652",
                        "timestamp": "2021-11-26 20:42:51"
                    },
                    {
                        "value": "a04a061a26a1e1011ed1f3e7760703d049ddb4c8fb97427d0483805ebbb04b17",
                        "timestamp": "2021-11-26 20:42:50"
                    },
                    {
                        "value": "3e0534635d8718b47ae8bf47478e2042e670283b7eda2acebdd91ee97e6ed7da",
                        "timestamp": "2021-11-26 20:42:49"
                    },
                    {
                        "value": "14c8b20baa6c842e3becb6499f5b3c5d51f59c3d65c9638c441a3d7bb5abbea6",
                        "timestamp": "2021-11-26 20:42:48"
                    },
                    {
                        "value": "a80c3e0c329980e926d67d2ca0670f4a3a9b882d09fc18e865ceec7211abeb75",
                        "timestamp": "2021-11-26 20:42:47"
                    },
                    {
                        "value": "4981a054cf08e3874fffbc79e4ea7d8f2c437e5af621abd38a6d3bddad41bdf3",
                        "timestamp": "2021-11-26 20:42:46"
                    },
                    {
                        "value": "238fbcd015e7e754f4095f85b953272efafc391916c3560549315a33c0ff6bab",
                        "timestamp": "2021-11-26 20:42:45"
                    },
                    {
                        "value": "4de5abb0ae1ed7e99610368c9ffbda872b15e6b6d878d365a222d5bd8542bfbf",
                        "timestamp": "2021-11-26 20:42:44"
                    },
                    {
                        "value": "df63d7581f072ddf486a900f2ad3081636a4c205d5715bad6deb0a11e639fe11",
                        "timestamp": "2021-11-26 20:42:43"
                    },
                    {
                        "value": "4562f9492a3c312009eeb474c9b167878764b6f48539ff223e2b73654a305808",
                        "timestamp": "2021-11-26 20:42:41"
                    },
                    {
                        "value": "51d813fee5f8be0718fdc62511bbf56ea24a2ace2c1d07676ee2238b16bf73d4",
                        "timestamp": "2021-11-26 20:42:39"
                    },
                    {
                        "value": "0f82af4ac275171a7a9002fc7cb534d5f8126a0a8416b8203d6c2144a17d1042",
                        "timestamp": "2021-11-26 20:42:38"
                    },
                    {
                        "value": "76a8dba72f37af936cfb9c643bace03d3810629c97eb64b9a2cfc5338fe8a21c",
                        "timestamp": "2021-11-26 20:42:37"
                    },
                    {
                        "value": "4c1195c5e8de2cc8d71038a024b0e40ed342df5d15ab82a3e2c72c19e723f4de",
                        "timestamp": "2021-11-26 20:42:35"
                    },
                    {
                        "value": "8deb1074630e73bb34613f969b1424c5ab6d1ac09064f1eb4800f72c09fd0a11",
                        "timestamp": "2021-11-26 20:42:34"
                    },
                    {
                        "value": "8882f607adf644b0ec498259f9eaab70d9abae49407e0fe414742c83503a71ab",
                        "timestamp": "2021-11-27 05:26:54"
                    },
                    {
                        "value": "e9878161f7f4d6f9d265e5768a14cb8057c8994a48a8b0a4d0eefde6191524cd",
                        "timestamp": "2021-11-27 05:26:52"
                    },
                    {
                        "value": "bdabd9dd7e4d22c6b80064ea595d0c03259c961870646f829b407442634be29c",
                        "timestamp": "2021-11-27 05:26:51"
                    },
                    {
                        "value": "d5f79968d32eea7ff3b5790f5da240ca6cb02d1750b620a27b68d63dd719a3b0",
                        "timestamp": "2021-11-22 17:28:40"
                    },
                    {
                        "value": "6e63c4d9498276a57c990950b919f5ab09a2ca9d2af4d1fcb8a3aff3960b3fce",
                        "timestamp": "2021-11-22 17:28:39"
                    },
                    {
                        "value": "c25409f8e1b979ac6a04078f242d14df418487dde2d95a11ab1b69c5771d3c97",
                        "timestamp": "2021-11-22 17:28:39"
                    },
                    {
                        "value": "4aff42e9e63c198fa5d00145afd8a2cc6eb0a7b1ec5aa550c8b2a599775f690e",
                        "timestamp": "2021-11-22 17:28:39"
                    },
                    {
                        "value": "ebd57ae0e507ed671a50836d4cc7fd0434b442695306602437a85bbcb01163a0",
                        "timestamp": "2021-11-22 17:28:38"
                    },
                    {
                        "value": "db1ed55aa67c713f72c5ef68b8220b463ddbcbc2add2be9f612684f06c911ed2",
                        "timestamp": "2021-11-22 17:28:38"
                    },
                    {
                        "value": "7863696323361f60899f6a76a6b24b9045cbd4e1016e20300fc376cef8e2061c",
                        "timestamp": "2021-11-22 17:28:37"
                    },
                    {
                        "value": "18e2ac6a98a21c1b6aea624a24fb4fb7dfb899e28195f8cd992b5daaf9dd21ca",
                        "timestamp": "2021-11-22 17:28:37"
                    },
                    {
                        "value": "b95c5ac1c7c55634a340a9970f421ee6b1ed330abf675dfb56c21ce705c02b8f",
                        "timestamp": "2021-11-22 17:28:36"
                    },
                    {
                        "value": "be815d1e0bf423f5f0b1e405808373ce3fb0fa1adda71c28c437ff21f8cedc4f",
                        "timestamp": "2021-11-22 17:28:36"
                    },
                    {
                        "value": "48df1de6eaacebf0cc668892c32ed670fbe2ce691171cd449427ff68458678e1",
                        "timestamp": "2021-11-22 17:28:36"
                    },
                    {
                        "value": "b6619141933d9d0229bd3ddfdd6ad22fd187c3f6538af748d8488e38d6374271",
                        "timestamp": "2021-11-22 17:28:35"
                    },
                    {
                        "value": "3562a81f73606eb1853527d23761a5b6f23aac6c614ec6fd511b281b5f623eae",
                        "timestamp": "2021-11-22 17:28:35"
                    },
                    {
                        "value": "8ecf0cf479aec69d574b8a4306b4680d8917c5a3ecab8e876fdd559edb4e9c15",
                        "timestamp": "2021-11-22 17:28:34"
                    },
                    {
                        "value": "dae06c2062243ea32b7cbe09d620166f8162399ccd0b0b7fc352f8387f96a6db",
                        "timestamp": "2021-11-22 17:28:34"
                    },
                    {
                        "value": "e7b3c47b8fc41f5c8b81a939a606cae6ec707bad93fb42597c3513f2be3bab05",
                        "timestamp": "2021-11-22 17:28:33"
                    },
                    {
                        "value": "3329b8c09a62fd7b76914f6694940da2c0b2f75fd4cde8d16e26c0eec6c42da2",
                        "timestamp": "2021-11-22 17:28:33"
                    },
                    {
                        "value": "0dfb99954bd4cf22f73f7388ba693f728589fd82d435a694ed8b70c6d07e30c6",
                        "timestamp": "2021-11-22 17:28:32"
                    },
                    {
                        "value": "78099ed1fb6e3bd84b093a9fc643048a73dbd8d3200b8183dfafc50713d5d159",
                        "timestamp": "2021-11-22 17:28:32"
                    },
                    {
                        "value": "7fdb98cf1da76afb1262a48167924b257e3d60d667c32e23545c2289d613a426",
                        "timestamp": "2021-11-22 17:28:32"
                    },
                    {
                        "value": "ca54b1fdf166f9d2df6e9da6897c04aadded3bfc62ca87c543d72e0c01bd3bf6",
                        "timestamp": "2021-11-22 17:28:31"
                    },
                    {
                        "value": "d07d919a82dbf6a4301d5d1d7531db76fd8b8b8cea21e3f6613d3b214ae554ac",
                        "timestamp": "2021-11-22 17:28:31"
                    },
                    {
                        "value": "7f6b6d934f2e11651528e804f9e3c4b665a706b909f36b8bec481205550463f4",
                        "timestamp": "2021-11-22 17:28:30"
                    },
                    {
                        "value": "3350fe90b214de0ad6bacd9c644b14c928cfd681d66399f9eb53a9e2039242bc",
                        "timestamp": "2021-11-22 17:28:30"
                    },
                    {
                        "value": "addd509a92f16d2555fba32f1d58e0a07953a8251b72d88c1f9e7448f4b5e320",
                        "timestamp": "2021-11-22 17:28:30"
                    },
                    {
                        "value": "ed9186fe27e0f874725529f583f52ac4514a0b60125ce80864ff274b953de130",
                        "timestamp": "2021-11-22 17:28:29"
                    },
                    {
                        "value": "202837c79aa9e368776d9dbe13e125d95fc35cece4c77b71d3ff1a34e3fc0db2",
                        "timestamp": "2021-11-22 17:28:29"
                    },
                    {
                        "value": "b17970c04979b6443eca57744381083adba4885860e41ac9cb689eb80a4297b0",
                        "timestamp": "2021-11-22 17:28:28"
                    },
                    {
                        "value": "6a2c8d77d09637cfe1d08ebd19c0bfd778249ae1ac1a34972bacb693ecd4401f",
                        "timestamp": "2021-11-22 17:28:28"
                    },
                    {
                        "value": "8bd37cc059d15eacc8fe0ef66285e1d1ab460a480793c3699f405132516ecbc9",
                        "timestamp": "2021-11-22 17:28:27"
                    },
                    {
                        "value": "b2e0d988d0cf01f766eb68be106f8ee3be13700bbe0bddec1d5c2b04d1d5b319",
                        "timestamp": "2021-11-22 17:28:27"
                    },
                    {
                        "value": "03e41e1b01b6fe2bcdf1649aad9815212e2d04372c4eef514170ba7d41d3e3ac",
                        "timestamp": "2021-11-22 17:28:27"
                    },
                    {
                        "value": "5013a5b855770c2269a5c8650d7ad15414e59c024bdeca76ac599a3f094507da",
                        "timestamp": "2021-11-22 17:28:26"
                    },
                    {
                        "value": "fc03a7def091f27877913bf72591bf7363ab015f688ef7d1be546e47db4c19af",
                        "timestamp": "2021-11-22 17:28:26"
                    },
                    {
                        "value": "04c3d9d645c254a617b44a8c9c6a7cf17db11b0f95e5080a3f2955539291e9c6",
                        "timestamp": "2021-11-22 17:28:25"
                    },
                    {
                        "value": "e0a481655bacc5cc11ac8c9164adadc2c30bacfae4ad0892264eb4350abcf4da",
                        "timestamp": "2021-11-22 17:28:25"
                    },
                    {
                        "value": "5794305c1bedf41c1681c38dc77d2adcd436eea4d446baab32fcdb0789a27201",
                        "timestamp": "2021-11-22 17:28:24"
                    },
                    {
                        "value": "df16940f38135c9dfa808b7f19348339deca912fe54331b2dd739decdf37d9e0",
                        "timestamp": "2021-11-22 17:28:24"
                    },
                    {
                        "value": "2ed95e5cd1a9a17a0d791ec7a37ba0c88b0ce16eeb575ac66d4b7d917d5af1b7",
                        "timestamp": "2021-11-22 17:28:23"
                    },
                    {
                        "value": "1a184b7da217bd108d7c7d2e4e71b125ce1c31bb678e304854994214f07c16c4",
                        "timestamp": "2021-11-22 17:28:23"
                    },
                    {
                        "value": "f83c639e5c8bf91827758fde9e4adf54acf59f0eaf145c3fe98d7e7e03426b68",
                        "timestamp": "2021-11-22 17:28:22"
                    },
                    {
                        "value": "d3f5367eacf74ecd1a3edece1778270d2350338f67cd95f96ac1de06f2c04a4b",
                        "timestamp": "2021-11-22 17:28:22"
                    },
                    {
                        "value": "02499b03902187900b3e847c41c4e0bb45e5f6a07989d2ec99fcc0a3e189082a",
                        "timestamp": "2021-11-22 17:28:21"
                    },
                    {
                        "value": "2378a35e917a3109be63549454883b489d6ec7dad393bd3ed7bac1ff89a1cda6",
                        "timestamp": "2021-11-22 17:28:20"
                    },
                    {
                        "value": "b745a4733013dd672ea747c94e06fcecbc1f36d3722ea060b4718f9323b95e3c",
                        "timestamp": "2021-11-22 17:28:20"
                    },
                    {
                        "value": "41d044e7279e3745b53aecc982fb279d4c3db423e0a712dd0638bca7533a00fd",
                        "timestamp": "2021-11-22 17:28:20"
                    },
                    {
                        "value": "27aa31e4f13f852c55525b1d08cf2609f37743aebd112da3a23f771782aea371",
                        "timestamp": "2021-11-22 17:28:19"
                    },
                    {
                        "value": "f0d94e0fcac9dad6ad867a051f46aff20f67c2a4ca166effd9b76e61f5d79d5c",
                        "timestamp": "2021-11-22 17:28:18"
                    },
                    {
                        "value": "53bc993efef253f1465b4a474f0b8eda4e82ee0334a8d0bc841dc736a6e08ed6",
                        "timestamp": "2021-11-22 17:28:18"
                    },
                    {
                        "value": "ab9e3f8e6ecc05b10c4dcd879ce7403190980538d45c3cdbccb80fe8fb0a887a",
                        "timestamp": "2021-11-22 17:28:17"
                    },
                    {
                        "value": "732fb076d67ad055022284204bc3e2f642683fcf27628c8a6224b90ec802d9ab",
                        "timestamp": "2021-11-20 05:23:17"
                    },
                    {
                        "value": "e518c185e14d33540faf39c2794e41f250eb183056ff9d61f3395d29393c7f24",
                        "timestamp": "2021-11-20 05:23:16"
                    },
                    {
                        "value": "b3fb774ad00425fa7c9a217b90bf9413a2106474cf6eeb06680bbe09b017a2c7",
                        "timestamp": "2021-11-20 05:23:16"
                    },
                    {
                        "value": "97dedad13fc9cc49bd68b9294848326a58da8290e238211f2a9d83db74d7362b",
                        "timestamp": "2021-11-20 05:23:15"
                    },
                    {
                        "value": "51d1b16cdd65cfb34d0a8d3a2e499d690d0c74cd745f1725b7fc839e8aae33e6",
                        "timestamp": "2021-11-20 05:23:15"
                    },
                    {
                        "value": "6d1db931ad4f1ce5fe9fa778f298552df425c1471a6c2027773dacbd3920540c",
                        "timestamp": "2021-11-20 05:23:14"
                    },
                    {
                        "value": "b60025d06fca5875a6bba02e69fdc056ff8a455909fba117afc6a85e7e5c46c6",
                        "timestamp": "2021-11-20 05:23:14"
                    },
                    {
                        "value": "2dd8020504d68afc72bc8046960f712baa14f2b3f25db46a532f600807103edf",
                        "timestamp": "2021-11-20 05:23:13"
                    },
                    {
                        "value": "b5ff81d840bf1029dc4a81d0ac556db5a7f003536388a5364edf2ceea9d4bbae",
                        "timestamp": "2021-11-20 05:23:13"
                    },
                    {
                        "value": "cf688f4a1c81c4c2f25e29d81eb5284f2a9125ad80d1da70dc924f0682919ef3",
                        "timestamp": "2021-11-20 05:23:12"
                    },
                    {
                        "value": "2bfcbdd26a2ec6ce47efc41ff322bea3eb3c09d7548cb7c58d64a16a7cee89ae",
                        "timestamp": "2021-11-20 05:23:12"
                    },
                    {
                        "value": "17c6245b1941c3b27d06735f51c526777540c6ac176cbae60d65645dac9e024d",
                        "timestamp": "2021-11-20 05:23:11"
                    },
                    {
                        "value": "f2b097dd071607b4ac5e2a790dbc7954b8067bec74954c27019edb9eb221a740",
                        "timestamp": "2021-11-20 05:23:11"
                    },
                    {
                        "value": "cc85e571989c63f6ea5d3295366ea086ad7431315a70df94c590a493caf1f1c5",
                        "timestamp": "2021-11-20 05:23:10"
                    },
                    {
                        "value": "ca3b84b8f1425e40b06b958f847972502135289a72626cf2bf8517b38ec099a3",
                        "timestamp": "2021-11-20 05:23:10"
                    },
                    {
                        "value": "8f4bc912060272696aab204eee300a1a458114ac7adddf93461d94e47f5f7855",
                        "timestamp": "2021-11-20 05:23:09"
                    },
                    {
                        "value": "bcbba494314c3808391f4b0a1bf2165f1962fb05be88124029b7b2d5fb5a32ad",
                        "timestamp": "2021-11-20 05:23:09"
                    },
                    {
                        "value": "d7aca7c484f030aca0d2b08aaf603a00906736fa66c2ebc02e6c8cf00021f995",
                        "timestamp": "2021-11-20 05:23:08"
                    },
                    {
                        "value": "2a748ba12c60d24266d8e7d244585b2c8ea73757b56d92e8f6f92be833f408d3",
                        "timestamp": "2021-11-20 05:23:08"
                    },
                    {
                        "value": "7ea6e355686fb08c681454b602a19856f8f3cb59b016d07437d91ce04a5f7247",
                        "timestamp": "2021-11-20 05:23:07"
                    },
                    {
                        "value": "41fe751103c333fcfb948b46fb68b63f8d6680cf2ca3280f90a441b202b93e2d",
                        "timestamp": "2021-11-20 05:23:07"
                    },
                    {
                        "value": "46464dc619e3f7d0ed82d20369e1fc544c2e0030cf3dc64abe9965195c14ded7",
                        "timestamp": "2021-11-20 05:23:06"
                    },
                    {
                        "value": "3b4a3d09185abdcd848db145874e33d74030df26eced0ac4d4a0bd4b89e04beb",
                        "timestamp": "2021-11-20 05:23:06"
                    },
                    {
                        "value": "fdd94cf012fef420c3286e86e8ddaa658ee1afbec2829dfff770af36cc449e05",
                        "timestamp": "2021-11-20 05:23:05"
                    },
                    {
                        "value": "f3877905f925d841b1608d31dcbd4305fb00557e8da6a53f7381d226b51b299a",
                        "timestamp": "2021-11-20 05:23:05"
                    },
                    {
                        "value": "5eb478056d5f7755bffd71a2f132d6497e217deed2143b754f5b8536a31ff28d",
                        "timestamp": "2021-11-20 05:23:04"
                    },
                    {
                        "value": "e54a5e69518368ac24d6cab8220c7b4beafd58118bc0dc7604e1060870334ab3",
                        "timestamp": "2021-11-20 05:23:04"
                    },
                    {
                        "value": "f48d320c8cd6e309a89598e6ddc2374fca7892594596e832a4ed61051c7beed2",
                        "timestamp": "2021-11-20 05:23:03"
                    },
                    {
                        "value": "d4145111d8cb2197b47d07fb2ff8cb80c29f27cb0213be3b0e5c94f52f134e6b",
                        "timestamp": "2021-11-20 05:23:03"
                    },
                    {
                        "value": "a8d680f7c1d8cebd51a19c67a6924f8b975db9b1b9253c7ee635da94dcbf3af7",
                        "timestamp": "2021-11-20 05:23:02"
                    },
                    {
                        "value": "1ead9615a265abaa165fb87cabd90b9b2000f3f9796fcd9239abc789ea79f59f",
                        "timestamp": "2021-11-20 05:23:02"
                    },
                    {
                        "value": "e147a4af161d47acd7713f8796616c42d544803dc6fb848d4c73d52ba06b8547",
                        "timestamp": "2021-11-20 05:23:01"
                    },
                    {
                        "value": "7505940184381be803dc9194516b4a07109bda72da89b0712fae306e207bbd8a",
                        "timestamp": "2021-11-20 05:23:01"
                    },
                    {
                        "value": "c4e5063a8307978bf32f0737c11d24fd80fa4e3bc8c365815ff1649c6935ab3d",
                        "timestamp": "2021-11-20 05:23:00"
                    },
                    {
                        "value": "6d802edc668beade63f2423cf910b49e8ab5fa9e36d88c9797da4886acc39025",
                        "timestamp": "2021-11-20 05:23:00"
                    },
                    {
                        "value": "b9a57ff5e6e50d53f875e552c801772f692a44dfebb44269196b9e23a5902425",
                        "timestamp": "2021-11-20 05:22:59"
                    },
                    {
                        "value": "27e3942cf5aca64f1564d1618292f8a57732c7e140b8a397dfd78b5ab913a52f",
                        "timestamp": "2021-11-20 05:22:59"
                    },
                    {
                        "value": "0534a4725ccd2b5fbf1edd56f6afe36d5f2611929d1608fa3f5540385a7b979b",
                        "timestamp": "2021-11-20 05:22:58"
                    },
                    {
                        "value": "6c514d41454dba9a5379d11da432149efff37ecd2acd754d37bd136b4784f14f",
                        "timestamp": "2021-11-20 05:22:58"
                    },
                    {
                        "value": "5dd8069a7d1e0622160952a79a6f21d62b30929dfe389bae488ba4c51e56104f",
                        "timestamp": "2021-11-20 05:22:57"
                    },
                    {
                        "value": "d01b93c458193cfcccfe9c82f0e16fee391d2a4fd5bf3864412559d962c89770",
                        "timestamp": "2021-11-20 05:22:57"
                    },
                    {
                        "value": "b0cd5cc28c3c3e9023a8fd6ae987145fa1e50e1bf16852f07f9e83a64b890de7",
                        "timestamp": "2021-11-20 05:22:56"
                    },
                    {
                        "value": "14ea5cdae9347989fd810b12ea4468c13f25c096cf0675effdc6300c110f37c9",
                        "timestamp": "2021-11-20 05:22:56"
                    },
                    {
                        "value": "62c885172e1009ece9708ccbfd9469a95bf69e78e062eebfe1e2ee90b9220d2e",
                        "timestamp": "2021-11-20 05:22:55"
                    },
                    {
                        "value": "740cee2fefb3f7dde03c51d48f33e3d867197bccb83d9fc65204754bed5452d3",
                        "timestamp": "2021-11-20 05:22:54"
                    },
                    {
                        "value": "1646232d3261fd743a8ed8f4375b6638d34de983f8bee985d636370675036c0f",
                        "timestamp": "2021-11-20 05:22:54"
                    },
                    {
                        "value": "fcd9fef2bb4b6f2287a3c882a19ccca8e5554050968af55d22b606cce6286bec",
                        "timestamp": "2021-11-20 05:22:53"
                    },
                    {
                        "value": "3b9ffe9cc54ec2c006525356f4fc2344c2e9e595b10e20a02dae9ed5284e3f4d",
                        "timestamp": "2021-11-20 05:22:53"
                    },
                    {
                        "value": "24dba35020d611d2f52cbce5eea7d341800c5809bed8a481460badce4e9a62d5",
                        "timestamp": "2021-11-20 05:22:52"
                    },
                    {
                        "value": "455a194498440cc25dccb9f9b643f1380dbde0df74a7d22427f3c12e83cbb80e",
                        "timestamp": "2021-11-20 05:22:52"
                    },
                    {
                        "value": "497983efd3a80d18086261d6e8a9d93a8f320c369c5e29027cd8e5fe63d34e62",
                        "timestamp": "2021-11-05 10:06:40"
                    },
                    {
                        "value": "6c9277d64705b2f6550a11c1cba3a3d32ab951c5efa7af81649f644b76ab84c3",
                        "timestamp": "2021-11-05 10:06:39"
                    },
                    {
                        "value": "23b397ec72363faaa149cb4e7977ce1e3be7dc13e2a26b8bf4ea722910771b77",
                        "timestamp": "2021-11-05 10:06:39"
                    },
                    {
                        "value": "1f950cedd8beebc58d41202ada96da9373b7086ca7282a66596839c0e4294fe2",
                        "timestamp": "2021-11-05 10:06:38"
                    },
                    {
                        "value": "1281dc8dabef970ccd12fef831608a2d5a53ea757d9bbf95633723c5cf44aa6c",
                        "timestamp": "2021-11-05 10:06:37"
                    },
                    {
                        "value": "c876857af572fd4e6520844280b37bd36f92948a648a2d9e9ae582ec7f040943",
                        "timestamp": "2021-11-05 10:06:36"
                    },
                    {
                        "value": "0fbb95fffe67dad3317ad967e406cc00eae286ee2a01accaf3373439c58d6ccf",
                        "timestamp": "2021-11-05 10:06:36"
                    },
                    {
                        "value": "090dc3fb879ba2fb67ad0b046b35a959c6dd59204a9ce533fea3708f5d4f1332",
                        "timestamp": "2021-11-05 10:06:35"
                    },
                    {
                        "value": "660a53b5b7fb3a776830d9b907ac299a56549e4fdeda07b9b65bb01f72c552f5",
                        "timestamp": "2021-11-05 10:06:35"
                    },
                    {
                        "value": "c4ad022ba8030eee64f71d2de32b0cc1945bc03c6c570575e7b902e6079b2a6f",
                        "timestamp": "2021-11-05 10:06:34"
                    },
                    {
                        "value": "cebc7db2d13944fa19c514c43b19640a0899180c7c634a891fc6ff2c03a9e4e6",
                        "timestamp": "2021-11-05 10:06:34"
                    },
                    {
                        "value": "820403643cd7bca92357c496b906e6dc40f083fe3e631d7b215ba3bb65ca73df",
                        "timestamp": "2021-11-05 10:06:33"
                    },
                    {
                        "value": "6fcfb484c75402ef1c189e2822d2bda2b551ff174391d2911fc3248b1a9528af",
                        "timestamp": "2021-11-05 10:06:33"
                    },
                    {
                        "value": "f1ff9f34c47fa7c4b11d8e6ec08bc059e9102b07c0f49cb729b4334525cc4bf4",
                        "timestamp": "2021-11-05 10:06:32"
                    },
                    {
                        "value": "5ff7a22f3ad827b1f12907ea70a89f546a2c22e93d30d26235a78ed7a40deab7",
                        "timestamp": "2021-11-05 10:06:31"
                    },
                    {
                        "value": "0332e59c5f4debf66f35cdde7a20a8120db54d1c4109ce8d5c4e957a7ed08883",
                        "timestamp": "2021-11-05 10:06:31"
                    },
                    {
                        "value": "ecb0cd0c3552247bf7a22af4b2783cd7145bc85ffdc03eee8a7c7dcc33ec35f7",
                        "timestamp": "2021-11-05 10:06:30"
                    },
                    {
                        "value": "75370594e224679e2e63709a06bc589b3f93d7be22a820260a93ae28fb77789a",
                        "timestamp": "2021-11-05 10:06:30"
                    },
                    {
                        "value": "4b9f0b9011bb6ddbe803c6ff21f1b292daeaf80ec516527c74222038202befca",
                        "timestamp": "2021-11-05 10:06:29"
                    },
                    {
                        "value": "e8bc17014ef8c5eb0cacccc7e813aa09691f3f7ef231de350ab6ff6e8dfe4775",
                        "timestamp": "2021-11-05 10:06:29"
                    },
                    {
                        "value": "c6566f3fb857534484b1b9057562dba9edb96c9f957834fd4196286b764c1ca0",
                        "timestamp": "2021-11-05 10:06:28"
                    },
                    {
                        "value": "777d3c691491baa44265790a70589bcc6fb3eaa9da6cb97841bd7e3899b85874",
                        "timestamp": "2021-11-05 10:06:28"
                    },
                    {
                        "value": "c8ee89781cfbd5bb2e1784c3c3a54ae0087298a2751d520fb951e4cdfde0c8cc",
                        "timestamp": "2021-11-05 10:06:27"
                    },
                    {
                        "value": "1128f9d65789a9e8b3c56b29fede3434239615ddf3b089336944693e43ad9e37",
                        "timestamp": "2021-11-05 10:06:27"
                    },
                    {
                        "value": "5f378b7f44abe16f85c51537d5a1399ef1c5aff4a0795c842b140c41b0c6d3bf",
                        "timestamp": "2021-11-05 10:06:26"
                    },
                    {
                        "value": "6fb3abb8ac79108391d1f1d6f4083d68d3d27bb61452c5c479c71e0e63089cb3",
                        "timestamp": "2021-11-05 10:06:25"
                    },
                    {
                        "value": "3a55ace04a46a75abf0004a691dadc4863f78d97862c9a5a38c02fc4dec12a47",
                        "timestamp": "2021-11-05 10:06:25"
                    },
                    {
                        "value": "2b50a4d1606d0156b488afbdc6270134f86272d8f5b2836469f46638d6ed4855",
                        "timestamp": "2021-11-05 10:06:24"
                    },
                    {
                        "value": "8b113ac256ee9f15898acc075b3e328b4391efd3960310d4c4bb1f421a2178e6",
                        "timestamp": "2021-11-05 10:06:24"
                    },
                    {
                        "value": "6581d3991f1e7d303fd36c0078c2010fc711e1c6c93a172a302f0d6932666244",
                        "timestamp": "2021-11-05 10:06:23"
                    },
                    {
                        "value": "a91ed46aeb6ef88b25aa4308c474d4f8d90654fa66519a660bf76c828a3be6a1",
                        "timestamp": "2021-11-05 10:06:23"
                    },
                    {
                        "value": "e3959626a554220e265c4c64857b2d73b5d93584fbe8287f8dad4d90d298c7b0",
                        "timestamp": "2021-11-05 10:06:22"
                    },
                    {
                        "value": "9fdce2910de8348c41738d4584c0e76a09b27acd54493065700c23da7c3c64da",
                        "timestamp": "2021-11-05 10:06:22"
                    },
                    {
                        "value": "18fa77655c813c5e08ed1ec8298da790135e067d2300973f5e5dee623973fa67",
                        "timestamp": "2021-11-05 10:06:21"
                    },
                    {
                        "value": "d41496d4798478c2894b76e34fd049948bf38a5de1af58746548c1de1574c20b",
                        "timestamp": "2021-11-05 10:06:20"
                    },
                    {
                        "value": "1cc7014a31587737c8cc44534d1401a5f3f9e741b180d2cace173fa9594964ed",
                        "timestamp": "2021-11-05 10:06:20"
                    },
                    {
                        "value": "a8c0a25cbf431a49ef893b3322d636acf5003b17d9acab6f34ec424c20ae76f7",
                        "timestamp": "2021-11-05 10:06:19"
                    },
                    {
                        "value": "0827f691a211a32670ba8cef8578f204c3c5ebf2cf4ef73c67c39ae1100502b5",
                        "timestamp": "2021-11-05 10:06:19"
                    },
                    {
                        "value": "61023f85d18c682f076dd516e4bb05dd90342b0784f548580fb8453c866eb4ba",
                        "timestamp": "2021-11-05 10:06:18"
                    },
                    {
                        "value": "06d0538207cda138087d47728172779a2bb48c1d7a8f7a0b5219691ff7056367",
                        "timestamp": "2021-11-05 10:06:18"
                    },
                    {
                        "value": "9a034782abbd3cda58157babbd07a7110faf85c4ec9da0362bb01560ae6890e9",
                        "timestamp": "2021-11-05 10:06:17"
                    },
                    {
                        "value": "e750f6061a39275843b61f51661c3cc23a1bf1188121eda949c9949cbc7a21d0",
                        "timestamp": "2021-11-05 10:06:16"
                    },
                    {
                        "value": "8828a5116122ca810f0cc4ea175c0be1b77312668c7c0e5fbbd4a7e18469646a",
                        "timestamp": "2021-11-05 10:06:15"
                    },
                    {
                        "value": "920efb94b28796ecb5638200412286f1a082ca0531e90b3e6e047d53680450cf",
                        "timestamp": "2021-11-05 10:06:14"
                    },
                    {
                        "value": "a4a543334fd454d8659240708e0eaad13a7c876232fc78cf93b07df02dbbe128",
                        "timestamp": "2021-11-05 10:06:13"
                    },
                    {
                        "value": "9c9d6dbda58e0bf27111712dd2c8df047f54a6aff3ff40a58ae36e01b4c9403f",
                        "timestamp": "2021-11-05 10:06:12"
                    },
                    {
                        "value": "1bd01d7cb7ce16fc98513dcb33039b158f6940bb4757388ea0a85a136388ab12",
                        "timestamp": "2021-11-05 10:06:12"
                    },
                    {
                        "value": "d34571da3d110bfbf2fa2643e360e85065ba771cc16a88e3f6b1795d77f637eb",
                        "timestamp": "2021-11-05 10:06:11"
                    },
                    {
                        "value": "bfb4f1b75b10bf77e4a08263c104005238e3eaabde1e4dd4ddfd1253fb224490",
                        "timestamp": "2021-11-05 10:06:09"
                    },
                    {
                        "value": "d733c1b157512cb76a8fb1ed1a170f524b3287622c69a7f236132ebf466c3fca",
                        "timestamp": "2021-11-05 10:06:08"
                    },
                    {
                        "value": "65e31c7b14877f26986fcff46059338d75567154cbd53be37f7e65bbfc137f02",
                        "timestamp": "2021-11-05 10:06:06"
                    },
                    {
                        "value": "6dc98186b132884a313b0a8c4a3da777416fbe28d20092b0e71e27411ff3afcc",
                        "timestamp": "2021-11-05 10:06:04"
                    },
                    {
                        "value": "4fec41258477e611a799b9f6ce0fd825c41a30e0cc176044b1e9fe84482b126b",
                        "timestamp": "2021-11-05 10:06:02"
                    },
                    {
                        "value": "7e1014fab1e75a1722ac27d11781dd1cd810fe5b534feda7bdd68c017a95c1a4",
                        "timestamp": "2021-11-05 10:06:01"
                    },
                    {
                        "value": "2638a77571f3d23115e72b94ecfe322daa5d924e5c0dadb750ab50d31020d45d",
                        "timestamp": "2021-11-05 10:06:00"
                    },
                    {
                        "value": "9143546a871170bd72ccff6884b51883c22d647461816e6ece01a240b19e0846",
                        "timestamp": "2021-11-05 10:05:59"
                    },
                    {
                        "value": "c3b9a9e5730980065c8759c8e03cc782f54d8108c8da014f485da0322051c8f7",
                        "timestamp": "2021-11-05 10:05:58"
                    },
                    {
                        "value": "810730ee0a7f1c560082f7f4f19449515c12ad6eecfe8db936a77a45a5928297",
                        "timestamp": "2021-11-05 10:05:57"
                    },
                    {
                        "value": "c2afa8ef328c9815b249d8e959ebd9751815ace026fddcf8dffd9eaeabb30330",
                        "timestamp": "2021-11-05 10:05:57"
                    },
                    {
                        "value": "ea7536fecaae7e8e7a9d28f4e2d6a5a78b1717ff6024eb151f6ff3121f2c0e4d",
                        "timestamp": "2021-11-05 10:05:56"
                    },
                    {
                        "value": "7a47b3d53ebc8c82972e7287557eb8fedd73c4a73694d1a4f419a3b74a967963",
                        "timestamp": "2021-11-05 10:05:56"
                    },
                    {
                        "value": "7dac3cebd8a9b14f201563f4d24d310952d7dae62c3fa18ff563c959375c9340",
                        "timestamp": "2021-11-05 10:05:55"
                    },
                    {
                        "value": "cfd6080402c3a30854b0b39ec19742cee39d633107138c1f756be16cb9039e26",
                        "timestamp": "2021-11-05 10:05:54"
                    },
                    {
                        "value": "9cb9ea10170724e76c4021e600c9a97499373ff2f431573f32709cf66ff9e528",
                        "timestamp": "2021-11-05 10:05:51"
                    },
                    {
                        "value": "fb8891a1da2f6c8ad55b6a74ef79d58eabcbde3b26d37160f49cb6b89288bdaf",
                        "timestamp": "2021-11-05 10:05:50"
                    },
                    {
                        "value": "46f8ac7a5974d49364af459c955993256775e55fa822cda3d346b50739cc7b37",
                        "timestamp": "2021-11-05 10:05:49"
                    },
                    {
                        "value": "c2265833cacbc18df04335f58de6dc13b16729c46b5ed983300c5b53dbc322ea",
                        "timestamp": "2021-11-05 10:05:49"
                    },
                    {
                        "value": "684a7f4a609007f2a805c105132a909358a044ccdad8fc70edeee24f1cd6c27f",
                        "timestamp": "2021-11-05 10:05:48"
                    },
                    {
                        "value": "4dc1b35be349de50a75524616406fc090c5854d6894d7e789d1676efc2651548",
                        "timestamp": "2021-11-05 10:05:47"
                    },
                    {
                        "value": "89590468a16d9eeee64016cea7100288ff1cbf64e7cc77080e4ce5e4fd954795",
                        "timestamp": "2021-11-05 10:05:46"
                    },
                    {
                        "value": "7bc0e52a8b9c54cf753e7c94090c3a5d5638af468d7596844d63e912626de9e3",
                        "timestamp": "2021-11-05 10:05:45"
                    },
                    {
                        "value": "9fa6243135d68f7c89e2d151cb3148c9857003e4050a7a78274f79c4241d52d3",
                        "timestamp": "2021-11-05 10:05:44"
                    },
                    {
                        "value": "816b6035d224701378951d68b00476e5832f8cb0eb53d3653c14c7ea889e2cc6",
                        "timestamp": "2021-11-05 10:05:43"
                    },
                    {
                        "value": "efff275466e05d0cb52e277cf8ac48399b8268435a3373d64f720b8655be6fc2",
                        "timestamp": "2021-11-05 10:05:42"
                    },
                    {
                        "value": "0df134080471642f2a350cef115a01c3ff4ef640429a9dcec02d15543c15db78",
                        "timestamp": "2021-11-05 10:05:41"
                    },
                    {
                        "value": "373344a666a73862d78838419992571351c693d4070b071cd32b39de59f0e667",
                        "timestamp": "2021-11-05 10:05:41"
                    },
                    {
                        "value": "a7bd8b04b2af00da5786d5e7f823775835caa8f5c32f4191316b32c2b9e50e7f",
                        "timestamp": "2021-11-05 10:05:40"
                    },
                    {
                        "value": "851586cdae805efb15cab0bb72bb903e2678a8e79d2248b7b8d11fc97b4d2785",
                        "timestamp": "2021-11-05 10:05:39"
                    },
                    {
                        "value": "e5b6ce4b6a057bac90d1db97534a832f2e73517de60ec44cdcb10ca89313b9c6",
                        "timestamp": "2021-11-05 10:05:39"
                    },
                    {
                        "value": "fa1f3592710b49d2e6b4bb6c2fbfaf6fc46b4a167176f29a07c16a773b159ed9",
                        "timestamp": "2021-11-05 10:05:38"
                    },
                    {
                        "value": "adb88cd01348293cf4ea672d79fc91a953d6b5d76124572b50b11bfce0f96d51",
                        "timestamp": "2021-11-05 10:05:38"
                    },
                    {
                        "value": "82545ee1151d368f19c9af2e5c733e8c8d5f86c7054b97f3e55aee532cfa1521",
                        "timestamp": "2021-11-05 10:05:37"
                    },
                    {
                        "value": "797b47404fa19f80f65d658c59442dcbb1f53f72625fe397df04ff63cc024336",
                        "timestamp": "2021-11-05 10:05:37"
                    },
                    {
                        "value": "3ec18fcb17eaf513f4f255acd0742185275cdad581fcccab80614d2ec4b7fb87",
                        "timestamp": "2021-11-05 10:05:36"
                    },
                    {
                        "value": "e1488604460730bd2917ece02bef63954105fe3f3114580619c67b2fc5086cb5",
                        "timestamp": "2021-11-05 10:05:35"
                    },
                    {
                        "value": "0bea63d5084de81fb57265837d64bb336d03c0c4442d6d196ea742c6bca0b729",
                        "timestamp": "2021-11-05 10:05:35"
                    },
                    {
                        "value": "4f6e83660a0541d3dad509941cda8c13ec1896791f04f3dd106c2d4862859f42",
                        "timestamp": "2021-11-05 10:05:34"
                    },
                    {
                        "value": "973159fa9946c3ea13901daab015d59ddb040e160301878e07f3e452dc2041d8",
                        "timestamp": "2021-11-05 10:05:34"
                    },
                    {
                        "value": "b9c834153e8463a603d752b972096c5e074d5dcffbb1344ed7a1c0fb3ca7a64f",
                        "timestamp": "2021-11-05 10:05:33"
                    },
                    {
                        "value": "c63224c4f7f03f07930b81968e6c04b234df209d9fd83f6a85090d564ebd5dd4",
                        "timestamp": "2021-11-05 10:05:33"
                    },
                    {
                        "value": "c033af1c3d7b7ef7468f7feceb2c143fda233a2aafaa6f1b9af34dd074929161",
                        "timestamp": "2021-11-05 10:05:32"
                    },
                    {
                        "value": "f3edd7ad84c78b0d626cec216dc50f4a3c1c884e40136c2ab5cc108e36a23a95",
                        "timestamp": "2021-11-05 10:05:31"
                    },
                    {
                        "value": "919c60a4421600b8316f809a4f824f5eeacf678ef473847cc35c4dbc7ea442ec",
                        "timestamp": "2021-11-05 10:05:31"
                    },
                    {
                        "value": "ad2888f152832f4050f06fc2a6249ea75efff3d7f67f2a3885420dd969491f09",
                        "timestamp": "2021-11-05 10:05:30"
                    },
                    {
                        "value": "051fe6346f8011e1f31be6024ab0d8dbcb8a580aefbe7146e85e8de1d7afbb28",
                        "timestamp": "2021-11-05 10:05:30"
                    },
                    {
                        "value": "affdbfc6219b7b3cf7f6c920165838b86d835adac25782fbe6f48b8f37ae1fa7",
                        "timestamp": "2021-11-05 10:05:28"
                    },
                    {
                        "value": "54cc2efe535bdee5443355d4ca6313f83c627a82cc22badedfd5d3bc29b62f57",
                        "timestamp": "2021-11-05 10:05:27"
                    },
                    {
                        "value": "60ed12a847d2abf5c23a626515e9024a1331d9e4cb47576d7c764731abbeb2de",
                        "timestamp": "2021-11-05 10:05:27"
                    },
                    {
                        "value": "ae69d83037799c36eec7d1102fd2e7c08e2ffae64df14d7cbd30207bedc72635",
                        "timestamp": "2021-11-05 10:05:26"
                    },
                    {
                        "value": "8c366bfb0924bc2429b04f8cda5f455474d11b14840b7fe77e10094a017c25e9",
                        "timestamp": "2021-11-05 10:05:26"
                    },
                    {
                        "value": "be325d89416ac266982cf3bbcb3542acebb611d004e4cd89b393c52b34f55ea4",
                        "timestamp": "2021-11-05 10:05:25"
                    },
                    {
                        "value": "842fba046f624591ad4bf5bfd8f9c42216d4b1501e57a13660c45e97356e8880",
                        "timestamp": "2021-11-05 10:05:24"
                    },
                    {
                        "value": "fabd20442e4eed9091c0d20a992297ae5707d13fbd2b8e98412387bc845e2377",
                        "timestamp": "2021-11-05 10:05:24"
                    },
                    {
                        "value": "b93c1df938c3f73c249196eee98226b804e73f0f0a647f3ff6ccb4e3fc6e5004",
                        "timestamp": "2021-11-05 10:05:23"
                    },
                    {
                        "value": "dd0c26d0bcf6a105602b76b01d0d96e97b2de57a51557151dcd8326ad85fc222",
                        "timestamp": "2021-11-05 10:05:22"
                    },
                    {
                        "value": "7b49f047eb0a21b47ba3f338b06dc44ca92edd2cbdb3ec8331607e0936853afb",
                        "timestamp": "2021-11-05 10:05:22"
                    },
                    {
                        "value": "72851da0f9d074beb117fc461ded94ec4a7a277fd721e7de612865c87843b7a2",
                        "timestamp": "2021-11-05 10:05:21"
                    },
                    {
                        "value": "f79412ec29c72821c3f681482030d757cc93d50ebd4f8b167084196dc9498856",
                        "timestamp": "2021-11-05 10:05:20"
                    },
                    {
                        "value": "c5200b4e22e044a73e134b75078158c5ed57bd9064bc934d8eeabeb5d9aa7848",
                        "timestamp": "2021-11-05 10:05:20"
                    },
                    {
                        "value": "b051405f6ffe6d96776b42cb21dffcf1a4a252a74d55df0ecc7f1f8a09d35dba",
                        "timestamp": "2021-11-05 10:05:19"
                    },
                    {
                        "value": "6ede276fe2de00fd0e41f68d18847458b47a4e88314821b625330b8f6a9dee8a",
                        "timestamp": "2021-11-05 10:05:19"
                    },
                    {
                        "value": "069dd2085c81f8b4e23a89fae6585ef5d4cb753e96deb10b92bc93315ea6d143",
                        "timestamp": "2021-11-05 10:05:18"
                    },
                    {
                        "value": "2f52494c903b017c932dbc50f0802a8c7b6ffd92968b526152227f4ff5814d14",
                        "timestamp": "2021-11-05 10:05:18"
                    },
                    {
                        "value": "093c0aaea913422f6833e0d5461917ca4200f380924cd7efce5979b8d60e3fb7",
                        "timestamp": "2021-11-05 10:05:17"
                    },
                    {
                        "value": "4a4ec9dcb9a0c8d0f462b99611acaa34c87480ae51854a4d65d8566467fcb68f",
                        "timestamp": "2021-11-05 10:05:16"
                    },
                    {
                        "value": "08f56c03f3d56d725a76ecfd093fa51b4d48947fed3613c43de757046d775152",
                        "timestamp": "2021-11-05 10:05:16"
                    },
                    {
                        "value": "db081da16d6193a46b9286b07e91d19818f1ab83f1228f00132af7f0a2dfeda7",
                        "timestamp": "2021-11-05 10:05:15"
                    },
                    {
                        "value": "6fd1ca5c316f3dce60f2f10a5cf5892b01c97a4861c7ca7533d2195841088c72",
                        "timestamp": "2021-11-05 10:05:14"
                    },
                    {
                        "value": "76b7a0e5b861057b29d66ede233be5e1c2afd2a2f605d4219653b555694d4b32",
                        "timestamp": "2021-11-05 10:05:14"
                    },
                    {
                        "value": "e44c9d5f3fa996b5cbf6fe301eef429967b21b0326cf339b0beaa4755c0dfff8",
                        "timestamp": "2021-11-05 10:05:13"
                    },
                    {
                        "value": "ff7b6adcbfa4015f1263787e7d52a6ae3dbf6a9ec6904a9643cf68067cfc3f4a",
                        "timestamp": "2021-11-05 10:05:13"
                    },
                    {
                        "value": "bfa93a568458baae3d2f66ce7a99d0eaf7db1b867c581c8747bf42fbc315124a",
                        "timestamp": "2021-11-05 10:05:12"
                    },
                    {
                        "value": "521acdd89b295d209a70a23ee60c7968f54347b86be90c316d11d6bf72dc28db",
                        "timestamp": "2021-11-05 10:05:11"
                    },
                    {
                        "value": "698a5d865675b2041ff38a03094025bca7cc1a8c59963da6d299856800c25915",
                        "timestamp": "2021-11-05 10:05:10"
                    },
                    {
                        "value": "48818b1ad75c92ce04d246394c78e8712a82febd537a23a5a4771341fa7c95dc",
                        "timestamp": "2021-11-05 10:05:08"
                    },
                    {
                        "value": "8e78540bea95133e53551d5e27e4467e1cf39e9576b8a8d7be94aee1e1651d5a",
                        "timestamp": "2021-11-05 10:05:07"
                    },
                    {
                        "value": "fa59d0db142372fc6099120a86e73fdef36c1d9fa45c7ee06ce9abdc51b7647b",
                        "timestamp": "2021-11-05 10:05:05"
                    },
                    {
                        "value": "5d079a72a241e6635c57269d618ec4bb5ac0f46c6714cfca68def78fe29a558b",
                        "timestamp": "2021-11-05 10:05:03"
                    },
                    {
                        "value": "2bdfdc3d30d6026ce8dcb045b0a82bf7f470bade05e08a9ff532d3ced2182510",
                        "timestamp": "2021-11-05 10:05:02"
                    },
                    {
                        "value": "a9de2b67fb84a37ae4aaba3f80185a194a6dc6a214cd4f2a637abe92d5e97ae8",
                        "timestamp": "2021-11-05 10:05:01"
                    },
                    {
                        "value": "2ed8554527586e9a43c6e0b93840ff3d7eaeb2f0fa9e91e617d48b66b35e01f3",
                        "timestamp": "2021-11-05 10:05:00"
                    },
                    {
                        "value": "d4e60be58e3d1ca282c6084e52d8a690996873a448071733372b600c562ccdd7",
                        "timestamp": "2021-11-05 10:05:00"
                    },
                    {
                        "value": "684556961d2f442dc604941ed5b82eb3ec54d5c32df4ad2cf971053eeedbf5ba",
                        "timestamp": "2021-11-05 10:04:59"
                    },
                    {
                        "value": "84e1b4662614a28fcb30dead3c19b1211cbf2741e067ee280a3d6af130c78897",
                        "timestamp": "2021-11-05 10:04:59"
                    },
                    {
                        "value": "fb53cd24c4799e24ea62cfed64979529347c9c0442a92fab5a0b3926fb581fe4",
                        "timestamp": "2021-11-05 10:04:59"
                    },
                    {
                        "value": "7153efb5be53f4c83ea385faef94499a29fc588f1a39dfad2ab1fc6a9b06910b",
                        "timestamp": "2021-11-05 10:04:58"
                    },
                    {
                        "value": "05f0bed48d8b605c7d424bbd645b215705a7cb9b28fdc2396d6e9e7d9e91edea",
                        "timestamp": "2021-11-05 10:04:58"
                    },
                    {
                        "value": "1025112d4c22dc05c16e8d00ae16f11d997cae5fc09c84eacd953b2757b1dd08",
                        "timestamp": "2021-11-05 10:04:57"
                    },
                    {
                        "value": "14f004b7e10376d709bc6ecb17db4e38f96db2f38ff81addcc30561711aa19fd",
                        "timestamp": "2021-11-05 10:04:57"
                    },
                    {
                        "value": "fb86299adf1f713651e72e65dc50684bc8d1cd08ac4c34986561d266d4e8a01b",
                        "timestamp": "2021-11-05 10:04:57"
                    },
                    {
                        "value": "bce1ece23dd513c857bbac40ec207ec9b244521d2d73982ac40faea0ec89e3b2",
                        "timestamp": "2021-11-05 10:04:56"
                    },
                    {
                        "value": "51fbab87d2391ff272d609415f798ae058bff435d729d9b70407d7ed9e3936bb",
                        "timestamp": "2021-11-05 10:04:56"
                    },
                    {
                        "value": "49dc22fdfd1c2ef285cbc7280e5dc6dd2a8d734ffc4134d702f7ca4b0d99ccd1",
                        "timestamp": "2021-11-05 10:04:56"
                    },
                    {
                        "value": "b1088b47be5c2162e81f605cf2421887b1f2214ab92298a6e67c1d4553b3c016",
                        "timestamp": "2021-11-05 10:04:55"
                    },
                    {
                        "value": "74e7e81e893e08aee2f1beb17f16475d17a7777da6544a9baeab958f8d174ab7",
                        "timestamp": "2021-11-05 10:04:55"
                    },
                    {
                        "value": "b467d9cc6bf2476e3829497b826e11ef4b65bc4ba0942facd714d514809a44ce",
                        "timestamp": "2021-11-05 10:04:54"
                    },
                    {
                        "value": "ea60237e78eb4a0d68b5b6a44ab869983d171a398262e813ed8cd46ce159b1d2",
                        "timestamp": "2021-11-05 10:04:54"
                    },
                    {
                        "value": "bdf2e8d777f24d40a7271d430b9f1da2873ee6985a6cd6953f6f8a230f633ada",
                        "timestamp": "2021-11-05 10:04:54"
                    },
                    {
                        "value": "c0cfb07fa680657a4b8b314b2ea7f79606e418b523bb9c144201334625dc1faf",
                        "timestamp": "2021-11-05 10:04:53"
                    },
                    {
                        "value": "19c9fa0eeeee85118d4d018467ac10fe882d5d89a98c2b130e5f559f3cfdc103",
                        "timestamp": "2021-11-05 10:04:53"
                    },
                    {
                        "value": "4979af840542b2e74e058b378adb0f3b3afc688fac80c30b142570cf4f29fa1d",
                        "timestamp": "2021-11-05 10:04:52"
                    },
                    {
                        "value": "416214be23a214518a1bc2182b0df232fe946ec8a4c3cf75f6c57851399a1f2e",
                        "timestamp": "2021-11-05 10:04:52"
                    },
                    {
                        "value": "a33e21fe211da4c2bb076abdd72a13c43af3cac6b68e3cb087b809966b5de964",
                        "timestamp": "2021-11-05 10:04:51"
                    },
                    {
                        "value": "e128c29e36852a3cb0458dec3b5fd7a56285200ec9a6b617684cdcc2e0823c58",
                        "timestamp": "2021-11-05 10:04:51"
                    },
                    {
                        "value": "1b21c245f3aa687852d61cd5ab7f1cb59967c42857bd4fbeb352aef8e42fb821",
                        "timestamp": "2021-11-05 10:04:51"
                    },
                    {
                        "value": "e5995cccaf20ab708c8ede306d8ed3508994f38cc112a6d320feefcc83220d63",
                        "timestamp": "2021-11-05 10:04:50"
                    },
                    {
                        "value": "5e01a4a7e6300b7a8bf497776e431e1774b5c37b874d35190abc1188eeafdf94",
                        "timestamp": "2021-11-05 10:04:50"
                    },
                    {
                        "value": "711d5f87b8a75cd2d3db63566a6fa504e6213ef386f7ab3389040d6a8fa09899",
                        "timestamp": "2021-11-05 10:04:49"
                    },
                    {
                        "value": "f595c443fad4e2db51cbdde2d8ff932c2c4a3f4c3942d23989840590f4babe3e",
                        "timestamp": "2021-11-05 10:04:49"
                    },
                    {
                        "value": "8889725682936156d4e89975a2c621ce124f7b1202c5e27da711a7e90df5f569",
                        "timestamp": "2021-11-05 10:04:48"
                    },
                    {
                        "value": "dc596a71649af48257473947c865c65beb6033263d104a2d851d17f1243f8d41",
                        "timestamp": "2021-11-05 10:04:48"
                    },
                    {
                        "value": "151c1c7e5ced59cbf7d686ee1a87201b4059c131c0b83ada15e3b95dba926931",
                        "timestamp": "2021-11-05 10:04:47"
                    },
                    {
                        "value": "50aa6711db3bbbc1819978f975f7826d54fe1ec4088ff8ead72e825b70f08e54",
                        "timestamp": "2021-11-05 10:04:47"
                    },
                    {
                        "value": "d4265b3d10ab33444d6c055d7d894d8556a6871031009554a4158a5381ef9116",
                        "timestamp": "2021-11-05 10:04:46"
                    },
                    {
                        "value": "c643bae95e4b01193b28d1acd52690f09e96ea231542efcc02221cbf9940fdc3",
                        "timestamp": "2021-11-05 10:04:46"
                    },
                    {
                        "value": "16d2ccf4bc1ccd2da6af5120fa171309228cf8e946520838aa3ae35f9e866bfc",
                        "timestamp": "2021-11-05 10:04:46"
                    },
                    {
                        "value": "9e0b0835695fae7497e376fd9534e56daa07912b1173bf081dfa75d5043b21c7",
                        "timestamp": "2021-11-05 10:04:45"
                    },
                    {
                        "value": "242db04b1a28520e397782045e755ebc604d40fad1a56c876a94623f2529a4cb",
                        "timestamp": "2021-11-05 10:04:45"
                    },
                    {
                        "value": "96c1139f6b39838ba1430c328a3c5890be604d64c7fbe38e4a89a462df9b07b9",
                        "timestamp": "2021-11-05 10:04:44"
                    },
                    {
                        "value": "ff9aa87af052cf9b0802c7d82bc0e9b1c0d511933be56740cfa90b03c5bdd8c2",
                        "timestamp": "2021-11-05 10:04:44"
                    },
                    {
                        "value": "d403f83bfaf6c20fa20349cd02c2a76b4f3df499092ff51eacf5c2de5ca3078a",
                        "timestamp": "2021-11-05 10:04:43"
                    },
                    {
                        "value": "8f6eaba3f788e8c6a65fa1bc454f3317aeb60c67c66f5af0ccd2186831f993f5",
                        "timestamp": "2021-11-05 10:04:43"
                    },
                    {
                        "value": "a7e06f298fd4bd768721883a6b17e4ffc3d02d463825f039bee432b2ceb2f70f",
                        "timestamp": "2021-11-05 10:04:43"
                    },
                    {
                        "value": "c390410a0932b875e77ca04128dc51e2da5bfc1aa56a664887a93e6e27759df8",
                        "timestamp": "2021-11-05 10:04:42"
                    },
                    {
                        "value": "9272baa2a3dffa71a5612c68404455212e75cd75fb94a513094af1b9a7ddba92",
                        "timestamp": "2021-11-05 10:04:42"
                    },
                    {
                        "value": "612052690716fddd9d3986ee906a433c5d375f7c762ac0775feb6edb0936101d",
                        "timestamp": "2021-11-05 10:04:41"
                    },
                    {
                        "value": "6dca32bad712a695a284c4352c308776f41d2ed744dc1fcc28c4b599cbadd2c2",
                        "timestamp": "2021-11-05 10:04:41"
                    },
                    {
                        "value": "5dd27f76d0cd132d80624aa20f3a3efc9c09908ebee283443a4b0c1ca150e6bc",
                        "timestamp": "2021-11-05 10:04:40"
                    },
                    {
                        "value": "3d728f7ad3bb5b056d6c9635c9f8843ab63f09ec38597ce80804f966e3d83d94",
                        "timestamp": "2021-11-05 10:04:40"
                    },
                    {
                        "value": "206413d04ffa752e0e76b2b779061a8a605348a8a82bf0e52bf64b031cf0fdb5",
                        "timestamp": "2021-11-05 10:04:40"
                    },
                    {
                        "value": "78f3d841b10e6188e695bbfba1273592d69cbb68394957eb9a9c654fa8d9c636",
                        "timestamp": "2021-11-05 10:04:39"
                    },
                    {
                        "value": "f90d2f0123baa8d44293ec7c9351a5181d2383c359a7a107bbdbd433ddb4d8ce",
                        "timestamp": "2021-11-05 10:04:39"
                    },
                    {
                        "value": "256f51639628ccd97ef7286ae8690153fd36295452b7e7eefcf28c0a92fa3452",
                        "timestamp": "2021-11-05 10:04:38"
                    },
                    {
                        "value": "77fbf49f62a45d2867f0c7f5a44ed2b20a91d96f00099d79a7c2c3e2a21743d8",
                        "timestamp": "2021-11-05 10:04:38"
                    },
                    {
                        "value": "cd60c3ea26ded77e104d853002034597d54aef1ea8cc60f1a143a5ff0afaf2b0",
                        "timestamp": "2021-11-05 10:04:38"
                    },
                    {
                        "value": "738881f2fdee9b37a45b6384fce35ab73470707e0bdccd1822c3ba7ded4dbeab",
                        "timestamp": "2021-11-05 10:04:37"
                    },
                    {
                        "value": "e20ff56f5ac56e3ad79938487396393c891a8cf0bea930f5eb97717c4b5a8b2f",
                        "timestamp": "2021-11-05 10:04:37"
                    },
                    {
                        "value": "722861cdba9052f96974f3480ed2d77d41476c14a4b7e91883b682160e6c78d6",
                        "timestamp": "2021-11-05 10:04:36"
                    },
                    {
                        "value": "a4b7b644181b63d589f912cbade80775f13652ce11bcf7073691887c0c171dba",
                        "timestamp": "2021-11-05 10:04:36"
                    },
                    {
                        "value": "b119f464b0b7c2fe6b90f7b9aa842a01fa2d43aab1a089e1bc37b108a30edda3",
                        "timestamp": "2021-11-05 10:04:35"
                    },
                    {
                        "value": "b2fa64e962594a9cbb7c82e65115fb226e81ee24106d2c6c869d5686d2504851",
                        "timestamp": "2021-11-05 10:04:35"
                    },
                    {
                        "value": "59139131ccdf8dfd4637e771544e259bc2de11e9b70864dc243a4bd60ac17ffc",
                        "timestamp": "2021-11-05 10:04:34"
                    },
                    {
                        "value": "4832f9010d9ad58bf56a71373e6d5a56c9a4053544a500663fc63c26219cd930",
                        "timestamp": "2021-11-05 10:04:34"
                    },
                    {
                        "value": "9ef77129220a9320c48cc26b579671735073be6aea718e8f16203519653fa25a",
                        "timestamp": "2021-11-05 10:04:34"
                    },
                    {
                        "value": "a196ddf78148a8e603a2cfb880c18373d51cbcfadf0063962343480bcf733877",
                        "timestamp": "2021-11-05 10:04:33"
                    },
                    {
                        "value": "421a982a81a0586070ea033c6b2b3624fb25bd39477d470ea03bc9193ef1d629",
                        "timestamp": "2021-11-05 10:04:33"
                    },
                    {
                        "value": "15f9084de4835bd7cddf5af8a3ece5a348bb733cf33fbaaa1942b0dab87889a4",
                        "timestamp": "2021-11-05 10:04:32"
                    },
                    {
                        "value": "28c0fa861879c082aa111fc26da76a0f0e106a2db28dd2685640ec25e5db2fad",
                        "timestamp": "2021-11-05 10:04:32"
                    },
                    {
                        "value": "a85c5bc4d5540a91a196da00390e4686d5591d6880ee519e0fbde95958ef8221",
                        "timestamp": "2021-11-05 10:04:31"
                    },
                    {
                        "value": "26ac1ab4b5b3336a94582b294b70465c2f93cc8a92eae653d38a6672be16c278",
                        "timestamp": "2021-11-05 10:04:31"
                    },
                    {
                        "value": "fd0172752afa0a5266a81d22f520923b2f03df4c60ac0bbc208e6973c52d5132",
                        "timestamp": "2021-11-05 10:04:31"
                    },
                    {
                        "value": "1dfa88bda677f73e8e11cc20ddf6fedadc2af1c5407d0f8ae1376e8ffc00b3a5",
                        "timestamp": "2021-11-05 10:04:30"
                    },
                    {
                        "value": "909705c10b5c2cc4fdc373dde50ae04820cca2d9c3494c8e2a924e27aa36f892",
                        "timestamp": "2021-11-05 10:04:30"
                    },
                    {
                        "value": "dc4cef85a3473042f7bfd914a9272021b860455143deb25a9c8a0da1bdca65ef",
                        "timestamp": "2021-11-05 10:04:29"
                    },
                    {
                        "value": "64576c5646ce651cb7469e1fc59a5fce804e52abf136e962317f4ab742cbf5f9",
                        "timestamp": "2021-11-05 10:04:29"
                    },
                    {
                        "value": "b40047e8ba429609def57f63ece8f74aa30fed82bd4aa8739f5601a9b627764d",
                        "timestamp": "2021-11-05 10:04:28"
                    },
                    {
                        "value": "faafbf4b1cbecbadea80695e3ee06d68c4363bb34e01bc9551ea0886b3f0467d",
                        "timestamp": "2021-11-05 10:04:28"
                    },
                    {
                        "value": "abee6fb0c783479921728dd5e70284bf73d48e94fd1286edd02c71db185432fb",
                        "timestamp": "2021-11-05 10:04:28"
                    },
                    {
                        "value": "35893d6f56e982cd28dac2ba2fa93e5692e3f87322120056277cadbc6bd79977",
                        "timestamp": "2021-11-05 10:04:27"
                    },
                    {
                        "value": "9d32a79ed403fbe00898eac0594a7b65face47f82674157e136918732cd284f9",
                        "timestamp": "2021-11-05 10:04:27"
                    },
                    {
                        "value": "725c2cc431bc8a88d1ea8d9313e43c2758ed34fe6a5dc8b8c350ec1a1a3735bc",
                        "timestamp": "2021-11-05 10:04:26"
                    },
                    {
                        "value": "24fca98415be053fb735a9b1e9a1c5baffb0b19f004b878c89c75c30748393f9",
                        "timestamp": "2021-11-05 10:04:26"
                    },
                    {
                        "value": "a214418f669e1cf37cb25df346eefaf46cef059334d15026ccfbe09e065ebb0c",
                        "timestamp": "2021-11-05 10:04:25"
                    },
                    {
                        "value": "32eb8144742e9e6d4e219f625b6021d412079591c06eaae34953a7826469a41f",
                        "timestamp": "2021-11-05 10:04:25"
                    },
                    {
                        "value": "2265a20f59acb59ac4a3d3847b5cfaef3ce3222b0c3ba6c1953c875fe86959dd",
                        "timestamp": "2021-11-05 10:04:25"
                    },
                    {
                        "value": "fb0f4678385912d889496f40f84d6fc06f61fcbb5d627b5f38bca8882a22f4f7",
                        "timestamp": "2021-11-05 10:04:24"
                    },
                    {
                        "value": "e75d9058b041161e9857dc8f66be1c5ea659e97ed33b6a1144c915e918c7d6fa",
                        "timestamp": "2021-11-05 10:04:23"
                    },
                    {
                        "value": "7bcc23952543673c4de7a1d2b06b6e04145f6b9764de9d8cbf0db517265c0e90",
                        "timestamp": "2021-11-05 10:04:21"
                    },
                    {
                        "value": "83fcf876e9c99ecff6885ec29890e820ab4dd882fdf3aa23c69521a30ba0a1ce",
                        "timestamp": "2021-11-05 10:04:20"
                    },
                    {
                        "value": "004c419a3f5220bd278376cd9bccbc3e78994a8938a91758c7b36aac7f54912e",
                        "timestamp": "2021-11-05 10:04:20"
                    },
                    {
                        "value": "7d59418a0ec3006273276c0d390a610bed6d3816fad1877c7996118be96fc114",
                        "timestamp": "2021-11-05 10:04:19"
                    },
                    {
                        "value": "46cb032d4822ae200350c9f1c09754220df4dc2a0707a64ac548c4c3c5231ad8",
                        "timestamp": "2021-11-05 10:04:19"
                    },
                    {
                        "value": "d0ca3b66823f09b7d57703bdd487c422c909006a76a9a92af1b7cf43e9c1fd50",
                        "timestamp": "2021-11-05 10:04:18"
                    },
                    {
                        "value": "3621cd6eb7de523ef442a8770f34ccaca6d6d0c1bdd41d14968b877919d1b350",
                        "timestamp": "2021-11-05 10:04:17"
                    },
                    {
                        "value": "36d11ef8872648fe7f503f8afcf988c42f5d628168a25aa0ccf52172f85daca9",
                        "timestamp": "2021-11-05 10:04:17"
                    },
                    {
                        "value": "005dc4fbbfccb96b6ec62effa07c84262930a76569529aeb2f6329ee8986c90f",
                        "timestamp": "2021-11-05 10:04:16"
                    },
                    {
                        "value": "b961e0899cfdbe0a0e0c1794f0ffbaddca041c880d4be6eb35ae334e70e57469",
                        "timestamp": "2021-11-05 10:04:15"
                    },
                    {
                        "value": "b3e3b40b97cc9d863c3e7e81286f13b10b6bde918adf2eae4c91cf060ecdc0e5",
                        "timestamp": "2021-11-05 10:04:15"
                    },
                    {
                        "value": "b87fa395c4435b45a4699fb01410139a38743536dca68d6f64f886a289ab1531",
                        "timestamp": "2021-11-05 10:04:14"
                    },
                    {
                        "value": "e8365e7732bdfc4d20d9a5dcdec193a2b4255c707caac7481b70895a78a54ce0",
                        "timestamp": "2021-11-05 10:04:14"
                    },
                    {
                        "value": "47e9d99b5c65ca87c45594319025ea489325313903b0972a5f72b2e6922a0e27",
                        "timestamp": "2021-11-05 10:04:14"
                    },
                    {
                        "value": "9e05ef74fc05a82963b31518c6221dc295f8e2a86e72ed387f7b87f8aacfdcbf",
                        "timestamp": "2021-11-05 10:04:13"
                    },
                    {
                        "value": "687a401007c29ee595004d93c4dd5de6c5c9f86f811f8e1d9f1ad1962507cd65",
                        "timestamp": "2021-11-05 10:04:13"
                    },
                    {
                        "value": "d51b45ad9fd852376b24508d854f85671bca267937929c1d061b6a485d8182d4",
                        "timestamp": "2021-11-05 10:04:12"
                    },
                    {
                        "value": "7902ce287c43d660337d2c0340cc5b73c63f8ce5b72794c80d3d0771c3129556",
                        "timestamp": "2021-11-05 10:04:12"
                    },
                    {
                        "value": "95799f0710ef589b3bfa0881533cf309be1894acad765730fa32bbaf670aa7c9",
                        "timestamp": "2021-11-05 10:04:12"
                    },
                    {
                        "value": "d1cc41767e93a59e984cc59d304f65cd65a0a4575bda73e13860420f647d3ec9",
                        "timestamp": "2021-11-05 10:04:11"
                    },
                    {
                        "value": "3369a07433125836b1a4ab0eb498a26779375d90c3480b98692a1e418b7e1202",
                        "timestamp": "2021-11-05 10:04:11"
                    },
                    {
                        "value": "8dc0aa3a4b6d34b0da0dfddba9abbfe5319b7a67cf4f80ed6e04f156d8530615",
                        "timestamp": "2021-11-05 10:04:10"
                    },
                    {
                        "value": "0c40153f30de7d5496536469625ff1906512dd40e756012c4798b87177eae748",
                        "timestamp": "2021-11-05 10:04:10"
                    },
                    {
                        "value": "c07c8cd6d0b564614698b1f5250c244f1be6c6439f7248e4ae7fd809a65fb8e5",
                        "timestamp": "2021-11-05 10:04:10"
                    },
                    {
                        "value": "22200655fef8b713d8cce9e64022c3ed4eabf94f48cd891dbc0184754b3c55a7",
                        "timestamp": "2021-11-05 10:04:09"
                    },
                    {
                        "value": "43c7cce08c6d20ef028e24b6254675d6aacae6a01a94e6f6c8e4411d07958a4a",
                        "timestamp": "2021-11-05 10:04:09"
                    },
                    {
                        "value": "8812447847d998143571a0fb8ddcce941e4108ce09706c259fe9b2a8aa719a2a",
                        "timestamp": "2021-11-05 10:04:08"
                    },
                    {
                        "value": "d242a701fcdd957b239550808d4e9b056dfb87edcea47b06414ed33c3827d99f",
                        "timestamp": "2021-11-05 10:04:08"
                    },
                    {
                        "value": "2a4c4d9bfdefcd60d6cf4d379c9098ff5795a5ff6b3d0fb484ca1a7a6d870ebe",
                        "timestamp": "2021-11-05 10:04:08"
                    },
                    {
                        "value": "541a0e78311adef7541f092dd23d85eb357802530cd75191d11d1d90d42be5ca",
                        "timestamp": "2021-11-05 10:04:07"
                    },
                    {
                        "value": "b8b874e56aed0a003b805b6b446dd0c76c87eb0e74154d8231a5b39bc63a90e9",
                        "timestamp": "2021-11-05 10:04:07"
                    },
                    {
                        "value": "128d20314a439bfd5ab5839c67e3bb98fd8e4d31cbc4d80392249796ad183ab4",
                        "timestamp": "2021-11-05 10:04:06"
                    },
                    {
                        "value": "366947053579c0f527ccf2121793e54a2803f8be07650670cd21396a83e38fb5",
                        "timestamp": "2021-11-05 10:04:06"
                    },
                    {
                        "value": "66d339a13415bfb0c38ad3eab3f8e0f43a038b62aba9aa65c363fa0b973b9c70",
                        "timestamp": "2021-11-05 10:04:06"
                    },
                    {
                        "value": "340920d6b3ac5104c05ba1033e963c03019bb8fac4bf47affc7790c07126211f",
                        "timestamp": "2021-11-05 10:04:05"
                    },
                    {
                        "value": "a0dd4970caa2201787796e8f6a7fc9788eb26117e0fbfc06546d85c1cc2196ed",
                        "timestamp": "2021-11-05 10:04:05"
                    },
                    {
                        "value": "81633ed55575b29b9b7f8cffbd44f618054228e0f68de321e30ffa1f52965eb0",
                        "timestamp": "2021-11-05 10:04:04"
                    },
                    {
                        "value": "3a3909a9b3e89fe07fe997bb341771064cb394398d0b22fd3e5c338c6d6b8f33",
                        "timestamp": "2021-11-05 10:04:04"
                    },
                    {
                        "value": "22ae2670d5701e6b26fc4b286bb2a7ef17318ee98b33456ef0b53ee9d0c2050c",
                        "timestamp": "2021-11-05 10:04:04"
                    },
                    {
                        "value": "f7a91b3fa7976681f89316cd651321966d1de9d3a1778fa62306e60585c804a9",
                        "timestamp": "2021-11-05 10:04:03"
                    },
                    {
                        "value": "3ccb569611be0aa857b39409ec112b73fc848bb391fddd569a7228cdf190066d",
                        "timestamp": "2021-11-05 10:04:03"
                    },
                    {
                        "value": "51ce0554f54e0c43d5d505197bd309b4391fd9ed917cbe33cd01d696ce78b6ee",
                        "timestamp": "2021-11-05 10:04:02"
                    },
                    {
                        "value": "581a36f49be6c528602bb8dc566fe78cb63992a772de79f930bdc68ffa47e985",
                        "timestamp": "2021-11-05 10:04:02"
                    },
                    {
                        "value": "730270b25fceb26fc829971b772e537cf86409b1fd92e294da741efe4328327a",
                        "timestamp": "2021-11-05 10:04:02"
                    },
                    {
                        "value": "0f56cd65366c3e332cbc74c4d30471c4069891f50ce40325d13e35989af96e83",
                        "timestamp": "2021-11-05 10:04:01"
                    },
                    {
                        "value": "d9e532e5068be62e34138b05e3cade26d08e3bd7cb0dceb1b97feb2e0a38f23d",
                        "timestamp": "2021-11-05 10:04:01"
                    },
                    {
                        "value": "36718a07f805b4a6cc01daf1fe5ad5f05c179e783789b5bfb2935e7151b8fbf9",
                        "timestamp": "2021-11-05 10:04:00"
                    },
                    {
                        "value": "e8ea8b416d94937b326addb829c553fc2d2ecd874beb9902eccef157bfa3eb64",
                        "timestamp": "2021-11-05 10:04:00"
                    },
                    {
                        "value": "2ccbd008187464779aa60ff5514f61773e43e95ab4e57d4f9b1c0c0a18e0fab7",
                        "timestamp": "2021-11-05 10:03:59"
                    },
                    {
                        "value": "87e9dfed06bef865cd4ba0b2bac80eac1deab423322829774cd94a2fdadd08b7",
                        "timestamp": "2021-11-05 10:03:59"
                    },
                    {
                        "value": "fdcfbdf141513ef7ae90cb459f6c334041e400ffa6f1ef9c7a77ca94e924fd9e",
                        "timestamp": "2021-11-05 10:03:58"
                    },
                    {
                        "value": "1734d2ae713142892c73f6e3936b40f87d6593919a8e58387c6fef05e34dcb1d",
                        "timestamp": "2021-11-05 10:03:58"
                    },
                    {
                        "value": "994b91d82d5e1bca07a7a41617603506cff8eb860caffba297fbbf3e77e6c408",
                        "timestamp": "2021-11-05 10:03:57"
                    },
                    {
                        "value": "6bd4e02b21d6664d3c486d4519e705daf4db5a3ea819409e1fcf2f55fb1b8748",
                        "timestamp": "2021-11-05 10:03:57"
                    },
                    {
                        "value": "a701366d7586326139e8d626daaef8feceff0c2015951ced088a28680e0887a6",
                        "timestamp": "2021-11-05 10:03:57"
                    },
                    {
                        "value": "0e614276df13e0f63efba41834680056171497041687787de79c450672f00b40",
                        "timestamp": "2021-11-05 10:03:56"
                    },
                    {
                        "value": "205c91509e245fc73854a95d6df2167ccb3c8278850997197161d8c6a72f5676",
                        "timestamp": "2021-11-05 10:03:56"
                    },
                    {
                        "value": "0df04093f35813f99cd1f3c087bcfca9b6c4671c2c6c13ea8004cef89af304d1",
                        "timestamp": "2021-11-05 10:03:55"
                    },
                    {
                        "value": "5e25a1e1a3018a1b75e493530a0c330b88b9a4cb6028a5de908f3885014cb4c0",
                        "timestamp": "2021-11-05 10:03:55"
                    },
                    {
                        "value": "1a41f16e4e6a8c37fe7c1a77eade4a8db6e97c4bd0436da4215bf5a618aedf5f",
                        "timestamp": "2021-11-05 10:03:55"
                    },
                    {
                        "value": "d6c7370709c67e2e50ac97a228e7d578dd150d7129f1c4980b6c8c00b1ba099a",
                        "timestamp": "2021-11-05 10:03:54"
                    },
                    {
                        "value": "dbe61a44613314247a117d0f15cbaedb9f7834b487bca25e04711a91e295294c",
                        "timestamp": "2021-11-05 10:03:54"
                    },
                    {
                        "value": "057863ff416e40fd2d6cacd3abd88b7d752c17b65c5dcb6c263c8b57ba072c02",
                        "timestamp": "2021-11-05 10:03:53"
                    },
                    {
                        "value": "6a2600eadeec393a681f8264f51ea1387e0e3dca3902526b25d70ae63e8a4ef7",
                        "timestamp": "2021-11-05 10:03:53"
                    },
                    {
                        "value": "7cb73a464e77438195f5c761273c427b85764ca92ac2cdbc3a38933196e1b2e0",
                        "timestamp": "2021-11-05 10:03:52"
                    },
                    {
                        "value": "0c342c00ba0fd24de77fcdbd0ad3dfe136225e288656723a3e818cb758f5ff77",
                        "timestamp": "2021-11-05 10:03:52"
                    },
                    {
                        "value": "1d19a3f60119c2fb8e8ea0755e0cbb223dc6a8e6fef3e248c31867bb6b7a0033",
                        "timestamp": "2021-11-05 10:03:51"
                    },
                    {
                        "value": "e91a1c6cd305bafbc363c6947029525c94898ae1d86705a98d5a111f568689c6",
                        "timestamp": "2021-11-05 10:03:50"
                    },
                    {
                        "value": "f257ca0d46001c3965a186e50250031495372ed709a60e6c646d12506a445647",
                        "timestamp": "2021-11-05 10:03:50"
                    },
                    {
                        "value": "28be0103bccce23d87f046daf3cf2234f0d6e67142ba0f35aaefabbbd46db23c",
                        "timestamp": "2021-11-05 10:03:49"
                    },
                    {
                        "value": "fbd402b3e63a874a0e5e62efff6351b0dbb087d8c80d494401b67f37eba01295",
                        "timestamp": "2021-11-05 10:03:49"
                    },
                    {
                        "value": "98b951c12284b1c0eb6939447f9613821243816f1fe2bb51832f3589ebbe71ee",
                        "timestamp": "2021-11-05 10:03:49"
                    },
                    {
                        "value": "6e478fefd1b4020127d8c1b238228943bb3ef5b8334aa71519bde872f9932a9a",
                        "timestamp": "2021-11-05 10:03:48"
                    },
                    {
                        "value": "49a20a392f1ad7e0c7cabd3d27ab07252b6a4e2c4ab7ff5373baa6117412666b",
                        "timestamp": "2021-11-05 10:03:48"
                    },
                    {
                        "value": "d55a0332ea1c4bc693fe9091006f2fab594394d0492d14b7f8c67fb5979fe5f4",
                        "timestamp": "2021-11-05 10:03:47"
                    },
                    {
                        "value": "6f4506523aa4272d94e68a3b0840cb6d5548bad8566c31559931e83384f6b2ce",
                        "timestamp": "2021-11-05 10:03:47"
                    },
                    {
                        "value": "bed35a8bf998a3be8d942a71a4ab14645aed4f9660662fee00d00e620c595a57",
                        "timestamp": "2021-11-05 10:03:47"
                    },
                    {
                        "value": "a80272dc6e1836e7f82eede17ac12c529eae5453e23ee8eff1753312df61baca",
                        "timestamp": "2021-11-05 10:03:46"
                    },
                    {
                        "value": "d9d730e62ebe22ded0faac51cccce866dcedddc76925789bbf20f458649869d3",
                        "timestamp": "2021-11-05 10:03:46"
                    },
                    {
                        "value": "5ba1f5e5ef7a84d7494a5069c49f961ce71434ddd6e6b750aa66fb3bbebe47e4",
                        "timestamp": "2021-11-05 10:03:45"
                    },
                    {
                        "value": "7ad7ee7cbfd72fd6da57c0c6bde5b526e5c3d05e4ebcd5715ef87e8bfc30be9a",
                        "timestamp": "2021-11-05 10:03:45"
                    },
                    {
                        "value": "7abe333fc5a66499ac71d52b306b91bddd9bcb8567f86550f6fb2878e8aa57c3",
                        "timestamp": "2021-11-05 10:03:45"
                    },
                    {
                        "value": "899c5e485cfc1501da448d5eafedc38d84e720cc7120a1eb42cac3840ea7bdc1",
                        "timestamp": "2021-11-05 10:03:43"
                    },
                    {
                        "value": "323fa2145d8faad622fcbc2743d7f61602806dc5c009ba513e0601ab66cb88f5",
                        "timestamp": "2021-11-05 10:03:44"
                    },
                    {
                        "value": "067796a8b95c891e81db6b9cadbc0304881718c37821b26dea35a524b25c627a",
                        "timestamp": "2021-11-05 10:03:42"
                    },
                    {
                        "value": "ec67cd332743416741002d4e43558a1542d46e70af8491b4680f7b37f7fa8ea1",
                        "timestamp": "2021-11-05 10:03:42"
                    },
                    {
                        "value": "cb7519aa4be0fc3df76c09db0043ec38bdebf5fe0bf1aab6761174a09d7b334d",
                        "timestamp": "2021-11-05 10:03:41"
                    },
                    {
                        "value": "58c4d518b6f6923297c5ccfb13d1f2f1e8b7a9d7b205acc68f53e14a8b88c9ea",
                        "timestamp": "2021-11-05 10:03:41"
                    },
                    {
                        "value": "cf6688c01f1eea1939fdeec6b804de3eb96b56fa3e64bd0b7f7acd22d0068d80",
                        "timestamp": "2021-11-05 10:03:41"
                    },
                    {
                        "value": "f2a9fe90aa5369f31507c698e0c3375eb2cac7f6ac22f985c79dea36667c32ed",
                        "timestamp": "2021-11-05 10:03:40"
                    },
                    {
                        "value": "15dc38acbda31d50f8a18d170bd4cb2e3e2d6b223e5a71ff88956bee8fe47ebc",
                        "timestamp": "2021-11-05 10:03:40"
                    },
                    {
                        "value": "b604c30c6a8784755596526eaeaf3993b6171c657003dc91f2a1a134ea0a9db7",
                        "timestamp": "2021-11-05 10:03:39"
                    },
                    {
                        "value": "80ec2730751774632f8be96cceeccde7be00aad8cf9b74d4e1cbccb4f5e031ac",
                        "timestamp": "2021-11-05 10:03:39"
                    },
                    {
                        "value": "63b733d2b6e677e59bd1879961042f4e4ba6c0a0b0ee0866172542596c74caa7",
                        "timestamp": "2021-11-05 10:03:38"
                    },
                    {
                        "value": "42bad6764217b25eed1b3bfd2eaa8d0c304830b6ece9441d7b4136e80c249747",
                        "timestamp": "2021-11-05 10:03:38"
                    },
                    {
                        "value": "83adb907127ed13a7d6de57a231c44a17093ef6c65fb7d12bb5ad43faf8fed22",
                        "timestamp": "2021-11-05 10:03:37"
                    },
                    {
                        "value": "42965f79b8aca9d1e01fd3306506426fbc0dd39ee93d9b2b2d3848f8b33741ee",
                        "timestamp": "2021-11-05 10:03:37"
                    },
                    {
                        "value": "b58af941c69e2479cb98e6c5164333853e77d598001e15c7432b9a8f809882a4",
                        "timestamp": "2021-11-05 10:03:37"
                    },
                    {
                        "value": "84ef4a82ef95bd42f4ffef4c55d31abe91ea6030764a5f3935dd2fc59e9f8e73",
                        "timestamp": "2021-11-05 10:03:36"
                    },
                    {
                        "value": "093ec159670a83c8d651dc90446db8ab4a09ccf98a2d6e0cc6496b05d3b474e2",
                        "timestamp": "2021-11-05 10:03:36"
                    },
                    {
                        "value": "4494d52c86b77031a3f821edd8eb5829c953b5ae8682d77d5d06c2c0eabd0b6a",
                        "timestamp": "2021-11-05 10:03:35"
                    },
                    {
                        "value": "d0ddf6c2eaecfc53485f18368561d71633d0aa6ad17ed97b38ce06f1ac49d2df",
                        "timestamp": "2021-11-05 10:03:35"
                    },
                    {
                        "value": "b6ca6b750eb13544ab18c1a51d6778db96add3a94df579b905f74e40f63e0e75",
                        "timestamp": "2021-11-05 10:03:34"
                    },
                    {
                        "value": "1b7a50605ae26166b68efa455605ee3a77df4e6029964c0bf9b0c7b85d0bfad6",
                        "timestamp": "2021-11-05 10:03:34"
                    },
                    {
                        "value": "c69cc61c4d09824db304ebf84eb8b4c426686cbc5afc7246e18950a2f545200b",
                        "timestamp": "2021-11-05 10:03:34"
                    },
                    {
                        "value": "01be6746a0ec0be412f91f8a16d2e1e880a748fbfa02afa71e6feaaf9388cb62",
                        "timestamp": "2021-11-05 10:03:33"
                    },
                    {
                        "value": "49a68d28069ab21a0435c789f702591c55080bf52d5c9c66fd3c5c36a84414a7",
                        "timestamp": "2021-11-05 10:03:33"
                    },
                    {
                        "value": "eb8f8cf868ff2fd6b97bb18712b3511cdfe9a8f76029772a6801e6947c6aced5",
                        "timestamp": "2021-11-05 10:03:32"
                    },
                    {
                        "value": "df46770dbf17062856a78f2036d5f8b887817f892f5ad51eb431b7685fd399a2",
                        "timestamp": "2021-11-05 10:03:32"
                    },
                    {
                        "value": "5a5b4ffdb3a295fc97667bce8b736ac78801d3dd40dcdebd6bc12fb5ad29ad95",
                        "timestamp": "2021-11-05 10:03:31"
                    },
                    {
                        "value": "bc32d4249127c0d94c26a52f6892ac90adc790f5fc82f971dfe310aea6093396",
                        "timestamp": "2021-11-05 10:03:31"
                    },
                    {
                        "value": "0bb4136e4d13afdfeb03308ced431601e3d1680af6b4e60df3a2695318a30e2d",
                        "timestamp": "2021-11-05 10:03:31"
                    },
                    {
                        "value": "66b490dc1c26d5db4aef09cc859f88bb6a525c39b6b233261cb0bbb2e6cfb06e",
                        "timestamp": "2021-11-05 10:03:30"
                    },
                    {
                        "value": "a87c9fdbd179da286af8677f95109ea5eb9de295e6ba93a5330e95d7c13fee7d",
                        "timestamp": "2021-11-05 10:03:30"
                    },
                    {
                        "value": "b3a3990cdbaf325b7d521612b43d3282adce7039209b2e2de46f216b2e82cb70",
                        "timestamp": "2021-11-05 10:03:29"
                    },
                    {
                        "value": "6c3df065f7c7c462acb025e6b6b4663079cb5e40cdc879bd671817d530a2476c",
                        "timestamp": "2021-11-05 10:03:29"
                    },
                    {
                        "value": "28925185258db669b4d6e51bbe4f4caddc4acbefb19dd549598f27608292a042",
                        "timestamp": "2021-11-05 10:03:28"
                    },
                    {
                        "value": "2b93fe86ee49cf9df6a660cf9b85786656bd051d33d2f21483edd75149d2352f",
                        "timestamp": "2021-11-05 10:03:28"
                    },
                    {
                        "value": "d420a36bebbdeb9f1de119f22390bf7b275dafe211d58c49e9289fae65b3febe",
                        "timestamp": "2021-11-05 10:03:28"
                    },
                    {
                        "value": "8add5c0e7054a2f4adaeef3f460da977a1470cab2cfb9ea155930203d227861a",
                        "timestamp": "2021-11-05 10:03:27"
                    },
                    {
                        "value": "4ba863dc95f46a4bb6fdc8f2d718b00062f03ca99a9099cbc7ce63bc336ce550",
                        "timestamp": "2021-11-05 10:03:27"
                    },
                    {
                        "value": "9637e5addeed710c18f96566d9cdacd7f5dd91094cda2dc5189c9cae874f7ee8",
                        "timestamp": "2021-11-05 10:03:26"
                    },
                    {
                        "value": "98ee67cf7e971d140f6e607f1cb1486e31e2b6b3090a744355b3bfec44270786",
                        "timestamp": "2021-11-05 10:03:26"
                    },
                    {
                        "value": "dbb13a2a6fb38da80041cfcd385aa5e7abab4eff0dfe06a0245f7a1b69834b6d",
                        "timestamp": "2021-11-05 10:03:25"
                    },
                    {
                        "value": "5a91bae1d35c192c6e0c79f79560c3cf44d1225072e776406ee47e2f061d417f",
                        "timestamp": "2021-11-05 10:03:25"
                    },
                    {
                        "value": "cca9aecf3b10d8902e0d2a45a31c0a766d260e9137d61a7e8a657ec5767366c2",
                        "timestamp": "2021-11-05 10:03:25"
                    },
                    {
                        "value": "ff1dfc9a260611666f02dcc2f4213b96de1aaa9420aecceaa3e65ccb1040bb46",
                        "timestamp": "2021-11-05 10:03:24"
                    },
                    {
                        "value": "fa74fe3805720b8a7f80f0d5a1d350d4f099139c900bd0850a354f216e39597b",
                        "timestamp": "2021-11-05 10:03:24"
                    },
                    {
                        "value": "1ef1bc9beadae52ccd07f3a1f4aa87cbcd05be2be11cc45eb355dd4bdef48289",
                        "timestamp": "2021-11-05 10:03:23"
                    },
                    {
                        "value": "ee2518115c31b0113d6ac408428ec3d700878feab6759515772075748a046ab7",
                        "timestamp": "2021-11-05 10:03:23"
                    },
                    {
                        "value": "36b68bddf8eccabc4efc36a98685f020c663100d708142b3de7df0ec5b3d638a",
                        "timestamp": "2021-11-05 10:03:23"
                    },
                    {
                        "value": "2798ec2a5d42c7f5fc7ce8f83a18f13cdd5f73c8b1aace7ad977fe866355e497",
                        "timestamp": "2021-11-05 10:03:22"
                    },
                    {
                        "value": "200c2a2b0cbb352b17b82db12b498d4020903f305ea00420c51b3765bc2bf740",
                        "timestamp": "2021-11-05 10:03:22"
                    },
                    {
                        "value": "7135a8c1c305dc5007d8af0414b1e9c88cb4394b85ff54174d9a4ea950127529",
                        "timestamp": "2021-11-05 10:03:21"
                    },
                    {
                        "value": "b82e2e20572239f28eb91711527bcdf7a5f4ba7ea135af38d4b0fa39317d811a",
                        "timestamp": "2021-11-05 10:03:21"
                    },
                    {
                        "value": "24be675967cc4df2c5546303f63ce478653a8745cd4426bb90e288b03f2ddae1",
                        "timestamp": "2021-11-05 10:03:20"
                    },
                    {
                        "value": "ea6b5f2aaa7b50fe76612273edb2e3704ffd810c6550b616ea8be8a5197826a2",
                        "timestamp": "2021-11-05 10:03:20"
                    },
                    {
                        "value": "e0e7bf584bc1462b7a3dcd18d589fb380147c60a61dc2bbce08a0f84802e153f",
                        "timestamp": "2021-11-05 10:03:19"
                    },
                    {
                        "value": "d4e42de47dbca3c1d6df8101017f0695ab4f425509fb1490a5c3607d03658736",
                        "timestamp": "2021-11-05 10:03:19"
                    },
                    {
                        "value": "0f097bee69efa5055cc5a2a6d5459ed46eb8a23245a9188c2c94b63879463a74",
                        "timestamp": "2021-11-05 10:03:18"
                    },
                    {
                        "value": "510b10bfde61dcf9d90c0d787c412006f555b5f55b1ef5863785cdc6219f067a",
                        "timestamp": "2021-11-05 10:03:18"
                    },
                    {
                        "value": "5b83f172fa0889a78c7970e6861ca1c292bb9c559c96a4ddaa789f4b01f1a82b",
                        "timestamp": "2021-11-05 10:03:18"
                    },
                    {
                        "value": "b50bad3fe04686385889d86ee455f14826db0c56ab935911e918f6522a8b2955",
                        "timestamp": "2021-11-05 10:03:17"
                    },
                    {
                        "value": "84b9d6d7a3bb5754add418b838fc3a7effe455f91a1ed01763d07e4f8caec3b1",
                        "timestamp": "2021-11-05 10:03:17"
                    },
                    {
                        "value": "65e09e1531f692f1e6bb0cb3250a8ef04f1a5d876eabddfa52f7220cc4032946",
                        "timestamp": "2021-11-05 10:03:16"
                    },
                    {
                        "value": "cc9f60d2e9d54803e512b6c6285d576e024c065e72ead66489387e25c2cb129c",
                        "timestamp": "2021-11-05 10:03:16"
                    },
                    {
                        "value": "4f19b107f18471c17a8c15e9d5d169b39346b4647be5f08ceebe0fa469854a30",
                        "timestamp": "2021-11-05 10:03:16"
                    },
                    {
                        "value": "becbb5dcb0ae7a275d1bf19540225669d5137f2426203421dccf863c2e1bf931",
                        "timestamp": "2021-11-05 10:03:15"
                    },
                    {
                        "value": "f5c83ab03d27de9a8a529d575661a41057f772619de4ab60d75d325458bd3f42",
                        "timestamp": "2021-11-05 10:03:15"
                    },
                    {
                        "value": "d059db8e063134ccc4dbf4d8f0094b5016bfce6b34e6f135a34d50443d3fdfa7",
                        "timestamp": "2021-11-05 10:03:14"
                    },
                    {
                        "value": "a7732f246effb0c49c4047b73ea3c339a8e3181c957d6063ca3803ee51d05ff1",
                        "timestamp": "2021-11-05 10:03:14"
                    },
                    {
                        "value": "4cc075dbf06504df6973206947d083782300153ecfcfcd3c2433f74a94c508a6",
                        "timestamp": "2021-11-05 10:03:13"
                    },
                    {
                        "value": "d194936d021120391b745c25f8f14872faf3a252742daffa932a705e7d6f2367",
                        "timestamp": "2021-11-05 10:03:13"
                    },
                    {
                        "value": "6384b7c7dd46c609db559cd20ee00c3cc2146207497ad2fb7acad083d81874d9",
                        "timestamp": "2021-11-05 10:03:13"
                    },
                    {
                        "value": "ef38cc8b7c25c5bff8c2febf812002e093a60fefb1f92c4eed2534f334f55687",
                        "timestamp": "2021-11-05 10:03:12"
                    },
                    {
                        "value": "458275339b839bfdf014a0b1d07ed0500e0f1ee8e3029baaf5b44cae67e3b0a9",
                        "timestamp": "2021-11-05 10:03:12"
                    },
                    {
                        "value": "6ec584c2b95d2777c9e1fafc8b97f00e557ed53355784672cdd9c725478902ec",
                        "timestamp": "2021-11-05 10:03:11"
                    },
                    {
                        "value": "e15e7e1d90b99e665f1c8fd8e0f50537b3816f486164f32b2fb12109d7867637",
                        "timestamp": "2021-11-05 10:03:11"
                    },
                    {
                        "value": "ce405b626e59e45bf43cca1d5dd0b27ffc2226dcfeeb6c3f5d35aad2fa97ce9c",
                        "timestamp": "2021-11-05 10:03:11"
                    },
                    {
                        "value": "7ef41f8286ece86e02a468800fb0d78e09a6f5aa803674b2841a7271608647d9",
                        "timestamp": "2021-11-05 10:03:10"
                    },
                    {
                        "value": "f84c80b6eae9db8a4723df882e6cc17b2446cf8874949091851d2040f534ecd0",
                        "timestamp": "2021-11-05 10:03:10"
                    },
                    {
                        "value": "f96030e970328d373040f9b7cfc9bfae17b73080751a6c226d9f079cbaf55801",
                        "timestamp": "2021-11-05 10:03:09"
                    },
                    {
                        "value": "b1e732b1331d2a1f3c1a7b6506fc010cb7e89d8a1148c3ce4bdf16782a87bbd5",
                        "timestamp": "2021-11-05 10:03:09"
                    },
                    {
                        "value": "8eea5c9bf785ceeecd4e63fdd8e3469776fe5c496ee1c29a7fc7fcc6b81bdef6",
                        "timestamp": "2021-11-05 10:03:08"
                    },
                    {
                        "value": "1efe71e5be432de76c79432171af84b1aceaf15d8c20291679026124031eb177",
                        "timestamp": "2021-11-05 10:03:08"
                    },
                    {
                        "value": "1aa511c8c3d58513ecdecb936593b9c80c38cd15539ef0bcaf8e45a652689fc5",
                        "timestamp": "2021-11-05 10:03:08"
                    },
                    {
                        "value": "c0b3829e2928863e59a7042daa87321711c1586d73260ea9d48359389c18cff2",
                        "timestamp": "2021-11-05 10:03:07"
                    },
                    {
                        "value": "555d5520386baa4667b451bca069c1baa708d79cc707c1e102df37b9607cb004",
                        "timestamp": "2021-11-05 10:03:07"
                    },
                    {
                        "value": "d10f8770ecb05c7eb9014b3f04254e34e7db735c86dbf2acfe1428a2e7462deb",
                        "timestamp": "2021-11-05 10:03:06"
                    },
                    {
                        "value": "ed7309c1dbb791a2368a0cb76dc05646c96ada0a65b318e09296efa9f00a65f9",
                        "timestamp": "2021-11-05 10:03:06"
                    },
                    {
                        "value": "b69777d44f7d4ec7b2bfdef963a66d509ca960e3262ab75bdcf020343ca15167",
                        "timestamp": "2021-11-05 10:03:06"
                    },
                    {
                        "value": "404a0b2d399429edd59a1577a3d2a75788b5718181b28135426c7d5cc13a45aa",
                        "timestamp": "2021-11-05 10:03:05"
                    },
                    {
                        "value": "c7093ae1545fc78373263b13f6de504b7d4ff526ed7c1bb850db6dc031b89eb5",
                        "timestamp": "2021-11-05 10:03:05"
                    },
                    {
                        "value": "66d12bdc6355998791cb1f8a93663886c24207a05a25415e69b038c74b825c0b",
                        "timestamp": "2021-11-05 10:03:04"
                    },
                    {
                        "value": "6ffdac187d2cf0e0684d7c9d47c3ac5d49d89b4f373e845bb03e27aad3c5531f",
                        "timestamp": "2021-11-05 10:03:04"
                    },
                    {
                        "value": "39d350efaff47bdc4717a9323981e172a1ef70a8c97fbde444b1c7ea42bfcf07",
                        "timestamp": "2021-11-05 10:03:04"
                    },
                    {
                        "value": "7ad2747db442843f49a774ea503c7bcf0639938a222e0eea57f6240b2c00a422",
                        "timestamp": "2021-11-05 10:03:03"
                    },
                    {
                        "value": "bf05f22d384efb45b0f51a6bd8203171703aeeac24e475bf59fa5d16413811ab",
                        "timestamp": "2021-11-05 10:03:03"
                    },
                    {
                        "value": "483d551b862ca353422bf8d39d64453f816e5c69807ec3c434b99cc16d727f6a",
                        "timestamp": "2021-11-05 10:03:02"
                    },
                    {
                        "value": "3e481807d421b345b30c759c705eef6cef8fa68595b15660f750191afa6c69fe",
                        "timestamp": "2021-11-05 10:03:02"
                    },
                    {
                        "value": "c36903d476346d2bf4a8d60e1d52a79abe9a503c8341a71d92b335ebce50400a",
                        "timestamp": "2021-11-05 10:03:02"
                    },
                    {
                        "value": "2fd253fc448da4745d96f5d9d3f8cc0d529a5832ab02d9174f3610120d82c8e8",
                        "timestamp": "2021-11-05 10:03:01"
                    },
                    {
                        "value": "7c7c97aa4ecf7269948d7e558b1f39b6e319ef2c9ce2aa9f2012f1a9fe487ed1",
                        "timestamp": "2021-11-05 10:03:01"
                    },
                    {
                        "value": "b02da016ac1a8847feb13c062417faafa77f158b9356c02758dd29f0f541acc9",
                        "timestamp": "2021-11-05 10:03:00"
                    },
                    {
                        "value": "b74ff40cfdd8ced64ebabcff67e64afb34ae1d09cbd99b31665791fdaa128681",
                        "timestamp": "2021-11-05 10:03:00"
                    },
                    {
                        "value": "be3380edbe5ff0be54959def3ef90ae3a618961f4f59f222282ccbedd3b85760",
                        "timestamp": "2021-11-05 10:03:00"
                    },
                    {
                        "value": "69c424e755712a8e8f072e2302eba6c20f465c5d879a61c93a5046aadbcfa581",
                        "timestamp": "2021-11-05 10:02:59"
                    },
                    {
                        "value": "83dc57b1cf4efa0a242447adc3d9f6d88af5353dfd0b6c8e1b8ff83ab419f5fe",
                        "timestamp": "2021-11-05 10:02:59"
                    },
                    {
                        "value": "4f28dc2058189deb6565550ec0c46a04dcdba3d084f82e807fda2f0796eef8dc",
                        "timestamp": "2021-11-05 10:02:58"
                    },
                    {
                        "value": "48c5202d058e91c6d10042badda050180d78a2c197b0642ef7d1b2dc33ba30b9",
                        "timestamp": "2021-11-05 10:02:58"
                    },
                    {
                        "value": "4d8ef8d8b0693d9d2dda9f5d81c539bd889dab00db4cca726138d75741b6b069",
                        "timestamp": "2021-11-05 10:02:57"
                    },
                    {
                        "value": "3eafa6fc61dbacd635d355f265d0ab9422a0503f2acb1db7b917e850ff1dcebf",
                        "timestamp": "2021-11-05 10:02:57"
                    },
                    {
                        "value": "2521e8b55ca61cc9aaebf5020e0f6036e98a8b1ab48a2252d94ec97c06ee0575",
                        "timestamp": "2021-11-05 10:02:57"
                    },
                    {
                        "value": "37c851211dfe545d428d1f2f280c8a87107b028dc38c3a94af4c26ef4de559b3",
                        "timestamp": "2021-11-05 10:02:56"
                    },
                    {
                        "value": "4fafeff2bd264ec2c37196baeb515d8a28225a2bee3b08c3dd05d2199784e849",
                        "timestamp": "2021-11-05 10:02:56"
                    },
                    {
                        "value": "fbbdeb7f31a032ee67f519e6bc84606d1ae47e1cb271eeb50b870a637f49545a",
                        "timestamp": "2021-11-05 10:02:55"
                    },
                    {
                        "value": "741b43309473ab9117f3686b46e7a7ec04e182ddc4714830f2277d353ae8c6ca",
                        "timestamp": "2021-11-05 10:02:55"
                    },
                    {
                        "value": "b10e5a56af265481d0a4c50fe22da21c8b63934aeff01ce22bccfa89415e3990",
                        "timestamp": "2021-11-05 10:02:55"
                    },
                    {
                        "value": "6ea6ae98b7ebafe48bccb03850627bc72cbabe36cfc673e5b015b57027a185d7",
                        "timestamp": "2021-11-05 10:02:54"
                    },
                    {
                        "value": "4f7875497f1fe77d410e8aa8f4074f01aa8699c068cb4e2bda0ef60fdb03effe",
                        "timestamp": "2021-11-05 10:02:54"
                    },
                    {
                        "value": "95503672a0c7bf41e30536d4b7669b3fa5e05fc5f28d49c8cbd13b28409ee168",
                        "timestamp": "2021-11-05 10:02:53"
                    },
                    {
                        "value": "15630c255803d0b54fd628fb63a9202b4036ac7802c38f24e4f783c935447a3d",
                        "timestamp": "2021-11-05 10:02:53"
                    },
                    {
                        "value": "2c6dba7601ecea3048ab0cef40ff3b947433d1227bd9143224b20cdbb02aa1d1",
                        "timestamp": "2021-11-05 10:02:53"
                    },
                    {
                        "value": "58564abafcddb85d46093d757768156acdad0dc7e4be5b4a66a57bc664f1a824",
                        "timestamp": "2021-11-05 10:02:52"
                    },
                    {
                        "value": "7503e2693ad61e66bf597f9e4fb05db0345162b6eaf311375234297340eee5ba",
                        "timestamp": "2021-11-05 10:02:52"
                    },
                    {
                        "value": "c95c7fa3b2c0dfb36c589c5545d9c6457889172440697664da0ca3dd6d63b30f",
                        "timestamp": "2021-11-05 10:02:51"
                    },
                    {
                        "value": "2473a9a2705b6ad4157baf5db99ae3aa48c0ac58d0a9c6923dfe9ce86f5eddc2",
                        "timestamp": "2021-11-05 10:02:51"
                    },
                    {
                        "value": "33b44ddf4f4e456de6367371f036fce1dba98d3ac5a25f7945bef7ae8ce3972e",
                        "timestamp": "2021-11-05 10:02:51"
                    },
                    {
                        "value": "b0bcb669c4b10b34f1195223dddaa02c863e3cf566d8eab0d77c991528d3be62",
                        "timestamp": "2021-11-05 10:02:50"
                    },
                    {
                        "value": "b88509e6f2a94233d6ed75eeb32d075cfc6af898334e4a91ad3255043b2d5b3d",
                        "timestamp": "2021-11-05 10:02:50"
                    },
                    {
                        "value": "eac138ae3e0298759d8be2a632ed887acec41937a152283d1656ca5a593a5056",
                        "timestamp": "2021-11-05 10:02:49"
                    },
                    {
                        "value": "07a3edcbc2f538e60de6f1987bcd062b3de779bd65f883e71fb1578ad281dec2",
                        "timestamp": "2021-11-05 10:02:48"
                    },
                    {
                        "value": "58db964d0763b4fd3e283085ad61799eda9e81c1f6da8cb2240c49337f8c707d",
                        "timestamp": "2021-11-05 10:02:48"
                    },
                    {
                        "value": "761f574cf7a613e1c7dd262fc97a6222a9fe6b6422b6d655c693d470fc4988ac",
                        "timestamp": "2021-11-05 10:02:48"
                    },
                    {
                        "value": "64122d7f2d597070e52c4bb649a19d10f8faf182e3d785a689daeaad3028c9c8",
                        "timestamp": "2021-11-05 10:02:47"
                    },
                    {
                        "value": "b104493e26d0946e71c172e3f73288ae6e91cc076e0fe0ea9dc528df815f83b2",
                        "timestamp": "2021-11-05 10:02:47"
                    },
                    {
                        "value": "178a0587f4697a53f0762c4c51cd6991bec1e251c1416ae4e64b138e14c33cd4",
                        "timestamp": "2021-11-05 10:02:46"
                    },
                    {
                        "value": "378cd904d52515a1c58c7946a070708c9bcdddeefc51880d77185d8e17b1eb2d",
                        "timestamp": "2021-11-05 10:02:46"
                    },
                    {
                        "value": "b29f15bd82381379bf9e2d4aa6414ec2707e345852eea500ff95875d49462a4d",
                        "timestamp": "2021-11-05 10:02:46"
                    },
                    {
                        "value": "b3f939c1611eda6aea2f8efa1625998e0f855bdbd03ed16137e380b736cd9753",
                        "timestamp": "2021-11-05 10:02:45"
                    },
                    {
                        "value": "a4210262616aef5f1e18acc1736090487ee22afc67e7552cd57c8f874b62fb3c",
                        "timestamp": "2021-11-05 10:02:45"
                    },
                    {
                        "value": "f86804ba6fdc0c2518eea5b136215dcaa06ebeaf79b6f9958e377bba3bb377a0",
                        "timestamp": "2021-11-05 10:02:44"
                    },
                    {
                        "value": "38bf4d85423925f744f93a4724c7aee0da5776bdf8def20028f2bffe3f7105b0",
                        "timestamp": "2021-11-05 10:02:44"
                    },
                    {
                        "value": "f344c34f1161e112d345675d3993874d0c5f01210831cbd8b07cf63a9b50b2a2",
                        "timestamp": "2021-11-05 10:02:43"
                    },
                    {
                        "value": "bef5f36f0146a14e4dcd3afad301f9f02477c98f809db62f82783ba32768bb96",
                        "timestamp": "2021-11-05 10:02:43"
                    },
                    {
                        "value": "171db405b6bacdb09cb7ad6d40021563684249108fab5df886c5b6a25c949ced",
                        "timestamp": "2021-11-05 10:02:43"
                    },
                    {
                        "value": "4757157ad47c52b7f822c5ac3870e53cb035c3218c6827c908a2b8623594fc7e",
                        "timestamp": "2021-11-05 10:02:42"
                    },
                    {
                        "value": "3aff21b545bb12c3bac819527c4ee19e9329ccfc92f5e15e3cb8921b4458d13e",
                        "timestamp": "2021-11-05 10:02:42"
                    },
                    {
                        "value": "5934d7c6e6af438f82851a0c01158e72297599c834a271b1e709f1659b0ca9a6",
                        "timestamp": "2021-11-05 10:02:41"
                    },
                    {
                        "value": "86c1769e2d9ab7446653aa3c28284d1a4f061019fd773a2da26cef9ad96c0402",
                        "timestamp": "2021-11-05 10:02:41"
                    },
                    {
                        "value": "ca41dd423830f8afb8599bd778739e4cf53a1e0589a7bc7d5f52140b406c8775",
                        "timestamp": "2021-11-05 10:02:40"
                    },
                    {
                        "value": "36c775376f8774d6c3d8ec2cf0f922b18b55da77055fd509253fdcbfb3d7c89e",
                        "timestamp": "2021-11-05 10:02:40"
                    },
                    {
                        "value": "5a1e0727da7effac037a1e5dc77e0439943a683eec30c335987a3e47f2017dc1",
                        "timestamp": "2021-11-05 10:02:39"
                    },
                    {
                        "value": "4ff5299b03afab79bbdf64b45697bad9741cb70abedbfb8fc0a7efdde74dca1f",
                        "timestamp": "2021-11-05 10:02:39"
                    },
                    {
                        "value": "8e8efcdf41bdb2c40402d16a1919501541bf7af6265089c22413718da07fde2b",
                        "timestamp": "2021-11-05 10:02:38"
                    },
                    {
                        "value": "0fd1bb547e3d55718df0a268c1f3ccd8db7084055b6650466094fb3254120652",
                        "timestamp": "2021-11-05 10:02:38"
                    },
                    {
                        "value": "a6bb5cf84dd730ffaf4d3ea1827f99b7f0b8a5d89f87939d1a93fe0df9f2dc74",
                        "timestamp": "2021-11-05 10:02:37"
                    },
                    {
                        "value": "7d3445d0cd1a9bb749c53c39a24d2cb224b2b916fa6792468fef7fb1b4f7736a",
                        "timestamp": "2021-11-05 10:02:37"
                    },
                    {
                        "value": "2fa7ae7b3f2334a642a01fda34ff39d8ead7ee15afab9d52be8e76995b9d2f73",
                        "timestamp": "2021-11-05 10:02:36"
                    },
                    {
                        "value": "bc170e3cbef30e135827e5abdb9ae19885e86da65ed1d8c51f5bb5dc414f8b29",
                        "timestamp": "2021-11-05 10:02:36"
                    },
                    {
                        "value": "f1358ee89d403c82bd4cd9941679ffee5053bbcfce4932a8dd7ba9f1634bca64",
                        "timestamp": "2021-11-05 10:02:35"
                    },
                    {
                        "value": "a60920f56263651c6b969d40baf40388ddb3d6e88fb0466bdccf03447016c46a",
                        "timestamp": "2021-11-05 10:02:34"
                    },
                    {
                        "value": "cb0661d7e50e604f681327159c16140cfd9003b9c56a317f07e863d168755de0",
                        "timestamp": "2021-11-05 10:02:33"
                    },
                    {
                        "value": "94a03ab3dd14fcb58191fed566ab73d4d18f526e22180dd2f94ba7a1069459b8",
                        "timestamp": "2021-11-05 10:02:33"
                    },
                    {
                        "value": "db128d4f6eaa2d3d3248e6a08306504cd8fbc710353dd68cb1b76054cc7871f3",
                        "timestamp": "2021-11-05 10:02:32"
                    },
                    {
                        "value": "9f2d96b0b31fac2769106481015b254e88e491a22918b73b35552ed5a571e271",
                        "timestamp": "2021-11-05 10:02:31"
                    },
                    {
                        "value": "8f90d67549f4c0b3814fee7a92d08965b62492faa81286a9fc63f7ddd9494d59",
                        "timestamp": "2021-11-05 10:02:31"
                    },
                    {
                        "value": "94901878f761ed310683c9c3c31f9610e253a3d090dbfb63a9a7c79c63dd227a",
                        "timestamp": "2021-11-05 10:02:30"
                    },
                    {
                        "value": "bfe4b24253acb87bc5453872c12c8dcc477c7002742463c804beeaf6ffe09acb",
                        "timestamp": "2021-11-05 10:02:30"
                    },
                    {
                        "value": "f1a84973d673dbac49e388e8b22b9530436be9c5650706abc0195b2d9aab338e",
                        "timestamp": "2021-11-05 10:02:29"
                    },
                    {
                        "value": "d0e0bd82763ef9cf8983a7d8f50a1e55f8e7de5f220b948b51dcf07e86c2a0f1",
                        "timestamp": "2021-11-05 10:02:29"
                    },
                    {
                        "value": "0921544d07cd9e04bae3b2dfe1281330a5ca5def3045602314b5b34b56b9ca7f",
                        "timestamp": "2021-11-05 10:02:28"
                    },
                    {
                        "value": "5c6a8538205b016b10823cf7006f3ef7af698e484789c72e518cc0f3eb7e7553",
                        "timestamp": "2021-11-05 10:02:28"
                    },
                    {
                        "value": "89a47c879370cf061f039c490b4e3fc6d3abd8eae65dcc00731a76f5d7ea34f2",
                        "timestamp": "2021-11-05 10:02:27"
                    },
                    {
                        "value": "10a65a34801fb5fbc0bf20b7d6b6972d4cb52b5e00ca6786d3cb407203d4e12f",
                        "timestamp": "2021-11-05 10:02:27"
                    },
                    {
                        "value": "84f09e1b56f1cafa92b7d7aa418c2f48addb5757d802400f6a48144ca5498000",
                        "timestamp": "2021-11-05 10:02:26"
                    },
                    {
                        "value": "e57dcba29816ec084162f3e1e93dd09ce80d44dc53b0ba929467d5104b1675e2",
                        "timestamp": "2021-11-05 10:02:26"
                    },
                    {
                        "value": "a0df9459c7d8ddc44da63b482a480d2906d67f44a3301190ab516af158703fcc",
                        "timestamp": "2021-11-05 10:02:25"
                    },
                    {
                        "value": "3b972ec507383c6c501c7707452bbcc415224e595fb3d821ecc2e4fdaa6b9447",
                        "timestamp": "2021-11-05 10:02:25"
                    },
                    {
                        "value": "72afa78933ff31c0b0642959576813d40c7512435fe1bed2a4946fb2e342e315",
                        "timestamp": "2021-11-05 10:02:24"
                    },
                    {
                        "value": "0f757db4d2ea7245e90616e52150f3173bd2941b1c1fbdbfdd1fc46ff85c3ef9",
                        "timestamp": "2021-11-05 10:02:24"
                    },
                    {
                        "value": "f89a5fda21a276306a22df1a7e22946d9240906ac45b29983986f8a9b482471c",
                        "timestamp": "2021-11-05 10:02:23"
                    },
                    {
                        "value": "72a48e436d7b6cb2bfadfb6f484ace8d8e7ab5d88d7d30b574fb377c9af4aa94",
                        "timestamp": "2021-11-05 10:02:23"
                    },
                    {
                        "value": "e4bb768dec08e8f0980206d4dad1f3bb635d8f934eac4674ad382064bdfa7887",
                        "timestamp": "2021-11-05 10:02:22"
                    },
                    {
                        "value": "4517207d9e79dc02962a7380d7d34132cf35b8582ef5750d6f44ce7d94eacd90",
                        "timestamp": "2021-11-05 10:02:22"
                    },
                    {
                        "value": "4b96bff73079308661cb0af5e5e16d96345c030712844e81dc8e84bcd7075d34",
                        "timestamp": "2021-11-05 10:02:21"
                    },
                    {
                        "value": "b539c4637949afd6c49399f27edad79e8275628fe3d8baa2c3e5cd25b1ac8b00",
                        "timestamp": "2021-11-05 10:02:20"
                    },
                    {
                        "value": "8cc5cada76110fc17d0c96f4f4e07d066dcc1cb22f5ffa41731347e3b3024da6",
                        "timestamp": "2021-11-05 10:02:20"
                    },
                    {
                        "value": "b12ce2554495ae0761edc6730659dbb80115edb13fe3a57c39bc04d868922953",
                        "timestamp": "2021-11-05 10:02:19"
                    },
                    {
                        "value": "c7c151bed5a579ff75bc2b0c31c52913ae56ab64067d9c7f2af18e0ce0cfcf56",
                        "timestamp": "2021-11-05 10:02:19"
                    },
                    {
                        "value": "81515215012c31643daaa7044e22a9d3daa5d60014c4d92e180350840e1e3d11",
                        "timestamp": "2021-11-05 10:02:18"
                    },
                    {
                        "value": "c946e2fae1f6b6a53de0b9dfcb4fe83d011ff1d64e2d775110983e97f0fb5c3c",
                        "timestamp": "2021-11-05 10:02:18"
                    },
                    {
                        "value": "3908ae79b3fe30651da9107e5efc62e3be7a1bfb246302a74ed09142c72e0971",
                        "timestamp": "2021-11-05 10:02:17"
                    },
                    {
                        "value": "7605293e536c22130e060a620c2c05c72a77311e952f79b017d45d38b3804c77",
                        "timestamp": "2021-11-05 10:02:17"
                    },
                    {
                        "value": "9e7a6da4fa6bcc152e3b8e27a63727df6b5f3ea3d099964f04d1cf8d4a050d36",
                        "timestamp": "2021-11-05 10:02:16"
                    },
                    {
                        "value": "f409a9ece3bddab03ba4d46da3bacbf0f6ead09efd073b4a80f1e6761b480ccb",
                        "timestamp": "2021-11-05 10:02:16"
                    },
                    {
                        "value": "c2df3223aaff180f2b39f60ad334090d88938949a27d4d2d3a23cc24bb8beec8",
                        "timestamp": "2021-11-05 10:02:15"
                    },
                    {
                        "value": "be7eb0b17e6d126c17f3bc9d7cce2224af2d897befcec1cbbaecb3c9fab05717",
                        "timestamp": "2021-11-05 10:02:15"
                    },
                    {
                        "value": "06fbe1a111ef6b741bf060dadc24514b9145c7c25b1a5ccefde0d2802eeac1bd",
                        "timestamp": "2021-11-05 10:02:14"
                    },
                    {
                        "value": "e4dbb3d96da761d503b6defd026d44f4dc21f601bd713671b9a215284af2118b",
                        "timestamp": "2021-11-05 10:02:13"
                    },
                    {
                        "value": "11974965edb9a07acbc9a0d8fc51fb7eab29a5950c43a95e44de1150d71b531d",
                        "timestamp": "2021-11-05 10:02:13"
                    },
                    {
                        "value": "8c1211422daba245e3496e7553f086de9b9c7a6a37588e36955c3f2f98f31d1d",
                        "timestamp": "2021-11-05 10:02:12"
                    },
                    {
                        "value": "aa9dcc561eb41442c5fbd7b7abeb54db3fdd1fb68a77b2b29c0e63289da0f9ed",
                        "timestamp": "2021-11-05 10:02:12"
                    },
                    {
                        "value": "d354e6d6bf9d088fd566fb610aed8b40f00d587ab94cd56f68780819e715022a",
                        "timestamp": "2021-11-05 10:02:12"
                    },
                    {
                        "value": "f1a851038166022590d8554f72ae7292631e636d665fae55b06847610035c3ab",
                        "timestamp": "2021-11-05 10:02:11"
                    },
                    {
                        "value": "d071ecf4c9fbededd4e33f5de8df2444ea8d9baaf3eb7ef72b73dacdc249b2b3",
                        "timestamp": "2021-11-05 10:02:10"
                    },
                    {
                        "value": "437b50c584125a8507c95ff97ff823b71453a5821c0cc2cd9a0446e4d2c4b5d0",
                        "timestamp": "2021-11-05 10:02:10"
                    },
                    {
                        "value": "cf237efcf140f5d2b2d9ec2a1657e594fc9614a6e3818a0b2bec805ab07bb1af",
                        "timestamp": "2021-11-05 10:02:09"
                    },
                    {
                        "value": "2630e9543e32bf2c9f43af319fb76714500b9dac1d2b2d3240fdb14005a500cb",
                        "timestamp": "2021-11-05 10:02:09"
                    },
                    {
                        "value": "2219c5cab501f9ed92f38ee4bde647cddfd0f8580d3b8ac6b1a40fc8e94ad2ee",
                        "timestamp": "2021-11-05 10:02:08"
                    },
                    {
                        "value": "12ebe1aff664f03f30c16ff136ec0667e37ff3ebd0cb68115e7a27831d62d7b4",
                        "timestamp": "2021-11-05 10:02:08"
                    },
                    {
                        "value": "4c320ffb111db0cdc19d1a01f3f1eda80ea9d08249c9c4ca0bc1e3ab43d84a88",
                        "timestamp": "2021-11-05 10:02:07"
                    },
                    {
                        "value": "d338416a25cbe48b9c983105b1899460482f0198fe640845f9db63d81bcd8139",
                        "timestamp": "2021-11-05 10:02:07"
                    },
                    {
                        "value": "57c45d3a8efa336ab42bf5577aad7cea78c52fa4fde37890ab5fc613640790a8",
                        "timestamp": "2021-11-05 10:02:06"
                    },
                    {
                        "value": "0cfc60de96c4cba1ba7b58d3a8156071acc2a797972a1f8beb225d1f5ed84daa",
                        "timestamp": "2021-11-05 10:02:06"
                    },
                    {
                        "value": "d34ac8fe8e278e9b3fae3eb7401bf97c59ecddc10d3cf6a5abd954910a217227",
                        "timestamp": "2021-11-05 10:02:05"
                    },
                    {
                        "value": "3581a3a113c24e027f37828d329e5c8d576982d24265d9b22db32733193574a9",
                        "timestamp": "2021-11-05 10:02:05"
                    },
                    {
                        "value": "b849f1f64960393070ca5b9b2524d11da36bdaa19ae4943b128c9123eb2f55a2",
                        "timestamp": "2021-11-05 10:02:04"
                    },
                    {
                        "value": "757510945deccd97d466cafd858f27b5fd96e7defbd72029c62ef7a65fa4dd95",
                        "timestamp": "2021-11-05 10:02:04"
                    },
                    {
                        "value": "e811e8c4791af157334516202d0c7aa56d45e1825d0f0a5f5a7b9553b9c711e5",
                        "timestamp": "2021-11-05 10:02:03"
                    },
                    {
                        "value": "b9764c280a0afa7a9238d952e4f84ba67063ac3c1991b2d6caeb39b50ef239ff",
                        "timestamp": "2021-11-05 10:02:02"
                    },
                    {
                        "value": "7ef6807bd8cf40be380774c577807cc91df345618935f91f92ec422656826bfb",
                        "timestamp": "2021-11-05 10:02:02"
                    },
                    {
                        "value": "8c6c3f8195d650c37c574886f04eca38fee9ba29b0817e80d81c0ed9ae7996d1",
                        "timestamp": "2021-11-05 10:02:01"
                    },
                    {
                        "value": "bf788a2a4b80a683227771747c8a1826d0c50e05f86c098434647f1016deb21b",
                        "timestamp": "2021-11-05 10:02:01"
                    },
                    {
                        "value": "36528e5f45735c53d8539efa17af9fdbcb3f726a278b04a633802e58bf1ae5e9",
                        "timestamp": "2021-11-05 10:02:00"
                    },
                    {
                        "value": "414c4e626b9515d234aff35127674e41589de44911a0a8a6d8095f89efaf7b39",
                        "timestamp": "2021-11-05 10:02:00"
                    },
                    {
                        "value": "94422561fc62323cbe9b472b05c92360327290db3126e242595a9095b46c6197",
                        "timestamp": "2021-11-05 10:01:59"
                    },
                    {
                        "value": "ad7715f92639a5f91853b41f6a57e0279b648aca1e8a8ed273400305cc61a9d0",
                        "timestamp": "2021-11-05 10:01:59"
                    },
                    {
                        "value": "1a960412bb4c5f02a04987ef97b0ac0fd93e7348f13ce4fa624fae9ae2fd1e99",
                        "timestamp": "2021-11-05 10:01:58"
                    },
                    {
                        "value": "68572509fad63b08e3a6049a057e4d25c264ccf37e0e46ba487496d8947230a4",
                        "timestamp": "2021-11-05 10:01:57"
                    },
                    {
                        "value": "6d57da27329aee4b0c8322022600dffb6c3859889db32bd348e947ebc1d23ee7",
                        "timestamp": "2021-11-05 10:01:57"
                    },
                    {
                        "value": "d47b8a8541d0b78537a7a33c3ab29209395980678bdfa69df9a78e51291e8d3e",
                        "timestamp": "2021-11-05 10:01:56"
                    },
                    {
                        "value": "bdd69ed8068f2aac01b99ca7de69f4f86b71df31d10f7bba2b7345918555c70b",
                        "timestamp": "2021-11-05 10:01:56"
                    },
                    {
                        "value": "547edaae35a26894419c076bdbc93a962363e14286a248a102b8ffb809ad8ccd",
                        "timestamp": "2021-11-05 10:01:55"
                    },
                    {
                        "value": "24a132706da6fa8958d3a2ceadc9000f957aacf019f1e7d442819c874e7073ab",
                        "timestamp": "2021-11-05 10:01:55"
                    },
                    {
                        "value": "0da66be9422fbe44d2c4d0ede7c19e726c683d487e168b0d4dea903c74d5e921",
                        "timestamp": "2021-11-05 10:01:54"
                    },
                    {
                        "value": "3e794b1bc6bfa60c61af015dcd599c87f24fb68f39a400a64a5be69bc567a87a",
                        "timestamp": "2021-11-05 10:01:54"
                    },
                    {
                        "value": "224792967d11a30bb89e84514caf55d14c0dbed0ce08587592c3fd245c721658",
                        "timestamp": "2021-11-05 10:01:53"
                    },
                    {
                        "value": "16227dea0f73151983e0b59e1e38ce7ed4217a94f0d19b0a4b2275c4e28fff19",
                        "timestamp": "2021-11-05 10:01:53"
                    },
                    {
                        "value": "8e7e65d4839246cc17f2b4c62a9840011bd959ba6890fd8a5e66ca6d33ca2c33",
                        "timestamp": "2021-11-05 10:01:52"
                    },
                    {
                        "value": "86e16381dabdda390b3747e969710d68782a847b4a7613ee0bd54580d28a3a49",
                        "timestamp": "2021-11-05 10:01:52"
                    },
                    {
                        "value": "9284c29e7183073c9135b1e8cfe6ab069696885250381c109408f3cea5138778",
                        "timestamp": "2021-11-05 10:01:51"
                    },
                    {
                        "value": "b7dd8cb3320680516b82a403b6a5b575f10df80338b8fb92254395d1edbce5ab",
                        "timestamp": "2021-11-05 10:01:51"
                    },
                    {
                        "value": "0d2b21e41555b412abc05ee985d4fbe0d42150713345fabdb31c05cf53758fcb",
                        "timestamp": "2021-11-05 10:01:50"
                    },
                    {
                        "value": "1d83c1a4ea2c8fc28a37c5171b547a63956b8f6bd6eebe79328813925b1b2dbc",
                        "timestamp": "2021-11-05 10:01:50"
                    },
                    {
                        "value": "9d379f777c917b729ea7758d1476c244efb19891501796ac042a3178334a816d",
                        "timestamp": "2021-11-05 10:01:49"
                    },
                    {
                        "value": "7735979d0ee39a4c352b013be70bd5200a83b56b3c5bbbc6eb896aa4b52206ad",
                        "timestamp": "2021-11-05 10:01:49"
                    },
                    {
                        "value": "5b60b99de16066e229743e307b4f246f13596536a63f22fe83f08dbb892df129",
                        "timestamp": "2021-11-05 10:01:48"
                    },
                    {
                        "value": "733e5c5c69c1571713b90b48b37ffccfe5bf9950f4dad4a2f84e4a2dd9b97a8f",
                        "timestamp": "2021-11-05 10:01:48"
                    },
                    {
                        "value": "b1f68605d286d52c1fc2408cfd9f5a4c94061f855206c479f931726a10d916df",
                        "timestamp": "2021-11-05 10:01:47"
                    },
                    {
                        "value": "b44d757905e5967a66f6693c8ad0cd5e01643576e3010825ca9d399a6de3c9e7",
                        "timestamp": "2021-11-05 10:01:47"
                    },
                    {
                        "value": "2270a53626877844bb0cdaacd95be814b1b2fff57a523af2705283522c08eae7",
                        "timestamp": "2021-11-05 10:01:46"
                    },
                    {
                        "value": "1b5c30b3d97008e5f799c371cbfe364db13141c5d9ca8e22719e5c9cb25e2410",
                        "timestamp": "2021-11-05 10:01:46"
                    },
                    {
                        "value": "b49907f49e00f12e92bc334cb269ee448f2192570a5211a1c784ed148c0e46f7",
                        "timestamp": "2021-11-05 10:01:45"
                    },
                    {
                        "value": "cfee88d6b09df5963c3e4012769c2cecdf17932b54591c3c85293aa8943cb04d",
                        "timestamp": "2021-11-05 10:01:45"
                    },
                    {
                        "value": "9dc3f698f29c2d67775733d402297b32f25e7e29697f10f2408c3d4853beee21",
                        "timestamp": "2021-11-05 10:01:44"
                    },
                    {
                        "value": "daf083c314ce0f38a48835befc57e5463b2ff8630860a1970c5e0e537ff6dd3d",
                        "timestamp": "2021-11-05 10:01:44"
                    },
                    {
                        "value": "d45436dfc4c00237bd1df813b4c04ee1115aabdde2f367454adfd15a3abdd671",
                        "timestamp": "2021-11-05 10:01:43"
                    },
                    {
                        "value": "29852bf8ff14583336cc760afb5f7fe76fa1feeb19769c127815693489d8ed83",
                        "timestamp": "2021-11-05 10:01:43"
                    },
                    {
                        "value": "ab701bdc5d2b75c790270a61c531f07e53564007742879196da05bb420e90bcc",
                        "timestamp": "2021-11-05 10:01:42"
                    },
                    {
                        "value": "c06b60ecb75e2b88306ee5a4ede4f84e7377d8303fe9d9474573e4d4ecd39b0a",
                        "timestamp": "2021-11-05 10:01:41"
                    },
                    {
                        "value": "efd0d3adf61eb55e3a0b7c721a42895f5ed2413318957db3c0964b0355e70368",
                        "timestamp": "2021-11-05 10:01:41"
                    },
                    {
                        "value": "1780082d1b5b4586887f44f128937a859f90469adff1e4821c3c272009527b9d",
                        "timestamp": "2021-11-05 10:01:40"
                    },
                    {
                        "value": "13859cf21cf9a05fce2e790e362393ced55a0dca68d75427aedf36e859c86fac",
                        "timestamp": "2021-11-05 10:01:40"
                    },
                    {
                        "value": "ee6ef77ddadfc515045cdae4e3ed98f72d41fd744b95c4c8e893e52b984688a8",
                        "timestamp": "2021-11-05 10:01:39"
                    },
                    {
                        "value": "2f3e9766657a71bfa67445cf65fa401ad699be1d0f4fd4b990d897346e5dda20",
                        "timestamp": "2021-11-05 10:01:39"
                    },
                    {
                        "value": "e53235ed0d8e2f965f4abf10953d865655c4d170b55ab7b6cdc7bdd7a4167717",
                        "timestamp": "2021-11-05 10:01:38"
                    },
                    {
                        "value": "33c4a4037f3af4b41dc764f2dd8e4bce600aaff7ed23b58b700a0dcb963250ad",
                        "timestamp": "2021-11-05 10:01:38"
                    },
                    {
                        "value": "fd43fcfefcab3b4bede4a7761716581c5ad1d972eefe0c05d46fd26fc239cdbb",
                        "timestamp": "2021-11-05 10:01:37"
                    },
                    {
                        "value": "43cdb873a623bd0022856da8068e041a0ee4a49212db189d99d2e98684030903",
                        "timestamp": "2021-11-05 10:01:36"
                    },
                    {
                        "value": "c8b42d65a053465b70e51b0751d4e3b19a3deb619ce32d4ac7e159f7c63ec2ed",
                        "timestamp": "2021-11-05 10:01:36"
                    },
                    {
                        "value": "f36e33fe60d0cb1d17aa86d1a265276454b9f6cf23e7040b96ee4233550730e2",
                        "timestamp": "2021-11-05 10:01:35"
                    },
                    {
                        "value": "bf986f2dddb5d0b9b907fa0bac10b1c7efef7bf69de54204e1f9e40cbd6f140d",
                        "timestamp": "2021-11-05 10:01:35"
                    },
                    {
                        "value": "59ac8d3010ca56d0d23d5b3f01103d6730b0e64f92fed9868841e44e4bc6fb3a",
                        "timestamp": "2021-11-05 10:01:34"
                    },
                    {
                        "value": "2d78f2d23cc7b869af84bf05690dcef2f693236e7d760e39a9b28aeedbfd83ee",
                        "timestamp": "2021-11-05 10:01:33"
                    },
                    {
                        "value": "8637f9a4cb6c8f2bf926be4dc4699d9b5f7c9d20f5165c93b6453273d80b81c4",
                        "timestamp": "2021-11-05 10:01:33"
                    },
                    {
                        "value": "4345a01a7dd054725d568947291ea717e722b6ac2f2bc6864d32068ff20dc3d1",
                        "timestamp": "2021-11-05 10:01:32"
                    },
                    {
                        "value": "c7530e4869ce2130ea19097f8a47826c528e60c3bee71deaebd215ed4f6f42a6",
                        "timestamp": "2021-11-05 10:01:32"
                    },
                    {
                        "value": "e97e5ccd3a0bc61765241782426195eea54eb9781a29244a3bab0cc501326fc8",
                        "timestamp": "2021-11-05 10:01:31"
                    },
                    {
                        "value": "018ce52a0db39f663fa220f09b2dc162497f7dae6f3f4c4d6f5de619ec264686",
                        "timestamp": "2021-11-05 10:01:31"
                    },
                    {
                        "value": "122e16feb0ffe2aff1c747df871e434ab758d5a285dcccb0d1248f20f6aa2a5b",
                        "timestamp": "2021-11-05 10:01:30"
                    },
                    {
                        "value": "3fa88fbf242c9b5b533804ac20da1276dd279d51aeacf45e76345c961843a067",
                        "timestamp": "2021-11-05 10:01:29"
                    },
                    {
                        "value": "33ee0e64a546e3ee392b8a5b2471d042546a5d968fc9d85daf7acea935b8fac8",
                        "timestamp": "2021-11-05 10:01:29"
                    },
                    {
                        "value": "87e9b14a52803a5c530d51bb601a4ba2b22ee4e8ca8a82ece0b5c1a493a96a7c",
                        "timestamp": "2021-11-05 10:01:28"
                    },
                    {
                        "value": "3969c73e22242978a5a74b61ae15ef750b1780b231615757c537c21c14192d79",
                        "timestamp": "2021-11-05 10:01:27"
                    },
                    {
                        "value": "11dbf13825a69170f1265aad9fd0b6ba53f033721dfab89e3dd26f837fd7a33b",
                        "timestamp": "2021-11-05 10:01:27"
                    },
                    {
                        "value": "d5654b61f66c83092b125d9af092522d738fe49694195d4a5fea3f864758b2e8",
                        "timestamp": "2021-11-05 10:01:26"
                    },
                    {
                        "value": "e0fae824eaaf084305f75b84c9e2b6c756ba6f31becbb8844123866a16a4fe0a",
                        "timestamp": "2021-11-05 10:01:26"
                    },
                    {
                        "value": "9a14a88a0da530e63d1defce0613b263e4c2db2ed9569d61136bd0175279d97c",
                        "timestamp": "2021-11-05 10:01:25"
                    },
                    {
                        "value": "9585eaa1b441308af942f578f5b75b41ba9cf0186054824b7e848fa33bd503de",
                        "timestamp": "2021-11-05 10:01:25"
                    },
                    {
                        "value": "c0e90eba466b47f084be174db7f156b64306ba5c77fd201d0a6fe6aeacdab86b",
                        "timestamp": "2021-11-05 10:01:24"
                    },
                    {
                        "value": "91bb54fbdd428423ca32a2af6173dc5dddefb54671b5d0bb861e7526f30f8c61",
                        "timestamp": "2021-11-05 10:01:23"
                    },
                    {
                        "value": "cc9c476bff40d6d888304a2ac8947c4fea31502651beffa30611503578ad68f9",
                        "timestamp": "2021-11-05 10:01:23"
                    },
                    {
                        "value": "b0bb0af16e01a93958150fea855bc811638f7a6e3efb8b836aa7cf7d386baa8f",
                        "timestamp": "2021-11-05 10:01:22"
                    },
                    {
                        "value": "7a007cf468fe2276a13b41cc785e5e1dfb1ebe15a4051c13fb06759e328f704d",
                        "timestamp": "2021-11-05 10:01:22"
                    },
                    {
                        "value": "f1689de352c7902c3fadd367b2be3aba5dfdd7c22a352cbbf309c37a8e9ef5a8",
                        "timestamp": "2021-11-05 10:01:21"
                    },
                    {
                        "value": "f22a48f00940f5b1f0b3bda2fc4fb5cf4d48299b0d3002c47f6dd0ce853ad090",
                        "timestamp": "2021-11-05 10:01:21"
                    },
                    {
                        "value": "66e123eb2318f6950030b99eb91a23111a40c56c02db6333edbf78d2aaaab814",
                        "timestamp": "2021-11-05 10:01:20"
                    },
                    {
                        "value": "d544b51ff99f5b7ab33901e21a3916dfac5eb8a6bd7972fc220bf28ba4e736a1",
                        "timestamp": "2021-11-05 10:01:20"
                    },
                    {
                        "value": "6e14fdfa73c60bab54b5d73bb5e362924e3bf1e3bfb32fbfd79ff3a680f4c47d",
                        "timestamp": "2021-11-05 10:01:19"
                    },
                    {
                        "value": "80a2abf6fcb76d247abea6cf6c5aad8205582380cc45a3c31e9bf2c08540b94a",
                        "timestamp": "2021-11-05 10:01:18"
                    },
                    {
                        "value": "e83261861c2277c278484d616c3cfe7d92f5e7dbac48e499e85e3c554f371187",
                        "timestamp": "2021-11-05 10:01:18"
                    },
                    {
                        "value": "7cb23ad6bdd4aebfab1bf3f107af61d68adca0ccd6de1119d2ec0b57df2a6076",
                        "timestamp": "2021-11-05 10:01:17"
                    },
                    {
                        "value": "728eaf5eca0cf54b6f8e2ed0a6994d9458b4af9a33c7a281c38237c6d2e48ad2",
                        "timestamp": "2021-11-05 10:01:17"
                    },
                    {
                        "value": "aace25fadd269260e6e21511aca57a6fc7af92819b658f35849de0d935469a86",
                        "timestamp": "2021-11-05 10:01:16"
                    },
                    {
                        "value": "bfc5cb8a527616c4475b877809418cfbd66c351afb678f6da925fe18005ad418",
                        "timestamp": "2021-11-05 10:01:16"
                    },
                    {
                        "value": "7452af8affa6003d65189e42897add9e2b42b81e00ae203d53d51a2b8da9e928",
                        "timestamp": "2021-11-05 10:01:15"
                    },
                    {
                        "value": "6b4768fbd86a8f1b22479a7b84ed70997852abb6cfce0bd72eb9f18784b6daca",
                        "timestamp": "2021-11-05 10:01:15"
                    },
                    {
                        "value": "69f6988628047c4985b4255578802cdf8f237817302db5faec34611b7d94d30c",
                        "timestamp": "2021-11-05 10:01:14"
                    },
                    {
                        "value": "039e409b2c46454e1e826da514096221e96ab1299a457cd5b6baa8b94c9c8db9",
                        "timestamp": "2021-11-05 10:01:14"
                    },
                    {
                        "value": "6f0cf95526c4f14218234e4acb4de6e544c528ebbc526c28c7b5d16da46b6959",
                        "timestamp": "2021-11-05 10:01:13"
                    },
                    {
                        "value": "78a9087b82cbaa223ad52d279377964d2d7034a450fa681b23fa1872c9b92527",
                        "timestamp": "2021-11-05 10:01:13"
                    },
                    {
                        "value": "3bdcd2d3e4756e66496bfc8b73ef3cdae0e986706c9b9071db813d13be747f80",
                        "timestamp": "2021-11-05 10:01:12"
                    },
                    {
                        "value": "a487e2f7f5a6f036e3aed25163eb209e744f9b435fecc8ae2d427674b588da74",
                        "timestamp": "2021-11-05 10:01:11"
                    },
                    {
                        "value": "1300c022f3c0a66727f8454c4b80d375ccb08ddcdff304d07427406801010dc4",
                        "timestamp": "2021-11-05 10:01:11"
                    },
                    {
                        "value": "7957ccde15273c21d8dd8d26d95573608ef872db6ed1e1b9666077d46db2678b",
                        "timestamp": "2021-11-05 10:01:10"
                    },
                    {
                        "value": "0c17a71b31bbf70953b6a5a62c78a379b6c268492ec9e19aa8c5718693db6261",
                        "timestamp": "2021-11-05 10:01:10"
                    },
                    {
                        "value": "8f0eb7e2ffb5c18bc00d31711db730a0b2a6e288edd5bc65633b0bb821736290",
                        "timestamp": "2021-11-05 10:01:09"
                    },
                    {
                        "value": "b836a49eb8f2b74aaff1c08083a104776caa46ce78b81da1f5d5202b0780c42c",
                        "timestamp": "2021-11-05 10:01:08"
                    },
                    {
                        "value": "a3590ffbba578df0456808d7444d6ac086b8952fdca6c489569d561351e0cbf1",
                        "timestamp": "2021-11-05 10:01:08"
                    },
                    {
                        "value": "a6e22edaf75552348e5a0265a7a83fadd4597aba01c917613fcae5dafaee1f1d",
                        "timestamp": "2021-11-05 10:01:07"
                    },
                    {
                        "value": "e1831daddeea2407054b4a1fe99ba3fb454539811f5b62a10796bce1929c1bd7",
                        "timestamp": "2021-11-05 10:01:07"
                    },
                    {
                        "value": "672bd75387dbbe6d83d4d8e0f671488c1bb57b7d24335d21dc733152bed51873",
                        "timestamp": "2021-11-05 10:01:06"
                    },
                    {
                        "value": "8f81e3c2f2131d0426c9ea30b965c6b45fe78038398fdfef14c7dcae348642af",
                        "timestamp": "2021-11-05 10:01:06"
                    },
                    {
                        "value": "551855bd8270eba13a83de1d2383e4c135fc1c6ed07469613267737827c03818",
                        "timestamp": "2021-11-05 10:01:05"
                    },
                    {
                        "value": "59258bfffdc3a6773d68ec7afe8549bd03fa637ed7bcc4bdb2aa79f7c2a08ac1",
                        "timestamp": "2021-11-05 10:01:05"
                    },
                    {
                        "value": "063e26c1ee579de31b0a8f38c8527cf59da31b5448afa296889f050a9f1b86a4",
                        "timestamp": "2021-11-05 10:01:04"
                    },
                    {
                        "value": "604818ad8c213917a4425e0206c570aba68ceb77f88b9860ae58e884cc1d52bf",
                        "timestamp": "2021-11-05 10:01:04"
                    },
                    {
                        "value": "b23bf765cc309709b7d9270aa570783d921147495d1a6ee5b457630243cd85eb",
                        "timestamp": "2021-11-05 10:01:03"
                    },
                    {
                        "value": "97e920b85d37ff5804ee6b0da020850d14bb06a00533ee63736672c378dec686",
                        "timestamp": "2021-11-05 10:01:03"
                    },
                    {
                        "value": "b3875d1b7e654826477d5c35629043c4a73ecee91dda6456807e0c2918998155",
                        "timestamp": "2021-11-05 10:01:02"
                    },
                    {
                        "value": "53ed6b2b47f6657e7ce6a9bed4853aa064214008a8ed477fdf8d9da18d5034e2",
                        "timestamp": "2021-11-05 10:01:01"
                    },
                    {
                        "value": "ce0650e03c3a131299644a4a76508c77f65b0e5b3839785c27c9284dd8d86397",
                        "timestamp": "2021-11-05 10:01:01"
                    },
                    {
                        "value": "b744f2110c3e07e00d21751d3b751bd6402c7c419bb4f7405fd9bc3713fe77d4",
                        "timestamp": "2021-11-05 10:01:00"
                    },
                    {
                        "value": "615588f4286b2a7bf072758ae825a27626537a4e0254678d90064ad52ac1a0b3",
                        "timestamp": "2021-11-05 10:00:58"
                    },
                    {
                        "value": "c2b643e7f621be7d0b8266594de1ccc451d5d5cfbe7daab73aa823a9eb689ea3",
                        "timestamp": "2021-11-05 10:00:57"
                    },
                    {
                        "value": "2cba0c4d3ec9b2f2b5a88acf2053a4945b32a8e9b2e720c6da112a75f90d2aca",
                        "timestamp": "2021-11-05 10:00:56"
                    },
                    {
                        "value": "7538618d55ad68a4c81d5560e0acab6d477176c41c2d7e7830eaa3c36418c05d",
                        "timestamp": "2021-11-05 10:00:56"
                    },
                    {
                        "value": "64c8ad62eb5c3e4dc2812120f18821621a9f306880821f9da693502e2469ee76",
                        "timestamp": "2021-11-05 10:00:55"
                    },
                    {
                        "value": "613e94142b09ce4a8c147f0acd58c939cf485d5dac68357592fa832b880e82d1",
                        "timestamp": "2021-11-05 10:00:55"
                    },
                    {
                        "value": "127882e3756a3b4e330d29f87ff1777d0f1cacf7173d53a5e6c3d5f15b68792e",
                        "timestamp": "2021-11-05 10:00:54"
                    },
                    {
                        "value": "0924858c2f6dcc0ff257a8e7520ebfccce75e59b0bbf98492e351f40e1ddb0ed",
                        "timestamp": "2021-11-05 10:00:53"
                    },
                    {
                        "value": "65eb042975a3632cb25e09307d0b4255f9c7591f476e1891f7047ee0d8945972",
                        "timestamp": "2021-11-05 10:00:53"
                    },
                    {
                        "value": "d7a84a53a67e4de6392980e1d034caa958c8ca342c5ad8b3024a74bf7da2d3d2",
                        "timestamp": "2021-11-05 10:00:52"
                    },
                    {
                        "value": "cd4561750f44c491dda31658ddf71a393f410e03ef8f56334d8365373d5b0f0c",
                        "timestamp": "2021-11-05 10:00:51"
                    },
                    {
                        "value": "1802a60a16eadf4b68f712338a7c6a3930fd121fd6f89a273cbaa932944a7599",
                        "timestamp": "2021-11-05 10:00:51"
                    },
                    {
                        "value": "dc7fa478c4ae8ab7a377cd16f2f482b41a4f3be89ba12412bb93fe3d2cc25fa9",
                        "timestamp": "2021-11-05 10:00:50"
                    },
                    {
                        "value": "3ffac2c2b22c5f94675677b77a754e24c7d386a6e3ed4bfbcb31ba9eeb81f0fa",
                        "timestamp": "2021-11-05 10:00:49"
                    },
                    {
                        "value": "10b4efb9338a120d16967656660b32de5a4620b05e48bc828fcdc24b8e2b52c6",
                        "timestamp": "2021-11-05 10:00:49"
                    },
                    {
                        "value": "889e8e452a662634ed6df239a9b1baedced7ca2139cf2eddc6e34227c4c847a7",
                        "timestamp": "2021-11-05 10:00:48"
                    },
                    {
                        "value": "2190a58e9ab8bbaea1cf2c532802beec8cb2c8ca67ccf3497c0e076d25777a5e",
                        "timestamp": "2021-11-05 10:00:48"
                    },
                    {
                        "value": "350c0efbd838786b69478577c7037fd72cfc75e653a6a7a3a58f92e54bfc6680",
                        "timestamp": "2021-11-05 10:00:47"
                    },
                    {
                        "value": "1388d1b1d52b9620feec9acc8c2918286a9921ae1c399ea6fab549e7e4c2058f",
                        "timestamp": "2021-11-05 10:00:47"
                    },
                    {
                        "value": "0d0f6bff0e82851d591454eee208c3b5a4ce7283e8e80b498981003e110f8119",
                        "timestamp": "2021-11-05 10:00:46"
                    },
                    {
                        "value": "2b3ef322f0c5fb69d5f4f368dc1a7874f52dc35dd407fe27665cb0f937f225e5",
                        "timestamp": "2021-11-05 10:00:45"
                    },
                    {
                        "value": "90559bac083195b3114b75c7ed8babb0639411565b861965d53ae0da0092570f",
                        "timestamp": "2021-11-05 10:00:45"
                    },
                    {
                        "value": "1327cf130273d6aa81aa24f22bbb89432b1d82433df70b2bf36b5ee07dc1fc90",
                        "timestamp": "2021-11-05 10:00:44"
                    },
                    {
                        "value": "424ed7b74a086f39363e38e6aab94f43c2f546188febe32ff5843a9b3852ff1e",
                        "timestamp": "2021-11-05 10:00:44"
                    },
                    {
                        "value": "e49ea14db4c89c5aa0ce17b99f80461e52f0291f10dd33927058dbcdb2febee7",
                        "timestamp": "2021-11-05 10:00:43"
                    },
                    {
                        "value": "e1e874c2934e92a224b0b757413dd0378939afd68138fdda5dd3c9cd40553275",
                        "timestamp": "2021-11-05 10:00:43"
                    },
                    {
                        "value": "21e2a7319cea00c88e242cdeb90808cf0e84dc4067460f158bba3e0d3d6f6c2f",
                        "timestamp": "2021-11-05 10:00:42"
                    },
                    {
                        "value": "90f5c375156d7069047b621d0cef40e27fbf5e6521849e0afac6dbb13d2a5495",
                        "timestamp": "2021-11-05 10:00:41"
                    },
                    {
                        "value": "93509742958d23889f9d19385f5fa05ee9c61410b85fb4b5b9c060f482ed156f",
                        "timestamp": "2021-11-05 10:00:41"
                    },
                    {
                        "value": "ed26ff258ba51d8a80af4607b548c0592656e63bc584484ebbb6ba630d9ec6b4",
                        "timestamp": "2021-11-05 10:00:40"
                    },
                    {
                        "value": "1a176d9861dca09013a6669959167f8174e0dd2c6e3e63e5e87831af9a1b274c",
                        "timestamp": "2021-11-05 10:00:40"
                    },
                    {
                        "value": "25846ff0872f97da3c781c7f6a7e8de033282e4d10313d7bdd72d02777412cf0",
                        "timestamp": "2021-11-05 10:00:39"
                    },
                    {
                        "value": "81486fcbd9022a02e65c2756809dc7c659a591ecf322b21d357c75e50324405b",
                        "timestamp": "2021-11-05 10:00:38"
                    },
                    {
                        "value": "e1cb209ef530b46a01d8d4621eeafd83a89805d7fcd42fa6d055f8ebad165202",
                        "timestamp": "2021-11-05 10:00:38"
                    },
                    {
                        "value": "be70345378f6c784091bbcfb769463502c0ea093546393201d0c599f79026aa7",
                        "timestamp": "2021-11-05 10:00:37"
                    },
                    {
                        "value": "0139d73b005b53e06095d6725b68172e5f6d1ade74d0a76fd3399396825353eb",
                        "timestamp": "2021-11-05 10:00:37"
                    },
                    {
                        "value": "badac28c0fb34963097aca432d52b455698f0c75da9b487d76d1890866db14eb",
                        "timestamp": "2021-11-05 10:00:36"
                    },
                    {
                        "value": "1854332e9be17d635b25be128099ce22f39f3dcd887ea697be605a0b1178b930",
                        "timestamp": "2021-11-05 10:00:35"
                    },
                    {
                        "value": "21706d2cae50e85ed7a08ceb5f98b9a9aef25c4933fcd16b9bcab4b32fd1285e",
                        "timestamp": "2021-11-05 10:00:35"
                    },
                    {
                        "value": "7dee63acb991c4634714bf168395a27c6ca30d9bd66b2750d8b02971f5be23a2",
                        "timestamp": "2021-11-05 10:00:34"
                    },
                    {
                        "value": "2b146da7410057ab01ea677b2a68ad6a51b5e54cdf0f1b026158051345b48e8a",
                        "timestamp": "2021-11-05 10:00:33"
                    },
                    {
                        "value": "2f817ac1f6eab0d8fc9ef15c64fafe8772eb8621ab0effd6d87c1521640f6593",
                        "timestamp": "2021-11-05 10:00:33"
                    },
                    {
                        "value": "86a3584382110d71814d11aed0b7650407c8f6400a38ad45212b839152e6e95d",
                        "timestamp": "2021-11-05 10:00:32"
                    },
                    {
                        "value": "f28c9267a7453992ee747a116fc46c921417fd56bb8ba19498dc76e22c2b7b21",
                        "timestamp": "2021-11-05 10:00:32"
                    },
                    {
                        "value": "656b6fb759adb05bfd414a491a156b8348c0af2f760e7ccaccac546ff625517e",
                        "timestamp": "2021-11-05 10:00:31"
                    },
                    {
                        "value": "65c25a147f3220871ed41f3298ee55cc404efb6fcdedb4af3ba2f34a0b54e1bc",
                        "timestamp": "2021-11-05 10:00:30"
                    },
                    {
                        "value": "c0ecf645dda8837381c236850d51dcb60cd903c0a35c38d16bf7176bc6830547",
                        "timestamp": "2021-11-05 10:00:30"
                    },
                    {
                        "value": "a10f0e188da684caa1f635985bb297b85998c080feae1b61c7e70881df5b1206",
                        "timestamp": "2021-11-05 10:00:29"
                    },
                    {
                        "value": "cd96e8fe91bc27286423c4369e5e911a74f7024f27e431e0e01e30887072e599",
                        "timestamp": "2021-11-05 10:00:28"
                    },
                    {
                        "value": "e2af71284c3f8154a57f5124255a91b0b0be0cedc76eaa70e9008293474eb6d1",
                        "timestamp": "2021-11-05 10:00:28"
                    },
                    {
                        "value": "58049332f4c57eff66ae1948380999544a316eed3113f57ee9a043ffce6607d7",
                        "timestamp": "2021-11-05 10:00:27"
                    },
                    {
                        "value": "ffa060e773bdb55872c3769970ee6b7b4c0ac345567df6ebd72aad23af1bb21d",
                        "timestamp": "2021-11-05 10:00:26"
                    },
                    {
                        "value": "ff7bedc422d290ee290501b2882d7279ace1de6700232f2f6025b3f49a1ebe0f",
                        "timestamp": "2021-11-05 10:00:26"
                    },
                    {
                        "value": "c2fc99a3ca276732e774309a87ad7ef5cac7b3aad4de5144508331c2bfd0286e",
                        "timestamp": "2021-11-05 10:00:25"
                    },
                    {
                        "value": "46b2971ee9a1d821ab2e092ef6da3a2e725d0c82e3052eec9824ffa1edf0b46e",
                        "timestamp": "2021-11-05 10:00:25"
                    },
                    {
                        "value": "1dd0355b1b4f025aa484bf62478afd2d1bc01fb261f0f0d874907a6ab7c19074",
                        "timestamp": "2021-11-05 10:00:24"
                    },
                    {
                        "value": "347f5cdcea32b176930b35961afc85600df7189d4625b56dabe696d9abc6ec74",
                        "timestamp": "2021-11-05 10:00:24"
                    },
                    {
                        "value": "04807a3f493275b2ebd7073d55c91330412af239ac83d1dcf71902400ec2c9fd",
                        "timestamp": "2021-11-05 10:00:23"
                    },
                    {
                        "value": "3239f45ed65d50474381167e93b4464de0cc46295a5f5797b2d9ccabddebaa7d",
                        "timestamp": "2021-11-05 10:00:22"
                    },
                    {
                        "value": "caa56a845caa5b50a9aee5112471259ed168edf3217e02b867391d78a2f8fb79",
                        "timestamp": "2021-11-05 10:00:22"
                    },
                    {
                        "value": "6fc7d73fc3d51b90cf210e7e0870d7c4ff315c35ed3a88be0d3d5e79d36d3151",
                        "timestamp": "2021-11-05 10:00:21"
                    },
                    {
                        "value": "57646e3d19870f56f359e0a6edfdd9ec79b755d2b096f23ecea292bbc0ce9bb6",
                        "timestamp": "2021-11-05 10:00:20"
                    },
                    {
                        "value": "b8e9c5b899e99ed6dae6379ccba5b7f047768f23bf2dfba6de5ddfb89e5fe660",
                        "timestamp": "2021-11-05 10:00:20"
                    },
                    {
                        "value": "6b4713a0843efce36392a66a634753455a6cdf3b94266e5f410aa583346a07a3",
                        "timestamp": "2021-11-05 10:00:19"
                    },
                    {
                        "value": "a2c3872247492000311615238972042f1ad0f81f4857b488ad47b18da6edef32",
                        "timestamp": "2021-11-05 10:00:18"
                    },
                    {
                        "value": "b2269e1d6c03fd20dbc8121b1a0bd591ae59d0202858aa0f9ec6e029d6c0c55e",
                        "timestamp": "2021-11-05 10:00:18"
                    },
                    {
                        "value": "b48ce22ccf64018e7b44b89c78a541234b97cf65bb48363356c38fd24c6c443d",
                        "timestamp": "2021-11-05 10:00:17"
                    },
                    {
                        "value": "6160f69cdb3ab172f7ba4ae0a090d58720c14542831e0b5a92963e417b301ac0",
                        "timestamp": "2021-11-05 10:00:16"
                    },
                    {
                        "value": "0fd8fddf53dcd3a1dd48bdc35bc12e6249b8c620f31d45d8793bb86e6852c50c",
                        "timestamp": "2021-11-05 10:00:16"
                    },
                    {
                        "value": "d305f00393263c8c44e0fab023ff0be38a27815346b1976418959d97817e5e8d",
                        "timestamp": "2021-11-05 10:00:15"
                    },
                    {
                        "value": "6261f5b9c160333e2305908b0ccc25e37dff89be02fc44d5c0bb63f270420edc",
                        "timestamp": "2021-11-05 10:00:13"
                    },
                    {
                        "value": "921fb066d82ac26f9049f315ffd981e51037c8dc804139892824524440810d06",
                        "timestamp": "2021-11-05 10:00:12"
                    },
                    {
                        "value": "fa7599ed41bc46e2c44df78eb81baca1f21bc4de39690591ee9860f6b5641909",
                        "timestamp": "2021-11-05 10:00:11"
                    },
                    {
                        "value": "fc3e3a30b0242ff8726cd85586abf981b6114bf231c3eb295d06b36e6b9d68c8",
                        "timestamp": "2021-11-05 10:00:07"
                    },
                    {
                        "value": "e987a1040dff2416663a216c0a8b9db267435a9461f5b4883951a82cf9194132",
                        "timestamp": "2021-11-05 10:00:03"
                    },
                    {
                        "value": "31c1e79528d0ee43d696fe236705999760017754d6a639d98856264b817c6903",
                        "timestamp": "2021-11-05 10:00:01"
                    },
                    {
                        "value": "2350b5a5ea329990fdedc059700986e988cf7462f93a390695f7fe904c8eab86",
                        "timestamp": "2021-11-05 10:00:01"
                    },
                    {
                        "value": "12cb06e2faa018c62f8bc1bcdd538afd55d0ba5ab1c4cbf0bb5f8c696a3dfa42",
                        "timestamp": "2021-11-05 10:00:00"
                    },
                    {
                        "value": "cfe71558fdd3861890dc5721d8deae6ac0b03cd4d91ab29e9e7c0b6b3aa6eec4",
                        "timestamp": "2021-11-05 10:00:00"
                    },
                    {
                        "value": "bbb638d6100587df10946ba3d470f207e879ba80cdde3aa4c08c4192b8d50503",
                        "timestamp": "2021-11-05 09:59:59"
                    },
                    {
                        "value": "35fe6afca9e3e93383d342898dfd0fe46dc73b2ab91d9fb38645e16e2198302f",
                        "timestamp": "2021-11-05 09:59:59"
                    },
                    {
                        "value": "df59278ccb69c50c39ad40915a34ae485cab377f5cb45e5121ab2ba72ce21ece",
                        "timestamp": "2021-11-05 09:59:59"
                    },
                    {
                        "value": "2c1825c6cb626bd4a417daf17031d7cb2e8c966874da0f02c62e00d291bad58e",
                        "timestamp": "2021-11-05 09:59:58"
                    },
                    {
                        "value": "7fd61b50108deac5ecbc1f86fa7ef7bd2034210eb4c6ebfc61c6eaf851462829",
                        "timestamp": "2021-11-05 09:59:58"
                    },
                    {
                        "value": "6003c254007df54978d38718c5c7713e90eb4000fc48497055cd2383bd40541d",
                        "timestamp": "2021-11-05 09:59:57"
                    },
                    {
                        "value": "3e3caaf871fe6394e0b9dc244386ed4cec8497ca055345a8423d0fbe3d4cdf27",
                        "timestamp": "2021-11-05 09:59:57"
                    },
                    {
                        "value": "a6b08709128ceb1be5c03419db202a85ef8839f2ee239c790c9c8e33d8de35c6",
                        "timestamp": "2021-11-05 09:59:57"
                    },
                    {
                        "value": "bde844f0ec27955bcd092397612b94ef6eeded05ef036f31922490593e7e7ff0",
                        "timestamp": "2021-11-05 09:59:56"
                    },
                    {
                        "value": "7d05644078ef9b0afa9afeb3f81820c0215d2e65a5dd8f245ec4ea9bd36f89f3",
                        "timestamp": "2021-11-05 09:59:56"
                    },
                    {
                        "value": "09c46df96d4c485cbd6ac2562f252a98625323c43ae08e18661d6c7d0af22688",
                        "timestamp": "2021-11-05 09:59:55"
                    },
                    {
                        "value": "da353eedea3e28d4dfe416321ac768d3cbaeb2ae0a68d041d26ef8eb1ff79a97",
                        "timestamp": "2021-11-05 09:59:55"
                    },
                    {
                        "value": "b8866ec6b29bc40dda0ba5a8aeb16391a982729cab67f8ed1b2c2cfd91e802e7",
                        "timestamp": "2021-11-05 09:59:55"
                    },
                    {
                        "value": "f6416a63f33c35c15a1b874b323d42a16fda075795592908d64085945d4ef5d2",
                        "timestamp": "2021-11-05 09:59:54"
                    },
                    {
                        "value": "bf7115512572a32bb1d56dd6e3fb4892ac46a50f851dc31fccf61a324bf4742b",
                        "timestamp": "2021-11-05 09:59:54"
                    },
                    {
                        "value": "567ffcd7ad211398c6d5e81ce7fed6932949c26c27b010a04668b5965160ee5c",
                        "timestamp": "2021-11-05 09:59:53"
                    },
                    {
                        "value": "bbc759c3425cea566afb0439e3f185aab0a40ad657634d4569893bf129d4fc4a",
                        "timestamp": "2021-11-05 09:59:53"
                    },
                    {
                        "value": "8583ac8cc64c863e27dd0a8a0cb9e458d9889e1eab700b85ea4bc071c9b158fa",
                        "timestamp": "2021-11-05 09:59:53"
                    },
                    {
                        "value": "1200626eb7487b1935518934db2052a66dd0f3f7e54f306332e7760c2d0e8f0b",
                        "timestamp": "2021-11-05 09:59:52"
                    },
                    {
                        "value": "0a0fa1618c07fca9c8b3aaec85ae2c9c80fc5099be3812d315609262144ccc52",
                        "timestamp": "2021-11-05 09:59:52"
                    },
                    {
                        "value": "b99c8588901db8e64e87bc48f68f527e16e71e99000cbe1500ff9b9a1fa399c2",
                        "timestamp": "2021-11-05 09:59:51"
                    },
                    {
                        "value": "f5a83b4399cca3fe2f5a6601178b8ea77cf3597cf15dc1a2ee62c3759d2f8444",
                        "timestamp": "2021-11-05 09:59:51"
                    },
                    {
                        "value": "c0cef09e032d27854d011cf9107a6ffdb894893884f2c32cf73b28ae85ad2d96",
                        "timestamp": "2021-11-05 09:59:50"
                    },
                    {
                        "value": "1769f540e0b9a799333ecdee37c980aa64c541734af70bd57f83580c3b33cc36",
                        "timestamp": "2021-11-05 09:59:50"
                    },
                    {
                        "value": "10c761fef9ef51224c9ed2e2eb3cc0cc42d23bcd4b7d27cc7079d6a7cd00213e",
                        "timestamp": "2021-11-05 09:59:50"
                    },
                    {
                        "value": "a096d65910670e5a5c4962b28421a03a9ff338b087ae966635f299a2b652c02b",
                        "timestamp": "2021-11-05 09:59:49"
                    },
                    {
                        "value": "562f0f6ac25d1f30fc0bc60af144254cec0fa86148e31507a646b461ca821de0",
                        "timestamp": "2021-11-05 09:59:49"
                    },
                    {
                        "value": "cab619430246a9a06c0a729368edfc0b7f42ad6db1cb299f06ec7efdd23a4205",
                        "timestamp": "2021-11-05 09:59:48"
                    },
                    {
                        "value": "5f09bb073a7146078ae82e31935758230fcc03fdb7861cacac18b4ff7cb90a9f",
                        "timestamp": "2021-11-05 09:59:48"
                    },
                    {
                        "value": "5a3d83c01fe1f858eded771b0a3974266ab83585ec6d466fc6adddd5b42cc45e",
                        "timestamp": "2021-11-05 09:59:48"
                    },
                    {
                        "value": "fc981e23a77acd3211c1616ade10c95486c6942cd3fe3d9b707bc4ae1e3d07ec",
                        "timestamp": "2021-11-05 09:59:47"
                    },
                    {
                        "value": "2087086ac5cca0d80701072eb7dd2f3853cf178f1c6a37eacbdedc8acf1c654f",
                        "timestamp": "2021-11-05 09:59:47"
                    },
                    {
                        "value": "e72b06761cbc6eb16df30326fa91d75cfc23b5544262b66e2fa850d207b0c672",
                        "timestamp": "2021-11-05 09:59:46"
                    },
                    {
                        "value": "82656b4ced9d7f35c75b89773f5f6447f39632262115aa96cbe2886a602673f1",
                        "timestamp": "2021-11-05 09:59:46"
                    },
                    {
                        "value": "7a53b4ccbd531cc30ac5860060ac184ecdd9284e154ea9e77dfad7c4db3410d8",
                        "timestamp": "2021-11-05 09:59:45"
                    },
                    {
                        "value": "f159ad235588890b739882096083b23f77685de83549c6a8f654e96d09a69c2d",
                        "timestamp": "2021-11-05 09:59:45"
                    },
                    {
                        "value": "af19b1e89d06071ba8b21eff0749941ce0b0ccfa563eee3e615546dfac3cdcb6",
                        "timestamp": "2021-11-05 09:59:45"
                    },
                    {
                        "value": "d0ed6c1df29dfbd3a6d7521a2ac117ffcf4ac66a153025fef683aa4577923cdb",
                        "timestamp": "2021-11-05 09:59:44"
                    },
                    {
                        "value": "36a8f65ff4baaefd2fb1af60de6eb67a92450fff750a61ba2c0ad21c557deeec",
                        "timestamp": "2021-11-05 09:59:44"
                    },
                    {
                        "value": "1421e4dc863e3cd72ad0283c4b2eacb8951ce365b363e10cc6121d0fd5a3fa9a",
                        "timestamp": "2021-11-05 09:59:43"
                    },
                    {
                        "value": "29c1f94b359757cfef5ca9c30a22db478e056f40b064c3a73de98dfdeb4a50f0",
                        "timestamp": "2021-11-05 09:59:43"
                    },
                    {
                        "value": "9c218b8b681f2ca356a27791ef2c5b488d9f6a3907b7406b452e8c4da6616e90",
                        "timestamp": "2021-11-05 09:59:43"
                    },
                    {
                        "value": "5ffd28f9cd72f17e5593198a8ea8a91c839c181ca630fab0efe5af1a01afe1b9",
                        "timestamp": "2021-11-05 09:59:42"
                    },
                    {
                        "value": "820d786ae7fa3e8d78a3dc20b8f82b5627e2dd464b40dfccaeeeba9269366a9d",
                        "timestamp": "2021-11-05 09:59:42"
                    },
                    {
                        "value": "0e35faa0c69d7f1c216695d109a27d26cde2e052ceb4afcf721140a6b3547412",
                        "timestamp": "2021-11-05 09:59:41"
                    },
                    {
                        "value": "9430e7f14fe74f4d070ecf78741cafa8b3ac497dff1733ac2797491d2d7cfbdd",
                        "timestamp": "2021-11-05 09:59:41"
                    },
                    {
                        "value": "8ea9ab6b77bc0987a49b66ddaf39b310b1082b8b2afdbf1fddfe24ff4dc637c7",
                        "timestamp": "2021-11-05 09:59:40"
                    },
                    {
                        "value": "c98ea9b4caa51d599bbbf85fdb1951c6b4a843fb5fb488c0d4d68b15d39ef2ac",
                        "timestamp": "2021-11-05 09:59:40"
                    },
                    {
                        "value": "655bd678ffa604f9ea12b6577c7e56a358be0d78da445e7f17ead49a3ed2b575",
                        "timestamp": "2021-11-05 09:59:40"
                    },
                    {
                        "value": "d78f0fc25366c71b1e05a96cf09624d9107499a7361ba03662f4ddc084285ccd",
                        "timestamp": "2021-11-05 09:59:39"
                    },
                    {
                        "value": "f87a9d10f5abcd8d8e2dd413147b84dbe535a1d3ca21518c458b7955ee49f802",
                        "timestamp": "2021-11-05 09:59:39"
                    },
                    {
                        "value": "4176265146eac44355b7ae2e7efde2193f2b4318d2fb58d46e2c0bc275950b14",
                        "timestamp": "2021-11-05 09:59:38"
                    },
                    {
                        "value": "7621e93d51b3aa43cd06feaa3a75509d9be340da48901e1664ba9a266ac0c537",
                        "timestamp": "2021-11-05 09:59:38"
                    },
                    {
                        "value": "2f35dcfa4066fd425d5d5c6f20851ff9823776f7ac30e5038707baab21cd7820",
                        "timestamp": "2021-11-05 09:59:38"
                    },
                    {
                        "value": "11c152163406b2ac4b360f6f1a66e8815505e79746516291664e407b8bab618f",
                        "timestamp": "2021-11-05 09:59:37"
                    },
                    {
                        "value": "ab82e2beab4e330feb1b5d4f23aff34974352d66e3716ff5fd6604b148ef54ef",
                        "timestamp": "2021-11-05 09:59:37"
                    },
                    {
                        "value": "2c6632e06c0013f1828919bd43464c437623a10c754fced95adae7411d19c70e",
                        "timestamp": "2021-11-05 09:59:36"
                    },
                    {
                        "value": "cac85aa2f0ce194520b4cfbb0aac2e8bc5ff4ca12188c6d3aa3d2f0742f29898",
                        "timestamp": "2021-11-05 09:59:36"
                    },
                    {
                        "value": "c5802d4cb134b8830002bee17130805550e39d4883f60fb3bc8ef8e0168790fb",
                        "timestamp": "2021-11-05 09:59:35"
                    },
                    {
                        "value": "f3cc4dcf4993caeba7275550e42a2061604f66b57f11c43403993f70c521367d",
                        "timestamp": "2021-11-05 09:59:35"
                    },
                    {
                        "value": "6165c2574bdcd0feacd264f30d6de1bf29067b9cfc8f6a8e59ec322b2557f5ce",
                        "timestamp": "2021-11-05 09:59:35"
                    },
                    {
                        "value": "9fb5ac2da5a6b21c94ed0eeb0d774b73d82dc28959d7b823ea36364e88a489ca",
                        "timestamp": "2021-11-05 09:59:34"
                    },
                    {
                        "value": "8bba6b5bdf82671805e6896799ab0beb2710c35e5509b70d57c1a41f380abca6",
                        "timestamp": "2021-11-05 09:59:34"
                    },
                    {
                        "value": "ae17bd515acb248ffef15486a2aa70dd2232bc676dc2c100e89238a19f1ba0d9",
                        "timestamp": "2021-11-05 09:59:33"
                    },
                    {
                        "value": "742907969a6425d6fabd2c7abd83a2ffce8ca7519b672ab038e8734a77dd978f",
                        "timestamp": "2021-11-05 09:59:33"
                    },
                    {
                        "value": "6a8ba24e1f31d92fd5f7698055b6837e38daa5dc2f9b86a4e09856eab5af5687",
                        "timestamp": "2021-11-05 09:59:32"
                    },
                    {
                        "value": "0a96c47adec0ff79ac1cfc7e7790e96d73c9e005cb2100d71beca77477985d62",
                        "timestamp": "2021-11-05 09:59:32"
                    },
                    {
                        "value": "b552f2c1d1c867023dccf6d00f83e93fa20b1d330e6b564f441ed50054a59414",
                        "timestamp": "2021-11-05 09:59:32"
                    },
                    {
                        "value": "93203fe8df723aa042b10d854209c003078968969aebeb70cc18aa97f85769bb",
                        "timestamp": "2021-11-05 09:59:31"
                    },
                    {
                        "value": "211de2e30b1a0231885762fb9817109ef2c2a13d0f2e4dcc1667285c9c9d73af",
                        "timestamp": "2021-11-05 09:59:31"
                    },
                    {
                        "value": "4fcc6970edd658b1c26f77236e90030a2221d6b8628858954664d8549ebe2608",
                        "timestamp": "2021-11-05 09:59:30"
                    },
                    {
                        "value": "c7d3fc33fef82d9ff48ef1d3cd61d8b4628a22448e1d8bece6c20040fa54b525",
                        "timestamp": "2021-11-05 09:59:30"
                    },
                    {
                        "value": "3c6c50b766e222e4bbf7b74016011c01d3a4f07f4d8b244aacc2bd503fa25194",
                        "timestamp": "2021-11-05 09:59:30"
                    },
                    {
                        "value": "80e172ef4702ce055b89ccb58833d1b6d86f6b74251611c75a81f117f776d03c",
                        "timestamp": "2021-11-05 09:59:29"
                    },
                    {
                        "value": "79bd9d401954a11e5e4a4592c44207a503582f6a563af69f04e79a9ba155b569",
                        "timestamp": "2021-11-05 09:59:29"
                    },
                    {
                        "value": "73ef474c0fcee2e0211c3e091c0aec703c7d5549b191ad88e45cd626d9383007",
                        "timestamp": "2021-11-05 09:59:28"
                    },
                    {
                        "value": "ed93dac8e5b548993fe6d83ab40d37a5fe054cbec29f68f2eaf70d5a26aba6f6",
                        "timestamp": "2021-11-05 09:59:28"
                    },
                    {
                        "value": "1bb3d5eec9c8880bfc9dc1eac528cbbf2f4d5bce0c704b0a03879522e52e9539",
                        "timestamp": "2021-11-05 09:59:28"
                    },
                    {
                        "value": "5be34e7f537dfba2d91e0f26bd6a19d7ad224a24963bbbb4f1f68b4205eb577f",
                        "timestamp": "2021-11-05 09:59:27"
                    },
                    {
                        "value": "a8bb7d1e9ae99339f959d0266f26f8661e9bb5a89d27ae8c36187c0b9ee35a4c",
                        "timestamp": "2021-11-05 09:59:27"
                    },
                    {
                        "value": "5683ee8116977d46a608848dab857b5bd165f9f78459386a501d4b29eb213430",
                        "timestamp": "2021-11-05 09:59:26"
                    },
                    {
                        "value": "55953eb9a8541d2fd29b02c5bd3be400509f4caa65346c08e67245c9b2c98d58",
                        "timestamp": "2021-11-05 09:59:26"
                    },
                    {
                        "value": "3ff76e45fe556566200ae9b66f48b0ce9148bb53a252244962cbb8effdf54bcf",
                        "timestamp": "2021-11-05 09:59:26"
                    },
                    {
                        "value": "c428ab7e79c537f50048c412cdb3c21136424d7bc0e890b7d0bf699dc960459a",
                        "timestamp": "2021-11-05 09:59:25"
                    },
                    {
                        "value": "a44c5293680c1fa147fbcb87b512e61cdcf48fa8236f1fc05c5d7a3920ce26a9",
                        "timestamp": "2021-11-05 09:59:25"
                    },
                    {
                        "value": "e435d0afcc963e3f5a8edd6313d4a914e8b76de3c6c1e7095fdb8979909bad58",
                        "timestamp": "2021-11-05 09:59:24"
                    },
                    {
                        "value": "2fe96f3293ca6d6dbfe7a0bc84ae763cb0f4a3fcb4d0ff4993b1dd6917c170a8",
                        "timestamp": "2021-11-05 09:59:24"
                    },
                    {
                        "value": "f26173027a186039376ee8d4db8bce3c3250b867711b46472df567ca3838e31c",
                        "timestamp": "2021-11-05 09:59:23"
                    },
                    {
                        "value": "18e9652753303f2eb3a5c6e67f86cae4a69cb37bd73b031adcadbca5dcbaae30",
                        "timestamp": "2021-11-05 09:59:23"
                    },
                    {
                        "value": "5dd1a1f543501454331d0f777beb54f6d9c118fa85d7b7113ccae9fe882a77fb",
                        "timestamp": "2021-11-05 09:59:23"
                    },
                    {
                        "value": "982c78489ac42b04c1d3b2ac03399af3fd98dd74416ebd0dee314017cb3e798a",
                        "timestamp": "2021-11-05 09:59:22"
                    },
                    {
                        "value": "89dd1b806da207c471fc5021407f860aaeb87ac469dc2c86321d9c9171407c3a",
                        "timestamp": "2021-11-05 09:59:22"
                    },
                    {
                        "value": "f2b630178af71b571cb1d15c5eeb7f3713f0b36e1c679e194f1cd8d4c7fc306d",
                        "timestamp": "2021-11-05 09:59:21"
                    },
                    {
                        "value": "b230ed92b3c2b6ee1a2d57aeb061725e8f491d6dbd2d1cd10fc78791324fc7bb",
                        "timestamp": "2021-11-05 09:59:21"
                    },
                    {
                        "value": "37f8f7f8e82a76bef3a60a9d41452d04556752e98850fd83eb299bbb6d12429d",
                        "timestamp": "2021-11-05 09:59:21"
                    },
                    {
                        "value": "48e7748b1bb9fdfbbde14122678334871377dbb52e9a7a769668b7f288829c75",
                        "timestamp": "2021-11-05 09:59:20"
                    },
                    {
                        "value": "9fa1e990ab2b72fe4d0d2c3e7b3aaa2af103d0f24c1a0155dc9b957872336a99",
                        "timestamp": "2021-11-05 09:59:20"
                    },
                    {
                        "value": "d9ed3c6450dd9fe94f561fb70027202f3fdece153e770383688bb838b01755e0",
                        "timestamp": "2021-11-05 09:59:19"
                    },
                    {
                        "value": "d8fbef8783e7f8bc0d0e77a93c990aa7da5dfe8fdef12ff27e46000d1730e789",
                        "timestamp": "2021-11-05 09:59:19"
                    },
                    {
                        "value": "c903f29d96ae890f40f10f4718b2eabd379ed989b5a25669ed6696c68602e71d",
                        "timestamp": "2021-11-05 09:59:18"
                    },
                    {
                        "value": "4d34e4114b5f6e8dd09fb5e2c694f1c6ad5c01e060f34af496ce88e630a09326",
                        "timestamp": "2021-11-05 09:59:18"
                    },
                    {
                        "value": "b016606cf49286e8a46f50455fc97f32e7205c3e915048062a6913cd8809ef9a",
                        "timestamp": "2021-11-05 09:59:18"
                    },
                    {
                        "value": "aa5222ccf1311e530481cbf7d457ce1ac4c1f3abb7370df279093162b1a004f9",
                        "timestamp": "2021-11-05 09:59:17"
                    },
                    {
                        "value": "5b2fbad34a9ccdd2d70d3bd410e29f589c5021f4d2570ac1ba0fc853cb88a919",
                        "timestamp": "2021-11-05 09:59:17"
                    },
                    {
                        "value": "44a8d13045c47cb1788e63136742e35a837f5b342f130abb0ba7b1b24da30a70",
                        "timestamp": "2021-11-05 09:59:16"
                    },
                    {
                        "value": "3918be81bd45f1646d84a45195cfb7002a06c93b70475560b3d80fe0f16a416a",
                        "timestamp": "2021-11-05 09:59:16"
                    },
                    {
                        "value": "8a27503178baf3a96eefa1f0d135182f0612fba997568dbb82c9076e9de9ae7f",
                        "timestamp": "2021-11-05 10:19:51"
                    },
                    {
                        "value": "06fcbf94001a410c9e010415ebe6e0dbcd1aa4cf8b393685356bbfd2726b9906",
                        "timestamp": "2021-11-05 09:59:15"
                    },
                    {
                        "value": "73d5e1b4c4d656b8e89a69ff8d04299597c51086b0fa6f697ab9a3fec12c1754",
                        "timestamp": "2021-11-05 19:58:33"
                    },
                    {
                        "value": "815d4e977a97b5c19e11040d90eb40d4908e4a83cdf169366d524aec403982df",
                        "timestamp": "2021-11-05 19:58:34"
                    },
                    {
                        "value": "54f880348349c720e9af439300f854b60341a4cd76c65ff514336d6cd2b97d7b",
                        "timestamp": "2021-11-05 10:19:49"
                    },
                    {
                        "value": "3b7bebc9623f74eefa36b591c370b3effcbdf221c43a0d784f5992be01bd5ff9",
                        "timestamp": "2021-11-05 19:58:31"
                    },
                    {
                        "value": "438d8b60f56eef365449206a758353b707ae429c9a88960bd32d0bce668a4c28",
                        "timestamp": "2021-11-05 19:58:32"
                    },
                    {
                        "value": "9aa73f04f3bd06982f417abeb261b7e35f91aeb6847ba0ae3f897cb0228c7cb3",
                        "timestamp": "2021-11-05 19:58:29"
                    },
                    {
                        "value": "2d3229f89c7d48cd89136197b180506a7b66d4716d45e4c082b913ffc0c4cccf",
                        "timestamp": "2021-11-05 19:58:30"
                    },
                    {
                        "value": "25b91c5e65ced17c202988efa15f0a6041e152962fa2414e1b9df0d1ab8a86b0",
                        "timestamp": "2021-11-05 19:58:25"
                    },
                    {
                        "value": "335c92593623c2e3573f85d48caf7217bba7aa17547c78b6dbb5fc8a7705ad42",
                        "timestamp": "2021-11-05 19:58:26"
                    },
                    {
                        "value": "22b8110f9c08c04fd00da2a9d386aba8b1f2572442d2d6fbfc85e3831dac0cf6",
                        "timestamp": "2021-11-05 19:58:27"
                    },
                    {
                        "value": "30238d34d6e5042fdd4029008d48486eaf1fae34ee996e681f267e3acb73bd35",
                        "timestamp": "2021-11-05 19:58:23"
                    },
                    {
                        "value": "134e59689b4124c2ca2b6a5f6e1bb7e705395fadf321c6b301725c2753847cbb",
                        "timestamp": "2021-11-05 19:58:24"
                    },
                    {
                        "value": "84bfc96598d40d59aa482b696619e80733aa2fc19cbe6da4cb4f52f937a4f9dd",
                        "timestamp": "2021-11-05 19:58:20"
                    },
                    {
                        "value": "53a1ca6c42f837b0cfdb001f858c88cf2b32f08e22e666af0eeb2a3666e326cc",
                        "timestamp": "2021-11-05 19:58:21"
                    },
                    {
                        "value": "0f890a3bbbb5fd51c4125e460c5088a5e7458b797120c4919643ffd66a83c258",
                        "timestamp": "2021-11-05 19:58:22"
                    },
                    {
                        "value": "59901082c43254b91ec4edc94d51f0ea5dc3966d4861113e819e1e17d7882ac3",
                        "timestamp": "2021-11-05 19:58:17"
                    },
                    {
                        "value": "063353b85ff1c933a98b82a67da2e16cda7c1ae2eeda27c1baf158593b54e430",
                        "timestamp": "2021-11-05 19:58:19"
                    },
                    {
                        "value": "0d814a797e3c5701e294fb517389491943ea911570de804ab24f7c2d401d7bfa",
                        "timestamp": "2021-11-05 19:58:13"
                    },
                    {
                        "value": "f561a9445e1c29308e5f42e1f63b1a53ca6b14870e9bf337af0147af684d4734",
                        "timestamp": "2021-11-05 19:58:15"
                    },
                    {
                        "value": "c64947617710cf80e68f368bb9d27e6d512d5b80136e4b1f43be28ce7e819388",
                        "timestamp": "2021-11-05 19:58:16"
                    },
                    {
                        "value": "4e411413be2c11700b0237965103ac35a2fbe7e6778606562a928aeea8e7f5a8",
                        "timestamp": "2021-11-05 19:58:11"
                    },
                    {
                        "value": "f7093531ae322a222906370f5496cd0cbfebdbc86188f50cbd4e1df7018192a2",
                        "timestamp": "2021-11-05 19:58:12"
                    },
                    {
                        "value": "509235d240d0d89fecb145db0f773d7e2833fb771d6cef4ecd20e4a688f46dd3",
                        "timestamp": "2021-11-05 19:58:08"
                    },
                    {
                        "value": "d2234d9bda82c4350442f343247be563ddc148c4a0aeed9fe05c3e4c6f3cd18f",
                        "timestamp": "2021-11-05 19:58:10"
                    },
                    {
                        "value": "084e86016065dd8b50680adbb55e5c84bf341b30c74b1426d96fbe4fd67a9978",
                        "timestamp": "2021-11-05 19:58:04"
                    },
                    {
                        "value": "62da4d1404f8478e7f1e11fdfe6f1863dff468b40704289a3238b19a1e3247b4",
                        "timestamp": "2021-11-05 19:58:06"
                    },
                    {
                        "value": "de46d8571394bf96cbc517362f4da4fb9bf67f496555fff93e47deb147debb0b",
                        "timestamp": "2021-11-05 19:58:07"
                    },
                    {
                        "value": "49d3c4223844edaaddc6286194b01c0b1b6d2f60017f59bb12d429df72517f24",
                        "timestamp": "2021-11-05 19:58:02"
                    },
                    {
                        "value": "2ed9522766468d4458efe2e87fb9585c842ec68b9954aef1b28a13cf3e09966c",
                        "timestamp": "2021-11-05 19:58:03"
                    },
                    {
                        "value": "f6d2e4c66d4a11d48c1a7f94262c149c22ab3edda8d173e46654adec8301930e",
                        "timestamp": "2021-11-05 19:57:58"
                    },
                    {
                        "value": "3b30987258de26180dce5437b022bb302957ade97d76ad6f1338e8732837ac29",
                        "timestamp": "2021-11-05 19:57:59"
                    },
                    {
                        "value": "500a6322116b1bca30bc3a8dbf3335dc5fc1b713a345d91e9b2772fda8c6d9ea",
                        "timestamp": "2021-11-05 19:58:01"
                    },
                    {
                        "value": "b4275decf6191e463b51e44a3c706b025eedaea76f7f20fd9d25b8ffd4d181af",
                        "timestamp": "2021-11-05 19:57:55"
                    },
                    {
                        "value": "afd9e5e350d7f92a2bd7aeb4d57a9325b5725174cda48b96ab291e3bd0df2e73",
                        "timestamp": "2021-11-05 19:57:56"
                    },
                    {
                        "value": "a351f6f97967def79cfc60deb652b7f556a0eec0f848f508bbe01ff70feaa425",
                        "timestamp": "2021-11-05 19:57:51"
                    },
                    {
                        "value": "37682b8092eae5c4b2be78a84297cc299b834f8197f1dab4d21d1f727d280f9f",
                        "timestamp": "2021-11-05 19:57:52"
                    },
                    {
                        "value": "74ae59ce7efcf77b3abb243d1a61dc2def9f4fdd02bef6975aab29e41a9b1deb",
                        "timestamp": "2021-11-05 19:57:54"
                    },
                    {
                        "value": "2275a192b82fe2e5b2ab8199f712c34ede19a45d2f62c92bc83b86b71a801331",
                        "timestamp": "2021-11-05 19:57:48"
                    },
                    {
                        "value": "25bb26b6d0722388cfa7fc1fb1f439a48ac7bf4063d790b20616dc561a678d70",
                        "timestamp": "2021-11-05 19:57:50"
                    },
                    {
                        "value": "9c77585685aa314862cc6dcaf601d7fbb41d05e2c53d79e183e38864fe095b14",
                        "timestamp": "2021-11-05 19:57:42"
                    },
                    {
                        "value": "e92ce45a36323cdf403d05b533f955a9c3ace4441a66a2bac089588870c93cbf",
                        "timestamp": "2021-11-05 19:57:44"
                    },
                    {
                        "value": "fbeddea023d6228a59ded3726eb0a7b49a86147b7f42c8bbea5cab3ce404f174",
                        "timestamp": "2021-11-05 19:57:46"
                    },
                    {
                        "value": "09c64a5019da3d685a4b696ffcb07fa93b75f63ca09c50e5ee498ac7a1b5f5b4",
                        "timestamp": "2021-11-05 19:57:38"
                    },
                    {
                        "value": "25790453c21a1efb574b3f3b5f0dfb593c9a844feab063db633f507a7a045d75",
                        "timestamp": "2021-11-05 19:57:40"
                    },
                    {
                        "value": "e96a17d3c658c28b8fd6a234efae95c6d3e1a56fd1e116eee2230f861ca00aab",
                        "timestamp": "2021-11-05 19:57:34"
                    },
                    {
                        "value": "8d67254bf62ecedaffe4d8ab9451d4fe26444c460b5e51fef57f50371d97548b",
                        "timestamp": "2021-11-05 19:57:35"
                    },
                    {
                        "value": "a9916281b620ab9577cce77e149cc687861daa3cba43afa3e46956ac88ce6107",
                        "timestamp": "2021-11-05 19:57:37"
                    },
                    {
                        "value": "16d867ddc82060958404c23ed3b083c737f62537af4a840ffa6528767d18fb10",
                        "timestamp": "2021-11-05 19:57:31"
                    },
                    {
                        "value": "4edf30873fd88c85615ba6cb69181fd3afd7e4fa12bb954db3de72fd9a32b9d4",
                        "timestamp": "2021-11-05 19:57:32"
                    },
                    {
                        "value": "cc517e8c060d7a5ca6d2badf8720c248b6f4b3a815cec9fe155bfff74cba783f",
                        "timestamp": "2021-11-05 19:57:27"
                    },
                    {
                        "value": "00001f735524811354eee5d391c5b5e578ade76b68fa7ed2145b2e808939335f",
                        "timestamp": "2021-11-05 19:57:28"
                    },
                    {
                        "value": "16c8a2ce526b1c312f18af6efc49f09d58ba4df8259af99655fceaaee23b2487",
                        "timestamp": "2021-11-05 19:57:30"
                    },
                    {
                        "value": "c785a7510da03075a02292f315e1d9b3e1ba3285e8c1b5e555f930981ec35de8",
                        "timestamp": "2021-11-05 19:57:24"
                    },
                    {
                        "value": "5e6ae556ef8742db9a050e7d45ad5a2d3f953bf87dc6ced9d70f276bef44be2b",
                        "timestamp": "2021-11-05 19:57:26"
                    },
                    {
                        "value": "1cf9298ccf9327f3c684a6c54d6947a197f28c2b2848f2f3c78e29cd2d485fb3",
                        "timestamp": "2021-11-05 19:57:21"
                    },
                    {
                        "value": "be3f0188eaefaf46af9b583f3d52a24311bdd38d1dcd7db5ab089e15f945060e",
                        "timestamp": "2021-11-05 19:57:22"
                    },
                    {
                        "value": "252779add4b4b98b5ce30c032617bdc3e0b941732b9c05f87ae5cf59e3964b4f",
                        "timestamp": "2021-11-05 19:57:23"
                    },
                    {
                        "value": "808cd626224a15567bc922c05fee4aab7a779b8b3b125768024116af6359c39f",
                        "timestamp": "2021-11-05 19:57:17"
                    },
                    {
                        "value": "40898da68dd909e760c1f83ad5023f412c4283b7bf097bfcc37b640594f8a174",
                        "timestamp": "2021-11-05 19:57:19"
                    },
                    {
                        "value": "6adeb7f7b6557779edfab8dad324121ed31d8f7aad285ea9f14587a43999155e",
                        "timestamp": "2021-11-05 19:57:13"
                    },
                    {
                        "value": "6232c9a151ff0e7cdff28efde5fb79c07c088110746c12de2b5a436cd12e45c9",
                        "timestamp": "2021-11-05 19:57:14"
                    },
                    {
                        "value": "7bc54c871efddcf145cd1028cb76dcba23e269e526bd1f7344429df0665367fb",
                        "timestamp": "2021-11-05 19:57:16"
                    },
                    {
                        "value": "32b0d68cf50a64447cbf83a37a6754ad7496d91fcf644ae3fca4908358279140",
                        "timestamp": "2021-11-05 19:57:10"
                    },
                    {
                        "value": "8b7dcc24ac3ba4cb01d4d7230ad1fd67f2a727d99e319b55b6f43649af70d5ae",
                        "timestamp": "2021-11-05 19:57:11"
                    },
                    {
                        "value": "ac5e7df0e9e9d49c3a2fe0085a9f0aef177c9462306ec0d58367859b9a45990e",
                        "timestamp": "2021-11-05 19:57:06"
                    },
                    {
                        "value": "91936066ced8223a54aec8849e9682c4eb9ca2c315bb4264be161402efe7d9e6",
                        "timestamp": "2021-11-05 19:57:07"
                    },
                    {
                        "value": "cb40190b2f6c9f813c2fe7569eb22138db24aeeddbd2e2c1a84d7562b1ab9634",
                        "timestamp": "2021-11-05 19:57:08"
                    },
                    {
                        "value": "60c7fd7d15b62aaa7c80309f0c7194269ea6203fda3bff5534c0607666245e34",
                        "timestamp": "2021-11-05 19:57:03"
                    },
                    {
                        "value": "e015b27baed64bf02a33670e1fd9a2d5be3175fc2784da83ed7b08e0f04783d1",
                        "timestamp": "2021-11-05 19:57:04"
                    },
                    {
                        "value": "0ecd4546af6d43363138a7ca283634f04ae1975d8a9e79af2693f39b7b2258da",
                        "timestamp": "2021-11-05 19:56:59"
                    },
                    {
                        "value": "3369d7f12d721da1b4e3da38d38905922e0dd183d3ce30046d4c38bf61ea7b82",
                        "timestamp": "2021-11-05 19:57:00"
                    },
                    {
                        "value": "761f2e0cbff3a493adc93c04025cb37c35fb27fa09c00dc76677851ccb9c45b7",
                        "timestamp": "2021-11-05 19:57:02"
                    },
                    {
                        "value": "3629ccea32f19319f78b04d8f599ef68849d55ec46f21cea831de86df12111d8",
                        "timestamp": "2021-11-05 19:56:56"
                    },
                    {
                        "value": "bffcb45e3412246eb554768ba4ffb1fce0f9275ee6533e18e0675166297a9127",
                        "timestamp": "2021-11-05 19:56:57"
                    },
                    {
                        "value": "c02926277a506542a33ccb5462f4ccafdb69a399b6e030d2f5673ea1e9879e63",
                        "timestamp": "2021-11-05 19:56:54"
                    },
                    {
                        "value": "f65a2ed6bbf1a5678734ec45a2efee10625877347ab69b7495e785296a9f5cd4",
                        "timestamp": "2021-11-05 19:56:55"
                    },
                    {
                        "value": "6131f2772fef3334fa54a1c90650dab82b7ef94222821d02b8a40c10741f33b8",
                        "timestamp": "2021-11-05 19:56:49"
                    },
                    {
                        "value": "52fbaba863fec5c14600b2b6d9814b574ff93d9ee56a1d1f499b7c150c10c879",
                        "timestamp": "2021-11-05 19:56:51"
                    },
                    {
                        "value": "db0d0ee4c8bb15222251a3d7d726ed80020e8a7c006bd6e74e1d63d183390074",
                        "timestamp": "2021-11-05 19:56:52"
                    },
                    {
                        "value": "0e178d22123e9805dbb755356113fc35e4ac3645bf8f69f8bc65fef9852f35ca",
                        "timestamp": "2021-11-05 19:56:47"
                    },
                    {
                        "value": "293d4e611833443b318c6850aa56b1b37706ce1e799dfd698b6117ecc9c2c258",
                        "timestamp": "2021-11-05 19:56:48"
                    },
                    {
                        "value": "06caf6daee0907612866c221e3665c596ad25d0cfd54632888bb5332c35221c2",
                        "timestamp": "2021-11-05 19:56:42"
                    },
                    {
                        "value": "25616a3d197a4c8c18aa82ce4fbe29791603b9282e21f864c5045858ff23c18f",
                        "timestamp": "2021-11-05 19:56:44"
                    },
                    {
                        "value": "76e3da9b423ec2a4f5ff222acca86faca3cdf177165469bf687cffe9628eb126",
                        "timestamp": "2021-11-05 19:56:45"
                    },
                    {
                        "value": "2ed84ce1fccb3e02cbc54de126b936e1dac85a72608a49bbce87f795ac5a197c",
                        "timestamp": "2021-11-05 19:56:39"
                    },
                    {
                        "value": "bf09caf41ae1987d01251f7533c2ff9327f65dd7a66af2e92013ba82d150b013",
                        "timestamp": "2021-11-05 19:56:41"
                    },
                    {
                        "value": "47fb0b7457dc29e7d69223fb334c9bf940f911e7170720245ec4a292a1053353",
                        "timestamp": "2021-11-05 19:56:35"
                    },
                    {
                        "value": "08a44358effd0ec981642f859903478a0084842b594765d34e0a80cf7f0a5de0",
                        "timestamp": "2021-11-05 19:56:37"
                    },
                    {
                        "value": "ff79f8535089c232f45e244f5a88bba42783d451993be91deff7455c6c9e3c8a",
                        "timestamp": "2021-11-05 19:56:38"
                    },
                    {
                        "value": "41e37ca75ffad6f4d12e77d2d0b5a535a2f10909988ff448b98d2f3d3b2cce30",
                        "timestamp": "2021-11-05 19:56:32"
                    },
                    {
                        "value": "f062b3759befd2ad9f104fa13f082b5278891ce067a88aaad3c19eeccaa30535",
                        "timestamp": "2021-11-05 19:56:34"
                    },
                    {
                        "value": "cc599d6f9c9962274b6501c5da9e185aedf233a43fc227fca93b2bcf9cf891ff",
                        "timestamp": "2021-11-05 19:56:29"
                    },
                    {
                        "value": "efafa766eef8dc3b4b22fbd88391cf5d85c212e4824b01021e599daf0fba508c",
                        "timestamp": "2021-11-05 19:56:31"
                    },
                    {
                        "value": "9091b23467aa9443aec0cf976f2f22dff3343095a2ae4bffb815c7b889b105a8",
                        "timestamp": "2021-11-05 19:56:26"
                    },
                    {
                        "value": "34318a785b2750d78e10ab38bc8d2f034a57ea262f74e263d35d8fd757b03c3c",
                        "timestamp": "2021-11-05 19:56:27"
                    },
                    {
                        "value": "1e8788ee3295b86c2e6203656b7b1508ccec9b78c5ebcff9f98187cb8af0bd90",
                        "timestamp": "2021-11-05 19:56:28"
                    },
                    {
                        "value": "91d5ac55c1643de4ca7d8a106d6ccf674a3133aaa0957a3b1a5a8295053837d8",
                        "timestamp": "2021-11-05 19:56:23"
                    },
                    {
                        "value": "99b98cbe5d6d9d07e8084e9dd8a1918fbc168efe744c6b66d76584afdbd42b5b",
                        "timestamp": "2021-11-05 19:56:24"
                    },
                    {
                        "value": "901dcab5ab0f84e099b3f4e03081437bcf90098163f2123f6461b779e722c972",
                        "timestamp": "2021-11-05 19:56:22"
                    },
                    {
                        "value": "2a3acdcd76575762b18c18c644a745125f55ce121f742d2aad962521bc7f25fd",
                        "timestamp": "2021-10-25 05:40:00"
                    },
                    {
                        "value": "a1368b6dab9947210d8cb8d7359ba1b2e0bf4fd97352072a0aa523cdcd0ac290",
                        "timestamp": "2021-08-25 16:00:38"
                    },
                    {
                        "value": "b281c2e2bf56179059013e46ce6a03752342502300b4df70b1425d6c4e5ecefc",
                        "timestamp": "2021-08-25 16:00:37"
                    },
                    {
                        "value": "d6fadc4e6068b3436a9a49634c214c3c85cfd131833ea9f526f127e84309f5cc",
                        "timestamp": "2021-08-25 16:00:36"
                    },
                    {
                        "value": "995e90fa136ed7b7b835096308f447a9c538472c21e5532879581cda86e9c893",
                        "timestamp": "2021-08-25 16:00:35"
                    },
                    {
                        "value": "42558fcc272a61a5591ec5c26fae058427b0a31dfcd06f0afb490c25c2ac975c",
                        "timestamp": "2021-08-24 21:45:29"
                    },
                    {
                        "value": "87e18a5125508b4e0110ed3fa864099a3423d78ccbb210b204cc670493b83b0a",
                        "timestamp": "2021-08-24 21:45:28"
                    },
                    {
                        "value": "383dc1fd500448e11f8c787aa282a117644a45518a074563d50fe817f0549ded",
                        "timestamp": "2021-08-24 21:45:28"
                    },
                    {
                        "value": "76be54f6563829ebf3b3d066a06674a8c52558ab9492f30c5ae284187aeec557",
                        "timestamp": "2021-08-24 21:45:27"
                    },
                    {
                        "value": "a8434f68a31083c67359af9407aa3b54503d42974b46679125464605581fea9c",
                        "timestamp": "2021-08-24 21:45:25"
                    },
                    {
                        "value": "4c3915e5204a8e78801e9875b601c9500fbe025c3c0a7a20cb7036a3a5215ac6",
                        "timestamp": "2021-08-24 21:45:25"
                    },
                    {
                        "value": "fd95a08f54f4b442b23873adfe2ca0585551e878f89fc7f78ecbcbbb4c36a2f9",
                        "timestamp": "2021-08-24 21:45:25"
                    },
                    {
                        "value": "2af2563062749b7f8865f02f8b1dd3fa4af532a798c05f37fb7c130b16b0cc36",
                        "timestamp": "2021-08-24 21:45:24"
                    },
                    {
                        "value": "d454a9c6e2d6831e95f1292797b2fcbcbc7a0764c457232e12c3f582ced61894",
                        "timestamp": "2021-08-24 21:45:24"
                    },
                    {
                        "value": "123f8cec3ea0bc986981a142bc15c08d28a37b48774b5829c946404d59823f3d",
                        "timestamp": "2021-08-24 21:45:23"
                    },
                    {
                        "value": "2c800998e44734544a52fbef4fa3866ffee86c253f9d6b89e871c743a1fda19c",
                        "timestamp": "2021-08-24 21:45:23"
                    },
                    {
                        "value": "85b6ebcaa76aacb266f7f781dce3801d80c340b705e22520e96650bf726983cb",
                        "timestamp": "2021-08-24 21:45:23"
                    },
                    {
                        "value": "da47da51faf855f23590e30f2607dcb05452cb62df93028508c1a05714c28d67",
                        "timestamp": "2021-08-24 08:50:51"
                    },
                    {
                        "value": "67a75ff51c68190dc442ff559b946c8db7c1f9dd3073990898c0e9f93d1fed0b",
                        "timestamp": "2021-08-24 08:50:49"
                    },
                    {
                        "value": "a35518b5be67fad36ce6037f2c79d85fa1f9deab01aac9e34c21fde5f2b13eb8",
                        "timestamp": "2021-08-24 08:50:48"
                    },
                    {
                        "value": "5c062724b5bfe857fb28cf9a31e2ca9cba9f0223ec4d719be0dbc99ce8b32ab3",
                        "timestamp": "2021-08-24 08:50:47"
                    },
                    {
                        "value": "1df977d957e8ae492b1e90d63a0b18b24b7d78fff324a5aa144a01dc4202fe2f",
                        "timestamp": "2021-08-17 00:30:32"
                    },
                    {
                        "value": "ba7af6633708c2b4a08cd8113801aed11a649b2dfa409adcfccf54009fe8097c",
                        "timestamp": "2021-08-17 00:30:32"
                    },
                    {
                        "value": "d0758e186001b05baf164d3dbb5a2b7c9f31371e96911e34dab095c38fecba3c",
                        "timestamp": "2021-08-17 00:30:31"
                    },
                    {
                        "value": "23302d8b74226e4bfdb5569da590c97462cd914f75a3b5a38d100bcd129094ed",
                        "timestamp": "2021-08-17 00:30:31"
                    },
                    {
                        "value": "b3b9ab6055b5f12409d1bd990f442f5ed9abf7c6e45d27e49aaeeb64bc29525d",
                        "timestamp": "2021-08-17 00:30:28"
                    },
                    {
                        "value": "3f5a728ce743dca1ff2ad19392579f7f60c1e68b8fa6793073691f1d1e414740",
                        "timestamp": "2021-08-17 00:30:28"
                    },
                    {
                        "value": "ec2d7c2ee1e9efbd894f541b1fdd302be1ed97628a46e0919af03d78bcf5ffdf",
                        "timestamp": "2021-08-17 00:30:27"
                    },
                    {
                        "value": "19d3e9653444cd66f7579eb188176c637a47e1da81afc4ad9042c654988bdb39",
                        "timestamp": "2021-08-17 00:30:27"
                    },
                    {
                        "value": "4ff5aa0a2625fd3b8be3f1137d76714e2d635b9987e2b0dad668c42a11eb0b30",
                        "timestamp": "2021-08-17 00:30:26"
                    },
                    {
                        "value": "c4d36bc68593cf49df65ebce1bbf3bf73e2422c06d490b4cce90d84d494c2118",
                        "timestamp": "2021-08-17 00:30:26"
                    },
                    {
                        "value": "f4c7802d8f6ce5f409795996c096e196c4977ce4d8925507eab0f862f954fef5",
                        "timestamp": "2021-08-17 00:30:25"
                    },
                    {
                        "value": "df52242510b70aa54d66b0626624066ece6f8bd5384aa4897778bddfae321c51",
                        "timestamp": "2021-08-17 00:30:25"
                    },
                    {
                        "value": "55da2aa80bd64db9aebd250ce15446ab248255669e64ef3353b7eaae000c6241",
                        "timestamp": "2021-08-17 00:30:23"
                    },
                    {
                        "value": "ca46080e121408d9624322e505dc2178ba99e15871c90e101b54e42ea7b54a96",
                        "timestamp": "2021-08-17 00:30:29"
                    },
                    {
                        "value": "09bd8c037be4976e725e50f233c2276e1db62eac075b1c551921c10ea6f05d3b",
                        "timestamp": "2021-08-17 00:30:28"
                    },
                    {
                        "value": "06f3b4ea93d15ca7877062070615c690e51f8c0071de76891500c107d0daabdd",
                        "timestamp": "2021-08-17 00:30:21"
                    },
                    {
                        "value": "94ae283f87d31de4b9ae3344c469239be735621cd7546e95dfa70afa028507a0",
                        "timestamp": "2021-08-17 00:30:25"
                    },
                    {
                        "value": "ca607b3f03dd62f3ac9648087f30f502540be9944ef38b3ca622c2b9bcef06b9",
                        "timestamp": "2021-08-17 00:30:20"
                    },
                    {
                        "value": "a2f48f1afee4a741ecd6c97659e40ae49e81397fc3b9ddd0169953f93b2482d1",
                        "timestamp": "2021-08-17 00:30:19"
                    },
                    {
                        "value": "8789bff93b2ad5b1029bea7e321019077f62fb4215335218f1b9a6177b278898",
                        "timestamp": "2021-08-17 00:30:23"
                    },
                    {
                        "value": "92204e0e3f9296e8e8d07fb7d8155d22a633812360bbfa4bd7221147820c6b24",
                        "timestamp": "2021-05-23 03:00:36"
                    },
                    {
                        "value": "808fd53f443ad7143a0551aac9eb73ea4c29929a7627ede4cd1813548fdb9008",
                        "timestamp": "2021-05-23 03:00:36"
                    },
                    {
                        "value": "8c8d6d7a1c6ce3ae445a85b32aac61eef74d00effcaaac0379d33cd299008418",
                        "timestamp": "2021-05-23 03:00:36"
                    },
                    {
                        "value": "f0fa2d9242399218c952cf0179b75efe987e4e4338be9fb6b1bc25b317bbe39a",
                        "timestamp": "2021-05-23 03:00:36"
                    },
                    {
                        "value": "86ae5b33931c65515c845dc921880f1a3c90fc756a75df7c839243f904123ed1",
                        "timestamp": "2021-03-25 09:30:24"
                    },
                    {
                        "value": "5bdc5259703c04247d8fb65da833039b9149df10f4adbe1e27274bef66ec0ef0",
                        "timestamp": "2021-03-25 09:30:24"
                    },
                    {
                        "value": "f18a9719d767a2be2f5a9c78e04dda71df60a5345156e997458cf91970fcf5b7",
                        "timestamp": "2021-03-25 09:30:23"
                    },
                    {
                        "value": "62ecbb932e0211217f62bd0d3d5744a54104e2431e27ff7a7822a25d04a8581b",
                        "timestamp": "2021-03-25 09:30:23"
                    }
                ]
            }
        }
    ],
    "last_ioc_update": "2023-11-16 04:15:08",
    "file_name": "danabot",
    "analysis": null,
    "articles": [
        {
            "data_url": "https://flashpoint.io/blog/danabot-version-3-what-you-need-to-know/",
            "date": "2023-07-17",
            "organization": "Flashpoint",
            "author": "Flashpoint",
            "title": "The New Release of Danabot Version 3: What You Need to Know",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/technical-analysis-danabot-obfuscation-techniques",
            "date": "2022-12-06",
            "organization": "Zscaler",
            "author": "Dennis Schwarz",
            "title": "Technical Analysis of DanaBot Obfuscation Techniques",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://securelist.com/nullmixer-oodles-of-trojans-in-a-single-dropper/107498/",
            "date": "2022-09-26",
            "organization": "Kaspersky",
            "author": "Haim Zigel",
            "title": "NullMixer: oodles of Trojans in a single dropper",
            "categories": [
                "ColdStealer",
                "DanaBot",
                "GCleaner",
                "Nullmixer",
                "PrivateLoader",
                "PseudoManuscrypt",
                "RedLine Stealer",
                "SmokeLoader",
                "Vidar"
            ]
        },
        {
            "data_url": "https://blog.sekoia.io/privateloader-the-loader-of-the-prevalent-ruzki-ppi-service/",
            "date": "2022-09-15",
            "organization": "Sekoia",
            "author": "Threat & Detection Research Team",
            "title": "PrivateLoader: the loader of the prevalent ruzki PPI service",
            "categories": [
                "Agent Tesla",
                "Coinminer",
                "DanaBot",
                "DCRat",
                "Eternity Stealer",
                "Glupteba",
                "Mars Stealer",
                "NetSupportManager RAT",
                "Nymaim",
                "Nymaim2",
                "Phoenix Keylogger",
                "PrivateLoader",
                "Raccoon",
                "RedLine Stealer",
                "SmokeLoader",
                "Socelars",
                "STOP",
                "Vidar",
                "YTStealer"
            ]
        },
        {
            "data_url": "https://malverse.it/costruiamo-un-config-extractor-per-danabot-parte-1",
            "date": "2022-08-07",
            "organization": "Malverse",
            "author": "greenplan",
            "title": "Config Extractor per DanaBot (PARTE 1)",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/sites/default/files/publications/AA22-110A_Joint_CSA_Russian_State-Sponsored_and_Criminal_Cyber_Threats_to_Critical_Infrastructure_4_20_22_Final.pdf",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "AA22-110A Joint CSA: Russian State-Sponsored and Criminal Cyber  Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.cisa.gov/uscert/ncas/alerts/aa22-110a",
            "date": "2022-04-20",
            "organization": "CISA",
            "author": "CISA",
            "title": "Alert (AA22-110A): Russian State-Sponsored and Criminal Cyber Threats to Critical Infrastructure",
            "categories": [
                "VPNFilter",
                "BlackEnergy",
                "DanaBot",
                "DoppelDridex",
                "Emotet",
                "EternalPetya",
                "GoldMax",
                "Industroyer",
                "Sality",
                "SmokeLoader",
                "TrickBot",
                "Triton",
                "Zloader",
                "Killnet"
            ]
        },
        {
            "data_url": "https://security-soup.net/decoding-a-danabot-downloader/",
            "date": "2022-03-15",
            "organization": "Security Soup Blog",
            "author": "Ryan Campbell",
            "title": "Decoding a DanaBot Downloader",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/danabot-launches-ddos-attack-against-ukrainian-ministry-defense",
            "date": "2022-03-02",
            "organization": "Zscaler",
            "author": "Dennis Schwarz",
            "title": "DanaBot Launches DDoS Attack Against the Ukrainian Ministry of Defense",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://assets.virustotal.com/reports/2021trends.pdf",
            "date": "2022-03",
            "organization": "VirusTotal",
            "author": "VirusTotal",
            "title": "VirusTotal's 2021 Malware Trends Report",
            "categories": [
                "Anubis",
                "AsyncRAT",
                "BlackMatter",
                "Cobalt Strike",
                "DanaBot",
                "Dridex",
                "Khonsari",
                "MimiKatz",
                "Mirai",
                "Nanocore RAT",
                "Orcus RAT"
            ]
        },
        {
            "data_url": "https://asec.ahnlab.com/en/30445/",
            "date": "2022-01-03",
            "organization": "AhnLab",
            "author": "ASEC Analysis Team",
            "title": "Distribution of Redline Stealer Disguised as Software Crack",
            "categories": [
                "DanaBot",
                "RedLine Stealer",
                "Vidar"
            ]
        },
        {
            "data_url": "https://www.mandiant.com/resources/supply-chain-node-js",
            "date": "2021-12-15",
            "organization": "Mandiant",
            "author": "Alessandro Parilli",
            "title": "No Unaccompanied Miners: Supply Chain Compromises Through Node.js Packages (UNC3379)",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://blogs.blackberry.com/en/2021/11/threat-thursday-danabot-malware-as-a-service",
            "date": "2021-11-18",
            "organization": "Blackberry",
            "author": "The BlackBerry Research & Intelligence Team",
            "title": "Threat Thursday: DanaBot\u2019s Evolution from Bank Fraud to DDos Attacks",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://twitter.com/f0wlsec/status/1459892481760411649",
            "date": "2021-11-14",
            "organization": "Twitter (@f0wlsec)",
            "author": "Marius Genheimer",
            "title": "A static config extractor for the main component of DanaBot",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.bitdefender.com/blog/hotforsecurity/popular-npm-repositories-compromised-in-man-in-the-middle-attack/",
            "date": "2021-11-08",
            "organization": "Bitdefender",
            "author": "Silviu Stahie",
            "title": "Popular NPM Repositories Compromised in Man-in-the-Middle Attack",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.zscaler.com/blogs/security-research/spike-danabot-malware-activity",
            "date": "2021-11-05",
            "organization": "Zscaler",
            "author": "Dennis Schwarz",
            "title": "Spike in DanaBot Malware Activity",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://news.sophos.com/en-us/2021/10/24/node-poisoning-hijacked-package-delivers-coin-miner-and-credential-stealing-backdoor",
            "date": "2021-10-24",
            "organization": "Sophos",
            "author": "Sean Gallagher",
            "title": "Node poisoning: hijacked package delivers coin miner and credential-stealing backdoor",
            "categories": [
                "DanaBot",
                "Monero Miner"
            ]
        },
        {
            "data_url": "https://blog.lexfo.fr/danabot-malware.html",
            "date": "2021-09-20",
            "organization": "Lexfo",
            "author": "Lexfo",
            "title": "DanaBot Communications Update",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://securelist.com/financial-cyberthreats-in-2020/101638/",
            "date": "2021-03-31",
            "organization": "Kaspersky",
            "author": "Kaspersky",
            "title": "Financial Cyberthreats in 2020",
            "categories": [
                "BetaBot",
                "DanaBot",
                "Emotet",
                "Gozi",
                "Ramnit",
                "RTM",
                "SpyEye",
                "TrickBot",
                "Zeus"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2021GTR.pdf",
            "date": "2021-02-23",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2021 Global Threat Report",
            "categories": [
                "RansomEXX",
                "Amadey",
                "Anchor",
                "Avaddon",
                "BazarBackdoor",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "Cutwail",
                "DanaBot",
                "DarkSide",
                "DoppelPaymer",
                "Dridex",
                "Egregor",
                "Emotet",
                "Hakbit",
                "IcedID",
                "JSOutProx",
                "KerrDown",
                "LockBit",
                "Mailto",
                "Maze",
                "MedusaLocker",
                "Mespinoza",
                "Mount Locker",
                "NedDnLoader",
                "Nemty",
                "Pay2Key",
                "PlugX",
                "Pushdo",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "Quasar RAT",
                "RagnarLocker",
                "Ragnarok",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "Sekhmet",
                "ShadowPad",
                "SmokeLoader",
                "Snake",
                "SUNBURST",
                "SunCrypt",
                "TEARDROP",
                "TrickBot",
                "WastedLocker",
                "Winnti",
                "Zloader",
                "KNOCKOUT SPIDER",
                "OUTLAW SPIDER",
                "RIDDLE SPIDER",
                "SOLAR SPIDER",
                "VIKING SPIDER"
            ]
        },
        {
            "data_url": "https://www.cronup.com/post/de-ataque-con-malware-a-incidente-de-ransomware",
            "date": "2021-02-02",
            "organization": "CRONUP",
            "author": "Germ\u00e1n Fern\u00e1ndez",
            "title": "De ataque con Malware a incidente de Ransomware",
            "categories": [
                "Avaddon",
                "BazarBackdoor",
                "Buer",
                "Clop",
                "Cobalt Strike",
                "Conti",
                "DanaBot",
                "Dharma",
                "Dridex",
                "Egregor",
                "Emotet",
                "Empire Downloader",
                "FriedEx",
                "GootKit",
                "IcedID",
                "MegaCortex",
                "Nemty",
                "Phorpiex",
                "PwndLocker",
                "PyXie",
                "QakBot",
                "RansomEXX",
                "REvil",
                "Ryuk",
                "SDBbot",
                "SmokeLoader",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/blog/threat-insight/new-year-new-version-danabot",
            "date": "2021-01-26",
            "organization": "Proofpoint",
            "author": "Dennis Schwarz",
            "title": "New Year, New Version of DanaBot",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/",
            "date": "2021-01-09",
            "organization": "Marco Ramilli's Blog",
            "author": "Marco Ramilli",
            "title": "Command and Control Traffic Patterns",
            "categories": [
                "ostap",
                "LaZagne",
                "Agent Tesla",
                "Azorult",
                "Buer",
                "Cobalt Strike",
                "DanaBot",
                "DarkComet",
                "Dridex",
                "Emotet",
                "Formbook",
                "IcedID",
                "ISFB",
                "NetWire RC",
                "PlugX",
                "Quasar RAT",
                "SmokeLoader",
                "TrickBot"
            ]
        },
        {
            "data_url": "https://www.f5.com/labs/articles/education/banking-trojans-a-reference-guide-to-the-malware-family-tree",
            "date": "2020-08-09",
            "organization": "F5 Labs",
            "author": "Remi Cohen",
            "title": "Banking Trojans: A Reference Guide to the Malware Family Tree",
            "categories": [
                "BackSwap",
                "Carberp",
                "Citadel",
                "DanaBot",
                "Dridex",
                "Dyre",
                "Emotet",
                "Gozi",
                "Kronos",
                "PandaBanker",
                "Ramnit",
                "Shylock",
                "SpyEye",
                "Tinba",
                "TrickBot",
                "Vawtrak",
                "Zeus"
            ]
        },
        {
            "data_url": "https://www.spamhaus.org/news/images/botnet-report-2020-q2/2020-q2-spamhaus-botnet-threat-report.pdf",
            "date": "2020-07-30",
            "organization": "Spamhaus",
            "author": "Spamhaus Malware Labs",
            "title": "Spamhaus Botnet Threat Update Q2 2020",
            "categories": [
                "AdWind",
                "Agent Tesla",
                "Arkei Stealer",
                "AsyncRAT",
                "Ave Maria",
                "Azorult",
                "DanaBot",
                "Emotet",
                "IcedID",
                "ISFB",
                "KPOT Stealer",
                "Loki Password Stealer (PWS)",
                "Nanocore RAT",
                "NetWire RC",
                "NjRAT",
                "Pony",
                "Raccoon",
                "RedLine Stealer",
                "Remcos",
                "Zloader"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/wp-content/uploads/2020/07/ESET_Threat_Report_Q22020.pdf",
            "date": "2020-07-29",
            "organization": "ESET Research",
            "author": "welivesecurity",
            "title": "THREAT REPORT Q2 2020",
            "categories": [
                "DEFENSOR ID",
                "HiddenAd",
                "Bundlore",
                "Pirrit",
                "Agent.BTZ",
                "Cerber",
                "ClipBanker",
                "CROSSWALK",
                "Cryptowall",
                "CTB Locker",
                "DanaBot",
                "Dharma",
                "Formbook",
                "Gandcrab",
                "Grandoreiro",
                "Houdini",
                "ISFB",
                "LockBit",
                "Locky",
                "Mailto",
                "Maze",
                "Microcin",
                "Nemty",
                "NjRAT",
                "Phobos",
                "PlugX",
                "Pony",
                "REvil",
                "Socelars",
                "STOP",
                "Tinba",
                "TrickBot",
                "WannaCryptor"
            ]
        },
        {
            "data_url": "https://malwareandstuff.com/deobfuscating-danabots-api-hashing/",
            "date": "2020-07-12",
            "organization": "Malware and Stuff",
            "author": "Andreas Klopsch",
            "title": "Deobfuscating DanaBot\u2019s API Hashing",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.lastline.com/labsblog/evolution-of-excel-4-0-macro-weaponization/",
            "date": "2020-06-02",
            "organization": "Lastline Labs",
            "author": "James Haughom",
            "title": "Evolution of Excel 4.0 Macro Weaponization",
            "categories": [
                "Agent Tesla",
                "DanaBot",
                "ISFB",
                "TrickBot",
                "Zloader"
            ]
        },
        {
            "data_url": "https://resources.malwarebytes.com/files/2020/05/CTNT_Q1_2020_COVID-Report_Final.pdf",
            "date": "2020-05-21",
            "organization": "Malwarebytes",
            "author": "Malwarebytes Labs",
            "title": "Cybercrime tactics and techniques",
            "categories": [
                "Ave Maria",
                "Azorult",
                "DanaBot",
                "Loki Password Stealer (PWS)",
                "NetWire RC"
            ]
        },
        {
            "data_url": "https://go.crowdstrike.com/rs/281-OBQ-266/images/Report2020CrowdStrikeGlobalThreatReport.pdf",
            "date": "2020-03-04",
            "organization": "CrowdStrike",
            "author": "CrowdStrike",
            "title": "2020 CrowdStrike Global Threat Report",
            "categories": [
                "MESSAGETAP",
                "More_eggs",
                "8.t Dropper",
                "Anchor",
                "BabyShark",
                "BadNews",
                "Clop",
                "Cobalt Strike",
                "CobInt",
                "Cobra Carbon System",
                "Cutwail",
                "DanaBot",
                "Dharma",
                "DoppelDridex",
                "DoppelPaymer",
                "Dridex",
                "Emotet",
                "FlawedAmmyy",
                "FriedEx",
                "Gandcrab",
                "Get2",
                "IcedID",
                "ISFB",
                "KerrDown",
                "LightNeuron",
                "LockerGoga",
                "Maze",
                "MECHANICAL",
                "Necurs",
                "Nokki",
                "Outlook Backdoor",
                "Phobos",
                "Predator The Thief",
                "QakBot",
                "REvil",
                "RobinHood",
                "Ryuk",
                "SDBbot",
                "Skipper",
                "SmokeLoader",
                "TerraRecon",
                "TerraStealer",
                "TerraTV",
                "TinyLoader",
                "TrickBot",
                "Vidar",
                "Winnti",
                "ANTHROPOID SPIDER",
                "APT23",
                "APT31",
                "APT39",
                "APT40",
                "BlackTech",
                "BuhTrap",
                "Charming Kitten",
                "CLOCKWORK SPIDER",
                "DOPPEL SPIDER",
                "FIN7",
                "Gamaredon Group",
                "GOBLIN PANDA",
                "MONTY SPIDER",
                "MUSTANG PANDA",
                "NARWHAL SPIDER",
                "NOCTURNAL SPIDER",
                "PINCHY SPIDER",
                "SALTY SPIDER",
                "SCULLY SPIDER",
                "SMOKY SPIDER",
                "Thrip",
                "VENOM SPIDER",
                "VICEROY TIGER"
            ]
        },
        {
            "data_url": "https://research.checkpoint.com/danabot-demands-a-ransom-payment/",
            "date": "2019-06-20",
            "organization": "Check Point",
            "author": "Yaroslav Harakhavik",
            "title": "DanaBot Demands a Ransom Payment",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.gdatasoftware.com/blog/2019/05/31695-strange-bits-smuggling-malware-github",
            "date": "2019-05-09",
            "organization": "G Data",
            "author": "G-Data",
            "title": "Strange Bits: HTML Smuggling and GitHub Hosted Malware",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://enterprise.verizon.com/resources/reports/2019-data-breach-investigations-report.pdf",
            "date": "2019-05-08",
            "organization": "Verizon Communications Inc.",
            "author": "Verizon Communications Inc.",
            "title": "2019 Data Breach Investigations Report",
            "categories": [
                "BlackEnergy",
                "Cobalt Strike",
                "DanaBot",
                "Gandcrab",
                "GreyEnergy",
                "Mirai",
                "Olympic Destroyer",
                "SamSam"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/danabot-control-panel-revealed",
            "date": "2019-03-13",
            "organization": "Proofpoint",
            "author": "Dennis Schwarz",
            "title": "DanaBot control panel revealed",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.fortinet.com/blog/threat-research/breakdown-of-a-targeted-danabot-attack.html",
            "date": "2019-03-01",
            "organization": "Fortinet",
            "author": "FortiGuard SE Team",
            "title": "Breakdown of a Targeted DanaBot Attack",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2019/02/07/danabot-updated-new-cc-communication/",
            "date": "2019-02-07",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "DanaBot updated with new C&C communication",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://blog.yoroi.company/research/dissecting-the-danabot-paylaod-targeting-italy/",
            "date": "2018-12-20",
            "organization": "Yoroi",
            "author": "Davide Testa",
            "title": "Dissecting the Danabot Payload Targeting Italy",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/12/06/danabot-evolves-beyond-banking-trojan-new-spam/",
            "date": "2018-12-06",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "DanaBot evolves beyond banking Trojan with new spam\u2011sending capability",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/danabot-gains-popularity-and-targets-us-organizations-large-campaigns",
            "date": "2018-10-02",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "DanaBot Gains Popularity and Targets US Organizations in Large Campaigns",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.welivesecurity.com/2018/09/21/danabot-targeting-europe-adds-new-features/",
            "date": "2018-09-21",
            "organization": "ESET Research",
            "author": "ESET Research",
            "title": "DanaBot shifts its targeting to Europe, adds new features",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.trustwave.com/Resources/SpiderLabs-Blog/DanaBot-Riding-Fake-MYOB-Invoice-Emails/",
            "date": "2018-07-16",
            "organization": "SpiderLabs Blog",
            "author": "Fahim Abbasi",
            "title": "DanaBot Riding Fake MYOB Invoice Emails",
            "categories": [
                "DanaBot"
            ]
        },
        {
            "data_url": "https://www.proofpoint.com/us/threat-insight/post/danabot-new-banking-trojan-surfaces-down-under-0",
            "date": "2018-05-31",
            "organization": "Proofpoint",
            "author": "Proofpoint Staff",
            "title": "DanaBot - A new banking Trojan surfaces Down Under",
            "categories": [
                "DanaBot"
            ]
        }
    ],
    "mitre": []
};